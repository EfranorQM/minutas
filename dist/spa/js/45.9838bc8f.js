(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"2f3b1":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-py-lg q-px-xl bg-grey-2 background-height"},[e._m(0),n("q-separator"),e.loadingState?n("div",[n("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1):e.issueTypes&&e.issueTypes.length?n("div",[n("div",{staticClass:"row q-mt-md"},[n("q-select",{staticClass:"ControlForm col",attrs:{filled:"",label:"Asunto:",options:e.issueTypes,"option-value":"id","option-label":"name","stack-label":"","lazy-rules":"",rules:[]},model:{value:e.billReport.issueType,callback:function(t){e.$set(e.billReport,"issueType",t)},expression:"billReport.issueType"}})],1),!e.billReport.issueType||"Entrada de personal"!==e.billReport.issueType.name&&"Salida de personal"!==e.billReport.issueType.name&&"Relevo"!==e.billReport.issueType.name?e._e():n("div",{staticClass:"row q-mt-md"},[n("q-select",{staticClass:"ControlForm col",attrs:{filled:"",label:"Empleado:",options:e.employees,"option-value":"id","option-label":function(e){return null===e?"":e.person+" - "+e.position},"stack-label":"","lazy-rules":"",rules:[]},model:{value:e.employee,callback:function(t){e.employee=t},expression:"employee"}})],1),!e.billReport.issueType||"Entrada de máquina"!==e.billReport.issueType.name&&"Salida de máquina"!==e.billReport.issueType.name&&"Novedades en máquinas"!==e.billReport.issueType.name?e._e():n("div",{staticClass:"row q-mt-md"},[n("q-select",{staticClass:"ControlForm col",attrs:{filled:"",label:"Vehiculo:",options:e.vehicles,"option-value":"id","option-label":"name","stack-label":"","lazy-rules":"",rules:[]},model:{value:e.vehicle,callback:function(t){e.vehicle=t},expression:"vehicle"}})],1),n("div",{staticClass:"text-center"},[n("q-btn",{staticClass:"text-bold",attrs:{label:"GENERAR REPORTE ",loading:e.loading,color:"positive"},on:{click:e.generateBillReport}})],1)]):n("div",{staticClass:"text-center"},[n("div",{staticClass:"empty-state normal-section empty-issueTypes"}),n("h3",{staticClass:"empty-copy"},[e._v(" No hay asuntos registrados.. ")])])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row q-mb-xs"},[n("div",{staticClass:"title"},[e._v("REPORTES - MINUTAS")])])}],s=(n("456d"),n("8a81"),n("d25f"),n("9986"),n("8e6e"),n("9523")),o=n.n(s),i=n("c973"),l=n.n(i),u=n("a34a"),c=n.n(u),p=(n("7f7f"),n("06db"),n("6b54"),n("5df3"),n("cadf"),n("ac6a"),n("551c"),n("7514"),n("bd4c")),d=n("e499"),b=n.n(d),m=n("4ebb"),y=n.n(m),f=n("e71c"),h=n("234a"),x=n("0ee4");function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}b.a.vfs=y.a.pdfMake.vfs;var w=p["b"].formatDate,g={name:"BillReports",data:function(){return{loadingState:!0,loading:!1,billReport:{issueType:null},employee:null,vehicle:null,issueTypes:null,employees:null,vehicles:null}},mixins:[h["a"]],computed:{user:function(){return this.$q.localStorage.getItem(f["n"])}},methods:{generateBillReport:function(){var e=this;return l()(c.a.mark((function t(){var n,r,a,s,o,i;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,n={},r=!1,a=null,"Entrada de personal"===e.billReport.issueType.name||"Salida de personal"===e.billReport.issueType.name||"Relevo"===e.billReport.issueType.name?(n={issueType:e.billReport.issueType,employee:e.employee},r=!0,a=n.employee.person,e.billReport.employee=v({},e.employee)):"Entrada de máquina"===e.billReport.issueType.name||"Salida de máquina"===e.billReport.issueType.name||"Novedades en máquinas"===e.billReport.issueType.name?(n={issueType:e.billReport.issueType,vehicle:e.vehicle},r=!0,a=n.vehicle.name):(n={issueType:e.billReport.issueType},r=!1),t.next=7,x["a"].getApiFormatForReport(n);case 7:return s=t.sent,t.next=10,e.$store.dispatch("bills/getBillsReport",s);case 10:o=t.sent,o.length?e.createPDF(o,{type:n.issueType.name,name:a},r):(i="No hay minutas con las especificaciones ingresadas",e.createNotification(v({message:i,timeout:5e3},f["b"]))),e.loading=!1;case 13:case"end":return t.stop()}}),t)})))()},generateRowsEmergency:function(e){return l()(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[60,50,"auto",80,"*","*"],r=e.reduce((function(e,t,n){return n||e.push([{bold:!0,text:"FECHA"},{bold:!0,text:"HORA"},{bold:!0,text:"EVENTO"},{bold:!0,text:"ESTADO"},{bold:!0,text:"TIPO"},{bold:!0,text:"REPORTA"}]),e.push([t.date,t.hour,t.attributes.event.name,t.attributes.state,t.attributes.report.type.name,t.attributes.report.name]),e}),[]),t.abrupt("return",{widths:n,body:r});case 3:case"end":return t.stop()}}),t)})))()},generateRowsPersonal:function(e){return l()(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[60,50,"auto","auto","*"],r=e.reduce((function(e,t,n){return n||e.push([{bold:!0,text:"FECHA"},{bold:!0,text:"HORA"},{bold:!0,text:"TIPO USUARIO"},{bold:!0,text:"NOMBRE"},{bold:!0,text:"CODIGO"}]),e.push([t.date,t.hour,t.attributes.employee.userType,t.attributes.employee.person,t.attributes.employee.code]),e}),[]),t.abrupt("return",{widths:n,body:r});case 3:case"end":return t.stop()}}),t)})))()},generateRowsMachines:function(e){return l()(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[60,50,"*","*","*"],r=e.reduce((function(e,t,n){return n||e.push([{bold:!0,text:"FECHA"},{bold:!0,text:"HORA"},{bold:!0,text:"TIPO VEHICULO"},{bold:!0,text:"TRIPULANTE"},{bold:!0,text:"REPORTA"}]),e.push([t.date,t.hour,t.attributes.vehicle.vehicleType,t.attributes.crewman.person,t.attributes.employee.person]),e}),[]),t.abrupt("return",{widths:n,body:r});case 3:case"end":return t.stop()}}),t)})))()},generateRowsVisitors:function(e){return l()(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[60,50,"*","*","*"],r=e.reduce((function(e,t,n){return n||e.push([{bold:!0,text:"FECHA"},{bold:!0,text:"HORA"},{bold:!0,text:"NOMBRE"},{bold:!0,text:"DOCUMENTO"},{bold:!0,text:"TELEFONO"}]),e.push([t.date,t.hour,t.attributes.name,t.attributes.document,t.attributes.phone]),e}),[]),t.abrupt("return",{widths:n,body:r});case 3:case"end":return t.stop()}}),t)})))()},generateRowsExtinguishers:function(e){return l()(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[60,50,"*","*","*"],r=e.reduce((function(e,t,n){return n||e.push([{bold:!0,text:"FECHA"},{bold:!0,text:"HORA"},{bold:!0,text:"TIPO EXTINTOR"},{bold:!0,text:"CAPACIDAD"},{bold:!0,text:"PROPIETARIO"}]),e.push([t.date,t.hour,t.attributes.extinguisherType.name,t.attributes.capacity,t.attributes.owner.name]),e}),[]),t.abrupt("return",{widths:n,body:r});case 3:case"end":return t.stop()}}),t)})))()},generateRowsReliefs:function(e,t){return l()(c.a.mark((function n(){var r,a;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=[60,50,"*","*"],a=e.reduce((function(e,n,r){return r||e.push([{bold:!0,text:"FECHA"},{bold:!0,text:"HORA"},{bold:!0,text:"ENTREGA"},{bold:!0,text:"RECIBE"}]),e.push([n.date,n.hour,n.attributes.employeeDelivery.person===t.name?{color:"#C25B52",bold:!0,text:n.attributes.employeeDelivery.person}:n.attributes.employeeDelivery.person,n.attributes.employeeReceives.person===t.name?{color:"#C25B52",bold:!0,text:n.attributes.employeeReceives.person}:n.attributes.employeeReceives.person]),e}),[]),n.abrupt("return",{widths:r,body:a});case 3:case"end":return n.stop()}}),n)})))()},generateRowsNovelty:function(e){return l()(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[60,50,"*","*"],r=e.reduce((function(e,t,n){return n||e.push([{bold:!0,text:"FECHA"},{bold:!0,text:"HORA"},{bold:!0,text:"NOVEDAD"},{bold:!0,text:"REPORTA"}]),e.push([t.date,t.hour,t.attributes.novelthyType.name,t.attributes.employeeReport.person]),e}),[]),t.abrupt("return",{widths:n,body:r});case 3:case"end":return t.stop()}}),t)})))()},generateRowsNotes:function(e){return l()(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[60,50,"*","*","auto"],r=e.reduce((function(e,t,n){return n||e.push([{bold:!0,text:"FECHA"},{bold:!0,text:"HORA"},{bold:!0,text:"PERSONA"},{bold:!0,text:"TELEFONO"},{bold:!0,text:"DESCRIPCIÓN"}]),e.push([t.date,t.hour,t.attributes.name,t.attributes.phone,t.description]),e}),[]),t.abrupt("return",{widths:n,body:r});case 3:case"end":return t.stop()}}),t)})))()},createPDF:function(e,t,n){var r=this;return l()(c.a.mark((function a(){var s,o,i;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(s=[],"Recepción de emergencia"!==t.type){a.next=7;break}return a.next=4,r.generateRowsEmergency(e);case 4:s=a.sent,a.next=47;break;case 7:if("Entrada de personal"!==t.type&&"Salida de personal"!==t.type){a.next=13;break}return a.next=10,r.generateRowsPersonal(e);case 10:s=a.sent,a.next=47;break;case 13:if("Entrada de máquina"!==t.type&&"Salida de máquina"!==t.type){a.next=19;break}return a.next=16,r.generateRowsMachines(e);case 16:s=a.sent,a.next=47;break;case 19:if("Entrada visitante"!==t.type&&"Salida visitante"!==t.type){a.next=25;break}return a.next=22,r.generateRowsVisitors(e);case 22:s=a.sent,a.next=47;break;case 25:if("Entrada extintor(es)"!==t.type&&"Salida extintor(es)"!==t.type){a.next=31;break}return a.next=28,r.generateRowsExtinguishers(e);case 28:s=a.sent,a.next=47;break;case 31:if("Relevo"!==t.type){a.next=37;break}return a.next=34,r.generateRowsReliefs(e,t);case 34:s=a.sent,a.next=47;break;case 37:if("Novedades en máquinas"!==t.type){a.next=43;break}return a.next=40,r.generateRowsNovelty(e);case 40:s=a.sent,a.next=47;break;case 43:if("Nota"!==t.type){a.next=47;break}return a.next=46,r.generateRowsNotes(e);case 46:s=a.sent;case 47:o={info:{title:n?"Reporte de Minutas (".concat(t.type,") - ").concat(t.name):"Reporte de Minutas (".concat(t.type,")"),author:"".concat(r.user.name),subject:"Generado desde la aplicacion de Bomberos Voluntarios Villa del Rosario",creator:"Bomberos Voluntarios Villa del Rosario"},footer:function(e,t){return{columns:[{text:"".concat(e.toString()," de ").concat(t),alignment:"right",fontSize:10,margin:[25,10],color:"#C25B52"}]}},header:{columns:[{text:"Bomberos Voluntarios de Villa del Rosario",alignment:"left",fontSize:10,margin:[25,10],color:"#C25B52"},{text:"".concat(w(new Date,"DD/MM/YYYY hh:mm aa")),alignment:"right",style:"smallFont",margin:[25,10],color:"#C25B52"}]},content:[{text:"Reporte Minuta (".concat(t.type,")").toUpperCase(),style:"title",margin:[0,10,0,0],color:n?"":"#C25B52"},n?{text:"".concat(t.name),style:"subtitle"}:{},{canvas:[{type:"line",x1:0,y1:5,x2:480,y2:5,lineWidth:2,lineColor:"#C25B52"}],alignment:"center"},{style:"tableExample",table:s}],styles:{title:{bold:!0,fontSize:15,alignment:"center"},subtitle:{bold:!0,fontSize:13,alignment:"center",color:"#C25B52"},imageProfile:{alignment:"center"},smallFont:{fontSize:10},tableExample:{margin:[0,15,0,15],alignment:"center"}},defaultStyle:{columnGap:40,fontSize:11}},i=b.a.createPdf(o),i.download(n?"Reporte de Minutas (".concat(t.type,") - ").concat(t.name):"Reporte de Minutas (".concat(t.type,")"));case 50:case"end":return a.stop()}}),a)})))()}},created:function(){var e=this;return l()(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=Promise,t.next=3,e.$store.dispatch("issueTypes/get");case 3:return t.t1=e.issueTypes=t.sent,t.next=6,e.$store.dispatch("employees/get");case 6:return t.t2=e.employees=t.sent,t.next=9,e.$store.dispatch("vehicles/get");case 9:return t.t3=e.vehicles=t.sent,t.t4=[t.t1,t.t2,t.t3],t.next=13,t.t0.all.call(t.t0,t.t4);case 13:e.billReport.issueType=e.issueTypes?e.issueTypes[0]:null,e.employee=e.employees?e.employees[0]:null,e.vehicle=e.vehicles?e.vehicles[0]:null,e.loadingState=!1;case 17:case"end":return t.stop()}}),t)})))()},beforeRouteEnter:function(e,t,n){n((function(t){if(t.user){var r=Object(f["v"])(t.user.type),a=r.find((function(t){return t===e.path}));a||n(r[0]),n()}else n("/")}))}},T=g,E=n("2877"),O=Object(E["a"])(T,r,a,!1,null,null,null);t["default"]=O.exports}}]);