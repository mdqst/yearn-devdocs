"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[4629],{37907:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(74848),t=n(28453);const s={},i="Yearn Data Services",o={id:"data-services/yearn-data",title:"Yearn Data Services",description:"If you want to programmatically interact with Yearn data, or need to fetch large amounts of it then you have a few options:",source:"@site/docs/developers/data-services/yearn-data.md",sourceDirName:"data-services",slug:"/data-services/yearn-data",permalink:"/developers/data-services/yearn-data",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1727382018e3,frontMatter:{},sidebar:"developers",previous:{title:"Naming Conventions",permalink:"/developers/v2/naming-convention"},next:{title:"Subgraphs",permalink:"/developers/data-services/subgraph-info"}},d={},l=[{value:"yDaemon",id:"ydaemon",level:2},{value:"Subgraph",id:"subgraph",level:2},{value:"V2 Vaults",id:"v2-vaults",level:3},{value:"Yearn Lens",id:"yearn-lens",level:2},{value:"Deprecated Data Services",id:"deprecated-data-services",level:2},{value:"Yearn Exporter - No longer supported",id:"yearn-exporter---no-longer-supported",level:3},{value:"V1 Yearn API - No longer supported",id:"v1-yearn-api---no-longer-supported",level:3}];function h(e){const r={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"yearn-data-services",children:"Yearn Data Services"})}),"\n",(0,a.jsx)(r.p,{children:"If you want to programmatically interact with Yearn data, or need to fetch large amounts of it then you have a few options:"}),"\n",(0,a.jsx)(r.h2,{id:"ydaemon",children:"yDaemon"}),"\n",(0,a.jsx)(r.p,{children:"yDaemon is a RESTful API that hydrates subgraph responses with more data, like APY calculations. yDaemon is the best source for current yearn Vault data and is what is used by the production Yearn front ends."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Live API:"})," ",(0,a.jsx)(r.a,{href:"https://ydaemon.yearn.fi/",children:"https://ydaemon.yearn.fi/"})]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Source:"})," ",(0,a.jsx)(r.a,{href:"https://github.com/yearn/ydaemon",children:"https://github.com/yearn/ydaemon"})]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Docs:"})," ",(0,a.jsx)(r.a,{href:"https://ydaemon.yearn.farm/docs/intro",children:"https://ydaemon.yearn.farm/docs/intro"})]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Guide:"})," ",(0,a.jsx)(r.a,{href:"https://medium.com/iearn/ydaemon-one-api-to-unify-all-yearn-data-4fc74dc9a33b",children:"https://medium.com/iearn/ydaemon-one-api-to-unify-all-yearn-data-4fc74dc9a33b"})]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"subgraph",children:"Subgraph"}),"\n",(0,a.jsx)(r.admonition,{type:"info",children:(0,a.jsx)(r.p,{children:"Currently only subgraphs for V2 vaults are available and some subgraphs have not been migrated to the new service."})}),"\n",(0,a.jsx)(r.p,{children:"The subgraph is a GraphQL interface to query raw historical data. For current data it is recommended to check yDaemon before using the subgraph directly."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Docs:"})," ",(0,a.jsx)(r.a,{href:"https://docs.yearn.fi/developers/v2/subgraph-info",children:"https://docs.yearn.fi/developers/v2/subgraph-info"})]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"v2-vaults",children:"V2 Vaults"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Mainnet Live API:"})," ",(0,a.jsx)(r.a,{href:"https://thegraph.com/explorer/subgraphs/FDLuaz69DbMADuBjJDEcLnTuPnjhZqNbFVrkNiBLGkEg?view=Query&chain=arbitrum-one",children:"https://thegraph.com/explorer/subgraphs/FDLuaz69DbMADuBjJDEcLnTuPnjhZqNbFVrkNiBLGkEg?view=Query&chain=arbitrum-one"})]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Arbitrum Live API:"})," ",(0,a.jsx)(r.a,{href:"https://thegraph.com/explorer/subgraphs/G3JZhmKKHC4mydRzD6kSz5fCWve5WDYYCyTFSJyv3SD5?view=Query&chain=arbitrum-one",children:"https://thegraph.com/explorer/subgraphs/G3JZhmKKHC4mydRzD6kSz5fCWve5WDYYCyTFSJyv3SD5?view=Query&chain=arbitrum-one"})]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"yearn-lens",children:"Yearn Lens"}),"\n",(0,a.jsx)(r.p,{children:"Yearn Lens is a collection of smart contracts that collect data about V2 Yearn vaults."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Docs:"})," ",(0,a.jsx)(r.a,{href:"https://docs.yearn.fi/developers/v2/yearn-lens",children:"https://docs.yearn.fi/developers/v2/yearn-lens"})]}),"\n"]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(n,{className:"customFaqDetails",children:[(0,a.jsx)("summary",{children:(0,a.jsx)(r.h2,{id:"deprecated-data-services",children:"Deprecated Data Services"})}),(0,a.jsx)(r.h3,{id:"yearn-exporter---no-longer-supported",children:"Yearn Exporter - No longer supported"}),(0,a.jsx)(r.p,{children:"The exporter is was to build the (now deprecated) Yearn Grafana dashboard."}),(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Source + Guide:"})," ",(0,a.jsx)(r.a,{href:"https://github.com/yearn/yearn-exporter",children:"https://github.com/yearn/yearn-exporter"})]}),"\n"]}),(0,a.jsx)(r.h3,{id:"v1-yearn-api---no-longer-supported",children:"V1 Yearn API - No longer supported"}),(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"original endpoint"}),": ",(0,a.jsx)(r.a,{href:"https://api.yearn.fi/v1/chains/1/vaults/all",children:"https://api.yearn.fi/v1/chains/1/vaults/all"})]}),"\n"]})]})]})}function c(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var a=n(96540);const t={},s=a.createContext(t);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);