import { useWords } from '../context/WordContext'
import { speakWord } from '../utils/speech'
import { categoryLabel } from '../utils/category'

export function WordList() {
  const { filteredWords, learnedIds, favoriteIds, toggleLearned, toggleFavorite, settings, setCurrentIndex } = useWords()

  if (filteredWords.length === 0) {
    return <div className="empty-state">単語が見つかりません</div>
  }

  return (
    <div className="word-list">
      <div className="list-count">{filteredWords.length} 語</div>
      {filteredWords.map((word, idx) => {
        const isLearned = learnedIds.has(word.id)
        const isFav = favoriteIds.has(word.id)
        return (
          <div key={word.id} className={`list-item ${isLearned ? 'learned' : ''}`}>
            <div className="list-main" onClick={() => setCurrentIndex(idx)}>
              <div className="list-hanzi">
                {word.hanzi}
                <span className="list-category">{categoryLabel(word.category)}</span>
                {word.measure && <span className="list-measure">{word.measure}</span>}
              </div>
              <div className="list-pinyin">{word.pinyin}</div>
              <div className="list-meaning">{word.meaning}</div>
            </div>
            <div className="list-actions">
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
