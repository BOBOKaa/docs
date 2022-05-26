(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{179:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||i;return t?o.a.createElement(f,c(c({ref:n},s),{},{components:t})):o.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(179)),a={title:"Simple Connect"},c={unversionedId:"api/examples/promise/simple-connect",id:"api/examples/promise/simple-connect",isDocsHomePage:!1,title:"Simple Connect",description:"The following example shows how to instantiate a Polkadot API object and use it to connect to a node using ApiPromise.",source:"@site/docs/api/examples/promise/simple-connect.md",slug:"/api/examples/promise/simple-connect",permalink:"/docs/api/examples/promise/simple-connect",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/simple-connect.md",version:"current",sidebar:"reference",previous:{title:"ApiPromise Examples",permalink:"/docs/api/examples/promise"},next:{title:"Listen to new blocks",permalink:"/docs/api/examples/promise/listen-to-blocks"}},p=[],s={toc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following example shows how to instantiate a Polkadot API object and use it to connect to a node using ApiPromise."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"// Required imports\nconst { ApiPromise, WsProvider } = require('@polkadot/api');\n\nasync function main () {\n  // Initialise the provider to connect to the local node\n  const provider = new WsProvider('ws://127.0.0.1:9944');\n\n  // Create the API and wait until ready\n  const api = await ApiPromise.create({ provider });\n\n  // Retrieve the chain & node information information via rpc calls\n  const [chain, nodeName, nodeVersion] = await Promise.all([\n    api.rpc.system.chain(),\n    api.rpc.system.name(),\n    api.rpc.system.version()\n  ]);\n\n  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);\n}\n\nmain().catch(console.error).finally(() => process.exit());\n")))}l.isMDXComponent=!0}}]);