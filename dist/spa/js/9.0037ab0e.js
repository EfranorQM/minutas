(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"6a2a":function(e,t,a){},9588:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md q-gutter-sm bg-grey-2 background-height relative-position"},[a("q-breadcrumbs",[a("q-breadcrumbs-el",{attrs:{label:"Hojas de vida",icon:"person",to:e.ROUTES.personal.curriculum}}),a("q-breadcrumbs-el",{attrs:{label:e.action.created?"Crear":"Modificar",icon:e.action.created?"attach_file":"edit"}})],1),e.loadingState?a("div",[a("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1):e.withPersons||!e.action.created?a("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[a("q-expansion-item",{attrs:{group:"tables-adds","expand-separator":"",icon:"account_circle",label:"Datos","default-opened":e.action.created,caption:e.employeeData.person.name||null}},[a("q-card",[a("q-card-section",[a("q-form",{on:{submit:e.onSubmit}},[a("div",{staticClass:"row q-mb-xs text-bold"},[e._v("\n              Información principal:\n            ")]),a("div",{staticClass:"row"},[a("q-toggle",{staticClass:"q-mb-sm",attrs:{color:"green",label:"Activo",disable:e.unalterable},model:{value:e.employeeData.active,callback:function(t){e.$set(e.employeeData,"active",t)},expression:"employeeData.active"}}),!e.action.created&&e.withFingerPrint.length>0?a("q-btn",{staticClass:"q-ml-auto",staticStyle:{height:"min-content"},attrs:{color:"red",label:"Eliminar huella","icon-right":"fingerprint",loading:e.deletingFingerprint},on:{click:e.bulkFingerPrint}}):e._e(),!e.action.created&&e.withFingerPrint.length<1?a("q-btn",{staticClass:"q-ml-auto",staticStyle:{height:"min-content"},attrs:{color:"green",label:"Registrar Huella","icon-right":"fingerprint",loading:e.deletingFingerprint},on:{click:e.createHuella}}):e._e()],1),a("div",{staticClass:"row q-mb-xs"},[a("q-select",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",label:"Persona disponible",disable:e.unalterable,options:e.persons,"option-value":"id","option-label":"name","stack-label":"","lazy-rules":"",rules:[]},model:{value:e.employeeData.person,callback:function(t){e.$set(e.employeeData,"person",t)},expression:"employeeData.person"}}),a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",type:"number",min:"0",label:"Código","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa el código"},function(e){return e&&e>=0||"Numero invalido"}]},model:{value:e.employeeData.code,callback:function(t){e.$set(e.employeeData,"code",t)},expression:"employeeData.code"}}),a("q-input",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",label:"Contraseña","stack-label":"",type:e.isPwd?"password":"text","lazy-rules":"",rules:e.action.created?[function(e){return e&&e.length>0||"Por favor ingresa la contraseña"}]:[],hint:e.action.created?"":"La contraseña actual estará oculta"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.employeeData.password,callback:function(t){e.$set(e.employeeData,"password",t)},expression:"employeeData.password"}}),a("q-select",{staticClass:"ControlForm col-3",attrs:{filled:"",label:"Tipo de usuario",disable:e.unalterable,options:e.userTypes,"option-value":"id","option-label":"name","stack-label":"","lazy-rules":"",rules:[]},model:{value:e.employeeData.userType,callback:function(t){e.$set(e.employeeData,"userType",t)},expression:"employeeData.userType"}})],1),a("div",{staticClass:"row q-mb-xs"},[a("SelectionInput",{staticClass:"col-5 q-mr-md",attrs:{searchParent:e.employeeData.city,optionsMenu:e.cities,optionValue:"id",optionLabel:"name",filled:!0,label:"Ciudad",hint:e.employeeData.city?"":"Escribe por lo menos dos letras, ten en cuenta las tildes.",rules:[function(){return e.employeeData.city||"Por favor selecciona una ciudad"}]},model:{value:e.employeeData.city,callback:function(t){e.$set(e.employeeData,"city",t)},expression:"employeeData.city"}}),a("q-input",{staticClass:"ControlForm col-2 q-mr-md",attrs:{filled:"",label:"Fecha Ingreso","stack-label":"",readonly:"",rules:[function(e){return e&&e.length>0||"Por favor ingresa una fecha"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY",options:e.maxDateIsToday},on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.employeeData.dateIn,callback:function(t){e.$set(e.employeeData,"dateIn",t)},expression:"employeeData.dateIn"}})],1)],1)]},proxy:!0}]),model:{value:e.employeeData.dateIn,callback:function(t){e.$set(e.employeeData,"dateIn",t)},expression:"employeeData.dateIn"}}),a("q-select",{staticClass:"ControlForm col-2 q-mr-md",attrs:{filled:"",options:["Arrendada","Propia"],label:"Tipo de casa","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor selecciona un tipo"}]},model:{value:e.employeeData.houseType,callback:function(t){e.$set(e.employeeData,"houseType",t)},expression:"employeeData.houseType"}})],1),a("div",{staticClass:"row q-mb-xs"},[a("q-select",{staticClass:"ControlForm col",attrs:{filled:"","use-chips":"",multiple:"",options:e.languages,"option-value":"id","option-label":"name",label:"Idiomas","stack-label":"","lazy-rules":"",hint:"Selecciona por lo menos un idioma",rules:[function(e){return e&&e.length>0||"Por favor selecciona por lo menos un idioma"}]},model:{value:e.employeeData.languages,callback:function(t){e.$set(e.employeeData,"languages",t)},expression:"employeeData.languages"}})],1),a("div",{staticClass:"row q-mb-xs text-bold"},[e._v("\n              Información adicional:\n            ")]),a("div",{staticClass:"row q-mb-xs"},[a("q-toggle",{staticClass:"col-2 q-mr-md",attrs:{color:"primary",label:"Computador"},model:{value:e.employeeData.computer,callback:function(t){e.$set(e.employeeData,"computer",t)},expression:"employeeData.computer"}}),a("q-toggle",{staticClass:"col-2 q-mr-md",attrs:{color:"primary",label:"Libreta Militar"},model:{value:e.militaryCard,callback:function(t){e.militaryCard=t},expression:"militaryCard"}}),a("q-toggle",{staticClass:"col-3 q-mr-md",attrs:{color:"primary",label:"Licencia de conducción"},model:{value:e.license,callback:function(t){e.license=t},expression:"license"}})],1),a("div",{staticClass:"row q-mb-xs"},[a("q-input",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",type:"number",min:0,label:"Código NPIB","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e>=0?e.length<=50||"Longitud maxima de 50 carácteres":"Numero incorrecto")}]},model:{value:e.employeeData.npib,callback:function(t){e.$set(e.employeeData,"npib",t)},expression:"employeeData.npib"}}),a("q-input",{staticClass:"ControlForm col-2 q-mr-md",attrs:{filled:"",type:"number",min:0,label:"Pers. a cargo","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e>=0||"Numero incorrecto")}]},model:{value:e.employeeData.dependents,callback:function(t){e.$set(e.employeeData,"dependents",t)},expression:"employeeData.dependents"}}),a("q-input",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",label:"Seguro","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e.length<=50||"Longitud maxima de 50 carácteres")}]},model:{value:e.employeeData.sure,callback:function(t){e.$set(e.employeeData,"sure",t)},expression:"employeeData.sure"}}),a("q-input",{staticClass:"ControlForm col",attrs:{filled:"",label:"Radicación","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e.length<=50||"Longitud maxima de 50 carácteres")}]},model:{value:e.employeeData.filing,callback:function(t){e.$set(e.employeeData,"filing",t)},expression:"employeeData.filing"}})],1),a("div",{staticClass:"row q-mb-xs"},[a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",label:"Pasaporte","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e.length<=50||"Longitud maxima de 50 carácteres")}]},model:{value:e.employeeData.passport,callback:function(t){e.$set(e.employeeData,"passport",t)},expression:"employeeData.passport"}}),a("q-input",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",label:"Actividad","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e.length<=100||"Longitud maxima de 100 carácteres")}]},model:{value:e.employeeData.activity,callback:function(t){e.$set(e.employeeData,"activity",t)},expression:"employeeData.activity"}}),a("q-input",{staticClass:"ControlForm col",attrs:{filled:"",label:"Maquina","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e.length<=100||"Longitud maxima de 100 carácteres")}]},model:{value:e.employeeData.machine,callback:function(t){e.$set(e.employeeData,"machine",t)},expression:"employeeData.machine"}})],1),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col-4 q-mr-md",attrs:{filled:"",label:"Labor","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e.length<=100||"Longitud maxima de 100 carácteres")}]},model:{value:e.employeeData.work,callback:function(t){e.$set(e.employeeData,"work",t)},expression:"employeeData.work"}}),a("q-input",{staticClass:"ControlForm col",attrs:{filled:"",label:"Hobi","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e.length<=150||"Longitud maxima de 150 carácteres")}]},model:{value:e.employeeData.hobi,callback:function(t){e.$set(e.employeeData,"hobi",t)},expression:"employeeData.hobi"}})],1),e.militaryCard?a("div",{staticClass:"row q-mb-md text-bold"},[e._v("\n              Libreta militar:\n            ")]):e._e(),e.militaryCard?a("div",{staticClass:"row q-mb-xs"},[a("q-select",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",options:["Primera","Segunda"],label:"Clase","stack-label":"","lazy-rules":"",rules:[function(t){return e.militaryCard&&t&&t.length>0||"Por favor selecciona una clase"}]},model:{value:e.employeeData.militaryCard.class,callback:function(t){e.$set(e.employeeData.militaryCard,"class",t)},expression:"employeeData.militaryCard.class"}}),a("q-input",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",label:"Distrito","stack-label":"","lazy-rules":"",rules:[function(t){return t&&e.militaryCard||"Por favor ingrese un distrito"},function(t){return t&&e.militaryCard&&t.length<=80||"Longitud maxima de 80 carácteres"}]},model:{value:e.employeeData.militaryCard.district,callback:function(t){e.$set(e.employeeData.militaryCard,"district",t)},expression:"employeeData.militaryCard.district"}})],1):e._e(),e.license?a("div",{staticClass:"row q-mb-md text-bold"},[e._v("\n              Licencia de conducción:\n            ")]):e._e(),e.license?a("div",{staticClass:"row q-mb-xs"},[a("q-input",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",label:"Fecha de expedición",readonly:"","stack-label":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa una fecha"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY",options:e.maxDateIsToday},on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.employeeData.license.expeditionDate,callback:function(t){e.$set(e.employeeData.license,"expeditionDate",t)},expression:"employeeData.license.expeditionDate"}})],1)],1)]},proxy:!0}],null,!1,1061749900),model:{value:e.employeeData.license.expeditionDate,callback:function(t){e.$set(e.employeeData.license,"expeditionDate",t)},expression:"employeeData.license.expeditionDate"}}),a("q-input",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",label:"Fecha de vigencia",readonly:"","stack-label":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa una fecha"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY",options:e.minDateIsToday},on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.employeeData.license.effectiveDate,callback:function(t){e.$set(e.employeeData.license,"effectiveDate",t)},expression:"employeeData.license.effectiveDate"}})],1)],1)]},proxy:!0}],null,!1,3838100550),model:{value:e.employeeData.license.effectiveDate,callback:function(t){e.$set(e.employeeData.license,"effectiveDate",t)},expression:"employeeData.license.effectiveDate"}}),a("q-select",{staticClass:"ControlForm col-2 q-mr-md",attrs:{filled:"",label:"Categoria",options:e.licenseCategories,"option-value":"id","option-label":"name","stack-label":"","lazy-rules":"",rules:[]},model:{value:e.employeeData.license.licenseCategory,callback:function(t){e.$set(e.employeeData.license,"licenseCategory",t)},expression:"employeeData.license.licenseCategory"}})],1):e._e(),a("div",[e.action.created?a("div",{staticClass:"q-field__bottom q-mb-sm"},[a("strong",[e._v("IMPORTANTE:")]),e._v(" Para tener acceso a las demas secciones(cursos\n                bomberiles, educación, etc.) es necesario crear la hoja de vida y luego editarla.\n              ")]):e._e(),a("q-btn",{staticClass:"full-width",attrs:{label:e.action.created?"GUARDAR":"ACTUALIZAR DATOS",loading:e.loading,type:"submit",color:"positive"}})],1)])],1)],1)],1),e.action.created?e._e():a("div",[a("q-expansion-item",{attrs:{group:"tables-adds","expand-separator":"",icon:"fireplace",label:"Curso Bomberil"},model:{value:e.sections.courses,callback:function(t){e.$set(e.sections,"courses",t)},expression:"sections.courses"}},[a("q-card",[a("q-card-section",[a("Courses",{attrs:{loading:e.loadingStateCourse,idTarget:e.action.id}})],1)],1)],1),a("q-expansion-item",{attrs:{group:"tables-adds","expand-separator":"",icon:"school",label:"Educación"},model:{value:e.sections.education,callback:function(t){e.$set(e.sections,"education",t)},expression:"sections.education"}},[a("q-card",[a("q-card-section",[a("Educations",{attrs:{loading:e.loadingStateEducation,idTarget:e.action.id,cities:e.cities}})],1)],1)],1),a("q-expansion-item",{attrs:{group:"tables-adds","expand-separator":"",icon:"assessment",label:"Experiencia"},model:{value:e.sections.experiences,callback:function(t){e.$set(e.sections,"experiences",t)},expression:"sections.experiences"}},[a("q-card",[a("q-card-section",[a("Experiences",{attrs:{loading:e.loadingStateExperience,idTarget:e.action.id}})],1)],1)],1),a("q-expansion-item",{attrs:{group:"tables-adds","expand-separator":"",icon:"info",label:"Información Bomberil"},model:{value:e.sections.information,callback:function(t){e.$set(e.sections,"information",t)},expression:"sections.information"}},[a("q-card",[a("q-card-section",[a("Informations",{attrs:{loading:e.loadingStateInformation,idTarget:e.action.id,ranks:e.ranks}})],1)],1)],1),a("q-expansion-item",{attrs:{group:"tables-adds","expand-separator":"",icon:"supervised_user_circle",label:"Capacitación"},model:{value:e.sections.trainings,callback:function(t){e.$set(e.sections,"trainings",t)},expression:"sections.trainings"}},[a("q-card",[a("q-card-section",[a("Trainings",{attrs:{loading:e.loadingStateTranings,idTarget:e.action.id}})],1)],1)],1)],1)],1):a("div",{staticClass:"text-center"},[a("div",{staticClass:"empty-state normal-section empty-persons"}),a("h4",{staticClass:"empty-copy"},[e._v(" No hay personas sin hojas de vida ")]),"supervisor"===e.user.type||"personal"!==e.user.type&&"administrador-general"!==e.user.type?e._e():a("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"LISTAR PERSONAS",to:e.ROUTES.personal.persons}})],1)],1)},s=[],i=(a("456d"),a("8a81"),a("d25f"),a("9986"),a("8e6e"),a("9523")),o=a.n(i),r=a("c973"),l=a.n(r),c=a("a34a"),u=a.n(c),d=(a("a481"),a("5df3"),a("06db"),a("cadf"),a("ac6a"),a("551c"),a("7514"),a("bd4c")),p=a("e71c"),m=a("0e14"),y=a("234a"),g=a("8331"),f=a("2fa3"),b=a("b928"),x=a("3906"),D=a("8942"),h=a("1aa7"),v=a("7a93");function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=d["b"].formatDate,w=Date.now(),S={name:"AlterCurriculum",components:{SelectionInput:m["a"],Courses:b["a"],Educations:x["a"],Experiences:D["a"],Informations:h["a"],Trainings:v["a"]},mixins:[y["a"]],data:function(){return{sectionsSelected:{},sections:{courses:!1,education:!1,experiences:!1,information:!1,trainings:!1},loadingState:!0,loadingStateCourse:!0,loadingStateEducation:!0,loadingStateExperience:!0,loadingStateInformation:!0,loadingStateTranings:!0,unalterable:!1,employeeData:{npib:null,code:null,password:null,dateIn:k(w,"DD/MM/YYYY"),filing:null,active:!0,passport:null,sure:null,houseType:"Arrendada",dependents:0,activity:null,work:null,machine:null,computer:!1,hobi:null,userType:null,person:null,city:null,languages:null,militaryCard:{class:"Primera",district:null},license:{expeditionDate:k(w,"DD/MM/YYYY"),effectiveDate:k(w,"DD/MM/YYYY"),licenseCategory:null}},withFingerPrint:[],withPersons:!0,loading:!1,deletingFingerprint:!1,isPwd:!0,today:w,ROUTES:p["p"],militaryCard:!1,license:!1,userTypes:[],persons:[],cities:[],licenseCategories:[],languages:[]}},methods:{onSubmit:function(){var e=this;return l()(u.a.mark((function t(){var a,n,s,i,o,r,l;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loading=!0,a=JSON.parse(JSON.stringify(e.employeeData)),a.militaryCard=e.militaryCard?a.militaryCard:null,a.license=e.license?a.license:null,!e.action.created){t.next=24;break}return t.prev=5,t.next=8,g["a"].getApiFormat(a);case 8:return n=t.sent,t.next=11,e.$store.dispatch("employees/store",n);case 11:s="Registro exitoso",e.createNotification(q({message:s,timeout:3e3},p["q"])),e.loading=!1,e.$router.replace(p["p"].personal.curriculum),t.next=22;break;case 17:t.prev=17,t.t0=t["catch"](5),i=Object(f["d"])(t.t0),e.createNotification(q({message:i,timeout:5e3},p["b"])),e.loading=!1;case 22:t.next=41;break;case 24:return t.prev=24,t.next=27,g["a"].getApiFormat(a);case 27:return o=t.sent,t.next=30,e.$store.dispatch("employees/update",o);case 30:r="Actualizacion satisfactoria",e.createNotification(q({message:r,timeout:3e3},p["q"])),e.loading=!1,e.$router.replace(p["p"].personal.curriculum),t.next=41;break;case 36:t.prev=36,t.t1=t["catch"](24),l=Object(f["d"])(t.t1),e.createNotification(q({message:l,timeout:5e3},p["b"])),e.loading=!1;case 41:case"end":return t.stop()}}),t,null,[[5,17],[24,36]])})))()},maxDateIsToday:function(e){return e<=k(w,"YYYY/MM/DD")},minDateIsToday:function(e){return e>=k(w,"YYYY/MM/DD")},bulkFingerPrint:function(){var e=this;this.$q.dialog({title:"Confirmar borrado de huella",message:"Se eliminara el registro de huella dactilar y solo se podra ingresar por contraseña.",cancel:!0,ok:{label:"Eliminar",color:"negative",flat:!0}}).onOk(l()(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.deletingFingerprint=!0,t.next=3,e.$store.dispatch("ui/removeFingerprintForEmployee",e.action.id);case 3:return t.next=5,e.$store.dispatch("employees/withFingerPrint",e.action.id);case 5:e.withFingerPrint=t.sent,e.deletingFingerprint=!1;case 7:case"end":return t.stop()}}),t)})))).onOk((function(){})).onCancel((function(){})).onDismiss((function(){}))},createHuella:function(){var e=this;this.$q.dialog({title:"Proceso para Registro de Huella",message:"Coloca la huella dactilar, Recuerda que son 4 veces",cancel:!0,ok:{label:"Registar",color:"positive",flat:!0}}).onOk(l()(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.deletingFingerprint=!0,t.next=3,e.$store.dispatch("ui/crearHuella",e.action.id);case 3:return t.next=5,e.$store.dispatch("employees/withFingerPrint",e.action.id);case 5:e.withFingerPrint=t.sent,e.deletingFingerprint=!1;case 7:case"end":return t.stop()}}),t)})))).onOk((function(){})).onCancel((function(){})).onDismiss((function(){}))}},computed:{user:function(){return this.$q.localStorage.getItem(p["n"])},action:function(){return this.$q.localStorage.getItem(p["g"])}},created:function(){var e=this;return l()(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.action.created){t.next=28;break}return t.next=3,e.$store.dispatch("persons/getNotEmployees");case 3:if(e.persons=t.sent,e.withPersons=e.persons.length>0,!e.withPersons){t.next=25;break}return t.t0=Promise,t.next=9,e.$store.dispatch("ui/getUserTypes");case 9:return t.t1=e.userTypes=t.sent,t.next=12,e.$store.dispatch("ui/getCities");case 12:return t.t2=e.cities=t.sent,t.next=15,e.$store.dispatch("ui/getLicenseCategories");case 15:return t.t3=e.licenseCategories=t.sent,t.next=18,e.$store.dispatch("ui/getLanguages");case 18:return t.t4=e.languages=t.sent,t.t5=[t.t1,t.t2,t.t3,t.t4],t.next=22,t.t0.all.call(t.t0,t.t5);case 22:e.employeeData.person=e.persons?e.persons[0]:{},e.employeeData.userType=e.userTypes?e.userTypes[0]:{},e.employeeData.license.licenseCategory=e.licenseCategories?e.licenseCategories[0]:{};case 25:e.loadingState=!1,t.next=62;break;case 28:return t.t6=Promise,t.next=31,e.$store.dispatch("ui/getUserTypes");case 31:return t.t7=e.userTypes=t.sent,t.next=34,e.$store.dispatch("ui/getCities");case 34:return t.t8=e.cities=t.sent,t.next=37,e.$store.dispatch("ui/getLicenseCategories");case 37:return t.t9=e.licenseCategories=t.sent,t.next=40,e.$store.dispatch("ui/getLanguages");case 40:return t.t10=e.languages=t.sent,t.next=43,e.$store.dispatch("employees/withFingerPrint",e.action.id);case 43:return t.t11=e.withFingerPrint=t.sent,t.t12=[t.t7,t.t8,t.t9,t.t10,t.t11],t.next=47,t.t6.all.call(t.t6,t.t12);case 47:return a=e.action.id,a===e.user.id&&(e.unalterable=!0),t.next=51,e.$store.dispatch("ranks/get");case 51:return e.ranks=t.sent,t.next=54,e.$store.dispatch("employees/getForId",a);case 54:n=t.sent,e.persons.unshift(n.person),e.employeeData=n,e.militaryCard=null!==n.militaryCard,e.employeeData.militaryCard=n.militaryCard||{class:"Primera",district:null},e.license=null!==n.license,e.employeeData.license=n.license||{expeditionDate:k(w,"DD/MM/YYYY"),effectiveDate:k(w,"DD/MM/YYYY"),licenseCategory:e.licenseCategories?e.licenseCategories[0]:{}},e.loadingState=!1;case 62:case"end":return t.stop()}}),t)})))()},updated:function(){var e=this;return l()(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.sectionsSelected.courses===e.sections.courses&&e.sectionsSelected.education===e.sections.education&&e.sectionsSelected.experiences===e.sections.experiences&&e.sectionsSelected.information===e.sections.information&&e.sectionsSelected.trainings===e.sections.trainings){t.next=34;break}if(!e.sections.courses){t.next=8;break}return e.sectionsSelected=JSON.parse(JSON.stringify(e.sections)),t.next=5,e.$store.dispatch("employeeCourses/getForEmployee",e.action.id);case 5:e.loadingStateCourse=!1,t.next=34;break;case 8:if(!e.sections.education){t.next=15;break}return e.sectionsSelected=JSON.parse(JSON.stringify(e.sections)),t.next=12,e.$store.dispatch("employeeEducations/getForEmployee",e.action.id);case 12:e.loadingStateEducation=!1,t.next=34;break;case 15:if(!e.sections.experiences){t.next=22;break}return e.sectionsSelected=JSON.parse(JSON.stringify(e.sections)),t.next=19,e.$store.dispatch("employeeExperiences/getForEmployee",e.action.id);case 19:e.loadingStateExperience=!1,t.next=34;break;case 22:if(!e.sections.information){t.next=29;break}return e.sectionsSelected=JSON.parse(JSON.stringify(e.sections)),t.next=26,e.$store.dispatch("employeeInformations/getForEmployee",e.action.id);case 26:e.loadingStateInformation=!1,t.next=34;break;case 29:if(!e.sections.trainings){t.next=34;break}return e.sectionsSelected=JSON.parse(JSON.stringify(e.sections)),t.next=33,e.$store.dispatch("employeeTrainings/getForEmployee",e.action.id);case 33:e.loadingStateTranings=!1;case 34:case"end":return t.stop()}}),t)})))()},beforeRouteEnter:function(e,t,a){a((function(t){if(t.user){var n=Object(p["v"])(t.user.type),s=n.find((function(t){return t===e.path}));s||a(n[0]),a()}else a("/")}))}},$=S,P=(a("ea89"),a("2877")),F=Object(P["a"])($,n,s,!1,null,null,null);t["default"]=F.exports},ea89:function(e,t,a){"use strict";var n=a("6a2a"),s=a.n(n);s.a}}]);