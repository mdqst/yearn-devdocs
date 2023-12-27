"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[5539],{3905:(e,t,a)=>{a.d(t,{kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(a),y=n,u=c["".concat(s,".").concat(y)]||c[y]||p[y]||i;return a?r.createElement(u,o(o({ref:t},d),{},{components:a})):r.createElement(u,o({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const i={},o="yPRISMA",l={unversionedId:"products/ylockers/yprisma/overview",id:"products/ylockers/yprisma/overview",title:"yPRISMA",description:"Claim and deposit at yprisma.yearn.fi",source:"@site/docs/getting-started/products/ylockers/yprisma/overview.md",sourceDirName:"products/ylockers/yprisma",slug:"/products/ylockers/yprisma/overview",permalink:"/getting-started/products/ylockers/yprisma/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1703645377,formattedLastUpdatedAt:"12/27/2023",frontMatter:{},sidebar:"mySidebar",previous:{title:"yCRV Interface Guide",permalink:"/getting-started/products/ylockers/ycrv/guide"},next:{title:"yPRISMA FAQ",permalink:"/getting-started/products/ylockers/yprisma/farming"}},s={},m=[{value:"What is yPRISMA?",id:"what-is-yprisma",level:2},{value:"How do I obtain yPRISMA?",id:"how-do-i-obtain-yprisma",level:2},{value:"Why would I claim my emissions as yPRISMA?",id:"why-would-i-claim-my-emissions-as-yprisma",level:2},{value:"How can I claim my emissions as yPRISMA?",id:"how-can-i-claim-my-emissions-as-yprisma",level:2},{value:"What can I do with my yPRISMA?",id:"what-can-i-do-with-my-yprisma",level:2},{value:"Addresses",id:"addresses",level:2},{value:"Core Protocol",id:"core-protocol",level:5},{value:"Staking Farms",id:"staking-farms",level:5},{value:"Read More",id:"read-more",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yprisma"},"yPRISMA"),(0,n.kt)("p",null,"Claim and deposit at ",(0,n.kt)("a",{parentName:"p",href:"https://yprisma.yearn.fi"},"yprisma.yearn.fi")),(0,n.kt)("h2",{id:"what-is-yprisma"},"What is yPRISMA?"),(0,n.kt)("p",null,"yPRISMA is Yearn's latest liquid locker, built for Prisma Finance's governance token. It's important to know the basics of liquid locker token like yPRISMA:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Represents 1 vePRISMA max-locked to Yearn "),(0,n.kt)("li",{parentName:"ul"},"Not redeemable for the underlying locked PRISMA"),(0,n.kt)("li",{parentName:"ul"},"Has no transfer restrictions and can always be swapped in DEX pools")),(0,n.kt)("p",null,"Governance for Prisma is controlled by vePRISMA, a locked token position that grants users voting power, fee revenue, and boosted PRISMA emissions."),(0,n.kt)("p",null,"Because all PRISMA emissions come as locked vePRISMA, it is often inconvenient for users who want to avoid managing their position or want to cash out. yPRISMA aims to offer users a tokenized version of this position, giving them instant liquidity and auto-managing governance participation to maximize yield."),(0,n.kt)("p",null,"With built-in boost delegation coming soon, users who hold yPRISMA will be able to boost their yields on any of their positions within the Prisma ecosystem, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Prisma Vaults (CDPs)"),(0,n.kt)("li",{parentName:"ul"},"Stability Pool"),(0,n.kt)("li",{parentName:"ul"},"Curve / Convex Farming"),(0,n.kt)("li",{parentName:"ul"},"Yearn vault farming (coming soon!)")),(0,n.kt)("h2",{id:"how-do-i-obtain-yprisma"},"How do I obtain yPRISMA?"),(0,n.kt)("p",null,"There are a few ways to get yPRISMA:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Buy yPRISMA from the Curve pool"),(0,n.kt)("li",{parentName:"ul"},"Claim your emissions directly from yPRISMA from ",(0,n.kt)("a",{parentName:"li",href:"https://prismafinance.com"},"https://prismafinance.com")," and see more info here: ",(0,n.kt)("a",{parentName:"li",href:"https://yprisma.yearn.fi/"},"https://yprisma.yearn.fi/")),(0,n.kt)("li",{parentName:"ul"},"Mint 1:1 directly from PRISMA tokens"),(0,n.kt)("li",{parentName:"ul"},"Claim your PRISMA airdrop directly to yPRISMA")),(0,n.kt)("h2",{id:"why-would-i-claim-my-emissions-as-yprisma"},"Why would I claim my emissions as yPRISMA?"),(0,n.kt)("p",null,"There are several key reasons to claim your emissions as yPRISMA instead of locking yourself."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"When minting yPRISMA, you get to utilize Yearn's boost, which is among the highest of total Prisma accounts."),(0,n.kt)("li",{parentName:"ol"},"yPRISMA is minted 1:1 against your max locked claim amount."),(0,n.kt)("li",{parentName:"ol"},"yPRISMA is fully transferrable and can be swaped on DEXes like Curve, or staked for benefits in the ecosystem.")),(0,n.kt)("h2",{id:"how-can-i-claim-my-emissions-as-yprisma"},"How can I claim my emissions as yPRISMA?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Browse to ",(0,n.kt)("a",{parentName:"p",href:"https://app.prismafinance.com/rewards"},"https://app.prismafinance.com/rewards"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Select "Lock All"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'In the modal, choose "Liquid Lockers"'),(0,n.kt)("img",{src:"/img/yprisma-liquid-lockers.png",alt:"Liquid Lockers",width:"500"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tick the checkbox for Yearn's ",(0,n.kt)("inlineCode",{parentName:"p"},"yprisma.eth"),' delegator and press "Confirm".'),(0,n.kt)("img",{src:"/img/yprisma-boost-rental.png",alt:"Liquid Lockers",width:"500"}))),(0,n.kt)("p",null,"When the transaction is complete, congratulations! You now have yPRISMA tokens in your wallet!"),(0,n.kt)("h2",{id:"what-can-i-do-with-my-yprisma"},"What can I do with my yPRISMA?"),(0,n.kt)("p",null,"Until Prisma governance begins distributing fee revenue, the best thing to do with your yPRISMA is to farm wstETH or dYFI yield on ",(0,n.kt)("a",{parentName:"p",href:"https://yprisma.yearn.fi"},"yprisma.yearn.fi"),"."),(0,n.kt)("h2",{id:"addresses"},"Addresses"),(0,n.kt)("h5",{id:"core-protocol"},"Core Protocol"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Address"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"yPRISMA"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xe3668873d944e4a949da05fc8bde419eff543882"},(0,n.kt)("inlineCode",{parentName:"a"},"0xe3668873d944e4a949da05fc8bde419eff543882")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"yPRISMA Locker"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x90be6DFEa8C80c184C442a36e17cB2439AAE25a7"},(0,n.kt)("inlineCode",{parentName:"a"},"0x90be6DFEa8C80c184C442a36e17cB2439AAE25a7")))))),(0,n.kt)("h5",{id:"staking-farms"},"Staking Farms"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Address"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"yPRISMA Staking (yvmkUSD-A rewards)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xE3EE395C9067dD15C492Ca950B101a7d6c85b5Fc"},(0,n.kt)("inlineCode",{parentName:"a"},"0xE3EE395C9067dD15C492Ca950B101a7d6c85b5Fc")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"*yPRISMA Staking (wstETH rewards)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x774a55C3Eeb79929fD445Ae97191228Ab39c4d0f"},(0,n.kt)("inlineCode",{parentName:"a"},"0x774a55C3Eeb79929fD445Ae97191228Ab39c4d0f")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"*yPRISMA Staking (dYFI rewards)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x93283184650f4d3B4253ABd00978176732118428"},(0,n.kt)("inlineCode",{parentName:"a"},"0x93283184650f4d3B4253ABd00978176732118428")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"*yPRISMA LP Staking (yPRISMA rewards)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x6806D62AAdF2Ee97cd4BCE46BF5fCD89766EF246"},(0,n.kt)("inlineCode",{parentName:"a"},"0x6806D62AAdF2Ee97cd4BCE46BF5fCD89766EF246")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"*yCRV Staking (yPRISMA rewards)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x84c94d739e075b3C7431bdb1A005F0412DF828a5"},(0,n.kt)("inlineCode",{parentName:"a"},"0x84c94d739e075b3C7431bdb1A005F0412DF828a5")))))),(0,n.kt)("p",null,"*",(0,n.kt)("em",{parentName:"p"},"expired")),(0,n.kt)("h2",{id:"read-more"},"Read More"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/iearn/yprisma-roadmap-8fb3e2376594"},"yPRISMA Roadmap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.yearn.finance/getting-started/products/yprisma/farming"},"Introduction to Yearn PRISMA Incentives Farming"))))}d.isMDXComponent=!0}}]);