import { Routes, Route } from 'react-router-dom'
import { WordProvider } from './context/WordContext'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { CategoryFilter } from './components/CategoryFilter'
import { ProgressBar } from './components/ProgressBar'
import { WordCard } from './components/WordCard'
import { WordList } from './components/WordList'
import { Quiz } from './components/Quiz'
import { Settings } from './components/Settings'
import { useWords } from './context/WordContext'
import { useEffect } from 'react'
import { speakWord } from './utils/speech'
import wordsData from './data/words.json'
import { WordEntry } from './types'
import './styles/index.css'

function LearnPage() {
  const { settings, currentWord } = useWords()

  useEffect(() => {
    if (settings.autoPlay && currentWord) {
      speakWord(currentWord.hanzi, settings.speechRate)
    }
  }, [currentWord?.id, settings.autoPlay, settings.speechRate])

  return (
    <div className="learn-page">
      <SearchBar />
      <ProgressBar />
      <CategoryFilter />
      <WordCard />
    </div>
  )
}

function ListPage() {
  return (
    <div className="list-page">
      <SearchBar />
      <CategoryFilter />
      <ProgressBar />
      <WordList />
    </div>
  )
}

export default function App() {
  return (
    <WordProvider words={wordsData as WordEntry[]}>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LearnPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </WordProvider>
  )
}
