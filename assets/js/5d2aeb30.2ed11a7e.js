"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[1529],{3905:(e,t,n)=>{n.d(t,{kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},l=void 0,o={unversionedId:"smart-contracts/test/TestStrategy",id:"version-0.4.5/smart-contracts/test/TestStrategy",title:"TestStrategy",description:"Functions",source:"@site/versioned_docs/version-0.4.5/smart-contracts/test/TestStrategy.md",sourceDirName:"smart-contracts/test",slug:"/smart-contracts/test/TestStrategy",permalink:"/vaults/0.4.5/smart-contracts/test/TestStrategy",draft:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.5/smart-contracts/test/TestStrategy.md",tags:[],version:"0.4.5",frontMatter:{},sidebar:"mySidebar",previous:{title:"Registry.vy",permalink:"/vaults/0.4.5/smart-contracts/registry"},next:{title:"Token",permalink:"/vaults/0.4.5/smart-contracts/test/Token"}},s={},u=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"name",id:"name",level:3},{value:"_toggleDelegation",id:"_toggledelegation",level:3},{value:"delegatedAssets",id:"delegatedassets",level:3},{value:"_takeFunds",id:"_takefunds",level:3},{value:"_toggleReentrancyExploit",id:"_togglereentrancyexploit",level:3},{value:"_setWant",id:"_setwant",level:3},{value:"ethToWant",id:"ethtowant",level:3},{value:"estimatedTotalAssets",id:"estimatedtotalassets",level:3},{value:"prepareReturn",id:"preparereturn",level:3},{value:"adjustPosition",id:"adjustposition",level:3},{value:"liquidatePosition",id:"liquidateposition",level:3},{value:"prepareMigration",id:"preparemigration",level:3},{value:"protectedTokens",id:"protectedtokens",level:3},{value:"liquidateAllPositions",id:"liquidateallpositions",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function name(\n  ) external returns (string)\n")),(0,r.kt)("h3",{id:"_toggledelegation"},"_toggleDelegation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _toggleDelegation(\n  ) public\n")),(0,r.kt)("h3",{id:"delegatedassets"},"delegatedAssets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function delegatedAssets(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"_takefunds"},"_takeFunds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _takeFunds(\n  ) public\n")),(0,r.kt)("h3",{id:"_togglereentrancyexploit"},"_toggleReentrancyExploit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _toggleReentrancyExploit(\n  ) public\n")),(0,r.kt)("h3",{id:"_setwant"},"_setWant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _setWant(\n  ) public\n")),(0,r.kt)("h3",{id:"ethtowant"},"ethToWant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function ethToWant(\n  ) public returns (uint256)\n")),(0,r.kt)("h3",{id:"estimatedtotalassets"},"estimatedTotalAssets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function estimatedTotalAssets(\n  ) public returns (uint256)\n")),(0,r.kt)("h3",{id:"preparereturn"},"prepareReturn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function prepareReturn(\n  ) internal returns (uint256 _profit, uint256 _loss, uint256 _debtPayment)\n")),(0,r.kt)("h3",{id:"adjustposition"},"adjustPosition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function adjustPosition(\n  ) internal\n")),(0,r.kt)("h3",{id:"liquidateposition"},"liquidatePosition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function liquidatePosition(\n  ) internal returns (uint256 _liquidatedAmount, uint256 _loss)\n")),(0,r.kt)("h3",{id:"preparemigration"},"prepareMigration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function prepareMigration(\n  ) internal\n")),(0,r.kt)("h3",{id:"protectedtokens"},"protectedTokens"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function protectedTokens(\n  ) internal returns (address[])\n")),(0,r.kt)("h3",{id:"liquidateallpositions"},"liquidateAllPositions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function liquidateAllPositions(\n  ) internal returns (uint256 amountFreed)\n")))}d.isMDXComponent=!0}}]);