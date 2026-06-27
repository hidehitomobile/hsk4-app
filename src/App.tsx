import { Routes, Route } from 'react-router-dom'
import { WordProvider } from './context/WordContext'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { CategoryFilter } from './components/CategoryFilter'
import { ProgressBar } from './components/ProgressBar'
import { WordCard } from './components/WordCard'
import { WordList } from './components/WordList'
import { Quiz } from './components/Quiz'
import { Settings } from './components/Settings'
import { Typing } from './components/Typing'
import { useWords } from './context/WordContext'
import { useEffect, useState, useCallback, useRef } from 'react'
import { speakAsync } from './utils/speech'
import wordsData from './data/words.json'
import { WordEntry } from './types'
import './styles/index.css'

function LearnPage() {
  const { settings, filteredWords, currentIndex, setCurrentIndex, goNext, goPrev } = useWords()

  // ---------- リスニングモード state（常時自動再生）----------
  const [listenStatus, setListenStatus] = useState<'playing' | 'paused'>('paused')
  const [listenFinished, setListenFinished] = useState(false)
  const [listenRestart, setListenRestart] = useState(0)

  // リスニングモード用 refs
  const settingsRef = useRef(settings)
  settingsRef.current = settings
  const currentIndexRef = useRef(currentIndex)
  currentIndexRef.current = currentIndex
  const filteredWordsRef = useRef(filteredWords)
  filteredWordsRef.current = filteredWords
  const listenGenRef = useRef(0)

  // ---------- リスニング自動再生ループ ----------
  useEffect(() => {
    if (listenStatus !== 'playing' || listenFinished) return

    const myGen = ++listenGenRef.current
    const words = filteredWordsRef.current

    const run = async () => {
      for (let idx = currentIndexRef.current; idx < words.length; idx++) {
        if (listenGenRef.current !== myGen) return

        const word = words[idx]
        if (!word) continue

        const s = settingsRef.current

        window.speechSynthesis.cancel()
        await new Promise(r => setTimeout(r, 400))
        if (listenGenRef.current !== myGen) return

        // 1. 単語（中国語）
        await speakAsync(word.hanzi, s.speechRate, 'zh-CN')
        if (listenGenRef.current !== myGen) return

        // 2. 日本語訳
        await speakAsync(word.meaning, s.japaneseRate, 'ja-JP')
        if (listenGenRef.current !== myGen) return

        if (s.autoPlayExample) {
          // 3. 例文（中国語）
          await speakAsync(word.example, s.speechRate * 0.95, 'zh-CN')
          if (listenGenRef.current !== myGen) return

          // 4. 例文の日本語訳
          await speakAsync(word.exampleMeaning, s.japaneseRate, 'ja-JP')
          if (listenGenRef.current !== myGen) return
        }

        // 設定された間隔
        await new Promise(r => setTimeout(r, s.listenInterval * 1000))
        if (listenGenRef.current !== myGen) return

        setCurrentIndex(idx + 1)
      }

      if (listenGenRef.current !== myGen) return
      setListenFinished(true)
      setListenStatus('paused')
    }

    run()

    return () => {
      listenGenRef.current++ // この世代を無効化
      window.speechSynthesis.cancel()
    }
  }, [listenStatus, listenFinished, listenRestart])

  // ---------- 手動ナビゲーション時の自動再生（リスニングループ停止中のみ）----------
  const prevIndexRef = useRef(currentIndex)
  useEffect(() => {
    // リスニングループ再生中はスキップ（ループ側で再生管理）
    if (listenStatus === 'playing') {
      prevIndexRef.current = currentIndex
      return
    }
    // 初回マウント・同一単語はスキップ
    if (prevIndexRef.current === currentIndex) return

    const word = filteredWordsRef.current[currentIndex]
    if (!word) return

    prevIndexRef.current = currentIndex

    window.speechSynthesis.cancel()
    setTimeout(() => {
      const s = settingsRef.current
      speakAsync(word.hanzi, s.speechRate, 'zh-CN').then(() => {
        if (s.autoPlayExample) {
          speakAsync(word.example, s.speechRate, 'zh-CN')
        }
      })
    }, 80)
  }, [currentIndex, listenStatus])

  // ---------- リスニング操作 ----------
  const abortListen = useCallback(() => {
    listenGenRef.current++
    window.speechSynthesis.cancel()
  }, [])

  const handleListenToggle = useCallback(() => {
    if (listenFinished) {
      abortListen()
      setCurrentIndex(0)
      setListenFinished(false)
      setListenStatus('playing')
    } else if (listenStatus === 'playing') {
      abortListen()
      setListenStatus('paused')
    } else {
      setListenStatus('playing')
    }
  }, [listenFinished, listenStatus, setCurrentIndex, abortListen])

  const handleListenSeek = useCallback((index: number) => {
    abortListen()
    setCurrentIndex(index)
    setListenFinished(false)
    setListenStatus('playing')
  }, [setCurrentIndex, abortListen])

  const interruptListen = useCallback(() => {
    if (listenStatus === 'playing') {
      abortListen()
      setListenStatus('paused')
    }
  }, [listenStatus, abortListen])

  // 自動送り中に次へ/前へでスキップ（再生を止めずに位置だけ移動）
  const handleSkipNext = useCallback(() => {
    if (currentIndex >= filteredWords.length - 1) return
    abortListen()
    goNext()
    setListenRestart(c => c + 1)
  }, [currentIndex, filteredWords.length, abortListen, goNext])

  const handleSkipPrev = useCallback(() => {
    if (currentIndex <= 0) return
    abortListen()
    goPrev()
    setListenRestart(c => c + 1)
  }, [currentIndex, abortListen, goPrev])

  // スライダー移動時は表示回数カウントをスキップ
  const skipViewIncrementRef = useRef(false)

  // スライダーで単語切替（表示回数カウントしない）
  const handleSliderChange = useCallback((index: number) => {
    skipViewIncrementRef.current = true
    handleListenSeek(index)
  }, [handleListenSeek])

  return (
    <div className="learn-page">
      <CategoryFilter />
      {/* リスニングコントロールバー（常時表示） */}
      <div className="listen-bar">
        <input
          type="range"
          className="listen-bar-seek"
          min="1"
          max={filteredWords.length}
          step="1"
          value={currentIndex + 1}
          onChange={e => handleSliderChange(parseInt(e.target.value, 10) - 1)}
        />
        <div className="listen-bar-bottom">
          <span className="listen-bar-counter">{currentIndex + 1} / {filteredWords.length}語</span>
          <button className="listen-bar-btn" onClick={handleListenToggle}>
            {listenFinished ? '↺ 最初から' : listenStatus === 'playing' ? '■ 停止' : '▶ 自動送り'}
          </button>
        </div>
        {listenFinished && (
          <div className="listen-bar-finished">
            <p className="listen-bar-finished-text">🎉 全{filteredWords.length}語の再生が完了しました！</p>
          </div>
        )}
      </div>
      <WordCard
        interruptListen={interruptListen}
        onSkipNext={handleSkipNext}
        onSkipPrev={handleSkipPrev}
        skipViewIncrementRef={skipViewIncrementRef}
      />
    </div>
  )
}

function ListPage() {
  return (
    <div className="list-page">
      <SearchBar />
      <CategoryFilter />
      <ProgressBar />
      <WordList />
    </div>
  )
}

export default function App() {
  return (
    <WordProvider words={wordsData as WordEntry[]}>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LearnPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/typing" element={<Typing />} />
          </Routes>
        </main>
      </div>
    </WordProvider>
  )
}
