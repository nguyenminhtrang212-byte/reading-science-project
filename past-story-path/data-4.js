/* Level 4 · Tell stories: lessons 12-15 */

LESSONS['12']={id:'12',level:4,time:25,file:'12-story-structure.html',next:'13',
title:'Story Structure: Beginning, Middle, End',
goal:'Know the 3 parts of a story and use story phrases (One day, Suddenly, In the end).',
sections:[
{type:'learn',title:'Three parts of a story',html:
'<table><tr><th>Part</th><th>What happens</th><th>Useful phrases</th></tr>'+
'<tr><td><b>Beginning</b></td><td>Who? Where? When?</td><td><span class="sp">One day,</span> <span class="sp">Last summer,</span> <span class="sp">At first,</span></td></tr>'+
'<tr><td><b>Middle</b></td><td>A problem or a surprise</td><td><span class="sp">Suddenly,</span> <span class="sp">Then</span> <span class="sp">After a while,</span></td></tr>'+
'<tr><td><b>End</b></td><td>The result and the feeling</td><td><span class="sp">In the end,</span> <span class="sp">Finally,</span> <span class="sp">Later,</span></td></tr></table>'+
'<p><span class="sp">One day, I went to the park with my friends. Suddenly, it started to rain. We ran under a big tree. In the end, we were wet but happy.</span></p>'+
'<div class="vi">Một câu chuyện có 3 phần: mở đầu (ai, ở đâu, khi nào), diễn biến (vấn đề hoặc bất ngờ), kết thúc (kết quả và cảm xúc). One day = một ngày nọ; Suddenly = bỗng nhiên; After a while = một lúc sau; In the end = cuối cùng.</div>'},
{type:'seq',title:'Put each story in order',tag:'scored',items:[
{title:'Story 1: The park. Write the letters in order.',lines:['Suddenly, it started to rain.','One day, I went to the park with my friends.','In the end, we were wet but happy.','We ran under a big tree.','At first, the weather was sunny and warm.'],a:'beadc'},
{title:'Story 2: The lost bag. Write the letters in order.',lines:['Then she called the teacher.','Last Monday, Lan lost her bag.','After a while, a boy found it in the library.','She looked everywhere, but she couldn\'t find it.','Finally, Lan got her bag back and said thank you.'],a:'bdace'}]},
{type:'mc',title:'Story phrases',tag:'scored',items:[
{q:'Which phrase begins a story?',o:['In the end,','One day,','Finally,'],a:1},
{q:'Which phrase shows a sudden event?',o:['Usually,','Always,','Suddenly,'],a:2},
{q:'Which phrase ends a story?',o:['One day,','At first,','In the end,'],a:2},
{q:'Which phrase means "after some time"?',o:['After a while,','At first,','Suddenly,'],a:0},
{q:'The MIDDLE of a story is…',o:['the problem or surprise.','the title.','the last sentence.'],a:0}]},
{type:'gap',title:'Complete the story',tag:'scored',items:[
"{One day}, I found a small cat in the garden. (One day / Finally)",
"{Suddenly}, the cat jumped on my bag. (Suddenly / Always)",
"{Then} I gave it some milk. (Then / Never)",
"{After a while|Later}, it fell asleep. (After a while / At first)",
"{In the end|Finally}, I kept the cat. (In the end / One day)"]},
{type:'write',title:'Your mini story',tag:'write',prompt:'Write a 5-sentence story (beginning, middle, end). Use at least 3 story phrases.',
vi:'Viết một câu chuyện ngắn 5 câu (mở đầu, diễn biến, kết thúc), dùng ít nhất 3 cụm kể chuyện.',
frames:['One day, …','Suddenly, …','Then …','After a while, …','In the end, …'],minSent:5,
checks:[{label:'Story phrases',re:STORYX,min:3},{label:'Past verbs',re:PV,min:4}],
sample:'Last Sunday, I went to the market with my mom. Suddenly, I lost her in the crowd. I felt scared, so I stood near a fruit shop. After a while, my mom found me. In the end, we bought mangoes and went home.'}
]};

