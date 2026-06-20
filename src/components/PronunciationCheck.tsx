import { useState, useCallback, useRef, useEffect } from 'react'
import { pinyin } from 'pinyin-pro'
import {
  isSpeechRecognitionSupported,
  SpeechRecognitionSession,
  RecognitionState,
} from '../utils/speechRecognition'
import { playCorrectSound, playIncorrectSound } from '../utils/sound'

interface PronunciationResult {
  transcript: string
  recognizedPinyin: string
  isCorrect: boolean
  confidence: number
}

interface PronunciationCheckProps {
  correctHanzi: string
  correctPinyin: string
  /** オーバーレイに小表示するターゲット漢字 */
  targetHanzi?: string
  /** オーバーレイに小表示するターゲットピンイン */
  targetPinyin?: string
  /** true ならマウント時に自動で録音開始 */
  autoStart?: boolean
}

function normalizePinyin(raw: string): string {
  return raw
    .replace(/[^a-zA-Z\u0100-\u024F\u1E00-\u1EFF\u0300-\u036F]/g, '')
    .replace(/\s+/g, '')
    .trim()
    .toLowerCase()
    .normalize('NFC')
}

function comparePinyin(a: string, b: string): boolean {
  return normalizePinyin(a) === normalizePinyin(b)
}

export function PronunciationCheck({ correctHanzi, correctPinyin, targetHanzi, targetPinyin, autoStart }: PronunciationCheckProps) {
  const [session] = useState(() => new SpeechRecognitionSession())
  const [state, setState] = useState<RecognitionState>('idle')
  const [result, setResult] = useState<PronunciationResult | null>(null)
  const [interimText, setInterimText] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [supported] = useState(() => isSpeechRecognitionSupported())
  const sessionRef = useRef(session)

  useEffect(() => {
    const s = sessionRef.current

    s.onStateChange = (newState) => setState(newState)

    s.onResult = (recResult) => {
      if (recResult.isFinal) {
        const cleanTranscript = recResult.transcript
          .replace(/[^\u4e00-\u9fff\u3400-\u4dbf]/g, '')
          .normalize('NFC')

        const recognizedPinyin = pinyin(cleanTranscript || recResult.transcript, {
          toneType: 'symbol',
          type: 'string',
        })

        // 例文発音チェック時に句読点を除去して比較
        const cleanCorrectHanzi = correctHanzi
          .replace(/[^\u4e00-\u9fff\u3400-\u4dbf]/g, '')
          .trim()
          .normalize('NFC')
        const cleanCorrectPinyin = correctPinyin
          .replace(/[^a-zA-Z\u0100-\u024F\u1E00-\u1EFF\u0300-\u036F]/g, '')
          .trim()
          .toLowerCase()
          .normalize('NFC')

        const hanziMatch = cleanTranscript === cleanCorrectHanzi
        const pinyinMatch = comparePinyin(recognizedPinyin, cleanCorrectPinyin)
        const isCorrect = hanziMatch || pinyinMatch

        if (isCorrect) {
          playCorrectSound()
        } else {
          playIncorrectSound()
        }

        setResult({
          transcript: recResult.transcript,
          recognizedPinyin,
          isCorrect,
          confidence: recResult.confidence,
        })
        setInterimText('')
      } else {
        setInterimText(recResult.transcript)
      }
    }

    s.onError = (err) => {
      setError(err.message)
      setResult(null)
      setInterimText('')
    }

    return () => {
      s.abort()
    }
  }, [correctHanzi, correctPinyin])

  // autoStart: オーバーレイ表示時すぐ録音開始
  const autoStartedRef = useRef(false)
  useEffect(() => {
    if (autoStart && supported && !autoStartedRef.current) {
      autoStartedRef.current = true
      setError(null)
      setResult(null)
      setInterimText('')
      sessionRef.current.start('zh-CN')
    }
  }, [autoStart, supported])

  // 単語が変わったらリセット
  useEffect(() => {
    setResult(null)
    setInterimText('')
    setError(null)
    autoStartedRef.current = false
  }, [correctHanzi])

  const handleToggle = useCallback(() => {
    setError(null)

    if (state === 'listening') {
      sessionRef.current.stop()
    } else {
      setResult(null)
      setInterimText('')
      sessionRef.current.start('zh-CN')
    }
  }, [state])

  if (!supported) {
    return (
      <div className="pronunciation-check">
        <div className="pronunciation-unsupported">
          ⚠️ お使いのブラウザは音声認識に対応していません。<br />
          Chrome または Edge をご利用ください。
        </div>
      </div>
    )
  }

  const isListening = state === 'listening'

  return (
    <div className="pronunciation-check">
      <button
        className={`pronunciation-btn ${isListening ? 'recording' : ''}`}
        onClick={handleToggle}
        disabled={state === 'processing'}
        title={isListening ? '停止' : '発音チェック開始'}
      >
        <span className="pronunciation-btn-icon">
          {isListening ? '⏹' : '🎤'}
        </span>
        <span className="pronunciation-btn-text">
          {isListening ? '聞いています...' : '発音チェック'}
        </span>
      </button>

      {targetHanzi && (
        <div className="pron-check-target">
          <span className="pron-check-target-hanzi">{targetHanzi}</span>
          {targetPinyin && <span className="pron-check-target-pinyin">{targetPinyin}</span>}
        </div>
      )}

      {interimText && (
        <div className="pronunciation-interim">
          <span className="interim-label">認識中：</span>
          <span className="interim-text">{interimText}</span>
        </div>
      )}

      {result && (
        <div className={`pronunciation-result ${result.isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="result-header">
            <span className="result-icon">
              {result.isCorrect ? '✅ 正解！' : '❌ 不正解'}
            </span>
            {result.confidence > 0 && (
              <span className="result-confidence">
                信頼度：{Math.round(result.confidence * 100)}%
              </span>
            )}
          </div>

          <div className="result-details">
            <div className="result-row">
              <span className="result-label">あなたの発音：</span>
              <span className="result-value your">{result.transcript || '(認識できませんでした)'}</span>
            </div>
            <div className="result-row">
              <span className="result-label">認識ピンイン：</span>
              <span className={`result-value pinyin ${result.isCorrect ? 'match' : 'mismatch'}`}>
                {result.recognizedPinyin || '—'}
              </span>
            </div>
            {!result.isCorrect && (
              <div className="result-row correct-row">
                <span className="result-label">正しい発音：</span>
                <span className="result-value correct">
                  {correctHanzi}　<span className="correct-pinyin">{correctPinyin}</span>
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {error && (
        <div className="pronunciation-error">
          ⚠️ {error}
        </div>
      )}
    </div>
  )
}
