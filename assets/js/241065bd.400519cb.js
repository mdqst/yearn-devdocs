"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[2791],{36717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(74848),d=t(28453);const r={description:"This documentation only covers v1 vaults."},i="v1 yVault Interfaces",c={id:"smart-contracts/V1/interfaces",title:"v1 yVault Interfaces",description:"This documentation only covers v1 vaults.",source:"@site/docs/developers/smart-contracts/V1/interfaces.md",sourceDirName:"smart-contracts/V1",slug:"/smart-contracts/V1/interfaces",permalink:"/developers/smart-contracts/V1/interfaces",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1722959028e3,frontMatter:{description:"This documentation only covers v1 vaults."},sidebar:"developers",previous:{title:"Yearn Stack + FE Features",permalink:"/developers/smart-contracts/V2/Deprecated/version-0.4.5/yearn-sdk/yearn-stack"},next:{title:"Security Home",permalink:"/developers/security/"}},l={},a=[{value:"IStrategy",id:"istrategy",level:2},{value:"function <code>want()</code>",id:"function-want",level:3},{value:"function <code>deposit()</code>",id:"function-deposit",level:3},{value:"func <code>withdraw(address)</code>",id:"func-withdrawaddress",level:3},{value:"function <code>withdraw(uint256)</code>",id:"function-withdrawuint256",level:3},{value:"function <code>skim()</code>",id:"function-skim",level:3},{value:"function <code>withdrawAll()</code>",id:"function-withdrawall",level:3},{value:"function <code>balanceOf()</code>",id:"function-balanceof",level:3},{value:"IVault",id:"ivault",level:2},{value:"function <code>token()</code>",id:"function-token",level:3},{value:"function <code>underlying()</code>",id:"function-underlying",level:3},{value:"function <code>name()</code>",id:"function-name",level:3},{value:"function <code>symbol()</code>",id:"function-symbol",level:3},{value:"function <code>decimals()</code>",id:"function-decimals",level:3},{value:"func <code>controller()</code>",id:"func-controller",level:3},{value:"function <code>governance()</code>",id:"function-governance",level:3},{value:"function <code>getPricePerFullShare()</code>",id:"function-getpriceperfullshare",level:3},{value:"function <code>deposit()</code>",id:"function-deposit-1",level:3},{value:"function <code>depositAll()</code>",id:"function-depositall",level:3},{value:"function <code>withdraw()</code>",id:"function-withdraw",level:3},{value:"function <code>withdrawAll()</code>",id:"function-withdrawall-1",level:3},{value:"IController",id:"icontroller",level:2},{value:"function <code>withdraw()</code>",id:"function-withdraw-1",level:3},{value:"function <code>balanceOf()</code>",id:"function-balanceof-1",level:3},{value:"function <code>earn()</code>",id:"function-earn",level:3},{value:"function <code>want()</code>",id:"function-want-1",level:3},{value:"function <code>rewards()</code>",id:"function-rewards",level:3},{value:"function <code>vaults()</code>",id:"function-vaults",level:3},{value:"function <code>strategies()</code>",id:"function-strategies",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"v1-yvault-interfaces",children:"v1 yVault Interfaces"}),"\n",(0,s.jsx)(n.h2,{id:"istrategy",children:"IStrategy"}),"\n",(0,s.jsxs)(n.p,{children:["Source code: ",(0,s.jsx)(n.a,{href:"https://github.com/yearn/yearn-protocol/blob/develop/interfaces/yearn/IStrategy.sol",children:"yearn-protocol/develop/interfaces/yearn/IStrategy.sol"})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-want",children:["function ",(0,s.jsx)(n.code,{children:"want()"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the address of the unwrapped token that the Strategy takes as deposit."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function want() external view returns (address);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Address of the token the Strategy takes as deposit"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-deposit",children:["function ",(0,s.jsx)(n.code,{children:"deposit()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Deposits token (same as ",(0,s.jsx)(n.code,{children:"want()"})," returns) into a smart contact specified by the Strategy."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function deposit() external;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"func-withdrawaddress",children:["func ",(0,s.jsx)(n.code,{children:"withdraw(address)"})]}),"\n",(0,s.jsx)(n.p,{children:"Dust collecting function to create additional rewards out of tokens that were incorrectly sent to the Strategy."}),"\n",(0,s.jsx)(n.p,{children:"Takes an ERC20 token address and should send the full amount of any such tokens in the Strategy to the Controller."}),"\n",(0,s.jsx)(n.p,{children:"This function should have access control enforcing the Controller only to be its allowed caller, and checks in place to ensure that the token types to withdraw are not those used by the Strategy."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function withdraw(address) external;\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Input"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"ERC-20 token to be drained"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-withdrawuint256",children:["function ",(0,s.jsx)(n.code,{children:"withdraw(uint256)"})]}),"\n",(0,s.jsxs)(n.p,{children:["Partially withdraws funds (denominated in ",(0,s.jsx)(n.code,{children:"want()"})," token) from the Strategy, and should always only be sending these to the Vault. In case the Strategy implements ",(0,s.jsx)(n.code,{children:"harvest()"}),", a withdrawal fee may be applied. This function should have access control enforcing the Controller only to be its allowed caller."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function withdraw(uint256) external;\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Input"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"uint"}),(0,s.jsx)(n.td,{children:"Amount to be withdrawn"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-skim",children:["function ",(0,s.jsx)(n.code,{children:"skim()"})]}),"\n",(0,s.jsx)(n.p,{children:"Used to obtain the remaining amount that can be borrowed from the lending platform. Relevant when the Strategy implements a lending platform, such as Aave."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function skim() external;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"function-withdrawall",children:["function ",(0,s.jsx)(n.code,{children:"withdrawAll()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Withdraws the entire amount of ",(0,s.jsx)(n.code,{children:"want()"})," tokens available, and should always only be sending these to the Vault. This function should have access control enforcing the Controller only to be its allowed caller. Typically used when migrating strategies."]}),"\n",(0,s.jsxs)(n.p,{children:["The function typically uses ",(0,s.jsx)(n.code,{children:"withdraw()"})," and performs a set of sequential function calls depending on the Strategy."]}),"\n",(0,s.jsx)(n.p,{children:"If the Strategy implements liquidity pools or lending platforms, then withdrawal from these platforms should be performed until the Vault\u2019s unwrapped token is delivered back to the vault."}),"\n",(0,s.jsxs)(n.p,{children:["Returns a ",(0,s.jsx)(n.code,{children:"uint256"})," of the total amount withdrawn."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function withdrawAll() external returns (uint256);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"uint256"}),(0,s.jsx)(n.td,{children:"The amount withdrawn"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-balanceof",children:["function ",(0,s.jsx)(n.code,{children:"balanceOf()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Returns the Strategy's current ",(0,s.jsx)(n.code,{children:"want()"})," token balance."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function balanceOf() external view returns (uint256);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"uint256"}),(0,s.jsxs)(n.td,{children:["Strategy's ",(0,s.jsx)(n.code,{children:"want()"})," token balance"]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"ivault",children:"IVault"}),"\n",(0,s.jsxs)(n.p,{children:["Source code: ",(0,s.jsx)(n.a,{href:"https://github.com/yearn/yearn-protocol/blob/develop/interfaces/yearn/IVault.sol",children:"yearn-protocol/develop/interfaces/yearn/IVault.sol"})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-token",children:["function ",(0,s.jsx)(n.code,{children:"token()"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the unwrapped native token address that the Vault takes as deposit."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function token() external view returns (address);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Vault\u2019s unwrapped native token address"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-underlying",children:["function ",(0,s.jsx)(n.code,{children:"underlying()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Returns the native underlying token address in Delegated Vaults. For example, in case of aLINK delegated vault, ",(0,s.jsx)(n.code,{children:"underlying()"})," returns the address of the LINK token."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// This is only implemented in Delegated Vaults.\nfunction underlying() external view returns (address);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Delegated Vault\u2019s underlying native token address"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-name",children:["function ",(0,s.jsx)(n.code,{children:"name()"})]}),"\n",(0,s.jsx)(n.p,{children:'Returns the vault\u2019s wrapped token name as a string, e.g. \u201cyearn Dai Stablecoin".'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function name() external view returns (string memory);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Vault\u2019s wrapped token name"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-symbol",children:["function ",(0,s.jsx)(n.code,{children:"symbol()"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the vault\u2019s wrapped token symbol as a string, e.g. \u201cyDai\u201d."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function symbol() external view returns (string memory);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Vault\u2019s wrapped token symbol"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-decimals",children:["function ",(0,s.jsx)(n.code,{children:"decimals()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Returns the amount of decimals for this vault\u2019s wrapped token as a ",(0,s.jsx)(n.code,{children:"uint8"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function decimals() external view returns (uint8);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"No of decimals of the vault's wrapped token."})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"func-controller",children:["func ",(0,s.jsx)(n.code,{children:"controller()"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the address of the Vault's Controller."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function controller() external view returns (address);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Vault\u2019s Controller contract"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-governance",children:["function ",(0,s.jsx)(n.code,{children:"governance()"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the address of the Vault\u2019s governance contract."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function governance() external view returns (address);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Vault\u2019s Governance contract"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-getpriceperfullshare",children:["function ",(0,s.jsx)(n.code,{children:"getPricePerFullShare()"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the price of the Vault\u2019s wrapped token, denominated in the unwrapped native token."}),"\n",(0,s.jsx)(n.p,{children:"The calculation is:"}),"\n",(0,s.jsx)(n.p,{children:"$$\n{nativeTokenBalance \\over yTokenTotalSupply}\n$$"}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"nativeTokenBalance"})," is the current balance of native token (e.g. DAI) in the Vault, Controller and Strategy contracts. And ",(0,s.jsx)(n.code,{children:"yTokenTotalSupply"})," is the total supply of the Vault's wrapped Token (e.g. yDAI)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function getPricePerFullShare() external view returns (uint256);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"uint256"}),(0,s.jsx)(n.td,{children:"Price of the Vault\u2019s wrapped token denominated in the unwrapped native token"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-deposit-1",children:["function ",(0,s.jsx)(n.code,{children:"deposit()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Deposits the specified amount of the native unwrapped token (same as ",(0,s.jsx)(n.code,{children:"token()"})," returns) into the Vault."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function deposit(uint256) external;\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Input"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"uint256"}),(0,s.jsx)(n.td,{children:"Amount to deposit into the Vault."})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-depositall",children:["function ",(0,s.jsx)(n.code,{children:"depositAll()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Deposits the maximum available amount of the native unwrapped token (same as ",(0,s.jsx)(n.code,{children:"token()"})," returns) into the Vault."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function depositAll() external;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"function-withdraw",children:["function ",(0,s.jsx)(n.code,{children:"withdraw()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Withdraws the specified amount of the native unwrapped token (same as ",(0,s.jsx)(n.code,{children:"token()"})," returns) from the Vault."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function withdraw(uint256) external;\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Input"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"uint256"}),(0,s.jsx)(n.td,{children:"Amount to withdraw from the Vault."})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-withdrawall-1",children:["function ",(0,s.jsx)(n.code,{children:"withdrawAll()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Withdraws the maximum available amount of the native unwrapped token (same as ",(0,s.jsx)(n.code,{children:"token()"})," returns) from the Vault."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function withdrawAll() external;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"icontroller",children:"IController"}),"\n",(0,s.jsxs)(n.p,{children:["Source code: ",(0,s.jsx)(n.a,{href:"https://github.com/yearn/yearn-protocol/blob/develop/interfaces/yearn/IController.sol",children:"yearn-protocol/develop/interfaces/yearn/IController.sol"})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-withdraw-1",children:["function ",(0,s.jsx)(n.code,{children:"withdraw()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Calls ",(0,s.jsx)(n.code,{children:"Strategy.withdraw()"})," function for the amount defined in ",(0,s.jsx)(n.code,{children:"unit256"})," in the Strategy of the specified address. This function should have access control enforcing the Vault to be its only allowed caller."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function withdraw(address, uint256) external;\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Input"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Address of the Strategy to withdraw from"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Input"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"uint256"}),(0,s.jsx)(n.td,{children:"Amount to withdraw"})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-balanceof-1",children:["function ",(0,s.jsx)(n.code,{children:"balanceOf()"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the Strategy's balance of the specified token."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function balanceOf(address) external view returns (uint256);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Input"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Token that is used in the Strategy"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"uint256"}),(0,s.jsx)(n.td,{children:"Balance of the specified token"})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-earn",children:["function ",(0,s.jsx)(n.code,{children:"earn()"})]}),"\n",(0,s.jsx)(n.p,{children:"Transfers the profits earned from the yield generating activities of the Strategy to the Vault. Takes an address of a token to withdraw and an amount."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function earn(address, uint256) external;\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Input"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Token to be withdrawn to the Vault from the Strategy"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Input"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"uint256"}),(0,s.jsx)(n.td,{children:"Amount to be withdrawn"})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-want-1",children:["function ",(0,s.jsx)(n.code,{children:"want()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Not used by the currently deployed controller. Please refer to ",(0,s.jsx)(n.a,{href:"#function-want",children:(0,s.jsx)(n.code,{children:"Strategy.want()"})})," instead."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function want(address) external view returns (address);\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"function-rewards",children:["function ",(0,s.jsx)(n.code,{children:"rewards()"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the address of the Treasury which is where the system reward fees go."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function rewards() external view returns (address);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Treasury contract"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-vaults",children:["function ",(0,s.jsx)(n.code,{children:"vaults()"})]}),"\n",(0,s.jsx)(n.p,{children:"Takes a token address and returns the corresponding Vault address."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function vaults(address) external view returns (address);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Input"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Token to find a Vault address for"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Vault address that is associated with the specified token"})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"function-strategies",children:["function ",(0,s.jsx)(n.code,{children:"strategies()"})]}),"\n",(0,s.jsx)(n.p,{children:"Takes a token address and returns the corresponding Strategy address."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function strategies(address) external view returns (address);\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"type"}),(0,s.jsx)(n.th,{children:"desc"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Input"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Token to find a Strategy address for"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Output"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Strategy address that is associated with the specified token"})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(96540);const d={},r=s.createContext(d);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);