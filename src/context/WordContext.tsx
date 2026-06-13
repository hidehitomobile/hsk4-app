import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'
import { AppSettings, AppState, Category, WordEntry } from '../types'
import { loadLearnedIds, saveLearnedIds, loadFavoriteIds, saveFavoriteIds, loadSettings, saveSettings } from '../utils/storage'

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [learnedIds, setLearnedIds] = useState<Set<number>>(() => loadLearnedIds())
  const [favoriteIds, setFavoriteIds] = useState<Set<number>>(() => loadFavoriteIds())
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [settings, setSettings] = useState<AppSettings>(() => loadSettings())

  // フィルタリング
  const filteredWords = words.filter(w => {
    const matchCategory = selectedCategory === 'all' || w.category.includes(selectedCategory)
    const q = searchQuery.trim().toLowerCase()
    const matchSearch = !q ||
      w.hanzi.includes(q) ||
      w.pinyin.toLowerCase().includes(q) ||
      w.meaning.includes(q)
    return matchCategory && matchSearch
  })

  // フィルター変更時にインデックスをリセット
  useEffect(() => {
    setCurrentIndex(0)
  }, [selectedCategory, searchQuery])

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
