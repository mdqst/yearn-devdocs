"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[7216],{3905:(e,t,a)=>{a.d(t,{kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,m=p["".concat(i,".").concat(h)]||p[h]||c[h]||o;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={},l="Vault Factory",s={unversionedId:"products/yvaults/vault-factory",id:"products/yvaults/vault-factory",title:"Vault Factory",description:"Yearn's Vault Factory allows anyone to permissionlessly deploy an official Yearn Vault with ready-made yield strategies.",source:"@site/docs/getting-started/products/yvaults/vault-factory.md",sourceDirName:"products/yvaults",slug:"/products/yvaults/vault-factory",permalink:"/getting-started/products/yvaults/vault-factory",draft:!1,tags:[],version:"current",lastUpdatedAt:1695766501,formattedLastUpdatedAt:"9/26/2023",frontMatter:{},sidebar:"mySidebar",previous:{title:"Vault Tokens",permalink:"/getting-started/products/yvaults/vault-tokens"},next:{title:"Vaults Version 3",permalink:"/getting-started/products/yvaults/v3"}},i={},u=[{value:"Harvests: Traditional vs. Factory Strategies",id:"harvests-traditional-vs-factory-strategies",level:2},{value:"Traditional Strategies",id:"traditional-strategies",level:3},{value:"Factory Strategies",id:"factory-strategies",level:3},{value:"Calling Harvest",id:"calling-harvest",level:3},{value:"Curve LP Tokens",id:"curve-lp-tokens",level:2},{value:"Curve Strategies",id:"curve-strategies",level:3},{value:"Velodrome LP Tokens",id:"velodrome-lp-tokens",level:2},{value:"Balancer LP Tokens",id:"balancer-lp-tokens",level:2},{value:"Balancer Strategies",id:"balancer-strategies",level:3},{value:"Aerodrome LP Tokens",id:"aerodrome-lp-tokens",level:2},{value:"Determine Accumulated Rewards",id:"determine-accumulated-rewards",level:2},{value:"Curve Strategy",id:"curve-strategy",level:3},{value:"Convex and Convex Frax Strategies",id:"convex-and-convex-frax-strategies",level:3},{value:"Contracts",id:"contracts",level:2},{value:"Ethereum",id:"ethereum",level:3},{value:"Optimism",id:"optimism",level:3},{value:"Base",id:"base",level:3},{value:"Create with UI",id:"create-with-ui",level:2},{value:"Create from Contract",id:"create-from-contract",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vault-factory"},"Vault Factory"),(0,n.kt)("p",null,"Yearn's Vault Factory allows anyone to permissionlessly deploy an official Yearn Vault with ready-made yield strategies."),(0,n.kt)("p",null,"The easiest way to get started using the factory is through the User Interface:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yearn.fi/vaults/factory"},"https://yearn.fi/vaults/factory")," - ",(0,n.kt)("a",{parentName:"li",href:"#create-with-ui"},"Tutorial"))),(0,n.kt)("p",null,"The current version of the Vault Factory works with the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Curve-LP-Tokens"},"Curve LP Tokens")),(0,n.kt)("li",{parentName:"ul"},"Balancer LP Tokens (soon)")),(0,n.kt)("p",null,"The Vault Factory is a massive step forward in automation. We're significantly reducing our operational costs for all vaults deployed with this new method. Here's the fee structure for them:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"0% management fee (previously 2%)"),(0,n.kt)("li",{parentName:"ul"},"10% performance fee (previously 20%)")),(0,n.kt)("p",null,"Performance fees for every type of yVault go straight to Yearn treasury (",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x93a62da5a14c80f265dabc077fcee437b1a0efde"},"treasury.ychad.eth"),") and are calculated only on top of harvest profits. The current fee structure for each yVault can be seen directly on the new ",(0,n.kt)("a",{parentName:"p",href:"https://yearn.fi/vaults"},"yearn.fi")," website by clicking on the vault."),(0,n.kt)("img",{src:"https://i.imgur.com/0QIydKb.png",width:"500"}),(0,n.kt)("p",null,'Only one factory vault can be live for each token, so the Vault Factory will only deploy a new yVault if there is no vault for that token already deployed (excluding "legacy" vaults, though factory versions of these must be deployed from one of Yearn\'s multisigs).'),(0,n.kt)("h2",{id:"harvests-traditional-vs-factory-strategies"},"Harvests: Traditional vs. Factory Strategies"),(0,n.kt)("p",null,"Factory vaults introduced a key change in the harvest process, enabling permissionless harvests (meaning anyone willing to pay transaction costs can perform them). Here is how harvests work in each case:"),(0,n.kt)("h3",{id:"traditional-strategies"},"Traditional Strategies"),(0,n.kt)("p",null,"Traditional strategies have the token swap logic directly embedded in them. As a result, a harvest call simultaneously performs debt rebalances and converts them into realized profits in one transaction."),(0,n.kt)("h3",{id:"factory-strategies"},"Factory Strategies"),(0,n.kt)("p",null,"Factory strategies separate swap logic from the strategy, executing it in a different transaction from the harvest. This ensures that swap transactions remain permissioned, safeguarding them from Miner Extractable Value (MEV) attacks."),(0,n.kt)("p",null,"Harvests in factory strategies still rebalance debt between strategies and allocate idle funds to strategies, pulling accumulated rewards into the strategy contract to be swapped by the ySwaps team. Once swaps are completed, which may take several days, anyone can call harvest a second time to acknowledge the profit generated by the swap and distribute it to the vault, making ",(0,n.kt)("inlineCode",{parentName:"p"},"pricePerShare")," increase."),(0,n.kt)("p",null,"Although harvests will be permissionless for this specific group of vaults, Yearn will continue utilizing standard keeper automation to call harvests, even if no one else does. These automated harvests are run by keep3r.network and often depend on network congestion and transaction viability. For example, if the network conditions are consistently unfavorable, harvests may have delays."),(0,n.kt)("h3",{id:"calling-harvest"},"Calling Harvest"),(0,n.kt)("p",null,"To call harvest, use the harvest() function on the keeper found at ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/keeper.factory.ychad.eth#writeContract"},"keeper.factory.ychad.eth"),". Simply enter the strategy address from the factory vault you wish to call harvest on and click \u201cwrite.\u201d"),(0,n.kt)("h2",{id:"curve-lp-tokens"},"Curve LP Tokens"),(0,n.kt)("p",null,"The first Vault Factory deployed live on Ethereum is the Curve LP Token Vault Factory. This factory allows users to deploy yVaults for any Curve LP token representing a Curve pool with an active gauge (allowing it to receive CRV emissions)."),(0,n.kt)("h3",{id:"curve-strategies"},"Curve Strategies"),(0,n.kt)("p",null,"Factory-deployed yVaults for Curve LP tokens contain up to three ready-made yield strategies:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"StrategyCurveBoostedFactory"),(0,n.kt)("li",{parentName:"ol"},"StrategyConvexFactory"),(0,n.kt)("li",{parentName:"ol"},"StrategyConvexFraxFactory")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"StrategyCurveBoostedFactory")," uses Yearn's veCRV balance (currently ",(0,n.kt)("a",{parentName:"p",href:"https://yearn.fi/ycrv"},"62.8m"),") to give users the maximum 2.5x boost on their CRV rewards."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"StrategyConvexFactory")," supplies any additional Curve LP tokens (beyond which would receive the maximum 2.5x boost via the Curve strategy) to Convex Finance to earn CRV rewards (boosted by Convex's veCRV balance) and CVX rewards."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"StrategyConvexFraxFactory")," will only be added to the vault if the Curve LP token of the vault can be staked in Convex for Frax (currently available for over 20 Curve LPs). This ConvexFrax strategy will be used instead of the standard Convex strategy to earn additional FXS rewards (on top of the standard CRV and CVX rewards)."),(0,n.kt)("img",{src:"https://i.imgur.com/oJdwz6n.png"}),(0,n.kt)("p",null,"In all three strategies, any earned tokens are regularly claimed, sold for more of the underlying Curve LP token, and then deposited back into the strategy to compound the yield. "),(0,n.kt)("h2",{id:"velodrome-lp-tokens"},"Velodrome LP Tokens"),(0,n.kt)("p",null,"On Optimism, we have deployed the Velodrome LP Token Vault Factory. Several vaults have already been deployed and users can now permissionlessly deploy a new vault for any Velodrome V2 pool. The strategy collects VELO emissions from gauge incentives, swaps them for the LP token making auto-compounding effortless! At the moment, harvests for the Velodrome Vault Factory are permissioned and called regularly by keepers. "),(0,n.kt)("h2",{id:"balancer-lp-tokens"},"Balancer LP Tokens"),(0,n.kt)("p",null,"Balancer is another protocol we have integrated with our Vault Factory. The process is nearly identical to the Curve integration, with a few key differences relating to the unique features of Balancer."),(0,n.kt)("h3",{id:"balancer-strategies"},"Balancer Strategies"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"StrategyAuraFactory")," is currently the only strategy used for Balancer factory vaults. It leverages the Aura rewards program on Balancer to earn additional yield."),(0,n.kt)("p",null,"The main difference between Balancer and Curve lies in their respective veTokens. Balancer's veBAL is their LP token (an 80/20 BAL/WETH pair), and their maximum lock duration is 1 year (compared to 4 on Curve). Unlike our Curve strategies where we use our veCRV balance to boost rewards, we currently do not have a large amount of veBAL in the treasury. Therefore, the strategy focuses on earning Aura rewards."),(0,n.kt)("h2",{id:"aerodrome-lp-tokens"},"Aerodrome LP Tokens"),(0,n.kt)("p",null,"On Base, we have deployed the Aerodrome LP Token Vault Factory. Aerodrome is a fork of Velodrome V2 and was deployed by the Velodrome team on Base."),(0,n.kt)("p",null,"The Aerodrome Vault Factory works identically to the Velodrome Factory. It allows users to deploy new vaults permissionlessly for any Aerodrome V2 pool. The strategy collects AERO emissions from gauge incentives, which are sold for the LP token, making auto-compounding effortless."),(0,n.kt)("p",null,"Like with the Velodrome Vault Factory, harvests for the Aerodrome Vault Factory are permissioned and regularly called by keepers."),(0,n.kt)("h2",{id:"determine-accumulated-rewards"},"Determine Accumulated Rewards"),(0,n.kt)("p",null,"This section helps you know how much profit has accumulated, but calling harvest will ",(0,n.kt)("strong",{parentName:"p"},"not")," recognize profits unless they are sitting in the strategy's contract address. Also if there are reward tokens in the strategy's contract, those values should be added to your calculation in the section below. "),(0,n.kt)("h3",{id:"curve-strategy"},"Curve Strategy"),(0,n.kt)("p",null,"For curve strategies, you can view how much rewards have accumulated for that vault by using Curve.Fi's ",(0,n.kt)("a",{parentName:"p",href:"https://curve.fi/#/ethereum/dashboard"},"dashboard")," and putting in Yearn's Curve Voter Proxy address ",(0,n.kt)("inlineCode",{parentName:"p"},"0xF147b8125d2ef93FB6965Db97D6746952a133934")," (curve-voter.ychad.eth). This will show you the dollar amount accumulated in the strategy for all factory vaults. "),(0,n.kt)("h3",{id:"convex-and-convex-frax-strategies"},"Convex and Convex Frax Strategies"),(0,n.kt)("p",null,"For Convex and Convex Frax you can view how much rewards have accumulated in USD by viewing claimableProfitInUsdc() on the strategy under the Read Contract tab."),(0,n.kt)("h2",{id:"contracts"},"Contracts"),(0,n.kt)("h3",{id:"ethereum"},"Ethereum"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Curve LP Factory Address: ",(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x21b1FC8A52f179757bf555346130bF27c0C2A17A#readContract"},"0x21b1FC8A52f179757bf555346130bF27c0C2A17A")),(0,n.kt)("li",{parentName:"ul"},"Balancer LP Factory Address: ",(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x06393857db733b76dd3ec91f3681ce85db275438#readContract"},"0x06393857dB733b76DD3ec91F3681cE85db275438"))),(0,n.kt)("h3",{id:"optimism"},"Optimism"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Velodrome LP Factory Address: ",(0,n.kt)("a",{parentName:"li",href:"https://optimistic.etherscan.io/address/0x8eb53a4fD9D2727a49E9e68a32108C18049bFf86#readContract"},"0x8eb53a4fD9D2727a49E9e68a32108C18049bFf86"))),(0,n.kt)("h3",{id:"base"},"Base"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Aerodrome LP Factory Address: ",(0,n.kt)("a",{parentName:"li",href:"https://basescan.org/address/0x2d12caffa46ab3b6c5ceb224620de8b4de3cdff1#readContract"},"0x2d12caFfa46ab3b6c5cEb224620de8b4DE3cDff1"))),(0,n.kt)("p",null,"The LP Factory contract provides a few main functions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"allDeployedVaults()"),": returns an array of all the deployed vaults."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"numVaults()"),": returns the number of vaults deployed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"canCreateVaultPermissionlessly()"),": takes in an address for a gauge and returns a boolean that indicates whether a vault can be created permissionlessly."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"createNewVaultsAndStrategies()"),": takes in an address for a gauge and a boolean that determines whether duplicate vaults are allowed, and creates a new vault and strategy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"latestDefaultOrAutomatedVaultFromGauge()"),": takes in an address for a gauge and returns the latest default or automated vault from that gauge."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"~StrategyImplementation()"),": Has the name of the strategy in front of ",(0,n.kt)("inlineCode",{parentName:"li"},"StrategyImplmentation")," and returns the strategy contract template address used in the vault factory each factory will have at least one.")),(0,n.kt)("h2",{id:"create-with-ui"},"Create with UI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User Interface: ",(0,n.kt)("a",{parentName:"li",href:"https://yearn.fi/vaults/factory"},"https://yearn.fi/vaults/factory"))),(0,n.kt)("p",null,"Follow these steps to create a new vault with the UI:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure your wallet is connected")),(0,n.kt)("img",{src:"https://i.imgur.com/EKqOla1.png"}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Chose a token to create a vault for")),(0,n.kt)("img",{src:"https://i.imgur.com/nIt8h8v.png",width:"500"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},'Review details and click "Create Vault"')),(0,n.kt)("img",{src:"https://i.imgur.com/l7Z7oYm.png"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Sign the transaction and the vault will be created")),(0,n.kt)("img",{src:"https://i.imgur.com/uRhX2VB.png",width:"280"}),(0,n.kt)("h2",{id:"create-from-contract"},"Create from Contract"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the contract at etherscan: ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x21b1FC8A52f179757bf555346130bF27c0C2A17A#writeContract"},"0x21b1FC8A52f179757bf555346130bF27c0C2A17A"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Call ",(0,n.kt)("inlineCode",{parentName:"p"},"canCreateVaultPermissionlessly()")," function to make sure that a vault does not already exist for the gauge you want to create"))),(0,n.kt)("img",{src:"https://i.imgur.com/RBS2DIq.png",width:"500"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Call ",(0,n.kt)("inlineCode",{parentName:"li"},"createNewVaultsAndStrategies()")," to create a new permissionless vault.")),(0,n.kt)("img",{src:"https://i.imgur.com/2bMxjU0.png",width:"500"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Now your new Yearn Vault will be deployed and you can sit back while it auto-compounds your rewards into more of your Curve lp position.")))}d.isMDXComponent=!0}}]);