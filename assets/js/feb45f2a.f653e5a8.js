"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[6e3],{12734:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var d=n(74848),r=n(28453);const l={},t="Registry",i={id:"v3/smart-contracts/periphery/Registry",title:"Registry",description:"Git Source",source:"@site/docs/developers/v3/smart-contracts/periphery/Registry.md",sourceDirName:"v3/smart-contracts/periphery",slug:"/v3/smart-contracts/periphery/Registry",permalink:"/developers/v3/smart-contracts/periphery/Registry",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718899246e3,frontMatter:{},sidebar:"mySidebar",previous:{title:"Governance2Step",permalink:"/developers/v3/smart-contracts/periphery/Governance2Step"},next:{title:"RegistryFactory",permalink:"/developers/v3/smart-contracts/periphery/RegistryFactory"}},a={},c=[{value:"State Variables",id:"state-variables",level:2},{value:"releaseRegistry",id:"releaseregistry",level:3},{value:"MULTI_STRATEGY_TYPE",id:"multi_strategy_type",level:3},{value:"SINGLE_STRATEGY_TYPE",id:"single_strategy_type",level:3},{value:"name",id:"name",level:3},{value:"taggers",id:"taggers",level:3},{value:"endorsers",id:"endorsers",level:3},{value:"vaultInfo",id:"vaultinfo",level:3},{value:"assetIsUsed",id:"assetisused",level:3},{value:"_endorsedVaults",id:"_endorsedvaults",level:3},{value:"assets",id:"assets",level:3},{value:"Functions",id:"functions",level:2},{value:"onlyEndorsers",id:"onlyendorsers",level:3},{value:"onlyTaggers",id:"onlytaggers",level:3},{value:"_isEndorser",id:"_isendorser",level:3},{value:"_isTagger",id:"_istagger",level:3},{value:"constructor",id:"constructor",level:3},{value:"numAssets",id:"numassets",level:3},{value:"getAssets",id:"getassets",level:3},{value:"numEndorsedVaults",id:"numendorsedvaults",level:3},{value:"getEndorsedVaults",id:"getendorsedvaults",level:3},{value:"getAllEndorsedVaults",id:"getallendorsedvaults",level:3},{value:"isEndorsed",id:"isendorsed",level:3},{value:"newEndorsedVault",id:"newendorsedvault",level:3},{value:"newEndorsedVault",id:"newendorsedvault-1",level:3},{value:"endorseMultiStrategyVault",id:"endorsemultistrategyvault",level:3},{value:"endorseSingleStrategyVault",id:"endorsesinglestrategyvault",level:3},{value:"endorseVault",id:"endorsevault",level:3},{value:"_registerVault",id:"_registervault",level:3},{value:"tagVault",id:"tagvault",level:3},{value:"removeVault",id:"removevault",level:3},{value:"removeAsset",id:"removeasset",level:3},{value:"setEndorser",id:"setendorser",level:3},{value:"setTagger",id:"settagger",level:3},{value:"Events",id:"events",level:2},{value:"NewEndorsedVault",id:"newendorsedvault-2",level:3},{value:"RemovedVault",id:"removedvault",level:3},{value:"VaultTagged",id:"vaulttagged",level:3},{value:"UpdateTagger",id:"updatetagger",level:3},{value:"UpdateEndorser",id:"updateendorser",level:3},{value:"Structs",id:"structs",level:2},{value:"Info",id:"info",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h1,{id:"registry",children:"Registry"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/yearn/vault-periphery/blob/master/contracts/registry/Registry.sol",children:"Git Source"})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Inherits:"}),"\n",(0,d.jsx)(s.a,{href:"./Governance",children:"Governance"})]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Author:"}),"\nyearn.finance"]}),"\n",(0,d.jsx)(s.p,{children:"Serves as an on chain registry to track any Yearn\nvaults and strategies that a certain party wants to\nendorse.\nCan also be used to deploy new vaults of any specific\nAPI version."}),"\n",(0,d.jsx)(s.h2,{id:"state-variables",children:"State Variables"}),"\n",(0,d.jsx)(s.h3,{id:"releaseregistry",children:"releaseRegistry"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"address public immutable releaseRegistry;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"multi_strategy_type",children:"MULTI_STRATEGY_TYPE"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"uint256 public constant MULTI_STRATEGY_TYPE = 1;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"single_strategy_type",children:"SINGLE_STRATEGY_TYPE"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"uint256 public constant SINGLE_STRATEGY_TYPE = 2;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"name",children:"name"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"string public name;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"taggers",children:"taggers"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"mapping(address => bool) public taggers;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"endorsers",children:"endorsers"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"mapping(address => bool) public endorsers;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"vaultinfo",children:"vaultInfo"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"mapping(address => Info) public vaultInfo;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"assetisused",children:"assetIsUsed"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"mapping(address => bool) public assetIsUsed;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"_endorsedvaults",children:"_endorsedVaults"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"mapping(address => address[]) internal _endorsedVaults;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"assets",children:"assets"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"address[] public assets;\n"})}),"\n",(0,d.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,d.jsx)(s.h3,{id:"onlyendorsers",children:"onlyEndorsers"}),"\n",(0,d.jsxs)(s.p,{children:["Can only be gov or an ",(0,d.jsx)(s.code,{children:"endorser"}),"."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"modifier onlyEndorsers();\n"})}),"\n",(0,d.jsx)(s.h3,{id:"onlytaggers",children:"onlyTaggers"}),"\n",(0,d.jsxs)(s.p,{children:["Can only be gov or a ",(0,d.jsx)(s.code,{children:"tagger"}),"."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"modifier onlyTaggers();\n"})}),"\n",(0,d.jsx)(s.h3,{id:"_isendorser",children:"_isEndorser"}),"\n",(0,d.jsxs)(s.p,{children:["Check is gov or an ",(0,d.jsx)(s.code,{children:"endorser"}),"."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function _isEndorser() internal view;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"_istagger",children:"_isTagger"}),"\n",(0,d.jsxs)(s.p,{children:["Check is gov or a ",(0,d.jsx)(s.code,{children:"tagger"}),"."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function _isTagger() internal view;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"constructor",children:"constructor"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"constructor(address _governance, string memory _name, address _releaseRegistry) Governance(_governance);\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_governance"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"Address to set as owner of the Registry."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_name"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"The custom string for this custom registry to be called."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_releaseRegistry"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"The Permissionless releaseRegistry to deploy vaults through."})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"numassets",children:"numAssets"}),"\n",(0,d.jsx)(s.p,{children:"Returns the total number of assets being used as the underlying."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function numAssets() external view virtual returns (uint256);\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Returns"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"<none>"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"uint256"})}),(0,d.jsx)(s.td,{children:"The amount of assets."})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"getassets",children:"getAssets"}),"\n",(0,d.jsx)(s.p,{children:"Get the full array of tokens being used."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function getAssets() external view virtual returns (address[] memory);\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Returns"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"<none>"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address[]"})}),(0,d.jsx)(s.td,{children:"The full array of underlying tokens being used/."})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"numendorsedvaults",children:"numEndorsedVaults"}),"\n",(0,d.jsx)(s.p,{children:"The amount of endorsed vaults for a specific token."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function numEndorsedVaults(address _asset) public view virtual returns (uint256);\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Returns"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"<none>"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"uint256"})}),(0,d.jsx)(s.td,{children:"The amount of endorsed vaults."})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"getendorsedvaults",children:"getEndorsedVaults"}),"\n",(0,d.jsxs)(s.p,{children:["Get the array of vaults endorsed for an ",(0,d.jsx)(s.code,{children:"_asset"}),"."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function getEndorsedVaults(address _asset) external view virtual returns (address[] memory);\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_asset"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"The underlying token used by the vaults."})]})})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Returns"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"<none>"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address[]"})}),(0,d.jsx)(s.td,{children:"The endorsed vaults."})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"getallendorsedvaults",children:"getAllEndorsedVaults"}),"\n",(0,d.jsx)(s.p,{children:"Get all endorsed vaults deployed using the Registry."}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.em,{children:"This will return a nested array of all vaults deployed\nseparated by their underlying asset.\nThis is only meant for off chain viewing and should not be used during any\non chain tx's."})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function getAllEndorsedVaults() external view virtual returns (address[][] memory allEndorsedVaults);\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Returns"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"allEndorsedVaults"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address[][]"})}),(0,d.jsx)(s.td,{children:"A nested array containing all vaults."})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"isendorsed",children:"isEndorsed"}),"\n",(0,d.jsx)(s.p,{children:"Check if a vault is endorsed in this registry."}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsxs)(s.em,{children:["This will check if the ",(0,d.jsx)(s.code,{children:"asset"})," variable in the struct has been\nset for an easy external view check."]})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function isEndorsed(address _vault) external view virtual returns (bool);\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_vault"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"Address of the vault to check."})]})})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Returns"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"<none>"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"bool"})}),(0,d.jsx)(s.td,{children:". The vaults endorsement status."})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"newendorsedvault",children:"newEndorsedVault"}),"\n",(0,d.jsx)(s.p,{children:'Create and endorse a new multi strategy "Allocator"\nvault and endorse it in this registry.'}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:["Throws if caller isn't ",(0,d.jsx)(s.code,{children:"owner"}),".\nThrows if no releases are registered yet.\nEmits a ",(0,d.jsx)(s.code,{children:"NewEndorsedVault"})," event.*"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function newEndorsedVault(\n    address _asset,\n    string memory _name,\n    string memory _symbol,\n    address _roleManager,\n    uint256 _profitMaxUnlockTime\n) public virtual returns (address _vault);\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_asset"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"The asset that may be deposited into the new Vault."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_name"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"Specify a custom Vault name. ."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_symbol"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"Specify a custom Vault symbol name."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_roleManager"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"The address authorized for guardian interactions in the new Vault."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_profitMaxUnlockTime"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"uint256"})}),(0,d.jsx)(s.td,{children:"The time strategy profits will unlock over."})]})]})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Returns"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_vault"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"address of the newly-deployed vault"})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"newendorsedvault-1",children:"newEndorsedVault"}),"\n",(0,d.jsx)(s.p,{children:'Create and endorse a new multi strategy "Allocator"\nvault and endorse it in this registry.'}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:["Throws if caller isn't ",(0,d.jsx)(s.code,{children:"owner"}),".\nThrows if no releases are registered yet.\nEmits a ",(0,d.jsx)(s.code,{children:"NewEndorsedVault"})," event.*"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function newEndorsedVault(\n    address _asset,\n    string memory _name,\n    string memory _symbol,\n    address _roleManager,\n    uint256 _profitMaxUnlockTime,\n    uint256 _releaseDelta\n) public virtual onlyEndorsers returns (address _vault);\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_asset"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"The asset that may be deposited into the new Vault."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_name"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"Specify a custom Vault name. ."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_symbol"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"Specify a custom Vault symbol name."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_roleManager"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"The address authorized for guardian interactions in the new Vault."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_profitMaxUnlockTime"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"uint256"})}),(0,d.jsx)(s.td,{children:"The time strategy profits will unlock over."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_releaseDelta"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"uint256"})}),(0,d.jsx)(s.td,{children:"The number of releases prior to the latest to use as a target. NOTE: Set to 0 for latest."})]})]})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Returns"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_vault"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"address of the newly-deployed vault"})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"endorsemultistrategyvault",children:"endorseMultiStrategyVault"}),"\n",(0,d.jsx)(s.p,{children:"Endorse an already deployed multi strategy vault."}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsxs)(s.em,{children:["To be used with default values for ",(0,d.jsx)(s.code,{children:"_releaseDelta"}),", ",(0,d.jsx)(s.code,{children:"_vaultType"}),"\nand ",(0,d.jsx)(s.code,{children:"_deploymentTimestamp"}),"."]})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function endorseMultiStrategyVault(address _vault) external virtual;\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_vault"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"Address of the vault to endorse."})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"endorsesinglestrategyvault",children:"endorseSingleStrategyVault"}),"\n",(0,d.jsx)(s.p,{children:"Endorse an already deployed Single Strategy vault."}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsxs)(s.em,{children:["To be used with default values for ",(0,d.jsx)(s.code,{children:"_releaseDelta"}),", ",(0,d.jsx)(s.code,{children:"_vaultType"}),"\nand ",(0,d.jsx)(s.code,{children:"_deploymentTimestamp"}),"."]})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function endorseSingleStrategyVault(address _vault) external virtual;\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_vault"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"Address of the vault to endorse."})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"endorsevault",children:"endorseVault"}),"\n",(0,d.jsx)(s.p,{children:'Adds an existing vault to the list of "endorsed" vaults for that asset.'}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:["Throws if caller isn't ",(0,d.jsx)(s.code,{children:"owner"}),".\nThrows if no releases are registered yet.\nThrows if ",(0,d.jsx)(s.code,{children:"vault"}),"'s api version does not match the release specified.\nEmits a ",(0,d.jsx)(s.code,{children:"NewEndorsedVault"})," event.*"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function endorseVault(address _vault, uint256 _releaseDelta, uint256 _vaultType, uint256 _deploymentTimestamp)\n    public\n    virtual\n    onlyEndorsers;\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_vault"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"The vault that will be endorsed by the Registry."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_releaseDelta"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"uint256"})}),(0,d.jsx)(s.td,{children:"Specify the number of releases prior to the latest to use as a target."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_vaultType"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"uint256"})}),(0,d.jsx)(s.td,{children:"Type of vault to endorse."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_deploymentTimestamp"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"uint256"})}),(0,d.jsx)(s.td,{children:"The timestamp of when the vault was deployed for FE use."})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"_registervault",children:"_registerVault"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsxs)(s.em,{children:["Function used to register a newly deployed or added vault.\nThis well set all of the values for the vault in the ",(0,d.jsx)(s.code,{children:"vaultInfo"}),"\nmapping as well as add the vault and the underlying asset to any\nrelevant arrays for tracking."]})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function _registerVault(\n    address _vault,\n    address _asset,\n    uint256 _releaseTarget,\n    uint256 _vaultType,\n    uint256 _deploymentTimestamp\n) internal virtual;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"tagvault",children:"tagVault"}),"\n",(0,d.jsx)(s.p,{children:"Tag a vault with a specific string."}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.em,{children:'This is available to governance to tag any vault or strategy\non chain if desired to arbitrarily classify any vaults.\ni.e. Certain ratings ("A") / Vault status ("Shutdown") etc.'})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function tagVault(address _vault, string memory _tag) external virtual onlyTaggers;\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_vault"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"Address of the vault or strategy to tag."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_tag"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"The string to tag the vault or strategy with."})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"removevault",children:"removeVault"}),"\n",(0,d.jsxs)(s.p,{children:["Remove a ",(0,d.jsx)(s.code,{children:"_vault"}),"."]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsxs)(s.em,{children:["Can be used as an efficient way to remove a vault\nto not have to iterate over the full array.\nNOTE: This will not remove the asset from the ",(0,d.jsx)(s.code,{children:"assets"})," array\nif it is no longer in use and will have to be done manually."]})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function removeVault(address _vault) external virtual onlyEndorsers;\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_vault"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"Address of the vault to remove."})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"removeasset",children:"removeAsset"}),"\n",(0,d.jsxs)(s.p,{children:["Removes a specific ",(0,d.jsx)(s.code,{children:"_asset"})," at ",(0,d.jsx)(s.code,{children:"_index"})," from ",(0,d.jsx)(s.code,{children:"assets"}),"."]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.em,{children:"Can be used if an asset is no longer in use after a vault or\nstrategy has also been removed."})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function removeAsset(address _asset, uint256 _index) external virtual onlyEndorsers;\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_asset"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"The asset to remove from the array."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_index"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"uint256"})}),(0,d.jsx)(s.td,{children:"The index it sits at."})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"setendorser",children:"setEndorser"}),"\n",(0,d.jsx)(s.p,{children:"Set a new address to be able to endorse or remove an existing endorser."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function setEndorser(address _account, bool _canEndorse) external virtual onlyGovernance;\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_account"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"The address to set."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_canEndorse"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"bool"})}),(0,d.jsxs)(s.td,{children:["Bool if the ",(0,d.jsx)(s.code,{children:"_account"})," can or cannot endorse."]})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"settagger",children:"setTagger"}),"\n",(0,d.jsx)(s.p,{children:"Set a new address to be able to tag a vault."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"function setTagger(address _account, bool _canTag) external virtual onlyGovernance;\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_account"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"address"})}),(0,d.jsx)(s.td,{children:"The address to set."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_canTag"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"bool"})}),(0,d.jsxs)(s.td,{children:["Bool if the ",(0,d.jsx)(s.code,{children:"_account"})," can or cannot tag."]})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,d.jsx)(s.h3,{id:"newendorsedvault-2",children:"NewEndorsedVault"}),"\n",(0,d.jsx)(s.p,{children:"Emitted when a new vault is deployed or added."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"event NewEndorsedVault(address indexed vault, address indexed asset, uint256 releaseVersion, uint256 vaultType);\n"})}),"\n",(0,d.jsx)(s.h3,{id:"removedvault",children:"RemovedVault"}),"\n",(0,d.jsx)(s.p,{children:"Emitted when a vault is removed."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"event RemovedVault(address indexed vault, address indexed asset, uint256 releaseVersion, uint256 vaultType);\n"})}),"\n",(0,d.jsx)(s.h3,{id:"vaulttagged",children:"VaultTagged"}),"\n",(0,d.jsx)(s.p,{children:"Emitted when a vault is tagged which a string."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"event VaultTagged(address indexed vault);\n"})}),"\n",(0,d.jsx)(s.h3,{id:"updatetagger",children:"UpdateTagger"}),"\n",(0,d.jsxs)(s.p,{children:["Emitted when gov adds ore removes a ",(0,d.jsx)(s.code,{children:"tagger"}),"."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"event UpdateTagger(address indexed account, bool status);\n"})}),"\n",(0,d.jsx)(s.h3,{id:"updateendorser",children:"UpdateEndorser"}),"\n",(0,d.jsxs)(s.p,{children:["Emitted when gov adds ore removes a ",(0,d.jsx)(s.code,{children:"endorser"}),"."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"event UpdateEndorser(address indexed account, bool status);\n"})}),"\n",(0,d.jsx)(s.h2,{id:"structs",children:"Structs"}),"\n",(0,d.jsx)(s.h3,{id:"info",children:"Info"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-solidity",children:"struct Info {\n    address asset;\n    uint96 releaseVersion;\n    uint64 vaultType;\n    uint128 deploymentTimestamp;\n    uint64 index;\n    string tag;\n}\n"})})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>i});var d=n(96540);const r={},l=d.createContext(r);function t(e){const s=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(l.Provider,{value:s},e.children)}}}]);