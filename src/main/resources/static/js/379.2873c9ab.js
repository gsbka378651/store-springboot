"use strict";(self["webpackChunkstore"]=self["webpackChunkstore"]||[]).push([[379],{9379:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("div",[e("section",[e("main",[e("div",{staticClass:"container"},[e("div",{staticClass:"container align-self-center justify-content-center"},[e("p",{staticClass:"title text-center"},[t._v("註冊會員")]),e("div",{staticClass:"register_form"},[e("i",{staticClass:"far fa-user fa-lg mb-5",staticStyle:{"font-size":"50px",color:"black"}}),e("div",{staticClass:"mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.RegisterInfo.username,expression:"RegisterInfo.username"}],staticClass:"form-control",attrs:{type:"email",placeholder:"請輸入帳號"},domProps:{value:t.RegisterInfo.username},on:{input:function(e){e.target.composing||t.$set(t.RegisterInfo,"username",e.target.value)}}})]),e("div",{staticClass:"mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.RegisterInfo.password,expression:"RegisterInfo.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"請輸入密碼"},domProps:{value:t.RegisterInfo.password},on:{input:function(e){e.target.composing||t.$set(t.RegisterInfo,"password",e.target.value)}}})]),e("div",{staticClass:"mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.RegisterInfo.password_conf,expression:"RegisterInfo.password_conf"}],staticClass:"form-control",attrs:{type:"password",placeholder:"確認密碼"},domProps:{value:t.RegisterInfo.password_conf},on:{input:function(e){e.target.composing||t.$set(t.RegisterInfo,"password_conf",e.target.value)}}})]),e("input",{staticClass:"reg_btn mb-4",attrs:{type:"button",value:"注册會員"},on:{click:function(e){return t.registerBtn()}}}),e("input",{staticClass:"log_btn",attrs:{type:"button",value:"登入會員"},on:{click:function(e){return t.toLogin()}}})])])])])])])},a=[],o=(s(7658),{inject:["reload"],name:"Register",data(){return{RegisterInfo:{username:"",password:"",password_conf:""}}},methods:{toLogin(){this.$router.push("/login")},registerBtn(){if(1==this.validate()){const t="/users/reg";this.$axios.post(t,this.$qs.stringify(this.RegisterInfo),{headers:{"content-type":"application/x-www-form-urlencoded"}}).then((t=>{4e3==t.data.state?(alert("帳號名已被註冊，請重新輸入"),this.reload()):200==t.data.state?(alert("註冊成功，即將跳轉至登入頁"),this.$router.push("/login")):alert("註冊失敗")})).catch((t=>{console.log("註冊時產生未知的錯誤")}))}else this.reload()},validate(){return this.RegisterInfo.username?this.RegisterInfo.password?this.RegisterInfo.password_conf?this.RegisterInfo.password==this.RegisterInfo.password_conf||(alert("請輸入相同的密碼"),this.reload(),!1):(alert("請再次輸入密碼"),this.reload(),!1):(alert("請輸入密碼"),this.reload(),!1):(alert("請輸入帳號"),!1)}}}),n=o,i=s(1001),l=(0,i.Z)(n,r,a,!1,null,"7abf50ba",null),c=l.exports}}]);
//# sourceMappingURL=379.2873c9ab.js.map