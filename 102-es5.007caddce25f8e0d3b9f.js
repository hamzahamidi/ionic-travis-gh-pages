function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{GDlp:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),i=function l(){_classCallCheck(this,l)},t=u("pMnS"),o=u("MKJQ"),a=u("sZkV"),r=function(){function l(n,u,e){_classCallCheck(this,l),this.menu=n,this.router=u,this.storage=e,this.showSkip=!0}return _createClass(l,[{key:"startApp",value:function(){var l=this;this.router.navigateByUrl("/app/tabs/schedule",{replaceUrl:!0}).then((function(){return l.storage.set("ion_did_tutorial",!0)}))}},{key:"onSlideChangeStart",value:function(l){var n=this;l.target.isEnd().then((function(l){n.showSkip=!l}))}},{key:"ionViewWillEnter",value:function(){var l=this;this.storage.get("ion_did_tutorial").then((function(n){!0===n&&l.router.navigateByUrl("/app/tabs/schedule",{replaceUrl:!0})})),this.menu.enable(!1)}},{key:"ionViewDidLeave",value:function(){this.menu.enable(!0)}}]),l}(),s=u("iInd"),b=u("xgBC"),c=e.nb({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--border-color:transparent}.swiper-slide[_ngcontent-%COMP%]{display:block}.slide-title[_ngcontent-%COMP%]{margin-top:2.8rem}.slide-image[_ngcontent-%COMP%]{max-height:50%;max-width:60%;margin:36px 0;pointer-events:none}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600,#60646b)}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color,#000)}"]],data:{}});function p(l){return e.Kb(0,[e.Gb(402653184,1,{slides:0}),(l()(),e.pb(1,0,null,null,8,"ion-header",[["no-border",""]],null,null,null,o.qb,o.s)),e.ob(2,49152,null,0,a.C,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,6,"ion-toolbar",[],null,null,null,o.Vb,o.X)),e.ob(4,49152,null,0,a.Ab,[e.h,e.k,e.x],null,null),(l()(),e.pb(5,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,o.cb,o.e)),e.ob(6,49152,null,0,a.m,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,2,"ion-button",[["color","primary"]],[[8,"hidden",0]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.startApp()&&e),e}),o.bb,o.d)),e.ob(8,49152,null,0,a.l,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Ib(-1,0,["Skip"])),(l()(),e.pb(10,0,null,null,43,"ion-content",[["fullscreen","true"]],null,null,null,o.jb,o.l)),e.ob(11,49152,null,0,a.v,[e.h,e.k,e.x],{fullscreen:[0,"fullscreen"]},null),(l()(),e.pb(12,0,null,0,41,"ion-slides",[["pager","false"]],null,[[null,"ionSlideWillChange"]],(function(l,n,u){var e=!0;return"ionSlideWillChange"===n&&(e=!1!==l.component.onSlideChangeStart(u)&&e),e}),o.Mb,o.O)),e.ob(13,49152,[[1,4],["slides",4]],0,a.pb,[e.h,e.k,e.x],{pager:[0,"pager"]},null),(l()(),e.pb(14,0,null,0,11,"ion-slide",[],null,null,null,o.Lb,o.N)),e.ob(15,49152,null,0,a.ob,[e.h,e.k,e.x],null,null),(l()(),e.pb(16,0,null,0,0,"img",[["class","slide-image"],["src","assets/img/ica-slidebox-img-1.png"]],null,null,null,null,null)),(l()(),e.pb(17,0,null,0,3,"h2",[["class","slide-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Welcome to "])),(l()(),e.pb(19,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ICA"])),(l()(),e.pb(21,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" The "])),(l()(),e.pb(23,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ionic conference app"])),(l()(),e.Ib(-1,null,[" is a practical preview of the ionic framework in action, and a demonstration of proper code use. "])),(l()(),e.pb(26,0,null,0,8,"ion-slide",[],null,null,null,o.Lb,o.N)),e.ob(27,49152,null,0,a.ob,[e.h,e.k,e.x],null,null),(l()(),e.pb(28,0,null,0,0,"img",[["class","slide-image"],["src","assets/img/ica-slidebox-img-2.png"]],null,null,null,null,null)),(l()(),e.pb(29,0,null,0,1,"h2",[["class","slide-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["What is Ionic?"])),(l()(),e.pb(31,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),e.pb(32,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Ionic Framework"])),(l()(),e.Ib(-1,null,[" is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript."])),(l()(),e.pb(35,0,null,0,8,"ion-slide",[],null,null,null,o.Lb,o.N)),e.ob(36,49152,null,0,a.ob,[e.h,e.k,e.x],null,null),(l()(),e.pb(37,0,null,0,0,"img",[["class","slide-image"],["src","assets/img/ica-slidebox-img-3.png"]],null,null,null,null,null)),(l()(),e.pb(38,0,null,0,1,"h2",[["class","slide-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["What is Ionic Appflow?"])),(l()(),e.pb(40,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),e.pb(41,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Ionic Appflow"])),(l()(),e.Ib(-1,null,[" is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams."])),(l()(),e.pb(44,0,null,0,9,"ion-slide",[],null,null,null,o.Lb,o.N)),e.ob(45,49152,null,0,a.ob,[e.h,e.k,e.x],null,null),(l()(),e.pb(46,0,null,0,0,"img",[["class","slide-image"],["src","assets/img/ica-slidebox-img-4.png"]],null,null,null,null,null)),(l()(),e.pb(47,0,null,0,1,"h2",[["class","slide-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Ready to Play?"])),(l()(),e.pb(49,0,null,0,4,"ion-button",[["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.startApp()&&e),e}),o.bb,o.d)),e.ob(50,49152,null,0,a.l,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Ib(-1,0,[" Continue "])),(l()(),e.pb(52,0,null,0,1,"ion-icon",[["name","arrow-forward"],["slot","end"]],null,null,null,o.rb,o.t)),e.ob(53,49152,null,0,a.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,8,0,"primary"),l(n,11,0,"true"),l(n,13,0,"false"),l(n,50,0,"clear"),l(n,53,0,"arrow-forward")}),(function(l,n){l(n,7,0,!n.component.showSkip)}))}var d=e.lb("page-tutorial",r,(function(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"page-tutorial",[],null,null,null,p,c)),e.ob(1,49152,null,0,r,[a.Eb,s.m,b.b],null,null)],null,null)}),{},{},[]),h=u("SVse"),g=function l(){_classCallCheck(this,l)};u.d(n,"TutorialModuleNgFactory",(function(){return f}));var f=e.mb(i,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[t.a,d]],[3,e.j],e.v]),e.zb(4608,h.m,h.l,[e.s,[2,h.w]]),e.zb(4608,a.c,a.c,[e.x,e.g]),e.zb(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.zb(4608,a.Jb,a.Jb,[a.c,e.j,e.p]),e.zb(1073742336,h.b,h.b,[]),e.zb(1073742336,a.Cb,a.Cb,[]),e.zb(1073742336,s.q,s.q,[[2,s.v],[2,s.m]]),e.zb(1073742336,g,g,[]),e.zb(1073742336,i,i,[]),e.zb(1024,s.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);