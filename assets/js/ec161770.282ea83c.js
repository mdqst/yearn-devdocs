"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[7879],{56595:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=o(74848),t=o(28453);const s={},a="Specification",r={id:"governance/veyfi",title:"Specification",description:"veYFI incorporates YIP-56: Buyback and Build funds into YFI tokenomics. Users can lock YFI tokens and receive veYFI, which allows them to boost vault rewards and vote on where bought-back YFI will be sent.",source:"@site/docs/contributing/governance/veyfi.md",sourceDirName:"governance",slug:"/governance/veyfi",permalink:"/contributing/governance/veyfi",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1725283419e3,frontMatter:{},sidebar:"mySidebar",previous:{title:"veYFI",permalink:"/contributing/governance/veYFI-intro"},next:{title:"How to contribute to docs",permalink:"/contributing/documentation/working-on-docs"}},l={},d=[{value:"veYFI Overview",id:"veyfi-overview",level:2},{value:"dYFI as Gauges Reward",id:"dyfi-as-gauges-reward",level:2},{value:"Vault Gauges + Voting",id:"vault-gauges--voting",level:2},{value:"veYFI Reward Pool",id:"veyfi-reward-pool",level:2},{value:"Additional Info",id:"additional-info",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"specification",children:"Specification"})}),"\n",(0,i.jsxs)(n.p,{children:["veYFI incorporates ",(0,i.jsx)(n.a,{href:"https://gov.yearn.fi/t/yip-56-buyback-and-build/8929",children:"YIP-56: Buyback and Build"})," funds into YFI tokenomics. Users can lock YFI tokens and receive veYFI, which allows them to boost vault rewards and vote on where bought-back YFI will be sent."]}),"\n",(0,i.jsx)(n.h2,{id:"veyfi-overview",children:"veYFI Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Locking is similar to the ve-style program of Curve."}),"\n",(0,i.jsx)(n.li,{children:"YFI can be locked into veYFI, which is non-transferable."}),"\n",(0,i.jsxs)(n.li,{children:["Lock duration can be decided on deposit: from 1 week to 4 years.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can actually lock up to 10 years, but anything above 4 years doesn\u2019t give you more veYFI. This way you don't have to relock every week. If you set it to longer than 4 years, you can always reset it to 4 years so it starts decaying."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["A user must have a veYFI lock earn boosted rewards. No lock leads to no boosted rewards. A Maximum lock, continuously renewed, maximizes rewards.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Just like with Curve, even without a veYFI lock, you can still deposit into a vault and stake the vault token into a gauge which will give you the base boost. With the minimum boost, you get to keep 10% of the dYFI you farm. The other 90% goes to veYFI lockers."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"It\u2019s possible to exit the lock early, in exchange for paying a penalty that gets allocated to the other veYFI holders."}),"\n",(0,i.jsxs)(n.li,{children:["The penalty is up to 75% locked amount and decays over time:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The total penalty is the minimum percentage between ",(0,i.jsx)(n.code,{children:"75% locked amount"})," and ",(0,i.jsx)(n.code,{children:"(time remaining / 4 years)"})]}),"\n",(0,i.jsx)(n.li,{children:"So if your lock is over 3 years you will pay 75%."}),"\n",(0,i.jsx)(n.li,{children:"If your lock is 2 years you will pay 2/4 = 50%"}),"\n",(0,i.jsxs)(n.li,{children:["Penalty Formula: ",(0,i.jsx)(n.code,{children:"min(75%, lock_duration_left / 4 years * 100%)"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"veYFI holders are eligible to receive a share of the early exit penalties."}),"\n",(0,i.jsx)(n.li,{children:"veYFI holders are eligible to receive a share of gauge dYFI rewards from unused boosts."}),"\n",(0,i.jsx)(n.li,{children:"Now that veYFI has been implemented, only veYFI is accepted voting power in Yearn Governance."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dyfi-as-gauges-reward",children:"dYFI as Gauges Reward"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"dYFI is an ERC-20 token."}),"\n",(0,i.jsx)(n.li,{children:"Gauges emit dYFI that users can either sell for ETH or convert to YFI at a cost."}),"\n",(0,i.jsx)(n.li,{children:"Gives its bearer the right to redeem an equivalent amount of YFI in exchange for ETH."}),"\n",(0,i.jsx)(n.li,{children:"dYFI is burned upon redemption."}),"\n",(0,i.jsx)(n.li,{children:"The circulating supply of dYFI must not exceed the amount of YFI available to be redeemed as part of the tokenomics program."}),"\n",(0,i.jsx)(n.li,{children:"The amount of ETH required for redemption is at a discount to the current spot price of YFI/ETH."}),"\n",(0,i.jsx)(n.li,{children:"ETH received from dYFI redemption is redirected to automated YFI buybacks handled by an immutable smart contract that runs Dutch auctions."}),"\n",(0,i.jsxs)(n.li,{children:["Discount calculation is a function of the veYFI and YFI supply with the following formula:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["discount = ",(0,i.jsx)(n.code,{children:"c / (1 + a * e^k(s * x \u2212 1))"}),", where:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"c"})," = ",(0,i.jsx)(n.code,{children:"1"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"a"})," = ",(0,i.jsx)(n.code,{children:"10"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"k"})," = ",(0,i.jsx)(n.code,{children:"4.7"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"s"})," = ",(0,i.jsx)(n.code,{children:"configurable scaling factor"})," (currently set to 10)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"x"})," = ",(0,i.jsx)(n.code,{children:"veYFI_supply / YFI_supply"}),"\n",(0,i.jsx)(n.img,{alt:"image",src:o(78060).A+"",width:"1064",height:"807"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"vault-gauges--voting",children:"Vault Gauges + Voting"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Vault gauges allow vault depositors to stake their vault tokens and earn dYFI rewards according to their veYFI weight."}),"\n",(0,i.jsx)(n.li,{children:"Weights decay as the remaining lock duration decreases and can be extended up to the max lock duration."}),"\n",(0,i.jsx)(n.li,{children:"Increased locking duration is rewarded with increased weight, so locking for 4 years gives 100% weight, locking for 2 years 50% weight, etc."}),"\n",(0,i.jsx)(n.li,{children:"dYFI is allocated to gauges based on bi-monthly governance votes. Each gauge can get a different amount dYFI to emit."}),"\n",(0,i.jsxs)(n.li,{children:["Users can boost their gauge rewards by up to 10x.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This boost amount is proportional to the user's share of the vault and their share of total veYFI."}),"\n",(0,i.jsxs)(n.li,{children:["A 10x boost is achieved when a user owns an equal or higher share of veYFI (",(0,i.jsx)(n.code,{children:"yourVeYFIBalance/veYFITotalSupply"}),") than they own of the gauge deposits (",(0,i.jsx)(n.code,{children:"yourGaugeDeposit/totalDepositedInGauge"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"The greater your share of total veYFI, the more vault deposits can be boosted for the user."}),"\n",(0,i.jsx)(n.li,{children:"This applies across multiple gauges. You can max boost 1% of all gauges with 1% of the veYFI supply."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"A claim with boost under 100% will send the leftover tokens to veYFI holders."}),"\n",(0,i.jsx)(n.li,{children:"The boost mechanism math works as follows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Boost Calc"',children:"# determine user share of veYFI\nUserVeYFIShare =  VeYFIBalance / VeYFITotalSupply\n\n# Determine boostable balance above 10% of deposit\nBoostableBalance = (AmountDepositedInGauge /10) + (TotalDepositedInTheGauge * UserVeYFIShare  * 0.9)\n\n# take the less of amount deposited in gauge and boostable balance\nBoostedBalance = min(AmountDeposited, BoostableBalance)\n\n# get the boost by multiplying by 10 and dividing by amount deposited in gauge.\nBoost = 10 * BoostedBalance / AmountDepositedInGauge\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"veyfi-reward-pool",children:"veYFI Reward Pool"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Users who lock YFI for veYFI can claim accumulated fees from the veYFI reward pool. The reward pool gets fees two ways: YFI from the veYFI early exit fee and the non-distributed gauge rewards due to a lack of full boost."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-info",children:"Additional Info"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../developers/addresses/veyfi-contracts",children:"Contract Addresses"})}),"\n",(0,i.jsxs)(n.li,{children:["Governance Forum Thread: ",(0,i.jsx)(n.a,{href:"https://gov.yearn.fi/t/yip-65-evolving-yfi-tokenomics",children:"https://gov.yearn.fi/t/yip-65-evolving-yfi-tokenomics"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},78060:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/dyfi-redemption-chart-70db84b627a983b721d0ab452f58038d.png"},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var i=o(96540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);