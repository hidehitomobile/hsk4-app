import { useState, useMemo, useCallback } from 'react'
import { useWords } from '../context/WordContext'
import { speakWord } from '../utils/speech'

type QuizMode = 'hanzi-to-meaning' | 'meaning-to-hanzi'

interface QuizState {
  currentIndex: number
  score: number
  total: number
  finished: boolean
  wrongIds: number[]
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

  // 選択肢を生成
  const getOptions = useCallback((correctWord: typeof quizWords[0]) => {
    const others = words.filter(w => w.id !== correctWord.id)
    const shuffled = [...others].sort(() => Math.random() - 0.5)
    const options = [correctWord, ...shuffled.slice(0, 3)].sort(() => Math.random() - 0.5)
    return options
  }, [words])

  const currentWord = quizWords[state.currentIndex]
  const options = currentWord ? getOptions(currentWord) : []

  const handleAnswer = (word: typeof quizWords[0]) => {
    const isCorrect = word.id === currentWord.id
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
    if (isCorrect) {
      speakWord('✓', 1.0)
    }
  }

  const restart = () => {
    setState({ currentIndex: 0, score: 0, total: 0, finished: false, wrongIds: [] })
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
            onClick={() => setMode('hanzi-to-meaning')}
          >
            漢字 → 意味
          </button>
          <button
            className={mode === 'meaning-to-hanzi' ? 'active' : ''}
            onClick={() => setMode('meaning-to-hanzi')}
          >
            意味 → 漢字
          </button>
        </div>
        <span className="quiz-progress">
          {state.currentIndex + 1} / {quizWords.length}
        </span>
      </div>

      <div className="quiz-question">
        {mode === 'hanzi-to-meaning' ? (
          <div className="question-hanzi">
            <span>{currentWord.hanzi}</span>
            <button onClick={() => speakWord(currentWord.hanzi, settings.speechRate)}>🔊</button>
          </div>
        ) : (
          <div className="question-meaning">{currentWord.meaning}</div>
        )}
      </div>

      <div className="quiz-options">
        {options.map((opt) => (
          <button
            key={opt.id}
            className="quiz-option"
            onClick={() => handleAnswer(opt)}
          >
            {mode === 'hanzi-to-meaning' ? opt.meaning : opt.hanzi}
          </button>
        ))}
      </div>
    </div>
  )
}
