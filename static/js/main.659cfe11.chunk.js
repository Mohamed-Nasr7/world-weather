(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),o=t.n(r),i=t(1);t(9);var l=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),l=Object(i.a)(o,2),s=l[0],m=l[1],p="02fb28458ed00ab88f68b06695b72173",u="https://api.openweathermap.org/data/2.5/",h=function(e){return Math.round(e-273.15)};return c.a.createElement("div",{className:void 0==s.main?"app":h(s.main.temp)>20?"app warm":"app cold"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search City...",value:t,onChange:function(e){return r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"/weather?q=").concat(t,"&appid=").concat(p)).then((function(e){return e.json()})).then((function(e){m(e),r("")}))}})),void 0==s.main?"":c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},s.name," , ",s.sys.country),c.a.createElement("div",{className:"date"},String(new Date).slice(0,16))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},h(s.main.temp),"\xb0C"),c.a.createElement("div",null," ",c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(s.weather[0].icon,"@2x.png")})," "),c.a.createElement("div",{className:"weather"}," ",s.weather[0].main," ")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.659cfe11.chunk.js.map