"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[2626],{47790:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(74848),t=n(28453);const i={},d="Yearn4626Router",l={id:"v3/smart-contracts/periphery/Yearn4626Router/Yearn4626Router",title:"Yearn4626Router",description:"Git Source",source:"@site/docs/developers/v3/smart-contracts/periphery/Yearn4626Router/Yearn4626Router.md",sourceDirName:"v3/smart-contracts/periphery/Yearn4626Router",slug:"/v3/smart-contracts/periphery/Yearn4626Router/",permalink:"/developers/v3/smart-contracts/periphery/Yearn4626Router/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718899246e3,frontMatter:{},sidebar:"mySidebar",previous:{title:"RoleManager",permalink:"/developers/v3/smart-contracts/periphery/RoleManager"},next:{title:"Multicall",permalink:"/developers/v3/smart-contracts/periphery/Yearn4626Router/Multicall"}},a={},c=[{value:"State Variables",id:"state-variables",level:2},{value:"_name",id:"_name",level:3},{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"name",id:"name",level:3},{value:"depositToVault",id:"deposittovault",level:3},{value:"depositToVault",id:"deposittovault-1",level:3},{value:"depositToVault",id:"deposittovault-2",level:3},{value:"depositToVault",id:"deposittovault-3",level:3},{value:"redeem",id:"redeem",level:3},{value:"redeem",id:"redeem-1",level:3},{value:"redeem",id:"redeem-2",level:3},{value:"migrate",id:"migrate",level:3},{value:"migrate",id:"migrate-1",level:3},{value:"migrate",id:"migrate-2",level:3},{value:"migrate",id:"migrate-3",level:3},{value:"migrateFromV2",id:"migratefromv2",level:3},{value:"migrateFromV2",id:"migratefromv2-1",level:3},{value:"migrateFromV2",id:"migratefromv2-2",level:3},{value:"migrateFromV2",id:"migratefromv2-3",level:3}];function o(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"yearn4626router",children:"Yearn4626Router"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/yearn/Yearn-ERC4626-Router/blob/master/src/Yearn4626Router.sol",children:"Git Source"})}),"\n",(0,s.jsxs)(r.p,{children:["Router that is meant to be used with Yearn V3 vaults and strategies\nfor deposits, withdraws and migrations.\nThe router was developed from the original router by FEI protocol\n",(0,s.jsx)(r.a,{href:"https://github.com/fei-protocol/ERC4626",children:"https://github.com/fei-protocol/ERC4626"}),"\nThe router is designed to be used with permit and multicall for the\noptimal experience.\nNOTE: It is important to never leave tokens in the router at the\nend of a call, otherwise they can be swept by anyone."]}),"\n",(0,s.jsx)(r.h2,{id:"state-variables",children:"State Variables"}),"\n",(0,s.jsx)(r.h3,{id:"_name",children:"_name"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"bytes32 private immutable _name;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(r.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"constructor(string memory _name_, IWETH9 weth) PeripheryPayments(weth);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"name",children:"name"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function name() external view returns (string memory);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"deposittovault",children:"depositToVault"}),"\n",(0,s.jsxs)(r.p,{children:["deposit ",(0,s.jsx)(r.code,{children:"amount"})," to an ERC4626 vault."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:'throws "!minShares" Error.'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function depositToVault(IYearn4626 vault, uint256 amount, address to, uint256 minSharesOut)\n    public\n    payable\n    override\n    returns (uint256);\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"vault"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"IYearn4626"})}),(0,s.jsx)(r.td,{children:"The ERC4626 vault to deposit assets to."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"amount"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"uint256"})}),(0,s.jsxs)(r.td,{children:["The amount of assets to deposit to ",(0,s.jsx)(r.code,{children:"vault"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"to"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"address"})}),(0,s.jsx)(r.td,{children:"The destination of ownership shares."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"minSharesOut"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"uint256"})}),(0,s.jsxs)(r.td,{children:["The min amount of ",(0,s.jsx)(r.code,{children:"vault"})," shares received by ",(0,s.jsx)(r.code,{children:"to"}),"."]})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"<none>"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"uint256"})}),(0,s.jsxs)(r.td,{children:[". the amount of shares received by ",(0,s.jsx)(r.code,{children:"to"}),"."]})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"deposittovault-1",children:"depositToVault"}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"#deposittovault",children:"depositToVault"})," in IYearn4626Router."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Uses msg.sender as the default for ",(0,s.jsx)(r.code,{children:"to"}),"."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function depositToVault(IYearn4626 vault, uint256 amount, uint256 minSharesOut) external payable returns (uint256);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"deposittovault-2",children:"depositToVault"}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"#deposittovault",children:"depositToVault"})," in IYearn4626Router."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Uses msg.sender as the default for ",(0,s.jsx)(r.code,{children:"to"})," and their full\nbalance of msg.sender as ",(0,s.jsx)(r.code,{children:"amount"}),"."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function depositToVault(IYearn4626 vault, uint256 minSharesOut) external payable returns (uint256);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"deposittovault-3",children:"depositToVault"}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"#deposittovault",children:"depositToVault"})," in IYearn4626Router."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Uses msg.sender as the default for ",(0,s.jsx)(r.code,{children:"to"}),", their full balance\nof msg.sender as ",(0,s.jsx)(r.code,{children:"amount"})," and 1 Basis point for ",(0,s.jsx)(r.code,{children:"maxLoss"}),".\nNOTE: The slippage tollerance is only useful if ",(0,s.jsx)(r.code,{children:"previewDeposit"}),"\ncannot be manipulated for the ",(0,s.jsx)(r.code,{children:"vault"}),"."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function depositToVault(IYearn4626 vault) external payable returns (uint256);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"redeem",children:"redeem"}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"/developers/v3/smart-contracts/periphery/Yearn4626Router/Yearn4626RouterBase#redeem",children:"redeem"})," in IYearn4626RouterBase."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Uses msg.sender as ",(0,s.jsx)(r.code,{children:"receiver"}),"."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function redeem(IYearn4626 vault, uint256 shares, uint256 maxLoss) external payable returns (uint256);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"redeem-1",children:"redeem"}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"/developers/v3/smart-contracts/periphery/Yearn4626Router/Yearn4626RouterBase#redeem",children:"redeem"})," in IYearn4626RouterBase."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Uses msg.sender as ",(0,s.jsx)(r.code,{children:"receiver"})," and their full balance as ",(0,s.jsx)(r.code,{children:"shares"}),"."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function redeem(IYearn4626 vault, uint256 maxLoss) external payable returns (uint256);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"redeem-2",children:"redeem"}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"/developers/v3/smart-contracts/periphery/Yearn4626Router/Yearn4626RouterBase#redeem",children:"redeem"})," in IYearn4626RouterBase."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Uses msg.sender as ",(0,s.jsx)(r.code,{children:"receiver"}),", their full balance as ",(0,s.jsx)(r.code,{children:"shares"}),"\nand 1 Basis Point for ",(0,s.jsx)(r.code,{children:"maxLoss"}),"."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function redeem(IYearn4626 vault) external payable returns (uint256);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"migrate",children:"migrate"}),"\n",(0,s.jsxs)(r.p,{children:["will redeem ",(0,s.jsx)(r.code,{children:"shares"})," from one vault and deposit amountOut to a different ERC4626 vault."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:'throws "!minAmount", "!minShares" Errors.'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function migrate(IYearn4626 fromVault, IYearn4626 toVault, uint256 shares, address to, uint256 minSharesOut)\n    public\n    payable\n    override\n    returns (uint256);\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"fromVault"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"IYearn4626"})}),(0,s.jsx)(r.td,{children:"The ERC4626 vault to redeem shares from."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"toVault"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"IYearn4626"})}),(0,s.jsx)(r.td,{children:"The ERC4626 vault to deposit assets to."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"shares"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"uint256"})}),(0,s.jsx)(r.td,{children:"The amount of shares to redeem from fromVault."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"to"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"address"})}),(0,s.jsx)(r.td,{children:"The destination of ownership shares."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"minSharesOut"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"uint256"})}),(0,s.jsxs)(r.td,{children:["The min amount of toVault shares received by ",(0,s.jsx)(r.code,{children:"to"}),"."]})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"<none>"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"uint256"})}),(0,s.jsxs)(r.td,{children:[". the amount of shares received by ",(0,s.jsx)(r.code,{children:"to"}),"."]})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"migrate-1",children:"migrate"}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"#migrate",children:"migrate"})," in IYearn4626Router."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Uses msg.sender as ",(0,s.jsx)(r.code,{children:"to"}),"."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function migrate(IYearn4626 fromVault, IYearn4626 toVault, uint256 shares, uint256 minSharesOut)\n    external\n    payable\n    returns (uint256);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"migrate-2",children:"migrate"}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"#migrate",children:"migrate"})," in IYearn4626Router."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Uses msg.sender as ",(0,s.jsx)(r.code,{children:"to"})," and their full balance for ",(0,s.jsx)(r.code,{children:"shares"}),"."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function migrate(IYearn4626 fromVault, IYearn4626 toVault, uint256 minSharesOut) external payable returns (uint256);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"migrate-3",children:"migrate"}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"#migrate",children:"migrate"})," in IYearn4626Router."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Uses msg.sender as ",(0,s.jsx)(r.code,{children:"to"}),", their full balance for ",(0,s.jsx)(r.code,{children:"shares"})," and no ",(0,s.jsx)(r.code,{children:"minamountOut"}),".\nNOTE: Using this will enforce no slippage checks and should be used with care."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function migrate(IYearn4626 fromVault, IYearn4626 toVault) external payable returns (uint256);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"migratefromv2",children:"migrateFromV2"}),"\n",(0,s.jsx)(r.p,{children:"migrate from Yearn V2 vault to a V3 vault'."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:'throws "!minAmount", "!minShares" Errors.'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function migrateFromV2(IYearnV2 fromVault, IYearn4626 toVault, uint256 shares, address to, uint256 minSharesOut)\n    public\n    payable\n    override\n    returns (uint256);\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"fromVault"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"IYearnV2"})}),(0,s.jsx)(r.td,{children:"The Yearn V2 vault to withdraw from."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"toVault"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"IYearn4626"})}),(0,s.jsx)(r.td,{children:"The Yearn V3 vault to deposit assets to."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"shares"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"uint256"})}),(0,s.jsx)(r.td,{children:"The amount of V2 shares to redeem form 'fromVault'."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"to"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"address"})}),(0,s.jsx)(r.td,{children:"The destination of ownership shares"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"minSharesOut"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"uint256"})}),(0,s.jsx)(r.td,{children:"The min amount of 'toVault' shares to be received by 'to'."})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"<none>"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"uint256"})}),(0,s.jsx)(r.td,{children:". The actual amount of 'toVault' shares received by 'to'."})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"migratefromv2-1",children:"migrateFromV2"}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"#migratefromv2",children:"migrateFromV2"})," in IYearn4626Router."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Uses msg.sender as ",(0,s.jsx)(r.code,{children:"to"}),"."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function migrateFromV2(IYearnV2 fromVault, IYearn4626 toVault, uint256 shares, uint256 minSharesOut)\n    external\n    payable\n    returns (uint256);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"migratefromv2-2",children:"migrateFromV2"}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"#migratefromv2",children:"migrateFromV2"})," in IYearn4626Router."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Uses msg.sender as ",(0,s.jsx)(r.code,{children:"to"})," and their full balance as ",(0,s.jsx)(r.code,{children:"shares"}),"."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function migrateFromV2(IYearnV2 fromVault, IYearn4626 toVault, uint256 minSharesOut)\n    external\n    payable\n    returns (uint256);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"migratefromv2-3",children:"migrateFromV2"}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"#migrate",children:"migrate"})," in IYearn4626Router."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Uses msg.sender as ",(0,s.jsx)(r.code,{children:"to"}),", their full balance for ",(0,s.jsx)(r.code,{children:"shares"})," and no ",(0,s.jsx)(r.code,{children:"minamountOut"}),".\nNOTE: Using this will enforce no slippage checks and should be used with care."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:"function migrateFromV2(IYearnV2 fromVault, IYearn4626 toVault) external payable returns (uint256 sharesOut);\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>l});var s=n(96540);const t={},i=s.createContext(t);function d(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);