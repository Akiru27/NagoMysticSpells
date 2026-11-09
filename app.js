const $=s=>document.querySelector(s);const screens=['gate','intro','appearance','quiz','reveal','result'];
const profiles={
 aqualis:{key:'aqualis',name:'Aqualis Lite - ｱｸｱﾘｽﾗｲﾄ',short:'Aqualis Lite',theme:'優しさ・調和・安らぎ',attribute:'AQUA / 水',image:'assets/aqualis-lite.jpeg',description:'月光を浴びた水に魔力が宿ることを発見した若き魔法使いが、その力を試験管に閉じ込めることに成功した。彼の最初の研究成果であり、優しく魔力を補う小さな奇跡。',personality:'穏やかで思いやりがあり、相手の気持ちを敏感に感じ取るタイプ。周囲との調和を大切にし、自然と人に安心感を与えます。',inner:'心の奥では、誰も傷つかず、ありのままでいられる穏やかな場所を求めています。',strength:'相手の立場に立って考えられること。何気ない気遣いや優しさで、人の心を癒やす力があります。',weakness:'周囲を優先するあまり、自分の気持ちを後回しにしてしまうことがあります。',message:'あなたの優しさは、静かな水面のように誰かの心を穏やかにしているのでしょう。どうか、その温かな心を自分自身にも向けてあげてくださいね。',color:'#c6e8ef'},
 rubellis:{key:'rubellis',name:'Rubellis Plus - ﾙﾍﾞﾘｽﾌﾟﾗｽ',short:'Rubellis Plus',theme:'情熱・信念・行動力',attribute:'RUBY / 炎',image:'assets/rubellis-plus.jpeg',description:'魔力を結晶に蓄える研究を続けた魔法使いが、炎の精霊が眠る鉱脈から赤く輝く魔法石を生み出した。幾度もの錬成を経て完成した、魔力を凝縮する新たな技術の結晶。',personality:'情熱的で、自分の好きなものや信じたことに真っすぐなタイプ。迷うよりも行動することを大切にし、強い意志で自分の道を切り拓きます。',inner:'心の奥には、自分の可能性を試したいという強い願いがあります。平凡に収まるよりも、心が熱くなるものを追い求めます。',strength:'決断力と行動力。困難に直面しても情熱を失わず、周囲を巻き込みながら前へ進む力があります。',weakness:'夢中になると周囲が見えなくなり、勢いのまま突き進んでしまうことがあります。',message:'あなたの胸に宿る情熱は、きっと誰にも消せない輝きになるはずです。心が動くその瞬間を大切に、自分の信じる道を進んでください。',color:'#f1d5df'},
 amethyne:{key:'amethyne',name:'Amethyne Prime - ｱﾒｼﾝﾌﾟﾗｲﾑ',short:'Amethyne Prime',theme:'探究心・知性・洞察',attribute:'AMETHYST / 神秘',image:'assets/amethyne-prime.jpeg',description:'液体と結晶、それぞれ異なる性質を持つ魔力を融合させるという、魔法使いの長年の夢から生まれた最高傑作。数え切れない失敗の果てに完成した、彼の叡智と技術の結晶。',personality:'知的好奇心が旺盛で、物事を深く考えるタイプ。未知のものに惹かれ、表面的な答えだけでなく、その奥にある本質を探ろうとします。',inner:'心の奥には、まだ知らない世界を知りたいという強い探究心があります。自分なりの答えを見つけることに喜びを感じます。',strength:'洞察力と分析力。複雑な物事を整理し、人とは違う視点から新しい可能性を見つけ出す力があります。',weakness:'深く考えすぎるあまり、選択に迷ったり、行動に移すまで時間がかかったりすることがあります。',message:'あなたの知りたいという気持ちは、まだ見ぬ世界への扉を開く鍵です。答えを急がず、あなたらしい探究の旅を楽しんでくださいね。',color:'#ded5f1'}
};
const questions=[
['予定のない休日。あなたが過ごしたいのは？','静かな場所で、のんびり自分の時間を楽しむ','思い立ったことを試して、新しい刺激を楽しむ','aqualis','rubellis'],
['誰かが困っているとき、あなたはどうする？','相手の気持ちを聞いて、そっと寄り添う','どうすれば解決できるか、一緒に考える','aqualis','amethyne'],
['新しいことに挑戦するとき、あなたに近いのは？','まずはじっくり調べて、納得してから始めたい','面白そうなら、まずはやってみたい','amethyne','rubellis'],
['大切なものを守るためなら、あなたはどうする？','相手の気持ちを考えながら、穏やかに守る','どんな困難があっても、強い意志で守り抜く','aqualis','rubellis'],
['あなたが一番大切にしたいものは？','心穏やかに過ごせる、安心できる日々','心が躍るような、刺激に満ちた日々','aqualis','rubellis'],
['意見が食い違ったとき、あなたはどうする？','お互いの気持ちを大切にして、歩み寄れる方法を探す','自分の考えを伝えて、納得できる答えを探す','aqualis','amethyne'],
['初めて見る不思議なものを見つけたら？','どんな仕組みなのか、じっくり観察したくなる','実際に触れて、何が起こるのか試したくなる','amethyne','rubellis'],
['大きな壁にぶつかったとき、あなたはどうする？','一度立ち止まり、別の方法がないか考える','諦めずに、突破できるまで挑み続ける','amethyne','rubellis'],
['あなたが誰かに何かを伝えるとき、大切にするのは？','相手にどう伝わるか、言葉を選ぶこと','自分の気持ちを、偽らずまっすぐ伝えること','aqualis','rubellis'],
['もし魔法をひとつだけ手に入れられるなら？','誰かの傷ついた心を癒やす魔法','世界に隠された謎を解き明かす魔法','aqualis','amethyne'],
['強い魔法を使うとき、あなたが大切にしたいのは？','周囲への影響を考え、慎重に力を使うこと','必要なときに迷わず、力を発揮すること','aqualis','rubellis'],
['大切な選択を迫られたとき、あなたはどうする？','自分の心が本当に望んでいることを選ぶ','さまざまな可能性を考え、最善だと思う道を選ぶ','rubellis','amethyne'],
['何かを成し遂げたとき、最も嬉しいのは？','自分の力で未知の答えを見つけたとき','信じたことを最後までやり遂げたとき','amethyne','rubellis'],
['もし未知の魔法をひとつ研究できるなら？','人の心や感情に作用する、不思議な魔法','世界の法則や隠された真理を解き明かす魔法','aqualis','amethyne'],
['あなたが本当に恐れているものに近いのは？','大切なものを失い、心の拠り所がなくなること','自分の可能性を知らないまま、人生が終わること','aqualis','amethyne']
];
let index=0,answers=[],appearance={},current=null,diagnosisDate='';
function show(id){screens.forEach(s=>$('#'+s).classList.toggle('hidden',s!==id));window.scrollTo({top:0,behavior:'instant'});}
function dateString(){const d=new Date();return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`}
$('#gate-form').addEventListener('submit',e=>{e.preventDefault();if($('#gate-code').value==='7134'){sessionStorage.setItem('ms-auth-until',String(Date.now()+86400000));$('#gate-error').textContent='';$('#loading').classList.remove('hidden');setTimeout(()=>{$('#loading').classList.add('hidden');show('intro')},1900)}else{$('#gate-error').textContent='答えが違うようです。もう一度お確かめください。';$('#gate-code').value='';$('#gate-code').focus()}});
if(Number(sessionStorage.getItem('ms-auth-until')||0)>Date.now())show('intro');
$('#start').onclick=()=>show('appearance');
$('#appearance-form').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.target);appearance=Object.fromEntries(data.entries());if(Object.keys(appearance).length!==4){$('#appearance-error').textContent='すべての項目を選択してください。';return}$('#appearance-error').textContent='';answers=[];index=0;renderQuestion();show('quiz')});
function renderQuestion(){const q=questions[index];$('#progress-label').textContent=`QUESTION ${String(index+1).padStart(2,'0')} / 15`;$('#progress-fill').style.width=`${(index+1)/15*100}%`;$('#question-text').textContent=q[0];$('#answer-list').innerHTML='';[1,2].forEach((n)=>{const b=document.createElement('button');b.className='answer-button';b.type='button';b.textContent=q[n];b.onclick=()=>{answers[index]=n-1;index++;if(index===15)reveal();else renderQuestion()};$('#answer-list').append(b)});$('#back').style.visibility=index===0?'hidden':'visible';}
$('#back').onclick=()=>{if(index>0){index--;renderQuestion()}};
function reveal(){show('reveal');setTimeout(showResult,5900)}
function calculate(){const scores={aqualis:0,rubellis:0,amethyne:0};answers.forEach((a,i)=>scores[questions[i][3+a]]++);const max=Math.max(...Object.values(scores));const tied=Object.keys(scores).filter(k=>scores[k]===max);if(tied.length===1)return profiles[tied[0]];for(let i=14;i>=0;i--){const k=questions[i][3+answers[i]];if(tied.includes(k))return profiles[k]}return profiles.aqualis}
function showResult(){current=calculate();diagnosisDate=dateString();$('#result-date').textContent=diagnosisDate;$('#result-name').textContent=current.short;$('#result-theme').textContent=current.theme;$('#result-product-image').src=current.image;$('#result-product-name').textContent=current.name;$('#result-product-description').textContent=current.description;['personality','inner','strength','weakness','message'].forEach(k=>$('#'+k).textContent=current[k]);$('#card-type').textContent=current.short;$('#card-attribute').textContent=current.attribute;$('#card-personality').textContent=current.personality;$('#card-strength').textContent=current.strength;$('#card-inner').textContent=current.inner;$('#card-product').textContent=current.name;$('#card-date').textContent=diagnosisDate;$('#result-name').style.color=current.color;show('result')}
$('#retry').onclick=()=>{answers=[];index=0;appearance={};$('#appearance-form').reset();show('appearance')};$('#home').onclick=()=>$('#confirm-modal').classList.remove('hidden');$('#stay').onclick=()=>$('#confirm-modal').classList.add('hidden');$('#go-home').onclick=()=>{$('#confirm-modal').classList.add('hidden');show('intro')};
function roundedRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.roundRect(x,y,w,h,r)}
$('#save-card').onclick=async()=>{const btn=$('#save-card');btn.disabled=true;try{const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=1600;const c=canvas.getContext('2d');const g=c.createLinearGradient(0,0,1200,1600);g.addColorStop(0,'#fff');g.addColorStop(.55,'#f8f4fc');g.addColorStop(1,'#fff7fb');c.fillStyle=g;c.fillRect(0,0,1200,1600);c.strokeStyle='#c8bbd7';c.lineWidth=3;c.strokeRect(38,38,1124,1524);c.strokeRect(55,55,1090,1490);c.textAlign='center';const logo=new Image();logo.src='assets/logo.jpeg';await new Promise((resolve,reject)=>{logo.onload=resolve;logo.onerror=reject});c.drawImage(logo,420,35,360,360);c.fillStyle='#a296b7';c.font='38px Georgia';c.fillText('MAGICAL PROFILE',600,425);c.fillStyle=current.color;c.font='54px serif';c.fillText(current.short,600,535);c.fillStyle='#9589a9';c.font='28px Georgia';c.fillText(current.attribute,600,590);c.fillStyle='#706780';c.font='30px sans-serif';wrapText(c,current.personality,600,680,920,52);c.fillStyle='#bba8ce';c.font='38px serif';c.fillText('✧',600,880);let y=950;const sections=[['STRENGTH',current.strength],['INNER SELF',current.inner],['RECOMMENDED MAGIC',current.name]];for(const [label,txt] of sections){c.fillStyle='#a296b7';c.font='28px Georgia';c.fillText(label,600,y);y+=52;c.fillStyle='#706780';c.font='27px sans-serif';y=wrapText(c,txt,600,y,920,48)+34;}c.fillStyle='#a296b7';c.font='27px Georgia';c.fillText(diagnosisDate,600,1500);const a=document.createElement('a');a.download=`MysticSpells_${current.short.replaceAll(' ','_')}_${diagnosisDate.replaceAll('.','')}.png`;a.href=canvas.toDataURL('image/png');a.click();$('#save-status').textContent='画像を保存しました。';}catch(e){$('#save-status').textContent='保存できませんでした。ブラウザの設定をご確認ください。'}finally{btn.disabled=false}};
function wrapText(ctx,text,x,y,maxWidth,lineHeight){const words=Array.from(text);let line='';for(const ch of words){const test=line+ch;if(ctx.measureText(test).width>maxWidth&&line){ctx.fillText(line,x,y);line=ch;y+=lineHeight}else line=test}if(line)ctx.fillText(line,x,y);return y+lineHeight}
function buildPrompt(){
 const typeArt={
  aqualis:{motif:'水、月光、星、透明感',palette:'白・淡いアクアブルー・シルバー',details:'水の流れや波紋を思わせる柔らかな意匠、透明な水晶や小さな雫の装飾'},
  rubellis:{motif:'炎、情熱、薔薇、宝石',palette:'白・深みを抑えたルビーレッド・シルバー',details:'薔薇や赤い宝石、細いリボン、炎のゆらめきを思わせる意匠'},
  amethyne:{motif:'アメジスト、魔法陣、星、神秘、知性',palette:'白・淡いアメジストパープル・シルバー',details:'アメジストの結晶、繊細な魔法陣、幾何学的で知的な装飾'}
 };
 const art=typeArt[current.key]||typeArt.aqualis;
 return `オリジナルのファンタジー世界「Mystic Spells」に登場する、魔法使いの肖像画を描いてください。

【キャラクター設定】
・${appearance.silhouette}
・${appearance.age}
・${appearance.skin}
・${appearance.hair}
・髪型、髪色、瞳の色はキャラクターの雰囲気に合わせて自由にデザインする

【魔法タイプ】
${current.short}（${current.theme}）
このタイプの象徴モチーフは「${art.motif}」。衣装は${art.palette}を基調とし、${art.details}を控えめに取り入れる。タイプ固有のモチーフと配色を明確に反映し、他のタイプの象徴モチーフを混ぜない。

【絵柄】
アニメとリアルの中間に位置する、繊細で美しいファンタジーイラスト。美しいアニメ調の瞳は大きくしすぎず、鼻筋・輪郭・骨格・顔の陰影には自然な立体感を持たせる。淡く優しいパステル調、柔らかな透明感のある光。

【構図】
縦長3:4。頭部から胸元までのバストアップ。顔は中央、正面またはわずかに斜め。手や腕は描かない。

【背景】
全タイプ共通で、白を基調に淡いピンクとラベンダーをわずかに含む柔らかなグラデーション。頭の後ろに薄く光る繊細な魔法陣を配置し、${art.motif}を連想させる小さな光や粒子を控えめに散らす。背景色は共通のまま、タイプの個性は衣装とモチーフで表現する。

【文字】
画像内に「Mystic Spells」という文字を必ず一箇所だけ配置する。それ以外の文字・数字・ロゴ・署名・透かしは一切入れない。

装飾を過剰にせず、顔と衣装の美しさを優先してください。髪は自然な束感を大切にし、レースや刺繍、宝石は必要最小限にしてください。`;
}
$('#copy-prompt').onclick=async()=>{try{await navigator.clipboard.writeText(buildPrompt());$('#copy-status').textContent='コピーしました！ChatGPTに貼り付けてね。'}catch(e){const t=document.createElement('textarea');t.value=buildPrompt();document.body.append(t);t.select();document.execCommand('copy');t.remove();$('#copy-status').textContent='コピーしました！ChatGPTに貼り付けてね。'}};
