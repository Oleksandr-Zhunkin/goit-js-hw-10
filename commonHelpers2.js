import{a as f,i as u}from"./assets/hello-774a6713.js";/* empty css                     */import{i}from"./assets/vendor-77e16229.js";function m(t,r){return new Promise((s,c)=>{setTimeout(()=>{if(r==="fulfilled"&&s(t),r==="rejected")c(t);else return},t)})}const g="/goit-js-hw-10/assets/imgok-55aec323.svg",d="/goit-js-hw-10/assets/caution-8cea4238.svg",o=document.querySelector("form"),n=o.querySelector('[type="number"]'),l=o.querySelector('[value="fulfilled"]'),a=o.querySelector('[value="rejected"]');n.removeAttribute("required");l.removeAttribute("required");a.removeAttribute("required");o.addEventListener("submit",t=>{if(t.preventDefault(),n.value===""||!l.checked&&!a.checked)return i.warning({title:"Caution",message:"You forgot important data",position:"topRight",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",iconUrl:d});const r=new FormData(o),e=r.get("delay"),s=r.get("state");m(e,s).then(()=>{i.success({iconUrl:g,title:"OK",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",message:`Fulfilled promise in ${e}ms`,timeout:`${e}`})}).catch(()=>{i.error({iconUrl:f,title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:`Rejected promise in ${e}ms`,timeout:`${e}`})}),o.reset()});i.info({title:"Hello",message:"Welcome!",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#09f",iconUrl:u,position:"topRight",timeout:2e3});
//# sourceMappingURL=commonHelpers2.js.map