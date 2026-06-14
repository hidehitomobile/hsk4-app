import { useState, useEffect, useRef, useCallback } from 'react'
import { useWords } from '../context/WordContext'
import { speakWord, speakExample, speakJapanese, speakAsync } from '../utils/speech'
import { breakdownWord } from '../utils/hanziBreakdown'
import { PronunciationCheck } from './PronunciationCheck'
import { categoryLabels } from '../utils/category'

export function WordCard() {
  const { currentWord, learnedIds, favoriteIds, toggleLearned, toggleFavorite, settings, filteredWords, currentIndex, goNext, goPrev } = useWords()
  const [showExample, setShowExample] = useState(false)
  const [showBreakdown, setShowBreakdown] = useState(false)
  const [showEtymology, setShowEtymology] = useState(false)
  const [swipeOffset, setSwipeOffset] = useState(0)

  // --- speechSynthesis のプライミング（iOS対策） ---
  // iOS では最初のユーザージェスチャー内で speak() を呼ばないと以降の自動再生がブロックされる
  // 無音の発声を流しっぱなしにすることで API をアクティベートする
  useEffect(() => {
    let primed = false
    const prime = () => {
      if (primed) return
      primed = true
      const u = new SpeechSynthesisUtterance('')
      u.volume = 0
      // キャンセルせず、無音の発声を完了させることで iOS に API 利用を許可させる
      window.speechSynthesis.speak(u)
    }
    window.addEventListener('touchstart', prime, { once: true })
    window.addEventListener('click', prime, { once: true })
    return () => {
      window.removeEventListener('touchstart', prime)
      window.removeEventListener('click', prime)
    }
  }, [])

  // --- ナビゲーション（発声をユーザージェスチャー内で実行） ---
  const navigateAndSpeak = useCallback((direction: 'next' | 'prev') => {
    // 重複呼び出し防止
    if (navigating.current) return
    navigating.current = true

    const nextIdx = direction === 'next' ? currentIndex + 1 : currentIndex - 1
    if (nextIdx < 0 || nextIdx >= filteredWords.length) {
      navigating.current = false
      return
    }

    const targetWord = filteredWords[nextIdx]
    window.speechSynthesis.cancel()

    if (direction === 'next') {
      goNext()
    } else {
      goPrev()
    }

    // ユーザージェスチャー内で直接発声（iOS で必要）
    if (settings.autoPlay && targetWord) {
      speakAsync(targetWord.hanzi, settings.speechRate, 'zh-CN')
        .then(() => {
          if (settings.autoPlayMeaning) {
            return speakAsync(targetWord.meaning, settings.speechRate, 'ja-JP')
          }
        })
        .finally(() => {
          navigating.current = false
        })
    } else {
      navigating.current = false
    }
  }, [currentIndex, filteredWords, settings.speechRate, settings.autoPlay, settings.autoPlayMeaning, goNext, goPrev])

  const handleGoNext = useCallback(() => navigateAndSpeak('next'), [navigateAndSpeak])
  const handleGoPrev = useCallback(() => navigateAndSpeak('prev'), [navigateAndSpeak])

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

  // --- スワイプ操作 ---
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const touchMoved = useRef(false)
  // ナビゲーション中は重複呼び出しを防止
  const navigating = useRef(false)

  const SWIPE_THRESHOLD = 50
  const TAP_MOVE_TOLERANCE = 8 // px — タップ時の指ブレ許容量

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    // ボタン・入力欄など操作要素上でのスワイプは無視
    const target = e.target as HTMLElement
    if (target.closest('button, input, textarea, select, a')) {
      return
    }

    const touch = e.touches[0]
    touchStartX.current = touch.clientX
    touchStartY.current = touch.clientY
    touchMoved.current = false
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    const dx = touch.clientX - touchStartX.current
    const dy = touch.clientY - touchStartY.current

    // 微小な動きはタップ扱い（指ブレ防止）
    if (!touchMoved.current && Math.abs(dx) + Math.abs(dy) < TAP_MOVE_TOLERANCE) {
      return
    }
    touchMoved.current = true

    // 水平方向が垂直方向より大きい場合のみ横スワイプビジュアル
    if (Math.abs(dx) > Math.abs(dy)) {
      setSwipeOffset(dx)
    }
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const touch = e.changedTouches[0]
    const dx = touch.clientX - touchStartX.current
    const dy = touch.clientY - touchStartY.current

    setSwipeOffset(0)

    if (!touchMoved.current) return
    if (Math.abs(dy) > Math.abs(dx)) return

    if (dx < -SWIPE_THRESHOLD) {
      handleGoNext()
    } else if (dx > SWIPE_THRESHOLD) {
      handleGoPrev()
    }
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

  return (
    <div
      className="word-card"
      style={swipeOffset !== 0 ? { transform: `translateX(${swipeOffset * 0.5}px)`, transition: 'none' } : { transform: 'translateX(0)', transition: 'transform 0.3s ease' }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
        correctHanzi={currentWord.hanzi}
        correctPinyin={currentWord.pinyin}
      />

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
