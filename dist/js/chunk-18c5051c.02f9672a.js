(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18c5051c"],{1460:function(e,t,r){"use strict";var a=r("cf23"),n=r.n(a);n.a},"45fb":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.homeClass,attrs:{id:"home"}},[r("HeaderPure"),r("el-row",{attrs:{id:"section"}},[r("el-col",{attrs:{offset:9,span:6}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"20%"}},[r("el-form-item",{attrs:{label:"email",prop:"email"}},[r("el-input",{attrs:{placeholder:"email"}})],1),r("el-form-item",{attrs:{label:"name",prop:"name"}},[r("el-input",{attrs:{placeholder:"name"}})],1),r("el-form-item",{attrs:{label:"country",prop:"country"}},[r("el-input",{attrs:{placeholder:"country"}})],1),r("el-form-item",{attrs:{label:"language",prop:"language"}},[r("el-input",{attrs:{placeholder:"language"}})],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(t){return e.submit("ruleForm")}}},[e._v("SUBMIT")])],1)],1)],1)],1),r("Footer")],1)},n=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("el-col",{attrs:{offset:8,span:8}},[r("div",[r("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(t){return e.toHome()}}})],1)])],1)},o=[],i={name:"HeaderPure",methods:{toHome:function(){this.$router.push("/home")}}},l=i,c=(r("a9d6"),r("2877")),u=Object(c["a"])(l,s,o,!1,null,"031b9cfc",null),m=u.exports,f=r("fd2d"),g=(r("221d"),r("615a"));window.onresize=function(){g["a"]()>document.getElementById("home").offsetHeight&&(document.getElementById("home").style.height=g["a"]()+"px")};var d={name:"EmailVerify",components:{HeaderPure:m,Footer:f["a"]},data:function(){var e=function(e,t,r){var a=t;console.log(a);var n=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;n.test(a)?r():r(new Error("邮箱格式有误"))};return{homeClass:{height:""},ruleForm:{email:"",name:"",country:"",language:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],country:[{required:!0,message:"请选择国家",trigger:"blur"}],language:[{required:!0,message:"请选择语言",trigger:"blur"}]}}},methods:{setClientHeight:function(){var e=this;this.$nextTick((function(){g["a"]()>document.getElementById("home").offsetHeight?e.homeClass.height=g["a"]()+"px":e.homeClass.height=document.getElementById("home").offsetHeight}))},submit:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log("发邮件")}))}},created:function(){this.setClientHeight()}},h=d,p=(r("c50b"),Object(c["a"])(h,a,n,!1,null,"1bd3fab8",null));t["default"]=p.exports},"615a":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a=function(){return window.innerHeight}},a5a7:function(e,t,r){},a9d6:function(e,t,r){"use strict";var a=r("a5a7"),n=r.n(a);n.a},ae33:function(e,t,r){},c50b:function(e,t,r){"use strict";var a=r("ae33"),n=r.n(a);n.a},cf23:function(e,t,r){},fd2d:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"footer"},[r("el-col",{staticClass:"left",attrs:{span:8}},[r("span",[e._v("© 2020 HUAWEI SE")])]),r("el-col",{staticClass:"center",attrs:{span:8}},[r("span",[e._v("Made with "),r("svg-icon",{attrs:{"icon-class":"heart"}}),e._v(" from the GitHub team at HUAWEI ")],1)]),r("el-col",{staticClass:"right",attrs:{span:8}},[r("div",[r("span",{staticClass:"pointer"},[e._v("Terms of Service & Privacy Policy")]),r("span",{staticClass:"pointer"},[r("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),e._v("Open an issue")],1)])])],1)},n=[],s={name:"Footer"},o=s,i=(r("1460"),r("2877")),l=Object(i["a"])(o,a,n,!1,null,"bc0631b2",null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-18c5051c.02f9672a.js.map