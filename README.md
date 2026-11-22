# GuessIt

Hebrew "phone on the forehead" party game. Plain HTML/JS website in `docs/`, served by GitHub Pages.

Play: https://blueskaic.github.io/guessit/
Tip: on iPhone use Share > Add to Home Screen (Android: menu > Add to Home screen) so it opens full-screen like an app.

## How to play
Pick one or more categories and a time limit, press start, put the phone on your forehead during the 5-second countdown.
Others see the picture and the name. Tap the right half when you guess it, the left half to skip.

## Files
- `content.json`: categories and items, `["Hebrew name", "English Wikipedia title"]` (prefix `he:` for a Hebrew Wikipedia title, optional 3rd value = direct image URL to force a picture)
- `fetch_images.py`: downloads missing pictures to `docs/img/` and regenerates `docs/cards.js` (needs Pillow)
- `docs/index.html`: the whole game

## Change content
```
python fetch_images.py
git add -A && git commit -m "Update cards" && git push
```
GitHub Pages updates about a minute after the push.
To replace a bad picture: change the item's title in `content.json` (or add a direct URL as 3rd value), then re-run the script.

Pictures come from Wikipedia (free-licensed lead images).
