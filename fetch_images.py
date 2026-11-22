"""Download one picture per item (lead image of its Wikipedia article) and write docs/cards.js.

Usage: python fetch_images.py
Only items without a downloaded picture are fetched, so re-running after editing content.json is cheap.
Item format in content.json: ["Hebrew name", "English Wikipedia title"] or ["name", "he:Hebrew title"]
or ["name", "title", "https://direct/image/url.jpg"] to force a specific picture.
A category's optional "nsfw" list holds items shown only when 18+ mode is on.
Delete a file from docs/img to re-fetch it.
"""
import hashlib, io, json, sys, time, urllib.error, urllib.parse, urllib.request
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).parent
IMG = ROOT / 'docs' / 'img'
UA = {'User-Agent': 'GuessItBuilder/1.0 (personal hobby project)'}
MAX = 720
sys.stdout.reconfigure(encoding='utf-8')  # Hebrew titles on a Windows console


def get(url):
    for attempt in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code not in (429, 503) or attempt == 2:
                raise
            wait = int(e.headers.get('Retry-After') or 0) or 4 * 2 ** attempt
            print(f'  HTTP {e.code}, retrying in {wait}s', flush=True)
            time.sleep(wait)


def thumb_url(t):
    """The API returns the original file (upload.wikimedia.org) when it is smaller than MAX; that host
    answers scripts with 429, so rewrite to a standard-size thumbnail on thumb.wikimedia.org."""
    u = t['source'].split('?')[0]
    size = max((s for s in (120, 250, 330, 500) if s < t['width']), default=0)
    if '/thumb/' in u or not size:
        return u
    proj, a, ab, name = u.split('/wikipedia/', 1)[1].split('/', 3)
    return f'https://thumb.wikimedia.org/wikipedia/{proj}/thumb/{a}/{ab}/{name}/{size}px-{name}'


def thumbs(lang, titles):
    """{title: thumbnail url}, following title normalization and redirects."""
    out = {}
    for i in range(0, len(titles), 50):
        chunk = titles[i:i + 50]
        q = urllib.parse.urlencode({'action': 'query', 'prop': 'pageimages', 'piprop': 'thumbnail',
                                    'pithumbsize': MAX, 'pilimit': 50, 'pilicense': 'any',  # any: cartoon characters are non-free
                                    'redirects': 1, 'format': 'json',
                                    'titles': '|'.join(chunk)})
        data = json.loads(get(f'https://{lang}.wikipedia.org/w/api.php?{q}'))['query']
        alias = {m['from']: m['to'] for k in ('normalized', 'redirects') for m in data.get(k, [])}
        found = {p['title']: thumb_url(p['thumbnail']) for p in data['pages'].values() if 'thumbnail' in p}
        for t in chunk:
            r = t
            while r in alias:
                r = alias[r]
            if r in found:
                out[t] = found[r]
    return out


def fname(title):
    return hashlib.md5(title.encode()).hexdigest()[:12] + '.jpg'


def save(url, path):
    im = Image.open(io.BytesIO(get(url)))
    im.thumbnail((MAX, MAX))
    if im.mode != 'RGB':  # flags/logos with transparency -> white background
        im = Image.alpha_composite(Image.new('RGBA', im.size, 'white'), im.convert('RGBA')).convert('RGB')
    im.save(path, 'JPEG', quality=82)


def entries(c):
    """(item, is_nsfw) for every item of a category."""
    return [(i, False) for i in c['items']] + [(i, True) for i in c.get('nsfw', [])]


def write_cards():
    cats = []
    for c in content:
        items = [{'name': n, 'img': f'img/{fname(t)}', **({'nsfw': 1} if x else {})}
                 for (n, t, *_), x in entries(c) if (IMG / fname(t)).exists()]
        if items:
            cats.append({'id': c['id'], 'name': c['name'], 'cover': items[0]['img'], 'items': items})
    (ROOT / 'docs' / 'cards.js').write_text(
        'const CATEGORIES = ' + json.dumps(cats, ensure_ascii=False, indent=1) + ';\n', 'utf-8')
    return {c['name']: len(c['items']) for c in cats}


content = json.loads((ROOT / 'content.json').read_text('utf-8'))
IMG.mkdir(parents=True, exist_ok=True)

todo = {}  # lang -> {title without prefix: full title}
for c in content:
    for (name, title, *direct), _ in entries(c):
        path = IMG / fname(title)
        if path.exists():
            continue
        if direct:
            save(direct[0], path)
            continue
        lang, t = (title[:2], title[3:]) if title[2:3] == ':' else ('en', title)
        todo.setdefault(lang, {})[t] = title

write_cards()
for lang, titles in todo.items():
    urls = thumbs(lang, list(titles))
    for t, full in titles.items():
        if t not in urls:
            print('no image:', full)
            continue
        try:
            save(urls[t], IMG / fname(full))
            print('ok:', full)
        except Exception as e:
            print('failed:', full, e)
        write_cards()  # keeps the game playable while downloading
        time.sleep(0.5)  # Wikimedia rate-limits image bursts (429 + Retry-After)

used = {fname(t) for c in content for (_, t, *_), _ in entries(c)}
for p in IMG.glob('*.jpg'):  # pictures of items removed/renamed in content.json
    if p.name not in used:
        p.unlink()
print('cards:', write_cards())
