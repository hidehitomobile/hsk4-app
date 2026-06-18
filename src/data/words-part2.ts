const words2 = [
  {
    "id": 637,
    "hanzi": "月",
    "pinyin": "yuè",
    "meaning": "月",
    "example": "这是月。",
    "exampleMeaning": "これは月です。",
    "category": [
      "noun"
    ],
    "etymology": "「月」（月：つき）。月を表す。",
    "mnemonic": "「ギョ」＝月（つき）→「月」で覚える。"
  },
  {
    "id": 638,
    "hanzi": "再见",
    "pinyin": "zàijiàn",
    "meaning": "さようなら",
    "example": "这是再见。",
    "exampleMeaning": "これは再见です。",
    "category": [
      "noun"
    ],
    "etymology": "「再」（冂：けいがまえ）＋「见」（見（见）：みる）。さようならを表す。",
    "mnemonic": "「ZIJIN」＝再（けいがまえ）＋见（みる）→「さようなら」で覚える。"
  },
  {
    "id": 639,
    "hanzi": "怎么",
    "pinyin": "zěnme",
    "meaning": "どうやって？",
    "example": "这是怎么。",
    "exampleMeaning": "これは怎么です。",
    "category": [
      "noun"
    ],
    "etymology": "「怎」（心：こころ）＋「么」（丿：の）。どうやって？を表す。",
    "mnemonic": "「ZNME」＝怎（こころ）＋么（の）→「どうやって？」で覚える。"
  },
  {
    "id": 640,
    "hanzi": "怎么样",
    "pinyin": "zěnmeyàng",
    "meaning": "どう？どんな感じ？",
    "example": "这是怎么样。",
    "exampleMeaning": "これは怎么样です。",
    "category": [
      "noun"
    ],
    "etymology": "「怎」（心：こころ）＋「么」（丿：の）＋「样」（木：きへん）。どう？どんな感じ？を表す。",
    "mnemonic": "「ZNMEYNG」＝怎（こころ）＋么（の）＋样（きへん）→「どう？どんな感じ？」で覚える。"
  },
  {
    "id": 641,
    "hanzi": "这",
    "pinyin": "zhè",
    "meaning": "これ、この",
    "example": "这很好。",
    "exampleMeaning": "这はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「这」（辶：しんにょう）。これ、このを表す。",
    "mnemonic": "「ZH」＝这（しんにょう）→「これ、この」で覚える。"
  },
  {
    "id": 642,
    "hanzi": "中国",
    "pinyin": "zhōngguó",
    "meaning": "中国",
    "example": "这是中国。",
    "exampleMeaning": "これは中国です。",
    "category": [
      "noun"
    ],
    "etymology": "「中」（丨：たてぼう）＋「国」（囗：くにがまえ）。中国を表す。",
    "mnemonic": "「ZHNGGU」＝中（たてぼう）＋国（くにがまえ）→「中国」で覚える。"
  },
  {
    "id": 643,
    "hanzi": "中午",
    "pinyin": "zhōngwǔ",
    "meaning": "正午",
    "example": "这是中午。",
    "exampleMeaning": "これは中午です。",
    "category": [
      "noun"
    ],
    "etymology": "「中」（丨：たてぼう）＋「午」（十：じゅう）。正午を表す。",
    "mnemonic": "「ZHNGW」＝中（たてぼう）＋午（じゅう）→「正午」で覚える。"
  },
  {
    "id": 644,
    "hanzi": "住",
    "pinyin": "zhù",
    "meaning": "住む",
    "example": "我住了。",
    "exampleMeaning": "私は住ました。",
    "category": [
      "verb"
    ],
    "etymology": "「住」（人（亻）：にんべん）。住むを表す。",
    "mnemonic": "「ZH」＝住（にんべん）→「住む」で覚える。"
  },
  {
    "id": 645,
    "hanzi": "桌子",
    "pinyin": "zhuōzi",
    "meaning": "机、テーブル",
    "example": "这是桌子。",
    "exampleMeaning": "これは桌子です。",
    "category": [
      "noun"
    ],
    "etymology": "「桌」（木：き）＋「子」（子：こ）。机、テーブルを表す。",
    "mnemonic": "「ショシ」＝桌（き）＋子（こ）→「机、テーブル」で覚える。"
  },
  {
    "id": 646,
    "hanzi": "字",
    "pinyin": "zì",
    "meaning": "文字、字",
    "example": "这是字。",
    "exampleMeaning": "これは字です。",
    "category": [
      "noun"
    ],
    "etymology": "「字」（子：こへん）。文字、字を表す。",
    "mnemonic": "「Z」＝字（こへん）→「文字、字」で覚える。"
  },
  {
    "id": 647,
    "hanzi": "昨天",
    "pinyin": "zuótiān",
    "meaning": "昨日",
    "example": "这是昨天。",
    "exampleMeaning": "これは昨天です。",
    "category": [
      "noun"
    ],
    "etymology": "「昨」（日：ひへん）＋「天」（大：だい）。昨日を表す。",
    "mnemonic": "「ソテイN」＝昨（ひへん）＋天（だい）→「昨日」で覚える。"
  },
  {
    "id": 648,
    "hanzi": "做",
    "pinyin": "zuò",
    "meaning": "する、作る",
    "example": "我做了。",
    "exampleMeaning": "私は做ました。",
    "category": [
      "verb"
    ],
    "etymology": "「做」（人（亻）：にんべん）。する、作るを表す。",
    "mnemonic": "「ソ」＝做（にんべん）→「する、作る」で覚える。"
  },
  {
    "id": 649,
    "hanzi": "坐",
    "pinyin": "zuò",
    "meaning": "座る",
    "example": "我坐了。",
    "exampleMeaning": "私は坐ました。",
    "category": [
      "verb"
    ],
    "etymology": "「坐」（土：つち）。座るを表す。",
    "mnemonic": "「ソ」＝坐（つち）→「座る」で覚える。"
  },
  {
    "id": 650,
    "hanzi": "吧",
    "pinyin": "ba",
    "meaning": "〜しよう（提案の語気助詞）",
    "example": "你好吧！",
    "exampleMeaning": "こんにちは吧！",
    "category": [
      "particle"
    ],
    "etymology": "「吧」（口：くちへん）。〜しよう（提案の語気助詞）を表す。",
    "mnemonic": "「ハ」＝吧（くちへん）→「〜しよう（提案の語気助詞）」で覚える。"
  },
  {
    "id": 651,
    "hanzi": "白",
    "pinyin": "bái",
    "meaning": "白い",
    "example": "这是白。",
    "exampleMeaning": "これは白です。",
    "category": [
      "noun"
    ],
    "etymology": "「白」（白：しろ）。白いを表す。",
    "mnemonic": "「BI」＝白（しろ）→「白い」で覚える。"
  },
  {
    "id": 652,
    "hanzi": "百",
    "pinyin": "bǎi",
    "meaning": "百",
    "example": "有百个。",
    "exampleMeaning": "百個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「百」（白：しろ）。百を表す。",
    "mnemonic": "「BI」＝百（しろ）→「百」で覚える。"
  },
  {
    "id": 653,
    "hanzi": "帮助",
    "pinyin": "bāngzhù",
    "meaning": "助ける、手伝う",
    "example": "这是帮助。",
    "exampleMeaning": "これは帮助です。",
    "category": [
      "noun"
    ],
    "etymology": "「帮」（巾：はば）＋「助」（力：ちから）。助ける、手伝うを表す。",
    "mnemonic": "「BNGZH」＝帮（はば）＋助（ちから）→「助ける、手伝う」で覚える。"
  },
  {
    "id": 654,
    "hanzi": "报纸",
    "pinyin": "bàozhǐ",
    "meaning": "新聞",
    "example": "这是报纸。",
    "exampleMeaning": "これは报纸です。",
    "category": [
      "noun"
    ],
    "etymology": "「报」（手（扌）：てへん）＋「纸」（糸（纟）：いとへん）。新聞を表す。",
    "mnemonic": "「BOZH」＝报（てへん）＋纸（いとへん）→「新聞」で覚える。"
  },
  {
    "id": 655,
    "hanzi": "比",
    "pinyin": "bǐ",
    "meaning": "〜より（比較）",
    "example": "你好比！",
    "exampleMeaning": "こんにちは比！",
    "category": [
      "particle"
    ],
    "etymology": "「比」（比：くらべる）。〜より（比較）を表す。",
    "mnemonic": "「B」＝比（くらべる）→「〜より（比較）」で覚える。"
  },
  {
    "id": 656,
    "hanzi": "别",
    "pinyin": "bié",
    "meaning": "〜しないで",
    "example": "我别了。",
    "exampleMeaning": "私は别ました。",
    "category": [
      "verb"
    ],
    "etymology": "「别」（刀（刂）：りっとう）。〜しないでを表す。",
    "mnemonic": "「ヒ」＝别（りっとう）→「〜しないで」で覚える。"
  },
  {
    "id": 657,
    "hanzi": "宾馆",
    "pinyin": "bīnguǎn",
    "meaning": "旅館、ホテル",
    "example": "这是宾馆。",
    "exampleMeaning": "これは宾馆です。",
    "category": [
      "noun"
    ],
    "etymology": "「宾」（宀：うかんむり）＋「馆」（食（饣）：しょくへん）。旅館、ホテルを表す。",
    "mnemonic": "「BNGUN」＝宾（うかんむり）＋馆（しょくへん）→「旅館、ホテル」で覚える。"
  },
  {
    "id": 658,
    "hanzi": "长(形容词)",
    "pinyin": "cháng",
    "meaning": "長い",
    "example": "这很长(形容词)。",
    "exampleMeaning": "これはとても长(形容词)です。",
    "category": [
      "adjective"
    ],
    "etymology": "「长」（長（长）：ながい）＋「(」（(：かっこ）＋「形」（彡：さんづくり）＋「容」（宀：うかんむり）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。長いを表す。",
    "mnemonic": "「CHNG」＝长（ながい）＋(（かっこ）＋形（さんづくり）＋容（うかんむり）＋词（ごんべん）＋)（かっこ）→「長い」で覚える。"
  },
  {
    "id": 659,
    "hanzi": "唱歌",
    "pinyin": "chànggē",
    "meaning": "歌を歌う",
    "example": "我唱歌了。",
    "exampleMeaning": "私は唱歌ました。",
    "category": [
      "verb"
    ],
    "etymology": "「唱」（口：くちへん）＋「歌」（欠：あくび）。歌を歌うを表す。",
    "mnemonic": "「CHNGG」＝唱（くちへん）＋歌（あくび）→「歌を歌う」で覚える。"
  },
  {
    "id": 660,
    "hanzi": "出",
    "pinyin": "chū",
    "meaning": "出る",
    "example": "我出了。",
    "exampleMeaning": "私は出ました。",
    "category": [
      "verb"
    ],
    "etymology": "「出」（凵：うけばこ）。出るを表す。",
    "mnemonic": "「CH」＝出（うけばこ）→「出る」で覚える。"
  },
  {
    "id": 661,
    "hanzi": "穿",
    "pinyin": "chuān",
    "meaning": "着る、履く",
    "example": "我穿了。",
    "exampleMeaning": "私は穿ました。",
    "category": [
      "verb"
    ],
    "etymology": "「穿」（穴：あなかんむり）。着る、履くを表す。",
    "mnemonic": "「シュツN」＝穿（あなかんむり）→「着る、履く」で覚える。"
  },
  {
    "id": 662,
    "hanzi": "次",
    "pinyin": "cì",
    "meaning": "〜回、次",
    "example": "这是次。",
    "exampleMeaning": "これは次です。",
    "category": [
      "noun"
    ],
    "etymology": "「次」（欠：あくび）。〜回、次を表す。",
    "mnemonic": "「C」＝次（あくび）→「〜回、次」で覚える。"
  },
  {
    "id": 663,
    "hanzi": "从",
    "pinyin": "cóng",
    "meaning": "〜から",
    "example": "他从我来了。",
    "exampleMeaning": "彼は私从来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「从」（人：ひと）。〜からを表す。",
    "mnemonic": "「CNG」＝从（ひと）→「〜から」で覚える。"
  },
  {
    "id": 664,
    "hanzi": "错",
    "pinyin": "cuò",
    "meaning": "間違い",
    "example": "这是错。",
    "exampleMeaning": "これは错です。",
    "category": [
      "noun"
    ],
    "etymology": "「错」（金（钅）：かねへん）。間違いを表す。",
    "mnemonic": "「ソク」＝错（かねへん）→「間違い」で覚える。"
  },
  {
    "id": 665,
    "hanzi": "打篮球",
    "pinyin": "dǎlánqiú",
    "meaning": "バスケットボールをする",
    "example": "我打篮球了。",
    "exampleMeaning": "私は打篮球ました。",
    "category": [
      "verb"
    ],
    "etymology": "「打」（手（扌）：てへん）＋「篮」（竹（⺮）：たけかんむり）＋「球」（玉（王）：たまへん）。バスケットボールをするを表す。",
    "mnemonic": "「DLNQI」＝打（てへん）＋篮（たけかんむり）＋球（たまへん）→「バスケットボールをする」で覚える。"
  },
  {
    "id": 666,
    "hanzi": "大家",
    "pinyin": "dàjiā",
    "meaning": "みなさん、皆",
    "example": "大家很好。",
    "exampleMeaning": "大家はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「大」（大：だい）＋「家」（宀：うかんむり）。みなさん、皆を表す。",
    "mnemonic": "「Dキ」＝大（だい）＋家（うかんむり）→「みなさん、皆」で覚える。"
  },
  {
    "id": 667,
    "hanzi": "到",
    "pinyin": "dào",
    "meaning": "〜に着く、〜へ",
    "example": "他到我来了。",
    "exampleMeaning": "彼は私到来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「到」（刀（刂）：りっとう）。〜に着く、〜へを表す。",
    "mnemonic": "「Dオ」＝到（りっとう）→「〜に着く、〜へ」で覚える。"
  },
  {
    "id": 668,
    "hanzi": "得(助词)",
    "pinyin": "de",
    "meaning": "〜の仕方を表す構造助詞（動詞の後ろに付けて様態を表す）",
    "example": "你好得(助词)！",
    "exampleMeaning": "こんにちは得(助词)！",
    "category": [
      "particle"
    ],
    "etymology": "「得」（彳：ぎょうにんべん）＋「(」（(：かっこ）＋「助」（力：ちから）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。〜の仕方を表す構造助詞（動詞の後ろに付けて様態を表す）を表す。",
    "mnemonic": "「トク」＝得（ぎょうにんべん）＋(（かっこ）＋助（ちから）＋词（ごんべん）＋)（かっこ）→「〜の仕方を表す構造助詞（動詞の後ろに付けて様態を表す）」で覚える。"
  },
  {
    "id": 669,
    "hanzi": "等(动词)",
    "pinyin": "děng",
    "meaning": "待つ",
    "example": "我等(动词)了。",
    "exampleMeaning": "私は等(动词)ました。",
    "category": [
      "verb"
    ],
    "etymology": "「等」（竹（⺮）：たけかんむり）＋「(」（(：かっこ）＋「动」（力：ちから）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。待つを表す。",
    "mnemonic": "「DNG」＝等（たけかんむり）＋(（かっこ）＋动（ちから）＋词（ごんべん）＋)（かっこ）→「待つ」で覚える。"
  },
  {
    "id": 670,
    "hanzi": "弟弟",
    "pinyin": "dìdi",
    "meaning": "弟",
    "example": "这是弟弟。",
    "exampleMeaning": "これは弟弟です。",
    "category": [
      "noun"
    ],
    "etymology": "「弟」（弓：ゆみ）＋「弟」（弓：ゆみ）。弟を表す。",
    "mnemonic": "「Dテキ」＝弟（ゆみ）＋弟（ゆみ）→「弟」で覚える。"
  },
  {
    "id": 671,
    "hanzi": "第一",
    "pinyin": "dìyī",
    "meaning": "まず、最初に",
    "example": "有第一个。",
    "exampleMeaning": "第一個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「第」（竹（⺮）：たけかんむり）＋「一」（一：いち）。まず、最初にを表す。",
    "mnemonic": "「DY」＝第（たけかんむり）＋一（いち）→「まず、最初に」で覚える。"
  },
  {
    "id": 672,
    "hanzi": "懂",
    "pinyin": "dǒng",
    "meaning": "分かる、理解する",
    "example": "我懂了。",
    "exampleMeaning": "私は懂ました。",
    "category": [
      "verb"
    ],
    "etymology": "「懂」（心（忄）：りっしんべん）。分かる、理解するを表す。",
    "mnemonic": "「DNG」＝懂（りっしんべん）→「分かる、理解する」で覚える。"
  },
  {
    "id": 673,
    "hanzi": "对(介词)",
    "pinyin": "duì",
    "meaning": "〜に対して（前置詞）",
    "example": "这是对(介词)。",
    "exampleMeaning": "これは对(介词)です。",
    "category": [
      "noun"
    ],
    "etymology": "「对」（寸：すん）＋「(」（(：かっこ）＋「介」（人：ひと）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。〜に対して（前置詞）を表す。",
    "mnemonic": "「トク」＝对（すん）＋(（かっこ）＋介（ひと）＋词（ごんべん）＋)（かっこ）→「〜に対して（前置詞）」で覚える。"
  },
  {
    "id": 674,
    "hanzi": "对(形容词)",
    "pinyin": "duì",
    "meaning": "正しい",
    "example": "这很对(形容词)。",
    "exampleMeaning": "これはとても对(形容词)です。",
    "category": [
      "adjective"
    ],
    "etymology": "「对」（寸：すん）＋「(」（(：かっこ）＋「形」（彡：さんづくり）＋「容」（宀：うかんむり）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。正しいを表す。",
    "mnemonic": "「トク」＝对（すん）＋(（かっこ）＋形（さんづくり）＋容（うかんむり）＋词（ごんべん）＋)（かっこ）→「正しい」で覚える。"
  },
  {
    "id": 675,
    "hanzi": "房间",
    "pinyin": "fángjiān",
    "meaning": "部屋",
    "example": "这是房间。",
    "exampleMeaning": "これは房间です。",
    "category": [
      "noun"
    ],
    "etymology": "「房」（戶（户）：とだれ）＋「间」（門（门）：もんがまえ）。部屋を表す。",
    "mnemonic": "「FNGJIN」＝房（とだれ）＋间（もんがまえ）→「部屋」で覚える。"
  },
  {
    "id": 676,
    "hanzi": "非常",
    "pinyin": "fēicháng",
    "meaning": "非常に、とても",
    "example": "这是非常。",
    "exampleMeaning": "これは非常です。",
    "category": [
      "noun"
    ],
    "etymology": "「非」（非：あらず）＋「常」（巾：はば）。非常に、とてもを表す。",
    "mnemonic": "「FICHNG」＝非（あらず）＋常（はば）→「非常に、とても」で覚える。"
  },
  {
    "id": 677,
    "hanzi": "服务员",
    "pinyin": "fúwùyuán",
    "meaning": "店員、ウェイター",
    "example": "这是服务员。",
    "exampleMeaning": "これは服务员です。",
    "category": [
      "noun"
    ],
    "etymology": "「服」（月：つきへん）＋「务」（力：ちから）＋「员」（口：くち）。店員、ウェイターを表す。",
    "mnemonic": "「FWギョN」＝服（つきへん）＋务（ちから）＋员（くち）→「店員、ウェイター」で覚える。"
  },
  {
    "id": 678,
    "hanzi": "高",
    "pinyin": "gāo",
    "meaning": "高い",
    "example": "这很高。",
    "exampleMeaning": "これはとても高です。",
    "category": [
      "adjective"
    ],
    "etymology": "「高」（高：たかい）。高いを表す。",
    "mnemonic": "「Gオ」＝高（たかい）→「高い」で覚える。"
  },
  {
    "id": 679,
    "hanzi": "告诉",
    "pinyin": "gàosu",
    "meaning": "教える、伝える",
    "example": "我告诉了。",
    "exampleMeaning": "私は告诉ました。",
    "category": [
      "verb"
    ],
    "etymology": "「告」（口：くち）＋「诉」（言（讠）：ごんべん）。教える、伝えるを表す。",
    "mnemonic": "「GOSU」＝告（くち）＋诉（ごんべん）→「教える、伝える」で覚える。"
  },
  {
    "id": 680,
    "hanzi": "哥哥",
    "pinyin": "gēge",
    "meaning": "兄、お兄さん",
    "example": "这是哥哥。",
    "exampleMeaning": "これは哥哥です。",
    "category": [
      "noun"
    ],
    "etymology": "「哥」（一：いち）＋「哥」（一：いち）。兄、お兄さんを表す。",
    "mnemonic": "「Gカク」＝哥（いち）＋哥（いち）→「兄、お兄さん」で覚える。"
  },
  {
    "id": 681,
    "hanzi": "给",
    "pinyin": "gěi",
    "meaning": "〜に、〜へ",
    "example": "他给我来了。",
    "exampleMeaning": "彼は私给来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「给」（糸（纟）：いとへん）。〜に、〜へを表す。",
    "mnemonic": "「GI」＝给（いとへん）→「〜に、〜へ」で覚える。"
  },
  {
    "id": 682,
    "hanzi": "公共汽车",
    "pinyin": "gōnggòngqìchē",
    "meaning": "バス",
    "example": "这是公共汽车。",
    "exampleMeaning": "これは公共汽车です。",
    "category": [
      "noun"
    ],
    "etymology": "「公」（八：はち）＋「共」（八：はち）＋「汽」（水（氵）：さんずい）＋「车」（車（车）：くるま）。バスを表す。",
    "mnemonic": "「GNGGNGQCH」＝公（はち）＋共（はち）＋汽（さんずい）＋车（くるま）→「バス」で覚える。"
  },
  {
    "id": 683,
    "hanzi": "公司",
    "pinyin": "gōngsī",
    "meaning": "会社",
    "example": "这是公司。",
    "exampleMeaning": "これは公司です。",
    "category": [
      "noun"
    ],
    "etymology": "「公」（八：はち）＋「司」（口：くち）。会社を表す。",
    "mnemonic": "「GNGS」＝公（はち）＋司（くち）→「会社」で覚える。"
  },
  {
    "id": 684,
    "hanzi": "贵",
    "pinyin": "guì",
    "meaning": "高い（値段）",
    "example": "这很贵。",
    "exampleMeaning": "これはとても贵です。",
    "category": [
      "adjective"
    ],
    "etymology": "「贵」（貝（贝）：かい）。高い（値段）を表す。",
    "mnemonic": "「コ」＝贵（かい）→「高い（値段）」で覚える。"
  },
  {
    "id": 685,
    "hanzi": "过(助词)",
    "pinyin": "guo",
    "meaning": "〜したことがある（経験を表す助詞）",
    "example": "我过(助词)了。",
    "exampleMeaning": "私は过(助词)ました。",
    "category": [
      "verb"
    ],
    "etymology": "「过」（辶：しんにょう）＋「(」（(：かっこ）＋「助」（力：ちから）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。〜したことがある（経験を表す助詞）を表す。",
    "mnemonic": "「カ」＝过（しんにょう）＋(（かっこ）＋助（ちから）＋词（ごんべん）＋)（かっこ）→「〜したことがある（経験を表す助詞）」で覚える。"
  },
  {
    "id": 686,
    "hanzi": "孩子",
    "pinyin": "háizi",
    "meaning": "子供",
    "example": "这是孩子。",
    "exampleMeaning": "これは孩子です。",
    "category": [
      "noun"
    ],
    "etymology": "「孩」（子：こへん）＋「子」（子：こ）。子供を表す。",
    "mnemonic": "「HIZI」＝孩（こへん）＋子（こ）→「子供」で覚える。"
  },
  {
    "id": 687,
    "hanzi": "还(副词)",
    "pinyin": "hái",
    "meaning": "まだ",
    "example": "他还(副词)来了。",
    "exampleMeaning": "彼は还(副词)来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「还」（辶：しんにょう）＋「(」（(：かっこ）＋「副」（刀（刂）：りっとう）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。まだを表す。",
    "mnemonic": "「HI」＝还（しんにょう）＋(（かっこ）＋副（りっとう）＋词（ごんべん）＋)（かっこ）→「まだ」で覚える。"
  },
  {
    "id": 688,
    "hanzi": "好吃",
    "pinyin": "hǎochī",
    "meaning": "美味しい",
    "example": "这是好吃。",
    "exampleMeaning": "これは好吃です。",
    "category": [
      "noun"
    ],
    "etymology": "「好」（女：おんなへん）＋「吃」（口：くちへん）。美味しいを表す。",
    "mnemonic": "「HOCH」＝好（おんなへん）＋吃（くちへん）→「美味しい」で覚える。"
  },
  {
    "id": 689,
    "hanzi": "黑",
    "pinyin": "hēi",
    "meaning": "黒い",
    "example": "这是黑。",
    "exampleMeaning": "これは黑です。",
    "category": [
      "noun"
    ],
    "etymology": "「黑」（黑：くろ）。黒いを表す。",
    "mnemonic": "「HI」＝黑（くろ）→「黒い」で覚える。"
  },
  {
    "id": 690,
    "hanzi": "红",
    "pinyin": "hóng",
    "meaning": "赤い",
    "example": "这是红。",
    "exampleMeaning": "これは红です。",
    "category": [
      "noun"
    ],
    "etymology": "「红」（糸（纟）：いとへん）。赤いを表す。",
    "mnemonic": "「HNG」＝红（いとへん）→「赤い」で覚える。"
  },
  {
    "id": 691,
    "hanzi": "火车站",
    "pinyin": "huǒchēzhàn",
    "meaning": "駅（鉄道）",
    "example": "这是火车站。",
    "exampleMeaning": "これは火车站です。",
    "category": [
      "noun"
    ],
    "etymology": "「火」（火：ひ）＋「车」（車（车）：くるま）＋「站」（立：たつへん）。駅（鉄道）を表す。",
    "mnemonic": "「コCHZHN」＝火（ひ）＋车（くるま）＋站（たつへん）→「駅（鉄道）」で覚える。"
  },
  {
    "id": 692,
    "hanzi": "机场",
    "pinyin": "jīchǎng",
    "meaning": "空港",
    "example": "这是机场。",
    "exampleMeaning": "これは机场です。",
    "category": [
      "noun"
    ],
    "etymology": "「机」（木：きへん）＋「场」（土：つちへん）。空港を表す。",
    "mnemonic": "「JCHNG」＝机（きへん）＋场（つちへん）→「空港」で覚える。"
  },
  {
    "id": 693,
    "hanzi": "鸡蛋",
    "pinyin": "jīdàn",
    "meaning": "卵",
    "example": "这是鸡蛋。",
    "exampleMeaning": "これは鸡蛋です。",
    "category": [
      "noun"
    ],
    "etymology": "「鸡」（鳥（鸟）：とり）＋「蛋」（虫：むしへん）。卵を表す。",
    "mnemonic": "「JDN」＝鸡（とり）＋蛋（むしへん）→「卵」で覚える。"
  },
  {
    "id": 694,
    "hanzi": "件",
    "pinyin": "jiàn",
    "meaning": "〜件（出来事などを数える量詞）",
    "example": "这是件。",
    "exampleMeaning": "これは件です。",
    "category": [
      "noun"
    ],
    "etymology": "「件」（人（亻）：にんべん）。〜件（出来事などを数える量詞）を表す。",
    "mnemonic": "「キN」＝件（にんべん）→「〜件（出来事などを数える量詞）」で覚える。"
  },
  {
    "id": 695,
    "hanzi": "教室",
    "pinyin": "jiàoshì",
    "meaning": "教室",
    "example": "这是教室。",
    "exampleMeaning": "これは教室です。",
    "category": [
      "noun"
    ],
    "etymology": "「教」（攵：のぶん）＋「室」（宀：うかんむり）。教室を表す。",
    "mnemonic": "「キOSH」＝教（のぶん）＋室（うかんむり）→「教室」で覚える。"
  },
  {
    "id": 696,
    "hanzi": "姐姐",
    "pinyin": "jiějie",
    "meaning": "姉、お姉さん",
    "example": "这是姐姐。",
    "exampleMeaning": "これは姐姐です。",
    "category": [
      "noun"
    ],
    "etymology": "「姐」（女：おんなへん）＋「姐」（女：おんなへん）。姉、お姉さんを表す。",
    "mnemonic": "「キカイ」＝姐（おんなへん）＋姐（おんなへん）→「姉、お姉さん」で覚える。"
  },
  {
    "id": 697,
    "hanzi": "介绍",
    "pinyin": "jièshào",
    "meaning": "紹介する",
    "example": "我介绍了。",
    "exampleMeaning": "私は介绍ました。",
    "category": [
      "verb"
    ],
    "etymology": "「介」（人：ひと）＋「绍」（糸（纟）：いとへん）。紹介するを表す。",
    "mnemonic": "「キSHオ」＝介（ひと）＋绍（いとへん）→「紹介する」で覚える。"
  },
  {
    "id": 698,
    "hanzi": "近",
    "pinyin": "jìn",
    "meaning": "近い",
    "example": "这是近。",
    "exampleMeaning": "これは近です。",
    "category": [
      "noun"
    ],
    "etymology": "「近」（辶：しんにょう）。近いを表す。",
    "mnemonic": "「JN」＝近（しんにょう）→「近い」で覚える。"
  },
  {
    "id": 699,
    "hanzi": "进",
    "pinyin": "jìn",
    "meaning": "入る",
    "example": "我进了。",
    "exampleMeaning": "私は进ました。",
    "category": [
      "verb"
    ],
    "etymology": "「进」（辶：しんにょう）。入るを表す。",
    "mnemonic": "「JN」＝进（しんにょう）→「入る」で覚える。"
  },
  {
    "id": 700,
    "hanzi": "就",
    "pinyin": "jiù",
    "meaning": "ちょうど、ただ",
    "example": "他就来了。",
    "exampleMeaning": "彼は就来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「就」（尢：まげあし）。ちょうど、ただを表す。",
    "mnemonic": "「キ」＝就（まげあし）→「ちょうど、ただ」で覚える。"
  },
  {
    "id": 701,
    "hanzi": "觉得",
    "pinyin": "juéde",
    "meaning": "思う、考える",
    "example": "我觉得了。",
    "exampleMeaning": "私は觉得ました。",
    "category": [
      "verb"
    ],
    "etymology": "「觉」（見（见）：みる）＋「得」（彳：ぎょうにんべん）。思う、考えるを表す。",
    "mnemonic": "「キョトク」＝觉（みる）＋得（ぎょうにんべん）→「思う、考える」で覚える。"
  },
  {
    "id": 702,
    "hanzi": "咖啡",
    "pinyin": "kāfēi",
    "meaning": "コーヒー",
    "example": "这是咖啡。",
    "exampleMeaning": "これは咖啡です。",
    "category": [
      "noun"
    ],
    "etymology": "「咖」（口：くちへん）＋「啡」（口：くちへん）。コーヒーを表す。",
    "mnemonic": "「KFI」＝咖（くちへん）＋啡（くちへん）→「コーヒー」で覚える。"
  },
  {
    "id": 703,
    "hanzi": "开始",
    "pinyin": "kāishǐ",
    "meaning": "始まる、始める",
    "example": "我开始了。",
    "exampleMeaning": "私は开始ました。",
    "category": [
      "verb"
    ],
    "etymology": "「开」（廾：にじゅうあし）＋「始」（女：おんなへん）。始まる、始めるを表す。",
    "mnemonic": "「KISH」＝开（にじゅうあし）＋始（おんなへん）→「始まる、始める」で覚える。"
  },
  {
    "id": 704,
    "hanzi": "考试",
    "pinyin": "kǎoshì",
    "meaning": "試験",
    "example": "这是考试。",
    "exampleMeaning": "これは考试です。",
    "category": [
      "noun"
    ],
    "etymology": "「考」（老：おいかんむり）＋「试」（言（讠）：ごんべん）。試験を表す。",
    "mnemonic": "「KOSH」＝考（おいかんむり）＋试（ごんべん）→「試験」で覚える。"
  },
  {
    "id": 705,
    "hanzi": "可能",
    "pinyin": "kěnéng",
    "meaning": "〜かもしれない",
    "example": "这是可能。",
    "exampleMeaning": "これは可能です。",
    "category": [
      "noun"
    ],
    "etymology": "「可」（口：くち）＋「能」（肉（月）：にくづき）。〜かもしれないを表す。",
    "mnemonic": "「KNNG」＝可（くち）＋能（にくづき）→「〜かもしれない」で覚える。"
  },
  {
    "id": 706,
    "hanzi": "可以",
    "pinyin": "kěyǐ",
    "meaning": "できる",
    "example": "这是可以。",
    "exampleMeaning": "これは可以です。",
    "category": [
      "noun"
    ],
    "etymology": "「可」（口：くち）＋「以」（人：ひと）。できるを表す。",
    "mnemonic": "「KY」＝可（くち）＋以（ひと）→「できる」で覚える。"
  },
  {
    "id": 707,
    "hanzi": "课",
    "pinyin": "kè",
    "meaning": "科目、主題",
    "example": "这是课。",
    "exampleMeaning": "これは课です。",
    "category": [
      "noun"
    ],
    "etymology": "「课」（言（讠）：ごんべん）。科目、主題を表す。",
    "mnemonic": "「K」＝课（ごんべん）→「科目、主題」で覚える。"
  },
  {
    "id": 708,
    "hanzi": "快",
    "pinyin": "kuài",
    "meaning": "急速な",
    "example": "这是快。",
    "exampleMeaning": "これは快です。",
    "category": [
      "noun"
    ],
    "etymology": "「快」（心（忄）：りっしんべん）。急速なを表す。",
    "mnemonic": "「コI」＝快（りっしんべん）→「急速な」で覚える。"
  },
  {
    "id": 709,
    "hanzi": "快乐",
    "pinyin": "kuàilè",
    "meaning": "嬉しい、楽しい",
    "example": "这很快乐。",
    "exampleMeaning": "これはとても快乐です。",
    "category": [
      "adjective"
    ],
    "etymology": "「快」（心（忄）：りっしんべん）＋「乐」（丿：の）。嬉しい、楽しいを表す。",
    "mnemonic": "「コIL」＝快（りっしんべん）＋乐（の）→「嬉しい、楽しい」で覚える。"
  },
  {
    "id": 710,
    "hanzi": "累",
    "pinyin": "lèi",
    "meaning": "疲れた",
    "example": "这很累。",
    "exampleMeaning": "これはとても累です。",
    "category": [
      "adjective"
    ],
    "etymology": "「累」（糸：いと）。疲れたを表す。",
    "mnemonic": "「LI」＝累（いと）→「疲れた」で覚える。"
  },
  {
    "id": 711,
    "hanzi": "离",
    "pinyin": "lí",
    "meaning": "〜から離れている",
    "example": "我离了。",
    "exampleMeaning": "私は离ました。",
    "category": [
      "verb"
    ],
    "etymology": "「离」（禸：ぐうのあし）。〜から離れているを表す。",
    "mnemonic": "「L」＝离（ぐうのあし）→「〜から離れている」で覚える。"
  },
  {
    "id": 712,
    "hanzi": "两",
    "pinyin": "liǎng",
    "meaning": "2、二つ",
    "example": "有两个。",
    "exampleMeaning": "两個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「两」（一：いち）。2、二つを表す。",
    "mnemonic": "「リNG」＝两（いち）→「2、二つ」で覚える。"
  },
  {
    "id": 713,
    "hanzi": "零",
    "pinyin": "líng",
    "meaning": "0、ゼロ",
    "example": "有零个。",
    "exampleMeaning": "零個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「零」（雨：あめかんむり）。0、ゼロを表す。",
    "mnemonic": "「LNG」＝零（あめかんむり）→「0、ゼロ」で覚える。"
  },
  {
    "id": 714,
    "hanzi": "路",
    "pinyin": "lù",
    "meaning": "道、道路",
    "example": "这是路。",
    "exampleMeaning": "これは路です。",
    "category": [
      "noun"
    ],
    "etymology": "「路」（足（⻊）：あしへん）。道、道路を表す。",
    "mnemonic": "「L」＝路（あしへん）→「道、道路」で覚える。"
  },
  {
    "id": 715,
    "hanzi": "旅游",
    "pinyin": "lv3yóu",
    "meaning": "旅行、出張",
    "example": "这是旅游。",
    "exampleMeaning": "これは旅游です。",
    "category": [
      "noun"
    ],
    "etymology": "「旅」（方：ほうへん）＋「游」（水（氵）：さんずい）。旅行、出張を表す。",
    "mnemonic": "「リョYU」＝旅（ほうへん）＋游（さんずい）→「旅行、出張」で覚える。"
  },
  {
    "id": 716,
    "hanzi": "卖",
    "pinyin": "mài",
    "meaning": "売る",
    "example": "我卖了。",
    "exampleMeaning": "私は卖ました。",
    "category": [
      "verb"
    ],
    "etymology": "「卖」（十：じゅう）。売るを表す。",
    "mnemonic": "「MI」＝卖（じゅう）→「売る」で覚える。"
  },
  {
    "id": 717,
    "hanzi": "慢",
    "pinyin": "màn",
    "meaning": "遅い",
    "example": "这很慢。",
    "exampleMeaning": "これはとても慢です。",
    "category": [
      "adjective"
    ],
    "etymology": "「慢」（心（忄）：りっしんべん）。遅いを表す。",
    "mnemonic": "「MN」＝慢（りっしんべん）→「遅い」で覚える。"
  },
  {
    "id": 718,
    "hanzi": "忙",
    "pinyin": "máng",
    "meaning": "話し中（電話）",
    "example": "这很忙。",
    "exampleMeaning": "これはとても忙です。",
    "category": [
      "adjective"
    ],
    "etymology": "「忙」（心（忄）：りっしんべん）。話し中（電話）を表す。",
    "mnemonic": "「MNG」＝忙（りっしんべん）→「話し中（電話）」で覚える。"
  },
  {
    "id": 719,
    "hanzi": "每",
    "pinyin": "měi",
    "meaning": "それぞれ",
    "example": "每很好。",
    "exampleMeaning": "每はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「每」（毋：なかれ）。それぞれを表す。",
    "mnemonic": "「MI」＝每（なかれ）→「それぞれ」で覚える。"
  },
  {
    "id": 720,
    "hanzi": "妹妹",
    "pinyin": "mèimei",
    "meaning": "妹",
    "example": "这是妹妹。",
    "exampleMeaning": "これは妹妹です。",
    "category": [
      "noun"
    ],
    "etymology": "「妹」（女：おんなへん）＋「妹」（女：おんなへん）。妹を表す。",
    "mnemonic": "「MIMEI」＝妹（おんなへん）＋妹（おんなへん）→「妹」で覚える。"
  },
  {
    "id": 721,
    "hanzi": "门",
    "pinyin": "mén",
    "meaning": "ドア、門",
    "example": "这是门。",
    "exampleMeaning": "これは门です。",
    "category": [
      "noun"
    ],
    "etymology": "「门」（門（门）：もんがまえ）。ドア、門を表す。",
    "mnemonic": "「MN」＝门（もんがまえ）→「ドア、門」で覚える。"
  },
  {
    "id": 722,
    "hanzi": "面条",
    "pinyin": "miàntiáo",
    "meaning": "麺類",
    "example": "这是面条。",
    "exampleMeaning": "これは面条です。",
    "category": [
      "noun"
    ],
    "etymology": "「面」（面：めん）＋「条」（木：き）。麺類を表す。",
    "mnemonic": "「ミNTIオ」＝面（めん）＋条（き）→「麺類」で覚える。"
  },
  {
    "id": 723,
    "hanzi": "男",
    "pinyin": "nán",
    "meaning": "男性",
    "example": "这是男。",
    "exampleMeaning": "これは男です。",
    "category": [
      "noun"
    ],
    "etymology": "「男」（田：た）。男性を表す。",
    "mnemonic": "「NN」＝男（た）→「男性」で覚える。"
  },
  {
    "id": 724,
    "hanzi": "您",
    "pinyin": "nín",
    "meaning": "あなた",
    "example": "您很好。",
    "exampleMeaning": "您はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「您」（心：こころ）。あなたを表す。",
    "mnemonic": "「NN」＝您（こころ）→「あなた」で覚える。"
  },
  {
    "id": 725,
    "hanzi": "牛奶",
    "pinyin": "niúnǎi",
    "meaning": "牛乳",
    "example": "这是牛奶。",
    "exampleMeaning": "これは牛奶です。",
    "category": [
      "noun"
    ],
    "etymology": "「牛」（牛：うし）＋「奶」（女：おんなへん）。牛乳を表す。",
    "mnemonic": "「ニNI」＝牛（うし）＋奶（おんなへん）→「牛乳」で覚える。"
  },
  {
    "id": 726,
    "hanzi": "女",
    "pinyin": "nǚ",
    "meaning": "女性",
    "example": "这是女。",
    "exampleMeaning": "これは女です。",
    "category": [
      "noun"
    ],
    "etymology": "「女」（女：おんな）。女性を表す。",
    "mnemonic": "「N」＝女（おんな）→「女性」で覚える。"
  },
  {
    "id": 727,
    "hanzi": "旁边",
    "pinyin": "pángbiān",
    "meaning": "〜の隣、そば",
    "example": "这是旁边。",
    "exampleMeaning": "これは旁边です。",
    "category": [
      "noun"
    ],
    "etymology": "「旁」（方：ほう）＋「边」（辶：しんにょう）。〜の隣、そばを表す。",
    "mnemonic": "「PNGBIN」＝旁（ほう）＋边（しんにょう）→「〜の隣、そば」で覚える。"
  },
  {
    "id": 728,
    "hanzi": "跑步",
    "pinyin": "pǎobù",
    "meaning": "走る、ジョギングする",
    "example": "我跑步了。",
    "exampleMeaning": "私は跑步ました。",
    "category": [
      "verb"
    ],
    "etymology": "「跑」（足（⻊）：あしへん）＋「步」（止：とめる）。走る、ジョギングするを表す。",
    "mnemonic": "「POB」＝跑（あしへん）＋步（とめる）→「走る、ジョギングする」で覚える。"
  },
  {
    "id": 729,
    "hanzi": "便宜",
    "pinyin": "piányi",
    "meaning": "安い",
    "example": "这很便宜。",
    "exampleMeaning": "これはとても便宜です。",
    "category": [
      "adjective"
    ],
    "etymology": "「便」（人（亻）：にんべん）＋「宜」（宀：うかんむり）。安いを表す。",
    "mnemonic": "「ヒNYI」＝便（にんべん）＋宜（うかんむり）→「安い」で覚える。"
  },
  {
    "id": 730,
    "hanzi": "票",
    "pinyin": "piào",
    "meaning": "切符、チケット",
    "example": "这是票。",
    "exampleMeaning": "これは票です。",
    "category": [
      "noun"
    ],
    "etymology": "「票」（示：しめす）。切符、チケットを表す。",
    "mnemonic": "「ヒオ」＝票（しめす）→「切符、チケット」で覚える。"
  },
  {
    "id": 731,
    "hanzi": "妻子",
    "pinyin": "qīzi",
    "meaning": "妻",
    "example": "这是妻子。",
    "exampleMeaning": "これは妻子です。",
    "category": [
      "noun"
    ],
    "etymology": "「妻」（女：おんな）＋「子」（子：こ）。妻を表す。",
    "mnemonic": "「Qシ」＝妻（おんな）＋子（こ）→「妻」で覚える。"
  },
  {
    "id": 732,
    "hanzi": "起床",
    "pinyin": "qǐchuáng",
    "meaning": "起きる",
    "example": "我起床了。",
    "exampleMeaning": "私は起床ました。",
    "category": [
      "verb"
    ],
    "etymology": "「起」（走：そうにょう）＋「床」（广：まだれ）。起きるを表す。",
    "mnemonic": "「QシュツNG」＝起（そうにょう）＋床（まだれ）→「起きる」で覚える。"
  },
  {
    "id": 733,
    "hanzi": "千",
    "pinyin": "qiān",
    "meaning": "千",
    "example": "有千个。",
    "exampleMeaning": "千個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「千」（十：じゅう）。千を表す。",
    "mnemonic": "「キN」＝千（じゅう）→「千」で覚える。"
  },
  {
    "id": 734,
    "hanzi": "铅笔",
    "pinyin": "qiānbǐ",
    "meaning": "鉛筆",
    "example": "这是铅笔。",
    "exampleMeaning": "これは铅笔です。",
    "category": [
      "noun"
    ],
    "etymology": "「铅」（金（钅）：かねへん）＋「笔」（竹（⺮）：たけかんむり）。鉛筆を表す。",
    "mnemonic": "「キNB」＝铅（かねへん）＋笔（たけかんむり）→「鉛筆」で覚える。"
  },
  {
    "id": 735,
    "hanzi": "晴",
    "pinyin": "qíng",
    "meaning": "晴れ",
    "example": "这很晴。",
    "exampleMeaning": "これはとても晴です。",
    "category": [
      "adjective"
    ],
    "etymology": "「晴」（日：ひへん）。晴れを表す。",
    "mnemonic": "「QNG」＝晴（ひへん）→「晴れ」で覚える。"
  },
  {
    "id": 736,
    "hanzi": "去年",
    "pinyin": "qùnián",
    "meaning": "去年",
    "example": "这是去年。",
    "exampleMeaning": "これは去年です。",
    "category": [
      "noun"
    ],
    "etymology": "「去」（厶：む）＋「年」（干：ほす）。去年を表す。",
    "mnemonic": "「QニN」＝去（む）＋年（ほす）→「去年」で覚える。"
  },
  {
    "id": 737,
    "hanzi": "让",
    "pinyin": "ràng",
    "meaning": "〜させる、許可する",
    "example": "我让了。",
    "exampleMeaning": "私は让ました。",
    "category": [
      "verb"
    ],
    "etymology": "「让」（言（讠）：ごんべん）。〜させる、許可するを表す。",
    "mnemonic": "「RNG」＝让（ごんべん）→「〜させる、許可する」で覚える。"
  },
  {
    "id": 738,
    "hanzi": "日",
    "pinyin": "rì",
    "meaning": "日、〜日",
    "example": "这是日。",
    "exampleMeaning": "これは日です。",
    "category": [
      "noun"
    ],
    "etymology": "「日」（日：ひ）。日、〜日を表す。",
    "mnemonic": "「R」＝日（ひ）→「日、〜日」で覚える。"
  },
  {
    "id": 739,
    "hanzi": "上班",
    "pinyin": "shàngbān",
    "meaning": "出勤する、仕事に行く",
    "example": "我上班了。",
    "exampleMeaning": "私は上班ました。",
    "category": [
      "verb"
    ],
    "etymology": "「上」（一：いち）＋「班」（玉（王）：たまへん）。出勤する、仕事に行くを表す。",
    "mnemonic": "「SHNGBN」＝上（いち）＋班（たまへん）→「出勤する、仕事に行く」で覚える。"
  },
  {
    "id": 740,
    "hanzi": "身体",
    "pinyin": "shēntǐ",
    "meaning": "体",
    "example": "这是身体。",
    "exampleMeaning": "これは身体です。",
    "category": [
      "noun"
    ],
    "etymology": "「身」（身：み）＋「体」（人（亻）：にんべん）。体を表す。",
    "mnemonic": "「SHNT」＝身（み）＋体（にんべん）→「体」で覚える。"
  },
  {
    "id": 741,
    "hanzi": "生病",
    "pinyin": "shēngbìng",
    "meaning": "病気になる",
    "example": "我生病了。",
    "exampleMeaning": "私は生病ました。",
    "category": [
      "verb"
    ],
    "etymology": "「生」（生：うまれる）＋「病」（疒：やまいだれ）。病気になるを表す。",
    "mnemonic": "「SHNGBNG」＝生（うまれる）＋病（やまいだれ）→「病気になる」で覚える。"
  },
  {
    "id": 742,
    "hanzi": "生日",
    "pinyin": "shēngrì",
    "meaning": "誕生日",
    "example": "这是生日。",
    "exampleMeaning": "これは生日です。",
    "category": [
      "noun"
    ],
    "etymology": "「生」（生：うまれる）＋「日」（日：ひ）。誕生日を表す。",
    "mnemonic": "「SHNGR」＝生（うまれる）＋日（ひ）→「誕生日」で覚える。"
  },
  {
    "id": 743,
    "hanzi": "时间",
    "pinyin": "shíjiān",
    "meaning": "時間",
    "example": "这是时间。",
    "exampleMeaning": "これは时间です。",
    "category": [
      "noun"
    ],
    "etymology": "「时」（日：ひへん）＋「间」（門（门）：もんがまえ）。時間を表す。",
    "mnemonic": "「SHキN」＝时（ひへん）＋间（もんがまえ）→「時間」で覚える。"
  },
  {
    "id": 744,
    "hanzi": "事情",
    "pinyin": "shìqing",
    "meaning": "用事、出来事",
    "example": "这是事情。",
    "exampleMeaning": "これは事情です。",
    "category": [
      "noun"
    ],
    "etymology": "「事」（亅：はねぼう）＋「情」（心（忄）：こころ）。用事、出来事を表す。",
    "mnemonic": "「シセイ」＝事（はねぼう）＋情（こころ）→「用事、出来事」で覚える。"
  },
  {
    "id": 745,
    "hanzi": "手表",
    "pinyin": "shǒubiǎo",
    "meaning": "腕時計",
    "example": "这是手表。",
    "exampleMeaning": "これは手表です。",
    "category": [
      "noun"
    ],
    "etymology": "「手」（手：て）＋「表」（衣：ころも）。腕時計を表す。",
    "mnemonic": "「SHUBIオ」＝手（て）＋表（ころも）→「腕時計」で覚える。"
  },
  {
    "id": 746,
    "hanzi": "手机",
    "pinyin": "shǒujī",
    "meaning": "携帯電話",
    "example": "这是手机。",
    "exampleMeaning": "これは手机です。",
    "category": [
      "noun"
    ],
    "etymology": "「手」（手：て）＋「机」（木：きへん）。携帯電話を表す。",
    "mnemonic": "「SHUJ」＝手（て）＋机（きへん）→「携帯電話」で覚える。"
  },
  {
    "id": 747,
    "hanzi": "说话",
    "pinyin": "shuōhuà",
    "meaning": "話す",
    "example": "我说话了。",
    "exampleMeaning": "私は说话ました。",
    "category": [
      "verb"
    ],
    "etymology": "「说」（言（讠）：ごんべん）＋「话」（言（讠）：ごんべん）。話すを表す。",
    "mnemonic": "「ショコ」＝说（ごんべん）＋话（ごんべん）→「話す」で覚える。"
  },
  {
    "id": 748,
    "hanzi": "送",
    "pinyin": "sòng",
    "meaning": "届ける、送る",
    "example": "我送了。",
    "exampleMeaning": "私は送ました。",
    "category": [
      "verb"
    ],
    "etymology": "「送」（辶：しんにょう）。届ける、送るを表す。",
    "mnemonic": "「SNG」＝送（しんにょう）→「届ける、送る」で覚える。"
  },
  {
    "id": 749,
    "hanzi": "虽然…但是…",
    "pinyin": "suīrán…dànshì…",
    "meaning": "〜だけれども、〜にもかかわらず",
    "example": "这是虽然…但是…。",
    "exampleMeaning": "これは虽然…但是…です。",
    "category": [
      "noun"
    ],
    "etymology": "「虽」（口：くち）＋「然」（火（灬）：れっか）＋「…」（…：てんてん）＋「但」（人（亻）：にんべん）＋「是」（日：ひへん）＋「…」（…：てんてん）。〜だけれども、〜にもかかわらずを表す。",
    "mnemonic": "「ソクRNDNSH」＝虽（くち）＋然（れっか）＋…（てんてん）＋但（にんべん）＋是（ひへん）＋…（てんてん）→「〜だけれども、〜にもかかわらず」で覚える。"
  },
  {
    "id": 750,
    "hanzi": "它",
    "pinyin": "tā",
    "meaning": "それ",
    "example": "它很好。",
    "exampleMeaning": "它はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「它」（宀：うかんむり）。それを表す。",
    "mnemonic": "「T」＝它（うかんむり）→「それ」で覚える。"
  },
  {
    "id": 751,
    "hanzi": "踢足球",
    "pinyin": "tīzúqiú",
    "meaning": "サッカーをする",
    "example": "我踢足球了。",
    "exampleMeaning": "私は踢足球ました。",
    "category": [
      "verb"
    ],
    "etymology": "「踢」（足（⻊）：あしへん）＋「足」（足：あし）＋「球」（玉（王）：たまへん）。サッカーをするを表す。",
    "mnemonic": "「TZキ」＝踢（あしへん）＋足（あし）＋球（たまへん）→「サッカーをする」で覚える。"
  },
  {
    "id": 752,
    "hanzi": "题",
    "pinyin": "tí",
    "meaning": "問題、題",
    "example": "这是题。",
    "exampleMeaning": "これは题です。",
    "category": [
      "noun"
    ],
    "etymology": "「题」（頁（页）：おおがい）。問題、題を表す。",
    "mnemonic": "「T」＝题（おおがい）→「問題、題」で覚える。"
  },
  {
    "id": 753,
    "hanzi": "跳舞",
    "pinyin": "tiàowǔ",
    "meaning": "踊る",
    "example": "我跳舞了。",
    "exampleMeaning": "私は跳舞ました。",
    "category": [
      "verb"
    ],
    "etymology": "「跳」（足（⻊）：あしへん）＋「舞」（舛：まいあし）。踊るを表す。",
    "mnemonic": "「テイOW」＝跳（あしへん）＋舞（まいあし）→「踊る」で覚える。"
  },
  {
    "id": 754,
    "hanzi": "外",
    "pinyin": "wài",
    "meaning": "外側",
    "example": "他外我来了。",
    "exampleMeaning": "彼は私外来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「外」（夕：ゆうべ）。外側を表す。",
    "mnemonic": "「WI」＝外（ゆうべ）→「外側」で覚える。"
  },
  {
    "id": 755,
    "hanzi": "完",
    "pinyin": "wán",
    "meaning": "終わる",
    "example": "我完了。",
    "exampleMeaning": "私は完ました。",
    "category": [
      "verb"
    ],
    "etymology": "「完」（宀：うかんむり）。終わるを表す。",
    "mnemonic": "「WN」＝完（うかんむり）→「終わる」で覚える。"
  },
  {
    "id": 756,
    "hanzi": "玩",
    "pinyin": "wán",
    "meaning": "遊ぶ、楽しむ",
    "example": "我玩了。",
    "exampleMeaning": "私は玩ました。",
    "category": [
      "verb"
    ],
    "etymology": "「玩」（玉（王）：たまへん）。遊ぶ、楽しむを表す。",
    "mnemonic": "「WN」＝玩（たまへん）→「遊ぶ、楽しむ」で覚える。"
  },
  {
    "id": 757,
    "hanzi": "晚上",
    "pinyin": "wǎnshang",
    "meaning": "夜に",
    "example": "他晚上我来了。",
    "exampleMeaning": "彼は私晚上来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「晚」（日：ひへん）＋「上」（一：いち）。夜にを表す。",
    "mnemonic": "「WNSHANG」＝晚（ひへん）＋上（いち）→「夜に」で覚える。"
  },
  {
    "id": 758,
    "hanzi": "往",
    "pinyin": "wǎng",
    "meaning": "行く",
    "example": "我往了。",
    "exampleMeaning": "私は往ました。",
    "category": [
      "verb"
    ],
    "etymology": "「往」（彳：ぎょうにんべん）。行くを表す。",
    "mnemonic": "「WNG」＝往（ぎょうにんべん）→「行く」で覚える。"
  },
  {
    "id": 759,
    "hanzi": "为什么",
    "pinyin": "wèishénme",
    "meaning": "なぜ？",
    "example": "他为什么我来了。",
    "exampleMeaning": "彼は私为什么来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「为」（丶：てん）＋「什」（人（亻）：にんべん）＋「么」（丿：の）。なぜ？を表す。",
    "mnemonic": "「WISHNME」＝为（てん）＋什（にんべん）＋么（の）→「なぜ？」で覚える。"
  },
  {
    "id": 760,
    "hanzi": "问",
    "pinyin": "wèn",
    "meaning": "頼む、どうぞ",
    "example": "我问了。",
    "exampleMeaning": "私は问ました。",
    "category": [
      "verb"
    ],
    "etymology": "「问」（口：くち）。頼む、どうぞを表す。",
    "mnemonic": "「WN」＝问（くち）→「頼む、どうぞ」で覚える。"
  },
  {
    "id": 761,
    "hanzi": "问题",
    "pinyin": "wèntí",
    "meaning": "質問、問題",
    "example": "这是问题。",
    "exampleMeaning": "これは问题です。",
    "category": [
      "noun"
    ],
    "etymology": "「问」（口：くち）＋「题」（頁（页）：おおがい）。質問、問題を表す。",
    "mnemonic": "「WNT」＝问（くち）＋题（おおがい）→「質問、問題」で覚える。"
  },
  {
    "id": 762,
    "hanzi": "希望",
    "pinyin": "xīwàng",
    "meaning": "望む、〜したい",
    "example": "我希望了。",
    "exampleMeaning": "私は希望ました。",
    "category": [
      "verb"
    ],
    "etymology": "「希」（巾：はば）＋「望」（月：つき）。望む、〜したいを表す。",
    "mnemonic": "「XWNG」＝希（はば）＋望（つき）→「望む、〜したい」で覚える。"
  },
  {
    "id": 763,
    "hanzi": "西瓜",
    "pinyin": "xīguā",
    "meaning": "スイカ",
    "example": "这是西瓜。",
    "exampleMeaning": "これは西瓜です。",
    "category": [
      "noun"
    ],
    "etymology": "「西」（襾：にし）＋「瓜」（瓜：うり）。スイカを表す。",
    "mnemonic": "「Xコ」＝西（にし）＋瓜（うり）→「スイカ」で覚える。"
  },
  {
    "id": 764,
    "hanzi": "洗",
    "pinyin": "xǐ",
    "meaning": "洗う",
    "example": "我洗了。",
    "exampleMeaning": "私は洗ました。",
    "category": [
      "verb"
    ],
    "etymology": "「洗」（水（氵）：さんずい）。洗うを表す。",
    "mnemonic": "「X」＝洗（さんずい）→「洗う」で覚える。"
  },
  {
    "id": 765,
    "hanzi": "小时",
    "pinyin": "xiǎoshí",
    "meaning": "〜時間（時間の単位）",
    "example": "这是小时。",
    "exampleMeaning": "これは小时です。",
    "category": [
      "noun"
    ],
    "etymology": "「小」（小：しょう）＋「时」（日：ひへん）。〜時間（時間の単位）を表す。",
    "mnemonic": "「セキOSH」＝小（しょう）＋时（ひへん）→「〜時間（時間の単位）」で覚える。"
  },
  {
    "id": 766,
    "hanzi": "笑",
    "pinyin": "xiào",
    "meaning": "笑う",
    "example": "这是笑。",
    "exampleMeaning": "これは笑です。",
    "category": [
      "noun"
    ],
    "etymology": "「笑」（竹（⺮）：たけかんむり）。笑うを表す。",
    "mnemonic": "「セキオ」＝笑（たけかんむり）→「笑う」で覚える。"
  },
  {
    "id": 767,
    "hanzi": "新",
    "pinyin": "xīn",
    "meaning": "新しい",
    "example": "这很新。",
    "exampleMeaning": "これはとても新です。",
    "category": [
      "adjective"
    ],
    "etymology": "「新」（斤：おの）。新しいを表す。",
    "mnemonic": "「XN」＝新（おの）→「新しい」で覚える。"
  },
  {
    "id": 768,
    "hanzi": "姓",
    "pinyin": "xìng",
    "meaning": "名字、姓",
    "example": "他姓来了。",
    "exampleMeaning": "彼は姓来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「姓」（女：おんなへん）。名字、姓を表す。",
    "mnemonic": "「XNG」＝姓（おんなへん）→「名字、姓」で覚える。"
  },
  {
    "id": 769,
    "hanzi": "休息",
    "pinyin": "xiūxi",
    "meaning": "休む、残り",
    "example": "这是休息。",
    "exampleMeaning": "これは休息です。",
    "category": [
      "noun"
    ],
    "etymology": "「休」（人（亻）：にんべん）＋「息」（心：こころ）。休む、残りを表す。",
    "mnemonic": "「セキセキ」＝休（にんべん）＋息（こころ）→「休む、残り」で覚える。"
  },
  {
    "id": 770,
    "hanzi": "雪",
    "pinyin": "xuě",
    "meaning": "雪",
    "example": "这是雪。",
    "exampleMeaning": "これは雪です。",
    "category": [
      "noun"
    ],
    "etymology": "「雪」（雨：あめかんむり）。雪を表す。",
    "mnemonic": "「キョ」＝雪（あめかんむり）→「雪」で覚える。"
  },
  {
    "id": 771,
    "hanzi": "颜色",
    "pinyin": "yánsè",
    "meaning": "色",
    "example": "这是颜色。",
    "exampleMeaning": "これは颜色です。",
    "category": [
      "noun"
    ],
    "etymology": "「颜」（頁（页）：おおがい）＋「色」（色：いろ）。色を表す。",
    "mnemonic": "「YNS」＝颜（おおがい）＋色（いろ）→「色」で覚える。"
  },
  {
    "id": 772,
    "hanzi": "眼睛",
    "pinyin": "yǎnjing",
    "meaning": "目",
    "example": "这是眼睛。",
    "exampleMeaning": "これは眼睛です。",
    "category": [
      "noun"
    ],
    "etymology": "「眼」（目：めへん）＋「睛」（目：めへん）。目を表す。",
    "mnemonic": "「YNJING」＝眼（めへん）＋睛（めへん）→「目」で覚える。"
  },
  {
    "id": 773,
    "hanzi": "羊肉",
    "pinyin": "yángròu",
    "meaning": "羊肉",
    "example": "这是羊肉。",
    "exampleMeaning": "これは羊肉です。",
    "category": [
      "noun"
    ],
    "etymology": "「羊」（羊：ひつじ）＋「肉」（肉：にく）。羊肉を表す。",
    "mnemonic": "「YNGRU」＝羊（ひつじ）＋肉（にく）→「羊肉」で覚える。"
  },
  {
    "id": 774,
    "hanzi": "药",
    "pinyin": "yào",
    "meaning": "薬",
    "example": "这是药。",
    "exampleMeaning": "これは药です。",
    "category": [
      "noun"
    ],
    "etymology": "「药」（艹：くさかんむり）。薬を表す。",
    "mnemonic": "「Yオ」＝药（くさかんむり）→「薬」で覚える。"
  },
  {
    "id": 775,
    "hanzi": "要",
    "pinyin": "yào",
    "meaning": "欲しい、〜したい",
    "example": "我要了。",
    "exampleMeaning": "私は要ました。",
    "category": [
      "verb"
    ],
    "etymology": "「要」（襾：にし）。欲しい、〜したいを表す。",
    "mnemonic": "「Yオ」＝要（にし）→「欲しい、〜したい」で覚える。"
  },
  {
    "id": 776,
    "hanzi": "也",
    "pinyin": "yě",
    "meaning": "〜も、また",
    "example": "他也来了。",
    "exampleMeaning": "彼は也来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「也」（乙：おつ）。〜も、またを表す。",
    "mnemonic": "「Y」＝也（おつ）→「〜も、また」で覚える。"
  },
  {
    "id": 777,
    "hanzi": "一下",
    "pinyin": "yīxià",
    "meaning": "ちょっと〜してみる",
    "example": "我一下了。",
    "exampleMeaning": "私は一下ました。",
    "category": [
      "verb"
    ],
    "etymology": "「一」（一：いち）＋「下」（一：いち）。ちょっと〜してみるを表す。",
    "mnemonic": "「Yセキ」＝一（いち）＋下（いち）→「ちょっと〜してみる」で覚える。"
  },
  {
    "id": 778,
    "hanzi": "已经",
    "pinyin": "yǐjīng",
    "meaning": "もう、すでに",
    "example": "他已经来了。",
    "exampleMeaning": "彼は已经来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「已」（己：おのれ）＋「经」（糸（纟）：いとへん）。もう、すでにを表す。",
    "mnemonic": "「YJNG」＝已（おのれ）＋经（いとへん）→「もう、すでに」で覚える。"
  },
  {
    "id": 779,
    "hanzi": "一起",
    "pinyin": "yīqǐ",
    "meaning": "一緒に",
    "example": "他一起来了。",
    "exampleMeaning": "彼は一起来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「一」（一：いち）＋「起」（走：そうにょう）。一緒にを表す。",
    "mnemonic": "「YQ」＝一（いち）＋起（そうにょう）→「一緒に」で覚える。"
  },
  {
    "id": 780,
    "hanzi": "意思",
    "pinyin": "yìsi",
    "meaning": "アイデア、考え",
    "example": "这是意思。",
    "exampleMeaning": "これは意思です。",
    "category": [
      "noun"
    ],
    "etymology": "「意」（心：こころ）＋「思」（心：こころ）。アイデア、考えを表す。",
    "mnemonic": "「Yシ」＝意（こころ）＋思（こころ）→「アイデア、考え」で覚える。"
  },
  {
    "id": 781,
    "hanzi": "因为…所以…",
    "pinyin": "yīnwèi…suǒyǐ…",
    "meaning": "〜なので〜だ（因果関係）",
    "example": "这是因为…所以…。",
    "exampleMeaning": "これは因为…所以…です。",
    "category": [
      "noun"
    ],
    "etymology": "「因」（囗：くにがまえ）＋「为」（丶：てん）＋「…」（…：てんてん）＋「所」（戶（户）：とだれ）＋「以」（人：ひと）＋「…」（…：てんてん）。〜なので〜だ（因果関係）を表す。",
    "mnemonic": "「YNWIソクY」＝因（くにがまえ）＋为（てん）＋…（てんてん）＋所（とだれ）＋以（ひと）＋…（てんてん）→「〜なので〜だ（因果関係）」で覚える。"
  },
  {
    "id": 782,
    "hanzi": "阴",
    "pinyin": "yīn",
    "meaning": "曇り",
    "example": "这是阴。",
    "exampleMeaning": "これは阴です。",
    "category": [
      "noun"
    ],
    "etymology": "「阴」（阜（阝）：こざとへん）。曇りを表す。",
    "mnemonic": "「YN」＝阴（こざとへん）→「曇り」で覚える。"
  },
  {
    "id": 783,
    "hanzi": "游泳",
    "pinyin": "yóuyǒng",
    "meaning": "泳ぐ",
    "example": "这是游泳。",
    "exampleMeaning": "これは游泳です。",
    "category": [
      "noun"
    ],
    "etymology": "「游」（水（氵）：さんずい）＋「泳」（水（氵）：さんずい）。泳ぐを表す。",
    "mnemonic": "「YUYNG」＝游（さんずい）＋泳（さんずい）→「泳ぐ」で覚える。"
  },
  {
    "id": 784,
    "hanzi": "右边",
    "pinyin": "yòubian",
    "meaning": "右側",
    "example": "这是右边。",
    "exampleMeaning": "これは右边です。",
    "category": [
      "noun"
    ],
    "etymology": "「右」（口：くち）＋「边」（辶：しんにょう）。右側を表す。",
    "mnemonic": "「YUBIAN」＝右（くち）＋边（しんにょう）→「右側」で覚える。"
  },
  {
    "id": 785,
    "hanzi": "鱼",
    "pinyin": "yú",
    "meaning": "魚",
    "example": "这是鱼。",
    "exampleMeaning": "これは鱼です。",
    "category": [
      "noun"
    ],
    "etymology": "「鱼」（魚（鱼）：うお）。魚を表す。",
    "mnemonic": "「Y」＝鱼（うお）→「魚」で覚える。"
  },
  {
    "id": 786,
    "hanzi": "远",
    "pinyin": "yuǎn",
    "meaning": "遠い",
    "example": "这是远。",
    "exampleMeaning": "これは远です。",
    "category": [
      "noun"
    ],
    "etymology": "「远」（辶：しんにょう）。遠いを表す。",
    "mnemonic": "「ギョN」＝远（しんにょう）→「遠い」で覚える。"
  },
  {
    "id": 787,
    "hanzi": "运动",
    "pinyin": "yùndòng",
    "meaning": "動き、運動",
    "example": "这是运动。",
    "exampleMeaning": "これは运动です。",
    "category": [
      "noun"
    ],
    "etymology": "「运」（辶：しんにょう）＋「动」（力：ちから）。動き、運動を表す。",
    "mnemonic": "「YNDNG」＝运（しんにょう）＋动（ちから）→「動き、運動」で覚える。"
  },
  {
    "id": 788,
    "hanzi": "再",
    "pinyin": "zài",
    "meaning": "もう一度、また",
    "example": "他再来了。",
    "exampleMeaning": "彼は再来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「再」（冂：けいがまえ）。もう一度、またを表す。",
    "mnemonic": "「ZI」＝再（けいがまえ）→「もう一度、また」で覚える。"
  },
  {
    "id": 789,
    "hanzi": "早上",
    "pinyin": "zǎoshang",
    "meaning": "朝",
    "example": "他早上来了。",
    "exampleMeaning": "彼は早上来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「早」（日：ひ）＋「上」（一：いち）。朝を表す。",
    "mnemonic": "「ZOSHANG」＝早（ひ）＋上（いち）→「朝」で覚える。"
  },
  {
    "id": 790,
    "hanzi": "丈夫",
    "pinyin": "zhàngfu",
    "meaning": "夫",
    "example": "这是丈夫。",
    "exampleMeaning": "これは丈夫です。",
    "category": [
      "noun"
    ],
    "etymology": "「丈」（一：いち）＋「夫」（大：だい）。夫を表す。",
    "mnemonic": "「ZHNGFU」＝丈（いち）＋夫（だい）→「夫」で覚える。"
  },
  {
    "id": 791,
    "hanzi": "找",
    "pinyin": "zhǎo",
    "meaning": "探す",
    "example": "我找了。",
    "exampleMeaning": "私は找ました。",
    "category": [
      "verb"
    ],
    "etymology": "「找」（手（扌）：てへん）。探すを表す。",
    "mnemonic": "「ZHオ」＝找（てへん）→「探す」で覚える。"
  },
  {
    "id": 792,
    "hanzi": "着",
    "pinyin": "zhe",
    "meaning": "〜している（動作進行を表す助詞）",
    "example": "你好着！",
    "exampleMeaning": "こんにちは着！",
    "category": [
      "particle"
    ],
    "etymology": "「着」（目：め）。〜している（動作進行を表す助詞）を表す。",
    "mnemonic": "「シャ」＝着（め）→「〜している（動作進行を表す助詞）」で覚える。"
  },
  {
    "id": 793,
    "hanzi": "真",
    "pinyin": "zhēn",
    "meaning": "本当に、実に",
    "example": "他真来了。",
    "exampleMeaning": "彼は真来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「真」（目：め）。本当に、実にを表す。",
    "mnemonic": "「ZHN」＝真（め）→「本当に、実に」で覚える。"
  },
  {
    "id": 794,
    "hanzi": "正在",
    "pinyin": "zhèngzài",
    "meaning": "ちょうど〜している最中",
    "example": "他正在我来了。",
    "exampleMeaning": "彼は私正在来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「正」（止：とめる）＋「在」（土：つち）。ちょうど〜している最中を表す。",
    "mnemonic": "「ZHNGZI」＝正（とめる）＋在（つち）→「ちょうど〜している最中」で覚える。"
  },
  {
    "id": 795,
    "hanzi": "知道",
    "pinyin": "zhīdào",
    "meaning": "知っている",
    "example": "我知道了。",
    "exampleMeaning": "私は知道ました。",
    "category": [
      "verb"
    ],
    "etymology": "「知」（矢：やへん）＋「道」（辶：しんにょう）。知っているを表す。",
    "mnemonic": "「ZHDオ」＝知（やへん）＋道（しんにょう）→「知っている」で覚える。"
  },
  {
    "id": 796,
    "hanzi": "准备",
    "pinyin": "zhǔnbèi",
    "meaning": "準備する、用意",
    "example": "这是准备。",
    "exampleMeaning": "これは准备です。",
    "category": [
      "noun"
    ],
    "etymology": "「准」（冫：にすい）＋「备」（夂：ふゆがしら）。準備する、用意を表す。",
    "mnemonic": "「ZHNBI」＝准（にすい）＋备（ふゆがしら）→「準備する、用意」で覚える。"
  },
  {
    "id": 797,
    "hanzi": "走",
    "pinyin": "zǒu",
    "meaning": "歩く",
    "example": "我走了。",
    "exampleMeaning": "私は走ました。",
    "category": [
      "verb"
    ],
    "etymology": "「走」（走：そうにょう）。歩くを表す。",
    "mnemonic": "「ZU」＝走（そうにょう）→「歩く」で覚える。"
  },
  {
    "id": 798,
    "hanzi": "最",
    "pinyin": "zuì",
    "meaning": "最も",
    "example": "这是最。",
    "exampleMeaning": "これは最です。",
    "category": [
      "noun"
    ],
    "etymology": "「最」（曰：いわく）。最もを表す。",
    "mnemonic": "「ソ」＝最（いわく）→「最も」で覚える。"
  },
  {
    "id": 799,
    "hanzi": "左边",
    "pinyin": "zuǒbian",
    "meaning": "左",
    "example": "这是左边。",
    "exampleMeaning": "これは左边です。",
    "category": [
      "noun"
    ],
    "etymology": "「左」（工：たくみ）＋「边」（辶：しんにょう）。左を表す。",
    "mnemonic": "「ソヘン」＝左（たくみ）＋边（しんにょう）→「左」で覚える。"
  },
  {
    "id": 800,
    "hanzi": "啊",
    "pinyin": "a",
    "meaning": "〜ね、〜よ（肯定・同意の語気助詞）",
    "example": "你好啊！",
    "exampleMeaning": "こんにちは啊！",
    "category": [
      "particle"
    ],
    "etymology": "「啊」（口：くちへん）。〜ね、〜よ（肯定・同意の語気助詞）を表す。",
    "mnemonic": "「A」＝啊（くちへん）→「〜ね、〜よ（肯定・同意の語気助詞）」で覚える。"
  },
  {
    "id": 801,
    "hanzi": "阿姨",
    "pinyin": "āyí",
    "meaning": "おばさん（母方の叔母、または年配女性への呼称）",
    "example": "这是阿姨。",
    "exampleMeaning": "これは阿姨です。",
    "category": [
      "noun"
    ],
    "etymology": "「阿」（阜（阝）：こざとへん）＋「姨」（女：おんなへん）。おばさん（母方の叔母、または年配女性への呼称）を表す。",
    "mnemonic": "「Y」＝阿（こざとへん）＋姨（おんなへん）→「おばさん（母方の叔母、または年配女性への呼称）」で覚える。"
  },
  {
    "id": 802,
    "hanzi": "矮",
    "pinyin": "ǎi",
    "meaning": "低い",
    "example": "这很矮。",
    "exampleMeaning": "これはとても矮です。",
    "category": [
      "adjective"
    ],
    "etymology": "「矮」（矢：やへん）。低いを表す。",
    "mnemonic": "「I」＝矮（やへん）→「低い」で覚える。"
  },
  {
    "id": 803,
    "hanzi": "爱好",
    "pinyin": "àihào",
    "meaning": "興味、利息",
    "example": "这是爱好。",
    "exampleMeaning": "これは爱好です。",
    "category": [
      "noun"
    ],
    "etymology": "「爱」（心（⺗）：こころ）＋「好」（女：おんなへん）。興味、利息を表す。",
    "mnemonic": "「IHオ」＝爱（こころ）＋好（おんなへん）→「興味、利息」で覚える。"
  },
  {
    "id": 804,
    "hanzi": "安静",
    "pinyin": "ānjìng",
    "meaning": "静かな",
    "example": "这很安静。",
    "exampleMeaning": "これはとても安静です。",
    "category": [
      "adjective"
    ],
    "etymology": "「安」（宀：うかんむり（家））＋「静」（青：あお）。静かなを表す。",
    "mnemonic": "「NJNG」＝安（うかんむり（家））＋静（あお）→「静かな」で覚える。"
  },
  {
    "id": 805,
    "hanzi": "把",
    "pinyin": "bǎ",
    "meaning": "〜を（把構文）、持つ",
    "example": "我把了。",
    "exampleMeaning": "私は把ました。",
    "category": [
      "verb"
    ],
    "etymology": "「把」（手（扌）：てへん）。〜を（把構文）、持つを表す。",
    "mnemonic": "「B」＝把（てへん）→「〜を（把構文）、持つ」で覚える。"
  },
  {
    "id": 806,
    "hanzi": "搬",
    "pinyin": "bān",
    "meaning": "運ぶ、移動する",
    "example": "我搬了。",
    "exampleMeaning": "私は搬ました。",
    "category": [
      "verb"
    ],
    "etymology": "「搬」（手（扌）：てへん）。運ぶ、移動するを表す。",
    "mnemonic": "「BN」＝搬（てへん）→「運ぶ、移動する」で覚える。"
  },
  {
    "id": 807,
    "hanzi": "班",
    "pinyin": "bān",
    "meaning": "チーム",
    "example": "这是班。",
    "exampleMeaning": "これは班です。",
    "category": [
      "noun"
    ],
    "etymology": "「班」（玉（王）：たまへん）。チームを表す。",
    "mnemonic": "「BN」＝班（たまへん）→「チーム」で覚える。"
  },
  {
    "id": 808,
    "hanzi": "办法",
    "pinyin": "bànfǎ",
    "meaning": "方法、手段",
    "example": "这是办法。",
    "exampleMeaning": "これは办法です。",
    "category": [
      "noun"
    ],
    "etymology": "「办」（力：ちから）＋「法」（水（氵）：さんずい）。方法、手段を表す。",
    "mnemonic": "「BNF」＝办（ちから）＋法（さんずい）→「方法、手段」で覚える。"
  },
  {
    "id": 809,
    "hanzi": "办公室",
    "pinyin": "bàngōngshì",
    "meaning": "事務所、オフィス",
    "example": "这是办公室。",
    "exampleMeaning": "これは办公室です。",
    "category": [
      "noun"
    ],
    "etymology": "「办」（力：ちから）＋「公」（八：はち）＋「室」（宀：うかんむり）。事務所、オフィスを表す。",
    "mnemonic": "「BNGNGSH」＝办（ちから）＋公（はち）＋室（うかんむり）→「事務所、オフィス」で覚える。"
  },
  {
    "id": 810,
    "hanzi": "半",
    "pinyin": "bàn",
    "meaning": "半分",
    "example": "有半个。",
    "exampleMeaning": "半個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「半」（十：じゅう）。半分を表す。",
    "mnemonic": "「BN」＝半（じゅう）→「半分」で覚える。"
  },
  {
    "id": 811,
    "hanzi": "帮忙",
    "pinyin": "bāngmáng",
    "meaning": "助ける、手伝う",
    "example": "我帮忙了。",
    "exampleMeaning": "私は帮忙ました。",
    "category": [
      "verb"
    ],
    "etymology": "「帮」（巾：はば）＋「忙」（心（忄）：りっしんべん）。助ける、手伝うを表す。",
    "mnemonic": "「BNGMNG」＝帮（はば）＋忙（りっしんべん）→「助ける、手伝う」で覚える。"
  },
  {
    "id": 812,
    "hanzi": "包",
    "pinyin": "bāo",
    "meaning": "覆う、カバーする",
    "example": "我包了。",
    "exampleMeaning": "私は包ました。",
    "category": [
      "verb"
    ],
    "etymology": "「包」（勹：つつみがまえ）。覆う、カバーするを表す。",
    "mnemonic": "「Bオ」＝包（つつみがまえ）→「覆う、カバーする」で覚える。"
  },
  {
    "id": 813,
    "hanzi": "饱",
    "pinyin": "bǎo",
    "meaning": "お腹いっぱいだ",
    "example": "我饱了。",
    "exampleMeaning": "私は饱ました。",
    "category": [
      "verb"
    ],
    "etymology": "「饱」（食（饣）：しょくへん）。お腹いっぱいだを表す。",
    "mnemonic": "「Bオ」＝饱（しょくへん）→「お腹いっぱいだ」で覚える。"
  },
  {
    "id": 814,
    "hanzi": "北方",
    "pinyin": "běifāng",
    "meaning": "北",
    "example": "这是北方。",
    "exampleMeaning": "これは北方です。",
    "category": [
      "noun"
    ],
    "etymology": "「北」（匕：さじ）＋「方」（方：ほう）。北を表す。",
    "mnemonic": "「BIFNG」＝北（さじ）＋方（ほう）→「北」で覚える。"
  },
  {
    "id": 815,
    "hanzi": "被",
    "pinyin": "bèi",
    "meaning": "〜される（受身）",
    "example": "他被我来了。",
    "exampleMeaning": "彼は私被来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「被」（衣（衤）：ころもへん）。〜される（受身）を表す。",
    "mnemonic": "「BI」＝被（ころもへん）→「〜される（受身）」で覚える。"
  },
  {
    "id": 816,
    "hanzi": "鼻子",
    "pinyin": "bízi",
    "meaning": "鼻",
    "example": "这是鼻子。",
    "exampleMeaning": "これは鼻子です。",
    "category": [
      "noun"
    ],
    "etymology": "「鼻」（鼻：はな）＋「子」（子：こ）。鼻を表す。",
    "mnemonic": "「Bシ」＝鼻（はな）＋子（こ）→「鼻」で覚える。"
  },
  {
    "id": 817,
    "hanzi": "比较",
    "pinyin": "bǐjiào",
    "meaning": "比較する、比べる",
    "example": "这是比较。",
    "exampleMeaning": "これは比较です。",
    "category": [
      "noun"
    ],
    "etymology": "「比」（比：くらべる）＋「较」（車（车）：くるまへん）。比較する、比べるを表す。",
    "mnemonic": "「Bキオ」＝比（くらべる）＋较（くるまへん）→「比較する、比べる」で覚える。"
  },
  {
    "id": 818,
    "hanzi": "比赛",
    "pinyin": "bǐsài",
    "meaning": "試合、競争",
    "example": "这是比赛。",
    "exampleMeaning": "これは比赛です。",
    "category": [
      "noun"
    ],
    "etymology": "「比」（比：くらべる）＋「赛」（貝（贝）：かい）。試合、競争を表す。",
    "mnemonic": "「BSI」＝比（くらべる）＋赛（かい）→「試合、競争」で覚える。"
  },
  {
    "id": 819,
    "hanzi": "必须",
    "pinyin": "bìxū",
    "meaning": "〜しなければならない",
    "example": "我必须了。",
    "exampleMeaning": "私は必须ました。",
    "category": [
      "verb"
    ],
    "etymology": "「必」（心：こころ）＋「须」（頁（页）：おおがい）。〜しなければならないを表す。",
    "mnemonic": "「BX」＝必（こころ）＋须（おおがい）→「〜しなければならない」で覚える。"
  },
  {
    "id": 820,
    "hanzi": "变化",
    "pinyin": "biànhuà",
    "meaning": "変化",
    "example": "这是变化。",
    "exampleMeaning": "これは变化です。",
    "category": [
      "noun"
    ],
    "etymology": "「变」（又：また）＋「化」（匕：さじ）。変化を表す。",
    "mnemonic": "「ヒNHU」＝变（また）＋化（さじ）→「変化」で覚える。"
  },
  {
    "id": 821,
    "hanzi": "别人",
    "pinyin": "biérén",
    "meaning": "他人、他の人",
    "example": "这是别人。",
    "exampleMeaning": "これは别人です。",
    "category": [
      "noun"
    ],
    "etymology": "「别」（刀（刂）：りっとう）＋「人」（人：ひと）。他人、他の人を表す。",
    "mnemonic": "「ヒRN」＝别（りっとう）＋人（ひと）→「他人、他の人」で覚える。"
  },
  {
    "id": 822,
    "hanzi": "冰箱",
    "pinyin": "bīngxiāng",
    "meaning": "冷蔵庫",
    "example": "这是冰箱。",
    "exampleMeaning": "これは冰箱です。",
    "category": [
      "noun"
    ],
    "etymology": "「冰」（冫：にすい）＋「箱」（竹（⺮）：たけかんむり）。冷蔵庫を表す。",
    "mnemonic": "「BNGXING」＝冰（にすい）＋箱（たけかんむり）→「冷蔵庫」で覚える。"
  },
  {
    "id": 823,
    "hanzi": "不但…而且…",
    "pinyin": "bùdàn…érqiě…",
    "meaning": "〜だけでなく〜も",
    "example": "他不但…而且…来了。",
    "exampleMeaning": "彼は不但…而且…来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「不」（一：いち）＋「但」（人（亻）：にんべん）＋「…」（…：てんてん）＋「而」（而：しこうして）＋「且」（一：いち）＋「…」（…：てんてん）。〜だけでなく〜もを表す。",
    "mnemonic": "「BDNRQI」＝不（いち）＋但（にんべん）＋…（てんてん）＋而（しこうして）＋且（いち）＋…（てんてん）→「〜だけでなく〜も」で覚える。"
  },
  {
    "id": 824,
    "hanzi": "菜单",
    "pinyin": "càidān",
    "meaning": "メニュー",
    "example": "这是菜单。",
    "exampleMeaning": "これは菜单です。",
    "category": [
      "noun"
    ],
    "etymology": "「菜」（艹：くさかんむり）＋「单」（十：じゅう）。メニューを表す。",
    "mnemonic": "「CIDN」＝菜（くさかんむり）＋单（じゅう）→「メニュー」で覚える。"
  },
  {
    "id": 825,
    "hanzi": "参加",
    "pinyin": "cānjiā",
    "meaning": "参加する",
    "example": "我参加了。",
    "exampleMeaning": "私は参加ました。",
    "category": [
      "verb"
    ],
    "etymology": "「参」（厶：む）＋「加」（力：ちから）。参加するを表す。",
    "mnemonic": "「CNJI」＝参（む）＋加（ちから）→「参加する」で覚える。"
  },
  {
    "id": 826,
    "hanzi": "草",
    "pinyin": "cǎo",
    "meaning": "草",
    "example": "这是草。",
    "exampleMeaning": "これは草です。",
    "category": [
      "noun"
    ],
    "etymology": "「草」（艹：くさかんむり）。草を表す。",
    "mnemonic": "「Cオ」＝草（くさかんむり）→「草」で覚える。"
  },
  {
    "id": 827,
    "hanzi": "层",
    "pinyin": "céng",
    "meaning": "〜階、層",
    "example": "这是层。",
    "exampleMeaning": "これは层です。",
    "category": [
      "noun"
    ],
    "etymology": "「层」（尸：しかばね）。〜階、層を表す。",
    "mnemonic": "「CNG」＝层（しかばね）→「〜階、層」で覚える。"
  },
  {
    "id": 828,
    "hanzi": "差",
    "pinyin": "chà",
    "meaning": "足りない、劣る",
    "example": "这是差。",
    "exampleMeaning": "これは差です。",
    "category": [
      "noun"
    ],
    "etymology": "「差」（工：たくみ）。足りない、劣るを表す。",
    "mnemonic": "「CH」＝差（たくみ）→「足りない、劣る」で覚える。"
  },
  {
    "id": 829,
    "hanzi": "超市",
    "pinyin": "chāoshì",
    "meaning": "スーパー",
    "example": "这是超市。",
    "exampleMeaning": "これは超市です。",
    "category": [
      "noun"
    ],
    "etymology": "「超」（走：そうにょう）＋「市」（巾：はば）。スーパーを表す。",
    "mnemonic": "「CHOSH」＝超（そうにょう）＋市（はば）→「スーパー」で覚える。"
  },
  {
    "id": 830,
    "hanzi": "衬衫",
    "pinyin": "chènshān",
    "meaning": "シャツ",
    "example": "这是衬衫。",
    "exampleMeaning": "これは衬衫です。",
    "category": [
      "noun"
    ],
    "etymology": "「衬」（衣（衤）：ころもへん）＋「衫」（衣（衤）：ころもへん）。シャツを表す。",
    "mnemonic": "「CHNSHN」＝衬（ころもへん）＋衫（ころもへん）→「シャツ」で覚える。"
  },
  {
    "id": 831,
    "hanzi": "成绩",
    "pinyin": "chéngjì",
    "meaning": "成績、成果",
    "example": "这是成绩。",
    "exampleMeaning": "これは成绩です。",
    "category": [
      "noun"
    ],
    "etymology": "「成」（戈：ほこづくり）＋「绩」（糸（纟）：いとへん）。成績、成果を表す。",
    "mnemonic": "「CHNGJ」＝成（ほこづくり）＋绩（いとへん）→「成績、成果」で覚える。"
  },
  {
    "id": 832,
    "hanzi": "迟到",
    "pinyin": "chídào",
    "meaning": "遅刻する",
    "example": "我迟到了。",
    "exampleMeaning": "私は迟到ました。",
    "category": [
      "verb"
    ],
    "etymology": "「迟」（辶：しんにょう）＋「到」（刀（刂）：りっとう）。遅刻するを表す。",
    "mnemonic": "「CHDオ」＝迟（しんにょう）＋到（りっとう）→「遅刻する」で覚える。"
  },
  {
    "id": 833,
    "hanzi": "除了",
    "pinyin": "chúle",
    "meaning": "〜を除いて、〜のほかに",
    "example": "我喜欢茶，除了也喜欢咖啡。",
    "exampleMeaning": "私はお茶が好きで、除了コーヒーも好きです。",
    "category": [
      "conjunction"
    ],
    "etymology": "「除」（阜（阝）：こざとへん）＋「了」（乙：おつ）。〜を除いて、〜のほかにを表す。",
    "mnemonic": "「CHラク」＝除（こざとへん）＋了（おつ）→「〜を除いて、〜のほかに」で覚える。"
  },
  {
    "id": 834,
    "hanzi": "船",
    "pinyin": "chuán",
    "meaning": "船",
    "example": "这是船。",
    "exampleMeaning": "これは船です。",
    "category": [
      "noun"
    ],
    "etymology": "「船」（舟：ふねへん）。船を表す。",
    "mnemonic": "「シュツN」＝船（ふねへん）→「船」で覚える。"
  },
  {
    "id": 835,
    "hanzi": "春",
    "pinyin": "chūn",
    "meaning": "春",
    "example": "这是春。",
    "exampleMeaning": "これは春です。",
    "category": [
      "noun"
    ],
    "etymology": "「春」（日：ひ）。春を表す。",
    "mnemonic": "「CHN」＝春（ひ）→「春」で覚える。"
  },
  {
    "id": 836,
    "hanzi": "聪明",
    "pinyin": "cōngming",
    "meaning": "賢い、頭が良い",
    "example": "这是聪明。",
    "exampleMeaning": "これは聪明です。",
    "category": [
      "noun"
    ],
    "etymology": "「聪」（耳：みみへん）＋「明」（日：ひへん）。賢い、頭が良いを表す。",
    "mnemonic": "「CNGMING」＝聪（みみへん）＋明（ひへん）→「賢い、頭が良い」で覚える。"
  },
  {
    "id": 837,
    "hanzi": "打扫",
    "pinyin": "dǎsǎo",
    "meaning": "掃除する",
    "example": "我打扫了。",
    "exampleMeaning": "私は打扫ました。",
    "category": [
      "verb"
    ],
    "etymology": "「打」（手（扌）：てへん）＋「扫」（手（扌）：てへん）。掃除するを表す。",
    "mnemonic": "「DSオ」＝打（てへん）＋扫（てへん）→「掃除する」で覚える。"
  },
  {
    "id": 838,
    "hanzi": "打算",
    "pinyin": "dǎsuàn",
    "meaning": "〜するつもりだ、計画する",
    "example": "我打算了。",
    "exampleMeaning": "私は打算ました。",
    "category": [
      "verb"
    ],
    "etymology": "「打」（手（扌）：てへん）＋「算」（竹（⺮）：たけかんむり）。〜するつもりだ、計画するを表す。",
    "mnemonic": "「DソクN」＝打（てへん）＋算（たけかんむり）→「〜するつもりだ、計画する」で覚える。"
  },
  {
    "id": 839,
    "hanzi": "带",
    "pinyin": "dài",
    "meaning": "持っていく、連れていく",
    "example": "这是带。",
    "exampleMeaning": "これは带です。",
    "category": [
      "noun"
    ],
    "etymology": "「带」（巾：はばへん）。持っていく、連れていくを表す。",
    "mnemonic": "「DI」＝带（はばへん）→「持っていく、連れていく」で覚える。"
  },
  {
    "id": 840,
    "hanzi": "蛋糕",
    "pinyin": "dàngāo",
    "meaning": "ケーキ",
    "example": "这是蛋糕。",
    "exampleMeaning": "これは蛋糕です。",
    "category": [
      "noun"
    ],
    "etymology": "「蛋」（虫：むしへん）＋「糕」（米：こめへん）。ケーキを表す。",
    "mnemonic": "「DNGオ」＝蛋（むしへん）＋糕（こめへん）→「ケーキ」で覚える。"
  },
  {
    "id": 841,
    "hanzi": "当然",
    "pinyin": "dāngrán",
    "meaning": "もちろん",
    "example": "他当然我来了。",
    "exampleMeaning": "彼は私当然来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「当」（彐：けいがしら）＋「然」（火（灬）：れっか）。もちろんを表す。",
    "mnemonic": "「DNGRN」＝当（けいがしら）＋然（れっか）→「もちろん」で覚える。"
  },
  {
    "id": 842,
    "hanzi": "地(助词)",
    "pinyin": "de",
    "meaning": "〜的に（副詞を作る助詞）",
    "example": "这是地(助词)。",
    "exampleMeaning": "これは地(助词)です。",
    "category": [
      "noun"
    ],
    "etymology": "「地」（土：つちへん）＋「(」（(：かっこ）＋「助」（力：ちから）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。〜的に（副詞を作る助詞）を表す。",
    "mnemonic": "「トク」＝地（つちへん）＋(（かっこ）＋助（ちから）＋词（ごんべん）＋)（かっこ）→「〜的に（副詞を作る助詞）」で覚える。"
  },
  {
    "id": 843,
    "hanzi": "灯",
    "pinyin": "dēng",
    "meaning": "電気、ランプ",
    "example": "这是灯。",
    "exampleMeaning": "これは灯です。",
    "category": [
      "noun"
    ],
    "etymology": "「灯」（火：ひへん）。電気、ランプを表す。",
    "mnemonic": "「DNG」＝灯（ひへん）→「電気、ランプ」で覚える。"
  },
  {
    "id": 844,
    "hanzi": "地方",
    "pinyin": "dìfang",
    "meaning": "場所、地域",
    "example": "这是地方。",
    "exampleMeaning": "これは地方です。",
    "category": [
      "noun"
    ],
    "etymology": "「地」（土：つちへん）＋「方」（方：ほう）。場所、地域を表す。",
    "mnemonic": "「Dホウ」＝地（つちへん）＋方（ほう）→「場所、地域」で覚える。"
  },
  {
    "id": 845,
    "hanzi": "地铁",
    "pinyin": "dìtiě",
    "meaning": "地下鉄",
    "example": "这是地铁。",
    "exampleMeaning": "これは地铁です。",
    "category": [
      "noun"
    ],
    "etymology": "「地」（土：つちへん）＋「铁」（金（钅）：かねへん）。地下鉄を表す。",
    "mnemonic": "「Dテイ」＝地（つちへん）＋铁（かねへん）→「地下鉄」で覚える。"
  },
  {
    "id": 846,
    "hanzi": "地图",
    "pinyin": "dìtú",
    "meaning": "地図",
    "example": "这是地图。",
    "exampleMeaning": "これは地图です。",
    "category": [
      "noun"
    ],
    "etymology": "「地」（土：つちへん）＋「图」（囗：くにがまえ）。地図を表す。",
    "mnemonic": "「DT」＝地（つちへん）＋图（くにがまえ）→「地図」で覚える。"
  },
  {
    "id": 847,
    "hanzi": "电梯",
    "pinyin": "diàntī",
    "meaning": "エレベーター",
    "example": "这是电梯。",
    "exampleMeaning": "これは电梯です。",
    "category": [
      "noun"
    ],
    "etymology": "「电」（田：た）＋「梯」（木：きへん）。エレベーターを表す。",
    "mnemonic": "「テキNT」＝电（た）＋梯（きへん）→「エレベーター」で覚える。"
  },
  {
    "id": 848,
    "hanzi": "电子邮件",
    "pinyin": "diànzǐyóujiàn",
    "meaning": "Eメール",
    "example": "这是电子邮件。",
    "exampleMeaning": "これは电子邮件です。",
    "category": [
      "noun"
    ],
    "etymology": "「电」（田：た）＋「子」（子：こ）＋「邮」（邑（阝）：おおざと）＋「件」（人（亻）：にんべん）。Eメールを表す。",
    "mnemonic": "「テキNZYUJIN」＝电（た）＋子（こ）＋邮（おおざと）＋件（にんべん）→「Eメール」で覚える。"
  },
  {
    "id": 849,
    "hanzi": "东",
    "pinyin": "dōng",
    "meaning": "東",
    "example": "这是东。",
    "exampleMeaning": "これは东です。",
    "category": [
      "noun"
    ],
    "etymology": "「东」（木：き）。東を表す。",
    "mnemonic": "「DNG」＝东（き）→「東」で覚える。"
  },
  {
    "id": 850,
    "hanzi": "冬",
    "pinyin": "dōng",
    "meaning": "冬",
    "example": "这是冬。",
    "exampleMeaning": "これは冬です。",
    "category": [
      "noun"
    ],
    "etymology": "「冬」（冫：にすい）。冬を表す。",
    "mnemonic": "「DNG」＝冬（にすい）→「冬」で覚える。"
  },
  {
    "id": 851,
    "hanzi": "动物",
    "pinyin": "dòngwù",
    "meaning": "動物",
    "example": "这是动物。",
    "exampleMeaning": "これは动物です。",
    "category": [
      "noun"
    ],
    "etymology": "「动」（力：ちから）＋「物」（牛（牜）：うしへん）。動物を表す。",
    "mnemonic": "「DNGW」＝动（ちから）＋物（うしへん）→「動物」で覚える。"
  },
  {
    "id": 852,
    "hanzi": "短",
    "pinyin": "duǎn",
    "meaning": "短い",
    "example": "这是短。",
    "exampleMeaning": "これは短です。",
    "category": [
      "noun"
    ],
    "etymology": "「短」（矢：やへん）。短いを表す。",
    "mnemonic": "「トクN」＝短（やへん）→「短い」で覚える。"
  },
  {
    "id": 853,
    "hanzi": "段",
    "pinyin": "duàn",
    "meaning": "〜段落（文章を数える量詞）",
    "example": "这是段。",
    "exampleMeaning": "これは段です。",
    "category": [
      "noun"
    ],
    "etymology": "「段」（殳：るまた）。〜段落（文章を数える量詞）を表す。",
    "mnemonic": "「トクN」＝段（るまた）→「〜段落（文章を数える量詞）」で覚える。"
  },
  {
    "id": 854,
    "hanzi": "锻炼",
    "pinyin": "duànliàn",
    "meaning": "運動する、鍛える",
    "example": "我锻炼了。",
    "exampleMeaning": "私は锻炼ました。",
    "category": [
      "verb"
    ],
    "etymology": "「锻」（金（钅）：かねへん）＋「炼」（火：ひへん）。運動する、鍛えるを表す。",
    "mnemonic": "「トクNLIN」＝锻（かねへん）＋炼（ひへん）→「運動する、鍛える」で覚える。"
  },
  {
    "id": 855,
    "hanzi": "多么",
    "pinyin": "duōme",
    "meaning": "どのように",
    "example": "这是多么。",
    "exampleMeaning": "これは多么です。",
    "category": [
      "noun"
    ],
    "etymology": "「多」（夕：ゆうべ）＋「么」（丿：の）。どのようにを表す。",
    "mnemonic": "「トクマ」＝多（ゆうべ）＋么（の）→「どのように」で覚える。"
  },
  {
    "id": 856,
    "hanzi": "饿",
    "pinyin": "èa",
    "meaning": "お腹が空いた",
    "example": "我饿了。",
    "exampleMeaning": "私は饿ました。",
    "category": [
      "verb"
    ],
    "etymology": "「饿」（食（饣）：しょくへん）。お腹が空いたを表す。",
    "mnemonic": "「A」＝饿（しょくへん）→「お腹が空いた」で覚える。"
  },
  {
    "id": 857,
    "hanzi": "耳朵",
    "pinyin": "ěrduo",
    "meaning": "耳",
    "example": "这是耳朵。",
    "exampleMeaning": "これは耳朵です。",
    "category": [
      "noun"
    ],
    "etymology": "「耳」（耳：みみ）＋「朵」（木：き）。耳を表す。",
    "mnemonic": "「RDUO」＝耳（みみ）＋朵（き）→「耳」で覚える。"
  },
  {
    "id": 858,
    "hanzi": "发",
    "pinyin": "fā",
    "meaning": "送る、発送する",
    "example": "我发了。",
    "exampleMeaning": "私は发ました。",
    "category": [
      "verb"
    ],
    "etymology": "「发」（又：また）。送る、発送するを表す。",
    "mnemonic": "「F」＝发（また）→「送る、発送する」で覚える。"
  },
  {
    "id": 859,
    "hanzi": "发烧",
    "pinyin": "fāshāo",
    "meaning": "熱が出る",
    "example": "这是发烧。",
    "exampleMeaning": "これは发烧です。",
    "category": [
      "noun"
    ],
    "etymology": "「发」（又：また）＋「烧」（火：ひへん）。熱が出るを表す。",
    "mnemonic": "「FSHオ」＝发（また）＋烧（ひへん）→「熱が出る」で覚える。"
  },
  {
    "id": 860,
    "hanzi": "发现",
    "pinyin": "fāxiàn",
    "meaning": "見つける",
    "example": "我发现了。",
    "exampleMeaning": "私は发现ました。",
    "category": [
      "verb"
    ],
    "etymology": "「发」（又：また）＋「现」（玉（王）：たまへん）。見つけるを表す。",
    "mnemonic": "「FセキN」＝发（また）＋现（たまへん）→「見つける」で覚える。"
  },
  {
    "id": 861,
    "hanzi": "方便",
    "pinyin": "fāngbiàn",
    "meaning": "便利な",
    "example": "这很方便。",
    "exampleMeaning": "これはとても方便です。",
    "category": [
      "adjective"
    ],
    "etymology": "「方」（方：ほう）＋「便」（人（亻）：にんべん）。便利なを表す。",
    "mnemonic": "「FNGBIN」＝方（ほう）＋便（にんべん）→「便利な」で覚える。"
  },
  {
    "id": 862,
    "hanzi": "放",
    "pinyin": "fàng",
    "meaning": "放す、置く",
    "example": "我放了。",
    "exampleMeaning": "私は放ました。",
    "category": [
      "verb"
    ],
    "etymology": "「放」（攵：のぶん）。放す、置くを表す。",
    "mnemonic": "「FNG」＝放（のぶん）→「放す、置く」で覚える。"
  },
  {
    "id": 863,
    "hanzi": "放心",
    "pinyin": "fàngxīn",
    "meaning": "安心する",
    "example": "我放心了。",
    "exampleMeaning": "私は放心ました。",
    "category": [
      "verb"
    ],
    "etymology": "「放」（攵：のぶん）＋「心」（心：こころ）。安心するを表す。",
    "mnemonic": "「FNGXN」＝放（のぶん）＋心（こころ）→「安心する」で覚える。"
  },
  {
    "id": 864,
    "hanzi": "分",
    "pinyin": "fēn",
    "meaning": "分ける",
    "example": "我分了。",
    "exampleMeaning": "私は分ました。",
    "category": [
      "verb"
    ],
    "etymology": "「分」（刀（刂）：かたな）。分けるを表す。",
    "mnemonic": "「FN」＝分（かたな）→「分ける」で覚える。"
  },
  {
    "id": 865,
    "hanzi": "复习",
    "pinyin": "fùxí",
    "meaning": "復習する",
    "example": "我复习了。",
    "exampleMeaning": "私は复习ました。",
    "category": [
      "verb"
    ],
    "etymology": "「复」（夊：すいにょう）＋「习」（乙：おつ）。復習するを表す。",
    "mnemonic": "「FX」＝复（すいにょう）＋习（おつ）→「復習する」で覚える。"
  },
  {
    "id": 866,
    "hanzi": "附近",
    "pinyin": "fùjìn",
    "meaning": "近所、付近",
    "example": "这是附近。",
    "exampleMeaning": "これは附近です。",
    "category": [
      "noun"
    ],
    "etymology": "「附」（阜（阝）：こざとへん）＋「近」（辶：しんにょう）。近所、付近を表す。",
    "mnemonic": "「FJN」＝附（こざとへん）＋近（しんにょう）→「近所、付近」で覚える。"
  },
  {
    "id": 867,
    "hanzi": "干净",
    "pinyin": "gānjìng",
    "meaning": "清潔な、きれいな",
    "example": "这是干净。",
    "exampleMeaning": "これは干净です。",
    "category": [
      "noun"
    ],
    "etymology": "「干」（一：いち）＋「净」（冫：にすい）。清潔な、きれいなを表す。",
    "mnemonic": "「GNJNG」＝干（いち）＋净（にすい）→「清潔な、きれいな」で覚える。"
  },
  {
    "id": 868,
    "hanzi": "感冒",
    "pinyin": "gǎnmào",
    "meaning": "風邪をひく",
    "example": "我感冒了。",
    "exampleMeaning": "私は感冒ました。",
    "category": [
      "verb"
    ],
    "etymology": "「感」（心：こころ）＋「冒」（冂：けいがまえ）。風邪をひくを表す。",
    "mnemonic": "「GNMオ」＝感（こころ）＋冒（けいがまえ）→「風邪をひく」で覚える。"
  },
  {
    "id": 869,
    "hanzi": "感兴趣",
    "pinyin": "gǎnxìngqù",
    "meaning": "興味がある",
    "example": "我感兴趣了。",
    "exampleMeaning": "私は感兴趣ました。",
    "category": [
      "verb"
    ],
    "etymology": "「感」（心：こころ）＋「兴」（八：はち）＋「趣」（走：そうにょう）。興味があるを表す。",
    "mnemonic": "「GNXNGQ」＝感（こころ）＋兴（はち）＋趣（そうにょう）→「興味がある」で覚える。"
  },
  {
    "id": 870,
    "hanzi": "刚才",
    "pinyin": "gāngcái",
    "meaning": "さっき、先ほど",
    "example": "他刚才来了。",
    "exampleMeaning": "彼は刚才来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「刚」（刀（刂）：りっとう）＋「才」（手（扌）：てへん）。さっき、先ほどを表す。",
    "mnemonic": "「GNGCI」＝刚（りっとう）＋才（てへん）→「さっき、先ほど」で覚える。"
  },
  {
    "id": 871,
    "hanzi": "个子",
    "pinyin": "gèzi",
    "meaning": "高さ",
    "example": "这是个子。",
    "exampleMeaning": "これは个子です。",
    "category": [
      "noun"
    ],
    "etymology": "「个」（人：ひと）＋「子」（子：こ）。高さを表す。",
    "mnemonic": "「Gシ」＝个（ひと）＋子（こ）→「高さ」で覚える。"
  },
  {
    "id": 872,
    "hanzi": "根据",
    "pinyin": "gēnjù",
    "meaning": "〜によると、〜に基づいて",
    "example": "这是根据。",
    "exampleMeaning": "これは根据です。",
    "category": [
      "noun"
    ],
    "etymology": "「根」（木：きへん）＋「据」（手（扌）：てへん）。〜によると、〜に基づいてを表す。",
    "mnemonic": "「GNJ」＝根（きへん）＋据（てへん）→「〜によると、〜に基づいて」で覚える。"
  },
  {
    "id": 873,
    "hanzi": "跟",
    "pinyin": "gēn",
    "meaning": "〜と一緒に",
    "example": "他跟我来了。",
    "exampleMeaning": "彼は私跟来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「跟」（足（⻊）：あしへん）。〜と一緒にを表す。",
    "mnemonic": "「GN」＝跟（あしへん）→「〜と一緒に」で覚える。"
  },
  {
    "id": 874,
    "hanzi": "更",
    "pinyin": "gèng",
    "meaning": "もっと",
    "example": "这是更。",
    "exampleMeaning": "これは更です。",
    "category": [
      "noun"
    ],
    "etymology": "「更」（曰：いわく）。もっとを表す。",
    "mnemonic": "「GNG」＝更（いわく）→「もっと」で覚える。"
  },
  {
    "id": 875,
    "hanzi": "公斤",
    "pinyin": "gōngjīn",
    "meaning": "キログラム",
    "example": "这是公斤。",
    "exampleMeaning": "これは公斤です。",
    "category": [
      "noun"
    ],
    "etymology": "「公」（八：はち）＋「斤」（斤：おの）。キログラムを表す。",
    "mnemonic": "「GNGJN」＝公（はち）＋斤（おの）→「キログラム」で覚える。"
  },
  {
    "id": 876,
    "hanzi": "公园",
    "pinyin": "gōngyuán",
    "meaning": "公園",
    "example": "这是公园。",
    "exampleMeaning": "これは公园です。",
    "category": [
      "noun"
    ],
    "etymology": "「公」（八：はち）＋「园」（囗：くにがまえ）。公園を表す。",
    "mnemonic": "「GNGYUN」＝公（はち）＋园（くにがまえ）→「公園」で覚える。"
  },
  {
    "id": 877,
    "hanzi": "故事",
    "pinyin": "gùshi",
    "meaning": "物語",
    "example": "这是故事。",
    "exampleMeaning": "これは故事です。",
    "category": [
      "noun"
    ],
    "etymology": "「故」（攵：のぶん）＋「事」（亅：はねぼう）。物語を表す。",
    "mnemonic": "「Gシ」＝故（のぶん）＋事（はねぼう）→「物語」で覚える。"
  },
  {
    "id": 878,
    "hanzi": "刮风",
    "pinyin": "guāfēng",
    "meaning": "風が吹く",
    "example": "我刮风了。",
    "exampleMeaning": "私は刮风ました。",
    "category": [
      "verb"
    ],
    "etymology": "「刮」（刀（刂）：りっとう）＋「风」（風（风）：かぜ）。風が吹くを表す。",
    "mnemonic": "「コFNG」＝刮（りっとう）＋风（かぜ）→「風が吹く」で覚える。"
  },
  {
    "id": 879,
    "hanzi": "关",
    "pinyin": "guān",
    "meaning": "閉める",
    "example": "我关了。",
    "exampleMeaning": "私は关ました。",
    "category": [
      "verb"
    ],
    "etymology": "「关」（八：はち）。閉めるを表す。",
    "mnemonic": "「コN」＝关（はち）→「閉める」で覚える。"
  },
  {
    "id": 880,
    "hanzi": "关系",
    "pinyin": "guānxì",
    "meaning": "関係、人間関係",
    "example": "这是关系。",
    "exampleMeaning": "これは关系です。",
    "category": [
      "noun"
    ],
    "etymology": "「关」（八：はち）＋「系」（糸：いとへん）。関係、人間関係を表す。",
    "mnemonic": "「コNX」＝关（はち）＋系（いとへん）→「関係、人間関係」で覚える。"
  },
  {
    "id": 881,
    "hanzi": "关心",
    "pinyin": "guānxīn",
    "meaning": "気にかける、関心を持つ",
    "example": "我关心了。",
    "exampleMeaning": "私は关心ました。",
    "category": [
      "verb"
    ],
    "etymology": "「关」（八：はち）＋「心」（心：こころ）。気にかける、関心を持つを表す。",
    "mnemonic": "「コNXN」＝关（はち）＋心（こころ）→「気にかける、関心を持つ」で覚える。"
  },
  {
    "id": 882,
    "hanzi": "关于",
    "pinyin": "guānyú",
    "meaning": "〜について、〜に関する",
    "example": "这是关于。",
    "exampleMeaning": "これは关于です。",
    "category": [
      "noun"
    ],
    "etymology": "「关」（八：はち）＋「于」（一：いち）。〜について、〜に関するを表す。",
    "mnemonic": "「コNY」＝关（はち）＋于（いち）→「〜について、〜に関する」で覚える。"
  },
  {
    "id": 883,
    "hanzi": "国家",
    "pinyin": "guójiā",
    "meaning": "国",
    "example": "这是国家。",
    "exampleMeaning": "これは国家です。",
    "category": [
      "noun"
    ],
    "etymology": "「国」（囗：くにがまえ）＋「家」（宀：うかんむり）。国を表す。",
    "mnemonic": "「コキ」＝国（くにがまえ）＋家（うかんむり）→「国」で覚える。"
  },
  {
    "id": 884,
    "hanzi": "过(动词)",
    "pinyin": "guò",
    "meaning": "渡る、越える",
    "example": "我过(动词)了。",
    "exampleMeaning": "私は过(动词)ました。",
    "category": [
      "verb"
    ],
    "etymology": "「过」（辶：しんにょう）＋「(」（(：かっこ）＋「动」（力：ちから）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。渡る、越えるを表す。",
    "mnemonic": "「コ」＝过（しんにょう）＋(（かっこ）＋动（ちから）＋词（ごんべん）＋)（かっこ）→「渡る、越える」で覚える。"
  },
  {
    "id": 885,
    "hanzi": "过去",
    "pinyin": "guòqu",
    "meaning": "過去、過ぎた",
    "example": "这是过去。",
    "exampleMeaning": "これは过去です。",
    "category": [
      "noun"
    ],
    "etymology": "「过」（辶：しんにょう）＋「去」（厶：む）。過去、過ぎたを表す。",
    "mnemonic": "「コク」＝过（しんにょう）＋去（む）→「過去、過ぎた」で覚える。"
  },
  {
    "id": 886,
    "hanzi": "还是",
    "pinyin": "háishì",
    "meaning": "または",
    "example": "我喜欢茶，还是也喜欢咖啡。",
    "exampleMeaning": "私はお茶が好きで、还是コーヒーも好きです。",
    "category": [
      "conjunction"
    ],
    "etymology": "「还」（辶：しんにょう）＋「是」（日：ひへん）。またはを表す。",
    "mnemonic": "「HISH」＝还（しんにょう）＋是（ひへん）→「または」で覚える。"
  },
  {
    "id": 887,
    "hanzi": "害怕",
    "pinyin": "hàipà",
    "meaning": "怖がる、恐れる",
    "example": "我害怕了。",
    "exampleMeaning": "私は害怕ました。",
    "category": [
      "verb"
    ],
    "etymology": "「害」（宀：うかんむり）＋「怕」（心（忄）：りっしんべん）。怖がる、恐れるを表す。",
    "mnemonic": "「HIP」＝害（うかんむり）＋怕（りっしんべん）→「怖がる、恐れる」で覚える。"
  },
  {
    "id": 888,
    "hanzi": "黑板",
    "pinyin": "hēibǎn",
    "meaning": "黒板",
    "example": "这是黑板。",
    "exampleMeaning": "これは黑板です。",
    "category": [
      "noun"
    ],
    "etymology": "「黑」（黑：くろ）＋「板」（木：きへん）。黒板を表す。",
    "mnemonic": "「HIBN」＝黑（くろ）＋板（きへん）→「黒板」で覚える。"
  },
  {
    "id": 889,
    "hanzi": "后来",
    "pinyin": "hòulái",
    "meaning": "その後、後で",
    "example": "这是后来。",
    "exampleMeaning": "これは后来です。",
    "category": [
      "noun"
    ],
    "etymology": "「后」（口：くち）＋「来」（木：き）。その後、後でを表す。",
    "mnemonic": "「HULI」＝后（くち）＋来（き）→「その後、後で」で覚える。"
  },
  {
    "id": 890,
    "hanzi": "护照",
    "pinyin": "hùzhào",
    "meaning": "パスポート",
    "example": "这是护照。",
    "exampleMeaning": "これは护照です。",
    "category": [
      "noun"
    ],
    "etymology": "「护」（手（扌）：てへん）＋「照」（火（灬）：れっか）。パスポートを表す。",
    "mnemonic": "「HZHオ」＝护（てへん）＋照（れっか）→「パスポート」で覚える。"
  },
  {
    "id": 891,
    "hanzi": "花(动词)",
    "pinyin": "huā",
    "meaning": "咲く、使う（お金・時間）",
    "example": "我花(动词)了。",
    "exampleMeaning": "私は花(动词)ました。",
    "category": [
      "verb"
    ],
    "etymology": "「花」（艹：くさかんむり）＋「(」（(：かっこ）＋「动」（力：ちから）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。咲く、使う（お金・時間）を表す。",
    "mnemonic": "「コ」＝花（くさかんむり）＋(（かっこ）＋动（ちから）＋词（ごんべん）＋)（かっこ）→「咲く、使う（お金・時間）」で覚える。"
  },
  {
    "id": 892,
    "hanzi": "花(名词)",
    "pinyin": "huā",
    "meaning": "花",
    "example": "这是花(名词)。",
    "exampleMeaning": "これは花(名词)です。",
    "category": [
      "noun"
    ],
    "etymology": "「花」（艹：くさかんむり）＋「(」（(：かっこ）＋「名」（口：くち）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。花を表す。",
    "mnemonic": "「コ」＝花（くさかんむり）＋(（かっこ）＋名（くち）＋词（ごんべん）＋)（かっこ）→「花」で覚える。"
  },
  {
    "id": 893,
    "hanzi": "画",
    "pinyin": "huà",
    "meaning": "描く、絵を描く",
    "example": "我画了。",
    "exampleMeaning": "私は画ました。",
    "category": [
      "verb"
    ],
    "etymology": "「画」（田：た）。描く、絵を描くを表す。",
    "mnemonic": "「コ」＝画（た）→「描く、絵を描く」で覚える。"
  },
  {
    "id": 894,
    "hanzi": "坏",
    "pinyin": "huài",
    "meaning": "悪い、壊れた",
    "example": "这很坏。",
    "exampleMeaning": "これはとても坏です。",
    "category": [
      "adjective"
    ],
    "etymology": "「坏」（土：つちへん）。悪い、壊れたを表す。",
    "mnemonic": "「コI」＝坏（つちへん）→「悪い、壊れた」で覚える。"
  },
  {
    "id": 895,
    "hanzi": "欢迎",
    "pinyin": "huānyíng",
    "meaning": "歓迎する、迎える",
    "example": "我欢迎了。",
    "exampleMeaning": "私は欢迎ました。",
    "category": [
      "verb"
    ],
    "etymology": "「欢」（欠：あくび）＋「迎」（辶：しんにょう）。歓迎する、迎えるを表す。",
    "mnemonic": "「コNYNG」＝欢（あくび）＋迎（しんにょう）→「歓迎する、迎える」で覚える。"
  },
  {
    "id": 896,
    "hanzi": "环境",
    "pinyin": "huánjìng",
    "meaning": "環境",
    "example": "这是环境。",
    "exampleMeaning": "これは环境です。",
    "category": [
      "noun"
    ],
    "etymology": "「环」（玉（王）：たまへん）＋「境」（土：つちへん）。環境を表す。",
    "mnemonic": "「コNJNG」＝环（たまへん）＋境（つちへん）→「環境」で覚える。"
  },
  {
    "id": 897,
    "hanzi": "还(动词)",
    "pinyin": "huán",
    "meaning": "返す、戻す",
    "example": "我还(动词)了。",
    "exampleMeaning": "私は还(动词)ました。",
    "category": [
      "verb"
    ],
    "etymology": "「还」（辶：しんにょう）＋「(」（(：かっこ）＋「动」（力：ちから）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。返す、戻すを表す。",
    "mnemonic": "「コN」＝还（しんにょう）＋(（かっこ）＋动（ちから）＋词（ごんべん）＋)（かっこ）→「返す、戻す」で覚える。"
  },
  {
    "id": 898,
    "hanzi": "换",
    "pinyin": "huàn",
    "meaning": "変化",
    "example": "这是换。",
    "exampleMeaning": "これは换です。",
    "category": [
      "noun"
    ],
    "etymology": "「换」（手（扌）：てへん）。変化を表す。",
    "mnemonic": "「コN」＝换（てへん）→「変化」で覚える。"
  },
  {
    "id": 899,
    "hanzi": "黄河",
    "pinyin": "huánghé",
    "meaning": "黄河",
    "example": "这是黄河。",
    "exampleMeaning": "これは黄河です。",
    "category": [
      "noun"
    ],
    "etymology": "「黄」（黄：き）＋「河」（水（氵）：さんずい）。黄河を表す。",
    "mnemonic": "「コNGH」＝黄（き）＋河（さんずい）→「黄河」で覚える。"
  },
  {
    "id": 900,
    "hanzi": "回答",
    "pinyin": "huídá",
    "meaning": "答える、返事する",
    "example": "我回答了。",
    "exampleMeaning": "私は回答ました。",
    "category": [
      "verb"
    ],
    "etymology": "「回」（囗：くにがまえ）＋「答」（竹（⺮）：たけかんむり）。答える、返事するを表す。",
    "mnemonic": "「コD」＝回（くにがまえ）＋答（たけかんむり）→「答える、返事する」で覚える。"
  },
  {
    "id": 901,
    "hanzi": "会议",
    "pinyin": "huìyì",
    "meaning": "会議",
    "example": "这是会议。",
    "exampleMeaning": "これは会议です。",
    "category": [
      "noun"
    ],
    "etymology": "「会」（人：ひと）＋「议」（言（讠）：ごんべん）。会議を表す。",
    "mnemonic": "「コY」＝会（ひと）＋议（ごんべん）→「会議」で覚える。"
  },
  {
    "id": 902,
    "hanzi": "或者",
    "pinyin": "huòzhě",
    "meaning": "または",
    "example": "我喜欢茶，或者也喜欢咖啡。",
    "exampleMeaning": "私はお茶が好きで、或者コーヒーも好きです。",
    "category": [
      "conjunction"
    ],
    "etymology": "「或」（戈：ほこづくり）＋「者」（老：おいかんむり）。またはを表す。",
    "mnemonic": "「コZH」＝或（ほこづくり）＋者（おいかんむり）→「または」で覚える。"
  },
  {
    "id": 903,
    "hanzi": "几乎",
    "pinyin": "jīhū",
    "meaning": "ほとんど、ほぼ",
    "example": "他几乎来了。",
    "exampleMeaning": "彼は几乎来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「几」（几：つくえ）＋「乎」（丿：の）。ほとんど、ほぼを表す。",
    "mnemonic": "「JH」＝几（つくえ）＋乎（の）→「ほとんど、ほぼ」で覚える。"
  },
  {
    "id": 904,
    "hanzi": "机会",
    "pinyin": "jīhuì",
    "meaning": "機会、チャンス",
    "example": "这是机会。",
    "exampleMeaning": "これは机会です。",
    "category": [
      "noun"
    ],
    "etymology": "「机」（木：きへん）＋「会」（人：ひと）。機会、チャンスを表す。",
    "mnemonic": "「Jコ」＝机（きへん）＋会（ひと）→「機会、チャンス」で覚える。"
  },
  {
    "id": 905,
    "hanzi": "极",
    "pinyin": "jí",
    "meaning": "極めて、非常に",
    "example": "他极来了。",
    "exampleMeaning": "彼は极来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「极」（木：きへん）。極めて、非常にを表す。",
    "mnemonic": "「J」＝极（きへん）→「極めて、非常に」で覚える。"
  },
  {
    "id": 906,
    "hanzi": "季节",
    "pinyin": "jìjié",
    "meaning": "季節",
    "example": "这是季节。",
    "exampleMeaning": "これは季节です。",
    "category": [
      "noun"
    ],
    "etymology": "「季」（子：こへん）＋「节」（艹：くさかんむり）。季節を表す。",
    "mnemonic": "「Jキ」＝季（こへん）＋节（くさかんむり）→「季節」で覚える。"
  },
  {
    "id": 907,
    "hanzi": "记得",
    "pinyin": "jìde",
    "meaning": "覚える",
    "example": "我记得了。",
    "exampleMeaning": "私は记得ました。",
    "category": [
      "verb"
    ],
    "etymology": "「记」（言（讠）：ごんべん）＋「得」（彳：ぎょうにんべん）。覚えるを表す。",
    "mnemonic": "「Jトク」＝记（ごんべん）＋得（ぎょうにんべん）→「覚える」で覚える。"
  },
  {
    "id": 908,
    "hanzi": "检查",
    "pinyin": "jiǎnchá",
    "meaning": "検査する、チェックする",
    "example": "这是检查。",
    "exampleMeaning": "これは检查です。",
    "category": [
      "noun"
    ],
    "etymology": "「检」（木：きへん）＋「查」（木：き）。検査する、チェックするを表す。",
    "mnemonic": "「キNCH」＝检（きへん）＋查（き）→「検査する、チェックする」で覚える。"
  },
  {
    "id": 909,
    "hanzi": "简单",
    "pinyin": "jiǎndān",
    "meaning": "簡単な、シンプルな",
    "example": "这很简单。",
    "exampleMeaning": "これはとても简单です。",
    "category": [
      "adjective"
    ],
    "etymology": "「简」（竹（⺮）：たけかんむり）＋「单」（十：じゅう）。簡単な、シンプルなを表す。",
    "mnemonic": "「キNDN」＝简（たけかんむり）＋单（じゅう）→「簡単な、シンプルな」で覚える。"
  },
  {
    "id": 910,
    "hanzi": "健康",
    "pinyin": "jiànkāng",
    "meaning": "健康",
    "example": "这是健康。",
    "exampleMeaning": "これは健康です。",
    "category": [
      "noun"
    ],
    "etymology": "「健」（人（亻）：にんべん）＋「康」（广：まだれ）。健康を表す。",
    "mnemonic": "「キNKNG」＝健（にんべん）＋康（まだれ）→「健康」で覚える。"
  },
  {
    "id": 911,
    "hanzi": "见面",
    "pinyin": "jiànmiàn",
    "meaning": "会う、面会する",
    "example": "我见面了。",
    "exampleMeaning": "私は见面ました。",
    "category": [
      "verb"
    ],
    "etymology": "「见」（見（见）：みる）＋「面」（面：めん）。会う、面会するを表す。",
    "mnemonic": "「キNMIN」＝见（みる）＋面（めん）→「会う、面会する」で覚える。"
  },
  {
    "id": 912,
    "hanzi": "讲",
    "pinyin": "jiǎng",
    "meaning": "説明する",
    "example": "我讲了。",
    "exampleMeaning": "私は讲ました。",
    "category": [
      "verb"
    ],
    "etymology": "「讲」（言（讠）：ごんべん）。説明するを表す。",
    "mnemonic": "「キNG」＝讲（ごんべん）→「説明する」で覚える。"
  },
  {
    "id": 913,
    "hanzi": "脚",
    "pinyin": "jiǎo",
    "meaning": "足",
    "example": "这是脚。",
    "exampleMeaning": "これは脚です。",
    "category": [
      "noun"
    ],
    "etymology": "「脚」（月：にくづき）。足を表す。",
    "mnemonic": "「キオ」＝脚（にくづき）→「足」で覚える。"
  },
  {
    "id": 914,
    "hanzi": "角",
    "pinyin": "jiǎo",
    "meaning": "角、〜角（通貨単位）",
    "example": "这是角。",
    "exampleMeaning": "これは角です。",
    "category": [
      "noun"
    ],
    "etymology": "「角」（角：つの）。角、〜角（通貨単位）を表す。",
    "mnemonic": "「キオ」＝角（つの）→「角、〜角（通貨単位）」で覚える。"
  },
  {
    "id": 915,
    "hanzi": "接",
    "pinyin": "jiē",
    "meaning": "受け取る、受け入れる",
    "example": "我接了。",
    "exampleMeaning": "私は接ました。",
    "category": [
      "verb"
    ],
    "etymology": "「接」（手（扌）：てへん）。受け取る、受け入れるを表す。",
    "mnemonic": "「キ」＝接（てへん）→「受け取る、受け入れる」で覚える。"
  },
  {
    "id": 916,
    "hanzi": "街道",
    "pinyin": "jiēdào",
    "meaning": "通り、街路",
    "example": "这是街道。",
    "exampleMeaning": "これは街道です。",
    "category": [
      "noun"
    ],
    "etymology": "「街」（行：ぎょうがまえ）＋「道」（辶：しんにょう）。通り、街路を表す。",
    "mnemonic": "「キDオ」＝街（ぎょうがまえ）＋道（しんにょう）→「通り、街路」で覚える。"
  },
  {
    "id": 917,
    "hanzi": "结婚",
    "pinyin": "jiéhūn",
    "meaning": "結婚する",
    "example": "我结婚了。",
    "exampleMeaning": "私は结婚ました。",
    "category": [
      "verb"
    ],
    "etymology": "「结」（糸（纟）：いとへん）＋「婚」（女：おんなへん）。結婚するを表す。",
    "mnemonic": "「キHN」＝结（いとへん）＋婚（おんなへん）→「結婚する」で覚える。"
  },
  {
    "id": 918,
    "hanzi": "结束",
    "pinyin": "jiéshù",
    "meaning": "終わる",
    "example": "我结束了。",
    "exampleMeaning": "私は结束ました。",
    "category": [
      "verb"
    ],
    "etymology": "「结」（糸（纟）：いとへん）＋「束」（木：き）。終わるを表す。",
    "mnemonic": "「キSH」＝结（いとへん）＋束（き）→「終わる」で覚える。"
  },
  {
    "id": 919,
    "hanzi": "节目",
    "pinyin": "jiémù",
    "meaning": "プログラム",
    "example": "这是节目。",
    "exampleMeaning": "これは节目です。",
    "category": [
      "noun"
    ],
    "etymology": "「节」（艹：くさかんむり）＋「目」（目：め）。プログラムを表す。",
    "mnemonic": "「キM」＝节（くさかんむり）＋目（め）→「プログラム」で覚える。"
  },
  {
    "id": 920,
    "hanzi": "节日",
    "pinyin": "jiérì",
    "meaning": "休日",
    "example": "这是节日。",
    "exampleMeaning": "これは节日です。",
    "category": [
      "noun"
    ],
    "etymology": "「节」（艹：くさかんむり）＋「日」（日：ひ）。休日を表す。",
    "mnemonic": "「キR」＝节（くさかんむり）＋日（ひ）→「休日」で覚える。"
  },
  {
    "id": 921,
    "hanzi": "解决",
    "pinyin": "jiějué",
    "meaning": "解決する",
    "example": "我解决了。",
    "exampleMeaning": "私は解决ました。",
    "category": [
      "verb"
    ],
    "etymology": "「解」（角：つのへん）＋「决」（水（氵）：さんずい）。解決するを表す。",
    "mnemonic": "「キキョ」＝解（つのへん）＋决（さんずい）→「解決する」で覚える。"
  },
  {
    "id": 922,
    "hanzi": "借",
    "pinyin": "jiè",
    "meaning": "借りる、貸す",
    "example": "我借了。",
    "exampleMeaning": "私は借ました。",
    "category": [
      "verb"
    ],
    "etymology": "「借」（人（亻）：にんべん）。借りる、貸すを表す。",
    "mnemonic": "「キ」＝借（にんべん）→「借りる、貸す」で覚える。"
  },
  {
    "id": 923,
    "hanzi": "经常",
    "pinyin": "jīngcháng",
    "meaning": "いつも、よく",
    "example": "这是经常。",
    "exampleMeaning": "これは经常です。",
    "category": [
      "noun"
    ],
    "etymology": "「经」（糸（纟）：いとへん）＋「常」（巾：はば）。いつも、よくを表す。",
    "mnemonic": "「JNGCHNG」＝经（いとへん）＋常（はば）→「いつも、よく」で覚える。"
  },
  {
    "id": 924,
    "hanzi": "经过",
    "pinyin": "jīngguò",
    "meaning": "通過する、経由する",
    "example": "我经过了。",
    "exampleMeaning": "私は经过ました。",
    "category": [
      "verb"
    ],
    "etymology": "「经」（糸（纟）：いとへん）＋「过」（辶：しんにょう）。通過する、経由するを表す。",
    "mnemonic": "「JNGGU」＝经（いとへん）＋过（しんにょう）→「通過する、経由する」で覚える。"
  },
  {
    "id": 925,
    "hanzi": "经理",
    "pinyin": "jīnglǐ",
    "meaning": "マネージャー",
    "example": "这是经理。",
    "exampleMeaning": "これは经理です。",
    "category": [
      "noun"
    ],
    "etymology": "「经」（糸（纟）：いとへん）＋「理」（玉（王）：たまへん）。マネージャーを表す。",
    "mnemonic": "「JNGL」＝经（いとへん）＋理（たまへん）→「マネージャー」で覚える。"
  },
  {
    "id": 926,
    "hanzi": "久",
    "pinyin": "jiǔ",
    "meaning": "長い間、久しい",
    "example": "这是久。",
    "exampleMeaning": "これは久です。",
    "category": [
      "noun"
    ],
    "etymology": "「久」（丿：の）。長い間、久しいを表す。",
    "mnemonic": "「キ」＝久（の）→「長い間、久しい」で覚える。"
  },
  {
    "id": 927,
    "hanzi": "旧",
    "pinyin": "jiù",
    "meaning": "古い、年を取った",
    "example": "这很旧。",
    "exampleMeaning": "これはとても旧です。",
    "category": [
      "adjective"
    ],
    "etymology": "「旧」（日：ひ）。古い、年を取ったを表す。",
    "mnemonic": "「キ」＝旧（ひ）→「古い、年を取った」で覚える。"
  },
  {
    "id": 928,
    "hanzi": "句子",
    "pinyin": "jùzi",
    "meaning": "文",
    "example": "这是句子。",
    "exampleMeaning": "これは句子です。",
    "category": [
      "noun"
    ],
    "etymology": "「句」（口：くち）＋「子」（子：こ）。文を表す。",
    "mnemonic": "「Jシ」＝句（くち）＋子（こ）→「文」で覚える。"
  },
  {
    "id": 929,
    "hanzi": "决定",
    "pinyin": "juédìng",
    "meaning": "決める、決定する",
    "example": "我决定了。",
    "exampleMeaning": "私は决定ました。",
    "category": [
      "verb"
    ],
    "etymology": "「决」（水（氵）：さんずい）＋「定」（宀：うかんむり）。決める、決定するを表す。",
    "mnemonic": "「キョDNG」＝决（さんずい）＋定（うかんむり）→「決める、決定する」で覚える。"
  },
  {
    "id": 930,
    "hanzi": "可爱",
    "pinyin": "kěài",
    "meaning": "可愛い",
    "example": "这是可爱。",
    "exampleMeaning": "これは可爱です。",
    "category": [
      "noun"
    ],
    "etymology": "「可」（口：くち）＋「爱」（心（⺗）：こころ）。可愛いを表す。",
    "mnemonic": "「KI」＝可（くち）＋爱（こころ）→「可愛い」で覚える。"
  },
  {
    "id": 931,
    "hanzi": "渴",
    "pinyin": "kě",
    "meaning": "喉が渇いた",
    "example": "这很渴。",
    "exampleMeaning": "これはとても渴です。",
    "category": [
      "adjective"
    ],
    "etymology": "「渴」（水（氵）：さんずい）。喉が渇いたを表す。",
    "mnemonic": "「K」＝渴（さんずい）→「喉が渇いた」で覚える。"
  },
  {
    "id": 932,
    "hanzi": "刻",
    "pinyin": "kè",
    "meaning": "4分の1、四半期",
    "example": "这是刻。",
    "exampleMeaning": "これは刻です。",
    "category": [
      "noun"
    ],
    "etymology": "「刻」（刀（刂）：りっとう）。4分の1、四半期を表す。",
    "mnemonic": "「K」＝刻（りっとう）→「4分の1、四半期」で覚える。"
  },
  {
    "id": 933,
    "hanzi": "客人",
    "pinyin": "kèrén",
    "meaning": "お客さん、来客",
    "example": "这是客人。",
    "exampleMeaning": "これは客人です。",
    "category": [
      "noun"
    ],
    "etymology": "「客」（宀：うかんむり）＋「人」（人：ひと）。お客さん、来客を表す。",
    "mnemonic": "「KRN」＝客（うかんむり）＋人（ひと）→「お客さん、来客」で覚える。"
  },
  {
    "id": 934,
    "hanzi": "空调",
    "pinyin": "kōngtiáo",
    "meaning": "エアコン",
    "example": "这是空调。",
    "exampleMeaning": "これは空调です。",
    "category": [
      "noun"
    ],
    "etymology": "「空」（穴：あなかんむり）＋「调」（言（讠）：ごんべん）。エアコンを表す。",
    "mnemonic": "「KNGTIオ」＝空（あなかんむり）＋调（ごんべん）→「エアコン」で覚える。"
  },
  {
    "id": 935,
    "hanzi": "口",
    "pinyin": "kǒu",
    "meaning": "口",
    "example": "这是口。",
    "exampleMeaning": "これは口です。",
    "category": [
      "noun"
    ],
    "etymology": "「口」（口：くち）。口を表す。",
    "mnemonic": "「KU」＝口（くち）→「口」で覚える。"
  },
  {
    "id": 936,
    "hanzi": "哭",
    "pinyin": "kū",
    "meaning": "泣く",
    "example": "我哭了。",
    "exampleMeaning": "私は哭ました。",
    "category": [
      "verb"
    ],
    "etymology": "「哭」（口：くち）。泣くを表す。",
    "mnemonic": "「K」＝哭（くち）→「泣く」で覚える。"
  },
  {
    "id": 937,
    "hanzi": "裤子",
    "pinyin": "kùzi",
    "meaning": "ズボン",
    "example": "这是裤子。",
    "exampleMeaning": "これは裤子です。",
    "category": [
      "noun"
    ],
    "etymology": "「裤」（衣（衤）：ころもへん）＋「子」（子：こ）。ズボンを表す。",
    "mnemonic": "「Kシ」＝裤（ころもへん）＋子（こ）→「ズボン」で覚える。"
  },
  {
    "id": 938,
    "hanzi": "筷子",
    "pinyin": "kuàizi",
    "meaning": "箸",
    "example": "这是筷子。",
    "exampleMeaning": "これは筷子です。",
    "category": [
      "noun"
    ],
    "etymology": "「筷」（竹（⺮）：たけかんむり）＋「子」（子：こ）。箸を表す。",
    "mnemonic": "「コIZI」＝筷（たけかんむり）＋子（こ）→「箸」で覚える。"
  },
  {
    "id": 939,
    "hanzi": "蓝",
    "pinyin": "lán",
    "meaning": "青い",
    "example": "这是蓝。",
    "exampleMeaning": "これは蓝です。",
    "category": [
      "noun"
    ],
    "etymology": "「蓝」（艹：くさかんむり）。青いを表す。",
    "mnemonic": "「LN」＝蓝（くさかんむり）→「青い」で覚える。"
  },
  {
    "id": 940,
    "hanzi": "老",
    "pinyin": "lǎo",
    "meaning": "古い、年を取った",
    "example": "这很老。",
    "exampleMeaning": "これはとても老です。",
    "category": [
      "adjective"
    ],
    "etymology": "「老」（老：おいかんむり）。古い、年を取ったを表す。",
    "mnemonic": "「Lオ」＝老（おいかんむり）→「古い、年を取った」で覚える。"
  },
  {
    "id": 941,
    "hanzi": "离开",
    "pinyin": "líkāi",
    "meaning": "離れる、去る",
    "example": "我离开了。",
    "exampleMeaning": "私は离开ました。",
    "category": [
      "verb"
    ],
    "etymology": "「离」（禸：ぐうのあし）＋「开」（廾：にじゅうあし）。離れる、去るを表す。",
    "mnemonic": "「LKI」＝离（ぐうのあし）＋开（にじゅうあし）→「離れる、去る」で覚える。"
  },
  {
    "id": 942,
    "hanzi": "礼物",
    "pinyin": "lǐwù",
    "meaning": "プレゼント",
    "example": "这是礼物。",
    "exampleMeaning": "これは礼物です。",
    "category": [
      "noun"
    ],
    "etymology": "「礼」（示（礻）：しめすへん）＋「物」（牛（牜）：うしへん）。プレゼントを表す。",
    "mnemonic": "「LW」＝礼（しめすへん）＋物（うしへん）→「プレゼント」で覚える。"
  },
  {
    "id": 943,
    "hanzi": "历史",
    "pinyin": "lìshǐ",
    "meaning": "歴史",
    "example": "这是历史。",
    "exampleMeaning": "これは历史です。",
    "category": [
      "noun"
    ],
    "etymology": "「历」（厂：がんだれ）＋「史」（口：くち）。歴史を表す。",
    "mnemonic": "「LSH」＝历（がんだれ）＋史（くち）→「歴史」で覚える。"
  },
  {
    "id": 944,
    "hanzi": "练习",
    "pinyin": "liànxí",
    "meaning": "運動",
    "example": "这是练习。",
    "exampleMeaning": "これは练习です。",
    "category": [
      "noun"
    ],
    "etymology": "「练」（糸（纟）：いとへん）＋「习」（乙：おつ）。運動を表す。",
    "mnemonic": "「リNX」＝练（いとへん）＋习（おつ）→「運動」で覚える。"
  },
  {
    "id": 945,
    "hanzi": "辆",
    "pinyin": "liàng",
    "meaning": "〜台（車両を数える量詞）",
    "example": "一辆。",
    "exampleMeaning": "1辆。",
    "category": [
      "measure"
    ],
    "etymology": "「辆」（車（车）：くるまへん）。〜台（車両を数える量詞）を表す。",
    "mnemonic": "「リNG」＝辆（くるまへん）→「〜台（車両を数える量詞）」で覚える。"
  },
  {
    "id": 946,
    "hanzi": "聊天",
    "pinyin": "liáotiān",
    "meaning": "おしゃべりする",
    "example": "我聊天了。",
    "exampleMeaning": "私は聊天ました。",
    "category": [
      "verb"
    ],
    "etymology": "「聊」（耳：みみへん）＋「天」（大：だい）。おしゃべりするを表す。",
    "mnemonic": "「リOTIN」＝聊（みみへん）＋天（だい）→「おしゃべりする」で覚える。"
  },
  {
    "id": 947,
    "hanzi": "了解",
    "pinyin": "liǎojiě",
    "meaning": "分かる、理解する",
    "example": "我了解了。",
    "exampleMeaning": "私は了解ました。",
    "category": [
      "verb"
    ],
    "etymology": "「了」（乙：おつ）＋「解」（角：つのへん）。分かる、理解するを表す。",
    "mnemonic": "「リOJI」＝了（おつ）＋解（つのへん）→「分かる、理解する」で覚える。"
  },
  {
    "id": 948,
    "hanzi": "邻居",
    "pinyin": "línjū",
    "meaning": "隣人",
    "example": "这是邻居。",
    "exampleMeaning": "これは邻居です。",
    "category": [
      "noun"
    ],
    "etymology": "「邻」（邑（阝）：おおざと）＋「居」（尸：しかばね）。隣人を表す。",
    "mnemonic": "「LNJ」＝邻（おおざと）＋居（しかばね）→「隣人」で覚える。"
  },
  {
    "id": 949,
    "hanzi": "留学",
    "pinyin": "liúxué",
    "meaning": "留学する",
    "example": "我留学了。",
    "exampleMeaning": "私は留学ました。",
    "category": [
      "verb"
    ],
    "etymology": "「留」（田：た）＋「学」（子：こへん）。留学するを表す。",
    "mnemonic": "「リキョ」＝留（た）＋学（こへん）→「留学する」で覚える。"
  },
  {
    "id": 950,
    "hanzi": "楼",
    "pinyin": "lóu",
    "meaning": "ビル、〜階建ての建物",
    "example": "这是楼。",
    "exampleMeaning": "これは楼です。",
    "category": [
      "noun"
    ],
    "etymology": "「楼」（木：きへん）。ビル、〜階建ての建物を表す。",
    "mnemonic": "「LU」＝楼（きへん）→「ビル、〜階建ての建物」で覚える。"
  },
  {
    "id": 951,
    "hanzi": "绿",
    "pinyin": "lv4",
    "meaning": "緑",
    "example": "这是绿。",
    "exampleMeaning": "これは绿です。",
    "category": [
      "noun"
    ],
    "etymology": "「绿」（糸（纟）：いとへん）。緑を表す。",
    "mnemonic": "「リョ」＝绿（いとへん）→「緑」で覚える。"
  },
  {
    "id": 952,
    "hanzi": "马",
    "pinyin": "mǎ",
    "meaning": "馬",
    "example": "这是马。",
    "exampleMeaning": "これは马です。",
    "category": [
      "noun"
    ],
    "etymology": "「马」（馬（马）：うま）。馬を表す。",
    "mnemonic": "「M」＝马（うま）→「馬」で覚える。"
  },
  {
    "id": 953,
    "hanzi": "马上",
    "pinyin": "mǎshàng",
    "meaning": "すぐに、直ちに",
    "example": "这是马上。",
    "exampleMeaning": "これは马上です。",
    "category": [
      "noun"
    ],
    "etymology": "「马」（馬（马）：うま）＋「上」（一：いち）。すぐに、直ちにを表す。",
    "mnemonic": "「MSHNG」＝马（うま）＋上（いち）→「すぐに、直ちに」で覚える。"
  },
  {
    "id": 954,
    "hanzi": "帽子",
    "pinyin": "màozi",
    "meaning": "帽子",
    "example": "这是帽子。",
    "exampleMeaning": "これは帽子です。",
    "category": [
      "noun"
    ],
    "etymology": "「帽」（巾：はばへん）＋「子」（子：こ）。帽子を表す。",
    "mnemonic": "「MOZI」＝帽（はばへん）＋子（こ）→「帽子」で覚える。"
  },
  {
    "id": 955,
    "hanzi": "米",
    "pinyin": "mǐ",
    "meaning": "ご飯、米",
    "example": "这是米。",
    "exampleMeaning": "これは米です。",
    "category": [
      "noun"
    ],
    "etymology": "「米」（米：こめ）。ご飯、米を表す。",
    "mnemonic": "「M」＝米（こめ）→「ご飯、米」で覚える。"
  },
  {
    "id": 956,
    "hanzi": "面包",
    "pinyin": "miànbāo",
    "meaning": "パン",
    "example": "这是面包。",
    "exampleMeaning": "これは面包です。",
    "category": [
      "noun"
    ],
    "etymology": "「面」（面：めん）＋「包」（勹：つつみがまえ）。パンを表す。",
    "mnemonic": "「ミNBオ」＝面（めん）＋包（つつみがまえ）→「パン」で覚える。"
  },
  {
    "id": 957,
    "hanzi": "明白",
    "pinyin": "míngbai",
    "meaning": "分かる、理解する",
    "example": "我明白了。",
    "exampleMeaning": "私は明白ました。",
    "category": [
      "verb"
    ],
    "etymology": "「明」（日：ひへん）＋「白」（白：しろ）。分かる、理解するを表す。",
    "mnemonic": "「MNGBAI」＝明（ひへん）＋白（しろ）→「分かる、理解する」で覚える。"
  },
  {
    "id": 958,
    "hanzi": "拿",
    "pinyin": "ná",
    "meaning": "持つ、取る",
    "example": "我拿了。",
    "exampleMeaning": "私は拿ました。",
    "category": [
      "verb"
    ],
    "etymology": "「拿」（手：て）。持つ、取るを表す。",
    "mnemonic": "「N」＝拿（て）→「持つ、取る」で覚える。"
  },
  {
    "id": 959,
    "hanzi": "奶奶",
    "pinyin": "nǎinai",
    "meaning": "おばあちゃん（父方の祖母）",
    "example": "这是奶奶。",
    "exampleMeaning": "これは奶奶です。",
    "category": [
      "noun"
    ],
    "etymology": "「奶」（女：おんなへん）＋「奶」（女：おんなへん）。おばあちゃん（父方の祖母）を表す。",
    "mnemonic": "「NINAI」＝奶（おんなへん）＋奶（おんなへん）→「おばあちゃん（父方の祖母）」で覚える。"
  },
  {
    "id": 960,
    "hanzi": "南",
    "pinyin": "nán",
    "meaning": "南",
    "example": "这是南。",
    "exampleMeaning": "これは南です。",
    "category": [
      "noun"
    ],
    "etymology": "「南」（十：じゅう）。南を表す。",
    "mnemonic": "「NN」＝南（じゅう）→「南」で覚える。"
  },
  {
    "id": 961,
    "hanzi": "难",
    "pinyin": "nán",
    "meaning": "難しい",
    "example": "这很难。",
    "exampleMeaning": "これはとても难です。",
    "category": [
      "adjective"
    ],
    "etymology": "「难」（隹：ふるとり）。難しいを表す。",
    "mnemonic": "「NN」＝难（ふるとり）→「難しい」で覚える。"
  },
  {
    "id": 962,
    "hanzi": "难过",
    "pinyin": "nánguò",
    "meaning": "悲しい、辛い",
    "example": "我难过了。",
    "exampleMeaning": "私は难过ました。",
    "category": [
      "verb"
    ],
    "etymology": "「难」（隹：ふるとり）＋「过」（辶：しんにょう）。悲しい、辛いを表す。",
    "mnemonic": "「NNGU」＝难（ふるとり）＋过（しんにょう）→「悲しい、辛い」で覚える。"
  },
  {
    "id": 963,
    "hanzi": "年级",
    "pinyin": "niánjí",
    "meaning": "〜年生（学年）",
    "example": "这是年级。",
    "exampleMeaning": "これは年级です。",
    "category": [
      "noun"
    ],
    "etymology": "「年」（干：ほす）＋「级」（糸（纟）：いとへん）。〜年生（学年）を表す。",
    "mnemonic": "「ニNJ」＝年（ほす）＋级（いとへん）→「〜年生（学年）」で覚える。"
  },
  {
    "id": 964,
    "hanzi": "年轻",
    "pinyin": "niánqīng",
    "meaning": "若い",
    "example": "这很年轻。",
    "exampleMeaning": "これはとても年轻です。",
    "category": [
      "adjective"
    ],
    "etymology": "「年」（干：ほす）＋「轻」（車（车）：くるまへん）。若いを表す。",
    "mnemonic": "「ニNQNG」＝年（ほす）＋轻（くるまへん）→「若い」で覚える。"
  },
  {
    "id": 965,
    "hanzi": "鸟",
    "pinyin": "niǎo",
    "meaning": "鳥",
    "example": "这是鸟。",
    "exampleMeaning": "これは鸟です。",
    "category": [
      "noun"
    ],
    "etymology": "「鸟」（鳥（鸟）：とり）。鳥を表す。",
    "mnemonic": "「ニオ」＝鸟（とり）→「鳥」で覚える。"
  },
  {
    "id": 966,
    "hanzi": "爬山",
    "pinyin": "páshān",
    "meaning": "山登りをする",
    "example": "我爬山了。",
    "exampleMeaning": "私は爬山ました。",
    "category": [
      "verb"
    ],
    "etymology": "「爬」（爪：そうにょう）＋「山」（山：やま）。山登りをするを表す。",
    "mnemonic": "「PSHN」＝爬（そうにょう）＋山（やま）→「山登りをする」で覚える。"
  },
  {
    "id": 967,
    "hanzi": "盘子",
    "pinyin": "pánzi",
    "meaning": "皿、お皿",
    "example": "这是盘子。",
    "exampleMeaning": "これは盘子です。",
    "category": [
      "noun"
    ],
    "etymology": "「盘」（皿：さら）＋「子」（子：こ）。皿、お皿を表す。",
    "mnemonic": "「PNZI」＝盘（さら）＋子（こ）→「皿、お皿」で覚える。"
  },
  {
    "id": 968,
    "hanzi": "胖",
    "pinyin": "pàng",
    "meaning": "太っている",
    "example": "这很胖。",
    "exampleMeaning": "これはとても胖です。",
    "category": [
      "adjective"
    ],
    "etymology": "「胖」（月：にくづき）。太っているを表す。",
    "mnemonic": "「PNG」＝胖（にくづき）→「太っている」で覚える。"
  },
  {
    "id": 969,
    "hanzi": "啤酒",
    "pinyin": "píjiǔ",
    "meaning": "ビール",
    "example": "这是啤酒。",
    "exampleMeaning": "これは啤酒です。",
    "category": [
      "noun"
    ],
    "etymology": "「啤」（口：くちへん）＋「酒」（水（氵）：さんずい）。ビールを表す。",
    "mnemonic": "「Pキ」＝啤（くちへん）＋酒（さんずい）→「ビール」で覚える。"
  },
  {
    "id": 970,
    "hanzi": "皮鞋",
    "pinyin": "píxié",
    "meaning": "革靴",
    "example": "这是皮鞋。",
    "exampleMeaning": "これは皮鞋です。",
    "category": [
      "noun"
    ],
    "etymology": "「皮」（皮：けがわ）＋「鞋」（革：かわへん）。革靴を表す。",
    "mnemonic": "「Pセキ」＝皮（けがわ）＋鞋（かわへん）→「革靴」で覚える。"
  },
  {
    "id": 971,
    "hanzi": "瓶子",
    "pinyin": "píngzi",
    "meaning": "瓶、ボトル",
    "example": "这是瓶子。",
    "exampleMeaning": "これは瓶子です。",
    "category": [
      "noun"
    ],
    "etymology": "「瓶」（瓦：かわら）＋「子」（子：こ）。瓶、ボトルを表す。",
    "mnemonic": "「PNGZI」＝瓶（かわら）＋子（こ）→「瓶、ボトル」で覚える。"
  },
  {
    "id": 972,
    "hanzi": "其实",
    "pinyin": "qíshí",
    "meaning": "実は、実際には",
    "example": "他其实来了。",
    "exampleMeaning": "彼は其实来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「其」（八：はち）＋「实」（宀：うかんむり）。実は、実際にはを表す。",
    "mnemonic": "「QSH」＝其（はち）＋实（うかんむり）→「実は、実際には」で覚える。"
  },
  {
    "id": 973,
    "hanzi": "其他",
    "pinyin": "qítā",
    "meaning": "その他、他の",
    "example": "其他很好。",
    "exampleMeaning": "其他はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「其」（八：はち）＋「他」（人（亻）：にんべん）。その他、他のを表す。",
    "mnemonic": "「QT」＝其（はち）＋他（にんべん）→「その他、他の」で覚える。"
  },
  {
    "id": 974,
    "hanzi": "奇怪",
    "pinyin": "qíguài",
    "meaning": "変な、奇妙な",
    "example": "这很奇怪。",
    "exampleMeaning": "これはとても奇怪です。",
    "category": [
      "adjective"
    ],
    "etymology": "「奇」（大：だい）＋「怪」（心（忄）：りっしんべん）。変な、奇妙なを表す。",
    "mnemonic": "「QコI」＝奇（だい）＋怪（りっしんべん）→「変な、奇妙な」で覚える。"
  },
  {
    "id": 975,
    "hanzi": "骑",
    "pinyin": "qí",
    "meaning": "乗る（自転車・馬などに）",
    "example": "我骑了。",
    "exampleMeaning": "私は骑ました。",
    "category": [
      "verb"
    ],
    "etymology": "「骑」（馬（马）：うまへん）。乗る（自転車・馬などに）を表す。",
    "mnemonic": "「Q」＝骑（うまへん）→「乗る（自転車・馬などに）」で覚える。"
  },
  {
    "id": 976,
    "hanzi": "起飞",
    "pinyin": "qǐfēi",
    "meaning": "離陸する",
    "example": "我起飞了。",
    "exampleMeaning": "私は起飞ました。",
    "category": [
      "verb"
    ],
    "etymology": "「起」（走：そうにょう）＋「飞」（飛（飞）：とぶ）。離陸するを表す。",
    "mnemonic": "「QFI」＝起（そうにょう）＋飞（とぶ）→「離陸する」で覚える。"
  },
  {
    "id": 977,
    "hanzi": "起来",
    "pinyin": "qǐlái",
    "meaning": "〜してくる、〜し始める（方向補語）",
    "example": "这是起来。",
    "exampleMeaning": "これは起来です。",
    "category": [
      "noun"
    ],
    "etymology": "「起」（走：そうにょう）＋「来」（木：き）。〜してくる、〜し始める（方向補語）を表す。",
    "mnemonic": "「QLI」＝起（そうにょう）＋来（き）→「〜してくる、〜し始める（方向補語）」で覚える。"
  },
  {
    "id": 978,
    "hanzi": "清楚",
    "pinyin": "qīngchu",
    "meaning": "はっきりしている、明確だ",
    "example": "这是清楚。",
    "exampleMeaning": "これは清楚です。",
    "category": [
      "noun"
    ],
    "etymology": "「清」（水（氵）：さんずい）＋「楚」（木：き）。はっきりしている、明確だを表す。",
    "mnemonic": "「QNGCHU」＝清（さんずい）＋楚（き）→「はっきりしている、明確だ」で覚える。"
  },
  {
    "id": 979,
    "hanzi": "请假",
    "pinyin": "qǐngjià",
    "meaning": "休暇を取る、欠席届を出す",
    "example": "我请假了。",
    "exampleMeaning": "私は请假ました。",
    "category": [
      "verb"
    ],
    "etymology": "「请」（言（讠）：ごんべん）＋「假」（人（亻）：にんべん）。休暇を取る、欠席届を出すを表す。",
    "mnemonic": "「QNGJI」＝请（ごんべん）＋假（にんべん）→「休暇を取る、欠席届を出す」で覚える。"
  },
  {
    "id": 980,
    "hanzi": "秋",
    "pinyin": "qiū",
    "meaning": "秋",
    "example": "这是秋。",
    "exampleMeaning": "これは秋です。",
    "category": [
      "noun"
    ],
    "etymology": "「秋」（禾：のぎへん）。秋を表す。",
    "mnemonic": "「キ」＝秋（のぎへん）→「秋」で覚える。"
  },
  {
    "id": 981,
    "hanzi": "裙子",
    "pinyin": "qúnzi",
    "meaning": "スカート",
    "example": "这是裙子。",
    "exampleMeaning": "これは裙子です。",
    "category": [
      "noun"
    ],
    "etymology": "「裙」（衣（衤）：ころもへん）＋「子」（子：こ）。スカートを表す。",
    "mnemonic": "「QNZI」＝裙（ころもへん）＋子（こ）→「スカート」で覚える。"
  },
  {
    "id": 982,
    "hanzi": "然后",
    "pinyin": "ránhòu",
    "meaning": "それから",
    "example": "他然后来了。",
    "exampleMeaning": "彼は然后来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「然」（火（灬）：れっか）＋「后」（口：くち）。それからを表す。",
    "mnemonic": "「RNHU」＝然（れっか）＋后（くち）→「それから」で覚える。"
  },
  {
    "id": 983,
    "hanzi": "热情",
    "pinyin": "rèqíng",
    "meaning": "熱心な、親切な",
    "example": "这是热情。",
    "exampleMeaning": "これは热情です。",
    "category": [
      "noun"
    ],
    "etymology": "「热」（火（灬）：れっか）＋「情」（心（忄）：こころ）。熱心な、親切なを表す。",
    "mnemonic": "「RQNG」＝热（れっか）＋情（こころ）→「熱心な、親切な」で覚える。"
  },
  {
    "id": 984,
    "hanzi": "认为",
    "pinyin": "rènwéi",
    "meaning": "〜と思う、考える",
    "example": "我认为了。",
    "exampleMeaning": "私は认为ました。",
    "category": [
      "verb"
    ],
    "etymology": "「认」（言（讠）：ごんべん）＋「为」（丶：てん）。〜と思う、考えるを表す。",
    "mnemonic": "「RNWI」＝认（ごんべん）＋为（てん）→「〜と思う、考える」で覚える。"
  },
  {
    "id": 985,
    "hanzi": "认真",
    "pinyin": "rènzhēn",
    "meaning": "真面目な、真剣な",
    "example": "这是认真。",
    "exampleMeaning": "これは认真です。",
    "category": [
      "noun"
    ],
    "etymology": "「认」（言（讠）：ごんべん）＋「真」（目：め）。真面目な、真剣なを表す。",
    "mnemonic": "「RNZHN」＝认（ごんべん）＋真（め）→「真面目な、真剣な」で覚える。"
  },
  {
    "id": 986,
    "hanzi": "容易",
    "pinyin": "róngyì",
    "meaning": "簡単な",
    "example": "这很容易。",
    "exampleMeaning": "これはとても容易です。",
    "category": [
      "adjective"
    ],
    "etymology": "「容」（宀：うかんむり）＋「易」（日：ひ）。簡単なを表す。",
    "mnemonic": "「RNGY」＝容（うかんむり）＋易（ひ）→「簡単な」で覚える。"
  },
  {
    "id": 987,
    "hanzi": "如果",
    "pinyin": "rúguǒ",
    "meaning": "もし〜なら",
    "example": "我喜欢茶，如果也喜欢咖啡。",
    "exampleMeaning": "私はお茶が好きで、如果コーヒーも好きです。",
    "category": [
      "conjunction"
    ],
    "etymology": "「如」（女：おんなへん）＋「果」（木：き）。もし〜ならを表す。",
    "mnemonic": "「Rコ」＝如（おんなへん）＋果（き）→「もし〜なら」で覚える。"
  },
  {
    "id": 988,
    "hanzi": "伞",
    "pinyin": "sǎn",
    "meaning": "傘",
    "example": "这是伞。",
    "exampleMeaning": "これは伞です。",
    "category": [
      "noun"
    ],
    "etymology": "「伞」（人：ひと）。傘を表す。",
    "mnemonic": "「SN」＝伞（ひと）→「傘」で覚える。"
  },
  {
    "id": 989,
    "hanzi": "上网",
    "pinyin": "shàngwǎng",
    "meaning": "インターネットをする",
    "example": "我上网了。",
    "exampleMeaning": "私は上网ました。",
    "category": [
      "verb"
    ],
    "etymology": "「上」（一：いち）＋「网」（网：あみがしら）。インターネットをするを表す。",
    "mnemonic": "「SHNGWNG」＝上（いち）＋网（あみがしら）→「インターネットをする」で覚える。"
  },
  {
    "id": 990,
    "hanzi": "声音",
    "pinyin": "shēngyīn",
    "meaning": "声",
    "example": "这是声音。",
    "exampleMeaning": "これは声音です。",
    "category": [
      "noun"
    ],
    "etymology": "「声」（士：さむらい）＋「音」（音：おと）。声を表す。",
    "mnemonic": "「SHNGYN」＝声（さむらい）＋音（おと）→「声」で覚える。"
  },
  {
    "id": 991,
    "hanzi": "生气",
    "pinyin": "shēngqì",
    "meaning": "怒っている",
    "example": "这很生气。",
    "exampleMeaning": "これはとても生气です。",
    "category": [
      "adjective"
    ],
    "etymology": "「生」（生：うまれる）＋「气」（气：きがまえ）。怒っているを表す。",
    "mnemonic": "「SHNGQ」＝生（うまれる）＋气（きがまえ）→「怒っている」で覚える。"
  },
  {
    "id": 992,
    "hanzi": "世界",
    "pinyin": "shìjiè",
    "meaning": "世界",
    "example": "这是世界。",
    "exampleMeaning": "これは世界です。",
    "category": [
      "noun"
    ],
    "etymology": "「世」（一：いち）＋「界」（田：た）。世界を表す。",
    "mnemonic": "「SHキ」＝世（いち）＋界（た）→「世界」で覚える。"
  },
  {
    "id": 993,
    "hanzi": "试",
    "pinyin": "shì",
    "meaning": "試す、試着する",
    "example": "我试了。",
    "exampleMeaning": "私は试ました。",
    "category": [
      "verb"
    ],
    "etymology": "「试」（言（讠）：ごんべん）。試す、試着するを表す。",
    "mnemonic": "「SH」＝试（ごんべん）→「試す、試着する」で覚える。"
  },
  {
    "id": 994,
    "hanzi": "瘦",
    "pinyin": "shòu",
    "meaning": "きつい、ピンと張った",
    "example": "这是瘦。",
    "exampleMeaning": "これは瘦です。",
    "category": [
      "noun"
    ],
    "etymology": "「瘦」（疒：やまいだれ）。きつい、ピンと張ったを表す。",
    "mnemonic": "「SHU」＝瘦（やまいだれ）→「きつい、ピンと張った」で覚える。"
  },
  {
    "id": 995,
    "hanzi": "叔叔",
    "pinyin": "shūshu",
    "meaning": "おじさん（父の弟）",
    "example": "这是叔叔。",
    "exampleMeaning": "これは叔叔です。",
    "category": [
      "noun"
    ],
    "etymology": "「叔」（又：また）＋「叔」（又：また）。おじさん（父の弟）を表す。",
    "mnemonic": "「SHショ」＝叔（また）＋叔（また）→「おじさん（父の弟）」で覚える。"
  },
  {
    "id": 996,
    "hanzi": "舒服",
    "pinyin": "shūfu",
    "meaning": "快適な、気持ち良い",
    "example": "这很舒服。",
    "exampleMeaning": "これはとても舒服です。",
    "category": [
      "adjective"
    ],
    "etymology": "「舒」（舌：した）＋「服」（月：つきへん）。快適な、気持ち良いを表す。",
    "mnemonic": "「SHフク」＝舒（した）＋服（つきへん）→「快適な、気持ち良い」で覚える。"
  },
  {
    "id": 997,
    "hanzi": "数学",
    "pinyin": "shùxué",
    "meaning": "数学",
    "example": "这是数学。",
    "exampleMeaning": "これは数学です。",
    "category": [
      "noun"
    ],
    "etymology": "「数」（攵：のぶん）＋「学」（子：こへん）。数学を表す。",
    "mnemonic": "「SHキョ」＝数（のぶん）＋学（こへん）→「数学」で覚える。"
  },
  {
    "id": 998,
    "hanzi": "树",
    "pinyin": "shù",
    "meaning": "木",
    "example": "这是树。",
    "exampleMeaning": "これは树です。",
    "category": [
      "noun"
    ],
    "etymology": "「树」（木：きへん）。木を表す。",
    "mnemonic": "「SH」＝树（きへん）→「木」で覚える。"
  },
  {
    "id": 999,
    "hanzi": "刷牙",
    "pinyin": "shuāyá",
    "meaning": "歯を磨く",
    "example": "我刷牙了。",
    "exampleMeaning": "私は刷牙ました。",
    "category": [
      "verb"
    ],
    "etymology": "「刷」（刀（刂）：りっとう）＋「牙」（牙：きば）。歯を磨くを表す。",
    "mnemonic": "「ショY」＝刷（りっとう）＋牙（きば）→「歯を磨く」で覚える。"
  },
  {
    "id": 1000,
    "hanzi": "双",
    "pinyin": "shuāng",
    "meaning": "ペア、一組",
    "example": "这是双。",
    "exampleMeaning": "これは双です。",
    "category": [
      "noun"
    ],
    "etymology": "「双」（又：また）。ペア、一組を表す。",
    "mnemonic": "「ショNG」＝双（また）→「ペア、一組」で覚える。"
  },
  {
    "id": 1001,
    "hanzi": "水平",
    "pinyin": "shuǐpíng",
    "meaning": "レベル、水準",
    "example": "这是水平。",
    "exampleMeaning": "これは水平です。",
    "category": [
      "noun"
    ],
    "etymology": "「水」（水：みず）＋「平」（干：ほす）。レベル、水準を表す。",
    "mnemonic": "「ショPNG」＝水（みず）＋平（ほす）→「レベル、水準」で覚える。"
  },
  {
    "id": 1002,
    "hanzi": "司机",
    "pinyin": "sījī",
    "meaning": "運転手",
    "example": "这是司机。",
    "exampleMeaning": "これは司机です。",
    "category": [
      "noun"
    ],
    "etymology": "「司」（口：くち）＋「机」（木：きへん）。運転手を表す。",
    "mnemonic": "「SJ」＝司（くち）＋机（きへん）→「運転手」で覚える。"
  },
  {
    "id": 1003,
    "hanzi": "太阳",
    "pinyin": "tàiyáng",
    "meaning": "太陽",
    "example": "这是太阳。",
    "exampleMeaning": "これは太阳です。",
    "category": [
      "noun"
    ],
    "etymology": "「太」（大：だい）＋「阳」（阜（阝）：こざとへん）。太陽を表す。",
    "mnemonic": "「TIYNG」＝太（だい）＋阳（こざとへん）→「太陽」で覚える。"
  },
  {
    "id": 1004,
    "hanzi": "特别",
    "pinyin": "tèbié",
    "meaning": "特に",
    "example": "他特别来了。",
    "exampleMeaning": "彼は特别来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「特」（牛（牜）：うしへん）＋「别」（刀（刂）：りっとう）。特にを表す。",
    "mnemonic": "「Tヒ」＝特（うしへん）＋别（りっとう）→「特に」で覚える。"
  },
  {
    "id": 1005,
    "hanzi": "疼",
    "pinyin": "téng",
    "meaning": "痛い",
    "example": "这是疼。",
    "exampleMeaning": "これは疼です。",
    "category": [
      "noun"
    ],
    "etymology": "「疼」（疒：やまいだれ）。痛いを表す。",
    "mnemonic": "「TNG」＝疼（やまいだれ）→「痛い」で覚える。"
  },
  {
    "id": 1006,
    "hanzi": "提高",
    "pinyin": "tígāo",
    "meaning": "高める、向上させる",
    "example": "我提高了。",
    "exampleMeaning": "私は提高ました。",
    "category": [
      "verb"
    ],
    "etymology": "「提」（手（扌）：てへん）＋「高」（高：たかい）。高める、向上させるを表す。",
    "mnemonic": "「TGオ」＝提（てへん）＋高（たかい）→「高める、向上させる」で覚える。"
  },
  {
    "id": 1007,
    "hanzi": "体育",
    "pinyin": "tǐyù",
    "meaning": "体育、スポーツ",
    "example": "这是体育。",
    "exampleMeaning": "これは体育です。",
    "category": [
      "noun"
    ],
    "etymology": "「体」（人（亻）：にんべん）＋「育」（肉（月）：にくづき）。体育、スポーツを表す。",
    "mnemonic": "「TY」＝体（にんべん）＋育（にくづき）→「体育、スポーツ」で覚える。"
  },
  {
    "id": 1008,
    "hanzi": "甜",
    "pinyin": "tián",
    "meaning": "甘い",
    "example": "这很甜。",
    "exampleMeaning": "これはとても甜です。",
    "category": [
      "adjective"
    ],
    "etymology": "「甜」（甘：あまい）。甘いを表す。",
    "mnemonic": "「テイN」＝甜（あまい）→「甘い」で覚える。"
  },
  {
    "id": 1009,
    "hanzi": "条",
    "pinyin": "tiáo",
    "meaning": "〜本（細長いものを数える量詞）",
    "example": "这是条。",
    "exampleMeaning": "これは条です。",
    "category": [
      "noun"
    ],
    "etymology": "「条」（木：き）。〜本（細長いものを数える量詞）を表す。",
    "mnemonic": "「テイオ」＝条（き）→「〜本（細長いものを数える量詞）」で覚える。"
  },
  {
    "id": 1010,
    "hanzi": "同事",
    "pinyin": "tóngshì",
    "meaning": "同僚",
    "example": "这是同事。",
    "exampleMeaning": "これは同事です。",
    "category": [
      "noun"
    ],
    "etymology": "「同」（口：くち）＋「事」（亅：はねぼう）。同僚を表す。",
    "mnemonic": "「TNGSH」＝同（くち）＋事（はねぼう）→「同僚」で覚える。"
  },
  {
    "id": 1011,
    "hanzi": "同意",
    "pinyin": "tóngyì",
    "meaning": "同意する、賛成する",
    "example": "我同意了。",
    "exampleMeaning": "私は同意ました。",
    "category": [
      "verb"
    ],
    "etymology": "「同」（口：くち）＋「意」（心：こころ）。同意する、賛成するを表す。",
    "mnemonic": "「TNGY」＝同（くち）＋意（こころ）→「同意する、賛成する」で覚える。"
  },
  {
    "id": 1012,
    "hanzi": "头发",
    "pinyin": "tóufa",
    "meaning": "髪の毛",
    "example": "这是头发。",
    "exampleMeaning": "これは头发です。",
    "category": [
      "noun"
    ],
    "etymology": "「头」（頁（页）：おおがい）＋「发」（又：また）。髪の毛を表す。",
    "mnemonic": "「TUFA」＝头（おおがい）＋发（また）→「髪の毛」で覚える。"
  },
  {
    "id": 1013,
    "hanzi": "突然",
    "pinyin": "tūrán",
    "meaning": "突然",
    "example": "这是突然。",
    "exampleMeaning": "これは突然です。",
    "category": [
      "noun"
    ],
    "etymology": "「突」（穴：あなかんむり）＋「然」（火（灬）：れっか）。突然を表す。",
    "mnemonic": "「TRN」＝突（あなかんむり）＋然（れっか）→「突然」で覚える。"
  },
  {
    "id": 1014,
    "hanzi": "图书馆",
    "pinyin": "túshūguǎn",
    "meaning": "図書館",
    "example": "这是图书馆。",
    "exampleMeaning": "これは图书馆です。",
    "category": [
      "noun"
    ],
    "etymology": "「图」（囗：くにがまえ）＋「书」（乙：おつ）＋「馆」（食（饣）：しょくへん）。図書館を表す。",
    "mnemonic": "「TSHコN」＝图（くにがまえ）＋书（おつ）＋馆（しょくへん）→「図書館」で覚える。"
  },
  {
    "id": 1015,
    "hanzi": "腿",
    "pinyin": "tuǐ",
    "meaning": "脚",
    "example": "这是腿。",
    "exampleMeaning": "これは腿です。",
    "category": [
      "noun"
    ],
    "etymology": "「腿」（月：にくづき）。脚を表す。",
    "mnemonic": "「ト」＝腿（にくづき）→「脚」で覚える。"
  },
  {
    "id": 1016,
    "hanzi": "完成",
    "pinyin": "wánchéng",
    "meaning": "完成する、完全な",
    "example": "这是完成。",
    "exampleMeaning": "これは完成です。",
    "category": [
      "noun"
    ],
    "etymology": "「完」（宀：うかんむり）＋「成」（戈：ほこづくり）。完成する、完全なを表す。",
    "mnemonic": "「WNCHNG」＝完（うかんむり）＋成（ほこづくり）→「完成する、完全な」で覚える。"
  },
  {
    "id": 1017,
    "hanzi": "碗",
    "pinyin": "wǎn",
    "meaning": "茶碗、お椀",
    "example": "这是碗。",
    "exampleMeaning": "これは碗です。",
    "category": [
      "noun"
    ],
    "etymology": "「碗」（石：いしへん）。茶碗、お椀を表す。",
    "mnemonic": "「WN」＝碗（いしへん）→「茶碗、お椀」で覚える。"
  },
  {
    "id": 1018,
    "hanzi": "万",
    "pinyin": "wàn",
    "meaning": "万",
    "example": "有万个。",
    "exampleMeaning": "万個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「万」（一：いち）。万を表す。",
    "mnemonic": "「WN」＝万（いち）→「万」で覚える。"
  },
  {
    "id": 1019,
    "hanzi": "忘记",
    "pinyin": "wàngjì",
    "meaning": "忘れる",
    "example": "我忘记了。",
    "exampleMeaning": "私は忘记ました。",
    "category": [
      "verb"
    ],
    "etymology": "「忘」（心：こころ）＋「记」（言（讠）：ごんべん）。忘れるを表す。",
    "mnemonic": "「WNGJ」＝忘（こころ）＋记（ごんべん）→「忘れる」で覚える。"
  },
  {
    "id": 1020,
    "hanzi": "为",
    "pinyin": "wèi",
    "meaning": "〜のために、〜のせいで",
    "example": "我喜欢茶，为也喜欢咖啡。",
    "exampleMeaning": "私はお茶が好きで、为コーヒーも好きです。",
    "category": [
      "conjunction"
    ],
    "etymology": "「为」（丶：てん）。〜のために、〜のせいでを表す。",
    "mnemonic": "「WI」＝为（てん）→「〜のために、〜のせいで」で覚える。"
  },
  {
    "id": 1021,
    "hanzi": "为了",
    "pinyin": "wèile",
    "meaning": "〜のために、〜するために",
    "example": "他为了我来了。",
    "exampleMeaning": "彼は私为了来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「为」（丶：てん）＋「了」（乙：おつ）。〜のために、〜するためにを表す。",
    "mnemonic": "「WILE」＝为（てん）＋了（おつ）→「〜のために、〜するために」で覚える。"
  },
  {
    "id": 1022,
    "hanzi": "位",
    "pinyin": "wèi",
    "meaning": "位置、ポジション",
    "example": "这是位。",
    "exampleMeaning": "これは位です。",
    "category": [
      "noun"
    ],
    "etymology": "「位」（人（亻）：にんべん）。位置、ポジションを表す。",
    "mnemonic": "「WI」＝位（にんべん）→「位置、ポジション」で覚える。"
  },
  {
    "id": 1023,
    "hanzi": "文化",
    "pinyin": "wénhuà",
    "meaning": "文化",
    "example": "这是文化。",
    "exampleMeaning": "これは文化です。",
    "category": [
      "noun"
    ],
    "etymology": "「文」（文：ぶん）＋「化」（匕：さじ）。文化を表す。",
    "mnemonic": "「WNHU」＝文（ぶん）＋化（さじ）→「文化」で覚える。"
  },
  {
    "id": 1024,
    "hanzi": "西",
    "pinyin": "xī",
    "meaning": "西",
    "example": "这是西。",
    "exampleMeaning": "これは西です。",
    "category": [
      "noun"
    ],
    "etymology": "「西」（襾：にし）。西を表す。",
    "mnemonic": "「X」＝西（にし）→「西」で覚える。"
  },
  {
    "id": 1025,
    "hanzi": "习惯",
    "pinyin": "xíguàn",
    "meaning": "習慣",
    "example": "这是习惯。",
    "exampleMeaning": "これは习惯です。",
    "category": [
      "noun"
    ],
    "etymology": "「习」（乙：おつ）＋「惯」（心（忄）：りっしんべん）。習慣を表す。",
    "mnemonic": "「XコN」＝习（おつ）＋惯（りっしんべん）→「習慣」で覚える。"
  },
  {
    "id": 1026,
    "hanzi": "洗手间",
    "pinyin": "xǐshǒujiān",
    "meaning": "トイレ",
    "example": "这是洗手间。",
    "exampleMeaning": "これは洗手间です。",
    "category": [
      "noun"
    ],
    "etymology": "「洗」（水（氵）：さんずい）＋「手」（手：て）＋「间」（門（门）：もんがまえ）。トイレを表す。",
    "mnemonic": "「XSHUJIN」＝洗（さんずい）＋手（て）＋间（もんがまえ）→「トイレ」で覚える。"
  },
  {
    "id": 1027,
    "hanzi": "洗澡",
    "pinyin": "xǐzǎo",
    "meaning": "お風呂に入る、シャワーを浴びる",
    "example": "我洗澡了。",
    "exampleMeaning": "私は洗澡ました。",
    "category": [
      "verb"
    ],
    "etymology": "「洗」（水（氵）：さんずい）＋「澡」（水（氵）：さんずい）。お風呂に入る、シャワーを浴びるを表す。",
    "mnemonic": "「XZオ」＝洗（さんずい）＋澡（さんずい）→「お風呂に入る、シャワーを浴びる」で覚える。"
  },
  {
    "id": 1028,
    "hanzi": "夏",
    "pinyin": "xià",
    "meaning": "夏",
    "example": "这是夏。",
    "exampleMeaning": "これは夏です。",
    "category": [
      "noun"
    ],
    "etymology": "「夏」（夊：すいにょう）。夏を表す。",
    "mnemonic": "「セキ」＝夏（すいにょう）→「夏」で覚える。"
  },
  {
    "id": 1029,
    "hanzi": "先",
    "pinyin": "xiān",
    "meaning": "早い",
    "example": "他先来了。",
    "exampleMeaning": "彼は先来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「先」（儿：にんにょう）。早いを表す。",
    "mnemonic": "「セキN」＝先（にんにょう）→「早い」で覚える。"
  },
  {
    "id": 1030,
    "hanzi": "相信",
    "pinyin": "xiāngxìn",
    "meaning": "信じる、信用する",
    "example": "我相信了。",
    "exampleMeaning": "私は相信ました。",
    "category": [
      "verb"
    ],
    "etymology": "「相」（目：め）＋「信」（人（亻）：にんべん）。信じる、信用するを表す。",
    "mnemonic": "「セキNGXN」＝相（め）＋信（にんべん）→「信じる、信用する」で覚える。"
  },
  {
    "id": 1031,
    "hanzi": "香蕉",
    "pinyin": "xiāngjiāo",
    "meaning": "バナナ",
    "example": "这是香蕉。",
    "exampleMeaning": "これは香蕉です。",
    "category": [
      "noun"
    ],
    "etymology": "「香」（香：かおり）＋「蕉」（艹：くさかんむり）。バナナを表す。",
    "mnemonic": "「セキNGJIオ」＝香（かおり）＋蕉（くさかんむり）→「バナナ」で覚える。"
  },
  {
    "id": 1032,
    "hanzi": "像",
    "pinyin": "xiàng",
    "meaning": "〜のような、好きな",
    "example": "这是像。",
    "exampleMeaning": "これは像です。",
    "category": [
      "noun"
    ],
    "etymology": "「像」（人（亻）：にんべん）。〜のような、好きなを表す。",
    "mnemonic": "「セキNG」＝像（にんべん）→「〜のような、好きな」で覚える。"
  },
  {
    "id": 1033,
    "hanzi": "向",
    "pinyin": "xiàng",
    "meaning": "〜に向かって、方向",
    "example": "这是向。",
    "exampleMeaning": "これは向です。",
    "category": [
      "noun"
    ],
    "etymology": "「向」（口：くち）。〜に向かって、方向を表す。",
    "mnemonic": "「セキNG」＝向（くち）→「〜に向かって、方向」で覚える。"
  },
  {
    "id": 1034,
    "hanzi": "小心",
    "pinyin": "xiǎoxīn",
    "meaning": "気をつける",
    "example": "我小心了。",
    "exampleMeaning": "私は小心ました。",
    "category": [
      "verb"
    ],
    "etymology": "「小」（小：しょう）＋「心」（心：こころ）。気をつけるを表す。",
    "mnemonic": "「セキOXN」＝小（しょう）＋心（こころ）→「気をつける」で覚える。"
  },
  {
    "id": 1035,
    "hanzi": "校长",
    "pinyin": "xiàozhǎng",
    "meaning": "大統領、社長",
    "example": "这是校长。",
    "exampleMeaning": "これは校长です。",
    "category": [
      "noun"
    ],
    "etymology": "「校」（木：きへん）＋「长」（長（长）：ながい）。大統領、社長を表す。",
    "mnemonic": "「セキOZHNG」＝校（きへん）＋长（ながい）→「大統領、社長」で覚える。"
  },
  {
    "id": 1036,
    "hanzi": "新闻",
    "pinyin": "xīnwén",
    "meaning": "ニュース",
    "example": "这是新闻。",
    "exampleMeaning": "これは新闻です。",
    "category": [
      "noun"
    ],
    "etymology": "「新」（斤：おの）＋「闻」（門（门）：もんがまえ）。ニュースを表す。",
    "mnemonic": "「XNWN」＝新（おの）＋闻（もんがまえ）→「ニュース」で覚える。"
  },
  {
    "id": 1037,
    "hanzi": "新鲜",
    "pinyin": "xīnxiān",
    "meaning": "新鮮な",
    "example": "这是新鲜。",
    "exampleMeaning": "これは新鲜です。",
    "category": [
      "noun"
    ],
    "etymology": "「新」（斤：おの）＋「鲜」（魚（鱼）：うおへん）。新鮮なを表す。",
    "mnemonic": "「XNXIN」＝新（おの）＋鲜（うおへん）→「新鮮な」で覚える。"
  },
  {
    "id": 1038,
    "hanzi": "信用卡",
    "pinyin": "xìnyòngkǎ",
    "meaning": "クレジットカード",
    "example": "这是信用卡。",
    "exampleMeaning": "これは信用卡です。",
    "category": [
      "noun"
    ],
    "etymology": "「信」（人（亻）：にんべん）＋「用」（用：もちいる）＋「卡」（卜：うらなう）。クレジットカードを表す。",
    "mnemonic": "「XNYNGK」＝信（にんべん）＋用（もちいる）＋卡（うらなう）→「クレジットカード」で覚える。"
  },
  {
    "id": 1039,
    "hanzi": "行李箱",
    "pinyin": "xínglǐxiāng",
    "meaning": "スーツケース",
    "example": "这是行李箱。",
    "exampleMeaning": "これは行李箱です。",
    "category": [
      "noun"
    ],
    "etymology": "「行」（行：ぎょうがまえ）＋「李」（木：き）＋「箱」（竹（⺮）：たけかんむり）。スーツケースを表す。",
    "mnemonic": "「XNGLセキNG」＝行（ぎょうがまえ）＋李（き）＋箱（たけかんむり）→「スーツケース」で覚える。"
  },
  {
    "id": 1040,
    "hanzi": "熊猫",
    "pinyin": "xióngmāo",
    "meaning": "パンダ",
    "example": "这是熊猫。",
    "exampleMeaning": "これは熊猫です。",
    "category": [
      "noun"
    ],
    "etymology": "「熊」（火（灬）：れっか）＋「猫」（犬（犭）：けものへん）。パンダを表す。",
    "mnemonic": "「セキNGMオ」＝熊（れっか）＋猫（けものへん）→「パンダ」で覚える。"
  },
  {
    "id": 1041,
    "hanzi": "爷爷",
    "pinyin": "yéye",
    "meaning": "おじいちゃん（父方の祖父）",
    "example": "这是爷爷。",
    "exampleMeaning": "これは爷爷です。",
    "category": [
      "noun"
    ],
    "etymology": "「爷」（父：ちち）＋「爷」（父：ちち）。おじいちゃん（父方の祖父）を表す。",
    "mnemonic": "「Yヤ」＝爷（ちち）＋爷（ちち）→「おじいちゃん（父方の祖父）」で覚える。"
  },
  {
    "id": 1042,
    "hanzi": "一直",
    "pinyin": "yīzhí",
    "meaning": "まっすぐな",
    "example": "这是一直。",
    "exampleMeaning": "これは一直です。",
    "category": [
      "noun"
    ],
    "etymology": "「一」（一：いち）＋「直」（目：め）。まっすぐなを表す。",
    "mnemonic": "「YZH」＝一（いち）＋直（め）→「まっすぐな」で覚える。"
  },
  {
    "id": 1043,
    "hanzi": "一会儿",
    "pinyin": "yīhuìer",
    "meaning": "しばらく、少しの間",
    "example": "这是一会儿。",
    "exampleMeaning": "これは一会儿です。",
    "category": [
      "noun"
    ],
    "etymology": "「一」（一：いち）＋「会」（人：ひと）＋「儿」（儿：にんにょう）。しばらく、少しの間を表す。",
    "mnemonic": "「Yコジ」＝一（いち）＋会（ひと）＋儿（にんにょう）→「しばらく、少しの間」で覚える。"
  },
  {
    "id": 1044,
    "hanzi": "一样",
    "pinyin": "yīyàng",
    "meaning": "同じ",
    "example": "这很一样。",
    "exampleMeaning": "これはとても一样です。",
    "category": [
      "adjective"
    ],
    "etymology": "「一」（一：いち）＋「样」（木：きへん）。同じを表す。",
    "mnemonic": "「YYNG」＝一（いち）＋样（きへん）→「同じ」で覚える。"
  },
  {
    "id": 1045,
    "hanzi": "以前",
    "pinyin": "yǐqián",
    "meaning": "〜の前に",
    "example": "他以前我来了。",
    "exampleMeaning": "彼は私以前来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「以」（人：ひと）＋「前」（刀（刂）：りっとう）。〜の前にを表す。",
    "mnemonic": "「YキN」＝以（ひと）＋前（りっとう）→「〜の前に」で覚える。"
  },
  {
    "id": 1046,
    "hanzi": "一般",
    "pinyin": "yībān",
    "meaning": "普通の、一般的な",
    "example": "这是一般。",
    "exampleMeaning": "これは一般です。",
    "category": [
      "noun"
    ],
    "etymology": "「一」（一：いち）＋「般」（舟：ふねへん）。普通の、一般的なを表す。",
    "mnemonic": "「YBN」＝一（いち）＋般（ふねへん）→「普通の、一般的な」で覚える。"
  },
  {
    "id": 1047,
    "hanzi": "一边",
    "pinyin": "yībiān",
    "meaning": "一方、片側",
    "example": "有一边个。",
    "exampleMeaning": "一边個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「一」（一：いち）＋「边」（辶：しんにょう）。一方、片側を表す。",
    "mnemonic": "「YヒN」＝一（いち）＋边（しんにょう）→「一方、片側」で覚える。"
  },
  {
    "id": 1048,
    "hanzi": "音乐",
    "pinyin": "yīnyuè",
    "meaning": "音楽",
    "example": "这是音乐。",
    "exampleMeaning": "これは音乐です。",
    "category": [
      "noun"
    ],
    "etymology": "「音」（音：おと）＋「乐」（丿：の）。音楽を表す。",
    "mnemonic": "「YNYU」＝音（おと）＋乐（の）→「音楽」で覚える。"
  },
  {
    "id": 1049,
    "hanzi": "银行",
    "pinyin": "yínháng",
    "meaning": "銀行",
    "example": "这是银行。",
    "exampleMeaning": "これは银行です。",
    "category": [
      "noun"
    ],
    "etymology": "「银」（金（钅）：かねへん）＋「行」（行：ぎょうがまえ）。銀行を表す。",
    "mnemonic": "「YNHNG」＝银（かねへん）＋行（ぎょうがまえ）→「銀行」で覚える。"
  },
  {
    "id": 1050,
    "hanzi": "饮料",
    "pinyin": "yǐnliào",
    "meaning": "飲み物",
    "example": "这是饮料。",
    "exampleMeaning": "これは饮料です。",
    "category": [
      "noun"
    ],
    "etymology": "「饮」（食（饣）：しょくへん）＋「料」（斗：ます）。飲み物を表す。",
    "mnemonic": "「YNLIオ」＝饮（しょくへん）＋料（ます）→「飲み物」で覚える。"
  },
  {
    "id": 1051,
    "hanzi": "应该",
    "pinyin": "yīnggāi",
    "meaning": "〜すべきだ、〜のはずだ",
    "example": "这是应该。",
    "exampleMeaning": "これは应该です。",
    "category": [
      "noun"
    ],
    "etymology": "「应」（广：まだれ）＋「该」（言（讠）：ごんべん）。〜すべきだ、〜のはずだを表す。",
    "mnemonic": "「YNGGI」＝应（まだれ）＋该（ごんべん）→「〜すべきだ、〜のはずだ」で覚える。"
  },
  {
    "id": 1052,
    "hanzi": "影响",
    "pinyin": "yǐngxiǎng",
    "meaning": "影響",
    "example": "这是影响。",
    "exampleMeaning": "これは影响です。",
    "category": [
      "noun"
    ],
    "etymology": "「影」（彡：さんづくり）＋「响」（口：くちへん）。影響を表す。",
    "mnemonic": "「YNGXING」＝影（さんづくり）＋响（くちへん）→「影響」で覚える。"
  },
  {
    "id": 1053,
    "hanzi": "用",
    "pinyin": "yòng",
    "meaning": "使う",
    "example": "我用了。",
    "exampleMeaning": "私は用ました。",
    "category": [
      "verb"
    ],
    "etymology": "「用」（用：もちいる）。使うを表す。",
    "mnemonic": "「YNG」＝用（もちいる）→「使う」で覚える。"
  },
  {
    "id": 1054,
    "hanzi": "游戏",
    "pinyin": "yóuxì",
    "meaning": "ゲーム",
    "example": "这是游戏。",
    "exampleMeaning": "これは游戏です。",
    "category": [
      "noun"
    ],
    "etymology": "「游」（水（氵）：さんずい）＋「戏」（戈：ほこづくり）。ゲームを表す。",
    "mnemonic": "「YUX」＝游（さんずい）＋戏（ほこづくり）→「ゲーム」で覚える。"
  },
  {
    "id": 1055,
    "hanzi": "有名",
    "pinyin": "yǒumíng",
    "meaning": "有名な",
    "example": "这很有名。",
    "exampleMeaning": "これはとても有名です。",
    "category": [
      "adjective"
    ],
    "etymology": "「有」（月：つきへん）＋「名」（口：くち）。有名なを表す。",
    "mnemonic": "「YUMNG」＝有（つきへん）＋名（くち）→「有名な」で覚える。"
  },
  {
    "id": 1056,
    "hanzi": "又",
    "pinyin": "yòu",
    "meaning": "もう一度、また",
    "example": "他又来了。",
    "exampleMeaning": "彼は又来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「又」（又：また）。もう一度、またを表す。",
    "mnemonic": "「YU」＝又（また）→「もう一度、また」で覚える。"
  },
  {
    "id": 1057,
    "hanzi": "遇到",
    "pinyin": "yùdào",
    "meaning": "出会う、遭遇する",
    "example": "我遇到了。",
    "exampleMeaning": "私は遇到ました。",
    "category": [
      "verb"
    ],
    "etymology": "「遇」（辶：しんにょう）＋「到」（刀（刂）：りっとう）。出会う、遭遇するを表す。",
    "mnemonic": "「YDオ」＝遇（しんにょう）＋到（りっとう）→「出会う、遭遇する」で覚える。"
  },
  {
    "id": 1058,
    "hanzi": "元",
    "pinyin": "yuán",
    "meaning": "元（中国の通貨単位）",
    "example": "这是元。",
    "exampleMeaning": "これは元です。",
    "category": [
      "noun"
    ],
    "etymology": "「元」（儿：にんにょう）。元（中国の通貨単位）を表す。",
    "mnemonic": "「ギョN」＝元（にんにょう）→「元（中国の通貨単位）」で覚える。"
  },
  {
    "id": 1059,
    "hanzi": "愿意",
    "pinyin": "yuànyì",
    "meaning": "〜したいと思う、望む",
    "example": "我愿意了。",
    "exampleMeaning": "私は愿意ました。",
    "category": [
      "verb"
    ],
    "etymology": "「愿」（心：こころ）＋「意」（心：こころ）。〜したいと思う、望むを表す。",
    "mnemonic": "「ギョNY」＝愿（こころ）＋意（こころ）→「〜したいと思う、望む」で覚える。"
  },
  {
    "id": 1060,
    "hanzi": "月亮",
    "pinyin": "yuèliang",
    "meaning": "月",
    "example": "这是月亮。",
    "exampleMeaning": "これは月亮です。",
    "category": [
      "noun"
    ],
    "etymology": "「月」（月：つき）＋「亮」（亠：なべぶた）。月を表す。",
    "mnemonic": "「ギョリョウ」＝月（つき）＋亮（なべぶた）→「月」で覚える。"
  },
  {
    "id": 1061,
    "hanzi": "越",
    "pinyin": "yuè",
    "meaning": "〜すればするほど、超える",
    "example": "我越了。",
    "exampleMeaning": "私は越ました。",
    "category": [
      "verb"
    ],
    "etymology": "「越」（走：そうにょう）。〜すればするほど、超えるを表す。",
    "mnemonic": "「ギョ」＝越（そうにょう）→「〜すればするほど、超える」で覚える。"
  },
  {
    "id": 1062,
    "hanzi": "站",
    "pinyin": "zhàn",
    "meaning": "駅",
    "example": "这是站。",
    "exampleMeaning": "これは站です。",
    "category": [
      "noun"
    ],
    "etymology": "「站」（立：たつへん）。駅を表す。",
    "mnemonic": "「ZHN」＝站（たつへん）→「駅」で覚える。"
  },
  {
    "id": 1063,
    "hanzi": "张",
    "pinyin": "zhāng",
    "meaning": "〜枚（平たいものを数える量詞）",
    "example": "一张。",
    "exampleMeaning": "1张。",
    "category": [
      "measure"
    ],
    "etymology": "「张」（弓：ゆみへん）。〜枚（平たいものを数える量詞）を表す。",
    "mnemonic": "「ZHNG」＝张（ゆみへん）→「〜枚（平たいものを数える量詞）」で覚える。"
  },
  {
    "id": 1064,
    "hanzi": "长(动词)",
    "pinyin": "zhǎng",
    "meaning": "育つ、成長する",
    "example": "这是长(动词)。",
    "exampleMeaning": "これは长(动词)です。",
    "category": [
      "noun"
    ],
    "etymology": "「长」（長（长）：ながい）＋「(」（(：かっこ）＋「动」（力：ちから）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。育つ、成長するを表す。",
    "mnemonic": "「ZHNG」＝长（ながい）＋(（かっこ）＋动（ちから）＋词（ごんべん）＋)（かっこ）→「育つ、成長する」で覚える。"
  },
  {
    "id": 1065,
    "hanzi": "着急",
    "pinyin": "zháojí",
    "meaning": "焦る、心配する",
    "example": "我着急了。",
    "exampleMeaning": "私は着急ました。",
    "category": [
      "verb"
    ],
    "etymology": "「着」（目：め）＋「急」（心：こころ）。焦る、心配するを表す。",
    "mnemonic": "「ZHOJ」＝着（め）＋急（こころ）→「焦る、心配する」で覚える。"
  },
  {
    "id": 1066,
    "hanzi": "照片",
    "pinyin": "zhàopiàn",
    "meaning": "写真",
    "example": "这是照片。",
    "exampleMeaning": "これは照片です。",
    "category": [
      "noun"
    ],
    "etymology": "「照」（火（灬）：れっか）＋「片」（片：かた）。写真を表す。",
    "mnemonic": "「ZHOPIN」＝照（れっか）＋片（かた）→「写真」で覚える。"
  },
  {
    "id": 1067,
    "hanzi": "照相机",
    "pinyin": "zhàoxiàngjī",
    "meaning": "カメラ",
    "example": "这是照相机。",
    "exampleMeaning": "これは照相机です。",
    "category": [
      "noun"
    ],
    "etymology": "「照」（火（灬）：れっか）＋「相」（目：め）＋「机」（木：きへん）。カメラを表す。",
    "mnemonic": "「ZHOXINGJ」＝照（れっか）＋相（め）＋机（きへん）→「カメラ」で覚える。"
  },
  {
    "id": 1068,
    "hanzi": "只(副词)",
    "pinyin": "zhǐ",
    "meaning": "だけ、ただ",
    "example": "他只(副词)来了。",
    "exampleMeaning": "彼は只(副词)来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「只」（口：くち）＋「(」（(：かっこ）＋「副」（刀（刂）：りっとう）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。だけ、ただを表す。",
    "mnemonic": "「ZH」＝只（くち）＋(（かっこ）＋副（りっとう）＋词（ごんべん）＋)（かっこ）→「だけ、ただ」で覚える。"
  },
  {
    "id": 1069,
    "hanzi": "只(量词)",
    "pinyin": "zhǐ",
    "meaning": "一人の、独身の",
    "example": "这是只(量词)。",
    "exampleMeaning": "これは只(量词)です。",
    "category": [
      "noun"
    ],
    "etymology": "「只」（口：くち）＋「(」（(：かっこ）＋「量」（里：さと）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。一人の、独身のを表す。",
    "mnemonic": "「ZH」＝只（くち）＋(（かっこ）＋量（さと）＋词（ごんべん）＋)（かっこ）→「一人の、独身の」で覚える。"
  },
  {
    "id": 1070,
    "hanzi": "只有…才…",
    "pinyin": "zhǐyǒu…cái…",
    "meaning": "〜してこそ〜だ（条件）",
    "example": "他只有…才…来了。",
    "exampleMeaning": "彼は只有…才…来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「只」（口：くち）＋「有」（月：つきへん）＋「…」（…：てんてん）＋「才」（手（扌）：てへん）＋「…」（…：てんてん）。〜してこそ〜だ（条件）を表す。",
    "mnemonic": "「ZHYUCI」＝只（くち）＋有（つきへん）＋…（てんてん）＋才（てへん）＋…（てんてん）→「〜してこそ〜だ（条件）」で覚える。"
  },
  {
    "id": 1071,
    "hanzi": "中间",
    "pinyin": "zhōngjiān",
    "meaning": "〜の間、中間",
    "example": "他中间我来了。",
    "exampleMeaning": "彼は私中间来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「中」（丨：たてぼう）＋「间」（門（门）：もんがまえ）。〜の間、中間を表す。",
    "mnemonic": "「ZHNGJIN」＝中（たてぼう）＋间（もんがまえ）→「〜の間、中間」で覚える。"
  },
  {
    "id": 1072,
    "hanzi": "中文",
    "pinyin": "zhōngwén",
    "meaning": "中国語（書き言葉）",
    "example": "这是中文。",
    "exampleMeaning": "これは中文です。",
    "category": [
      "noun"
    ],
    "etymology": "「中」（丨：たてぼう）＋「文」（文：ぶん）。中国語（書き言葉）を表す。",
    "mnemonic": "「ZHNGWN」＝中（たてぼう）＋文（ぶん）→「中国語（書き言葉）」で覚える。"
  },
  {
    "id": 1073,
    "hanzi": "终于",
    "pinyin": "zhōngyú",
    "meaning": "ついに、とうとう",
    "example": "他终于我来了。",
    "exampleMeaning": "彼は私终于来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「终」（糸（纟）：いとへん）＋「于」（一：いち）。ついに、とうとうを表す。",
    "mnemonic": "「ZHNGY」＝终（いとへん）＋于（いち）→「ついに、とうとう」で覚える。"
  },
  {
    "id": 1074,
    "hanzi": "种(量词)",
    "pinyin": "zhǒng",
    "meaning": "親切な、種類",
    "example": "这很种(量词)。",
    "exampleMeaning": "これはとても种(量词)です。",
    "category": [
      "adjective"
    ],
    "etymology": "「种」（禾：のぎへん）＋「(」（(：かっこ）＋「量」（里：さと）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。親切な、種類を表す。",
    "mnemonic": "「ZHNG」＝种（のぎへん）＋(（かっこ）＋量（さと）＋词（ごんべん）＋)（かっこ）→「親切な、種類」で覚える。"
  },
  {
    "id": 1075,
    "hanzi": "重要",
    "pinyin": "zhòngyào",
    "meaning": "重要な",
    "example": "这很重要。",
    "exampleMeaning": "これはとても重要です。",
    "category": [
      "adjective"
    ],
    "etymology": "「重」（里：さと）＋「要」（襾：にし）。重要なを表す。",
    "mnemonic": "「ZHNGYオ」＝重（さと）＋要（にし）→「重要な」で覚える。"
  },
  {
    "id": 1076,
    "hanzi": "周末",
    "pinyin": "zhōumò",
    "meaning": "週末",
    "example": "这是周末。",
    "exampleMeaning": "これは周末です。",
    "category": [
      "noun"
    ],
    "etymology": "「周」（口：くち）＋「末」（木：き）。週末を表す。",
    "mnemonic": "「ZHUM」＝周（くち）＋末（き）→「週末」で覚える。"
  },
  {
    "id": 1077,
    "hanzi": "主要",
    "pinyin": "zhǔyào",
    "meaning": "主な、メインの",
    "example": "这很主要。",
    "exampleMeaning": "これはとても主要です。",
    "category": [
      "adjective"
    ],
    "etymology": "「主」（丶：てん）＋「要」（襾：にし）。主な、メインのを表す。",
    "mnemonic": "「ZHYオ」＝主（てん）＋要（にし）→「主な、メインの」で覚える。"
  },
  {
    "id": 1078,
    "hanzi": "注意",
    "pinyin": "zhùyì",
    "meaning": "注意する、気をつける",
    "example": "我注意了。",
    "exampleMeaning": "私は注意ました。",
    "category": [
      "verb"
    ],
    "etymology": "「注」（水（氵）：さんずい）＋「意」（心：こころ）。注意する、気をつけるを表す。",
    "mnemonic": "「ZHY」＝注（さんずい）＋意（こころ）→「注意する、気をつける」で覚える。"
  },
  {
    "id": 1079,
    "hanzi": "自行车",
    "pinyin": "zìxíngchē",
    "meaning": "自転車",
    "example": "这是自行车。",
    "exampleMeaning": "これは自行车です。",
    "category": [
      "noun"
    ],
    "etymology": "「自」（自：みずから）＋「行」（行：ぎょうがまえ）＋「车」（車（车）：くるま）。自転車を表す。",
    "mnemonic": "「ZXNGCH」＝自（みずから）＋行（ぎょうがまえ）＋车（くるま）→「自転車」で覚える。"
  },
  {
    "id": 1080,
    "hanzi": "总是",
    "pinyin": "zǒngshì",
    "meaning": "いつも",
    "example": "他总是来了。",
    "exampleMeaning": "彼は总是来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「总」（心：こころ）＋「是」（日：ひへん）。いつもを表す。",
    "mnemonic": "「ZNGSH」＝总（こころ）＋是（ひへん）→「いつも」で覚える。"
  },
  {
    "id": 1081,
    "hanzi": "嘴",
    "pinyin": "zuǐ",
    "meaning": "口",
    "example": "这是嘴。",
    "exampleMeaning": "これは嘴です。",
    "category": [
      "noun"
    ],
    "etymology": "「嘴」（口：くちへん）。口を表す。",
    "mnemonic": "「ソ」＝嘴（くちへん）→「口」で覚える。"
  },
  {
    "id": 1082,
    "hanzi": "最后",
    "pinyin": "zuìhòu",
    "meaning": "最終の",
    "example": "这是最后。",
    "exampleMeaning": "これは最后です。",
    "category": [
      "noun"
    ],
    "etymology": "「最」（曰：いわく）＋「后」（口：くち）。最終のを表す。",
    "mnemonic": "「ソHU」＝最（いわく）＋后（くち）→「最終の」で覚える。"
  },
  {
    "id": 1083,
    "hanzi": "作业",
    "pinyin": "zuòyè",
    "meaning": "宿題",
    "example": "这是作业。",
    "exampleMeaning": "これは作业です。",
    "category": [
      "noun"
    ],
    "etymology": "「作」（人（亻）：にんべん）＋「业」（一：いち）。宿題を表す。",
    "mnemonic": "「ソY」＝作（にんべん）＋业（いち）→「宿題」で覚える。"
  },
  {
    "id": 1084,
    "hanzi": "遍",
    "pinyin": "biàn",
    "meaning": "〜回、〜遍（動作の回数）",
    "example": "这是遍。",
    "exampleMeaning": "これは遍です。",
    "category": [
      "noun"
    ],
    "etymology": "「遍」（辶：しんにょう）。〜回、〜遍（動作の回数）を表す。",
    "mnemonic": "「ヒN」＝遍（しんにょう）→「〜回、〜遍（動作の回数）」で覚える。"
  },
  {
    "id": 1085,
    "hanzi": "长江",
    "pinyin": "chángjiāng",
    "meaning": "長江（揚子江）",
    "example": "这是长江。",
    "exampleMeaning": "これは长江です。",
    "category": [
      "noun"
    ],
    "etymology": "「长」（長（长）：ながい）＋「江」（水（氵）：さんずい）。長江（揚子江）を表す。",
    "mnemonic": "「CHNGJING」＝长（ながい）＋江（さんずい）→「長江（揚子江）」で覚える。"
  },
  {
    "id": 1086,
    "hanzi": "成为",
    "pinyin": "chéngwéi",
    "meaning": "〜になる、〜となる",
    "example": "我成为了。",
    "exampleMeaning": "私は成为ました。",
    "category": [
      "verb"
    ],
    "etymology": "「成」（戈：ほこづくり）＋「为」（丶：てん）。〜になる、〜となるを表す。",
    "mnemonic": "「CHNGWI」＝成（ほこづくり）＋为（てん）→「〜になる、〜となる」で覚える。"
  },
  {
    "id": 1087,
    "hanzi": "吃惊",
    "pinyin": "chījīng",
    "meaning": "驚く、びっくりする",
    "example": "我吃惊了。",
    "exampleMeaning": "私は吃惊ました。",
    "category": [
      "verb"
    ],
    "etymology": "「吃」（口：くちへん）＋「惊」（心（忄）：りっしんべん）。驚く、びっくりするを表す。",
    "mnemonic": "「CHJNG」＝吃（くちへん）＋惊（りっしんべん）→「驚く、びっくりする」で覚える。"
  },
  {
    "id": 1088,
    "hanzi": "出现",
    "pinyin": "chūxiàn",
    "meaning": "現れる、出現する",
    "example": "我出现了。",
    "exampleMeaning": "私は出现ました。",
    "category": [
      "verb"
    ],
    "etymology": "「出」（凵：うけばこ）＋「现」（玉（王）：たまへん）。現れる、出現するを表す。",
    "mnemonic": "「CHセキN」＝出（うけばこ）＋现（たまへん）→「現れる、出現する」で覚える。"
  },
  {
    "id": 1089,
    "hanzi": "厨房",
    "pinyin": "chúfáng",
    "meaning": "キッチン、台所",
    "example": "这是厨房。",
    "exampleMeaning": "これは厨房です。",
    "category": [
      "noun"
    ],
    "etymology": "「厨」（厂：がんだれ）＋「房」（戶（户）：とだれ）。キッチン、台所を表す。",
    "mnemonic": "「CHFNG」＝厨（がんだれ）＋房（とだれ）→「キッチン、台所」で覚える。"
  },
  {
    "id": 1090,
    "hanzi": "词语",
    "pinyin": "cíyǔ",
    "meaning": "単語",
    "example": "这是词语。",
    "exampleMeaning": "これは词语です。",
    "category": [
      "noun"
    ],
    "etymology": "「词」（言（讠）：ごんべん）＋「语」（言（讠）：ごんべん）。単語を表す。",
    "mnemonic": "「CY」＝词（ごんべん）＋语（ごんべん）→「単語」で覚える。"
  },
  {
    "id": 1091,
    "hanzi": "错误",
    "pinyin": "cuòwù",
    "meaning": "間違い、エラー",
    "example": "这是错误。",
    "exampleMeaning": "これは错误です。",
    "category": [
      "noun"
    ],
    "etymology": "「错」（金（钅）：かねへん）＋「误」（言（讠）：ごんべん）。間違い、エラーを表す。",
    "mnemonic": "「ソクW」＝错（かねへん）＋误（ごんべん）→「間違い、エラー」で覚える。"
  },
  {
    "id": 1092,
    "hanzi": "打招呼",
    "pinyin": "dǎzhāohu",
    "meaning": "挨拶する、声をかける",
    "example": "我打招呼了。",
    "exampleMeaning": "私は打招呼ました。",
    "category": [
      "verb"
    ],
    "etymology": "「打」（手（扌）：てへん）＋「招」（手（扌）：てへん）＋「呼」（口：くちへん）。挨拶する、声をかけるを表す。",
    "mnemonic": "「DZHOHU」＝打（てへん）＋招（てへん）＋呼（くちへん）→「挨拶する、声をかける」で覚える。"
  },
  {
    "id": 1093,
    "hanzi": "打折",
    "pinyin": "dǎzhé",
    "meaning": "割引する",
    "example": "我打折了。",
    "exampleMeaning": "私は打折ました。",
    "category": [
      "verb"
    ],
    "etymology": "「打」（手（扌）：てへん）＋「折」（手（扌）：てへん）。割引するを表す。",
    "mnemonic": "「DZH」＝打（てへん）＋折（てへん）→「割引する」で覚える。"
  },
  {
    "id": 1094,
    "hanzi": "打针",
    "pinyin": "dǎzhēn",
    "meaning": "注射をする",
    "example": "我打针了。",
    "exampleMeaning": "私は打针ました。",
    "category": [
      "verb"
    ],
    "etymology": "「打」（手（扌）：てへん）＋「针」（金（钅）：かねへん）。注射をするを表す。",
    "mnemonic": "「DZHN」＝打（てへん）＋针（かねへん）→「注射をする」で覚える。"
  },
  {
    "id": 1095,
    "hanzi": "大约",
    "pinyin": "dàyuē",
    "meaning": "およそ、約",
    "example": "他大约来了。",
    "exampleMeaning": "彼は大约来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「大」（大：だい）＋「约」（糸（纟）：いとへん）。およそ、約を表す。",
    "mnemonic": "「Dギョ」＝大（だい）＋约（いとへん）→「およそ、約」で覚える。"
  },
  {
    "id": 1096,
    "hanzi": "大夫",
    "pinyin": "dàifu",
    "meaning": "医者",
    "example": "这是大夫。",
    "exampleMeaning": "これは大夫です。",
    "category": [
      "noun"
    ],
    "etymology": "「大」（大：だい）＋「夫」（大：だい）。医者を表す。",
    "mnemonic": "「DIFU」＝大（だい）＋夫（だい）→「医者」で覚える。"
  },
  {
    "id": 1097,
    "hanzi": "戴",
    "pinyin": "dài",
    "meaning": "身につける（帽子・メガネ・アクセサリーなど）",
    "example": "我戴了。",
    "exampleMeaning": "私は戴ました。",
    "category": [
      "verb"
    ],
    "etymology": "「戴」（戈：ほこづくり）。身につける（帽子・メガネ・アクセサリーなど）を表す。",
    "mnemonic": "「DI」＝戴（ほこづくり）→「身につける（帽子・メガネ・アクセサリーなど）」で覚える。"
  },
  {
    "id": 1098,
    "hanzi": "当时",
    "pinyin": "dāngshí",
    "meaning": "それから",
    "example": "他当时来了。",
    "exampleMeaning": "彼は当时来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「当」（彐：けいがしら）＋「时」（日：ひへん）。それからを表す。",
    "mnemonic": "「DNGSH」＝当（けいがしら）＋时（ひへん）→「それから」で覚える。"
  },
  {
    "id": 1099,
    "hanzi": "导游",
    "pinyin": "dǎoyóu",
    "meaning": "ツアーガイド",
    "example": "这是导游。",
    "exampleMeaning": "これは导游です。",
    "category": [
      "noun"
    ],
    "etymology": "「导」（寸：すん）＋「游」（水（氵）：さんずい）。ツアーガイドを表す。",
    "mnemonic": "「DOYU」＝导（すん）＋游（さんずい）→「ツアーガイド」で覚える。"
  },
  {
    "id": 1100,
    "hanzi": "倒",
    "pinyin": "dào",
    "meaning": "逆に、後退する",
    "example": "我倒了。",
    "exampleMeaning": "私は倒ました。",
    "category": [
      "verb"
    ],
    "etymology": "「倒」（人（亻）：にんべん）。逆に、後退するを表す。",
    "mnemonic": "「Dオ」＝倒（にんべん）→「逆に、後退する」で覚える。"
  },
  {
    "id": 1101,
    "hanzi": "得(助动词)",
    "pinyin": "dé",
    "meaning": "〜しなければならない",
    "example": "我得(助动词)了。",
    "exampleMeaning": "私は得(助动词)ました。",
    "category": [
      "verb"
    ],
    "etymology": "「得」（彳：ぎょうにんべん）＋「(」（(：かっこ）＋「助」（力：ちから）＋「动」（力：ちから）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。〜しなければならないを表す。",
    "mnemonic": "「D」＝得（ぎょうにんべん）＋(（かっこ）＋助（ちから）＋动（ちから）＋词（ごんべん）＋)（かっこ）→「〜しなければならない」で覚える。"
  },
  {
    "id": 1102,
    "hanzi": "得意",
    "pinyin": "déyì",
    "meaning": "得意げである、鼻が高い",
    "example": "这是得意。",
    "exampleMeaning": "これは得意です。",
    "category": [
      "noun"
    ],
    "etymology": "「得」（彳：ぎょうにんべん）＋「意」（心：こころ）。得意げである、鼻が高いを表す。",
    "mnemonic": "「DY」＝得（ぎょうにんべん）＋意（こころ）→「得意げである、鼻が高い」で覚える。"
  },
  {
    "id": 1103,
    "hanzi": "登机牌",
    "pinyin": "dēngjīpái",
    "meaning": "搭乗券",
    "example": "这是登机牌。",
    "exampleMeaning": "これは登机牌です。",
    "category": [
      "noun"
    ],
    "etymology": "「登」（癶：はつがしら）＋「机」（木：きへん）＋「牌」（片：かたへん）。搭乗券を表す。",
    "mnemonic": "「DNGJPI」＝登（はつがしら）＋机（きへん）＋牌（かたへん）→「搭乗券」で覚える。"
  },
  {
    "id": 1104,
    "hanzi": "等(助词)",
    "pinyin": "děng",
    "meaning": "〜など（列挙の助詞）",
    "example": "这是等(助词)。",
    "exampleMeaning": "これは等(助词)です。",
    "category": [
      "noun"
    ],
    "etymology": "「等」（竹（⺮）：たけかんむり）＋「(」（(：かっこ）＋「助」（力：ちから）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。〜など（列挙の助詞）を表す。",
    "mnemonic": "「DNG」＝等（たけかんむり）＋(（かっこ）＋助（ちから）＋词（ごんべん）＋)（かっこ）→「〜など（列挙の助詞）」で覚える。"
  },
  {
    "id": 1105,
    "hanzi": "底",
    "pinyin": "dǐ",
    "meaning": "底、背景",
    "example": "这是底。",
    "exampleMeaning": "これは底です。",
    "category": [
      "noun"
    ],
    "etymology": "「底」（广：まだれ）。底、背景を表す。",
    "mnemonic": "「D」＝底（まだれ）→「底、背景」で覚える。"
  },
  {
    "id": 1106,
    "hanzi": "地点",
    "pinyin": "dìdiǎn",
    "meaning": "場所、置く",
    "example": "这是地点。",
    "exampleMeaning": "これは地点です。",
    "category": [
      "noun"
    ],
    "etymology": "「地」（土：つちへん）＋「点」（火（灬）：れっか）。場所、置くを表す。",
    "mnemonic": "「DテキN」＝地（つちへん）＋点（れっか）→「場所、置く」で覚える。"
  },
  {
    "id": 1107,
    "hanzi": "掉",
    "pinyin": "diào",
    "meaning": "落ちる、落とす",
    "example": "我掉了。",
    "exampleMeaning": "私は掉ました。",
    "category": [
      "verb"
    ],
    "etymology": "「掉」（手（扌）：てへん）。落ちる、落とすを表す。",
    "mnemonic": "「テキオ」＝掉（てへん）→「落ちる、落とす」で覚える。"
  },
  {
    "id": 1108,
    "hanzi": "对面",
    "pinyin": "duìmiàn",
    "meaning": "反対",
    "example": "这是对面。",
    "exampleMeaning": "これは对面です。",
    "category": [
      "noun"
    ],
    "etymology": "「对」（寸：すん）＋「面」（面：めん）。反対を表す。",
    "mnemonic": "「トクミN」＝对（すん）＋面（めん）→「反対」で覚える。"
  },
  {
    "id": 1109,
    "hanzi": "而",
    "pinyin": "ér",
    "meaning": "しかし、〜でありながら",
    "example": "我喜欢茶，而也喜欢咖啡。",
    "exampleMeaning": "私はお茶が好きで、而コーヒーも好きです。",
    "category": [
      "conjunction"
    ],
    "etymology": "「而」（而：しこうして）。しかし、〜でありながらを表す。",
    "mnemonic": "「R」＝而（しこうして）→「しかし、〜でありながら」で覚える。"
  },
  {
    "id": 1110,
    "hanzi": "发生",
    "pinyin": "fāshēng",
    "meaning": "発生する、起こる",
    "example": "我发生了。",
    "exampleMeaning": "私は发生ました。",
    "category": [
      "verb"
    ],
    "etymology": "「发」（又：また）＋「生」（生：うまれる）。発生する、起こるを表す。",
    "mnemonic": "「FSHNG」＝发（また）＋生（うまれる）→「発生する、起こる」で覚える。"
  },
  {
    "id": 1111,
    "hanzi": "发展",
    "pinyin": "fāzhǎn",
    "meaning": "発展、発展する",
    "example": "这是发展。",
    "exampleMeaning": "これは发展です。",
    "category": [
      "noun"
    ],
    "etymology": "「发」（又：また）＋「展」（尸：しかばね）。発展、発展するを表す。",
    "mnemonic": "「FZHN」＝发（また）＋展（しかばね）→「発展、発展する」で覚える。"
  },
  {
    "id": 1112,
    "hanzi": "房东",
    "pinyin": "fángdōng",
    "meaning": "大家、家主",
    "example": "这是房东。",
    "exampleMeaning": "これは房东です。",
    "category": [
      "noun"
    ],
    "etymology": "「房」（戶（户）：とだれ）＋「东」（木：き）。大家、家主を表す。",
    "mnemonic": "「FNGDNG」＝房（とだれ）＋东（き）→「大家、家主」で覚える。"
  },
  {
    "id": 1113,
    "hanzi": "放暑假",
    "pinyin": "fàngshǔjià",
    "meaning": "夏休みを取る",
    "example": "我放暑假了。",
    "exampleMeaning": "私は放暑假ました。",
    "category": [
      "verb"
    ],
    "etymology": "「放」（攵：のぶん）＋「暑」（日：ひ）＋「假」（人（亻）：にんべん）。夏休みを取るを表す。",
    "mnemonic": "「FNGSHキ」＝放（のぶん）＋暑（ひ）＋假（にんべん）→「夏休みを取る」で覚える。"
  },
  {
    "id": 1114,
    "hanzi": "放松",
    "pinyin": "fàngsōng",
    "meaning": "リラックスする、緩める",
    "example": "我放松了。",
    "exampleMeaning": "私は放松ました。",
    "category": [
      "verb"
    ],
    "etymology": "「放」（攵：のぶん）＋「松」（木：きへん）。リラックスする、緩めるを表す。",
    "mnemonic": "「FNGSNG」＝放（のぶん）＋松（きへん）→「リラックスする、緩める」で覚える。"
  },
  {
    "id": 1115,
    "hanzi": "付款",
    "pinyin": "fùkuǎn",
    "meaning": "払う",
    "example": "这是付款。",
    "exampleMeaning": "これは付款です。",
    "category": [
      "noun"
    ],
    "etymology": "「付」（人（亻）：にんべん）＋「款」（欠：あくび）。払うを表す。",
    "mnemonic": "「FコN」＝付（にんべん）＋款（あくび）→「払う」で覚える。"
  },
  {
    "id": 1116,
    "hanzi": "负责",
    "pinyin": "fùzé",
    "meaning": "責任を負う、担当する",
    "example": "我负责了。",
    "exampleMeaning": "私は负责ました。",
    "category": [
      "verb"
    ],
    "etymology": "「负」（貝（贝）：かい）＋「责」（貝（贝）：かい）。責任を負う、担当するを表す。",
    "mnemonic": "「FZ」＝负（かい）＋责（かい）→「責任を負う、担当する」で覚える。"
  },
  {
    "id": 1117,
    "hanzi": "改变",
    "pinyin": "gǎibiàn",
    "meaning": "変える、変化する",
    "example": "我改变了。",
    "exampleMeaning": "私は改变ました。",
    "category": [
      "verb"
    ],
    "etymology": "「改」（攵：のぶん）＋「变」（又：また）。変える、変化するを表す。",
    "mnemonic": "「GIBIN」＝改（のぶん）＋变（また）→「変える、変化する」で覚える。"
  },
  {
    "id": 1118,
    "hanzi": "干杯",
    "pinyin": "gānbēi",
    "meaning": "乾杯する",
    "example": "我干杯了。",
    "exampleMeaning": "私は干杯ました。",
    "category": [
      "verb"
    ],
    "etymology": "「干」（一：いち）＋「杯」（木：きへん）。乾杯するを表す。",
    "mnemonic": "「GNBI」＝干（いち）＋杯（きへん）→「乾杯する」で覚える。"
  },
  {
    "id": 1119,
    "hanzi": "赶",
    "pinyin": "gǎn",
    "meaning": "追いつく、急ぐ",
    "example": "我赶了。",
    "exampleMeaning": "私は赶ました。",
    "category": [
      "verb"
    ],
    "etymology": "「赶」（走：そうにょう）。追いつく、急ぐを表す。",
    "mnemonic": "「GN」＝赶（そうにょう）→「追いつく、急ぐ」で覚える。"
  },
  {
    "id": 1120,
    "hanzi": "胳膊",
    "pinyin": "gēbo",
    "meaning": "腕",
    "example": "这是胳膊。",
    "exampleMeaning": "これは胳膊です。",
    "category": [
      "noun"
    ],
    "etymology": "「胳」（月：にくづき）＋「膊」（月：にくづき）。腕を表す。",
    "mnemonic": "「Gハク」＝胳（にくづき）＋膊（にくづき）→「腕」で覚える。"
  },
  {
    "id": 1121,
    "hanzi": "公里",
    "pinyin": "gōnglǐ",
    "meaning": "キロメートル",
    "example": "这是公里。",
    "exampleMeaning": "これは公里です。",
    "category": [
      "noun"
    ],
    "etymology": "「公」（八：はち）＋「里」（里：さと）。キロメートルを表す。",
    "mnemonic": "「GNGL」＝公（はち）＋里（さと）→「キロメートル」で覚える。"
  },
  {
    "id": 1122,
    "hanzi": "功夫",
    "pinyin": "gōngfu",
    "meaning": "技能、スキル",
    "example": "这是功夫。",
    "exampleMeaning": "これは功夫です。",
    "category": [
      "noun"
    ],
    "etymology": "「功」（力：ちから）＋「夫」（大：だい）。技能、スキルを表す。",
    "mnemonic": "「GNGFU」＝功（ちから）＋夫（だい）→「技能、スキル」で覚える。"
  },
  {
    "id": 1123,
    "hanzi": "工资",
    "pinyin": "gōngzī",
    "meaning": "給料、賃金",
    "example": "这是工资。",
    "exampleMeaning": "これは工资です。",
    "category": [
      "noun"
    ],
    "etymology": "「工」（工：たくみ）＋「资」（貝（贝）：かい）。給料、賃金を表す。",
    "mnemonic": "「GNGZ」＝工（たくみ）＋资（かい）→「給料、賃金」で覚える。"
  },
  {
    "id": 1124,
    "hanzi": "顾客",
    "pinyin": "gùkè",
    "meaning": "お客様、顧客",
    "example": "这是顾客。",
    "exampleMeaning": "これは顾客です。",
    "category": [
      "noun"
    ],
    "etymology": "「顾」（頁（页）：おおがい）＋「客」（宀：うかんむり）。お客様、顧客を表す。",
    "mnemonic": "「GK」＝顾（おおがい）＋客（うかんむり）→「お客様、顧客」で覚える。"
  },
  {
    "id": 1125,
    "hanzi": "广播",
    "pinyin": "guǎngbō",
    "meaning": "放送、ラジオ放送",
    "example": "这是广播。",
    "exampleMeaning": "これは广播です。",
    "category": [
      "noun"
    ],
    "etymology": "「广」（广：まだれ）＋「播」（手（扌）：てへん）。放送、ラジオ放送を表す。",
    "mnemonic": "「コNGB」＝广（まだれ）＋播（てへん）→「放送、ラジオ放送」で覚える。"
  },
  {
    "id": 1126,
    "hanzi": "逛",
    "pinyin": "guàng",
    "meaning": "ぶらぶら歩く、散策する",
    "example": "我逛了。",
    "exampleMeaning": "私は逛ました。",
    "category": [
      "verb"
    ],
    "etymology": "「逛」（辶：しんにょう）。ぶらぶら歩く、散策するを表す。",
    "mnemonic": "「コNG」＝逛（しんにょう）→「ぶらぶら歩く、散策する」で覚える。"
  },
  {
    "id": 1127,
    "hanzi": "规定",
    "pinyin": "guīdìng",
    "meaning": "規定する、定める",
    "example": "我规定了。",
    "exampleMeaning": "私は规定ました。",
    "category": [
      "verb"
    ],
    "etymology": "「规」（見（见）：みる）＋「定」（宀：うかんむり）。規定する、定めるを表す。",
    "mnemonic": "「コDNG」＝规（みる）＋定（うかんむり）→「規定する、定める」で覚える。"
  },
  {
    "id": 1128,
    "hanzi": "国际",
    "pinyin": "guójì",
    "meaning": "国際的な",
    "example": "这很国际。",
    "exampleMeaning": "これはとても国际です。",
    "category": [
      "adjective"
    ],
    "etymology": "「国」（囗：くにがまえ）＋「际」（阜（阝）：こざとへん）。国際的なを表す。",
    "mnemonic": "「コJ」＝国（くにがまえ）＋际（こざとへん）→「国際的な」で覚える。"
  },
  {
    "id": 1129,
    "hanzi": "海洋",
    "pinyin": "hǎiyáng",
    "meaning": "海、大洋",
    "example": "这是海洋。",
    "exampleMeaning": "これは海洋です。",
    "category": [
      "noun"
    ],
    "etymology": "「海」（水（氵）：さんずい）＋「洋」（水（氵）：さんずい）。海、大洋を表す。",
    "mnemonic": "「HIYNG」＝海（さんずい）＋洋（さんずい）→「海、大洋」で覚える。"
  },
  {
    "id": 1130,
    "hanzi": "活动",
    "pinyin": "huódòng",
    "meaning": "活動する、イベント",
    "example": "我活动了。",
    "exampleMeaning": "私は活动ました。",
    "category": [
      "verb"
    ],
    "etymology": "「活」（水（氵）：さんずい）＋「动」（力：ちから）。活動する、イベントを表す。",
    "mnemonic": "「コDNG」＝活（さんずい）＋动（ちから）→「活動する、イベント」で覚える。"
  },
  {
    "id": 1131,
    "hanzi": "寄",
    "pinyin": "jì",
    "meaning": "住む",
    "example": "我寄了。",
    "exampleMeaning": "私は寄ました。",
    "category": [
      "verb"
    ],
    "etymology": "「寄」（宀：うかんむり）。住むを表す。",
    "mnemonic": "「J」＝寄（うかんむり）→「住む」で覚える。"
  },
  {
    "id": 1132,
    "hanzi": "加班",
    "pinyin": "jiābān",
    "meaning": "残業する",
    "example": "我加班了。",
    "exampleMeaning": "私は加班ました。",
    "category": [
      "verb"
    ],
    "etymology": "「加」（力：ちから）＋「班」（玉（王）：たまへん）。残業するを表す。",
    "mnemonic": "「キBN」＝加（ちから）＋班（たまへん）→「残業する」で覚える。"
  },
  {
    "id": 1133,
    "hanzi": "加油站",
    "pinyin": "jiāyóuzhàn",
    "meaning": "ガソリンスタンド",
    "example": "这是加油站。",
    "exampleMeaning": "これは加油站です。",
    "category": [
      "noun"
    ],
    "etymology": "「加」（力：ちから）＋「油」（水（氵）：さんずい）＋「站」（立：たつへん）。ガソリンスタンドを表す。",
    "mnemonic": "「キYUZHN」＝加（ちから）＋油（さんずい）＋站（たつへん）→「ガソリンスタンド」で覚える。"
  },
  {
    "id": 1134,
    "hanzi": "降落",
    "pinyin": "jiàngluò",
    "meaning": "着陸する、降下する",
    "example": "我降落了。",
    "exampleMeaning": "私は降落ました。",
    "category": [
      "verb"
    ],
    "etymology": "「降」（阜（阝）：こざとへん）＋「落」（艹：くさかんむり）。着陸する、降下するを表す。",
    "mnemonic": "「キNGLU」＝降（こざとへん）＋落（くさかんむり）→「着陸する、降下する」で覚える。"
  },
  {
    "id": 1135,
    "hanzi": "交",
    "pinyin": "jiāo",
    "meaning": "渡す、提出する",
    "example": "我交了。",
    "exampleMeaning": "私は交ました。",
    "category": [
      "verb"
    ],
    "etymology": "「交」（亠：なべぶた）。渡す、提出するを表す。",
    "mnemonic": "「キオ」＝交（なべぶた）→「渡す、提出する」で覚える。"
  },
  {
    "id": 1136,
    "hanzi": "交流",
    "pinyin": "jiāoliú",
    "meaning": "交流する、コミュニケーション",
    "example": "这是交流。",
    "exampleMeaning": "これは交流です。",
    "category": [
      "noun"
    ],
    "etymology": "「交」（亠：なべぶた）＋「流」（水（氵）：さんずい）。交流する、コミュニケーションを表す。",
    "mnemonic": "「キOLI」＝交（なべぶた）＋流（さんずい）→「交流する、コミュニケーション」で覚える。"
  },
  {
    "id": 1137,
    "hanzi": "接着",
    "pinyin": "jiēzhe",
    "meaning": "続けて〜する、〜した後で",
    "example": "我接着了。",
    "exampleMeaning": "私は接着ました。",
    "category": [
      "verb"
    ],
    "etymology": "「接」（手（扌）：てへん）＋「着」（目：め）。続けて〜する、〜した後でを表す。",
    "mnemonic": "「キシャ」＝接（てへん）＋着（め）→「続けて〜する、〜した後で」で覚える。"
  },
  {
    "id": 1138,
    "hanzi": "节",
    "pinyin": "jié",
    "meaning": "〜節（祝日・祭日）",
    "example": "这是节。",
    "exampleMeaning": "これは节です。",
    "category": [
      "noun"
    ],
    "etymology": "「节」（艹：くさかんむり）。〜節（祝日・祭日）を表す。",
    "mnemonic": "「キ」＝节（くさかんむり）→「〜節（祝日・祭日）」で覚える。"
  },
  {
    "id": 1139,
    "hanzi": "节约",
    "pinyin": "jiéyuē",
    "meaning": "節約する",
    "example": "我节约了。",
    "exampleMeaning": "私は节约ました。",
    "category": [
      "verb"
    ],
    "etymology": "「节」（艹：くさかんむり）＋「约」（糸（纟）：いとへん）。節約するを表す。",
    "mnemonic": "「キギョ」＝节（くさかんむり）＋约（いとへん）→「節約する」で覚える。"
  },
  {
    "id": 1140,
    "hanzi": "京剧",
    "pinyin": "jīngjù",
    "meaning": "京劇",
    "example": "这是京剧。",
    "exampleMeaning": "これは京剧です。",
    "category": [
      "noun"
    ],
    "etymology": "「京」（亠：なべぶた）＋「剧」（刀（刂）：りっとう）。京劇を表す。",
    "mnemonic": "「JNGJ」＝京（なべぶた）＋剧（りっとう）→「京劇」で覚える。"
  },
  {
    "id": 1141,
    "hanzi": "精彩",
    "pinyin": "jīngcǎi",
    "meaning": "素晴らしい、見事な",
    "example": "这是精彩。",
    "exampleMeaning": "これは精彩です。",
    "category": [
      "noun"
    ],
    "etymology": "「精」（米：こめへん）＋「彩」（彡：さんづくり）。素晴らしい、見事なを表す。",
    "mnemonic": "「JNGCI」＝精（こめへん）＋彩（さんづくり）→「素晴らしい、見事な」で覚える。"
  },
  {
    "id": 1142,
    "hanzi": "经验",
    "pinyin": "jīngyàn",
    "meaning": "経験する",
    "example": "我经验了。",
    "exampleMeaning": "私は经验ました。",
    "category": [
      "verb"
    ],
    "etymology": "「经」（糸（纟）：いとへん）＋「验」（馬（马）：うまへん）。経験するを表す。",
    "mnemonic": "「JNGYN」＝经（いとへん）＋验（うまへん）→「経験する」で覚える。"
  },
  {
    "id": 1143,
    "hanzi": "景色",
    "pinyin": "jǐngsè",
    "meaning": "景色、風景",
    "example": "这是景色。",
    "exampleMeaning": "これは景色です。",
    "category": [
      "noun"
    ],
    "etymology": "「景」（日：ひへん）＋「色」（色：いろ）。景色、風景を表す。",
    "mnemonic": "「JNGS」＝景（ひへん）＋色（いろ）→「景色、風景」で覚える。"
  },
  {
    "id": 1144,
    "hanzi": "警察",
    "pinyin": "jǐngchá",
    "meaning": "警察",
    "example": "这是警察。",
    "exampleMeaning": "これは警察です。",
    "category": [
      "noun"
    ],
    "etymology": "「警」（言：げん）＋「察」（宀：うかんむり）。警察を表す。",
    "mnemonic": "「JNGCH」＝警（げん）＋察（うかんむり）→「警察」で覚える。"
  },
  {
    "id": 1145,
    "hanzi": "竞争",
    "pinyin": "jìngzhēng",
    "meaning": "競争する",
    "example": "我竞争了。",
    "exampleMeaning": "私は竞争ました。",
    "category": [
      "verb"
    ],
    "etymology": "「竞」（立：たつ）＋「争」（刀（⺈）：かたな）。競争するを表す。",
    "mnemonic": "「JNGZHNG」＝竞（たつ）＋争（かたな）→「競争する」で覚える。"
  },
  {
    "id": 1146,
    "hanzi": "举",
    "pinyin": "jǔ",
    "meaning": "持ち上げる",
    "example": "我举了。",
    "exampleMeaning": "私は举ました。",
    "category": [
      "verb"
    ],
    "etymology": "「举」（丶：てん）。持ち上げるを表す。",
    "mnemonic": "「J」＝举（てん）→「持ち上げる」で覚える。"
  },
  {
    "id": 1147,
    "hanzi": "举办",
    "pinyin": "jǔbàn",
    "meaning": "開催する、主催する",
    "example": "我举办了。",
    "exampleMeaning": "私は举办ました。",
    "category": [
      "verb"
    ],
    "etymology": "「举」（丶：てん）＋「办」（力：ちから）。開催する、主催するを表す。",
    "mnemonic": "「JBN」＝举（てん）＋办（ちから）→「開催する、主催する」で覚える。"
  },
  {
    "id": 1148,
    "hanzi": "举行",
    "pinyin": "jǔxíng",
    "meaning": "挙行する、行う",
    "example": "我举行了。",
    "exampleMeaning": "私は举行ました。",
    "category": [
      "verb"
    ],
    "etymology": "「举」（丶：てん）＋「行」（行：ぎょうがまえ）。挙行する、行うを表す。",
    "mnemonic": "「JXNG」＝举（てん）＋行（ぎょうがまえ）→「挙行する、行う」で覚える。"
  },
  {
    "id": 1149,
    "hanzi": "开玩笑",
    "pinyin": "kāiwánxiào",
    "meaning": "冗談を言う",
    "example": "我开玩笑了。",
    "exampleMeaning": "私は开玩笑ました。",
    "category": [
      "verb"
    ],
    "etymology": "「开」（廾：にじゅうあし）＋「玩」（玉（王）：たまへん）＋「笑」（竹（⺮）：たけかんむり）。冗談を言うを表す。",
    "mnemonic": "「KIWNXIオ」＝开（にじゅうあし）＋玩（たまへん）＋笑（たけかんむり）→「冗談を言う」で覚える。"
  },
  {
    "id": 1150,
    "hanzi": "棵",
    "pinyin": "kē",
    "meaning": "〜本（樹木・キャベツなどの植物を数える量詞）",
    "example": "一棵。",
    "exampleMeaning": "1棵。",
    "category": [
      "measure"
    ],
    "etymology": "「棵」（木：きへん）。〜本（樹木・キャベツなどの植物を数える量詞）を表す。",
    "mnemonic": "「K」＝棵（きへん）→「〜本（樹木・キャベツなどの植物を数える量詞）」で覚える。"
  },
  {
    "id": 1151,
    "hanzi": "科学",
    "pinyin": "kēxué",
    "meaning": "科学",
    "example": "这是科学。",
    "exampleMeaning": "これは科学です。",
    "category": [
      "noun"
    ],
    "etymology": "「科」（禾：のぎへん）＋「学」（子：こへん）。科学を表す。",
    "mnemonic": "「Kキョ」＝科（のぎへん）＋学（こへん）→「科学」で覚える。"
  },
  {
    "id": 1152,
    "hanzi": "咳嗽",
    "pinyin": "késou",
    "meaning": "咳をする",
    "example": "我咳嗽了。",
    "exampleMeaning": "私は咳嗽ました。",
    "category": [
      "verb"
    ],
    "etymology": "「咳」（口：くちへん）＋「嗽」（口：くちへん）。咳をするを表す。",
    "mnemonic": "「Kソウ」＝咳（くちへん）＋嗽（くちへん）→「咳をする」で覚える。"
  },
  {
    "id": 1153,
    "hanzi": "客厅",
    "pinyin": "kètīng",
    "meaning": "居間、リビング",
    "example": "这是客厅。",
    "exampleMeaning": "これは客厅です。",
    "category": [
      "noun"
    ],
    "etymology": "「客」（宀：うかんむり）＋「厅」（厂：がんだれ）。居間、リビングを表す。",
    "mnemonic": "「KTNG」＝客（うかんむり）＋厅（がんだれ）→「居間、リビング」で覚える。"
  },
  {
    "id": 1154,
    "hanzi": "拉",
    "pinyin": "lā",
    "meaning": "引っ張る",
    "example": "我拉了。",
    "exampleMeaning": "私は拉ました。",
    "category": [
      "verb"
    ],
    "etymology": "「拉」（手（扌）：てへん）。引っ張るを表す。",
    "mnemonic": "「L」＝拉（てへん）→「引っ張る」で覚える。"
  },
  {
    "id": 1155,
    "hanzi": "辣",
    "pinyin": "là",
    "meaning": "辛い",
    "example": "这很辣。",
    "exampleMeaning": "これはとても辣です。",
    "category": [
      "adjective"
    ],
    "etymology": "「辣」（辛：からい）。辛いを表す。",
    "mnemonic": "「L」＝辣（からい）→「辛い」で覚える。"
  },
  {
    "id": 1156,
    "hanzi": "来不及",
    "pinyin": "láibují",
    "meaning": "間に合わない",
    "example": "这是来不及。",
    "exampleMeaning": "これは来不及です。",
    "category": [
      "noun"
    ],
    "etymology": "「来」（木：き）＋「不」（一：いち）＋「及」（又：また）。間に合わないを表す。",
    "mnemonic": "「LIBUJ」＝来（き）＋不（いち）＋及（また）→「間に合わない」で覚える。"
  },
  {
    "id": 1157,
    "hanzi": "来得及",
    "pinyin": "láidejí",
    "meaning": "間に合う",
    "example": "这是来得及。",
    "exampleMeaning": "これは来得及です。",
    "category": [
      "noun"
    ],
    "etymology": "「来」（木：き）＋「得」（彳：ぎょうにんべん）＋「及」（又：また）。間に合うを表す。",
    "mnemonic": "「LIDEJ」＝来（き）＋得（ぎょうにんべん）＋及（また）→「間に合う」で覚える。"
  },
  {
    "id": 1158,
    "hanzi": "浪费",
    "pinyin": "làngfèi",
    "meaning": "無駄にする、浪費する",
    "example": "我浪费了。",
    "exampleMeaning": "私は浪费ました。",
    "category": [
      "verb"
    ],
    "etymology": "「浪」（水（氵）：さんずい）＋「费」（貝（贝）：かい）。無駄にする、浪費するを表す。",
    "mnemonic": "「LNGFI」＝浪（さんずい）＋费（かい）→「無駄にする、浪費する」で覚える。"
  },
  {
    "id": 1159,
    "hanzi": "理发",
    "pinyin": "lǐfà",
    "meaning": "理髪する",
    "example": "这是理发。",
    "exampleMeaning": "これは理发です。",
    "category": [
      "noun"
    ],
    "etymology": "「理」（玉（王）：たまへん）＋「发」（又：また）。理髪するを表す。",
    "mnemonic": "「LF」＝理（たまへん）＋发（また）→「理髪する」で覚える。"
  },
  {
    "id": 1160,
    "hanzi": "理解",
    "pinyin": "lǐjiě",
    "meaning": "理解する",
    "example": "我理解了。",
    "exampleMeaning": "私は理解ました。",
    "category": [
      "verb"
    ],
    "etymology": "「理」（玉（王）：たまへん）＋「解」（角：つのへん）。理解するを表す。",
    "mnemonic": "「Lキ」＝理（たまへん）＋解（つのへん）→「理解する」で覚える。"
  },
  {
    "id": 1161,
    "hanzi": "理想",
    "pinyin": "lǐxiǎng",
    "meaning": "理想、夢",
    "example": "这是理想。",
    "exampleMeaning": "これは理想です。",
    "category": [
      "noun"
    ],
    "etymology": "「理」（玉（王）：たまへん）＋「想」（心：こころ）。理想、夢を表す。",
    "mnemonic": "「LセキNG」＝理（たまへん）＋想（こころ）→「理想、夢」で覚える。"
  },
  {
    "id": 1162,
    "hanzi": "礼拜天",
    "pinyin": "lǐbàitiān",
    "meaning": "日曜日",
    "example": "这是礼拜天。",
    "exampleMeaning": "これは礼拜天です。",
    "category": [
      "noun"
    ],
    "etymology": "「礼」（示（礻）：しめすへん）＋「拜」（手：て）＋「天」（大：だい）。日曜日を表す。",
    "mnemonic": "「LBITIN」＝礼（しめすへん）＋拜（て）＋天（だい）→「日曜日」で覚える。"
  },
  {
    "id": 1163,
    "hanzi": "礼貌",
    "pinyin": "lǐmào",
    "meaning": "礼儀、マナー",
    "example": "这是礼貌。",
    "exampleMeaning": "これは礼貌です。",
    "category": [
      "noun"
    ],
    "etymology": "「礼」（示（礻）：しめすへん）＋「貌」（豸：むじなへん）。礼儀、マナーを表す。",
    "mnemonic": "「LMオ」＝礼（しめすへん）＋貌（むじなへん）→「礼儀、マナー」で覚える。"
  },
  {
    "id": 1164,
    "hanzi": "凉快",
    "pinyin": "liángkuai",
    "meaning": "涼しくて気持ちいい",
    "example": "这是凉快。",
    "exampleMeaning": "これは凉快です。",
    "category": [
      "noun"
    ],
    "etymology": "「凉」（冫：にすい）＋「快」（心（忄）：りっしんべん）。涼しくて気持ちいいを表す。",
    "mnemonic": "「リNGKUAI」＝凉（にすい）＋快（りっしんべん）→「涼しくて気持ちいい」で覚える。"
  },
  {
    "id": 1165,
    "hanzi": "流行",
    "pinyin": "liúxíng",
    "meaning": "流行する、はやる",
    "example": "我流行了。",
    "exampleMeaning": "私は流行ました。",
    "category": [
      "verb"
    ],
    "etymology": "「流」（水（氵）：さんずい）＋「行」（行：ぎょうがまえ）。流行する、はやるを表す。",
    "mnemonic": "「リXNG」＝流（さんずい）＋行（ぎょうがまえ）→「流行する、はやる」で覚える。"
  },
  {
    "id": 1166,
    "hanzi": "旅行",
    "pinyin": "lǚxíng",
    "meaning": "旅行する",
    "example": "我旅行了。",
    "exampleMeaning": "私は旅行ました。",
    "category": [
      "verb"
    ],
    "etymology": "「旅」（方：ほうへん）＋「行」（行：ぎょうがまえ）。旅行するを表す。",
    "mnemonic": "「LXNG」＝旅（ほうへん）＋行（ぎょうがまえ）→「旅行する」で覚える。"
  },
  {
    "id": 1167,
    "hanzi": "麻烦",
    "pinyin": "máfan",
    "meaning": "面倒な、迷惑な",
    "example": "这很麻烦。",
    "exampleMeaning": "これはとても麻烦です。",
    "category": [
      "adjective"
    ],
    "etymology": "「麻」（麻：あさ）＋「烦」（火：ひへん）。面倒な、迷惑なを表す。",
    "mnemonic": "「Mハン」＝麻（あさ）＋烦（ひへん）→「面倒な、迷惑な」で覚える。"
  },
  {
    "id": 1168,
    "hanzi": "马虎",
    "pinyin": "mǎhu",
    "meaning": "そそっかしい、いい加減な",
    "example": "这很马虎。",
    "exampleMeaning": "これはとても马虎です。",
    "category": [
      "adjective"
    ],
    "etymology": "「马」（馬（马）：うま）＋「虎」（虍：とらかんむり）。そそっかしい、いい加減なを表す。",
    "mnemonic": "「Mコ」＝马（うま）＋虎（とらかんむり）→「そそっかしい、いい加減な」で覚える。"
  },
  {
    "id": 1169,
    "hanzi": "满",
    "pinyin": "mǎn",
    "meaning": "満腹の、いっぱい",
    "example": "这很满。",
    "exampleMeaning": "これはとても满です。",
    "category": [
      "adjective"
    ],
    "etymology": "「满」（水（氵）：さんずい）。満腹の、いっぱいを表す。",
    "mnemonic": "「MN」＝满（さんずい）→「満腹の、いっぱい」で覚える。"
  },
  {
    "id": 1170,
    "hanzi": "秒",
    "pinyin": "miǎo",
    "meaning": "2番目の、秒",
    "example": "有秒个。",
    "exampleMeaning": "秒個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「秒」（禾：のぎへん）。2番目の、秒を表す。",
    "mnemonic": "「ミオ」＝秒（のぎへん）→「2番目の、秒」で覚える。"
  },
  {
    "id": 1171,
    "hanzi": "内容",
    "pinyin": "nèiróng",
    "meaning": "内容、コンテンツ",
    "example": "这是内容。",
    "exampleMeaning": "これは内容です。",
    "category": [
      "noun"
    ],
    "etymology": "「内」（入：いる）＋「容」（宀：うかんむり）。内容、コンテンツを表す。",
    "mnemonic": "「NIRNG」＝内（いる）＋容（うかんむり）→「内容、コンテンツ」で覚える。"
  },
  {
    "id": 1172,
    "hanzi": "脾气",
    "pinyin": "píqi",
    "meaning": "気性、性格",
    "example": "这是脾气。",
    "exampleMeaning": "これは脾气です。",
    "category": [
      "noun"
    ],
    "etymology": "「脾」（月：にくづき）＋「气」（气：きがまえ）。気性、性格を表す。",
    "mnemonic": "「Pキ」＝脾（にくづき）＋气（きがまえ）→「気性、性格」で覚える。"
  },
  {
    "id": 1173,
    "hanzi": "普通话",
    "pinyin": "pǔtōnghuà",
    "meaning": "標準中国語（普通話）",
    "example": "这是普通话。",
    "exampleMeaning": "これは普通话です。",
    "category": [
      "noun"
    ],
    "etymology": "「普」（日：ひ）＋「通」（辶：しんにょう）＋「话」（言（讠）：ごんべん）。標準中国語（普通話）を表す。",
    "mnemonic": "「PTNGHU」＝普（ひ）＋通（しんにょう）＋话（ごんべん）→「標準中国語（普通話）」で覚える。"
  },
  {
    "id": 1174,
    "hanzi": "穷",
    "pinyin": "qióng",
    "meaning": "貧しい、貧乏な",
    "example": "这是穷。",
    "exampleMeaning": "これは穷です。",
    "category": [
      "noun"
    ],
    "etymology": "「穷」（穴：あなかんむり）。貧しい、貧乏なを表す。",
    "mnemonic": "「キNG」＝穷（あなかんむり）→「貧しい、貧乏な」で覚える。"
  },
  {
    "id": 1175,
    "hanzi": "确实",
    "pinyin": "quèshí",
    "meaning": "確かに、本当に",
    "example": "他确实来了。",
    "exampleMeaning": "彼は确实来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「确」（石：いしへん）＋「实」（宀：うかんむり）。確かに、本当にを表す。",
    "mnemonic": "「クSH」＝确（いしへん）＋实（うかんむり）→「確かに、本当に」で覚える。"
  },
  {
    "id": 1176,
    "hanzi": "任务",
    "pinyin": "rènwu",
    "meaning": "任務、使命",
    "example": "这是任务。",
    "exampleMeaning": "これは任务です。",
    "category": [
      "noun"
    ],
    "etymology": "「任」（人（亻）：にんべん）＋「务」（力：ちから）。任務、使命を表す。",
    "mnemonic": "「RNWU」＝任（にんべん）＋务（ちから）→「任務、使命」で覚える。"
  },
  {
    "id": 1177,
    "hanzi": "商量",
    "pinyin": "shāngliang",
    "meaning": "相談する、話し合う",
    "example": "我商量了。",
    "exampleMeaning": "私は商量ました。",
    "category": [
      "verb"
    ],
    "etymology": "「商」（口：くち）＋「量」（里：さと）。相談する、話し合うを表す。",
    "mnemonic": "「SHNGLIANG」＝商（くち）＋量（さと）→「相談する、話し合う」で覚える。"
  },
  {
    "id": 1178,
    "hanzi": "稍微",
    "pinyin": "shāowēi",
    "meaning": "少し、やや",
    "example": "这是稍微。",
    "exampleMeaning": "これは稍微です。",
    "category": [
      "noun"
    ],
    "etymology": "「稍」（禾：のぎへん）＋「微」（彳：ぎょうにんべん）。少し、ややを表す。",
    "mnemonic": "「SHOWI」＝稍（のぎへん）＋微（ぎょうにんべん）→「少し、やや」で覚える。"
  },
  {
    "id": 1179,
    "hanzi": "勺子",
    "pinyin": "sháozi",
    "meaning": "スプーン、しゃもじ",
    "example": "这是勺子。",
    "exampleMeaning": "これは勺子です。",
    "category": [
      "noun"
    ],
    "etymology": "「勺」（勹：つつみがまえ）＋「子」（子：こ）。スプーン、しゃもじを表す。",
    "mnemonic": "「SHOZI」＝勺（つつみがまえ）＋子（こ）→「スプーン、しゃもじ」で覚える。"
  },
  {
    "id": 1180,
    "hanzi": "深",
    "pinyin": "shēn",
    "meaning": "深い",
    "example": "这很深。",
    "exampleMeaning": "これはとても深です。",
    "category": [
      "adjective"
    ],
    "etymology": "「深」（水（氵）：さんずい）。深いを表す。",
    "mnemonic": "「SHN」＝深（さんずい）→「深い」で覚える。"
  },
  {
    "id": 1181,
    "hanzi": "生命",
    "pinyin": "shēngmìng",
    "meaning": "人生、生活",
    "example": "这是生命。",
    "exampleMeaning": "これは生命です。",
    "category": [
      "noun"
    ],
    "etymology": "「生」（生：うまれる）＋「命」（口：くち）。人生、生活を表す。",
    "mnemonic": "「SHNGMNG」＝生（うまれる）＋命（くち）→「人生、生活」で覚える。"
  },
  {
    "id": 1182,
    "hanzi": "生意",
    "pinyin": "shēngyì",
    "meaning": "商売、ビジネス",
    "example": "这是生意。",
    "exampleMeaning": "これは生意です。",
    "category": [
      "noun"
    ],
    "etymology": "「生」（生：うまれる）＋「意」（心：こころ）。商売、ビジネスを表す。",
    "mnemonic": "「SHNGY」＝生（うまれる）＋意（こころ）→「商売、ビジネス」で覚える。"
  },
  {
    "id": 1183,
    "hanzi": "省",
    "pinyin": "shěng",
    "meaning": "〜なしで済ませる",
    "example": "我省了。",
    "exampleMeaning": "私は省ました。",
    "category": [
      "verb"
    ],
    "etymology": "「省」（目：め）。〜なしで済ませるを表す。",
    "mnemonic": "「SHNG」＝省（め）→「〜なしで済ませる」で覚える。"
  },
  {
    "id": 1184,
    "hanzi": "剩",
    "pinyin": "shèng",
    "meaning": "残る、余る",
    "example": "我剩了。",
    "exampleMeaning": "私は剩ました。",
    "category": [
      "verb"
    ],
    "etymology": "「剩」（刀（刂）：りっとう）。残る、余るを表す。",
    "mnemonic": "「SHNG」＝剩（りっとう）→「残る、余る」で覚える。"
  },
  {
    "id": 1185,
    "hanzi": "失败",
    "pinyin": "shībài",
    "meaning": "失敗する、負ける",
    "example": "我失败了。",
    "exampleMeaning": "私は失败ました。",
    "category": [
      "verb"
    ],
    "etymology": "「失」（大：だい）＋「败」（攵：のぶん）。失敗する、負けるを表す。",
    "mnemonic": "「SHBI」＝失（だい）＋败（のぶん）→「失敗する、負ける」で覚える。"
  },
  {
    "id": 1186,
    "hanzi": "失望",
    "pinyin": "shīwàng",
    "meaning": "失望した、がっかりした",
    "example": "这是失望。",
    "exampleMeaning": "これは失望です。",
    "category": [
      "noun"
    ],
    "etymology": "「失」（大：だい）＋「望」（月：つき）。失望した、がっかりしたを表す。",
    "mnemonic": "「SHWNG」＝失（だい）＋望（つき）→「失望した、がっかりした」で覚える。"
  },
  {
    "id": 1187,
    "hanzi": "师傅",
    "pinyin": "shīfu",
    "meaning": "師匠、〜さん（職人）",
    "example": "这是师傅。",
    "exampleMeaning": "これは师傅です。",
    "category": [
      "noun"
    ],
    "etymology": "「师」（巾：はば）＋「傅」（人（亻）：にんべん）。師匠、〜さん（職人）を表す。",
    "mnemonic": "「SHフク」＝师（はば）＋傅（にんべん）→「師匠、〜さん（職人）」で覚える。"
  },
  {
    "id": 1188,
    "hanzi": "十分",
    "pinyin": "shífēn",
    "meaning": "十分に、とても",
    "example": "我十分了。",
    "exampleMeaning": "私は十分ました。",
    "category": [
      "verb"
    ],
    "etymology": "「十」（十：じゅう）＋「分」（刀（刂）：かたな）。十分に、とてもを表す。",
    "mnemonic": "「SHFN」＝十（じゅう）＋分（かたな）→「十分に、とても」で覚える。"
  },
  {
    "id": 1189,
    "hanzi": "实际",
    "pinyin": "shíjì",
    "meaning": "実際の",
    "example": "这是实际。",
    "exampleMeaning": "これは实际です。",
    "category": [
      "noun"
    ],
    "etymology": "「实」（宀：うかんむり）＋「际」（阜（阝）：こざとへん）。実際のを表す。",
    "mnemonic": "「SHJ」＝实（うかんむり）＋际（こざとへん）→「実際の」で覚える。"
  },
  {
    "id": 1190,
    "hanzi": "实在",
    "pinyin": "shízài",
    "meaning": "実際に、本当に",
    "example": "他实在我来了。",
    "exampleMeaning": "彼は私实在来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「实」（宀：うかんむり）＋「在」（土：つち）。実際に、本当にを表す。",
    "mnemonic": "「SHZI」＝实（うかんむり）＋在（つち）→「実際に、本当に」で覚える。"
  },
  {
    "id": 1191,
    "hanzi": "使",
    "pinyin": "shǐ",
    "meaning": "〜させる",
    "example": "我使了。",
    "exampleMeaning": "私は使ました。",
    "category": [
      "verb"
    ],
    "etymology": "「使」（人（亻）：にんべん）。〜させるを表す。",
    "mnemonic": "「SH」＝使（にんべん）→「〜させる」で覚える。"
  },
  {
    "id": 1192,
    "hanzi": "使用",
    "pinyin": "shǐyòng",
    "meaning": "使う",
    "example": "我使用了。",
    "exampleMeaning": "私は使用ました。",
    "category": [
      "verb"
    ],
    "etymology": "「使」（人（亻）：にんべん）＋「用」（用：もちいる）。使うを表す。",
    "mnemonic": "「SHYNG」＝使（にんべん）＋用（もちいる）→「使う」で覚える。"
  },
  {
    "id": 1193,
    "hanzi": "世纪",
    "pinyin": "shìjì",
    "meaning": "世紀",
    "example": "这是世纪。",
    "exampleMeaning": "これは世纪です。",
    "category": [
      "noun"
    ],
    "etymology": "「世」（一：いち）＋「纪」（糸（纟）：いとへん）。世紀を表す。",
    "mnemonic": "「SHJ」＝世（いち）＋纪（いとへん）→「世紀」で覚える。"
  },
  {
    "id": 1194,
    "hanzi": "是否",
    "pinyin": "shìfǒu",
    "meaning": "〜かどうか",
    "example": "我喜欢茶，是否也喜欢咖啡。",
    "exampleMeaning": "私はお茶が好きで、是否コーヒーも好きです。",
    "category": [
      "conjunction"
    ],
    "etymology": "「是」（日：ひへん）＋「否」（口：くち）。〜かどうかを表す。",
    "mnemonic": "「SHFU」＝是（ひへん）＋否（くち）→「〜かどうか」で覚える。"
  },
  {
    "id": 1195,
    "hanzi": "适合",
    "pinyin": "shìhé",
    "meaning": "合う、適する",
    "example": "我适合了。",
    "exampleMeaning": "私は适合ました。",
    "category": [
      "verb"
    ],
    "etymology": "「适」（辶：しんにょう）＋「合」（口：くち）。合う、適するを表す。",
    "mnemonic": "「SHH」＝适（しんにょう）＋合（くち）→「合う、適する」で覚える。"
  },
  {
    "id": 1196,
    "hanzi": "适应",
    "pinyin": "shìyìng",
    "meaning": "適応する、慣れる",
    "example": "我适应了。",
    "exampleMeaning": "私は适应ました。",
    "category": [
      "verb"
    ],
    "etymology": "「适」（辶：しんにょう）＋「应」（广：まだれ）。適応する、慣れるを表す。",
    "mnemonic": "「SHYNG」＝适（しんにょう）＋应（まだれ）→「適応する、慣れる」で覚える。"
  },
  {
    "id": 1197,
    "hanzi": "收",
    "pinyin": "shōu",
    "meaning": "受け取る、受け入れる",
    "example": "我收了。",
    "exampleMeaning": "私は收ました。",
    "category": [
      "verb"
    ],
    "etymology": "「收」（攵：のぶん）。受け取る、受け入れるを表す。",
    "mnemonic": "「SHU」＝收（のぶん）→「受け取る、受け入れる」で覚える。"
  },
  {
    "id": 1198,
    "hanzi": "首都",
    "pinyin": "shǒudū",
    "meaning": "首都",
    "example": "这是首都。",
    "exampleMeaning": "これは首都です。",
    "category": [
      "noun"
    ],
    "etymology": "「首」（首：くび）＋「都」（邑（阝）：おおざと）。首都を表す。",
    "mnemonic": "「SHUD」＝首（くび）＋都（おおざと）→「首都」で覚える。"
  },
  {
    "id": 1199,
    "hanzi": "首先",
    "pinyin": "shǒuxiān",
    "meaning": "まず、最初に",
    "example": "有首先个。",
    "exampleMeaning": "首先個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「首」（首：くび）＋「先」（儿：にんにょう）。まず、最初にを表す。",
    "mnemonic": "「SHUXIN」＝首（くび）＋先（にんにょう）→「まず、最初に」で覚える。"
  },
  {
    "id": 1200,
    "hanzi": "输",
    "pinyin": "shū",
    "meaning": "負ける、送る",
    "example": "我输了。",
    "exampleMeaning": "私は输ました。",
    "category": [
      "verb"
    ],
    "etymology": "「输」（車（车）：くるまへん）。負ける、送るを表す。",
    "mnemonic": "「SH」＝输（くるまへん）→「負ける、送る」で覚える。"
  },
  {
    "id": 1201,
    "hanzi": "数量",
    "pinyin": "shùliàng",
    "meaning": "数、数量",
    "example": "这是数量。",
    "exampleMeaning": "これは数量です。",
    "category": [
      "noun"
    ],
    "etymology": "「数」（攵：のぶん）＋「量」（里：さと）。数、数量を表す。",
    "mnemonic": "「SHリNG」＝数（のぶん）＋量（さと）→「数、数量」で覚える。"
  },
  {
    "id": 1202,
    "hanzi": "帅",
    "pinyin": "shuài",
    "meaning": "ハンサムな、かっこいい",
    "example": "这是帅。",
    "exampleMeaning": "これは帅です。",
    "category": [
      "noun"
    ],
    "etymology": "「帅」（巾：はば）。ハンサムな、かっこいいを表す。",
    "mnemonic": "「ショI」＝帅（はば）→「ハンサムな、かっこいい」で覚える。"
  },
  {
    "id": 1203,
    "hanzi": "顺便",
    "pinyin": "shùnbiàn",
    "meaning": "ついでに",
    "example": "他顺便来了。",
    "exampleMeaning": "彼は顺便来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「顺」（頁（页）：おおがい）＋「便」（人（亻）：にんべん）。ついでにを表す。",
    "mnemonic": "「SHNBIN」＝顺（おおがい）＋便（にんべん）→「ついでに」で覚える。"
  },
  {
    "id": 1204,
    "hanzi": "顺利",
    "pinyin": "shùnlì",
    "meaning": "順調に、スムーズに",
    "example": "他顺利来了。",
    "exampleMeaning": "彼は顺利来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「顺」（頁（页）：おおがい）＋「利」（刀（刂）：りっとう）。順調に、スムーズにを表す。",
    "mnemonic": "「SHNL」＝顺（おおがい）＋利（りっとう）→「順調に、スムーズに」で覚える。"
  },
  {
    "id": 1205,
    "hanzi": "顺序",
    "pinyin": "shùnxù",
    "meaning": "順序",
    "example": "这是顺序。",
    "exampleMeaning": "これは顺序です。",
    "category": [
      "noun"
    ],
    "etymology": "「顺」（頁（页）：おおがい）＋「序」（广：まだれ）。順序を表す。",
    "mnemonic": "「SHNX」＝顺（おおがい）＋序（まだれ）→「順序」で覚える。"
  },
  {
    "id": 1206,
    "hanzi": "说明",
    "pinyin": "shuōmíng",
    "meaning": "説明する",
    "example": "我说明了。",
    "exampleMeaning": "私は说明ました。",
    "category": [
      "verb"
    ],
    "etymology": "「说」（言（讠）：ごんべん）＋「明」（日：ひへん）。説明するを表す。",
    "mnemonic": "「ショMNG」＝说（ごんべん）＋明（ひへん）→「説明する」で覚える。"
  },
  {
    "id": 1207,
    "hanzi": "随便",
    "pinyin": "suíbiàn",
    "meaning": "自由に、勝手に",
    "example": "这是随便。",
    "exampleMeaning": "これは随便です。",
    "category": [
      "noun"
    ],
    "etymology": "「随」（阜（阝）：こざとへん）＋「便」（人（亻）：にんべん）。自由に、勝手にを表す。",
    "mnemonic": "「ソクヒN」＝随（こざとへん）＋便（にんべん）→「自由に、勝手に」で覚える。"
  },
  {
    "id": 1208,
    "hanzi": "随着",
    "pinyin": "suízhe",
    "meaning": "〜に伴って",
    "example": "他随着我来了。",
    "exampleMeaning": "彼は私随着来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「随」（阜（阝）：こざとへん）＋「着」（目：め）。〜に伴ってを表す。",
    "mnemonic": "「ソクシャ」＝随（こざとへん）＋着（め）→「〜に伴って」で覚える。"
  },
  {
    "id": 1209,
    "hanzi": "孙子",
    "pinyin": "sūnzi",
    "meaning": "孫",
    "example": "这是孙子。",
    "exampleMeaning": "これは孙子です。",
    "category": [
      "noun"
    ],
    "etymology": "「孙」（子：こへん）＋「子」（子：こ）。孫を表す。",
    "mnemonic": "「SNZI」＝孙（こへん）＋子（こ）→「孫」で覚える。"
  },
  {
    "id": 1210,
    "hanzi": "所有",
    "pinyin": "suǒyǒu",
    "meaning": "すべて、みんな",
    "example": "所有很好。",
    "exampleMeaning": "所有はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「所」（戶（户）：とだれ）＋「有」（月：つきへん）。すべて、みんなを表す。",
    "mnemonic": "「ソクYU」＝所（とだれ）＋有（つきへん）→「すべて、みんな」で覚える。"
  },
  {
    "id": 1211,
    "hanzi": "台",
    "pinyin": "tái",
    "meaning": "台、〜台（量詞）",
    "example": "这是台。",
    "exampleMeaning": "これは台です。",
    "category": [
      "noun"
    ],
    "etymology": "「台」（口：くち）。台、〜台（量詞）を表す。",
    "mnemonic": "「TI」＝台（くち）→「台、〜台（量詞）」で覚える。"
  },
  {
    "id": 1212,
    "hanzi": "抬",
    "pinyin": "tái",
    "meaning": "持ち上げる",
    "example": "我抬了。",
    "exampleMeaning": "私は抬ました。",
    "category": [
      "verb"
    ],
    "etymology": "「抬」（手（扌）：てへん）。持ち上げるを表す。",
    "mnemonic": "「TI」＝抬（てへん）→「持ち上げる」で覚える。"
  },
  {
    "id": 1213,
    "hanzi": "态度",
    "pinyin": "tàidu",
    "meaning": "態度",
    "example": "这是态度。",
    "exampleMeaning": "これは态度です。",
    "category": [
      "noun"
    ],
    "etymology": "「态」（心：こころ）＋「度」。態度を表す。",
    "mnemonic": "「TIDU」＝态（こころ）＋度→「態度」で覚える。"
  },
  {
    "id": 1214,
    "hanzi": "弹钢琴",
    "pinyin": "tángāngqín",
    "meaning": "ピアノを弾く",
    "example": "我弹钢琴了。",
    "exampleMeaning": "私は弹钢琴ました。",
    "category": [
      "verb"
    ],
    "etymology": "「弹」（弓：ゆみへん）＋「钢」（金（钅）：かねへん）＋「琴」（玉（王）：たま）。ピアノを弾くを表す。",
    "mnemonic": "「TNGNGQN」＝弹（ゆみへん）＋钢（かねへん）＋琴（たま）→「ピアノを弾く」で覚える。"
  },
  {
    "id": 1215,
    "hanzi": "谈",
    "pinyin": "tán",
    "meaning": "話す、相談する",
    "example": "我谈了。",
    "exampleMeaning": "私は谈ました。",
    "category": [
      "verb"
    ],
    "etymology": "「谈」（言（讠）：ごんべん）。話す、相談するを表す。",
    "mnemonic": "「TN」＝谈（ごんべん）→「話す、相談する」で覚える。"
  },
  {
    "id": 1216,
    "hanzi": "汤",
    "pinyin": "tāng",
    "meaning": "スープ",
    "example": "这是汤。",
    "exampleMeaning": "これは汤です。",
    "category": [
      "noun"
    ],
    "etymology": "「汤」（水（氵）：さんずい）。スープを表す。",
    "mnemonic": "「TNG」＝汤（さんずい）→「スープ」で覚える。"
  },
  {
    "id": 1217,
    "hanzi": "糖",
    "pinyin": "táng",
    "meaning": "砂糖、飴",
    "example": "这是糖。",
    "exampleMeaning": "これは糖です。",
    "category": [
      "noun"
    ],
    "etymology": "「糖」（米：こめへん）。砂糖、飴を表す。",
    "mnemonic": "「TNG」＝糖（こめへん）→「砂糖、飴」で覚える。"
  },
  {
    "id": 1218,
    "hanzi": "躺",
    "pinyin": "tǎng",
    "meaning": "横になる",
    "example": "我躺了。",
    "exampleMeaning": "私は躺ました。",
    "category": [
      "verb"
    ],
    "etymology": "「躺」（身：みへん）。横になるを表す。",
    "mnemonic": "「TNG」＝躺（みへん）→「横になる」で覚える。"
  },
  {
    "id": 1219,
    "hanzi": "趟",
    "pinyin": "tàng",
    "meaning": "〜回（往復の回数）",
    "example": "这是趟。",
    "exampleMeaning": "これは趟です。",
    "category": [
      "noun"
    ],
    "etymology": "「趟」（走：そうにょう）。〜回（往復の回数）を表す。",
    "mnemonic": "「TNG」＝趟（そうにょう）→「〜回（往復の回数）」で覚える。"
  },
  {
    "id": 1220,
    "hanzi": "讨论",
    "pinyin": "tǎolùn",
    "meaning": "討論する、話し合う",
    "example": "我讨论了。",
    "exampleMeaning": "私は讨论ました。",
    "category": [
      "verb"
    ],
    "etymology": "「讨」（言（讠）：ごんべん）＋「论」（言（讠）：ごんべん）。討論する、話し合うを表す。",
    "mnemonic": "「TOLN」＝讨（ごんべん）＋论（ごんべん）→「討論する、話し合う」で覚える。"
  },
  {
    "id": 1221,
    "hanzi": "提",
    "pinyin": "tí",
    "meaning": "提げる、持ち上げる",
    "example": "我提了。",
    "exampleMeaning": "私は提ました。",
    "category": [
      "verb"
    ],
    "etymology": "「提」（手（扌）：てへん）。提げる、持ち上げるを表す。",
    "mnemonic": "「T」＝提（てへん）→「提げる、持ち上げる」で覚える。"
  },
  {
    "id": 1222,
    "hanzi": "提供",
    "pinyin": "tígōng",
    "meaning": "提供する",
    "example": "我提供了。",
    "exampleMeaning": "私は提供ました。",
    "category": [
      "verb"
    ],
    "etymology": "「提」（手（扌）：てへん）＋「供」（人（亻）：にんべん）。提供するを表す。",
    "mnemonic": "「TGNG」＝提（てへん）＋供（にんべん）→「提供する」で覚える。"
  },
  {
    "id": 1223,
    "hanzi": "挺",
    "pinyin": "tǐng",
    "meaning": "とても、かなり",
    "example": "我挺了。",
    "exampleMeaning": "私は挺ました。",
    "category": [
      "verb"
    ],
    "etymology": "「挺」（手（扌）：てへん）。とても、かなりを表す。",
    "mnemonic": "「TNG」＝挺（てへん）→「とても、かなり」で覚える。"
  },
  {
    "id": 1224,
    "hanzi": "通过",
    "pinyin": "tōngguò",
    "meaning": "通過する、〜を通じて",
    "example": "我通过了。",
    "exampleMeaning": "私は通过ました。",
    "category": [
      "verb"
    ],
    "etymology": "「通」（辶：しんにょう）＋「过」（辶：しんにょう）。通過する、〜を通じてを表す。",
    "mnemonic": "「TNGGU」＝通（しんにょう）＋过（しんにょう）→「通過する、〜を通じて」で覚える。"
  },
  {
    "id": 1225,
    "hanzi": "同情",
    "pinyin": "tóngqíng",
    "meaning": "同情する",
    "example": "这是同情。",
    "exampleMeaning": "これは同情です。",
    "category": [
      "noun"
    ],
    "etymology": "「同」（口：くち）＋「情」（心（忄）：こころ）。同情するを表す。",
    "mnemonic": "「TNGQNG」＝同（くち）＋情（こころ）→「同情する」で覚える。"
  },
  {
    "id": 1226,
    "hanzi": "同时",
    "pinyin": "tóngshí",
    "meaning": "同時に",
    "example": "他同时我来了。",
    "exampleMeaning": "彼は私同时来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「同」（口：くち）＋「时」（日：ひへん）。同時にを表す。",
    "mnemonic": "「TNGSH」＝同（くち）＋时（ひへん）→「同時に」で覚える。"
  },
  {
    "id": 1227,
    "hanzi": "袜子",
    "pinyin": "wàzi",
    "meaning": "靴下",
    "example": "这是袜子。",
    "exampleMeaning": "これは袜子です。",
    "category": [
      "noun"
    ],
    "etymology": "「袜」（衣（衤）：ころもへん）＋「子」（子：こ）。靴下を表す。",
    "mnemonic": "「Wシ」＝袜（ころもへん）＋子（こ）→「靴下」で覚える。"
  },
  {
    "id": 1228,
    "hanzi": "往往",
    "pinyin": "wǎngwǎng",
    "meaning": "よく、しばしば",
    "example": "他往往来了。",
    "exampleMeaning": "彼は往往来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「往」（彳：ぎょうにんべん）＋「往」（彳：ぎょうにんべん）。よく、しばしばを表す。",
    "mnemonic": "「WNGWNG」＝往（ぎょうにんべん）＋往（ぎょうにんべん）→「よく、しばしば」で覚える。"
  },
  {
    "id": 1229,
    "hanzi": "网球",
    "pinyin": "wǎngqiú",
    "meaning": "テニス",
    "example": "这是网球。",
    "exampleMeaning": "これは网球です。",
    "category": [
      "noun"
    ],
    "etymology": "「网」（网：あみがしら）＋「球」（玉（王）：たまへん）。テニスを表す。",
    "mnemonic": "「WNGQI」＝网（あみがしら）＋球（たまへん）→「テニス」で覚える。"
  },
  {
    "id": 1230,
    "hanzi": "卫生间",
    "pinyin": "wèishēngjiān",
    "meaning": "トイレ、洗面所",
    "example": "这是卫生间。",
    "exampleMeaning": "これは卫生间です。",
    "category": [
      "noun"
    ],
    "etymology": "「卫」（卩：わりふ）＋「生」（生：うまれる）＋「间」（門（门）：もんがまえ）。トイレ、洗面所を表す。",
    "mnemonic": "「WISHNGJIN」＝卫（わりふ）＋生（うまれる）＋间（もんがまえ）→「トイレ、洗面所」で覚える。"
  },
  {
    "id": 1231,
    "hanzi": "羡慕",
    "pinyin": "xiànmù",
    "meaning": "羨ましい",
    "example": "这是羡慕。",
    "exampleMeaning": "これは羡慕です。",
    "category": [
      "noun"
    ],
    "etymology": "「羡」（羊：ひつじ）＋「慕」（心（⺗）：したごころ）。羨ましいを表す。",
    "mnemonic": "「セキNM」＝羡（ひつじ）＋慕（したごころ）→「羨ましい」で覚える。"
  },
  {
    "id": 1232,
    "hanzi": "相反",
    "pinyin": "xiāngfǎn",
    "meaning": "反対",
    "example": "这是相反。",
    "exampleMeaning": "これは相反です。",
    "category": [
      "noun"
    ],
    "etymology": "「相」（目：め）＋「反」（又：また）。反対を表す。",
    "mnemonic": "「セキNGFN」＝相（め）＋反（また）→「反対」で覚える。"
  },
  {
    "id": 1233,
    "hanzi": "响",
    "pinyin": "xiǎng",
    "meaning": "鳴る、響く",
    "example": "我响了。",
    "exampleMeaning": "私は响ました。",
    "category": [
      "verb"
    ],
    "etymology": "「响」（口：くちへん）。鳴る、響くを表す。",
    "mnemonic": "「セキNG」＝响（くちへん）→「鳴る、響く」で覚える。"
  },
  {
    "id": 1234,
    "hanzi": "小吃",
    "pinyin": "xiǎochī",
    "meaning": "軽食、おやつ",
    "example": "这是小吃。",
    "exampleMeaning": "これは小吃です。",
    "category": [
      "noun"
    ],
    "etymology": "「小」（小：しょう）＋「吃」（口：くちへん）。軽食、おやつを表す。",
    "mnemonic": "「セキOCH」＝小（しょう）＋吃（くちへん）→「軽食、おやつ」で覚える。"
  },
  {
    "id": 1235,
    "hanzi": "小伙子",
    "pinyin": "xiǎohuǒzi",
    "meaning": "若者、青年",
    "example": "这是小伙子。",
    "exampleMeaning": "これは小伙子です。",
    "category": [
      "noun"
    ],
    "etymology": "「小」（小：しょう）＋「伙」（人（亻）：にんべん）＋「子」（子：こ）。若者、青年を表す。",
    "mnemonic": "「セキOHUシ」＝小（しょう）＋伙（にんべん）＋子（こ）→「若者、青年」で覚える。"
  },
  {
    "id": 1236,
    "hanzi": "辛苦",
    "pinyin": "xīnkǔ",
    "meaning": "大変な、苦労する",
    "example": "这很辛苦。",
    "exampleMeaning": "これはとても辛苦です。",
    "category": [
      "adjective"
    ],
    "etymology": "「辛」（辛：からい）＋「苦」（艹：くさかんむり）。大変な、苦労するを表す。",
    "mnemonic": "「XNK」＝辛（からい）＋苦（くさかんむり）→「大変な、苦労する」で覚える。"
  },
  {
    "id": 1237,
    "hanzi": "呀",
    "pinyin": "ya",
    "meaning": "",
    "example": "这是呀。",
    "exampleMeaning": "これは呀です。",
    "category": [
      "noun"
    ],
    "etymology": "「呀」（口：くちへん）。を表す。",
    "mnemonic": "「ア」＝呀（くちへん）→「」で覚える。"
  },
  {
    "id": 1238,
    "hanzi": "亚洲",
    "pinyin": "yàzhōu",
    "meaning": "アジア",
    "example": "这是亚洲。",
    "exampleMeaning": "これは亚洲です。",
    "category": [
      "noun"
    ],
    "etymology": "「亚」（一：いち）＋「洲」（水（氵）：さんずい）。アジアを表す。",
    "mnemonic": "「YZHU」＝亚（いち）＋洲（さんずい）→「アジア」で覚える。"
  },
  {
    "id": 1239,
    "hanzi": "盐",
    "pinyin": "yán",
    "meaning": "塩",
    "example": "这是盐。",
    "exampleMeaning": "これは盐です。",
    "category": [
      "noun"
    ],
    "etymology": "「盐」（皿：さら）。塩を表す。",
    "mnemonic": "「YN」＝盐（さら）→「塩」で覚える。"
  },
  {
    "id": 1240,
    "hanzi": "研究",
    "pinyin": "yánjiū",
    "meaning": "研究",
    "example": "这是研究。",
    "exampleMeaning": "これは研究です。",
    "category": [
      "noun"
    ],
    "etymology": "「研」（石：いしへん）＋「究」（穴：あなかんむり）。研究を表す。",
    "mnemonic": "「YNJI」＝研（いしへん）＋究（あなかんむり）→「研究」で覚える。"
  },
  {
    "id": 1241,
    "hanzi": "演员",
    "pinyin": "yǎnyuán",
    "meaning": "俳優、女優",
    "example": "这是演员。",
    "exampleMeaning": "これは演员です。",
    "category": [
      "noun"
    ],
    "etymology": "「演」（水（氵）：さんずい）＋「员」（口：くち）。俳優、女優を表す。",
    "mnemonic": "「YNYUN」＝演（さんずい）＋员（くち）→「俳優、女優」で覚える。"
  },
  {
    "id": 1242,
    "hanzi": "阳光",
    "pinyin": "yángguāng",
    "meaning": "日光",
    "example": "这是阳光。",
    "exampleMeaning": "これは阳光です。",
    "category": [
      "noun"
    ],
    "etymology": "「阳」（阜（阝）：こざとへん）＋「光」（儿：にんにょう）。日光を表す。",
    "mnemonic": "「YNGGUNG」＝阳（こざとへん）＋光（にんにょう）→「日光」で覚える。"
  },
  {
    "id": 1243,
    "hanzi": "也许",
    "pinyin": "yěxǔ",
    "meaning": "もしかすると",
    "example": "他也许来了。",
    "exampleMeaning": "彼は也许来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「也」（乙：おつ）＋「许」（言（讠）：ごんべん）。もしかするとを表す。",
    "mnemonic": "「YX」＝也（おつ）＋许（ごんべん）→「もしかすると」で覚える。"
  },
  {
    "id": 1244,
    "hanzi": "以",
    "pinyin": "yǐ",
    "meaning": "〜をもって、〜によって",
    "example": "我以了。",
    "exampleMeaning": "私は以ました。",
    "category": [
      "verb"
    ],
    "etymology": "「以」（人：ひと）。〜をもって、〜によってを表す。",
    "mnemonic": "「Y」＝以（ひと）→「〜をもって、〜によって」で覚える。"
  },
  {
    "id": 1245,
    "hanzi": "意见",
    "pinyin": "yìjiàn",
    "meaning": "意見",
    "example": "这是意见。",
    "exampleMeaning": "これは意见です。",
    "category": [
      "noun"
    ],
    "etymology": "「意」（心：こころ）＋「见」（見（见）：みる）。意見を表す。",
    "mnemonic": "「YキN」＝意（こころ）＋见（みる）→「意見」で覚える。"
  },
  {
    "id": 1246,
    "hanzi": "应聘",
    "pinyin": "yìngpìn",
    "meaning": "応募する、面接を受ける",
    "example": "我应聘了。",
    "exampleMeaning": "私は应聘ました。",
    "category": [
      "verb"
    ],
    "etymology": "「应」（广：まだれ）＋「聘」（耳：みみへん）。応募する、面接を受けるを表す。",
    "mnemonic": "「YNGPN」＝应（まだれ）＋聘（みみへん）→「応募する、面接を受ける」で覚える。"
  },
  {
    "id": 1247,
    "hanzi": "邮局",
    "pinyin": "yóujú",
    "meaning": "郵便局",
    "example": "这是邮局。",
    "exampleMeaning": "これは邮局です。",
    "category": [
      "noun"
    ],
    "etymology": "「邮」（邑（阝）：おおざと）＋「局」（尸：しかばね）。郵便局を表す。",
    "mnemonic": "「YUJ」＝邮（おおざと）＋局（しかばね）→「郵便局」で覚える。"
  },
  {
    "id": 1248,
    "hanzi": "原谅",
    "pinyin": "yuánliàng",
    "meaning": "許す、勘弁する",
    "example": "我原谅了。",
    "exampleMeaning": "私は原谅ました。",
    "category": [
      "verb"
    ],
    "etymology": "「原」＋「谅」（言（讠）：ごんべん）。許す、勘弁するを表す。",
    "mnemonic": "「ギョNLING」＝原＋谅（ごんべん）→「許す、勘弁する」で覚える。"
  },
  {
    "id": 1249,
    "hanzi": "占线",
    "pinyin": "zhànxiàn",
    "meaning": "話し中（電話）",
    "example": "这很占线。",
    "exampleMeaning": "これはとても占线です。",
    "category": [
      "adjective"
    ],
    "etymology": "「占」（卜：うらなう）＋「线」（糸（纟）：いとへん）。話し中（電話）を表す。",
    "mnemonic": "「ZHNXIN」＝占（うらなう）＋线（いとへん）→「話し中（電話）」で覚える。"
  },
  {
    "id": 1250,
    "hanzi": "正确",
    "pinyin": "zhèngquè",
    "meaning": "正しい、正確な",
    "example": "这很正确。",
    "exampleMeaning": "これはとても正确です。",
    "category": [
      "adjective"
    ],
    "etymology": "「正」（止：とめる）＋「确」（石：いしへん）。正しい、正確なを表す。",
    "mnemonic": "「ZHNGQU」＝正（とめる）＋确（いしへん）→「正しい、正確な」で覚える。"
  },
  {
    "id": 1251,
    "hanzi": "之",
    "pinyin": "zhī",
    "meaning": "",
    "example": "这是之。",
    "exampleMeaning": "これは之です。",
    "category": [
      "noun"
    ],
    "etymology": "「之」（丿：の）。を表す。",
    "mnemonic": "「ZH」＝之（の）→「」で覚える。"
  },
  {
    "id": 1252,
    "hanzi": "植物",
    "pinyin": "zhíwù",
    "meaning": "植物",
    "example": "这是植物。",
    "exampleMeaning": "これは植物です。",
    "category": [
      "noun"
    ],
    "etymology": "「植」（木：きへん）＋「物」（牛（牜）：うしへん）。植物を表す。",
    "mnemonic": "「ZHW」＝植（きへん）＋物（うしへん）→「植物」で覚える。"
  },
  {
    "id": 1253,
    "hanzi": "直接",
    "pinyin": "zhíjiē",
    "meaning": "直接",
    "example": "这很直接。",
    "exampleMeaning": "これはとても直接です。",
    "category": [
      "adjective"
    ],
    "etymology": "「直」（目：め）＋「接」（手（扌）：てへん）。直接を表す。",
    "mnemonic": "「ZHキ」＝直（め）＋接（てへん）→「直接」で覚える。"
  },
  {
    "id": 1254,
    "hanzi": "职业",
    "pinyin": "zhíyè",
    "meaning": "職業",
    "example": "这是职业。",
    "exampleMeaning": "これは职业です。",
    "category": [
      "noun"
    ],
    "etymology": "「职」（耳：みみへん）＋「业」（一：いち）。職業を表す。",
    "mnemonic": "「ZHY」＝职（みみへん）＋业（いち）→「職業」で覚える。"
  },
  {
    "id": 1255,
    "hanzi": "只好",
    "pinyin": "zhǐhǎo",
    "meaning": "仕方なく",
    "example": "他只好我来了。",
    "exampleMeaning": "彼は私只好来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「只」（口：くち）＋「好」（女：おんなへん）。仕方なくを表す。",
    "mnemonic": "「ZHHオ」＝只（くち）＋好（おんなへん）→「仕方なく」で覚える。"
  },
  {
    "id": 1256,
    "hanzi": "指",
    "pinyin": "zhǐ",
    "meaning": "指す、指",
    "example": "这是指。",
    "exampleMeaning": "これは指です。",
    "category": [
      "noun"
    ],
    "etymology": "「指」（手（扌）：てへん）。指す、指を表す。",
    "mnemonic": "「ZH」＝指（てへん）→「指す、指」で覚える。"
  },
  {
    "id": 1257,
    "hanzi": "至少",
    "pinyin": "zhìshǎo",
    "meaning": "少なくとも",
    "example": "他至少我来了。",
    "exampleMeaning": "彼は私至少来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「至」（至：いたる）＋「少」（小：しょう）。少なくともを表す。",
    "mnemonic": "「ZHSHオ」＝至（いたる）＋少（しょう）→「少なくとも」で覚える。"
  },
  {
    "id": 1258,
    "hanzi": "租",
    "pinyin": "zū",
    "meaning": "借りる、賃貸する",
    "example": "我租了。",
    "exampleMeaning": "私は租ました。",
    "category": [
      "verb"
    ],
    "etymology": "「租」（禾：のぎへん）。借りる、賃貸するを表す。",
    "mnemonic": "「Z」＝租（のぎへん）→「借りる、賃貸する」で覚える。"
  }
];
export default words2;
