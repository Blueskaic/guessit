// Rooms: a closed group of friends, each on their own phone, sharing a leaderboard.
// Data lives in Firebase Firestore (project avtalbulbul): rooms/{code} and rooms/{code}/players/{player id}.
// Access rules: ../firestore.rules. Firebase is only downloaded once the player opens or is in a room.
const $ = id => document.getElementById(id);
const SDK = 'https://www.gstatic.com/firebasejs/12.12.0/';
const CONFIG = {
  apiKey: 'AIzaSyBRCm87xSROL8HU9uKbhRwQx2zcO0JlVs0',
  authDomain: 'avtalbulbul.firebaseapp.com',
  projectId: 'avtalbulbul',
  storageBucket: 'avtalbulbul.firebasestorage.app',
  messagingSenderId: '28822600882',
  appId: '1:28822600882:web:65adf542b881e130e51dab',
};
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';  // no I/O/0/1 to misread
const esc = s => String(s).replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);  // names come from other players

let st = {};  // { pid, name, code, owner } saved on this phone
try { st = JSON.parse(localStorage.guessitRoom || '{}'); } catch {}
st.pid ||= crypto.randomUUID?.() || Math.random().toString(36).slice(2) + Date.now().toString(36);
const save = () => { try { localStorage.guessitRoom = JSON.stringify(st); } catch {} };
save();

let fb;  // promise of { fs: firestore module, db }
const firebase = () => fb ||= Promise.all([import(SDK + 'firebase-app.js'), import(SDK + 'firebase-firestore.js')])
  .then(([app, fs]) => ({ fs, db: fs.getFirestore(app.initializeApp(CONFIG)) }));

let players = null, unsub, myBest = 0;

async function listen() {
  unsub?.();
  players = null;
  const { fs, db } = await firebase();
  unsub = fs.onSnapshot(fs.collection(db, 'rooms', st.code, 'players'), snap => {
    players = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    myBest = players.find(p => p.id === st.pid)?.best || 0;
    render();
  }, e => { console.warn(e); players = []; render(); });
}

function render() {
  $('roomBtn').textContent = st.code ? `👥 ${st.code}` : '👥 חדר';
  $('roomOut').hidden = !!st.code;
  $('roomIn').hidden = !st.code;
  $('rName').value ||= st.name || '';
  if (!st.code) return;
  $('rTitle').textContent = `החדר של ${st.owner}`;
  $('rShow').textContent = st.code;
  if (!players) { $('board').innerHTML = '<tr><td>טוען…</td></tr>'; return; }
  const rows = [...players].sort((a, b) => b.ok - a.ok || b.best - a.best);
  $('board').innerHTML = '<tr><th>שחקן</th><th>ניחושים</th><th>שיא בסבב</th><th>זמן ממוצע</th><th>סבבים</th></tr>' +
    rows.map((p, i) => `<tr${p.id === st.pid ? ' class="me"' : ''}><td>${['🥇', '🥈', '🥉'][i] || i + 1} ${esc(p.name)}</td>` +
      `<td>${p.ok}</td><td>${p.best}</td><td>${p.ok ? (p.secs / p.ok).toFixed(1) + ' שנ׳' : '–'}</td><td>${p.rounds}</td></tr>`).join('');
}

const fail = msg => { $('rErr').textContent = msg; };

async function join(isNew) {
  const name = $('rName').value.trim().slice(0, 20);
  let code = $('rCode').value.trim().toUpperCase();
  if (!name) return fail('כתבו את השם שלכם');
  if (!isNew && code.length !== 5) return fail('קוד חדר הוא 5 תווים');
  fail('מתחבר…');
  try {
    const { fs, db } = await firebase();
    let owner;
    if (isNew) {
      for (let tries = 0; !owner; tries++) {  // creating over an existing code is denied by the rules, so retry with a new one
        code = Array.from({ length: 5 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('');
        try {
          await fs.setDoc(fs.doc(db, 'rooms', code), { owner: name, created: fs.serverTimestamp() });
          owner = name;
        } catch (e) { if (tries >= 2) throw e; }
      }
    } else {
      const room = await fs.getDoc(fs.doc(db, 'rooms', code));
      if (!room.exists()) return fail('לא מצאנו חדר עם הקוד הזה');
      owner = room.data().owner;
    }
    const me = fs.doc(db, 'rooms', code, 'players', st.pid);
    if ((await fs.getDoc(me)).exists()) await fs.updateDoc(me, { name, updated: fs.serverTimestamp() });  // rejoining keeps the score
    else await fs.setDoc(me, { name, ok: 0, skip: 0, time: 0, rounds: 0, best: 0, secs: 0, updated: fs.serverTimestamp() });
    Object.assign(st, { name, code, owner });
    save();
    fail('');
    listen();
    render();
  } catch (e) {
    console.warn(e);
    fail('משהו השתבש, נסו שוב' + (e.code ? ` (${e.code})` : ''));
  }
}

// Score updates, called by the game in index.html. Failures are ignored: the game must keep working offline.
async function update(fields) {
  if (!st.code) return;
  try {
    const { fs, db } = await firebase();
    const data = { updated: fs.serverTimestamp() };
    for (const [k, v] of Object.entries(fields)) data[k] = k === 'best' ? v : fs.increment(v);
    await fs.updateDoc(fs.doc(db, 'rooms', st.code, 'players', st.pid), data);
  } catch (e) { console.warn(e); }
}
window.room = {
  round: () => update({ rounds: 1 }),
  result(kind, secs, roundOk) {
    if (kind !== 'ok') return update({ [kind]: 1 });
    const best = roundOk > myBest ? (myBest = roundOk) : undefined;
    update({ ok: 1, secs, ...(best ? { best } : {}) });
  },
};

const dlg = $('roomDlg');
const open = () => { render(); dlg.showModal(); };
$('roomBtn').onclick = open;
dlg.onclick = e => { if (e.target === dlg) dlg.close(); };  // click outside = close
$('rJoin').onclick = () => join(false);
$('rNew').onclick = () => join(true);
$('rCode').oninput = e => { e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); };
$('rLeave').onclick = () => { unsub?.(); delete st.code; save(); render(); };  // the score stays in the room if you come back
$('rShare').onclick = async () => {
  const url = `${location.origin}${location.pathname}?room=${st.code}`;
  const text = `בואו לשחק איתי GuessIt! קוד החדר: ${st.code}`;
  try { await navigator.share({ text, url }); }
  catch (e) {
    if (e.name === 'AbortError') return;
    try { await navigator.clipboard.writeText(`${text}\n${url}`); $('rShare').textContent = 'הועתק ✓'; } catch {}
  }
};

// Invite links: ...?room=ABCDE opens the join screen with the code filled in
const invited = new URLSearchParams(location.search).get('room');
if (invited) history.replaceState(null, '', location.pathname);
if (st.code) listen();
render();
if (invited && invited.toUpperCase() !== st.code) {
  if (st.code) { unsub?.(); delete st.code; save(); }
  $('rCode').value = invited.toUpperCase();
  open();
}
