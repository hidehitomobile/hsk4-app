const fs = require('fs');
const path = require('path');

const wordsPath = path.resolve(__dirname, '../src/data/words.json');
const words = JSON.parse(fs.readFileSync(wordsPath, 'utf-8'));

const measureMap = {
  '包子': '个', '杯子': '个', '笔记本': '个', '鼻子': '个', '窗户': '个',
  '肚子': '个', '耳朵': '个', '方法': '个', '饺子': '个', '镜子': '个',
  '橘子': '个', '句子': '个', '面包': '个', '瓶子': '个', '葡萄': '个',
  '普通话': '个', '箱子': '个', '西红柿': '个', '信封': '个', '笑话': '个',
  '枕头': '个', '主意': '个', '嘴': '个', '盒子': '个',
  '加油站': '个', '塑料袋': '个', '国际': '个', '对话': '个',
  '方向': '个', '导游': '个', '礼拜天': '个',
  '垃圾桶': '个', '零钱': '些', '梦': '场',
  '民族': '个', '内容': '个', '市场': '个',
  '首都': '个', '数量': '个', '数字': '个', '速度': '种',
  '特点': '个', '条件': '个', '误会': '个',
  '心情': '种', '信心': '种', '压力': '种',
  '知识': '种', '座位': '个', '幸福': '种', '钥匙': '把',
  '卫生间': '间', '互联网': '个', '功夫': '套', '汗': '滴',
  '火': '场', '京剧': '场', '酒吧': '家', '矿泉水': '瓶',
  '拉力赛': '场', '脸': '张', '森林': '片', '社会': '个',
  '食品': '种', '生活': '种', '糖果': '颗', '签证': '个',
  '申请': '份', '气候': '种',
  '爱情': '段', '关系': '段', '经历': '段', '过程': '个', '计划': '个',
  '任务': '个', '重点': '个', '优点': '个', '缺点': '个', '性格': '种',
  '习惯': '个', '印象': '个', '总结': '个', '活动': '个', '假': '个',
  '好处': '个', '坏处': '个', '能力': '种', '力气': '种', '传统': '个',
  '文化': '种', '规定': '条', '答案': '个', '标准': '个', '表格': '张',
  '儿童': '个', '大夫': '位', '顾客': '位',
  '母亲': '位', '父亲': '位', '邻居': '位',
  '亲戚': '位', '研究生': '位', '演员': '位',
  '客人': '位', '朋友': '个', '服务员': '位',
  '词典': '本', '杂志': '本', '小说': '本',
  '日记': '本',
  '票': '张', '桌子': '张', '床': '张', '照片': '张',
  '地图': '张', '报纸': '份', '信用卡': '张',
  '毛巾': '条', '裤子': '条', '河': '条', '路': '条', '消息': '条',
  '短信': '条', '法律': '条', '经验': '条', '腿': '条',
  '老虎': '只', '猫': '只', '狗': '只', '鸟': '只', '鱼': '条',
  '动物': '种', '眼睛': '双', '手': '双', '脚': '双',
  '袜子': '双', '鞋': '双',
  '伞': '把', '刀': '把', '椅子': '把',
  '事': '件', '事情': '件', '衣服': '件', '衬衫': '件', '礼物': '件',
  '大使馆': '个',
  '筷子': '双',
  '情况': '种', '东西': '种', '方式': '种', '植物': '种', '味道': '种', '感觉': '种',
  '车': '辆', '出租车': '辆', '公共汽车': '辆', '自行车': '辆',
  '地铁': '条', '火车': '列', '飞机': '架',
  '电脑': '台', '电视': '台', '洗衣机': '台', '冰箱': '台', '手机': '部',
  '空调': '台', '照相机': '台', '传真': '份',
  '山': '座', '楼': '座', '桥': '座', '城市': '座', '办公室': '间',
  '工作': '份', '材料': '份',
  '机会': '次', '考试': '次',
  '老师': '位', '教授': '位',
  '雨': '场', '电影': '部', '比赛': '场',
  '课': '门', '课程': '门',
  '信': '封',
  '蛋糕': '块', '冰': '块', '糖': '块', '巧克力': '块',
  '歌': '首',
  '文章': '篇',
  '学校': '所',
  '家具': '套',
  '商店': '家', '医院': '家', '银行': '家', '饭馆': '家',
  '笔': '支', '烟': '支',
  '树': '棵', '花': '朵',
  '话': '句',
  '人': '个',
  '学生': '名', '记者': '名',
  '公斤': '千克', '米': '米', '元': '元', '毛': '毛',
  '演出': '场',
};

function guessByMeaning(meaning) {
  if (meaning.includes('本') || meaning.includes('書籍') || meaning.includes('辞書')) return '本';
  if (meaning.includes('紙') || meaning.includes('写真') || meaning.includes('地図') || meaning.includes('切符') || meaning.includes('チケット')) return '张';
  if (meaning.includes('ズボン') || meaning.includes('タオル') || meaning.includes('川') || meaning.includes('道') || meaning.includes('筋')) return '条';
  if (meaning.includes('動物') || meaning.includes('猫') || meaning.includes('犬') || meaning.includes('鳥') || meaning.includes('虎') || meaning.includes('鼠')) return '只';
  if (meaning.includes('傘') || meaning.includes('鍵') || meaning.includes('ナイフ')) return '把';
  if (meaning.includes('服') || meaning.includes('シャツ')) return '件';
  if (meaning.includes('靴') || meaning.includes('靴下') || meaning.includes('箸')) return '双';
  if (meaning.includes('車') || meaning.includes('バス') || meaning.includes('自転車')) return '辆';
  if (meaning.includes('テレビ') || meaning.includes('パソコン') || meaning.includes('冷蔵庫') || meaning.includes('洗濯機') || meaning.includes('クーラー')) return '台';
  if (meaning.includes('山') || meaning.includes('橋') || meaning.includes('建物') || meaning.includes('都市')) return '座';
  if (meaning.includes('歌') || meaning.includes('詩')) return '首';
  if (meaning.includes('手紙')) return '封';
  if (meaning.includes('花') || meaning.includes('木') || meaning.includes('植物')) return '朵/棵';
  if (meaning.includes('試験') || meaning.includes('機会')) return '次';
  if (meaning.includes('映画')) return '部';
  if (meaning.includes('店') || meaning.includes('銀行') || meaning.includes('病院') || meaning.includes('レストラン') || meaning.includes('バー')) return '家';
  if (meaning.includes('学校')) return '所';
  if (meaning.includes('列車') || meaning.includes('電車')) return '列';
  if (meaning.includes('人') || meaning.includes('者') || meaning.includes('員')) return '个';
  if (meaning.includes('ペン') || meaning.includes('タバコ')) return '支';
  if (meaning.includes('ケーキ') || meaning.includes('石鹸') || meaning.includes('チョコ')) return '块';
  return undefined;
}

let added = 0;
for (const w of words) {
  if (w.category !== 'noun') continue;
  if (w.measure) continue;

  let m = measureMap[w.hanzi];
  if (!m) m = guessByMeaning(w.meaning);
  if (!m) m = '个';

  w.measure = m;
  added++;
}

fs.writeFileSync(wordsPath, JSON.stringify(words, null, 2), 'utf-8');
console.log(`Added measure words to ${added} nouns.`);
