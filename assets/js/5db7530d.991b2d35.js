"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[8226],{3905:(e,t,a)=>{a.d(t,{kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,f=c["".concat(o,".").concat(m)]||c[m]||p[m]||i;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={},l=void 0,s={unversionedId:"smart-contracts/test/AffiliateToken",id:"version-0.4.2/smart-contracts/test/AffiliateToken",title:"AffiliateToken",description:"Functions",source:"@site/versioned_docs/version-0.4.2/smart-contracts/test/AffiliateToken.md",sourceDirName:"smart-contracts/test",slug:"/smart-contracts/test/AffiliateToken",permalink:"/vaults/0.4.2/smart-contracts/test/AffiliateToken",draft:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.2/smart-contracts/test/AffiliateToken.md",tags:[],version:"0.4.2",frontMatter:{},sidebar:"version-0.4.2/mySidebar",previous:{title:"Registry.vy",permalink:"/vaults/0.4.2/smart-contracts/registry"},next:{title:"TestGuestList",permalink:"/vaults/0.4.2/smart-contracts/test/TestGuestList"}},o={},d=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"_getChainId",id:"_getchainid",level:3},{value:"setAffiliate",id:"setaffiliate",level:3},{value:"acceptAffiliate",id:"acceptaffiliate",level:3},{value:"_shareValue",id:"_sharevalue",level:3},{value:"pricePerShare",id:"pricepershare",level:3},{value:"_sharesForValue",id:"_sharesforvalue",level:3},{value:"deposit",id:"deposit",level:3},{value:"deposit",id:"deposit-1",level:3},{value:"withdraw",id:"withdraw",level:3},{value:"withdraw",id:"withdraw-1",level:3},{value:"migrate",id:"migrate",level:3},{value:"migrate",id:"migrate-1",level:3},{value:"migrate",id:"migrate-2",level:3},{value:"permit",id:"permit",level:3},{value:"Parameters:",id:"parameters",level:4}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,n.kt)("h3",{id:"_getchainid"},"_getChainId"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _getChainId(\n  ) internal returns (uint256)\n")),(0,n.kt)("h3",{id:"setaffiliate"},"setAffiliate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setAffiliate(\n  ) external\n")),(0,n.kt)("h3",{id:"acceptaffiliate"},"acceptAffiliate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function acceptAffiliate(\n  ) external\n")),(0,n.kt)("h3",{id:"_sharevalue"},"_shareValue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _shareValue(\n  ) internal returns (uint256)\n")),(0,n.kt)("h3",{id:"pricepershare"},"pricePerShare"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function pricePerShare(\n  ) external returns (uint256)\n")),(0,n.kt)("h3",{id:"_sharesforvalue"},"_sharesForValue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _sharesForValue(\n  ) internal returns (uint256)\n")),(0,n.kt)("h3",{id:"deposit"},"deposit"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) external returns (uint256)\n")),(0,n.kt)("h3",{id:"deposit-1"},"deposit"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) public returns (uint256 deposited)\n")),(0,n.kt)("h3",{id:"withdraw"},"withdraw"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external returns (uint256)\n")),(0,n.kt)("h3",{id:"withdraw-1"},"withdraw"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) public returns (uint256 withdrawn)\n")),(0,n.kt)("h3",{id:"migrate"},"migrate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,n.kt)("h3",{id:"migrate-1"},"migrate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,n.kt)("h3",{id:"migrate-2"},"migrate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,n.kt)("h3",{id:"permit"},"permit"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function permit(\n    address owner,\n    address spender,\n    uint256 amount,\n    uint256 deadline,\n    uint8 v,\n    bytes32 r,\n    bytes32 s\n  ) external\n")),(0,n.kt)("p",null,"Triggers an approval from owner to spends"),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"owner")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address to approve from")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"spender")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address to be approved")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"amount")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of tokens that are approved (2^256-1 means infinite)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"deadline")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The time at which to expire the signature")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"v")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The recovery byte of the signature")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"r")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Half of the ECDSA signature pair")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"s")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Half of the ECDSA signature pair")))))}u.isMDXComponent=!0}}]);