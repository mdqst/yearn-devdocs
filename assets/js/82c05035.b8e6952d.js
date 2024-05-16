"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[9048],{3905:(e,t,a)=>{a.d(t,{kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),y=n,v=u["".concat(l,".").concat(y)]||u[y]||c[y]||o;return a?r.createElement(v,i(i({ref:t},d),{},{components:a})):r.createElement(v,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={},i="yCRV Overview",s={unversionedId:"products/ylockers/ycrv/overview",id:"products/ylockers/ycrv/overview",title:"yCRV Overview",description:"What is yCRV",source:"@site/docs/getting-started/products/ylockers/ycrv/overview.md",sourceDirName:"products/ylockers/ycrv",slug:"/products/ylockers/ycrv/overview",permalink:"/getting-started/products/ylockers/ycrv/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1715865341,formattedLastUpdatedAt:"5/16/2024",frontMatter:{},sidebar:"mySidebar",previous:{title:"Overview",permalink:"/getting-started/products/ylockers/overview"},next:{title:"yCRV Interface Guide",permalink:"/getting-started/products/ylockers/ycrv/guide"}},l={},p=[{value:"What is yCRV",id:"what-is-ycrv",level:2},{value:"Base-token",id:"base-token",level:3},{value:"&#39;Activated&#39;-tokens",id:"activated-tokens",level:3},{value:"Staked yCRV",id:"staked-ycrv",level:2},{value:"LP&#39;d yCRV/CRV",id:"lpd-ycrvcrv",level:2},{value:"How yveCRV and yvBOOST functionality was migrated to yCRV",id:"how-yvecrv-and-yvboost-functionality-was-migrated-to-ycrv",level:2},{value:"Addresses",id:"addresses",level:2},{value:"Read More",id:"read-more",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ycrv-overview"},"yCRV Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/ni42qE6.png",alt:null})),(0,n.kt)("h2",{id:"what-is-ycrv"},"What is yCRV"),(0,n.kt)("p",null,"yCRV is Yearn's new and improved veCRV wrapper system designed to tokenize the different benefits of Yearn's veCRV position. This system is composed of a ",(0,n.kt)("a",{parentName:"p",href:"#base-token"},(0,n.kt)("inlineCode",{parentName:"a"},"base-token"))," called yCRV as well as 3 derivative tokens called ",(0,n.kt)("a",{parentName:"p",href:"#activated-tokens"},(0,n.kt)("inlineCode",{parentName:"a"},"activated tokens")),"."),(0,n.kt)("h3",{id:"base-token"},"Base-token"),(0,n.kt)("p",null,"yCRV is the base-token, which carries no native rewards, but lets users easily enter into the other 'activated' tokens that do."),(0,n.kt)("p",null,"New yCRV can be minted in two ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Lock CRV to Yearn's veCRV position (permanent 1-way lock).")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"or")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Migrate from legacy tokens ",(0,n.kt)("a",{parentName:"li",href:"#how-yvecrv-and-veboost-functionality-was-migrated-to-ycrv"},"yveCRV and yvBOOST"),".")),(0,n.kt)("p",null,"Both operations mint yCRV to the user at a 1:1 rate. Users migrating from yvBOOST can use the zap at ",(0,n.kt)("a",{parentName:"p",href:"https://yearn.fi/ycrv"},"https://yearn.fi/ycrv")," to efficiently unwrap their tokens to yveCRV and migrate to yCRV in a single step. Of course, users can also choose to purchase yCRV from the new Curve factory pool: ",(0,n.kt)("a",{parentName:"p",href:"https://curve.fi/#/ethereum/pools/factory-v2-280/deposit"},"https://curve.fi/#/ethereum/pools/factory-v2-280/deposit")),(0,n.kt)("h3",{id:"activated-tokens"},"'Activated'-tokens"),(0,n.kt)("p",null,"Yearn passes all benefits of its veCRV position on to yCRV users who hold one of its ",(0,n.kt)("strong",{parentName:"p"},"activated-tokens:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#staked-ycrv"},(0,n.kt)("strong",{parentName:"a"},"st-yCRV (Staking Rewards):"))," ",(0,n.kt)("a",{parentName:"li",href:"https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432"},"yVault")," that receives admin fees and vote incentives from locked CRV."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#lpd-ycrvcrv"},(0,n.kt)("strong",{parentName:"a"},"lp-yCRV (Liquidity Pool Rewards):"))," yVault for CRV LP tokens, autocompounds emissions and fees.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: a third activated token, vl-yCRV, was planned but not rolled out due to a lack of demand.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/yearn/yearn-devdocs/assets/7863230/b0988ee4-4160-4680-9cee-fe6a6ef5b138",alt:"image"})),(0,n.kt)("h2",{id:"staked-ycrv"},"Staked yCRV"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/IgpIhKN.png",alt:null})),(0,n.kt)("p",null,"Staked yCRV is designed to be a 'set and forget' yield-optimized position for yCRV users. The source of yield comes from two primary places:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Admin Fees:"),' Every week, veCRV holders earn weekly "admin fees" from Curve protocol. Staked yCRV is where 100% of admin fees earned by Yearn\'s veCRV position are sent and auto-compounded into more yCRV.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Vote Incentives:")," For all the yCRV within st-yCRV, 1 veCRV worth of vote power will be used to vote in favor of the Curve gauge which optimizes vote incentive revenue for st-yCRV users. Vote incentives (or misc. revenue) collected from these votes will be allocated as supplemental yield to st-yCRV users.")),(0,n.kt)("p",null,"Under the hood, st-yCRV is a Yearn v2 vault, allowing users to sit back, relax and have their underlying token compounded by a strategy that sells 3CRV and some claimed vote incentives into yCRV."),(0,n.kt)("h2",{id:"lpd-ycrvcrv"},"LP'd yCRV/CRV"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/3JNhzWR.png",alt:null})),(0,n.kt)("p",null,"Liquidity Pool'd yCRV provides liquidity to the new CRV pool on Curve, and lp-yCRV holders receive this LP fees and emissions. When you zap to this token, under the hood, you are entering an LP position in the yCRV/CRV pool and depositing the LP tokens into the lp-yCRV yVault."),(0,n.kt)("p",null,"This is also a Yearn v2 vault with a strategy that deposits all CRV emissions generated back into the pool to grow the position. Like st-yCRV this is designed to be a set and forget token that auto harvests and auto compound rewards."),(0,n.kt)("p",null,"Yearn will mark 1 veCRV worth of voting power for every 1 yCRV in this position to vote in favor of yCRV Curve gauge - increasing CRV emissions to users."),(0,n.kt)("h2",{id:"how-yvecrv-and-yvboost-functionality-was-migrated-to-ycrv"},"How yveCRV and yvBOOST functionality was migrated to yCRV"),(0,n.kt)("p",null,"yveCRV and yvBOOST are being deprecated, and there is a migration path available to users. The functionality of both was integrated into ",(0,n.kt)("a",{parentName:"p",href:"#staked-ycrv"},"st-yCRV")," so if you are looking for the same benefits check the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.yearn.fi/getting-started/products/ylockers/ycrv/guide"},"guide")," on how to migrate from the legacy tokens using yearn's UI"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/Htl3AgP.png",alt:null})),(0,n.kt)("h2",{id:"addresses"},"Addresses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"yCRV:")," ",(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/token/0xFCc5c47bE19d06BF83eB04298b026F81069ff65b"},"0xFCc5c47bE19d06BF83eB04298b026F81069ff65b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"st-yCRV (vault):")," ",(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/token/0x27B5739e22ad9033bcBf192059122d163b60349D"},"0x27B5739e22ad9033bcBf192059122d163b60349D")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"lp-yCRV (DEPRECATED, The v2 pool is more efficient and has a price oracle):")," ",(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/token/0xc97232527B62eFb0D8ed38CF3EA103A6CcA4037e"},"0xc97232527B62eFb0D8ed38CF3EA103A6CcA4037e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"lp-yCRV v2 (vault):")," ",(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/token/0x6E9455D109202b426169F0d8f01A3332DAE160f3"},"0x6E9455D109202b426169F0d8f01A3332DAE160f3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CRV/yCRV Curve Pool:")," ",(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/token/0x453D92C7d4263201C69aACfaf589Ed14202d83a4"},"0x453D92C7d4263201C69aACfaf589Ed14202d83a4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ZapYCRV.vy :")," ",(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/token/0x01D7f32B6E463c96c00575fA97B8224326C6A6B9"},"0x01D7f32B6E463c96c00575fA97B8224326C6A6B9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"yCRV Interface:")," ",(0,n.kt)("a",{parentName:"li",href:"https://yearn.fi/ycrv"},"https://yearn.fi/ycrv"))),(0,n.kt)("h2",{id:"read-more"},"Read More"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.yearn.fi/getting-started/products/ylockers/ycrv/guide"},"yCRV Interface Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.yearn.fi/getting-started/products/ylockers/ycrv/faq"},"yCRV FAQ"))))}d.isMDXComponent=!0}}]);