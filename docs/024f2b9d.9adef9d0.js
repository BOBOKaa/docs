(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(186)),o={title:"State queries"},s={unversionedId:"api/start/api.query",id:"api/start/api.query",isDocsHomePage:!1,title:"State queries",description:"In previous sections, we initialized the API and retrieved runtime constants. This section will walk through the concepts behind making queries to the chain to retrieve current state. The api.query.. interfaces, as already described earlier, is populated from the metadata. The API uses the metadata information provided to construct queries based on the location and parameters provided to generate state keys, and then queries these via RPC.",source:"@site/docs/api/start/api.query.md",slug:"/api/start/api.query",permalink:"/docs/api/start/api.query",editUrl:"https://github.com/crustio/docs/edit/master/docs/api/start/api.query.md",version:"current",sidebar:"reference",previous:{title:"Runtime constants",permalink:"/docs/api/start/api.consts"},next:{title:"RPC queries",permalink:"/docs/api/start/api.rpc"}},c=[{value:"Basic queries",id:"basic-queries",children:[]},{value:"Parameters &amp; return values",id:"parameters--return-values",children:[]},{value:"Exploring RPCs",id:"exploring-rpcs",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In previous sections, we initialized the API and retrieved runtime constants. This section will walk through the concepts behind making queries to the chain to retrieve current state. The ",Object(i.b)("inlineCode",{parentName:"p"},"api.query.<module>.<method>")," interfaces, as already described earlier, is populated from the metadata. The API uses the metadata information provided to construct queries based on the location and parameters provided to generate state keys, and then queries these via RPC."),Object(i.b)("h2",{id:"basic-queries"},"Basic queries"),Object(i.b)("p",null,"Let's dive right in, connect to a general chain and retrieve some information on the current state. Of interest may be retrieving the nonce of a particular account as well as the current balance, this can be achieved via -"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// Initialize the API as in previous sections\n...\n\n// The actual address that we will use\nconst ADDR = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';\n\n// Retrieve the last timestamp\nconst now = await api.query.timestamp.now();\n\n// Retrieve the account balance & nonce via the system module\nconst { nonce, data: balance } = await api.query.system.account(ADDR);\n\nconsole.log(`${now}: balance of ${balance.free} and a nonce of ${nonce}`);\n")),Object(i.b)("p",null,"There have been some additions in the code above comparing with retrieving runtime constants. In these cases, since we are making a query to the actual chain, we use the ",Object(i.b)("inlineCode",{parentName:"p"},"await")," syntax to retrieve the information. Since the API is Promise-based, this means we can also rewrite the above to follow a Promise pattern,"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"...\n// Retrieve last block timestamp, account nonce & balances\nconst [now, { nonce, data: balances }] = await Promise.all([\n  api.query.timestamp.now(),\n  api.query.system.account(ADDR)\n]);\n")),Object(i.b)("h2",{id:"parameters--return-values"},"Parameters & return values"),Object(i.b)("p",null,"As indicated in previous sections, any return value is always an object with a consistent interface that reflects the type being returned. In the above example, the timestamp is a ",Object(i.b)("inlineCode",{parentName:"p"},"Moment")," (a ",Object(i.b)("inlineCode",{parentName:"p"},"u64")," value), the nonce is an ",Object(i.b)("inlineCode",{parentName:"p"},"Index")," (a ",Object(i.b)("inlineCode",{parentName:"p"},"u32")," value) and the ",Object(i.b)("inlineCode",{parentName:"p"},"Balance")," is an underlying ",Object(i.b)("inlineCode",{parentName:"p"},"u128"),"."),Object(i.b)("p",null,"Additionally we have provided some parameters for the query calls, specifically for the retrieval of the nonce and balance. It is important to note that the API will automatically convert any parameters into the correct type for encoding and making calls, in this case the ",Object(i.b)("inlineCode",{parentName:"p"},"AccountId")," parameter could be specified as a ss58 address (as it was), an actual ",Object(i.b)("inlineCode",{parentName:"p"},"AccountId")," (retrieved via another call) or just a plain ",Object(i.b)("inlineCode",{parentName:"p"},"Uint8Array")," (or even hex-string representation) for a publicKey."),Object(i.b)("h2",{id:"exploring-rpcs"},"Exploring RPCs"),Object(i.b)("p",null,"Where all query functions use the underlying RPCs, together with metadata, to construct and retrieve information, the direct node RPCs can be seen as raw calls that enable these (slightly) higher-level operations. Next up we will take a dive into ",Object(i.b)("a",{parentName:"p",href:"/docs/api/start/api.rpc"},"making RPC calls via the API"),"."))}p.isMDXComponent=!0}}]);