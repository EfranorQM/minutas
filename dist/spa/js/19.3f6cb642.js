(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"508e":function(e,t,n){"use strict";var a=n("9db2"),s=n.n(a);s.a},"9db2":function(e,t,n){},b065:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-py-lg q-px-xl bg-grey-2 background-height"},[n("div",{staticClass:"row q-mb-xs"},[n("div",{staticClass:"title"},[e._v("CONDECORACIONES")]),"supervisor"!==e.user.type&&e.awards&&e.awards.length?n("InteractionOptions",{attrs:{selected:e.selected,createFunction:e.createNew,editFunction:e.editRow,deleteFunction:e.openDelete}}):e._e()],1),n("q-separator"),e.awards?e.awards&&e.awards.length?n("TableView",{key:e.reRenderTable,attrs:{information:e.awards,columns:e.columns,visibleColumns:e.visibleColumns},on:{selection:function(t){e.selected=t}}}):n("div",{staticClass:"text-center"},[n("div",{staticClass:"empty-state normal-section empty-awards"}),n("h3",{staticClass:"empty-copy"},[e._v(" No hay registros aún.. ")]),"supervisor"!==e.user.type?n("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"PRIMER REGISTRO"},on:{click:e.createNew}}):e._e()],1):n("div",[n("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1)],1)},s=[],i=n("c973"),r=n.n(i),o=n("a34a"),c=n.n(o),l=(n("a481"),n("7514"),n("333e")),u=n("e802"),d=n("b924"),p=n("e71c"),w=[{en:"id",es:"ID"},{en:"dateMinutes",es:"FECHA ACTA"},{en:"dateResolution",es:"FECHA RESOLUCION"},{en:"codeMinutes",es:"CODIGO ACTA"},{en:"codeResolution",es:"CODIGO RESOLUCION"},{en:"description",es:"DESCRIPCION"},{en:"employee",es:"EMPLEADO"},{en:"awardType",es:"TIPO CONDECORACION"}],h=["codeMinutes","codeResolution","employee","awardType"],f={name:"Awards",components:{TableView:l["a"],InteractionOptions:d["a"]},data:function(){return{reRenderTable:0,loadingState:!0,selected:[],visibleColumns:h,loadingDelete:!1}},methods:{createNew:function(){this.$q.localStorage.set(p["d"],{created:!0}),this.$router.replace(p["p"].personal.alterAwards)},editRow:function(){this.$q.localStorage.set(p["d"],{created:!1,id:this.selected[0].id}),this.$router.replace(p["p"].personal.alterAwards)},organizerDataDelete:function(e){return e.reduce((function(e,t){return e.push({principal:t.codeMinutes,caption:t.awardType,side:t.employee}),e}),[])},openDelete:function(){var e=this;this.$q.dialog({component:u["a"],parent:this,dataShow:this.organizerDataDelete(this.selected),dataDelete:this.selected,deleteFunction:this.deleteRows}).onOk((function(){e.selected=[],e.reRenderTable+=1})).onCancel((function(){})).onDismiss((function(){e.getData()}))},deleteRows:function(e){var t=this;return r()(c.a.mark((function n(){return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("awards/remove",e);case 2:case"end":return n.stop()}}),n)})))()},getData:function(){this.$store.dispatch("awards/get")}},computed:{user:function(){return this.$q.localStorage.getItem(p["n"])},awards:function(){return this.$store.getters["awards/list"]},columns:function(){return Object(p["t"])(this.awards,w,h)}},beforeRouteEnter:function(e,t,n){n((function(t){if(t.user){var a=Object(p["v"])(t.user.type),s=a.find((function(t){return t===e.path}));s||n(a[0]),n()}else n("/")}))},created:function(){var e=this;return r()(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getData();case 1:case"end":return t.stop()}}),t)})))()}},m=f,C=(n("508e"),n("2877")),v=Object(C["a"])(m,a,s,!1,null,null,null);t["default"]=v.exports}}]);