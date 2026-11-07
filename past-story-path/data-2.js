/* Level 2 · Build sentences: lessons 05-08 */

LESSONS['05']={id:'05',level:2,time:20,file:'05-time-order.html',next:'06',
title:'Time Order: A Day on a Timeline',
goal:'Put events in order with time expressions and sequence words.',
sections:[
{type:'learn',title:'Time words and sequence words',html:
'<p><b>Time:</b> <span class="sp">at 7 a.m.</span> · <span class="sp">in the morning</span> · <span class="sp">in the afternoon</span> · <span class="sp">in the evening</span> · <span class="sp">on Sunday</span> · <span class="sp">two days ago</span> · <span class="sp">last night</span></p>'+
'<p><b>Order:</b> <span class="sp">First,</span> → <span class="sp">Then</span> → <span class="sp">After that,</span> → <span class="sp">Later,</span> → <span class="sp">Finally,</span></p>'+
'<p><span class="sp">First, I woke up at six. Then I had breakfast. After that, I took the bus. Finally, I went to bed.</span></p>'+
'<div class="vi">Từ chỉ thời gian: at + giờ, in the morning/afternoon/evening, on + thứ, … ago, last night. Từ nối thứ tự: First (trước tiên), Then (sau đó), After that (sau đó nữa), Later (lát sau), Finally (cuối cùng).</div>'},
{type:'order',title:'Put the words in order',tag:'scored',items:[
{w:['I','at','woke','six','up'],a:['I woke up at six.']},
{w:['Then','breakfast','I','had'],a:['Then I had breakfast.']},
{w:['After','school','we','football','played'],a:['After school we played football.','After school, we played football.']},
{w:['Finally','went','I','bed','to'],a:['Finally I went to bed.','Finally, I went to bed.']}]},
{type:'mc',title:'Choose the best word',tag:'scored',items:[
{q:'I woke up at six. ___ I brushed my teeth.',o:['Then','Ago','Last'],a:0},
{q:'___, I went to bed at ten.',o:['First','Yesterday','Finally'],a:2},
{q:'I saw her two days ___.',o:['ago','last','in'],a:0},
{q:'We went to the zoo ___ Sunday.',o:['in','on','at'],a:1},
{q:'My class started ___ 7 a.m.',o:['in','on','at'],a:2},
{q:'I did my homework ___ the evening.',o:['in','on','at'],a:0}]},
{type:'seq',title:'Order the sentences',tag:'scored',items:[
{title:'Write the letters in the correct order (a day at school).',lines:['After that, I took the bus to school.','First, I woke up at six.','Finally, I went to bed at ten.','Then I brushed my teeth and had breakfast.','In the evening, I did my homework.'],a:'bdaec'}]},
{type:'write',title:'Your timeline',tag:'write',prompt:'Write 6 sentences about your day yesterday in time order. Use at least 3 sequence words.',
vi:'Viết 6 câu về ngày hôm qua theo thứ tự thời gian, dùng ít nhất 3 từ nối thứ tự.',
frames:['First, I …','Then I …','After that, …','Later, …','Finally, I …'],minSent:6,
checks:[{label:'Sequence words (first, then, after that, later, finally)',re:SEQX,min:3},{label:'Time expressions',re:TIMEX,min:2},{label:'Past verbs',re:PV,min:5}],
sample:'Yesterday I woke up at six. First, I had breakfast. Then I took the bus to school. After that, we had English class. Later, I played football with my friends. Finally, I went to bed at ten.'}
]};

