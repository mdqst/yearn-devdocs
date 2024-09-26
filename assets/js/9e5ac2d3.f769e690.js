"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[6683],{68704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(74848),a=n(28453);const s={},i="yVaults v3",o={id:"v3/overview",title:"yVaults v3",description:"Yearn's V3 system is a decentralized suite of yield-generating products built to fit any need. It is designed to be un-opinionated and customizable infrastructure for the world to build on, making yield generation as safe, efficient, and easy as possible for all parties. Anyone can deploy a strategy or manage a vault. So whether you are a gas golfing expert, a degen looking to codify your personal yield farming strategy, or just an average crypto user looking to earn passive yield on your magical internet tokens, V3 is for you.",source:"@site/docs/developers/v3/overview.md",sourceDirName:"v3",slug:"/v3/overview",permalink:"/developers/v3/overview",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1727382018e3,frontMatter:{},sidebar:"developers",previous:{title:"Building on Yearn",permalink:"/developers/building-on-yearn"},next:{title:"Integrating V3 Vaults",permalink:"/developers/v3/Integrating_v3"}},l={},d=[{value:"Definitions",id:"definitions",level:2},{value:"Periphery Contracts",id:"periphery-contracts",level:2},{value:"Get started",id:"get-started",level:2},{value:"Additional Links",id:"additional-links",level:2}];function c(e){const t={a:"a",br:"br",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"yvaults-v3",children:"yVaults v3"})}),"\n",(0,r.jsx)(t.p,{children:"Yearn's V3 system is a decentralized suite of yield-generating products built to fit any need. It is designed to be un-opinionated and customizable infrastructure for the world to build on, making yield generation as safe, efficient, and easy as possible for all parties. Anyone can deploy a strategy or manage a vault. So whether you are a gas golfing expert, a degen looking to codify your personal yield farming strategy, or just an average crypto user looking to earn passive yield on your magical internet tokens, V3 is for you."}),"\n",(0,r.jsxs)(t.p,{children:['V3 is a drastically more modular design than V2. Meaning that the core vaults will serve as generic contracts that handle the base vault functionality. Then there are many optional "periphery" contracts such as ',(0,r.jsx)(t.a,{href:"/developers/v3/periphery#accountant",children:"Accountants"})," that charge fees, or ",(0,r.jsx)(t.a,{href:"/developers/v3/periphery#debt-allocator",children:"Debt Allocators"})," that manage debt allocations that can be added on or customized for complete freedom and customization of the vaults functionality."]}),"\n",(0,r.jsx)(t.p,{children:'The most significant update to Yearn V3 from V2 was the introduction of "Tokenized Strategies". In V2, strategies are stand-alone contracts that are attached to one specific vault. Only that vault can deposit or withdraw funds from the strategy and there is a trusted relationship between them. In V3, strategies are now fully ERC-4626 compliant, stand-alone vaults. Though their job remains the same (generate yield from one external source), strategies can now be connected to many different vaults simultaneously and can also be deposited into directly by an end user.'}),"\n",(0,r.jsx)(t.h2,{id:"definitions",children:"Definitions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults-v3/blob/master/contracts/VaultV3.vy",children:"Vault"}),': A vault or "Allocator Vault" in V3 refers to an ERC-4626 compliant contract that takes in user deposits, mints shares corresponding to the user\'s share of the underlying assets held in that vault, and then allocates the underlying asset to an array of different "strategies" that earn yield on that asset.']}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Strategy: A strategy in V3 refers to a yield-generating contract added to a vault that has the needed ",(0,r.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults-v3/blob/master/contracts/VaultV3.vy#L40",children:"ERC-4626 interface"}),". The strategy takes the underlying asset and deploys it to a single source, generating yield on that asset."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/yearn/tokenized-strategy/blob/master/src/TokenizedStrategy.sol",children:"TokenizedStrategy"})," A technical implementation of a Strategy that is also a stand-alone ERC-4626 compliant Vault. These are the yield generators in the V3 ecosystem. This pattern can be used so that either Allocator Vaults or individual users can deposit directly into and receive shares in return."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults-v3/blob/master/contracts/VaultFactory.vy",children:"Vault Factory"}),": A factory contract deployed by Yearn Governance that anyone can use to easily and trustlessly deploy new Allocator Vaults. Each Allocator Vault release will have its own factory."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"image",src:n(10070).A+"",width:"3084",height:"3330"})}),"\n",(0,r.jsx)(t.h2,{id:"periphery-contracts",children:"Periphery Contracts"}),"\n",(0,r.jsx)(t.p,{children:"V3 incorporates periphery contracts, which are extensible code blocks that can be attached to a yVault or work alongside it to extend functionality over and beyond core base logic. They are not required but can facilitate building around yVaults."}),"\n",(0,r.jsx)(t.p,{children:"A few examples of periphery contracts used in V3 are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"4626 Router"}),": Wrapper that handles deposits and withdrawals to/from all vaults and strategies."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Registry"}),": Handles adding and tracking strategies and vaults."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Debt Allocator"}),": Can efficiently allocate debt to different strategies. Added to an Allocator Vault for the best yield opportunities."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Accountant"}),": Handles changing fees for vault operations."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Deposit/Withdraw Limit Modules"}),": Allows dynamic control over a vaults deposit or withdraw limits for full customization."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Swappers"}),": Pre-built contracts for strategies to inherit to easily implement their desired swap logic."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"APR Oracles"}),": Retrieve the expected current APY on-chain for different vaults or strategies to properly allocate debt."]}),"\n",(0,r.jsx)(t.li,{children:"And any others you can come up with!"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To read more about the periphery contracts or where to find the current versions click ",(0,r.jsx)(t.a,{href:"/developers/v3/periphery",children:"here"})]}),"\n",(0,r.jsx)(t.h2,{id:"get-started",children:"Get started"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/developers/v3/integrating_v3",children:"Integrating V3"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/developers/v3/strategy_writing_guide",children:"Building your own V3 Strategy"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/developers/v3/vault_management",children:"Deploying and managing a V3 Vault"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/developers/v3/periphery",children:"Periphery Contracts"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/developers/v3/protocol_fees",children:"Protocol Fees"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To find deployed contracts see ",(0,r.jsx)(t.a,{href:"/developers/addresses/v3-contracts",children:"Contract Addresses"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"If a contract has not been deployed on a specific chain it can be done permissionlessly using the scripts in the relevant GitHub repo. Or reach out to a Yearn contributor for help."})}),"\n",(0,r.jsx)(t.h2,{id:"additional-links",children:"Additional Links"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults-v3",children:"yVaults v3 GitHub Repo"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults-v3/blob/master/TECH_SPEC.md",children:"VaultV3 Specification"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"https://github.com/yearn/tokenized-strategy",children:"Tokenized Strategy GitHub Repo"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"https://github.com/yearn/tokenized-strategy/blob/master/SPECIFICATION.md",children:"Tokenized Strategy Specification"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"https://medium.com/iearn/yearnv3-motivation-and-design-107840cb4844",children:"V3 Design Article"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"https://erc4626.info/",children:"ERC4626 Info"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-4626",children:"ERC4626 EIP"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},10070:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/yvaults-v3-more-detail-fe81f3237d78cfa8da477bb310d65da2.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);