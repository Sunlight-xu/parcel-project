(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9437d36"],{"0754":function(e,t,a){},"35ac":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"page_container container"},[a("div",{staticClass:"video_container border_radius"},[a("monitor-module",{attrs:{linePoints:e.labels,"video-url":e.videoUrl}})],1),a("div",{staticClass:"table_container border_radius"},[e._m(0),a("common-table",{attrs:{isShowIndex:!0,tableData:e.tableData,tableColArray:e.tableColumn},scopedSlots:e._u([{key:"time",fn:function(t){return[e._v(" "+e._s(new Date(t.row.detect_time).toLocaleString())+" ")]}}])})],1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table_header"},[a("span",[e._v("队列分析")])])}],i=(a("4795"),a("8761"));function r(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i["a"].get("/xmqueue/admin/region/queue-count",e,{},t)}function s(e){return i["a"].get("/xmqueue/admin/confs",e)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i["a"].post("/xmqueue/admin/start",e,{},t)}var l=a("b837"),c=a("6b28"),d={data:function(){return{tableData:[],tableColumn:[{label:"队列人数",props:"count"},{label:"预计排队时长",props:"predict_time_string"},{label:"更新时间",props:"detect_time",type:"slot",slot:"time"}],camerasData:[],regions:[],videoList:["hh","a","ads"],videoUrl:"",labels:[]}},components:{CommonTable:l["a"],MonitorModule:c["a"]},created:function(){var e=this;s().then((function(t){if(0===t.error_no){e.camerasData=t.data.Cameras,e.regions=t.data.Regions;for(var a=[],n=0;n<e.camerasData[0].labels.length;n+=2)a.push({x:e.camerasData[0].labels[n],y:e.camerasData[0].labels[n+1]});e.labels=a,u({stream_id:e.camerasData[0].id,user_id:"1"}).then((function(t){e.videoUrl=t.data||""}))}e.getQueueCount(!0)}))},mounted:function(){},beforeDestroy:function(){clearTimeout(this.timer)},methods:{getQueueCount:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=this.regions[0].id;r({id:a,page:1,page_size:10},t).then((function(t){0===t.error_no&&(e.tableData=t.data.items)})),this.timer=setTimeout((function(){e.getQueueCount()}),5e3)}}},m=d,b=(a("9d83"),a("2877")),f=Object(b["a"])(m,n,o,!1,null,"ca6fa7e6",null);t["default"]=f.exports},"9d83":function(e,t,a){"use strict";a("0754")}}]);