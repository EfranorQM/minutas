(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"0946":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-py-lg q-px-xl bg-grey-2 background-height"},[n("div",{staticClass:"row q-mb-xs"},[n("div",{staticClass:"title"},[e._v("HOJAS DE VIDA")]),"supervisor"!==e.user.type&&e.employees&&e.employees.length?n("InteractionOptions",{attrs:{selected:e.selected,createFunction:e.createNew,editFunction:e.editRow,deleteFunction:e.openDelete}}):e._e()],1),n("q-separator"),e.employees?e.employees&&e.employees.length?n("TableView",{key:e.reRenderTable,attrs:{information:e.employees,columns:e.columns,visibleColumns:e.visibleColumns},on:{selection:function(t){e.selected=t}}}):n("div",{staticClass:"text-center"},[n("div",{staticClass:"empty-state normal-section empty-curriculums"}),n("h3",{staticClass:"empty-copy"},[e._v(" No hay registros aún.. ")]),"supervisor"!==e.user.type?n("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"PRIMER REGISTRO"},on:{click:e.createNew}}):e._e()],1):n("div",[n("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1)],1)},r=[],i=n("c973"),o=n.n(i),a=n("9523"),c=n.n(a),l=n("a34a"),u=n.n(l),p=(n("a481"),n("7514"),n("456d"),n("8a81"),n("d25f"),n("9986"),n("8e6e"),n("333e")),d=n("e802"),m=n("b924"),f=n("e71c"),h=n("234a"),O=[{en:"id",es:"ID"},{en:"code",es:"CODIGO"},{en:"npib",es:"NPIB"},{en:"dateIn",es:"FECHA INGRESO"},{en:"active",es:"ACTIVO"},{en:"filing",es:"RADICACION"},{en:"document",es:"DOCUMENTO"},{en:"height",es:"ESTATURA"},{en:"weight",es:"PESO"},{en:"phone",es:"TELEFONO"},{en:"beeper",es:"BEEPER"},{en:"email",es:"EMAIL"},{en:"passport",es:"PASAPORTE"},{en:"sure",es:"SEGURO"},{en:"houseType",es:"TIPO CASA"},{en:"dependents",es:"PERSONAS A CARGO"},{en:"activity",es:"ACTIVIDAD"},{en:"work",es:"LABOR"},{en:"machine",es:"MAQUINA"},{en:"computer",es:"COMPUTADOR"},{en:"hobi",es:"HOBI"},{en:"userType",es:"TIPO USUARIO"},{en:"bloodType",es:"TIPO SANGRE"},{en:"city",es:"CIUDAD"},{en:"birthCity",es:"CIUDAD NATAL"},{en:"profession",es:"PROFESION"},{en:"person",es:"NOMBRE"}],y=["code","person","userType","active"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={name:"Curriculum",components:{TableView:p["a"],InteractionOptions:m["a"]},data:function(){return{reRenderTable:0,loadingState:!0,selected:[],visibleColumns:y,loadingDelete:!1,currentEmployee:null}},mixins:[h["a"]],methods:{createNew:function(){this.$q.localStorage.set(f["g"],{created:!0}),this.$router.replace(f["p"].personal.alterCurriculum)},editRow:function(){this.$q.localStorage.set(f["g"],{created:!1,id:this.selected[0].id}),this.$router.replace(f["p"].personal.alterCurriculum)},organizerDataDelete:function(e){return e.reduce((function(e,t){return e.push({principal:t.person,caption:t.code,side:t.userType}),e}),[])},openDelete:function(){var e=this,t=this.selected.find((function(t){return t.id===e.currentEmployee.id}));if(t){var n="No se puede eliminar la informacion del usuario logueado";this.createNotification(g({message:n,timeout:3e3},f["b"]))}else this.$q.dialog({component:d["a"],parent:this,dataShow:this.organizerDataDelete(this.selected),dataDelete:this.selected,deleteFunction:this.deleteRows}).onOk((function(){e.selected=[],e.reRenderTable+=1})).onCancel((function(){})).onDismiss((function(){e.getData()}))},deleteRows:function(e){var t=this;return o()(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("employees/remove",e);case 2:case"end":return n.stop()}}),n)})))()},getData:function(){this.$store.dispatch("employees/get")}},computed:{user:function(){return this.$q.localStorage.getItem(f["n"])},employees:function(){return this.$store.getters["employees/list"]},columns:function(){return Object(f["t"])(this.employees,O,y)}},beforeRouteEnter:function(e,t,n){n((function(t){if(t.user){var s=Object(f["v"])(t.user.type),r=s.find((function(t){return t===e.path}));r||n(s[0]),n()}else n("/")}))},created:function(){var e=this;return o()(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("employees/getForId",e.user.id);case 2:e.currentEmployee=t.sent,e.getData();case 4:case"end":return t.stop()}}),t)})))()}},w=v,D=(n("59a2"),n("2877")),A=Object(D["a"])(w,s,r,!1,null,null,null);t["default"]=A.exports},"38ec":function(e,t,n){},"59a2":function(e,t,n){"use strict";var s=n("38ec"),r=n.n(s);r.a}}]);