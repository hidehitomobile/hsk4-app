function createUtterance(text: string, lang: string, rate: number): SpeechSynthesisUtterance {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = lang
  utterance.rate = rate
  utterance.pitch = 1.0
  utterance.volume = 1.0

  const voices = window.speechSynthesis.getVoices()
  const langVoice = voices.find(v => v.lang.startsWith(lang))
  if (langVoice) utterance.voice = langVoice

  return utterance
}

export function speak(text: string, rate: number = 1.0, lang: string = 'zh-CN'): void {
  window.speechSynthesis.cancel()
  const utterance = createUtterance(text, lang, rate)

  const doSpeak = () => {
    const voices = window.speechSynthesis.getVoices()
    const v = voices.find(vo => vo.lang.startsWith(lang))
    if (v) utterance.voice = v
    window.speechSynthesis.speak(utterance)
  }

  if (window.speechSynthesis.getVoices().length === 0) {
    // iOS は遅延ロードされるため、イベントを待つ + フォールバック
    let resolved = false
    const onVoices = () => {
      if (!resolved) { resolved = true; doSpeak() }
    }
    window.speechSynthesis.addEventListener('voiceschanged', onVoices, { once: true })
    // フォールバック：1秒以内に音声が読み込まれなければ、そのまま発声
    setTimeout(() => {
      if (!resolved) {
        resolved = true
        window.speechSynthesis.removeEventListener('voiceschanged', onVoices)
        window.speechSynthesis.speak(utterance)
      }
    }, 1000)
    return
  }

  doSpeak()
}

export function speakWord(hanzi: string, rate: number = 0.8): void {
  speak(hanzi, rate, 'zh-CN')
}

export function speakExample(text: string, rate: number = 0.85): void {
  speak(text, rate, 'zh-CN')
}

export function speakJapanese(text: string, rate: number = 0.9): void {
  speak(text, rate, 'ja-JP')
}

// 逐次再生用：Promise で完了を待てる音声再生
export function speakAsync(text: string, rate: number, lang: string): Promise<void> {
  return new Promise((resolve) => {
    const utterance = createUtterance(text, lang, rate)

    let resolved = false
    const done = () => { if (!resolved) { resolved = true; resolve() } }

    utterance.onend = done
    utterance.onerror = done

    // フォールバック：発音されない場合でも一定時間後に次へ進む
    const charMs = lang === 'zh-CN' ? 350 : 200
    const estimatedMs = Math.max(text.length * charMs / rate + 800, 1500)
    setTimeout(done, estimatedMs)

    const doSpeak = () => {
      const voices = window.speechSynthesis.getVoices()
      const v = voices.find(vo => vo.lang.startsWith(lang))
      if (v) utterance.voice = v
      window.speechSynthesis.speak(utterance)
    }

    if (window.speechSynthesis.getVoices().length === 0) {
      let voiceResolved = false
      const onVoices = () => {
        if (!voiceResolved) { voiceResolved = true; doSpeak() }
      }
      window.speechSynthesis.addEventListener('voiceschanged', onVoices, { once: true })
      setTimeout(() => {
        if (!voiceResolved) {
          voiceResolved = true
          window.speechSynthesis.removeEventListener('voiceschanged', onVoices)
          window.speechSynthesis.speak(utterance)
        }
      }, 1000)
      return
    }

    doSpeak()
  })
}
