import { useState, useEffect, useRef, useCallback } from 'react'
import { useWords } from '../context/WordContext'
import { speakAsync } from '../utils/speech'

const INTERVAL_MS = 200 // 0.2秒固定

export function AutoListen() {
  const { filteredWords, settings } = useWords()

  const [internalIndex, setInternalIndex] = useState(0)
  const [status, setStatus] = useState<'playing' | 'paused'>('paused')
  const [finished, setFinished] = useState(false)
  const [playExamples, setPlayExamples] = useState(true)
  const settingsRef = useRef(settings)
  settingsRef.current = settings
  const internalIndexRef = useRef(internalIndex)
  internalIndexRef.current = internalIndex
  const playExamplesRef = useRef(playExamples)
  playExamplesRef.current = playExamples

  const total = filteredWords.length

  // 例文再生切替時：再生中ならキャンセルして即再開、停止中なら設定のみ変更
  const handlePlayExamplesToggle = useCallback((checked: boolean) => {
    window.speechSynthesis.cancel()
    setPlayExamples(checked)
    if (status === 'playing') {
      setFinished(false)
      setStatus('playing')
    }
  }, [status])

  // プログレス兼位置選択スライダー
  const handleSeek = useCallback((index: number) => {
    window.speechSynthesis.cancel()
    setInternalIndex(index)
    setFinished(false)
    setStatus('playing')
  }, [])

  const handleToggle = useCallback(() => {
    if (finished) {
      window.speechSynthesis.cancel()
      setInternalIndex(0)
      setFinished(false)
      setStatus('playing')
    } else if (status === 'playing') {
      window.speechSynthesis.cancel()
      setStatus('paused')
    } else {
      setStatus('playing')
    }
  }, [status, finished])

  // 再生: 単語 → 日本語訳 → 例文 → 例文の日本語訳 → 0.2秒待機 → 次
  useEffect(() => {
    if (status !== 'playing' || finished) return
    if (total === 0) return

    const currentWord = filteredWords[internalIndex]
    if (!currentWord) return

    let cancelled = false

    const run = async () => {
      const s = settingsRef.current

      await new Promise(r => setTimeout(r, 400))
      if (cancelled) return

      // 1. 単語（中国語・設定速度）
      await speakAsync(currentWord.hanzi, s.speechRate, 'zh-CN')
      if (cancelled) return

      // 2. 日本語訳（固定 1.2 倍速）
      await speakAsync(currentWord.meaning, 1.2, 'ja-JP')
      if (cancelled) return

      if (playExamplesRef.current) {
        // 3. 例文（中国語・設定速度）
        await speakAsync(currentWord.example, s.speechRate * 0.95, 'zh-CN')
        if (cancelled) return

        // 4. 例文の日本語訳（固定 1.2 倍速）
        await speakAsync(currentWord.exampleMeaning, 1.2, 'ja-JP')
        if (cancelled) return
      }

      // 固定間隔
      await new Promise(r => setTimeout(r, INTERVAL_MS))
      if (cancelled) return

      if (internalIndexRef.current >= total - 1) {
        setFinished(true)
        setStatus('paused')
        return
      }

      setInternalIndex(i => i + 1)
    }

    run()

    return () => {
      cancelled = true
    }
  }, [internalIndex, status, finished, total, filteredWords, playExamples])

  if (total === 0) {
    return (
      <div className="auto-listen-overlay">
        <div className="auto-listen-panel">
          <p className="auto-listen-empty">単語がありません</p>
        </div>
      </div>
    )
  }

  const currentWord = filteredWords[internalIndex] ?? filteredWords[0]
  const progress = internalIndex + 1

  return (
    <div className="auto-listen-overlay">
      <div className="auto-listen-panel">
        <div className="auto-listen-header">
          <span className="auto-listen-title">🔊 リスニングモード</span>
          <span className="auto-listen-progress">{progress} / {total}語</span>
        </div>

        {/* プログレスバー兼位置選択スライダー */}
        <input
          type="range"
          className="auto-listen-seek-bar"
          min="1"
          max={total}
          step="1"
          value={progress}
          onChange={e => handleSeek(parseInt(e.target.value, 10) - 1)}
        />

        <div className="auto-listen-word-info">
          <div className="auto-listen-hanzi">{currentWord.hanzi}</div>
          <div className="auto-listen-pinyin">{currentWord.pinyin}</div>
          <div className="auto-listen-meaning">{currentWord.meaning}</div>
          <div className={`auto-listen-example-section${!playExamples ? ' skipped' : ''}`}>
            <label className="auto-listen-checkbox-label">
              <input
                type="checkbox"
                checked={playExamples}
                onChange={e => handlePlayExamplesToggle(e.target.checked)}
              />
              読み上げる
            </label>
            <div className="auto-listen-example">{currentWord.example}</div>
            <div className="auto-listen-example-meaning">{currentWord.exampleMeaning}</div>
          </div>
        </div>

        <div className="auto-listen-controls">
          <button
            className="auto-listen-ctrl-btn"
            onClick={handleToggle}
          >
            {finished ? '↺ 最初から' : status === 'playing' ? '⏸ 一時停止' : '▶ 再開'}
          </button>
        </div>

        {finished && (
          <div className="auto-listen-finished">
            <p className="auto-listen-finished-text">🎉 全{total}語の再生が完了しました！</p>
          </div>
        )}
      </div>
    </div>
  )
}
