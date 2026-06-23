import { createContext, useContext, useState, useCallback, useEffect, useRef, ReactNode } from 'react'
import { AppSettings, AppState, Category, WordEntry } from '../types'
import {
  loadLearnedIds, saveLearnedIds,
  loadFavoriteIds, saveFavoriteIds,
  loadSettings, saveSettings,
  loadCurrentIndex, saveCurrentIndex,
  loadSelectedCategory, saveSelectedCategory,
  loadSearchQuery, saveSearchQuery,
  loadViewCounts, saveViewCounts,
} from '../utils/storage'

interface WordContextType extends AppState {
  setCurrentIndex: (index: number) => void
  goNext: () => void
  goPrev: () => void
  toggleLearned: (id: number) => void
  toggleFavorite: (id: number) => void
  setSelectedCategory: (cat: Category | 'all') => void
  setSearchQuery: (q: string) => void
  updateSettings: (s: Partial<AppSettings>) => void
  filteredWords: WordEntry[]
  currentWord: WordEntry | null
  progress: { learned: number; total: number; percent: number }
  learnedIds: Set<number>
  favoriteIds: Set<number>
  viewCounts: Record<number, number>
  lastPlayedWordIdRef: React.MutableRefObject<number | null>
  lastScrolledWordIdRef: React.MutableRefObject<number | null>
  isFirstAppMountRef: React.MutableRefObject<boolean>

}

const WordContext = createContext<WordContextType | null>(null)

// モジュールレベル: 直前にカウントした単語ID
// React StrictMode の二重マウント時、同一IDで2回目の発火を抑止する（セッションが維持されるため）
// ユーザー操作による A→B→A の移動ではIDが変わるため正常にカウントされる
let lastCountedWordId: number | null = null

export function WordProvider({ children, words }: { children: ReactNode; words: WordEntry[] }) {
  const lastPlayedWordIdRef = useRef<number | null>(null)
  const lastScrolledWordIdRef = useRef<number | null>(null)
  const isFirstAppMountRef = useRef(true)
  const [currentIndex, setCurrentIndex] = useState(() => loadCurrentIndex())
  const [learnedIds, setLearnedIds] = useState<Set<number>>(() => loadLearnedIds())
  const [favoriteIds, setFavoriteIds] = useState<Set<number>>(() => loadFavoriteIds())
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(() => loadSelectedCategory())
  const [searchQuery, setSearchQuery] = useState(() => loadSearchQuery())
  const [settings, setSettings] = useState<AppSettings>(() => loadSettings())
  const [viewCounts, setViewCounts] = useState<Record<number, number>>(() => loadViewCounts())
  // フィルタリング（学習タブ用: hideLearned を適用）
  const filteredWords = words.filter(w => {
    if (settings.hideLearned && learnedIds.has(w.id)) return false
    const matchCategory = selectedCategory === 'all' || w.category.includes(selectedCategory)
    const q = searchQuery.trim().toLowerCase()
    const matchSearch = !q ||
      w.hanzi.includes(q) ||
      w.pinyin.toLowerCase().includes(q) ||
      w.meaning.includes(q)
    return matchCategory && matchSearch
  })

  // フィルターの前回値を保持（値が実際に変わった時だけインデックスをリセット）
  const prevFilter = useRef({ category: loadSelectedCategory(), query: loadSearchQuery(), hideLearned: loadSettings().hideLearned })

  // フィルター変更時にインデックスをリセット
  useEffect(() => {
    const { category, query, hideLearned } = prevFilter.current
    if (category === selectedCategory && query === searchQuery && hideLearned === settings.hideLearned) {
      return // 値が変わっていない（マウント時・StrictMode再マウント時）
    }
    prevFilter.current = { category: selectedCategory, query: searchQuery, hideLearned: settings.hideLearned }
    setCurrentIndex(0)
  }, [selectedCategory, searchQuery, settings.hideLearned])

  // currentIndex を localStorage に保存
  useEffect(() => {
    saveCurrentIndex(currentIndex)
  }, [currentIndex])

  // selectedCategory を localStorage に保存
  useEffect(() => {
    saveSelectedCategory(selectedCategory)
  }, [selectedCategory])

  // searchQuery を localStorage に保存
  useEffect(() => {
    saveSearchQuery(searchQuery)
  }, [searchQuery])

  // ダークモード
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.darkMode ? 'dark' : 'light')
  }, [settings.darkMode])

  // 初期ロード時に currentIndex が範囲外なら補正
  useEffect(() => {
    if (currentIndex >= filteredWords.length) {
      setCurrentIndex(Math.max(0, filteredWords.length - 1))
    }
  }, []) // 初回のみ実行

  // 表示回数カウント：currentWord が変わったらインクリメント
  const currentWord = filteredWords.length > 0 ? filteredWords[currentIndex] ?? null : null

  useEffect(() => {
    if (!currentWord) return
    // 同一IDが連続で発火した場合は StrictMode 二重マウントと判断してスキップ
    if (lastCountedWordId === currentWord.id) return
    lastCountedWordId = currentWord.id

    setViewCounts(prev => {
      const next = { ...prev }
      next[currentWord.id] = (next[currentWord.id] || 0) + 1
      return next
    })
  }, [currentWord?.id])

  // viewCounts の永続化（state updater から分離）
  useEffect(() => {
    saveViewCounts(viewCounts)
  }, [viewCounts])

  const goNext = useCallback(() => {
    setCurrentIndex(i => Math.min(i + 1, filteredWords.length - 1))
  }, [filteredWords.length])

  const goPrev = useCallback(() => {
    setCurrentIndex(i => Math.max(i - 1, 0))
  }, [])

  const toggleLearned = useCallback((id: number) => {
    setLearnedIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      saveLearnedIds(next)
      return next
    })
  }, [])

  const toggleFavorite = useCallback((id: number) => {
    setFavoriteIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      saveFavoriteIds(next)
      return next
    })
  }, [])

  const updateSettings = useCallback((s: Partial<AppSettings>) => {
    setSettings(prev => {
      const next = { ...prev, ...s }
      saveSettings(next)
      return next
    })
  }, [])

  const progress = {
    learned: learnedIds.size,
    total: words.length,
    percent: words.length > 0 ? Math.round((learnedIds.size / words.length) * 100) : 0,
  }

  return (
    <WordContext.Provider value={{
      words,
      currentIndex,
      setCurrentIndex,
      goNext,
      goPrev,
      toggleLearned,
      toggleFavorite,
      selectedCategory,
      setSelectedCategory,
      searchQuery,
      setSearchQuery,
      settings,
      updateSettings,
      filteredWords,
      currentWord,
      progress,
      learnedIds,
      favoriteIds,
      viewCounts,
      lastPlayedWordIdRef,
      lastScrolledWordIdRef,
      isFirstAppMountRef,
    }}>
      {children}
    </WordContext.Provider>
  )
}

export function useWords() {
  const ctx = useContext(WordContext)
  if (!ctx) throw new Error('useWords must be used within WordProvider')
  return ctx
}
