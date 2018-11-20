webpackJsonp([0],{0:function(t,e){},"0Qxz":function(t,e,i){"use strict";var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Traffic Flow")])])}]};e.a=n},"0SaT":function(t,e){},"0iG2":function(t,e){},"2LV3":function(t,e,i){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tooltipPositioner"}},[e("div",{attrs:{id:"tooltip"}},[e("div",{attrs:{id:"tooltipContainer"}},[e("div",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"description"},[this._v(this._s(this.description))])])])])},staticRenderFns:[]};e.a=n},"6V+T":function(t,e){},"9Tiu":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("HQkt"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var s=i("mcGV");var c=function(t){i("oKBW")},o=i("VU/8")(r.a,s.a,!1,c,"data-v-1d070638",null);e.default=o.exports},"BZC/":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("GDE4"),r=i.n(n),a=i("vwbq"),s={components:{NewyorkMap:i("pTYm").default,Tooltip:i("mw4c").default,vueSlider:r.a},name:"criminal-map",data:function(){return{title:"Criminal Map",precinctData:void 0,currPrecinct:void 0,currYear:2007,maxNbCriminal:0,value:"2007"}},created:function(){var t=this;t.precinctData={2007:{},2008:{},2009:{},2010:{},2011:{},2012:{},2013:{},2014:{}},a.csv("static/data/clean-summons-data.csv",function(e){0===t.maxNbCriminal&&(t.maxNbCriminal=parseInt(e.Max)),t.precinctData[2007][e.Precinct]=+e[2007],t.precinctData[2008][e.Precinct]=+e[2008],t.precinctData[2009][e.Precinct]=+e[2009],t.precinctData[2010][e.Precinct]=+e[2010],t.precinctData[2011][e.Precinct]=+e[2011],t.precinctData[2012][e.Precinct]=+e[2012],t.precinctData[2013][e.Precinct]=+e[2013],t.precinctData[2014][e.Precinct]=+e[2014]})},computed:{currentPrecinctTitle:function(){return"Precinct: "+this.currPrecinct},currentPrecinctDescription:function(){return"Number of Crime: "+this.precinctData[this.currYear][this.currPrecinct]}},watch:{value:function(){var t=this;t.currYear=+t.value;var e=a.scaleQuantize().domain([0,t.maxNbCriminal]).range(a.range(9).map(function(t){return"q"+t}));a.select("svg").selectAll(".precinct").each(function(){var i=a.select(this),n=i.attr("class").split(" ")[0],r=n.substring(2,n.length);console.log(e),i.attr("class",e(t.precinctData[r])),console.log("--------"),console.log(r),console.log(i)})}},methods:{onPrecinctSelected:function(t){this.currPrecinct=t},onPrecinctDeselected:function(t){this.currPrecinct=void 0}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"criminalMap"},[i("h1",[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"mapHolder"},[i("NewyorkMap",{on:{precinctSelected:t.onPrecinctSelected,precinctDeselected:t.onPrecinctDeselected}})],1),t._v(" "),i("div",{staticClass:"tooltipHolder"},[t.currPrecinct?i("Tooltip",{attrs:{title:t.currentPrecinctTitle,description:t.currentPrecinctDescription}}):t._e()],1),t._v(" "),i("div",{staticClass:"sliderHolder"},[i("vue-slider",{attrs:{width:"50%",tooltip:"always",disable:!1,piecewise:!0,piecewiseLabel:!0,data:["2007","2008","2009","2010","2011","2012","2013","2014"]},scopedSlots:t._u([{key:"tooltip",fn:function(e){var n=e.value;return i("div",{staticClass:"diy-tooltip"},[t._v("\n        "+t._s(n)+"\n      ")])}}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])},staticRenderFns:[]};var o=i("VU/8")(s,c,!1,function(t){i("PCR9")},null,null);e.default=o.exports},HQkt:function(t,e){t.exports={name:"tooltip",props:["title","description"]}},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},r,!1,function(t){i("gsu9")},null,null).exports,s=i("/ocq"),c={components:{CriminalMap:i("BZC/").default,TrafficeFlow:i("kvyA").default,TwitterSentiment:i("wWin").default},name:"index-page",data:function(){return{msg:"Index Page"}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("br"),t._v(" "),i("CriminalMap"),t._v(" "),i("br"),t._v(" "),i("TrafficeFlow"),t._v("\n  @TODO\n  "),i("br"),t._v(" "),i("TwitterSentiment"),t._v("\n  @TODO\n")],1)},staticRenderFns:[]};var l=i("VU/8")(c,o,!1,function(t){i("mrio")},"data-v-53ac4527",null).exports,u=i("BYg8"),d={components:{usMap:i("p/6n").default,tooltip:i("9Tiu").default},created:function(){var t=this;this.$http.get("static/demo_data/us-state/states-data.csv").then(function(e){this.statesData={},u.e(";").parse(e.data,function(e){var i=e["2017 Population"].split(",").join("");return e.value=+i,t.statesData[e.STATE_ABBR]=e,delete e["2017 Population"],delete e.STATE_ABBR,e})})},data:function(){return{statesData:void 0,currentState:void 0}},computed:{currentStateDescription:function(){return"Population: "+this.currentState.value}},methods:{onStateSelected:function(t){this.currentState=this.statesData[t]},onStateDeselected:function(t){this.currentState=void 0}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"holder"}},[i("h1",[t._v("Demo Example")]),t._v(" "),i("div",{staticClass:"mapHolder"},[i("usMap",{on:{stateSelected:t.onStateSelected,stateDeselected:t.onStateDeselected}})],1),t._v(" "),t.currentState?i("tooltip",{attrs:{title:t.currentState.Name,description:t.currentStateDescription}}):t._e()],1)},staticRenderFns:[]};var p=i("VU/8")(d,h,!1,function(t){i("NYAm")},"data-v-a030cf22",null).exports;n.a.use(s.a);var f=new s.a({routes:[{path:"/",name:"home Page",component:l},{path:"/index",name:"Index Page",component:l},{path:"/demo/us-state",name:"Us Map Demo",component:p}]}),v=i("vwbq"),m={install:function(t){t.prototype.$helpers={chart:{d3:{},ds:{},barChart:function(t,e,i){var n=this,r=i.metric,a=this.init(t,e,i.selector),s=i.title?20:0,c=a.selectAll("rect").data(this.ds),o=Math.max.apply(Math,this.ds.map(function(t){return t[i.metric]})),l=this.d3.scaleLinear().domain([0,o]).range([i.height,0]),u=this.d3.axisLeft().scale(l),d=this.initOrdinalScale(i.dim,i.width),h=this.d3.axisBottom().scale(d);a.selectAll("g").remove(),i.title&&this.addTitle(i.title,a,i.width),c.enter().append("rect").merge(c).attr("class","bar").attr("width",function(t,e){return i.width/n.ds.length-1}).attr("height",function(t){return i.height-l(t[i.metric])}).attr("x",function(t,e){return e*(i.width/n.ds.length)+60}).attr("y",function(t){return l(t[i.metric])}).on("mouseover",function(t){n.addTooltip(t,a,n.d3.mouse(n.d3.event.currentTarget)[0],n.d3.mouse(n.d3.event.currentTarget)[1],r)}).on("mouseout",function(t){n.removeTooltip(a)}).attr("transform","translate(0,"+s+")"),this.drawAxis(i.height,a,h,u,s),c.exit().remove()},lineChart:function(t,e,i){i.metric;var n=this.init(t,e,i.selector),r=i.title?20:0,a=Math.max.apply(Math,this.ds.map(function(t){return t[i.metric]})),s=Math.min.apply(Math,this.ds.map(function(t){return t[i.metric]})),c=this.d3.scaleLinear().domain([s,a]).range([i.height,0]),o=this.d3.axisLeft().scale(c),l=this.initOrdinalScale(i.dim,i.width),u=this.d3.axisBottom().scale(l),d=this.d3.line().x(function(t,e){return l(t[i.dim])+60}).y(function(t){return c(t[i.metric])});n.selectAll("path").remove(),n.selectAll("g").remove(),i.title&&this.addTitle(i.title,n,i.width),n.append("path").datum(this.ds).attr("fill","none").attr("stroke","#ffab00").attr("stroke-width",3).attr("d",d).attr("transform","translate(0,"+r+")"),this.drawAxis(i.height,n,u,o,r),n.exit().remove()},pieChart:function(t,e,i){var n=this,r=i.metric,a=this.init(t,e,i.selector),s=i.height>i.width?(i.width-.1*i.width)/2:(i.height-.1*i.height)/2,c=i.title?20:0,o=this.d3.pie().sort(null).value(function(t){return t[i.metric]}),l=this.d3.arc().outerRadius(s-10).innerRadius(25),u=a.selectAll(".arc").data(o(e)),d=t.scaleOrdinal().range(["#4D4D4D","#5DA5DA","#FAA43A","#60BD68","#F17CB0","#B2912F","#B276B2","#DECF3F","#F15854"]);i.title&&this.addTitle(i.title,a,i.width),u.enter().append("g").attr("transform","translate("+i.width/2+","+i.height/2+")").append("path").merge(u).attr("class","arc").attr("d",l).attr("fill",function(t,e){return d(e)}).on("mouseover",function(t){n.addTooltip(t.data,a,i.width,0,r)}).on("mouseout",function(t){n.removeTooltip(a)}).attr("transform","translate(0,"+c+")"),u.exit().remove()},scatterPlot:function(t,e,i){i.metric;var n=this.init(t,e,i.selector),r=i.title?20:0,a=Math.max.apply(Math,this.ds.map(function(t){return t[i.metric]})),s=Math.min.apply(Math,this.ds.map(function(t){return t[i.metric]})),c=Math.max.apply(Math,this.ds.map(function(t){return t[i.metric2]})),o=Math.min.apply(Math,this.ds.map(function(t){return t[i.metric2]})),l=n.selectAll("circle").data(this.ds),u=this.d3.scaleLinear().domain([s,a]).range([i.height,0]),d=this.d3.axisLeft().scale(u),h=this.d3.scaleLinear().domain([o,c]).range([0,i.width]),p=this.d3.axisBottom().scale(h);n.selectAll("g").remove(),i.title&&this.addTitle(i.title,n,i.width),l.enter().append("circle").attr("r","4").attr("class","point").merge(l).attr("cx",function(t,e){return h(t[i.metric2])+60}).attr("cy",function(t){return u(t[i.metric])}).attr("transform","translate(0,"+r+")"),this.drawAxis(i.height,n,p,d,r),n.exit().remove()},init:function(t,e,i){return this.d3=t,this.ds=e,this.d3.select(i)},initOrdinalScale:function(t,e){var i=this,n=[],r=[];return this.ds.forEach(function(e){n.push(e[t])}),this.ds.forEach(function(t,n){r.push(e*n/i.ds.length)}),this.d3.scaleOrdinal().domain(n).range(r)},drawAxis:function(t,e,i,n,r){r=r||0,e.append("g").attr("transform","translate(50,"+r+")").call(n),e.append("g").attr("transform","translate(70,"+(t+r+5)+")").call(i)},addTooltip:function(t,e,i,n,r){e.append("text").attr("x",i).attr("y",n).attr("class","tt").text(t.name+": "+t[r])},removeTooltip:function(t){t.selectAll(".tt").remove()},addTitle:function(t,e,i){e.append("text").attr("x",i/2).attr("text-anchor","middle").attr("y",0).text(t)}}}}},_=i("8+8L");n.a.config.productionTip=!1,n.a.use(m),n.a.use(_.a),Object.defineProperty(n.a.prototype,"$d3",{value:v}),new n.a({el:"#app",router:f,components:{App:a},template:"<App/>"})},NYAm:function(t,e){},PCR9:function(t,e){},aUUd:function(t,e){},goxe:function(t,e){},gsu9:function(t,e){},hI4x:function(t,e,i){"use strict";var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Twitter Sentiment")])])}]};e.a=n},kvyA:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("6V+T"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var s=i("0Qxz");var c=function(t){i("yCKh")},o=i("VU/8")(r.a,s.a,!1,c,null,null);e.default=o.exports},"mS/z":function(t,e){t.exports={name:"tooltip",props:["title","description"]}},mcGV:function(t,e,i){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tooltipPositioner"}},[e("div",{attrs:{id:"tooltip"}},[e("div",{attrs:{id:"tooltipContainer"}},[e("div",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"description"},[this._v(this._s(this.description))])])])])},staticRenderFns:[]};e.a=n},mrio:function(t,e){},mw4c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("mS/z"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var s=i("2LV3");var c=function(t){i("aUUd")},o=i("VU/8")(r.a,s.a,!1,c,"data-v-56ffa680",null);e.default=o.exports},oKBW:function(t,e){},"p/6n":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("vwbq"),r=i("vHc0"),a={mounted:function(){var t=this,e=n.select("svg"),i=(e.attr("width"),e.attr("height"),n.geoAlbersUsa()),a=n.geoPath().projection(i);n.json("static/demo_data/us-state/us.json").then(function(i){var n=e.append("g");n.selectAll(".state").data(r.feature(i,i.objects.usStates).features).enter().append("path").attr("class","state").attr("d",a).on("mouseover",function(e){t.$emit("stateSelected",e.properties.STATE_ABBR)}).on("mouseout",function(e){t.$emit("stateDeselected",e.properties.STATE_ABBR)}),n.attr("transform","scale(0.57)")})}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("svg",{attrs:{width:"500",height:"300"}})},staticRenderFns:[]};var c=i("VU/8")(a,s,!1,function(t){i("0iG2")},null,null);e.default=c.exports},pTYm:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("vwbq"),r=(i("vHc0"),{mounted:function(){var t=this,e=n.select("svg"),i=+e.attr("width"),r=+e.attr("height"),a=n.geoMercator().center([-73.94,40.7]).scale(5e4).translate([i/2,r/2]),s=n.geoPath().projection(a);n.json("static/data/police_precincts.geojson").then(function(i){e.append("g").selectAll(".precinct").data(i.features).enter().append("path").attr("class","precinct").attr("class",function(t){return"nb"+t.properties.Precinct}).attr("d",s).classed("precinct",!0).on("mouseover",function(e){t.$emit("precinctSelected",+e.properties.Precinct)}).on("mouseout",function(e){t.$emit("precinctDeselected",+e.properties.Precinct)})})}}),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"newyork_map"}},[e("h2",[this._v("New York Map")]),this._v(" "),e("svg",{attrs:{width:"800",height:"800"}})])},staticRenderFns:[]};var s=i("VU/8")(r,a,!1,function(t){i("0SaT")},null,null);e.default=s.exports},"u0R/":function(t,e){},wWin:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("u0R/"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var s=i("hI4x");var c=function(t){i("goxe")},o=i("VU/8")(r.a,s.a,!1,c,null,null);e.default=o.exports},yCKh:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.78c74109a76972235f8f.js.map