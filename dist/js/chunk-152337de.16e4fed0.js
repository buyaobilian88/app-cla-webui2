(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-152337de"],{"0418":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("el-col",{attrs:{span:8}},[o("div",{staticStyle:{display:"flex"}},[o("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:this.$store.state.user.userImg,alt:""},on:{click:function(e){return t.newWindow()}}}),o("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[o("span",[t._v("Hi, "),o("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[t._v(t._s(this.$store.state.user.userName)+"!")])])])])]),o("el-col",{attrs:{span:8}},[o("div",[o("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(e){return t.toHome()}}})],1)]),o("el-col",{attrs:{span:8}},[o("div",[o("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[o("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(e){return t.loginOut()}}})],1)],1)])],1)},a=[],n={name:"Header",computed:{},data:function(){return{}},created:function(){},methods:{toHome:function(){this.$router.push("/home")},loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},s=n,r=(o("5d19"),o("2877")),c=Object(r["a"])(s,i,a,!1,null,"1d41f76a",null);e["a"]=c.exports},"057f":function(t,e,o){var i=o("fc6a"),a=o("241c").f,n={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(t){try{return a(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==n.call(t)?r(t):a(i(t))}},1460:function(t,e,o){"use strict";var i=o("cf23"),a=o.n(i);a.a},"159b":function(t,e,o){var i=o("da84"),a=o("fdbc"),n=o("17c2"),s=o("9112");for(var r in a){var c=i[r],l=c&&c.prototype;if(l&&l.forEach!==n)try{s(l,"forEach",n)}catch(u){l.forEach=n}}},"17c2":function(t,e,o){"use strict";var i=o("b727").forEach,a=o("a640"),n=o("ae40"),s=a("forEach"),r=n("forEach");t.exports=s&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"221d":function(t,e,o){"use strict";o.d(e,"i",(function(){return i})),o.d(e,"m",(function(){return a})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return r})),o.d(e,"g",(function(){return c})),o.d(e,"j",(function(){return l})),o.d(e,"f",(function(){return u})),o.d(e,"l",(function(){return f})),o.d(e,"k",(function(){return h})),o.d(e,"n",(function(){return d})),o.d(e,"h",(function(){return p})),o.d(e,"e",(function(){return g})),o.d(e,"d",(function(){return v}));var i="https://gitee.com/api/v5/user",a="/v1/cla",n="/v1/cla",s="/v1/cla",r="/v1/getCla",c="https://gitee.com/api/v5/user/orgs",l="/v1/org-repo",u="/v1/org-repo",f="/v1/unLinkRepository",h="/v1/signCla",d="/v1/verifyCode",p="/v1/getPersonalRepositories",g="/v1/getCompanyRepositories",v="/v1/getCompanyPersonRepositories"},4160:function(t,e,o){"use strict";var i=o("23e7"),a=o("17c2");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"4de4":function(t,e,o){"use strict";var i=o("23e7"),a=o("b727").filter,n=o("1dde"),s=o("ae40"),r=n("filter"),c=s("filter");i({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b");function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function n(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}},"5d19":function(t,e,o){"use strict";var i=o("a573"),a=o.n(i);a.a},"615a":function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var i=function(){return window.innerHeight}},"746f":function(t,e,o){var i=o("428f"),a=o("5135"),n=o("e538"),s=o("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});a(e,t)||s(e,t,{value:n.f(t)})}},8418:function(t,e,o){"use strict";var i=o("c04e"),a=o("9bf2"),n=o("5c6c");t.exports=function(t,e,o){var s=i(e);s in t?a.f(t,s,n(0,o)):t[s]=o}},"99af":function(t,e,o){"use strict";var i=o("23e7"),a=o("d039"),n=o("e8b5"),s=o("861d"),r=o("7b0b"),c=o("50c4"),l=o("8418"),u=o("65f0"),f=o("1dde"),h=o("b622"),d=o("2d00"),p=h("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",m=d>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=f("concat"),y=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:n(t)},_=!m||!b;i({target:"Array",proto:!0,forced:_},{concat:function(t){var e,o,i,a,n,s=r(this),f=u(s,0),h=0;for(e=-1,i=arguments.length;e<i;e++)if(n=-1===e?s:arguments[e],y(n)){if(a=c(n.length),h+a>g)throw TypeError(v);for(o=0;o<a;o++,h++)o in n&&l(f,h,n[o])}else{if(h>=g)throw TypeError(v);l(f,h++,n)}return f.length=h,f}})},a4d3:function(t,e,o){"use strict";var i=o("23e7"),a=o("da84"),n=o("d066"),s=o("c430"),r=o("83ab"),c=o("4930"),l=o("fdbf"),u=o("d039"),f=o("5135"),h=o("e8b5"),d=o("861d"),p=o("825a"),g=o("7b0b"),v=o("fc6a"),m=o("c04e"),b=o("5c6c"),y=o("7c73"),_=o("df75"),w=o("241c"),C=o("057f"),k=o("7418"),O=o("06cf"),S=o("9bf2"),x=o("d1e7"),L=o("9112"),$=o("6eeb"),V=o("5692"),D=o("f772"),A=o("d012"),E=o("90e3"),z=o("b622"),j=o("e538"),N=o("746f"),P=o("d44e"),R=o("69f3"),T=o("b727").forEach,I=D("hidden"),H="Symbol",M="prototype",F=z("toPrimitive"),W=R.set,G=R.getterFor(H),U=Object[M],B=a.Symbol,q=n("JSON","stringify"),J=O.f,Y=S.f,Z=C.f,K=x.f,Q=V("symbols"),X=V("op-symbols"),tt=V("string-to-symbol-registry"),et=V("symbol-to-string-registry"),ot=V("wks"),it=a.QObject,at=!it||!it[M]||!it[M].findChild,nt=r&&u((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,o){var i=J(U,e);i&&delete U[e],Y(t,e,o),i&&t!==U&&Y(U,e,i)}:Y,st=function(t,e){var o=Q[t]=y(B[M]);return W(o,{type:H,tag:t,description:e}),r||(o.description=e),o},rt=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},ct=function(t,e,o){t===U&&ct(X,e,o),p(t);var i=m(e,!0);return p(o),f(Q,i)?(o.enumerable?(f(t,I)&&t[I][i]&&(t[I][i]=!1),o=y(o,{enumerable:b(0,!1)})):(f(t,I)||Y(t,I,b(1,{})),t[I][i]=!0),nt(t,i,o)):Y(t,i,o)},lt=function(t,e){p(t);var o=v(e),i=_(o).concat(pt(o));return T(i,(function(e){r&&!ft.call(o,e)||ct(t,e,o[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=m(t,!0),o=K.call(this,e);return!(this===U&&f(Q,e)&&!f(X,e))&&(!(o||!f(this,e)||!f(Q,e)||f(this,I)&&this[I][e])||o)},ht=function(t,e){var o=v(t),i=m(e,!0);if(o!==U||!f(Q,i)||f(X,i)){var a=J(o,i);return!a||!f(Q,i)||f(o,I)&&o[I][i]||(a.enumerable=!0),a}},dt=function(t){var e=Z(v(t)),o=[];return T(e,(function(t){f(Q,t)||f(A,t)||o.push(t)})),o},pt=function(t){var e=t===U,o=Z(e?X:v(t)),i=[];return T(o,(function(t){!f(Q,t)||e&&!f(U,t)||i.push(Q[t])})),i};if(c||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),o=function(t){this===U&&o.call(X,t),f(this,I)&&f(this[I],e)&&(this[I][e]=!1),nt(this,e,b(1,t))};return r&&at&&nt(U,e,{configurable:!0,set:o}),st(e,t)},$(B[M],"toString",(function(){return G(this).tag})),$(B,"withoutSetter",(function(t){return st(E(t),t)})),x.f=ft,S.f=ct,O.f=ht,w.f=C.f=dt,k.f=pt,j.f=function(t){return st(z(t),t)},r&&(Y(B[M],"description",{configurable:!0,get:function(){return G(this).description}}),s||$(U,"propertyIsEnumerable",ft,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:B}),T(_(ot),(function(t){N(t)})),i({target:H,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var o=B(e);return tt[e]=o,et[o]=e,o},keyFor:function(t){if(!rt(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!r},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ht}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),i({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(g(t))}}),q){var gt=!c||u((function(){var t=B();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));i({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,o){var i,a=[t],n=1;while(arguments.length>n)a.push(arguments[n++]);if(i=e,(d(e)||void 0!==t)&&!rt(t))return h(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!rt(e))return e}),a[1]=e,q.apply(null,a)}})}B[M][F]||L(B[M],F,B[M].valueOf),P(B,H),A[I]=!0},a573:function(t,e,o){},a640:function(t,e,o){"use strict";var i=o("d039");t.exports=function(t,e){var o=[][t];return!!o&&i((function(){o.call(null,e||function(){throw 1},1)}))}},abaa:function(t,e,o){},b0c0:function(t,e,o){var i=o("83ab"),a=o("9bf2").f,n=Function.prototype,s=n.toString,r=/^\s*function ([^ (]*)/,c="name";i&&!(c in n)&&a(n,c,{configurable:!0,get:function(){try{return s.call(this).match(r)[1]}catch(t){return""}}})},b64b:function(t,e,o){var i=o("23e7"),a=o("7b0b"),n=o("df75"),s=o("d039"),r=s((function(){n(1)}));i({target:"Object",stat:!0,forced:r},{keys:function(t){return n(a(t))}})},bb51:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:t.home,attrs:{id:"home"}},[o("Header"),o("el-col",{attrs:{offset:4,span:16,id:"section"}},[o("div",{attrs:{id:"configBtDiv"}},[t.showConfigForm?t._e():o("el-button",{staticClass:"configBt",attrs:{type:"primary"},on:{click:function(e){return t.configCla()}}},[t._v(" Configure CLA ")])],1),o("el-row",[t.showConfigForm?o("el-row",[o("div",{staticStyle:{"padding-bottom":"1.5rem","font-size":"1.3rem"}},[t._v("Configure CLA")]),o("el-row",[o("el-col",{attrs:{span:10}},[o("div",{staticStyle:{"background-color":"white"}},[o("div",{staticStyle:{"text-align":"right",padding:"1rem"}},[o("svg-icon",{attrs:{"icon-class":"close"},on:{click:function(e){return t.closeConfigForm()}}})],1),o("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[t._v(" ① Choose a repository "),t.user.isAuthorize?t._e():o("span",{staticStyle:{"font-size":".8rem","text-decoration":"underline",cursor:"pointer"},on:{click:function(e){return t.authorize()}}},[t._v("(want to link an org?)")])]),o("div",{staticStyle:{padding:"0 2rem"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"select",size:"medium"},on:{change:t.changeRepository},model:{value:t.repositoryValue,callback:function(e){t.repositoryValue=e},expression:"repositoryValue"}},t._l(t.repositoryOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[t._v(" ② Choose a CLA ")]),o("div",{staticStyle:{"font-size":"1rem",padding:"0 2rem .5rem 2rem"}},[t._v(" Select from Gist "),o("span",{staticStyle:{"font-size":".8rem","text-decoration":"underline",cursor:"pointer"},on:{click:function(e){return t.createCLA()}}},[t._v("(don't have one?)")])]),o("div",{staticStyle:{padding:"0 2rem"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"select",size:"medium"},on:{change:t.changeCla},model:{value:t.claValue,callback:function(e){t.claValue=e},expression:"claValue"}},t._l(t.claOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[t._v(" ③ Choose a Metadata ")]),o("div",{staticStyle:{"font-size":"1rem",padding:"0 2rem .5rem 2rem"}},[t._v(" Select from Gist "),o("span",{staticStyle:{"font-size":".8rem","text-decoration":"underline",cursor:"pointer"},on:{click:function(e){return t.createMetadata()}}},[t._v("(don't have one?)")])]),o("div",{staticStyle:{padding:"0 2rem"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"select",size:"medium"},on:{change:t.changeMetadata},model:{value:t.metadataValue,callback:function(e){t.metadataValue=e},expression:"metadataValue"}},t._l(t.metadataOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[t._v(" ④ Email ")]),o("div",{staticStyle:{padding:"0 2rem"}},[o("el-input",{attrs:{size:"medium",placeholder:"Input you email"},on:{input:t.verifyEmail},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),o("div",{class:{"linkBt pointer":t.claChoose&&t.repositoryChoose&&t.isEmail,disableClass:!(t.claChoose&&t.repositoryChoose&&t.isEmail)},on:{click:function(e){return t.openLinkDialog()}}},[o("div",[o("svg-icon",{attrs:{"icon-class":"link"}}),t._v(" LINK ")],1)])])]),o("el-col",{attrs:{span:12,offset:2}},[o("el-input",{staticStyle:{"white-space":"pre-wrap"},attrs:{rows:"16",readonly:"",type:"textarea"},model:{value:t.previewText,callback:function(e){t.previewText=e},expression:"previewText"}})],1)],1)],1):t._e()],1),o("div",[o("el-tabs",{on:{"tab-click":t.tabsHandleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-tab-pane",{staticStyle:{"margin-top":"1rem"},attrs:{label:"Linked Repositories",name:"first"}}),o("el-tab-pane",{staticStyle:{"margin-top":"1rem"},attrs:{label:"Signed Repositories",name:"second"}})],1),o("router-view")],1)],1),o("Footer",{attrs:{id:"footer"}}),o("el-dialog",{attrs:{top:"5vh",title:"",visible:t.authorizeDialogVisible,width:"35%"},on:{"update:visible":function(e){t.authorizeDialogVisible=e}}},[o("div",{staticStyle:{"text-align":"left"}},[o("p",{staticClass:"dialogDesc"},[t._v("Why link organizations?")]),o("p",[t._v("If you link an organization with your CLA, CLA assistant sets a web hook on your organization and listens to Pull Requests of all repositories in the organization. That means that your CLA becomes active for each existing and future repositories of your organization.")]),o("p",{staticClass:"dialogDesc"},[t._v("How can I link an organization?")]),o("p",[t._v("CLA assistant needs an additional authorization from you to be able to create web hooks for organizations. To grant CLA assistant appropriate rights just click on the button below. For more information on Authorization scopes see github documentation")]),o("div",{staticClass:"linkBt pointer",staticStyle:{"font-size":"1.1rem"},on:{click:function(e){return t.getOrgPermission()}}},[t._v(" Yes,let's go for it ")])])]),o("el-dialog",{attrs:{top:"5vh",title:"",visible:t.createCLADialogVisible,width:"35%"},on:{"update:visible":function(e){t.createCLADialogVisible=e}}},[o("div",{staticStyle:{"text-align":"left"}},[o("p",{staticClass:"dialogDesc"},[t._v("How can I create a CLA Gist?")]),o("p",[t._v("To "),o("span",{staticStyle:{cursor:"pointer","text-decoration":"underline",color:"blue"},on:{click:function(e){return t.toCreateCLA()}}},[t._v("createCLA")]),t._v(" enter a file name and paste the content of your CLA.")]),o("p",{staticClass:"dialogDesc"},[t._v("What happens if I edit the Gist file?")]),o("p",[t._v("CLA assistant will always show you the current version of your Gist file. Users who accept your CLA sign the current version. If you change the content of your CLA, each contributor has to accept the new version when they create a new pull request.")])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})]),o("el-dialog",{attrs:{top:"5vh",title:"",visible:t.createMetadataDialogVisible,width:"35%"},on:{"update:visible":function(e){t.createMetadataDialogVisible=e}}},[o("div",{staticStyle:{"text-align":"left"}},[o("p",{staticClass:"dialogDesc"},[t._v("How can I create a Metadata Gist?")]),o("p",[t._v("To "),o("span",{staticStyle:{cursor:"pointer","text-decoration":"underline",color:"blue"},on:{click:function(e){return t.toCreateMetadata()}}},[t._v("createMetadata")]),t._v(" enter a file name and paste the content of your Metadata.")]),o("p",{staticClass:"dialogDesc"},[t._v("What happens if I edit the Gist file?")]),o("p",[t._v("CLA assistant will always show you the current version of your Gist file. Users who accept your Metadata sign the current version. If you change the content of your Metadata, each contributor has to accept the new version when they create a new pull request.")])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})]),o("el-dialog",{attrs:{top:"5vh",title:"",visible:t.shareDialogVisible,width:"35%"},on:{"update:visible":function(e){t.shareDialogVisible=e}}},[o("div",{staticStyle:{"text-align":"left"}},[o("p",{staticClass:"dialogDesc"},[t._v("What happens if I choose to share the gist with multiple repos or orgs?")]),o("p",[t._v("Contributors will simply need to sign only once for any of the repos or orgs linked with the same shared gist.")]),o("p",{staticClass:"dialogDesc"},[t._v("Are previous CLA signatures still valid after I choose to share the gist with multiple repos or orgs?")]),o("p",[t._v("Yes, but the scope of the previous signatures are still limited to the previous repo or org.")]),o("p",{staticClass:"dialogDesc"},[t._v("What happens if I uncheck the box and choose NOT to share the gist any more?")]),o("p",[t._v("Previous contributors that have signed the shared gist will have to sign again.")])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})]),o("el-dialog",{attrs:{top:"5vh",title:"",visible:t.linkDialogVisible,width:"35%"},on:{"update:visible":function(e){t.linkDialogVisible=e}}},[o("div",[o("p",{staticClass:"dialogDesc"},[t._v("Would you like to link this CLA to your repository?")]),o("div",[o("el-row",[o("svg-icon",{staticStyle:{width:"100%",height:"100%"},attrs:{"icon-class":"popup_link"}})],1),o("el-row",[t.claChoose?o("el-col",{attrs:{offset:6,span:5}},[t._v(" "+t._s(t.claOptions[t.claValue].label)+" ")]):t._e(),t.repositoryChoose?o("el-col",{attrs:{offset:2,span:5}},[t._v(" "+t._s(t.repositoryOptions[t.repositoryValue].label)+" ")]):t._e()],1)],1),o("div",{staticStyle:{padding:"0 3rem",color:"#409EFF"}}),o("div",{staticStyle:{padding:"2rem 6rem","text-align":"left","font-size":"1.3rem"}},[o("p",{staticStyle:{"text-align":"center"}},[t._v("CLA assistant will...")]),o("ul",[o("li",[t._v("Create a webhook in your repository and listen for pull requests")]),o("li",[t._v("Set a pull request CLA status")]),o("li",[t._v("Comment on pull requests")])])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.linkDialogVisible=!1}}},[t._v("Cancel")]),o("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.linkLoading,expression:"linkLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:function(e){return t.linkRepository()}}},[t._v("Yes,Let's do this!")])],1)])])],1)},a=[],n=(o("99af"),o("4160"),o("b0c0"),o("159b"),o("5530")),s=o("221d"),r=o("615a"),c=o("0418"),l=o("fd2d"),u=o("2f62");window.onresize=function(){r["a"]()>document.getElementById("home").offsetHeight&&(document.getElementById("home").style.height=r["a"]()+"px")};var f={name:"Home",components:{Header:c["a"],Footer:l["a"]},computed:{},watch:{$route:function(t,e){var o=t.path;"/linkedRepo"===o||"/home"===o?this.activeName="first":"/signedRepo"!==o&&"/signedRepoLogin"!==o||(this.activeName="second")}},data:function(){return{createMetadataDialogVisible:!1,linkLoading:!1,platform:this.$store.state.platform,isVerify:!1,activeName:"",previewShow:!1,previewText:"previewCla",loginType:this.$store.state.loginType,tableType:1,tableShow:!0,listCurrentPage:1,dropdownTitle:"Linked Repositories",isEmail:!1,email:"",code:"",gitee_client_id:this.$store.state.gitee_client_id,gitee_client_secret:this.$store.state.gitee_client_secret,gitee_redirect_uri:this.$store.state.gitee_redirect_uri,github_client_id:this.$store.state.github_client_id,github_client_secret:this.$store.state.github_client_secret,github_redirect_uri:this.$store.state.github_redirect_uri,access_token:this.$store.state.access_token,refresh_token:this.$store.state.refresh_token,listDialogVisible:!1,checkClaDialogVisible:!1,unLinkDialogVisible:!1,editDialogVisible:!1,menuVisible:!1,claName:"test",repositoryName:"ooo/test",shareGistChecked:!1,claOptions:[],claValue:"",metadataOptions:[{value:0,label:"",id:"",text:"",language:""}],metadataValue:"",claChoose:!1,metadataChoose:!1,linkDialogVisible:!1,shareDialogVisible:!1,createCLADialogVisible:!1,authorizeDialogVisible:!1,fileNumber:"",lineNumber:"",gistUrl:"",orgOptions:[{value:"0",label:"test"}],orgValue:"",repositoryOptions:[{value:"0",label:"test"}],repositoryValue:"",repositoryChoose:"",showConfigForm:!1,home:{height:""},user:{userName:this.$store.state.user.userName,userId:this.$store.state.user.userId,isAuthorize:!1}}},methods:Object(n["a"])(Object(n["a"])({},Object(u["b"])(["setLoginUserAct","setTokenAct"])),{},{getPath:function(){var t=this.$route.path;"/linkedRepo"===t||"/home"===t?this.activeName="first":"/signedRepo"!==t&&"/signedRepoLogin"!==t||(this.activeName="second")},tabsHandleClick:function(t,e){console.log(t,e),"0"===t.index?this.$router.push("/linkedRepo"):this.$router.push("/signedRepoLogin")},getOrgPermission:function(){"0"===this.loginType&&(window.location.href="https://github.com/login/oauth/authorize?client_id=d86f4915398dad23bffc&redirect_url=http://localhost:8080/home&scope=repo")},listChangePage:function(t){console.log(t)},getLinkedRepoList:function(t,e,o){var i={platform:this.platform};console.log(i,t,e),this.$axios({url:"/api"+s["f"],headers:{"Access-Token":t,"Refresh-Token":e,User:"".concat(this.platform,"/").concat(o)}}).then((function(t){console.log(t),t.data.length})).catch((function(t){console.log(t)}))},getPersonalSigned:function(){var t=this;console.log("getPersonalRepositories");var e={userName:this.user.userName};this.$axios({url:s["h"],methods:"post",data:e,headers:{access_token:this.$store.state.access_token,refresh_token:this.refresh_token}}).then((function(e){console.log(e),200===e.data.code&&(t.tableData=e.data.data)})).catch((function(t){console.log(t)}))},getCompanyRepositories:function(){var t=this;console.log("getCompanyRepositories");var e={userName:this.user.userName};this.$axios({url:s["e"],methods:"post",data:e,headers:{access_token:this.$store.state.access_token,refresh_token:this.refresh_token}}).then((function(e){console.log(e),200===e.data.code&&(t.tableData=e.data.data)})).catch((function(t){console.log(t)}))},getCompanyPersonRepositories:function(){var t=this;console.log("getCompanyPersonRepositories");var e={userName:this.user.userName};this.$axios({url:s["d"],methods:"post",data:e,headers:{access_token:this.$store.state.access_token,refresh_token:this.refresh_token}}).then((function(e){console.log(e),200===e.data.code&&(t.tableData=e.data.data)})).catch((function(t){console.log(t)}))},newWindow:function(){window.open("https://github.com/ouchengle")},openLinkDialog:function(){this.repositoryChoose&&this.claChoose&&this.isEmail&&(this.linkDialogVisible=!0)},verifyEmail:function(){var t=this.email,e=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(!e.test(t))return this.isEmail=!1,!1;this.isEmail=!0},linkRepository:function(){var t=this;this.linkLoading=!0;var e={repo_id:"".concat(this.repositoryOptions[this.repositoryValue].repoName),cla_id:this.claOptions[this.claValue].id,org_email:this.email,platform:this.platform,org_id:"".concat(this.repositoryOptions[this.repositoryValue].org),cla_language:this.claOptions[this.claValue].language,submitter:"".concat(this.platform,"/").concat(this.$store.state.user.userName),metadata_id:""};console.log(e),this.$axios({url:"/api"+s["j"],method:"post",data:e,headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(e){t.linkLoading=!1,t.$message.success("success"),console.log(e),t.claValue="",t.repositoryValue="",t.claChoose=!1,t.repositoryChoose=!1,t.email="",t.linkDialogVisible=!1,t.getLinkedRepoList(t.$store.state.access_token,t.$store.state.refresh_token,t.$store.state.user.userName)})).catch((function(e){console.log(e),t.linkLoading=!1,t.$message.error("failed")}))},checkCla:function(){console.log("checkCla"),this.$router.push("/checkCla")},editHandleClick:function(t){console.log(t),this.editDialogVisible=!0},toCreateCLA:function(){this.$router.push("/createCLA")},toCreateMetadata:function(){this.$router.push("/createMetadata")},changeCla:function(t){this.claChoose=!0,this.previewText=this.claOptions[t].text},changeMetadata:function(t){this.metadataChoose=!0,this.previewText=this.metadataOptions[t].text},createCLA:function(){this.createCLADialogVisible=!0},createMetadata:function(){this.createMetadataDialogVisible=!0},authorize:function(){console.log("authorize"),this.authorizeDialogVisible=!0},changeRepository:function(t){console.log(this.repositoryValue),this.repositoryChoose=!0},getRepositoriesOfOrg:function(t,e){var o=this,i={access_token:this.$store.state.access_token,org:t,page:1,per_page:10};console.log("getRepositoriesOfOrg",i),this.$axios({url:"https://gitee.com/api/v5/orgs/".concat(t,"/repos"),params:i}).then((function(i){console.log(i),200===i.status&&(o.repositoryOptions=[],i.data.forEach((function(i,a){o.repositoryOptions.push({value:a,org:t,org_id:e,repoName:i.name,label:"".concat(t,"/").concat(i.name),id:i.id})})))})).catch((function(t){console.log(t)}))},getOrgsInfo:function(){var t=this,e={access_token:this.$store.state.access_token,admin:!0,page:1,per_page:10};console.log("getOrgsInfo",e),this.$axios({url:s["g"],methods:"get",params:e}).then((function(e){console.log(e),200===e.status&&(t.orgOptions=[],e.data.forEach((function(e,o){t.orgOptions.push({value:o,label:e.login,id:e.id}),t.getRepositoriesOfOrg(e.login,e.id)})))})).catch((function(t){console.log(t)}))},getCLA:function(){var t=this;console.log("getCLA"),this.$axios({url:"/api"+s["c"],headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(e){console.log(e),e.data.length&&(t.claOptions=[],e.data.forEach((function(e,o){t.claOptions.push({value:o,label:e.name,id:e.id,text:e.text,language:e.language})})))})).catch((function(t){console.log(t)}))},closeConfigForm:function(){this.showConfigForm=!1,this.setClientHeight()},configCla:function(){this.showConfigForm=!0,this.home.height="auto",this.getCLA(),this.getOrgsInfo()},setClientHeight:function(){var t=this;this.$nextTick((function(){r["a"]()>document.getElementById("home").offsetHeight?t.home.height=r["a"]()+"px":t.home.height=document.getElementById("home").offsetHeight}))},change:function(t){console.log(t),this.value=t},openFullScreen:function(){var t=this,e=this.$loading({lock:!0,background:"rgba(255, 255, 255, 0.8)"});setInterval((function(){t.$store.state.user.userName&&t.$store.state.ready&&e.close()}),500)}}),created:function(){this.getPath(),this.openFullScreen()},mounted:function(){this.setClientHeight()}},h=f,d=(o("f1b4"),o("2877")),p=Object(d["a"])(h,i,a,!1,null,"2cd298dd",null);e["default"]=p.exports},cf23:function(t,e,o){},dbb4:function(t,e,o){var i=o("23e7"),a=o("83ab"),n=o("56ef"),s=o("fc6a"),r=o("06cf"),c=o("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,o,i=s(t),a=r.f,l=n(i),u={},f=0;while(l.length>f)o=a(i,e=l[f++]),void 0!==o&&c(u,e,o);return u}})},e439:function(t,e,o){var i=o("23e7"),a=o("d039"),n=o("fc6a"),s=o("06cf").f,r=o("83ab"),c=a((function(){s(1)})),l=!r||c;i({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,e){return s(n(t),e)}})},e538:function(t,e,o){var i=o("b622");e.f=i},f1b4:function(t,e,o){"use strict";var i=o("abaa"),a=o.n(i);a.a},fd2d:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{staticClass:"footer"},[o("el-col",{staticClass:"left",attrs:{span:8}},[o("span",[t._v("© 2020 HUAWEI SE")])]),o("el-col",{staticClass:"center",attrs:{span:8}},[o("span",[t._v("Made with "),o("svg-icon",{attrs:{"icon-class":"heart"}}),t._v(" from the GitHub team at HUAWEI ")],1)]),o("el-col",{staticClass:"right",attrs:{span:8}},[o("div",[o("span",{staticClass:"pointer"},[t._v("Terms of Service & Privacy Policy")]),o("span",{staticClass:"pointer"},[o("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),t._v("Open an issue")],1)])])],1)},a=[],n={name:"Footer"},s=n,r=(o("1460"),o("2877")),c=Object(r["a"])(s,i,a,!1,null,"bc0631b2",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-152337de.16e4fed0.js.map