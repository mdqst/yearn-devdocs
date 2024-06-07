"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[8758],{4868:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=s(4848),t=s(8453);const i={},a="Deploying a Vault and Strategy V2",l={id:"process-and-procedures/deployment",title:"Deploying a Vault and Strategy V2",description:"Note: The Chief Multisig Officer repo is encouraged to create multiple scripts for governance and dev multisig execution of complex transactions.",source:"@site/versioned_docs/version-0.4.2/process-and-procedures/deployment.md",sourceDirName:"process-and-procedures",slug:"/process-and-procedures/deployment",permalink:"/vaults/0.4.2/process-and-procedures/deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.2/process-and-procedures/deployment.md",tags:[],version:"0.4.2",frontMatter:{},sidebar:"mySidebar",previous:{title:"Getting Started with Vaults",permalink:"/vaults/0.4.2/getting-started"},next:{title:"Operations procedures",permalink:"/vaults/0.4.2/process-and-procedures/operations"}},d={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Deploying a new Experimental Vault",id:"deploying-a-new-experimental-vault",level:2},{value:"Deploying a new Strategy",id:"deploying-a-new-strategy",level:2},{value:"Make the Vault and Strategy work together",id:"make-the-vault-and-strategy-work-together",level:2},{value:"Test harvesting manually",id:"test-harvesting-manually",level:2},{value:"Scaling up / Moving to Endorse",id:"scaling-up--moving-to-endorse",level:2},{value:"Endorsing a vault from a previous release",id:"endorsing-a-vault-from-a-previous-release",level:3},{value:"Setting up Keep3r",id:"setting-up-keep3r",level:2},{value:"References",id:"references",level:2},{value:"Limits per Stage",id:"limits-per-stage",level:3},{value:"Sharer contract",id:"sharer-contract",level:3},{value:"Addresses",id:"addresses",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploying-a-vault-and-strategy-v2",children:"Deploying a Vault and Strategy V2"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": The Chief Multisig Officer repo is encouraged to create multiple scripts for governance and dev multisig execution of complex transactions."]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.p,{children:["Make sure you have the brownie environment setup before trying to deploy a vault. Check out the ",(0,r.jsx)(n.a,{href:"https://github.com/yearn/yearn-vaults/blob/master/README.md",children:"Readme MD"})," for instructions."]}),"\n",(0,r.jsx)(n.p,{children:"The below instructions show some python commands that assume you are using the brownie console or a brownie script setup is in place."}),"\n",(0,r.jsx)(n.h2,{id:"deploying-a-new-experimental-vault",children:"Deploying a new Experimental Vault"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Clone this repo and run ",(0,r.jsx)(n.code,{children:"brownie run scripts/deploy.py --network <network-to-deploy-vault>"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Choose the brownie account for deploying your vault. This account needs to have balance to pay for the deploy transaction."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Confirm the script is using the latest version of registry ",(0,r.jsx)(n.code,{children:"v2.registry.ychad.eth"})," against the planned new release vault to be sure its an updated version. (Can validate on Etherscan for latest address)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Select the version of vault to deploy or press enter to use latest release."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter ",(0,r.jsx)(n.code,{children:"Y"})," when prompt to deploy Proxy Vault"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter the checksummed address of the ERC20 token the vault will use."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter the vault Parameters (Below are some suggested values):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Set your address or an address you control as governance."}),"\n",(0,r.jsxs)(n.li,{children:["Set Treasury (",(0,r.jsx)(n.code,{children:"treasury.ychad.eth"}),") as the rewards address."]}),"\n",(0,r.jsxs)(n.li,{children:["Set Core Dev multisig (",(0,r.jsx)(n.code,{children:"dev.ychad.eth"}),") as guardian."]}),"\n",(0,r.jsxs)(n.li,{children:["Set Strategist multisig (",(0,r.jsx)(n.code,{children:"brain.ychad.eth"}),") as management."]}),"\n",(0,r.jsx)(n.li,{children:"Set description and symbol for vault or use suggested as default (can be changed on chain later)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Confirm the Parameters are set correctly and press ",(0,r.jsx)(n.code,{children:"y"}),"and ENTER to deploy vault."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check new vault has ABI setup on Etherscan (Some vault versions from older releases may have verification issues with Vyper and proxy detection on Etherscan, consider using latest releases >0.3.5 to ensure verification works)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set up the vault with correct deposit limit:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"vault.setDepositLimit(limit)\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set management fee to 0:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"vault.setManagementFee(0)\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(Optional) Set governance to ychad.eth (",(0,r.jsx)(n.code,{children:"0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52"}),") if vault is planned to be endorsed soon:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Note you can still make changes to the vault after setting governance up until governance is accepted"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"vault.setGovernance(ychad.eth)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"deploying-a-new-strategy",children:"Deploying a new Strategy"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Discuss your strategy in Discord or Telegram to gain access to the yearn/yearn-strategies repository."}),"\n",(0,r.jsxs)(n.li,{children:["Create a new issue in the strategies' ",(0,r.jsx)(n.a,{href:"https://github.com/yearn/yearn-strategies/issues",children:"repo"})," using the template ",(0,r.jsx)(n.code,{children:"Strategy Review"}),". ",(0,r.jsx)(n.strong,{children:"Complete all the fields"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If the strategy is targeting a new protocol/new chain, not currently approved by yearn (used in production), a due diligence and path to production plan documents may also be required for the strategy to be considered for endorsing. ",(0,r.jsx)(n.a,{href:"https://hackmd.io/@ucVuhc2gShSGsOJwjaDvqg/HJ1ZplgTO",children:"PATH TO PROD"}),"\nExamples ",(0,r.jsx)(n.a,{href:"https://hackmd.io/0w1RZh7DSc27A9EyzlHbJQ?view",children:"SNX"}),", ",(0,r.jsx)(n.a,{href:"https://hackmd.io/@Ap_76vwNTg-vxJxbiaLMMQ/SkXEzic7O",children:"VESPER"})]}),"\n",(0,r.jsxs)(n.li,{children:["Coordinate with Core Dev strategist for getting a review on ",(0,r.jsx)(n.a,{href:"https://github.com/orgs/yearn/projects/5",children:"board"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Complete peer review by at least 2 strategists."}),"\n",(0,r.jsxs)(n.li,{children:["Check if ",(0,r.jsx)(n.code,{children:"want"})," token has a deployed vault already (>=v0.3.0) and coordinate to use that first if possible."]}),"\n",(0,r.jsxs)(n.li,{children:["Coordinate with core developer to set proper deposit limit and other settings for new vault. See the table below: ",(0,r.jsx)(n.a,{href:"#limits-per-stage",children:"Limits per Stage"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Deploy strategy and upload code to Etherscan for verification."}),"\n",(0,r.jsxs)(n.li,{children:["Tag GitHub review issue with deployed version and add mainnet address(es) to the ",(0,r.jsx)(n.a,{href:"https://github.com/orgs/yearn/projects/5",children:"board"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"make-the-vault-and-strategy-work-together",children:"Make the Vault and Strategy work together"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add strategy to vault (for vault code v0.3.3+):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"strategy = ''                     # Your strategy address\ndebt_ratio = 9800                 # 98%\nminDebtPerHarvest = 0             # Lower limit on debt add\nmaxDebtPerHarvest = 2 ** 256 - 1  # Upper limit on debt add\nperformance_fee = 1000            # Strategist perf fee: 10%\n\nvault.addStrategy(\n  strategy, \n  debt_ratio, \n  minDebtPerHarvest,\n  maxDebtPerHarvest,\n  performance_fee\n)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"debt_ratio"})," should be ",(0,r.jsx)(n.code,{children:"9800"})," if first strategy on vault."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"rate_limit"})," is ",(0,r.jsx)(n.code,{children:"0"})," unless there is reason for it to be different."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set keeper:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"strategy.setKeeper(keep3r_manager)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"keep3r_manager"})," = ",(0,r.jsx)(n.code,{children:"0x736D7e3c5a6CB2CE3B764300140ABF476F6CFCCF"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set rewards:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"strategy.setRewards(address)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Read ",(0,r.jsx)(n.a,{href:"#sharer-contract",children:"below"})," if you want to use the sharer contract."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Run tests against "live" vault and strategy in mainnet-fork:'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Harvest."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Profitable harvest."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Revoke strategy and check that funds return to the vault."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Increase/decrease debt + harvest, and check that the strategy is working well."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Migration."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check that tokens in the strategy cannot be sweeped by dust collection."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example"}),": Hegic strat ",(0,r.jsx)(n.a,{href:"https://github.com/Macarse/yhegic/tree/master/tests/development",children:"repo"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"test-harvesting-manually",children:"Test harvesting manually"}),"\n",(0,r.jsx)(n.p,{children:"If you need a UI to test, you can coordinate with the strategists."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Deposit some ",(0,r.jsx)(n.code,{children:"want"})," tokens into the vault."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do first ",(0,r.jsx)(n.code,{children:"harvest"})," and make sure it worked correctly."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"strategy.harvest()\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Monitor ",(0,r.jsx)(n.code,{children:"harvest"})," and ",(0,r.jsx)(n.code,{children:"tend"})," triggers for first few days. Call ",(0,r.jsx)(n.code,{children:"harvest"}),"/",(0,r.jsx)(n.code,{children:"tend"})," manually."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"scaling-up--moving-to-endorse",children:"Scaling up / Moving to Endorse"}),"\n",(0,r.jsx)(n.p,{children:"In addition to the 2 strategists, a Core Developer has to review the strategy before going into production."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Increase deposit limit according to the table ",(0,r.jsx)(n.a,{href:"#limits-per-stage",children:"below"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set management fee to production level:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"vault.setManagementFee(200)\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set parameters for vault correctly before endorse:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Set Governance to (",(0,r.jsx)(n.code,{children:"ychad.eth"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Set Treasury (",(0,r.jsx)(n.code,{children:"treasury.ychad.eth"}),") as the rewards address."]}),"\n",(0,r.jsxs)(n.li,{children:["Set Core Dev multisig (",(0,r.jsx)(n.code,{children:"dev.ychad.eth"}),") as guardian."]}),"\n",(0,r.jsxs)(n.li,{children:["Set Strategist multisig (",(0,r.jsx)(n.code,{children:"brain.ychad.eth"}),") as management."]}),"\n",(0,r.jsx)(n.li,{children:"Set description and symbol for vault or use suggested as default (can be changed on chain later)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Yearn governance now must accept governance and endorse the vault:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"strategy.acceptGovernance()\nregistry.endorseVault(vault)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"endorsing-a-vault-from-a-previous-release",children:"Endorsing a vault from a previous release"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check for latest release number in the registry contract"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the apiVersion of the vault you want to endorse to identify target release"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Calculate the releaseDelta from your target release. (see registry endorseVault param details)\nE.g: latestRelease = 0.3.3 and numReleases = 5. New vault apiVersion is 0.3.2\n",(0,r.jsx)(n.code,{children:"releaseDelta = numReleases - 1 - releaseTarget"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Confirm using ",(0,r.jsx)(n.code,{children:"registry.releases(uint256)"})," that your ",(0,r.jsx)(n.code,{children:"targetRelease"})," has the same apiVersion as your vault."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"releaseTarget = 3 # e.g vault api version 0.3.2\nreleaseDelta = registry.numReleases() - 1 - releaseTarget # (5-1-3) = 1\nstrategy.acceptGovernance() # from ychad.eth\nregistry.endorseVault(vault, releaseDelta) # from ychad.eth.\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-keep3r",children:"Setting up Keep3r"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Adjust trigger variables until they are correct:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"strategy.setProfitFactor()\nstrategy.setDebtThreshold()\nstrategy.setMaxReportDelay()\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set strategy's Keep3r role to v2-keeper-contract"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"strategy.setKeeper(0x736D7e3c5a6CB2CE3B764300140ABF476F6CFCCF)\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create an add-strategy PR in Keep3r ",(0,r.jsx)(n.a,{href:"https://github.com/yearn/yearn-keeper",children:"repo"})," (TBD)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsx)(n.h3,{id:"limits-per-stage",children:"Limits per Stage"}),"\n",(0,r.jsx)(n.p,{children:"These are the standard deposit limits per stage. They can be adjusted on a case by case basis."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Stage"}),(0,r.jsx)(n.th,{children:"Limit"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Experimental"}),(0,r.jsx)(n.td,{children:"$500K"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Production"}),(0,r.jsx)(n.td,{children:"$10M"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sharer-contract",children:"Sharer contract"}),"\n",(0,r.jsxs)(n.p,{children:['"Sharer" is a contract for distributing/splitting strategist rewards. For boarding school graduates suggested split is 34% to strategist multisig and 66% to strategist \u2013 ',(0,r.jsx)(n.a,{href:"https://github.com/Grandthrax/Sharer",children:"Sharer Contract"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Setup rewards for your strategy by calling ",(0,r.jsx)(n.code,{children:"sharer.addContributors"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Include devs if you forked someone else's strategy."}),"\n",(0,r.jsx)(n.li,{children:"Be sure to reward people who helped you."}),"\n",(0,r.jsxs)(n.li,{children:["You can find the sharer here: ",(0,r.jsx)(n.a,{href:"https://etherscan.io/address/0x2c641e14afecb16b4aa6601a40ee60c3cc792f7d",children:"0x2c641e14afecb16b4aa6601a40ee60c3cc792f7d"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"addresses",children:"Addresses"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Identity"}),(0,r.jsx)(n.th,{children:"ENS"}),(0,r.jsx)(n.th,{children:"Address"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"V2 Registry"}),(0,r.jsx)(n.td,{children:"v2.registry.ychad.eth"}),(0,r.jsx)(n.td,{children:"0x50c1a2eA0a861A967D9d0FFE2AE4012c2E053804"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Yearn multisig (daddy)"}),(0,r.jsx)(n.td,{children:"ychad.eth"}),(0,r.jsx)(n.td,{children:"0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Strategist multisig"}),(0,r.jsx)(n.td,{children:"brain.ychad.eth"}),(0,r.jsx)(n.td,{children:"0x16388463d60FFE0661Cf7F1f31a7D658aC790ff7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Core Dev multisig"}),(0,r.jsx)(n.td,{children:"dev.ychad.eth"}),(0,r.jsx)(n.td,{children:"0x846e211e8ba920B353FB717631C015cf04061Cc9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Treasury"}),(0,r.jsx)(n.td,{children:"treasury.ychad.eth"}),(0,r.jsx)(n.td,{children:"0xfeb4acf3df3cdea7399794d0869ef76a6efaff52"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(6540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);