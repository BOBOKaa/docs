(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{126:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(186)),c={title:"Listen to balance changes"},i={unversionedId:"api/examples/promise/listen-to-multiple-balances-change",id:"api/examples/promise/listen-to-multiple-balances-change",isDocsHomePage:!1,title:"Listen to balance changes",description:"This example shows how to instantiate a Polkadot API object and use it to connect to a node and retrieve balance updates.",source:"@site/docs/api/examples/promise/listen-to-multiple-balances-change.md",slug:"/api/examples/promise/listen-to-multiple-balances-change",permalink:"/docs/api/examples/promise/listen-to-multiple-balances-change",editUrl:"https://github.com/crustio/docs/edit/master/docs/api/examples/promise/listen-to-multiple-balances-change.md",version:"current"},s=[],l={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This example shows how to instantiate a Polkadot API object and use it to connect to a node and retrieve balance updates."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\nconst { typesBundleForPolkadot } = require('@crustio/type-definitions');\n\n// Known account we want to use (available on dev chain, with funds)\nconst ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';\nconst BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';\n\nasync function main () {\n  // Create an await for the API\n  const api = await ApiPromise.create({\n            provider: new WsProvider('ws://127.0.0.1:9944'),\n            typesBundle: typesBundleForPolkadot\n        });\n\n  console.log('Tracking balances for:', [ALICE, BOB]);\n\n  // Subscribe and listen to several balance changes\n  api.query.system.account.multi([ALICE, BOB], (balances) => {\n    console.log('Change detected, new balances: ', balances.map(({ data: { free } }) => free));\n  });\n}\n\nmain().catch(console.error);\n")))}p.isMDXComponent=!0},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(b,i(i({ref:n},l),{},{components:t})):a.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);