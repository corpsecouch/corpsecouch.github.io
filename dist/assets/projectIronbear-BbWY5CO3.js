import{_ as d,a as h,w as e,r as i,o as g,d as a,e as s,b as t,p as u,f as p,g as m,i as f,h as _,j as w}from"./vars-DRVma6AZ.js";import{P as b}from"./PortfolioPage-v_xx_i-s.js";import{N as v,d as k}from"./news-coverage-D2hD7kBQ.js";import{Y as I}from"./YouTubeVideo-Cw7LQusp.js";import{I as y}from"./Illustration-C5aGr-jx.js";import{_ as x}from"./lodash-CXGpkqCe.js";import"./Subpage-DX0H0RAS.js";import"./Email-DJGSf_wW.js";import"./companies-DLj_wYGP.js";const T="/assets/photo-CXj82tzt.jpg",P="/assets/chat-Bvi3XiG-.gif",A="/assets/animation-BvSxF13s.gif",R="/assets/design-CB8urMqa.png",C="/assets/dead-end-CzLNZfbh.png",q={name:"RocketIronbear",components:{PortfolioPage:b,NewsLink:v,YouTubeVideo:I,Illustration:y},data(){return{news:x.filter(k,["project","RocketIronbear"])}}},o=n=>(u("data-v-075eca45"),n=n(),p(),n),B=o(()=>t("p",null,[a("Every Rocket Mortgage client starts in the same place, filling out one of two digital lead forms then talking with a mortgage banker. The primary lead form, however, ends at a frustrating dead end while the client unexpectedly receives a phone call. The hypothesis is this experience was the primary driver for low top-of-funnel success rates. The challenge was to "),t("strong",null,"measurably improve the lead form experience without negatively impacting lead flow.")],-1)),V=o(()=>t("h4",null,"Validate Assumptions",-1)),W=o(()=>t("p",null,[a(`We assumed people clients didn't like the dead-end and the disjointed experience of receiving a phone call from a mortgage banker within seconds of filling out a form. We also assumed most clients would prefer a chat experience with a mortgage banker versus a phone call. So, we asked clients what they wanted to do at the end of the form, get a call or chat. We ran this "smoke test" for two weeks on a slice of traffic. The results strongly indicated `),t("strong",null,"clients at the end of the lead form preferred chatting versus getting a phone call.")],-1)),N=o(()=>t("h4",null,"Design",-1)),S=o(()=>t("p",null,"We created a full-screen/full-browser conversational UI that enabled clients to chat with our conversational AI and mortgage bankers. The AI was powered by ChatGPT and integrated with Salesforce for mortgage banker chats. We also added light personalization by leveraging client info gathered from the lead form including their name, property type, and local time of day.",-1)),j={class:"columns"},M=o(()=>t("h4",null,"Derisking",-1)),z=o(()=>t("p",null,"Mortgage bankers aren't staffed 24/7 yet launching during core hours poses the highest business risk. We found that a large percentage of clients submit leads during after hours, aren't able to get immediate help, and have lower success rates. This presented us with the opportunity for lower risk and greater positive impact. Aligning with the banking business, we staffed mortgage chat bankers during after hours.",-1)),L=o(()=>t("p",null,"We increased Rocket Mortgage's client experience scores and mortgage lead success KPIs by launching a new full-browser, generative AI & human-agent chat experience at the end of the primary digital lead form. This product also overhauled the conversational AI architectural foundation establishing a more robust and centralized conversational AI API.",-1));function U(n,$,D,G,F,X){const r=i("Illustration"),l=i("YouTubeVideo"),c=i("PortfolioPage");return g(),h(c,null,{title:e(()=>[a("Conversational Lead Funnel")]),year:e(()=>[a("2023")]),company:e(()=>[a("Rocket Mortgage")]),challenge:e(()=>[B]),process:e(()=>[V,W,s(r,{imagesrc:C},{subtext:e(()=>[a("The original dead end of the lead form.")]),_:1},8,["imagesrc"]),N,S,s(r,{imagesrc:R},{subtext:e(()=>[a("The new conversational UI.")]),_:1},8,["imagesrc"]),t("div",j,[s(r,{imagesrc:A},{subtext:e(()=>[a("Transitioning from the lead form to the chat UI.")]),_:1},8,["imagesrc"]),s(r,{imagesrc:P},{subtext:e(()=>[a("Chatting with an AI and a mortgage banker in the new UI.")]),_:1},8,["imagesrc"])]),M,z,s(r,{imagesrc:T},{subtext:e(()=>[a("Launch night – design, product, engineering, data, and business all in one room.")]),_:1},8,["imagesrc"])]),outcome:e(()=>[L,s(l,{src:"https://www.youtube.com/embed/9BHhCdaoqZ8"})]),_:1})}const Y=d(q,[["render",U],["__scopeId","data-v-075eca45"]]);m(Y).use(f,{pageTrackerTemplate(n){return{page_title:document.title,page_path:n.path}},config:{id:_},enabled:w}).mount("#app");