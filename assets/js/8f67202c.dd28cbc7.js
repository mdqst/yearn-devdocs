"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[5619],{66259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(74848),a=r(28453);const s={},o="Periphery",i={id:"v3/periphery",title:"Periphery",description:'Yearn V3 is built to be modular and customizable by anyone wishing to run their own vault. In order to do this the core code has been left as un-opinionated as possible while allowing it to be customized through the use of optional "Periphery" contracts or "modules".',source:"@site/docs/developers/v3/periphery.md",sourceDirName:"v3",slug:"/v3/periphery",permalink:"/developers/v3/periphery",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1724183848e3,frontMatter:{},sidebar:"developers",previous:{title:"Deploying and Managing a V3 Vault",permalink:"/developers/v3/vault_management"},next:{title:"Protocol Fees",permalink:"/developers/v3/protocol_fees"}},l={},c=[{value:"Vault Periphery",id:"vault-periphery",level:2},{value:"Release Registry",id:"release-registry",level:3},{value:"Registry",id:"registry",level:3},{value:"Accountant",id:"accountant",level:3},{value:"Debt Allocator",id:"debt-allocator",level:3},{value:"Role Manager",id:"role-manager",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"periphery",children:"Periphery"})}),"\n",(0,n.jsx)(t.p,{children:'Yearn V3 is built to be modular and customizable by anyone wishing to run their own vault. In order to do this the core code has been left as un-opinionated as possible while allowing it to be customized through the use of optional "Periphery" contracts or "modules".'}),"\n",(0,n.jsx)(t.p,{children:"This is a non-exhaustive list of the current periphery contracts developed or deployed in order to assist those wishing to deploy/manage their own V3 vaults."}),"\n",(0,n.jsx)(t.p,{children:"For the most updated contracts visit:"}),"\n",(0,n.jsxs)(t.p,{children:["Vault Periphery Repo: ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/vault-periphery",children:"https://github.com/yearn/vault-periphery"}),"\nTokenizedStrategy Periphery: ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/tokenized-strategy-periphery",children:"https://github.com/yearn/tokenized-strategy-periphery"})]}),"\n",(0,n.jsxs)(t.p,{children:["The deployed address of most periphery contracts or their corresponding factories can be found on chain from the Protocol Address provider: ",(0,n.jsx)(t.code,{children:"0x1e9778aAD41Aa3E0884C276fB4C2D03C4036Aa0B"})]}),"\n",(0,n.jsxs)(t.p,{children:["The Yearn specific periphery contracts can be retrieved from that chains ",(0,n.jsx)(t.a,{href:"/getting-started/products/addresses#ethereum-contracts",children:"Role Manager"})]}),"\n",(0,n.jsx)(t.h2,{id:"vault-periphery",children:"Vault Periphery"}),"\n",(0,n.jsx)(t.p,{children:"The contracts in the 'Vault Periphery' are meant to be used alongside a V3 multi strategy vault in order to help add additional functionality."}),"\n",(0,n.jsx)(t.h3,{id:"release-registry",children:"Release Registry"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/yearn/vault-periphery/blob/master/contracts/registry/ReleaseRegistry.sol",children:"https://github.com/yearn/vault-periphery/blob/master/contracts/registry/ReleaseRegistry.sol"})}),"\n",(0,n.jsx)(t.p,{children:"Yearn controlled registry to track any new versions of V3 released on that specific chain."}),"\n",(0,n.jsxs)(t.p,{children:["Each time a new Version of the ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults-v3/blob/master/contracts/VaultFactory.vy",children:"Vault Factory"})," is deployed it will get added to the Release Registry."]}),"\n",(0,n.jsx)(t.h3,{id:"registry",children:"Registry"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/yearn/vault-periphery/blob/master/contracts/registry/Registry.sol",children:"https://github.com/yearn/vault-periphery/blob/master/contracts/registry/Registry.sol"})}),"\n",(0,n.jsx)(t.p,{children:"Stores the endorsed multi strategy and single strategy vaults. Can also deploy new multi strategy vaults based on the most recent Vault Factory added to the Release Registry."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"newEndorsedVault(...)"})," Deploy and endorse a new multi strategy vault."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Deploy a custom Registry using the ",(0,n.jsx)(t.a,{href:"../smart-contracts/V3/Current-v3.0.2/%F0%9F%93%84%20Periphery/RegistryFactory",children:"RegistryFactory"})]}),"\n",(0,n.jsx)(t.h3,{id:"accountant",children:"Accountant"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/yearn/vault-periphery/tree/master/contracts/accountants",children:"https://github.com/yearn/vault-periphery/tree/master/contracts/accountants"})}),"\n",(0,n.jsxs)(t.p,{children:["By default V3 multi strategy vaults have fees set to 0 and will need an ",(0,n.jsx)(t.code,{children:"accountant"})," set to charge fees."]}),"\n",(0,n.jsxs)(t.p,{children:["If set an accountant is called during each ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults-v3/blob/9fbc614bbce9d7cbad42e284a15f0f43cf1a673f/contracts/VaultV3.vy#L1202",children:(0,n.jsx)(t.code,{children:"process_report"})})," with the relevant information for the strategies report. The accountant can hold any logic desired to charge performance fees, management fees, issue refunds, perform healthchecks etc."]}),"\n",(0,n.jsx)(t.p,{children:"Some possible non-standard uses of an accountant could be:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Auto compounding rewards back into the vault"}),"\n",(0,n.jsx)(t.li,{children:"Setting up a Junior Tranche"}),"\n",(0,n.jsx)(t.li,{children:"Tiered fees based on % returns or TVL"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To deploy a generic account use the ",(0,n.jsx)(t.a,{href:"smart-contracts/periphery/AccountantFactory",children:"Accountant Factory"})," and then call ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults-v3/blob/9fbc614bbce9d7cbad42e284a15f0f43cf1a673f/contracts/VaultV3.vy#L1342",children:(0,n.jsx)(t.code,{children:"set_accountant"})})," on the vault."]}),"\n",(0,n.jsx)(t.h3,{id:"debt-allocator",children:"Debt Allocator"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/yearn/vault-periphery/tree/master/contracts/debtAllocators",children:"https://github.com/yearn/vault-periphery/tree/master/contracts/debtAllocators"})}),"\n",(0,n.jsxs)(t.p,{children:["To manager the allocation of debt between multiple strategies in a multi strategy vault some generic Debt Allocators have been developed. These contracts are meant to be given the ",(0,n.jsx)(t.code,{children:"DEBT_MANAGER"})," and ",(0,n.jsx)(t.code,{children:"REPORTING_MANAGER"})," roles for a specific vault and then monitored by a keeper to manage the allocations based on set 'target ratios'."]}),"\n",(0,n.jsxs)(t.p,{children:["The owner of the Debt allocator can set multiple parameters that will dictate when a keeper should call the ",(0,n.jsx)(t.code,{children:"update_debt"})," function on the allocator based on the return value of the ",(0,n.jsx)(t.code,{children:"shouldUpdateDebt"})," view function."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"targetDebtRatio"})," A percent (in basis points) for the allocator to target a specific strategy to have. EX: 5_000 == 50% of the vaults funds."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"maxDebtRatio"})," The max percent (in basis points) for the allocator to allow a strategy to have."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"minimumChange"})," The minimum amount in terms of the underlying asset to be moved to trigger a debt update."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"maxAcceptableBaseFee"})," The maximum the block.basefee is allowed to be during debt updates to save gas."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"maxDebtUpdateLoss"})," The value to to send as ",(0,n.jsx)(t.a,{href:"/developers/v3/integrating_v3#maxloss",children:(0,n.jsx)(t.code,{children:"maxLoss"})})," for a debt update. Default is 1 (0.01%)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"keeper"})," Allow an address to call the ",(0,n.jsx)(t.code,{children:"update_debt"})," function."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"manager"})," Non-governance address that is allowed to update the strategies target and max debt ratios."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can deploy a single generic Debt Allocator using the ",(0,n.jsx)(t.a,{href:"/developers/v3/overview#protocol-address-provider",children:"Debt Allocator Factory"})," for any V3 vault."]}),"\n",(0,n.jsx)(t.h3,{id:"role-manager",children:"Role Manager"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/yearn/vault-periphery/blob/master/contracts/Managers/RoleManager.sol",children:"https://github.com/yearn/vault-periphery/blob/master/contracts/Managers/RoleManager.sol"})}),"\n",(0,n.jsxs)(t.p,{children:["The Role Manager is used to hold the ",(0,n.jsx)(t.code,{children:"role_manager"})," position in Yearns multi strategy vaults and make deployments simpler. All role configuration and periphery contracts are set up during the vaults deployment."]}),"\n",(0,n.jsx)(t.p,{children:"Yearn specific periphery contracts can also all be retrieved on chain from the Role Manager on that chain."}),"\n",(0,n.jsxs)(t.p,{children:["For Yearn specific implementation addresses check ",(0,n.jsx)(t.a,{href:"/getting-started/products/addresses",children:"Contract Addresses"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);