#!/usr/bin/env python3
"""
HSK 1-4 の全単語リストを HSK Academy から取得し、words.json にマージする。
HSK4 合格には HSK1-4 の全 1200 語が必要。
"""
import json
import re
import ssl
import urllib.request
import shutil
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
WORDS_FILE = BASE_DIR / 'src' / 'data' / 'words.json'


def fetch_hsk_words(level: int):
    """HSK Academy から指定レベルの単語データを取得"""
    url = f'https://hsk.academy/en/hsk-{level}-vocabulary-list'
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

    with urllib.request.urlopen(req, context=ctx, timeout=30) as resp:
        html = resp.read().decode('utf-8')

    match = re.search(r'window\.__REACT_DATA\s*=\s*(\{.*?\});', html, re.DOTALL)
    if not match:
        raise Exception(f'Could not find __REACT_DATA in HSK{level} HTML')

    data = json.loads(match.group(1))
    words = data.get('words', [])

    result = []
    for w in words:
        # hanzi/def のクリーニング
        hanzi = w['hanzi'].strip()
        pinyin = w['pinyinToneSpace'].replace(' ', '')
        meaning = w['def'].split(';')[0].strip()
        # 括弧内の注釈を除去
        meaning = re.sub(r'\s*\(.*?\)', '', meaning).strip()
        result.append({
            'hanzi': hanzi,
            'pinyin': pinyin,
            'meaning_en': meaning,
        })
    return result


