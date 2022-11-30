"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[3617],{3905:(e,t,a)=>{a.d(t,{kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2635:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={},l="Writing Style Guide",o={unversionedId:"documentation/writing-style-guide",id:"documentation/writing-style-guide",title:"Writing Style Guide",description:"---",source:"@site/docs/contributing/documentation/writing-style-guide.md",sourceDirName:"documentation",slug:"/documentation/writing-style-guide",permalink:"/contributing/documentation/writing-style-guide",draft:!1,tags:[],version:"current",lastUpdatedAt:1643704953,formattedLastUpdatedAt:"2/1/2022",frontMatter:{},sidebar:"mySidebar",previous:{title:"How to contribute to docs",permalink:"/contributing/documentation/working-on-docs"}},s={},u=[{value:"Writing Intent and Tone",id:"writing-intent-and-tone",level:2},{value:"Writer Guidelines",id:"writer-guidelines",level:2},{value:"General Rules",id:"general-rules",level:3},{value:"Abbreviations",id:"abbreviations",level:3},{value:"Acronyms, Decades and Cases",id:"acronyms-decades-and-cases",level:3},{value:"Acronyms",id:"acronyms",level:4},{value:"Decades",id:"decades",level:4},{value:"Capitalize",id:"capitalize",level:4},{value:"Title Case",id:"title-case",level:4},{value:"Currencies",id:"currencies",level:3},{value:"Cryptocurrencies",id:"cryptocurrencies",level:4},{value:"Yearn Products",id:"yearn-products",level:4},{value:"Yearn",id:"yearn",level:4},{value:"Numbers",id:"numbers",level:3},{value:"Lists",id:"lists",level:3},{value:"Links",id:"links",level:3},{value:"Tables of Contents",id:"tables-of-contents",level:3},{value:"Markdown Guide",id:"markdown-guide",level:2},{value:"Best Practices and Resources",id:"best-practices-and-resources",level:2},{value:"Learn the Basics of Markdown",id:"learn-the-basics-of-markdown",level:3},{value:"Helpful Writing Tools",id:"helpful-writing-tools",level:3},{value:"Text Editors",id:"text-editors",level:4},{value:"Word Choice",id:"word-choice",level:4},{value:"Review Community Guides",id:"review-community-guides",level:3},{value:"Document-Specific Maintenance Guides",id:"document-specific-maintenance-guides",level:4},{value:"Contributor Tools",id:"contributor-tools",level:4},{value:"Express Interest",id:"express-interest",level:3},{value:"Collaborate",id:"collaborate",level:3},{value:"Track Progress",id:"track-progress",level:4},{value:"Final Drafts and Submissions",id:"final-drafts-and-submissions",level:4},{value:"Acknowledgements",id:"acknowledgements",level:3}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-style-guide"},"Writing Style Guide"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The Yearn Community Writing Style Guide summarizes the standards and best practices ",(0,r.kt)("strong",{parentName:"p"},"writers")," should follow when contributing to Yearn Documentation resources."),(0,r.kt)("h2",{id:"writing-intent-and-tone"},"Writing Intent and Tone"),(0,r.kt)("p",null,"Yearn Community materials should cater to readers who are unfamiliar with the Yearn ecosystem. Writers should also assume that their readers have tight schedules and short attention spans, as after all, farming is honest but hard work."),(0,r.kt)("p",null,"As such, Writers should focus on communicating concepts as clearly and succinctly as possible."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use simple language."),(0,r.kt)("li",{parentName:"ul"},"Use short, concise sentences."),(0,r.kt)("li",{parentName:"ul"},"Avoid unnecessary words."),(0,r.kt)("li",{parentName:"ul"},"Remain open and objective."),(0,r.kt)("li",{parentName:"ul"},"Provide examples when possible."),(0,r.kt)("li",{parentName:"ul"},"Provide examples to help explain concepts, but avoid overcomplicating them.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use math when necessary, but keep it simple and visually easy to understand."))),(0,r.kt)("li",{parentName:"ul"},"Link to basic terms if necessary.")),(0,r.kt)("h2",{id:"writer-guidelines"},"Writer Guidelines"),(0,r.kt)("h3",{id:"general-rules"},"General Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run all drafts through ",(0,r.kt)("a",{parentName:"li",href:"https://app.grammarly.com/"},"Grammarly")," regularly, and before final submissions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Grammarly will catch most spelling and grammatical errors."),(0,r.kt)("li",{parentName:"ul"},"Copy rendered text into Grammarly and address any mistakes it flags.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"HackMD does not identify spelling and grammatical errors."),(0,r.kt)("li",{parentName:"ul"},"Grammarly will miss errors if it\u2019s given raw Markdown text."),(0,r.kt)("li",{parentName:"ul"},"Be careful of copy and pasting code from Grammarly to VScode, Grammarly may mess with formatting.")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please Note")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When migrating to a new document (i.e., from Google Docs to HackMD):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Leave a note in the old file."),(0,r.kt)("li",{parentName:"ul"},"Provide a link to the latest version."))),(0,r.kt)("li",{parentName:"ul"},"Do not blindly accept Grammarly suggestions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Review edits to make sure they make sense.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Serial_comma"},"Oxford commas"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Singular_they"},"Pluralized, gender-neutral pronouns"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use \u201cthey/their\u201d instead of \u201che/she/his/hers.\u201d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples:")," \u201cWhen they\u2026\u201d or \u201cIf users choose to X, then their\u2026\u201d"))),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"%"),' symbol. Do not spell out "percent."',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Correct:")," 15%"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incorrect:")," 15 percent"))),(0,r.kt)("li",{parentName:"ul"},"Double quotes ",(0,r.kt)("inlineCode",{parentName:"li"},'" "')," for phrases, quotes, etc.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Do not use single ",(0,r.kt)("inlineCode",{parentName:"li"},"' '")," quotes.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Avoid:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Grammatical_person"},"First-person language."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples:")," I, we, our, etc."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Grammatical_person"},"Second-person language")," (unless it is appropriate for a guide or action page).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples:"),' "You then..." or "Now you should..."'))),(0,r.kt)("li",{parentName:"ul"},"Exclamation points."),(0,r.kt)("li",{parentName:"ul"},"Footnotes."),(0,r.kt)("li",{parentName:"ul"},"References to deprecated names for Yearn Components.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples:")," yyCRV or yUSD instead of yvCurve-Y (see: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yearn.finance/developers/v2/naming-convention"},"Yearn Naming Conventions"),")"))),(0,r.kt)("li",{parentName:"ul"},"Parentheses for stating additional information",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incorrect:")," Development Grants are larger sized ($5,000 to $50,000) grants aimed at individuals or teams building projects around vaults and the broader Yearn ecosystem."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Correct:")," Development Grants are generally larger sized grants, ranging from $5,000 to $50,000, aimed at individuals or teams building projects around vaults and the broader Yearn ecosystem.")))),(0,r.kt)("h3",{id:"abbreviations"},"Abbreviations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use parentheses to define abbreviated terms the first time they appear in a given document.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," A Yearn Improvement Proposal (YIP) is a proposal framework to support new initiatives and to expand the scope of existing ones.")))),(0,r.kt)("h3",{id:"acronyms-decades-and-cases"},"Acronyms, Decades and Cases"),(0,r.kt)("p",null,'Do not use apostrophes to pluralize acronyms or indicate decades. Add an "s" at the end.'),(0,r.kt)("h4",{id:"acronyms"},"Acronyms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To make an acronym plural:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Correct:")," YIPs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incorrect:")," YIP's")))),(0,r.kt)("h4",{id:"decades"},"Decades"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To indicate a decade:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Correct:")," 1990s"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incorrect:")," 1990's")))),(0,r.kt)("h4",{id:"capitalize"},"Capitalize"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Names and proper nouns."),(0,r.kt)("li",{parentName:"ul"},"Cities, countries, nationalities, and languages."),(0,r.kt)("li",{parentName:"ul"},"Terms with definitions provided by Yearn.")),(0,r.kt)("h4",{id:"title-case"},"Title Case"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"strong",href:"https://titlecaseconverter.com/"},"Title Case Converter")," will keep titles consistent.")),(0,r.kt)("li",{parentName:"ul"},"Follow the New York Times standard."),(0,r.kt)("li",{parentName:"ul"},"Capitalize the first and last words, all nouns, pronouns, verbs, adverbs, and adjectives."),(0,r.kt)("li",{parentName:"ul"},"Lowercase all articles, conjunctions, and prepositions.")),(0,r.kt)("h3",{id:"currencies"},"Currencies"),(0,r.kt)("p",null,"The examples below use dollars, but the same rules apply to all global currencies."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Use lowercase except when writing "US Dollar.\u201d'),(0,r.kt)("li",{parentName:"ul"},'Use figures and the "',"$",'" sign in all except casual references, or amounts without a figure.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Standard:"),' "The book costs ',"$",'4."'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Casual:"),' "Please give me a dollar."'))),(0,r.kt)("li",{parentName:"ul"},"For amounts under ","$","1 million, follow this format:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Correct:")," $4, $25, $500, $1,000, ","$","650,000."))),(0,r.kt)("li",{parentName:"ul"},"For amounts over ","$","1 million, use the word, not numerals.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Correct:"),' "He is worth ',"$",'4 million."'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incorrect:"),' "He is worth ',"$",'4,000,000."')))),(0,r.kt)("h4",{id:"cryptocurrencies"},"Cryptocurrencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When directly referring to the creation, destruction, or manipulation of a token (particularly as it relates to tooling) or when referencing the token as a currency, in an instructional or conversational setting, or as a conceptual product of the Foundation or its systems:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use the proper prefix if necessary and capitalized TLA version: ",(0,r.kt)("inlineCode",{parentName:"li"},"wETH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," \u201cwETH is a token that represents Ether 1:1 and conforms to the ERC20 token standard.\u201d"))),(0,r.kt)("li",{parentName:"ul"},"Similarly, when referring to exchange pairs:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use: ",(0,r.kt)("inlineCode",{parentName:"li"},"wETH/DAI"))))),(0,r.kt)("h4",{id:"yearn-products"},"Yearn Products"),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yearn.finance/developers/v2/naming-convention"},"Yearn Naming Conventions"),"."),(0,r.kt)("h4",{id:"yearn"},"Yearn"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'When referring to Yearn as a smart contract system, use "The Yearn Protocol."',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:"),' \u201cThe Yearn Protocol is a set of contracts for yield optimization."'))),(0,r.kt)("li",{parentName:"ul"},'When referring to Yearn as a body of YFI voters and the general stakeholder community, use "Yearn Community" or simply "Yearn."',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:"),' "Yearn passed a vote to decrease the yCRV vault performance fee."'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:"),' "The Yearn Community passed a vote to add an additional vault."'))),(0,r.kt)("li",{parentName:"ul"},'Use "Yearn" for casual references to Yearn and the Yearn Protocol as a whole.'),(0,r.kt)("li",{parentName:"ul"},"When referring to an audit assessment report follow the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/trailofbits/publications/blob/master/citation_guidelines.pdf"},"Audit Citation Guidelines"))),(0,r.kt)("h3",{id:"numbers"},"Numbers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spell out numbers below 10.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples:")," one, two, three, etc."))),(0,r.kt)("li",{parentName:"ul"},"Use numerals for numbers above 10, unless starting a sentence."),(0,r.kt)("li",{parentName:"ul"},"For numbers with million, billion, or trillion, use figures in all except casual cases.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Standard:"),' "The nation has 1 million citizens."'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Casual:"),' "I\'d like to make a billion dollars."')))),(0,r.kt)("h3",{id:"lists"},"Lists"),(0,r.kt)("p",null,"When bulleted and numbered lists contain complete sentences, capitalize the first word, and follow each with a period. If list items are phrases, no capitalization or punctuation is required."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Don't")," use a list with only 1 item."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Parallelism_%28grammar%29"},"parallel construction")," for each item in a list."),(0,r.kt)("li",{parentName:"ul"},"Start with the same ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Part_of_speech"},"part of speech")," for each item (in this case, a verb)."),(0,r.kt)("li",{parentName:"ul"},"Use the same verb ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Grammatical_tense#English"},"tense")," for each item."),(0,r.kt)("li",{parentName:"ul"},"Use the same ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Voice_%28grammar%29"},"voice")," for each item."),(0,r.kt)("li",{parentName:"ul"},"Use the same sentence type (statement, question, exclamation) for each item."),(0,r.kt)("li",{parentName:"ul"},"List items that include definitions should look like this:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team:")," Yearn Protocol Developers and Contributors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Community"),": General participants in Yearn forums and chat"))),(0,r.kt)("li",{parentName:"ul"},"Use dashes rather than asterisks for unordered lists.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Correct:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"-")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incorrect:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"*")))),(0,r.kt)("li",{parentName:"ul"},"Alphabetize lists of names unless there is a clear priority at work."),(0,r.kt)("li",{parentName:"ul"},"Do not use ordered (numbered) lists unless order matters."),(0,r.kt)("li",{parentName:"ul"},"Ordered list items should use the ",(0,r.kt)("inlineCode",{parentName:"li"},"1. ")," repeated.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Markdown will automatically generate numbers.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"1.  Item 1\n1.  Item 2\n1.  Item 3\n1.  Item 3a\n1.  Item 3b\n")),(0,r.kt)("h3",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/contribute/how-to-write-links"},"absolute links")," and standard web URLs when referencing external resources."),(0,r.kt)("li",{parentName:"ul"},"Create descriptive hyperlinks and avoid generic language.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Correct - Descriptive:")," Learn more at ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yearn.finance/"},"Yearn Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incorrect - Generic:")," Learn more ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yearn.finance/"},"here"),"."))),(0,r.kt)("li",{parentName:"ul"},"Include a ",(0,r.kt)("inlineCode",{parentName:"li"},"."),"outside the link for sentences that end with a link."),(0,r.kt)("li",{parentName:"ul"},"When creating links for parallel translated documents, make sure to update relative links to reflect the correct heading.")),(0,r.kt)("h3",{id:"tables-of-contents"},"Tables of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Include a table of contents for documents that span several pages and multiple sections."),(0,r.kt)("li",{parentName:"ul"},"Use the raw Markdown from the Table of Contents above as a template.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Be sure to include the line breaks ",(0,r.kt)("inlineCode",{parentName:"li"},"---")," as well to keep formatting consistent."))),(0,r.kt)("li",{parentName:"ul"},"The table of contents should list relevant sections for easy navigation.")),(0,r.kt)("h2",{id:"markdown-guide"},"Markdown Guide"),(0,r.kt)("p",null,"Yearn documents posted on GitHub are written in Markdown, a text-to-HTML conversion tool for web writers."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Include line breaks above and below headings."),(0,r.kt)("li",{parentName:"ul"},"Use top-level headers (",(0,r.kt)("inlineCode",{parentName:"li"},"#"),") only once per document.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Do not make multiple top-level headings."))),(0,r.kt)("li",{parentName:"ul"},"Avoid repeat headings.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"They will break auto-generated navigation."))),(0,r.kt)("li",{parentName:"ul"},"Avoid trailing spaces."),(0,r.kt)("li",{parentName:"ul"},"Do not use:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Em or en ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Wikipedia:Hyphens_and_dashes"},"dashes:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"\u2014")),(0,r.kt)("li",{parentName:"ul"},"Ampersands ",(0,r.kt)("inlineCode",{parentName:"li"},"&")," in titles and headers."),(0,r.kt)("li",{parentName:"ul"},"Pipes ",(0,r.kt)("inlineCode",{parentName:"li"},"|")," in titles and headers."),(0,r.kt)("li",{parentName:"ul"},"Curly quotes. Use the plaintext version.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Correct:")," ",(0,r.kt)("inlineCode",{parentName:"li"},'"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incorrect:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"\u201c")))),(0,r.kt)("li",{parentName:"ul"},"Escaping parentheses. Use normal parentheses.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Correct:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"(SOMETHING)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incorrect:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"\\(SOMETHING\\)")))))),(0,r.kt)("li",{parentName:"ul"},"Ensure there is a single hard return at the end of a .md file."),(0,r.kt)("li",{parentName:"ul"},"Use emojis to call attention to an important point, when necessary.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Practice discretion and use them sparingly."),(0,r.kt)("li",{parentName:"ul"},"This ",(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/rxaviers/7360908"},"cheat sheet")," lists emojis and their Markdown shortcuts.")))),(0,r.kt)("h2",{id:"best-practices-and-resources"},"Best Practices and Resources"),(0,r.kt)("p",null,"Writers and contributors familiar with Yearn and cryptocurrency basics will have a better sense of where to apply their skills best."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spend some time learning about Yearn's function, history, and any recent events before contributing."),(0,r.kt)("li",{parentName:"ul"},"In-depth knowledge is appreciated but not required.")),(0,r.kt)("h3",{id:"learn-the-basics-of-markdown"},"Learn the Basics of Markdown"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://daringfireball.net/projects/markdown/"},"Daring Fireball")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://guides.github.com/features/mastering-markdown/"},"Markdown Syntax Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://lab.github.com/githubtraining/communicating-using-markdown"},"Practice Communicating Using Markdown"))),(0,r.kt)("h3",{id:"helpful-writing-tools"},"Helpful Writing Tools"),(0,r.kt)("p",null,"Make use of any writing tools that help improve workflow and writing quality. See the list below for some recommendations."),(0,r.kt)("h4",{id:"text-editors"},"Text Editors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.grammarly.com/"},"Grammarly")," - Mistake-free writing editor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.hemingwayapp.com/"},"HemingwayApp")," - Make writing bold and clear")),(0,r.kt)("h4",{id:"word-choice"},"Word Choice"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.thesaurus.com/"},"Thesaurus")," - Synonyms"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.powerthesaurus.org/"},"Powerthesaurus")," - Synonyms and phrase suggestions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.wordhippo.com/"},"WordHippo")," - Synonyms and phrase suggestions")),(0,r.kt)("h3",{id:"review-community-guides"},"Review Community Guides"),(0,r.kt)("p",null,"Review the respective Contribute.md for each repository where pertinent before starting work on any Yearn project."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Yearn contributor guides outline writing standards and help simplify the writing process.")),(0,r.kt)("h4",{id:"document-specific-maintenance-guides"},"Document-Specific Maintenance Guides"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check for an associated maintenance guide before starting work on a given document if applicable."),(0,r.kt)("li",{parentName:"ul"},"A document maintenance guide outlines standards to help Reviewers and contributors when maintaining a given resource.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The rules described within a document-specific maintenance guide supersede other guides."),(0,r.kt)("li",{parentName:"ul"},"If a discrepancy is glaring or unreasonable, bring the issue to an admin in the ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/freT6YRNSX"},"#documentation")," channel on Yearn's discord.")))),(0,r.kt)("h4",{id:"contributor-tools"},"Contributor Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yearn.finance/contributing/contributor-tools"},"Contributor Tools Guide")," guide introduces the tools regularly used by Yearn contributors.")),(0,r.kt)("h3",{id:"express-interest"},"Express Interest"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check out the Getting Started guide for contributing to Documentation."),(0,r.kt)("li",{parentName:"ul"},"Join the ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/freT6YRNSX"},"#documentation")," channel on Yearn's Discord, read the pinned messages, and reach out to a channel admin."),(0,r.kt)("li",{parentName:"ul"},"Yearn community team members and senior contributors help onboard new contributors via Discord or Telegram chats where applicable."),(0,r.kt)("li",{parentName:"ul"},"Feel free to discuss personal interests and relevant skills to help determine a well-suited project/issue and jump right in."),(0,r.kt)("li",{parentName:"ul"},"To understand strengths you can also provide relevant examples of past projects, work, and experience.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Demonstrate a reliable work ethic and offer quality work that speaks for itself."),(0,r.kt)("li",{parentName:"ul"},"Stand out by suggesting projects and adding insight to public discussions.")))),(0,r.kt)("h3",{id:"collaborate"},"Collaborate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When accepting an assignment, be sure to collaborate early and often."),(0,r.kt)("li",{parentName:"ul"},"Visit ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/freT6YRNSX"},"#documentation")," or corresponding Telegram chat regularly."),(0,r.kt)("li",{parentName:"ul"},"Coordinate with other members.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ask as many questions as necessary"),(0,r.kt)("li",{parentName:"ul"},"Ask for feedback when stuck."),(0,r.kt)("li",{parentName:"ul"},"Provide frequent progress updates."))),(0,r.kt)("li",{parentName:"ul"},"Develop a plan that defines an approach for an assignment.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Produce a project outline. Clarify the what so we can agree on the how."),(0,r.kt)("li",{parentName:"ul"},"Set achievable deadlines. Timeboxing is good :)"),(0,r.kt)("li",{parentName:"ul"},"Assign and divide tasks with other contributors.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Multiple contributors should not start work on similar projects individually. Please check that the same issue does not already exist in the Github Issues for that Repository, and if it does please coordinate with whoever is working on it to divide the work if needed.")))))),(0,r.kt)("h4",{id:"track-progress"},"Track Progress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Track projects and progress with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/yearn/projects/2"},"GitHub Issues."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Keep GitHub issues updated with comments and feedback."))),(0,r.kt)("li",{parentName:"ul"},"Take advantage of version history when working in HackMD or Google Docs.")),(0,r.kt)("h4",{id:"final-drafts-and-submissions"},"Final Drafts and Submissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transfer approved final drafts from Google Docs to HackMD or DrawIO(for diagrams) if need be."),(0,r.kt)("li",{parentName:"ul"},"Let the team know when a project is ready for final review by moving your issue to the status of ",(0,r.kt)("inlineCode",{parentName:"li"},"Pending Review")," on Github and messaging in the appropriate Discord or Telegram channel."),(0,r.kt)("li",{parentName:"ul"},"Once reviewed, submit completed projects for approval as a ",(0,r.kt)("a",{parentName:"li",href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request"},"Pull Request")," on GitHub.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure to update any relevant issues and the project board on GitHub")))),(0,r.kt)("h3",{id:"acknowledgements"},"Acknowledgements"),(0,r.kt)("p",null,"This document could not be possible without the amazing work done by the MakerDAO team as this document is mostly based on their ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/makerdao/community-portal/blob/r2d/content/en/contribute/content/writing-style-guide.mdx"},"Writing Style Guide"),"."))}m.isMDXComponent=!0}}]);