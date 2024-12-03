(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{"3ab3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-py-lg q-px-xl bg-grey-2 background-height"},[n("div",{staticClass:"row q-mb-xs"},[n("div",{staticClass:"title"},[e._v("TIPOS DE VEHICULOS")]),"supervisor"!==e.user.type&&e.vehicleTypes&&e.vehicleTypes.length?n("InteractionOptions",{attrs:{selected:e.selected,createFunction:e.openCreateNew,editFunction:e.openUpdate,deleteFunction:e.openDelete}}):e._e()],1),n("q-separator"),e.loadingState?n("div",[n("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1):e.vehicleTypes&&e.vehicleTypes.length?n("TableView",{key:e.reRenderTable,attrs:{information:e.vehicleTypes,columns:e.columns,visibleColumns:e.visibleColumns},on:{selection:function(t){e.selected=t}}}):n("div",{staticClass:"text-center"},[n("div",{staticClass:"empty-state normal-section empty-vehicleTypes"}),n("h3",{staticClass:"empty-copy"},[e._v(" No hay registros aún.. ")]),"supervisor"!==e.user.type?n("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"PRIMER REGISTRO"},on:{click:e.openCreateNew}}):e._e()],1),n("q-dialog",{model:{value:e.alterVehicleType,callback:function(t){e.alterVehicleType=t},expression:"alterVehicleType"}},[n("q-card",{staticStyle:{width:"480px","max-width":"80vw"}},[e.gettingInfo?n("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"3em"}}):e._e(),n("q-card-section",[n("div",{staticClass:"text-h6 text-bold"},[e._v("Tipo vehiculo")])]),n("q-card-section",[n("q-form",{on:{submit:e.alterRow,reset:e.reset}},[n("q-input",{staticClass:"ControlForm",attrs:{filled:"",disable:e.gettingInfo,label:"Nombre del tipo","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingrese un tipo"},function(e){return e&&e.length<=80||"Longitud maxima de 80 carácteres"}]},model:{value:e.vehicleTypeData.name,callback:function(t){e.$set(e.vehicleTypeData,"name",t)},expression:"vehicleTypeData.name"}}),n("q-separator",{staticClass:"q-mb-sm"}),n("div",{attrs:{align:"center"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"negative",type:"reset",flat:"",label:"Cancelar",disable:e.loadingAlter}}),n("q-btn",{attrs:{color:"positive",type:"submit",flat:"",label:"Guardar",disable:e.gettingInfo,loading:e.loadingAlter}})],1)],1)],1)],1)],1)],1)},i=[],r=(n("456d"),n("8a81"),n("d25f"),n("9986"),n("8e6e"),n("9523")),s=n.n(r),c=n("c973"),o=n.n(c),l=(n("7f7f"),n("7514"),n("a34a")),u=n.n(l),p=n("333e"),d=n("e802"),h=n("b924"),f=n("e71c"),v=n("234a"),g=n("35a9"),m=n("2fa3"),b=[{en:"id",es:"ID"},{en:"name",es:"NOMBRE"}],y=["id","name"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={name:"VehicleTypes",components:{TableView:p["a"],InteractionOptions:h["a"]},data:function(){return{loadingState:!0,alterVehicleType:!1,reRenderTable:0,selected:[],visibleColumns:y,loadingDelete:!1,isCreate:null,gettingInfo:!1,loadingAlter:!1,vehicleTypeData:{name:null}}},mixins:[v["a"]],methods:{openCreateNew:function(){this.isCreate=!0,this.reset(),this.alterVehicleType=!0},openUpdate:function(){var e=this;return o()(u.a.mark((function t(){var n;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isCreate=!1,e.reset(),e.alterVehicleType=!0,e.gettingInfo=!0,t.next=6,e.$store.dispatch("vehicleTypes/getForId",e.selected[0].id);case 6:n=t.sent,e.vehicleTypeData=n,e.gettingInfo=!1;case 9:case"end":return t.stop()}}),t)})))()},alterRow:function(){var e=this;return o()(u.a.mark((function t(){var n,a,i,r,s,c;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loadingAlter=!0,!e.isCreate){t.next=22;break}return t.prev=2,t.next=5,g["a"].getApiFormat(e.vehicleTypeData);case 5:return n=t.sent,t.next=8,e.$store.dispatch("vehicleTypes/store",n);case 8:a="Registro exitoso",e.getData(),e.alterVehicleType=!1,e.loadingAlter=!1,e.createNotification(T({message:a,timeout:3e3},f["q"])),t.next=20;break;case 15:t.prev=15,t.t0=t["catch"](2),i=Object(m["d"])(t.t0),e.createNotification(T({message:i,timeout:5e3},f["b"])),e.loadingAlter=!1;case 20:t.next=40;break;case 22:return t.prev=22,t.next=25,g["a"].getApiFormat(e.vehicleTypeData);case 25:return r=t.sent,t.next=28,e.$store.dispatch("vehicleTypes/update",r);case 28:s="Actualizacion exitosa",e.getData(),e.alterVehicleType=!1,e.loadingAlter=!1,e.createNotification(T({message:s,timeout:3e3},f["q"])),t.next=40;break;case 35:t.prev=35,t.t1=t["catch"](22),c=Object(m["d"])(t.t1),e.createNotification(T({message:c,timeout:5e3},f["b"])),e.loadingAlter=!1;case 40:case"end":return t.stop()}}),t,null,[[2,15],[22,35]])})))()},organizerDataDelete:function(e){return e.reduce((function(e,t){return e.push({principal:t.name,caption:"",side:"ID: ".concat(t.id," ")}),e}),[])},openDelete:function(){var e=this;this.$q.dialog({component:d["a"],parent:this,dataShow:this.organizerDataDelete(this.selected),dataDelete:this.selected,deleteFunction:this.deleteRows}).onOk((function(){e.selected=[],e.reRenderTable+=1})).onCancel((function(){})).onDismiss((function(){e.getData()}))},deleteRows:function(e){var t=this;return o()(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("vehicleTypes/remove",e);case 2:case"end":return n.stop()}}),n)})))()},reset:function(){this.vehicleTypeData={name:null}},getData:function(){var e=this;return o()(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("vehicleTypes/get");case 2:e.loadingState=!1;case 3:case"end":return t.stop()}}),t)})))()}},computed:{user:function(){return this.$q.localStorage.getItem(f["n"])},vehicleTypes:function(){return this.$store.getters["vehicleTypes/list"]},columns:function(){return Object(f["t"])(this.vehicleTypes,b,y)}},beforeRouteEnter:function(e,t,n){n((function(t){if(t.user){var a=Object(f["v"])(t.user.type),i=a.find((function(t){return t===e.path}));i||n(a[0]),n()}else n("/")}))},created:function(){var e=this;return o()(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData();case 2:case"end":return t.stop()}}),t)})))()}},D=x,O=(n("dc49"),n("2877")),C=Object(O["a"])(D,a,i,!1,null,null,null);t["default"]=C.exports},dc49:function(e,t,n){"use strict";var a=n("dc85"),i=n.n(a);i.a},dc85:function(e,t,n){}}]);