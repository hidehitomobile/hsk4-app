import { createContext, useContext, useState, useCallback, useEffect, useRef, ReactNode } from 'react'
import { AppSettings, AppState, Category, WordEntry } from '../types'
import {
  loadLearnedIds, saveLearnedIds,
  loadFavoriteIds, saveFavoriteIds,
  loadSettings, saveSettings,
  loadCurrentIndex, saveCurrentIndex,
  loadSelectedCategory, saveSelectedCategory,
  loadSearchQuery, saveSearchQuery,
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
}

const WordContext = createContext<WordContextType | null>(null)

export function WordProvider({ children, words }: { children: ReactNode; words: WordEntry[] }) {
  const [currentIndex, setCurrentIndex] = useState(() => loadCurrentIndex())
  const [learnedIds, setLearnedIds] = useState<Set<number>>(() => loadLearnedIds())
  const [favoriteIds, setFavoriteIds] = useState<Set<number>>(() => loadFavoriteIds())
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(() => loadSelectedCategory())
  const [searchQuery, setSearchQuery] = useState(() => loadSearchQuery())
  const [settings, setSettings] = useState<AppSettings>(() => loadSettings())

  // フィルタリング
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

  const currentWord = filteredWords.length > 0 ? filteredWords[currentIndex] ?? null : null

  const goNext = useCallback(() => {
    if (currentIndex < filteredWords.length - 1) {
      setCurrentIndex(i => i + 1)
    }
  }, [currentIndex, filteredWords.length])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1)
    }
  }, [currentIndex])

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
