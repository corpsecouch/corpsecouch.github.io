import{_ as d,c as h,w as e,r as i,o as g,f as a,g as s,a as t,p as u,h as p,b as m,i as f,d as _}from"./analytics-BwktuSXh.js";import{P as b}from"./PortfolioPage-ZFnVwdQk.js";import{N as w,d as v}from"./news-coverage-BM_qX4og.js";import{Y as k}from"./YouTubeVideo-OOu0NgiA.js";import{I}from"./Illustration-DqOaqZkd.js";import{_ as y}from"./lodash-CXGpkqCe.js";import{_ as x}from"./thumb-0utj37O_.js";import"./Subpage-DmUelz5Y.js";import"./Email-CP8Ks1UR.js";import"./companies-DLj_wYGP.js";const P="/assets/photo-CXj82tzt.jpg",T="/assets/chat-Bvi3XiG-.gif",A="/assets/animation-BvSxF13s.gif",R="/assets/design-CB8urMqa.png",C="/assets/dead-end-CzLNZfbh.png",q={name:"RocketIronbear",components:{PortfolioPage:b,NewsLink:w,YouTubeVideo:k,Illustration:I},data(){return{news:y.filter(v,["project","RocketIronbear"])}}},o=r=>(u("data-v-47825fba"),r=r(),p(),r),B=o(()=>t("img",{src:x},null,-1)),V=o(()=>t("p",null,[a("Every Rocket Mortgage client starts in the same place, filling out one of two digital lead forms then talking with a mortgage banker. The primary lead form, however, ends at a frustrating dead end while the client unexpectedly receives a phone call. The hypothesis is this experience was the primary driver for low top-of-funnel success rates. The challenge was to "),t("strong",null,"measurably improve the lead form experience without negatively impacting lead flow.")],-1)),W=o(()=>t("h4",null,"Validate Assumptions",-1)),N=o(()=>t("p",null,[a(`We assumed people clients didn't like the dead-end and the disjointed experience of receiving a phone call from a mortgage banker within seconds of filling out a form. We also assumed most clients would prefer a chat experience with a mortgage banker versus a phone call. So, we asked clients what they wanted to do at the end of the form, get a call or chat. We ran this "smoke test" for two weeks on a slice of traffic. The results strongly indicated `),t("strong",null,"clients at the end of the lead form preferred chatting versus getting a phone call.")],-1)),S=o(()=>t("h4",null,"Design",-1)),M=o(()=>t("p",null,"We created a full-screen/full-browser conversational UI that enabled clients to chat with our conversational AI and mortgage bankers. The AI was powered by ChatGPT and integrated with Salesforce for mortgage banker chats. We also added light personalization by leveraging client info gathered from the lead form including their name, property type, and local time of day.",-1)),j={class:"columns"},z=o(()=>t("h4",null,"Derisking",-1)),L=o(()=>t("p",null,"Mortgage bankers aren't staffed 24/7 yet launching during core hours poses the highest business risk. We found that a large percentage of clients submit leads during after hours, aren't able to get immediate help, and have lower success rates. This presented us with the opportunity for lower risk and greater positive impact. Aligning with the banking business, we staffed mortgage chat bankers during after hours.",-1)),U=o(()=>t("p",null,"We increased Rocket Mortgage's client experience scores and mortgage lead success KPIs by launching a new full-browser, generative AI & human-agent chat experience at the end of the primary digital lead form. This product also overhauled the conversational AI architectural foundation establishing a more robust and centralized conversational AI API.",-1));function Y(r,D,F,G,X,Z){const n=i("Illustration"),l=i("YouTubeVideo"),c=i("PortfolioPage");return g(),h(c,{pcolor:"lightcoral"},{title:e(()=>[a("Conversational Lead Funnel")]),year:e(()=>[a("2023")]),company:e(()=>[a("Rocket Mortgage")]),hero:e(()=>[B]),challenge:e(()=>[V]),process:e(()=>[W,N,s(n,{imagesrc:C},{subtext:e(()=>[a("The original dead end of the lead form.")]),_:1},8,["imagesrc"]),S,M,s(n,{imagesrc:R},{subtext:e(()=>[a("The new conversational UI.")]),_:1},8,["imagesrc"]),t("div",j,[s(n,{imagesrc:A},{subtext:e(()=>[a("Transitioning from the lead form to the chat UI.")]),_:1},8,["imagesrc"]),s(n,{imagesrc:T},{subtext:e(()=>[a("Chatting with an AI and a mortgage banker in the new UI.")]),_:1},8,["imagesrc"])]),z,L,s(n,{imagesrc:P},{subtext:e(()=>[a("Launch night – design, product, engineering, data, and business all in one room.")]),_:1},8,["imagesrc"])]),outcome:e(()=>[U,s(l,{src:"https://www.youtube.com/embed/9BHhCdaoqZ8"})]),_:1})}const $=d(q,[["render",Y],["__scopeId","data-v-47825fba"]]);m($).use(f,_("Portfolio: Ironbear")).mount("#app");