(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{w4GT:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var e=u("pMnS"),i=u("MKJQ"),s=u("sZkV"),b=u("s7LF"),r=u("mrSG");class a{constructor(l,n){this.alertCtrl=l,this.toastCtrl=n,this.submitted=!1}ionViewDidEnter(){return r.a(this,void 0,void 0,(function*(){const l=yield this.toastCtrl.create({message:"This does not actually send a support request.",duration:3e3});yield l.present()}))}submit(l){return r.a(this,void 0,void 0,(function*(){if(this.submitted=!0,l.valid){this.supportMessage="",this.submitted=!1;const l=yield this.toastCtrl.create({message:"Your support request has been sent.",duration:3e3});yield l.present()}}))}}var p=t.nb({encapsulation:0,styles:[[".support-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.support-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]],data:{}});function d(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,10,"ion-header",[],null,null,null,i.qb,i.s)),t.ob(1,49152,null,0,s.C,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,i.Vb,i.X)),t.ob(3,49152,null,0,s.Ab,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.cb,i.e)),t.ob(5,49152,null,0,s.m,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.Cb,i.F)),t.ob(7,49152,null,0,s.S,[t.h,t.k,t.x],null,null),(l()(),t.pb(8,0,null,0,2,"ion-title",[],null,null,null,i.Tb,i.V)),t.ob(9,49152,null,0,s.yb,[t.h,t.k,t.x],null,null),(l()(),t.Ib(-1,0,["Support"])),(l()(),t.pb(11,0,null,null,32,"ion-content",[],null,null,null,i.jb,i.l)),t.ob(12,49152,null,0,s.v,[t.h,t.k,t.x],null,null),(l()(),t.pb(13,0,null,0,1,"div",[["class","support-logo"]],null,null,null,null,null)),(l()(),t.pb(14,0,null,null,0,"img",[["alt","Ionic Logo"],["src","assets/img/appicon.svg"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,e=l.component;return"submit"===n&&(o=!1!==t.Bb(l,17).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Bb(l,17).onReset()&&o),"ngSubmit"===n&&(o=!1!==e.submit(t.Bb(l,17))&&o),o}),null,null)),t.ob(16,16384,null,0,b.m,[],null,null),t.ob(17,4210688,[["submitForm",4]],0,b.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Fb(2048,null,b.a,null,[b.h]),t.ob(19,16384,null,0,b.g,[[4,b.a]],null,null),(l()(),t.pb(20,0,null,null,15,"ion-list",[["lines","none"]],null,null,null,i.Bb,i.C)),t.ob(21,49152,null,0,s.P,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(22,0,null,0,13,"ion-item",[],null,null,null,i.yb,i.v)),t.ob(23,49152,null,0,s.I,[t.h,t.k,t.x],null,null),(l()(),t.pb(24,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,i.zb,i.B)),t.ob(25,49152,null,0,s.O,[t.h,t.k,t.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),t.Ib(-1,0,["Enter your support message below"])),(l()(),t.pb(27,0,null,0,8,"ion-textarea",[["name","supportQuestion"],["required",""],["rows","6"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.Bb(l,30)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Bb(l,30)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(e.supportMessage=u)&&o),o}),i.Sb,i.U)),t.ob(28,16384,null,0,b.j,[],{required:[0,"required"]},null),t.Fb(1024,null,b.c,(function(l){return[l]}),[b.j]),t.ob(30,4341760,null,0,s.Mb,[t.p,t.k],null,null),t.Fb(1024,null,b.d,(function(l){return[l]}),[s.Mb]),t.ob(32,671744,[["supportQuestion",4]],0,b.i,[[2,b.a],[6,b.c],[8,null],[6,b.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,b.e,null,[b.i]),t.ob(34,16384,null,0,b.f,[[4,b.e]],null,null),t.ob(35,49152,null,0,s.wb,[t.h,t.k,t.x],{name:[0,"name"],required:[1,"required"],rows:[2,"rows"]},null),(l()(),t.pb(36,0,null,null,3,"ion-text",[["color","danger"]],null,null,null,i.Rb,i.T)),t.ob(37,49152,null,0,s.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.pb(38,0,null,0,1,"p",[["class","ion-padding-start"]],[[8,"hidden",0]],null,null,null,null)),(l()(),t.Ib(-1,null,[" Support message is required "])),(l()(),t.pb(40,0,null,null,3,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),t.pb(41,0,null,null,2,"ion-button",[["expand","block"],["type","submit"]],null,null,null,i.bb,i.d)),t.ob(42,49152,null,0,s.l,[t.h,t.k,t.x],{expand:[0,"expand"],type:[1,"type"]},null),(l()(),t.Ib(-1,0,["Submit"]))],(function(l,n){var u=n.component;l(n,21,0,"none"),l(n,25,0,"primary","stacked"),l(n,28,0,""),l(n,32,0,"supportQuestion",u.supportMessage),l(n,35,0,"supportQuestion","","6"),l(n,37,0,"danger"),l(n,42,0,"block","submit")}),(function(l,n){var u=n.component;l(n,15,0,t.Bb(n,19).ngClassUntouched,t.Bb(n,19).ngClassTouched,t.Bb(n,19).ngClassPristine,t.Bb(n,19).ngClassDirty,t.Bb(n,19).ngClassValid,t.Bb(n,19).ngClassInvalid,t.Bb(n,19).ngClassPending),l(n,27,0,t.Bb(n,28).required?"":null,t.Bb(n,34).ngClassUntouched,t.Bb(n,34).ngClassTouched,t.Bb(n,34).ngClassPristine,t.Bb(n,34).ngClassDirty,t.Bb(n,34).ngClassValid,t.Bb(n,34).ngClassInvalid,t.Bb(n,34).ngClassPending),l(n,38,0,t.Bb(n,32).valid||!1===u.submitted)}))}function g(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"page-support",[],null,null,null,d,p)),t.ob(1,49152,null,0,a,[s.b,s.Nb],null,null)],null,null)}var c=t.lb("page-support",a,g,{},{},[]),m=u("SVse"),h=u("iInd");class v{}u.d(n,"SupportModuleNgFactory",(function(){return C}));var C=t.mb(o,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[e.a,c]],[3,t.j],t.v]),t.zb(4608,m.m,m.l,[t.s,[2,m.w]]),t.zb(4608,b.l,b.l,[]),t.zb(4608,s.c,s.c,[t.x,t.g]),t.zb(4608,s.Fb,s.Fb,[s.c,t.j,t.p]),t.zb(4608,s.Jb,s.Jb,[s.c,t.j,t.p]),t.zb(1073742336,m.b,m.b,[]),t.zb(1073742336,b.k,b.k,[]),t.zb(1073742336,b.b,b.b,[]),t.zb(1073742336,s.Cb,s.Cb,[]),t.zb(1073742336,h.q,h.q,[[2,h.v],[2,h.m]]),t.zb(1073742336,v,v,[]),t.zb(1073742336,o,o,[]),t.zb(1024,h.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);