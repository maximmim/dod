(()=>{"use strict";var e={5269:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var o,r,a,i=n(9526),f=n(5861),u=n(885),l=n(8615),c=(n(7765),n(1880)),s=n(7370),d=n(4333),p=d.default.create({input:{top:200,backgroundColor:"#fff",borderWidth:1,borderColor:"#ccc",borderRadius:5,padding:10,margin:10,fontSize:16},button:{top:250,backgroundColor:"#fff",borderWidth:1,borderColor:"#ccc",borderRadius:5,fontSize:26,left:130,width:150,height:35},buttonn:{top:370,backgroundColor:"#fff",borderWidth:1,borderColor:"#ccc",borderRadius:5,fontSize:26,left:130,width:150,height:35},button_text:{textAlign:"center",fontSize:26},container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},button_home:{position:"absolute",alignItems:"center",justifyContent:"center",top:310,width:120,height:99,flex:1,left:75},fa:{bottom:0},tect:{fontSize:20,alignItems:"center",justifyContent:"center"},button_end:{position:"absolute",alignItems:"center",justifyContent:"center",top:310,width:120,height:99,flex:1,left:140},button_add:{position:"absolute",alignItems:"center",justifyContent:"center",top:310,width:120,height:99,flex:1,left:10},post:{position:"absolute",top:37,left:4,width:408,height:100,borderRadius:9,borderWidth:2,borderColor:"rgb(0, 0, 0)",backgroundColor:"rgb(229, 229, 229)",backgroundSize:"320px 347px"},post_text:{position:"absolute",top:30,left:100,height:100,width:310,fontSize:20,maxWidth:"100%"},tes:{fontSize:26,top:100,left:100}}),h=n(2727),x=n(1133),b=n(1451),g=n(7557);function m(e){var t=e.text,n=e.top,i=(e.data,(0,h.useNavigation)());var f=s.default.View(o||(o=(0,c.default)(["\n    \n\n    max-height: 150px;\n\n    left: 4px;\n    width: 408px;\n    height:100px;\n    border-radius: 9px;\n    border:\n    2px       /* width */\n    solid     /* style */\n    rgb(0, 0, 0);  /* color */\n    background: rgb(229, 229, 229);\n    background-size: 320px 347px;\n    \n"]))),u=s.default.Text(r||(r=(0,c.default)(["\n    top:30px\n    left: 100px;\n    height:100px;\n    width:310px\n    fontSize:20px;\n    max-width: 100%\n    \n"])));s.default.Text(a||(a=(0,c.default)(["\n    top:30px\n    left: 30px;\n    height:100px;\n    width:310px\n    fontSize:20px;\n    max-width: 100%\n\n"])));return(0,g.jsx)(x.default,{children:(0,g.jsx)(b.default,{onPress:function(e){i.navigate("Dext",{text:t})},children:(0,g.jsx)(f,{style:n,children:(0,g.jsx)(u,{children:t})})})})}var v=n(8859),y=n(9899),j=n(9566),S=n(8252);function w(e){var t=e.navigation,o=(0,i.useState)(""),r=(0,u.default)(o,2),a=(r[0],r[1],(0,i.useState)([])),c=(0,u.default)(a,2),s=c[0],d=c[1],h=(0,i.useState)([]),w=(0,u.default)(h,2),_=w[0],k=w[1],C=(0,i.useState)(!0),O=(0,u.default)(C,2),P=(O[0],O[1]),E=(0,i.useState)(!1),z=(0,u.default)(E,2),I=z[0];z[1];(0,i.useEffect)(R,[]);function T(){return(T=(0,f.default)((function*(){try{var e=(yield l.default.get("https://63ff8f4f63e89b09139eef52.mockapi.io/item")).data;yield Promise.all(e.map((function(e){return l.default.delete("https://63ff8f4f63e89b09139eef52.mockapi.io/item/"+e.id)}))),console.log("All items deleted successfully!")}catch(t){console.error(t)}}))).apply(this,arguments)}function R(){P(!0),l.default.get("https://63ff8f4f63e89b09139eef52.mockapi.io/item").then((function(e){d(e.data)})).catch((function(e){v.default.alert("Eror 404","Please a reconnect to server"),console.error(e)})).finally((function(){P(!1)})),l.default.get("https://63ff8f4f63e89b09139eef52.mockapi.io/Eror").then((function(e){k(e.data)})).catch((function(e){v.default.alert("Eror 404","Please a reconnect to server"),console.error(e)}))}return setInterval((function(){_.map((function(e){"1"==e.Eror&&t.navigate("Eror")}))}),1),(0,g.jsxs)(x.default,{children:[(0,g.jsx)(j.default,{refreshControl:(0,g.jsx)(S.default,{refreshing:I,onRefresh:R}),data:s,renderItem:function(e){var t=e.item;return(0,g.jsx)(m,{text:t.text})}}),(0,g.jsx)(b.default,{style:p.button_home,onPress:R,children:(0,g.jsx)(y.default,{style:p.button_home,source:n(9367)})}),(0,g.jsx)(b.default,{style:p.button_add,onPress:function(){t.navigate("\u0417\u0430\u043f\u043e\u0441\u0442\u0438\u0442\u0438")},children:(0,g.jsx)(y.default,{style:p.button_add,source:n(8158)})}),(0,g.jsx)(b.default,{style:p.button_end,onPress:function(){return T.apply(this,arguments)},children:(0,g.jsx)(y.default,{style:p.button_end,source:n(657)})})]})}var _=n(9233),k=n(3497),C=n(5519),O=function(){var e=(0,f.default)((function*(e,t){try{yield C.default.setItem(e,t)}catch(n){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",n)}}));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=(0,f.default)((function*(e){try{var t=yield C.default.getItem(e);if(null!==t)return t}catch(n){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",n)}}));return function(t){return e.apply(this,arguments)}}();(function(){var e=(0,f.default)((function*(e){try{yield C.default.removeItem(e)}catch(t){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",t)}}))})(),function(){var e=(0,f.default)((function*(){try{yield C.default.clear()}catch(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0447\u0438\u0449\u0435\u043d\u043d\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0445\u043e\u0432\u0438\u0449\u0430:",e)}}))}();function E(e){var t=e.navigation,n=(0,i.useState)(""),o=(0,u.default)(n,2),r=o[0],a=o[1],c=(0,i.useState)([]),s=(0,u.default)(c,2),d=s[0],h=s[1];function m(){return(m=(0,f.default)((function*(){l.default.get("https://63ff8f4f63e89b09139eef52.mockapi.io/Eror").then((function(e){h(e.data)})).catch((function(e){v.default.alert("Eror 404","Please a reconnect to server"),console.error(e)})),d.map((function(e){P("name").then((function(n){e.nameacaunt==n?t.navigate("\u0413\u043e\u043b\u043e\u0432\u043d\u0430"):(O("name",r),l.default.post("https://63ff8f4f63e89b09139eef52.mockapi.io/Eror",{nameacaunt:r}).then((function(e){console.log(e.data)})).catch((function(e){v.default.alert("Eror 404","Please resubmit to the server"),console.error(e)})))}))}))}))).apply(this,arguments)}return(0,i.useEffect)((function(){l.default.get("https://63ff8f4f63e89b09139eef52.mockapi.io/Eror").then((function(e){h(e.data)})).catch((function(e){v.default.alert("Eror 404","Please a reconnect to server"),console.error(e)})),d.map((function(e){P("name").then((function(n){e.nameacaunt==n&&t.navigate("\u0413\u043e\u043b\u043e\u0432\u043d\u0430")}))}))}),[]),(0,g.jsxs)(x.default,{children:[(0,g.jsx)(b.default,{style:p.buttonn,onPress:function(){return m.apply(this,arguments)},children:(0,g.jsx)(_.default,{style:p.button_text,children:"Submit"})}),(0,g.jsx)(_.default,{style:p.tes,children:"\u0412\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448\u0435 \u0456\u043c`\u044f"}),(0,g.jsx)(k.default,{style:p.input,value:r,onChangeText:function(e){return a(e)}})]})}function z(e){e.navigation;var t=(0,i.useState)(""),n=(0,u.default)(t,2),o=n[0],r=n[1];return(0,g.jsxs)(x.default,{children:[(0,g.jsx)(k.default,{style:p.input,value:o,onChangeText:function(e){return r(e)}}),(0,g.jsx)(b.default,{style:p.button,onPress:function(){new Date,l.default.post("https://63ff8f4f63e89b09139eef52.mockapi.io/item",{text:o}).then((function(e){console.log(e.data)})).catch((function(e){v.default.alert("Eror 404","Please resubmit to the server"),console.error(e)}))},children:(0,g.jsx)(_.default,{style:p.button_text,children:"\u0417\u0430\u043f\u043e\u0441\u0442\u0438\u0442\u0438"})})]})}function I(e){e.navigation;return(0,g.jsxs)(x.default,{style:T.container,children:[(0,g.jsx)(y.default,{source:n(5962)}),(0,g.jsx)(_.default,{children:"\u0422\u0435\u0445\u043d\u0456\u0447\u043d\u0456 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438\ud83d\ude11"})]})}var T=d.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}});function R(){var e=(0,h.useRoute)().params.text;return(0,g.jsx)(x.default,{children:(0,g.jsx)(_.default,{style:p.tect,children:e})})}var W=n(3535),D=(0,n(1233).default)();function M(){return(0,g.jsx)(W.default,{children:(0,g.jsxs)(D.Navigator,{children:[(0,g.jsx)(D.Screen,{name:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430",component:w,optsions:{title:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"}}),(0,g.jsx)(D.Screen,{name:"Login",component:E,optsions:{title:"Login"}}),(0,g.jsx)(D.Screen,{name:"Dext",component:R,optsions:{title:"Dext"}}),(0,g.jsx)(D.Screen,{name:"main",component:m,optsions:{title:"main"}}),(0,g.jsx)(D.Screen,{name:"Eror",component:I,optsions:{title:"Eror"}}),(0,g.jsx)(D.Screen,{name:"\u0417\u0430\u043f\u043e\u0441\u0442\u0438\u0442\u0438",component:z,optsions:{title:"\u0417\u0430\u043f\u043e\u0441\u0442\u0438\u0442\u0438"}})]})})}function N(){return(0,g.jsx)(M,{})}},5962:(e,t,n)=>{e.exports=n.p+"static/media/Eror.0ff1be60aa39e0591552.png"},8158:(e,t,n)=>{e.exports=n.p+"static/media/add.0e3a237e968f4b2515df.png"},657:(e,t,n)=>{e.exports=n.p+"static/media/end.2055007893e57f2472a7.png"},9367:(e,t,n)=>{e.exports=n.p+"static/media/refresh.e7a97d65e9bd028ba0db.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,o,r,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,r,a]=e[c],f=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](o[u])))?o.splice(u--,1):(f=!1,a<i&&(i=a));if(f){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var f=2&r&&o;"object"==typeof f&&!~e.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,n.d(a,i),a}})(),n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[i,f,u]=o,l=0;if(i.some((t=>0!==e[t]))){for(r in f)n.o(f,r)&&(n.m[r]=f[r]);if(u)var c=u(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),n.nc=void 0;var o=n.O(void 0,[164],(()=>n(9386)));o=n.O(o)})();
//# sourceMappingURL=main.05e199d4.js.map