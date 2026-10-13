const SCENES = [
  {
    id: "jikoshoukai",
    title: "自己紹介", titleCn: "自我介绍", level: "N5", emoji: "🙋",
    dialogue: [
      { speaker: "田中", jp: "はじめまして。田中です。", kana: "はじめまして。たなかです。", cn: "初次见面，我是田中。", grammar: "「はじめまして」是初次见面的固定寒暄语。" },
      { speaker: "私", jp: "はじめまして。李です。", kana: "はじめまして。りです。", cn: "初次见面，我是小李。", grammar: "中文姓氏一般用音读，李＝り。" },
      { speaker: "田中", jp: "李さんは中国人ですか。", kana: "りさんはちゅうごくじんですか。", cn: "小李你是中国人吗？", grammar: "「〜は〜ですか」是疑问句。" },
      { speaker: "私", jp: "はい、中国人です。", kana: "はい、ちゅうごくじんです。", cn: "是的，我是中国人。", grammar: "肯定回答用「はい」。" },
      { speaker: "田中", jp: "日本語が上手ですね。", kana: "にほんごがじょうずですね。", cn: "你日语说得真好。", grammar: "「〜が上手ですね」表示称赞。" }
    ],
    keywords: ["はじめまして", "中国人", "日本語", "上手"],
    aiRoleplay: "你扮演田中，正在和我初次见面。用简单日语和我打招呼、问我的名字和国籍。"
  },
  {
    id: "konbini",
    title: "コンビニで", titleCn: "在便利店", level: "N5", emoji: "🏪",
    dialogue: [
      { speaker: "店員", jp: "いらっしゃいませ。", kana: "いらっしゃいませ。", cn: "欢迎光临。", grammar: "进店必说的固定寒暄语。" },
      { speaker: "客", jp: "すみません、お弁当はどこですか。", kana: "すみません、おべんとうはどこですか。", cn: "不好意思，便当在哪里？", grammar: "「〜はどこですか」询问地点。" },
      { speaker: "店員", jp: "あちらです。", kana: "あちらです。", cn: "在那边。", grammar: "「あちら」是「那边」的礼貌说法。" },
      { speaker: "客", jp: "ありがとうございます。", kana: "ありがとうございます。", cn: "谢谢。", grammar: "礼貌的感谢表达。" },
      { speaker: "店員", jp: "温めますか。", kana: "あたためますか。", cn: "要加热吗？", grammar: "「〜ますか」询问要不要做某事。" },
      { speaker: "客", jp: "はい、お願いします。", kana: "はい、おねがいします。", cn: "好的，麻烦了。", grammar: "「お願いします」是万能请求表达。" }
    ],
    keywords: ["いらっしゃいませ", "お弁当", "温める", "お願いします"],
    aiRoleplay: "你扮演便利店店员，我是客人。用简单日语和我进行便利店购物对话。"
  },
  {
    id: "resutoran",
    title: "レストランで", titleCn: "在餐厅", level: "N5", emoji: "🍽️",
    dialogue: [
      { speaker: "店員", jp: "何名様ですか。", kana: "なんめいさまですか。", cn: "请问几位？", grammar: "「何名様」是问人数的礼貌说法。" },
      { speaker: "客", jp: "二人です。", kana: "ふたりです。", cn: "两位。", grammar: "两人用「二人（ふたり）」。" },
      { speaker: "店員", jp: "こちらへどうぞ。", kana: "こちらへどうぞ。", cn: "请这边走。", grammar: "「どうぞ」是「请」的意思。" },
      { speaker: "客", jp: "メニューをお願いします。", kana: "めにゅーをおねがいします。", cn: "请给我菜单。", grammar: "「〜をお願いします」是点东西的万能句。" },
      { speaker: "店員", jp: "ご注文はお決まりですか。", kana: "ごちゅうもんはおきまりですか。", cn: "决定好点什么了吗？", grammar: "「ご注文」是「注文」的敬语形式。" },
      { speaker: "客", jp: "ラーメンを一つください。", kana: "らーめんをひとつください。", cn: "请给我一碗拉面。", grammar: "「〜を一つください」是点餐常用句型。" }
    ],
    keywords: ["何名様", "どうぞ", "メニュー", "注文", "ください"],
    aiRoleplay: "你扮演餐厅服务员，我是客人。用简单日语和我进行点餐对话。"
  }
];

