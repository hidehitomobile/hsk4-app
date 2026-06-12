export function speak(text: string, rate: number = 1.0): void {
  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'zh-CN'
  utterance.rate = rate
  utterance.pitch = 1.0
  utterance.volume = 1.0

  // 利用可能な中国語音声を優先的に選択
  const voices = window.speechSynthesis.getVoices()
  if (voices.length > 0) {
    const zhVoice = voices.find(v => v.lang.startsWith('zh-CN') || v.lang.startsWith('zh-TW') || v.lang.startsWith('zh'))
    if (zhVoice) {
      utterance.voice = zhVoice
    }
  }

  // 音声リストが非同期読み込みの場合に対応
  if (voices.length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      const updatedVoices = window.speechSynthesis.getVoices()
      const zhV = updatedVoices.find(v => v.lang.startsWith('zh-CN') || v.lang.startsWith('zh-TW') || v.lang.startsWith('zh'))
      if (zhV) utterance.voice = zhV
      window.speechSynthesis.speak(utterance)
    }
    return
  }

  window.speechSynthesis.speak(utterance)
}

export function speakWord(hanzi: string, rate: number = 0.8): void {
  speak(hanzi, rate)
}

export function speakExample(text: string, rate: number = 0.85): void {
  speak(text, rate)
}
