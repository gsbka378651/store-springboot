"use strict";(self["webpackChunkstore"]=self["webpackChunkstore"]||[]).push([[67],{9067:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});var i=function(){var t=this,s=t._self._c;return s("div",[s("main",[s("div",{staticClass:"container"},[s("p",{staticClass:"title mb-5"},[t._v("訂單確認")]),s("div",{staticClass:"return_to mb-5"},[s("router-link",{attrs:{to:"/cart"}},[t._v("〈")])],1),s("div",{staticClass:"cart_form"},[s("table",{staticClass:"cart-table",attrs:{width:"100%"}},[t._m(0),s("tbody",{staticClass:"cart-body",attrs:{id:"cart-list"}},t._l(t.CartList,(function(i){return s("tr",{key:i.cid},[s("td",[s("img",{staticClass:"img-responsive",attrs:{src:a(2231)("./assets"+i.image+"all.jpg")}})]),s("td",[t._v(t._s(i.title))]),s("td",[t._v("$"),s("span",[t._v(t._s(i.price))])]),s("td",[t._v(t._s(i.num))]),s("td",[t._v("$"),s("span",[t._v(t._s(i.price*i.num))])])])})),0)]),s("div",{staticClass:"total-bar mb-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("p",{staticClass:"total_price_1",attrs:{id:"selectTotal"}},[t._v("共"),s("span",{staticClass:"all-count"},[t._v(t._s(t.CountNum))]),t._v("件")]),s("p",{staticClass:"total_price_1",attrs:{id:"selectTotal"}},[t._v("總金額：$"),s("span",{staticClass:"all-price"},[t._v(t._s(t.TotalPrice))])])]),s("div",{staticClass:"col-6"},[s("input",{staticClass:"checkout_btn",attrs:{type:"button",value:"建立訂單"},on:{click:function(s){return t.CreateOrder()}}})])])])])])])])},r=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{attrs:{width:"15%"}}),s("th",{attrs:{width:"35%"}},[t._v("商品")]),s("th",{attrs:{width:"15%"}},[t._v("單價")]),s("th",{attrs:{width:"15%"}},[t._v("數量")]),s("th",{attrs:{width:"20%"}},[t._v("金額")])])])}],e=(a(7658),{name:"OrderConfirm",data(){return{CartList:"",CountNum:0,TotalPrice:0,cids:"",oid:""}},created(){const t="/carts";this.$axios.get(t).then((t=>{this.CartList=t.data.data,console.log(t.data.data);let s=0,a=0;this.CartList.forEach((t=>{s+=t.num,a+=t.price*t.num})),this.CountNum=s,this.TotalPrice=a;let i=[];for(let r=0;r<this.CartList.length;r++)i.push("cids="+this.CartList[r].cid);i=i.toString().replaceAll(",","&"),this.cids=i}))},methods:{CreateOrder(){const t="/orders/create";this.$axios.post(t,this.cids).then((t=>{let s=t.data.data.oid;this.oid=s,this.$router.push("/ordercreated?oid="+this.oid)})).catch((t=>{console.log(t)}))}}}),c=e,l=a(1001),o=(0,l.Z)(c,i,r,!1,null,"02edb1dc",null),d=o.exports}}]);
//# sourceMappingURL=67.a2b9bfc4.js.map