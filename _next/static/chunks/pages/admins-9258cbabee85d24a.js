(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[607],{4651:function(t,e,n){"use strict";n.d(e,{Ee:function(){return d}});var r=n(1439),i=n(5031),o=n(7294),s=n(4697);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}var l=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],h=o.forwardRef((function(t,e){var n=t.htmlWidth,r=t.htmlHeight,i=t.alt,s=c(t,l);return o.createElement("img",a({width:n,height:r,ref:e,alt:i},s))})),d=(0,r.Gp)((function(t,e){var n=t.fallbackSrc,l=t.fallback,d=t.src,x=t.srcSet,f=t.align,g=t.fit,m=t.loading,p=t.ignoreFallback,w=t.crossOrigin,v=c(t,u),j=null!=m||p||void 0===n&&void 0===l,y=function(t){var e=t.loading,n=t.src,r=t.srcSet,i=t.onLoad,a=t.onError,c=t.crossOrigin,l=t.sizes,u=t.ignoreFallback,h=(0,o.useState)("pending"),d=h[0],x=h[1];(0,o.useEffect)((function(){x(n?"loading":"pending")}),[n]);var f=(0,o.useRef)(),g=(0,o.useCallback)((function(){if(n){m();var t=new Image;t.src=n,c&&(t.crossOrigin=c),r&&(t.srcset=r),l&&(t.sizes=l),e&&(t.loading=e),t.onload=function(t){m(),x("loaded"),null==i||i(t)},t.onerror=function(t){m(),x("failed"),null==a||a(t)},f.current=t}}),[n,c,r,l,i,a,e]),m=function(){f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,s.a)((function(){if(!u)return"loading"===d&&g(),function(){m()}}),[d,g,u]),u?"loaded":d}(a({},t,{ignoreFallback:j})),b=a({ref:e,objectFit:g,objectPosition:f},j?v:(0,i.CE)(v,["onError","onLoad"]));return"loaded"!==y?l||o.createElement(r.m$.img,a({as:h,className:"chakra-image__placeholder",src:n},b)):o.createElement(r.m$.img,a({as:h,src:d,srcSet:x,crossOrigin:w,loading:m,className:"chakra-image"},b))}));i.Ts&&(d.displayName="Image")},7224:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admins",function(){return n(4363)}])},4363:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(7568),i=n(1799),o=n(9396),s=n(797),a=n(655),c=n(5893),l=n(7294),u=n(1163),h=n(4597),d=(n(5202),n(949)),x=n(3236),f=n(4651),g=n(9008),m=n.n(g);function p(){var t=(0,l.useState)({events:[{name:"state.hydrate"}]}),e=t[0],n=t[1],g=(0,l.useState)({state:null,events:[],processing:!1}),p=g[0],w=g[1],v=(0,u.useRouter)(),j=(0,l.useRef)(null),y=v.isReady,b=(0,d.If)();b.colorMode,b.toggleColorMode;return(0,l.useEffect)((function(){if(y){"undefined"!==typeof j.current&&(j.current||(window.addEventListener("focus",(function(){j.current.reconnect()})),(0,h.$j)(j,e,n,p,w,v,"wss://None-Dikoland_Pynecone.api.pynecone.app/event")));var t=function(){var t=(0,r.Z)((function(){return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return null!=p.state&&(n((0,o.Z)((0,i.Z)({},p.state),{events:(0,s.Z)(e.events).concat((0,s.Z)(p.events))})),w({state:null,events:[],processing:!1})),[4,(0,h.xq)(e,n,p,w,v,j.current)];case 1:return t.sent(),[2]}}))}));return function(){return t.apply(this,arguments)}}();t()}})),(0,c.jsxs)(x.xu,{sx:{height:"175vh"},children:[(0,c.jsx)(x.xu,{sx:{position:"fixed"},children:(0,c.jsxs)(x.gC,{children:[(0,c.jsx)(x.xv,{sx:{color:"transparent",fontSize:"0.01em"},children:"....."}),"\r",(0,c.jsx)(x.Ug,{children:(0,c.jsxs)(x.M5,{children:[(0,c.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/DLIco.png alt=Logo width=90px height=auto></a>"}}),"\r",(0,c.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/about><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/InfoButton.png alt=Info width=210px height=auto></a>"}}),"\r",(0,c.jsx)(x.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,c.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/history><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/HistoryButton.png alt=History width=150px height=auto></a>"}}),"\r",(0,c.jsx)(x.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,c.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/play><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/HTPButton.png alt=How To Play width=206px height=auto></a>"}}),"\r",(0,c.jsx)(x.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,c.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/cities><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/CitiesButton.png alt=Cities And Clans width=250px height=auto></a>"}}),"\r",(0,c.jsx)(x.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,c.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/plugins><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/PluginsButton.png alt=Plugins width=150px height=auto></a>"}}),"\r",(0,c.jsx)(x.xv,{sx:{color:"transparent"},children:"....."}),"\r",(0,c.jsx)(x.xu,{dangerouslySetInnerHTML:{__html:"<a href=/admins><img src=https://github.com/INotFime/dikolandwebsite/raw/main/assets/AdmButton.png alt=Admins width=140px height=auto></a>"}})]})})]})}),"\r",(0,c.jsx)(x.M5,{sx:{width:"100%",height:"90vh"},children:(0,c.jsxs)(x.Ug,{children:[(0,c.jsx)(x.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"#FFD646"},children:"Dikoland "}),"\r",(0,c.jsx)(x.xv,{sx:{fontFamily:"Comfortaa",fontSize:"2.5em",color:"white"},children:"- \u0430\u0434\u043c\u0438\u043d\u044b"}),"\r",(0,c.jsx)(f.Ee,{src:"https://github.com/INotFime/dikolandwebsite/raw/main/assets/DikolandLogo4k21-9.png",sx:{alt:"Big Ass Logo",width:"730px"}})]})}),"\r",(0,c.jsx)(x.gC,{children:(0,c.jsxs)(x.M5,{children:[(0,c.jsx)(f.Ee,{src:"https://github.com/INotFime/dikolandwebsite/raw/main/assets/DikYT.png",sx:{width:"75%",height:"auto"}}),"\r",(0,c.jsx)(x.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]})}),"\r",(0,c.jsx)(x.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "}),"\r",(0,c.jsx)(x.gC,{children:(0,c.jsxs)(x.M5,{children:[(0,c.jsx)(f.Ee,{src:"https://github.com/INotFime/dikolandwebsite/raw/main/assets/Aquell.png",sx:{width:"75%",height:"auto"}}),"\r",(0,c.jsx)(x.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]})}),"\r",(0,c.jsx)(x.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "}),"\r",(0,c.jsx)(x.gC,{children:(0,c.jsxs)(x.M5,{children:[(0,c.jsx)(f.Ee,{src:"https://github.com/INotFime/dikolandwebsite/raw/main/Alexsus.png",sx:{width:"75%",height:"auto"}}),"\r",(0,c.jsx)(x.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]})}),"\r",(0,c.jsx)(x.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "}),"\r",(0,c.jsx)(x.gC,{children:(0,c.jsxs)(x.M5,{children:[(0,c.jsx)(f.Ee,{src:"https://github.com/INotFime/dikolandwebsite/raw/main/assets/JP.png",sx:{width:"75%",height:"auto"}}),"\r",(0,c.jsx)(x.xv,{sx:{fontFamily:"Comfortaa",fontSize:"1.5em",color:"white"},children:"\u200b     \u200b    \u200b "})]})}),"\r",(0,c.jsxs)(m(),{children:[(0,c.jsx)("title",{children:"Dikoland - \u0410\u0434\u043c\u0438\u043d\u044b"}),"\r",(0,c.jsx)("meta",{name:"description",content:"Dikoland - \\u0410\\u0434\\u043c\\u0438\\u043d\\u044b"}),"\r",(0,c.jsx)("meta",{property:"og:image",content:"favicon.ico"})]})]})}},4597:function(t,e,n){"use strict";n.d(e,{$j:function(){return x},xq:function(){return d}});var r,i=n(7568),o=n(1799),s=n(9396),a=n(655),c=n(2003),l="token",u=function(){return r||(window&&(window.sessionStorage.getItem(l)||window.sessionStorage.setItem(l,function(){var t=(new Date).getTime(),e=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var r=16*Math.random();return t>0?(r=(t+r)%16|0,t=Math.floor(t/16)):(r=(e+r)%16|0,e=Math.floor(e/16)),("x"==n?r:7&r|8).toString(16)}))}()),r=window.sessionStorage.getItem(l)),r)},h=function(){var t=(0,i.Z)((function(t,e,n){return(0,a.__generator)(this,(function(r){return"_redirect"==t.name?(e.push(t.payload.path),[2]):"_console"==t.name?(console.log(t.payload.message),[2]):"_alert"==t.name?(alert(t.payload.message),[2]):(t.token=u(),t.router_data={pathname:(i=e).pathname,query:i.query},n&&n.send(JSON.stringify(t)),[2]);var i}))}));return function(e,n,r){return t.apply(this,arguments)}}(),d=function(){var t=(0,i.Z)((function(t,e,n,r,i,c){var l;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return n.processing||0==t.events.length?[2]:c.readyState?(r((0,s.Z)((0,o.Z)({},n),{processing:!0})),l=t.events.shift(),e((0,s.Z)((0,o.Z)({},t),{events:t.events})),[4,h(l,i,c)]):[2];case 1:return a.sent(),[2]}}))}));return function(e,n,r,i,o,s){return t.apply(this,arguments)}}(),x=function(){var t=(0,i.Z)((function(t,e,n,r,i,o,s){return(0,a.__generator)(this,(function(a){return t.current=new c.Z(s),t.current.onopen=function(){d(e,n,r,i,o,t.current)},t.current.onmessage=function(t){t=JSON.parse(t.data),function(t,e){for(var n in e){for(var r=t,i=n.split(".").slice(1);i.length>0;)r=r[i.shift()];for(var o in e[n])r[o]=e[n][o]}}(e,t.delta),i({processing:!1,state:e,events:t.events})},[2]}))}));return function(e,n,r,i,o,s,a){return t.apply(this,arguments)}}()}},function(t){t.O(0,[588,774,888,179],(function(){return e=7224,t(t.s=e);var e}));var e=t.O();_N_E=e}]);