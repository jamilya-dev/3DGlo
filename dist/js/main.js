(()=>{"use strict";(()=>{let t,e=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");t=setInterval((()=>{let r=(()=>{let t,e,n,o=(new Date("22 august 2024").getTime()-(new Date).getTime())/1e3;return t=1===Math.floor(o/60/60).toString().length?`0${Math.floor(o/60/60)}`:Math.floor(o/60/60),e=1===Math.floor(o/60%60).toString().length?`0${Math.floor(o/60%60)}`:Math.floor(o/60%60),n=1===Math.floor(o%60).toString().length?`0${Math.floor(o%60)}`:Math.floor(o%60),{timeRemaining:o,hours:t,minutes:e,seconds:n}})();e.textContent=r.hours,n.textContent=r.minutes,o.textContent=r.seconds,r.timeRemaining<0&&(clearInterval(t),e.textContent="00",n.textContent="00",o.textContent="00")}),1e3)})()})();