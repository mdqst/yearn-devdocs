"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[3842],{22659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(74848),s=n(28453);const a={},d="Yearn's Partner Tracker",i={id:"partner-tracker",title:"Yearn's Partner Tracker",description:"Yearn's Partner Tracker is an implementation of Delegated Deposit:",source:"@site/docs/partners/partner-tracker.md",sourceDirName:".",slug:"/partner-tracker",permalink:"/partners/partner-tracker",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:170058596e4,frontMatter:{},sidebar:"mySidebar",previous:{title:"Integration Methods",permalink:"/partners/integration_guide"},next:{title:"Submit a Pull Request",permalink:"/partners/submit_pr"}},o={},c=[{value:"Functionality",id:"functionality",level:2},{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Deposit full balance for a token",id:"deposit-full-balance-for-a-token",level:3},{value:"Deposit specific token amount",id:"deposit-specific-token-amount",level:3},{value:"Check balances tracked",id:"check-balances-tracked",level:3},{value:"Event emitted",id:"event-emitted",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"yearns-partner-tracker",children:"Yearn's Partner Tracker"})}),"\n",(0,r.jsxs)(t.p,{children:["Yearn's Partner Tracker is an implementation of ",(0,r.jsx)(t.a,{href:"https://docs.yearn.fi/partners/integration_guide#delegated-deposit",children:"Delegated Deposit"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Contract Source Code: ",(0,r.jsx)(t.a,{href:"https://github.com/yearn/yearn-partner-tracker",children:"https://github.com/yearn/yearn-partner-tracker"})]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Network"}),(0,r.jsx)(t.th,{children:"Deploy Address"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ethereum (1)"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://etherscan.io/address/0x8ee392a4787397126C163Cb9844d7c447da419D8",children:"0x8ee392a4787397126C163Cb9844d7c447da419D8"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Optimism (10)"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://optimistic.etherscan.io/address/0x7E08735690028cdF3D81e7165493F1C34065AbA2",children:"0x7E08735690028cdF3D81e7165493F1C34065AbA2"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Fantom (250)"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://ftmscan.com/address/0x086865B2983320b36C42E48086DaDc786c9Ac73B",children:"0x086865B2983320b36C42E48086DaDc786c9Ac73B"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Arbitrum (42161)"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://arbiscan.io/address/0x0e5b46E4b2a05fd53F5a4cD974eb98a9a613bcb7",children:"0x0e5b46E4b2a05fd53F5a4cD974eb98a9a613bcb7"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Base (8453)"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://basescan.org/address/0xD0F08E42A40569fF83D28AA783a5b6537462667c",children:"0xD0F08E42A40569fF83D28AA783a5b6537462667c"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"functionality",children:"Functionality"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"deposit()"})," function is used to deposit funds into a vault. This function takes two parameters:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"vault"})," - Address of the vault where the funds will be deposited."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"partnerId"})," - Address of the partner who has referred the deposit."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"When a user deposits funds into the vault, the contract will log the amount of funds that were deposited, allowing the user to keep track and monitor their total deposits."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ReferredBalanceIncreased()"})," event will be emitted when a partner's referred balance increases. This event will contain the following data:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"partnerId"})," - Address of the partner who referred the deposit."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"vault"})," - Address of the vault where the deposit was made."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"depositer"})," - Address of the user who made the deposit."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"amountAdded"})," - Amount of funds that were deposited."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"totalDeposited"})," - Total amount of funds deposited by the user."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["To use the Yearn V2 Partner Tracker, users must first approve the contract by setting the allowance of their wallet to the contract address. Once the allowance is set, users can then call the ",(0,r.jsx)(t.code,{children:"deposit()"})," function to deposit funds into a vault."]}),"\n",(0,r.jsx)(t.p,{children:"The amount of funds that are deposited can be specified, or the user can opt to deposit the entire balance of their wallet. In either case, the contract will record the amount of funds that were deposited and assign them to the partner who referred the deposit."}),"\n",(0,r.jsxs)(t.p,{children:["Once the deposit is complete, the ",(0,r.jsx)(t.code,{children:"ReferredBalanceIncreased()"})," event will be emitted, which will indicate the amount of funds that were deposited, as well as the total amount that has been deposited by the user."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.h3,{id:"deposit-full-balance-for-a-token",children:"Deposit full balance for a token"}),"\n",(0,r.jsx)(t.p,{children:"Alice is a partner who has referred Bob to deposit some funds into the Vault A contract. Bob wants to deposit the full balance of a token he owns into Vault A. He can do this by calling the following function:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function deposit(address vault, address partnerId) external returns (uint256)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["He specifies the address of Vault A as the ",(0,r.jsx)(t.code,{children:"vault"})," argument, and the address of Alice as the ",(0,r.jsx)(t.code,{children:"partnerId"})," argument."]}),"\n",(0,r.jsx)(t.h3,{id:"deposit-specific-token-amount",children:"Deposit specific token amount"}),"\n",(0,r.jsx)(t.p,{children:"Bob wants to deposit a specific amount of tokens into Vault A, instead of the entire balance. He can do this by calling the following function:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function deposit(address vault, address partnerId, uint256 amount) external returns (uint256)\n"})}),"\n",(0,r.jsx)(t.p,{children:"He specifies the address of Vault A as the vault argument, the address of Alice as the partnerId argument, and the amount of tokens he wants to deposit as the amount argument."}),"\n",(0,r.jsx)(t.h3,{id:"check-balances-tracked",children:"Check balances tracked"}),"\n",(0,r.jsx)(t.p,{children:"Alice has referred multiple people to deposit into different vaults. The YearnPartnerTracker contract keeps track of the referred balance for each partner, vault, and depositor combination. Alice can check her referred balance for a particular vault and depositor by querying the following mapping:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"mapping (address => mapping (address => mapping(address => uint256))) public referredBalance;\n"})}),"\n",(0,r.jsx)(t.p,{children:"For example, to check Alice's referred balance for Vault A and Bob, Alice can call the following function:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function checkReferredBalance(address partnerId, address vault, address depositor) public view returns (uint256) {\n    return referredBalance[partnerId][vault][depositor];\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["She specifies her own address as the ",(0,r.jsx)(t.code,{children:"partnerId"})," argument, the address of ",(0,r.jsx)(t.code,{children:"Vault A"})," as the ",(0,r.jsx)(t.code,{children:"vault"})," argument, and the address of Bob as the ",(0,r.jsx)(t.code,{children:"depositor"})," argument. This function returns the referred balance for Alice, Bob, and ",(0,r.jsx)(t.code,{children:"Vault A"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"event-emitted",children:"Event emitted"}),"\n",(0,r.jsxs)(t.p,{children:["When deposits happen, the ",(0,r.jsx)(t.code,{children:"YearnPartnerTracker"})," contract emits the ",(0,r.jsx)(t.code,{children:"ReferredBalanceIncreased"})," event. Partners and other interested parties can use this event to track changes to referred balances. The event contains the following information:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"event ReferredBalanceIncreased(\n    address indexed partnerId,\n    address indexed vault,\n    address indexed depositor,\n    uint amountAdded,\n    uint totalDeposited\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"partnerId"})," field contains the address of the partner who referred the deposit, the ",(0,r.jsx)(t.code,{children:"vault"})," field contains the address of the vault where the deposit was made, the ",(0,r.jsx)(t.code,{children:"depositor"})," field contains the address of the depositor, the ",(0,r.jsx)(t.code,{children:"amountAdded"})," field contains the amount of yVault tokens received by the depositor, and the ",(0,r.jsx)(t.code,{children:"totalDeposited"})," field contains the total amount of yVault tokens deposited by the depositor for this partner and vault combination."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function d(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);