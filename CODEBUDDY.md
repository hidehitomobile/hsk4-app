# CODEBUDDY.md This file provides guidance to CodeBuddy when working with code in this repository.

## プロジェクト概要

HSK4級合格のための単語学習アプリ。全1200語超を収録し、ピンイン・漢字・日本語訳・例文を表示。Web Speech APIによる発音再生および音声認識（発音チェック）機能を持つReact SPA。

## 使用技術

- React 19 + TypeScript
- Vite 6（ビルドツール）
- CSS カスタムプロパティ + 単一CSSファイル（`src/styles/index.css`）
- React Router v7（HashRouter）
- Web Speech API（音声合成・音声認識）
- Web Audio API（効果音）
- pinyin-pro（ピンイン変換）
- JSONデータファイル（単語データ・漢字分解データ管理）

## 開発環境

- **Windows**（Node.js v24 ネイティブ）
- `node_modules` は Windows ネイティブバイナリで管理（WSL との共有不可）

## 開発コマンド

:: 依存関係のインストール
npm install

:: 開発サーバー起動（localhost:5173）
npm run dev

:: 本番用ビルド
npm run build

:: ビルド結果のプレビュー
npm run preview

# 型チェック
npm run lint
```

## アーキテクチャ

### 単語データ管理

単語データは `src/data/words.json` に格納する。各単語エントリの構造：

```typescript
interface Word {
  id: number;
  hanzi: string;           // 汉字
  pinyin: string;          // 拼音
  meaning: string;         // 日本語訳
  example: string;         // 例文（中国語）
  exampleMeaning: string;  // 例文の日本語訳
  measure?: string;        // 量詞（例: 个、本、张）
  etymology?: string;      // 語源・由来
  mnemonic?: string;       // 日本人向け記憶法
}

type Category = 'noun' | 'verb' | 'adjective' | 'adverb' | 'conjunction'
  | 'preposition' | 'measure' | 'pronoun' | 'numeral' | 'particle' | 'other';

interface WordEntry extends Word {
  category: Category[];    // 複数カテゴリに属する単語がある
}
```

データはHSK4級公式単語リストに基づき、以下の11カテゴリに分類：
- 名詞（noun）・動詞（verb）・形容詞（adjective）・副詞（adverb）
- 接続詞（conjunction）・前置詞（preposition）・量詞（measure）
- 代名詞（pronoun）・数詞（numeral）・助詞（particle）・その他（other）

### 漢字分解データ

`src/data/hanziBreakdown.json` に各漢字の部首・構成要素情報を格納：

```typescript
interface HanziInfo {
  radical: string;           // 部首
  radicalMeaning: string;    // 部首の意味（日本語）
  components: string[];      // 構成要素
  note: string;              // 補足説明
}
```

`src/utils/hanziBreakdown.ts` の `breakdownWord()` で単語を漢字ごとに分解し、各漢字の部首・構成要素情報を取得する。

### コンポーネント構成

```
App (HashRouter)
├── Header             - アプリタイトル、進捗率バッジ、5タブナビゲーション
├── / （学習ページ）
│   ├── SearchBar      - 単語検索（漢字・ピンイン・日本語）
│   ├── ProgressBar    - 学習進捗バー（緑色）
│   ├── CategoryFilter - 12ボタン（すべて + 11カテゴリ）
│   └── WordCard       - 単語カード（主要コンポーネント）
│       ├── 🔊 連続再生ボタン - リスニングモード開始/停止
│       ├── お気に入り切替（★/☆）・学習済み切替（✓/○）
│       ├── 漢字表示（クリックで発音）+ 🔊ボタン
│       ├── ピンイン表示（showPinyin設定で切替）
│       ├── 日本語訳表示（showMeaning設定で切替）
│       ├── 漢字構成セクション（トグル開閉）
│       ├── 語源・覚え方セクション（トグル開閉）
│       ├── 例文セクション（トグル開閉）
│       ├── PronunciationCheck - 音声認識による発音チェック
│       ├── リスニングコントロールバー（リスニングモード時表示）
│       │   ├── シークバー（位置選択スライダー）
│       │   ├── 再生/一時停止/最初から ボタン
│       │   ├── 例文読み上げ切替チェックボックス
│       │   └── 進捗表示・完了メッセージ
│       └── 前へ/次へ ナビゲーション（キーボード←→対応、リスニング中は非表示）
├── /list（一覧ページ）
│   ├── SearchBar
│   ├── CategoryFilter
│   ├── ProgressBar
│   └── WordList       - スクロール可能な単語一覧
│       └── 各行: 漢字・カテゴリ・量詞・ピンイン・意味・♪★✓ボタン
├── /quiz（クイズページ）
│   └── Quiz           - 3モード4択クイズ（各回20問ランダム出題）
│       └── モード: 漢字→意味 / 意味→漢字 / 音声→漢字
│       └── 結果画面: 正答率・間違えた単語一覧（再発音ボタン付き）
└── /settings（設定ページ）
    └── Settings       - 設定項目
        ├── 中国語 音声速度スライダー（0.5〜2.0、0.1刻み）
        ├── 日本語 音声速度スライダー（0.5〜2.0、0.1刻み）
        ├── リスニング間隔スライダー（0.0〜5.0秒、0.2刻み）
        ├── カード切り替え時自動再生
        ├── 例文も自動再生
        ├── ピンイン表示
        ├── 日本語訳表示
        ├── ダークモード
        └── 学習済み単語を非表示
