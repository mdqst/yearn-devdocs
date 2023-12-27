"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[1864],{3905:(e,t,a)=>{a.d(t,{kt:()=>u});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=n,m=u["".concat(l,".").concat(c)]||u[c]||h[c]||s;return a?i.createElement(m,r(r({ref:t},p),{},{components:a})):i.createElement(m,r({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var d=2;d<s;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));const s={},r="Overview",o={unversionedId:"products/yeth/overview",id:"products/yeth/overview",title:"Overview",description:"yETH",source:"@site/docs/getting-started/products/yeth/overview.md",sourceDirName:"products/yeth",slug:"/products/yeth/overview",permalink:"/getting-started/products/yeth/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1696361486,formattedLastUpdatedAt:"10/3/2023",frontMatter:{},sidebar:"mySidebar",previous:{title:"Vaults Version 3",permalink:"/getting-started/products/yvaults/v3"},next:{title:"Overview",permalink:"/getting-started/products/ylockers/overview"}},l={},d=[{value:"yETH",id:"yeth",level:2},{value:"Staked yETH (st-yETH)",id:"staked-yeth-st-yeth",level:2},{value:"Pool Weights for each LST",id:"pool-weights-for-each-lst",level:2},{value:"Example",id:"example",level:3},{value:"Single-Sided Deposits and Withdrawals",id:"single-sided-deposits-and-withdrawals",level:2},{value:"Single-Sided Deposits",id:"single-sided-deposits",level:3},{value:"Single-Sided Withdrawals",id:"single-sided-withdrawals",level:3},{value:"Examples",id:"examples",level:3},{value:"Contracts &amp; Roles",id:"contracts--roles",level:2},{value:"Management Role",id:"management-role",level:2},{value:"Pause mode",id:"pause-mode",level:3},{value:"Killed mode",id:"killed-mode",level:3},{value:"Guardian Role",id:"guardian-role",level:2},{value:"Protocol Specs",id:"protocol-specs",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"How does yETH earn APY?",id:"how-does-yeth-earn-apy",level:3},{value:"What other benefits does yETH give holders?",id:"what-other-benefits-does-yeth-give-holders",level:3},{value:"How is yield passed onto stakers?",id:"how-is-yield-passed-onto-stakers",level:3},{value:"Can I withdraw multiple LSDs?",id:"can-i-withdraw-multiple-lsds",level:3},{value:"Is there slippage with proportional withdrawal?",id:"is-there-slippage-with-proportional-withdrawal",level:3}],h={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("h2",{id:"yeth"},"yETH"),(0,n.kt)("p",null,"yETH is a user-governed liquidity pool token consisting of various Ethereum Liquid Staking Derivatives (LSTs)."),(0,n.kt)("p",null,"The yETH protocol is an Automated Market Maker (AMM) for LSTs. Each LST in the yETH pool is priced according to the amount of ",(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/en/upgrades/beacon-chain/"},"beacon chain")," ETH it represents. This lets users deposit their LSTs into the pool and receive yETH tokens pegged 1:1 with beacon chain ETH. Users can also stake their yETH tokens to mint st-yETH, accrue yield, and participate in yETH governance."),(0,n.kt)("p",null,"This AMM model, combined with the governance and incentive mechanisms of the yETH protocol, aims to provide an optimal risk-adjusted yield for ETH staking by dynamically adjusting the weights of the LSTs in the pool. It also offers users flexibility with single-sided deposits and withdrawals, and maintains the pool's balance and diversification through a weight management system."),(0,n.kt)("p",null,"The yETH protocol is governed by its users who can vote to adjust the weights of the LSTs in the pool, helping to maximize yield and mitigate risks associated with individual LSTs."),(0,n.kt)("p",null,"All yields generated by yETH go to Staked yETH (st-yETH) holders, making yETH an ideal token for Liquidity Providing in stableswap pools like those on Curve. To acquire yETH, users can mint yETH by depositing LSTs or swap against the yETH/ETH Curve pool."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Source Repo: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/yearn/yETH"},"https://github.com/yearn/yETH"))),(0,n.kt)("h2",{id:"staked-yeth-st-yeth"},"Staked yETH (st-yETH)"),(0,n.kt)("p",null,"Users stake their yETH to mint st-yETH, accrue yield, and later unstake st-yETH to receive yETH back according to their earnings. Stakers receive all yield and slashings from the beacon chain (Ethereum proof-of-stake validators) and earn incentives if they participate and vote in yETH governance."),(0,n.kt)("p",null,"By bundling LSTs, st-yETH aims to generate the best risk-adjusted yield from ETH staking. Through protocol governance, st-yETH users can readjust pool weights to maximize yield while mitigating catastrophic scenarios where one or several LSTs in the yETH composition suffer adverse events like de-pegging or security incidents."),(0,n.kt)("h2",{id:"pool-weights-for-each-lst"},"Pool Weights for each LST"),(0,n.kt)("p",null,"In yETH, each Liquid Staking Derivative (LST) has an assigned weight representing its proportion in the pool. The weight management system ensures that the pool remains diversified and balanced. As an LST performs well or gains popularity, its weight in the pool may increase, attracting more liquidity and providing better returns. Conversely, if an LST underperforms or faces issues, its weight may decrease, reducing its impact on the overall pool performance. This dynamic adjustment helps maintain an optimal risk-adjusted yield for yETH users."),(0,n.kt)("p",null,'For each epoch, users can vote to adjust the weights of the LSTs in the pool. The voting process also involves a "do nothing" option, allowing the current weight distribution to remain unchanged. If a new LST is added during the voting process, it starts at 0% weight and gradually increases to 1% in the first epoch. In the subsequent epoch, they participate like all other LSTs.'),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"Suppose we have four LSTs: A, B, C, and D with weights 10%, 20%, 30%, and 40% respectively in epoch n. For the next epoch (n+1), C has incentives worth $100."),(0,n.kt)("p",null,"The voting outcome for epoch n+1 is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Do nothing: 30%"),(0,n.kt)("li",{parentName:"ul"},"A: 7%"),(0,n.kt)("li",{parentName:"ul"},"B: 10%"),(0,n.kt)("li",{parentName:"ul"},"C: 43%"),(0,n.kt)("li",{parentName:"ul"},"D: 10%")),(0,n.kt)("p",null,"Here's how the voting outcome affects the weights:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'The "do nothing" vote is distributed to the current weight, reducing the total redistribution to 7%.'),(0,n.kt)("li",{parentName:"ol"},"The incentives for voting are distributed only to those who explicitly voted for a particular LST, making the incentive system more effective."),(0,n.kt)("li",{parentName:"ol"},"If a new LST, say E, is added during the voting process, they start at 0% weight and do not fight for the 7% redistribution. They are gradually increased to 1% in the first epoch. In the next epoch, they participate like all other LSTs.")),(0,n.kt)("h2",{id:"single-sided-deposits-and-withdrawals"},"Single-Sided Deposits and Withdrawals"),(0,n.kt)("p",null,"Single-sided deposits and withdrawals allow users to add or remove a specific asset from the pool. This differs from balanced operations where users deposit or withdraw a proportionate amount of all assets in the pool. Single-sided operations can be more convenient but may also incur bonuses or penalties."),(0,n.kt)("h3",{id:"single-sided-deposits"},"Single-Sided Deposits"),(0,n.kt)("p",null,"When a user makes a single-sided deposit, they add a specific amount of one asset to the pool. The system calculates the equivalent amount of yETH tokens to mint based on the current rate of the deposited asset."),(0,n.kt)("p",null,"However, single-sided deposits can distort the balance of assets in the pool. The system applies a deposit penalty if the deposited asset's weight increases above its target weight due to the deposit. This penalty reduces the amount of yETH tokens minted for the depositor, making the deposit operation more expensive. The penalty serves as an incentive for users to maintain the balance of assets in the pool."),(0,n.kt)("p",null,"Conversely, the system applies a deposit bonus if the deposited asset's weight is below its target weight. This bonus increases the yETH tokens minted for the depositor, making the deposit operation cheaper. The bonus serves as an incentive for users to restore the balance of assets in the pool."),(0,n.kt)("h3",{id:"single-sided-withdrawals"},"Single-Sided Withdrawals"),(0,n.kt)("p",null,"Users who make a single-sided withdrawal burn a specific amount of yETH tokens to withdraw one asset from the pool. The system calculates the amount of the asset to send based on the current rate."),(0,n.kt)("p",null,"Like single-sided deposits, single-sided withdrawals can also distort the balance of assets in the pool. If the withdrawn asset's weight decreases below its target weight due to the withdrawal, the system applies a withdrawal penalty. This penalty reduces the amount of the asset sent to the withdrawer, making the withdrawal operation more expensive."),(0,n.kt)("p",null,"Conversely, the system applies a withdrawal bonus if the withdrawn asset's weight exceeds its target weight. This bonus increases the amount of the asset sent to the withdrawer, effectively making the withdrawal operation cheaper."),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Let's consider a pool with two assets, A and B, with a target weight of 50%. Due to market fluctuations, the current weights are 60% for A and 40% for B."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If a user deposits asset A, they will incur a deposit penalty because the deposit increases the weight of A above its target weight. The system will mint fewer yETH tokens for the depositor than the rate would suggest."),(0,n.kt)("li",{parentName:"ul"},"If a user deposits asset B, they will receive a deposit bonus because the deposit brings the weight of B closer to its target weight. The system will mint more yETH tokens for the depositor than the rate would suggest."),(0,n.kt)("li",{parentName:"ul"},"If a user withdraws asset A, they will receive a withdrawal bonus because the withdrawal brings the weight of A closer to its target weight. The system will send more asset A to the withdrawer than the rate would suggest."),(0,n.kt)("li",{parentName:"ul"},"If a user withdraws asset B, they will incur a withdrawal penalty because the withdrawal decreases the weight of B below its target weight. The system will send less asset B to the withdrawer than the rate would suggest.")),(0,n.kt)("p",null,"For a deeper dive into the math behind the calculation of yETH weighted stable swap check this paper: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yearn/yETH/blob/main/whitepaper/derivation.pdf"},"https://github.com/yearn/yETH/blob/main/whitepaper/derivation.pdf")),(0,n.kt)("h2",{id:"contracts--roles"},"Contracts & Roles"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Address"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"yETH"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x1BED97CBC3c24A4fb5C069C6E311a967386131f7"},(0,n.kt)("inlineCode",{parentName:"a"},"0x1BED97CBC3c24A4fb5C069C6E311a967386131f7")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"st-yETH"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x583019fF0f430721aDa9cfb4fac8F06cA104d0B4"},(0,n.kt)("inlineCode",{parentName:"a"},"0x583019fF0f430721aDa9cfb4fac8F06cA104d0B4")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Management"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xbBBBBbbB6B942883EAd4976882C99201108c784d"},(0,n.kt)("inlineCode",{parentName:"a"},"0xbBBBBbbB6B942883EAd4976882C99201108c784d")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Protocol Owned Liquidity"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x929401e30Aab6bd648dEf2d30FF44952BaB04478"},(0,n.kt)("inlineCode",{parentName:"a"},"0x929401e30Aab6bd648dEf2d30FF44952BaB04478")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bootstrap: Deposit, Vote, Claim Incentives"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x41B994C192183793bB9cc35bAAb8bD9C6885c6bf"},(0,n.kt)("inlineCode",{parentName:"a"},"0x41B994C192183793bB9cc35bAAb8bD9C6885c6bf")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bootstrap: Claim st-yETH"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x7cf484D9d16BA26aB3bCdc8EC4a73aC50136d491"},(0,n.kt)("inlineCode",{parentName:"a"},"0x7cf484D9d16BA26aB3bCdc8EC4a73aC50136d491")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Guardian"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xDC775e813cDB38a4f02c4BAd3942319088018eFA"},(0,n.kt)("inlineCode",{parentName:"a"},"0xDC775e813cDB38a4f02c4BAd3942319088018eFA")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pool"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x2cced4ffA804ADbe1269cDFc22D7904471aBdE63"},(0,n.kt)("inlineCode",{parentName:"a"},"0x2cced4ffA804ADbe1269cDFc22D7904471aBdE63")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rate Providers"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x4e322aeAf355dFf8fb9Fd5D18F3D87667E8f8316"},(0,n.kt)("inlineCode",{parentName:"a"},"0x4e322aeAf355dFf8fb9Fd5D18F3D87667E8f8316")))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Due to a redeploy of st-yETH during the bootstrap process the first st-yETH contract has been deprecated, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Bootstrap: Claim st-yETH")," contract to claim the new version if you participated in the bootstrap phase.")),(0,n.kt)("h2",{id:"management-role"},"Management Role"),(0,n.kt)("p",null,"Trusted addresses with privileged access for limited operations. Should eventually be replaced by a smart contract:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Can start a gradual weight change, as long as no weight change is active yet."),(0,n.kt)("li",{parentName:"ul"},"Can whitelist a new asset, which sets an initial weight, sets the rate provider, and requires an initial deposit. New assets can only be whitelisted if no weight change has been scheduled yet."),(0,n.kt)("li",{parentName:"ul"},"Can update the rate provider for every whitelisted asset."),(0,n.kt)("li",{parentName:"ul"},"Can approve rate increases above 10%."),(0,n.kt)("li",{parentName:"ul"},"Can update the staking contract."),(0,n.kt)("li",{parentName:"ul"},"Can set the pool swap fee."),(0,n.kt)("li",{parentName:"ul"},"Can set the tolerance range."),(0,n.kt)("li",{parentName:"ul"},"Can set the new management address."),(0,n.kt)("li",{parentName:"ul"},"Can set the new guardian addresses."),(0,n.kt)("li",{parentName:"ul"},"Can trigger ",(0,n.kt)("inlineCode",{parentName:"li"},"pause mode"),"."),(0,n.kt)("li",{parentName:"ul"},"Can trigger ",(0,n.kt)("inlineCode",{parentName:"li"},"killed mode"),".")),(0,n.kt)("h3",{id:"pause-mode"},"Pause mode"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This mode is to be activated in the event of extreme market conditions or detected suspicious behavior, either in the protocol itself or in the underlying LST tokens that back it.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No user may swap assets with the contract."),(0,n.kt)("li",{parentName:"ul"},"No user may deposit assets into the contract."),(0,n.kt)("li",{parentName:"ul"},"Users may only withdraw assets in a balanced manner, single-sided withdrawals are not allowed."),(0,n.kt)("li",{parentName:"ul"},"Weights, rates, and rate providers cannot be updated during this mode."),(0,n.kt)("li",{parentName:"ul"},"Management or guardian can undo pause mode to resume normal operation.")),(0,n.kt)("h3",{id:"killed-mode"},"Killed mode"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This mode is to be activated in the event of critical failures, whether in the protocol itself or in any of the underlying LST tokens that back it. This can also be used to migrate to a new version of the yETH protocol.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No user may deposit assets into the contract."),(0,n.kt)("li",{parentName:"ul"},"Users may only withdraw assets in a balanced manner."),(0,n.kt)("li",{parentName:"ul"},"The reward controller may not update the beacon chain amounts."),(0,n.kt)("li",{parentName:"ul"},"Pause mode may not be undone.")),(0,n.kt)("p",null,"There is no way to undo ",(0,n.kt)("inlineCode",{parentName:"p"},"killed mode"),"."),(0,n.kt)("h2",{id:"guardian-role"},"Guardian Role"),(0,n.kt)("p",null,"Trusted addresses with emergency privileges:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Can trigger pause mode.")),(0,n.kt)("h2",{id:"protocol-specs"},"Protocol Specs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The yETH specification can be found in the source repo: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/yearn/yETH/blob/main/SPECIFICATION.md"},"https://github.com/yearn/yETH/blob/main/SPECIFICATION.md"))),(0,n.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,n.kt)("h3",{id:"how-does-yeth-earn-apy"},"How does yETH earn APY?"),(0,n.kt)("p",null,"yETH earns APY through various sources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Swap fee income from the Automated Market Maker (AMM)"),(0,n.kt)("li",{parentName:"ul"},"Incentives fee income, which are incentives for staker participation in governance"),(0,n.kt)("li",{parentName:"ul"},"Liquid Staking Derivative (LSD) income from staked ETH yield"),(0,n.kt)("li",{parentName:"ul"},"Buying LSTs at a discount"),(0,n.kt)("li",{parentName:"ul"},"Whitelisting fees")),(0,n.kt)("p",null,"However, there are also deductions such as Beacon Chain slashings and a 10% Yearn performance fee on profits. "),(0,n.kt)("p",null,"Please note that yield is paid out one week after it is generated. The yield generated in week N is streamed out in week N+1."),(0,n.kt)("h3",{id:"what-other-benefits-does-yeth-give-holders"},"What other benefits does yETH give holders?"),(0,n.kt)("p",null,"yETH provides diversification by holding a basket of LSDs, which helps to spread the risk."),(0,n.kt)("h3",{id:"how-is-yield-passed-onto-stakers"},"How is yield passed onto stakers?"),(0,n.kt)("p",null,"LSD Protocols generate yield and update their on-chain rates. This results in yETH being minted and sent to st-yETH."),(0,n.kt)("h3",{id:"can-i-withdraw-multiple-lsds"},"Can I withdraw multiple LSDs?"),(0,n.kt)("p",null,"Yes, you can withdraw multiple LSDs or just one LSD. However, your withdrawal cannot cause an LSD to leave its safety bands around its target weight. For example, if a pool has a weight of 20% and a band of 5%, the actual weight is allowed to be between 15% and 25%. This caps losses to at most 25%, assuming that token permanently depegs and goes to 0. In that worst-case scenario, yETH depegs to 0.75 ETH, because you can always do a balanced withdrawal of all the assets, of which only 25% is worthless. Compare this with holding the token by yourself, you\u2019d be -100%."),(0,n.kt)("h3",{id:"is-there-slippage-with-proportional-withdrawal"},"Is there slippage with proportional withdrawal?"),(0,n.kt)("p",null,"No, there is no slippage with proportional withdrawal."))}p.isMDXComponent=!0}}]);