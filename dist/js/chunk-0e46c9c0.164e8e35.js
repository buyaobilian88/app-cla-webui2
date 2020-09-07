(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e46c9c0"],{bb51:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{style:e.home,attrs:{id:"home"}},[o("Header"),o("el-col",{attrs:{offset:4,span:16,id:"section"}},[o("div",{attrs:{id:"configBtDiv"}},[e.showConfigForm?e._e():o("el-button",{staticClass:"configBt",attrs:{type:"primary"},on:{click:function(t){return e.configCla()}}},[e._v(" Configure CLA ")])],1),o("el-row",[e.showConfigForm?o("el-row",[o("div",{staticStyle:{"padding-bottom":"1.5rem","font-size":"1.3rem"}},[e._v("Configure CLA")]),o("el-row",[o("el-col",{attrs:{span:10}},[o("div",{staticStyle:{"background-color":"white"}},[o("div",{staticStyle:{"text-align":"right",padding:"1rem"}},[o("svg-icon",{attrs:{"icon-class":"close"},on:{click:function(t){return e.closeConfigForm()}}})],1),o("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[e._v(" ① Choose a org or repository "),e.user.isAuthorize?e._e():o("span",{staticStyle:{"font-size":".8rem","text-decoration":"underline",cursor:"pointer"},on:{click:function(t){return e.authorize()}}},[e._v("(want to link an org?)")])]),o("div",{staticStyle:{padding:"0 2rem"}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:12}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"select org",size:"medium",clearable:"",filterable:""},on:{change:e.changeOrg},model:{value:e.orgValue,callback:function(t){e.orgValue=t},expression:"orgValue"}},e._l(e.orgOptions,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),o("el-col",{attrs:{span:12}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"select repo",size:"medium",clearable:"",filterable:""},on:{change:e.changeRepository},model:{value:e.repositoryValue,callback:function(t){e.repositoryValue=t},expression:"repositoryValue"}},e._l(e.repositoryOptions,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),o("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[e._v(" ② Choose a CLA "),o("span",{staticStyle:{"font-size":".8rem","text-decoration":"underline",cursor:"pointer"},on:{click:function(t){return e.createCLA()}}},[e._v("(don't have one?) ")])]),o("div",{staticStyle:{padding:"0 2rem 1rem 2rem"}},[o("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[o("el-collapse-item",{attrs:{title:"cla filter",name:"1"}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-select",{attrs:{placeholder:"cla type",size:"medium",clearable:""},on:{change:e.claTypeChange},model:{value:e.claTypeValue,callback:function(t){e.claTypeValue=t},expression:"claTypeValue"}},e._l(e.claTypeOptions,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),o("el-col",{attrs:{span:12}},[o("el-select",{attrs:{placeholder:"language",size:"medium",clearable:""},on:{change:e.claLanguageChange},model:{value:e.claLanguageValue,callback:function(t){e.claLanguageValue=t},expression:"claLanguageValue"}},e._l(e.languageOptions,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1)],1),o("div",{staticStyle:{padding:"0 2rem"}},[o("el-select",{ref:"claSelect",staticStyle:{width:"100%"},attrs:{placeholder:"select cla",size:"medium",filterable:""},on:{"visible-change":e.claVisibleChange,change:e.changeCla},model:{value:e.claValue,callback:function(t){e.claValue=t},expression:"claValue"}},e._l(e.claOptions,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),o("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[e._v(" ③ Email "),o("span",{staticStyle:{"font-size":".8rem","text-decoration":"underline",cursor:"pointer"},on:{click:function(t){return e.toAuthorizedEmail()}}},[e._v("(click to grant authorized email) ")])]),o("div",{staticStyle:{padding:"0 2rem"}},[o("el-input",{attrs:{readonly:"",size:"medium",placeholder:"authorization email"},on:{input:e.verifyEmail},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),o("div",{class:{"linkBt pointer":e.claChoose&&e.orgChoose&&e.isEmail,disableClass:!(e.claChoose&&e.orgChoose&&e.isEmail)},on:{click:function(t){return e.openLinkDialog()}}},[o("div",[o("svg-icon",{attrs:{"icon-class":"link"}}),e._v(" LINK ")],1)])])]),e.showPreviewCla?o("el-col",{attrs:{span:12,offset:2}},[o("el-input",{staticStyle:{"white-space":"pre-wrap"},attrs:{rows:"16",readonly:"",type:"textarea",placeholder:"preview cla"},model:{value:e.previewText,callback:function(t){e.previewText=t},expression:"previewText"}})],1):e._e()],1)],1):e._e()],1),o("div",[o("el-tabs",{on:{"tab-click":e.tabsHandleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[o("el-tab-pane",{staticStyle:{"margin-top":"1rem"},attrs:{label:"Linked Repositories",name:"first"}})],1),o("router-view")],1)],1),o("Footer"),o("el-dialog",{attrs:{top:"5vh",title:"",visible:e.authorizeDialogVisible,width:"35%"},on:{"update:visible":function(t){e.authorizeDialogVisible=t}}},[o("div",{staticStyle:{"text-align":"left"}},[o("p",{staticClass:"dialogDesc"},[e._v("Why link organizations?")]),o("p",[e._v("If you link an organization with your CLA, CLA system sets a web hook on your organization and listens to Pull Requests of all repositories in the organization. That means that your CLA becomes active for each existing and future repositories of your organization.")]),o("p",{staticClass:"dialogDesc"},[e._v("How can I link an organization?")]),o("p",[e._v("CLA system needs an additional authorization from you to be able to create web hooks for organizations. To grant CLA system appropriate rights just click on the button below. For more information on Authorization scopes see github documentation")]),o("div",{staticClass:"linkBt pointer",staticStyle:{"font-size":"1.1rem"},on:{click:function(t){return e.getOrgPermission()}}},[e._v(" Yes,let's go for it ")])])]),o("el-dialog",{attrs:{top:"5vh",title:"",visible:e.createCLADialogVisible,width:"35%"},on:{"update:visible":function(t){e.createCLADialogVisible=t}}},[o("div",{staticStyle:{"text-align":"left"}},[o("p",{staticClass:"dialogDesc"},[e._v("How can I create a CLA Gist?")]),o("p",[e._v("To "),o("span",{staticStyle:{cursor:"pointer","text-decoration":"underline",color:"blue"},on:{click:function(t){return e.toCreateCLA()}}},[e._v("createCLA")]),e._v(" enter a file name and paste the content of your CLA.")]),o("p",{staticClass:"dialogDesc"},[e._v("What happens if I edit the Gist file?")]),o("p",[e._v("CLA system will always show you the current version of your Gist file. Users who accept your CLA sign the current version. If you change the content of your CLA, each contributor has to accept the new version when they create a new pull request.")])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})]),o("el-dialog",{attrs:{top:"5vh",title:"",visible:e.shareDialogVisible,width:"35%"},on:{"update:visible":function(t){e.shareDialogVisible=t}}},[o("div",{staticStyle:{"text-align":"left"}},[o("p",{staticClass:"dialogDesc"},[e._v("What happens if I choose to share the gist with multiple repos or orgs?")]),o("p",[e._v("Contributors will simply need to sign only once for any of the repos or orgs linked with the same shared gist.")]),o("p",{staticClass:"dialogDesc"},[e._v("Are previous CLA signatures still valid after I choose to share the gist with multiple repos or orgs?")]),o("p",[e._v("Yes, but the scope of the previous signatures are still limited to the previous repo or org.")]),o("p",{staticClass:"dialogDesc"},[e._v("What happens if I uncheck the box and choose NOT to share the gist any more?")]),o("p",[e._v("Previous contributors that have signed the shared gist will have to sign again.")])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})]),o("el-dialog",{attrs:{top:"5vh",title:"",visible:e.linkDialogVisible,width:"35%"},on:{"update:visible":function(t){e.linkDialogVisible=t}}},[o("div",[o("p",{staticClass:"dialogDesc"},[e._v("Would you like to link this CLA to your repository?")]),o("div",[o("el-row",[o("svg-icon",{staticStyle:{width:"100%",height:"100%"},attrs:{"icon-class":"popup_link"}})],1),o("el-row",[e.claChoose?o("el-col",{attrs:{offset:6,span:5}}):e._e(),e.orgChoose&&e.repositoryChoose?o("el-col",{attrs:{offset:2,span:5}}):e._e(),e.orgChoose&&!e.repositoryChoose?o("el-col",{attrs:{offset:2,span:5}}):e._e()],1)],1),o("div",{staticStyle:{padding:"0 3rem",color:"#409EFF"}}),o("div",{staticStyle:{padding:"2rem 6rem","text-align":"left","font-size":"1.3rem"}},[o("p",{staticStyle:{"text-align":"center"}},[e._v("CLA system will...")]),o("ul",[o("li",[e._v("Create a webhook in your repository and listen for pull requests")]),o("li",[e._v("Set a pull request CLA status")]),o("li",[e._v("Comment on pull requests")])])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.linkDialogVisible=!1}}},[e._v("Cancel")]),o("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.linkLoading,expression:"linkLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:function(t){return e.linkRepository()}}},[e._v("Yes,Let's do this!")])],1)])]),o("el-dialog",{attrs:{top:"5vh",title:"",visible:e.emailDialogVisible,width:"35%"},on:{"update:visible":function(t){e.emailDialogVisible=t}}},[o("div",[o("p",{staticClass:"dialogDesc"},[e._v("You need to select an email address for your organization to contact")]),o("div",[o("el-row",[o("el-col",{attrs:{offset:6,span:12}},[o("el-select",{attrs:{placeholder:"Select email type",size:"medium",filterable:""},on:{change:e.changeEmailType},model:{value:e.emailType,callback:function(t){e.emailType=t},expression:"emailType"}},e._l(e.emailTypeArr,(function(e){return o("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1)],1)],1),o("div",{staticStyle:{padding:"0 3rem",color:"#409EFF"}}),o("div",{staticStyle:{padding:"2rem 6rem","text-align":"left","font-size":"1.3rem"}},[o("p",{staticStyle:{"text-align":"center"}},[e._v("CLA system will...")]),o("ul",[o("li",[e._v("Send the white list management account number to the enterprise through the mailbox")]),o("li",[e._v("Send PDF signature documents to the signer through this email address")])])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.emailDialogVisible=!1}}},[e._v("Cancel")]),o("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.linkLoading,expression:"linkLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:function(t){return e.authorizeEmail()}}},[e._v("Yes,Let's do this!")])],1)])])],1)},s=[],a=(o("99af"),o("4160"),o("b0c0"),o("a9e3"),o("ac1f"),o("1276"),o("159b"),o("5530")),l=o("221d"),n=o("615a"),r=o("0418"),c=o("fd2d"),h=o("2f62");window.onresize=function(){console.log(n["a"](),document.getElementById("home")),n["a"]()>document.getElementById("home").offsetHeight&&(document.getElementById("home").style.height=n["a"]()+"px")};var u={name:"Home",components:{Header:r["a"],Footer:c["a"]},computed:{orgOptions:function(){return console.log(this.$store.state.orgOptions),this.$store.state.orgOptions},orgChoose:function(){return console.log(this.$store.state.orgChoose),console.log("true"==="".concat(this.$store.state.orgChoose)),"true"==="".concat(this.$store.state.orgChoose)},claChoose:function(){return console.log(this.$store.state.claChoose),console.log("true"===this.$store.state.claChoose),"true"==="".concat(this.$store.state.claChoose)},isEmail:function(){return console.log("true"===this.$store.state.isEmail),"true"==="".concat(this.$store.state.isEmail)},repositoryChoose:function(){return console.log("true"===this.$store.state.repositoryChoose),"true"==="".concat(this.$store.state.repositoryChoose)},repositoryOptions:function(){return this.$store.state.repositoryOptions},claOptions:function(){return this.$store.state.claOptions},orgValue:function(){return void 0===this.$store.state.orgValue?this.$store.state.orgValue:Number(this.$store.state.orgValue)},claValue:function(){return console.log(this.$store.state.claValue),void 0===this.$store.state.claValue?this.$store.state.claValue:Number(this.$store.state.claValue)},repositoryValue:function(){return void 0===this.$store.state.repositoryValue?this.$store.state.repositoryValue:Number(this.$store.state.repositoryValue)},showConfigForm:function(){return"true"==="".concat(this.$store.state.showConfigForm)}},watch:{$route:function(e,t){var o=e.path;"/linkedRepo"===o||"/home"===o?this.activeName="first":"/signedRepo"!==o&&"/signedRepoLogin"!==o||(this.activeName="second")}},data:function(){return{emailTypeArr:[{value:"Gmail",label:"Gmail"}],emailType:"",emailDialogVisible:!1,filterChange:!0,claLanguageValue:"",claTypeValue:"",claTypeOptions:[{label:"individual",value:"individual"},{label:"corporation",value:"corporation"}],languageOptions:[{label:"english",value:"english"},{label:"chinese",value:"chinese"},{label:"japanese",value:"japanese"}],createMetadataDialogVisible:!1,linkLoading:!1,platform:this.$store.state.platform,isVerify:!1,activeName:"first",previewShow:!1,previewText:"",loginType:this.$store.state.loginType,tableType:1,tableShow:!0,listCurrentPage:1,dropdownTitle:"Linked Repositories",email:"",code:"",gitee_client_id:this.$store.state.gitee_client_id,gitee_client_secret:this.$store.state.gitee_client_secret,gitee_redirect_uri:this.$store.state.gitee_redirect_uri,github_client_id:this.$store.state.github_client_id,github_client_secret:this.$store.state.github_client_secret,github_redirect_uri:this.$store.state.github_redirect_uri,access_token:this.$store.state.access_token,refresh_token:this.$store.state.refresh_token,platform_token:this.$store.state.platform_token,listDialogVisible:!1,checkClaDialogVisible:!1,unLinkDialogVisible:!1,editDialogVisible:!1,menuVisible:!1,claName:"",repositoryName:"",shareGistChecked:!1,metadataOptions:[{value:0,label:"",id:"",text:"",language:""}],showPreviewCla:!1,linkDialogVisible:!1,shareDialogVisible:!1,createCLADialogVisible:!1,authorizeDialogVisible:!1,fileNumber:"",lineNumber:"",gistUrl:"",home:{height:""},user:{userName:this.$store.state.user.userName,userId:this.$store.state.user.userId,isAuthorize:!1}}},methods:Object(a["a"])(Object(a["a"])({},Object(h["b"])(["setLoginUserAct","setTokenAct","getLinkedRepoListAct"])),{},{authorizeEmail:function(){var e="";switch(this.emailType){case"Gmail":e=l["o"];break}this.$axios({url:"/api"+e,headers:{Token:this.$store.state.access_token}}).then((function(e){console.log(e),window.location.href=e.data.url})).catch((function(e){console.log(e)})),console.log("authorizeEmail")},changeEmailType:function(e){console.log("changeEmailType",e)},getEmailTypeArr:function(){var e=this;this.$axios({url:"/api"+l["getEmailTypeArr"]}).then((function(t){console.log(t),e.emailTypeArr=t.data})).catch((function(e){console.log(e)}))},toAuthorizedEmail:function(){this.emailDialogVisible=!0},resetCla:function(){this.$store.commit("setClaChoose",!1),this.filterChange=!0,this.$store.commit("setClaValue",""),this.previewText="",this.getCLA()},claTypeChange:function(e){console.log(e),this.resetCla()},claLanguageChange:function(e){console.log(e),this.resetCla()},handleChange:function(e){console.log(e)},getPath:function(){var e=this.$route.path;"/linkedRepo"===e||"/home"===e?this.activeName="first":"/signedRepo"!==e&&"/signedRepoLogin"!==e||(this.activeName="second")},tabsHandleClick:function(e,t){console.log(e,t),"0"===e.index?this.$router.push("/linkedRepo"):this.$router.push("/signedRepoLogin")},getOrgPermission:function(){"gitee"===this.platform?window.location.href="https://gitee.com/oauth/authorize?client_id=2632e89d3dfb17ce941d2d2b45efc6f235afb4941ddb67578adda83aa33ab6a2&redirect_uri=http://139.159.224.207:60031/api/v1/login?platform=gitee&response_type=code&scope":window.location.href="https://github.com/login/oauth/authorize?client_id=d86f4915398dad23bffc&redirect_url=http://localhost:8080/home&scope=repo"},listChangePage:function(e){console.log(e)},newWindow:function(){window.open("https://github.com/ouchengle")},openLinkDialog:function(){console.log(this.orgChoose,this.claChoose,this.isEmail),this.orgChoose&&this.claChoose&&this.isEmail&&(this.linkDialogVisible=!0)},verifyEmail:function(){var e=this.email,t=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(!t.test(e))return this.isEmail=!1,!1;this.isEmail=!0},linkRepository:function(){var e=this;this.linkLoading=!0;var t={repo_id:"".concat(this.repositoryOptions[this.repositoryValue].repoName),cla_id:this.claOptions[this.claValue].id,org_email:this.email,platform:this.platform,org_id:"".concat(this.repositoryOptions[this.repositoryValue].org),cla_language:this.claOptions[this.claValue].language,submitter:"".concat(this.platform,"/").concat(this.$store.state.user.userName),metadata_id:""};console.log(t),this.$axios({url:"/api"+l["y"],method:"post",data:t,headers:{Token:this.$store.state.access_token,"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(t){e.linkLoading=!1,e.$message.success("success"),console.log(t),e.$store.commit("setClaValue",""),e.$store.commit("setRepositoryValue",""),e.$store.commit("setClaChoose",!1),e.$store.commit("setRepositoryChoose",!1),e.email="",document.cookie="",e.linkDialogVisible=!1;var o={access_token:e.$store.state.access_token,refresh_token:e.$store.state.refresh_token,userName:e.$store.state.user.userName,platform:e.platform};e.getLinkedRepoListAct(o)})).catch((function(t){console.log(t),e.linkLoading=!1,e.$message.closeAll(),e.$message.error("failed")}))},checkCla:function(){console.log("checkCla"),this.$router.push("/checkCla")},editHandleClick:function(e){console.log(e),this.editDialogVisible=!0},toCreateCLA:function(){this.$router.push("/createCLA"),this.$router.push("/createCLA")},toCreateMetadata:function(){this.$router.push("/createMetadata")},claVisibleChange:function(e){console.log("claVisibleChange"),e&&this.filterChange&&(console.log("claVisibleChange",e,this.filterChange),this.getCLA(),this.filterChange=!1)},changeCla:function(e){this.$store.commit("setClaValue",e),this.$store.commit("setClaChoose",!0),this.showPreviewCla=!0,this.previewText=this.claOptions[e].text},createCLA:function(){this.createCLADialogVisible=!0},createMetadata:function(){this.createMetadataDialogVisible=!0},authorize:function(){console.log("authorize"),this.authorizeDialogVisible=!0},changeOrg:function(e){this.$store.commit("setOrgValue",e),console.log(e),""!==e?(this.$store.commit("setOrgChoose",!0),this.getRepositoriesOfOrg(this.orgOptions[e].label,this.orgOptions[e].id)):(this.$store.commit("setOrgChoose",!1),this.$store.commit("setRepositoryValue",""),this.$store.commit("setRepositoryChoose",!1),this.$store.commit("setRepositoryOptions",[]))},changeRepository:function(e){this.$store.commit("setRepositoryValue",e),console.log(this.repositoryValue),""!==e?this.$store.commit("setRepositoryChoose",!0):this.$store.commit("setRepositoryChoose",!1)},getRepositoriesOfOrg:function(e,t){var o=this,i={access_token:this.$store.state.platform_token,org:e,page:1,per_page:10};console.log("getRepositoriesOfOrg",i),this.$axios({url:"https://gitee.com/api/v5/orgs/".concat(e,"/repos"),params:i}).then((function(i){if(console.log(i),200===i.status){var s=[];i.data.forEach((function(o,i){s.push({value:i,org:e,org_id:t,repoName:o.name,label:o.name,id:o.id})})),o.$store.commit("setRepositoryOptions",s)}})).catch((function(e){console.log(e)}))},getOrgsInfo:function(){var e=this,t={access_token:this.$store.state.platform_token,admin:!0,page:1,per_page:10};console.log("getOrgsInfo",t),this.$axios({url:l["u"],params:t}).then((function(t){if(console.log(t),200===t.status){var o=[];t.data.forEach((function(e,t){o.push({value:t,label:e.login,id:e.id})})),e.$store.commit("setOrgOption",o)}})).catch((function(e){console.log(e)}))},getCLA:function(){var e=this;console.log("getCLA"),this.$axios({url:"/api"+l["p"],params:{language:this.claLanguageValue,apply_to:this.claTypeValue},headers:{Token:this.$store.state.access_token,"Access-Token":this.$store.state.platform_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.$store.state.platform,"/").concat(this.$store.state.user.userName)}}).then((function(t){console.log(t);var o=[];t.data.length&&(t.data.forEach((function(e,t){o.push({value:t,label:e.name,id:e.id,text:e.text,language:e.language})})),e.$store.commit("setClaOptions",o))})).catch((function(e){console.log(e)}))},closeConfigForm:function(){this.$store.commit("setShowConfigForm","false"),this.showConfigForm=!1,this.setClientHeight()},configCla:function(){this.$store.commit("setShowConfigForm","true"),this.showConfigForm=!0,this.home.height="auto",this.getOrgsInfo()},setClientHeight:function(){var e=this;this.$nextTick((function(){n["a"]()>document.getElementById("home").offsetHeight?e.home.height=n["a"]()+"px":e.home.height=document.getElementById("home").offsetHeight}))},change:function(e){console.log(e),this.value=e},openFullScreen:function(){var e=this.$loading({lock:!0,background:"rgba(255, 255, 255, 0.8)"});setInterval((function(){e.close()}),500)},clearPageSession:function(){sessionStorage.removeItem("orgOptions"),sessionStorage.removeItem("repositoryOptions"),sessionStorage.removeItem("claOptions"),sessionStorage.removeItem("claOptions"),sessionStorage.removeItem("claOptions"),sessionStorage.removeItem("claOptions")},getCookieData:function(){if(""!==document.cookie){var e=document.cookie.split("; ");console.log(e);var t,o,i="",s="";e.forEach((function(e,a){var l=e.split("=");"access_token"===l[0]?t=l[1]:"refresh_token"===l[0]?o=l[1]:"email"===l[0]?s=l[1]:i="platform_token"===l[0]?l[1]:""})),this.email=s,""!==s&&this.$store.commit("setIsEmail",!0);var a={access_token:t,refresh_token:o,platform_token:i};this.setTokenAct(a),this.getUserInfo(t,o,i)}},getUserInfo:function(e,t,o){var i=this,s={access_token:o};console.log(s),this.$axios({url:l["w"],params:s}).then((function(s){console.log(s);var a={userId:s.data.id,userName:s.data.login,userImg:s.data.avatar_url,userEmail:s.data.email};i.setLoginUserAct(a);var l={platform_token:o,access_token:e,refresh_token:t,userName:s.data.login,platform:i.platform};console.log(l),i.getLinkedRepoListAct(l)})).catch((function(e){console.log(e)}))}}),created:function(){this.clearPageSession(),console.log("created"),this.getPath(),this.openFullScreen(),this.getCookieData()},mounted:function(){console.log("mounted"),this.setClientHeight()}},g=u,p=(o("cc9e"),o("2877")),m=Object(p["a"])(g,i,s,!1,null,"1938fe8a",null);t["default"]=m.exports},cb00:function(e,t,o){},cc9e:function(e,t,o){"use strict";var i=o("cb00"),s=o.n(i);s.a}}]);
//# sourceMappingURL=chunk-0e46c9c0.164e8e35.js.map