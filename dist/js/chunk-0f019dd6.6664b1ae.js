(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f019dd6"],{5620:function(e,t,r){},7401:function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"section"}},[r("el-row",[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.clickAddUser()}}},[e._v(" create user ")])],1),r("el-row",{staticClass:"marginTop1rem tableStyle"},[r("el-table",{attrs:{data:e.tableData}},[r("el-table-column",{attrs:{prop:"userName",label:"用户名"}}),r("el-table-column",{attrs:{prop:"pwd",label:"密码"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),r("el-table-column",{attrs:{prop:"class",label:"部门"}}),r("el-table-column",{attrs:{width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return e.deleteUser(t.row.id)}}},[e._v("删除")])]}}])})],1)],1),r("el-dialog",{attrs:{width:"50%",title:"新增管理员",align:"center",visible:e.addUserVisible},on:{"update:visible":function(t){e.addUserVisible=t}}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"10rem"}},[r("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[r("el-input",{attrs:{size:"medium"},model:{value:e.ruleForm.userName,callback:function(t){e.$set(e.ruleForm,"userName",t)},expression:"ruleForm.userName"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[r("el-input",{attrs:{"show-password":"",size:"medium"},model:{value:e.ruleForm.pwd,callback:function(t){e.$set(e.ruleForm,"pwd",t)},expression:"ruleForm.pwd"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{size:"medium"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),r("el-form-item",{attrs:{"label-width":"0"}},[r("el-row",{attrs:{align:"center"}},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.submit("ruleForm")}}},[e._v("确定")]),r("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.reset("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1),r("el-dialog",{attrs:{width:"20%",title:"",align:"center",visible:e.deleteUserVisible},on:{"update:visible":function(t){e.deleteUserVisible=t}}},[r("el-row",{attrs:{align:"center"}},[e._v(" 确定删除？ ")]),r("el-row",{staticClass:"marginTop1rem contentTitle",attrs:{align:"center"}},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.submit()}}},[e._v("确定")]),r("el-button",{attrs:{size:"medium"},on:{click:function(t){e.deleteUserVisible=!1}}},[e._v("取消")])],1)],1)],1)},i=[],a=r("221d"),s={name:"rootManager",data:function(){var e=function(e,t,r){""===t&&r(new Error("请输入账号")),r()},t=function(e,t,r){""===t&&r(new Error("请输入密码")),r()},r=function(e,t,r){if(""===t)r(new Error("请输入邮箱"));else{var l=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;l.test(t)?r():r(new Error("邮箱格式有误")),r()}r()};return{maxUser:2,deleteUserVisible:!1,rules:{userName:[{require:!0,validator:e,trigger:"blur"}],pwd:[{require:!0,validator:t,trigger:"blur"}],email:[{require:!0,validator:r,trigger:"blur"}]},ruleForm:{userName:"",pwd:"",email:""},addUserVisible:!1,tableData:[{id:0,userName:"001",pwd:"001",email:"969707751@qq.com",class:"法务"},{id:1,userName:"002",pwd:"002",email:"1057750732@qq.com",class:"开发部"}]}},methods:{addUser:function(){var e={};this.$axios({url:"/api"+a["a"],method:"post",data:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},submit:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit"),!1;alert("submit!")}))},reset:function(e){this.$refs[e].resetFields()},deleteUser:function(e){console.log(e),this.deleteUserVisible=!0},clickAddUser:function(){this.tableData.length===this.maxUser?this.$message("最多新增".concat(this.maxUser,"个管理账号")):this.addUserVisible=!0}}},n=s,o=(r("96b9"),r("2877")),u=Object(o["a"])(n,l,i,!1,null,"9057dcde",null);t["default"]=u.exports},"96b9":function(e,t,r){"use strict";var l=r("5620"),i=r.n(l);i.a}}]);
//# sourceMappingURL=chunk-0f019dd6.6664b1ae.js.map