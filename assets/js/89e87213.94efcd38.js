"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[318],{9472:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=s(74848),n=s(28453);const a={},o="yVaults v2",i={id:"products/yvaults/v2",title:"yVaults v2",description:"Overview",source:"@site/docs/getting-started/products/yvaults/v2.md",sourceDirName:"products/yvaults",slug:"/products/yvaults/v2",permalink:"/getting-started/products/yvaults/v2",draft:!1,unlisted:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/getting-started/products/yvaults/v2.md",tags:[],version:"current",frontMatter:{},sidebar:"userDocsSidebar",previous:{title:"yVaults V3",permalink:"/getting-started/products/yvaults/v3"},next:{title:"yVaults FAQ",permalink:"/getting-started/products/yvaults/yvaults-faq"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"v2 yVault Improvements",id:"v2-yvault-improvements",level:2},{value:"Read More",id:"read-more",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{PrettyLink:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("PrettyLink",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"yvaults-v2",children:"yVaults v2"})}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["The second iteration of yVaults are auto-compounding contracts that allow depositors to earn and compound yield on deposited assets. These are still the trusty workhorse vaults for Curve, Velodrome, and Aerodrome LP positions. They allow multiple strategies and can be automatically harvested, but they have mostly been superseded by the ",(0,r.jsx)(t.a,{href:"./v3",children:"V3"})," architecture for single asset vaults and other more exotic asset types. They are not ERC-4626 compatible, nor as flexible as the newer V3 vaults."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"image",src:s(82055).A+"",width:"2220",height:"1982"})}),"\n",(0,r.jsx)(t.h2,{id:"v2-yvault-improvements",children:"v2 yVault Improvements"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Up to 20 strategies per vault:"})," This will increase the flexibility to manage capital efficiently during different market scenarios. Each strategy has a capital cap. This is useful to avoid over-allocating funds to a strategy that cannot increase APY anymore."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Strategist and Guardian are the new Controllers:"})," The Controller concept is not available in V2 yVaults and has been replaced by a Guardian and the Strategy creator (strategist). These 2 actors oversee strategy performance and are empowered to take action to improve capital management or act on critical situations."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Automated vault housekeeping (Keep3r network):"})," ",(0,r.jsx)(t.code,{children:"harvest()"})," and ",(0,r.jsx)(t.code,{children:"earn()"})," calls are now automated through the Keep3r bots network. These 2 function calls are used to purchase new underlying collateral by selling the earned tokens while moving the profits back to the vault and later into strategies. The keep3r network takes the heavy lifting of doing these calls and running with the gas costs in exchange for keep3r tokens. This approach unloads humans from these housekeeping tasks."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"No Withdrawal Fee"}),": The one-time fee charged on balance upon withdrawal has been turned off for all vaults and only existed in the v1 iteration."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"read-more",children:"Read More"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"V2 developer docs:"})," ",(0,r.jsx)(a,{children:(0,r.jsx)(t.a,{href:"/developers/v2/getting-started",children:"https://docs.yearn.fi/developers/v2/getting-started"})})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"dApp:"})," ",(0,r.jsx)(a,{children:(0,r.jsx)(t.a,{href:"https://yearn.fi/vaults",children:"https://yearn.fi/vaults"})})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Guides"})," ",(0,r.jsx)(a,{children:(0,r.jsx)(t.a,{href:"/getting-started/guides/using-yearn-v2",children:"V2 Interface Guide"})})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},82055:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/yvaults-v2-9e37cc702495a17960aabd73daf83985.png"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var r=s(96540);const n={},a=r.createContext(n);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);