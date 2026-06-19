/**
 * Web Speech API - SpeechRecognition ラッパー
 * 中国語（zh-CN）音声認識を管理する
 */

export interface RecognitionResult {
  transcript: string   // 認識されたテキスト（漢字）
  isFinal: boolean     // 最終結果かどうか
  confidence: number   // 信頼度（0〜1）
}

export interface RecognitionError {
  message: string
  type: 'not-supported' | 'no-speech' | 'aborted' | 'network' | 'audio' | 'permission' | 'unknown'
}

type ResultCallback = (result: RecognitionResult) => void
type ErrorCallback = (error: RecognitionError) => void
type StateCallback = (state: RecognitionState) => void

export type RecognitionState = 'idle' | 'listening' | 'processing' | 'error'

// ブラウザの SpeechRecognition 型（ブラウザ間の差異対応）
interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number
  readonly results: SpeechRecognitionResultList
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string
  readonly message: string
}

interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  onstart: ((this: SpeechRecognitionInstance, ev: Event) => void) | null
  onend: ((this: SpeechRecognitionInstance, ev: Event) => void) | null
  onresult: ((this: SpeechRecognitionInstance, ev: SpeechRecognitionEvent) => void) | null
  onerror: ((this: SpeechRecognitionInstance, ev: SpeechRecognitionErrorEvent) => void) | null
  start(): void
  stop(): void
  abort(): void
}

let SpeechRecognitionConstructor: { new(): SpeechRecognitionInstance } | null = null

// ブラウザ対応チェック
function getRecognitionConstructor(): { new(): SpeechRecognitionInstance } | null {
  if (SpeechRecognitionConstructor) return SpeechRecognitionConstructor

  const win = window as unknown as Record<string, unknown>
  const Ctor = win.SpeechRecognition || win.webkitSpeechRecognition
  if (typeof Ctor === 'function') {
    SpeechRecognitionConstructor = Ctor as { new(): SpeechRecognitionInstance }
  }
  return SpeechRecognitionConstructor
}

/**
 * 音声認識が利用可能かどうか（APIの存在のみをチェック）
 */
export function isSpeechRecognitionSupported(): boolean {
  return getRecognitionConstructor() !== null
}

/**
 * SpeechRecognition セッション
 */
export class SpeechRecognitionSession {
  private recognition: SpeechRecognitionInstance | null = null
  private _state: RecognitionState = 'idle'

  onResult: ResultCallback | null = null
  onError: ErrorCallback | null = null
  onStateChange: StateCallback | null = null

  get state(): RecognitionState {
    return this._state
  }

  private setState(state: RecognitionState) {
    this._state = state
    this.onStateChange?.(state)
  }

  /**
   * 音声認識を開始
   */
  start(lang: string = 'zh-CN'): void {
    const Ctor = getRecognitionConstructor()
    if (!Ctor) {
      this.onError?.({
        message: 'お使いのブラウザは音声認識に対応していません。Chrome または Edge をお使いください。',
        type: 'not-supported',
      })
      return
    }

    // Android では安全なコンテキスト（HTTPS または localhost）が必須
    if (!window.isSecureContext) {
      this.onError?.({
        message: '安全なコンテキスト（HTTPS または localhost）でのみ音声認識を利用できます。',
        type: 'network',
      })
      return
    }

    // オンライン状態チェック（音声認識はサーバー通信が必要）
    if (!navigator.onLine) {
      this.onError?.({
        message: 'オフライン状態です。インターネット接続が必要です。',
        type: 'network',
      })
      return
    }

    // 既存の認識を停止
    if (this.recognition) {
      try { this.recognition.abort() } catch { /* ignore */ }
    }

    this.recognition = new Ctor()
    this.recognition.continuous = false
    this.recognition.interimResults = true
    this.recognition.lang = lang

    this.recognition.onstart = () => {
      this.setState('listening')
    }

    this.recognition.onend = () => {
      // 処理中でなければアイドルに戻す
      if (this._state === 'listening') {
        this.setState('idle')
      }
    }

    this.recognition.onresult = (event: SpeechRecognitionEvent) => {
      // 最新の結果を取得
      const lastResult = event.results[event.results.length - 1]
      if (!lastResult) return

      const transcript = lastResult[0]?.transcript ?? ''
      const confidence = lastResult[0]?.confidence ?? 0

      this.onResult?.({
        transcript: transcript.trim(),
        isFinal: lastResult.isFinal,
        confidence,
      })

      if (lastResult.isFinal) {
        this.setState('idle')
      }
    }

    this.recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      const errorType = mapErrorType(event.error)
      this.onError?.({
        message: getErrorMessage(errorType),
        type: errorType,
      })
      this.setState('error')
    }

    try {
      this.recognition.start()
    } catch (err) {
      this.onError?.({
        message: '音声認識の開始に失敗しました。',
        type: 'permission',
      })
      this.setState('error')
    }
  }

  /**
   * 音声認識を停止
   */
  stop(): void {
    if (this.recognition) {
      try { this.recognition.stop() } catch { /* ignore */ }
    }
  }

  /**
   * セッションを破棄
   */
  abort(): void {
    if (this.recognition) {
      try { this.recognition.abort() } catch { /* ignore */ }
      this.recognition = null
    }
    this.setState('idle')
  }
}

/**
 * エラータイプのマッピング
 */
function mapErrorType(error: string): RecognitionError['type'] {
  switch (error) {
    case 'no-speech': return 'no-speech'
    case 'aborted': return 'aborted'
    case 'network': return 'network'
    case 'audio-capture': return 'audio'
    case 'not-allowed': return 'permission'
    default: return 'unknown'
  }
}

/**
 * エラーメッセージの日本語化
 */
function getErrorMessage(type: RecognitionError['type']): string {
  switch (type) {
    case 'not-supported': return 'お使いのブラウザは音声認識に対応していません。'
    case 'no-speech': return '音声が検出されませんでした。もう一度お試しください。'
    case 'aborted': return '音声認識が中断されました。'
    case 'network': return 'ネットワークエラーが発生しました。HTTPS 接続かどうか・ネットワーク状態をご確認ください。'
    case 'audio': return 'マイクへのアクセスに失敗しました。'
    case 'permission': return 'マイクの使用が許可されていません。ブラウザの設定でマイクを許可してください。'
    default: return '予期しないエラーが発生しました。'
  }
}
