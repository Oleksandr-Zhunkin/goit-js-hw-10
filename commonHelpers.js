import{i as y,a as p}from"./assets/hello-774a6713.js";/* empty css                     */import{f as C,i as f}from"./assets/vendor-77e16229.js";const l=document.querySelector("#datetime-picker"),s=document.querySelector("[data-start]"),r=document.querySelector(".js-timer");let m=null;s.disabled=!0;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(console.log(t[0]),t[0]<new Date)return f.error({iconUrl:p,title:"Error",titleColor:"#fff",color:"#fff",message:"Please choose a date in the future",messageColor:"#fff",backgroundColor:"red",position:"topRight"});m=t[0],s.disabled=!1}};s.addEventListener("click",S);function S(t){s.disabled=!0,l.disabled=!0;const o=setInterval(()=>{const n=Date.now(),e=m-n,{days:d,hours:i,minutes:c,seconds:u}=k(e);b({days:d,hours:i,minutes:c,seconds:u}),e<1e3&&(clearInterval(o),l.disabled=!1)},1e3)}function b({days:t,hours:o,minutes:n,seconds:e}){r.querySelector("[data-days]").textContent=a(t),r.querySelector("[data-hours]").textContent=a(o),r.querySelector("[data-minutes]").textContent=a(n),r.querySelector("[data-seconds]").textContent=a(e)}C(l,g);function k(t){const i=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:u,seconds:h}}function a(t){return String(t).padStart(2,"0")}f.info({title:"Hello",message:"Welcome!",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#09f",iconUrl:y,position:"topRight",timeout:2e3});
//# sourceMappingURL=commonHelpers.js.map