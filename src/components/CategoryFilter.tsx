import { useWords } from '../context/WordContext'

const CATEGORIES: { key: string; label: string }[] = [
  { key: 'all', label: 'すべて' },
  { key: 'noun', label: '名詞' },
  { key: 'verb', label: '動詞' },
  { key: 'adjective', label: '形容詞' },
  { key: 'adverb', label: '副詞' },
  { key: 'conjunction', label: '接続詞' },
  { key: 'preposition', label: '前置詞' },
  { key: 'measure', label: '量詞' },
  { key: 'pronoun', label: '代名詞' },
  { key: 'numeral', label: '数詞' },
  { key: 'particle', label: '助詞' },
  { key: 'other', label: 'その他' },
]

export function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useWords()

  return (
    <div className="category-filter">
      {CATEGORIES.map(c => (
        <button
          key={c.key}
          className={`cat-btn ${selectedCategory === c.key ? 'active' : ''}`}
          onClick={() => setSelectedCategory(c.key as any)}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}
