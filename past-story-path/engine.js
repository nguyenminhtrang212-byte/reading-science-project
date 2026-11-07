/* Past Story Path – shared lesson engine (no dependencies) */
(function(){
'use strict';
var LS=window.LESSONS=window.LESSONS||{};
/* shared regexes for writing checks */
window.PV="\\b(\\w{2,}ed|went|had|ate|saw|made|took|got|came|bought|wrote|gave|met|ran|sat|said|did|was|were|woke|slept|drank|spoke|left|began|found|forgot|won|thought|told|taught|caught|brought|felt|lost|fell|stood|heard|knew|cried|sang|swam)\\b";
window.TIMEX="\\b(yesterday|last (night|week|weekend|month|year|summer|monday|tuesday|wednesday|thursday|friday|saturday|sunday)|ago|this morning|in the (morning|afternoon|evening)|at (\\d|six|seven|eight|nine|ten|eleven|twelve|noon|midnight)|on (monday|tuesday|wednesday|thursday|friday|saturday|sunday)|one day)\\b";
window.SEQX="\\b(first|then|after that|next|later|finally|at first|after a while|in the end)\\b";
window.LINKX="\\b(and|but|so|because|before|after|when|while|then)\\b";
window.STORYX="\\b(one day|last (week|weekend|summer|year|monday|night)|suddenly|then|after a while|at first|in the end|finally|later)\\b";

function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
function norm(s){return String(s).toLowerCase().replace(/[’‘]/g,"'").replace(/[.,!?;:"]/g,'').replace(/\s+/g,' ').trim();}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function speak(t){try{if(!('speechSynthesis' in window))return;speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang='en-US';u.rate=.85;speechSynthesis.speak(u);}catch(e){}}
var store={get:function(k){try{return localStorage.getItem(k);}catch(e){return null;}},set:function(k,v){try{localStorage.setItem(k,v);}catch(e){}}};
window.PW={speak:speak,store:store,norm:norm};
var uid=0;

/* ---------- section builders: return {el, max?, check?, text?} ---------- */
function learnSec(sec){
  var d=el('div','learn',sec.html);
  [].forEach.call(d.querySelectorAll('.sp'),function(s){s.title='Click to listen';s.onclick=function(){speak(s.textContent.replace(/^🔊\s*/,''));};});
  [].forEach.call(d.querySelectorAll('.vi'),function(v){var b=el('button','mini','Xem nghĩa');b.onclick=function(){v.classList.toggle('on');};v.parentNode.insertBefore(b,v);});
  return {el:d};
}
function vocabSec(sec){
  var g=el('div','grid');
  sec.items.forEach(function(it){
    var c=el('div','vc','<div class="en">'+it[0]+'</div>'+(it[2]?'<div class="ex">'+it[2]+'</div>':'')+'<div class="vi">'+it[1]+'</div>');
    var r=el('div','row');var a=el('button','mini','🔊'),b=el('button','mini','Xem nghĩa');
    a.onclick=function(){speak(it[2]||it[0]);};b.onclick=function(){c.querySelector('.vi').classList.toggle('on');};
    r.appendChild(a);r.appendChild(b);c.appendChild(r);g.appendChild(c);
  });
  return {el:g};
}
function mcSec(sec){
  var box=el('div'),rows=[],id=++uid;
  sec.items.forEach(function(it,i){
    var d=el('div','item');d.appendChild(el('div','q',(i+1)+'. '+it.q));
    var o=el('div','opts');
    it.o.forEach(function(t,j){o.appendChild(el('label',null,'<input type="radio" name="mc'+id+'_'+i+'" value="'+j+'"> '+t));});
    var fb=el('div','fb');d.appendChild(o);d.appendChild(fb);box.appendChild(d);rows.push({d:d,fb:fb,it:it});
  });
  return {el:box,max:sec.items.length,check:function(){
    var s=0;
    rows.forEach(function(r){
      var labels=r.d.querySelectorAll('label'),sel=r.d.querySelector('input:checked');
      [].forEach.call(labels,function(l){l.className='';});
      labels[r.it.a].className='ok';
      if(sel&&+sel.value===r.it.a){s++;r.fb.className='fb ok';r.fb.textContent='✓ '+(r.it.x||'Correct');}
      else{if(sel)labels[+sel.value].className='bad';r.fb.className='fb bad';r.fb.textContent='✗ '+(r.it.x||'Look at the green answer.');}
    });
    return s;}};
}
function gapSec(sec){
  var box=el('div'),gaps=[];
  sec.items.forEach(function(t,i){
    var d=el('div','item');d.appendChild(document.createTextNode((i+1)+'. '));
    t.split(/(\{[^}]+\})/).forEach(function(p){
      if(p.charAt(0)==='{'){
        var ans=p.slice(1,-1).split('|');
        var inp=el('input','gap');inp.type='text';inp.setAttribute('autocomplete','off');inp.setAttribute('autocapitalize','off');inp.setAttribute('spellcheck','false');
        inp.style.width=Math.min(24,Math.max(6,ans[0].length+3))+'ch';
        var sp=el('span','ans');gaps.push({inp:inp,ans:ans,sp:sp});d.appendChild(inp);d.appendChild(sp);
      }else d.appendChild(document.createTextNode(p));
    });
    box.appendChild(d);
  });
  return {el:box,max:gaps.length,check:function(){
    var s=0;
    gaps.forEach(function(g){
      var ok=g.ans.map(norm).indexOf(norm(g.inp.value))>-1;
      g.inp.className='gap '+(ok?'ok':'bad');g.sp.textContent=ok?'':' → '+g.ans[0];if(ok)s++;
    });
    return s;}};
}
function typeSec(sec,mode){
  var box=el('div'),rows=[];
  sec.items.forEach(function(it,i){
    var d=el('div','item');
    var label=mode==='order'?'Put the words in order:':(sec.label||'Correct the sentence:');
    var shown=mode==='order'?'<div class="words">'+it.w.map(function(w){return '<span>'+w+'</span>';}).join('')+'</div>':'<div class="q" style="font-weight:500">'+it.q+'</div>';
    d.appendChild(el('div','q',(i+1)+'. '+label));d.insertAdjacentHTML('beforeend',shown);
    var inp=el('input','full');inp.type='text';inp.setAttribute('autocomplete','off');inp.setAttribute('spellcheck','false');
    var fb=el('div','fb');d.appendChild(inp);d.appendChild(fb);box.appendChild(d);rows.push({inp:inp,fb:fb,it:it});
  });
  return {el:box,max:sec.items.length,check:function(){
    var s=0;
    rows.forEach(function(r){
      var ok=r.it.a.map(norm).indexOf(norm(r.inp.value))>-1;
      r.inp.className='full '+(ok?'ok':'bad');
      if(ok){s++;r.fb.className='fb ok';r.fb.textContent='✓ Correct';}else{r.fb.className='fb bad';r.fb.textContent='✗ Answer: '+r.it.a[0];}
    });
    return s;}};
}
function matchSec(sec){
  var box=el('div'),rights=shuffle(sec.pairs.map(function(p){return p[1];})),rows=[];
  sec.pairs.forEach(function(p,i){
    var d=el('div','item');d.appendChild(el('span','q',(i+1)+'. '+p[0]+' → '));
    var s=el('select');s.appendChild(el('option',null,'–'));rights.forEach(function(r){var o=el('option',null,r);o.value=r;s.appendChild(o);});
    s.firstChild.value='';d.appendChild(s);var sp=el('span','ans');d.appendChild(sp);box.appendChild(d);rows.push({s:s,sp:sp,a:p[1]});
  });
  return {el:box,max:sec.pairs.length,check:function(){
    var s=0;rows.forEach(function(r){var ok=r.s.value===r.a;r.s.className=ok?'ok':'bad';r.sp.textContent=ok?'':' → '+r.a;if(ok)s++;});return s;}};
}
function seqSec(sec){
  var box=el('div'),rows=[];
  sec.items.forEach(function(it,i){
    var d=el('div','item');d.appendChild(el('div','q',(i+1)+'. '+(it.title||'Put the sentences in order.')));
    d.appendChild(el('div',null,it.lines.map(function(l,k){return '<div><b>'+'ABCDEFGH'.charAt(k)+'.</b> '+l+'</div>';}).join('')));
    var inp=el('input','gap');inp.type='text';inp.placeholder='e.g. bdaec';inp.style.width='12ch';inp.setAttribute('autocomplete','off');
    var fb=el('div','fb');d.appendChild(el('div','row','Your order: '));d.lastChild.appendChild(inp);d.appendChild(fb);box.appendChild(d);rows.push({inp:inp,fb:fb,a:it.a});
  });
  return {el:box,max:sec.items.length,check:function(){
    var s=0;rows.forEach(function(r){var v=r.inp.value.toLowerCase().replace(/[^a-z]/g,'');var ok=v===r.a;r.inp.className='gap '+(ok?'ok':'bad');
      if(ok){s++;r.fb.className='fb ok';r.fb.textContent='✓ Correct';}else{r.fb.className='fb bad';r.fb.textContent='✗ Answer: '+r.a.toUpperCase().split('').join(' – ');}});return s;}};
}
function writeSec(sec){
  var box=el('div'),ta=el('textarea');ta.rows=sec.rows||6;ta.placeholder=sec.placeholder||'Write here…';
  box.appendChild(el('div','q',sec.prompt));
  if(sec.vi){var v=el('div','vi',sec.vi);box.appendChild(v);var b=el('button','mini','Xem nghĩa');b.onclick=function(){v.classList.toggle('on');};box.insertBefore(b,v);}
  if(sec.frames){var ch=el('div','chips');sec.frames.forEach(function(f){var c=el('button','chipb',f);c.onclick=function(){ta.value+=(ta.value&&!/\s$/.test(ta.value)?' ':'')+f;ta.focus();};ch.appendChild(c);});box.appendChild(ch);}
  box.appendChild(ta);
  var out=el('ul','chk'),row=el('div','row'),an=el('button','mini','✔ Check my writing'),rd=el('button','mini','🔊 Listen to my text'),sm=el('button','mini','Xem bài mẫu');
  var sample=el('div','tipbox',sec.sample||'');sample.style.display='none';
  an.onclick=function(){
    var t=ta.value,n=t.split(/[.!?]+/).filter(function(x){return x.trim();}).length;out.innerHTML='';
    var all=true;
    function li(ok,txt){if(!ok)all=false;out.appendChild(el('li',ok?'ok':'bad',(ok?'✓ ':'✗ ')+txt));}
    li(n>=(sec.minSent||1),'Sentences: '+n+' / '+(sec.minSent||1));
    (sec.checks||[]).forEach(function(c){var m=(t.match(new RegExp(c.re,'gi'))||[]).length;li(m>=c.min,c.label+' ('+m+' / '+c.min+')');});
    out.appendChild(el('li',all?'ok':'',all?'🎉 Great job! Your writing meets the goals.':'Keep going – add more and check again.'));
    api.analyzed=true;
  };
  rd.onclick=function(){speak(ta.value||'Please write first.');};
  sm.onclick=function(){sample.style.display=sample.style.display==='none'?'block':'none';};
  row.appendChild(an);row.appendChild(rd);if(sec.sample)row.appendChild(sm);
  box.appendChild(row);box.appendChild(out);box.appendChild(sample);
  var api={el:box,analyzed:false,text:function(){return sec.prompt.replace(/\s+/g,' ')+'\n'+(ta.value||'—');}};
  return api;
}
function planSec(sec){
  var box=el('div'),ins=[];
  sec.fields.forEach(function(f){box.appendChild(el('label','lab',f[0]));var i=el('input','full');i.type='text';i.placeholder=f[1]||'';i.setAttribute('autocomplete','off');box.appendChild(i);ins.push([f[0],i]);});
  return {el:box,text:function(){return ins.map(function(x){return x[0]+' '+(x[1].value||'—');}).join('\n');}};
}
function rubricSec(sec){
  var box=el('div','rub'),cbs=[];
  sec.items.forEach(function(t){var l=el('label',null,'<input type="checkbox"> '+t);box.appendChild(l);cbs.push([t,l.querySelector('input')]);});
  var o=el('div','msg');box.appendChild(o);
  cbs.forEach(function(c){c[1].onchange=function(){var n=cbs.filter(function(x){return x[1].checked;}).length;o.className='msg '+(n===cbs.length?'ok':'');o.textContent=n+' / '+cbs.length+(n===cbs.length?' ✓ Ready to submit!':'');};});
  return {el:box,text:function(){return 'Self-check: '+cbs.filter(function(x){return x[1].checked;}).length+'/'+cbs.length;}};
}

/* ---------- page ---------- */
window.renderLesson=function(id){
  var L=LS[id];if(!L)return;
  document.title='Lesson '+id+' · '+L.title;
  var main=document.querySelector('main');main.innerHTML='';
  var top=el('div','top');
  top.innerHTML='<a href="index.html">← All lessons</a>';
  var vb=el('button','mini','👁 Xem / ẩn nghĩa tiếng Việt (tất cả)');vb.onclick=function(){document.body.classList.toggle('show-all');};top.appendChild(vb);
  main.appendChild(top);
  var levels={1:'Level 1 · Foundation',2:'Level 2 · Build sentences',3:'Level 3 · Connect ideas',4:'Level 4 · Tell stories'};
  var hero=el('div','hero','<span class="chip">'+levels[L.level]+'</span><span class="chip">Lesson '+id+' / 15</span><span class="chip">≈ '+L.time+' min</span><h1>'+L.title+'</h1><p><b>Goal:</b> '+L.goal+'</p>');
  main.appendChild(hero);
  var nm=el('div','card','<label>Your name / Tên của em: <input type="text" id="pwname" style="width:260px"></label>');
  main.appendChild(nm);
  var inp=nm.querySelector('input');inp.value=store.get('pw_name')||'';inp.oninput=function(){store.set('pw_name',inp.value);};

  var built=[];
  L.sections.forEach(function(sec,i){
    var card=el('div','card');
    card.appendChild(el('h2',null,(i+1)+'. '+sec.title+(sec.tag?' <span class="tag">'+sec.tag+'</span>':'')));
    var b;
    switch(sec.type){
      case 'learn':b=learnSec(sec);break;
      case 'vocab':b=vocabSec(sec);break;
      case 'mc':b=mcSec(sec);break;
      case 'gap':b=gapSec(sec);break;
      case 'order':b=typeSec(sec,'order');break;
      case 'fix':b=typeSec(sec,'fix');break;
      case 'match':b=matchSec(sec);break;
      case 'seq':b=seqSec(sec);break;
      case 'write':b=writeSec(sec);break;
      case 'plan':b=planSec(sec);break;
      case 'rubric':b=rubricSec(sec);break;
      default:b={el:el('div')};
    }
    card.appendChild(b.el);
    b.title=sec.title;b.type=sec.type;b.checked=false;b.score=0;
    if(b.check){
      var row=el('div','row'),btn=el('button','btn','Check'),sc=el('span','score');
      btn.onclick=function(){b.score=b.check();b.checked=true;sc.textContent='Score: '+b.score+' / '+b.max;};
      row.appendChild(btn);row.appendChild(sc);card.appendChild(row);
    }
    main.appendChild(card);built.push(b);
  });

  var fin=el('div','card finish');
  fin.innerHTML='<div class="row" style="margin-top:0"></div><div class="msg"></div>';
  var row=fin.querySelector('.row'),msg=fin.querySelector('.msg');
  var bf=el('button','btn','✅ Finish lesson'),bc=el('button','btn alt','📋 Copy my results'),bp=el('button','btn alt','🖨 Print');
  row.appendChild(bf);row.appendChild(bc);row.appendChild(bp);
  var nextA=null;
  if(L.next){nextA=el('a','btn alt','Next lesson →');nextA.href=LS[L.next].file;nextA.style.display='none';row.appendChild(nextA);}
  function totals(){var s=0,m=0;built.forEach(function(b){if(b.check){s+=b.score;m+=b.max;}});return [s,m];}
  bf.onclick=function(){
    var miss=built.filter(function(b){return b.check&&!b.checked;}).map(function(b){return b.title;});
    if(miss.length){msg.className='msg warn';msg.textContent='Please press “Check” in: '+miss.join(' · ');return;}
    var t=totals(),pct=t[1]?Math.round(100*t[0]/t[1]):100;
    var wr=built.filter(function(b){return b.type==='write'&&!b.analyzed;}).length;
    if(pct>=60){
      store.set('pw_done_'+id,JSON.stringify({s:t[0],m:t[1],d:new Date().toISOString().slice(0,10)}));
      msg.className='msg ok';msg.textContent='🎉 Lesson complete! Score '+t[0]+' / '+t[1]+' ('+pct+'%).'+(wr?' Tip: press “Check my writing” too.':'');
      if(nextA)nextA.style.display='inline-block';
    }else{
      msg.className='msg warn';msg.textContent='Score '+t[0]+' / '+t[1]+' ('+pct+'%). Review the lesson and try again – you need 60% to finish.';
    }
  };
  bc.onclick=function(){
    var t=totals(),txt='Name: '+(inp.value||'—')+'\nLesson '+id+': '+L.title+'\nScore: '+t[0]+' / '+t[1]+'\n';
    built.forEach(function(b){if(b.text)txt+='\n— '+b.title+' —\n'+b.text();});
    function ok(){msg.className='msg ok';msg.textContent='✓ Copied! Paste it to your teacher.';}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(ok,function(){fallback(txt);ok();});}else{fallback(txt);ok();}
  };
  function fallback(t){var x=document.createElement('textarea');x.value=t;document.body.appendChild(x);x.select();try{document.execCommand('copy');}catch(e){}x.remove();}
  bp.onclick=function(){window.print();};
  if(store.get('pw_done_'+id)&&nextA)nextA.style.display='inline-block';
  main.appendChild(fin);
};
})();
