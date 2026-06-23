import { useState, useEffect, useCallback } from 'react'
import { pinyin } from 'pinyin-pro'
import { useWords } from '../context/WordContext'
import { speakWord, speakExample } from '../utils/speech'
import { breakdownWord } from '../utils/hanziBreakdown'
import { PronunciationCheck } from './PronunciationCheck'
import { categoryLabels } from '../utils/category'

export function WordCard() {
  const { currentWord, learnedIds, favoriteIds, toggleLearned, toggleFavorite, settings, filteredWords, currentIndex, goNext, goPrev, viewCounts } = useWords()
  const [showBreakdown, setShowBreakdown] = useState(true)
  const [showEtymology, setShowEtymology] = useState(true)
  const [showPronCheck, setShowPronCheck] = useState(false)
  const [pronCheckTarget, setPronCheckTarget] = useState<'word' | 'example'>('word')

  // --- speechSynthesis のプライミング（iOS対策） ---
  useEffect(() => {
    let primed = false
    const prime = () => {
      if (primed) return
      primed = true
      const u = new SpeechSynthesisUtterance('')
      u.volume = 0
      window.speechSynthesis.speak(u)
    }
    window.addEventListener('touchstart', prime, { once: true })
    window.addEventListener('click', prime, { once: true })
    return () => {
      window.removeEventListener('touchstart', prime)
      window.removeEventListener('click', prime)
    }
  }, [])

  // --- ナビゲーション（インデックス変更のみ。音声再生は LearnPage の useEffect に一本化） ---
  const handleGoNext = useCallback(() => {
    if (currentIndex >= filteredWords.length - 1) return
    window.speechSynthesis.cancel()
    goNext()
  }, [currentIndex, filteredWords.length, goNext])

  const handleGoPrev = useCallback(() => {
    if (currentIndex <= 0) return
    window.speechSynthesis.cancel()
    goPrev()
  }, [currentIndex, goPrev])

  // キーボードショートカット
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handleGoPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleGoNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleGoNext, handleGoPrev])

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
  const breakdown = breakdownWord(currentWord.hanzi)

  const examplePinyin = pinyin(currentWord.example, { toneType: 'symbol', type: 'string' })

  const pronCheckCorrectHanzi = pronCheckTarget === 'word' ? currentWord.hanzi : currentWord.example
  const pronCheckCorrectPinyin = pronCheckTarget === 'word' ? currentWord.pinyin : examplePinyin

  return (
    <div className="word-card">
      <div className="card-header">
        <div className="card-header-left">
          <span className="word-number">
            {currentIndex + 1} / {filteredWords.length}
          </span>
          <span className="word-view-count" title="この単語の表示回数">
            👁 {viewCounts[currentWord.id] || 0}
          </span>
          <span className="word-category">{categoryLabels(currentWord.category)}</span>
          {currentWord.measure && (
            <span className="word-measure">量詞：{currentWord.measure}</span>
          )}
          {currentWord.register && currentWord.register !== '通用' && (
            <span className={`word-register register-${currentWord.register === '书面语' ? 'written' : 'spoken'}`}>
              {currentWord.register === '书面语' ? '📝 书面语' : '💬 口语'}
            </span>
          )}

        </div>
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
        <div
          className="pinyin-display"
          onClick={(e) => { e.stopPropagation(); setPronCheckTarget('word'); setShowPronCheck(true) }}
          title="タップで発音チェック"
        >
          <span>{currentWord.pinyin}</span>
          <span className="mic-icon">🎤</span>
        </div>
      )}

      {settings.showMeaning && (
        <div className="meaning-display">
          {currentWord.meaning}
        </div>
      )}

      <div className="example-section">
        <div className="example-chinese" onClick={() => speakExample(currentWord.example, settings.speechRate)}>
          <span>{currentWord.example}</span>
          <button className="speak-btn-sm" title="例文を聞く">🔊</button>
        </div>
        <div
          className="example-pinyin"
          onClick={(e) => { e.stopPropagation(); setPronCheckTarget('example'); setShowPronCheck(true) }}
          title="タップで発音チェック"
        >
          <span>{examplePinyin}</span>
          <span className="mic-icon-sm">🎤</span>
        </div>
        <div className="example-meaning">
          {currentWord.exampleMeaning}
        </div>

        {/* 文法 */}
        {currentWord.grammar ? (
          <div className="grammar-section">
            <div className="grammar-header">
              <span className="grammar-title">📖 文法ポイント</span>
            </div>
            <p className="grammar-text">{currentWord.grammar}</p>
          </div>
        ) : null}
      </div>

      {/* 語源・覚え方 */}
      {(currentWord.etymology || currentWord.mnemonic) ? (
        <div className="etymology-section">
          <div className="etymology-header">
            <button className="etymology-toggle" onClick={() => setShowEtymology(!showEtymology)}>
              語源・覚え方 {showEtymology ? '▲' : '▼'}
            </button>
          </div>
          {showEtymology && (
            <>
              {currentWord.etymology && (
                <div className="etymology-block word-level">
                  <div className="etymology-title">語源・由来</div>
                  <p className="etymology-text">{currentWord.etymology}</p>
                </div>
              )}
              {currentWord.mnemonic && (
                <div className="etymology-block mnemonic-level">
                  <div className="etymology-title">覚え方</div>
                  <p className="etymology-text mnemonic-text">{currentWord.mnemonic}</p>
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div className="etymology-section etymology-empty-section">
          <div className="etymology-header">
            <button className="etymology-toggle" onClick={() => setShowEtymology(!showEtymology)}>
              語源・覚え方 {showEtymology ? '▲' : '▼'}
            </button>
          </div>
          {showEtymology && (
            <div className="etymology-empty">
              <p>この単語の語源・覚え方データはまだ登録されていません。</p>
            </div>
          )}
        </div>
      )}

      {/* 漢字構成 */}
      <div className="breakdown-section">
        <button className="breakdown-toggle" onClick={() => setShowBreakdown(!showBreakdown)}>
          漢字構成 {showBreakdown ? '▲' : '▼'}
        </button>
        {showBreakdown && breakdown.map((item, i) => (
          <div key={i} className="breakdown-item">
            <span className="breakdown-char">{item.char}</span>
            {item.info ? (
              <div className="breakdown-detail">
                <div className="breakdown-radical">
                  <span className="breakdown-label">部首：</span>
                  {item.info.radical}
                  <span className="breakdown-radical-meaning">（{item.info.radicalMeaning}）</span>
                </div>
                <div className="breakdown-components">
                  <span className="breakdown-label">構成：</span>
                  {item.info.components.join(' + ')}
                </div>
                <div className="breakdown-note">{item.info.note}</div>
              </div>
            ) : (
              <span className="breakdown-none">— 未収録 —</span>
            )}
          </div>
        ))}
      </div>

      {/* 発音チェックオーバーレイ */}
      {showPronCheck && (
        <div className="pron-check-overlay">
          <div className="pron-check-backdrop" onClick={() => setShowPronCheck(false)} />
          <div className="pron-check-panel">
            <div className="pron-check-panel-header">
              <span>🎤 発音チェック</span>
              <button className="pron-check-close" onClick={() => setShowPronCheck(false)}>✕</button>
            </div>
            <PronunciationCheck
              correctHanzi={pronCheckCorrectHanzi}
              correctPinyin={pronCheckCorrectPinyin}
              targetHanzi={pronCheckCorrectHanzi}
              targetPinyin={pronCheckCorrectPinyin}
              autoStart
            />
          </div>
        </div>
      )}

      <div className="card-navigation">
        <button onClick={handleGoPrev} disabled={currentIndex === 0}>
          ← 前へ
        </button>
        <button onClick={handleGoNext} disabled={currentIndex >= filteredWords.length - 1}>
          次へ →
        </button>
      </div>
    </div>
  )
}
