/* Level 1 · Foundation: lessons 01-04 */
window.LESSONS=window.LESSONS||{};

LESSONS['01']={id:'01',level:1,time:15,file:'01-school-day-words.html',next:'02',
title:'My School Day: Words',
goal:'Learn 12 phrases to talk about a school day in the past.',
sections:[
{type:'learn',title:'Words for yesterday',html:
'<p>Use <b>yesterday</b> + a past verb. Click a sentence to listen.</p>'+
'<ul><li><span class="sp">I woke up at six yesterday.</span></li><li><span class="sp">I had breakfast and went to school.</span></li><li><span class="sp">We played football after school.</span></li><li><span class="sp">In the evening, I did my homework.</span></li></ul>'+
'<div class="vi">Dùng <b>yesterday</b> (hôm qua) + động từ ở quá khứ. Ví dụ: Hôm qua mình dậy lúc 6 giờ, ăn sáng rồi đi học…</div>'},
{type:'vocab',title:'12 phrases about a school day',items:[
["woke up at six","thức dậy lúc 6 giờ","I woke up at six yesterday."],
["brushed my teeth","đánh răng","I brushed my teeth after breakfast."],
["had breakfast","ăn sáng","I had breakfast with my family."],
["took the bus","đi xe buýt","I took the bus to school."],
["went to school","đi học","We went to school at 7 a.m."],
["had English class","có tiết tiếng Anh","We had English class in the morning."],
["ate lunch","ăn trưa","I ate lunch with my friends."],
["played football","chơi bóng đá","We played football after school."],
["did my homework","làm bài tập","I did my homework in the evening."],
["watched TV","xem TV","I watched TV for an hour."],
["had dinner","ăn tối","We had dinner at 7 p.m."],
["went to bed","đi ngủ","I went to bed at ten."]]},
{type:'mc',title:'Choose the correct past verb',tag:'scored',items:[
{q:'Yesterday I ___ up at six.',o:['woke','wake','waked'],a:0},
{q:'She ___ the bus to school.',o:['taked','takes','took'],a:2},
{q:'We ___ breakfast at home.',o:['had','have','haved'],a:0},
{q:'He ___ his homework in the evening.',o:['done','did','doed'],a:1},
{q:'They ___ football after class.',o:['play','plays','played'],a:2},
{q:'I ___ to bed at ten o\'clock.',o:['go','went','goed'],a:1}]},
{type:'match',title:'Match: base verb → past verb',tag:'scored',pairs:[['wake','woke'],['have','had'],['take','took'],['go','went'],['eat','ate'],['do','did']]},
{type:'gap',title:'Type the past form',tag:'scored',items:[
"Yesterday I {brushed} (brush) my teeth at 6:30.",
"We {played} (play) football after school.",
"She {watched} (watch) TV in the evening.",
"I {ate} (eat) lunch at twelve o'clock.",
"My brother {went} (go) to bed late."]},
{type:'write',title:'Your turn: my morning yesterday',tag:'write',prompt:'Write 4 sentences about your morning yesterday.',
vi:'Viết 4 câu về buổi sáng hôm qua của em.',
frames:['Yesterday I woke up at …','I brushed my teeth and …','I had breakfast …','I took the bus …'],minSent:4,
checks:[{label:'Use "yesterday"',re:'\\byesterday\\b',min:1},{label:'Use 3 or more past verbs',re:PV,min:3}],
sample:'Yesterday I woke up at six. I brushed my teeth and had breakfast. I took the bus to school. I went to school at seven.'}
]};

