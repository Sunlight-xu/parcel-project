(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-761c96de"],{"011d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"date_choose"},[a("div",{staticClass:"date_choose_stat"},[t.haveType?t._e():a("div",{staticStyle:{width:"200px"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.statisticsValue,callback:function(e){t.statisticsValue=e},expression:"statisticsValue"}},t._l(t.statisticsOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticClass:"date_choose_picker"},[t.showPicker?a("el-date-picker",{attrs:{width:"180px",disabled:t.datePickerDisable,clearable:!1,type:t.datePickerType,"range-separator":"-",format:t.pickerFormat,"start-placeholder":"开始月份","end-placeholder":"结束月份"},on:{change:function(e){return t.handleDateChange()}},model:{value:t.dateArray,callback:function(e){t.dateArray=e},expression:"dateArray"}}):a("div",{staticClass:"date_choose_input"},[a("el-input",{attrs:{disabled:t.datePickerDisable,value:t.turnTime()},on:{focus:t.selectDate}})],1),t.showPicker1?a("div",{staticClass:"date_choose_hide_picker"},[a("el-date-picker",{ref:"hidePicker",attrs:{width:"180px",disabled:t.datePickerDisable,type:t.datePickerType,"range-separator":"-",format:t.pickerFormat,"start-placeholder":"开始月份","end-placeholder":"结束月份"},on:{change:function(e){return t.hanleInputChange()}},model:{value:t.dateArray1,callback:function(e){t.dateArray1=e},expression:"dateArray1"}})],1):t._e()],1)]),t.isCamera?a("div",{staticClass:"data_choose_tree"},[a("span",[t._v("区域")]),a("el-cascader",{attrs:{size:"small",options:t.areaTree,clearable:"","collapse-tags":"","show-all-levels":!1,props:{expandTrigger:"hover",multiple:!0}},model:{value:t.controlArea,callback:function(e){t.controlArea=e},expression:"controlArea"}})],1):t._e(),t.isGroup?a("div",{staticClass:"data_choose_group"},[a("span",[t._v("底库")]),a("el-select",{attrs:{multiple:"","collapse-tags":"",placeholder:"请选择"},model:{value:t.portraitItem,callback:function(e){t.portraitItem=e},expression:"portraitItem"}},t._l(t.portraitData,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1):t._e(),t.isRecord?a("div",{staticClass:"data_choose_record"},[a("span",[t._v("年龄")]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.age,callback:function(e){t.age=e},expression:"age"}},t._l(t.ageOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("span",[t._v("性别")]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}},t._l(t.sexOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1):t._e(),a("div",{staticClass:"data_choose_btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v(" 查询 ")]),a("el-button",{attrs:{type:"primary"},on:{click:t.handleExport}},[t._v(" 导出 ")])],1)])},s=[],r=a("5530"),n=(a("a9e3"),a("4160"),a("d3b7"),a("159b"),a("b0c0"),a("0d03"),a("b64b"),a("e25e"),a("0481"),a("4069"),a("99af"),a("4795"),a("2f62")),o=a("0fea"),c={props:{isGroup:{type:Boolean,default:!1},isCamera:{type:Boolean,default:!1},isRecord:{type:Boolean,default:!1},compare:{type:Boolean,default:!1},type:{type:Number}},data:function(){return{age:0,sexOptions:[{value:0,label:"所有"},{value:1,label:"男"},{value:2,label:"女"}],sex:0,ageOptions:[{label:"全部",value:0},{label:"0-6",value:1},{label:"7-17",value:2},{label:"18-40",value:3},{label:"41-65",value:4},{label:">=66",value:5}],portraitItem:[],controlArea:[],areaTree:[],haveType:!1,statisticsValue:0,statisticsOptions:[{label:"过去24小时",value:7,type:"daterange"},{label:"过去7天",value:0,type:"daterange"},{label:"过去14天",value:1,type:"daterange"},{label:"过去30天",value:2,type:"daterange"},{label:"日",value:3,type:"date"},{label:"周",value:4,type:"week"},{label:"月",value:5,type:"month"},{label:"自定义",value:6,type:"daterange"}],date:{},dateArray:[],dateArray1:"",datePickerDisable:!0,datePickerType:"",pickerFormat:"",showPicker:!1,showPicker1:!1,statType:1,portraitData:[]}},computed:Object(r["a"])({},Object(n["b"])(["areaLevel"])),watch:{areaLevel:{handler:function(t){this.areaLevel.forEach((function(t){t.children=t.child,t.label=t.name,t.value=t.id,t.children.forEach((function(t){t.label=t.name,t.value=t.id}))})),this.areaTree=this.areaLevel},immediate:!0},statisticsValue:{handler:function(){this.compare?this.date={compare_start_time:0,compare_end_time:0}:this.date={start_time:0,end_time:0};var t=new Date((new Date).toLocaleDateString()),e=new Date((new Date).toLocaleDateString());this.showPicker=!1,this.showPicker1=!1,this.dateArray="",this.pickerFormat="";var a=Object.keys(this.date);if(0===this.statisticsValue?(e.setTime(e.getTime()-6048e5),t.setTime(t.getTime()-1e3),this.datePickerType=this.statisticsOptions[1].type,this.dateArray=[e,t],this.datePickerDisable=!0,this.date[a[0]]=+e/1e3,this.date[a[1]]=+t/1e3,this.statType=2):1===this.statisticsValue?(e.setTime(e.getTime()-12096e5),t.setTime(t.getTime()-1e3),this.datePickerType=this.statisticsOptions[2].type,this.dateArray=[e,t],this.datePickerDisable=!0,this.date[a[0]]=+e/1e3,this.date[a[1]]=+t/1e3,this.statType=2):2===this.statisticsValue?(e.setTime(e.getTime()-2592e6),t.setTime(t.getTime()-1e3),this.datePickerType=this.statisticsOptions[3].type,this.dateArray=[e,t],this.datePickerDisable=!0,this.date[a[0]]=+e/1e3,this.date[a[1]]=+t/1e3,this.statType=2):3===this.statisticsValue?(this.datePickerType=this.statisticsOptions[4].type,this.datePickerDisable=!1,this.showPicker=!0,this.statType=1):4===this.statisticsValue?(this.datePickerType=this.statisticsOptions[5].type,this.datePickerDisable=!1,this.showPicker=!0,this.pickerFormat="yyyy 第 WW 周",this.statType=2):5===this.statisticsValue?(this.datePickerType=this.statisticsOptions[6].type,this.datePickerDisable=!1,this.showPicker=!0,this.statType=2):6===this.statisticsValue?(this.datePickerType=this.statisticsOptions[7].type,this.datePickerDisable=!1,this.showPicker1=!0,this.statType=2):7===this.statisticsValue&&(e.setTime((new Date).getTime()-864e5),t.setTime((new Date).getTime()),this.datePickerType=this.statisticsOptions[0].type,this.dateArray=[e,t],this.datePickerDisable=!0,this.date[a[0]]=parseInt(+e/1e3),this.date[a[1]]=parseInt(+t/1e3),this.statType=1),6===this.type){var i=new Date(new Date(+new Date).toLocaleDateString());this.dateArray1=[new Date(i.setTime(i.getTime()-6048e5)),new Date((new Date).toLocaleDateString())]}else 3===this.type&&(this.dateArray=new Date((new Date).toLocaleDateString()))}}},mounted:function(){this.getPortraitList(),this.type&&(this.haveType=!0,this.statisticsValue=this.type),this.compare?this.date={compare_start_time:0,compare_end_time:0}:this.date={start_time:0,end_time:0};var t=new Date((new Date).toLocaleDateString()),e=new Date((new Date).toLocaleDateString());this.showPicker=!1,this.showPicker1=!1,this.dateArray="",this.pickerFormat="";var a=Object.keys(this.date);if(0===this.statisticsValue?(e.setTime(e.getTime()-6048e5),t.setTime(t.getTime()-1e3),this.datePickerType=this.statisticsOptions[1].type,this.dateArray=[e,t],this.datePickerDisable=!0,this.date[a[0]]=+e/1e3,this.date[a[1]]=+t/1e3,this.statType=2):1===this.statisticsValue?(e.setTime(e.getTime()-12096e5),t.setTime(t.getTime()-1e3),this.datePickerType=this.statisticsOptions[2].type,this.dateArray=[e,t],this.datePickerDisable=!0,this.date[a[0]]=+e/1e3,this.date[a[1]]=+t/1e3,this.statType=2):2===this.statisticsValue?(e.setTime(e.getTime()-2592e6),t.setTime(t.getTime()-1e3),this.datePickerType=this.statisticsOptions[3].type,this.dateArray=[e,t],this.datePickerDisable=!0,this.date[a[0]]=+e/1e3,this.date[a[1]]=+t/1e3,this.statType=2):3===this.statisticsValue?(this.datePickerType=this.statisticsOptions[4].type,this.datePickerDisable=!1,this.showPicker=!0,this.statType=1):4===this.statisticsValue?(this.datePickerType=this.statisticsOptions[5].type,this.datePickerDisable=!1,this.showPicker=!0,this.pickerFormat="yyyy 第 WW 周",this.statType=2):5===this.statisticsValue?(this.datePickerType=this.statisticsOptions[6].type,this.datePickerDisable=!1,this.showPicker=!0,this.statType=2):6===this.statisticsValue?(this.datePickerType=this.statisticsOptions[7].type,this.datePickerDisable=!1,this.showPicker1=!0,this.statType=2):7===this.statisticsValue&&(e.setTime((new Date).getTime()-864e5),t.setTime((new Date).getTime()),this.datePickerType=this.statisticsOptions[0].type,this.dateArray=[e,t],this.datePickerDisable=!0,this.date[a[0]]=parseInt(+e/1e3),this.date[a[1]]=parseInt(+t/1e3),this.statType=1),6===this.type){var i=new Date(new Date(+new Date).toLocaleDateString());this.dateArray1=[new Date(i.setTime(i.getTime()-6048e5)),new Date((new Date).toLocaleDateString())],this.hanleInputChange()}else 3===this.type&&(this.dateArray=new Date((new Date).toLocaleDateString()),this.handleDateChange())},methods:{getPortraitList:function(){var t=this;o["b"].getPortrait().then((function(e){t.portraitData=e.data.items}))},handleSearch:function(){var t=[],e=[];t=this.controlArea.flat(1/0),e.push(this.date,t,this.statType,this.portraitItem,this.sex,this.age),this.$emit("selectData",e)},handleExport:function(){this.$emit("exportData",!0)},turnTime:function(){var t=this.dateArray[0],e=this.dateArray[1];if(6===this.statisticsValue){if(!(this.dateArray1&&this.dateArray1.length>0))return"";t=this.dateArray1[0],e=this.dateArray1[1]}return t?"".concat(new Date(t).getFullYear(),"/").concat(new Date(t).getMonth()+1,"/").concat(new Date(t).getDate()," - ").concat(new Date(e).getFullYear(),"/").concat(new Date(e).getMonth()+1,"/").concat(new Date(e).getDate()):""},selectDate:function(){var t=this;setTimeout((function(){t.$refs.hidePicker.focus()}),300)},handleDateChange:function(){var t=Object.keys(this.date);if(this.date[t[0]]=+this.dateArray/1e3,3===this.statisticsValue)this.date[t[1]]=+this.dateArray/1e3+86400-1;else if(4===this.statisticsValue)this.date[t[1]]=+this.dateArray/1e3+604800;else if(5===this.statisticsValue){var e=this.dateArray.getMonth()+1,a=this.dateArray.getFullYear(),i=new Date(a,e,0),s=i.getDate();this.date[t[1]]=+this.dateArray/1e3+24*s*3600}},hanleInputChange:function(){var t=Object.keys(this.date);this.date[t[0]]=+this.dateArray1[0]/1e3,this.date[t[1]]=+this.dateArray1[1]/1e3+86400-1}}},l=c,h=(a("9e4b"),a("d470"),a("2877")),d=Object(h["a"])(l,i,s,!1,null,"5969f3e2",null);e["a"]=d.exports},"0481":function(t,e,a){"use strict";var i=a("23e7"),s=a("a2bf"),r=a("7b0b"),n=a("07fa"),o=a("5926"),c=a("65f0");i({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=r(this),a=n(e),i=c(e,0);return i.length=s(i,e,e,a,0,void 0===t?1:o(t)),i}})},"2e9a":function(t,e,a){},4069:function(t,e,a){var i=a("44d2");i("flat")},"48fb":function(t,e,a){"use strict";a.d(e,"f",(function(){return s})),a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return c})),a.d(e,"e",(function(){return l}));var i=a("8761");function s(t){return i["a"].post("/statistic/snap",t)}function r(t){return i["a"].post("/statistic/alarm",t)}function n(t){return i["a"].post("/statistic/group",t)}function o(t){return i["a"].post("/statistic/archive",t)}function c(t){return i["a"].get("/statistic/mask/realtime",t,{},!1)}function l(t){return i["a"].post("/statistic/mask",t)}},"6cd5":function(t,e,a){},"9e4b":function(t,e,a){"use strict";a("6cd5")},a15b:function(t,e,a){"use strict";var i=a("23e7"),s=a("e330"),r=a("44ad"),n=a("fc6a"),o=a("a640"),c=s([].join),l=r!=Object,h=o("join",",");i({target:"Array",proto:!0,forced:l||!h},{join:function(t){return c(n(this),void 0===t?",":t)}})},a2bf:function(t,e,a){"use strict";var i=a("da84"),s=a("e8b5"),r=a("07fa"),n=a("0366"),o=i.TypeError,c=function(t,e,a,i,l,h,d,u){var p,y,f=l,m=0,b=!!d&&n(d,u);while(m<i){if(m in a){if(p=b?b(a[m],m,e):a[m],h>0&&s(p))y=r(p),f=c(t,e,p,y,f,h-1)-1;else{if(f>=9007199254740991)throw o("Exceed the acceptable array length");t[f]=p}f++}m++}return f};t.exports=c},d25e:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return c}));a("4160"),a("d3b7"),a("159b"),a("b0c0"),a("99af"),a("b680"),a("e25e"),a("e9c4"),a("a15b");var i=a("313e"),s=a.n(i),r=a("510e"),n=function(t,e,a,i){var r=s.a.init(t);r.clear();var n=[],o=[];"library"===i?(o=[{name:"检索数",value:a.query_num},{name:"报警数",value:a.alarm_num},{name:"战果数",value:a.valid_alarm_num}],n=["检索数","报警数","战果数"]):a.forEach((function(t){o.push({value:t.check_num+t.uncheck_num,name:t.name}),n.push(t.name)}));var c={title:{text:e,textStyle:{color:"#FFF",fontWeight:400},padding:30,x:"left"},tooltip:{trigger:"item",formatter:"library"===i?"{a} <br/>{b} : {c} ({d}%)":function(t){var e="";return e+="".concat(t.name,"报警结办：").concat(a[t.dataIndex].check_num,"人次 <br/>"),e+="".concat(t.name,"报警结办率：").concat(a[t.dataIndex].check_num>0?(a[t.dataIndex].check_num/t.value*100).toFixed(2):0,"% <br/>"),e+="结办  ".concat(a[t.dataIndex].check_num,"<br/>"),e+="未结办  ".concat(a[t.dataIndex].uncheck_num,"<br/>"),e},backgroundColor:"rgba(255, 255, 255, 1)",padding:[10,20],textStyle:{color:"#000",fontWeight:"400",fontSize:13}},legend:{show:!1},color:["#2E4090","#3E58CC","#4998FF","#42E0DD","#FFE060","#26C8A4","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],series:[{name:e,type:"pie",radius:["20%","60%"],center:["50%","50%"],data:o,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return r.setOption(c),r},o=function(t,e,a,i){var r=[],n=[];a.forEach((function(t){r.push(t.num),n.push(t.name)}));var o=s.a.init(t);o.clear();var c={title:{text:e,x:"left",textStyle:{color:"#FFF"},padding:[30,36]},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var i=function(t){return'<span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background-color:'.concat(t,'"></span>')},s="".concat(a[t[0].dataIndex].name," <br/>");return s+="".concat(i(t[0].color)+e,"  ").concat(t[0].value,"人"),s},backgroundColor:"rgba(255, 255, 255, 1)",padding:[10,20],textStyle:{color:"#000",fontWeight:"400",fontSize:13}},grid:{left:"10%",right:"10%",bottom:"10%",top:"20%",containLabel:!0},xAxis:{type:"category",data:n,axisTick:{alignWithLabel:!0},axisLabel:{color:"#FFF"}},yAxis:[{type:"value",axisLabel:{show:!1},axisLine:{show:!1},splitLine:{lineStyle:{color:["#323853"]}}}],series:[{name:"直接访问",type:"bar",barWidth:"40%",itemStyle:{normal:{color:i}},label:{show:!0,position:"top"},data:r}]};return o.setOption(c),o},c=function(t,e,a){var i,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=document.getElementById(t),c=s.a.init(o);c.clear();var l=[],h=[],d=[],u=["#FF9239","#38D5FC","#FF5BE2","#FDE55A","#5BFFCD","#A7FF5B","#9A3868","#37827F","#968C2A","#3AA0FF"],p=function(t){var e,a;return t>=u.length?(e=parseInt(t/u.length),a=e>=1?t-u.length*e:t):a=t,a},y=function(){var t={a:{color:"#fff"}};return n.forEach((function(e,a){t[a]={color:u[p(a)],fontSize:18}})),t};return n.forEach((function(t,e){var i={},r=[];"{}"===JSON.stringify(a)?l.push(t.name):l.push(a[t.name]),t.stats&&t.stats.forEach((function(i){r.push({value:i.num,name:"{}"===JSON.stringify(a)?t.name:a[t.name],title:i.title}),0===e&&h.push(i.name)})),i.name="{}"===JSON.stringify(a)?t.name:a[t.name],i.type="line",i.smooth=!0,i.color=u[p(e)],i.areaStyle={normal:{color:new s.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:u[p(e)]},{offset:1,color:"transparent"}])}},i.data=r,d.push(i)})),i={title:{text:e,x:"left",textStyle:{color:"#FFF"},padding:[30,30]},tooltip:{trigger:"axis",padding:[10,20],backgroundColor:"rgba(255, 255, 255, 1)",textStyle:{color:"#000",fontWeight:"400",fontSize:13},formatter:function(t){if(0!==t.length){var e=function(t){return'<span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background-color:'.concat(t,'"></span>')},a="".concat(t[0].data.title,"<br/>"),i="";return t.forEach((function(t){t.data&&(i+="".concat(e(t.color)+t.data.name," : ").concat(t.data.value,"人")+"<br/>")})),a+i}}},grid:{top:"26%",left:"4%",right:"4%",bottom:"1%",containLabel:!0},legend:{type:"scroll",data:l,x:"left",padding:[66,30],textStyle:{rich:y()},icon:"circle",formatter:function(t){var a=0,i=0;n.forEach((function(e,s){t===e.name&&(a=e.num,i=s)}));var s=["{a|".concat(t,"}")];if("档案统计"===e){var r="{".concat(i,"|").concat(a,"}");s.push(r)}return s.join(" ")}},xAxis:[{type:"category",boundaryGap:!1,axisLabel:{color:"#80A0C0"},axisLine:{show:!0,lineStyle:{color:"#80A0C0",width:2,type:"solid"}},data:h}],yAxis:[{type:"value",axisLabel:{color:"#80A0C0",formatter:function(t){return r["a"].judgeNumber(t)}},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:["#80A0C0"],width:1,type:"solid"}}}],series:d},i&&c.setOption(i),c}},d470:function(t,e,a){"use strict";a("2e9a")}}]);