webpackJsonp([0],[,,,function(t,e,a){"use strict";var s=a(14),i=a(17),n=a(20),r=a(23);e.a={components:{TabMenu:s.a,PFilter:i.a,Help:n.a,PFooter:r.a},data:function(){return{showMenu:!1,products:[{id:1,name:"Abott",description:"新生儿配方液态奶",src:"../static/img/product/abott.png",price:"170元",rating:4},{id:2,name:"Hegen",description:"婴孩多功能奶瓶",src:"../static/img/product/hegen.png",price:"170元",rating:4},{id:3,name:"HiPP",description:"免敏抗敏婴孩奶粉",src:"../static/img/product/hipp.png",price:"170元",rating:4},{id:4,name:"Marcus",description:"辅食挤压硅胶勺",src:"../static/img/product/marcus.png",price:"170元",rating:4},{id:5,name:"Stokke",description:"迷你实木婴孩床",src:"../static/img/product/stokke.png",price:"170元",rating:4},{id:6,name:"Betta",description:"玻璃标准口径奶瓶",src:"../static/img/product/betta.png",price:"170元",rating:4}],breadcrumbs:[{text:"首页",disabled:!1,href:"breadcrumbs_dashboard"},{text:"产品",disabled:!0,href:"breadcrumbs_link_1"}]}},computed:{styleObject:function(){return{backgroundColor:this.showMenu?"#f2dbcf":"rgba(0,0,0,0)"}}},methods:{scrollTo:function(t,e,a){var s=t.scrollLeft;if(!(0===s||e>0)||!(t.clientWidth+s===t.scrollWidth||e<0)){var i=function i(r){var c=r-n,l=Math.min(c/a,1);t.scrollLeft=s+e*l,c<a&&window.requestAnimationFrame(i)},n="now"in window.performance?performance.now():(new Date).getTime();window.requestAnimationFrame(i)}},swipeLeft:function(){var t=this.$refs.content;this.scrollTo(t,-600,800)},swipeRight:function(){var t=this.$refs.content;this.scrollTo(t,600,800)}}}},function(t,e,a){"use strict";e.a={data:function(){return{menus:[{text:"出行工具",append:"a"},{text:"奶粉辅食",append:"b"},{text:"喂养餐具",append:"c"},{text:"尿布服饰",append:"d"},{text:"家居用品",append:"e"},{text:"玩具学习",append:"f"},{text:"洗护保洁",append:"g"}]}}}},function(t,e,a){"use strict";e.a={data:function(){return{empty:[],selectedAges:[],dropdown_age:[{text:"新生 - 6个月"},{text:"7个月 - 12个月"},{text:"1岁 - 2岁"},{text:"2岁 - 3岁"},{text:"3岁 - 6岁"}]}}}},function(t,e,a){"use strict";e.a={data:function(){return{showHelp:!1,helps:[{text:"第一责任制",append:""},{text:"7天无理退货",append:""},{text:"贴心的送货安装",append:""},{text:"尊贵超值积分",append:""},{text:"线下专属会员店",append:""}]}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),i=a(11),n=a(27),r=a(29),c=a.n(r),l=a(30),o=(a.n(l),a(31));a.n(o);s.default.use(c.a,{theme:{accent:"#faba15"}}),s.default.config.productionTip=!1,new s.default({el:"#app",router:n.a,components:{App:i.a},template:"<App/>"})},,,,function(t,e,a){"use strict";function s(t){a(12)}var i=a(3),n=a(26),r=a(0),c=s,l=r(i.a,n.a,!1,c,null,null);e.a=l.exports},function(t,e){},,function(t,e,a){"use strict";function s(t){a(15)}var i=a(4),n=a(16),r=a(0),c=s,l=r(i.a,n.a,!1,c,null,null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-center"},[t._l(t.menus,function(e,s){return[a("v-btn",{key:s,staticClass:"transparent mr-5",staticStyle:{width:"84px",flex:"0 !important"},attrs:{depressed:"",large:"","exact-active-class":"accent",to:e.append}},[t._v("\n            "+t._s(e.text)+"\n        ")])]})],2)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";function s(t){a(18)}var i=a(5),n=a(19),r=a(0),c=s,l=r(i.a,n.a,!1,c,null,null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticClass:"elevation-0 pa-0 outlined",attrs:{dense:""}},[a("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.empty,label:"品牌牌子",color:"accent","hide-details":"",overflow:""}}),t._v(" "),a("v-divider",{attrs:{vertical:""}}),t._v(" "),a("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.empty,label:"全部分类",color:"accent","hide-details":"",overflow:""}}),t._v(" "),a("v-divider",{attrs:{vertical:""}}),t._v(" "),a("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.dropdown_age,label:"宝贝年龄",color:"accent","no-filter":"","hide-details":"",overflow:""}}),t._v(" "),a("v-divider",{attrs:{vertical:""}}),t._v(" "),a("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.empty,label:"产品材料",color:"accent","hide-details":"",overflow:""}}),t._v(" "),a("v-divider",{attrs:{vertical:""}}),t._v(" "),a("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.empty,label:"新品发布",color:"accent","hide-details":"",overflow:""}}),t._v(" "),a("v-divider",{attrs:{vertical:""}}),t._v(" "),a("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.empty,label:"热卖产品",color:"accent","hide-details":"",overflow:""}}),t._v(" "),a("v-divider",{attrs:{vertical:""}}),t._v(" "),a("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.empty,label:"排序",color:"accent","hide-details":"",overflow:""}})],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";function s(t){a(21)}var i=a(6),n=a(22),r=a(0),c=s,l=r(i.a,n.a,!1,c,null,null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"mb-2",attrs:{layout:"","align-center":"","justify-center":"",row:""}},[a("v-slide-x-transition",[t.showHelp?a("div",[t._l(t.helps,function(e,s){return[a("v-btn",{key:s,staticClass:"accent mr-5",staticStyle:{flex:"0 !important","border-radius":"12px"},attrs:{outline:"",large:""}},[t._v("\n                    "+t._s(e.text)+"\n                ")])]})],2):a("v-btn",{staticStyle:{"border-width":"2px","z-index":"3"},attrs:{color:"accent",fab:"",outline:"",dark:"",small:""},on:{click:function(e){t.showHelp=!t.showHelp}}},[a("div",{staticClass:"black--text headline"},[t._v("?")])])],1)],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";function s(t){a(24)}var i=a(25),n=a(0),r=s,c=n(null,i.a,!1,r,"data-v-0b429ce3",null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"pa-3",staticStyle:{"background-color":"#F8F8F8",position:"relative"},attrs:{height:"64",app:""}},[a("div",{staticClass:"d-flex"},[a("v-icon",[t._v("home")]),t._v(" "),a("div",{staticClass:"ml-2"},[a("div",{staticClass:"caption grey--text"},[t._v("©RoyalPanda / 泸ICP备17033585号-1")]),t._v(" "),a("div",{staticClass:"caption grey--text"},[t._v("地址: 中国上海市黄浦区广东路500号世界贸易大厦5楼")])])],1),t._v(" "),a("v-flex"),t._v(" "),a("div",{staticClass:"d-flex"},[a("v-icon",{staticClass:"material"},[t._v("lock")]),t._v(" "),a("div",{staticClass:"ml-2"},[a("div",{staticClass:"caption"},[t._v("Line1")]),t._v(" "),a("div",{staticClass:"caption"},[t._v("line2")])])],1),t._v(" "),a("div",{staticClass:"d-flex ml-2"},[a("v-icon",{staticClass:"material"},[t._v("lock")]),t._v(" "),a("div",{staticClass:"ml-2"},[a("div",{staticClass:"caption"},[t._v("Line1")]),t._v(" "),a("div",{staticClass:"caption"},[t._v("line2")])])],1),t._v(" "),a("div",{staticClass:"d-flex ml-2"},[a("v-icon",{staticClass:"material"},[t._v("lock")]),t._v(" "),a("div",{staticClass:"ml-2"},[a("div",{staticClass:"caption"},[t._v("Line1")]),t._v(" "),a("div",{staticClass:"caption"},[t._v("line2")])])],1),t._v(" "),a("div",{staticClass:"d-flex ml-2"},[a("v-icon",{staticClass:"material"},[t._v("lock")]),t._v(" "),a("div",{staticClass:"ml-2"},[a("div",{staticClass:"caption"},[t._v("Line1")]),t._v(" "),a("div",{staticClass:"caption"},[t._v("line2")])])],1)],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{"background-color":"#FCF1EF"}},[a("figure",{staticClass:"swing",staticStyle:{position:"fixed",top:"-0.2rem",right:"2rem","z-index":"4",height:"120px",width:"120px"}},[a("v-img",{attrs:{height:"120",src:"../static/img/layout/suo.png","aspect-ratio":"1",contain:""},on:{click:function(e){t.showMenu=!t.showMenu}}})],1),t._v(" "),a("v-card",{staticClass:"pt-5",class:t.showMenu?"elevation-3":"elevation-0",staticStyle:{transition:".25s linear 0s"},style:t.styleObject},[a("v-layout",{attrs:{layout:"","align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{staticClass:"d-flex justify-center",attrs:{xs12:""}},[a("v-img",{attrs:{height:"90",src:"../static/img/layout/royal-panda.png","aspect-ratio":"2.75",contain:""}})],1),t._v(" "),a("v-flex",{staticStyle:{height:"64px"},attrs:{xs12:""}},[a("v-slide-y-transition",{attrs:{mode:"out-in"}},[t.showMenu?a("tab-menu"):a("div",{staticClass:"d-flex justify-center"},[a("v-img",{attrs:{height:"30","max-width":"30",src:"../static/img/layout/panda.png",contain:""}})],1)],1)],1)],1)],1),t._v(" "),a("v-container",[a("p-filter"),t._v(" "),a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-card-title",[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"item",fn:function(e){return[a("a",{class:e.item.disabled?"accent--text":"grey--text text--darken-1",attrs:{href:e.item.href}},[t._v(t._s(e.item.text.toUpperCase()))])]}}])}),t._v(" "),a("v-flex"),t._v(" "),a("div",{staticClass:"grey--text text--darken-1"},[t._v("共 "),a("strong",[t._v(t._s(t.products.length||0))]),t._v(" 产品显示")])],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-container",{staticClass:"pt-0",staticStyle:{position:"relative"},attrs:{"grid-list-lg":"",fluid:""}},[a("v-btn",{staticStyle:{"border-width":"3px",position:"absolute",top:"12.2rem",left:"-2rem","z-index":"4"},attrs:{color:"accent",fab:"",small:"",outline:"",dark:""},on:{click:t.swipeLeft}},[a("v-icon",{staticClass:"black--text",attrs:{large:""}},[t._v("navigate_before")])],1),t._v(" "),a("v-btn",{staticStyle:{"border-width":"3px",position:"absolute",top:"12.2rem",right:"-2rem","z-index":"4"},attrs:{color:"accent",fab:"",small:"",outline:"",dark:""},on:{click:t.swipeRight}},[a("v-icon",{staticClass:"black--text",attrs:{large:""}},[t._v("navigate_next")])],1),t._v(" "),a("v-layout",{ref:"content",staticClass:"mb-3 pa-3",staticStyle:{overflow:"hidden"},attrs:{row:""}},t._l(t.products,function(e){return a("v-flex",{key:e.id,staticStyle:{"flex-shrink":"0"},attrs:{xs6:"",md4:"",lg3:"",xl2:"","d-flex":""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var i=s.hover;return a("v-card",{staticClass:"transparent",staticStyle:{"border-radius":"12px"},attrs:{height:420,flat:""}},[a("v-scale-transition",{attrs:{mode:"out-in"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:i,expression:"hover"}],staticClass:"transition-slow-in-fast-out white v-card--reveal elevation-12",staticStyle:{height:"100%",position:"relative",top:"0","z-index":"0","border-radius":"12px"}})]),t._v(" "),a("v-card-text",{staticStyle:{position:"absolute",top:"0",left:"0"}},[a("v-card",{staticClass:"d-flex pa-3 transition-slow-in-slow-out",class:i?"elevation-0":"outlined",staticStyle:{"justify-content":"center","align-items":"center"}},[a("v-img",{staticClass:"white",attrs:{src:e.src,height:"240",contain:"","aspect-ratio":"16/9"}},[a("v-slide-y-transition",{attrs:{mode:"out-in"}},[i?a("v-card-text",{staticClass:"transition-slow-in-fast-out pa-0",staticStyle:{height:"220px",display:"flex","align-items":"center"}},[a("div",{staticStyle:{flex:"1"}},[a("v-btn",{staticClass:"grey--text text--darken-1",attrs:{depressed:"",block:"",light:"",color:"accent lighten-1"}},[t._v("加入购物车")]),t._v(" "),a("v-btn",{staticClass:"mt-3",staticStyle:{"background-color":"#fff !important"},attrs:{outline:"",block:"",light:"",color:"accent lighten-1"}},[a("label",{staticClass:"grey--text text--darken-1"},[t._v("立刻购买")])])],1)]):t._e()],1)],1)],1),t._v(" "),a("v-card",{staticClass:"transparent px-0",attrs:{flat:""}},[a("v-card-text",{staticClass:"px-0"},[a("div",{staticStyle:{height:"22px"}},[a("v-slide-x-transition",{attrs:{mode:"out-in"}},[a("v-rating",{directives:[{name:"show",rawName:"v-show",value:i,expression:"hover"}],attrs:{"background-color":"grey",color:"accent",dense:"",size:"14"},model:{value:e.rating,callback:function(a){t.$set(e,"rating",a)},expression:"p.rating"}})],1)],1),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"subheading"},[t._v(t._s(e.description))]),t._v(" "),a("div",{staticClass:"accent--text"},[t._v(t._s(e.price))])])],1)],1)],1)}}])})],1)})),t._v(" "),a("help")],1)],1),t._v(" "),a("p-footer")],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";var s=a(1),i=a(28);s.default.use(i.a),e.a=new i.a({routes:[]})},,,function(t,e){},function(t,e){}],[7]);
//# sourceMappingURL=app.2fba45bf26631b338aa2.js.map