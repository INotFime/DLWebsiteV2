(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57],{4651:function(e,t,n){"use strict";n.d(t,{Ee:function(){return h}});var r=n(1439),o=n(5031),i=n(7294),a=n(4697);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var c=["htmlWidth","htmlHeight","alt"],x=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],f=i.forwardRef((function(e,t){var n=e.htmlWidth,r=e.htmlHeight,o=e.alt,a=l(e,c);return i.createElement("img",s({width:n,height:r,ref:t,alt:o},a))})),h=(0,r.Gp)((function(e,t){var n=e.fallbackSrc,c=e.fallback,h=e.src,m=e.srcSet,u=e.align,d=e.fit,g=e.loading,j=e.ignoreFallback,v=e.crossOrigin,w=l(e,x),p=null!=g||j||void 0===n&&void 0===c,y=function(e){var t=e.loading,n=e.src,r=e.srcSet,o=e.onLoad,s=e.onError,l=e.crossOrigin,c=e.sizes,x=e.ignoreFallback,f=(0,i.useState)("pending"),h=f[0],m=f[1];(0,i.useEffect)((function(){m(n?"loading":"pending")}),[n]);var u=(0,i.useRef)(),d=(0,i.useCallback)((function(){if(n){g();var e=new Image;e.src=n,l&&(e.crossOrigin=l),r&&(e.srcset=r),c&&(e.sizes=c),t&&(e.loading=t),e.onload=function(e){g(),m("loaded"),null==o||o(e)},e.onerror=function(e){g(),m("failed"),null==s||s(e)},u.current=e}}),[n,l,r,c,o,s,t]),g=function(){u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return(0,a.a)((function(){if(!x)return"loading"===h&&d(),function(){g()}}),[h,d,x]),x?"loaded":h}(s({},e,{ignoreFallback:p})),C=s({ref:t,objectFit:d,objectPosition:u},p?w:(0,o.CE)(w,["onError","onLoad"]));return"loaded"!==y?c||i.createElement(r.m$.img,s({as:f,className:"chakra-image__placeholder",src:n},C)):i.createElement(r.m$.img,s({as:f,src:h,srcSet:m,crossOrigin:v,loading:g,className:"chakra-image"},C))}));o.Ts&&(h.displayName="Image")},4912:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins",function(){return n(4175)}])},4175:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(7568),o=n(1799),i=n(9396),a=n(797),s=n(655),l=n(5893),c=n(7294),x=n(1163),f=n(4597),h=(n(5202),n(949)),m=n(3236),u=n(4651),d=n(9008),g=n.n(d);function j(){var e=(0,c.useState)({events:[{name:"state.hydrate"}]}),t=e[0],n=e[1],d=(0,c.useState)({state:null,events:[],processing:!1}),j=d[0],v=d[1],w=(0,x.useRouter)(),p=(0,c.useRef)(null),y=w.isReady,C=(0,h.If)();C.colorMode,C.toggleColorMode;return(0,c.useEffect)((function(){if(y){"undefined"!==typeof p.current&&(p.current||(window.addEventListener("focus",(function(){p.current.reconnect()})),(0,f.$j)(p,t,n,j,v,w,"wss://None-Dikoland_Pynecone.api.pynecone.app/event")));var e=function(){var e=(0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return null!=j.state&&(n((0,i.Z)((0,o.Z)({},j.state),{events:(0,a.Z)(t.events).concat((0,a.Z)(j.events))})),v({state:null,events:[],processing:!1})),[4,(0,f.xq)(t,n,j,v,w,p.current)];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}})),(0,l.jsxs)(m.xu,{sx:{height:"340vh"},children:[(0,l.jsx)(m.xu,{sx:{position:"fixed"},children:(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.xv,{sx:{color:"transparent",fontSize:"0.01em"},children:"....."}),"\r",(0,l.jsx)(m.Ug,{children:(0,l.jsxs)(m.M5,{children:[(0,l.jsx)(m.xu,{dangerouslySetInnerHTML:{__html:"<a href=/><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/DLIco.png alt=Logo width=90px height=auto></a>"}}),"\r",(0,l.jsx)(m.xu,{dangerouslySetInnerHTML:{__html:"<a href=/about><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/InfoButton.png alt=Info width=210px height=auto></a>"}}),"\r",(0,l.jsx)(m.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,l.jsx)(m.xu,{dangerouslySetInnerHTML:{__html:"<a href=/history><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/HistoryButton.png alt=History width=150px height=auto></a>"}}),"\r",(0,l.jsx)(m.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,l.jsx)(m.xu,{dangerouslySetInnerHTML:{__html:"<a href=/play><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/HTPButton.png alt=How To Play width=206px height=auto></a>"}}),"\r",(0,l.jsx)(m.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,l.jsx)(m.xu,{dangerouslySetInnerHTML:{__html:"<a href=/cities><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/CitiesButton.png alt=Cities And Clans width=250px height=auto></a>"}}),"\r",(0,l.jsx)(m.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,l.jsx)(m.xu,{dangerouslySetInnerHTML:{__html:"<a href=/plugins><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/PluginsButton.png alt=Plugins width=150px height=auto></a>"}}),"\r",(0,l.jsx)(m.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,l.jsx)(m.xu,{dangerouslySetInnerHTML:{__html:"<a href=/admins><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/AdmButton.png alt=Admins width=140px height=auto></a>"}})]})})]})}),"\r",(0,l.jsx)(m.M5,{sx:{width:"100%",height:"90vh"},children:(0,l.jsxs)(m.Ug,{children:[(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"#FFD646"},children:"Dikoland "}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"- \u043f\u043b\u0430\u0433\u0438\u043d\u044b"}),"\r",(0,l.jsx)(u.Ee,{src:"https://github.com/INotFime/dikolandwebsite/raw/main/assets/DikolandLogo4k21-9.png",sx:{alt:"Big Ass Logo",width:"730px"}})]})}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.M5,{children:(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"\u041f\u043b\u0430\u0433\u0438\u043d\u044b"})}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"(\u0441\u0430\u043c\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435)"}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.M5,{children:(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"Essentials"})}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u0420\u0430\u0437\u043d\u044b\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 (\u043d\u0435\u0442) \u0444\u0443\u043d\u043a\u0446\u0438\u0438"}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.M5,{children:(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"CoreProtect"})}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"##### \u043a\u0442\u043e \u0437\u0430\u0433\u0440\u0438\u0444\u0435\u0440\u0438\u043b? - \u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0433\u0440\u0438\u0444\u0435\u0440\u043e\u0432 \u0438 \u0432\u043e\u0440\u043e\u0432 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432"}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.M5,{children:(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"CustomBansPlus"})}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u044f \u043d\u0430\u0440\u0443\u0442\u043e \u0438 \u044f \u043a\u0430\u0441\u0442\u0443\u044e \u0431\u0430\u043d - \u0411\u0430\u043d\u044b, \u043c\u0443\u0442\u044b, \u043a\u0438\u043a\u0438"}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.M5,{children:(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"ChatEx"})}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"[G] [\u0420\u0430\u0437\u0440\u0430\u0431] JustPast: \u0431\u0430\u043d - \u0427\u0430\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.M5,{children:(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"LuckPerms"})}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"[\u0420\u0430\u0437\u0440\u0430\u0431] JustPast - \u041f\u0440\u0435\u0444\u0438\u043a\u0441\u044b \u0438 \u0440\u043e\u043b\u0438"}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.M5,{children:(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"Simple Voice Chat"})}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u041f\u0440\u0438\u0432\u0435\u0442 (\u0410\u0410\u0410\u0410\u0410\u0410\u0410\u0410\u0410\u0410\u0410) - \u0412\u043e\u0438\u0441 \u0447\u0430\u0442"}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.M5,{children:(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"Skript"})}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u041f\u043b\u0430\u0433\u0438\u043d \u0434\u043b\u044f \u043c\u0438\u043d\u0438 \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432"}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.M5,{children:(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"\u0414\u0430\u0442\u0430\u043f\u0430\u043a\u0438"})}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsxs)(m.M5,{children:[(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"Blaze And Cave Advancments Pack"})]}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u0414\u043e\u0445\u0443\u044f\u043b\u0438\u043e\u043d \u0430\u0447\u0438\u0432\u043e\u043a"}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.M5,{children:(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"PauseKawa`s Custom Player Heads"})}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u041a\u0440\u0430\u0444\u0442 \u0440\u0430\u0437\u043d\u044b\u0445 \u0433\u043e\u043b\u043e\u0432"}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.M5,{children:(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"PauseKawa`s Invisible Item Frames"})}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u0431\u043b\u044f \u043a\u0443\u0434\u044f \u044f \u0440\u0430\u043c\u043a\u0438 \u0437\u0430\u043f\u0438\u0445\u0430\u043b"}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(m.gC,{children:[(0,l.jsx)(m.M5,{children:(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"Mysticat`s Extra Recepies"})}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u0414\u043e\u043f. \u041a\u0440\u0430\u0444\u0442\u044b"}),"\r",(0,l.jsx)(m.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]}),"\r",(0,l.jsxs)(g(),{children:[(0,l.jsx)("title",{children:"Dikoland - \u041f\u043b\u0430\u0433\u0438\u043d\u044b"}),"\r",(0,l.jsx)("meta",{content:"Dikoland - \\u041f\\u043b\\u0430\\u0433\\u0438\\u043d\\u044b",name:"description"}),"\r",(0,l.jsx)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},4597:function(e,t,n){"use strict";n.d(t,{$j:function(){return m},xq:function(){return h}});var r,o=n(7568),i=n(1799),a=n(9396),s=n(655),l=n(2003),c="token",x=function(){return r||(window&&(window.sessionStorage.getItem(c)||window.sessionStorage.setItem(c,function(){var e=(new Date).getTime(),t=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var r=16*Math.random();return e>0?(r=(e+r)%16|0,e=Math.floor(e/16)):(r=(t+r)%16|0,t=Math.floor(t/16)),("x"==n?r:7&r|8).toString(16)}))}()),r=window.sessionStorage.getItem(c)),r)},f=function(){var e=(0,o.Z)((function(e,t,n){return(0,s.__generator)(this,(function(r){return"_redirect"==e.name?(t.push(e.payload.path),[2]):"_console"==e.name?(console.log(e.payload.message),[2]):"_alert"==e.name?(alert(e.payload.message),[2]):(e.token=x(),e.router_data={pathname:(o=t).pathname,query:o.query},n&&n.send(JSON.stringify(e)),[2]);var o}))}));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var e=(0,o.Z)((function(e,t,n,r,o,l){var c;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return n.processing||0==e.events.length?[2]:l.readyState?(r((0,a.Z)((0,i.Z)({},n),{processing:!0})),c=e.events.shift(),t((0,a.Z)((0,i.Z)({},e),{events:e.events})),[4,f(c,o,l)]):[2];case 1:return s.sent(),[2]}}))}));return function(t,n,r,o,i,a){return e.apply(this,arguments)}}(),m=function(){var e=(0,o.Z)((function(e,t,n,r,o,i,a){return(0,s.__generator)(this,(function(s){return e.current=new l.Z(a),e.current.onopen=function(){h(t,n,r,o,i,e.current)},e.current.onmessage=function(e){e=JSON.parse(e.data),function(e,t){for(var n in t){for(var r=e,o=n.split(".").slice(1);o.length>0;)r=r[o.shift()];for(var i in t[n])r[i]=t[n][i]}}(t,e.delta),o({processing:!1,state:t,events:e.events})},[2]}))}));return function(t,n,r,o,i,a,s){return e.apply(this,arguments)}}()}},function(e){e.O(0,[588,774,888,179],(function(){return t=4912,e(e.s=t);var t}));var t=e.O();_N_E=t}]);