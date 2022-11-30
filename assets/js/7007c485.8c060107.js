"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[7826],{3905:(e,t,r)=>{r.d(t,{kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,y=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(y,i(i({ref:t},s),{},{components:r})):a.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={},i="Subgraph and yDaemon",l={unversionedId:"v2/yearn-data",id:"v2/yearn-data",title:"Subgraph and yDaemon",description:"If you need to fetch large amounts of historical yearn data there are 2 services built for that:",source:"@site/docs/developers/v2/yearn-data.md",sourceDirName:"v2",slug:"/v2/yearn-data",permalink:"/developers/v2/yearn-data",draft:!1,tags:[],version:"current",lastUpdatedAt:1666008183,formattedLastUpdatedAt:"10/17/2022",frontMatter:{},sidebar:"mySidebar",previous:{title:"Ledger Plugin",permalink:"/developers/v2/ledger-plugin"},next:{title:"Hacking on Yearn",permalink:"/developers/v2/hacking-with-yearn"}},p={},u=[{value:"yDaemon",id:"ydaemon",level:2},{value:"Subgraph",id:"subgraph",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"subgraph-and-ydaemon"},"Subgraph and yDaemon"),(0,n.kt)("p",null,"If you need to fetch large amounts of historical yearn data there are 2 services built for that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The subgraph is a GraphQL interface to raw historical data"),(0,n.kt)("li",{parentName:"ul"},"yDaemon is a RESTful API that hydrates subgraph responses with more data, like APY calculations")),(0,n.kt)("h2",{id:"ydaemon"},"yDaemon"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Live API:")," ",(0,n.kt)("a",{parentName:"li",href:"https://ydaemon.yearn.finance/"},"https://ydaemon.yearn.finance/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source + Docs:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/yearn/ydaemon"},"https://github.com/yearn/ydaemon")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Guide:")," ",(0,n.kt)("a",{parentName:"li",href:"https://medium.com/iearn/ydaemon-one-api-to-unify-all-yearn-data-4fc74dc9a33b"},"https://medium.com/iearn/ydaemon-one-api-to-unify-all-yearn-data-4fc74dc9a33b"))),(0,n.kt)("h2",{id:"subgraph"},"Subgraph"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Live API + Docs:")," ",(0,n.kt)("a",{parentName:"li",href:"https://api.thegraph.com/subgraphs/name/messari/yearn-v2-ethereum/graphql"},"https://api.thegraph.com/subgraphs/name/messari/yearn-v2-ethereum/graphql"))))}s.isMDXComponent=!0}}]);