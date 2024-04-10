"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[3647],{3905:(t,e,a)=>{a.d(e,{kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(a),k=n,m=u["".concat(s,".").concat(k)]||u[k]||c[k]||o;return a?r.createElement(m,l(l({ref:e},p),{},{components:a})):r.createElement(m,l({ref:e},p))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4366:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={},l="Protocol Risks",i={unversionedId:"risks/protocol-risks",id:"risks/protocol-risks",title:"Protocol Risks",description:"Yearn\u2019s core products are the vaults. Each vault runs at least one strategy, and each strategy is exposed to at least one protocol. Strategy and protocol risks are described here and here respectively.",source:"@site/docs/resources/risks/protocol-risks.md",sourceDirName:"risks",slug:"/risks/protocol-risks",permalink:"/resources/risks/protocol-risks",draft:!1,tags:[],version:"current",lastUpdatedAt:1693865708,formattedLastUpdatedAt:"9/4/2023",frontMatter:{},sidebar:"mySidebar",previous:{title:"Auctions",permalink:"/resources/auctions"},next:{title:"Risk Scores",permalink:"/resources/risks/risk-score"}},s={},d=[{value:"Lending Protocols",id:"lending-protocols",level:2},{value:"Automated Market Makers",id:"automated-market-makers",level:2},{value:"Leverage-enabling protocols",id:"leverage-enabling-protocols",level:2},{value:"Liquidity mining protocols",id:"liquidity-mining-protocols",level:2}],c={toc:d};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"protocol-risks"},"Protocol Risks"),(0,n.kt)("p",null,"Yearn\u2019s core products are the vaults. Each vault runs at least one strategy, and each strategy is exposed to at least one protocol. Strategy and protocol risks are described ",(0,n.kt)("a",{parentName:"p",href:"https://docs.yearn.fi/resources/risks/strategy-risks"},"here")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.yearn.fi/resources/risks/protocol-risks"},"here")," respectively."),(0,n.kt)("p",null,"The key protocols to which Yearn\u2019s vaults are exposed are lending protocols, AMMs and protocols that enable leverage."),(0,n.kt)("h2",{id:"lending-protocols"},"Lending Protocols"),(0,n.kt)("p",null,"One of the simplest strategies is collateralized lending which involves lending assets on lending protocols to earn a yield. For example, the optimized lending strategy used by the Dai vault lends Dai on the highest yielding lending protocol."),(0,n.kt)("p",null,"Yearn\u2019s vaults are exposed to the lending protocols Aave, Compound Finance, dYdX and Alpha Homora."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Risk"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Governance"),(0,n.kt)("td",{parentName:"tr",align:null},"Admin key holders (or token holders) change the lending protocol adversely, e.g. accept risky assets with lenient risk parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Technological"),(0,n.kt)("td",{parentName:"tr",align:null},"Smart contract risk from interacting with lending protocols")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Liquidations do not occur as expected")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Market"),(0,n.kt)("td",{parentName:"tr",align:null},"The value of the loans exceed the value of the collateral")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Low demand for borrowing leads to low yields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Accepted assets become impaired")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,n.kt)("td",{parentName:"tr",align:null},"Incorrect price feed causes the collateral to go to such a value that the loan is liquidated")))),(0,n.kt)("h2",{id:"automated-market-makers"},"Automated Market Makers"),(0,n.kt)("p",null,"AMMs are used in Yearn\u2019s vault strategies to earn trading fees (and liquidity mining rewards if available) and to exchange liquidity mined tokens for the Want token."),(0,n.kt)("p",null,"Examples of the AMMs to which Yearn\u2019s vaults are exposed are Curve Finance, Sushiswap and Uniswap. Curve Finance is predominantly used to earn trading fees and farm CRV rewards, whereas Sushiswap and Uniswap are used to exchange liquidity mined tokens for the Want token."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Risk"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Market"),(0,n.kt)("td",{parentName:"tr",align:null},"Lack of liquidity for the token being exchanged")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Trading volumes reduce leading to lower fees")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Impermanent loss due to the pool\u2019s token prices changing relative to each other")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Technological"),(0,n.kt)("td",{parentName:"tr",align:null},"Smart contract risk from interacting with AMMs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Governance"),(0,n.kt)("td",{parentName:"tr",align:null},"Token holders vote to change the AMM adversely")))),(0,n.kt)("h2",{id:"leverage-enabling-protocols"},"Leverage-enabling protocols"),(0,n.kt)("p",null,"Leverage-enabling protocols are used in Yearn\u2019s vault strategies to increase the yield. This is possible when a non-leveraged strategy earns a higher return than the cost of borrowing."),(0,n.kt)("p",null,"Examples of the leverage-enabling protocols to which Yearn\u2019s vaults are exposed are Maker, Unit Protocol, Aave, dYdX and Cream.Finance."),(0,n.kt)("p",null,"Maker and Unit Protocol enable the minting of stablecoins against collateral. The stablecoins can then be invested in yield-bearing strategies."),(0,n.kt)("p",null,"Aave and dYdX offer flash loans which allows Yearn\u2019s strategies to take out a loan, deploy the capital in a strategy and repay the loan in one transaction."),(0,n.kt)("p",null,"Cream.Finance, in combination with Iron Bank, allows strategies to increase yield with protocol-to-protocol uncollateralized borrowing. This is because Yearn\u2019s strategies have been white-listed by Cream.Finance allowing them to borrow depositors\u2019 funds that have not been lent out, in order to deploy in strategies that have a greater return than the cost of borrowing."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Risk"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Governance"),(0,n.kt)("td",{parentName:"tr",align:null},"Multi-sig or token holders vote to change the protocol adversely")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Poorly chosen risk parameters for onboarded collateral of Maker or Unit Protocol, e.g. collateralization ratios that are too low")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Technological"),(0,n.kt)("td",{parentName:"tr",align:null},"Smart contract risk")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Market"),(0,n.kt)("td",{parentName:"tr",align:null},"Liquidations are not processed correctly on Maker or Unit Protocol")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Stablecoin peg is not maintained (Dai and USDP for Maker and Unit Protocol respectively)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Cost of uncollateralized borrowing from Cream.Finance increases such that Yearn\u2019s strategies cannot utilize it")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,n.kt)("td",{parentName:"tr",align:null},"Incorrect price feed leads to incorrect liquidation of positions  (Maker and Unit Protocol)")))),(0,n.kt)("h2",{id:"liquidity-mining-protocols"},"Liquidity mining protocols"),(0,n.kt)("p",null,"A core strategy for Yearn\u2019s vaults is to liquidity mine (or yield farm) protocols.\nLiquidity mining involves interacting with a protocol to earn the protocol\u2019s native tokens. The interaction can be as simple as staking an asset in a protocol\u2019s staking contract, or it can be more complicated such as staking SNX to mint sUSD in Synthetix to earn SNX rewards.\nIn most cases the liquidity mined token is exchanged for the Want token on an AMM. For example, in the Dai vault the COMP token is farmed by supplying Dai to Compound Finance to earn COMP rewards, which are exchanged for more Dai."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Risk"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Governance"),(0,n.kt)("td",{parentName:"tr",align:null},"Admin key holders change protocol adversely, e.g. introduce penalties for withdrawals or steal funds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Technological"),(0,n.kt)("td",{parentName:"tr",align:null},"Smart contract risk of protocol or rewards contract")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Market"),(0,n.kt)("td",{parentName:"tr",align:null},"Fall in price of token being farmed reducing the APY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Liquidity of liquidity mined token on AMM is reduced or removed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,n.kt)("td",{parentName:"tr",align:null},"Delays or inability to withdraw liquidity in an emergency")))),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://gov.yearn.fi/t/introducing-yearn-safe-farming-committee/10533"},"Safe Farming Committee")," considers these risks in detail and decides which protocols are secure."))}p.isMDXComponent=!0}}]);