(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i),s=n(5),a=n.n(s),c=(n(10),n(2)),l=n(0);function r(t){var e=t.content,n=void 0===e?null:e,o=t.title,s=void 0===o?"":o,a=t.maximized,r=void 0!==a&&a,d=(t.minimized,t.width),u=void 0===d?100:d,b=t.height,j=void 0===b?100:b,p=(t.xPos,t.yPos,t.setX,t.setY,t.screenMouseState,Object(i.useState)(u)),g=Object(c.a)(p,2),h=g[0],O=g[1],f=Object(i.useState)(j),x=Object(c.a)(f,2),m=x[0],w=x[1],v=Object(i.useState)(r),P=Object(c.a)(v,2),y=(P[0],P[1]),M=Object(i.useState)(""),F=Object(c.a)(M,2),S=F[0],z=F[1],C=Object(i.useState)("up"),N=Object(c.a)(C,2),k=N[0],T=N[1],V=Object(i.useState)("auto"),D=Object(c.a)(V,2),I=D[0],L=D[1];window.addEventListener("mouseup",(function(t){T("up")}));return Object(l.jsxs)("div",{draggable:"false",style:{cursor:I,width:h,height:m,padding:"2px"},className:"window",onMouseDown:function(t){T("down")},onMouseMove:function(t){!function(t){var e=t.target,n=window.getComputedStyle(e,null),i=parseInt(n.getPropertyValue("padding-top")),o=parseFloat(n.getPropertyValue("padding-right")),s=parseFloat(n.getPropertyValue("padding-left")),a=parseFloat(n.getPropertyValue("padding-bottom")),c=e.offsetWidth,l=e.offsetHeight,r=parseFloat(t.clientX),d=parseFloat(t.clientY);r>h-3?(z("right"),L("ew-resize")):r<=3?(z("left"),L("ew-resize")):d>m-3?(z("down"),L("ns-resize")):(z("inside"),L("auto"))}(t),"down"===k&&"right"===S&&O(t.clientX+2),"down"===k&&"down"===S&&w(t.clientY+2)},children:[Object(l.jsxs)("div",{className:"title-bar",onMouseDown:function(t){T("downTitle"),t.stopPropagation()},onMouseUp:function(t){T("upTitle"),t.stopPropagation()},onMouseMove:function(t){console.log("titleclick",t),z("title"),t.stopPropagation()},children:[Object(l.jsx)("div",{className:"title-bar-text",children:s}),Object(l.jsxs)("div",{className:"title-bar-controls",children:[Object(l.jsx)("button",{"aria-label":"Minimize"}),Object(l.jsx)("button",{"aria-label":"Maximize",onClick:function(t){y(!0)}}),Object(l.jsx)("button",{"aria-label":"Close"})]})]}),Object(l.jsxs)("div",{className:"window-body",children:[n,S,Object(l.jsx)("br",{}),k]})]},h)}n(4);function d(){return Object(l.jsx)("div",{styles:{minHeight:"100vh",minWidth:"100vw"},children:Object(l.jsx)("div",{styles:{position:"absolute",top:"300px",left:"400px"},children:Object(l.jsx)(r,{content:Object(l.jsx)(l.Fragment,{}),title:"test",maximized:!1,minimized:!1,width:100,height:100,xPos:0,yPos:0})})})}var u=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(d,{})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),i(t),o(t),s(t),a(t)}))};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.4b92913a.chunk.js.map