const QUIZ = [
  { q: "「私」の読み方は？", options: ["わたし","わたくし","ぼく","おれ"], answer: 0, level: "N5" },
  { q: "「ありがとう」の意味は？", options: ["你好","谢谢","再见","对不起"], answer: 1, level: "N5" },
  { q: "「学校」の読み方は？", options: ["がっこう","がこう","がくこう","まなびや"], answer: 0, level: "N5" },
  { q: "「〜を食べます」の「を」は何を表す？", options: ["主语","宾语","地点","时间"], answer: 1, level: "N5" },
  { q: "「手紙」の日本語の意味は？", options: ["卫生纸","信","纸巾","报纸"], answer: 1, level: "N4" },
  { q: "「〜たことがあります」の意味は？", options: ["做过某事","正在做","想做","必须做"], answer: 0, level: "N4" },
  { q: "「〜ながら」の使い方は？", options: ["表示原因","表示同时进行","表示目的","表示转折"], answer: 1, level: "N4" },
  { q: "「お疲れ様です」はどんな時に使う？", options: ["见面时","工作场合打招呼/分别","吃饭前","睡觉前"], answer: 1, level: "N4" },
  { q: "「〜てしまう」の意味は？", options: ["做好了","不小心做了","正在做","想做"], answer: 1, level: "N4" },
  { q: "「〜わけではない」の意味は？", options: ["并不是说","一定","必须","可能"], answer: 0, level: "N3" },
  { q: "「〜ばかりか」の意味は？", options: ["不但…而且","只有","大约","因为"], answer: 0, level: "N3" },
  { q: "「〜に対して」の意味は？", options: ["对于","为了","按照","由于"], answer: 0, level: "N3" },
  { q: "「〜ものの」の意味は？", options: ["虽然…但是","因为","如果","只要"], answer: 0, level: "N3" },
  { q: "「〜ずにはいられない」の意味は？", options: ["忍不住","不可以","没必要","不应该"], answer: 0, level: "N3" },
  { q: "「〜ていただけませんか」のニュアンスは？", options: ["命令","非常礼貌的请求","拒绝","劝诱"], answer: 1, level: "N3" }
];

let store = JSON.parse(localStorage.getItem('jp_scene') || '{}');
if (!store.sceneStats) store.sceneStats = {};
if (!store.chat) store.chat = [];
if (!store.keywords) store.keywords = {};
if (!store.streak) store.streak = { count: 0, last: '' };
function save() { localStorage.setItem('jp_scene', JSON.stringify(store)); }

function getSceneLevel(id) {
  const s = store.sceneStats[id];
  if (!s) return { speed: 0.85, completed: 0, score: 0 };
  const avg = s.totalScore / Math.max(1, s.completed);
  if (avg >= 85) return { speed: 1.0, completed: s.completed, score: avg };
  if (avg >= 60) return { speed: 0.9, completed: s.completed, score: avg };
  return { speed: 0.75, completed: s.completed, score: avg };
}

