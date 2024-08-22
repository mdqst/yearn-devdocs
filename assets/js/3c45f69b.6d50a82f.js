"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[117],{39745:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=s(74848),r=s(28453);const a={},i="Deploying a Vault and Strategy V2",l={id:"v2/DEPLOYMENT",title:"Deploying a Vault and Strategy V2",description:"Note: This private repo is encouraged to create multiple scripts for governance and dev multisig execution of complex transactions.",source:"@site/docs/developers/v2/DEPLOYMENT.md",sourceDirName:"v2",slug:"/v2/DEPLOYMENT",permalink:"/developers/v2/DEPLOYMENT",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1693865708e3,frontMatter:{},sidebar:"developers",previous:{title:"Getting Started with Vaults and Strategies",permalink:"/developers/v2/getting-started"},next:{title:"Yearn System Specification",permalink:"/developers/v2/SPECIFICATION"}},d={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Deploying a new Experimental Vault",id:"deploying-a-new-experimental-vault",level:2},{value:"Deploying a new Strategy",id:"deploying-a-new-strategy",level:2},{value:"Make the Vault and Strategy work together",id:"make-the-vault-and-strategy-work-together",level:2},{value:"Test harvesting manually",id:"test-harvesting-manually",level:2},{value:"Scaling up / Moving to Endorse",id:"scaling-up--moving-to-endorse",level:2},{value:"Endorsing a vault from a previous release",id:"endorsing-a-vault-from-a-previous-release",level:3},{value:"Publishing Your Strategy Description",id:"publishing-your-strategy-description",level:2},{value:"Setting up Keep3r",id:"setting-up-keep3r",level:2},{value:"References",id:"references",level:2},{value:"Limits per Stage",id:"limits-per-stage",level:3},{value:"Sharer contract",id:"sharer-contract",level:3},{value:"Health Checks",id:"health-checks",level:3},{value:"Note on Health Checks Backward Compatibility",id:"note-on-health-checks-backward-compatibility",level:2},{value:"Adding Health Checks to your strategy",id:"adding-health-checks-to-your-strategy",level:2},{value:"Health Check Operations",id:"health-check-operations",level:2},{value:"Customizing Health Checks",id:"customizing-health-checks",level:2},{value:"Ethereum Addresses",id:"ethereum-addresses",level:3},{value:"Fantom Addresses",id:"fantom-addresses",level:3},{value:"Arbitrum Addresses",id:"arbitrum-addresses",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"deploying-a-vault-and-strategy-v2",children:"Deploying a Vault and Strategy V2"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": This ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/chief-multisig-officer",children:"private repo"})," is encouraged to create multiple scripts for governance and dev multisig execution of complex transactions."]}),"\n",(0,n.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(t.p,{children:["Make sure you have the brownie environment set up before trying to deploy a vault. Check out the ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults/blob/master/README.md",children:"Readme MD in Yearn Vaults Repo"})," for instructions."]}),"\n",(0,n.jsx)(t.p,{children:"The below instructions show some python commands that assume you are using the brownie console or a brownie script setup."}),"\n",(0,n.jsx)(t.h2,{id:"deploying-a-new-experimental-vault",children:"Deploying a new Experimental Vault"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Clone the ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults/",children:"Yearn Vaults Repo"})," and run ",(0,n.jsx)(t.code,{children:"brownie run scripts/deploy.py --network <network-to-deploy-vault>"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Choose the brownie account for deploying your vault. This account needs to have funds to pay for the deployment transaction."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Confirm the script is using the latest version of registry ",(0,n.jsx)(t.code,{children:"v2.registry.ychad.eth"})," against the planned new release vault to be sure it's an updated version. (Can validate on Etherscan for latest address)"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Select the version of the vault to deploy or press enter to use the latest release."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Enter ",(0,n.jsx)(t.code,{children:"Y"})," when prompt to deploy Proxy Vault"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Enter the checksummed address of the ERC20 token the vault will use."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Enter the vault Parameters (Below are some suggested values):"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Set your address or an address you control as governance."}),"\n",(0,n.jsxs)(t.li,{children:["Set Treasury (",(0,n.jsx)(t.code,{children:"treasury.ychad.eth"}),") as the rewards address."]}),"\n",(0,n.jsxs)(t.li,{children:["Set Core Dev multisig (",(0,n.jsx)(t.code,{children:"dev.ychad.eth"}),") as guardian."]}),"\n",(0,n.jsxs)(t.li,{children:["Set Strategist multisig (",(0,n.jsx)(t.code,{children:"brain.ychad.eth"}),") as management."]}),"\n",(0,n.jsxs)(t.li,{children:["Set name and symbol for vault or use suggested as default (can be changed on-chain later, but please check out our ",(0,n.jsx)(t.a,{href:"https://docs.yearn.fi/developers/v2/naming-convention",children:"naming conventions"}),")."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Confirm the Parameters are correct and press ",(0,n.jsx)(t.code,{children:"y"})," and ENTER to deploy the vault."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Check new vault has ABI setup on Etherscan (Some vault versions from older releases may have verification issues with Vyper and proxy detection on Etherscan, consider using later releases >0.3.5 to ensure verification works)."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Set deposit limit according to the table ",(0,n.jsx)(t.a,{href:"#Limits-per-Stage",children:"below"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"vault.setDepositLimit(limit)\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"11",children:["\n",(0,n.jsx)(t.li,{children:"Set management fee to 0:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"vault.setManagementFee(0)\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"12",children:["\n",(0,n.jsxs)(t.li,{children:["(Optional) Set governance to ychad.eth (",(0,n.jsx)(t.code,{children:"0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52"}),") if vault is planned to be endorsed soon:"]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Note you can still make changes to the vault after setting governance up until governance is accepted"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"vault.setGovernance(ychad.eth)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"deploying-a-new-strategy",children:"Deploying a new Strategy"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Request access to a Core Dev strategist and create a new issue using the ",(0,n.jsx)(t.code,{children:"Strategy Review"})," template in the strategies ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/yearn-strategies/issues",children:"private repo"})," ",(0,n.jsx)(t.strong,{children:"Complete all the fields"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["If the strategy targets a new protocol/new chain not currently approved by yearn (used in production) it may also require due diligence and path to production plan documents for the strategy to be considered for endorsement.\nExample(s) ",(0,n.jsx)(t.a,{href:"https://hackmd.io/0w1RZh7DSc27A9EyzlHbJQ?view",children:"SNX"})]}),"\n",(0,n.jsxs)(t.li,{children:["Coordinate with Core Dev strategist for reviewing strategy, then follow the status on the ",(0,n.jsx)(t.a,{href:"https://github.com/orgs/yearn/projects/5",children:"private board"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Have it peer-reviewed by at least ",(0,n.jsx)(t.strong,{children:"two"})," strategists."]}),"\n",(0,n.jsxs)(t.li,{children:["Check if ",(0,n.jsx)(t.code,{children:"want"})," token has a deployed vault already (>=v0.3.0) and coordinate to use that first if possible."]}),"\n",(0,n.jsxs)(t.li,{children:["Coordinate with a core developer to set a proper deposit limit and other settings for the new vault. See the table below: ",(0,n.jsx)(t.a,{href:"#limits-per-stage",children:"Limits per Stage"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Deploy strategy and upload code to Etherscan for verification."}),"\n",(0,n.jsxs)(t.li,{children:["Tag GitHub review issue with deployed version and attach mainnet address(es) to the strategy item in ",(0,n.jsx)(t.a,{href:"https://github.com/orgs/yearn/projects/5",children:"private board"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"make-the-vault-and-strategy-work-together",children:"Make the Vault and Strategy work together"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Add strategy to vault (for vault code v0.3.3+):"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"strategy = ''                     # Your strategy address\ndebt_ratio = 9800                 # 98%\nminDebtPerHarvest = 0             # Lower limit on debt add\nmaxDebtPerHarvest = 2 ** 256 - 1  # Upper limit on debt add\nperformance_fee = 1000            # Strategist perf fee: 10%\n\nvault.addStrategy(\n  strategy,\n  debt_ratio,\n  minDebtPerHarvest,\n  maxDebtPerHarvest,\n  performance_fee\n)\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"debt_ratio"})," should be ",(0,n.jsx)(t.code,{children:"9800"})," if first strategy on vault."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"rate_limit"})," is ",(0,n.jsx)(t.code,{children:"0"})," unless there is reason for it to be different."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Set keeper:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"strategy.setKeeper(keep3r_manager)\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"keep3r_manager"})," = ",(0,n.jsx)(t.code,{children:"0x736D7e3c5a6CB2CE3B764300140ABF476F6CFCCF"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Set health check:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"strategy.setHealthCheck(health_check)\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"health_check"})," = ",(0,n.jsx)(t.code,{children:"0xddcea799ff1699e98edf118e0629a974df7df012"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOTE"}),": see section on ",(0,n.jsx)(t.a,{href:"#health-checks",children:" health check "})," for more details."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Set rewards:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"strategy.setRewards(address)\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Read ",(0,n.jsx)(t.a,{href:"#sharer-contract",children:"below"})," if you want to use the sharer contract."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'Run tests against "live" vault and strategy in mainnet-fork:'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Harvest."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Profitable harvest."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Revoke strategy and check that funds return to the vault."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Increase/decrease debt + harvest, and check that the strategy is working well."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Migration."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Check that tokens in the strategy cannot be sweeped by dust collection."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),": Hegic strat ",(0,n.jsx)(t.a,{href:"https://github.com/Macarse/yhegic/tree/master/tests/development",children:"repo"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"test-harvesting-manually",children:"Test harvesting manually"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"You can coordinate with the strategists if you need a UI to test."}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Deposit some ",(0,n.jsx)(t.code,{children:"want"})," tokens into the vault."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do first ",(0,n.jsx)(t.code,{children:"harvest"})," and make sure it worked correctly."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"strategy.harvest()\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Monitor ",(0,n.jsx)(t.code,{children:"harvest"})," and ",(0,n.jsx)(t.code,{children:"tend"})," triggers for first few days. Call ",(0,n.jsx)(t.code,{children:"harvest"}),"/",(0,n.jsx)(t.code,{children:"tend"})," manually."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"If this is a new vault deployment, test deposit, withdraw, and transfer to ensure functionality is as expected."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"scaling-up--moving-to-endorse",children:"Scaling up / Moving to Endorse"}),"\n",(0,n.jsx)(t.p,{children:"In addition to the two strategist reviews, a Core Developer has to review the strategy before going into production."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create an ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/yearn-finance-v3/issues",children:"issue"})," in yearn's web repo to ensure that the new vault won't create any problems with the API and that all necessary token/vault metadata is ready. Additionally, if this vault needs to go in the \"labs\" category, it must be manually added to the website."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Increase deposit limit according to the table ",(0,n.jsx)(t.a,{href:"#Limits-per-Stage",children:"below"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Set management fee to production level:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"vault.setManagementFee(200)\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Set parameters for vault correctly before endorsement:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Set Governance to (",(0,n.jsx)(t.code,{children:"ychad.eth"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Set Treasury (",(0,n.jsx)(t.code,{children:"treasury.ychad.eth"}),") as the rewards address."]}),"\n",(0,n.jsxs)(t.li,{children:["Set Core Dev multisig (",(0,n.jsx)(t.code,{children:"dev.ychad.eth"}),") as guardian."]}),"\n",(0,n.jsxs)(t.li,{children:["Set Strategist multisig (",(0,n.jsx)(t.code,{children:"brain.ychad.eth"}),") as management."]}),"\n",(0,n.jsx)(t.li,{children:"Set description and symbol for vault or use suggested as default (can be changed on-chain later)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Yearn's governance now must accept this vault's governance and endorse it:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"strategy.acceptGovernance()\nregistry.endorseVault(vault)\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsx)(t.li,{children:"If using a curve voter stategy, make sure to approve the new strategy on yearn's voterProxy:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"proxy.approveStrategy(gauge, strategy)\n"})}),"\n",(0,n.jsx)(t.h3,{id:"endorsing-a-vault-from-a-previous-release",children:"Endorsing a vault from a previous release"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Check for the latest release number in the registry contract"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Check the apiVersion of the vault you want to endorse to identify the target release"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Calculate the releaseDelta from your target release. (see registry endorseVault param details)\nE.g: latestRelease = 0.3.3 and numReleases = 5. New vault apiVersion is 0.3.2\n",(0,n.jsx)(t.code,{children:"releaseDelta = numReleases - 1 - releaseTarget"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Confirm using ",(0,n.jsx)(t.code,{children:"registry.releases(uint256)"})," that your ",(0,n.jsx)(t.code,{children:"targetRelease"})," has the same apiVersion as your vault."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"releaseTarget = 3 # e.g vault api version 0.3.2\nreleaseDelta = registry.numReleases() - 1 - releaseTarget # (5-1-3) = 1\nstrategy.acceptGovernance() # from ychad.eth\nregistry.endorseVault(vault, releaseDelta) # from ychad.eth.\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"publishing-your-strategy-description",children:"Publishing Your Strategy Description"}),"\n",(0,n.jsx)(t.p,{children:"The following steps are required for all strategies. These descriptions are pulled into the v3 website and used to generate strategy diagrams."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Create a pull request ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/yearn-meta/tree/master/data/strategies",children:"at this link"})," to add a new ",(0,n.jsx)(t.code,{children:".json"})," file with your strategy description and details."]}),"\n",(0,n.jsx)(t.li,{children:"Using other strategy files as a reference, create a 1-2 sentence description for your strategy."}),"\n",(0,n.jsx)(t.li,{children:"The author field is optional."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"setting-up-keep3r",children:"Setting up Keep3r"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Adjust trigger variables until they are correct:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"strategy.setProfitFactor()\nstrategy.setDebtThreshold()\nstrategy.setMaxReportDelay()\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Set strategy's Keep3r role to v2-keeper-contract:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"strategy.setKeeper(0x736D7e3c5a6CB2CE3B764300140ABF476F6CFCCF)\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create an add-strategy PR in Keep3r ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/yearn-keeper",children:"repo"})," (TBD)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsx)(t.h3,{id:"limits-per-stage",children:"Limits per Stage"}),"\n",(0,n.jsx)(t.p,{children:"These are the standard deposit limits per stage, and they can be adjusted on a case-by-case basis:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Stage"}),(0,n.jsx)(t.th,{children:"Limit"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Experimental"}),(0,n.jsx)(t.td,{children:"$500K"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Production"}),(0,n.jsx)(t.td,{children:"$10M"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"sharer-contract",children:"Sharer contract"}),"\n",(0,n.jsxs)(t.p,{children:['"Sharer" is a contract for distributing/splitting strategist rewards. For boarding school graduates suggested split is 34% to strategist multisig and 66% to strategist \u2013 ',(0,n.jsx)(t.a,{href:"https://github.com/Grandthrax/Sharer",children:"Sharer Contract"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Set up rewards for your strategy by calling ",(0,n.jsx)(t.code,{children:"sharer.addContributors"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Include devs if you forked someone else's strategy."}),"\n",(0,n.jsx)(t.li,{children:"Be sure to reward people who helped you."}),"\n",(0,n.jsxs)(t.li,{children:["You can find the sharer here: ",(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0x2c641e14afecb16b4aa6601a40ee60c3cc792f7d",children:"0x2c641e14afecb16b4aa6601a40ee60c3cc792f7d"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"health-checks",children:"Health Checks"}),"\n",(0,n.jsx)(t.p,{children:"Since the v0.4.3 release, we have introduced the concept of Health Checks contracts to vaults and strategies. These are helper contracts that can validate the end state of a harvest, or critical transaction, to ensure the accounting stays within established safe parameters."}),"\n",(0,n.jsx)(t.p,{children:'You can think of these contracts as on-chain unit tests, or "self asserts", ensuring that the end state of a critical transaction matches an expected condition. The design allows health checks to be configured per individual vault or strategy. If the "assert" doesn\'t match expectations, the entire transaction will revert and require manual intervention by strategists or core devs.'}),"\n",(0,n.jsx)(t.p,{children:"Vaults from release v0.4.3 and onward, support attaching an on-chain health check contract to be called after every harvest report."}),"\n",(0,n.jsx)(t.h2,{id:"note-on-health-checks-backward-compatibility",children:"Note on Health Checks Backward Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["The health checks are designed to be backward compatible. To target already deployed vaults, we released a patch for each tagged release of ",(0,n.jsx)(t.code,{children:"BaseStrategy"}),". e.g:"]}),"\n",(0,n.jsxs)(t.p,{children:["v0.3.5 -> ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults/tree/v0.3.5-1",children:"v0.3.5-1"})," (compatible version)"]}),"\n",(0,n.jsx)(t.h2,{id:"adding-health-checks-to-your-strategy",children:"Adding Health Checks to your strategy"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Before deploying a strategy with ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/brownie-strategy-mix",children:"brownie-strategy-mix"})," make sure your ",(0,n.jsx)(t.code,{children:"brownie-config.yml"})," points to the correct patched vault version, to get a Health Check enabled ",(0,n.jsx)(t.code,{children:"BaseStrategy"})," imported to your strategy."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["To interact with the health check contract, no change should be necessary on your extended ",(0,n.jsx)(t.code,{children:"Strategy"})," logic. ",(0,n.jsx)(t.strong,{children:"IMPORTANT"}),": Check your contract size to see if refactoring is needed for compilation."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Update your unit tests to set to the common Health Check contract ",(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0xddcea799ff1699e98edf118e0629a974df7df012",children:"health.ychad.eth"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"commonHealthCheck = Contract(web3.ens.resolve(\u201chealth.ychad.eth\u201d))\nstrategy.setHealthCheck(commonHealthCheck)\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsx)(t.li,{children:"Test your normal harvest operations using mainnet-fork and unit tests to validate that the integration is working correctly."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"health-check-operations",children:"Health Check Operations"}),"\n",(0,n.jsx)(t.p,{children:"A global setting check against deviations in reported profit and losses within a safe interval. Any report/harvest that falls outside this global safe interval will report."}),"\n",(0,n.jsx)(t.p,{children:"If a harvest/report revert transaction is detected on-chain, manual intervention is required to debug and accept the transaction into the vaults accounting. This should be done after proper validation by the strategist's multi-sig and Core Devs group."}),"\n",(0,n.jsx)(t.p,{children:"Disabling health checks is meant to be a one-time special event using the following steps:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# disables next health check on harvest\nstrategy.setDoHealthCheck(false, { account: brain.ychad.eth })\n\n# do harvest with profit/loss deviation\nstrategy.harvest()\n"})}),"\n",(0,n.jsx)(t.p,{children:"After this manual harvest, the health check will be automatically enabled back for further harvests."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOT RECOMMENDED"}),": Health checks can be disabled permanently by setting the health check contract to address ",(0,n.jsx)(t.code,{children:"0x0"})," in the Strategy Contract. This should be done only in extreme circumstances and if you know what you are doing."]}),"\n",(0,n.jsx)(t.h2,{id:"customizing-health-checks",children:"Customizing Health Checks"}),"\n",(0,n.jsxs)(t.p,{children:["The Common Health Check Contract ",(0,n.jsx)(t.code,{children:"health.ychad.eth"})," uses a global default setting for profit and loss."]}),"\n",(0,n.jsx)(t.p,{children:"It also supports setting specific profit/loss limit checks per strategy via the following operation:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"strategy = ''; # strategy address\nprofitLimit = 100 # in bps\nlossLimit = 100 # in bps\nhealthcheck.setStrategyLimits(strategy, profitLimit, lossLimit)\n"})}),"\n",(0,n.jsx)(t.p,{children:"Finally, if needed, a custom Health Check contract can be deployed and attached to the standard Health Check contract, which works as a registry. You can attach a custom Health Check to a strategy using the following operation:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"strategy = ''; # strategy address\ncustomHealthCheck = '' # custom health check address\n\nhealthcheck.setCheck(strategy, customHealthCheck)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Custom Health Check ",(0,n.jsx)(t.strong,{children:"must"})," follow the interface for ",(0,n.jsx)(t.a,{href:"https://github.com/yearn/yearn-vaults/blob/3bea2d8c070efeb05bc02d7d0136120bc516af4b/contracts/CommonHealthCheck.sol#L5",children:"custom health checks"})]}),"\n",(0,n.jsx)(t.h3,{id:"ethereum-addresses",children:"Ethereum Addresses"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Identity"}),(0,n.jsx)(t.th,{children:"ENS"}),(0,n.jsx)(t.th,{children:"Address"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"V2 Registry"}),(0,n.jsx)(t.td,{children:"v2.registry.ychad.eth"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0x50c1a2eA0a861A967D9d0FFE2AE4012c2E053804",children:"0x50c1a2eA0a861A967D9d0FFE2AE4012c2E053804"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Yearn multisig (daddy)"}),(0,n.jsx)(t.td,{children:"ychad.eth"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52",children:"0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Strategist multisig"}),(0,n.jsx)(t.td,{children:"brain.ychad.eth"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0x16388463d60FFE0661Cf7F1f31a7D658aC790ff7",children:"0x16388463d60FFE0661Cf7F1f31a7D658aC790ff7"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Core Dev multisig"}),(0,n.jsx)(t.td,{children:"dev.ychad.eth"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0x846e211e8ba920B353FB717631C015cf04061Cc9",children:"0x846e211e8ba920B353FB717631C015cf04061Cc9"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Treasury"}),(0,n.jsx)(t.td,{children:"treasury.ychad.eth"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0x93A62dA5a14C80f265DAbC077fCEE437B1a0Efde",children:"0x93A62dA5a14C80f265DAbC077fCEE437B1a0Efde"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Health Check"}),(0,n.jsx)(t.td,{children:"health.ychad.eth"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0xDDCea799fF1699e98EDF118e0629A974Df7DF012",children:"0xDDCea799fF1699e98EDF118e0629A974Df7DF012"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"fantom-addresses",children:"Fantom Addresses"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Identity"}),(0,n.jsx)(t.th,{children:"Address"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Registry"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://ftmscan.com/address/0x727fe1759430df13655ddb0731dE0D0FDE929b04",children:"0x727fe1759430df13655ddb0731dE0D0FDE929b04"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Strategist multisig"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://ftmscan.com/address/0x72a34AbafAB09b15E7191822A679f28E067C4a16",children:"0x72a34AbafAB09b15E7191822A679f28E067C4a16"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Governance multisig"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://ftmscan.com/address/0xC0E2830724C946a6748dDFE09753613cd38f6767",children:"0xC0E2830724C946a6748dDFE09753613cd38f6767"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Treasury"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://ftmscan.com/address/0x89716ad7edc3be3b35695789c475f3e7a3deb12a",children:"0x89716ad7edc3be3b35695789c475f3e7a3deb12a"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Health Check"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://ftmscan.com/address/0xf13Cd6887C62B5beC145e30c38c4938c5E627fe0",children:"0xf13Cd6887C62B5beC145e30c38c4938c5E627fe0"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"arbitrum-addresses",children:"Arbitrum Addresses"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Identity"}),(0,n.jsx)(t.th,{children:"Address"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Registry"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://arbiscan.io/address/0x3199437193625DCcD6F9C9e98BDf93582200Eb1f",children:"0x3199437193625DCcD6F9C9e98BDf93582200Eb1f"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Strategist multisig"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://arbiscan.io/address/0x6346282DB8323A54E840c6C772B4399C9c655C0d",children:"0x6346282DB8323A54E840c6C772B4399C9c655C0d"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Governance multisig"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://arbiscan.io/address/0xb6bc033D34733329971B938fEf32faD7e98E56aD",children:"0xb6bc033D34733329971B938fEf32faD7e98E56aD"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Treasury"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://arbiscan.io/address/0x1DEb47dCC9a35AD454Bf7f0fCDb03c09792C08c1",children:"0x1DEb47dCC9a35AD454Bf7f0fCDb03c09792C08c1"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Health Check"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://arbiscan.io/address/0x32059ccE723b4DD15dD5cb2a5187f814e6c470bC",children:"0x32059ccE723b4DD15dD5cb2a5187f814e6c470bC"})})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);