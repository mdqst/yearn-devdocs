"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[9227],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,u=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4343:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s={},o="ySwaps",l={unversionedId:"v2/yswaps",id:"v2/yswaps",isDocsHomePage:!1,title:"ySwaps",description:'ySwaps is used to abstract the token trading logic from the strategies harvest method, which means strategies can focus on farming tokens and don\'t have to handle tokens trading logic and paths. The "swappers" smart contracts allows trading optimizations and new paths to be added since the code is not hardcoded in strategies.',source:"@site/docs/developers/v2/yswaps.md",sourceDirName:"v2",slug:"/v2/yswaps",permalink:"/developers/v2/yswaps",tags:[],version:"current",lastUpdatedBy:"Marco Guaspari Worms",lastUpdatedAt:1652798429,formattedLastUpdatedAt:"5/17/2022",frontMatter:{},sidebar:"mySidebar",previous:{title:"Hacking on Yearn",permalink:"/developers/v2/hacking-with-yearn"}},p=[{value:"Glossary",id:"glossary",children:[]},{value:"Components",id:"components",children:[{value:"Swappers",id:"swappers",children:[]},{value:"Trade Factory",id:"trade-factory",children:[]},{value:"Solvers Scripts",id:"solvers-scripts",children:[]},{value:"Dexes Libraries",id:"dexes-libraries",children:[]},{value:"Execute script",id:"execute-script",children:[]},{value:"Extra toolings",id:"extra-toolings",children:[]}]},{value:"Procedures",id:"procedures",children:[{value:"Add new strategy",id:"add-new-strategy",children:[]},{value:"Remove strategy",id:"remove-strategy",children:[]}]},{value:"Keep3r jobs",id:"keep3r-jobs",children:[{value:"Procedures",id:"procedures-1",children:[]}]}],d={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"yswaps"},"ySwaps"),(0,i.kt)("p",null,"ySwaps is used to ",(0,i.kt)("strong",{parentName:"p"},"abstract"),' the token trading logic from the strategies harvest method, which means strategies can focus on farming tokens and don\'t have to handle tokens trading logic and paths. The "swappers" smart contracts allows trading optimizations and new paths to be added since the code is not hardcoded in strategies.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yearn/yswaps"},"ySwaps contracts repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yearn/yswaps-app"},"ySwaps scripts repository"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/VynhCU4.png",alt:"yswaps-intro-diagram"})),(0,i.kt)("h2",{id:"glossary"},"Glossary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sms"),": Strategists multisig"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tokenIn"),":  Token we have and we want to trade/swap"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"toeknOut"),": Token we want to obtain on the swap"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hopToken"),": Token we use as a middle step between tokenIn and tokenOut"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tf"),": Trade Factory")),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#swappers"},"Swappers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#trade-factory"},"Trade Factory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#solvers"},"Solvers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dexes-libraries"},"Dexes Libraries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#execute-script"},"Execute script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#extra-toolings"},"Extra toolings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#procedures"},"Procedures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#keep3r-jobs"},"Keep3r Jobs"))),(0,i.kt)("h3",{id:"swappers"},"Swappers"),(0,i.kt)("p",null,"Contracts in charge of making the swaps (uniswap, balancer, sushiswap, solidly and more). We can separated them in two types:"),(0,i.kt)("h4",{id:"single-swapper"},"Single swapper"),(0,i.kt)("p",null,"Uniswap, balancer, sushiswap, etc. These are straighforward contracts that will make a simple swap on these dexes (",(0,i.kt)("inlineCode",{parentName:"p"},"token A")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"token B"),"). It is also worth to mention that these swappers take care of few extra stuff like: ",(0,i.kt)("inlineCode",{parentName:"p"},"approval needed to make the swap"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"transfering final tokens to strategy if needed"),"."),(0,i.kt)("h4",{id:"multicall-swapper"},"Multicall swapper"),(0,i.kt)("p",null,"This contract will receive a bundle of transactions that are required to aquire the wanted token/tokens. This is used in specific cases where trade can not be made in a normal exchange due to liquidity issues, dex not having that token or route, needing extra steps to aquire the token such as depositing or withdrawing, and more. It is important to mention that this swapper does NOT take care of things like approvals, or transfers (important difference with ",(0,i.kt)("inlineCode",{parentName:"p"},"single swappers"),")."),(0,i.kt)("h4",{id:"swappers-usage"},"Swappers Usage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Single swapper example:")," We have ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenIn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenOut")," and we know that we can go straight to sushiswap that has enought liquidity to make the trade with good conditions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Multicall example:")," We have a ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenIn")," and we want a ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenOut"),". But theres no path on any dex to do the trade directly, so we need to split the swap in two steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Step 1: ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenIn")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"hopToken"),"."),(0,i.kt)("li",{parentName:"ol"},"Step 2: ",(0,i.kt)("inlineCode",{parentName:"li"},"hopToken")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenOut"),".")),(0,i.kt)("p",null,"For this example we are gonna assume that we will need to use two different dexes for each step. Since we are gonna split the trade in two different transactions and the main objective is to use TWO DIFFERENT dexes, this is where we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Multicall Swapper"),".Everything that requires more than just a single swap tx, will use multicall dexes."),(0,i.kt)("h4",{id:"swapper-contracts-version-020"},"Swapper Contracts (version 0.2.0)"),(0,i.kt)("h5",{id:"ethereum"},"Ethereum"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MultiCallOptimizedSwapper: ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x711d1D8E8B2b468c92c202127A2BBFEFC14bf105"},"0x711d1D8E8B2b468c92c202127A2BBFEFC14bf105")),(0,i.kt)("li",{parentName:"ul"},"ZRX ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xE32dd1F66365289b7fe14e503CBB336cD5D13F09"},"0xE32dd1F66365289b7fe14e503CBB336cD5D13F09")),(0,i.kt)("li",{parentName:"ul"},"AsyncBancor ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xf13b8F103690FD74B5F137eC3CF679a9D1B4BA95"},"0xf13b8F103690FD74B5F137eC3CF679a9D1B4BA95")),(0,i.kt)("li",{parentName:"ul"},"AsyncSushiswap ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x408Ec47533aEF482DC8fA568c36EC0De00593f44"},"0x408Ec47533aEF482DC8fA568c36EC0De00593f44")),(0,i.kt)("li",{parentName:"ul"},"AsyncUniswapV2 ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xA780b6A733D06dFf526A84c4258616b75279C763"},"0xA780b6A733D06dFf526A84c4258616b75279C763")),(0,i.kt)("li",{parentName:"ul"},"OneInchAggregator ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x934D1c4ba7DF902d6cd0803882876e3C999cb406"},"0x934D1c4ba7DF902d6cd0803882876e3C999cb406"))),(0,i.kt)("h5",{id:"fantom"},"Fantom"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ZRX: ",(0,i.kt)("a",{parentName:"li",href:"https://ftmscan.com/address/0x0a94017DF3f8981Da97D79c28b103bAbDa0D67C7"},"0x0a94017DF3f8981Da97D79c28b103bAbDa0D67C7")),(0,i.kt)("li",{parentName:"ul"},"MultiCallOptimizedSwapper: ",(0,i.kt)("a",{parentName:"li",href:"https://ftmscan.com/address/0x590B3e12Ded77dE66CBF45050cD07a65d1F51dDD"},"0x590B3e12Ded77dE66CBF45050cD07a65d1F51dDD")),(0,i.kt)("li",{parentName:"ul"},"AsyncSolidly: ",(0,i.kt)("a",{parentName:"li",href:"https://ftmscan.com/address/0x2cb391afd5180a31d01bE95Bd61A757594C9295a"},"0x2cb391afd5180a31d01bE95Bd61A757594C9295a")),(0,i.kt)("li",{parentName:"ul"},"AsyncSpiritswap: ",(0,i.kt)("a",{parentName:"li",href:"https://ftmscan.com/address/0x8d2aFF696F14b287a6E759F4bfFB6f08E92DFD20"},"0x8d2aFF696F14b287a6E759F4bfFB6f08E92DFD20")),(0,i.kt)("li",{parentName:"ul"},"AsyncSpookyswap: ",(0,i.kt)("a",{parentName:"li",href:"https://ftmscan.com/address/0x86ee473C2eE7eB97Ee0276bE43427a6CF0cC6348"},"0x86ee473C2eE7eB97Ee0276bE43427a6CF0cC6348")),(0,i.kt)("li",{parentName:"ul"},"SyncSpiritswap: ",(0,i.kt)("a",{parentName:"li",href:"https://ftmscan.com/address/0x923D22FE66C77E2fea215050F088AE26186F96aE"},"0x923D22FE66C77E2fea215050F088AE26186F96aE")),(0,i.kt)("li",{parentName:"ul"},"SyncSpookyswap: ",(0,i.kt)("a",{parentName:"li",href:"https://ftmscan.com/address/0xcD00a47D9fB36B0B37D589E20fE4fB7e2D9d9e8A"},"0xcD00a47D9fB36B0B37D589E20fE4fB7e2D9d9e8A"))),(0,i.kt)("h3",{id:"trade-factory"},"Trade Factory"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This contract has the ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled trades")," that each strategy can make. Enabled trades are just a list of possible swaps that a strategy can make. So it only contains three variables: ",(0,i.kt)("inlineCode",{parentName:"p"},"strategyAddress"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenIn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenOut"),". We have these enabled trades to know which swaps can/should be made with each strategy.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This contract is also in changer of verifying the trades. To do that it will use the different ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," methods in it and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"swapper contracts")," that needs to use. Remember that ",(0,i.kt)("inlineCode",{parentName:"p"},"swappers")," are the contracts responsible to making the actual swap.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When we execute the swap its important to point out that this  takes care of: ",(0,i.kt)("inlineCode",{parentName:"p"},"transfering tokenIn from strat to swapper"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"make final the check if the amount received > minAmountOut"),"."))),(0,i.kt)("h4",{id:"trade-factory-contracts-version-020"},"Trade Factory Contracts (version 0.2.0)"),(0,i.kt)("h5",{id:"ethereum-1"},"Ethereum"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TradeFactory: ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x7BAF843e06095f68F4990Ca50161C2C4E4e01ec6"},"0x7BAF843e06095f68F4990Ca50161C2C4E4e01ec6"))),(0,i.kt)("h5",{id:"fantom-1"},"Fantom"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TradeFactory: ",(0,i.kt)("a",{parentName:"li",href:"https://ftmscan.com/address/0xD3f89C21719Ec5961a3E6B0f9bBf9F9b4180E9e9"},"0xD3f89C21719Ec5961a3E6B0f9bBf9F9b4180E9e9"))),(0,i.kt)("h3",{id:"solvers-scripts"},"Solvers Scripts"),(0,i.kt)("p",null,"Scripts in charge of providing the swap transaction that will be used and sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"Trade Factory contract"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Custom solvers"),": There are custom solvers for specific cases/strategies that will need to make multiple transactions for a specific swap. Each of these scripts aims to an specific strategy and trade that needs to be made. Some examples (",(0,i.kt)("inlineCode",{parentName:"p"},"ThreePoolCrvMulticall.ts"),"). This is for specific strategies's trades that will need to swap tokens that can not be swaped/resolved on a single dex swap. The tx provided by this solver is gonna be used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Multicall swapper"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dexes solvers"),": this script is used for situations where the trade can be resolved with a normal swap on an exchange and does NOT require multiple tx to ensure the trade is possible. Different to ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom Solvers"),", this can be used in a generic way for different strategies/swaps. This script checks with every DeX and chooses the best one to make the trade. The tx provided by this solver is gonna be used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Single swapper"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Multicall Dexes solvers"),": This solver is gonna split the trade in different steps using the ",(0,i.kt)("inlineCode",{parentName:"p"},"hopTokens")," provided by us. Each step of the swap will loop between every dexes library and will take the best dex for each step of the trade. This solver generally will be using the ",(0,i.kt)("inlineCode",{parentName:"p"},"MulticallSwapper")," since we are doing 2 steps or tx for the swap. But it is also possible to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SingleSwapper")," because if both steps of the trade are using the same Dex, we should merge them into one for gas efficiency. We will be transformir ",(0,i.kt)("inlineCode",{parentName:"p"},"2 tx")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"1 tx")," so we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SingleSwapper"),"."))),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yearn/yswaps-app/tree/main/scripts/libraries/solvers"},"All Solvers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yearn/yswaps-app/blob/main/scripts/libraries/solvers/Dexes.ts"},"Dexes Solver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yearn/yswaps-app/blob/main/scripts/libraries/solvers/MulticallDexes.ts"},"Multicall Dexes Solver"))),(0,i.kt)("h3",{id:"dexes-libraries"},"Dexes Libraries"),(0,i.kt)("p",null,"There is one dex library per dex (uniswap, bancor, ...). They are in charge of getting the trade information of each Dex and returning all the data needed on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Solvers"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: The libraries contemplate the hopTokens too.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yearn/yswaps-app/tree/main/scripts/libraries/dexes"},"All Dexes Libraries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yearn/yswaps-app/blob/main/scripts/libraries/dexes/bancor.ts"},"Bancor Dex Library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yearn/yswaps-app/blob/main/scripts/libraries/dexes/uniswap-v2.ts"},"UniswapV2 Dex Library"))),(0,i.kt)("h3",{id:"execute-script"},"Execute script"),(0,i.kt)("p",null,"This is where everything starts. Here we will grab all the enabled trades, loop and use logic to determinate if:"),(0,i.kt)("p",null,"1) Should the trade by executed?\n2) If so, what solver should we use?\n3) Once we have the solver response, execute the swap transaction provided by the solver."),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yearn/yswaps-app/blob/main/scripts/execute-mainnet-pending-trades.ts"},"Execute Mainnet pending trades")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yearn/yswaps-app/blob/main/scripts/execute-fantom-pending-trades.ts"},"Execute Fantom pending trades"))),(0,i.kt)("h4",{id:"execute-pending-trades-what-exactly-happens"},"Execute pending trades: What exactly happens?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Script execute-mainnet-pending-trades\n1.1. Identify "pending trades"\n1.2. Determinate which solver to use.\n1.3. Solver determinates best Dex and returns the swap tx\n1.3. Execute swap tx provided by the solver.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Call the execute in Trade Factory\n2.1. Contract validates the data and that trade in configuration is valid.\n2.2 Moves the funds directly from the strategy to the swapper.\n2.3 Calls ",(0,i.kt)("inlineCode",{parentName:"p"},"swapper.swap()")," to execute the trade.\n2.4 Check that amount received by strategy > minAmountOut provided by us.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Swapper executes the trade\n3.1. Validates some data.\n3.2. Executes the trade\n3.3. Send funds directly to the strategy."))),(0,i.kt)("h3",{id:"extra-toolings"},"Extra toolings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gas service"),": provides the correct params for gas options for each network"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Price service"),": we use providers as CoinGecko API to normilize the ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenInAmount")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenOutAmount")," in USD so we can verify that we are not getting a bad price from the Dex we ended up using.")),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yearn/yswaps-app/tree/main/scripts/libraries/utils"},"Link to services scripts"))),(0,i.kt)("h2",{id:"procedures"},"Procedures"),(0,i.kt)("h3",{id:"add-new-strategy"},"Add new strategy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"STRATEGY")," role on Trade factory contract. From yMech."),(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"enable trades")," on Trade factory contract. From strategy."),(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"enable trade")," on ySwap repo config (",(0,i.kt)("inlineCode",{parentName:"li"},"fantom.ts")," ",(0,i.kt)("inlineCode",{parentName:"li"},"mainnet.ts"),")\n3.1 To add it to the config we also need to know what solver we are going to use. It would be ",(0,i.kt)("inlineCode",{parentName:"li"},"Dexes.ts")," which is a generic solver or it would have its own ",(0,i.kt)("inlineCode",{parentName:"li"},"Custom Solver"),".\n3.2 In case of need a ",(0,i.kt)("inlineCode",{parentName:"li"},"Custom Solver"),", we need to code it."),(0,i.kt)("li",{parentName:"ol"},"Once added to config, we are ready to execute the script to swap available trades.")),(0,i.kt)("h3",{id:"remove-strategy"},"Remove strategy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Revoke role from MS."),(0,i.kt)("li",{parentName:"ol"},"Remove from network config file."),(0,i.kt)("li",{parentName:"ol"},"OPTIONAL: remove custom solver if it has one.")),(0,i.kt)("h2",{id:"keep3r-jobs"},"Keep3r jobs"),(0,i.kt)("p",null,"Previous knowledge about how ",(0,i.kt)("inlineCode",{parentName:"p"},"Keeper Network")," works is needed."),(0,i.kt)("h3",{id:"procedures-1"},"Procedures"),(0,i.kt)("h4",{id:"add-strategy-fantom-keeper-harvest-job"},"Add strategy fantom keeper harvest job"),(0,i.kt)("h5",{id:"a"},"A)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go straight to ftmscan harvest job and add the strategy manually by a yMech."),(0,i.kt)("li",{parentName:"ol"},"Add strategy to v2-ftm-strategies.ts config with ",(0,i.kt)("inlineCode",{parentName:"li"},"added: true"))),(0,i.kt)("h5",{id:"b-safest-way-to-have-everything-added"},"B) (safest way to have everything added)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Review and merge pr from strategists to add new strategies."),(0,i.kt)("li",{parentName:"ol"},"On  packages/strategies-keep3r Execute script: ",(0,i.kt)("inlineCode",{parentName:"li"},"npx hardhat run scripts/jobs/detached/01-v2-harvest-ftm-detached-job-add-strategies.ts --network fantom")),(0,i.kt)("li",{parentName:"ol"},"On config file strategies-keep3r/utils/v2-ftm-strategies.ts change once again  strategies property added to true"),(0,i.kt)("li",{parentName:"ol"},"Push changes.")),(0,i.kt)("h4",{id:"remove-strategy-fantom-keeper-harvest-job"},"Remove strategy fantom keeper harvest job"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ftmscan ",(0,i.kt)("inlineCode",{parentName:"li"},"Harvest Job SC")," and remove the strategy manually using method ",(0,i.kt)("inlineCode",{parentName:"li"},"removeStrategies"),". Call with a mechanic."),(0,i.kt)("li",{parentName:"ol"},"Remove strategy from ",(0,i.kt)("inlineCode",{parentName:"li"},"v2-NETWORK-strategies.json")," file.")))}c.isMDXComponent=!0}}]);