def assign_category(meaning_en: str):
    """英語の意味から品詞カテゴリを推測する"""
    m = meaning_en.lower().strip()

    # 動詞判定（to + 動詞 で始まる）
    verb_starters = [
        'to ', 'be ', 'do ', 'make ', 'get ', 'go ', 'come ', 'put ', 'take ',
        'give ', 'let ', 'set ', 'need ', 'want ', 'like ', 'ask ', 'tell ',
        'say ', 'speak ', 'use ', 'try ', 'keep ', 'begin ', 'start ',
        'arrive ', 'leave ', 'return ', 'feel ', 'think ', 'know ', 'see ',
        'hear ', 'find ', 'help ', 'work ', 'play ', 'live ', 'die ',
        'stay ', 'wait ', 'buy ', 'sell ', 'pay ', 'spend ', 'eat ',
        'drink ', 'cook ', 'wash ', 'open ', 'close ', 'turn ', 'change ',
        'send ', 'receive ', 'bring ', 'carry ', 'build ', 'break ',
        'cut ', 'pull ', 'push ', 'learn ', 'study ', 'teach ', 'read ',
        'write ', 'win ', 'lose ', 'forget ', 'remember ', 'smoke ',
        'answer ', 'explain ', 'discuss ', 'agree ', 'decide ', 'choose ',
        'continue ', 'stop ', 'finish ', 'compare ', 'develop ', 'improve ',
        'happen ', 'occur ', 'appear ', 'seem ', 'fall ', 'rise ', 'grow ',
        'pass ', 'cross ', 'reach ', 'enter ', 'drop ', 'register ',
        'hold ', 'lift ', 'throw ', 'catch ', 'draw ', 'paint ', 'clean ',
        'fix ', 'repair ', 'create ', 'destroy ', 'accept ', 'refuse ',
        'allow ', 'protect ', 'save ', 'kill ', 'hurt ', 'hit ',
        'touch ', 'move ', 'travel ', 'visit ', 'meet ', 'join ',
        'support ', 'follow ', 'lead ', 'manage ', 'control ',
        'include ', 'contain ', 'produce ', 'reduce ', 'increase ',
        'add ', 'remove ', 'collect ', 'connect ', 'share ', 'divide ',
        'combine ', 'translate ', 'express ', 'describe ', 'introduce ',
        'consider ', 'believe ', 'expect ', 'hope ', 'wish ',
        'prepare ', 'organize ', 'arrange ', 'plan ',
        'prefer ', 'enjoy ', 'hate ', 'notice ', 'realize ',
        'understand ', 'remember ', 'forgive ', 'excuse ',
        'apologize ', 'congratulate ', 'celebrate ',
        'to be ', 'call ', 'laugh ', 'cry ', 'swim ', 'fly ', 'jump ',
        'sit ', 'stand ', 'walk ', 'run ', 'eat ', 'drink ', 'cook ',
        'sing ', 'dance ', 'draw ', 'write ', 'read ', 'count ',
        'fill ', 'empty ', 'mix ', 'separate ', 'shake ', 'stir ',
        'smell ', 'taste ', 'sound ', 'look like ',
    ]
    for vs in verb_starters:
        if m.startswith(vs):
            return ['verb']

    # 副詞 (ly で終わる単語が含まれる)
    if re.search(r'\b\w+ly\b', m):
        return ['adverb']

    # よくある副詞
    adv_words = {
        'not', 'very', 'too', 'also', 'just', 'only', 'even', 'still',
        'already', 'almost', 'always', 'never', 'often', 'sometimes',
        'usually', 'really', 'quite', 'rather', 'perhaps', 'maybe',
        'probably', 'certainly', 'definitely', 'especially', 'particularly',
        'especially', 'actually', 'indeed', 'exactly', 'approximately',
        'completely', 'absolutely', 'totally', 'again', 'then', 'now',
        'later', 'here', 'there', 'everywhere', 'together', 'apart',
        'finally', 'suddenly', 'immediately', 'soon',
    }
    first_word = m.split(',')[0].strip().split(' ')[0]
    if first_word in adv_words:
        return ['adverb']

    # 接続詞
    conj_words = {
        'and', 'but', 'or', 'so', 'because', 'although', 'though',
        'however', 'therefore', 'thus', 'hence', 'meanwhile',
        'furthermore', 'moreover', 'nevertheless', 'otherwise',
        'unless', 'until', 'while', 'whereas', 'whether', 'if',
        'when', 'since', 'yet', 'besides', 'also',
    }
    if first_word in conj_words:
        return ['conjunction']

    # 前置詞
    prep_words = {
        'in', 'on', 'at', 'to', 'from', 'for', 'with', 'without',
        'by', 'about', 'through', 'during', 'before', 'after', 'above',
        'below', 'between', 'among', 'against', 'along', 'around',
        'behind', 'beside', 'except', 'inside', 'outside', 'toward',
        'under', 'upon', 'within', 'regarding', 'concerning', 'of',
    }
    if first_word in prep_words:
        return ['preposition']

    # 代名詞
    pronoun_words = {
        'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him',
        'her', 'us', 'them', 'my', 'your', 'his', 'its', 'our',
        'their', 'this', 'that', 'these', 'those', 'which', 'what',
        'who', 'whose', 'whom', 'everyone', 'someone', 'anyone',
        'everything', 'something', 'anything', 'nothing',
        'each', 'every', 'all', 'both', 'few', 'many', 'several',
        'some', 'any', 'none', 'other', 'another', 'everybody',
        'nobody', 'somebody', 'anybody', 'myself', 'yourself',
        'himself', 'herself', 'itself', 'ourselves', 'themselves',
    }
    if first_word in pronoun_words:
        return ['pronoun']

    # 量詞
    if 'classifier' in m or 'measure word' in m or m.startswith('classifier '):
        return ['measure']

    # 数詞
    num_words = {
        'one', 'two', 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'hundred', 'thousand', 'million',
        'first', 'second', 'third', 'percent', 'half', 'double',
        'zero', 'ten thousand',
    }
    if first_word in num_words:
        return ['numeral']

    # 助詞
    if any(kw in m for kw in ['particle', 'interjection', 'exclamation',
                                '(used to', 'modal particle']):
        return ['particle']

    # 形容詞判定（単一単語の形容詞）
    common_adjs = {
        'beautiful', 'ugly', 'big', 'small', 'large', 'tall', 'short',
        'long', 'high', 'low', 'hot', 'cold', 'warm', 'cool', 'good',
        'bad', 'nice', 'great', 'new', 'old', 'young', 'fast', 'slow',
        'hard', 'soft', 'easy', 'difficult', 'happy', 'sad', 'angry',
        'tired', 'hungry', 'thirsty', 'sick', 'healthy', 'rich', 'poor',
        'cheap', 'expensive', 'heavy', 'light', 'dark', 'bright',
        'thick', 'thin', 'wide', 'narrow', 'deep', 'shallow',
        'right', 'wrong', 'true', 'false', 'real', 'fake',
        'strong', 'weak', 'loud', 'quiet', 'full', 'empty',
        'clean', 'dirty', 'wet', 'dry', 'free', 'busy', 'ready',
        'late', 'early', 'important', 'interesting', 'boring',
        'exciting', 'famous', 'popular', 'common', 'rare', 'special',
        'safe', 'dangerous', 'careful', 'careless', 'strict', 'serious',
        'nervous', 'relaxed', 'proud', 'brave', 'courageous', 'lazy',
        'active', 'polite', 'rude', 'friendly', 'honest', 'kind', 'cruel',
        'lucky', 'fortunate', 'comfortable', 'normal', 'strange',
        'simple', 'complex', 'clear', 'terrible', 'wonderful',
        'bitter', 'sweet', 'sour', 'salty', 'spicy', 'fat', 'slim',
        'calm', 'shy', 'confident', 'stupid', 'clever', 'smart',
        'intelligent', 'romantic', 'perfect', 'excellent', 'different',
        'same', 'similar', 'possible', 'impossible', 'necessary',
        'available', 'responsible', 'patient', 'traditional', 'modern',
        'natural', 'international', 'local', 'national', 'foreign',
        'public', 'private', 'personal', 'professional', 'technical',
        'physical', 'social', 'cultural', 'political', 'economic',
        'historical', 'scientific', 'basic', 'advanced', 'general',
        'specific', 'typical', 'formal', 'informal', 'official',
        'direct', 'indirect', 'positive', 'negative', 'active',
        'passive', 'main', 'major', 'minor', 'entire', 'whole',
        'additional', 'extra', 'further', 'previous', 'suitable',
        'appropriate', 'fit', 'qualified', 'nervous', 'anxious',
        'upset', 'satisfied', 'curious', 'jealous', 'generous',
        'selfish', 'humorous', 'serious', 'sincere', 'loyal',
        'faithful', 'gentle', 'violent', 'able', 'unable',
        'correct', 'incorrect', 'regular', 'irregular',
        'expensive', 'cheap', 'noisy', 'silent', 'colorful',
        'convenient', 'inconvenient', 'pleasant', 'unpleasant',
        'reasonable', 'unreasonable', 'successful', 'unsuccessful',
        'peaceful', 'powerful', 'helpless', 'hopeless',
        'blind', 'deaf', 'dumb', 'lame', 'sore', 'painful',
        'guilty', 'innocent', 'fair', 'unfair',
    }
    words_in_def = m.split(',')[0].strip().split(' ')
    if len(words_in_def) == 1:
        w = words_in_def[0].rstrip(';')
        if w in common_adjs:
            return ['adjective']

    # デフォルト: 名詞
    return ['noun']


