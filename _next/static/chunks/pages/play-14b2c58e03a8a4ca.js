(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{4651:function(t,e,n){"use strict";n.d(e,{Ee:function(){return h}});var r=n(1439),o=n(5031),i=n(7294),a=n(4697);function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}var c=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],f=i.forwardRef((function(t,e){var n=t.htmlWidth,r=t.htmlHeight,o=t.alt,a=l(t,c);return i.createElement("img",s({width:n,height:r,ref:e,alt:o},a))})),h=(0,r.Gp)((function(t,e){var n=t.fallbackSrc,c=t.fallback,h=t.src,x=t.srcSet,d=t.align,m=t.fit,g=t.loading,p=t.ignoreFallback,v=t.crossOrigin,w=l(t,u),y=null!=g||p||void 0===n&&void 0===c,j=function(t){var e=t.loading,n=t.src,r=t.srcSet,o=t.onLoad,s=t.onError,l=t.crossOrigin,c=t.sizes,u=t.ignoreFallback,f=(0,i.useState)("pending"),h=f[0],x=f[1];(0,i.useEffect)((function(){x(n?"loading":"pending")}),[n]);var d=(0,i.useRef)(),m=(0,i.useCallback)((function(){if(n){g();var t=new Image;t.src=n,l&&(t.crossOrigin=l),r&&(t.srcset=r),c&&(t.sizes=c),e&&(t.loading=e),t.onload=function(t){g(),x("loaded"),null==o||o(t)},t.onerror=function(t){g(),x("failed"),null==s||s(t)},d.current=t}}),[n,l,r,c,o,s,e]),g=function(){d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return(0,a.a)((function(){if(!u)return"loading"===h&&m(),function(){g()}}),[h,m,u]),u?"loaded":h}(s({},t,{ignoreFallback:y})),_=s({ref:e,objectFit:m,objectPosition:d},y?w:(0,o.CE)(w,["onError","onLoad"]));return"loaded"!==j?c||i.createElement(r.m$.img,s({as:f,className:"chakra-image__placeholder",src:n},_)):i.createElement(r.m$.img,s({as:f,src:h,srcSet:x,crossOrigin:v,loading:g,className:"chakra-image"},_))}));o.Ts&&(h.displayName="Image")},2619:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/play",function(){return n(1624)}])},1624:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(7568),o=n(1799),i=n(9396),a=n(797),s=n(655),l=n(5893),c=n(7294),u=n(1163),f=n(4597),h=(n(5202),n(949)),x=n(3236),d=n(4651),m=n(9008),g=n.n(m);function p(){var t=(0,c.useState)({events:[{name:"state.hydrate"}]}),e=t[0],n=t[1],m=(0,c.useState)({state:null,events:[],processing:!1}),p=m[0],v=m[1],w=(0,u.useRouter)(),y=(0,c.useRef)(null),j=w.isReady,_=(0,h.If)();_.colorMode,_.toggleColorMode;return(0,c.useEffect)((function(){if(j){"undefined"!==typeof y.current&&(y.current||(window.addEventListener("focus",(function(){y.current.reconnect()})),(0,f.$j)(y,e,n,p,v,w,"wss://None-Dikoland_Pynecone.api.pynecone.app/event")));var t=function(){var t=(0,r.Z)((function(){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return null!=p.state&&(n((0,i.Z)((0,o.Z)({},p.state),{events:(0,a.Z)(e.events).concat((0,a.Z)(p.events))})),v({state:null,events:[],processing:!1})),[4,(0,f.xq)(e,n,p,v,w,y.current)];case 1:return t.sent(),[2]}}))}));return function(){return t.apply(this,arguments)}}();t()}})),(0,l.jsxs)(x.xu,{sx:{height:"160vh"},children:[(0,l.jsx)(x.xu,{sx:{position:"fixed"},children:(0,l.jsxs)(x.gC,{children:[(0,l.jsx)(x.xv,{sx:{color:"transparent",fontSize:"0.01em"},children:"....."}),"\r",(0,l.jsx)(x.Ug,{children:(0,l.jsxs)(x.M5,{children:[(0,l.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/DLIco.png alt=Logo width=90px height=auto></a>"}}),"\r",(0,l.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/about><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/InfoButton.png alt=Info width=210px height=auto></a>"}}),"\r",(0,l.jsx)(x.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,l.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/history><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/HistoryButton.png alt=History width=150px height=auto></a>"}}),"\r",(0,l.jsx)(x.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,l.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/play><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/HTPButton.png alt=How To Play width=206px height=auto></a>"}}),"\r",(0,l.jsx)(x.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,l.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/cities><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/CitiesButton.png alt=Cities And Clans width=250px height=auto></a>"}}),"\r",(0,l.jsx)(x.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,l.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/plugins><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/PluginsButton.png alt=Plugins width=150px height=auto></a>"}}),"\r",(0,l.jsx)(x.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,l.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/admins><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/AdmButton.png alt=Admins width=140px height=auto></a>"}})]})})]})}),"\r",(0,l.jsx)(x.M5,{sx:{width:"100%",height:"90vh"},children:(0,l.jsxs)(x.Ug,{children:[(0,l.jsx)(x.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"#FFD646"},children:"Dikoland "}),"\r",(0,l.jsx)(x.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"- \u043a\u0430\u043a \u043f\u043e\u043f\u0430\u0441\u0442\u044c?"}),"\r",(0,l.jsx)(d.Ee,{src:"https://github.com/INotFime/dikolandwebsite/raw/main/assets/DikolandLogo4k21-9.png",sx:{alt:"Big Ass Logo",width:"730px"}})]})}),"\r",(0,l.jsx)(x.xv,{sx:{color:"#FFD646",fontFamily:"Comfortaa",fontSize:"2.0em"},children:"\u200b     \u200b 1 \u0441\u043f\u043e\u0441\u043e\u0431:"}),"\r",(0,l.jsx)(x.xv,{sx:{color:"white",fontFamily:"Comfortaa",fontSize:"1.5em"},children:"\u200b     \u200b    \u200b \u041f\u043e\u043a\u0443\u043f\u043a\u0430 \u043f\u0440\u043e\u0445\u043e\u0434\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u0442\u043e\u0438\u0442 59 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u0435\u0439 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442 \u0434\u043e\u0441\u0442\u0443\u043f"}),"\r",(0,l.jsx)(x.xv,{sx:{color:"white",fontFamily:"Comfortaa",fontSize:"1.5em"},children:"\u200b     \u200b    \u200b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0430 \u0432\u0435\u0441\u044c \u0441\u0435\u0437\u043e\u043d. \u0417\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u043e\u0439 \u043f\u0440\u043e\u0445\u043e\u0434\u043a\u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u043b\u0438\u0447\u043a\u0443 \u0414\u0438\u043a\u043e\u0437\u0430\u0432\u0440\u0443. \u0422\u0430\u043a\u0436\u0435 "}),"\r",(0,l.jsx)(x.xv,{sx:{color:"white",fontFamily:"Comfortaa",fontSize:"1.5em"},children:"\u200b     \u200b    \u200b \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u0447\u0435\u0440\u0435\u0437 Donation Alerts: \u0441\u043a\u043e\u0440\u043e (\u0437\u0430\u043c\u0435\u0442\u043a\u0430 \u043e\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430: \u0434\u0438\u043a \u043a\u043e\u0433\u0434\u0430)"}),"\r",(0,l.jsx)(x.xv,{sx:{color:"white",fontFamily:"Comfortaa",fontSize:"1.5em"},children:"\u200b     \u200b    \u200b "}),"\r",(0,l.jsx)(x.xv,{sx:{color:"#FFD646",fontFamily:"Comfortaa",fontSize:"2.0em"},children:"\u200b     \u200b 2 \u0441\u043f\u043e\u0441\u043e\u0431:"}),"\r",(0,l.jsx)(x.xv,{sx:{color:"white",fontFamily:"Comfortaa",fontSize:"1.5em"},children:"\u200b     \u200b    \u200b \u041f\u043e\u0434\u0430\u0432 \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u043f\u0440\u043e\u0435\u043a\u0442, \u0443 \u0442\u0435\u0431\u044f \u043f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440"}),"\r",(0,l.jsx)(x.xv,{sx:{color:"white",fontFamily:"Comfortaa",fontSize:"1.5em"},children:"\u200b     \u200b    \u200b \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e. \u041e\u0434\u043d\u0430\u043a\u043e \u044d\u0442\u0430 \u043f\u0440\u043e\u0445\u043e\u0434\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 1 \u043c\u0435\u0441\u044f\u0446. \u041f\u043e "}),"\r",(0,l.jsx)(x.xv,{sx:{color:"white",fontFamily:"Comfortaa",fontSize:"1.5em"},children:"\u200b     \u200b    \u200b \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u044e \u0441\u0440\u043e\u043a\u0430 \u0442\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u0443\u0434\u0435\u0448\u044c \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0432\u0430\u0436\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435: \u0437\u0430\u043f\u043b\u0430\u0442\u0438\u0442\u044c "}),"\r",(0,l.jsx)(x.xv,{sx:{color:"white",fontFamily:"Comfortaa",fontSize:"1.5em"},children:"\u200b     \u200b    \u200b \u0442\u0435\u0431\u0435 \u0438\u043b\u0438 \u0436\u0435 \u0441\u043d\u043e\u0432\u0430 \u043f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443. \u0421\u0442\u043e\u0438\u0442 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u043f\u0440\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0439 "}),"\r",(0,l.jsx)(x.xv,{sx:{color:"white",fontFamily:"Comfortaa",fontSize:"1.5em"},children:"\u200b     \u200b    \u200b \u043f\u043e\u0434\u0430\u0447\u0435 \u0437\u0430\u044f\u0432\u043a\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c, \u043a\u0430\u043a \u0447\u0430\u0441\u0442\u043e \u0442\u044b \u0438\u0433\u0440\u0430\u043b \u043d\u0430 \u044d\u0442\u043e\u043c "}),"\r",(0,l.jsx)(x.xv,{sx:{color:"white",fontFamily:"Comfortaa",fontSize:"1.5em"},children:"\u200b     \u200b    \u200b \u0441\u0435\u0437\u043e\u043d\u0435 \u0438 \u0447\u0442\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u043e\u0433\u043e \u0441\u0434\u0435\u043b\u0430\u043b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0442\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432"}),"\r",(0,l.jsx)(x.xv,{sx:{color:"white",fontFamily:"Comfortaa",fontSize:"1.5em"},children:"\u200b     \u200b    \u200b \u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u0430\u0437, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0443\u044e \u0438\u0433\u0440\u0443 \u043d\u0430 \u043d\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435. "}),"\r",(0,l.jsxs)(g(),{children:[(0,l.jsx)("title",{children:"Dikoland - \u041a\u0430\u043a \u043f\u043e\u043f\u0430\u0441\u0442\u044c?"}),"\r",(0,l.jsx)("meta",{content:"Dikoland - \\u041a\\u0430\\u043a \\u043f\\u043e\\u043f\\u0430\\u0441\\u0442\\u044c?",name:"description"}),"\r",(0,l.jsx)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},4597:function(t,e,n){"use strict";n.d(e,{$j:function(){return x},xq:function(){return h}});var r,o=n(7568),i=n(1799),a=n(9396),s=n(655),l=n(2003),c="token",u=function(){return r||(window&&(window.sessionStorage.getItem(c)||window.sessionStorage.setItem(c,function(){var t=(new Date).getTime(),e=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var r=16*Math.random();return t>0?(r=(t+r)%16|0,t=Math.floor(t/16)):(r=(e+r)%16|0,e=Math.floor(e/16)),("x"==n?r:7&r|8).toString(16)}))}()),r=window.sessionStorage.getItem(c)),r)},f=function(){var t=(0,o.Z)((function(t,e,n){return(0,s.__generator)(this,(function(r){return"_redirect"==t.name?(e.push(t.payload.path),[2]):"_console"==t.name?(console.log(t.payload.message),[2]):"_alert"==t.name?(alert(t.payload.message),[2]):(t.token=u(),t.router_data={pathname:(o=e).pathname,query:o.query},n&&n.send(JSON.stringify(t)),[2]);var o}))}));return function(e,n,r){return t.apply(this,arguments)}}(),h=function(){var t=(0,o.Z)((function(t,e,n,r,o,l){var c;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return n.processing||0==t.events.length?[2]:l.readyState?(r((0,a.Z)((0,i.Z)({},n),{processing:!0})),c=t.events.shift(),e((0,a.Z)((0,i.Z)({},t),{events:t.events})),[4,f(c,o,l)]):[2];case 1:return s.sent(),[2]}}))}));return function(e,n,r,o,i,a){return t.apply(this,arguments)}}(),x=function(){var t=(0,o.Z)((function(t,e,n,r,o,i,a){return(0,s.__generator)(this,(function(s){return t.current=new l.Z(a),t.current.onopen=function(){h(e,n,r,o,i,t.current)},t.current.onmessage=function(t){t=JSON.parse(t.data),function(t,e){for(var n in e){for(var r=t,o=n.split(".").slice(1);o.length>0;)r=r[o.shift()];for(var i in e[n])r[i]=e[n][i]}}(e,t.delta),o({processing:!1,state:e,events:t.events})},[2]}))}));return function(e,n,r,o,i,a,s){return t.apply(this,arguments)}}()}},function(t){t.O(0,[588,774,888,179],(function(){return e=2619,t(t.s=e);var e}));var e=t.O();_N_E=e}]);