webpackJsonp([1],{"/bAS":function(t,e){},"160N":function(t,e,s){t.exports=s.p+"static/media/1.mp3"},CL3F:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("j1ja");var a=s("7+uW"),i={created:function(){},data:function(){return{}},methods:{mix_initLoto:function(t,e){var s=[];this.$store.state.availableNums=[],this.$store.state.calledNums=[];for(var a=t;a<=e;a++)s.push(a);for(var i=e;i>0;i--){var o=Math.floor(Math.random()*Math.floor(i));this.$store.state.availableNums.push(s[o]),s.splice(o,1)}},mix_callNumber:function(){if(0==this.$store.state.availableNums.length&&this.$store.state.calledNums.length>0){if("OVER!"==this.$store.state.calledNums[0])return;this.$store.state.calledNums.unshift("OVER!")}else{var t=Math.floor(Math.random()*Math.floor(this.$store.state.availableNums.length));this.$store.state.calledNums.unshift(this.$store.state.availableNums[t]),this.$store.state.availableNums.splice(t,1),this.mix_playAudio()}},mix_playAudio:function(){this.$store.state.playAudio&&(console.log(this.$refs.a),new Audio(this.$store.state.audioBaseSrc+this.$store.state.calledNums[0]+".mp3").play())},mix_onOffAutoCall:function(){this.$store.state.autoCall?this.$store.state.autoCall=!1:(0==this.$store.state.availableNums.length&&this.mix_initLoto(this.$store.state.minNum,this.$store.state.maxNum),this.$store.state.autoCall=!0,this.mix_autoCall())},mix_autoCall:function(){var t=this;this.$store.state.autoCall&&this.$store.state.availableNums.length>0?(this.mix_callNumber(),setTimeout(function(){t.mix_autoCall()},this.$store.state.timeout)):this.$store.state.autoCall=!1}}},o={name:"App",data:function(){return{showNavigation:!1,showSidepanel:!1}},watch:{showNavigation:function(t){t?(this.$store.state.stateBeforeOpts.minNum=this.$store.state.minNum,this.$store.state.stateBeforeOpts.maxNum=this.$store.state.maxNum,this.$store.state.stateBeforeOpts.autocall=this.$store.state.autoCall,this.$store.state.autoCall&&(this.$store.state.autoCall=!1)):(this.$store.state.stateBeforeOpts.minNum!=this.$store.state.minNum||this.$store.state.stateBeforeOpts.maxNum!=this.$store.state.maxNum?this.mix_initLoto(this.$store.state.minNum,this.$store.state.maxNum):this.$store.state.stateBeforeOpts.autocall&&this.mix_onOffAutoCall(),this.$store.state.stateBeforeOpts={})}},mixins:[i]},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("md-toolbar",{staticClass:"md-primary"},[s("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.showNavigation=!0}}},[s("md-icon",[t._v("menu")])],1),t._v(" "),s("span",{staticClass:"md-title"},[t._v("LÔ TÔ")]),t._v(" "),s("div",{staticClass:"md-toolbar-section-end"},[s("router-link",{attrs:{to:"/"}},[s("md-button",[t._v("Home")])],1),t._v(" "),s("router-link",{attrs:{to:"/check"}},[s("md-button",[t._v("KIỂM TRA")])],1)],1)],1),t._v(" "),s("md-drawer",{attrs:{"md-active":t.showNavigation},on:{"update:mdActive":function(e){t.showNavigation=e}}},[s("md-toolbar",{staticClass:" md-accent",attrs:{"md-elevation":"0"}},[s("span",{staticClass:"md-title "},[t._v("CÀI ĐẶT")])]),t._v(" "),s("md-list",[s("md-list-item",[s("md-field",[s("label",[t._v("MIN")]),t._v(" "),s("md-input",{model:{value:t.$store.state.minNum,callback:function(e){t.$set(t.$store.state,"minNum",e)},expression:"$store.state.minNum"}})],1)],1),t._v(" "),s("md-list-item",[s("md-field",[s("label",[t._v("MAX")]),t._v(" "),s("md-input",{model:{value:t.$store.state.maxNum,callback:function(e){t.$set(t.$store.state,"maxNum",e)},expression:"$store.state.maxNum"}})],1)],1),t._v(" "),s("md-list-item",[s("md-field",[s("label",[t._v("TIME-OUT")]),t._v(" "),s("md-input",{model:{value:t.$store.state.timeout,callback:function(e){t.$set(t.$store.state,"timeout",e)},expression:"$store.state.timeout"}})],1)],1),t._v(" "),s("md-list-item",[s("md-field",[s("label",[t._v("SOURCE-BASE")]),t._v(" "),s("md-input",{model:{value:t.$store.state.audioBaseSrc,callback:function(e){t.$set(t.$store.state,"audioBaseSrc",e)},expression:"$store.state.audioBaseSrc"}})],1)],1)],1)],1),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")(o,l,!1,function(t){s("hcxy")},null,null).exports,r=s("/ocq"),m={mixins:[s("cZhM").a]},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",[t._v("Total duration: "+t._s(t.duration)+" seconds")]),t._v(" "),s("span",[t._v("Progress: "+t._s(100*t.progress)+"%")]),t._v(" "),s("button",{on:{click:t.togglePlayback}},[t._v(t._s(t.playing?"Pause":"Play"))]),t._v(" "),s("button",{on:{click:t.stop}},[t._v("Stop")])])},staticRenderFns:[]},d={name:"Loto",components:{AudioPlayer:s("VU/8")(m,u,!1,null,null,null).exports},data:function(){return{}},methods:{callNumber:function(){this.$store.state.currentNum+=1},reduceNumber:function(){this.$store.state.currentNum-=1},play:function(){this.$refs.player.play()}},created:function(){0==this.$store.state.availableNums.length&&0==this.$store.state.calledNums.length&&this.mix_initLoto(this.$store.state.minNum,this.$store.state.maxNum)},mixins:[i]},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("md-speed-dial",{staticClass:"md-top-left",attrs:{"md-direction":"bottom"}},[a("md-speed-dial-target",{on:{click:function(e){t.mix_initLoto(t.$store.state.minNum,t.$store.state.maxNum)}}},[a("md-icon",[t._v("autorenew")])],1),t._v(" "),a("md-speed-dial-content",[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("edit")])],1)],1)],1),t._v(" "),a("md-speed-dial",{staticClass:"md-top-right",attrs:{"md-direction":"bottom"}},[a("md-speed-dial-target",{staticClass:"md-primary",on:{click:t.mix_callNumber}},[a("md-icon",[t._v("my_location")])],1)],1),t._v(" "),a("md-speed-dial",{staticClass:"md-bottom-left",attrs:{"md-direction":"top"}},[a("md-speed-dial-target",{staticClass:"md-primary",on:{click:function(e){t.$store.state.playAudio=!t.$store.state.playAudio}}},[t.$store.state.playAudio?t._e():a("md-icon",[t._v("volume_off")]),t._v(" "),t.$store.state.playAudio?a("md-icon",[t._v("volume_up")]):t._e()],1)],1),t._v(" "),a("md-speed-dial",{staticClass:"md-bottom-right",attrs:{"md-direction":"top"}},[a("md-speed-dial-target",{staticClass:"md-primary",on:{click:t.mix_onOffAutoCall}},[t.$store.state.autoCall?t._e():a("md-icon",[t._v("play_circle_outline")]),t._v(" "),t.$store.state.autoCall?a("md-icon",[t._v("pause")]):t._e()],1)],1),t._v(" "),a("div",{staticClass:"md-layout md-alignment-center"},[a("div",{staticClass:"md-layout-item md-small-100 md-xsmall-size-100"},[a("md-empty-state",[a("span",{staticClass:"md-display-4 currentNum",class:{isNumber:"number"==typeof t.$store.state.calledNums[0]}},[t._v(t._s(t.$store.state.calledNums[0]||"GO!"))])])],1),t._v(" "),a("div",{staticClass:"md-layout-item md-size-100"},[a("Adsense",{attrs:{"data-ad-client":"ca-pub-8525780142236607","data-ad-slot":"9262103896"}})],1),t._v(" "),a("div",{staticClass:"md-layout-item md-small-100 md-xsmall-size-100"},[a("md-content",{staticClass:"md-scrollbar"},[a("md-list",t._l(t.$store.state.calledNums,function(e,s){return 0!=s?a("md-list-item",{key:s},[a("div",{staticClass:"align-center"},[a("span",{staticClass:"md-display-2"},[t._v(t._s(e))]),t._v(" "),s%9==0?a("div",[a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8525780142236607","data-ad-slot":"9421885996"}})],1):t._e()])]):t._e()}))],1)],1)]),t._v(" "),a("audio",{ref:"a"},[a("source",{attrs:{src:s("160N"),type:""}})])],1)},staticRenderFns:[]};var v=s("VU/8")(d,c,!1,function(t){s("CL3F")},"data-v-88df5c50",null).exports,h={name:"checkNumber",data:function(){return{numbers:[]}},methods:{exits:function(t,e){return-1!=e.indexOf(t)}},created:function(){this.$store.state.autoCall=!1,this.numbers=[];for(var t=this.$store.state.minNum;t<=this.$store.state.maxNum;t++)this.numbers.push(t)},mixins:[i]},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"md-layout md-alignment-center"},[t._l(t.numbers,function(e,a){return s("div",{key:a,staticClass:"md-layout-item md-size-10"},[s("span",{class:{exits:t.exits(e,t.$store.state.calledNums)}},[t._v(t._s(e))])])}),t._v(" "),s("div",{staticClass:"md-layout-item md-size-100"},[s("Adsense",{attrs:{"data-ad-client":"ca-pub-8525780142236607","data-ad-slot":"9262103896"}})],1)],2)])},staticRenderFns:[]};var f=s("VU/8")(h,p,!1,function(t){s("/bAS")},"data-v-a1445514",null).exports;a.default.use(r.a);var _=new r.a({routes:[{path:"/",name:"Loto",component:v},{path:"/check",name:"checkNumber",component:f}]}),$=s("Lgyv"),N=s.n($),b=(s("tzNG"),s("giDI"),s("NYxO"));a.default.use(b.a);var x=new b.a.Store({state:{currentNum:0,calledNums:[],availableNums:[],autoCall:!1,minNum:1,maxNum:90,timeout:6e3,playAudio:!0,audioBaseSrc:"https://raw.githubusercontent.com/hbt272/loto/master/docs/static/audio/",stateBeforeOpts:{}}}),C=s("mtWM"),y=s.n(C),g=s("8xvC"),A=s.n(g);a.default.use(N.a),a.default.use(s("B60x")),a.default.use(A.a.Adsense),a.default.use(A.a.InArticleAdsense),a.default.use(A.a.InFeedAdsense),a.default.config.productionTip=!1,a.default.prototype.$http=y.a,new a.default({el:"#app",store:x,router:_,components:{App:n},template:"<App/>"})},giDI:function(t,e){},hcxy:function(t,e){},tzNG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.782ff5357d65f07de2e5.js.map