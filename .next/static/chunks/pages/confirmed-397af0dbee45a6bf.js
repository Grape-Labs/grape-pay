(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[377],{5627:function(e){e.exports=function(e,r,t){return r<t?e<r?r:e>t?t:e:e<t?t:e>r?r:e}},5644:function(e,r,t){"use strict";const n=t(8912),a=t(5985),o=t(4450),i=t(5627);e.exports=function(e){return e=e.map((function(e){if("rgb"!=(e=n(e)).space){if("hsl"!=e.space)throw"c.spacespace is not supported.";e.values=a.rgb(e.values)}return e.values.push(e.alpha),e.values})),function(r,t){t=t||o,r=i(r,0,1);var n=(e.length-1)*r,a=Math.floor(n),s=Math.ceil(n);r=n-a;var l=e[a],u=e[s],c=l.map((function(e,n){return e=t(e,u[n],r),n<3&&(e=Math.round(e)),e}));return 1===c[3]?"rgb("+c.slice(0,3)+")":"rgba("+c+")"}}},8874:function(e){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8912:function(e,r,t){"use strict";var n=t(8874);e.exports=function(e){var r,t,o=[],i=1;if("string"===typeof e)if(n[e])o=n[e].slice(),t="rgb";else if("transparent"===e)i=0,t="rgb",o=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var s=(c=e.slice(1)).length;i=1,s<=4?(o=[parseInt(c[0]+c[0],16),parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16)],4===s&&(i=parseInt(c[3]+c[3],16)/255)):(o=[parseInt(c[0]+c[1],16),parseInt(c[2]+c[3],16),parseInt(c[4]+c[5],16)],8===s&&(i=parseInt(c[6]+c[7],16)/255)),o[0]||(o[0]=0),o[1]||(o[1]=0),o[2]||(o[2]=0),t="rgb"}else if(r=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var l=r[1],u="rgb"===l,c=l.replace(/a$/,"");t=c;s="cmyk"===c?4:"gray"===c?1:3;o=r[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,r){if(/%$/.test(e))return r===s?parseFloat(e)/100:"rgb"===c?255*parseFloat(e)/100:parseFloat(e);if("h"===c[r]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==a[e])return a[e]}return parseFloat(e)})),l===c&&o.push(1),i=u||void 0===o[s]?1:o[s],o=o.slice(0,s)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(o=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),t=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(o=[e[0],e[1],e[2]],t="rgb",i=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(t="rgb",o=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(t="hsl",o=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),i=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(i/=100)):(t="rgb",o=[e>>>16,(65280&e)>>>8,255&e]);return{space:t,values:o,alpha:i}};var a={red:0,orange:60,yellow:120,green:180,blue:240,purple:300}},5985:function(e,r,t){"use strict";var n=t(2409);e.exports={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(e){var r,t,n,a,o,i=e[0]/360,s=e[1]/100,l=e[2]/100;if(0===s)return[o=255*l,o,o];r=2*l-(t=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var u=0;u<3;u++)(n=i+1/3*-(u-1))<0?n++:n>1&&n--,o=6*n<1?r+6*(t-r)*n:2*n<1?t:3*n<2?r+(t-r)*(2/3-n)*6:r,a[u]=255*o;return a}},n.hsl=function(e){var r,t,n=e[0]/255,a=e[1]/255,o=e[2]/255,i=Math.min(n,a,o),s=Math.max(n,a,o),l=s-i;return s===i?r=0:n===s?r=(a-o)/l:a===s?r=2+(o-n)/l:o===s&&(r=4+(n-a)/l),(r=Math.min(60*r,360))<0&&(r+=360),t=(i+s)/2,[r,100*(s===i?0:t<=.5?l/(s+i):l/(2-s-i)),100*t]}},2409:function(e){"use strict";e.exports={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]}},4450:function(e){e.exports=function(e,r,t){return e*(1-t)+r*t}},1527:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirmed",function(){return t(3660)}])},5966:function(e,r,t){"use strict";t.d(r,{x:function(){return s}});var n=t(5893),a=(t(7294),function(e){var r=e.width,t=void 0===r?20:r,a=e.height,o=void 0===a?20:a;return(0,n.jsx)("svg",{width:t,height:o,fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m15 18-6-6 6-6",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})}),o=t(6111),i=t.n(o),s=function(e){var r=e.children,t=e.onClick;return(0,n.jsxs)("button",{className:i().button,type:"button",onClick:t,children:[(0,n.jsx)(a,{}),r]})}},1810:function(e,r,t){"use strict";t.d(r,{G:function(){return p}});var n=t(5893),a=t(1664),o=t(7294),i=t(1852),s=t(1163),l=t(6134),u=t(1283);var c=function(e){var r=e.width,t=void 0===r?20:r,a=e.height,o=void 0===a?20:a;return(0,n.jsx)("svg",{width:t,height:o,fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m13 2-10 12h9l-1 8 10-12h-9z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})},d=t(2801),h=t.n(d),p=function(){var e=function(e){var r=(0,u.Z)().baseURL,t=(0,s.useRouter)().query;return(0,o.useMemo)((function(){return String((0,l.Q)(e,r,t))}),[e,r,t])}("/transactions"),r=(0,i.useMediaQuery)({query:"(max-width: 767px)"});return(0,n.jsx)(a.default,{href:e,passHref:!0,children:(0,n.jsxs)("a",{className:h().link,children:[(0,n.jsx)(c,{}),r?null:"Recent Transactions"]})})}},3660:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return w}});var n=t(5893),a=t(7294),o=t(5607),i=t(5966),s=t(1810),l=t(6957),u=t(5644),c=t.n(u),d=function(e,r){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])},d(e,r)};function h(e){var r=e.className,t=e.counterClockwise,n=e.dashRatio,o=e.pathRadius,i=e.strokeWidth,s=e.style;return(0,a.createElement)("path",{className:r,style:Object.assign({},s,g({pathRadius:o,dashRatio:n,counterClockwise:t})),d:p({pathRadius:o,counterClockwise:t}),strokeWidth:i,fillOpacity:0})}function p(e){var r=e.pathRadius,t=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+r+"\n      a "+r+","+r+" "+t+" 1 1 0,"+2*r+"\n      a "+r+","+r+" "+t+" 1 1 0,-"+2*r+"\n    "}function g(e){var r=e.counterClockwise,t=e.dashRatio,n=e.pathRadius,a=2*Math.PI*n,o=(1-t)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(r?-o:o)+"px"}}var f=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return function(e,r){function t(){this.constructor=e}d(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}(r,e),r.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},r.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},r.prototype.getPathRatio=function(){var e=this.props,r=e.value,t=e.minValue,n=e.maxValue;return(Math.min(Math.max(r,t),n)-t)/(n-t)},r.prototype.render=function(){var e=this.props,r=e.circleRatio,t=e.className,n=e.classes,o=e.counterClockwise,i=e.styles,s=e.strokeWidth,l=e.text,u=this.getPathRadius(),c=this.getPathRatio();return(0,a.createElement)("svg",{className:n.root+" "+t,style:i.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:n.background,style:i.background,cx:50,cy:50,r:50}):null,(0,a.createElement)(h,{className:n.trail,counterClockwise:o,dashRatio:r,pathRadius:u,strokeWidth:s,style:i.trail}),(0,a.createElement)(h,{className:n.path,counterClockwise:o,dashRatio:c*r,pathRadius:u,strokeWidth:s,style:i.path}),l?(0,a.createElement)("text",{className:n.text,style:i.text,x:50,y:50},l):null)},r.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},r}(a.Component);function m(e){return Object.keys(e).forEach((function(r){null==e[r]&&delete e[r]})),e}t(6422);var b=t(5047),k=t.n(b),v=function(){var e=(0,o.V7)(),r=e.status,t=e.progress,i=(0,a.useMemo)((function(){switch(r){case o.bG.Finalized:return[1,"Complete"];case o.bG.Confirmed:case o.bG.Valid:return t>=1?[1,"Complete"]:[t,Math.floor(100*t)+"%"];default:return[0,r]}}),[r,t]),s=i[0],l=i[1],u=(0,a.useMemo)((function(){return c()(["#8752f3","#5497d5","#43b4ca","#28e0b9","#19fb9b"])}),[]),d=(0,a.useMemo)((function(){return function(e){var r=e.rotation,t=e.strokeLinecap,n=e.textColor,a=e.textSize,o=e.pathColor,i=e.pathTransition,s=e.pathTransitionDuration,l=e.trailColor,u=e.backgroundColor,c=null==r?void 0:"rotate("+r+"turn)",d=null==r?void 0:"center center";return{root:{},path:m({stroke:o,strokeLinecap:t,transform:c,transformOrigin:d,transition:i,transitionDuration:null==s?void 0:s+"s"}),trail:m({stroke:l,strokeLinecap:t,transform:c,transformOrigin:d}),text:m({fill:n,fontSize:a}),background:m({fill:u})}}({pathTransitionDuration:.5,pathColor:u(s),trailColor:"rgba(0,0,0,.1)"})}),[u,s]);return(0,n.jsxs)("div",{className:k().root,children:[(0,n.jsx)(f,{maxValue:1,value:s,styles:d}),(0,n.jsx)("div",{className:k().text,children:l})]})},y=t(9490),x=t.n(y),w=function(){var e=(0,o.V7)().reset;return(0,n.jsxs)("div",{className:x().root,children:[(0,n.jsxs)("div",{className:x().header,children:[(0,n.jsx)(i.x,{onClick:e,children:"Start Over"}),(0,n.jsx)(s.G,{})]}),(0,n.jsx)("div",{className:x().main,children:(0,n.jsx)(v,{})}),(0,n.jsx)("div",{className:x().footer,children:(0,n.jsx)(l.C,{})})]})}},6111:function(e){e.exports={button:"BackButton_button__uoNsh"}},2801:function(e){e.exports={link:"TransactionsLink_link__cYpwJ"}},9490:function(e){e.exports={root:"ConfirmedPage_root__NVu6B",header:"ConfirmedPage_header__E4eie",main:"ConfirmedPage_main__2_aV8",footer:"ConfirmedPage_footer__w7DVC"}},5047:function(e){e.exports={root:"Progress_root__IyYFx",text:"Progress_text__3Fqk_"}},6422:function(){}},function(e){e.O(0,[434,774,888,179],(function(){return r=1527,e(e.s=r);var r}));var r=e.O();_N_E=r}]);