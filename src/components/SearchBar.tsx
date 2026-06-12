import { useWords } from '../context/WordContext'

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useWords()

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="漢字・ピンイン・日本語で検索..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <button className="clear-btn" onClick={() => setSearchQuery('')}>
          ✕
        </button>
      )}
    </div>
  )
}
