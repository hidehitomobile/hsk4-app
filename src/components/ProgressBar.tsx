import { useWords } from '../context/WordContext'

export function ProgressBar() {
  const { progress } = useWords()

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress.percent}%` }}
        />
      </div>
      <div className="progress-text">
        <span>学習済み: {progress.learned} / {progress.total}</span>
        <span>{progress.percent}%</span>
      </div>
    </div>
  )
}
