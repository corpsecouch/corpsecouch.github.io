import{_ as m,a as l,w as e,r as o,o as u,d as s,e as n,b as t,g as d,i as _,h,j as f}from"./vars-DRVma6AZ.js";import{P as w}from"./PortfolioPage-v_xx_i-s.js";import{Y as b}from"./YouTubeVideo-Cw7LQusp.js";import{d as g}from"./news-coverage-D2hD7kBQ.js";import{N as P}from"./NewsList-Dl0w0QQh.js";import{_ as D}from"./lodash-CXGpkqCe.js";import"./Subpage-DX0H0RAS.js";import"./Email-DJGSf_wW.js";import"./companies-DLj_wYGP.js";const N={name:"PhenomblueGenesis",components:{PortfolioPage:w,YouTubeVideo:b,NewsList:P},data(){return{news:D.filter(g,["project","PhenomblueGenesis"])}}},y=t("p",null,"Genesis is a 3D, real-time, multi-person space simulator created specifically for the Microsoft Surface 1.0.",-1),G=t("p",null,"Debuted in 2009 at the South by Southwest (SXSW) Interactive Festival",-1),T=t("p",null,"Featured chroma-depth 3D with custom designed 3D glasses",-1),V=t("p",null,"Designed an innovative menu sytem",-1);function k(a,S,Y,x,r,B){const i=o("YouTubeVideo"),c=o("NewsList"),p=o("PortfolioPage");return u(),l(p,null,{title:e(()=>[s("Microsoft Genesis")]),year:e(()=>[s("2009")]),company:e(()=>[s("Phenomblue")]),hero:e(()=>[n(i,{src:"https://www.youtube.com/embed/JkaGrZDk_RY"})]),content:e(()=>[y,G,T,V]),news:e(()=>[n(c,{data:r.news},null,8,["data"])]),_:1})}const v=m(N,[["render",k]]);d(v).use(_,{pageTrackerTemplate(a){return{page_title:document.title,page_path:a.path}},config:{id:h},enabled:f}).mount("#app");