(this.webpackJsonptodolist2=this.webpackJsonptodolist2||[]).push([[0],{14:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/loading-arrow.e9ea7394.gif"},22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(27),a(3)),i=a(4),s=a(6),u=a(5),m=r.a.createContext(),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Alldata:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL").then((function(e){return e.json()})).then((function(t){e.setState({Alldata:t.countryitems})}))}},{key:"render",value:function(){return r.a.createElement(m.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),h=(a(14),a(10)),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.title,a=e.code;e.total_cases,e.total_active_cases,e.total_deaths,e.total_new_cases_today,e.total_new_deaths_today,e.total_recovered,e.total_serious_cases;return r.a.createElement("div",{className:"singlecountry"},r.a.createElement("h1",null,"Country : ",t),r.a.createElement("h2",null,r.a.createElement(h.b,{to:"detail/".concat(a),className:"btn-primary"},"Show Details")))}}]),a}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Singledata:[]},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.datas,t=Object.values(e).map((function(e){return r.a.createElement(p,{data:e})}));return r.a.createElement("div",{className:"items"},t)}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.context.Alldata;return r.a.createElement("div",{className:"inner-section"},r.a.createElement("h3",null,"  ",r.a.createElement(h.b,{to:"/",className:"btn-primary"},"Go Back")),e.map((function(e,t){return r.a.createElement(v,{key:t,datas:e})})))}}]),a}(n.Component);f.contextType=m;var E=f;function y(e){var t=e.detail,a=t.total_cases,n=t.total_active_cases,l=t.total_deaths,c=t.total_new_cases_today,o=t.total_new_deaths_today,i=t.total_recovered,s=t.total_serious_cases;return r.a.createElement("div",{className:"alldetail"},r.a.createElement("div",{className:"innerdetail"},r.a.createElement("p",null,"Total cases: ",a),r.a.createElement("p",null,"Total active cases: ",n),r.a.createElement("p",null,"Total death: ",l),r.a.createElement("p",null,"Case today: ",c),r.a.createElement("p",null,"Death today: ",o),r.a.createElement("p",null,"Recovered: ",i),r.a.createElement("p",null,"Serious: ",s),r.a.createElement("h1",null,r.a.createElement(h.b,{to:"/detail",className:"btn-primary"},"Go Back"))))}var b=a(21),_=a.n(b);function j(){return r.a.createElement("div",{className:"spinnerload"},r.a.createElement("img",{src:_.a,alt:""}))}var O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={detail:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.code;fetch("https://api.thevirustracker.com/free-api?countryTotal=".concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({detail:t.countrydata})}))}},{key:"render",value:function(){if(0===this.state.detail.length)return r.a.createElement(j,null);var e=this.state.detail.map((function(e){return r.a.createElement(y,{detail:e})}));return r.a.createElement("div",null,e)}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={alldata:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.thevirustracker.com/free-api?global=stats").then((function(e){return e.json()})).then((function(t){e.setState({alldata:t.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){console.log(this.state.alldata);var e=this.state.alldata.map((function(e){return r.a.createElement("div",{className:"main-section"},r.a.createElement("h1",null,"Coronavirus Cases:"),r.a.createElement("p",null," ",e.total_cases),r.a.createElement("h1",null,"Deaths"),r.a.createElement("p",null,e.total_deaths),r.a.createElement("h1",null,"Total Recovered"),r.a.createElement("p",null,e.total_recovered),r.a.createElement("h1",null,"Total Active Cases"),r.a.createElement("p",null,e.total_active_cases),r.a.createElement("h1",null,"Total Affected Countries"),r.a.createElement("p",null,e.total_affected_countries),r.a.createElement("h3",null,r.a.createElement(h.b,{to:"/detail","btn-primary":!0},"View By Country")))}));return r.a.createElement("div",null,e)}}]),a}(n.Component),w=a(1),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(h.a,null,r.a.createElement(w.a,{exact:!0,path:"/",component:k}),r.a.createElement(w.a,{exact:!0,path:"/detail",component:E}),r.a.createElement(w.a,{exact:!0,path:"/detail/:code",component:O})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.0375d8ed.chunk.js.map