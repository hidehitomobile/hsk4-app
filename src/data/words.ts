const words = [
  {
    "id": 1,
    "hanzi": "爱情",
    "pinyin": "àiqíng",
    "meaning": "愛情",
    "example": "他们的爱情故事很感人。",
    "exampleMeaning": "彼らの愛情物語はとても感動的です。",
    "category": [
      "noun"
    ],
    "measure": "段",
    "etymology": "「爱」（愛する）＋「情」（感情）。愛情は心から湧き出る感情を表す。",
    "mnemonic": "「アイチン」＝愛（アイ）＋情（ジョウ）→「アイ」で覚える。心の愛情。"
  },
  {
    "id": 2,
    "hanzi": "安排",
    "pinyin": "ānpái",
    "meaning": "手配する、段取りする",
    "example": "我已经安排好了明天的会议。",
    "exampleMeaning": "私はすでに明日の会議を手配しました。",
    "category": [
      "verb"
    ],
    "etymology": "「安」（安定）＋「排」（並べる）。物事を安定して並べることから「手配する」の意味に。",
    "mnemonic": "「アンパイ」＝安くパイを並べる→段取りするイメージ。"
  },
  {
    "id": 3,
    "hanzi": "安全",
    "pinyin": "ānquán",
    "meaning": "安全な",
    "example": "这里很安全，你放心。",
    "exampleMeaning": "ここはとても安全です、安心してください。",
    "category": [
      "adjective",
      "noun"
    ],
    "etymology": "「安」（安らか）＋「全」（すべて）。すべてが安らかである→安全。",
    "mnemonic": "「アンチェン」＝安心＋全然。全然安心＝安全。"
  },
  {
    "id": 4,
    "hanzi": "按时",
    "pinyin": "ànshí",
    "meaning": "時間通りに",
    "example": "请大家按时到达教室。",
    "exampleMeaning": "みなさん時間通りに教室に到着してください。",
    "category": [
      "adverb"
    ],
    "etymology": "「按」（押さえる）＋「时」（時間）。時間を押さえる→時間通りに。",
    "mnemonic": "「アンシー」＝暗記した時間。暗記した時間通りに行動。"
  },
  {
    "id": 5,
    "hanzi": "按照",
    "pinyin": "ànzhào",
    "meaning": "〜に従って、〜の通りに",
    "example": "请按照说明书使用这个产品。",
    "exampleMeaning": "説明書に従ってこの製品を使用してください。",
    "category": [
      "preposition"
    ],
    "etymology": "「按」（押さえる）＋「照」（照らす）。基準に照らして押さえる→〜に従って。",
    "mnemonic": "「アンジャオ」＝案（あん）を照らし合わせて従う。"
  },
  {
    "id": 6,
    "hanzi": "百分之",
    "pinyin": "bǎifēnzhī",
    "meaning": "〜パーセント",
    "example": "百分之八十的学生通过了考试。",
    "exampleMeaning": "80%の学生が試験に合格しました。",
    "category": [
      "other"
    ],
    "etymology": "「百」（ひゃく）＋「分」（わける）＋「之」（の）。百に分けたうちの→パーセント。",
    "mnemonic": "「バイフェンズー」＝百分の〜。百に分けたものと覚える。"
  },
  {
    "id": 7,
    "hanzi": "棒",
    "pinyin": "bàng",
    "meaning": "すばらしい、棒",
    "example": "你做得真棒！",
    "exampleMeaning": "あなたは本当にすばらしい！",
    "category": [
      "adjective"
    ],
    "etymology": "「棒」（木：きへん）。すばらしい、棒を表す。",
    "mnemonic": "「BNG」＝棒（きへん）→「すばらしい、棒」で覚える。"
  },
  {
    "id": 8,
    "hanzi": "包子",
    "pinyin": "bāozi",
    "meaning": "包子（中華まん）",
    "example": "我每天早上吃两个包子。",
    "exampleMeaning": "私は毎朝包子を二つ食べます。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「包」（勹：つつみがまえ）＋「子」（子：こ）。包子（中華まん）を表す。",
    "mnemonic": "「BOZI」＝包（つつみがまえ）＋子（こ）→「包子（中華まん）」で覚える。"
  },
  {
    "id": 9,
    "hanzi": "保护",
    "pinyin": "bǎohù",
    "meaning": "保護する",
    "example": "我们应该保护环境。",
    "exampleMeaning": "私たちは環境を保護すべきです。",
    "category": [
      "verb"
    ],
    "etymology": "「保」（人（亻）：にんべん）＋「护」（手（扌）：てへん）。保護するを表す。",
    "mnemonic": "「BOH」＝保（にんべん）＋护（てへん）→「保護する」で覚える。"
  },
  {
    "id": 10,
    "hanzi": "保证",
    "pinyin": "bǎozhèng",
    "meaning": "保証する",
    "example": "我保证明天一定完成工作。",
    "exampleMeaning": "明日必ず仕事を終わらせることを保証します。",
    "category": [
      "verb"
    ],
    "etymology": "「保」（人（亻）：にんべん）＋「证」（言（讠）：ごんべん）。保証するを表す。",
    "mnemonic": "「BOZHNG」＝保（にんべん）＋证（ごんべん）→「保証する」で覚える。"
  },
  {
    "id": 11,
    "hanzi": "抱",
    "pinyin": "bào",
    "meaning": "抱く、抱える",
    "example": "她抱着一个小孩。",
    "exampleMeaning": "彼女は小さな子供を抱いています。",
    "category": [
      "verb"
    ],
    "etymology": "「抱」（手（扌）：てへん）。抱く、抱えるを表す。",
    "mnemonic": "「Bオ」＝抱（てへん）→「抱く、抱える」で覚える。"
  },
  {
    "id": 12,
    "hanzi": "抱歉",
    "pinyin": "bàoqiàn",
    "meaning": "申し訳ない、すまない",
    "example": "很抱歉，我来晚了。",
    "exampleMeaning": "申し訳ありません、遅れました。",
    "category": [
      "adjective"
    ],
    "etymology": "「抱」（手（扌）：てへん）＋「歉」（欠：あくび）。申し訳ない、すまないを表す。",
    "mnemonic": "「BOQIN」＝抱（てへん）＋歉（あくび）→「申し訳ない、すまない」で覚える。"
  },
  {
    "id": 13,
    "hanzi": "报道",
    "pinyin": "bàodào",
    "meaning": "報道する、報告する",
    "example": "记者报道了这次会议的情况。",
    "exampleMeaning": "記者は今回の会議の状況を報道しました。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「报」（手（扌）：てへん）＋「道」（辶：しんにょう）。報道する、報告するを表す。",
    "mnemonic": "「BODオ」＝报（てへん）＋道（しんにょう）→「報道する、報告する」で覚える。"
  },
  {
    "id": 14,
    "hanzi": "报名",
    "pinyin": "bàomíng",
    "meaning": "申し込む、登録する",
    "example": "我已经报名参加汉语水平考试了。",
    "exampleMeaning": "私はすでにHSK試験に申し込みました。",
    "category": [
      "verb"
    ],
    "etymology": "「报」（しらせる）＋「名」（な）。名を知らせる→申し込む。",
    "mnemonic": "「バオミン」＝報告＋名前。名前を届ける→エントリー。"
  },
  {
    "id": 15,
    "hanzi": "倍",
    "pinyin": "bèi",
    "meaning": "〜倍",
    "example": "这个城市的人口是那个城市的三倍。",
    "exampleMeaning": "この都市の人口はあの都市の3倍です。",
    "category": [
      "measure"
    ],
    "etymology": "「倍」（人（亻）：にんべん）。〜倍を表す。",
    "mnemonic": "「BI」＝倍（にんべん）→「〜倍」で覚える。"
  },
  {
    "id": 16,
    "hanzi": "本来",
    "pinyin": "běnlái",
    "meaning": "本来、もともと",
    "example": "我本来想去旅行，但是太忙了。",
    "exampleMeaning": "私は本来旅行に行きたかったが、忙しすぎました。",
    "category": [
      "adverb"
    ],
    "etymology": "「本」（木：き）＋「来」（木：き）。本来、もともとを表す。",
    "mnemonic": "「BNLI」＝本（き）＋来（き）→「本来、もともと」で覚える。"
  },
  {
    "id": 17,
    "hanzi": "笨",
    "pinyin": "bèn",
    "meaning": "愚かな、不器用な",
    "example": "我不觉得你笨，你只是需要多练习。",
    "exampleMeaning": "私はあなたが愚かだとは思わない、ただもっと練習が必要なだけです。",
    "category": [
      "adjective"
    ],
    "etymology": "「笨」（竹（⺮）：たけかんむり）。愚かな、不器用なを表す。",
    "mnemonic": "「BN」＝笨（たけかんむり）→「愚かな、不器用な」で覚える。"
  },
  {
    "id": 18,
    "hanzi": "笔记本",
    "pinyin": "bǐjìběn",
    "meaning": "ノートパソコン、手帳",
    "example": "我买了一台新笔记本。",
    "exampleMeaning": "私は新しいノートパソコンを買いました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「笔记」＋「本」（ほん）。筆記する本→ノートパソコン。",
    "mnemonic": "「ビージーベン」＝ノート。筆記帳→ノートPC。"
  },
  {
    "id": 19,
    "hanzi": "比如",
    "pinyin": "bǐrú",
    "meaning": "例えば",
    "example": "我喜欢很多运动，比如跑步和游泳。",
    "exampleMeaning": "私は多くのスポーツが好きです、例えばランニングと水泳です。",
    "category": [
      "conjunction"
    ],
    "etymology": "「比」＋「如」（ごとし）。比べて如し→例えば。",
    "mnemonic": "「ビールー」＝比如。比喩→たとえば。"
  },
  {
    "id": 20,
    "hanzi": "毕业",
    "pinyin": "bìyè",
    "meaning": "卒業する",
    "example": "我明年大学毕业。",
    "exampleMeaning": "私は来年大学を卒業します。",
    "category": [
      "verb"
    ],
    "etymology": "「毕」（おわる）＋「业」（ぎょう）。学業を終える→卒業。",
    "mnemonic": "「ビーイエ」＝畢（おわ）る＋業（ぎょう）。学業を終える→卒業。"
  },
  {
    "id": 21,
    "hanzi": "标准",
    "pinyin": "biāozhǔn",
    "meaning": "標準、基準",
    "example": "这个产品不符合安全标准。",
    "exampleMeaning": "この製品は安全基準に適合していません。",
    "category": [
      "noun",
      "adjective"
    ],
    "measure": "个",
    "etymology": "「标」（しるし）＋「准」（みずもり）。目印の水準→基準。",
    "mnemonic": "「ビャオジュン」＝標識＋標準。目印の基準→スタンダード。"
  },
  {
    "id": 22,
    "hanzi": "表格",
    "pinyin": "biǎogé",
    "meaning": "表、フォーム",
    "example": "请填写这张表格。",
    "exampleMeaning": "このフォームにご記入ください。",
    "category": [
      "noun"
    ],
    "measure": "张",
    "etymology": "「表」（衣：ころも）＋「格」（木：きへん）。表、フォームを表す。",
    "mnemonic": "「ヒOG」＝表（ころも）＋格（きへん）→「表、フォーム」で覚える。"
  },
  {
    "id": 23,
    "hanzi": "表示",
    "pinyin": "biǎoshì",
    "meaning": "示す、表明する",
    "example": "他表示对这个计划很感兴趣。",
    "exampleMeaning": "彼はこの計画にとても興味があることを示しました。",
    "category": [
      "verb"
    ],
    "etymology": "「表」（あらわす）＋「示」（しめす）。表して示す→表示する。",
    "mnemonic": "「ビャオシー」＝表に出して示す→表示。"
  },
  {
    "id": 24,
    "hanzi": "表演",
    "pinyin": "biǎoyǎn",
    "meaning": "上演する、演技する",
    "example": "她在舞台上表演了一个舞蹈。",
    "exampleMeaning": "彼女はステージでダンスを上演しました。",
    "category": [
      "verb"
    ],
    "etymology": "「表」＋「演」（えんじる）。表して演じる→上演・演技。",
    "mnemonic": "「ビャオイェン」＝表現＋演出。舞台上で表現する。"
  },
  {
    "id": 25,
    "hanzi": "表扬",
    "pinyin": "biǎoyáng",
    "meaning": "褒める、表彰する",
    "example": "老师表扬了他的进步。",
    "exampleMeaning": "先生は彼の進歩を褒めました。",
    "category": [
      "verb"
    ],
    "etymology": "「表」＋「扬」（あげる）。表に出して持ち上げる→褒める。",
    "mnemonic": "「ビャオヤン」＝表彰＋称揚。表に出して褒め称える。"
  },
  {
    "id": 26,
    "hanzi": "饼干",
    "pinyin": "bǐnggān",
    "meaning": "ビスケット、クッキー",
    "example": "我喜欢吃巧克力饼干。",
    "exampleMeaning": "私はチョコレートビスケットを食べるのが好きです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「饼」（食（饣）：しょくへん）＋「干」（一：いち）。ビスケット、クッキーを表す。",
    "mnemonic": "「BNGGN」＝饼（しょくへん）＋干（いち）→「ビスケット、クッキー」で覚える。"
  },
  {
    "id": 27,
    "hanzi": "并且",
    "pinyin": "bìngqiě",
    "meaning": "その上、かつ",
    "example": "他不但会说日语，并且会说韩语。",
    "exampleMeaning": "彼は日本語が話せるだけでなく、その上韓国語も話せます。",
    "category": [
      "conjunction"
    ],
    "etymology": "「并」（干：ほす）＋「且」（一：いち）。その上、かつを表す。",
    "mnemonic": "「BNGQI」＝并（ほす）＋且（いち）→「その上、かつ」で覚える。"
  },
  {
    "id": 28,
    "hanzi": "博士",
    "pinyin": "bóshì",
    "meaning": "博士",
    "example": "他是计算机科学的博士。",
    "exampleMeaning": "彼はコンピューターサイエンスの博士です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「博」（十：じゅう）＋「士」（士：さむらい）。博士を表す。",
    "mnemonic": "「BSH」＝博（じゅう）＋士（さむらい）→「博士」で覚える。"
  },
  {
    "id": 29,
    "hanzi": "不过",
    "pinyin": "búguò",
    "meaning": "しかし、ただし",
    "example": "这件衣服很漂亮，不过太贵了。",
    "exampleMeaning": "この服はとてもきれいですが、高すぎます。",
    "category": [
      "conjunction"
    ],
    "etymology": "「不」（〜ず）＋「过」（すぎる）。過ぎず→しかし。",
    "mnemonic": "「ブーグオ」＝不過。〜を過ぎない→でも。"
  },
  {
    "id": 30,
    "hanzi": "不得不",
    "pinyin": "bùdébù",
    "meaning": "〜せざるを得ない",
    "example": "下雨了，我们不得不取消郊游。",
    "exampleMeaning": "雨が降ったので、私たちは遠足をキャンセルせざるを得ませんでした。",
    "category": [
      "adverb"
    ],
    "etymology": "「不」（一：いち）＋「得」（彳：ぎょうにんべん）＋「不」（一：いち）。〜せざるを得ないを表す。",
    "mnemonic": "「BDB」＝不（いち）＋得（ぎょうにんべん）＋不（いち）→「〜せざるを得ない」で覚える。"
  },
  {
    "id": 31,
    "hanzi": "不管",
    "pinyin": "bùguǎn",
    "meaning": "〜にかかわらず",
    "example": "不管多忙，我每天都学中文。",
    "exampleMeaning": "どんなに忙しくても、私は毎日中国語を勉強します。",
    "category": [
      "conjunction"
    ],
    "etymology": "「不」（一：いち）＋「管」（竹（⺮）：たけかんむり）。〜にかかわらずを表す。",
    "mnemonic": "「BコN」＝不（いち）＋管（たけかんむり）→「〜にかかわらず」で覚える。"
  },
  {
    "id": 32,
    "hanzi": "不仅",
    "pinyin": "bùjǐn",
    "meaning": "〜だけでなく",
    "example": "她不仅漂亮，而且聪明。",
    "exampleMeaning": "彼女は美しいだけでなく、賢いです。",
    "category": [
      "conjunction"
    ],
    "etymology": "「不」＋「仅」（わずか）。僅かならず→〜だけでなく。",
    "mnemonic": "「ブージン」＝不僅。〜だけでなく→not only。"
  },
  {
    "id": 33,
    "hanzi": "部分",
    "pinyin": "bùfen",
    "meaning": "部分",
    "example": "大部分学生都通过了考试。",
    "exampleMeaning": "大部分の学生が試験に合格しました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「部」（わける）＋「分」（わける）。分けて分ける→部分。",
    "mnemonic": "「ブーフェン」＝部門＋分ける。区切った一部＝部分。"
  },
  {
    "id": 34,
    "hanzi": "擦",
    "pinyin": "cā",
    "meaning": "拭く、磨く",
    "example": "请把桌子擦干净。",
    "exampleMeaning": "テーブルをきれいに拭いてください。",
    "category": [
      "verb"
    ],
    "etymology": "「擦」（手（扌）：てへん）。拭く、磨くを表す。",
    "mnemonic": "「C」＝擦（てへん）→「拭く、磨く」で覚える。"
  },
  {
    "id": 35,
    "hanzi": "猜",
    "pinyin": "cāi",
    "meaning": "推測する、当てる",
    "example": "你猜我今年多大了？",
    "exampleMeaning": "私が今年何歳か当ててみて？",
    "category": [
      "verb"
    ],
    "etymology": "「猜」（犬（犭）：けものへん）。推測する、当てるを表す。",
    "mnemonic": "「CI」＝猜（けものへん）→「推測する、当てる」で覚える。"
  },
  {
    "id": 36,
    "hanzi": "材料",
    "pinyin": "cáiliào",
    "meaning": "材料、資料",
    "example": "我们需要准备一些学习材料。",
    "exampleMeaning": "私たちはいくつかの学習資料を準備する必要があります。",
    "category": [
      "noun"
    ],
    "measure": "份",
    "etymology": "「材」（ざい）＋「料」（りょう）。材＋料→材料。",
    "mnemonic": "「ツァイリャオ」＝材料。素材＋原料→マテリアル。"
  },
  {
    "id": 37,
    "hanzi": "参观",
    "pinyin": "cānguān",
    "meaning": "見学する、参観する",
    "example": "明天我们去参观博物馆。",
    "exampleMeaning": "明日私たちは博物館を見学に行きます。",
    "category": [
      "verb"
    ],
    "etymology": "「参」（まいる）＋「观」（みる）。参って見る→見学。",
    "mnemonic": "「ツァングアン」＝参観。参加して観る→見学する。"
  },
  {
    "id": 38,
    "hanzi": "餐厅",
    "pinyin": "cāntīng",
    "meaning": "食堂、レストラン",
    "example": "公司的餐厅很大。",
    "exampleMeaning": "会社の食堂はとても大きいです。",
    "category": [
      "noun"
    ],
    "measure": "家",
    "etymology": "「餐」（しょくじ）＋「厅」（ひろま）。食事の広間→食堂。",
    "mnemonic": "「ツァンティン」＝餐厅。食事をする広間→レストラン。"
  },
  {
    "id": 39,
    "hanzi": "厕所",
    "pinyin": "cèsuǒ",
    "meaning": "トイレ",
    "example": "请问厕所在哪里？",
    "exampleMeaning": "トイレはどこですか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「厕」（かわや）＋「所」（ところ）。トイレの場所→お手洗い。",
    "mnemonic": "「ツースオ」＝厕所。かわや＋場所→トイレ。"
  },
  {
    "id": 40,
    "hanzi": "差不多",
    "pinyin": "chàbuduō",
    "meaning": "だいたい、ほとんど同じ",
    "example": "这两件衣服的颜色差不多。",
    "exampleMeaning": "この二つの服の色はだいたい同じです。",
    "category": [
      "adverb",
      "adjective"
    ],
    "etymology": "「差」（ちがい）＋「不」（〜ない）＋「多」（おおい）。差が多くない→だいたい。",
    "mnemonic": "「チャーブドゥオ」＝差が多くない。違いが少ない→ほぼ同じ。"
  },
  {
    "id": 41,
    "hanzi": "尝",
    "pinyin": "cháng",
    "meaning": "味見する、試食する",
    "example": "你尝尝这个菜，很好吃。",
    "exampleMeaning": "この料理を味見してみて、とても美味しいです。",
    "category": [
      "verb"
    ],
    "etymology": "「尚の略」＋「口」。口で味わう→試食する。",
    "mnemonic": "口に尚ぶ（あてる）→味見する。"
  },
  {
    "id": 42,
    "hanzi": "长城",
    "pinyin": "Chángchéng",
    "meaning": "万里の長城",
    "example": "长城是中国的象征之一。",
    "exampleMeaning": "万里の長城は中国のシンボルの一つです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「长」（ながい）＋「城」（しろ）。長い城→万里の長城。",
    "mnemonic": "「チャンチョン」＝長城。長い城壁→万里の長城。"
  },
  {
    "id": 43,
    "hanzi": "场",
    "pinyin": "chǎng",
    "meaning": "〜場（量詞）",
    "example": "我看了一场电影。",
    "exampleMeaning": "私は映画を一本見ました。",
    "category": [
      "measure"
    ],
    "etymology": "「场」（土：つちへん）。〜場（量詞）を表す。",
    "mnemonic": "「CHNG」＝场（つちへん）→「〜場（量詞）」で覚える。"
  },
  {
    "id": 44,
    "hanzi": "超过",
    "pinyin": "chāoguò",
    "meaning": "超える、上回る",
    "example": "今天的温度超过了35度。",
    "exampleMeaning": "今日の気温は35度を超えました。",
    "category": [
      "verb"
    ],
    "etymology": "「超」（走：そうにょう）＋「过」（辶：しんにょう）。超える、上回るを表す。",
    "mnemonic": "「CHOGU」＝超（そうにょう）＋过（しんにょう）→「超える、上回る」で覚える。"
  },
  {
    "id": 45,
    "hanzi": "成功",
    "pinyin": "chénggōng",
    "meaning": "成功する",
    "example": "这次试验非常成功。",
    "exampleMeaning": "今回の実験は非常に成功しました。",
    "category": [
      "verb",
      "adjective"
    ],
    "etymology": "「成」（戈：ほこづくり）＋「功」（力：ちから）。成功するを表す。",
    "mnemonic": "「CHNGGNG」＝成（ほこづくり）＋功（ちから）→「成功する」で覚える。"
  },
  {
    "id": 46,
    "hanzi": "诚实",
    "pinyin": "chéngshí",
    "meaning": "誠実な、正直な",
    "example": "他是一个诚实的孩子。",
    "exampleMeaning": "彼は誠実な子供です。",
    "category": [
      "adjective"
    ],
    "etymology": "「诚」（まこと）＋「实」（じつ）。誠実→正直。",
    "mnemonic": "「チョンシー」＝誠実。誠あり実あり→正直な。"
  },
  {
    "id": 47,
    "hanzi": "城市",
    "pinyin": "chéngshì",
    "meaning": "都市、都会",
    "example": "北京是一个大城市。",
    "exampleMeaning": "北京は大きな都市です。",
    "category": [
      "noun"
    ],
    "measure": "座",
    "etymology": "「城」（しろ）＋「市」（まち）。城の市→都市。",
    "mnemonic": "「チョンシー」＝城市。城壁のある市→都会。"
  },
  {
    "id": 48,
    "hanzi": "乘坐",
    "pinyin": "chéngzuò",
    "meaning": "乗る（乗り物に）",
    "example": "我们乘坐地铁去上班。",
    "exampleMeaning": "私たちは地下鉄に乗って出勤します。",
    "category": [
      "verb"
    ],
    "etymology": "「乘」（のる）＋「坐」（すわる）。乗って座る→搭乗する。",
    "mnemonic": "「チョンズオ」＝乗坐。乗って座る→乗り物に乗る。"
  },
  {
    "id": 49,
    "hanzi": "重新",
    "pinyin": "chóngxīn",
    "meaning": "改めて、もう一度",
    "example": "请重新写一遍。",
    "exampleMeaning": "もう一度書き直してください。",
    "category": [
      "adverb"
    ],
    "etymology": "「重」（かさねる）＋「新」（あらた）。重ねて新たに→もう一度。",
    "mnemonic": "「チョンシン」＝重新。再度新しく→ふたたび。"
  },
  {
    "id": 50,
    "hanzi": "抽烟",
    "pinyin": "chōuyān",
    "meaning": "タバコを吸う、喫煙する",
    "example": "这里不能抽烟。",
    "exampleMeaning": "ここではタバコを吸えません。",
    "category": [
      "verb"
    ],
    "etymology": "「抽」（ひく）＋「烟」（けむり）。煙を引く→タバコを吸う。",
    "mnemonic": "「チョウイェン」＝抽烟。煙を吸い込む→喫煙。"
  },
  {
    "id": 51,
    "hanzi": "出差",
    "pinyin": "chūchāi",
    "meaning": "出張する",
    "example": "爸爸下个星期去上海出差。",
    "exampleMeaning": "父は来週上海に出張に行きます。",
    "category": [
      "verb"
    ],
    "etymology": "「出」（でる）＋「差」（つかわす）。出て差し遣わされる→出張。",
    "mnemonic": "「チューチャイ」＝出差。出かけて差遣→ビジネストリップ。"
  },
  {
    "id": 52,
    "hanzi": "出发",
    "pinyin": "chūfā",
    "meaning": "出発する",
    "example": "我们明天早上六点出发。",
    "exampleMeaning": "私たちは明日の朝6時に出発します。",
    "category": [
      "verb"
    ],
    "etymology": "「出」＋「发」（はつ）。出発→シュッパツ。",
    "mnemonic": "「チューファー」＝出発。出て発つ→出発する。"
  },
  {
    "id": 53,
    "hanzi": "出生",
    "pinyin": "chūshēng",
    "meaning": "生まれる",
    "example": "我出生在东京。",
    "exampleMeaning": "私は東京で生まれました。",
    "category": [
      "verb"
    ],
    "etymology": "「出」＋「生」（うまれる）。出て生まれる→誕生。",
    "mnemonic": "「チューシォン」＝出生。母体から出て生まれる。"
  },
  {
    "id": 54,
    "hanzi": "窗户",
    "pinyin": "chuānghu",
    "meaning": "窓",
    "example": "请打开窗户，房间里太热了。",
    "exampleMeaning": "窓を開けてください、部屋が暑すぎます。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「窗」（まど）＋「户」（と）。窓と戸→窓。",
    "mnemonic": "「チュアンフー」＝窓戸。窓のこと→ウィンドウ。"
  },
  {
    "id": 55,
    "hanzi": "传真",
    "pinyin": "chuánzhēn",
    "meaning": "ファックス",
    "example": "请把文件用传真发给我。",
    "exampleMeaning": "書類をファックスで送ってください。",
    "category": [
      "noun"
    ],
    "measure": "份",
    "etymology": "「传」（つたえる）＋「真」（まこと）。真を伝える→FAX。",
    "mnemonic": "「チュエンジェン」＝伝真。真を伝送→ファックス。"
  },
  {
    "id": 56,
    "hanzi": "词典",
    "pinyin": "cídiǎn",
    "meaning": "辞書",
    "example": "我买了一本汉日词典。",
    "exampleMeaning": "私は中日辞書を一冊買いました。",
    "category": [
      "noun"
    ],
    "measure": "本",
    "etymology": "「词」（言（讠）：ごんべん）＋「典」（八：はち）。辞書を表す。",
    "mnemonic": "「CテキN」＝词（ごんべん）＋典（はち）→「辞書」で覚える。"
  },
  {
    "id": 58,
    "hanzi": "从来",
    "pinyin": "cónglái",
    "meaning": "これまで、今まで",
    "example": "我从来没去过中国。",
    "exampleMeaning": "私はこれまで一度も中国に行ったことがありません。",
    "category": [
      "adverb"
    ],
    "etymology": "「从」（〜より）＋「来」（くる）。〜より来る→これまで。",
    "mnemonic": "「ツォンライ」＝従来。以前から今まで→いままで。"
  },
  {
    "id": 59,
    "hanzi": "粗心",
    "pinyin": "cūxīn",
    "meaning": "そそっかしい、不注意な",
    "example": "他太粗心了，考试时忘了写名字。",
    "exampleMeaning": "彼は不注意すぎて、試験の時に名前を書き忘れました。",
    "category": [
      "adjective"
    ],
    "etymology": "「粗」（あらい）＋「心」（こころ）。心が粗い→うっかり。",
    "mnemonic": "「ツーシン」＝粗心。大ざっぱな心→そそっかしい。"
  },
  {
    "id": 60,
    "hanzi": "存",
    "pinyin": "cún",
    "meaning": "預ける、貯金する",
    "example": "我把钱存在银行里。",
    "exampleMeaning": "私はお金を銀行に預けています。",
    "category": [
      "verb"
    ],
    "etymology": "「才（ある）」＋「子（こ）」。子を持つの意→保存する。",
    "mnemonic": "才能ある子を保存→預ける・存在する。"
  },
  {
    "id": 61,
    "hanzi": "答案",
    "pinyin": "dá'àn",
    "meaning": "答え、解答",
    "example": "你知道这道题的答案吗？",
    "exampleMeaning": "この問題の答えを知っていますか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「答」（こたえ）＋「案」（あん）。答えの案→解答。",
    "mnemonic": "「ダーアン」＝答案。答えの案→アンサー。"
  },
  {
    "id": 62,
    "hanzi": "打扮",
    "pinyin": "dǎban",
    "meaning": "おしゃれをする、身なりを整える",
    "example": "她喜欢打扮自己。",
    "exampleMeaning": "彼女はおしゃれをするのが好きです。",
    "category": [
      "verb"
    ],
    "etymology": "「打」（うつ）＋「扮」（よそおう）。打って装う→おしゃれする。",
    "mnemonic": "「ダーバン」＝打扮。身だしなみを整える→着飾る。"
  },
  {
    "id": 63,
    "hanzi": "打扰",
    "pinyin": "dǎrǎo",
    "meaning": "邪魔する",
    "example": "对不起，打扰您了。",
    "exampleMeaning": "すみません、お邪魔しました。",
    "category": [
      "verb"
    ],
    "etymology": "「打」（手（扌）：てへん）＋「扰」（手（扌）：てへん）。邪魔するを表す。",
    "mnemonic": "「DRオ」＝打（てへん）＋扰（てへん）→「邪魔する」で覚える。"
  },
  {
    "id": 64,
    "hanzi": "打印",
    "pinyin": "dǎyìn",
    "meaning": "印刷する、プリントする",
    "example": "请帮我打印这份文件。",
    "exampleMeaning": "この書類を印刷するのを手伝ってください。",
    "category": [
      "verb"
    ],
    "etymology": "「打」＋「印」（いん）。打って印す→印刷する。",
    "mnemonic": "「ダーイン」＝打印。打ち出す→プリント。"
  },
  {
    "id": 65,
    "hanzi": "大概",
    "pinyin": "dàgài",
    "meaning": "おおよそ、たぶん",
    "example": "大概需要多长时间？",
    "exampleMeaning": "おおよそどのくらい時間がかかりますか？",
    "category": [
      "adverb",
      "adjective"
    ],
    "etymology": "「大」（おおきく）＋「概」（おおよそ）。大きく凡そ→大体。",
    "mnemonic": "「ダーガイ」＝大概。大まかな概要→おおむね。"
  },
  {
    "id": 66,
    "hanzi": "大使馆",
    "pinyin": "dàshǐguǎn",
    "meaning": "大使館",
    "example": "我去日本大使馆办签证。",
    "exampleMeaning": "私は日本大使館にビザの手続きに行きます。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「大」＋「使」（つかい）＋「馆」（やかた）。大使の館→大使館。",
    "mnemonic": "「ダーシーグアン」＝大使館。大使の建物→エンバシー。"
  },
  {
    "id": 67,
    "hanzi": "代表",
    "pinyin": "dàibiǎo",
    "meaning": "代表する",
    "example": "他代表公司参加了会议。",
    "exampleMeaning": "彼は会社を代表して会議に参加しました。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「代」（かわる）＋「表」（あらわす）。代わって表す→代表。",
    "mnemonic": "「ダイビャオ」＝代表。代わりに表明→リプレゼント。"
  },
  {
    "id": 68,
    "hanzi": "担心",
    "pinyin": "dānxīn",
    "meaning": "心配する",
    "example": "妈妈总是担心我的身体。",
    "exampleMeaning": "母はいつも私の体を心配しています。",
    "category": [
      "verb"
    ],
    "etymology": "「担」（手（扌）：てへん）＋「心」（心：こころ）。心配するを表す。",
    "mnemonic": "「DNXN」＝担（てへん）＋心（こころ）→「心配する」で覚える。"
  },
  {
    "id": 69,
    "hanzi": "当",
    "pinyin": "dāng",
    "meaning": "〜の時に、〜になる",
    "example": "当老师不容易。",
    "exampleMeaning": "先生になるのは簡単ではありません。",
    "category": [
      "preposition"
    ],
    "etymology": "「当」（彐：けいがしら）。〜の時に、〜になるを表す。",
    "mnemonic": "「DNG」＝当（けいがしら）→「〜の時に、〜になる」で覚える。"
  },
  {
    "id": 70,
    "hanzi": "当地",
    "pinyin": "dāngdì",
    "meaning": "現地の、地元の",
    "example": "我对当地的文化很感兴趣。",
    "exampleMeaning": "私は現地の文化にとても興味があります。",
    "category": [
      "adjective"
    ],
    "etymology": "「当」（あたる）＋「地」（ち）。当たる地→現地。",
    "mnemonic": "「ダンディー」＝当地。その当の土地→ローカル。"
  },
  {
    "id": 71,
    "hanzi": "刀",
    "pinyin": "dāo",
    "meaning": "ナイフ、刀",
    "example": "请给我一把刀。",
    "exampleMeaning": "ナイフを一つください。",
    "category": [
      "noun"
    ],
    "measure": "把",
    "etymology": "「刀」（刀：かたな）。ナイフ、刀を表す。",
    "mnemonic": "「Dオ」＝刀（かたな）→「ナイフ、刀」で覚える。"
  },
  {
    "id": 72,
    "hanzi": "到处",
    "pinyin": "dàochù",
    "meaning": "至る所、どこでも",
    "example": "春天到了，到处都开满了花。",
    "exampleMeaning": "春が来て、至る所に花が咲いています。",
    "category": [
      "adverb"
    ],
    "etymology": "「到」（いたる）＋「处」（ところ）。至る所→あちこち。",
    "mnemonic": "「ダオチュー」＝到処。到る処→どこでも。"
  },
  {
    "id": 73,
    "hanzi": "到底",
    "pinyin": "dàodǐ",
    "meaning": "一体、結局",
    "example": "你到底想说什么？",
    "exampleMeaning": "一体何を言いたいのですか？",
    "category": [
      "adverb"
    ],
    "etymology": "「到」＋「底」（そこ）。底に至る→結局。",
    "mnemonic": "「ダオディー」＝到底。底まで至る→ついに。"
  },
  {
    "id": 74,
    "hanzi": "道歉",
    "pinyin": "dàoqiàn",
    "meaning": "謝罪する、謝る",
    "example": "你应该向他道歉。",
    "exampleMeaning": "あなたは彼に謝るべきです。",
    "category": [
      "verb"
    ],
    "etymology": "「道」（みち）＋「歉」（あやまる）。道を謝る→謝罪する。",
    "mnemonic": "「ダオチェン」＝道歉。道義の謝罪→あやまる。"
  },
  {
    "id": 75,
    "hanzi": "得",
    "pinyin": "děi",
    "meaning": "〜しなければならない",
    "example": "我们得快点儿，要迟到了。",
    "exampleMeaning": "急がなければなりません、遅刻しそうです。",
    "category": [
      "verb"
    ],
    "etymology": "「得」（彳：ぎょうにんべん）。〜しなければならないを表す。",
    "mnemonic": "「DI」＝得（ぎょうにんべん）→「〜しなければならない」で覚える。"
  },
  {
    "id": 76,
    "hanzi": "等",
    "pinyin": "děng",
    "meaning": "〜など、等等",
    "example": "我喜欢吃水果，比如苹果、香蕉等。",
    "exampleMeaning": "私は果物を食べるのが好きです、例えばりんご、バナナなど。",
    "category": [
      "particle"
    ],
    "etymology": "「⺮（竹）」＋「寺」。竹簡を寺で揃える→等級・待つ。",
    "mnemonic": "竹（⺮）でできた寺の札→等級を分ける→待つ。"
  },
  {
    "id": 77,
    "hanzi": "低",
    "pinyin": "dī",
    "meaning": "低い",
    "example": "今天气温很低。",
    "exampleMeaning": "今日の気温はとても低いです。",
    "category": [
      "adjective"
    ],
    "etymology": "「亻（人）」＋「氐（ひくい）」。人が頭を低くする→低い。",
    "mnemonic": "人（亻）が身を低くする→ひくい。"
  },
  {
    "id": 78,
    "hanzi": "地球",
    "pinyin": "dìqiú",
    "meaning": "地球",
    "example": "地球是我们的家。",
    "exampleMeaning": "地球は私たちの家です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「地」＋「球」（たま）。地の球→地球。",
    "mnemonic": "「ディーチウ」＝地球。大地の球体→アース。"
  },
  {
    "id": 79,
    "hanzi": "地址",
    "pinyin": "dìzhǐ",
    "meaning": "住所",
    "example": "请告诉我你的地址。",
    "exampleMeaning": "あなたの住所を教えてください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「地」＋「址」（あと）。地の址→住所。",
    "mnemonic": "「ディージー」＝地址。土地の所在→アドレス。"
  },
  {
    "id": 80,
    "hanzi": "调查",
    "pinyin": "diàochá",
    "meaning": "調査する",
    "example": "警察正在调查这件事。",
    "exampleMeaning": "警察はこの事件を調査しています。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「调」（しらべる）＋「查」（しらべる）。調べて査べる→調査。",
    "mnemonic": "「ディャオチャー」＝調査。調整＋検査→リサーチ。"
  },
  {
    "id": 81,
    "hanzi": "丢",
    "pinyin": "diū",
    "meaning": "失くす、なくす",
    "example": "我的钱包丢了。",
    "exampleMeaning": "私の財布をなくしました。",
    "category": [
      "verb"
    ],
    "etymology": "「丿」＋「去」。去ったものが落ちる→なくす。",
    "mnemonic": "去る（さる）ものが手から落ちる→失くす。"
  },
  {
    "id": 82,
    "hanzi": "动作",
    "pinyin": "dòngzuò",
    "meaning": "動作",
    "example": "这个舞蹈的动作很优美。",
    "exampleMeaning": "このダンスの動作はとても優雅です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「动」（うごく）＋「作」（つくる）。動いて作る→動作。",
    "mnemonic": "「ドンズオ」＝動作。動きの所作→アクション。"
  },
  {
    "id": 83,
    "hanzi": "堵车",
    "pinyin": "dǔchē",
    "meaning": "渋滞する",
    "example": "早上上班时间经常堵车。",
    "exampleMeaning": "朝の出勤時間はよく渋滞します。",
    "category": [
      "verb"
    ],
    "etymology": "「堵」（ふさぐ）＋「车」（くるま）。車が塞がる→渋滞。",
    "mnemonic": "「ドゥーチャー」＝堵車。車が詰まる→交通渋滞。"
  },
  {
    "id": 84,
    "hanzi": "肚子",
    "pinyin": "dùzi",
    "meaning": "お腹",
    "example": "我肚子饿了。",
    "exampleMeaning": "お腹が空きました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「肚」（はら）＋「子」（名詞化）。腹→おなか。",
    "mnemonic": "「ドゥーズー」＝おなか。腹の子という表現。"
  },
  {
    "id": 85,
    "hanzi": "短信",
    "pinyin": "duǎnxìn",
    "meaning": "ショートメッセージ",
    "example": "我给你发了一条短信。",
    "exampleMeaning": "あなたにショートメッセージを送りました。",
    "category": [
      "noun"
    ],
    "measure": "条",
    "etymology": "「短」（みじかい）＋「信」（たより）。短い便り→ショートメッセージ。",
    "mnemonic": "「ドゥエンシン」＝短信。短い手紙→SMS。"
  },
  {
    "id": 86,
    "hanzi": "对话",
    "pinyin": "duìhuà",
    "meaning": "対話、会話",
    "example": "请跟你的同伴进行对话练习。",
    "exampleMeaning": "パートナーと会話の練習をしてください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「对」（たいする）＋「话」（はなし）。対する話→会話。",
    "mnemonic": "「ドゥイフア」＝対話。向き合って話す→ダイアログ。"
  },
  {
    "id": 87,
    "hanzi": "对于",
    "pinyin": "duìyú",
    "meaning": "〜に対して、〜について",
    "example": "对于这个问题，我有不同的看法。",
    "exampleMeaning": "この問題について、私は異なる見解を持っています。",
    "category": [
      "preposition"
    ],
    "etymology": "「对」＋「于」（〜において）。〜に対して。",
    "mnemonic": "「ドゥイユー」＝対于。〜について→regarding。"
  },
  {
    "id": 88,
    "hanzi": "儿童",
    "pinyin": "értóng",
    "meaning": "児童、子供",
    "example": "这本书适合儿童阅读。",
    "exampleMeaning": "この本は児童の読書に適しています。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「儿」（こ）＋「童」（わらべ）。児童→子ども。",
    "mnemonic": "「アールトン」＝児童。子＋童→チャイルド。"
  },
  {
    "id": 89,
    "hanzi": "法律",
    "pinyin": "fǎlǜ",
    "meaning": "法律",
    "example": "每个人都应该遵守法律。",
    "exampleMeaning": "誰もが法律を守るべきです。",
    "category": [
      "noun"
    ],
    "measure": "条",
    "etymology": "「法」（ほう）＋「律」（りつ）。法律→法律。",
    "mnemonic": "「ファーリュー」＝法律。法の律→ロー。"
  },
  {
    "id": 90,
    "hanzi": "翻译",
    "pinyin": "fānyì",
    "meaning": "翻訳する、通訳する",
    "example": "请帮我把这句话翻译成中文。",
    "exampleMeaning": "この文を中国語に翻訳してください。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「翻」（ひるがえす）＋「译」（やくす）。翻して訳す→翻訳。",
    "mnemonic": "「ファンイー」＝翻訳。ひっくり返して訳す→翻訳。"
  },
  {
    "id": 91,
    "hanzi": "烦恼",
    "pinyin": "fánnǎo",
    "meaning": "悩み、心配事",
    "example": "你不要为这点小事烦恼。",
    "exampleMeaning": "こんな小さなことで悩まないでください。",
    "category": [
      "noun",
      "adjective"
    ],
    "measure": "个",
    "etymology": "「烦」（わずらう）＋「恼」（なやむ）。煩って悩む→悩み。",
    "mnemonic": "「ファンナオ」＝煩悩。煩わしく悩む→ストレス。"
  },
  {
    "id": 92,
    "hanzi": "反对",
    "pinyin": "fǎnduì",
    "meaning": "反対する",
    "example": "很多人反对这个计划。",
    "exampleMeaning": "多くの人がこの計画に反対しています。",
    "category": [
      "verb"
    ],
    "etymology": "「反」（そる）＋「对」（むかう）。反して対する→反対。",
    "mnemonic": "「ファンドゥイ」＝反対。逆らって対する→反対する。"
  },
  {
    "id": 93,
    "hanzi": "方法",
    "pinyin": "fāngfǎ",
    "meaning": "方法",
    "example": "你有什么好方法吗？",
    "exampleMeaning": "何かいい方法がありますか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「方」＋「法」。方＋法→やり方・方法。",
    "mnemonic": "「ファンファー」＝方針＋法則。やり方＝方法。"
  },
  {
    "id": 94,
    "hanzi": "方面",
    "pinyin": "fāngmiàn",
    "meaning": "方面、分野",
    "example": "他在很多方面都做得很好。",
    "exampleMeaning": "彼は多くの面でよくやっています。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「方」＋「面」（めん）。方角の面→方面・側面。",
    "mnemonic": "「ファンミエン」＝方向＋面。ある方向の面→〜の面で。"
  },
  {
    "id": 95,
    "hanzi": "方向",
    "pinyin": "fāngxiàng",
    "meaning": "方向",
    "example": "你朝这个方向走就能到。",
    "exampleMeaning": "この方向に歩けば着きます。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「方」（方：ほう）＋「向」（口：くち）。方向を表す。",
    "mnemonic": "「FNGXING」＝方（ほう）＋向（くち）→「方向」で覚える。"
  },
  {
    "id": 96,
    "hanzi": "放弃",
    "pinyin": "fàngqì",
    "meaning": "諦める、放棄する",
    "example": "无论多难，我都不会放弃。",
    "exampleMeaning": "どんなに難しくても、私は諦めません。",
    "category": [
      "verb"
    ],
    "etymology": "「放」（はなす）＋「弃」（すてる）。放して捨てる→放棄。",
    "mnemonic": "「ファンチー」＝放して棄てる→あきらめる。"
  },
  {
    "id": 97,
    "hanzi": "份",
    "pinyin": "fèn",
    "meaning": "〜部、〜セット（量詞）",
    "example": "我买了一份报纸。",
    "exampleMeaning": "私は新聞を一部買いました。",
    "category": [
      "measure"
    ],
    "etymology": "「份」（人（亻）：にんべん）。〜部、〜セット（量詞）を表す。",
    "mnemonic": "「FN」＝份（にんべん）→「〜部、〜セット（量詞）」で覚える。"
  },
  {
    "id": 98,
    "hanzi": "丰富",
    "pinyin": "fēngfù",
    "meaning": "豊かな",
    "example": "这个超市的商品很丰富。",
    "exampleMeaning": "このスーパーの商品はとても豊富です。",
    "category": [
      "adjective",
      "verb"
    ],
    "etymology": "「丰」（ゆたか）＋「富」（とむ）。ゆたかに富む→豊富。",
    "mnemonic": "「フォンフー」＝豊か＋裕福。豊かで富んでいる。"
  },
  {
    "id": 99,
    "hanzi": "否则",
    "pinyin": "fǒuzé",
    "meaning": "さもなければ、そうでなければ",
    "example": "你必须努力学习，否则考不上大学。",
    "exampleMeaning": "しっかり勉強しなければなりません、さもなければ大学に受かりません。",
    "category": [
      "conjunction"
    ],
    "etymology": "「否」（口：くち）＋「则」（刀（刂）：りっとう）。さもなければ、そうでなければを表す。",
    "mnemonic": "「FUZ」＝否（くち）＋则（りっとう）→「さもなければ、そうでなければ」で覚える。"
  },
  {
    "id": 100,
    "hanzi": "符合",
    "pinyin": "fúhé",
    "meaning": "合致する、一致する",
    "example": "这些条件不符合我们的要求。",
    "exampleMeaning": "これらの条件は私たちの要求に合致しません。",
    "category": [
      "verb"
    ],
    "etymology": "「符」（竹（⺮）：たけかんむり）＋「合」（口：くち）。合致する、一致するを表す。",
    "mnemonic": "「FH」＝符（たけかんむり）＋合（くち）→「合致する、一致する」で覚える。"
  },
  {
    "id": 101,
    "hanzi": "父亲",
    "pinyin": "fùqīn",
    "meaning": "父親",
    "example": "我的父亲是一名医生。",
    "exampleMeaning": "私の父は医者です。",
    "category": [
      "noun"
    ],
    "measure": "位",
    "etymology": "「父」（ちち）＋「亲」（おや）。父の親→お父さん。",
    "mnemonic": "「フーチン」＝父＋親。父親。"
  },
  {
    "id": 102,
    "hanzi": "复印",
    "pinyin": "fùyìn",
    "meaning": "コピーする",
    "example": "请帮我把这份文件复印一下。",
    "exampleMeaning": "この書類をコピーしてください。",
    "category": [
      "verb"
    ],
    "etymology": "「复」（夊：すいにょう）＋「印」（卩：わりふ）。コピーするを表す。",
    "mnemonic": "「FYN」＝复（すいにょう）＋印（わりふ）→「コピーする」で覚える。"
  },
  {
    "id": 103,
    "hanzi": "复杂",
    "pinyin": "fùzá",
    "meaning": "複雑な",
    "example": "这个问题很复杂。",
    "exampleMeaning": "この問題はとても複雑です。",
    "category": [
      "adjective"
    ],
    "etymology": "「复」（かさなる）＋「杂」（まじる）。重なって混じる→複雑。",
    "mnemonic": "「フーザー」＝複＋雑。複雑に混ざる→ややこしい。"
  },
  {
    "id": 104,
    "hanzi": "富",
    "pinyin": "fù",
    "meaning": "裕福な、富む",
    "example": "这个地区资源丰富。",
    "exampleMeaning": "この地域は資源が豊かです。",
    "category": [
      "adjective"
    ],
    "etymology": "「富」（宀：うかんむり）。裕福な、富むを表す。",
    "mnemonic": "「F」＝富（うかんむり）→「裕福な、富む」で覚える。"
  },
  {
    "id": 105,
    "hanzi": "感动",
    "pinyin": "gǎndòng",
    "meaning": "感動する",
    "example": "这个故事让我很感动。",
    "exampleMeaning": "この話は私をとても感動させました。",
    "category": [
      "verb",
      "adjective"
    ],
    "etymology": "「感」（感じる）＋「动」（動く）。心が動かされる→感動。",
    "mnemonic": "「ガンドン」＝ガンガン動く心。感動で心が動く。"
  },
  {
    "id": 106,
    "hanzi": "感觉",
    "pinyin": "gǎnjué",
    "meaning": "感じる、感覚",
    "example": "我感觉今天比昨天冷。",
    "exampleMeaning": "今日は昨日より寒く感じます。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「感」（感じる）＋「觉」（気づく）。感じて気づく→感覚。",
    "mnemonic": "「ガンジュエ」＝感じを得る→感覚。"
  },
  {
    "id": 107,
    "hanzi": "感情",
    "pinyin": "gǎnqíng",
    "meaning": "感情",
    "example": "他们之间的感情很好。",
    "exampleMeaning": "彼らの間の感情はとても良いです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「感」（感じる）＋「情」（気持ち）。心が動く気持ち→感情。",
    "mnemonic": "「ガンチン」＝ガンガン感じるチン（心情）。"
  },
  {
    "id": 108,
    "hanzi": "感谢",
    "pinyin": "gǎnxiè",
    "meaning": "感謝する",
    "example": "非常感谢你的帮助。",
    "exampleMeaning": "あなたの助けにとても感謝しています。",
    "category": [
      "verb"
    ],
    "etymology": "「感」（感じる）＋「谢」（礼を言う）。恩を感じて礼を言う→感謝。",
    "mnemonic": "「ガンシエ」＝感じてシェアする感謝。"
  },
  {
    "id": 109,
    "hanzi": "敢",
    "pinyin": "gǎn",
    "meaning": "思い切って〜する、大胆に〜する",
    "example": "我不敢一个人走夜路。",
    "exampleMeaning": "私は一人で夜道を歩く勇気がありません。",
    "category": [
      "verb"
    ],
    "etymology": "「敢」（攵：のぶん）。思い切って〜する、大胆に〜するを表す。",
    "mnemonic": "「GN」＝敢（のぶん）→「思い切って〜する、大胆に〜する」で覚える。"
  },
  {
    "id": 110,
    "hanzi": "干",
    "pinyin": "gàn",
    "meaning": "する、やる",
    "example": "你在干什么？",
    "exampleMeaning": "何をしているの？",
    "category": [
      "verb"
    ],
    "etymology": "「干」（一：いち）。する、やるを表す。",
    "mnemonic": "「GN」＝干（いち）→「する、やる」で覚える。"
  },
  {
    "id": 111,
    "hanzi": "刚",
    "pinyin": "gāng",
    "meaning": "〜したばかり",
    "example": "我刚吃完饭。",
    "exampleMeaning": "私はご飯を食べたばかりです。",
    "category": [
      "adverb"
    ],
    "etymology": "「刚」（刀（刂）：りっとう）。〜したばかりを表す。",
    "mnemonic": "「GNG」＝刚（りっとう）→「〜したばかり」で覚える。"
  },
  {
    "id": 112,
    "hanzi": "高速公路",
    "pinyin": "gāosùgōnglù",
    "meaning": "高速道路",
    "example": "我们走高速公路去机场。",
    "exampleMeaning": "高速道路で空港に行きます。",
    "category": [
      "noun"
    ],
    "measure": "条",
    "etymology": "「高」（高：たかい）＋「速」（辶：しんにょう）＋「公」（八：はち）＋「路」（足（⻊）：あしへん）。高速道路を表す。",
    "mnemonic": "「GOSGNGL」＝高（たかい）＋速（しんにょう）＋公（はち）＋路（あしへん）→「高速道路」で覚える。"
  },
  {
    "id": 113,
    "hanzi": "各",
    "pinyin": "gè",
    "meaning": "各、それぞれの",
    "example": "各位老师、各位同学，大家好！",
    "exampleMeaning": "先生方、学生の皆さん、こんにちは！",
    "category": [
      "pronoun"
    ],
    "etymology": "「各」（口：くち）。各、それぞれのを表す。",
    "mnemonic": "「G」＝各（くち）→「各、それぞれの」で覚える。"
  },
  {
    "id": 114,
    "hanzi": "共同",
    "pinyin": "gòngtóng",
    "meaning": "共同の、共に",
    "example": "这是我们共同的目标。",
    "exampleMeaning": "これは私たちの共同の目標です。",
    "category": [
      "adjective"
    ],
    "etymology": "「共」（八：はち）＋「同」（口：くち）。共同の、共にを表す。",
    "mnemonic": "「GNGTNG」＝共（はち）＋同（くち）→「共同の、共に」で覚える。"
  },
  {
    "id": 115,
    "hanzi": "购物",
    "pinyin": "gòuwù",
    "meaning": "ショッピングする",
    "example": "周末我经常去超市购物。",
    "exampleMeaning": "週末はよくスーパーに買い物に行きます。",
    "category": [
      "verb"
    ],
    "etymology": "「购」（貝（贝）：かいへん）＋「物」（牛（牜）：うしへん）。ショッピングするを表す。",
    "mnemonic": "「GUW」＝购（かいへん）＋物（うしへん）→「ショッピングする」で覚える。"
  },
  {
    "id": 116,
    "hanzi": "够",
    "pinyin": "gòu",
    "meaning": "十分である、足りる",
    "example": "这些钱够不够？",
    "exampleMeaning": "このお金で足りますか？",
    "category": [
      "adjective"
    ],
    "etymology": "「够」（夕：ゆうべ）。十分である、足りるを表す。",
    "mnemonic": "「GU」＝够（ゆうべ）→「十分である、足りる」で覚える。"
  },
  {
    "id": 118,
    "hanzi": "估计",
    "pinyin": "gūjì",
    "meaning": "推定する、見積もる",
    "example": "我估计他今天不会来了。",
    "exampleMeaning": "私は彼が今日は来ないだろうと推定しています。",
    "category": [
      "verb"
    ],
    "etymology": "「估」（人（亻）：にんべん）＋「计」（言（讠）：ごんべん）。推定する、見積もるを表す。",
    "mnemonic": "「GJ」＝估（にんべん）＋计（ごんべん）→「推定する、見積もる」で覚える。"
  },
  {
    "id": 119,
    "hanzi": "鼓励",
    "pinyin": "gǔlì",
    "meaning": "励ます、奨励する",
    "example": "老师经常鼓励我们多读书。",
    "exampleMeaning": "先生はよく私たちにもっと本を読むよう励まします。",
    "category": [
      "verb"
    ],
    "etymology": "「鼓」（鼓：つづみ）＋「励」（力：ちから）。励ます、奨励するを表す。",
    "mnemonic": "「GL」＝鼓（つづみ）＋励（ちから）→「励ます、奨励する」で覚える。"
  },
  {
    "id": 120,
    "hanzi": "故意",
    "pinyin": "gùyì",
    "meaning": "わざと、故意に",
    "example": "他不是故意迟到的。",
    "exampleMeaning": "彼はわざと遅刻したわけではありません。",
    "category": [
      "adverb"
    ],
    "etymology": "「故」（攵：のぶん）＋「意」（心：こころ）。わざと、故意にを表す。",
    "mnemonic": "「GY」＝故（のぶん）＋意（こころ）→「わざと、故意に」で覚える。"
  },
  {
    "id": 121,
    "hanzi": "挂",
    "pinyin": "guà",
    "meaning": "掛ける、電話を切る",
    "example": "我把衣服挂在衣柜里。",
    "exampleMeaning": "服をクローゼットに掛けます。",
    "category": [
      "verb"
    ],
    "etymology": "「挂」（手（扌）：てへん）。掛ける、電話を切るを表す。",
    "mnemonic": "「コ」＝挂（てへん）→「掛ける、電話を切る」で覚える。"
  },
  {
    "id": 122,
    "hanzi": "关键",
    "pinyin": "guānjiàn",
    "meaning": "肝心な点、鍵",
    "example": "成功的关键是坚持。",
    "exampleMeaning": "成功の鍵は継続することです。",
    "category": [
      "noun",
      "adjective"
    ],
    "measure": "把",
    "etymology": "「关」（関所）＋「键」（かんぬき）。関所のかんぬき→最も重要なポイント＝キーポイント。",
    "mnemonic": "「グアンジェン」＝関所の鍵（かんぬき）→カギとなるもの＝キーポイント。"
  },
  {
    "id": 123,
    "hanzi": "观众",
    "pinyin": "guānzhòng",
    "meaning": "観客、視聴者",
    "example": "观众们热烈鼓掌。",
    "exampleMeaning": "観客たちは熱烈に拍手しました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「观」（見（见）：みる）＋「众」（人：ひと）。観客、視聴者を表す。",
    "mnemonic": "「コNZHNG」＝观（みる）＋众（ひと）→「観客、視聴者」で覚える。"
  },
  {
    "id": 124,
    "hanzi": "管理",
    "pinyin": "guǎnlǐ",
    "meaning": "管理する",
    "example": "他负责管理这个部门。",
    "exampleMeaning": "彼はこの部門の管理を担当しています。",
    "category": [
      "verb"
    ],
    "etymology": "「管」（くだ→とりしきる）＋「理」（おさめる）。取り締まり治める→管理。",
    "mnemonic": "「グアンリー」＝管（パイプ）＋理。パイプを通して治める→マネジメント。"
  },
  {
    "id": 125,
    "hanzi": "光",
    "pinyin": "guāng",
    "meaning": "〜だけ、ただ〜のみ",
    "example": "光说不做没有用。",
    "exampleMeaning": "言うだけでやらないのは役に立ちません。",
    "category": [
      "adverb"
    ],
    "etymology": "「光」（儿：にんにょう）。〜だけ、ただ〜のみを表す。",
    "mnemonic": "「コNG」＝光（にんにょう）→「〜だけ、ただ〜のみ」で覚える。"
  },
  {
    "id": 126,
    "hanzi": "广告",
    "pinyin": "guǎnggào",
    "meaning": "広告",
    "example": "我在网上看到了这个广告。",
    "exampleMeaning": "ネットでこの広告を見ました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「广」（広い）＋「告」（知らせる）。広く知らせる→広告。",
    "mnemonic": "「グアンガオ」＝広範囲に告知→広告。"
  },
  {
    "id": 127,
    "hanzi": "国籍",
    "pinyin": "guójí",
    "meaning": "国籍",
    "example": "请问你的国籍是什么？",
    "exampleMeaning": "あなたの国籍は何ですか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「国」（囗：くにがまえ）＋「籍」（竹（⺮）：たけかんむり）。国籍を表す。",
    "mnemonic": "「コJ」＝国（くにがまえ）＋籍（たけかんむり）→「国籍」で覚える。"
  },
  {
    "id": 128,
    "hanzi": "果汁",
    "pinyin": "guǒzhī",
    "meaning": "ジュース",
    "example": "我要一杯果汁。",
    "exampleMeaning": "ジュースを一杯ください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「果」（木：き）＋「汁」（水（氵）：さんずい）。ジュースを表す。",
    "mnemonic": "「コZH」＝果（き）＋汁（さんずい）→「ジュース」で覚える。"
  },
  {
    "id": 129,
    "hanzi": "过程",
    "pinyin": "guòchéng",
    "meaning": "過程、プロセス",
    "example": "学习的过程很重要。",
    "exampleMeaning": "学習の過程はとても重要です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「过」（辶：しんにょう）＋「程」（禾：のぎへん）。過程、プロセスを表す。",
    "mnemonic": "「コCHNG」＝过（しんにょう）＋程（のぎへん）→「過程、プロセス」で覚える。"
  },
  {
    "id": 130,
    "hanzi": "害羞",
    "pinyin": "hàixiū",
    "meaning": "恥ずかしがる",
    "example": "她很害羞，不喜欢在很多人面前说话。",
    "exampleMeaning": "彼女はとても恥ずかしがり屋で、多くの人の前で話すのが好きではありません。",
    "category": [
      "adjective"
    ],
    "etymology": "「害」（宀：うかんむり）＋「羞」（羊：ひつじ）。恥ずかしがるを表す。",
    "mnemonic": "「HIXI」＝害（うかんむり）＋羞（ひつじ）→「恥ずかしがる」で覚える。"
  },
  {
    "id": 131,
    "hanzi": "寒假",
    "pinyin": "hánjià",
    "meaning": "冬休み",
    "example": "寒假我们打算去滑雪。",
    "exampleMeaning": "冬休みに私たちはスキーに行く予定です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「寒」（さむい）＋「假」（やすみ）。寒い時期の休み→冬休み。",
    "mnemonic": "「ハンジャー」＝寒＋假。寒い時の休暇→冬休み。"
  },
  {
    "id": 132,
    "hanzi": "汗",
    "pinyin": "hàn",
    "meaning": "汗",
    "example": "天太热了，我出了很多汗。",
    "exampleMeaning": "天気が暑すぎて、たくさん汗をかきました。",
    "category": [
      "noun"
    ],
    "measure": "滴",
    "etymology": "「汗」（水（氵）：さんずい）。汗を表す。",
    "mnemonic": "「HN」＝汗（さんずい）→「汗」で覚える。"
  },
  {
    "id": 133,
    "hanzi": "航班",
    "pinyin": "hángbān",
    "meaning": "フライト、航空便",
    "example": "我的航班延误了。",
    "exampleMeaning": "私のフライトが遅延しました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「航」（舟：ふねへん）＋「班」（玉（王）：たまへん）。フライト、航空便を表す。",
    "mnemonic": "「HNGBN」＝航（ふねへん）＋班（たまへん）→「フライト、航空便」で覚える。"
  },
  {
    "id": 134,
    "hanzi": "好处",
    "pinyin": "hǎochu",
    "meaning": "利点、メリット",
    "example": "运动对身体有很多好处。",
    "exampleMeaning": "運動は体に多くのメリットがあります。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「好」（よい）＋「处」（ところ）。良いところ→利点。",
    "mnemonic": "「ハオチュー」＝良い所。良いポイント＝メリット。"
  },
  {
    "id": 135,
    "hanzi": "好像",
    "pinyin": "hǎoxiàng",
    "meaning": "〜のようだ",
    "example": "他好像不太高兴。",
    "exampleMeaning": "彼はあまり嬉しくなさそうです。",
    "category": [
      "adverb"
    ],
    "etymology": "「好」＋「像」（にる）。良く似ている→まるで〜のよう。",
    "mnemonic": "「ハオシャン」＝良く像（に）ている。〜みたいだ。"
  },
  {
    "id": 136,
    "hanzi": "号码",
    "pinyin": "hàomǎ",
    "meaning": "番号",
    "example": "请告诉我你的电话号码。",
    "exampleMeaning": "あなたの電話番号を教えてください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「号」（口：くち）＋「码」（石：いしへん）。番号を表す。",
    "mnemonic": "「HOM」＝号（くち）＋码（いしへん）→「番号」で覚える。"
  },
  {
    "id": 137,
    "hanzi": "合格",
    "pinyin": "hégé",
    "meaning": "合格する",
    "example": "他终于合格了。",
    "exampleMeaning": "彼はついに合格しました。",
    "category": [
      "verb"
    ],
    "etymology": "「合」（口：くち）＋「格」（木：きへん）。合格するを表す。",
    "mnemonic": "「HG」＝合（くち）＋格（きへん）→「合格する」で覚える。"
  },
  {
    "id": 138,
    "hanzi": "合适",
    "pinyin": "héshì",
    "meaning": "適切な、ちょうどいい",
    "example": "这件衣服很合适。",
    "exampleMeaning": "この服はとてもちょうどいいです。",
    "category": [
      "adjective"
    ],
    "etymology": "「合」（口：くち）＋「适」（辶：しんにょう）。適切な、ちょうどいいを表す。",
    "mnemonic": "「HSH」＝合（くち）＋适（しんにょう）→「適切な、ちょうどいい」で覚える。"
  },
  {
    "id": 139,
    "hanzi": "盒子",
    "pinyin": "hézi",
    "meaning": "箱、ボックス",
    "example": "这个盒子里面是什么？",
    "exampleMeaning": "この箱の中は何ですか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「盒」（皿：さら）＋「子」（子：こ）。箱、ボックスを表す。",
    "mnemonic": "「Hシ」＝盒（さら）＋子（こ）→「箱、ボックス」で覚える。"
  },
  {
    "id": 140,
    "hanzi": "后悔",
    "pinyin": "hòuhuǐ",
    "meaning": "後悔する",
    "example": "我后悔没有好好学中文。",
    "exampleMeaning": "中国語をちゃんと勉強しなかったことを後悔しています。",
    "category": [
      "verb"
    ],
    "etymology": "「后」（口：くち）＋「悔」（心（忄）：りっしんべん）。後悔するを表す。",
    "mnemonic": "「HUHU」＝后（くち）＋悔（りっしんべん）→「後悔する」で覚える。"
  },
  {
    "id": 141,
    "hanzi": "厚",
    "pinyin": "hòu",
    "meaning": "厚い",
    "example": "这本词典很厚。",
    "exampleMeaning": "この辞書はとても厚いです。",
    "category": [
      "adjective"
    ],
    "etymology": "「厚」（厂：がんだれ）。厚いを表す。",
    "mnemonic": "「HU」＝厚（がんだれ）→「厚い」で覚える。"
  },
  {
    "id": 142,
    "hanzi": "互联网",
    "pinyin": "hùliánwǎng",
    "meaning": "インターネット",
    "example": "互联网改变了我们的生活。",
    "exampleMeaning": "インターネットは私たちの生活を変えました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「互」（二：に）＋「联」（耳：みみへん）＋「网」（网：あみがしら）。インターネットを表す。",
    "mnemonic": "「HリNWNG」＝互（に）＋联（みみへん）＋网（あみがしら）→「インターネット」で覚える。"
  },
  {
    "id": 143,
    "hanzi": "互相",
    "pinyin": "hùxiāng",
    "meaning": "お互いに",
    "example": "同学之间应该互相帮助。",
    "exampleMeaning": "学生同士はお互いに助け合うべきです。",
    "category": [
      "adverb"
    ],
    "etymology": "「互」（二：に）＋「相」（目：め）。お互いにを表す。",
    "mnemonic": "「HセキNG」＝互（に）＋相（め）→「お互いに」で覚える。"
  },
  {
    "id": 144,
    "hanzi": "护士",
    "pinyin": "hùshi",
    "meaning": "看護師",
    "example": "她是医院的护士。",
    "exampleMeaning": "彼女は病院の看護師です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「护」（手（扌）：てへん）＋「士」（士：さむらい）。看護師を表す。",
    "mnemonic": "「Hシ」＝护（てへん）＋士（さむらい）→「看護師」で覚える。"
  },
  {
    "id": 145,
    "hanzi": "怀疑",
    "pinyin": "huáiyí",
    "meaning": "疑う、懐疑する",
    "example": "我怀疑这件事是真的。",
    "exampleMeaning": "この件が本当かどうか疑っています。",
    "category": [
      "verb"
    ],
    "etymology": "「怀」（心（忄）：りっしんべん）＋「疑」（疋：ひき）。疑う、懐疑するを表す。",
    "mnemonic": "「コIY」＝怀（りっしんべん）＋疑（ひき）→「疑う、懐疑する」で覚える。"
  },
  {
    "id": 146,
    "hanzi": "回忆",
    "pinyin": "huíyì",
    "meaning": "思い出、回想する",
    "example": "这些照片让我想起了很多回忆。",
    "exampleMeaning": "これらの写真は多くの思い出を思い起こさせます。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「回」（囗：くにがまえ）＋「忆」（心（忄）：りっしんべん）。思い出、回想するを表す。",
    "mnemonic": "「コY」＝回（くにがまえ）＋忆（りっしんべん）→「思い出、回想する」で覚える。"
  },
  {
    "id": 147,
    "hanzi": "活泼",
    "pinyin": "huópo",
    "meaning": "活発な",
    "example": "她是一个活泼的女孩。",
    "exampleMeaning": "彼女は活発な女の子です。",
    "category": [
      "adjective"
    ],
    "etymology": "「活」（水（氵）：さんずい）＋「泼」（水（氵）：さんずい）。活発なを表す。",
    "mnemonic": "「コハ」＝活（さんずい）＋泼（さんずい）→「活発な」で覚える。"
  },
  {
    "id": 148,
    "hanzi": "火",
    "pinyin": "huǒ",
    "meaning": "火",
    "example": "小心，有火！",
    "exampleMeaning": "気をつけて、火があります！",
    "category": [
      "noun"
    ],
    "measure": "场",
    "etymology": "「火」（火：ひ）。火を表す。",
    "mnemonic": "「コ」＝火（ひ）→「火」で覚える。"
  },
  {
    "id": 149,
    "hanzi": "获得",
    "pinyin": "huòdé",
    "meaning": "獲得する、得る",
    "example": "他获得了这次比赛的第一名。",
    "exampleMeaning": "彼は今回のコンテストで一等を獲得しました。",
    "category": [
      "verb"
    ],
    "etymology": "「获」（艹：くさかんむり）＋「得」（彳：ぎょうにんべん）。獲得する、得るを表す。",
    "mnemonic": "「コD」＝获（くさかんむり）＋得（ぎょうにんべん）→「獲得する、得る」で覚える。"
  },
  {
    "id": 150,
    "hanzi": "积极",
    "pinyin": "jījí",
    "meaning": "積極的な",
    "example": "他在工作中很积极。",
    "exampleMeaning": "彼は仕事でとても積極的です。",
    "category": [
      "adjective"
    ],
    "etymology": "「积」（つむ）＋「极」（きわみ）。積み重ねて極める→積極的。",
    "mnemonic": "「ジージー」＝自発的に積極。積み重ねて積極的に。"
  },
  {
    "id": 151,
    "hanzi": "积累",
    "pinyin": "jīlěi",
    "meaning": "蓄積する、積み重ねる",
    "example": "学习需要不断积累。",
    "exampleMeaning": "学習は絶えず積み重ねる必要があります。",
    "category": [
      "verb"
    ],
    "etymology": "「积」（禾：のぎへん）＋「累」（糸：いと）。蓄積する、積み重ねるを表す。",
    "mnemonic": "「JLI」＝积（のぎへん）＋累（いと）→「蓄積する、積み重ねる」で覚える。"
  },
  {
    "id": 152,
    "hanzi": "基础",
    "pinyin": "jīchǔ",
    "meaning": "基礎、基本",
    "example": "打好基础很重要。",
    "exampleMeaning": "基礎をしっかり固めることがとても重要です。",
    "category": [
      "noun"
    ],
    "measure": "本",
    "etymology": "「基」（土：つち）＋「础」（石：いしへん）。基礎、基本を表す。",
    "mnemonic": "「JCH」＝基（つち）＋础（いしへん）→「基礎、基本」で覚える。"
  },
  {
    "id": 153,
    "hanzi": "激动",
    "pinyin": "jīdòng",
    "meaning": "興奮する、感激する",
    "example": "听到这个消息，他很激动。",
    "exampleMeaning": "この知らせを聞いて、彼はとても興奮しました。",
    "category": [
      "adjective"
    ],
    "etymology": "「激」（水（氵）：さんずい）＋「动」（力：ちから）。興奮する、感激するを表す。",
    "mnemonic": "「JDNG」＝激（さんずい）＋动（ちから）→「興奮する、感激する」で覚える。"
  },
  {
    "id": 154,
    "hanzi": "及时",
    "pinyin": "jíshí",
    "meaning": "適切な時に、すぐに",
    "example": "你来得真及时！",
    "exampleMeaning": "ちょうどいい時に来てくれました！",
    "category": [
      "adjective"
    ],
    "etymology": "「及」（又：また）＋「时」（日：ひへん）。適切な時に、すぐにを表す。",
    "mnemonic": "「JSH」＝及（また）＋时（ひへん）→「適切な時に、すぐに」で覚える。"
  },
  {
    "id": 155,
    "hanzi": "即使",
    "pinyin": "jíshǐ",
    "meaning": "たとえ〜でも",
    "example": "即使下雨，我们也要去。",
    "exampleMeaning": "たとえ雨が降っても、私たちは行きます。",
    "category": [
      "conjunction"
    ],
    "etymology": "「即」（すなわち）＋「使」（たとえ）。たとえ即ち→たとえ〜でも。",
    "mnemonic": "「ジーシー」＝即便＋使。たとえ〜であっても。"
  },
  {
    "id": 156,
    "hanzi": "计划",
    "pinyin": "jìhuà",
    "meaning": "計画する、計画",
    "example": "你有什么计划？",
    "exampleMeaning": "何か計画がありますか？",
    "category": [
      "noun",
      "verb"
    ],
    "measure": "个",
    "etymology": "「计」（はかる）＋「划」（くぎる）。計って区切る→計画。",
    "mnemonic": "「ジーフア」＝計算して区分け→計画。"
  },
  {
    "id": 157,
    "hanzi": "记",
    "pinyin": "jì",
    "meaning": "覚える、書き留める",
    "example": "请记住这个号码。",
    "exampleMeaning": "この番号を覚えてください。",
    "category": [
      "verb"
    ],
    "etymology": "「记」（言（讠）：ごんべん）。覚える、書き留めるを表す。",
    "mnemonic": "「J」＝记（ごんべん）→「覚える、書き留める」で覚える。"
  },
  {
    "id": 158,
    "hanzi": "记者",
    "pinyin": "jìzhě",
    "meaning": "記者",
    "example": "他是一名新闻记者。",
    "exampleMeaning": "彼は新聞記者です。",
    "category": [
      "noun"
    ],
    "measure": "名",
    "etymology": "「记」（言（讠）：ごんべん）＋「者」（老：おいかんむり）。記者を表す。",
    "mnemonic": "「JZH」＝记（ごんべん）＋者（おいかんむり）→「記者」で覚える。"
  },
  {
    "id": 159,
    "hanzi": "技术",
    "pinyin": "jìshù",
    "meaning": "技術",
    "example": "信息技术发展很快。",
    "exampleMeaning": "情報技術の発展はとても速いです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「技」（わざ）＋「术」（じゅつ）。技＋術→技術。",
    "mnemonic": "「ジーシュー」＝技術。技と術＝テクノロジー。"
  },
  {
    "id": 160,
    "hanzi": "既然",
    "pinyin": "jìrán",
    "meaning": "〜である以上",
    "example": "既然来了，就多玩一会儿吧。",
    "exampleMeaning": "来た以上、もう少し遊んでいきましょう。",
    "category": [
      "conjunction"
    ],
    "etymology": "「既」（すでに）＋「然」（〜のよう）。既に然り→〜だからには。",
    "mnemonic": "「ジーラン」＝既に然り。既にそうなら→〜以上は。"
  },
  {
    "id": 161,
    "hanzi": "继续",
    "pinyin": "jìxù",
    "meaning": "継続する",
    "example": "请继续你的工作。",
    "exampleMeaning": "仕事を続けてください。",
    "category": [
      "verb"
    ],
    "etymology": "「继」（つぐ）＋「续」（つづく）。継いで続く→継続。",
    "mnemonic": "「ジーシュー」＝継続。継いで続ける→引き続き。"
  },
  {
    "id": 162,
    "hanzi": "家具",
    "pinyin": "jiājù",
    "meaning": "家具",
    "example": "新房子需要买一些家具。",
    "exampleMeaning": "新しい家には家具を買う必要があります。",
    "category": [
      "noun"
    ],
    "measure": "套",
    "etymology": "「家」（いえ）＋「具」（どうぐ）。家の道具→家具。",
    "mnemonic": "「ジャージュー」＝家＋具。家で使う器具→ファニチャー。"
  },
  {
    "id": 163,
    "hanzi": "假",
    "pinyin": "jiǎ",
    "meaning": "偽の、休暇",
    "example": "这个包是假的。",
    "exampleMeaning": "このバッグは偽物です。",
    "category": [
      "adjective"
    ],
    "etymology": "「假」（人（亻）：にんべん）。偽の、休暇を表す。",
    "mnemonic": "「キ」＝假（にんべん）→「偽の、休暇」で覚える。"
  },
  {
    "id": 164,
    "hanzi": "价格",
    "pinyin": "jiàgé",
    "meaning": "価格、値段",
    "example": "这家店的商品价格很便宜。",
    "exampleMeaning": "この店の商品の価格はとても安いです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「价」（あたい）＋「格」（きまり）。値の決まり→価格。",
    "mnemonic": "「ジャーガー」＝価（あたい）＋格（きまり）。値段の決まり→価格。"
  },
  {
    "id": 165,
    "hanzi": "坚持",
    "pinyin": "jiānchí",
    "meaning": "堅持する、やり抜く",
    "example": "他每天都坚持跑步。",
    "exampleMeaning": "彼は毎日ランニングを続けています。",
    "category": [
      "verb"
    ],
    "etymology": "「坚」（かたい）＋「持」（もつ）。固く持ち続ける→堅持。",
    "mnemonic": "「ジェンチー」＝堅くキープ（持つ）→堅持。"
  },
  {
    "id": 166,
    "hanzi": "减肥",
    "pinyin": "jiǎnféi",
    "meaning": "ダイエットする",
    "example": "她正在减肥。",
    "exampleMeaning": "彼女はダイエット中です。",
    "category": [
      "verb"
    ],
    "etymology": "「减」（冫：にすい）＋「肥」（月：にくづき）。ダイエットするを表す。",
    "mnemonic": "「キNFI」＝减（にすい）＋肥（にくづき）→「ダイエットする」で覚える。"
  },
  {
    "id": 167,
    "hanzi": "减少",
    "pinyin": "jiǎnshǎo",
    "meaning": "減らす、減少する",
    "example": "我们应该减少浪费。",
    "exampleMeaning": "私たちは無駄を減らすべきです。",
    "category": [
      "verb"
    ],
    "etymology": "「减」（冫：にすい）＋「少」（小：しょう）。減らす、減少するを表す。",
    "mnemonic": "「キNSHオ」＝减（にすい）＋少（しょう）→「減らす、減少する」で覚える。"
  },
  {
    "id": 168,
    "hanzi": "建议",
    "pinyin": "jiànyì",
    "meaning": "提案する、アドバイス",
    "example": "我建议你多休息。",
    "exampleMeaning": "もっと休むことをお勧めします。",
    "category": [
      "verb"
    ],
    "etymology": "「建」（廴：えんにょう）＋「议」（言（讠）：ごんべん）。提案する、アドバイスを表す。",
    "mnemonic": "「キNY」＝建（えんにょう）＋议（ごんべん）→「提案する、アドバイス」で覚える。"
  },
  {
    "id": 169,
    "hanzi": "将来",
    "pinyin": "jiānglái",
    "meaning": "将来",
    "example": "你将来的计划是什么？",
    "exampleMeaning": "将来の計画は何ですか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「将」（まさに〜しよう）＋「来」（くる）。これから来る→将来。",
    "mnemonic": "「ジャンライ」＝将に来る→これから来る＝将来。"
  },
  {
    "id": 170,
    "hanzi": "奖金",
    "pinyin": "jiǎngjīn",
    "meaning": "ボーナス、賞金",
    "example": "今年我们公司发了奖金。",
    "exampleMeaning": "今年、私たちの会社はボーナスを支給しました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「奖」（大：だい）＋「金」（金：かね）。ボーナス、賞金を表す。",
    "mnemonic": "「キNGJN」＝奖（だい）＋金（かね）→「ボーナス、賞金」で覚える。"
  },
  {
    "id": 171,
    "hanzi": "降低",
    "pinyin": "jiàngdī",
    "meaning": "低下させる、下げる",
    "example": "价格降低了很多。",
    "exampleMeaning": "価格がとても下がりました。",
    "category": [
      "verb"
    ],
    "etymology": "「降」（おりる）＋「低」（ひくい）。下りて低くなる→下げる。",
    "mnemonic": "「ジャンディー」＝降＋低。下がって低くなる→削減。"
  },
  {
    "id": 172,
    "hanzi": "交通",
    "pinyin": "jiāotōng",
    "meaning": "交通",
    "example": "北京的交通很堵。",
    "exampleMeaning": "北京の交通はとても渋滞しています。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「交」（まじわる）＋「通」（とおる）。交わり通る→交通。",
    "mnemonic": "「ジャオトン」＝交差点通る→交通。"
  },
  {
    "id": 173,
    "hanzi": "骄傲",
    "pinyin": "jiāo'ào",
    "meaning": "誇り高い、傲慢な",
    "example": "我为你感到骄傲。",
    "exampleMeaning": "私はあなたを誇りに思います。",
    "category": [
      "adjective"
    ],
    "etymology": "「骄」（馬（马）：うまへん）＋「傲」（人（亻）：にんべん）。誇り高い、傲慢なを表す。",
    "mnemonic": "「キオオ」＝骄（うまへん）＋傲（にんべん）→「誇り高い、傲慢な」で覚える。"
  },
  {
    "id": 174,
    "hanzi": "教",
    "pinyin": "jiāo",
    "meaning": "教える",
    "example": "妈妈教我做饭。",
    "exampleMeaning": "母は私に料理を教えます。",
    "category": [
      "verb"
    ],
    "etymology": "「教」（攵：のぶん）。教えるを表す。",
    "mnemonic": "「キオ」＝教（のぶん）→「教える」で覚える。"
  },
  {
    "id": 175,
    "hanzi": "郊区",
    "pinyin": "jiāoqū",
    "meaning": "郊外",
    "example": "我住在北京的郊区。",
    "exampleMeaning": "私は北京の郊外に住んでいます。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「郊」（邑（阝）：おおざと）＋「区」（匚：はこがまえ）。郊外を表す。",
    "mnemonic": "「キOQ」＝郊（おおざと）＋区（はこがまえ）→「郊外」で覚える。"
  },
  {
    "id": 176,
    "hanzi": "饺子",
    "pinyin": "jiǎozi",
    "meaning": "餃子",
    "example": "我最喜欢吃饺子。",
    "exampleMeaning": "私は餃子が一番好きです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「饺」（食（饣）：しょくへん）＋「子」（子：こ）。餃子を表す。",
    "mnemonic": "「キOZI」＝饺（しょくへん）＋子（こ）→「餃子」で覚える。"
  },
  {
    "id": 177,
    "hanzi": "教授",
    "pinyin": "jiàoshòu",
    "meaning": "教授",
    "example": "王教授是我们的中文老师。",
    "exampleMeaning": "王教授は私たちの中国語の先生です。",
    "category": [
      "noun"
    ],
    "measure": "位",
    "etymology": "「教」（攵：のぶん）＋「授」（手（扌）：てへん）。教授を表す。",
    "mnemonic": "「キOSHU」＝教（のぶん）＋授（てへん）→「教授」で覚える。"
  },
  {
    "id": 178,
    "hanzi": "教育",
    "pinyin": "jiàoyù",
    "meaning": "教育",
    "example": "教育是国家发展的基础。",
    "exampleMeaning": "教育は国家発展の基礎です。",
    "category": [
      "noun",
      "verb"
    ],
    "measure": "个",
    "etymology": "「教」（おしえる）＋「育」（そだてる）。教え育てる→教育。",
    "mnemonic": "「ジャオユー」＝教＋育。教えて育てる→教育。"
  },
  {
    "id": 179,
    "hanzi": "接受",
    "pinyin": "jiēshòu",
    "meaning": "受け入れる、承諾する",
    "example": "我接受你的邀请。",
    "exampleMeaning": "あなたの招待を受け入れます。",
    "category": [
      "verb"
    ],
    "etymology": "「接」（手（扌）：てへん）＋「受」（又：また）。受け入れる、承諾するを表す。",
    "mnemonic": "「キSHU」＝接（てへん）＋受（また）→「受け入れる、承諾する」で覚える。"
  },
  {
    "id": 180,
    "hanzi": "结果",
    "pinyin": "jiéguǒ",
    "meaning": "結果",
    "example": "考试结果什么时候出来？",
    "exampleMeaning": "試験結果はいつ出ますか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「结」（むすぶ）＋「果」（はたす）。結んで果たす→結果。",
    "mnemonic": "「ジェグオ」＝結＋果。結末の果実→リザルト。"
  },
  {
    "id": 181,
    "hanzi": "节省",
    "pinyin": "jiéshěng",
    "meaning": "節約する",
    "example": "我们要节省用水。",
    "exampleMeaning": "水を節約しましょう。",
    "category": [
      "verb"
    ],
    "etymology": "「节」（艹：くさかんむり）＋「省」（目：め）。節約するを表す。",
    "mnemonic": "「キSHNG」＝节（くさかんむり）＋省（め）→「節約する」で覚える。"
  },
  {
    "id": 182,
    "hanzi": "解释",
    "pinyin": "jiěshì",
    "meaning": "説明する",
    "example": "请解释一下这个词的意思。",
    "exampleMeaning": "この単語の意味を説明してください。",
    "category": [
      "verb"
    ],
    "etymology": "「解」（角：つのへん）＋「释」（釆：のごめ）。説明するを表す。",
    "mnemonic": "「キSH」＝解（つのへん）＋释（のごめ）→「説明する」で覚える。"
  },
  {
    "id": 183,
    "hanzi": "紧张",
    "pinyin": "jǐnzhāng",
    "meaning": "緊張している",
    "example": "考试前我很紧张。",
    "exampleMeaning": "試験前はとても緊張します。",
    "category": [
      "adjective",
      "verb"
    ],
    "etymology": "「紧」（きつい）＋「张」（はる）。きつく張る→緊張。",
    "mnemonic": "「ジンジャン」＝緊＋張。ピンと張り詰める→ナーバス。"
  },
  {
    "id": 184,
    "hanzi": "尽管",
    "pinyin": "jǐnguǎn",
    "meaning": "〜にもかかわらず",
    "example": "尽管很累，他还是继续工作。",
    "exampleMeaning": "とても疲れているにもかかわらず、彼は仕事を続けました。",
    "category": [
      "conjunction"
    ],
    "etymology": "「尽」（つくす）＋「管」（とりしまる）。尽くして管する→〜にもかかわらず。",
    "mnemonic": "「ジングアン」＝尽＋管。精一杯やっても→〜だけれども。"
  },
  {
    "id": 185,
    "hanzi": "进行",
    "pinyin": "jìnxíng",
    "meaning": "進める、行う",
    "example": "会议正在进行中。",
    "exampleMeaning": "会議は進行中です。",
    "category": [
      "verb"
    ],
    "etymology": "「进」（すすむ）＋「行」（おこなう）。進めて行う→進行。",
    "mnemonic": "「ジンシン」＝進＋行。進み行う→プログレス。"
  },
  {
    "id": 186,
    "hanzi": "禁止",
    "pinyin": "jìnzhǐ",
    "meaning": "禁止する",
    "example": "这里禁止吸烟。",
    "exampleMeaning": "ここは喫煙禁止です。",
    "category": [
      "verb"
    ],
    "etymology": "「禁」（いましめる）＋「止」（とめる）。禁じて止める→禁止。",
    "mnemonic": "「ジンジー」＝禁止。禁じて止める→ダメ。"
  },
  {
    "id": 187,
    "hanzi": "经济",
    "pinyin": "jīngjì",
    "meaning": "経済",
    "example": "中国的经济增长很快。",
    "exampleMeaning": "中国の経済成長はとても速いです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「经」＋「济」（すくう）。国を経て救う→経済。",
    "mnemonic": "「ジンジー」＝経世済民（経世済民）の略→経済。"
  },
  {
    "id": 188,
    "hanzi": "经历",
    "pinyin": "jīnglì",
    "meaning": "経験する、体験",
    "example": "这次旅行是一次难忘的经历。",
    "exampleMeaning": "今回の旅行は忘れられない経験でした。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「经」（糸（纟）：いとへん）＋「历」（厂：がんだれ）。経験する、体験を表す。",
    "mnemonic": "「JNGL」＝经（いとへん）＋历（がんだれ）→「経験する、体験」で覚える。"
  },
  {
    "id": 189,
    "hanzi": "竟然",
    "pinyin": "jìngrán",
    "meaning": "意外にも、なんと",
    "example": "他竟然忘了我的生日。",
    "exampleMeaning": "彼はなんと私の誕生日を忘れていました。",
    "category": [
      "adverb"
    ],
    "etymology": "「竟」（ついに）＋「然」（〜のよう）。ついに然り→意外にも。",
    "mnemonic": "「ジンラン」＝竟然。思いがけず→なんと。"
  },
  {
    "id": 190,
    "hanzi": "镜子",
    "pinyin": "jìngzi",
    "meaning": "鏡",
    "example": "她每天都要照镜子。",
    "exampleMeaning": "彼女は毎日鏡を見ます。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「镜」（金（钅）：かねへん）＋「子」（子：こ）。鏡を表す。",
    "mnemonic": "「JNGZI」＝镜（かねへん）＋子（こ）→「鏡」で覚える。"
  },
  {
    "id": 191,
    "hanzi": "究竟",
    "pinyin": "jiūjìng",
    "meaning": "結局、一体",
    "example": "你究竟想说什么？",
    "exampleMeaning": "一体何を言いたいのですか？",
    "category": [
      "adverb"
    ],
    "etymology": "「究」（穴：あなかんむり）＋「竟」（立：たつ）。結局、一体を表す。",
    "mnemonic": "「キJNG」＝究（あなかんむり）＋竟（たつ）→「結局、一体」で覚える。"
  },
  {
    "id": 192,
    "hanzi": "聚会",
    "pinyin": "jùhuì",
    "meaning": "集まり、パーティー",
    "example": "周末我们有个同学聚会。",
    "exampleMeaning": "週末に同窓会があります。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「聚」（あつまる）＋「会」（あう）。集まって会う→集まり・パーティー。",
    "mnemonic": "「ジューフイ」＝集まって会合→パーティ。"
  },
  {
    "id": 193,
    "hanzi": "拒绝",
    "pinyin": "jùjué",
    "meaning": "拒否する、断る",
    "example": "他拒绝了我的请求。",
    "exampleMeaning": "彼は私の依頼を断りました。",
    "category": [
      "verb"
    ],
    "etymology": "「拒」（こばむ）＋「绝」（たつ）。拒んで断つ→拒絶する。",
    "mnemonic": "「ジュージュエ」＝拒絶。拒んで絶つ→断る。"
  },
  {
    "id": 194,
    "hanzi": "距离",
    "pinyin": "jùlí",
    "meaning": "距離",
    "example": "从家到公司距离很远。",
    "exampleMeaning": "家から会社まで距離がとても遠いです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「距」（へだたる）＋「离」（はなれる）。隔たり離れる→距離。",
    "mnemonic": "「ジュリー」＝距離。隔たり＋離れる→ディスタンス。"
  },
  {
    "id": 195,
    "hanzi": "开心",
    "pinyin": "kāixīn",
    "meaning": "嬉しい、楽しい",
    "example": "今天我特别开心。",
    "exampleMeaning": "今日は特に嬉しいです。",
    "category": [
      "adjective"
    ],
    "etymology": "「开」（廾：にじゅうあし）＋「心」（心：こころ）。嬉しい、楽しいを表す。",
    "mnemonic": "「KIXN」＝开（にじゅうあし）＋心（こころ）→「嬉しい、楽しい」で覚える。"
  },
  {
    "id": 196,
    "hanzi": "看法",
    "pinyin": "kànfǎ",
    "meaning": "見方、考え方",
    "example": "你对这件事有什么看法？",
    "exampleMeaning": "この件についてどう思いますか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「看」（みる）＋「法」（かた）。見る方→見方・意見。",
    "mnemonic": "「カンファー」＝看法。見る方法→オピニオン。"
  },
  {
    "id": 197,
    "hanzi": "考虑",
    "pinyin": "kǎolǜ",
    "meaning": "考慮する、検討する",
    "example": "我还在考虑这个问题。",
    "exampleMeaning": "まだこの問題を検討しています。",
    "category": [
      "verb"
    ],
    "etymology": "「考」（かんがえる）＋「虑」（おもんぱかる）。考えて慮る→考慮。",
    "mnemonic": "「カオリュー」＝考慮。考えて配慮する→よく考える。"
  },
  {
    "id": 198,
    "hanzi": "烤鸭",
    "pinyin": "kǎoyā",
    "meaning": "北京ダック",
    "example": "北京烤鸭很有名。",
    "exampleMeaning": "北京ダックはとても有名です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「烤」（火：ひへん）＋「鸭」（鳥（鸟）：とり）。北京ダックを表す。",
    "mnemonic": "「KOY」＝烤（ひへん）＋鸭（とり）→「北京ダック」で覚える。"
  },
  {
    "id": 199,
    "hanzi": "可怜",
    "pinyin": "kělián",
    "meaning": "かわいそうな",
    "example": "那只小猫真可怜。",
    "exampleMeaning": "あの子猫は本当にかわいそうです。",
    "category": [
      "adjective"
    ],
    "etymology": "「可」＋「怜」（あわれむ）。哀れむことができる→かわいそう。",
    "mnemonic": "「カーリエン」＝可＋怜。哀れめる→気の毒。"
  },
  {
    "id": 200,
    "hanzi": "可是",
    "pinyin": "kěshì",
    "meaning": "しかし、でも",
    "example": "我想去，可是太远了。",
    "exampleMeaning": "行きたいですが、遠すぎます。",
    "category": [
      "conjunction"
    ],
    "etymology": "「可」（〜できるが）＋「是」（〜である）。〜であるが→しかし。",
    "mnemonic": "「カーシー」＝可是。文を逆接につなぐ→でも。"
  },
  {
    "id": 201,
    "hanzi": "可惜",
    "pinyin": "kěxī",
    "meaning": "残念な",
    "example": "真可惜，你没来参加。",
    "exampleMeaning": "本当に残念です、あなたは参加しませんでした。",
    "category": [
      "adjective"
    ],
    "etymology": "「可」＋「惜」（おしむ）。惜しむべき→残念だ。",
    "mnemonic": "「カーシー」＝可惜。惜しむことができる→ざんねん。"
  },
  {
    "id": 202,
    "hanzi": "肯定",
    "pinyin": "kěndìng",
    "meaning": "確かに、きっと",
    "example": "他肯定会来的。",
    "exampleMeaning": "彼はきっと来ます。",
    "category": [
      "adverb"
    ],
    "etymology": "「肯」（うべなう）＋「定」（さだめる）。承諾して定める→確かだ。",
    "mnemonic": "「コンディン」＝肯定。肯じて定める→絶対に。"
  },
  {
    "id": 203,
    "hanzi": "空",
    "pinyin": "kōng",
    "meaning": "空の、からっぽの",
    "example": "房间里一个人也没有，是空的。",
    "exampleMeaning": "部屋には誰もいなくて、空っぽです。",
    "category": [
      "adjective"
    ],
    "etymology": "「空」（穴：あなかんむり）。空の、からっぽのを表す。",
    "mnemonic": "「KNG」＝空（あなかんむり）→「空の、からっぽの」で覚える。"
  },
  {
    "id": 204,
    "hanzi": "空气",
    "pinyin": "kōngqì",
    "meaning": "空気",
    "example": "这里的空气很新鲜。",
    "exampleMeaning": "ここの空気はとても新鮮です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「空」（そら）＋「气」（き）。空の気→空気。",
    "mnemonic": "「コンチー」＝空気。空の気体→エアー。"
  },
  {
    "id": 205,
    "hanzi": "恐怕",
    "pinyin": "kǒngpà",
    "meaning": "おそらく〜だろう（心配）、〜ではないかと思う",
    "example": "恐怕今天要下雨。",
    "exampleMeaning": "今日はおそらく雨が降るでしょう。",
    "category": [
      "adverb"
    ],
    "etymology": "「恐」（おそれる）＋「怕」（こわがる）。恐れて怖がる→〜かもしれない（心配）。",
    "mnemonic": "「コンパー」＝恐＋怕。恐れて怖がる→ひょっとすると。"
  },
  {
    "id": 206,
    "hanzi": "苦",
    "pinyin": "kǔ",
    "meaning": "苦い、辛い",
    "example": "这个药很苦。",
    "exampleMeaning": "この薬はとても苦いです。",
    "category": [
      "adjective"
    ],
    "etymology": "「艹（草）」＋「古」（ふるい）。古い草→苦い。",
    "mnemonic": "古くなった草は苦い。草かんむり＋古。"
  },
  {
    "id": 207,
    "hanzi": "矿泉水",
    "pinyin": "kuàngquánshuǐ",
    "meaning": "ミネラルウォーター",
    "example": "我要一瓶矿泉水。",
    "exampleMeaning": "ミネラルウォーターを一本ください。",
    "category": [
      "noun"
    ],
    "measure": "瓶",
    "etymology": "「矿」（あらもの）＋「泉」（いずみ）＋「水」（みず）。鉱泉水→ミネラルウォーター。",
    "mnemonic": "「クアンチュエンシュイ」＝鉱泉水。鉱物を含む泉水→ミネラルウォーター。"
  },
  {
    "id": 208,
    "hanzi": "困",
    "pinyin": "kùn",
    "meaning": "眠い",
    "example": "我困了，想睡觉。",
    "exampleMeaning": "眠くなりました、寝たいです。",
    "category": [
      "adjective"
    ],
    "etymology": "「囗（囲い）」＋「木」。木が囲まれる→困難・眠い。",
    "mnemonic": "木が囲いの中に閉じ込められる→困る・眠い。"
  },
  {
    "id": 209,
    "hanzi": "困难",
    "pinyin": "kùnnan",
    "meaning": "困難な",
    "example": "学习汉语并不困难。",
    "exampleMeaning": "中国語を学ぶことはそれほど困難ではありません。",
    "category": [
      "adjective",
      "noun"
    ],
    "etymology": "「困」＋「难」（むずかしい）。困って難しい→困難。",
    "mnemonic": "「クンナン」＝困＋難。困窮＋難儀→難しい問題。"
  },
  {
    "id": 210,
    "hanzi": "垃圾桶",
    "pinyin": "lājītǒng",
    "meaning": "ゴミ箱",
    "example": "请把废纸扔进垃圾桶。",
    "exampleMeaning": "紙くずをゴミ箱に捨ててください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「垃」（土：つちへん）＋「圾」（土：つちへん）＋「桶」（木：きへん）。ゴミ箱を表す。",
    "mnemonic": "「LJTNG」＝垃（つちへん）＋圾（つちへん）＋桶（きへん）→「ゴミ箱」で覚える。"
  },
  {
    "id": 211,
    "hanzi": "来自",
    "pinyin": "láizì",
    "meaning": "〜から来る",
    "example": "我来自日本。",
    "exampleMeaning": "私は日本から来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「来」（木：き）＋「自」（自：みずから）。〜から来るを表す。",
    "mnemonic": "「LIZ」＝来（き）＋自（みずから）→「〜から来る」で覚える。"
  },
  {
    "id": 212,
    "hanzi": "懒",
    "pinyin": "lǎn",
    "meaning": "怠惰な、面倒くさがる",
    "example": "他太懒了，什么都不想做。",
    "exampleMeaning": "彼はあまりに怠惰で、何もやりたがりません。",
    "category": [
      "adjective"
    ],
    "etymology": "「懒」（心（忄）：りっしんべん）。怠惰な、面倒くさがるを表す。",
    "mnemonic": "「LN」＝懒（りっしんべん）→「怠惰な、面倒くさがる」で覚える。"
  },
  {
    "id": 213,
    "hanzi": "浪漫",
    "pinyin": "làngmàn",
    "meaning": "ロマンチックな",
    "example": "这个餐厅很浪漫。",
    "exampleMeaning": "このレストランはとてもロマンチックです。",
    "category": [
      "adjective"
    ],
    "etymology": "「浪」（なみ）＋「漫」（ひろい）。波が広がる→ロマンチック（音訳）。",
    "mnemonic": "「ランマン」＝ロマンチックの音訳。波が広がる様子。"
  },
  {
    "id": 214,
    "hanzi": "老虎",
    "pinyin": "lǎohǔ",
    "meaning": "虎",
    "example": "动物园里有两只老虎。",
    "exampleMeaning": "動物園に虎が二匹います。",
    "category": [
      "noun"
    ],
    "measure": "只",
    "etymology": "「老」（老：おいかんむり）＋「虎」（虍：とらかんむり）。虎を表す。",
    "mnemonic": "「LOH」＝老（おいかんむり）＋虎（とらかんむり）→「虎」で覚える。"
  },
  {
    "id": 215,
    "hanzi": "冷静",
    "pinyin": "lěngjìng",
    "meaning": "冷静な",
    "example": "遇到问题时要保持冷静。",
    "exampleMeaning": "問題に直面した時は冷静さを保ちましょう。",
    "category": [
      "adjective"
    ],
    "etymology": "「冷」（冫：にすい）＋「静」（青：あお）。冷静なを表す。",
    "mnemonic": "「LNGJNG」＝冷（にすい）＋静（あお）→「冷静な」で覚える。"
  },
  {
    "id": 216,
    "hanzi": "厉害",
    "pinyin": "lìhai",
    "meaning": "すごい、激しい",
    "example": "你中文说得真厉害！",
    "exampleMeaning": "あなたの中国語は本当にすごい！",
    "category": [
      "adjective"
    ],
    "etymology": "「厉」（厂：がんだれ）＋「害」（宀：うかんむり）。すごい、激しいを表す。",
    "mnemonic": "「Lカイ」＝厉（がんだれ）＋害（うかんむり）→「すごい、激しい」で覚える。"
  },
  {
    "id": 217,
    "hanzi": "力气",
    "pinyin": "lìqi",
    "meaning": "力、体力",
    "example": "他力气很大。",
    "exampleMeaning": "彼は力がとても強いです。",
    "category": [
      "noun"
    ],
    "measure": "种",
    "etymology": "「力」（力：ちから）＋「气」（气：きがまえ）。力、体力を表す。",
    "mnemonic": "「Lキ」＝力（ちから）＋气（きがまえ）→「力、体力」で覚える。"
  },
  {
    "id": 218,
    "hanzi": "例如",
    "pinyin": "lìrú",
    "meaning": "例えば",
    "example": "很多国家都有地铁，例如日本和中国。",
    "exampleMeaning": "多くの国に地下鉄があります、例えば日本と中国です。",
    "category": [
      "conjunction"
    ],
    "etymology": "「例」（ためし）＋「如」（ごとし）。例の如く→例えば。",
    "mnemonic": "「リールー」＝例如。例の如く→たとえば。"
  },
  {
    "id": 219,
    "hanzi": "连",
    "pinyin": "lián",
    "meaning": "〜さえも",
    "example": "他连早饭都没吃就去上班了。",
    "exampleMeaning": "彼は朝ごはんさえ食べずに出勤しました。",
    "category": [
      "preposition"
    ],
    "etymology": "「连」（辶：しんにょう）。〜さえもを表す。",
    "mnemonic": "「リN」＝连（しんにょう）→「〜さえも」で覚える。"
  },
  {
    "id": 220,
    "hanzi": "联系",
    "pinyin": "liánxì",
    "meaning": "連絡する",
    "example": "我们以后多联系。",
    "exampleMeaning": "これからもっと連絡を取りましょう。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「联」（つらなる）＋「系」（つながる）。連なり繋がる→連絡。",
    "mnemonic": "「リェンシー」＝連係。連なって繋がる→コンタクト。"
  },
  {
    "id": 221,
    "hanzi": "脸",
    "pinyin": "liǎn",
    "meaning": "顔",
    "example": "你的脸很红。",
    "exampleMeaning": "顔がとても赤いです。",
    "category": [
      "noun"
    ],
    "measure": "张",
    "etymology": "「脸」（月：にくづき）。顔を表す。",
    "mnemonic": "「リN」＝脸（にくづき）→「顔」で覚える。"
  },
  {
    "id": 222,
    "hanzi": "俩",
    "pinyin": "liǎ",
    "meaning": "二人、二つ",
    "example": "我们俩是好朋友。",
    "exampleMeaning": "私たち二人は良い友達です。",
    "category": [
      "numeral"
    ],
    "etymology": "「俩」（人（亻）：にんべん）。二人、二つを表す。",
    "mnemonic": "「リ」＝俩（にんべん）→「二人、二つ」で覚える。"
  },
  {
    "id": 223,
    "hanzi": "零钱",
    "pinyin": "língqián",
    "meaning": "小銭",
    "example": "我没有零钱。",
    "exampleMeaning": "小銭を持っていません。",
    "category": [
      "noun"
    ],
    "measure": "些",
    "etymology": "「零」（雨：あめかんむり）＋「钱」（金（钅）：かねへん）。小銭を表す。",
    "mnemonic": "「LNGQIN」＝零（あめかんむり）＋钱（かねへん）→「小銭」で覚える。"
  },
  {
    "id": 224,
    "hanzi": "另外",
    "pinyin": "lìngwài",
    "meaning": "別の、そのほか",
    "example": "我另外还有一个问题。",
    "exampleMeaning": "別にもう一つ質問があります。",
    "category": [
      "adverb"
    ],
    "etymology": "「另」（口：くち）＋「外」（夕：ゆうべ）。別の、そのほかを表す。",
    "mnemonic": "「LNGWI」＝另（くち）＋外（ゆうべ）→「別の、そのほか」で覚える。"
  },
  {
    "id": 225,
    "hanzi": "留",
    "pinyin": "liú",
    "meaning": "残す、留まる",
    "example": "请留在这里等我。",
    "exampleMeaning": "ここに残って私を待っていてください。",
    "category": [
      "verb"
    ],
    "etymology": "「留」（田：た）。残す、留まるを表す。",
    "mnemonic": "「リ」＝留（た）→「残す、留まる」で覚える。"
  },
  {
    "id": 226,
    "hanzi": "流利",
    "pinyin": "liúlì",
    "meaning": "流暢な",
    "example": "她中文说得很流利。",
    "exampleMeaning": "彼女は中国語をとても流暢に話します。",
    "category": [
      "adjective"
    ],
    "etymology": "「流」（水（氵）：さんずい）＋「利」（刀（刂）：りっとう）。流暢なを表す。",
    "mnemonic": "「リL」＝流（さんずい）＋利（りっとう）→「流暢な」で覚える。"
  },
  {
    "id": 227,
    "hanzi": "律师",
    "pinyin": "lǜshī",
    "meaning": "弁護士",
    "example": "他想成为一名律师。",
    "exampleMeaning": "彼は弁護士になりたいと思っています。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「律」（彳：ぎょうにんべん）＋「师」（巾：はば）。弁護士を表す。",
    "mnemonic": "「LSH」＝律（ぎょうにんべん）＋师（はば）→「弁護士」で覚える。"
  },
  {
    "id": 228,
    "hanzi": "乱",
    "pinyin": "luàn",
    "meaning": "乱れている、めちゃくちゃな",
    "example": "房间太乱了，快收拾一下。",
    "exampleMeaning": "部屋が散らかりすぎています、早く片付けてください。",
    "category": [
      "adjective"
    ],
    "etymology": "「乱」（乙：おつ）。乱れている、めちゃくちゃなを表す。",
    "mnemonic": "「ロN」＝乱（おつ）→「乱れている、めちゃくちゃな」で覚える。"
  },
  {
    "id": 229,
    "hanzi": "满意",
    "pinyin": "mǎnyì",
    "meaning": "満足する",
    "example": "我对这次旅行很满意。",
    "exampleMeaning": "今回の旅行にとても満足しています。",
    "category": [
      "adjective"
    ],
    "etymology": "「满」（みちる）＋「意」（こころ）。心が満ちる→満足。",
    "mnemonic": "「マンイー」＝満（みちる）＋意（こころ）。心が満たされる→満足。"
  },
  {
    "id": 230,
    "hanzi": "毛",
    "pinyin": "máo",
    "meaning": "毛、1角（貨幣単位）",
    "example": "这只猫的毛很软。",
    "exampleMeaning": "この猫の毛はとても柔らかいです。",
    "category": [
      "noun"
    ],
    "measure": "毛",
    "etymology": "「毛」（毛：け）。毛、1角（貨幣単位）を表す。",
    "mnemonic": "「Mオ」＝毛（け）→「毛、1角（貨幣単位）」で覚える。"
  },
  {
    "id": 231,
    "hanzi": "毛巾",
    "pinyin": "máojīn",
    "meaning": "タオル",
    "example": "请给我一条毛巾。",
    "exampleMeaning": "タオルを一枚ください。",
    "category": [
      "noun"
    ],
    "measure": "条",
    "etymology": "「毛」（毛：け）＋「巾」（巾：はば）。タオルを表す。",
    "mnemonic": "「MOJN」＝毛（け）＋巾（はば）→「タオル」で覚える。"
  },
  {
    "id": 232,
    "hanzi": "美丽",
    "pinyin": "měilì",
    "meaning": "美しい",
    "example": "这里的风景真美丽。",
    "exampleMeaning": "ここの風景は本当に美しいです。",
    "category": [
      "adjective"
    ],
    "etymology": "「美」（羊：ひつじ）＋「丽」（一：いち）。美しいを表す。",
    "mnemonic": "「MIL」＝美（ひつじ）＋丽（いち）→「美しい」で覚える。"
  },
  {
    "id": 233,
    "hanzi": "梦",
    "pinyin": "mèng",
    "meaning": "夢",
    "example": "我昨天做了一个好梦。",
    "exampleMeaning": "昨日いい夢を見ました。",
    "category": [
      "noun"
    ],
    "measure": "场",
    "etymology": "「梦」（木：き）。夢を表す。",
    "mnemonic": "「MNG」＝梦（き）→「夢」で覚える。"
  },
  {
    "id": 234,
    "hanzi": "迷路",
    "pinyin": "mílù",
    "meaning": "道に迷う",
    "example": "我在这个城市迷路了。",
    "exampleMeaning": "この街で道に迷いました。",
    "category": [
      "verb"
    ],
    "etymology": "「迷」（辶：しんにょう）＋「路」（足（⻊）：あしへん）。道に迷うを表す。",
    "mnemonic": "「ML」＝迷（しんにょう）＋路（あしへん）→「道に迷う」で覚える。"
  },
  {
    "id": 235,
    "hanzi": "密码",
    "pinyin": "mìmǎ",
    "meaning": "パスワード",
    "example": "我忘记了这个网站的密码。",
    "exampleMeaning": "このサイトのパスワードを忘れました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「密」（ひそか）＋「码」（しるし）。秘密の符号→パスワード。",
    "mnemonic": "「ミーマー」＝秘密のコード。秘密の番号＝パスワード。"
  },
  {
    "id": 236,
    "hanzi": "免费",
    "pinyin": "miǎnfèi",
    "meaning": "無料の",
    "example": "这个博物馆是免费的。",
    "exampleMeaning": "この博物館は無料です。",
    "category": [
      "adjective"
    ],
    "etymology": "「免」（まぬかれる）＋「费」（ひ）。費用を免れる→無料。",
    "mnemonic": "「ミェンフェイ」＝免除＋費用。費用免除→タダ。"
  },
  {
    "id": 237,
    "hanzi": "民族",
    "pinyin": "mínzú",
    "meaning": "民族",
    "example": "中国有56个民族。",
    "exampleMeaning": "中国には56の民族があります。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「民」（たみ）＋「族」（ぞく）。民の族→民族。",
    "mnemonic": "「ミンズー」＝民（たみ）＋族。人々の集団＝民族。"
  },
  {
    "id": 238,
    "hanzi": "母亲",
    "pinyin": "mǔqīn",
    "meaning": "母親",
    "example": "我的母亲是老师。",
    "exampleMeaning": "私の母は先生です。",
    "category": [
      "noun"
    ],
    "measure": "位",
    "etymology": "「母」（母：はは）＋「亲」（立：たつ）。母親を表す。",
    "mnemonic": "「MQN」＝母（はは）＋亲（たつ）→「母親」で覚える。"
  },
  {
    "id": 239,
    "hanzi": "目的",
    "pinyin": "mùdì",
    "meaning": "目的",
    "example": "学习的目的是提高自己。",
    "exampleMeaning": "学習の目的は自分を向上させることです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「目」（め）＋「的」（まと）。目の的→目的。",
    "mnemonic": "「ムーディー」＝目＋的（まと）。目の前の的＝目標・目的。"
  },
  {
    "id": 240,
    "hanzi": "耐心",
    "pinyin": "nàixīn",
    "meaning": "忍耐強い",
    "example": "做老师需要有耐心。",
    "exampleMeaning": "先生になるには忍耐が必要です。",
    "category": [
      "adjective"
    ],
    "etymology": "「耐」（而：しこうして）＋「心」（心：こころ）。忍耐強いを表す。",
    "mnemonic": "「NIXN」＝耐（しこうして）＋心（こころ）→「忍耐強い」で覚える。"
  },
  {
    "id": 241,
    "hanzi": "难道",
    "pinyin": "nándào",
    "meaning": "まさか〜ではあるまい（反語文）",
    "example": "难道你不知道吗？",
    "exampleMeaning": "まさか知らないのですか？",
    "category": [
      "adverb"
    ],
    "etymology": "「难」（隹：ふるとり）＋「道」（辶：しんにょう）。まさか〜ではあるまい（反語文）を表す。",
    "mnemonic": "「NNDオ」＝难（ふるとり）＋道（しんにょう）→「まさか〜ではあるまい（反語文）」で覚える。"
  },
  {
    "id": 242,
    "hanzi": "难受",
    "pinyin": "nánshòu",
    "meaning": "辛い、気分が悪い",
    "example": "我今天有点儿难受。",
    "exampleMeaning": "今日は少し気分が悪いです。",
    "category": [
      "adjective"
    ],
    "etymology": "「难」（隹：ふるとり）＋「受」（又：また）。辛い、気分が悪いを表す。",
    "mnemonic": "「NNSHU」＝难（ふるとり）＋受（また）→「辛い、気分が悪い」で覚える。"
  },
  {
    "id": 243,
    "hanzi": "内",
    "pinyin": "nèi",
    "meaning": "〜以内、内側",
    "example": "一个星期内完成工作。",
    "exampleMeaning": "一週間以内に仕事を終えます。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「内」（入：いる）。〜以内、内側を表す。",
    "mnemonic": "「NI」＝内（いる）→「〜以内、内側」で覚える。"
  },
  {
    "id": 244,
    "hanzi": "能力",
    "pinyin": "nénglì",
    "meaning": "能力",
    "example": "他有很强的学习能力。",
    "exampleMeaning": "彼はとても強い学習能力を持っています。",
    "category": [
      "noun"
    ],
    "measure": "种",
    "etymology": "「能」（あたう）＋「力」（ちから）。できる力→能力。",
    "mnemonic": "「ノンリー」＝可能な力→能力。"
  },
  {
    "id": 245,
    "hanzi": "年龄",
    "pinyin": "niánlíng",
    "meaning": "年齢",
    "example": "你的年龄是多少？",
    "exampleMeaning": "あなたの年齢はいくつですか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「年」（干：ほす）＋「龄」（齒（齿）：はへん）。年齢を表す。",
    "mnemonic": "「ニNLNG」＝年（ほす）＋龄（はへん）→「年齢」で覚える。"
  },
  {
    "id": 246,
    "hanzi": "弄",
    "pinyin": "nòng",
    "meaning": "する、やる、扱う",
    "example": "你怎么弄坏了我的电脑？",
    "exampleMeaning": "どうやって私のパソコンを壊したの？",
    "category": [
      "verb"
    ],
    "etymology": "「弄」（廾：にじゅうあし）。する、やる、扱うを表す。",
    "mnemonic": "「NNG」＝弄（にじゅうあし）→「する、やる、扱う」で覚える。"
  },
  {
    "id": 247,
    "hanzi": "努力",
    "pinyin": "nǔlì",
    "meaning": "努力する",
    "example": "只要你努力，一定会成功。",
    "exampleMeaning": "努力しさえすれば、必ず成功します。",
    "category": [
      "verb",
      "adjective",
      "adverb"
    ],
    "etymology": "「努」（つとめる）＋「力」（ちから）。力を尽くす→努力。",
    "mnemonic": "「ヌーリー」＝努めて力を入れる→努力。"
  },
  {
    "id": 248,
    "hanzi": "暖和",
    "pinyin": "nuǎnhuo",
    "meaning": "暖かい",
    "example": "今天的天气很暖和。",
    "exampleMeaning": "今日の天気はとても暖かいです。",
    "category": [
      "adjective"
    ],
    "etymology": "「暖」（日：ひへん）＋「和」（口：くち）。暖かいを表す。",
    "mnemonic": "「ヌNHUO」＝暖（ひへん）＋和（くち）→「暖かい」で覚える。"
  },
  {
    "id": 249,
    "hanzi": "偶尔",
    "pinyin": "ǒu'ěr",
    "meaning": "たまに、時々",
    "example": "我偶尔会去看电影。",
    "exampleMeaning": "たまに映画を見に行きます。",
    "category": [
      "adverb"
    ],
    "etymology": "「偶」（人（亻）：にんべん）＋「尔」（小：しょう）。たまに、時々を表す。",
    "mnemonic": "「UR」＝偶（にんべん）＋尔（しょう）→「たまに、時々」で覚える。"
  },
  {
    "id": 250,
    "hanzi": "排队",
    "pinyin": "páiduì",
    "meaning": "列に並ぶ",
    "example": "请排队买票。",
    "exampleMeaning": "列に並んでチケットを買ってください。",
    "category": [
      "verb"
    ],
    "etymology": "「排」（手（扌）：てへん）＋「队」（阜（阝）：こざとへん）。列に並ぶを表す。",
    "mnemonic": "「PIDU」＝排（てへん）＋队（こざとへん）→「列に並ぶ」で覚える。"
  },
  {
    "id": 251,
    "hanzi": "排列",
    "pinyin": "páiliè",
    "meaning": "並べる、配列する",
    "example": "请把这些书按大小排列。",
    "exampleMeaning": "これらの本を大きさ順に並べてください。",
    "category": [
      "verb"
    ],
    "etymology": "「排」（手（扌）：てへん）＋「列」（刀（刂）：りっとう）。並べる、配列するを表す。",
    "mnemonic": "「PILI」＝排（てへん）＋列（りっとう）→「並べる、配列する」で覚える。"
  },
  {
    "id": 252,
    "hanzi": "判断",
    "pinyin": "pànduàn",
    "meaning": "判断する",
    "example": "这件事很难判断对错。",
    "exampleMeaning": "この件は正誤の判断がとても難しいです。",
    "category": [
      "verb"
    ],
    "etymology": "「判」（刀（刂）：りっとう）＋「断」（斤：おの）。判断するを表す。",
    "mnemonic": "「PNDUN」＝判（りっとう）＋断（おの）→「判断する」で覚える。"
  },
  {
    "id": 253,
    "hanzi": "陪",
    "pinyin": "péi",
    "meaning": "付き添う、同伴する",
    "example": "我陪你去医院。",
    "exampleMeaning": "病院に付き添います。",
    "category": [
      "verb"
    ],
    "etymology": "「陪」（阜（阝）：こざとへん）。付き添う、同伴するを表す。",
    "mnemonic": "「PI」＝陪（こざとへん）→「付き添う、同伴する」で覚える。"
  },
  {
    "id": 254,
    "hanzi": "批评",
    "pinyin": "pīpíng",
    "meaning": "批判する",
    "example": "爸爸批评了我。",
    "exampleMeaning": "父に叱られました。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「批」（手（扌）：てへん）＋「评」（言（讠）：ごんべん）。批判するを表す。",
    "mnemonic": "「PPNG」＝批（てへん）＋评（ごんべん）→「批判する」で覚える。"
  },
  {
    "id": 255,
    "hanzi": "皮肤",
    "pinyin": "pífū",
    "meaning": "皮膚",
    "example": "她的皮肤很好。",
    "exampleMeaning": "彼女の肌はとてもきれいです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「皮」（皮：けがわ）＋「肤」（月：にくづき）。皮膚を表す。",
    "mnemonic": "「PF」＝皮（けがわ）＋肤（にくづき）→「皮膚」で覚える。"
  },
  {
    "id": 256,
    "hanzi": "篇",
    "pinyin": "piān",
    "meaning": "〜編、〜篇（量詞）",
    "example": "我写了一篇作文。",
    "exampleMeaning": "作文を一篇書きました。",
    "category": [
      "measure"
    ],
    "etymology": "「篇」（竹（⺮）：たけかんむり）。〜編、〜篇（量詞）を表す。",
    "mnemonic": "「ヒN」＝篇（たけかんむり）→「〜編、〜篇（量詞）」で覚える。"
  },
  {
    "id": 257,
    "hanzi": "骗",
    "pinyin": "piàn",
    "meaning": "騙す",
    "example": "不要骗我。",
    "exampleMeaning": "私を騙さないでください。",
    "category": [
      "verb"
    ],
    "etymology": "「骗」（馬（马）：うまへん）。騙すを表す。",
    "mnemonic": "「ヒN」＝骗（うまへん）→「騙す」で覚える。"
  },
  {
    "id": 258,
    "hanzi": "乒乓球",
    "pinyin": "pīngpāngqiú",
    "meaning": "卓球",
    "example": "中国人很喜欢打乒乓球。",
    "exampleMeaning": "中国人は卓球をするのがとても好きです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「乒」（丿：の）＋「乓」（丿：の）＋「球」（玉（王）：たまへん）。卓球を表す。",
    "mnemonic": "「PNGPNGQI」＝乒（の）＋乓（の）＋球（たまへん）→「卓球」で覚える。"
  },
  {
    "id": 259,
    "hanzi": "平时",
    "pinyin": "píngshí",
    "meaning": "普段、平素",
    "example": "我平时六点起床。",
    "exampleMeaning": "普段は6時に起きます。",
    "category": [
      "adverb"
    ],
    "etymology": "「平」（干：ほす）＋「时」（日：ひへん）。普段、平素を表す。",
    "mnemonic": "「PNGSH」＝平（ほす）＋时（ひへん）→「普段、平素」で覚える。"
  },
  {
    "id": 260,
    "hanzi": "破",
    "pinyin": "pò",
    "meaning": "破れる、壊れる",
    "example": "我的鞋子破了。",
    "exampleMeaning": "私の靴が破れました。",
    "category": [
      "adjective"
    ],
    "etymology": "「破」（石：いしへん）。破れる、壊れるを表す。",
    "mnemonic": "「P」＝破（いしへん）→「破れる、壊れる」で覚える。"
  },
  {
    "id": 261,
    "hanzi": "葡萄",
    "pinyin": "pútao",
    "meaning": "ブドウ",
    "example": "我喜欢吃葡萄。",
    "exampleMeaning": "私はブドウを食べるのが好きです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「葡」（艹：くさかんむり）＋「萄」（艹：くさかんむり）。ブドウを表す。",
    "mnemonic": "「Pトウ」＝葡（くさかんむり）＋萄（くさかんむり）→「ブドウ」で覚える。"
  },
  {
    "id": 262,
    "hanzi": "普遍",
    "pinyin": "pǔbiàn",
    "meaning": "普遍的な、一般的な",
    "example": "这种现象很普遍。",
    "exampleMeaning": "この現象はとても普遍的です。",
    "category": [
      "adjective"
    ],
    "etymology": "「普」（日：ひ）＋「遍」（辶：しんにょう）。普遍的な、一般的なを表す。",
    "mnemonic": "「PヒN」＝普（ひ）＋遍（しんにょう）→「普遍的な、一般的な」で覚える。"
  },
  {
    "id": 263,
    "hanzi": "其次",
    "pinyin": "qícì",
    "meaning": "次に、第二に",
    "example": "首先要注意安全，其次才是速度。",
    "exampleMeaning": "まず安全に注意し、その次が速度です。",
    "category": [
      "conjunction"
    ],
    "etymology": "「其」（八：はち）＋「次」（欠：あくび）。次に、第二にを表す。",
    "mnemonic": "「QC」＝其（はち）＋次（あくび）→「次に、第二に」で覚える。"
  },
  {
    "id": 264,
    "hanzi": "其中",
    "pinyin": "qízhōng",
    "meaning": "その中で",
    "example": "我们班有30个学生，其中10个是男生。",
    "exampleMeaning": "クラスには30人の学生がいて、そのうち10人が男子です。",
    "category": [
      "pronoun"
    ],
    "etymology": "「其」（八：はち）＋「中」（丨：たてぼう）。その中でを表す。",
    "mnemonic": "「QZHNG」＝其（はち）＋中（たてぼう）→「その中で」で覚える。"
  },
  {
    "id": 265,
    "hanzi": "气候",
    "pinyin": "qìhòu",
    "meaning": "気候",
    "example": "日本的气候很温和。",
    "exampleMeaning": "日本の気候はとても温暖です。",
    "category": [
      "noun"
    ],
    "measure": "种",
    "etymology": "「气」（气：きがまえ）＋「候」（人（亻）：にんべん）。気候を表す。",
    "mnemonic": "「QHU」＝气（きがまえ）＋候（にんべん）→「気候」で覚える。"
  },
  {
    "id": 266,
    "hanzi": "千万",
    "pinyin": "qiānwàn",
    "meaning": "必ず、絶対に",
    "example": "你千万别忘了。",
    "exampleMeaning": "絶対に忘れないでください。",
    "category": [
      "adverb"
    ],
    "etymology": "「千」（十：じゅう）＋「万」（一：いち）。必ず、絶対にを表す。",
    "mnemonic": "「キNWN」＝千（じゅう）＋万（いち）→「必ず、絶対に」で覚える。"
  },
  {
    "id": 267,
    "hanzi": "签证",
    "pinyin": "qiānzhèng",
    "meaning": "ビザ",
    "example": "我要申请中国的签证。",
    "exampleMeaning": "中国のビザを申請します。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「签」（竹（⺮）：たけかんむり）＋「证」（言（讠）：ごんべん）。ビザを表す。",
    "mnemonic": "「キNZHNG」＝签（たけかんむり）＋证（ごんべん）→「ビザ」で覚える。"
  },
  {
    "id": 268,
    "hanzi": "敲",
    "pinyin": "qiāo",
    "meaning": "ノックする、叩く",
    "example": "请敲门。",
    "exampleMeaning": "ドアをノックしてください。",
    "category": [
      "verb"
    ],
    "etymology": "「敲」（攵：のぶん）。ノックする、叩くを表す。",
    "mnemonic": "「キオ」＝敲（のぶん）→「ノックする、叩く」で覚える。"
  },
  {
    "id": 269,
    "hanzi": "桥",
    "pinyin": "qiáo",
    "meaning": "橋",
    "example": "这座桥很长。",
    "exampleMeaning": "この橋はとても長いです。",
    "category": [
      "noun"
    ],
    "measure": "座",
    "etymology": "「桥」（木：きへん）。橋を表す。",
    "mnemonic": "「キオ」＝桥（きへん）→「橋」で覚える。"
  },
  {
    "id": 270,
    "hanzi": "巧克力",
    "pinyin": "qiǎokèlì",
    "meaning": "チョコレート",
    "example": "女孩子都喜欢吃巧克力。",
    "exampleMeaning": "女の子はみんなチョコレートを食べるのが好きです。",
    "category": [
      "noun"
    ],
    "measure": "块",
    "etymology": "「巧」（工：たくみ）＋「克」（儿：にんにょう）＋「力」（力：ちから）。チョコレートを表す。",
    "mnemonic": "「キOKL」＝巧（たくみ）＋克（にんにょう）＋力（ちから）→「チョコレート」で覚える。"
  },
  {
    "id": 271,
    "hanzi": "亲戚",
    "pinyin": "qīnqī",
    "meaning": "親戚",
    "example": "春节我们去拜访亲戚。",
    "exampleMeaning": "春節には親戚を訪問します。",
    "category": [
      "noun"
    ],
    "measure": "位",
    "etymology": "「亲」（立：たつ）＋「戚」（戈：ほこづくり）。親戚を表す。",
    "mnemonic": "「QNQ」＝亲（たつ）＋戚（ほこづくり）→「親戚」で覚える。"
  },
  {
    "id": 272,
    "hanzi": "轻",
    "pinyin": "qīng",
    "meaning": "軽い",
    "example": "这个箱子很轻。",
    "exampleMeaning": "このスーツケースはとても軽いです。",
    "category": [
      "adjective"
    ],
    "etymology": "「轻」（車（车）：くるまへん）。軽いを表す。",
    "mnemonic": "「QNG」＝轻（くるまへん）→「軽い」で覚える。"
  },
  {
    "id": 273,
    "hanzi": "轻松",
    "pinyin": "qīngsōng",
    "meaning": "気楽な、リラックスした",
    "example": "考试结束后我感到很轻松。",
    "exampleMeaning": "試験が終わってとても気楽になりました。",
    "category": [
      "adjective"
    ],
    "etymology": "「轻」（車（车）：くるまへん）＋「松」（木：きへん）。気楽な、リラックスしたを表す。",
    "mnemonic": "「QNGSNG」＝轻（くるまへん）＋松（きへん）→「気楽な、リラックスした」で覚える。"
  },
  {
    "id": 274,
    "hanzi": "情况",
    "pinyin": "qíngkuàng",
    "meaning": "状況",
    "example": "请告诉我现在的情况。",
    "exampleMeaning": "今の状況を教えてください。",
    "category": [
      "noun"
    ],
    "measure": "种",
    "etymology": "「情」（心（忄）：こころ）＋「况」（冫：にすい）。状況を表す。",
    "mnemonic": "「QNGKUNG」＝情（こころ）＋况（にすい）→「状況」で覚える。"
  },
  {
    "id": 275,
    "hanzi": "区别",
    "pinyin": "qūbié",
    "meaning": "区別、違い",
    "example": "这两个词有什么区别？",
    "exampleMeaning": "この二つの単語はどう違いますか？",
    "category": [
      "noun",
      "verb"
    ],
    "measure": "个",
    "etymology": "「区」（匚：はこがまえ）＋「别」（刀（刂）：りっとう）。区別、違いを表す。",
    "mnemonic": "「Qヒ」＝区（はこがまえ）＋别（りっとう）→「区別、違い」で覚える。"
  },
  {
    "id": 276,
    "hanzi": "取",
    "pinyin": "qǔ",
    "meaning": "取る、受け取る",
    "example": "我去银行取钱。",
    "exampleMeaning": "銀行にお金を引き出しに行きます。",
    "category": [
      "verb"
    ],
    "etymology": "「取」（又：また）。取る、受け取るを表す。",
    "mnemonic": "「Q」＝取（また）→「取る、受け取る」で覚える。"
  },
  {
    "id": 277,
    "hanzi": "全部",
    "pinyin": "quánbù",
    "meaning": "全部、すべて",
    "example": "全部学生都按时到了。",
    "exampleMeaning": "全ての学生が時間通りに着きました。",
    "category": [
      "pronoun"
    ],
    "etymology": "「全」（入：いる）＋「部」（邑（阝）：おおざと）。全部、すべてを表す。",
    "mnemonic": "「クNB」＝全（いる）＋部（おおざと）→「全部、すべて」で覚える。"
  },
  {
    "id": 278,
    "hanzi": "缺点",
    "pinyin": "quēdiǎn",
    "meaning": "欠点",
    "example": "每个人都有自己的缺点。",
    "exampleMeaning": "誰にでも自分の欠点があります。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「缺」（缶：ほとぎ）＋「点」（火（灬）：れっか）。欠点を表す。",
    "mnemonic": "「クテキN」＝缺（ほとぎ）＋点（れっか）→「欠点」で覚える。"
  },
  {
    "id": 279,
    "hanzi": "缺少",
    "pinyin": "quēshǎo",
    "meaning": "不足する、欠ける",
    "example": "这个地方缺少水。",
    "exampleMeaning": "この場所は水が不足しています。",
    "category": [
      "verb"
    ],
    "etymology": "「缺」（缶：ほとぎ）＋「少」（小：しょう）。不足する、欠けるを表す。",
    "mnemonic": "「クSHオ」＝缺（ほとぎ）＋少（しょう）→「不足する、欠ける」で覚える。"
  },
  {
    "id": 280,
    "hanzi": "却",
    "pinyin": "què",
    "meaning": "しかし、ところが",
    "example": "我想去，却去不了。",
    "exampleMeaning": "行きたいのに、行けません。",
    "category": [
      "adverb"
    ],
    "etymology": "「却」（卩：わりふ）。しかし、ところがを表す。",
    "mnemonic": "「ク」＝却（わりふ）→「しかし、ところが」で覚える。"
  },
  {
    "id": 281,
    "hanzi": "然而",
    "pinyin": "rán'ér",
    "meaning": "しかしながら、だが",
    "example": "他工作很努力，然而效果并不好。",
    "exampleMeaning": "彼は仕事にとても努力したが、効果はあまり良くなかった。",
    "category": [
      "conjunction"
    ],
    "etymology": "「然」（火（灬）：れっか）＋「而」（而：しこうして）。しかしながら、だがを表す。",
    "mnemonic": "「RNR」＝然（れっか）＋而（しこうして）→「しかしながら、だが」で覚える。"
  },
  {
    "id": 282,
    "hanzi": "热闹",
    "pinyin": "rènao",
    "meaning": "賑やかな",
    "example": "春节的时候这里很热闹。",
    "exampleMeaning": "春節の時はここはとても賑やかです。",
    "category": [
      "adjective"
    ],
    "etymology": "「热」（あつい）＋「闹」（さわぐ）。熱く騒ぐ→賑やか。",
    "mnemonic": "「ルゥーナオ」＝熱＋鬧。熱気で騒がしい→にぎやか。"
  },
  {
    "id": 283,
    "hanzi": "任何",
    "pinyin": "rènhé",
    "meaning": "いかなる、どんな",
    "example": "任何时候都可以来找我。",
    "exampleMeaning": "いつでも私のところに来てください。",
    "category": [
      "pronoun"
    ],
    "etymology": "「任」（人（亻）：にんべん）＋「何」（人（亻）：にんべん）。いかなる、どんなを表す。",
    "mnemonic": "「RNH」＝任（にんべん）＋何（にんべん）→「いかなる、どんな」で覚える。"
  },
  {
    "id": 284,
    "hanzi": "扔",
    "pinyin": "rēng",
    "meaning": "投げる、捨てる",
    "example": "请不要乱扔垃圾。",
    "exampleMeaning": "ゴミをむやみに捨てないでください。",
    "category": [
      "verb"
    ],
    "etymology": "「扔」（手（扌）：てへん）。投げる、捨てるを表す。",
    "mnemonic": "「RNG」＝扔（てへん）→「投げる、捨てる」で覚える。"
  },
  {
    "id": 285,
    "hanzi": "仍然",
    "pinyin": "réngrán",
    "meaning": "依然として、相変わらず",
    "example": "他仍然没有回答我的问题。",
    "exampleMeaning": "彼は依然として私の質問に答えていません。",
    "category": [
      "adverb"
    ],
    "etymology": "「仍」（人（亻）：にんべん）＋「然」（火（灬）：れっか）。依然として、相変わらずを表す。",
    "mnemonic": "「RNGRN」＝仍（にんべん）＋然（れっか）→「依然として、相変わらず」で覚える。"
  },
  {
    "id": 286,
    "hanzi": "日记",
    "pinyin": "rìjì",
    "meaning": "日記",
    "example": "我每天都写日记。",
    "exampleMeaning": "私は毎日日記を書きます。",
    "category": [
      "noun"
    ],
    "measure": "本",
    "etymology": "「日」（日：ひ）＋「记」（言（讠）：ごんべん）。日記を表す。",
    "mnemonic": "「RJ」＝日（ひ）＋记（ごんべん）→「日記」で覚える。"
  },
  {
    "id": 287,
    "hanzi": "入口",
    "pinyin": "rùkǒu",
    "meaning": "入口",
    "example": "入口在那边。",
    "exampleMeaning": "入口はあちらです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「入」（はいる）＋「口」（くち）。入り口→エントランス。",
    "mnemonic": "「ルーコウ」＝入る口。入るための口→入口。"
  },
  {
    "id": 288,
    "hanzi": "散步",
    "pinyin": "sànbù",
    "meaning": "散歩する",
    "example": "晚饭后我们去散步吧。",
    "exampleMeaning": "夕食後に散歩に行きましょう。",
    "category": [
      "verb"
    ],
    "etymology": "「散」（ちらす）＋「步」（あるく）。散らして歩く→散歩。",
    "mnemonic": "「サンブー」＝散＋歩。散策＋歩く→散歩する。"
  },
  {
    "id": 289,
    "hanzi": "森林",
    "pinyin": "sēnlín",
    "meaning": "森林",
    "example": "这片森林很美。",
    "exampleMeaning": "この森林はとても美しいです。",
    "category": [
      "noun"
    ],
    "measure": "片",
    "etymology": "「森」（もり）＋「林」（はやし）。森＋林→森林。",
    "mnemonic": "「センリン」＝木が5本。森は木が3つ、林は木が2つ。"
  },
  {
    "id": 290,
    "hanzi": "沙发",
    "pinyin": "shāfā",
    "meaning": "ソファー",
    "example": "我坐在沙发上看电视。",
    "exampleMeaning": "ソファーに座ってテレビを見ます。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "英語 \"sofa\" の音訳。",
    "mnemonic": "「シャーファー」＝sofaの音訳。砂（沙）＋発（发）で sofa。"
  },
  {
    "id": 291,
    "hanzi": "伤心",
    "pinyin": "shāngxīn",
    "meaning": "悲しい、心が痛む",
    "example": "听到这个消息我很伤心。",
    "exampleMeaning": "この知らせを聞いてとても悲しくなりました。",
    "category": [
      "adjective"
    ],
    "etymology": "「伤」（人（亻）：にんべん）＋「心」（心：こころ）。悲しい、心が痛むを表す。",
    "mnemonic": "「SHNGXN」＝伤（にんべん）＋心（こころ）→「悲しい、心が痛む」で覚える。"
  },
  {
    "id": 292,
    "hanzi": "社会",
    "pinyin": "shèhuì",
    "meaning": "社会",
    "example": "每个人都生活在社会中。",
    "exampleMeaning": "誰もが社会の中で生きています。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「社」（示（礻）：しめすへん）＋「会」（人：ひと）。社会を表す。",
    "mnemonic": "「SHコ」＝社（しめすへん）＋会（ひと）→「社会」で覚える。"
  },
  {
    "id": 293,
    "hanzi": "申请",
    "pinyin": "shēnqǐng",
    "meaning": "申請する",
    "example": "我要申请这份工作。",
    "exampleMeaning": "この仕事に応募します。",
    "category": [
      "verb"
    ],
    "etymology": "「申」（田：た）＋「请」（言（讠）：ごんべん）。申請するを表す。",
    "mnemonic": "「SHNQNG」＝申（た）＋请（ごんべん）→「申請する」で覚える。"
  },
  {
    "id": 294,
    "hanzi": "甚至",
    "pinyin": "shènzhì",
    "meaning": "〜でさえも",
    "example": "他甚至不会写自己的名字。",
    "exampleMeaning": "彼は自分の名前さえも書けません。",
    "category": [
      "adverb"
    ],
    "etymology": "「甚」（はなはだ）＋「至」（いたる）。甚だしく至る→〜さえ。",
    "mnemonic": "「シェンジー」＝甚だしく至る。強調したい時に→〜でさえ。"
  },
  {
    "id": 295,
    "hanzi": "生活",
    "pinyin": "shēnghuó",
    "meaning": "生活、暮らす",
    "example": "我很喜欢这里的生活。",
    "exampleMeaning": "ここの生活がとても好きです。",
    "category": [
      "noun",
      "verb"
    ],
    "measure": "种",
    "etymology": "「生」＋「活」（いきる）。生きて活きる→生活。",
    "mnemonic": "「シォンフオ」＝生活。生きて活動する→暮らし。"
  },
  {
    "id": 296,
    "hanzi": "性别",
    "pinyin": "xìngbié",
    "meaning": "性別",
    "example": "请在表格上填写你的性别。",
    "exampleMeaning": "用紙に性別を記入してください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「性」（さが）＋「别」（わける）。性で分ける→性別。",
    "mnemonic": "「シンビエ」＝性＋別。性で区別する→ジェンダー。"
  },
  {
    "id": 297,
    "hanzi": "性格",
    "pinyin": "xìnggé",
    "meaning": "性格",
    "example": "她的性格很开朗。",
    "exampleMeaning": "彼女の性格はとても明るいです。",
    "category": [
      "noun"
    ],
    "measure": "种",
    "etymology": "「性」＋「格」（きまり）。性の格→性格。",
    "mnemonic": "「シンガー」＝性＋格。性質の型→パーソナリティ。"
  },
  {
    "id": 298,
    "hanzi": "幸福",
    "pinyin": "xìngfú",
    "meaning": "幸せな",
    "example": "祝你们幸福！",
    "exampleMeaning": "お幸せに！",
    "category": [
      "adjective"
    ],
    "etymology": "「幸」（しあわせ）＋「福」（さいわい）。幸せ＋幸い→幸福。",
    "mnemonic": "「シンフー」＝幸＋福。どちらもハッピーの意→しあわせ。"
  },
  {
    "id": 299,
    "hanzi": "修理",
    "pinyin": "xiūlǐ",
    "meaning": "修理する",
    "example": "请帮我修理一下电脑。",
    "exampleMeaning": "パソコンを修理してください。",
    "category": [
      "verb"
    ],
    "etymology": "「修」（人（亻）：にんべん）＋「理」（玉（王）：たまへん）。修理するを表す。",
    "mnemonic": "「セキL」＝修（にんべん）＋理（たまへん）→「修理する」で覚える。"
  },
  {
    "id": 300,
    "hanzi": "许多",
    "pinyin": "xǔduō",
    "meaning": "多くの",
    "example": "这里有许多人。",
    "exampleMeaning": "ここには多くの人がいます。",
    "category": [
      "adjective"
    ],
    "etymology": "「许」（ゆるす→たくさん）＋「多」（おおい）。許すほど多い→たくさん。",
    "mnemonic": "「シュードゥオ」＝許＋多。多さを許容→いっぱい。"
  },
  {
    "id": 301,
    "hanzi": "学期",
    "pinyin": "xuéqī",
    "meaning": "学期",
    "example": "这个学期我学中文。",
    "exampleMeaning": "今学期は中国語を勉強します。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「学」（子：こへん）＋「期」（月：つきへん）。学期を表す。",
    "mnemonic": "「キョQ」＝学（こへん）＋期（つきへん）→「学期」で覚える。"
  },
  {
    "id": 302,
    "hanzi": "压力",
    "pinyin": "yālì",
    "meaning": "プレッシャー、圧力",
    "example": "工作压力太大了。",
    "exampleMeaning": "仕事のプレッシャーが大きすぎます。",
    "category": [
      "noun"
    ],
    "measure": "种",
    "etymology": "「压」（厂：がんだれ）＋「力」（力：ちから）。プレッシャー、圧力を表す。",
    "mnemonic": "「YL」＝压（がんだれ）＋力（ちから）→「プレッシャー、圧力」で覚える。"
  },
  {
    "id": 303,
    "hanzi": "牙膏",
    "pinyin": "yágāo",
    "meaning": "歯磨き粉",
    "example": "我买了一支牙膏。",
    "exampleMeaning": "歯磨き粉を一本買いました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「牙」（牙：きば）＋「膏」（月：にくづき）。歯磨き粉を表す。",
    "mnemonic": "「YGオ」＝牙（きば）＋膏（にくづき）→「歯磨き粉」で覚える。"
  },
  {
    "id": 304,
    "hanzi": "严格",
    "pinyin": "yángé",
    "meaning": "厳格な",
    "example": "我们的老师很严格。",
    "exampleMeaning": "私たちの先生はとても厳格です。",
    "category": [
      "adjective"
    ],
    "etymology": "「严」（一：いち）＋「格」（木：きへん）。厳格なを表す。",
    "mnemonic": "「YNG」＝严（いち）＋格（きへん）→「厳格な」で覚える。"
  },
  {
    "id": 305,
    "hanzi": "严重",
    "pinyin": "yánzhòng",
    "meaning": "深刻な、重大な",
    "example": "这个问题很严重。",
    "exampleMeaning": "この問題はとても深刻です。",
    "category": [
      "adjective"
    ],
    "etymology": "「严」（きびしい）＋「重」（おもい）。厳しく重い→深刻。",
    "mnemonic": "「イェンジョン」＝厳重。厳しく重大→深刻だ。"
  },
  {
    "id": 306,
    "hanzi": "演出",
    "pinyin": "yǎnchū",
    "meaning": "上演する、公演",
    "example": "今晚有京剧演出。",
    "exampleMeaning": "今晩は京劇の公演があります。",
    "category": [
      "noun",
      "verb"
    ],
    "measure": "场",
    "etymology": "「演」（えんじる）＋「出」（だす）。演じて出す→上演。",
    "mnemonic": "「イエンチュー」＝演＋出。演技を出す→公演。"
  },
  {
    "id": 307,
    "hanzi": "眼镜",
    "pinyin": "yǎnjìng",
    "meaning": "眼鏡",
    "example": "我戴眼镜。",
    "exampleMeaning": "私は眼鏡をかけています。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「眼」（め）＋「镜」（かがみ）。目の鏡→メガネ。",
    "mnemonic": "「イェンジン」＝目＋鏡。目のレンズ＝メガネ。"
  },
  {
    "id": 308,
    "hanzi": "要求",
    "pinyin": "yāoqiú",
    "meaning": "要求する",
    "example": "老师要求我们每天读课文。",
    "exampleMeaning": "先生は毎日教科書を読むよう要求しました。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「要」（襾：にし）＋「求」（水：みず）。要求するを表す。",
    "mnemonic": "「YOQI」＝要（にし）＋求（みず）→「要求する」で覚える。"
  },
  {
    "id": 309,
    "hanzi": "钥匙",
    "pinyin": "yàoshi",
    "meaning": "鍵",
    "example": "我把钥匙忘在家里了。",
    "exampleMeaning": "鍵を家に忘れました。",
    "category": [
      "noun"
    ],
    "measure": "把",
    "etymology": "「钥」（かぎ）+「匙」（さじ）。鍵の匙→カギ。",
    "mnemonic": "「ヤオシー」＝鍵。钥（カギ）＋匙（スプーン形の鍵）。"
  },
  {
    "id": 310,
    "hanzi": "页",
    "pinyin": "yè",
    "meaning": "ページ",
    "example": "请翻到第十页。",
    "exampleMeaning": "10ページを開いてください。",
    "category": [
      "measure"
    ],
    "etymology": "「页」（頁（页）：おおがい）。ページを表す。",
    "mnemonic": "「Y」＝页（おおがい）→「ページ」で覚える。"
  },
  {
    "id": 311,
    "hanzi": "一切",
    "pinyin": "yīqiè",
    "meaning": "すべて、一切",
    "example": "一切都会好起来的。",
    "exampleMeaning": "すべてうまくいきます。",
    "category": [
      "pronoun"
    ],
    "etymology": "「一」（一：いち）＋「切」（刀：かたな）。すべて、一切を表す。",
    "mnemonic": "「Yキ」＝一（いち）＋切（かたな）→「すべて、一切」で覚える。"
  },
  {
    "id": 312,
    "hanzi": "以为",
    "pinyin": "yǐwéi",
    "meaning": "〜と思う、〜と考える",
    "example": "我以为他是中国人。",
    "exampleMeaning": "彼は中国人だと思いました。",
    "category": [
      "verb"
    ],
    "etymology": "「以」（人：ひと）＋「为」（丶：てん）。〜と思う、〜と考えるを表す。",
    "mnemonic": "「YWI」＝以（ひと）＋为（てん）→「〜と思う、〜と考える」で覚える。"
  },
  {
    "id": 313,
    "hanzi": "艺术",
    "pinyin": "yìshù",
    "meaning": "芸術",
    "example": "我对艺术很感兴趣。",
    "exampleMeaning": "私は芸術にとても興味があります。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「艺」（艹：くさかんむり）＋「术」（木：き）。芸術を表す。",
    "mnemonic": "「YSH」＝艺（くさかんむり）＋术（き）→「芸術」で覚える。"
  },
  {
    "id": 314,
    "hanzi": "因此",
    "pinyin": "yīncǐ",
    "meaning": "そのため、従って",
    "example": "他学习很努力，因此进步很快。",
    "exampleMeaning": "彼はとても努力したので、従って進歩も速いです。",
    "category": [
      "conjunction"
    ],
    "etymology": "「因」（囗：くにがまえ）＋「此」（止：とめる）。そのため、従ってを表す。",
    "mnemonic": "「YNC」＝因（くにがまえ）＋此（とめる）→「そのため、従って」で覚える。"
  },
  {
    "id": 315,
    "hanzi": "印象",
    "pinyin": "yìnxiàng",
    "meaning": "印象",
    "example": "北京给我留下了很深的印象。",
    "exampleMeaning": "北京は私に深い印象を残しました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「印」（しるし）＋「象」（かたち）。印の形→印象。",
    "mnemonic": "「インシャン」＝印＋象。心に印された形＝イメージ。"
  },
  {
    "id": 316,
    "hanzi": "赢",
    "pinyin": "yíng",
    "meaning": "勝つ",
    "example": "我们队赢了这场比赛。",
    "exampleMeaning": "私たちのチームはこの試合に勝ちました。",
    "category": [
      "verb"
    ],
    "etymology": "「赢」（貝（贝）：かい）。勝つを表す。",
    "mnemonic": "「YNG」＝赢（かい）→「勝つ」で覚える。"
  },
  {
    "id": 317,
    "hanzi": "勇敢",
    "pinyin": "yǒnggǎn",
    "meaning": "勇敢な",
    "example": "他是一个勇敢的男孩。",
    "exampleMeaning": "彼は勇敢な男の子です。",
    "category": [
      "adjective"
    ],
    "etymology": "「勇」（力：ちから）＋「敢」（攵：のぶん）。勇敢なを表す。",
    "mnemonic": "「YNGGN」＝勇（ちから）＋敢（のぶん）→「勇敢な」で覚える。"
  },
  {
    "id": 318,
    "hanzi": "永远",
    "pinyin": "yǒngyuǎn",
    "meaning": "永遠に",
    "example": "我会永远记得你。",
    "exampleMeaning": "私はあなたを永遠に覚えています。",
    "category": [
      "adverb"
    ],
    "etymology": "「永」（ながい）＋「远」（とおい）。長く遠い→永遠。",
    "mnemonic": "「ヨンユエン」＝永久＋永遠。いつまでも遠く→永遠に。"
  },
  {
    "id": 319,
    "hanzi": "优点",
    "pinyin": "yōudiǎn",
    "meaning": "長所、利点",
    "example": "这个计划有很多优点。",
    "exampleMeaning": "この計画には多くの利点があります。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「优」（すぐれる）＋「点」（てん）。優れた点→長所。",
    "mnemonic": "「ヨウディエン」＝優＋点。優れたポイント＝メリット。"
  },
  {
    "id": 320,
    "hanzi": "优秀",
    "pinyin": "yōuxiù",
    "meaning": "優秀な",
    "example": "她是一名优秀的学生。",
    "exampleMeaning": "彼女は優秀な学生です。",
    "category": [
      "adjective"
    ],
    "etymology": "「优」＋「秀」（ひいでる）。優れて秀でる→優秀。",
    "mnemonic": "「ヨウシウ」＝優＋秀。どちらも「すぐれる」の意→優秀。"
  },
  {
    "id": 321,
    "hanzi": "幽默",
    "pinyin": "yōumò",
    "meaning": "ユーモアのある",
    "example": "他说话很幽默。",
    "exampleMeaning": "彼の話し方はとてもユーモアがあります。",
    "category": [
      "adjective"
    ],
    "etymology": "「幽」（幺：いとがしら）＋「默」（黑：くろ）。ユーモアのあるを表す。",
    "mnemonic": "「YUM」＝幽（いとがしら）＋默（くろ）→「ユーモアのある」で覚える。"
  },
  {
    "id": 322,
    "hanzi": "友好",
    "pinyin": "yǒuhǎo",
    "meaning": "友好的な",
    "example": "这里的人很友好。",
    "exampleMeaning": "ここの人々はとても友好的です。",
    "category": [
      "adjective"
    ],
    "etymology": "「友」（とも）＋「好」（よい）。友と良い関係→友好。",
    "mnemonic": "「ヨウハオ」＝友達＋ハオ（良い）。友好的な関係。"
  },
  {
    "id": 323,
    "hanzi": "友谊",
    "pinyin": "yǒuyì",
    "meaning": "友情",
    "example": "我们的友谊永远不会变。",
    "exampleMeaning": "私たちの友情は永遠に変わりません。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「友」＋「谊」（よしみ）。友のよしみ→友情。",
    "mnemonic": "「ヨウイー」＝友＋谊（よしみ）。友のよしみ＝友情。"
  },
  {
    "id": 324,
    "hanzi": "于是",
    "pinyin": "yúshì",
    "meaning": "そこで、それで",
    "example": "天黑了，于是我们回家了。",
    "exampleMeaning": "暗くなったので、そこで家に帰りました。",
    "category": [
      "conjunction"
    ],
    "etymology": "「于」（一：いち）＋「是」（日：ひへん）。そこで、それでを表す。",
    "mnemonic": "「YSH」＝于（いち）＋是（ひへん）→「そこで、それで」で覚える。"
  },
  {
    "id": 325,
    "hanzi": "愉快",
    "pinyin": "yúkuài",
    "meaning": "愉快な、楽しい",
    "example": "祝你周末愉快！",
    "exampleMeaning": "楽しい週末を！",
    "category": [
      "adjective"
    ],
    "etymology": "「愉」（たのしい）＋「快」（こころよい）。楽しく心地よい→愉快。",
    "mnemonic": "「ユークアイ」＝愉（たのしむ）＋快（こころよい）。気持ちよく楽しい。"
  },
  {
    "id": 326,
    "hanzi": "羽毛球",
    "pinyin": "yǔmáoqiú",
    "meaning": "バドミントン",
    "example": "周末我们一起去打羽毛球吧。",
    "exampleMeaning": "週末に一緒にバドミントンをしましょう。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「羽」（羽：はね）＋「毛」（毛：け）＋「球」（玉（王）：たまへん）。バドミントンを表す。",
    "mnemonic": "「YMOQI」＝羽（はね）＋毛（け）＋球（たまへん）→「バドミントン」で覚える。"
  },
  {
    "id": 327,
    "hanzi": "语法",
    "pinyin": "yǔfǎ",
    "meaning": "文法",
    "example": "中文语法不太难。",
    "exampleMeaning": "中国語の文法はあまり難しくありません。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「语」（言（讠）：ごんべん）＋「法」（水（氵）：さんずい）。文法を表す。",
    "mnemonic": "「YF」＝语（ごんべん）＋法（さんずい）→「文法」で覚える。"
  },
  {
    "id": 328,
    "hanzi": "语言",
    "pinyin": "yǔyán",
    "meaning": "言語",
    "example": "学习一种新语言很有趣。",
    "exampleMeaning": "新しい言語を学ぶのはとても面白いです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「语」（言（讠）：ごんべん）＋「言」（言：ことば）。言語を表す。",
    "mnemonic": "「YYN」＝语（ごんべん）＋言（ことば）→「言語」で覚える。"
  },
  {
    "id": 329,
    "hanzi": "预习",
    "pinyin": "yùxí",
    "meaning": "予習する",
    "example": "请预习下一课的内容。",
    "exampleMeaning": "次の授業の内容を予習してください。",
    "category": [
      "verb"
    ],
    "etymology": "「预」（頁（页）：おおがい）＋「习」（乙：おつ）。予習するを表す。",
    "mnemonic": "「YX」＝预（おおがい）＋习（おつ）→「予習する」で覚える。"
  },
  {
    "id": 330,
    "hanzi": "原来",
    "pinyin": "yuánlái",
    "meaning": "もともと、なんと〜だったのか",
    "example": "原来你是老师啊！",
    "exampleMeaning": "なんとあなたは先生だったのですね！",
    "category": [
      "adverb",
      "adjective"
    ],
    "etymology": "「原」＋「来」（木：き）。もともと、なんと〜だったのかを表す。",
    "mnemonic": "「ギョNLI」＝原＋来（き）→「もともと、なんと〜だったのか」で覚える。"
  },
  {
    "id": 331,
    "hanzi": "原因",
    "pinyin": "yuányīn",
    "meaning": "原因",
    "example": "你知道这件事的原因吗？",
    "exampleMeaning": "この件の原因を知っていますか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「原」＋「因」（よる）。元に因る→原因。",
    "mnemonic": "「ユエンイン」＝原＋因。元となる理由＝原因。"
  },
  {
    "id": 332,
    "hanzi": "约会",
    "pinyin": "yuēhuì",
    "meaning": "デートする、約束する",
    "example": "今天晚上我有约会。",
    "exampleMeaning": "今晩デートがあります。",
    "category": [
      "verb"
    ],
    "etymology": "「约」（やくそく）＋「会」（あう）。約束して会う→デート。",
    "mnemonic": "「ユエフイ」＝約束＋会う。約束の待ち合わせ→デート。"
  },
  {
    "id": 333,
    "hanzi": "阅读",
    "pinyin": "yuèdú",
    "meaning": "読書する、読む",
    "example": "我喜欢阅读中文小说。",
    "exampleMeaning": "私は中国語の小説を読むのが好きです。",
    "category": [
      "verb"
    ],
    "etymology": "「阅」（みる）＋「读」（よむ）。見て読む→読書。",
    "mnemonic": "「ユエドゥー」＝閲覧＋読書。見て読む→読む。"
  },
  {
    "id": 334,
    "hanzi": "云",
    "pinyin": "yún",
    "meaning": "雲",
    "example": "天上有很多云。",
    "exampleMeaning": "空に雲がたくさんあります。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "象形文字。空に浮かぶ雲の形から。",
    "mnemonic": "二（上の空）＋ム（むくむく）＝雲。空にむくむく浮かぶ。"
  },
  {
    "id": 335,
    "hanzi": "允许",
    "pinyin": "yǔnxǔ",
    "meaning": "許可する",
    "example": "这里不允许拍照。",
    "exampleMeaning": "ここでは写真撮影が許可されていません。",
    "category": [
      "verb"
    ],
    "etymology": "「允」（儿：にんにょう）＋「许」（言（讠）：ごんべん）。許可するを表す。",
    "mnemonic": "「YNX」＝允（にんにょう）＋许（ごんべん）→「許可する」で覚える。"
  },
  {
    "id": 336,
    "hanzi": "杂志",
    "pinyin": "zázhì",
    "meaning": "雑誌",
    "example": "我每个月都买这本杂志。",
    "exampleMeaning": "私は毎月この雑誌を買います。",
    "category": [
      "noun"
    ],
    "measure": "本",
    "etymology": "「杂」（木：き）＋「志」（心：こころ）。雑誌を表す。",
    "mnemonic": "「ZZH」＝杂（き）＋志（こころ）→「雑誌」で覚える。"
  },
  {
    "id": 338,
    "hanzi": "暂时",
    "pinyin": "zànshí",
    "meaning": "しばらくの間、一時的な",
    "example": "这个商店暂时关门了。",
    "exampleMeaning": "この店は一時的に閉まっています。",
    "category": [
      "adverb"
    ],
    "etymology": "「暂」（日：ひへん）＋「时」（日：ひへん）。しばらくの間、一時的なを表す。",
    "mnemonic": "「ZNSH」＝暂（ひへん）＋时（ひへん）→「しばらくの間、一時的な」で覚える。"
  },
  {
    "id": 339,
    "hanzi": "责任",
    "pinyin": "zérèn",
    "meaning": "責任",
    "example": "每个人都应该承担自己的责任。",
    "exampleMeaning": "誰もが自分の責任を負うべきです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「责」（貝（贝）：かい）＋「任」（人（亻）：にんべん）。責任を表す。",
    "mnemonic": "「ZRN」＝责（かい）＋任（にんべん）→「責任」で覚える。"
  },
  {
    "id": 340,
    "hanzi": "增加",
    "pinyin": "zēngjiā",
    "meaning": "増加する、増やす",
    "example": "公司决定增加员工工资。",
    "exampleMeaning": "会社は従業員の給料を増やすことを決定しました。",
    "category": [
      "verb"
    ],
    "etymology": "「增」（土：つちへん）＋「加」（力：ちから）。増加する、増やすを表す。",
    "mnemonic": "「ZNGJI」＝增（つちへん）＋加（ちから）→「増加する、増やす」で覚える。"
  },
  {
    "id": 341,
    "hanzi": "展覽",
    "pinyin": "zhǎnlǎn",
    "meaning": "展覧会",
    "example": "这个画展展览很有意思。",
    "exampleMeaning": "この絵画展覧会はとても面白いです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「展」（尸：しかばね）＋「覽」（見：みる）。展覧会を表す。",
    "mnemonic": "「ZHNLN」＝展（しかばね）＋覽（みる）→「展覧会」で覚える。"
  },
  {
    "id": 342,
    "hanzi": "照顾",
    "pinyin": "zhàogu",
    "meaning": "世話をする",
    "example": "请照顾一下我的猫。",
    "exampleMeaning": "私の猫の世話をしてください。",
    "category": [
      "verb"
    ],
    "etymology": "「照」（火（灬）：れっか）＋「顾」（頁（页）：おおがい）。世話をするを表す。",
    "mnemonic": "「ZHOGU」＝照（れっか）＋顾（おおがい）→「世話をする」で覚える。"
  },
  {
    "id": 343,
    "hanzi": "整理",
    "pinyin": "zhěnglǐ",
    "meaning": "整理する",
    "example": "请整理一下你的房间。",
    "exampleMeaning": "部屋を整理してください。",
    "category": [
      "verb"
    ],
    "etymology": "「整」（攵：のぶん）＋「理」（玉（王）：たまへん）。整理するを表す。",
    "mnemonic": "「ZHNGL」＝整（のぶん）＋理（たまへん）→「整理する」で覚える。"
  },
  {
    "id": 344,
    "hanzi": "正常",
    "pinyin": "zhèngcháng",
    "meaning": "正常な",
    "example": "一切都很正常。",
    "exampleMeaning": "すべて正常です。",
    "category": [
      "adjective"
    ],
    "etymology": "「正」（止：とめる）＋「常」（巾：はば）。正常なを表す。",
    "mnemonic": "「ZHNGCHNG」＝正（とめる）＋常（はば）→「正常な」で覚える。"
  },
  {
    "id": 345,
    "hanzi": "正式",
    "pinyin": "zhèngshì",
    "meaning": "正式な",
    "example": "这个合同需要正式签字。",
    "exampleMeaning": "この契約は正式な署名が必要です。",
    "category": [
      "adjective"
    ],
    "etymology": "「正」（止：とめる）＋「式」（弋：いぐるみ）。正式なを表す。",
    "mnemonic": "「ZHNGSH」＝正（とめる）＋式（いぐるみ）→「正式な」で覚える。"
  },
  {
    "id": 346,
    "hanzi": "正好",
    "pinyin": "zhènghǎo",
    "meaning": "ちょうど良い",
    "example": "这件衣服正好合适。",
    "exampleMeaning": "この服はちょうどぴったりです。",
    "category": [
      "adjective",
      "adverb"
    ],
    "etymology": "「正」（止：とめる）＋「好」（女：おんなへん）。ちょうど良いを表す。",
    "mnemonic": "「ZHNGHオ」＝正（とめる）＋好（おんなへん）→「ちょうど良い」で覚える。"
  },
  {
    "id": 347,
    "hanzi": "支持",
    "pinyin": "zhīchí",
    "meaning": "支持する",
    "example": "感谢你的支持！",
    "exampleMeaning": "あなたの支持に感謝します！",
    "category": [
      "verb"
    ],
    "etymology": "「支」（支：しにょう）＋「持」（手（扌）：てへん）。支持するを表す。",
    "mnemonic": "「ZHCH」＝支（しにょう）＋持（てへん）→「支持する」で覚える。"
  },
  {
    "id": 348,
    "hanzi": "值得",
    "pinyin": "zhídé",
    "meaning": "〜する価値がある",
    "example": "这本书值得一读。",
    "exampleMeaning": "この本は読む価値があります。",
    "category": [
      "verb"
    ],
    "etymology": "「值」（人（亻）：にんべん）＋「得」（彳：ぎょうにんべん）。〜する価値があるを表す。",
    "mnemonic": "「ZHD」＝值（にんべん）＋得（ぎょうにんべん）→「〜する価値がある」で覚える。"
  },
  {
    "id": 349,
    "hanzi": "质量",
    "pinyin": "zhìliàng",
    "meaning": "品質",
    "example": "这个产品的质量很好。",
    "exampleMeaning": "この製品の品質はとても良いです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「质」（貝（贝）：かいへん）＋「量」（里：さと）。品質を表す。",
    "mnemonic": "「ZHリNG」＝质（かいへん）＋量（さと）→「品質」で覚える。"
  },
  {
    "id": 350,
    "hanzi": "重",
    "pinyin": "zhòng",
    "meaning": "重い",
    "example": "这个箱子太重了。",
    "exampleMeaning": "このスーツケースは重すぎます。",
    "category": [
      "adjective"
    ],
    "etymology": "「重」（里：さと）。重いを表す。",
    "mnemonic": "「ZHNG」＝重（さと）→「重い」で覚える。"
  },
  {
    "id": 351,
    "hanzi": "重点",
    "pinyin": "zhòngdiǎn",
    "meaning": "重点、ポイント",
    "example": "考试的重点是什么？",
    "exampleMeaning": "試験の重点は何ですか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「重」（里：さと）＋「点」（火（灬）：れっか）。重点、ポイントを表す。",
    "mnemonic": "「ZHNGDIN」＝重（さと）＋点（れっか）→「重点、ポイント」で覚える。"
  },
  {
    "id": 352,
    "hanzi": "重视",
    "pinyin": "zhòngshì",
    "meaning": "重視する",
    "example": "公司非常重视员工的意见。",
    "exampleMeaning": "会社は従業員の意見を非常に重視しています。",
    "category": [
      "verb"
    ],
    "etymology": "「重」（里：さと）＋「视」（見（见）：みる）。重視するを表す。",
    "mnemonic": "「ZHNGSH」＝重（さと）＋视（みる）→「重視する」で覚える。"
  },
  {
    "id": 353,
    "hanzi": "周围",
    "pinyin": "zhōuwéi",
    "meaning": "周り、周囲",
    "example": "学校周围有很多商店。",
    "exampleMeaning": "学校の周りにはたくさんのお店があります。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「周」（口：くち）＋「围」（囗：くにがまえ）。周り、周囲を表す。",
    "mnemonic": "「ZHUWI」＝周（くち）＋围（くにがまえ）→「周り、周囲」で覚える。"
  },
  {
    "id": 354,
    "hanzi": "逐渐",
    "pinyin": "zhújiàn",
    "meaning": "次第に、だんだんと",
    "example": "天气逐渐变冷了。",
    "exampleMeaning": "天気がだんだん寒くなってきました。",
    "category": [
      "adverb"
    ],
    "etymology": "「逐」（辶：しんにょう）＋「渐」（水（氵）：さんずい）。次第に、だんだんとを表す。",
    "mnemonic": "「ZHキN」＝逐（しんにょう）＋渐（さんずい）→「次第に、だんだんと」で覚える。"
  },
  {
    "id": 355,
    "hanzi": "主动",
    "pinyin": "zhǔdòng",
    "meaning": "自発的な、主動の",
    "example": "他主动帮助我。",
    "exampleMeaning": "彼は自発的に私を助けてくれました。",
    "category": [
      "adjective"
    ],
    "etymology": "「主」（丶：てん）＋「动」（力：ちから）。自発的な、主動のを表す。",
    "mnemonic": "「ZHDNG」＝主（てん）＋动（ちから）→「自発的な、主動の」で覚える。"
  },
  {
    "id": 356,
    "hanzi": "主意",
    "pinyin": "zhǔyi",
    "meaning": "アイデア、考え",
    "example": "你有什么好主意？",
    "exampleMeaning": "何かいいアイデアはありますか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「主」（丶：てん）＋「意」（心：こころ）。アイデア、考えを表す。",
    "mnemonic": "「ZHイ」＝主（てん）＋意（こころ）→「アイデア、考え」で覚える。"
  },
  {
    "id": 357,
    "hanzi": "祝贺",
    "pinyin": "zhùhè",
    "meaning": "祝う、お祝いする",
    "example": "祝贺你通过考试！",
    "exampleMeaning": "試験合格おめでとう！",
    "category": [
      "verb"
    ],
    "etymology": "「祝」（示（礻）：しめすへん）＋「贺」（貝（贝）：かい）。祝う、お祝いするを表す。",
    "mnemonic": "「ZHH」＝祝（しめすへん）＋贺（かい）→「祝う、お祝いする」で覚える。"
  },
  {
    "id": 358,
    "hanzi": "著名",
    "pinyin": "zhùmíng",
    "meaning": "著名な、有名な",
    "example": "他是一位著名的作家。",
    "exampleMeaning": "彼は著名な作家です。",
    "category": [
      "adjective"
    ],
    "etymology": "「著」（艹：くさかんむり）＋「名」（口：くち）。著名な、有名なを表す。",
    "mnemonic": "「ZHMNG」＝著（くさかんむり）＋名（くち）→「著名な、有名な」で覚える。"
  },
  {
    "id": 359,
    "hanzi": "专业",
    "pinyin": "zhuānyè",
    "meaning": "専門、専攻",
    "example": "我的专业是经济学。",
    "exampleMeaning": "私の専攻は経済学です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「专」（一：いち）＋「业」（一：いち）。専門、専攻を表す。",
    "mnemonic": "「ショNY」＝专（いち）＋业（いち）→「専門、専攻」で覚える。"
  },
  {
    "id": 360,
    "hanzi": "转",
    "pinyin": "zhuǎn",
    "meaning": "回す、変える",
    "example": "请向左转。",
    "exampleMeaning": "左に曲がってください。",
    "category": [
      "verb"
    ],
    "etymology": "「转」（車（车）：くるまへん）。回す、変えるを表す。",
    "mnemonic": "「ショN」＝转（くるまへん）→「回す、変える」で覚える。"
  },
  {
    "id": 361,
    "hanzi": "准确",
    "pinyin": "zhǔnquè",
    "meaning": "正確な",
    "example": "这个数字很准确。",
    "exampleMeaning": "この数字はとても正確です。",
    "category": [
      "adjective"
    ],
    "etymology": "「准」（冫：にすい）＋「确」（石：いしへん）。正確なを表す。",
    "mnemonic": "「ZHNQU」＝准（にすい）＋确（いしへん）→「正確な」で覚える。"
  },
  {
    "id": 362,
    "hanzi": "仔细",
    "pinyin": "zǐxì",
    "meaning": "注意深く、念入りに",
    "example": "请仔细检查一遍。",
    "exampleMeaning": "注意深くもう一度チェックしてください。",
    "category": [
      "adverb"
    ],
    "etymology": "「仔」（こまかい）＋「细」（ほそい）。細かく細い→注意深い。",
    "mnemonic": "「ズーシー」＝仔細。細かいところまで→よく見る。"
  },
  {
    "id": 363,
    "hanzi": "总结",
    "pinyin": "zǒngjié",
    "meaning": "まとめる、総括する",
    "example": "请总结一下今天的内容。",
    "exampleMeaning": "今日の内容をまとめてください。",
    "category": [
      "verb"
    ],
    "etymology": "「总」（すべて）＋「结」（むすぶ）。すべてを結ぶ→まとめ。",
    "mnemonic": "「ゾンジェ」＝総＋結。総てを結ぶ→サマリー。"
  },
  {
    "id": 364,
    "hanzi": "最好",
    "pinyin": "zuìhǎo",
    "meaning": "一番良い、最も良い",
    "example": "你最好早点回家。",
    "exampleMeaning": "早く家に帰ったほうがいいですよ。",
    "category": [
      "adverb"
    ],
    "etymology": "「最」＋「好」（よい）。最も良い→最高。",
    "mnemonic": "「ズイハオ」＝最もハオ（良い）→ベスト。"
  },
  {
    "id": 365,
    "hanzi": "尊重",
    "pinyin": "zūnzhòng",
    "meaning": "尊重する",
    "example": "我们应该尊重老人。",
    "exampleMeaning": "私たちはお年寄りを尊重すべきです。",
    "category": [
      "verb"
    ],
    "etymology": "「尊」（とうとい）＋「重」（おもい）。尊く重んじる→尊重。",
    "mnemonic": "「ズンジョン」＝尊＋重。尊んで重視する→リスペクト。"
  },
  {
    "id": 366,
    "hanzi": "座位",
    "pinyin": "zuòwèi",
    "meaning": "席、座席",
    "example": "请找自己的座位坐下。",
    "exampleMeaning": "自分の席を見つけて座ってください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「座」（广：まだれ）＋「位」（人（亻）：にんべん）。席、座席を表す。",
    "mnemonic": "「ソWI」＝座（まだれ）＋位（にんべん）→「席、座席」で覚える。"
  },
  {
    "id": 367,
    "hanzi": "作家",
    "pinyin": "zuòjiā",
    "meaning": "作家",
    "example": "他是一位著名的作家。",
    "exampleMeaning": "彼は有名な作家です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「作」（人（亻）：にんべん）＋「家」（宀：うかんむり）。作家を表す。",
    "mnemonic": "「ソキ」＝作（にんべん）＋家（うかんむり）→「作家」で覚える。"
  },
  {
    "id": 368,
    "hanzi": "作者",
    "pinyin": "zuòzhě",
    "meaning": "作者、著者",
    "example": "这本书的作者是谁？",
    "exampleMeaning": "この本の著者は誰ですか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「作」（人（亻）：にんべん）＋「者」（老：おいかんむり）。作者、著者を表す。",
    "mnemonic": "「ソZH」＝作（にんべん）＋者（おいかんむり）→「作者、著者」で覚える。"
  },
  {
    "id": 369,
    "hanzi": "座",
    "pinyin": "zuò",
    "meaning": "〜座、〜棟（量詞）",
    "example": "前面有一座山。",
    "exampleMeaning": "前に山が一つあります。",
    "category": [
      "measure"
    ],
    "etymology": "「座」（广：まだれ）。〜座、〜棟（量詞）を表す。",
    "mnemonic": "「ソ」＝座（まだれ）→「〜座、〜棟（量詞）」で覚える。"
  },
  {
    "id": 371,
    "hanzi": "收入",
    "pinyin": "shōurù",
    "meaning": "収入",
    "example": "他的收入比以前增加了。",
    "exampleMeaning": "彼の収入は以前より増えました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「收」（攵：のぶん）＋「入」（入：いる）。収入を表す。",
    "mnemonic": "「SHUR」＝收（のぶん）＋入（いる）→「収入」で覚える。"
  },
  {
    "id": 372,
    "hanzi": "收拾",
    "pinyin": "shōushi",
    "meaning": "片付ける",
    "example": "请收拾一下桌子。",
    "exampleMeaning": "机を片付けてください。",
    "category": [
      "verb"
    ],
    "etymology": "「收」（攵：のぶん）＋「拾」（手（扌）：てへん）。片付けるを表す。",
    "mnemonic": "「SHUSHI」＝收（のぶん）＋拾（てへん）→「片付ける」で覚える。"
  },
  {
    "id": 373,
    "hanzi": "受不了",
    "pinyin": "shòubuliǎo",
    "meaning": "耐えられない",
    "example": "我受不了这么热的天气。",
    "exampleMeaning": "こんなに暑い天気には耐えられません。",
    "category": [
      "verb"
    ],
    "etymology": "「受」（又：また）＋「不」（一：いち）＋「了」（乙：おつ）。耐えられないを表す。",
    "mnemonic": "「SHUBULIオ」＝受（また）＋不（いち）＋了（おつ）→「耐えられない」で覚える。"
  },
  {
    "id": 374,
    "hanzi": "受到",
    "pinyin": "shòudào",
    "meaning": "受ける、受け取る",
    "example": "他受到了大家的欢迎。",
    "exampleMeaning": "彼はみんなの歓迎を受けました。",
    "category": [
      "verb"
    ],
    "etymology": "「受」（うける）＋「到」（いたる）。受けて至る→〜される。",
    "mnemonic": "「ショウダオ」＝受＋到。受け取る→受ける。"
  },
  {
    "id": 375,
    "hanzi": "售货员",
    "pinyin": "shòuhuòyuán",
    "meaning": "販売員、店員",
    "example": "售货员很热情。",
    "exampleMeaning": "販売員はとても親切です。",
    "category": [
      "noun"
    ],
    "measure": "家",
    "etymology": "「售」（口：くち）＋「货」（貝（贝）：かいへん）＋「员」（口：くち）。販売員、店員を表す。",
    "mnemonic": "「SHUHUギョN」＝售（くち）＋货（かいへん）＋员（くち）→「販売員、店員」で覚える。"
  },
  {
    "id": 376,
    "hanzi": "熟悉",
    "pinyin": "shúxī",
    "meaning": "よく知っている、慣れている",
    "example": "我对这个地方很熟悉。",
    "exampleMeaning": "私はこの場所をよく知っています。",
    "category": [
      "adjective"
    ],
    "etymology": "「熟」（じゅくす）＋「悉」（つくす）。熟して悉く→熟知する。",
    "mnemonic": "「シューシー」＝熟知。よく知っている→慣れ親しむ。"
  },
  {
    "id": 377,
    "hanzi": "数字",
    "pinyin": "shùzì",
    "meaning": "数字",
    "example": "请把这些数字加起来。",
    "exampleMeaning": "これらの数字を足してください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「数」（攵：のぶん）＋「字」（子：こへん）。数字を表す。",
    "mnemonic": "「SHZ」＝数（のぶん）＋字（こへん）→「数字」で覚える。"
  },
  {
    "id": 378,
    "hanzi": "硕士",
    "pinyin": "shuòshì",
    "meaning": "修士",
    "example": "他正在读硕士。",
    "exampleMeaning": "彼は修士課程に在学中です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「硕」（石：いしへん）＋「士」（士：さむらい）。修士を表す。",
    "mnemonic": "「ショSH」＝硕（いしへん）＋士（さむらい）→「修士」で覚える。"
  },
  {
    "id": 379,
    "hanzi": "死",
    "pinyin": "sǐ",
    "meaning": "死ぬ",
    "example": "我的手机没电死机了。",
    "exampleMeaning": "携帯の電池が切れて動かなくなりました。",
    "category": [
      "verb"
    ],
    "etymology": "「死」（歹：かばねへん）。死ぬを表す。",
    "mnemonic": "「S」＝死（かばねへん）→「死ぬ」で覚える。"
  },
  {
    "id": 380,
    "hanzi": "速度",
    "pinyin": "sùdù",
    "meaning": "速度、スピード",
    "example": "汽车的速度太快了。",
    "exampleMeaning": "車の速度が速すぎます。",
    "category": [
      "noun"
    ],
    "measure": "种",
    "etymology": "「速」（辶：しんにょう）＋「度」。速度、スピードを表す。",
    "mnemonic": "「SD」＝速（しんにょう）＋度→「速度、スピード」で覚える。"
  },
  {
    "id": 381,
    "hanzi": "塑料袋",
    "pinyin": "sùliàodài",
    "meaning": "ビニール袋",
    "example": "请给我一个塑料袋。",
    "exampleMeaning": "ビニール袋を一枚ください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「塑」（土：つち）＋「料」（斗：ます）＋「袋」（衣：ころも）。ビニール袋を表す。",
    "mnemonic": "「SリODI」＝塑（つち）＋料（ます）＋袋（ころも）→「ビニール袋」で覚える。"
  },
  {
    "id": 382,
    "hanzi": "酸",
    "pinyin": "suān",
    "meaning": "酸っぱい",
    "example": "这个橘子太酸了。",
    "exampleMeaning": "このみかんは酸っぱすぎます。",
    "category": [
      "adjective"
    ],
    "etymology": "「酸」（酉：とりへん）。酸っぱいを表す。",
    "mnemonic": "「ソクN」＝酸（とりへん）→「酸っぱい」で覚える。"
  },
  {
    "id": 383,
    "hanzi": "讨厌",
    "pinyin": "tǎoyàn",
    "meaning": "嫌い、嫌う",
    "example": "我讨厌下雨天。",
    "exampleMeaning": "雨の日が嫌いです。",
    "category": [
      "verb"
    ],
    "etymology": "「讨」（言（讠）：ごんべん）＋「厌」（厂：がんだれ）。嫌い、嫌うを表す。",
    "mnemonic": "「TOYN」＝讨（ごんべん）＋厌（がんだれ）→「嫌い、嫌う」で覚える。"
  },
  {
    "id": 384,
    "hanzi": "特点",
    "pinyin": "tèdiǎn",
    "meaning": "特徴",
    "example": "北京烤鸭有什么特点？",
    "exampleMeaning": "北京ダックにはどんな特徴がありますか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「特」（とくべつ）＋「点」（てん）。特別な点→特徴。",
    "mnemonic": "「ターディエン」＝特別な点（ポイント）→特徴。"
  },
  {
    "id": 385,
    "hanzi": "提前",
    "pinyin": "tíqián",
    "meaning": "予定より早く",
    "example": "请提前十分钟到。",
    "exampleMeaning": "10分前に到着してください。",
    "category": [
      "adverb"
    ],
    "etymology": "「提」（手（扌）：てへん）＋「前」（刀（刂）：りっとう）。予定より早くを表す。",
    "mnemonic": "「TキN」＝提（てへん）＋前（りっとう）→「予定より早く」で覚える。"
  },
  {
    "id": 386,
    "hanzi": "提醒",
    "pinyin": "tíxǐng",
    "meaning": "注意を促す、知らせる",
    "example": "谢谢你提醒我。",
    "exampleMeaning": "注意してくれてありがとう。",
    "category": [
      "verb"
    ],
    "etymology": "「提」（手（扌）：てへん）＋「醒」（酉：とりへん）。注意を促す、知らせるを表す。",
    "mnemonic": "「TXNG」＝提（てへん）＋醒（とりへん）→「注意を促す、知らせる」で覚える。"
  },
  {
    "id": 387,
    "hanzi": "填空",
    "pinyin": "tiánkòng",
    "meaning": "空欄を埋める",
    "example": "请填空完成句子。",
    "exampleMeaning": "空欄を埋めて文を完成させてください。",
    "category": [
      "verb"
    ],
    "etymology": "「填」（土：つちへん）＋「空」（穴：あなかんむり）。空欄を埋めるを表す。",
    "mnemonic": "「テイNKNG」＝填（つちへん）＋空（あなかんむり）→「空欄を埋める」で覚える。"
  },
  {
    "id": 388,
    "hanzi": "条件",
    "pinyin": "tiáojiàn",
    "meaning": "条件",
    "example": "这个工作条件很好。",
    "exampleMeaning": "この仕事の条件はとても良いです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「条」（木：き）＋「件」（人（亻）：にんべん）。条件を表す。",
    "mnemonic": "「テイOJIN」＝条（き）＋件（にんべん）→「条件」で覚える。"
  },
  {
    "id": 389,
    "hanzi": "停",
    "pinyin": "tíng",
    "meaning": "止まる、止める",
    "example": "公共汽车在这里停吗？",
    "exampleMeaning": "バスはここに停まりますか？",
    "category": [
      "verb"
    ],
    "etymology": "「停」（人（亻）：にんべん）。止まる、止めるを表す。",
    "mnemonic": "「TNG」＝停（にんべん）→「止まる、止める」で覚える。"
  },
  {
    "id": 390,
    "hanzi": "通知",
    "pinyin": "tōngzhī",
    "meaning": "通知する",
    "example": "请提前通知我。",
    "exampleMeaning": "事前に知らせてください。",
    "category": [
      "verb"
    ],
    "etymology": "「通」＋「知」（しる）。通して知らせる→通知。",
    "mnemonic": "「トンジー」＝通達＋通知。通して知らせる。"
  },
  {
    "id": 391,
    "hanzi": "推",
    "pinyin": "tuī",
    "meaning": "押す",
    "example": "请推门进去。",
    "exampleMeaning": "ドアを押して入ってください。",
    "category": [
      "verb"
    ],
    "etymology": "「推」（手（扌）：てへん）。押すを表す。",
    "mnemonic": "「ト」＝推（てへん）→「押す」で覚える。"
  },
  {
    "id": 392,
    "hanzi": "推迟",
    "pinyin": "tuīchí",
    "meaning": "延期する",
    "example": "会议推迟到明天了。",
    "exampleMeaning": "会議は明日に延期されました。",
    "category": [
      "verb"
    ],
    "etymology": "「推」（手（扌）：てへん）＋「迟」（辶：しんにょう）。延期するを表す。",
    "mnemonic": "「トCH」＝推（てへん）＋迟（しんにょう）→「延期する」で覚える。"
  },
  {
    "id": 393,
    "hanzi": "脱",
    "pinyin": "tuō",
    "meaning": "脱ぐ",
    "example": "请脱鞋。",
    "exampleMeaning": "靴を脱いでください。",
    "category": [
      "verb"
    ],
    "etymology": "「脱」（月：にくづき）。脱ぐを表す。",
    "mnemonic": "「ト」＝脱（にくづき）→「脱ぐ」で覚える。"
  },
  {
    "id": 394,
    "hanzi": "完全",
    "pinyin": "wánquán",
    "meaning": "完全に",
    "example": "我完全同意你的看法。",
    "exampleMeaning": "私はあなたの意見に完全に同意します。",
    "category": [
      "adverb",
      "adjective"
    ],
    "etymology": "「完」（まったし）＋「全」（すべて）。全くすべて→完全。",
    "mnemonic": "「ワンチュエン」＝完成＋全部。完全にすべて揃う。"
  },
  {
    "id": 395,
    "hanzi": "网站",
    "pinyin": "wǎngzhàn",
    "meaning": "ウェブサイト",
    "example": "你有自己的网站吗？",
    "exampleMeaning": "自分のウェブサイトを持っていますか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「网」（网：あみがしら）＋「站」（立：たつへん）。ウェブサイトを表す。",
    "mnemonic": "「WNGZHN」＝网（あみがしら）＋站（たつへん）→「ウェブサイト」で覚える。"
  },
  {
    "id": 396,
    "hanzi": "危险",
    "pinyin": "wēixiǎn",
    "meaning": "危険な",
    "example": "这里很危险，快离开。",
    "exampleMeaning": "ここはとても危険です、早く離れてください。",
    "category": [
      "adjective",
      "noun"
    ],
    "etymology": "「危」（あぶない）＋「险」（けわしい）。危なく険しい→危険。",
    "mnemonic": "「ウェイシェン」＝危＋険。危ない＋険しい→キケン。"
  },
  {
    "id": 397,
    "hanzi": "味道",
    "pinyin": "wèidào",
    "meaning": "味、風味",
    "example": "这个菜的味道真好。",
    "exampleMeaning": "この料理の味は本当に美味しいです。",
    "category": [
      "noun"
    ],
    "measure": "种",
    "etymology": "「味」（口：くちへん）＋「道」（辶：しんにょう）。味、風味を表す。",
    "mnemonic": "「WIDオ」＝味（くちへん）＋道（しんにょう）→「味、風味」で覚える。"
  },
  {
    "id": 398,
    "hanzi": "温度",
    "pinyin": "wēndù",
    "meaning": "温度",
    "example": "今天温度很高。",
    "exampleMeaning": "今日は温度がとても高いです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「温」（水（氵）：さんずい）＋「度」。温度を表す。",
    "mnemonic": "「WND」＝温（さんずい）＋度→「温度」で覚える。"
  },
  {
    "id": 399,
    "hanzi": "文章",
    "pinyin": "wénzhāng",
    "meaning": "文章",
    "example": "请写一篇文章。",
    "exampleMeaning": "文章を一つ書いてください。",
    "category": [
      "noun"
    ],
    "measure": "篇",
    "etymology": "「文」＋「章」（あや）。文の章→文章。",
    "mnemonic": "「ウェンジャン」＝文＋章。文の章節→テキスト・エッセイ。"
  },
  {
    "id": 400,
    "hanzi": "污染",
    "pinyin": "wūrǎn",
    "meaning": "汚染する、汚染",
    "example": "空气污染很严重。",
    "exampleMeaning": "大気汚染はとても深刻です。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「污」（けがす）＋「染」（そめる）。汚して染める→汚染。",
    "mnemonic": "「ウーラン」＝汚染。汚れて染みる→公害。"
  },
  {
    "id": 401,
    "hanzi": "无",
    "pinyin": "wú",
    "meaning": "〜がない、無",
    "example": "这里无信号。",
    "exampleMeaning": "ここには信号がありません。",
    "category": [
      "verb"
    ],
    "etymology": "「无」（无：む）。〜がない、無を表す。",
    "mnemonic": "「W」＝无（む）→「〜がない、無」で覚える。"
  },
  {
    "id": 402,
    "hanzi": "无聊",
    "pinyin": "wúliáo",
    "meaning": "退屈な",
    "example": "我一个人在家很无聊。",
    "exampleMeaning": "一人で家にいるととても退屈です。",
    "category": [
      "adjective"
    ],
    "etymology": "「无」＋「聊」（たより）。頼るもの無し→退屈。",
    "mnemonic": "「ウーリャオ」＝無＋聊。話し相手もなく→つまらない。"
  },
  {
    "id": 403,
    "hanzi": "无论",
    "pinyin": "wúlùn",
    "meaning": "〜にかかわらず",
    "example": "无论多忙，我每天都锻炼。",
    "exampleMeaning": "どんなに忙しくても、毎日運動します。",
    "category": [
      "conjunction"
    ],
    "etymology": "「无」（む）＋「论」（ろん）。論ずる無し→〜に関わらず。",
    "mnemonic": "「ウールン」＝無＋論。議論するまでもなく→〜であろうと。"
  },
  {
    "id": 404,
    "hanzi": "误会",
    "pinyin": "wùhuì",
    "meaning": "誤解する",
    "example": "你误会我了。",
    "exampleMeaning": "誤解していますよ。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「误」（あやまる）＋「会」（かいする）。誤って会する→誤解。",
    "mnemonic": "「ウーフイ」＝誤＋会。誤って理解する→勘違い。"
  },
  {
    "id": 405,
    "hanzi": "西红柿",
    "pinyin": "xīhóngshì",
    "meaning": "トマト",
    "example": "我喜欢吃西红柿炒鸡蛋。",
    "exampleMeaning": "トマトと卵の炒め物が好きです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「西」（襾：にし）＋「红」（糸（纟）：いとへん）＋「柿」（木：きへん）。トマトを表す。",
    "mnemonic": "「XHNGSH」＝西（にし）＋红（いとへん）＋柿（きへん）→「トマト」で覚える。"
  },
  {
    "id": 406,
    "hanzi": "吸引",
    "pinyin": "xīyǐn",
    "meaning": "引きつける、魅了する",
    "example": "这个故事很吸引人。",
    "exampleMeaning": "この話はとても人を引きつけます。",
    "category": [
      "verb"
    ],
    "etymology": "「吸」（口：くちへん）＋「引」（弓：ゆみ）。引きつける、魅了するを表す。",
    "mnemonic": "「XYN」＝吸（くちへん）＋引（ゆみ）→「引きつける、魅了する」で覚える。"
  },
  {
    "id": 407,
    "hanzi": "咸",
    "pinyin": "xián",
    "meaning": "塩辛い",
    "example": "这个菜太咸了。",
    "exampleMeaning": "この料理は塩辛すぎます。",
    "category": [
      "adjective"
    ],
    "etymology": "「咸」（口：くち）。塩辛いを表す。",
    "mnemonic": "「セキN」＝咸（くち）→「塩辛い」で覚える。"
  },
  {
    "id": 408,
    "hanzi": "现金",
    "pinyin": "xiànjīn",
    "meaning": "現金",
    "example": "你带现金了吗？",
    "exampleMeaning": "現金を持っていますか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「现」（玉（王）：たまへん）＋「金」（金：かね）。現金を表す。",
    "mnemonic": "「セキNJN」＝现（たまへん）＋金（かね）→「現金」で覚える。"
  },
  {
    "id": 409,
    "hanzi": "限制",
    "pinyin": "xiànzhì",
    "meaning": "制限する",
    "example": "这里限制车速。",
    "exampleMeaning": "ここは速度制限があります。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「限」（阜（阝）：こざとへん）＋「制」（刀（刂）：りっとう）。制限するを表す。",
    "mnemonic": "「セキNZH」＝限（こざとへん）＋制（りっとう）→「制限する」で覚える。"
  },
  {
    "id": 410,
    "hanzi": "相同",
    "pinyin": "xiāngtóng",
    "meaning": "同じ、同一の",
    "example": "我们的想法相同。",
    "exampleMeaning": "私たちの考えは同じです。",
    "category": [
      "adjective"
    ],
    "etymology": "「相」（目：め）＋「同」（口：くち）。同じ、同一のを表す。",
    "mnemonic": "「セキNGTNG」＝相（め）＋同（くち）→「同じ、同一の」で覚える。"
  },
  {
    "id": 411,
    "hanzi": "香",
    "pinyin": "xiāng",
    "meaning": "香りがいい、美味しい",
    "example": "这个菜真香！",
    "exampleMeaning": "この料理は本当にいい匂い！",
    "category": [
      "adjective"
    ],
    "etymology": "「香」（香：かおり）。香りがいい、美味しいを表す。",
    "mnemonic": "「セキNG」＝香（かおり）→「香りがいい、美味しい」で覚える。"
  },
  {
    "id": 412,
    "hanzi": "详细",
    "pinyin": "xiángxì",
    "meaning": "詳細な",
    "example": "请详细说明一下。",
    "exampleMeaning": "詳細に説明してください。",
    "category": [
      "adjective"
    ],
    "etymology": "「详」（言（讠）：ごんべん）＋「细」（糸（纟）：いとへん）。詳細なを表す。",
    "mnemonic": "「セキNGX」＝详（ごんべん）＋细（いとへん）→「詳細な」で覚える。"
  },
  {
    "id": 413,
    "hanzi": "橡皮",
    "pinyin": "xiàngpí",
    "meaning": "消しゴム",
    "example": "请借我一下橡皮。",
    "exampleMeaning": "消しゴムを貸してください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「橡」（木：きへん）＋「皮」（皮：けがわ）。消しゴムを表す。",
    "mnemonic": "「セキNGP」＝橡（きへん）＋皮（けがわ）→「消しゴム」で覚える。"
  },
  {
    "id": 414,
    "hanzi": "消息",
    "pinyin": "xiāoxi",
    "meaning": "ニュース、知らせ",
    "example": "有好消息要告诉你。",
    "exampleMeaning": "いい知らせがあります。",
    "category": [
      "noun"
    ],
    "measure": "条",
    "etymology": "「消」（水（氵）：さんずい）＋「息」（心：こころ）。ニュース、知らせを表す。",
    "mnemonic": "「セキOXI」＝消（さんずい）＋息（こころ）→「ニュース、知らせ」で覚える。"
  },
  {
    "id": 415,
    "hanzi": "小说",
    "pinyin": "xiǎoshuō",
    "meaning": "小説",
    "example": "我正在看一本中文小说。",
    "exampleMeaning": "中国語の小説を読んでいます。",
    "category": [
      "noun"
    ],
    "measure": "本",
    "etymology": "「小」（小：しょう）＋「说」（言（讠）：ごんべん）。小説を表す。",
    "mnemonic": "「セキOSHU」＝小（しょう）＋说（ごんべん）→「小説」で覚える。"
  },
  {
    "id": 416,
    "hanzi": "笑话",
    "pinyin": "xiàohua",
    "meaning": "ジョーク、笑い話",
    "example": "他讲了一个笑话。",
    "exampleMeaning": "彼はジョークを一つ言いました。",
    "category": [
      "noun",
      "verb"
    ],
    "measure": "个",
    "etymology": "「笑」（竹（⺮）：たけかんむり）＋「话」（言（讠）：ごんべん）。ジョーク、笑い話を表す。",
    "mnemonic": "「セキOHUA」＝笑（たけかんむり）＋话（ごんべん）→「ジョーク、笑い話」で覚える。"
  },
  {
    "id": 417,
    "hanzi": "效果",
    "pinyin": "xiàoguǒ",
    "meaning": "効果",
    "example": "这种药效果很好。",
    "exampleMeaning": "この薬は効果がとても良いです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「效」（ききめ）＋「果」（はたす）。効き目を果たす→効果。",
    "mnemonic": "「シャオグオ」＝効＋果。効き目の結果→エフェクト。"
  },
  {
    "id": 418,
    "hanzi": "心情",
    "pinyin": "xīnqíng",
    "meaning": "気分、気持ち",
    "example": "今天心情很好。",
    "exampleMeaning": "今日は気分がとても良いです。",
    "category": [
      "noun"
    ],
    "measure": "种",
    "etymology": "「心」（こころ）＋「情」（きもち）。心の気持ち→気分。",
    "mnemonic": "「シンチン」＝心＋情。心の情況＝気持ち。"
  },
  {
    "id": 419,
    "hanzi": "信心",
    "pinyin": "xìnxīn",
    "meaning": "自信、信念",
    "example": "我对你有信心。",
    "exampleMeaning": "私はあなたに自信があります。",
    "category": [
      "noun"
    ],
    "measure": "种",
    "etymology": "「信」（しんじる）＋「心」（こころ）。信じる心→自信。",
    "mnemonic": "「シンシン」＝信＋心。信じる心→コンフィデンス。"
  },
  {
    "id": 420,
    "hanzi": "醒",
    "pinyin": "xǐng",
    "meaning": "目が覚める",
    "example": "我今天早上六点就醒了。",
    "exampleMeaning": "今朝6時に目が覚めました。",
    "category": [
      "verb"
    ],
    "etymology": "「醒」（酉：とりへん）。目が覚めるを表す。",
    "mnemonic": "「XNG」＝醒（とりへん）→「目が覚める」で覚える。"
  },
  {
    "id": 421,
    "hanzi": "兴奋",
    "pinyin": "xīngfèn",
    "meaning": "興奮する、ワクワクする",
    "example": "孩子们都很兴奋。",
    "exampleMeaning": "子供たちはみんなワクワクしています。",
    "category": [
      "adjective",
      "verb"
    ],
    "etymology": "「兴」（八：はち）＋「奋」（大：だい）。興奮する、ワクワクするを表す。",
    "mnemonic": "「XNGFN」＝兴（はち）＋奋（だい）→「興奮する、ワクワクする」で覚える。"
  },
  {
    "id": 422,
    "hanzi": "行",
    "pinyin": "xíng",
    "meaning": "大丈夫、よろしい",
    "example": "你这样做也行。",
    "exampleMeaning": "そうやっても大丈夫です。",
    "category": [
      "adjective"
    ],
    "etymology": "「行」（行：ぎょうがまえ）。大丈夫、よろしいを表す。",
    "mnemonic": "「XNG」＝行（ぎょうがまえ）→「大丈夫、よろしい」で覚える。"
  },
  {
    "id": 423,
    "hanzi": "信封",
    "pinyin": "xìnfēng",
    "meaning": "封筒",
    "example": "请把信放进信封里。",
    "exampleMeaning": "手紙を封筒に入れてください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「信」（人（亻）：にんべん）＋「封」（寸：すん）。封筒を表す。",
    "mnemonic": "「XNFNG」＝信（にんべん）＋封（すん）→「封筒」で覚える。"
  },
  {
    "id": 424,
    "hanzi": "信息",
    "pinyin": "xìnxī",
    "meaning": "情報",
    "example": "我需要更多的信息。",
    "exampleMeaning": "もっと情報が必要です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「信」（人（亻）：にんべん）＋「息」（心：こころ）。情報を表す。",
    "mnemonic": "「XNX」＝信（にんべん）＋息（こころ）→「情報」で覚える。"
  },
  {
    "id": 425,
    "hanzi": "需要",
    "pinyin": "xūyào",
    "meaning": "必要とする",
    "example": "我需要你的帮助。",
    "exampleMeaning": "あなたの助けが必要です。",
    "category": [
      "verb"
    ],
    "etymology": "「需」（雨：あめかんむり）＋「要」（襾：にし）。必要とするを表す。",
    "mnemonic": "「XYオ」＝需（あめかんむり）＋要（にし）→「必要とする」で覚える。"
  },
  {
    "id": 426,
    "hanzi": "选择",
    "pinyin": "xuǎnzé",
    "meaning": "選択する",
    "example": "请选择一个答案。",
    "exampleMeaning": "答えを一つ選んでください。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「选」（えらぶ）＋「择」（えらぶ）。選ぶ＋選ぶ→選択。",
    "mnemonic": "「シュエンズー」＝選＋択。選んで択ぶ→チョイス。"
  },
  {
    "id": 427,
    "hanzi": "养成",
    "pinyin": "yǎngchéng",
    "meaning": "習慣づける、育てる",
    "example": "要养成早起的习惯。",
    "exampleMeaning": "早起きの習慣を身につけましょう。",
    "category": [
      "verb"
    ],
    "etymology": "「养」（八：はち）＋「成」（戈：ほこづくり）。習慣づける、育てるを表す。",
    "mnemonic": "「YNGCHNG」＝养（はち）＋成（ほこづくり）→「習慣づける、育てる」で覚える。"
  },
  {
    "id": 428,
    "hanzi": "样子",
    "pinyin": "yàngzi",
    "meaning": "様子、格好",
    "example": "看她高兴的样子。",
    "exampleMeaning": "彼女の嬉しそうな様子を見てください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「样」（木：きへん）＋「子」（子：こ）。様子、格好を表す。",
    "mnemonic": "「YNGZI」＝样（きへん）＋子（こ）→「様子、格好」で覚える。"
  },
  {
    "id": 429,
    "hanzi": "邀请",
    "pinyin": "yāoqǐng",
    "meaning": "招待する",
    "example": "我邀请你参加我的生日派对。",
    "exampleMeaning": "私の誕生日パーティーに招待します。",
    "category": [
      "verb"
    ],
    "etymology": "「邀」（辶：しんにょう）＋「请」（言（讠）：ごんべん）。招待するを表す。",
    "mnemonic": "「YOQNG」＝邀（しんにょう）＋请（ごんべん）→「招待する」で覚える。"
  },
  {
    "id": 430,
    "hanzi": "要是",
    "pinyin": "yàoshi",
    "meaning": "もし〜ならば",
    "example": "要是下雨，我们就别出去了。",
    "exampleMeaning": "もし雨が降ったら、出かけないようにしましょう。",
    "category": [
      "conjunction"
    ],
    "etymology": "「要」（襾：にし）＋「是」（日：ひへん）。もし〜ならばを表す。",
    "mnemonic": "「YOSHI」＝要（にし）＋是（ひへん）→「もし〜ならば」で覚える。"
  },
  {
    "id": 431,
    "hanzi": "叶子",
    "pinyin": "yèzi",
    "meaning": "葉っぱ",
    "example": "树上的叶子变黄了。",
    "exampleMeaning": "木の葉っぱが黄色くなりました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「叶」（口：くちへん）＋「子」（子：こ）。葉っぱを表す。",
    "mnemonic": "「Yシ」＝叶（くちへん）＋子（こ）→「葉っぱ」で覚える。"
  },
  {
    "id": 432,
    "hanzi": "一定",
    "pinyin": "yídìng",
    "meaning": "必ず、絶対に",
    "example": "我一定会努力的。",
    "exampleMeaning": "必ず努力します。",
    "category": [
      "adverb"
    ],
    "etymology": "「一」（一：いち）＋「定」（宀：うかんむり）。必ず、絶対にを表す。",
    "mnemonic": "「YDNG」＝一（いち）＋定（うかんむり）→「必ず、絶対に」で覚える。"
  },
  {
    "id": 433,
    "hanzi": "一共",
    "pinyin": "yígòng",
    "meaning": "全部で、合計",
    "example": "一共多少钱？",
    "exampleMeaning": "全部でいくらですか？",
    "category": [
      "adverb"
    ],
    "etymology": "「一」（一：いち）＋「共」（八：はち）。全部で、合計を表す。",
    "mnemonic": "「YGNG」＝一（いち）＋共（はち）→「全部で、合計」で覚える。"
  },
  {
    "id": 434,
    "hanzi": "引起",
    "pinyin": "yǐnqǐ",
    "meaning": "引き起こす",
    "example": "这个问题引起了大家的注意。",
    "exampleMeaning": "この問題はみんなの注意を引き起こしました。",
    "category": [
      "verb"
    ],
    "etymology": "「引」（弓：ゆみ）＋「起」（走：そうにょう）。引き起こすを表す。",
    "mnemonic": "「YNQ」＝引（ゆみ）＋起（そうにょう）→「引き起こす」で覚える。"
  },
  {
    "id": 435,
    "hanzi": "迎接",
    "pinyin": "yíngjiē",
    "meaning": "迎える",
    "example": "我们去机场迎接客人。",
    "exampleMeaning": "空港に客を迎えに行きます。",
    "category": [
      "verb"
    ],
    "etymology": "「迎」（辶：しんにょう）＋「接」（手（扌）：てへん）。迎えるを表す。",
    "mnemonic": "「YNGJI」＝迎（しんにょう）＋接（てへん）→「迎える」で覚える。"
  },
  {
    "id": 436,
    "hanzi": "尤其",
    "pinyin": "yóuqí",
    "meaning": "特に",
    "example": "我喜欢运动，尤其是游泳。",
    "exampleMeaning": "私はスポーツが好きです、特に水泳です。",
    "category": [
      "adverb"
    ],
    "etymology": "「尤」（とりわけ）＋「其」（それ）。とりわけそれ→特に。",
    "mnemonic": "「ヨウチー」＝尤もそれ。その中でも際立って→特に。"
  },
  {
    "id": 437,
    "hanzi": "由",
    "pinyin": "yóu",
    "meaning": "〜によって",
    "example": "这件事由你决定。",
    "exampleMeaning": "この件はあなたが決めてください。",
    "category": [
      "preposition"
    ],
    "etymology": "「由」（田：た）。〜によってを表す。",
    "mnemonic": "「YU」＝由（た）→「〜によって」で覚える。"
  },
  {
    "id": 438,
    "hanzi": "由于",
    "pinyin": "yóuyú",
    "meaning": "〜のために、〜によって",
    "example": "由于天气不好，飞机晚点了。",
    "exampleMeaning": "天気が悪かったため、飛行機が遅れました。",
    "category": [
      "preposition"
    ],
    "etymology": "「由」（田：た）＋「于」（一：いち）。〜のために、〜によってを表す。",
    "mnemonic": "「YUY」＝由（た）＋于（いち）→「〜のために、〜によって」で覚える。"
  },
  {
    "id": 439,
    "hanzi": "有趣",
    "pinyin": "yǒuqù",
    "meaning": "面白い",
    "example": "这个故事很有趣。",
    "exampleMeaning": "この話はとても面白いです。",
    "category": [
      "adjective"
    ],
    "etymology": "「有」（ある）＋「趣」（おもむき）。趣がある→面白い。",
    "mnemonic": "「ヨウチュー」＝有＋趣。趣味がある→面白い。"
  },
  {
    "id": 440,
    "hanzi": "与",
    "pinyin": "yǔ",
    "meaning": "〜と（and）",
    "example": "中国与日本是邻国。",
    "exampleMeaning": "中国と日本は隣国です。",
    "category": [
      "conjunction"
    ],
    "etymology": "「与」（一：いち）。〜と（and）を表す。",
    "mnemonic": "「Y」＝与（いち）→「〜と（and）」で覚える。"
  },
  {
    "id": 441,
    "hanzi": "圆",
    "pinyin": "yuán",
    "meaning": "丸い",
    "example": "月亮是圆的。",
    "exampleMeaning": "月は丸いです。",
    "category": [
      "adjective"
    ],
    "etymology": "「圆」（囗：くにがまえ）。丸いを表す。",
    "mnemonic": "「ギョN」＝圆（くにがまえ）→「丸い」で覚える。"
  },
  {
    "id": 442,
    "hanzi": "月份",
    "pinyin": "yuèfèn",
    "meaning": "月、月分",
    "example": "现在是几月份？",
    "exampleMeaning": "今は何月ですか？",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「月」（月：つき）＋「份」（人（亻）：にんべん）。月、月分を表す。",
    "mnemonic": "「ギョFN」＝月（つき）＋份（にんべん）→「月、月分」で覚える。"
  },
  {
    "id": 443,
    "hanzi": "越来越",
    "pinyin": "yuèláiyuè",
    "meaning": "ますます、だんだん",
    "example": "天气越来越热了。",
    "exampleMeaning": "天気がますます暑くなってきました。",
    "category": [
      "adverb"
    ],
    "etymology": "「越」（走：そうにょう）＋「来」（木：き）＋「越」（走：そうにょう）。ますます、だんだんを表す。",
    "mnemonic": "「ギョLIYU」＝越（そうにょう）＋来（き）＋越（そうにょう）→「ますます、だんだん」で覚える。"
  },
  {
    "id": 444,
    "hanzi": "在",
    "pinyin": "zài",
    "meaning": "〜している（進行中）",
    "example": "他在看书。",
    "exampleMeaning": "彼は本を読んでいます。",
    "category": [
      "adverb"
    ],
    "etymology": "「在」（土：つち）。〜している（進行中）を表す。",
    "mnemonic": "「ZI」＝在（つち）→「〜している（進行中）」で覚える。"
  },
  {
    "id": 445,
    "hanzi": "咱们",
    "pinyin": "zánmen",
    "meaning": "私たち（話し手と聞き手）",
    "example": "咱们一起去吧。",
    "exampleMeaning": "一緒に行きましょう。",
    "category": [
      "pronoun"
    ],
    "etymology": "「咱」（口：くちへん）＋「们」（人（亻）：にんべん）。私たち（話し手と聞き手）を表す。",
    "mnemonic": "「ZNMEN」＝咱（くちへん）＋们（にんべん）→「私たち（話し手と聞き手）」で覚える。"
  },
  {
    "id": 446,
    "hanzi": "脏",
    "pinyin": "zāng",
    "meaning": "汚い",
    "example": "这件衣服脏了。",
    "exampleMeaning": "この服は汚れています。",
    "category": [
      "adjective"
    ],
    "etymology": "「脏」（月：にくづき）。汚いを表す。",
    "mnemonic": "「ZNG」＝脏（にくづき）→「汚い」で覚える。"
  },
  {
    "id": 447,
    "hanzi": "窄",
    "pinyin": "zhǎi",
    "meaning": "狭い",
    "example": "这条路很窄。",
    "exampleMeaning": "この道はとても狭いです。",
    "category": [
      "adjective"
    ],
    "etymology": "「窄」（穴：あなかんむり）。狭いを表す。",
    "mnemonic": "「ZHI」＝窄（あなかんむり）→「狭い」で覚える。"
  },
  {
    "id": 448,
    "hanzi": "招聘",
    "pinyin": "zhāopìn",
    "meaning": "募集する、求人する",
    "example": "公司正在招聘新员工。",
    "exampleMeaning": "会社は新入社員を募集しています。",
    "category": [
      "verb"
    ],
    "etymology": "「招」（手（扌）：てへん）＋「聘」（耳：みみへん）。募集する、求人するを表す。",
    "mnemonic": "「ZHOPN」＝招（てへん）＋聘（みみへん）→「募集する、求人する」で覚える。"
  },
  {
    "id": 449,
    "hanzi": "照",
    "pinyin": "zhào",
    "meaning": "写す、照らす",
    "example": "请帮我照一张相。",
    "exampleMeaning": "写真を一枚撮ってください。",
    "category": [
      "verb"
    ],
    "etymology": "「照」（火（灬）：れっか）。写す、照らすを表す。",
    "mnemonic": "「ZHオ」＝照（れっか）→「写す、照らす」で覚える。"
  },
  {
    "id": 450,
    "hanzi": "真正",
    "pinyin": "zhēnzhèng",
    "meaning": "真の、本当の",
    "example": "他是我真正的朋友。",
    "exampleMeaning": "彼は私の本当の友達です。",
    "category": [
      "adjective",
      "adverb"
    ],
    "etymology": "「真」（目：め）＋「正」（止：とめる）。真の、本当のを表す。",
    "mnemonic": "「ZHNZHNG」＝真（め）＋正（とめる）→「真の、本当の」で覚える。"
  },
  {
    "id": 451,
    "hanzi": "证明",
    "pinyin": "zhèngmíng",
    "meaning": "証明する",
    "example": "请证明你是对的。",
    "exampleMeaning": "あなたが正しいことを証明してください。",
    "category": [
      "verb",
      "noun"
    ],
    "etymology": "「证」（言（讠）：ごんべん）＋「明」（日：ひへん）。証明するを表す。",
    "mnemonic": "「ZHNGMNG」＝证（ごんべん）＋明（ひへん）→「証明する」で覚える。"
  },
  {
    "id": 452,
    "hanzi": "知识",
    "pinyin": "zhīshi",
    "meaning": "知識",
    "example": "知识就是力量。",
    "exampleMeaning": "知識は力です。",
    "category": [
      "noun"
    ],
    "measure": "种",
    "etymology": "「知」（矢：やへん）＋「识」（言（讠）：ごんべん）。知識を表す。",
    "mnemonic": "「ZHシ」＝知（やへん）＋识（ごんべん）→「知識」で覚える。"
  },
  {
    "id": 453,
    "hanzi": "只要",
    "pinyin": "zhǐyào",
    "meaning": "〜しさえすれば",
    "example": "只要努力，就能成功。",
    "exampleMeaning": "努力しさえすれば、成功できます。",
    "category": [
      "conjunction"
    ],
    "etymology": "「只」（口：くち）＋「要」（襾：にし）。〜しさえすればを表す。",
    "mnemonic": "「ZHYオ」＝只（くち）＋要（にし）→「〜しさえすれば」で覚える。"
  },
  {
    "id": 454,
    "hanzi": "制造",
    "pinyin": "zhìzào",
    "meaning": "製造する",
    "example": "这个产品是中国制造的。",
    "exampleMeaning": "この製品は中国製です。",
    "category": [
      "verb"
    ],
    "etymology": "「制」（刀（刂）：りっとう）＋「造」（辶：しんにょう）。製造するを表す。",
    "mnemonic": "「ZHZオ」＝制（りっとう）＋造（しんにょう）→「製造する」で覚える。"
  },
  {
    "id": 455,
    "hanzi": "治疗",
    "pinyin": "zhìliáo",
    "meaning": "治療する",
    "example": "医生正在治疗病人。",
    "exampleMeaning": "医者は患者を治療しています。",
    "category": [
      "verb"
    ],
    "etymology": "「治」（水（氵）：さんずい）＋「疗」（疒：やまいだれ）。治療するを表す。",
    "mnemonic": "「ZHリオ」＝治（さんずい）＋疗（やまいだれ）→「治療する」で覚える。"
  },
  {
    "id": 456,
    "hanzi": "终点",
    "pinyin": "zhōngdiǎn",
    "meaning": "終点、ゴール",
    "example": "下一站是终点站。",
    "exampleMeaning": "次の駅は終点です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「终」（糸（纟）：いとへん）＋「点」（火（灬）：れっか）。終点、ゴールを表す。",
    "mnemonic": "「ZHNGDIN」＝终（いとへん）＋点（れっか）→「終点、ゴール」で覚える。"
  },
  {
    "id": 457,
    "hanzi": "种",
    "pinyin": "zhǒng",
    "meaning": "種類、種",
    "example": "超市里有各种水果。",
    "exampleMeaning": "スーパーには各種の果物があります。",
    "category": [
      "measure"
    ],
    "etymology": "「种」（禾：のぎへん）。種類、種を表す。",
    "mnemonic": "「ZHNG」＝种（のぎへん）→「種類、種」で覚える。"
  },
  {
    "id": 458,
    "hanzi": "主持",
    "pinyin": "zhǔchí",
    "meaning": "司会する、主宰する",
    "example": "他来主持这个会议。",
    "exampleMeaning": "彼がこの会議を司会します。",
    "category": [
      "verb"
    ],
    "etymology": "「主」（丶：てん）＋「持」（手（扌）：てへん）。司会する、主宰するを表す。",
    "mnemonic": "「ZHCH」＝主（てん）＋持（てへん）→「司会する、主宰する」で覚える。"
  },
  {
    "id": 459,
    "hanzi": "专门",
    "pinyin": "zhuānmén",
    "meaning": "専門に、特に",
    "example": "我专门为了你来的。",
    "exampleMeaning": "私は特にあなたのために来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「专」（一：いち）＋「门」（門（门）：もんがまえ）。専門に、特にを表す。",
    "mnemonic": "「ショNMN」＝专（いち）＋门（もんがまえ）→「専門に、特に」で覚える。"
  },
  {
    "id": 460,
    "hanzi": "赚",
    "pinyin": "zhuàn",
    "meaning": "稼ぐ、儲ける",
    "example": "他一个月能赚很多钱。",
    "exampleMeaning": "彼は一ヶ月にたくさんのお金を稼げます。",
    "category": [
      "verb"
    ],
    "etymology": "「赚」（貝（贝）：かいへん）。稼ぐ、儲けるを表す。",
    "mnemonic": "「ショN」＝赚（かいへん）→「稼ぐ、儲ける」で覚える。"
  },
  {
    "id": 461,
    "hanzi": "装",
    "pinyin": "zhuāng",
    "meaning": "装う、詰める",
    "example": "请把书装进书包。",
    "exampleMeaning": "本をカバンに詰めてください。",
    "category": [
      "verb"
    ],
    "etymology": "「装」（衣：ころも）。装う、詰めるを表す。",
    "mnemonic": "「ショNG」＝装（ころも）→「装う、詰める」で覚える。"
  },
  {
    "id": 462,
    "hanzi": "状况",
    "pinyin": "zhuàngkuàng",
    "meaning": "状況、状態",
    "example": "经济状况不太好。",
    "exampleMeaning": "経済状況はあまり良くありません。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「状」（犬（犭）：けものへん）＋「况」（冫：にすい）。状況、状態を表す。",
    "mnemonic": "「ショNGKUNG」＝状（けものへん）＋况（にすい）→「状況、状態」で覚える。"
  },
  {
    "id": 463,
    "hanzi": "自然",
    "pinyin": "zìrán",
    "meaning": "自然な、自然",
    "example": "她说中文说得很自然。",
    "exampleMeaning": "彼女は中国語をとても自然に話します。",
    "category": [
      "adjective",
      "noun"
    ],
    "etymology": "「自」（おのずから）＋「然」（〜のよう）。自ずからそう→自然。",
    "mnemonic": "「ズーラン」＝自然。自ずから然り→ナチュラル。"
  },
  {
    "id": 464,
    "hanzi": "自在",
    "pinyin": "zìzài",
    "meaning": "自由自在な、気ままな",
    "example": "一个人旅行很自在。",
    "exampleMeaning": "一人旅はとても自由自在です。",
    "category": [
      "adjective"
    ],
    "etymology": "「自」（自：みずから）＋「在」（土：つち）。自由自在な、気ままなを表す。",
    "mnemonic": "「ZZI」＝自（みずから）＋在（つち）→「自由自在な、気ままな」で覚える。"
  },
  {
    "id": 465,
    "hanzi": "组成",
    "pinyin": "zǔchéng",
    "meaning": "構成する、組み立てる",
    "example": "这个班由二十个学生组成。",
    "exampleMeaning": "このクラスは20人の学生で構成されています。",
    "category": [
      "verb"
    ],
    "etymology": "「组」（糸（纟）：いとへん）＋「成」（戈：ほこづくり）。構成する、組み立てるを表す。",
    "mnemonic": "「ZCHNG」＝组（いとへん）＋成（ほこづくり）→「構成する、組み立てる」で覚える。"
  },
  {
    "id": 466,
    "hanzi": "作用",
    "pinyin": "zuòyòng",
    "meaning": "作用、働き",
    "example": "这种药的作用很好。",
    "exampleMeaning": "この薬の効き目はとても良いです。",
    "category": [
      "noun",
      "verb"
    ],
    "measure": "个",
    "etymology": "「作」（人（亻）：にんべん）＋「用」（用：もちいる）。作用、働きを表す。",
    "mnemonic": "「ソYNG」＝作（にんべん）＋用（もちいる）→「作用、働き」で覚える。"
  },
  {
    "id": 467,
    "hanzi": "左右",
    "pinyin": "zuǒyòu",
    "meaning": "〜くらい、前後",
    "example": "他大概三十岁左右。",
    "exampleMeaning": "彼はだいたい30歳くらいです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「左」（工：たくみ）＋「右」（口：くち）。〜くらい、前後を表す。",
    "mnemonic": "「ソYU」＝左（たくみ）＋右（くち）→「〜くらい、前後」で覚える。"
  },
  {
    "id": 468,
    "hanzi": "准时",
    "pinyin": "zhǔnshí",
    "meaning": "時間通りに",
    "example": "请准时参加。",
    "exampleMeaning": "時間通りに参加してください。",
    "category": [
      "adverb"
    ],
    "etymology": "「准」（冫：にすい）＋「时」（日：ひへん）。時間通りにを表す。",
    "mnemonic": "「ZHNSH」＝准（にすい）＋时（ひへん）→「時間通りに」で覚える。"
  },
  {
    "id": 469,
    "hanzi": "竹子",
    "pinyin": "zhúzi",
    "meaning": "竹",
    "example": "熊猫喜欢吃竹子。",
    "exampleMeaning": "パンダは竹を食べるのが好きです。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「竹」（竹：たけ）＋「子」（子：こ）。竹を表す。",
    "mnemonic": "「ZHシ」＝竹（たけ）＋子（こ）→「竹」で覚える。"
  },
  {
    "id": 470,
    "hanzi": "主人",
    "pinyin": "zhǔrén",
    "meaning": "主人、オーナー",
    "example": "这家店的主人很友好。",
    "exampleMeaning": "この店の主人はとても親切です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「主」（丶：てん）＋「人」（人：ひと）。主人、オーナーを表す。",
    "mnemonic": "「ZHRN」＝主（てん）＋人（ひと）→「主人、オーナー」で覚える。"
  },
  {
    "id": 477,
    "hanzi": "祖先",
    "pinyin": "zǔxiān",
    "meaning": "祖先",
    "example": "我们要尊重祖先。",
    "exampleMeaning": "祖先を尊重しましょう。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「祖」（示（礻）：しめすへん）＋「先」（儿：にんにょう）。祖先を表す。",
    "mnemonic": "「ZセキN」＝祖（しめすへん）＋先（にんにょう）→「祖先」で覚える。"
  },
  {
    "id": 478,
    "hanzi": "醉",
    "pinyin": "zuì",
    "meaning": "酔う",
    "example": "他喝醉了。",
    "exampleMeaning": "彼は酔っ払いました。",
    "category": [
      "adjective"
    ],
    "etymology": "「醉」（酉：とりへん）。酔うを表す。",
    "mnemonic": "「ソ」＝醉（とりへん）→「酔う」で覚える。"
  },
  {
    "id": 480,
    "hanzi": "作品",
    "pinyin": "zuòpǐn",
    "meaning": "作品",
    "example": "这是他的最新作品。",
    "exampleMeaning": "これは彼の最新作品です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「作」（人（亻）：にんべん）＋「品」（口：くち）。作品を表す。",
    "mnemonic": "「ソPN」＝作（にんべん）＋品（くち）→「作品」で覚える。"
  },
  {
    "id": 481,
    "hanzi": "作为",
    "pinyin": "zuòwéi",
    "meaning": "〜として",
    "example": "作为一名学生，应该努力学习。",
    "exampleMeaning": "学生として、しっかり勉強すべきです。",
    "category": [
      "preposition"
    ],
    "etymology": "「作」（人（亻）：にんべん）＋「为」（丶：てん）。〜としてを表す。",
    "mnemonic": "「ソWI」＝作（にんべん）＋为（てん）→「〜として」で覚える。"
  },
  {
    "id": 482,
    "hanzi": "做梦",
    "pinyin": "zuòmèng",
    "meaning": "夢を見る",
    "example": "我昨晚做了一个奇怪的梦。",
    "exampleMeaning": "昨晩変な夢を見ました。",
    "category": [
      "verb"
    ],
    "etymology": "「做」（人（亻）：にんべん）＋「梦」（木：き）。夢を見るを表す。",
    "mnemonic": "「ソMNG」＝做（にんべん）＋梦（き）→「夢を見る」で覚える。"
  },
  {
    "id": 485,
    "hanzi": "转告",
    "pinyin": "zhuǎngào",
    "meaning": "伝言する",
    "example": "请转告他我明天来。",
    "exampleMeaning": "明日来ると彼に伝えてください。",
    "category": [
      "verb"
    ],
    "etymology": "「转」（車（车）：くるまへん）＋「告」（口：くち）。伝言するを表す。",
    "mnemonic": "「ショNGオ」＝转（くるまへん）＋告（くち）→「伝言する」で覚える。"
  },
  {
    "id": 487,
    "hanzi": "资格",
    "pinyin": "zīgé",
    "meaning": "資格",
    "example": "你有资格参加这个比赛。",
    "exampleMeaning": "このコンテストに参加する資格があります。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「资」（貝（贝）：かい）＋「格」（木：きへん）。資格を表す。",
    "mnemonic": "「ZG」＝资（かい）＋格（きへん）→「資格」で覚える。"
  },
  {
    "id": 488,
    "hanzi": "资金",
    "pinyin": "zījīn",
    "meaning": "資金",
    "example": "这个项目需要大量资金。",
    "exampleMeaning": "このプロジェクトには多額の資金が必要です。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「资」（貝（贝）：かい）＋「金」（金：かね）。資金を表す。",
    "mnemonic": "「ZJN」＝资（かい）＋金（かね）→「資金」で覚える。"
  },
  {
    "id": 489,
    "hanzi": "自动",
    "pinyin": "zìdòng",
    "meaning": "自動の",
    "example": "这个门是自动的。",
    "exampleMeaning": "このドアは自動です。",
    "category": [
      "adjective"
    ],
    "etymology": "「自」（自：みずから）＋「动」（力：ちから）。自動のを表す。",
    "mnemonic": "「ZDNG」＝自（みずから）＋动（ちから）→「自動の」で覚える。"
  },
  {
    "id": 490,
    "hanzi": "自豪",
    "pinyin": "zìháo",
    "meaning": "誇りに思う",
    "example": "我为我的女儿感到自豪。",
    "exampleMeaning": "娘を誇りに思います。",
    "category": [
      "adjective"
    ],
    "etymology": "「自」（自：みずから）＋「豪」（豕：いのこ）。誇りに思うを表す。",
    "mnemonic": "「ZHオ」＝自（みずから）＋豪（いのこ）→「誇りに思う」で覚える。"
  },
  {
    "id": 491,
    "hanzi": "自己",
    "pinyin": "zìjǐ",
    "meaning": "自分",
    "example": "你自己决定吧。",
    "exampleMeaning": "自分で決めてください。",
    "category": [
      "pronoun"
    ],
    "etymology": "「自」（自：みずから）＋「己」（己：おのれ）。自分を表す。",
    "mnemonic": "「ZJ」＝自（みずから）＋己（おのれ）→「自分」で覚える。"
  },
  {
    "id": 492,
    "hanzi": "自从",
    "pinyin": "zìcóng",
    "meaning": "〜してから",
    "example": "自从他离开后，这里变了很多。",
    "exampleMeaning": "彼が去ってから、ここはとても変わりました。",
    "category": [
      "preposition"
    ],
    "etymology": "「自」（自：みずから）＋「从」（人：ひと）。〜してからを表す。",
    "mnemonic": "「ZCNG」＝自（みずから）＋从（ひと）→「〜してから」で覚える。"
  },
  {
    "id": 493,
    "hanzi": "自信",
    "pinyin": "zìxìn",
    "meaning": "自信がある",
    "example": "你要对自己有信心。",
    "exampleMeaning": "自分に自信を持ってください。",
    "category": [
      "adjective"
    ],
    "etymology": "「自」（自：みずから）＋「信」（人（亻）：にんべん）。自信があるを表す。",
    "mnemonic": "「ZXN」＝自（みずから）＋信（にんべん）→「自信がある」で覚える。"
  },
  {
    "id": 494,
    "hanzi": "字母",
    "pinyin": "zìmǔ",
    "meaning": "アルファベット、文字",
    "example": "请用字母写你的名字。",
    "exampleMeaning": "アルファベットで名前を書いてください。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「字」（子：こへん）＋「母」（母：はは）。アルファベット、文字を表す。",
    "mnemonic": "「ZM」＝字（こへん）＋母（はは）→「アルファベット、文字」で覚える。"
  },
  {
    "id": 495,
    "hanzi": "宗教",
    "pinyin": "zōngjiào",
    "meaning": "宗教",
    "example": "每个人都有宗教自由。",
    "exampleMeaning": "誰もが宗教の自由を持っています。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「宗」（宀：うかんむり）＋「教」（攵：のぶん）。宗教を表す。",
    "mnemonic": "「ZNGJIオ」＝宗（うかんむり）＋教（のぶん）→「宗教」で覚える。"
  },
  {
    "id": 496,
    "hanzi": "总统",
    "pinyin": "zǒngtǒng",
    "meaning": "大統領",
    "example": "美国总统访问了中国。",
    "exampleMeaning": "アメリカ大統領が中国を訪問しました。",
    "category": [
      "noun"
    ],
    "measure": "个",
    "etymology": "「总」（心：こころ）＋「统」（糸（纟）：いとへん）。大統領を表す。",
    "mnemonic": "「ZNGTNG」＝总（こころ）＋统（いとへん）→「大統領」で覚える。"
  },
  {
    "id": 497,
    "hanzi": "总算",
    "pinyin": "zǒngsuàn",
    "meaning": "やっと、ようやく",
    "example": "我总算找到了。",
    "exampleMeaning": "やっと見つけました。",
    "category": [
      "adverb"
    ],
    "etymology": "「总」（心：こころ）＋「算」（竹（⺮）：たけかんむり）。やっと、ようやくを表す。",
    "mnemonic": "「ZNGSUN」＝总（こころ）＋算（たけかんむり）→「やっと、ようやく」で覚える。"
  },
  {
    "id": 498,
    "hanzi": "阻止",
    "pinyin": "zǔzhǐ",
    "meaning": "阻止する、止める",
    "example": "没有人能阻止他。",
    "exampleMeaning": "誰も彼を止められません。",
    "category": [
      "verb"
    ],
    "etymology": "「阻」（阜（阝）：こざとへん）＋「止」（止：とめる）。阻止する、止めるを表す。",
    "mnemonic": "「ZZH」＝阻（こざとへん）＋止（とめる）→「阻止する、止める」で覚える。"
  },
  {
    "id": 499,
    "hanzi": "最近",
    "pinyin": "zuìjìn",
    "meaning": "最近",
    "example": "最近天气很热。",
    "exampleMeaning": "最近天気がとても暑いです。",
    "category": [
      "adverb"
    ],
    "etymology": "「最」＋「近」（ちかい）。最も近い→最近。",
    "mnemonic": "「ズイジン」＝最も近い時→さいきん。"
  },
  {
    "id": 501,
    "hanzi": "爱",
    "pinyin": "ài",
    "meaning": "愛する、大好きだ",
    "example": "我爱了。",
    "exampleMeaning": "私は爱ました。",
    "category": [
      "verb"
    ],
    "etymology": "「爱」（心（⺗）：こころ）。愛する、大好きだを表す。",
    "mnemonic": "「I」＝爱（こころ）→「愛する、大好きだ」で覚える。"
  },
  {
    "id": 502,
    "hanzi": "八",
    "pinyin": "bā",
    "meaning": "8、八つ",
    "example": "有八个。",
    "exampleMeaning": "八個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「八」（八：はち）。8、八つを表す。",
    "mnemonic": "「B」＝八（はち）→「8、八つ」で覚える。"
  },
  {
    "id": 503,
    "hanzi": "爸爸",
    "pinyin": "bàba",
    "meaning": "お父さん",
    "example": "这是爸爸。",
    "exampleMeaning": "これは爸爸です。",
    "category": [
      "noun"
    ],
    "etymology": "「爸」（父：ちち）＋「爸」（父：ちち）。お父さんを表す。",
    "mnemonic": "「Bハ」＝爸（ちち）＋爸（ちち）→「お父さん」で覚える。"
  },
  {
    "id": 504,
    "hanzi": "杯子",
    "pinyin": "bēizi",
    "meaning": "コップ、カップ",
    "example": "这是杯子。",
    "exampleMeaning": "これは杯子です。",
    "category": [
      "noun"
    ],
    "etymology": "「杯」（木：きへん）＋「子」（子：こ）。コップ、カップを表す。",
    "mnemonic": "「BIZI」＝杯（きへん）＋子（こ）→「コップ、カップ」で覚える。"
  },
  {
    "id": 505,
    "hanzi": "北京",
    "pinyin": "běijīng",
    "meaning": "北京",
    "example": "这是北京。",
    "exampleMeaning": "これは北京です。",
    "category": [
      "noun"
    ],
    "etymology": "「北」（匕：さじ）＋「京」（亠：なべぶた）。北京を表す。",
    "mnemonic": "「BIJNG」＝北（さじ）＋京（なべぶた）→「北京」で覚える。"
  },
  {
    "id": 506,
    "hanzi": "本",
    "pinyin": "běn",
    "meaning": "起源、もともと",
    "example": "这是本。",
    "exampleMeaning": "これは本です。",
    "category": [
      "noun"
    ],
    "etymology": "「本」（木：き）。起源、もともとを表す。",
    "mnemonic": "「BN」＝本（き）→「起源、もともと」で覚える。"
  },
  {
    "id": 507,
    "hanzi": "不客气",
    "pinyin": "búkèqi",
    "meaning": "どういたしまして",
    "example": "这是不客气。",
    "exampleMeaning": "これは不客气です。",
    "category": [
      "noun"
    ],
    "etymology": "「不」（一：いち）＋「客」（宀：うかんむり）＋「气」（气：きがまえ）。どういたしましてを表す。",
    "mnemonic": "「BKキ」＝不（いち）＋客（うかんむり）＋气（きがまえ）→「どういたしまして」で覚える。"
  },
  {
    "id": 508,
    "hanzi": "不",
    "pinyin": "bù",
    "meaning": "〜ではない",
    "example": "他不来了。",
    "exampleMeaning": "彼は不来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「不」（一：いち）。〜ではないを表す。",
    "mnemonic": "「B」＝不（いち）→「〜ではない」で覚える。"
  },
  {
    "id": 509,
    "hanzi": "菜",
    "pinyin": "cài",
    "meaning": "料理、おかず",
    "example": "这是菜。",
    "exampleMeaning": "これは菜です。",
    "category": [
      "noun"
    ],
    "etymology": "「菜」（艹：くさかんむり）。料理、おかずを表す。",
    "mnemonic": "「CI」＝菜（くさかんむり）→「料理、おかず」で覚える。"
  },
  {
    "id": 510,
    "hanzi": "茶",
    "pinyin": "chá",
    "meaning": "お茶",
    "example": "这是茶。",
    "exampleMeaning": "これは茶です。",
    "category": [
      "noun"
    ],
    "etymology": "「茶」（艹：くさかんむり）。お茶を表す。",
    "mnemonic": "「CH」＝茶（くさかんむり）→「お茶」で覚える。"
  },
  {
    "id": 511,
    "hanzi": "吃",
    "pinyin": "chī",
    "meaning": "食べる",
    "example": "我吃了。",
    "exampleMeaning": "私は吃ました。",
    "category": [
      "verb"
    ],
    "etymology": "「吃」（口：くちへん）。食べるを表す。",
    "mnemonic": "「CH」＝吃（くちへん）→「食べる」で覚える。"
  },
  {
    "id": 512,
    "hanzi": "出租车",
    "pinyin": "chūzūchē",
    "meaning": "タクシー",
    "example": "这是出租车。",
    "exampleMeaning": "これは出租车です。",
    "category": [
      "noun"
    ],
    "etymology": "「出」（凵：うけばこ）＋「租」（禾：のぎへん）＋「车」（車（车）：くるま）。タクシーを表す。",
    "mnemonic": "「CHZCH」＝出（うけばこ）＋租（のぎへん）＋车（くるま）→「タクシー」で覚える。"
  },
  {
    "id": 513,
    "hanzi": "打电话",
    "pinyin": "dǎdiànhuà",
    "meaning": "電話をかける",
    "example": "我打电话了。",
    "exampleMeaning": "私は打电话ました。",
    "category": [
      "verb"
    ],
    "etymology": "「打」（手（扌）：てへん）＋「电」（田：た）＋「话」（言（讠）：ごんべん）。電話をかけるを表す。",
    "mnemonic": "「DテキNHU」＝打（てへん）＋电（た）＋话（ごんべん）→「電話をかける」で覚える。"
  },
  {
    "id": 514,
    "hanzi": "大",
    "pinyin": "dà",
    "meaning": "大きい",
    "example": "这很大。",
    "exampleMeaning": "これはとても大です。",
    "category": [
      "adjective"
    ],
    "etymology": "「大」（大：だい）。大きいを表す。",
    "mnemonic": "「D」＝大（だい）→「大きい」で覚える。"
  },
  {
    "id": 515,
    "hanzi": "的",
    "pinyin": "de",
    "meaning": "〜の",
    "example": "他的我来了。",
    "exampleMeaning": "彼は私的来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「的」（白：しろ）。〜のを表す。",
    "mnemonic": "「トク」＝的（しろ）→「〜の」で覚える。"
  },
  {
    "id": 516,
    "hanzi": "点",
    "pinyin": "diǎn",
    "meaning": "少し",
    "example": "这是点。",
    "exampleMeaning": "これは点です。",
    "category": [
      "noun"
    ],
    "etymology": "「点」（火（灬）：れっか）。少しを表す。",
    "mnemonic": "「テキN」＝点（れっか）→「少し」で覚える。"
  },
  {
    "id": 517,
    "hanzi": "电脑",
    "pinyin": "diànnǎo",
    "meaning": "パソコン、コンピュータ",
    "example": "这是电脑。",
    "exampleMeaning": "これは电脑です。",
    "category": [
      "noun"
    ],
    "etymology": "「电」（田：た）＋「脑」（月：にくづき）。パソコン、コンピュータを表す。",
    "mnemonic": "「テキNNオ」＝电（た）＋脑（にくづき）→「パソコン、コンピュータ」で覚える。"
  },
  {
    "id": 518,
    "hanzi": "电视",
    "pinyin": "diànshì",
    "meaning": "テレビ",
    "example": "这是电视。",
    "exampleMeaning": "これは电视です。",
    "category": [
      "noun"
    ],
    "etymology": "「电」（田：た）＋「视」（見（见）：みる）。テレビを表す。",
    "mnemonic": "「テキNSH」＝电（た）＋视（みる）→「テレビ」で覚える。"
  },
  {
    "id": 519,
    "hanzi": "电影",
    "pinyin": "diànyǐng",
    "meaning": "映画",
    "example": "这是电影。",
    "exampleMeaning": "これは电影です。",
    "category": [
      "noun"
    ],
    "etymology": "「电」（田：た）＋「影」（彡：さんづくり）。映画を表す。",
    "mnemonic": "「テキNYNG」＝电（た）＋影（さんづくり）→「映画」で覚える。"
  },
  {
    "id": 520,
    "hanzi": "东西",
    "pinyin": "dōngxi",
    "meaning": "もの、こと",
    "example": "这是东西。",
    "exampleMeaning": "これは东西です。",
    "category": [
      "noun"
    ],
    "etymology": "「东」（木：き）＋「西」（襾：にし）。もの、ことを表す。",
    "mnemonic": "「DNGXI」＝东（き）＋西（にし）→「もの、こと」で覚える。"
  },
  {
    "id": 521,
    "hanzi": "都",
    "pinyin": "dōu",
    "meaning": "全部、どちらも",
    "example": "都很好。",
    "exampleMeaning": "都はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「都」（邑（阝）：おおざと）。全部、どちらもを表す。",
    "mnemonic": "「DU」＝都（おおざと）→「全部、どちらも」で覚える。"
  },
  {
    "id": 522,
    "hanzi": "读",
    "pinyin": "dú",
    "meaning": "読む",
    "example": "我读了。",
    "exampleMeaning": "私は读ました。",
    "category": [
      "verb"
    ],
    "etymology": "「读」（言（讠）：ごんべん）。読むを表す。",
    "mnemonic": "「D」＝读（ごんべん）→「読む」で覚える。"
  },
  {
    "id": 523,
    "hanzi": "对不起",
    "pinyin": "duìbuqǐ",
    "meaning": "すみません、ごめんなさい",
    "example": "这是对不起。",
    "exampleMeaning": "これは对不起です。",
    "category": [
      "noun"
    ],
    "etymology": "「对」（寸：すん）＋「不」（一：いち）＋「起」（走：そうにょう）。すみません、ごめんなさいを表す。",
    "mnemonic": "「トクBUQ」＝对（すん）＋不（いち）＋起（そうにょう）→「すみません、ごめんなさい」で覚える。"
  },
  {
    "id": 524,
    "hanzi": "多",
    "pinyin": "duō",
    "meaning": "多い",
    "example": "多很好。",
    "exampleMeaning": "多はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「多」（夕：ゆうべ）。多いを表す。",
    "mnemonic": "「トク」＝多（ゆうべ）→「多い」で覚える。"
  },
  {
    "id": 525,
    "hanzi": "多少",
    "pinyin": "duōshǎo",
    "meaning": "いくら、どのくらい",
    "example": "这是多少。",
    "exampleMeaning": "これは多少です。",
    "category": [
      "noun"
    ],
    "etymology": "「多」（夕：ゆうべ）＋「少」（小：しょう）。いくら、どのくらいを表す。",
    "mnemonic": "「トクSHオ」＝多（ゆうべ）＋少（しょう）→「いくら、どのくらい」で覚える。"
  },
  {
    "id": 526,
    "hanzi": "儿子",
    "pinyin": "érzi",
    "meaning": "息子",
    "example": "这是儿子。",
    "exampleMeaning": "これは儿子です。",
    "category": [
      "noun"
    ],
    "etymology": "「儿」（儿：にんにょう）＋「子」（子：こ）。息子を表す。",
    "mnemonic": "「RZI」＝儿（にんにょう）＋子（こ）→「息子」で覚える。"
  },
  {
    "id": 527,
    "hanzi": "二",
    "pinyin": "èr",
    "meaning": "2、二つ",
    "example": "有二个。",
    "exampleMeaning": "二個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「二」（二：に）。2、二つを表す。",
    "mnemonic": "「R」＝二（に）→「2、二つ」で覚える。"
  },
  {
    "id": 528,
    "hanzi": "饭店",
    "pinyin": "fàndiàn",
    "meaning": "レストラン、飲食店",
    "example": "这是饭店。",
    "exampleMeaning": "これは饭店です。",
    "category": [
      "noun"
    ],
    "etymology": "「饭」（食（饣）：しょくへん）＋「店」（广：まだれ）。レストラン、飲食店を表す。",
    "mnemonic": "「FNDIN」＝饭（しょくへん）＋店（まだれ）→「レストラン、飲食店」で覚える。"
  },
  {
    "id": 529,
    "hanzi": "飞机",
    "pinyin": "fēijī",
    "meaning": "飛行機",
    "example": "这是飞机。",
    "exampleMeaning": "これは飞机です。",
    "category": [
      "noun"
    ],
    "etymology": "「飞」（飛（飞）：とぶ）＋「机」（木：きへん）。飛行機を表す。",
    "mnemonic": "「FIJ」＝飞（とぶ）＋机（きへん）→「飛行機」で覚える。"
  },
  {
    "id": 530,
    "hanzi": "分钟",
    "pinyin": "fēnzhōng",
    "meaning": "分（時間）",
    "example": "这是分钟。",
    "exampleMeaning": "これは分钟です。",
    "category": [
      "noun"
    ],
    "etymology": "「分」（刀（刂）：かたな）＋「钟」（金（钅）：かねへん）。分（時間）を表す。",
    "mnemonic": "「FNZHNG」＝分（かたな）＋钟（かねへん）→「分（時間）」で覚える。"
  },
  {
    "id": 531,
    "hanzi": "高兴",
    "pinyin": "gāoxìng",
    "meaning": "嬉しい、楽しい",
    "example": "这很高兴。",
    "exampleMeaning": "これはとても高兴です。",
    "category": [
      "adjective"
    ],
    "etymology": "「高」（高：たかい）＋「兴」（八：はち）。嬉しい、楽しいを表す。",
    "mnemonic": "「GOXNG」＝高（たかい）＋兴（はち）→「嬉しい、楽しい」で覚える。"
  },
  {
    "id": 532,
    "hanzi": "个",
    "pinyin": "gè",
    "meaning": "〜個（人や物を数える量詞）",
    "example": "一个。",
    "exampleMeaning": "1个。",
    "category": [
      "measure"
    ],
    "etymology": "「个」（人：ひと）。〜個（人や物を数える量詞）を表す。",
    "mnemonic": "「G」＝个（ひと）→「〜個（人や物を数える量詞）」で覚える。"
  },
  {
    "id": 533,
    "hanzi": "工作",
    "pinyin": "gōngzuò",
    "meaning": "仕事",
    "example": "这是工作。",
    "exampleMeaning": "これは工作です。",
    "category": [
      "noun"
    ],
    "etymology": "「工」（工：たくみ）＋「作」（人（亻）：にんべん）。仕事を表す。",
    "mnemonic": "「GNGZU」＝工（たくみ）＋作（にんべん）→「仕事」で覚える。"
  },
  {
    "id": 534,
    "hanzi": "狗",
    "pinyin": "gǒu",
    "meaning": "犬",
    "example": "这是狗。",
    "exampleMeaning": "これは狗です。",
    "category": [
      "noun"
    ],
    "etymology": "「狗」（犬（犭）：けものへん）。犬を表す。",
    "mnemonic": "「GU」＝狗（けものへん）→「犬」で覚える。"
  },
  {
    "id": 535,
    "hanzi": "汉语",
    "pinyin": "hànyǔ",
    "meaning": "中国語",
    "example": "这是汉语。",
    "exampleMeaning": "これは汉语です。",
    "category": [
      "noun"
    ],
    "etymology": "「汉」（水（氵）：さんずい）＋「语」（言（讠）：ごんべん）。中国語を表す。",
    "mnemonic": "「HNY」＝汉（さんずい）＋语（ごんべん）→「中国語」で覚える。"
  },
  {
    "id": 536,
    "hanzi": "好",
    "pinyin": "hǎo",
    "meaning": "良い",
    "example": "这很好。",
    "exampleMeaning": "これはとても好です。",
    "category": [
      "adjective"
    ],
    "etymology": "「好」（女：おんなへん）。良いを表す。",
    "mnemonic": "「Hオ」＝好（おんなへん）→「良い」で覚える。"
  },
  {
    "id": 537,
    "hanzi": "号",
    "pinyin": "hào",
    "meaning": "〜日（日付）",
    "example": "这是号。",
    "exampleMeaning": "これは号です。",
    "category": [
      "noun"
    ],
    "etymology": "「号」（口：くち）。〜日（日付）を表す。",
    "mnemonic": "「Hオ」＝号（くち）→「〜日（日付）」で覚える。"
  },
  {
    "id": 538,
    "hanzi": "喝",
    "pinyin": "hē",
    "meaning": "飲む",
    "example": "我喝了。",
    "exampleMeaning": "私は喝ました。",
    "category": [
      "verb"
    ],
    "etymology": "「喝」（口：くちへん）。飲むを表す。",
    "mnemonic": "「H」＝喝（くちへん）→「飲む」で覚える。"
  },
  {
    "id": 539,
    "hanzi": "和",
    "pinyin": "hé",
    "meaning": "〜と（and）",
    "example": "我喜欢茶，和也喜欢咖啡。",
    "exampleMeaning": "私はお茶が好きで、和コーヒーも好きです。",
    "category": [
      "conjunction"
    ],
    "etymology": "「和」（口：くち）。〜と（and）を表す。",
    "mnemonic": "「H」＝和（くち）→「〜と（and）」で覚える。"
  },
  {
    "id": 540,
    "hanzi": "很",
    "pinyin": "hěn",
    "meaning": "とても",
    "example": "他很来了。",
    "exampleMeaning": "彼は很来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「很」（彳：ぎょうにんべん）。とてもを表す。",
    "mnemonic": "「HN」＝很（ぎょうにんべん）→「とても」で覚える。"
  },
  {
    "id": 541,
    "hanzi": "后面",
    "pinyin": "hòumiàn",
    "meaning": "後ろ、後方",
    "example": "这是后面。",
    "exampleMeaning": "これは后面です。",
    "category": [
      "noun"
    ],
    "etymology": "「后」（口：くち）＋「面」（面：めん）。後ろ、後方を表す。",
    "mnemonic": "「HUMIN」＝后（くち）＋面（めん）→「後ろ、後方」で覚える。"
  },
  {
    "id": 542,
    "hanzi": "回",
    "pinyin": "huí",
    "meaning": "戻る、帰る",
    "example": "我回了。",
    "exampleMeaning": "私は回ました。",
    "category": [
      "verb"
    ],
    "etymology": "「回」（囗：くにがまえ）。戻る、帰るを表す。",
    "mnemonic": "「コ」＝回（くにがまえ）→「戻る、帰る」で覚える。"
  },
  {
    "id": 543,
    "hanzi": "会",
    "pinyin": "huì",
    "meaning": "できる",
    "example": "这是会。",
    "exampleMeaning": "これは会です。",
    "category": [
      "noun"
    ],
    "etymology": "「会」（人：ひと）。できるを表す。",
    "mnemonic": "「コ」＝会（ひと）→「できる」で覚える。"
  },
  {
    "id": 544,
    "hanzi": "几",
    "pinyin": "jǐ",
    "meaning": "いくら、どのくらい",
    "example": "这是几。",
    "exampleMeaning": "これは几です。",
    "category": [
      "noun"
    ],
    "etymology": "「几」（几：つくえ）。いくら、どのくらいを表す。",
    "mnemonic": "「J」＝几（つくえ）→「いくら、どのくらい」で覚える。"
  },
  {
    "id": 545,
    "hanzi": "家",
    "pinyin": "jiā",
    "meaning": "家、家庭",
    "example": "这是家。",
    "exampleMeaning": "これは家です。",
    "category": [
      "noun"
    ],
    "etymology": "「家」（宀：うかんむり）。家、家庭を表す。",
    "mnemonic": "「キ」＝家（うかんむり）→「家、家庭」で覚える。"
  },
  {
    "id": 546,
    "hanzi": "叫",
    "pinyin": "jiào",
    "meaning": "呼ぶ、〜という",
    "example": "我叫了。",
    "exampleMeaning": "私は叫ました。",
    "category": [
      "verb"
    ],
    "etymology": "「叫」（口：くちへん）。呼ぶ、〜というを表す。",
    "mnemonic": "「キオ」＝叫（くちへん）→「呼ぶ、〜という」で覚える。"
  },
  {
    "id": 547,
    "hanzi": "今天",
    "pinyin": "jīntiān",
    "meaning": "今日",
    "example": "这是今天。",
    "exampleMeaning": "これは今天です。",
    "category": [
      "noun"
    ],
    "etymology": "「今」（人：ひと）＋「天」（大：だい）。今日を表す。",
    "mnemonic": "「JNTIN」＝今（ひと）＋天（だい）→「今日」で覚える。"
  },
  {
    "id": 548,
    "hanzi": "九",
    "pinyin": "jiǔ",
    "meaning": "9、九つ",
    "example": "有九个。",
    "exampleMeaning": "九個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「九」（乙：おつ）。9、九つを表す。",
    "mnemonic": "「キ」＝九（おつ）→「9、九つ」で覚える。"
  },
  {
    "id": 549,
    "hanzi": "开",
    "pinyin": "kāi",
    "meaning": "開ける、開く",
    "example": "我开了。",
    "exampleMeaning": "私は开ました。",
    "category": [
      "verb"
    ],
    "etymology": "「开」（廾：にじゅうあし）。開ける、開くを表す。",
    "mnemonic": "「KI」＝开（にじゅうあし）→「開ける、開く」で覚える。"
  },
  {
    "id": 550,
    "hanzi": "看",
    "pinyin": "kàn",
    "meaning": "見る",
    "example": "我看了。",
    "exampleMeaning": "私は看ました。",
    "category": [
      "verb"
    ],
    "etymology": "「看」（目：め）。見るを表す。",
    "mnemonic": "「KN」＝看（め）→「見る」で覚える。"
  },
  {
    "id": 551,
    "hanzi": "看见",
    "pinyin": "kànjiàn",
    "meaning": "見える、見かける",
    "example": "我看见了。",
    "exampleMeaning": "私は看见ました。",
    "category": [
      "verb"
    ],
    "etymology": "「看」（目：め）＋「见」（見（见）：みる）。見える、見かけるを表す。",
    "mnemonic": "「KNJIN」＝看（め）＋见（みる）→「見える、見かける」で覚える。"
  },
  {
    "id": 552,
    "hanzi": "块",
    "pinyin": "kuài",
    "meaning": "元（通貨単位）",
    "example": "这是块。",
    "exampleMeaning": "これは块です。",
    "category": [
      "noun"
    ],
    "etymology": "「块」（土：つちへん）。元（通貨単位）を表す。",
    "mnemonic": "「コI」＝块（つちへん）→「元（通貨単位）」で覚える。"
  },
  {
    "id": 553,
    "hanzi": "来",
    "pinyin": "lái",
    "meaning": "来る",
    "example": "我来了。",
    "exampleMeaning": "私は来ました。",
    "category": [
      "verb"
    ],
    "etymology": "「来」（木：き）。来るを表す。",
    "mnemonic": "「LI」＝来（き）→「来る」で覚える。"
  },
  {
    "id": 554,
    "hanzi": "老师",
    "pinyin": "lǎoshī",
    "meaning": "先生",
    "example": "这是老师。",
    "exampleMeaning": "これは老师です。",
    "category": [
      "noun"
    ],
    "etymology": "「老」（老：おいかんむり）＋「师」（巾：はば）。先生を表す。",
    "mnemonic": "「LOSH」＝老（おいかんむり）＋师（はば）→「先生」で覚える。"
  },
  {
    "id": 555,
    "hanzi": "了",
    "pinyin": "le",
    "meaning": "",
    "example": "这是了。",
    "exampleMeaning": "これは了です。",
    "category": [
      "noun"
    ],
    "etymology": "「了」（乙：おつ）。を表す。",
    "mnemonic": "「ラク」＝了（おつ）→「」で覚える。"
  },
  {
    "id": 556,
    "hanzi": "冷",
    "pinyin": "lěng",
    "meaning": "寒い、冷たい",
    "example": "这很冷。",
    "exampleMeaning": "これはとても冷です。",
    "category": [
      "adjective"
    ],
    "etymology": "「冷」（冫：にすい）。寒い、冷たいを表す。",
    "mnemonic": "「LNG」＝冷（にすい）→「寒い、冷たい」で覚える。"
  },
  {
    "id": 557,
    "hanzi": "里",
    "pinyin": "lǐ",
    "meaning": "〜の中、内側",
    "example": "他里我来了。",
    "exampleMeaning": "彼は私里来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「里」（里：さと）。〜の中、内側を表す。",
    "mnemonic": "「L」＝里（さと）→「〜の中、内側」で覚える。"
  },
  {
    "id": 558,
    "hanzi": "六",
    "pinyin": "liù",
    "meaning": "6、六つ",
    "example": "有六个。",
    "exampleMeaning": "六個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「六」（八：はち）。6、六つを表す。",
    "mnemonic": "「リ」＝六（はち）→「6、六つ」で覚える。"
  },
  {
    "id": 559,
    "hanzi": "吗",
    "pinyin": "ma",
    "meaning": "",
    "example": "这是吗。",
    "exampleMeaning": "これは吗です。",
    "category": [
      "noun"
    ],
    "etymology": "「吗」（口：くちへん）。を表す。",
    "mnemonic": "「マ」＝吗（くちへん）→「」で覚える。"
  },
  {
    "id": 560,
    "hanzi": "妈妈",
    "pinyin": "māma",
    "meaning": "お母さん",
    "example": "这是妈妈。",
    "exampleMeaning": "これは妈妈です。",
    "category": [
      "noun"
    ],
    "etymology": "「妈」（女：おんなへん）＋「妈」（女：おんなへん）。お母さんを表す。",
    "mnemonic": "「Mマ」＝妈（おんなへん）＋妈（おんなへん）→「お母さん」で覚える。"
  },
  {
    "id": 561,
    "hanzi": "买",
    "pinyin": "mǎi",
    "meaning": "買う",
    "example": "我买了。",
    "exampleMeaning": "私は买ました。",
    "category": [
      "verb"
    ],
    "etymology": "「买」（貝（贝）：かい）。買うを表す。",
    "mnemonic": "「MI」＝买（かい）→「買う」で覚える。"
  },
  {
    "id": 562,
    "hanzi": "猫",
    "pinyin": "māo",
    "meaning": "猫",
    "example": "这是猫。",
    "exampleMeaning": "これは猫です。",
    "category": [
      "noun"
    ],
    "etymology": "「猫」（犬（犭）：けものへん）。猫を表す。",
    "mnemonic": "「Mオ」＝猫（けものへん）→「猫」で覚える。"
  },
  {
    "id": 563,
    "hanzi": "没关系",
    "pinyin": "méiguānxi",
    "meaning": "大丈夫、気にしないで",
    "example": "没关系很好。",
    "exampleMeaning": "没关系はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「没」（水（氵）：さんずい）＋「关」（八：はち）＋「系」（糸：いとへん）。大丈夫、気にしないでを表す。",
    "mnemonic": "「MIGUNXI」＝没（さんずい）＋关（はち）＋系（いとへん）→「大丈夫、気にしないで」で覚える。"
  },
  {
    "id": 564,
    "hanzi": "没有",
    "pinyin": "méiyǒu",
    "meaning": "ない、持っていない",
    "example": "这是没有。",
    "exampleMeaning": "これは没有です。",
    "category": [
      "noun"
    ],
    "etymology": "「没」（水（氵）：さんずい）＋「有」（月：つきへん）。ない、持っていないを表す。",
    "mnemonic": "「MIYU」＝没（さんずい）＋有（つきへん）→「ない、持っていない」で覚える。"
  },
  {
    "id": 565,
    "hanzi": "米饭",
    "pinyin": "mǐfàn",
    "meaning": "ご飯、米",
    "example": "这是米饭。",
    "exampleMeaning": "これは米饭です。",
    "category": [
      "noun"
    ],
    "etymology": "「米」（米：こめ）＋「饭」（食（饣）：しょくへん）。ご飯、米を表す。",
    "mnemonic": "「MFN」＝米（こめ）＋饭（しょくへん）→「ご飯、米」で覚える。"
  },
  {
    "id": 566,
    "hanzi": "名字",
    "pinyin": "míngzi",
    "meaning": "名前",
    "example": "这是名字。",
    "exampleMeaning": "これは名字です。",
    "category": [
      "noun"
    ],
    "etymology": "「名」（口：くち）＋「字」（子：こへん）。名前を表す。",
    "mnemonic": "「MNGZI」＝名（くち）＋字（こへん）→「名前」で覚える。"
  },
  {
    "id": 567,
    "hanzi": "明天",
    "pinyin": "míngtiān",
    "meaning": "明日",
    "example": "这是明天。",
    "exampleMeaning": "これは明天です。",
    "category": [
      "noun"
    ],
    "etymology": "「明」（日：ひへん）＋「天」（大：だい）。明日を表す。",
    "mnemonic": "「MNGTIN」＝明（ひへん）＋天（だい）→「明日」で覚える。"
  },
  {
    "id": 568,
    "hanzi": "哪",
    "pinyin": "nǎ",
    "meaning": "どの、どれ",
    "example": "这是哪。",
    "exampleMeaning": "これは哪です。",
    "category": [
      "noun"
    ],
    "etymology": "「哪」（口：くちへん）。どの、どれを表す。",
    "mnemonic": "「N」＝哪（くちへん）→「どの、どれ」で覚える。"
  },
  {
    "id": 569,
    "hanzi": "哪儿",
    "pinyin": "nǎer",
    "meaning": "どこ",
    "example": "这是哪儿。",
    "exampleMeaning": "これは哪儿です。",
    "category": [
      "noun"
    ],
    "etymology": "「哪」（口：くちへん）＋「儿」（儿：にんにょう）。どこを表す。",
    "mnemonic": "「Nジ」＝哪（くちへん）＋儿（にんにょう）→「どこ」で覚える。"
  },
  {
    "id": 570,
    "hanzi": "那",
    "pinyin": "nà",
    "meaning": "あの、その",
    "example": "那很好。",
    "exampleMeaning": "那はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「那」（邑（阝）：おおざと）。あの、そのを表す。",
    "mnemonic": "「N」＝那（おおざと）→「あの、その」で覚える。"
  },
  {
    "id": 571,
    "hanzi": "呢",
    "pinyin": "ne",
    "meaning": "",
    "example": "这是呢。",
    "exampleMeaning": "これは呢です。",
    "category": [
      "noun"
    ],
    "etymology": "「呢」（口：くちへん）。を表す。",
    "mnemonic": "「ナ」＝呢（くちへん）→「」で覚える。"
  },
  {
    "id": 572,
    "hanzi": "能",
    "pinyin": "néng",
    "meaning": "〜できる",
    "example": "我能了。",
    "exampleMeaning": "私は能ました。",
    "category": [
      "verb"
    ],
    "etymology": "「能」（肉（月）：にくづき）。〜できるを表す。",
    "mnemonic": "「NNG」＝能（にくづき）→「〜できる」で覚える。"
  },
  {
    "id": 573,
    "hanzi": "你",
    "pinyin": "nǐ",
    "meaning": "あなた",
    "example": "你很好。",
    "exampleMeaning": "你はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「你」（人（亻）：にんべん）。あなたを表す。",
    "mnemonic": "「N」＝你（にんべん）→「あなた」で覚える。"
  },
  {
    "id": 574,
    "hanzi": "年",
    "pinyin": "nián",
    "meaning": "年",
    "example": "这是年。",
    "exampleMeaning": "これは年です。",
    "category": [
      "noun"
    ],
    "etymology": "「年」（干：ほす）。年を表す。",
    "mnemonic": "「ニN」＝年（ほす）→「年」で覚える。"
  },
  {
    "id": 575,
    "hanzi": "女儿",
    "pinyin": "nǚér",
    "meaning": "娘",
    "example": "这是女儿。",
    "exampleMeaning": "これは女儿です。",
    "category": [
      "noun"
    ],
    "etymology": "「女」（女：おんな）＋「儿」（儿：にんにょう）。娘を表す。",
    "mnemonic": "「NR」＝女（おんな）＋儿（にんにょう）→「娘」で覚える。"
  },
  {
    "id": 576,
    "hanzi": "朋友",
    "pinyin": "péngyou",
    "meaning": "友達",
    "example": "这是朋友。",
    "exampleMeaning": "これは朋友です。",
    "category": [
      "noun"
    ],
    "etymology": "「朋」（月：つき）＋「友」（又：また）。友達を表す。",
    "mnemonic": "「PNGYOU」＝朋（つき）＋友（また）→「友達」で覚える。"
  },
  {
    "id": 577,
    "hanzi": "漂亮",
    "pinyin": "piàoliang",
    "meaning": "きれいな、美しい",
    "example": "这是漂亮。",
    "exampleMeaning": "これは漂亮です。",
    "category": [
      "noun"
    ],
    "etymology": "「漂」（水（氵）：さんずい）＋「亮」（亠：なべぶた）。きれいな、美しいを表す。",
    "mnemonic": "「ヒOLIANG」＝漂（さんずい）＋亮（なべぶた）→「きれいな、美しい」で覚える。"
  },
  {
    "id": 578,
    "hanzi": "苹果",
    "pinyin": "píngguǒ",
    "meaning": "りんご",
    "example": "这是苹果。",
    "exampleMeaning": "これは苹果です。",
    "category": [
      "noun"
    ],
    "etymology": "「苹」（艹：くさかんむり）＋「果」（木：き）。りんごを表す。",
    "mnemonic": "「PNGGU」＝苹（くさかんむり）＋果（き）→「りんご」で覚える。"
  },
  {
    "id": 579,
    "hanzi": "七",
    "pinyin": "qī",
    "meaning": "7、七つ",
    "example": "有七个。",
    "exampleMeaning": "七個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「七」（一：いち）。7、七つを表す。",
    "mnemonic": "「Q」＝七（いち）→「7、七つ」で覚える。"
  },
  {
    "id": 580,
    "hanzi": "前面",
    "pinyin": "qiánmiàn",
    "meaning": "前、前方",
    "example": "这是前面。",
    "exampleMeaning": "これは前面です。",
    "category": [
      "noun"
    ],
    "etymology": "「前」（刀（刂）：りっとう）＋「面」（面：めん）。前、前方を表す。",
    "mnemonic": "「キNMIN」＝前（りっとう）＋面（めん）→「前、前方」で覚える。"
  },
  {
    "id": 581,
    "hanzi": "钱",
    "pinyin": "qián",
    "meaning": "お金",
    "example": "这是钱。",
    "exampleMeaning": "これは钱です。",
    "category": [
      "noun"
    ],
    "etymology": "「钱」（金（钅）：かねへん）。お金を表す。",
    "mnemonic": "「キN」＝钱（かねへん）→「お金」で覚える。"
  },
  {
    "id": 582,
    "hanzi": "请",
    "pinyin": "qǐng",
    "meaning": "頼む、どうぞ",
    "example": "我请了。",
    "exampleMeaning": "私は请ました。",
    "category": [
      "verb"
    ],
    "etymology": "「请」（言（讠）：ごんべん）。頼む、どうぞを表す。",
    "mnemonic": "「QNG」＝请（ごんべん）→「頼む、どうぞ」で覚える。"
  },
  {
    "id": 583,
    "hanzi": "去",
    "pinyin": "qù",
    "meaning": "行く",
    "example": "我去了。",
    "exampleMeaning": "私は去ました。",
    "category": [
      "verb"
    ],
    "etymology": "「去」（厶：む）。行くを表す。",
    "mnemonic": "「Q」＝去（む）→「行く」で覚える。"
  },
  {
    "id": 584,
    "hanzi": "热",
    "pinyin": "rè",
    "meaning": "暑い、熱い",
    "example": "这是热。",
    "exampleMeaning": "これは热です。",
    "category": [
      "noun"
    ],
    "etymology": "「热」（火（灬）：れっか）。暑い、熱いを表す。",
    "mnemonic": "「R」＝热（れっか）→「暑い、熱い」で覚える。"
  },
  {
    "id": 585,
    "hanzi": "人",
    "pinyin": "rén",
    "meaning": "人、男性",
    "example": "这是人。",
    "exampleMeaning": "これは人です。",
    "category": [
      "noun"
    ],
    "etymology": "「人」（人：ひと）。人、男性を表す。",
    "mnemonic": "「RN」＝人（ひと）→「人、男性」で覚える。"
  },
  {
    "id": 586,
    "hanzi": "认识",
    "pinyin": "rènshi",
    "meaning": "知っている",
    "example": "我认识了。",
    "exampleMeaning": "私は认识ました。",
    "category": [
      "verb"
    ],
    "etymology": "「认」（言（讠）：ごんべん）＋「识」（言（讠）：ごんべん）。知っているを表す。",
    "mnemonic": "「RNSHI」＝认（ごんべん）＋识（ごんべん）→「知っている」で覚える。"
  },
  {
    "id": 587,
    "hanzi": "三",
    "pinyin": "sān",
    "meaning": "3、三つ",
    "example": "有三个。",
    "exampleMeaning": "三個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「三」（一：いち）。3、三つを表す。",
    "mnemonic": "「SN」＝三（いち）→「3、三つ」で覚える。"
  },
  {
    "id": 588,
    "hanzi": "商店",
    "pinyin": "shāngdiàn",
    "meaning": "商店、店",
    "example": "这是商店。",
    "exampleMeaning": "これは商店です。",
    "category": [
      "noun"
    ],
    "etymology": "「商」（口：くち）＋「店」（广：まだれ）。商店、店を表す。",
    "mnemonic": "「SHNGDIN」＝商（くち）＋店（まだれ）→「商店、店」で覚える。"
  },
  {
    "id": 589,
    "hanzi": "上",
    "pinyin": "shàng",
    "meaning": "上、〜の上に",
    "example": "他上我来了。",
    "exampleMeaning": "彼は私上来ました。",
    "category": [
      "preposition"
    ],
    "etymology": "「上」（一：いち）。上、〜の上にを表す。",
    "mnemonic": "「SHNG」＝上（いち）→「上、〜の上に」で覚える。"
  },
  {
    "id": 590,
    "hanzi": "上午",
    "pinyin": "shàngwǔ",
    "meaning": "朝、午前",
    "example": "这是上午。",
    "exampleMeaning": "これは上午です。",
    "category": [
      "noun"
    ],
    "etymology": "「上」（一：いち）＋「午」（十：じゅう）。朝、午前を表す。",
    "mnemonic": "「SHNGW」＝上（いち）＋午（じゅう）→「朝、午前」で覚える。"
  },
  {
    "id": 591,
    "hanzi": "少",
    "pinyin": "shǎo",
    "meaning": "少ない",
    "example": "少很好。",
    "exampleMeaning": "少はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「少」（小：しょう）。少ないを表す。",
    "mnemonic": "「SHオ」＝少（しょう）→「少ない」で覚える。"
  },
  {
    "id": 592,
    "hanzi": "谁",
    "pinyin": "shéi",
    "meaning": "誰",
    "example": "谁很好。",
    "exampleMeaning": "谁はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「谁」（言（讠）：ごんべん）。誰を表す。",
    "mnemonic": "「SHI」＝谁（ごんべん）→「誰」で覚える。"
  },
  {
    "id": 593,
    "hanzi": "什么",
    "pinyin": "shénme",
    "meaning": "何？",
    "example": "这是什么。",
    "exampleMeaning": "これは什么です。",
    "category": [
      "noun"
    ],
    "etymology": "「什」（人（亻）：にんべん）＋「么」（丿：の）。何？を表す。",
    "mnemonic": "「SHNME」＝什（にんべん）＋么（の）→「何？」で覚える。"
  },
  {
    "id": 594,
    "hanzi": "十",
    "pinyin": "shí",
    "meaning": "10、十",
    "example": "有十个。",
    "exampleMeaning": "十個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「十」（十：じゅう）。10、十を表す。",
    "mnemonic": "「SH」＝十（じゅう）→「10、十」で覚える。"
  },
  {
    "id": 595,
    "hanzi": "时候",
    "pinyin": "shíhou",
    "meaning": "時間、〜の時",
    "example": "这是时候。",
    "exampleMeaning": "これは时候です。",
    "category": [
      "noun"
    ],
    "etymology": "「时」（日：ひへん）＋「候」（人（亻）：にんべん）。時間、〜の時を表す。",
    "mnemonic": "「SHコウ」＝时（ひへん）＋候（にんべん）→「時間、〜の時」で覚える。"
  },
  {
    "id": 596,
    "hanzi": "是",
    "pinyin": "shì",
    "meaning": "〜である（是）",
    "example": "我是了。",
    "exampleMeaning": "私は是ました。",
    "category": [
      "verb"
    ],
    "etymology": "「是」（日：ひへん）。〜である（是）を表す。",
    "mnemonic": "「SH」＝是（ひへん）→「〜である（是）」で覚える。"
  },
  {
    "id": 597,
    "hanzi": "书",
    "pinyin": "shū",
    "meaning": "本",
    "example": "这是书。",
    "exampleMeaning": "これは书です。",
    "category": [
      "noun"
    ],
    "etymology": "「书」（乙：おつ）。本を表す。",
    "mnemonic": "「SH」＝书（おつ）→「本」で覚える。"
  },
  {
    "id": 598,
    "hanzi": "水",
    "pinyin": "shuǐ",
    "meaning": "水",
    "example": "这是水。",
    "exampleMeaning": "これは水です。",
    "category": [
      "noun"
    ],
    "etymology": "「水」（水：みず）。水を表す。",
    "mnemonic": "「ショ」＝水（みず）→「水」で覚える。"
  },
  {
    "id": 599,
    "hanzi": "水果",
    "pinyin": "shuǐguǒ",
    "meaning": "果物",
    "example": "这是水果。",
    "exampleMeaning": "これは水果です。",
    "category": [
      "noun"
    ],
    "etymology": "「水」（水：みず）＋「果」（木：き）。果物を表す。",
    "mnemonic": "「ショコ」＝水（みず）＋果（き）→「果物」で覚える。"
  },
  {
    "id": 600,
    "hanzi": "睡觉",
    "pinyin": "shuìjiào",
    "meaning": "寝る",
    "example": "我睡觉了。",
    "exampleMeaning": "私は睡觉ました。",
    "category": [
      "verb"
    ],
    "etymology": "「睡」（目：めへん）＋「觉」（見（见）：みる）。寝るを表す。",
    "mnemonic": "「ショキオ」＝睡（めへん）＋觉（みる）→「寝る」で覚える。"
  },
  {
    "id": 601,
    "hanzi": "说",
    "pinyin": "shuō",
    "meaning": "話す、言う",
    "example": "我说了。",
    "exampleMeaning": "私は说ました。",
    "category": [
      "verb"
    ],
    "etymology": "「说」（言（讠）：ごんべん）。話す、言うを表す。",
    "mnemonic": "「ショ」＝说（ごんべん）→「話す、言う」で覚える。"
  },
  {
    "id": 602,
    "hanzi": "四",
    "pinyin": "sì",
    "meaning": "4、四つ",
    "example": "有四个。",
    "exampleMeaning": "四個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「四」（囗：くにがまえ）。4、四つを表す。",
    "mnemonic": "「S」＝四（くにがまえ）→「4、四つ」で覚える。"
  },
  {
    "id": 603,
    "hanzi": "岁",
    "pinyin": "suì",
    "meaning": "〜歳（年齢を数える量詞）",
    "example": "一岁。",
    "exampleMeaning": "1岁。",
    "category": [
      "measure"
    ],
    "etymology": "「岁」（山：やま）。〜歳（年齢を数える量詞）を表す。",
    "mnemonic": "「ソク」＝岁（やま）→「〜歳（年齢を数える量詞）」で覚える。"
  },
  {
    "id": 604,
    "hanzi": "他",
    "pinyin": "tā",
    "meaning": "彼",
    "example": "他很好。",
    "exampleMeaning": "他はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「他」（人（亻）：にんべん）。彼を表す。",
    "mnemonic": "「T」＝他（にんべん）→「彼」で覚える。"
  },
  {
    "id": 605,
    "hanzi": "她",
    "pinyin": "tā",
    "meaning": "彼女",
    "example": "她很好。",
    "exampleMeaning": "她はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「她」（女：おんなへん）。彼女を表す。",
    "mnemonic": "「T」＝她（おんなへん）→「彼女」で覚える。"
  },
  {
    "id": 606,
    "hanzi": "太",
    "pinyin": "tài",
    "meaning": "〜すぎる",
    "example": "他太来了。",
    "exampleMeaning": "彼は太来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「太」（大：だい）。〜すぎるを表す。",
    "mnemonic": "「TI」＝太（だい）→「〜すぎる」で覚える。"
  },
  {
    "id": 607,
    "hanzi": "天气",
    "pinyin": "tiānqì",
    "meaning": "天気",
    "example": "这是天气。",
    "exampleMeaning": "これは天气です。",
    "category": [
      "noun"
    ],
    "etymology": "「天」（大：だい）＋「气」（气：きがまえ）。天気を表す。",
    "mnemonic": "「テイNQ」＝天（だい）＋气（きがまえ）→「天気」で覚える。"
  },
  {
    "id": 608,
    "hanzi": "听",
    "pinyin": "tīng",
    "meaning": "聞く",
    "example": "我听了。",
    "exampleMeaning": "私は听ました。",
    "category": [
      "verb"
    ],
    "etymology": "「听」（口：くちへん）。聞くを表す。",
    "mnemonic": "「TNG」＝听（くちへん）→「聞く」で覚える。"
  },
  {
    "id": 609,
    "hanzi": "同学",
    "pinyin": "tóngxué",
    "meaning": "クラスメート",
    "example": "这是同学。",
    "exampleMeaning": "これは同学です。",
    "category": [
      "noun"
    ],
    "etymology": "「同」（口：くち）＋「学」（子：こへん）。クラスメートを表す。",
    "mnemonic": "「TNGXU」＝同（くち）＋学（こへん）→「クラスメート」で覚える。"
  },
  {
    "id": 610,
    "hanzi": "喂(叹词)",
    "pinyin": "wèi",
    "meaning": "もしもし（電話）",
    "example": "这是喂(叹词)。",
    "exampleMeaning": "これは喂(叹词)です。",
    "category": [
      "noun"
    ],
    "etymology": "「喂」（口：くちへん）＋「(」（(：かっこ）＋「叹」（口：くちへん）＋「词」（言（讠）：ごんべん）＋「)」（)：かっこ）。もしもし（電話）を表す。",
    "mnemonic": "「WI」＝喂（くちへん）＋(（かっこ）＋叹（くちへん）＋词（ごんべん）＋)（かっこ）→「もしもし（電話）」で覚える。"
  },
  {
    "id": 611,
    "hanzi": "我",
    "pinyin": "wǒ",
    "meaning": "私",
    "example": "我很好。",
    "exampleMeaning": "我はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「我」（戈：ほこづくり）。私を表す。",
    "mnemonic": "「W」＝我（ほこづくり）→「私」で覚える。"
  },
  {
    "id": 612,
    "hanzi": "我们",
    "pinyin": "wǒmen",
    "meaning": "私たち",
    "example": "我们很好。",
    "exampleMeaning": "我们はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「我」（戈：ほこづくり）＋「们」（人（亻）：にんべん）。私たちを表す。",
    "mnemonic": "「Wモン」＝我（ほこづくり）＋们（にんべん）→「私たち」で覚える。"
  },
  {
    "id": 613,
    "hanzi": "五",
    "pinyin": "wǔ",
    "meaning": "5、五つ",
    "example": "有五个。",
    "exampleMeaning": "五個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「五」（二：に）。5、五つを表す。",
    "mnemonic": "「W」＝五（に）→「5、五つ」で覚える。"
  },
  {
    "id": 614,
    "hanzi": "喜欢",
    "pinyin": "xǐhuan",
    "meaning": "好きだ",
    "example": "我喜欢了。",
    "exampleMeaning": "私は喜欢ました。",
    "category": [
      "verb"
    ],
    "etymology": "「喜」（口：くち）＋「欢」（欠：あくび）。好きだを表す。",
    "mnemonic": "「Xカン」＝喜（くち）＋欢（あくび）→「好きだ」で覚える。"
  },
  {
    "id": 615,
    "hanzi": "下",
    "pinyin": "xià",
    "meaning": "下",
    "example": "这是下。",
    "exampleMeaning": "これは下です。",
    "category": [
      "noun"
    ],
    "etymology": "「下」（一：いち）。下を表す。",
    "mnemonic": "「セキ」＝下（いち）→「下」で覚える。"
  },
  {
    "id": 616,
    "hanzi": "下午",
    "pinyin": "xiàwǔ",
    "meaning": "午後",
    "example": "这是下午。",
    "exampleMeaning": "これは下午です。",
    "category": [
      "noun"
    ],
    "etymology": "「下」（一：いち）＋「午」（十：じゅう）。午後を表す。",
    "mnemonic": "「セキW」＝下（いち）＋午（じゅう）→「午後」で覚える。"
  },
  {
    "id": 617,
    "hanzi": "下雨",
    "pinyin": "xiàyǔ",
    "meaning": "雨が降る",
    "example": "我下雨了。",
    "exampleMeaning": "私は下雨ました。",
    "category": [
      "verb"
    ],
    "etymology": "「下」（一：いち）＋「雨」（雨：あめ）。雨が降るを表す。",
    "mnemonic": "「セキY」＝下（いち）＋雨（あめ）→「雨が降る」で覚える。"
  },
  {
    "id": 618,
    "hanzi": "先生",
    "pinyin": "xiānsheng",
    "meaning": "〜さん（男性）",
    "example": "这是先生。",
    "exampleMeaning": "これは先生です。",
    "category": [
      "noun"
    ],
    "etymology": "「先」（儿：にんにょう）＋「生」（生：うまれる）。〜さん（男性）を表す。",
    "mnemonic": "「セキNSHENG」＝先（にんにょう）＋生（うまれる）→「〜さん（男性）」で覚える。"
  },
  {
    "id": 619,
    "hanzi": "现在",
    "pinyin": "xiànzài",
    "meaning": "今",
    "example": "他现在来了。",
    "exampleMeaning": "彼は现在来ました。",
    "category": [
      "adverb"
    ],
    "etymology": "「现」（玉（王）：たまへん）＋「在」（土：つち）。今を表す。",
    "mnemonic": "「セキNZI」＝现（たまへん）＋在（つち）→「今」で覚える。"
  },
  {
    "id": 620,
    "hanzi": "想",
    "pinyin": "xiǎng",
    "meaning": "思う、考える",
    "example": "我想了。",
    "exampleMeaning": "私は想ました。",
    "category": [
      "verb"
    ],
    "etymology": "「想」（心：こころ）。思う、考えるを表す。",
    "mnemonic": "「セキNG」＝想（こころ）→「思う、考える」で覚える。"
  },
  {
    "id": 621,
    "hanzi": "小",
    "pinyin": "xiǎo",
    "meaning": "小さい",
    "example": "这很小。",
    "exampleMeaning": "これはとても小です。",
    "category": [
      "adjective"
    ],
    "etymology": "「小」（小：しょう）。小さいを表す。",
    "mnemonic": "「セキオ」＝小（しょう）→「小さい」で覚える。"
  },
  {
    "id": 622,
    "hanzi": "小姐",
    "pinyin": "xiǎojie",
    "meaning": "お嬢さん",
    "example": "这是小姐。",
    "exampleMeaning": "これは小姐です。",
    "category": [
      "noun"
    ],
    "etymology": "「小」（小：しょう）＋「姐」（女：おんなへん）。お嬢さんを表す。",
    "mnemonic": "「セキOJIE」＝小（しょう）＋姐（おんなへん）→「お嬢さん」で覚える。"
  },
  {
    "id": 623,
    "hanzi": "些",
    "pinyin": "xiē",
    "meaning": "いくつかの",
    "example": "些很好。",
    "exampleMeaning": "些はとても良いです。",
    "category": [
      "pronoun"
    ],
    "etymology": "「些」（二：に）。いくつかのを表す。",
    "mnemonic": "「セキ」＝些（に）→「いくつかの」で覚える。"
  },
  {
    "id": 624,
    "hanzi": "写",
    "pinyin": "xiě",
    "meaning": "書く",
    "example": "我写了。",
    "exampleMeaning": "私は写ました。",
    "category": [
      "verb"
    ],
    "etymology": "「写」（宀：うかんむり）。書くを表す。",
    "mnemonic": "「セキ」＝写（うかんむり）→「書く」で覚える。"
  },
  {
    "id": 625,
    "hanzi": "谢谢",
    "pinyin": "xièxie",
    "meaning": "ありがとう、感謝する",
    "example": "我谢谢了。",
    "exampleMeaning": "私は谢谢ました。",
    "category": [
      "verb"
    ],
    "etymology": "「谢」（言（讠）：ごんべん）＋「谢」（言（讠）：ごんべん）。ありがとう、感謝するを表す。",
    "mnemonic": "「セキシャ」＝谢（ごんべん）＋谢（ごんべん）→「ありがとう、感謝する」で覚える。"
  },
  {
    "id": 626,
    "hanzi": "星期",
    "pinyin": "xīngqī",
    "meaning": "週",
    "example": "这是星期。",
    "exampleMeaning": "これは星期です。",
    "category": [
      "noun"
    ],
    "etymology": "「星」（日：ひへん）＋「期」（月：つきへん）。週を表す。",
    "mnemonic": "「XNGQ」＝星（ひへん）＋期（つきへん）→「週」で覚える。"
  },
  {
    "id": 627,
    "hanzi": "学生",
    "pinyin": "xuésheng",
    "meaning": "学生",
    "example": "这是学生。",
    "exampleMeaning": "これは学生です。",
    "category": [
      "noun"
    ],
    "etymology": "「学」（子：こへん）＋「生」（生：うまれる）。学生を表す。",
    "mnemonic": "「キョセイ」＝学（こへん）＋生（うまれる）→「学生」で覚える。"
  },
  {
    "id": 628,
    "hanzi": "学习",
    "pinyin": "xuéxí",
    "meaning": "学ぶ",
    "example": "我学习了。",
    "exampleMeaning": "私は学习ました。",
    "category": [
      "verb"
    ],
    "etymology": "「学」（子：こへん）＋「习」（乙：おつ）。学ぶを表す。",
    "mnemonic": "「キョX」＝学（こへん）＋习（おつ）→「学ぶ」で覚える。"
  },
  {
    "id": 629,
    "hanzi": "学校",
    "pinyin": "xuéxiào",
    "meaning": "学校",
    "example": "这是学校。",
    "exampleMeaning": "これは学校です。",
    "category": [
      "noun"
    ],
    "etymology": "「学」（子：こへん）＋「校」（木：きへん）。学校を表す。",
    "mnemonic": "「キョセキオ」＝学（こへん）＋校（きへん）→「学校」で覚える。"
  },
  {
    "id": 630,
    "hanzi": "一",
    "pinyin": "yī",
    "meaning": "1、一つ",
    "example": "有一个。",
    "exampleMeaning": "一個あります。",
    "category": [
      "numeral"
    ],
    "etymology": "「一」（一：いち）。1、一つを表す。",
    "mnemonic": "「Y」＝一（いち）→「1、一つ」で覚える。"
  },
  {
    "id": 631,
    "hanzi": "一点儿",
    "pinyin": "yīdiǎner",
    "meaning": "少し",
    "example": "这是一点儿。",
    "exampleMeaning": "これは一点儿です。",
    "category": [
      "noun"
    ],
    "etymology": "「一」（一：いち）＋「点」（火（灬）：れっか）＋「儿」（儿：にんにょう）。少しを表す。",
    "mnemonic": "「YテキNER」＝一（いち）＋点（れっか）＋儿（にんにょう）→「少し」で覚える。"
  },
  {
    "id": 632,
    "hanzi": "医生",
    "pinyin": "yīshēng",
    "meaning": "医者",
    "example": "这是医生。",
    "exampleMeaning": "これは医生です。",
    "category": [
      "noun"
    ],
    "etymology": "「医」（匚：はこがまえ）＋「生」（生：うまれる）。医者を表す。",
    "mnemonic": "「YSHNG」＝医（はこがまえ）＋生（うまれる）→「医者」で覚える。"
  },
  {
    "id": 633,
    "hanzi": "医院",
    "pinyin": "yīyuàn",
    "meaning": "病院",
    "example": "这是医院。",
    "exampleMeaning": "これは医院です。",
    "category": [
      "noun"
    ],
    "etymology": "「医」（匚：はこがまえ）＋「院」（阜（阝）：こざとへん）。病院を表す。",
    "mnemonic": "「YギョN」＝医（はこがまえ）＋院（こざとへん）→「病院」で覚える。"
  },
  {
    "id": 634,
    "hanzi": "衣服",
    "pinyin": "yīfu",
    "meaning": "服",
    "example": "这是衣服。",
    "exampleMeaning": "これは衣服です。",
    "category": [
      "noun"
    ],
    "etymology": "「衣」＋「服」（月：つきへん）。服を表す。",
    "mnemonic": "「Yフク」＝衣＋服（つきへん）→「服」で覚える。"
  },
  {
    "id": 635,
    "hanzi": "椅子",
    "pinyin": "yǐzi",
    "meaning": "椅子",
    "example": "这是椅子。",
    "exampleMeaning": "これは椅子です。",
    "category": [
      "noun"
    ],
    "etymology": "「椅」（木：きへん）＋「子」（子：こ）。椅子を表す。",
    "mnemonic": "「Yシ」＝椅（きへん）＋子（こ）→「椅子」で覚える。"
  },
  {
    "id": 636,
    "hanzi": "有",
    "pinyin": "yǒu",
    "meaning": "ある、持っている",
    "example": "我有了。",
    "exampleMeaning": "私は有ました。",
    "category": [
      "verb"
    ],
    "etymology": "「有」（月：つきへん）。ある、持っているを表す。",
    "mnemonic": "「YU」＝有（つきへん）→「ある、持っている」で覚える。"
  },
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
export default words;
