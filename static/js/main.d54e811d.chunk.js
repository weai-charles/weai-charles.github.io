(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{22:function(e,t,a){e.exports=a(40)},32:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},33:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.a622fc5d.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},37:function(e,t,a){e.exports=a.p+"static/media/predict_1.b4fc21f2.png"},38:function(e,t,a){e.exports=a.p+"static/media/predict_2.7d1f6d9c.png"},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(20),l=a.n(n),s=a(4),o=a(7),c=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(s.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},d=a(11),u=a(5),v=a.n(u),p=a(16),b=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(d.a)(a,2),l=n[0],s=n[1],o=Object(i.useState)([]),c=Object(d.a)(o,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),b())}),[m]);var h=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){h(),b()}),30),E=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),b()}),[l]),r.a.createElement(r.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var h=b,f=a(1),E=a.n(f),g=(a(10),function(e){var t=e.className,a=e.src,n=e.width,l=e.height,s=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){h(b.current)}),[]);var h=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},o,{ref:b,className:t,src:a,width:n,height:l,alt:s,onLoad:function(){p(!0)}}))});g.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var N=g,O=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,l=e.hideSignin,s=e.bottomOuterDivider,o=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),v=Object(d.a)(u,2),p=v[0],b=v[1],h=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&g(),document.addEventListener("keydown",O),document.addEventListener("click",w),function(){document.removeEventListener("keydown",O),document.addEventListener("click",w),N()}}));var g=function(){document.body.classList.add("off-nav-is-active"),h.current.style.maxHeight=h.current.scrollHeight+"px",b(!0)},N=function(){document.body.classList.remove("off-nav-is-active"),h.current&&(h.current.style.maxHeight=null),b(!1)},O=function(e){p&&27===e.keyCode&&N()},w=function(e){h.current&&p&&!h.current.contains(e.target)&&e.target!==f.current&&N()},D=E()("site-header",s&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:D}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:E()("site-header-inner",o&&"has-bottom-divider")},!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:p?N:g},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:h,className:E()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null)),!l&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:info@we-ai.net",className:"button button-primary button-wide-mobile button-sm",onClick:N},"Contact Us")))))))))};O.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var w=O,D=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,n=Object(c.a)(e,["className","topOuterDivider","topDivider"]),l=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},n,{className:l}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:E()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"}),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement("div",{className:"footer-copyright"},"Copyright \xa9 2020 WeAI. All Rights Reserved")))))};D.defaultProps={topOuterDivider:!1,topDivider:!1};var j=D,x=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(j,null))},y=a(3),C={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},k={types:Object(y.a)({},C.types),defaults:Object(y.a)({},C.defaults)},L={types:Object(y.a)(Object(y.a)({},C.types),{},{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(y.a)(Object(y.a)({},C.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},A={types:Object(y.a)(Object(y.a)({},C.types),{},{pushLeft:v.a.bool}),defaults:Object(y.a)(Object(y.a)({},C.defaults),{},{pushLeft:!1})},F=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,l=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=E()("button",i&&"button-".concat(i),n&&"button-".concat(n),l&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),v=a;return r.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};F.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var P=function(e){var t=e.className,a=e.children,n=e.handleClose,l=e.show,s=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&n(e)},p=function(e){e.stopPropagation()},b=E()("modal",l&&"is-active",o&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("div",Object.assign({},d,{className:b,onClick:n}),r.a.createElement("div",{className:"modal-inner",onClick:p},o?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:o})):r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),r.a.createElement("div",{className:"modal-content"},a)))))};P.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var B=P,H=Object(y.a)({},k.defaults),S=function(e){var t=e.className,n=e.topOuterDivider,l=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),b=Object(d.a)(p,2),h=b[0],f=b[1],g=E()("hero section center-content",n&&"has-top-divider",l&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t),O=E()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},v,{className:g}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:O},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("span",{className:"text-color-primary"},"WeAI")),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"We create ",r.a.createElement("span",{className:"text-color-primary"},"AI")," that changes the world",r.a.createElement("br",null),"Contact ",r.a.createElement("span",{className:"text-color-primary"},r.a.createElement("a",{href:"mailto:info@we-ai.net"},"info@we-ai.net"))," ASAP!"))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},r.a.createElement(N,{className:"has-shadow",src:a(33),alt:"Hero",width:896,height:504}))),r.a.createElement(B,{id:"video-modal",show:h,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};S.defaultProps=H;var I=S,T=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,l=Object(c.a)(e,["className","data","children","tag"]),s=E()("section-header",t),o=n;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},l,{className:s}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(o,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};T.defaultProps={children:null,tag:"h2"};var R=T,z=Object(y.a)({},A.defaults),q=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("features-tiles section",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),p=E()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",s&&"has-bottom-divider"),b=E()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(R,{data:{title:"AI-Driven Implementation",paragraph:"AI is transforming how we do business at an unprecedented pace, but the transition to becoming AI-driven is easier than you think. Now is the time to invest and remain at the top of your game"},className:"center-content"}),r.a.createElement("div",{className:b},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(N,{src:a(34),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Collect Data"),r.a.createElement("p",{className:"m-0 text-sm"})))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(N,{src:a(35),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Data Analyze"),r.a.createElement("p",{className:"m-0 text-sm"})))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(N,{src:a(36),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Prediction - Time series"),r.a.createElement("p",{className:"m-0 text-sm"}))))))))};q.defaultProps=z;var M=q,W=Object(y.a)({},L.defaults),G=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,b=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),h=E()("features-split section",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),f=E()("features-split-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),g=E()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return r.a.createElement("section",Object.assign({},b,{className:h}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:f},r.a.createElement(R,{data:{title:"What we have",paragraph:"We do not have data, but we have high AI tech! We can predict any kind of time-series data you have"},className:"center-content"}),r.a.createElement("div",{className:g},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Time-Series example 1"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Vehicle OBD data prediction"),r.a.createElement("p",{className:"m-0"},"left - true data | right - predicted data")),r.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(N,{src:a(37),alt:"Features split 01",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Time-Series example 1"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Vehicle OBD data prediction"),r.a.createElement("p",{className:"m-0"},"left - true data | right - predicted data")),r.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(N,{src:a(38),alt:"Features split 02",width:528,height:396})))))))};G.defaultProps=W;var V=G,J=Object(y.a)({},A.defaults),_=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=E()("testimonial-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider"),p=E()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(R,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName")))))))))};_.defaultProps=J;var U=function(e){var t=e.className,a=e.children,i=e.labelHidden,n=e.id,l=Object(c.a)(e,["className","children","labelHidden","id"]),s=E()("form-label",i&&"screen-reader",t);return r.a.createElement("label",Object.assign({},l,{className:s,htmlFor:n}),a)};U.defaultProps={children:null,labelHidden:!1,id:null};var $=U,K=function(e){var t=e.children,a=e.className,i=e.status,n=Object(c.a)(e,["children","className","status"]),l=E()("form-hint",i&&"text-color-".concat(i),a);return r.a.createElement("div",Object.assign({},n,{className:l}),t)};K.defaultProps={children:null,status:!1};var Q=K,X=function(e){var t=e.className,a=e.children,i=e.label,n=e.labelHidden,l=e.type,s=e.name,o=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,b=e.placeholder,h=e.rows,f=e.hint,g=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=E()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),O=E()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),w="textarea"===l?"textarea":"input";return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement($,{labelHidden:n,id:g.id},i),r.a.createElement("div",{className:N},r.a.createElement(w,Object.assign({},g,{type:"textarea"!==l?l:null,className:O,name:s,disabled:m,value:d,placeholder:b,rows:"textarea"===l?h:null})),a),f&&r.a.createElement(Q,{status:o},f))};X.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var Y=Object(y.a)(Object(y.a)({},k.defaults),{},{split:!1}),Z=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t);E()("cta-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider",m&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"}))};Z.defaultProps=Y;var ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{className:"illustration-section-01"}),r.a.createElement(M,null),r.a.createElement(V,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}))},te=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){t.pathname;document.body.classList.add("is-loaded"),e.current.init()}),[t]),r.a.createElement(h,{ref:e,children:function(){return r.a.createElement(s.c,null,r.a.createElement(m,{exact:!0,path:"/",component:ee,layout:x}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);var ae=Object(o.a)();l.a.render(r.a.createElement(s.b,{history:ae},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.d54e811d.chunk.js.map