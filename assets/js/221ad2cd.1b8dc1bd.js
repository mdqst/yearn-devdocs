"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[5954],{72151:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var a=n(74848),s=n(28453);const t={title:"Submit a Pull Request"},l=void 0,d={id:"submit_pr",title:"Submit a Pull Request",description:"The final step to be added to the partnership program is to submit a pull request to be added to the list of partners. You should submit a request to add yourself to partners.py",source:"@site/docs/partners/submit_pr.md",sourceDirName:".",slug:"/submit_pr",permalink:"/partners/submit_pr",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1678297748e3,frontMatter:{title:"Submit a Pull Request"},sidebar:"mySidebar",previous:{title:"Yearn's Partner Tracker",permalink:"/partners/partner-tracker"},next:{title:"yvToken as Collateral",permalink:"/partners/yvtokens-as-collateral"}},i={},o=[{value:"Partner",id:"partner",level:2},{value:"Wrapper Class",id:"wrapper-class",level:2},{value:"WildcardWrapper Class",id:"wildcardwrapper-class",level:2},{value:"Assets",id:"assets",level:2},{value:"Full Example",id:"full-example",level:2},{value:"Wrapper",id:"wrapper",level:3},{value:"WildcardWrapper",id:"wildcardwrapper",level:3}];function p(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["The final step to be added to the partnership program is to submit a pull request to be added to the list of partners. You should submit a request to add yourself to ",(0,a.jsx)(r.a,{href:"https://github.com/yearn/yearn-exporter/blob/master/yearn/partners/partners.py",children:"partners.py"})]}),"\n",(0,a.jsx)(r.p,{children:"First, you have to fork the repository into your account, make the modifications to update the file, and then submit the pull request to the main repo."}),"\n",(0,a.jsx)(r.p,{children:"Below you will find the specification for the file and some examples."}),"\n",(0,a.jsx)(r.h2,{id:"partner",children:"Partner"}),"\n",(0,a.jsxs)(r.p,{children:["The file consists of an array of ",(0,a.jsx)(r.code,{children:"Partner"})," objects. Each ",(0,a.jsx)(r.code,{children:"Partner"})," has the following attributes:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"name"}),": Descriptive name for the partner."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"start_date"}),": Date of the PR that fee-sharing will start. In the format date(yyyy, mm, dd)."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"treasury"}),": Address where you want to receive the shared fees."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"wrappers"}),": Array of objects that contain the addresses that will hold the vault tokens. It's an array of ",(0,a.jsx)(r.code,{children:"Wrapper"})," or ",(0,a.jsx)(r.code,{children:"WildcardWrapper"})," objects"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"wrapper-class",children:"Wrapper Class"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"Wrapper"})," should be used when only one yVault token is going to be held in that address."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"Wrapper"})," has the following attributes:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"name"}),": Descriptive name for this wrapper. It's recommended to use the vault name as part of it."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"vault"}),": Address of the vault whose tokens are going to be held here."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"wrapper"}),": Address that is going to be holding the tokens."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"wildcardwrapper-class",children:"WildcardWrapper Class"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"WilcardWrapper"})," should be used when one address is going to hold more than one yVault token."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"WildcardWrapper"})," has the following attributes:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"name"}),": Descriptive name for this wrapper."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"wrapper"}),": Address that is going to be holding the tokens."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"assets",children:"Assets"}),"\n",(0,a.jsx)(r.p,{children:"Add your protocol's logo via a pull request so they can be referenced easily."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Make a folder in the protocols section of our ",(0,a.jsx)(r.a,{href:"https://github.com/yearn/yearn-assets/tree/master/icons/protocols",children:"yearn-assets"})," repository using the name you entered in the ",(0,a.jsx)(r.code,{children:"name"})," field above."]}),"\n",(0,a.jsxs)(r.li,{children:["Add your logo as an svg titled ",(0,a.jsx)(r.code,{children:"logo.svg"})," in the newly created folder."]}),"\n",(0,a.jsxs)(r.li,{children:["Add your logo sized 32x32 as a png titled ",(0,a.jsx)(r.code,{children:"logo-32.png"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:["Add your logo sized 128x128 as a png titled ",(0,a.jsx)(r.code,{children:"logo-128.png"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:["If you have a banner feel free to add that as a png or svg as well, name it ",(0,a.jsx)(r.code,{children:"banner"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"full-example",children:"Full Example"}),"\n",(0,a.jsx)(r.h3,{id:"wrapper",children:"Wrapper"}),"\n",(0,a.jsxs)(r.p,{children:["Below there's an example from one of our partners who have multiple addresses for multiple vaults. It's done using the ",(0,a.jsx)(r.code,{children:"Wrapper"})," class."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"Partner(\n    name='partner-wrapper',\n    treasury='0x8392F6669292fA56123F71949B52d883aE57e225',\n    wrappers=[\n        Wrapper(\n            name='dai 0.3.0',\n            vault='0x19D3364A399d251E894aC732651be8B0E4e85001',\n            wrapper='0x014dE182c147f8663589d77eAdB109Bf86958f13',\n        ),\n        Wrapper(\n            name='dai 0.3.0 t',\n            vault='0x19D3364A399d251E894aC732651be8B0E4e85001',\n            wrapper='0x491EAFC47D019B44e13Ef7cC649bbA51E15C61d7',\n        ),\n        Wrapper(\n            name='dai 0.4.3',\n            vault='0xdA816459F1AB5631232FE5e97a05BBBb94970c95',\n            wrapper='0xb039eA6153c827e59b620bDCd974F7bbFe68214A',\n        ),\n        Wrapper(\n            name='dai 0.4.3 t',\n            vault='0xdA816459F1AB5631232FE5e97a05BBBb94970c95',\n            wrapper='0x6Fe02BE0EC79dCF582cBDB936D7037d2eB17F661',\n        ),\n        Wrapper(\n            name='weth 0.4.2',\n            vault='0xa258C4606Ca8206D8aA700cE2143D7db854D168c',\n            wrapper='0x546E6711032Ec744A7708D4b7b283A210a85B3BC',\n        ),\n        Wrapper(\n            name='weth 0.4.2 t',\n            vault='0xa258C4606Ca8206D8aA700cE2143D7db854D168c',\n            wrapper='0x6d75657771256C7a8CB4d475fDf5047B70160132',\n        ),\n    ],\n),\n"})}),"\n",(0,a.jsx)(r.h3,{id:"wildcardwrapper",children:"WildcardWrapper"}),"\n",(0,a.jsx)(r.p,{children:"Below you will find a partner that uses WildcardWrapper because each address is going to hold multiple different yVault tokens."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"Partner(\n    name='partner-wildcardwrapper',\n    treasury='0x7301C46be73bB04847576b6Af107172bF5e8388e',\n    wrappers=[\n        WildcardWrapper(\n            name='bdi',\n            wrapper='0x0309c98B1bffA350bcb3F9fB9780970CA32a5060',\n        ),\n        WildcardWrapper(\n            name='bmi',\n            wrapper='0x0aC00355F80E289f53BF368C9Bdb70f5c114C44B',\n        ),\n    ],\n),\n"})})]})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>d});var a=n(96540);const s={},t=a.createContext(s);function l(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);