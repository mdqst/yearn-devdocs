"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[6390],{3905:(e,t,r)=>{r.d(t,{kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),v=a,g=p["".concat(o,".").concat(v)]||p[v]||u[v]||s;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<s;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={},l=void 0,i={unversionedId:"smart-contracts/StrategyAPI",id:"version-0.3.5/smart-contracts/StrategyAPI",title:"StrategyAPI",description:"This interface is here for the keeper bot to use.",source:"@site/versioned_docs/version-0.3.5/smart-contracts/StrategyAPI.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/StrategyAPI",permalink:"/vaults/0.3.5/smart-contracts/StrategyAPI",draft:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.5/smart-contracts/StrategyAPI.md",tags:[],version:"0.3.5",frontMatter:{},sidebar:"version-0.3.5/mySidebar",previous:{title:"RegistryAPI",permalink:"/vaults/0.3.5/smart-contracts/RegistryAPI"},next:{title:"VaultAPI",permalink:"/vaults/0.3.5/smart-contracts/VaultAPI"}},o={},c=[{value:"Functions",id:"functions",level:2},{value:"name",id:"name",level:3},{value:"vault",id:"vault",level:3},{value:"want",id:"want",level:3},{value:"apiVersion",id:"apiversion",level:3},{value:"keeper",id:"keeper",level:3},{value:"isActive",id:"isactive",level:3},{value:"delegatedAssets",id:"delegatedassets",level:3},{value:"estimatedTotalAssets",id:"estimatedtotalassets",level:3},{value:"tendTrigger",id:"tendtrigger",level:3},{value:"tend",id:"tend",level:3},{value:"harvestTrigger",id:"harvesttrigger",level:3},{value:"harvest",id:"harvest",level:3},{value:"Events",id:"events",level:2},{value:"Harvested",id:"harvested",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This interface is here for the keeper bot to use."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function name(\n  ) external returns (string)\n")),(0,a.kt)("h3",{id:"vault"},"vault"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function vault(\n  ) external returns (address)\n")),(0,a.kt)("h3",{id:"want"},"want"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function want(\n  ) external returns (address)\n")),(0,a.kt)("h3",{id:"apiversion"},"apiVersion"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function apiVersion(\n  ) external returns (string)\n")),(0,a.kt)("h3",{id:"keeper"},"keeper"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function keeper(\n  ) external returns (address)\n")),(0,a.kt)("h3",{id:"isactive"},"isActive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function isActive(\n  ) external returns (bool)\n")),(0,a.kt)("h3",{id:"delegatedassets"},"delegatedAssets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function delegatedAssets(\n  ) external returns (uint256)\n")),(0,a.kt)("h3",{id:"estimatedtotalassets"},"estimatedTotalAssets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function estimatedTotalAssets(\n  ) external returns (uint256)\n")),(0,a.kt)("h3",{id:"tendtrigger"},"tendTrigger"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function tendTrigger(\n  ) external returns (bool)\n")),(0,a.kt)("h3",{id:"tend"},"tend"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function tend(\n  ) external\n")),(0,a.kt)("h3",{id:"harvesttrigger"},"harvestTrigger"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function harvestTrigger(\n  ) external returns (bool)\n")),(0,a.kt)("h3",{id:"harvest"},"harvest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function harvest(\n  ) external\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"harvested"},"Harvested"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Harvested(\n  )\n")))}d.isMDXComponent=!0}}]);