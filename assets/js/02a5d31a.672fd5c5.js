"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[2034],{5545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=n(4848),l=n(8453);const r={},a=void 0,i={id:"smart-contracts/BaseFeeOracle",title:"BaseFeeOracle",description:"Interprets the base fee from our base fee provider",source:"@site/versioned_docs/version-0.4.6/smart-contracts/BaseFeeOracle.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/BaseFeeOracle",permalink:"/vaults/smart-contracts/BaseFeeOracle",draft:!1,unlisted:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.6/smart-contracts/BaseFeeOracle.md",tags:[],version:"0.4.6",frontMatter:{},sidebar:"mySidebar",next:{title:"BaseStrategy",permalink:"/vaults/smart-contracts/BaseStrategy"}},d={},c=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"isCurrentBaseFeeAcceptable",id:"iscurrentbasefeeacceptable",level:3},{value:"setMaxAcceptableBaseFee",id:"setmaxacceptablebasefee",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"setManualBaseFeeBool",id:"setmanualbasefeebool",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"setAuthorized",id:"setauthorized",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"setPendingGovernance",id:"setpendinggovernance",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"acceptGovernance",id:"acceptgovernance",level:3},{value:"setBaseFeeProvider",id:"setbasefeeprovider",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"_onlyAuthorized",id:"_onlyauthorized",level:3},{value:"_onlyGovernance",id:"_onlygovernance",level:3},{value:"Events",id:"events",level:2},{value:"NewGovernance",id:"newgovernance",level:3},{value:"NewProvider",id:"newprovider",level:3},{value:"UpdatedMaxBaseFee",id:"updatedmaxbasefee",level:3},{value:"UpdatedManualBaseFee",id:"updatedmanualbasefee",level:3},{value:"UpdatedAuthorization",id:"updatedauthorization",level:3}];function o(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Interprets the base fee from our base fee provider\ncontract to determine if a harvest is permissable."}),"\n",(0,s.jsx)(t.p,{children:"Version 0.1.0"}),"\n",(0,s.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(t.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  function constructor(\n  ) public\n"})}),"\n",(0,s.jsx)(t.p,{children:"Use this if our network hasn't implemented the base fee method yet"}),"\n",(0,s.jsx)(t.h3,{id:"iscurrentbasefeeacceptable",children:"isCurrentBaseFeeAcceptable"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  function isCurrentBaseFeeAcceptable(\n  ) public returns (bool)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Returns whether we should allow harvests based on current base fee."}),"\n",(0,s.jsx)(t.h3,{id:"setmaxacceptablebasefee",children:"setMaxAcceptableBaseFee"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  function setMaxAcceptableBaseFee(\n    uint256 _maxAcceptableBaseFee\n  ) external\n"})}),"\n",(0,s.jsx)(t.p,{children:"Set the maximum base fee we want for our keepers to accept.\nGwei is 1e9."}),"\n",(0,s.jsx)(t.p,{children:"Throws if the caller is not authorized or gov."}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"_maxAcceptableBaseFee"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"uint256"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The acceptable maximum price to pay in wei."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"setmanualbasefeebool",children:"setManualBaseFeeBool"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  function setManualBaseFeeBool(\n    bool _manualBaseFeeBool\n  ) external\n"})}),"\n",(0,s.jsx)(t.p,{children:"If we don't have a provider, then manually determine if true or not.\nUseful in testing as well."}),"\n",(0,s.jsx)(t.p,{children:"Throws if the caller is not authorized or gov."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"_manualBaseFeeBool"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bool"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Boolean to allow/block harvests if we don't"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"have a provider set up."}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"setauthorized",children:"setAuthorized"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  function setAuthorized(\n    address _target,\n    bool _value\n  ) external\n"})}),"\n",(0,s.jsx)(t.p,{children:"Controls whether a non-gov address can adjust certain params."}),"\n",(0,s.jsx)(t.p,{children:"Throws if the caller is not current governance."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-2",children:"Parameters:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"_target"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"address"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The address to add/remove authorization for."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"_value"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bool"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Boolean to grant or revoke access."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"setpendinggovernance",children:"setPendingGovernance"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  function setPendingGovernance(\n    address _governance\n  ) external\n"})}),"\n",(0,s.jsx)(t.p,{children:"Starts the 1st phase of the governance transfer."}),"\n",(0,s.jsx)(t.p,{children:"Throws if the caller is not current governance."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-3",children:"Parameters:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"_governance"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"address"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The next governance address"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"acceptgovernance",children:"acceptGovernance"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  function acceptGovernance(\n  ) external\n"})}),"\n",(0,s.jsx)(t.p,{children:"Completes the 2nd phase of the governance transfer."}),"\n",(0,s.jsxs)(t.p,{children:["Throws if the caller is not the pending caller.\nEmits a ",(0,s.jsx)(t.code,{children:"NewGovernance"})," event."]}),"\n",(0,s.jsx)(t.h3,{id:"setbasefeeprovider",children:"setBaseFeeProvider"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  function setBaseFeeProvider(\n    address _baseFeeProvider\n  ) external\n"})}),"\n",(0,s.jsx)(t.p,{children:"Sets the address used to pull the current network base fee."}),"\n",(0,s.jsx)(t.p,{children:"Throws if the caller is not current governance."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-4",children:"Parameters:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"_baseFeeProvider"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"address"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The network's baseFeeProvider address"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"_onlyauthorized",children:"_onlyAuthorized"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  function _onlyAuthorized(\n  ) internal\n"})}),"\n",(0,s.jsx)(t.h3,{id:"_onlygovernance",children:"_onlyGovernance"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  function _onlyGovernance(\n  ) internal\n"})}),"\n",(0,s.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(t.h3,{id:"newgovernance",children:"NewGovernance"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  event NewGovernance(\n  )\n"})}),"\n",(0,s.jsx)(t.h3,{id:"newprovider",children:"NewProvider"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  event NewProvider(\n  )\n"})}),"\n",(0,s.jsx)(t.h3,{id:"updatedmaxbasefee",children:"UpdatedMaxBaseFee"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  event UpdatedMaxBaseFee(\n  )\n"})}),"\n",(0,s.jsx)(t.h3,{id:"updatedmanualbasefee",children:"UpdatedManualBaseFee"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  event UpdatedManualBaseFee(\n  )\n"})}),"\n",(0,s.jsx)(t.h3,{id:"updatedauthorization",children:"UpdatedAuthorization"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"  event UpdatedAuthorization(\n  )\n"})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const l={},r=s.createContext(l);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);