(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f8aeffe"],{"3da5":function(e,t,r){"use strict";var s=r("5304"),i=r.n(s);i.a},5304:function(e,t,r){},"615a":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var s=function(){return window.innerHeight}},"6af4":function(e,t,r){"use strict";var s=r("9162"),i=r.n(s);i.a},9162:function(e,t,r){},"9edf":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:e.section,attrs:{id:"section"}},[r("CorporationHeader",{attrs:{userName:e.user},on:{clickItem:e.clickItem}}),r("el-row",{staticStyle:{"margin-top":"2rem"}},[r("el-col",{attrs:{offset:4,span:16}},[r("el-tabs",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[r("el-tab-pane",{staticStyle:{"margin-top":"1rem"},attrs:{label:"User Management",name:"first"}})],1),r("router-view")],1)],1),r("Footer"),r("el-dialog",{attrs:{width:"50%",title:"新增管理员",align:"center",visible:e.addUserVisible},on:{"update:visible":function(t){e.addUserVisible=t}}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"10rem"}},[r("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[r("el-input",{attrs:{size:"medium"},model:{value:e.ruleForm.userName,callback:function(t){e.$set(e.ruleForm,"userName",t)},expression:"ruleForm.userName"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[r("el-input",{attrs:{"show-password":"",size:"medium"},model:{value:e.ruleForm.pwd,callback:function(t){e.$set(e.ruleForm,"pwd",t)},expression:"ruleForm.pwd"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{size:"medium"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),r("el-form-item",{attrs:{"label-width":"0"}},[r("el-row",{attrs:{align:"center"}},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.submit("ruleForm")}}},[e._v("确定")]),r("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.reset("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1),r("el-dialog",{attrs:{width:"20%",title:"",align:"center",visible:e.deleteUserVisible},on:{"update:visible":function(t){e.deleteUserVisible=t}}},[r("el-row",{attrs:{align:"center"}},[e._v(" 确定删除？ ")]),r("el-row",{staticClass:"marginTop1rem contentTitle",attrs:{align:"center"}},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.submit()}}},[e._v("确定")]),r("el-button",{attrs:{size:"medium"},on:{click:function(t){e.deleteUserVisible=!1}}},[e._v("取消")])],1)],1)],1)},i=[],n=r("221d"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("el-col",{attrs:{span:8}},[r("div",{staticStyle:{display:"flex"}})]),r("el-col",{attrs:{span:8}},[r("div",[r("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(t){return e.toHome()}}})],1)]),r("el-col",{attrs:{span:8}},[r("div",[r("el-dropdown",{on:{command:e.handleCommand}},[r("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.userName)),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"a"}},[e._v("user manager")]),r("el-dropdown-item",{attrs:{command:"b"}},[e._v("create user")]),r("el-dropdown-item",{attrs:{command:"c"}},[e._v("reset password")]),r("el-dropdown-item",{attrs:{command:"d"}},[e._v("login out")])],1)],1)],1)])],1)},a=[],l={name:"CorporationHeader",props:["userName"],data:function(){return{}},created:function(){},methods:{handleCommand:function(e){this.$emit("clickItem",e)},toHome:function(){this.$router.push("/home")},loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},c=l,u=(r("6af4"),r("2877")),d=Object(u["a"])(c,o,a,!1,null,null,null),m=d.exports,f=r("fd2d"),p=r("615a");window.onresize=function(){p["a"]()>document.getElementById("section").offsetHeight&&(document.getElementById("section").style.height=p["a"]()+"px")};var h={name:"rootManager",components:{CorporationHeader:m,Footer:f["a"]},data:function(){var e=function(e,t,r){""===t&&r(new Error("请输入账号")),r()},t=function(e,t,r){""===t&&r(new Error("请输入密码")),r()},r=function(e,t,r){if(""===t)r(new Error("请输入邮箱"));else{var s=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;s.test(t)?r():r(new Error("邮箱格式有误")),r()}r()};return{user:"",section:{height:""},active:"first",maxUser:2,deleteUserVisible:!1,rules:{userName:[{require:!0,validator:e,trigger:"blur"}],pwd:[{require:!0,validator:t,trigger:"blur"}],email:[{require:!0,validator:r,trigger:"blur"}]},ruleForm:{userName:"",pwd:"",email:""},addUserVisible:!1,tableData:[{id:0,userName:"001",pwd:"001",email:"969707751@qq.com",class:"法务"},{id:1,userName:"002",pwd:"002",email:"1057750732@qq.com",class:"开发部"}]}},created:function(){this.setClientHeight(),this.user=this.$route.query.userName},methods:{clickItem:function(e){switch(console.log(e),e){case"a":this.$router.push("/userList");break;case"b":this.$router.push("/createUser");break;case"c":this.$router.push("/resetPassword");break;case"d":this.loginOut();break}},loginOut:function(){console.log("删除账号信息"),this.$router.push("/")},setClientHeight:function(){var e=this;this.$nextTick((function(){p["a"]()>document.getElementById("section").offsetHeight?e.section.height=p["a"]()+"px":e.section.height=document.getElementById("section").offsetHeight}))},addUser:function(){var e={};this.$axios({url:"/api"+n["b"],method:"post",data:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},submit:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit"),!1;alert("submit!")}))},reset:function(e){this.$refs[e].resetFields()},deleteUser:function(e){console.log(e),this.deleteUserVisible=!0},clickAddUser:function(){this.tableData.length===this.maxUser?(this.$message.closeAll(),this.$message("最多新增".concat(this.maxUser,"个管理账号"))):this.addUserVisible=!0}}},g=h,v=(r("3da5"),Object(u["a"])(g,s,i,!1,null,"30f532b1",null));t["default"]=v.exports},d32f:function(e,t,r){"use strict";var s=r("e35a"),i=r.n(s);i.a},e35a:function(e,t,r){},fd2d:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"footer"},[r("el-col",{staticClass:"left",attrs:{span:8}},[r("span",[e._v("© 2020 HUAWEI SE")])]),r("el-col",{staticClass:"center",attrs:{span:8}},[r("span",[e._v("Made with "),r("svg-icon",{attrs:{"icon-class":"heart"}}),e._v(" from the GitHub team at HUAWEI ")],1)]),r("el-col",{staticClass:"right",attrs:{span:8}},[r("div",[r("span",{staticClass:"pointer"},[e._v("Terms of Service & Privacy Policy")]),r("span",{staticClass:"pointer"},[r("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),e._v("Open an issue")],1)])])],1)},i=[],n={name:"Footer"},o=n,a=(r("d32f"),r("2877")),l=Object(a["a"])(o,s,i,!1,null,"023530e2",null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-9f8aeffe.3215873f.js.map