def generate_example(hanzi: str, category: list):
    """簡易的な例文と和訳を生成"""
    primary = category[0] if category else 'noun'
    examples = {
        'verb': (f'我{hanzi}了。', f'私は{hanzi}ました。'),
        'adjective': (f'这很{hanzi}。', f'これはとても{hanzi}です。'),
        'adverb': (f'他{hanzi}来了。', f'彼は{hanzi}来ました。'),
        'noun': (f'这是{hanzi}。', f'これは{hanzi}です。'),
        'conjunction': (f'我喜欢茶，{hanzi}也喜欢咖啡。', f'私はお茶が好きで、{hanzi}コーヒーも好きです。'),
        'preposition': (f'他{hanzi}我来了。', f'彼は私{hanzi}来ました。'),
        'measure': (f'一{hanzi}。', f'1{hanzi}。'),
        'pronoun': (f'{hanzi}很好。', f'{hanzi}はとても良いです。'),
        'particle': (f'你好{hanzi}！', f'こんにちは{hanzi}！'),
        'numeral': (f'有{hanzi}个。', f'{hanzi}個あります。'),
    }
    return examples.get(primary, (f'这是{hanzi}。', f'これは{hanzi}です。'))


def main():
    # Step 1: Fetch all HSK 1-4 words
    all_hsk_words = []
    for level in [1, 2, 3, 4]:
        print(f"Fetching HSK{level} vocabulary...")
        words = fetch_hsk_words(level)
        print(f"  HSK{level}: {len(words)} words")
        all_hsk_words.extend(words)

    # Deduplicate by hanzi (keep first occurrence)
    seen = set()
    unique_words = []
    for w in all_hsk_words:
        if w['hanzi'] not in seen:
            seen.add(w['hanzi'])
            unique_words.append(w)

    print(f"\nTotal unique HSK1-4 words: {len(unique_words)}")

    # Step 2: Load existing words.json
    print("Loading existing words.json...")
    with open(WORDS_FILE, 'r', encoding='utf-8') as f:
        existing = json.load(f)
    existing_hanzi = {w['hanzi'] for w in existing}
    print(f"Existing words: {len(existing)}")

    # Step 3: Find missing
    missing = [w for w in unique_words if w['hanzi'] not in existing_hanzi]
    print(f"Missing words to add: {len(missing)}")

    if len(missing) == 0:
        print("All words already present!")
        return

    # Step 4: Generate new entries
    next_id = max(w['id'] for w in existing) + 1
    new_entries = []

    for word in missing:
        category = assign_category(word['meaning_en'])
        example, example_meaning = generate_example(word['hanzi'], category)

        # Extremely long meanings を短縮
        meaning = word['meaning_en']
        if len(meaning) > 80:
            meaning = meaning[:77] + '...'

        entry = {
            'id': next_id,
            'hanzi': word['hanzi'],
            'pinyin': word['pinyin'],
            'meaning': meaning,
            'example': example,
            'exampleMeaning': example_meaning,
            'category': category,
        }
        new_entries.append(entry)
        next_id += 1

    print(f"New entries created: {len(new_entries)}")

    # Step 5: Merge
    merged = existing + new_entries

    # Backup
    backup_file = WORDS_FILE.with_suffix('.json.bak')
    shutil.copy2(WORDS_FILE, backup_file)
    print(f"Backup saved to {backup_file}")

    # Write
    with open(WORDS_FILE, 'w', encoding='utf-8') as f:
        json.dump(merged, f, ensure_ascii=False, indent=2)
    print(f"Merged words.json written with {len(merged)} entries")

    # Stats
    cats = {}
    for w in merged:
        for c in w['category']:
            cats[c] = cats.get(c, 0) + 1
    print(f"\nTotal words: {len(merged)}")
    print("Category distribution:")
    for cat, count in sorted(cats.items()):
        print(f"  {cat}: {count}")

    # Sample new entries
    print(f"\nFirst 10 new entries:")
    for entry in new_entries[:10]:
        print(f"  #{entry['id']} {entry['hanzi']} ({entry['pinyin']}) "
              f"- {entry['meaning'][:50]} [{', '.join(entry['category'])}]")


if __name__ == '__main__':
    main()
