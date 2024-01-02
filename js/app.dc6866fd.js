(function(){"use strict";var e={5160:function(e,t,i){var o=i(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"dimensions"},[t("SelectArrow",{attrs:{options:e.options,selectedOption:e.selectedOption,updateSelectedOption:e.updateSelectedOption}})],1),t("TableComponent",{attrs:{titles:e.titles,tables:e.tables}})],1)},s=[],l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-box"},[t("div",[null!==e.selectedOption?t("p",{staticClass:"off_placeholder"},[e._v("Выберите животное")]):e._e()]),t("div",{staticClass:"custom-select-base",class:{["custom-select-open"]:e.isDropdownVisible,["custom-select-close"]:!e.isDropdownVisible},on:{click:e.toggleDropdown}},[t("div",{staticClass:"selected-value",class:{["text-color"]:null!==e.selectedOption}},[e._v(" "+e._s(e.selectedOption?e.selectedOption.title:e.placeholder)+" ")]),t("div",{class:{rotated:e.isDropdownVisible}},[t("svg",{staticClass:"arrow-color-base",class:{["arrow-color"]:e.isDropdownVisible},attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M3 6L8 11L13 6","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t("div",{class:{["box-list"]:e.isDropdownVisible}},[e.isDropdownVisible?t("ul",{staticClass:"options-list"},e._l(e.options,(function(i){return t("li",{key:i.id,staticClass:"text-color",on:{click:function(t){return e.selectOption(i)}}},[e._v(" "+e._s(i.title)+" ")])})),0):e._e()])])},n=[],a={props:{options:{type:Array,required:!0},selectedOption:{type:Object,default:null},placeholder:{type:String,default:"Выберите животное"},updateSelectedOption:{type:Function,required:!0}},data(){return{isDropdownVisible:!1}},methods:{toggleDropdown(){this.isDropdownVisible=!this.isDropdownVisible},selectOption(e){this.updateSelectedOption(e),this.isDropdownVisible=!1}}},d=a,c=i(1001),u=(0,c.Z)(d,l,n,!1,null,"1c90bea2",null),p=u.exports,f=function(){var e=this,t=e._self._c;return t("div",[t("table",{staticClass:"main_table",attrs:{border:"2px",cellspacing:"1px"}},[t("thead",[t("tr",{staticClass:"table_scroll"},e._l(e.titles,(function(i){return t("th",{key:i.id,staticClass:"head-table",on:{click:function(t){return e.sortFunc(i,i.key)}}},[e._v(" "+e._s(i.title)+" "),t("svg",{staticClass:"svg-arrow",class:{["svg-arrow--color"]:i.dynamicSvg},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",viewBox:"0 0 6 5",fill:"none"}},[t("path",{attrs:{opacity:"0.3",d:"M3.43301 4.25L5.16506 1.25C5.35751 0.916667 5.11695 0.5 4.73205 0.5H1.26795C0.883049 0.5 0.642486 0.916666 0.834936 1.25L2.56699 4.25C2.75944 4.58333 3.24056 4.58333 3.43301 4.25Z","stroke-linejoin":"round"}})])])})),0)]),t("tbody",e._l(e.tablesData,(function(i){return t("tr",{key:i.id},[t("td",{staticClass:"table_elem"},[e._v(e._s(i.number))]),t("td",{staticClass:"table_elem"},[e._v(e._s(i.developer))]),t("td",{staticClass:"table_elem"},[e._v(e._s(e.changeData(i.deadline)))]),t("td",{staticClass:"table_elem"},[e._v(e._s(i.type))]),t("td",{staticClass:"table_elem"},[e._v(e._s(i.floor))]),t("td",{staticClass:"table_elem"},[e._v(e._s(i.square))])])})),0)])])},v=[],b={props:{tables:{type:Array,required:!0},titles:{type:Array,required:!0}},data(){return{tablesData:null,dynamicSort:1,dynamicSvg:{}}},mounted(){this.tablesData=this.tables},methods:{sortFunc(e,t){this.onSvg(t),this.dynamicSort*=-1,"number"!==t&&"floor"!==t&&"square"!==t&&"deadline"!==t||(this.tablesData=this.tablesData.sort(((e,i)=>this.dynamicSort*(parseFloat(e[t])-parseFloat(i[t]))))),"developer"!==t&&"type"!==t||(this.tablesData=this.tablesData.sort(((e,i)=>{const o=e[t].localeCompare(i[t]);return this.dynamicSort*o})))},changeData(e){const t=new Date(e);return t.toISOString()},onSvg(e){this.titles.forEach((t=>{t.dynamicSvg=!1,t.key===e&&(t.dynamicSvg=!0)}))}}},h=b,y=(0,c.Z)(h,f,v,!1,null,"72fda74e",null),m=y.exports,w={data(){return{options:[{id:1,title:"Слон"},{id:2,title:"Бегемот"},{id:3,title:"Зебра"},{id:4,title:"Жираф"},{id:5,title:"Лев"}],selectedOption:null,titles:[{id:1,title:"Номер",key:"number"},{id:2,title:"Девелопер",key:"developer"},{id:3,title:"Срок",key:"deadline"},{id:4,title:"Тип",key:"type"},{id:5,title:"Этаж",key:"floor"},{id:6,title:"Площадь",key:"square"}],tables:[{id:1,number:421,developer:"PRINZIP",deadline:"2005-08-09T18:31:42",type:"Студия",floor:2,square:100.3},{id:2,number:73,developer:"Брусника",deadline:"2005-08-09T18:31:42",type:"2-к",floor:2,square:10.3},{id:3,number:122,developer:"TEN",deadline:"2005-08-09T18:31:42",type:"3-к",floor:2,square:103},{id:4,number:1,developer:"PRINZIP",deadline:"2023-08-09T18:31:42",type:"Студия",floor:2,square:100.3},{id:5,number:72,developer:"Брусника",deadline:"2005-08-09T18:31:42",type:"2-к",floor:2,square:10.3},{id:6,number:23,developer:"TEN",deadline:"2005-08-09T18:31:42",type:"3-к",floor:2,square:103},{id:7,number:5,developer:"PRINZIP",deadline:"2005-08-09T18:31:42",type:"Студия",floor:2,square:100.3},{id:8,number:2,developer:"Брусника",deadline:"2005-08-09T18:31:42",type:"2-к",floor:2,square:10.3},{id:9,number:97,developer:"TEN",deadline:"2005-08-09T18:31:42",type:"3-к",floor:2,square:103},{id:10,number:34,developer:"PRINZIP",deadline:"2005-08-09T18:31:42",type:"Студия",floor:2,square:100.3},{id:11,number:1,developer:"Брусника",deadline:"2005-08-09T18:31:42",type:"2-к",floor:2,square:10.3},{id:12,number:88,developer:"TEN",deadline:"2005-08-09T18:31:42",type:"3-к",floor:2,square:103}]}},components:{TableComponent:m,SelectArrow:p},mounted(){const e="dynamicSvg",t=!1;this.titles=this.titles.map((i=>({...i,[e]:t})))},methods:{updateSelectedOption(e){this.selectedOption=e}}},_=w,g=(0,c.Z)(_,r,s,!1,null,"545ae350",null),O=g.exports;o.ZP.config.productionTip=!1,new o.ZP({render:e=>e(O)}).$mount("#app")}},t={};function i(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,o,r,s){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],s=e[c][2];for(var n=!0,a=0;a<o.length;a++)(!1&s||l>=s)&&Object.keys(i.O).every((function(e){return i.O[e](o[a])}))?o.splice(a--,1):(n=!1,s<l&&(l=s));if(n){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,r,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,l=o[0],n=o[1],a=o[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(r in n)i.o(n,r)&&(i.m[r]=n[r]);if(a)var c=a(i)}for(t&&t(o);d<l.length;d++)s=l[d],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(c)},o=self["webpackChunklens"]=self["webpackChunklens"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(5160)}));o=i.O(o)})();
//# sourceMappingURL=app.dc6866fd.js.map