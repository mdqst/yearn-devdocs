"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[4168],{1526:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var n=s(74848),r=s(28453);const t={},i="Overview",c={id:"products/veyfi",title:"Overview",description:"veYFI incorporates YIP-56: Buyback and Build funds into YFI tokenomics. Users can lock YFI tokens and receive veYFI, which allows them to boost vault rewards and vote on where bought-back YFI will be sent.",source:"@site/docs/getting-started/products/veyfi.md",sourceDirName:"products",slug:"/products/veyfi",permalink:"/getting-started/products/veyfi",draft:!1,unlisted:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/getting-started/products/veyfi.md",tags:[],version:"current",frontMatter:{},sidebar:"userDocsSidebar",previous:{title:"Overview",permalink:"/getting-started/products/yeth/overview"},next:{title:"Overview",permalink:"/getting-started/products/ybribe/overview"}},l={},a=[{value:"Specification",id:"specification",level:2},{value:"veYFI Overview",id:"veyfi-overview",level:2},{value:"dYFI as Gauges Reward",id:"dyfi-as-gauges-reward",level:3},{value:"Vault Gauges + Voting",id:"vault-gauges--voting",level:3},{value:"Vault Gauges Table",id:"vault-gauges-table",level:3},{value:"veYFI Reward Pool",id:"veyfi-reward-pool",level:3},{value:"Addresses",id:"addresses",level:2}];function o(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(d.p,{children:["veYFI incorporates ",(0,n.jsx)(d.a,{href:"https://gov.yearn.fi/t/yip-56-buyback-and-build/8929",children:"YIP-56: Buyback and Build"})," funds into YFI tokenomics. Users can lock YFI tokens and receive veYFI, which allows them to boost vault rewards and vote on where bought-back YFI will be sent."]}),"\n",(0,n.jsxs)(d.p,{children:["Contract Address: ",(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x90c1f9220d90d3966fbee24045edd73e1d588ad5",children:(0,n.jsx)(d.code,{children:"0x90c1f9220d90d3966fbee24045edd73e1d588ad5"})})]}),"\n",(0,n.jsx)(d.h2,{id:"specification",children:"Specification"}),"\n",(0,n.jsxs)(d.p,{children:["Governance Forum Thread: ",(0,n.jsx)(d.a,{href:"https://gov.yearn.fi/t/yip-65-evolving-yfi-tokenomics",children:"https://gov.yearn.fi/t/yip-65-evolving-yfi-tokenomics"})]}),"\n",(0,n.jsx)(d.h2,{id:"veyfi-overview",children:"veYFI Overview"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"Locking is similar to the ve-style program of Curve."}),"\n",(0,n.jsx)(d.li,{children:"YFI can be locked into veYFI, which is non-transferable."}),"\n",(0,n.jsxs)(d.li,{children:["Lock duration can be decided on deposit: from 1 week to 4 years.","\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"You can actually lock up to 10 years, but anything above 4 years doesn\u2019t give you more veYFI. This way you don't have to relock every week. If you set it to longer than 4 years, you can always reset it to 4 years so it starts decaying."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["A user must have a veYFI lock earn boosted rewards. No lock leads to no boosted rewards. A Maximum lock, continuously renewed, maximizes rewards.","\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"Just like with Curve, even without a veYFI lock, you can still deposit into a vault and stake the vault token into a gauge which will give you the base boost. With the minimum boost, you get to keep 10% of the dYFI you farm. The other 90% goes to veYFI lockers."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(d.li,{children:"It\u2019s possible to exit the lock early, in exchange for paying a penalty that gets allocated to the other veYFI holders."}),"\n",(0,n.jsxs)(d.li,{children:["The penalty is up to 75% locked amount and decays over time:","\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["The total penalty is the minimum percentage between ",(0,n.jsx)(d.code,{children:"75% locked amount"})," and ",(0,n.jsx)(d.code,{children:"(time remaining / 4 years)"})]}),"\n",(0,n.jsx)(d.li,{children:"So if your lock is over 3 years you will pay 75%."}),"\n",(0,n.jsx)(d.li,{children:"If your lock is 2 years you will pay 2/4 = 50%"}),"\n",(0,n.jsxs)(d.li,{children:["Penalty Formula: ",(0,n.jsx)(d.code,{children:"min(75%, lock_duration_left / 4 years * 100%)"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(d.li,{children:"veYFI holders are eligible to receive a share of the early exit penalties."}),"\n",(0,n.jsx)(d.li,{children:"veYFI holders are eligible to receive a share of gauge dYFI rewards from unused boosts."}),"\n",(0,n.jsx)(d.li,{children:"Now that veYFI has been implemented, only veYFI is accepted voting power in Yearn Governance."}),"\n"]}),"\n",(0,n.jsx)(d.h3,{id:"dyfi-as-gauges-reward",children:"dYFI as Gauges Reward"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"dYFI is an ERC-20 token."}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"Gauges emit dYFI that users can either sell for ETH or convert to YFI at a cost."}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"Gives its bearer the right to redeem an equivalent amount of YFI in exchange for ETH."}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"dYFI is burned upon redemption."}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"The circulating supply of dYFI must not exceed the amount of YFI available to be redeemed as part of the tokenomics program."}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"The amount of ETH required for redemption is at a discount to the current spot price of YFI/ETH."}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"Discount calculation is a function of the veYFI and YFI supply with the following formula:"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["discount = ",(0,n.jsx)(d.code,{children:"c / (1 + a * e^k(s * x \u2212 1))"}),", where:","\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.strong,{children:"c"})," = ",(0,n.jsx)(d.code,{children:"1"})]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.strong,{children:"a"})," = ",(0,n.jsx)(d.code,{children:"10"})]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.strong,{children:"k"})," = ",(0,n.jsx)(d.code,{children:"4.7"})]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.strong,{children:"s"})," = ",(0,n.jsx)(d.code,{children:"configurable scaling factor"})]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.strong,{children:"x"})," = ",(0,n.jsx)(d.code,{children:"veYFI_supply / YFI_supply"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.img,{alt:"image",src:s(78060).A+"",width:"1064",height:"807"})}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"ETH received from dYFI redemption is redirected to automated YFI buybacks handled by an immutable smart contract that runs Dutch auctions."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(d.h3,{id:"vault-gauges--voting",children:"Vault Gauges + Voting"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"Vault gauges allow vault depositors to stake their vault tokens and earn dYFI rewards according to their veYFI weight."}),"\n",(0,n.jsx)(d.li,{children:"Weights decay as the remaining lock duration decreases and can be extended up to the max lock duration."}),"\n",(0,n.jsx)(d.li,{children:"Increased locking duration is rewarded with increased weight, so locking for 4 years gives 100% weight, locking for 2 years 50% weight, etc."}),"\n",(0,n.jsx)(d.li,{children:"dYFI is allocated to gauges based on bi-monthly governance votes. Each gauge can get a different amount dYFI to emit."}),"\n",(0,n.jsx)(d.li,{children:"Based on their veYFI lock, users can boost their gauge rewards by up to 10x proportional to the number of vault tokens deposited, when they claim YFI rewards from gauges. The greater the amount of veYFI, the more vault deposits can be boosted for the user."}),"\n",(0,n.jsxs)(d.li,{children:["The boost mechanism will calculate your earning weight by taking the smaller amount of two values, provided in the formula below:","\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["Gauge boost formula: ",(0,n.jsx)(d.code,{children:"min(AmountDeposited, (AmountDeposited /10) + (TotalDepositedInTheGauge * VeYFIBalance / VeYFITotalSupply * 0.9))"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(d.li,{children:"A claim with boost under 100% will send the leftover tokens to veYFI holders."}),"\n"]}),"\n",(0,n.jsx)(d.h3,{id:"vault-gauges-table",children:"Vault Gauges Table"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Index"}),(0,n.jsx)(d.th,{children:"Symbol"}),(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Address"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"yG-yvCurve-YFIETH"})}),(0,n.jsx)(d.td,{children:"yGauge Curve YFI-ETH Pool yVault"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x7Fd8Af959B54A677a1D8F92265Bd0714274C56a3",children:(0,n.jsx)(d.code,{children:"0x7Fd8Af959B54A677a1D8F92265Bd0714274C56a3"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"1"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"yG-yvCurve-dYFIETH-f-f"})}),(0,n.jsx)(d.td,{children:"yGauge Curve dYFIETH-f Factory yVault"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x28da6dE3e804bDdF0aD237CFA6048f2930D0b4Dc",children:(0,n.jsx)(d.code,{children:"0x28da6dE3e804bDdF0aD237CFA6048f2930D0b4Dc"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"2"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"yG-lp-yCRVv2"})}),(0,n.jsx)(d.td,{children:"yGauge LP Yearn CRV Vault v2"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x107717C98C8125A94D3d2Cc82b86a1b705f3A27C",children:(0,n.jsx)(d.code,{children:"0x107717C98C8125A94D3d2Cc82b86a1b705f3A27C"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"3"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"yG-yvCurve-yETH-f"})}),(0,n.jsx)(d.td,{children:"yGauge Curve yETH Factory yVault"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x81d93531720d86f0491DeE7D03f30b3b5aC24e59",children:(0,n.jsx)(d.code,{children:"0x81d93531720d86f0491DeE7D03f30b3b5aC24e59"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"4"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"yG-lp-yPRISMA"})}),(0,n.jsx)(d.td,{children:"yGauge LP Yearn PRISMA Vault"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x6130E6cD924a40b24703407F246966D7435D4998",children:(0,n.jsx)(d.code,{children:"0x6130E6cD924a40b24703407F246966D7435D4998"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"5"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"yG-yvWETH-1"})}),(0,n.jsx)(d.td,{children:"yGauge WETH-1 yVault"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x5943f7090282eb66575662eadf7c60a717a7ce4d",children:(0,n.jsx)(d.code,{children:"0x5943F7090282Eb66575662EADf7C60a717a7cE4D"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"6"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"yG-yvUSDC-1"})}),(0,n.jsx)(d.td,{children:"yGauge USDC-1 yVault"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x622fa41799406b120f9a40da843d358b7b2cfee3",children:(0,n.jsx)(d.code,{children:"0x622fA41799406B120f9a40dA843D358b7b2CFEE3"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"7"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"yG-yvDAI-1"})}),(0,n.jsx)(d.td,{children:"yGauge DAI-1 yVault"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x128e72DfD8b00cbF9d12cB75E846AC87B83DdFc9",children:(0,n.jsx)(d.code,{children:"0x128e72DfD8b00cbF9d12cB75E846AC87B83DdFc9"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"8"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"yG-yvCurve-sdYFIv2-f"})}),(0,n.jsx)(d.td,{children:"yGauge Curve sdYFIv2 Factory yVault"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/token/0xB61F8fff8Dd8C438E0d61C07b5536cE3d728f660",children:(0,n.jsx)(d.code,{children:"0xB61F8fff8Dd8C438E0d61C07b5536cE3d728f660"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"9"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"yG-yvCurve-upYFI-f"})}),(0,n.jsx)(d.td,{children:"yGauge Curve upYFI Factory yVault"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/token/0xf719B2d3925CC445D2Bb67FA12963265E224Fa11",children:(0,n.jsx)(d.code,{children:"0xf719B2d3925CC445D2Bb67FA12963265E224Fa11"})})})]})]})]}),"\n",(0,n.jsxs)(d.p,{children:["The above Gauges can be verified using the ",(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x1D0fdCb628b2f8c0e22354d45B3B2D4cE9936F8B#readContract",children:"YFI Gauge Registry"})," contract and querying the ",(0,n.jsx)(d.code,{children:"gauges()"})," function with the index listed above."]}),"\n",(0,n.jsx)(d.h3,{id:"veyfi-reward-pool",children:"veYFI Reward Pool"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"Users who lock YFI for veYFI can claim accumulated fees from the veYFI reward pool. The reward pool gets fees two ways: YFI from the veYFI early exit fee and the non-distributed gauge rewards due to a lack of full boost."}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:"addresses",children:"Addresses"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Description"}),(0,n.jsx)(d.th,{children:"Address"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Gauge registry"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x1D0fdCb628b2f8c0e22354d45B3B2D4cE9936F8B",children:(0,n.jsx)(d.code,{children:"0x1D0fdCb628b2f8c0e22354d45B3B2D4cE9936F8B"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Gauge controller"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x46b38522422D597dDbAA2D6E98D6C9b397028d5B",children:(0,n.jsx)(d.code,{children:"0x46b38522422D597dDbAA2D6E98D6C9b397028d5B"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"dYFI"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x41252e8691e964f7de35156b68493bab6797a275",children:(0,n.jsx)(d.code,{children:"0x41252e8691e964f7de35156b68493bab6797a275"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"dYFI Redemption"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x7dC3A74F0684fc026f9163C6D5c3C99fda2cf60a",children:(0,n.jsx)(d.code,{children:"0x7dC3A74F0684fc026f9163C6D5c3C99fda2cf60a"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"YFI Reward Pool"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0xb287a1964AEE422911c7b8409f5E5A273c1412fA",children:(0,n.jsx)(d.code,{children:"0xb287a1964AEE422911c7b8409f5E5A273c1412fA"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"dYFI Reward Pool"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"https://etherscan.io/address/0x2391Fc8f5E417526338F5aa3968b1851C16D894E",children:(0,n.jsx)(d.code,{children:"0x2391Fc8f5E417526338F5aa3968b1851C16D894E"})})})]})]})]})]})}function h(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},78060:(e,d,s)=>{s.d(d,{A:()=>n});const n=s.p+"assets/images/dyfi-redemption-chart-70db84b627a983b721d0ab452f58038d.png"},28453:(e,d,s)=>{s.d(d,{R:()=>i,x:()=>c});var n=s(96540);const r={},t=n.createContext(r);function i(e){const d=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:d},e.children)}}}]);