let ttsVoices = [];
function loadVoices() { ttsVoices = speechSynthesis.getVoices().filter(v => v.lang.startsWith('ja')); }
if ('speechSynthesis' in window) { speechSynthesis.onvoiceschanged = loadVoices; loadVoices(); }
function speak(text, rate) {
  if (!('speechSynthesis' in window)) { alert('此浏览器不支持语音'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ja-JP'; u.rate = rate || 0.9;
  if (ttsVoices.length > 0) u.voice = ttsVoices[Math.floor(Math.random() * ttsVoices.length)];
  speechSynthesis.speak(u);
}

function showTab(name) {
  ['home','scenes','review','chat'].forEach(t => document.getElementById(t).classList.toggle('hidden', t !== name));
  document.querySelectorAll('.tab').forEach((el,i) => el.classList.toggle('active', ['home','scenes','review','chat'][i] === name));
  if (name === 'home') renderHome();
  if (name === 'scenes') renderScenes();
  if (name === 'review') renderReview();
  if (name === 'chat') renderChat();
}

function renderHome() {
  const hasLevel = !!store.userLevel;
  let html = '<div class="stats">' +
    '<div class="stat"><div class="num">' + SCENES.length + '</div><div class="lbl">场景</div></div>' +
    '<div class="stat"><div class="num">' + Object.keys(store.sceneStats).length + '</div><div class="lbl">已学</div></div>' +
    '<div class="stat"><div class="num">' + (store.streak.count||0) + '</div><div class="lbl">连续天数</div></div>' +
    '</div>';
  if (!hasLevel) {
    html += '<div class="card" style="text-align:center;padding:28px">' +
      '<div style="font-size:40px;margin-bottom:12px">📝</div>' +
      '<div style="font-size:17px;font-weight:600;margin-bottom:8px">先做水平测试</div>' +
      '<div style="color:#9aa0a6;font-size:14px;margin-bottom:18px">15 道题，判断你的真实水平</div>' +
      '<button class="btn wide" onclick="startQuiz()">开始测试</button>' +
      '</div>';
  } else {
    html += '<div class="card">' +
      '<div style="font-size:15px;font-weight:600;margin-bottom:8px">🎯 你的当前水平</div>' +
      '<div style="font-size:28px;font-weight:700;color:#7ba7ff">' + store.userLevel + '</div>' +
      '<div style="color:#9aa0a6;font-size:13px;margin-top:6px">正确率 ' + store.userScore + '%</div>' +
      '<div style="color:#9aa0a6;font-size:13px;margin-top:12px;line-height:1.8">' + getLevelAdvice(store.userLevel) + '</div>' +
      '<button class="btn ghost wide" style="margin-top:14px" onclick="startQuiz()">重新测试</button>' +
      '</div>';
  }
  document.getElementById('home').innerHTML = html;
}

function getLevelAdvice(level) {
  const advice = {
    'N5': '建议：从基础语法和日常场景开始，重点补五十音、助词、动词变形。',
    'N4': '建议：重点拓展词汇量、练习听力和表达自然度。',
    'N3': '建议：重点攻长句理解、敬语、抽象话题表达。',
    'N2': '建议：重点练新闻阅读、商务日语、母语者语速听力。'
  };
  return advice[level] || '';
}

let quiz = null;
function startQuiz() {
  quiz = { idx: 0, correct: 0, levelScores: { N5: [0,0], N4: [0,0], N3: [0,0] } };
  renderQuiz();
}
function renderQuiz() {
  const q = QUIZ[quiz.idx];
  document.getElementById('home').innerHTML = '<div class="card">' +
    '<div class="quiz-progress">第 ' + (quiz.idx+1) + ' / ' + QUIZ.length + ' 题</div>' +
    '<div style="font-size:17px;font-weight:600;margin-bottom:18px">' + q.q + '</div>' +
    q.options.map((opt, i) => '<button class="option" onclick="answerQuiz(' + i + ')">' + opt + '</button>').join('') +
    '</div>';
}
function answerQuiz(i) {
  const q = QUIZ[quiz.idx];
  const ok = i === q.answer;
  if (ok) quiz.correct++;
  quiz.levelScores[q.level][1]++;
  if (ok) quiz.levelScores[q.level][0]++;
  quiz.idx++;
  if (quiz.idx >= QUIZ.length) finishQuiz();
  else renderQuiz();
}
function finishQuiz() {
  const score = Math.round(quiz.correct / QUIZ.length * 100);
  let level = 'N5';
  const n5 = quiz.levelScores.N5, n4 = quiz.levelScores.N4, n3 = quiz.levelScores.N3;
  if (n3[1] > 0 && n3[0] / n3[1] >= 0.75) level = 'N3';
  else if (n4[1] > 0 && n4[0] / n4[1] >= 0.6) level = 'N4';
  else if (n5[1] > 0 && n5[0] / n5[1] >= 0.75) level = 'N5';
  else level = 'N5（基础薄弱）';
  store.userLevel = level;
  store.userScore = score;
  save();
  document.getElementById('home').innerHTML = '<div class="card level-result">' +
    '<div style="font-size:40px;margin-bottom:10px">🎯</div>' +
    '<div style="color:#9aa0a6;font-size:14px;margin-bottom:8px">你的水平</div>' +
    '<div class="level-big">' + level + '</div>' +
    '<div style="color:#9aa0a6;font-size:14px;margin:10px 0 20px">总正确率 ' + score + '%</div>' +
    '<div style="background:#141824;border-radius:10px;padding:14px;font-size:13px;color:#b8bcc4;text-align:left;line-height:1.8">' + getLevelAdvice(level) + '</div>' +
    '<button class="btn wide" style="margin-top:20px" onclick="showTab(\'scenes\')">开始学习场景 →</button>' +
    '<button class="btn ghost wide" onclick="startQuiz()">再测一次</button>' +
    '</div>';
}

function renderScenes() {
  const html = SCENES.map(s => {
    const lv = getSceneLevel(s.id);
    const done = lv.completed > 0;
    return '<div class="scene-item" onclick="startScene(\'' + s.id + '\')"><div><div class="title">' + s.emoji + ' ' + s.title + '</div><div class="meta">' + s.titleCn + ' · ' + s.dialogue.length + '句</div></div><div class="badge">' + (done ? '✅ ' + Math.round(lv.score) + '分' : s.level) + '</div></div>';
  }).join('');
  document.getElementById('scenes').innerHTML = '<div style="font-size:14px;color:#9aa0a6;margin-bottom:10px">点击场景开始学习</div>' + html;
}

let current = null;
function startScene(id) {
  const scene = SCENES.find(s => s.id === id);
  current = { scene, step: 0, lineIdx: 0 };
  renderStep();
}
function renderStep() {
  const step = current.step;
  const dots = [0,1,2,3,4,5].map(i => '<div class="step-dot' + (i<step?' done':i===step?' active':'') + '"></div>').join('');
  let content = '';
  if (step === 0) content = renderBlindListen();
  else if (step === 1) content = renderListenOneByOne();
  else if (step === 2) content = renderShadowing();
  else if (step === 3) content = renderMeaningGrammar();
  else if (step === 4) content = renderKeywords();
  else content = renderResult();
  document.getElementById('scenes').innerHTML =
    '<button class="btn ghost" style="margin-bottom:12px" onclick="showTab(\'scenes\')">← 返回</button>' +
    '<div class="step-bar">' + dots + '</div>' +
    '<div style="text-align:center;color:#9aa0a6;font-size:13px;margin-bottom:10px">第 ' + (step+1) + ' 步 / 共 6 步 · ' + ['盲听','逐句听','跟读','理解','关键词','完成'][step] + '</div>' + content;
}
function renderBlindListen() {
  const scene = current.scene;
  const lv = getSceneLevel(scene.id);
  const full = scene.dialogue.map(d => d.jp).join('');
  return '<div class="card"><div style="text-align:center;font-size:15px;margin-bottom:14px">🎧 先听整段对话</div>' +
    '<div style="text-align:center;font-size:13px;color:#9aa0a6;margin-bottom:16px">' + scene.title + ' · ' + scene.dialogue.length + '句 · 语速' + Math.round(lv.speed*100) + '%</div>' +
    '<button class="btn wide" onclick="speak(\'' + escapeJs(full) + '\',' + lv.speed + ')">▶ 播放整段</button>' +
    '<button class="btn ghost wide" onclick="speak(\'' + escapeJs(full) + '\',' + (lv.speed*0.7) + ')">🐢 慢速播放</button></div>' +
    '<div class="card"><div style="font-size:14px;color:#9aa0a6;margin-bottom:10px">听懂了多少？</div>' +
    '<button class="btn wide" onclick="stepNext()">大部分能听懂</button>' +
    '<button class="btn ghost wide" onclick="stepNext()">只听懂一点点</button>' +
    '<button class="btn ghost wide" onclick="stepNext()">完全没听懂</button></div>';
}function renderListenOneByOne() {
  const scene = current.scene, i = current.lineIdx;
  const lv = getSceneLevel(scene.id);
  const line = scene.dialogue[i];
  return '<div class="card"><div style="text-align:center;color:#9aa0a6;font-size:13px;margin-bottom:10px">第 ' + (i+1) + ' / ' + scene.dialogue.length + ' 句</div>' +
    '<div class="speaker">' + line.speaker + '</div>' +
    '<button class="btn wide" onclick="speak(\'' + escapeJs(line.jp) + '\',' + lv.speed + ')">▶ 听这一句</button>' +
    '<div id="reveal-' + i + '" class="hidden"><div class="big-jp">' + line.jp + '</div><div class="kana">' + line.kana + '</div><div class="cn">' + line.cn + '</div></div></div>' +
    '<div class="card"><button class="btn wide" onclick="document.getElementById(\'reveal-' + i + '\').classList.remove(\'hidden\')">看文字</button>' +
    '<button class="btn wide" onclick="nextLine()">下一句 →</button></div>';
}
function renderShadowing() {
  const scene = current.scene, i = current.lineIdx;
  const lv = getSceneLevel(scene.id);
  const line = scene.dialogue[i];
  return '<div class="card"><div style="text-align:center;color:#9aa0a6;font-size:13px;margin-bottom:10px">跟读第 ' + (i+1) + ' / ' + scene.dialogue.length + ' 句</div>' +
    '<div class="speaker">' + line.speaker + '</div>' +
    '<div class="big-jp">' + line.jp + '</div><div class="kana">' + line.kana + '</div><div class="cn">' + line.cn + '</div>' +
    '<button class="btn wide" onclick="speak(\'' + escapeJs(line.jp) + '\',' + lv.speed + ')">▶ 听标准发音</button>' +
    '<button class="btn wide good" onclick="startRecognition(\'' + escapeJs(line.jp) + '\')">🎤 我来读</button>' +
    '<div class="mic-status" id="mic-status">点击"我来读"，然后朗读</div></div>' +
    '<div class="card"><button class="btn wide" onclick="nextShadowLine()">下一句 →</button></div>';
}
function renderMeaningGrammar() {
  const scene = current.scene;
  return '<div class="card"><div style="font-size:15px;font-weight:600;margin-bottom:14px">📖 逐句理解 + 语法</div>' +
    scene.dialogue.map(line =>
      '<div style="padding:14px 0;border-bottom:1px solid #2a2e3d"><div class="speaker">' + line.speaker + '</div>' +
      '<div style="font-size:17px;font-weight:600;margin-bottom:4px">' + line.jp + '</div>' +
      '<div class="kana" style="text-align:left;font-size:13px">' + line.kana + '</div>' +
      '<div class="cn" style="text-align:left">' + line.cn + '</div>' +
      '<div class="grammar-note">' + line.grammar + '</div></div>'
    ).join('') + '</div><button class="btn wide" onclick="stepNext()">我理解了 →</button>';
}
function renderKeywords() {
  const scene = current.scene;
  scene.keywords.forEach(k => store.keywords[k] = true);
  save();
  return '<div class="card"><div style="font-size:15px;font-weight:600;margin-bottom:14px">🔑 本场景关键词</div>' +
    '<div>' + scene.keywords.map(k => '<span class="kw-item">' + k + '</span>').join('') + '</div>' +
    '<div style="color:#9aa0a6;font-size:13px;margin-top:14px">这些词已加入复习列表。</div></div>' +
    '<button class="btn wide" onclick="stepNext()">开始AI实战 →</button>';
}
function renderResult() {
  const scene = current.scene;
  const s = store.sceneStats[scene.id] || { completed: 0, totalScore: 0 };
  s.completed++; s.totalScore += 80;
  store.sceneStats[scene.id] = s;
  const today = new Date().toDateString();
  if (store.streak.last !== today) {
    store.streak.count = (store.streak.count || 0) + 1;
    store.streak.last = today;
  }
  save();
  return '<div class="card" style="text-align:center;padding:20px"><div style="font-size:40px;margin-bottom:10px">🎉</div>' +
    '<div style="font-size:18px;font-weight:600;margin-bottom:6px">' + scene.title + ' 完成！</div>' +
    '<div style="font-size:14px;color:#9aa0a6;margin-bottom:16px">继续加油！</div>' +
    '<button class="btn wide" onclick="startAIRoleplay(\'' + scene.id + '\')">💬 进入AI角色扮演</button>' +
    '<button class="btn ghost wide" onclick="showTab(\'scenes\')">返回场景列表</button></div>';
}
function stepNext() { current.step++; current.lineIdx = 0; renderStep(); }
function nextLine() { current.lineIdx++; if (current.lineIdx >= current.scene.dialogue.length) { current.lineIdx = 0; current.step++; } renderStep(); }
function nextShadowLine() { current.lineIdx++; if (current.lineIdx >= current.scene.dialogue.length) { current.lineIdx = 0; current.step++; } renderStep(); }
function startRecognition(target) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const el = document.getElementById('mic-status');
  if (!SR) { el.textContent = '⚠️ 此浏览器不支持语音识别'; return; }
  const rec = new SR();
  rec.lang = 'ja-JP';
  rec.interimResults = false;
  el.textContent = '🎤 正在听...'; el.className = 'mic-status mic-listening';
  rec.onresult = (e) => {
    const heard = e.results[0][0].transcript;
    const sim = similarity(heard, target);
    if (sim >= 0.8) { el.textContent = '✅ 很好！「' + heard + '」'; el.className = 'mic-status mic-ok'; }
    else if (sim >= 0.5) { el.textContent = '🤔 接近：「' + heard + '」再试试'; el.className = 'mic-status'; }
    else { el.textContent = '识别到：「' + heard + '」，再听一遍'; el.className = 'mic-status mic-err'; }
  };
  rec.onerror = (e) => { el.textContent = '❌ 识别失败：' + e.error; el.className = 'mic-status mic-err'; };
  rec.start();
}
function similarity(a, b) {
  a = a.replace(/[。、！？\s]/g, ''); b = b.replace(/[。、！？\s]/g, '');
  if (a === b) return 1;
  let m = 0; const s = a.length < b.length ? a : b; const l = a.length < b.length ? b : a;
  for (let i = 0; i < s.length; i++) if (l.includes(s[i])) m++;
  return m / l.length;
}
function renderReview() {
  const kws = Object.keys(store.keywords);
  if (!kws.length) { document.getElementById('review').innerHTML = '<div class="card" style="text-align:center;color:#9aa0a6">还没有复习内容</div>'; return; }
  document.getElementById('review').innerHTML = '<div class="card"><div style="font-size:15px;font-weight:600;margin-bottom:14px">🔑 我的关键词</div><div>' + kws.map(k => '<span class="kw-item">' + k + '</span>').join('') + '</div></div>';
}
function saveKey() {
  const key = document.getElementById('api-key').value.trim();
  const level = document.getElementById('level').value.trim();
  if (key) store.apiKey = key;
  store.level = level;
  save();
  alert('已保存');
}
function startAIRoleplay(sceneId) {
  const scene = SCENES.find(s => s.id === sceneId);
  store.chat = [];
  store.roleplayScene = sceneId;
  save();
  showTab('chat');
}
async function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  if (!store.apiKey) { alert('请先设置API Key'); return; }
  store.chat.push({ role: 'user', content: text });
  input.value = '';
  renderChat();
  const box = document.getElementById('chat-box');
  box.innerHTML += '<div class="msg ai" id="loading">考え中...</div>';
  box.scrollTop = box.scrollHeight;
  const scene = store.roleplayScene ? SCENES.find(s => s.id === store.roleplayScene) : null;
  const roleplay = scene ? scene.aiRoleplay : '';
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': store.apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: '你是我的日语私教。我的水平：' + (store.userLevel || store.level || 'N5') + '。母语中文。' + (roleplay ? '当前任务：' + roleplay : '') + ' 规则：1.用日语回复 2.如有错误先用【訂正】指出并解释 3.继续对话 4.150字以内 5.保持鼓励',
        messages: store.chat.slice(-10)
      })
    });
    const data = await res.json();
    document.getElementById('loading')?.remove();
    if (data.error) store.chat.push({ role: 'assistant', content: '[错误] ' + data.error.message });
    else store.chat.push({ role: 'assistant', content: data.content[0].text });
  } catch (e) {
    document.getElementById('loading')?.remove();
    store.chat.push({ role: 'assistant', content: '[网络错误] ' + e.message });
  }
  save();
  renderChat();
}
function renderChat() {
  const box = document.getElementById('chat-box');
  if (!box) return;
  box.innerHTML = store.chat.map(m => '<div class="msg ' + (m.role === 'user' ? 'user' : 'ai') + '">' + escapeHtml(m.content) + '</div>').join('');
  box.scrollTop = box.scrollHeight;
  if (store.apiKey) document.getElementById('api-key').value = store.apiKey;
  if (store.level) document.getElementById('level').value = store.level;
}
function clearChat() { store.chat = []; store.roleplayScene = null; save(); renderChat(); }
function escapeHtml(s) { return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function escapeJs(s) { return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"'); }

renderHome();
