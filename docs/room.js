// Rooms: a closed group of friends, each on their own phone, sharing a leaderboard.
// Data lives in Firebase Firestore (project avtalbulbul): rooms/{code} and rooms/{code}/players/{player id}.
// roomlist/{pub} is a public summary per room for the analytics page; its id is not the room code, which stays secret.
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
const rand = n => Array.from({ length: n }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('');
const esc = s => String(s).replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);  // names come from other players

let st = {};  // { pid, name, code, owner } saved on this phone
try { st = JSON.parse(localStorage.guessitRoom || '{}'); } catch {}
st.pid ||= crypto.randomUUID?.() || Math.random().toString(36).slice(2) + Date.now().toString(36);
const save = () => { try { localStorage.guessitRoom = JSON.stringify(st); } catch {} };
save();

let fb;  // promise of { fs: firestore module, db }
const firebase = () => fb ||= Promise.all([import(SDK + 'firebase-app.js'), import(SDK + 'firebase-firestore.js')])
  .then(([app, fs]) => ({ fs, db: fs.getFirestore(app.initializeApp(CONFIG)) }));

let players = null, room = null, unsub, unsubRoom, myBest = 0;
let adminId = null, isAdmin = false, pushed = '', pushTimer;  // the room admin's phone decides everyone's settings
const same = s => JSON.stringify([s?.sel, s?.time, s?.prep, s?.nsfw]);  // Firestore may return map keys in another order
const mine = () => { const c = game.cfg; return { sel: [...c.sel], time: c.time, prep: c.prep, nsfw: c.nsfw }; };
const ms = t => t?.toMillis?.() ?? Date.now();  // a just-written server timestamp is still null locally

// The admin is whoever the room names, as long as they're still in it. When the admin leaves (or a room predates admins),
// the most recently active player still in the room takes over; every phone computes the same successor, and only that
// player's phone writes the change.
const successor = (exclude) => players?.filter(p => !p.left && p.id !== exclude).sort((a, b) => ms(b.updated) - ms(a.updated))[0];
function checkAdmin(fs, db) {
  if (!room || !players) return;
  const admin = players.find(p => p.id === room.admin);
  if (admin && !admin.left) return;
  if (successor()?.id === st.pid)
    fs.updateDoc(fs.doc(db, 'rooms', st.code), { admin: st.pid, owner: st.name, ...(room.settings ? {} : { settings: mine() }) })
      .catch(e => console.warn(e));
}

async function listen() {
  unsub?.();
  players = null;
  const { fs, db } = await firebase();
  if (!st.pub) {  // rooms opened before the public room list existed get their summary id now
    const ref = fs.doc(db, 'rooms', st.code);
    try { await fs.updateDoc(ref, { pub: rand(12) }); } catch {}  // allowed only once, so a phone that loses the race just reads the winner's id
    try { st.pub = (await fs.getDoc(ref)).data()?.pub; save(); } catch {}
  }
  unsubRoom?.();
  unsubRoom = fs.onSnapshot(fs.doc(db, 'rooms', st.code), snap => {
    const d = room = snap.data() || {};
    st.owner = d.owner;  // the current admin's name
    save();
    adminId = d.admin;
    isAdmin = d.admin === st.pid;
    if (isAdmin) { pushed = same(d.settings); game.lock(null, null, true); }  // a new admin carries on with the room's settings
    else game.lock(d.settings || null, d.owner);
    checkAdmin(fs, db);
    render();
  }, e => console.warn(e));
  let summarize = true;  // once per app start, then after every change made from this phone
  unsub = fs.onSnapshot(fs.collection(db, 'rooms', st.code, 'players'), snap => {
    players = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    myBest = players.find(p => p.id === st.pid)?.best || 0;
    if (st.pub && (summarize || snap.metadata.hasPendingWrites)) { summarize = false; summary(fs, db, st.pub, st.owner, players); }
    checkAdmin(fs, db);
    render();
  }, e => { console.warn(e); players = []; render(); });
}

function summary(fs, db, pub, owner, list) {
  const total = k => list.reduce((n, p) => n + (p[k] || 0), 0);
  fs.setDoc(fs.doc(db, 'roomlist', pub), { owner, players: list.filter(p => !p.left).length, ok: total('ok'), rounds: total('rounds'),
    active: fs.serverTimestamp() }).catch(e => console.warn(e));
}

