import pdfplumber
import re
import json
from collections import defaultdict

def is_pinyin(text):
    """Check if text looks like pinyin (Latin with tone marks, no CJK)"""
    return bool(re.match(r'^[a-zA-ZāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüĀÁǍÀĒÉĚÈĪÍǏÌŌÓǑÒŪÚǓÙǕǗǙǛÜ\'\-–\s]+$', text))

def has_cjk(text):
    return bool(re.search(r'[\u4e00-\u9fff\u3400-\u4dbf]', text))

def is_annotation_only(text):
    """Check if text is just an annotation like （动）, （助）, （哪儿）etc."""
    return bool(re.match(r'^[（(][\u4e00-\u9fff]+[）)]$', text))

all_entries = []

with pdfplumber.open('words.pdf') as pdf:
    for page_idx, page in enumerate(pdf.pages):
        words = page.extract_words()
        
        # Skip noise lines
        filtered = []
        for w in words:
            text = w['text']
            if text in ['HSK（四级）词汇', '共1200个']:
                continue
            if re.match(r'^-\s*\d+\s*-$', text.strip()):
                continue
            if re.match(r'^[A-Z]$', text.strip()):
                continue
            filtered.append(w)
        
        if not filtered:
            continue
        
        # Determine column boundaries dynamically from x0 gaps
        x_values = sorted(set(w['x0'] for w in filtered))
        gaps = [(x_values[i+1] - x_values[i], x_values[i]) for i in range(len(x_values)-1)]
        gaps.sort(reverse=True, key=lambda x: x[0])
        
        # 2 largest gaps = 3 columns
        col_seps = sorted([gaps[0][1] + gaps[0][0]/2, gaps[1][1] + gaps[1][0]/2])
        
        # Assign to columns
        cols = defaultdict(list)
        for w in filtered:
            x0 = w['x0']
            if x0 < col_seps[0]:
                cols[0].append(w)
            elif x0 < col_seps[1]:
                cols[1].append(w)
            else:
                cols[2].append(w)
        
        # Process each column independently
        for col_idx in sorted(cols.keys()):
            col_words = cols[col_idx]
            col_words.sort(key=lambda w: (w['top'], w['x0']))
            
            # Group into y-lines (threshold: 6 pixels)
            lines = []
            current = [col_words[0]]
            for w in col_words[1:]:
                if abs(w['top'] - current[-1]['top']) <= 6:
                    current.append(w)
                else:
                    lines.append(current)
                    current = [w]
            lines.append(current)
            
            # Sort each line by x0
            for line in lines:
                line.sort(key=lambda w: w['x0'])
            
            # Classify lines
            labeled = []
            for line in lines:
                texts = [w['text'] for w in line]
                has_c = any(has_cjk(t) and not is_annotation_only(t) for t in texts)
                has_n = any(re.search(r'\d+[．.]', t) for t in texts)
                if has_c or has_n:
                    labeled.append(('word', line))
                elif all(is_pinyin(t) for t in texts):
                    labeled.append(('pinyin', line))
                else:
                    labeled.append(('other', line))
            
            # Match pinyin → word pairs
            i = 0
            while i < len(labeled):
                if labeled[i][0] == 'pinyin':
                    pi_line = labeled[i][1]
                    
                    # Find next word line within 20px y-distance
                    best_j = None
                    for j in range(i+1, min(i+5, len(labeled))):
                        if labeled[j][0] == 'word':
                            y_dist = abs(labeled[j][1][0]['top'] - pi_line[0]['top'])
                            if y_dist < 20:
                                best_j = j
                                break
                    
                    if best_j:
                        wd_line = labeled[best_j][1]
                        
                        # Sort word line by x0
                        wd_parts = sorted(wd_line, key=lambda w: w['x0'])
                        
                        # Build the word entry and find its x-range
                        # Also identify annotation x-ranges to exclude their pinyin
                        num = None
                        hanzi_parts = []
                        entry_x_min = 99999
                        entry_x_max = 0
                        annotation_x_ranges = []  # list of (x0, x1) for annotations
                        
                        for w in wd_parts:
                            t = w['text']
                            if is_annotation_only(t):
                                annotation_x_ranges.append((w['x0'], w['x1']))
                                continue
                            m = re.search(r'(\d+)', t)
                            if m:
                                num = int(m.group(1))
                            # Include both number tokens and hanzi tokens in x-range
                            if re.search(r'\d+[．.]', t) or has_cjk(t):
                                if w['x0'] < entry_x_min:
                                    entry_x_min = w['x0']
                                if w['x1'] > entry_x_max:
                                    entry_x_max = w['x1']
                            # Extract CJK characters
                            cjk_only = re.sub(r'[^\u4e00-\u9fff\u3400-\u4dbf]', '', t)
                            if cjk_only:
                                hanzi_parts.append(cjk_only)
                        
                        hanzi = ''.join(hanzi_parts)
                        
                        # Filter pinyin tokens: include those within entry x-range,
                        # but exclude those that overlap with annotation x-ranges
                        pi_text = ''
                        if entry_x_min < 99999:
                            pi_tokens_sorted = sorted(pi_line, key=lambda w: w['x0'])
                            matching_pinyin = []
                            for pw in pi_tokens_sorted:
                                # Check if this pinyin overlaps with any annotation
                                # Pinyin belongs to annotation if it's at or to the right of the annotation's x0
                                overlaps_annotation = False
                                for ax0, ax1 in annotation_x_ranges:
                                    if pw['x1'] >= ax0 and pw['x0'] <= ax1:
                                        overlaps_annotation = True
                                        break
                                if overlaps_annotation:
                                    continue
                                # Pinyin should be within or near the entry's x-range
                                if pw['x1'] >= entry_x_min - 15 and pw['x0'] <= entry_x_max + 20:
                                    matching_pinyin.append(pw['text'])
                            pi_text = ''.join(matching_pinyin)
                        else:
                            pi_text = ''.join(w['text'] for w in pi_line)
                        
                        if num and hanzi:
                            all_entries.append({
                                'id': num,
                                'hanzi': hanzi,
                                'pinyin': pi_text,
                            })
                        
                        i = best_j + 1
                    else:
                        i += 1
                else:
                    i += 1

