import{_ as C,o,e as i,a as t,t as a,j as g,c as j,w as T,r as D,f as A,g as y,k as m,F as u,n as w,l as v,p as R,h as L,b as z,i as x,d as S}from"./analytics-BwktuSXh.js";import{S as U}from"./Subpage-DmUelz5Y.js";import{_ as M}from"./peek-BdAkgbL1.js";import{_ as P}from"./preview-Br_eb3Xw.js";import{_ as $}from"./preview-D0_7suBD.js";import{_ as B}from"./preview-CLOO021s.js";import{_ as F}from"./preview-BRqIlmM4.js";import{_ as N}from"./preview-CJ4xseCa.js";import{_ as V}from"./preview-DiC8TIze.js";import{_ as E}from"./thumb-BQ3UHfIA.js";import{_ as G}from"./preview-BRlpN-rG.js";import{_ as W}from"./preview-D7iV_mOx.js";import{_ as K}from"./preview-CVTZqvTx.js";import{_ as O}from"./thumb-CyqYs8YN.js";import{_ as X}from"./thumb-C7zywQGd.js";import{_ as q}from"./thumb-0utj37O_.js";import{d as n}from"./companies-DLj_wYGP.js";import{d as b}from"./news-coverage-BM_qX4og.js";import{N as H}from"./NewsList-BX-RHe5E.js";import{A as J,d as Q}from"./awards-_8eXKoF6.js";import{_ as d}from"./lodash-CXGpkqCe.js";const Y="/assets/preview-CwXK56zi.png",Z=[{company:n.rocket,year:"2023",title:"Conversational Lead Funnel",description:"Overhauling the mortgage top-of-funnel with conversational AI.",tags:["UI design","AI design","conversational design"],preview:{image:q,type:"product",color:"lightcoral"},url:"/portfolio/rocket-ironbear/"},{featured:!0,company:n.amazon,year:"2019",title:"Alexa Profile",description:"Connecting AIs from two of the world's largest companies; a world-first.",tags:["mobile design","voice design","multi-modal design","AI design","conversational design"],preview:{image:X,type:"product",color:"lightskyblue"},url:"/portfolio/amazon-profile/"},{featured:!0,company:n.amazon,year:"2017",title:"Alexa + Cortana",description:"Connecting AIs from two of the world's largest companies; a world-first.",tags:["voice design","multi-modal design","AI design","conversational design"],preview:{image:O,type:"product",color:"lightsalmon"},url:"/portfolio/amazon-alexa-cortana/"},{company:n.disney,year:"2014",title:"Enterprise Design System",description:"Creating an award-winning enterprise design system.",tags:["design system"],preview:{image:K,type:"product",color:"blueviolet"},url:"/portfolio/disney-design-system/"},{company:n.disney,year:"2017",title:"Movie Greenlight",description:"Innovating how Disney greenlights movies.",preview:{image:W,type:"product",color:"lightblue"},url:"/portfolio/disney-greenlight/"},{company:n.disney,year:"2017",title:"Innovation Incubator",description:"Transforming how Disney Studios innovates.",tags:["r&d"],preview:{image:G,type:"title"},url:"/portfolio/disney-incubator/"},{featured:!0,company:n.disney,year:"2014",title:"Filmmaking for Virtual Reality",description:"Leading the VR conversation.",tags:["vr design","creative direction"],preview:{image:E,type:"product",color:"chartreuse"},url:"/portfolio/disney-vr/"},{company:n.disney,year:"2016",title:"Movie Slate",description:"Innovating how Disney plans and tracks their slate of upcoming movies.",preview:{image:Y,type:"title"},url:"/portfolio/disney-slate/"},{company:n.phenomblue,year:"2009",title:"Microsoft Genesis",description:"A 3D, social space simulator.",tags:["game design","r&d","microsoft surface"],preview:{image:V,type:"title"},url:"/portfolio/phenomblue-genesis/"},{company:n.phenomblue,year:"2013",title:"My Wild Kingdom",description:"A groundbreaking adventure app that brings the wild to any situation",tags:["mobile design"],preview:{image:N,type:"product",color:"wheat"},url:"/portfolio/phenomblue-wild-kingdom/"},{company:n.phenomblue,year:"2012",title:"Operation: Dino Dig",description:"Social computing for learning and exploration.",tags:["microsoft surface"],preview:{image:F,type:"title"},url:"/portfolio/phenomblue-dino-dig/"},{company:n.phenomblue,year:"2013",title:"Page",description:'Breaking down the "fifth wall" of reading and literature.',tags:["ar design","mobile design","r&d"],preview:{image:B,type:"title"},url:"/portfolio/phenomblue-page/"},{company:n.phenomblue,year:"2012",title:"Movie Lotto",description:"Social gaming in theaters.",tags:["design system","r&d"],preview:{image:$,type:"title"},url:"/portfolio/phenomblue-movie-lotto/"},{company:n.phenomblue,year:"2012",title:"Fantastic Future Me",description:"Encouraging kids to reach their Future Me.",tags:["public installation"],preview:{image:P,type:"title"},url:"/portfolio/phenomblue-fantastic-future-me/"},{company:n.phenomblue,year:"2009",title:"Moppet Mashup",description:"A social, large-format interactive experience.",tags:["microsoft surface","public installation","r&d"],preview:{image:M,type:"title"},url:"/portfolio/phenomblue-moppet-mashup/"}],ee={name:"Callouts",components:{},props:["pressTotal","pressURL","awardsTotal","awardsURL"]},te={key:0,id:"callouts"},oe={key:0,class:"press"},se={class:"count"},ie=["href"],ae={key:1,class:"awards"},re={class:"count"},ne=["href"];function le(c,h,r,k,s,_){return r.pressTotal||r.awardsTotal?(o(),i("section",te,[r.pressTotal?(o(),i("div",oe,[t("span",se,a(r.pressTotal),1),t("a",{class:"description",href:r.pressURL},"Article"+a(r.pressTotal>1?"s":""),9,ie)])):g("",!0),r.awardsTotal?(o(),i("div",ae,[t("span",re,a(r.awardsTotal),1),t("a",{class:"description",href:r.awardsURL},"Award"+a(r.awardsTotal>1?"s":""),9,ne)])):g("",!0)])):g("",!0)}const ce=C(ee,[["render",le],["__scopeId","data-v-2239fcd3"]]),de={name:"Portfolio",components:{Subpage:U,NewsList:H,AwardList:J,Callouts:ce},methods:{gotoProject(c){window.location.href=c}},data(){let c=d.orderBy(d.filter(Z,r=>!r.hidden),["year"],["desc"]),h={};return d.each(n,(r,k)=>{h[r.slug]={projects:d.filter(c,s=>s.company.slug==r.slug),awards:d.orderBy(d.filter(Q,s=>s.company.slug==r.slug),s=>s.date.year,["desc"]),news:{total:d.filter(b,s=>s.company.slug==r.slug).length,data:d.take(d.filter(b,s=>s.company.slug==r.slug),3)}}}),{portfolioData:h,newsData:b}}},p=c=>(R("data-v-c42b620f"),c=c(),L(),c),pe=p(()=>t("span",{class:"o"},"o",-1)),me={class:"company",id:"rocket"},ue=p(()=>t("h3",null,"Rocket Companies",-1)),ge=p(()=>t("p",null,"As the first Director of Conversational AI Design for Rocket Companies, I not only established the practice for the company I also cemented conversational AI as a company priority - a core part of it's business model and long term vision – ushering in it's investments into LLMs and generative AI.",-1)),_e={class:"projects"},he=["onClick"],fe=["src"],ye={class:"title"},we={class:"description"},ve={key:0,class:"tags"},be={class:"tag"},ke=["href","title"],Te={class:"company",id:"amazon"},De=p(()=>t("h3",null,"Amazon",-1)),Ae=p(()=>t("p",null,"At Amazon, I was focused on all things Alexa identity, especially biometrics. I led the design of voice, modal, and device experiences for Alexa; starting with voice recognition then expanding to face recognition, authentication, authorization, profiles, and establishing the persoanlization guidelines. These are features used or available across every Echo device and has influenced every personalized experience.",-1)),Ce={class:"projects"},Ie=["onClick"],je=["src"],Re={class:"title"},Le={class:"description"},ze={key:0,class:"tags"},xe={class:"tag"},Se=["href","title"],Ue={class:"company",id:"disney"},Me=p(()=>t("h3",null,"Walt Disney Studios",-1)),Pe=p(()=>t("p",null,"At Disney, I was leading the UX design of the Studio's digital transformation of it's enterprise tools and processes. I also went deep into emerging technologies and R&D, especially design-driven innovation.",-1)),$e={class:"projects"},Be=["onClick"],Fe=["src"],Ne={class:"title"},Ve={class:"description"},Ee={key:0,class:"tags"},Ge={class:"tag"},We=["href","title"],Ke={class:"company",id:"phenomblue"},Oe=p(()=>t("h3",null,"Phenomblue",-1)),Xe=p(()=>t("p",null,"Phenomblue was a digital brand experience agency. What does that even mean? It means I created digital experiences for brands including Microsoft, Gatorade, McDonalds, TUMS, and more.",-1)),qe={class:"projects"},He=["onClick"],Je=["src"],Qe={class:"title"},Ye={class:"description"},Ze={key:0,class:"tags"},et={class:"tag"},tt=["href","title"];function ot(c,h,r,k,s,_){const f=D("Callouts"),I=D("Subpage");return o(),j(I,{class:"widthConstrained"},{title:T(()=>[A("P"),pe,A("rtfolio")]),default:T(()=>[t("div",me,[ue,ge,y(f,{pressTotal:s.portfolioData.rocket.news.total,pressURL:"/press/#rocket",awardsTotal:s.portfolioData.rocket.awards.length,awardsURL:"/awards/#rocket"},null,8,["pressTotal","awardsTotal"]),t("ul",_e,[(o(!0),i(u,null,m(s.portfolioData.rocket.projects,e=>(o(),i("li",{class:"project",onClick:l=>_.gotoProject(e.url),style:w({"background-color":e.preview.color})},[t("div",{class:v(e.preview.type+"-image")},[t("img",{src:e.preview.image,class:"rounded"},null,8,fe)],2),t("span",ye,a(e.title),1),t("span",we,a(e.year)+" — "+a(e.description),1),e.tags?(o(),i("ul",ve,[(o(!0),i(u,null,m(e.tags,l=>(o(),i("li",be,a(l),1))),256))])):g("",!0),t("a",{href:e.url,title:e.title,class:"link"},"Read the case study",8,ke)],12,he))),256))])]),t("div",Te,[De,Ae,y(f,{pressTotal:s.portfolioData.amazon.news.total,pressURL:"/press/#amazon",awardsTotal:s.portfolioData.amazon.awards.length,awardsURL:"/awards/#amazon"},null,8,["pressTotal","awardsTotal"]),t("ul",Ce,[(o(!0),i(u,null,m(s.portfolioData.amazon.projects,e=>(o(),i("li",{class:"project",onClick:l=>_.gotoProject(e.url),style:w({"background-color":e.preview.color})},[t("div",{class:v(e.preview.type+"-image")},[t("img",{src:e.preview.image,class:"rounded"},null,8,je)],2),t("span",Re,a(e.title),1),t("span",Le,a(e.year)+" — "+a(e.description),1),e.tags?(o(),i("ul",ze,[(o(!0),i(u,null,m(e.tags,l=>(o(),i("li",xe,a(l),1))),256))])):g("",!0),t("a",{href:e.url,title:e.title,class:"link"},"Read the case study",8,Se)],12,Ie))),256))])]),t("div",Ue,[Me,Pe,y(f,{pressTotal:s.portfolioData.disney.news.total,pressURL:"/press/#disney",awardsTotal:s.portfolioData.disney.awards.length,awardsURL:"/awards/#disney"},null,8,["pressTotal","awardsTotal"]),t("ul",$e,[(o(!0),i(u,null,m(s.portfolioData.disney.projects,e=>(o(),i("li",{class:"project",onClick:l=>_.gotoProject(e.url),style:w({"background-color":e.preview.color})},[t("div",{class:v(e.preview.type+"-image")},[t("img",{src:e.preview.image,class:"rounded"},null,8,Fe)],2),t("span",Ne,a(e.title),1),t("span",Ve,a(e.year)+" — "+a(e.description),1),e.tags?(o(),i("ul",Ee,[(o(!0),i(u,null,m(e.tags,l=>(o(),i("li",Ge,a(l),1))),256))])):g("",!0),t("a",{href:e.url,title:e.title,class:"link"},"Read the case study",8,We)],12,Be))),256))])]),t("div",Ke,[Oe,Xe,y(f,{pressTotal:s.portfolioData.phenomblue.news.total,pressURL:"/press/#phenomblue",awardsTotal:s.portfolioData.phenomblue.awards.length,awardsURL:"/awards/#phenomblue"},null,8,["pressTotal","awardsTotal"]),t("ul",qe,[(o(!0),i(u,null,m(s.portfolioData.phenomblue.projects,e=>(o(),i("li",{class:"project",onClick:l=>_.gotoProject(e.url),style:w({"background-color":e.preview.color})},[t("div",{class:v(e.preview.type+"-image")},[t("img",{src:e.preview.image,class:"rounded"},null,8,Je)],2),t("span",Qe,a(e.title),1),t("span",Ye,a(e.year)+" — "+a(e.description),1),e.tags?(o(),i("ul",Ze,[(o(!0),i(u,null,m(e.tags,l=>(o(),i("li",et,a(l),1))),256))])):g("",!0),t("a",{href:e.url,title:e.title,class:"link"},"Check out this project",8,tt)],12,He))),256))])])]),_:1})}const st=C(de,[["render",ot],["__scopeId","data-v-c42b620f"]]);z(st).use(x,S("Portfolio")).mount("#app");