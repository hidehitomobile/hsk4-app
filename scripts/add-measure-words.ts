import * as fs from 'fs'
import * as path from 'path'

interface WordEntry {
  id: number
  hanzi: string
  pinyin: string
  meaning: string
  example: string
  exampleMeaning: string
  category: string
  measure?: string
}

const wordsPath = path.resolve(__dirname, '../src/data/words.json')
const words: WordEntry[] = JSON.parse(fs.readFileSync(wordsPath, 'utf-8'))

// 単語の意味と漢字に基づいて適切な量詞を返すマッピング
const measureMap: Record<string, string> = {
  // 个 - 汎用
  '包子': '个', '杯子': '个', '笔记本': '个', '鼻子': '个', '窗户': '个',
  '肚子': '个', '耳朵': '个', '方法': '个', '饺子': '个', '镜子': '个',
  '橘子': '个', '句子': '个', '面包': '个', '瓶子': '个', '葡萄': '个',
  '普通话': '个', '箱子': '个', '西红柿': '个', '信封': '个', '笑话': '个',
  '醒': '个', '枕头': '个', '主意': '个', '嘴': '个', '盒子': '个',
  '加油站': '个', '加油站': '个', '塑料袋': '个', '国际': '个', '对话': '个',
  '方向': '个', '导游': '个', '礼拜天': '个',

  // 个 - 抽象名詞
  '爱情': '段', '关系': '段', '经历': '段', '过程': '个', '计划': '个',
  '任务': '个', '重点': '个', '优点': '个', '缺点': '个', '性格': '种',
  '习惯': '个', '印象': '个', '总结': '个', '活动': '个', '假': '个',
  '好处': '个', '坏处': '个', '能力': '种', '力气': '种', '传统': '个',
  '文化': '种', '规定': '条', '答案': '个', '标准': '个', '表格': '张',

  // 个 - 人
  '儿童': '个', '大夫': '个/位', '导游': '个/位', '顾客': '个/位',
  '顾客': '个/位', '母亲': '个/位', '父亲': '个/位', '邻居': '个/位',
  '亲戚': '个/位', '研究生': '个/位', '演员': '个/位', '大夫': '个/位',
  '客人': '个/位', '朋友': '个/位', '服务员': '个/位',

  // 本 - 本/書籍
  '词典': '本', '杂志': '本', '书': '本', '笔记本': '本', '小说': '本',
  '日记': '本',

  // 张 - 平らなもの
  '表格': '张', '票': '张', '桌子': '张', '床': '张', '照片': '张',
  '地图': '张', '报纸': '张/份', '信用卡': '张',

  // 条 - 細長いもの
  '毛巾': '条', '裤子': '条', '河': '条', '路': '条', '消息': '条',
  '短信': '条', '法律': '条', '规定': '条', '经验': '条', '腿': '条',
  '卫生间': '个',

  // 只 - 動物/片方
  '老虎': '只', '猫': '只', '狗': '只', '鸟': '只', '鱼': '条',
  '动物': '只/种', '眼睛': '只/双', '手': '只/双', '脚': '只/双',
  '袜子': '只/双', '鞋': '只/双',

  // 把 - 取っ手のあるもの
  '钥匙': '把', '伞': '把', '刀': '把', '椅子': '把',

  // 件 - 事項/衣服
  '事': '件', '事情': '件', '衣服': '件', '衬衫': '件', '礼物': '件/份',
  '大使馆': '个',

  // 双 - ペア
  '筷子': '双', '袜子': '双', '鞋': '双', '眼睛': '双', '手': '双',

  // 种 - 種類
  '情况': '种', '东西': '种', '性格': '种', '能力': '种', '力气': '种',
  '方式': '种', '植物': '种', '动物': '种', '味道': '种', '感觉': '种',
  '气候': '种',

  // 辆 - 乗り物
  '车': '辆', '出租车': '辆', '公共汽车': '辆', '自行车': '辆',
  '地铁': '条/列', '火车': '列', '飞机': '架',

  // 台 - 機械
  '电脑': '台', '电视': '台', '洗衣机': '台', '冰箱': '台', '手机': '部/台',
  '空调': '台', '照相机': '台', '传真': '份',

  // 座 - 建築物/山
  '山': '座', '楼': '座/栋', '桥': '座', '城市': '座', '办公室': '间',

  // 份 - 書類
  '报纸': '份', '工作': '份', '材料': '份', '礼物': '份',

  // 次 - 機会/試験
  '机会': '次', '考试': '次', '演出': '场', '演出': '场',

  // 位 - 敬称
  '老师': '位', '教授': '位', '大夫': '位', '客人': '位',

  // 场 - 出来事
  '雨': '场', '电影': '场', '梦': '场', '比赛': '场', '演出': '场',
  '活动': '场/个',

  // 门 - 科目
  '课': '门', '课程': '门',

  // 封 - 手紙
  '信': '封',

  // 块 - 塊
  '蛋糕': '块', '冰': '块', '糖': '块', '巧克力': '块',

  // 首 - 歌/詩
  '歌': '首',

  // 篇 - 文章
  '文章': '篇',

  // 所 - 学校
  '学校': '所',

  // 套 - セット
  '家具': '套', '材料': '套',

  // 部 - 映画/作品
  '电影': '部', '手机': '部', '小说': '部',

  // 家 - 店舗
  '商店': '家', '医院': '家', '银行': '家', '饭馆': '家', '大使馆': '个',

  // 层 - 階
  '楼': '层',

  // 支 - 細長い棒状
  '笔': '支', '烟': '支/根',

  // 棵 - 植物
  '树': '棵', '花': '朵/棵',

  // 句 - 言葉
  '话': '句',

  // 口 - 家族/人数
  '人': '口/个',

  // 名 - 人（正式）
  '学生': '名', '记者': '名',

  // 千克/公斤/米 - 単位
  '公斤': '千克', '米': '米/公尺', '元': '元/块', '毛': '毛/角',

  // 特殊
  '功夫': '套',
  '汗': '滴',
  '互联网': '个',
  '火': '场/团',
  '京剧': '场/出',
  '酒吧': '家',
  '矿泉水': '瓶',
  '拉力赛': '场',
  '辣': '种',
  '礼拜天': '个',
  '垃圾桶': '个',
  '理发': '次',
  '脸': '张',
  '零钱': '些',
  '梦': '场',
  '民族': '个',
  '内容': '个/项',
  '气候': '种',
  '签证': '个/次',
  '森林': '片',
  '社会': '个',
  '申请': '份',
  '生活': '种',
  '食品': '种',
  '市场': '个',
  '首都': '个',
  '数量': '个',
  '数字': '个',
  '速度': '种/个',
  '酸': '种',
  '糖果': '颗',
  '特点': '个',
  '条件': '个',
  '误会': '个',
  '西红柿': '个',
  '心情': '种',
  '信心': '种',
  '压力': '种/个',
  '演出': '场',
  '社会': '个',
  '知识': '种',
  '座位': '个',
  '幸福': '种',
  '钥匙': '把',
  '卫生间': '间',
  '肚子': '个',
  '普通话': '个',
  '座位': '个',
}