LESSONS['06']={id:'06',level:2,time:20,file:'06-negatives.html',next:'07',
title:'Didn\'t: Say What Did NOT Happen',
goal:'Make negative sentences: didn\'t + base verb.',
sections:[
{type:'learn',title:'did not / didn\'t + base verb',html:
'<p><span class="sp">I watched TV.</span> → <span class="sp">I didn\'t watch TV.</span></p>'+
'<p><span class="sp">She went out.</span> → <span class="sp">She didn\'t go out.</span></p>'+
'<div class="tipbox">After <b>didn\'t</b>, use the <b>base verb</b>. No -ed! ✗ didn\'t watched → ✓ didn\'t watch</div>'+
'<div class="vi">Phủ định: S + didn\'t (did not) + động từ nguyên mẫu. Sau didn\'t không thêm -ed và không dùng dạng quá khứ.</div>'},
{type:'fix',title:'Find and fix the mistake',tag:'scored',items:[
{q:"She didn't went to school on Sunday.",a:["She didn't go to school on Sunday.","She did not go to school on Sunday."]},
{q:"We didn't played football yesterday.",a:["We didn't play football yesterday.","We did not play football yesterday."]},
{q:"He no did his homework.",a:["He didn't do his homework.","He did not do his homework."]},
{q:"They didn't ate lunch at school.",a:["They didn't eat lunch at school.","They did not eat lunch at school."]},
{q:"I didn't studied last night.",a:["I didn't study last night.","I did not study last night."]}]},
{type:'gap',title:'Complete with didn\'t / did not',tag:'scored',items:[
"I {didn't|did not} (not / watch) TV last night.",
"She {didn't|did not} (not / eat) breakfast.",
"We {didn't|did not} (not / have) class on Sunday.",
"They {didn't|did not} (not / play) football.",
"He {didn't|did not} (not / do) his homework.",
"I {didn't|did not} (not / see) Mai yesterday."]},
{type:'order',title:'Put the words in order',tag:'scored',items:[
{w:["didn't",'I','my','do','homework'],a:["I didn't do my homework."]},
{w:['She',"didn't",'the','take','bus'],a:["She didn't take the bus."]},
{w:['We',"didn't",'go','to','school'],a:["We didn't go to school."]}]},
{type:'write',title:'What did you NOT do yesterday?',tag:'write',prompt:'Write 4 sentences about things you did not do yesterday.',
vi:'Viết 4 câu về những việc em KHÔNG làm hôm qua.',frames:["I didn't …","My friends didn't …","We didn't …","It wasn't …"],minSent:4,
checks:[{label:"Use didn't / did not / wasn't / weren't",re:"\\b(didn't|did not|wasn't|weren't)\\b",min:3},{label:'Use a base verb after didn\'t (no -ed)',re:"didn't\\s+(?!\\w+ed\\b)\\w+",min:2}],
sample:"Yesterday I didn't watch TV. I didn't go out with my friends. My brother didn't do his homework. The lesson wasn't boring."}
]};

LESSONS['07']={id:'07',level:2,time:25,file:'07-questions.html',next:'08',
title:'Did you…? Ask and Answer',
goal:'Ask and answer questions about the past: Did you…? What did you do?',
sections:[
{type:'learn',title:'Questions in the past',html:
'<table><tr><td><span class="sp">Did you do your homework?</span></td><td><span class="sp">Yes, I did.</span> / <span class="sp">No, I didn\'t.</span></td></tr>'+
'<tr><td><span class="sp">What did you eat for lunch?</span></td><td>I ate rice and fish.</td></tr>'+
'<tr><td><span class="sp">Where did you go after school?</span></td><td>I went home.</td></tr>'+
'<tr><td><span class="sp">When did you wake up?</span></td><td>At six.</td></tr>'+
'<tr><td><span class="sp">Who did you play with?</span></td><td>With my friends.</td></tr></table>'+
'<div class="tipbox">Did + subject + <b>base verb</b>?  ·  Wh-word + did + subject + base verb?</div>'+
'<div class="vi">Câu hỏi: (Wh-word) + did + chủ ngữ + động từ nguyên mẫu? Trả lời ngắn: Yes, S did. / No, S didn\'t. Với was/were: Was she…? Were you…?</div>'},
{type:'order',title:'Make questions',tag:'scored',items:[
{w:['Did','you','homework','do','your'],a:['Did you do your homework?']},
{w:['What','did','eat','you','lunch','for'],a:['What did you eat for lunch?']},
{w:['Where','did','go','you','after','school'],a:['Where did you go after school?']},
{w:['When','did','wake','you','up'],a:['When did you wake up?']},
{w:['Who','did','play','with','you'],a:['Who did you play with?']}]},
{type:'mc',title:'Choose the correct word',tag:'scored',items:[
{q:'___ you watch TV last night?',o:['Did','Do','Does'],a:0},
{q:'What time ___ you get up?',o:['do','were','did'],a:2},
{q:'Did you eat breakfast? Yes, I ___.',o:['do','did','was'],a:1},
{q:'Did she go to school? No, she ___.',o:["didn't","wasn't","doesn't"],a:0},
{q:'___ you at home yesterday?',o:['Did','Were','Do'],a:1},
{q:'Where ___ they go last summer?',o:['were','do','did'],a:2}]},
{type:'gap',title:'Complete the questions',tag:'scored',items:[
"{Did} you call your friend?",
"Where {did} she go?",
"What {did} they eat?",
"How {did} you get to school?",
"Why {did} he stay at home?",
"{Were} they tired?"]},
{type:'write',title:'Interview a friend',tag:'write',prompt:'Write 5 questions to ask a friend about yesterday. Then ask and listen to the answers.',
vi:'Viết 5 câu hỏi để phỏng vấn bạn về ngày hôm qua, rồi hỏi và nghe bạn trả lời.',frames:['Did you …?','What did you …?','Where did you …?','When did you …?','Who did you …?'],minSent:5,
checks:[{label:'Question marks',re:'\\?',min:5},{label:'Use did',re:'\\bdid\\b',min:3}],
sample:'Did you do your homework? What did you eat for lunch? Where did you go after school? When did you go to bed? Who did you play with?'}
]};

