import { AppSettings } from '../types'

const KEYS = {
  LEARNED: 'hsk4_learned',
  FAVORITES: 'hsk4_favorites',
  SETTINGS: 'hsk4_settings',
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
  autoPlayMeaning: true,
  showPinyin: true,
  showMeaning: true,
  darkMode: false,
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