LESSONS['02']={id:'02',level:1,time:20,file:'02-ed-verbs.html',next:'03',
title:'Regular Verbs: -ed Spelling & Sound',
goal:'Add -ed correctly and pronounce it: /t/, /d/ or /ɪd/.',
sections:[
{type:'learn',title:'The four -ed rules',html:
'<table><tr><th>Rule</th><th>Examples</th></tr>'+
'<tr><td>1. Most verbs: + <b>ed</b></td><td><span class="sp">walked</span> · <span class="sp">played</span> · <span class="sp">watched</span> · <span class="sp">cleaned</span></td></tr>'+
'<tr><td>2. Ends in <b>e</b>: + <b>d</b></td><td><span class="sp">liked</span> · <span class="sp">danced</span> · <span class="sp">lived</span></td></tr>'+
'<tr><td>3. consonant + <b>y</b> → <b>ied</b></td><td><span class="sp">studied</span> · <span class="sp">carried</span> · <span class="sp">cried</span> (but play → played)</td></tr>'+
'<tr><td>4. short vowel + 1 consonant: double it</td><td><span class="sp">stopped</span> · <span class="sp">planned</span> · <span class="sp">chatted</span></td></tr></table>'+
'<p><b>Sounds:</b> /t/ walked, helped · /d/ played, lived · /ɪd/ wanted, needed (after t or d).</p>'+
'<div class="vi">Quy tắc: (1) thêm -ed; (2) tận cùng -e chỉ thêm -d; (3) phụ âm + y đổi thành -ied; (4) nguyên âm ngắn + 1 phụ âm thì gấp đôi phụ âm. Cách đọc: /t/ sau âm vô thanh, /d/ sau âm hữu thanh, /ɪd/ sau t hoặc d.</div>'},
{type:'gap',title:'Type the past form',tag:'scored',items:[
"We {walked} (walk) to the park.",
"She {liked} (like) the film.",
"I {studied} (study) English last night.",
"The car {stopped} (stop) at the light.",
"He {played} (play) games yesterday.",
"They {danced} (dance) at the party.",
"My mom {carried} (carry) the bags.",
"We {planned} (plan) a trip."]},
{type:'mc',title:'Choose the correct spelling',tag:'scored',items:[
{q:'stop →',o:['stoped','stopped','stopt'],a:1},
{q:'study →',o:['studyed','studied','studdied'],a:1},
{q:'plan →',o:['planned','planed','plannd'],a:0},
{q:'play →',o:['plaied','played','plaid'],a:1},
{q:'cry →',o:['cryed','criied','cried'],a:2}]},
{type:'mc',title:'How do we say -ed?',tag:'scored',items:[
{q:'walked ends with…',o:['/t/','/d/','/ɪd/'],a:0},
{q:'played ends with…',o:['/t/','/d/','/ɪd/'],a:1},
{q:'wanted ends with…',o:['/t/','/d/','/ɪd/'],a:2},
{q:'helped ends with…',o:['/t/','/d/','/ɪd/'],a:0}]},
{type:'write',title:'Your turn: school yesterday',tag:'write',prompt:'Write 3 sentences about school yesterday. Use 3 verbs with -ed.',
vi:'Viết 3 câu về ngày đi học hôm qua, dùng 3 động từ có -ed.',frames:['We studied …','I walked …','My friends played …'],minSent:3,
checks:[{label:'Use 3 verbs with -ed',re:'\\b\\w{2,}ed\\b',min:3},{label:'Use "yesterday" or another time word',re:TIMEX,min:1}],
sample:'Yesterday we studied English. I walked to school with Mai. After class, we played football.'}
]};

