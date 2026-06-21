import { useWords } from '../context/WordContext'

export function Settings() {
  const { settings, updateSettings } = useWords()

  return (
    <div className="settings-container">
      <h2>設定</h2>

      <div className="setting-group">
        <label>音声速度</label>
        <div className="setting-range">
          <input
            type="range"
            min="0.5"
            max="2.0"
            step="0.1"
            value={settings.speechRate}
            onChange={e => updateSettings({ speechRate: parseFloat(e.target.value) })}
          />
          <span>{settings.speechRate.toFixed(1)}x</span>
        </div>
      </div>

      <div className="setting-group">
        <label>
          <input
            type="checkbox"
            checked={settings.autoPlay}
            onChange={e => updateSettings({ autoPlay: e.target.checked })}
          />
          カード切り替え時に自動再生
        </label>
      </div>

      <div className="setting-group">
        <label>
          <input
            type="checkbox"
            checked={settings.autoPlayExample}
            onChange={e => updateSettings({ autoPlayExample: e.target.checked })}
          />
          例文も自動再生
        </label>
      </div>

      <div className="setting-group">
        <label>
          <input
            type="checkbox"
            checked={settings.showPinyin}
            onChange={e => updateSettings({ showPinyin: e.target.checked })}
          />
          ピンインを表示
        </label>
      </div>

      <div className="setting-group">
        <label>
          <input
            type="checkbox"
            checked={settings.showMeaning}
            onChange={e => updateSettings({ showMeaning: e.target.checked })}
          />
          日本語訳を表示
        </label>
      </div>

      <div className="setting-group">
        <label>
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={e => updateSettings({ darkMode: e.target.checked })}
          />
          ダークモード
        </label>
      </div>

      <div className="setting-group">
        <label>
          <input
            type="checkbox"
            checked={settings.hideLearned}
            onChange={e => updateSettings({ hideLearned: e.target.checked })}
          />
          学習済み単語を非表示（学習タブ）
        </label>
      </div>
    </div>
  )
}