```

### 状態管理

`src/context/WordContext.tsx` — React Contextで以下を一元管理：

```typescript
interface AppSettings {
  speechRate: number;        // デフォルト 0.9
  autoPlay: boolean;         // デフォルト true
  autoPlayMeaning: boolean;  // デフォルト true
  showPinyin: boolean;       // デフォルト true
  showMeaning: boolean;      // デフォルト true
  darkMode: boolean;         // デフォルト false
  hideLearned: boolean;      // デフォルト false
}

// Contextが提供する値
- words: WordEntry[]          // 全単語データ
- currentIndex: number        // 現在の単語インデックス（フィルター後）
- learnedIds: Set<number>     // 学習済み単語ID
- favoriteIds: Set<number>    // お気に入り単語ID
- selectedCategory: Category | 'all'  // 選択中カテゴリ
- searchQuery: string         // 検索クエリ
- settings: AppSettings       // アプリ設定
- filteredWords: WordEntry[]  // フィルター・検索・非表示適用後の単語リスト
- currentWord: WordEntry | null  // 現在表示中の単語
- progress: { learned: number; total: number; percent: number }
```

フィルター条件:
1. `hideLearned` が `true` の場合、学習済み単語を除外
2. `selectedCategory` が `'all'` 以外の場合、`category` 配列に完全一致する単語のみ表示
3. `searchQuery` が空でない場合、`hanzi`・`pinyin`・`meaning` に部分一致（大文字小文字区別なし）

カテゴリ・検索クエリ・非表示設定が変更されると `currentIndex` は `0` にリセットされる。

ダークモードは `<html>` 要素の `data-theme` 属性（`'dark'` / `'light'`）で制御。

### 音声再生

`src/utils/speech.ts` にWeb Speech APIラッパーを実装：
- `speak(text, rate, lang)` - 汎用音声合成。発声中の場合、既存の発声をキャンセルして新しい発声を開始
- `speakWord(hanzi, rate=0.8)` - 単語を中国語（zh-CN）で読み上げ
- `speakExample(text, rate=0.85)` - 例文を中国語で読み上げ
- `speakJapanese(text, rate=0.9)` - 日本語訳を日本語（ja-JP）で読み上げ
- `speakAsync(text, rate, lang)` - Promiseを返す非同期版。`onend`/`onerror` でresolve。タイムアウトフォールバック付き

### リスニングモード（学習ページ内蔵）

WordCard 上部の「🔊 連続再生」ボタンで起動。全単語を自動連続再生：

- 再生順: 単語（中国語）→ 日本語訳 → 例文（中国語）→ 例文日本語訳 → 間隔待機 → 次単語
- `japaneseRate` 設定で日本語読み上げ速度を調整
- `listenInterval` 設定で単語間の待機時間を調整（0.0〜5.0秒）
- 「例文も読み上げる」チェックボックスで例文部分のスキップが可能
- シークバーで任意の位置から再開可能
- 全単語完了後「🎉 全X語の再生が完了しました」を表示
- リスニング中に漢字/例文をクリックすると自動一時停止
- 矢印キー（←→）でリスニング一時停止＋手動移動

### 音声認識（発音チェック）

`src/utils/speechRecognition.ts` — Web Speech Recognition APIラッパー：
- `SpeechRecognitionSession` クラス
  - `start(lang)` / `stop()` / `abort()` メソッド
  - 状態: `'idle' | 'listening' | 'processing' | 'error'`
- `RecognitionResult`: `{ transcript; isFinal; confidence }`
- `isSpeechRecognitionSupported()` — ブラウザ対応チェック
- 対応エラー種別: `not-supported` / `no-speech` / `aborted` / `network` / `audio` / `permission` / `unknown`

`PronunciationCheck` コンポーネント:
- マイクボタンで録音開始/停止
- 認識中の途中経過をリアルタイム表示
- 認識完了後: `pinyin-pro` で認識テキスト→ピンイン変換し、正解漢字・ピンインと比較
- 正誤に応じて効果音を再生（`src/utils/sound.ts`）

### 効果音

`src/utils/sound.ts` — Web Audio APIで効果音を生成：
- `playCorrectSound()` — 正解音（C5→E5の上昇サイン波）
- `playIncorrectSound()` — 不正解音（下降矩形波ブザー音）

### データフロー

1. `words.json` から単語データを読み込み（`WordEntry[]` として型付け）
2. `WordProvider` が全単語リストを受け取り、フィルター状態を管理
3. ユーザー操作に応じて `filteredWords` を算出し表示を更新
4. 学習状態（`learnedIds`/`favoriteIds`）・設定（`settings`）・`currentIndex`・`selectedCategory`・`searchQuery` はlocalStorageに永続化
5. 音声再生はユーザーアクション（ボタンクリック/漢字クリック）または自動再生設定に応じて発火
6. 音声認識はマイクボタンのクリックで明示的に開始

### ルーティング

React Router v6 + HashRouter を使用（GitHub Pages等の静的ホスティング対応）：
- `/` - 単語学習メイン画面（フラッシュカード形式、リスニングモード内蔵）
- `/list` - 単語一覧画面（スクロールリスト形式、行クリックでカード画面にジャンプ）
- `/quiz` - クイズモード（3モード、20問ランダム出題、4択、結果表示）
- `/settings` - 設定画面
- `/typing` - タイピング練習

### キーボードショートカット

- `←` / `→` : 前の単語 / 次の単語（学習ページ）
- `→` : 次の問題（クイズページ）

### スタイリング

単一CSSファイル `src/styles/index.css` で全スタイルを管理：
- CSSカスタムプロパティによるテーマ管理（`[data-theme="dark"]` / `[data-theme="light"]`）
- ダークモード対応（背景色・文字色・ボタン・入力欄など全要素）
- 最大幅600pxのシングルカラムレイアウト
- 主要アニメーション: `pulse-recording`（マイクボタン録音中点滅）

### ビルド設定

Viteのビルドで手動チャンク分割:
- `vendor`: `node_modules` の依存関係
- `word-data`: `words.json`（大容量データを個別チャンク化）

### ストレージ戦略

| データ | 保存先 | キー |
|---|---|---|
| 単語データ | 静的JSON（ビルド時にバンドル） | - |
| 学習済み単語ID | localStorage | `hsk4_learned` |
| お気に入り単語ID | localStorage | `hsk4_favorites` |
| アプリ設定 | localStorage | `hsk4_settings` |
| 現在の単語インデックス | localStorage | `hsk4_currentIndex` |
| 選択中カテゴリ | localStorage | `hsk4_selectedCategory` |
| 検索クエリ | localStorage | `hsk4_searchQuery` |
