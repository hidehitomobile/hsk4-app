import { useState, useEffect } from 'react'
import { useWords } from '../context/WordContext'
import { speakWord, speakExample } from '../utils/speech'

export function WordCard() {
  const { currentWord, learnedIds, favoriteIds, toggleLearned, toggleFavorite, settings, filteredWords, currentIndex, goNext, goPrev } = useWords()
  const [showExample, setShowExample] = useState(false)

  // 単語が切り替わるたびに自動で音声を再生（設定でON/OFF切替可能）
  useEffect(() => {
    if (currentWord && settings.autoPlay) {
      speakWord(currentWord.hanzi, settings.speechRate)
    }
  }, [currentWord, settings.speechRate, settings.autoPlay])

  if (!currentWord) {
    return (
      <div className="word-card empty">
        <p>単語が見つかりません</p>
        <p className="hint">検索条件を変更してください</p>
      </div>
    )
  }

  const isLearned = learnedIds.has(currentWord.id)
  const isFavorited = favoriteIds.has(currentWord.id)

  return (
    <div className="word-card">
      <div className="card-header">
        <span className="word-number">
          {currentIndex + 1} / {filteredWords.length}
        </span>
        <div className="card-actions">
          <button
            className={`icon-btn favorite ${isFavorited ? 'active' : ''}`}
            onClick={() => toggleFavorite(currentWord.id)}
            title={isFavorited ? 'お気に入り解除' : 'お気に入り追加'}
          >
            {isFavorited ? '★' : '☆'}
          </button>
          <button
            className={`icon-btn learned ${isLearned ? 'active' : ''}`}
            onClick={() => toggleLearned(currentWord.id)}
            title={isLearned ? '未学習に戻す' : '学習済みにする'}
          >
            {isLearned ? '✓' : '○'}
          </button>
        </div>
      </div>

      <div className="hanzi-display" onClick={() => speakWord(currentWord.hanzi, settings.speechRate)}>
        <span className="hanzi">{currentWord.hanzi}</span>
        <button className="speak-btn" title="発音を聞く">
          🔊
        </button>
      </div>

      {settings.showPinyin && (
        <div className="pinyin-display" onClick={() => speakWord(currentWord.pinyin)}>
          {currentWord.pinyin}
        </div>
      )}

      {settings.showMeaning && (
        <div className="meaning-display">
          {currentWord.meaning}
        </div>
      )}

      <button
        className="example-toggle"
        onClick={() => setShowExample(!showExample)}
      >
        {showExample ? '例文を隠す ▲' : '例文を表示 ▼'}
      </button>

      {showExample && (
        <div className="example-section">
          <div className="example-chinese" onClick={() => speakExample(currentWord.example, settings.speechRate)}>
            <span>{currentWord.example}</span>
            <button className="speak-btn-sm" title="例文を聞く">🔊</button>
          </div>
          <div className="example-meaning">
            {currentWord.exampleMeaning}
          </div>
        </div>
      )}

      <div className="card-navigation">
        <button onClick={goPrev} disabled={currentIndex === 0}>
          ← 前へ
        </button>
        <button onClick={goNext} disabled={currentIndex >= filteredWords.length - 1}>
          次へ →
        </button>
      </div>
    </div>
  )
}
