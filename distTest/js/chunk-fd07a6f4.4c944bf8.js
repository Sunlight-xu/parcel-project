(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd07a6f4"],{"7c88":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"verb_analyse",attrs:{id:"main"}},[e("div",[e("date-choose",{attrs:{isCamera:!0},on:{selectData:t.handleGetDate,exportData:t.handleGetExport}})],1),e("div",{staticClass:"verb_analyse_content"},[e("div",{attrs:{id:"verb"}}),e("div",{staticClass:"bar_container"},t._l(t.customStatArray,(function(a){return e("div",{key:a.id,staticClass:"bar_container_row"},[e("el-row",t._l(a.content,(function(t){return e("el-col",{key:t.name,attrs:{span:12}},[e("div",{staticStyle:{height:"400px"},attrs:{id:"bar"+t.name}})])})),1)],1)})),0)])])},s=[],r=(e("e25e"),e("0d03"),e("4160"),e("d3b7"),e("159b"),e("b0c0"),e("406e")),i=e("d25e"),c=e("011d"),o=e("8dce"),u=e("48fb"),h={name:"verbStatistic",data:function(){return{lineData:[],barData:[],customStatArray:[],barCharts:[],lineCharts:""}},components:{DateChoose:c["a"]},mounted:function(){Object(r["a"])(document.getElementById("main"),this.resize);var t={start_time:parseInt(((new Date).getTime()-6048e5)/1e3),end_time:parseInt(((new Date).getTime()-864e5)/1e3)},a=[];a.push(t,[],2),this.handleGetDate(a)},methods:{handleGetDate:function(t){var a=this,e={type:t[2],start_time:t[0].start_time,end_time:t[0].end_time,areas:t[1]};Object(u["e"])(e).then((function(t){0===t.error_no&&(a.lineCharts=Object(i["b"])("verb","未戴口罩抓拍统计",{},t.data.main_stat),a.getCustomStat(t.data.custom_stat),a.createBar(t.data.custom_stat),a.lineData=t.data.main_stat,a.barData=t.data.custom_stat)}))},handleGetExport:function(t){if(t){var a=[],e=[],n=[[]];n[1]=[],this.lineData.forEach((function(t){t.stats.forEach((function(e){var n={};n["地点"]=t.name,n["时间"]=e.title,n["人数"]=e.num,a.push(n)}))})),this.barData.forEach((function(t){t.stats.forEach((function(a){var n={};n["地点"]=t.name,n["时间"]=a.title,n["人数"]=a.num,e.push(n)}))})),a.forEach((function(t){n[0].push(t)})),e.forEach((function(t){n[1].push(t)})),Object(o["a"])(n,["条形图","柱状图"],"未戴口罩抓拍统计")}},getCustomStat:function(t){var a=t.length,e=Math.round(a/2);this.customStatArray=[];for(var n=0;n<e;n++){var s=[];s.push(t[2*n]),t[2*n+1]&&s.push(t[2*n+1]),this.customStatArray.push({id:n,content:s})}},createBar:function(t){var a=this;this.barCharts=[];var e=["#FF9239","#38D5FC","#FF5BE2","#FDE55A","#5BFFCD","#A7FF5B","#9A3868","#37827F","#968C2A","#3AA0FF"];this.$nextTick((function(){t.forEach((function(t,n){a.barCharts.push(Object(i["a"])(document.getElementById("bar".concat(t.name)),t.name,t.stats,e[n%e.length]))}))}))},resize:function(){this.barCharts.length>0&&this.barCharts.forEach((function(t){t.resize()})),this.lineCharts.resize&&this.lineCharts.resize()}},beforeDestroy:function(){Object(r["b"])(document.getElementById("main"),this.resize)}},d=h,m=(e("e4a2"),e("2877")),f=Object(m["a"])(d,n,s,!1,null,"08a1de5d",null);a["default"]=f.exports},db8c:function(t,a,e){},e4a2:function(t,a,e){"use strict";e("db8c")}}]);