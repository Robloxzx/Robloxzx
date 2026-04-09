document.addEventListener("DOMContentLoaded", () => {

const style = document.createElement("style");

style.innerHTML = `
.pf-overlay{
position:fixed;
inset:0;
backdrop-filter:blur(12px);
background:rgba(0,0,0,.25);
display:flex;
justify-content:center;
align-items:center;
z-index:999999;
font-family:sans-serif;
}

.pf-box{
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
}

.pf-mascotWrap{
opacity:0;
transform:translateY(-60px) scale(0.92);
transition: all 0.7s cubic-bezier(0.22,1,0.36,1);
}

.pf-mascotWrap.show{
opacity:1;
transform:translateY(0) scale(1);
}

.pf-panel{
width:320px;
padding:20px;
border-radius:16px;
background:rgba(255,255,255,0.08);
backdrop-filter:blur(20px);
text-align:center;
box-shadow:0 0 15px rgba(255,255,255,0.5);
opacity:0;
transform:translateY(20px);
transition: all 0.7s cubic-bezier(0.22,1,0.36,1);
}

.pf-panel.show{
opacity:1;
transform:translateY(0);
}

.pf-mascot{
width:200px;
filter:drop-shadow(0 0 15px rgba(255,255,255,0.6));
animation:aura 2s infinite alternate;
}

@keyframes aura{
0%{filter:drop-shadow(0 0 15px rgba(255,255,255,0.4));}
50%{filter:drop-shadow(0 0 25px rgba(255,255,255,0.7));}
100%{filter:drop-shadow(0 0 15px rgba(255,255,255,0.4));}
}

.pf-btn{
width:100%;
padding:12px;
margin-top:10px;
border:none;
border-radius:10px;
cursor:pointer;
font-weight:bold;
transition:.2s;
box-shadow:0 0 10px rgba(255,255,255,0.4);
}

.pf-btn:hover{
transform:translateY(-2px);
}

.pf-btn:active{
transform:scale(.96);
}

.pf-red{
background: linear-gradient(90deg,#ffd84d,#ffb300,#ff6a00,#ff2a00,#ff0000);
color:#fff;
}

.pf-green{
background: linear-gradient(90deg,#ffff66,#aaff00,#00ff66,#00cc55);
color:#000;
}

.pf-disabled{
opacity:.4;
pointer-events:none;
}

.pf-status{
font-size:12px;
color:white;
margin-top:4px;
}

.pf-progress{
display:none;
margin-top:10px;
}

.pf-barBox{
width:100%;
height:8px;
background:rgba(255,255,255,.1);
border-radius:6px;
overflow:hidden;
}

.pf-bar{
height:100%;
width:0%;
background:linear-gradient(90deg,yellow,limegreen);
}

.pf-percent{
text-align:right;
font-size:12px;
color:#fff;
}
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
💡ทำตามขั้นตอน / Complete Steps
</div>

<button id="pfYT1" class="pf-btn pf-red">
กดไลก์ คอมเมนต์ / Like & Comment
</button>

<div id="pfYTStatus1" class="pf-status">
เพื่อปลดล็อกขั้นต่อไป!
</div>

<button id="pfYT2" class="pf-btn pf-red pf-disabled">
กดไลก์ คอมเมนต์ / Like & Comment
</button>

<div id="pfYTStatus2" class="pf-status">
ล็อกอยู่!
</div>

<button id="pfYT3" class="pf-btn pf-red pf-disabled">
กดไลก์ คอมเมนต์ / Like & Comment
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
Access the site to continue
</button>

</div>
</div>
</div>

`);

setTimeout(()=>{
document.querySelector(".pf-mascotWrap").classList.add("show");
document.querySelector(".pf-panel").classList.add("show");
},200);


/* ========================= */
/* LOGIC 3 BUTTON */
/* ========================= */

const btn1 = document.getElementById("pfYT1");
const btn2 = document.getElementById("pfYT2");
const btn3 = document.getElementById("pfYT3");

const status1 = document.getElementById("pfYTStatus1");
const status2 = document.getElementById("pfYTStatus2");
const status3 = document.getElementById("pfYTStatus3");

const progress = document.getElementById("pfProgress");
const bar = document.getElementById("pfBar");
const percent = document.getElementById("pfPercent");

const enterBtn = document.getElementById("pfEnter");

let step = 0;

function updateProgress(){

let p = (step / 3) * 100;

progress.style.display = "block";

bar.style.width = p + "%";

percent.innerText = Math.floor(p) + "%";

if(step === 3){

enterBtn.style.display = "block";

}

}


/* STEP 1 */

btn1.onclick = () => {

window.open(
"https://youtu.be/VIDEO_ID_1",
"_blank"
);

btn1.classList.remove("pf-red");
btn1.classList.add("pf-green");

status1.innerText = "สำเร็จแล้ว!";

btn2.classList.remove("pf-disabled");

step++;

updateProgress();

};


/* STEP 2 */

btn2.onclick = () => {

window.open(
"https://youtu.be/VIDEO_ID_2",
"_blank"
);

btn2.classList.remove("pf-red");
btn2.classList.add("pf-green");

status2.innerText = "สำเร็จแล้ว!";

btn3.classList.remove("pf-disabled");

step++;

updateProgress();

};


/* STEP 3 */

btn3.onclick = () => {

window.open(
"https://youtu.be/VIDEO_ID_3",
"_blank"
);

btn3.classList.remove("pf-red");
btn3.classList.add("pf-green");

status3.innerText = "สำเร็จแล้ว!";

step++;

updateProgress();

};


/* ENTER BUTTON */

enterBtn.onclick = () => {

document.querySelector(".pf-overlay").remove();

};

});
