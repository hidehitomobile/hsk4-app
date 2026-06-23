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
import { AutoListen } from './components/AutoListen'
import { useWords } from './context/WordContext'
import { useEffect } from 'react'
import { speakAsync } from './utils/speech'
import wordsData from './data/words.json'
import { WordEntry } from './types'
import './styles/index.css'

function LearnPage() {
  const { settings, currentWord, lastPlayedWordIdRef, isFirstAppMountRef } = useWords()

  useEffect(() => {
    if (!settings.autoPlay || !currentWord) return

    // アプリ起動直後はスキップ（リロード時の不要な再生を防止）
    if (isFirstAppMountRef.current) {
      isFirstAppMountRef.current = false
      lastPlayedWordIdRef.current = currentWord.id
      return
    }

    // 前回と同じ単語ならスキップ（タブ切替で再マウントされたが単語未変更）
    if (lastPlayedWordIdRef.current === currentWord.id) return
    lastPlayedWordIdRef.current = currentWord.id

    window.speechSynthesis.cancel()
    speakAsync(currentWord.hanzi, settings.speechRate, 'zh-CN').then(() => {
      if (settings.autoPlayExample) {
        speakAsync(currentWord.example, settings.speechRate, 'zh-CN')
      }
    })
  }, [currentWord?.id, settings.autoPlay, settings.speechRate, settings.autoPlayExample, lastPlayedWordIdRef, isFirstAppMountRef])

  return (
    <div className="learn-page">
      <SearchBar />
      <ProgressBar />
      <CategoryFilter />
      <WordCard />
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
            <Route path="/autolisten" element={<AutoListen />} />
          </Routes>
        </main>
      </div>
    </WordProvider>
  )
}
