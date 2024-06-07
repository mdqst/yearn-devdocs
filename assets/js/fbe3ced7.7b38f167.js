"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[6524],{7888:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=s(4848),i=s(8453);const r={},l=void 0,c={id:"smart-contracts/test/TestGuestList",title:"TestGuestList",description:"A basic guest list contract for testing.",source:"@site/versioned_docs/version-0.3.4/smart-contracts/test/TestGuestList.md",sourceDirName:"smart-contracts/test",slug:"/smart-contracts/test/TestGuestList",permalink:"/vaults/0.3.4/smart-contracts/test/TestGuestList",draft:!1,unlisted:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.4/smart-contracts/test/TestGuestList.md",tags:[],version:"0.3.4",frontMatter:{},sidebar:"mySidebar",previous:{title:"AffiliateToken",permalink:"/vaults/0.3.4/smart-contracts/test/AffiliateToken"},next:{title:"TestStrategy",permalink:"/vaults/0.3.4/smart-contracts/test/TestStrategy"}},d={},a=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"setGuests",id:"setguests",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"authorized",id:"authorized",level:3},{value:"Parameters:",id:"parameters-1",level:4}];function o(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"A basic guest list contract for testing."}),"\n",(0,n.jsxs)(e.p,{children:["For a Vyper implementation of this contract containing additional\nfunctionality, see ",(0,n.jsx)(e.a,{href:"https://github.com/banteg/guest-list/blob/master/contracts/GuestList.vy",children:"https://github.com/banteg/guest-list/blob/master/contracts/GuestList.vy"})]}),"\n",(0,n.jsx)(e.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsx)(e.h3,{id:"constructor",children:"constructor"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-solidity",children:"  function constructor(\n  ) public\n"})}),"\n",(0,n.jsxs)(e.p,{children:["Create the test guest list, setting the message sender as\n",(0,n.jsx)(e.code,{children:"bouncer"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["Note that since this is just for testing, you're unable to change\n",(0,n.jsx)(e.code,{children:"bouncer"}),"."]}),"\n",(0,n.jsx)(e.h3,{id:"setguests",children:"setGuests"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-solidity",children:"  function setGuests(\n    address[] _guests,\n    bool[] _invited\n  ) external\n"})}),"\n",(0,n.jsx)(e.p,{children:"Invite guests or kick them from the party."}),"\n",(0,n.jsx)(e.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"_guests"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"address[]"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"The guests to add or update."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"_invited"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"bool[]"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"A flag for each guest at the matching index, inviting or"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"uninviting the guest."}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"authorized",children:"authorized"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-solidity",children:"  function authorized(\n    address _guest,\n    uint256 _amount\n  ) external returns (bool)\n"})}),"\n",(0,n.jsx)(e.p,{children:"Check if a guest with a bag of a certain size is allowed into\nthe party."}),"\n",(0,n.jsxs)(e.p,{children:["Note that ",(0,n.jsx)(e.code,{children:"_amount"})," isn't checked to keep test setup simple, since\nfrom the vault tests' perspective this is a pass/fail call anyway."]}),"\n",(0,n.jsx)(e.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"_guest"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"address"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"The guest's address to check."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"_amount"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"uint256"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Not used. The amount of tokens the guest is bringing."})]})]})]})]})}function h(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(o,{...t})}):o(t)}},8453:(t,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var n=s(6540);const i={},r=n.createContext(i);function l(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:l(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);