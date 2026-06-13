export interface Word {
  id: number
  hanzi: string
  pinyin: string
  meaning: string
  example: string
  exampleMeaning: string
  measure?: string
  etymology?: string
  mnemonic?: string
}

export type Category = 'noun' | 'verb' | 'adjective' | 'adverb' | 'conjunction' | 'preposition' | 'measure' | 'pronoun' | 'numeral' | 'particle' | 'other'

export interface WordEntry extends Word {
  category: Category[]
}

export interface AppSettings {
  speechRate: number
  autoPlay: boolean
  autoPlayMeaning: boolean
  showPinyin: boolean
  showMeaning: boolean
  darkMode: boolean
}

export interface AppState {
  words: WordEntry[]
  currentIndex: number
  learnedIds: Set<number>
  favoriteIds: Set<number>
  selectedCategory: Category | 'all'
  searchQuery: string
  settings: AppSettings
}
