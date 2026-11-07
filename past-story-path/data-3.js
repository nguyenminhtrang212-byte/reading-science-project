/* Level 3 · Connect ideas: lessons 09-11 */

LESSONS['09']={id:'09',level:3,time:25,file:'09-linking-words.html',next:'10',
title:'Linking Words: and, but, so, because, before, after, when',
goal:'Join short sentences into longer, smoother ones.',
sections:[
{type:'learn',title:'Seven useful linking words',html:
'<table><tr><td><b>and</b> – add</td><td><span class="sp">I had breakfast and went to school.</span></td></tr>'+
'<tr><td><b>but</b> – contrast</td><td><span class="sp">I wanted to go out, but it rained.</span></td></tr>'+
'<tr><td><b>so</b> – result</td><td><span class="sp">I was tired, so I went to bed early.</span></td></tr>'+
'<tr><td><b>because</b> – reason</td><td><span class="sp">I went to bed early because I was tired.</span></td></tr>'+
'<tr><td><b>before / after</b></td><td><span class="sp">I had breakfast before I went to school.</span></td></tr>'+
'<tr><td><b>when</b></td><td><span class="sp">When I got home, I did my homework.</span></td></tr></table>'+
'<div class="vi">and = và; but = nhưng; so = vì vậy (chỉ kết quả); because = bởi vì (chỉ lý do); before = trước khi; after = sau khi; when = khi. Lưu ý: so + kết quả, because + lý do.</div>'},
{type:'mc',title:'Choose the best linking word',tag:'scored',items:[
{q:'I was tired, ___ I went to bed early.',o:['so','because','but'],a:0},
{q:'I went to bed early ___ I was tired.',o:['so','because','but'],a:1},
{q:'I wanted to play, ___ it rained.',o:['and','but','so'],a:1},
{q:'I had breakfast ___ I went to school.',o:['before','because','but'],a:0},
{q:'___ I got home, I did my homework.',o:['But','So','When'],a:2},
{q:'We played football ___ we had lunch.',o:['but','so','after'],a:2},
{q:'She was happy ___ she got a good mark.',o:['so','but','because'],a:2},
{q:'I washed my hands ___ I ate.',o:['but','before','so'],a:1}]},
{type:'gap',title:'Type the linking word',tag:'scored',items:[
"I was hungry, {so} I ate a sandwich. (so / but)",
"I like pizza, {but} I didn't eat it. (and / but)",
"I stayed home {because} it rained. (because / so)",
"We went home {after} the film ended. (before / after)",
"{When} I arrived, the class started. (when / but)",
"I did my homework {before} I went to bed. (before / after)"]},
{type:'fix',title:'Join the sentences with the word in brackets',tag:'scored',label:'Join the two sentences:',items:[
{q:'I was tired. I went to bed early. (so)',a:['I was tired so I went to bed early.']},
{q:'I went to bed early. I was tired. (because)',a:['I went to bed early because I was tired.']},
{q:'I wanted to go out. It rained. (but)',a:['I wanted to go out but it rained.']},
{q:'I had breakfast. I went to school. (before)',a:['I had breakfast before I went to school.','Before I went to school I had breakfast.']}]},
{type:'write',title:'Your turn: longer sentences',tag:'write',prompt:'Write 5 sentences about yesterday. Use a different linking word in each sentence.',
vi:'Viết 5 câu về hôm qua, mỗi câu dùng một từ nối khác nhau.',frames:['… and …','… but …','… so …','… because …','Before …, I …','When I …, I …'],minSent:5,
checks:[{label:'Linking words',re:LINKX,min:5},{label:'because',re:'\\bbecause\\b',min:1},{label:'but',re:'\\bbut\\b',min:1}],
sample:'I woke up late, so I took a taxi. I wanted to eat breakfast, but I had no time. I was happy because I got a good mark. Before I went home, I played football. When I got home, I did my homework.'}
]};

