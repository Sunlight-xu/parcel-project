(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d760ba8"],{"4f1a":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"search_container border_radius"},[e("div",{staticClass:"radio_select"},[e("ul",[e("li",{class:1===t.radioContent?"active":"",on:{click:function(a){return t.handleChangeRadio(1)}}},[t._v(" 个人轨迹 ")])]),e("div",{staticClass:"radio_select_right"},[t.saveDataId?t._e():e("el-button",{attrs:{type:"text"},on:{click:t.showExport}},[t._v("保存结果")]),1===t.type?e("div",{staticClass:"search_back",on:{click:t.handleBack}},[e("span",[t._v("返回")]),t._m(0)]):t._e()],1)]),e("div",{staticClass:"search_map"},[1===t.type&&1===t.radioContent?e("div",{staticClass:"search_map_person border_radius"},[e("img",{attrs:{src:t.bodyUrl,width:"122px",height:"165px",alt:""}}),""!==t.faceUrl?e("img",{attrs:{src:t.faceUrl,width:"122px",height:"165px",alt:""}}):t._e(),e("div",{staticClass:"search_map_info"},[t._m(1),e("div",{staticClass:"search_map_button",on:{click:t.getSnapTrackDetail}},[t._v(" 查看轨迹详情 ")])])]):2===t.type&&1===t.radioContent?e("div",{staticClass:"search_map_people"},[e("div",{staticClass:"search_map_people_track"},[e("img",{attrs:{src:t.bellImg,alt:""}}),e("span",[t._v(t._s(t.photoCount)+" 张照片合成轨迹")])]),e("div",{staticClass:"search_map_button",on:{click:t.getTracksDetail}},[t._v(" 查看轨迹详情 ")])]):t._e(),e("Map",{attrs:{oldmap:!1,floors:t.floorInfo,allTracks:t.allTracks,camerasData:t.camerasData,lastFloorId:t.lastFloorId,personalAllTracks:t.allPersonalTracks},on:{showLastVideo:t.showVideo}})],1),2===t.radioContent?e("div",{staticClass:"search_list"},[t._m(2),e("div",{staticClass:"search_list_content"},t._l(t.groupsData,(function(a){return e("div",{key:a.pid,staticClass:"search_list_content_item",on:{click:function(e){return t.handleGroupItemClick(a)}}},[t.showContactTrack===a.pid?e("div",{staticClass:"search_list_content_item_border"}):t._e(),e("img",{attrs:{src:a.image_url,alt:""}}),e("div",{staticClass:"search_list_content_item_info"},[e("span",{staticClass:"content_value"},[t._v(t._s(a.name?a.name:"未知"))]),e("span",{staticClass:"content_value"},[t._v(t._s(a.number?a.number:"身份待确认"))]),e("span",[e("i",{staticClass:"content_title"},[t._v("同行时间")]),e("i",{staticClass:"content_value"},[t._v(t._s(t._f("timeFilter")(a.startTime)))])]),e("span",[e("i",{staticClass:"content_title"},[t._v("时长")]),e("i",{staticClass:"content_value"},[t._v(t._s(t.formatDelayTime(a.duration/1e3)))])]),e("span",[e("i",{staticClass:"content_title"},[t._v("最小间距")]),e("i",{staticClass:"content_value"},[t._v(t._s(a.closest_distance.toFixed(2))+"米")])]),e("span",[e("i",{staticClass:"content_title"},[t._v("抓拍区域")]),e("i",{staticClass:"content_value"},[t._v(t._s(t.cameraFilter(a.cameras[0].ip,"area")))])]),e("span",[e("i",{staticClass:"content_title"},[t._v("抓拍相机")]),e("i",{staticClass:"content_value"},[t._v(t._s(t.cameraFilter(a.cameras[0].ip,"location")))])])]),e("div",{staticClass:"search_list_content_item_button border_radius",on:{click:function(e){return e.stopPropagation(),t.showGroupsDetail(a)}}},[t._v(" 同行详情 ")])])})),0)]):t._e(),e("Dialog",{attrs:{title:"轨迹详情",isVisible:t.detailVisible,width:"940px"},on:{close:t.handleClose},scopedSlots:t._u([{key:"content",fn:function(){return["列表"===t.radio?e("div",{staticClass:"table_content"},[e("common-table",{attrs:{isShowIndex:!0,tableColArray:t.tableColumn,tableData:t.tableData},scopedSlots:t._u([{key:"image",fn:function(a){return[e("img",{attrs:{src:1===t.radioContent?a.row.image_url:a.row.body_patch_url,width:"80",height:"100"},on:{click:function(e){return t.checkLargeImg(1===t.radioContent?a.row.image_url:a.row.body_patch_url)}}})]}},{key:"end",fn:function(a){return[t._v(" "+t._s(t._f("timeFilter")(1===t.radioContent?a.row.trajectory[a.row.trajectory.length-1].timestamp:a.row.group_detection_box[a.row.group_detection_box.length-1].detTime))+" ")]}},{key:"channel",fn:function(a){return[t._v(" "+t._s(t.cameraFilter(1===t.radioContent?a.row.camera.ip:a.row.camera_ip,"location"))+" ")]}},{key:"video",fn:function(a){return[-1===t.videoLoading.indexOf(a.row.track_id)?e("i",{staticClass:"el-icon-video-play",staticStyle:{"font-size":"20px"},on:{click:function(e){return t.openVideo(a.row)}}}):e("i",{staticClass:"el-icon-loading",staticStyle:{"font-size":"20px"}})]}}],null,!1,1722599299)})],1):t._e(),e("div",{staticClass:"pagintion_content"},[e("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[10,20,30],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.hanleCurrentPChange,"size-change":t.handleSizeChange}})],1)]},proxy:!0}])}),e("el-dialog",{attrs:{width:"860px",visible:t.videoVisible},on:{"update:visible":function(a){t.videoVisible=a}}},[e("video",{attrs:{src:t.trackVideo,width:"800",autoplay:"",controls:""}})]),e("el-dialog",{attrs:{title:"创建导出任务",width:"600px",visible:t.inputNameVisible},on:{"update:visible":function(a){t.inputNameVisible=a}}},[e("div",{staticStyle:{width:"100%",display:"flex",height:"80px","text-align":"center","align-items":"center"}},[e("div",{staticStyle:{color:"var(--color-ft-2)",width:"100px","font-size":"14px","margin-right":"15px","line-height":"40px"}},[t._v(" 任务名称 ")]),e("el-input",{model:{value:t.taskName,callback:function(a){t.taskName=a},expression:"taskName"}})],1),e("div",{staticStyle:{width:"100%",display:"flex",height:"80px","text-align":"center","align-items":"center"}},[e("div",{staticStyle:{color:"var(--color-ft-2)",width:"100px","font-size":"14px","margin-right":"15px","line-height":"40px"}},[t._v(" 是否下载视频 ")]),e("div",[e("el-radio",{attrs:{label:"1"},model:{value:t.videoRadio,callback:function(a){t.videoRadio=a},expression:"videoRadio"}},[t._v("是")]),e("el-radio",{attrs:{label:"2"},model:{value:t.videoRadio,callback:function(a){t.videoRadio=a},expression:"videoRadio"}},[t._v("否")])],1)]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"medium"},on:{click:function(a){t.inputNameVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.exportData}},[t._v("确 定")])],1)]),e("checkLargeImg",{attrs:{show:t.showLargeImg,imgUrl:t.imgList},on:{isClose:t.closeImg}})],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticStyle:{"margin-left":"4px"}},[e("i",{staticClass:"el-icon-arrow-right"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"search_map_info_content"},[e("span",{staticClass:"name"}),e("span",{staticClass:"id"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search_list_header"},[e("span",{},[t._v(" 同行人 "),e("i",{staticClass:"header_tip"},[t._v("(选择同行人查看轨迹)")])])])}],n=e("1da1"),r=e("5530"),o=(e("96cf"),e("a9e3"),e("99af"),e("498a"),e("e9c4"),e("c975"),e("a434"),e("4160"),e("d3b7"),e("159b"),e("2f62")),c=e("4af1"),l=e("5c96"),d=e("f576"),u=e.n(d),p=e("b837"),h=e("7c8a"),_=e("510e"),g=e("1816"),m=e.n(g),f=e("8e6c"),b=(e("e25e"),{computed:Object(o["b"])(["camerasData"]),filters:{timeFilter:function(t){var a=_["a"].getTime(t/1e3);return"".concat(a.nowYear,"/").concat(a.nowMonth,"/").concat(a.nowDate," ").concat(a.nowHour,":").concat(a.nowMin,":").concat(a.nowSec)}},methods:{formatDelayTime:function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(0===t)return"0秒";var e=0,i=0,s=0;e=parseInt(t/3600);var n=t%3600;if(i=parseInt(n/60),s=n%60,a){var r="";return r=e>0?(e>0?"".concat(e,"小时"):"")+(i>0?"".concat(i,"分钟"):""):(i>0?"".concat(i,"分钟"):"")+(s>0?"".concat(s,"秒"):""),r}return(e>0?"".concat(e,"小时"):"")+(i>0?"".concat(i,"分钟"):"")+(s>0?"".concat(s,"秒"):"")},cameraFilter:function(t,a){var e="";return this.camerasData.forEach((function(i){i.ip===t&&(e=i[a])})),e}}}),v=e("fefb"),k={props:{type:{type:Number,default:1},allFloorTracksData:{type:Array,default:function(){return[]}},photoCount:{default:""},queryId:{type:String,default:""},faceUrl:{type:String,default:""},bodyUrl:{type:String,default:""},name:{default:""},idNumber:{default:""},params:{type:Object,default:function(){return{}}},lastFloorId:{type:Number,default:0},saveDataId:{default:""}},data:function(){return{radioContent:1,detailVisible:!1,videoVisible:!1,showContactTrack:"",total:0,bellImg:m.a,currentPage:1,pageSize:10,tableData:[],groupsData:[],allTracks:[],allPersonalTracks:[],radio:"列表",tableColumn:[{type:"slot",slot:"image",props:"bodyPatchesUrl",label:"人像照",width:"100px"},{label:"开始时间",props:"start_time",type:"date"},{label:"结束时间",props:"end_at",type:"slot",slot:"end"},{label:"抓拍相机",props:"channel",type:"slot",slot:"channel"},{label:"操作",props:"",slot:"video",type:"slot",width:"60px"}],videoLoading:[],trackVideo:"",showLargeImg:!1,imgList:[],inputNameVisible:!1,taskName:"",videoRadio:"1"}},mixins:[b],computed:Object(r["a"])({},Object(o["b"])(["floorInfo","camerasData","catchQuery","bodyQuery"])),components:{Map:c["a"],CommonTable:p["a"],Dialog:f["a"],checkLargeImg:h["a"]},filters:{timeFilter:function(t){var a=_["a"].getTime(t/1e3);return"".concat(a.nowYear,"-").concat(a.nowMonth,"-").concat(a.nowDate," ").concat(a.nowHour,":").concat(a.nowMin,":").concat(a.nowSec)}},watch:{allFloorTracksData:{handler:function(t){this.allTracks=t},immediate:!0}},methods:{showExport:function(){this.inputNameVisible=!0},exportData:function(){var t=this;if(""!==this.taskName.trim()){var a={download_type:1===this.type?"download_snap_detail_task":"download_body_search_detail_task",download_video:"1"===this.videoRadio,admin_id:JSON.parse(sessionStorage.getItem("userInfo")).id,query:{first:1===this.type?this.catchQuery:this.bodyQuery,second:this.params,third:Object(r["a"])(Object(r["a"])({},this.params),{},{page:1,page_size:10})}};Object(v["f"])({param:JSON.stringify(a),task_id:_["a"].guid(),sign:(new u.a).update(JSON.stringify(a)).digest("hex"),name:this.taskName}).then((function(a){0===a.error_no&&l["Message"].success("创建成功"),t.inputNameVisible=!1}))}else l["Message"].warning("请填写任务名称")},handleChangeRadio:function(t){2===t?(1===this.type?this.getSnapGroup():this.getBodyGroup(),this.allTracks=[]):this.allTracks=this.allFloorTracksData,this.allPersonalTracks=[],this.radioContent=t},getVideo:function(t){return 1===this.radioContent?Object(v["A"])({track_id:t.track_id,start_time:t.start_time,end_time:t.trajectory[t.trajectory.length-1].timestamp,camera_ip:t.camera.ip,trajectory:t.trajectory,download_task_id:this.saveDataId||void 0}):Object(v["o"])({track_id:t.track_id,start_time:t.start_time,end_time:t.group_detection_box[t.group_detection_box.length-1].detTime,camera_ip:t.camera_ip,current_detection_box:t.current_detection_box,group_detection_box:t.group_detection_box})},openVideo:function(t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.videoLoading.push(t.track_id),e.next=3,a.getVideo(t);case 3:i=e.sent,0!==i.error_no||a.videoVisible||(a.trackVideo=i.data.url,a.videoVisible=!0),s=a.videoLoading.indexOf(t.track_id),a.videoLoading.splice(s,1);case 7:case"end":return e.stop()}}),e)})))()},cameraFilter:function(t,a){var e="";return this.camerasData.forEach((function(i){i.ip===t&&(e=i[a])})),e},hanleCurrentPChange:function(t){var a=this;if(this.currentPage=t,1===this.radioContent){if(this.saveDataId)return void Object(v["s"])({id:this.saveDataId,page:this.currentPage,page_size:this.pageSize}).then((function(t){0===t.error_no&&(a.tableData=t.data.content)}));2===this.type?Object(v["h"])({query_id:this.queryId,page:this.currentPage,page_size:this.pageSize}).then((function(t){0===t.error_no&&(a.tableData=t.data.content)})):Object(v["x"])(Object(r["a"])(Object(r["a"])({},this.params),{},{page:this.currentPage,page_size:this.pageSize})).then((function(t){0===t.error_no&&(a.tableData=t.data.content)}))}else Object(v["u"])(Object(r["a"])(Object(r["a"])({},this.detailParams),{},{page:this.currentPage})).then((function(t){a.total=t.data.count,a.tableData=t.data.tracks}))},handleSizeChange:function(t){var a=this;if(this.pageSize=t,this.currentPage=1,1===this.radioContent){if(this.saveDataId)return void Object(v["s"])({id:this.saveDataId,page:this.currentPage,page_size:this.pageSize}).then((function(t){0===t.error_no&&(a.tableData=t.data.content)}));2===this.type?Object(v["h"])({query_id:this.queryId,page:this.currentPage,page_size:this.pageSize}).then((function(t){0===t.error_no&&(a.tableData=t.data.content)})):Object(v["x"])(Object(r["a"])(Object(r["a"])({},this.params),{},{page:this.currentPage,page_size:this.pageSize})).then((function(t){0===t.error_no&&(a.tableData=t.data.content)}))}else Object(v["u"])(Object(r["a"])(Object(r["a"])({},this.detailParams),{},{page_size:this.pageSize})).then((function(t){a.total=t.data.count,a.tableData=t.data.tracks}))},handleBack:function(){this.$emit("pageBack")},getTracksDetail:function(){var t=this;this.currentPage=1,this.pageSize=10,this.saveDataId?Object(v["s"])({id:this.saveDataId,page:this.currentPage,page_size:this.pageSize}).then((function(a){0===a.error_no&&(t.tableData=a.data.content,t.total=a.data.total_elements,t.detailVisible=!0)})):Object(v["h"])({query_id:this.queryId,page:this.currentPage,page_size:this.pageSize}).then((function(a){0===a.error_no&&(t.detailVisible=!0,t.tableData=a.data.content,t.total=a.data.total_elements)}))},getSnapTrackDetail:function(){var t=this;this.currentPage=1,this.pageSize=10,this.saveDataId?Object(v["s"])({id:this.saveDataId,page:this.currentPage,page_size:this.pageSize}).then((function(a){0===a.error_no&&(t.tableData=a.data.content,t.total=a.data.total_elements,t.detailVisible=!0)})):Object(v["x"])(Object(r["a"])(Object(r["a"])({},this.params),{},{page:this.currentPage,page_size:this.pageSize})).then((function(a){0===a.error_no&&(t.detailVisible=!0,t.tableData=a.data.content,t.total=a.data.total_elements)}))},handleClose:function(){this.detailVisible=!1},getBodyGroup:function(){var t=this;Object(v["g"])({query_id:this.queryId}).then((function(a){0===a.error_no&&(a.data?(t.groupsData=a.data.groups,t.currentPid=a.data.pid,t.useTpid=a.data.use_tpid,t.allTracks=[],t.allPersonalTracks=a.data.tracks):l["Message"].error("未找同行人员"))}))},getSnapGroup:function(){var t=this;Object(v["t"])(Object(r["a"])({},this.params)).then((function(a){0===a.error_no&&(a.data?(t.groupsData=a.data.groups,t.currentPid=a.data.pid,t.useTpid=a.data.use_tpid,t.allTracks=[],t.allPersonalTracks=a.data.tracks):l["Message"].error("未找同行人员"))}))},handleGroupItemClick:function(t){this.showContactTrack=t.pid,this.allTracks=t.tracks},showGroupsDetail:function(t){var a=this;this.detailParams={start_time:this.params.start_time,end_time:this.params.end_time,pid:this.currentPid,group_pid:t.pid,use_tpid:this.useTpid,page:1,page_size:10},Object(v["u"])(Object(r["a"])({},this.detailParams)).then((function(t){a.total=t.data.count,a.tableData=t.data.tracks,a.detailVisible=!0}))},showVideo:function(){var t=this;Object(v["v"])(Object(r["a"])(Object(r["a"])({},this.params),{},{download_task_id:this.saveDataId||void 0})).then((function(a){0===a.error_no&&(t.trackVideo=a.data.url,t.videoVisible=!0)}))},closeImg:function(t){t&&(this.showLargeImg=!1,this.imgList=[])},checkLargeImg:function(t){this.showLargeImg=!0,this.imgList.push(t)}}},y=k,C=(e("f222"),e("2877")),w=Object(C["a"])(y,i,s,!1,null,"8bda0986",null);a["a"]=w.exports},f222:function(t,a,e){"use strict";e("f773")},f773:function(t,a,e){}}]);