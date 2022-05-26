(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),i=n(7),r=(n(0),n(186)),l={title:"Type basics"},o={unversionedId:"api/start/types.basics",id:"api/start/types.basics",isDocsHomePage:!1,title:"Type basics",description:"We've touched upon types in most previous sections, i.e. that these are driven by metadata and that they are created and converted to/from automatically by the API. Since they appear in all results, we will divert a bit from the regularly scheduled program in explaining the API interfaces to giving some info on the base types.",source:"@site/docs/api/start/types.basics.md",slug:"/api/start/types.basics",permalink:"/docs/api/start/types.basics",editUrl:"https://github.com/crustio/docs/edit/master/docs/api/start/types.basics.md",version:"current",sidebar:"reference",previous:{title:"Complex transactions",permalink:"/docs/api/start/api.tx.wrap"},next:{title:"Extending types",permalink:"/docs/api/start/types.extend"}},s=[{value:"Everything is a type",id:"everything-is-a-type",children:[]},{value:"Comparing types",id:"comparing-types",children:[]},{value:"Working with numbers",id:"working-with-numbers",children:[]},{value:"Working with structures",id:"working-with-structures",children:[]},{value:"Working with enums",id:"working-with-enums",children:[]},{value:"Working with Option&lt;Type&gt;",id:"working-with-optiontype",children:[]},{value:"Working with Tuples",id:"working-with-tuples",children:[]},{value:"Boolean values",id:"boolean-values",children:[]},{value:"Extending types",id:"extending-types",children:[]}],p={toc:s};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We've touched upon types in most previous sections, i.e. that these are driven by metadata and that they are created and converted to/from automatically by the API. Since they appear in all results, we will divert a bit from the regularly scheduled program in explaining the API interfaces to giving some info on the base types."),Object(r.b)("h2",{id:"everything-is-a-type"},"Everything is a type"),Object(r.b)("p",null,"Just to re-iterate from the above. Everything returned by the API is a type and has a consistent interface: ",Object(r.b)("inlineCode",{parentName:"p"},"Codec"),". This means that a ",Object(r.b)("inlineCode",{parentName:"p"},"Vec<u32>")," (an array of ",Object(r.b)("inlineCode",{parentName:"p"},"u32")," values) as well as a ",Object(r.b)("inlineCode",{parentName:"p"},"Struct")," (an pre-defined object) or an ",Object(r.b)("inlineCode",{parentName:"p"},"Enum")," has the same consistent base interface. Specific types types will have values, based on the type - decorated and available."),Object(r.b)("p",null,"As a minimum, anything returned by the API, be it a ",Object(r.b)("inlineCode",{parentName:"p"},"Vec<...>"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Option<...>"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Struct")," or any normal type will always have the following methods - as defined on the ",Object(r.b)("inlineCode",{parentName:"p"},"Codec")," interface:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".eq(<other value>)"),' - checks for equality against the other value. In all cases, it will accept "like" values, i.e. in the case of a number you can pass a primitive (such as ',Object(r.b)("inlineCode",{parentName:"li"},"1"),"), a hex value (such as ",Object(r.b)("inlineCode",{parentName:"li"},"0x01"),") or even an ",Object(r.b)("inlineCode",{parentName:"li"},"Unit8Array")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"toHex()")," - returns a hex-base representation of the value, always prefixed by ",Object(r.b)("inlineCode",{parentName:"li"},"0x")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"toHuman()")," - returns Human-parsable JSON structure with values formatted as per the settings"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"toJSON()")," - returns a JSON-like representation of the value, this is generally used when calling ",Object(r.b)("inlineCode",{parentName:"li"},"JSON.stringify(...)")," on the value"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"toString()")," - returns a string representation, in some cases this performs additional encoding, i.e. for ",Object(r.b)("inlineCode",{parentName:"li"},"Address"),", ",Object(r.b)("inlineCode",{parentName:"li"},"AccountId")," and ",Object(r.b)("inlineCode",{parentName:"li"},"AccountIndex")," it will encode to the ss58 address"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".toU8a()")," - returns a ",Object(r.b)("inlineCode",{parentName:"li"},"Uint8Array")," representation of the encoded value (generally exactly as passed to the node, where values are SCALE encoded)")),Object(r.b)("p",null,"Additionally, the following getters and utilities are available -"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".isEmpty")," - ",Object(r.b)("inlineCode",{parentName:"li"},"true")," if the value is an all-empty value, i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"0")," in for numbers, all-zero for Arrays (or anything ",Object(r.b)("inlineCode",{parentName:"li"},"Uint8Array"),"), ",Object(r.b)("inlineCode",{parentName:"li"},"false")," is non-zero"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".hash")," - a ",Object(r.b)("inlineCode",{parentName:"li"},"Hash")," (once again with all the methods above) that is a ",Object(r.b)("inlineCode",{parentName:"li"},"blake2-256")," representation of the contained value")),Object(r.b)("h2",{id:"comparing-types"},"Comparing types"),Object(r.b)("p",null,"To reiterate the above API, the ",Object(r.b)("inlineCode",{parentName:"p"},".eq")," method is the preferred means of comparing base types, rather than the JavaScript equality operator (",Object(r.b)("inlineCode",{parentName:"p"},"==="),")."),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { metadata } = await api.rpc.state.getMetadata();\nconst modules = metadata.asLatest.modules;\n\n// This will not work, because `name` is an instance of `Text`, not a string\n// const system = modules.find(m => m.name === 'system');\n\n// This will work, because `Text.eq()` can compare against a string\nconst system = modules.find(m => m.name.eq('system'));\n")),Object(r.b)("h2",{id:"working-with-numbers"},"Working with numbers"),Object(r.b)("p",null,"All numbers wrap and extend an instance of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/indutny/bn.js/"},"bn.js"),". This means that in addition to the interfaces defined above, they have some additional methods -"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".toNumber()")," - a JS number (limited to 2^53 - 1). This does mean that for large values, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"Balance")," (a ",Object(r.b)("inlineCode",{parentName:"li"},"u128")," extension), this can cause overflows"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".toBigInt()")," - a JS ",Object(r.b)("inlineCode",{parentName:"li"},"BigInt")," object (on supported platforms)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".add(...)"),", ",Object(r.b)("inlineCode",{parentName:"li"},".sub(...)"),", ... - all the base methods available on the ",Object(r.b)("inlineCode",{parentName:"li"},"BN")," object")),Object(r.b)("p",null,"In cases where a ",Object(r.b)("inlineCode",{parentName:"p"},"Compact")," is returned, i.e. ",Object(r.b)("inlineCode",{parentName:"p"},"Compact<Balance>"),", the value is wrapped. This object should be ",Object(r.b)("inlineCode",{parentName:"p"},".unwrap()"),"-ed first to gain access to the underlying ",Object(r.b)("inlineCode",{parentName:"p"},"Balance")," object."),Object(r.b)("h2",{id:"working-with-structures"},"Working with structures"),Object(r.b)("p",null,"All structures, a wrapping of an object containing a number of member variables, is an implementation of a standard JS ",Object(r.b)("inlineCode",{parentName:"p"},"Map")," object, so all the functions available on a ",Object(r.b)("inlineCode",{parentName:"p"},"Map")," such as ",Object(r.b)("inlineCode",{parentName:"p"},".entries()")," are available. Additionally it is decorated with actual getters for the fields."),Object(r.b)("p",null,"As an example, a ",Object(r.b)("inlineCode",{parentName:"p"},"Header")," will have getters for the ",Object(r.b)("inlineCode",{parentName:"p"},".parentHash"),", ",Object(r.b)("inlineCode",{parentName:"p"},".number"),", ",Object(r.b)("inlineCode",{parentName:"p"},".stateRoot"),", ",Object(r.b)("inlineCode",{parentName:"p"},".extrinsicsRoot")," and ",Object(r.b)("inlineCode",{parentName:"p"},".digest")," fields. The same applies for all structures, as they are returned, each member will have an associated getter."),Object(r.b)("p",null,"Be aware that in the JS version naming defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"camelCase")," where names of fields in Substrate defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"snake_case"),". (Each version aligning with conventions in the respective languages)"),Object(r.b)("h2",{id:"working-with-enums"},"Working with enums"),Object(r.b)("p",null,"Each enum has additional getters which are injected based on the fields wrapped. These take the form of ",Object(r.b)("inlineCode",{parentName:"p"},".is<Name>")," and ",Object(r.b)("inlineCode",{parentName:"p"},".as<Name>")," to allow you to check is the enum is a certain value or to retrieve the underlying value as a specific type."),Object(r.b)("p",null,"As a real-world example, when an extrinsic is applied, the ",Object(r.b)("inlineCode",{parentName:"p"},"Phase")," enum has one of two states, ",Object(r.b)("inlineCode",{parentName:"p"},"ApplyExtrinsic(u32)")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Finalization"),". In this case ",Object(r.b)("inlineCode",{parentName:"p"},".isApplyExtrinsic")," would be ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when an extrinsic is being applied, and ",Object(r.b)("inlineCode",{parentName:"p"},".asApplyExtrinsic")," would return the value as a ",Object(r.b)("inlineCode",{parentName:"p"},"u32")," (which is the index of the extrinsic in the block, as it is being applied). When ",Object(r.b)("inlineCode",{parentName:"p"},"isApplyExtrinsic")," is ",Object(r.b)("inlineCode",{parentName:"p"},"false")," and ",Object(r.b)("inlineCode",{parentName:"p"},"asApplyExtrinsic")," is called, the getter will throw."),Object(r.b)("h2",{id:"working-with-optiontype"},"Working with Option","<","Type",">"),Object(r.b)("p",null,"An ",Object(r.b)("inlineCode",{parentName:"p"},"Option<Type>")," attempts to mimic the Rust approach of having ",Object(r.b)("inlineCode",{parentName:"p"},"None")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Some")," available. This means the following getters & methods are available on an ",Object(r.b)("inlineCode",{parentName:"p"},"Option")," -"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".isNone")," - is ",Object(r.b)("inlineCode",{parentName:"li"},"true")," if no underlying values is wrapped, effectively the same as ",Object(r.b)("inlineCode",{parentName:"li"},".isEmpty")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".isSome")," - this is ",Object(r.b)("inlineCode",{parentName:"li"},"true")," is a value is wrapped, i.e. if a ",Object(r.b)("inlineCode",{parentName:"li"},"Option<u32>")," has an actual underlying ",Object(r.b)("inlineCode",{parentName:"li"},"u32")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".unwrap()")," - when ",Object(r.b)("inlineCode",{parentName:"li"},"isSome"),", this will return the wrapped value, i.e. for ",Object(r.b)("inlineCode",{parentName:"li"},"Option<u32>"),", this would return the ",Object(r.b)("inlineCode",{parentName:"li"},"u32"),". When the value is ",Object(r.b)("inlineCode",{parentName:"li"},"isNone"),", this call will throw an exception."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".unwrapOr(<default value>)")," - this extends ",Object(r.b)("inlineCode",{parentName:"li"},"unwrap()"),", returning the wrapped value when ",Object(r.b)("inlineCode",{parentName:"li"},"isSome")," and in the case of ",Object(r.b)("inlineCode",{parentName:"li"},"isNone")," it will return the ",Object(r.b)("inlineCode",{parentName:"li"},"<default value>")," passed."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".unwrapOrDefault()")," - returns either the wrapped value when ",Object(r.b)("inlineCode",{parentName:"li"},"isSome"),", or the default for the type when ",Object(r.b)("inlineCode",{parentName:"li"},"isNone"))),Object(r.b)("h2",{id:"working-with-tuples"},"Working with Tuples"),Object(r.b)("p",null,"A tuple is defined in the form of ",Object(r.b)("inlineCode",{parentName:"p"},"(u32, AccountId)"),". To access the individual values, you can access it via its index, i.e."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// Assuming a tuple defined as `(32, AccountId)`\nconst [count, accountId] = tuple;\n\nconsole.log(`${accountId} has ${count.toNumber()} values`);\n")),Object(r.b)("p",null,"When making a call that expect a ",Object(r.b)("inlineCode",{parentName:"p"},"Tuple")," input, pass it as an array, so to pass the example above into a call, it would be ",Object(r.b)("inlineCode",{parentName:"p"},".call([123, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'])")),Object(r.b)("h2",{id:"boolean-values"},"Boolean values"),Object(r.b)("p",null,"All ",Object(r.b)("inlineCode",{parentName:"p"},"bool")," values are returned as nomal JS ",Object(r.b)("inlineCode",{parentName:"p"},"Booolean")," objects, i.e. they extend the ",Object(r.b)("a",{parentName:"p",href:"https://www.w3schools.com/jsref/jsref_obj_boolean.asp"},"JS Boolean")," to allow it to be used as a ",Object(r.b)("inlineCode",{parentName:"p"},"Codec")," type. "),Object(r.b)("p",null,"In addition to the default ",Object(r.b)("inlineCode",{parentName:"p"},"getValue()")," on the JS Boolean and the default interfaces explained above, two additional getters have been added for ease-of-use. These are ",Object(r.b)("inlineCode",{parentName:"p"},"isTrue")," and ",Object(r.b)("inlineCode",{parentName:"p"},"isFalse")," that will just return a normal JS primitive ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," for a quick check without using ",Object(r.b)("inlineCode",{parentName:"p"},"getValue()"),"."),Object(r.b)("h2",{id:"extending-types"},"Extending types"),Object(r.b)("p",null,"For customized chains, the need exists to register types so the API is aware of how to decode values for those types. The next section will provide a ",Object(r.b)("a",{parentName:"p",href:"/docs/api/start/types.extend"},"walk-through for the definition of custom types")," allowing the definition or re-definition of any type the API is aware of."))}c.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(n),u=a,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(m,o(o({ref:t},p),{},{components:n})):i.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);