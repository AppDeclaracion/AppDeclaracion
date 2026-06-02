(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function o(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=o(u);fetch(u.href,d)}})();function Do(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $d={exports:{}},Vs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function OS(){if(Cv)return Vs;Cv=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(l,u,d){var p=null;if(d!==void 0&&(p=""+d),u.key!==void 0&&(p=""+u.key),"key"in u){d={};for(var g in u)g!=="key"&&(d[g]=u[g])}else d=u;return u=d.ref,{$$typeof:n,type:l,key:p,ref:u!==void 0?u:null,props:d}}return Vs.Fragment=a,Vs.jsx=o,Vs.jsxs=o,Vs}var Av;function kS(){return Av||(Av=1,$d.exports=OS()),$d.exports}var s=kS(),Hd={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function TS(){if(Ov)return xe;Ov=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.iterator;function j(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,O={};function S(A,$,re){this.props=A,this.context=$,this.refs=O,this.updater=re||N}S.prototype.isReactComponent={},S.prototype.setState=function(A,$){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,$,"setState")},S.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function k(){}k.prototype=S.prototype;function E(A,$,re){this.props=A,this.context=$,this.refs=O,this.updater=re||N}var T=E.prototype=new k;T.constructor=E,C(T,S.prototype),T.isPureReactComponent=!0;var L=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function _(A,$,re,ae,H,ue){return re=ue.ref,{$$typeof:n,type:A,key:$,ref:re!==void 0?re:null,props:ue}}function U(A,$){return _(A.type,$,void 0,void 0,void 0,A.props)}function Y(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function W(A){var $={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(re){return $[re]})}var ne=/\/+/g;function le(A,$){return typeof A=="object"&&A!==null&&A.key!=null?W(""+A.key):$.toString(36)}function ie(){}function ee(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ie,ie):(A.status="pending",A.then(function($){A.status==="pending"&&(A.status="fulfilled",A.value=$)},function($){A.status==="pending"&&(A.status="rejected",A.reason=$)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function P(A,$,re,ae,H){var ue=typeof A;(ue==="undefined"||ue==="boolean")&&(A=null);var fe=!1;if(A===null)fe=!0;else switch(ue){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(A.$$typeof){case n:case a:fe=!0;break;case b:return fe=A._init,P(fe(A._payload),$,re,ae,H)}}if(fe)return H=H(A),fe=ae===""?"."+le(A,0):ae,L(H)?(re="",fe!=null&&(re=fe.replace(ne,"$&/")+"/"),P(H,$,re,"",function(Ie){return Ie})):H!=null&&(Y(H)&&(H=U(H,re+(H.key==null||A&&A.key===H.key?"":(""+H.key).replace(ne,"$&/")+"/")+fe)),$.push(H)),1;fe=0;var He=ae===""?".":ae+":";if(L(A))for(var we=0;we<A.length;we++)ae=A[we],ue=He+le(ae,we),fe+=P(ae,$,re,ue,H);else if(we=j(A),typeof we=="function")for(A=we.call(A),we=0;!(ae=A.next()).done;)ae=ae.value,ue=He+le(ae,we++),fe+=P(ae,$,re,ue,H);else if(ue==="object"){if(typeof A.then=="function")return P(ee(A),$,re,ae,H);throw $=String(A),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return fe}function D(A,$,re){if(A==null)return A;var ae=[],H=0;return P(A,ae,"","",function(ue){return $.call(re,ue,H++)}),ae}function K(A){if(A._status===-1){var $=A._result;$=$(),$.then(function(re){(A._status===0||A._status===-1)&&(A._status=1,A._result=re)},function(re){(A._status===0||A._status===-1)&&(A._status=2,A._result=re)}),A._status===-1&&(A._status=0,A._result=$)}if(A._status===1)return A._result.default;throw A._result}var oe=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function V(){}return xe.Children={map:D,forEach:function(A,$,re){D(A,function(){$.apply(this,arguments)},re)},count:function(A){var $=0;return D(A,function(){$++}),$},toArray:function(A){return D(A,function($){return $})||[]},only:function(A){if(!Y(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},xe.Component=S,xe.Fragment=o,xe.Profiler=u,xe.PureComponent=E,xe.StrictMode=l,xe.Suspense=h,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,xe.__COMPILER_RUNTIME={__proto__:null,c:function(A){return B.H.useMemoCache(A)}},xe.cache=function(A){return function(){return A.apply(null,arguments)}},xe.cloneElement=function(A,$,re){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var ae=C({},A.props),H=A.key,ue=void 0;if($!=null)for(fe in $.ref!==void 0&&(ue=void 0),$.key!==void 0&&(H=""+$.key),$)!z.call($,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&$.ref===void 0||(ae[fe]=$[fe]);var fe=arguments.length-2;if(fe===1)ae.children=re;else if(1<fe){for(var He=Array(fe),we=0;we<fe;we++)He[we]=arguments[we+2];ae.children=He}return _(A.type,H,void 0,void 0,ue,ae)},xe.createContext=function(A){return A={$$typeof:p,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:d,_context:A},A},xe.createElement=function(A,$,re){var ae,H={},ue=null;if($!=null)for(ae in $.key!==void 0&&(ue=""+$.key),$)z.call($,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(H[ae]=$[ae]);var fe=arguments.length-2;if(fe===1)H.children=re;else if(1<fe){for(var He=Array(fe),we=0;we<fe;we++)He[we]=arguments[we+2];H.children=He}if(A&&A.defaultProps)for(ae in fe=A.defaultProps,fe)H[ae]===void 0&&(H[ae]=fe[ae]);return _(A,ue,void 0,void 0,null,H)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(A){return{$$typeof:g,render:A}},xe.isValidElement=Y,xe.lazy=function(A){return{$$typeof:b,_payload:{_status:-1,_result:A},_init:K}},xe.memo=function(A,$){return{$$typeof:v,type:A,compare:$===void 0?null:$}},xe.startTransition=function(A){var $=B.T,re={};B.T=re;try{var ae=A(),H=B.S;H!==null&&H(re,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(V,oe)}catch(ue){oe(ue)}finally{B.T=$}},xe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},xe.use=function(A){return B.H.use(A)},xe.useActionState=function(A,$,re){return B.H.useActionState(A,$,re)},xe.useCallback=function(A,$){return B.H.useCallback(A,$)},xe.useContext=function(A){return B.H.useContext(A)},xe.useDebugValue=function(){},xe.useDeferredValue=function(A,$){return B.H.useDeferredValue(A,$)},xe.useEffect=function(A,$,re){var ae=B.H;if(typeof re=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(A,$)},xe.useId=function(){return B.H.useId()},xe.useImperativeHandle=function(A,$,re){return B.H.useImperativeHandle(A,$,re)},xe.useInsertionEffect=function(A,$){return B.H.useInsertionEffect(A,$)},xe.useLayoutEffect=function(A,$){return B.H.useLayoutEffect(A,$)},xe.useMemo=function(A,$){return B.H.useMemo(A,$)},xe.useOptimistic=function(A,$){return B.H.useOptimistic(A,$)},xe.useReducer=function(A,$,re){return B.H.useReducer(A,$,re)},xe.useRef=function(A){return B.H.useRef(A)},xe.useState=function(A){return B.H.useState(A)},xe.useSyncExternalStore=function(A,$,re){return B.H.useSyncExternalStore(A,$,re)},xe.useTransition=function(){return B.H.useTransition()},xe.version="19.1.1",xe}var kv;function _f(){return kv||(kv=1,Hd.exports=TS()),Hd.exports}var m=_f();const Fe=Do(m);var qd={exports:{}},Ys={},Jd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function RS(){return Tv||(Tv=1,(function(n){function a(D,K){var oe=D.length;D.push(K);e:for(;0<oe;){var V=oe-1>>>1,A=D[V];if(0<u(A,K))D[V]=K,D[oe]=A,oe=V;else break e}}function o(D){return D.length===0?null:D[0]}function l(D){if(D.length===0)return null;var K=D[0],oe=D.pop();if(oe!==K){D[0]=oe;e:for(var V=0,A=D.length,$=A>>>1;V<$;){var re=2*(V+1)-1,ae=D[re],H=re+1,ue=D[H];if(0>u(ae,oe))H<A&&0>u(ue,ae)?(D[V]=ue,D[H]=oe,V=H):(D[V]=ae,D[re]=oe,V=re);else if(H<A&&0>u(ue,oe))D[V]=ue,D[H]=oe,V=H;else break e}}return K}function u(D,K){var oe=D.sortIndex-K.sortIndex;return oe!==0?oe:D.id-K.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var p=Date,g=p.now();n.unstable_now=function(){return p.now()-g}}var h=[],v=[],b=1,x=null,j=3,N=!1,C=!1,O=!1,S=!1,k=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function L(D){for(var K=o(v);K!==null;){if(K.callback===null)l(v);else if(K.startTime<=D)l(v),K.sortIndex=K.expirationTime,a(h,K);else break;K=o(v)}}function B(D){if(O=!1,L(D),!C)if(o(h)!==null)C=!0,z||(z=!0,le());else{var K=o(v);K!==null&&P(B,K.startTime-D)}}var z=!1,_=-1,U=5,Y=-1;function W(){return S?!0:!(n.unstable_now()-Y<U)}function ne(){if(S=!1,z){var D=n.unstable_now();Y=D;var K=!0;try{e:{C=!1,O&&(O=!1,E(_),_=-1),N=!0;var oe=j;try{t:{for(L(D),x=o(h);x!==null&&!(x.expirationTime>D&&W());){var V=x.callback;if(typeof V=="function"){x.callback=null,j=x.priorityLevel;var A=V(x.expirationTime<=D);if(D=n.unstable_now(),typeof A=="function"){x.callback=A,L(D),K=!0;break t}x===o(h)&&l(h),L(D)}else l(h);x=o(h)}if(x!==null)K=!0;else{var $=o(v);$!==null&&P(B,$.startTime-D),K=!1}}break e}finally{x=null,j=oe,N=!1}K=void 0}}finally{K?le():z=!1}}}var le;if(typeof T=="function")le=function(){T(ne)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ee=ie.port2;ie.port1.onmessage=ne,le=function(){ee.postMessage(null)}}else le=function(){k(ne,0)};function P(D,K){_=k(function(){D(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return j},n.unstable_next=function(D){switch(j){case 1:case 2:case 3:var K=3;break;default:K=j}var oe=j;j=K;try{return D()}finally{j=oe}},n.unstable_requestPaint=function(){S=!0},n.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var oe=j;j=D;try{return K()}finally{j=oe}},n.unstable_scheduleCallback=function(D,K,oe){var V=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?V+oe:V):oe=V,D){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=oe+A,D={id:b++,callback:K,priorityLevel:D,startTime:oe,expirationTime:A,sortIndex:-1},oe>V?(D.sortIndex=oe,a(v,D),o(h)===null&&D===o(v)&&(O?(E(_),_=-1):O=!0,P(B,oe-V))):(D.sortIndex=A,a(h,D),C||N||(C=!0,z||(z=!0,le()))),D},n.unstable_shouldYield=W,n.unstable_wrapCallback=function(D){var K=j;return function(){var oe=j;j=K;try{return D.apply(this,arguments)}finally{j=oe}}}})(Gd)),Gd}var Rv;function DS(){return Rv||(Rv=1,Jd.exports=RS()),Jd.exports}var Fd={exports:{}},xt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function LS(){if(Dv)return xt;Dv=1;var n=_f();function a(h){var v="https://react.dev/errors/"+h;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)v+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+h+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(h,v,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:x==null?null:""+x,children:h,containerInfo:v,implementation:b}}var p=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(h,v){if(h==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,xt.createPortal=function(h,v){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(a(299));return d(h,v,null,b)},xt.flushSync=function(h){var v=p.T,b=l.p;try{if(p.T=null,l.p=2,h)return h()}finally{p.T=v,l.p=b,l.d.f()}},xt.preconnect=function(h,v){typeof h=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,l.d.C(h,v))},xt.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},xt.preinit=function(h,v){if(typeof h=="string"&&v&&typeof v.as=="string"){var b=v.as,x=g(b,v.crossOrigin),j=typeof v.integrity=="string"?v.integrity:void 0,N=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;b==="style"?l.d.S(h,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:x,integrity:j,fetchPriority:N}):b==="script"&&l.d.X(h,{crossOrigin:x,integrity:j,fetchPriority:N,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},xt.preinitModule=function(h,v){if(typeof h=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var b=g(v.as,v.crossOrigin);l.d.M(h,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&l.d.M(h)},xt.preload=function(h,v){if(typeof h=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var b=v.as,x=g(b,v.crossOrigin);l.d.L(h,b,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},xt.preloadModule=function(h,v){if(typeof h=="string")if(v){var b=g(v.as,v.crossOrigin);l.d.m(h,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else l.d.m(h)},xt.requestFormReset=function(h){l.d.r(h)},xt.unstable_batchedUpdates=function(h,v){return h(v)},xt.useFormState=function(h,v,b){return p.H.useFormState(h,v,b)},xt.useFormStatus=function(){return p.H.useHostTransitionStatus()},xt.version="19.1.1",xt}var Lv;function Ib(){if(Lv)return Fd.exports;Lv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Fd.exports=LS(),Fd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function MS(){if(Mv)return Ys;Mv=1;var n=DS(),a=_f(),o=Ib();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(l(188))}function h(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,i=t;;){var c=r.return;if(c===null)break;var f=c.alternate;if(f===null){if(i=c.return,i!==null){r=i;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===r)return g(c),e;if(f===i)return g(c),t;f=f.sibling}throw Error(l(188))}if(r.return!==i.return)r=c,i=f;else{for(var y=!1,w=c.child;w;){if(w===r){y=!0,r=c,i=f;break}if(w===i){y=!0,i=c,r=f;break}w=w.sibling}if(!y){for(w=f.child;w;){if(w===r){y=!0,r=f,i=c;break}if(w===i){y=!0,i=f,r=c;break}w=w.sibling}if(!y)throw Error(l(189))}}if(r.alternate!==i)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),E=Symbol.for("react.consumer"),T=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case S:return"Profiler";case O:return"StrictMode";case B:return"Suspense";case z:return"SuspenseList";case Y:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case T:return(e.displayName||"Context")+".Provider";case E:return(e._context.displayName||"Context")+".Consumer";case L:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case U:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}var P=Array.isArray,D=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},V=[],A=-1;function $(e){return{current:e}}function re(e){0>A||(e.current=V[A],V[A]=null,A--)}function ae(e,t){A++,V[A]=e.current,e.current=t}var H=$(null),ue=$(null),fe=$(null),He=$(null);function we(e,t){switch(ae(fe,t),ae(ue,e),ae(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ev(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ev(t),e=tv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}re(H),ae(H,e)}function Ie(){re(H),re(ue),re(fe)}function zt(e){e.memoizedState!==null&&ae(He,e);var t=H.current,r=tv(t,e.type);t!==r&&(ae(ue,e),ae(H,r))}function Bt(e){ue.current===e&&(re(H),re(ue)),He.current===e&&(re(He),Hs._currentValue=oe)}var Kt=Object.prototype.hasOwnProperty,Qt=n.unstable_scheduleCallback,Wt=n.unstable_cancelCallback,ze=n.unstable_shouldYield,Hn=n.unstable_requestPaint,ot=n.unstable_now,Zo=n.unstable_getCurrentPriorityLevel,Or=n.unstable_ImmediatePriority,en=n.unstable_UserBlockingPriority,wn=n.unstable_NormalPriority,kr=n.unstable_LowPriority,Xa=n.unstable_IdlePriority,ba=n.log,Tr=n.unstable_setDisableYieldValue,je=null,Ye=null;function At(e){if(typeof ba=="function"&&Tr(e),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(je,e)}catch{}}var Ut=Math.clz32?Math.clz32:p0,f0=Math.log,m0=Math.LN2;function p0(e){return e>>>=0,e===0?32:31-(f0(e)/m0|0)|0}var Ni=256,Ei=4194304;function Za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ci(e,t,r){var i=e.pendingLanes;if(i===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var w=i&134217727;return w!==0?(i=w&~f,i!==0?c=Za(i):(y&=w,y!==0?c=Za(y):r||(r=w&~e,r!==0&&(c=Za(r))))):(w=i&~f,w!==0?c=Za(w):y!==0?c=Za(y):r||(r=i&~e,r!==0&&(c=Za(r)))),c===0?0:t!==0&&t!==c&&(t&f)===0&&(f=c&-c,r=t&-t,f>=r||f===32&&(r&4194048)!==0)?t:c}function Ko(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function h0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bm(){var e=Ni;return Ni<<=1,(Ni&4194048)===0&&(Ni=256),e}function Um(){var e=Ei;return Ei<<=1,(Ei&62914560)===0&&(Ei=4194304),e}function Tc(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Qo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function g0(e,t,r,i,c,f){var y=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var w=e.entanglements,R=e.expirationTimes,J=e.hiddenUpdates;for(r=y&~r;0<r;){var Z=31-Ut(r),te=1<<Z;w[Z]=0,R[Z]=-1;var G=J[Z];if(G!==null)for(J[Z]=null,Z=0;Z<G.length;Z++){var F=G[Z];F!==null&&(F.lane&=-536870913)}r&=~te}i!==0&&Pm(e,i,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~t))}function Pm(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ut(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|r&4194090}function Im(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Ut(r),c=1<<i;c&t|e[i]&t&&(e[i]|=t),r&=~c}}function Rc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $m(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:xv(e.type))}function v0(e,t){var r=K.p;try{return K.p=e,t()}finally{K.p=r}}var ya=Math.random().toString(36).slice(2),bt="__reactFiber$"+ya,Ot="__reactProps$"+ya,Rr="__reactContainer$"+ya,Lc="__reactEvents$"+ya,b0="__reactListeners$"+ya,y0="__reactHandles$"+ya,Hm="__reactResources$"+ya,Wo="__reactMarker$"+ya;function Mc(e){delete e[bt],delete e[Ot],delete e[Lc],delete e[b0],delete e[y0]}function Dr(e){var t=e[bt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Rr]||r[bt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ov(e);e!==null;){if(r=e[bt])return r;e=ov(e)}return t}e=r,r=e.parentNode}return null}function Lr(e){if(e=e[bt]||e[Rr]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function es(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Mr(e){var t=e[Hm];return t||(t=e[Hm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[Wo]=!0}var qm=new Set,Jm={};function Ka(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(Jm[e]=t,e=0;e<t.length;e++)qm.add(t[e])}var x0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gm={},Fm={};function w0(e){return Kt.call(Fm,e)?!0:Kt.call(Gm,e)?!1:x0.test(e)?Fm[e]=!0:(Gm[e]=!0,!1)}function Ai(e,t,r){if(w0(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function Oi(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function qn(e,t,r,i){if(i===null)e.removeAttribute(r);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+i)}}var _c,Vm;function zr(e){if(_c===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);_c=t&&t[1]||"",Vm=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_c+e+Vm}var zc=!1;function Bc(e,t){if(!e||zc)return"";zc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(F){var G=F}Reflect.construct(e,[],te)}else{try{te.call()}catch(F){G=F}e.call(te.prototype)}}else{try{throw Error()}catch(F){G=F}(te=e())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(F){if(F&&G&&typeof F.stack=="string")return[F.stack,G.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=i.DetermineComponentFrameRoot(),y=f[0],w=f[1];if(y&&w){var R=y.split(`
`),J=w.split(`
`);for(c=i=0;i<R.length&&!R[i].includes("DetermineComponentFrameRoot");)i++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(i===R.length||c===J.length)for(i=R.length-1,c=J.length-1;1<=i&&0<=c&&R[i]!==J[c];)c--;for(;1<=i&&0<=c;i--,c--)if(R[i]!==J[c]){if(i!==1||c!==1)do if(i--,c--,0>c||R[i]!==J[c]){var Z=`
`+R[i].replace(" at new "," at ");return e.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",e.displayName)),Z}while(1<=i&&0<=c);break}}}finally{zc=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?zr(r):""}function j0(e){switch(e.tag){case 26:case 27:case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 15:return Bc(e.type,!1);case 11:return Bc(e.type.render,!1);case 1:return Bc(e.type,!0);case 31:return zr("Activity");default:return""}}function Ym(e){try{var t="";do t+=j0(e),e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function tn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function S0(e){var t=Xm(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){i=""+y,f.call(this,y)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(y){i=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ki(e){e._valueTracker||(e._valueTracker=S0(e))}function Zm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=Xm(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var N0=/[\n"\\]/g;function nn(e){return e.replace(N0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Uc(e,t,r,i,c,f,y,w){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+tn(t)):e.value!==""+tn(t)&&(e.value=""+tn(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?Pc(e,y,tn(t)):r!=null?Pc(e,y,tn(r)):i!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+tn(w):e.removeAttribute("name")}function Km(e,t,r,i,c,f,y,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||t!=null))return;r=r!=null?""+tn(r):"",t=t!=null?""+tn(t):r,w||t===e.value||(e.value=t),e.defaultValue=t}i=i??c,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=w?e.checked:!!i,e.defaultChecked=!!i,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function Pc(e,t,r){t==="number"&&Ti(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Br(e,t,r,i){if(e=e.options,t){t={};for(var c=0;c<r.length;c++)t["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=t.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&i&&(e[r].defaultSelected=!0)}else{for(r=""+tn(r),t=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,i&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Qm(e,t,r){if(t!=null&&(t=""+tn(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+tn(r):""}function Wm(e,t,r,i){if(t==null){if(i!=null){if(r!=null)throw Error(l(92));if(P(i)){if(1<i.length)throw Error(l(93));i=i[0]}r=i}r==null&&(r=""),t=r}r=tn(t),e.defaultValue=r,i=e.textContent,i===r&&i!==""&&i!==null&&(e.value=i)}function Ur(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var E0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ep(e,t,r){var i=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,r):typeof r!="number"||r===0||E0.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function tp(e,t,r){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,r!=null){for(var i in r)!r.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var c in t)i=t[c],t.hasOwnProperty(c)&&r[c]!==i&&ep(e,c,i)}else for(var f in t)t.hasOwnProperty(f)&&ep(e,f,t[f])}function Ic(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var C0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),A0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return A0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var $c=null;function Hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,Ir=null;function np(e){var t=Lr(e);if(t&&(e=t.stateNode)){var r=e[Ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Uc(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+nn(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var c=i[Ot]||null;if(!c)throw Error(l(90));Uc(i,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<r.length;t++)i=r[t],i.form===e.form&&Zm(i)}break e;case"textarea":Qm(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&Br(e,!!r.multiple,t,!1)}}}var qc=!1;function ap(e,t,r){if(qc)return e(t,r);qc=!0;try{var i=e(t);return i}finally{if(qc=!1,(Pr!==null||Ir!==null)&&(gl(),Pr&&(t=Pr,e=Ir,Ir=Pr=null,np(t),e)))for(t=0;t<e.length;t++)np(e[t])}}function ts(e,t){var r=e.stateNode;if(r===null)return null;var i=r[Ot]||null;if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(Jn)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{Jc=!1}var xa=null,Gc=null,Di=null;function rp(){if(Di)return Di;var e,t=Gc,r=t.length,i,c="value"in xa?xa.value:xa.textContent,f=c.length;for(e=0;e<r&&t[e]===c[e];e++);var y=r-e;for(i=1;i<=y&&t[r-i]===c[f-i];i++);return Di=c.slice(e,1<i?1-i:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mi(){return!0}function op(){return!1}function kt(e){function t(r,i,c,f,y){this._reactName=r,this._targetInst=c,this.type=i,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(r=e[w],this[w]=r?r(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Mi:op,this.isPropagationStopped=op,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Mi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Mi)},persist:function(){},isPersistent:Mi}),t}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_i=kt(Qa),as=b({},Qa,{view:0,detail:0}),O0=kt(as),Fc,Vc,rs,zi=b({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rs&&(rs&&e.type==="mousemove"?(Fc=e.screenX-rs.screenX,Vc=e.screenY-rs.screenY):Vc=Fc=0,rs=e),Fc)},movementY:function(e){return"movementY"in e?e.movementY:Vc}}),sp=kt(zi),k0=b({},zi,{dataTransfer:0}),T0=kt(k0),R0=b({},as,{relatedTarget:0}),Yc=kt(R0),D0=b({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),L0=kt(D0),M0=b({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_0=kt(M0),z0=b({},Qa,{data:0}),ip=kt(z0),B0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=P0[e])?!!t[e]:!1}function Xc(){return I0}var $0=b({},as,{key:function(e){if(e.key){var t=B0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),H0=kt($0),q0=b({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=kt(q0),J0=b({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),G0=kt(J0),F0=b({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=kt(F0),Y0=b({},zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=kt(Y0),Z0=b({},Qa,{newState:0,oldState:0}),K0=kt(Z0),Q0=[9,13,27,32],Zc=Jn&&"CompositionEvent"in window,os=null;Jn&&"documentMode"in document&&(os=document.documentMode);var W0=Jn&&"TextEvent"in window&&!os,cp=Jn&&(!Zc||os&&8<os&&11>=os),up=" ",dp=!1;function fp(e,t){switch(e){case"keyup":return Q0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function ej(e,t){switch(e){case"compositionend":return mp(t);case"keypress":return t.which!==32?null:(dp=!0,up);case"textInput":return e=t.data,e===up&&dp?null:e;default:return null}}function tj(e,t){if($r)return e==="compositionend"||!Zc&&fp(e,t)?(e=rp(),Di=Gc=xa=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cp&&t.locale!=="ko"?null:t.data;default:return null}}var nj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nj[e.type]:t==="textarea"}function hp(e,t,r,i){Pr?Ir?Ir.push(i):Ir=[i]:Pr=i,t=jl(t,"onChange"),0<t.length&&(r=new _i("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var ss=null,is=null;function aj(e){Xg(e,0)}function Bi(e){var t=es(e);if(Zm(t))return e}function gp(e,t){if(e==="change")return t}var vp=!1;if(Jn){var Kc;if(Jn){var Qc="oninput"in document;if(!Qc){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),Qc=typeof bp.oninput=="function"}Kc=Qc}else Kc=!1;vp=Kc&&(!document.documentMode||9<document.documentMode)}function yp(){ss&&(ss.detachEvent("onpropertychange",xp),is=ss=null)}function xp(e){if(e.propertyName==="value"&&Bi(is)){var t=[];hp(t,is,e,Hc(e)),ap(aj,t)}}function rj(e,t,r){e==="focusin"?(yp(),ss=t,is=r,ss.attachEvent("onpropertychange",xp)):e==="focusout"&&yp()}function oj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(is)}function sj(e,t){if(e==="click")return Bi(t)}function ij(e,t){if(e==="input"||e==="change")return Bi(t)}function lj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:lj;function ls(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var c=r[i];if(!Kt.call(t,c)||!Pt(e[c],t[c]))return!1}return!0}function wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jp(e,t){var r=wp(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=wp(r)}}function Sp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Np(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ti(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ti(e.document)}return t}function Wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var cj=Jn&&"documentMode"in document&&11>=document.documentMode,Hr=null,eu=null,cs=null,tu=!1;function Ep(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;tu||Hr==null||Hr!==Ti(i)||(i=Hr,"selectionStart"in i&&Wc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),cs&&ls(cs,i)||(cs=i,i=jl(eu,"onSelect"),0<i.length&&(t=new _i("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Hr)))}function Wa(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var qr={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},nu={},Cp={};Jn&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function er(e){if(nu[e])return nu[e];if(!qr[e])return e;var t=qr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Cp)return nu[e]=t[r];return e}var Ap=er("animationend"),Op=er("animationiteration"),kp=er("animationstart"),uj=er("transitionrun"),dj=er("transitionstart"),fj=er("transitioncancel"),Tp=er("transitionend"),Rp=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function jn(e,t){Rp.set(e,t),Ka(t,[e])}var Dp=new WeakMap;function an(e,t){if(typeof e=="object"&&e!==null){var r=Dp.get(e);return r!==void 0?r:(t={value:e,source:t,stack:Ym(t)},Dp.set(e,t),t)}return{value:e,source:t,stack:Ym(t)}}var rn=[],Jr=0,ru=0;function Ui(){for(var e=Jr,t=ru=Jr=0;t<e;){var r=rn[t];rn[t++]=null;var i=rn[t];rn[t++]=null;var c=rn[t];rn[t++]=null;var f=rn[t];if(rn[t++]=null,i!==null&&c!==null){var y=i.pending;y===null?c.next=c:(c.next=y.next,y.next=c),i.pending=c}f!==0&&Lp(r,c,f)}}function Pi(e,t,r,i){rn[Jr++]=e,rn[Jr++]=t,rn[Jr++]=r,rn[Jr++]=i,ru|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ou(e,t,r,i){return Pi(e,t,r,i),Ii(e)}function Gr(e,t){return Pi(e,null,null,t),Ii(e)}function Lp(e,t,r){e.lanes|=r;var i=e.alternate;i!==null&&(i.lanes|=r);for(var c=!1,f=e.return;f!==null;)f.childLanes|=r,i=f.alternate,i!==null&&(i.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&t!==null&&(c=31-Ut(r),e=f.hiddenUpdates,i=e[c],i===null?e[c]=[t]:i.push(t),t.lane=r|536870912),f):null}function Ii(e){if(50<Ms)throw Ms=0,dd=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fr={};function mj(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,r,i){return new mj(e,t,r,i)}function su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gn(e,t){var r=e.alternate;return r===null?(r=It(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Mp(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $i(e,t,r,i,c,f){var y=0;if(i=e,typeof e=="function")su(e)&&(y=1);else if(typeof e=="string")y=hS(e,r,H.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Y:return e=It(31,r,t,c),e.elementType=Y,e.lanes=f,e;case C:return tr(r.children,c,f,t);case O:y=8,c|=24;break;case S:return e=It(12,r,t,c|2),e.elementType=S,e.lanes=f,e;case B:return e=It(13,r,t,c),e.elementType=B,e.lanes=f,e;case z:return e=It(19,r,t,c),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:case T:y=10;break e;case E:y=9;break e;case L:y=11;break e;case _:y=14;break e;case U:y=16,i=null;break e}y=29,r=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=It(y,r,t,c),t.elementType=e,t.type=i,t.lanes=f,t}function tr(e,t,r,i){return e=It(7,e,i,t),e.lanes=r,e}function iu(e,t,r){return e=It(6,e,null,t),e.lanes=r,e}function lu(e,t,r){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Vr=[],Yr=0,Hi=null,qi=0,on=[],sn=0,nr=null,Fn=1,Vn="";function ar(e,t){Vr[Yr++]=qi,Vr[Yr++]=Hi,Hi=e,qi=t}function _p(e,t,r){on[sn++]=Fn,on[sn++]=Vn,on[sn++]=nr,nr=e;var i=Fn;e=Vn;var c=32-Ut(i)-1;i&=~(1<<c),r+=1;var f=32-Ut(t)+c;if(30<f){var y=c-c%5;f=(i&(1<<y)-1).toString(32),i>>=y,c-=y,Fn=1<<32-Ut(t)+c|r<<c|i,Vn=f+e}else Fn=1<<f|r<<c|i,Vn=e}function cu(e){e.return!==null&&(ar(e,1),_p(e,1,0))}function uu(e){for(;e===Hi;)Hi=Vr[--Yr],Vr[Yr]=null,qi=Vr[--Yr],Vr[Yr]=null;for(;e===nr;)nr=on[--sn],on[sn]=null,Vn=on[--sn],on[sn]=null,Fn=on[--sn],on[sn]=null}var jt=null,Ke=null,Re=!1,rr=null,kn=!1,du=Error(l(519));function or(e){var t=Error(l(418,""));throw fs(an(t,e)),du}function zp(e){var t=e.stateNode,r=e.type,i=e.memoizedProps;switch(t[bt]=e,t[Ot]=i,r){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(r=0;r<zs.length;r++)Ce(zs[r],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),Km(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),ki(t);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),Wm(t,i.value,i.defaultValue,i.children),ki(t)}r=i.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||i.suppressHydrationWarning===!0||Wg(t.textContent,r)?(i.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),i.onScroll!=null&&Ce("scroll",t),i.onScrollEnd!=null&&Ce("scrollend",t),i.onClick!=null&&(t.onclick=Sl),t=!0):t=!1,t||or(e)}function Bp(e){for(jt=e.return;jt;)switch(jt.tag){case 5:case 13:kn=!1;return;case 27:case 3:kn=!0;return;default:jt=jt.return}}function us(e){if(e!==jt)return!1;if(!Re)return Bp(e),Re=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Ad(e.type,e.memoizedProps)),r=!r),r&&Ke&&or(e),Bp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(t===0){Ke=Nn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++;e=e.nextSibling}Ke=null}}else t===27?(t=Ke,za(e.type)?(e=Rd,Rd=null,Ke=e):Ke=t):Ke=jt?Nn(e.stateNode.nextSibling):null;return!0}function ds(){Ke=jt=null,Re=!1}function Up(){var e=rr;return e!==null&&(Dt===null?Dt=e:Dt.push.apply(Dt,e),rr=null),e}function fs(e){rr===null?rr=[e]:rr.push(e)}var fu=$(null),sr=null,Yn=null;function wa(e,t,r){ae(fu,t._currentValue),t._currentValue=r}function Xn(e){e._currentValue=fu.current,re(fu)}function mu(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function pu(e,t,r,i){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=c;for(var R=0;R<t.length;R++)if(w.context===t[R]){f.lanes|=r,w=f.alternate,w!==null&&(w.lanes|=r),mu(f.return,r,e),i||(y=null);break e}f=w.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(l(341));y.lanes|=r,f=y.alternate,f!==null&&(f.lanes|=r),mu(y,r,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function ms(e,t,r,i){e=null;for(var c=t,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(l(387));if(y=y.memoizedProps,y!==null){var w=c.type;Pt(c.pendingProps.value,y.value)||(e!==null?e.push(w):e=[w])}}else if(c===He.current){if(y=c.alternate,y===null)throw Error(l(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Hs):e=[Hs])}c=c.return}e!==null&&pu(t,e,r,i),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!Pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ir(e){sr=e,Yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yt(e){return Pp(sr,e)}function Gi(e,t){return sr===null&&ir(e),Pp(e,t)}function Pp(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},Yn===null){if(e===null)throw Error(l(308));Yn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yn=Yn.next=t;return r}var pj=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},hj=n.unstable_scheduleCallback,gj=n.unstable_NormalPriority,st={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new pj,data:new Map,refCount:0}}function ps(e){e.refCount--,e.refCount===0&&hj(gj,function(){e.controller.abort()})}var hs=null,gu=0,Xr=0,Zr=null;function vj(e,t){if(hs===null){var r=hs=[];gu=0,Xr=bd(),Zr={status:"pending",value:void 0,then:function(i){r.push(i)}}}return gu++,t.then(Ip,Ip),t}function Ip(){if(--gu===0&&hs!==null){Zr!==null&&(Zr.status="fulfilled");var e=hs;hs=null,Xr=0,Zr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bj(e,t){var r=[],i={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var c=0;c<r.length;c++)(0,r[c])(t)},function(c){for(i.status="rejected",i.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),i}var $p=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&vj(e,t),$p!==null&&$p(e,t)};var lr=$(null);function vu(){var e=lr.current;return e!==null?e:qe.pooledCache}function Fi(e,t){t===null?ae(lr,lr.current):ae(lr,t.pool)}function Hp(){var e=vu();return e===null?null:{parent:st._currentValue,pool:e}}var gs=Error(l(460)),qp=Error(l(474)),Vi=Error(l(542)),bu={then:function(){}};function Jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yi(){}function Gp(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(Yi,Yi),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vp(e),e;default:if(typeof t.status=="string")t.then(Yi,Yi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=i}},function(i){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vp(e),e}throw vs=t,gs}}var vs=null;function Fp(){if(vs===null)throw Error(l(459));var e=vs;return vs=null,e}function Vp(e){if(e===gs||e===Vi)throw Error(l(483))}var ja=!1;function yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Le&2)!==0){var c=i.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),i.pending=t,t=Ii(e),Lp(e,null,r),t}return Pi(e,i,t,r),Ii(e)}function bs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Im(e,r)}}function wu(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var c=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,r=r.next}while(r!==null);f===null?c=f=t:f=f.next=t}else c=f=t;r={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:i.shared,callbacks:i.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var ju=!1;function ys(){if(ju){var e=Zr;if(e!==null)throw e}}function xs(e,t,r,i){ju=!1;var c=e.updateQueue;ja=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var R=w,J=R.next;R.next=null,y===null?f=J:y.next=J,y=R;var Z=e.alternate;Z!==null&&(Z=Z.updateQueue,w=Z.lastBaseUpdate,w!==y&&(w===null?Z.firstBaseUpdate=J:w.next=J,Z.lastBaseUpdate=R))}if(f!==null){var te=c.baseState;y=0,Z=J=R=null,w=f;do{var G=w.lane&-536870913,F=G!==w.lane;if(F?(Ae&G)===G:(i&G)===G){G!==0&&G===Xr&&(ju=!0),Z!==null&&(Z=Z.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var be=e,ge=w;G=t;var Pe=r;switch(ge.tag){case 1:if(be=ge.payload,typeof be=="function"){te=be.call(Pe,te,G);break e}te=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=ge.payload,G=typeof be=="function"?be.call(Pe,te,G):be,G==null)break e;te=b({},te,G);break e;case 2:ja=!0}}G=w.callback,G!==null&&(e.flags|=64,F&&(e.flags|=8192),F=c.callbacks,F===null?c.callbacks=[G]:F.push(G))}else F={lane:G,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Z===null?(J=Z=F,R=te):Z=Z.next=F,y|=G;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;F=w,w=F.next,F.next=null,c.lastBaseUpdate=F,c.shared.pending=null}}while(!0);Z===null&&(R=te),c.baseState=R,c.firstBaseUpdate=J,c.lastBaseUpdate=Z,f===null&&(c.shared.lanes=0),Da|=y,e.lanes=y,e.memoizedState=te}}function Yp(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Xp(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Yp(r[e],t)}var Kr=$(null),Xi=$(0);function Zp(e,t){e=na,ae(Xi,e),ae(Kr,t),na=e|t.baseLanes}function Su(){ae(Xi,na),ae(Kr,Kr.current)}function Nu(){na=Xi.current,re(Kr),re(Xi)}var Ea=0,Se=null,Be=null,at=null,Zi=!1,Qr=!1,cr=!1,Ki=0,ws=0,Wr=null,yj=0;function We(){throw Error(l(321))}function Eu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Pt(e[r],t[r]))return!1;return!0}function Cu(e,t,r,i,c,f){return Ea=f,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Lh:Mh,cr=!1,f=r(i,c),cr=!1,Qr&&(f=Qp(t,r,i,c)),Kp(e),f}function Kp(e){D.H=al;var t=Be!==null&&Be.next!==null;if(Ea=0,at=Be=Se=null,Zi=!1,ws=0,Wr=null,t)throw Error(l(300));e===null||ct||(e=e.dependencies,e!==null&&Ji(e)&&(ct=!0))}function Qp(e,t,r,i){Se=e;var c=0;do{if(Qr&&(Wr=null),ws=0,Qr=!1,25<=c)throw Error(l(301));if(c+=1,at=Be=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=Cj,f=t(r,i)}while(Qr);return f}function xj(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?js(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(Se.flags|=1024),t}function Au(){var e=Ki!==0;return Ki=0,e}function Ou(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function ku(e){if(Zi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Zi=!1}Ea=0,at=Be=Se=null,Qr=!1,ws=Ki=0,Wr=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Se.memoizedState=at=e:at=at.next=e,at}function rt(){if(Be===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=at===null?Se.memoizedState:at.next;if(t!==null)at=t,Be=e;else{if(e===null)throw Se.alternate===null?Error(l(467)):Error(l(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},at===null?Se.memoizedState=at=e:at=at.next=e}return at}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function js(e){var t=ws;return ws+=1,Wr===null&&(Wr=[]),e=Gp(Wr,e,t),t=Se,(at===null?t.memoizedState:at.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Lh:Mh),e}function Qi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return js(e);if(e.$$typeof===T)return yt(e)}throw Error(l(438,String(e)))}function Ru(e){var t=null,r=Se.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var i=Se.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=Tu(),Se.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),i=0;i<e;i++)r[i]=W;return t.index++,r}function Zn(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=rt();return Du(t,Be,e)}function Du(e,t,r){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=r;var c=e.baseQueue,f=i.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}t.baseQueue=c=f,i.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{t=c.next;var w=y=null,R=null,J=t,Z=!1;do{var te=J.lane&-536870913;if(te!==J.lane?(Ae&te)===te:(Ea&te)===te){var G=J.revertLane;if(G===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),te===Xr&&(Z=!0);else if((Ea&G)===G){J=J.next,G===Xr&&(Z=!0);continue}else te={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},R===null?(w=R=te,y=f):R=R.next=te,Se.lanes|=G,Da|=G;te=J.action,cr&&r(f,te),f=J.hasEagerState?J.eagerState:r(f,te)}else G={lane:te,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},R===null?(w=R=G,y=f):R=R.next=G,Se.lanes|=te,Da|=te;J=J.next}while(J!==null&&J!==t);if(R===null?y=f:R.next=w,!Pt(f,e.memoizedState)&&(ct=!0,Z&&(r=Zr,r!==null)))throw r;e.memoizedState=f,e.baseState=y,e.baseQueue=R,i.lastRenderedState=f}return c===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Lu(e){var t=rt(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var i=r.dispatch,c=r.pending,f=t.memoizedState;if(c!==null){r.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);Pt(f,t.memoizedState)||(ct=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),r.lastRenderedState=f}return[f,i]}function Wp(e,t,r){var i=Se,c=rt(),f=Re;if(f){if(r===void 0)throw Error(l(407));r=r()}else r=t();var y=!Pt((Be||c).memoizedState,r);y&&(c.memoizedState=r,ct=!0),c=c.queue;var w=nh.bind(null,i,c,e);if(Ss(2048,8,w,[e]),c.getSnapshot!==t||y||at!==null&&at.memoizedState.tag&1){if(i.flags|=2048,eo(9,el(),th.bind(null,i,c,r,t),null),qe===null)throw Error(l(349));f||(Ea&124)!==0||eh(i,t,r)}return r}function eh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Se.updateQueue,t===null?(t=Tu(),Se.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function th(e,t,r,i){t.value=r,t.getSnapshot=i,ah(t)&&rh(e)}function nh(e,t,r){return r(function(){ah(t)&&rh(e)})}function ah(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Pt(e,r)}catch{return!0}}function rh(e){var t=Gr(e,2);t!==null&&Gt(t,e,2)}function Mu(e){var t=Tt();if(typeof e=="function"){var r=e;if(e=r(),cr){At(!0);try{r()}finally{At(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},t}function oh(e,t,r,i){return e.baseState=r,Du(e,Be,typeof i=="function"?i:Zn)}function wj(e,t,r,i,c){if(nl(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};D.T!==null?r(!0):f.isTransition=!1,i(f),r=t.pending,r===null?(f.next=t.pending=f,sh(t,f)):(f.next=r.next,t.pending=r.next=f)}}function sh(e,t){var r=t.action,i=t.payload,c=e.state;if(t.isTransition){var f=D.T,y={};D.T=y;try{var w=r(c,i),R=D.S;R!==null&&R(y,w),ih(e,t,w)}catch(J){_u(e,t,J)}finally{D.T=f}}else try{f=r(c,i),ih(e,t,f)}catch(J){_u(e,t,J)}}function ih(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(i){lh(e,t,i)},function(i){return _u(e,t,i)}):lh(e,t,r)}function lh(e,t,r){t.status="fulfilled",t.value=r,ch(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,sh(e,r)))}function _u(e,t,r){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=r,ch(t),t=t.next;while(t!==i)}e.action=null}function ch(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function uh(e,t){return t}function dh(e,t){if(Re){var r=qe.formState;if(r!==null){e:{var i=Se;if(Re){if(Ke){t:{for(var c=Ke,f=kn;c.nodeType!==8;){if(!f){c=null;break t}if(c=Nn(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ke=Nn(c.nextSibling),i=c.data==="F!";break e}}or(i)}i=!1}i&&(t=r[0])}}return r=Tt(),r.memoizedState=r.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uh,lastRenderedState:t},r.queue=i,r=Th.bind(null,Se,i),i.dispatch=r,i=Mu(!1),f=Iu.bind(null,Se,!1,i.queue),i=Tt(),c={state:t,dispatch:null,action:e,pending:null},i.queue=c,r=wj.bind(null,Se,c,f,r),c.dispatch=r,i.memoizedState=e,[t,r,!1]}function fh(e){var t=rt();return mh(t,Be,e)}function mh(e,t,r){if(t=Du(e,t,uh)[0],e=Wi(Zn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=js(t)}catch(y){throw y===gs?Vi:y}else i=t;t=rt();var c=t.queue,f=c.dispatch;return r!==t.memoizedState&&(Se.flags|=2048,eo(9,el(),jj.bind(null,c,r),null)),[i,f,e]}function jj(e,t){e.action=t}function ph(e){var t=rt(),r=Be;if(r!==null)return mh(t,r,e);rt(),t=t.memoizedState,r=rt();var i=r.queue.dispatch;return r.memoizedState=e,[t,i,!1]}function eo(e,t,r,i){return e={tag:e,create:r,deps:i,inst:t,next:null},t=Se.updateQueue,t===null&&(t=Tu(),Se.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e),e}function el(){return{destroy:void 0,resource:void 0}}function hh(){return rt().memoizedState}function tl(e,t,r,i){var c=Tt();i=i===void 0?null:i,Se.flags|=e,c.memoizedState=eo(1|t,el(),r,i)}function Ss(e,t,r,i){var c=rt();i=i===void 0?null:i;var f=c.memoizedState.inst;Be!==null&&i!==null&&Eu(i,Be.memoizedState.deps)?c.memoizedState=eo(t,f,r,i):(Se.flags|=e,c.memoizedState=eo(1|t,f,r,i))}function gh(e,t){tl(8390656,8,e,t)}function vh(e,t){Ss(2048,8,e,t)}function bh(e,t){return Ss(4,2,e,t)}function yh(e,t){return Ss(4,4,e,t)}function xh(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wh(e,t,r){r=r!=null?r.concat([e]):null,Ss(4,4,xh.bind(null,t,e),r)}function zu(){}function jh(e,t){var r=rt();t=t===void 0?null:t;var i=r.memoizedState;return t!==null&&Eu(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Sh(e,t){var r=rt();t=t===void 0?null:t;var i=r.memoizedState;if(t!==null&&Eu(t,i[1]))return i[0];if(i=e(),cr){At(!0);try{e()}finally{At(!1)}}return r.memoizedState=[i,t],i}function Bu(e,t,r){return r===void 0||(Ea&1073741824)!==0?e.memoizedState=t:(e.memoizedState=r,e=Cg(),Se.lanes|=e,Da|=e,r)}function Nh(e,t,r,i){return Pt(r,t)?r:Kr.current!==null?(e=Bu(e,r,i),Pt(e,t)||(ct=!0),e):(Ea&42)===0?(ct=!0,e.memoizedState=r):(e=Cg(),Se.lanes|=e,Da|=e,t)}function Eh(e,t,r,i,c){var f=K.p;K.p=f!==0&&8>f?f:8;var y=D.T,w={};D.T=w,Iu(e,!1,t,r);try{var R=c(),J=D.S;if(J!==null&&J(w,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var Z=bj(R,i);Ns(e,t,Z,Jt(e))}else Ns(e,t,i,Jt(e))}catch(te){Ns(e,t,{then:function(){},status:"rejected",reason:te},Jt())}finally{K.p=f,D.T=y}}function Sj(){}function Uu(e,t,r,i){if(e.tag!==5)throw Error(l(476));var c=Ch(e).queue;Eh(e,c,t,oe,r===null?Sj:function(){return Ah(e),r(i)})}function Ch(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:oe},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ah(e){var t=Ch(e).next.queue;Ns(e,t,{},Jt())}function Pu(){return yt(Hs)}function Oh(){return rt().memoizedState}function kh(){return rt().memoizedState}function Nj(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=Jt();e=Sa(r);var i=Na(t,e,r);i!==null&&(Gt(i,t,r),bs(i,t,r)),t={cache:hu()},e.payload=t;return}t=t.return}}function Ej(e,t,r){var i=Jt();r={lane:i,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},nl(e)?Rh(t,r):(r=ou(e,t,r,i),r!==null&&(Gt(r,e,i),Dh(r,t,i)))}function Th(e,t,r){var i=Jt();Ns(e,t,r,i)}function Ns(e,t,r,i){var c={lane:i,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(nl(e))Rh(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var y=t.lastRenderedState,w=f(y,r);if(c.hasEagerState=!0,c.eagerState=w,Pt(w,y))return Pi(e,t,c,0),qe===null&&Ui(),!1}catch{}finally{}if(r=ou(e,t,c,i),r!==null)return Gt(r,e,i),Dh(r,t,i),!0}return!1}function Iu(e,t,r,i){if(i={lane:2,revertLane:bd(),action:i,hasEagerState:!1,eagerState:null,next:null},nl(e)){if(t)throw Error(l(479))}else t=ou(e,r,i,2),t!==null&&Gt(t,e,2)}function nl(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Rh(e,t){Qr=Zi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Dh(e,t,r){if((r&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Im(e,r)}}var al={readContext:yt,use:Qi,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We},Lh={readContext:yt,use:Qi,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:gh,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,tl(4194308,4,xh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){tl(4,2,e,t)},useMemo:function(e,t){var r=Tt();t=t===void 0?null:t;var i=e();if(cr){At(!0);try{e()}finally{At(!1)}}return r.memoizedState=[i,t],i},useReducer:function(e,t,r){var i=Tt();if(r!==void 0){var c=r(t);if(cr){At(!0);try{r(t)}finally{At(!1)}}}else c=t;return i.memoizedState=i.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},i.queue=e,e=e.dispatch=Ej.bind(null,Se,e),[i.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:function(e){e=Mu(e);var t=e.queue,r=Th.bind(null,Se,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:zu,useDeferredValue:function(e,t){var r=Tt();return Bu(r,e,t)},useTransition:function(){var e=Mu(!1);return e=Eh.bind(null,Se,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var i=Se,c=Tt();if(Re){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),qe===null)throw Error(l(349));(Ae&124)!==0||eh(i,t,r)}c.memoizedState=r;var f={value:r,getSnapshot:t};return c.queue=f,gh(nh.bind(null,i,f,e),[e]),i.flags|=2048,eo(9,el(),th.bind(null,i,f,r,t),null),r},useId:function(){var e=Tt(),t=qe.identifierPrefix;if(Re){var r=Vn,i=Fn;r=(i&~(1<<32-Ut(i)-1)).toString(32)+r,t="«"+t+"R"+r,r=Ki++,0<r&&(t+="H"+r.toString(32)),t+="»"}else r=yj++,t="«"+t+"r"+r.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Pu,useFormState:dh,useActionState:dh,useOptimistic:function(e){var t=Tt();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=Iu.bind(null,Se,!0,r),r.dispatch=t,[e,t]},useMemoCache:Ru,useCacheRefresh:function(){return Tt().memoizedState=Nj.bind(null,Se)}},Mh={readContext:yt,use:Qi,useCallback:jh,useContext:yt,useEffect:vh,useImperativeHandle:wh,useInsertionEffect:bh,useLayoutEffect:yh,useMemo:Sh,useReducer:Wi,useRef:hh,useState:function(){return Wi(Zn)},useDebugValue:zu,useDeferredValue:function(e,t){var r=rt();return Nh(r,Be.memoizedState,e,t)},useTransition:function(){var e=Wi(Zn)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:js(e),t]},useSyncExternalStore:Wp,useId:Oh,useHostTransitionStatus:Pu,useFormState:fh,useActionState:fh,useOptimistic:function(e,t){var r=rt();return oh(r,Be,e,t)},useMemoCache:Ru,useCacheRefresh:kh},Cj={readContext:yt,use:Qi,useCallback:jh,useContext:yt,useEffect:vh,useImperativeHandle:wh,useInsertionEffect:bh,useLayoutEffect:yh,useMemo:Sh,useReducer:Lu,useRef:hh,useState:function(){return Lu(Zn)},useDebugValue:zu,useDeferredValue:function(e,t){var r=rt();return Be===null?Bu(r,e,t):Nh(r,Be.memoizedState,e,t)},useTransition:function(){var e=Lu(Zn)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:js(e),t]},useSyncExternalStore:Wp,useId:Oh,useHostTransitionStatus:Pu,useFormState:ph,useActionState:ph,useOptimistic:function(e,t){var r=rt();return Be!==null?oh(r,Be,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Ru,useCacheRefresh:kh},to=null,Es=0;function rl(e){var t=Es;return Es+=1,to===null&&(to=[]),Gp(to,e,t)}function Cs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ol(e,t){throw t.$$typeof===x?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _h(e){var t=e._init;return t(e._payload)}function zh(e){function t(I,M){if(e){var q=I.deletions;q===null?(I.deletions=[M],I.flags|=16):q.push(M)}}function r(I,M){if(!e)return null;for(;M!==null;)t(I,M),M=M.sibling;return null}function i(I){for(var M=new Map;I!==null;)I.key!==null?M.set(I.key,I):M.set(I.index,I),I=I.sibling;return M}function c(I,M){return I=Gn(I,M),I.index=0,I.sibling=null,I}function f(I,M,q){return I.index=q,e?(q=I.alternate,q!==null?(q=q.index,q<M?(I.flags|=67108866,M):q):(I.flags|=67108866,M)):(I.flags|=1048576,M)}function y(I){return e&&I.alternate===null&&(I.flags|=67108866),I}function w(I,M,q,Q){return M===null||M.tag!==6?(M=iu(q,I.mode,Q),M.return=I,M):(M=c(M,q),M.return=I,M)}function R(I,M,q,Q){var me=q.type;return me===C?Z(I,M,q.props.children,Q,q.key):M!==null&&(M.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===U&&_h(me)===M.type)?(M=c(M,q.props),Cs(M,q),M.return=I,M):(M=$i(q.type,q.key,q.props,null,I.mode,Q),Cs(M,q),M.return=I,M)}function J(I,M,q,Q){return M===null||M.tag!==4||M.stateNode.containerInfo!==q.containerInfo||M.stateNode.implementation!==q.implementation?(M=lu(q,I.mode,Q),M.return=I,M):(M=c(M,q.children||[]),M.return=I,M)}function Z(I,M,q,Q,me){return M===null||M.tag!==7?(M=tr(q,I.mode,Q,me),M.return=I,M):(M=c(M,q),M.return=I,M)}function te(I,M,q){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=iu(""+M,I.mode,q),M.return=I,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case j:return q=$i(M.type,M.key,M.props,null,I.mode,q),Cs(q,M),q.return=I,q;case N:return M=lu(M,I.mode,q),M.return=I,M;case U:var Q=M._init;return M=Q(M._payload),te(I,M,q)}if(P(M)||le(M))return M=tr(M,I.mode,q,null),M.return=I,M;if(typeof M.then=="function")return te(I,rl(M),q);if(M.$$typeof===T)return te(I,Gi(I,M),q);ol(I,M)}return null}function G(I,M,q,Q){var me=M!==null?M.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return me!==null?null:w(I,M,""+q,Q);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case j:return q.key===me?R(I,M,q,Q):null;case N:return q.key===me?J(I,M,q,Q):null;case U:return me=q._init,q=me(q._payload),G(I,M,q,Q)}if(P(q)||le(q))return me!==null?null:Z(I,M,q,Q,null);if(typeof q.then=="function")return G(I,M,rl(q),Q);if(q.$$typeof===T)return G(I,M,Gi(I,q),Q);ol(I,q)}return null}function F(I,M,q,Q,me){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return I=I.get(q)||null,w(M,I,""+Q,me);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case j:return I=I.get(Q.key===null?q:Q.key)||null,R(M,I,Q,me);case N:return I=I.get(Q.key===null?q:Q.key)||null,J(M,I,Q,me);case U:var Ne=Q._init;return Q=Ne(Q._payload),F(I,M,q,Q,me)}if(P(Q)||le(Q))return I=I.get(q)||null,Z(M,I,Q,me,null);if(typeof Q.then=="function")return F(I,M,q,rl(Q),me);if(Q.$$typeof===T)return F(I,M,q,Gi(M,Q),me);ol(M,Q)}return null}function be(I,M,q,Q){for(var me=null,Ne=null,pe=M,ve=M=0,dt=null;pe!==null&&ve<q.length;ve++){pe.index>ve?(dt=pe,pe=null):dt=pe.sibling;var ke=G(I,pe,q[ve],Q);if(ke===null){pe===null&&(pe=dt);break}e&&pe&&ke.alternate===null&&t(I,pe),M=f(ke,M,ve),Ne===null?me=ke:Ne.sibling=ke,Ne=ke,pe=dt}if(ve===q.length)return r(I,pe),Re&&ar(I,ve),me;if(pe===null){for(;ve<q.length;ve++)pe=te(I,q[ve],Q),pe!==null&&(M=f(pe,M,ve),Ne===null?me=pe:Ne.sibling=pe,Ne=pe);return Re&&ar(I,ve),me}for(pe=i(pe);ve<q.length;ve++)dt=F(pe,I,ve,q[ve],Q),dt!==null&&(e&&dt.alternate!==null&&pe.delete(dt.key===null?ve:dt.key),M=f(dt,M,ve),Ne===null?me=dt:Ne.sibling=dt,Ne=dt);return e&&pe.forEach(function($a){return t(I,$a)}),Re&&ar(I,ve),me}function ge(I,M,q,Q){if(q==null)throw Error(l(151));for(var me=null,Ne=null,pe=M,ve=M=0,dt=null,ke=q.next();pe!==null&&!ke.done;ve++,ke=q.next()){pe.index>ve?(dt=pe,pe=null):dt=pe.sibling;var $a=G(I,pe,ke.value,Q);if($a===null){pe===null&&(pe=dt);break}e&&pe&&$a.alternate===null&&t(I,pe),M=f($a,M,ve),Ne===null?me=$a:Ne.sibling=$a,Ne=$a,pe=dt}if(ke.done)return r(I,pe),Re&&ar(I,ve),me;if(pe===null){for(;!ke.done;ve++,ke=q.next())ke=te(I,ke.value,Q),ke!==null&&(M=f(ke,M,ve),Ne===null?me=ke:Ne.sibling=ke,Ne=ke);return Re&&ar(I,ve),me}for(pe=i(pe);!ke.done;ve++,ke=q.next())ke=F(pe,I,ve,ke.value,Q),ke!==null&&(e&&ke.alternate!==null&&pe.delete(ke.key===null?ve:ke.key),M=f(ke,M,ve),Ne===null?me=ke:Ne.sibling=ke,Ne=ke);return e&&pe.forEach(function(AS){return t(I,AS)}),Re&&ar(I,ve),me}function Pe(I,M,q,Q){if(typeof q=="object"&&q!==null&&q.type===C&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case j:e:{for(var me=q.key;M!==null;){if(M.key===me){if(me=q.type,me===C){if(M.tag===7){r(I,M.sibling),Q=c(M,q.props.children),Q.return=I,I=Q;break e}}else if(M.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===U&&_h(me)===M.type){r(I,M.sibling),Q=c(M,q.props),Cs(Q,q),Q.return=I,I=Q;break e}r(I,M);break}else t(I,M);M=M.sibling}q.type===C?(Q=tr(q.props.children,I.mode,Q,q.key),Q.return=I,I=Q):(Q=$i(q.type,q.key,q.props,null,I.mode,Q),Cs(Q,q),Q.return=I,I=Q)}return y(I);case N:e:{for(me=q.key;M!==null;){if(M.key===me)if(M.tag===4&&M.stateNode.containerInfo===q.containerInfo&&M.stateNode.implementation===q.implementation){r(I,M.sibling),Q=c(M,q.children||[]),Q.return=I,I=Q;break e}else{r(I,M);break}else t(I,M);M=M.sibling}Q=lu(q,I.mode,Q),Q.return=I,I=Q}return y(I);case U:return me=q._init,q=me(q._payload),Pe(I,M,q,Q)}if(P(q))return be(I,M,q,Q);if(le(q)){if(me=le(q),typeof me!="function")throw Error(l(150));return q=me.call(q),ge(I,M,q,Q)}if(typeof q.then=="function")return Pe(I,M,rl(q),Q);if(q.$$typeof===T)return Pe(I,M,Gi(I,q),Q);ol(I,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,M!==null&&M.tag===6?(r(I,M.sibling),Q=c(M,q),Q.return=I,I=Q):(r(I,M),Q=iu(q,I.mode,Q),Q.return=I,I=Q),y(I)):r(I,M)}return function(I,M,q,Q){try{Es=0;var me=Pe(I,M,q,Q);return to=null,me}catch(pe){if(pe===gs||pe===Vi)throw pe;var Ne=It(29,pe,null,I.mode);return Ne.lanes=Q,Ne.return=I,Ne}finally{}}}var no=zh(!0),Bh=zh(!1),ln=$(null),Tn=null;function Ca(e){var t=e.alternate;ae(it,it.current&1),ae(ln,e),Tn===null&&(t===null||Kr.current!==null||t.memoizedState!==null)&&(Tn=e)}function Uh(e){if(e.tag===22){if(ae(it,it.current),ae(ln,e),Tn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Tn=e)}}else Aa()}function Aa(){ae(it,it.current),ae(ln,ln.current)}function Kn(e){re(ln),Tn===e&&(Tn=null),re(it)}var it=$(0);function sl(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Td(r)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function $u(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:b({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Hu={enqueueSetState:function(e,t,r){e=e._reactInternals;var i=Jt(),c=Sa(i);c.payload=t,r!=null&&(c.callback=r),t=Na(e,c,i),t!==null&&(Gt(t,e,i),bs(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=Jt(),c=Sa(i);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=Na(e,c,i),t!==null&&(Gt(t,e,i),bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Jt(),i=Sa(r);i.tag=2,t!=null&&(i.callback=t),t=Na(e,i,r),t!==null&&(Gt(t,e,r),bs(t,e,r))}};function Ph(e,t,r,i,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,f,y):t.prototype&&t.prototype.isPureReactComponent?!ls(r,i)||!ls(c,f):!0}function Ih(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Hu.enqueueReplaceState(t,t.state,null)}function ur(e,t){var r=t;if("ref"in t){r={};for(var i in t)i!=="ref"&&(r[i]=t[i])}if(e=e.defaultProps){r===t&&(r=b({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $h(e){il(e)}function Hh(e){console.error(e)}function qh(e){il(e)}function ll(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Jh(e,t,r){try{var i=e.onCaughtError;i(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function qu(e,t,r){return r=Sa(r),r.tag=3,r.payload={element:null},r.callback=function(){ll(e,t)},r}function Gh(e){return e=Sa(e),e.tag=3,e}function Fh(e,t,r,i){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;e.payload=function(){return c(f)},e.callback=function(){Jh(t,r,i)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Jh(t,r,i),typeof c!="function"&&(La===null?La=new Set([this]):La.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})})}function Aj(e,t,r,i,c){if(r.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=r.alternate,t!==null&&ms(t,r,c,!0),r=ln.current,r!==null){switch(r.tag){case 13:return Tn===null?md():r.alternate===null&&Qe===0&&(Qe=3),r.flags&=-257,r.flags|=65536,r.lanes=c,i===bu?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([i]):t.add(i),hd(e,i,c)),!1;case 22:return r.flags|=65536,i===bu?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([i]):r.add(i)),hd(e,i,c)),!1}throw Error(l(435,r.tag))}return hd(e,i,c),md(),!1}if(Re)return t=ln.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,i!==du&&(e=Error(l(422),{cause:i}),fs(an(e,r)))):(i!==du&&(t=Error(l(423),{cause:i}),fs(an(t,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,i=an(i,r),c=qu(e.stateNode,i,c),wu(e,c),Qe!==4&&(Qe=2)),!1;var f=Error(l(520),{cause:i});if(f=an(f,r),Ls===null?Ls=[f]:Ls.push(f),Qe!==4&&(Qe=2),t===null)return!0;i=an(i,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=qu(r.stateNode,i,e),wu(r,e),!1;case 1:if(t=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(La===null||!La.has(f))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Gh(c),Fh(c,e,r,i),wu(r,c),!1}r=r.return}while(r!==null);return!1}var Vh=Error(l(461)),ct=!1;function mt(e,t,r,i){t.child=e===null?Bh(t,null,r,i):no(t,e.child,r,i)}function Yh(e,t,r,i,c){r=r.render;var f=t.ref;if("ref"in i){var y={};for(var w in i)w!=="ref"&&(y[w]=i[w])}else y=i;return ir(t),i=Cu(e,t,r,y,f,c),w=Au(),e!==null&&!ct?(Ou(e,t,c),Qn(e,t,c)):(Re&&w&&cu(t),t.flags|=1,mt(e,t,i,c),t.child)}function Xh(e,t,r,i,c){if(e===null){var f=r.type;return typeof f=="function"&&!su(f)&&f.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=f,Zh(e,t,f,i,c)):(e=$i(r.type,null,i,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!Ku(e,c)){var y=f.memoizedProps;if(r=r.compare,r=r!==null?r:ls,r(y,i)&&e.ref===t.ref)return Qn(e,t,c)}return t.flags|=1,e=Gn(f,i),e.ref=t.ref,e.return=t,t.child=e}function Zh(e,t,r,i,c){if(e!==null){var f=e.memoizedProps;if(ls(f,i)&&e.ref===t.ref)if(ct=!1,t.pendingProps=i=f,Ku(e,c))(e.flags&131072)!==0&&(ct=!0);else return t.lanes=e.lanes,Qn(e,t,c)}return Ju(e,t,r,i,c)}function Kh(e,t,r){var i=t.pendingProps,c=i.children,f=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=f!==null?f.baseLanes|r:r,e!==null){for(c=t.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;t.childLanes=f&~i}else t.childLanes=0,t.child=null;return Qh(e,t,i,r)}if((r&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fi(t,f!==null?f.cachePool:null),f!==null?Zp(t,f):Su(),Uh(t);else return t.lanes=t.childLanes=536870912,Qh(e,t,f!==null?f.baseLanes|r:r,r)}else f!==null?(Fi(t,f.cachePool),Zp(t,f),Aa(),t.memoizedState=null):(e!==null&&Fi(t,null),Su(),Aa());return mt(e,t,c,r),t.child}function Qh(e,t,r,i){var c=vu();return c=c===null?null:{parent:st._currentValue,pool:c},t.memoizedState={baseLanes:r,cachePool:c},e!==null&&Fi(t,null),Su(),Uh(t),e!==null&&ms(e,t,i,!0),null}function cl(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(l(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function Ju(e,t,r,i,c){return ir(t),r=Cu(e,t,r,i,void 0,c),i=Au(),e!==null&&!ct?(Ou(e,t,c),Qn(e,t,c)):(Re&&i&&cu(t),t.flags|=1,mt(e,t,r,c),t.child)}function Wh(e,t,r,i,c,f){return ir(t),t.updateQueue=null,r=Qp(t,i,r,c),Kp(e),i=Au(),e!==null&&!ct?(Ou(e,t,f),Qn(e,t,f)):(Re&&i&&cu(t),t.flags|=1,mt(e,t,r,f),t.child)}function eg(e,t,r,i,c){if(ir(t),t.stateNode===null){var f=Fr,y=r.contextType;typeof y=="object"&&y!==null&&(f=yt(y)),f=new r(i,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Hu,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=i,f.state=t.memoizedState,f.refs={},yu(t),y=r.contextType,f.context=typeof y=="object"&&y!==null?yt(y):Fr,f.state=t.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&($u(t,r,y,i),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Hu.enqueueReplaceState(f,f.state,null),xs(t,i,f,c),ys(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){f=t.stateNode;var w=t.memoizedProps,R=ur(r,w);f.props=R;var J=f.context,Z=r.contextType;y=Fr,typeof Z=="object"&&Z!==null&&(y=yt(Z));var te=r.getDerivedStateFromProps;Z=typeof te=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,Z||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||J!==y)&&Ih(t,f,i,y),ja=!1;var G=t.memoizedState;f.state=G,xs(t,i,f,c),ys(),J=t.memoizedState,w||G!==J||ja?(typeof te=="function"&&($u(t,r,te,i),J=t.memoizedState),(R=ja||Ph(t,r,R,i,G,J,y))?(Z||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=J),f.props=i,f.state=J,f.context=y,i=R):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{f=t.stateNode,xu(e,t),y=t.memoizedProps,Z=ur(r,y),f.props=Z,te=t.pendingProps,G=f.context,J=r.contextType,R=Fr,typeof J=="object"&&J!==null&&(R=yt(J)),w=r.getDerivedStateFromProps,(J=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==te||G!==R)&&Ih(t,f,i,R),ja=!1,G=t.memoizedState,f.state=G,xs(t,i,f,c),ys();var F=t.memoizedState;y!==te||G!==F||ja||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof w=="function"&&($u(t,r,w,i),F=t.memoizedState),(Z=ja||Ph(t,r,Z,i,G,F,R)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(i,F,R),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(i,F,R)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=F),f.props=i,f.state=F,f.context=R,i=Z):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),i=!1)}return f=i,cl(e,t),i=(t.flags&128)!==0,f||i?(f=t.stateNode,r=i&&typeof r.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&i?(t.child=no(t,e.child,null,c),t.child=no(t,null,r,c)):mt(e,t,r,c),t.memoizedState=f.state,e=t.child):e=Qn(e,t,c),e}function tg(e,t,r,i){return ds(),t.flags|=256,mt(e,t,r,i),t.child}var Gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fu(e){return{baseLanes:e,cachePool:Hp()}}function Vu(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=cn),e}function ng(e,t,r){var i=t.pendingProps,c=!1,f=(t.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(it.current&2)!==0),y&&(c=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(c?Ca(t):Aa(),Re){var w=Ke,R;if(R=w){e:{for(R=w,w=kn;R.nodeType!==8;){if(!w){w=null;break e}if(R=Nn(R.nextSibling),R===null){w=null;break e}}w=R}w!==null?(t.memoizedState={dehydrated:w,treeContext:nr!==null?{id:Fn,overflow:Vn}:null,retryLane:536870912,hydrationErrors:null},R=It(18,null,null,0),R.stateNode=w,R.return=t,t.child=R,jt=t,Ke=null,R=!0):R=!1}R||or(t)}if(w=t.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Td(w)?t.lanes=32:t.lanes=536870912,null;Kn(t)}return w=i.children,i=i.fallback,c?(Aa(),c=t.mode,w=ul({mode:"hidden",children:w},c),i=tr(i,c,r,null),w.return=t,i.return=t,w.sibling=i,t.child=w,c=t.child,c.memoizedState=Fu(r),c.childLanes=Vu(e,y,r),t.memoizedState=Gu,i):(Ca(t),Yu(t,w))}if(R=e.memoizedState,R!==null&&(w=R.dehydrated,w!==null)){if(f)t.flags&256?(Ca(t),t.flags&=-257,t=Xu(e,t,r)):t.memoizedState!==null?(Aa(),t.child=e.child,t.flags|=128,t=null):(Aa(),c=i.fallback,w=t.mode,i=ul({mode:"visible",children:i.children},w),c=tr(c,w,r,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,no(t,e.child,null,r),i=t.child,i.memoizedState=Fu(r),i.childLanes=Vu(e,y,r),t.memoizedState=Gu,t=c);else if(Ca(t),Td(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var J=y.dgst;y=J,i=Error(l(419)),i.stack="",i.digest=y,fs({value:i,source:null,stack:null}),t=Xu(e,t,r)}else if(ct||ms(e,t,r,!1),y=(r&e.childLanes)!==0,ct||y){if(y=qe,y!==null&&(i=r&-r,i=(i&42)!==0?1:Rc(i),i=(i&(y.suspendedLanes|r))!==0?0:i,i!==0&&i!==R.retryLane))throw R.retryLane=i,Gr(e,i),Gt(y,e,i),Vh;w.data==="$?"||md(),t=Xu(e,t,r)}else w.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=R.treeContext,Ke=Nn(w.nextSibling),jt=t,Re=!0,rr=null,kn=!1,e!==null&&(on[sn++]=Fn,on[sn++]=Vn,on[sn++]=nr,Fn=e.id,Vn=e.overflow,nr=t),t=Yu(t,i.children),t.flags|=4096);return t}return c?(Aa(),c=i.fallback,w=t.mode,R=e.child,J=R.sibling,i=Gn(R,{mode:"hidden",children:i.children}),i.subtreeFlags=R.subtreeFlags&65011712,J!==null?c=Gn(J,c):(c=tr(c,w,r,null),c.flags|=2),c.return=t,i.return=t,i.sibling=c,t.child=i,i=c,c=t.child,w=e.child.memoizedState,w===null?w=Fu(r):(R=w.cachePool,R!==null?(J=st._currentValue,R=R.parent!==J?{parent:J,pool:J}:R):R=Hp(),w={baseLanes:w.baseLanes|r,cachePool:R}),c.memoizedState=w,c.childLanes=Vu(e,y,r),t.memoizedState=Gu,i):(Ca(t),r=e.child,e=r.sibling,r=Gn(r,{mode:"visible",children:i.children}),r.return=t,r.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=r,t.memoizedState=null,r)}function Yu(e,t){return t=ul({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ul(e,t){return e=It(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Xu(e,t,r){return no(t,e.child,null,r),e=Yu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ag(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),mu(e.return,t,r)}function Zu(e,t,r,i,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:c}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=i,f.tail=r,f.tailMode=c)}function rg(e,t,r){var i=t.pendingProps,c=i.revealOrder,f=i.tail;if(mt(e,t,i.children,r),i=it.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,r,t);else if(e.tag===19)ag(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(ae(it,i),c){case"forwards":for(r=t.child,c=null;r!==null;)e=r.alternate,e!==null&&sl(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=t.child,t.child=null):(c=r.sibling,r.sibling=null),Zu(t,!1,c,r,f);break;case"backwards":for(r=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&sl(e)===null){t.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}Zu(t,!0,r,null,f);break;case"together":Zu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Da|=t.lanes,(r&t.childLanes)===0)if(e!==null){if(ms(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=Gn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Gn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ku(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ji(e)))}function Oj(e,t,r){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),wa(t,st,e.memoizedState.cache),ds();break;case 27:case 5:zt(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:wa(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ca(t),t.flags|=128,null):(r&t.child.childLanes)!==0?ng(e,t,r):(Ca(t),e=Qn(e,t,r),e!==null?e.sibling:null);Ca(t);break;case 19:var c=(e.flags&128)!==0;if(i=(r&t.childLanes)!==0,i||(ms(e,t,r,!1),i=(r&t.childLanes)!==0),c){if(i)return rg(e,t,r);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ae(it,it.current),i)break;return null;case 22:case 23:return t.lanes=0,Kh(e,t,r);case 24:wa(t,st,e.memoizedState.cache)}return Qn(e,t,r)}function og(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)ct=!0;else{if(!Ku(e,r)&&(t.flags&128)===0)return ct=!1,Oj(e,t,r);ct=(e.flags&131072)!==0}else ct=!1,Re&&(t.flags&1048576)!==0&&_p(t,qi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,c=i._init;if(i=c(i._payload),t.type=i,typeof i=="function")su(i)?(e=ur(i,e),t.tag=1,t=eg(null,t,i,e,r)):(t.tag=0,t=Ju(null,t,i,e,r));else{if(i!=null){if(c=i.$$typeof,c===L){t.tag=11,t=Yh(null,t,i,e,r);break e}else if(c===_){t.tag=14,t=Xh(null,t,i,e,r);break e}}throw t=ee(i)||i,Error(l(306,t,""))}}return t;case 0:return Ju(e,t,t.type,t.pendingProps,r);case 1:return i=t.type,c=ur(i,t.pendingProps),eg(e,t,i,c,r);case 3:e:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var f=t.memoizedState;c=f.element,xu(e,t),xs(t,i,null,r);var y=t.memoizedState;if(i=y.cache,wa(t,st,i),i!==f.cache&&pu(t,[st],r,!0),ys(),i=y.element,f.isDehydrated)if(f={element:i,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=tg(e,t,i,r);break e}else if(i!==c){c=an(Error(l(424)),t),fs(c),t=tg(e,t,i,r);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=Nn(e.firstChild),jt=t,Re=!0,rr=null,kn=!0,r=Bh(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(ds(),i===c){t=Qn(e,t,r);break e}mt(e,t,i,r)}t=t.child}return t;case 26:return cl(e,t),e===null?(r=cv(t.type,null,t.pendingProps,null))?t.memoizedState=r:Re||(r=t.type,e=t.pendingProps,i=Nl(fe.current).createElement(r),i[bt]=t,i[Ot]=e,ht(i,r,e),lt(i),t.stateNode=i):t.memoizedState=cv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zt(t),e===null&&Re&&(i=t.stateNode=sv(t.type,t.pendingProps,fe.current),jt=t,kn=!0,c=Ke,za(t.type)?(Rd=c,Ke=Nn(i.firstChild)):Ke=c),mt(e,t,t.pendingProps.children,r),cl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((c=i=Ke)&&(i=nS(i,t.type,t.pendingProps,kn),i!==null?(t.stateNode=i,jt=t,Ke=Nn(i.firstChild),kn=!1,c=!0):c=!1),c||or(t)),zt(t),c=t.type,f=t.pendingProps,y=e!==null?e.memoizedProps:null,i=f.children,Ad(c,f)?i=null:y!==null&&Ad(c,y)&&(t.flags|=32),t.memoizedState!==null&&(c=Cu(e,t,xj,null,null,r),Hs._currentValue=c),cl(e,t),mt(e,t,i,r),t.child;case 6:return e===null&&Re&&((e=r=Ke)&&(r=aS(r,t.pendingProps,kn),r!==null?(t.stateNode=r,jt=t,Ke=null,e=!0):e=!1),e||or(t)),null;case 13:return ng(e,t,r);case 4:return we(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=no(t,null,i,r):mt(e,t,i,r),t.child;case 11:return Yh(e,t,t.type,t.pendingProps,r);case 7:return mt(e,t,t.pendingProps,r),t.child;case 8:return mt(e,t,t.pendingProps.children,r),t.child;case 12:return mt(e,t,t.pendingProps.children,r),t.child;case 10:return i=t.pendingProps,wa(t,t.type,i.value),mt(e,t,i.children,r),t.child;case 9:return c=t.type._context,i=t.pendingProps.children,ir(t),c=yt(c),i=i(c),t.flags|=1,mt(e,t,i,r),t.child;case 14:return Xh(e,t,t.type,t.pendingProps,r);case 15:return Zh(e,t,t.type,t.pendingProps,r);case 19:return rg(e,t,r);case 31:return i=t.pendingProps,r=t.mode,i={mode:i.mode,children:i.children},e===null?(r=ul(i,r),r.ref=t.ref,t.child=r,r.return=t,t=r):(r=Gn(e.child,i),r.ref=t.ref,t.child=r,r.return=t,t=r),t;case 22:return Kh(e,t,r);case 24:return ir(t),i=yt(st),e===null?(c=vu(),c===null&&(c=qe,f=hu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=r),c=f),t.memoizedState={parent:i,cache:c},yu(t),wa(t,st,c)):((e.lanes&r)!==0&&(xu(e,t),xs(t,null,null,r),ys()),c=e.memoizedState,f=t.memoizedState,c.parent!==i?(c={parent:i,cache:i},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),wa(t,st,i)):(i=f.cache,wa(t,st,i),i!==c.cache&&pu(t,[st],r,!0))),mt(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Wn(e){e.flags|=4}function sg(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pv(t)){if(t=ln.current,t!==null&&((Ae&4194048)===Ae?Tn!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||t!==Tn))throw vs=bu,qp;e.flags|=8192}}function dl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Um():536870912,e.lanes|=t,so|=t)}function As(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,i|=c.subtreeFlags&65011712,i|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function kj(e,t,r){var i=t.pendingProps;switch(uu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return Xe(t),null;case 3:return r=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Xn(st),Ie(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(us(t)?Wn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Up())),Xe(t),null;case 26:return r=t.memoizedState,e===null?(Wn(t),r!==null?(Xe(t),sg(t,r)):(Xe(t),t.flags&=-16777217)):r?r!==e.memoizedState?(Wn(t),Xe(t),sg(t,r)):(Xe(t),t.flags&=-16777217):(e.memoizedProps!==i&&Wn(t),Xe(t),t.flags&=-16777217),null;case 27:Bt(t),r=fe.current;var c=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Wn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Xe(t),null}e=H.current,us(t)?zp(t):(e=sv(c,i,r),t.stateNode=e,Wn(t))}return Xe(t),null;case 5:if(Bt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Wn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Xe(t),null}if(e=H.current,us(t))zp(t);else{switch(c=Nl(fe.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?c.createElement("select",{is:i.is}):c.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?c.createElement(r,{is:i.is}):c.createElement(r)}}e[bt]=t,e[Ot]=i;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=e;e:switch(ht(e,r,i),r){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Wn(t)}}return Xe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Wn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=fe.current,us(t)){if(e=t.stateNode,r=t.memoizedProps,i=null,c=jt,c!==null)switch(c.tag){case 27:case 5:i=c.memoizedProps}e[bt]=t,e=!!(e.nodeValue===r||i!==null&&i.suppressHydrationWarning===!0||Wg(e.nodeValue,r)),e||or(t)}else e=Nl(e).createTextNode(i),e[bt]=t,t.stateNode=e}return Xe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=us(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[bt]=t}else ds(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),c=!1}else c=Up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Kn(t),t):(Kn(t),null)}if(Kn(t),(t.flags&128)!==0)return t.lanes=r,t;if(r=i!==null,e=e!==null&&e.memoizedState!==null,r){i=t.child,c=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(c=i.alternate.memoizedState.cachePool.pool);var f=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(f=i.memoizedState.cachePool.pool),f!==c&&(i.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),dl(t,t.updateQueue),Xe(t),null;case 4:return Ie(),e===null&&jd(t.stateNode.containerInfo),Xe(t),null;case 10:return Xn(t.type),Xe(t),null;case 19:if(re(it),c=t.memoizedState,c===null)return Xe(t),null;if(i=(t.flags&128)!==0,f=c.rendering,f===null)if(i)As(c,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=sl(e),f!==null){for(t.flags|=128,As(c,!1),e=f.updateQueue,t.updateQueue=e,dl(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)Mp(r,e),r=r.sibling;return ae(it,it.current&1|2),t.child}e=e.sibling}c.tail!==null&&ot()>pl&&(t.flags|=128,i=!0,As(c,!1),t.lanes=4194304)}else{if(!i)if(e=sl(f),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,dl(t,e),As(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return Xe(t),null}else 2*ot()-c.renderingStartTime>pl&&r!==536870912&&(t.flags|=128,i=!0,As(c,!1),t.lanes=4194304);c.isBackwards?(f.sibling=t.child,t.child=f):(e=c.last,e!==null?e.sibling=f:t.child=f,c.last=f)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=ot(),t.sibling=null,e=it.current,ae(it,i?e&1|2:e&1),t):(Xe(t),null);case 22:case 23:return Kn(t),Nu(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(r&536870912)!==0&&(t.flags&128)===0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),r=t.updateQueue,r!==null&&dl(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==r&&(t.flags|=2048),e!==null&&re(lr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Xn(st),Xe(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Tj(e,t){switch(uu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(st),Ie(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Bt(t),null;case 13:if(Kn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ds()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(it),null;case 4:return Ie(),null;case 10:return Xn(t.type),null;case 22:case 23:return Kn(t),Nu(),e!==null&&re(lr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xn(st),null;case 25:return null;default:return null}}function ig(e,t){switch(uu(t),t.tag){case 3:Xn(st),Ie();break;case 26:case 27:case 5:Bt(t);break;case 4:Ie();break;case 13:Kn(t);break;case 19:re(it);break;case 10:Xn(t.type);break;case 22:case 23:Kn(t),Nu(),e!==null&&re(lr);break;case 24:Xn(st)}}function Os(e,t){try{var r=t.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var c=i.next;r=c;do{if((r.tag&e)===e){i=void 0;var f=r.create,y=r.inst;i=f(),y.destroy=i}r=r.next}while(r!==c)}}catch(w){$e(t,t.return,w)}}function Oa(e,t,r){try{var i=t.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var f=c.next;i=f;do{if((i.tag&e)===e){var y=i.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,c=t;var R=r,J=w;try{J()}catch(Z){$e(c,R,Z)}}}i=i.next}while(i!==f)}}catch(Z){$e(t,t.return,Z)}}function lg(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{Xp(t,r)}catch(i){$e(e,e.return,i)}}}function cg(e,t,r){r.props=ur(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(i){$e(e,t,i)}}function ks(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof r=="function"?e.refCleanup=r(i):r.current=i}}catch(c){$e(e,t,c)}}function Rn(e,t){var r=e.ref,i=e.refCleanup;if(r!==null)if(typeof i=="function")try{i()}catch(c){$e(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){$e(e,t,c)}else r.current=null}function ug(e){var t=e.type,r=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&i.focus();break e;case"img":r.src?i.src=r.src:r.srcSet&&(i.srcset=r.srcSet)}}catch(c){$e(e,e.return,c)}}function Qu(e,t,r){try{var i=e.stateNode;Kj(i,e.type,r,t),i[Ot]=t}catch(c){$e(e,e.return,c)}}function dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ed(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Sl));else if(i!==4&&(i===27&&za(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(ed(e,t,r),e=e.sibling;e!==null;)ed(e,t,r),e=e.sibling}function fl(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(i===27&&za(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(fl(e,t,r),e=e.sibling;e!==null;)fl(e,t,r),e=e.sibling}function fg(e){var t=e.stateNode,r=e.memoizedProps;try{for(var i=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);ht(t,i,r),t[bt]=e,t[Ot]=r}catch(f){$e(e,e.return,f)}}var ea=!1,et=!1,td=!1,mg=typeof WeakSet=="function"?WeakSet:Set,ut=null;function Rj(e,t){if(e=e.containerInfo,Ed=Tl,e=Np(e),Wc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var c=i.anchorOffset,f=i.focusNode;i=i.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var y=0,w=-1,R=-1,J=0,Z=0,te=e,G=null;t:for(;;){for(var F;te!==r||c!==0&&te.nodeType!==3||(w=y+c),te!==f||i!==0&&te.nodeType!==3||(R=y+i),te.nodeType===3&&(y+=te.nodeValue.length),(F=te.firstChild)!==null;)G=te,te=F;for(;;){if(te===e)break t;if(G===r&&++J===c&&(w=y),G===f&&++Z===i&&(R=y),(F=te.nextSibling)!==null)break;te=G,G=te.parentNode}te=F}r=w===-1||R===-1?null:{start:w,end:R}}else r=null}r=r||{start:0,end:0}}else r=null;for(Cd={focusedElem:e,selectionRange:r},Tl=!1,ut=t;ut!==null;)if(t=ut,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ut=e;else for(;ut!==null;){switch(t=ut,f=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=t,c=f.memoizedProps,f=f.memoizedState,i=r.stateNode;try{var be=ur(r.type,c,r.elementType===r.type);e=i.getSnapshotBeforeUpdate(be,f),i.__reactInternalSnapshotBeforeUpdate=e}catch(ge){$e(r,r.return,ge)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)kd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,ut=e;break}ut=t.return}}function pg(e,t,r){var i=r.flags;switch(r.tag){case 0:case 11:case 15:ka(e,r),i&4&&Os(5,r);break;case 1:if(ka(e,r),i&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(y){$e(r,r.return,y)}else{var c=ur(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){$e(r,r.return,y)}}i&64&&lg(r),i&512&&ks(r,r.return);break;case 3:if(ka(e,r),i&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{Xp(e,t)}catch(y){$e(r,r.return,y)}}break;case 27:t===null&&i&4&&fg(r);case 26:case 5:ka(e,r),t===null&&i&4&&ug(r),i&512&&ks(r,r.return);break;case 12:ka(e,r);break;case 13:ka(e,r),i&4&&vg(e,r),i&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Ij.bind(null,r),rS(e,r))));break;case 22:if(i=r.memoizedState!==null||ea,!i){t=t!==null&&t.memoizedState!==null||et,c=ea;var f=et;ea=i,(et=t)&&!f?Ta(e,r,(r.subtreeFlags&8772)!==0):ka(e,r),ea=c,et=f}break;case 30:break;default:ka(e,r)}}function hg(e){var t=e.alternate;t!==null&&(e.alternate=null,hg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,Rt=!1;function ta(e,t,r){for(r=r.child;r!==null;)gg(e,t,r),r=r.sibling}function gg(e,t,r){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(je,r)}catch{}switch(r.tag){case 26:et||Rn(r,t),ta(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:et||Rn(r,t);var i=Ge,c=Rt;za(r.type)&&(Ge=r.stateNode,Rt=!1),ta(e,t,r),Us(r.stateNode),Ge=i,Rt=c;break;case 5:et||Rn(r,t);case 6:if(i=Ge,c=Rt,Ge=null,ta(e,t,r),Ge=i,Rt=c,Ge!==null)if(Rt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(r.stateNode)}catch(f){$e(r,t,f)}else try{Ge.removeChild(r.stateNode)}catch(f){$e(r,t,f)}break;case 18:Ge!==null&&(Rt?(e=Ge,rv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Fs(e)):rv(Ge,r.stateNode));break;case 4:i=Ge,c=Rt,Ge=r.stateNode.containerInfo,Rt=!0,ta(e,t,r),Ge=i,Rt=c;break;case 0:case 11:case 14:case 15:et||Oa(2,r,t),et||Oa(4,r,t),ta(e,t,r);break;case 1:et||(Rn(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"&&cg(r,t,i)),ta(e,t,r);break;case 21:ta(e,t,r);break;case 22:et=(i=et)||r.memoizedState!==null,ta(e,t,r),et=i;break;default:ta(e,t,r)}}function vg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fs(e)}catch(r){$e(t,t.return,r)}}function Dj(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mg),t;default:throw Error(l(435,e.tag))}}function nd(e,t){var r=Dj(e);t.forEach(function(i){var c=$j.bind(null,e,i);r.has(i)||(r.add(i),i.then(c,c))})}function $t(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var c=r[i],f=e,y=t,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(za(w.type)){Ge=w.stateNode,Rt=!1;break e}break;case 5:Ge=w.stateNode,Rt=!1;break e;case 3:case 4:Ge=w.stateNode.containerInfo,Rt=!0;break e}w=w.return}if(Ge===null)throw Error(l(160));gg(f,y,c),Ge=null,Rt=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)bg(t,e),t=t.sibling}var Sn=null;function bg(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$t(t,e),Ht(e),i&4&&(Oa(3,e,e.return),Os(3,e),Oa(5,e,e.return));break;case 1:$t(t,e),Ht(e),i&512&&(et||r===null||Rn(r,r.return)),i&64&&ea&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?i:r.concat(i))));break;case 26:var c=Sn;if($t(t,e),Ht(e),i&512&&(et||r===null||Rn(r,r.return)),i&4){var f=r!==null?r.memoizedState:null;if(i=e.memoizedState,r===null)if(i===null)if(e.stateNode===null){e:{i=e.type,r=e.memoizedProps,c=c.ownerDocument||c;t:switch(i){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Wo]||f[bt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(i),c.head.insertBefore(f,c.querySelector("head > title"))),ht(f,i,r),f[bt]=e,lt(f),i=f;break e;case"link":var y=fv("link","href",c).get(i+(r.href||""));if(y){for(var w=0;w<y.length;w++)if(f=y[w],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(w,1);break t}}f=c.createElement(i),ht(f,i,r),c.head.appendChild(f);break;case"meta":if(y=fv("meta","content",c).get(i+(r.content||""))){for(w=0;w<y.length;w++)if(f=y[w],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(w,1);break t}}f=c.createElement(i),ht(f,i,r),c.head.appendChild(f);break;default:throw Error(l(468,i))}f[bt]=e,lt(f),i=f}e.stateNode=i}else mv(c,e.type,e.stateNode);else e.stateNode=dv(c,i,e.memoizedProps);else f!==i?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,i===null?mv(c,e.type,e.stateNode):dv(c,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Qu(e,e.memoizedProps,r.memoizedProps)}break;case 27:$t(t,e),Ht(e),i&512&&(et||r===null||Rn(r,r.return)),r!==null&&i&4&&Qu(e,e.memoizedProps,r.memoizedProps);break;case 5:if($t(t,e),Ht(e),i&512&&(et||r===null||Rn(r,r.return)),e.flags&32){c=e.stateNode;try{Ur(c,"")}catch(F){$e(e,e.return,F)}}i&4&&e.stateNode!=null&&(c=e.memoizedProps,Qu(e,c,r!==null?r.memoizedProps:c)),i&1024&&(td=!0);break;case 6:if($t(t,e),Ht(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,r=e.stateNode;try{r.nodeValue=i}catch(F){$e(e,e.return,F)}}break;case 3:if(Al=null,c=Sn,Sn=El(t.containerInfo),$t(t,e),Sn=c,Ht(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Fs(t.containerInfo)}catch(F){$e(e,e.return,F)}td&&(td=!1,yg(e));break;case 4:i=Sn,Sn=El(e.stateNode.containerInfo),$t(t,e),Ht(e),Sn=i;break;case 12:$t(t,e),Ht(e);break;case 13:$t(t,e),Ht(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ld=ot()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,nd(e,i)));break;case 22:c=e.memoizedState!==null;var R=r!==null&&r.memoizedState!==null,J=ea,Z=et;if(ea=J||c,et=Z||R,$t(t,e),et=Z,ea=J,Ht(e),i&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(r===null||R||ea||et||dr(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){R=r=t;try{if(f=R.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=R.stateNode;var te=R.memoizedProps.style,G=te!=null&&te.hasOwnProperty("display")?te.display:null;w.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(F){$e(R,R.return,F)}}}else if(t.tag===6){if(r===null){R=t;try{R.stateNode.nodeValue=c?"":R.memoizedProps}catch(F){$e(R,R.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(r=i.retryQueue,r!==null&&(i.retryQueue=null,nd(e,r))));break;case 19:$t(t,e),Ht(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,nd(e,i)));break;case 30:break;case 21:break;default:$t(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{for(var r,i=e.return;i!==null;){if(dg(i)){r=i;break}i=i.return}if(r==null)throw Error(l(160));switch(r.tag){case 27:var c=r.stateNode,f=Wu(e);fl(e,f,c);break;case 5:var y=r.stateNode;r.flags&32&&(Ur(y,""),r.flags&=-33);var w=Wu(e);fl(e,w,y);break;case 3:case 4:var R=r.stateNode.containerInfo,J=Wu(e);ed(e,J,R);break;default:throw Error(l(161))}}catch(Z){$e(e,e.return,Z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ka(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pg(e,t.alternate,t),t=t.sibling}function dr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Oa(4,t,t.return),dr(t);break;case 1:Rn(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&cg(t,t.return,r),dr(t);break;case 27:Us(t.stateNode);case 26:case 5:Rn(t,t.return),dr(t);break;case 22:t.memoizedState===null&&dr(t);break;case 30:dr(t);break;default:dr(t)}e=e.sibling}}function Ta(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,c=e,f=t,y=f.flags;switch(f.tag){case 0:case 11:case 15:Ta(c,f,r),Os(4,f);break;case 1:if(Ta(c,f,r),i=f,c=i.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){$e(i,i.return,J)}if(i=f,c=i.updateQueue,c!==null){var w=i.stateNode;try{var R=c.shared.hiddenCallbacks;if(R!==null)for(c.shared.hiddenCallbacks=null,c=0;c<R.length;c++)Yp(R[c],w)}catch(J){$e(i,i.return,J)}}r&&y&64&&lg(f),ks(f,f.return);break;case 27:fg(f);case 26:case 5:Ta(c,f,r),r&&i===null&&y&4&&ug(f),ks(f,f.return);break;case 12:Ta(c,f,r);break;case 13:Ta(c,f,r),r&&y&4&&vg(c,f);break;case 22:f.memoizedState===null&&Ta(c,f,r),ks(f,f.return);break;case 30:break;default:Ta(c,f,r)}t=t.sibling}}function ad(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&ps(r))}function rd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ps(e))}function Dn(e,t,r,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xg(e,t,r,i),t=t.sibling}function xg(e,t,r,i){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Dn(e,t,r,i),c&2048&&Os(9,t);break;case 1:Dn(e,t,r,i);break;case 3:Dn(e,t,r,i),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ps(e)));break;case 12:if(c&2048){Dn(e,t,r,i),e=t.stateNode;try{var f=t.memoizedProps,y=f.id,w=f.onPostCommit;typeof w=="function"&&w(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){$e(t,t.return,R)}}else Dn(e,t,r,i);break;case 13:Dn(e,t,r,i);break;case 23:break;case 22:f=t.stateNode,y=t.alternate,t.memoizedState!==null?f._visibility&2?Dn(e,t,r,i):Ts(e,t):f._visibility&2?Dn(e,t,r,i):(f._visibility|=2,ao(e,t,r,i,(t.subtreeFlags&10256)!==0)),c&2048&&ad(y,t);break;case 24:Dn(e,t,r,i),c&2048&&rd(t.alternate,t);break;default:Dn(e,t,r,i)}}function ao(e,t,r,i,c){for(c=c&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var f=e,y=t,w=r,R=i,J=y.flags;switch(y.tag){case 0:case 11:case 15:ao(f,y,w,R,c),Os(8,y);break;case 23:break;case 22:var Z=y.stateNode;y.memoizedState!==null?Z._visibility&2?ao(f,y,w,R,c):Ts(f,y):(Z._visibility|=2,ao(f,y,w,R,c)),c&&J&2048&&ad(y.alternate,y);break;case 24:ao(f,y,w,R,c),c&&J&2048&&rd(y.alternate,y);break;default:ao(f,y,w,R,c)}t=t.sibling}}function Ts(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,i=t,c=i.flags;switch(i.tag){case 22:Ts(r,i),c&2048&&ad(i.alternate,i);break;case 24:Ts(r,i),c&2048&&rd(i.alternate,i);break;default:Ts(r,i)}t=t.sibling}}var Rs=8192;function ro(e){if(e.subtreeFlags&Rs)for(e=e.child;e!==null;)wg(e),e=e.sibling}function wg(e){switch(e.tag){case 26:ro(e),e.flags&Rs&&e.memoizedState!==null&&vS(Sn,e.memoizedState,e.memoizedProps);break;case 5:ro(e);break;case 3:case 4:var t=Sn;Sn=El(e.stateNode.containerInfo),ro(e),Sn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Rs,Rs=16777216,ro(e),Rs=t):ro(e));break;default:ro(e)}}function jg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ds(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];ut=i,Ng(i,e)}jg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sg(e),e=e.sibling}function Sg(e){switch(e.tag){case 0:case 11:case 15:Ds(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:Ds(e);break;case 12:Ds(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ml(e)):Ds(e);break;default:Ds(e)}}function ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];ut=i,Ng(i,e)}jg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Oa(8,t,t.return),ml(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,ml(t));break;default:ml(t)}e=e.sibling}}function Ng(e,t){for(;ut!==null;){var r=ut;switch(r.tag){case 0:case 11:case 15:Oa(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var i=r.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ps(r.memoizedState.cache)}if(i=r.child,i!==null)i.return=r,ut=i;else e:for(r=e;ut!==null;){i=ut;var c=i.sibling,f=i.return;if(hg(i),i===r){ut=null;break e}if(c!==null){c.return=f,ut=c;break e}ut=f}}}var Lj={getCacheForType:function(e){var t=yt(st),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r}},Mj=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,Ee=null,Ae=0,Me=0,qt=null,Ra=!1,oo=!1,od=!1,na=0,Qe=0,Da=0,fr=0,sd=0,cn=0,so=0,Ls=null,Dt=null,id=!1,ld=0,pl=1/0,hl=null,La=null,pt=0,Ma=null,io=null,lo=0,cd=0,ud=null,Eg=null,Ms=0,dd=null;function Jt(){if((Le&2)!==0&&Ae!==0)return Ae&-Ae;if(D.T!==null){var e=Xr;return e!==0?e:bd()}return $m()}function Cg(){cn===0&&(cn=(Ae&536870912)===0||Re?Bm():536870912);var e=ln.current;return e!==null&&(e.flags|=32),cn}function Gt(e,t,r){(e===qe&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(co(e,0),_a(e,Ae,cn,!1)),Qo(e,r),((Le&2)===0||e!==qe)&&(e===qe&&((Le&2)===0&&(fr|=r),Qe===4&&_a(e,Ae,cn,!1)),Ln(e))}function Ag(e,t,r){if((Le&6)!==0)throw Error(l(327));var i=!r&&(t&124)===0&&(t&e.expiredLanes)===0||Ko(e,t),c=i?Bj(e,t):pd(e,t,!0),f=i;do{if(c===0){oo&&!i&&_a(e,t,0,!1);break}else{if(r=e.current.alternate,f&&!_j(r)){c=pd(e,t,!1),f=!1;continue}if(c===2){if(f=t,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var w=e;c=Ls;var R=w.current.memoizedState.isDehydrated;if(R&&(co(w,y).flags|=256),y=pd(w,y,!1),y!==2){if(od&&!R){w.errorRecoveryDisabledLanes|=f,fr|=f,c=4;break e}f=Dt,Dt=c,f!==null&&(Dt===null?Dt=f:Dt.push.apply(Dt,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){co(e,0),_a(e,t,0,!0);break}e:{switch(i=e,f=c,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:_a(i,t,cn,!Ra);break e;case 2:Dt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(c=ld+300-ot(),10<c)){if(_a(i,t,cn,!Ra),Ci(i,0,!0)!==0)break e;i.timeoutHandle=nv(Og.bind(null,i,r,Dt,hl,id,t,cn,fr,so,Ra,f,2,-0,0),c);break e}Og(i,r,Dt,hl,id,t,cn,fr,so,Ra,f,0,-0,0)}}break}while(!0);Ln(e)}function Og(e,t,r,i,c,f,y,w,R,J,Z,te,G,F){if(e.timeoutHandle=-1,te=t.subtreeFlags,(te&8192||(te&16785408)===16785408)&&($s={stylesheets:null,count:0,unsuspend:gS},wg(t),te=bS(),te!==null)){e.cancelPendingCommit=te(_g.bind(null,e,t,f,r,i,c,y,w,R,Z,1,G,F)),_a(e,f,y,!J);return}_g(e,t,f,r,i,c,y,w,R)}function _j(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var i=0;i<r.length;i++){var c=r[i],f=c.getSnapshot;c=c.value;try{if(!Pt(f(),c))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _a(e,t,r,i){t&=~sd,t&=~fr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var c=t;0<c;){var f=31-Ut(c),y=1<<f;i[f]=-1,c&=~y}r!==0&&Pm(e,r,t)}function gl(){return(Le&6)===0?(_s(0),!1):!0}function fd(){if(Ee!==null){if(Me===0)var e=Ee.return;else e=Ee,Yn=sr=null,ku(e),to=null,Es=0,e=Ee;for(;e!==null;)ig(e.alternate,e),e=e.return;Ee=null}}function co(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Wj(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),fd(),qe=e,Ee=r=Gn(e.current,null),Ae=t,Me=0,qt=null,Ra=!1,oo=Ko(e,t),od=!1,so=cn=sd=fr=Da=Qe=0,Dt=Ls=null,id=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var c=31-Ut(i),f=1<<c;t|=e[c],i&=~f}return na=t,Ui(),r}function kg(e,t){Se=null,D.H=al,t===gs||t===Vi?(t=Fp(),Me=3):t===qp?(t=Fp(),Me=4):Me=t===Vh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qt=t,Ee===null&&(Qe=1,ll(e,an(t,e.current)))}function Tg(){var e=D.H;return D.H=al,e===null?al:e}function Rg(){var e=D.A;return D.A=Lj,e}function md(){Qe=4,Ra||(Ae&4194048)!==Ae&&ln.current!==null||(oo=!0),(Da&134217727)===0&&(fr&134217727)===0||qe===null||_a(qe,Ae,cn,!1)}function pd(e,t,r){var i=Le;Le|=2;var c=Tg(),f=Rg();(qe!==e||Ae!==t)&&(hl=null,co(e,t)),t=!1;var y=Qe;e:do try{if(Me!==0&&Ee!==null){var w=Ee,R=qt;switch(Me){case 8:fd(),y=6;break e;case 3:case 2:case 9:case 6:ln.current===null&&(t=!0);var J=Me;if(Me=0,qt=null,uo(e,w,R,J),r&&oo){y=0;break e}break;default:J=Me,Me=0,qt=null,uo(e,w,R,J)}}zj(),y=Qe;break}catch(Z){kg(e,Z)}while(!0);return t&&e.shellSuspendCounter++,Yn=sr=null,Le=i,D.H=c,D.A=f,Ee===null&&(qe=null,Ae=0,Ui()),y}function zj(){for(;Ee!==null;)Dg(Ee)}function Bj(e,t){var r=Le;Le|=2;var i=Tg(),c=Rg();qe!==e||Ae!==t?(hl=null,pl=ot()+500,co(e,t)):oo=Ko(e,t);e:do try{if(Me!==0&&Ee!==null){t=Ee;var f=qt;t:switch(Me){case 1:Me=0,qt=null,uo(e,t,f,1);break;case 2:case 9:if(Jp(f)){Me=0,qt=null,Lg(t);break}t=function(){Me!==2&&Me!==9||qe!==e||(Me=7),Ln(e)},f.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:Jp(f)?(Me=0,qt=null,Lg(t)):(Me=0,qt=null,uo(e,t,f,7));break;case 5:var y=null;switch(Ee.tag){case 26:y=Ee.memoizedState;case 5:case 27:var w=Ee;if(!y||pv(y)){Me=0,qt=null;var R=w.sibling;if(R!==null)Ee=R;else{var J=w.return;J!==null?(Ee=J,vl(J)):Ee=null}break t}}Me=0,qt=null,uo(e,t,f,5);break;case 6:Me=0,qt=null,uo(e,t,f,6);break;case 8:fd(),Qe=6;break e;default:throw Error(l(462))}}Uj();break}catch(Z){kg(e,Z)}while(!0);return Yn=sr=null,D.H=i,D.A=c,Le=r,Ee!==null?0:(qe=null,Ae=0,Ui(),Qe)}function Uj(){for(;Ee!==null&&!ze();)Dg(Ee)}function Dg(e){var t=og(e.alternate,e,na);e.memoizedProps=e.pendingProps,t===null?vl(e):Ee=t}function Lg(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=Wh(r,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=Wh(r,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:ku(t);default:ig(r,t),t=Ee=Mp(t,na),t=og(r,t,na)}e.memoizedProps=e.pendingProps,t===null?vl(e):Ee=t}function uo(e,t,r,i){Yn=sr=null,ku(t),to=null,Es=0;var c=t.return;try{if(Aj(e,c,t,r,Ae)){Qe=1,ll(e,an(r,e.current)),Ee=null;return}}catch(f){if(c!==null)throw Ee=c,f;Qe=1,ll(e,an(r,e.current)),Ee=null;return}t.flags&32768?(Re||i===1?e=!0:oo||(Ae&536870912)!==0?e=!1:(Ra=e=!0,(i===2||i===9||i===3||i===6)&&(i=ln.current,i!==null&&i.tag===13&&(i.flags|=16384))),Mg(t,e)):vl(t)}function vl(e){var t=e;do{if((t.flags&32768)!==0){Mg(t,Ra);return}e=t.return;var r=kj(t.alternate,t,na);if(r!==null){Ee=r;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Qe===0&&(Qe=5)}function Mg(e,t){do{var r=Tj(e.alternate,e);if(r!==null){r.flags&=32767,Ee=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=r}while(e!==null);Qe=6,Ee=null}function _g(e,t,r,i,c,f,y,w,R){e.cancelPendingCommit=null;do bl();while(pt!==0);if((Le&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=ru,g0(e,r,f,y,w,R),e===qe&&(Ee=qe=null,Ae=0),io=t,Ma=e,lo=r,cd=f,ud=c,Eg=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hj(wn,function(){return Ig(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=D.T,D.T=null,c=K.p,K.p=2,y=Le,Le|=4;try{Rj(e,t,r)}finally{Le=y,K.p=c,D.T=i}}pt=1,zg(),Bg(),Ug()}}function zg(){if(pt===1){pt=0;var e=Ma,t=io,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=D.T,D.T=null;var i=K.p;K.p=2;var c=Le;Le|=4;try{bg(t,e);var f=Cd,y=Np(e.containerInfo),w=f.focusedElem,R=f.selectionRange;if(y!==w&&w&&w.ownerDocument&&Sp(w.ownerDocument.documentElement,w)){if(R!==null&&Wc(w)){var J=R.start,Z=R.end;if(Z===void 0&&(Z=J),"selectionStart"in w)w.selectionStart=J,w.selectionEnd=Math.min(Z,w.value.length);else{var te=w.ownerDocument||document,G=te&&te.defaultView||window;if(G.getSelection){var F=G.getSelection(),be=w.textContent.length,ge=Math.min(R.start,be),Pe=R.end===void 0?ge:Math.min(R.end,be);!F.extend&&ge>Pe&&(y=Pe,Pe=ge,ge=y);var I=jp(w,ge),M=jp(w,Pe);if(I&&M&&(F.rangeCount!==1||F.anchorNode!==I.node||F.anchorOffset!==I.offset||F.focusNode!==M.node||F.focusOffset!==M.offset)){var q=te.createRange();q.setStart(I.node,I.offset),F.removeAllRanges(),ge>Pe?(F.addRange(q),F.extend(M.node,M.offset)):(q.setEnd(M.node,M.offset),F.addRange(q))}}}}for(te=[],F=w;F=F.parentNode;)F.nodeType===1&&te.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<te.length;w++){var Q=te[w];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Tl=!!Ed,Cd=Ed=null}finally{Le=c,K.p=i,D.T=r}}e.current=t,pt=2}}function Bg(){if(pt===2){pt=0;var e=Ma,t=io,r=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||r){r=D.T,D.T=null;var i=K.p;K.p=2;var c=Le;Le|=4;try{pg(e,t.alternate,t)}finally{Le=c,K.p=i,D.T=r}}pt=3}}function Ug(){if(pt===4||pt===3){pt=0,Hn();var e=Ma,t=io,r=lo,i=Eg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?pt=5:(pt=0,io=Ma=null,Pg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(La=null),Dc(r),t=t.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(je,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=D.T,c=K.p,K.p=2,D.T=null;try{for(var f=e.onRecoverableError,y=0;y<i.length;y++){var w=i[y];f(w.value,{componentStack:w.stack})}}finally{D.T=t,K.p=c}}(lo&3)!==0&&bl(),Ln(e),c=e.pendingLanes,(r&4194090)!==0&&(c&42)!==0?e===dd?Ms++:(Ms=0,dd=e):Ms=0,_s(0)}}function Pg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ps(t)))}function bl(e){return zg(),Bg(),Ug(),Ig()}function Ig(){if(pt!==5)return!1;var e=Ma,t=cd;cd=0;var r=Dc(lo),i=D.T,c=K.p;try{K.p=32>r?32:r,D.T=null,r=ud,ud=null;var f=Ma,y=lo;if(pt=0,io=Ma=null,lo=0,(Le&6)!==0)throw Error(l(331));var w=Le;if(Le|=4,Sg(f.current),xg(f,f.current,y,r),Le=w,_s(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(je,f)}catch{}return!0}finally{K.p=c,D.T=i,Pg(e,t)}}function $g(e,t,r){t=an(r,t),t=qu(e.stateNode,t,2),e=Na(e,t,2),e!==null&&(Qo(e,2),Ln(e))}function $e(e,t,r){if(e.tag===3)$g(e,e,r);else for(;t!==null;){if(t.tag===3){$g(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(La===null||!La.has(i))){e=an(r,e),r=Gh(2),i=Na(t,r,2),i!==null&&(Fh(r,i,t,e),Qo(i,2),Ln(i));break}}t=t.return}}function hd(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new Mj;var c=new Set;i.set(t,c)}else c=i.get(t),c===void 0&&(c=new Set,i.set(t,c));c.has(r)||(od=!0,c.add(r),e=Pj.bind(null,e,t,r),t.then(e,e))}function Pj(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,qe===e&&(Ae&r)===r&&(Qe===4||Qe===3&&(Ae&62914560)===Ae&&300>ot()-ld?(Le&2)===0&&co(e,0):sd|=r,so===Ae&&(so=0)),Ln(e)}function Hg(e,t){t===0&&(t=Um()),e=Gr(e,t),e!==null&&(Qo(e,t),Ln(e))}function Ij(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Hg(e,r)}function $j(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),Hg(e,r)}function Hj(e,t){return Qt(e,t)}var yl=null,fo=null,gd=!1,xl=!1,vd=!1,mr=0;function Ln(e){e!==fo&&e.next===null&&(fo===null?yl=fo=e:fo=fo.next=e),xl=!0,gd||(gd=!0,Jj())}function _s(e,t){if(!vd&&xl){vd=!0;do for(var r=!1,i=yl;i!==null;){if(e!==0){var c=i.pendingLanes;if(c===0)var f=0;else{var y=i.suspendedLanes,w=i.pingedLanes;f=(1<<31-Ut(42|e)+1)-1,f&=c&~(y&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,Fg(i,f))}else f=Ae,f=Ci(i,i===qe?f:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(f&3)===0||Ko(i,f)||(r=!0,Fg(i,f));i=i.next}while(r);vd=!1}}function qj(){qg()}function qg(){xl=gd=!1;var e=0;mr!==0&&(Qj()&&(e=mr),mr=0);for(var t=ot(),r=null,i=yl;i!==null;){var c=i.next,f=Jg(i,t);f===0?(i.next=null,r===null?yl=c:r.next=c,c===null&&(fo=r)):(r=i,(e!==0||(f&3)!==0)&&(xl=!0)),i=c}_s(e)}function Jg(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Ut(f),w=1<<y,R=c[y];R===-1?((w&r)===0||(w&i)!==0)&&(c[y]=h0(w,t)):R<=t&&(e.expiredLanes|=w),f&=~w}if(t=qe,r=Ae,r=Ci(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,r===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Wt(i),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ko(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(i!==null&&Wt(i),Dc(r)){case 2:case 8:r=en;break;case 32:r=wn;break;case 268435456:r=Xa;break;default:r=wn}return i=Gg.bind(null,e),r=Qt(r,i),e.callbackPriority=t,e.callbackNode=r,t}return i!==null&&i!==null&&Wt(i),e.callbackPriority=2,e.callbackNode=null,2}function Gg(e,t){if(pt!==0&&pt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(bl()&&e.callbackNode!==r)return null;var i=Ae;return i=Ci(e,e===qe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Ag(e,i,t),Jg(e,ot()),e.callbackNode!=null&&e.callbackNode===r?Gg.bind(null,e):null)}function Fg(e,t){if(bl())return null;Ag(e,t,!0)}function Jj(){eS(function(){(Le&6)!==0?Qt(Or,qj):qg()})}function bd(){return mr===0&&(mr=Bm()),mr}function Vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function Yg(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function Gj(e,t,r,i,c){if(t==="submit"&&r&&r.stateNode===c){var f=Vg((c[Ot]||null).action),y=i.submitter;y&&(t=(t=y[Ot]||null)?Vg(t.formAction):y.getAttribute("formAction"),t!==null&&(f=t,y=null));var w=new _i("action","action",null,i,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(mr!==0){var R=y?Yg(c,y):new FormData(c);Uu(r,{pending:!0,data:R,method:c.method,action:f},null,R)}}else typeof f=="function"&&(w.preventDefault(),R=y?Yg(c,y):new FormData(c),Uu(r,{pending:!0,data:R,method:c.method,action:f},f,R))},currentTarget:c}]})}}for(var yd=0;yd<au.length;yd++){var xd=au[yd],Fj=xd.toLowerCase(),Vj=xd[0].toUpperCase()+xd.slice(1);jn(Fj,"on"+Vj)}jn(Ap,"onAnimationEnd"),jn(Op,"onAnimationIteration"),jn(kp,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(uj,"onTransitionRun"),jn(dj,"onTransitionStart"),jn(fj,"onTransitionCancel"),jn(Tp,"onTransitionEnd"),_r("onMouseEnter",["mouseout","mouseover"]),_r("onMouseLeave",["mouseout","mouseover"]),_r("onPointerEnter",["pointerout","pointerover"]),_r("onPointerLeave",["pointerout","pointerover"]),Ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yj=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zs));function Xg(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],c=i.event;i=i.listeners;e:{var f=void 0;if(t)for(var y=i.length-1;0<=y;y--){var w=i[y],R=w.instance,J=w.currentTarget;if(w=w.listener,R!==f&&c.isPropagationStopped())break e;f=w,c.currentTarget=J;try{f(c)}catch(Z){il(Z)}c.currentTarget=null,f=R}else for(y=0;y<i.length;y++){if(w=i[y],R=w.instance,J=w.currentTarget,w=w.listener,R!==f&&c.isPropagationStopped())break e;f=w,c.currentTarget=J;try{f(c)}catch(Z){il(Z)}c.currentTarget=null,f=R}}}}function Ce(e,t){var r=t[Lc];r===void 0&&(r=t[Lc]=new Set);var i=e+"__bubble";r.has(i)||(Zg(t,e,2,!1),r.add(i))}function wd(e,t,r){var i=0;t&&(i|=4),Zg(r,e,i,t)}var wl="_reactListening"+Math.random().toString(36).slice(2);function jd(e){if(!e[wl]){e[wl]=!0,qm.forEach(function(r){r!=="selectionchange"&&(Yj.has(r)||wd(r,!1,e),wd(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wl]||(t[wl]=!0,wd("selectionchange",!1,t))}}function Zg(e,t,r,i){switch(xv(t)){case 2:var c=wS;break;case 8:c=jS;break;default:c=zd}r=c.bind(null,t,r,e),c=void 0,!Jc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),i?c!==void 0?e.addEventListener(t,r,{capture:!0,passive:c}):e.addEventListener(t,r,!0):c!==void 0?e.addEventListener(t,r,{passive:c}):e.addEventListener(t,r,!1)}function Sd(e,t,r,i,c){var f=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var y=i.tag;if(y===3||y===4){var w=i.stateNode.containerInfo;if(w===c)break;if(y===4)for(y=i.return;y!==null;){var R=y.tag;if((R===3||R===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;w!==null;){if(y=Dr(w),y===null)return;if(R=y.tag,R===5||R===6||R===26||R===27){i=f=y;continue e}w=w.parentNode}}i=i.return}ap(function(){var J=f,Z=Hc(r),te=[];e:{var G=Rp.get(e);if(G!==void 0){var F=_i,be=e;switch(e){case"keypress":if(Li(r)===0)break e;case"keydown":case"keyup":F=H0;break;case"focusin":be="focus",F=Yc;break;case"focusout":be="blur",F=Yc;break;case"beforeblur":case"afterblur":F=Yc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=T0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=G0;break;case Ap:case Op:case kp:F=L0;break;case Tp:F=V0;break;case"scroll":case"scrollend":F=O0;break;case"wheel":F=X0;break;case"copy":case"cut":case"paste":F=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=lp;break;case"toggle":case"beforetoggle":F=K0}var ge=(t&4)!==0,Pe=!ge&&(e==="scroll"||e==="scrollend"),I=ge?G!==null?G+"Capture":null:G;ge=[];for(var M=J,q;M!==null;){var Q=M;if(q=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||q===null||I===null||(Q=ts(M,I),Q!=null&&ge.push(Bs(M,Q,q))),Pe)break;M=M.return}0<ge.length&&(G=new F(G,be,null,r,Z),te.push({event:G,listeners:ge}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",G&&r!==$c&&(be=r.relatedTarget||r.fromElement)&&(Dr(be)||be[Rr]))break e;if((F||G)&&(G=Z.window===Z?Z:(G=Z.ownerDocument)?G.defaultView||G.parentWindow:window,F?(be=r.relatedTarget||r.toElement,F=J,be=be?Dr(be):null,be!==null&&(Pe=d(be),ge=be.tag,be!==Pe||ge!==5&&ge!==27&&ge!==6)&&(be=null)):(F=null,be=J),F!==be)){if(ge=sp,Q="onMouseLeave",I="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ge=lp,Q="onPointerLeave",I="onPointerEnter",M="pointer"),Pe=F==null?G:es(F),q=be==null?G:es(be),G=new ge(Q,M+"leave",F,r,Z),G.target=Pe,G.relatedTarget=q,Q=null,Dr(Z)===J&&(ge=new ge(I,M+"enter",be,r,Z),ge.target=q,ge.relatedTarget=Pe,Q=ge),Pe=Q,F&&be)t:{for(ge=F,I=be,M=0,q=ge;q;q=mo(q))M++;for(q=0,Q=I;Q;Q=mo(Q))q++;for(;0<M-q;)ge=mo(ge),M--;for(;0<q-M;)I=mo(I),q--;for(;M--;){if(ge===I||I!==null&&ge===I.alternate)break t;ge=mo(ge),I=mo(I)}ge=null}else ge=null;F!==null&&Kg(te,G,F,ge,!1),be!==null&&Pe!==null&&Kg(te,Pe,be,ge,!0)}}e:{if(G=J?es(J):window,F=G.nodeName&&G.nodeName.toLowerCase(),F==="select"||F==="input"&&G.type==="file")var me=gp;else if(pp(G))if(vp)me=ij;else{me=oj;var Ne=rj}else F=G.nodeName,!F||F.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?J&&Ic(J.elementType)&&(me=gp):me=sj;if(me&&(me=me(e,J))){hp(te,me,r,Z);break e}Ne&&Ne(e,G,J),e==="focusout"&&J&&G.type==="number"&&J.memoizedProps.value!=null&&Pc(G,"number",G.value)}switch(Ne=J?es(J):window,e){case"focusin":(pp(Ne)||Ne.contentEditable==="true")&&(Hr=Ne,eu=J,cs=null);break;case"focusout":cs=eu=Hr=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,Ep(te,r,Z);break;case"selectionchange":if(cj)break;case"keydown":case"keyup":Ep(te,r,Z)}var pe;if(Zc)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else $r?fp(e,r)&&(ve="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ve="onCompositionStart");ve&&(cp&&r.locale!=="ko"&&($r||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&$r&&(pe=rp()):(xa=Z,Gc="value"in xa?xa.value:xa.textContent,$r=!0)),Ne=jl(J,ve),0<Ne.length&&(ve=new ip(ve,e,null,r,Z),te.push({event:ve,listeners:Ne}),pe?ve.data=pe:(pe=mp(r),pe!==null&&(ve.data=pe)))),(pe=W0?ej(e,r):tj(e,r))&&(ve=jl(J,"onBeforeInput"),0<ve.length&&(Ne=new ip("onBeforeInput","beforeinput",null,r,Z),te.push({event:Ne,listeners:ve}),Ne.data=pe)),Gj(te,e,J,r,Z)}Xg(te,t)})}function Bs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function jl(e,t){for(var r=t+"Capture",i=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=ts(e,r),c!=null&&i.unshift(Bs(e,c,f)),c=ts(e,t),c!=null&&i.push(Bs(e,c,f))),e.tag===3)return i;e=e.return}return[]}function mo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kg(e,t,r,i,c){for(var f=t._reactName,y=[];r!==null&&r!==i;){var w=r,R=w.alternate,J=w.stateNode;if(w=w.tag,R!==null&&R===i)break;w!==5&&w!==26&&w!==27||J===null||(R=J,c?(J=ts(r,f),J!=null&&y.unshift(Bs(r,J,R))):c||(J=ts(r,f),J!=null&&y.push(Bs(r,J,R)))),r=r.return}y.length!==0&&e.push({event:t,listeners:y})}var Xj=/\r\n?/g,Zj=/\u0000|\uFFFD/g;function Qg(e){return(typeof e=="string"?e:""+e).replace(Xj,`
`).replace(Zj,"")}function Wg(e,t){return t=Qg(t),Qg(e)===t}function Sl(){}function Ue(e,t,r,i,c,f){switch(r){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ur(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ur(e,""+i);break;case"className":Oi(e,"class",i);break;case"tabIndex":Oi(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(e,r,i);break;case"style":tp(e,i,f);break;case"data":if(t!=="object"){Oi(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(r);break}i=Ri(""+i),e.setAttribute(r,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(t!=="input"&&Ue(e,t,"name",c.name,c,null),Ue(e,t,"formEncType",c.formEncType,c,null),Ue(e,t,"formMethod",c.formMethod,c,null),Ue(e,t,"formTarget",c.formTarget,c,null)):(Ue(e,t,"encType",c.encType,c,null),Ue(e,t,"method",c.method,c,null),Ue(e,t,"target",c.target,c,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(r);break}i=Ri(""+i),e.setAttribute(r,i);break;case"onClick":i!=null&&(e.onclick=Sl);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(r=i.__html,r!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}r=Ri(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(r,""+i):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":i===!0?e.setAttribute(r,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(r,i):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(r,i):e.removeAttribute(r);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(r):e.setAttribute(r,i);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Ai(e,"popover",i);break;case"xlinkActuate":qn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":qn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":qn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":qn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":qn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":qn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":qn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":qn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":qn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ai(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=C0.get(r)||r,Ai(e,r,i))}}function Nd(e,t,r,i,c,f){switch(r){case"style":tp(e,i,f);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(r=i.__html,r!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"children":typeof i=="string"?Ur(e,i):(typeof i=="number"||typeof i=="bigint")&&Ur(e,""+i);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Sl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jm.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),t=r.slice(2,c?r.length-7:void 0),f=e[Ot]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(t,f,c),typeof i=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,i,c);break e}r in e?e[r]=i:i===!0?e.setAttribute(r,""):Ai(e,r,i)}}}function ht(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var i=!1,c=!1,f;for(f in r)if(r.hasOwnProperty(f)){var y=r[f];if(y!=null)switch(f){case"src":i=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ue(e,t,f,y,r,null)}}c&&Ue(e,t,"srcSet",r.srcSet,r,null),i&&Ue(e,t,"src",r.src,r,null);return;case"input":Ce("invalid",e);var w=f=y=c=null,R=null,J=null;for(i in r)if(r.hasOwnProperty(i)){var Z=r[i];if(Z!=null)switch(i){case"name":c=Z;break;case"type":y=Z;break;case"checked":R=Z;break;case"defaultChecked":J=Z;break;case"value":f=Z;break;case"defaultValue":w=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(l(137,t));break;default:Ue(e,t,i,Z,r,null)}}Km(e,f,w,R,J,y,c,!1),ki(e);return;case"select":Ce("invalid",e),i=y=f=null;for(c in r)if(r.hasOwnProperty(c)&&(w=r[c],w!=null))switch(c){case"value":f=w;break;case"defaultValue":y=w;break;case"multiple":i=w;default:Ue(e,t,c,w,r,null)}t=f,r=y,e.multiple=!!i,t!=null?Br(e,!!i,t,!1):r!=null&&Br(e,!!i,r,!0);return;case"textarea":Ce("invalid",e),f=c=i=null;for(y in r)if(r.hasOwnProperty(y)&&(w=r[y],w!=null))switch(y){case"value":i=w;break;case"defaultValue":c=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(l(91));break;default:Ue(e,t,y,w,r,null)}Wm(e,i,c,f),ki(e);return;case"option":for(R in r)if(r.hasOwnProperty(R)&&(i=r[R],i!=null))switch(R){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ue(e,t,R,i,r,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(i=0;i<zs.length;i++)Ce(zs[i],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in r)if(r.hasOwnProperty(J)&&(i=r[J],i!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ue(e,t,J,i,r,null)}return;default:if(Ic(t)){for(Z in r)r.hasOwnProperty(Z)&&(i=r[Z],i!==void 0&&Nd(e,t,Z,i,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(i=r[w],i!=null&&Ue(e,t,w,i,r,null))}function Kj(e,t,r,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,w=null,R=null,J=null,Z=null;for(F in r){var te=r[F];if(r.hasOwnProperty(F)&&te!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":R=te;default:i.hasOwnProperty(F)||Ue(e,t,F,null,i,te)}}for(var G in i){var F=i[G];if(te=r[G],i.hasOwnProperty(G)&&(F!=null||te!=null))switch(G){case"type":f=F;break;case"name":c=F;break;case"checked":J=F;break;case"defaultChecked":Z=F;break;case"value":y=F;break;case"defaultValue":w=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(l(137,t));break;default:F!==te&&Ue(e,t,G,F,i,te)}}Uc(e,y,w,R,J,Z,f,c);return;case"select":F=y=w=G=null;for(f in r)if(R=r[f],r.hasOwnProperty(f)&&R!=null)switch(f){case"value":break;case"multiple":F=R;default:i.hasOwnProperty(f)||Ue(e,t,f,null,i,R)}for(c in i)if(f=i[c],R=r[c],i.hasOwnProperty(c)&&(f!=null||R!=null))switch(c){case"value":G=f;break;case"defaultValue":w=f;break;case"multiple":y=f;default:f!==R&&Ue(e,t,c,f,i,R)}t=w,r=y,i=F,G!=null?Br(e,!!r,G,!1):!!i!=!!r&&(t!=null?Br(e,!!r,t,!0):Br(e,!!r,r?[]:"",!1));return;case"textarea":F=G=null;for(w in r)if(c=r[w],r.hasOwnProperty(w)&&c!=null&&!i.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ue(e,t,w,null,i,c)}for(y in i)if(c=i[y],f=r[y],i.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":G=c;break;case"defaultValue":F=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==f&&Ue(e,t,y,c,i,f)}Qm(e,G,F);return;case"option":for(var be in r)if(G=r[be],r.hasOwnProperty(be)&&G!=null&&!i.hasOwnProperty(be))switch(be){case"selected":e.selected=!1;break;default:Ue(e,t,be,null,i,G)}for(R in i)if(G=i[R],F=r[R],i.hasOwnProperty(R)&&G!==F&&(G!=null||F!=null))switch(R){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Ue(e,t,R,G,i,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in r)G=r[ge],r.hasOwnProperty(ge)&&G!=null&&!i.hasOwnProperty(ge)&&Ue(e,t,ge,null,i,G);for(J in i)if(G=i[J],F=r[J],i.hasOwnProperty(J)&&G!==F&&(G!=null||F!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(l(137,t));break;default:Ue(e,t,J,G,i,F)}return;default:if(Ic(t)){for(var Pe in r)G=r[Pe],r.hasOwnProperty(Pe)&&G!==void 0&&!i.hasOwnProperty(Pe)&&Nd(e,t,Pe,void 0,i,G);for(Z in i)G=i[Z],F=r[Z],!i.hasOwnProperty(Z)||G===F||G===void 0&&F===void 0||Nd(e,t,Z,G,i,F);return}}for(var I in r)G=r[I],r.hasOwnProperty(I)&&G!=null&&!i.hasOwnProperty(I)&&Ue(e,t,I,null,i,G);for(te in i)G=i[te],F=r[te],!i.hasOwnProperty(te)||G===F||G==null&&F==null||Ue(e,t,te,G,i,F)}var Ed=null,Cd=null;function Nl(e){return e.nodeType===9?e:e.ownerDocument}function ev(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ad(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Od=null;function Qj(){var e=window.event;return e&&e.type==="popstate"?e===Od?!1:(Od=e,!0):(Od=null,!1)}var nv=typeof setTimeout=="function"?setTimeout:void 0,Wj=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(e){return av.resolve(null).then(e).catch(tS)}:nv;function tS(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function rv(e,t){var r=t,i=0,c=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<i&&8>i){r=i;var y=e.ownerDocument;if(r&1&&Us(y.documentElement),r&2&&Us(y.body),r&4)for(r=y.head,Us(r),y=r.firstChild;y;){var w=y.nextSibling,R=y.nodeName;y[Wo]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&y.rel.toLowerCase()==="stylesheet"||r.removeChild(y),y=w}}if(c===0){e.removeChild(f),Fs(t);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:i=r.charCodeAt(0)-48;else i=0;r=f}while(r);Fs(t)}function kd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":kd(r),Mc(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function nS(e,t,r,i){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Wo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Nn(e.nextSibling),e===null)break}return null}function aS(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Nn(e.nextSibling),e===null))return null;return e}function Td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function rS(e,t){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")t();else{var i=function(){t(),r.removeEventListener("DOMContentLoaded",i)};r.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Rd=null;function ov(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}function sv(e,t,r){switch(t=Nl(r),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Us(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mc(e)}var un=new Map,iv=new Set;function El(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=K.d;K.d={f:oS,r:sS,D:iS,C:lS,L:cS,m:uS,X:fS,S:dS,M:mS};function oS(){var e=aa.f(),t=gl();return e||t}function sS(e){var t=Lr(e);t!==null&&t.tag===5&&t.type==="form"?Ah(t):aa.r(e)}var po=typeof document>"u"?null:document;function lv(e,t,r){var i=po;if(i&&typeof t=="string"&&t){var c=nn(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),iv.has(c)||(iv.add(c),e={rel:e,crossOrigin:r,href:t},i.querySelector(c)===null&&(t=i.createElement("link"),ht(t,"link",e),lt(t),i.head.appendChild(t)))}}function iS(e){aa.D(e),lv("dns-prefetch",e,null)}function lS(e,t){aa.C(e,t),lv("preconnect",e,t)}function cS(e,t,r){aa.L(e,t,r);var i=po;if(i&&e&&t){var c='link[rel="preload"][as="'+nn(t)+'"]';t==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+nn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+nn(r.imageSizes)+'"]')):c+='[href="'+nn(e)+'"]';var f=c;switch(t){case"style":f=ho(e);break;case"script":f=go(e)}un.has(f)||(e=b({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),un.set(f,e),i.querySelector(c)!==null||t==="style"&&i.querySelector(Ps(f))||t==="script"&&i.querySelector(Is(f))||(t=i.createElement("link"),ht(t,"link",e),lt(t),i.head.appendChild(t)))}}function uS(e,t){aa.m(e,t);var r=po;if(r&&e){var i=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+nn(i)+'"][href="'+nn(e)+'"]',f=c;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=go(e)}if(!un.has(f)&&(e=b({rel:"modulepreload",href:e},t),un.set(f,e),r.querySelector(c)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Is(f)))return}i=r.createElement("link"),ht(i,"link",e),lt(i),r.head.appendChild(i)}}}function dS(e,t,r){aa.S(e,t,r);var i=po;if(i&&e){var c=Mr(i).hoistableStyles,f=ho(e);t=t||"default";var y=c.get(f);if(!y){var w={loading:0,preload:null};if(y=i.querySelector(Ps(f)))w.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},r),(r=un.get(f))&&Dd(e,r);var R=y=i.createElement("link");lt(R),ht(R,"link",e),R._p=new Promise(function(J,Z){R.onload=J,R.onerror=Z}),R.addEventListener("load",function(){w.loading|=1}),R.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Cl(y,t,i)}y={type:"stylesheet",instance:y,count:1,state:w},c.set(f,y)}}}function fS(e,t){aa.X(e,t);var r=po;if(r&&e){var i=Mr(r).hoistableScripts,c=go(e),f=i.get(c);f||(f=r.querySelector(Is(c)),f||(e=b({src:e,async:!0},t),(t=un.get(c))&&Ld(e,t),f=r.createElement("script"),lt(f),ht(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},i.set(c,f))}}function mS(e,t){aa.M(e,t);var r=po;if(r&&e){var i=Mr(r).hoistableScripts,c=go(e),f=i.get(c);f||(f=r.querySelector(Is(c)),f||(e=b({src:e,async:!0,type:"module"},t),(t=un.get(c))&&Ld(e,t),f=r.createElement("script"),lt(f),ht(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},i.set(c,f))}}function cv(e,t,r,i){var c=(c=fe.current)?El(c):null;if(!c)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=ho(r.href),r=Mr(c).hoistableStyles,i=r.get(t),i||(i={type:"style",instance:null,count:0,state:null},r.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=ho(r.href);var f=Mr(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(Ps(e)))&&!f._p&&(y.instance=f,y.state.loading=5),un.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},un.set(e,r),f||pS(c,e,r,y.state))),t&&i===null)throw Error(l(528,""));return y}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=go(r),r=Mr(c).hoistableScripts,i=r.get(t),i||(i={type:"script",instance:null,count:0,state:null},r.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function ho(e){return'href="'+nn(e)+'"'}function Ps(e){return'link[rel="stylesheet"]['+e+"]"}function uv(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function pS(e,t,r,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ht(t,"link",r),lt(t),e.head.appendChild(t))}function go(e){return'[src="'+nn(e)+'"]'}function Is(e){return"script[async]"+e}function dv(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+nn(r.href)+'"]');if(i)return t.instance=i,lt(i),i;var c=b({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),lt(i),ht(i,"style",c),Cl(i,r.precedence,e),t.instance=i;case"stylesheet":c=ho(r.href);var f=e.querySelector(Ps(c));if(f)return t.state.loading|=4,t.instance=f,lt(f),f;i=uv(r),(c=un.get(c))&&Dd(i,c),f=(e.ownerDocument||e).createElement("link"),lt(f);var y=f;return y._p=new Promise(function(w,R){y.onload=w,y.onerror=R}),ht(f,"link",i),t.state.loading|=4,Cl(f,r.precedence,e),t.instance=f;case"script":return f=go(r.src),(c=e.querySelector(Is(f)))?(t.instance=c,lt(c),c):(i=r,(c=un.get(f))&&(i=b({},r),Ld(i,c)),e=e.ownerDocument||e,c=e.createElement("script"),lt(c),ht(c,"link",i),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Cl(i,r.precedence,e));return t.instance}function Cl(e,t,r){for(var i=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=i.length?i[i.length-1]:null,f=c,y=0;y<i.length;y++){var w=i[y];if(w.dataset.precedence===t)f=w;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function Dd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ld(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Al=null;function fv(e,t,r){if(Al===null){var i=new Map,c=Al=new Map;c.set(r,i)}else c=Al,i=c.get(r),i||(i=new Map,c.set(r,i));if(i.has(e))return i;for(i.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var f=r[c];if(!(f[Wo]||f[bt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(t)||"";y=e+y;var w=i.get(y);w?w.push(f):i.set(y,[f])}}return i}function mv(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function hS(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $s=null;function gS(){}function vS(e,t,r){if($s===null)throw Error(l(475));var i=$s;if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var c=ho(r.href),f=e.querySelector(Ps(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Ol.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=f,lt(f);return}f=e.ownerDocument||e,r=uv(r),(c=un.get(c))&&Dd(r,c),f=f.createElement("link"),lt(f);var y=f;y._p=new Promise(function(w,R){y.onload=w,y.onerror=R}),ht(f,"link",r),t.instance=f}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Ol.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function bS(){if($s===null)throw Error(l(475));var e=$s;return e.stylesheets&&e.count===0&&Md(e,e.stylesheets),0<e.count?function(t){var r=setTimeout(function(){if(e.stylesheets&&Md(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Ol(){if(this.count--,this.count===0){if(this.stylesheets)Md(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kl=null;function Md(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kl=new Map,t.forEach(yS,e),kl=null,Ol.call(e))}function yS(e,t){if(!(t.state.loading&4)){var r=kl.get(e);if(r)var i=r.get(null);else{r=new Map,kl.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),i=y)}i&&r.set(null,i)}c=t.instance,y=c.getAttribute("data-precedence"),f=r.get(y)||i,f===i&&r.set(null,c),r.set(y,c),this.count++,i=Ol.bind(this),c.addEventListener("load",i),c.addEventListener("error",i),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Hs={$$typeof:T,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function xS(e,t,r,i,c,f,y,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.hiddenUpdates=Tc(null),this.identifierPrefix=i,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function hv(e,t,r,i,c,f,y,w,R,J,Z,te){return e=new xS(e,t,r,y,w,R,J,te),t=1,f===!0&&(t|=24),f=It(3,null,null,t),e.current=f,f.stateNode=e,t=hu(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:i,isDehydrated:r,cache:t},yu(f),e}function gv(e){return e?(e=Fr,e):Fr}function vv(e,t,r,i,c,f){c=gv(c),i.context===null?i.context=c:i.pendingContext=c,i=Sa(t),i.payload={element:r},f=f===void 0?null:f,f!==null&&(i.callback=f),r=Na(e,i,t),r!==null&&(Gt(r,e,t),bs(r,e,t))}function bv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function _d(e,t){bv(e,t),(e=e.alternate)&&bv(e,t)}function yv(e){if(e.tag===13){var t=Gr(e,67108864);t!==null&&Gt(t,e,67108864),_d(e,67108864)}}var Tl=!0;function wS(e,t,r,i){var c=D.T;D.T=null;var f=K.p;try{K.p=2,zd(e,t,r,i)}finally{K.p=f,D.T=c}}function jS(e,t,r,i){var c=D.T;D.T=null;var f=K.p;try{K.p=8,zd(e,t,r,i)}finally{K.p=f,D.T=c}}function zd(e,t,r,i){if(Tl){var c=Bd(i);if(c===null)Sd(e,t,i,Rl,r),wv(e,i);else if(NS(c,e,t,r,i))i.stopPropagation();else if(wv(e,i),t&4&&-1<SS.indexOf(e)){for(;c!==null;){var f=Lr(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Za(f.pendingLanes);if(y!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var R=1<<31-Ut(y);w.entanglements[1]|=R,y&=~R}Ln(f),(Le&6)===0&&(pl=ot()+500,_s(0))}}break;case 13:w=Gr(f,2),w!==null&&Gt(w,f,2),gl(),_d(f,2)}if(f=Bd(i),f===null&&Sd(e,t,i,Rl,r),f===c)break;c=f}c!==null&&i.stopPropagation()}else Sd(e,t,i,null,r)}}function Bd(e){return e=Hc(e),Ud(e)}var Rl=null;function Ud(e){if(Rl=null,e=Dr(e),e!==null){var t=d(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=p(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Rl=e,null}function xv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zo()){case Or:return 2;case en:return 8;case wn:case kr:return 32;case Xa:return 268435456;default:return 32}default:return 32}}var Pd=!1,Ba=null,Ua=null,Pa=null,qs=new Map,Js=new Map,Ia=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wv(e,t){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":qs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(t.pointerId)}}function Gs(e,t,r,i,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:f,targetContainers:[c]},t!==null&&(t=Lr(t),t!==null&&yv(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function NS(e,t,r,i,c){switch(t){case"focusin":return Ba=Gs(Ba,e,t,r,i,c),!0;case"dragenter":return Ua=Gs(Ua,e,t,r,i,c),!0;case"mouseover":return Pa=Gs(Pa,e,t,r,i,c),!0;case"pointerover":var f=c.pointerId;return qs.set(f,Gs(qs.get(f)||null,e,t,r,i,c)),!0;case"gotpointercapture":return f=c.pointerId,Js.set(f,Gs(Js.get(f)||null,e,t,r,i,c)),!0}return!1}function jv(e){var t=Dr(e.target);if(t!==null){var r=d(t);if(r!==null){if(t=r.tag,t===13){if(t=p(r),t!==null){e.blockedOn=t,v0(e.priority,function(){if(r.tag===13){var i=Jt();i=Rc(i);var c=Gr(r,i);c!==null&&Gt(c,r,i),_d(r,i)}});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Bd(e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);$c=i,r.target.dispatchEvent(i),$c=null}else return t=Lr(r),t!==null&&yv(t),e.blockedOn=r,!1;t.shift()}return!0}function Sv(e,t,r){Dl(e)&&r.delete(t)}function ES(){Pd=!1,Ba!==null&&Dl(Ba)&&(Ba=null),Ua!==null&&Dl(Ua)&&(Ua=null),Pa!==null&&Dl(Pa)&&(Pa=null),qs.forEach(Sv),Js.forEach(Sv)}function Ll(e,t){e.blockedOn===t&&(e.blockedOn=null,Pd||(Pd=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,ES)))}var Ml=null;function Nv(e){Ml!==e&&(Ml=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ml===e&&(Ml=null);for(var t=0;t<e.length;t+=3){var r=e[t],i=e[t+1],c=e[t+2];if(typeof i!="function"){if(Ud(i||r)===null)continue;break}var f=Lr(r);f!==null&&(e.splice(t,3),t-=3,Uu(f,{pending:!0,data:c,method:r.method,action:i},i,c))}}))}function Fs(e){function t(R){return Ll(R,e)}Ba!==null&&Ll(Ba,e),Ua!==null&&Ll(Ua,e),Pa!==null&&Ll(Pa,e),qs.forEach(t),Js.forEach(t);for(var r=0;r<Ia.length;r++){var i=Ia[r];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ia.length&&(r=Ia[0],r.blockedOn===null);)jv(r),r.blockedOn===null&&Ia.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(i=0;i<r.length;i+=3){var c=r[i],f=r[i+1],y=c[Ot]||null;if(typeof f=="function")y||Nv(r);else if(y){var w=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[Ot]||null)w=y.formAction;else if(Ud(c)!==null)continue}else w=y.action;typeof w=="function"?r[i+1]=w:(r.splice(i,3),i-=3),Nv(r)}}}function Id(e){this._internalRoot=e}_l.prototype.render=Id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var r=t.current,i=Jt();vv(r,i,e,t,null,null)},_l.prototype.unmount=Id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vv(e.current,2,null,e,null,null),gl(),t[Rr]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=$m();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ia.length&&t!==0&&t<Ia[r].priority;r++);Ia.splice(r,0,e),r===0&&jv(e)}};var Ev=a.version;if(Ev!=="19.1.1")throw Error(l(527,Ev,"19.1.1"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=h(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var CS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{je=zl.inject(CS),Ye=zl}catch{}}return Ys.createRoot=function(e,t){if(!u(e))throw Error(l(299));var r=!1,i="",c=$h,f=Hh,y=qh,w=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(w=t.unstable_transitionCallbacks)),t=hv(e,1,!1,null,null,r,i,c,f,y,w,null),e[Rr]=t.current,jd(e),new Id(t)},Ys.hydrateRoot=function(e,t,r){if(!u(e))throw Error(l(299));var i=!1,c="",f=$h,y=Hh,w=qh,R=null,J=null;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(R=r.unstable_transitionCallbacks),r.formState!==void 0&&(J=r.formState)),t=hv(e,1,!0,t,r??null,i,c,f,y,w,R,J),t.context=gv(null),r=t.current,i=Jt(),i=Rc(i),c=Sa(i),c.callback=null,Na(r,c,i),r=i,t.current.lanes=r,Qo(t,r),Ln(t),e[Rr]=t.current,jd(e),new _l(t)},Ys.version="19.1.1",Ys}var _v;function _S(){if(_v)return qd.exports;_v=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),qd.exports=MS(),qd.exports}var zS=_S();const BS=Do(zS);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zv="popstate";function US(n={}){function a(u,d){let{pathname:p="/",search:g="",hash:h=""}=Sr(u.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),ff("",{pathname:p,search:g,hash:h},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(u,d){let p=u.document.querySelector("base"),g="";if(p&&p.getAttribute("href")){let h=u.location.href,v=h.indexOf("#");g=v===-1?h:h.slice(0,v)}return g+"#"+(typeof d=="string"?d:ai(d))}function l(u,d){gn(u.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return IS(a,o,l,n)}function Ve(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function gn(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function PS(){return Math.random().toString(36).substring(2,10)}function Bv(n,a){return{usr:n.state,key:n.key,idx:a}}function ff(n,a,o=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?Sr(a):a,state:o,key:a&&a.key||l||PS()}}function ai({pathname:n="/",search:a="",hash:o=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Sr(n){let a={};if(n){let o=n.indexOf("#");o>=0&&(a.hash=n.substring(o),n=n.substring(0,o));let l=n.indexOf("?");l>=0&&(a.search=n.substring(l),n=n.substring(0,l)),n&&(a.pathname=n)}return a}function IS(n,a,o,l={}){let{window:u=document.defaultView,v5Compat:d=!1}=l,p=u.history,g="POP",h=null,v=b();v==null&&(v=0,p.replaceState({...p.state,idx:v},""));function b(){return(p.state||{idx:null}).idx}function x(){g="POP";let S=b(),k=S==null?null:S-v;v=S,h&&h({action:g,location:O.location,delta:k})}function j(S,k){g="PUSH";let E=ff(O.location,S,k);o&&o(E,S),v=b()+1;let T=Bv(E,v),L=O.createHref(E);try{p.pushState(T,"",L)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;u.location.assign(L)}d&&h&&h({action:g,location:O.location,delta:1})}function N(S,k){g="REPLACE";let E=ff(O.location,S,k);o&&o(E,S),v=b();let T=Bv(E,v),L=O.createHref(E);p.replaceState(T,"",L),d&&h&&h({action:g,location:O.location,delta:0})}function C(S){return $S(S)}let O={get action(){return g},get location(){return n(u,p)},listen(S){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(zv,x),h=S,()=>{u.removeEventListener(zv,x),h=null}},createHref(S){return a(u,S)},createURL:C,encodeLocation(S){let k=C(S);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:j,replace:N,go(S){return p.go(S)}};return O}function $S(n,a=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ve(o,"No window.location.(origin|href) available to create URL");let l=typeof n=="string"?n:ai(n);return l=l.replace(/ $/,"%20"),!a&&l.startsWith("//")&&(l=o+l),new URL(l,o)}function $b(n,a,o="/"){return HS(n,a,o,!1)}function HS(n,a,o,l){let u=typeof a=="string"?Sr(a):a,d=ua(u.pathname||"/",o);if(d==null)return null;let p=Hb(n);qS(p);let g=null;for(let h=0;g==null&&h<p.length;++h){let v=eN(d);g=QS(p[h],v,l)}return g}function Hb(n,a=[],o=[],l="",u=!1){let d=(p,g,h=u,v)=>{let b={relativePath:v===void 0?p.path||"":v,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(l)&&h)return;Ve(b.relativePath.startsWith(l),`Absolute route path "${b.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(l.length)}let x=ia([l,b.relativePath]),j=o.concat(b);p.children&&p.children.length>0&&(Ve(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Hb(p.children,a,j,x,h)),!(p.path==null&&!p.index)&&a.push({path:x,score:ZS(x,p.index),routesMeta:j})};return n.forEach((p,g)=>{if(p.path===""||!p.path?.includes("?"))d(p,g);else for(let h of qb(p.path))d(p,g,!0,h)}),a}function qb(n){let a=n.split("/");if(a.length===0)return[];let[o,...l]=a,u=o.endsWith("?"),d=o.replace(/\?$/,"");if(l.length===0)return u?[d,""]:[d];let p=qb(l.join("/")),g=[];return g.push(...p.map(h=>h===""?d:[d,h].join("/"))),u&&g.push(...p),g.map(h=>n.startsWith("/")&&h===""?"/":h)}function qS(n){n.sort((a,o)=>a.score!==o.score?o.score-a.score:KS(a.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var JS=/^:[\w-]+$/,GS=3,FS=2,VS=1,YS=10,XS=-2,Uv=n=>n==="*";function ZS(n,a){let o=n.split("/"),l=o.length;return o.some(Uv)&&(l+=XS),a&&(l+=FS),o.filter(u=>!Uv(u)).reduce((u,d)=>u+(JS.test(d)?GS:d===""?VS:YS),l)}function KS(n,a){return n.length===a.length&&n.slice(0,-1).every((l,u)=>l===a[u])?n[n.length-1]-a[a.length-1]:0}function QS(n,a,o=!1){let{routesMeta:l}=n,u={},d="/",p=[];for(let g=0;g<l.length;++g){let h=l[g],v=g===l.length-1,b=d==="/"?a:a.slice(d.length)||"/",x=Yl({path:h.relativePath,caseSensitive:h.caseSensitive,end:v},b),j=h.route;if(!x&&v&&o&&!l[l.length-1].route.index&&(x=Yl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},b)),!x)return null;Object.assign(u,x.params),p.push({params:u,pathname:ia([d,x.pathname]),pathnameBase:rN(ia([d,x.pathnameBase])),route:j}),x.pathnameBase!=="/"&&(d=ia([d,x.pathnameBase]))}return p}function Yl(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,l]=WS(n.path,n.caseSensitive,n.end),u=a.match(o);if(!u)return null;let d=u[0],p=d.replace(/(.)\/+$/,"$1"),g=u.slice(1);return{params:l.reduce((v,{paramName:b,isOptional:x},j)=>{if(b==="*"){let C=g[j]||"";p=d.slice(0,d.length-C.length).replace(/(.)\/+$/,"$1")}const N=g[j];return x&&!N?v[b]=void 0:v[b]=(N||"").replace(/%2F/g,"/"),v},{}),pathname:d,pathnameBase:p,pattern:n}}function WS(n,a=!1,o=!0){gn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,h)=>(l.push({paramName:g,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(l.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,a?void 0:"i"),l]}function eN(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return gn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function ua(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,l=n.charAt(o);return l&&l!=="/"?null:n.slice(o)||"/"}function tN(n,a="/"){let{pathname:o,search:l="",hash:u=""}=typeof n=="string"?Sr(n):n;return{pathname:o?o.startsWith("/")?o:nN(o,a):a,search:oN(l),hash:sN(u)}}function nN(n,a){let o=a.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function Vd(n,a,o,l){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function aN(n){return n.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function zf(n){let a=aN(n);return a.map((o,l)=>l===a.length-1?o.pathname:o.pathnameBase)}function Bf(n,a,o,l=!1){let u;typeof n=="string"?u=Sr(n):(u={...n},Ve(!u.pathname||!u.pathname.includes("?"),Vd("?","pathname","search",u)),Ve(!u.pathname||!u.pathname.includes("#"),Vd("#","pathname","hash",u)),Ve(!u.search||!u.search.includes("#"),Vd("#","search","hash",u)));let d=n===""||u.pathname==="",p=d?"/":u.pathname,g;if(p==null)g=o;else{let x=a.length-1;if(!l&&p.startsWith("..")){let j=p.split("/");for(;j[0]==="..";)j.shift(),x-=1;u.pathname=j.join("/")}g=x>=0?a[x]:"/"}let h=tN(u,g),v=p&&p!=="/"&&p.endsWith("/"),b=(d||p===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(v||b)&&(h.pathname+="/"),h}var ia=n=>n.join("/").replace(/\/\/+/g,"/"),rN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),oN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,sN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function iN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Jb=["POST","PUT","PATCH","DELETE"];new Set(Jb);var lN=["GET",...Jb];new Set(lN);var Lo=m.createContext(null);Lo.displayName="DataRouter";var cc=m.createContext(null);cc.displayName="DataRouterState";m.createContext(!1);var Gb=m.createContext({isTransitioning:!1});Gb.displayName="ViewTransition";var cN=m.createContext(new Map);cN.displayName="Fetchers";var uN=m.createContext(null);uN.displayName="Await";var An=m.createContext(null);An.displayName="Navigation";var li=m.createContext(null);li.displayName="Location";var Pn=m.createContext({outlet:null,matches:[],isDataRoute:!1});Pn.displayName="Route";var Uf=m.createContext(null);Uf.displayName="RouteError";function dN(n,{relative:a}={}){Ve(Mo(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=m.useContext(An),{hash:u,pathname:d,search:p}=ci(n,{relative:a}),g=d;return o!=="/"&&(g=d==="/"?o:ia([o,d])),l.createHref({pathname:g,search:p,hash:u})}function Mo(){return m.useContext(li)!=null}function In(){return Ve(Mo(),"useLocation() may be used only in the context of a <Router> component."),m.useContext(li).location}var Fb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vb(n){m.useContext(An).static||m.useLayoutEffect(n)}function On(){let{isDataRoute:n}=m.useContext(Pn);return n?NN():fN()}function fN(){Ve(Mo(),"useNavigate() may be used only in the context of a <Router> component.");let n=m.useContext(Lo),{basename:a,navigator:o}=m.useContext(An),{matches:l}=m.useContext(Pn),{pathname:u}=In(),d=JSON.stringify(zf(l)),p=m.useRef(!1);return Vb(()=>{p.current=!0}),m.useCallback((h,v={})=>{if(gn(p.current,Fb),!p.current)return;if(typeof h=="number"){o.go(h);return}let b=Bf(h,JSON.parse(d),u,v.relative==="path");n==null&&a!=="/"&&(b.pathname=b.pathname==="/"?a:ia([a,b.pathname])),(v.replace?o.replace:o.push)(b,v.state,v)},[a,o,d,u,n])}m.createContext(null);function ci(n,{relative:a}={}){let{matches:o}=m.useContext(Pn),{pathname:l}=In(),u=JSON.stringify(zf(o));return m.useMemo(()=>Bf(n,JSON.parse(u),l,a==="path"),[n,u,l,a])}function mN(n,a){return Yb(n,a)}function Yb(n,a,o,l,u){Ve(Mo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=m.useContext(An),{matches:p}=m.useContext(Pn),g=p[p.length-1],h=g?g.params:{},v=g?g.pathname:"/",b=g?g.pathnameBase:"/",x=g&&g.route;{let E=x&&x.path||"";Xb(v,!x||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let j=In(),N;if(a){let E=typeof a=="string"?Sr(a):a;Ve(b==="/"||E.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${E.pathname}" was given in the \`location\` prop.`),N=E}else N=j;let C=N.pathname||"/",O=C;if(b!=="/"){let E=b.replace(/^\//,"").split("/");O="/"+C.replace(/^\//,"").split("/").slice(E.length).join("/")}let S=$b(n,{pathname:O});gn(x||S!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),gn(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=bN(S&&S.map(E=>Object.assign({},E,{params:Object.assign({},h,E.params),pathname:ia([b,d.encodeLocation?d.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?b:ia([b,d.encodeLocation?d.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),p,o,l,u);return a&&k?m.createElement(li.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},k):k}function pN(){let n=SN(),a=iN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:l},d={padding:"2px 4px",backgroundColor:l},p=null;return console.error("Error handled by React Router default ErrorBoundary:",n),p=m.createElement(m.Fragment,null,m.createElement("p",null,"💿 Hey developer 👋"),m.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",m.createElement("code",{style:d},"ErrorBoundary")," or"," ",m.createElement("code",{style:d},"errorElement")," prop on your route.")),m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},a),o?m.createElement("pre",{style:u},o):null,p)}var hN=m.createElement(pN,null),gN=class extends m.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){this.props.unstable_onError?this.props.unstable_onError(n,a):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?m.createElement(Pn.Provider,{value:this.props.routeContext},m.createElement(Uf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vN({routeContext:n,match:a,children:o}){let l=m.useContext(Lo);return l&&l.static&&l.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=a.route.id),m.createElement(Pn.Provider,{value:n},o)}function bN(n,a=[],o=null,l=null,u=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let d=n,p=o?.errors;if(p!=null){let v=d.findIndex(b=>b.route.id&&p?.[b.route.id]!==void 0);Ve(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let g=!1,h=-1;if(o)for(let v=0;v<d.length;v++){let b=d[v];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(h=v),b.route.id){let{loaderData:x,errors:j}=o,N=b.route.loader&&!x.hasOwnProperty(b.route.id)&&(!j||j[b.route.id]===void 0);if(b.route.lazy||N){g=!0,h>=0?d=d.slice(0,h+1):d=[d[0]];break}}}return d.reduceRight((v,b,x)=>{let j,N=!1,C=null,O=null;o&&(j=p&&b.route.id?p[b.route.id]:void 0,C=b.route.errorElement||hN,g&&(h<0&&x===0?(Xb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,O=null):h===x&&(N=!0,O=b.route.hydrateFallbackElement||null)));let S=a.concat(d.slice(0,x+1)),k=()=>{let E;return j?E=C:N?E=O:b.route.Component?E=m.createElement(b.route.Component,null):b.route.element?E=b.route.element:E=v,m.createElement(vN,{match:b,routeContext:{outlet:v,matches:S,isDataRoute:o!=null},children:E})};return o&&(b.route.ErrorBoundary||b.route.errorElement||x===0)?m.createElement(gN,{location:o.location,revalidation:o.revalidation,component:C,error:j,children:k(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:l}):k()},null)}function Pf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yN(n){let a=m.useContext(Lo);return Ve(a,Pf(n)),a}function xN(n){let a=m.useContext(cc);return Ve(a,Pf(n)),a}function wN(n){let a=m.useContext(Pn);return Ve(a,Pf(n)),a}function If(n){let a=wN(n),o=a.matches[a.matches.length-1];return Ve(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function jN(){return If("useRouteId")}function SN(){let n=m.useContext(Uf),a=xN("useRouteError"),o=If("useRouteError");return n!==void 0?n:a.errors?.[o]}function NN(){let{router:n}=yN("useNavigate"),a=If("useNavigate"),o=m.useRef(!1);return Vb(()=>{o.current=!0}),m.useCallback(async(u,d={})=>{gn(o.current,Fb),o.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:a,...d}))},[n,a])}var Pv={};function Xb(n,a,o){!a&&!Pv[n]&&(Pv[n]=!0,gn(!1,o))}m.memo(EN);function EN({routes:n,future:a,state:o,unstable_onError:l}){return Yb(n,void 0,o,l,a)}function CN({to:n,replace:a,state:o,relative:l}){Ve(Mo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=m.useContext(An);gn(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=m.useContext(Pn),{pathname:p}=In(),g=On(),h=Bf(n,zf(d),p,l==="path"),v=JSON.stringify(h);return m.useEffect(()=>{g(JSON.parse(v),{replace:a,state:o,relative:l})},[g,v,l,a,o]),null}function fn(n){Ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function AN({basename:n="/",children:a=null,location:o,navigationType:l="POP",navigator:u,static:d=!1}){Ve(!Mo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=n.replace(/^\/*/,"/"),g=m.useMemo(()=>({basename:p,navigator:u,static:d,future:{}}),[p,u,d]);typeof o=="string"&&(o=Sr(o));let{pathname:h="/",search:v="",hash:b="",state:x=null,key:j="default"}=o,N=m.useMemo(()=>{let C=ua(h,p);return C==null?null:{location:{pathname:C,search:v,hash:b,state:x,key:j},navigationType:l}},[p,h,v,b,x,j,l]);return gn(N!=null,`<Router basename="${p}"> is not able to match the URL "${h}${v}${b}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:m.createElement(An.Provider,{value:g},m.createElement(li.Provider,{children:a,value:N}))}function ON({children:n,location:a}){return mN(mf(n),a)}function mf(n,a=[]){let o=[];return m.Children.forEach(n,(l,u)=>{if(!m.isValidElement(l))return;let d=[...a,u];if(l.type===m.Fragment){o.push.apply(o,mf(l.props.children,d));return}Ve(l.type===fn,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ve(!l.props.index||!l.props.children,"An index route cannot have child routes.");let p={id:l.props.id||d.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(p.children=mf(l.props.children,d)),o.push(p)}),o}var Jl="get",Gl="application/x-www-form-urlencoded";function uc(n){return n!=null&&typeof n.tagName=="string"}function kN(n){return uc(n)&&n.tagName.toLowerCase()==="button"}function TN(n){return uc(n)&&n.tagName.toLowerCase()==="form"}function RN(n){return uc(n)&&n.tagName.toLowerCase()==="input"}function DN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function LN(n,a){return n.button===0&&(!a||a==="_self")&&!DN(n)}var Bl=null;function MN(){if(Bl===null)try{new FormData(document.createElement("form"),0),Bl=!1}catch{Bl=!0}return Bl}var _N=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yd(n){return n!=null&&!_N.has(n)?(gn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gl}"`),null):n}function zN(n,a){let o,l,u,d,p;if(TN(n)){let g=n.getAttribute("action");l=g?ua(g,a):null,o=n.getAttribute("method")||Jl,u=Yd(n.getAttribute("enctype"))||Gl,d=new FormData(n)}else if(kN(n)||RN(n)&&(n.type==="submit"||n.type==="image")){let g=n.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||g.getAttribute("action");if(l=h?ua(h,a):null,o=n.getAttribute("formmethod")||g.getAttribute("method")||Jl,u=Yd(n.getAttribute("formenctype"))||Yd(g.getAttribute("enctype"))||Gl,d=new FormData(g,n),!MN()){let{name:v,type:b,value:x}=n;if(b==="image"){let j=v?`${v}.`:"";d.append(`${j}x`,"0"),d.append(`${j}y`,"0")}else v&&d.append(v,x)}}else{if(uc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Jl,l=null,u=Gl,p=n}return d&&u==="text/plain"&&(p=d,d=void 0),{action:l,method:o.toLowerCase(),encType:u,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $f(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function BN(n,a,o){let l=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return l.pathname==="/"?l.pathname=`_root.${o}`:a&&ua(l.pathname,a)==="/"?l.pathname=`${a.replace(/\/$/,"")}/_root.${o}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${o}`,l}async function UN(n,a){if(n.id in a)return a[n.id];try{let o=await import(n.module);return a[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function PN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function IN(n,a,o){let l=await Promise.all(n.map(async u=>{let d=a.routes[u.route.id];if(d){let p=await UN(d,o);return p.links?p.links():[]}return[]}));return JN(l.flat(1).filter(PN).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Iv(n,a,o,l,u,d){let p=(h,v)=>o[v]?h.route.id!==o[v].route.id:!0,g=(h,v)=>o[v].pathname!==h.pathname||o[v].route.path?.endsWith("*")&&o[v].params["*"]!==h.params["*"];return d==="assets"?a.filter((h,v)=>p(h,v)||g(h,v)):d==="data"?a.filter((h,v)=>{let b=l.routes[h.route.id];if(!b||!b.hasLoader)return!1;if(p(h,v)||g(h,v))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function $N(n,a,{includeHydrateFallback:o}={}){return HN(n.map(l=>{let u=a.routes[l.route.id];if(!u)return[];let d=[u.module];return u.clientActionModule&&(d=d.concat(u.clientActionModule)),u.clientLoaderModule&&(d=d.concat(u.clientLoaderModule)),o&&u.hydrateFallbackModule&&(d=d.concat(u.hydrateFallbackModule)),u.imports&&(d=d.concat(u.imports)),d}).flat(1))}function HN(n){return[...new Set(n)]}function qN(n){let a={},o=Object.keys(n).sort();for(let l of o)a[l]=n[l];return a}function JN(n,a){let o=new Set;return new Set(a),n.reduce((l,u)=>{let d=JSON.stringify(qN(u));return o.has(d)||(o.add(d),l.push({key:d,link:u})),l},[])}function Zb(){let n=m.useContext(Lo);return $f(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function GN(){let n=m.useContext(cc);return $f(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Hf=m.createContext(void 0);Hf.displayName="FrameworkContext";function Kb(){let n=m.useContext(Hf);return $f(n,"You must render this element inside a <HydratedRouter> element"),n}function FN(n,a){let o=m.useContext(Hf),[l,u]=m.useState(!1),[d,p]=m.useState(!1),{onFocus:g,onBlur:h,onMouseEnter:v,onMouseLeave:b,onTouchStart:x}=a,j=m.useRef(null);m.useEffect(()=>{if(n==="render"&&p(!0),n==="viewport"){let O=k=>{k.forEach(E=>{p(E.isIntersecting)})},S=new IntersectionObserver(O,{threshold:.5});return j.current&&S.observe(j.current),()=>{S.disconnect()}}},[n]),m.useEffect(()=>{if(l){let O=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(O)}}},[l]);let N=()=>{u(!0)},C=()=>{u(!1),p(!1)};return o?n!=="intent"?[d,j,{}]:[d,j,{onFocus:Xs(g,N),onBlur:Xs(h,C),onMouseEnter:Xs(v,N),onMouseLeave:Xs(b,C),onTouchStart:Xs(x,N)}]:[!1,j,{}]}function Xs(n,a){return o=>{n&&n(o),o.defaultPrevented||a(o)}}function VN({page:n,...a}){let{router:o}=Zb(),l=m.useMemo(()=>$b(o.routes,n,o.basename),[o.routes,n,o.basename]);return l?m.createElement(XN,{page:n,matches:l,...a}):null}function YN(n){let{manifest:a,routeModules:o}=Kb(),[l,u]=m.useState([]);return m.useEffect(()=>{let d=!1;return IN(n,a,o).then(p=>{d||u(p)}),()=>{d=!0}},[n,a,o]),l}function XN({page:n,matches:a,...o}){let l=In(),{manifest:u,routeModules:d}=Kb(),{basename:p}=Zb(),{loaderData:g,matches:h}=GN(),v=m.useMemo(()=>Iv(n,a,h,u,l,"data"),[n,a,h,u,l]),b=m.useMemo(()=>Iv(n,a,h,u,l,"assets"),[n,a,h,u,l]),x=m.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let C=new Set,O=!1;if(a.forEach(k=>{let E=u.routes[k.route.id];!E||!E.hasLoader||(!v.some(T=>T.route.id===k.route.id)&&k.route.id in g&&d[k.route.id]?.shouldRevalidate||E.hasClientLoader?O=!0:C.add(k.route.id))}),C.size===0)return[];let S=BN(n,p,"data");return O&&C.size>0&&S.searchParams.set("_routes",a.filter(k=>C.has(k.route.id)).map(k=>k.route.id).join(",")),[S.pathname+S.search]},[p,g,l,u,v,a,n,d]),j=m.useMemo(()=>$N(b,u),[b,u]),N=YN(b);return m.createElement(m.Fragment,null,x.map(C=>m.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...o})),j.map(C=>m.createElement("link",{key:C,rel:"modulepreload",href:C,...o})),N.map(({key:C,link:O})=>m.createElement("link",{key:C,nonce:o.nonce,...O})))}function ZN(...n){return a=>{n.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var Qb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Qb&&(window.__reactRouterVersion="7.8.2")}catch{}function KN({basename:n,children:a,window:o}){let l=m.useRef();l.current==null&&(l.current=US({window:o,v5Compat:!0}));let u=l.current,[d,p]=m.useState({action:u.action,location:u.location}),g=m.useCallback(h=>{m.startTransition(()=>p(h))},[p]);return m.useLayoutEffect(()=>u.listen(g),[u,g]),m.createElement(AN,{basename:n,children:a,location:d.location,navigationType:d.action,navigator:u})}var Wb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,En=m.forwardRef(function({onClick:a,discover:o="render",prefetch:l="none",relative:u,reloadDocument:d,replace:p,state:g,target:h,to:v,preventScrollReset:b,viewTransition:x,...j},N){let{basename:C}=m.useContext(An),O=typeof v=="string"&&Wb.test(v),S,k=!1;if(typeof v=="string"&&O&&(S=v,Qb))try{let Y=new URL(window.location.href),W=v.startsWith("//")?new URL(Y.protocol+v):new URL(v),ne=ua(W.pathname,C);W.origin===Y.origin&&ne!=null?v=ne+W.search+W.hash:k=!0}catch{gn(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let E=dN(v,{relative:u}),[T,L,B]=FN(l,j),z=tE(v,{replace:p,state:g,target:h,preventScrollReset:b,relative:u,viewTransition:x});function _(Y){a&&a(Y),Y.defaultPrevented||z(Y)}let U=m.createElement("a",{...j,...B,href:S||E,onClick:k||d?a:_,ref:ZN(N,L),target:h,"data-discover":!O&&o==="render"?"true":void 0});return T&&!O?m.createElement(m.Fragment,null,U,m.createElement(VN,{page:E})):U});En.displayName="Link";var QN=m.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:l="",end:u=!1,style:d,to:p,viewTransition:g,children:h,...v},b){let x=ci(p,{relative:v.relative}),j=In(),N=m.useContext(cc),{navigator:C,basename:O}=m.useContext(An),S=N!=null&&sE(x)&&g===!0,k=C.encodeLocation?C.encodeLocation(x).pathname:x.pathname,E=j.pathname,T=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;o||(E=E.toLowerCase(),T=T?T.toLowerCase():null,k=k.toLowerCase()),T&&O&&(T=ua(T,O)||T);const L=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let B=E===k||!u&&E.startsWith(k)&&E.charAt(L)==="/",z=T!=null&&(T===k||!u&&T.startsWith(k)&&T.charAt(k.length)==="/"),_={isActive:B,isPending:z,isTransitioning:S},U=B?a:void 0,Y;typeof l=="function"?Y=l(_):Y=[l,B?"active":null,z?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let W=typeof d=="function"?d(_):d;return m.createElement(En,{...v,"aria-current":U,className:Y,ref:b,style:W,to:p,viewTransition:g},typeof h=="function"?h(_):h)});QN.displayName="NavLink";var WN=m.forwardRef(({discover:n="render",fetcherKey:a,navigate:o,reloadDocument:l,replace:u,state:d,method:p=Jl,action:g,onSubmit:h,relative:v,preventScrollReset:b,viewTransition:x,...j},N)=>{let C=rE(),O=oE(g,{relative:v}),S=p.toLowerCase()==="get"?"get":"post",k=typeof g=="string"&&Wb.test(g),E=T=>{if(h&&h(T),T.defaultPrevented)return;T.preventDefault();let L=T.nativeEvent.submitter,B=L?.getAttribute("formmethod")||p;C(L||T.currentTarget,{fetcherKey:a,method:B,navigate:o,replace:u,state:d,relative:v,preventScrollReset:b,viewTransition:x})};return m.createElement("form",{ref:N,method:S,action:O,onSubmit:l?h:E,...j,"data-discover":!k&&n==="render"?"true":void 0})});WN.displayName="Form";function eE(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ey(n){let a=m.useContext(Lo);return Ve(a,eE(n)),a}function tE(n,{target:a,replace:o,state:l,preventScrollReset:u,relative:d,viewTransition:p}={}){let g=On(),h=In(),v=ci(n,{relative:d});return m.useCallback(b=>{if(LN(b,a)){b.preventDefault();let x=o!==void 0?o:ai(h)===ai(v);g(n,{replace:x,state:l,preventScrollReset:u,relative:d,viewTransition:p})}},[h,g,v,o,l,a,n,u,d,p])}var nE=0,aE=()=>`__${String(++nE)}__`;function rE(){let{router:n}=ey("useSubmit"),{basename:a}=m.useContext(An),o=jN();return m.useCallback(async(l,u={})=>{let{action:d,method:p,encType:g,formData:h,body:v}=zN(l,a);if(u.navigate===!1){let b=u.fetcherKey||aE();await n.fetch(b,o,u.action||d,{preventScrollReset:u.preventScrollReset,formData:h,body:v,formMethod:u.method||p,formEncType:u.encType||g,flushSync:u.flushSync})}else await n.navigate(u.action||d,{preventScrollReset:u.preventScrollReset,formData:h,body:v,formMethod:u.method||p,formEncType:u.encType||g,replace:u.replace,state:u.state,fromRouteId:o,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,a,o])}function oE(n,{relative:a}={}){let{basename:o}=m.useContext(An),l=m.useContext(Pn);Ve(l,"useFormAction must be used inside a RouteContext");let[u]=l.matches.slice(-1),d={...ci(n||".",{relative:a})},p=In();if(n==null){d.search=p.search;let g=new URLSearchParams(d.search),h=g.getAll("index");if(h.some(b=>b==="")){g.delete("index"),h.filter(x=>x).forEach(x=>g.append("index",x));let b=g.toString();d.search=b?`?${b}`:""}}return(!n||n===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(d.pathname=d.pathname==="/"?o:ia([o,d.pathname])),ai(d)}function sE(n,{relative:a}={}){let o=m.useContext(Gb);Ve(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=ey("useViewTransitionState"),u=ci(n,{relative:a});if(!o.isTransitioning)return!1;let d=ua(o.currentLocation.pathname,l)||o.currentLocation.pathname,p=ua(o.nextLocation.pathname,l)||o.nextLocation.pathname;return Yl(u.pathname,p)!=null||Yl(u.pathname,d)!=null}var iE=Ib();const gr=Do(iE),pf="backends_config";function ty(){try{const n=localStorage.getItem(pf);return n&&JSON.parse(n)?.active?.url||null}catch(n){return console.error("❌ Error leyendo backend desde localStorage",n),null}}function lE(n){try{if(!n)return;const a=localStorage.getItem(pf);if(!a)return;const o=JSON.parse(a);localStorage.setItem(pf,JSON.stringify({...o,active:{...o.active,url:n}}))}catch(a){console.warn("⚠️ No se pudo sincronizar backendURLGlobal",a)}}const $v="backends_config",ny=m.createContext();function cE({children:n}){const[a,o]=m.useState([]),[l,u]=m.useState(null),[d,p]=m.useState(!1),[g,h]=m.useState(!0);m.useEffect(()=>{const j=localStorage.getItem($v);if(j)try{const N=JSON.parse(j);o(N.backends||[]),u(N.active||null)}catch(N){console.error("⚠️ Error parseando backends_config",N)}p(!0),h(!1)},[]),m.useEffect(()=>{d&&localStorage.setItem($v,JSON.stringify({backends:a,active:l}))},[a,l,d]),m.useEffect(()=>{l?.url&&lE(l.url)},[l]);const v=(j,N,C=null)=>{if(!j?.trim()||!N?.trim())throw new Error("Alias y URL son obligatorios");if(a.some(S=>S.alias===j.trim()))throw new Error(`Ya existe un backend con alias "${j}"`);const O={id:crypto.randomUUID(),alias:j.trim(),url:N.trim().charAt(0).toLowerCase()+N.trim().slice(1),avatar:C};o(S=>[...S,O]),l||u(O)},b=j=>{o(N=>N.filter(C=>C.alias!==j)),l?.alias===j&&u(null)},x=j=>{const N=a.find(C=>C.alias===j);N&&l?.alias!==N.alias&&(localStorage.removeItem("auth_session"),u(N),setTimeout(()=>{window.location.replace(window.location.origin+window.location.pathname)},100))};return s.jsx(ny.Provider,{value:{backends:a,activeBackend:l,addBackend:v,deleteBackend:b,setActiveBackend:x,loading:g},children:n})}function dc(){return m.useContext(ny)}const uE="auth_session";class qf extends Error{constructor(a="Autenticación requerida"){super(a),this.name="AuthRequiredError"}}function _o(){try{return JSON.parse(localStorage.getItem(uE))?.token||null}catch{return null}}function Jf(n){console.warn("notifyAuthRequired:",n);try{window.dispatchEvent(new CustomEvent("auth:required",{detail:{message:n}}))}catch(a){console.error("Error dispatching auth:required",a)}}async function ay(n){if(!n.ok)throw new Error(`Error HTTP ${n.status}: ${n.statusText}`);const a=await n.json();if(a.status==="token_invalido"||a.autorizado===!1&&a.motivo==="token_invalido"){const o=a.mensaje||"Token inválido o sesión expirada";throw Jf(o),new qf(o)}if(a.status==="sin_permiso"){const o=a.mensaje||"No tiene permiso para realizar esta acción";throw console.warn("⛔ Acción bloqueada por permisos:",o),new Error(o)}if(a.status&&!["ok","exists","warning","error_validacion","error_campos","archivo_existente"].includes(a.status))throw new Error(a.mensaje||"Error en respuesta del servidor");return a}async function hn(n,a={}){const o=ty();if(!o)throw new Error("Backend no configurado");const l=_o();if(!l)throw Jf("No hay token en localStorage"),new qf("No hay token de sesión");const u=new URLSearchParams({accion:n,...a,token:l});try{const d=await fetch(`${o}?${u.toString()}`,{credentials:"omit"});return await ay(d,n)}catch(d){throw console.error(`❌ apiGet [${n}]`,d),d}}async function Ze(n,a={}){const o=ty();if(!o)throw new Error("Backend no configurado");const l=_o();if(!l)throw Jf("No hay token en localStorage"),new qf("No hay token de sesión");const u={accion:n,...a,token:l};try{const d=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u),credentials:"omit"});if(n==="generarBackupZIP"){if(!d.ok)throw new Error(`Error HTTP ${d.status}: ${d.statusText}`);const p=await d.json();if(p.status==="ok"&&p.base64){const g=atob(p.base64),h=new Array(g.length);for(let x=0;x<g.length;x++)h[x]=g.charCodeAt(x);const v=new Uint8Array(h),b=new Blob([v],{type:p.mimeType||"application/zip"});return{status:"ok",mensaje:p.mensaje,blob:b,nombreArchivo:p.nombreArchivo}}return p}return await ay(d,n)}catch(d){throw console.error(`❌ apiPost [${n}]`,d),d}}var Xd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Hv;function dE(){return Hv||(Hv=1,(function(n){(function(){var a={}.hasOwnProperty;function o(){for(var d="",p=0;p<arguments.length;p++){var g=arguments[p];g&&(d=u(d,l(g)))}return d}function l(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return o.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var p="";for(var g in d)a.call(d,g)&&d[g]&&(p=u(p,g));return p}function u(d,p){return p?d?d+" "+p:d+p:d}n.exports?(o.default=o,n.exports=o):window.classNames=o})()})(Xd)),Xd.exports}var fE=dE();const ce=Do(fE);function hf(){return hf=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},hf.apply(null,arguments)}function ry(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;o[l]=n[l]}return o}function qv(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function mE(n){var a=pE(n,"string");return typeof a=="symbol"?a:String(a)}function pE(n,a){if(typeof n!="object"||n===null)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var l=o.call(n,a);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function oy(n,a,o){var l=m.useRef(n!==void 0),u=m.useState(a),d=u[0],p=u[1],g=n!==void 0,h=l.current;return l.current=g,!g&&h&&d!==a&&p(a),[g?n:d,m.useCallback(function(v){for(var b=arguments.length,x=new Array(b>1?b-1:0),j=1;j<b;j++)x[j-1]=arguments[j];o&&o.apply(void 0,[v].concat(x)),p(v)},[o])]}function fc(n,a){return Object.keys(a).reduce(function(o,l){var u,d=o,p=d[qv(l)],g=d[l],h=ry(d,[qv(l),l].map(mE)),v=a[l],b=oy(g,p,n[v]),x=b[0],j=b[1];return hf({},h,(u={},u[l]=x,u[v]=j,u))},n)}function gf(n,a){return gf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},gf(n,a)}function hE(n,a){n.prototype=Object.create(a.prototype),n.prototype.constructor=n,gf(n,a)}const gE=["xxl","xl","lg","md","sm","xs"],vE="xs",ui=m.createContext({prefixes:{},breakpoints:gE,minBreakpoint:vE}),{Consumer:KT,Provider:QT}=ui;function de(n,a){const{prefixes:o}=m.useContext(ui);return n||o[a]||a}function sy(){const{breakpoints:n}=m.useContext(ui);return n}function iy(){const{minBreakpoint:n}=m.useContext(ui);return n}function mc(){const{dir:n}=m.useContext(ui);return n==="rtl"}function zo(n){return n&&n.ownerDocument||document}function bE(n){var a=zo(n);return a&&a.defaultView||window}function yE(n,a){return bE(n).getComputedStyle(n,a)}var xE=/([A-Z])/g;function wE(n){return n.replace(xE,"-$1").toLowerCase()}var jE=/^ms-/;function Ul(n){return wE(n).replace(jE,"-ms-")}var SE=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function NE(n){return!!(n&&SE.test(n))}function la(n,a){var o="",l="";if(typeof a=="string")return n.style.getPropertyValue(Ul(a))||yE(n).getPropertyValue(Ul(a));Object.keys(a).forEach(function(u){var d=a[u];!d&&d!==0?n.style.removeProperty(Ul(u)):NE(u)?l+=u+"("+d+") ":o+=Ul(u)+": "+d+";"}),l&&(o+="transform: "+l+";"),n.style.cssText+=";"+o}var Zd={exports:{}},Kd,Jv;function EE(){if(Jv)return Kd;Jv=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Kd=n,Kd}var Qd,Gv;function CE(){if(Gv)return Qd;Gv=1;var n=EE();function a(){}function o(){}return o.resetWarningCache=a,Qd=function(){function l(p,g,h,v,b,x){if(x!==n){var j=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw j.name="Invariant Violation",j}}l.isRequired=l;function u(){return l}var d={array:l,bigint:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:u,element:l,elementType:l,instanceOf:u,node:l,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:o,resetWarningCache:a};return d.PropTypes=d,d},Qd}var Fv;function AE(){return Fv||(Fv=1,Zd.exports=CE()()),Zd.exports}var OE=AE();const _e=Do(OE),Vv={disabled:!1},ly=Fe.createContext(null);var kE=function(a){return a.scrollTop},Ws="unmounted",Ja="exited",mn="entering",oa="entered",Eo="exiting",ha=(function(n){hE(a,n);function a(l,u){var d;d=n.call(this,l,u)||this;var p=u,g=p&&!p.isMounting?l.enter:l.appear,h;return d.appearStatus=null,l.in?g?(h=Ja,d.appearStatus=mn):h=oa:l.unmountOnExit||l.mountOnEnter?h=Ws:h=Ja,d.state={status:h},d.nextCallback=null,d}a.getDerivedStateFromProps=function(u,d){var p=u.in;return p&&d.status===Ws?{status:Ja}:null};var o=a.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(u){var d=null;if(u!==this.props){var p=this.state.status;this.props.in?p!==mn&&p!==oa&&(d=mn):(p===mn||p===oa)&&(d=Eo)}this.updateStatus(!1,d)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var u=this.props.timeout,d,p,g;return d=p=g=u,u!=null&&typeof u!="number"&&(d=u.exit,p=u.enter,g=u.appear!==void 0?u.appear:p),{exit:d,enter:p,appear:g}},o.updateStatus=function(u,d){if(u===void 0&&(u=!1),d!==null)if(this.cancelNextCallback(),d===mn){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:gr.findDOMNode(this);p&&kE(p)}this.performEnter(u)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ja&&this.setState({status:Ws})},o.performEnter=function(u){var d=this,p=this.props.enter,g=this.context?this.context.isMounting:u,h=this.props.nodeRef?[g]:[gr.findDOMNode(this),g],v=h[0],b=h[1],x=this.getTimeouts(),j=g?x.appear:x.enter;if(!u&&!p||Vv.disabled){this.safeSetState({status:oa},function(){d.props.onEntered(v)});return}this.props.onEnter(v,b),this.safeSetState({status:mn},function(){d.props.onEntering(v,b),d.onTransitionEnd(j,function(){d.safeSetState({status:oa},function(){d.props.onEntered(v,b)})})})},o.performExit=function(){var u=this,d=this.props.exit,p=this.getTimeouts(),g=this.props.nodeRef?void 0:gr.findDOMNode(this);if(!d||Vv.disabled){this.safeSetState({status:Ja},function(){u.props.onExited(g)});return}this.props.onExit(g),this.safeSetState({status:Eo},function(){u.props.onExiting(g),u.onTransitionEnd(p.exit,function(){u.safeSetState({status:Ja},function(){u.props.onExited(g)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(u,d){d=this.setNextCallback(d),this.setState(u,d)},o.setNextCallback=function(u){var d=this,p=!0;return this.nextCallback=function(g){p&&(p=!1,d.nextCallback=null,u(g))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},o.onTransitionEnd=function(u,d){this.setNextCallback(d);var p=this.props.nodeRef?this.props.nodeRef.current:gr.findDOMNode(this),g=u==null&&!this.props.addEndListener;if(!p||g){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],v=h[0],b=h[1];this.props.addEndListener(v,b)}u!=null&&setTimeout(this.nextCallback,u)},o.render=function(){var u=this.state.status;if(u===Ws)return null;var d=this.props,p=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var g=ry(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Fe.createElement(ly.Provider,{value:null},typeof p=="function"?p(u,g):Fe.cloneElement(Fe.Children.only(p),g))},a})(Fe.Component);ha.contextType=ly;ha.propTypes={};function vo(){}ha.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:vo,onEntering:vo,onEntered:vo,onExit:vo,onExiting:vo,onExited:vo};ha.UNMOUNTED=Ws;ha.EXITED=Ja;ha.ENTERING=mn;ha.ENTERED=oa;ha.EXITING=Eo;function cy(n){return n.code==="Escape"||n.keyCode===27}function TE(){const n=m.version.split(".");return{major:+n[0],minor:+n[1],patch:+n[2]}}function Nr(n){if(!n||typeof n=="function")return null;const{major:a}=TE();return a>=19?n.props.ref:n.ref}const Bo=!!(typeof window<"u"&&window.document&&window.document.createElement);var vf=!1,bf=!1;try{var Wd={get passive(){return vf=!0},get once(){return bf=vf=!0}};Bo&&(window.addEventListener("test",Wd,Wd),window.removeEventListener("test",Wd,!0))}catch{}function Gf(n,a,o,l){if(l&&typeof l!="boolean"&&!bf){var u=l.once,d=l.capture,p=o;!bf&&u&&(p=o.__once||function g(h){this.removeEventListener(a,g,d),o.call(this,h)},o.__once=p),n.addEventListener(a,p,vf?l:d)}n.addEventListener(a,o,l)}function yf(n,a,o,l){var u=l&&typeof l!="boolean"?l.capture:l;n.removeEventListener(a,o,u),o.__once&&n.removeEventListener(a,o.__once,u)}function sa(n,a,o,l){return Gf(n,a,o,l),function(){yf(n,a,o,l)}}function RE(n,a,o,l){if(l===void 0&&(l=!0),n){var u=document.createEvent("HTMLEvents");u.initEvent(a,o,l),n.dispatchEvent(u)}}function DE(n){var a=la(n,"transitionDuration")||"",o=a.indexOf("ms")===-1?1e3:1;return parseFloat(a)*o}function LE(n,a,o){o===void 0&&(o=5);var l=!1,u=setTimeout(function(){l||RE(n,"transitionend",!0)},a+o),d=sa(n,"transitionend",function(){l=!0},{once:!0});return function(){clearTimeout(u),d()}}function uy(n,a,o,l){o==null&&(o=DE(n)||0);var u=LE(n,o,l),d=sa(n,"transitionend",a);return function(){u(),d()}}function Yv(n,a){const o=la(n,a)||"",l=o.indexOf("ms")===-1?1e3:1;return parseFloat(o)*l}function Ff(n,a){const o=Yv(n,"transitionDuration"),l=Yv(n,"transitionDelay"),u=uy(n,d=>{d.target===n&&(u(),a(d))},o+l)}function Zs(...n){return n.filter(a=>a!=null).reduce((a,o)=>{if(typeof o!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return a===null?o:function(...u){a.apply(this,u),o.apply(this,u)}},null)}function dy(n){n.offsetHeight}const Xv=n=>!n||typeof n=="function"?n:a=>{n.current=a};function ME(n,a){const o=Xv(n),l=Xv(a);return u=>{o&&o(u),l&&l(u)}}function Uo(n,a){return m.useMemo(()=>ME(n,a),[n,a])}function Xl(n){return n&&"setState"in n?gr.findDOMNode(n):n??null}const pc=Fe.forwardRef(({onEnter:n,onEntering:a,onEntered:o,onExit:l,onExiting:u,onExited:d,addEndListener:p,children:g,childRef:h,...v},b)=>{const x=m.useRef(null),j=Uo(x,h),N=z=>{j(Xl(z))},C=z=>_=>{z&&x.current&&z(x.current,_)},O=m.useCallback(C(n),[n]),S=m.useCallback(C(a),[a]),k=m.useCallback(C(o),[o]),E=m.useCallback(C(l),[l]),T=m.useCallback(C(u),[u]),L=m.useCallback(C(d),[d]),B=m.useCallback(C(p),[p]);return s.jsx(ha,{ref:b,...v,onEnter:O,onEntered:k,onEntering:S,onExit:E,onExited:L,onExiting:T,addEndListener:B,nodeRef:x,children:typeof g=="function"?(z,_)=>g(z,{..._,ref:N}):Fe.cloneElement(g,{ref:N})})});pc.displayName="TransitionWrapper";const _E={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function zE(n,a){const o=`offset${n[0].toUpperCase()}${n.slice(1)}`,l=a[o],u=_E[n];return l+parseInt(la(a,u[0]),10)+parseInt(la(a,u[1]),10)}const BE={[Ja]:"collapse",[Eo]:"collapsing",[mn]:"collapsing",[oa]:"collapse show"},fy=Fe.forwardRef(({onEnter:n,onEntering:a,onEntered:o,onExit:l,onExiting:u,className:d,children:p,dimension:g="height",in:h=!1,timeout:v=300,mountOnEnter:b=!1,unmountOnExit:x=!1,appear:j=!1,getDimensionValue:N=zE,...C},O)=>{const S=typeof g=="function"?g():g,k=m.useMemo(()=>Zs(z=>{z.style[S]="0"},n),[S,n]),E=m.useMemo(()=>Zs(z=>{const _=`scroll${S[0].toUpperCase()}${S.slice(1)}`;z.style[S]=`${z[_]}px`},a),[S,a]),T=m.useMemo(()=>Zs(z=>{z.style[S]=null},o),[S,o]),L=m.useMemo(()=>Zs(z=>{z.style[S]=`${N(S,z)}px`,dy(z)},l),[l,N,S]),B=m.useMemo(()=>Zs(z=>{z.style[S]=null},u),[S,u]);return s.jsx(pc,{ref:O,addEndListener:Ff,...C,"aria-expanded":C.role?h:null,onEnter:k,onEntering:E,onEntered:T,onExit:L,onExiting:B,childRef:Nr(p),in:h,timeout:v,mountOnEnter:b,unmountOnExit:x,appear:j,children:(z,_)=>Fe.cloneElement(p,{..._,className:ce(d,p.props.className,BE[z],S==="width"&&"collapse-horizontal")})})});fy.displayName="Collapse";function UE(n){const a=m.useRef(n);return m.useEffect(()=>{a.current=n},[n]),a}function da(n){const a=UE(n);return m.useCallback(function(...o){return a.current&&a.current(...o)},[a])}const hc=(n=>m.forwardRef((a,o)=>s.jsx("div",{...a,ref:o,className:ce(a.className,n)})));function xf(){return m.useState(null)}function PE(n){const a=m.useRef(n);return m.useEffect(()=>{a.current=n},[n]),a}function gt(n){const a=PE(n);return m.useCallback(function(...o){return a.current&&a.current(...o)},[a])}function IE(n,a,o,l=!1){const u=gt(o);m.useEffect(()=>{const d=typeof n=="function"?n():n;return d.addEventListener(a,u,l),()=>d.removeEventListener(a,u,l)},[n])}function my(){const n=m.useRef(!0),a=m.useRef(()=>n.current);return m.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),a.current}function py(n){const a=m.useRef(null);return m.useEffect(()=>{a.current=n}),a.current}const $E=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",HE=typeof document<"u",Zv=HE||$E?m.useLayoutEffect:m.useEffect,qE=["as","disabled"];function JE(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function GE(n){return!n||n.trim()==="#"}function Vf({tagName:n,disabled:a,href:o,target:l,rel:u,role:d,onClick:p,tabIndex:g=0,type:h}){n||(o!=null||l!=null||u!=null?n="a":n="button");const v={tagName:n};if(n==="button")return[{type:h||"button",disabled:a},v];const b=j=>{if((a||n==="a"&&GE(o))&&j.preventDefault(),a){j.stopPropagation();return}p?.(j)},x=j=>{j.key===" "&&(j.preventDefault(),b(j))};return n==="a"&&(o||(o="#"),a&&(o=void 0)),[{role:d??"button",disabled:void 0,tabIndex:a?void 0:g,href:o,target:n==="a"?l:void 0,"aria-disabled":a||void 0,rel:n==="a"?u:void 0,onClick:b,onKeyDown:x},v]}const Yf=m.forwardRef((n,a)=>{let{as:o,disabled:l}=n,u=JE(n,qE);const[d,{tagName:p}]=Vf(Object.assign({tagName:o,disabled:l},u));return s.jsx(p,Object.assign({},u,d,{ref:a}))});Yf.displayName="Button";const FE=["onKeyDown"];function VE(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function YE(n){return!n||n.trim()==="#"}const Xf=m.forwardRef((n,a)=>{let{onKeyDown:o}=n,l=VE(n,FE);const[u]=Vf(Object.assign({tagName:"a"},l)),d=gt(p=>{u.onKeyDown(p),o?.(p)});return YE(l.href)||l.role==="button"?s.jsx("a",Object.assign({ref:a},l,u,{onKeyDown:d})):s.jsx("a",Object.assign({ref:a},l,{onKeyDown:o}))});Xf.displayName="Anchor";const XE={[mn]:"show",[oa]:"show"},fa=m.forwardRef(({className:n,children:a,transitionClasses:o={},onEnter:l,...u},d)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...u},g=m.useCallback((h,v)=>{dy(h),l?.(h,v)},[l]);return s.jsx(pc,{ref:d,addEndListener:Ff,...p,onEnter:g,childRef:Nr(a),children:(h,v)=>m.cloneElement(a,{...v,className:ce("fade",n,a.props.className,XE[h],o[h])})})});fa.displayName="Fade";const ZE={"aria-label":_e.string,onClick:_e.func,variant:_e.oneOf(["white"])},gc=m.forwardRef(({className:n,variant:a,"aria-label":o="Close",...l},u)=>s.jsx("button",{ref:u,type:"button",className:ce("btn-close",a&&`btn-close-${a}`,n),"aria-label":o,...l}));gc.displayName="CloseButton";gc.propTypes=ZE;const xo=m.forwardRef(({bsPrefix:n,bg:a="primary",pill:o=!1,text:l,className:u,as:d="span",...p},g)=>{const h=de(n,"badge");return s.jsx(d,{ref:g,...p,className:ce(u,h,o&&"rounded-pill",l&&`text-${l}`,a&&`bg-${a}`)})});xo.displayName="Badge";const Oe=m.forwardRef(({as:n,bsPrefix:a,variant:o="primary",size:l,active:u=!1,disabled:d=!1,className:p,...g},h)=>{const v=de(a,"btn"),[b,{tagName:x}]=Vf({tagName:n,disabled:d,...g}),j=x;return s.jsx(j,{...b,...g,ref:h,disabled:d,className:ce(p,v,u&&"active",o&&`${v}-${o}`,l&&`${v}-${l}`,g.href&&d&&"disabled")})});Oe.displayName="Button";const Zf=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=de(a,"card-body"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Zf.displayName="CardBody";const hy=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=de(a,"card-footer"),s.jsx(o,{ref:u,className:ce(n,a),...l})));hy.displayName="CardFooter";const Kf=m.createContext(null);Kf.displayName="CardHeaderContext";const gy=m.forwardRef(({bsPrefix:n,className:a,as:o="div",...l},u)=>{const d=de(n,"card-header"),p=m.useMemo(()=>({cardHeaderBsPrefix:d}),[d]);return s.jsx(Kf.Provider,{value:p,children:s.jsx(o,{ref:u,...l,className:ce(a,d)})})});gy.displayName="CardHeader";const vy=m.forwardRef(({bsPrefix:n,className:a,variant:o,as:l="img",...u},d)=>{const p=de(n,"card-img");return s.jsx(l,{ref:d,className:ce(o?`${p}-${o}`:p,a),...u})});vy.displayName="CardImg";const by=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=de(a,"card-img-overlay"),s.jsx(o,{ref:u,className:ce(n,a),...l})));by.displayName="CardImgOverlay";const yy=m.forwardRef(({className:n,bsPrefix:a,as:o="a",...l},u)=>(a=de(a,"card-link"),s.jsx(o,{ref:u,className:ce(n,a),...l})));yy.displayName="CardLink";const KE=hc("h6"),xy=m.forwardRef(({className:n,bsPrefix:a,as:o=KE,...l},u)=>(a=de(a,"card-subtitle"),s.jsx(o,{ref:u,className:ce(n,a),...l})));xy.displayName="CardSubtitle";const wy=m.forwardRef(({className:n,bsPrefix:a,as:o="p",...l},u)=>(a=de(a,"card-text"),s.jsx(o,{ref:u,className:ce(n,a),...l})));wy.displayName="CardText";const QE=hc("h5"),jy=m.forwardRef(({className:n,bsPrefix:a,as:o=QE,...l},u)=>(a=de(a,"card-title"),s.jsx(o,{ref:u,className:ce(n,a),...l})));jy.displayName="CardTitle";const Sy=m.forwardRef(({bsPrefix:n,className:a,bg:o,text:l,border:u,body:d=!1,children:p,as:g="div",...h},v)=>{const b=de(n,"card");return s.jsx(g,{ref:v,...h,className:ce(a,b,o&&`bg-${o}`,l&&`text-${l}`,u&&`border-${u}`),children:d?s.jsx(Zf,{children:p}):p})});Sy.displayName="Card";const wo=Object.assign(Sy,{Img:vy,Title:jy,Subtitle:xy,Body:Zf,Link:yy,Text:wy,Header:gy,Footer:hy,ImgOverlay:by});function WE(){const n=m.useRef(!0),a=m.useRef(()=>n.current);return m.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),a.current}function e2(n){const a=m.useRef(n);return a.current=n,a}function Ny(n){const a=e2(n);m.useEffect(()=>()=>a.current(),[])}const wf=2**31-1;function Ey(n,a,o){const l=o-Date.now();n.current=l<=wf?setTimeout(a,l):setTimeout(()=>Ey(n,a,o),wf)}function Cy(){const n=WE(),a=m.useRef();return Ny(()=>clearTimeout(a.current)),m.useMemo(()=>{const o=()=>clearTimeout(a.current);function l(u,d=0){n()&&(o(),d<=wf?a.current=setTimeout(u,d):Ey(a,u,Date.now()+d))}return{set:l,clear:o,handleRef:a}},[])}function Kv(n,a){let o=0;return m.Children.map(n,l=>m.isValidElement(l)?a(l,o++):l)}function t2(n,a){let o=0;m.Children.forEach(n,l=>{m.isValidElement(l)&&a(l,o++)})}function n2(n,a){return m.Children.toArray(n).some(o=>m.isValidElement(o)&&o.type===a)}function a2({as:n,bsPrefix:a,className:o,...l}){a=de(a,"col");const u=sy(),d=iy(),p=[],g=[];return u.forEach(h=>{const v=l[h];delete l[h];let b,x,j;typeof v=="object"&&v!=null?{span:b,offset:x,order:j}=v:b=v;const N=h!==d?`-${h}`:"";b&&p.push(b===!0?`${a}${N}`:`${a}${N}-${b}`),j!=null&&g.push(`order${N}-${j}`),x!=null&&g.push(`offset${N}-${x}`)}),[{...l,className:ce(o,...p,...g)},{as:n,bsPrefix:a,spans:p}]}const Cn=m.forwardRef((n,a)=>{const[{className:o,...l},{as:u="div",bsPrefix:d,spans:p}]=a2(n);return s.jsx(u,{...l,ref:a,className:ce(o,!p.length&&d)})});Cn.displayName="Col";const Po=m.forwardRef(({bsPrefix:n,fluid:a=!1,as:o="div",className:l,...u},d)=>{const p=de(n,"container"),g=typeof a=="string"?`-${a}`:"-fluid";return s.jsx(o,{ref:d,...u,className:ce(l,a?`${p}${g}`:p)})});Po.displayName="Container";var r2=Function.prototype.bind.call(Function.prototype.call,[].slice);function ra(n,a){return r2(n.querySelectorAll(a))}function Ay(n,a,o){const l=m.useRef(n!==void 0),[u,d]=m.useState(a),p=n!==void 0,g=l.current;return l.current=p,!p&&g&&u!==a&&d(a),[p?n:u,m.useCallback((...h)=>{const[v,...b]=h;let x=o?.(v,...b);return d(v),x},[o])]}function Oy(){const[,n]=m.useReducer(a=>a+1,0);return n}const vc=m.createContext(null);var Qv=Object.prototype.hasOwnProperty;function Wv(n,a,o){for(o of n.keys())if(ei(o,a))return o}function ei(n,a){var o,l,u;if(n===a)return!0;if(n&&a&&(o=n.constructor)===a.constructor){if(o===Date)return n.getTime()===a.getTime();if(o===RegExp)return n.toString()===a.toString();if(o===Array){if((l=n.length)===a.length)for(;l--&&ei(n[l],a[l]););return l===-1}if(o===Set){if(n.size!==a.size)return!1;for(l of n)if(u=l,u&&typeof u=="object"&&(u=Wv(a,u),!u)||!a.has(u))return!1;return!0}if(o===Map){if(n.size!==a.size)return!1;for(l of n)if(u=l[0],u&&typeof u=="object"&&(u=Wv(a,u),!u)||!ei(l[1],a.get(u)))return!1;return!0}if(o===ArrayBuffer)n=new Uint8Array(n),a=new Uint8Array(a);else if(o===DataView){if((l=n.byteLength)===a.byteLength)for(;l--&&n.getInt8(l)===a.getInt8(l););return l===-1}if(ArrayBuffer.isView(n)){if((l=n.byteLength)===a.byteLength)for(;l--&&n[l]===a[l];);return l===-1}if(!o||typeof n=="object"){l=0;for(o in n)if(Qv.call(n,o)&&++l&&!Qv.call(a,o)||!(o in a)||!ei(n[o],a[o]))return!1;return Object.keys(a).length===l}}return n!==n&&a!==a}function o2(n){const a=my();return[n[0],m.useCallback(o=>{if(a())return n[1](o)},[a,n[1]])]}var Lt="top",vn="bottom",bn="right",Mt="left",Qf="auto",di=[Lt,vn,bn,Mt],Co="start",ri="end",s2="clippingParents",ky="viewport",Ks="popper",i2="reference",eb=di.reduce(function(n,a){return n.concat([a+"-"+Co,a+"-"+ri])},[]),Ty=[].concat(di,[Qf]).reduce(function(n,a){return n.concat([a,a+"-"+Co,a+"-"+ri])},[]),l2="beforeRead",c2="read",u2="afterRead",d2="beforeMain",f2="main",m2="afterMain",p2="beforeWrite",h2="write",g2="afterWrite",v2=[l2,c2,u2,d2,f2,m2,p2,h2,g2];function _n(n){return n.split("-")[0]}function Vt(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var a=n.ownerDocument;return a&&a.defaultView||window}return n}function yr(n){var a=Vt(n).Element;return n instanceof a||n instanceof Element}function zn(n){var a=Vt(n).HTMLElement;return n instanceof a||n instanceof HTMLElement}function Wf(n){if(typeof ShadowRoot>"u")return!1;var a=Vt(n).ShadowRoot;return n instanceof a||n instanceof ShadowRoot}var vr=Math.max,Zl=Math.min,Ao=Math.round;function jf(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function Ry(){return!/^((?!chrome|android).)*safari/i.test(jf())}function Oo(n,a,o){a===void 0&&(a=!1),o===void 0&&(o=!1);var l=n.getBoundingClientRect(),u=1,d=1;a&&zn(n)&&(u=n.offsetWidth>0&&Ao(l.width)/n.offsetWidth||1,d=n.offsetHeight>0&&Ao(l.height)/n.offsetHeight||1);var p=yr(n)?Vt(n):window,g=p.visualViewport,h=!Ry()&&o,v=(l.left+(h&&g?g.offsetLeft:0))/u,b=(l.top+(h&&g?g.offsetTop:0))/d,x=l.width/u,j=l.height/d;return{width:x,height:j,top:b,right:v+x,bottom:b+j,left:v,x:v,y:b}}function em(n){var a=Oo(n),o=n.offsetWidth,l=n.offsetHeight;return Math.abs(a.width-o)<=1&&(o=a.width),Math.abs(a.height-l)<=1&&(l=a.height),{x:n.offsetLeft,y:n.offsetTop,width:o,height:l}}function Dy(n,a){var o=a.getRootNode&&a.getRootNode();if(n.contains(a))return!0;if(o&&Wf(o)){var l=a;do{if(l&&n.isSameNode(l))return!0;l=l.parentNode||l.host}while(l)}return!1}function Va(n){return n?(n.nodeName||"").toLowerCase():null}function ma(n){return Vt(n).getComputedStyle(n)}function b2(n){return["table","td","th"].indexOf(Va(n))>=0}function Ya(n){return((yr(n)?n.ownerDocument:n.document)||window.document).documentElement}function bc(n){return Va(n)==="html"?n:n.assignedSlot||n.parentNode||(Wf(n)?n.host:null)||Ya(n)}function tb(n){return!zn(n)||ma(n).position==="fixed"?null:n.offsetParent}function y2(n){var a=/firefox/i.test(jf()),o=/Trident/i.test(jf());if(o&&zn(n)){var l=ma(n);if(l.position==="fixed")return null}var u=bc(n);for(Wf(u)&&(u=u.host);zn(u)&&["html","body"].indexOf(Va(u))<0;){var d=ma(u);if(d.transform!=="none"||d.perspective!=="none"||d.contain==="paint"||["transform","perspective"].indexOf(d.willChange)!==-1||a&&d.willChange==="filter"||a&&d.filter&&d.filter!=="none")return u;u=u.parentNode}return null}function fi(n){for(var a=Vt(n),o=tb(n);o&&b2(o)&&ma(o).position==="static";)o=tb(o);return o&&(Va(o)==="html"||Va(o)==="body"&&ma(o).position==="static")?a:o||y2(n)||a}function tm(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function ti(n,a,o){return vr(n,Zl(a,o))}function x2(n,a,o){var l=ti(n,a,o);return l>o?o:l}function Ly(){return{top:0,right:0,bottom:0,left:0}}function My(n){return Object.assign({},Ly(),n)}function _y(n,a){return a.reduce(function(o,l){return o[l]=n,o},{})}var w2=function(a,o){return a=typeof a=="function"?a(Object.assign({},o.rects,{placement:o.placement})):a,My(typeof a!="number"?a:_y(a,di))};function j2(n){var a,o=n.state,l=n.name,u=n.options,d=o.elements.arrow,p=o.modifiersData.popperOffsets,g=_n(o.placement),h=tm(g),v=[Mt,bn].indexOf(g)>=0,b=v?"height":"width";if(!(!d||!p)){var x=w2(u.padding,o),j=em(d),N=h==="y"?Lt:Mt,C=h==="y"?vn:bn,O=o.rects.reference[b]+o.rects.reference[h]-p[h]-o.rects.popper[b],S=p[h]-o.rects.reference[h],k=fi(d),E=k?h==="y"?k.clientHeight||0:k.clientWidth||0:0,T=O/2-S/2,L=x[N],B=E-j[b]-x[C],z=E/2-j[b]/2+T,_=ti(L,z,B),U=h;o.modifiersData[l]=(a={},a[U]=_,a.centerOffset=_-z,a)}}function S2(n){var a=n.state,o=n.options,l=o.element,u=l===void 0?"[data-popper-arrow]":l;u!=null&&(typeof u=="string"&&(u=a.elements.popper.querySelector(u),!u)||Dy(a.elements.popper,u)&&(a.elements.arrow=u))}const N2={name:"arrow",enabled:!0,phase:"main",fn:j2,effect:S2,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ko(n){return n.split("-")[1]}var E2={top:"auto",right:"auto",bottom:"auto",left:"auto"};function C2(n,a){var o=n.x,l=n.y,u=a.devicePixelRatio||1;return{x:Ao(o*u)/u||0,y:Ao(l*u)/u||0}}function nb(n){var a,o=n.popper,l=n.popperRect,u=n.placement,d=n.variation,p=n.offsets,g=n.position,h=n.gpuAcceleration,v=n.adaptive,b=n.roundOffsets,x=n.isFixed,j=p.x,N=j===void 0?0:j,C=p.y,O=C===void 0?0:C,S=typeof b=="function"?b({x:N,y:O}):{x:N,y:O};N=S.x,O=S.y;var k=p.hasOwnProperty("x"),E=p.hasOwnProperty("y"),T=Mt,L=Lt,B=window;if(v){var z=fi(o),_="clientHeight",U="clientWidth";if(z===Vt(o)&&(z=Ya(o),ma(z).position!=="static"&&g==="absolute"&&(_="scrollHeight",U="scrollWidth")),z=z,u===Lt||(u===Mt||u===bn)&&d===ri){L=vn;var Y=x&&z===B&&B.visualViewport?B.visualViewport.height:z[_];O-=Y-l.height,O*=h?1:-1}if(u===Mt||(u===Lt||u===vn)&&d===ri){T=bn;var W=x&&z===B&&B.visualViewport?B.visualViewport.width:z[U];N-=W-l.width,N*=h?1:-1}}var ne=Object.assign({position:g},v&&E2),le=b===!0?C2({x:N,y:O},Vt(o)):{x:N,y:O};if(N=le.x,O=le.y,h){var ie;return Object.assign({},ne,(ie={},ie[L]=E?"0":"",ie[T]=k?"0":"",ie.transform=(B.devicePixelRatio||1)<=1?"translate("+N+"px, "+O+"px)":"translate3d("+N+"px, "+O+"px, 0)",ie))}return Object.assign({},ne,(a={},a[L]=E?O+"px":"",a[T]=k?N+"px":"",a.transform="",a))}function A2(n){var a=n.state,o=n.options,l=o.gpuAcceleration,u=l===void 0?!0:l,d=o.adaptive,p=d===void 0?!0:d,g=o.roundOffsets,h=g===void 0?!0:g,v={placement:_n(a.placement),variation:ko(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:u,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,nb(Object.assign({},v,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:p,roundOffsets:h})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,nb(Object.assign({},v,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})}const O2={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:A2,data:{}};var Pl={passive:!0};function k2(n){var a=n.state,o=n.instance,l=n.options,u=l.scroll,d=u===void 0?!0:u,p=l.resize,g=p===void 0?!0:p,h=Vt(a.elements.popper),v=[].concat(a.scrollParents.reference,a.scrollParents.popper);return d&&v.forEach(function(b){b.addEventListener("scroll",o.update,Pl)}),g&&h.addEventListener("resize",o.update,Pl),function(){d&&v.forEach(function(b){b.removeEventListener("scroll",o.update,Pl)}),g&&h.removeEventListener("resize",o.update,Pl)}}const T2={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:k2,data:{}};var R2={left:"right",right:"left",bottom:"top",top:"bottom"};function Fl(n){return n.replace(/left|right|bottom|top/g,function(a){return R2[a]})}var D2={start:"end",end:"start"};function ab(n){return n.replace(/start|end/g,function(a){return D2[a]})}function nm(n){var a=Vt(n),o=a.pageXOffset,l=a.pageYOffset;return{scrollLeft:o,scrollTop:l}}function am(n){return Oo(Ya(n)).left+nm(n).scrollLeft}function L2(n,a){var o=Vt(n),l=Ya(n),u=o.visualViewport,d=l.clientWidth,p=l.clientHeight,g=0,h=0;if(u){d=u.width,p=u.height;var v=Ry();(v||!v&&a==="fixed")&&(g=u.offsetLeft,h=u.offsetTop)}return{width:d,height:p,x:g+am(n),y:h}}function M2(n){var a,o=Ya(n),l=nm(n),u=(a=n.ownerDocument)==null?void 0:a.body,d=vr(o.scrollWidth,o.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),p=vr(o.scrollHeight,o.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0),g=-l.scrollLeft+am(n),h=-l.scrollTop;return ma(u||o).direction==="rtl"&&(g+=vr(o.clientWidth,u?u.clientWidth:0)-d),{width:d,height:p,x:g,y:h}}function rm(n){var a=ma(n),o=a.overflow,l=a.overflowX,u=a.overflowY;return/auto|scroll|overlay|hidden/.test(o+u+l)}function zy(n){return["html","body","#document"].indexOf(Va(n))>=0?n.ownerDocument.body:zn(n)&&rm(n)?n:zy(bc(n))}function ni(n,a){var o;a===void 0&&(a=[]);var l=zy(n),u=l===((o=n.ownerDocument)==null?void 0:o.body),d=Vt(l),p=u?[d].concat(d.visualViewport||[],rm(l)?l:[]):l,g=a.concat(p);return u?g:g.concat(ni(bc(p)))}function Sf(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function _2(n,a){var o=Oo(n,!1,a==="fixed");return o.top=o.top+n.clientTop,o.left=o.left+n.clientLeft,o.bottom=o.top+n.clientHeight,o.right=o.left+n.clientWidth,o.width=n.clientWidth,o.height=n.clientHeight,o.x=o.left,o.y=o.top,o}function rb(n,a,o){return a===ky?Sf(L2(n,o)):yr(a)?_2(a,o):Sf(M2(Ya(n)))}function z2(n){var a=ni(bc(n)),o=["absolute","fixed"].indexOf(ma(n).position)>=0,l=o&&zn(n)?fi(n):n;return yr(l)?a.filter(function(u){return yr(u)&&Dy(u,l)&&Va(u)!=="body"}):[]}function B2(n,a,o,l){var u=a==="clippingParents"?z2(n):[].concat(a),d=[].concat(u,[o]),p=d[0],g=d.reduce(function(h,v){var b=rb(n,v,l);return h.top=vr(b.top,h.top),h.right=Zl(b.right,h.right),h.bottom=Zl(b.bottom,h.bottom),h.left=vr(b.left,h.left),h},rb(n,p,l));return g.width=g.right-g.left,g.height=g.bottom-g.top,g.x=g.left,g.y=g.top,g}function By(n){var a=n.reference,o=n.element,l=n.placement,u=l?_n(l):null,d=l?ko(l):null,p=a.x+a.width/2-o.width/2,g=a.y+a.height/2-o.height/2,h;switch(u){case Lt:h={x:p,y:a.y-o.height};break;case vn:h={x:p,y:a.y+a.height};break;case bn:h={x:a.x+a.width,y:g};break;case Mt:h={x:a.x-o.width,y:g};break;default:h={x:a.x,y:a.y}}var v=u?tm(u):null;if(v!=null){var b=v==="y"?"height":"width";switch(d){case Co:h[v]=h[v]-(a[b]/2-o[b]/2);break;case ri:h[v]=h[v]+(a[b]/2-o[b]/2);break}}return h}function oi(n,a){a===void 0&&(a={});var o=a,l=o.placement,u=l===void 0?n.placement:l,d=o.strategy,p=d===void 0?n.strategy:d,g=o.boundary,h=g===void 0?s2:g,v=o.rootBoundary,b=v===void 0?ky:v,x=o.elementContext,j=x===void 0?Ks:x,N=o.altBoundary,C=N===void 0?!1:N,O=o.padding,S=O===void 0?0:O,k=My(typeof S!="number"?S:_y(S,di)),E=j===Ks?i2:Ks,T=n.rects.popper,L=n.elements[C?E:j],B=B2(yr(L)?L:L.contextElement||Ya(n.elements.popper),h,b,p),z=Oo(n.elements.reference),_=By({reference:z,element:T,placement:u}),U=Sf(Object.assign({},T,_)),Y=j===Ks?U:z,W={top:B.top-Y.top+k.top,bottom:Y.bottom-B.bottom+k.bottom,left:B.left-Y.left+k.left,right:Y.right-B.right+k.right},ne=n.modifiersData.offset;if(j===Ks&&ne){var le=ne[u];Object.keys(W).forEach(function(ie){var ee=[bn,vn].indexOf(ie)>=0?1:-1,P=[Lt,vn].indexOf(ie)>=0?"y":"x";W[ie]+=le[P]*ee})}return W}function U2(n,a){a===void 0&&(a={});var o=a,l=o.placement,u=o.boundary,d=o.rootBoundary,p=o.padding,g=o.flipVariations,h=o.allowedAutoPlacements,v=h===void 0?Ty:h,b=ko(l),x=b?g?eb:eb.filter(function(C){return ko(C)===b}):di,j=x.filter(function(C){return v.indexOf(C)>=0});j.length===0&&(j=x);var N=j.reduce(function(C,O){return C[O]=oi(n,{placement:O,boundary:u,rootBoundary:d,padding:p})[_n(O)],C},{});return Object.keys(N).sort(function(C,O){return N[C]-N[O]})}function P2(n){if(_n(n)===Qf)return[];var a=Fl(n);return[ab(n),a,ab(a)]}function I2(n){var a=n.state,o=n.options,l=n.name;if(!a.modifiersData[l]._skip){for(var u=o.mainAxis,d=u===void 0?!0:u,p=o.altAxis,g=p===void 0?!0:p,h=o.fallbackPlacements,v=o.padding,b=o.boundary,x=o.rootBoundary,j=o.altBoundary,N=o.flipVariations,C=N===void 0?!0:N,O=o.allowedAutoPlacements,S=a.options.placement,k=_n(S),E=k===S,T=h||(E||!C?[Fl(S)]:P2(S)),L=[S].concat(T).reduce(function(H,ue){return H.concat(_n(ue)===Qf?U2(a,{placement:ue,boundary:b,rootBoundary:x,padding:v,flipVariations:C,allowedAutoPlacements:O}):ue)},[]),B=a.rects.reference,z=a.rects.popper,_=new Map,U=!0,Y=L[0],W=0;W<L.length;W++){var ne=L[W],le=_n(ne),ie=ko(ne)===Co,ee=[Lt,vn].indexOf(le)>=0,P=ee?"width":"height",D=oi(a,{placement:ne,boundary:b,rootBoundary:x,altBoundary:j,padding:v}),K=ee?ie?bn:Mt:ie?vn:Lt;B[P]>z[P]&&(K=Fl(K));var oe=Fl(K),V=[];if(d&&V.push(D[le]<=0),g&&V.push(D[K]<=0,D[oe]<=0),V.every(function(H){return H})){Y=ne,U=!1;break}_.set(ne,V)}if(U)for(var A=C?3:1,$=function(ue){var fe=L.find(function(He){var we=_.get(He);if(we)return we.slice(0,ue).every(function(Ie){return Ie})});if(fe)return Y=fe,"break"},re=A;re>0;re--){var ae=$(re);if(ae==="break")break}a.placement!==Y&&(a.modifiersData[l]._skip=!0,a.placement=Y,a.reset=!0)}}const $2={name:"flip",enabled:!0,phase:"main",fn:I2,requiresIfExists:["offset"],data:{_skip:!1}};function ob(n,a,o){return o===void 0&&(o={x:0,y:0}),{top:n.top-a.height-o.y,right:n.right-a.width+o.x,bottom:n.bottom-a.height+o.y,left:n.left-a.width-o.x}}function sb(n){return[Lt,bn,vn,Mt].some(function(a){return n[a]>=0})}function H2(n){var a=n.state,o=n.name,l=a.rects.reference,u=a.rects.popper,d=a.modifiersData.preventOverflow,p=oi(a,{elementContext:"reference"}),g=oi(a,{altBoundary:!0}),h=ob(p,l),v=ob(g,u,d),b=sb(h),x=sb(v);a.modifiersData[o]={referenceClippingOffsets:h,popperEscapeOffsets:v,isReferenceHidden:b,hasPopperEscaped:x},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":b,"data-popper-escaped":x})}const q2={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:H2};function J2(n,a,o){var l=_n(n),u=[Mt,Lt].indexOf(l)>=0?-1:1,d=typeof o=="function"?o(Object.assign({},a,{placement:n})):o,p=d[0],g=d[1];return p=p||0,g=(g||0)*u,[Mt,bn].indexOf(l)>=0?{x:g,y:p}:{x:p,y:g}}function G2(n){var a=n.state,o=n.options,l=n.name,u=o.offset,d=u===void 0?[0,0]:u,p=Ty.reduce(function(b,x){return b[x]=J2(x,a.rects,d),b},{}),g=p[a.placement],h=g.x,v=g.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=h,a.modifiersData.popperOffsets.y+=v),a.modifiersData[l]=p}const F2={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:G2};function V2(n){var a=n.state,o=n.name;a.modifiersData[o]=By({reference:a.rects.reference,element:a.rects.popper,placement:a.placement})}const Y2={name:"popperOffsets",enabled:!0,phase:"read",fn:V2,data:{}};function X2(n){return n==="x"?"y":"x"}function Z2(n){var a=n.state,o=n.options,l=n.name,u=o.mainAxis,d=u===void 0?!0:u,p=o.altAxis,g=p===void 0?!1:p,h=o.boundary,v=o.rootBoundary,b=o.altBoundary,x=o.padding,j=o.tether,N=j===void 0?!0:j,C=o.tetherOffset,O=C===void 0?0:C,S=oi(a,{boundary:h,rootBoundary:v,padding:x,altBoundary:b}),k=_n(a.placement),E=ko(a.placement),T=!E,L=tm(k),B=X2(L),z=a.modifiersData.popperOffsets,_=a.rects.reference,U=a.rects.popper,Y=typeof O=="function"?O(Object.assign({},a.rects,{placement:a.placement})):O,W=typeof Y=="number"?{mainAxis:Y,altAxis:Y}:Object.assign({mainAxis:0,altAxis:0},Y),ne=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,le={x:0,y:0};if(z){if(d){var ie,ee=L==="y"?Lt:Mt,P=L==="y"?vn:bn,D=L==="y"?"height":"width",K=z[L],oe=K+S[ee],V=K-S[P],A=N?-U[D]/2:0,$=E===Co?_[D]:U[D],re=E===Co?-U[D]:-_[D],ae=a.elements.arrow,H=N&&ae?em(ae):{width:0,height:0},ue=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:Ly(),fe=ue[ee],He=ue[P],we=ti(0,_[D],H[D]),Ie=T?_[D]/2-A-we-fe-W.mainAxis:$-we-fe-W.mainAxis,zt=T?-_[D]/2+A+we+He+W.mainAxis:re+we+He+W.mainAxis,Bt=a.elements.arrow&&fi(a.elements.arrow),Kt=Bt?L==="y"?Bt.clientTop||0:Bt.clientLeft||0:0,Qt=(ie=ne?.[L])!=null?ie:0,Wt=K+Ie-Qt-Kt,ze=K+zt-Qt,Hn=ti(N?Zl(oe,Wt):oe,K,N?vr(V,ze):V);z[L]=Hn,le[L]=Hn-K}if(g){var ot,Zo=L==="x"?Lt:Mt,Or=L==="x"?vn:bn,en=z[B],wn=B==="y"?"height":"width",kr=en+S[Zo],Xa=en-S[Or],ba=[Lt,Mt].indexOf(k)!==-1,Tr=(ot=ne?.[B])!=null?ot:0,je=ba?kr:en-_[wn]-U[wn]-Tr+W.altAxis,Ye=ba?en+_[wn]+U[wn]-Tr-W.altAxis:Xa,At=N&&ba?x2(je,en,Ye):ti(N?je:kr,en,N?Ye:Xa);z[B]=At,le[B]=At-en}a.modifiersData[l]=le}}const K2={name:"preventOverflow",enabled:!0,phase:"main",fn:Z2,requiresIfExists:["offset"]};function Q2(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function W2(n){return n===Vt(n)||!zn(n)?nm(n):Q2(n)}function eC(n){var a=n.getBoundingClientRect(),o=Ao(a.width)/n.offsetWidth||1,l=Ao(a.height)/n.offsetHeight||1;return o!==1||l!==1}function tC(n,a,o){o===void 0&&(o=!1);var l=zn(a),u=zn(a)&&eC(a),d=Ya(a),p=Oo(n,u,o),g={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(l||!l&&!o)&&((Va(a)!=="body"||rm(d))&&(g=W2(a)),zn(a)?(h=Oo(a,!0),h.x+=a.clientLeft,h.y+=a.clientTop):d&&(h.x=am(d))),{x:p.left+g.scrollLeft-h.x,y:p.top+g.scrollTop-h.y,width:p.width,height:p.height}}function nC(n){var a=new Map,o=new Set,l=[];n.forEach(function(d){a.set(d.name,d)});function u(d){o.add(d.name);var p=[].concat(d.requires||[],d.requiresIfExists||[]);p.forEach(function(g){if(!o.has(g)){var h=a.get(g);h&&u(h)}}),l.push(d)}return n.forEach(function(d){o.has(d.name)||u(d)}),l}function aC(n){var a=nC(n);return v2.reduce(function(o,l){return o.concat(a.filter(function(u){return u.phase===l}))},[])}function rC(n){var a;return function(){return a||(a=new Promise(function(o){Promise.resolve().then(function(){a=void 0,o(n())})})),a}}function oC(n){var a=n.reduce(function(o,l){var u=o[l.name];return o[l.name]=u?Object.assign({},u,l,{options:Object.assign({},u.options,l.options),data:Object.assign({},u.data,l.data)}):l,o},{});return Object.keys(a).map(function(o){return a[o]})}var ib={placement:"bottom",modifiers:[],strategy:"absolute"};function lb(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return!a.some(function(l){return!(l&&typeof l.getBoundingClientRect=="function")})}function sC(n){n===void 0&&(n={});var a=n,o=a.defaultModifiers,l=o===void 0?[]:o,u=a.defaultOptions,d=u===void 0?ib:u;return function(g,h,v){v===void 0&&(v=d);var b={placement:"bottom",orderedModifiers:[],options:Object.assign({},ib,d),modifiersData:{},elements:{reference:g,popper:h},attributes:{},styles:{}},x=[],j=!1,N={state:b,setOptions:function(k){var E=typeof k=="function"?k(b.options):k;O(),b.options=Object.assign({},d,b.options,E),b.scrollParents={reference:yr(g)?ni(g):g.contextElement?ni(g.contextElement):[],popper:ni(h)};var T=aC(oC([].concat(l,b.options.modifiers)));return b.orderedModifiers=T.filter(function(L){return L.enabled}),C(),N.update()},forceUpdate:function(){if(!j){var k=b.elements,E=k.reference,T=k.popper;if(lb(E,T)){b.rects={reference:tC(E,fi(T),b.options.strategy==="fixed"),popper:em(T)},b.reset=!1,b.placement=b.options.placement,b.orderedModifiers.forEach(function(W){return b.modifiersData[W.name]=Object.assign({},W.data)});for(var L=0;L<b.orderedModifiers.length;L++){if(b.reset===!0){b.reset=!1,L=-1;continue}var B=b.orderedModifiers[L],z=B.fn,_=B.options,U=_===void 0?{}:_,Y=B.name;typeof z=="function"&&(b=z({state:b,options:U,name:Y,instance:N})||b)}}}},update:rC(function(){return new Promise(function(S){N.forceUpdate(),S(b)})}),destroy:function(){O(),j=!0}};if(!lb(g,h))return N;N.setOptions(v).then(function(S){!j&&v.onFirstUpdate&&v.onFirstUpdate(S)});function C(){b.orderedModifiers.forEach(function(S){var k=S.name,E=S.options,T=E===void 0?{}:E,L=S.effect;if(typeof L=="function"){var B=L({state:b,name:k,instance:N,options:T}),z=function(){};x.push(B||z)}})}function O(){x.forEach(function(S){return S()}),x=[]}return N}}const iC=sC({defaultModifiers:[q2,Y2,O2,T2,F2,$2,K2,N2]}),lC=["enabled","placement","strategy","modifiers"];function cC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const uC={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},dC={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:n})=>()=>{const{reference:a,popper:o}=n.elements;if("removeAttribute"in a){const l=(a.getAttribute("aria-describedby")||"").split(",").filter(u=>u.trim()!==o.id);l.length?a.setAttribute("aria-describedby",l.join(",")):a.removeAttribute("aria-describedby")}},fn:({state:n})=>{var a;const{popper:o,reference:l}=n.elements,u=(a=o.getAttribute("role"))==null?void 0:a.toLowerCase();if(o.id&&u==="tooltip"&&"setAttribute"in l){const d=l.getAttribute("aria-describedby");if(d&&d.split(",").indexOf(o.id)!==-1)return;l.setAttribute("aria-describedby",d?`${d},${o.id}`:o.id)}}},fC=[];function Uy(n,a,o={}){let{enabled:l=!0,placement:u="bottom",strategy:d="absolute",modifiers:p=fC}=o,g=cC(o,lC);const h=m.useRef(p),v=m.useRef(),b=m.useCallback(()=>{var S;(S=v.current)==null||S.update()},[]),x=m.useCallback(()=>{var S;(S=v.current)==null||S.forceUpdate()},[]),[j,N]=o2(m.useState({placement:u,update:b,forceUpdate:x,attributes:{},styles:{popper:{},arrow:{}}})),C=m.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:S})=>{const k={},E={};Object.keys(S.elements).forEach(T=>{k[T]=S.styles[T],E[T]=S.attributes[T]}),N({state:S,styles:k,attributes:E,update:b,forceUpdate:x,placement:S.placement})}}),[b,x,N]),O=m.useMemo(()=>(ei(h.current,p)||(h.current=p),h.current),[p]);return m.useEffect(()=>{!v.current||!l||v.current.setOptions({placement:u,strategy:d,modifiers:[...O,C,uC]})},[d,u,C,l,O]),m.useEffect(()=>{if(!(!l||n==null||a==null))return v.current=iC(n,a,Object.assign({},g,{placement:u,strategy:d,modifiers:[...O,dC,C]})),()=>{v.current!=null&&(v.current.destroy(),v.current=void 0,N(S=>Object.assign({},S,{attributes:{},styles:{popper:{}}})))}},[l,n,a]),j}function si(n,a){if(n.contains)return n.contains(a);if(n.compareDocumentPosition)return n===a||!!(n.compareDocumentPosition(a)&16)}var ef,cb;function mC(){if(cb)return ef;cb=1;var n=function(){};return ef=n,ef}var pC=mC();const hC=Do(pC),ub=()=>{};function gC(n){return n.button===0}function vC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}const Vl=n=>n&&("current"in n?n.current:n),db={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function Py(n,a=ub,{disabled:o,clickTrigger:l="click"}={}){const u=m.useRef(!1),d=m.useRef(!1),p=m.useCallback(v=>{const b=Vl(n);hC(!!b,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),u.current=!b||vC(v)||!gC(v)||!!si(b,v.target)||d.current,d.current=!1},[n]),g=gt(v=>{const b=Vl(n);b&&si(b,v.target)?d.current=!0:d.current=!1}),h=gt(v=>{u.current||a(v)});m.useEffect(()=>{var v,b;if(o||n==null)return;const x=zo(Vl(n)),j=x.defaultView||window;let N=(v=j.event)!=null?v:(b=j.parent)==null?void 0:b.event,C=null;db[l]&&(C=sa(x,db[l],g,!0));const O=sa(x,l,p,!0),S=sa(x,l,E=>{if(E===N){N=void 0;return}h(E)});let k=[];return"ontouchstart"in x.documentElement&&(k=[].slice.call(x.body.children).map(E=>sa(E,"mousemove",ub))),()=>{C?.(),O(),S(),k.forEach(E=>E())}},[n,o,l,p,g,h])}function bC(n){const a={};return Array.isArray(n)?(n?.forEach(o=>{a[o.name]=o}),a):n||a}function yC(n={}){return Array.isArray(n)?n:Object.keys(n).map(a=>(n[a].name=a,n[a]))}function Iy({enabled:n,enableEvents:a,placement:o,flip:l,offset:u,fixed:d,containerPadding:p,arrowElement:g,popperConfig:h={}}){var v,b,x,j,N;const C=bC(h.modifiers);return Object.assign({},h,{placement:o,enabled:n,strategy:d?"fixed":h.strategy,modifiers:yC(Object.assign({},C,{eventListeners:{enabled:a,options:(v=C.eventListeners)==null?void 0:v.options},preventOverflow:Object.assign({},C.preventOverflow,{options:p?Object.assign({padding:p},(b=C.preventOverflow)==null?void 0:b.options):(x=C.preventOverflow)==null?void 0:x.options}),offset:{options:Object.assign({offset:u},(j=C.offset)==null?void 0:j.options)},arrow:Object.assign({},C.arrow,{enabled:!!g,options:Object.assign({},(N=C.arrow)==null?void 0:N.options,{element:g})}),flip:Object.assign({enabled:!!l},C.flip)}))})}const xC=["children","usePopper"];function wC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const jC=()=>{};function $y(n={}){const a=m.useContext(vc),[o,l]=xf(),u=m.useRef(!1),{flip:d,offset:p,rootCloseEvent:g,fixed:h=!1,placement:v,popperConfig:b={},enableEventListeners:x=!0,usePopper:j=!!a}=n,N=a?.show==null?!!n.show:a.show;N&&!u.current&&(u.current=!0);const C=z=>{a?.toggle(!1,z)},{placement:O,setMenu:S,menuElement:k,toggleElement:E}=a||{},T=Uy(E,k,Iy({placement:v||O||"bottom-start",enabled:j,enableEvents:x??N,offset:p,flip:d,fixed:h,arrowElement:o,popperConfig:b})),L=Object.assign({ref:S||jC,"aria-labelledby":E?.id},T.attributes.popper,{style:T.styles.popper}),B={show:N,placement:O,hasShown:u.current,toggle:a?.toggle,popper:j?T:null,arrowProps:j?Object.assign({ref:l},T.attributes.arrow,{style:T.styles.arrow}):{}};return Py(k,C,{clickTrigger:g,disabled:!N}),[L,B]}function Hy(n){let{children:a,usePopper:o=!0}=n,l=wC(n,xC);const[u,d]=$y(Object.assign({},l,{usePopper:o}));return s.jsx(s.Fragment,{children:a(u,d)})}Hy.displayName="DropdownMenu";const qy={prefix:String(Math.round(Math.random()*1e10)),current:0},Jy=Fe.createContext(qy),SC=Fe.createContext(!1);let tf=new WeakMap;function NC(n=!1){let a=m.useContext(Jy),o=m.useRef(null);if(o.current===null&&!n){var l,u;let d=(u=Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||u===void 0||(l=u.ReactCurrentOwner)===null||l===void 0?void 0:l.current;if(d){let p=tf.get(d);p==null?tf.set(d,{id:a.current,state:d.memoizedState}):d.memoizedState!==p.state&&(a.current=p.id,tf.delete(d))}o.current=++a.current}return o.current}function EC(n){let a=m.useContext(Jy),o=NC(!!n),l=`react-aria${a.prefix}`;return n||`${l}-${o}`}function CC(n){let a=Fe.useId(),[o]=m.useState(TC()),l=o?"react-aria":`react-aria${qy.prefix}`;return n||`${l}-${a}`}const Gy=typeof Fe.useId=="function"?CC:EC;function AC(){return!1}function OC(){return!0}function kC(n){return()=>{}}function TC(){return typeof Fe.useSyncExternalStore=="function"?Fe.useSyncExternalStore(kC,AC,OC):m.useContext(SC)}const Fy=n=>{var a;return((a=n.getAttribute("role"))==null?void 0:a.toLowerCase())==="menu"},fb=()=>{};function Vy(){const n=Gy(),{show:a=!1,toggle:o=fb,setToggle:l,menuElement:u}=m.useContext(vc)||{},d=m.useCallback(g=>{o(!a,g)},[a,o]),p={id:n,ref:l||fb,onClick:d,"aria-expanded":!!a};return u&&Fy(u)&&(p["aria-haspopup"]=!0),[p,{show:a,toggle:o}]}function Yy({children:n}){const[a,o]=Vy();return s.jsx(s.Fragment,{children:n(a,o)})}Yy.displayName="DropdownToggle";const Bn=m.createContext(null),xr=(n,a=null)=>n!=null?String(n):a||null,yc=m.createContext(null);yc.displayName="NavContext";const RC="data-rr-ui-",DC="rrUi";function Io(n){return`${RC}${n}`}function LC(n){return`${DC}${n}`}const MC=["eventKey","disabled","onClick","active","as"];function _C(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function Xy({key:n,href:a,active:o,disabled:l,onClick:u}){const d=m.useContext(Bn),p=m.useContext(yc),{activeKey:g}=p||{},h=xr(n,a),v=o==null&&n!=null?xr(g)===h:o;return[{onClick:gt(x=>{l||(u?.(x),d&&!x.isPropagationStopped()&&d(h,x))}),"aria-disabled":l||void 0,"aria-selected":v,[Io("dropdown-item")]:""},{isActive:v}]}const Zy=m.forwardRef((n,a)=>{let{eventKey:o,disabled:l,onClick:u,active:d,as:p=Yf}=n,g=_C(n,MC);const[h]=Xy({key:o,href:g.href,disabled:l,onClick:u,active:d});return s.jsx(p,Object.assign({},g,{ref:a},h))});Zy.displayName="DropdownItem";const Ky=m.createContext(Bo?window:void 0);Ky.Provider;function xc(){return m.useContext(Ky)}function mb(){const n=Oy(),a=m.useRef(null),o=m.useCallback(l=>{a.current=l,n()},[n]);return[a,o]}function mi({defaultShow:n,show:a,onSelect:o,onToggle:l,itemSelector:u=`* [${Io("dropdown-item")}]`,focusFirstItemOnShow:d,placement:p="bottom-start",children:g}){const h=xc(),[v,b]=Ay(a,n,l),[x,j]=mb(),N=x.current,[C,O]=mb(),S=C.current,k=py(v),E=m.useRef(null),T=m.useRef(!1),L=m.useContext(Bn),B=m.useCallback((ne,le,ie=le?.type)=>{b(ne,{originalEvent:le,source:ie})},[b]),z=gt((ne,le)=>{o?.(ne,le),B(!1,le,"select"),le.isPropagationStopped()||L?.(ne,le)}),_=m.useMemo(()=>({toggle:B,placement:p,show:v,menuElement:N,toggleElement:S,setMenu:j,setToggle:O}),[B,p,v,N,S,j,O]);N&&k&&!v&&(T.current=N.contains(N.ownerDocument.activeElement));const U=gt(()=>{S&&S.focus&&S.focus()}),Y=gt(()=>{const ne=E.current;let le=d;if(le==null&&(le=x.current&&Fy(x.current)?"keyboard":!1),le===!1||le==="keyboard"&&!/^key.+$/.test(ne))return;const ie=ra(x.current,u)[0];ie&&ie.focus&&ie.focus()});m.useEffect(()=>{v?Y():T.current&&(T.current=!1,U())},[v,T,U,Y]),m.useEffect(()=>{E.current=null});const W=(ne,le)=>{if(!x.current)return null;const ie=ra(x.current,u);let ee=ie.indexOf(ne)+le;return ee=Math.max(0,Math.min(ee,ie.length)),ie[ee]};return IE(m.useCallback(()=>h.document,[h]),"keydown",ne=>{var le,ie;const{key:ee}=ne,P=ne.target,D=(le=x.current)==null?void 0:le.contains(P),K=(ie=C.current)==null?void 0:ie.contains(P);if(/input|textarea/i.test(P.tagName)&&(ee===" "||ee!=="Escape"&&D||ee==="Escape"&&P.type==="search")||!D&&!K||ee==="Tab"&&(!x.current||!v))return;E.current=ne.type;const V={originalEvent:ne,source:ne.type};switch(ee){case"ArrowUp":{const A=W(P,-1);A&&A.focus&&A.focus(),ne.preventDefault();return}case"ArrowDown":if(ne.preventDefault(),!v)b(!0,V);else{const A=W(P,1);A&&A.focus&&A.focus()}return;case"Tab":Gf(P.ownerDocument,"keyup",A=>{var $;(A.key==="Tab"&&!A.target||!(($=x.current)!=null&&$.contains(A.target)))&&b(!1,V)},{once:!0});break;case"Escape":ee==="Escape"&&(ne.preventDefault(),ne.stopPropagation()),b(!1,V);break}}),s.jsx(Bn.Provider,{value:z,children:s.jsx(vc.Provider,{value:_,children:g})})}mi.displayName="Dropdown";mi.Menu=Hy;mi.Toggle=Yy;mi.Item=Zy;const om=m.createContext({});om.displayName="DropdownContext";const Qy=m.forwardRef(({className:n,bsPrefix:a,as:o="hr",role:l="separator",...u},d)=>(a=de(a,"dropdown-divider"),s.jsx(o,{ref:d,className:ce(n,a),role:l,...u})));Qy.displayName="DropdownDivider";const Wy=m.forwardRef(({className:n,bsPrefix:a,as:o="div",role:l="heading",...u},d)=>(a=de(a,"dropdown-header"),s.jsx(o,{ref:d,className:ce(n,a),role:l,...u})));Wy.displayName="DropdownHeader";const ex=m.forwardRef(({bsPrefix:n,className:a,eventKey:o,disabled:l=!1,onClick:u,active:d,as:p=Xf,...g},h)=>{const v=de(n,"dropdown-item"),[b,x]=Xy({key:o,href:g.href,disabled:l,onClick:u,active:d});return s.jsx(p,{...g,...b,ref:h,className:ce(a,v,x.isActive&&"active",l&&"disabled")})});ex.displayName="DropdownItem";const tx=m.forwardRef(({className:n,bsPrefix:a,as:o="span",...l},u)=>(a=de(a,"dropdown-item-text"),s.jsx(o,{ref:u,className:ce(n,a),...l})));tx.displayName="DropdownItemText";const zC=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",BC=typeof document<"u",sm=BC||zC?m.useLayoutEffect:m.useEffect,wc=m.createContext(null);wc.displayName="InputGroupContext";const Er=m.createContext(null);Er.displayName="NavbarContext";function nx(n,a){return n}function ax(n,a,o){const l=o?"top-end":"top-start",u=o?"top-start":"top-end",d=o?"bottom-end":"bottom-start",p=o?"bottom-start":"bottom-end",g=o?"right-start":"left-start",h=o?"right-end":"left-end",v=o?"left-start":"right-start",b=o?"left-end":"right-end";let x=n?p:d;return a==="up"?x=n?u:l:a==="end"?x=n?b:v:a==="start"?x=n?h:g:a==="down-centered"?x="bottom":a==="up-centered"&&(x="top"),x}const rx=m.forwardRef(({bsPrefix:n,className:a,align:o,rootCloseEvent:l,flip:u=!0,show:d,renderOnMount:p,as:g="div",popperConfig:h,variant:v,...b},x)=>{let j=!1;const N=m.useContext(Er),C=de(n,"dropdown-menu"),{align:O,drop:S,isRTL:k}=m.useContext(om);o=o||O;const E=m.useContext(wc),T=[];if(o)if(typeof o=="object"){const ne=Object.keys(o);if(ne.length){const le=ne[0],ie=o[le];j=ie==="start",T.push(`${C}-${le}-${ie}`)}}else o==="end"&&(j=!0);const L=ax(j,S,k),[B,{hasShown:z,popper:_,show:U,toggle:Y}]=$y({flip:u,rootCloseEvent:l,show:d,usePopper:!N&&T.length===0,offset:[0,2],popperConfig:h,placement:L});if(B.ref=Uo(nx(x),B.ref),sm(()=>{U&&_?.update()},[U]),!z&&!p&&!E)return null;typeof g!="string"&&(B.show=U,B.close=()=>Y?.(!1),B.align=o);let W=b.style;return _!=null&&_.placement&&(W={...b.style,...B.style},b["x-placement"]=_.placement),s.jsx(g,{...b,...B,style:W,...(T.length||N)&&{"data-bs-popper":"static"},className:ce(a,C,U&&"show",j&&`${C}-end`,v&&`${C}-${v}`,...T)})});rx.displayName="DropdownMenu";const ox=m.forwardRef(({bsPrefix:n,split:a,className:o,childBsPrefix:l,as:u=Oe,...d},p)=>{const g=de(n,"dropdown-toggle"),h=m.useContext(vc);l!==void 0&&(d.bsPrefix=l);const[v]=Vy();return v.ref=Uo(v.ref,nx(p)),s.jsx(u,{className:ce(o,g,a&&`${g}-split`,h?.show&&"show"),...v,...d})});ox.displayName="DropdownToggle";const sx=m.forwardRef((n,a)=>{const{bsPrefix:o,drop:l="down",show:u,className:d,align:p="start",onSelect:g,onToggle:h,focusFirstItemOnShow:v,as:b="div",navbar:x,autoClose:j=!0,...N}=fc(n,{show:"onToggle"}),C=m.useContext(wc),O=de(o,"dropdown"),S=mc(),k=_=>j===!1?_==="click":j==="inside"?_!=="rootClose":j==="outside"?_!=="select":!0,E=da((_,U)=>{var Y;!((Y=U.originalEvent)==null||(Y=Y.target)==null)&&Y.classList.contains("dropdown-toggle")&&U.source==="mousedown"||(U.originalEvent.currentTarget===document&&(U.source!=="keydown"||U.originalEvent.key==="Escape")&&(U.source="rootClose"),k(U.source)&&h?.(_,U))}),L=ax(p==="end",l,S),B=m.useMemo(()=>({align:p,drop:l,isRTL:S}),[p,l,S]),z={down:O,"down-centered":`${O}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return s.jsx(om.Provider,{value:B,children:s.jsx(mi,{placement:L,show:u,onSelect:g,onToggle:E,focusFirstItemOnShow:v,itemSelector:`.${O}-item:not(.disabled):not(:disabled)`,children:C?N.children:s.jsx(b,{...N,ref:a,className:ce(d,u&&"show",z[l])})})})});sx.displayName="Dropdown";const pn=Object.assign(sx,{Toggle:ox,Menu:rx,Item:ex,ItemText:tx,Divider:Qy,Header:Wy}),UC={type:_e.string,tooltip:_e.bool,as:_e.elementType},jc=m.forwardRef(({as:n="div",className:a,type:o="valid",tooltip:l=!1,...u},d)=>s.jsx(n,{...u,ref:d,className:ce(a,`${o}-${l?"tooltip":"feedback"}`)}));jc.displayName="Feedback";jc.propTypes=UC;const pa=m.createContext({}),pi=m.forwardRef(({id:n,bsPrefix:a,className:o,type:l="checkbox",isValid:u=!1,isInvalid:d=!1,as:p="input",...g},h)=>{const{controlId:v}=m.useContext(pa);return a=de(a,"form-check-input"),s.jsx(p,{...g,ref:h,type:l,id:n||v,className:ce(o,a,u&&"is-valid",d&&"is-invalid")})});pi.displayName="FormCheckInput";const Kl=m.forwardRef(({bsPrefix:n,className:a,htmlFor:o,...l},u)=>{const{controlId:d}=m.useContext(pa);return n=de(n,"form-check-label"),s.jsx("label",{...l,ref:u,htmlFor:o||d,className:ce(a,n)})});Kl.displayName="FormCheckLabel";const ix=m.forwardRef(({id:n,bsPrefix:a,bsSwitchPrefix:o,inline:l=!1,reverse:u=!1,disabled:d=!1,isValid:p=!1,isInvalid:g=!1,feedbackTooltip:h=!1,feedback:v,feedbackType:b,className:x,style:j,title:N="",type:C="checkbox",label:O,children:S,as:k="input",...E},T)=>{a=de(a,"form-check"),o=de(o,"form-switch");const{controlId:L}=m.useContext(pa),B=m.useMemo(()=>({controlId:n||L}),[L,n]),z=!S&&O!=null&&O!==!1||n2(S,Kl),_=s.jsx(pi,{...E,type:C==="switch"?"checkbox":C,ref:T,isValid:p,isInvalid:g,disabled:d,as:k});return s.jsx(pa.Provider,{value:B,children:s.jsx("div",{style:j,className:ce(x,z&&a,l&&`${a}-inline`,u&&`${a}-reverse`,C==="switch"&&o),children:S||s.jsxs(s.Fragment,{children:[_,z&&s.jsx(Kl,{title:N,children:O}),v&&s.jsx(jc,{type:b,tooltip:h,children:v})]})})})});ix.displayName="FormCheck";const Ql=Object.assign(ix,{Input:pi,Label:Kl}),lx=m.forwardRef(({bsPrefix:n,type:a,size:o,htmlSize:l,id:u,className:d,isValid:p=!1,isInvalid:g=!1,plaintext:h,readOnly:v,as:b="input",...x},j)=>{const{controlId:N}=m.useContext(pa);return n=de(n,"form-control"),s.jsx(b,{...x,type:a,size:l,ref:j,readOnly:v,id:u||N,className:ce(d,h?`${n}-plaintext`:n,o&&`${n}-${o}`,a==="color"&&`${n}-color`,p&&"is-valid",g&&"is-invalid")})});lx.displayName="FormControl";const PC=Object.assign(lx,{Feedback:jc}),cx=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=de(a,"form-floating"),s.jsx(o,{ref:u,className:ce(n,a),...l})));cx.displayName="FormFloating";const im=m.forwardRef(({controlId:n,as:a="div",...o},l)=>{const u=m.useMemo(()=>({controlId:n}),[n]);return s.jsx(pa.Provider,{value:u,children:s.jsx(a,{...o,ref:l})})});im.displayName="FormGroup";const ux=m.forwardRef(({as:n="label",bsPrefix:a,column:o=!1,visuallyHidden:l=!1,className:u,htmlFor:d,...p},g)=>{const{controlId:h}=m.useContext(pa);a=de(a,"form-label");let v="col-form-label";typeof o=="string"&&(v=`${v} ${v}-${o}`);const b=ce(u,a,l&&"visually-hidden",o&&v);return d=d||h,o?s.jsx(Cn,{ref:g,as:"label",className:b,htmlFor:d,...p}):s.jsx(n,{ref:g,className:b,htmlFor:d,...p})});ux.displayName="FormLabel";const dx=m.forwardRef(({bsPrefix:n,className:a,id:o,...l},u)=>{const{controlId:d}=m.useContext(pa);return n=de(n,"form-range"),s.jsx("input",{...l,type:"range",ref:u,className:ce(a,n),id:o||d})});dx.displayName="FormRange";const fx=m.forwardRef(({bsPrefix:n,size:a,htmlSize:o,className:l,isValid:u=!1,isInvalid:d=!1,id:p,...g},h)=>{const{controlId:v}=m.useContext(pa);return n=de(n,"form-select"),s.jsx("select",{...g,size:o,ref:h,className:ce(l,n,a&&`${n}-${a}`,u&&"is-valid",d&&"is-invalid"),id:p||v})});fx.displayName="FormSelect";const mx=m.forwardRef(({bsPrefix:n,className:a,as:o="small",muted:l,...u},d)=>(n=de(n,"form-text"),s.jsx(o,{...u,ref:d,className:ce(a,n,l&&"text-muted")})));mx.displayName="FormText";const px=m.forwardRef((n,a)=>s.jsx(Ql,{...n,ref:a,type:"switch"}));px.displayName="Switch";const IC=Object.assign(px,{Input:Ql.Input,Label:Ql.Label}),hx=m.forwardRef(({bsPrefix:n,className:a,children:o,controlId:l,label:u,...d},p)=>(n=de(n,"form-floating"),s.jsxs(im,{ref:p,className:ce(a,n),controlId:l,...d,children:[o,s.jsx("label",{htmlFor:l,children:u})]})));hx.displayName="FloatingLabel";const $C={_ref:_e.any,validated:_e.bool,as:_e.elementType},lm=m.forwardRef(({className:n,validated:a,as:o="form",...l},u)=>s.jsx(o,{...l,ref:u,className:ce(n,a&&"was-validated")}));lm.displayName="Form";lm.propTypes=$C;const se=Object.assign(lm,{Group:im,Control:PC,Floating:cx,Check:Ql,Switch:IC,Label:ux,Text:mx,Range:dx,Select:fx,FloatingLabel:hx}),Sc=m.forwardRef(({className:n,bsPrefix:a,as:o="span",...l},u)=>(a=de(a,"input-group-text"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Sc.displayName="InputGroupText";const HC=n=>s.jsx(Sc,{children:s.jsx(pi,{type:"checkbox",...n})}),qC=n=>s.jsx(Sc,{children:s.jsx(pi,{type:"radio",...n})}),gx=m.forwardRef(({bsPrefix:n,size:a,hasValidation:o,className:l,as:u="div",...d},p)=>{n=de(n,"input-group");const g=m.useMemo(()=>({}),[]);return s.jsx(wc.Provider,{value:g,children:s.jsx(u,{ref:p,...d,className:ce(l,n,a&&`${n}-${a}`,o&&"has-validation")})})});gx.displayName="InputGroup";const JC=Object.assign(gx,{Text:Sc,Radio:qC,Checkbox:HC}),pb=n=>!n||typeof n=="function"?n:a=>{n.current=a};function GC(n,a){const o=pb(n),l=pb(a);return u=>{o&&o(u),l&&l(u)}}function hi(n,a){return m.useMemo(()=>GC(n,a),[n,a])}const $o=m.createContext(null),FC=["as","active","eventKey"];function VC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function vx({key:n,onClick:a,active:o,id:l,role:u,disabled:d}){const p=m.useContext(Bn),g=m.useContext(yc),h=m.useContext($o);let v=o;const b={role:u};if(g){!u&&g.role==="tablist"&&(b.role="tab");const x=g.getControllerId(n??null),j=g.getControlledId(n??null);b[Io("event-key")]=n,b.id=x||l,v=o==null&&n!=null?g.activeKey===n:o,(v||!(h!=null&&h.unmountOnExit)&&!(h!=null&&h.mountOnEnter))&&(b["aria-controls"]=j)}return b.role==="tab"&&(b["aria-selected"]=v,v||(b.tabIndex=-1),d&&(b.tabIndex=-1,b["aria-disabled"]=!0)),b.onClick=gt(x=>{d||(a?.(x),n!=null&&p&&!x.isPropagationStopped()&&p(n,x))}),[b,{isActive:v}]}const bx=m.forwardRef((n,a)=>{let{as:o=Yf,active:l,eventKey:u}=n,d=VC(n,FC);const[p,g]=vx(Object.assign({key:xr(u,d.href),active:l},d));return p[Io("active")]=g.isActive,s.jsx(o,Object.assign({},d,p,{ref:a}))});bx.displayName="NavItem";const YC=["as","onSelect","activeKey","role","onKeyDown"];function XC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const hb=()=>{},gb=Io("event-key"),yx=m.forwardRef((n,a)=>{let{as:o="div",onSelect:l,activeKey:u,role:d,onKeyDown:p}=n,g=XC(n,YC);const h=Oy(),v=m.useRef(!1),b=m.useContext(Bn),x=m.useContext($o);let j,N;x&&(d=d||"tablist",u=x.activeKey,j=x.getControlledId,N=x.getControllerId);const C=m.useRef(null),O=T=>{const L=C.current;if(!L)return null;const B=ra(L,`[${gb}]:not([aria-disabled=true])`),z=L.querySelector("[aria-selected=true]");if(!z||z!==document.activeElement)return null;const _=B.indexOf(z);if(_===-1)return null;let U=_+T;return U>=B.length&&(U=0),U<0&&(U=B.length-1),B[U]},S=(T,L)=>{T!=null&&(l?.(T,L),b?.(T,L))},k=T=>{if(p?.(T),!x)return;let L;switch(T.key){case"ArrowLeft":case"ArrowUp":L=O(-1);break;case"ArrowRight":case"ArrowDown":L=O(1);break;default:return}L&&(T.preventDefault(),S(L.dataset[LC("EventKey")]||null,T),v.current=!0,h())};m.useEffect(()=>{if(C.current&&v.current){const T=C.current.querySelector(`[${gb}][aria-selected=true]`);T?.focus()}v.current=!1});const E=hi(a,C);return s.jsx(Bn.Provider,{value:S,children:s.jsx(yc.Provider,{value:{role:d,activeKey:xr(u),getControlledId:j||hb,getControllerId:N||hb},children:s.jsx(o,Object.assign({},g,{onKeyDown:k,ref:E,role:d}))})})});yx.displayName="Nav";const ZC=Object.assign(yx,{Item:bx});var Il;function vb(n){if((!Il&&Il!==0||n)&&Bo){var a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a),Il=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return Il}function KC(){return m.useState(null)}function nf(n){n===void 0&&(n=zo());try{var a=n.activeElement;return!a||!a.nodeName?null:a}catch{return n.body}}function QC(n){const a=m.useRef(n);return a.current=n,a}function WC(n){const a=QC(n);m.useEffect(()=>()=>a.current(),[])}function eA(n=document){const a=n.defaultView;return Math.abs(a.innerWidth-n.documentElement.clientWidth)}const bb=Io("modal-open");class cm{constructor({ownerDocument:a,handleContainerOverflow:o=!0,isRTL:l=!1}={}){this.handleContainerOverflow=o,this.isRTL=l,this.modals=[],this.ownerDocument=a}getScrollbarWidth(){return eA(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(a){}removeModalAttributes(a){}setContainerStyle(a){const o={overflow:"hidden"},l=this.isRTL?"paddingLeft":"paddingRight",u=this.getElement();a.style={overflow:u.style.overflow,[l]:u.style[l]},a.scrollBarWidth&&(o[l]=`${parseInt(la(u,l)||"0",10)+a.scrollBarWidth}px`),u.setAttribute(bb,""),la(u,o)}reset(){[...this.modals].forEach(a=>this.remove(a))}removeContainerStyle(a){const o=this.getElement();o.removeAttribute(bb),Object.assign(o.style,a.style)}add(a){let o=this.modals.indexOf(a);return o!==-1||(o=this.modals.length,this.modals.push(a),this.setModalAttributes(a),o!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),o}remove(a){const o=this.modals.indexOf(a);o!==-1&&(this.modals.splice(o,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(a))}isTopModal(a){return!!this.modals.length&&this.modals[this.modals.length-1]===a}}const af=(n,a)=>Bo?n==null?(a||zo()).body:(typeof n=="function"&&(n=n()),n&&"current"in n&&(n=n.current),n&&("nodeType"in n||n.getBoundingClientRect)?n:null):null;function Nf(n,a){const o=xc(),[l,u]=m.useState(()=>af(n,o?.document));if(!l){const d=af(n);d&&u(d)}return m.useEffect(()=>{},[a,l]),m.useEffect(()=>{const d=af(n);d!==l&&u(d)},[n,l]),l}function um({children:n,in:a,onExited:o,mountOnEnter:l,unmountOnExit:u}){const d=m.useRef(null),p=m.useRef(a),g=gt(o);m.useEffect(()=>{a?p.current=!0:g(d.current)},[a,g]);const h=hi(d,Nr(n)),v=m.cloneElement(n,{ref:h});return a?v:u||!p.current&&l?null:v}const tA=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function nA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function aA(n){let{onEnter:a,onEntering:o,onEntered:l,onExit:u,onExiting:d,onExited:p,addEndListener:g,children:h}=n,v=nA(n,tA);const b=m.useRef(null),x=hi(b,Nr(h)),j=L=>B=>{L&&b.current&&L(b.current,B)},N=m.useCallback(j(a),[a]),C=m.useCallback(j(o),[o]),O=m.useCallback(j(l),[l]),S=m.useCallback(j(u),[u]),k=m.useCallback(j(d),[d]),E=m.useCallback(j(p),[p]),T=m.useCallback(j(g),[g]);return Object.assign({},v,{nodeRef:b},a&&{onEnter:N},o&&{onEntering:C},l&&{onEntered:O},u&&{onExit:S},d&&{onExiting:k},p&&{onExited:E},g&&{addEndListener:T},{children:typeof h=="function"?(L,B)=>h(L,Object.assign({},B,{ref:x})):m.cloneElement(h,{ref:x})})}const rA=["component"];function oA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const sA=m.forwardRef((n,a)=>{let{component:o}=n,l=oA(n,rA);const u=aA(l);return s.jsx(o,Object.assign({ref:a},u))});function iA({in:n,onTransition:a}){const o=m.useRef(null),l=m.useRef(!0),u=gt(a);return Zv(()=>{if(!o.current)return;let d=!1;return u({in:n,element:o.current,initial:l.current,isStale:()=>d}),()=>{d=!0}},[n,u]),Zv(()=>(l.current=!1,()=>{l.current=!0}),[]),o}function lA({children:n,in:a,onExited:o,onEntered:l,transition:u}){const[d,p]=m.useState(!a);a&&d&&p(!1);const g=iA({in:!!a,onTransition:v=>{const b=()=>{v.isStale()||(v.in?l?.(v.element,v.initial):(p(!0),o?.(v.element)))};Promise.resolve(u(v)).then(b,x=>{throw v.in||p(!0),x})}}),h=hi(g,Nr(n));return d&&!a?null:m.cloneElement(n,{ref:h})}function Ef(n,a,o){return n?s.jsx(sA,Object.assign({},o,{component:n})):a?s.jsx(lA,Object.assign({},o,{transition:a})):s.jsx(um,Object.assign({},o))}const cA=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function uA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}let rf;function dA(n){return rf||(rf=new cm({ownerDocument:n?.document})),rf}function fA(n){const a=xc(),o=n||dA(a),l=m.useRef({dialog:null,backdrop:null});return Object.assign(l.current,{add:()=>o.add(l.current),remove:()=>o.remove(l.current),isTopModal:()=>o.isTopModal(l.current),setDialogRef:m.useCallback(u=>{l.current.dialog=u},[]),setBackdropRef:m.useCallback(u=>{l.current.backdrop=u},[])})}const xx=m.forwardRef((n,a)=>{let{show:o=!1,role:l="dialog",className:u,style:d,children:p,backdrop:g=!0,keyboard:h=!0,onBackdropClick:v,onEscapeKeyDown:b,transition:x,runTransition:j,backdropTransition:N,runBackdropTransition:C,autoFocus:O=!0,enforceFocus:S=!0,restoreFocus:k=!0,restoreFocusOptions:E,renderDialog:T,renderBackdrop:L=ze=>s.jsx("div",Object.assign({},ze)),manager:B,container:z,onShow:_,onHide:U=()=>{},onExit:Y,onExited:W,onExiting:ne,onEnter:le,onEntering:ie,onEntered:ee}=n,P=uA(n,cA);const D=xc(),K=Nf(z),oe=fA(B),V=my(),A=py(o),[$,re]=m.useState(!o),ae=m.useRef(null);m.useImperativeHandle(a,()=>oe,[oe]),Bo&&!A&&o&&(ae.current=nf(D?.document)),o&&$&&re(!1);const H=gt(()=>{if(oe.add(),zt.current=sa(document,"keydown",we),Ie.current=sa(document,"focus",()=>setTimeout(fe),!0),_&&_(),O){var ze,Hn;const ot=nf((ze=(Hn=oe.dialog)==null?void 0:Hn.ownerDocument)!=null?ze:D?.document);oe.dialog&&ot&&!si(oe.dialog,ot)&&(ae.current=ot,oe.dialog.focus())}}),ue=gt(()=>{if(oe.remove(),zt.current==null||zt.current(),Ie.current==null||Ie.current(),k){var ze;(ze=ae.current)==null||ze.focus==null||ze.focus(E),ae.current=null}});m.useEffect(()=>{!o||!K||H()},[o,K,H]),m.useEffect(()=>{$&&ue()},[$,ue]),WC(()=>{ue()});const fe=gt(()=>{if(!S||!V()||!oe.isTopModal())return;const ze=nf(D?.document);oe.dialog&&ze&&!si(oe.dialog,ze)&&oe.dialog.focus()}),He=gt(ze=>{ze.target===ze.currentTarget&&(v?.(ze),g===!0&&U())}),we=gt(ze=>{h&&cy(ze)&&oe.isTopModal()&&(b?.(ze),ze.defaultPrevented||U())}),Ie=m.useRef(),zt=m.useRef(),Bt=(...ze)=>{re(!0),W?.(...ze)};if(!K)return null;const Kt=Object.assign({role:l,ref:oe.setDialogRef,"aria-modal":l==="dialog"?!0:void 0},P,{style:d,className:u,tabIndex:-1});let Qt=T?T(Kt):s.jsx("div",Object.assign({},Kt,{children:m.cloneElement(p,{role:"document"})}));Qt=Ef(x,j,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!o,onExit:Y,onExiting:ne,onExited:Bt,onEnter:le,onEntering:ie,onEntered:ee,children:Qt});let Wt=null;return g&&(Wt=L({ref:oe.setBackdropRef,onClick:He}),Wt=Ef(N,C,{in:!!o,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Wt})),s.jsx(s.Fragment,{children:gr.createPortal(s.jsxs(s.Fragment,{children:[Wt,Qt]}),K)})});xx.displayName="Modal";const wx=Object.assign(xx,{Manager:cm});function Cf(n,a){return n.classList?!!a&&n.classList.contains(a):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+a+" ")!==-1}function mA(n,a){n.classList?n.classList.add(a):Cf(n,a)||(typeof n.className=="string"?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a))}function yb(n,a){return n.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function pA(n,a){n.classList?n.classList.remove(a):typeof n.className=="string"?n.className=yb(n.className,a):n.setAttribute("class",yb(n.className&&n.className.baseVal||"",a))}const bo={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class jx extends cm{adjustAndStore(a,o,l){const u=o.style[a];o.dataset[a]=u,la(o,{[a]:`${parseFloat(la(o,a))+l}px`})}restore(a,o){const l=o.dataset[a];l!==void 0&&(delete o.dataset[a],la(o,{[a]:l}))}setContainerStyle(a){super.setContainerStyle(a);const o=this.getElement();if(mA(o,"modal-open"),!a.scrollBarWidth)return;const l=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";ra(o,bo.FIXED_CONTENT).forEach(d=>this.adjustAndStore(l,d,a.scrollBarWidth)),ra(o,bo.STICKY_CONTENT).forEach(d=>this.adjustAndStore(u,d,-a.scrollBarWidth)),ra(o,bo.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(u,d,a.scrollBarWidth))}removeContainerStyle(a){super.removeContainerStyle(a);const o=this.getElement();pA(o,"modal-open");const l=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";ra(o,bo.FIXED_CONTENT).forEach(d=>this.restore(l,d)),ra(o,bo.STICKY_CONTENT).forEach(d=>this.restore(u,d)),ra(o,bo.NAVBAR_TOGGLER).forEach(d=>this.restore(u,d))}}let of;function Sx(n){return of||(of=new jx(n)),of}const Nx=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=de(a,"modal-body"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Nx.displayName="ModalBody";const dm=m.createContext({onHide(){}}),fm=m.forwardRef(({bsPrefix:n,className:a,contentClassName:o,centered:l,size:u,fullscreen:d,children:p,scrollable:g,...h},v)=>{n=de(n,"modal");const b=`${n}-dialog`,x=typeof d=="string"?`${n}-fullscreen-${d}`:`${n}-fullscreen`;return s.jsx("div",{...h,ref:v,className:ce(b,a,u&&`${n}-${u}`,l&&`${b}-centered`,g&&`${b}-scrollable`,d&&x),children:s.jsx("div",{className:ce(`${n}-content`,o),children:p})})});fm.displayName="ModalDialog";const Ex=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=de(a,"modal-footer"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Ex.displayName="ModalFooter";const mm=m.forwardRef(({closeLabel:n="Close",closeVariant:a,closeButton:o=!1,onHide:l,children:u,...d},p)=>{const g=m.useContext(dm),h=da(()=>{g?.onHide(),l?.()});return s.jsxs("div",{ref:p,...d,children:[u,o&&s.jsx(gc,{"aria-label":n,variant:a,onClick:h})]})});mm.displayName="AbstractModalHeader";const Cx=m.forwardRef(({bsPrefix:n,className:a,closeLabel:o="Close",closeButton:l=!1,...u},d)=>(n=de(n,"modal-header"),s.jsx(mm,{ref:d,...u,className:ce(a,n),closeLabel:o,closeButton:l})));Cx.displayName="ModalHeader";const hA=hc("h4"),Ax=m.forwardRef(({className:n,bsPrefix:a,as:o=hA,...l},u)=>(a=de(a,"modal-title"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Ax.displayName="ModalTitle";function gA(n){return s.jsx(fa,{...n,timeout:null})}function vA(n){return s.jsx(fa,{...n,timeout:null})}const Ox=m.forwardRef(({bsPrefix:n,className:a,style:o,dialogClassName:l,contentClassName:u,children:d,dialogAs:p=fm,"data-bs-theme":g,"aria-labelledby":h,"aria-describedby":v,"aria-label":b,show:x=!1,animation:j=!0,backdrop:N=!0,keyboard:C=!0,onEscapeKeyDown:O,onShow:S,onHide:k,container:E,autoFocus:T=!0,enforceFocus:L=!0,restoreFocus:B=!0,restoreFocusOptions:z,onEntered:_,onExit:U,onExiting:Y,onEnter:W,onEntering:ne,onExited:le,backdropClassName:ie,manager:ee,...P},D)=>{const[K,oe]=m.useState({}),[V,A]=m.useState(!1),$=m.useRef(!1),re=m.useRef(!1),ae=m.useRef(null),[H,ue]=KC(),fe=Uo(D,ue),He=da(k),we=mc();n=de(n,"modal");const Ie=m.useMemo(()=>({onHide:He}),[He]);function zt(){return ee||Sx({isRTL:we})}function Bt(je){if(!Bo)return;const Ye=zt().getScrollbarWidth()>0,At=je.scrollHeight>zo(je).documentElement.clientHeight;oe({paddingRight:Ye&&!At?vb():void 0,paddingLeft:!Ye&&At?vb():void 0})}const Kt=da(()=>{H&&Bt(H.dialog)});Ny(()=>{yf(window,"resize",Kt),ae.current==null||ae.current()});const Qt=()=>{$.current=!0},Wt=je=>{$.current&&H&&je.target===H.dialog&&(re.current=!0),$.current=!1},ze=()=>{A(!0),ae.current=uy(H.dialog,()=>{A(!1)})},Hn=je=>{je.target===je.currentTarget&&ze()},ot=je=>{if(N==="static"){Hn(je);return}if(re.current||je.target!==je.currentTarget){re.current=!1;return}k?.()},Zo=je=>{C?O?.(je):(je.preventDefault(),N==="static"&&ze())},Or=(je,Ye)=>{je&&Bt(je),W?.(je,Ye)},en=je=>{ae.current==null||ae.current(),U?.(je)},wn=(je,Ye)=>{ne?.(je,Ye),Gf(window,"resize",Kt)},kr=je=>{je&&(je.style.display=""),le?.(je),yf(window,"resize",Kt)},Xa=m.useCallback(je=>s.jsx("div",{...je,className:ce(`${n}-backdrop`,ie,!j&&"show")}),[j,ie,n]),ba={...o,...K};ba.display="block";const Tr=je=>s.jsx("div",{role:"dialog",...je,style:ba,className:ce(a,n,V&&`${n}-static`,!j&&"show"),onClick:N?ot:void 0,onMouseUp:Wt,"data-bs-theme":g,"aria-label":b,"aria-labelledby":h,"aria-describedby":v,children:s.jsx(p,{...P,onMouseDown:Qt,className:l,contentClassName:u,children:d})});return s.jsx(dm.Provider,{value:Ie,children:s.jsx(wx,{show:x,ref:fe,backdrop:N,container:E,keyboard:!0,autoFocus:T,enforceFocus:L,restoreFocus:B,restoreFocusOptions:z,onEscapeKeyDown:Zo,onShow:S,onHide:k,onEnter:Or,onEntering:wn,onEntered:_,onExit:en,onExiting:Y,onExited:kr,manager:zt(),transition:j?gA:void 0,backdropTransition:j?vA:void 0,renderBackdrop:Xa,renderDialog:Tr})})});Ox.displayName="Modal";const ye=Object.assign(Ox,{Body:Nx,Header:Cx,Title:Ax,Footer:Ex,Dialog:fm,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),pm=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=de(a,"nav-item"),s.jsx(o,{ref:u,className:ce(n,a),...l})));pm.displayName="NavItem";const Nc=m.forwardRef(({bsPrefix:n,className:a,as:o=Xf,active:l,eventKey:u,disabled:d=!1,...p},g)=>{n=de(n,"nav-link");const[h,v]=vx({key:xr(u,p.href),active:l,disabled:d,...p});return s.jsx(o,{...p,...h,ref:g,disabled:d,className:ce(a,n,d&&"disabled",v.isActive&&"active")})});Nc.displayName="NavLink";const kx=m.forwardRef((n,a)=>{const{as:o="div",bsPrefix:l,variant:u,fill:d=!1,justify:p=!1,navbar:g,navbarScroll:h,className:v,activeKey:b,...x}=fc(n,{activeKey:"onSelect"}),j=de(l,"nav");let N,C,O=!1;const S=m.useContext(Er),k=m.useContext(Kf);return S?(N=S.bsPrefix,O=g??!0):k&&({cardHeaderBsPrefix:C}=k),s.jsx(ZC,{as:o,ref:a,activeKey:b,className:ce(v,{[j]:!O,[`${N}-nav`]:O,[`${N}-nav-scroll`]:O&&h,[`${C}-${u}`]:!!C,[`${j}-${u}`]:!!u,[`${j}-fill`]:d,[`${j}-justified`]:p}),...x})});kx.displayName="Nav";const Ft=Object.assign(kx,{Item:pm,Link:Nc}),Tx=m.forwardRef(({bsPrefix:n,className:a,as:o,...l},u)=>{n=de(n,"navbar-brand");const d=o||(l.href?"a":"span");return s.jsx(d,{...l,ref:u,className:ce(a,n)})});Tx.displayName="NavbarBrand";const Rx=m.forwardRef(({children:n,bsPrefix:a,...o},l)=>{a=de(a,"navbar-collapse");const u=m.useContext(Er);return s.jsx(fy,{in:!!(u&&u.expanded),...o,children:s.jsx("div",{ref:l,className:a,children:n})})});Rx.displayName="NavbarCollapse";const Dx=m.forwardRef(({bsPrefix:n,className:a,children:o,label:l="Toggle navigation",as:u="button",onClick:d,...p},g)=>{n=de(n,"navbar-toggler");const{onToggle:h,expanded:v}=m.useContext(Er)||{},b=da(x=>{d&&d(x),h&&h()});return u==="button"&&(p.type="button"),s.jsx(u,{...p,ref:g,onClick:b,"aria-label":l,className:ce(a,n,!v&&"collapsed"),children:o||s.jsx("span",{className:`${n}-icon`})})});Dx.displayName="NavbarToggle";const Af=new WeakMap,xb=(n,a)=>{if(!n||!a)return;const o=Af.get(a)||new Map;Af.set(a,o);let l=o.get(n);return l||(l=a.matchMedia(n),l.refCount=0,o.set(l.media,l)),l};function bA(n,a=typeof window>"u"?void 0:window){const o=xb(n,a),[l,u]=m.useState(()=>o?o.matches:!1);return sm(()=>{let d=xb(n,a);if(!d)return u(!1);let p=Af.get(a);const g=()=>{u(d.matches)};return d.refCount++,d.addListener(g),g(),()=>{d.removeListener(g),d.refCount--,d.refCount<=0&&p?.delete(d.media),d=void 0}},[n]),l}function yA(n){const a=Object.keys(n);function o(g,h){return g===h?h:g?`${g} and ${h}`:h}function l(g){return a[Math.min(a.indexOf(g)+1,a.length-1)]}function u(g){const h=l(g);let v=n[h];return typeof v=="number"?v=`${v-.2}px`:v=`calc(${v} - 0.2px)`,`(max-width: ${v})`}function d(g){let h=n[g];return typeof h=="number"&&(h=`${h}px`),`(min-width: ${h})`}function p(g,h,v){let b;typeof g=="object"?(b=g,v=h,h=!0):(h=h||!0,b={[g]:h});let x=m.useMemo(()=>Object.entries(b).reduce((j,[N,C])=>((C==="up"||C===!0)&&(j=o(j,d(N))),(C==="down"||C===!0)&&(j=o(j,u(N))),j),""),[JSON.stringify(b)]);return bA(x,v)}return p}const xA=yA({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Lx=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=de(a,"offcanvas-body"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Lx.displayName="OffcanvasBody";const wA={[mn]:"show",[oa]:"show"},Mx=m.forwardRef(({bsPrefix:n,className:a,children:o,in:l=!1,mountOnEnter:u=!1,unmountOnExit:d=!1,appear:p=!1,...g},h)=>(n=de(n,"offcanvas"),s.jsx(pc,{ref:h,addEndListener:Ff,in:l,mountOnEnter:u,unmountOnExit:d,appear:p,...g,childRef:Nr(o),children:(v,b)=>m.cloneElement(o,{...b,className:ce(a,o.props.className,(v===mn||v===Eo)&&`${n}-toggling`,wA[v])})})));Mx.displayName="OffcanvasToggling";const _x=m.forwardRef(({bsPrefix:n,className:a,closeLabel:o="Close",closeButton:l=!1,...u},d)=>(n=de(n,"offcanvas-header"),s.jsx(mm,{ref:d,...u,className:ce(a,n),closeLabel:o,closeButton:l})));_x.displayName="OffcanvasHeader";const jA=hc("h5"),zx=m.forwardRef(({className:n,bsPrefix:a,as:o=jA,...l},u)=>(a=de(a,"offcanvas-title"),s.jsx(o,{ref:u,className:ce(n,a),...l})));zx.displayName="OffcanvasTitle";function SA(n){return s.jsx(Mx,{...n})}function NA(n){return s.jsx(fa,{...n})}const Bx=m.forwardRef(({bsPrefix:n,className:a,children:o,"aria-labelledby":l,placement:u="start",responsive:d,show:p=!1,backdrop:g=!0,keyboard:h=!0,scroll:v=!1,onEscapeKeyDown:b,onShow:x,onHide:j,container:N,autoFocus:C=!0,enforceFocus:O=!0,restoreFocus:S=!0,restoreFocusOptions:k,onEntered:E,onExit:T,onExiting:L,onEnter:B,onEntering:z,onExited:_,backdropClassName:U,manager:Y,renderStaticNode:W=!1,...ne},le)=>{const ie=m.useRef();n=de(n,"offcanvas");const[ee,P]=m.useState(!1),D=da(j),K=xA(d||"xs","up");m.useEffect(()=>{P(d?p&&!K:p)},[p,d,K]);const oe=m.useMemo(()=>({onHide:D}),[D]);function V(){return Y||(v?(ie.current||(ie.current=new jx({handleContainerOverflow:!1})),ie.current):Sx())}const A=(H,...ue)=>{H&&(H.style.visibility="visible"),B?.(H,...ue)},$=(H,...ue)=>{H&&(H.style.visibility=""),_?.(...ue)},re=m.useCallback(H=>s.jsx("div",{...H,className:ce(`${n}-backdrop`,U)}),[U,n]),ae=H=>s.jsx("div",{...H,...ne,className:ce(a,d?`${n}-${d}`:n,`${n}-${u}`),"aria-labelledby":l,children:o});return s.jsxs(s.Fragment,{children:[!ee&&(d||W)&&ae({}),s.jsx(dm.Provider,{value:oe,children:s.jsx(wx,{show:ee,ref:le,backdrop:g,container:N,keyboard:h,autoFocus:C,enforceFocus:O&&!v,restoreFocus:S,restoreFocusOptions:k,onEscapeKeyDown:b,onShow:x,onHide:D,onEnter:A,onEntering:z,onEntered:E,onExit:T,onExiting:L,onExited:$,manager:V(),transition:SA,backdropTransition:NA,renderBackdrop:re,renderDialog:ae})})]})});Bx.displayName="Offcanvas";const qa=Object.assign(Bx,{Body:Lx,Header:_x,Title:zx}),Ux=m.forwardRef(({onHide:n,...a},o)=>{const l=m.useContext(Er),u=da(()=>{l==null||l.onToggle==null||l.onToggle(),n?.()});return s.jsx(qa,{ref:o,show:!!(l!=null&&l.expanded),...a,renderStaticNode:!0,onHide:u})});Ux.displayName="NavbarOffcanvas";const Px=m.forwardRef(({className:n,bsPrefix:a,as:o="span",...l},u)=>(a=de(a,"navbar-text"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Px.displayName="NavbarText";const Ix=m.forwardRef((n,a)=>{const{bsPrefix:o,expand:l=!0,variant:u="light",bg:d,fixed:p,sticky:g,className:h,as:v="nav",expanded:b,onToggle:x,onSelect:j,collapseOnSelect:N=!1,...C}=fc(n,{expanded:"onToggle"}),O=de(o,"navbar"),S=m.useCallback((...T)=>{j?.(...T),N&&b&&x?.(!1)},[j,N,b,x]);C.role===void 0&&v!=="nav"&&(C.role="navigation");let k=`${O}-expand`;typeof l=="string"&&(k=`${k}-${l}`);const E=m.useMemo(()=>({onToggle:()=>x?.(!b),bsPrefix:O,expanded:!!b,expand:l}),[O,b,l,x]);return s.jsx(Er.Provider,{value:E,children:s.jsx(Bn.Provider,{value:S,children:s.jsx(v,{ref:a,...C,className:ce(h,O,l&&k,u&&`${O}-${u}`,d&&`bg-${d}`,g&&`sticky-${g}`,p&&`fixed-${p}`)})})})});Ix.displayName="Navbar";const $l=Object.assign(Ix,{Brand:Tx,Collapse:Rx,Offcanvas:Ux,Text:Px,Toggle:Dx}),$x=m.forwardRef(({id:n,title:a,children:o,bsPrefix:l,className:u,rootCloseEvent:d,menuRole:p,disabled:g,active:h,renderMenuOnMount:v,menuVariant:b,...x},j)=>{const N=de(void 0,"nav-item");return s.jsxs(pn,{ref:j,...x,className:ce(u,N),children:[s.jsx(pn.Toggle,{id:n,eventKey:null,active:h,disabled:g,childBsPrefix:l,as:Nc,children:a}),s.jsx(pn.Menu,{role:p,renderOnMount:v,rootCloseEvent:d,variant:b,children:o})]})});$x.displayName="NavDropdown";const dn=Object.assign($x,{Item:pn.Item,ItemText:pn.ItemText,Divider:pn.Divider,Header:pn.Header}),EA=()=>{};function CA(n,a,{disabled:o,clickTrigger:l}={}){const u=a||EA;Py(n,u,{disabled:o,clickTrigger:l});const d=gt(p=>{cy(p)&&u(p)});m.useEffect(()=>{if(o||n==null)return;const p=zo(Vl(n));let g=(p.defaultView||window).event;const h=sa(p,"keyup",v=>{if(v===g){g=void 0;return}d(v)});return()=>{h()}},[n,o,d])}const Hx=m.forwardRef((n,a)=>{const{flip:o,offset:l,placement:u,containerPadding:d,popperConfig:p={},transition:g,runTransition:h}=n,[v,b]=xf(),[x,j]=xf(),N=hi(b,a),C=Nf(n.container),O=Nf(n.target),[S,k]=m.useState(!n.show),E=Uy(O,v,Iy({placement:u,enableEvents:!!n.show,containerPadding:d||5,flip:o,offset:l,arrowElement:x,popperConfig:p}));n.show&&S&&k(!1);const T=(...ne)=>{k(!0),n.onExited&&n.onExited(...ne)},L=n.show||!S;if(CA(v,n.onHide,{disabled:!n.rootClose||n.rootCloseDisabled,clickTrigger:n.rootCloseEvent}),!L)return null;const{onExit:B,onExiting:z,onEnter:_,onEntering:U,onEntered:Y}=n;let W=n.children(Object.assign({},E.attributes.popper,{style:E.styles.popper,ref:N}),{popper:E,placement:u,show:!!n.show,arrowProps:Object.assign({},E.attributes.arrow,{style:E.styles.arrow,ref:j})});return W=Ef(g,h,{in:!!n.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:W,onExit:B,onExiting:z,onExited:T,onEnter:_,onEntering:U,onEntered:Y}),C?gr.createPortal(W,C):null});Hx.displayName="Overlay";const qx=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=de(a,"popover-header"),s.jsx(o,{ref:u,className:ce(n,a),...l})));qx.displayName="PopoverHeader";const hm=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=de(a,"popover-body"),s.jsx(o,{ref:u,className:ce(n,a),...l})));hm.displayName="PopoverBody";function Jx(n,a){let o=n;return n==="left"?o=a?"end":"start":n==="right"&&(o=a?"start":"end"),o}function Gx(n="absolute"){return{position:n,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const Fx=m.forwardRef(({bsPrefix:n,placement:a="right",className:o,style:l,children:u,body:d,arrowProps:p,hasDoneInitialMeasure:g,popper:h,show:v,...b},x)=>{const j=de(n,"popover"),N=mc(),[C]=a?.split("-")||[],O=Jx(C,N);let S=l;return v&&!g&&(S={...l,...Gx(h?.strategy)}),s.jsxs("div",{ref:x,role:"tooltip",style:S,"x-placement":C,className:ce(o,j,C&&`bs-popover-${O}`),...b,children:[s.jsx("div",{className:"popover-arrow",...p}),d?s.jsx(hm,{children:u}):u]})});Fx.displayName="Popover";const AA=Object.assign(Fx,{Header:qx,Body:hm,POPPER_OFFSET:[0,8]}),Vx=m.forwardRef(({bsPrefix:n,placement:a="right",className:o,style:l,children:u,arrowProps:d,hasDoneInitialMeasure:p,popper:g,show:h,...v},b)=>{n=de(n,"tooltip");const x=mc(),[j]=a?.split("-")||[],N=Jx(j,x);let C=l;return h&&!p&&(C={...l,...Gx(g?.strategy)}),s.jsxs("div",{ref:b,style:C,role:"tooltip","x-placement":j,className:ce(o,n,`bs-tooltip-${N}`),...v,children:[s.jsx("div",{className:"tooltip-arrow",...d}),s.jsx("div",{className:`${n}-inner`,children:u})]})});Vx.displayName="Tooltip";const hr=Object.assign(Vx,{TOOLTIP_OFFSET:[0,6]});function OA(n){const a=m.useRef(null),o=de(void 0,"popover"),l=de(void 0,"tooltip"),u=m.useMemo(()=>({name:"offset",options:{offset:()=>{if(n)return n;if(a.current){if(Cf(a.current,o))return AA.POPPER_OFFSET;if(Cf(a.current,l))return hr.TOOLTIP_OFFSET}return[0,0]}}}),[n,o,l]);return[a,[u]]}function kA(n,a){const{ref:o}=n,{ref:l}=a;n.ref=o.__wrapped||(o.__wrapped=u=>o(Xl(u))),a.ref=l.__wrapped||(l.__wrapped=u=>l(Xl(u)))}const Yx=m.forwardRef(({children:n,transition:a=fa,popperConfig:o={},rootClose:l=!1,placement:u="top",show:d=!1,...p},g)=>{const h=m.useRef({}),[v,b]=m.useState(null),[x,j]=OA(p.offset),N=Uo(g,x),C=a===!0?fa:a||void 0,O=da(S=>{b(S),o==null||o.onFirstUpdate==null||o.onFirstUpdate(S)});return sm(()=>{v&&p.target&&(h.current.scheduleUpdate==null||h.current.scheduleUpdate())},[v,p.target]),m.useEffect(()=>{d||b(null)},[d]),s.jsx(Hx,{...p,ref:N,popperConfig:{...o,modifiers:j.concat(o.modifiers||[]),onFirstUpdate:O},transition:C,rootClose:l,placement:u,show:d,children:(S,{arrowProps:k,popper:E,show:T})=>{var L;kA(S,k);const B=E?.placement,z=Object.assign(h.current,{state:E?.state,scheduleUpdate:E?.update,placement:B,outOfBoundaries:(E==null||(L=E.state)==null||(L=L.modifiersData.hide)==null?void 0:L.isReferenceHidden)||!1,strategy:o.strategy}),_=!!v;return typeof n=="function"?n({...S,placement:B,show:T,...!a&&T&&{className:"show"},popper:z,arrowProps:k,hasDoneInitialMeasure:_}):m.cloneElement(n,{...S,placement:B,arrowProps:k,popper:z,hasDoneInitialMeasure:_,className:ce(n.props.className,!a&&T&&"show"),style:{...n.props.style,...S.style}})}})});Yx.displayName="Overlay";function TA(n){return n&&typeof n=="object"?n:{show:n,hide:n}}function wb(n,a,o){const[l]=a,u=l.currentTarget,d=l.relatedTarget||l.nativeEvent[o];(!d||d!==u)&&!si(u,d)&&n(...a)}_e.oneOf(["click","hover","focus"]);const yo=({trigger:n=["hover","focus"],overlay:a,children:o,popperConfig:l={},show:u,defaultShow:d=!1,onToggle:p,delay:g,placement:h,flip:v=h&&h.indexOf("auto")!==-1,...b})=>{const x=m.useRef(null),j=Uo(x,Nr(o)),N=Cy(),C=m.useRef(""),[O,S]=oy(u,d,p),k=TA(g),{onFocus:E,onBlur:T,onClick:L}=typeof o!="function"?m.Children.only(o).props:{},B=P=>{j(Xl(P))},z=m.useCallback(()=>{if(N.clear(),C.current="show",!k.show){S(!0);return}N.set(()=>{C.current==="show"&&S(!0)},k.show)},[k.show,S,N]),_=m.useCallback(()=>{if(N.clear(),C.current="hide",!k.hide){S(!1);return}N.set(()=>{C.current==="hide"&&S(!1)},k.hide)},[k.hide,S,N]),U=m.useCallback((...P)=>{z(),E?.(...P)},[z,E]),Y=m.useCallback((...P)=>{_(),T?.(...P)},[_,T]),W=m.useCallback((...P)=>{S(!O),L?.(...P)},[L,S,O]),ne=m.useCallback((...P)=>{wb(z,P,"fromElement")},[z]),le=m.useCallback((...P)=>{wb(_,P,"toElement")},[_]),ie=n==null?[]:[].concat(n),ee={ref:B};return ie.indexOf("click")!==-1&&(ee.onClick=W),ie.indexOf("focus")!==-1&&(ee.onFocus=U,ee.onBlur=Y),ie.indexOf("hover")!==-1&&(ee.onMouseOver=ne,ee.onMouseOut=le),s.jsxs(s.Fragment,{children:[typeof o=="function"?o(ee):m.cloneElement(o,ee),s.jsx(Yx,{...b,show:O,onHide:_,flip:v,placement:h,popperConfig:l,target:x.current,children:a})]})},wr=m.forwardRef(({bsPrefix:n,className:a,as:o="div",...l},u)=>{const d=de(n,"row"),p=sy(),g=iy(),h=`${d}-cols`,v=[];return p.forEach(b=>{const x=l[b];delete l[b];let j;x!=null&&typeof x=="object"?{cols:j}=x:j=x;const N=b!==g?`-${b}`:"";j!=null&&v.push(`${h}${N}-${j}`)}),s.jsx(o,{ref:u,...l,className:ce(a,d,...v)})});wr.displayName="Row";const St=m.forwardRef(({bsPrefix:n,variant:a,animation:o="border",size:l,as:u="div",className:d,...p},g)=>{n=de(n,"spinner");const h=`${n}-${o}`;return s.jsx(u,{ref:g,...p,className:ce(d,h,l&&`${h}-${l}`,a&&`text-${a}`)})});St.displayName="Spinner";const RA=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],DA=["activeKey","getControlledId","getControllerId"],LA=["as"];function Of(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function Xx(n){let{active:a,eventKey:o,mountOnEnter:l,transition:u,unmountOnExit:d,role:p="tabpanel",onEnter:g,onEntering:h,onEntered:v,onExit:b,onExiting:x,onExited:j}=n,N=Of(n,RA);const C=m.useContext($o);if(!C)return[Object.assign({},N,{role:p}),{eventKey:o,isActive:a,mountOnEnter:l,transition:u,unmountOnExit:d,onEnter:g,onEntering:h,onEntered:v,onExit:b,onExiting:x,onExited:j}];const{activeKey:O,getControlledId:S,getControllerId:k}=C,E=Of(C,DA),T=xr(o);return[Object.assign({},N,{role:p,id:S(o),"aria-labelledby":k(o)}),{eventKey:o,isActive:a==null&&T!=null?xr(O)===T:a,transition:u||E.transition,mountOnEnter:l??E.mountOnEnter,unmountOnExit:d??E.unmountOnExit,onEnter:g,onEntering:h,onEntered:v,onExit:b,onExiting:x,onExited:j}]}const Zx=m.forwardRef((n,a)=>{let{as:o="div"}=n,l=Of(n,LA);const[u,{isActive:d,onEnter:p,onEntering:g,onEntered:h,onExit:v,onExiting:b,onExited:x,mountOnEnter:j,unmountOnExit:N,transition:C=um}]=Xx(l);return s.jsx($o.Provider,{value:null,children:s.jsx(Bn.Provider,{value:null,children:s.jsx(C,{in:d,onEnter:p,onEntering:g,onEntered:h,onExit:v,onExiting:b,onExited:x,mountOnEnter:j,unmountOnExit:N,children:s.jsx(o,Object.assign({},u,{ref:a,hidden:!d,"aria-hidden":!d}))})})})});Zx.displayName="TabPanel";const gm=n=>{const{id:a,generateChildId:o,onSelect:l,activeKey:u,defaultActiveKey:d,transition:p,mountOnEnter:g,unmountOnExit:h,children:v}=n,[b,x]=Ay(u,d,l),j=Gy(a),N=m.useMemo(()=>o||((O,S)=>j?`${j}-${S}-${O}`:null),[j,o]),C=m.useMemo(()=>({onSelect:x,activeKey:b,transition:p,mountOnEnter:g||!1,unmountOnExit:h||!1,getControlledId:O=>N(O,"tabpane"),getControllerId:O=>N(O,"tab")}),[x,b,p,g,h,N]);return s.jsx($o.Provider,{value:C,children:s.jsx(Bn.Provider,{value:x||null,children:v})})};gm.Panel=Zx;function vm(n){return typeof n=="boolean"?n?fa:um:n}const Kx=({transition:n,...a})=>s.jsx(gm,{...a,transition:vm(n)});Kx.displayName="TabContainer";const bm=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=de(a,"tab-content"),s.jsx(o,{ref:u,className:ce(n,a),...l})));bm.displayName="TabContent";const ym=m.forwardRef(({bsPrefix:n,transition:a,...o},l)=>{const[{className:u,as:d="div",...p},{isActive:g,onEnter:h,onEntering:v,onEntered:b,onExit:x,onExiting:j,onExited:N,mountOnEnter:C,unmountOnExit:O,transition:S=fa}]=Xx({...o,transition:vm(a)}),k=de(n,"tab-pane");return s.jsx($o.Provider,{value:null,children:s.jsx(Bn.Provider,{value:null,children:s.jsx(S,{in:g,onEnter:h,onEntering:v,onEntered:b,onExit:x,onExiting:j,onExited:N,mountOnEnter:C,unmountOnExit:O,children:s.jsx(d,{...p,ref:l,className:ce(u,k,g&&"active")})})})})});ym.displayName="TabPane";const MA={eventKey:_e.oneOfType([_e.string,_e.number]),title:_e.node.isRequired,disabled:_e.bool,tabClassName:_e.string,tabAttrs:_e.object},Qx=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};Qx.propTypes=MA;const jo=Object.assign(Qx,{Container:Kx,Content:bm,Pane:ym}),gi=m.forwardRef(({bsPrefix:n,className:a,striped:o,bordered:l,borderless:u,hover:d,size:p,variant:g,responsive:h,...v},b)=>{const x=de(n,"table"),j=ce(a,x,g&&`${x}-${g}`,p&&`${x}-${p}`,o&&`${x}-${typeof o=="string"?`striped-${o}`:"striped"}`,l&&`${x}-bordered`,u&&`${x}-borderless`,d&&`${x}-hover`),N=s.jsx("table",{...v,className:j,ref:b});if(h){let C=`${x}-responsive`;return typeof h=="string"&&(C=`${C}-${h}`),s.jsx("div",{className:C,children:N})}return N});gi.displayName="Table";function _A(n){let a;return t2(n,o=>{a==null&&(a=o.props.eventKey)}),a}function zA(n){const{title:a,eventKey:o,disabled:l,tabClassName:u,tabAttrs:d,id:p}=n.props;return a==null?null:s.jsx(pm,{as:"li",role:"presentation",children:s.jsx(Nc,{as:"button",type:"button",eventKey:o,disabled:l,id:p,className:u,...d,children:a})})}const xm=n=>{const{id:a,onSelect:o,transition:l,mountOnEnter:u=!1,unmountOnExit:d=!1,variant:p="tabs",children:g,activeKey:h=_A(g),...v}=fc(n,{activeKey:"onSelect"});return s.jsxs(gm,{id:a,activeKey:h,onSelect:o,transition:vm(l),mountOnEnter:u,unmountOnExit:d,children:[s.jsx(Ft,{id:a,...v,role:"tablist",as:"ul",variant:p,children:Kv(g,zA)}),s.jsx(bm,{children:Kv(g,b=>{const x={...b.props};return delete x.title,delete x.disabled,delete x.tabClassName,delete x.tabAttrs,s.jsx(ym,{...x})})})]})};xm.displayName="Tabs";const BA={[mn]:"showing",[Eo]:"showing show"},Wx=m.forwardRef((n,a)=>s.jsx(fa,{...n,ref:a,transitionClasses:BA}));Wx.displayName="ToastFade";const ew=m.createContext({onClose(){}}),tw=m.forwardRef(({bsPrefix:n,closeLabel:a="Close",closeVariant:o,closeButton:l=!0,className:u,children:d,...p},g)=>{n=de(n,"toast-header");const h=m.useContext(ew),v=da(b=>{h==null||h.onClose==null||h.onClose(b)});return s.jsxs("div",{ref:g,...p,className:ce(n,u),children:[d,l&&s.jsx(gc,{"aria-label":a,variant:o,onClick:v,"data-dismiss":"toast"})]})});tw.displayName="ToastHeader";const nw=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=de(a,"toast-body"),s.jsx(o,{ref:u,className:ce(n,a),...l})));nw.displayName="ToastBody";const aw=m.forwardRef(({bsPrefix:n,className:a,transition:o=Wx,show:l=!0,animation:u=!0,delay:d=5e3,autohide:p=!1,onClose:g,onEntered:h,onExit:v,onExiting:b,onEnter:x,onEntering:j,onExited:N,bg:C,...O},S)=>{n=de(n,"toast");const k=m.useRef(d),E=m.useRef(g);m.useEffect(()=>{k.current=d,E.current=g},[d,g]);const T=Cy(),L=!!(p&&l),B=m.useCallback(()=>{L&&(E.current==null||E.current())},[L]);m.useEffect(()=>{T.set(B,k.current)},[T,B]);const z=m.useMemo(()=>({onClose:g}),[g]),_=!!(o&&u),U=s.jsx("div",{...O,ref:S,className:ce(n,a,C&&`bg-${C}`,!_&&(l?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return s.jsx(ew.Provider,{value:z,children:_&&o?s.jsx(o,{in:l,onEnter:x,onEntering:j,onEntered:h,onExit:v,onExiting:b,onExited:N,unmountOnExit:!0,children:U}):U})});aw.displayName="Toast";const Nt=Object.assign(aw,{Body:nw,Header:tw}),UA={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},Ho=m.forwardRef(({bsPrefix:n,position:a,containerPosition:o,className:l,as:u="div",...d},p)=>(n=de(n,"toast-container"),s.jsx(u,{ref:p,...d,className:ce(n,a&&UA[a],o&&`position-${o}`,l)})));Ho.displayName="ToastContainer";const rw=m.createContext();function PA({children:n}){const[a,o]=m.useState([]),l=m.useCallback((g,h="success",v=3e3,b="Notificación")=>{const x=crypto.randomUUID();o(j=>[...j,{id:x,message:g,variant:h,delay:v,header:b}])},[]),u=g=>{o(h=>h.filter(v=>v.id!==g))},d=g=>{switch(g){case"success":return{color:"#0f5132"};case"danger":return{color:"#842029"};case"warning":return{color:"#664d03"};case"info":return{color:"#055160"};default:return{color:"#212529"}}},p=g=>{switch(g){case"success":case"danger":case"warning":case"info":return"text-white";default:return"text-dark"}};return s.jsxs(rw.Provider,{value:{showToast:l},children:[n,s.jsx(Ho,{position:"bottom-end",className:"p-3",style:{zIndex:2e3},children:a.map(g=>s.jsxs(Nt,{bg:g.variant,autohide:!0,delay:g.delay,onClose:()=>u(g.id),children:[s.jsx(Nt.Header,{closeButton:!0,children:s.jsx("strong",{className:"me-auto",style:d(g.variant),children:g.header})}),s.jsx(Nt.Body,{className:p(g.variant),children:g.message})]},g.id))})]})}function $n(){const n=m.useContext(rw);if(!n)throw new Error("useToast debe usarse dentro de <ToastProvider>");return n}/*!
* sweetalert2 v11.23.0
* Released under the MIT License.
*/function ow(n,a,o){if(typeof n=="function"?n===a:n.has(a))return arguments.length<3?a:o;throw new TypeError("Private element is not present on this object")}function IA(n,a){if(a.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function jb(n,a){return n.get(ow(n,a))}function $A(n,a,o){IA(n,a),a.set(n,o)}function HA(n,a,o){return n.set(ow(n,a),o),o}const qA=100,he={},JA=()=>{he.previousActiveElement instanceof HTMLElement?(he.previousActiveElement.focus(),he.previousActiveElement=null):document.body&&document.body.focus()},GA=n=>new Promise(a=>{if(!n)return a();const o=window.scrollX,l=window.scrollY;he.restoreFocusTimeout=setTimeout(()=>{JA(),a()},qA),window.scrollTo(o,l)}),sw="swal2-",FA=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],X=FA.reduce((n,a)=>(n[a]=sw+a,n),{}),VA=["success","warning","info","question","error"],Wl=VA.reduce((n,a)=>(n[a]=sw+a,n),{}),iw="SweetAlert2:",wm=n=>n.charAt(0).toUpperCase()+n.slice(1),Et=n=>{console.warn(`${iw} ${typeof n=="object"?n.join(" "):n}`)},Cr=n=>{console.error(`${iw} ${n}`)},Sb=[],YA=n=>{Sb.includes(n)||(Sb.push(n),Et(n))},lw=(n,a=null)=>{YA(`"${n}" is deprecated and will be removed in the next major release.${a?` Use "${a}" instead.`:""}`)},Ec=n=>typeof n=="function"?n():n,jm=n=>n&&typeof n.toPromise=="function",vi=n=>jm(n)?n.toPromise():Promise.resolve(n),Sm=n=>n&&Promise.resolve(n)===n,Ct=()=>document.body.querySelector(`.${X.container}`),bi=n=>{const a=Ct();return a?a.querySelector(n):null},Xt=n=>bi(`.${n}`),Te=()=>Xt(X.popup),qo=()=>Xt(X.icon),XA=()=>Xt(X["icon-content"]),cw=()=>Xt(X.title),Nm=()=>Xt(X["html-container"]),uw=()=>Xt(X.image),Em=()=>Xt(X["progress-steps"]),Cc=()=>Xt(X["validation-message"]),Un=()=>bi(`.${X.actions} .${X.confirm}`),Jo=()=>bi(`.${X.actions} .${X.cancel}`),Ar=()=>bi(`.${X.actions} .${X.deny}`),ZA=()=>Xt(X["input-label"]),Go=()=>bi(`.${X.loader}`),yi=()=>Xt(X.actions),dw=()=>Xt(X.footer),Ac=()=>Xt(X["timer-progress-bar"]),Cm=()=>Xt(X.close),KA=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Am=()=>{const n=Te();if(!n)return[];const a=n.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),o=Array.from(a).sort((d,p)=>{const g=parseInt(d.getAttribute("tabindex")||"0"),h=parseInt(p.getAttribute("tabindex")||"0");return g>h?1:g<h?-1:0}),l=n.querySelectorAll(KA),u=Array.from(l).filter(d=>d.getAttribute("tabindex")!=="-1");return[...new Set(o.concat(u))].filter(d=>_t(d))},Om=()=>ca(document.body,X.shown)&&!ca(document.body,X["toast-shown"])&&!ca(document.body,X["no-backdrop"]),Oc=()=>{const n=Te();return n?ca(n,X.toast):!1},QA=()=>{const n=Te();return n?n.hasAttribute("data-loading"):!1},Zt=(n,a)=>{if(n.textContent="",a){const l=new DOMParser().parseFromString(a,"text/html"),u=l.querySelector("head");u&&Array.from(u.childNodes).forEach(p=>{n.appendChild(p)});const d=l.querySelector("body");d&&Array.from(d.childNodes).forEach(p=>{p instanceof HTMLVideoElement||p instanceof HTMLAudioElement?n.appendChild(p.cloneNode(!0)):n.appendChild(p)})}},ca=(n,a)=>{if(!a)return!1;const o=a.split(/\s+/);for(let l=0;l<o.length;l++)if(!n.classList.contains(o[l]))return!1;return!0},WA=(n,a)=>{Array.from(n.classList).forEach(o=>{!Object.values(X).includes(o)&&!Object.values(Wl).includes(o)&&!Object.values(a.showClass||{}).includes(o)&&n.classList.remove(o)})},Yt=(n,a,o)=>{if(WA(n,a),!a.customClass)return;const l=a.customClass[o];if(l){if(typeof l!="string"&&!l.forEach){Et(`Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof l}"`);return}De(n,l)}},kc=(n,a)=>{if(!a)return null;switch(a){case"select":case"textarea":case"file":return n.querySelector(`.${X.popup} > .${X[a]}`);case"checkbox":return n.querySelector(`.${X.popup} > .${X.checkbox} input`);case"radio":return n.querySelector(`.${X.popup} > .${X.radio} input:checked`)||n.querySelector(`.${X.popup} > .${X.radio} input:first-child`);case"range":return n.querySelector(`.${X.popup} > .${X.range} input`);default:return n.querySelector(`.${X.popup} > .${X.input}`)}},fw=n=>{if(n.focus(),n.type!=="file"){const a=n.value;n.value="",n.value=a}},mw=(n,a,o)=>{!n||!a||(typeof a=="string"&&(a=a.split(/\s+/).filter(Boolean)),a.forEach(l=>{Array.isArray(n)?n.forEach(u=>{o?u.classList.add(l):u.classList.remove(l)}):o?n.classList.add(l):n.classList.remove(l)}))},De=(n,a)=>{mw(n,a,!0)},yn=(n,a)=>{mw(n,a,!1)},Ga=(n,a)=>{const o=Array.from(n.children);for(let l=0;l<o.length;l++){const u=o[l];if(u instanceof HTMLElement&&ca(u,a))return u}},br=(n,a,o)=>{o===`${parseInt(o)}`&&(o=parseInt(o)),o||parseInt(o)===0?n.style.setProperty(a,typeof o=="number"?`${o}px`:o):n.style.removeProperty(a)},ft=(n,a="flex")=>{n&&(n.style.display=a)},wt=n=>{n&&(n.style.display="none")},km=(n,a="block")=>{n&&new MutationObserver(()=>{xi(n,n.innerHTML,a)}).observe(n,{childList:!0,subtree:!0})},Nb=(n,a,o,l)=>{const u=n.querySelector(a);u&&u.style.setProperty(o,l)},xi=(n,a,o="flex")=>{a?ft(n,o):wt(n)},_t=n=>!!(n&&(n.offsetWidth||n.offsetHeight||n.getClientRects().length)),eO=()=>!_t(Un())&&!_t(Ar())&&!_t(Jo()),kf=n=>n.scrollHeight>n.clientHeight,tO=(n,a)=>{let o=n;for(;o&&o!==a;){if(kf(o))return!0;o=o.parentElement}return!1},pw=n=>{const a=window.getComputedStyle(n),o=parseFloat(a.getPropertyValue("animation-duration")||"0"),l=parseFloat(a.getPropertyValue("transition-duration")||"0");return o>0||l>0},Tm=(n,a=!1)=>{const o=Ac();o&&_t(o)&&(a&&(o.style.transition="none",o.style.width="100%"),setTimeout(()=>{o.style.transition=`width ${n/1e3}s linear`,o.style.width="0%"},10))},nO=()=>{const n=Ac();if(!n)return;const a=parseInt(window.getComputedStyle(n).width);n.style.removeProperty("transition"),n.style.width="100%";const o=parseInt(window.getComputedStyle(n).width),l=a/o*100;n.style.width=`${l}%`},aO=()=>typeof window>"u"||typeof document>"u",rO=`
 <div aria-labelledby="${X.title}" aria-describedby="${X["html-container"]}" class="${X.popup}" tabindex="-1">
   <button type="button" class="${X.close}"></button>
   <ul class="${X["progress-steps"]}"></ul>
   <div class="${X.icon}"></div>
   <img class="${X.image}" />
   <h2 class="${X.title}" id="${X.title}"></h2>
   <div class="${X["html-container"]}" id="${X["html-container"]}"></div>
   <input class="${X.input}" id="${X.input}" />
   <input type="file" class="${X.file}" />
   <div class="${X.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${X.select}" id="${X.select}"></select>
   <div class="${X.radio}"></div>
   <label class="${X.checkbox}">
     <input type="checkbox" id="${X.checkbox}" />
     <span class="${X.label}"></span>
   </label>
   <textarea class="${X.textarea}" id="${X.textarea}"></textarea>
   <div class="${X["validation-message"]}" id="${X["validation-message"]}"></div>
   <div class="${X.actions}">
     <div class="${X.loader}"></div>
     <button type="button" class="${X.confirm}"></button>
     <button type="button" class="${X.deny}"></button>
     <button type="button" class="${X.cancel}"></button>
   </div>
   <div class="${X.footer}"></div>
   <div class="${X["timer-progress-bar-container"]}">
     <div class="${X["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),oO=()=>{const n=Ct();return n?(n.remove(),yn([document.documentElement,document.body],[X["no-backdrop"],X["toast-shown"],X["has-column"]]),!0):!1},pr=()=>{he.currentInstance.resetValidationMessage()},sO=()=>{const n=Te(),a=Ga(n,X.input),o=Ga(n,X.file),l=n.querySelector(`.${X.range} input`),u=n.querySelector(`.${X.range} output`),d=Ga(n,X.select),p=n.querySelector(`.${X.checkbox} input`),g=Ga(n,X.textarea);a.oninput=pr,o.onchange=pr,d.onchange=pr,p.onchange=pr,g.oninput=pr,l.oninput=()=>{pr(),u.value=l.value},l.onchange=()=>{pr(),u.value=l.value}},iO=n=>typeof n=="string"?document.querySelector(n):n,lO=n=>{const a=Te();a.setAttribute("role",n.toast?"alert":"dialog"),a.setAttribute("aria-live",n.toast?"polite":"assertive"),n.toast||a.setAttribute("aria-modal","true")},cO=n=>{window.getComputedStyle(n).direction==="rtl"&&De(Ct(),X.rtl)},uO=n=>{const a=oO();if(aO()){Cr("SweetAlert2 requires document to initialize");return}const o=document.createElement("div");o.className=X.container,a&&De(o,X["no-transition"]),Zt(o,rO),o.dataset.swal2Theme=n.theme;const l=iO(n.target);l.appendChild(o),n.topLayer&&(o.setAttribute("popover",""),o.showPopover()),lO(n),cO(l),sO()},Rm=(n,a)=>{n instanceof HTMLElement?a.appendChild(n):typeof n=="object"?dO(n,a):n&&Zt(a,n)},dO=(n,a)=>{n.jquery?fO(a,n):Zt(a,n.toString())},fO=(n,a)=>{if(n.textContent="",0 in a)for(let o=0;o in a;o++)n.appendChild(a[o].cloneNode(!0));else n.appendChild(a.cloneNode(!0))},mO=(n,a)=>{const o=yi(),l=Go();!o||!l||(!a.showConfirmButton&&!a.showDenyButton&&!a.showCancelButton?wt(o):ft(o),Yt(o,a,"actions"),pO(o,l,a),Zt(l,a.loaderHtml||""),Yt(l,a,"loader"))};function pO(n,a,o){const l=Un(),u=Ar(),d=Jo();!l||!u||!d||(lf(l,"confirm",o),lf(u,"deny",o),lf(d,"cancel",o),hO(l,u,d,o),o.reverseButtons&&(o.toast?(n.insertBefore(d,l),n.insertBefore(u,l)):(n.insertBefore(d,a),n.insertBefore(u,a),n.insertBefore(l,a))))}function hO(n,a,o,l){if(!l.buttonsStyling){yn([n,a,o],X.styled);return}De([n,a,o],X.styled),l.confirmButtonColor&&n.style.setProperty("--swal2-confirm-button-background-color",l.confirmButtonColor),l.denyButtonColor&&a.style.setProperty("--swal2-deny-button-background-color",l.denyButtonColor),l.cancelButtonColor&&o.style.setProperty("--swal2-cancel-button-background-color",l.cancelButtonColor),sf(n),sf(a),sf(o)}function sf(n){const a=window.getComputedStyle(n);if(a.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const o=a.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");n.style.setProperty("--swal2-action-button-focus-box-shadow",a.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${o}`))}function lf(n,a,o){const l=wm(a);xi(n,o[`show${l}Button`],"inline-block"),Zt(n,o[`${a}ButtonText`]||""),n.setAttribute("aria-label",o[`${a}ButtonAriaLabel`]||""),n.className=X[a],Yt(n,o,`${a}Button`)}const gO=(n,a)=>{const o=Cm();o&&(Zt(o,a.closeButtonHtml||""),Yt(o,a,"closeButton"),xi(o,a.showCloseButton),o.setAttribute("aria-label",a.closeButtonAriaLabel||""))},vO=(n,a)=>{const o=Ct();o&&(bO(o,a.backdrop),yO(o,a.position),xO(o,a.grow),Yt(o,a,"container"))};function bO(n,a){typeof a=="string"?n.style.background=a:a||De([document.documentElement,document.body],X["no-backdrop"])}function yO(n,a){a&&(a in X?De(n,X[a]):(Et('The "position" parameter is not valid, defaulting to "center"'),De(n,X.center)))}function xO(n,a){a&&De(n,X[`grow-${a}`])}var Je={innerParams:new WeakMap,domCache:new WeakMap};const wO=["input","file","range","select","radio","checkbox","textarea"],jO=(n,a)=>{const o=Te();if(!o)return;const l=Je.innerParams.get(n),u=!l||a.input!==l.input;wO.forEach(d=>{const p=Ga(o,X[d]);p&&(EO(d,a.inputAttributes),p.className=X[d],u&&wt(p))}),a.input&&(u&&SO(a),CO(a))},SO=n=>{if(!n.input)return;if(!tt[n.input]){Cr(`Unexpected type of input! Expected ${Object.keys(tt).join(" | ")}, got "${n.input}"`);return}const a=hw(n.input);if(!a)return;const o=tt[n.input](a,n);ft(a),n.inputAutoFocus&&setTimeout(()=>{fw(o)})},NO=n=>{for(let a=0;a<n.attributes.length;a++){const o=n.attributes[a].name;["id","type","value","style"].includes(o)||n.removeAttribute(o)}},EO=(n,a)=>{const o=Te();if(!o)return;const l=kc(o,n);if(l){NO(l);for(const u in a)l.setAttribute(u,a[u])}},CO=n=>{if(!n.input)return;const a=hw(n.input);a&&Yt(a,n,"input")},Dm=(n,a)=>{!n.placeholder&&a.inputPlaceholder&&(n.placeholder=a.inputPlaceholder)},wi=(n,a,o)=>{if(o.inputLabel){const l=document.createElement("label"),u=X["input-label"];l.setAttribute("for",n.id),l.className=u,typeof o.customClass=="object"&&De(l,o.customClass.inputLabel),l.innerText=o.inputLabel,a.insertAdjacentElement("beforebegin",l)}},hw=n=>{const a=Te();if(a)return Ga(a,X[n]||X.input)},ec=(n,a)=>{["string","number"].includes(typeof a)?n.value=`${a}`:Sm(a)||Et(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof a}"`)},tt={};tt.text=tt.email=tt.password=tt.number=tt.tel=tt.url=tt.search=tt.date=tt["datetime-local"]=tt.time=tt.week=tt.month=(n,a)=>(ec(n,a.inputValue),wi(n,n,a),Dm(n,a),n.type=a.input,n);tt.file=(n,a)=>(wi(n,n,a),Dm(n,a),n);tt.range=(n,a)=>{const o=n.querySelector("input"),l=n.querySelector("output");return ec(o,a.inputValue),o.type=a.input,ec(l,a.inputValue),wi(o,n,a),n};tt.select=(n,a)=>{if(n.textContent="",a.inputPlaceholder){const o=document.createElement("option");Zt(o,a.inputPlaceholder),o.value="",o.disabled=!0,o.selected=!0,n.appendChild(o)}return wi(n,n,a),n};tt.radio=n=>(n.textContent="",n);tt.checkbox=(n,a)=>{const o=kc(Te(),"checkbox");o.value="1",o.checked=!!a.inputValue;const l=n.querySelector("span");return Zt(l,a.inputPlaceholder||a.inputLabel),o};tt.textarea=(n,a)=>{ec(n,a.inputValue),Dm(n,a),wi(n,n,a);const o=l=>parseInt(window.getComputedStyle(l).marginLeft)+parseInt(window.getComputedStyle(l).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const l=parseInt(window.getComputedStyle(Te()).width),u=()=>{if(!document.body.contains(n))return;const d=n.offsetWidth+o(n);d>l?Te().style.width=`${d}px`:br(Te(),"width",a.width)};new MutationObserver(u).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n};const AO=(n,a)=>{const o=Nm();o&&(km(o),Yt(o,a,"htmlContainer"),a.html?(Rm(a.html,o),ft(o,"block")):a.text?(o.textContent=a.text,ft(o,"block")):wt(o),jO(n,a))},OO=(n,a)=>{const o=dw();o&&(km(o),xi(o,a.footer,"block"),a.footer&&Rm(a.footer,o),Yt(o,a,"footer"))},kO=(n,a)=>{const o=Je.innerParams.get(n),l=qo();if(!l)return;if(o&&a.icon===o.icon){Cb(l,a),Eb(l,a);return}if(!a.icon&&!a.iconHtml){wt(l);return}if(a.icon&&Object.keys(Wl).indexOf(a.icon)===-1){Cr(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${a.icon}"`),wt(l);return}ft(l),Cb(l,a),Eb(l,a),De(l,a.showClass&&a.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",gw)},Eb=(n,a)=>{for(const[o,l]of Object.entries(Wl))a.icon!==o&&yn(n,l);De(n,a.icon&&Wl[a.icon]),DO(n,a),gw(),Yt(n,a,"icon")},gw=()=>{const n=Te();if(!n)return;const a=window.getComputedStyle(n).getPropertyValue("background-color"),o=n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let l=0;l<o.length;l++)o[l].style.backgroundColor=a},TO=n=>`
  ${n.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${n.animation?'<div class="swal2-success-fix"></div>':""}
  ${n.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,RO=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Cb=(n,a)=>{if(!a.icon&&!a.iconHtml)return;let o=n.innerHTML,l="";a.iconHtml?l=Ab(a.iconHtml):a.icon==="success"?(l=TO(a),o=o.replace(/ style=".*?"/g,"")):a.icon==="error"?l=RO:a.icon&&(l=Ab({question:"?",warning:"!",info:"i"}[a.icon])),o.trim()!==l.trim()&&Zt(n,l)},DO=(n,a)=>{if(a.iconColor){n.style.color=a.iconColor,n.style.borderColor=a.iconColor;for(const o of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Nb(n,o,"background-color",a.iconColor);Nb(n,".swal2-success-ring","border-color",a.iconColor)}},Ab=n=>`<div class="${X["icon-content"]}">${n}</div>`,LO=(n,a)=>{const o=uw();if(o){if(!a.imageUrl){wt(o);return}ft(o,""),o.setAttribute("src",a.imageUrl),o.setAttribute("alt",a.imageAlt||""),br(o,"width",a.imageWidth),br(o,"height",a.imageHeight),o.className=X.image,Yt(o,a,"image")}};let Lm=!1,vw=0,bw=0,yw=0,xw=0;const MO=n=>{n.addEventListener("mousedown",tc),document.body.addEventListener("mousemove",nc),n.addEventListener("mouseup",ac),n.addEventListener("touchstart",tc),document.body.addEventListener("touchmove",nc),n.addEventListener("touchend",ac)},_O=n=>{n.removeEventListener("mousedown",tc),document.body.removeEventListener("mousemove",nc),n.removeEventListener("mouseup",ac),n.removeEventListener("touchstart",tc),document.body.removeEventListener("touchmove",nc),n.removeEventListener("touchend",ac)},tc=n=>{const a=Te();if(n.target===a||qo().contains(n.target)){Lm=!0;const o=ww(n);vw=o.clientX,bw=o.clientY,yw=parseInt(a.style.insetInlineStart)||0,xw=parseInt(a.style.insetBlockStart)||0,De(a,"swal2-dragging")}},nc=n=>{const a=Te();if(Lm){let{clientX:o,clientY:l}=ww(n);a.style.insetInlineStart=`${yw+(o-vw)}px`,a.style.insetBlockStart=`${xw+(l-bw)}px`}},ac=()=>{const n=Te();Lm=!1,yn(n,"swal2-dragging")},ww=n=>{let a=0,o=0;return n.type.startsWith("mouse")?(a=n.clientX,o=n.clientY):n.type.startsWith("touch")&&(a=n.touches[0].clientX,o=n.touches[0].clientY),{clientX:a,clientY:o}},zO=(n,a)=>{const o=Ct(),l=Te();if(!(!o||!l)){if(a.toast){br(o,"width",a.width),l.style.width="100%";const u=Go();u&&l.insertBefore(u,qo())}else br(l,"width",a.width);br(l,"padding",a.padding),a.color&&(l.style.color=a.color),a.background&&(l.style.background=a.background),wt(Cc()),BO(l,a),a.draggable&&!a.toast?(De(l,X.draggable),MO(l)):(yn(l,X.draggable),_O(l))}},BO=(n,a)=>{const o=a.showClass||{};n.className=`${X.popup} ${_t(n)?o.popup:""}`,a.toast?(De([document.documentElement,document.body],X["toast-shown"]),De(n,X.toast)):De(n,X.modal),Yt(n,a,"popup"),typeof a.customClass=="string"&&De(n,a.customClass),a.icon&&De(n,X[`icon-${a.icon}`])},UO=(n,a)=>{const o=Em();if(!o)return;const{progressSteps:l,currentProgressStep:u}=a;if(!l||l.length===0||u===void 0){wt(o);return}ft(o),o.textContent="",u>=l.length&&Et("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),l.forEach((d,p)=>{const g=PO(d);if(o.appendChild(g),p===u&&De(g,X["active-progress-step"]),p!==l.length-1){const h=IO(a);o.appendChild(h)}})},PO=n=>{const a=document.createElement("li");return De(a,X["progress-step"]),Zt(a,n),a},IO=n=>{const a=document.createElement("li");return De(a,X["progress-step-line"]),n.progressStepsDistance&&br(a,"width",n.progressStepsDistance),a},$O=(n,a)=>{const o=cw();o&&(km(o),xi(o,a.title||a.titleText,"block"),a.title&&Rm(a.title,o),a.titleText&&(o.innerText=a.titleText),Yt(o,a,"title"))},jw=(n,a)=>{zO(n,a),vO(n,a),UO(n,a),kO(n,a),LO(n,a),$O(n,a),gO(n,a),AO(n,a),mO(n,a),OO(n,a);const o=Te();typeof a.didRender=="function"&&o&&a.didRender(o),he.eventEmitter.emit("didRender",o)},HO=()=>_t(Te()),Sw=()=>{var n;return(n=Un())===null||n===void 0?void 0:n.click()},qO=()=>{var n;return(n=Ar())===null||n===void 0?void 0:n.click()},JO=()=>{var n;return(n=Jo())===null||n===void 0?void 0:n.click()},Fo=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Nw=n=>{n.keydownTarget&&n.keydownHandlerAdded&&(n.keydownTarget.removeEventListener("keydown",n.keydownHandler,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!1)},GO=(n,a,o)=>{Nw(n),a.toast||(n.keydownHandler=l=>VO(a,l,o),n.keydownTarget=a.keydownListenerCapture?window:Te(),n.keydownListenerCapture=a.keydownListenerCapture,n.keydownTarget.addEventListener("keydown",n.keydownHandler,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!0)},Tf=(n,a)=>{var o;const l=Am();if(l.length){n=n+a,n===-2&&(n=l.length-1),n===l.length?n=0:n===-1&&(n=l.length-1),l[n].focus();return}(o=Te())===null||o===void 0||o.focus()},Ew=["ArrowRight","ArrowDown"],FO=["ArrowLeft","ArrowUp"],VO=(n,a,o)=>{n&&(a.isComposing||a.keyCode===229||(n.stopKeydownPropagation&&a.stopPropagation(),a.key==="Enter"?YO(a,n):a.key==="Tab"?XO(a):[...Ew,...FO].includes(a.key)?ZO(a.key):a.key==="Escape"&&KO(a,n,o)))},YO=(n,a)=>{if(!Ec(a.allowEnterKey))return;const o=kc(Te(),a.input);if(n.target&&o&&n.target instanceof HTMLElement&&n.target.outerHTML===o.outerHTML){if(["textarea","file"].includes(a.input))return;Sw(),n.preventDefault()}},XO=n=>{const a=n.target,o=Am();let l=-1;for(let u=0;u<o.length;u++)if(a===o[u]){l=u;break}n.shiftKey?Tf(l,-1):Tf(l,1),n.stopPropagation(),n.preventDefault()},ZO=n=>{const a=yi(),o=Un(),l=Ar(),u=Jo();if(!a||!o||!l||!u)return;const d=[o,l,u];if(document.activeElement instanceof HTMLElement&&!d.includes(document.activeElement))return;const p=Ew.includes(n)?"nextElementSibling":"previousElementSibling";let g=document.activeElement;if(g){for(let h=0;h<a.children.length;h++){if(g=g[p],!g)return;if(g instanceof HTMLButtonElement&&_t(g))break}g instanceof HTMLButtonElement&&g.focus()}},KO=(n,a,o)=>{n.preventDefault(),Ec(a.allowEscapeKey)&&o(Fo.esc)};var To={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const QO=()=>{const n=Ct();Array.from(document.body.children).forEach(o=>{o.contains(n)||(o.hasAttribute("aria-hidden")&&o.setAttribute("data-previous-aria-hidden",o.getAttribute("aria-hidden")||""),o.setAttribute("aria-hidden","true"))})},Cw=()=>{Array.from(document.body.children).forEach(a=>{a.hasAttribute("data-previous-aria-hidden")?(a.setAttribute("aria-hidden",a.getAttribute("data-previous-aria-hidden")||""),a.removeAttribute("data-previous-aria-hidden")):a.removeAttribute("aria-hidden")})},Aw=typeof window<"u"&&!!window.GestureEvent,WO=()=>{if(Aw&&!ca(document.body,X.iosfix)){const n=document.body.scrollTop;document.body.style.top=`${n*-1}px`,De(document.body,X.iosfix),e1()}},e1=()=>{const n=Ct();if(!n)return;let a;n.ontouchstart=o=>{a=t1(o)},n.ontouchmove=o=>{a&&(o.preventDefault(),o.stopPropagation())}},t1=n=>{const a=n.target,o=Ct(),l=Nm();return!o||!l||n1(n)||a1(n)?!1:a===o||!kf(o)&&a instanceof HTMLElement&&!tO(a,l)&&a.tagName!=="INPUT"&&a.tagName!=="TEXTAREA"&&!(kf(l)&&l.contains(a))},n1=n=>n.touches&&n.touches.length&&n.touches[0].touchType==="stylus",a1=n=>n.touches&&n.touches.length>1,r1=()=>{if(ca(document.body,X.iosfix)){const n=parseInt(document.body.style.top,10);yn(document.body,X.iosfix),document.body.style.top="",document.body.scrollTop=n*-1}},o1=()=>{const n=document.createElement("div");n.className=X["scrollbar-measure"],document.body.appendChild(n);const a=n.getBoundingClientRect().width-n.clientWidth;return document.body.removeChild(n),a};let So=null;const s1=n=>{So===null&&(document.body.scrollHeight>window.innerHeight||n==="scroll")&&(So=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${So+o1()}px`)},i1=()=>{So!==null&&(document.body.style.paddingRight=`${So}px`,So=null)};function Ow(n,a,o,l){Oc()?Ob(n,l):(GA(o).then(()=>Ob(n,l)),Nw(he)),Aw?(a.setAttribute("style","display:none !important"),a.removeAttribute("class"),a.innerHTML=""):a.remove(),Om()&&(i1(),r1(),Cw()),l1()}function l1(){yn([document.documentElement,document.body],[X.shown,X["height-auto"],X["no-backdrop"],X["toast-shown"]])}function Fa(n){n=u1(n);const a=To.swalPromiseResolve.get(this),o=c1(this);this.isAwaitingPromise?n.isDismissed||(ji(this),a(n)):o&&a(n)}const c1=n=>{const a=Te();if(!a)return!1;const o=Je.innerParams.get(n);if(!o||ca(a,o.hideClass.popup))return!1;yn(a,o.showClass.popup),De(a,o.hideClass.popup);const l=Ct();return yn(l,o.showClass.backdrop),De(l,o.hideClass.backdrop),d1(n,a,o),!0};function kw(n){const a=To.swalPromiseReject.get(this);ji(this),a&&a(n)}const ji=n=>{n.isAwaitingPromise&&(delete n.isAwaitingPromise,Je.innerParams.get(n)||n._destroy())},u1=n=>typeof n>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},n),d1=(n,a,o)=>{var l;const u=Ct(),d=pw(a);typeof o.willClose=="function"&&o.willClose(a),(l=he.eventEmitter)===null||l===void 0||l.emit("willClose",a),d?f1(n,a,u,o.returnFocus,o.didClose):Ow(n,u,o.returnFocus,o.didClose)},f1=(n,a,o,l,u)=>{he.swalCloseEventFinishedCallback=Ow.bind(null,n,o,l,u);const d=function(p){if(p.target===a){var g;(g=he.swalCloseEventFinishedCallback)===null||g===void 0||g.call(he),delete he.swalCloseEventFinishedCallback,a.removeEventListener("animationend",d),a.removeEventListener("transitionend",d)}};a.addEventListener("animationend",d),a.addEventListener("transitionend",d)},Ob=(n,a)=>{setTimeout(()=>{var o;typeof a=="function"&&a.bind(n.params)(),(o=he.eventEmitter)===null||o===void 0||o.emit("didClose"),n._destroy&&n._destroy()})},Ro=n=>{let a=Te();if(a||new lc,a=Te(),!a)return;const o=Go();Oc()?wt(qo()):m1(a,n),ft(o),a.setAttribute("data-loading","true"),a.setAttribute("aria-busy","true"),a.focus()},m1=(n,a)=>{const o=yi(),l=Go();!o||!l||(!a&&_t(Un())&&(a=Un()),ft(o),a&&(wt(a),l.setAttribute("data-button-to-replace",a.className),o.insertBefore(l,a)),De([n,o],X.loading))},p1=(n,a)=>{a.input==="select"||a.input==="radio"?y1(n,a):["text","email","number","tel","textarea"].some(o=>o===a.input)&&(jm(a.inputValue)||Sm(a.inputValue))&&(Ro(Un()),x1(n,a))},h1=(n,a)=>{const o=n.getInput();if(!o)return null;switch(a.input){case"checkbox":return g1(o);case"radio":return v1(o);case"file":return b1(o);default:return a.inputAutoTrim?o.value.trim():o.value}},g1=n=>n.checked?1:0,v1=n=>n.checked?n.value:null,b1=n=>n.files&&n.files.length?n.getAttribute("multiple")!==null?n.files:n.files[0]:null,y1=(n,a)=>{const o=Te();if(!o)return;const l=u=>{a.input==="select"?w1(o,rc(u),a):a.input==="radio"&&j1(o,rc(u),a)};jm(a.inputOptions)||Sm(a.inputOptions)?(Ro(Un()),vi(a.inputOptions).then(u=>{n.hideLoading(),l(u)})):typeof a.inputOptions=="object"?l(a.inputOptions):Cr(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof a.inputOptions}`)},x1=(n,a)=>{const o=n.getInput();o&&(wt(o),vi(a.inputValue).then(l=>{o.value=a.input==="number"?`${parseFloat(l)||0}`:`${l}`,ft(o),o.focus(),n.hideLoading()}).catch(l=>{Cr(`Error in inputValue promise: ${l}`),o.value="",ft(o),o.focus(),n.hideLoading()}))};function w1(n,a,o){const l=Ga(n,X.select);if(!l)return;const u=(d,p,g)=>{const h=document.createElement("option");h.value=g,Zt(h,p),h.selected=Tw(g,o.inputValue),d.appendChild(h)};a.forEach(d=>{const p=d[0],g=d[1];if(Array.isArray(g)){const h=document.createElement("optgroup");h.label=p,h.disabled=!1,l.appendChild(h),g.forEach(v=>u(h,v[1],v[0]))}else u(l,g,p)}),l.focus()}function j1(n,a,o){const l=Ga(n,X.radio);if(!l)return;a.forEach(d=>{const p=d[0],g=d[1],h=document.createElement("input"),v=document.createElement("label");h.type="radio",h.name=X.radio,h.value=p,Tw(p,o.inputValue)&&(h.checked=!0);const b=document.createElement("span");Zt(b,g),b.className=X.label,v.appendChild(h),v.appendChild(b),l.appendChild(v)});const u=l.querySelectorAll("input");u.length&&u[0].focus()}const rc=n=>{const a=[];return n instanceof Map?n.forEach((o,l)=>{let u=o;typeof u=="object"&&(u=rc(u)),a.push([l,u])}):Object.keys(n).forEach(o=>{let l=n[o];typeof l=="object"&&(l=rc(l)),a.push([o,l])}),a},Tw=(n,a)=>!!a&&a.toString()===n.toString(),S1=n=>{const a=Je.innerParams.get(n);n.disableButtons(),a.input?Rw(n,"confirm"):_m(n,!0)},N1=n=>{const a=Je.innerParams.get(n);n.disableButtons(),a.returnInputValueOnDeny?Rw(n,"deny"):Mm(n,!1)},E1=(n,a)=>{n.disableButtons(),a(Fo.cancel)},Rw=(n,a)=>{const o=Je.innerParams.get(n);if(!o.input){Cr(`The "input" parameter is needed to be set when using returnInputValueOn${wm(a)}`);return}const l=n.getInput(),u=h1(n,o);o.inputValidator?C1(n,u,a):l&&!l.checkValidity()?(n.enableButtons(),n.showValidationMessage(o.validationMessage||l.validationMessage)):a==="deny"?Mm(n,u):_m(n,u)},C1=(n,a,o)=>{const l=Je.innerParams.get(n);n.disableInput(),Promise.resolve().then(()=>vi(l.inputValidator(a,l.validationMessage))).then(d=>{n.enableButtons(),n.enableInput(),d?n.showValidationMessage(d):o==="deny"?Mm(n,a):_m(n,a)})},Mm=(n,a)=>{const o=Je.innerParams.get(n||void 0);o.showLoaderOnDeny&&Ro(Ar()),o.preDeny?(n.isAwaitingPromise=!0,Promise.resolve().then(()=>vi(o.preDeny(a,o.validationMessage))).then(u=>{u===!1?(n.hideLoading(),ji(n)):n.close({isDenied:!0,value:typeof u>"u"?a:u})}).catch(u=>Dw(n||void 0,u))):n.close({isDenied:!0,value:a})},kb=(n,a)=>{n.close({isConfirmed:!0,value:a})},Dw=(n,a)=>{n.rejectPromise(a)},_m=(n,a)=>{const o=Je.innerParams.get(n||void 0);o.showLoaderOnConfirm&&Ro(),o.preConfirm?(n.resetValidationMessage(),n.isAwaitingPromise=!0,Promise.resolve().then(()=>vi(o.preConfirm(a,o.validationMessage))).then(u=>{_t(Cc())||u===!1?(n.hideLoading(),ji(n)):kb(n,typeof u>"u"?a:u)}).catch(u=>Dw(n||void 0,u))):kb(n,a)};function oc(){const n=Je.innerParams.get(this);if(!n)return;const a=Je.domCache.get(this);wt(a.loader),Oc()?n.icon&&ft(qo()):A1(a),yn([a.popup,a.actions],X.loading),a.popup.removeAttribute("aria-busy"),a.popup.removeAttribute("data-loading"),a.confirmButton.disabled=!1,a.denyButton.disabled=!1,a.cancelButton.disabled=!1}const A1=n=>{const a=n.popup.getElementsByClassName(n.loader.getAttribute("data-button-to-replace"));a.length?ft(a[0],"inline-block"):eO()&&wt(n.actions)};function Lw(){const n=Je.innerParams.get(this),a=Je.domCache.get(this);return a?kc(a.popup,n.input):null}function Mw(n,a,o){const l=Je.domCache.get(n);a.forEach(u=>{l[u].disabled=o})}function _w(n,a){const o=Te();if(!(!o||!n))if(n.type==="radio"){const l=o.querySelectorAll(`[name="${X.radio}"]`);for(let u=0;u<l.length;u++)l[u].disabled=a}else n.disabled=a}function zw(){Mw(this,["confirmButton","denyButton","cancelButton"],!1)}function Bw(){Mw(this,["confirmButton","denyButton","cancelButton"],!0)}function Uw(){_w(this.getInput(),!1)}function Pw(){_w(this.getInput(),!0)}function Iw(n){const a=Je.domCache.get(this),o=Je.innerParams.get(this);Zt(a.validationMessage,n),a.validationMessage.className=X["validation-message"],o.customClass&&o.customClass.validationMessage&&De(a.validationMessage,o.customClass.validationMessage),ft(a.validationMessage);const l=this.getInput();l&&(l.setAttribute("aria-invalid","true"),l.setAttribute("aria-describedby",X["validation-message"]),fw(l),De(l,X.inputerror))}function $w(){const n=Je.domCache.get(this);n.validationMessage&&wt(n.validationMessage);const a=this.getInput();a&&(a.removeAttribute("aria-invalid"),a.removeAttribute("aria-describedby"),yn(a,X.inputerror))}const No={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},O1=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],k1={allowEnterKey:void 0},T1=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Hw=n=>Object.prototype.hasOwnProperty.call(No,n),qw=n=>O1.indexOf(n)!==-1,Jw=n=>k1[n],R1=n=>{Hw(n)||Et(`Unknown parameter "${n}"`)},D1=n=>{T1.includes(n)&&Et(`The parameter "${n}" is incompatible with toasts`)},L1=n=>{const a=Jw(n);a&&lw(n,a)},Gw=n=>{n.backdrop===!1&&n.allowOutsideClick&&Et('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),n.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(n.theme)&&Et(`Invalid theme "${n.theme}"`);for(const a in n)R1(a),n.toast&&D1(a),L1(a)};function Fw(n){const a=Ct(),o=Te(),l=Je.innerParams.get(this);if(!o||ca(o,l.hideClass.popup)){Et("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const u=M1(n),d=Object.assign({},l,u);Gw(d),a.dataset.swal2Theme=d.theme,jw(this,d),Je.innerParams.set(this,d),Object.defineProperties(this,{params:{value:Object.assign({},this.params,n),writable:!1,enumerable:!0}})}const M1=n=>{const a={};return Object.keys(n).forEach(o=>{qw(o)?a[o]=n[o]:Et(`Invalid parameter to update: ${o}`)}),a};function Vw(){const n=Je.domCache.get(this),a=Je.innerParams.get(this);if(!a){Yw(this);return}n.popup&&he.swalCloseEventFinishedCallback&&(he.swalCloseEventFinishedCallback(),delete he.swalCloseEventFinishedCallback),typeof a.didDestroy=="function"&&a.didDestroy(),he.eventEmitter.emit("didDestroy"),_1(this)}const _1=n=>{Yw(n),delete n.params,delete he.keydownHandler,delete he.keydownTarget,delete he.currentInstance},Yw=n=>{n.isAwaitingPromise?(cf(Je,n),n.isAwaitingPromise=!0):(cf(To,n),cf(Je,n),delete n.isAwaitingPromise,delete n.disableButtons,delete n.enableButtons,delete n.getInput,delete n.disableInput,delete n.enableInput,delete n.hideLoading,delete n.disableLoading,delete n.showValidationMessage,delete n.resetValidationMessage,delete n.close,delete n.closePopup,delete n.closeModal,delete n.closeToast,delete n.rejectPromise,delete n.update,delete n._destroy)},cf=(n,a)=>{for(const o in n)n[o].delete(a)};var z1=Object.freeze({__proto__:null,_destroy:Vw,close:Fa,closeModal:Fa,closePopup:Fa,closeToast:Fa,disableButtons:Bw,disableInput:Pw,disableLoading:oc,enableButtons:zw,enableInput:Uw,getInput:Lw,handleAwaitingPromise:ji,hideLoading:oc,rejectPromise:kw,resetValidationMessage:$w,showValidationMessage:Iw,update:Fw});const B1=(n,a,o)=>{n.toast?U1(n,a,o):(I1(a),$1(a),H1(n,a,o))},U1=(n,a,o)=>{a.popup.onclick=()=>{n&&(P1(n)||n.timer||n.input)||o(Fo.close)}},P1=n=>!!(n.showConfirmButton||n.showDenyButton||n.showCancelButton||n.showCloseButton);let sc=!1;const I1=n=>{n.popup.onmousedown=()=>{n.container.onmouseup=function(a){n.container.onmouseup=()=>{},a.target===n.container&&(sc=!0)}}},$1=n=>{n.container.onmousedown=a=>{a.target===n.container&&a.preventDefault(),n.popup.onmouseup=function(o){n.popup.onmouseup=()=>{},(o.target===n.popup||o.target instanceof HTMLElement&&n.popup.contains(o.target))&&(sc=!0)}}},H1=(n,a,o)=>{a.container.onclick=l=>{if(sc){sc=!1;return}l.target===a.container&&Ec(n.allowOutsideClick)&&o(Fo.backdrop)}},q1=n=>typeof n=="object"&&n.jquery,Tb=n=>n instanceof Element||q1(n),J1=n=>{const a={};return typeof n[0]=="object"&&!Tb(n[0])?Object.assign(a,n[0]):["title","html","icon"].forEach((o,l)=>{const u=n[l];typeof u=="string"||Tb(u)?a[o]=u:u!==void 0&&Cr(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof u}`)}),a};function G1(...n){return new this(...n)}function F1(n){class a extends this{_main(l,u){return super._main(l,Object.assign({},n,u))}}return a}const V1=()=>he.timeout&&he.timeout.getTimerLeft(),Xw=()=>{if(he.timeout)return nO(),he.timeout.stop()},Zw=()=>{if(he.timeout){const n=he.timeout.start();return Tm(n),n}},Y1=()=>{const n=he.timeout;return n&&(n.running?Xw():Zw())},X1=n=>{if(he.timeout){const a=he.timeout.increase(n);return Tm(a,!0),a}},Z1=()=>!!(he.timeout&&he.timeout.isRunning());let Rb=!1;const Rf={};function K1(n="data-swal-template"){Rf[n]=this,Rb||(document.body.addEventListener("click",Q1),Rb=!0)}const Q1=n=>{for(let a=n.target;a&&a!==document;a=a.parentNode)for(const o in Rf){const l=a.getAttribute(o);if(l){Rf[o].fire({template:l});return}}};class W1{constructor(){this.events={}}_getHandlersByEventName(a){return typeof this.events[a]>"u"&&(this.events[a]=[]),this.events[a]}on(a,o){const l=this._getHandlersByEventName(a);l.includes(o)||l.push(o)}once(a,o){const l=(...u)=>{this.removeListener(a,l),o.apply(this,u)};this.on(a,l)}emit(a,...o){this._getHandlersByEventName(a).forEach(l=>{try{l.apply(this,o)}catch(u){console.error(u)}})}removeListener(a,o){const l=this._getHandlersByEventName(a),u=l.indexOf(o);u>-1&&l.splice(u,1)}removeAllListeners(a){this.events[a]!==void 0&&(this.events[a].length=0)}reset(){this.events={}}}he.eventEmitter=new W1;const ek=(n,a)=>{he.eventEmitter.on(n,a)},tk=(n,a)=>{he.eventEmitter.once(n,a)},nk=(n,a)=>{if(!n){he.eventEmitter.reset();return}a?he.eventEmitter.removeListener(n,a):he.eventEmitter.removeAllListeners(n)};var ak=Object.freeze({__proto__:null,argsToParams:J1,bindClickHandler:K1,clickCancel:JO,clickConfirm:Sw,clickDeny:qO,enableLoading:Ro,fire:G1,getActions:yi,getCancelButton:Jo,getCloseButton:Cm,getConfirmButton:Un,getContainer:Ct,getDenyButton:Ar,getFocusableElements:Am,getFooter:dw,getHtmlContainer:Nm,getIcon:qo,getIconContent:XA,getImage:uw,getInputLabel:ZA,getLoader:Go,getPopup:Te,getProgressSteps:Em,getTimerLeft:V1,getTimerProgressBar:Ac,getTitle:cw,getValidationMessage:Cc,increaseTimer:X1,isDeprecatedParameter:Jw,isLoading:QA,isTimerRunning:Z1,isUpdatableParameter:qw,isValidParameter:Hw,isVisible:HO,mixin:F1,off:nk,on:ek,once:tk,resumeTimer:Zw,showLoading:Ro,stopTimer:Xw,toggleTimer:Y1});class rk{constructor(a,o){this.callback=a,this.remaining=o,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(a){const o=this.running;return o&&this.stop(),this.remaining+=a,o&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Kw=["swal-title","swal-html","swal-footer"],ok=n=>{const a=typeof n.template=="string"?document.querySelector(n.template):n.template;if(!a)return{};const o=a.content;return mk(o),Object.assign(sk(o),ik(o),lk(o),ck(o),uk(o),dk(o),fk(o,Kw))},sk=n=>{const a={};return Array.from(n.querySelectorAll("swal-param")).forEach(l=>{jr(l,["name","value"]);const u=l.getAttribute("name"),d=l.getAttribute("value");!u||!d||(typeof No[u]=="boolean"?a[u]=d!=="false":typeof No[u]=="object"?a[u]=JSON.parse(d):a[u]=d)}),a},ik=n=>{const a={};return Array.from(n.querySelectorAll("swal-function-param")).forEach(l=>{const u=l.getAttribute("name"),d=l.getAttribute("value");!u||!d||(a[u]=new Function(`return ${d}`)())}),a},lk=n=>{const a={};return Array.from(n.querySelectorAll("swal-button")).forEach(l=>{jr(l,["type","color","aria-label"]);const u=l.getAttribute("type");!u||!["confirm","cancel","deny"].includes(u)||(a[`${u}ButtonText`]=l.innerHTML,a[`show${wm(u)}Button`]=!0,l.hasAttribute("color")&&(a[`${u}ButtonColor`]=l.getAttribute("color")),l.hasAttribute("aria-label")&&(a[`${u}ButtonAriaLabel`]=l.getAttribute("aria-label")))}),a},ck=n=>{const a={},o=n.querySelector("swal-image");return o&&(jr(o,["src","width","height","alt"]),o.hasAttribute("src")&&(a.imageUrl=o.getAttribute("src")||void 0),o.hasAttribute("width")&&(a.imageWidth=o.getAttribute("width")||void 0),o.hasAttribute("height")&&(a.imageHeight=o.getAttribute("height")||void 0),o.hasAttribute("alt")&&(a.imageAlt=o.getAttribute("alt")||void 0)),a},uk=n=>{const a={},o=n.querySelector("swal-icon");return o&&(jr(o,["type","color"]),o.hasAttribute("type")&&(a.icon=o.getAttribute("type")),o.hasAttribute("color")&&(a.iconColor=o.getAttribute("color")),a.iconHtml=o.innerHTML),a},dk=n=>{const a={},o=n.querySelector("swal-input");o&&(jr(o,["type","label","placeholder","value"]),a.input=o.getAttribute("type")||"text",o.hasAttribute("label")&&(a.inputLabel=o.getAttribute("label")),o.hasAttribute("placeholder")&&(a.inputPlaceholder=o.getAttribute("placeholder")),o.hasAttribute("value")&&(a.inputValue=o.getAttribute("value")));const l=Array.from(n.querySelectorAll("swal-input-option"));return l.length&&(a.inputOptions={},l.forEach(u=>{jr(u,["value"]);const d=u.getAttribute("value");if(!d)return;const p=u.innerHTML;a.inputOptions[d]=p})),a},fk=(n,a)=>{const o={};for(const l in a){const u=a[l],d=n.querySelector(u);d&&(jr(d,[]),o[u.replace(/^swal-/,"")]=d.innerHTML.trim())}return o},mk=n=>{const a=Kw.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(n.children).forEach(o=>{const l=o.tagName.toLowerCase();a.includes(l)||Et(`Unrecognized element <${l}>`)})},jr=(n,a)=>{Array.from(n.attributes).forEach(o=>{a.indexOf(o.name)===-1&&Et([`Unrecognized attribute "${o.name}" on <${n.tagName.toLowerCase()}>.`,`${a.length?`Allowed attributes are: ${a.join(", ")}`:"To set the value, use HTML within the element."}`])})},Qw=10,pk=n=>{const a=Ct(),o=Te();typeof n.willOpen=="function"&&n.willOpen(o),he.eventEmitter.emit("willOpen",o);const u=window.getComputedStyle(document.body).overflowY;vk(a,o,n),setTimeout(()=>{hk(a,o)},Qw),Om()&&(gk(a,n.scrollbarPadding,u),QO()),!Oc()&&!he.previousActiveElement&&(he.previousActiveElement=document.activeElement),typeof n.didOpen=="function"&&setTimeout(()=>n.didOpen(o)),he.eventEmitter.emit("didOpen",o),yn(a,X["no-transition"])},ic=n=>{const a=Te();if(n.target!==a)return;const o=Ct();a.removeEventListener("animationend",ic),a.removeEventListener("transitionend",ic),o.style.overflowY="auto"},hk=(n,a)=>{pw(a)?(n.style.overflowY="hidden",a.addEventListener("animationend",ic),a.addEventListener("transitionend",ic)):n.style.overflowY="auto"},gk=(n,a,o)=>{WO(),a&&o!=="hidden"&&s1(o),setTimeout(()=>{n.scrollTop=0})},vk=(n,a,o)=>{De(n,o.showClass.backdrop),o.animation?(a.style.setProperty("opacity","0","important"),ft(a,"grid"),setTimeout(()=>{De(a,o.showClass.popup),a.style.removeProperty("opacity")},Qw)):ft(a,"grid"),De([document.documentElement,document.body],X.shown),o.heightAuto&&o.backdrop&&!o.toast&&De([document.documentElement,document.body],X["height-auto"])};var Db={email:(n,a)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(n)?Promise.resolve():Promise.resolve(a||"Invalid email address"),url:(n,a)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(n)?Promise.resolve():Promise.resolve(a||"Invalid URL")};function bk(n){n.inputValidator||(n.input==="email"&&(n.inputValidator=Db.email),n.input==="url"&&(n.inputValidator=Db.url))}function yk(n){(!n.target||typeof n.target=="string"&&!document.querySelector(n.target)||typeof n.target!="string"&&!n.target.appendChild)&&(Et('Target parameter is not valid, defaulting to "body"'),n.target="body")}function xk(n){bk(n),n.showLoaderOnConfirm&&!n.preConfirm&&Et(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),yk(n),typeof n.title=="string"&&(n.title=n.title.split(`
`).join("<br />")),uO(n)}let Mn;var Hl=new WeakMap;class nt{constructor(...a){if($A(this,Hl,void 0),typeof window>"u")return;Mn=this;const o=Object.freeze(this.constructor.argsToParams(a));this.params=o,this.isAwaitingPromise=!1,HA(Hl,this,this._main(Mn.params))}_main(a,o={}){if(Gw(Object.assign({},o,a)),he.currentInstance){const d=To.swalPromiseResolve.get(he.currentInstance),{isAwaitingPromise:p}=he.currentInstance;he.currentInstance._destroy(),p||d({isDismissed:!0}),Om()&&Cw()}he.currentInstance=Mn;const l=jk(a,o);xk(l),Object.freeze(l),he.timeout&&(he.timeout.stop(),delete he.timeout),clearTimeout(he.restoreFocusTimeout);const u=Sk(Mn);return jw(Mn,l),Je.innerParams.set(Mn,l),wk(Mn,u,l)}then(a){return jb(Hl,this).then(a)}finally(a){return jb(Hl,this).finally(a)}}const wk=(n,a,o)=>new Promise((l,u)=>{const d=p=>{n.close({isDismissed:!0,dismiss:p})};To.swalPromiseResolve.set(n,l),To.swalPromiseReject.set(n,u),a.confirmButton.onclick=()=>{S1(n)},a.denyButton.onclick=()=>{N1(n)},a.cancelButton.onclick=()=>{E1(n,d)},a.closeButton.onclick=()=>{d(Fo.close)},B1(o,a,d),GO(he,o,d),p1(n,o),pk(o),Nk(he,o,d),Ek(a,o),setTimeout(()=>{a.container.scrollTop=0})}),jk=(n,a)=>{const o=ok(n),l=Object.assign({},No,a,o,n);return l.showClass=Object.assign({},No.showClass,l.showClass),l.hideClass=Object.assign({},No.hideClass,l.hideClass),l.animation===!1&&(l.showClass={backdrop:"swal2-noanimation"},l.hideClass={}),l},Sk=n=>{const a={popup:Te(),container:Ct(),actions:yi(),confirmButton:Un(),denyButton:Ar(),cancelButton:Jo(),loader:Go(),closeButton:Cm(),validationMessage:Cc(),progressSteps:Em()};return Je.domCache.set(n,a),a},Nk=(n,a,o)=>{const l=Ac();wt(l),a.timer&&(n.timeout=new rk(()=>{o("timer"),delete n.timeout},a.timer),a.timerProgressBar&&(ft(l),Yt(l,a,"timerProgressBar"),setTimeout(()=>{n.timeout&&n.timeout.running&&Tm(a.timer)})))},Ek=(n,a)=>{if(!a.toast){if(!Ec(a.allowEnterKey)){lw("allowEnterKey"),Ok();return}Ck(n)||Ak(n,a)||Tf(-1,1)}},Ck=n=>{const a=Array.from(n.popup.querySelectorAll("[autofocus]"));for(const o of a)if(o instanceof HTMLElement&&_t(o))return o.focus(),!0;return!1},Ak=(n,a)=>a.focusDeny&&_t(n.denyButton)?(n.denyButton.focus(),!0):a.focusCancel&&_t(n.cancelButton)?(n.cancelButton.focus(),!0):a.focusConfirm&&_t(n.confirmButton)?(n.confirmButton.focus(),!0):!1,Ok=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};nt.prototype.disableButtons=Bw;nt.prototype.enableButtons=zw;nt.prototype.getInput=Lw;nt.prototype.disableInput=Pw;nt.prototype.enableInput=Uw;nt.prototype.hideLoading=oc;nt.prototype.disableLoading=oc;nt.prototype.showValidationMessage=Iw;nt.prototype.resetValidationMessage=$w;nt.prototype.close=Fa;nt.prototype.closePopup=Fa;nt.prototype.closeModal=Fa;nt.prototype.closeToast=Fa;nt.prototype.rejectPromise=kw;nt.prototype.update=Fw;nt.prototype._destroy=Vw;Object.assign(nt,ak);Object.keys(z1).forEach(n=>{nt[n]=function(...a){return Mn&&Mn[n]?Mn[n](...a):null}});nt.DismissReason=Fo;nt.version="11.23.0";const lc=nt;lc.default=lc;typeof document<"u"&&(function(n,a){var o=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(o),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=a);else try{o.innerHTML=a}catch{o.innerText=a}})(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');async function Ww({titulo:n="¿Estás seguro?",mensaje:a="Confirma para continuar.",icono:o="warning",textoConfirmar:l="Sí, continuar",textoCancelar:u="Cancelar"}){return(await lc.fire({title:n,text:a,icon:o,showCancelButton:!0,confirmButtonText:l,cancelButtonText:u,reverseButtons:!0,confirmButtonColor:"#0d6efd",cancelButtonColor:"#6c757d",returnFocus:!1,heightAuto:!1,backdrop:!0,didOpen:()=>{const p=document.querySelector('.modal.show[aria-hidden="true"]');p&&p.removeAttribute("aria-hidden")},willClose:()=>{document.querySelector(".modal.show")}})).isConfirmed}const ql="auth_session";function kk(n){for(n=n.replace(/-/g,"+").replace(/_/g,"/");n.length%4;)n+="=";return atob(n)}const e0=m.createContext(null);function Tk({children:n}){const{activeBackend:a}=dc(),o=a?.url||null,l=On(),{showToast:u}=$n(),[d,p]=m.useState(!0),[g,h]=m.useState(null),[v,b]=m.useState(null),[x,j]=m.useState(!1),N=m.useRef(x),C=m.useRef(o);m.useEffect(()=>{C.current=o},[o]);const O=m.useCallback(T=>{Ze("logout",T||{mensaje:"El usuario cerró la sesión voluntariamente."}).catch(z=>console.error("Error silencioso en log de logout:",z.message)),localStorage.removeItem(ql),h(null),b(null),j(!1),window.google?.accounts?.id&&window.google.accounts.id.disableAutoSelect(),window.googleInitialized=!1,window.location.pathname!=="/"&&l("/",{replace:!0});const B=T?.mensaje?.toLowerCase().includes("expir")?"⚠️ Tu sesión ha expirado":"👋 Sesión cerrada correctamente";u(B,"info",3e3,"Autenticación")},[l,u]),S=m.useCallback(async()=>{const T=C.current;if(!g||!T)return!1;try{const B=await(await fetch(`${T}?accion=ping&token=${g}`)).json();return B&&(B.status==="ok"||B.autorizado)?(b(z=>({...z,correo:B.correo,nombre:B.nombre,picture:B.picture,rol:B.rol,permisos:B.permisos})),j(!0),!0):(x&&console.log(B.mensaje||"⚠️ Tu sesión ha expirado."),O({mensaje:"Sesión expirada detectada por verificación de Ping."}),!1)}catch(L){return console.log("auth_verify_err:",L.message),u("⚠️ Error de conexión. No se pudo verificar la sesión.","warning",4e3,"Autenticación"),O({mensaje:`Cierre forzado por error de red en verificación de Ping: ${L.message}`}),!1}},[g,O,u,x]),k=m.useCallback(async(T,L=()=>{})=>{const B=(_,U="danger")=>{u(_,U,1e4,"Autenticación"),O({mensaje:`Fallo en intento de login / Intercambio de tokens: ${_}`}),L()},z=C.current;if(!z){if(!await Ww({titulo:"Backend no configurado",mensaje:"No hay un backend activo para realizar la autenticación. Dirígete a la opción «Más», en la parte superior derecha, o al menú hamburguesa y selecciona «Configurar Backend».",textoConfirmar:"✅ Abrir Administración de Backends",textoCancelar:"❌ Cancelar",icono:"info"})){u("❌ Operación cancelada por el usuario","warning",4e3,"Autenticación"),L();return}window.dispatchEvent(new CustomEvent("backend:open-config")),L();return}try{const U=await(await fetch(z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accion:"googleLogin",googleToken:T})})).json();if(!U||U.status!=="ok"||!U.token||!U.user){B(U.mensaje||"❌ Error de autenticación desde el backend");return}u(`👋 Bienvenido ${U.user.nombre}`,"success",3e3,"Autenticación"),h(U.token),b(U.user),j(!0),localStorage.setItem(ql,JSON.stringify({token:U.token,user:U.user,backendUrl:C.current,timestamp:Date.now()})),L()}catch(_){console.error("Error en login (intercambio de token):",_),B("❌ Error de conexión con el backend")}},[u,O]);m.useEffect(()=>{const T=localStorage.getItem(ql);if(T)try{const L=JSON.parse(T);L.token&&(h(L.token),b(L.user||null),j(!0))}catch(L){console.error("Error parseando sesión guardada:",L),localStorage.removeItem(ql)}p(!1)},[]),m.useEffect(()=>{N.current=x},[x]),m.useEffect(()=>{if(!g||!o)return;N.current||S();const T=setInterval(S,300*1e3),L=setInterval(()=>{try{const B=g.split(".")[0],z=kk(B);JSON.parse(z).exp*1e3<Date.now()&&(console.warn("⚠️ Token expirado localmente."),O({mensaje:"Sesión expirada automáticamente por tiempo límite del token (JWT)."}))}catch(B){console.error("Error verificando expiración local del token propio:",B),O({mensaje:"Sesión cerrada por error al parsear expiración del token."})}},60*1e3);return()=>{clearInterval(T),clearInterval(L)}},[g,o,S,O]),m.useEffect(()=>{function T(L){const B=L?.detail?.message||"⚠️ Tu sesión ha expirado. Inicia sesión nuevamente.";console.warn("🟡 Evento auth:required recibido:",B),x&&O({mensaje:`Sesión rechazada por el servidor (${B}).`})}return window.addEventListener("auth:required",T),()=>window.removeEventListener("auth:required",T)},[x,O]);const E={authToken:g,user:v,authenticated:x,loading:d,login:k,logout:O,verifyToken:S};return s.jsx(e0.Provider,{value:E,children:n})}function Si(){return m.useContext(e0)}const t0=m.createContext(null),uf=new Date().getFullYear()-1;function Rk({children:n}){const{showToast:a}=$n(),[o,l]=m.useState([]),[u,d]=m.useState(!1),p=m.useCallback(async k=>{try{const E=await hn("obtenerArchivosPorAnio",{anio:k});return E&&E.status==="ok"?E.archivos||[]:E.archivos||[]}catch(E){return console.error("❌ Error al obtener archivos por año:",E.message),[]}finally{}},[]),g=m.useCallback(async()=>{d(!0);try{const k=await hn("obtenerProductos");if(k&&k.status==="ok")return k.data||[]}catch(k){return console.error("❌ Error al obtener productos",k.message),[]}finally{d(!1)}},[]),h=m.useCallback(async()=>{try{d(!0);const[k,E]=await Promise.all([hn("obtenerProductos"),hn("obtenerArchivosPorAnio",{anio:String(uf)})]),T=k?.data||[],L=E?.archivos||[],z=[...T.map(_=>{const U=L.find(Y=>String(Y.productoId)===String(_.id)&&String(Y.anio)===String(uf))||null;return{..._,tieneArchivo:!!U,archivoInfo:U}})].sort((_,U)=>!_.tieneArchivo&&U.tieneArchivo?-1:_.tieneArchivo&&!U.tieneArchivo?1:0);l(z)}catch(k){console.error("❌ Error refreshProductos:",k.message)}finally{d(!1)}},[]),v=m.useCallback(async k=>{d(!0);try{const E=await Ze("actualizarProducto",k),T=E.resultados[0];return T.status==="ok"?(await h(),{ok:!0,mensaje:E.mensaje||"Producto actualizado correctamente",datos:E.producto}):T.status==="warning"?{ok:!1,mensaje:T.mensaje||"⚠️ Ya existe este producto",data:E}:{ok:!1,mensaje:E?.mensaje||"No se pudo actualizar el producto"}}catch(E){return console.error("❌ actualizarProducto:",E.message),{ok:!1,mensaje:"Error al actualizar el producto"}}finally{d(!1)}},[h]),b=k=>new Promise((E,T)=>{const L=new FileReader;L.readAsDataURL(k),L.onload=()=>E(L.result.split(",")[1]),L.onerror=B=>T(B)}),x=m.useCallback(async({nombre:k,descripcion:E,entidad:T,tipo:L})=>{d(!0);try{const B=await Ze("agregarProducto",{nombre:k,descripcion:E,entidad:T,tipo:L}),z=B.resultados[0];return z.status==="ok"?(await h(),{ok:!0,mensaje:"✅ Producto agregado con éxito",data:B}):z.status==="warning"?{ok:!1,mensaje:z.mensaje||"⚠️ Ya existe este producto",data:B}:{ok:!1,mensaje:B.mensaje||"Error al agregar producto",data:B}}catch(B){return console.error("❌ agregarProducto:",B.message),{ok:!1,mensaje:"Error al agregar producto"}}finally{d(!1)}},[h]),j=m.useCallback(async k=>{d(!0);try{const E=await Ze("eliminarProducto",{id:k});return E.status==="ok"?(a("✅ Producto eliminado correctamente","success",3e3,"ProductosContext"),await h()):a(`❌ Error al eliminar: ${E.mensaje||"sin detalle"}`,"error",3e3,"ProductosContext"),{ok:!1,mensaje:E.mensaje||"❌ Error al eliminar producto",data:E}}catch(E){return a("❌ Error eliminando producto","error",3e3,"ProductosContext"),console.error("❌ eliminarProducto:",E.message),{ok:!1,mensaje:"❌ Error al eliminar producto"}}finally{d(!1)}},[h,a]),N=m.useCallback(async(k,E,T,L=!1,B="")=>{if(!T)return{ok:!1,mensaje:"Seleccione un archivo"};d(!0);try{const z=await b(T),_={anio:E,productosId:k,usarExistente:L,nombreProducto:B,archivo:{nombre:T.name,base64:z,tipo:T.type}},U=await Ze("subirArchivoProducto",_);return U.status==="error_validacion"&&(console.log("data",U),a(`${U.message}`,"info",15e3,"ProductosContext")),U.status==="ok"?(await h(),{ok:!0,mensaje:"Archivo subido correctamente",data:U}):U.status==="archivo_existente"?{ok:!1,mensaje:U.message||"⚠️ Ya existe un archivo para este producto"}:U.status==="exists"?{ok:!1,existe:!0,mensaje:U.message||"⚠️ Ya existe un archivo con este nombre. ¿Desea usar el existente?",data:U}:{ok:!1,mensaje:U.mensaje||"Error al subir archivo",data:U}}catch(z){const _=z.message.includes("500")?"Error 500: El archivo es demasiado pesado para el servidor de Google.":"Error al conectar con el servidor.";return a(`❌ ${_}`,"error",15e3,"ProductosContext"),{ok:!1,mensaje:_}}finally{d(!1)}},[h]),C=m.useCallback(async(k,E,T,L=!1,B="",z=!1,_=!1)=>{if(!T)return{ok:!1,mensaje:"Seleccione un archivo para reemplazar"};d(!0);try{const U=await b(T),Y={productoId:k,anio:String(E),replaceOnlyThis:L,nombreProducto:B,usarExistente:z,forzarTodosLosAnios:_,archivo:{nombre:T.name,base64:U,tipo:T.type}},W=await Ze("remplazarArchivoProducto",Y);return W.status==="archivo_usado_en_otros_anios"?{ok:!1,requiereConfirmacion:!0,anios:W.aniosDetectados||[],mensaje:W.message||"El archivo también está siendo usado en otros años.",data:W}:W.status==="ok"?(await h(),{ok:!0,mensaje:W.mensaje||"Archivo reemplazado correctamente",data:W}):W.status==="exists"?{ok:!1,existe:!0,mensaje:W.message||"⚠️ Ya existe un archivo con este nombre. ¿Desea usar el existente?",data:W}:{ok:!1,mensaje:W.message||"No se pudo reemplazar el archivo",data:W}}catch(U){const Y=U.message?.includes("500")?"Error 500: El archivo es demasiado pesado para el servidor.":"Error al conectar con el servidor.";return a(`❌ ${Y}`,"error",15e3,"ProductosContext"),{ok:!1,mensaje:Y}}finally{d(!1)}},[h,a]),O=m.useCallback(async k=>{try{const E=await Ze("eliminarRegistroProducto",{id:k});if(E?.status==="ok"){const{eliminado:T}=E;return a(`✅ ${E.mensaje}`,"success",3e3,"ProductoContext"),{ok:!0,eliminado:T}}return a(`❌ ${E?.mensaje||"No se pudo eliminar el registro"}`,"error",3e3,"ProductoContext"),{ok:!1}}catch(E){return console.error(E),a("❌ Error eliminando registro","error",3e3,"ProductoContext"),{ok:!1}}finally{}},[a]),S=m.useCallback(async k=>{try{const E=await Ze("editarRegistroProducto",k);return E?.status==="ok"?(a(`✅ ${E.mensaje}`,"success",3e3,"ProductosContext"),{ok:!0,registro:E.registro}):(a(`❌ ${E?.mensaje||"No se pudo editar el registro"}`,"error",3e3,"ProductosContext"),{ok:!1})}catch(E){return console.error(E),a("❌ Error editando el registro","error",3e3,"ProductosContext"),{ok:!1}}finally{}},[a]);return s.jsx(t0.Provider,{value:{registroProductos:o,getProductos:g,refreshProductos:h,anioAnterior:uf,subirArchivo:N,remplaceArchivo:C,fetchArchivosPorAnio:p,addProducto:x,updateProducto:v,deleteProducto:j,deleteRegistroProducto:O,editRegistroProducto:S,loading:u},children:n})}function Vo(){const n=m.useContext(t0);if(!n)throw new Error("useProductos debe usarse dentro de <ProductosProvider>");return n}const n0=m.createContext();function Dk({children:n}){const{showToast:a}=$n(),[o,l]=m.useState(!1),u=m.useCallback(async v=>{l(!0);try{const b=await hn("obtenerFacturasPorAnio",{anio:v});return b&&b.status==="ok"?b.data||[]:b.data||[]}catch(b){return console.error("❌ Error al obtener facturas por año:",b.message),[]}finally{l(!1)}},[]),d=v=>new Promise((b,x)=>{const j=new FileReader;j.readAsDataURL(v),j.onload=()=>b(j.result.split(",")[1]),j.onerror=N=>x(N)}),p=m.useCallback(async({anio:v,entidad:b,descripcion:x,valor:j,metodoPago:N,file:C})=>{if(!C)return{ok:!1,mensaje:"Debe seleccionar un archivo context linea 36"};l(!0);try{const O=await d(C),S={anio:v,entidad:b,descripcion:x,valor:j,metodoPago:N,archivo:{nombre:C.name,base64:O,tipo:C.type}},k=await Ze("subirArchivoFacturas",S);return k.status==="error_validacion"&&(console.log("data",k),a(`${k.message}`,"info",15e3,"FacturasContext")),k.status==="ok"?{ok:!0,mensaje:"✅ Factura subida correctamente",data:k}:{ok:!1,mensaje:k.message||"Error al subir la factura",data:k}}catch(O){const S=O.message.includes("500")?"Error 500: El archivo es demasiado pesado para el servidor de Google.":"Error al conectar con el servidor.";return a(`❌ ${S}`,"error",15e3,"FacturasContext"),{ok:!1,mensaje:S}}finally{l(!1)}},[a]),g=m.useCallback(async v=>{l(!0);try{const b=await Ze("actualizarFactura",v);return b.status==="ok"?{ok:!0,mensaje:"✅ Factura actualizada correctamente",data:b}:{ok:!1,mensaje:b.mensaje||"No se pudo actualizar la factura"}}catch(b){return console.error("❌ actualizarFactura:",b.message),{ok:!1,mensaje:"Error al actualizar la factura"}}finally{l(!1)}},[]),h=m.useCallback(async v=>{l(!0);try{const b=await Ze("eliminarFactura",{registroId:v});return b.status==="ok"?{ok:!0,mensaje:"✅ Factura eliminada correctamente",data:b}:{ok:!1,mensaje:b.mensaje||"Error al eliminar la factura"}}catch(b){return console.error("❌ eliminarFactura:",b.message),{ok:!1,mensaje:"Error al eliminar la factura"}}finally{l(!1)}},[]);return s.jsx(n0.Provider,{value:{loading:o,fetchFacturasPorAnio:u,subirFactura:p,updateFactura:g,deleteFactura:h},children:n})}function zm(){return m.useContext(n0)}const a0=m.createContext(null);function Lk({children:n}){const{showToast:a}=$n(),[o,l]=m.useState([]),[u,d]=m.useState([]),[p,g]=m.useState(!1),h=m.useCallback(async()=>{g(!0);try{const C=await hn("obtenerDatosTributarios");if(C.status==="ok"){const O=(C.data||[]).sort((S,k)=>S.orden-k.orden);return l(O),d(JSON.parse(JSON.stringify(O))),{ok:!0}}return a(C.mensaje||"Error al obtener datos","error"),{ok:!1}}catch(C){return console.error("❌ obtenerDatosTributarios error:",C),a("Error de conexión al cargar datos","error"),{ok:!1}}finally{g(!1)}},[a]),v=m.useCallback(async()=>{g(!0);try{const C=await Ze("actualizarDatosTributarios",{data:o});return C.status==="ok"?(d(JSON.parse(JSON.stringify(o))),a("✅ Todos los cambios han sido guardados","success"),{ok:!0}):(a("❌ "+C.mensaje,"error"),{ok:!1})}catch{return a("❌ Error al sincronizar con el servidor","error"),{ok:!1}}finally{g(!1)}},[o,a]),b=m.useCallback(()=>{l(JSON.parse(JSON.stringify(u))),a("Cambios descartados","info")},[u,a]),x=m.useMemo(()=>JSON.stringify(o)!==JSON.stringify(u),[o,u]),j=m.useMemo(()=>o.filter(C=>C.importante===!0||C.importante===1).length,[o]),N=m.useCallback(()=>{l([]),d([])},[]);return s.jsx(a0.Provider,{value:{datos:o,setDatos:l,loading:p,getDatos:h,saveChanges:v,discardChanges:b,isDirty:x,conteoImportantes:j,clearDatos:N},children:n})}const r0=()=>{const n=m.useContext(a0);if(!n)throw new Error("useDatosTributarios debe usarse dentro de DatosTributariosProvider");return n},o0=m.createContext(null);function Mk({children:n}){const{showToast:a}=$n(),[o,l]=m.useState([]),[u,d]=m.useState(!1),p=m.useCallback(async()=>{d(!0);try{const h=await hn("obtenerLogs");h.status==="ok"?l(h.logs||[]):a(h.mensaje||"⚠️ No se pudieron cargar los logs.","warning",4e3,"LogsAdmin")}catch(h){console.error("❌ obtenerLogs error:",h),a("❌ Error de conexión al cargar logs.","danger",4e3,"LogsAdmin")}finally{d(!1)}},[a]),g=m.useCallback(async()=>{d(!0);try{const h=await Ze("limpiarLogsAntiguos");h.status==="ok"?(a(h.mensaje||"🧹 Logs limpiados correctamente","success",3e3,"LogsAdmin"),await p()):a(h.mensaje||"⚠️ No se pudo limpiar logs","warning",4e3,"LogsAdmin")}catch(h){console.error("❌ clearLogs error:",h),a("❌ Error al limpiar logs","danger",4e3,"LogsAdmin")}finally{d(!1)}},[a,p]);return s.jsx(o0.Provider,{value:{logs:o,loading:u,getDatos:p,clearDatos:g},children:n})}function _k(){const n=m.useContext(o0);if(!n)throw new Error("useLogsAdmin debe usarse dentro de <LogsAdminProvider>");return n}const s0=m.createContext(),zk=({children:n})=>{const{showToast:a}=$n(),[o,l]=m.useState([]),[u,d]=m.useState(!1),[p,g]=m.useState([]),[h,v]=m.useState(!1),b=m.useCallback(async()=>{try{const S=await hn("obtenerRoles");S.status==="ok"?(g(S.data||[]),v(!1)):(g([]),v(!0),console.warn(S.mensaje,"UsuariosAdmin"))}catch(S){console.error("❌ Error al cargar roles:",S),g([]),v(!0),a("❌ Error de conexión al obtener roles.","danger",4e3,"UsuariosAdmin")}},[a]),x=m.useCallback(async()=>{d(!0);try{const S=await hn("obtenerUsuarios");S.status==="ok"?l(S.datos||[]):console.warn(S.mensaje,"UsuariosAdmin")}catch(S){console.error("❌ obtenerUsuarios error:",S)}finally{d(!1)}},[]),j=async S=>{if(!S?.correo||!S?.nombre||!S?.rol)return a("⚠️ Todos los campos son obligatorios (correo, nombre, rol).","warning",4e3,"UsuariosAdmin");d(!0);try{const k={correo:S.correo,nombre:S.nombre,rol:S.rol},E=await Ze("agregarUsuario",k);E.status==="ok"?(l(E.datos||[]),a(E.mensaje||"✅ Usuario creado correctamente.","success",2e3,"UsuariosAdmin")):a(E.mensaje||"⚠️ No se pudo crear el usuario.","warning",4e3,"UsuariosAdmin")}catch(k){console.error("❌ agregarUsuario error:",k);const E=k.mensaje||k.message||"Error inesperado al procesar la solicitud";a(E,"danger",5e3,"UsuariosAdmin")}finally{d(!1)}},N=async(S,k)=>{d(!0);try{const E={correo:S,...k},T=await Ze("actualizarUsuario",E);T.status==="ok"?(l(T.datos||[]),a(T.mensaje||`✅ Usuario "${S}" actualizado correctamente.`,"success",2e3,"UsuariosAdmin")):a(T.mensaje||`⚠️ No se pudo actualizar el usuario "${S}".`,"warning",4e3,"UsuariosAdmin")}catch(E){console.error("❌ actualizarUsuario error:",E),a(`❌ Error de conexión al actualizar usuario "${S}".`,"danger",4e3,"UsuariosAdmin")}finally{d(!1)}},C=async(S,k,E)=>{d(!0);try{const L=await Ze("toggleUsuarioActivo",{correo:S,activo:k,nombre:E});L.status==="ok"?(l(L.datos||[]),a(L.mensaje||`🔁 Estado de "${S}" actualizado.`,"success",2e3,"UsuariosAdmin")):a(L.mensaje||`⚠️ No se pudo cambiar el estado de "${S}".`,"warning",4e3,"UsuariosAdmin")}catch(T){console.error("❌ toggleUsuarioActivo error:",T),a(`❌ Error al cambiar el estado de "${S}".`,"danger",4e3,"UsuariosAdmin")}finally{d(!1)}},O=async S=>{d(!0);try{const E=await Ze("eliminarUsuario",{correo:S});E.status==="ok"?(l(E.datos||[]),a(E.mensaje||`🗑️ Usuario "${S}" eliminado correctamente.`,"success",3e3,"UsuariosAdmin")):a(E.mensaje||`⚠️ No se pudo eliminar el usuario "${S}".`,"warning",4e3,"UsuariosAdmin")}catch(k){console.error("❌ eliminarUsuario error:",k),a(`❌ Error al eliminar el usuario "${S}" "${k}".`,"danger",1e4,"UsuariosAdmin")}finally{d(!1)}};return m.useEffect(()=>{_o()&&(b(),x())},[b,x]),s.jsx(s0.Provider,{value:{usuarios:o,rolesDisponibles:p,rolesErrorPermisos:h,loading:u,getDatos:x,addDato:j,updateDato:N,toggleActivo:C,deleteDato:O},children:n})},Bk=()=>m.useContext(s0),i0=m.createContext(),Uk=({children:n})=>{const{showToast:a}=$n(),[o,l]=m.useState(null),[u,d]=m.useState(null),[p,g]=m.useState(!1),h=On(),v=m.useCallback(()=>{l(null)},[]),b=m.useCallback(async()=>{g(!0);try{const C=await hn("obtenerConfig");C.status==="ok"&&(l(C.datos||C.data||{}),d(C.version||{}))}catch(C){console.error("❌ obtenerConfig error:",C),a("❌ Error al obtener configuración del servidor","danger",4e3,"ConfigAdmin")}finally{g(!1)}},[a]),x=async C=>{g(!0);try{const O=await Ze("actualizarConfig",C);O.status==="ok"?(l(O.datos||C),a(O.mensaje||"✅ Configuración actualizada correctamente","success",2e3,"ConfigAdmin")):a(O.mensaje||"⚠️ No se pudo actualizar la configuración","warning",4e3,"ConfigAdmin")}catch(O){console.error("❌ actualizarConfig error:",O),a("❌ Error de conexión con el servidor al actualizar configuración","danger",4e3,"ConfigAdmin")}finally{g(!1)}},j=async(C,O=!1)=>{g(!0);try{const S=await Ze("inicializarSistemaForzado",{confirmar:C,borrarCarpetas:O});return S.status==="ok"?(a(S.mensaje||"✅ Sistema reinicializado correctamente","success",3e3,"ConfigAdmin"),h("/productos")):S.status==="sin_permiso"?a(S.mensaje||"⛔ No tiene permisos para reinicializar","warning",4e3,"ConfigAdmin"):a(S.mensaje||"⚠️ Error al reinicializar el sistema","warning",4e3,"ConfigAdmin"),S}catch(S){return console.error("❌ reinicializarSistemaForzado error:",S),a(`❌ Reinicializar Sistema ${S}`,"danger",2e4,"ConfigAdmin"),{status:"error",mensaje:S.message}}finally{g(!1)}},N=async()=>{g(!0);try{const C=await Ze("generarBackupZIP",{});if(C.status==="ok"&&C.blob){a("✅ Backup generado correctamente","success",3e3,"ConfigAdmin"),console.log(C.blob);const O=URL.createObjectURL(C.blob),S=document.createElement("a");S.href=O,S.download=C.nombreArchivo||"Backup_Declaracion.zip",document.body.appendChild(S),S.click(),document.body.removeChild(S),URL.revokeObjectURL(O)}else a(C.mensaje||"⚠️ No se pudo generar el backup","warning",4e3,"ConfigAdmin")}catch(C){console.error("❌ generarBackup error:",C),a("❌ Error al generar el backup","danger",4e3,"ConfigAdmin")}finally{g(!1)}};return m.useEffect(()=>{_o()&&b()},[b]),s.jsx(i0.Provider,{value:{config:o,clearConfig:v,loading:p,getConfig:b,versionBackend:u,updateConfig:x,reinicializarSistemaForzado:j,generarBackup:N},children:n})},Pk=()=>m.useContext(i0),l0=m.createContext(),Ik=({children:n})=>{const{showToast:a}=$n(),[o,l]=m.useState([]),[u,d]=m.useState([]),[p,g]=m.useState(!1),h=m.useCallback(async()=>{try{const N=await hn("listarFuncionesLogicaNegocio");N.status==="ok"&&d(N.datos||[])}catch(N){console.error("❌ Error al Cargar Funciones",N),a("❌ Error al Cargar Funciones","danger",4e3,"RolesAdmin")}},[a]),v=m.useCallback(async()=>{g(!0);try{const N=await hn("obtenerRoles");N.status==="ok"?l(N.data||[]):a(N.mensaje||"⚠️ No se pudieron cargar los roles.","warning",4e3,"RolesAdmin")}catch(N){console.error("❌ obtenerRoles error:",N),a("❌ Error de conexión con el servidor al cargar roles.","danger",4e3,"RolesAdmin")}finally{g(!1)}},[a]),b=async(N,C)=>{if(!N)return a("⚠️ Debe ingresar un nombre para el rol","warning",4e3,"AdminRoles");g(!0);try{const S=await Ze("agregarRol",{rol:N,permisos:C||[]});S.status==="ok"?(a(S.mensaje||"✅ Rol creado correctamente.","success",2e3,"RolesAdmin"),l(S.datos||[])):a(S.mensaje||"⚠️ No se pudo crear el rol.","warning",4e3,"RolesAdmin")}catch(O){console.error("❌ agregarRol error:",O),a("❌ Error de conexión con el servidor al crear el rol.","danger",4e3,"RolesAdmin")}finally{g(!1)}},x=async(N,C)=>{g(!0);try{const S=await Ze("actualizarRol",{rol:N,permisos:C});S.status==="ok"?(a(S.mensaje||`✅ Rol "${N}" actualizado correctamente.`,"success",2e3,"RolesAdmin"),l(S.datos||[])):a(S.mensaje||`⚠️ No se pudo actualizar el rol "${N}".`,"warning",4e3,"RolesAdmin")}catch(O){console.error("❌ actualizarRol error:",O),a(`❌ Error de conexión con el servidor al actualizar el rol "${N}".`,"danger",4e3,"RolesAdmin")}finally{g(!1)}},j=async N=>{if(g(!0),N==="administrador")return a("⚠️ No se puede eliminar el rol administrador","warning",4e3,"RolesAdmin");try{const O=await Ze("eliminarRol",{rol:N});O.status==="ok"?(a(O.mensaje,"success",3e3,"RolesAdmin"),l(O.datos||[])):a(O.mensaje,"warning",4e3,"RolesAdmin")}catch(C){console.error("❌ eliminarRol error:",C),a(`❌ Error al eliminar el rol: ${C?.message||C.toString()}`,"danger",8e3,"RolesAdmin")}finally{g(!1)}};return m.useEffect(()=>{_o()&&h()},[h]),s.jsx(l0.Provider,{value:{roles:o,funcionesDisponibles:u,loading:p,getDatos:v,addDato:b,updateDato:x,deleteDato:j},children:n})},$k=()=>m.useContext(l0);function Hk({children:n}){return s.jsx(Mk,{children:s.jsx(zk,{children:s.jsx(Uk,{children:s.jsx(Ik,{children:n})})})})}const Ha="/appdeclaracion/assets/defaultAvatarImg-CF5KfDzf.png",xn=({show:n})=>n?s.jsxs("div",{className:"loading-overlay",children:[s.jsx(St,{animation:"border",variant:"light"}),s.jsx("span",{className:"loading-text",children:"Procesando..."})]}):null;function qk({show:n,onHide:a,onConfirm:o,loading:l}){const[u,d]=m.useState(""),[p,g]=m.useState(!1),h=()=>{o(u,p),d(""),g(!1)};return s.jsxs(ye,{show:n,onHide:a,centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:"⚠️ Reinicializar Proyecto"})}),s.jsxs(ye.Body,{children:[s.jsxs("p",{children:["Esta acción ",s.jsx("strong",{children:"eliminará todos los datos"})," y reiniciará la aplicación."]}),s.jsxs("p",{children:["Para confirmar, escriba ",s.jsx("strong",{children:"INICIALIZAR"}),":"]}),s.jsxs(se,{children:[s.jsx(se.Group,{children:s.jsx(se.Control,{type:"text",placeholder:"INICIALIZAR",value:u,onChange:v=>d(v.target.value)})}),s.jsx(se.Check,{type:"checkbox",label:"Borrar también las carpetas de archivos",checked:p,onChange:v=>g(v.target.checked),className:"mt-2 modal-reinit-checkbox"})]}),s.jsx(xn,{show:l})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:a,children:"Cancelar"}),s.jsx(Oe,{variant:"danger",disabled:u.trim()!=="INICIALIZAR",onClick:h,children:l?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm"})," Inicializando..."]}):"Reinicializar"})]})]})}var Jk=["color","size","title","className"];function Df(){return Df=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},Df.apply(null,arguments)}function Gk(n,a){if(n==null)return{};var o,l,u=Fk(n,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(l=0;l<d.length;l++)o=d[l],a.indexOf(o)===-1&&{}.propertyIsEnumerable.call(n,o)&&(u[o]=n[o])}return u}function Fk(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;o[l]=n[l]}return o}var c0=m.forwardRef(function(n,a){var o=n.color,l=o===void 0?"currentColor":o,u=n.size,d=u===void 0?"1em":u,p=n.title,g=p===void 0?null:p,h=n.className,v=h===void 0?"":h,b=Gk(n,Jk);return Fe.createElement("svg",Df({ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:d,height:d,fill:l,className:["bi","bi-bell",v].filter(Boolean).join(" ")},b),g?Fe.createElement("title",null,g):null,Fe.createElement("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"}))});c0.propTypes={color:_e.string,size:_e.oneOfType([_e.string,_e.number]),title:_e.string,className:_e.string};var Vk=["color","size","title","className"];function Lf(){return Lf=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},Lf.apply(null,arguments)}function Yk(n,a){if(n==null)return{};var o,l,u=Xk(n,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(l=0;l<d.length;l++)o=d[l],a.indexOf(o)===-1&&{}.propertyIsEnumerable.call(n,o)&&(u[o]=n[o])}return u}function Xk(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;o[l]=n[l]}return o}var Mf=m.forwardRef(function(n,a){var o=n.color,l=o===void 0?"currentColor":o,u=n.size,d=u===void 0?"1em":u,p=n.title,g=p===void 0?null:p,h=n.className,v=h===void 0?"":h,b=Yk(n,Vk);return Fe.createElement("svg",Lf({ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:d,height:d,fill:l,className:["bi","bi-box-arrow-right",v].filter(Boolean).join(" ")},b),g?Fe.createElement("title",null,g):null,Fe.createElement("path",{fillRule:"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"}),Fe.createElement("path",{fillRule:"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"}))});Mf.propTypes={color:_e.string,size:_e.oneOfType([_e.string,_e.number]),title:_e.string,className:_e.string};function ga(){const{user:n}=Si();return{puede:o=>n?n.permisos==="*"||n.permisos?.includes("*")?!0:n.permisos?.includes(o):!1}}const u0=({isOpen:n,onClose:a})=>n?s.jsx("div",{className:"tutorial-modal-overlay",onClick:a,children:s.jsxs("div",{className:"tutorial-modal-content",onClick:o=>o.stopPropagation(),children:[s.jsx("button",{className:"close-x-btn",onClick:a,"aria-label":"Cerrar",children:"×"}),s.jsx("div",{className:"modal-body",children:s.jsx("div",{className:"video-aspect-ratio",children:s.jsx("iframe",{src:"https://player.vimeo.com/video/1183915319?h=07f3253b51&badge=0&autopause=0&autoplay=1",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Video Tutorial AppDeclaración"})})})]})}):null;function Zk({onOpenBackend:n}){const{puede:a}=ga(),o=a("obtenerDatosTributarios"),{activeBackend:l}=dc(),{getDatos:u,clearDatos:d,conteoImportantes:p}=r0(),[g,h]=m.useState(!1),{user:v,authenticated:b,logout:x}=Si(),[j,N]=m.useState(!1),[C,O]=m.useState(!1),[S,k]=m.useState(!1),E=On(),T=In(),L=()=>O(!1);m.useEffect(()=>{o?u():d()},[o,u,d]);const B=()=>{T.pathname==="/datos-tributarios"?u():E("/datos-tributarios")};m.useEffect(()=>{const Y=setTimeout(()=>{N(!0)},1e4);return()=>clearTimeout(Y)},[]);const z=j&&v?.picture||Ha,_=!!v,U=!!(b&&v);return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"navbar-return-container sticky-top",children:[s.jsx($l,{bg:"light",expand:"lg",className:"shadow-sm mb-3 sticky-top navbar-nav-principal",children:s.jsxs(Po,{fluid:!0,children:[s.jsxs("div",{className:"backend-circle-Brand",children:[l&&s.jsx("div",{className:"backend-circle ms-2",title:`Backend: ${l.alias}`,onClick:n,children:l.alias.slice(0,2).toUpperCase()}),s.jsxs("div",{className:"grupNavTex text-center",children:[s.jsx($l.Brand,{className:"app-brand",as:En,to:"/",children:"AppDeclaración"}),l?.alias&&s.jsx("h6",{className:"backend-alias mb-0",title:l.alias,children:l.alias})]})]}),s.jsx("div",{className:"contCamp",children:s.jsxs("div",{className:"d-flex align-items-center position-relative",children:[s.jsxs("div",{className:`position-relative d-flex align-items-center me-3 notificacion-wrapper ${o?"":"opacity-50"}`,style:{cursor:o?"pointer":"not-allowed",filter:o?"none":"grayscale(1)"},onClick:o&&U?B:void 0,title:U?o?"":"No tienes permisos para ver datos tributarios":"Inicia sesión para ver datos tributarios",children:[s.jsx(c0,{size:22}),o&&p>0&&s.jsx("span",{className:"badge-notificacion pulse-animation",children:p})]}),s.jsx($l.Toggle,{onClick:()=>O(!0),"aria-controls":"offcanvasNavbar-expand-lg"})]})}),s.jsxs($l.Offcanvas,{show:C,onHide:L,id:"offcanvasNavbar-expand-lg","aria-labelledby":"offcanvasNavbarLabel-expand-lg",placement:"end",children:[s.jsx(qa.Header,{closeButton:!0,className:"offcanvas-header-user",children:_?s.jsxs("div",{className:"offcanvas-user-header",children:[s.jsx("img",{src:z,alt:"avatar",className:"offcanvas-user-avatar user-avatar",loading:"lazy",onError:Y=>{Y.target.src!==Ha&&(Y.target.src=Ha)}},z),s.jsx("div",{className:"offcanvas-user-info",children:s.jsxs("div",{className:"offcanvas-user-grup",children:[s.jsx("div",{className:"offcanvas-user-name",children:v.nombre||"Usuario"}),s.jsx("div",{className:"offcanvas-user-email",children:v.correo}),s.jsx("div",{className:"offcanvas-user-email",children:v.rol})]})})]}):s.jsx(qa.Title,{id:"offcanvasNavbarLabel-expand-lg",children:"Menú"})}),s.jsx(qa.Body,{children:s.jsxs(Ft,{className:"justify-content-end flex-grow-1 pe-3",children:[s.jsx(yo,{placement:"bottom",animation:!1,overlay:s.jsx(hr,{children:"Ver Productos"}),children:s.jsxs(Ft.Link,{onClick:()=>{U&&(O(!1),E("/productos"))},disabled:!U,style:U?{}:{opacity:.5,cursor:"not-allowed"},title:U?"":"Inicia sesión para ver productos",children:[s.jsx("span",{className:"icon-Verproductos"}),s.jsx("span",{className:"ms-2 d-lg-none",children:"Ver Productos"})," "]})}),s.jsx(yo,{placement:"bottom",animation:!1,overlay:s.jsx(hr,{children:"Add Facturas"}),children:s.jsxs(Ft.Link,{onClick:()=>{U&&(O(!1),E("/facturas"))},disabled:!U,style:U?{}:{opacity:.5,cursor:"not-allowed"},title:U?"":"Inicia sesión para ver facturas",children:[s.jsx("span",{className:"icon-AddFacturas"}),s.jsx("span",{className:"ms-2 d-lg-none",children:"Facturas"})]})}),s.jsx(yo,{placement:"bottom",animation:!1,overlay:s.jsx(hr,{children:"Contador"}),children:s.jsxs(Ft.Link,{onClick:()=>{U&&(O(!1),E("/contador"))},disabled:!U,style:U?{}:{opacity:.5,cursor:"not-allowed"},title:U?"":"Inicia sesión para ver contador",children:[s.jsx("span",{className:"icon-Contador"}),s.jsx("span",{className:"ms-2 d-lg-none",children:"Contador"})]})}),_&&s.jsx(yo,{placement:"bottom",animation:!1,overlay:s.jsx(hr,{children:"Usuario Activo"}),children:s.jsx("div",{className:"navbar-session-Dropdown-desktop d-flex align-items-center ms-3",children:s.jsxs(pn,{align:"end",children:[s.jsx(pn.Toggle,{as:"div",id:"userDropdown",className:"cursor-pointer",style:{display:"flex",alignItems:"center"},children:s.jsx("img",{src:z,alt:"avatar",width:34,height:34,className:"rounded-circle user-avatar",loading:"lazy",onError:Y=>{Y.target.src!==Ha&&(Y.target.src=Ha)}},z)}),s.jsxs(pn.Menu,{className:"p-3 text-center",children:[s.jsx("img",{src:z,alt:"avatar",className:"rounded-circle mb-2 user-avatar-lg",loading:"lazy",onError:Y=>{Y.target.src!==Ha&&(Y.target.src=Ha)}},z),s.jsx("div",{className:"fw-bold",children:v.nombre||"Usuario desconocido"}),s.jsx("div",{className:"text-muted small",children:v.correo}),s.jsx("div",{className:"text-muted small mb-2",children:v.rol}),s.jsx(pn.Divider,{}),s.jsxs(pn.Item,{onClick:()=>{x({mensaje:"Sesión cerrada voluntariamente por el usuario desde el menú superior"})},className:" text-danger text-center fw-semibold d-flex align-items-center justify-content-center gap-1",children:[s.jsx(Mf,{size:16})," Cerrar sesión"]})]})]})})}),s.jsx(yo,{placement:"bottom",animation:!1,overlay:s.jsx(hr,{children:"Más"}),children:s.jsxs(dn,{title:s.jsx("span",{className:"icon-menu-kebab"}),id:"nav-dropdown",className:"Navbar-NavDropdown-Mas-Desktop",children:[s.jsx(dn.Item,{onClick:()=>O(!1),as:En,to:"/admin",children:"Admin & Config"}),s.jsx(dn.Divider,{}),s.jsx(dn.Item,{onClick:n,children:"Adicionar Backend"}),s.jsx(dn.Divider,{}),s.jsx(dn.Item,{onClick:()=>k(!0),children:"Guía de uso"}),s.jsx(dn.Divider,{}),s.jsx(dn.Item,{onClick:()=>O(!1),as:En,to:"/backend-setup",children:"Configurar Backend"}),s.jsx(dn.Divider,{}),s.jsx(dn.Item,{onClick:()=>O(!1),as:En,to:"/donaciones",children:"Donaciones"}),s.jsx(dn.Divider,{}),s.jsx(dn.Item,{onClick:()=>O(!1),as:En,to:"/acerca-de",children:"Acerca de"})]})}),s.jsxs(Ft.Link,{className:"Navbar-NavLink-Mas nav-link-more",onClick:()=>{O(!1),h(!0)},children:[s.jsx("span",{children:"Más"}),s.jsx("span",{className:"arrow",children:"›"})]})]})}),v&&s.jsx("div",{className:"offcanvas-logout-mobile romeo",children:s.jsxs("button",{className:"offcanvas-logout-btn julieta",onClick:()=>{O(!1),x(),E("/")},children:[s.jsx(Mf,{size:18}),s.jsx("span",{children:"Cerrar sesión"})]})})]})]})},"lg"),s.jsxs(qa,{placement:"end",show:g,onHide:()=>h(!1),children:[s.jsx(qa.Header,{closeButton:!0,children:s.jsx(qa.Title,{style:{cursor:"pointer"},onClick:()=>{h(!1),O(!0)},children:"← Más opciones"})}),s.jsx(qa.Body,{children:s.jsxs(Ft,{className:"flex-column",children:[s.jsx(Ft.Link,{onClick:()=>{U&&(h(!1),E("/admin"))},disabled:!U,style:U?{}:{opacity:.5,cursor:"not-allowed"},title:U?"":"Inicia sesión para entrar a Admin",children:"Admin & Config"}),s.jsx(Ft.Link,{onClick:()=>{O(!1),n()},children:"Adicionar Backend"}),s.jsx(Ft.Link,{onClick:()=>{h(!1),k(!0)},children:"Guía de uso"}),s.jsx(Ft.Link,{onClick:()=>{h(!1),E("/backend-setup")},children:"Configurar Backend"}),s.jsx(Ft.Link,{onClick:()=>{h(!1),E("/donaciones")},children:"Donaciones"}),s.jsx(Ft.Link,{onClick:()=>{h(!1),E("/acerca-de")},children:"Acerca de"})]})})]}),s.jsx(u0,{isOpen:S,onClose:()=>k(!1)})]})})}function va({show:n,onHide:a,title:o="Confirmar acción",message:l="¿Deseas continuar con esta operación?",confirmLabel:u="Confirmar",confirmVariant:d="primary",onConfirm:p}){const[g,h]=m.useState(!1),[v,b]=m.useState(!1),x=async()=>{p&&(b(!0),await p(),b(!1),h(!1),a())};return s.jsx(s.Fragment,{children:s.jsxs(ye,{show:n,onHide:a,centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:o})}),s.jsxs(ye.Body,{children:[typeof l=="string"?s.jsx("p",{children:l}):l,s.jsx(se.Check,{type:"switch",id:"confirm-action-switch",label:g?"Confirmado (acción habilitada)":"Desactivado",checked:g,onChange:j=>h(j.target.checked)}),s.jsx(xn,{show:v})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:a,children:"Cancelar"}),s.jsx(Oe,{variant:d,onClick:x,disabled:!g||v,children:v?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Guardando..."]}):u})]})]})})}const Lb={anio:n=>!n||!n.toString().trim()?"El año es obligatorio.":/^\d{4}$/.test(n)?"":"El año debe tener 4 dígitos.",entidad:n=>!n||!n.trim()?"El campo Entidad es obligatorio.":"",descripcion:n=>n&&n.length>100?"La descripción no debe superar los 50 caracteres.":"",valor:n=>{if(n==null||n==="")return"El valor es obligatorio.";const a=String(n).replace(/\D/g,"");return/^\d+$/.test(a)?"":"El valor debe ser un número entero sin decimales."},metodoPago:n=>!n||n.trim()===""?"Debe seleccionar un método de pago.":"",archivo:n=>n?"":"Debe seleccionar un archivo.",nombre:n=>!n||!n.trim()?"El nombre del producto es obligatorio.":/^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El nombre no puede contener caracteres especiales.",nombreProducto:n=>!n||!n.trim()?"El nombre del producto es obligatorio.":/^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El nombre no puede contener caracteres especiales.",entidadProducto:n=>!n||!n.trim()?"La entidad del producto es obligatoria.":"",tipo:n=>n?/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El tipo solo debe contener letras.":"",correo:n=>!n||!n.trim()?"El correo es obligatorio.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)?"":"El correo no es válido.",nombreUsuario:n=>!n||!n.trim()?"El nombre es obligatorio.":n.length>50?"El nombre no debe superar los 50 caracteres.":/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El nombre solo puede contener letras.",rol:n=>!n||n.trim()===""?"Debe seleccionar un rol.":"",rolNombre:n=>!n||!n.trim()?"El nombre del rol es obligatorio.":/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?n.trim().length<3?"El nombre del rol debe tener al menos 3 caracteres.":n.trim().length>30?"El nombre del rol no debe superar los 30 caracteres.":"":"El nombre del rol solo puede contener letras.",rolPermisos:n=>!n||n.length===0?"Debe seleccionar al menos un permiso.":""};function vt(n=""){if(!n)return"";const a=n.toLowerCase().trim().replace(/\s+/g," ");return a.charAt(0).toUpperCase()+a.slice(1)}const Kk=({show:n,onHide:a})=>{const{backends:o,activeBackend:l,addBackend:u,deleteBackend:d,setActiveBackend:p}=dc(),[g,h]=m.useState(null),{showToast:v}=$n(),[b,x]=m.useState(""),[j,N]=m.useState(""),[C,O]=m.useState(!1),S=()=>{const E=vt(b),T=j.trim();if(!E||!T){v("❌ Alias y URL son obligatorios","danger",3e3);return}try{u(E,T),v(`✅ Backend "${E}" agregado`,"success",3e3),x(""),N(""),O(!1)}catch(L){v(`❌ ${L.message}`,"danger",3e3)}},k=E=>{d(E),h(null),v(`✅ Backend "${E}" eliminado`,"success",3e3)};return s.jsxs(s.Fragment,{children:[s.jsxs(ye,{show:n,onHide:a,centered:!0,className:"BackendConfigModal",children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:"Adicionar Backends (URL del Worker)"})}),s.jsxs(ye.Body,{children:[o.length===0?s.jsx("p",{children:"No hay backends configurados."}):s.jsx("div",{className:"backend-list-container",children:s.jsx("ul",{className:"list-group",children:o.map(E=>s.jsxs("li",{className:`list-group-item d-flex justify-content-between align-items-center ${l?.alias===E.alias?"active":""}`,children:[s.jsx("span",{children:E.alias}),s.jsxs("div",{className:"d-flex gap-2",children:[s.jsx(Oe,{size:"sm",variant:"success",onClick:()=>p(E.alias),children:"Usar"}),s.jsx(Oe,{size:"sm",variant:"danger",onClick:()=>h(E.alias),children:"Eliminar"})]})]},E.alias))})}),s.jsx("hr",{}),s.jsx("h6",{style:{cursor:"pointer",color:"#0d6efd"},onClick:()=>O(E=>!E),children:C?"➖ Cancelar":"➕ Agregar nuevo Backend"}),C&&s.jsxs(se,{children:[s.jsxs(se.Group,{className:"mb-2",children:[s.jsx(se.Label,{children:"Alias"}),s.jsx(se.Control,{type:"text",placeholder:"Ej: Cliente1",value:b,onChange:E=>x(E.target.value)})]}),s.jsxs(se.Group,{className:"mb-2",children:[s.jsx(se.Label,{children:"URL"}),s.jsx(se.Control,{type:"text",placeholder:"https://appdeclaracion.usuario.workers.dev/",value:j,onChange:E=>N(E.target.value)})]}),s.jsx(Oe,{variant:"primary",onClick:S,children:"Guardar"})]})]})]}),s.jsx(va,{show:g,onHide:()=>h(!1),title:"Eliminar Usuario",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar el backend ",s.jsx("strong",{children:g}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>k(g)})]})};function Qk(){const[n,a]=m.useState(null),[o,l]=m.useState(!1);m.useEffect(()=>{const d=p=>{p.preventDefault(),a(p),l(!0)};return window.addEventListener("beforeinstallprompt",d),()=>{window.removeEventListener("beforeinstallprompt",d)}},[]);const u=async()=>{if(!n)return;n.prompt(),(await n.userChoice).outcome==="accepted"?console.log("✅ Usuario aceptó instalar"):console.log("❌ Usuario canceló instalación"),a(null),l(!1)};return o?s.jsx("div",{style:Mb.container,children:s.jsx("button",{style:Mb.button,onClick:u,children:"📲 Agregar a pantalla de inicio"})}):null}const Mb={container:{position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:9999},button:{backgroundColor:"#0d6efd",color:"#fff",border:"none",padding:"12px 18px",borderRadius:"8px",fontSize:"16px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0,0,0,0.2)"}};function Wk(){const[n,a]=m.useState(!1);return m.useEffect(()=>{const o=/iphone|ipad|ipod/i.test(navigator.userAgent),l=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),u=window.navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches;o&&l&&!u&&a(!0)},[]),n?s.jsx("div",{style:df.overlay,children:s.jsxs("div",{style:df.modal,children:[s.jsx("h4",{children:"📲 Instalar App"}),s.jsxs("p",{children:["Para agregar esta app a tu iPhone:",s.jsx("br",{}),s.jsx("strong",{children:"1."})," Toca ",s.jsx("b",{children:"Compartir"})," ⬆️",s.jsx("br",{}),s.jsx("strong",{children:"2."})," Selecciona ",s.jsx("b",{children:"Agregar a pantalla de inicio"})]}),s.jsx("button",{onClick:()=>a(!1),style:df.button,children:"Entendido"})]})}):null}const df={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},modal:{backgroundColor:"#fff",padding:"20px",borderRadius:"12px",maxWidth:"320px",textAlign:"center"},button:{marginTop:"15px",padding:"10px 16px",border:"none",borderRadius:"8px",backgroundColor:"#0d6efd",color:"#fff",cursor:"pointer"}};function eT(){const{login:n,authenticated:a,loading:o}=Si(),{activeBackend:l}=dc(),u=On(),[d,p]=m.useState(!1),[g,h]=m.useState(!1),[v,b]=m.useState(!1);return m.useEffect(()=>{if(!o){if(a&&!l&&!g){h(!0),window.dispatchEvent(new CustomEvent("backend:open-config"));return}a&&l&&u("/productos",{replace:!0})}},[a,o,l,g,u]),m.useEffect(()=>{if(o||a||d)return;const x=document.getElementById("googleLoginDiv");if(!x)return;const j=setInterval(()=>{window.google?.accounts?.id&&(clearInterval(j),window.googleInitialized||(window.google.accounts.id.initialize({client_id:"648554486893-4b33o1cei2rfhv8ehn917ovf60h1u9q4.apps.googleusercontent.com",callback:N=>{if(d)return;const C=N.credential,O=Date.now();p(!0),n(C,()=>{const S=Date.now()-O;setTimeout(()=>{p(!1)},Math.max(0,500-S))})}}),window.googleInitialized=!0),x.innerHTML="",window.google.accounts.id.renderButton(x,{theme:"filled_blue",size:"large",shape:"pill",text:"signin_with",width:240}))},300);return()=>clearInterval(j)},[n,o,a,d]),o?s.jsx("div",{className:"home-wrapper",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"spinner-border text-primary mb-3",role:"status"}),s.jsx("p",{className:"text-secondary",children:"Verificando sesión..."})]})}):a?null:d&&!a?s.jsx("div",{className:"home-wrapper",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"spinner-border text-success mb-3",role:"status"}),s.jsx("p",{className:"text-success",children:"Iniciando sesión, un momento..."})]})}):s.jsxs("div",{className:"home-wrapper d-flex flex-column align-items-center",children:[s.jsxs("div",{className:"card shadow-lg p-4 text-center",style:{maxWidth:400,borderRadius:"20px"},children:[s.jsx("h3",{className:"mb-3 fw-bold",children:"Bienvenido"}),s.jsx("p",{className:"text-muted mb-4",children:"Inicia sesión con tu cuenta de Google para gestionar tus documentos."}),s.jsx("div",{id:"googleLoginDiv",className:"d-flex justify-content-center mb-3"}),s.jsxs("div",{className:`bg-light p-3 rounded-3 mt-2 ${l?"":"backend-attention"}`,children:[s.jsx("p",{className:"small text-secondary mb-2",children:"¿Quieres ver cómo funciona?"}),s.jsxs("div",{className:"d-flex flex-column gap-2",children:[s.jsxs("button",{onClick:()=>b(!0),className:"btn btn-sm btn-link text-decoration-none fw-bold",children:[s.jsx("i",{className:"bi bi-play-circle-fill me-1"})," Ver Demo de la App"]}),s.jsx(En,{to:"/backend-setup",className:"text-primary fw-bold text-decoration-none small",children:"Guía: Configurar mi Backend →"})]})]}),s.jsx("hr",{className:"mt-4 mb-3"}),s.jsxs("div",{className:"legal-links",style:{fontSize:"0.85rem"},children:[s.jsx(En,{to:"/privacidad",className:"text-decoration-none text-secondary mx-2",children:"Privacidad"}),s.jsx("span",{className:"text-muted",children:"|"}),s.jsx(En,{to:"/terminos",className:"text-decoration-none text-secondary mx-2",children:"Términos"})]})]}),s.jsx("div",{className:"mt-4 text-center text-white-50",children:s.jsx("small",{children:"AppDeclaración: Gestión descentralizada de documentos tributarios."})}),s.jsx(u0,{isOpen:v,onClose:()=>b(!1)})]})}function Yo({errors:n}){return!n||Object.keys(n).length===0?null:s.jsx("div",{className:"form-error-list",children:Object.values(n).map((a,o)=>s.jsx("div",{className:"error-item",children:a},o))})}function Xo(){const[n,a]=m.useState({}),o=m.useCallback((p,g)=>{const h=Lb[p];if(!h)return;const v=h(g);a(b=>{const x={...b};return v?x[p]=v:delete x[p],x})},[]),l=m.useCallback(p=>{const g={};for(const[h,v]of Object.entries(p)){const b=Lb[h];if(!b)continue;const x=b(v);x&&(g[h]=x)}return a(g),Object.keys(g).length===0},[]),u=m.useCallback(p=>{a(g=>{const h={...g};return delete h[p],h})},[]),d=m.useCallback(()=>a({}),[]);return{errors:n,validateField:o,validateForm:l,clearError:u,clearErrors:d}}function tT({show:n,onHide:a,productoAEditar:o}){const{addProducto:l,updateProducto:u}=Vo(),{errors:d,validateField:p,validateForm:g,clearError:h,clearErrors:v}=Xo(),[b,x]=m.useState({nombre:"",descripcion:"",entidadProducto:"",tipo:""}),[j,N]=m.useState(!1),[C,O]=m.useState(!1),[S,k]=m.useState(""),[E,T]=m.useState("success"),L=z=>{const{name:_,value:U}=z.target;x(Y=>({...Y,[_]:U})),p(_,U),h(_)};m.useEffect(()=>{n&&o?x({nombre:o.nombre||"",descripcion:o.descripcion||"",entidadProducto:o.entidad||"",tipo:o.tipo||""}):n&&!o&&(x({nombre:"",descripcion:"",entidadProducto:"",tipo:""}),v())},[o,n]);const B=async z=>{if(z.preventDefault(),v(),!!g(b)){N(!0);try{const _={nombre:vt(b.nombre),descripcion:b.descripcion?vt(b.descripcion):"",entidad:vt(b.entidadProducto),tipo:b.tipo?vt(b.tipo):""};let U;if(o?U=await u({..._,id:o.id}):U=await l(_),U.ok)T("success"),k(U.mensaje),O(!0),a();else if(U.ok===!1&&U.mensaje.includes("Ya existe"))T("warning"),k(U.mensaje),O(!0);else throw new Error(U.mensaje||"Error en la operación")}catch(_){T("danger"),k(`❌ ${_.message}`),O(!0),console.error(_)}finally{N(!1)}}};return s.jsxs(s.Fragment,{children:[s.jsxs(ye,{show:n,onHide:a,centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:o?"Editar Producto":"Adicionar Producto"})}),s.jsxs(ye.Body,{children:[s.jsx(Yo,{errors:d}),s.jsxs(se,{onSubmit:B,children:[s.jsxs(se.Group,{className:"mb-3",children:[s.jsx(se.Label,{children:"Nombre *"}),s.jsx(se.Control,{type:"text",name:"nombre",value:b.nombre,onChange:L,onBlur:z=>p("nombre",z.target.value),placeholder:"Ej: Tarjeta 6992, Cta 1108"})]}),s.jsxs(se.Group,{className:"mb-3",children:[s.jsx(se.Label,{children:"Descripción"}),s.jsx(se.Control,{type:"text",name:"descripcion",value:b.descripcion,onChange:L,onBlur:z=>p("descripcion",z.target.value),placeholder:"Ej: Extracto bancario, póliza, certificado"})]}),s.jsxs(se.Group,{className:"mb-3",children:[s.jsx(se.Label,{children:"Entidad *"}),s.jsx(se.Control,{type:"text",name:"entidadProducto",value:b.entidadProducto,onChange:L,onBlur:z=>p("entidadProducto",z.target.value),placeholder:"Ej: Banco de Bogotá, Sura, Ecopetrol"})]}),s.jsxs(se.Group,{className:"mb-3",children:[s.jsx(se.Label,{children:"Tipo"}),s.jsx(se.Control,{type:"text",name:"tipo",value:b.tipo,onChange:L,onBlur:z=>p("tipo",z.target.value),placeholder:"Ej: Salud, Deuda, Certificado"})]}),s.jsx(Oe,{type:"submit",variant:"primary",disabled:j,children:j?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),s.jsx("span",{className:"ms-2",children:"Procesando..."})]}):o?"Guardar Cambios":"Guardar Producto"})]}),s.jsx(xn,{show:j})]})]}),s.jsx(Ho,{position:"bottom-end",className:"p-3",children:s.jsxs(Nt,{bg:E,show:C,autohide:!0,delay:3e3,onClose:()=>O(!1),children:[s.jsx(Nt.Header,{children:s.jsx("strong",{className:"me-auto",children:"Productos"})}),s.jsx(Nt.Body,{className:"text-white",children:S})]})})]})}function nT({show:n,onClose:a,onConfirm:o,title:l,anioDefault:u}){const{errors:d,validateField:p,validateForm:g,clearErrors:h,clearError:v}=Xo(),b=String(new Date().getFullYear()-1),[x,j]=m.useState(!1),[N,C]=m.useState(""),[O,S]=m.useState(!1),[k,E]=m.useState(null),[T,L]=m.useState(!1);m.useEffect(()=>{n&&(h(),C(u||b),S(!1),E(null),L(!1),j(!1))},[n,u,b,h]);const B=async()=>{if(h(),!!g({anio:N,archivo:k})){j(!0);try{await o(N,l==="Remplazar archivo"?!1:O,k,T)}catch(U){console.log("Error en el modal:",U)}finally{j(!1)}}};return s.jsxs(ye,{show:n,onHide:a,centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:l==="Remplazar archivo"?"Reemplazar archivo":"Subir archivo"})}),s.jsxs(ye.Body,{children:[s.jsx(Yo,{errors:d}),s.jsxs(se,{children:[s.jsxs(se.Group,{children:[s.jsx(se.Label,{children:"Año"}),s.jsx(se.Control,{type:"number",placeholder:`Ejm: ${new Date().getFullYear()-1}`,value:N,onChange:z=>{C(z.target.value),v("anio")},onBlur:z=>p("anio",z.target.value),disabled:l==="Remplazar archivo"})]}),s.jsxs(se.Group,{className:"mt-3",children:[s.jsx(se.Label,{children:"Archivo"}),s.jsx(se.Control,{type:"file",onChange:z=>{E(z.target.files[0]),p("archivo",z.target.files[0])}})]}),l!=="Remplazar archivo"&&s.jsx(se.Group,{className:"mt-3",children:s.jsx(se.Check,{type:"checkbox",label:"Este archivo aplica a varios productos",checked:O,onChange:z=>S(z.target.checked)})}),l==="Remplazar archivo"&&s.jsx(se.Group,{className:"mt-3 UploadModal-replaceOnly",children:s.jsx(se.Check,{type:"checkbox",label:"Reemplazar solo en este producto",checked:T,onChange:z=>L(z.target.checked)})})]}),s.jsx(xn,{show:x})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:a,disabled:x,children:"Cancelar"}),s.jsx(Oe,{variant:"primary",onClick:B,disabled:x,children:x?s.jsxs(s.Fragment,{children:[s.jsx(St,{size:"sm"})," Procesando..."]}):l==="Remplazar archivo"?"Reemplazar":"Cargar archivo"})]})]})}function aT({show:n,onClose:a,onConfirm:o,productos:l=[],productoOrigen:u,loading:d}){const[p,g]=m.useState([]);m.useEffect(()=>{n&&g(u?[u.id]:[])},[n,u]);const h=(b,x)=>{x!==u?.id&&(b.target.checked?g(j=>[...j,x]):g(j=>j.filter(N=>N!==x)))},v=()=>{if(p.length===0){alert("Debe seleccionar al menos un producto");return}o(p)};return s.jsxs(ye,{show:n,onHide:a,centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:"Seleccionar Productos"})}),s.jsxs(ye.Body,{children:[s.jsx(se,{children:l.filter(b=>!b.tieneArchivo||b.id===u?.id).map(b=>s.jsx(se.Check,{type:"checkbox",label:`${b.entidad} - ${b.nombre}`,checked:p.includes(b.id)||b.id===u?.id,disabled:b.id===u?.id,onChange:x=>h(x,b.id),className:"mb-2"},b.id))}),s.jsx(xn,{show:d})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:a,children:"Cancelar"}),s.jsx(Oe,{variant:"primary",onClick:v,children:d?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Procesando..."]}):"Cargar archivo"})]})]})}const rT=()=>s.jsx(Cn,{xs:12,md:6,lg:4,className:"mb-3",children:s.jsx(wo,{className:"producto-card-skeleton",children:s.jsxs(wo.Body,{children:[s.jsx("div",{className:"skeleton-edit-btn"}),s.jsx("div",{className:"skeleton-close-btn"}),s.jsx("div",{className:"skeleton-placeholder skeleton-title"}),s.jsx("div",{className:"skeleton-placeholder skeleton-text"}),s.jsx("div",{className:"skeleton-placeholder skeleton-text short"}),s.jsx("div",{className:"skeleton-placeholder skeleton-button"})]})})});function oT(){const n=window.innerWidth<2e3,{puede:a}=ga(),o=a("subirArchivoProducto"),l=a("remplazarArchivoProducto"),u=a("eliminarProducto"),d=a("agregarProducto"),p=a("actualizarProducto"),{registroProductos:g,loading:h,anioAnterior:v,refreshProductos:b,subirArchivo:x,remplaceArchivo:j,deleteProducto:N}=Vo(),{showToast:C}=$n(),[O,S]=m.useState(!1),[k,E]=m.useState(!1),[T,L]=m.useState(!1),[B,z]=m.useState(!1),[_,U]=m.useState(null),[Y,W]=m.useState(null),[ne,le]=m.useState(null),[ie,ee]=m.useState(""),[P,D]=m.useState("");m.useEffect(()=>{_o()&&b()},[]);const K=$=>{U($),le(null),ee(""),E(!0)};async function oe({tipo:$,productoIds:re,anio:ae,file:H,replaceOnlyThis:ue=!1,nombreProducto:fe="",usarExistente:He=!1,forzarTodosLosAnios:we=!1}){let Ie;if($==="reemplazar"?Ie=await j(re[0],ae,H,ue,fe,He,we):Ie=await x(re,ae,H,He),Ie.existe){if(!await Ww({titulo:"Archivo existente",mensaje:Ie.mensaje,textoConfirmar:"✅ Usar archivo existente",textoCancelar:"❌ Cancelar"})){C("❌ Operación cancelada por el usuario","warning",3e3,"Productos");return}$==="reemplazar"?Ie=await j(re[0],ae,H,ue,fe,!0,we):Ie=await x(re,ae,H,!0)}C(Ie.mensaje,Ie.ok?"success":"danger",1e4,"Productos")}const V=async($,re,ae,H)=>{if(le(ae),ee($),re){W(_),L(!0),E(!1);return}_.tieneArchivo?await oe({tipo:"reemplazar",productoIds:[_.id],anio:$,file:ae,replaceOnlyThis:H,nombreProducto:_.nombre}):await oe({tipo:"subir",productoIds:[_.id],anio:$,file:ae}),E(!1)},A=async $=>{!ne||!ie||(await oe({tipo:"subir",productoIds:$,anio:ie,file:ne}),L(!1))};return s.jsx(s.Fragment,{children:s.jsxs(Po,{className:"productos-page",children:[s.jsx("div",{className:"productos-container",children:s.jsx("h2",{className:"mb-4",children:"Productos"})}),s.jsx(wr,{children:h?Array.from({length:6}).map(($,re)=>s.jsx(rT,{},`skeleton-${re}`)):g.map($=>s.jsx(Cn,{xs:12,md:6,lg:4,className:"mb-3",children:s.jsx(wo,{className:`producto-card ${$.tieneArchivo?"producto-ok":""}`,children:s.jsxs(wo.Body,{children:[s.jsxs("div",{className:"position-absolute top-0 end-0 m-2 d-flex gap-2 align-items-center",children:[s.jsx("button",{type:"button",className:"editicon accion-icon",disabled:!p||$.tieneArchivo,onClick:()=>{p&&(U($),S(!0))},title:$.tieneArchivo?"No se puede editar un producto con archivo vinculado":p?"Editar producto":"No tienes permisos para editar",style:{opacity:!p||$.tieneArchivo?.3:1,cursor:!p||$.tieneArchivo?"not-allowed":"pointer"},children:s.jsx("i",{className:"bi bi-pencil-square"})}),s.jsx("button",{type:"button",className:"editicon accion-icon text-danger",disabled:!u,style:u?{}:{opacity:.3,cursor:"not-allowed"},onClick:()=>{u&&(U($),z(!0))},children:s.jsx("i",{className:"bi bi-x-circle"})})]}),s.jsxs(wo.Title,{className:"producto-title-t",children:[$.entidad," ",$.nombre]}),s.jsx(wo.Text,{children:$.descripcion}),$.tieneArchivo?s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"mb-2",children:s.jsxs("small",{children:["Archivo (",$.archivoInfo?.anio,"):"," ",s.jsx("a",{href:$.archivoInfo?.link,target:"_blank",rel:"noopener noreferrer",children:$.archivoInfo?.nombreArchivo||"Ver archivo"})]})}),s.jsx(Oe,{variant:"warning",size:"sm",disabled:!l,title:l?"":"No tienes permisos para remplazar",onClick:()=>{D("Remplazar archivo"),K($)},children:"Modificar archivo"})]}):s.jsx(Oe,{variant:"primary",size:"sm",disabled:!o,title:o?"":"No tienes permisos para subir archivos",onClick:()=>{D("Subir Archivo"),K($)},children:"Subir Archivo"})]})})},$.id))}),n&&s.jsx(yo,{placement:"left",delay:{show:50,hide:100},overlay:s.jsx(hr,{id:"fab-tooltip",children:d?"Agregar producto":"No tienes permisos para agregar productos"}),children:s.jsx("button",{className:"fab-subir",disabled:!d,style:d?{}:{opacity:.3,cursor:"not-allowed"},onClick:()=>{U(null),S(!0)},children:s.jsx("i",{className:"bi bi-plus-lg"})})}),s.jsx(nT,{show:k,onClose:()=>{E(!1),U(null)},onConfirm:V,title:P,anioDefault:P==="Remplazar archivo"?v:""}),s.jsx(aT,{show:T,onClose:()=>{L(!1),W(null),U(null)},onConfirm:A,productoOrigen:Y,productos:g,loading:h}),s.jsx(tT,{show:O,onHide:()=>{S(!1),U(null)},productoAEditar:_,onProductoAgregado:()=>{S(!1),U(null)}}),s.jsx(va,{show:B,onHide:()=>z(!1),title:"Eliminar Producto",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar el producto"," ",s.jsx("strong",{children:_?.nombre}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>N(_.id)})]})})}const sT=()=>s.jsxs("div",{className:"dato-tributario-skeleton",children:[s.jsx("div",{className:"card mb-3 border-0 shadow-sm bg-light",children:s.jsxs("div",{className:"card-body p-2 row g-2",children:[s.jsx("div",{className:"col-5",children:s.jsx("div",{className:"skeleton-input"})}),s.jsx("div",{className:"col-5",children:s.jsx("div",{className:"skeleton-input"})}),s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"skeleton-btn"})})]})}),s.jsx("div",{className:"list-group",children:[1,2,3,4,5].map(n=>s.jsxs("div",{className:"skeleton-fila",children:[s.jsxs("div",{className:"skeleton-controls",children:[s.jsx("div",{className:"skeleton-icon-sm"}),s.jsx("div",{className:"skeleton-text-xs"}),s.jsx("div",{className:"skeleton-icon-sm"})]}),s.jsx("div",{className:"skeleton-label-box",children:s.jsx("div",{className:"skeleton-bar",style:{width:"60%"}})}),s.jsx("div",{className:"skeleton-valor-box",children:s.jsx("div",{className:"skeleton-bar",style:{width:"90%"}})}),s.jsxs("div",{className:"skeleton-actions",children:[s.jsx("div",{className:"skeleton-icon"}),s.jsx("div",{className:"skeleton-icon"}),s.jsx("div",{className:"skeleton-icon"})]})]},n))})]});function iT(){const{puede:n}=ga(),a=n("obtenerDatosTributarios"),{datos:o,setDatos:l,getDatos:u,saveChanges:d,isDirty:p,discardChanges:g,loading:h}=r0(),[v,b]=m.useState(null),[x,j]=m.useState({label:"",valor:""}),[N,C]=m.useState(null),[O,S]=m.useState(!1);m.useEffect(()=>{a&&u()},[u,a]);const k=_=>{l(U=>U.map(Y=>Y.id===_?{...Y,importante:!Y.importante}:Y))},E=(_,U)=>{const Y=[...o],W=_+U;W<0||W>=Y.length||([Y[_],Y[W]]=[Y[W],Y[_]],l(Y.map((ne,le)=>({...ne,orden:le+1}))))},T=(_,U,Y)=>{l(W=>W.map(ne=>ne.id===_?{...ne,[U]:Y}:ne))},L=()=>{l(_=>_.filter(U=>U.id!==N).map((U,Y)=>({...U,orden:Y+1})))},B=()=>{if(!x.label.trim())return;const _={id:`new_${Date.now()}`,label:x.label.charAt(0).toUpperCase()+x.label.slice(1),valor:x.valor,orden:o.length+1,importante:!1};l([...o,_]),j({label:"",valor:""})},z=_=>{const U=/^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/.*)?$/i,Y=_.toString().trim();if(U.test(Y)){const W=Y.startsWith("http")?Y:`https://${Y}`;return s.jsx("a",{href:W,target:"_blank",rel:"noreferrer",children:"Ver Link"})}return _};return s.jsxs("div",{className:"datos-tributarios container mt-4",children:[s.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4 sticky-header-custom border-bottom shadow-sm px-3 rounded bg-white",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"m-0 h4",children:"📊 Datos Tributarios"}),p&&s.jsx("small",{className:"text-danger fw-bold pulse-animation",children:"⚠️ Cambios pendientes"})]}),s.jsxs("div",{className:"d-flex gap-2",children:[p&&s.jsx("button",{className:"btn btn-sm btn-outline-secondary",onClick:g,children:"Descartar"}),s.jsx("button",{className:`btn btn-sm ${p?"btn-success":"btn-secondary"}`,disabled:!p||h,onClick:d,children:h?"...":"💾 Guardar"})]})]}),h&&o.length===0?s.jsx(sT,{}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"card mb-3 border-0 shadow-sm bg-light",children:s.jsxs("div",{className:"card-body p-2 row g-2",children:[s.jsx("div",{className:"col-5",children:s.jsx("input",{className:"form-control form-control-sm",placeholder:"Etiqueta",value:x.label,onChange:_=>j({...x,label:_.target.value})})}),s.jsx("div",{className:"col-5",children:s.jsx("input",{className:"form-control form-control-sm",placeholder:"Valor",value:x.valor,onChange:_=>j({...x,valor:_.target.value})})}),s.jsx("div",{className:"col-2",children:s.jsx("button",{className:"btn btn-sm btn-primary w-100",onClick:B,children:"+"})})]})}),s.jsxs("div",{className:"list-group shadow-sm rounded",children:[o.map((_,U)=>s.jsxs("div",{className:`fila ${_.importante?"resaltado":""}`,children:[s.jsxs("div",{className:"btn-subir-bajar align-items-center",children:[s.jsx("i",{className:`bi bi-chevron-up ${U===0?"text-muted":"text-primary"}`,onClick:()=>E(U,-1)}),s.jsx("span",{className:"small fw-bold",children:_.orden}),s.jsx("i",{className:`bi bi-chevron-down ${U===o.length-1?"text-muted":"text-primary"}`,onClick:()=>E(U,1)})]}),s.jsx("div",{className:"fila-label",children:v===_.id?s.jsx("input",{className:"form-control form-control-sm",value:_.label,onChange:Y=>T(_.id,"label",Y.target.value)}):_.label}),s.jsx("div",{className:"fila-valor",children:v===_.id?s.jsx("textarea",{className:"form-control form-control-sm",value:_.valor,onChange:Y=>T(_.id,"valor",Y.target.value)}):z(_.valor)}),s.jsxs("div",{className:"acciones",children:[s.jsx("i",{className:`bi ${_.importante?"bi-bookmark-star-fill text-danger":"bi-bookmark-star text-secondary"} accion-icon`,title:"Marcar como importante",onClick:()=>k(_.id)}),s.jsx("i",{className:`bi ${v===_.id?"bi-check-circle-fill text-success":"bi-pencil-square text-primary"} accion-icon`,title:"Editar",onClick:()=>b(v===_.id?null:_.id)}),s.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{C(_.id),S(!0)}})]})]},_.id)),!h&&o.length===0&&s.jsx("div",{className:"text-center p-5 text-muted bg-white border rounded",children:"No hay datos tributarios registrados."})]})]}),s.jsx(va,{show:O,onHide:()=>S(!1),title:"Eliminar dato tributario",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar el registro"," ","?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:L}),s.jsx(xn,{show:h&&o.length>0})]})}function lT({show:n,onHide:a,registro:o,onUpdated:l}){const{editRegistroProducto:u}=Vo(),{errors:d,validateField:p,validateForm:g,clearError:h,clearErrors:v}=Xo(),[b,x]=m.useState(!1),[j,N]=m.useState({entidad:"",nombreProducto:"",descripcion:"",tipo:""});m.useEffect(()=>{o&&n&&N({entidad:o.entidad||"",nombreProducto:o.nombreProducto||"",descripcion:o.descripcion||"",tipo:o.tipo||""})},[o,n]);const C=k=>{const{name:E,value:T}=k.target;N(L=>({...L,[E]:T})),p(E,T),h(E)},O=async k=>{if(k.preventDefault(),v(),!!g(j)){x(!0);try{if(!o?.registroId)return;const T={registroId:o.registroId,nombreProducto:vt(j.nombreProducto),descripcion:vt(j.descripcion),entidad:vt(j.entidad),tipo:vt(j.tipo)},L=await u(T);if(L.ok&&(l(L.registro),a()),!L.ok)throw new Error("Error al guardar registro producto")}catch(T){console.log(T)}finally{x(!1)}}},S=()=>{o&&N({entidad:o.entidad||"",nombreProducto:o.nombreProducto||"",descripcion:o.descripcion||"",tipo:o.tipo||""}),v(),a()};return s.jsxs(ye,{show:n,onHide:a,backdrop:"static",centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:"✏️ Editar registro año"})}),s.jsxs(ye.Body,{children:[s.jsx(Yo,{errors:d}),s.jsxs(se,{children:[s.jsxs(se.Group,{className:"mb-2",children:[s.jsx(se.Label,{children:"Entidad"}),s.jsx(se.Control,{name:"entidad",value:j.entidad,onChange:C,onBlur:k=>p("entidad",k.target.value),placeholder:"Ej: Banco de Bogotá, Sura, Ecopetrol"})]}),s.jsxs(se.Group,{className:"mb-2",children:[s.jsx(se.Label,{children:"Nombre del producto"}),s.jsx(se.Control,{name:"nombreProducto",value:j.nombreProducto,onChange:C,onBlur:k=>p("nombreProducto",k.target.value),placeholder:"Ej: Tarjeta 6992, Cta 1108"})]}),s.jsxs(se.Group,{className:"mb-2",children:[s.jsx(se.Label,{children:"Tipo"}),s.jsx(se.Control,{name:"tipo",value:j.tipo,onChange:C,onBlur:k=>p("tipo",k.target.value),placeholder:"Ej: Salud, Deuda, Certificado"})]}),s.jsxs(se.Group,{className:"mb-2",children:[s.jsx(se.Label,{children:"Descripción"}),s.jsx(se.Control,{as:"textarea",rows:3,name:"descripcion",value:j.descripcion,onChange:C,onBlur:k=>p("descripcion",k.target.value),placeholder:"Ej: Extracto bancario, póliza, certificado"})]})]}),s.jsx(xn,{show:b})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:S,disabled:b,children:"Cancelar"}),s.jsx(Oe,{variant:"primary",onClick:O,disabled:b,children:b?s.jsxs(s.Fragment,{children:[s.jsx(St,{size:"sm"})," Guardando..."]}):"Guardar cambios"})]})]})}const _b=({isMobile:n})=>n?s.jsx("div",{className:"archivo-card skeleton-card-contador",children:s.jsxs("div",{className:"accordion-header d-flex align-items-center p-3",children:[s.jsx("div",{className:"skeleton-circle me-3"}),s.jsxs("div",{className:"flex-grow-1",children:[s.jsx("div",{className:"skeleton-bar mb-2",style:{width:"60%"}}),s.jsx("div",{className:"skeleton-bar",style:{width:"40%"}})]}),s.jsx("div",{className:"skeleton-bar",style:{width:"15px",height:"15px"}})]})}):s.jsxs("tr",{className:"contador-skeleton-row",children:[s.jsx("td",{className:"icono",children:s.jsx("div",{className:"skeleton-circle"})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"80%"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"70%"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"60%"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"90%"}})}),s.jsx("td",{className:"acciones",children:s.jsx("div",{className:"skeleton-bar",style:{width:"40px"}})})]});function cT(){const{puede:n}=ga(),a=n("editarRegistroProducto"),o=n("eliminarRegistroProducto"),l=window.innerWidth<768,{fetchArchivosPorAnio:u,deleteRegistroProducto:d}=Vo(),[p,g]=m.useState(!1),[h,v]=m.useState(null),[b,x]=m.useState(!1),[j,N]=m.useState(!1),C=On(),O=new Date().getFullYear(),[S,k]=m.useState(O-1),[E,T]=m.useState([]),[L,B]=m.useState(!0),[z,_]=m.useState({entidad:"",nombreProducto:"",tipo:""}),[U,Y]=m.useState(null),W=V=>{Y(U===V?null:V)},ne=m.useCallback(async V=>{try{g(!0);const A=await u(V);T(A||[])}catch(A){console.error("❌ Error cargando archivos:",A)}finally{g(!1)}},[u]);m.useEffect(()=>{_({entidad:"",nombreProducto:"",tipo:""}),ne(S),B(!1)},[S,ne,C]);const le=V=>{if(!V)return"📄";switch(V.split(".").pop().toLowerCase()){case"pdf":return s.jsx("span",{className:"icon-pdf"});case"doc":return s.jsx("span",{className:"icon-microsoftword"});case"docx":return s.jsx("span",{className:"icon-microsoftword"});case"xls":return s.jsx("span",{className:"icon-excel"});case"xlsx":return s.jsx("span",{className:"icon-excel"});case"ppt":case"pptx":return"📽️";case"jpg":return s.jsx("span",{className:"icon-jpg"});case"jpeg":return s.jsx("span",{className:"icon-JPEG"});case"png":return s.jsx("span",{className:"icon-png"});case"gif":return"🖼️";case"txt":return s.jsx("span",{className:"icon-texto"});case"zip":case"rar":return"🗜️";default:return"📄"}},ie=V=>(V||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),ee=E.filter(V=>{const A=ie(V.entidad),$=ie(V.nombreProducto),re=ie(V.tipo);return(z.entidad?A===z.entidad:!0)&&(z.nombreProducto?$===z.nombreProducto:!0)&&(z.tipo?re===z.tipo:!0)}).sort((V,A)=>ie(V.entidad).localeCompare(ie(A.entidad))),P=[...new Map(E.map(V=>[ie(V.entidad),{value:ie(V.entidad),label:(V.entidad||"").trim()}])).values()],D=[...new Map(ee.map(V=>[ie(V.nombreProducto),{value:ie(V.nombreProducto),label:(V.nombreProducto||"").trim()}])).values()],K=[...new Map(ee.map(V=>[ie(V.tipo),{value:ie(V.tipo),label:(V.tipo||"").trim()}])).values()];if(L)return s.jsx("div",{className:"text-center p-5",children:s.jsx("p",{children:"Verificando sesión..."})});const oe=async()=>{if(!h)return;(await d(h.registroId)).ok&&T(A=>A.filter($=>$.registroId!==h.registroId)),N(!1),v(null)};return s.jsxs("div",{className:"contador-container",children:[s.jsxs("div",{className:"container mt-4",children:[s.jsxs("h2",{className:"mb-3",children:["📂 Archivos del año ",S]}),s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{children:"Año:"}),s.jsx("select",{value:S,onChange:V=>k(V.target.value),className:"form-select w-auto d-inline ms-2",children:Array.from({length:15}).map((V,A)=>{const $=O-A;return s.jsx("option",{value:$,children:$},$)})})]}),l?s.jsx("div",{className:"accordion-mobile",children:p?Array.from({length:6}).map((V,A)=>s.jsx(_b,{isMobile:!0},`skel-m-${A}`)):ee.length===0?s.jsx("p",{className:"text-center p-4",children:"No hay archivos para este año."}):ee.map((V,A)=>s.jsxs("div",{className:"archivo-card",children:[s.jsxs("div",{className:"accordion-header",onClick:()=>W(A),children:[s.jsx("span",{className:"icono",children:le(V.nombreArchivo)}),s.jsxs("div",{className:"ms-2 flex-grow-1",children:[s.jsx("div",{className:"fw-bold",children:V.entidad}),s.jsx("div",{className:"text-muted small",children:V.nombreProducto})]}),s.jsx("span",{className:"arrow",children:U===A?"▲":"▼"})]}),U===A&&s.jsxs("div",{className:"accordion-body",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Entidad:"})," ",V.entidad]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Producto:"})," ",V.nombreProducto]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Tipo:"})," ",V.tipo]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Descripción:"})," ",V.descripcion||"-"]}),s.jsxs("div",{className:"acciones",children:[s.jsx("i",{className:`bi bi-pencil-square accion-icon ${a?"":"disabled-icon"}`,title:a?"Editar":"No tienes permisos para editar",onClick:$=>{a&&($.stopPropagation(),v(V),x(!0))}}),s.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${o?"":"disabled-icon"}`,title:o?"Eliminar":"No tienes permisos para eliminar",onClick:$=>{o&&($.stopPropagation(),v(V),N(!0))}})]}),s.jsx("button",{className:"btn btn-primary btn-sm w-100 mt-2",onClick:()=>window.open(V.link,"_blank"),children:"📄 Abrir archivo1"})]})]},V.registroId))}):s.jsx("div",{className:"table-responsive archivos-por-anio",children:s.jsxs("table",{className:"table table-bordered table-hover",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{className:"thicon"}),s.jsxs("th",{children:["Entidad",s.jsxs("select",{className:"form-select form-select-sm mt-1",disabled:p,value:z.entidad,onChange:V=>_({...z,entidad:V.target.value}),children:[s.jsx("option",{value:"",children:"Todas"}),!p&&P.map(V=>s.jsx("option",{value:V.value,children:V.label},V.value))]})]}),s.jsxs("th",{children:["Nombre del producto",s.jsxs("select",{className:"form-select form-select-sm mt-1",disabled:p,value:z.nombreProducto,onChange:V=>_({...z,nombreProducto:V.target.value}),children:[s.jsx("option",{value:"",children:"Todos"}),!p&&D.map(V=>s.jsx("option",{value:V.value,children:V.label},V.value))]})]}),s.jsxs("th",{children:["Tipo",s.jsxs("select",{className:"form-select form-select-sm mt-1",disabled:p,value:z.tipo,onChange:V=>_({...z,tipo:V.target.value}),children:[s.jsx("option",{value:"",children:"Todos"}),!p&&K.map(V=>s.jsx("option",{value:V.value,children:V.label},V.value))]})]}),s.jsx("th",{children:"Descripción"}),s.jsx("th",{className:"th-acciones"})]})}),s.jsx("tbody",{children:p?Array.from({length:8}).map((V,A)=>s.jsx(_b,{isMobile:!1},`skel-d-${A}`)):ee.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"6",className:"text-center p-4",children:"No hay archivos para este año."})}):ee.map(V=>s.jsxs("tr",{onClick:()=>window.open(V.link,"_blank"),children:[s.jsx("td",{className:"icono",children:le(V.nombreArchivo)}),s.jsx("td",{children:V.entidad||"-"}),s.jsx("td",{children:V.nombreProducto}),s.jsx("td",{children:V.tipo||"-"}),s.jsx("td",{children:V.descripcion||"-"}),s.jsxs("td",{className:"acciones",children:[s.jsx("i",{className:`bi bi-pencil-square accion-icon ${a?"":"disabled-icon"}`,title:a?"Editar":"No tienes permisos para editar",onClick:A=>{a&&(A.stopPropagation(),v(V),x(!0))}}),s.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${o?"":"disabled-icon"}`,title:o?"Eliminar":"No tienes permisos para eliminar",onClick:A=>{o&&(A.stopPropagation(),v(V),N(!0))}})]})]},V.registroId))})]})})]}),s.jsx(va,{show:j,onHide:()=>N(!1),title:"Eliminar registro",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar el producto nombre"," ",s.jsx("strong",{children:h?.nombreProducto})," entidad"," ",s.jsx("strong",{children:h?.entidad}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:oe}),s.jsx(lT,{show:b,onHide:()=>x(!1),registro:h,onUpdated:V=>{T(A=>A.map($=>$.registroId===V.registroId?{...$,...V}:$))}})]})}function uT({onClose:n,onSaved:a}){const{subirFactura:o}=zm(),{getProductos:l}=Vo(),{errors:u,validateField:d,validateForm:p,clearErrors:g,clearError:h}=Xo(),[v,b]=m.useState(!1),[x,j]=m.useState(!0),[N,C]=m.useState(!1),[O,S]=m.useState(""),[k,E]=m.useState("success"),[T,L]=m.useState({anio:new Date().getFullYear(),entidad:"",descripcion:"",valor:"",metodoPago:"",archivo:null}),[B,z]=m.useState([]),_=ee=>{const{name:P,value:D}=ee.target;L(K=>({...K,[P]:D})),d(P,D)},U=ee=>{const P=ee.target.files[0];L(D=>({...D,archivo:P})),d("archivo",P)},Y=ee=>ee.toLowerCase().split(" ").map(P=>P.charAt(0).toUpperCase()+P.slice(1)).join(" "),W=ee=>ee?new Intl.NumberFormat("es-CO").format(ee):"";m.useEffect(()=>{async function ee(){j(!0);const P=await l(),K=(P?.data||P||[]).filter(oe=>oe.nombre?.toLowerCase().startsWith("tarjeta")).map(oe=>{const V=Y(oe.nombre),A=oe.entidad?Y(oe.entidad):"";return A?`${A} - ${V}`:V});z(K),j(!1)}ee()},[l]);const ne=["Tarjeta Débito","Tarjeta Crédito","Transferencia","Efectivo","Bre-B","Nequi","Daviplata"],le=Array.from(new Set([...ne,...B])).sort((ee,P)=>{const D=ee.toLowerCase().startsWith("tarjeta"),K=P.toLowerCase().startsWith("tarjeta");return D&&!K?-1:!D&&K?1:ee.localeCompare(P)}),ie=async()=>{if(g(),!p(T))return;b(!0);const P={...T,entidad:vt(T.entidad),descripcion:T.descripcion?vt(T.descripcion):"",metodoPago:vt(T.metodoPago),file:T.archivo},D=await o(P);b(!1),D.ok?(console.log("respuesta facturas",D),E("success"),S(D.mensaje),C(!0),a?.(),setTimeout(()=>{n()},3e3)):(E("warning"),S(D.mensaje),C(!0),console.log("respuesta facturas",D))};return s.jsxs("div",{className:"Add-Factura-Modal",children:[s.jsx("div",{className:"modal-backdrop",children:s.jsxs("div",{className:"modal-content",children:[s.jsx("h4",{children:"Subir factura"}),s.jsx(Yo,{errors:u}),s.jsx("label",{children:"Archivo de la Factura"}),s.jsxs("div",{className:"d-flex flex-column gap-2",children:[s.jsx("input",{type:"file",id:"fileInput",accept:"image/*,application/pdf",className:"d-none",onChange:U}),T.archivo?s.jsxs("div",{className:"alert alert-success d-flex justify-content-between align-items-center p-2 mb-0",children:[s.jsxs("small",{className:"text-truncate",children:["✅ ",T.archivo.name]}),s.jsx("button",{className:"btn btn-sm btn-link text-danger",onClick:()=>L(ee=>({...ee,archivo:null})),children:"Cambiar"})]}):s.jsxs("button",{type:"button",className:"btn btn-outline-info w-100 d-flex align-items-center justify-content-center gap-2",onClick:()=>document.getElementById("fileInput").click(),children:[s.jsx("i",{className:"bi bi-camera"}),"Escanear o Seleccionar Archivo"]})]}),s.jsx("label",{children:"Año"}),s.jsx("input",{list:"listaAnios",className:"form-control",name:"anio",value:T.anio,onChange:ee=>{_(ee),h("anio")},onBlur:ee=>d("anio",ee.target.value)}),s.jsx("datalist",{id:"listaAnios",children:Array.from({length:10}).map((ee,P)=>{const D=new Date().getFullYear()-P;return s.jsx("option",{value:D},D)})}),s.jsx("label",{children:"Entidad"}),s.jsx("input",{className:"form-control",name:"entidad",onChange:ee=>{_(ee),h("entidad")},onBlur:ee=>d("entidad",ee.target.value)}),s.jsx("label",{children:"Descripción"}),s.jsx("input",{className:"form-control",name:"descripcion",onChange:ee=>{_(ee),h("descripcion")},onBlur:ee=>d("descripcion",ee.target.value)}),s.jsx("label",{children:"Valor (COP)"}),s.jsx("input",{type:"text",className:"form-control",name:"valor",value:T.valor?W(T.valor):"",onChange:ee=>{const P=ee.target.value.replace(/\D/g,"");L(D=>({...D,valor:P})),d("valor",P),h("valor")},onBlur:()=>d("valor",T.valor)}),s.jsx("label",{children:"Método de Pago"}),s.jsx("select",{className:"form-control",name:"metodoPago",value:T.metodoPago,disabled:x,onChange:ee=>{_(ee),h("metodoPago")},onBlur:ee=>d("metodoPago",ee.target.value),children:x?s.jsx("option",{children:"Cargando..."}):s.jsxs(s.Fragment,{children:[s.jsx("option",{value:"",children:"Seleccione..."}),le.map(ee=>s.jsx("option",{value:ee,children:ee},ee))]})}),s.jsxs("div",{className:"mt-3 d-flex gap-2",children:[s.jsx("button",{className:"btn btn-primary",onClick:ie,children:v?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm"})," Guardando..."]}):"Subir"}),s.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Cancelar"})]}),s.jsx(xn,{show:v})]})}),s.jsx(Ho,{position:"bottom-end",className:"p-3",children:s.jsxs(Nt,{bg:k,show:N,autohide:!0,delay:3e3,onClose:()=>C(!1),children:[s.jsx(Nt.Header,{children:s.jsx("strong",{className:"me-auto",children:"Facturas"})}),s.jsx(Nt.Body,{className:"text-white",children:O})]})})]})}function dT({show:n,onHide:a,factura:o,onUpdated:l}){const{updateFactura:u}=zm(),{getProductos:d}=Vo(),[p,g]=m.useState(!1),[h,v]=m.useState(!0),[b,x]=m.useState([]),[j,N]=m.useState(!1),[C,O]=m.useState(""),[S,k]=m.useState("success"),[E,T]=m.useState({entidad:"",descripcion:"",valor:"",metodoPago:"",registroId:""}),L=W=>W.toLowerCase().split(" ").map(ne=>ne.charAt(0).toUpperCase()+ne.slice(1)).join(" "),B=W=>W?new Intl.NumberFormat("es-CO").format(W):"",z=["Tarjeta Débito","Tarjeta Crédito","Transferencia","Efectivo","Bre-B","Nequi","Daviplata"];m.useEffect(()=>{o&&T({registroId:o.registroId,entidad:o.entidad||"",descripcion:o.descripcion||"",valor:o.valor||"",metodoPago:o.metodoPago||""})},[o]),m.useEffect(()=>{async function W(){v(!0);try{const ne=await d(),ie=(ne?.data||ne||[]).filter(ee=>ee.nombre?.toLowerCase().startsWith("tarjeta")).map(ee=>{const P=L(ee.nombre),D=ee.entidad?L(ee.entidad):"";return D?`${D} - ${P}`:P});x(ie)}catch(ne){console.error("Error cargando métodos:",ne)}finally{v(!1)}}n&&W()},[d,n]);const _=Array.from(new Set([...z,...b,E.metodoPago])).filter(Boolean).sort((W,ne)=>{const le=W.toLowerCase().startsWith("tarjeta"),ie=ne.toLowerCase().startsWith("tarjeta");return le&&!ie?-1:!le&&ie?1:W.localeCompare(ne)}),U=W=>{const{name:ne,value:le}=W.target;if(ne==="valor"){const ie=le.replace(/\D/g,"");T(ee=>({...ee,[ne]:ie}))}else T(ie=>({...ie,[ne]:le}))},Y=async()=>{g(!0);const W={...E,entidad:vt(E.entidad),descripcion:E.descripcion?vt(E.descripcion):"",metodoPago:vt(E.metodoPago)},ne=await u(W);ne.ok?(console.log("data",ne),g(!1),k("success"),O(ne.mensaje),N(!0),l(),a()):(k("warning"),O(ne.mensaje),N(!0),g(!1),alert(ne.mensaje||"Error al actualizar la factura"))};return o?s.jsxs("div",{className:"edit-factura-modal",children:[s.jsxs(ye,{show:n,onHide:a,centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:"✏️ Editar factura"})}),s.jsxs(ye.Body,{children:[s.jsxs(se,{children:[s.jsxs(se.Group,{className:"mb-3",children:[s.jsx(se.Label,{children:"Entidad"}),s.jsx(se.Control,{type:"text",name:"entidad",value:E.entidad,onChange:U})]}),s.jsxs(se.Group,{className:"mb-3",children:[s.jsx(se.Label,{children:"Descripción"}),s.jsx(se.Control,{type:"text",name:"descripcion",value:E.descripcion,onChange:U})]}),s.jsxs(se.Group,{className:"mb-3",children:[s.jsx(se.Label,{children:"Valor (COP)"}),s.jsx(se.Control,{type:"text",name:"valor",placeholder:"Ej: 25.000",value:E.valor?B(E.valor):"",onChange:U})]}),s.jsxs(se.Group,{className:"mb-3",children:[s.jsx(se.Label,{children:"Método de pago"}),s.jsx(se.Select,{name:"metodoPago",value:E.metodoPago||"",onChange:U,disabled:h,children:h?s.jsx("option",{children:"Cargando métodos..."}):s.jsxs(s.Fragment,{children:[s.jsx("option",{value:"",children:"Seleccione..."}),_.map(W=>s.jsx("option",{value:W,children:W},W))]})})]})]}),s.jsx(xn,{show:p})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:a,children:"Cancelar"}),s.jsx(Oe,{variant:"primary",onClick:Y,disabled:p,children:p?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Guardando..."]}):"Guardar cambios"})]})]}),s.jsx(Ho,{position:"bottom-end",className:"p-3",children:s.jsxs(Nt,{bg:S,show:j,autohide:!0,delay:3e3,onClose:()=>N(!1),children:[s.jsx(Nt.Header,{children:s.jsx("strong",{className:"me-auto",children:"Facturas"})}),s.jsx(Nt.Body,{className:"text-white",children:C})]})})]}):null}const zb=({isMobile:n})=>n?s.jsxs("div",{className:"factura-card skeleton-card-mobile",children:[s.jsxs("div",{className:"card-top",children:[s.jsx("div",{className:"skeleton-bar",style:{width:"40%"}}),s.jsx("div",{className:"skeleton-bar",style:{width:"30%"}})]}),s.jsx("div",{className:"skeleton-bar mt-3",style:{width:"90%"}}),s.jsxs("div",{className:"acciones-mobile mt-3",children:[s.jsx("div",{className:"skeleton-square"}),s.jsx("div",{className:"skeleton-circle"})]})]}):s.jsxs("tr",{className:"factura-skeleton-row",children:[s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"120px"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"250px"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"80px"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"100px"}})}),s.jsx("td",{className:"acciones",children:s.jsx("div",{className:"skeleton-bar",style:{width:"40px"}})})]});function fT(){const{puede:n}=ga(),a=n("obtenerFacturasPorAnio"),o=n("subirArchivoFacturas"),l=n("actualizarFactura"),u=n("eliminarFactura"),d=window.innerWidth<768,p=new Date().getFullYear(),{loading:g,fetchFacturasPorAnio:h,deleteFactura:v}=zm(),[b,x]=m.useState(p),[j,N]=m.useState([]),[C,O]=m.useState(!1),[S,k]=m.useState(""),[E,T]=m.useState(""),[L,B]=m.useState(!1),[z,_]=m.useState(null),[U,Y]=m.useState(!1),[W,ne]=m.useState(!1),[le,ie]=m.useState(""),[ee,P]=m.useState("success");m.useEffect(()=>{if(!a){N([]);return}h(b).then(N)},[b,h,a]);const D=m.useMemo(()=>j.filter(H=>!S||H.entidad===S).filter(H=>!E||H.metodoPago===E).reduce((H,ue)=>H+Number(ue.valor||0),0),[j,S,E]),K=m.useMemo(()=>j.filter(H=>!S||H.entidad===S).filter(H=>!E||H.metodoPago===E),[j,S,E]),oe=H=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(H),V=H=>{window.open(H.link,"_blank")},A=async()=>{if(!z)return;const H=await v(z.registroId);H.ok?(N(ue=>ue.filter(fe=>fe.registroId!==z.registroId)),P("success"),ie(H.mensaje),ne(!0)):(P("warning"),ie(H.mensaje),ne(!0)),B(!1),_(null)},$=[...new Set(j.map(H=>H.entidad))],re=[...new Set(j.map(H=>H.metodoPago))],ae=()=>{h(b).then(N)};return s.jsxs("div",{className:"container mt-4 facturas-container",children:[s.jsxs("div",{className:"header-flex",children:[s.jsxs("h2",{children:["🧾 Facturas ",b]}),s.jsxs("div",{className:"d-flex align-items-center gap-3",children:[s.jsxs("strong",{children:["Total: ",oe(D)]}),!d&&s.jsx("button",{disabled:!o,className:"btn btn-primary",onClick:()=>O(!0),children:"➕ Subir factura"})]})]}),a?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"filtros d-flex gap-2 my-3",children:[s.jsx("select",{className:"form-select w-auto",value:b,onChange:H=>x(H.target.value),children:Array.from({length:10}).map((H,ue)=>{const fe=p-ue;return s.jsx("option",{children:fe},fe)})}),s.jsxs("select",{className:"form-select w-auto",value:S,onChange:H=>k(H.target.value),children:[s.jsx("option",{value:"",children:"Todas las entidades"}),$.map(H=>s.jsx("option",{value:H,children:H},H))]}),s.jsxs("select",{className:"form-select w-auto",value:E,onChange:H=>T(H.target.value),children:[s.jsx("option",{value:"",children:"Todos los métodos"}),re.map(H=>s.jsx("option",{value:H,children:H},H))]})]}),g?d?s.jsx("div",{className:"facturas-mobile",children:Array.from({length:5}).map((H,ue)=>s.jsx(zb,{isMobile:!0},ue))}):s.jsx("div",{className:"table-responsive facturas-por-anio",children:s.jsxs("table",{className:"table table-bordered",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{children:"Entidad"}),s.jsx("th",{children:"Descripción"}),s.jsx("th",{children:"Valor"}),s.jsx("th",{children:"Método"}),s.jsx("th",{})]})}),s.jsx("tbody",{children:Array.from({length:5}).map((H,ue)=>s.jsx(zb,{isMobile:!1},ue))})]})}):K.length===0?s.jsx("div",{className:"Facturas-Loading-CargandoFacturas",children:s.jsx("p",{children:"No hay facturas con esos filtros."})}):s.jsxs(s.Fragment,{children:[!d&&s.jsx("div",{className:"table-responsive facturas-por-anio",children:s.jsxs("table",{className:"table table-bordered table-hover",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{children:"Entidad"}),s.jsx("th",{children:"Descripción"}),s.jsx("th",{children:"Valor"}),s.jsx("th",{children:"Método"}),s.jsx("th",{})]})}),s.jsx("tbody",{children:K.map(H=>s.jsxs("tr",{children:[s.jsx("td",{onClick:()=>V(H),children:H.entidad}),s.jsx("td",{onClick:()=>V(H),children:H.descripcion}),s.jsx("td",{onClick:()=>V(H),children:oe(H.valor)}),s.jsx("td",{onClick:()=>V(H),children:H.metodoPago}),s.jsxs("td",{className:"acciones",children:[s.jsx("i",{className:`bi bi-pencil-square accion-icon ${l?"":"disabled-icon"}`,title:l?"Editar":"No tienes permisos para editar",onClick:()=>{l&&(_(H),Y(!0))}}),s.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${u?"":"disabled-icon"}`,title:u?"Eliminar":"No tienes permisos para eliminar",onClick:()=>{u&&(_(H),B(!0))}})]})]},H.registroId))})]})}),d&&s.jsx("div",{className:"facturas-mobile",children:K.map(H=>s.jsxs("div",{className:"factura-card",onClick:()=>V(H),children:[s.jsxs("div",{className:"card-top",children:[s.jsx("div",{className:"entidad",children:H.entidad}),s.jsx("div",{className:"valor",children:oe(H.valor)})]}),s.jsx("div",{className:"descripcion",children:H.descripcion}),s.jsxs("div",{className:"acciones-mobile",children:[s.jsx("i",{className:`bi bi-pencil-square accion-icon ${l?"":"disabled-icon"}`,title:l?"Editar":"No tienes permisos para editar",onClick:ue=>{ue.stopPropagation(),l&&(_(H),Y(!0))}}),s.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${u?"":"disabled-icon"}`,title:u?"Eliminar":"No tienes permisos para eliminar",onClick:ue=>{ue.stopPropagation(),u&&(_(H),B(!0))}})]})]},H.registroId))})]})]}):s.jsx("div",{className:"Facturas-Loading-CargandoFacturas",children:s.jsx("p",{children:"No tienes permisos para visualizar facturas."})}),d&&o&&s.jsx("button",{className:"fab-subir",onClick:()=>O(!0),children:s.jsx("i",{className:"bi bi-plus-lg"})}),C&&o&&s.jsx(uT,{onClose:()=>O(!1),onSaved:ae}),s.jsx(va,{show:L,onHide:()=>B(!1),title:"Eliminar factura",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar la factura de"," ",s.jsx("strong",{children:z?.entidad})," por"," ",s.jsx("strong",{children:oe(z?.valor||0)}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:A}),s.jsx(dT,{show:U,factura:z,onHide:()=>Y(!1),onUpdated:ae}),s.jsx(Ho,{position:"bottom-end",className:"p-3",children:s.jsxs(Nt,{bg:ee,show:W,autohide:!0,delay:3e3,onClose:()=>ne(!1),children:[s.jsx(Nt.Header,{children:s.jsx("strong",{className:"me-auto",children:"Productos"})}),s.jsx(Nt.Body,{className:"text-white",children:le})]})})]})}const mT=()=>{const n=On();return s.jsxs("div",{className:"legal-container",children:[s.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[s.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),s.jsx("h1",{children:"Política de Privacidad"}),s.jsx("p",{children:"Última actualización: 20 de enero de 2026"}),s.jsxs("p",{children:["Esta Política de Privacidad describe cómo ",s.jsx("strong",{children:"AppDeclaración"})," recopila, utiliza y protege su información al utilizar nuestro servicio de autenticación a través de Google."]}),s.jsxs("div",{class:"highlight",children:[s.jsx("strong",{children:"Nota importante sobre la arquitectura:"})," Esta aplicación es una herramienta descentralizada. Los datos que usted genera se almacenan exclusivamente en su propia cuenta de Google Drive a través de su implementación personal de Google Apps Script. Nosotros no tenemos acceso a sus archivos ni a su información privada."]}),s.jsx("h2",{children:"1. Información que recopilamos"}),s.jsx("p",{children:"Nuestra aplicación utiliza los servicios de Google OAuth para la autenticación. Al iniciar sesión, solicitamos acceso a:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Dirección de correo electrónico:"})," Para identificar su cuenta y gestionar los permisos de acceso."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Información básica de perfil (Nombre y foto):"})," Para personalizar su experiencia dentro de la interfaz."]})]}),s.jsx("h2",{children:"1.1 Información que NO recopilamos"}),s.jsx("p",{children:"AppDeclaración no recopila, almacena ni procesa:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Contraseñas de Google."}),s.jsx("li",{children:"Contenido de correos electrónicos."}),s.jsx("li",{children:"Archivos personales fuera del entorno creado por la aplicación."}),s.jsx("li",{children:"Información bancaria, financiera o datos de pago."})]}),s.jsx("h2",{children:"2. Uso de la información"}),s.jsx("p",{children:"La información obtenida a través de Google se utiliza únicamente para:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Validar su identidad y permitir el acceso a las funciones del backend."}),s.jsx("li",{children:"Registrar logs de auditoría de inicio de sesión (almacenados en su propio Google Drive)."}),s.jsx("li",{children:"Garantizar que el sistema de permisos y roles funcione correctamente."})]}),s.jsx("h2",{children:"3. Almacenamiento de datos"}),s.jsxs("p",{children:["Todos los datos operativos (usuarios, logs, configuraciones y archivos) se almacenan en archivos JSON dentro de la infraestructura de ",s.jsx("strong",{children:"Google Drive del usuario"}),". Esta aplicación no posee una base de datos centralizada y los desarrolladores no pueden ver, editar ni eliminar sus datos."]}),s.jsx("h2",{children:"4. Intercambio de datos con terceros"}),s.jsxs("p",{children:[s.jsx("strong",{children:"No vendemos, alquilamos ni compartimos"})," su información personal con terceros."]}),s.jsx("p",{children:"El frontend de la aplicación puede estar alojado en plataformas como GitHub Pages, las cuales únicamente sirven contenido estático y no tienen acceso a información personal, datos de autenticación ni archivos del usuario."}),s.jsx("p",{children:"Los datos solo fluyen entre su navegador, el frontend alojado en GitHub y su backend personal en Google Apps Script."}),s.jsx("h2",{children:"5. Seguridad"}),s.jsx("p",{children:"La seguridad de su información se apoya en los protocolos y estándares de seguridad proporcionados por Google. Al utilizar OAuth 2.0, la aplicación no conoce, no solicita ni almacena su contraseña de Google en ningún momento."}),s.jsx("h2",{children:"6. Sus Derechos"}),s.jsxs("p",{children:["Usted puede revocar el acceso de esta aplicación a su cuenta de Google en cualquier momento a través de la configuración de seguridad de su cuenta de Google en: ",s.jsx("a",{href:"https://myaccount.google.com/permissions",target:"_blank",children:"Google - Aplicaciones con acceso a tu cuenta"}),"."]}),s.jsx("h2",{children:"7. Cambios a esta Política de Privacidad"}),s.jsx("p",{children:"Esta Política de Privacidad puede actualizarse ocasionalmente para reflejar mejoras técnicas o cambios normativos. Cualquier modificación será publicada en esta misma página con la fecha de última actualización correspondiente."}),s.jsx("h2",{children:"8. Contacto"}),s.jsxs("p",{children:["Si tiene preguntas sobre esta política, puede contactarnos en: ",s.jsx("strong",{children:"hectorjaviermorenoh@gmail.com"})]})]})},pT=()=>{const n=On();return s.jsxs("div",{className:"terminos-container",children:[s.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[s.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),s.jsx("h1",{children:"Términos y Condiciones de Uso"}),s.jsx("p",{children:"Última actualización: 20 de enero de 2026"}),s.jsxs("div",{class:"notice",children:[s.jsx("strong",{children:"Aviso Importante sobre la Arquitectura del Servicio:"}),s.jsx("br",{}),"AppDeclaración es una aplicación descentralizada. El frontend es centralizado, pero el backend, el procesamiento de datos y el almacenamiento se ejecutan de forma privada dentro de la cuenta personal de Google del usuario, mediante Google Apps Script y Google Drive."]}),s.jsx("h2",{children:"1. Aceptación de los Términos"}),s.jsx("p",{children:"Al acceder, instalar o utilizar AppDeclaración, usted acepta quedar legalmente vinculado a los presentes Términos y Condiciones. Si no está de acuerdo con alguno de ellos, debe abstenerse de utilizar la aplicación."}),s.jsx("h2",{children:"2. Descripción del Servicio"}),s.jsx("p",{children:"AppDeclaración es una herramienta de organización documental y gestión tributaria personal, orientada a facilitar la preparación y el control de información relacionada con declaraciones de renta y soportes fiscales."}),s.jsx("p",{children:"La aplicación permite, entre otras funciones:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Registrar y clasificar entidades emisoras de certificados y documentos tributarios."}),s.jsx("li",{children:"Organizar automáticamente archivos y fotografías en carpetas estructuradas por año gravable y categoría."}),s.jsx("li",{children:"Gestionar datos fiscales básicos como NIT, nombres e identificaciones."}),s.jsx("li",{children:"Administrar accesos mediante tokens y roles definidos por el propio usuario."}),s.jsx("li",{children:"Generar respaldos completos (backups) en formato ZIP de la información almacenada."})]}),s.jsxs("p",{children:["El software se entrega ",s.jsx("strong",{children:"“tal cual”"})," y su funcionamiento depende de que el usuario mantenga una cuenta de Google activa y correctamente configurada."]}),s.jsx("h2",{children:"3. Responsabilidad del Usuario"}),s.jsx("p",{children:"El usuario acepta y reconoce que es el único y exclusivo responsable de:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"La correcta instalación, despliegue y mantenimiento del backend en su cuenta de Google Apps Script."}),s.jsx("li",{children:"La integridad, disponibilidad y confidencialidad de los archivos y carpetas generados en su Google Drive."}),s.jsx("li",{children:"La veracidad y exactitud de la información tributaria ingresada."}),s.jsx("li",{children:"El cumplimiento de las leyes tributarias y fiscales aplicables en su jurisdicción."})]}),s.jsxs("div",{class:"warning",children:[s.jsx("h2",{children:"4. Integridad del Código y Seguridad del Script"}),s.jsx("p",{children:"Para garantizar la seguridad de su información y el correcto funcionamiento del sistema, el usuario se compromete a cumplir las siguientes normas de seguridad técnica:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Origen Oficial:"})," El código de Backend (Google Apps Script) debe ser obtenido exclusivamente desde la aplicación oficial de ",s.jsx("strong",{children:"AppDeclaración"}),". No utilice códigos proporcionados por terceros, foros o fuentes no oficiales."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Prohibición de Alteración:"})," El usuario no debe modificar, editar ni alterar el código fuente proporcionado para el backend. Cualquier cambio manual puede introducir fallos de seguridad, pérdida de datos o comportamientos imprevistos."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ejecución por el Propietario:"})," El despliegue y ejecución del script en el entorno de Google Apps Script debe ser realizado personalmente por el dueño de la cuenta de Google. No permita que terceros accedan a su entorno de desarrollo para pegar o ejecutar códigos en su nombre."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Prevención de Código Malicioso:"}),' El uso de versiones modificadas o "clones" de la aplicación representa un riesgo crítico de seguridad. El desarrollador original no se hace responsable de las consecuencias derivadas del uso de código alterado o distribuido por canales ajenos a la aplicación oficial.']})]})]}),s.jsx("h2",{children:"5. Seguridad de la Cuenta de Google"}),s.jsx("p",{children:"Dado que AppDeclaración opera íntegramente sobre la infraestructura personal del usuario, este reconoce que:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Es plenamente responsable de la seguridad de su cuenta de Google."}),s.jsx("li",{children:"Debe proteger sus credenciales de acceso y no compartirlas con terceros."}),s.jsxs("li",{children:["Se recomienda de forma expresa habilitar mecanismos de seguridad adicionales, como la ",s.jsx("strong",{children:"autenticación en dos pasos (2FA)"}),"."]}),s.jsx("li",{children:"Cualquier acceso no autorizado derivado de una configuración insegura de la cuenta es responsabilidad exclusiva del usuario."})]}),s.jsx("p",{children:"El desarrollador no tiene acceso, control ni visibilidad sobre las credenciales, datos o archivos almacenados en la cuenta del usuario."}),s.jsx("h2",{children:"6. Privacidad y Datos"}),s.jsx("p",{children:"AppDeclaración no utiliza bases de datos centralizadas ni almacena información en servidores controlados por el desarrollador. Toda la información reside exclusivamente en archivos locales del Google Drive del usuario, tales como:"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("code",{children:"productos.json"})}),s.jsx("li",{children:s.jsx("code",{children:"bddatos.json"})}),s.jsx("li",{children:s.jsx("code",{children:"facturas.json"})}),s.jsx("li",{children:"y otros archivos generados por la aplicación"})]}),s.jsx("h2",{children:"7. Limitación de Responsabilidad"}),s.jsx("p",{children:"Bajo ninguna circunstancia el desarrollador será responsable por:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Pérdida, corrupción o eliminación de datos almacenados en la cuenta del usuario."}),s.jsxs("li",{children:["Errores derivados de información incorrecta o ",s.jsx("strong",{children:"código de backend modificado"})," por el usuario."]}),s.jsx("li",{children:"Interrupciones del servicio ocasionadas por cambios, fallos o políticas de Google Cloud, Google Drive, Apps Script o GitHub."}),s.jsx("li",{children:"Daños directos o indirectos derivados del uso o imposibilidad de uso de la aplicación."})]}),s.jsx("h2",{children:"8. Modificaciones del Servicio"}),s.jsx("p",{children:"El desarrollador podrá actualizar el frontend para mejoras o correcciones. La actualización del backend desplegado en la cuenta del usuario es responsabilidad exclusiva de este último."}),s.jsx("h2",{children:"9. Propiedad Intelectual"}),s.jsxs("p",{children:["El código fuente, diseño y concepto de AppDeclaración son propiedad de ",s.jsx("strong",{children:"Hector Javier Moreno"}),". Se concede una licencia de uso personal, no exclusiva, no transferible y revocable."]}),s.jsx("h2",{children:"10. Terminación"}),s.jsx("p",{children:"El usuario puede dejar de utilizar el servicio en cualquier momento eliminando el script de su cuenta de Google y revocando los permisos OAuth. El desarrollador no puede cancelar ni eliminar cuentas del usuario, dado que la infraestructura es completamente privada."}),s.jsx("h2",{children:"11. Uso Gratuito y Donaciones de Carácter Simbólico"}),s.jsxs("p",{children:["AppDeclaración es una herramienta de uso ",s.jsx("strong",{children:"totalmente gratuito"}),". El acceso, instalación y utilización de la aplicación no implican ningún costo para el usuario."]}),s.jsxs("p",{children:["De manera opcional, el usuario podrá realizar una ",s.jsx("strong",{children:"donación voluntaria y de carácter simbólico"}),", como un gesto de buena voluntad si considera que la aplicación le ha resultado útil o le ha ayudado a resolver una necesidad puntual."]}),s.jsx("p",{children:"Estas donaciones tienen un sentido meramente simbólico —por ejemplo, el valor de un café— y no constituyen en ningún caso un pago por el uso del software."}),s.jsxs("ul",{children:[s.jsx("li",{children:"La donación es completamente voluntaria y no obligatoria."}),s.jsx("li",{children:"No existe un monto mínimo ni máximo establecido."}),s.jsx("li",{children:"La donación no otorga derechos adicionales, funcionalidades extra ni soporte preferencial."}),s.jsx("li",{children:"La no realización de una donación no limita ni condiciona el uso de la aplicación."})]}),s.jsx("p",{children:"En caso de que el usuario decida realizar una donación, podrá hacerlo a través del enlace de donaciones en la aplicación."}),s.jsx("h2",{children:"12. Contacto"}),s.jsxs("p",{children:["Para consultas relacionadas con estos términos, puede contactar a:",s.jsx("br",{}),s.jsx("strong",{children:"hectorjaviermorenoh@gmail.com"})]}),s.jsx("h2",{children:"13. Legislación Aplicable"}),s.jsx("p",{children:"Estos Términos y Condiciones se rigen por la legislación vigente en la República de Colombia. Cualquier controversia será resuelta conforme a las normas aplicables en dicha jurisdicción."}),s.jsx("div",{class:"footer",children:"© 2026 AppDeclaración. Todos los derechos reservados."})]})};function hT(){const n=On();return s.jsx("div",{className:"acerca-de-container container my-5 animate__animated animate__fadeIn",children:s.jsx("div",{className:"row justify-content-center",children:s.jsxs("div",{className:"col-md-10 col-lg-8",children:[s.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[s.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),s.jsxs("div",{className:"card shadow-sm p-4 p-md-5",children:[s.jsxs("header",{className:"text-center mb-3",children:[s.jsx("h1",{className:"fw-bold text-primary",children:"AppDeclaración"}),s.jsx("p",{className:"lead text-muted",children:"Tu asistente personal para la organización tributaria"})]}),s.jsxs("section",{className:"mb-3",children:[s.jsx("h4",{className:"fw-bold border-bottom pb-2 mb-3",children:"¿Qué es AppDeclaración?"}),s.jsx("p",{children:"Es una solución tecnológica diseñada para eliminar el estrés de la temporada de impuestos. Su propósito principal es ayudarte a recopilar, organizar y visualizar los certificados y facturas necesarios para tu declaración de renta de forma eficiente y centralizada."})]}),s.jsxs("section",{className:"mb-3",children:[s.jsx("h4",{className:"fw-bold border-bottom pb-2 mb-3",children:"Características Principales"}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"badge bg-primary-soft text-primary p-3 me-3",children:s.jsx("i",{className:"bi bi-folder-check fs-4"})}),s.jsxs("div",{children:[s.jsx("h6",{className:"fw-bold mb-1",children:"Organización Inteligente"}),s.jsx("p",{className:"small text-muted",children:"Archivos organizados automáticamente por año gravable y categorías."})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"badge bg-success-soft text-success p-3 me-3",children:s.jsx("i",{className:"bi bi-shield-lock fs-4"})}),s.jsxs("div",{children:[s.jsx("h6",{className:"fw-bold mb-1",children:"Privacidad Total"}),s.jsx("p",{className:"small text-muted",children:"Los datos nunca salen de tu cuenta de Google. Tú eres el único dueño."})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"badge bg-info-soft text-info p-3 me-3",children:s.jsx("i",{className:"bi bi-camera fs-4"})}),s.jsxs("div",{children:[s.jsx("h6",{className:"fw-bold mb-1",children:"Soportes y Facturas"}),s.jsx("p",{className:"small text-muted",children:"Sube archivos o toma fotos de tus facturas de compra al instante."})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"badge bg-warning-soft text-warning p-3 me-3",children:s.jsx("i",{className:"bi bi-file-zip fs-4"})}),s.jsxs("div",{children:[s.jsx("h6",{className:"fw-bold mb-1",children:"Backup Seguro"}),s.jsx("p",{className:"small text-muted",children:"Exporta toda tu información en un archivo ZIP con un solo clic."})]})]})})]})]}),s.jsxs("section",{className:"bg-light p-2 rounded mb-3",children:[s.jsx("h4",{className:"fw-bold mb-3",children:"Arquitectura Descentralizada"}),s.jsxs("p",{className:"mb-0",children:["A diferencia de otras aplicaciones, ",s.jsx("strong",{children:"AppDeclaración"})," no utiliza bases de datos centrales. Funciona mediante un modelo donde el frontend se conecta directamente a tu propio backend en",s.jsx("strong",{children:" Google Apps Script"}),". Esto garantiza que tus datos tributarios residan siempre dentro de tu espacio personal de ",s.jsx("strong",{children:"Google Drive"}),"."]})]}),s.jsxs("footer",{className:"text-center mt-3 pt-4 border-top",children:[s.jsxs("p",{className:"mb-1 text-muted",children:["Desarrollado por ",s.jsx("strong",{children:"Hector Javier Moreno"})]}),s.jsxs("div",{className:"mt-3",children:[s.jsx("p",{className:"small mb-2",children:"Si esta herramienta te ha sido útil, puedes apoyar su mantenimiento:"}),s.jsxs(En,{to:"/donaciones",className:"btn btn-warning fw-bold",children:[s.jsx("i",{className:"bi bi-cup-hot me-2"}),"Invítame un café"]})]})]})]})]})})})}const gT="/appdeclaracion/assets/qr_nequi-BBArSa2A.png";function vT(){const n=On(),[a,o]=m.useState(!1),l="3103434753",u=()=>{navigator.clipboard.writeText(l),o(!0),setTimeout(()=>o(!1),2e3)};return s.jsx("div",{className:"donaciones-container container my-5 animate__animated animate__fadeIn",children:s.jsx("div",{className:"row justify-content-center",children:s.jsxs("div",{className:"col-md-9 col-lg-7",children:[s.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[s.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),s.jsxs("div",{className:"card shadow-lg border-0 p-4 p-md-5 text-center",children:[s.jsxs("header",{className:"mb-3 text-center",children:[s.jsx("div",{className:"badge bg-warning-soft text-warning p-3 mb-3 fs-4 rounded-circle",children:s.jsx("i",{className:"bi bi-cup-hot-fill"})}),s.jsx("h1",{className:"fw-bold text-dark",children:"¿Te gustaría invitarme un café?"}),s.jsxs("p",{className:"lead text-muted mx-auto",style:{maxWidth:"500px"},children:["AppDeclaración es y seguirá siendo una herramienta ",s.jsx("strong",{children:"totalmente gratuita"}),". Si te ha sido útil, cualquier aporte voluntario es bienvenido para apoyar su mantenimiento."]})]}),s.jsxs("div",{className:"row g-4 align-items-center mb-5",children:[s.jsxs("div",{className:"col-md-6 border-end-md",children:[s.jsx("div",{className:"qr-wrapper p-3 bg-white border rounded-4 shadow-sm mx-auto",style:{maxWidth:"250px"},children:s.jsx("img",{src:gT,alt:"Código QR Nequi para donaciones",className:"img-fluid rounded-3"})}),s.jsx("div",{className:"small text-muted mt-2",children:"Escanea desde tu app Nequi"})]}),s.jsxs("div",{className:"col-md-6 text-md-start px-md-4",children:[s.jsx("h6",{className:"text-uppercase fw-bold text-secondary mb-3 small",children:"Medios en Colombia"}),s.jsxs("div",{className:"d-flex align-items-center mb-3",children:[s.jsx("span",{className:"badge bg-nequi me-2",children:"Nequi"}),s.jsx("span",{className:"badge bg-breb",children:"Bre-B"})]}),s.jsxs("div",{className:"info-cuenta p-3 border rounded-3 bg-white shadow-sm mb-3",children:[s.jsx("div",{className:"small text-muted mb-1",children:"Número de cuenta / Celular"}),s.jsx("div",{className:"h4 fw-bold mb-1 text-dark letter-spacing-1",children:l}),s.jsx("div",{className:"small text-primary fw-medium",children:"A nombre de: Hector Javier Moreno"})]}),s.jsxs("button",{className:`btn ${a?"btn-success":"btn-outline-dark"} w-100 fw-bold`,onClick:u,children:[s.jsx("i",{className:`bi ${a?"bi-check-all":"bi-clipboard"} me-2`}),a?"¡Copiado!":"Copiar número"]})]})]}),s.jsxs("div",{className:"disclaimer p-3 rounded-3 text-center mx-auto",style:{maxWidth:"600px"},children:[s.jsx("i",{className:"bi bi-rocket-takeoff me-2"}),"Tu apoyo es un reconocimiento al tiempo que ",s.jsx("strong",{children:"AppDeclaración"})," te ha ahorrado en la recopilación de tus documentos. ",s.jsx("strong",{children:"¡Gracias por valorar este desarrollo!"})]})]})]})})})}const d0=({isOpen:n,onClose:a,titulo:o,codigo:l})=>{const[u,d]=m.useState(!1),p=()=>{navigator.clipboard.writeText(l),d(!0),setTimeout(()=>{d(!1)},2e3)};return n?s.jsx("div",{className:"modal-backend-overlay",onClick:a,children:s.jsxs("div",{className:"modal-backend",onClick:g=>g.stopPropagation(),children:[s.jsx("h2",{children:o}),s.jsx("pre",{children:s.jsx("code",{children:l})}),s.jsxs("div",{className:"modal-botones",children:[s.jsx("button",{onClick:p,children:"Copiar código"}),s.jsx("button",{onClick:a,children:"Cerrar"})]}),u&&s.jsx("p",{className:"mensaje-copiado",children:"Script copiado correctamente"})]})}):null},bT=`/******************************
 * Version
 ******************************/
 const VERSION = "2805261143PM";

/******************************
 * CONFIGURACIÓN INICIAL
 ******************************/
const CARPETA_PRINCIPAL = "declaracion";
const CARPETA_SISTEMA = "core";
const JSON_CONFIGURACION = "configuracion.json";
const JSON_USUARIOS = "usuarios.json";
const JSON_ROLES = "roles.json";
const JSON_PRODUCTOS = "productos.json";
const JSON_BDD_DATOS = "bddatos.json";
const JSON_BDD_FACTURAS = "bddatosFacturas.json";
const JSON_LOGS = "logs.json";
const JSON_DATOS_TRIBUTARIOS = "datosTributarios.json";
const URL_PRODUCCION = "https://appdeclaracion.github.io/appdeclaracion";

/******************************
 * CONSTANTE DE CONFIGURACIONES INICIALES
 ******************************/
const CONFIG_INICIAL = {
  CARPETA_PRINCIPAL: "",
  TAMANO_MAX_MB: 10,
  TIPOS_PERMITIDOS: ["pdf", "jpg", "jpeg", "png", "docx", "txt", "xlsx"],
  TOKEN_EXP_MINUTOS: 60
};

const DATOS_TRIBUTARIOS_INICIALES = [
  { id: "nit", label: "Número de Identificación Tributaria (NIT)", valor: "", orden: 1 },
  { id: "primerApellido", label: "Primer apellido", valor: "", orden: 2 },
  { id: "segundoApellido", label: "Segundo apellido", valor: "", orden: 3 },
  { id: "primerNombre", label: "Primer nombre", valor: "", orden: 4 },
  { id: "otrosNombres", label: "Otros nombres", valor: "", orden: 5 },
  { id: "codigoDireccionSeccional", label: "Código Dirección Seccional", valor: "", orden: 6 },
  { id: "codigoActividadEconomica", label: "Cód. Actividad económica", valor: "", orden: 7 }
];

const ROLES_INICIALES = [
  {
    "rol": "administrador",
    "permisos": [
      "*"
    ]
  },
  {
    "rol": "Contador",
    "permisos": [
      "obtenerDatosTributarios",
      "obtenerProductosPorArchivo",
      "subirArchivoProducto",
      "remplazarArchivoProducto",
      "subirArchivoFacturas",
      "agregarProducto",
      "actualizarProducto",
      "eliminarProducto",
      "actualizarDatosTributarios",
      "obtenerFacturasPorAnio",
      "actualizarFactura",
      "editarRegistroProducto",
      "eliminarFactura",
    ]
  },
  {
    "rol": "Declarante",
    "permisos": [
      "obtenerDatosTributarios",
      "obtenerProductosPorArchivo",
      "subirArchivoProducto",
      "remplazarArchivoProducto",
      "subirArchivoFacturas",
      "agregarProducto",
      "actualizarProducto",
      "eliminarProducto",
      "actualizarDatosTributarios",
      "obtenerFacturasPorAnio",
      "actualizarFactura",
      "editarRegistroProducto",
      "eliminarFactura",
    ]
  }
];

const FUNCIONES_LOGICA_NEGOCIO = [

  // --- BLOQUE: PRODUCTOS ---
  "obtenerProductosPorArchivo",
  "agregarProducto",
  "actualizarProducto",
  "eliminarProducto",
  "subirArchivoProducto",
  "remplazarArchivoProducto",
  "editarRegistroProducto",
  "eliminarRegistroProducto",

  // --- BLOQUE: FACTURACIÓN ---
  "obtenerFacturasPorAnio",
  "subirArchivoFacturas",
  "actualizarFactura",
  "eliminarFactura",

  // --- BLOQUE: TRIBUTOS ---
  "obtenerDatosTributarios",
  "actualizarDatosTributarios",

];

const FUNCIONES_SOLO_ADMINISTRADOR = [
  // --- BLOQUE: USUARIOS ---
  "obtenerUsuarios",
  "agregarUsuario",
  "actualizarUsuario",
  "eliminarUsuario",
  "toggleUsuarioActivo",

  // --- BLOQUE: ROLES ---
  "obtenerRoles",
  "agregarRol",
  "actualizarRol",
  "eliminarRol",

  // --- BLOQUE: SISTEMA Y LOGS ---
  "obtenerLogs",
  "limpiarLogsAntiguos",
  "generarBackupZIP",
  "inicializarSistemaForzado",

  // --- BLOQUE: CONFIGURACIÓN CRÍTICA ---
  "obtenerConfig",
  "actualizarConfig",
];

// ⚙️ Funciones generales internas — permitidas a todos los usuarios autenticados
const FUNCIONES_GENERALES = [
  "ping",
  "obtenerArchivosPorAnio",
  "listarFuncionesLogicaNegocio",
  "obtenerProductos",
  "logout",
];

// PROTECCIÓN: Quitar acceso a los JSON al crear usuario o toggleUsuario
const ARCHIVOS_PROTEGIDOS = [JSON_CONFIGURACION, JSON_USUARIOS, JSON_ROLES, JSON_PRODUCTOS, JSON_BDD_DATOS, JSON_BDD_FACTURAS, JSON_LOGS, JSON_DATOS_TRIBUTARIOS];

/******************************
 * FUNCIÓN DE INICIALIZACIÓN SISTEMA DESDE APPS SCRIPT Y CREACION DE CARPETAS Y ARCHIVOS INICIALES
 ******************************/
function inicializarSistema() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const correoAdmin = Session.getActiveUser().getEmail();

    // 1️⃣ Crear carpeta principal con nombre aleatorio para independencia total
    // Usamos el prefijo definido para que cada usuario tenga su carpeta única
    const nombreUnico = \`\${CARPETA_PRINCIPAL}_\${correoAdmin.split("@")[0].replace(/[^a-zA-Z]/g, "").substring(0, 4).toUpperCase()}\`;

    // 🔍 VALIDACIÓN: Buscar si la carpeta ya existe
    const carpetasExistentes = DriveApp.getRootFolder().getFoldersByName(nombreUnico);

    if (carpetasExistentes.hasNext()) {
      const carpetaExistente = carpetasExistentes.next();
      const idExistente = carpetaExistente.getId();

      Logger.log("⚠️ El sistema ya estaba inicializado. Carpeta encontrada: " + nombreUnico);

      return {
        status: "existente",
        mensaje: "El sistema ya se encuentra inicializado para este usuario.",
        id: idExistente,
        nombre: nombreUnico
      };
    }

    // 2️⃣ Si no existe, proceder con la creación
    const carpetaPrincipal = DriveApp.getRootFolder().createFolder(nombreUnico);
    const carpetaPrincipalId = carpetaPrincipal.getId();

    // 🎨 CAMBIO DE COLOR CARPETA (Drive API v3)
    try {
      Drive.Files.update({
        "folderColorRgb": "#198754"
      }, carpetaPrincipalId);
    } catch (err) {
      Logger.log("Nota: No se pudo aplicar el color en v3: " + err.message);
    }

    // 3️⃣ Crear carpeta sistema
    const carpetaSistema = obtenerOCrearCarpetaEn(carpetaPrincipal, CARPETA_SISTEMA);
    const carpetaSistemaId = carpetaSistema.getId();

    // 4️⃣ Crear archivos base
    // Construir configuración con el ID REAL
    const configInicialConId = {
      ...CONFIG_INICIAL,
      CARPETA_PRINCIPAL: nombreUnico,
      CARPETA_PRINCIPAL_ID: carpetaPrincipalId,
      CARPETA_SISTEMA_ID: carpetaSistemaId
    };

    const archivosAInicializar = [
      { nombre: JSON_USUARIOS, datos: [{ correo: correoAdmin, nombre: "Administrador", rol: "administrador", activo: true }] },
      { nombre: JSON_PRODUCTOS, datos: [] },
      { nombre: JSON_BDD_DATOS, datos: [] },
      { nombre: JSON_BDD_FACTURAS, datos: [] },
      { nombre: JSON_LOGS, datos: [] },
      { nombre: JSON_DATOS_TRIBUTARIOS, datos: DATOS_TRIBUTARIOS_INICIALES },
      { nombre: JSON_CONFIGURACION, datos: configInicialConId },
      { nombre: JSON_ROLES, datos: ROLES_INICIALES }
    ];

    archivosAInicializar.forEach(item => {
      crearArchivoJSONSiNoExiste(carpetaSistema, item.nombre, item.datos);
    });

    // 5️⃣ AUTO-PROTECCIÓN (Opcional)
    Logger.log("✅ Sistema inicializado correctamente con ID: " + carpetaPrincipalId);

    return { status: "ok", id: carpetaPrincipalId, nombre: nombreUnico };

  } catch (err) {
    Logger.log("❌ Error en inicialización: " + err.message);
    throw err;
  } finally {
    limitarAccesoCarpeta();
    lock.releaseLock();
  }
}
/******************************
 * FUNCIÓN DE INICIALIZACIÓN SISTEMA FORZADO Y BORRADO DE CARPETAS
 ******************************/
function inicializarSistemaForzado(correoAdmin, borrarCarpetas) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = correoAdmin?.correo || "sistema";

  try {
    const config = leerJSON(JSON_CONFIGURACION);
    if (!config || !config.CARPETA_PRINCIPAL_ID) {
      return respuestaJSON({
        status: "error",
        mensaje: "❌ CARPETA_PRINCIPAL_ID no está definido en configuracion.json"
      });
    }

    const usuariosActuales = leerJSON(JSON_USUARIOS) || [];
    if (usuariosActuales.length === 0) {
      return respuestaJSON({
        status: "error",
        mensaje: "❌ El archivo usuarios.json está vacío. No se puede determinar el propietario."
      });
    }

    const propietario = usuariosActuales[0];
    if (correoEjecutor !== propietario.correo) {
      return respuestaJSON({
        status: "error",
        mensaje: "🚫 Solo el propietario del sistema puede reinicializarlo."
      });
    }

    const carpetaPrincipal = DriveApp.getFolderById(config.CARPETA_PRINCIPAL_ID);

    let usuariosRemovidosContador = 0;
    if (usuariosActuales.length > 1) {
      try {
        const response = Drive.Permissions.list(config.CARPETA_PRINCIPAL_ID);
        const listaPermisos = response.permissions || response.items || [];
        const usuariosAEliminar = usuariosActuales.slice(1);

        for (const usr of usuariosAEliminar) {
          if (!usr.correo) continue;

          let seRemovio = false;
          const correoMinuscula = usr.correo.toLowerCase();

          const permiso = listaPermisos.find(p =>
            (p.emailAddress && p.emailAddress.toLowerCase() === correoMinuscula) ||
            (p.value && p.value.toLowerCase() === correoMinuscula)
          );

          if (permiso) {
            try {
              if (Drive.Permissions.remove) {
                Drive.Permissions.remove(config.CARPETA_PRINCIPAL_ID, permiso.id);
              } else {
                Drive.Permissions.delete(config.CARPETA_PRINCIPAL_ID, permiso.id);
              }

              seRemovio = true;

              registrarLog("REMOCION_API_AVANZADA", correoEjecutor, {
                usuario: usr.correo,
                permisoId: permiso.id
              });

            } catch (err) {
              registrarLog("ERROR_API_AVANZADA", correoEjecutor, {
                usuario: usr.correo,
                detalle: err.message
              });
            }
          }

          try {
            carpetaPrincipal.removeViewer(usr.correo);
            seRemovio = true;
          } catch (err) {
            registrarLog("WARN_REMOVE_VIEWER", correoEjecutor, {
              usuario: usr.correo,
              detalle: err.message
            });
          }

          try {
            carpetaPrincipal.removeEditor(usr.correo);
            seRemovio = true;
          } catch (err) {
            registrarLog("WARN_REMOVE_EDITOR", correoEjecutor, {
              usuario: usr.correo,
              detalle: err.message
            });
          }

          if (seRemovio) {
            usuariosRemovidosContador++;

            registrarLog("USUARIO_REVOCADO", correoEjecutor, {
              usuario: usr.correo
            });
          } else {
            registrarLog("ERROR_REVOCACION_TOTAL", correoEjecutor, {
              usuario: usr.correo,
              mensaje: "No fue posible revocar permisos por ninguna vía"
            });
          }
        }

      } catch (err) {
        registrarLog("ADVERTENCIA_BUCLE_PERMISOS", correoEjecutor, {
          mensaje: "Fallo general en la lectura de permisos",
          detalle: err.message
        });
      }
    }

    let resultadoLimpieza = null;
    if (borrarCarpetas) {
      resultadoLimpieza = limpiarCarpetas();
    }

    const carpetaSistema = obtenerOCrearCarpetaEn(carpetaPrincipal, CARPETA_SISTEMA);
    const carpetaSistemaId = carpetaSistema.getId();

    const nuevaConfig = {
      ...CONFIG_INICIAL,
      CARPETA_PRINCIPAL: config?.CARPETA_PRINCIPAL || carpetaPrincipal.getName(),
      CARPETA_PRINCIPAL_ID: carpetaPrincipal.getId(),
      CARPETA_SISTEMA_ID: carpetaSistemaId,
    };

    guardarORecrearJSON(carpetaSistema, JSON_CONFIGURACION, nuevaConfig);

    guardarORecrearJSON(carpetaSistema, JSON_USUARIOS, [
      {
        ...propietario,
        activo: true
      }
    ]);

    guardarORecrearJSON(carpetaSistema, JSON_PRODUCTOS, []);
    guardarORecrearJSON(carpetaSistema, JSON_BDD_DATOS, []);
    guardarORecrearJSON(carpetaSistema, JSON_BDD_FACTURAS, []);
    guardarORecrearJSON(carpetaSistema, JSON_LOGS, []);
    guardarORecrearJSON(carpetaSistema, JSON_DATOS_TRIBUTARIOS, DATOS_TRIBUTARIOS_INICIALES);
    guardarORecrearJSON(carpetaSistema, JSON_ROLES, ROLES_INICIALES);

    registrarLog("inicializarSistemaForzado", correoEjecutor, {
      mensaje: "🔁 Sistema reinicializado forzadamente",
      correoAdmin: correoAdmin?.correo,
      borrarCarpetas,
      limpieza: resultadoLimpieza?.mensaje || "Sin borrar carpetas",
      fecha: new Date().toISOString(),
      usuariosRemovidos: usuariosRemovidosContador
    });

    return {
      status: "ok",
      mensaje: \`✅ Sistema reinicializado correctamente. Se revocó el acceso a \${usuariosRemovidosContador} usuarios antiguos en Google Drive.\`,
      correo: correoAdmin?.correo,
      limpieza: resultadoLimpieza?.mensaje || "Sin borrar carpetas"
    };

  } catch (err) {
    manejarError(err, "inicializarSistemaForzado", correoEjecutor);
    registrarLog("ERROR_inicializarSistemaForzado", correoEjecutor, {
      mensaje: err.message,
      stack: err.stack
    });
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error crítico al inicializar el sistema.",
      detalle: err.message || String(err)
    });

  } finally {
    try {
      limitarAccesoCarpeta();
    } catch (err) {
      registrarLog("inicializarSistemaForzado", "sistema", "⚠️ No se pudo reaplicar el candado de herencia forzado: " + err.toString());
    }
    lock.releaseLock();
  }
}
/******************************
 * 🔒 FUNCIONES DE SEGURIDAD
 ******************************/
function obtenerConfigCentral() {
  const cache = CacheService.getScriptCache();
  let config = cache.get("CONFIG_CENTRAL");

  if (config) {
    return JSON.parse(config);
  }

  try {
    const response = UrlFetchApp.fetch(\`\${URL_PRODUCCION}/entity_index.json\`);
    config = response.getContentText();

    cache.put("CONFIG_CENTRAL", config, 21600);

    return JSON.parse(config);

  } catch (err) {
    return {
      idCliente: "fallback",
      llave: "fallback_key"
    };
  }
}
function verificarTokenYAutorizar(token) {
  const configCentral = obtenerConfigCentral();
  const CLIENT_ID = configCentral.idCliente;

  const tokenInfoUrl = 'https://oauth2.googleapis.com/tokeninfo?id_token=' + token;

  try {
    const response = UrlFetchApp.fetch(tokenInfoUrl, { method: 'GET', muteHttpExceptions: true });
    const tokenPayload = JSON.parse(response.getContentText());

    if (tokenPayload.error) {
      registrarLog("LOGIN_FALLIDO", "sistema", { mensaje: "Token de Google inválido o expirado", error: tokenPayload.error });
      return { autorizado: false, mensaje: "Token inválido o expirado" };
    }

    if (tokenPayload.aud !== CLIENT_ID) {
      registrarLog("LOGIN_FALLIDO", tokenPayload.email || "sistema", { mensaje: "ID de cliente incorrecto (aud mismatch)", aud: tokenPayload.aud });
      return { autorizado: false, mensaje: "ID de cliente incorrecto" };
    }

    const userEmail = tokenPayload.email;
    const userNombre = tokenPayload.name;
    const userPicture = tokenPayload.picture;
    const usuarios = leerJSON(JSON_USUARIOS);
    const roles = leerJSON(JSON_ROLES);

    const usuario = usuarios.find(u => u.correo === userEmail && u.activo);

    if (!usuario) {
      registrarLog("LOGIN_FALLIDO", userEmail, { mensaje: "Usuario no registrado o inactivo en la base de datos" });
      return { autorizado: false, mensaje: "Usuario no registrado o inactivo" };
    }

    const rol = roles.find(r => r.rol === usuario.rol);

    if (!rol) {
      registrarLog("LOGIN_FALLIDO", userEmail, { mensaje: "Rol no definido para el usuario", rolAsignado: usuario.rol });
      return { autorizado: false, mensaje: "Rol no definido para el usuario" };
    }

    return {
      autorizado: true,
      correo: userEmail,
      nombre: userNombre,
      picture: userPicture,
      rol: usuario.rol,
      permisos: rol.permisos
    };

  } catch (err) {
    registrarLog("LOGIN_ERROR_SISTEMA", "sistema", { mensaje: "Error excepcional en verificarTokenYAutorizar", error: err.message });
    return { autorizado: false, mensaje: "Error al verificar token: " + err.message };
  }
}
function validarPermiso(usuario, accion) {
  if (!usuario || !usuario.autorizado) return false;
  if (FUNCIONES_SOLO_ADMINISTRADOR.includes(accion)) {
    if (usuario.rol === "administrador") {
      return true;
    } else {
      registrarLog("ACCESO_RESTRINGIDO_ADMIN", usuario.correo, {
        rol: usuario.rol,
        accionIntentada: accion,
        mensaje: "Intento no autorizado de ejecutar función administrativa."
      });
      return false;
    }
  }
  if (FUNCIONES_GENERALES.includes(accion)) return true;
  if (usuario.rol === "administrador") return true;
  if (usuario.permisos && usuario.permisos.includes("*")) return true;
  if (FUNCIONES_LOGICA_NEGOCIO.includes(accion)) {
    const tienePermiso = usuario.permisos && usuario.permisos.includes(accion);
    if (!tienePermiso) {
      registrarLog("PERMISO_DENEGADO", usuario.correo, {
        rol: usuario.rol,
        accionIntentada: accion,
      });
    }
    return tienePermiso;
  }
  registrarLog("PERMISO_DESCONOCIDO", usuario.correo, { accion });
  return false;
}
function generarTokenPropio(usuarioInfo) {
  const configCentral = obtenerConfigCentral();
  const ZEICHENSCHLUESSEL = configCentral.llave;
  const config = leerJSON(JSON_CONFIGURACION) || {};
  const minutosExp = config.TOKEN_EXP_MINUTOS || 60;
  const payload = {
    correo: usuarioInfo.correo,
    rol: usuarioInfo.rol,
    nombre: usuarioInfo.nombre,
    picture: usuarioInfo.picture,
    permisos: usuarioInfo.permisos,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (minutosExp * 60)
  };

  const payloadStr = JSON.stringify(payload);
  const payloadB64 = Utilities.base64EncodeWebSafe(payloadStr, Utilities.Charset.UTF_8);
  const signature = Utilities.computeHmacSha256Signature(payloadB64, ZEICHENSCHLUESSEL);
  const signatureB64 = Utilities.base64EncodeWebSafe(signature);
  return payloadB64 + "." + signatureB64;
}
function verificarTokenPropio(token) {
  const configCentral = obtenerConfigCentral();
  const ZEICHENSCHLUESSEL = configCentral.llave;

  if (!token) {
    return { autorizado: false, mensaje: "No se proporcionó token" };
  }

  try {
    const parts = token.split('.');
    if (parts.length !== 2) {
      return { autorizado: false, mensaje: "Token malformado" };
    }

    const [payloadB64, signatureB64] = parts;

    const signature = Utilities.base64DecodeWebSafe(signatureB64);
    const expectedSignature = Utilities.computeHmacSha256Signature(payloadB64, ZEICHENSCHLUESSEL);

    if (signature.length !== expectedSignature.length || !signature.every((byte, i) => byte === expectedSignature[i])) {
      return { autorizado: false, mensaje: "Firma de token inválida" };
    }

    const payloadStr = Utilities.newBlob(Utilities.base64DecodeWebSafe(payloadB64)).getDataAsString();
    const payload = JSON.parse(payloadStr);

    if (payload.exp * 1000 < Date.now()) {
      return {
        autorizado: false,
        status: "token_invalido",
        mensaje: "Token expirado",
        ...payload
      };
    }
    return { autorizado: true, ...payload };

  } catch (err) {
    return {
      autorizado: false,
      mensaje: "Error al validar token: " + err.message };
  }
}
function handleGoogleLogin(data) {
  const { googleToken } = data;

  if (!googleToken) {
    registrarLog("LOGIN_FALLIDO", "sistema", { mensaje: "No se recibió el token de Google en el payload" });
    return respuestaJSON({ status: "error", mensaje: "No se recibió el token de Google (googleToken)" });
  }

  const infoUsuarioGoogle = verificarTokenYAutorizar(googleToken);

  if (!infoUsuarioGoogle.autorizado) {
    return respuestaJSON(infoUsuarioGoogle);
  }

  const tokenPropio = generarTokenPropio(infoUsuarioGoogle);

  registrarLog("LOGIN_EXITOSO", infoUsuarioGoogle.correo, {
    rol: infoUsuarioGoogle.rol,
    nombre: infoUsuarioGoogle.nombre,
  });

  return respuestaJSON({
    status: "ok",
    token: tokenPropio,
    user: {
      correo: infoUsuarioGoogle.correo,
      nombre: infoUsuarioGoogle.nombre,
      picture: infoUsuarioGoogle.picture,
      rol: infoUsuarioGoogle.rol,
      permisos: infoUsuarioGoogle.permisos
    }
  });
}
function limitarAccesoCarpeta() {
  let folderId = "Desconocido";

  try {
    const config = leerJSON(JSON_CONFIGURACION);
    const carpetaPrincipal = DriveApp.getFolderById(config.CARPETA_PRINCIPAL_ID);

    const subcarpetas = carpetaPrincipal.getFoldersByName(CARPETA_SISTEMA);
    if (!subcarpetas.hasNext()) {
      throw new Error(\`No se encontró la subcarpeta de sistema: \${CARPETA_SISTEMA}\`);
    }

    const carpetaSistema = subcarpetas.next();
    folderId = carpetaSistema.getId();

    var resourceMetadatos = {
      "writersCanShare": false
    };

    var resourceHerencia = {
      "inheritedPermissionsDisabled": true
    };

    Drive.Files.update(resourceMetadatos, folderId);
    Drive.Files.update(resourceHerencia, folderId);

    registrarLog("ProteccionSistema", "sistema", {
      resultado: "Éxito",
      mensaje: "Restricciones de seguridad ('writersCanShare' e 'inheritedPermissionsDisabled') aplicadas correctamente.",
      folderId: folderId
    });

    return {
      status: "ok",
      success: true,
      mensaje: "✅ El acceso a la carpeta ha sido limitado correctamente.",
      folderId: folderId
    };

  } catch (err) {
    const errorDetalle = err.message || String(err);

    registrarLog("ProteccionSistema", "sistema", {
      resultado: "Fallo Crítico",
      mensaje: "No se pudieron aplicar las restricciones de seguridad.",
      detalle: errorDetalle,
      folderId: folderId
    });

    return respuestaJSON({
      status: "error",
      success: false,
      mensaje: "❌ Error crítico de seguridad: No se pudo limitar el acceso a la carpeta de control core.",
      detalle: errorDetalle
    });
  }
}
function logout(data, usuario) {

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const motivo = data?.data?.mensaje || data?.mensaje || "desconocido";

    registrarLog("logout", correoEjecutor, motivo);

    return respuestaJSON({
      status: "ok",
      mensaje: "Sesión cerrada y registrada correctamente.",
    });

  } catch (err) {
    return respuestaJSON({
      status: "error",
      mensaje: "No se pudo registrar el cierre de sesión en el backend.",
      error: err.message
    });
  }
}
/******************************
 * MANEJO CENTRALIZADO DE ERRORES
 ******************************/
function manejarError(err, contexto, usuario) {
  const mensaje = err && err.message ? err.message : "Error desconocido";

  const detalle = {
    contexto: contexto,
    usuario: usuario || "desconocido",
    mensaje: mensaje,
    stack: err && err.stack ? err.stack : null,
    fecha: new Date().toISOString()
  };

  registrarLog("ERROR", usuario || "desconocido", detalle);

  return respuestaJSON({
    status: "error",
    codigo: "E_INTERNO",
    mensaje: mensaje,
    contexto: contexto
  });
}
function generarBackupZIP(usuario) {
  try {
    const carpetaPrincipal = obtenerOCrearCarpetaRaiz();
    const fecha = new Date();

    const nombreZip = \`Backup_Declaracion_\${fecha.getFullYear()}-\${fecha.getMonth() + 1}-\${fecha.getDate()}_\${fecha.getHours()}-\${fecha.getMinutes()}.zip\`;

    const blobs = [];

    const archivos = carpetaPrincipal.getFiles();
    while (archivos.hasNext()) {
      blobs.push(archivos.next().getBlob());
    }

    const carpetas = carpetaPrincipal.getFolders();
    while (carpetas.hasNext()) {
      const carpeta = carpetas.next();
      const subArchivos = carpeta.getFiles();
      while (subArchivos.hasNext()) {
        const archivo = subArchivos.next();
        blobs.push(
          archivo.getBlob().setName(\`\${carpeta.getName()}/\${archivo.getName()}\`)
        );
      }
    }

    const blobZip = Utilities.zip(blobs, nombreZip);

    const base64Data = Utilities.base64Encode(blobZip.getBytes());

    registrarLog("backup", usuario.correo, \`Se generó un backup descargado por el usuario\`);

    return {
      status: "ok",
      base64: base64Data,
      mimeType: blobZip.getContentType(),
      nombreArchivo: nombreZip,
      mensaje: "✅ Backup generado con éxito"
    };

  } catch (err) {
    return {
      status: "error",
      mensaje: "❌ Error al generar backup: " + err.message
    };
  }
}
/******************************
 * FUNCIONES AUXILIARES
 ******************************/
function obtenerOCrearCarpetaRaiz() {
  const root = DriveApp.getRootFolder();
  let nombreCarpeta;

  const correo = Session.getActiveUser().getEmail() || Session.getEffectiveUser().getEmail();

  const prefijoUsuario = correo.split("@")[0]
                            .replace(/[^a-zA-Z]/g, "")
                            .substring(0, 4)
                            .toUpperCase();

  nombreCarpeta = \`\${CARPETA_PRINCIPAL}_\${prefijoUsuario}\`.trim();

  Logger.log("Buscando carpeta: '" + nombreCarpeta + "'");

  const carpetas = root.getFoldersByName(nombreCarpeta);
  let carpetaDestino;

  if (carpetas.hasNext()) {
    carpetaDestino = carpetas.next();
    Logger.log("✅ Carpeta encontrada: " + carpetaDestino.getId());
  } else {
    carpetaDestino = root.createFolder(nombreCarpeta);
    Logger.log("🆕 Carpeta creada: " + nombreCarpeta);
  }

  return carpetaDestino;
}
function obtenerOCrearCarpetaEn(carpetaPadre, nombre) {
  let carpetas = carpetaPadre.getFoldersByName(nombre);
  return carpetas.hasNext() ? carpetas.next() : carpetaPadre.createFolder(nombre);
}
function obtenerCarpeta(anio) {
  if (!anio) return null;

  const carpetaRaizApp = obtenerOCrearCarpetaRaiz();

  const carpetasAnio = carpetaRaizApp.getFoldersByName(anio.toString());

  if (carpetasAnio.hasNext()) {
    return carpetasAnio.next();
  }

  return null;
}
function crearArchivoJSONSiNoExiste(carpeta, nombreArchivo, contenidoInicial) {
  const archivos = carpeta.getFilesByName(nombreArchivo);
  if (!archivos.hasNext()) {
    carpeta.createFile(nombreArchivo, JSON.stringify(contenidoInicial, null, 2), MimeType.PLAIN_TEXT);
    Logger.log(\`📄 Archivo creado: \${nombreArchivo}\`);
  } else {
    Logger.log(\`ℹ️ Archivo ya existe: \${nombreArchivo}\`);
  }
}
function guardarJSON(nombreArchivo, contenido) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const carpetaRaiz = obtenerOCrearCarpetaRaiz();
    const carpetaSistema = obtenerOCrearCarpetaEn(carpetaRaiz, CARPETA_SISTEMA);

    const archivos = carpetaSistema.getFilesByName(nombreArchivo);

    if (!archivos.hasNext()) {
      throw new Error(\`Archivo no encontrado: \${nombreArchivo}\`);
    };

    const archivo = archivos.next();
    archivo.setContent(JSON.stringify(contenido, null, 2));

    return true;

  } catch (err) {
    manejarError(err, "guardarJSON", "sistema");

    registrarLog("guardarJSON", "sistema", {
      archivo: nombreArchivo,
      error: err.message,
      contexto: "Fallo crítico al escribir JSON"
    });

    throw new Error(\`Error crítico al guardar datos: \${err.message}\`);

  } finally {
    lock.releaseLock();
  }

}
function leerJSON(nombreArchivo) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const carpetaRaiz = obtenerOCrearCarpetaRaiz();
    const carpetaSistema = obtenerOCrearCarpetaEn(carpetaRaiz, CARPETA_SISTEMA);
    const archivos = carpetaSistema.getFilesByName(nombreArchivo);

    if (!archivos.hasNext()) throw new Error(\`Archivo no encontrado: \${nombreArchivo}\`);
    const archivo = archivos.next();

    return JSON.parse(archivo.getBlob().getDataAsString());

  } finally {
    lock.releaseLock();
  }
}
function respuestaJSON(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
function guardarORecrearJSON(carpeta, nombreArchivo, contenidoInicial) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const archivos = carpeta.getFilesByName(nombreArchivo);
    if (archivos.hasNext()) {
      const archivo = archivos.next();
      archivo.setContent(JSON.stringify(contenidoInicial, null, 2));
    } else {
      carpeta.createFile(nombreArchivo, JSON.stringify(contenidoInicial, null, 2), MimeType.PLAIN_TEXT);
    }
  } finally {
    lock.releaseLock();
  }
}
function normalizarTexto(texto) {
  if (!texto) return "";
  return texto
    .toString()
    .trim()                        // quitar espacios inicio/fin
    .toLowerCase()                 // todo a minúsculas
    .normalize("NFD")              // separar letras de tildes (á -> a + ́)
    .replace(/[\\u0300-\\u036f]/g, "") // quitar tildes y diacríticos
    .replace(/\\s+/g, " ")          // múltiples espacios → uno
    .replace(/\\./g, "");           // quitar puntos
}
function normalizarNombreArchivo(nombreOriginal) {
  // Elimina la extensión del archivo
  let nombreBase = nombreOriginal.replace(/\\.[^/.]+$/, "");

  // Convierte todo a minúsculas y reemplaza caracteres no alfanuméricos por espacios
  nombreBase = nombreBase.toLowerCase().replace(/[^a-z0-9]+/gi, " ").trim();

  // Divide en palabras y capitaliza cada una
  let nombrePascal = nombreBase
    .split(" ")
    .filter(Boolean) // elimina espacios dobles
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");

  return nombrePascal;
}
function verificarArchivoDuplicado(carpetaDestino, nombreArchivo) {
  const archivos = carpetaDestino.getFilesByName(nombreArchivo);
  return archivos.hasNext() ? archivos.next() : null;
}
function verificarYEliminarArchivoDrive(fileId, nombreArchivo, anio, bddatos, correoEjecutor) {
  if (!fileId) return { borrado: false, motivo: "Sin ID de archivo" };

  const sigueEnUsoPorId = bddatos.some(r => r.fileId === fileId);
  const sigueEnUsoPorNombreYAnio = bddatos.some(r => r.nombreArchivo === nombreArchivo && r.anio === anio);

  if (!sigueEnUsoPorId && !sigueEnUsoPorNombreYAnio) {
    try {
      const archivoPrincipal = DriveApp.getFileById(fileId);
      archivoPrincipal.setTrashed(true);

      const carpetaAnio = obtenerCarpeta(anio);

      if (carpetaAnio && nombreArchivo) {
        const archivosEnCarpeta = carpetaAnio.getFilesByName(nombreArchivo);

        while (archivosEnCarpeta.hasNext()) {
          const fichero = archivosEnCarpeta.next();
          if (fichero.getId() !== fileId) {
            fichero.setTrashed(true);
          }
        }
      }

      return { borrado: true, motivo: \`Limpieza completada para el año \${anio}.\` };

    } catch (err) {
      registrarLog("error_limpieza_drive", correoEjecutor, { fileId, anio, error: err.message });
      return { borrado: false, motivo: "Error en Drive: " + err.message };
    }
  }

  return { borrado: false, motivo: "Archivo conservado por uso en el año " + anio };
}
function validarArchivo(archivoBlob, config) {
  let extension = archivoBlob.getName().split(".").pop().toLowerCase();
  let tamanoMB = archivoBlob.getBytes().length / (1024 * 1024);

  if (!config.TIPOS_PERMITIDOS.includes(extension)) {
    return { ok: false, mensaje: "❌ Tipo de archivo no permitido" };
  }
  if (tamanoMB > config.TAMANO_MAX_MB) {
    return { ok: false, mensaje: \`❌ Tamaño máximo permitido: \${config.TAMANO_MAX_MB} MB\` };
  }
  return { ok: true, extension };
}
function guardarArchivoEnDrive(archivoBlob, anio, subcarpeta, usarExistente) {
  const nombrePascal = normalizarNombreArchivo(archivoBlob.getName());
  const extension = archivoBlob.getName().split(".").pop().toLowerCase();
  const nuevoNombre = \`\${nombrePascal}.\${extension}\`;

  const carpetaPrincipal = obtenerOCrearCarpetaRaiz();
  const carpetaAnio = obtenerOCrearCarpetaEn(carpetaPrincipal, anio);
  const carpetaDestino = subcarpeta
    ? obtenerOCrearCarpetaEn(carpetaAnio, subcarpeta)
    : carpetaAnio;

  const existente = verificarArchivoDuplicado(carpetaDestino, nuevoNombre);

  if (existente && !usarExistente) {
    return {
      ok: false,
      status: "exists",
      mensaje: "⚠️ Ya existe un archivo con este nombre",
      idArchivo: existente.getId(),
      link: existente.getUrl(),
      nombreArchivo: nuevoNombre,
    };
  }

  const file = existente && usarExistente
    ? existente
    : carpetaDestino.createFile(archivoBlob);

  if (!existente || !usarExistente) file.setName(nuevoNombre);

  return {
    ok: true,
    file,
    nuevoNombre,
    link: file.getUrl(),
  };
}
function capturarPayload(e, isMultipart) {
  try {
    return {
      parametros: e.parameter || null,
      postData: e.postData ? e.postData.contents : null,
      isMultipart: !!isMultipart
    };
  } catch (err) {
    throw new Error('Error al capturar payload: ' + err.message);
  }
}
function obtenerPayloadArchivo(e, isMultipart, camposEsperados) {
  const payload = { debug: capturarPayload(e, isMultipart) };

  if (isMultipart) {
    payload.archivoBlob = e.files.archivo;
    camposEsperados.forEach(campo => {
      payload[campo] = e.parameter[campo] || "";
    });
  } else {
    const data = JSON.parse(e.postData.contents);
    if (!data.archivo) throw new Error("❌ No se envió archivo");
    payload.archivoBlob = Utilities.newBlob(
      Utilities.base64Decode(data.archivo.base64),
      data.archivo.tipo || MimeType.BINARY,
      data.archivo.nombre
    );
    camposEsperados.forEach(campo => {
      payload[campo] = data[campo] || "";
    });
  }
  return payload;
}
function registrarLog(accion, usuario, detalle) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let logs = leerJSON(JSON_LOGS);
    const nuevoLog = {
      fecha: Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss"),
      accion,
      usuario: usuario || "sistema",
      detalle: detalle || {}
    };
    logs.push(nuevoLog);
    guardarJSON(JSON_LOGS, logs);
    return nuevoLog;
  } finally {
    lock.releaseLock();
  }
}
function limpiarCarpetas() {
  const config = leerJSON(JSON_CONFIGURACION);

  if (!config?.CARPETA_PRINCIPAL_ID) {
    throw new Error("CARPETA_PRINCIPAL_ID no definido en configuracion.json");
  }

  const carpetaPrincipal = DriveApp.getFolderById(config.CARPETA_PRINCIPAL_ID);
  const subcarpetas = carpetaPrincipal.getFolders();

  while (subcarpetas.hasNext()) {
    subcarpetas.next().setTrashed(true);
  }
  return { mensaje: "🗑️ Carpetas borradas correctamente" };
}
/******************************
 * MÉTODO DOGET
 ******************************/
function doGet(e) {
  try {
    const accion = e.parameter.accion;

    if (
      !FUNCIONES_GENERALES.includes(accion) &&
      !FUNCIONES_LOGICA_NEGOCIO.includes(accion) &&
      !FUNCIONES_SOLO_ADMINISTRADOR.includes(accion)
    ) {
      return respuestaJSON({ status: "error", mensaje: "Acción inválida" });
    }

    const token = e.parameter.token;
    let usuario;

    if (!token) {
      return respuestaJSON({ autorizado: false, mensaje: "Token de sesión requerido" });
    }

    usuario = verificarTokenPropio(token);

    if (!usuario.autorizado) {
      return respuestaJSON({ autorizado: false, mensaje: usuario.mensaje });
    }

    if (!validarPermiso(usuario, accion)) {
      return respuestaJSON({ autorizado: false, mensaje: "No tienes permiso para ejecutar " + accion });
    }

    switch (accion) {
      case "ping":
        const nuevoTokenPropio = generarTokenPropio(usuario);
        return respuestaJSON({
          status: "ok",
          mensaje: "Token de sesión renovado",
          autorizado: true,
          token: nuevoTokenPropio,
          ...usuario
        });
      case "obtenerConfig":
        return obtenerConfig();
      case "listarFuncionesLogicaNegocio":
        return listarFuncionesLogicaNegocio();
      case "obtenerUsuarios":
        return obtenerUsuarios();
      case "obtenerRoles":
        return obtenerRoles();
      case "obtenerProductos":
        return obtenerProductos();
      case "obtenerDatosTributarios":
        return obtenerDatosTributarios();
      case "obtenerLogs":
        return obtenerLogs();
      case "obtenerArchivosPorAnio":
        const anio = e.parameter.anio;
        if (!anio) {
          return respuestaJSON({ status: "error", mensaje: "Debe enviar un año" });
        }
        return obtenerArchivosPorAnio(anio);
      case "obtenerFacturasPorAnio":
        const anioF = e.parameter.anio;
        if (!anioF) {
          return respuestaJSON({ status: "error", mensaje: "Debe enviar un año" });
        }
        return obtenerFacturasPorAnio(anioF);
      case "obtenerProductosPorArchivo":
        const archivoId = e.parameter.archivoId;
        if (!archivoId) {
          return respuestaJSON({ status: "error", mensaje: "Debe enviar archivoId" });
        }
        return obtenerProductosPorArchivo(archivoId);
      default:
        return respuestaJSON({ status: "error", mensaje: "Acción no soportada" });
    }

  } catch (err) {
    const correo = (e && e.parameter && e.parameter.correo) || "desconocido";
    return manejarError(err, "doGet", correo);
  }
}
/******************************
 * MÉTODO DOPOST
 ******************************/
function doPost(e) {
  try {
    let accion = "";
    let data = {};
    const isMultipart = e.files && Object.keys(e.files).length > 0;

    if (isMultipart) {
      accion = e.parameter.accion || "";
      data = e.parameter;
    } else if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        return respuestaJSON({
          success: false,
          status: "error_json",
          mensaje: "❌ Error al parsear el cuerpo JSON: " + err.message,
        });
      }
      accion = data.accion || "";
    } else {
      return respuestaJSON({
        success: false,
        status: "sin_datos",
        mensaje: "❌ No se recibió ni JSON ni archivos en la solicitud",
        parametros: e.parameter || null,
      });
    }

    if (!accion || typeof accion !== "string") {
      return respuestaJSON({
        status: "error",
        success: false,
        mensaje: "Acción requerida",
      });
    }

    accion = accion.trim();

    if (
      accion !== "googleLogin" &&
      !FUNCIONES_GENERALES.includes(accion) &&
      !FUNCIONES_LOGICA_NEGOCIO.includes(accion) &&
      !FUNCIONES_SOLO_ADMINISTRADOR.includes(accion)
    ) {
      return respuestaJSON({
        status: "error",
        success: false,
        mensaje: "Acción inválida",
      });
    }

    let usuario;

    if (accion !== "googleLogin") {
      const token = e.parameter.token || data.token;
      if (!token) {
        return respuestaJSON({
          autorizado: false,
          success: false,
          status: "sin_token",
          mensaje: "Token de sesión requerido",
        });
      }

      usuario = verificarTokenPropio(token);

      if (!usuario.autorizado && usuario.status === "token_invalido" && accion === "logout") {
        const usuarioExpirado = {
          autorizado: false,
          correo: usuario.correo || "sistema_vencido",
          nombre: usuario.nombre || "Usuario Expirado",
          rol: usuario.rol || "desconocido"
        };
        return logout(data, usuarioExpirado);
      }

      if (!usuario.autorizado) {
        return respuestaJSON({
          autorizado: false,
          success: false,
          status: "token_invalido",
          mensaje: usuario.mensaje || "Token inválido o expirado",
        });
      }

      if (!validarPermiso(usuario, accion)) {
        return respuestaJSON({
          autorizado: false,
          success: false,
          status: "sin_permiso",
          mensaje: "No tienes permiso para ejecutar " + accion,
        });
      }
    }

    switch (accion) {
      case "googleLogin":
        return handleGoogleLogin(data);

      case "inicializarSistemaForzado":
        const confirmar = data.confirmar;
        const borrarCarpetas = data.borrarCarpetas === true || data.borrarCarpetas === "true";

        if (confirmar !== "INICIALIZAR") {
          return respuestaJSON({ status: "error", mensaje: "⚠️ Confirmación inválida, escriba INICIALIZAR" });
        }

        if (usuario.rol !== "administrador") {
          return respuestaJSON({
            status: "sin_permiso",
            mensaje: "Solo el rol administrador puede reinicializar el sistema",
          });
        }

        const resultado = inicializarSistemaForzado(usuario, borrarCarpetas);

        return respuestaJSON({ ...resultado });

      case "subirArchivoProducto":
        return subirArchivoProducto(e, isMultipart, usuario);
      case "remplazarArchivoProducto":
        return remplazarArchivoProducto(e, isMultipart, usuario);
      case "subirArchivoFacturas":
        return subirArchivoFacturas(e, isMultipart, usuario);
      case "actualizarConfig":
        return actualizarConfig(data, usuario);
      case "generarBackupZIP":
        return respuestaJSON(generarBackupZIP(usuario));
      case "limpiarLogsAntiguos":
        return limpiarLogsAntiguos(usuario);
      case "agregarRol":
        return agregarRol(data, usuario);
      case "actualizarRol":
        return actualizarRol(data, usuario);
      case "eliminarRol":
        return eliminarRol(data, usuario);
      case "agregarUsuario":
        return agregarUsuario(data, usuario);
      case "toggleUsuarioActivo":
        return toggleUsuarioActivo(data, usuario);
      case "actualizarUsuario":
        return actualizarUsuario(data, usuario);
      case "eliminarUsuario":
        return eliminarUsuario(data, usuario);
      case "agregarProducto":
        return agregarProducto(data, usuario);
      case "actualizarProducto":
        return actualizarProducto(data, usuario);
      case "eliminarProducto":
        return eliminarProducto(data.id, usuario);
      case "eliminarRegistroProducto":
        return eliminarRegistroProducto(data, usuario);
      case "editarRegistroProducto":
        return editarRegistroProducto(data, usuario);
      case "inicializarSistema":
        return inicializarSistemaSeguro(data, usuario);
      case "actualizarDatosTributarios":
        return actualizarDatosTributarios(data, usuario);
      case "actualizarFactura":
        return actualizarFactura(data, usuario);
      case "eliminarFactura":
        return eliminarFactura(data, usuario);
      case "logout":
        return logout(data, usuario);
      default:
        return respuestaJSON({ status: "error", mensaje: "Acción no soportada" });
    }

  } catch (err) {
    const correo = (e && e.parameter && e.parameter.correo) || "desconocido";
    return manejarError(err, "doPost", correo);
  }
}
/******************************
 * FUNCIONES DE LOGICA DEL NEGOCIO
 ******************************/
function listarFuncionesLogicaNegocio() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    if (!FUNCIONES_LOGICA_NEGOCIO || !Array.isArray(FUNCIONES_LOGICA_NEGOCIO)) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ No se encontraron funciones de lógica de negocio definidas.",
        datos: [],
      });
    }

    return respuestaJSON({
      status: "ok",
      mensaje: "📘 Funciones de lógica de negocio obtenidas correctamente.",
      datos: FUNCIONES_LOGICA_NEGOCIO,
    });

  } catch (err) {
    manejarError(err, "listarFuncionesLogicaNegocio");
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al obtener las funciones de lógica de negocio.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
/******************************
 * 🔧 CRUD DE CONFIGURACIÓN (versión final)
 ******************************/
function obtenerConfig() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const config = leerJSON(JSON_CONFIGURACION);

    return respuestaJSON({
      status: "ok",
      mensaje: "⚙️ Configuración obtenida correctamente.",
      version: VERSION,
      datos: config,
    });
  } catch (err) {
    manejarError(err, "obtenerConfig");
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al obtener la configuración.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function actualizarConfig(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const configActual = leerJSON(JSON_CONFIGURACION) || {};

    const nuevaConfig = {
      ...configActual,
      TAMANO_MAX_MB: data.TAMANO_MAX_MB ?? configActual.TAMANO_MAX_MB,
      TIPOS_PERMITIDOS: Array.isArray(data.TIPOS_PERMITIDOS)
        ? data.TIPOS_PERMITIDOS
        : configActual.TIPOS_PERMITIDOS,
      TOKEN_EXP_MINUTOS: Number(data.TOKEN_EXP_MINUTOS) || configActual.TOKEN_EXP_MINUTOS,
    };

    guardarJSON(JSON_CONFIGURACION, nuevaConfig);
    registrarLog("actualizarConfig", correoEjecutor, {
      mensaje: "Configuración actualizada",
      nuevaConfig,
    });

    return respuestaJSON({
      status: "ok",
      mensaje: "✅ Configuración actualizada correctamente.",
      datos: nuevaConfig,
    });
  } catch (err) {
    manejarError(err, "actualizarConfig", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar la configuración.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
/******************************
 * 🔧 CRUD DE ROLES (versión final, integrada con doPost y token)
 ******************************/
function obtenerRoles() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const roles = leerJSON(JSON_ROLES) || [];

    if (!roles.length) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ No se encontraron roles registrados en el sistema.",
        data: [],
      });
    }

    return respuestaJSON({
      status: "ok",
      mensaje: "📘 Roles obtenidos correctamente.",
      data: roles,
    });
  } catch (err) {
    manejarError(err, "obtenerRoles");
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al obtener los roles. Intenta nuevamente o contacta al administrador.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function agregarRol(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const roles = leerJSON(JSON_ROLES) || [];
    const nuevoRol = data?.rol;
    const permisosIniciales = Array.isArray(data?.permisos)
      ? data.permisos
      : [];

    if (!nuevoRol)
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ El nombre del rol es obligatorio.",
      });

    if (roles.some((r) => r.rol.toLowerCase() === nuevoRol.toLowerCase()))
      return respuestaJSON({
        status: "error",
        mensaje: \`⚠️ Ya existe un rol con el nombre "\${nuevoRol}".\`,
      });

    const nuevo = { rol: nuevoRol, permisos: permisosIniciales };
    roles.push(nuevo);
    guardarJSON(JSON_ROLES, roles);

    registrarLog("agregarRol", correoEjecutor, \`Rol creado: \${nuevoRol}\`);

    return respuestaJSON({
      status: "ok",
      mensaje: \`✅ Rol "\${nuevoRol}" creado correctamente.\`,
      datos: roles,
    });
  } catch (err) {
    manejarError(err, "agregarRol", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al crear el rol. Intenta nuevamente o contacta al administrador.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function actualizarRol(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const roles = leerJSON(JSON_ROLES) || [];
    const { rol, permisos } = data;

    if (!rol) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ El nombre del rol es obligatorio.",
      });
    }

    const index = roles.findIndex((r) => r.rol.toLowerCase() === rol.toLowerCase());

    if (index === -1)
      return respuestaJSON({
        status: "error",
        mensaje: \`⚠️ El rol "\${rol}" no existe en el sistema.\`,
      });

    const nombreRolEncontrado = roles[index].rol.toLowerCase();

    if (nombreRolEncontrado === "administrador") {
      roles[index].permisos = ["*"];
    } else {
      roles[index].permisos = Array.isArray(permisos) ? permisos : [];
    }

    guardarJSON(JSON_ROLES, roles);

    registrarLog("actualizarRol", correoEjecutor, \`Permisos actualizados para el rol: \${rol}\`);

    return respuestaJSON({
      status: "ok",
      mensaje: \`✅ Permisos actualizados correctamente para el rol "\${rol}".\`,
      datos: roles,
    });
  } catch (err) {
    manejarError(err, "actualizarRol", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al actualizar el rol. Intenta nuevamente o contacta al administrador.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function eliminarRol(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const { rol } = data;

    if (!rol)
      return respuestaJSON({
        status: "error",
        mensaje: "El nombre del rol es obligatorio",
      });

    // if (rol === "administrador")
    if (rol.toLowerCase() === "administrador")
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ No se puede eliminar el rol administrador.",
      });

    const roles = leerJSON(JSON_ROLES) || [];
    const usuarios = leerJSON(JSON_USUARIOS) || [];

    // const enUso = usuarios.some((u) => u.rol === rol);
    const enUso = usuarios.some((u) => u.rol && u.rol.toLowerCase() === rol.toLowerCase());
    if (enUso)
      return respuestaJSON({
        status: "error",
        mensaje: \`⚠️ No se puede eliminar el rol "\${rol}" porque tiene usuarios asignados.\`,
      });

    // const nuevosRoles = roles.filter((r) => r.rol !== rol);
    const nuevosRoles = roles.filter((r) => r.rol.toLowerCase() !== rol.toLowerCase());

    guardarJSON(JSON_ROLES, nuevosRoles);

    registrarLog("eliminarRol", correoEjecutor, \`Rol eliminado: \${rol}\`);

    return respuestaJSON({
      status: "ok",
      mensaje: \`🗑️ Rol "\${rol}" eliminado correctamente.\`,
      datos: nuevosRoles,
    });

  } catch (err) {
    manejarError(err, "eliminarRol", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Ocurrió un error interno al intentar eliminar el rol. Intenta nuevamente o contacta al administrador",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
// Usuarios
function obtenerUsuarios() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];

    if (!usuarios.length) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ No se encontraron usuarios registrados.",
        datos: [],
      });
    }

    return respuestaJSON({
      status: "ok",
      mensaje: "📋 Usuarios obtenidos correctamente.",
      datos: usuarios,
    });
  } catch (err) {
    manejarError(err, "obtenerUsuarios");
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al obtener la lista de usuarios.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function agregarUsuario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, nombre, rol } = data;

    if (!correo || !nombre || !rol) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ Campos obligatorios faltantes." });
    }

    // if (usuarios.some(u => u.correo.toLowerCase() === correo.toLowerCase() || u.nombre.toLowerCase() === nombre.toLowerCase())) {
    //   return respuestaJSON({ status: "error", mensaje: \`⚠️ El usuario "\${correo}" ya existe.\` });
    // }

    const usuarioDuplicado = usuarios.find(
      (u) => u.correo.toLowerCase() === correo.toLowerCase() || u.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (usuarioDuplicado) {
      const esCorreo = usuarioDuplicado.correo.toLowerCase() === correo.toLowerCase();
      const datoDuplicado = esCorreo ? correo : nombre;
      const campo = esCorreo ? "correo" : "nombre";

      return respuestaJSON({
        status: "error",
        mensaje: \`⚠️ El \${campo} "\${datoDuplicado}" ya se encuentra registrado en el sistema.\`,
      });
    }

    const config = leerJSON(JSON_CONFIGURACION);
    const carpetaId = config.CARPETA_PRINCIPAL_ID;
    const carpeta = DriveApp.getFolderById(carpetaId);

    try {
      Drive.Permissions.create({
        'role': 'reader',
        'type': 'user',
        'emailAddress': correo
      }, carpetaId, { 'sendNotificationEmail': false });
    } catch (err) {
      const errorMsg = err.message.toLowerCase();

      if (errorMsg.includes("no tiene una cuenta de google") ||
          errorMsg.includes("does not have a google account")) {
        return respuestaJSON({
          status: "error",
          mensaje: \`❌ El correo "\${correo}" no está vinculado a una cuenta de Google válida.\`
        });
      }

      throw new Error("Error al asignar carpeta: " + err.message);
    }

    Utilities.sleep(5000);

    ARCHIVOS_PROTEGIDOS.forEach(nombreArchivo => {
      const archivos = carpeta.getFilesByName(nombreArchivo);
      while (archivos.hasNext()) {
        const archivo = archivos.next();
        const archivoId = archivo.getId();

        try {
          archivo.removeViewer(correo);
          const permissions = Drive.Permissions.list(archivoId).permissions;
          permissions.forEach(p => {
            if (p.emailAddress?.toLowerCase() === correo.toLowerCase()) {
              Drive.Permissions.delete(archivoId, p.id);
            }
          });
        } catch (err) {
          return respuestaJSON({
            status: "error",
            mensaje: \`❌ Error de seguridad: No se pudo restringir el acceso al archivo "\${nombreArchivo}".\`,
            detalle: err.message
          });

        }
      }
    });

    const nuevoUsuario = { correo, nombre, rol, activo: true };
    usuarios.push(nuevoUsuario);
    guardarJSON(JSON_USUARIOS, usuarios);

    registrarLog("agregarUsuario", correoEjecutor, { usuarioCreado: correo, rol, nivel: "reader" });

    return respuestaJSON({
      status: "ok",
      mensaje: \`✅ Usuario "\${correo}" creado como lector. Archivos protegidos.\`,
      datos: usuarios,
    });

  } catch (err) {
    manejarError(err, "agregarUsuario", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al crear el usuario.",
      detalle: err.message || String(err),
    });
  } finally {
    try {
      limitarAccesoCarpeta();
    } catch (err) {
      registrarLog("agregarUsuario", "sistema", "⚠️ No se pudo reaplicar el candado de herencia core: " + err.toString());
    }
    lock.releaseLock();
  }
}
function actualizarUsuario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, nombre, rol } = data;

    const index = usuarios.findIndex((u) => u.correo.toLowerCase() === correo.toLowerCase());

    if (index === -1)
      return respuestaJSON({
        status: "error",
        mensaje: \`⚠️ No se encontró el usuario con correo "\${correo}".\`,
      });

    const usuarioAntes = {
      nombre: usuarios[index].nombre,
      rol: usuarios[index].rol
    };

    usuarios[index].nombre = nombre || usuarios[index].nombre;
    usuarios[index].rol = rol || usuarios[index].rol;

    if (nombre === "Administrador") {
      return respuestaJSON({ status: "error", mensaje: "🚫 No se puede Modificar Administrador." });
    }

    const esAdminPrincipal = usuarios[index].nombre.toLowerCase() === "Administrador" && usuarios[index].rol.toLowerCase() === "administrador";
    if (esAdminPrincipal) {
      return respuestaJSON({
        status: "error",
        mensaje: "🚫 No se puede modificar al usuario Administrador Principal del sistema."
      });
    }

    guardarJSON(JSON_USUARIOS, usuarios);

    const detalleLog = {
      mensaje: \`Usuario actualizado: \${correo}\`,
      antes: usuarioAntes,
      despues: {
        nombre: usuarios[index].nombre,
        rol: usuarios[index].rol
      }
    };

    registrarLog("actualizarUsuario", correoEjecutor, detalleLog);

    return respuestaJSON({
      status: "ok",
      mensaje: \`✅ Usuario "\${correo}" actualizado correctamente.\`,
      datos: usuarios,
    });
  } catch (err) {
    manejarError(err, "actualizarUsuario", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar usuario.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function toggleUsuarioActivo(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, activo, nombre } = data;
    let driveStatus = "";

    const index = usuarios.findIndex((u) => u.correo.toLowerCase() === correo.toLowerCase());

    if (index === -1) return respuestaJSON({ status: "error", mensaje: "Usuario no encontrado." });


    if (nombre === "Administrador") {
      return respuestaJSON({ status: "error", mensaje: "🚫 No se puede activar o desactivar Administrador Principal." });
    }

    usuarios[index].activo = Boolean(activo);
    guardarJSON(JSON_USUARIOS, usuarios);

    const config = leerJSON(JSON_CONFIGURACION);
    const carpetaId = config?.CARPETA_PRINCIPAL_ID;

    if (activo === true) {
      try {
        try {
          Drive.Permissions.create({
            'role': 'reader',
            'type': 'user',
            'emailAddress': correo
          }, carpetaId, { 'sendNotificationEmail': false });
        } catch(err) {
          Drive.Permissions.insert({
            'role': 'reader',
            'type': 'user',
            'value': correo
          }, carpetaId, { 'sendNotificationEmail': false });
        }
        driveStatus = "Permisos activados.";
      } catch (err) {
        driveStatus = "Ya tenía permisos o error: " + err.message;
      }

      Utilities.sleep(5000);
      const carpeta = DriveApp.getFolderById(carpetaId);

      let archivosOcultados = 0;

      ARCHIVOS_PROTEGIDOS.forEach(n => {
        const file = carpeta.getFilesByName(n);
        if (file.hasNext()) {
          const f = file.next();
          try {
            f.removeViewer(correo);
          }
          catch (err){

          }
        }
        archivosOcultados++;
      });

      driveStatus += \` Se protegieron \${archivosOcultados} archivos.\`;

    } else {
      try {
        const response = Drive.Permissions.list(carpetaId);
        const listaPermisos = response.permissions || response.items || [];

        const permiso = listaPermisos.find(p =>
          (p.emailAddress && p.emailAddress.toLowerCase() === correo.toLowerCase()) ||
          (p.value && p.value.toLowerCase() === correo.toLowerCase())
        );

        if (permiso) {
          if (Drive.Permissions.remove) {
            Drive.Permissions.remove(carpetaId, permiso.id); // v2
            driveStatus = "Permiso revocado (v2).";
          } else {
            Drive.Permissions.delete(carpetaId, permiso.id); // v3
            driveStatus = "Permiso revocado (v3).";
          }
        } else {
          const carpeta = DriveApp.getFolderById(carpetaId);
          carpeta.removeViewer(correo);
          carpeta.removeEditor(correo);
          driveStatus = "Revocado mediante DriveApp.";
        }
      } catch (err) {
        driveStatus = "Error crítico al revocar: " + err.message;
      }
    }

    registrarLog("toggleUsuarioActivo", correoEjecutor, {
      usuarioAfectado: correo,
      nuevoEstado: activo ? "Activado" : "Desactivado",
      resultadoDrive: driveStatus
    });

    return respuestaJSON({
      status: "ok",
      mensaje: \`Usuario \${activo ? "activado" : "desactivado"}.\`,
      detalleDrive: driveStatus,
      datos: usuarios
    });

  } catch (err) {
    manejarError(err, "toggleUsuarioActivo", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al cambiar el estado del usuario.",
      detalle: err.message || String(err),
    });
  } finally {
    try {
      limitarAccesoCarpeta();
    } catch (err) {
      registrarLog("toggleUsuarioActivo", "sistema", "⚠️ No se pudo reaplicar el candado de herencia core: " + err.toString());
    }
    lock.releaseLock();
  }
}
function eliminarUsuario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo } = data;
    let avisoDrive = null;

    if (!correo) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ Debe especificar el correo." });
    }

    if (correo?.toLowerCase() === correoEjecutor.toLowerCase()) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ No puedes eliminar tu propio usuario" });
    }

    const usuarioAEliminar = usuarios.find((u) => u.correo.toLowerCase() === correo.toLowerCase());
    if (!usuarioAEliminar) {
      return respuestaJSON({ status: "error", mensaje: \`⚠️ No se encontró el usuario "\${correo}".\` });
    }

    if (usuarioAEliminar.rol === "administrador") {
      return respuestaJSON({ status: "error", mensaje: "🚫 No se puede eliminar administradores." });
    }

    const config = leerJSON(JSON_CONFIGURACION);
    const carpetaId = config?.CARPETA_PRINCIPAL_ID;

    if (!carpetaId) {
      throw new Error("No se pudo obtener el ID de la carpeta principal desde la configuración.");
    }

    try {
      const response = Drive.Permissions.list(carpetaId);
      const permissions = response.permissions;
      const permiso = permissions.find(p => p.emailAddress?.toLowerCase() === correo.toLowerCase());

      if (permiso) {
        Drive.Permissions.delete(carpetaId, permiso.id);
      } else {
        const carpeta = DriveApp.getFolderById(carpetaId);
        carpeta.removeViewer(correo);
        carpeta.removeEditor(correo);
      }
    } catch (err) {
      avisoDrive = \`Aviso en Drive: \${err.message}\`;
    }

    const nuevosUsuarios = usuarios.filter((u) => u.correo.toLowerCase() !== correo.toLowerCase());

    guardarJSON(JSON_USUARIOS, nuevosUsuarios);

    registrarLog("eliminarUsuario", correoEjecutor, \`Usuario eliminado: \${correo} (\${avisoDrive})\`);

    return respuestaJSON({
      status: "ok",
      mensaje: \`🗑️ Usuario "\${correo}" eliminado\`,
      datos: nuevosUsuarios,
    });

  } catch (err) {
    manejarError(err, "eliminarUsuario", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al eliminar usuario.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
// Productos
function agregarProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let productos = leerJSON(JSON_PRODUCTOS);
    let resultados = [];

    let listaProductos = data.productos || [data];

    listaProductos.forEach(p => {

      if (!p.nombre) {
        resultados.push({ status: "error", mensaje: "⚠️ El nombre del producto es obligatorio." });
        return;
      }

      const yaExiste = productos.some(u => normalizarTexto(u.nombre) === normalizarTexto(p.nombre));
      if (yaExiste) {
        resultados.push({ nombre: p.nombre, status: "warning", mensaje: "⚠️ Ya existe este producto" });
        return;
      }

      const nuevoProd = {
        id: "prod" + new Date().getTime() + Math.floor(Math.random() * 1000),
        nombre: p.nombre,
        descripcion: p.descripcion || "",
        entidad: p.entidad || "",
        tipo: p.tipo || ""
      };
      productos.push(nuevoProd);

      registrarLog("agregarProducto", correoEjecutor, { producto: nuevoProd });

      resultados.push({ nombre: p.nombre, status: "ok", mensaje: "Producto agregado", id: nuevoProd.id });

    });

    const huboCambios = resultados.some(r => r.status === "ok");

    if (huboCambios) {
      guardarJSON(JSON_PRODUCTOS, productos);
    }

    return respuestaJSON({
      status: "ok",
      resultados,
      datos: productos
    });

  } catch (err) {
    manejarError(err, "agregarProducto", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al procesar los productos.",
      detalle: err.message || String(err)
    });
  } finally {
    lock.releaseLock();
  }
}
function actualizarProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let productos = leerJSON(JSON_PRODUCTOS) || [];
    let resultados = [];

    const { id, nombre, descripcion, entidad, tipo } = data;

    if (!id) {
      resultados.push({ status: "error", mensaje: "⚠️ El ID del producto es obligatorio." });
      return respuestaJSON({ status: "error", resultados });
    }

    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
      resultados.push({ status: "error", mensaje: "⚠️ Producto no encontrado." });
      return respuestaJSON({ status: "error", resultados });
    }

    if (nombre && nombre.trim() !== "") {
      const existeDuplicado = productos.some(p => p.id !== id && normalizarTexto(p.nombre) === normalizarTexto(nombre));
      if (existeDuplicado) {
        resultados.push({ status: "warning", mensaje: "⚠️ Ya existe otro producto con ese nombre." });
        return respuestaJSON({ status: "warning", resultados });
      }
    }

    productos[index].nombre = nombre ?? productos[index].nombre;
    productos[index].descripcion = descripcion ?? productos[index].descripcion;
    productos[index].entidad = entidad ?? productos[index].entidad;
    productos[index].tipo = tipo ?? productos[index].tipo;

    guardarJSON(JSON_PRODUCTOS, productos);

    registrarLog("actualizarProducto", correoEjecutor, {
      productoActualizado: productos[index]
    });

    resultados.push({
      status: "ok",
      mensaje: "✅ Producto actualizado correctamente.",
      producto: productos[index]
    });

    return respuestaJSON({
      status: "ok",
      resultados,
      datos: productos
    });

  } catch (err) {
    manejarError(err, "actualizarProducto", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar el producto.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function eliminarProducto(id, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let productos = leerJSON(JSON_PRODUCTOS);

    if (!id) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ El ID del producto es necesario." });
    }

    const eliminado = productos.find(p => p.id === id);

    if (!eliminado) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ El producto no existe o ya fue eliminado." });
    }

    const nuevos = productos.filter(p => p.id !== id);

    guardarJSON(JSON_PRODUCTOS, nuevos);

    registrarLog("eliminarProducto", correoEjecutor, {
      productoEliminado: eliminado || id
    });

    return respuestaJSON({
      status: "ok",
      mensaje: "Producto eliminado",
      productos: nuevos
    });

  } catch (err) {
    manejarError(err, "eliminarProducto", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al intentar eliminar el producto.",
      detalle: err.message || String(err)
    });

  } finally {
    lock.releaseLock();
  }
}
// Archivos
function subirArchivoProducto(e, isMultipart, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let config = leerJSON(JSON_CONFIGURACION);
    let bddatos = leerJSON(JSON_BDD_DATOS);
    let productos = leerJSON(JSON_PRODUCTOS);


    const camposEsperados = ["anio", "productosId"];
    const payload = obtenerPayloadArchivo(e, isMultipart, camposEsperados);

    const archivoBlob = payload.archivoBlob;
    const anio = payload.anio;
    let productosId = payload.productosId || [];

    const debugPayload = payload.debug;

    if (!archivoBlob || productosId.length === 0 || !anio) {
      return respuestaJSON({
        success: false,
        message: "❌ Faltan campos obligatorios",
        debug: debugPayload,
      });
    }

    if (typeof productosId === "string") {
      productosId = productosId.split(",");
    }

    productosId = productosId.map(p => String(p));

    const nombresProductos = productos
      .filter(p => productosId.includes(String(p.id)))
      .map(p => p.nombre);

    const registrosExistentes = bddatos.filter(r =>
      r.anio === anio &&
      (
        productosId.includes(String(r.productoId)) ||
        nombresProductos.includes(r.nombreProducto)
      )
    );

    if (registrosExistentes.length > 0) {

      const productosDuplicados = [
        ...new Set(
          registrosExistentes
            .map(r => r.nombreProducto)
            .filter(Boolean)
        )
      ];

      return respuestaJSON({
        success: true,
        status: "archivo_existente",
        existe: true,
        message: \`⚠️ Ya existe archivo para \${productosDuplicados.join(", ")} en el año \${anio}\`,
        registros: registrosExistentes,
        debug: debugPayload
      });

    }

    const validacion = validarArchivo(archivoBlob, config);

    if (!validacion.ok) {
      return respuestaJSON({
        success: false,
        status: "error_validacion",
        message: validacion.mensaje,
        debug: debugPayload
      });
    }

    const extension = validacion.extension;

    const usarExistente = isMultipart
        ? e.parameter.usarExistente === "true"
        : (JSON.parse(e.postData.contents).usarExistente === true);

    const resultadoDrive = guardarArchivoEnDrive(archivoBlob, anio, null, usarExistente);

    if (!resultadoDrive.ok) {
        return respuestaJSON({
            success: true,
            status: resultadoDrive.status,
            message: resultadoDrive.mensaje,
            idArchivo: resultadoDrive.idArchivo,
            link: resultadoDrive.link,
            nombreArchivo: resultadoDrive.nombreArchivo,
            productosAsociados: productosId,
            debug: debugPayload
        });
    }

    const file = resultadoDrive.file;

    productosId.forEach(pid => {
      let prod = productos.find(p => p.id === pid);
      if (prod) {
        let registro = {
        registroId: "reg" + new Date().getTime() + "_" + pid,
        fileId: file.getId(),
        productoId: pid,
        nombreProducto: prod.nombre,
        descripcion: prod.descripcion || "",
        entidad: prod.entidad || "",
        tipo: prod.tipo || "",
        anio,
        nombreArchivo: resultadoDrive.nuevoNombre,
        link: resultadoDrive.link,
        fecha: new Date().toISOString()
      };
        bddatos.push(registro);
      }
    });

    guardarJSON(JSON_BDD_DATOS, bddatos);

    const productosAfectados = productosId.map(pid => {
      const p = productos.find(x => x.id === pid);
      return p ? \`\${p.nombre} (\${p.entidad || "sin entidad"})\` : pid;
    });

    registrarLog("subirArchivoProducto", correoEjecutor, {
      archivo: archivoBlob.getName(),
      productos: productosAfectados,
      productosId,
      anio,
      nombreArchivoFinal: resultadoDrive.nuevoNombre || file.getName(),
      link: file.getUrl()
    });

    return respuestaJSON({
      success: true,
      status: "ok",
      message: "📂 Archivo subido correctamente",
      idArchivo: file.getId(),
      link: file.getUrl(),
      productosAsociados: productosId,
      debug: debugPayload,
    });
  } catch (err) {
    manejarError(err, "subirArchivoProducto", correoEjecutor);

    return respuestaJSON({
      success: false,
      status: "error_interno",
      message: "⚠️ Error crítico al procesar la subida.",
      detalle: err.message || String(err),
      stack: err.stack ? err.stack.substring(0, 500) : undefined,
    });

  } finally {
    lock.releaseLock();
  }
}
function subirArchivoFacturas(e, isMultipart, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let config = leerJSON(JSON_CONFIGURACION);
    let bddatos = leerJSON(JSON_BDD_FACTURAS) || [];

    const camposEsperados = ["anio", "entidad", "descripcion", "valor", "metodoPago"];
    const payload = obtenerPayloadArchivo(e, isMultipart, camposEsperados);

    const archivoBlob = payload.archivoBlob;

    const anio = payload.anio;
    const entidad = payload.entidad;
    const descripcion = payload.descripcion;
    const valor = payload.valor;
    const metodoPago = payload.metodoPago;

    const debugPayload = payload.debug;

    if (!archivoBlob || !anio) {
      return respuestaJSON({
        success: false,
        message: "❌ Faltan campos obligatorios (archivo o año)",
        debug: debugPayload,
      });
    }

    const validacion = validarArchivo(archivoBlob, config);

    if (!validacion.ok) {
      return respuestaJSON({
        success: false,
        status: "error_validacion",
        message: validacion.mensaje,
        debug: debugPayload
      });
    }

    const extension = validacion.extension;

    const usarExistente = isMultipart
      ? e.parameter.usarExistente === "true"
      : (JSON.parse(e.postData.contents).usarExistente === true);

    const resultadoDrive = guardarArchivoEnDrive(archivoBlob, anio, "facturas", usarExistente);

    if (!resultadoDrive.ok) {
        return respuestaJSON({
            success: true,
            status: resultadoDrive.status,
            message: resultadoDrive.mensaje,
            idArchivo: resultadoDrive.idArchivo,
            link: resultadoDrive.link,
            nombreArchivo: resultadoDrive.nombreArchivo,
            debug: debugPayload
        });
    }

    const file = resultadoDrive.file;


    const registro = {
      registroId: "fac" + new Date().getTime() + Math.round(Math.random() * 10000),
      fileId: file.getId(),
      anio,
      entidad: entidad || "Sin Entidad",
      descripcion: descripcion || "",
      valor: isNaN(Number(valor)) ? 0 : Number(valor),
      metodoPago,
      nombreArchivo: resultadoDrive.nuevoNombre,
      link: resultadoDrive.link,
      fecha: new Date().toISOString(),
    };

    bddatos.push(registro);

    guardarJSON(JSON_BDD_FACTURAS, bddatos);

    registrarLog("subirArchivoFacturas", correoEjecutor, {
      archivo: archivoBlob.getName(),
      anio,
      entidad,
      valor,
      metodoPago,
    });

    return respuestaJSON({
      success: true,
      status: "ok",
      message: "📂 Factura subida correctamente",
      idArchivo: file.getId(),
      link: file.getUrl(),
      debug: debugPayload,
    });

  } catch (err) {
    manejarError(err, "subirArchivoFacturas", correoEjecutor);
    return respuestaJSON({
      success: false,
      status: "error_interno",
      message: "❌ Error crítico al procesar la factura.",
      detalle: err.message || String(err)
    });
  } finally {
    lock.releaseLock();
  }
}
function remplazarArchivoProducto(e, isMultipart, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let config = leerJSON(JSON_CONFIGURACION);
    let bddatos = leerJSON(JSON_BDD_DATOS);

    const camposEsperados = ["productoId", "anio", "replaceOnlyThis"];
    const payload = obtenerPayloadArchivo(e, isMultipart, camposEsperados);

    const archivoBlob = payload.archivoBlob;
    const productoId = payload.productoId;
    const anio = payload.anio;
    const replaceOnlyThis = payload.replaceOnlyThis === true || payload.replaceOnlyThis === "true";
    const debugPayload = payload.debug;

    if (!archivoBlob || !productoId || !anio) {
      return respuestaJSON({
        success: false,
        status: "error_campos",
        message: "❌ Faltan campos obligatorios",
        debug: debugPayload
      });
    }

    let registroBase = bddatos.find(r => String(r.productoId) === String(productoId) && String(r.anio) === String(anio));

    if (!registroBase) {
      return respuestaJSON({
        status: "error",
        message: "❌ No existe archivo para ese producto y año",
        debug: debugPayload
      });
    }

    let registrosRelacionados = [];
    if (replaceOnlyThis) {
      registrosRelacionados = [registroBase];
    } else {
      registrosRelacionados = bddatos.filter(
        r => r.fileId === registroBase.fileId && String(r.anio) === String(anio)
      );
    }

    if (registrosRelacionados.length === 0) {
      return respuestaJSON({
        status: "error",
        message: "⚠️ No se encontraron registros relacionados",
        debug: debugPayload
      });
    }

    const validacion = validarArchivo(archivoBlob, config);
    if (!validacion.ok) {
      return respuestaJSON({
        success: false,
        status: "error_validacion",
        message: validacion.mensaje,
        debug: debugPayload
      });
    }

    const oldFileId = registroBase.fileId;
    const oldFileName = registroBase.nombreArchivo || "(desconocido)";

    const usarExistente = isMultipart
      ? e.parameter.usarExistente === "true"
      : (JSON.parse(e.postData.contents).usarExistente === true);

    const resultadoDrive = guardarArchivoEnDrive(archivoBlob, anio, null, usarExistente);

    if (!resultadoDrive.ok) {
      return respuestaJSON({
        success: true,
        status: resultadoDrive.status,
        message: resultadoDrive.mensaje,
        idArchivo: resultadoDrive.idArchivo,
        link: resultadoDrive.link,
        nombreArchivo: resultadoDrive.nombreArchivo,
        debug: debugPayload
      });
    }

    const file = resultadoDrive.file;

    registrosRelacionados.forEach(r => {
      r.fileId = file.getId();
      r.nombreArchivo = resultadoDrive.nuevoNombre || file.getName();
      r.link = resultadoDrive.link || file.getUrl();
      r.fecha = new Date().toISOString();
    });

    const resultadoLimpieza = verificarYEliminarArchivoDrive(
      oldFileId,
      oldFileName,
      anio,
      bddatos,
      correoEjecutor
    );

    guardarJSON(JSON_BDD_DATOS, bddatos);

    const productosAfectados = registrosRelacionados.map(r => {
      return r.nombreProducto ? \`\${r.nombreProducto} (\${r.entidad || "sin entidad"})\` : r.productoId;
    });

    registrarLog("remplazarArchivoProducto", correoEjecutor, {
      nuevoFileId: file.getId(),
      nuevoNombre: file.getName(),
      productosAfectados,
      anio,
      replaceOnlyThis,
      archivoBorrado: resultadoLimpieza.borrado ? oldFileName : "no borrado",
      motivoLimpieza: resultadoLimpieza.motivo,
      linkNuevoArchivo: file.getUrl()
    });

    return respuestaJSON({
      success: true,
      status: "ok",
      message: \`Archivo reemplazado. \${resultadoLimpieza.motivo}\`,
      archivoId: file.getId(),
      registros: registrosRelacionados,
      debug: debugPayload
    });

  } catch (err) {
    manejarError(err, "remplazarArchivoProducto", correoEjecutor)

    return respuestaJSON({
      success: false,
      status: "error_interno",
      message: "❌ Error crítico al reemplazar el archivo.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function eliminarRegistroProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const registroId = data.id;

    if (!registroId) {
      return respuestaJSON({ status: "error", mensaje: "ID de registro no proporcionado" });
    }

    const datos = leerJSON(JSON_BDD_DATOS) || [];

    const index = datos.findIndex(r => r.registroId === registroId);
    if (index === -1) {
      return respuestaJSON({ status: "error", mensaje: "Registro no encontrado" });
    }

    const { fileId, nombreArchivo, anio, productoId } = datos[index];

    datos.splice(index, 1);

    const resultadoDrive = verificarYEliminarArchivoDrive(
      fileId,
      nombreArchivo,
      anio,
      datos,
      correoEjecutor
    );

    guardarJSON(JSON_BDD_DATOS, datos);

    registrarLog("eliminarRegistroProducto", correoEjecutor, {
      registroId,
      productoId,
      anio,
      fileId,
      nombreArchivo,
      archivoEliminadoEnDrive: resultadoDrive.borrado,
      detalleDrive: resultadoDrive.motivo
    });

    return respuestaJSON({
      status: "ok",
      mensaje: "Registro eliminado correctamente. " + resultadoDrive.motivo,
      eliminado: {
        registroId,
        nombreArchivo,
        archivoEliminado: resultadoDrive.borrado
      }
    });

  } catch (err) {
    manejarError(err, "eliminarRegistroProducto", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al eliminar el registro.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function editarRegistroProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const registroId = data.registroId;

    if (!registroId) {
      return respuestaJSON({ status: "error", mensaje: "ID de registro no proporcionado" });
    }

    const datos = leerJSON(JSON_BDD_DATOS);
    const index = datos.findIndex(r => r.registroId === registroId);

    if (index === -1) {
      return respuestaJSON({ status: "error", mensaje: "Registro no encontrado" });
    }

    let registroActual = { ...datos[index] };
    const fileIdAnterior = registroActual.fileId;

    let nuevoFileId = fileIdAnterior;
    let nuevoLink = registroActual.link;
    let huboCambioDeArchivo = false;

    try {
      const carpetaRaizUsuario = obtenerOCrearCarpetaRaiz();
      const anioBusqueda = String(data.anio || registroActual.anio);
      const subcarpetasAnio = carpetaRaizUsuario.getFoldersByName(anioBusqueda);

      if (subcarpetasAnio.hasNext()) {
        const carpetaAño = subcarpetasAnio.next();
        const archivosCandidatos = carpetaAño.getFilesByName(registroActual.nombreArchivo);

        if (archivosCandidatos.hasNext()) {
          const archivoEncontrado = archivosCandidatos.next();
          nuevoFileId = archivoEncontrado.getId();
          nuevoLink = archivoEncontrado.getUrl();

          if (nuevoFileId !== fileIdAnterior) {
            huboCambioDeArchivo = true;
          }
        }
      }
    } catch (err) {
      // Si falla la búsqueda, mantenemos los datos que ya teníamos
    }

    const registroEditado = {
      ...registroActual,
      entidad: data.entidad ?? registroActual.entidad,
      nombreProducto: data.nombreProducto ?? registroActual.nombreProducto,
      descripcion: data.descripcion ?? registroActual.descripcion,
      tipo: data.tipo ?? registroActual.tipo,
      anio: String(data.anio ?? registroActual.anio),
      fileId: nuevoFileId,
      link: nuevoLink
    };

    datos[index] = registroEditado;
    guardarJSON(JSON_BDD_DATOS, datos);

    let infoLog = {
      registroId,
      antes: registroActual,
      despues: registroEditado
    };

    if (huboCambioDeArchivo) {
      infoLog.cambioLink = {
        mensaje: "Se detectó y vinculó una copia nueva del archivo",
        idAnterior: fileIdAnterior,
        idNuevo: nuevoFileId
      };
    }

    registrarLog("editarRegistroProducto", correoEjecutor, infoLog);

    return respuestaJSON({
      status: "ok",
      mensaje: huboCambioDeArchivo
        ? "Registro editado y archivo re-vinculado."
        : "Registro editado correctamente.",
      registro: registroEditado
    });

  } catch (err) {
    manejarError(err, "editarRegistroProducto", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error crítico al editar el registro.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function obtenerArchivosPorAnio(anio) {
  const bddatos = leerJSON(JSON_BDD_DATOS);
  const productos = leerJSON(JSON_PRODUCTOS);

  const registros = bddatos.filter(r => r.anio === anio);

  const resultado = registros.map(r => {
    const prod = productos.find(p => p.id === r.productoId) || {};
    return {
      idArchivo: r.id,
      registroId: r.registroId,
      productoId: r.productoId,
      nombreProducto: r.nombreProducto,
      entidad: r.entidad || "",
      tipo: r.tipo || "",
      descripcion: r.descripcion || "",
      anio: r.anio,
      nombreArchivo: r.nombreArchivo,
      link: r.link,
      fecha: r.fecha
    };
  });

  return respuestaJSON({ status: "ok", anio, archivos: resultado });

}
function obtenerProductos() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const productos = leerJSON(JSON_PRODUCTOS);

    if (!productos || productos.length === 0) {
      return respuestaJSON({
        status: "ok",
        mensaje: "No hay productos para mostrar",
        data: []
      });
    }

    return respuestaJSON({
      status: "ok",
      mensaje: "Productos obtenidos correctamente",
      data: productos
    });

  } catch (err) {
    return respuestaJSON({
      status: "error",
      mensaje: "Error al obtener productos",
      detalle: err.message || "No se pudo leer el archivo JSON_PRODUCTOS"
    });

  } finally {
    lock.releaseLock();
  }
}
function obtenerFacturasPorAnio(anio) {
  let data = leerJSON(JSON_BDD_FACTURAS);

  const filtrado = data.filter(f => String(f.anio) === String(anio));

  return respuestaJSON({
    status: "ok",
    data: filtrado,
  });
}
function actualizarFactura(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let bddatos = leerJSON(JSON_BDD_FACTURAS);
    const registroId = data.registroId;
    let avisoDrive = null;

    if (!registroId) {
      return respuestaJSON({ status: "error", mensaje: "❌ Se requiere el registroId." });
    }

    const index = bddatos.findIndex(f => f.registroId === registroId);
    if (index === -1) {
      return respuestaJSON({ status: "error", mensaje: "❌ Factura no encontrada." });
    }

    const registroActual = { ...bddatos[index] };
    const fileIdAnterior = registroActual.fileId;

    let nuevoFileId = fileIdAnterior;
    let nuevoLink = registroActual.link;
    let huboCambioDeArchivo = false;

    try {
      const carpetaRaizUsuario = obtenerOCrearCarpetaRaiz();
      const anioBusqueda = String(registroActual.anio);
      const subcarpetasAnio = carpetaRaizUsuario.getFoldersByName(anioBusqueda);

      if (subcarpetasAnio.hasNext()) {
        const carpetaAño = subcarpetasAnio.next();
        const subcarpetasFacturas = carpetaAño.getFoldersByName("facturas");

        if (subcarpetasFacturas.hasNext()) {
          const carpetaFacturas = subcarpetasFacturas.next();
          const archivos = carpetaFacturas.getFilesByName(registroActual.nombreArchivo);

          if (archivos.hasNext()) {
            const archivoEncontrado = archivos.next();
            nuevoFileId = archivoEncontrado.getId();
            nuevoLink = archivoEncontrado.getUrl();

            if (nuevoFileId !== fileIdAnterior) {
              huboCambioDeArchivo = true;
            }
          }
        }
      }
    } catch (err) {
      // Si hay error en Drive, mantenemos lo que tenemos
      avisoDrive = \`No se pudo re-vincular el archivo en Drive: \${err.message}\`;
    }

    const registroEditado = {
      ...registroActual,
      entidad: data.entidad ?? registroActual.entidad,
      descripcion: data.descripcion ?? registroActual.descripcion,
      valor: data.valor !== undefined ? (isNaN(Number(data.valor)) ? 0 : Number(data.valor)) : registroActual.valor,
      metodoPago: data.metodoPago ?? registroActual.metodoPago,
      fileId: nuevoFileId,
      link: nuevoLink
    };

    bddatos[index] = registroEditado;
    guardarJSON(JSON_BDD_FACTURAS, bddatos);

    let infoLog = {
      registroId,
      antes: registroActual,
      despues: registroEditado,
      avisoDrive: avisoDrive
    };

    if (huboCambioDeArchivo) {
      infoLog.cambioLink = {
        mensaje: "Link de factura actualizado (nueva copia detectada en subcarpeta facturas)",
        idAnterior: fileIdAnterior,
        idNuevo: nuevoFileId
      };
    }

    registrarLog("actualizarFactura", correoEjecutor, infoLog);

    return respuestaJSON({
      status: avisoDrive ? "warning" : "ok",
      mensaje: avisoDrive || (huboCambioDeArchivo
        ? "✅ Factura y link actualizados correctamente."
        : "✅ Factura actualizada correctamente."),
      datos: registroEditado
    });

  } catch (err) {
    manejarError(err, "actualizarFactura", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error crítico al actualizar la factura.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function eliminarFactura(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let bddatos = leerJSON(JSON_BDD_FACTURAS);
    const { registroId } = data;
    let avisoDrive = null;

    if (!registroId) {
      return respuestaJSON({
        status: "error",
        mensaje: "❌ Se requiere el registroId para eliminar la factura."
      });
    }

    const factura = bddatos.find(f => f.registroId === registroId);
    if (!factura) {
      return respuestaJSON({
        status: "error",
        mensaje: \`❌ No se encontró la factura con ID \${registroId}.\`
      });
    }

    try {
      if (factura.fileId) {
        const archivo = DriveApp.getFileById(factura.fileId);
        archivo.setTrashed(true);
      }
    } catch (err) {
      avisoDrive = \`El registro se eliminó, pero no se pudo borrar el archivo en Drive: \${err.message}\`;
    }

    const nuevos = bddatos.filter(f => f.registroId !== registroId);

    guardarJSON(JSON_BDD_FACTURAS, nuevos);

    registrarLog("eliminarFactura", correoEjecutor, { registroId, avisoDrive: avisoDrive });

    return respuestaJSON({
      status: avisoDrive ? "warning" : "ok",
      mensaje: avisoDrive || "🗑️ Factura eliminada correctamente.",
      datos: factura
    });

  } catch (err) {
    manejarError(err, "eliminarFactura", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "Error al eliminar factura: ",
      detalle: err.message || String(err),
    });

  } finally {
    lock.releaseLock();
  }
}
function obtenerProductosPorArchivo(fileId) {
  const bddatos = leerJSON(JSON_BDD_DATOS);
  const productos = leerJSON(JSON_PRODUCTOS);

  const registros = bddatos.filter(r => r.fileId === fileId);

  if (registros.length === 0) {
    return respuestaJSON({ status: "error", mensaje: "❌ No hay productos asociados a este archivo" });
  }

  const resultado = registros.map(r => {
    const prod = productos.find(p => p.id === r.productoId) || {};
    return {
      productoId: r.productoId,
      nombreProducto: prod.nombre || r.nombreProducto,
      descripcion: prod.descripcion || "",
      entidad: prod.entidad || "",
      tipo: prod.tipo || "",
      anio: r.anio,
      nombreArchivo: r.nombreArchivo,
      link: r.link,
      fecha: r.fecha
    };
  });

  return respuestaJSON({ status: "ok", fileId, productos: resultado });
}
function obtenerDatosTributarios() {
  let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);
  let maxOrden = datos.reduce((max, d) => Math.max(max, d.orden || 0), 0);
  datos.forEach((d) => {
    if (d.orden === undefined) {
      maxOrden++;
      d.orden = maxOrden;
    }
  });

  guardarJSON(JSON_DATOS_TRIBUTARIOS, datos);

  datos.sort((a, b) => (a.orden || 0) - (b.orden || 0));

  return respuestaJSON({ status: "ok", data: datos });
}
function actualizarDatosTributarios(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let nuevosDatos = data;
    if (!Array.isArray(data) && data && Array.isArray(data.data)) {
      nuevosDatos = data.data;
    } else if (!Array.isArray(data) && typeof data === 'object') {
       nuevosDatos = Object.values(data).filter(item => typeof item === 'object');
    }

    if (!Array.isArray(nuevosDatos)) {
      throw new Error("Formato de datos inválido");
    }

    const datosActuales = leerJSON(JSON_DATOS_TRIBUTARIOS) || [];

    const cambios = {
      agregados: [],
      eliminados: [],
      modificados: []
    };

    nuevosDatos.forEach(nuevo => {
      const anterior = datosActuales.find(old => String(old.id) === String(nuevo.id));

      if (!anterior) {
        cambios.agregados.push({ id: nuevo.id, label: nuevo.label, valor: nuevo.valor });
      } else {
        if (String(anterior.valor) !== String(nuevo.valor) || anterior.label !== nuevo.label) {
          cambios.modificados.push({
            campo: nuevo.label || nuevo.id,
            de: anterior.valor,
            a: nuevo.valor
          });
        }
      }
    });

    datosActuales.forEach(anterior => {
      const existeEnNuevos = nuevosDatos.some(n => String(n.id) === String(anterior.id));
      if (!existeEnNuevos) {
        cambios.eliminados.push({ id: anterior.id, label: anterior.label });
      }
    });

    guardarJSON(JSON_DATOS_TRIBUTARIOS, nuevosDatos);

    const huboCambios = cambios.agregados.length > 0 ||
                         cambios.eliminados.length > 0 ||
                         cambios.modificados.length > 0;

    registrarLog("actualizarDatosTributarios", correoEjecutor || "sistema", {
      resumen: huboCambios ? "Se detectaron cambios en la estructura o valores" : "Sincronización sin cambios",
      detalles: huboCambios ? cambios : "Ninguno",
      totalRegistros: nuevosDatos.length
    });

    return respuestaJSON({
      status: "ok",
      mensaje: "Datos actualizados",
      cambiosDetectados: huboCambios
    });

  } catch (err) {
    manejarError(err, "actualizarDatosTributarios", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar datos tributarios.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function obtenerLogs() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const logs = leerJSON(JSON_LOGS);

    if (!logs || logs.length === 0) {
      return respuestaJSON({
        status: "ok",
        mensaje: "No hay logs para mostrar",
        logs: []
      });
    }

    const logsOrdenados = [...logs].reverse();

    return respuestaJSON({
      status: "ok",
      mensaje: "Logs obtenidos correctamente",
      logs: logsOrdenados
    });

  } catch (err) {
    return respuestaJSON({
      status: "error",
      mensaje: "Error al obtener logs",
      detalle: err.message || "No se pudo leer el archivo de logs"
    });

  } finally {
    lock.releaseLock();
  }
}
function limpiarLogsAntiguos(usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let logs = leerJSON(JSON_LOGS) || [];

    if (logs.length <= 10) {
      return respuestaJSON({
        status: "ok",
        mensaje: "No se eliminaron logs. Hay 10 o menos registros.",
        total: logs.length
      });
    }

    const logsConservados = logs.slice(-10);
    const eliminados = logs.length - logsConservados.length;

    guardarJSON(JSON_LOGS, logsConservados);

    registrarLog("limpiarLogsAntiguos", correoEjecutor, {
      eliminados,
      totalFinal: logsConservados.length
    });

    return respuestaJSON({
      status: "ok",
      mensaje: \`🧹 \${eliminados} logs eliminados, se conservaron los últimos 10.\`,
      totalFinal: logsConservados.length
    });

  } catch (err) {
    manejarError(err, "limpiarLogsAntiguos", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "❌ Falló el mantenimiento de logs.",
      detalle: err.message || String(err),
    })
  } finally {
    lock.releaseLock();
  }
}

/******************************
 * FIN BACKEND
 ******************************/
`,yT="/appdeclaracion/assets/imgBackend1-DSJ-bLa1.webp",xT="/appdeclaracion/assets/imgBackend2-Cqt62vUJ.webp",wT="/appdeclaracion/assets/imgBackend3-DaVLght5.webp",jT="/appdeclaracion/assets/imgBackend4-B-5yDjcs.webp",ST="/appdeclaracion/assets/imgBackend5-DVl6r9fh.webp",NT="/appdeclaracion/assets/imgBackend6-B2Xs4tWE.webp",ET="/appdeclaracion/assets/imgBackend7-N9ASCtVG.webp",CT="/appdeclaracion/assets/imgBackend8-BwprXXyy.webp",AT="/appdeclaracion/assets/imgBackend9-D3jD8_Vx.webp",OT=()=>{const[n,a]=m.useState(!1),o=()=>{window.open("https://script.google.com/home/","_blank")},l=[{img:yT,descripcion:"Ingrese a la consola de Google Apps Script para comenzar con la configuración:",puntos:["Escriba https://script.google.com/home/ en su navegador.","O haga clic en el botón 'Abrir Apps Script' de arriba."]},{img:xT,descripcion:"Inicie un nuevo proyecto desde el panel principal:",puntos:["Haga clic en el botón 'Nuevo proyecto' ubicado en la parte superior izquierda."]},{img:wT,descripcion:"Configure el código base del backend:",puntos:["Cambie el nombre del proyecto a 'AppDeclaracion' haciendo doble click encima del nombre .","Ubique el archivo Codigo.gs y elimine todo su contenido.","Pegue el código proporcionado por AppDeclaracion el cual puede ver y copiar en el siguiente botón."]},{img:jT,descripcion:"Habilite los servicios necesarios de Google:",puntos:["En el panel izquierdo, haga clic en el símbolo '+' en Servicios para agregar un Drive.","Busque y seleccione 'Drive API'.","Seleccione la versión v3 y haga clic en 'Añadir'."]},{img:ST,descripcion:"Inicie el proceso de publicación:",puntos:["Haga clic en el botón azul 'Implementar' (arriba a la derecha).","Seleccione 'Nueva implementación'.","Haga clic en el icono de engranaje y elija 'Aplicación web'."]},{img:NT,descripcion:"Configure los parámetros de acceso de la aplicación:",puntos:["Descripción: 'Versión inicial'.","Ejecutar como: 'Yo'.","Quién tiene acceso: 'Cualquier usuario' (esto es vital para la conexión).","Haga clic en el botón 'Implementar'."]},{img:ET,descripcion:"Autorice los permisos de seguridad de Google:",puntos:["Haga clic en 'Autorizar acceso'.","Seleccione su cuenta de Google.","Haga clic en 'Advanced' y luego en 'Go to AppDeclaracion (unsafe)'.","Permita todos los accesos y copie la URL generada (URL de la aplicación web) en un archivo de texto para utilizarla posteriormente en el worker."]},{img:CT,descripcion:"Ejecute la configuración inicial de la base de datos:",puntos:["En la barra de herramientas superior, seleccione la función 'inicializarSistema'.","Haga clic en el botón 'Ejecutar'.","Espere a que el registro de ejecución finalice correctamente.","En el logo de Apps Script Superior Izquierdo de colores hacer click para regresar al administrador de proyectos"]},{img:AT,descripcion:"Active el acceso programático final:",puntos:["En el panel izquierdo hacer click en el icono de engranaje de configuración.","Hacer click en 'API de Google Apps Script' el cual se debe encontrar desactivado","Hacer click en la parte derecha en el botón Switch o deslizante","Finalizado este paso y copiada la URL ya podemos cerrar Apps Script y pasar a la pestaña del Worker"]}];return s.jsxs("div",{className:"crear-backend",children:[s.jsx("h1",{children:"Crear Backend en Apps Script"}),s.jsx("div",{className:"video-container",children:s.jsx("iframe",{src:"https://player.vimeo.com/video/1182426720?h=ddeac77678&badge=0&autopause=0&player_id=0&app_id=58479",title:"Tutorial Backend Apps Script",allowFullScreen:!0,allow:"autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",referrerPolicy:"strict-origin-when-cross-origin",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),s.jsx("div",{className:"boton-container",children:s.jsx("button",{onClick:o,children:"Abrir Apps Script"})}),s.jsx("div",{className:"pasos-container",children:l.map((u,d)=>s.jsxs("div",{className:"paso",children:[s.jsx("img",{src:u.img,alt:`Paso ${d+1}`}),s.jsxs("div",{className:"paso-contenido",children:[s.jsxs("strong",{children:["Paso ",d+1,":"]}),s.jsx("p",{children:u.descripcion}),u.puntos&&s.jsx("ul",{children:u.puntos.map((p,g)=>s.jsx("li",{children:p},g))})]}),d===2&&s.jsx("div",{className:"boton-container",children:s.jsx("button",{onClick:()=>a(!0),children:"Ver código del Backend"})})]},d))}),s.jsx(d0,{isOpen:n,onClose:()=>a(!1),titulo:"Código Backend Apps Script",codigo:bT})]})},kT=`export default {
  async fetch(request) {
    // ⚡ Manejo de preflight CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "*"
        }
      });
    }

    const destino =
      "https://script.google.com/macros/s/AKfycbx9YLF8p2FHnMGK88Hw4JKibeUu69V-BO_bQpoHFG1Z5VAf5F-ecjaXJ4-rN9D-_rzO/exec";

    try {

      // ✅ Bloque para reenviar token y tipo de contenido
      const headers = new Headers();
      headers.set("Content-Type", "application/json");

      // 🧠 Si el frontend envía un Authorization: Bearer <token>, lo reenviamos
      const authHeader = request.headers.get("Authorization");
      if (authHeader) {
        headers.set("Authorization", authHeader);
      }
      //******************************************** */
      let response;

      if (request.method === "POST") {
        // 🚀 reenviar con body
        const body = await request.text();
        response = await fetch(destino, {
          method: "POST",
          headers, // 👈 usa los headers creados arriba
          body,
        });

      } else if (request.method === "GET") {
        // 🚀 reenviar querystring
        const url = new URL(request.url);
        response = await fetch(\`\${destino}?\${url.searchParams.toString()}\`, {
          method: "GET",
          headers, // 👈 usa los headers creados arriba
        });
      } else {
        return new Response("Método no permitido", { status: 405 });
      }

      const content = await response.text();

      const contentType = response.headers.get("Content-Type") || "application/json";

      return new Response(content, {
        status: response.status,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "*",
          "Content-Type": contentType,
        },
      });

    } catch (err) {
      return new Response(
        JSON.stringify({
          success: false,
          message: \`❌ Worker error: \${err.message}\`
        }),
        {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      );
    }
  }
};
`,TT="/appdeclaracion/assets/imgWorker1-DsxzgBXq.webp",RT="/appdeclaracion/assets/imgWorker2-BG05QrIG.webp",DT="/appdeclaracion/assets/imgWorker3-ByEQQa3f.webp",LT="/appdeclaracion/assets/imgWorker4-vNF1IGvm.webp",MT="/appdeclaracion/assets/imgWorker5-BMmv7aUK.webp",_T="/appdeclaracion/assets/imgWorker6-FbMqyreq.webp",zT="/appdeclaracion/assets/imgWorker7-DYrg8XBA.webp",BT=()=>{const[n,a]=m.useState(!1),o=()=>{window.open("https://dash.cloudflare.com/","_blank")},l=[{img:TT,descripcion:'Ingrese a la consola de Cloudflare escribiendo en el navegador https://dash.cloudflare.com/login o haciendo clic en el botón "Abrir Cloudflare". Luego:',puntos:["Haga clic en 'Continue with Google'","Seleccione su cuenta de Google","Haga clic en 'Continuar' para ingresar al panel."]},{img:RT,descripcion:"Dentro del panel de Cloudflare ubique el menú lateral izquierdo:",puntos:["Busque la sección 'Compute'","Haga clic en 'Workers & Pages'","Luego haga clic en el botón 'Create application'"]},{img:DT,descripcion:"En la pantalla de creación de la aplicación ubique la opción 'Start with hello world!' y haga clic en ella.",puntos:["Esto generará un Worker base que posteriormente será modificado con el código de AppDeclaracion el cual puede ver y copiar en el siguiente botón."]},{img:LT,descripcion:"En el campo 'Worker name' elimine el contenido existente y escriba:",puntos:["appdeclaracion","Luego haga clic en el botón 'Deploy' para crear el Worker."]},{img:MT,descripcion:"Una vez creado el Worker aparecerá una pantalla de confirmación.",puntos:["En esta pantalla haga clic en el botón 'Edit code' para abrir el editor del Worker."]},{img:_T,descripcion:"Dentro del editor ubique el archivo worker.js, elimine el código existente y pegue el proporcionado por AppDeclaracion. Luego, busque la línea 'const destino' y:",puntos:["Reemplace la URL entre comillas por la generada en Apps Script.","Asegúrese que inicie con https:// y termine en /exec.","Copie la URL pública del Worker que aparece en la parte superior derecha (esta es la que compartirá con los usuarios).","Haga clic en 'Deploy' y luego en el enlace 'appdeclaracion' para regresar."]},{img:zT,descripcion:"Al regresar al panel principal diríjase nuevamente a 'Workers & Pages':",puntos:["Verifique que aparezca el Worker llamado 'appdeclaracion'.","Esto confirma que el Worker fue creado y desplegado correctamente.","Finalizado este paso y copiada la URL que debe registrarse en la sección 'Configuración de Backends'. Es la misma dirección que deberá proporcionarle a su contador. Una vez que él le informe su correo electrónico, usted podrá registrarlo como nuevo usuario con los roles y permisos adecuados. Recuerde que tanto usted como el contador deben agregar esta URL del Worker en sus respectivos paneles de AppDeclaración para que el sistema funcione correctamente."]}];return s.jsxs("div",{className:"crear-backend",children:[s.jsx("h1",{children:"Crear worker"}),s.jsx("div",{className:"video-container",children:s.jsx("iframe",{src:"https://player.vimeo.com/video/1182429387?h=02f60cfc57&badge=0&autopause=0&player_id=0&app_id=58479",title:"Tutorial Backend Workwe CloudFlare",allowFullScreen:!0,allow:"autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",referrerPolicy:"strict-origin-when-cross-origin",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),s.jsx("div",{className:"boton-container",children:s.jsx("button",{onClick:o,children:"Abrir CloudFlare"})}),s.jsx("div",{className:"pasos-container",children:l.map((u,d)=>s.jsxs("div",{className:"paso",children:[s.jsx("img",{src:u.img,alt:`Paso ${d+1}`}),s.jsxs("div",{className:"paso-contenido",children:[s.jsxs("strong",{children:["Paso ",d+1,":"]}),s.jsx("p",{children:u.descripcion}),u.puntos&&s.jsx("ul",{children:u.puntos.map((p,g)=>s.jsx("li",{children:p},g))})]}),d===2&&s.jsx("div",{className:"boton-container",children:s.jsx("button",{onClick:()=>a(!0),children:"Ver código del Worker"})})]},d))}),s.jsx(d0,{isOpen:n,onClose:()=>a(!1),titulo:"Código Cloudflare Worker",codigo:kT})]})},UT=()=>{const[n,a]=m.useState("appsScript");return s.jsxs(Po,{fluid:!0,className:"p-3",children:[s.jsx(wr,{children:s.jsx(Cn,{children:s.jsx("h3",{className:"mb-4 text-center fw-bold",children:"⚙️ Configuración Backend"})})}),s.jsx(wr,{children:s.jsxs(Cn,{children:[s.jsxs(xm,{activeKey:n,onSelect:o=>a(o),id:"admin-tabs",className:"mb-3",justify:!0,children:[s.jsx(jo,{eventKey:"appsScript",title:"🧱 Apps Script"}),s.jsx(jo,{eventKey:"worker",title:"🏰 Worker"})]}),n==="appsScript"&&s.jsx(OT,{}),n==="worker"&&s.jsx(BT,{})]})})]})};function ii(){return s.jsx("div",{className:"p-4 text-danger fw-bold",children:"❌ No tienes permiso para realizar esta acción."})}const Bb=({isMobile:n})=>n?s.jsxs("div",{className:"usuario-card skeleton-card-usuario",children:[s.jsxs("div",{className:"card-header d-flex align-items-center",children:[s.jsx("div",{className:"skeleton-bar",style:{width:"50%"}}),s.jsx("div",{className:"skeleton-badge ms-2"})]}),s.jsxs("div",{className:"card-body",children:[s.jsx("div",{className:"skeleton-bar mb-2",style:{width:"30%"}}),s.jsx("div",{className:"skeleton-bar mb-3",style:{width:"80%"}}),s.jsx("div",{className:"skeleton-switch mb-3"}),s.jsxs("div",{className:"d-flex gap-2",children:[s.jsx("div",{className:"skeleton-button-lg"}),s.jsx("div",{className:"skeleton-button-lg"})]})]})]}):s.jsxs("tr",{className:"usuario-skeleton-row",children:[s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"85%"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"70%"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-badge"})}),s.jsx("td",{className:"text-center",children:s.jsx("div",{className:"skeleton-switch"})}),s.jsx("td",{className:"text-center",children:s.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[s.jsx("div",{className:"skeleton-button"}),s.jsx("div",{className:"skeleton-button"})]})})]}),PT=({isFocused:n})=>{const{usuarios:a,rolesDisponibles:o,rolesErrorPermisos:l,getDatos:u,addDato:d,updateDato:p,toggleActivo:g,deleteDato:h,loading:v}=Bk(),{errors:b,validateField:x,validateForm:j,clearErrors:N,clearError:C}=Xo(),{user:O}=Si(),[S,k]=m.useState(!1),[E,T]=m.useState(null),[L,B]=m.useState({correo:"",nombreUsuario:"",rol:""}),[z,_]=m.useState(null),[U,Y]=m.useState(!1),{puede:W}=ga(),ne=W("getUsuarios");m.useEffect(()=>{n&&ne&&u()},[u,ne,n]);const le=async()=>{if(N(),!j({correo:L.correo,nombreUsuario:L.nombreUsuario,rol:L.rol}))return;const D={correo:L.correo.toLowerCase(),nombre:vt(L.nombreUsuario),rol:L.rol};E?await p(E.correo,D):await d(D),k(!1),T(null),B({correo:"",nombreUsuario:"",rol:""})},ie=P=>{T(P),B({correo:P.correo,nombreUsuario:P.nombre,rol:P.rol}),k(!0)},ee=async P=>{await g(P.correo,!P.activo,P.nombre)};return ne?s.jsxs("div",{className:"usuarios-admin p-3",children:[s.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[s.jsx("h4",{className:"fw-bold mb-0",children:"👥 Administración de Usuarios"}),s.jsx(Oe,{onClick:()=>k(!0),variant:"primary",size:"sm",disabled:v,children:"➕ Crear Usuario"})]}),!v&&a.length===0?s.jsx("div",{className:"text-center text-muted py-4",children:"No hay usuarios registrados."}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"table-responsive shadow-sm rounded d-none d-md-block",children:s.jsxs(gi,{hover:!0,className:"align-middle mb-0",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{children:"Correo"}),s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Rol"}),s.jsx("th",{className:"text-center",children:"Estado"}),s.jsx("th",{className:"text-center",children:"Acciones"})]})}),s.jsx("tbody",{children:v?Array.from({length:5}).map((P,D)=>s.jsx(Bb,{isMobile:!1},`skel-table-${D}`)):a.map((P,D)=>s.jsxs("tr",{children:[s.jsx("td",{children:P.correo}),s.jsx("td",{children:P.nombre}),s.jsx("td",{children:s.jsx(xo,{bg:P.rol==="administrador"?"warning":P.rol==="contador"?"info":"secondary",text:P.rol==="administrador"?"dark":"white",className:"px-2 py-1 text-capitalize",children:P.rol})}),s.jsx("td",{className:"text-center",children:s.jsx(se.Check,{type:"switch",checked:P.activo,onChange:()=>ee(P),disabled:P.nombre.toLowerCase()==="administrador"&&P.rol==="administrador",label:s.jsx("span",{className:P.activo?"text-success":"text-danger",children:P.activo?"Activo":"Inactivo"})})}),s.jsx("td",{className:"text-center","data-label":"Acciones",children:s.jsx("div",{className:"ico-edit-elim",children:O?.correo===P.correo?s.jsx(xo,{bg:"light",text:"dark",className:"border shadow-sm",children:"Tu sesión"}):P.nombre.toLowerCase()==="administrador"?s.jsxs(xo,{bg:"dark",text:"white",className:"shadow-sm",children:[s.jsx("i",{className:"bi bi-shield-lock-fill me-1"})," Restringido"]}):s.jsxs(s.Fragment,{children:[s.jsx("i",{className:"bi bi-pencil-square accion-icon",title:"Editar",onClick:()=>ie(P)}),s.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{_(P),Y(!0)}})]})})})]},D))})]})}),s.jsx("div",{className:"usuarios-cards d-md-none",children:v?Array.from({length:4}).map((P,D)=>s.jsx(Bb,{isMobile:!0},`skel-card-${D}`)):a.map((P,D)=>s.jsxs("div",{className:"usuario-card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("strong",{children:P.nombre}),s.jsx(xo,{bg:P.rol==="administrador"?"warning":"info",text:P.rol==="administrador"?"dark":"white",className:"ms-2",children:P.rol})]}),s.jsxs("div",{className:"card-body",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Correo:"}),s.jsx("br",{})," ",P.correo]}),s.jsx(se.Check,{type:"switch",id:`switch-mobile-${P.correo}`,checked:P.activo,onChange:()=>ee(P),disabled:P.nombre.toLowerCase()==="administrador"&&P.rol==="administrador",label:P.activo?"Activo":"Inactivo"}),s.jsxs("div",{className:"d-flex gap-2 mt-3",children:[s.jsx("span",{className:"label-edit-elim-span",children:"Acciones:"}),s.jsx("div",{className:"ico-edit-elim",children:O?.correo===P.correo?s.jsx("span",{className:"text-muted small fw-bold",children:"Sesión activa"}):P.nombre.toLowerCase()==="administrador"?s.jsxs("span",{className:"text-danger small fw-bold span-i-restri",children:[s.jsx("i",{className:"bi bi-shield-lock-fill me-1"})," Restringido"]}):s.jsxs(s.Fragment,{children:[s.jsx("i",{className:"bi bi-pencil-square accion-icon",title:"Editar",onClick:()=>ie(P)}),s.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{_(P),Y(!0)}})]})})]})]})]},D))})]}),s.jsxs(ye,{show:S,centered:!0,onHide:()=>k(!1),children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:E?"Editar Usuario":"Nuevo Usuario"})}),s.jsxs(ye.Body,{children:[s.jsx(Yo,{errors:b}),s.jsxs(se,{children:[s.jsxs(se.Group,{className:"mb-3",children:[s.jsx(se.Label,{children:"Correo"}),s.jsx(se.Control,{type:"email",value:L.correo,onChange:P=>{const D=P.target.value.toLowerCase();B({...L,correo:D}),C("correo")},onBlur:P=>x("correo",P.target.value),disabled:E})]}),s.jsxs(se.Group,{className:"mb-3",children:[s.jsx(se.Label,{children:"Nombre completo"}),s.jsx(se.Control,{type:"text",value:L.nombreUsuario,onChange:P=>{B({...L,nombreUsuario:P.target.value}),C("nombreUsuario")},onBlur:P=>x("nombreUsuario",P.target.value)})]}),s.jsxs(se.Group,{className:"mb-3",children:[s.jsx(se.Label,{children:"Rol"}),l?s.jsx("div",{className:"alert alert-warning py-2 small",children:"⚠️ No tienes permiso para ver roles."}):s.jsxs(se.Select,{value:L.rol,onChange:P=>{B({...L,rol:P.target.value}),C("rol")},onBlur:P=>x("rol",P.target.value),children:[s.jsx("option",{value:"",children:"Seleccionar rol..."}),o.map((P,D)=>s.jsx("option",{value:P.rol,children:P.rol},D))]})]})]})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:()=>k(!1),children:"Cancelar"}),s.jsx(Oe,{variant:"success",onClick:le,disabled:v,children:v?s.jsxs(s.Fragment,{children:[s.jsx(St,{size:"sm",animation:"border"})," Guardando..."]}):"💾 Guardar"})]}),s.jsx(xn,{show:v})]}),s.jsx(va,{show:U,onHide:()=>Y(!1),title:"Eliminar Usuario",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar al usuario ",s.jsx("strong",{children:z?.correo}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>h(z?.correo)})]}):s.jsx(ii,{})},IT=()=>s.jsxs("tr",{className:"rol-skeleton-row",children:[s.jsx("td",{"data-label":"Rol",children:s.jsx("div",{className:"d-flex align-items-center",children:s.jsx("div",{className:"skeleton-bar",style:{width:"120px"}})})}),s.jsx("td",{"data-label":"Permisos",children:s.jsxs("div",{className:"d-flex flex-column gap-2",children:[s.jsx("div",{className:"skeleton-bar",style:{width:"90%"}}),s.jsx("div",{className:"skeleton-bar",style:{width:"70%"}})]})}),s.jsx("td",{className:"td-acciones text-center","data-label":"Acciones",children:s.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[s.jsx("div",{className:"skeleton-btn-rect"}),s.jsx("div",{className:"skeleton-btn-rect"})]})})]}),$T=({isFocused:n})=>{const{roles:a,funcionesDisponibles:o,getDatos:l,addDato:u,updateDato:d,deleteDato:p,loading:g}=$k(),{errors:h,validateField:v,validateForm:b,clearErrors:x,clearError:j}=Xo(),[N,C]=m.useState(!1),[O,S]=m.useState(""),[k,E]=m.useState([]),[T,L]=m.useState(null),[B,z]=m.useState(null),[_,U]=m.useState(!1),{puede:Y}=ga(),W=Y("getRoles");m.useEffect(()=>{n&&W&&l()},[l,W,n]);const ne=async()=>{x();const P={rolPermisos:k};if(T||(P.rolNombre=O),!b(P))return;const K=vt(O);T?await d(T.rol,k):await u(K,k),C(!1),S(""),E([]),L(null)},le=P=>{L(P),S(P.rol),E((P.permisos||[]).map(D=>D.trim())),C(!0)},ie=P=>{const D=k.includes(P)?k.filter(K=>K!==P):[...k,P];E(D),v("rolPermisos",D)},ee=()=>{const P=k.length===o.length?[]:o;E(P),v("rolPermisos",P)};return W?s.jsxs("div",{className:"roles-admin-container p-3",children:[s.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[s.jsx("h4",{className:"fw-bold mb-0",children:"Administración de Roles"}),s.jsx(Oe,{onClick:()=>{L(null),S(""),E([]),C(!0)},variant:"primary",disabled:g,children:"➕ Nuevo Rol"})]}),s.jsx("div",{className:"table-responsive shadow-sm rounded",children:s.jsxs(gi,{striped:!0,bordered:!0,hover:!0,className:"align-middle mb-0",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{children:"Rol"}),s.jsx("th",{children:"Permisos"}),s.jsx("th",{className:"text-center",children:"Acciones"})]})}),s.jsx("tbody",{children:g?Array.from({length:5}).map((P,D)=>s.jsx(IT,{},`rol-skel-${D}`)):a.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"3",className:"text-center py-4 text-muted",children:"No hay roles definidos."})}):a.map((P,D)=>s.jsxs("tr",{children:[s.jsxs("td",{"data-label":"Rol",children:[s.jsx("strong",{children:P.rol}),P.rol==="administrador"&&s.jsx(xo,{bg:"warning",text:"dark",className:"ms-2",children:"Protegido"})]}),s.jsx("td",{"data-label":"Permisos",children:s.jsx("div",{className:"text-muted small text-break",children:P.permisos?.includes("*")?"Todos los permisos":P.permisos?.join(", ")||"—"})}),s.jsx("td",{className:"td-acciones text-center","data-label":"Acciones",children:s.jsx("div",{className:"ico-edit-elim",children:P.rol!=="administrador"&&s.jsxs(s.Fragment,{children:[s.jsx("i",{className:"bi bi-pencil-square accion-icon",title:"Editar",onClick:()=>le(P)}),s.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{z(P.rol),U(!0)}})]})})})]},D))})]})}),s.jsxs(ye,{show:N,onHide:()=>C(!1),size:"lg",centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:T?`Editar Permisos: ${T.rol}`:"Crear Nuevo Rol"})}),s.jsxs(ye.Body,{children:[s.jsx(Yo,{errors:h}),!T&&s.jsxs(se.Group,{className:"mb-3",children:[s.jsx(se.Label,{className:"fw-bold",children:"Nombre del Rol"}),s.jsx(se.Control,{type:"text",value:O,onChange:P=>{S(P.target.value),j("rolNombre")},onBlur:P=>v("rolNombre",P.target.value),placeholder:"Ejemplo: Contador, Revisor, Supervisor..."})]}),s.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[s.jsxs(se.Label,{className:"fw-bold mb-0",children:["Permisos del Rol (",k.length,")"]}),s.jsx(Oe,{size:"sm",variant:"outline-primary",onClick:ee,children:k.length===o.length?"Deseleccionar todos":"Seleccionar todos"})]}),s.jsx("div",{className:"p-3 bg-light border rounded",style:{maxHeight:"350px",overflowY:"auto"},children:s.jsx("div",{className:"row",children:o.map(P=>s.jsx("div",{className:"col-md-6 col-lg-4 mb-2",children:s.jsx(se.Check,{type:"checkbox",id:`perm-${P}`,label:s.jsx("span",{className:"small",children:P}),checked:k.includes(P),onChange:()=>ie(P)})},P))})})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:()=>C(!1),children:"Cancelar"}),s.jsx(Oe,{variant:"success",onClick:ne,disabled:g,children:g?s.jsxs(s.Fragment,{children:[s.jsx(St,{size:"sm",animation:"border",className:"me-2"}),"Guardando..."]}):"💾 Guardar"})]}),s.jsx(xn,{show:g})]}),s.jsx(va,{show:_,onHide:()=>U(!1),title:"Eliminar Rol",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar el rol ",s.jsx("strong",{children:B}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>p(B)})]}):s.jsx(ii,{})},Ub=({isTable:n=!1})=>n?s.jsxs("tr",{className:"log-skeleton-row",children:[s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"140px"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"100px"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"120px"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar-rect"})})]}):s.jsxs("div",{className:"log-skeleton-card",children:[s.jsxs("div",{className:"log-header-skeleton",children:[s.jsx("div",{className:"skeleton-bar",style:{width:"40%"}}),s.jsx("div",{className:"skeleton-bar",style:{width:"30%"}})]}),s.jsxs("div",{className:"log-body-skeleton",children:[s.jsx("div",{className:"skeleton-bar mb-3",style:{width:"60%"}}),s.jsx("div",{className:"skeleton-bar-rect"})]})]});function HT({isFocused:n}){const{puede:a}=ga(),o=a("getLogs"),{logs:l,getDatos:u,clearDatos:d,loading:p}=_k(),[g,h]=m.useState(!1);return m.useEffect(()=>{n&&o&&u()},[u,o,n]),o?s.jsxs("div",{className:"p-4",children:[s.jsx("h2",{className:"mb-4",children:"📜 Administración de Logs"}),s.jsx("div",{className:"d-flex justify-content-end mb-3",children:s.jsx(Oe,{variant:"danger",onClick:()=>h(!0),disabled:p,children:"🧹 Limpiar Logs Antiguos"})}),s.jsxs(gi,{striped:!0,bordered:!0,hover:!0,size:"sm",responsive:!0,className:"logs-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Acción"}),s.jsx("th",{children:"Usuario"}),s.jsx("th",{children:"Detalle"})]})}),s.jsx("tbody",{children:p?Array.from({length:8}).map((v,b)=>s.jsx(Ub,{isTable:!0},`table-skel-${b}`)):l.length>0?l.map((v,b)=>s.jsxs("tr",{children:[s.jsx("td",{children:v.fecha}),s.jsx("td",{children:v.accion}),s.jsx("td",{children:v.usuario}),s.jsx("td",{children:s.jsx("pre",{className:"bg-light p-2 rounded small mb-0",children:JSON.stringify(v.detalle,null,2)})})]},b)):s.jsx("tr",{children:s.jsx("td",{colSpan:4,className:"text-center text-muted",children:"No hay logs disponibles"})})})]}),s.jsx("div",{className:"logs-cards",children:p?Array.from({length:4}).map((v,b)=>s.jsx(Ub,{isTable:!1},`card-skel-${b}`)):l.length>0?l.map((v,b)=>s.jsxs("div",{className:"log-card",children:[s.jsxs("div",{className:"log-header",children:[s.jsx("h6",{children:v.accion}),s.jsx("span",{children:v.fecha})]}),s.jsxs("div",{className:"log-body",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Usuario:"})," ",v.usuario]}),s.jsx("pre",{children:JSON.stringify(v.detalle,null,2)})]})]},b)):s.jsx("p",{className:"text-center text-muted",children:"No hay logs disponibles"})}),s.jsx(va,{show:g,onHide:()=>h(!1),title:"🧹 Limpiar Logs Antiguos",message:s.jsxs(s.Fragment,{children:["Esta acción eliminará todos los logs antiguos y conservará solo los"," ",s.jsx("strong",{children:"10 más recientes"}),".",s.jsx("p",{className:"text-danger fw-semibold mt-2",children:"⚠️ Esta operación no se puede deshacer."})]}),confirmLabel:"Limpiar Logs",confirmVariant:"danger",onConfirm:d})]}):s.jsx(ii,{})}const qT=()=>s.jsxs("div",{className:"config-skeleton-container",children:[s.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[s.jsx("div",{className:"skeleton-title mb-3",style:{width:"200px"}}),s.jsxs("div",{className:"row gy-3",children:[s.jsxs("div",{className:"col-12 col-md-5",children:[s.jsx("div",{className:"skeleton-label mb-2"}),s.jsx("div",{className:"skeleton-input mb-3"}),s.jsx("div",{className:"skeleton-btn",style:{width:"180px"}})]}),s.jsxs("div",{className:"col-12 col-md-5",children:[s.jsx("div",{className:"skeleton-label mb-2"}),s.jsx("div",{className:"skeleton-input mb-3"}),s.jsx("div",{className:"skeleton-label mb-2"}),s.jsx("div",{className:"skeleton-input mb-1"}),s.jsx("div",{className:"skeleton-text",style:{width:"120px"}})]}),s.jsx("div",{className:"col-12 col-md-2",children:s.jsx("div",{className:"skeleton-btn h-100",style:{minHeight:"38px"}})})]})]}),s.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[s.jsxs("div",{className:"d-flex justify-content-between mb-3",children:[s.jsx("div",{className:"skeleton-title",style:{width:"250px"}}),s.jsx("div",{className:"skeleton-input",style:{width:"200px"}})]}),s.jsx("div",{className:"skeleton-table",children:[1,2,3,4].map(n=>s.jsxs("div",{className:"skeleton-table-row d-flex justify-content-between p-2 border-bottom",children:[s.jsx("div",{className:"skeleton-bar",style:{width:"40px"}}),s.jsx("div",{className:"skeleton-btn",style:{width:"80px",height:"25px"}})]},n))}),s.jsx("div",{className:"text-end mt-3",children:s.jsx("div",{className:"skeleton-btn d-inline-block",style:{width:"150px"}})})]})]}),JT=({isFocused:n})=>{const{config:a,clearConfig:o,getConfig:l,versionBackend:u,updateConfig:d,generarBackup:p,reinicializarSistemaForzado:g,loading:h}=Pk(),[v,b]=m.useState(""),[x,j]=m.useState(""),[N,C]=m.useState([]),[O,S]=m.useState(""),[k,E]=m.useState(!1),[T,L]=m.useState(""),[B,z]=m.useState(!1),[_]=m.useState("v2620261515"),{puede:U}=ga(),Y=U("getConfig"),[W,ne]=m.useState(!1),[le,ie]=m.useState(!1),[ee,P]=m.useState(!1),[D,K]=m.useState(!1);m.useEffect(()=>{n&&Y&&(K(!1),l())},[l,Y,n]),m.useEffect(()=>{a&&!D&&!ee&&(b(a.TAMANO_MAX_MB||10),j(a.TOKEN_EXP_MINUTOS||60),C(a.TIPOS_PERMITIDOS||[]),K(!0))},[a,D,ee]),m.useEffect(()=>{n||(K(!1),b(""),j(""),C([]),S(""),o())},[n,o]);const oe=()=>{const H=O.trim().toLowerCase();if(H){if(N.includes(H))return alert("⚠️ Esa extensión ya está permitida.");C([...N,H]),S("")}},V=H=>{L(H),E(!0)},A=()=>{C(N.filter(H=>H!==T)),E(!1),L("")},$=H=>{const ue=H.target.value;ue>45?b(45):b(ue)},re=async()=>{P(!0);try{await d({CARPETA_PRINCIPAL:a?.CARPETA_PRINCIPAL||"",TAMANO_MAX_MB:Number(v),TOKEN_EXP_MINUTOS:Number(x),TIPOS_PERMITIDOS:N})}finally{P(!1)}},ae=async()=>{ne(!0);try{await p()}finally{ne(!1)}};return Y?s.jsxs("div",{className:"config-admin-page container py-3",children:[s.jsx("h3",{className:"fw-bold mb-4 text-primary",children:"⚙️ Administración de Configuración"}),!Y&&s.jsx(ii,{}),(h||!D)&&n?s.jsx(qT,{}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[s.jsx("h5",{className:"fw-bold mb-3",children:"🔧 Configuración General"}),s.jsxs(wr,{className:"gy-3",children:[s.jsxs(Cn,{xs:12,md:5,children:[s.jsxs(se.Group,{children:[s.jsx(se.Label,{className:"fw-semibold",children:"📁 Carpeta Principal"}),s.jsx(se.Control,{type:"text",value:a?.CARPETA_PRINCIPAL||"",readOnly:!0,plaintext:!0}),s.jsxs(se.Text,{muted:!0,children:[s.jsxs("p",{children:["Versión Backend: ",s.jsx("span",{className:"version-backend",children:`${u}`})]}),s.jsxs("p",{children:["Versión FrontEnd: ",s.jsx("span",{className:"version-frontEnd",children:_})]})]})]}),s.jsx(Oe,{variant:"danger",className:"btn-CAP-inicializarproyecto",onClick:()=>z(!0),disabled:le,children:le?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm"})," Procesando..."]}):"⚠️ Reinicializar Proyecto"})]}),s.jsxs(Cn,{xs:12,md:5,children:[s.jsxs(se.Group,{children:[s.jsx(se.Label,{className:"fw-semibold",children:"📦 Tamaño máximo permitido 45 (MB)"}),s.jsx(se.Control,{type:"number",min:1,max:45,value:v,onChange:$})]}),s.jsxs(se.Group,{children:[s.jsx(se.Label,{className:"fw-semibold",children:"🔑 Expiración Token (Min)"}),s.jsx(se.Control,{type:"number",min:1,value:x,onChange:H=>j(H.target.value)}),s.jsx(se.Text,{muted:!0,children:"Duración de la sesión activa."})]})]}),s.jsx(Cn,{xs:12,md:2,children:s.jsxs("div",{className:"config-actions-panel",children:[s.jsx(Oe,{variant:"primary",className:"btn-backup-grande",onClick:ae,disabled:W,children:W?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm"}),s.jsx("span",{children:"Generando..."})]}):s.jsxs("div",{className:"btn-CAP-backup-iconText",children:[s.jsx("span",{className:"backup-ico bi bi-file-zip"}),s.jsx("span",{children:"Generar Backup"})]})}),s.jsx(Oe,{variant:"success",className:"mt-2",onClick:re,disabled:ee,children:ee?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm"})," Guardando..."]}):s.jsxs("div",{className:"btn-CAP-guardar-iconText",children:[s.jsx("span",{className:"icon-disk"}),s.jsx("span",{children:"Guardar Cambios"})]})})]})})]})]}),s.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[s.jsxs("div",{className:"d-flex justify-content-between align-items-center flex-wrap mb-3",children:[s.jsx("h5",{className:"fw-bold mb-2 mb-md-0",children:"🧩 Tipos de archivo permitidos"}),s.jsxs(JC,{style:{maxWidth:260},children:[s.jsx(se.Control,{type:"text",placeholder:"Ej: pdf",value:O,onChange:H=>S(H.target.value)}),s.jsx(Oe,{onClick:oe,children:"➕"})]})]}),s.jsxs(gi,{bordered:!0,hover:!0,responsive:!0,className:"small shadow-inner-sm",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{children:"Extensión"}),s.jsx("th",{className:"text-center",children:"Acciones"})]})}),s.jsxs("tbody",{children:[N.map((H,ue)=>s.jsxs("tr",{children:[s.jsx("td",{className:"fw-semibold",children:H}),s.jsx("td",{className:"text-center",children:s.jsx(Oe,{size:"sm",variant:"outline-danger",onClick:()=>V(H),children:"🗑️ Eliminar"})})]},ue)),N.length===0&&s.jsx("tr",{children:s.jsx("td",{colSpan:2,className:"text-center text-muted py-3",children:"No hay extensiones configuradas."})})]})]})]})]}),s.jsx(va,{show:k,onHide:()=>E(!1),title:"Eliminar tipo de archivo",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar ",s.jsx("strong",{children:T}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:A}),s.jsx(qk,{show:B,onHide:()=>z(!1),onConfirm:async(H,ue)=>{if(H==="INICIALIZAR"){ie(!0);try{const fe=await g(H,ue);console.log("reinicialización del sistema",fe.mensaje,fe.ok)}finally{ie(!1),z(!1)}}},loading:h}),s.jsx(xn,{show:ee||W||le})]}):s.jsx(ii,{})};function GT(){const[n,a]=m.useState("usuarios");return s.jsxs(Po,{fluid:!0,className:"p-3",children:[s.jsx(wr,{children:s.jsx(Cn,{children:s.jsx("h3",{className:"mb-4 text-center fw-bold",children:"⚙️ Panel de Administración"})})}),s.jsx(wr,{children:s.jsx(Cn,{children:s.jsxs(xm,{activeKey:n,onSelect:o=>a(o),id:"admin-tabs",className:"mb-3",justify:!0,mountOnEnter:!0,unmountOnExit:!0,children:[s.jsx(jo,{eventKey:"usuarios",title:"👥 Usuarios",children:s.jsx(PT,{isFocused:n==="usuarios"})}),s.jsx(jo,{eventKey:"roles",title:"🧩 Roles",children:s.jsx($T,{isFocused:n==="roles"})}),s.jsx(jo,{eventKey:"config",title:"⚙️ Configuración",children:s.jsx(JT,{isFocused:n==="config"})}),s.jsx(jo,{eventKey:"logs",title:"📜 Logs",children:s.jsx(HT,{isFocused:n==="logs"})})]})})})]})}function Qs({children:n}){const{authenticated:a,loading:o}=Si(),l=In();return o?null:a?n:s.jsx(CN,{to:"/",replace:!0,state:{from:l}})}function FT(){const[n,a]=m.useState(!1);return m.useEffect(()=>{const o=()=>a(!0);return window.addEventListener("backend:open-config",o),()=>{window.removeEventListener("backend:open-config",o)}},[]),s.jsxs(s.Fragment,{children:[s.jsx(Zk,{onOpenBackend:()=>a(!0)}),s.jsx(Kk,{show:n,onHide:()=>a(!1)}),s.jsx(Po,{className:"mt-4",children:s.jsxs(ON,{children:[s.jsx(fn,{path:"/",element:s.jsx(eT,{})}),s.jsx(fn,{path:"/productos",element:s.jsx(Qs,{children:s.jsx(oT,{})})}),s.jsx(fn,{path:"/datos-tributarios",element:s.jsx(Qs,{children:s.jsx(iT,{})})}),s.jsx(fn,{path:"/contador",element:s.jsx(Qs,{children:s.jsx(cT,{})})}),s.jsx(fn,{path:"/facturas",element:s.jsx(Qs,{children:s.jsx(fT,{})})}),s.jsx(fn,{path:"/admin",element:s.jsx(Qs,{children:s.jsx(GT,{})})}),s.jsx(fn,{path:"/privacidad",element:s.jsx(mT,{})}),s.jsx(fn,{path:"/terminos",element:s.jsx(pT,{})}),s.jsx(fn,{path:"/acerca-de",element:s.jsx(hT,{})}),s.jsx(fn,{path:"/donaciones",element:s.jsx(vT,{})}),s.jsx(fn,{path:"/backend-setup",element:s.jsx(UT,{})})]})}),s.jsx(Qk,{}),s.jsx(Wk,{})]})}const VT="modulepreload",YT=function(n){return"/appdeclaracion/"+n},Pb={},XT=function(a,o,l){let u=Promise.resolve();if(o&&o.length>0){let v=function(b){return Promise.all(b.map(x=>Promise.resolve(x).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};var p=v;document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),h=g?.nonce||g?.getAttribute("nonce");u=v(o.map(b=>{if(b=YT(b),b in Pb)return;Pb[b]=!0;const x=b.endsWith(".css"),j=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${b}"]${j}`))return;const N=document.createElement("link");if(N.rel=x?"stylesheet":VT,x||(N.as="script"),N.crossOrigin="",N.href=b,h&&N.setAttribute("nonce",h),document.head.appendChild(N),x)return new Promise((C,O)=>{N.addEventListener("load",C),N.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${b}`)))})}))}function d(g){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=g,window.dispatchEvent(h),!h.defaultPrevented)throw g}return u.then(g=>{for(const h of g||[])h.status==="rejected"&&d(h.reason);return a().catch(d)})};function ZT(n={}){const{immediate:a=!1,onNeedRefresh:o,onOfflineReady:l,onRegistered:u,onRegisteredSW:d,onRegisterError:p}=n;let g,h;const v=async(x=!0)=>{await h};async function b(){if("serviceWorker"in navigator){if(g=await XT(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:x}},[]).then(({Workbox:x})=>new x("/appdeclaracion/sw.js",{scope:"/appdeclaracion/",type:"classic"})).catch(x=>{p?.(x)}),!g)return;g.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),g.addEventListener("installed",x=>{x.isUpdate||l?.()}),g.register({immediate:a}).then(x=>{d?d("/appdeclaracion/sw.js",x):u?.(x)}).catch(x=>{p?.(x)})}}return h=b(),v}ZT({immediate:!0});BS.createRoot(document.getElementById("root")).render(s.jsx(Fe.StrictMode,{children:s.jsx(KN,{children:s.jsx(PA,{children:s.jsx(cE,{children:s.jsx(Tk,{children:s.jsx(Dk,{children:s.jsx(Rk,{children:s.jsx(Lk,{children:s.jsx(Hk,{children:s.jsx(FT,{})})})})})})})})})}));