// 意味ベースのフォールバックマッピング
function guessByMeaning(meaning: string): string | undefined {
  if (meaning.includes('本') || meaning.includes('書籍') || meaning.includes('辞書')) return '本'
  if (meaning.includes('紙') || meaning.includes('写真') || meaning.includes('地図') || meaning.includes('切符') || meaning.includes('チケット')) return '张'
  if (meaning.includes('ズボン') || meaning.includes('タオル') || meaning.includes('川') || meaning.includes('道') || meaning.includes('筋')) return '条'
  if (meaning.includes('動物') || meaning.includes('猫') || meaning.includes('犬') || meaning.includes('鳥') || meaning.includes('虎') || meaning.includes('鼠')) return '只'
  if (meaning.includes('傘') || meaning.includes('鍵') || meaning.includes('ナイフ')) return '把'
  if (meaning.includes('服') || meaning.includes('シャツ')) return '件'
  if (meaning.includes('靴') || meaning.includes('靴下') || meaning.includes('箸')) return '双'
  if (meaning.includes('車') || meaning.includes('バス') || meaning.includes('自転車')) return '辆'
  if (meaning.includes('テレビ') || meaning.includes('パソコン') || meaning.includes('冷蔵庫') || meaning.includes('洗濯機') || meaning.includes('クーラー')) return '台'
  if (meaning.includes('山') || meaning.includes('橋') || meaning.includes('建物') || meaning.includes('都市')) return '座'
  if (meaning.includes('歌') || meaning.includes('詩')) return '首'
  if (meaning.includes('手紙')) return '封'
  if (meaning.includes('花') || meaning.includes('木') || meaning.includes('植物')) return '朵/棵'
  if (meaning.includes('試験') || meaning.includes('機会')) return '次'
  if (meaning.includes('映画')) return '部/场'
  if (meaning.includes('店') || meaning.includes('銀行') || meaning.includes('病院') || meaning.includes('レストラン')) return '家'
  if (meaning.includes('人') || meaning.includes('者')) return '个'
  if (meaning.includes('学校')) return '所'
  return undefined
}

let added = 0
for (const w of words) {
  if (w.category !== 'noun') continue
  // すでに measure がある場合はスキップ
  if (w.measure) continue

  // 漢字での完全一致
  let m = measureMap[w.hanzi]
  // 意味からの推測
  if (!m) m = guessByMeaning(w.meaning)
  // デフォルトは「个」
  if (!m) m = '个'

  w.measure = m
  added++
}

fs.writeFileSync(wordsPath, JSON.stringify(words, null, 2), 'utf-8')
console.log(`Added measure words to ${added} nouns.`)
