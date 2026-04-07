document.addEventListener("DOMContentLoaded", () => {

const style = document.createElement("style");

style.innerHTML = `
/* CSS YOU (unchanged) */
.pf-overlay{position:fixed; inset:0;backdrop-filter:blur(12px);background:rgba(0,0,0,.25);display:flex; justify-content:center; align-items:center;z-index:999999;font-family:sans-serif;}
.pf-box{display:flex; flex-direction:column; align-items:center; gap:20px;}
.pf-mascotWrap{opacity:0; transform:translateY(-60px) scale(0.92);transition: all 0.7s cubic-bezier(0.22,1,0.36,1);}
.pf-mascotWrap.show{opacity:1; transform:translateY(0) scale(1);}
.pf-panel{width:320px; padding:20px; border-radius:16px;background:rgba(255,255,255,0.08); backdrop-filter:blur(20px);text-align:center; box-shadow:0 0 15px rgba(255,255,255,0.5);opacity:0; transform:translateY(20px); transition: all 0.7s cubic-bezier(0.22,1,0.36,1);}
.pf-panel.show{opacity:1; transform:translateY(0);}
.pf-mascot{width:200px; filter:drop-shadow(0 0 15px rgba(255,255,255,0.6)); animation:aura 2s infinite alternate;}
@keyframes aura{0%{filter:drop-shadow(0 0 15px rgba(255,255,255,0.4));}50%{filter:drop-shadow(0 0 25px rgba(255,255,255,0.7));}100%{filter:drop-shadow(0 0 15px rgba(255,255,255,0.4));}}
.pf-btn{width:100%; padding:12px; margin-top:10px; border:none; border-radius:10px;cursor:pointer; font-weight:bold; transition:.2s; box-shadow:0 0 10px rgba(255,255,255,0.4);}
.pf-btn:hover{transform:translateY(-2px);}
.pf-btn:active{transform:scale(.96);}
.pf-red{position: relative;overflow: hidden;background: linear-gradient(90deg,#ffd84d,#ffb300,#ff6a00,#ff2a00,#ff0000);box-shadow:inset 0 2px 6px rgba(255,255,255,0.4),inset 0 -4px 8px rgba(0,0,0,0.25),0 0 12px rgba(255,120,0,0.6);color:#fff;}
.pf-green{position: relative;overflow: hidden;background: linear-gradient(90deg,#ffff66,#aaff00,#00ff66,#00cc55);box-shadow:inset 0 2px 6px rgba(255,255,255,0.4),inset 0 -4px 8px rgba(0,0,0,0.25),0 0 12px rgba(0,255,100,0.6);color:#000;}
.pf-red::after,.pf-green::after{content:"";position:absolute;top:0;left:0;width:100%;height:55%;background:linear-gradient(to bottom,rgba(255,255,255,0.65),rgba(255,255,255,0.25),rgba(255,255,255,0));border-radius:inherit;pointer-events:none;}
.pf-red::before,.pf-green::before{content:"";position:absolute;top:0;left:-75%;width:50%;height:100%;background:linear-gradient(120deg,rgba(255,255,255,0),rgba(255,255,255,0.8),rgba(255,255,255,0));transform:skewX(-20deg);}
.pf-red:hover::before,.pf-green:hover::before{animation:shine 0.9s ease forwards;}
@keyframes shine{0%{left:-75%;}100%{left:125%;}}
.pf-disabled{opacity:.4; pointer-events:none;}
.pf-status{font-size:12px;color:white;}
.pf-status.done{color:white;}
.pf-progress{display:none;margin-top:10px;}
.pf-barBox{width:100%;height:8px;background:rgba(255,255,255,.1);border-radius:6px;overflow:hidden;}
.pf-bar{height:100%;width:0%;background:linear-gradient(90deg,yellow,limegreen);}
.pf-percent{text-align:right;font-size:12px;color:#fff;}
`;

document.head.appendChild(style);

document.body.insertAdjacentHTML("beforeend", `
<div class="pf-overlay">
<div class="pf-box">

<div class="pf-mascotWrap">
<img src="mascot1.png" class="pf-mascot">
</div>

<div class="pf-panel">

<div style="margin-bottom:10px;color:white;">
💡ทำตามขั้นตอน / 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲 𝗦𝘁𝗲𝗽𝘀
</div>

<button id="pfYT1" class="pf-btn pf-red">
กดไลก์ คอมเมนต์ / 𝗟𝗶𝗸𝗲 & 𝗖𝗼𝗺𝗺𝗲𝗻𝘁
</button>

<div id="pfYTStatus1" class="pf-status">
เพื่อปลดล็อกขั้นต่อไป!
</div>

<button id="pfYT2" class="pf-btn pf-red pf-disabled">
กดไลก์ คอมเมนต์ / 𝗟𝗶𝗸𝗲 & 𝗟𝗶𝗸𝗲 & 𝗖𝗼𝗺𝗺𝗲𝗻𝘁
</button>

<div id="pfYTStatus2" class="pf-status">
ล็อกอยู่!
</div>

<!-- ✅ ปุ่มใหม่ -->
<button id="pfYT3" class="pf-btn pf-red pf-disabled">
กดไลก์ คอมเมนต์ / 𝗟𝗶𝗸𝗲 & 𝗖𝗼𝗺𝗺𝗲𝗻𝘁
</button>

<div id="pfYTStatus3" class="pf-status">
ล็อกอยู่!
</div>

<div id="pfProgress" class="pf-progress">
<div class="pf-barBox">
<div id="pfBar" class="pf-bar"></div>
</div>
<div id="pfPercent" class="pf-percent">0%</div>
</div>

<button id="pfEnter"
class="pf-btn pf-green"
style="display:none;">
𝗔𝗰𝗰𝗲𝘀𝘀 𝘁𝗵𝗲 𝘀𝗶𝘁𝗲 𝘁𝗼 𝗰𝗼𝗻𝘁𝗶𝗻𝘂𝗲
</button>

</div>
</div>
</div>
`);

});
