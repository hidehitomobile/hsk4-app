import { useState, useEffect, useRef } from 'react'
import { useWords } from '../context/WordContext'
import { speakWord, speakExample, speakJapanese, speakAsync } from '../utils/speech'
import { breakdownWord } from '../utils/hanziBreakdown'
import { PronunciationCheck } from './PronunciationCheck'
import type { PronunciationCheckHandle } from './PronunciationCheck'
import { categoryLabels } from '../utils/category'

export function WordCard() {
  const { currentWord, learnedIds, favoriteIds, toggleLearned, toggleFavorite, settings, filteredWords, currentIndex, goNext, goPrev } = useWords()
  const [showExample, setShowExample] = useState(false)
  const [showBreakdown, setShowBreakdown] = useState(false)
  const [showEtymology, setShowEtymology] = useState(false)

  // 発音チェックのref（キーボードショートカット用）
  const pronunciationRef = useRef<PronunciationCheckHandle>(null)

  // refで最新の関数を保持（useEffectの再登録を避けるため）
  const goNextRef = useRef(goNext)
  const goPrevRef = useRef(goPrev)
  goNextRef.current = goNext
  goPrevRef.current = goPrev

  // キーボードショートカット
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 入力フィールドにフォーカスがある場合は無視
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrevRef.current()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNextRef.current()
      } else if (e.key === ' ') {
        e.preventDefault()
        pronunciationRef.current?.toggle()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // 単語が切り替わるたびに自動で音声を再生（設定でON/OFF切替可能）
  useEffect(() => {
    if (!currentWord || !settings.autoPlay) return

    let cancelled = false
    window.speechSynthesis.cancel()

    speakAsync(currentWord.hanzi, settings.speechRate, 'zh-CN').then(() => {
      if (!cancelled && settings.autoPlayMeaning) {
        speakAsync(currentWord.meaning, settings.speechRate, 'ja-JP')
      }
    })

    return () => { cancelled = true }
  }, [currentWord, settings.speechRate, settings.autoPlay, settings.autoPlayMeaning])

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

  return (
    <div className="word-card">
      <div className="card-header">
        <div className="card-header-left">
          <span className="word-number">
            {currentIndex + 1} / {filteredWords.length}
          </span>
          <span className="word-category">{categoryLabels(currentWord.category)}</span>
          {currentWord.measure && (
            <span className="word-measure">量詞：{currentWord.measure}</span>
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
        <div className="pinyin-display" onClick={() => speakWord(currentWord.pinyin)}>
          {currentWord.pinyin}
        </div>
      )}

      {settings.showMeaning && (
        <div className="meaning-display" onClick={() => speakJapanese(currentWord.meaning, settings.speechRate)}>
          {currentWord.meaning}
          <button className="speak-btn-sm" title="日本語訳を聞く">🔊</button>
        </div>
      )}

      <div className="card-toggles">
        <button
          className="breakdown-toggle"
          onClick={() => setShowBreakdown(!showBreakdown)}
        >
          {showBreakdown ? '漢字構成 ▲' : '漢字構成 ▼'}
        </button>
        <button
          className="etymology-toggle"
          onClick={() => setShowEtymology(!showEtymology)}
        >
          {showEtymology ? '語源・覚え方 ▲' : '語源・覚え方 ▼'}
        </button>
        <button
          className="example-toggle"
          onClick={() => setShowExample(!showExample)}
        >
          {showExample ? '例文を隠す ▲' : '例文を表示 ▼'}
        </button>
      </div>

      {showBreakdown && (
        <div className="breakdown-section">
          <div className="etymology-section-title">漢字レベル — 各漢字の部首・構成</div>
          {breakdown.map((item, i) => (
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
      )}

      {showEtymology && (
        <div className="etymology-section">
          {currentWord.etymology ? (
            <>
              <div className="etymology-block word-level">
                <div className="etymology-title">単語レベル — 語源・由来</div>
                <p className="etymology-text">{currentWord.etymology}</p>
              </div>
              <div className="etymology-block mnemonic-level">
                <div className="etymology-title">覚え方 — 日本語話者向けヒント</div>
                <p className="etymology-text mnemonic-text">{currentWord.mnemonic}</p>
              </div>
            </>
          ) : (
            <div className="etymology-empty">
              <p>この単語の語源・覚え方データはまだ登録されていません。</p>
            </div>
          )}
        </div>
      )}

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

      <PronunciationCheck
        ref={pronunciationRef}
        correctHanzi={currentWord.hanzi}
        correctPinyin={currentWord.pinyin}
      />

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
