import { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import { useWords } from '../context/WordContext'
import { speakWord, speakAsync } from '../utils/speech'
import { playCorrectSound, playIncorrectSound } from '../utils/sound'
import { WordEntry } from '../types'

const TOTAL_QUESTIONS = 20

export function Typing() {
  const { words, settings } = useWords()
  const [inputValue, setInputValue] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [finished, setFinished] = useState(false)
  const [score, setScore] = useState(0)
  const [wrongWords, setWrongWords] = useState<WordEntry[]>([])
  const [showPinyin, setShowPinyin] = useState(() => {
    const saved = localStorage.getItem('hsk4_typing_showPinyin')
    return saved !== null ? JSON.parse(saved) : true
  })
  const playedWordIdRef = useRef<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const feedbackRef = useRef(feedback)
  const finishedRef = useRef(finished)
  const currentIndexRef = useRef(currentIndex)

  // Keep refs in sync
  feedbackRef.current = feedback
  finishedRef.current = finished
  currentIndexRef.current = currentIndex

  // Random 20 words
  const quizWords = useMemo(() => {
    const shuffled = [...words].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, TOTAL_QUESTIONS)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const currentWord = quizWords[currentIndex] || null

  // Auto-play speech on word change
  useEffect(() => {
    if (!currentWord) return
    playedWordIdRef.current = null
    const timer = setTimeout(() => {
      if (playedWordIdRef.current === null) {
        playedWordIdRef.current = currentWord.id
        window.speechSynthesis.cancel()
        speakAsync(currentWord.hanzi, settings.speechRate, 'zh-CN')
      }
    }, 150)
    return () => clearTimeout(timer)
  }, [currentWord?.id, settings.speechRate])

  // Focus input on word change
  useEffect(() => {
    if (!finished) {
      inputRef.current?.focus()
    }
  }, [currentIndex, finished])

  // Save showPinyin to localStorage
  useEffect(() => {
    localStorage.setItem('hsk4_typing_showPinyin', JSON.stringify(showPinyin))
  }, [showPinyin])

  // Keyboard shortcut: ArrowRight to go next
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && feedbackRef.current === 'correct' && !finishedRef.current) {
        goNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSubmit = useCallback(() => {
    if (!currentWord || feedback === 'correct') return
    const trimmed = inputValue.trim()
    if (trimmed === currentWord.hanzi) {
      setFeedback('correct')
      setScore(s => s + 1)
      playCorrectSound()
    } else {
      setFeedback('incorrect')
      setWrongWords(prev => {
        if (prev.find(w => w.id === currentWord.id)) return prev
        return [...prev, currentWord]
      })
      playIncorrectSound()
    }
  }, [currentWord, feedback, inputValue])

  const goNext = useCallback(() => {
    if (currentIndexRef.current + 1 >= TOTAL_QUESTIONS) {
      setFinished(true)
    } else {
      setCurrentIndex(i => i + 1)
      setFeedback(null)
      setInputValue('')
    }
  }, [])

  const handleNext = useCallback(() => {
    goNext()
  }, [goNext])

  const handleRestart = useCallback(() => {
    window.location.reload()
  }, [])

  const handleInputKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (feedback === 'correct') {
        handleNext()
      } else {
        handleSubmit()
      }
    }
  }, [feedback, handleNext, handleSubmit])

  // ---- Result screen ----
  if (finished) {
    return (
      <div className="typing-page">
        <div className="typing-result">
          <h2 className="typing-result-title">タイピング結果</h2>
          <div className="typing-score-circle">
            <span className="typing-score-number">{score}</span>
            <span className="typing-score-divider">/</span>
            <span className="typing-score-total">{TOTAL_QUESTIONS}</span>
          </div>
          <p className="typing-score-percent">
            正答率: {Math.round((score / TOTAL_QUESTIONS) * 100)}%
          </p>

          {wrongWords.length > 0 && (
            <div className="typing-wrong-words">
              <h3 className="typing-wrong-title">間違えた単語（{wrongWords.length}語）</h3>
              <ul className="typing-wrong-list">
                {wrongWords.map(w => (
                  <li key={w.id} className="typing-wrong-item">
                    <div className="typing-wrong-main">
                      <span className="typing-wrong-hanzi">{w.hanzi}</span>
                      <button
                        className="typing-speak-btn"
                        onClick={() => speakWord(w.hanzi, settings.speechRate)}
                        title="発音を再生"
                      >
                        🔊
                      </button>
                    </div>
                    <div className="typing-wrong-pinyin">{w.pinyin}</div>
                    <div className="typing-wrong-meaning">{w.meaning}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {wrongWords.length === 0 && (
            <p className="typing-perfect">🎉 全問正解！完璧です！</p>
          )}

          <button className="typing-btn typing-restart-btn" onClick={handleRestart}>
            もう一度
          </button>
        </div>
      </div>
    )
  }

  // ---- Active quiz ----
  return (
    <div className="typing-page">
      <div className="typing-progress">
        <span className="typing-progress-text">{currentIndex + 1} / {TOTAL_QUESTIONS}</span>
        <div className="typing-progress-bar">
          <div
            className="typing-progress-fill"
            style={{ width: `${((currentIndex) / TOTAL_QUESTIONS) * 100}%` }}
          />
        </div>
      </div>

      {currentWord && (
        <div className="typing-card">
          <div className="typing-hanzi-display">
            {currentWord.hanzi}
          </div>
          <div className="typing-meaning-display">
            {currentWord.meaning}
          </div>

          <label className="typing-pinyin-toggle">
            <input
              type="checkbox"
              checked={showPinyin}
              onChange={(e) => setShowPinyin(e.target.checked)}
            />
            <span>ピンインを表示</span>
          </label>
          {showPinyin && (
            <div className="typing-pinyin-display">
              {currentWord.pinyin}
            </div>
          )}

          <div className="typing-input-area">
            <input
              ref={inputRef}
              type="text"
              className={`typing-input${feedback === 'correct' ? ' typing-input--correct' : ''}${feedback === 'incorrect' ? ' typing-input--incorrect' : ''}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="ここに漢字を入力..."
              disabled={feedback === 'correct'}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              inputMode="text"
            />
          </div>

          <div className="typing-actions">
            {feedback !== 'correct' && (
              <button className="typing-btn typing-submit-btn" onClick={handleSubmit}>
                確認
              </button>
            )}
            {feedback === 'correct' && (
              <button className="typing-btn typing-next-btn" onClick={handleNext}>
                次へ →
              </button>
            )}
          </div>

          {feedback === 'correct' && (
            <div className="typing-feedback typing-feedback--correct">
              ✓ 正解！
            </div>
          )}
          {feedback === 'incorrect' && (
            <div className="typing-feedback typing-feedback--incorrect">
              ✗ 違います、もう一度
            </div>
          )}

        </div>
      )}
    </div>
  )
}
