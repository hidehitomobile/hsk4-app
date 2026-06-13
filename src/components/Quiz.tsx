import { useState, useMemo, useEffect, useCallback, useRef } from 'react'
import { useWords } from '../context/WordContext'
import { speakWord } from '../utils/speech'
import { playCorrectSound, playIncorrectSound } from '../utils/sound'
import { categoryLabels } from '../utils/category'

type QuizMode = 'hanzi-to-meaning' | 'meaning-to-hanzi' | 'audio-to-hanzi'

interface QuizState {
  currentIndex: number
  score: number
  total: number
  finished: boolean
  wrongIds: number[]
}

/** 1問ごとの即時フィードバック状態 */
interface FeedbackState {
  selectedId: number      // 選んだ選択肢のID
  isCorrect: boolean
}

export function Quiz() {
  const { words, settings } = useWords()
  const [mode, setMode] = useState<QuizMode>('hanzi-to-meaning')

  // ランダムに出題順を生成
  const quizWords = useMemo(() => {
    const shuffled = [...words].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 20) // 1回20問
  }, [words])

  const [state, setState] = useState<QuizState>({
    currentIndex: 0,
    score: 0,
    total: 0,
    finished: false,
    wrongIds: [],
  })

  const [feedback, setFeedback] = useState<FeedbackState | null>(null)

  const currentWord = quizWords[state.currentIndex]

  // 選択肢を生成（currentWord.id が変わらない限り再計算しない）
  const options = useMemo(() => {
    if (!currentWord) return []
    const others = words.filter(w => w.id !== currentWord.id)
    const shuffled = [...others].sort(() => Math.random() - 0.5)
    return [currentWord, ...shuffled.slice(0, 3)].sort(() => Math.random() - 0.5)
  }, [currentWord?.id, words])

  // 問題表示時に音声を自動再生（初回含む）
  const prevWordIdRef = useRef<number | null>(null)
  useEffect(() => {
    if (!currentWord || state.finished) return
    if (prevWordIdRef.current === currentWord.id) return
    prevWordIdRef.current = currentWord.id

    const timer = setTimeout(() => {
      speakWord(currentWord.hanzi, settings.speechRate)
    }, 100)
    return () => clearTimeout(timer)
  }, [currentWord?.id, state.finished])

  const handleAnswer = (selectedWord: typeof quizWords[0]) => {
    if (feedback) return // フィードバック表示中は押せない

    const isCorrect = selectedWord.id === currentWord.id

    // 効果音を鳴らす
    if (isCorrect) {
      playCorrectSound()
    } else {
      playIncorrectSound()
    }

    // 即時フィードバック表示（次へボタンを押すまで待機）
    setFeedback({
      selectedId: selectedWord.id,
      isCorrect,
    })
  }

  const handleNext = useCallback(() => {
    if (!feedback) return

    const isCorrect = feedback.isCorrect

    setFeedback(null)
    setState(prev => {
      const nextIndex = prev.currentIndex + 1
      const isFinished = nextIndex >= quizWords.length
      return {
        currentIndex: nextIndex,
        score: prev.score + (isCorrect ? 1 : 0),
        total: prev.total + 1,
        finished: isFinished,
        wrongIds: isCorrect ? prev.wrongIds : [...prev.wrongIds, currentWord.id],
      }
    })
  }, [feedback, quizWords.length, currentWord?.id])

  // RIGHTキーで「次へ」を発動
  useEffect(() => {
    if (!feedback) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [feedback, handleNext])

  const restart = () => {
    setState({ currentIndex: 0, score: 0, total: 0, finished: false, wrongIds: [] })
    setFeedback(null)
  }

  if (state.finished) {
    const pct = quizWords.length > 0 ? Math.round((state.score / quizWords.length) * 100) : 0
    return (
      <div className="quiz-container">
        <h2>クイズ結果</h2>
        <div className="quiz-result">
          <div className="score-circle">{pct}%</div>
          <p>{state.score} / {quizWords.length} 正解</p>
        </div>
        {state.wrongIds.length > 0 && (
          <div className="wrong-words">
            <h3>復習が必要な単語:</h3>
            {state.wrongIds.map(id => {
              const w = words.find(w => w.id === id)
              if (!w) return null
              return (
                <div key={id} className="wrong-item">
                  <span className="w-hanzi">{w.hanzi}</span>
                  <span className="w-pinyin">{w.pinyin}</span>
                  <span className="w-meaning">{w.meaning}</span>
                  <button onClick={() => speakWord(w.hanzi, settings.speechRate)}>🔊</button>
                </div>
              )
            })}
          </div>
        )}
        <button className="btn-primary" onClick={restart}>もう一度</button>
      </div>
    )
  }

  if (!currentWord) {
    return <div className="empty-state">クイズを開始できません</div>
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-mode-switch">
          <button
            className={mode === 'hanzi-to-meaning' ? 'active' : ''}
            onClick={() => { setMode('hanzi-to-meaning'); setFeedback(null) }}
          >
            漢字 → 意味
          </button>
          <button
            className={mode === 'meaning-to-hanzi' ? 'active' : ''}
            onClick={() => { setMode('meaning-to-hanzi'); setFeedback(null) }}
          >
            意味 → 漢字
          </button>
          <button
            className={mode === 'audio-to-hanzi' ? 'active' : ''}
            onClick={() => { setMode('audio-to-hanzi'); setFeedback(null) }}
          >
            音声 → 漢字
          </button>
        </div>
        <span className="quiz-progress">
          {state.currentIndex + 1} / {quizWords.length}
        </span>
      </div>

      <div className="quiz-question">
        {mode === 'hanzi-to-meaning' ? (
          <>
            <div className="question-hanzi">
              <span>{currentWord.hanzi}</span>
              <button onClick={() => speakWord(currentWord.hanzi, settings.speechRate)}>🔊</button>
            </div>
            <div className="question-pinyin">{currentWord.pinyin}</div>
            <div className="question-meta">
              <span className="quiz-category-badge">{categoryLabels(currentWord.category)}</span>
              {currentWord.measure && (
                <span className="quiz-measure-badge">量詞：{currentWord.measure}</span>
              )}
            </div>
          </>
        ) : mode === 'audio-to-hanzi' ? (
          <div className="question-audio">
            <button
              className="question-speaker-btn"
              onClick={() => speakWord(currentWord.hanzi, settings.speechRate)}
            >
              🔊 音声を再生
            </button>
          </div>
        ) : (
          <div className="question-meaning">{currentWord.meaning}</div>
        )}
      </div>

      <div className="quiz-options">
        {options.map((opt) => {
          const isSelected = feedback?.selectedId === opt.id
          const isCorrectOption = opt.id === currentWord.id
          let optionClass = 'quiz-option'
          if (feedback) {
            if (isSelected && feedback.isCorrect) {
              optionClass += ' correct'
            } else if (isSelected && !feedback.isCorrect) {
              optionClass += ' incorrect'
            } else if (isCorrectOption) {
              optionClass += ' highlight-correct'
            }
          }

          return (
            <button
              key={opt.id}
              className={optionClass}
              onClick={() => handleAnswer(opt)}
              disabled={!!feedback}
            >
              <span className="option-text">
                {mode === 'hanzi-to-meaning' ? (
                  opt.meaning
                ) : (
                  <>
                    <span className="option-hanzi">{opt.hanzi}</span>
                    {feedback && (
                      <>
                        <span className="option-meaning-sub">{opt.meaning}</span>
                        {isCorrectOption && (
                          <span className="option-pinyin-sub">{opt.pinyin}</span>
                        )}
                      </>
                    )}
                  </>
                )}
              </span>
              <span className="option-result-icon">
                {feedback && isSelected ? (feedback.isCorrect ? '✅' : '❌') : ''}
              </span>
            </button>
          )
        })}
      </div>

      {feedback && (
        <button className="btn-primary quiz-next-btn" onClick={handleNext}>
          次へ →
        </button>
      )}
    </div>
  )
}
