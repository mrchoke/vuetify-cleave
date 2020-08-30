(function(e){function t(t){for(var a,i,l=t[0],c=t[1],s=t[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vuetify-cleave/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[e._v("Latest Release")]),n("v-icon",[e._v("mdi-open-in-new")])],1)],1),n("v-main",[n("HelloWorld")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-toolbar",{attrs:{dark:""}},[n("v-toolbar-title",[e._v("Vuetify and Cleave.js DEMO")])],1),n("v-row",e._l(e.inputs,(function(t,a){return n("v-col",{key:a,attrs:{cols:"12"}},[n("v-text-field",{directives:[{name:"cleave",rawName:"v-cleave",value:t.options,expression:"input.options"}],attrs:{label:t.name,placeholder:t.placeholder},model:{value:e.model[a],callback:function(t){e.$set(e.model,a,t)},expression:"model[i]"}})],1)})),1)],1)},l=[],c={name:"HelloWorld",data:function(){return{model:[],inputs:[{name:"Credit card",options:{creditCard:!0},placeholder:"1234 56789 012345"},{name:"Phone number ",options:{phone:!0,delimiter:"-",phoneRegionCode:"TH"},placeholder:"081-111-1111"},{name:"Date ",options:{date:!0,delimiter:"/",datePattern:["d","m","Y"]},placeholder:"12/09/2020"},{name:"Time ",options:{time:!0,datePattern:["h","m","s"]},placeholder:"24:04:04"},{name:"Number with Comma",options:{numeral:!0,numeralThousandsGroupStyle:"thousand"},placeholder:"100,000,000.00"},{name:"Thai National ID card",options:{numericOnly:!0,delimiter:"-",blocks:[1,4,5,2,1]},placeholder:"1-1234-12345-12-1"},{name:"Prefix",options:{prefix:"PRO99",delimiter:"-",blocks:[5,3,3,3],uppercase:!0},placeholder:"PRO99-ACC-ABC-CDE"}]}}},s=c,u=n("2877"),p=n("6544"),d=n.n(p),f=n("62ad"),v=n("a523"),m=n("0fd9"),h=n("8654"),b=n("71d9"),y=n("2a7f"),g=Object(u["a"])(s,i,l,!1,null,null,null),w=g.exports;d()(g,{VCol:f["a"],VContainer:v["a"],VRow:m["a"],VTextField:h["a"],VToolbar:b["a"],VToolbarTitle:y["a"]});var O={name:"App",components:{HelloWorld:w},data:function(){return{}}},x=O,C=n("7496"),V=n("40dc"),j=n("8336"),_=n("132d"),k=n("adda"),P=n("f6c4"),T=n("2fa4"),E=Object(u["a"])(x,r,o,!1,null,null,null),N=E.exports;d()(E,{VApp:C["a"],VAppBar:V["a"],VBtn:j["a"],VIcon:_["a"],VImg:k["a"],VMain:P["a"],VSpacer:T["a"]});var S=n("f309");a["a"].use(S["a"]);var M=new S["a"]({}),A=n("7fd9");n("df4e");function R(e){if("INPUT"!==e.tagName.toLocaleUpperCase()){var t=e.getElementsByTagName("input");if(1!==t.length)throw new Error("v-cleave requires 1 input, found ".concat(t.length));e=t[0]}return e}a["a"].config.productionTip=!1,a["a"].directive("cleave",{inserted:function(e,t){e=R(e),e.cleave=new A["a"](e,t.value||{})},update:function(e){e=R(e);var t=new Event("input",{bubbles:!0});setTimeout((function(){e.value=e.cleave.properties.result,e.dispatchEvent(t)}),100)}}),new a["a"]({vuetify:M,render:function(e){return e(N)}}).$mount("#app")}});