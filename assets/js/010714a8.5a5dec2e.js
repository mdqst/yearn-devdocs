"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[4534],{3905:(e,t,a)=>{a.d(t,{kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1796:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={description:"This documentation only covers v1 vaults."},i="v1 Vaults Overview",l={unversionedId:"v1/introduction",id:"v1/introduction",title:"v1 Vaults Overview",description:"This documentation only covers v1 vaults.",source:"@site/docs/developers/v1/introduction.md",sourceDirName:"v1",slug:"/v1/introduction",permalink:"/developers/v1/introduction",draft:!1,tags:[],version:"current",lastUpdatedAt:1633935865,formattedLastUpdatedAt:"10/11/2021",frontMatter:{description:"This documentation only covers v1 vaults."}},s={},d=[{value:"Protocol Contracts",id:"protocol-contracts",level:2},{value:"Vaults",id:"vaults",level:3},{value:"Controller",id:"controller",level:3},{value:"Registry",id:"registry",level:3},{value:"Strategies",id:"strategies",level:3},{value:"Treasury",id:"treasury",level:3},{value:"Governance",id:"governance",level:3},{value:"Vault management",id:"vault-management",level:4},{value:"Controller management",id:"controller-management",level:4},{value:"Strategy management",id:"strategy-management",level:4},{value:"Protocol Actors",id:"protocol-actors",level:2},{value:"User",id:"user",level:3},{value:"Keeper",id:"keeper",level:3},{value:"Strategist",id:"strategist",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"v1-vaults-overview"},"v1 Vaults Overview"),(0,r.kt)("p",null,"This document gives a ",(0,r.kt)("em",{parentName:"p"},"generalized and high level overview")," of how the protocol and its actors, smart contracts, and other services interact with each other. The aim is to build intuition about how Yearn products work."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All vaults are different. This is not a formal specification. Contracts and components are subject to change without notice."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/lehnberg/yearn-diagrams/master/yearn-protocol/yearn-protocol-v0.06.svg",alt:"yearn-protocol"})),(0,r.kt)("p",null,"All contracts are open source and available from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-protocol"},"/yearn-protocol")," GitHub repo."),(0,r.kt)("h2",{id:"protocol-contracts"},"Protocol Contracts"),(0,r.kt)("h3",{id:"vaults"},"Vaults"),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-protocol/blob/develop/contracts/vaults/yWETH.sol"},"yWETH.sol")),(0,r.kt)("p",null,"Vaults act as the representation of the user in the system, and is the internal customer for investments. There is one vault per deposit token, and they are agnostic to the strategies they interact with."),(0,r.kt)("p",null,"Their primary tasks are to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"process user deposits and withdrawals"),", minting or burning LP tokens as receipts for these;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"manage disposable funds"),", ensuring there is enough to satisfy the minimum amount available to handle withdrawals, and issuing withdrawal requests from strategies when more funds need to be added; and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deposit funds into strategies"),", when there is a surplus of funds in the vault above what's required to be kept at disposal.")),(0,r.kt)("h3",{id:"controller"},"Controller"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-protocol/blob/develop/contracts/controllers/Controller.sol"},"Controller.sol")),(0,r.kt)("p",null,"The Controller act as the gatekeeping interface between vaults and strategies and oversees communication and fund flows. Deposits and withdrawals in and out of strategies flow through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Controller"),". It keeps track of the addresses for the active vaults, strategies, tokens, and strategy rewards destination, acting as a pseudo-registry that verifies the origin and destination of a transaction. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Controller")," also handles strategy migration, moving funds from an old strategy to a new one."),(0,r.kt)("h3",{id:"registry"},"Registry"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-protocol/blob/develop/contracts/registries/YRegistry.sol"},"YRegistry.sol")),(0,r.kt)("p",null,"The registry is a wrapper of the controller that contains additional meta-data about active addresses. Its functionality is currently being expanded."),(0,r.kt)("h3",{id:"strategies"},"Strategies"),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-protocol/blob/develop/contracts/strategies/CurveYCRVVoter.sol"},"CurveYCRVVoter.sol")),(0,r.kt)("p",null,"Strategies are investment instruction sets, written by a ",(0,r.kt)("inlineCode",{parentName:"p"},"Strategist"),". They are agnostic to the vaults that use them."),(0,r.kt)("p",null,"Strategies execute step-by-step functions with the objective to generate yield. They do so by interacting with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"other Yearn services"),", such as vaults, lending, and insurance; and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"external 3rd party services"),", such as Aave, Curve, Chainlink and Maker.")),(0,r.kt)("p",null,"Rewards are claimed and re-invested into the strategies, with deductions for Management fees and for compensating the ",(0,r.kt)("inlineCode",{parentName:"p"},"Strategist"),"."),(0,r.kt)("h3",{id:"treasury"},"Treasury"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Treasury")," contract accumulates all the Management fees sent from the strategies. It's an intermediate contract that can convert between different tokens, currently normalizing all rewards into yCRV. It calls two functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toVoters()"),", sending part of the fees to the governance voters, as a reward for their participation; and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toGovernance()"),", sending part of the fees to the multi-sig to cover gas costs and other expenses.")),(0,r.kt)("h3",{id:"governance"},"Governance"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-protocol/blob/develop/contracts/strategies/StrategyYFIGovernance.sol"},"StrategyYFIGovernance.sol")),(0,r.kt)("p",null,"Yearn Governance is a combination of the YFI staking contract to participate in Governance voting, and the 6-of-9 multi-sig that executes the decisions by the YFI holders."),(0,r.kt)("p",null,"Governance manages the ",(0,r.kt)("inlineCode",{parentName:"p"},"Vaults"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Controller"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Strategies")," by calling functions on these contracts."),(0,r.kt)("h4",{id:"vault-management"},"Vault management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Set governing address"),", through ",(0,r.kt)("inlineCode",{parentName:"li"},"setGovernance()"),", in order to upgrade governance contracts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Set controller for the vault"),", through ",(0,r.kt)("inlineCode",{parentName:"li"},"setController()"),", in order to upgrade controllers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Set amount of disposable funds at hand in vault"),", through ",(0,r.kt)("inlineCode",{parentName:"li"},"setMin()"),", in order to manage how large withdrawal amounts require a Vault to issue a withdrawal request to a Strategy, via the Controller.")),(0,r.kt)("h4",{id:"controller-management"},"Controller management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Set governing address"),", through ",(0,r.kt)("inlineCode",{parentName:"li"},"setGovernance()"),", in order to upgrade governance contracts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add vaults")," for the Controller to manage, through ",(0,r.kt)("inlineCode",{parentName:"li"},"setVault()"),", in order to introduce new vaults."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Set address to receive management fees"),", through ",(0,r.kt)("inlineCode",{parentName:"li"},"setRewards()")," in order to upgrade the Treasury.")),(0,r.kt)("h4",{id:"strategy-management"},"Strategy management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Set Strategist address"),", through ",(0,r.kt)("inlineCode",{parentName:"li"},"setStrategist()"),", in order for Strategists to receive their rewards and to interact with the system."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add an approved Strategy"),", through ",(0,r.kt)("inlineCode",{parentName:"li"},"approveStrategy()")," on the Controller, in order for Strategists to be able to activate the Strategy in question."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remove an approved Strategy"),", through ",(0,r.kt)("inlineCode",{parentName:"li"},"revokeStrategy()")," on the Controller, in order to prevent Strategists from being able to activate the Strategy in question.")),(0,r.kt)("h2",{id:"protocol-actors"},"Protocol Actors"),(0,r.kt)("h3",{id:"user"},"User"),(0,r.kt)("p",null,"A Yearn end-user."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deposits funds into vaults, to receive LP tokens, through calling ",(0,r.kt)("inlineCode",{parentName:"li"},"deposit()"),";"),(0,r.kt)("li",{parentName:"ul"},"Withdraws funds from vaults, by depositing (effectively burning) LP tokens into vaults and receiving the corresponding deposit token amount back in return, through calling ",(0,r.kt)("inlineCode",{parentName:"li"},"withdraw()"),". If the vault does not have enough funds to handle the withdrawal, this triggers a cascading ",(0,r.kt)("inlineCode",{parentName:"li"},"withdraw()")," call via the ",(0,r.kt)("inlineCode",{parentName:"li"},"Controller")," to the Strategy to liquidate enough funds to process the withdrawal.")),(0,r.kt)("h3",{id:"keeper"},"Keeper"),(0,r.kt)("p",null,"Automated bot that calls contract functions. It queries the Registry to get the appropriate Vault and Strategy addresses and then calls:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"earn()")," on the Vault, which checks for funds available to be deposited into a Strategy and then deposits those."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"harvest()")," on the Strategy, which triggers the Strategy claim any rewards, pay management and Strategist fees, and re-invest the remainder into itself again.")),(0,r.kt)("h3",{id:"strategist"},"Strategist"),(0,r.kt)("p",null,"Creates and manages Strategies."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interacts with the Controller to set the active strategy, through ",(0,r.kt)("inlineCode",{parentName:"li"},"setStrategy()"),". ",(0,r.kt)("strong",{parentName:"li"},"Only Strategies approved by Governance can be set.")),(0,r.kt)("li",{parentName:"ul"},"Is paid the Strategist management fee directly from the Strategy.")))}p.isMDXComponent=!0}}]);