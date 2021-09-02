import{d as e,o as t,c as l,r,a as o,b as a,n,u as i,e as d,t as s,F as c,f as u,g as h,h as p,l as g,i as f,j as m,k as y,w as v,m as b,p as k,v as C,q as x,s as w}from"./vendor.80f79943.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const $=["data-title"];var q=e({props:{title:String},setup:e=>(o,a)=>(t(),l("div",{class:"t-container","data-title":e.title},[r(o.$slots,"default")],8,$))});const V={class:"t-button"};var _=e({props:{loading:{type:Boolean,required:!1}},setup:e=>(e,o)=>(t(),l("button",V,[r(e.$slots,"default")]))});const H=["value"];var S=e({props:{modelValue:{type:String,required:!1}},emits:["update:modelValue"],setup(e,{emit:r}){function o(e){const t=e.target;r("update:modelValue",t.value)}return(r,a)=>(t(),l("input",{class:"t-input",value:e.modelValue,onInput:o},null,40,H))}});const A=["disabled"],j=["disabled","checked"],B=o("span",{class:"t-checkbox--icon"},null,-1),N={class:"t-checkbox--content"};var T=e({props:{disabled:{type:Boolean,required:!1},checked:{type:Boolean,required:!1},modelValue:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(e,{emit:a}){function n(e){const t=e.target;a("update:modelValue",t.checked)}return(a,i)=>(t(),l("label",{class:"t-checkbox",disabled:e.disabled},[o("input",{type:"checkbox",class:"t-checkbox--input",disabled:e.disabled,checked:e.checked,onChange:n},null,40,j),B,o("span",N,[r(a.$slots,"default")])],8,A))}}),E=e({props:{primary:{type:Number,required:!1},backgroundColor:{type:String,required:!1},textColor:{type:String,required:!1},size:{type:Number,required:!1}},setup(e){const o=e,d=a((()=>{var e,t,l,r;const a=null!=(e=o.primary)?e:210,n={"t-size":(null!=(t=o.size)?t:14)+"px","c-text":null!=(l=o.textColor)?l:"#000000","c-primary-1":`hsl(${a}deg, 100%, 95%)`,"c-primary-2":`hsl(${a}deg, 100%, 85%)`,"c-primary":`hsl(${a}deg, 100%, 70%)`,"c-primary-4":`hsl(${a}deg, 100%, 60%)`,"c-primary-5":`hsl(${a}deg, 100%, 50%)`,"c-white":"#ffffff","c-bg":null!=(r=o.backgroundColor)?r:"hsl(0deg, 0%, 95%)","c-gray-1":"hsl(0deg, 0%, 95%)","c-gray-2":"hsl(0deg, 0%, 85%)","c-gray":"hsl(0deg, 0%, 70%)","c-gray-4":"hsl(0deg, 0%, 60%)","c-gray-5":"hsl(0deg, 0%, 50%)"};return Object.keys(n).map((e=>`--${e}: ${n[e]};`)).join("")}));return(e,o)=>(t(),l("div",{class:"t-theme",style:n(i(d))},[r(e.$slots,"default")],4))}});const I={class:"root"},L=["checked"],z={style:{display:"flex"}};var O=e({props:{data:{type:Object,required:!0}},emits:["height-changed","check"],setup(e,{emit:r}){const a=d({height:100});function h(){a.height=200===a.height?100:200,setTimeout((()=>{r("height-changed")}),0)}return(r,d)=>(t(),l("div",I,[o("label",{style:{display:"flex"},onMousedown:d[0]||(d[0]=e=>r.$emit("check"))},[o("h1",null,s(e.data.id),1),o("input",{type:"checkbox",checked:e.data.check,onChange:h},null,40,L)],32),o("div",{class:"test",style:n(`width: 100%; height: ${i(a).height}px;`)},null,4),o("div",z,[(t(!0),l(c,null,u(e.data.items,(e=>(t(),l("div",{key:e},s(e),1)))),128))])]))}});const U=["data-id"],M={key:0,class:"fixed top-full"},P=["data-id"];var F=e({props:{items:{type:Array,required:!0}},setup(e){const o=e,a=d({current:[],render:[]}),s=h(),m=e=>new Promise((t=>setTimeout((()=>t()),e)));function y(e){var t;const l=null==(t=s.value)?void 0:t.querySelector(`[data-id='${e.id}']`);a.current.find((t=>t.id===e.id)).height=l.firstElementChild.offsetHeight,console.log("height changed",e.id,e.height)}function v(){var e;const t=null==(e=s.value)?void 0:e.querySelectorAll(".item");if(!t)return;const l=[];for(let r=0;r<t.length;r++){const e=t[r],n=e.getAttribute("data-id"),i=o.items.find((e=>e.id==n)),d=a.current.find((e=>e.id==n));d&&-1!==d.height||(a.current[n]={id:i.id,render:!1,height:e.offsetHeight,data:i},l.push(n))}l.forEach((e=>{const t=a.render.findIndex((t=>t.id==e));t>=0&&a.render.splice(t,1)}))}return p((()=>{window.onwheel=g.exports.throttle((e=>{const t=performance.now();(e=>{var t;if(!(null==(t=s.value)?void 0:t.querySelectorAll(".item"))||!s.value)return;let l=s.value.offsetTop;const r=window.scrollY;a.current.forEach((e=>{l+=e.height;const t=l>r-500&&l<r+window.innerHeight+500;e.render=t}))})(),console.log("update ts:",performance.now()-t)}),50)})),p((async()=>{let e=20;for(a.current.push(...o.items.slice(0,e).map((e=>({id:e.id,height:-1,render:!0,data:e}))));e<=o.items.length;)a.render.push(...o.items.slice(e,e+100)),await m(10),v(),e+=100;console.log("[---------------] pre-render over")})),(e,o)=>(t(),l("div",{ref:s,class:"container"},[(t(!0),l(c,null,u(i(a).current,(o=>(t(),l("div",{class:"item",key:o.id,"data-id":o.id,style:n(`min-height: ${o.height}px`)},[o.render?r(e.$slots,"content",{key:0,data:o.data,onHeightChanged:y}):f("",!0)],12,U)))),128)),i(a).render.length?(t(),l("div",M,[(t(!0),l(c,null,u(i(a).render,(o=>(t(),l("div",{class:"item",key:o.id,"data-id":o.id},[r(e.$slots,"content",{data:o,onHeightChanged:y})],8,P)))),128))])):f("",!0)],512))}});const K=x(" Text Color: "),Y=x(" hello "),D=x(" world "),G=x(" world ");w(e({setup(e){m((e=>({d58a3c78:i(n).bgColor})));const l=h(0),r=h("hello"),a=h(!1),n=d({primaryColor:348,bgColor:"#ffffff",textColor:"#000000",type:"light"}),c=d(new Array(100).fill(0).map(((e,t)=>({id:t,check:!1,items:new Array(100).fill(0).map(((e,t)=>t))}))));return(e,d)=>{const u=q,h=_,p=S,g=T,f=E;return t(),y(f,{primary:i(n).primaryColor,backgroundColor:i(n).bgColor,textColor:i(n).textColor},{default:v((()=>[b(u,{title:"Theme"},{default:v((()=>[o("label",null,[K,k(o("input",{type:"color","onUpdate:modelValue":d[0]||(d[0]=e=>i(n).textColor=e)},null,512),[[C,i(n).textColor]])])])),_:1}),b(u,{title:"Button"},{default:v((()=>[b(h,{onClick:d[1]||(d[1]=e=>l.value++)},{default:v((()=>[x(" hello: "+s(l.value),1)])),_:1}),b(h,{onClick:d[2]||(d[2]=e=>l.value++),disabled:""},{default:v((()=>[x(" hello: "+s(l.value),1)])),_:1})])),_:1}),b(u,{title:"Input"},{default:v((()=>[b(p,{modelValue:r.value,"onUpdate:modelValue":d[3]||(d[3]=e=>r.value=e)},null,8,["modelValue"]),b(p,{value:r.value,disabled:""},null,8,["value"])])),_:1}),b(u,{title:"Checkbox"},{default:v((()=>[b(g,{modelValue:a.value,"onUpdate:modelValue":d[4]||(d[4]=e=>a.value=e)},{default:v((()=>[Y])),_:1},8,["modelValue"]),b(g,{disabled:""},{default:v((()=>[D])),_:1}),b(g,{disabled:"",checked:a.value},{default:v((()=>[G])),_:1},8,["checked"])])),_:1}),b(F,{items:i(c)},{content:v((({data:e,onHeightChanged:t})=>[b(O,{data:e,onCheck:t=>function(e){const t=c.find((t=>t.id===e));t&&(t.check=!t.check)}(e.id),onHeightChanged:l=>null==t?void 0:t(e)},null,8,["data","onCheck","onHeightChanged"])])),_:1},8,["items"])])),_:1},8,["primary","backgroundColor","textColor"])}}})).mount("#app");
