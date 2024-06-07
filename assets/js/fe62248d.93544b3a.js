"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[6482],{6763:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=s(4848),i=s(8453);const n={Status:"Deprecated"},a="veCRV Boosts",o={id:"deprecated/vecrv-boosts",title:"veCRV Boosts",description:"This page is outdated since yveCRV was deprecated in favour of yCRV. Check the new yCRV page.",source:"@site/docs/resources/deprecated/vecrv-boosts.md",sourceDirName:"deprecated",slug:"/deprecated/vecrv-boosts",permalink:"/resources/deprecated/vecrv-boosts",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708445498e3,frontMatter:{Status:"Deprecated"},sidebar:"mySidebar",previous:{title:"StableCredit",permalink:"/resources/deprecated/stablecredit"},next:{title:"Woofy",permalink:"/resources/deprecated/woofy"}},c={},l=[{value:"Curve Finance Synergy",id:"curve-finance-synergy",level:2},{value:"veCRV Boosts",id:"vecrv-boosts-1",level:3},{value:"Backscratcher yVaults",id:"backscratcher-yvaults",level:3},{value:"Auto-compounding yield",id:"auto-compounding-yield",level:2},{value:"Leverage",id:"leverage",level:2},{value:"Partnerships",id:"partnerships",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"vecrv-boosts",children:"veCRV Boosts"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["This page is outdated since yveCRV was deprecated in favour of yCRV. Check the new yCRV ",(0,r.jsx)(t.a,{href:"https://docs.yearn.fi/getting-started/products/ycrv/overview",children:"page"}),"."]})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Almost everything that yVaults interact with is available to the public. So how is Yearn able to offer users better yield than they'd be able to achieve on their own?"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://i.imgur.com/6lmhESr.png",alt:""})}),"\n",(0,r.jsx)(t.h2,{id:"curve-finance-synergy",children:"Curve Finance Synergy"}),"\n",(0,r.jsxs)(t.p,{children:["Many of Yearn's strategies utilize Curve Finance's liquidity mining program. ",(0,r.jsx)(t.a,{href:"https://curve.fi/",children:"Curve Finance"})," has a 300 year token distribution program for those who provide liquidity for their low slippage decentralized exchange."]}),"\n",(0,r.jsx)(t.h3,{id:"vecrv-boosts-1",children:"veCRV Boosts"}),"\n",(0,r.jsxs)(t.p,{children:["CRV is distributed continuously to users who stake certain liquidity provider tokens in Curve's ",(0,r.jsx)(t.a,{href:"https://resources.curve.fi/base-features/understanding-gauges",children:"gauge"}),". Those CRV rewards can be increased when the user locks up their CRV in the ",(0,r.jsx)(t.a,{href:"https://dao.curve.fi/locker",children:"Locker"}),". This locker gives the staker veCRV in return, which bears the right to vote in governance and to claim a portion of the protocol's fees."]}),"\n",(0,r.jsx)(t.p,{children:"Locking CRV allows users to boost the CRV rewards they are receiving when providing liquidity in eligible pools. The amount of the boost is determined by how much CRV was locked and their relative stake in the pool."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://i.imgur.com/QaMMdr7.png",alt:""})}),"\n",(0,r.jsx)(t.p,{children:"Using the Backscratcher yVault, Yearn locks up a significant amount of CRV indefinitely, and distributes the boosts to various yVaults."}),"\n",(0,r.jsx)(t.h3,{id:"backscratcher-yvaults",children:"Backscratcher yVaults"}),"\n",(0,r.jsx)(t.p,{children:"The Backscratcher yVault, yvBOOST and pSLPyvBOOST-ETH, capitalizes on liquidity mining in a way that's beneficial to both Curve and Yearn."}),"\n",(0,r.jsx)(t.p,{children:"Users deposit CRV into the yVault which is locked infinitely. In return they receive a token that represents a share of the Backscratcher pool. Revenue earned from the curve through curve fee sharing is distributed in the Backscratcher pool and can be redeemed by depositors on a weekly basis."}),"\n",(0,r.jsx)(t.p,{children:"Additionally, 10% of all CRV earned by Yearn Finance is deposited into Backscratcher and locked infinitely. Because of this, people who want to stake CRV will always receive a higher share of the Backscratcher yVault's revenue than staking directly through Curve. They also can earn emissions of tokens like SUSHI and PICKLE for providing liquidity."}),"\n",(0,r.jsx)(t.p,{children:"Users will never be able to withdraw their original CRV, but because of the incentives on yveCRV liquidity and the value that the token accrues from various sources of revenue, they will be able to swap it for another asset for some price."}),"\n",(0,r.jsx)(t.p,{children:"In return, control over the locked CRV's boosts is given to Yearn, and utilized throughout various yVaults."}),"\n",(0,r.jsx)(t.h2,{id:"auto-compounding-yield",children:"Auto-compounding yield"}),"\n",(0,r.jsx)(t.p,{children:"Compounding yield requires transaction fees to be paid to the Ethereum blockchain. This can be expensive and cut into returns."}),"\n",(0,r.jsx)(t.p,{children:"Because yVaults batch your transaction with many other depositors, it is cumulatively lower cost and higher return to earn yield using the vaults. Currently, gas costs are covered by the Keep3r network, meaning that users are compounding returns while bearing no cost."}),"\n",(0,r.jsx)(t.h2,{id:"leverage",children:"Leverage"}),"\n",(0,r.jsxs)(t.p,{children:["Yearn utilizes the ",(0,r.jsx)(t.a,{href:"https://docs.ib.xyz/",children:"Iron Bank (C.R.E.A.M. Finance)"})," to access credit that is used to enhance yVault yields. Only white-listed addresses have this feature available to them, meaning that typically, individuals are not able to do this on their own."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://i.imgur.com/WJIjOKv.png",alt:""})}),"\n",(0,r.jsxs)(t.p,{children:["Some strategies also implement ",(0,r.jsx)(t.a,{href:"https://docs.yearn.fi/resources/defi-glossary#flash-loan",children:"flash loans"}),", which is typically a back-end service that requires development experience to take advantage of."]}),"\n",(0,r.jsx)(t.h2,{id:"partnerships",children:"Partnerships"}),"\n",(0,r.jsx)(t.p,{children:"The Backscratcher yVault is only possible due to synergistic relationships with protocols like Curve, SushiSwap and Pickle Finance. Our relationships across DeFi allow yVault depositors benefits that they cannot get elsewhere."}),"\n",(0,r.jsx)(t.p,{children:"Yearn actively collaborates on development with protocols like the ones mentioned to create new opportunities for yield and further DeFi as an industry."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var r=s(6540);const i={},n=r.createContext(i);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);