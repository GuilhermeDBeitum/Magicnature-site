(function(t){function a(a){for(var r,n,l=a[0],c=a[1],i=a[2],u=0,v=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&v.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(a);while(v.length)v.shift()();return s.push.apply(s,i||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,l=1;l<e.length;l++){var c=e[l];0!==o[c]&&(r=!1)}r&&(s.splice(a--,1),t=n(n.s=e[0]))}return t}var r={},o={app:0},s=[];function n(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=r,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)n.d(e,r,function(a){return t[a]}.bind(null,r));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var i=0;i<l.length;i++)a(l[i]);var d=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);var r=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"inspire"}},[e("v-row",{attrs:{cols:"12","no-gutters":""}},[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-tabs",{attrs:{"background-color":"black",height:"41",color:"green",centered:"","center-active":"",dark:"",touchless:"",grow:""}},[e("h1",{staticStyle:{"margin-left":"20px"}},[t._v("Magic Nature")]),e("v-tab",{attrs:{to:"home",exact:""}},[t._v("\n          HOME\n        ")]),e("v-tab",{attrs:{to:"sobre"}},[t._v("\n          SOBRE\n        ")]),e("v-tab",{attrs:{to:"cadastro"}},[t._v("\n          CADASTRO\n        ")])],1)],1)],1),e("router-view"),e("v-card",{attrs:{color:"black",height:"40"}},[e("v-card-actions",{staticClass:"justify-space-between"})],1),e("v-footer",{attrs:{padless:"",color:"black",app:"",height:"50"}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e("span",{staticStyle:{color:"white"}},[t._v("© MAGIC Nature 2020.")])])],1)],1)},s=[],n={props:{source:String},data:()=>({length:3,window:0})},l=n,c=e("2877"),i=e("6544"),d=e.n(i),u=e("7496"),v=e("b0af"),m=e("99d9"),p=e("62ad"),b=e("553a"),f=e("0fd9"),h=e("71a3"),g=e("fe57"),x=Object(c["a"])(l,o,s,!1,null,null,null),k=x.exports;d()(x,{VApp:u["a"],VCard:v["a"],VCardActions:m["a"],VCol:p["a"],VFooter:b["a"],VRow:f["a"],VTab:h["a"],VTabs:g["a"]});var y=e("8c4f"),w=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-app",{attrs:{id:"inspire"}},[r("v-row",{staticClass:"back",attrs:{cols:"12",md:"12","no-gutters":"",justify:"center"}},[r("v-img",[r("v-parallax",{attrs:{height:"600",src:e("f5a5")}})],1)],1),r("modal"),r("v-col",{staticClass:"back"})],1)},S=[],V=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-dialog",{attrs:{width:"550px"},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[r("v-btn",t._g({attrs:{color:"green"}},e),[t._v("SALVE O NOSSO PLANETA")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[r("v-card",{attrs:{color:"black"}},[r("v-img",{attrs:{width:"800",src:e("6aee")}}),r("v-card",{staticClass:"text-center",attrs:{color:"green"}},[t._v("voce pode salvar esses animais!")]),r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"cadastro"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"12"}},[r("v-btn",{attrs:{color:"green",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("Quero Salvar\n        ")])],1)],1)],1)],1)},C=[],_={name:"modal",props:{source:String},data:()=>({dialog:!1})},j=_,O=e("8336"),A=e("169a"),E=e("adda"),T=Object(c["a"])(j,V,C,!1,null,null,null),R=T.exports;d()(T,{VBtn:O["a"],VCard:v["a"],VCol:p["a"],VDialog:A["a"],VImg:E["a"]});var q={name:"home",components:{modal:R},props:{source:String},data:()=>({dialog:!1})},M=q,P=(e("7df3"),e("8b9c")),$=Object(c["a"])(M,w,S,!1,null,null,null),D=$.exports;d()($,{VApp:u["a"],VCol:p["a"],VImg:E["a"],VParallax:P["a"],VRow:f["a"]});var N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"inspire"}},[e("v-row",{staticClass:"black",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"10"}}),e("v-col",{attrs:{cols:"12",md:"10"}},[e("v-card",{staticClass:"mx-auto ",attrs:{height:"450",width:"380",color:"black"}},[e("h1",{staticClass:"my-4 text-center title ",staticStyle:{color:"white"}},[t._v("\n          Magic Nature\n        ")]),e("v-card",{staticClass:"my-4 text-center",staticStyle:{color:"white"},attrs:{color:"black"}},[t._v("A destruição da Mata Atlântica e da Floresta Amazônica é intensa.\n          Isso agrava muito o problema do aquecimento global, além causar a\n          morte de milhares de animais silvestres.")]),e("v-card",{staticClass:"my-4 text-center ",staticStyle:{color:"white"},attrs:{color:"black"}},[t._v("Salvar o que resta de nossas florestas é a maneira mais inteligente\n          e eficaz de ajudar a combater o aquecimento global.")]),e("v-card",{staticClass:"my-4 text-center ",staticStyle:{color:"white"},attrs:{color:"black"}},[t._v("Temos que impedir uma catástrofe maior, salvando as árvores\n          centenárias, ou seja, impedir que desmatem as últimas áreas de\n          nossas florestas, que abrigam toda a biodiversidade.")]),e("v-card",{staticClass:"my-4 text-center ",staticStyle:{color:"white"},attrs:{color:"black"}},[t._v("\n          A Magic Nature é a comunidade ativa que vem para organizar e ajudar\n          a tomar conta da nossa natureza.\n        ")]),e("v-card",{attrs:{color:"black"}},[e("v-col",{staticClass:" text-center ",attrs:{md:"12"}},[e("router-link",{staticStyle:{color:"black","text-decoration":"none"},attrs:{to:"cadastro"}},[e("v-btn",{staticClass:"my-4 text-center ",staticStyle:{color:"white"},attrs:{height:"30",color:"green"}},[e("h1",[t._v("\n                  CADASTRE-SE\n                ")])])],1)],1)],1)],1)],1)],1)],1)},z=[],I={name:"sobre",props:{source:String},data:()=>({})},B=I,F=Object(c["a"])(B,N,z,!1,null,null,null),J=F.exports;d()(F,{VApp:u["a"],VBtn:O["a"],VCard:v["a"],VCol:p["a"],VRow:f["a"]});var L=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-app",{attrs:{id:"inspire"}},[r("v-row",{staticClass:"back",attrs:{cols:"12",md:"12","no-gutters":"",justify:"center"}},[r("v-img",{attrs:{src:e("9eb7")}},[r("v-container",{staticStyle:{padding:"40px"}},[r("v-col",{staticClass:"mx-auto black--text",attrs:{cols:"12",md:"6"}},[r("v-img",{staticStyle:{padding:"58px"},attrs:{height:"530"}},[r("v-form",{ref:"form",attrs:{id:"contato",method:"post",action:"email.php","lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[r("br"),r("v-col",{staticClass:"mx-auto black--text",attrs:{cols:"12",md:"8"}},[r("v-card",[r("v-text-field",{staticStyle:{padding:"3px"},attrs:{outlined:"","hide-details":"",color:"black","background-color":"white",rules:t.nameRules,label:"Nome",required:""},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1)],1),r("br"),r("v-col",{staticClass:"mx-auto black--text",attrs:{cols:"12",md:"8"}},[r("v-card",[r("v-text-field",{staticStyle:{padding:"3px"},attrs:{outlined:"","hide-details":"",color:"black",rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1)],1),r("br"),r("v-col",{staticClass:"mx-auto black--text",attrs:{cols:"12",md:"8"}},[r("v-card",[r("v-text-field",{staticStyle:{padding:"3px"},attrs:{outlined:"","hide-details":"",color:"black",type:"number",counter:"12",rules:[function(t){return!!t||"Digite o telefone!"},function(t){return t&&t.length>=12||"Digite Telefone Valido!"}],label:"Telefone",required:""},model:{value:t.tel,callback:function(a){t.tel=a},expression:"tel"}})],1)],1),r("br")],1),r("br"),r("v-row",{attrs:{cols:"2",md:"3",justify:"center"}},[r("v-btn",{staticStyle:{color:"white"},attrs:{height:"40",width:"150",disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v("Enviar")]),r("v-snackbar",{attrs:{timeout:t.timeout,top:"",color:"success"},model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v("\n                "+t._s(t.text)+"\n                "),r("v-btn",{attrs:{color:"white",text:""},on:{click:function(a){t.snackbar=!1}}},[t._v("Close")])],1)],1)],1)],1)],1)],1)],1)],1)},G=[],H={name:"compre",props:{source:String},data:()=>({length:3,window:0,tel:null,msg:"",snackbar:!1,text:"Cadastrado com Sucesso!",timeout:3e3,valid:!0,name:"",email:"",nameRules:[t=>!!t||"Digite o nome!"],emailRules:[t=>!!t||"Digite o email!",t=>/.+@.+\..+/.test(t)||"Um E-mail valido"],select:null,checkbox:!1}),methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0,this.cadastro=!0)},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()}}},Q=H,U=e("a523"),K=e("4bd4"),W=e("2db4"),X=e("8654"),Y=Object(c["a"])(Q,L,G,!1,null,"f1a07aee",null),Z=Y.exports;d()(Y,{VApp:u["a"],VBtn:O["a"],VCard:v["a"],VCol:p["a"],VContainer:U["a"],VForm:K["a"],VImg:E["a"],VRow:f["a"],VSnackbar:W["a"],VTextField:X["a"]}),r["a"].use(y["a"]);var tt=new y["a"]({mode:"history",base:"/",routes:[{path:"/",name:"",component:D},{path:"/home",name:"home",component:D},{path:"/sobre",name:"sobre",component:J},{path:"/cadastro",name:"cadastro",component:Z}]}),at=e("2f62");r["a"].use(at["a"]);var et=new at["a"].Store({state:{},mutations:{},actions:{}}),rt=e("f309");r["a"].use(rt["a"]);var ot=new rt["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:tt,store:et,vuetify:ot,render:t=>t(k)}).$mount("#app")},"6aee":function(t,a,e){t.exports=e.p+"img/extintos.d149949c.webp"},"7df3":function(t,a,e){"use strict";var r=e("bd9a"),o=e.n(r);o.a},"9eb7":function(t,a,e){t.exports=e.p+"img/floresta.238f9448.webp"},bd9a:function(t,a,e){},f5a5:function(t,a,e){t.exports=e.p+"img/home.4e893cb4.webp"}});
//# sourceMappingURL=app.bf2bc83d.js.map