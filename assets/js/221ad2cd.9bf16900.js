"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[4179],{3905:(e,t,r)=>{r.d(t,{kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),c=n,f=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return r?a.createElement(f,p(p({ref:t},u),{},{components:r})):a.createElement(f,p({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<l;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9955:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={title:"Submit a Pull Request"},p=void 0,i={unversionedId:"submit_pr",id:"submit_pr",title:"Submit a Pull Request",description:"The final step to be added to the partnership program is to submit a pull request to be added to the list of partners. You should submit a request to add yourself to partners.py",source:"@site/docs/partners/submit_pr.md",sourceDirName:".",slug:"/submit_pr",permalink:"/partners/submit_pr",draft:!1,tags:[],version:"current",lastUpdatedAt:1678214664,formattedLastUpdatedAt:"3/7/2023",frontMatter:{title:"Submit a Pull Request"},sidebar:"mySidebar",previous:{title:"Yearn's Partner Tracker",permalink:"/partners/partner-tracker"},next:{title:"yvToken as Collateral",permalink:"/partners/yvtokens-as-collateral"}},o={},s=[{value:"Partner",id:"partner",level:2},{value:"Wrapper Class",id:"wrapper-class",level:2},{value:"WildcardWrapper Class",id:"wildcardwrapper-class",level:2},{value:"Assets",id:"assets",level:2},{value:"Full Example",id:"full-example",level:2},{value:"Wrapper",id:"wrapper",level:3},{value:"WildcardWrapper",id:"wildcardwrapper",level:3}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The final step to be added to the partnership program is to submit a pull request to be added to the list of partners. You should submit a request to add yourself to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-exporter/blob/master/yearn/partners/partners.py"},"partners.py")),(0,n.kt)("p",null,"First, you have to fork the repository into your account, make the modifications to update the file, and then submit the pull request to the main repo."),(0,n.kt)("p",null,"Below you will find the specification for the file and some examples."),(0,n.kt)("h2",{id:"partner"},"Partner"),(0,n.kt)("p",null,"The file consists of an array of ",(0,n.kt)("inlineCode",{parentName:"p"},"Partner")," objects. Each ",(0,n.kt)("inlineCode",{parentName:"p"},"Partner")," has the following attributes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),": Descriptive name for the partner."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"start_date"),": Date of the PR that fee-sharing will start. In the format date(yyyy, mm, dd)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"treasury"),": Address where you want to receive the shared fees."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"wrappers"),": Array of objects that contain the addresses that will hold the vault tokens. It's an array of ",(0,n.kt)("inlineCode",{parentName:"li"},"Wrapper")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"WildcardWrapper")," objects")),(0,n.kt)("h2",{id:"wrapper-class"},"Wrapper Class"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Wrapper")," should be used when only one yVault token is going to be held in that address."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Wrapper")," has the following attributes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),": Descriptive name for this wrapper. It's recommended to use the vault name as part of it."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"vault"),": Address of the vault whose tokens are going to be held here."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"wrapper"),": Address that is going to be holding the tokens.")),(0,n.kt)("h2",{id:"wildcardwrapper-class"},"WildcardWrapper Class"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"WilcardWrapper")," should be used when one address is going to hold more than one yVault token. "),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"WildcardWrapper")," has the following attributes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),": Descriptive name for this wrapper."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"wrapper"),": Address that is going to be holding the tokens.")),(0,n.kt)("h2",{id:"assets"},"Assets"),(0,n.kt)("p",null,"Add your protocol's logo via a pull request so they can be referenced easily. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make a folder here ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/yearn/yearn-assets/tree/master/icons/protocols"},"https://github.com/yearn/yearn-assets/tree/master/icons/protocols")," using the name you entered in the ",(0,n.kt)("inlineCode",{parentName:"li"},"name")," field above."),(0,n.kt)("li",{parentName:"ul"},"Add your logo as an svg titled ",(0,n.kt)("inlineCode",{parentName:"li"},"logo.svg")," in the newly created folder."),(0,n.kt)("li",{parentName:"ul"},"Add your logo sized 32x32 as a png titled ",(0,n.kt)("inlineCode",{parentName:"li"},"logo-32.png"),"."),(0,n.kt)("li",{parentName:"ul"},"Add your logo sized 128x128 as a png titled ",(0,n.kt)("inlineCode",{parentName:"li"},"logo-128.png"),"."),(0,n.kt)("li",{parentName:"ul"},"If you have a banner feel free to add that as a png or svg as well, name it ",(0,n.kt)("inlineCode",{parentName:"li"},"banner"),".")),(0,n.kt)("h2",{id:"full-example"},"Full Example"),(0,n.kt)("h3",{id:"wrapper"},"Wrapper"),(0,n.kt)("p",null,"Below there's an example from one of our partners who have multiple addresses for multiple vaults. It's done using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Wrapper")," class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"Partner(\n    name='partner-wrapper',\n    treasury='0x8392F6669292fA56123F71949B52d883aE57e225',\n    wrappers=[\n        Wrapper(\n            name='dai 0.3.0',\n            vault='0x19D3364A399d251E894aC732651be8B0E4e85001',\n            wrapper='0x014dE182c147f8663589d77eAdB109Bf86958f13',\n        ),\n        Wrapper(\n            name='dai 0.3.0 t',\n            vault='0x19D3364A399d251E894aC732651be8B0E4e85001',\n            wrapper='0x491EAFC47D019B44e13Ef7cC649bbA51E15C61d7',\n        ),\n        Wrapper(\n            name='dai 0.4.3',\n            vault='0xdA816459F1AB5631232FE5e97a05BBBb94970c95',\n            wrapper='0xb039eA6153c827e59b620bDCd974F7bbFe68214A',\n        ),\n        Wrapper(\n            name='dai 0.4.3 t',\n            vault='0xdA816459F1AB5631232FE5e97a05BBBb94970c95',\n            wrapper='0x6Fe02BE0EC79dCF582cBDB936D7037d2eB17F661',\n        ),\n        Wrapper(\n            name='weth 0.4.2',\n            vault='0xa258C4606Ca8206D8aA700cE2143D7db854D168c',\n            wrapper='0x546E6711032Ec744A7708D4b7b283A210a85B3BC',\n        ),\n        Wrapper(\n            name='weth 0.4.2 t',\n            vault='0xa258C4606Ca8206D8aA700cE2143D7db854D168c',\n            wrapper='0x6d75657771256C7a8CB4d475fDf5047B70160132',\n        ),\n    ],\n),\n")),(0,n.kt)("h3",{id:"wildcardwrapper"},"WildcardWrapper"),(0,n.kt)("p",null,"Below you will find a partner that uses WildcardWrapper because each address is going to hold multiple different yVault tokens."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"Partner(\n    name='partner-wildcardwrapper',\n    treasury='0x7301C46be73bB04847576b6Af107172bF5e8388e',\n    wrappers=[\n        WildcardWrapper(\n            name='bdi',\n            wrapper='0x0309c98B1bffA350bcb3F9fB9780970CA32a5060',\n        ),\n        WildcardWrapper(\n            name='bmi',\n            wrapper='0x0aC00355F80E289f53BF368C9Bdb70f5c114C44B',\n        ),\n    ],\n),\n")))}u.isMDXComponent=!0}}]);