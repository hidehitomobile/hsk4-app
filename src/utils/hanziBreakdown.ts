/**
 * 漢字の部首・構成情報
 * よく使われる漢字の成り立ちを部首と構成要素で解説
 */
import hanziMap from '../data/hanziBreakdown.json'

interface CharInfo {
  radical: string
  radicalMeaning: string
  components: string[]
  note: string
}

type HanziMap = Record<string, CharInfo>
const map = hanziMap as HanziMap

/**
 * 漢字の分解情報を取得
 */
export function getCharInfo(char: string): CharInfo | null {
  return map[char] ?? null
}

/**
 * 単語を1文字ずつ分解して情報を返す
 */
export function breakdownWord(hanzi: string): { char: string; info: CharInfo | null }[] {
  return [...hanzi].map(char => ({
    char,
    info: getCharInfo(char),
  }))
}
