(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"0db9":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md q-gutter-sm bg-grey-2 background-height relative-position"},[a("q-breadcrumbs",[a("q-breadcrumbs-el",{attrs:{label:"Vehiculos",icon:"assignment",to:e.ROUTES.vehicles.vehicles}}),a("q-breadcrumbs-el",{attrs:{label:e.action.created?"Crear":"Modificar",icon:e.action.created?"attach_file":"edit"}})],1),e.loadingState?a("div",[a("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1):e.withVehicleTypes?a("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[a("q-expansion-item",{attrs:{"expand-separator":"",icon:"account_circle",label:"Datos","default-opened":!0,caption:e.action.created?null:e.vehicleData.name}},[a("q-card",[a("q-card-section",[a("q-form",{on:{submit:e.onSubmit}},[a("div",{staticClass:"row q-mb-xs text-bold"},[e._v("\n              Información principal:\n            ")]),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",label:"Nombre","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa un nombre"},function(e){return e&&e.length<=80||"Longitud maxima de 80 carácteres"}]},model:{value:e.vehicleData.name,callback:function(t){e.$set(e.vehicleData,"name",t)},expression:"vehicleData.name"}}),a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",label:"Marca","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa una marca"}]},model:{value:e.vehicleData.mark,callback:function(t){e.$set(e.vehicleData,"mark",t)},expression:"vehicleData.mark"}}),a("q-input",{staticClass:"ControlForm col",attrs:{filled:"",label:"Modelo","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa un modelo"}]},model:{value:e.vehicleData.model,callback:function(t){e.$set(e.vehicleData,"model",t)},expression:"vehicleData.model"}})],1),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col-4 q-mr-md",attrs:{filled:"",label:"Placa","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa una placa"}]},model:{value:e.vehicleData.licensePlate,callback:function(t){e.$set(e.vehicleData,"licensePlate",t)},expression:"vehicleData.licensePlate"}}),a("q-select",{staticClass:"ControlForm col-5 q-mr-md",attrs:{filled:"",label:"Tipo de vehiculo",options:e.vehicleTypes,"option-value":"id","option-label":"name","stack-label":"","lazy-rules":"",rules:[]},model:{value:e.vehicleData.vehicleType,callback:function(t){e.$set(e.vehicleData,"vehicleType",t)},expression:"vehicleData.vehicleType"}})],1),a("div",{staticClass:"row q-mb-xs"},[a("q-select",{staticClass:"ControlForm col",attrs:{filled:"","use-chips":"",multiple:"",options:e.elements,"option-value":"id","option-label":function(e){return null===e?"":e.name+" - "+e.inventoryCode},label:"Elementos","stack-label":"","lazy-rules":"",hint:e.elements&&e.elements.length?"Selecciona los elementos que poseera el vehiculo":"No hay elementos disponibles",rules:[]},model:{value:e.vehicleData.elements,callback:function(t){e.$set(e.vehicleData,"elements",t)},expression:"vehicleData.elements"}})],1),a("q-btn",{staticClass:"full-width",attrs:{label:e.action.created?"GUARDAR":"ACTUALIZAR DATOS",loading:e.loading,type:"submit",color:"positive"}})],1)],1)],1)],1)],1):a("div",{staticClass:"text-center"},[a("div",{staticClass:"empty-state normal-section empty-vehicleTypes"}),a("h4",{staticClass:"empty-copy"},[e._v(" No hay tipos de vehiculos disponibles ")]),"supervisor"===e.user.type||"maquinista"!==e.user.type&&"administrador-general"!==e.user.type?e._e():a("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"LISTAR TIPOS DE VEHICULOS",to:e.ROUTES.vehicles.vehicleTypes}})],1)],1)},n=[],i=(a("456d"),a("8a81"),a("d25f"),a("9986"),a("8e6e"),a("448a")),s=a.n(i),r=a("9523"),c=a.n(r),o=a("c973"),u=a.n(o),p=a("a34a"),d=a.n(p),m=(a("a481"),a("7514"),a("bd4c")),h=a("e71c"),v=a("234a"),b=a("52c4"),f=a("2fa3");function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=m["b"].formatDate,x=Date.now(),q={name:"AlterVehicles",mixins:[v["a"]],data:function(){return{loadingState:!0,vehicleData:{name:null,mark:null,model:null,licensePlate:null,vehicleType:null,elements:null},loading:!1,today:x,ROUTES:h["p"],withVehicleTypes:!0,vehicleTypes:[],elements:[]}},methods:{onSubmit:function(){var e=this;return u()(d.a.mark((function t(){var a,l,n,i,s,r;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loading=!0,!e.action.created){t.next=21;break}return t.prev=2,t.next=5,b["a"].getApiFormat(e.vehicleData);case 5:return a=t.sent,t.next=8,e.$store.dispatch("vehicles/store",a);case 8:l="Registro exitoso",e.createNotification(g({message:l,timeout:3e3},h["q"])),e.loading=!1,e.$router.replace(h["p"].vehicles.vehicles),t.next=19;break;case 14:t.prev=14,t.t0=t["catch"](2),n=Object(f["d"])(t.t0),e.createNotification(g({message:n,timeout:5e3},h["b"])),e.loading=!1;case 19:t.next=38;break;case 21:return t.prev=21,t.next=24,b["a"].getApiFormat(e.vehicleData);case 24:return i=t.sent,t.next=27,e.$store.dispatch("vehicles/update",i);case 27:s="Actualizacion satisfactoria",e.createNotification(g({message:s,timeout:3e3},h["q"])),e.loading=!1,e.$router.replace(h["p"].vehicles.vehicles),t.next=38;break;case 33:t.prev=33,t.t1=t["catch"](21),r=Object(f["d"])(t.t1),e.createNotification(g({message:r,timeout:5e3},h["b"])),e.loading=!1;case 38:case"end":return t.stop()}}),t,null,[[2,14],[21,33]])})))()},maxDateIsToday:function(e){return e<=D(x,"YYYY/MM/DD")},minDateIsToday:function(e){return e>=D(x,"YYYY/MM/DD")}},computed:{user:function(){return this.$q.localStorage.getItem(h["n"])},action:function(){return this.$q.localStorage.getItem(h["m"])}},created:function(){var e=this;return u()(d.a.mark((function t(){var a,l,n;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("vehicleTypes/get");case 2:if(e.vehicleTypes=t.sent,e.withVehicleTypes=e.vehicleTypes.length>0,!e.withVehicleTypes){t.next=18;break}return t.next=7,e.$store.dispatch("elements/getElementsWithoutVehicle");case 7:if(e.elements=t.sent,!e.action.created){t.next=12;break}e.vehicleData.vehicleType=e.vehicleTypes?e.vehicleTypes[0]:{},t.next=18;break;case 12:return l=e.action.id,t.next=15,e.$store.dispatch("vehicles/getForId",l);case 15:n=t.sent,n.elements&&(a=e.elements).unshift.apply(a,s()(n.elements)),e.vehicleData=n;case 18:e.loadingState=!1;case 19:case"end":return t.stop()}}),t)})))()},beforeRouteEnter:function(e,t,a){a((function(t){if(t.user){var l=Object(h["v"])(t.user.type),n=l.find((function(t){return t===e.path}));n||a(l[0]),a()}else a("/")}))}},k=q,w=(a("de52"),a("2877")),C=Object(w["a"])(k,l,n,!1,null,null,null);t["default"]=C.exports},"10f1":function(e,t,a){},de52:function(e,t,a){"use strict";var l=a("10f1"),n=a.n(l);n.a}}]);