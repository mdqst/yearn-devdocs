"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[8961],{6357:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=s(4848),r=s(8453);const n={},a="Security Home",o={id:"index",title:"Security Home",description:"Information about Yearn's security processes, team members, disclosures, PGP keys and more can be found in the /yearn-security repo on Github.",source:"@site/docs/security/index.md",sourceDirName:".",slug:"/",permalink:"/security/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1693865708e3,frontMatter:{},sidebar:"mySidebar",next:{title:"Multisig",permalink:"/security/multisig"}},c={},l=[{value:"Vulnerability disclosure process",id:"vulnerability-disclosure-process",level:2},{value:"Third-party audits",id:"third-party-audits",level:2},{value:"Security assumption",id:"security-assumption",level:2},{value:"Testing",id:"testing",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"security-home",children:"Security Home"}),"\n",(0,i.jsxs)(t.p,{children:["Information about Yearn's security processes, team members, disclosures, PGP keys and more can be found in the ",(0,i.jsx)(t.a,{href:"https://github.com/yearn/yearn-security",children:"/yearn-security"})," repo on Github."]}),"\n",(0,i.jsx)(t.h2,{id:"vulnerability-disclosure-process",children:"Vulnerability disclosure process"}),"\n",(0,i.jsxs)(t.p,{children:["Potential vulnerabilities are welcome to be disclosed following the guidelines established in ",(0,i.jsx)(t.a,{href:"https://github.com/yearn/yearn-security/blob/master/SECURITY.md",children:"/yearn-security/SECURITY.md"}),". Valid vulnerabilities may be eligible for bounty rewards."]}),"\n",(0,i.jsx)(t.h2,{id:"third-party-audits",children:"Third-party audits"}),"\n",(0,i.jsxs)(t.p,{children:["The core contracts found in ",(0,i.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults/",children:"yearn-vaults"})," repository have been audited by multiple independent third-party firms:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://mixbytes.io/",children:"MixBytes"})," has audited v0.2.1, public report ",(0,i.jsx)(t.a,{href:"https://github.com/yearn/yearn-security/tree/master/audits/202012_MixBytes_yearn-vaults",children:"available here"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://chainsecurity.com/",children:"ChainSecurity"})," has audited v0.3.5, public report unavailable"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.trailofbits.com/",children:"Trail of Bits"})," has audited v0.4.2, public report ",(0,i.jsx)(t.a,{href:"https://github.com/yearn/yearn-security/tree/master/audits/20210719_ToB_yearn_vaultsv2",children:"available here"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Yearn is much bigger than its core, the DAO has a rigorous review process for its contracts, and retains independent auditors which review Strategies and other protocol components."}),"\n",(0,i.jsxs)(t.p,{children:["Other public reports can be found under ",(0,i.jsx)(t.a,{href:"https://github.com/yearn/yearn-security/tree/master/audits",children:"yearn-security/audits"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"security-assumption",children:"Security assumption"}),"\n",(0,i.jsxs)(t.p,{children:["Yearn as a protocol hinges on the critical assumption that the ",(0,i.jsx)(t.code,{children:"Governance"})," role is honest. This role is currently controlled by a ",(0,i.jsx)(t.a,{href:"https://gov.yearn.fi/t/yip-62-change-two-multisig-signers/10758",children:"6 of 9 Gnosis Safe multisig"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"A compromised or malicious Governance can cause catastrophic damage across the entire protocol."}),"\n",(0,i.jsx)(t.p,{children:"It is a conscious design decision that this role is not behind a time lock. Priority is given to the ability to rapidly update and iterate on live vaults, strategies, and other components. Both so as not to advertise new investment strategies in advance, but also to rapidly improve our existing components without interruption. It also avoids downtimes whenever there is a bug or security vulnerability that needs to be fixed."}),"\n",(0,i.jsxs)(t.p,{children:["Trusting ",(0,i.jsx)(t.code,{children:"Governance"})," to be honest is a prerequisite to trusting Yearn's vaults."]}),"\n",(0,i.jsxs)(t.p,{children:["Modifications to these design decisions can be proposed in the forum through ",(0,i.jsx)(t.a,{href:"https://gov.yearn.fi/t/yip-61-governance-2-0/10460",children:"Yearn's governance process"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,i.jsxs)(t.p,{children:["Vault tests are done using brownie and the ",(0,i.jsx)(t.a,{href:"https://trufflesuite.com/docs/ganache/",children:"ganache CLI"})," development network."]}),"\n",(0,i.jsxs)(t.p,{children:["To see test coverage you can have a look at the ",(0,i.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults/actions/workflows/test.yaml",children:"CI"})," you must look for a run that runs ",(0,i.jsx)(t.code,{children:"Run build test_duration"}),". The tests are run once a month together to compute the duration cache, then they are split into several test pipelines to speed up testing."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var i=s(6540);const r={},n=i.createContext(r);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);