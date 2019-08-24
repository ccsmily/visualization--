webpackJsonp([1],{"+skl":function(t,e){},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.db4591d.png"},IVd6:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={data:function(){return{helpModal:!1,searchKey:""}},mounted:function(){this.searchKey=this.$route.query.key},methods:{okModal:function(){this.helpModal=!1},cancelModal:function(){this.helpModal=!1},goSearch:function(){if(!this.searchKey)return this.$Message.error("请输入搜索的关键词"),!1;console.log(this.$route.path),"/newsList"!==this.$route.path?this.$router.push({path:"/searchPage",query:{key:this.searchKey}}):this.$router.push({path:"/newsList",query:{key:this.searchKey}})},clearSearchKey:function(){this.searchKey=""},getSearchKey:function(){this.searchKey=this.$route.query.key}},computed:{currentPage:function(){var t="";switch(this.$route.path){case"/":t="首页";break;case"/searchPage":t="关键词搜索";break;case"/newsList":t="新闻列表"}return t},searchActive:function(){return this.$route.path.includes("/searchPage")},newsListActive:function(){return this.$route.path.includes("/newsList")}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("Layout",[a("Header",[a("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"}},[a("div",{staticClass:"layout-logo"},[a("img",{staticStyle:{width:"55px"},attrs:{src:n("7Otq")}}),a("img",{attrs:{src:n("QcjH")}})]),t._v(" "),a("div",{staticClass:"layout-nav"},[a("MenuItem",{attrs:{name:"1"}},[a("router-link",{attrs:{to:"/"}},[a("Icon",{attrs:{type:"ios-navigate"}}),t._v("首页")],1)],1),t._v(" "),a("MenuItem",{attrs:{name:"2"}},[a("router-link",{class:{"router-link-exact-active":t.searchActive},attrs:{to:"/searchPage"}},[a("Icon",{attrs:{type:"md-search"}}),t._v("关键词搜索")],1)],1),t._v(" "),a("MenuItem",{attrs:{name:"2"}},[a("router-link",{class:{"router-link-exact-active":t.newsListActive},attrs:{to:"/newsList"}},[a("Icon",{attrs:{type:"ios-keypad"}}),t._v("新闻列表")],1)],1),t._v(" "),a("MenuItem",{attrs:{name:"3"}},[a("Icon",{staticClass:"help-btn",attrs:{type:"md-help-circle",size:"18"},on:{click:function(e){t.helpModal=!0}}})],1)],1)])],1),t._v(" "),a("Content",{style:{padding:"0 50px"}},[a("div",{staticClass:"flex-box"},[a("Breadcrumb",{style:{margin:"20px 0"}},[a("BreadcrumbItem",[t._v("WORDANCE")]),t._v(" "),a("BreadcrumbItem",[t._v(t._s(t.currentPage))])],1),t._v(" "),a("div",{staticClass:"search-box"},[t.searchActive?a("div",{staticClass:"keyword circle"}):t._e(),t._v(" "),t.searchActive?a("span",{staticClass:"text",staticStyle:{"padding-right":"10px"}},[t._v("关键词")]):t._e(),t._v(" "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入关键词"},on:{"on-keyup":function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goSearch(e)}},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},[a("Icon",{staticClass:"search-btn",attrs:{slot:"suffix",type:"ios-search"},on:{click:t.goSearch},slot:"suffix"})],1)],1)],1),t._v(" "),a("Card",[a("div",{staticStyle:{"min-height":"calc(100vh - 230px)"}},[a("router-view",{key:t.$route.fullPath,on:{"on-clear-search-key":t.clearSearchKey,"on-get-search-key":t.getSearchKey}})],1)])],1),t._v(" "),a("Footer",{staticClass:"layout-footer-center"},[t._v("wordance © more than you know")])],1),t._v(" "),a("Modal",{attrs:{title:"帮助文档",scollable:!0},on:{"on-ok":t.okModal,"on-cancel":t.cancelModal},model:{value:t.helpModal,callback:function(e){t.helpModal=e},expression:"helpModal"}},[a("p",[t._v("- 首页词云为各类型数据聚合。")]),t._v(" "),a("p",[t._v("- 点击词云里的词语可进入关键词搜索页。")]),t._v(" "),a("p",[t._v("- 右上角输入框中可以输入词语进行搜索，也可以进入关键词搜索页，效果和点词云的词语进入的情况一样。")]),t._v(" "),a("p",[t._v("- 关键词搜索页可以看关键词关联的词形成的力导图，同时可以看选中点对应的详细信息。")]),t._v(" "),a("p",[t._v("- 关键词搜索页点更多文章可以进入新闻列表页")]),t._v(" "),a("p",[t._v("- 也可直接进入新闻列表页，输入关键词，查看关键词对应的各类型文章，切换类型，可以看到不同文章。")]),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:t.okModal}},[t._v("确定")])],1)])],1)},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("S1Hc")},"data-v-6d995a8c",null).exports,o=n("/ocq"),c=n("vwbq"),l=n("NobO"),u=n.n(l),d={name:"home",data:function(){return{carousel:0,groupList:[],initData:[],nodesObj:{},spinShow:!0}},watch:{carousel:{handler:function(t,e){t!==e&&this.drawRect()},deep:!0}},mounted:function(){var t=this;this.$emit("on-clear-search-key"),this.$axios("/getAllInfo").then(function(e){t.initData=e.data,e.data.forEach(function(e,n){t.nodesObj[e.id]=e});var n={};t.groupList=e.data.map(function(t,e){return n.hasOwnProperty(t.group)?-1:(n[t.group]=1,t.group)}).filter(function(t){return-1!==t}),t.$nextTick(function(){t.drawInit()})})},methods:{drawInit:function(){var t=this;this.drawRect(),this.groupList.forEach(function(e,n){t.drawWords(e,n)})},drawRect:function(){c.i(".tags").select("svg").remove();var t=c.i(".tags").append("svg"),e=this;t.attr("height",50).attr("width",""+80*this.groupList.length),t.append("g").attr("class","labels").attr("stroke","#fff").attr("stroke-width",1.5).selectAll("g").data(e.groupList).join("g").attr("transform",function(t,e){return"translate("+70*e+", 0)"}).style("cursor","pointer").on("click",function(t,n){e.carousel!==n&&(e.carousel=n)}),t.select(".labels").selectAll("g").append("rect").attr("width",70).attr("height",40).attr("rx",10).attr("ry",10).attr("fill",function(t,n){return n===e.carousel?e.scale[t]:"#ddd"}),t.select(".labels").selectAll("g").append("text").text(function(t){return e.labelsObj[t]}).attr("fill","#333").attr("stroke","#fff").attr("stroke-width",0).style("font-size",function(t){return"16px"}).style("background","transparent").style("color","#333").style("font-family","Impact").attr("text-anchor","middle").attr("transform","translate(35, 25)")},drawWords:function(t,e){var n=this,a=c.g(c.h),s=this.initData.filter(function(e,n){return e.group===t}).map(function(t,e){return{id:t.id,size:t.size}}),i=s.map(function(t){return t.size}),r=Math.max.apply(null,i),o=Math.min.apply(null,i),l=c.i(".svg-"+e).append("svg");l.attr("width",1e3).attr("height",500);var d=s.map(function(t){return{text:t.id,size:10+90*(t.size-o)/(r-o)}});u()().size([1e3,500]).words(d).padding(5).rotate(function(){return 45*Math.random()}).font("Impact").fontSize(function(t){return t.size}).on("end",function(){n.draw(l,d,this,a),e===n.groupList.length-1&&(n.spinShow=!1)}).start()},draw:function(t,e,n,a){var s=this;t.append("g").attr("transform","translate("+n.size()[0]/2+","+n.size()[1]/2+")").selectAll("text").data(e).enter().append("text").attr("fill",function(t,e){return a(e)}).style("font-size",function(t){return t.size+"px"}).style("font-family","Impact").style("cursor","pointer").attr("text-anchor","middle").attr("transform",function(t){return"translate("+[t.x,t.y]+")rotate("+t.rotate+")"}).text(function(t){return t.text}).on("click",function(t,e){console.log("wordclick",s.groupList[s.carousel]),s.$router.push({path:"/searchPage",query:{key:t.text,label:s.groupList[s.carousel]}})})}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"tags"}),t._v(" "),n("Carousel",{staticClass:"carousel",attrs:{loop:"",autoplay:"","autoplay-speed":5e3},model:{value:t.carousel,callback:function(e){t.carousel=e},expression:"carousel"}},t._l(t.groupList,function(t,e){return n("CarouselItem",{key:e},[n("div",{staticClass:"svg",class:"svg-"+e})])}),1),t._v(" "),t.spinShow?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},staticRenderFns:[]};var p=n("VU/8")(d,h,!1,function(t){n("zzAd")},"data-v-887b67f0",null).exports,f=n("fZjL"),g=n.n(f),v={name:"search",data:function(){return{initData:[],nodesObj:{},height:600,width:600,spinShow:!1,newsList:[],keyClicked:"",groupClicked:"",spinRightShow:!1,moreContentModal:{},currentGroupList:[],objRect:{},initGroupList:[],groupOfKeyWord:[],currentLabelIndex:0,init:0}},mounted:function(){this.$route.query.key?(this.spinShow=!0,this.$emit("on-get-search-key"),this.getConnectedWords(this.$route.query.key)):(this.$emit("on-clear-search-key"),this.$Message.info("请在搜索框输入关键词进行搜索"))},methods:{getConnectedWords:function(t){var e=this;this.$axios.get("/getNodesByKeyword?keyword="+t).then(function(t){e.initData=t.data;var n={};t.data.nodes.forEach(function(t,e){t.group.forEach(function(t,e){n.hasOwnProperty(t)||(n[t]=1)})});var a=g()(n);e.currentGroupList=a.concat([]),e.drawInit(t.data),t.data.nodes.forEach(function(t,n){e.nodesObj[t.id]=t})})},changeLabelIndex:function(t,e){this.currentLabelIndex=this.groupClicked.indexOf(e),this.getDetail(this.$route.query.key,this.groupClicked)},getDetail:function(t,e){var n=this;this.spinRightShow=!0,this.keyClicked=t;var a=e.indexOf("other");-1!==a?(e.splice(a,1),this.groupClicked=e.concat(["other"])):this.groupClicked=e.concat([]),-1!==this.groupClicked.indexOf(this.$route.query.label)&&0===this.init&&(this.currentLabelIndex=this.groupClicked.indexOf(this.$route.query.label),this.init++),this.$axios.get("/getInfoByKeyword?keyword="+t.toLowerCase()+"&label="+this.groupClicked[this.currentLabelIndex]+"&page_size=2&page_index=1").then(function(t){n.newsList=t.data.data,n.spinRightShow=!1})},getOpinion:function(t){return t.filter(function(t,e){return t[2]&&t[2].length>=4})},moreNews:function(){this.$router.push({path:"/newsList",query:{key:this.keyClicked,label:this.groupClicked[this.currentLabelIndex]}})},showMoreContent:function(t){this.$set(this.moreContentModal,"show",!0),this.$set(this.moreContentModal,"title",t.title),this.$set(this.moreContentModal,"content",t.content.trim().replace(/\\n/g,"<br>"))},okModal:function(){this.moreContentModal={},this.$set(this.moreContentModal,"show",!1)},cancelModal:function(){this.moreContentModal={},this.$set(this.moreContentModal,"show",!1)},getLabels:function(t){var e=this;return t.map(function(t,n){return e.labelsObj[t]}).join(",")},getInitData:function(){var t=this;this.initData.nodes.forEach(function(e,n){e.group.forEach(function(e,n){t.objRect.hasOwnProperty(e)||(t.objRect[e]=1)})});var e=g()(this.objRect);this.currentGroupList=e.concat([]),this.initGroupList=e.concat([])},drawInit:function(t){this.getInitData(),this.draw(t,!0),this.drawRect(t)},drag:function(t){return c.a().on("start",function(e){c.b.active||t.alphaTarget(.3).restart(),e.fx=e.x,e.fy=e.y}).on("drag",function(t){t.fx=c.b.x,t.fy=c.b.y}).on("end",function(e){c.b.active||t.alphaTarget(0),e.fx=null,e.fy=null})},draw:function(t,e){this.spinShow=!0;var n=t.links,a=t.nodes,s=this,i=c.f(a).force("link",c.d(n).id(function(t){return t.id})).force("charge",c.e()).force("center",c.c(this.width/2,this.height/2)),r=void 0;(r=e?c.i(".left").append("svg"):c.i("svg")).attr("viewBox",[0,0,this.width,this.height]);var o=r.append("g").attr("class","links").attr("stroke","#999").attr("stroke-opacity",.6).selectAll("line").data(n).join("line").attr("stroke-width",function(t){return 1}),l=r.append("g").attr("class","nodes").attr("stroke","#fff").attr("stroke-width",1.5).selectAll("circle").data(a).join("circle").attr("r",5).attr("class",function(t,e){if(t.id.toLowerCase()===s.$route.query.key.toLowerCase())return s.groupOfKeyWord=t.group,"keyword"}).attr("fill",function(t){for(var e="",n=0;n<t.group.length;n++)if(-1!==s.currentGroupList.indexOf(t.group[n])){e=t.group[n];break}return s.scale[e]}).on("click",function(t){s.getDetail(t.id,t.group)}).call(this.drag(i));l.append("title").text(function(t){return t.id}),i.on("tick",function(){o.attr("x1",function(t){return t.source.x}).attr("y1",function(t){return t.source.y}).attr("x2",function(t){return t.target.x}).attr("y2",function(t){return t.target.y}),l.attr("cx",function(t){return t.x}).attr("cy",function(t){return t.y})}),this.spinShow=!1,this.groupOfKeyWord.length>0&&this.getDetail(this.$route.query.key,this.groupOfKeyWord)},redraw:function(t,e){var n=this,a=t.filter(function(t,n){return 1===e[t]});this.currentGroupList=a.concat([]);var s=this.initData.nodes.filter(function(t,e){return t.group.filter(function(t,e){return-1!==a.indexOf(t)}).length>0}),i=this.initData.links.filter(function(t,e){var s=n.nodesObj[t.source.id].group.filter(function(t,e){return-1!==a.indexOf(t)}),i=n.nodesObj[t.target.id].group.filter(function(t,e){return-1!==a.indexOf(t)});return s.length>0&&i.length>0});c.i(".links").remove(),c.i(".nodes").remove(),c.i(".labels").remove(),this.draw({links:i,nodes:s}),this.drawRect({nodes:s})},drawRect:function(t){var e=this,n=c.i("svg");n.append("g").attr("class","labels").attr("stroke","#fff").attr("stroke-width",1.5).selectAll("g").data(e.initGroupList).join("g").attr("transform",function(t,e){return"translate(10, "+30*e+")"}).style("cursor","pointer").on("click",function(t,n){1===e.objRect[t]?(e.objRect[t]=-1,e.redraw(e.initGroupList,e.objRect)):(e.objRect[t]=1,e.redraw(e.initGroupList,e.objRect))}),n.select(".labels").selectAll("g").append("rect").attr("width",30).attr("height",15).attr("rx",3).attr("ry",3).attr("fill",function(t){return 1===e.objRect[t]?e.scale[t]:"#ddd"}),n.select(".labels").selectAll("g").append("text").text(function(t){return e.labelsObj[t]}).attr("stroke-width",0).style("font-size",function(t){return"10px"}).style("background","transparent").style("fill",function(t){return 1===e.objRect[t]?"#fff":"#333"}).style("font-family","Impact").attr("text-anchor","middle").attr("transform","translate(15, 11)")}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"search content"},[n("div",{staticClass:"left"}),t._v(" "),n("div",{staticClass:"right"},[t.spinRightShow?n("Spin",{attrs:{size:"large"}}):t._e(),t._v(" "),t.initData.nodes&&0===t.initData.nodes.length||void 0===t.initData.nodes?n("p",{staticClass:"tip"},[t._v("点击左侧点出现点的具体信息, 没有出现力导图则请输入适当关键词进行搜索")]):t._e(),t._v(" "),n("div",{staticClass:"tag-wrap"},[n("div",{staticClass:"tags hidden"},[t.keyClicked?n("Tag",{staticClass:"tag"}):t._e(),t._v(" "),t._l(t.groupClicked,function(e,a){return n("Tag",{key:a,staticClass:"tag",class:e,attrs:{name:e,checkable:a!==t.currentLabelIndex,checked:a===t.currentLabelIndex},on:{"on-change":t.changeLabelIndex}},[n("span",{class:{current:a===t.currentLabelIndex}},[t._v(t._s(t.labelsObj[e]))])])}),t._v(" "),n("Button",{staticClass:"more",attrs:{type:"primary",ghost:""},on:{click:t.moreNews}},[t._v("更多新闻")])],2)]),t._v(" "),t.newsList.length>0?n("div",t._l(t.newsList,function(e,a){return n("div",{key:a,staticClass:"card"},[a<2?n("Card",[n("p",{staticClass:"hidden",attrs:{slot:"title"},slot:"title"},[t._v("\n              "+t._s(e.title)+"\n              "),n("span",{staticClass:"more",on:{click:function(n){return t.showMoreContent(e)}}},[n("span",[t._v("more")]),t._v(" "),n("svg",{staticClass:"icon",attrs:{t:"1566372115510",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1113",width:"200",height:"200"}},[n("path",{attrs:{d:"M512 42.666667c258.133333 0 469.333333 211.2 469.333333 469.333333s-211.2 469.333333-469.333333 469.333333S42.666667 770.133333 42.666667 512 253.866667 42.666667 512 42.666667z m0 853.333333c211.2 0 384-172.8 384-384S723.2 128 512 128 128 300.8 128 512s172.8 384 384 384z",fill:"#2d8cf0","p-id":"1114"}}),n("path",{attrs:{d:"M512 448c-36.266667 0-64 27.733333-64 64s27.733333 64 64 64 64-27.733333 64-64-27.733333-64-64-64M725.333333 448c-36.266667 0-64 27.733333-64 64s27.733333 64 64 64 64-27.733333 64-64-27.733333-64-64-64M298.666667 448c-36.266667 0-64 27.733333-64 64s27.733333 64 64 64 64-27.733333 64-64-27.733333-64-64-64",fill:"#2d8cf0","p-id":"1115"}})])])]),t._v(" "),n("p",{staticClass:"author"},[t._v(t._s(e.source)+"  "+t._s(e.author))]),t._v(" "),t._l(t.getOpinion(e.opinion),function(e,a){return n("p",{key:a},[a<4?n("Alert",[t._v(t._s(e[0])+": "+t._s(e[2]))]):t._e()],1)}),t._v(" "),0===t.getOpinion(e.opinion).length?n("p",[n("Alert",{attrs:{type:"warning"}},[t._v("暂无观点内容")])],1):t._e()],2):t._e()],1)}),0):t._e()],1)]),t._v(" "),n("Modal",{staticClass:"contentModal",attrs:{title:t.moreContentModal.title,width:800,scollable:!0},on:{"on-ok":t.okModal,"on-cancel":t.cancelModal},model:{value:t.moreContentModal.show,callback:function(e){t.$set(t.moreContentModal,"show",e)},expression:"moreContentModal.show"}},[n("div",{domProps:{innerHTML:t._s(t.moreContentModal.content)}}),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"primary"},on:{click:t.okModal}},[t._v("确定")])],1)]),t._v(" "),t.spinShow?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},staticRenderFns:[]};var m=n("VU/8")(v,y,!1,function(t){n("IVd6")},"data-v-6f3a5d16",null).exports,w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"search content"},[t.$route.query.key?n("div",{staticClass:"tag-wrap"},[n("div",{staticClass:"tags hidden"},[n("Tag",{staticClass:"tag"},[t._v(t._s(t.$route.query.key))]),t._v(" "),t._l(t.labels,function(e,a){return n("Tag",{key:a,staticClass:"tag",class:e,attrs:{name:e,checkable:a!==t.currentLabelIndex,checked:a===t.currentLabelIndex},on:{"on-change":t.changeLabelIndex}},[n("span",{class:{current:a===t.currentLabelIndex}},[t._v(t._s(t.labelsObj[e]))])])})],2),t._v(" "),t.page.total>0?n("div",{staticClass:"btns"},[n("Page",{attrs:{current:t.page.index,total:t.page.total,simple:"","show-total":""},on:{"on-change":t.pageChange}})],1):t._e()]):t._e(),t._v(" "),t.newsList.length>0?n("div",{staticStyle:{width:"100%"}},[n("Row",{attrs:{gutter:20}},t._l(t.newsList,function(e,a){return n("Col",{key:a,staticClass:"card card-item",attrs:{span:"12"}},[n("Card",[n("p",{staticClass:"hidden",attrs:{slot:"title"},slot:"title"},[t._v("\n              "+t._s(e.title)+"\n              "),n("span",{staticClass:"more",on:{click:function(n){return t.showMoreContent(e)}}},[n("span",[t._v("more")]),t._v(" "),n("svg",{staticClass:"icon",attrs:{t:"1566372115510",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1113",width:"200",height:"200"}},[n("path",{attrs:{d:"M512 42.666667c258.133333 0 469.333333 211.2 469.333333 469.333333s-211.2 469.333333-469.333333 469.333333S42.666667 770.133333 42.666667 512 253.866667 42.666667 512 42.666667z m0 853.333333c211.2 0 384-172.8 384-384S723.2 128 512 128 128 300.8 128 512s172.8 384 384 384z",fill:"#2d8cf0","p-id":"1114"}}),n("path",{attrs:{d:"M512 448c-36.266667 0-64 27.733333-64 64s27.733333 64 64 64 64-27.733333 64-64-27.733333-64-64-64M725.333333 448c-36.266667 0-64 27.733333-64 64s27.733333 64 64 64 64-27.733333 64-64-27.733333-64-64-64M298.666667 448c-36.266667 0-64 27.733333-64 64s27.733333 64 64 64 64-27.733333 64-64-27.733333-64-64-64",fill:"#2d8cf0","p-id":"1115"}})])])]),t._v(" "),n("p",{staticClass:"author"},[t._v(t._s(e.source)+"  "+t._s(e.author))]),t._v(" "),t._l(t.getOpinion(e.opinion),function(e,a){return n("p",{key:a},[a<4?n("Alert",[t._v(t._s(e[0])+": "+t._s(e[2]))]):t._e()],1)}),t._v(" "),0===t.getOpinion(e.opinion).length?n("p",[n("Alert",{attrs:{type:"warning"}},[t._v("暂无观点内容")])],1):t._e()],2)],1)}),1)],1):t._e(),t._v(" "),0===t.newsList.length&&t.$route.query.key?n("div",{staticClass:"tip"},[t._v("没有关键词"+t._s(t.$route.query.key)+"对应"+t._s(t.labelsObj[t.labels[t.currentLabelIndex]])+"板块内容")]):t._e()]),t._v(" "),n("Modal",{staticClass:"contentModal",attrs:{title:t.moreContentModal.title,width:800,scollable:!0},on:{"on-ok":t.okModal,"on-cancel":t.cancelModal},model:{value:t.moreContentModal.show,callback:function(e){t.$set(t.moreContentModal,"show",e)},expression:"moreContentModal.show"}},[n("div",{domProps:{innerHTML:t._s(t.moreContentModal.content)}}),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"primary"},on:{click:t.okModal}},[t._v("确定")])],1)]),t._v(" "),t.spinShow?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},staticRenderFns:[]};var _=n("VU/8")({name:"news-list",data:function(){return{newsList:[],spinShow:!1,btnDisable:!1,moreContentModal:{},page:{size:10,index:1,total:0},labels:["civilization","economy","education","military","polity","society","sports","other"],currentLabelIndex:0}},mounted:function(){this.$route.query.key?(this.$emit("on-get-search-key"),this.$route.query.label&&-1!==this.labels.indexOf(this.$route.query.label)&&(this.currentLabelIndex=this.labels.indexOf(this.$route.query.label)),this.getDetail(this.$route.query.key,this.labels[this.currentLabelIndex],this.page.index,this.page.size,"spinShow")):(this.$emit("on-clear-search-key"),this.$Message.info("请在搜索框输入关键词进行搜索"))},methods:{getDetail:function(t,e,n,a,s){var i=this;this[s]=!0,this.$axios.get("/getInfoByKeyword?keyword="+t.toLowerCase()+"&label="+e+"&page_size="+a+"&page_index="+n).then(function(t){i.newsList=t.data.data,i.page.total=t.data.total,i[s]=!1})},getOpinion:function(t){return t.filter(function(t,e){return t[2]&&t[2].length>=4})},changeLabelIndex:function(t,e){this.currentLabelIndex=this.labels.indexOf(e),this.getDetail(this.$route.query.key,this.labels[this.currentLabelIndex],this.page.index,this.page.size,"spinShow")},showMoreContent:function(t){this.$set(this.moreContentModal,"show",!0),this.$set(this.moreContentModal,"title",t.title),this.$set(this.moreContentModal,"content",t.content.trim().replace(/\\n/g,"<br>"))},okModal:function(){this.moreContentModal={},this.$set(this.moreContentModal,"show",!1)},cancelModal:function(){this.moreContentModal={},this.$set(this.moreContentModal,"show",!1)},pageChange:function(){this.getDetail(this.$route.query.key,this.labels[this.currentLabelIndex],this.page.index,this.page.size,"spinShow")}}},w,!1,function(t){n("XeJH")},"data-v-0dfce380",null).exports;a.default.use(o.a);var k=new o.a({linkActiveClass:"link-active",routes:[{path:"/",name:"Home",component:p},{path:"/searchPage",name:"Search",component:m},{path:"/newsList",name:"NewsList",component:_}]}),b=n("mtWM"),x=n.n(b),C=n("BTaQ"),M=n.n(C);n("+skl");a.default.use(M.a),a.default.prototype.$axios=x.a,x.a.defaults.baseURL=SERVICE_URL,a.default.config.productionTip=!1;a.default.prototype.scale={civilization:"#ff7f0e",economy:"#2ca02c",education:"#d62728",military:"#9467bd",polity:"#1f77b4",society:"#e377c2",sports:"#7f7f7f",other:"#bcbd22"},a.default.prototype.labelsObj={civilization:"人文",economy:"经济",education:"教育",military:"军事",polity:"政治",society:"社会",sports:"体育",other:"其他"},new a.default({el:"#app",router:k,components:{App:r},template:"<App/>"})},QcjH:function(t,e,n){t.exports=n.p+"static/img/logo-2.db51f58.png"},S1Hc:function(t,e){},XeJH:function(t,e){},zzAd:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a5abaaffc3aab626b8a2.js.map