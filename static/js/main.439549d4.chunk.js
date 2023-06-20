(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{38:function(t,e,i){},48:function(t,e,i){},49:function(t,e,i){"use strict";i.r(e);var n=i(1),c=i.n(n),o=i(16),s=i.n(o),a=(i(38),i(3)),r=i(2),d=i(33),l=i(0);function p(t){var e=t.content,i=void 0===e?null:e,c=t.title,o=void 0===c?"":c,s=t.maximized,p=void 0!==s&&s,j=(t.minimized,t.initWidth),h=void 0===j?100:j,b=t.initHeight,u=void 0===b?100:b,g=t.xPos,m=void 0===g?0:g,x=t.yPos,f=void 0===x?0:x,O=t.clickHandle,w=t.zIndex,y=t.id,v=t.active,k=void 0!==v&&v,z=t.style,C=t.handleMinimize,T=t.handleClose,I=t.icon,E=t.disableResize,P=void 0!==E&&E,S=Object(n.useState)({x:m,y:f}),R=Object(r.a)(S,2),A=R[0],F=R[1],H=Object(n.useState)({height:u,width:h}),W=Object(r.a)(H,2),L=W[0],D=W[1],N=Object(n.useState)({x:m,y:f}),X=Object(r.a)(N,2),M=X[0],Y=X[1],G=Object(n.useState)({height:u,width:h}),B=Object(r.a)(G,2),U=B[0],J=B[1],K=Object(n.useState)(p),V=Object(r.a)(K,2),_=V[0],q=V[1],Q=Object(n.useState)(!1),Z=Object(r.a)(Q,2),$=Z[0],tt=Z[1];return Object(l.jsxs)(d.a,{default:{x:m,y:f,width:h,height:u},position:{x:A.x,y:A.y},size:{height:L.height,width:L.width},onDragStop:function(t,e){F({x:e.x,y:e.y})},onDragStart:function(t,e){!0===_&&(D(U),q(!1))},onResizeStop:function(t,e,i,n,c){D({height:i.offsetHeight,width:i.offsetWidth})},onMouseDown:function(){return O(y,w)},minWidth:h,minHeight:u,disableDragging:!$,disableResize:P,style:Object(a.a)(Object(a.a)({},z),{},{padding:"2px"}),className:"window",children:[Object(l.jsxs)("div",{className:!0===k?"title-bar":"title-bar inactive",onMouseLeave:function(){tt(!1)},onMouseOver:function(){tt(!0)},children:[Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",maxWidth:L.width-80},children:[Object(l.jsx)("img",{style:{padding:"0px 0px 0px 0px",margin:"0px 0px 0px 0px"},height:16,width:16,alt:"",src:I}),Object(l.jsxs)("div",{className:"title-bar-text",style:{textOverflow:"ellipsis"},children:["\xa0",o]})]}),Object(l.jsxs)("div",{className:"title-bar-controls",onMouseOver:function(t){t.stopPropagation(),tt(!1)},children:[Object(l.jsx)("button",{"aria-label":"Minimize",onClick:function(){C(y)}}),Object(l.jsx)("button",{"aria-label":_?"Restore":"Maximize",onClick:function(){return function(){if(_)F(M),D(U),q(!1);else{Y(A),F({x:0,y:0}),J(L);var t={height:window.innerHeight-38,width:window.innerWidth-10};D(t),q(!0)}}()}}),Object(l.jsx)("button",{"aria-label":"Close",onClick:function(t){T(y,t)}})]})]}),Object(l.jsx)("div",{style:{height:"95%"},className:"window-body",children:i})]})}i(15);var j=function(){return Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(l.jsx)("img",{style:{position:"relative",borderRadius:"50%",maxHeight:150,boxShadow:"5px 5px 2px 1px rgba(0, 0, 0, .28)"},src:"https://s3.amazonaws.com/birucan.dev/gallery/lnkinPP.jpg"}),Object(l.jsxs)("p",{style:{textAlign:"center",fontSize:14},children:[Object(l.jsx)("br",{}),Object(l.jsx)("b",{children:" Hello!"})," ",Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{}),"I'm Tom\xe1s Kavanagh, a Software Engineer with 3 years of expirience.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"This is my portafolio site, it's meant to immitate a functional",Object(l.jsx)("img",{style:{paddingLeft:5,paddingRight:5},height:16,width:16,src:"favicon.ico"}),"Windows 98 desktop. It's built with"," ",Object(l.jsx)("img",{style:{paddingLeft:5,paddingRight:5},height:16,width:16,src:"logo192.png"})," ","React and everything in the desktop can be clicked and used, more to come as I work on it."]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"field-row",style:{justifyContent:"center"},children:[Object(l.jsxs)("button",{style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:function(){window.open("https://s3.amazonaws.com/birucan.dev/Tomas+Kavanagh+Resume.pdf")},children:[Object(l.jsx)("img",{height:16,width:16,src:"icons/textFile.png"}),"\xa0\xa0\xa0Resume"]}),Object(l.jsxs)("button",{style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:function(){window.open("https://github.com/birucan")},children:[Object(l.jsx)("img",{height:16,width:16,src:"icons/github.png"}),"\xa0\xa0\xa0GitHub"]}),Object(l.jsxs)("button",{style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:function(){window.open("https://linkedin.com/in/tomas-kavanagh")},children:[Object(l.jsx)("img",{height:16,width:16,src:"icons/linkedin.png"}),"\xa0\xa0\xa0Linkedin"]})]})]})};j.displayName="Intro";var h=j,b=i(12),u=function(t){var e=t.isOpen,i=void 0!==e&&e,c=t.setIsOpen,o=Object(n.useRef)(null);return function(t,e){var i=function(i){t.current&&!t.current.contains(i.target)&&e()};Object(n.useEffect)((function(){return document.addEventListener("click",i),function(){document.removeEventListener("click",i)}}))}(o,(function(){i&&c(!1)})),Object(l.jsx)(l.Fragment,{children:i?Object(l.jsxs)("div",{ref:o,onClick:function(t){t.stopPropagation(),console.log("inside")},style:{background:"#c0c0c0",height:350,minWidth:200,position:"fixed",bottom:37,left:0,border:"2px solid #fff",zIndex:2147483600,display:"flex",flexDirection:"column",userSelect:"none"},children:[Object(l.jsx)("div",{style:{height:20,borderBottom:"2px solid darkGrey",padding:"8px 0px 8px 8px",fontSize:15},onClick:function(){window.open("https://github.com/birucan/birucan.dev/blob/main/LICENSE")},children:"License"}),Object(l.jsx)("div",{style:{height:20,borderBottom:"2px solid darkGrey",padding:"8px 8px 8px 8px",fontSize:15},onClick:function(){window.open("https://github.com/birucan/birucan.dev/tree/main/front")},children:"Source Code"}),Object(l.jsx)("div",{style:{height:20,borderBottom:"2px solid darkGrey",padding:"8px 8px 8px 8px",fontSize:15},onClick:function(){window.open("https://raw.githubusercontent.com/birucan/birucan.dev/main/front/package.json")},children:"Dependencies"})]}):Object(l.jsx)(l.Fragment,{})})},g=function(t){var e=t.pdf,i=void 0===e?"":e;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("object",{data:i,type:"application/pdf",width:"100%",height:"100%",children:Object(l.jsxs)("p",{children:["Alternative",Object(l.jsx)("a",{href:i,children:" link to the PDF!"})]})})})};g.displayName="PDF Viewer";var m,x,f=g;!function(t){t.EXECUTABLE=".exe",t.JPG=".jpg",t.PNG=".png",t.PDF=".pdf",t.FOLDER="",t.other=""}(m||(m={})),function(t){t.root="root",t.desktop="desktop",t.Intro="Intro",t.Pictures="Pictures",t.PasswordCheck="PasswordCheck",t.SecretPictures="SecretPictures",t.testFolder2="testFolder2",t.testFolder="testFolder",t.ImALoop="ImALoop",t.Portafolio="Portafolio",t.TestApp="TestApp",t.Resume="Resume",t.brooklyn="brooklyn",t.cat="cat",t.cat2="cat2",t.catan="catan",t.linkedin="linkedin",t.paella="paella",t.spooki="spooki",t.NEAT="NEAT",t.smwAgent="smwAgent",t.birucancc="birucancc",t.threejs="threejs",t.rusty="rusty"}(x||(x={}));var O=i(9),w=i(5),y=i(19),v=i.n(y),k=function(){var t=Object(n.useState)(""),e=Object(r.a)(t,2),i=e[0],c=e[1];return Object(l.jsxs)("div",{style:{justifyContent:"center",position:"relative"},children:[Object(l.jsx)("div",{style:{textAlign:"center",overflowY:"scroll",height:"100px",maxHeight:"100px"},children:Object(l.jsx)("p",{style:{textAlign:"center"},children:i})}),Object(l.jsxs)("div",{className:"field-row",style:{justifyContent:"center",marginTop:"20%"},children:[Object(l.jsx)("button",{style:{left:100},onClick:function(){c(i+"\ud83e\udd20")},children:"Add Cowboy \ud83e\udd20"}),Object(l.jsx)("button",{style:{left:100},onClick:function(){c(i+"\ud83d\udc04"),new Audio("https://s3.amazonaws.com/birucan.dev/moo.wav").play()},children:"Add Cow \ud83d\udc04"})]})]})};k.displayName="Test";var z,C=k,T=function(t){var e=t.file,i=Object(n.useState)(""),c=Object(r.a)(i,2),o=c[0],s=c[1];return Object(l.jsxs)("center",{children:[Object(l.jsx)("p",{style:{textAlign:"center"},children:"Password Protected!"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"password",value:o,onChange:function(t){s(t.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(){"admin"===o&&A(R(e))},children:"Enter"})]})},I=function(t){var e=t.src;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("img",{src:e,style:{width:"100%",height:"auto"}})})},E=(i(48),function(t){var e=t.images,i=void 0===e?[]:e,c=Object(n.useState)(0),o=Object(r.a)(c,2),s=o[0],a=o[1],d=Object(n.useState)("fade"),p=Object(r.a)(d,2),j=p[0],h=p[1];return Object(l.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(l.jsx)("button",{style:{height:25,marginRight:5},onClick:function(){return h("fade hide"),void setTimeout((function(){a(s>0?s-1:i.length-1),h("fade")}),500)},children:"<"}),Object(l.jsx)("img",{className:j,style:{flexGrow:1,maxHeight:250},src:i[s]}),Object(l.jsx)("button",{style:{height:25,marginLeft:5},onClick:function(){return h("fade hide"),void setTimeout((function(){s<i.length-1?a(s+1):a(0),h("fade")}),500)},children:">"})]})}),P=function(t){var e=t.images,i=t.title,n=t.text,c=t.hasSourceCode,o=t.sourceCode,s=t.isHosted;t.hostLink;return Object(l.jsxs)(l.Fragment,{children:[0===e.length?Object(l.jsx)(l.Fragment,{}):Object(l.jsx)(E,{images:e}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(l.jsx)("b",{style:{paddingTop:20,fontSize:18},children:i}),Object(l.jsx)("p",{style:{paddingLeft:75,paddingRight:75,fontSize:13},children:n}),Object(l.jsxs)("div",{className:"field-row",style:{justifyContent:"center"},children:[c?Object(l.jsxs)("button",{style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:function(){window.open(o)},children:[Object(l.jsx)("img",{height:16,width:16,src:"icons/github.png"}),"\xa0\xa0\xa0Source Code"]}):Object(l.jsx)(l.Fragment,{}),s?Object(l.jsxs)("button",{style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:function(){window.open(o)},children:[Object(l.jsx)("img",{height:16,width:16,src:"icons/ie.png"}),"\xa0\xa0\xa0Project Link"]}):Object(l.jsx)(l.Fragment,{})]})]})]})},S=(z={},Object(w.a)(z,x.root,{type:m.FOLDER,dir:[x.desktop]}),Object(w.a)(z,x.desktop,{type:m.FOLDER,icon:"icons/desktop.png",dir:[x.Intro,x.Portafolio,x.testFolder2,x.Resume,x.Pictures,x.TestApp]}),Object(w.a)(z,x.Pictures,{title:"Pictures",type:m.FOLDER,icon:"icons/camera.png",dir:[x.linkedin,x.paella,x.cat,x.cat2,x.catan,x.brooklyn,x.PasswordCheck],initHeight:225,initWidth:200}),Object(w.a)(z,x.PasswordCheck,{title:"SecretPictures",type:m.EXECUTABLE,icon:"icons/padlock.png",window:Object(l.jsx)(T,{file:x.SecretPictures}),minimized:!1,initHeight:200,initWidth:200,initX:20,initY:20,dir:[x.SecretPictures]}),Object(w.a)(z,x.SecretPictures,{title:"SecretPictures",type:m.FOLDER,icon:"icons/camera.png",dir:[x.spooki]}),Object(w.a)(z,x.testFolder,{title:"Folder1",type:m.FOLDER,icon:"icons/folder.png",dir:[x.ImALoop]}),Object(w.a)(z,x.ImALoop,{title:"ImALoop",type:m.FOLDER,icon:"icons/folder.png",dir:[x.testFolder]}),Object(w.a)(z,x.testFolder2,{title:"Folder2",type:m.FOLDER,icon:"icons/folder.png",dir:[x.Resume,x.testFolder]}),Object(w.a)(z,x.Portafolio,{title:"Portfolio",icon:"icons/folderFilled.png",type:m.FOLDER,dir:[x.birucancc,x.NEAT,x.smwAgent,x.threejs,x.rusty]}),Object(w.a)(z,x.Intro,{type:m.EXECUTABLE,currentTop:!1,window:Object(l.jsx)(h,{}),icon:"icons/intro.png",title:"Intro",minimized:!1,initHeight:440,initWidth:285,initX:20,initY:20}),Object(w.a)(z,x.TestApp,{type:m.EXECUTABLE,window:Object(l.jsx)(C,{}),currentTop:!1,icon:"icons/cowboy.png",title:"Serious Test",minimized:!1,initHeight:225,initWidth:200,initX:20,initY:20}),Object(w.a)(z,x.Resume,{type:m.PDF,window:Object(l.jsx)(f,{pdf:"https://s3.amazonaws.com/birucan.dev/Tomas+Kavanagh+Resume.pdf"}),currentTop:!1,icon:"icons/textFile.png",title:"Resume",minimized:!1,initHeight:800,initWidth:700,initX:20,initY:20}),Object(w.a)(z,x.NEAT,{type:m.EXECUTABLE,window:Object(l.jsx)(P,{images:["https://s3.amazonaws.com/birucan.dev/gallery/projects/NEAT1.PNG","https://s3.amazonaws.com/birucan.dev/gallery/projects/NEAT2.jpg"],title:"NEAT Python",text:"OOP Python implementation created based on a Java implementation, created as as a part of my final senior project, includes a debug GUI that displays the current neural net generated and let the user add nodes, connections and mutations",hasSourceCode:!0,sourceCode:"https://github.com/birucan/NEAT_py",isHosted:!1}),currentTop:!1,icon:"icons/python.png",title:"NEAT Python",minimized:!1,initHeight:500,initWidth:700,initX:20,initY:20}),Object(w.a)(z,x.smwAgent,{type:m.EXECUTABLE,window:Object(l.jsx)(P,{images:["https://s3.amazonaws.com/birucan.dev/gallery/projects/smw1.png","https://s3.amazonaws.com/birucan.dev/gallery/projects/smw2.png","https://s3.amazonaws.com/birucan.dev/gallery/projects/smw3.png"],title:"Super Mario World Agent",text:"AI Agent using a Chained NEAT generated neural networks, to select a neural network, also generated with NEAT, to solve different aspects and level of the first world of Super Mario World.It uses a grayscale downsize image of each frame of the game as input, using OpenCV, as well as values extracted from RAM, facilitated from Open AI's gym retro to generate the controller's outputs. This project was part of my Senior project ",hasSourceCode:!0,sourceCode:"https://github.com/birucan/SuperMarioWorldAgent/",isHosted:!1}),currentTop:!1,icon:"icons/smw.png",title:"SMW Agent",minimized:!1,initHeight:500,initWidth:700,initX:20,initY:20}),Object(w.a)(z,x.birucancc,{type:m.EXECUTABLE,window:Object(l.jsx)(P,{images:["https://s3.amazonaws.com/birucan.dev/gallery/cc1.png","https://s3.amazonaws.com/birucan.dev/gallery/cc2.png","https://s3.amazonaws.com/birucan.dev/gallery/cc3.png","https://s3.amazonaws.com/birucan.dev/gallery/cc4.png"],title:"birucan.cc",text:"If you're reading this, you are likely already on the site. This potafolio site was built from scratch using React and Recoil. It has a file managment system that uses an enum keyed map to get the window information, new apps or files can be added with just a few lines added to this map. Recoil is used to manage the active windows, their order and state. Credit to the 98.css project for providing some of the styles.",hasSourceCode:!0,sourceCode:"https://github.com/birucan/birucan.dev/",isHosted:!0,hostLink:"https://birucan.cc/"}),currentTop:!1,icon:"favicon.ico",title:"birucan.cc",minimized:!1,initHeight:500,initWidth:700,initX:20,initY:20}),Object(w.a)(z,x.threejs,{type:m.EXECUTABLE,window:Object(l.jsx)(P,{images:["https://s3.amazonaws.com/birucan.dev/gallery/three1.png","https://s3.amazonaws.com/birucan.dev/gallery/three2.jpg","https://s3.amazonaws.com/birucan.dev/gallery/three3.jpg","https://s3.amazonaws.com/birucan.dev/gallery/three4.png"],title:"Three.js",text:"Small Three.js projects done during a masters class about 3D Graphics.",hasSourceCode:!0,sourceCode:"https://gist.github.com/birucan/5dca1ac6c325a5df4fe030c0a2bc5bcf",isHosted:!1}),currentTop:!1,icon:"icons/three.png",title:"Three.js",minimized:!1,initHeight:500,initWidth:700,initX:20,initY:20}),Object(w.a)(z,x.rusty,{type:m.EXECUTABLE,window:Object(l.jsx)(P,{images:[],title:"Rusty Chat",text:"Current project, currently working on a Rust backend and a react front to make a live chat app! demo coming soon",hasSourceCode:!1,sourceCode:"https://gist.github.com/birucan/5dca1ac6c325a5df4fe030c0a2bc5bcf",isHosted:!1}),currentTop:!1,icon:"icons/rust.png",title:"Rusty Chat",minimized:!1,initHeight:300,initWidth:700,initX:20,initY:20}),Object(w.a)(z,x.brooklyn,{type:m.JPG,window:Object(l.jsx)(I,{src:"https://s3.amazonaws.com/birucan.dev/gallery/brooklyn.jpg"}),currentTop:!1,icon:"icons/image.png",title:"brooklyn.jpg",minimized:!1,initHeight:468,initWidth:262,initX:20,initY:20}),Object(w.a)(z,x.cat,{type:m.JPG,window:Object(l.jsx)(I,{src:"https://s3.amazonaws.com/birucan.dev/gallery/cat.jpg"}),currentTop:!1,icon:"icons/image.png",title:"cat.jpg",minimized:!1,initHeight:370,initWidth:600,initX:20,initY:20}),Object(w.a)(z,x.cat2,{type:m.JPG,window:Object(l.jsx)(I,{src:"https://s3.amazonaws.com/birucan.dev/gallery/cat2.jpg"}),currentTop:!1,icon:"icons/image.png",title:"cat2.jpg",minimized:!1,initHeight:480,initWidth:353,initX:20,initY:20}),Object(w.a)(z,x.linkedin,{type:m.JPG,window:Object(l.jsx)(I,{src:"https://s3.amazonaws.com/birucan.dev/gallery/lnkinPP.jpg"}),currentTop:!1,icon:"icons/image.png",title:"linkedin.jpg",minimized:!1,initHeight:400,initWidth:400,initX:20,initY:20}),Object(w.a)(z,x.paella,{type:m.JPG,window:Object(l.jsx)(I,{src:"https://s3.amazonaws.com/birucan.dev/gallery/paella.jpg"}),currentTop:!1,icon:"icons/image.png",title:"paella.jpg",minimized:!1,initHeight:468,initWidth:263,initX:20,initY:20}),Object(w.a)(z,x.catan,{type:m.JPG,window:Object(l.jsx)(I,{src:"https://s3.amazonaws.com/birucan.dev/gallery/catan.jpg"}),currentTop:!1,icon:"icons/image.png",title:"catan.jpg",minimized:!1,initHeight:416,initWidth:312,initX:20,initY:20}),Object(w.a)(z,x.spooki,{type:m.JPG,window:Object(l.jsx)(I,{src:"https://s3.amazonaws.com/birucan.dev/gallery/spooki.jpg"}),currentTop:!1,icon:"icons/image.png",title:"spooki.jpg",minimized:!1,initHeight:560,initWidth:312,initX:20,initY:20}),z),R=function(t){return S[t]},A=function(t){var e=Object(y.getRecoil)(L);if(t.type===m.FOLDER){var i=e.map((function(t){return Object(a.a)(Object(a.a)({},t),{},{zIndex:t.zIndex?t.zIndex:e.length,minimized:!1,currentTop:!1})})),n=Object(a.a)(Object(a.a)({},t),{},{title:t.title?t.title:"File Explorer",window:Object(l.jsx)(W,{currentFolder:t.dir?t.dir:void 0}),id:e.length+1,zIndex:e.length+1,currentTop:!0,initHeight:t.initHeight?t.initHeight:200,initWidth:t.initWidth?t.initWidth:200,initX:20+20*Math.random(),initY:20+20*Math.random(),minimized:!1});Object(y.setRecoil)(L,[].concat(Object(O.a)(i),[n]))}else{var c=e.map((function(t){return Object(a.a)(Object(a.a)({},t),{},{id:t.id,window:t.window,zIndex:t.zIndex?t.zIndex:e.length,minimized:!1,currentTop:!1})})),o=Object(a.a)(Object(a.a)({},t),{},{id:e.length+1,zIndex:e.length+1,currentTop:!0});Object(y.setRecoil)(L,[].concat(Object(O.a)(c),[o]))}},F=function(t){var e=t.currentFolder,i=void 0===e?[x.root]:e,c=Object(n.useState)(),o=Object(r.a)(c,2),s=o[0],a=o[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{onClick:function(){a("")},style:{paddingLeft:10,paddingRight:10,display:"flex",flexFlow:"wrap",height:"100%",width:"100%",alignContent:"flex-start",overflow:"hidden"},children:i.map((function(t){var e=R(t);return Object(l.jsxs)("div",{style:{position:"relative",display:"flex",outline:"none",background:"none",border:"none",color:"initial",textDecoration:"none",padding:"1px 7px 2px initial",margin:"3px",width:"52px",height:"58px",textAlign:"center",flexDirection:"column",alignItems:"center",zIndex:0},onClick:function(e){e.stopPropagation(),a(t)},onDoubleClick:function(){A(R(t))},children:[Object(l.jsx)("img",{height:32,width:32,alt:"",src:e.icon?e.icon:"icons/folder.png",style:{filter:t===s?"hue-rotate(180deg) opacity(0.5)":"initial"}}),Object(l.jsx)("div",{style:{maxHeight:22,padding:"2px 3px",maxWidth:"100%",textOverflow:"ellipsis",overflow:"hidden",display:"inline-block",position:"absolute",marginTop:2,top:33,filter:t===s?"hue-rotate(180deg) opacity(0.75)":"initial"},children:e.title})]})}))})})};F.displayName="Intro";var H,W=F;!function(t){t.CURRENT_WINDOWS="currentWindows"}(H||(H={}));var L=Object(b.atom)({key:H.CURRENT_WINDOWS,default:[{id:2,type:m.EXECUTABLE,window:Object(l.jsx)(W,{currentFolder:[x.birucancc,x.NEAT,x.smwAgent,x.threejs,x.rusty]}),zIndex:2,currentTop:!1,icon:"icons/folderFilled.png",title:"Portfolio",minimized:!1,initHeight:200,initWidth:200,initX:100,initY:520},{id:3,type:m.EXECUTABLE,window:Object(l.jsx)(h,{},Math.random()),zIndex:3,currentTop:!0,icon:"icons/intro.png",title:"Intro",minimized:!1,initHeight:440,initWidth:285,initX:70,initY:68},{id:1,type:m.PDF,window:Object(l.jsx)(f,{pdf:"https://s3.amazonaws.com/birucan.dev/Tomas+Kavanagh+Resume.pdf"},Math.random()),zIndex:1,currentTop:!1,title:"PDF Viewer",icon:"icons/textFile.png",minimized:!1,initHeight:800,initWidth:700,initX:340,initY:50}]}),D=function(t){var e=t.handleMinimize,i=t.clickWindow,c=Object(b.useRecoilState)(L),o=Object(r.a)(c,2),s=o[0],d=(o[1],Object(n.useState)(!1)),p=Object(r.a)(d,2),j=p[0],h=p[1],g={backgroundColor:"#b0b0b0",boxShadow:"inset -1px -1px #ffffff, inset -2px -2px #dfdfdf",padding:"2px 11px 0 13px",outline:"1px dotted #000000",outlineOffset:"-4px"},m={textAlign:"right"},x={paddingLeft:8,paddingRight:5,height:32};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{isOpen:j,setIsOpen:h}),Object(l.jsx)("div",{style:{background:"#c0c0c0",height:35,width:"100vw",position:"fixed",bottom:0,left:0,borderTop:"2px solid #fff",zIndex:2147483599},children:Object(l.jsxs)("div",{className:"startButtonContainer",style:{display:"flex",flexDirection:"row"},children:[Object(l.jsx)("button",{onClick:function(){return h(!j)},style:j?Object(a.a)(Object(a.a)({},x),g):Object(a.a)({},x),children:Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(l.jsx)("img",{style:{padding:"0px 8px 0px 0px",margin:"0px 0px 0px 0px"},height:24,width:24,alt:"",src:"icons/start.png"}),Object(l.jsx)("b",{children:"Start"})]})}),Object(l.jsx)("div",{class:"status-bar"}),s.map((function(t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{style:t.currentTop&&!t.minimized?Object(a.a)(Object(a.a)({},g),m):Object(a.a)({},m),onClick:function(){t.minimized?e(t.id):i(t.id,t.zIndex)},children:Object(l.jsxs)("div",{style:{display:"flex",gap:15,flexDirection:"row",alignItems:"center"},children:[Object(l.jsx)("img",{style:{maxHeight:"24px",maxWidth:"24px",padding:"0px 0px 0px 0px",margin:"0px 0px 0px 0px"},height:24,width:24,alt:"",src:t.icon}),Object(l.jsx)("div",{children:t.title})]})})})}))]})})]})},N=function(){var t=S[x.desktop].dir,e=Object(n.useState)(),i=Object(r.a)(e,2),c=i[0],o=i[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{onClick:function(){o("")},style:{paddingLeft:10,paddingRight:10,display:"flex",flexFlow:"column wrap",height:"100%",width:"100%",alignContent:"flex-start"},children:t.map((function(t){var e=R(t),i=e.icon?e.icon:"icons/folder.png";return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{style:{position:"relative",display:"flex",outline:"none",background:"none",border:"none",color:"initial",textDecoration:"none",padding:"1px 7px 2px initial",margin:"3px 0px 10px 0px",width:"52px",minHeight:"58px",textAlign:"center",flexDirection:"column",alignItems:"center",zIndex:0},onClick:function(e){e.stopPropagation(),o(t)},onDoubleClick:function(){A(e)},children:[Object(l.jsx)("img",{height:32,width:32,alt:"",src:i,style:{filter:t===c?"hue-rotate(180deg) opacity(0.5)":"initial"}}),Object(l.jsx)("div",{style:{maxHeight:22,padding:"2px 3px",whiteSpace:"initial",display:"inline-block",position:"absolute",marginTop:2,top:33,filter:t===c?"hue-rotate(180deg) opacity(0.75)":"initial",color:"white"},children:e.title})]})})}))})})},X=function(){return Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(l.jsx)("img",{style:{position:"relative",borderRadius:"50%",maxHeight:150,boxShadow:"5px 5px 2px 1px rgba(0, 0, 0, .28)"},src:"https://s3.amazonaws.com/birucan.dev/gallery/lnkinPP.jpg"}),Object(l.jsxs)("p",{style:{textAlign:"center",fontSize:14},children:[Object(l.jsx)("br",{}),Object(l.jsx)("b",{children:" Hello!"})," ",Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{}),"I'm Tom\xe1s Kavanagh, a Software Engineer with 3 years of expirience.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"This is my portfolio site, it's meant to immitate a functional",Object(l.jsx)("img",{style:{paddingLeft:5,paddingRight:5},height:16,width:16,src:"favicon.ico"}),"Windows 98 desktop. It's built with"," ",Object(l.jsx)("img",{style:{paddingLeft:5,paddingRight:5},height:16,width:16,src:"logo192.png"})," ","React and everything in the desktop can be clicked and used.",Object(l.jsxs)("b",{children:[" ","I believe you are on a mobile device, so this is a very simple version of the site, If you want to see the full site, please visit birucan.cc on a desktop!"]})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"field-row",style:{justifyContent:"center"},children:[Object(l.jsxs)("button",{style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:function(){window.open("https://s3.amazonaws.com/birucan.dev/Tomas+Kavanagh+Resume.pdf")},children:[Object(l.jsx)("img",{height:16,width:16,src:"icons/textFile.png"}),"\xa0\xa0\xa0Resume"]}),Object(l.jsxs)("button",{style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:function(){window.open("https://linkedin.com/in/tomas-kavanagh")},children:[Object(l.jsx)("img",{height:16,width:16,src:"icons/github.png"}),"\xa0\xa0\xa0GitHub"]}),Object(l.jsxs)("button",{style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:function(){window.open("https://github.com/birucan")},children:[Object(l.jsx)("img",{height:16,width:16,src:"icons/linkedin.png"}),"\xa0\xa0\xa0Linkedin"]})]})]})};X.displayName="IntroMobileWindow";var M=X,Y=function(){var t=Object(b.useRecoilState)(L),e=Object(r.a)(t,2),i=e[0],c=e[1],o=Object(n.useState)([]),s=Object(r.a)(o,2),d=s[0],j=s[1],h=Object(n.useState)(Math.random()),u=Object(r.a)(h,2),g=u[0],m=u[1],x=function(){m(Math.random())},f=function(t,e){var n;e.stopPropagation(),c(i.map((function(e){return e.id===t?(n=e,e):e.zIndex>i.length?Object(a.a)(Object(a.a)({},e),{},{id:e.id,window:e.window,zIndex:e.zIndex-1,currentTop:!1}):e}))),c(i.filter((function(t){return t!==n}))),x()},O=Object(n.useState)(p.innerWidth),w=Object(r.a)(O,2),y=w[0],v=w[1],k=Object(n.useState)(p.height),z=Object(r.a)(k,2),C=(z[0],z[1]);function T(){v(window.innerWidth),C(window.height)}Object(n.useEffect)((function(){return window.addEventListener("resize",T),function(){window.removeEventListener("resize",T)}}),[]);var I=y<=768,E=function(t,e){c(i.map((function(n){return n.id===t?Object(a.a)(Object(a.a)({},n),{},{zIndex:i.length,currentTop:!0}):n.zIndex===i.length?Object(a.a)(Object(a.a)({},n),{},{zIndex:e,currentTop:!1}):Object(a.a)(Object(a.a)({},n),{},{currentTop:!1})}))),x()},P=function(t){c(i.map((function(e){return e.id===t?Object(a.a)(Object(a.a)({},e),{},{minimized:!e.minimized,currentTop:!e.minimized}):e}))),x()};return Object(n.useEffect)((function(){j(i.map((function(t){return Object(l.jsx)(p,{zIndex:t.zIndex,id:t.id,style:{zIndex:t.zIndex,visibility:t.minimized?"hidden":"visible"},content:t.window,title:t.title,initHeight:t.initHeight,initWidth:t.initWidth,xPos:t.initX,yPos:t.initY,clickHandle:E,handleClose:f,handleMinimize:P,active:t.currentTop,icon:t.icon},t.id)})))}),[g,i.length]),Object(l.jsx)(l.Fragment,{children:I?Object(l.jsx)(p,{zIndex:8,id:Math.random(),style:{zIndex:8,visibility:"visible"},content:Object(l.jsx)(M,{}),title:"Mobile Intro",initHeight:700,initWidth:y,xPos:0,yPos:0,clickHandle:function(){},handleClose:function(){},handleMinimize:function(){},active:!0,icon:"favicon.ico"},Math.random()):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{style:{backgroundColor:"#008080",minHeight:"100vh",minWidth:"100vw",overflow:"hidden"},children:[d,Object(l.jsx)(N,{})]}),Object(l.jsx)(D,{activeWindows:i,handleMinimize:P,clickWindow:E})]})})};var G=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(Y,{})})},B=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,50)).then((function(e){var i=e.getCLS,n=e.getFID,c=e.getFCP,o=e.getLCP,s=e.getTTFB;i(t),n(t),c(t),o(t),s(t)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsxs)(b.RecoilRoot,{children:[Object(l.jsx)(v.a,{}),Object(l.jsx)(G,{})]})}),document.getElementById("root")),B()}},[[49,1,2]]]);
//# sourceMappingURL=main.439549d4.chunk.js.map