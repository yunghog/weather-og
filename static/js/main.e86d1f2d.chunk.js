(this["webpackJsonpweather-og"]=this["webpackJsonpweather-og"]||[]).push([[0],{20:function(e,t,a){},47:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),c=a(38),n=a.n(c),r=(a(47),a(41)),d=a(4),o=a(23),h=a(14),j=a(15),l=a(12),b=a(17),m=a(16),p=a(76),u=a(77),O=a(78),x=a(13),g=a.n(x),f=a(39),v=a.n(f),w=(a(65),a(20),a(66),a(5)),y=a(6),N=a(40),M=a(0),C=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(M.jsx)("div",{style:{height:"100vh",width:"100%",display:"flex",alignItems:"center",color:"#fffd",backgroundColor:"#111"},children:Object(M.jsxs)("div",{style:{margin:"auto",padding:"20px",border:"1px solid #fff2",borderRadius:"20px"},children:[Object(M.jsxs)("h1",{children:["Loading ",Object(M.jsx)(w.a,{className:"spin",icon:y.c})]}),Object(M.jsx)("p",{children:"Please turn on the device location"})]})})}}]),a}(s.Component);var L=function(){return Object(M.jsx)("div",{className:"my-footer",children:Object(M.jsxs)("p",{children:["Developed by ",Object(M.jsx)("a",{href:"https://instagram.com/samartha__",target:"_blank",rel:"noreferrer",children:"Samartha"}),". Powered by ",Object(M.jsx)("a",{href:"https://openweathermap.org/",target:"_blank",rel:"noreferrer",children:"Open Weather"})]})})},k=a.p+"static/media/haze.88468969.jpg",S=a.p+"static/media/clear.9961e78d.jpg",D=a.p+"static/media/clouds.68792a05.jpg",W=a.p+"static/media/rain.fe5997dc.jpg",z=a.p+"static/media/dust.7bbb8677.jpg",F=a.p+"static/media/misty.c20d94b8.JPG",q=a.p+"static/media/fog.1e5eca2a.jpg",G=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={isLoading:!0,data:"",weatherMain:"",zip:"",country:"",myLat:"",myLon:"",temp:"",sun:"",wind:"",clouds:"",inputVal:"",reqStatus:""},s.getWeather=s.getWeather.bind(Object(l.a)(s)),s.getWeather2=s.getWeather2.bind(Object(l.a)(s)),s.setData=s.setData.bind(Object(l.a)(s)),s.load1=s.load1.bind(Object(l.a)(s)),s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.init({offset:10,duration:2e3}),navigator.permissions.query({name:"geolocation"}).then((function(t){e.setState({locState:t.state})})),navigator.geolocation.getCurrentPosition((function(t){e.setState({myLat:t.coords.latitude,myLon:t.coords.longitude});var a="http://api.openweathermap.org/data/2.5/weather?lat="+t.coords.latitude+"&lon="+t.coords.longitude+"&appid=ee09cabd0c0770e88fd6cd931143eeca";a=a.replace(" ",""),g.a.get(a).then((function(t){e.setState({data:t.data,weatherMain:t.data.weather[0],temp:t.data.main,myLat:t.data.coord.lat,myLon:t.data.coord.lon,sun:t.data.sys,wind:t.data.wind,clouds:t.data.clouds,reqStatus:t.status})}))})),setTimeout(this.load1,3e3)}},{key:"load1",value:function(){this.setState({isLoading:!1})}},{key:"setData",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"getWeather",value:function(){var e=this,t="http://api.openweathermap.org/data/2.5/weather?zip="+this.state.zip+","+this.state.country+"&appid=ee09cabd0c0770e88fd6cd931143eeca";t=t.replace(" ",""),g.a.get(t).then((function(t){e.setState({data:t.data,weatherMain:t.data.weather[0],temp:t.data.main,myLat:t.data.coord.lat,myLon:t.data.coord.lon,sun:t.data.sys,wind:t.data.wind,clouds:t.data.clouds})}))}},{key:"getWeather2",value:function(){var e=this,t=this.state.inputVal,a="";if(Number(t))a="http://api.openweathermap.org/data/2.5/weather?zip="+t+",IN&appid=ee09cabd0c0770e88fd6cd931143eeca";else if(t.indexOf(",")>-1){var s=t.split(",");Number(s[0])&&Number(s[1])?a="http://api.openweathermap.org/data/2.5/weather?lat="+s[0]+"&lon="+s[1]+"&appid=ee09cabd0c0770e88fd6cd931143eeca":Number(s[0])&&!Number(s[1])&&(a="http://api.openweathermap.org/data/2.5/weather?zip="+s[0]+","+s[1]+"&appid=ee09cabd0c0770e88fd6cd931143eeca")}else a="http://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=ee09cabd0c0770e88fd6cd931143eeca";a=a.replace(" ",""),g.a.get(a).then((function(t){e.setState({data:t.data,weatherMain:t.data.weather[0],temp:t.data.main,myLat:t.data.coord.lat,myLon:t.data.coord.lon,sun:t.data.sys,wind:t.data.wind,clouds:t.data.clouds,reqStatus:t.data.cod,isLoading:!0})})).catch((function(e){console.log(e),window.location.href+="error"})),setTimeout(this.load1,2e3)}},{key:"render",value:function(){return Object(M.jsxs)("div",{children:[!this.state.isLoading&&Object(M.jsx)(p.a,{fluid:!0,className:"weather-con",children:Object(M.jsxs)(u.a,{noGutters:!0,children:[Object(M.jsx)(O.a,{md:8,children:Object(M.jsxs)("div",{className:"weather-disp",children:[Object(M.jsx)("div",{className:"title",children:Object(M.jsxs)(u.a,{noGutters:!0,children:[Object(M.jsx)(O.a,{xs:10,children:Object(M.jsx)("h1",{children:"Weatherog"})}),Object(M.jsx)(O.a,{xs:2,children:Object(M.jsx)("a",{href:"https://github.com/yunghog/weather-og",target:"_blank",rel:"noreferrer",children:Object(M.jsx)("h1",{children:Object(M.jsx)(w.a,{icon:N.a})})})})]})}),Object(M.jsx)("br",{}),Object(M.jsx)(u.a,{"data-aos":"fade-up",noGutters:!0,children:Object(M.jsx)(O.a,{md:{span:8,offset:2},children:Object(M.jsx)("div",{className:"data-form",children:Object(M.jsxs)("div",{className:"form-ctrl",children:[Object(M.jsx)("input",{onChange:this.setData,placeholder:"<zip,cc> or <lat,lon> or  <cityname>",name:"inputVal"}),Object(M.jsx)("button",{className:"btn btn-search",onClick:this.getWeather2,children:Object(M.jsx)(w.a,{icon:y.e})})]})})})}),Object(M.jsx)("div",{className:"weather-disp-data-con",children:Object(M.jsx)("div",{className:"weather-disp-data",children:Object(M.jsxs)(u.a,{noGutters:!0,children:[Object(M.jsx)(O.a,{md:5,children:Object(M.jsx)("div",{className:"temp-con","data-aos":"fade-right",children:Object(M.jsxs)("div",{className:"temp",children:[Object(M.jsx)("h2",{children:this.state.data.name}),Object(M.jsx)("div",{className:"temp-sub",children:Object(M.jsxs)("span",{children:["Lat",Object(M.jsx)("p",{children:this.state.myLat})]})}),Object(M.jsx)("div",{className:"temp-sub",children:Object(M.jsxs)("span",{children:["Lon",Object(M.jsx)("p",{children:this.state.myLon})]})})]})})}),Object(M.jsx)(O.a,{md:3,children:Object(M.jsx)("div",{className:"temp-con","data-aos":"fade-right","data-aos-delay":"250",children:Object(M.jsxs)("div",{className:"temp",children:[Object(M.jsxs)("h2",{children:[Object(M.jsx)(w.a,{icon:y.h}),(this.state.temp.temp-273).toFixed(2),"\xb0 C"]}),Object(M.jsxs)("div",{className:"temp-sub",children:[Object(M.jsxs)("span",{children:["MIN",Object(M.jsxs)("p",{children:[(this.state.temp.temp_min-273).toFixed(2),"\xb0C"]})]}),Object(M.jsxs)("span",{children:["MAX",Object(M.jsxs)("p",{children:[(this.state.temp.temp_max-273).toFixed(2),"\xb0C"]})]})]})]})})}),Object(M.jsx)(O.a,{md:4,children:Object(M.jsx)("div",{className:"temp-con","data-aos":"fade-right","data-aos-delay":"500",children:Object(M.jsxs)("div",{className:"temp",children:[Object(M.jsxs)("h2",{children:["Clouds"==this.state.weatherMain.main&&Object(M.jsx)(w.a,{icon:y.a}),"Clear"==this.state.weatherMain.main&&Object(M.jsx)(w.a,{icon:y.g}),"Rain"==this.state.weatherMain.main&&Object(M.jsx)(w.a,{icon:y.b}),"Dust"==this.state.weatherMain.main&&Object(M.jsx)(w.a,{icon:y.f}),"Haze"==this.state.weatherMain.main&&Object(M.jsx)(w.a,{icon:y.f}),"Mist"==this.state.weatherMain.main&&Object(M.jsx)(w.a,{icon:y.f}),"Fog"==this.state.weatherMain.main&&Object(M.jsx)(w.a,{icon:y.f}),"\xa0",this.state.weatherMain.main]}),Object(M.jsx)("div",{className:"temp-sub",children:Object(M.jsxs)("span",{children:["Description",Object(M.jsx)("p",{children:this.state.weatherMain.description})]})})]})})})]})})}),Object(M.jsxs)("div",{className:"weather-disp-image",children:["Clouds"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:D}),"Clear"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:S}),"Haze"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:k}),"Rain"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:W}),"Mist"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:F}),"Dust"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:z}),"Fog"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:q})]})]})}),Object(M.jsxs)(O.a,{md:4,children:[Object(M.jsxs)("div",{className:"data-con",children:[Object(M.jsxs)("div",{className:"data",children:[Object(M.jsxs)("div",{className:"data-form",children:[Object(M.jsx)("h2",{children:"Get Weather : "}),Object(M.jsxs)("div",{className:"form-ctrl","data-aos":"fade-left",children:[Object(M.jsx)("input",{onChange:this.setData,placeholder:"Search",name:"inputVal"}),Object(M.jsx)("button",{className:"btn btn-search",onClick:this.getWeather2,children:Object(M.jsx)(w.a,{icon:y.e})})]})]}),Object(M.jsx)("br",{}),Object(M.jsxs)("div",{className:"data-info","data-aos":"fade-left","data-aos-delay":"200",children:[Object(M.jsx)("span",{children:Object(M.jsx)(w.a,{icon:y.d})}),Object(M.jsx)("h3",{children:"Get weather by"}),Object(M.jsxs)("ul",{children:[Object(M.jsx)("li",{children:"Zip code and CC. eg: 577401,IN"}),Object(M.jsx)("li",{children:"Geographical Coordinates. eg: 12.9794,77.5946"}),Object(M.jsx)("li",{children:"City Name. eg: Atlanta"})]})]}),Object(M.jsx)("br",{}),Object(M.jsx)("h2",{children:"Weather Details"}),Object(M.jsx)("div",{className:"data-list","data-aos":"fade",children:Object(M.jsxs)("ul",{children:[Object(M.jsxs)("li",{children:[Object(M.jsx)("div",{className:"data-atr",children:"Humidity"}),Object(M.jsxs)("div",{className:"data-val",children:[this.state.temp.humidity,"%"]})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("div",{className:"data-atr",children:"Pressure"}),Object(M.jsx)("div",{className:"data-val",children:this.state.temp.pressure})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("div",{className:"data-atr",children:"Cloud Density"}),Object(M.jsxs)("div",{className:"data-val",children:[this.state.clouds.all,"%"]})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("div",{className:"data-atr",children:"Wind Speed"}),Object(M.jsxs)("div",{className:"data-val",children:[this.state.wind.speed," m/s"]})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("div",{className:"data-atr",children:"Request status"}),Object(M.jsx)("div",{className:"data-val",children:this.state.reqStatus})]})]})})]}),Object(M.jsxs)("div",{className:"weather-disp-image blur",children:["Clouds"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:D}),"Clear"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:S}),"Haze"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:k}),"Rain"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:W}),"Mist"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:F}),"Dust"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:z}),"Fog"==this.state.weatherMain.main&&Object(M.jsx)("img",{src:q})]})]}),Object(M.jsx)(L,{})]})]})}),this.state.isLoading&&Object(M.jsx)(C,{})]})}}]),a}(s.Component),I=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){setTimeout((function(){window.location.href="/weather-og"}),3e3)}},{key:"render",value:function(){return Object(M.jsx)("div",{style:{height:"100vh",width:"100%",display:"flex",alignItems:"center",color:"#fffd",backgroundColor:"#111"},children:Object(M.jsxs)("div",{style:{margin:"auto",padding:"20px",border:"1px solid #fff2",borderRadius:"20px"},children:[Object(M.jsx)("h1",{children:"Error 404. Invalid Location"}),Object(M.jsx)("p",{children:"Redirecting to Homepage"})]})})}}]),a}(s.Component),P=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={data:"",weatherMain:"",zip:"",country:"",myLat:"",myLon:"",temp:""},s.getWeather=s.getWeather.bind(Object(l.a)(s)),s.setData=s.setData.bind(Object(l.a)(s)),s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.permissions.query({name:"geolocation"}).then((function(t){e.setState({locState:t.state}),console.log(t.state)})),navigator.geolocation.getCurrentPosition((function(t){e.setState({myLat:t.coords.latitude,myLon:t.coords.longitude});var a="http://api.openweathermap.org/data/2.5/weather?lat="+t.coords.latitude+"&lon="+t.coords.longitude+"&appid=ee09cabd0c0770e88fd6cd931143eeca";a=a.replace(" ",""),g.a.get(a).then((function(t){e.setState({data:t.data,weatherMain:t.data.weather[0].main,temp:t.data.main})}))}))}},{key:"setData",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"getWeather",value:function(){var e=this,t="http://api.openweathermap.org/data/2.5/weather?zip="+this.state.zip+","+this.state.country+"&appid=ee09cabd0c0770e88fd6cd931143eeca";t=t.replace(" ",""),g.a.get(t).then((function(t){console.log(t.data),e.setState({data:t.data,weatherMain:t.data.weather[0].main})})),console.log(this.state.data.main.temp)}},{key:"render",value:function(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("input",{onChange:this.setData,placeholder:"zip code",name:"zip"}),Object(M.jsx)("input",{onChange:this.setData,placeholder:"country code",name:"country"}),Object(M.jsx)("button",{onClick:this.getWeather,children:"get weather"}),Object(M.jsx)("h1",{children:this.state.weatherMain}),Object(M.jsx)("h1",{children:this.state.data.name}),Object(M.jsx)("h1",{children:this.state.temp.temp})]})}}]),a}(s.Component);var R=function(){return Object(M.jsxs)(r.a,{basename:"/weather-og",children:[Object(M.jsx)(d.a,{exact:!0,path:"/",component:G}),Object(M.jsx)(d.a,{path:"/test",component:P}),Object(M.jsx)(d.a,{path:"/error",component:I})]})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,79)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),i(e),c(e),n(e)}))};n.a.render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(R,{})}),document.getElementById("root")),_()}},[[74,1,2]]]);
//# sourceMappingURL=main.e86d1f2d.chunk.js.map