LESSONS['03']={id:'03',level:1,time:20,file:'03-irregular-verbs-1.html',next:'04',
title:'Irregular Verbs I (16 verbs)',
goal:'Learn the past forms of 16 common verbs. They do not take -ed.',
sections:[
{type:'learn',title:'Learn by heart',html:
'<p>Some verbs change completely in the past. Listen and repeat.</p>'+
'<table><tr><td><span class="sp">go – went</span></td><td><span class="sp">have – had</span></td><td><span class="sp">eat – ate</span></td><td><span class="sp">see – saw</span></td></tr>'+
'<tr><td><span class="sp">make – made</span></td><td><span class="sp">take – took</span></td><td><span class="sp">get – got</span></td><td><span class="sp">come – came</span></td></tr>'+
'<tr><td><span class="sp">buy – bought</span></td><td><span class="sp">write – wrote</span></td><td><span class="sp">read – read</span></td><td><span class="sp">give – gave</span></td></tr>'+
'<tr><td><span class="sp">meet – met</span></td><td><span class="sp">run – ran</span></td><td><span class="sp">sit – sat</span></td><td><span class="sp">say – said</span></td></tr></table>'+
'<div class="vi">Động từ bất quy tắc: không thêm -ed, phải học thuộc. Lưu ý: read (đọc) viết giống nhau nhưng quá khứ đọc là /red/.</div>'},
{type:'vocab',title:'Verbs in sentences',items:[
["go → went","đi","I went to the library."],["have → had","có / ăn","We had a test yesterday."],["eat → ate","ăn","She ate noodles for lunch."],["see → saw","nhìn thấy","I saw my teacher in town."],
["make → made","làm","My mom made a cake."],["take → took","lấy / đi (xe)","He took a photo."],["get → got","nhận / có","I got a good mark."],["come → came","đến","They came home at five."],
["buy → bought","mua","I bought a new pen."],["write → wrote","viết","She wrote a letter."],["read → read","đọc","I read a book last night."],["give → gave","đưa / cho","He gave me his notebook."],
["meet → met","gặp","We met at the gate."],["run → ran","chạy","I ran to the bus stop."],["sit → sat","ngồi","I sat next to Lan."],["say → said","nói","The teacher said hello."]]},
{type:'match',title:'Match: base verb → past verb',tag:'scored',pairs:[['go','went'],['have','had'],['eat','ate'],['see','saw'],['make','made'],['take','took'],['get','got'],['come','came']]},
{type:'gap',title:'Type the past form',tag:'scored',items:[
"Yesterday I {saw} (see) my friend at the park.",
"She {made} (make) a cake for her mom.",
"We {came} (come) home at five.",
"He {got} (get) a good mark in English.",
"I {bought} (buy) a new pen.",
"They {gave} (give) me a book."]},
{type:'mc',title:'Which one is correct?',tag:'scored',items:[
{q:'Last week I ___ to Hue.',o:['goed','gone','went'],a:2},
{q:'She ___ a new bike.',o:['buyed','bought','buy'],a:1},
{q:'They ___ to the party late.',o:['comed','came','come'],a:1},
{q:'I ___ him a letter.',o:['wrote','writed','write'],a:0},
{q:'He ___ me his pen.',o:['gave','gived','give'],a:0}]}
]};

LESSONS['04']={id:'04',level:1,time:20,file:'04-was-were.html',next:'05',
title:'Was & Were: Describe Yesterday',
goal:'Use was / were to say how people, places and things were.',
sections:[
{type:'learn',title:'Was or were?',html:
'<table><tr><th></th><th>+</th><th>−</th><th>?</th></tr>'+
'<tr><td>I, he, she, it</td><td><span class="sp">I was tired.</span></td><td><span class="sp">It wasn\'t easy.</span></td><td><span class="sp">Was she late?</span></td></tr>'+
'<tr><td>you, we, they</td><td><span class="sp">We were happy.</span></td><td><span class="sp">They weren\'t at home.</span></td><td><span class="sp">Were you ill?</span></td></tr></table>'+
'<div class="vi">was/were là quá khứ của am/is/are. I/he/she/it dùng was; you/we/they dùng were. Phủ định: wasn\'t / weren\'t. Câu hỏi: đảo was/were lên trước.</div>'},
{type:'mc',title:'Was or were?',tag:'scored',items:[
{q:'I ___ tired yesterday.',o:['was','were'],a:0},
{q:'They ___ at school.',o:['was','were'],a:1},
{q:'She ___ happy after the test.',o:['was','were'],a:0},
{q:'We ___ late for class.',o:['was','were'],a:1},
{q:'The lunch ___ delicious.',o:['was','were'],a:0},
{q:'You ___ very kind to me.',o:['was','were'],a:1}]},
{type:'gap',title:'Complete the sentences',tag:'scored',items:[
"I {wasn't|was not} (not / be) hungry at breakfast.",
"The students {weren't|were not} (not / be) late.",
"{Was} he at school yesterday?",
"{Were} you tired after class?",
"It {was} a long day.",
"My friends {were} in the library."]},
{type:'write',title:'How was your day yesterday?',tag:'write',prompt:'Write 4 sentences about yesterday. Use was / were and an adjective (tired, happy, busy, boring, fun…).',
vi:'Viết 4 câu về hôm qua, dùng was/were và một tính từ.',frames:['Yesterday was …','I was …','My friends were …','The lesson was …'],minSent:4,
checks:[{label:'Use was / were',re:'\\b(was|were|wasn\'t|weren\'t)\\b',min:3},{label:'Use an adjective',re:'\\b(tired|happy|hungry|boring|fun|great|difficult|easy|late|busy|sad|good|bad|long)\\b',min:1}],
sample:'Yesterday was a busy day. I was very tired after school. My friends were happy because the test was easy. The lunch was great.'}
]};
