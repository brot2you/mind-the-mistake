(function(){
"use strict";
const KEY="mtm_brot2you_rewards_v1";
const BADGES=[
{id:"spark",icon:"✨",title:"Premier déclic",desc:"Formuler ta première hypothèse",kind:"discover",need:1},
{id:"curious",icon:"🔎",title:"Œil de lynx",desc:"Découvrir 5 règles",kind:"discover",need:5},
{id:"scientist",icon:"🧪",title:"Scientifique des mots",desc:"Découvrir 15 règles",kind:"discover",need:15},
{id:"explorer",icon:"🗺️",title:"Grand explorateur",desc:"Découvrir les 22 règles",kind:"discover",need:22},
{id:"starter",icon:"🎯",title:"Première mission",desc:"Terminer ton premier quiz",kind:"quiz",need:1},
{id:"brave",icon:"🚀",title:"Toujours plus loin",desc:"Terminer 5 quiz différents",kind:"quiz",need:5},
{id:"champion",icon:"🏆",title:"Champion des quiz",desc:"Terminer 15 quiz différents",kind:"quiz",need:15},
{id:"star",icon:"🌟",title:"Sans faute",desc:"Obtenir 100 % à un quiz",kind:"perfect",need:1},
{id:"eraser",icon:"✏️",title:"Correcteur en herbe",desc:"Terminer 3 séries de corrections",kind:"fix",need:3},
{id:"master",icon:"💎",title:"Maître correcteur",desc:"Terminer 15 séries de corrections",kind:"fix",need:15},
{id:"perfectfix",icon:"🎖️",title:"Plume d'or",desc:"Corriger toutes les phrases d'une série",kind:"fixperfect",need:1},
{id:"legend",icon:"👑",title:"Légende du labo",desc:"Découvrir 22 règles et terminer 22 quiz",kind:"legend",need:1}
];
let state={discover:[],quiz:[],perfect:[],fix:[],fixperfect:[]};
function clean(v){return Array.isArray(v)?[...new Set(v.map(Number).filter(n=>Number.isInteger(n)&&n>=1&&n<=22))]:[]}
try {const v=JSON.parse(localStorage.getItem(KEY));if(v&&typeof v==="object")for(const k of Object.keys(state))state[k]=clean(v[k]);}catch(e){}
function count(kind){return kind==="legend"?(state.discover.length===22&&state.quiz.length===22?1:0):(state[kind]||[]).length;}
function earned(b){return count(b.kind)>=b.need;}
function snapshot(){return {badges:BADGES.map(b=>({...b,current:Math.min(count(b.kind),b.need),unlocked:earned(b)})),counts:Object.fromEntries(Object.keys(state).map(k=>[k,state[k].length]))};}
function record(kind,id){
 if(!Object.hasOwn(state,kind))return;
 const num=Number(id);
 if(!Number.isInteger(num)||num<1||num>22||state[kind].includes(num))return;
 const before=BADGES.filter(earned).map(b=>b.id);
 state[kind].push(num);
 try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}
 const newly=BADGES.filter(b=>earned(b)&&!before.includes(b.id));
 window.dispatchEvent(new CustomEvent("mtm-rewards",{detail:{newly:newly.map(x=>x.id)}}));
}
window.MTM_BADGES={BADGES,snapshot,record};
})();