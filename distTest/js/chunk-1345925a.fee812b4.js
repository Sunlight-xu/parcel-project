(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1345925a"],{"118f":function(e,t,n){},"503e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"record_analyse",attrs:{id:"main"}},[n("div",[n("date-choose",{attrs:{"is-record":!0},on:{selectData:e.handleGetDate,exportData:e.handleGetExport}})],1),e._m(0)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"record_analyse_content"},[n("div",{attrs:{id:"verb"}})])}],r=(n("e25e"),n("0d03"),n("4160"),n("d3b7"),n("159b"),n("b0c0"),n("406e")),s=n("011d"),c=n("d25e"),o=n("48fb"),d=n("8dce"),u=n("365c"),h={name:"recordStatistic",data:function(){return{legendData:{T1:"T1航站楼",T2:"T2航站楼",T3:"T3航站楼"},lineCharts:"",lineData:[]}},components:{DateChoose:s["a"]},mounted:function(){Object(r["a"])(document.getElementById("main"),this.resize);var e={start_time:parseInt(((new Date).getTime()-6048e5)/1e3),end_time:parseInt(((new Date).getTime()-864e5)/1e3)},t=[];t.push(e,[],2,[],0,0),this.handleGetDate(t)},beforeDestroy:function(){Object(r["b"])(document.getElementById("main"),this.resize)},methods:{handleGetExport:function(e){if(e){var t=[],n=[[]];n[1]=[],this.lineData.forEach((function(e){e.stats&&e.stats.forEach((function(n){var a={};a["档案类型"]=e.name,a["时间"]=n.title,a["人数"]=n.num,t.push(a)}))})),t.forEach((function(e){n[0].push(e)})),Object(d["a"])(n,["条形图"],"档案统计");var a={action:"导出",extra:"档案统计"};Object(u["b"])(a).then((function(){}))}},resize:function(){this.lineCharts.resize&&this.lineCharts.resize()},handleGetDate:function(e){var t=this,n={start_time:e[0].start_time,end_time:e[0].end_time,type:e[2],age_group:e[5],gender:e[4]};Object(o["c"])(n).then((function(e){0===e.error_no&&(t.lineCharts=Object(c["b"])("verb","档案统计",{},e.data.archive_nums),t.lineData=e.data.archive_nums)}))}}},f=h,l=(n("f259"),n("2877")),m=Object(l["a"])(f,a,i,!1,null,"1feb3aff",null);t["default"]=m.exports},f259:function(e,t,n){"use strict";n("118f")}}]);