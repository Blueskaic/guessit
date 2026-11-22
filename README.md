# GuessIt

Hebrew "phone on the forehead" party game. Plain HTML/JS website in `docs/`, served by GitHub Pages.

Play: https://blueskaic.github.io/guessit/
Tip: on iPhone use Share > Add to Home Screen (Android: menu > Add to Home screen) so it opens full-screen like an app.

## How to play
Pick one or more categories and a time limit, press start, put the phone on your forehead during the 5-second countdown.
Others see the picture and the name. Tap the right half when you guess it, the left half to skip.
The ⚙️ settings set the time per card, the countdown and 18+ mode (extra adult cards, and the game is renamed "אבטל הבולבול").

## Rooms (friends leaderboard)
👥 on the home screen: one player opens a room and shares the 5-letter code or invite link, friends join with a name on their own phones.
Every round and card result goes to the room's leaderboard (cards guessed, best round, average guess time, rounds).
The player who opened the room is its admin 👑: their categories and settings apply to everyone in the room.
The analytics page shows who's online/playing now and a list of rooms (owner name and totals, never the code).
Stored in Firebase Firestore, project `avtalbulbul` (`docs/room.js`). Access rules are in `firestore.rules`: paste them into
Firebase console > Firestore Database > Rules after changing them.

## Analytics
https://blueskaic.github.io/guessit/analytics/ shows plays, visits, popular categories, guess times and devices.
Counts are anonymous counters in Firestore (`stats/total`, plus `stats/dYYYYMMDD` per day); only the github.io site counts.

## Files
- `content.json`: categories and items, `["Hebrew name", "English Wikipedia title"]` (prefix `he:` for a Hebrew Wikipedia title, optional 3rd value = direct image URL to force a picture). A category's `nsfw` list holds the 18+ cards.
- `fetch_images.py`: downloads missing pictures to `docs/img/` and regenerates `docs/cards.js` (needs Pillow)
- `docs/index.html`: the whole game
- `docs/analytics/index.html`: the stats page

## Change content
```
python fetch_images.py
git add -A && git commit -m "Update cards" && git push
```
GitHub Pages updates about a minute after the push.
To replace a bad picture: change the item's title in `content.json` (or add a direct URL as 3rd value), then re-run the script.

Pictures come from Wikipedia (article lead images; cartoon characters use their non-free images).
