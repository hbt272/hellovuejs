webpackJsonp([1],{GHHt:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("j1ja");var a=s("7+uW"),i={created:function(){},data:function(){return{}},methods:{mix_initLoto:function(t,e){var s=[];this.$store.state.availableNums=[],this.$store.state.calledNums=[];for(var a=t;a<=e;a++)s.push(a);for(var i=e;i>0;i--){var o=Math.floor(Math.random()*Math.floor(i));this.$store.state.availableNums.push(s[o]),s.splice(o,1)}},mix_callNumber:function(){if(0==this.$store.state.availableNums.length&&this.$store.state.calledNums.length>0){if("OVER!"==this.$store.state.calledNums[0])return;this.$store.state.calledNums.unshift("OVER!")}else{var t=Math.floor(Math.random()*Math.floor(this.$store.state.availableNums.length));this.$store.state.calledNums.unshift(this.$store.state.availableNums[t]),this.$store.state.availableNums.splice(t,1)}},mix_playAudio:function(){var t=new Audio;t.src="",t.play()},mix_onOffAutoCall:function(){this.$store.state.autoCall?this.$store.state.autoCall=!1:(0==this.$store.state.availableNums.length&&this.mix_initLoto(this.$store.state.minNum,this.$store.state.maxNum),this.$store.state.autoCall=!0,this.mix_autoCall())},mix_autoCall:function(){var t=this;this.$store.state.autoCall&&this.$store.state.availableNums.length>0?(this.mix_callNumber(),setTimeout(function(){t.mix_autoCall()},this.$store.state.timeout)):this.$store.state.autoCall=!1}}},o={name:"App",data:function(){return{showNavigation:!1,showSidepanel:!1}},watch:{showNavigation:function(t){t?(this.$store.state.stateBeforeOpts.minNum=this.$store.state.minNum,this.$store.state.stateBeforeOpts.maxNum=this.$store.state.maxNum,this.$store.state.stateBeforeOpts.autocall=this.$store.state.autoCall,this.$store.state.autoCall&&(this.$store.state.autoCall=!1)):(this.$store.state.stateBeforeOpts.minNum!=this.$store.state.minNum||this.$store.state.stateBeforeOpts.maxNum!=this.$store.state.maxNum?this.mix_initLoto(this.$store.state.minNum,this.$store.state.maxNum):this.$store.state.stateBeforeOpts.autocall&&this.mix_onOffAutoCall(),this.$store.state.stateBeforeOpts={})}},mixins:[i]},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("md-toolbar",{staticClass:"md-primary"},[s("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.showNavigation=!0}}},[s("md-icon",[t._v("menu")])],1),t._v(" "),s("span",{staticClass:"md-title"},[t._v("LÔ TÔ")]),t._v(" "),s("div",{staticClass:"md-toolbar-section-end"},[s("router-link",{attrs:{to:"/"}},[s("md-button",[t._v("Home")])],1),t._v(" "),s("router-link",{attrs:{to:"/check"}},[s("md-button",[t._v("KIỂM TRA")])],1)],1)],1),t._v(" "),s("md-drawer",{attrs:{"md-active":t.showNavigation},on:{"update:mdActive":function(e){t.showNavigation=e}}},[s("md-toolbar",{staticClass:" md-accent",attrs:{"md-elevation":"0"}},[s("span",{staticClass:"md-title "},[t._v("CÀI ĐẶT")])]),t._v(" "),s("md-list",[s("md-list-item",[s("md-field",[s("label",[t._v("MIN")]),t._v(" "),s("md-input",{model:{value:t.$store.state.minNum,callback:function(e){t.$set(t.$store.state,"minNum",e)},expression:"$store.state.minNum"}})],1)],1),t._v(" "),s("md-list-item",[s("md-field",[s("label",[t._v("MAX")]),t._v(" "),s("md-input",{model:{value:t.$store.state.maxNum,callback:function(e){t.$set(t.$store.state,"maxNum",e)},expression:"$store.state.maxNum"}})],1)],1),t._v(" "),s("md-list-item",[s("md-field",[s("label",[t._v("TIME-OUT")]),t._v(" "),s("md-input",{model:{value:t.$store.state.timeout,callback:function(e){t.$set(t.$store.state,"timeout",e)},expression:"$store.state.timeout"}})],1)],1)],1)],1),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")(o,l,!1,function(t){s("GHHt")},null,null).exports,m=s("/ocq"),r={name:"Loto",data:function(){return{}},methods:{callNumber:function(){this.$store.state.currentNum+=1},reduceNumber:function(){this.$store.state.currentNum-=1}},created:function(){0==this.$store.state.availableNums.length&&0==this.$store.state.calledNums.length&&this.mix_initLoto(this.$store.state.minNum,this.$store.state.maxNum)},mixins:[i]},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("md-speed-dial",{staticClass:"md-top-left",attrs:{"md-direction":"bottom"}},[s("md-speed-dial-target",{on:{click:function(e){t.mix_initLoto(t.$store.state.minNum,t.$store.state.maxNum)}}},[s("md-icon",[t._v("autorenew")])],1),t._v(" "),s("md-speed-dial-content",[s("md-button",{staticClass:"md-icon-button"},[s("md-icon",[t._v("edit")])],1)],1)],1),t._v(" "),s("md-speed-dial",{staticClass:"md-top-right",attrs:{"md-direction":"bottom"}},[s("md-speed-dial-target",{staticClass:"md-primary",on:{click:t.mix_callNumber}},[s("md-icon",[t._v("my_location")])],1)],1),t._v(" "),s("md-speed-dial",{staticClass:"md-bottom-right",attrs:{"md-direction":"top"}},[s("md-speed-dial-target",{staticClass:"md-primary",on:{click:t.mix_onOffAutoCall}},[t.$store.state.autoCall?t._e():s("md-icon",[t._v("play_circle_outline")]),t._v(" "),t.$store.state.autoCall?s("md-icon",[t._v("pause")]):t._e()],1)],1),t._v(" "),s("div",{staticClass:"md-layout md-alignment-center"},[s("div",{staticClass:"md-layout-item md-small-100"},[s("Adsense",{attrs:{"data-ad-client":"ca-pub-8525780142236607","data-ad-slot":"9262103896"}})],1),t._v(" "),s("div",{staticClass:"md-layout-item md-small-100 md-xsmall-size-100"},[s("md-empty-state",[s("span",{staticClass:"md-display-4 currentNum",class:{isNumber:"number"==typeof t.$store.state.calledNums[0]}},[t._v(t._s(t.$store.state.calledNums[0]||"GO!"))])])],1),t._v(" "),s("div",{staticClass:"md-layout-item md-small-100 md-xsmall-size-100"},[s("md-content",{staticClass:"md-scrollbar"},[s("md-list",t._l(t.$store.state.calledNums,function(e,a){return s("md-list-item",{key:a},[s("span",{staticClass:"md-display-2 align-center"},[t._v(t._s(e))]),t._v(" "),a%9==0?s("div",[s("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8525780142236607","data-ad-slot":"9421885996"}})],1):t._e()])}))],1)],1)])],1)},staticRenderFns:[]};var d=s("VU/8")(r,u,!1,function(t){s("ZkyP")},"data-v-673135f2",null).exports,c={name:"checkNumber",data:function(){return{numbers:[]}},methods:{exits:function(t,e){return-1!=e.indexOf(t)}},created:function(){this.$store.state.autoCall=!1,this.numbers=[];for(var t=1;t<=90;t++)this.numbers.push(t)},mixins:[i]},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"md-layout md-alignment-center"},[t._l(t.numbers,function(e,a){return s("div",{key:a,staticClass:"md-layout-item md-size-10"},[s("span",{class:{exits:t.exits(e,t.$store.state.calledNums)}},[t._v(t._s(e))])])}),t._v(" "),s("div",{staticClass:"md-layout-item md-size-100"},[s("Adsense",{attrs:{"data-ad-client":"ca-pub-8525780142236607","data-ad-slot":"9262103896"}})],1)],2)])},staticRenderFns:[]};var v=s("VU/8")(c,h,!1,function(t){s("OOCY")},"data-v-48e67e4c",null).exports;a.default.use(m.a);var f=new m.a({routes:[{path:"/",name:"Loto",component:d},{path:"/check",name:"checkNumber",component:v}]}),p=s("Lgyv"),_=s.n(p),N=(s("tzNG"),s("giDI"),s("NYxO"));a.default.use(N.a);var $=new N.a.Store({state:{currentNum:0,calledNums:[],availableNums:[],autoCall:!1,minNum:1,maxNum:90,timeout:5e3,stateBeforeOpts:{}}}),b=s("mtWM"),x=s.n(b),C=s("8xvC"),y=s.n(C);a.default.use(_.a),a.default.use(s("B60x")),a.default.use(y.a.Adsense),a.default.use(y.a.InArticleAdsense),a.default.use(y.a.InFeedAdsense),a.default.config.productionTip=!1,a.default.prototype.$http=x.a,new a.default({el:"#app",store:$,router:f,components:{App:n},template:"<App/>"})},OOCY:function(t,e){},ZkyP:function(t,e){},giDI:function(t,e){},tzNG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1200a616f7b47a4654a2.js.map