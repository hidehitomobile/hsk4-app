import { AppSettings, Category } from '../types'

const KEYS = {
  LEARNED: 'hsk4_learned',
  FAVORITES: 'hsk4_favorites',
  SETTINGS: 'hsk4_settings',
  CURRENT_INDEX: 'hsk4_currentIndex',
  SELECTED_CATEGORY: 'hsk4_selectedCategory',
  SEARCH_QUERY: 'hsk4_searchQuery',
}

export function loadLearnedIds(): Set<number> {
  try {
    const raw = localStorage.getItem(KEYS.LEARNED)
    if (raw) return new Set(JSON.parse(raw))
  } catch { /* ignore */ }
  return new Set()
}

export function saveLearnedIds(ids: Set<number>): void {
  localStorage.setItem(KEYS.LEARNED, JSON.stringify([...ids]))
}

export function loadFavoriteIds(): Set<number> {
  try {
    const raw = localStorage.getItem(KEYS.FAVORITES)
    if (raw) return new Set(JSON.parse(raw))
  } catch { /* ignore */ }
  return new Set()
}

export function saveFavoriteIds(ids: Set<number>): void {
  localStorage.setItem(KEYS.FAVORITES, JSON.stringify([...ids]))
}

export const defaultSettings: AppSettings = {
  speechRate: 0.9,
  autoPlay: true,
  autoPlayExample: true,
  showPinyin: true,
  showMeaning: true,
  darkMode: false,
  hideLearned: false,
}

export function loadSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(KEYS.SETTINGS)
    if (raw) return { ...defaultSettings, ...JSON.parse(raw) }
  } catch { /* ignore */ }
  return { ...defaultSettings }
}

export function saveSettings(settings: AppSettings): void {
  localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings))
}

export function loadCurrentIndex(): number {
  try {
    const raw = localStorage.getItem(KEYS.CURRENT_INDEX)
    if (raw) return Math.max(0, parseInt(raw, 10) || 0)
  } catch { /* ignore */ }
  return 0
}

export function saveCurrentIndex(index: number): void {
  localStorage.setItem(KEYS.CURRENT_INDEX, String(index))
}

export function loadSelectedCategory(): Category | 'all' {
  try {
    const raw = localStorage.getItem(KEYS.SELECTED_CATEGORY)
    if (raw) return raw as Category | 'all'
  } catch { /* ignore */ }
  return 'all'
}

export function saveSelectedCategory(cat: Category | 'all'): void {
  localStorage.setItem(KEYS.SELECTED_CATEGORY, cat)
}

export function loadSearchQuery(): string {
  try {
    return localStorage.getItem(KEYS.SEARCH_QUERY) ?? ''
  } catch { /* ignore */ }
  return ''
}

export function saveSearchQuery(q: string): void {
  localStorage.setItem(KEYS.SEARCH_QUERY, q)
}
