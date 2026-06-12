import { Category } from '../types'

const LABELS: Record<Category, string> = {
  noun: '名詞',
  verb: '動詞',
  adjective: '形容詞',
  adverb: '副詞',
  conjunction: '接続詞',
  preposition: '前置詞',
  measure: '量詞',
  pronoun: '代名詞',
  numeral: '数詞',
  particle: '助詞',
  other: 'その他',
}

export function categoryLabel(cat: Category): string {
  return LABELS[cat] ?? cat
}
