import { useState, useCallback, useRef, useEffect } from 'react'
import { pinyin } from 'pinyin-pro'
import {
  isSpeechRecognitionSupported,
  SpeechRecognitionSession,
  RecognitionState,
} from '../utils/speechRecognition'
import { playCorrectSound, playIncorrectSound } from '../utils/sound'

interface PronunciationResult {
  transcript: string      // 認識された漢字
  recognizedPinyin: string // 認識された漢字から変換したピンイン（声調付き）
  isCorrect: boolean      // 判定結果
  confidence: number      // 信頼度
}

interface PronunciationCheckProps {
  correctHanzi: string
  correctPinyin: string
}

/**
 * ピンインを正規化（スペースを除去して比較用に変換）
 * "zhōng wén" / "zhōngwén" → "zhōngwén"
 */
function normalizePinyin(raw: string): string {
  return raw
    .replace(/\s+/g, '')
    .trim()
    .toLowerCase()
}

/**
 * 2つのピンインを比較（スペースの有無に関わらず音節一致で判定）
 */
function comparePinyin(a: string, b: string): boolean {
  return normalizePinyin(a) === normalizePinyin(b)
}

export function PronunciationCheck({ correctHanzi, correctPinyin }: PronunciationCheckProps) {
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
        // 認識結果の漢字からピンインを変換
        const recognizedPinyin = pinyin(recResult.transcript, {
          toneType: 'symbol',  // 声調付きピンイン（例：nǐ hǎo）
          type: 'string',
        })

        const isCorrect =
          recResult.transcript === correctHanzi &&
          comparePinyin(recognizedPinyin, correctPinyin)

        // 効果音を鳴らす
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
        // 中間結果
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

  // 単語が変わったら結果をリセット
  useEffect(() => {
    setResult(null)
    setInterimText('')
    setError(null)
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
  }, [state, sessionRef])

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

      {/* 中間結果 */}
      {interimText && (
        <div className="pronunciation-interim">
          <span className="interim-label">認識中：</span>
          <span className="interim-text">{interimText}</span>
        </div>
      )}

      {/* 最終結果 */}
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

      {/* エラー表示 */}
      {error && (
        <div className="pronunciation-error">
          ⚠️ {error}
        </div>
      )}
    </div>
  )
}