LESSONS['08']={id:'08',level:2,time:25,file:'08-my-school-day.html',next:'09',
title:'Write: My School Day Yesterday',
goal:'Write a clear paragraph (8 sentences) about a school day.',
sections:[
{type:'learn',title:'Read the model paragraph',html:
'<p class="sp">Yesterday was a busy day. I woke up at six and brushed my teeth. Then I had breakfast with my family. After that, I took the bus to school. We had English and math in the morning. At lunch, I ate rice with my friends. After school, we played football. In the evening, I did my homework, but I didn\'t watch TV. Finally, I went to bed at ten. I was very tired.</p>'+
'<div class="tipbox"><b>Recipe:</b> time words + sequence words + past verbs + 1 negative + 1 feeling.</div>'+
'<div class="vi">Hôm qua là một ngày bận rộn. Mình dậy lúc 6 giờ và đánh răng. Sau đó ăn sáng cùng gia đình. Rồi đi xe buýt đến trường. Buổi sáng có tiết tiếng Anh và toán. Buổi trưa ăn cơm với bạn. Tan học, tụi mình đá bóng. Buổi tối mình làm bài tập nhưng không xem TV. Cuối cùng đi ngủ lúc 10 giờ. Mình rất mệt.</div>'},
{type:'fix',title:'Fix the mistakes',tag:'scored',items:[
{q:'Yesterday I go to school by bus.',a:['Yesterday I went to school by bus.']},
{q:'We eated lunch at twelve.',a:['We ate lunch at twelve.']},
{q:'She was not do her homework.',a:["She didn't do her homework.","She did not do her homework."]}]},
{type:'write',title:'Write your school day',tag:'write',rows:9,prompt:'Write 8 sentences about your school day yesterday. Follow the recipe.',
vi:'Viết 8 câu về một ngày đi học hôm qua. Làm theo công thức ở trên.',
frames:['Yesterday was …','I woke up at …','Then I …','After that, …','At lunch, …','After school, …','In the evening, …',"I didn't …",'Finally, I …','I was …'],minSent:8,
checks:[{label:'Time expressions',re:TIMEX,min:3},{label:'Sequence words',re:SEQX,min:3},{label:'Past verbs',re:PV,min:6},{label:"One negative (didn't / wasn't)",re:"\\b(didn't|did not|wasn't|weren't)\\b",min:1},{label:'A feeling (tired, happy, busy…)',re:'\\b(tired|happy|busy|sad|hungry|excited|bored|nervous|proud|good|great)\\b',min:1}],
sample:'Yesterday was a good day. I woke up at six and had breakfast. Then I took the bus to school. After that, we had a math test. At lunch, I ate noodles with Lan. After school, we played badminton. In the evening, I did my homework, but I didn\'t watch TV. Finally, I went to bed at ten. I was tired but happy.'},
{type:'rubric',title:'Self-check',items:['I wrote 8 sentences.','I used past verbs (and irregular verbs correctly).','I used 3 or more sequence words.','I used 3 or more time expressions.','I wrote one negative sentence.','I read my text aloud once.']}
]};
