<<<<<<< HEAD
(() => {
  'use strict';
  (() => {
    let t,
      e = document.getElementById('timer-hours'),
      n = document.getElementById('timer-minutes'),
      o = document.getElementById('timer-seconds');
    t = setInterval(() => {
      let r = (() => {
        let t,
          e,
          n,
          o = (new Date('22 august 2024').getTime() - new Date().getTime()) / 1e3;
        return (t = 1 === Math.floor(o / 60 / 60).toString().length ? `0${Math.floor(o / 60 / 60)}` : Math.floor(o / 60 / 60)), (e = 1 === Math.floor((o / 60) % 60).toString().length ? `0${Math.floor((o / 60) % 60)}` : Math.floor((o / 60) % 60)), (n = 1 === Math.floor(o % 60).toString().length ? `0${Math.floor(o % 60)}` : Math.floor(o % 60)), { timeRemaining: o, hours: t, minutes: e, seconds: n };
      })();
      (e.textContent = r.hours), (n.textContent = r.minutes), (o.textContent = r.seconds), r.timeRemaining < 0 && (clearInterval(t), (e.textContent = '00'), (n.textContent = '00'), (o.textContent = '00'));
    }, 1e3);
  })();
})();
=======
(()=>{"use strict";(()=>{let e,t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds");e=setInterval((()=>{let o=(()=>{let e,t,n,l=(new Date("25 august 2024").getTime()-(new Date).getTime())/1e3;return e=1===Math.floor(l/60/60).toString().length?`0${Math.floor(l/60/60)}`:Math.floor(l/60/60),t=1===Math.floor(l/60%60).toString().length?`0${Math.floor(l/60%60)}`:Math.floor(l/60%60),n=1===Math.floor(l%60).toString().length?`0${Math.floor(l%60)}`:Math.floor(l%60),{timeRemaining:l,hours:e,minutes:t,seconds:n}})();t.textContent=o.hours,n.textContent=o.minutes,l.textContent=o.seconds,o.timeRemaining<0&&(clearInterval(e),t.textContent="00",n.textContent="00",l.textContent="00")}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),l=t.querySelectorAll("ul>li>a"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),n.addEventListener("click",o),l.forEach((e=>e.addEventListener("click",o)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),l=document.documentElement.clientWidth;let o,r=0;const a=()=>{r+=.04,o=requestAnimationFrame(a),r<1?e.style.opacity=r:(cancelAnimationFrame(o),r=0)};t.forEach((t=>{t.addEventListener("click",(()=>{l>768?(e.style.display="block",e.style.opacity="0",a()):e.style.display="block"}))})),n.addEventListener("click",(()=>{l>768?(e.style.display="none",e.style.opacity=""):e.style.display="none"}))})(),(()=>{const e=document.querySelectorAll("input[name=user_name]"),t=document.querySelectorAll("input[name=user_email]"),n=document.querySelectorAll("input[name=user_phone]"),l=document.querySelector("input[name=user_message]"),o=document.querySelectorAll(".calc-block > input[type=text]");e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-я\s-]/gi,"")}))})),l.addEventListener("input",(()=>{l.value=l.value.replace(/[^а-я\s-]/gi,"")})),t.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d\(\)\-]/,"")}))})),n.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\w\@\-\_\.\!\~\*\']+/g,"")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))}))})()})();
>>>>>>> lesson21