LESSONS['10']={id:'10',level:3,time:25,file:'10-add-details.html',next:'11',
title:'Add Details: Feelings, Adjectives, Adverbs',
goal:'Make sentences richer with feelings (felt nervous), adjectives and adverbs (quickly).',
sections:[
{type:'learn',title:'From simple to interesting',html:
'<p>Simple: <span class="sp">I went to school.</span></p>'+
'<p>Better: <span class="sp">I walked to school quickly because I was late.</span></p>'+
'<p>Best: <span class="sp">I felt nervous, so I walked to school quickly.</span></p>'+
'<ul><li><b>felt + adjective:</b> felt nervous, felt proud, felt tired</li><li><b>adverbs (how?):</b> quickly, slowly, carefully, loudly</li><li><b>very / really / quite</b> + adjective</li></ul>'+
'<div class="vi">Thêm cảm xúc (felt + tính từ), trạng từ chỉ cách thức (quickly, slowly…) và từ nhấn mạnh (very, really, quite) để câu sinh động hơn.</div>'},
{type:'vocab',title:'Useful words',items:[
["felt nervous","cảm thấy lo lắng","I felt nervous before the test."],["felt proud","cảm thấy tự hào","I felt proud of my team."],
["boring","chán","The lesson was boring."],["exciting","thú vị, hào hứng","The trip was exciting."],["difficult","khó","The test was difficult."],
["quickly","một cách nhanh chóng","I ran quickly to the bus."],["slowly","một cách chậm rãi","We walked slowly in the rain."],["carefully","một cách cẩn thận","He did his homework carefully."],
["really","thật sự","I was really tired."],["quite","khá","The movie was quite good."]]},
{type:'mc',title:'Choose the best word',tag:'scored',items:[
{q:'I ___ happy when I got a good mark.',o:['feel','felt','feeled'],a:1},
{q:'She walked ___ because she was late.',o:['quick','quicker','quickly'],a:2},
{q:'The film was ___. I fell asleep.',o:['bored','boring','bore'],a:1},
{q:'I was ___ tired after football.',o:['very','many','much'],a:0},
{q:'He did his homework ___, so there were no mistakes.',o:['careful','carefully','care'],a:1},
{q:'We were ___ excited about the trip.',o:['really','slowly','quickly'],a:0}]},
{type:'gap',title:'Complete the sentences',tag:'scored',items:[
"I {felt} (feel) very nervous before the test.",
"We walked {slowly} (slow) in the rain.",
"The lesson was {boring} (not interesting).",
"She spoke {loudly} (loud) in the hall.",
"He drew the picture {carefully} (careful).",
"I was {really|very} tired after the trip."]},
{type:'write',title:'Make these sentences better',tag:'write',rows:7,
prompt:'Rewrite these 4 simple sentences. Add a feeling, an adjective or an adverb to each: (1) I went to school. (2) We had a test. (3) I ate lunch. (4) I went home.',
vi:'Viết lại 4 câu đơn giản, thêm cảm xúc, tính từ hoặc trạng từ.',frames:['I felt …','I was very …','… quickly','… because I was …'],minSent:4,
checks:[{label:'very / really / quite',re:'\\b(very|really|quite)\\b',min:1},{label:'felt / was / were + adjective',re:'\\b(felt|was|were)\\s+\\w+',min:2},{label:'An adverb ending in -ly',re:'\\b\\w+ly\\b',min:1}],
sample:'I walked to school quickly because I felt nervous. We had a very difficult test. I ate lunch slowly because I was really tired. I went home happily.'}
]};

LESSONS['11']={id:'11',level:3,time:25,file:'11-irregular-verbs-2.html',next:'12',
title:'Irregular Verbs II + Mixed Review',
goal:'Learn 20 more irregular verbs and fix common mistakes.',
sections:[
{type:'learn',title:'20 more verbs',html:
'<table><tr><td><span class="sp">wake – woke</span></td><td><span class="sp">sleep – slept</span></td><td><span class="sp">drink – drank</span></td><td><span class="sp">speak – spoke</span></td></tr>'+
'<tr><td><span class="sp">leave – left</span></td><td><span class="sp">begin – began</span></td><td><span class="sp">find – found</span></td><td><span class="sp">forget – forgot</span></td></tr>'+
'<tr><td><span class="sp">win – won</span></td><td><span class="sp">think – thought</span></td><td><span class="sp">tell – told</span></td><td><span class="sp">teach – taught</span></td></tr>'+
'<tr><td><span class="sp">catch – caught</span></td><td><span class="sp">bring – brought</span></td><td><span class="sp">feel – felt</span></td><td><span class="sp">lose – lost</span></td></tr>'+
'<tr><td><span class="sp">fall – fell</span></td><td><span class="sp">sing – sang</span></td><td><span class="sp">swim – swam</span></td><td><span class="sp">send – sent</span></td></tr></table>'+
'<div class="vi">20 động từ bất quy tắc nữa. Hãy đọc to từng cặp 3 lần. Mẹo: học theo nhóm âm giống nhau (think–thought, bring–brought, catch–caught, teach–taught).</div>'},
{type:'match',title:'Match: base verb → past verb',tag:'scored',pairs:[['sleep','slept'],['drink','drank'],['speak','spoke'],['leave','left'],['begin','began'],['find','found'],['forget','forgot'],['win','won'],['think','thought'],['tell','told']]},
{type:'gap',title:'Type the past form',tag:'scored',items:[
"I {slept} (sleep) for eight hours.",
"She {drank} (drink) a glass of milk.",
"He {spoke} (speak) English in class.",
"We {left} (leave) home at seven.",
"The film {began} (begin) at eight.",
"I {found} (find) my pen under the desk.",
"They {won} (win) the match.",
"I {forgot} (forget) my book."]},
{type:'fix',title:'Fix the verb',tag:'scored',items:[
{q:'I eated an apple.',a:['I ate an apple.']},
{q:'She speaked to the teacher.',a:['She spoke to the teacher.']},
{q:'We goed to the park.',a:['We went to the park.']},
{q:'He finded his bag.',a:['He found his bag.']},
{q:'They winned the game.',a:['They won the game.']}]},
{type:'mc',title:'Which sentence is correct?',tag:'scored',items:[
{q:'Choose:',o:['I thinked about it.','I thought about it.','I think about it yesterday.'],a:1},
{q:'Choose:',o:['She tell me a story last night.','She tolded me a story last night.','She told me a story last night.'],a:2},
{q:'Choose:',o:['We caught the bus.','We catched the bus.','We catch the bus yesterday.'],a:0},
{q:'Choose:',o:['He teached me English.','He taught me English.','He teach me English.'],a:1},
{q:'Choose:',o:['They brang cakes.','They bring cakes yesterday.','They brought cakes.'],a:2}]}
]};
