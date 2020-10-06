(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),i=(a(0),a(136)),o={title:"Multi queries"},s={unversionedId:"api/start/api.query.multi",id:"api/start/api.query.multi",isDocsHomePage:!1,title:"Multi queries",description:"In a number of applications, it is useful to monitor a number of like-queries at the same time. For instance, we may want to track the balances for a list of accounts we have. The api.query interfaces allows this via the .multi subscription call.",source:"@site/docs/api/start/api.query.multi.md",slug:"/api/start/api.query.multi",permalink:"/docs/api/start/api.query.multi",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/docs/api/start/api.query.multi.md",version:"current",sidebar:"reference",previous:{title:"Query subscriptions",permalink:"/docs/api/start/api.query.subs"},next:{title:"Query extras",permalink:"/docs/api/start/api.query.other"}},c=[{value:"Multi queries, same type",id:"multi-queries-same-type",children:[]},{value:"Multi queries, distinct types",id:"multi-queries-distinct-types",children:[]},{value:"Rounding out queries",id:"rounding-out-queries",children:[]}],l={rightToc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In a number of applications, it is useful to monitor a number of like-queries at the same time. For instance, we may want to track the balances for a list of accounts we have. The ",Object(i.b)("inlineCode",{parentName:"p"},"api.query")," interfaces allows this via the ",Object(i.b)("inlineCode",{parentName:"p"},".multi")," subscription call."),Object(i.b)("h2",{id:"multi-queries-same-type"},"Multi queries, same type"),Object(i.b)("p",null,"Where possible, the use of multi queries are encouraged since it tracks a number of state entries over a single RPC call, instead of making a call for each single item. In addition it allows you to have a single callback to track changes. For queries of the same type we can use ",Object(i.b)("inlineCode",{parentName:"p"},".multi"),", for example to retrieve the balances of a number of accounts at once -"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\n\n// Subscribe to balance changes for 2 accounts, ADDR1 & ADDR2 (already defined)\nconst unsub = await api.query.system.account.multi([ADDR1, ADDR2], (balances) => {\n  const [{ data: balance1 }, { data: balance2 }] = balances;\n\n  console.log(`The balances are ${balance1.free} and ${balance2.free}`);\n});\n")),Object(i.b)("p",null,"A couple of items to note in the example above: we don't call ",Object(i.b)("inlineCode",{parentName:"p"},"account")," directly, but rather ",Object(i.b)("inlineCode",{parentName:"p"},"account.multi"),". We pass the addresses we want to query as an array, and the length thereof would depend on the number of addresses we want to query. As an extended example, we can track the balances of a list of validators,"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\n\n// Retrieve a snapshot of the validators\nconst validatorKeys = await api.query.session.validators.keys();\n\n// Subscribe to the balances for these accounts\nconst unsub = await api.query.balances.account.multi(validators, (balances) => {\n  console.log(`The nonce and free balances are: ${balances.map(([nonce, { free }]) => [nonce, free])}`);\n});\n")),Object(i.b)("p",null,"The above example does not subscribe to the validators explicitly, but only gets a snapshot and uses this into the future. It should be trivially extendable to subscribe to the validators, track which one have entered or left and then subscribe to balances as they change through the next blocks."),Object(i.b)("h2",{id:"multi-queries-distinct-types"},"Multi queries, distinct types"),Object(i.b)("p",null,"The previous ",Object(i.b)("inlineCode",{parentName:"p"},".multi")," examples assumes that we do queries for the same types, i.e. we retrieve the balances for a number of accounts. However, there is also a need to retrieve various distinct types, as an example we would like to track the block timestamp in addition to the nonce and balance of a specific account. To cater for this, the api has a specific ",Object(i.b)("inlineCode",{parentName:"p"},"api.queryMulti")," interface that can be used to perform this query -"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\n\n// Subscribe to the timestamp, our index and balance\nconst unsub = await api.queryMulti([\n  api.query.timestamp.now,\n  [api.query.system.account, ADDR]\n], ([now, { nonce, data: balance }]) => {\n  console.log(`${now}: balance of ${balance.free} and a nonce of ${nonce}`);\n});\n")),Object(i.b)("p",null,"The above example certainly does not quite look as ergonomic and clean, but the API needs to understand (a) which are all the calls we need to make and (b) the calls and their params (if required). So breaking it down -"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"api.query.timestamp.now")," - the timestamp is passed naked without any params. Also note that we do not call it while passing, but rather only provides a reference to the function, i.e. we do not have the expected ",Object(i.b)("inlineCode",{parentName:"li"},"()")," at the end. (This could also be of the form ",Object(i.b)("inlineCode",{parentName:"li"},"[api.query.timestamp.now]"),", aligning with subsequent entries)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[api.query.system.account, ADDR]")," - the nonce & balance query is passed as an array containing the function (once again naked), followed by the parameters that apply.")),Object(i.b)("h2",{id:"rounding-out-queries"},"Rounding out queries"),Object(i.b)("p",null,"To round out our query introduction, there are a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/start/api.query.other"}),"number of other utilities and calls available")," that allows the ",Object(i.b)("inlineCode",{parentName:"p"},"api.query")," user to perform certain tasks, such as querying state at a specific block. These are covered in the next section."))}u.isMDXComponent=!0},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);