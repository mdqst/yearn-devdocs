"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[5177],{82529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=t(74848),i=t(28453);const l={},r=void 0,a={id:"smart-contracts/V2/Current-v0.4.6/test/TestStrategy",title:"TestStrategy",description:"Functions",source:"@site/docs/developers/smart-contracts/V2/Current-v0.4.6/test/TestStrategy.md",sourceDirName:"smart-contracts/V2/Current-v0.4.6/test",slug:"/smart-contracts/V2/Current-v0.4.6/test/TestStrategy",permalink:"/developers/smart-contracts/V2/Current-v0.4.6/test/TestStrategy",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1722959028e3,frontMatter:{},sidebar:"developers",previous:{title:"Registry.vy",permalink:"/developers/smart-contracts/V2/Current-v0.4.6/registry"},next:{title:"Token",permalink:"/developers/smart-contracts/V2/Current-v0.4.6/test/Token"}},o={},d=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"name",id:"name",level:3},{value:"_toggleDelegation",id:"_toggledelegation",level:3},{value:"delegatedAssets",id:"delegatedassets",level:3},{value:"_takeFunds",id:"_takefunds",level:3},{value:"_toggleReentrancyExploit",id:"_togglereentrancyexploit",level:3},{value:"_setWant",id:"_setwant",level:3},{value:"ethToWant",id:"ethtowant",level:3},{value:"estimatedTotalAssets",id:"estimatedtotalassets",level:3},{value:"prepareReturn",id:"preparereturn",level:3},{value:"adjustPosition",id:"adjustposition",level:3},{value:"liquidatePosition",id:"liquidateposition",level:3},{value:"prepareMigration",id:"preparemigration",level:3},{value:"protectedTokens",id:"protectedtokens",level:3},{value:"liquidateAllPositions",id:"liquidateallpositions",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function constructor(\n  ) public\n"})}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function name(\n  ) external returns (string)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"_toggledelegation",children:"_toggleDelegation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function _toggleDelegation(\n  ) public\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delegatedassets",children:"delegatedAssets"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function delegatedAssets(\n  ) external returns (uint256)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"_takefunds",children:"_takeFunds"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function _takeFunds(\n  ) public\n"})}),"\n",(0,s.jsx)(n.h3,{id:"_togglereentrancyexploit",children:"_toggleReentrancyExploit"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function _toggleReentrancyExploit(\n  ) public\n"})}),"\n",(0,s.jsx)(n.h3,{id:"_setwant",children:"_setWant"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function _setWant(\n  ) public\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ethtowant",children:"ethToWant"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function ethToWant(\n  ) public returns (uint256)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"estimatedtotalassets",children:"estimatedTotalAssets"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function estimatedTotalAssets(\n  ) public returns (uint256)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"preparereturn",children:"prepareReturn"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function prepareReturn(\n  ) internal returns (uint256 _profit, uint256 _loss, uint256 _debtPayment)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"adjustposition",children:"adjustPosition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function adjustPosition(\n  ) internal\n"})}),"\n",(0,s.jsx)(n.h3,{id:"liquidateposition",children:"liquidatePosition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function liquidatePosition(\n  ) internal returns (uint256 _liquidatedAmount, uint256 _loss)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"preparemigration",children:"prepareMigration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function prepareMigration(\n  ) internal\n"})}),"\n",(0,s.jsx)(n.h3,{id:"protectedtokens",children:"protectedTokens"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function protectedTokens(\n  ) internal returns (address[])\n"})}),"\n",(0,s.jsx)(n.h3,{id:"liquidateallpositions",children:"liquidateAllPositions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"  function liquidateAllPositions(\n  ) internal returns (uint256 amountFreed)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);