(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15cfb83c"],{"035f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-row",[r("el-col",{staticStyle:{padding:"3rem"},attrs:{span:4,offset:10}},[r("el-button",{staticStyle:{width:"100%",margin:"1rem 0"},attrs:{type:"primary",size:"medium"},on:{click:function(e){return t.submit("orgManager")}}},[t._v(" OrgManager ")]),r("el-button",{staticStyle:{width:"100%",margin:"1rem 0"},attrs:{type:"primary",size:"medium"},on:{click:function(e){return t.submit("corporationManager")}}},[t._v(" CorporationManager ")])],1)],1)],1)},o=[],i=r("5530"),c=r("2f62"),f={name:"RepoSelect",data:function(){return{}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["setLoginTypeAct"])),{},{submit:function(t){console.log(t),this.setLoginTypeAct(t),"orgManager"===t?this.$router.push("/platformSelect"):"corporationManager"===t?this.$router.push("/corporationManagerLogin"):this.$router.push("/signCla")}})},a=f,u=r("2877"),s=Object(u["a"])(a,n,o,!1,null,"d8273932",null);e["default"]=s.exports},"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?f(t):o(n(t))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),c=r("ae40"),f=i("filter"),a=c("filter");n({target:"Array",proto:!0,forced:!f||!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var n=r("ade3");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),f=r("83ab"),a=r("4930"),u=r("fdbf"),s=r("d039"),b=r("5135"),l=r("e8b5"),p=r("861d"),d=r("825a"),g=r("7b0b"),y=r("fc6a"),h=r("c04e"),m=r("5c6c"),O=r("7c73"),v=r("df75"),w=r("241c"),j=r("057f"),S=r("7418"),P=r("06cf"),k=r("9bf2"),D=r("d1e7"),E=r("9112"),M=r("6eeb"),N=r("5692"),J=r("f772"),T=r("d012"),$=r("90e3"),_=r("b622"),x=r("e538"),A=r("746f"),C=r("d44e"),L=r("69f3"),z=r("b727").forEach,F=J("hidden"),I="Symbol",Q="prototype",R=_("toPrimitive"),W=L.set,q=L.getterFor(I),B=Object[Q],G=o.Symbol,H=i("JSON","stringify"),K=P.f,U=k.f,V=j.f,X=D.f,Y=N("symbols"),Z=N("op-symbols"),tt=N("string-to-symbol-registry"),et=N("symbol-to-string-registry"),rt=N("wks"),nt=o.QObject,ot=!nt||!nt[Q]||!nt[Q].findChild,it=f&&s((function(){return 7!=O(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(B,e);n&&delete B[e],U(t,e,r),n&&t!==B&&U(B,e,n)}:U,ct=function(t,e){var r=Y[t]=O(G[Q]);return W(r,{type:I,tag:t,description:e}),f||(r.description=e),r},ft=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},at=function(t,e,r){t===B&&at(Z,e,r),d(t);var n=h(e,!0);return d(r),b(Y,n)?(r.enumerable?(b(t,F)&&t[F][n]&&(t[F][n]=!1),r=O(r,{enumerable:m(0,!1)})):(b(t,F)||U(t,F,m(1,{})),t[F][n]=!0),it(t,n,r)):U(t,n,r)},ut=function(t,e){d(t);var r=y(e),n=v(r).concat(dt(r));return z(n,(function(e){f&&!bt.call(r,e)||at(t,e,r[e])})),t},st=function(t,e){return void 0===e?O(t):ut(O(t),e)},bt=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===B&&b(Y,e)&&!b(Z,e))&&(!(r||!b(this,e)||!b(Y,e)||b(this,F)&&this[F][e])||r)},lt=function(t,e){var r=y(t),n=h(e,!0);if(r!==B||!b(Y,n)||b(Z,n)){var o=K(r,n);return!o||!b(Y,n)||b(r,F)&&r[F][n]||(o.enumerable=!0),o}},pt=function(t){var e=V(y(t)),r=[];return z(e,(function(t){b(Y,t)||b(T,t)||r.push(t)})),r},dt=function(t){var e=t===B,r=V(e?Z:y(t)),n=[];return z(r,(function(t){!b(Y,t)||e&&!b(B,t)||n.push(Y[t])})),n};if(a||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),r=function(t){this===B&&r.call(Z,t),b(this,F)&&b(this[F],e)&&(this[F][e]=!1),it(this,e,m(1,t))};return f&&ot&&it(B,e,{configurable:!0,set:r}),ct(e,t)},M(G[Q],"toString",(function(){return q(this).tag})),M(G,"withoutSetter",(function(t){return ct($(t),t)})),D.f=bt,k.f=at,P.f=lt,w.f=j.f=pt,S.f=dt,x.f=function(t){return ct(_(t),t)},f&&(U(G[Q],"description",{configurable:!0,get:function(){return q(this).description}}),c||M(B,"propertyIsEnumerable",bt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:G}),z(v(rt),(function(t){A(t)})),n({target:I,stat:!0,forced:!a},{for:function(t){var e=String(t);if(b(tt,e))return tt[e];var r=G(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ft(t))throw TypeError(t+" is not a symbol");if(b(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!f},{create:st,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:pt,getOwnPropertySymbols:dt}),n({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(g(t))}}),H){var gt=!a||s((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));n({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!ft(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ft(e))return e}),o[1]=e,H.apply(null,o)}})}G[Q][R]||E(G[Q],R,G[Q].valueOf),C(G,I),T[F]=!0},ade3:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),c=r("d039"),f=c((function(){i(1)}));n({target:"Object",stat:!0,forced:f},{keys:function(t){return i(o(t))}})},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),c=r("fc6a"),f=r("06cf"),a=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=f.f,u=i(n),s={},b=0;while(u.length>b)r=o(n,e=u[b++]),void 0!==r&&a(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),c=r("06cf").f,f=r("83ab"),a=o((function(){c(1)})),u=!f||a;n({target:"Object",stat:!0,forced:u,sham:!f},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n}}]);
//# sourceMappingURL=chunk-15cfb83c.6c61fa58.js.map