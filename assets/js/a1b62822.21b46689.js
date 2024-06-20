"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[315],{49961:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=d(74848),t=d(28453);const r={},i="Accountant",l={id:"v3/smart-contracts/periphery/Accountant",title:"Accountant",description:"Git Source",source:"@site/docs/developers/v3/smart-contracts/periphery/Accountant.md",sourceDirName:"v3/smart-contracts/periphery",slug:"/v3/smart-contracts/periphery/Accountant",permalink:"/developers/v3/smart-contracts/periphery/Accountant",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718899246e3,frontMatter:{},sidebar:"mySidebar",previous:{title:"VaultV3.vy",permalink:"/developers/v3/smart-contracts/VaultV3"},next:{title:"AccountantFactory",permalink:"/developers/v3/smart-contracts/periphery/AccountantFactory"}},a={},c=[{value:"State Variables",id:"state-variables",level:2},{value:"MAX_BPS",id:"max_bps",level:3},{value:"SECS_PER_YEAR",id:"secs_per_year",level:3},{value:"MANAGEMENT_FEE_THRESHOLD",id:"management_fee_threshold",level:3},{value:"PERFORMANCE_FEE_THRESHOLD",id:"performance_fee_threshold",level:3},{value:"maxLoss",id:"maxloss",level:3},{value:"feeManager",id:"feemanager",level:3},{value:"feeRecipient",id:"feerecipient",level:3},{value:"vaultManager",id:"vaultmanager",level:3},{value:"futureFeeManager",id:"futurefeemanager",level:3},{value:"defaultConfig",id:"defaultconfig",level:3},{value:"vaults",id:"vaults",level:3},{value:"customConfig",id:"customconfig",level:3},{value:"skipHealthCheck",id:"skiphealthcheck",level:3},{value:"Functions",id:"functions",level:2},{value:"onlyFeeManager",id:"onlyfeemanager",level:3},{value:"onlyVaultOrFeeManager",id:"onlyvaultorfeemanager",level:3},{value:"onlyFeeManagerOrRecipient",id:"onlyfeemanagerorrecipient",level:3},{value:"onlyAddedVaults",id:"onlyaddedvaults",level:3},{value:"_checkFeeManager",id:"_checkfeemanager",level:3},{value:"_checkVaultOrFeeManager",id:"_checkvaultorfeemanager",level:3},{value:"_checkFeeManagerOrRecipient",id:"_checkfeemanagerorrecipient",level:3},{value:"_checkVaultIsAdded",id:"_checkvaultisadded",level:3},{value:"constructor",id:"constructor",level:3},{value:"report",id:"report",level:3},{value:"addVault",id:"addvault",level:3},{value:"removeVault",id:"removevault",level:3},{value:"updateDefaultConfig",id:"updatedefaultconfig",level:3},{value:"_updateDefaultConfig",id:"_updatedefaultconfig",level:3},{value:"setCustomConfig",id:"setcustomconfig",level:3},{value:"removeCustomConfig",id:"removecustomconfig",level:3},{value:"turnOffHealthCheck",id:"turnoffhealthcheck",level:3},{value:"useCustomConfig",id:"usecustomconfig",level:3},{value:"getVaultConfig",id:"getvaultconfig",level:3},{value:"redeemUnderlying",id:"redeemunderlying",level:3},{value:"redeemUnderlying",id:"redeemunderlying-1",level:3},{value:"setMaxLoss",id:"setmaxloss",level:3},{value:"distribute",id:"distribute",level:3},{value:"distribute",id:"distribute-1",level:3},{value:"setFutureFeeManager",id:"setfuturefeemanager",level:3},{value:"acceptFeeManager",id:"acceptfeemanager",level:3},{value:"setVaultManager",id:"setvaultmanager",level:3},{value:"setFeeRecipient",id:"setfeerecipient",level:3},{value:"_checkAllowance",id:"_checkallowance",level:3},{value:"Events",id:"events",level:2},{value:"VaultChanged",id:"vaultchanged",level:3},{value:"UpdateDefaultFeeConfig",id:"updatedefaultfeeconfig",level:3},{value:"SetFutureFeeManager",id:"setfuturefeemanager-1",level:3},{value:"NewFeeManager",id:"newfeemanager",level:3},{value:"UpdateVaultManager",id:"updatevaultmanager",level:3},{value:"UpdateFeeRecipient",id:"updatefeerecipient",level:3},{value:"UpdateCustomFeeConfig",id:"updatecustomfeeconfig",level:3},{value:"RemovedCustomFeeConfig",id:"removedcustomfeeconfig",level:3},{value:"UpdateMaxLoss",id:"updatemaxloss",level:3},{value:"DistributeRewards",id:"distributerewards",level:3},{value:"Structs",id:"structs",level:2},{value:"Fee",id:"fee",level:3},{value:"Enums",id:"enums",level:2},{value:"ChangeType",id:"changetype",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"accountant",children:"Accountant"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/yearn/vault-periphery/blob/master/contracts/accountants/Accountant.sol",children:"Git Source"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Will charge fees, issue refunds, and run health check on any reported\ngains or losses during a strategy's report."})}),"\n",(0,s.jsx)(n.h2,{id:"state-variables",children:"State Variables"}),"\n",(0,s.jsx)(n.h3,{id:"max_bps",children:"MAX_BPS"}),"\n",(0,s.jsx)(n.p,{children:"Constant defining the maximum basis points."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"uint256 internal constant MAX_BPS = 10_000;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"secs_per_year",children:"SECS_PER_YEAR"}),"\n",(0,s.jsx)(n.p,{children:"Constant defining the number of seconds in a year."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"uint256 internal constant SECS_PER_YEAR = 31_556_952;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"management_fee_threshold",children:"MANAGEMENT_FEE_THRESHOLD"}),"\n",(0,s.jsx)(n.p,{children:"Constant defining the management fee threshold."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"uint16 public constant MANAGEMENT_FEE_THRESHOLD = 200;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"performance_fee_threshold",children:"PERFORMANCE_FEE_THRESHOLD"}),"\n",(0,s.jsx)(n.p,{children:"Constant defining the performance fee threshold."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"uint16 public constant PERFORMANCE_FEE_THRESHOLD = 5_000;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"maxloss",children:"maxLoss"}),"\n",(0,s.jsx)(n.p,{children:"The amount of max loss to use when redeeming from vaults."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"uint256 public maxLoss;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"feemanager",children:"feeManager"}),"\n",(0,s.jsx)(n.p,{children:"The address of the fee manager."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"address public feeManager;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"feerecipient",children:"feeRecipient"}),"\n",(0,s.jsx)(n.p,{children:"The address of the fee recipient."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"address public feeRecipient;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"vaultmanager",children:"vaultManager"}),"\n",(0,s.jsx)(n.p,{children:"An address that can add or remove vaults."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"address public vaultManager;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"futurefeemanager",children:"futureFeeManager"}),"\n",(0,s.jsx)(n.p,{children:"The address of the future fee manager."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"address public futureFeeManager;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"defaultconfig",children:"defaultConfig"}),"\n",(0,s.jsx)(n.p,{children:"The default fee configuration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"Fee public defaultConfig;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"vaults",children:"vaults"}),"\n",(0,s.jsx)(n.p,{children:"Mapping to track added vaults."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"mapping(address => bool) public vaults;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"customconfig",children:"customConfig"}),"\n",(0,s.jsx)(n.p,{children:"Mapping vault => custom Fee config if any."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"mapping(address => Fee) public customConfig;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"skiphealthcheck",children:"skipHealthCheck"}),"\n",(0,s.jsx)(n.p,{children:"Mapping vault => strategy => flag for one time healthcheck skips."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"mapping(address => mapping(address => bool)) skipHealthCheck;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(n.h3,{id:"onlyfeemanager",children:"onlyFeeManager"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"modifier onlyFeeManager();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"onlyvaultorfeemanager",children:"onlyVaultOrFeeManager"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"modifier onlyVaultOrFeeManager();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"onlyfeemanagerorrecipient",children:"onlyFeeManagerOrRecipient"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"modifier onlyFeeManagerOrRecipient();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"onlyaddedvaults",children:"onlyAddedVaults"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"modifier onlyAddedVaults();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"_checkfeemanager",children:"_checkFeeManager"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function _checkFeeManager() internal view virtual;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"_checkvaultorfeemanager",children:"_checkVaultOrFeeManager"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function _checkVaultOrFeeManager() internal view virtual;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"_checkfeemanagerorrecipient",children:"_checkFeeManagerOrRecipient"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function _checkFeeManagerOrRecipient() internal view virtual;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"_checkvaultisadded",children:"_checkVaultIsAdded"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function _checkVaultIsAdded() internal view virtual;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"constructor(\n    address _feeManager,\n    address _feeRecipient,\n    uint16 defaultManagement,\n    uint16 defaultPerformance,\n    uint16 defaultRefund,\n    uint16 defaultMaxFee,\n    uint16 defaultMaxGain,\n    uint16 defaultMaxLoss\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"report",children:"report"}),"\n",(0,s.jsxs)(n.p,{children:["Called by a vault when a ",(0,s.jsx)(n.code,{children:"strategy"})," is reporting."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["The msg.sender must have been added to the ",(0,s.jsx)(n.code,{children:"vaults"})," mapping."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function report(address strategy, uint256 gain, uint256 loss)\n    public\n    virtual\n    onlyAddedVaults\n    returns (uint256 totalFees, uint256 totalRefunds);\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"strategy"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"Address of the strategy reporting."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"gain"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsx)(n.td,{children:"Amount of the gain if any."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"loss"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsx)(n.td,{children:"Amount of the loss if any."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"totalFees"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsx)(n.td,{children:"if any to charge."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"totalRefunds"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsx)(n.td,{children:"if any for the vault to pull."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"addvault",children:"addVault"}),"\n",(0,s.jsx)(n.p,{children:"Function to add a new vault for this accountant to charge fees for."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This is not used to set any of the fees for the specific vault or strategy. Each fee will be set separately."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function addVault(address vault) external virtual onlyVaultOrFeeManager;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vault"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"The address of a vault to allow to use this accountant."})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"removevault",children:"removeVault"}),"\n",(0,s.jsx)(n.p,{children:"Function to remove a vault from this accountant's fee charging list."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function removeVault(address vault) external virtual onlyVaultOrFeeManager;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vault"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"The address of the vault to be removed from this accountant."})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"updatedefaultconfig",children:"updateDefaultConfig"}),"\n",(0,s.jsx)(n.p,{children:"Function to update the default fee configuration used for\nall strategies that don't have a custom config set."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function updateDefaultConfig(\n    uint16 defaultManagement,\n    uint16 defaultPerformance,\n    uint16 defaultRefund,\n    uint16 defaultMaxFee,\n    uint16 defaultMaxGain,\n    uint16 defaultMaxLoss\n) external virtual onlyFeeManager;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"defaultManagement"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint16"})}),(0,s.jsx)(n.td,{children:"Default annual management fee to charge."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"defaultPerformance"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint16"})}),(0,s.jsx)(n.td,{children:"Default performance fee to charge."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"defaultRefund"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint16"})}),(0,s.jsx)(n.td,{children:"Default refund ratio to give back on losses."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"defaultMaxFee"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint16"})}),(0,s.jsx)(n.td,{children:"Default max fee to allow as a percent of gain."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"defaultMaxGain"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint16"})}),(0,s.jsx)(n.td,{children:"Default max percent gain a strategy can report."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"defaultMaxLoss"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint16"})}),(0,s.jsx)(n.td,{children:"Default max percent loss a strategy can report."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"_updatedefaultconfig",children:"_updateDefaultConfig"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Updates the Accountant's default fee config.\nIs used during deployment and during any future updates."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function _updateDefaultConfig(\n    uint16 defaultManagement,\n    uint16 defaultPerformance,\n    uint16 defaultRefund,\n    uint16 defaultMaxFee,\n    uint16 defaultMaxGain,\n    uint16 defaultMaxLoss\n) internal virtual;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setcustomconfig",children:"setCustomConfig"}),"\n",(0,s.jsx)(n.p,{children:"Function to set a custom fee configuration for a specific vault."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function setCustomConfig(\n    address vault,\n    uint16 customManagement,\n    uint16 customPerformance,\n    uint16 customRefund,\n    uint16 customMaxFee,\n    uint16 customMaxGain,\n    uint16 customMaxLoss\n) external virtual onlyFeeManager;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vault"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"The vault the strategy is hooked up to."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"customManagement"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint16"})}),(0,s.jsx)(n.td,{children:"Custom annual management fee to charge."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"customPerformance"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint16"})}),(0,s.jsx)(n.td,{children:"Custom performance fee to charge."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"customRefund"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint16"})}),(0,s.jsx)(n.td,{children:"Custom refund ratio to give back on losses."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"customMaxFee"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint16"})}),(0,s.jsx)(n.td,{children:"Custom max fee to allow as a percent of gain."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"customMaxGain"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint16"})}),(0,s.jsx)(n.td,{children:"Custom max percent gain a strategy can report."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"customMaxLoss"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint16"})}),(0,s.jsx)(n.td,{children:"Custom max percent loss a strategy can report."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"removecustomconfig",children:"removeCustomConfig"}),"\n",(0,s.jsx)(n.p,{children:"Function to remove a previously set custom fee configuration for a vault."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function removeCustomConfig(address vault) external virtual onlyFeeManager;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vault"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"The vault to remove custom setting for."})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"turnoffhealthcheck",children:"turnOffHealthCheck"}),"\n",(0,s.jsxs)(n.p,{children:["Turn off the health check for a specific ",(0,s.jsx)(n.code,{children:"vault"})," ",(0,s.jsx)(n.code,{children:"strategy"})," combo."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This will only last for one report and get automatically turned back on."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function turnOffHealthCheck(address vault, address strategy) external virtual onlyFeeManager;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vault"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"Address of the vault."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"strategy"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"Address of the strategy."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"usecustomconfig",children:"useCustomConfig"}),"\n",(0,s.jsx)(n.p,{children:"Public getter to check for custom setting."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"We use uint256 for the flag since its cheaper so this\nwill convert it to a bool for easy view functions."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function useCustomConfig(address vault) external view virtual returns (bool);\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vault"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"Address of the vault."})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<none>"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bool"})}),(0,s.jsx)(n.td,{children:"If a custom fee config is set."})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"getvaultconfig",children:"getVaultConfig"}),"\n",(0,s.jsxs)(n.p,{children:["Get the full config used for a specific ",(0,s.jsx)(n.code,{children:"vault"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function getVaultConfig(address vault) external view returns (Fee memory fee);\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vault"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"Address of the vault."})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"fee"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Fee"})}),(0,s.jsx)(n.td,{children:"The config that would be used during the report."})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"redeemunderlying",children:"redeemUnderlying"}),"\n",(0,s.jsx)(n.p,{children:"Function to redeem the underlying asset from a vault."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Will default to using the full balance of the vault."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function redeemUnderlying(address vault) external virtual;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vault"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"The vault to redeem from."})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"redeemunderlying-1",children:"redeemUnderlying"}),"\n",(0,s.jsx)(n.p,{children:"Function to redeem the underlying asset from a vault."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function redeemUnderlying(address vault, uint256 amount) public virtual onlyFeeManager;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vault"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"The vault to redeem from."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"amount"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsx)(n.td,{children:"The amount in vault shares to redeem."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"setmaxloss",children:"setMaxLoss"}),"\n",(0,s.jsxs)(n.p,{children:["Sets the ",(0,s.jsx)(n.code,{children:"maxLoss"})," parameter to be used on redeems."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function setMaxLoss(uint256 _maxLoss) external virtual onlyFeeManager;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_maxLoss"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsx)(n.td,{children:"The amount in basis points to set as the maximum loss."})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"distribute",children:"distribute"}),"\n",(0,s.jsx)(n.p,{children:"Function to distribute all accumulated fees to the designated recipient."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function distribute(address token) external virtual;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"token"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"The token to distribute."})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"distribute-1",children:"distribute"}),"\n",(0,s.jsx)(n.p,{children:"Function to distribute accumulated fees to the designated recipient."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function distribute(address token, uint256 amount) public virtual onlyFeeManagerOrRecipient;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"token"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"The token to distribute."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"amount"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsx)(n.td,{children:"amount of token to distribute."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"setfuturefeemanager",children:"setFutureFeeManager"}),"\n",(0,s.jsx)(n.p,{children:"Function to set a future fee manager address."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function setFutureFeeManager(address _futureFeeManager) external virtual onlyFeeManager;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_futureFeeManager"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"The address to set as the future fee manager."})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"acceptfeemanager",children:"acceptFeeManager"}),"\n",(0,s.jsx)(n.p,{children:"Function to accept the role change and become the new fee manager."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This function allows the future fee manager to accept the role change and become the new fee manager."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function acceptFeeManager() external virtual;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setvaultmanager",children:"setVaultManager"}),"\n",(0,s.jsx)(n.p,{children:"Function to set a new vault manager."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function setVaultManager(address newVaultManager) external virtual onlyFeeManager;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"newVaultManager"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"Address to add or remove vaults."})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"setfeerecipient",children:"setFeeRecipient"}),"\n",(0,s.jsx)(n.p,{children:"Function to set a new address to receive distributed rewards."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function setFeeRecipient(address newFeeRecipient) external virtual onlyFeeManager;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"newFeeRecipient"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"Address to receive distributed fees."})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"_checkallowance",children:"_checkAllowance"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Internal safe function to make sure the contract you want to\ninteract with has enough allowance to pull the desired tokens."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function _checkAllowance(address _contract, address _token, uint256 _amount) internal;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_contract"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"The address of the contract that will move the token."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_token"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"The ERC-20 token that will be getting spent."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_amount"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsxs)(n.td,{children:["The amount of ",(0,s.jsx)(n.code,{children:"_token"})," to be spent."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(n.h3,{id:"vaultchanged",children:"VaultChanged"}),"\n",(0,s.jsx)(n.p,{children:"An event emitted when a vault is added or removed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"event VaultChanged(address indexed vault, ChangeType change);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"updatedefaultfeeconfig",children:"UpdateDefaultFeeConfig"}),"\n",(0,s.jsx)(n.p,{children:"An event emitted when the default fee configuration is updated."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"event UpdateDefaultFeeConfig(Fee defaultFeeConfig);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setfuturefeemanager-1",children:"SetFutureFeeManager"}),"\n",(0,s.jsx)(n.p,{children:"An event emitted when the future fee manager is set."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"event SetFutureFeeManager(address indexed futureFeeManager);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"newfeemanager",children:"NewFeeManager"}),"\n",(0,s.jsx)(n.p,{children:"An event emitted when a new fee manager is accepted."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"event NewFeeManager(address indexed feeManager);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"updatevaultmanager",children:"UpdateVaultManager"}),"\n",(0,s.jsx)(n.p,{children:"An event emitted when a new vault manager is set."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"event UpdateVaultManager(address indexed newVaultManager);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"updatefeerecipient",children:"UpdateFeeRecipient"}),"\n",(0,s.jsx)(n.p,{children:"An event emitted when the fee recipient is updated."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"event UpdateFeeRecipient(address indexed oldFeeRecipient, address indexed newFeeRecipient);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"updatecustomfeeconfig",children:"UpdateCustomFeeConfig"}),"\n",(0,s.jsx)(n.p,{children:"An event emitted when a custom fee configuration is updated."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"event UpdateCustomFeeConfig(address indexed vault, Fee custom_config);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"removedcustomfeeconfig",children:"RemovedCustomFeeConfig"}),"\n",(0,s.jsx)(n.p,{children:"An event emitted when a custom fee configuration is removed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"event RemovedCustomFeeConfig(address indexed vault);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"updatemaxloss",children:"UpdateMaxLoss"}),"\n",(0,s.jsxs)(n.p,{children:["An event emitted when the ",(0,s.jsx)(n.code,{children:"maxLoss"})," parameter is updated."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"event UpdateMaxLoss(uint256 maxLoss);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"distributerewards",children:"DistributeRewards"}),"\n",(0,s.jsx)(n.p,{children:"An event emitted when rewards are distributed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"event DistributeRewards(address indexed token, uint256 rewards);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"structs",children:"Structs"}),"\n",(0,s.jsx)(n.h3,{id:"fee",children:"Fee"}),"\n",(0,s.jsx)(n.p,{children:"Struct representing fee details."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"struct Fee {\n    uint16 managementFee;\n    uint16 performanceFee;\n    uint16 refundRatio;\n    uint16 maxFee;\n    uint16 maxGain;\n    uint16 maxLoss;\n    bool custom;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"enums",children:"Enums"}),"\n",(0,s.jsx)(n.h3,{id:"changetype",children:"ChangeType"}),"\n",(0,s.jsx)(n.p,{children:"Enum defining change types (added or removed)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"enum ChangeType {\n    NULL,\n    ADDED,\n    REMOVED\n}\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>l});var s=d(96540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);