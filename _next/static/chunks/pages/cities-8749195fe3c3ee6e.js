(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{4651:function(e,t,n){"use strict";n.d(t,{Ee:function(){return x}});var r=n(1439),i=n(5031),o=n(7294),s=n(4697);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var l=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],h=o.forwardRef((function(e,t){var n=e.htmlWidth,r=e.htmlHeight,i=e.alt,s=c(e,l);return o.createElement("img",a({width:n,height:r,ref:t,alt:i},s))})),x=(0,r.Gp)((function(e,t){var n=e.fallbackSrc,l=e.fallback,x=e.src,d=e.srcSet,f=e.align,m=e.fit,g=e.loading,p=e.ignoreFallback,w=e.crossOrigin,v=c(e,u),j=null!=g||p||void 0===n&&void 0===l,y=function(e){var t=e.loading,n=e.src,r=e.srcSet,i=e.onLoad,a=e.onError,c=e.crossOrigin,l=e.sizes,u=e.ignoreFallback,h=(0,o.useState)("pending"),x=h[0],d=h[1];(0,o.useEffect)((function(){d(n?"loading":"pending")}),[n]);var f=(0,o.useRef)(),m=(0,o.useCallback)((function(){if(n){g();var e=new Image;e.src=n,c&&(e.crossOrigin=c),r&&(e.srcset=r),l&&(e.sizes=l),t&&(e.loading=t),e.onload=function(e){g(),d("loaded"),null==i||i(e)},e.onerror=function(e){g(),d("failed"),null==a||a(e)},f.current=e}}),[n,c,r,l,i,a,t]),g=function(){f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,s.a)((function(){if(!u)return"loading"===x&&m(),function(){g()}}),[x,m,u]),u?"loaded":x}(a({},e,{ignoreFallback:j})),_=a({ref:t,objectFit:m,objectPosition:f},j?v:(0,i.CE)(v,["onError","onLoad"]));return"loaded"!==y?l||o.createElement(r.m$.img,a({as:h,className:"chakra-image__placeholder",src:n},_)):o.createElement(r.m$.img,a({as:h,src:x,srcSet:d,crossOrigin:w,loading:g,className:"chakra-image"},_))}));i.Ts&&(x.displayName="Image")},1558:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cities",function(){return n(6392)}])},6392:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(7568),i=n(1799),o=n(9396),s=n(797),a=n(655),c=n(5893),l=n(7294),u=n(1163),h=n(4597),x=(n(5202),n(949)),d=n(3236),f=n(4651),m=n(9008),g=n.n(m);function p(){var e=(0,l.useState)({events:[{name:"state.hydrate"}]}),t=e[0],n=e[1],m=(0,l.useState)({state:null,events:[],processing:!1}),p=m[0],w=m[1],v=(0,u.useRouter)(),j=(0,l.useRef)(null),y=v.isReady,_=(0,x.If)();_.colorMode,_.toggleColorMode;return(0,l.useEffect)((function(){if(y){"undefined"!==typeof j.current&&(j.current||(window.addEventListener("focus",(function(){j.current.reconnect()})),(0,h.$j)(j,t,n,p,w,v,"wss://None-Dikoland_Pynecone.api.pynecone.app/event")));var e=function(){var e=(0,r.Z)((function(){return(0,a.__generator)(this,(function(e){switch(e.label){case 0:return null!=p.state&&(n((0,o.Z)((0,i.Z)({},p.state),{events:(0,s.Z)(t.events).concat((0,s.Z)(p.events))})),w({state:null,events:[],processing:!1})),[4,(0,h.xq)(t,n,p,w,v,j.current)];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}})),(0,c.jsxs)(d.xu,{sx:{height:"560vh"},children:[(0,c.jsx)(d.xu,{sx:{position:"fixed"},children:(0,c.jsxs)(d.gC,{children:[(0,c.jsx)(d.xv,{sx:{color:"transparent",fontSize:"0.01em"},children:"....."}),"\r",(0,c.jsx)(d.Ug,{children:(0,c.jsxs)(d.M5,{children:[(0,c.jsx)(d.xu,{dangerouslySetInnerHTML:{__html:"<a href=/><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/DLIco.png alt=Logo width=90px height=auto></a>"}}),"\r",(0,c.jsx)(d.xu,{dangerouslySetInnerHTML:{__html:"<a href=/about><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/InfoButton.png alt=Info width=210px height=auto></a>"}}),"\r",(0,c.jsx)(d.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,c.jsx)(d.xu,{dangerouslySetInnerHTML:{__html:"<a href=/history><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/HistoryButton.png alt=History width=150px height=auto></a>"}}),"\r",(0,c.jsx)(d.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,c.jsx)(d.xu,{dangerouslySetInnerHTML:{__html:"<a href=/play><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/HTPButton.png alt=How To Play width=206px height=auto></a>"}}),"\r",(0,c.jsx)(d.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,c.jsx)(d.xu,{dangerouslySetInnerHTML:{__html:"<a href=/cities><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/CitiesButton.png alt=Cities And Clans width=250px height=auto></a>"}}),"\r",(0,c.jsx)(d.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,c.jsx)(d.xu,{dangerouslySetInnerHTML:{__html:"<a href=/plugins><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/PluginsButton.png alt=Plugins width=150px height=auto></a>"}}),"\r",(0,c.jsx)(d.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,c.jsx)(d.xu,{dangerouslySetInnerHTML:{__html:"<a href=/admins><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/AdmButton.png alt=Admins width=140px height=auto></a>"}})]})})]})}),"\r",(0,c.jsx)(d.M5,{sx:{width:"100%",height:"90vh"},children:(0,c.jsxs)(d.Ug,{children:[(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"#FFD646"},children:"Dikoland "}),"\r",(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"- \u0433\u043e\u0440\u043e\u0434\u0430 \u0438 \u043a\u043b\u0430\u043d\u044b"}),"\r",(0,c.jsx)(f.Ee,{src:"https://github.com/INotFime/dikolandwebsite/raw/main/assets/DikolandLogo4k21-9.png",sx:{alt:"Big Ass Logo",width:"730px"}})]})}),"\r",(0,c.jsx)(d.gC,{children:(0,c.jsx)(d.M5,{children:(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"\u0413\u043e\u0440\u043e\u0434\u0430"})})}),"\r",(0,c.jsxs)(d.gC,{children:[(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2em",color:"white"},children:"PowerPlace"}),"\r",(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u041c\u044d\u0440: DikYT"}),"\r",(0,c.jsx)(f.Ee,{src:"https://github.com/INotFime/dikolandwebsite/raw/main/assets/2022-12-26_15.12.48.png",sx:{width:"50%",height:"auto"}})]}),"\r",(0,c.jsx)(d.xv,{children:"\u200b"}),"\r",(0,c.jsxs)(d.gC,{children:[(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2em",color:"white"},children:"\u0421\u0442\u0430\u043b\u0438\u043d\u0433\u0440\u0430\u0434"}),"\r",(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u041c\u044d\u0440: Alexsus"}),"\r",(0,c.jsx)(f.Ee,{src:"https://github.com/INotFime/dikolandwebsite/raw/main/assets/image_3.png",sx:{width:"50%",height:"auto"}})]}),"\r",(0,c.jsx)(d.xv,{children:"\u200b"}),"\r",(0,c.jsxs)(d.gC,{children:[(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2em",color:"white"},children:"\u041a\u0451\u043d\u0438\u0433\u0441\u0431\u0435\u0440\u0433"}),"\r",(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u041c\u044d\u0440: _ZeroFive"}),"\r",(0,c.jsx)(f.Ee,{src:"https://github.com/INotFime/dikolandwebsite/raw/main/assets/image_-2134.png",sx:{width:"50%",height:"auto"}})]}),"\r",(0,c.jsx)(d.xv,{children:"\u200b"}),"\r",(0,c.jsxs)(d.gC,{children:[(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2em",color:"white"},children:"\u041a\u043e\u043d\u043e\u0445\u0430 (\u0421\u043a\u0440\u044b\u0442\u044b\u0439 \u041b\u0438\u0441\u0442)"}),"\r",(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u041c\u044d\u0440: Aquell_"}),"\r",(0,c.jsx)(f.Ee,{src:"https://cdn.discordapp.com/attachments/1028336193278070814/1092449614852010106/Screenshot_5.png",sx:{width:"50%",height:"auto"}})]}),"\r",(0,c.jsx)(d.xv,{children:"\u200b"}),"\r",(0,c.jsxs)(d.gC,{children:[(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2em",color:"white"},children:"\u041a\u0438\u0431\u0435\u0440\u0432\u0430\u043d\u0441\u043a"}),"\r",(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u041c\u044d\u0440: JustPast"}),"\r",(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u0417\u0430\u043c. \u041c\u044d\u0440\u0430: arseniybelokurov"}),"\r",(0,c.jsx)(f.Ee,{src:"https://cdn.discordapp.com/attachments/1028336193278070814/1093062937616326736/image.png",sx:{width:"50%",height:"auto"}})]}),"\r",(0,c.jsx)(d.xv,{children:"\u200b"}),"\r",(0,c.jsx)(d.M5,{children:(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"\u041a\u043b\u0430\u043d\u044b"})}),"\r",(0,c.jsxs)(d.gC,{children:[(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2em",color:"white"},children:"\u041a\u043b\u0430\u043d \u041e\u0413\u041a\u0411"}),"\r",(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438: PowerPlace, \u041a\u0451\u043d\u0438\u043d\u0441\u0431\u0435\u0440\u0433"}),"\r",(0,c.jsx)(f.Ee,{src:"https://github.com/INotFime/dikolandwebsite/raw/main/assets/37_20230209121235.png",sx:{width:"50%",height:"auto"}}),"\r",(0,c.jsx)(d.xv,{sx:{fontFamily:"Comfortaa",fontSize:"0.75em",color:"white"},children:"\u0424\u043b\u0430\u0433: Aquell"})]}),"\r",(0,c.jsx)(d.xv,{children:"\u200b"}),"\r",(0,c.jsxs)(g(),{children:[(0,c.jsx)("title",{children:"Dikoland - \u0413\u043e\u0440\u043e\u0434\u0430 \u0438 \u043a\u043b\u0430\u043d\u044b"}),"\r",(0,c.jsx)("meta",{content:"Dikoland - \\u0413\\u043e\\u0440\\u043e\\u0434\\u0430 \\u0438 \\u043a\\u043b\\u0430\\u043d\\u044b",name:"description"}),"\r",(0,c.jsx)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},4597:function(e,t,n){"use strict";n.d(t,{$j:function(){return d},xq:function(){return x}});var r,i=n(7568),o=n(1799),s=n(9396),a=n(655),c=n(2003),l="token",u=function(){return r||(window&&(window.sessionStorage.getItem(l)||window.sessionStorage.setItem(l,function(){var e=(new Date).getTime(),t=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var r=16*Math.random();return e>0?(r=(e+r)%16|0,e=Math.floor(e/16)):(r=(t+r)%16|0,t=Math.floor(t/16)),("x"==n?r:7&r|8).toString(16)}))}()),r=window.sessionStorage.getItem(l)),r)},h=function(){var e=(0,i.Z)((function(e,t,n){return(0,a.__generator)(this,(function(r){return"_redirect"==e.name?(t.push(e.payload.path),[2]):"_console"==e.name?(console.log(e.payload.message),[2]):"_alert"==e.name?(alert(e.payload.message),[2]):(e.token=u(),e.router_data={pathname:(i=t).pathname,query:i.query},n&&n.send(JSON.stringify(e)),[2]);var i}))}));return function(t,n,r){return e.apply(this,arguments)}}(),x=function(){var e=(0,i.Z)((function(e,t,n,r,i,c){var l;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return n.processing||0==e.events.length?[2]:c.readyState?(r((0,s.Z)((0,o.Z)({},n),{processing:!0})),l=e.events.shift(),t((0,s.Z)((0,o.Z)({},e),{events:e.events})),[4,h(l,i,c)]):[2];case 1:return a.sent(),[2]}}))}));return function(t,n,r,i,o,s){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((function(e,t,n,r,i,o,s){return(0,a.__generator)(this,(function(a){return e.current=new c.Z(s),e.current.onopen=function(){x(t,n,r,i,o,e.current)},e.current.onmessage=function(e){e=JSON.parse(e.data),function(e,t){for(var n in t){for(var r=e,i=n.split(".").slice(1);i.length>0;)r=r[i.shift()];for(var o in t[n])r[o]=t[n][o]}}(t,e.delta),i({processing:!1,state:t,events:e.events})},[2]}))}));return function(t,n,r,i,o,s,a){return e.apply(this,arguments)}}()}},function(e){e.O(0,[588,774,888,179],(function(){return t=1558,e(e.s=t);var t}));var t=e.O();_N_E=t}]);