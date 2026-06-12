# CODEBUDDY.md This file provides guidance to CodeBuddy when working with code in this repository.

## プロジェクト概要

HSK4級合格のための単語学習アプリ。全1200語を収録し、ピンイン・漢字・日本語訳・例文を表示。Web Speech APIによる発音再生機能を持つReact SPA。

## 使用技術

- React 18 + TypeScript
- Vite（ビルドツール）
- CSS Modules（スタイリング）
- Web Speech API（音声合成）
- JSONデータファイル（単語データ管理）

## 開発コマンド

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（localhost:5173）
npm run dev

# 本番用ビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# リンター実行
npm run lint
```

## アーキテクチャ

### 単語データ管理

単語データは `src/data/words.json` に格納する。各単語エントリの構造：

```typescript
interface Word {
  id: number;
  hanzi: string;        // 汉字
  pinyin: string;       // 拼音
  meaning: string;      // 日本語訳
  example: string;      // 例文（中国語）
  exampleMeaning: string; // 例文の日本語訳
}
```

データはHSK4級公式単語リストに基づき、以下のカテゴリに分類：
- 名詞（nouns）
- 動詞（verbs）
- 形容詞（adjectives）
- 副詞（adverbs）
- その他（others）- 接続詞、前置詞、量詞など

### コンポーネント構成

```
App
├── Header          - アプリタイトル、進捗表示
├── CategoryFilter  - 品詞カテゴリフィルター
├── WordCard        - 単語カード（漢字、ピンイン、意味、例文）
│   ├── HanziDisplay   - 漢字表示
│   ├── PinyinDisplay  - ピンイン表示
│   ├── MeaningDisplay - 日本語訳表示
│   ├── ExampleDisplay - 例文表示（toggle開閉）
│   └── PlayButton     - 発音再生ボタン
├── Navigation     - 前へ/次へ ナビゲーション
├── SearchBar      - 単語検索（漢字・ピンイン・日本語）
├── ProgressBar    - 学習進捗バー
└── Settings       - 設定（音声速度、自動再生など）
```

### 状態管理

React Context (`WordContext`) で以下を一元管理：
- `currentIndex` - 現在表示中の単語インデックス
- `learnedWords` - 学習済み単語IDのSet
- `favoriteWords` - お気に入り単語IDのSet
- `selectedCategory` - 選択中のカテゴリフィルター
- `settings` - アプリ設定（音声速度、自動再生ON/OFF）

### 音声再生

`src/utils/speech.ts` にWeb Speech APIラッパーを実装：
- `speakWord(hanzi, rate)` - 単語を中国語で読み上げ
- `speakExample(text, rate)` - 例文を読み上げ
- 中国語音声（zh-CN）を優先的に使用
- 音声速度は設定から調整可能（0.5〜2.0）

### データフロー

1. `words.json` から単語データを読み込み
2. `WordContext` が全単語リストとフィルター状態を保持
3. ユーザー操作（カテゴリ選択、検索、ナビゲーション）に応じて表示単語を更新
4. 学習状態（learned/favorite）はlocalStorageに永続化
5. 音声再生はユーザーアクション（ボタンクリック）に応じて発火

### ルーティング

React Router v6 を使用：
- `/` - 単語学習メイン画面（フラッシュカード形式）
- `/list` - 単語一覧画面（テーブル形式、フィルタリング・検索可能）
- `/quiz` - 簡易クイズモード（漢字→意味、または意味→漢字）
- `/settings` - 設定画面

### レスポンシブデザイン

モバイルファーストアプローチ。CSS Modulesでブレークポイントを設定：
- モバイル：〜767px（縦長レイアウト、スワイプ操作対応）
- タブレット：768px〜1023px
- デスクトップ：1024px〜（横長レイアウト、キーボード操作対応）

### ストレージ戦略

- 単語データ：静的JSON（ビルド時にバンドル）
- 学習進捗：localStorage（`hsk4_progress` キー）
- お気に入り：localStorage（`hsk4_favorites` キー）
- 設定：localStorage（`hsk4_settings` キー）
