import { useMemo, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWords } from '../context/WordContext'
import { speakWord } from '../utils/speech'
import { categoryLabels } from '../utils/category'

export function WordList() {
  const { words, selectedCategory, searchQuery, filteredWords, currentWord, currentIndex, learnedIds, favoriteIds, viewCounts, toggleLearned, toggleFavorite, settings, setCurrentIndex, lastScrolledWordIdRef } = useWords()
  const navigate = useNavigate()

  // 一覧タブ用: hideLearned を適用せず、カテゴリ＋検索のみでフィルタ
  const listWords = useMemo(() => {
    return words.filter(w => {
      const matchCategory = selectedCategory === 'all' || w.category.includes(selectedCategory)
      const q = searchQuery.trim().toLowerCase()
      const matchSearch = !q ||
        w.hanzi.includes(q) ||
        w.pinyin.toLowerCase().includes(q) ||
        w.meaning.includes(q)
      return matchCategory && matchSearch
    })
  }, [words, selectedCategory, searchQuery])

  const listRef = useRef<HTMLDivElement>(null)

  // 学習中の単語位置に即座にスクロール（currentIndex の変更時のみ）
  useEffect(() => {
    if (!listRef.current) return
    const el = listRef.current.querySelector('.list-item.current') as HTMLElement | null
    if (!el) return
    lastScrolledWordIdRef.current = currentWord?.id ?? null
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'instant', block: 'center' })
    })
  }, [currentIndex, lastScrolledWordIdRef])

  const handleStartLearn = (wordId: number) => {
    const idx = filteredWords.findIndex(w => w.id === wordId)
    if (idx >= 0) {
      window.speechSynthesis.cancel()
      setCurrentIndex(idx)
      navigate('/')
    }
  }

  if (listWords.length === 0) {
    return <div className="empty-state">単語が見つかりません</div>
  }

  return (
    <div className="word-list" ref={listRef}>
      <div className="list-count">{listWords.length} 語</div>
      {listWords.map((word, idx) => {
        const isLearned = learnedIds.has(word.id)
        const isFav = favoriteIds.has(word.id)
        return (
          <div key={word.id} className={`list-item ${isLearned ? 'learned' : ''} ${currentWord?.id === word.id ? 'current' : ''}`}>
            <span className="list-number">{idx + 1}</span>
            <div className="list-main">
              <div className="list-hanzi">
                {word.hanzi}
                <span className="list-category">{categoryLabels(word.category)}</span>
                {word.measure && <span className="list-measure">{word.measure}</span>}
                {viewCounts[word.id] > 0 && <span className="list-view-count">👁 {viewCounts[word.id]}</span>}
              </div>
              <div className="list-pinyin">{word.pinyin}</div>
              <div className="list-meaning">{word.meaning}</div>
            </div>
            <div className="list-actions">
              <button
                className="icon-sm start-learn-btn"
                title="この単語から学習を始める"
                onClick={() => handleStartLearn(word.id)}
              >
                ▶
              </button>
              <button
                className="icon-sm"
                onClick={(e) => { e.stopPropagation(); speakWord(word.hanzi, settings.speechRate) }}
              >
                🔊
              </button>
              <button
                className={`icon-sm ${isFav ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleFavorite(word.id) }}
              >
                {isFav ? '★' : '☆'}
              </button>
              <button
                className={`icon-sm ${isLearned ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleLearned(word.id) }}
              >
                {isLearned ? '✓' : '○'}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