# Sort and deduplicate
all_entries.sort(key=lambda x: x['id'])
seen = set()
unique = []
for e in all_entries:
    if e['id'] not in seen and e['id'] is not None:
        seen.add(e['id'])
        unique.append(e)

# Post-process: lowercase pinyin and remove internal spaces
for e in unique:
    e['pinyin'] = e['pinyin'].lower().replace(' ', '')

print(f"Total unique entries: {len(unique)}")
if unique:
    print(f"ID range: {unique[0]['id']} - {unique[-1]['id']}")

# Check coverage
ids = set(e['id'] for e in unique)
expected = set(range(1, 1201))
missing = sorted(expected - ids)
print(f"Missing ({len(missing)}): {missing[:30]}...")

# Spot check
check_ids = [68, 69, 90, 169, 170, 179, 203, 362, 609, 610, 1116, 1195]
print("\nSpot checks:")
for e in unique:
    if e['id'] in check_ids:
        print(f"  {e['id']:4d}: {e['hanzi']:10s} [{e['pinyin']}]")

# Show last 10
print("\nLast 10:")
for e in unique[-10:]:
    print(f"  {e['id']:4d}: {e['hanzi']:10s} [{e['pinyin']}]")

# Check for entries with empty pinyin
empty_pinyin = [e for e in unique if not e['pinyin']]
print(f"\nEntries with empty pinyin: {len(empty_pinyin)}")
for e in empty_pinyin[:10]:
    print(f"  {e['id']}: {e['hanzi']}")
