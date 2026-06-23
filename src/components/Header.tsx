import { Link, useLocation } from 'react-router-dom'
import { useWords } from '../context/WordContext'

export function Header() {
  const { progress } = useWords()
  const location = useLocation()

  return (
    <header className="app-header">
      <div className="header-top">
        <h1>HSK4級 単語学習</h1>
        <span className="progress-badge">{progress.percent}%</span>
      </div>
      <nav className="header-nav">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          学習
        </Link>
        <Link to="/list" className={location.pathname === '/list' ? 'active' : ''}>
          一覧
        </Link>
        <Link to="/quiz" className={location.pathname === '/quiz' ? 'active' : ''}>
          クイズ
        </Link>
        <Link to="/autolisten" className={location.pathname === '/autolisten' ? 'active' : ''}>
          リスニング
        </Link>
        <Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>
          設定
        </Link>
      </nav>
    </header>
  )
}