function render() {
  $('roomBtn').textContent = st.code ? `👥 ${st.code}` : '👥 חדר';
  $('roomOut').hidden = !!st.code;
  $('roomIn').hidden = !st.code;
  $('rName').value ||= st.name || '';
  if (!st.code) return;
  $('rTitle').textContent = `החדר של ${st.owner}`;
  $('rShow').textContent = st.code;
  $('rAdmin').textContent = isAdmin ? '👑 אתם מנהלי החדר: הקטגוריות וההגדרות שתבחרו חלות על כל השחקנים.'
    : adminId ? `👑 ${st.owner} מנהל/ת את החדר וקובע/ת את הקטגוריות וההגדרות.` : '';
  if (!players) { $('board').innerHTML = '<tr><td>טוען…</td></tr>'; return; }
  const rows = [...players].sort((a, b) => !!a.left - !!b.left || b.ok - a.ok || b.best - a.best);  // players who left go last
  $('board').innerHTML = '<tr><th>שחקן</th><th>ניחושים</th><th>שיא בסבב</th><th>זמן ממוצע</th><th>סבבים</th></tr>' +
    rows.map((p, i) => `<tr class="${p.id === st.pid ? 'me' : ''} ${p.left ? 'left' : ''}"><td>${p.left ? '🚪' : ['🥇', '🥈', '🥉'][i] || i + 1} ` +
      `${esc(p.name)}${p.left ? ' (יצא/ה)' : p.id === adminId ? ' 👑' : ''}</td>` +
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
    let owner, pub;
    if (isNew) {
      for (let tries = 0; !owner; tries++) {  // creating over an existing code is denied by the rules, so retry with a new one
        code = rand(5);
        pub = rand(12);
        try {
          await fs.setDoc(fs.doc(db, 'rooms', code), { owner: name, created: fs.serverTimestamp(), pub, admin: st.pid, settings: mine() });
          owner = name;
        } catch (e) { if (tries >= 2) throw e; }
      }
    } else {
      const room = await fs.getDoc(fs.doc(db, 'rooms', code));
      if (!room.exists()) return fail('לא מצאנו חדר עם הקוד הזה');
      ({ owner, pub } = room.data());
    }
    const me = fs.doc(db, 'rooms', code, 'players', st.pid);
    if ((await fs.getDoc(me)).exists()) await fs.updateDoc(me, { name, left: false, updated: fs.serverTimestamp() });  // rejoining keeps the score
    else await fs.setDoc(me, { name, ok: 0, skip: 0, time: 0, rounds: 0, best: 0, secs: 0, left: false, updated: fs.serverTimestamp() });
    Object.assign(st, { name, code, owner, pub });
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
  settings(s) {  // the game calls this whenever its settings change; only the admin's changes are sent (debounced for sliders)
    if (!isAdmin || !st.code) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(async () => {
      if (same(s) === pushed) return;
      pushed = same(s);
      try { const { fs, db } = await firebase(); await fs.updateDoc(fs.doc(db, 'rooms', st.code), { settings: s }); } catch (e) { console.warn(e); }
    }, 700);
  },
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
// Leaving marks you as left (your score stays, and comes back if you rejoin). An admin who leaves hands over to the
// most recently active player still in the room.
async function leave() {
  const { code, pub, owner } = st, list = players || [], wasAdmin = isAdmin, next = successor(st.pid);
  unsub?.(); unsubRoom?.();
  delete st.code; delete st.pub; save();
  players = room = adminId = null; isAdmin = false;
  game.lock(null);  // back to this phone's own settings
  try {
    const { fs, db } = await firebase();
    await fs.updateDoc(fs.doc(db, 'rooms', code, 'players', st.pid), { left: true, updated: fs.serverTimestamp() });
    if (wasAdmin && next) await fs.updateDoc(fs.doc(db, 'rooms', code), { admin: next.id, owner: next.name });
    if (pub) summary(fs, db, pub, wasAdmin && next ? next.name : owner, list.map(p => p.id === st.pid ? { ...p, left: true } : p));
  } catch (e) { console.warn(e); }
}
$('rLeave').onclick = () => { leave(); render(); };
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
  if (st.code) leave();
  $('rCode').value = invited.toUpperCase();
  open();
}
