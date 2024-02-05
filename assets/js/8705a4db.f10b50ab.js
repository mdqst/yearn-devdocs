"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[2741],{3905:(e,t,a)=>{a.d(t,{kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||l;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5468:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={},o="yvToken as Collateral",i={unversionedId:"yvtokens-as-collateral",id:"yvtokens-as-collateral",title:"yvToken as Collateral",description:"Overview of Yearn Vaults as Collateral",source:"@site/docs/partners/yvtokens-as-collateral.md",sourceDirName:".",slug:"/yvtokens-as-collateral",permalink:"/partners/yvtokens-as-collateral",draft:!1,tags:[],version:"current",lastUpdatedAt:1707164488,formattedLastUpdatedAt:"2/5/2024",frontMatter:{},sidebar:"mySidebar",previous:{title:"Submit a Pull Request",permalink:"/partners/submit_pr"}},s={},u=[{value:"Overview of Yearn Vaults as Collateral",id:"overview-of-yearn-vaults-as-collateral",level:2},{value:"Why Use yvTokens as Collateral?",id:"why-use-yvtokens-as-collateral",level:2},{value:"They\u2019re Yield Generating",id:"theyre-yield-generating",level:3},{value:"The Safest Yields in DeFi",id:"the-safest-yields-in-defi",level:3},{value:"They\u2019re ERC20 Compatible",id:"theyre-erc20-compatible",level:3},{value:"V3 vaults are ERC4626 Compatible",id:"v3-vaults-are-erc4626-compatible",level:3},{value:"Many are Almost 100% Liquid",id:"many-are-almost-100-liquid",level:3},{value:"They\u2019re Transparent",id:"theyre-transparent",level:3},{value:"Projects Using yvTokens as Collateral",id:"projects-using-yvtokens-as-collateral",level:2},{value:"Oracle Safety and PricePerShare Calculations",id:"oracle-safety-and-pricepershare-calculations",level:2},{value:"Concerns",id:"concerns",level:2},{value:"Suggestions",id:"suggestions",level:2},{value:"Vault Tokens with API Version &lt;= v0.4.3",id:"vault-tokens-with-api-version--v043",level:3},{value:"Vault Tokens with API Version &gt;= v0.4.4 and all V3 vaults.",id:"vault-tokens-with-api-version--v044-and-all-v3-vaults",level:3},{value:"Hacks History",id:"hacks-history",level:2},{value:"Disclaimer:",id:"disclaimer",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yvtoken-as-collateral"},"yvToken as Collateral"),(0,n.kt)("h2",{id:"overview-of-yearn-vaults-as-collateral"},"Overview of Yearn Vaults as Collateral"),(0,n.kt)("p",null,"Yearn vault tokens are yield-generating wrappers around underlying assets.\nIdeally, they are a great way to hold collateral because they are secure and grow in value over time rather than remaining as idle capital."),(0,n.kt)("p",null,"However, there are some risks to consider with some implementations of Yearn vaults before onboarding them as a collateral type in lending markets."),(0,n.kt)("p",null,"Aside from obvious risks involved with smart contracts (including the vault contract itself, it\u2019s strategies, and protocols farmed by the strategy), lending protocols should also study the risks involved with how a vault\u2019s pricePerShare is calculated, as this function is important in computing the vault token\u2019s value."),(0,n.kt)("h2",{id:"why-use-yvtokens-as-collateral"},"Why Use yvTokens as Collateral?"),(0,n.kt)("h3",{id:"theyre-yield-generating"},"They\u2019re Yield Generating"),(0,n.kt)("p",null,"A Yearn Vault token is a yield-bearing version of a token, so when locked up as collateral it will still generate yield. A single vault token can run up to 20 yield-generating strategies. All Vaults at ",(0,n.kt)("a",{parentName:"p",href:"https://yearn.fi/#/vaults"},"yearn.fi"),' run "up-only" strategies.'),(0,n.kt)("h3",{id:"the-safest-yields-in-defi"},"The Safest Yields in DeFi"),(0,n.kt)("p",null,"Vaults strategies are constantly audited to practice the highest security standards of DeFi. Grow with us one day at a time. More information at:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.yearn.fi/developers/v2/DEPLOYMENT"},"Vaults & Strategies Deployment Security Guidelines")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://messari.io/article/yearning-for-yearn"},"Yearning for Yearn: Messari Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yearn/yearn-security/blob/master/SECURITY.md"},"Yearn Security Processes"))),(0,n.kt)("h3",{id:"theyre-erc20-compatible"},"They\u2019re ERC20 Compatible"),(0,n.kt)("p",null,"yvTokens are ",(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-20/"},"ERC-20")," compatible (like any other commonly expected token), there is no code security overhead for developers to implement any yvToken as a new option for collateral."),(0,n.kt)("h3",{id:"v3-vaults-are-erc4626-compatible"},"V3 vaults are ERC4626 Compatible"),(0,n.kt)("p",null,"V3 yvTokens are ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-4626"},"ERC-4626")," compatible, there is no code security overhead for developers to implement any yvToken as a new option for collateral."),(0,n.kt)("h3",{id:"many-are-almost-100-liquid"},"Many are Almost 100% Liquid"),(0,n.kt)("p",null,"In most Yearn vaults strategies that lock tokens are kept to a minimum amount of time. To learn more about strategy and fund allocation visit ",(0,n.kt)("a",{parentName:"p",href:"https://seafood.yearn.watch/"},"seafood.yearn.watch")," for a look into what's going on right now."),(0,n.kt)("p",null,"Some vaults do implement strategies that will be less liquid and integrators should be aware of the stated goals of the vault they are integrating before hand."),(0,n.kt)("h3",{id:"theyre-transparent"},"They\u2019re Transparent"),(0,n.kt)("p",null,"What you see on-chain is what you get. For real-time protocol data see:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://seafood.yearn.watch/"},"seafood.yearn.watch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/iearn/diving-into-yearn-metrics-8c3fb0520927"},"diving into yearn metrics"))),(0,n.kt)("h2",{id:"projects-using-yvtokens-as-collateral"},"Projects Using yvTokens as Collateral"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alchemix: ",(0,n.kt)("a",{parentName:"li",href:"https://alchemix.fi/"},"https://alchemix.fi/")),(0,n.kt)("li",{parentName:"ul"},"Abracadabra: ",(0,n.kt)("a",{parentName:"li",href:"https://abracadabra.money/"},"https://abracadabra.money/")),(0,n.kt)("li",{parentName:"ul"},"Gearbox: ",(0,n.kt)("a",{parentName:"li",href:"https://gearbox.fi/"},"https://gearbox.fi/")),(0,n.kt)("li",{parentName:"ul"},"QiDao: ",(0,n.kt)("a",{parentName:"li",href:"https://app.mai.finance/"},"https://app.mai.finance/")),(0,n.kt)("li",{parentName:"ul"},"Ribbon: ",(0,n.kt)("a",{parentName:"li",href:"https://www.ribbon.finance/"},"https://www.ribbon.finance/")),(0,n.kt)("li",{parentName:"ul"},"Sturdy: ",(0,n.kt)("a",{parentName:"li",href:"https://sturdy.finance/"},"https://sturdy.finance/")),(0,n.kt)("li",{parentName:"ul"},"Tempus: ",(0,n.kt)("a",{parentName:"li",href:"https://tempus.finance/"},"https://tempus.finance/"))),(0,n.kt)("p",null,"To learn more reach out through twitter, telegram or discord."),(0,n.kt)("h2",{id:"oracle-safety-and-pricepershare-calculations"},"Oracle Safety and PricePerShare Calculations"),(0,n.kt)("p",null,"Critical to the safety of integrating yvTokens is the ability of an attacker to affect pricePerShare of the vault being used.."),(0,n.kt)("p",null,"Beginning in API version 0.4.4, Yearn vaults introduced a feature called \u201cAirdrop Protection\u201d, which prevents pricePerShare changes when tokens are transferred directly to the vault contract. This practice is continued into V3 on both the multi strategy and single strategy vaults."),(0,n.kt)("p",null,'While the airdrop protection limits the majority of pricePerShare concerns, both Yearn v2 and v3 vaults follow similar rounding practices from common vault standards that can lead to PPS inflation attacks seen in other protocols recently through "stealth donations".'),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.euler.finance/blog/exchange-rate-manipulation-in-erc4626-vaults"},"Read More")," about known issues with vault exchange rate manipulation."),(0,n.kt)("p",null,"It is important to note that, as of now, it seems effects of these type of attacks are only meaningful when vaults are almost or entirely empty of assets."),(0,n.kt)("p",null,"Out of an abundance of caution anyone using a Yearn vault as collateral should be aware of this and take any needed steps to assure the health of their system."),(0,n.kt)("h2",{id:"concerns"},"Concerns"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A vault is empty or almost empty"),(0,n.kt)("li",{parentName:"ul"},"A vault is held almost entirely by one entity"),(0,n.kt)("li",{parentName:"ul"},"The majority of outstanding vault shares can be flash loaned or borrowed"),(0,n.kt)("li",{parentName:"ul"},"The amount available to borrow is priced purely by the current ",(0,n.kt)("inlineCode",{parentName:"li"},"pricePerShare")," with no extra checks")),(0,n.kt)("h2",{id:"suggestions"},"Suggestions"),(0,n.kt)("h3",{id:"vault-tokens-with-api-version--v043"},"Vault Tokens with API Version <= v0.4.3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not recommended for protocols without isolated lending markets and configurable borrow limits"),(0,n.kt)("li",{parentName:"ul"},"Not recommended for vaults with low TVL")),(0,n.kt)("h3",{id:"vault-tokens-with-api-version--v044-and-all-v3-vaults"},"Vault Tokens with API Version >= v0.4.4 and all V3 vaults."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Limit use of vaults that have 0 or almost 0 assets."),(0,n.kt)("li",{parentName:"ul"},"Do not allow vaults to be flash loaned or borrowed."),(0,n.kt)("li",{parentName:"ul"},"Limit use of vaults who have one majority owner of the shares."),(0,n.kt)("li",{parentName:"ul"},"Be mindful that PricePerShare may be subject to significant change within a single block. Treat the pricePerShare of the vault as you would other touch values.")),(0,n.kt)("h2",{id:"hacks-history"},"Hacks History"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-security/blob/master/disclosures/2021-10-27.md"},"CREAM hack in 2021")," proved that without proper care, an attacker could trick the lending market into thinking they have a far larger position than reality. This led to a tragic $130M loss for the protocol. Technical reference: ",(0,n.kt)("a",{parentName:"p",href:"https://mudit.blog/cream-hack-analysis/"},"https://mudit.blog/cream-hack-analysis/")),(0,n.kt)("h2",{id:"disclaimer"},"Disclaimer:"),(0,n.kt)("p",null,"Although this document presents some suggestions for integrating yearn vaults into your protocol it is NOT an exhaustive list and does not guarantee any outcomes or safety."),(0,n.kt)("p",null,"It's strongly advised that any integration's with Yearn vaults be reviewed/audited by experienced security professionals within the context of your specific use case and consider past attacks to similar vault contracts and implementations."))}p.isMDXComponent=!0}}]);