"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[6220],{947:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var t=r(4848),i=r(8453);const n={},o="Risk Scores",a={id:"risks/risk-score",title:"Risk Scores",description:"Yearn works with risk scores to quantify and assess the amount of risk of each strategy and vault. This document outlines how we measure risk vectors and use them to find the optimal balance of security and innovation.",source:"@site/docs/resources/risks/risk-score.md",sourceDirName:"risks",slug:"/risks/risk-score",permalink:"/resources/risks/risk-score",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1702589582e3,frontMatter:{},sidebar:"mySidebar",previous:{title:"Protocol Risks",permalink:"/resources/risks/protocol-risks"},next:{title:"Strategy Risks",permalink:"/resources/risks/strategy-risks"}},d={},l=[{value:"Strategy Risk Score",id:"strategy-risk-score",level:2},{value:"Audit",id:"audit",level:3},{value:"Code Review",id:"code-review",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Longevity",id:"longevity",level:3},{value:"Protocol Safety",id:"protocol-safety",level:3},{value:"Team Knowledge",id:"team-knowledge",level:3},{value:"Testing Score",id:"testing-score",level:3},{value:"TVL Impact",id:"tvl-impact",level:3},{value:"Vault Risk Score Proposal",id:"vault-risk-score-proposal",level:2},{value:"Overall Risk Score Proposal",id:"overall-risk-score-proposal",level:2}];function c(e){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"risk-scores",children:"Risk Scores"}),"\n",(0,t.jsx)(s.p,{children:"Yearn works with risk scores to quantify and assess the amount of risk of each strategy and vault. This document outlines how we measure risk vectors and use them to find the optimal balance of security and innovation."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"#strategy-risk-score",children:(0,t.jsx)(s.strong,{children:"Strategy Risk Score"})})," defines each dimension of risk for a strategy and how we quantify them"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"#vault-risk-score-proposal",children:(0,t.jsx)(s.strong,{children:"Vault Risk Score Proposal"})})," aggregates all strategy scores for a vault, averaging by TVL ",(0,t.jsx)(s.strong,{children:"(this is in draft stage)"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"#overall-risk-score-proposal",children:(0,t.jsx)(s.strong,{children:"Overall Risk Score Proposal"})})," aggregates strategy/vault scores into overall scores ",(0,t.jsx)(s.strong,{children:"(this is in draft stage)"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Different risk scores for all V2 vaults can be viewed on the ",(0,t.jsx)(s.a,{href:"https://seafood.yearn.watch/risk",children:"Seafood"})," Dashboard."]}),"\n",(0,t.jsx)(s.h2,{id:"strategy-risk-score",children:"Strategy Risk Score"}),"\n",(0,t.jsx)(s.p,{children:"Risk for different strategies is quantified using a 1-5 point system developed by Yearn's strategy deployment process. The higher the risk score number, the more risky the strategy is. The risk assessment evaluates eight dimensions:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"#risk-scores",children:"Risk Scores"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"#strategy-risk-score",children:"Strategy Risk Score"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#audit",children:"Audit"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#code-review",children:"Code Review"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#complexity",children:"Complexity"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#longevity",children:"Longevity"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#protocol-safety",children:"Protocol Safety"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#team-knowledge",children:"Team Knowledge"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#testing-score",children:"Testing Score"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#tvl-impact",children:"TVL Impact"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#vault-risk-score-proposal",children:"Vault Risk Score Proposal"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#overall-risk-score-proposal",children:"Overall Risk Score Proposal"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This risk framework is an ongoing process to ensure the security of Yearn strategies. Yearn recognized that, due to its unique approach to deploying strategies, it could not rely on a traditional waterfall process (heavy analysis and design, testing, multiple audits before release, etc.) to deploy contracts. Strategies are deployed and capped by their risk score. As we reduce the risk in any of the eight dimensions, the strategy can grow its TVL. This system allows Yearn to compare the risk score of two strategies and prioritize risk mitigation and preventive actions, such as forming a committee to spread knowledge on the code, getting more audits, migrating current code to improved versions of the strategy, etc."}),"\n",(0,t.jsx)(s.p,{children:"The current version of the risk score system works for Yearn's current needs, but we are always looking to improve and expand it to the vaults. We want to provide our users with a better understanding of what is happening behind the scenes in the vaults. The development of vault risk scoring is still in progress!"}),"\n",(0,t.jsx)(s.h3,{id:"audit",children:"Audit"}),"\n",(0,t.jsx)(s.p,{children:"Auditing is a process that an audit firm or external security researcher reviews code for any potential vulnerabilities and present a report for mitigation. Audits take longer than an internal security review and are not immediately available due to the high demand for audits in the space. As such, most strategies are sent to production without an audit (leading to a high risk score) in order to limit their Total Value Locked (TVL). This approach allows for strategies to be validated in production while still managing risk, and the risk score helps determine which strategies should get an audit first, based on impact and other scoring criteria. The table below outlines the scoring criteria associated with audits."}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Score"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Audit"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"5"}),(0,t.jsx)("td",{children:"No audit by a trusted firm or security researcher."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"4"}),(0,t.jsx)("td",{children:"Audit by trusted firm or security researcher conducted more than 6 months ago."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"3"}),(0,t.jsx)("td",{children:"Audit by trusted firm or security researcher conducted more than 3 months ago."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"2"}),(0,t.jsx)("td",{children:"Audit conducted less than 3 months ago by an independent trusted firm."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{children:"Audit conducted less than 3 months ago by 3 or more independent trusted firms."})]})]}),"\n",(0,t.jsx)(s.h3,{id:"code-review",children:"Code Review"}),"\n",(0,t.jsx)(s.p,{children:"This is the process that reviews strategy code going to production. It is done in two major phases:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Phase 1:"})," Two internal peers (strategists) review the strategy for any potential issues regarding handling accounts, profits, losses, etc. After this phase is completed, the strategy can go to ape.tax for live testing and validation."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Phase 2:"})," An internal security reviewer from Yearn will review the code focusing on security concerns. Once phase 2 is completed, the strategy gets a risk score in all dimensions and is usually deemed enough for a strategy to go to production with limited TVL based on scoring."]}),"\n",(0,t.jsx)(s.p,{children:"After these steps a recurring review is scheduled, where either a second either internal or external security reviewer will have another look at the code:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Score"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Code Review"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"5"}),(0,t.jsx)("td",{children:"0 - 1 reviewer of the code only or most recent was done 6 months+ ago"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"4"}),(0,t.jsx)("td",{children:"2 reviewers of the code, the most recent of which was done 3+ months ago"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"3"}),(0,t.jsx)("td",{children:"3 reviewers of the code, the most recent of which was done 3+ months ago (1 of the reviewers is an internal security dev)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"2"}),(0,t.jsx)("td",{children:"4 reviewers of the code (2 peers and 2 internal security devs)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{children:"5 reviewers of the code, (2 strategists peers and 2 security reviewers and either external protocol devs reviewed or external security researchers reviewed)"})]})]}),"\n",(0,t.jsx)(s.h3,{id:"complexity",children:"Complexity"}),"\n",(0,t.jsx)(s.p,{children:"This is how the strategy earns its returns: is it a simple strategy like a masterchef staking or does it have complex mechanics such as leverage, risk of liquidation, and involvement with multiple protocols? The more components it needs will require a higher complexity score. This score is essential in an emergency to evaluate how difficult it is to mitigate a live issue:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Score"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Complexity"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"5"}),(0,t.jsx)("td",{children:"Strategy is highly complex, uses leverage or debt, and is not easy to unwind. No health check available"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"4"}),(0,t.jsx)("td",{children:"Uses leverage or debt, and is not easy to unwind. No health check available"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"3"}),(0,t.jsx)("td",{children:"Has potential for losses, withdrawal fees, or requires detailed queue management to prevent losses. No health check available"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"2"}),(0,t.jsx)("td",{children:"Strategy is relatively simple, and is easy to migrate/unwind. Has a health check"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{children:"Strategy is easy to understand, and can be migrated/unwound easily. No leverage and no publicly accessible methods. Highly unlikely to incur losses."})]})]}),"\n",(0,t.jsx)(s.h3,{id:"longevity",children:"Longevity"}),"\n",(0,t.jsx)(s.p,{children:"How long the strategy has been running live on yearn.fi:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Score"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Longevity"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"5"}),(0,t.jsx)("td",{children:"Code is new and did not go to ape tax before going live on yearn.fi"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"4"}),(0,t.jsx)("td",{children:"Code has been running for less than one month"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"3"}),(0,t.jsx)("td",{children:"Code has been running between 1-4 months"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"2"}),(0,t.jsx)("td",{children:"Code has been running for 4+ months"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{children:"Code has been running for 8+ months with no critical issues and no changes in code base"})]})]}),"\n",(0,t.jsx)(s.h3,{id:"protocol-safety",children:"Protocol Safety"}),"\n",(0,t.jsx)(s.p,{children:"Protocol Safety evaluates the resilience of the protocol the strategy uses. It takes into account the safety measures given the current DeFi security standards, based on our internal assessments and due diligence compared to the top projects in DeFI. This includes multisig health, decentralization, bounty programs, audits, etc."}),"\n",(0,t.jsx)(s.p,{children:"We hope to improve this dimension with the help of the DeFI community to potentially use a standard scoring system that is widely accepted in the ecosystem to replace our current scoring table:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Score"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Protocol Safety"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"5"}),(0,t.jsx)("td",{children:"No due diligence (DD) document for this strategy. The protocol contracts used are very recent and not audited/verified. An EOA (externally owned account) owns the contracts and can upgrade them. "})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"4"}),(0,t.jsx)("td",{children:"DD took place. Protocol contracts audited/verified. A multisig is required or contracts are upgradable. Multisig has a low threshold of signers. No bounty program."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"3"}),(0,t.jsxs)("td",{children:["DD took place. Protocol contracts are audited/verified by at least ",(0,t.jsx)("strong",{children:"one reputable audit "}),"firm. A multisig with an appropriate threshold is required and/or contracts are immutable. Has a good bounty program."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"2"}),(0,t.jsxs)("td",{children:["DD took place. Protocol contracts are audited/verified by at least ",(0,t.jsx)("strong",{children:"two reputable audit "}),"firms. A multisig with an appropriate threshold is required and/or contracts are immutable. Has a good bounty program."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{children:"Protocols involved in contracts are trusted blue chip protocols with a good track record of security. For example: Maker, Uniswap, Curve, AAVE, and Compound. These protocols meet all the criteria specified in item 2 and more."})]})]}),"\n",(0,t.jsx)(s.h3,{id:"team-knowledge",children:"Team Knowledge"}),"\n",(0,t.jsx)(s.p,{children:"Measures the amount of expertise on a strategy that is shared amongst Yearn contributors. How many contributors can manage the strategy and respond in an emergency? The fewer people who can manage and respond during an emergency the riskier the strategy assessment in this dimension:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Score"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Team Knowledge"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"5"}),(0,t.jsx)("td",{children:"1 person in the team is the only one that has in-depth knowledge of the strategy code"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"4"}),(0,t.jsx)("td",{children:"1 strategist has in-depth knowledge, and 1 strategist is somewhat familiar with the strategy code."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"3"}),(0,t.jsx)("td",{children:"2 strategists have in-depth knowledge of the strategy code."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"2"}),(0,t.jsx)("td",{children:"2 strategists have in-depth knowledge, and 1 strategist is somewhat familiar with the strategy code."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{children:"A team of 3+ strategists are very familiar with the strategy code and the protocol the strategy is utilising. "})]})]}),"\n",(0,t.jsx)(s.h3,{id:"testing-score",children:"Testing Score"}),"\n",(0,t.jsx)(s.p,{children:"Testing score is a metric of how much of the codebase for the strategy has been tested. It uses the test coverage number as a reference, higher coverage means the developer/strategist took time to test most of the operations of the strategy in a unit test or fork environment. This score assumes that a less tested strategy entails more risk since we know less about what is expected from the code:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Score"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Testing Score"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"5"}),(0,t.jsx)("td",{children:"Less than 20% coverage in testing"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"4"}),(0,t.jsx)("td",{children:"Less than 40% coverage in testing"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"3"}),(0,t.jsx)("td",{children:"40% to 80% coverage"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"2"}),(0,t.jsx)("td",{children:"Over 80% coverage"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{children:"Over 90% coverage in testing. Second developer validated and added tests and also added new ones for uncovered cases while reviewing. You can pull the repository and the tests are currently passing"})]})]}),"\n",(0,t.jsx)(s.h3,{id:"tvl-impact",children:"TVL Impact"}),"\n",(0,t.jsxs)(s.p,{children:["The TVL (total value locked) metric measures how to allocate to new riskier strategies without having a catastrophic event in case of a hack or issue. The lower the impact, the more likely Yearn\u2019s treasury can recover from an incident. The TVL is measured in USD and grows dynamically based on strategies allocations onchain. Through ",(0,t.jsx)(s.a,{href:"https://seafood.yearn.watch/risk",children:"seafood"})," we keep track of the TVL and risk score to make fund allocation decisions and mitigations if a strategy group has fallen into the \u201cred\u201d high-risk zone:"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Score"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"TVL Impact"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"5"}),(0,t.jsx)("td",{children:"Extreme: greater than USD 100 MM"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"4"}),(0,t.jsx)("td",{children:"Very high: less than USD 100 MM"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"3"}),(0,t.jsx)("td",{children:"High: less than USD 50 MM"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"2"}),(0,t.jsx)("td",{children:"Medium: less than USD 10 MM"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{children:"Low: less than USD 1 MM"})]})]}),"\n",(0,t.jsx)(s.h2,{id:"vault-risk-score-proposal",children:"Vault Risk Score Proposal"}),"\n",(0,t.jsx)(s.p,{children:"A vault is a contract that holds funds for up to 20 strategies, the vault risk score is a TVL weighted average for each active strategy, for example:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Strategy X"})," has ",(0,t.jsx)(s.strong,{children:"5000$"})," funds deposited",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"Strategy Y"})," has ",(0,t.jsx)(s.strong,{children:"1000$"})," funds deposited"]}),"\n",(0,t.jsx)(s.p,{children:"This vault's risk score would be calculated as follows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"(\n  (Strategy X risk) * 5000\n  +\n  (Strategy Y risk) * 1000\n)\n\xf7\n6000\n"})}),"\n",(0,t.jsx)(s.h2,{id:"overall-risk-score-proposal",children:"Overall Risk Score Proposal"}),"\n",(0,t.jsx)(s.p,{children:"Risks on some projects may have more relevance than others, so before calculating the overall score we first define the weight for the context we want to apply the framework on, and then we do a weighted average between all risk dimensions and risk profiles:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Risk Profile"})," = Weighted table of which risk dimension is more important given the current context",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"Risk Score"})," = Weighted average of all 8 dimensions using the risk profile weights"]}),"\n",(0,t.jsx)(s.p,{children:"A project may have many risk profiles, so for each profile the score is calculated and the final list that remains is then used with medians to reach the final result."}),"\n",(0,t.jsx)(s.p,{children:"The projects overall risk score will be presented in 3 variables:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"high:"})," profile score for a risk-averse user"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"low:"})," profile score for a risk-seeking user"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"median:"})," profile score for a median representative user"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Where each one of these use the final list median:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"high:"})," median + 1.5 IQR"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"low:"})," median - 1.5 IQR"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"median:"})," the median value from the distribution"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Where IQR stands for the interquartile range of the distribution"}),"\n",(0,t.jsx)(s.p,{children:"Here is what the final result looks like:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"{\n  'overallScore': {\n    'high': 3.37675585284281,\n    'low': 2.5463210702341135,\n    'median': 2.9615384615384617,\n  },\n}\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>a});var t=r(6540);const i={},n=t.createContext(i);function o(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);