LESSONS['13']={id:'13',level:4,time:30,file:'13-tell-an-event.html',next:'14',
title:'Tell a Past Event: A Special Day',
goal:'Plan and tell a past event with who, where, when, what happened and how you felt.',
sections:[
{type:'learn',title:'Model story: The Day I Got Lost',html:
'<p class="sp">Last summer, I went to Da Nang with my family. On the second day, I walked on the beach alone. At first, I felt happy because the sea was beautiful. Then I looked around, but I couldn\'t see my parents. I was scared and I started to cry. After a while, a kind woman helped me. She took me to the police office. Ten minutes later, my dad ran in and hugged me. In the end, I was safe and very happy. I learned one thing: stay with your family!</p>'+
'<div class="tipbox"><b>Plan with 5 questions:</b> Who? · Where? · When? · What happened? · How did you feel?</div>'+
'<div class="vi">Hè năm ngoái, mình đi Đà Nẵng cùng gia đình. Ngày thứ hai, mình đi dạo một mình trên bãi biển. Lúc đầu mình thấy vui vì biển rất đẹp. Rồi mình nhìn quanh nhưng không thấy bố mẹ. Mình sợ và bật khóc. Một lúc sau, một cô tốt bụng giúp mình, đưa mình đến đồn công an. Mười phút sau, bố chạy vào ôm mình. Cuối cùng mình an toàn và rất vui. Mình học được một điều: ở bên gia đình!</div>'},
{type:'mc',title:'Understand the story',tag:'scored',items:[
{q:'Where did the story happen?',o:['Hue','Da Nang','Hanoi'],a:1},
{q:'How did the girl feel at first?',o:['angry','tired','happy'],a:2},
{q:'Who helped her?',o:['her dad','a kind woman','a police officer'],a:1},
{q:'What did she learn?',o:['Never go to the beach','Always take a phone','Stay with your family'],a:2}]},
{type:'plan',title:'Plan your own story',tag:'plan',fields:[['Who?','me, my friend…'],['Where?','a beach, a market, school…'],['When?','last summer, last weekend…'],['What happened? (3 events)','first… then… after that…'],['How did you feel?','scared, happy, proud…'],['What did you learn / How did it end?','In the end…']]},
{type:'write',title:'Write and tell your story',tag:'write',rows:10,prompt:'Write your story in 10 sentences. Then read it aloud to a friend or your family.',
vi:'Viết câu chuyện của em trong 10 câu, rồi đọc to cho bạn hoặc người thân nghe.',
frames:['Last summer, I …','At first, I felt …','Then …','Suddenly, …','After a while, …','In the end, …','I learned …'],minSent:10,
checks:[{label:'Story phrases',re:STORYX,min:3},{label:'Past verbs',re:PV,min:7},{label:'Time expressions',re:TIMEX,min:2},{label:'A feeling (felt / was + adjective)',re:'\\b(felt|was|were)\\s+(happy|sad|scared|nervous|tired|proud|excited|angry|worried|surprised|afraid|safe)\\b',min:1}],
sample:'Last weekend, I went to my grandma\'s house with my cousin. At first, we helped her in the garden. Then we cooked rice and fish. Suddenly, the lights went out. I felt scared, but my grandma lit a candle. In the evening, we sat together and ate dinner. She told us stories about her childhood. We laughed a lot. In the end, I was happy. I learned that family time is special.'}
]};

LESSONS['14']={id:'14',level:4,time:30,file:'14-while-when.html',next:'15',
title:'While / When: What Was Happening?',
goal:'Use was/were + -ing for the background and past simple for the main event.',
sections:[
{type:'learn',title:'Background + event',html:
'<p><span class="sp">I was walking home when it started to rain.</span></p>'+
'<p><span class="sp">While I was cooking, my brother called.</span></p>'+
'<div class="tipbox"><b>was / were + verb-ing</b> = the longer background action.<br><b>past simple</b> = the short event that happened in the middle.</div>'+
'<table><tr><td>I / he / she / it</td><td>was walking</td></tr><tr><td>you / we / they</td><td>were walking</td></tr></table>'+
'<div class="vi">Hành động đang diễn ra (nền) dùng was/were + V-ing; sự kiện ngắn xen vào dùng quá khứ đơn. Ví dụ: Mình đang đi bộ về nhà thì trời bắt đầu mưa.</div>'},
{type:'mc',title:'Choose the correct form',tag:'scored',items:[
{q:'I ___ when it started to rain.',o:['was walking','walking','walk'],a:0},
{q:'While I ___, my brother called.',o:['cooked','was cooking','cook'],a:1},
{q:'She ___ TV when the lights went out.',o:['watched','was watching','watching'],a:1},
{q:'We ___ football when it began to rain.',o:['were playing','was playing','played'],a:0},
{q:'I ___ my homework when my friend came.',o:['did','doing','was doing'],a:2},
{q:'They ___ when the teacher came in.',o:['talked','were talking','was talking'],a:1},
{q:'He ___ his bike when he fell.',o:['was riding','rode','riding'],a:0}]},
{type:'gap',title:'Type was/were + verb-ing',tag:'scored',items:[
"I {was walking} (walk) home when it started to rain.",
"While we {were playing} (play), Mai arrived.",
"She {was reading} (read) when the phone rang.",
"They {were having} (have) lunch when the bell rang.",
"My mom {was cooking} (cook) when I got home.",
"We {were waiting} (wait) for the bus when we saw a dog."]},
{type:'fix',title:'Fix the mistake',tag:'scored',items:[
{q:'I walking home when it rained.',a:['I was walking home when it rained.']},
{q:'She was watch TV when the lights went out.',a:['She was watching TV when the lights went out.']},
{q:'We was playing when it started to rain.',a:['We were playing when it started to rain.']},
{q:'While I was study, my friend called.',a:['While I was studying, my friend called.']}]},
{type:'write',title:'Your turn',tag:'write',prompt:'Write 5 sentences about what you were doing when something happened. Use while / when.',
vi:'Viết 5 câu về việc em đang làm thì có chuyện xảy ra, dùng while / when.',
frames:['I was … when …','While I was …, …','We were … when …','She was … when …'],minSent:5,
checks:[{label:'while / when',re:'\\b(while|when)\\b',min:3},{label:'was / were + verb-ing',re:'\\b(was|were)\\s+\\w+ing\\b',min:3}],
sample:'I was walking to school when I saw a dog. While we were eating lunch, it started to rain. My mom was cooking when the phone rang. We were playing football when Nam fell. While I was studying, my brother turned on the music.'}
]};

