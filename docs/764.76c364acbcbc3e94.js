"use strict";(self.webpackChunkoxperta_simulator=self.webpackChunkoxperta_simulator||[]).push([[764],{1764:(z,h,r)=>{r.r(h),r.d(h,{DebtUnifierSimulatorModule:()=>G});var u=r(9808),i=r(2382);const x=["Indefinido","Temporal","Aut\xf3nomo","Funcionario","Desempleado","Pensionista"];var A=r(3208),I=r(8675),_=r(4004),t=r(4893);function S(e,a){1&e&&(t.TgZ(0,"div",9)(1,"mat-form-field")(2,"p",10),t._uU(3,"\xbfCu\xe1nto te queda por pagar de hipoteca?"),t.qZA(),t._UZ(4,"input",11),t.TgZ(5,"span",12),t._uU(6,"\u20ac"),t.qZA(),t.TgZ(7,"mat-error"),t._uU(8,"Este campo es requerido"),t.qZA()(),t.TgZ(9,"mat-form-field")(10,"p",10),t._uU(11,"\xbfCu\xe1nto pagas al mes de hipoteca?"),t.qZA(),t._UZ(12,"input",13),t.TgZ(13,"span",12),t._uU(14,"\u20ac"),t.qZA(),t.TgZ(15,"mat-error"),t._uU(16,"Este campo es requerido"),t.qZA()(),t.TgZ(17,"mat-form-field")(18,"p",10),t._uU(19,"\xbfCu\xe1l es el valor de tu vivienda?"),t.qZA(),t._UZ(20,"input",14),t.TgZ(21,"span",12),t._uU(22,"\u20ac"),t.qZA(),t.TgZ(23,"mat-error"),t._uU(24,"Este campo es requerido"),t.qZA()()())}function D(e,a){1&e&&(t.TgZ(0,"div",9)(1,"mat-form-field")(2,"p",10),t._uU(3,"\xbfCu\xe1nto te queda por pagar de otros pr\xe9stamos?"),t.qZA(),t._UZ(4,"input",15),t.TgZ(5,"span",12),t._uU(6,"\u20ac"),t.qZA(),t.TgZ(7,"mat-error"),t._uU(8,"Este campo es requerido"),t.qZA()(),t.TgZ(9,"mat-form-field")(10,"p",10),t._uU(11,"\xbfCu\xe1nto pagas al mes de otros pr\xe9stamos?"),t.qZA(),t._UZ(12,"input",16),t.TgZ(13,"span",12),t._uU(14,"\u20ac"),t.qZA(),t.TgZ(15,"mat-error"),t._uU(16,"Este campo es requerido"),t.qZA()()())}function q(e,a){if(1&e&&(t.TgZ(0,"mat-option",25),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.Q6J("value",o),t.xp6(1),t.hij(" ",o," ")}}function F(e,a){if(1&e&&(t.TgZ(0,"div",9)(1,"mat-form-field")(2,"p",10),t._uU(3,"Edad del titular"),t.qZA(),t._UZ(4,"input",17),t.TgZ(5,"span",12),t._uU(6,"a\xf1os"),t.qZA(),t.TgZ(7,"mat-error"),t._uU(8,"Este campo es requerido"),t.qZA(),t.TgZ(9,"mat-error"),t._uU(10,"Edad m\xe1xima 99"),t.qZA(),t.TgZ(11,"mat-error"),t._uU(12,"Edad m\xednima 18"),t.qZA()(),t.TgZ(13,"mat-form-field")(14,"p",10),t._uU(15,"Ingresos mensuales netos de la unidad familiar"),t.qZA(),t._UZ(16,"input",18),t.TgZ(17,"span",12),t._uU(18,"\u20ac"),t.qZA(),t.TgZ(19,"mat-error"),t._uU(20,"Este campo es requerido"),t.qZA()(),t.TgZ(21,"mat-form-field")(22,"p",10),t._uU(23,"N\xba de pagas al a\xf1o"),t.qZA(),t._UZ(24,"input",19),t.TgZ(25,"mat-error"),t._uU(26,"Este campo es requerido"),t.qZA()(),t.TgZ(27,"mat-form-field",20)(28,"p",10),t._uU(29,"Tipo de Contrato"),t.qZA(),t._UZ(30,"input",21),t.TgZ(31,"mat-autocomplete",22,23),t.YNc(33,q,2,2,"mat-option",24),t.ALo(34,"async"),t.qZA(),t.TgZ(35,"mat-error"),t._uU(36,"Este campo es requerido"),t.qZA()()()),2&e){const o=t.MAs(32),n=t.oxw();t.xp6(30),t.Q6J("matAutocomplete",o),t.xp6(3),t.Q6J("ngForOf",t.lcZ(34,2,n.filteredContractType))}}function N(e,a){1&e&&(t.ynx(0),t._uU(1,"La operaci\xf3n es viable \u{1f44d}"),t.BQk())}function E(e,a){1&e&&(t.ynx(0),t._uU(1,"La operaci\xf3n puede ser compleja pero te ayudaremos \u26a0\ufe0f"),t.BQk())}function w(e,a){1&e&&(t.ynx(0),t._uU(1,"La operaci\xf3n es imposible de realizar \u{1f6ab}"),t.BQk())}function J(e,a){if(1&e&&(t.TgZ(0,"div",26),t.ynx(1,27),t.YNc(2,N,2,0,"ng-container",28),t.YNc(3,E,2,0,"ng-container",28),t.YNc(4,w,2,0,"ng-container",28),t.BQk(),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngSwitch",o.viability),t.xp6(1),t.Q6J("ngSwitchCase",o.operationViability.Viable),t.xp6(1),t.Q6J("ngSwitchCase",o.operationViability.Complex),t.xp6(1),t.Q6J("ngSwitchCase",o.operationViability.Impossible)}}function M(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.stepBack())}),t._uU(1,"Anterior"),t.qZA()}}function Q(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.stepForward())}),t._uU(1,"Siguiente"),t.qZA()}}function k(e,a){1&e&&t._UZ(0,"app-user-register")}var l=(()=>{return(e=l||(l={}))[e.Viable=0]="Viable",e[e.Complex=1]="Complex",e[e.Impossible=2]="Impossible",l;var e})();let y=(()=>{class e{constructor(){this.actualStep=1,this.operationViability=l,this.viability=l.Impossible,this.minFixInterest=A.b.fixed,this.years=30,this.monthly=0,this.total=0}ngOnInit(){this.initForm()}initForm(){const o={leftMortgage:new i.NI("",[i.kI.required]),monthlyMortgage:new i.NI("",[i.kI.required]),totalMortgage:new i.NI("",[i.kI.required]),leftDebts:new i.NI("",[i.kI.required]),monthlyDebts:new i.NI("",[i.kI.required]),age:new i.NI("",[i.kI.required]),monthlyEarnings:new i.NI("",[i.kI.required]),numberOfPays:new i.NI("",[i.kI.required]),contractType:new i.NI("",[i.kI.required])};this.formGroup=new i.cw(o),this.filteredContractTypeListener()}filteredContractTypeListener(){this.filteredContractType=this.formGroup.controls.contractType.valueChanges.pipe((0,I.O)(""),(0,_.U)(o=>this._filterContractType(o||"")))}_filterContractType(o){const n=o.toLowerCase();return x.filter(s=>s.toLowerCase().includes(n))}stepForward(){3===this.actualStep?this.calcOperation():this.resetValues(),this.actualStep++}stepBack(){this.actualStep--,this.resetValues()}resetValues(){this.viability=l.Impossible,this.monthly=0,this.total=0}calcOperation(){this.viability=l.Viable;const o=this.formGroup.controls;if(o.age.value.toString()>"60")return void(this.viability=l.Impossible);const s=o.leftMortgage.value+o.leftDebts.value,f=o.totalMortgage.value,m=.9*f;if(s>=.8*f&&s<=m)this.viability=l.Complex;else if(s>m)return void(this.viability=l.Impossible);const p=o.contractType.value;if("Indefinido"!==p&&"Aut\xf3nomo"!==p&&"Funcionario"!==p)return void(this.viability=l.Impossible);const b=o.monthlyDebts.value+o.monthlyMortgage.value,T=o.monthlyEarnings.value,U=.45*T;if(b>=.33*T&&b<=U)this.viability=l.Complex;else if(b>U)return void(this.viability=l.Impossible);this.calcTotalMortgage(o.leftMortgage.value,o.monthlyMortgage.value,o.leftDebts.value,o.monthlyDebts.value)}calcTotalMortgage(o,n,s,f){const m=Math.floor(Math.max(o/n,s/f)),g=this.minFixInterest/100/12;this.monthly=Math.round((o+s)*g/(1-Math.pow(1+g,-m))),this.total=Math.round(this.monthly*m)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-debt-unifier-simulator"]],decls:12,vars:11,consts:[[1,"flex","w-full","desktop:flex-row","mobile:flex-col","pt-10","desktop:space-x-5","mobile:space-y-5","px-5"],[1,"flex","desktop:w-1/2","mobile:w-full","flex-column",3,"formGroup"],["class","flex flex-column",4,"ngIf"],["class","flex items-center justify-center w-full py-10 flex-column",4,"ngIf"],[1,"flex","justify-between"],["class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",3,"click",4,"ngIf"],[1,"flex","desktop:w-1/2","mobile:w-full","flex-column"],[3,"monthly","total","viability"],[4,"ngIf"],[1,"flex","flex-column"],[1,"mat-form-field-title","font-hint"],["formControlName","leftMortgage","matInput","","mask","separator","thousandSeparator","."],["matSuffix",""],["formControlName","monthlyMortgage","matInput","","mask","separator","thousandSeparator","."],["formControlName","totalMortgage","matInput","","mask","separator","thousandSeparator","."],["formControlName","leftDebts","matInput","","mask","separator","thousandSeparator","."],["formControlName","monthlyDebts","matInput","","mask","separator","thousandSeparator","."],["formControlName","age","matInput","","type","number"],["formControlName","monthlyEarnings","matInput","","mask","separator","thousandSeparator","."],["formControlName","numberOfPays","matInput","","type","number"],["appearance","fill"],["type","text","matInput","","formControlName","contractType",3,"matAutocomplete"],["autoActiveFirstOption",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"flex","items-center","justify-center","w-full","py-10","flex-column"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded-full",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"form",1),t.YNc(2,S,25,0,"div",2),t.YNc(3,D,17,0,"div",2),t.YNc(4,F,37,4,"div",2),t.YNc(5,J,5,4,"div",3),t.TgZ(6,"div",4),t.YNc(7,M,2,0,"button",5),t.YNc(8,Q,2,0,"button",5),t.qZA()(),t.TgZ(9,"div",6),t._UZ(10,"app-debts-payments",7),t.YNc(11,k,1,0,"app-user-register",8),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("formGroup",n.formGroup),t.xp6(1),t.Q6J("ngIf",1===n.actualStep),t.xp6(1),t.Q6J("ngIf",2===n.actualStep),t.xp6(1),t.Q6J("ngIf",3===n.actualStep),t.xp6(1),t.Q6J("ngIf",4===n.actualStep),t.xp6(2),t.Q6J("ngIf",n.actualStep>=2),t.xp6(1),t.Q6J("ngIf",n.actualStep<4),t.xp6(2),t.Q6J("monthly",n.monthly)("total",n.total)("viability",n.viability),t.xp6(1),t.Q6J("ngIf",n.viability!==n.operationViability.Impossible&&4===n.actualStep))}}),e})();var Z=r(3104);const B=[{path:"",component:y}];let V=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[Z.Bz.forChild(B),Z.Bz]}),e})();var c=r(7322),j=r(7446),v=r(7531),C=r(1470),d=r(9815),L=r(6690);let O=(()=>{class e{constructor(){this.operationViability=l,this.viability=l.Impossible,this.monthly=0,this.total=0}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-debts-payments"]],inputs:{viability:"viability",monthly:"monthly",total:"total"},decls:15,vars:9,consts:[[1,"p-6","space-y-4",3,"ngClass"],[1,"flex","justify-between"],[1,"text-2xl",3,"ngClass"],[1,"text-gray-500"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3,"Tu cuota mensual"),t.qZA(),t.TgZ(4,"h1",2),t._uU(5),t.ALo(6,"number"),t.qZA()(),t.TgZ(7,"div",1)(8,"span",3),t._uU(9,"Unificaci\xf3n total de deudas:"),t.qZA(),t.TgZ(10,"span",3),t._uU(11),t.ALo(12,"number"),t.qZA()(),t.TgZ(13,"h1",3),t._uU(14,"TAE"),t.qZA()()),2&o&&(t.Q6J("ngClass",n.viability!==n.operationViability.Impossible?"bg-green-100":"bg-red-100"),t.xp6(2),t.Q6J("ngClass",n.viability!==n.operationViability.Impossible?"text-green-500":"text-red-600"),t.xp6(2),t.Q6J("ngClass",n.viability!==n.operationViability.Impossible?"text-green-500":"text-red-600"),t.xp6(1),t.hij("",t.lcZ(6,5,n.monthly)," \u20ac"),t.xp6(6),t.hij("",t.lcZ(12,7,n.total)," \u20ac"))},dependencies:[u.mk,u.JJ]}),e})();var P=r(508),Y=r(2744);let G=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,V,i.UX,c.lN,j.p9,v.c,C.yI,d.Bb,L.J]}),e})();t.B6R(y,[u.sg,u.O5,u.RF,u.n9,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,c.TO,c.KE,c.R9,v.Nt,C.hx,d.XC,d.ZL,P.ey,Y.a,O],[u.Ov])}}]);