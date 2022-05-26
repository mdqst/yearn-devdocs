"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[5258],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6674:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i={},s="Introduction",c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Yearn Finance is a suite of products in Decentralized Finance (DeFi) that provides yield generation, lending aggregation, and more on the blockchain. The protocol is maintained by various independent developers and is governed by YFI holders.",source:"@site/docs/getting-started/intro.md",sourceDirName:".",slug:"/intro",permalink:"/getting-started/intro",tags:[],version:"current",lastUpdatedBy:"Benjamin Samuels",lastUpdatedAt:1646387801,formattedLastUpdatedAt:"3/4/2022",frontMatter:{},sidebar:"mySidebar",next:{title:"Using Yearn",permalink:"/getting-started/using-yearn"}},l=[{value:"Vaults",id:"vaults",children:[]},{value:"Governance",id:"governance",children:[]},{value:"Communication Channels",id:"communication-channels",children:[]}],u={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Yearn Finance is a suite of products in Decentralized Finance (DeFi) that provides yield generation, lending aggregation, and more on the blockchain. The protocol is maintained by various independent developers and is governed by YFI holders."),(0,o.kt)("p",null,"You can find brief descriptions of Yearn's core products, the governance process, and links to active communication channels below."),(0,o.kt)("h2",{id:"vaults"},"Vaults"),(0,o.kt)("p",null,"Capital pools that automatically generate yield based on opportunities present in the market. Vaults benefit users by socializing gas costs, automating the yield generation and rebalancing process, and automatically shifting capital as opportunities arise. End users also do not need to have a proficient knowledge of the underlying protocols involved or DeFi, thus the Vaults represent a passive-investing strategy."),(0,o.kt)("h2",{id:"governance"},"Governance"),(0,o.kt)("p",null,"The Yearn ecosystem is controlled by YFI token holders who submit and vote on off-chain proposals that govern the ecosystem. Proposals that generate a majority support ","(",">","50% of the vote",")"," are implemented by a 9 member multi-signature wallet. Changes must be signed by 6 out of the 9 wallet signers in order to be implemented. The members of the multi-signature wallet were voted in by YFI holders and are subject to change from future governance votes. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yearn.finance/security/multisig"},"multisig documentation")," for the list of multisig signers. For more info about the governance process, please consult the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yearn.finance/resources/faq#governance"},"Governance FAQ")," and ",(0,o.kt)("a",{parentName:"p",href:"https://gov.yearn.finance/t/yip-61-governance-2-0/10460"},"YIP-61: Governance 2.0"),"."),(0,o.kt)("h2",{id:"communication-channels"},"Communication Channels"),(0,o.kt)("p",null,"Governance Forum ",(0,o.kt)("a",{parentName:"p",href:"https://gov.yearn.finance/"},"https://gov.yearn.finance/")),(0,o.kt)("p",null,"Discord ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/yearn"},"https://discord.gg/yearn")),(0,o.kt)("p",null,"Telegram ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/yearnfinance"},"https://t.me/yearnfinance")),(0,o.kt)("p",null,"Reddit ",(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/yearn_finance/"},"https://www.reddit.com/r/yearn_finance/")))}p.isMDXComponent=!0}}]);