LESSONS['15']={id:'15',level:4,time:40,file:'15-final-story.html',next:null,
title:'Final Project: Write & Tell Your Story',
goal:'Write a 12-sentence story about a past event and tell it aloud.',
sections:[
{type:'learn',title:'Choose your topic and plan',html:
'<p>Choose <b>one</b> topic:</p>'+
'<ul><li><span class="sp">The best day of my life</span></li><li><span class="sp">A day I will never forget</span></li><li><span class="sp">A funny or embarrassing day</span></li></ul>'+
'<div class="tipbox"><b>Your story needs:</b> a beginning (who, where, when) · a middle (problem or surprise, with <i>while/when</i> if you can) · an end (result + feeling) · story phrases · linking words (but, so, because) · one negative sentence.</div>'+
'<div class="vi">Chọn một chủ đề: ngày tuyệt vời nhất; một ngày không thể quên; một ngày vui hoặc ngượng. Truyện cần: mở đầu, diễn biến (vấn đề/bất ngờ), kết thúc (kết quả + cảm xúc), cụm kể chuyện, từ nối, một câu phủ định.</div>'},
{type:'plan',title:'Plan',tag:'plan',fields:[['Topic','The best day of my life…'],['Beginning: who, where, when','Last summer, I … with …'],['Middle: what happened (3 events)','At first … Then … Suddenly …'],['The problem or surprise','…'],['End: result and feeling','In the end, I felt …']]},
{type:'write',title:'Write your story',tag:'write',rows:12,prompt:'Write your story in 12 sentences. Give it a title.',
vi:'Viết câu chuyện của em trong 12 câu và đặt tiêu đề.',
frames:['Last …, I …','At first, …','Then …','While I was …, …','Suddenly, …',"I didn't …",'After a while, …','In the end, …','I felt …','I learned …'],minSent:12,
checks:[{label:'Story phrases (one day, suddenly, in the end…)',re:STORYX,min:4},{label:'Past verbs',re:PV,min:8},{label:'Time expressions',re:TIMEX,min:2},{label:'Linking words (but, so, because, when…)',re:LINKX,min:3},{label:'while / when',re:'\\b(while|when)\\b',min:1},{label:'A negative sentence',re:"\\b(didn't|did not|wasn't|weren't|couldn't)\\b",min:1},{label:'A feeling (felt / was + adjective)',re:'\\b(felt|was|were)\\s+(happy|sad|scared|nervous|tired|proud|excited|angry|worried|surprised|afraid|safe|embarrassed)\\b',min:1}],
sample:'The Day I Missed the Bus. Last Monday, I woke up late because I forgot to set my alarm. I felt nervous, so I ran to the bus stop. When I arrived at 7 a.m., the bus was already gone. At first, I didn\'t know what to do. Then I called my friend Mai, but she didn\'t answer. Suddenly, a neighbor stopped his motorbike. He was going to the same school, so he gave me a ride. While we were driving, I thanked him many times. After a while, we arrived at school. The bell was ringing, but I was not late! In the end, I felt very lucky. I learned to check my alarm every night.'},
{type:'rubric',title:'Self-check before you tell it',items:['My story has a beginning, a middle and an end.','I used 4 or more story phrases.','I used irregular verbs correctly (went, saw, took…).','I used while / when with was/were + -ing.','I used linking words (but, so, because).','I wrote at least one negative sentence.','I described how I felt.','I listened to my story with the 🔊 button.','I told my story aloud in about 1 minute.']}
]};
