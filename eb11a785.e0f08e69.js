(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(179)),o={title:"Basics & Metadata"},s={unversionedId:"api/start/basics",id:"api/start/basics",isDocsHomePage:!1,title:"Basics & Metadata",description:"One of the most important things to understand about the @polkadot/api is that most interfaces are actually generated automatically when it connects to a running node. This is quite a departure from other APIs in projects where the interfaces are static. While sounding quite scary, it actually is a powerful concept that exists in both Polkadot and Substrate chains, and allows the API to be used in environments where the chain is customized.",source:"@site/docs/api/start/basics.md",slug:"/api/start/basics",permalink:"/docs/api/start/basics",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/basics.md",version:"current",sidebar:"reference",previous:{title:"Installation",permalink:"/docs/api/start/install"},next:{title:"Create an instance",permalink:"/docs/api/start/create"}},c=[{value:"Metadata",id:"metadata",children:[]},{value:"Types",id:"types",children:[]},{value:"Chain Defaults",id:"chain-defaults",children:[]},{value:"Let&#39;s do something!",id:"lets-do-something",children:[]}],l={toc:c};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"One of the most important things to understand about the ",Object(r.b)("inlineCode",{parentName:"p"},"@polkadot/api")," is that most interfaces are actually generated automatically when it connects to a running node. This is quite a departure from other APIs in projects where the interfaces are static. While sounding quite scary, it actually is a powerful concept that exists in both Polkadot and Substrate chains, and allows the API to be used in environments where the chain is customized."),Object(r.b)("p",null,"To unpack this, we will start with the Metadata and explain what it actually provides, since it is critical for understanding how to interact with the API and any underlying chain."),Object(r.b)("h2",{id:"metadata"},"Metadata"),Object(r.b)("p",null,"When the API connects to a node, one of the first things it does is to retrieve the metadata and decorate the API based on the metadata information. The metadata effectively provides data in the form of ",Object(r.b)("inlineCode",{parentName:"p"},"api.<type>.<module>.<section>")," that fits into one of the following categories -"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/substrate/constants"},"consts")," - All runtime constants, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"api.consts.balances.existentialDeposit"),". These are not functions, rather accessing the endpoint immediately yields the result as defined."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/substrate/storage"},"query")," - All chain state, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"api.query.system.account(<accountId>)"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/substrate/extrinsics"},"tx")," - All extrinsics, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"api.tx.balances.transfer(<accountId>, <value>)"),".")),Object(r.b)("p",null,"Additionally the metadata also provides information on ",Object(r.b)("a",{parentName:"p",href:"/docs/substrate/events"},"events"),", these are query-able via the ",Object(r.b)("inlineCode",{parentName:"p"},"api.query.system.events()")," interface and also appear on transactions... both these cases are detailed later."),Object(r.b)("p",null,"None of the information contained within the ",Object(r.b)("inlineCode",{parentName:"p"},"api.{consts, query, tx}.<module>.<method>")," endpoints are hard coded in the API. Rather everything is fully decorated by what the metadata exposes and is therefore completely dynamic. This means that when you connect to different chains, the metadata and API decoration will change and the API interfaces will reflect what is available on the chain you are connected to."),Object(r.b)("h2",{id:"types"},"Types"),Object(r.b)("p",null,"The metadata defines the calls with all the type names used in the various interfaces. At the moment (this is undergoing investigations and could improve in future versions of metadata), this also means that the types between the API and the node need to be aligned. For instance, by default Substrate defines a ",Object(r.b)("inlineCode",{parentName:"p"},"BlockNumber")," type as a ",Object(r.b)("inlineCode",{parentName:"p"},"u32")," and the API follows the Substrate defaults - if a chain has a different definitions, the API needs to be aware of this so it can actually decode (and encode) the type."),Object(r.b)("p",null,"At this point just be aware of it, we will touch on types, custom chains and their impacts in a later section."),Object(r.b)("h2",{id:"chain-defaults"},"Chain Defaults"),Object(r.b)("p",null,"In addition to the ",Object(r.b)("inlineCode",{parentName:"p"},"api.[consts | query | tx]")," detailed above, the API, upon connecting to a chain, fills in some information and makes it available directly on the API interface. These include -"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"api.genesisHash")," - The genesisHash of the connected chain"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"api.runtimeMetadata")," - The metadata as retrieved from the chain"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"api.runtimeVersion")," - The chain runtime version (including spec/impl. versions and types)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"api.libraryInfo")," - The version of the API, i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"@polkadot/api v0.90.1"))),Object(r.b)("h2",{id:"lets-do-something"},"Let's do something!"),Object(r.b)("p",null,"Now that we have covered what the API actually exposes, it is time to ",Object(r.b)("a",{parentName:"p",href:"/docs/api/start/create"},"dive in and actually use what we installed earlier"),"."))}d.isMDXComponent=!0},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,b=p["".concat(o,".").concat(h)]||p[h]||u[h]||r;return a?i.a.createElement(b,s(s({ref:t},l),{},{components:a})):i.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);