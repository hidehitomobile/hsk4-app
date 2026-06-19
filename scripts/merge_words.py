"""
word.tsv から words.json を完全新規生成する。
旧データは一切使わず、TSVのID・ピンイン・漢字のみで置き換え。
"""
import json


def main():
    entries = []

    with open('word.tsv', 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            parts = line.split('\t')
            if len(parts) < 3:
                continue
            eid = int(parts[0])
            pinyin = parts[1].strip()
            hanzi = parts[2].strip()

            entries.append({
                'id': eid,
                'hanzi': hanzi,
                'pinyin': pinyin,
                'meaning': '',
                'example': '',
                'exampleMeaning': '',
                'category': ['other'],
                'measure': '',
                'etymology': '',
                'mnemonic': '',
            })

    print(f'Total entries: {len(entries)}')
    print(f'ID range: {entries[0]["id"]} - {entries[-1]["id"]}')

    # Verify sequential IDs
    ids = [e['id'] for e in entries]
    expected = list(range(1, 1201))
    print(f'IDs sequential: {ids == expected}')

    if ids != expected:
        missing = sorted(set(expected) - set(ids))
        extra = sorted(set(ids) - set(expected))
        if missing:
            print(f'  Missing IDs: {missing[:20]}')
        if extra:
            print(f'  Extra IDs: {extra[:20]}')

    # Check for empty pinyin
    empty_pinyin = [(e['id'], e['hanzi']) for e in entries if not e['pinyin']]
    print(f'Empty pinyin: {len(empty_pinyin)}')
    for eid, h in empty_pinyin:
        print(f'  id={eid}: {h}')

    # Check for empty hanzi
    empty_hanzi = [e['id'] for e in entries if not e['hanzi']]
    print(f'Empty hanzi: {len(empty_hanzi)}')

    # Show sample
    print('\nSample entries:')
    for e in entries[:5]:
        print(f'  {e["id"]:4d}: {e["hanzi"]:10s} [{e["pinyin"]}]')
    print('  ...')
    for e in entries[-5:]:
        print(f'  {e["id"]:4d}: {e["hanzi"]:10s} [{e["pinyin"]}]')

    # Write output
    output_path = 'src/data/words.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(entries, f, ensure_ascii=False, indent=2)
    print(f'\nWritten to {output_path}')


if __name__ == '__main__':
    main()
