(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b694e680"],{"0418":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("el-col",{attrs:{span:8}},[i("div",{staticStyle:{display:"flex"}},[i("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:this.$store.state.user.userImg,alt:""},on:{click:function(t){return e.newWindow()}}}),i("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[i("span",[e._v("Hi, "),i("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[e._v(e._s(this.$store.state.user.userName)+"!")])])])])]),i("el-col",{attrs:{span:8}},[i("div",[i("svg-icon",{staticClass:"pointer",staticStyle:{height:"100%",width:"3rem"},attrs:{id:"svg_logo","icon-class":"CLA_SYSTEM_BLACK"},on:{click:function(t){return e.toHome()}}})],1)]),i("el-col",{attrs:{span:8}},[i("div",[i("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[i("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(t){return e.loginOut()}}})],1)],1)])],1)},a=[],n={name:"Header",computed:{},data:function(){return{}},created:function(){},methods:{toHome:function(){this.$router.push("/home")},loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},s=n,r=(i("a80d"),i("2877")),l=Object(r["a"])(s,o,a,!1,null,"5637794e",null);t["a"]=l.exports},"057f":function(e,t,i){var o=i("fc6a"),a=i("241c").f,n={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(e){try{return a(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==n.call(e)?r(e):a(o(e))}},1276:function(e,t,i){"use strict";var o=i("d784"),a=i("44e7"),n=i("825a"),s=i("1d80"),r=i("4840"),l=i("8aa5"),c=i("50c4"),u=i("14c3"),h=i("9263"),f=i("d039"),g=[].push,p=Math.min,d=4294967295,m=!f((function(){return!RegExp(d,"y")}));o("split",2,(function(e,t,i){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,i){var o=String(s(this)),n=void 0===i?d:i>>>0;if(0===n)return[];if(void 0===e)return[o];if(!a(e))return t.call(o,e,n);var r,l,c,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=new RegExp(e.source,f+"g");while(r=h.call(m,o)){if(l=m.lastIndex,l>p&&(u.push(o.slice(p,r.index)),r.length>1&&r.index<o.length&&g.apply(u,r.slice(1)),c=r[0].length,p=l,u.length>=n))break;m.lastIndex===r.index&&m.lastIndex++}return p===o.length?!c&&m.test("")||u.push(""):u.push(o.slice(p)),u.length>n?u.slice(0,n):u}:"0".split(void 0,0).length?function(e,i){return void 0===e&&0===i?[]:t.call(this,e,i)}:t,[function(t,i){var a=s(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,a,i):o.call(String(a),t,i)},function(e,a){var s=i(o,e,this,a,o!==t);if(s.done)return s.value;var h=n(e),f=String(this),g=r(h,RegExp),v=h.unicode,b=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(m?"y":"g"),y=new g(m?h:"^(?:"+h.source+")",b),_=void 0===a?d:a>>>0;if(0===_)return[];if(0===f.length)return null===u(y,f)?[f]:[];var C=0,k=0,w=[];while(k<f.length){y.lastIndex=m?k:0;var x,O=u(y,m?f:f.slice(k));if(null===O||(x=p(c(y.lastIndex+(m?0:k)),f.length))===C)k=l(f,k,v);else{if(w.push(f.slice(C,k)),w.length===_)return w;for(var S=1;S<=O.length-1;S++)if(w.push(O[S]),w.length===_)return w;k=C=x}}return w.push(f.slice(C)),w}]}),!m)},"14c3":function(e,t,i){var o=i("c6b6"),a=i("9263");e.exports=function(e,t){var i=e.exec;if("function"===typeof i){var n=i.call(e,t);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==o(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"44e7":function(e,t,i){var o=i("861d"),a=i("c6b6"),n=i("b622"),s=n("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==a(e))}},"4de4":function(e,t,i){"use strict";var o=i("23e7"),a=i("b727").filter,n=i("1dde"),s=i("ae40"),r=n("filter"),l=s("filter");o({target:"Array",proto:!0,forced:!r||!l},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b");var o=i("ade3");function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){Object(o["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}},"615a":function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var o=function(){return window.innerHeight}},6547:function(e,t,i){var o=i("a691"),a=i("1d80"),n=function(e){return function(t,i){var n,s,r=String(a(t)),l=o(i),c=r.length;return l<0||l>=c?e?"":void 0:(n=r.charCodeAt(l),n<55296||n>56319||l+1===c||(s=r.charCodeAt(l+1))<56320||s>57343?e?r.charAt(l):n:e?r.slice(l,l+2):s-56320+(n-55296<<10)+65536)}};e.exports={codeAt:n(!1),charAt:n(!0)}},"746f":function(e,t,i){var o=i("428f"),a=i("5135"),n=i("e538"),s=i("9bf2").f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});a(t,e)||s(t,e,{value:n.f(e)})}},"8aa5":function(e,t,i){"use strict";var o=i("6547").charAt;e.exports=function(e,t,i){return t+(i?o(e,t).length:1)}},9263:function(e,t,i){"use strict";var o=i("ad6d"),a=i("9f7f"),n=RegExp.prototype.exec,s=String.prototype.replace,r=n,l=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],h=l||u||c;h&&(r=function(e){var t,i,a,r,h=this,f=c&&h.sticky,g=o.call(h),p=h.source,d=0,m=e;return f&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),m=String(e).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==e[h.lastIndex-1])&&(p="(?: "+p+")",m=" "+m,d++),i=new RegExp("^(?:"+p+")",g)),u&&(i=new RegExp("^"+p+"$(?!\\s)",g)),l&&(t=h.lastIndex),a=n.call(f?i:h,m),f?a?(a.input=a.input.slice(d),a[0]=a[0].slice(d),a.index=h.lastIndex,h.lastIndex+=a[0].length):h.lastIndex=0:l&&a&&(h.lastIndex=h.global?a.index+a[0].length:t),u&&a&&a.length>1&&s.call(a[0],i,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(a[r]=void 0)})),a}),e.exports=r},9906:function(e,t,i){"use strict";var o=i("d0da"),a=i.n(o);a.a},"9f7f":function(e,t,i){"use strict";var o=i("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=o((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=o((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a4d3:function(e,t,i){"use strict";var o=i("23e7"),a=i("da84"),n=i("d066"),s=i("c430"),r=i("83ab"),l=i("4930"),c=i("fdbf"),u=i("d039"),h=i("5135"),f=i("e8b5"),g=i("861d"),p=i("825a"),d=i("7b0b"),m=i("fc6a"),v=i("c04e"),b=i("5c6c"),y=i("7c73"),_=i("df75"),C=i("241c"),k=i("057f"),w=i("7418"),x=i("06cf"),O=i("9bf2"),S=i("d1e7"),V=i("9112"),E=i("6eeb"),A=i("5692"),L=i("f772"),$=i("d012"),T=i("90e3"),D=i("b622"),R=i("e538"),z=i("746f"),N=i("d44e"),P=i("69f3"),I=i("b727").forEach,j=L("hidden"),H="Symbol",F="prototype",U=D("toPrimitive"),B=P.set,M=P.getterFor(H),W=Object[F],q=a.Symbol,Y=n("JSON","stringify"),G=x.f,K=O.f,J=k.f,Z=S.f,Q=A("symbols"),X=A("op-symbols"),ee=A("string-to-symbol-registry"),te=A("symbol-to-string-registry"),ie=A("wks"),oe=a.QObject,ae=!oe||!oe[F]||!oe[F].findChild,ne=r&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,i){var o=G(W,t);o&&delete W[t],K(e,t,i),o&&e!==W&&K(W,t,o)}:K,se=function(e,t){var i=Q[e]=y(q[F]);return B(i,{type:H,tag:e,description:t}),r||(i.description=t),i},re=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof q},le=function(e,t,i){e===W&&le(X,t,i),p(e);var o=v(t,!0);return p(i),h(Q,o)?(i.enumerable?(h(e,j)&&e[j][o]&&(e[j][o]=!1),i=y(i,{enumerable:b(0,!1)})):(h(e,j)||K(e,j,b(1,{})),e[j][o]=!0),ne(e,o,i)):K(e,o,i)},ce=function(e,t){p(e);var i=m(t),o=_(i).concat(pe(i));return I(o,(function(t){r&&!he.call(i,t)||le(e,t,i[t])})),e},ue=function(e,t){return void 0===t?y(e):ce(y(e),t)},he=function(e){var t=v(e,!0),i=Z.call(this,t);return!(this===W&&h(Q,t)&&!h(X,t))&&(!(i||!h(this,t)||!h(Q,t)||h(this,j)&&this[j][t])||i)},fe=function(e,t){var i=m(e),o=v(t,!0);if(i!==W||!h(Q,o)||h(X,o)){var a=G(i,o);return!a||!h(Q,o)||h(i,j)&&i[j][o]||(a.enumerable=!0),a}},ge=function(e){var t=J(m(e)),i=[];return I(t,(function(e){h(Q,e)||h($,e)||i.push(e)})),i},pe=function(e){var t=e===W,i=J(t?X:m(e)),o=[];return I(i,(function(e){!h(Q,e)||t&&!h(W,e)||o.push(Q[e])})),o};if(l||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=T(e),i=function(e){this===W&&i.call(X,e),h(this,j)&&h(this[j],t)&&(this[j][t]=!1),ne(this,t,b(1,e))};return r&&ae&&ne(W,t,{configurable:!0,set:i}),se(t,e)},E(q[F],"toString",(function(){return M(this).tag})),E(q,"withoutSetter",(function(e){return se(T(e),e)})),S.f=he,O.f=le,x.f=fe,C.f=k.f=ge,w.f=pe,R.f=function(e){return se(D(e),e)},r&&(K(q[F],"description",{configurable:!0,get:function(){return M(this).description}}),s||E(W,"propertyIsEnumerable",he,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:q}),I(_(ie),(function(e){z(e)})),o({target:H,stat:!0,forced:!l},{for:function(e){var t=String(e);if(h(ee,t))return ee[t];var i=q(t);return ee[t]=i,te[i]=t,i},keyFor:function(e){if(!re(e))throw TypeError(e+" is not a symbol");if(h(te,e))return te[e]},useSetter:function(){ae=!0},useSimple:function(){ae=!1}}),o({target:"Object",stat:!0,forced:!l,sham:!r},{create:ue,defineProperty:le,defineProperties:ce,getOwnPropertyDescriptor:fe}),o({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ge,getOwnPropertySymbols:pe}),o({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(e){return w.f(d(e))}}),Y){var de=!l||u((function(){var e=q();return"[null]"!=Y([e])||"{}"!=Y({a:e})||"{}"!=Y(Object(e))}));o({target:"JSON",stat:!0,forced:de},{stringify:function(e,t,i){var o,a=[e],n=1;while(arguments.length>n)a.push(arguments[n++]);if(o=t,(g(t)||void 0!==e)&&!re(e))return f(t)||(t=function(e,t){if("function"==typeof o&&(t=o.call(this,e,t)),!re(t))return t}),a[1]=t,Y.apply(null,a)}})}q[F][U]||V(q[F],U,q[F].valueOf),N(q,H),$[j]=!0},a80d:function(e,t,i){"use strict";var o=i("d15f"),a=i.n(o);a.a},ac1f:function(e,t,i){"use strict";var o=i("23e7"),a=i("9263");o({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,i){"use strict";var o=i("825a");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ade3:function(e,t,i){"use strict";function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,"a",(function(){return o}))},b64b:function(e,t,i){var o=i("23e7"),a=i("7b0b"),n=i("df75"),s=i("d039"),r=s((function(){n(1)}));o({target:"Object",stat:!0,forced:r},{keys:function(e){return n(a(e))}})},bb51:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:e.home,attrs:{id:"home"}},[i("Header"),i("el-col",{attrs:{offset:4,span:16,id:"section"}},[i("div",{attrs:{id:"configBtDiv"}},[e.showConfigForm?e._e():i("el-button",{staticClass:"configBt",attrs:{type:"primary"},on:{click:function(t){return e.configCla()}}},[e._v(" Configure CLA ")])],1),i("el-row",[e.showConfigForm?i("el-row",[i("div",{staticStyle:{"padding-bottom":"1.5rem","font-size":"1.3rem"}},[e._v("Configure CLA")]),i("el-row",[i("el-col",{attrs:{span:10}},[i("div",{staticStyle:{"background-color":"white"}},[i("div",{staticStyle:{"text-align":"right",padding:"1rem"}},[i("svg-icon",{attrs:{"icon-class":"close"},on:{click:function(t){return e.closeConfigForm()}}})],1),i("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[e._v(" ① Choose a org or repository "),e.user.isAuthorize?e._e():i("span",{staticStyle:{"font-size":".8rem","text-decoration":"underline",cursor:"pointer"},on:{click:function(t){return e.authorize()}}},[e._v("(want to link an org?)")])]),i("div",{staticStyle:{padding:"0 2rem"}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"select org",size:"medium",clearable:"",filterable:""},on:{change:e.changeOrg},model:{value:e.orgValue,callback:function(t){e.orgValue=t},expression:"orgValue"}},e._l(e.orgOptions,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),i("el-col",{attrs:{span:12}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"select repo",size:"medium",clearable:"",filterable:""},on:{change:e.changeRepository},model:{value:e.repositoryValue,callback:function(t){e.repositoryValue=t},expression:"repositoryValue"}},e._l(e.repositoryOptions,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),i("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[e._v(" ② Choose a CLA "),i("span",{staticStyle:{"font-size":".8rem","text-decoration":"underline",cursor:"pointer"},on:{click:function(t){return e.createCLA()}}},[e._v("(don't have one?) ")])]),i("div",{staticStyle:{padding:"0 2rem 1rem 2rem"}},[i("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[i("el-collapse-item",{attrs:{title:"cla filter",name:"1"}},[i("el-row",{attrs:{gutter:10}},[i("el-col",{attrs:{span:12}},[i("el-select",{attrs:{placeholder:"cla type",size:"medium",clearable:""},on:{change:e.claTypeChange},model:{value:e.claTypeValue,callback:function(t){e.claTypeValue=t},expression:"claTypeValue"}},e._l(e.claTypeOptions,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),i("el-col",{attrs:{span:12}},[i("el-select",{attrs:{placeholder:"language",size:"medium",clearable:""},on:{change:e.claLanguageChange},model:{value:e.claLanguageValue,callback:function(t){e.claLanguageValue=t},expression:"claLanguageValue"}},e._l(e.languageOptions,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1)],1),i("div",{staticStyle:{padding:"0 2rem"}},[i("el-select",{ref:"claSelect",staticStyle:{width:"100%"},attrs:{placeholder:"select cla",size:"medium",filterable:""},on:{"visible-change":e.claVisibleChange,change:e.changeCla},model:{value:e.claValue,callback:function(t){e.claValue=t},expression:"claValue"}},e._l(e.claOptions,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),i("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[e._v(" ③ Email "),i("span",{staticStyle:{"font-size":".8rem","text-decoration":"underline",cursor:"pointer"},on:{click:function(t){return e.toAuthorizedEmail()}}},[e._v("(click to grant authorized email) ")])]),i("div",{staticStyle:{padding:"0 2rem"}},[i("el-input",{attrs:{readonly:"",size:"medium",placeholder:"authorization email"},on:{input:e.verifyEmail},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),i("div",{class:{"linkBt pointer":e.claChoose&&e.orgChoose&&e.isEmail,disableClass:!(e.claChoose&&e.repositoryChoose&&e.isEmail)},on:{click:function(t){return e.openLinkDialog()}}},[i("div",[i("svg-icon",{attrs:{"icon-class":"link"}}),e._v(" LINK ")],1)])])]),e.showPreviewCla?i("el-col",{attrs:{span:12,offset:2}},[i("el-input",{staticStyle:{"white-space":"pre-wrap"},attrs:{rows:"16",readonly:"",type:"textarea",placeholder:"preview cla"},model:{value:e.previewText,callback:function(t){e.previewText=t},expression:"previewText"}})],1):e._e()],1)],1):e._e()],1),i("div",[i("el-tabs",{on:{"tab-click":e.tabsHandleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{staticStyle:{"margin-top":"1rem"},attrs:{label:"Linked Repositories",name:"first"}})],1),i("router-view")],1)],1),i("Footer"),i("el-dialog",{attrs:{top:"5vh",title:"",visible:e.authorizeDialogVisible,width:"35%"},on:{"update:visible":function(t){e.authorizeDialogVisible=t}}},[i("div",{staticStyle:{"text-align":"left"}},[i("p",{staticClass:"dialogDesc"},[e._v("Why link organizations?")]),i("p",[e._v("If you link an organization with your CLA, CLA system sets a web hook on your organization and listens to Pull Requests of all repositories in the organization. That means that your CLA becomes active for each existing and future repositories of your organization.")]),i("p",{staticClass:"dialogDesc"},[e._v("How can I link an organization?")]),i("p",[e._v("CLA system needs an additional authorization from you to be able to create web hooks for organizations. To grant CLA system appropriate rights just click on the button below. For more information on Authorization scopes see github documentation")]),i("div",{staticClass:"linkBt pointer",staticStyle:{"font-size":"1.1rem"},on:{click:function(t){return e.getOrgPermission()}}},[e._v(" Yes,let's go for it ")])])]),i("el-dialog",{attrs:{top:"5vh",title:"",visible:e.createCLADialogVisible,width:"35%"},on:{"update:visible":function(t){e.createCLADialogVisible=t}}},[i("div",{staticStyle:{"text-align":"left"}},[i("p",{staticClass:"dialogDesc"},[e._v("How can I create a CLA Gist?")]),i("p",[e._v("To "),i("span",{staticStyle:{cursor:"pointer","text-decoration":"underline",color:"blue"},on:{click:function(t){return e.toCreateCLA()}}},[e._v("createCLA")]),e._v(" enter a file name and paste the content of your CLA.")]),i("p",{staticClass:"dialogDesc"},[e._v("What happens if I edit the Gist file?")]),i("p",[e._v("CLA system will always show you the current version of your Gist file. Users who accept your CLA sign the current version. If you change the content of your CLA, each contributor has to accept the new version when they create a new pull request.")])]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})]),i("el-dialog",{attrs:{top:"5vh",title:"",visible:e.shareDialogVisible,width:"35%"},on:{"update:visible":function(t){e.shareDialogVisible=t}}},[i("div",{staticStyle:{"text-align":"left"}},[i("p",{staticClass:"dialogDesc"},[e._v("What happens if I choose to share the gist with multiple repos or orgs?")]),i("p",[e._v("Contributors will simply need to sign only once for any of the repos or orgs linked with the same shared gist.")]),i("p",{staticClass:"dialogDesc"},[e._v("Are previous CLA signatures still valid after I choose to share the gist with multiple repos or orgs?")]),i("p",[e._v("Yes, but the scope of the previous signatures are still limited to the previous repo or org.")]),i("p",{staticClass:"dialogDesc"},[e._v("What happens if I uncheck the box and choose NOT to share the gist any more?")]),i("p",[e._v("Previous contributors that have signed the shared gist will have to sign again.")])]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})]),i("el-dialog",{attrs:{top:"5vh",title:"",visible:e.linkDialogVisible,width:"35%"},on:{"update:visible":function(t){e.linkDialogVisible=t}}},[i("div",[i("p",{staticClass:"dialogDesc"},[e._v("Would you like to link this CLA to your repository?")]),i("div",[i("el-row",[i("svg-icon",{staticStyle:{width:"100%",height:"100%"},attrs:{"icon-class":"popup_link"}})],1),i("el-row",[e.claChoose?i("el-col",{attrs:{offset:6,span:5}},[e._v(" "+e._s(e.claOptions[e.claValue].label)+" ")]):e._e(),e.orgChoose&&e.repositoryChoose?i("el-col",{attrs:{offset:2,span:5}},[e._v(" "+e._s(e.orgOptions[e.orgValue].label)+"/"+e._s(e.repositoryOptions[e.repositoryValue].label)+" ")]):e._e(),e.orgChoose&&!e.repositoryChoose?i("el-col",{attrs:{offset:2,span:5}},[e._v(" "+e._s(e.orgOptions[e.orgValue].label)+" ")]):e._e()],1)],1),i("div",{staticStyle:{padding:"0 3rem",color:"#409EFF"}}),i("div",{staticStyle:{padding:"2rem 6rem","text-align":"left","font-size":"1.3rem"}},[i("p",{staticStyle:{"text-align":"center"}},[e._v("CLA system will...")]),i("ul",[i("li",[e._v("Create a webhook in your repository and listen for pull requests")]),i("li",[e._v("Set a pull request CLA status")]),i("li",[e._v("Comment on pull requests")])])]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.linkDialogVisible=!1}}},[e._v("Cancel")]),i("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.linkLoading,expression:"linkLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:function(t){return e.linkRepository()}}},[e._v("Yes,Let's do this!")])],1)])]),i("el-dialog",{attrs:{top:"5vh",title:"",visible:e.emailDialogVisible,width:"35%"},on:{"update:visible":function(t){e.emailDialogVisible=t}}},[i("div",[i("p",{staticClass:"dialogDesc"},[e._v("You need to select an email address for your organization to contact")]),i("div",[i("el-row",[i("el-col",{attrs:{offset:6,span:12}},[i("el-select",{attrs:{placeholder:"Select email type",size:"medium",filterable:""},on:{change:e.changeEmailType},model:{value:e.emailType,callback:function(t){e.emailType=t},expression:"emailType"}},e._l(e.emailTypeArr,(function(e){return i("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1)],1)],1),i("div",{staticStyle:{padding:"0 3rem",color:"#409EFF"}}),i("div",{staticStyle:{padding:"2rem 6rem","text-align":"left","font-size":"1.3rem"}},[i("p",{staticStyle:{"text-align":"center"}},[e._v("CLA system will...")]),i("ul",[i("li",[e._v("Send the white list management account number to the enterprise through the mailbox")]),i("li",[e._v("Send PDF signature documents to the signer through this email address")])])]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.emailDialogVisible=!1}}},[e._v("Cancel")]),i("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.linkLoading,expression:"linkLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:function(t){return e.authorizeEmail()}}},[e._v("Yes,Let's do this!")])],1)])])],1)},a=[],n=(i("99af"),i("4160"),i("b0c0"),i("ac1f"),i("1276"),i("159b"),i("5530")),s=i("221d"),r=i("615a"),l=i("0418"),c=i("fd2d"),u=i("2f62");window.onresize=function(){r["a"]()>document.getElementById("home").offsetHeight&&(document.getElementById("home").style.height=r["a"]()+"px")};var h={name:"Home",components:{Header:l["a"],Footer:c["a"]},computed:{},watch:{$route:function(e,t){var i=e.path;"/linkedRepo"===i||"/home"===i?this.activeName="first":"/signedRepo"!==i&&"/signedRepoLogin"!==i||(this.activeName="second")}},data:function(){return{emailTypeArr:[{value:"gmail",label:"gmail"},{value:"qq",label:"qq"},{value:"163",label:"163"}],emailType:"",emailDialogVisible:!1,filterChange:!0,claLanguageValue:"",claTypeValue:"",claTypeOptions:[{label:"individual",value:"individual"},{label:"corporation",value:"corporation"}],languageOptions:[{label:"english",value:"english"},{label:"chinese",value:"chinese"},{label:"japanese",value:"japanese"}],createMetadataDialogVisible:!1,linkLoading:!1,platform:this.$store.state.platform,isVerify:!1,activeName:"first",previewShow:!1,previewText:"",loginType:this.$store.state.loginType,tableType:1,tableShow:!0,listCurrentPage:1,dropdownTitle:"Linked Repositories",isEmail:!1,email:"",code:"",gitee_client_id:this.$store.state.gitee_client_id,gitee_client_secret:this.$store.state.gitee_client_secret,gitee_redirect_uri:this.$store.state.gitee_redirect_uri,github_client_id:this.$store.state.github_client_id,github_client_secret:this.$store.state.github_client_secret,github_redirect_uri:this.$store.state.github_redirect_uri,access_token:this.$store.state.access_token,refresh_token:this.$store.state.refresh_token,listDialogVisible:!1,checkClaDialogVisible:!1,unLinkDialogVisible:!1,editDialogVisible:!1,menuVisible:!1,claName:"",repositoryName:"",shareGistChecked:!1,claOptions:[],claValue:"",metadataOptions:[{value:0,label:"",id:"",text:"",language:""}],metadataValue:"",showPreviewCla:!1,claChoose:!1,metadataChoose:!1,linkDialogVisible:!1,shareDialogVisible:!1,createCLADialogVisible:!1,authorizeDialogVisible:!1,fileNumber:"",lineNumber:"",gistUrl:"",orgOptions:[],orgValue:"",orgChoose:!1,repositoryOptions:[],repositoryValue:"",repositoryChoose:"",showConfigForm:!1,home:{height:""},user:{userName:this.$store.state.user.userName,userId:this.$store.state.user.userId,isAuthorize:!1}}},methods:Object(n["a"])(Object(n["a"])({},Object(u["b"])(["setLoginUserAct","setTokenAct","getLinkedRepoListAct"])),{},{authorizeEmail:function(){console.log("authorizeEmail")},changeEmailType:function(e){console.log("changeEmailType",e)},getEmailTypeArr:function(){var e=this;this.$axios({url:"/api"+s["getEmailTypeArr"]}).then((function(t){console.log(t),e.emailTypeArr=t.data})).catch((function(e){console.log(e)}))},toAuthorizedEmail:function(){this.emailDialogVisible=!0},resetCla:function(){this.claChoose=!1,this.filterChange=!0,this.claValue="",this.previewText="",this.getCLA()},claTypeChange:function(e){console.log(e),this.resetCla()},claLanguageChange:function(e){console.log(e),this.resetCla()},handleChange:function(e){console.log(e)},getPath:function(){var e=this.$route.path;"/linkedRepo"===e||"/home"===e?this.activeName="first":"/signedRepo"!==e&&"/signedRepoLogin"!==e||(this.activeName="second")},tabsHandleClick:function(e,t){console.log(e,t),"0"===e.index?this.$router.push("/linkedRepo"):this.$router.push("/signedRepoLogin")},getOrgPermission:function(){"gitee"===this.platform?window.location.href="https://gitee.com/oauth/authorize?client_id=2632e89d3dfb17ce941d2d2b45efc6f235afb4941ddb67578adda83aa33ab6a2&redirect_uri=http://139.159.224.207:60031/api/v1/login?platform=gitee&response_type=code&scope":window.location.href="https://github.com/login/oauth/authorize?client_id=d86f4915398dad23bffc&redirect_url=http://localhost:8080/home&scope=repo"},listChangePage:function(e){console.log(e)},getPersonalSigned:function(){var e=this;console.log("getPersonalRepositories");var t={userName:this.user.userName};this.$axios({url:s["v"],methods:"post",data:t,headers:{access_token:this.$store.state.access_token,refresh_token:this.refresh_token}}).then((function(t){console.log(t),200===t.data.code&&(e.tableData=t.data.data)})).catch((function(e){console.log(e)}))},getCompanyRepositories:function(){var e=this;console.log("getCompanyRepositories");var t={userName:this.user.userName};this.$axios({url:s["q"],methods:"post",data:t,headers:{access_token:this.$store.state.access_token,refresh_token:this.refresh_token}}).then((function(t){console.log(t),200===t.data.code&&(e.tableData=t.data.data)})).catch((function(e){console.log(e)}))},getCompanyPersonRepositories:function(){var e=this;console.log("getCompanyPersonRepositories");var t={userName:this.user.userName};this.$axios({url:s["p"],methods:"post",data:t,headers:{access_token:this.$store.state.access_token,refresh_token:this.refresh_token}}).then((function(t){console.log(t),200===t.data.code&&(e.tableData=t.data.data)})).catch((function(e){console.log(e)}))},newWindow:function(){window.open("https://github.com/ouchengle")},openLinkDialog:function(){this.orgChoose&&this.claChoose&&this.isEmail&&(this.linkDialogVisible=!0)},verifyEmail:function(){var e=this.email,t=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(!t.test(e))return this.isEmail=!1,!1;this.isEmail=!0},linkRepository:function(){var e=this;this.linkLoading=!0;var t={repo_id:"".concat(this.repositoryOptions[this.repositoryValue].repoName),cla_id:this.claOptions[this.claValue].id,org_email:this.email,platform:this.platform,org_id:"".concat(this.repositoryOptions[this.repositoryValue].org),cla_language:this.claOptions[this.claValue].language,submitter:"".concat(this.platform,"/").concat(this.$store.state.user.userName),metadata_id:""};console.log(t),this.$axios({url:"/api"+s["z"],method:"post",data:t,headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(t){e.linkLoading=!1,e.$message.success("success"),console.log(t),e.claValue="",e.metadataValue="",e.repositoryValue="",e.claChoose=!1,e.metadataChoose=!1,e.repositoryChoose=!1,e.email="",e.linkDialogVisible=!1;var i={access_token:e.$store.state.access_token,refresh_token:e.$store.state.refresh_token,userName:e.$store.state.user.userName,platform:e.platform};e.getLinkedRepoListAct(i)})).catch((function(t){console.log(t),e.linkLoading=!1,e.$message.closeAll(),e.$message.error("failed")}))},checkCla:function(){console.log("checkCla"),this.$router.push("/checkCla")},editHandleClick:function(e){console.log(e),this.editDialogVisible=!0},toCreateCLA:function(){this.$router.push("/createCLA2")},toCreateMetadata:function(){this.$router.push("/createMetadata")},claVisibleChange:function(e){e&&this.filterChange&&(this.getCLA(),this.filterChange=!1)},changeCla:function(e){this.claValue=e,console.log(this.claOptions,this.claValue),this.showPreviewCla=!0,this.claChoose=!0,this.previewText=this.claOptions[e].text},mataVisibleChange:function(e){""!==this.metadataValue&&e&&(this.previewText=this.metadataOptions[this.metadataValue].text)},changeMetadata:function(e){this.metadataChoose=!0,this.previewText=this.metadataOptions[e].text},createCLA:function(){this.createCLADialogVisible=!0},createMetadata:function(){this.createMetadataDialogVisible=!0},authorize:function(){console.log("authorize"),this.authorizeDialogVisible=!0},changeOrg:function(e){console.log(this.orgValue),""!==this.orgValue?(this.orgChoose=!0,this.getRepositoriesOfOrg(this.orgOptions[this.orgValue].label,this.orgOptions[this.orgValue].id)):(this.orgChoose=!1,this.repositoryOptions=[],this.repositoryValue="",this.repositoryChoose=!1)},changeRepository:function(e){console.log(this.repositoryValue),""!==this.repositoryValue?this.repositoryChoose=!0:this.repositoryChoose=!1},getRepositoriesOfOrg:function(e,t){var i=this,o={access_token:this.$store.state.access_token,org:e,page:1,per_page:10};console.log("getRepositoriesOfOrg",o),this.$axios({url:"https://gitee.com/api/v5/orgs/".concat(e,"/repos"),params:o}).then((function(o){console.log(o),200===o.status&&(i.repositoryOptions=[],o.data.forEach((function(o,a){i.repositoryOptions.push({value:a,org:e,org_id:t,repoName:o.name,label:o.name,id:o.id})})))})).catch((function(e){console.log(e)}))},getOrgsInfo:function(){var e=this,t={access_token:this.$store.state.access_token,admin:!0,page:1,per_page:10};console.log("getOrgsInfo",t),this.$axios({url:s["u"],params:t}).then((function(t){console.log(t),200===t.status&&(e.orgOptions=[],t.data.forEach((function(t,i){e.orgOptions.push({value:i,label:t.login,id:t.id})})))})).catch((function(e){console.log(e)}))},getCLA:function(){var e=this;console.log("getCLA"),this.$axios({url:"/api"+s["o"],params:{language:this.claLanguageValue,apply_to:this.claTypeValue},headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.$store.state.platform,"/").concat(this.$store.state.user.userName)}}).then((function(t){console.log(t),e.claOptions=[],t.data.length&&t.data.forEach((function(t,i){e.claOptions.push({value:i,label:t.name,id:t.id,text:t.text,language:t.language})}))})).catch((function(e){console.log(e)}))},closeConfigForm:function(){this.showConfigForm=!1,this.setClientHeight()},configCla:function(){this.showConfigForm=!0,this.home.height="auto",this.getOrgsInfo()},getMeta:function(){var e=this;console.log("getMeta"),this.$axios({url:"/api"+s["t"],headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(t){console.log(t),t.data.length&&(e.metadataOptions=[],t.data.forEach((function(t,i){e.metadataOptions.push({value:i,label:t.name,id:t.id,text:t.text,language:t.language})})))})).catch((function(e){console.log(e)}))},setClientHeight:function(){var e=this;this.$nextTick((function(){r["a"]()>document.getElementById("home").offsetHeight?e.home.height=r["a"]()+"px":e.home.height=document.getElementById("home").offsetHeight}))},change:function(e){console.log(e),this.value=e},openFullScreen:function(){var e=this.$loading({lock:!0,background:"rgba(255, 255, 255, 0.8)"});setInterval((function(){e.close()}),500)},getCookieData:function(){if(""!==document.cookie){var e,t=document.cookie.split("; "),i="";t.forEach((function(t,o){var a=t.split("=");"access_token"===a[0]?e=a[1]:i="refresh_token"===a[0]?a[1]:""}));var o={access_token:e,refresh_token:i};this.setTokenAct(o),this.getUserInfo(e,i)}},getUserInfo:function(e,t){var i=this,o={access_token:e};console.log(o),this.$axios({url:s["x"],params:o}).then((function(o){console.log(o);var a={userId:o.data.id,userName:o.data.login,userImg:o.data.avatar_url,userEmail:o.data.email};i.setLoginUserAct(a);var n={access_token:e,refresh_token:t,userName:o.data.login,platform:i.platform};i.getLinkedRepoListAct(n)})).catch((function(e){console.log(e)}))}}),created:function(){this.getPath(),this.openFullScreen(),this.getCookieData()},mounted:function(){this.setClientHeight()}},f=h,g=(i("9906"),i("2877")),p=Object(g["a"])(f,o,a,!1,null,"230bda19",null);t["default"]=p.exports},d0da:function(e,t,i){},d15f:function(e,t,i){},d32f:function(e,t,i){"use strict";var o=i("e35a"),a=i.n(o);a.a},d784:function(e,t,i){"use strict";i("ac1f");var o=i("6eeb"),a=i("d039"),n=i("b622"),s=i("9263"),r=i("9112"),l=n("species"),c=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),h=n("replace"),f=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),g=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i="ab".split(e);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));e.exports=function(e,t,i,h){var p=n(e),d=!a((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),m=d&&!a((function(){var t=!1,i=/a/;return"split"===e&&(i={},i.constructor={},i.constructor[l]=function(){return i},i.flags="",i[p]=/./[p]),i.exec=function(){return t=!0,null},i[p](""),!t}));if(!d||!m||"replace"===e&&(!c||!u||f)||"split"===e&&!g){var v=/./[p],b=i(p,""[e],(function(e,t,i,o,a){return t.exec===s?d&&!a?{done:!0,value:v.call(t,i,o)}:{done:!0,value:e.call(i,t,o)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),y=b[0],_=b[1];o(String.prototype,e,y),o(RegExp.prototype,p,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}h&&r(RegExp.prototype[p],"sham",!0)}},dbb4:function(e,t,i){var o=i("23e7"),a=i("83ab"),n=i("56ef"),s=i("fc6a"),r=i("06cf"),l=i("8418");o({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,i,o=s(e),a=r.f,c=n(o),u={},h=0;while(c.length>h)i=a(o,t=c[h++]),void 0!==i&&l(u,t,i);return u}})},e35a:function(e,t,i){},e439:function(e,t,i){var o=i("23e7"),a=i("d039"),n=i("fc6a"),s=i("06cf").f,r=i("83ab"),l=a((function(){s(1)})),c=!r||l;o({target:"Object",stat:!0,forced:c,sham:!r},{getOwnPropertyDescriptor:function(e,t){return s(n(e),t)}})},e538:function(e,t,i){var o=i("b622");t.f=o},fd2d:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-row",{staticClass:"footer"},[i("el-col",{staticClass:"left",attrs:{span:8}},[i("span",[e._v("© 2020 HUAWEI SE")])]),i("el-col",{staticClass:"center",attrs:{span:8}},[i("span",[e._v("Made with "),i("svg-icon",{attrs:{"icon-class":"heart"}}),e._v(" from the GitHub team at HUAWEI ")],1)]),i("el-col",{staticClass:"right",attrs:{span:8}},[i("div",[i("span",{staticClass:"pointer"},[e._v("Terms of Service & Privacy Policy")]),i("span",{staticClass:"pointer"},[i("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),e._v("Open an issue")],1)])])],1)},a=[],n={name:"Footer"},s=n,r=(i("d32f"),i("2877")),l=Object(r["a"])(s,o,a,!1,null,"023530e2",null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-b694e680.2746f783.js.map