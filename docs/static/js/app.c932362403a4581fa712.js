webpackJsonp([1],{"1yCo":function(t,e){},Jatp:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("j1ja");var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("md-toolbar",{staticClass:"md-primary"},[e("span",{staticClass:"md-title"},[this._v("Loto")]),this._v(" "),e("div",{staticClass:"md-toolbar-section-end"},[e("router-link",{attrs:{to:"/"}},[e("md-button",[this._v("Home")])],1),this._v(" "),e("router-link",{attrs:{to:"/check"}},[e("md-button",[this._v("Check")])],1)],1)]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App",data:function(){return{showNavigation:!1,showSidepanel:!1}}},i,!1,function(t){s("Jatp")},null,null).exports,l=s("/ocq"),n={created:function(){},data:function(){return{}},methods:{mix_initLoto:function(t,e){var s=[];this.$store.state.availableNums=[],this.$store.state.calledNums=[];for(var a=t;a<=e;a++)s.push(a);for(var i=e;i>0;i--){var o=Math.floor(Math.random()*Math.floor(i));this.$store.state.availableNums.push(s[o]),s.splice(o,1)}},mix_callNumber:function(){if(0==this.$store.state.availableNums.length&&this.$store.state.calledNums.length>0){if("OVER!"==this.$store.state.calledNums[0])return;this.$store.state.calledNums.unshift("OVER!")}else{var t=Math.floor(Math.random()*Math.floor(this.$store.state.availableNums.length));this.$store.state.calledNums.unshift(this.$store.state.availableNums[t]),this.$store.state.availableNums.splice(t,1)}},mix_playAudio:function(){var t=new Audio;t.src="",t.play()},mix_onOffAutoCall:function(){this.$store.state.autoCall?this.$store.state.autoCall=!1:(0==this.$store.state.availableNums.length&&this.mix_initLoto(this.$store.state.minNum,this.$store.state.maxNum),this.$store.state.autoCall=!0,this.mix_autoCall())},mix_autoCall:function(){var t=this;this.$store.state.autoCall&&this.$store.state.availableNums.length>0?(this.mix_callNumber(),setTimeout(function(){t.mix_autoCall()},4e3)):this.$store.state.autoCall=!1}}},r={name:"Loto",data:function(){return{}},methods:{callNumber:function(){this.$store.state.currentNum+=1},reduceNumber:function(){this.$store.state.currentNum-=1}},created:function(){this.$store.state.availableNums.length<1&&this.$store.state.calledNums.length>0&&this.mix_initLoto(this.$store.state.minNum,this.$store.state.maxNum)},mixins:[n]},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("md-speed-dial",{staticClass:"md-top-left",attrs:{"md-direction":"bottom"}},[s("md-speed-dial-target",{on:{click:function(e){t.mix_initLoto(t.$store.state.minNum,t.$store.state.maxNum)}}},[s("md-icon",[t._v("autorenew")])],1),t._v(" "),s("md-speed-dial-content",[s("md-button",{staticClass:"md-icon-button"},[s("md-icon",[t._v("edit")])],1)],1)],1),t._v(" "),s("md-speed-dial",{staticClass:"md-top-right",attrs:{"md-direction":"bottom"}},[s("md-speed-dial-target",{staticClass:"md-primary",on:{click:t.mix_callNumber}},[s("md-icon",[t._v("my_location")])],1)],1),t._v(" "),s("md-speed-dial",{staticClass:"md-bottom-right",attrs:{"md-direction":"top"}},[s("md-speed-dial-target",{staticClass:"md-primary",on:{click:t.mix_onOffAutoCall}},[t.$store.state.autoCall?t._e():s("md-icon",[t._v("play_circle_outline")]),t._v(" "),t.$store.state.autoCall?s("md-icon",[t._v("pause")]):t._e()],1)],1),t._v(" "),s("div",{staticClass:"md-layout md-alignment-center"},[s("div",{staticClass:"md-layout-item md-small-hide"}),t._v(" "),s("div",{staticClass:"md-layout-item md-small-100 md-xsmall-size-100"},[s("md-empty-state",[s("span",{staticClass:"md-display-4 currentNum",class:{isNumber:"number"==typeof t.$store.state.calledNums[0]}},[t._v(t._s(t.$store.state.calledNums[0]||"GO!"))])])],1),t._v(" "),s("div",{staticClass:"md-layout-item md-small-100 md-xsmall-size-100"},[s("md-content",{staticClass:"md-scrollbar"},[s("md-list",t._l(t.$store.state.calledNums,function(e,a){return s("md-list-item",{key:a},[s("span",{staticClass:"md-display-2 align-center"},[t._v(t._s(e))])])}))],1)],1)])],1)},staticRenderFns:[]};var u=s("VU/8")(r,m,!1,function(t){s("1yCo")},"data-v-6c7ea96b",null).exports,c={name:"checkNumber",data:function(){return{numbers:[]}},methods:{exits:function(t,e){return-1!=e.indexOf(t)}},created:function(){this.$store.state.autoCall=!1,this.numbers=[];for(var t=1;t<=90;t++)this.numbers.push(t)},mixins:[n]},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"md-layout md-alignment-center"},t._l(t.numbers,function(e,a){return s("div",{key:a,staticClass:"md-layout-item md-size-10"},[s("span",{class:{exits:t.exits(e,t.$store.state.calledNums)}},[t._v(t._s(e))])])}))])},staticRenderFns:[]};var h=s("VU/8")(c,d,!1,function(t){s("qxQ1")},"data-v-5f9d9206",null).exports;a.default.use(l.a);var v=new l.a({routes:[{path:"/",name:"Loto",component:u},{path:"/check",name:"checkNumber",component:h}]}),f=s("Lgyv"),p=s.n(f),_=(s("tzNG"),s("giDI"),s("NYxO"));a.default.use(_.a);var N=new _.a.Store({state:{currentNum:0,calledNums:[],availableNums:[],autoCall:!1,minNum:1,maxNum:10}}),$=s("mtWM"),b=s.n($);a.default.use(p.a),a.default.config.productionTip=!1,a.default.prototype.$http=b.a,new a.default({el:"#app",router:v,store:N,components:{App:o},template:"<App/>"})},giDI:function(t,e){},qxQ1:function(t,e){},tzNG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c932362403a4581fa712.js.map