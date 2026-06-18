const words1 = [
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
  }
];
export default words1;
