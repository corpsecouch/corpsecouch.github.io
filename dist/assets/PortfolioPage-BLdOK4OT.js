import{S as y}from"./Subpage-otcss8xW.js";import{_ as r,o,c as n,p as h,f as _,b as t,a as g,w as k,m as e,k as l,d as a,e as v,r as d}from"./vars-ectp6GP0.js";import{E as b}from"./Email-B56GmIU0.js";const S={name:"Caret"},C=s=>(h("data-v-06b3a721"),s=s(),_(),s),I={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"53px",height:"20px",viewBox:"0 0 53 20","enable-background":"new 0 0 53 20","xml:space":"preserve"},P=C(()=>t("g",null,[t("polygon",{points:"26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779"})],-1)),B=[P];function E(s,u,c,p,$,m){return o(),n("svg",I,B)}const x=r(S,[["render",E],["__scopeId","data-v-06b3a721"]]),N={name:"PortfolioPage",components:{Subpage:y,Caret:x,Email:b},props:["nda"],computed:{columns:function(){return!this.$slots.awards&&!this.$slots.news?!1:this.$slots.awards&&this.$slots.news?"double":"single"}}},i=s=>(h("data-v-33474148"),s=s(),_(),s),V={id:"title"},T={class:"wrapper"},j={key:0},M={id:"company"},O={id:"year"},W={key:0,id:"hero"},q={key:1,id:"nda"},z={key:2,id:"content"},A={key:3,id:"challenge",class:"columned"},D=i(()=>t("h3",null,"The Challenge",-1)),F={key:4,id:"role",class:"columned"},G=i(()=>t("h3",null,"My role",-1)),H={key:5,id:"outcome",class:"columned"},J=i(()=>t("h3",null,"The Outcome",-1)),K={key:6,id:"process",class:"columned"},L=i(()=>t("h3",null,"My Process",-1)),Q={key:7,id:"awards",class:"columned left"},R=i(()=>t("h3",null,"awards",-1)),U={key:8,id:"news",class:"columned right"},X=i(()=>t("h3",null,"in the news",-1)),Y={id:"contact"},Z=i(()=>t("p",null,"Want to talk about this project?",-1));function ss(s,u,c,p,$,m){const w=d("Email"),f=d("Subpage");return o(),g(f,{class:"work widthConstrained"},{default:k(()=>[t("section",V,[t("div",T,[t("h1",null,[e(s.$slots,"title")]),this.$slots.subtitle?(o(),n("p",j,[e(s.$slots,"subtitle")])):l("",!0),t("span",M,[e(s.$slots,"company")]),t("span",O,[e(s.$slots,"year")])])]),this.$slots.hero?(o(),n("section",W,[e(s.$slots,"hero")])):l("",!0),c.nda?(o(),n("section",q,[t("p",null,[a("I've limited the details of this public case study due to the sensitive nature of the project and the confidentiality of "),e(s.$slots,"company"),a(".")])])):l("",!0),this.$slots.content?(o(),n("section",z,[e(s.$slots,"content")])):l("",!0),!this.$slots.content&&this.$slots.challenge?(o(),n("section",A,[D,t("div",null,[e(s.$slots,"challenge")])])):l("",!0),!this.$slots.content&&this.$slots.role?(o(),n("section",F,[G,t("div",null,[e(s.$slots,"role")])])):l("",!0),!this.$slots.content&&this.$slots.outcome?(o(),n("section",H,[J,t("div",null,[e(s.$slots,"outcome")])])):l("",!0),!this.$slots.content&&this.$slots.process?(o(),n("section",K,[L,t("div",null,[e(s.$slots,"process")])])):l("",!0),this.$slots.awards?(o(),n("section",Q,[R,e(s.$slots,"awards")])):l("",!0),this.$slots.news?(o(),n("section",U,[X,e(s.$slots,"news")])):l("",!0),t("section",Y,[Z,t("p",null,[v(w)])])]),_:3})}const ns=r(N,[["render",ss],["__scopeId","data-v-33474148"]]);export{ns as P};