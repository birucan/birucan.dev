(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{21:function(t,i,e){},30:function(t,i,e){"use strict";e.r(i);var n=e(1),c=e.n(n),o=e(7),d=e.n(o),a=(e(21),e(15),e(2)),s=e(3),r=e(16),l=e(0);function j(t){var i=t.content,e=void 0===i?null:i,c=t.title,o=void 0===c?"":c,d=t.maximized,j=void 0!==d&&d,x=(t.minimized,t.initWidth),b=void 0===x?100:x,h=t.initHeight,u=void 0===h?100:h,p=t.xPos,f=void 0===p?0:p,O=t.yPos,g=void 0===O?0:O,m=t.clickHandle,w=t.zIndex,v=t.id,y=t.active,z=void 0!==y&&y,I=t.style,S=t.handleMinimize,k=t.handleClose,C=t.icon,M=Object(n.useState)({x:f,y:g}),T=Object(s.a)(M,2),W=T[0],H=T[1],D=Object(n.useState)({height:u,width:b}),N=Object(s.a)(D,2),P=N[0],F=N[1],L=Object(n.useState)({x:f,y:g}),A=Object(s.a)(L,2),B=A[0],R=A[1],X=Object(n.useState)({height:u,width:b}),Y=Object(s.a)(X,2),E=Y[0],J=Y[1],K=Object(n.useState)(j),q=Object(s.a)(K,2),G=q[0],Q=q[1],U=Object(n.useState)(!1),V=Object(s.a)(U,2),Z=V[0],$=V[1];return Object(l.jsxs)(r.a,{default:{x:f,y:g,width:b,height:u},position:{x:W.x,y:W.y},size:{height:P.height,width:P.width},onDragStop:function(t,i){H({x:i.x,y:i.y})},onDragStart:function(t,i){!0===G&&(F(E),Q(!1))},onResizeStop:function(t,i,e,n,c){F({height:e.offsetHeight,width:e.offsetWidth})},onMouseDown:function(){return m(v,w)},minWidth:b,minHeight:u,disableDragging:!Z,style:Object(a.a)(Object(a.a)({},I),{},{width:P.width,height:P.height,padding:"2px"}),className:"window",children:[Object(l.jsxs)("div",{className:!0===z?"title-bar":"title-bar inactive",onMouseLeave:function(){$(!1)},onMouseOver:function(){$(!0)},children:[Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(l.jsx)("img",{style:{padding:"0px 0px 0px 0px",margin:"0px 0px 0px 0px"},height:16,width:16,alt:"",src:C}),Object(l.jsxs)("div",{className:"title-bar-text",children:[" ",o]})]}),Object(l.jsxs)("div",{className:"title-bar-controls",onMouseOver:function(t){t.stopPropagation(),$(!1)},children:[Object(l.jsx)("button",{"aria-label":"Minimize",onClick:function(){S(v)}}),Object(l.jsx)("button",{"aria-label":G?"Restore":"Maximize",onClick:function(){return function(){if(G)H(B),F(E),Q(!1);else{R(W),H({x:0,y:0}),J(P);var t={height:window.innerHeight,width:window.innerWidth};F(t),Q(!0)}}()}}),Object(l.jsx)("button",{"aria-label":"Close",onClick:function(t){k(v,t)}})]})]}),Object(l.jsx)("div",{className:"window-body",children:e})]})}e(29);function x(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{style:{textAlign:"center"},children:"Hello I'm Tomas Kavanagh, this will be my portafolio site, it's meant to imitate a functional windows98 desktop, currently a work in progress, for now you can visit my github"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"field-row",style:{justifyContent:"center"},children:Object(l.jsx)("button",{style:{left:100},onClick:function(){window.open("https://github.com/birucan")},children:"github"})})]})}function b(t){var i=t.activeWindows,e=t.handleMinimize,n=t.clickWindow,c={backgroundColor:"#b0b0b0",boxShadow:"inset -1px -1px #ffffff, inset -2px -2px #dfdfdf",padding:"2px 11px 0 13px",outline:"1px dotted #000000",outlineOffset:"-4px"},o={textAlign:"right"};return Object(l.jsx)("div",{style:{background:"#c0c0c0",height:35,width:"100vw",position:"fixed",bottom:0,left:0,borderTop:"2px solid #fff",zIndex:2147483600},children:Object(l.jsxs)("div",{className:"startButtonContainer",style:{display:"flex",flexDirection:"row"},children:[Object(l.jsx)("button",{style:{paddingLeft:8,paddingRight:5,height:32},children:Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(l.jsx)("img",{style:{padding:"0px 8px 0px 0px",margin:"0px 0px 0px 0px"},height:24,width:24,alt:"",src:"icons/start.png"}),Object(l.jsx)("b",{children:"Start"})]})}),Object(l.jsx)("div",{class:"status-bar"}),i.map((function(t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{style:t.currentTop&&!t.minimized?Object(a.a)(Object(a.a)({},c),o):Object(a.a)({},o),onClick:function(){t.minimized?e(t.id):n(t.id,t.zIndex)},children:Object(l.jsxs)("div",{style:{display:"flex",gap:15,flexDirection:"row",alignItems:"center"},children:[Object(l.jsx)("img",{style:{padding:"0px 0px 0px 0px",margin:"0px 0px 0px 0px"},height:24,width:24,alt:"",src:t.icon}),Object(l.jsx)("div",{children:t.title})]})})})}))]})})}function h(){var t=Object(n.useState)([{id:1,window:Object(l.jsx)(x,{},Math.random()),zIndex:1,currentTop:!1,icon:"icons/intro.png",title:"Intro",minimized:!1,initHeight:200,initWidth:200,initX:20,initY:20},{id:2,window:Object(l.jsx)(x,{},Math.random()),zIndex:2,currentTop:!0,title:"Intro2",icon:"icons/intro.png",minimized:!1,initHeight:200,initWidth:200,initX:200,initY:100}]),i=Object(s.a)(t,2),e=i[0],c=i[1],o=Object(n.useState)(2),d=Object(s.a)(o,2),r=d[0],h=d[1],u=Object(n.useState)([]),p=Object(s.a)(u,2),f=p[0],O=p[1],g=Object(n.useState)(Math.random()),m=Object(s.a)(g,2),w=m[0],v=m[1],y=function(){v(Math.random())},z=function(t,i){var n;i.stopPropagation(),h(r-1),c(e.map((function(i){return i.id===t?(n=i,i):i.zIndex>r?Object(a.a)(Object(a.a)({},i),{},{id:i.id,window:i.window,zIndex:i.zIndex-1,currentTop:!1}):i}))),c(e.filter((function(t){return t!==n}))),y()},I=function(t,i){c(e.map((function(e){return e.id===t?Object(a.a)(Object(a.a)({},e),{},{zIndex:r,currentTop:!0}):e.zIndex===r?Object(a.a)(Object(a.a)({},e),{},{zIndex:i,currentTop:!1}):Object(a.a)(Object(a.a)({},e),{},{currentTop:!1})}))),y()},S=function(t){c(e.map((function(i){return i.id===t?Object(a.a)(Object(a.a)({},i),{},{minimized:!i.minimized,currentTop:!i.minimized}):i}))),y()};return Object(n.useEffect)((function(){O(e.map((function(t){return Object(l.jsx)(j,{zIndex:t.zIndex,id:t.id,style:{zIndex:t.zIndex,visibility:t.minimized?"hidden":"visible"},content:t.window,title:t.title,initHeight:t.initHeight,initWidth:t.initWidth,xPos:t.initX,yPos:t.initY,clickHandle:I,handleClose:z,handleMinimize:S,active:t.currentTop,icon:t.icon},t.id)})))}),[w,r]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{backgroundColor:"#008080",minHeight:"100vh",minWidth:"100vw",overflow:"hidden"},children:f}),Object(l.jsx)(b,{activeWindows:e,handleMinimize:S,clickWindow:I})]})}x.displayName="Intro";var u=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(h,{})})},p=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,31)).then((function(i){var e=i.getCLS,n=i.getFID,c=i.getFCP,o=i.getLCP,d=i.getTTFB;e(t),n(t),c(t),o(t),d(t)}))};d.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.a7353071.chunk.js.map