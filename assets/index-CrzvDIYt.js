(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}})();function $o(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qd={exports:{}},Ks={};var Vv;function iE(){if(Vv)return Ks;Vv=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(l,c,d){var p=null;if(d!==void 0&&(p=""+d),c.key!==void 0&&(p=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:n,type:l,key:p,ref:c!==void 0?c:null,props:d}}return Ks.Fragment=a,Ks.jsx=o,Ks.jsxs=o,Ks}var Yv;function lE(){return Yv||(Yv=1,Qd.exports=iE()),Qd.exports}var i=lE(),Wd={exports:{}},ye={};var Xv;function cE(){if(Xv)return ye;Xv=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),w=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function R(O,q,ae){this.props=O,this.context=q,this.refs=S,this.updater=ae||N}R.prototype.isReactComponent={},R.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},R.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function C(){}C.prototype=R.prototype;function T(O,q,ae){this.props=O,this.context=q,this.refs=S,this.updater=ae||N}var _=T.prototype=new C;_.constructor=T,A(_,R.prototype),_.isPureReactComponent=!0;var U=Array.isArray;function z(){}var L={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function X(O,q,ae){var P=ae.ref;return{$$typeof:n,type:O,key:q,ref:P!==void 0?P:null,props:ae}}function te(O,q){return X(O.type,q,O.props)}function ne(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function se(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return q[ae]})}var ie=/\/+/g;function W(O,q){return typeof O=="object"&&O!==null&&O.key!=null?se(""+O.key):q.toString(36)}function Z(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(z,z):(O.status="pending",O.then(function(q){O.status==="pending"&&(O.status="fulfilled",O.value=q)},function(q){O.status==="pending"&&(O.status="rejected",O.reason=q)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function k(O,q,ae,P,ce){var pe=typeof O;(pe==="undefined"||pe==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(pe){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case n:case a:xe=!0;break;case y:return xe=O._init,k(xe(O._payload),q,ae,P,ce)}}if(xe)return ce=ce(O),xe=P===""?"."+W(O,0):P,U(ce)?(ae="",xe!=null&&(ae=xe.replace(ie,"$&/")+"/"),k(ce,q,ae,"",function(jt){return jt})):ce!=null&&(ne(ce)&&(ce=te(ce,ae+(ce.key==null||O&&O.key===ce.key?"":(""+ce.key).replace(ie,"$&/")+"/")+xe)),q.push(ce)),1;xe=0;var Me=P===""?".":P+":";if(U(O))for(var je=0;je<O.length;je++)P=O[je],pe=Me+W(P,je),xe+=k(P,q,ae,pe,ce);else if(je=E(O),typeof je=="function")for(O=je.call(O),je=0;!(P=O.next()).done;)P=P.value,pe=Me+W(P,je++),xe+=k(P,q,ae,pe,ce);else if(pe==="object"){if(typeof O.then=="function")return k(Z(O),q,ae,P,ce);throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return xe}function F(O,q,ae){if(O==null)return O;var P=[],ce=0;return k(O,P,"","",function(pe){return q.call(ae,pe,ce++)}),P}function re(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var V=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},le={map:F,forEach:function(O,q,ae){F(O,function(){q.apply(this,arguments)},ae)},count:function(O){var q=0;return F(O,function(){q++}),q},toArray:function(O){return F(O,function(q){return q})||[]},only:function(O){if(!ne(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ye.Activity=x,ye.Children=le,ye.Component=R,ye.Fragment=o,ye.Profiler=c,ye.PureComponent=T,ye.StrictMode=l,ye.Suspense=h,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ye.__COMPILER_RUNTIME={__proto__:null,c:function(O){return L.H.useMemoCache(O)}},ye.cache=function(O){return function(){return O.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(O,q,ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var P=A({},O.props),ce=O.key;if(q!=null)for(pe in q.key!==void 0&&(ce=""+q.key),q)!B.call(q,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&q.ref===void 0||(P[pe]=q[pe]);var pe=arguments.length-2;if(pe===1)P.children=ae;else if(1<pe){for(var xe=Array(pe),Me=0;Me<pe;Me++)xe[Me]=arguments[Me+2];P.children=xe}return X(O.type,ce,P)},ye.createContext=function(O){return O={$$typeof:p,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:d,_context:O},O},ye.createElement=function(O,q,ae){var P,ce={},pe=null;if(q!=null)for(P in q.key!==void 0&&(pe=""+q.key),q)B.call(q,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(ce[P]=q[P]);var xe=arguments.length-2;if(xe===1)ce.children=ae;else if(1<xe){for(var Me=Array(xe),je=0;je<xe;je++)Me[je]=arguments[je+2];ce.children=Me}if(O&&O.defaultProps)for(P in xe=O.defaultProps,xe)ce[P]===void 0&&(ce[P]=xe[P]);return X(O,pe,ce)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(O){return{$$typeof:g,render:O}},ye.isValidElement=ne,ye.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:re}},ye.memo=function(O,q){return{$$typeof:v,type:O,compare:q===void 0?null:q}},ye.startTransition=function(O){var q=L.T,ae={};L.T=ae;try{var P=O(),ce=L.S;ce!==null&&ce(ae,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(z,V)}catch(pe){V(pe)}finally{q!==null&&ae.types!==null&&(q.types=ae.types),L.T=q}},ye.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ye.use=function(O){return L.H.use(O)},ye.useActionState=function(O,q,ae){return L.H.useActionState(O,q,ae)},ye.useCallback=function(O,q){return L.H.useCallback(O,q)},ye.useContext=function(O){return L.H.useContext(O)},ye.useDebugValue=function(){},ye.useDeferredValue=function(O,q){return L.H.useDeferredValue(O,q)},ye.useEffect=function(O,q){return L.H.useEffect(O,q)},ye.useEffectEvent=function(O){return L.H.useEffectEvent(O)},ye.useId=function(){return L.H.useId()},ye.useImperativeHandle=function(O,q,ae){return L.H.useImperativeHandle(O,q,ae)},ye.useInsertionEffect=function(O,q){return L.H.useInsertionEffect(O,q)},ye.useLayoutEffect=function(O,q){return L.H.useLayoutEffect(O,q)},ye.useMemo=function(O,q){return L.H.useMemo(O,q)},ye.useOptimistic=function(O,q){return L.H.useOptimistic(O,q)},ye.useReducer=function(O,q,ae){return L.H.useReducer(O,q,ae)},ye.useRef=function(O){return L.H.useRef(O)},ye.useState=function(O){return L.H.useState(O)},ye.useSyncExternalStore=function(O,q,ae){return L.H.useSyncExternalStore(O,q,ae)},ye.useTransition=function(){return L.H.useTransition()},ye.version="19.2.7",ye}var Zv;function Yf(){return Zv||(Zv=1,Wd.exports=cE()),Wd.exports}var m=Yf();const Xe=$o(m);var ef={exports:{}},Qs={},tf={exports:{}},nf={};var Kv;function uE(){return Kv||(Kv=1,(function(n){function a(k,F){var re=k.length;k.push(F);e:for(;0<re;){var V=re-1>>>1,le=k[V];if(0<c(le,F))k[V]=F,k[re]=le,re=V;else break e}}function o(k){return k.length===0?null:k[0]}function l(k){if(k.length===0)return null;var F=k[0],re=k.pop();if(re!==F){k[0]=re;e:for(var V=0,le=k.length,O=le>>>1;V<O;){var q=2*(V+1)-1,ae=k[q],P=q+1,ce=k[P];if(0>c(ae,re))P<le&&0>c(ce,ae)?(k[V]=ce,k[P]=re,V=P):(k[V]=ae,k[q]=re,V=q);else if(P<le&&0>c(ce,re))k[V]=ce,k[P]=re,V=P;else break e}}return F}function c(k,F){var re=k.sortIndex-F.sortIndex;return re!==0?re:k.id-F.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var p=Date,g=p.now();n.unstable_now=function(){return p.now()-g}}var h=[],v=[],y=1,x=null,w=3,E=!1,N=!1,A=!1,S=!1,R=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function _(k){for(var F=o(v);F!==null;){if(F.callback===null)l(v);else if(F.startTime<=k)l(v),F.sortIndex=F.expirationTime,a(h,F);else break;F=o(v)}}function U(k){if(A=!1,_(k),!N)if(o(h)!==null)N=!0,z||(z=!0,se());else{var F=o(v);F!==null&&Z(U,F.startTime-k)}}var z=!1,L=-1,B=5,X=-1;function te(){return S?!0:!(n.unstable_now()-X<B)}function ne(){if(S=!1,z){var k=n.unstable_now();X=k;var F=!0;try{e:{N=!1,A&&(A=!1,C(L),L=-1),E=!0;var re=w;try{t:{for(_(k),x=o(h);x!==null&&!(x.expirationTime>k&&te());){var V=x.callback;if(typeof V=="function"){x.callback=null,w=x.priorityLevel;var le=V(x.expirationTime<=k);if(k=n.unstable_now(),typeof le=="function"){x.callback=le,_(k),F=!0;break t}x===o(h)&&l(h),_(k)}else l(h);x=o(h)}if(x!==null)F=!0;else{var O=o(v);O!==null&&Z(U,O.startTime-k),F=!1}}break e}finally{x=null,w=re,E=!1}F=void 0}}finally{F?se():z=!1}}}var se;if(typeof T=="function")se=function(){T(ne)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,W=ie.port2;ie.port1.onmessage=ne,se=function(){W.postMessage(null)}}else se=function(){R(ne,0)};function Z(k,F){L=R(function(){k(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(k){k.callback=null},n.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<k?Math.floor(1e3/k):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(k){switch(w){case 1:case 2:case 3:var F=3;break;default:F=w}var re=w;w=F;try{return k()}finally{w=re}},n.unstable_requestPaint=function(){S=!0},n.unstable_runWithPriority=function(k,F){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=w;w=k;try{return F()}finally{w=re}},n.unstable_scheduleCallback=function(k,F,re){var V=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?V+re:V):re=V,k){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=re+le,k={id:y++,callback:F,priorityLevel:k,startTime:re,expirationTime:le,sortIndex:-1},re>V?(k.sortIndex=re,a(v,k),o(h)===null&&k===o(v)&&(A?(C(L),L=-1):A=!0,Z(U,re-V))):(k.sortIndex=le,a(h,k),N||E||(N=!0,z||(z=!0,se()))),k},n.unstable_shouldYield=te,n.unstable_wrapCallback=function(k){var F=w;return function(){var re=w;w=F;try{return k.apply(this,arguments)}finally{w=re}}}})(nf)),nf}var Qv;function dE(){return Qv||(Qv=1,tf.exports=uE()),tf.exports}var af={exports:{}},wt={};var Wv;function fE(){if(Wv)return wt;Wv=1;var n=Yf();function a(h){var v="https://react.dev/errors/"+h;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)v+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(h,v,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:h,containerInfo:v,implementation:y}}var p=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(h,v){if(h==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,wt.createPortal=function(h,v){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(a(299));return d(h,v,null,y)},wt.flushSync=function(h){var v=p.T,y=l.p;try{if(p.T=null,l.p=2,h)return h()}finally{p.T=v,l.p=y,l.d.f()}},wt.preconnect=function(h,v){typeof h=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,l.d.C(h,v))},wt.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},wt.preinit=function(h,v){if(typeof h=="string"&&v&&typeof v.as=="string"){var y=v.as,x=g(y,v.crossOrigin),w=typeof v.integrity=="string"?v.integrity:void 0,E=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;y==="style"?l.d.S(h,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:E}):y==="script"&&l.d.X(h,{crossOrigin:x,integrity:w,fetchPriority:E,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},wt.preinitModule=function(h,v){if(typeof h=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var y=g(v.as,v.crossOrigin);l.d.M(h,{crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&l.d.M(h)},wt.preload=function(h,v){if(typeof h=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var y=v.as,x=g(y,v.crossOrigin);l.d.L(h,y,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},wt.preloadModule=function(h,v){if(typeof h=="string")if(v){var y=g(v.as,v.crossOrigin);l.d.m(h,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else l.d.m(h)},wt.requestFormReset=function(h){l.d.r(h)},wt.unstable_batchedUpdates=function(h,v){return h(v)},wt.useFormState=function(h,v,y){return p.H.useFormState(h,v,y)},wt.useFormStatus=function(){return p.H.useHostTransitionStatus()},wt.version="19.2.7",wt}var eb;function uy(){if(eb)return af.exports;eb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),af.exports=fE(),af.exports}var tb;function mE(){if(tb)return Qs;tb=1;var n=dE(),a=Yf(),o=uy();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(d(e)!==e)throw Error(l(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,s=t;;){var u=r.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){r=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===r)return h(u),e;if(f===s)return h(u),t;f=f.sibling}throw Error(l(188))}if(r.return!==s.return)r=u,s=f;else{for(var b=!1,j=u.child;j;){if(j===r){b=!0,r=u,s=f;break}if(j===s){b=!0,s=u,r=f;break}j=j.sibling}if(!b){for(j=f.child;j;){if(j===r){b=!0,r=f,s=u;break}if(j===s){b=!0,s=f,r=u;break}j=j.sibling}if(!b)throw Error(l(189))}}if(r.alternate!==s)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,w=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),T=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case R:return"Profiler";case S:return"StrictMode";case U:return"Suspense";case z:return"SuspenseList";case X:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case T:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case _:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case B:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}var Z=Array.isArray,k=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},V=[],le=-1;function O(e){return{current:e}}function q(e){0>le||(e.current=V[le],V[le]=null,le--)}function ae(e,t){le++,V[le]=e.current,e.current=t}var P=O(null),ce=O(null),pe=O(null),xe=O(null);function Me(e,t){switch(ae(pe,t),ae(ce,e),ae(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gv(t),e=vv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(P),ae(P,e)}function je(){q(P),q(ce),q(pe)}function jt(e){e.memoizedState!==null&&ae(xe,e);var t=P.current,r=vv(t,e.type);t!==r&&(ae(ce,e),ae(P,r))}function It(e){ce.current===e&&(q(P),q(ce)),xe.current===e&&(q(xe),Vs._currentValue=re)}var nn,Cn;function xt(e){if(nn===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);nn=t&&t[1]||"",Cn=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nn+e+Cn}var Be=!1;function An(e,t){if(!e||Be)return"";Be=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(G){var J=G}Reflect.construct(e,[],ee)}else{try{ee.call()}catch(G){J=G}e.call(ee.prototype)}}else{try{throw Error()}catch(G){J=G}(ee=e())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(G){if(G&&J&&typeof G.stack=="string")return[G.stack,J.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),b=f[0],j=f[1];if(b&&j){var D=b.split(`
`),H=j.split(`
`);for(u=s=0;s<D.length&&!D[s].includes("DetermineComponentFrameRoot");)s++;for(;u<H.length&&!H[u].includes("DetermineComponentFrameRoot");)u++;if(s===D.length||u===H.length)for(s=D.length-1,u=H.length-1;1<=s&&0<=u&&D[s]!==H[u];)u--;for(;1<=s&&0<=u;s--,u--)if(D[s]!==H[u]){if(s!==1||u!==1)do if(s--,u--,0>u||D[s]!==H[u]){var K=`
`+D[s].replace(" at new "," at ");return e.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",e.displayName)),K}while(1<=s&&0<=u);break}}}finally{Be=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?xt(r):""}function zn(e,t){switch(e.tag){case 26:case 27:case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return e.child!==t&&t!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return An(e.type,!1);case 11:return An(e.type.render,!1);case 1:return An(e.type,!0);case 31:return xt("Activity");default:return""}}function Ur(e){try{var t="",r=null;do t+=zn(e,r),r=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var or=Object.prototype.hasOwnProperty,Pt=n.unstable_scheduleCallback,Mn=n.unstable_cancelCallback,Ir=n.unstable_shouldYield,Pr=n.unstable_requestPaint,rt=n.unstable_now,$r=n.unstable_getCurrentPriorityLevel,Ce=n.unstable_ImmediatePriority,an=n.unstable_UserBlockingPriority,Bn=n.unstable_NormalPriority,H0=n.unstable_LowPriority,Zm=n.unstable_IdlePriority,J0=n.log,q0=n.unstable_setDisableYieldValue,os=null,$t=null;function Ca(e){if(typeof J0=="function"&&q0(e),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(os,e)}catch{}}var Ht=Math.clz32?Math.clz32:V0,G0=Math.log,F0=Math.LN2;function V0(e){return e>>>=0,e===0?32:31-(G0(e)/F0|0)|0}var ki=256,Ti=262144,Ri=4194304;function sr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Di(e,t,r){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var j=s&134217727;return j!==0?(s=j&~f,s!==0?u=sr(s):(b&=j,b!==0?u=sr(b):r||(r=j&~e,r!==0&&(u=sr(r))))):(j=s&~f,j!==0?u=sr(j):b!==0?u=sr(b):r||(r=s&~e,r!==0&&(u=sr(r)))),u===0?0:t!==0&&t!==u&&(t&f)===0&&(f=u&-u,r=t&-t,f>=r||f===32&&(r&4194048)!==0)?t:u}function ss(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Y0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Km(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function Pc(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function is(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function X0(e,t,r,s,u,f){var b=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var j=e.entanglements,D=e.expirationTimes,H=e.hiddenUpdates;for(r=b&~r;0<r;){var K=31-Ht(r),ee=1<<K;j[K]=0,D[K]=-1;var J=H[K];if(J!==null)for(H[K]=null,K=0;K<J.length;K++){var G=J[K];G!==null&&(G.lane&=-536870913)}r&=~ee}s!==0&&Qm(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(b&~t))}function Qm(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-Ht(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|r&261930}function Wm(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Ht(r),u=1<<s;u&t|e[s]&t&&(e[s]|=t),r&=~u}}function ep(e,t){var r=t&-t;return r=(r&42)!==0?1:$c(r),(r&(e.suspendedLanes|t))!==0?0:r}function $c(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tp(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Pv(e.type))}function np(e,t){var r=F.p;try{return F.p=e,t()}finally{F.p=r}}var Aa=Math.random().toString(36).slice(2),mt="__reactFiber$"+Aa,kt="__reactProps$"+Aa,Hr="__reactContainer$"+Aa,Jc="__reactEvents$"+Aa,Z0="__reactListeners$"+Aa,K0="__reactHandles$"+Aa,ap="__reactResources$"+Aa,ls="__reactMarker$"+Aa;function qc(e){delete e[mt],delete e[kt],delete e[Jc],delete e[Z0],delete e[K0]}function Jr(e){var t=e[mt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Hr]||r[mt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ev(e);e!==null;){if(r=e[mt])return r;e=Ev(e)}return t}e=r,r=e.parentNode}return null}function qr(e){if(e=e[mt]||e[Hr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function cs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Gr(e){var t=e[ap];return t||(t=e[ap]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[ls]=!0}var rp=new Set,op={};function ir(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(op[e]=t,e=0;e<t.length;e++)rp.add(t[e])}var Q0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sp={},ip={};function W0(e){return or.call(ip,e)?!0:or.call(sp,e)?!1:Q0.test(e)?ip[e]=!0:(sp[e]=!0,!1)}function Li(e,t,r){if(W0(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function _i(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function Xn(e,t,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+s)}}function rn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function eS(e,t,r){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(b){r=""+b,f.call(this,b)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gc(e){if(!e._valueTracker){var t=lp(e)?"checked":"value";e._valueTracker=eS(e,t,""+e[t])}}function cp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=lp(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var tS=/[\n"\\]/g;function on(e){return e.replace(tS,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fc(e,t,r,s,u,f,b,j){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),t!=null?b==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+rn(t)):e.value!==""+rn(t)&&(e.value=""+rn(t)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),t!=null?Vc(e,b,rn(t)):r!=null?Vc(e,b,rn(r)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"?e.name=""+rn(j):e.removeAttribute("name")}function up(e,t,r,s,u,f,b,j){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||t!=null)){Gc(e);return}r=r!=null?""+rn(r):"",t=t!=null?""+rn(t):r,j||t===e.value||(e.value=t),e.defaultValue=t}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=j?e.checked:!!s,e.defaultChecked=!!s,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Gc(e)}function Vc(e,t,r){t==="number"&&zi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Vr(e,t,r,s){if(e=e.options,t){t={};for(var u=0;u<r.length;u++)t["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=t.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&s&&(e[r].defaultSelected=!0)}else{for(r=""+rn(r),t=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function dp(e,t,r){if(t!=null&&(t=""+rn(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+rn(r):""}function fp(e,t,r,s){if(t==null){if(s!=null){if(r!=null)throw Error(l(92));if(Z(s)){if(1<s.length)throw Error(l(93));s=s[0]}r=s}r==null&&(r=""),t=r}r=rn(t),e.defaultValue=r,s=e.textContent,s===r&&s!==""&&s!==null&&(e.value=s),Gc(e)}function Yr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var nS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mp(e,t,r){var s=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,r):typeof r!="number"||r===0||nS.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function pp(e,t,r){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,r!=null){for(var s in r)!r.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in t)s=t[u],t.hasOwnProperty(u)&&r[u]!==s&&mp(e,u,s)}else for(var f in t)t.hasOwnProperty(f)&&mp(e,f,t[f])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mi(e){return rS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zn(){}var Xc=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xr=null,Zr=null;function hp(e){var t=qr(e);if(t&&(e=t.stateNode)){var r=e[kt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fc(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+on(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var u=s[kt]||null;if(!u)throw Error(l(90));Fc(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<r.length;t++)s=r[t],s.form===e.form&&cp(s)}break e;case"textarea":dp(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&Vr(e,!!r.multiple,t,!1)}}}var Kc=!1;function gp(e,t,r){if(Kc)return e(t,r);Kc=!0;try{var s=e(t);return s}finally{if(Kc=!1,(Xr!==null||Zr!==null)&&(jl(),Xr&&(t=Xr,e=Zr,Zr=Xr=null,hp(t),e)))for(t=0;t<e.length;t++)hp(e[t])}}function us(e,t){var r=e.stateNode;if(r===null)return null;var s=r[kt]||null;if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(Kn)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{Qc=!1}var Oa=null,Wc=null,Bi=null;function vp(){if(Bi)return Bi;var e,t=Wc,r=t.length,s,u="value"in Oa?Oa.value:Oa.textContent,f=u.length;for(e=0;e<r&&t[e]===u[e];e++);var b=r-e;for(s=1;s<=b&&t[r-s]===u[f-s];s++);return Bi=u.slice(e,1<s?1-s:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function bp(){return!1}function Tt(e){function t(r,s,u,f,b){this._reactName=r,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(r=e[j],this[j]=r?r(f):f[j]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ii:bp,this.isPropagationStopped=bp,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=Tt(lr),fs=x({},lr,{view:0,detail:0}),oS=Tt(fs),eu,tu,ms,$i=x({},fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ms&&(ms&&e.type==="mousemove"?(eu=e.screenX-ms.screenX,tu=e.screenY-ms.screenY):tu=eu=0,ms=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),yp=Tt($i),sS=x({},$i,{dataTransfer:0}),iS=Tt(sS),lS=x({},fs,{relatedTarget:0}),nu=Tt(lS),cS=x({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),uS=Tt(cS),dS=x({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fS=Tt(dS),mS=x({},lr,{data:0}),xp=Tt(mS),pS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gS[e])?!!t[e]:!1}function au(){return vS}var bS=x({},fs,{key:function(e){if(e.key){var t=pS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yS=Tt(bS),xS=x({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Tt(xS),wS=x({},fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),SS=Tt(wS),jS=x({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ES=Tt(jS),NS=x({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),CS=Tt(NS),AS=x({},lr,{newState:0,oldState:0}),OS=Tt(AS),kS=[9,13,27,32],ru=Kn&&"CompositionEvent"in window,ps=null;Kn&&"documentMode"in document&&(ps=document.documentMode);var TS=Kn&&"TextEvent"in window&&!ps,Sp=Kn&&(!ru||ps&&8<ps&&11>=ps),jp=" ",Ep=!1;function Np(e,t){switch(e){case"keyup":return kS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kr=!1;function RS(e,t){switch(e){case"compositionend":return Cp(t);case"keypress":return t.which!==32?null:(Ep=!0,jp);case"textInput":return e=t.data,e===jp&&Ep?null:e;default:return null}}function DS(e,t){if(Kr)return e==="compositionend"||!ru&&Np(e,t)?(e=vp(),Bi=Wc=Oa=null,Kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sp&&t.locale!=="ko"?null:t.data;default:return null}}var LS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!LS[e.type]:t==="textarea"}function Op(e,t,r,s){Xr?Zr?Zr.push(s):Zr=[s]:Xr=s,t=Tl(t,"onChange"),0<t.length&&(r=new Pi("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var hs=null,gs=null;function _S(e){uv(e,0)}function Hi(e){var t=cs(e);if(cp(t))return e}function kp(e,t){if(e==="change")return t}var Tp=!1;if(Kn){var ou;if(Kn){var su="oninput"in document;if(!su){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),su=typeof Rp.oninput=="function"}ou=su}else ou=!1;Tp=ou&&(!document.documentMode||9<document.documentMode)}function Dp(){hs&&(hs.detachEvent("onpropertychange",Lp),gs=hs=null)}function Lp(e){if(e.propertyName==="value"&&Hi(gs)){var t=[];Op(t,gs,e,Zc(e)),gp(_S,t)}}function zS(e,t,r){e==="focusin"?(Dp(),hs=t,gs=r,hs.attachEvent("onpropertychange",Lp)):e==="focusout"&&Dp()}function MS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(gs)}function BS(e,t){if(e==="click")return Hi(t)}function US(e,t){if(e==="input"||e==="change")return Hi(t)}function IS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:IS;function vs(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var u=r[s];if(!or.call(t,u)||!Jt(e[u],t[u]))return!1}return!0}function _p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zp(e,t){var r=_p(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=_p(r)}}function Mp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zi(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=zi(e.document)}return t}function iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var PS=Kn&&"documentMode"in document&&11>=document.documentMode,Qr=null,lu=null,bs=null,cu=!1;function Up(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;cu||Qr==null||Qr!==zi(s)||(s=Qr,"selectionStart"in s&&iu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),bs&&vs(bs,s)||(bs=s,s=Tl(lu,"onSelect"),0<s.length&&(t=new Pi("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Qr)))}function cr(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Wr={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionrun:cr("Transition","TransitionRun"),transitionstart:cr("Transition","TransitionStart"),transitioncancel:cr("Transition","TransitionCancel"),transitionend:cr("Transition","TransitionEnd")},uu={},Ip={};Kn&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function ur(e){if(uu[e])return uu[e];if(!Wr[e])return e;var t=Wr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ip)return uu[e]=t[r];return e}var Pp=ur("animationend"),$p=ur("animationiteration"),Hp=ur("animationstart"),$S=ur("transitionrun"),HS=ur("transitionstart"),JS=ur("transitioncancel"),Jp=ur("transitionend"),qp=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function On(e,t){qp.set(e,t),ir(t,[e])}var Ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},sn=[],eo=0,fu=0;function qi(){for(var e=eo,t=fu=eo=0;t<e;){var r=sn[t];sn[t++]=null;var s=sn[t];sn[t++]=null;var u=sn[t];sn[t++]=null;var f=sn[t];if(sn[t++]=null,s!==null&&u!==null){var b=s.pending;b===null?u.next=u:(u.next=b.next,b.next=u),s.pending=u}f!==0&&Gp(r,u,f)}}function Gi(e,t,r,s){sn[eo++]=e,sn[eo++]=t,sn[eo++]=r,sn[eo++]=s,fu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function mu(e,t,r,s){return Gi(e,t,r,s),Fi(e)}function dr(e,t){return Gi(e,null,null,t),Fi(e)}function Gp(e,t,r){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r);for(var u=!1,f=e.return;f!==null;)f.childLanes|=r,s=f.alternate,s!==null&&(s.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&t!==null&&(u=31-Ht(r),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[t]:s.push(t),t.lane=r|536870912),f):null}function Fi(e){if(50<Ps)throw Ps=0,Sd=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var to={};function qS(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,r,s){return new qS(e,t,r,s)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qn(e,t){var r=e.alternate;return r===null?(r=qt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Fp(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vi(e,t,r,s,u,f){var b=0;if(s=e,typeof e=="function")pu(e)&&(b=1);else if(typeof e=="string")b=Xj(e,r,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case X:return e=qt(31,r,t,u),e.elementType=X,e.lanes=f,e;case A:return fr(r.children,u,f,t);case S:b=8,u|=24;break;case R:return e=qt(12,r,t,u|2),e.elementType=R,e.lanes=f,e;case U:return e=qt(13,r,t,u),e.elementType=U,e.lanes=f,e;case z:return e=qt(19,r,t,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case T:b=10;break e;case C:b=9;break e;case _:b=11;break e;case L:b=14;break e;case B:b=16,s=null;break e}b=29,r=Error(l(130,e===null?"null":typeof e,"")),s=null}return t=qt(b,r,t,u),t.elementType=e,t.type=s,t.lanes=f,t}function fr(e,t,r,s){return e=qt(7,e,s,t),e.lanes=r,e}function hu(e,t,r){return e=qt(6,e,null,t),e.lanes=r,e}function Vp(e){var t=qt(18,null,null,0);return t.stateNode=e,t}function gu(e,t,r){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Yp=new WeakMap;function ln(e,t){if(typeof e=="object"&&e!==null){var r=Yp.get(e);return r!==void 0?r:(t={value:e,source:t,stack:Ur(t)},Yp.set(e,t),t)}return{value:e,source:t,stack:Ur(t)}}var no=[],ao=0,Yi=null,ys=0,cn=[],un=0,ka=null,Un=1,In="";function Wn(e,t){no[ao++]=ys,no[ao++]=Yi,Yi=e,ys=t}function Xp(e,t,r){cn[un++]=Un,cn[un++]=In,cn[un++]=ka,ka=e;var s=Un;e=In;var u=32-Ht(s)-1;s&=~(1<<u),r+=1;var f=32-Ht(t)+u;if(30<f){var b=u-u%5;f=(s&(1<<b)-1).toString(32),s>>=b,u-=b,Un=1<<32-Ht(t)+u|r<<u|s,In=f+e}else Un=1<<f|r<<u|s,In=e}function vu(e){e.return!==null&&(Wn(e,1),Xp(e,1,0))}function bu(e){for(;e===Yi;)Yi=no[--ao],no[ao]=null,ys=no[--ao],no[ao]=null;for(;e===ka;)ka=cn[--un],cn[un]=null,In=cn[--un],cn[un]=null,Un=cn[--un],cn[un]=null}function Zp(e,t){cn[un++]=Un,cn[un++]=In,cn[un++]=ka,Un=t.id,In=t.overflow,ka=e}var pt=null,Fe=null,ke=!1,Ta=null,dn=!1,yu=Error(l(519));function Ra(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xs(ln(t,e)),yu}function Kp(e){var t=e.stateNode,r=e.type,s=e.memoizedProps;switch(t[mt]=e,t[kt]=s,r){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(r=0;r<Hs.length;r++)Ne(Hs[r],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":Ne("invalid",t),up(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ne("invalid",t);break;case"textarea":Ne("invalid",t),fp(t,s.value,s.defaultValue,s.children)}r=s.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||s.suppressHydrationWarning===!0||pv(t.textContent,r)?(s.popover!=null&&(Ne("beforetoggle",t),Ne("toggle",t)),s.onScroll!=null&&Ne("scroll",t),s.onScrollEnd!=null&&Ne("scrollend",t),s.onClick!=null&&(t.onclick=Zn),t=!0):t=!1,t||Ra(e,!0)}function Qp(e){for(pt=e.return;pt;)switch(pt.tag){case 5:case 31:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:pt=pt.return}}function ro(e){if(e!==pt)return!1;if(!ke)return Qp(e),ke=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Bd(e.type,e.memoizedProps)),r=!r),r&&Fe&&Ra(e),Qp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Fe=jv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Fe=jv(e)}else t===27?(t=Fe,Ga(e.type)?(e=Hd,Hd=null,Fe=e):Fe=t):Fe=pt?mn(e.stateNode.nextSibling):null;return!0}function mr(){Fe=pt=null,ke=!1}function xu(){var e=Ta;return e!==null&&(_t===null?_t=e:_t.push.apply(_t,e),Ta=null),e}function xs(e){Ta===null?Ta=[e]:Ta.push(e)}var wu=O(null),pr=null,ea=null;function Da(e,t,r){ae(wu,t._currentValue),t._currentValue=r}function ta(e){e._currentValue=wu.current,q(wu)}function Su(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function ju(e,t,r,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var b=u.child;f=f.firstContext;e:for(;f!==null;){var j=f;f=u;for(var D=0;D<t.length;D++)if(j.context===t[D]){f.lanes|=r,j=f.alternate,j!==null&&(j.lanes|=r),Su(f.return,r,e),s||(b=null);break e}f=j.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(l(341));b.lanes|=r,f=b.alternate,f!==null&&(f.lanes|=r),Su(b,r,e),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===e){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function oo(e,t,r,s){e=null;for(var u=t,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(l(387));if(b=b.memoizedProps,b!==null){var j=u.type;Jt(u.pendingProps.value,b.value)||(e!==null?e.push(j):e=[j])}}else if(u===xe.current){if(b=u.alternate,b===null)throw Error(l(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Vs):e=[Vs])}u=u.return}e!==null&&ju(t,e,r,s),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!Jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){pr=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return Wp(pr,e)}function Zi(e,t){return pr===null&&hr(e),Wp(e,t)}function Wp(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},ea===null){if(e===null)throw Error(l(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return r}var GS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},FS=n.unstable_scheduleCallback,VS=n.unstable_NormalPriority,ot={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new GS,data:new Map,refCount:0}}function ws(e){e.refCount--,e.refCount===0&&FS(VS,function(){e.controller.abort()})}var Ss=null,Nu=0,so=0,io=null;function YS(e,t){if(Ss===null){var r=Ss=[];Nu=0,so=Od(),io={status:"pending",value:void 0,then:function(s){r.push(s)}}}return Nu++,t.then(eh,eh),t}function eh(){if(--Nu===0&&Ss!==null){io!==null&&(io.status="fulfilled");var e=Ss;Ss=null,so=0,io=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function XS(e,t){var r=[],s={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var u=0;u<r.length;u++)(0,r[u])(t)},function(u){for(s.status="rejected",s.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),s}var th=k.S;k.S=function(e,t){Ug=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&YS(e,t),th!==null&&th(e,t)};var gr=O(null);function Cu(){var e=gr.current;return e!==null?e:Ge.pooledCache}function Ki(e,t){t===null?ae(gr,gr.current):ae(gr,t.pool)}function nh(){var e=Cu();return e===null?null:{parent:ot._currentValue,pool:e}}var lo=Error(l(460)),Au=Error(l(474)),Qi=Error(l(542)),Wi={then:function(){}};function ah(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rh(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(Zn,Zn),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sh(e),e;default:if(typeof t.status=="string")t.then(Zn,Zn);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=s}},function(s){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sh(e),e}throw br=t,lo}}function vr(e){try{var t=e._init;return t(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(br=r,lo):r}}var br=null;function oh(){if(br===null)throw Error(l(459));var e=br;return br=null,e}function sh(e){if(e===lo||e===Qi)throw Error(l(483))}var co=null,js=0;function el(e){var t=js;return js+=1,co===null&&(co=[]),rh(co,e,t)}function Es(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function tl(e,t){throw t.$$typeof===w?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ih(e){function t(I,M){if(e){var $=I.deletions;$===null?(I.deletions=[M],I.flags|=16):$.push(M)}}function r(I,M){if(!e)return null;for(;M!==null;)t(I,M),M=M.sibling;return null}function s(I){for(var M=new Map;I!==null;)I.key!==null?M.set(I.key,I):M.set(I.index,I),I=I.sibling;return M}function u(I,M){return I=Qn(I,M),I.index=0,I.sibling=null,I}function f(I,M,$){return I.index=$,e?($=I.alternate,$!==null?($=$.index,$<M?(I.flags|=67108866,M):$):(I.flags|=67108866,M)):(I.flags|=1048576,M)}function b(I){return e&&I.alternate===null&&(I.flags|=67108866),I}function j(I,M,$,Q){return M===null||M.tag!==6?(M=hu($,I.mode,Q),M.return=I,M):(M=u(M,$),M.return=I,M)}function D(I,M,$,Q){var ge=$.type;return ge===A?K(I,M,$.props.children,Q,$.key):M!==null&&(M.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===B&&vr(ge)===M.type)?(M=u(M,$.props),Es(M,$),M.return=I,M):(M=Vi($.type,$.key,$.props,null,I.mode,Q),Es(M,$),M.return=I,M)}function H(I,M,$,Q){return M===null||M.tag!==4||M.stateNode.containerInfo!==$.containerInfo||M.stateNode.implementation!==$.implementation?(M=gu($,I.mode,Q),M.return=I,M):(M=u(M,$.children||[]),M.return=I,M)}function K(I,M,$,Q,ge){return M===null||M.tag!==7?(M=fr($,I.mode,Q,ge),M.return=I,M):(M=u(M,$),M.return=I,M)}function ee(I,M,$){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=hu(""+M,I.mode,$),M.return=I,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case E:return $=Vi(M.type,M.key,M.props,null,I.mode,$),Es($,M),$.return=I,$;case N:return M=gu(M,I.mode,$),M.return=I,M;case B:return M=vr(M),ee(I,M,$)}if(Z(M)||se(M))return M=fr(M,I.mode,$,null),M.return=I,M;if(typeof M.then=="function")return ee(I,el(M),$);if(M.$$typeof===T)return ee(I,Zi(I,M),$);tl(I,M)}return null}function J(I,M,$,Q){var ge=M!==null?M.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ge!==null?null:j(I,M,""+$,Q);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===ge?D(I,M,$,Q):null;case N:return $.key===ge?H(I,M,$,Q):null;case B:return $=vr($),J(I,M,$,Q)}if(Z($)||se($))return ge!==null?null:K(I,M,$,Q,null);if(typeof $.then=="function")return J(I,M,el($),Q);if($.$$typeof===T)return J(I,M,Zi(I,$),Q);tl(I,$)}return null}function G(I,M,$,Q,ge){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return I=I.get($)||null,j(M,I,""+Q,ge);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return I=I.get(Q.key===null?$:Q.key)||null,D(M,I,Q,ge);case N:return I=I.get(Q.key===null?$:Q.key)||null,H(M,I,Q,ge);case B:return Q=vr(Q),G(I,M,$,Q,ge)}if(Z(Q)||se(Q))return I=I.get($)||null,K(M,I,Q,ge,null);if(typeof Q.then=="function")return G(I,M,$,el(Q),ge);if(Q.$$typeof===T)return G(I,M,$,Zi(M,Q),ge);tl(M,Q)}return null}function fe(I,M,$,Q){for(var ge=null,Re=null,me=M,Se=M=0,Oe=null;me!==null&&Se<$.length;Se++){me.index>Se?(Oe=me,me=null):Oe=me.sibling;var De=J(I,me,$[Se],Q);if(De===null){me===null&&(me=Oe);break}e&&me&&De.alternate===null&&t(I,me),M=f(De,M,Se),Re===null?ge=De:Re.sibling=De,Re=De,me=Oe}if(Se===$.length)return r(I,me),ke&&Wn(I,Se),ge;if(me===null){for(;Se<$.length;Se++)me=ee(I,$[Se],Q),me!==null&&(M=f(me,M,Se),Re===null?ge=me:Re.sibling=me,Re=me);return ke&&Wn(I,Se),ge}for(me=s(me);Se<$.length;Se++)Oe=G(me,I,Se,$[Se],Q),Oe!==null&&(e&&Oe.alternate!==null&&me.delete(Oe.key===null?Se:Oe.key),M=f(Oe,M,Se),Re===null?ge=Oe:Re.sibling=Oe,Re=Oe);return e&&me.forEach(function(Za){return t(I,Za)}),ke&&Wn(I,Se),ge}function ve(I,M,$,Q){if($==null)throw Error(l(151));for(var ge=null,Re=null,me=M,Se=M=0,Oe=null,De=$.next();me!==null&&!De.done;Se++,De=$.next()){me.index>Se?(Oe=me,me=null):Oe=me.sibling;var Za=J(I,me,De.value,Q);if(Za===null){me===null&&(me=Oe);break}e&&me&&Za.alternate===null&&t(I,me),M=f(Za,M,Se),Re===null?ge=Za:Re.sibling=Za,Re=Za,me=Oe}if(De.done)return r(I,me),ke&&Wn(I,Se),ge;if(me===null){for(;!De.done;Se++,De=$.next())De=ee(I,De.value,Q),De!==null&&(M=f(De,M,Se),Re===null?ge=De:Re.sibling=De,Re=De);return ke&&Wn(I,Se),ge}for(me=s(me);!De.done;Se++,De=$.next())De=G(me,I,Se,De.value,Q),De!==null&&(e&&De.alternate!==null&&me.delete(De.key===null?Se:De.key),M=f(De,M,Se),Re===null?ge=De:Re.sibling=De,Re=De);return e&&me.forEach(function(sE){return t(I,sE)}),ke&&Wn(I,Se),ge}function qe(I,M,$,Q){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:e:{for(var ge=$.key;M!==null;){if(M.key===ge){if(ge=$.type,ge===A){if(M.tag===7){r(I,M.sibling),Q=u(M,$.props.children),Q.return=I,I=Q;break e}}else if(M.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===B&&vr(ge)===M.type){r(I,M.sibling),Q=u(M,$.props),Es(Q,$),Q.return=I,I=Q;break e}r(I,M);break}else t(I,M);M=M.sibling}$.type===A?(Q=fr($.props.children,I.mode,Q,$.key),Q.return=I,I=Q):(Q=Vi($.type,$.key,$.props,null,I.mode,Q),Es(Q,$),Q.return=I,I=Q)}return b(I);case N:e:{for(ge=$.key;M!==null;){if(M.key===ge)if(M.tag===4&&M.stateNode.containerInfo===$.containerInfo&&M.stateNode.implementation===$.implementation){r(I,M.sibling),Q=u(M,$.children||[]),Q.return=I,I=Q;break e}else{r(I,M);break}else t(I,M);M=M.sibling}Q=gu($,I.mode,Q),Q.return=I,I=Q}return b(I);case B:return $=vr($),qe(I,M,$,Q)}if(Z($))return fe(I,M,$,Q);if(se($)){if(ge=se($),typeof ge!="function")throw Error(l(150));return $=ge.call($),ve(I,M,$,Q)}if(typeof $.then=="function")return qe(I,M,el($),Q);if($.$$typeof===T)return qe(I,M,Zi(I,$),Q);tl(I,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,M!==null&&M.tag===6?(r(I,M.sibling),Q=u(M,$),Q.return=I,I=Q):(r(I,M),Q=hu($,I.mode,Q),Q.return=I,I=Q),b(I)):r(I,M)}return function(I,M,$,Q){try{js=0;var ge=qe(I,M,$,Q);return co=null,ge}catch(me){if(me===lo||me===Qi)throw me;var Re=qt(29,me,null,I.mode);return Re.lanes=Q,Re.return=I,Re}}}var yr=ih(!0),lh=ih(!1),La=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var u=s.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),s.pending=t,t=Fi(e),Gp(e,null,r),t}return Gi(e,s,t,r),Fi(e)}function Ns(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Wm(e,r)}}function Tu(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var u=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?u=f=b:f=f.next=b,r=r.next}while(r!==null);f===null?u=f=t:f=f.next=t}else u=f=t;r={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var Ru=!1;function Cs(){if(Ru){var e=io;if(e!==null)throw e}}function As(e,t,r,s){Ru=!1;var u=e.updateQueue;La=!1;var f=u.firstBaseUpdate,b=u.lastBaseUpdate,j=u.shared.pending;if(j!==null){u.shared.pending=null;var D=j,H=D.next;D.next=null,b===null?f=H:b.next=H,b=D;var K=e.alternate;K!==null&&(K=K.updateQueue,j=K.lastBaseUpdate,j!==b&&(j===null?K.firstBaseUpdate=H:j.next=H,K.lastBaseUpdate=D))}if(f!==null){var ee=u.baseState;b=0,K=H=D=null,j=f;do{var J=j.lane&-536870913,G=J!==j.lane;if(G?(Ae&J)===J:(s&J)===J){J!==0&&J===so&&(Ru=!0),K!==null&&(K=K.next={lane:0,tag:j.tag,payload:j.payload,callback:null,next:null});e:{var fe=e,ve=j;J=t;var qe=r;switch(ve.tag){case 1:if(fe=ve.payload,typeof fe=="function"){ee=fe.call(qe,ee,J);break e}ee=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ve.payload,J=typeof fe=="function"?fe.call(qe,ee,J):fe,J==null)break e;ee=x({},ee,J);break e;case 2:La=!0}}J=j.callback,J!==null&&(e.flags|=64,G&&(e.flags|=8192),G=u.callbacks,G===null?u.callbacks=[J]:G.push(J))}else G={lane:J,tag:j.tag,payload:j.payload,callback:j.callback,next:null},K===null?(H=K=G,D=ee):K=K.next=G,b|=J;if(j=j.next,j===null){if(j=u.shared.pending,j===null)break;G=j,j=G.next,G.next=null,u.lastBaseUpdate=G,u.shared.pending=null}}while(!0);K===null&&(D=ee),u.baseState=D,u.firstBaseUpdate=H,u.lastBaseUpdate=K,f===null&&(u.shared.lanes=0),Pa|=b,e.lanes=b,e.memoizedState=ee}}function ch(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function uh(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)ch(r[e],t)}var uo=O(null),nl=O(0);function dh(e,t){e=ua,ae(nl,e),ae(uo,t),ua=e|t.baseLanes}function Du(){ae(nl,ua),ae(uo,uo.current)}function Lu(){ua=nl.current,q(uo),q(nl)}var Gt=O(null),fn=null;function Ma(e){var t=e.alternate;ae(et,et.current&1),ae(Gt,e),fn===null&&(t===null||uo.current!==null||t.memoizedState!==null)&&(fn=e)}function _u(e){ae(et,et.current),ae(Gt,e),fn===null&&(fn=e)}function fh(e){e.tag===22?(ae(et,et.current),ae(Gt,e),fn===null&&(fn=e)):Ba()}function Ba(){ae(et,et.current),ae(Gt,Gt.current)}function Ft(e){q(Gt),fn===e&&(fn=null),q(et)}var et=O(0);function al(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Pd(r)||$d(r)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=0,we=null,He=null,st=null,rl=!1,fo=!1,xr=!1,ol=0,Os=0,mo=null,ZS=0;function Qe(){throw Error(l(321))}function zu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Jt(e[r],t[r]))return!1;return!0}function Mu(e,t,r,s,u,f){return na=f,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Xh:Ku,xr=!1,f=r(s,u),xr=!1,fo&&(f=ph(t,r,s,u)),mh(e),f}function mh(e){k.H=Rs;var t=He!==null&&He.next!==null;if(na=0,st=He=we=null,rl=!1,Os=0,mo=null,t)throw Error(l(300));e===null||it||(e=e.dependencies,e!==null&&Xi(e)&&(it=!0))}function ph(e,t,r,s){we=e;var u=0;do{if(fo&&(mo=null),Os=0,fo=!1,25<=u)throw Error(l(301));if(u+=1,st=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}k.H=Zh,f=t(r,s)}while(fo);return f}function KS(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?ks(t):t,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(we.flags|=1024),t}function Bu(){var e=ol!==0;return ol=0,e}function Uu(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function Iu(e){if(rl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}rl=!1}na=0,st=He=we=null,fo=!1,Os=ol=0,mo=null}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?we.memoizedState=st=e:st=st.next=e,st}function tt(){if(He===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=st===null?we.memoizedState:st.next;if(t!==null)st=t,He=e;else{if(e===null)throw we.alternate===null?Error(l(467)):Error(l(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},st===null?we.memoizedState=st=e:st=st.next=e}return st}function sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ks(e){var t=Os;return Os+=1,mo===null&&(mo=[]),e=rh(mo,e,t),t=we,(st===null?t.memoizedState:st.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Xh:Ku),e}function il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ks(e);if(e.$$typeof===T)return ht(e)}throw Error(l(438,String(e)))}function Pu(e){var t=null,r=we.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var s=we.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=sl(),we.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),s=0;s<e;s++)r[s]=te;return t.index++,r}function aa(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=tt();return $u(t,He,e)}function $u(e,t,r){var s=e.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=r;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var b=u.next;u.next=f.next,f.next=b}t.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{t=u.next;var j=b=null,D=null,H=t,K=!1;do{var ee=H.lane&-536870913;if(ee!==H.lane?(Ae&ee)===ee:(na&ee)===ee){var J=H.revertLane;if(J===0)D!==null&&(D=D.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),ee===so&&(K=!0);else if((na&J)===J){H=H.next,J===so&&(K=!0);continue}else ee={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},D===null?(j=D=ee,b=f):D=D.next=ee,we.lanes|=J,Pa|=J;ee=H.action,xr&&r(f,ee),f=H.hasEagerState?H.eagerState:r(f,ee)}else J={lane:ee,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},D===null?(j=D=J,b=f):D=D.next=J,we.lanes|=ee,Pa|=ee;H=H.next}while(H!==null&&H!==t);if(D===null?b=f:D.next=j,!Jt(f,e.memoizedState)&&(it=!0,K&&(r=io,r!==null)))throw r;e.memoizedState=f,e.baseState=b,e.baseQueue=D,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Hu(e){var t=tt(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var s=r.dispatch,u=r.pending,f=t.memoizedState;if(u!==null){r.pending=null;var b=u=u.next;do f=e(f,b.action),b=b.next;while(b!==u);Jt(f,t.memoizedState)||(it=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),r.lastRenderedState=f}return[f,s]}function hh(e,t,r){var s=we,u=tt(),f=ke;if(f){if(r===void 0)throw Error(l(407));r=r()}else r=t();var b=!Jt((He||u).memoizedState,r);if(b&&(u.memoizedState=r,it=!0),u=u.queue,Gu(bh.bind(null,s,u,e),[e]),u.getSnapshot!==t||b||st!==null&&st.memoizedState.tag&1){if(s.flags|=2048,po(9,{destroy:void 0},vh.bind(null,s,u,r,t),null),Ge===null)throw Error(l(349));f||(na&127)!==0||gh(s,t,r)}return r}function gh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=we.updateQueue,t===null?(t=sl(),we.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function vh(e,t,r,s){t.value=r,t.getSnapshot=s,yh(t)&&xh(e)}function bh(e,t,r){return r(function(){yh(t)&&xh(e)})}function yh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Jt(e,r)}catch{return!0}}function xh(e){var t=dr(e,2);t!==null&&zt(t,e,2)}function Ju(e){var t=Et();if(typeof e=="function"){var r=e;if(e=r(),xr){Ca(!0);try{r()}finally{Ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t}function wh(e,t,r,s){return e.baseState=r,$u(e,He,typeof s=="function"?s:aa)}function QS(e,t,r,s,u){if(dl(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){f.listeners.push(b)}};k.T!==null?r(!0):f.isTransition=!1,s(f),r=t.pending,r===null?(f.next=t.pending=f,Sh(t,f)):(f.next=r.next,t.pending=r.next=f)}}function Sh(e,t){var r=t.action,s=t.payload,u=e.state;if(t.isTransition){var f=k.T,b={};k.T=b;try{var j=r(u,s),D=k.S;D!==null&&D(b,j),jh(e,t,j)}catch(H){qu(e,t,H)}finally{f!==null&&b.types!==null&&(f.types=b.types),k.T=f}}else try{f=r(u,s),jh(e,t,f)}catch(H){qu(e,t,H)}}function jh(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(s){Eh(e,t,s)},function(s){return qu(e,t,s)}):Eh(e,t,r)}function Eh(e,t,r){t.status="fulfilled",t.value=r,Nh(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,Sh(e,r)))}function qu(e,t,r){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=r,Nh(t),t=t.next;while(t!==s)}e.action=null}function Nh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ch(e,t){return t}function Ah(e,t){if(ke){var r=Ge.formState;if(r!==null){e:{var s=we;if(ke){if(Fe){t:{for(var u=Fe,f=dn;u.nodeType!==8;){if(!f){u=null;break t}if(u=mn(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Fe=mn(u.nextSibling),s=u.data==="F!";break e}}Ra(s)}s=!1}s&&(t=r[0])}}return r=Et(),r.memoizedState=r.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ch,lastRenderedState:t},r.queue=s,r=Fh.bind(null,we,s),s.dispatch=r,s=Ju(!1),f=Zu.bind(null,we,!1,s.queue),s=Et(),u={state:t,dispatch:null,action:e,pending:null},s.queue=u,r=QS.bind(null,we,u,f,r),u.dispatch=r,s.memoizedState=e,[t,r,!1]}function Oh(e){var t=tt();return kh(t,He,e)}function kh(e,t,r){if(t=$u(e,t,Ch)[0],e=ll(aa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=ks(t)}catch(b){throw b===lo?Qi:b}else s=t;t=tt();var u=t.queue,f=u.dispatch;return r!==t.memoizedState&&(we.flags|=2048,po(9,{destroy:void 0},WS.bind(null,u,r),null)),[s,f,e]}function WS(e,t){e.action=t}function Th(e){var t=tt(),r=He;if(r!==null)return kh(t,r,e);tt(),t=t.memoizedState,r=tt();var s=r.queue.dispatch;return r.memoizedState=e,[t,s,!1]}function po(e,t,r,s){return e={tag:e,create:r,deps:s,inst:t,next:null},t=we.updateQueue,t===null&&(t=sl(),we.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e),e}function Rh(){return tt().memoizedState}function cl(e,t,r,s){var u=Et();we.flags|=e,u.memoizedState=po(1|t,{destroy:void 0},r,s===void 0?null:s)}function ul(e,t,r,s){var u=tt();s=s===void 0?null:s;var f=u.memoizedState.inst;He!==null&&s!==null&&zu(s,He.memoizedState.deps)?u.memoizedState=po(t,f,r,s):(we.flags|=e,u.memoizedState=po(1|t,f,r,s))}function Dh(e,t){cl(8390656,8,e,t)}function Gu(e,t){ul(2048,8,e,t)}function ej(e){we.flags|=4;var t=we.updateQueue;if(t===null)t=sl(),we.updateQueue=t,t.events=[e];else{var r=t.events;r===null?t.events=[e]:r.push(e)}}function Lh(e){var t=tt().memoizedState;return ej({ref:t,nextImpl:e}),function(){if((Le&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function _h(e,t){return ul(4,2,e,t)}function zh(e,t){return ul(4,4,e,t)}function Mh(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bh(e,t,r){r=r!=null?r.concat([e]):null,ul(4,4,Mh.bind(null,t,e),r)}function Fu(){}function Uh(e,t){var r=tt();t=t===void 0?null:t;var s=r.memoizedState;return t!==null&&zu(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Ih(e,t){var r=tt();t=t===void 0?null:t;var s=r.memoizedState;if(t!==null&&zu(t,s[1]))return s[0];if(s=e(),xr){Ca(!0);try{e()}finally{Ca(!1)}}return r.memoizedState=[s,t],s}function Vu(e,t,r){return r===void 0||(na&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=t:(e.memoizedState=r,e=Pg(),we.lanes|=e,Pa|=e,r)}function Ph(e,t,r,s){return Jt(r,t)?r:uo.current!==null?(e=Vu(e,r,s),Jt(e,t)||(it=!0),e):(na&42)===0||(na&1073741824)!==0&&(Ae&261930)===0?(it=!0,e.memoizedState=r):(e=Pg(),we.lanes|=e,Pa|=e,t)}function $h(e,t,r,s,u){var f=F.p;F.p=f!==0&&8>f?f:8;var b=k.T,j={};k.T=j,Zu(e,!1,t,r);try{var D=u(),H=k.S;if(H!==null&&H(j,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var K=XS(D,s);Ts(e,t,K,Xt(e))}else Ts(e,t,s,Xt(e))}catch(ee){Ts(e,t,{then:function(){},status:"rejected",reason:ee},Xt())}finally{F.p=f,b!==null&&j.types!==null&&(b.types=j.types),k.T=b}}function tj(){}function Yu(e,t,r,s){if(e.tag!==5)throw Error(l(476));var u=Hh(e).queue;$h(e,u,t,re,r===null?tj:function(){return Jh(e),r(s)})}function Hh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:re},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jh(e){var t=Hh(e);t.next===null&&(t=e.alternate.memoizedState),Ts(e,t.next.queue,{},Xt())}function Xu(){return ht(Vs)}function qh(){return tt().memoizedState}function Gh(){return tt().memoizedState}function nj(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=Xt();e=_a(r);var s=za(t,e,r);s!==null&&(zt(s,t,r),Ns(s,t,r)),t={cache:Eu()},e.payload=t;return}t=t.return}}function aj(e,t,r){var s=Xt();r={lane:s,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},dl(e)?Vh(t,r):(r=mu(e,t,r,s),r!==null&&(zt(r,e,s),Yh(r,t,s)))}function Fh(e,t,r){var s=Xt();Ts(e,t,r,s)}function Ts(e,t,r,s){var u={lane:s,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(dl(e))Vh(t,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var b=t.lastRenderedState,j=f(b,r);if(u.hasEagerState=!0,u.eagerState=j,Jt(j,b))return Gi(e,t,u,0),Ge===null&&qi(),!1}catch{}if(r=mu(e,t,u,s),r!==null)return zt(r,e,s),Yh(r,t,s),!0}return!1}function Zu(e,t,r,s){if(s={lane:2,revertLane:Od(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},dl(e)){if(t)throw Error(l(479))}else t=mu(e,r,s,2),t!==null&&zt(t,e,2)}function dl(e){var t=e.alternate;return e===we||t!==null&&t===we}function Vh(e,t){fo=rl=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Yh(e,t,r){if((r&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Wm(e,r)}}var Rs={readContext:ht,use:il,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};Rs.useEffectEvent=Qe;var Xh={readContext:ht,use:il,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Dh,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,cl(4194308,4,Mh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return cl(4194308,4,e,t)},useInsertionEffect:function(e,t){cl(4,2,e,t)},useMemo:function(e,t){var r=Et();t=t===void 0?null:t;var s=e();if(xr){Ca(!0);try{e()}finally{Ca(!1)}}return r.memoizedState=[s,t],s},useReducer:function(e,t,r){var s=Et();if(r!==void 0){var u=r(t);if(xr){Ca(!0);try{r(t)}finally{Ca(!1)}}}else u=t;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=aj.bind(null,we,e),[s.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:function(e){e=Ju(e);var t=e.queue,r=Fh.bind(null,we,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:Fu,useDeferredValue:function(e,t){var r=Et();return Vu(r,e,t)},useTransition:function(){var e=Ju(!1);return e=$h.bind(null,we,e.queue,!0,!1),Et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var s=we,u=Et();if(ke){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),Ge===null)throw Error(l(349));(Ae&127)!==0||gh(s,t,r)}u.memoizedState=r;var f={value:r,getSnapshot:t};return u.queue=f,Dh(bh.bind(null,s,f,e),[e]),s.flags|=2048,po(9,{destroy:void 0},vh.bind(null,s,f,r,t),null),r},useId:function(){var e=Et(),t=Ge.identifierPrefix;if(ke){var r=In,s=Un;r=(s&~(1<<32-Ht(s)-1)).toString(32)+r,t="_"+t+"R_"+r,r=ol++,0<r&&(t+="H"+r.toString(32)),t+="_"}else r=ZS++,t="_"+t+"r_"+r.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Xu,useFormState:Ah,useActionState:Ah,useOptimistic:function(e){var t=Et();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=Zu.bind(null,we,!0,r),r.dispatch=t,[e,t]},useMemoCache:Pu,useCacheRefresh:function(){return Et().memoizedState=nj.bind(null,we)},useEffectEvent:function(e){var t=Et(),r={impl:e};return t.memoizedState=r,function(){if((Le&2)!==0)throw Error(l(440));return r.impl.apply(void 0,arguments)}}},Ku={readContext:ht,use:il,useCallback:Uh,useContext:ht,useEffect:Gu,useImperativeHandle:Bh,useInsertionEffect:_h,useLayoutEffect:zh,useMemo:Ih,useReducer:ll,useRef:Rh,useState:function(){return ll(aa)},useDebugValue:Fu,useDeferredValue:function(e,t){var r=tt();return Ph(r,He.memoizedState,e,t)},useTransition:function(){var e=ll(aa)[0],t=tt().memoizedState;return[typeof e=="boolean"?e:ks(e),t]},useSyncExternalStore:hh,useId:qh,useHostTransitionStatus:Xu,useFormState:Oh,useActionState:Oh,useOptimistic:function(e,t){var r=tt();return wh(r,He,e,t)},useMemoCache:Pu,useCacheRefresh:Gh};Ku.useEffectEvent=Lh;var Zh={readContext:ht,use:il,useCallback:Uh,useContext:ht,useEffect:Gu,useImperativeHandle:Bh,useInsertionEffect:_h,useLayoutEffect:zh,useMemo:Ih,useReducer:Hu,useRef:Rh,useState:function(){return Hu(aa)},useDebugValue:Fu,useDeferredValue:function(e,t){var r=tt();return He===null?Vu(r,e,t):Ph(r,He.memoizedState,e,t)},useTransition:function(){var e=Hu(aa)[0],t=tt().memoizedState;return[typeof e=="boolean"?e:ks(e),t]},useSyncExternalStore:hh,useId:qh,useHostTransitionStatus:Xu,useFormState:Th,useActionState:Th,useOptimistic:function(e,t){var r=tt();return He!==null?wh(r,He,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:Gh};Zh.useEffectEvent=Lh;function Qu(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:x({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Wu={enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Xt(),u=_a(s);u.payload=t,r!=null&&(u.callback=r),t=za(e,u,s),t!==null&&(zt(t,e,s),Ns(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Xt(),u=_a(s);u.tag=1,u.payload=t,r!=null&&(u.callback=r),t=za(e,u,s),t!==null&&(zt(t,e,s),Ns(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Xt(),s=_a(r);s.tag=2,t!=null&&(s.callback=t),t=za(e,s,r),t!==null&&(zt(t,e,r),Ns(t,e,r))}};function Kh(e,t,r,s,u,f,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,b):t.prototype&&t.prototype.isPureReactComponent?!vs(r,s)||!vs(u,f):!0}function Qh(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&Wu.enqueueReplaceState(t,t.state,null)}function wr(e,t){var r=t;if("ref"in t){r={};for(var s in t)s!=="ref"&&(r[s]=t[s])}if(e=e.defaultProps){r===t&&(r=x({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}function Wh(e){Ji(e)}function eg(e){console.error(e)}function tg(e){Ji(e)}function fl(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function ng(e,t,r){try{var s=e.onCaughtError;s(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ed(e,t,r){return r=_a(r),r.tag=3,r.payload={element:null},r.callback=function(){fl(e,t)},r}function ag(e){return e=_a(e),e.tag=3,e}function rg(e,t,r,s){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){ng(t,r,s)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){ng(t,r,s),typeof u!="function"&&($a===null?$a=new Set([this]):$a.add(this));var j=s.stack;this.componentDidCatch(s.value,{componentStack:j!==null?j:""})})}function rj(e,t,r,s,u){if(r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=r.alternate,t!==null&&oo(t,r,u,!0),r=Gt.current,r!==null){switch(r.tag){case 31:case 13:return fn===null?El():r.alternate===null&&We===0&&(We=3),r.flags&=-257,r.flags|=65536,r.lanes=u,s===Wi?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([s]):t.add(s),Nd(e,s,u)),!1;case 22:return r.flags|=65536,s===Wi?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([s]):r.add(s)),Nd(e,s,u)),!1}throw Error(l(435,r.tag))}return Nd(e,s,u),El(),!1}if(ke)return t=Gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,s!==yu&&(e=Error(l(422),{cause:s}),xs(ln(e,r)))):(s!==yu&&(t=Error(l(423),{cause:s}),xs(ln(t,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=ln(s,r),u=ed(e.stateNode,s,u),Tu(e,u),We!==4&&(We=2)),!1;var f=Error(l(520),{cause:s});if(f=ln(f,r),Is===null?Is=[f]:Is.push(f),We!==4&&(We=2),t===null)return!0;s=ln(s,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=ed(r.stateNode,s,e),Tu(r,e),!1;case 1:if(t=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&($a===null||!$a.has(f))))return r.flags|=65536,u&=-u,r.lanes|=u,u=ag(u),rg(u,e,r,s),Tu(r,u),!1}r=r.return}while(r!==null);return!1}var td=Error(l(461)),it=!1;function gt(e,t,r,s){t.child=e===null?lh(t,null,r,s):yr(t,e.child,r,s)}function og(e,t,r,s,u){r=r.render;var f=t.ref;if("ref"in s){var b={};for(var j in s)j!=="ref"&&(b[j]=s[j])}else b=s;return hr(t),s=Mu(e,t,r,b,f,u),j=Bu(),e!==null&&!it?(Uu(e,t,u),ra(e,t,u)):(ke&&j&&vu(t),t.flags|=1,gt(e,t,s,u),t.child)}function sg(e,t,r,s,u){if(e===null){var f=r.type;return typeof f=="function"&&!pu(f)&&f.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=f,ig(e,t,f,s,u)):(e=Vi(r.type,null,s,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!cd(e,u)){var b=f.memoizedProps;if(r=r.compare,r=r!==null?r:vs,r(b,s)&&e.ref===t.ref)return ra(e,t,u)}return t.flags|=1,e=Qn(f,s),e.ref=t.ref,e.return=t,t.child=e}function ig(e,t,r,s,u){if(e!==null){var f=e.memoizedProps;if(vs(f,s)&&e.ref===t.ref)if(it=!1,t.pendingProps=s=f,cd(e,u))(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,ra(e,t,u)}return nd(e,t,r,s,u)}function lg(e,t,r,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(f=f!==null?f.baseLanes|r:r,e!==null){for(s=t.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,t.child=null;return cg(e,t,f,r,s)}if((r&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ki(t,f!==null?f.cachePool:null),f!==null?dh(t,f):Du(),fh(t);else return s=t.lanes=536870912,cg(e,t,f!==null?f.baseLanes|r:r,r,s)}else f!==null?(Ki(t,f.cachePool),dh(t,f),Ba(),t.memoizedState=null):(e!==null&&Ki(t,null),Du(),Ba());return gt(e,t,u,r),t.child}function Ds(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cg(e,t,r,s,u){var f=Cu();return f=f===null?null:{parent:ot._currentValue,pool:f},t.memoizedState={baseLanes:r,cachePool:f},e!==null&&Ki(t,null),Du(),fh(t),e!==null&&oo(e,t,s,!0),t.childLanes=u,null}function ml(e,t){return t=hl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ug(e,t,r){return yr(t,e.child,null,r),e=ml(t,t.pendingProps),e.flags|=2,Ft(t),t.memoizedState=null,e}function oj(e,t,r){var s=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ke){if(s.mode==="hidden")return e=ml(t,s),t.lanes=536870912,Ds(null,e);if(_u(t),(e=Fe)?(e=Sv(e,dn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ka!==null?{id:Un,overflow:In}:null,retryLane:536870912,hydrationErrors:null},r=Vp(e),r.return=t,t.child=r,pt=t,Fe=null)):e=null,e===null)throw Ra(t);return t.lanes=536870912,null}return ml(t,s)}var f=e.memoizedState;if(f!==null){var b=f.dehydrated;if(_u(t),u)if(t.flags&256)t.flags&=-257,t=ug(e,t,r);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(it||oo(e,t,r,!1),u=(r&e.childLanes)!==0,it||u){if(s=Ge,s!==null&&(b=ep(s,r),b!==0&&b!==f.retryLane))throw f.retryLane=b,dr(e,b),zt(s,e,b),td;El(),t=ug(e,t,r)}else e=f.treeContext,Fe=mn(b.nextSibling),pt=t,ke=!0,Ta=null,dn=!1,e!==null&&Zp(t,e),t=ml(t,s),t.flags|=4096;return t}return e=Qn(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pl(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(l(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function nd(e,t,r,s,u){return hr(t),r=Mu(e,t,r,s,void 0,u),s=Bu(),e!==null&&!it?(Uu(e,t,u),ra(e,t,u)):(ke&&s&&vu(t),t.flags|=1,gt(e,t,r,u),t.child)}function dg(e,t,r,s,u,f){return hr(t),t.updateQueue=null,r=ph(t,s,r,u),mh(e),s=Bu(),e!==null&&!it?(Uu(e,t,f),ra(e,t,f)):(ke&&s&&vu(t),t.flags|=1,gt(e,t,r,f),t.child)}function fg(e,t,r,s,u){if(hr(t),t.stateNode===null){var f=to,b=r.contextType;typeof b=="object"&&b!==null&&(f=ht(b)),f=new r(s,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Wu,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=s,f.state=t.memoizedState,f.refs={},Ou(t),b=r.contextType,f.context=typeof b=="object"&&b!==null?ht(b):to,f.state=t.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(Qu(t,r,b,s),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(b=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),b!==f.state&&Wu.enqueueReplaceState(f,f.state,null),As(t,s,f,u),Cs(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){f=t.stateNode;var j=t.memoizedProps,D=wr(r,j);f.props=D;var H=f.context,K=r.contextType;b=to,typeof K=="object"&&K!==null&&(b=ht(K));var ee=r.getDerivedStateFromProps;K=typeof ee=="function"||typeof f.getSnapshotBeforeUpdate=="function",j=t.pendingProps!==j,K||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(j||H!==b)&&Qh(t,f,s,b),La=!1;var J=t.memoizedState;f.state=J,As(t,s,f,u),Cs(),H=t.memoizedState,j||J!==H||La?(typeof ee=="function"&&(Qu(t,r,ee,s),H=t.memoizedState),(D=La||Kh(t,r,D,s,J,H,b))?(K||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=H),f.props=s,f.state=H,f.context=b,s=D):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{f=t.stateNode,ku(e,t),b=t.memoizedProps,K=wr(r,b),f.props=K,ee=t.pendingProps,J=f.context,H=r.contextType,D=to,typeof H=="object"&&H!==null&&(D=ht(H)),j=r.getDerivedStateFromProps,(H=typeof j=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==ee||J!==D)&&Qh(t,f,s,D),La=!1,J=t.memoizedState,f.state=J,As(t,s,f,u),Cs();var G=t.memoizedState;b!==ee||J!==G||La||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof j=="function"&&(Qu(t,r,j,s),G=t.memoizedState),(K=La||Kh(t,r,K,s,J,G,D)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(H||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,G,D),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,G,D)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||b===e.memoizedProps&&J===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&J===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=G),f.props=s,f.state=G,f.context=D,s=K):(typeof f.componentDidUpdate!="function"||b===e.memoizedProps&&J===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&J===e.memoizedState||(t.flags|=1024),s=!1)}return f=s,pl(e,t),s=(t.flags&128)!==0,f||s?(f=t.stateNode,r=s&&typeof r.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&s?(t.child=yr(t,e.child,null,u),t.child=yr(t,null,r,u)):gt(e,t,r,u),t.memoizedState=f.state,e=t.child):e=ra(e,t,u),e}function mg(e,t,r,s){return mr(),t.flags|=256,gt(e,t,r,s),t.child}var ad={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rd(e){return{baseLanes:e,cachePool:nh()}}function od(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=Yt),e}function pg(e,t,r){var s=t.pendingProps,u=!1,f=(t.flags&128)!==0,b;if((b=f)||(b=e!==null&&e.memoizedState===null?!1:(et.current&2)!==0),b&&(u=!0,t.flags&=-129),b=(t.flags&32)!==0,t.flags&=-33,e===null){if(ke){if(u?Ma(t):Ba(),(e=Fe)?(e=Sv(e,dn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ka!==null?{id:Un,overflow:In}:null,retryLane:536870912,hydrationErrors:null},r=Vp(e),r.return=t,t.child=r,pt=t,Fe=null)):e=null,e===null)throw Ra(t);return $d(e)?t.lanes=32:t.lanes=536870912,null}var j=s.children;return s=s.fallback,u?(Ba(),u=t.mode,j=hl({mode:"hidden",children:j},u),s=fr(s,u,r,null),j.return=t,s.return=t,j.sibling=s,t.child=j,s=t.child,s.memoizedState=rd(r),s.childLanes=od(e,b,r),t.memoizedState=ad,Ds(null,s)):(Ma(t),sd(t,j))}var D=e.memoizedState;if(D!==null&&(j=D.dehydrated,j!==null)){if(f)t.flags&256?(Ma(t),t.flags&=-257,t=id(e,t,r)):t.memoizedState!==null?(Ba(),t.child=e.child,t.flags|=128,t=null):(Ba(),j=s.fallback,u=t.mode,s=hl({mode:"visible",children:s.children},u),j=fr(j,u,r,null),j.flags|=2,s.return=t,j.return=t,s.sibling=j,t.child=s,yr(t,e.child,null,r),s=t.child,s.memoizedState=rd(r),s.childLanes=od(e,b,r),t.memoizedState=ad,t=Ds(null,s));else if(Ma(t),$d(j)){if(b=j.nextSibling&&j.nextSibling.dataset,b)var H=b.dgst;b=H,s=Error(l(419)),s.stack="",s.digest=b,xs({value:s,source:null,stack:null}),t=id(e,t,r)}else if(it||oo(e,t,r,!1),b=(r&e.childLanes)!==0,it||b){if(b=Ge,b!==null&&(s=ep(b,r),s!==0&&s!==D.retryLane))throw D.retryLane=s,dr(e,s),zt(b,e,s),td;Pd(j)||El(),t=id(e,t,r)}else Pd(j)?(t.flags|=192,t.child=e.child,t=null):(e=D.treeContext,Fe=mn(j.nextSibling),pt=t,ke=!0,Ta=null,dn=!1,e!==null&&Zp(t,e),t=sd(t,s.children),t.flags|=4096);return t}return u?(Ba(),j=s.fallback,u=t.mode,D=e.child,H=D.sibling,s=Qn(D,{mode:"hidden",children:s.children}),s.subtreeFlags=D.subtreeFlags&65011712,H!==null?j=Qn(H,j):(j=fr(j,u,r,null),j.flags|=2),j.return=t,s.return=t,s.sibling=j,t.child=s,Ds(null,s),s=t.child,j=e.child.memoizedState,j===null?j=rd(r):(u=j.cachePool,u!==null?(D=ot._currentValue,u=u.parent!==D?{parent:D,pool:D}:u):u=nh(),j={baseLanes:j.baseLanes|r,cachePool:u}),s.memoizedState=j,s.childLanes=od(e,b,r),t.memoizedState=ad,Ds(e.child,s)):(Ma(t),r=e.child,e=r.sibling,r=Qn(r,{mode:"visible",children:s.children}),r.return=t,r.sibling=null,e!==null&&(b=t.deletions,b===null?(t.deletions=[e],t.flags|=16):b.push(e)),t.child=r,t.memoizedState=null,r)}function sd(e,t){return t=hl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hl(e,t){return e=qt(22,e,null,t),e.lanes=0,e}function id(e,t,r){return yr(t,e.child,null,r),e=sd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hg(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Su(e.return,t,r)}function ld(e,t,r,s,u,f){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:u,treeForkCount:f}:(b.isBackwards=t,b.rendering=null,b.renderingStartTime=0,b.last=s,b.tail=r,b.tailMode=u,b.treeForkCount=f)}function gg(e,t,r){var s=t.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var b=et.current,j=(b&2)!==0;if(j?(b=b&1|2,t.flags|=128):b&=1,ae(et,b),gt(e,t,s,r),s=ke?ys:0,!j&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hg(e,r,t);else if(e.tag===19)hg(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(r=t.child,u=null;r!==null;)e=r.alternate,e!==null&&al(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=t.child,t.child=null):(u=r.sibling,r.sibling=null),ld(t,!1,u,r,f,s);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&al(e)===null){t.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}ld(t,!0,r,null,f,s);break;case"together":ld(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function ra(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Pa|=t.lanes,(r&t.childLanes)===0)if(e!==null){if(oo(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=Qn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Qn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function cd(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xi(e)))}function sj(e,t,r){switch(t.tag){case 3:Me(t,t.stateNode.containerInfo),Da(t,ot,e.memoizedState.cache),mr();break;case 27:case 5:jt(t);break;case 4:Me(t,t.stateNode.containerInfo);break;case 10:Da(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,_u(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Ma(t),t.flags|=128,null):(r&t.child.childLanes)!==0?pg(e,t,r):(Ma(t),e=ra(e,t,r),e!==null?e.sibling:null);Ma(t);break;case 19:var u=(e.flags&128)!==0;if(s=(r&t.childLanes)!==0,s||(oo(e,t,r,!1),s=(r&t.childLanes)!==0),u){if(s)return gg(e,t,r);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ae(et,et.current),s)break;return null;case 22:return t.lanes=0,lg(e,t,r,t.pendingProps);case 24:Da(t,ot,e.memoizedState.cache)}return ra(e,t,r)}function vg(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)it=!0;else{if(!cd(e,r)&&(t.flags&128)===0)return it=!1,sj(e,t,r);it=(e.flags&131072)!==0}else it=!1,ke&&(t.flags&1048576)!==0&&Xp(t,ys,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=vr(t.elementType),t.type=e,typeof e=="function")pu(e)?(s=wr(e,s),t.tag=1,t=fg(null,t,e,s,r)):(t.tag=0,t=nd(null,t,e,s,r));else{if(e!=null){var u=e.$$typeof;if(u===_){t.tag=11,t=og(null,t,e,s,r);break e}else if(u===L){t.tag=14,t=sg(null,t,e,s,r);break e}}throw t=W(e)||e,Error(l(306,t,""))}}return t;case 0:return nd(e,t,t.type,t.pendingProps,r);case 1:return s=t.type,u=wr(s,t.pendingProps),fg(e,t,s,u,r);case 3:e:{if(Me(t,t.stateNode.containerInfo),e===null)throw Error(l(387));s=t.pendingProps;var f=t.memoizedState;u=f.element,ku(e,t),As(t,s,null,r);var b=t.memoizedState;if(s=b.cache,Da(t,ot,s),s!==f.cache&&ju(t,[ot],r,!0),Cs(),s=b.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:b.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=mg(e,t,s,r);break e}else if(s!==u){u=ln(Error(l(424)),t),xs(u),t=mg(e,t,s,r);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Fe=mn(e.firstChild),pt=t,ke=!0,Ta=null,dn=!0,r=lh(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(mr(),s===u){t=ra(e,t,r);break e}gt(e,t,s,r)}t=t.child}return t;case 26:return pl(e,t),e===null?(r=Ov(t.type,null,t.pendingProps,null))?t.memoizedState=r:ke||(r=t.type,e=t.pendingProps,s=Rl(pe.current).createElement(r),s[mt]=t,s[kt]=e,vt(s,r,e),ut(s),t.stateNode=s):t.memoizedState=Ov(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return jt(t),e===null&&ke&&(s=t.stateNode=Nv(t.type,t.pendingProps,pe.current),pt=t,dn=!0,u=Fe,Ga(t.type)?(Hd=u,Fe=mn(s.firstChild)):Fe=u),gt(e,t,t.pendingProps.children,r),pl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ke&&((u=s=Fe)&&(s=Mj(s,t.type,t.pendingProps,dn),s!==null?(t.stateNode=s,pt=t,Fe=mn(s.firstChild),dn=!1,u=!0):u=!1),u||Ra(t)),jt(t),u=t.type,f=t.pendingProps,b=e!==null?e.memoizedProps:null,s=f.children,Bd(u,f)?s=null:b!==null&&Bd(u,b)&&(t.flags|=32),t.memoizedState!==null&&(u=Mu(e,t,KS,null,null,r),Vs._currentValue=u),pl(e,t),gt(e,t,s,r),t.child;case 6:return e===null&&ke&&((e=r=Fe)&&(r=Bj(r,t.pendingProps,dn),r!==null?(t.stateNode=r,pt=t,Fe=null,e=!0):e=!1),e||Ra(t)),null;case 13:return pg(e,t,r);case 4:return Me(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=yr(t,null,s,r):gt(e,t,s,r),t.child;case 11:return og(e,t,t.type,t.pendingProps,r);case 7:return gt(e,t,t.pendingProps,r),t.child;case 8:return gt(e,t,t.pendingProps.children,r),t.child;case 12:return gt(e,t,t.pendingProps.children,r),t.child;case 10:return s=t.pendingProps,Da(t,t.type,s.value),gt(e,t,s.children,r),t.child;case 9:return u=t.type._context,s=t.pendingProps.children,hr(t),u=ht(u),s=s(u),t.flags|=1,gt(e,t,s,r),t.child;case 14:return sg(e,t,t.type,t.pendingProps,r);case 15:return ig(e,t,t.type,t.pendingProps,r);case 19:return gg(e,t,r);case 31:return oj(e,t,r);case 22:return lg(e,t,r,t.pendingProps);case 24:return hr(t),s=ht(ot),e===null?(u=Cu(),u===null&&(u=Ge,f=Eu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=r),u=f),t.memoizedState={parent:s,cache:u},Ou(t),Da(t,ot,u)):((e.lanes&r)!==0&&(ku(e,t),As(t,null,null,r),Cs()),u=e.memoizedState,f=t.memoizedState,u.parent!==s?(u={parent:s,cache:s},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),Da(t,ot,s)):(s=f.cache,Da(t,ot,s),s!==u.cache&&ju(t,[ot],r,!0))),gt(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function oa(e){e.flags|=4}function ud(e,t,r,s,u){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(qg())e.flags|=8192;else throw br=Wi,Au}else e.flags&=-16777217}function bg(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lv(t))if(qg())e.flags|=8192;else throw br=Wi,Au}function gl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Km():536870912,e.lanes|=t,bo|=t)}function Ls(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function ij(e,t,r){var s=t.pendingProps;switch(bu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return r=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),ta(ot),je(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ro(t)?oa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xu())),Ve(t),null;case 26:var u=t.type,f=t.memoizedState;return e===null?(oa(t),f!==null?(Ve(t),bg(t,f)):(Ve(t),ud(t,u,null,s,r))):f?f!==e.memoizedState?(oa(t),Ve(t),bg(t,f)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&oa(t),Ve(t),ud(t,u,e,s,r)),null;case 27:if(It(t),r=pe.current,u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&oa(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Ve(t),null}e=P.current,ro(t)?Kp(t):(e=Nv(u,s,r),t.stateNode=e,oa(t))}return Ve(t),null;case 5:if(It(t),u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&oa(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Ve(t),null}if(f=P.current,ro(t))Kp(t);else{var b=Rl(pe.current);switch(f){case 1:f=b.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=b.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=b.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?b.createElement("select",{is:s.is}):b.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?b.createElement(u,{is:s.is}):b.createElement(u)}}f[mt]=t,f[kt]=s;e:for(b=t.child;b!==null;){if(b.tag===5||b.tag===6)f.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===t)break e;for(;b.sibling===null;){if(b.return===null||b.return===t)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}t.stateNode=f;e:switch(vt(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&oa(t)}}return Ve(t),ud(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,r),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&oa(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(l(166));if(e=pe.current,ro(t)){if(e=t.stateNode,r=t.memoizedProps,s=null,u=pt,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[mt]=t,e=!!(e.nodeValue===r||s!==null&&s.suppressHydrationWarning===!0||pv(e.nodeValue,r)),e||Ra(t,!0)}else e=Rl(e).createTextNode(s),e[mt]=t,t.stateNode=e}return Ve(t),null;case 31:if(r=t.memoizedState,e===null||e.memoizedState!==null){if(s=ro(t),r!==null){if(e===null){if(!s)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[mt]=t}else mr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else r=xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return t.flags&256?(Ft(t),t):(Ft(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ve(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ro(t),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[mt]=t}else mr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),u=!1}else u=xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(Ft(t),t):(Ft(t),null)}return Ft(t),(t.flags&128)!==0?(t.lanes=r,t):(r=s!==null,e=e!==null&&e.memoizedState!==null,r&&(s=t.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),r!==e&&r&&(t.child.flags|=8192),gl(t,t.updateQueue),Ve(t),null);case 4:return je(),e===null&&Dd(t.stateNode.containerInfo),Ve(t),null;case 10:return ta(t.type),Ve(t),null;case 19:if(q(et),s=t.memoizedState,s===null)return Ve(t),null;if(u=(t.flags&128)!==0,f=s.rendering,f===null)if(u)Ls(s,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=al(e),f!==null){for(t.flags|=128,Ls(s,!1),e=f.updateQueue,t.updateQueue=e,gl(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)Fp(r,e),r=r.sibling;return ae(et,et.current&1|2),ke&&Wn(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&rt()>wl&&(t.flags|=128,u=!0,Ls(s,!1),t.lanes=4194304)}else{if(!u)if(e=al(f),e!==null){if(t.flags|=128,u=!0,e=e.updateQueue,t.updateQueue=e,gl(t,e),Ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ke)return Ve(t),null}else 2*rt()-s.renderingStartTime>wl&&r!==536870912&&(t.flags|=128,u=!0,Ls(s,!1),t.lanes=4194304);s.isBackwards?(f.sibling=t.child,t.child=f):(e=s.last,e!==null?e.sibling=f:t.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rt(),e.sibling=null,r=et.current,ae(et,u?r&1|2:r&1),ke&&Wn(t,s.treeForkCount),e):(Ve(t),null);case 22:case 23:return Ft(t),Lu(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(r&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),r=t.updateQueue,r!==null&&gl(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==r&&(t.flags|=2048),e!==null&&q(gr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(ot),Ve(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function lj(e,t){switch(bu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(ot),je(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return It(t),null;case 31:if(t.memoizedState!==null){if(Ft(t),t.alternate===null)throw Error(l(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(et),null;case 4:return je(),null;case 10:return ta(t.type),null;case 22:case 23:return Ft(t),Lu(),e!==null&&q(gr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(ot),null;case 25:return null;default:return null}}function yg(e,t){switch(bu(t),t.tag){case 3:ta(ot),je();break;case 26:case 27:case 5:It(t);break;case 4:je();break;case 31:t.memoizedState!==null&&Ft(t);break;case 13:Ft(t);break;case 19:q(et);break;case 10:ta(t.type);break;case 22:case 23:Ft(t),Lu(),e!==null&&q(gr);break;case 24:ta(ot)}}function _s(e,t){try{var r=t.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var u=s.next;r=u;do{if((r.tag&e)===e){s=void 0;var f=r.create,b=r.inst;s=f(),b.destroy=s}r=r.next}while(r!==u)}}catch(j){Ie(t,t.return,j)}}function Ua(e,t,r){try{var s=t.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var b=s.inst,j=b.destroy;if(j!==void 0){b.destroy=void 0,u=t;var D=r,H=j;try{H()}catch(K){Ie(u,D,K)}}}s=s.next}while(s!==f)}}catch(K){Ie(t,t.return,K)}}function xg(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{uh(t,r)}catch(s){Ie(e,e.return,s)}}}function wg(e,t,r){r.props=wr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(s){Ie(e,t,s)}}function zs(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof r=="function"?e.refCleanup=r(s):r.current=s}}catch(u){Ie(e,t,u)}}function Pn(e,t){var r=e.ref,s=e.refCleanup;if(r!==null)if(typeof s=="function")try{s()}catch(u){Ie(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Ie(e,t,u)}else r.current=null}function Sg(e){var t=e.type,r=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&s.focus();break e;case"img":r.src?s.src=r.src:r.srcSet&&(s.srcset=r.srcSet)}}catch(u){Ie(e,e.return,u)}}function dd(e,t,r){try{var s=e.stateNode;Tj(s,e.type,r,t),s[kt]=t}catch(u){Ie(e,e.return,u)}}function jg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function md(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Zn));else if(s!==4&&(s===27&&Ga(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(md(e,t,r),e=e.sibling;e!==null;)md(e,t,r),e=e.sibling}function vl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(s===27&&Ga(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(vl(e,t,r),e=e.sibling;e!==null;)vl(e,t,r),e=e.sibling}function Eg(e){var t=e.stateNode,r=e.memoizedProps;try{for(var s=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);vt(t,s,r),t[mt]=e,t[kt]=r}catch(f){Ie(e,e.return,f)}}var sa=!1,lt=!1,pd=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,dt=null;function cj(e,t){if(e=e.containerInfo,zd=Ul,e=Bp(e),iu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var b=0,j=-1,D=-1,H=0,K=0,ee=e,J=null;t:for(;;){for(var G;ee!==r||u!==0&&ee.nodeType!==3||(j=b+u),ee!==f||s!==0&&ee.nodeType!==3||(D=b+s),ee.nodeType===3&&(b+=ee.nodeValue.length),(G=ee.firstChild)!==null;)J=ee,ee=G;for(;;){if(ee===e)break t;if(J===r&&++H===u&&(j=b),J===f&&++K===s&&(D=b),(G=ee.nextSibling)!==null)break;ee=J,J=ee.parentNode}ee=G}r=j===-1||D===-1?null:{start:j,end:D}}else r=null}r=r||{start:0,end:0}}else r=null;for(Md={focusedElem:e,selectionRange:r},Ul=!1,dt=t;dt!==null;)if(t=dt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,dt=e;else for(;dt!==null;){switch(t=dt,f=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)u=e[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=t,u=f.memoizedProps,f=f.memoizedState,s=r.stateNode;try{var fe=wr(r.type,u);e=s.getSnapshotBeforeUpdate(fe,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ve){Ie(r,r.return,ve)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)Id(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Id(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,dt=e;break}dt=t.return}}function Cg(e,t,r){var s=r.flags;switch(r.tag){case 0:case 11:case 15:la(e,r),s&4&&_s(5,r);break;case 1:if(la(e,r),s&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(b){Ie(r,r.return,b)}else{var u=wr(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Ie(r,r.return,b)}}s&64&&xg(r),s&512&&zs(r,r.return);break;case 3:if(la(e,r),s&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{uh(e,t)}catch(b){Ie(r,r.return,b)}}break;case 27:t===null&&s&4&&Eg(r);case 26:case 5:la(e,r),t===null&&s&4&&Sg(r),s&512&&zs(r,r.return);break;case 12:la(e,r);break;case 31:la(e,r),s&4&&kg(e,r);break;case 13:la(e,r),s&4&&Tg(e,r),s&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=bj.bind(null,r),Uj(e,r))));break;case 22:if(s=r.memoizedState!==null||sa,!s){t=t!==null&&t.memoizedState!==null||lt,u=sa;var f=lt;sa=s,(lt=t)&&!f?ca(e,r,(r.subtreeFlags&8772)!==0):la(e,r),sa=u,lt=f}break;case 30:break;default:la(e,r)}}function Ag(e){var t=e.alternate;t!==null&&(e.alternate=null,Ag(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&qc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Rt=!1;function ia(e,t,r){for(r=r.child;r!==null;)Og(e,t,r),r=r.sibling}function Og(e,t,r){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(os,r)}catch{}switch(r.tag){case 26:lt||Pn(r,t),ia(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:lt||Pn(r,t);var s=Ye,u=Rt;Ga(r.type)&&(Ye=r.stateNode,Rt=!1),ia(e,t,r),qs(r.stateNode),Ye=s,Rt=u;break;case 5:lt||Pn(r,t);case 6:if(s=Ye,u=Rt,Ye=null,ia(e,t,r),Ye=s,Rt=u,Ye!==null)if(Rt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(r.stateNode)}catch(f){Ie(r,t,f)}else try{Ye.removeChild(r.stateNode)}catch(f){Ie(r,t,f)}break;case 18:Ye!==null&&(Rt?(e=Ye,xv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Co(e)):xv(Ye,r.stateNode));break;case 4:s=Ye,u=Rt,Ye=r.stateNode.containerInfo,Rt=!0,ia(e,t,r),Ye=s,Rt=u;break;case 0:case 11:case 14:case 15:Ua(2,r,t),lt||Ua(4,r,t),ia(e,t,r);break;case 1:lt||(Pn(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"&&wg(r,t,s)),ia(e,t,r);break;case 21:ia(e,t,r);break;case 22:lt=(s=lt)||r.memoizedState!==null,ia(e,t,r),lt=s;break;default:ia(e,t,r)}}function kg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Co(e)}catch(r){Ie(t,t.return,r)}}}function Tg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Co(e)}catch(r){Ie(t,t.return,r)}}function uj(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ng),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ng),t;default:throw Error(l(435,e.tag))}}function bl(e,t){var r=uj(e);t.forEach(function(s){if(!r.has(s)){r.add(s);var u=yj.bind(null,e,s);s.then(u,u)}})}function Dt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var u=r[s],f=e,b=t,j=b;e:for(;j!==null;){switch(j.tag){case 27:if(Ga(j.type)){Ye=j.stateNode,Rt=!1;break e}break;case 5:Ye=j.stateNode,Rt=!1;break e;case 3:case 4:Ye=j.stateNode.containerInfo,Rt=!0;break e}j=j.return}if(Ye===null)throw Error(l(160));Og(f,b,u),Ye=null,Rt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Rg(t,e),t=t.sibling}var kn=null;function Rg(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dt(t,e),Lt(e),s&4&&(Ua(3,e,e.return),_s(3,e),Ua(5,e,e.return));break;case 1:Dt(t,e),Lt(e),s&512&&(lt||r===null||Pn(r,r.return)),s&64&&sa&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?s:r.concat(s))));break;case 26:var u=kn;if(Dt(t,e),Lt(e),s&512&&(lt||r===null||Pn(r,r.return)),s&4){var f=r!==null?r.memoizedState:null;if(s=e.memoizedState,r===null)if(s===null)if(e.stateNode===null){e:{s=e.type,r=e.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ls]||f[mt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),vt(f,s,r),f[mt]=e,ut(f),s=f;break e;case"link":var b=Rv("link","href",u).get(s+(r.href||""));if(b){for(var j=0;j<b.length;j++)if(f=b[j],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(j,1);break t}}f=u.createElement(s),vt(f,s,r),u.head.appendChild(f);break;case"meta":if(b=Rv("meta","content",u).get(s+(r.content||""))){for(j=0;j<b.length;j++)if(f=b[j],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(j,1);break t}}f=u.createElement(s),vt(f,s,r),u.head.appendChild(f);break;default:throw Error(l(468,s))}f[mt]=e,ut(f),s=f}e.stateNode=s}else Dv(u,e.type,e.stateNode);else e.stateNode=Tv(u,s,e.memoizedProps);else f!==s?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,s===null?Dv(u,e.type,e.stateNode):Tv(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&dd(e,e.memoizedProps,r.memoizedProps)}break;case 27:Dt(t,e),Lt(e),s&512&&(lt||r===null||Pn(r,r.return)),r!==null&&s&4&&dd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Dt(t,e),Lt(e),s&512&&(lt||r===null||Pn(r,r.return)),e.flags&32){u=e.stateNode;try{Yr(u,"")}catch(fe){Ie(e,e.return,fe)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,dd(e,u,r!==null?r.memoizedProps:u)),s&1024&&(pd=!0);break;case 6:if(Dt(t,e),Lt(e),s&4){if(e.stateNode===null)throw Error(l(162));s=e.memoizedProps,r=e.stateNode;try{r.nodeValue=s}catch(fe){Ie(e,e.return,fe)}}break;case 3:if(_l=null,u=kn,kn=Dl(t.containerInfo),Dt(t,e),kn=u,Lt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Co(t.containerInfo)}catch(fe){Ie(e,e.return,fe)}pd&&(pd=!1,Dg(e));break;case 4:s=kn,kn=Dl(e.stateNode.containerInfo),Dt(t,e),Lt(e),kn=s;break;case 12:Dt(t,e),Lt(e);break;case 31:Dt(t,e),Lt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,bl(e,s)));break;case 13:Dt(t,e),Lt(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(xl=rt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,bl(e,s)));break;case 22:u=e.memoizedState!==null;var D=r!==null&&r.memoizedState!==null,H=sa,K=lt;if(sa=H||u,lt=K||D,Dt(t,e),lt=K,sa=H,Lt(e),s&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(r===null||D||sa||lt||Sr(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){D=r=t;try{if(f=D.stateNode,u)b=f.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{j=D.stateNode;var ee=D.memoizedProps.style,J=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;j.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(fe){Ie(D,D.return,fe)}}}else if(t.tag===6){if(r===null){D=t;try{D.stateNode.nodeValue=u?"":D.memoizedProps}catch(fe){Ie(D,D.return,fe)}}}else if(t.tag===18){if(r===null){D=t;try{var G=D.stateNode;u?wv(G,!0):wv(D.stateNode,!1)}catch(fe){Ie(D,D.return,fe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(r=s.retryQueue,r!==null&&(s.retryQueue=null,bl(e,r))));break;case 19:Dt(t,e),Lt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,bl(e,s)));break;case 30:break;case 21:break;default:Dt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{for(var r,s=e.return;s!==null;){if(jg(s)){r=s;break}s=s.return}if(r==null)throw Error(l(160));switch(r.tag){case 27:var u=r.stateNode,f=fd(e);vl(e,f,u);break;case 5:var b=r.stateNode;r.flags&32&&(Yr(b,""),r.flags&=-33);var j=fd(e);vl(e,j,b);break;case 3:case 4:var D=r.stateNode.containerInfo,H=fd(e);md(e,H,D);break;default:throw Error(l(161))}}catch(K){Ie(e,e.return,K)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Dg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function la(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Cg(e,t.alternate,t),t=t.sibling}function Sr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ua(4,t,t.return),Sr(t);break;case 1:Pn(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&wg(t,t.return,r),Sr(t);break;case 27:qs(t.stateNode);case 26:case 5:Pn(t,t.return),Sr(t);break;case 22:t.memoizedState===null&&Sr(t);break;case 30:Sr(t);break;default:Sr(t)}e=e.sibling}}function ca(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,u=e,f=t,b=f.flags;switch(f.tag){case 0:case 11:case 15:ca(u,f,r),_s(4,f);break;case 1:if(ca(u,f,r),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(H){Ie(s,s.return,H)}if(s=f,u=s.updateQueue,u!==null){var j=s.stateNode;try{var D=u.shared.hiddenCallbacks;if(D!==null)for(u.shared.hiddenCallbacks=null,u=0;u<D.length;u++)ch(D[u],j)}catch(H){Ie(s,s.return,H)}}r&&b&64&&xg(f),zs(f,f.return);break;case 27:Eg(f);case 26:case 5:ca(u,f,r),r&&s===null&&b&4&&Sg(f),zs(f,f.return);break;case 12:ca(u,f,r);break;case 31:ca(u,f,r),r&&b&4&&kg(u,f);break;case 13:ca(u,f,r),r&&b&4&&Tg(u,f);break;case 22:f.memoizedState===null&&ca(u,f,r),zs(f,f.return);break;case 30:break;default:ca(u,f,r)}t=t.sibling}}function hd(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&ws(r))}function gd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ws(e))}function Tn(e,t,r,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lg(e,t,r,s),t=t.sibling}function Lg(e,t,r,s){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Tn(e,t,r,s),u&2048&&_s(9,t);break;case 1:Tn(e,t,r,s);break;case 3:Tn(e,t,r,s),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ws(e)));break;case 12:if(u&2048){Tn(e,t,r,s),e=t.stateNode;try{var f=t.memoizedProps,b=f.id,j=f.onPostCommit;typeof j=="function"&&j(b,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(D){Ie(t,t.return,D)}}else Tn(e,t,r,s);break;case 31:Tn(e,t,r,s);break;case 13:Tn(e,t,r,s);break;case 23:break;case 22:f=t.stateNode,b=t.alternate,t.memoizedState!==null?f._visibility&2?Tn(e,t,r,s):Ms(e,t):f._visibility&2?Tn(e,t,r,s):(f._visibility|=2,ho(e,t,r,s,(t.subtreeFlags&10256)!==0||!1)),u&2048&&hd(b,t);break;case 24:Tn(e,t,r,s),u&2048&&gd(t.alternate,t);break;default:Tn(e,t,r,s)}}function ho(e,t,r,s,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var f=e,b=t,j=r,D=s,H=b.flags;switch(b.tag){case 0:case 11:case 15:ho(f,b,j,D,u),_s(8,b);break;case 23:break;case 22:var K=b.stateNode;b.memoizedState!==null?K._visibility&2?ho(f,b,j,D,u):Ms(f,b):(K._visibility|=2,ho(f,b,j,D,u)),u&&H&2048&&hd(b.alternate,b);break;case 24:ho(f,b,j,D,u),u&&H&2048&&gd(b.alternate,b);break;default:ho(f,b,j,D,u)}t=t.sibling}}function Ms(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,s=t,u=s.flags;switch(s.tag){case 22:Ms(r,s),u&2048&&hd(s.alternate,s);break;case 24:Ms(r,s),u&2048&&gd(s.alternate,s);break;default:Ms(r,s)}t=t.sibling}}var Bs=8192;function go(e,t,r){if(e.subtreeFlags&Bs)for(e=e.child;e!==null;)_g(e,t,r),e=e.sibling}function _g(e,t,r){switch(e.tag){case 26:go(e,t,r),e.flags&Bs&&e.memoizedState!==null&&Zj(r,kn,e.memoizedState,e.memoizedProps);break;case 5:go(e,t,r);break;case 3:case 4:var s=kn;kn=Dl(e.stateNode.containerInfo),go(e,t,r),kn=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Bs,Bs=16777216,go(e,t,r),Bs=s):go(e,t,r));break;default:go(e,t,r)}}function zg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Us(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];dt=s,Bg(s,e)}zg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mg(e),e=e.sibling}function Mg(e){switch(e.tag){case 0:case 11:case 15:Us(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:Us(e);break;case 12:Us(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yl(e)):Us(e);break;default:Us(e)}}function yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];dt=s,Bg(s,e)}zg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ua(8,t,t.return),yl(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,yl(t));break;default:yl(t)}e=e.sibling}}function Bg(e,t){for(;dt!==null;){var r=dt;switch(r.tag){case 0:case 11:case 15:Ua(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var s=r.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ws(r.memoizedState.cache)}if(s=r.child,s!==null)s.return=r,dt=s;else e:for(r=e;dt!==null;){s=dt;var u=s.sibling,f=s.return;if(Ag(s),s===r){dt=null;break e}if(u!==null){u.return=f,dt=u;break e}dt=f}}}var dj={getCacheForType:function(e){var t=ht(ot),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r},cacheSignal:function(){return ht(ot).controller.signal}},fj=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ge=null,Ee=null,Ae=0,Ue=0,Vt=null,Ia=!1,vo=!1,vd=!1,ua=0,We=0,Pa=0,jr=0,bd=0,Yt=0,bo=0,Is=null,_t=null,yd=!1,xl=0,Ug=0,wl=1/0,Sl=null,$a=null,ct=0,Ha=null,yo=null,da=0,xd=0,wd=null,Ig=null,Ps=0,Sd=null;function Xt(){return(Le&2)!==0&&Ae!==0?Ae&-Ae:k.T!==null?Od():tp()}function Pg(){if(Yt===0)if((Ae&536870912)===0||ke){var e=Ti;Ti<<=1,(Ti&3932160)===0&&(Ti=262144),Yt=e}else Yt=536870912;return e=Gt.current,e!==null&&(e.flags|=32),Yt}function zt(e,t,r){(e===Ge&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(xo(e,0),Ja(e,Ae,Yt,!1)),is(e,r),((Le&2)===0||e!==Ge)&&(e===Ge&&((Le&2)===0&&(jr|=r),We===4&&Ja(e,Ae,Yt,!1)),$n(e))}function $g(e,t,r){if((Le&6)!==0)throw Error(l(327));var s=!r&&(t&127)===0&&(t&e.expiredLanes)===0||ss(e,t),u=s?hj(e,t):Ed(e,t,!0),f=s;do{if(u===0){vo&&!s&&Ja(e,t,0,!1);break}else{if(r=e.current.alternate,f&&!mj(r)){u=Ed(e,t,!1),f=!1;continue}if(u===2){if(f=t,e.errorRecoveryDisabledLanes&f)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){t=b;e:{var j=e;u=Is;var D=j.current.memoizedState.isDehydrated;if(D&&(xo(j,b).flags|=256),b=Ed(j,b,!1),b!==2){if(vd&&!D){j.errorRecoveryDisabledLanes|=f,jr|=f,u=4;break e}f=_t,_t=u,f!==null&&(_t===null?_t=f:_t.push.apply(_t,f))}u=b}if(f=!1,u!==2)continue}}if(u===1){xo(e,0),Ja(e,t,0,!0);break}e:{switch(s=e,f=u,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Ja(s,t,Yt,!Ia);break e;case 2:_t=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(u=xl+300-rt(),10<u)){if(Ja(s,t,Yt,!Ia),Di(s,0,!0)!==0)break e;da=t,s.timeoutHandle=bv(Hg.bind(null,s,r,_t,Sl,yd,t,Yt,jr,bo,Ia,f,"Throttled",-0,0),u);break e}Hg(s,r,_t,Sl,yd,t,Yt,jr,bo,Ia,f,null,-0,0)}}break}while(!0);$n(e)}function Hg(e,t,r,s,u,f,b,j,D,H,K,ee,J,G){if(e.timeoutHandle=-1,ee=t.subtreeFlags,ee&8192||(ee&16785408)===16785408){ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zn},_g(t,f,ee);var fe=(f&62914560)===f?xl-rt():(f&4194048)===f?Ug-rt():0;if(fe=Kj(ee,fe),fe!==null){da=f,e.cancelPendingCommit=fe(Zg.bind(null,e,t,f,r,s,u,b,j,D,K,ee,null,J,G)),Ja(e,f,b,!H);return}}Zg(e,t,f,r,s,u,b,j,D)}function mj(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var s=0;s<r.length;s++){var u=r[s],f=u.getSnapshot;u=u.value;try{if(!Jt(f(),u))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ja(e,t,r,s){t&=~bd,t&=~jr,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var u=t;0<u;){var f=31-Ht(u),b=1<<f;s[f]=-1,u&=~b}r!==0&&Qm(e,r,t)}function jl(){return(Le&6)===0?($s(0),!1):!0}function jd(){if(Ee!==null){if(Ue===0)var e=Ee.return;else e=Ee,ea=pr=null,Iu(e),co=null,js=0,e=Ee;for(;e!==null;)yg(e.alternate,e),e=e.return;Ee=null}}function xo(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Lj(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),da=0,jd(),Ge=e,Ee=r=Qn(e.current,null),Ae=t,Ue=0,Vt=null,Ia=!1,vo=ss(e,t),vd=!1,bo=Yt=bd=jr=Pa=We=0,_t=Is=null,yd=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var u=31-Ht(s),f=1<<u;t|=e[u],s&=~f}return ua=t,qi(),r}function Jg(e,t){we=null,k.H=Rs,t===lo||t===Qi?(t=oh(),Ue=3):t===Au?(t=oh(),Ue=4):Ue=t===td?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Vt=t,Ee===null&&(We=1,fl(e,ln(t,e.current)))}function qg(){var e=Gt.current;return e===null?!0:(Ae&4194048)===Ae?fn===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===fn:!1}function Gg(){var e=k.H;return k.H=Rs,e===null?Rs:e}function Fg(){var e=k.A;return k.A=dj,e}function El(){We=4,Ia||(Ae&4194048)!==Ae&&Gt.current!==null||(vo=!0),(Pa&134217727)===0&&(jr&134217727)===0||Ge===null||Ja(Ge,Ae,Yt,!1)}function Ed(e,t,r){var s=Le;Le|=2;var u=Gg(),f=Fg();(Ge!==e||Ae!==t)&&(Sl=null,xo(e,t)),t=!1;var b=We;e:do try{if(Ue!==0&&Ee!==null){var j=Ee,D=Vt;switch(Ue){case 8:jd(),b=6;break e;case 3:case 2:case 9:case 6:Gt.current===null&&(t=!0);var H=Ue;if(Ue=0,Vt=null,wo(e,j,D,H),r&&vo){b=0;break e}break;default:H=Ue,Ue=0,Vt=null,wo(e,j,D,H)}}pj(),b=We;break}catch(K){Jg(e,K)}while(!0);return t&&e.shellSuspendCounter++,ea=pr=null,Le=s,k.H=u,k.A=f,Ee===null&&(Ge=null,Ae=0,qi()),b}function pj(){for(;Ee!==null;)Vg(Ee)}function hj(e,t){var r=Le;Le|=2;var s=Gg(),u=Fg();Ge!==e||Ae!==t?(Sl=null,wl=rt()+500,xo(e,t)):vo=ss(e,t);e:do try{if(Ue!==0&&Ee!==null){t=Ee;var f=Vt;t:switch(Ue){case 1:Ue=0,Vt=null,wo(e,t,f,1);break;case 2:case 9:if(ah(f)){Ue=0,Vt=null,Yg(t);break}t=function(){Ue!==2&&Ue!==9||Ge!==e||(Ue=7),$n(e)},f.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:ah(f)?(Ue=0,Vt=null,Yg(t)):(Ue=0,Vt=null,wo(e,t,f,7));break;case 5:var b=null;switch(Ee.tag){case 26:b=Ee.memoizedState;case 5:case 27:var j=Ee;if(b?Lv(b):j.stateNode.complete){Ue=0,Vt=null;var D=j.sibling;if(D!==null)Ee=D;else{var H=j.return;H!==null?(Ee=H,Nl(H)):Ee=null}break t}}Ue=0,Vt=null,wo(e,t,f,5);break;case 6:Ue=0,Vt=null,wo(e,t,f,6);break;case 8:jd(),We=6;break e;default:throw Error(l(462))}}gj();break}catch(K){Jg(e,K)}while(!0);return ea=pr=null,k.H=s,k.A=u,Le=r,Ee!==null?0:(Ge=null,Ae=0,qi(),We)}function gj(){for(;Ee!==null&&!Ir();)Vg(Ee)}function Vg(e){var t=vg(e.alternate,e,ua);e.memoizedProps=e.pendingProps,t===null?Nl(e):Ee=t}function Yg(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=dg(r,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=dg(r,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:Iu(t);default:yg(r,t),t=Ee=Fp(t,ua),t=vg(r,t,ua)}e.memoizedProps=e.pendingProps,t===null?Nl(e):Ee=t}function wo(e,t,r,s){ea=pr=null,Iu(t),co=null,js=0;var u=t.return;try{if(rj(e,u,t,r,Ae)){We=1,fl(e,ln(r,e.current)),Ee=null;return}}catch(f){if(u!==null)throw Ee=u,f;We=1,fl(e,ln(r,e.current)),Ee=null;return}t.flags&32768?(ke||s===1?e=!0:vo||(Ae&536870912)!==0?e=!1:(Ia=e=!0,(s===2||s===9||s===3||s===6)&&(s=Gt.current,s!==null&&s.tag===13&&(s.flags|=16384))),Xg(t,e)):Nl(t)}function Nl(e){var t=e;do{if((t.flags&32768)!==0){Xg(t,Ia);return}e=t.return;var r=ij(t.alternate,t,ua);if(r!==null){Ee=r;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);We===0&&(We=5)}function Xg(e,t){do{var r=lj(e.alternate,e);if(r!==null){r.flags&=32767,Ee=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=r}while(e!==null);We=6,Ee=null}function Zg(e,t,r,s,u,f,b,j,D){e.cancelPendingCommit=null;do Cl();while(ct!==0);if((Le&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=fu,X0(e,r,f,b,j,D),e===Ge&&(Ee=Ge=null,Ae=0),yo=t,Ha=e,da=r,xd=f,wd=u,Ig=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xj(Bn,function(){return tv(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=k.T,k.T=null,u=F.p,F.p=2,b=Le,Le|=4;try{cj(e,t,r)}finally{Le=b,F.p=u,k.T=s}}ct=1,Kg(),Qg(),Wg()}}function Kg(){if(ct===1){ct=0;var e=Ha,t=yo,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=k.T,k.T=null;var s=F.p;F.p=2;var u=Le;Le|=4;try{Rg(t,e);var f=Md,b=Bp(e.containerInfo),j=f.focusedElem,D=f.selectionRange;if(b!==j&&j&&j.ownerDocument&&Mp(j.ownerDocument.documentElement,j)){if(D!==null&&iu(j)){var H=D.start,K=D.end;if(K===void 0&&(K=H),"selectionStart"in j)j.selectionStart=H,j.selectionEnd=Math.min(K,j.value.length);else{var ee=j.ownerDocument||document,J=ee&&ee.defaultView||window;if(J.getSelection){var G=J.getSelection(),fe=j.textContent.length,ve=Math.min(D.start,fe),qe=D.end===void 0?ve:Math.min(D.end,fe);!G.extend&&ve>qe&&(b=qe,qe=ve,ve=b);var I=zp(j,ve),M=zp(j,qe);if(I&&M&&(G.rangeCount!==1||G.anchorNode!==I.node||G.anchorOffset!==I.offset||G.focusNode!==M.node||G.focusOffset!==M.offset)){var $=ee.createRange();$.setStart(I.node,I.offset),G.removeAllRanges(),ve>qe?(G.addRange($),G.extend(M.node,M.offset)):($.setEnd(M.node,M.offset),G.addRange($))}}}}for(ee=[],G=j;G=G.parentNode;)G.nodeType===1&&ee.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof j.focus=="function"&&j.focus(),j=0;j<ee.length;j++){var Q=ee[j];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Ul=!!zd,Md=zd=null}finally{Le=u,F.p=s,k.T=r}}e.current=t,ct=2}}function Qg(){if(ct===2){ct=0;var e=Ha,t=yo,r=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||r){r=k.T,k.T=null;var s=F.p;F.p=2;var u=Le;Le|=4;try{Cg(e,t.alternate,t)}finally{Le=u,F.p=s,k.T=r}}ct=3}}function Wg(){if(ct===4||ct===3){ct=0,Pr();var e=Ha,t=yo,r=da,s=Ig;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ct=5:(ct=0,yo=Ha=null,ev(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&($a=null),Hc(r),t=t.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(os,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=k.T,u=F.p,F.p=2,k.T=null;try{for(var f=e.onRecoverableError,b=0;b<s.length;b++){var j=s[b];f(j.value,{componentStack:j.stack})}}finally{k.T=t,F.p=u}}(da&3)!==0&&Cl(),$n(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===Sd?Ps++:(Ps=0,Sd=e):Ps=0,$s(0)}}function ev(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ws(t)))}function Cl(){return Kg(),Qg(),Wg(),tv()}function tv(){if(ct!==5)return!1;var e=Ha,t=xd;xd=0;var r=Hc(da),s=k.T,u=F.p;try{F.p=32>r?32:r,k.T=null,r=wd,wd=null;var f=Ha,b=da;if(ct=0,yo=Ha=null,da=0,(Le&6)!==0)throw Error(l(331));var j=Le;if(Le|=4,Mg(f.current),Lg(f,f.current,b,r),Le=j,$s(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(os,f)}catch{}return!0}finally{F.p=u,k.T=s,ev(e,t)}}function nv(e,t,r){t=ln(r,t),t=ed(e.stateNode,t,2),e=za(e,t,2),e!==null&&(is(e,2),$n(e))}function Ie(e,t,r){if(e.tag===3)nv(e,e,r);else for(;t!==null;){if(t.tag===3){nv(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&($a===null||!$a.has(s))){e=ln(r,e),r=ag(2),s=za(t,r,2),s!==null&&(rg(r,s,t,e),is(s,2),$n(s));break}}t=t.return}}function Nd(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new fj;var u=new Set;s.set(t,u)}else u=s.get(t),u===void 0&&(u=new Set,s.set(t,u));u.has(r)||(vd=!0,u.add(r),e=vj.bind(null,e,t,r),t.then(e,e))}function vj(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ge===e&&(Ae&r)===r&&(We===4||We===3&&(Ae&62914560)===Ae&&300>rt()-xl?(Le&2)===0&&xo(e,0):bd|=r,bo===Ae&&(bo=0)),$n(e)}function av(e,t){t===0&&(t=Km()),e=dr(e,t),e!==null&&(is(e,t),$n(e))}function bj(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),av(e,r)}function yj(e,t){var r=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(t),av(e,r)}function xj(e,t){return Pt(e,t)}var Al=null,So=null,Cd=!1,Ol=!1,Ad=!1,qa=0;function $n(e){e!==So&&e.next===null&&(So===null?Al=So=e:So=So.next=e),Ol=!0,Cd||(Cd=!0,Sj())}function $s(e,t){if(!Ad&&Ol){Ad=!0;do for(var r=!1,s=Al;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var b=s.suspendedLanes,j=s.pingedLanes;f=(1<<31-Ht(42|e)+1)-1,f&=u&~(b&~j),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,iv(s,f))}else f=Ae,f=Di(s,s===Ge?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||ss(s,f)||(r=!0,iv(s,f));s=s.next}while(r);Ad=!1}}function wj(){rv()}function rv(){Ol=Cd=!1;var e=0;qa!==0&&Dj()&&(e=qa);for(var t=rt(),r=null,s=Al;s!==null;){var u=s.next,f=ov(s,t);f===0?(s.next=null,r===null?Al=u:r.next=u,u===null&&(So=r)):(r=s,(e!==0||(f&3)!==0)&&(Ol=!0)),s=u}ct!==0&&ct!==5||$s(e),qa!==0&&(qa=0)}function ov(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var b=31-Ht(f),j=1<<b,D=u[b];D===-1?((j&r)===0||(j&s)!==0)&&(u[b]=Y0(j,t)):D<=t&&(e.expiredLanes|=j),f&=~j}if(t=Ge,r=Ae,r=Di(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,r===0||e===t&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Mn(s),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||ss(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(s!==null&&Mn(s),Hc(r)){case 2:case 8:r=an;break;case 32:r=Bn;break;case 268435456:r=Zm;break;default:r=Bn}return s=sv.bind(null,e),r=Pt(r,s),e.callbackPriority=t,e.callbackNode=r,t}return s!==null&&s!==null&&Mn(s),e.callbackPriority=2,e.callbackNode=null,2}function sv(e,t){if(ct!==0&&ct!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Cl()&&e.callbackNode!==r)return null;var s=Ae;return s=Di(e,e===Ge?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:($g(e,s,t),ov(e,rt()),e.callbackNode!=null&&e.callbackNode===r?sv.bind(null,e):null)}function iv(e,t){if(Cl())return null;$g(e,t,!0)}function Sj(){_j(function(){(Le&6)!==0?Pt(Ce,wj):rv()})}function Od(){if(qa===0){var e=so;e===0&&(e=ki,ki<<=1,(ki&261888)===0&&(ki=256)),qa=e}return qa}function lv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mi(""+e)}function cv(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function jj(e,t,r,s,u){if(t==="submit"&&r&&r.stateNode===u){var f=lv((u[kt]||null).action),b=s.submitter;b&&(t=(t=b[kt]||null)?lv(t.formAction):b.getAttribute("formAction"),t!==null&&(f=t,b=null));var j=new Pi("action","action",null,s,u);e.push({event:j,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(qa!==0){var D=b?cv(u,b):new FormData(u);Yu(r,{pending:!0,data:D,method:u.method,action:f},null,D)}}else typeof f=="function"&&(j.preventDefault(),D=b?cv(u,b):new FormData(u),Yu(r,{pending:!0,data:D,method:u.method,action:f},f,D))},currentTarget:u}]})}}for(var kd=0;kd<du.length;kd++){var Td=du[kd],Ej=Td.toLowerCase(),Nj=Td[0].toUpperCase()+Td.slice(1);On(Ej,"on"+Nj)}On(Pp,"onAnimationEnd"),On($p,"onAnimationIteration"),On(Hp,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On($S,"onTransitionRun"),On(HS,"onTransitionStart"),On(JS,"onTransitionCancel"),On(Jp,"onTransitionEnd"),Fr("onMouseEnter",["mouseout","mouseover"]),Fr("onMouseLeave",["mouseout","mouseover"]),Fr("onPointerEnter",["pointerout","pointerover"]),Fr("onPointerLeave",["pointerout","pointerover"]),ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ir("onBeforeInput",["compositionend","keypress","textInput","paste"]),ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cj=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hs));function uv(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],u=s.event;s=s.listeners;e:{var f=void 0;if(t)for(var b=s.length-1;0<=b;b--){var j=s[b],D=j.instance,H=j.currentTarget;if(j=j.listener,D!==f&&u.isPropagationStopped())break e;f=j,u.currentTarget=H;try{f(u)}catch(K){Ji(K)}u.currentTarget=null,f=D}else for(b=0;b<s.length;b++){if(j=s[b],D=j.instance,H=j.currentTarget,j=j.listener,D!==f&&u.isPropagationStopped())break e;f=j,u.currentTarget=H;try{f(u)}catch(K){Ji(K)}u.currentTarget=null,f=D}}}}function Ne(e,t){var r=t[Jc];r===void 0&&(r=t[Jc]=new Set);var s=e+"__bubble";r.has(s)||(dv(t,e,2,!1),r.add(s))}function Rd(e,t,r){var s=0;t&&(s|=4),dv(r,e,s,t)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Dd(e){if(!e[kl]){e[kl]=!0,rp.forEach(function(r){r!=="selectionchange"&&(Cj.has(r)||Rd(r,!1,e),Rd(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kl]||(t[kl]=!0,Rd("selectionchange",!1,t))}}function dv(e,t,r,s){switch(Pv(t)){case 2:var u=eE;break;case 8:u=tE;break;default:u=Vd}r=u.bind(null,t,r,e),u=void 0,!Qc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(t,r,{capture:!0,passive:u}):e.addEventListener(t,r,!0):u!==void 0?e.addEventListener(t,r,{passive:u}):e.addEventListener(t,r,!1)}function Ld(e,t,r,s,u){var f=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var b=s.tag;if(b===3||b===4){var j=s.stateNode.containerInfo;if(j===u)break;if(b===4)for(b=s.return;b!==null;){var D=b.tag;if((D===3||D===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;j!==null;){if(b=Jr(j),b===null)return;if(D=b.tag,D===5||D===6||D===26||D===27){s=f=b;continue e}j=j.parentNode}}s=s.return}gp(function(){var H=f,K=Zc(r),ee=[];e:{var J=qp.get(e);if(J!==void 0){var G=Pi,fe=e;switch(e){case"keypress":if(Ui(r)===0)break e;case"keydown":case"keyup":G=yS;break;case"focusin":fe="focus",G=nu;break;case"focusout":fe="blur",G=nu;break;case"beforeblur":case"afterblur":G=nu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=iS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=SS;break;case Pp:case $p:case Hp:G=uS;break;case Jp:G=ES;break;case"scroll":case"scrollend":G=oS;break;case"wheel":G=CS;break;case"copy":case"cut":case"paste":G=fS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=wp;break;case"toggle":case"beforetoggle":G=OS}var ve=(t&4)!==0,qe=!ve&&(e==="scroll"||e==="scrollend"),I=ve?J!==null?J+"Capture":null:J;ve=[];for(var M=H,$;M!==null;){var Q=M;if($=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||$===null||I===null||(Q=us(M,I),Q!=null&&ve.push(Js(M,Q,$))),qe)break;M=M.return}0<ve.length&&(J=new G(J,fe,null,r,K),ee.push({event:J,listeners:ve}))}}if((t&7)===0){e:{if(J=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",J&&r!==Xc&&(fe=r.relatedTarget||r.fromElement)&&(Jr(fe)||fe[Hr]))break e;if((G||J)&&(J=K.window===K?K:(J=K.ownerDocument)?J.defaultView||J.parentWindow:window,G?(fe=r.relatedTarget||r.toElement,G=H,fe=fe?Jr(fe):null,fe!==null&&(qe=d(fe),ve=fe.tag,fe!==qe||ve!==5&&ve!==27&&ve!==6)&&(fe=null)):(G=null,fe=H),G!==fe)){if(ve=yp,Q="onMouseLeave",I="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ve=wp,Q="onPointerLeave",I="onPointerEnter",M="pointer"),qe=G==null?J:cs(G),$=fe==null?J:cs(fe),J=new ve(Q,M+"leave",G,r,K),J.target=qe,J.relatedTarget=$,Q=null,Jr(K)===H&&(ve=new ve(I,M+"enter",fe,r,K),ve.target=$,ve.relatedTarget=qe,Q=ve),qe=Q,G&&fe)t:{for(ve=Aj,I=G,M=fe,$=0,Q=I;Q;Q=ve(Q))$++;Q=0;for(var ge=M;ge;ge=ve(ge))Q++;for(;0<$-Q;)I=ve(I),$--;for(;0<Q-$;)M=ve(M),Q--;for(;$--;){if(I===M||M!==null&&I===M.alternate){ve=I;break t}I=ve(I),M=ve(M)}ve=null}else ve=null;G!==null&&fv(ee,J,G,ve,!1),fe!==null&&qe!==null&&fv(ee,qe,fe,ve,!0)}}e:{if(J=H?cs(H):window,G=J.nodeName&&J.nodeName.toLowerCase(),G==="select"||G==="input"&&J.type==="file")var Re=kp;else if(Ap(J))if(Tp)Re=US;else{Re=MS;var me=zS}else G=J.nodeName,!G||G.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?H&&Yc(H.elementType)&&(Re=kp):Re=BS;if(Re&&(Re=Re(e,H))){Op(ee,Re,r,K);break e}me&&me(e,J,H),e==="focusout"&&H&&J.type==="number"&&H.memoizedProps.value!=null&&Vc(J,"number",J.value)}switch(me=H?cs(H):window,e){case"focusin":(Ap(me)||me.contentEditable==="true")&&(Qr=me,lu=H,bs=null);break;case"focusout":bs=lu=Qr=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,Up(ee,r,K);break;case"selectionchange":if(PS)break;case"keydown":case"keyup":Up(ee,r,K)}var Se;if(ru)e:{switch(e){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else Kr?Np(e,r)&&(Oe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Oe="onCompositionStart");Oe&&(Sp&&r.locale!=="ko"&&(Kr||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&Kr&&(Se=vp()):(Oa=K,Wc="value"in Oa?Oa.value:Oa.textContent,Kr=!0)),me=Tl(H,Oe),0<me.length&&(Oe=new xp(Oe,e,null,r,K),ee.push({event:Oe,listeners:me}),Se?Oe.data=Se:(Se=Cp(r),Se!==null&&(Oe.data=Se)))),(Se=TS?RS(e,r):DS(e,r))&&(Oe=Tl(H,"onBeforeInput"),0<Oe.length&&(me=new xp("onBeforeInput","beforeinput",null,r,K),ee.push({event:me,listeners:Oe}),me.data=Se)),jj(ee,e,H,r,K)}uv(ee,t)})}function Js(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Tl(e,t){for(var r=t+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=us(e,r),u!=null&&s.unshift(Js(e,u,f)),u=us(e,t),u!=null&&s.push(Js(e,u,f))),e.tag===3)return s;e=e.return}return[]}function Aj(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function fv(e,t,r,s,u){for(var f=t._reactName,b=[];r!==null&&r!==s;){var j=r,D=j.alternate,H=j.stateNode;if(j=j.tag,D!==null&&D===s)break;j!==5&&j!==26&&j!==27||H===null||(D=H,u?(H=us(r,f),H!=null&&b.unshift(Js(r,H,D))):u||(H=us(r,f),H!=null&&b.push(Js(r,H,D)))),r=r.return}b.length!==0&&e.push({event:t,listeners:b})}var Oj=/\r\n?/g,kj=/\u0000|\uFFFD/g;function mv(e){return(typeof e=="string"?e:""+e).replace(Oj,`
`).replace(kj,"")}function pv(e,t){return t=mv(t),mv(e)===t}function Je(e,t,r,s,u,f){switch(r){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||Yr(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&Yr(e,""+s);break;case"className":_i(e,"class",s);break;case"tabIndex":_i(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":_i(e,r,s);break;case"style":pp(e,s,f);break;case"data":if(t!=="object"){_i(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=Mi(""+s),e.setAttribute(r,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(t!=="input"&&Je(e,t,"name",u.name,u,null),Je(e,t,"formEncType",u.formEncType,u,null),Je(e,t,"formMethod",u.formMethod,u,null),Je(e,t,"formTarget",u.formTarget,u,null)):(Je(e,t,"encType",u.encType,u,null),Je(e,t,"method",u.method,u,null),Je(e,t,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=Mi(""+s),e.setAttribute(r,s);break;case"onClick":s!=null&&(e.onclick=Zn);break;case"onScroll":s!=null&&Ne("scroll",e);break;case"onScrollEnd":s!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(r=s.__html,r!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}r=Mi(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""+s):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":s===!0?e.setAttribute(r,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,s):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(r,s):e.removeAttribute(r);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(r):e.setAttribute(r,s);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),Li(e,"popover",s);break;case"xlinkActuate":Xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Xn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Xn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Xn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Xn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Li(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=aS.get(r)||r,Li(e,r,s))}}function _d(e,t,r,s,u,f){switch(r){case"style":pp(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(r=s.__html,r!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"children":typeof s=="string"?Yr(e,s):(typeof s=="number"||typeof s=="bigint")&&Yr(e,""+s);break;case"onScroll":s!=null&&Ne("scroll",e);break;case"onScrollEnd":s!=null&&Ne("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Zn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!op.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),t=r.slice(2,u?r.length-7:void 0),f=e[kt]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(t,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,s,u);break e}r in e?e[r]=s:s===!0?e.setAttribute(r,""):Li(e,r,s)}}}function vt(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var s=!1,u=!1,f;for(f in r)if(r.hasOwnProperty(f)){var b=r[f];if(b!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Je(e,t,f,b,r,null)}}u&&Je(e,t,"srcSet",r.srcSet,r,null),s&&Je(e,t,"src",r.src,r,null);return;case"input":Ne("invalid",e);var j=f=b=u=null,D=null,H=null;for(s in r)if(r.hasOwnProperty(s)){var K=r[s];if(K!=null)switch(s){case"name":u=K;break;case"type":b=K;break;case"checked":D=K;break;case"defaultChecked":H=K;break;case"value":f=K;break;case"defaultValue":j=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(l(137,t));break;default:Je(e,t,s,K,r,null)}}up(e,f,j,D,H,b,u,!1);return;case"select":Ne("invalid",e),s=b=f=null;for(u in r)if(r.hasOwnProperty(u)&&(j=r[u],j!=null))switch(u){case"value":f=j;break;case"defaultValue":b=j;break;case"multiple":s=j;default:Je(e,t,u,j,r,null)}t=f,r=b,e.multiple=!!s,t!=null?Vr(e,!!s,t,!1):r!=null&&Vr(e,!!s,r,!0);return;case"textarea":Ne("invalid",e),f=u=s=null;for(b in r)if(r.hasOwnProperty(b)&&(j=r[b],j!=null))switch(b){case"value":s=j;break;case"defaultValue":u=j;break;case"children":f=j;break;case"dangerouslySetInnerHTML":if(j!=null)throw Error(l(91));break;default:Je(e,t,b,j,r,null)}fp(e,s,u,f);return;case"option":for(D in r)r.hasOwnProperty(D)&&(s=r[D],s!=null)&&(D==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Je(e,t,D,s,r,null));return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(s=0;s<Hs.length;s++)Ne(Hs[s],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in r)if(r.hasOwnProperty(H)&&(s=r[H],s!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Je(e,t,H,s,r,null)}return;default:if(Yc(t)){for(K in r)r.hasOwnProperty(K)&&(s=r[K],s!==void 0&&_d(e,t,K,s,r,void 0));return}}for(j in r)r.hasOwnProperty(j)&&(s=r[j],s!=null&&Je(e,t,j,s,r,null))}function Tj(e,t,r,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,b=null,j=null,D=null,H=null,K=null;for(G in r){var ee=r[G];if(r.hasOwnProperty(G)&&ee!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":D=ee;default:s.hasOwnProperty(G)||Je(e,t,G,null,s,ee)}}for(var J in s){var G=s[J];if(ee=r[J],s.hasOwnProperty(J)&&(G!=null||ee!=null))switch(J){case"type":f=G;break;case"name":u=G;break;case"checked":H=G;break;case"defaultChecked":K=G;break;case"value":b=G;break;case"defaultValue":j=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(l(137,t));break;default:G!==ee&&Je(e,t,J,G,s,ee)}}Fc(e,b,j,D,H,K,f,u);return;case"select":G=b=j=J=null;for(f in r)if(D=r[f],r.hasOwnProperty(f)&&D!=null)switch(f){case"value":break;case"multiple":G=D;default:s.hasOwnProperty(f)||Je(e,t,f,null,s,D)}for(u in s)if(f=s[u],D=r[u],s.hasOwnProperty(u)&&(f!=null||D!=null))switch(u){case"value":J=f;break;case"defaultValue":j=f;break;case"multiple":b=f;default:f!==D&&Je(e,t,u,f,s,D)}t=j,r=b,s=G,J!=null?Vr(e,!!r,J,!1):!!s!=!!r&&(t!=null?Vr(e,!!r,t,!0):Vr(e,!!r,r?[]:"",!1));return;case"textarea":G=J=null;for(j in r)if(u=r[j],r.hasOwnProperty(j)&&u!=null&&!s.hasOwnProperty(j))switch(j){case"value":break;case"children":break;default:Je(e,t,j,null,s,u)}for(b in s)if(u=s[b],f=r[b],s.hasOwnProperty(b)&&(u!=null||f!=null))switch(b){case"value":J=u;break;case"defaultValue":G=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(l(91));break;default:u!==f&&Je(e,t,b,u,s,f)}dp(e,J,G);return;case"option":for(var fe in r)J=r[fe],r.hasOwnProperty(fe)&&J!=null&&!s.hasOwnProperty(fe)&&(fe==="selected"?e.selected=!1:Je(e,t,fe,null,s,J));for(D in s)J=s[D],G=r[D],s.hasOwnProperty(D)&&J!==G&&(J!=null||G!=null)&&(D==="selected"?e.selected=J&&typeof J!="function"&&typeof J!="symbol":Je(e,t,D,J,s,G));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in r)J=r[ve],r.hasOwnProperty(ve)&&J!=null&&!s.hasOwnProperty(ve)&&Je(e,t,ve,null,s,J);for(H in s)if(J=s[H],G=r[H],s.hasOwnProperty(H)&&J!==G&&(J!=null||G!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(l(137,t));break;default:Je(e,t,H,J,s,G)}return;default:if(Yc(t)){for(var qe in r)J=r[qe],r.hasOwnProperty(qe)&&J!==void 0&&!s.hasOwnProperty(qe)&&_d(e,t,qe,void 0,s,J);for(K in s)J=s[K],G=r[K],!s.hasOwnProperty(K)||J===G||J===void 0&&G===void 0||_d(e,t,K,J,s,G);return}}for(var I in r)J=r[I],r.hasOwnProperty(I)&&J!=null&&!s.hasOwnProperty(I)&&Je(e,t,I,null,s,J);for(ee in s)J=s[ee],G=r[ee],!s.hasOwnProperty(ee)||J===G||J==null&&G==null||Je(e,t,ee,J,s,G)}function hv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Rj(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,r=performance.getEntriesByType("resource"),s=0;s<r.length;s++){var u=r[s],f=u.transferSize,b=u.initiatorType,j=u.duration;if(f&&j&&hv(b)){for(b=0,j=u.responseEnd,s+=1;s<r.length;s++){var D=r[s],H=D.startTime;if(H>j)break;var K=D.transferSize,ee=D.initiatorType;K&&hv(ee)&&(D=D.responseEnd,b+=K*(D<j?1:(j-H)/(D-H)))}if(--s,t+=8*(f+b)/(u.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zd=null,Md=null;function Rl(e){return e.nodeType===9?e:e.ownerDocument}function gv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Bd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ud=null;function Dj(){var e=window.event;return e&&e.type==="popstate"?e===Ud?!1:(Ud=e,!0):(Ud=null,!1)}var bv=typeof setTimeout=="function"?setTimeout:void 0,Lj=typeof clearTimeout=="function"?clearTimeout:void 0,yv=typeof Promise=="function"?Promise:void 0,_j=typeof queueMicrotask=="function"?queueMicrotask:typeof yv<"u"?function(e){return yv.resolve(null).then(e).catch(zj)}:bv;function zj(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function xv(e,t){var r=t,s=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(s===0){e.removeChild(u),Co(t);return}s--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")s++;else if(r==="html")qs(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,qs(r);for(var f=r.firstChild;f;){var b=f.nextSibling,j=f.nodeName;f[ls]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&f.rel.toLowerCase()==="stylesheet"||r.removeChild(f),f=b}}else r==="body"&&qs(e.ownerDocument.body);r=u}while(r);Co(t)}function wv(e,t){var r=e;e=0;do{var s=r.nextSibling;if(r.nodeType===1?t?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(t?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=s}while(r)}function Id(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Id(r),qc(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function Mj(e,t,r,s){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ls])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mn(e.nextSibling),e===null)break}return null}function Bj(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=mn(e.nextSibling),e===null))return null;return e}function Sv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=mn(e.nextSibling),e===null))return null;return e}function Pd(e){return e.data==="$?"||e.data==="$~"}function $d(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Uj(e,t){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||r.readyState!=="loading")t();else{var s=function(){t(),r.removeEventListener("DOMContentLoaded",s)};r.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hd=null;function jv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(t===0)return mn(e.nextSibling);t--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||t++}e=e.nextSibling}return null}function Ev(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(t===0)return e;t--}else r!=="/$"&&r!=="/&"||t++}e=e.previousSibling}return null}function Nv(e,t,r){switch(t=Rl(r),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function qs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qc(e)}var pn=new Map,Cv=new Set;function Dl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=F.d;F.d={f:Ij,r:Pj,D:$j,C:Hj,L:Jj,m:qj,X:Fj,S:Gj,M:Vj};function Ij(){var e=fa.f(),t=jl();return e||t}function Pj(e){var t=qr(e);t!==null&&t.tag===5&&t.type==="form"?Jh(t):fa.r(e)}var jo=typeof document>"u"?null:document;function Av(e,t,r){var s=jo;if(s&&typeof t=="string"&&t){var u=on(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Cv.has(u)||(Cv.add(u),e={rel:e,crossOrigin:r,href:t},s.querySelector(u)===null&&(t=s.createElement("link"),vt(t,"link",e),ut(t),s.head.appendChild(t)))}}function $j(e){fa.D(e),Av("dns-prefetch",e,null)}function Hj(e,t){fa.C(e,t),Av("preconnect",e,t)}function Jj(e,t,r){fa.L(e,t,r);var s=jo;if(s&&e&&t){var u='link[rel="preload"][as="'+on(t)+'"]';t==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+on(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+on(r.imageSizes)+'"]')):u+='[href="'+on(e)+'"]';var f=u;switch(t){case"style":f=Eo(e);break;case"script":f=No(e)}pn.has(f)||(e=x({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),pn.set(f,e),s.querySelector(u)!==null||t==="style"&&s.querySelector(Gs(f))||t==="script"&&s.querySelector(Fs(f))||(t=s.createElement("link"),vt(t,"link",e),ut(t),s.head.appendChild(t)))}}function qj(e,t){fa.m(e,t);var r=jo;if(r&&e){var s=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+on(s)+'"][href="'+on(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=No(e)}if(!pn.has(f)&&(e=x({rel:"modulepreload",href:e},t),pn.set(f,e),r.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Fs(f)))return}s=r.createElement("link"),vt(s,"link",e),ut(s),r.head.appendChild(s)}}}function Gj(e,t,r){fa.S(e,t,r);var s=jo;if(s&&e){var u=Gr(s).hoistableStyles,f=Eo(e);t=t||"default";var b=u.get(f);if(!b){var j={loading:0,preload:null};if(b=s.querySelector(Gs(f)))j.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},r),(r=pn.get(f))&&Jd(e,r);var D=b=s.createElement("link");ut(D),vt(D,"link",e),D._p=new Promise(function(H,K){D.onload=H,D.onerror=K}),D.addEventListener("load",function(){j.loading|=1}),D.addEventListener("error",function(){j.loading|=2}),j.loading|=4,Ll(b,t,s)}b={type:"stylesheet",instance:b,count:1,state:j},u.set(f,b)}}}function Fj(e,t){fa.X(e,t);var r=jo;if(r&&e){var s=Gr(r).hoistableScripts,u=No(e),f=s.get(u);f||(f=r.querySelector(Fs(u)),f||(e=x({src:e,async:!0},t),(t=pn.get(u))&&qd(e,t),f=r.createElement("script"),ut(f),vt(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Vj(e,t){fa.M(e,t);var r=jo;if(r&&e){var s=Gr(r).hoistableScripts,u=No(e),f=s.get(u);f||(f=r.querySelector(Fs(u)),f||(e=x({src:e,async:!0,type:"module"},t),(t=pn.get(u))&&qd(e,t),f=r.createElement("script"),ut(f),vt(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Ov(e,t,r,s){var u=(u=pe.current)?Dl(u):null;if(!u)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=Eo(r.href),r=Gr(u).hoistableStyles,s=r.get(t),s||(s={type:"style",instance:null,count:0,state:null},r.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Eo(r.href);var f=Gr(u).hoistableStyles,b=f.get(e);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,b),(f=u.querySelector(Gs(e)))&&!f._p&&(b.instance=f,b.state.loading=5),pn.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},pn.set(e,r),f||Yj(u,e,r,b.state))),t&&s===null)throw Error(l(528,""));return b}if(t&&s!==null)throw Error(l(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=No(r),r=Gr(u).hoistableScripts,s=r.get(t),s||(s={type:"script",instance:null,count:0,state:null},r.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Eo(e){return'href="'+on(e)+'"'}function Gs(e){return'link[rel="stylesheet"]['+e+"]"}function kv(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Yj(e,t,r,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),vt(t,"link",r),ut(t),e.head.appendChild(t))}function No(e){return'[src="'+on(e)+'"]'}function Fs(e){return"script[async]"+e}function Tv(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+on(r.href)+'"]');if(s)return t.instance=s,ut(s),s;var u=x({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),ut(s),vt(s,"style",u),Ll(s,r.precedence,e),t.instance=s;case"stylesheet":u=Eo(r.href);var f=e.querySelector(Gs(u));if(f)return t.state.loading|=4,t.instance=f,ut(f),f;s=kv(r),(u=pn.get(u))&&Jd(s,u),f=(e.ownerDocument||e).createElement("link"),ut(f);var b=f;return b._p=new Promise(function(j,D){b.onload=j,b.onerror=D}),vt(f,"link",s),t.state.loading|=4,Ll(f,r.precedence,e),t.instance=f;case"script":return f=No(r.src),(u=e.querySelector(Fs(f)))?(t.instance=u,ut(u),u):(s=r,(u=pn.get(f))&&(s=x({},r),qd(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),ut(u),vt(u,"link",s),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Ll(s,r.precedence,e));return t.instance}function Ll(e,t,r){for(var s=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,b=0;b<s.length;b++){var j=s[b];if(j.dataset.precedence===t)f=j;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function Jd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function qd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _l=null;function Rv(e,t,r){if(_l===null){var s=new Map,u=_l=new Map;u.set(r,s)}else u=_l,s=u.get(r),s||(s=new Map,u.set(r,s));if(s.has(e))return s;for(s.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var f=r[u];if(!(f[ls]||f[mt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var b=f.getAttribute(t)||"";b=e+b;var j=s.get(b);j?j.push(f):s.set(b,[f])}}return s}function Dv(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function Xj(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Lv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Zj(e,t,r,s){if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=Eo(s.href),f=t.querySelector(Gs(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zl.bind(e),t.then(e,e)),r.state.loading|=4,r.instance=f,ut(f);return}f=t.ownerDocument||t,s=kv(s),(u=pn.get(u))&&Jd(s,u),f=f.createElement("link"),ut(f);var b=f;b._p=new Promise(function(j,D){b.onload=j,b.onerror=D}),vt(f,"link",s),r.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=zl.bind(e),t.addEventListener("load",r),t.addEventListener("error",r))}}var Gd=0;function Kj(e,t){return e.stylesheets&&e.count===0&&Bl(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var s=setTimeout(function(){if(e.stylesheets&&Bl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+t);0<e.imgBytes&&Gd===0&&(Gd=62500*Rj());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Gd?50:800)+t);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ml=null;function Bl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ml=new Map,t.forEach(Qj,e),Ml=null,zl.call(e))}function Qj(e,t){if(!(t.state.loading&4)){var r=Ml.get(e);if(r)var s=r.get(null);else{r=new Map,Ml.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var b=u[f];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),s=b)}s&&r.set(null,s)}u=t.instance,b=u.getAttribute("data-precedence"),f=r.get(b)||s,f===s&&r.set(null,u),r.set(b,u),this.count++,s=zl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var Vs={$$typeof:T,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function Wj(e,t,r,s,u,f,b,j,D){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.hiddenUpdates=Pc(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function _v(e,t,r,s,u,f,b,j,D,H,K,ee){return e=new Wj(e,t,r,b,D,H,K,ee,j),t=1,f===!0&&(t|=24),f=qt(3,null,null,t),e.current=f,f.stateNode=e,t=Eu(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:s,isDehydrated:r,cache:t},Ou(f),e}function zv(e){return e?(e=to,e):to}function Mv(e,t,r,s,u,f){u=zv(u),s.context===null?s.context=u:s.pendingContext=u,s=_a(t),s.payload={element:r},f=f===void 0?null:f,f!==null&&(s.callback=f),r=za(e,s,t),r!==null&&(zt(r,e,t),Ns(r,e,t))}function Bv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Fd(e,t){Bv(e,t),(e=e.alternate)&&Bv(e,t)}function Uv(e){if(e.tag===13||e.tag===31){var t=dr(e,67108864);t!==null&&zt(t,e,67108864),Fd(e,67108864)}}function Iv(e){if(e.tag===13||e.tag===31){var t=Xt();t=$c(t);var r=dr(e,t);r!==null&&zt(r,e,t),Fd(e,t)}}var Ul=!0;function eE(e,t,r,s){var u=k.T;k.T=null;var f=F.p;try{F.p=2,Vd(e,t,r,s)}finally{F.p=f,k.T=u}}function tE(e,t,r,s){var u=k.T;k.T=null;var f=F.p;try{F.p=8,Vd(e,t,r,s)}finally{F.p=f,k.T=u}}function Vd(e,t,r,s){if(Ul){var u=Yd(s);if(u===null)Ld(e,t,s,Il,r),$v(e,s);else if(aE(u,e,t,r,s))s.stopPropagation();else if($v(e,s),t&4&&-1<nE.indexOf(e)){for(;u!==null;){var f=qr(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var b=sr(f.pendingLanes);if(b!==0){var j=f;for(j.pendingLanes|=2,j.entangledLanes|=2;b;){var D=1<<31-Ht(b);j.entanglements[1]|=D,b&=~D}$n(f),(Le&6)===0&&(wl=rt()+500,$s(0))}}break;case 31:case 13:j=dr(f,2),j!==null&&zt(j,f,2),jl(),Fd(f,2)}if(f=Yd(s),f===null&&Ld(e,t,s,Il,r),f===u)break;u=f}u!==null&&s.stopPropagation()}else Ld(e,t,s,null,r)}}function Yd(e){return e=Zc(e),Xd(e)}var Il=null;function Xd(e){if(Il=null,e=Jr(e),e!==null){var t=d(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=p(t),e!==null)return e;e=null}else if(r===31){if(e=g(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Il=e,null}function Pv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($r()){case Ce:return 2;case an:return 8;case Bn:case H0:return 32;case Zm:return 268435456;default:return 32}default:return 32}}var Zd=!1,Fa=null,Va=null,Ya=null,Ys=new Map,Xs=new Map,Xa=[],nE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $v(e,t){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Ys.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(t.pointerId)}}function Zs(e,t,r,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},t!==null&&(t=qr(t),t!==null&&Uv(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function aE(e,t,r,s,u){switch(t){case"focusin":return Fa=Zs(Fa,e,t,r,s,u),!0;case"dragenter":return Va=Zs(Va,e,t,r,s,u),!0;case"mouseover":return Ya=Zs(Ya,e,t,r,s,u),!0;case"pointerover":var f=u.pointerId;return Ys.set(f,Zs(Ys.get(f)||null,e,t,r,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Xs.set(f,Zs(Xs.get(f)||null,e,t,r,s,u)),!0}return!1}function Hv(e){var t=Jr(e.target);if(t!==null){var r=d(t);if(r!==null){if(t=r.tag,t===13){if(t=p(r),t!==null){e.blockedOn=t,np(e.priority,function(){Iv(r)});return}}else if(t===31){if(t=g(r),t!==null){e.blockedOn=t,np(e.priority,function(){Iv(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Yd(e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Xc=s,r.target.dispatchEvent(s),Xc=null}else return t=qr(r),t!==null&&Uv(t),e.blockedOn=r,!1;t.shift()}return!0}function Jv(e,t,r){Pl(e)&&r.delete(t)}function rE(){Zd=!1,Fa!==null&&Pl(Fa)&&(Fa=null),Va!==null&&Pl(Va)&&(Va=null),Ya!==null&&Pl(Ya)&&(Ya=null),Ys.forEach(Jv),Xs.forEach(Jv)}function $l(e,t){e.blockedOn===t&&(e.blockedOn=null,Zd||(Zd=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,rE)))}var Hl=null;function qv(e){Hl!==e&&(Hl=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Hl===e&&(Hl=null);for(var t=0;t<e.length;t+=3){var r=e[t],s=e[t+1],u=e[t+2];if(typeof s!="function"){if(Xd(s||r)===null)continue;break}var f=qr(r);f!==null&&(e.splice(t,3),t-=3,Yu(f,{pending:!0,data:u,method:r.method,action:s},s,u))}}))}function Co(e){function t(D){return $l(D,e)}Fa!==null&&$l(Fa,e),Va!==null&&$l(Va,e),Ya!==null&&$l(Ya,e),Ys.forEach(t),Xs.forEach(t);for(var r=0;r<Xa.length;r++){var s=Xa[r];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Xa.length&&(r=Xa[0],r.blockedOn===null);)Hv(r),r.blockedOn===null&&Xa.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(s=0;s<r.length;s+=3){var u=r[s],f=r[s+1],b=u[kt]||null;if(typeof f=="function")b||qv(r);else if(b){var j=null;if(f&&f.hasAttribute("formAction")){if(u=f,b=f[kt]||null)j=b.formAction;else if(Xd(u)!==null)continue}else j=b.action;typeof j=="function"?r[s+1]=j:(r.splice(s,3),s-=3),qv(r)}}}function Gv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(b){return u=b})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),s||setTimeout(r,20)}function r(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(r,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function Kd(e){this._internalRoot=e}Jl.prototype.render=Kd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var r=t.current,s=Xt();Mv(r,s,e,t,null,null)},Jl.prototype.unmount=Kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mv(e.current,2,null,e,null,null),jl(),t[Hr]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=tp();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Xa.length&&t!==0&&t<Xa[r].priority;r++);Xa.splice(r,0,e),r===0&&Hv(e)}};var Fv=a.version;if(Fv!=="19.2.7")throw Error(l(527,Fv,"19.2.7"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=v(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var oE={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{os=ql.inject(oE),$t=ql}catch{}}return Qs.createRoot=function(e,t){if(!c(e))throw Error(l(299));var r=!1,s="",u=Wh,f=eg,b=tg;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError)),t=_v(e,1,!1,null,null,r,s,null,u,f,b,Gv),e[Hr]=t.current,Dd(e),new Kd(t)},Qs.hydrateRoot=function(e,t,r){if(!c(e))throw Error(l(299));var s=!1,u="",f=Wh,b=eg,j=tg,D=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(j=r.onRecoverableError),r.formState!==void 0&&(D=r.formState)),t=_v(e,1,!0,t,r??null,s,u,D,f,b,j,Gv),t.context=zv(null),r=t.current,s=Xt(),s=$c(s),u=_a(s),u.callback=null,za(r,u,s),r=s,t.current.lanes=r,is(t,r),$n(t),e[Hr]=t.current,Dd(e),new Jl(t)},Qs.version="19.2.7",Qs}var nb;function pE(){if(nb)return ef.exports;nb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),ef.exports=mE(),ef.exports}var hE=pE();const gE=$o(hE);var ab="popstate";function rb(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function vE(n={}){function a(c,d){let{pathname:p="/",search:g="",hash:h=""}=Lr(c.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),Ef("",{pathname:p,search:g,hash:h},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(c,d){let p=c.document.querySelector("base"),g="";if(p&&p.getAttribute("href")){let h=c.location.href,v=h.indexOf("#");g=v===-1?h:h.slice(0,v)}return g+"#"+(typeof d=="string"?d:li(d))}function l(c,d){xn(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return yE(a,o,l,n)}function Ze(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function xn(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function bE(){return Math.random().toString(36).substring(2,10)}function ob(n,a){return{usr:n.state,key:n.key,idx:a,masked:n.mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function Ef(n,a,o=null,l,c){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?Lr(a):a,state:o,key:a&&a.key||l||bE(),mask:c}}function li({pathname:n="/",search:a="",hash:o=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Lr(n){let a={};if(n){let o=n.indexOf("#");o>=0&&(a.hash=n.substring(o),n=n.substring(0,o));let l=n.indexOf("?");l>=0&&(a.search=n.substring(l),n=n.substring(0,l)),n&&(a.pathname=n)}return a}function yE(n,a,o,l={}){let{window:c=document.defaultView,v5Compat:d=!1}=l,p=c.history,g="POP",h=null,v=y();v==null&&(v=0,p.replaceState({...p.state,idx:v},""));function y(){return(p.state||{idx:null}).idx}function x(){g="POP";let S=y(),R=S==null?null:S-v;v=S,h&&h({action:g,location:A.location,delta:R})}function w(S,R){g="PUSH";let C=rb(S)?S:Ef(A.location,S,R);o&&o(C,S),v=y()+1;let T=ob(C,v),_=A.createHref(C.mask||C);try{p.pushState(T,"",_)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;c.location.assign(_)}d&&h&&h({action:g,location:A.location,delta:1})}function E(S,R){g="REPLACE";let C=rb(S)?S:Ef(A.location,S,R);o&&o(C,S),v=y();let T=ob(C,v),_=A.createHref(C.mask||C);p.replaceState(T,"",_),d&&h&&h({action:g,location:A.location,delta:0})}function N(S){return xE(c,S)}let A={get action(){return g},get location(){return n(c,p)},listen(S){if(h)throw new Error("A history only accepts one active listener");return c.addEventListener(ab,x),h=S,()=>{c.removeEventListener(ab,x),h=null}},createHref(S){return a(c,S)},createURL:N,encodeLocation(S){let R=N(S);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:w,replace:E,go(S){return p.go(S)}};return A}function xE(n,a,o=!1){let l="http://localhost";n&&(l=n.location.origin!=="null"?n.location.origin:n.location.href),Ze(l,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:li(a);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=l+c),new URL(c,l)}function dy(n,a,o="/"){return wE(n,a,o,!1)}function wE(n,a,o,l,c){let d=typeof a=="string"?Lr(a):a,p=ba(d.pathname||"/",o);if(p==null)return null;let g=SE(n),h=null,v=_E(p);for(let y=0;h==null&&y<g.length;++y)h=DE(g[y],v,l);return h}function SE(n){let a=fy(n);return jE(a),a}function fy(n,a=[],o=[],l="",c=!1){let d=(p,g,h=c,v)=>{let y={relativePath:v===void 0?p.path||"":v,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(l)&&h)return;Ze(y.relativePath.startsWith(l),`Absolute route path "${y.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(l.length)}let x=Dn([l,y.relativePath]),w=o.concat(y);p.children&&p.children.length>0&&(Ze(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),fy(p.children,a,w,x,h)),!(p.path==null&&!p.index)&&a.push({path:x,score:TE(x,p.index),routesMeta:w})};return n.forEach((p,g)=>{if(p.path===""||!p.path?.includes("?"))d(p,g);else for(let h of my(p.path))d(p,g,!0,h)}),a}function my(n){let a=n.split("/");if(a.length===0)return[];let[o,...l]=a,c=o.endsWith("?"),d=o.replace(/\?$/,"");if(l.length===0)return c?[d,""]:[d];let p=my(l.join("/")),g=[];return g.push(...p.map(h=>h===""?d:[d,h].join("/"))),c&&g.push(...p),g.map(h=>n.startsWith("/")&&h===""?"/":h)}function jE(n){n.sort((a,o)=>a.score!==o.score?o.score-a.score:RE(a.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var EE=/^:[\w-]+$/,NE=3,CE=2,AE=1,OE=10,kE=-2,sb=n=>n==="*";function TE(n,a){let o=n.split("/"),l=o.length;return o.some(sb)&&(l+=kE),a&&(l+=CE),o.filter(c=>!sb(c)).reduce((c,d)=>c+(EE.test(d)?NE:d===""?AE:OE),l)}function RE(n,a){return n.length===a.length&&n.slice(0,-1).every((l,c)=>l===a[c])?n[n.length-1]-a[a.length-1]:0}function DE(n,a,o=!1){let{routesMeta:l}=n,c={},d="/",p=[];for(let g=0;g<l.length;++g){let h=l[g],v=g===l.length-1,y=d==="/"?a:a.slice(d.length)||"/",x=tc({path:h.relativePath,caseSensitive:h.caseSensitive,end:v},y),w=h.route;if(!x&&v&&o&&!l[l.length-1].route.index&&(x=tc({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!x)return null;Object.assign(c,x.params),p.push({params:c,pathname:Dn([d,x.pathname]),pathnameBase:UE(Dn([d,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(d=Dn([d,x.pathnameBase]))}return p}function tc(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,l]=LE(n.path,n.caseSensitive,n.end),c=a.match(o);if(!c)return null;let d=c[0],p=d.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:l.reduce((v,{paramName:y,isOptional:x},w)=>{if(y==="*"){let N=g[w]||"";p=d.slice(0,d.length-N.length).replace(/(.)\/+$/,"$1")}const E=g[w];return x&&!E?v[y]=void 0:v[y]=(E||"").replace(/%2F/g,"/"),v},{}),pathname:d,pathnameBase:p,pattern:n}}function LE(n,a=!1,o=!0){xn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,h,v,y)=>{if(l.push({paramName:g,isOptional:h!=null}),h){let x=y.charAt(v+p.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(l.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,a?void 0:"i"),l]}function _E(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return xn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function ba(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,l=n.charAt(o);return l&&l!=="/"?null:n.slice(o)||"/"}var zE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function ME(n,a="/"){let{pathname:o,search:l="",hash:c=""}=typeof n=="string"?Lr(n):n,d;return o?(o=py(o),o.startsWith("/")?d=ib(o.substring(1),"/"):d=ib(o,a)):d=a,{pathname:d,search:IE(l),hash:PE(c)}}function ib(n,a){let o=nc(a).split("/");return n.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function rf(n,a,o,l){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function BE(n){return n.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function Xf(n){let a=BE(n);return a.map((o,l)=>l===a.length-1?o.pathname:o.pathnameBase)}function bc(n,a,o,l=!1){let c;typeof n=="string"?c=Lr(n):(c={...n},Ze(!c.pathname||!c.pathname.includes("?"),rf("?","pathname","search",c)),Ze(!c.pathname||!c.pathname.includes("#"),rf("#","pathname","hash",c)),Ze(!c.search||!c.search.includes("#"),rf("#","search","hash",c)));let d=n===""||c.pathname==="",p=d?"/":c.pathname,g;if(p==null)g=o;else{let x=a.length-1;if(!l&&p.startsWith("..")){let w=p.split("/");for(;w[0]==="..";)w.shift(),x-=1;c.pathname=w.join("/")}g=x>=0?a[x]:"/"}let h=ME(c,g),v=p&&p!=="/"&&p.endsWith("/"),y=(d||p===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(v||y)&&(h.pathname+="/"),h}var py=n=>n.replace(/\/\/+/g,"/"),Dn=n=>py(n.join("/")),nc=n=>n.replace(/\/+$/,""),UE=n=>nc(n).replace(/^\/*/,"/"),IE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,PE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,$E=class{constructor(n,a,o,l=!1){this.status=n,this.statusText=a||"",this.internal=l,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function HE(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function JE(n){let a=n.map(o=>o.route.path).filter(Boolean);return Dn(a)||"/"}var hy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function gy(n,a){let o=n;if(typeof o!="string"||!zE.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let l=o,c=!1;if(hy)try{let d=new URL(window.location.href),p=o.startsWith("//")?new URL(d.protocol+o):new URL(o),g=ba(p.pathname,a);p.origin===d.origin&&g!=null?o=g+p.search+p.hash:c=!0}catch{xn(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:c,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vy=["POST","PUT","PATCH","DELETE"];new Set(vy);var qE=["GET",...vy];new Set(qE);var Ho=m.createContext(null);Ho.displayName="DataRouter";var yc=m.createContext(null);yc.displayName="DataRouterState";var by=m.createContext(!1);function GE(){return m.useContext(by)}var yy=m.createContext({isTransitioning:!1});yy.displayName="ViewTransition";var FE=m.createContext(new Map);FE.displayName="Fetchers";var VE=m.createContext(null);VE.displayName="Await";var Wt=m.createContext(null);Wt.displayName="Navigation";var mi=m.createContext(null);mi.displayName="Location";var Vn=m.createContext({outlet:null,matches:[],isDataRoute:!1});Vn.displayName="Route";var Zf=m.createContext(null);Zf.displayName="RouteError";var xy="REACT_ROUTER_ERROR",YE="REDIRECT",XE="ROUTE_ERROR_RESPONSE";function ZE(n){if(n.startsWith(`${xy}:${YE}:{`))try{let a=JSON.parse(n.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function KE(n){if(n.startsWith(`${xy}:${XE}:{`))try{let a=JSON.parse(n.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new $E(a.status,a.statusText,a.data)}catch{}}function QE(n,{relative:a}={}){Ze(Jo(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=m.useContext(Wt),{hash:c,pathname:d,search:p}=pi(n,{relative:a}),g=d;return o!=="/"&&(g=d==="/"?o:Dn([o,d])),l.createHref({pathname:g,search:p,hash:c})}function Jo(){return m.useContext(mi)!=null}function En(){return Ze(Jo(),"useLocation() may be used only in the context of a <Router> component."),m.useContext(mi).location}var wy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sy(n){m.useContext(Wt).static||m.useLayoutEffect(n)}function _n(){let{isDataRoute:n}=m.useContext(Vn);return n?dN():WE()}function WE(){Ze(Jo(),"useNavigate() may be used only in the context of a <Router> component.");let n=m.useContext(Ho),{basename:a,navigator:o}=m.useContext(Wt),{matches:l}=m.useContext(Vn),{pathname:c}=En(),d=JSON.stringify(Xf(l)),p=m.useRef(!1);return Sy(()=>{p.current=!0}),m.useCallback((h,v={})=>{if(xn(p.current,wy),!p.current)return;if(typeof h=="number"){o.go(h);return}let y=bc(h,JSON.parse(d),c,v.relative==="path");n==null&&a!=="/"&&(y.pathname=y.pathname==="/"?a:Dn([a,y.pathname])),(v.replace?o.replace:o.push)(y,v.state,v)},[a,o,d,c,n])}m.createContext(null);function pi(n,{relative:a}={}){let{matches:o}=m.useContext(Vn),{pathname:l}=En(),c=JSON.stringify(Xf(o));return m.useMemo(()=>bc(n,JSON.parse(c),l,a==="path"),[n,c,l,a])}function eN(n,a){return jy(n,a)}function jy(n,a,o){Ze(Jo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=m.useContext(Wt),{matches:c}=m.useContext(Vn),d=c[c.length-1],p=d?d.params:{},g=d?d.pathname:"/",h=d?d.pathnameBase:"/",v=d&&d.route;{let S=v&&v.path||"";Ny(g,!v||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let y=En(),x;if(a){let S=typeof a=="string"?Lr(a):a;Ze(h==="/"||S.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${S.pathname}" was given in the \`location\` prop.`),x=S}else x=y;let w=x.pathname||"/",E=w;if(h!=="/"){let S=h.replace(/^\//,"").split("/");E="/"+w.replace(/^\//,"").split("/").slice(S.length).join("/")}let N=o&&o.state.matches.length?o.state.matches.map(S=>Object.assign(S,{route:o.manifest[S.route.id]||S.route})):dy(n,{pathname:E});xn(v||N!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),xn(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=oN(N&&N.map(S=>Object.assign({},S,{params:Object.assign({},p,S.params),pathname:Dn([h,l.encodeLocation?l.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?h:Dn([h,l.encodeLocation?l.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),c,o);return a&&A?m.createElement(mi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...x},navigationType:"POP"}},A):A}function tN(){let n=uN(),a=HE(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:l},d={padding:"2px 4px",backgroundColor:l},p=null;return console.error("Error handled by React Router default ErrorBoundary:",n),p=m.createElement(m.Fragment,null,m.createElement("p",null,"💿 Hey developer 👋"),m.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",m.createElement("code",{style:d},"ErrorBoundary")," or"," ",m.createElement("code",{style:d},"errorElement")," prop on your route.")),m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},a),o?m.createElement("pre",{style:c},o):null,p)}var nN=m.createElement(tN,null),Ey=class extends m.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){this.props.onError?this.props.onError(n,a):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const o=KE(n.digest);o&&(n=o)}let a=n!==void 0?m.createElement(Vn.Provider,{value:this.props.routeContext},m.createElement(Zf.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?m.createElement(aN,{error:n},a):a}};Ey.contextType=by;var of=new WeakMap;function aN({children:n,error:a}){let{basename:o}=m.useContext(Wt);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let l=ZE(a.digest);if(l){let c=of.get(a);if(c)throw c;let d=gy(l.location,o);if(hy&&!of.get(a))if(d.isExternal||l.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:l.replace}));throw of.set(a,p),p}return m.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return n}function rN({routeContext:n,match:a,children:o}){let l=m.useContext(Ho);return l&&l.static&&l.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=a.route.id),m.createElement(Vn.Provider,{value:n},o)}function oN(n,a=[],o){let l=o?.state;if(n==null){if(!l)return null;if(l.errors)n=l.matches;else if(a.length===0&&!l.initialized&&l.matches.length>0)n=l.matches;else return null}let c=n,d=l?.errors;if(d!=null){let y=c.findIndex(x=>x.route.id&&d?.[x.route.id]!==void 0);Ze(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,y+1))}let p=!1,g=-1;if(o&&l){p=l.renderFallback;for(let y=0;y<c.length;y++){let x=c[y];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(g=y),x.route.id){let{loaderData:w,errors:E}=l,N=x.route.loader&&!w.hasOwnProperty(x.route.id)&&(!E||E[x.route.id]===void 0);if(x.route.lazy||N){o.isStatic&&(p=!0),g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}}let h=o?.onError,v=l&&h?(y,x)=>{h(y,{location:l.location,params:l.matches?.[0]?.params??{},pattern:JE(l.matches),errorInfo:x})}:void 0;return c.reduceRight((y,x,w)=>{let E,N=!1,A=null,S=null;l&&(E=d&&x.route.id?d[x.route.id]:void 0,A=x.route.errorElement||nN,p&&(g<0&&w===0?(Ny("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,S=null):g===w&&(N=!0,S=x.route.hydrateFallbackElement||null)));let R=a.concat(c.slice(0,w+1)),C=()=>{let T;return E?T=A:N?T=S:x.route.Component?T=m.createElement(x.route.Component,null):x.route.element?T=x.route.element:T=y,m.createElement(rN,{match:x,routeContext:{outlet:y,matches:R,isDataRoute:l!=null},children:T})};return l&&(x.route.ErrorBoundary||x.route.errorElement||w===0)?m.createElement(Ey,{location:l.location,revalidation:l.revalidation,component:A,error:E,children:C(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:v}):C()},null)}function Kf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sN(n){let a=m.useContext(Ho);return Ze(a,Kf(n)),a}function iN(n){let a=m.useContext(yc);return Ze(a,Kf(n)),a}function lN(n){let a=m.useContext(Vn);return Ze(a,Kf(n)),a}function Qf(n){let a=lN(n),o=a.matches[a.matches.length-1];return Ze(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function cN(){return Qf("useRouteId")}function uN(){let n=m.useContext(Zf),a=iN("useRouteError"),o=Qf("useRouteError");return n!==void 0?n:a.errors?.[o]}function dN(){let{router:n}=sN("useNavigate"),a=Qf("useNavigate"),o=m.useRef(!1);return Sy(()=>{o.current=!0}),m.useCallback(async(c,d={})=>{xn(o.current,wy),o.current&&(typeof c=="number"?await n.navigate(c):await n.navigate(c,{fromRouteId:a,...d}))},[n,a])}var lb={};function Ny(n,a,o){!a&&!lb[n]&&(lb[n]=!0,xn(!1,o))}m.memo(fN);function fN({routes:n,manifest:a,future:o,state:l,isStatic:c,onError:d}){return jy(n,void 0,{manifest:a,state:l,isStatic:c,onError:d})}function mN({to:n,replace:a,state:o,relative:l}){Ze(Jo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=m.useContext(Wt);xn(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=m.useContext(Vn),{pathname:p}=En(),g=_n(),h=bc(n,Xf(d),p,l==="path"),v=JSON.stringify(h);return m.useEffect(()=>{g(JSON.parse(v),{replace:a,state:o,relative:l})},[g,v,l,a,o]),null}function gn(n){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pN({basename:n="/",children:a=null,location:o,navigationType:l="POP",navigator:c,static:d=!1,useTransitions:p}){Ze(!Jo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=n.replace(/^\/*/,"/"),h=m.useMemo(()=>({basename:g,navigator:c,static:d,useTransitions:p,future:{}}),[g,c,d,p]);typeof o=="string"&&(o=Lr(o));let{pathname:v="/",search:y="",hash:x="",state:w=null,key:E="default",mask:N}=o,A=m.useMemo(()=>{let S=ba(v,g);return S==null?null:{location:{pathname:S,search:y,hash:x,state:w,key:E,mask:N},navigationType:l}},[g,v,y,x,w,E,l,N]);return xn(A!=null,`<Router basename="${g}"> is not able to match the URL "${v}${y}${x}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:m.createElement(Wt.Provider,{value:h},m.createElement(mi.Provider,{children:a,value:A}))}function hN({children:n,location:a}){return eN(Nf(n),a)}function Nf(n,a=[]){let o=[];return m.Children.forEach(n,(l,c)=>{if(!m.isValidElement(l))return;let d=[...a,c];if(l.type===m.Fragment){o.push.apply(o,Nf(l.props.children,d));return}Ze(l.type===gn,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!l.props.index||!l.props.children,"An index route cannot have child routes.");let p={id:l.props.id||d.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(p.children=Nf(l.props.children,d)),o.push(p)}),o}var Kl="get",Ql="application/x-www-form-urlencoded";function xc(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function gN(n){return xc(n)&&n.tagName.toLowerCase()==="button"}function vN(n){return xc(n)&&n.tagName.toLowerCase()==="form"}function bN(n){return xc(n)&&n.tagName.toLowerCase()==="input"}function yN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function xN(n,a){return n.button===0&&(!a||a==="_self")&&!yN(n)}var Gl=null;function wN(){if(Gl===null)try{new FormData(document.createElement("form"),0),Gl=!1}catch{Gl=!0}return Gl}var SN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sf(n){return n!=null&&!SN.has(n)?(xn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ql}"`),null):n}function jN(n,a){let o,l,c,d,p;if(vN(n)){let g=n.getAttribute("action");l=g?ba(g,a):null,o=n.getAttribute("method")||Kl,c=sf(n.getAttribute("enctype"))||Ql,d=new FormData(n)}else if(gN(n)||bN(n)&&(n.type==="submit"||n.type==="image")){let g=n.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||g.getAttribute("action");if(l=h?ba(h,a):null,o=n.getAttribute("formmethod")||g.getAttribute("method")||Kl,c=sf(n.getAttribute("formenctype"))||sf(g.getAttribute("enctype"))||Ql,d=new FormData(g,n),!wN()){let{name:v,type:y,value:x}=n;if(y==="image"){let w=v?`${v}.`:"";d.append(`${w}x`,"0"),d.append(`${w}y`,"0")}else v&&d.append(v,x)}}else{if(xc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Kl,l=null,c=Ql,p=n}return d&&c==="text/plain"&&(p=d,d=void 0),{action:l,method:o.toLowerCase(),encType:c,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Wf(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function Cy(n,a,o,l){let c=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${l}`:c.pathname=`${c.pathname}.${l}`:c.pathname==="/"?c.pathname=`_root.${l}`:a&&ba(c.pathname,a)==="/"?c.pathname=`${nc(a)}/_root.${l}`:c.pathname=`${nc(c.pathname)}.${l}`,c}async function EN(n,a){if(n.id in a)return a[n.id];try{let o=await import(n.module);return a[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function NN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function CN(n,a,o){let l=await Promise.all(n.map(async c=>{let d=a.routes[c.route.id];if(d){let p=await EN(d,o);return p.links?p.links():[]}return[]}));return TN(l.flat(1).filter(NN).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function cb(n,a,o,l,c,d){let p=(h,v)=>o[v]?h.route.id!==o[v].route.id:!0,g=(h,v)=>o[v].pathname!==h.pathname||o[v].route.path?.endsWith("*")&&o[v].params["*"]!==h.params["*"];return d==="assets"?a.filter((h,v)=>p(h,v)||g(h,v)):d==="data"?a.filter((h,v)=>{let y=l.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(p(h,v)||g(h,v))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function AN(n,a,{includeHydrateFallback:o}={}){return ON(n.map(l=>{let c=a.routes[l.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function ON(n){return[...new Set(n)]}function kN(n){let a={},o=Object.keys(n).sort();for(let l of o)a[l]=n[l];return a}function TN(n,a){let o=new Set;return new Set(a),n.reduce((l,c)=>{let d=JSON.stringify(kN(c));return o.has(d)||(o.add(d),l.push({key:d,link:c})),l},[])}function em(){let n=m.useContext(Ho);return Wf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function RN(){let n=m.useContext(yc);return Wf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var tm=m.createContext(void 0);tm.displayName="FrameworkContext";function nm(){let n=m.useContext(tm);return Wf(n,"You must render this element inside a <HydratedRouter> element"),n}function DN(n,a){let o=m.useContext(tm),[l,c]=m.useState(!1),[d,p]=m.useState(!1),{onFocus:g,onBlur:h,onMouseEnter:v,onMouseLeave:y,onTouchStart:x}=a,w=m.useRef(null);m.useEffect(()=>{if(n==="render"&&p(!0),n==="viewport"){let A=R=>{R.forEach(C=>{p(C.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return w.current&&S.observe(w.current),()=>{S.disconnect()}}},[n]),m.useEffect(()=>{if(l){let A=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(A)}}},[l]);let E=()=>{c(!0)},N=()=>{c(!1),p(!1)};return o?n!=="intent"?[d,w,{}]:[d,w,{onFocus:Ws(g,E),onBlur:Ws(h,N),onMouseEnter:Ws(v,E),onMouseLeave:Ws(y,N),onTouchStart:Ws(x,E)}]:[!1,w,{}]}function Ws(n,a){return o=>{n&&n(o),o.defaultPrevented||a(o)}}function LN({page:n,...a}){let o=GE(),{router:l}=em(),c=m.useMemo(()=>dy(l.routes,n,l.basename),[l.routes,n,l.basename]);return c?o?m.createElement(zN,{page:n,matches:c,...a}):m.createElement(MN,{page:n,matches:c,...a}):null}function _N(n){let{manifest:a,routeModules:o}=nm(),[l,c]=m.useState([]);return m.useEffect(()=>{let d=!1;return CN(n,a,o).then(p=>{d||c(p)}),()=>{d=!0}},[n,a,o]),l}function zN({page:n,matches:a,...o}){let l=En(),{future:c}=nm(),{basename:d}=em(),p=m.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let g=Cy(n,d,c.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,v=[];for(let y of a)typeof y.route.shouldRevalidate=="function"?h=!0:v.push(y.route.id);return h&&v.length>0&&g.searchParams.set("_routes",v.join(",")),[g.pathname+g.search]},[d,c.v8_trailingSlashAwareDataRequests,n,l,a]);return m.createElement(m.Fragment,null,p.map(g=>m.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...o})))}function MN({page:n,matches:a,...o}){let l=En(),{future:c,manifest:d,routeModules:p}=nm(),{basename:g}=em(),{loaderData:h,matches:v}=RN(),y=m.useMemo(()=>cb(n,a,v,d,l,"data"),[n,a,v,d,l]),x=m.useMemo(()=>cb(n,a,v,d,l,"assets"),[n,a,v,d,l]),w=m.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let A=new Set,S=!1;if(a.forEach(C=>{let T=d.routes[C.route.id];!T||!T.hasLoader||(!y.some(_=>_.route.id===C.route.id)&&C.route.id in h&&p[C.route.id]?.shouldRevalidate||T.hasClientLoader?S=!0:A.add(C.route.id))}),A.size===0)return[];let R=Cy(n,g,c.v8_trailingSlashAwareDataRequests,"data");return S&&A.size>0&&R.searchParams.set("_routes",a.filter(C=>A.has(C.route.id)).map(C=>C.route.id).join(",")),[R.pathname+R.search]},[g,c.v8_trailingSlashAwareDataRequests,h,l,d,y,a,n,p]),E=m.useMemo(()=>AN(x,d),[x,d]),N=_N(x);return m.createElement(m.Fragment,null,w.map(A=>m.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...o})),E.map(A=>m.createElement("link",{key:A,rel:"modulepreload",href:A,...o})),N.map(({key:A,link:S})=>m.createElement("link",{key:A,nonce:o.nonce,...S,crossOrigin:S.crossOrigin??o.crossOrigin})))}function BN(...n){return a=>{n.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var UN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{UN&&(window.__reactRouterVersion="7.16.0")}catch{}function IN({basename:n,children:a,useTransitions:o,window:l}){let c=m.useRef();c.current==null&&(c.current=vE({window:l,v5Compat:!0}));let d=c.current,[p,g]=m.useState({action:d.action,location:d.location}),h=m.useCallback(v=>{o===!1?g(v):m.startTransition(()=>g(v))},[o]);return m.useLayoutEffect(()=>d.listen(h),[d,h]),m.createElement(pN,{basename:n,children:a,location:p.location,navigationType:p.action,navigator:d,useTransitions:o})}var Ay=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rn=m.forwardRef(function({onClick:a,discover:o="render",prefetch:l="none",relative:c,reloadDocument:d,replace:p,mask:g,state:h,target:v,to:y,preventScrollReset:x,viewTransition:w,defaultShouldRevalidate:E,...N},A){let{basename:S,navigator:R,useTransitions:C}=m.useContext(Wt),T=typeof y=="string"&&Ay.test(y),_=gy(y,S);y=_.to;let U=QE(y,{relative:c}),z=En(),L=null;if(g){let Z=bc(g,[],z.mask?z.mask.pathname:"/",!0);S!=="/"&&(Z.pathname=Z.pathname==="/"?S:Dn([S,Z.pathname])),L=R.createHref(Z)}let[B,X,te]=DN(l,N),ne=JN(y,{replace:p,mask:g,state:h,target:v,preventScrollReset:x,relative:c,viewTransition:w,defaultShouldRevalidate:E,useTransitions:C});function se(Z){a&&a(Z),Z.defaultPrevented||ne(Z)}let ie=!(_.isExternal||d),W=m.createElement("a",{...N,...te,href:(ie?L:void 0)||_.absoluteURL||U,onClick:ie?se:a,ref:BN(A,X),target:v,"data-discover":!T&&o==="render"?"true":void 0});return B&&!T?m.createElement(m.Fragment,null,W,m.createElement(LN,{page:U})):W});Rn.displayName="Link";var PN=m.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:l="",end:c=!1,style:d,to:p,viewTransition:g,children:h,...v},y){let x=pi(p,{relative:v.relative}),w=En(),E=m.useContext(yc),{navigator:N,basename:A}=m.useContext(Wt),S=E!=null&&YN(x)&&g===!0,R=N.encodeLocation?N.encodeLocation(x).pathname:x.pathname,C=w.pathname,T=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;o||(C=C.toLowerCase(),T=T?T.toLowerCase():null,R=R.toLowerCase()),T&&A&&(T=ba(T,A)||T);const _=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let U=C===R||!c&&C.startsWith(R)&&C.charAt(_)==="/",z=T!=null&&(T===R||!c&&T.startsWith(R)&&T.charAt(R.length)==="/"),L={isActive:U,isPending:z,isTransitioning:S},B=U?a:void 0,X;typeof l=="function"?X=l(L):X=[l,U?"active":null,z?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let te=typeof d=="function"?d(L):d;return m.createElement(Rn,{...v,"aria-current":B,className:X,ref:y,style:te,to:p,viewTransition:g},typeof h=="function"?h(L):h)});PN.displayName="NavLink";var $N=m.forwardRef(({discover:n="render",fetcherKey:a,navigate:o,reloadDocument:l,replace:c,state:d,method:p=Kl,action:g,onSubmit:h,relative:v,preventScrollReset:y,viewTransition:x,defaultShouldRevalidate:w,...E},N)=>{let{useTransitions:A}=m.useContext(Wt),S=FN(),R=VN(g,{relative:v}),C=p.toLowerCase()==="get"?"get":"post",T=typeof g=="string"&&Ay.test(g),_=U=>{if(h&&h(U),U.defaultPrevented)return;U.preventDefault();let z=U.nativeEvent.submitter,L=z?.getAttribute("formmethod")||p,B=()=>S(z||U.currentTarget,{fetcherKey:a,method:L,navigate:o,replace:c,state:d,relative:v,preventScrollReset:y,viewTransition:x,defaultShouldRevalidate:w});A&&o!==!1?m.startTransition(()=>B()):B()};return m.createElement("form",{ref:N,method:C,action:R,onSubmit:l?h:_,...E,"data-discover":!T&&n==="render"?"true":void 0})});$N.displayName="Form";function HN(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Oy(n){let a=m.useContext(Ho);return Ze(a,HN(n)),a}function JN(n,{target:a,replace:o,mask:l,state:c,preventScrollReset:d,relative:p,viewTransition:g,defaultShouldRevalidate:h,useTransitions:v}={}){let y=_n(),x=En(),w=pi(n,{relative:p});return m.useCallback(E=>{if(xN(E,a)){E.preventDefault();let N=o!==void 0?o:li(x)===li(w),A=()=>y(n,{replace:N,mask:l,state:c,preventScrollReset:d,relative:p,viewTransition:g,defaultShouldRevalidate:h});v?m.startTransition(()=>A()):A()}},[x,y,w,o,l,c,a,n,d,p,g,h,v])}var qN=0,GN=()=>`__${String(++qN)}__`;function FN(){let{router:n}=Oy("useSubmit"),{basename:a}=m.useContext(Wt),o=cN(),l=n.fetch,c=n.navigate;return m.useCallback(async(d,p={})=>{let{action:g,method:h,encType:v,formData:y,body:x}=jN(d,a);if(p.navigate===!1){let w=p.fetcherKey||GN();await l(w,o,p.action||g,{defaultShouldRevalidate:p.defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:y,body:x,formMethod:p.method||h,formEncType:p.encType||v,flushSync:p.flushSync})}else await c(p.action||g,{defaultShouldRevalidate:p.defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:y,body:x,formMethod:p.method||h,formEncType:p.encType||v,replace:p.replace,state:p.state,fromRouteId:o,flushSync:p.flushSync,viewTransition:p.viewTransition})},[l,c,a,o])}function VN(n,{relative:a}={}){let{basename:o}=m.useContext(Wt),l=m.useContext(Vn);Ze(l,"useFormAction must be used inside a RouteContext");let[c]=l.matches.slice(-1),d={...pi(n||".",{relative:a})},p=En();if(n==null){d.search=p.search;let g=new URLSearchParams(d.search),h=g.getAll("index");if(h.some(y=>y==="")){g.delete("index"),h.filter(x=>x).forEach(x=>g.append("index",x));let y=g.toString();d.search=y?`?${y}`:""}}return(!n||n===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(d.pathname=d.pathname==="/"?o:Dn([o,d.pathname])),li(d)}function YN(n,{relative:a}={}){let o=m.useContext(yy);Ze(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Oy("useViewTransitionState"),c=pi(n,{relative:a});if(!o.isTransitioning)return!1;let d=ba(o.currentLocation.pathname,l)||o.currentLocation.pathname,p=ba(o.nextLocation.pathname,l)||o.nextLocation.pathname;return tc(c.pathname,p)!=null||tc(c.pathname,d)!=null}var XN=uy();const Cr=$o(XN),Cf="backends_config";function ky(){try{const n=localStorage.getItem(Cf);return n&&JSON.parse(n)?.active?.url||null}catch(n){return console.error("❌ Error leyendo backend desde localStorage",n),null}}function ZN(n){try{if(!n)return;const a=localStorage.getItem(Cf);if(!a)return;const o=JSON.parse(a);localStorage.setItem(Cf,JSON.stringify({...o,active:{...o.active,url:n}}))}catch(a){console.warn("⚠️ No se pudo sincronizar backendURLGlobal",a)}}const ub="backends_config",Ty=m.createContext();function KN({children:n}){const[a,o]=m.useState([]),[l,c]=m.useState(null),[d,p]=m.useState(!1),[g,h]=m.useState(!0);m.useEffect(()=>{const w=localStorage.getItem(ub);if(w)try{const E=JSON.parse(w);o(E.backends||[]),c(E.active||null)}catch(E){console.error("⚠️ Error parseando backends_config",E)}p(!0),h(!1)},[]),m.useEffect(()=>{d&&localStorage.setItem(ub,JSON.stringify({backends:a,active:l}))},[a,l,d]),m.useEffect(()=>{l?.url&&ZN(l.url)},[l]);const v=(w,E,N=null)=>{if(!w?.trim()||!E?.trim())throw new Error("Alias y URL son obligatorios");if(a.some(S=>S.alias===w.trim()))throw new Error(`Ya existe un backend con alias "${w}"`);const A={id:crypto.randomUUID(),alias:w.trim(),url:E.trim().charAt(0).toLowerCase()+E.trim().slice(1),avatar:N};o(S=>[...S,A]),l||c(A)},y=w=>{o(E=>E.filter(N=>N.alias!==w)),l?.alias===w&&c(null)},x=w=>{const E=a.find(N=>N.alias===w);E&&l?.alias!==E.alias&&(localStorage.removeItem("auth_session"),c(E),setTimeout(()=>{window.location.replace(window.location.origin+window.location.pathname)},100))};return i.jsx(Ty.Provider,{value:{backends:a,activeBackend:l,addBackend:v,deleteBackend:y,setActiveBackend:x,loading:g},children:n})}function wc(){return m.useContext(Ty)}const QN=!0,Ry="auth_session";let lf=!1;class ac extends Error{constructor(a="Autenticación requerida"){super(a),this.name="AuthRequiredError"}}function qo(){try{return JSON.parse(localStorage.getItem(Ry))?.token||null}catch{return null}}function rc(n){if(!lf){lf=!0,console.warn("notifyAuthRequired:",n);try{window.dispatchEvent(new CustomEvent("auth:required",{detail:{message:n}}))}catch(a){console.error("Error dispatching auth:required",a)}setTimeout(()=>{lf=!1},5e3)}}function Dy(){try{localStorage.removeItem(Ry),QN&&console.log("🔒 Sesión eliminada localmente de inmediato.")}catch(n){console.error("Error limpiando localStorage",n)}}async function Ly(n){if(!n.ok)throw new Error(`Error HTTP ${n.status}: ${n.statusText}`);const a=await n.json();if(a.status==="token_invalido"||a.autorizado===!1&&a.motivo==="token_invalido"){const o=a.mensaje||"Token inválido o sesión expirada";throw Dy(),rc(o),new ac(o)}if(a.status==="sin_permiso"){const o=a.mensaje||"No tiene permiso para realizar esta acción";throw console.warn("⛔ Acción bloqueada por permisos:",o),new Error(o)}if(a.status&&!["ok","exists","warning","error_validacion","error_campos","archivo_existente"].includes(a.status))throw new Error(a.mensaje||"Error en respuesta del servidor");return a}async function yn(n,a={}){const o=ky();if(!o)throw new Error("Backend no configurado");const l=qo();if(!l)throw rc("No hay token en localStorage"),new ac("No hay token de sesión");const c=new URLSearchParams({accion:n,...a,token:l});try{const d=await fetch(`${o}?${c.toString()}`,{credentials:"omit"});return await Ly(d)}catch(d){throw console.error(`❌ apiGet [${n}]`,d),d}}async function Ke(n,a={}){const o=ky();if(!o)throw new Error("Backend no configurado");const l=qo();if(!l)throw rc("No hay token en localStorage"),new ac("No hay token de sesión");const c={accion:n,...a,token:l};try{const d=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c),credentials:"omit"});if(n==="generarBackupZIP"){if(!d.ok)throw new Error(`Error HTTP ${d.status}: ${d.statusText}`);const p=await d.json();if(p.status==="token_invalido"||p.autorizado===!1&&p.motivo==="token_invalido")throw Dy(),rc(p.mensaje||"Token inválido o sesión expirada"),new ac(p.mensaje);if(p.status==="ok"&&p.base64){const g=atob(p.base64),h=new Array(g.length);for(let x=0;x<g.length;x++)h[x]=g.charCodeAt(x);const v=new Uint8Array(h),y=new Blob([v],{type:p.mimeType||"application/zip"});return{status:"ok",mensaje:p.mensaje,blob:y,nombreArchivo:p.nombreArchivo}}return p}return await Ly(d)}catch(d){throw console.error(`❌ apiPost [${n}]`,d),d}}var cf={exports:{}};var db;function WN(){return db||(db=1,(function(n){(function(){var a={}.hasOwnProperty;function o(){for(var d="",p=0;p<arguments.length;p++){var g=arguments[p];g&&(d=c(d,l(g)))}return d}function l(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return o.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var p="";for(var g in d)a.call(d,g)&&d[g]&&(p=c(p,g));return p}function c(d,p){return p?d?d+" "+p:d+p:d}n.exports?(o.default=o,n.exports=o):window.classNames=o})()})(cf)),cf.exports}var eC=WN();const ue=$o(eC);function Af(){return Af=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},Af.apply(null,arguments)}function _y(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;o[l]=n[l]}return o}function fb(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function tC(n){var a=nC(n,"string");return typeof a=="symbol"?a:String(a)}function nC(n,a){if(typeof n!="object"||n===null)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var l=o.call(n,a);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function zy(n,a,o){var l=m.useRef(n!==void 0),c=m.useState(a),d=c[0],p=c[1],g=n!==void 0,h=l.current;return l.current=g,!g&&h&&d!==a&&p(a),[g?n:d,m.useCallback(function(v){for(var y=arguments.length,x=new Array(y>1?y-1:0),w=1;w<y;w++)x[w-1]=arguments[w];o&&o.apply(void 0,[v].concat(x)),p(v)},[o])]}function Sc(n,a){return Object.keys(a).reduce(function(o,l){var c,d=o,p=d[fb(l)],g=d[l],h=_y(d,[fb(l),l].map(tC)),v=a[l],y=zy(g,p,n[v]),x=y[0],w=y[1];return Af({},h,(c={},c[l]=x,c[v]=w,c))},n)}function Of(n,a){return Of=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},Of(n,a)}function aC(n,a){n.prototype=Object.create(a.prototype),n.prototype.constructor=n,Of(n,a)}const rC=["xxl","xl","lg","md","sm","xs"],oC="xs",hi=m.createContext({prefixes:{},breakpoints:rC,minBreakpoint:oC}),{Consumer:IR,Provider:PR}=hi;function de(n,a){const{prefixes:o}=m.useContext(hi);return n||o[a]||a}function My(){const{breakpoints:n}=m.useContext(hi);return n}function By(){const{minBreakpoint:n}=m.useContext(hi);return n}function jc(){const{dir:n}=m.useContext(hi);return n==="rtl"}function Go(n){return n&&n.ownerDocument||document}function sC(n){var a=Go(n);return a&&a.defaultView||window}function iC(n,a){return sC(n).getComputedStyle(n,a)}var lC=/([A-Z])/g;function cC(n){return n.replace(lC,"-$1").toLowerCase()}var uC=/^ms-/;function Fl(n){return cC(n).replace(uC,"-ms-")}var dC=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function fC(n){return!!(n&&dC.test(n))}function ga(n,a){var o="",l="";if(typeof a=="string")return n.style.getPropertyValue(Fl(a))||iC(n).getPropertyValue(Fl(a));Object.keys(a).forEach(function(c){var d=a[c];!d&&d!==0?n.style.removeProperty(Fl(c)):fC(c)?l+=c+"("+d+") ":o+=Fl(c)+": "+d+";"}),l&&(o+="transform: "+l+";"),n.style.cssText+=";"+o}var uf={exports:{}},df,mb;function mC(){if(mb)return df;mb=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return df=n,df}var ff,pb;function pC(){if(pb)return ff;pb=1;var n=mC();function a(){}function o(){}return o.resetWarningCache=a,ff=function(){function l(p,g,h,v,y,x){if(x!==n){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}l.isRequired=l;function c(){return l}var d={array:l,bigint:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:c,element:l,elementType:l,instanceOf:c,node:l,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:o,resetWarningCache:a};return d.PropTypes=d,d},ff}var hb;function hC(){return hb||(hb=1,uf.exports=pC()()),uf.exports}var gC=hC();const Pe=$o(gC),gb={disabled:!1},Uy=Xe.createContext(null);var vC=function(a){return a.scrollTop},ri="unmounted",Wa="exited",vn="entering",pa="entered",_o="exiting",ja=(function(n){aC(a,n);function a(l,c){var d;d=n.call(this,l,c)||this;var p=c,g=p&&!p.isMounting?l.enter:l.appear,h;return d.appearStatus=null,l.in?g?(h=Wa,d.appearStatus=vn):h=pa:l.unmountOnExit||l.mountOnEnter?h=ri:h=Wa,d.state={status:h},d.nextCallback=null,d}a.getDerivedStateFromProps=function(c,d){var p=c.in;return p&&d.status===ri?{status:Wa}:null};var o=a.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(c){var d=null;if(c!==this.props){var p=this.state.status;this.props.in?p!==vn&&p!==pa&&(d=vn):(p===vn||p===pa)&&(d=_o)}this.updateStatus(!1,d)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var c=this.props.timeout,d,p,g;return d=p=g=c,c!=null&&typeof c!="number"&&(d=c.exit,p=c.enter,g=c.appear!==void 0?c.appear:p),{exit:d,enter:p,appear:g}},o.updateStatus=function(c,d){if(c===void 0&&(c=!1),d!==null)if(this.cancelNextCallback(),d===vn){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:Cr.findDOMNode(this);p&&vC(p)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Wa&&this.setState({status:ri})},o.performEnter=function(c){var d=this,p=this.props.enter,g=this.context?this.context.isMounting:c,h=this.props.nodeRef?[g]:[Cr.findDOMNode(this),g],v=h[0],y=h[1],x=this.getTimeouts(),w=g?x.appear:x.enter;if(!c&&!p||gb.disabled){this.safeSetState({status:pa},function(){d.props.onEntered(v)});return}this.props.onEnter(v,y),this.safeSetState({status:vn},function(){d.props.onEntering(v,y),d.onTransitionEnd(w,function(){d.safeSetState({status:pa},function(){d.props.onEntered(v,y)})})})},o.performExit=function(){var c=this,d=this.props.exit,p=this.getTimeouts(),g=this.props.nodeRef?void 0:Cr.findDOMNode(this);if(!d||gb.disabled){this.safeSetState({status:Wa},function(){c.props.onExited(g)});return}this.props.onExit(g),this.safeSetState({status:_o},function(){c.props.onExiting(g),c.onTransitionEnd(p.exit,function(){c.safeSetState({status:Wa},function(){c.props.onExited(g)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(c,d){d=this.setNextCallback(d),this.setState(c,d)},o.setNextCallback=function(c){var d=this,p=!0;return this.nextCallback=function(g){p&&(p=!1,d.nextCallback=null,c(g))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},o.onTransitionEnd=function(c,d){this.setNextCallback(d);var p=this.props.nodeRef?this.props.nodeRef.current:Cr.findDOMNode(this),g=c==null&&!this.props.addEndListener;if(!p||g){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],v=h[0],y=h[1];this.props.addEndListener(v,y)}c!=null&&setTimeout(this.nextCallback,c)},o.render=function(){var c=this.state.status;if(c===ri)return null;var d=this.props,p=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var g=_y(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Xe.createElement(Uy.Provider,{value:null},typeof p=="function"?p(c,g):Xe.cloneElement(Xe.Children.only(p),g))},a})(Xe.Component);ja.contextType=Uy;ja.propTypes={};function Ao(){}ja.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ao,onEntering:Ao,onEntered:Ao,onExit:Ao,onExiting:Ao,onExited:Ao};ja.UNMOUNTED=ri;ja.EXITED=Wa;ja.ENTERING=vn;ja.ENTERED=pa;ja.EXITING=_o;function Iy(n){return n.code==="Escape"||n.keyCode===27}function bC(){const n=m.version.split(".");return{major:+n[0],minor:+n[1],patch:+n[2]}}function _r(n){if(!n||typeof n=="function")return null;const{major:a}=bC();return a>=19?n.props.ref:n.ref}const Fo=!!(typeof window<"u"&&window.document&&window.document.createElement);var kf=!1,Tf=!1;try{var mf={get passive(){return kf=!0},get once(){return Tf=kf=!0}};Fo&&(window.addEventListener("test",mf,mf),window.removeEventListener("test",mf,!0))}catch{}function am(n,a,o,l){if(l&&typeof l!="boolean"&&!Tf){var c=l.once,d=l.capture,p=o;!Tf&&c&&(p=o.__once||function g(h){this.removeEventListener(a,g,d),o.call(this,h)},o.__once=p),n.addEventListener(a,p,kf?l:d)}n.addEventListener(a,o,l)}function Rf(n,a,o,l){var c=l&&typeof l!="boolean"?l.capture:l;n.removeEventListener(a,o,c),o.__once&&n.removeEventListener(a,o.__once,c)}function ha(n,a,o,l){return am(n,a,o,l),function(){Rf(n,a,o,l)}}function yC(n,a,o,l){if(l===void 0&&(l=!0),n){var c=document.createEvent("HTMLEvents");c.initEvent(a,o,l),n.dispatchEvent(c)}}function xC(n){var a=ga(n,"transitionDuration")||"",o=a.indexOf("ms")===-1?1e3:1;return parseFloat(a)*o}function wC(n,a,o){o===void 0&&(o=5);var l=!1,c=setTimeout(function(){l||yC(n,"transitionend",!0)},a+o),d=ha(n,"transitionend",function(){l=!0},{once:!0});return function(){clearTimeout(c),d()}}function Py(n,a,o,l){o==null&&(o=xC(n)||0);var c=wC(n,o,l),d=ha(n,"transitionend",a);return function(){c(),d()}}function vb(n,a){const o=ga(n,a)||"",l=o.indexOf("ms")===-1?1e3:1;return parseFloat(o)*l}function rm(n,a){const o=vb(n,"transitionDuration"),l=vb(n,"transitionDelay"),c=Py(n,d=>{d.target===n&&(c(),a(d))},o+l)}function ei(...n){return n.filter(a=>a!=null).reduce((a,o)=>{if(typeof o!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return a===null?o:function(...c){a.apply(this,c),o.apply(this,c)}},null)}function $y(n){n.offsetHeight}const bb=n=>!n||typeof n=="function"?n:a=>{n.current=a};function SC(n,a){const o=bb(n),l=bb(a);return c=>{o&&o(c),l&&l(c)}}function Vo(n,a){return m.useMemo(()=>SC(n,a),[n,a])}function oc(n){return n&&"setState"in n?Cr.findDOMNode(n):n??null}const Ec=Xe.forwardRef(({onEnter:n,onEntering:a,onEntered:o,onExit:l,onExiting:c,onExited:d,addEndListener:p,children:g,childRef:h,...v},y)=>{const x=m.useRef(null),w=Vo(x,h),E=z=>{w(oc(z))},N=z=>L=>{z&&x.current&&z(x.current,L)},A=m.useCallback(N(n),[n]),S=m.useCallback(N(a),[a]),R=m.useCallback(N(o),[o]),C=m.useCallback(N(l),[l]),T=m.useCallback(N(c),[c]),_=m.useCallback(N(d),[d]),U=m.useCallback(N(p),[p]);return i.jsx(ja,{ref:y,...v,onEnter:A,onEntered:R,onEntering:S,onExit:C,onExited:_,onExiting:T,addEndListener:U,nodeRef:x,children:typeof g=="function"?(z,L)=>g(z,{...L,ref:E}):Xe.cloneElement(g,{ref:E})})});Ec.displayName="TransitionWrapper";const jC={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function EC(n,a){const o=`offset${n[0].toUpperCase()}${n.slice(1)}`,l=a[o],c=jC[n];return l+parseInt(ga(a,c[0]),10)+parseInt(ga(a,c[1]),10)}const NC={[Wa]:"collapse",[_o]:"collapsing",[vn]:"collapsing",[pa]:"collapse show"},Hy=Xe.forwardRef(({onEnter:n,onEntering:a,onEntered:o,onExit:l,onExiting:c,className:d,children:p,dimension:g="height",in:h=!1,timeout:v=300,mountOnEnter:y=!1,unmountOnExit:x=!1,appear:w=!1,getDimensionValue:E=EC,...N},A)=>{const S=typeof g=="function"?g():g,R=m.useMemo(()=>ei(z=>{z.style[S]="0"},n),[S,n]),C=m.useMemo(()=>ei(z=>{const L=`scroll${S[0].toUpperCase()}${S.slice(1)}`;z.style[S]=`${z[L]}px`},a),[S,a]),T=m.useMemo(()=>ei(z=>{z.style[S]=null},o),[S,o]),_=m.useMemo(()=>ei(z=>{z.style[S]=`${E(S,z)}px`,$y(z)},l),[l,E,S]),U=m.useMemo(()=>ei(z=>{z.style[S]=null},c),[S,c]);return i.jsx(Ec,{ref:A,addEndListener:rm,...N,"aria-expanded":N.role?h:null,onEnter:R,onEntering:C,onEntered:T,onExit:_,onExiting:U,childRef:_r(p),in:h,timeout:v,mountOnEnter:y,unmountOnExit:x,appear:w,children:(z,L)=>Xe.cloneElement(p,{...L,className:ue(d,p.props.className,NC[z],S==="width"&&"collapse-horizontal")})})});Hy.displayName="Collapse";function CC(n){const a=m.useRef(n);return m.useEffect(()=>{a.current=n},[n]),a}function ya(n){const a=CC(n);return m.useCallback(function(...o){return a.current&&a.current(...o)},[a])}const Nc=(n=>m.forwardRef((a,o)=>i.jsx("div",{...a,ref:o,className:ue(a.className,n)})));function Df(){return m.useState(null)}function AC(n){const a=m.useRef(n);return m.useEffect(()=>{a.current=n},[n]),a}function bt(n){const a=AC(n);return m.useCallback(function(...o){return a.current&&a.current(...o)},[a])}function OC(n,a,o,l=!1){const c=bt(o);m.useEffect(()=>{const d=typeof n=="function"?n():n;return d.addEventListener(a,c,l),()=>d.removeEventListener(a,c,l)},[n])}function Jy(){const n=m.useRef(!0),a=m.useRef(()=>n.current);return m.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),a.current}function qy(n){const a=m.useRef(null);return m.useEffect(()=>{a.current=n}),a.current}const kC=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",TC=typeof document<"u",yb=TC||kC?m.useLayoutEffect:m.useEffect,RC=["as","disabled"];function DC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function LC(n){return!n||n.trim()==="#"}function om({tagName:n,disabled:a,href:o,target:l,rel:c,role:d,onClick:p,tabIndex:g=0,type:h}){n||(o!=null||l!=null||c!=null?n="a":n="button");const v={tagName:n};if(n==="button")return[{type:h||"button",disabled:a},v];const y=w=>{if((a||n==="a"&&LC(o))&&w.preventDefault(),a){w.stopPropagation();return}p?.(w)},x=w=>{w.key===" "&&(w.preventDefault(),y(w))};return n==="a"&&(o||(o="#"),a&&(o=void 0)),[{role:d??"button",disabled:void 0,tabIndex:a?void 0:g,href:o,target:n==="a"?l:void 0,"aria-disabled":a||void 0,rel:n==="a"?c:void 0,onClick:y,onKeyDown:x},v]}const sm=m.forwardRef((n,a)=>{let{as:o,disabled:l}=n,c=DC(n,RC);const[d,{tagName:p}]=om(Object.assign({tagName:o,disabled:l},c));return i.jsx(p,Object.assign({},c,d,{ref:a}))});sm.displayName="Button";const _C=["onKeyDown"];function zC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function MC(n){return!n||n.trim()==="#"}const im=m.forwardRef((n,a)=>{let{onKeyDown:o}=n,l=zC(n,_C);const[c]=om(Object.assign({tagName:"a"},l)),d=bt(p=>{c.onKeyDown(p),o?.(p)});return MC(l.href)||l.role==="button"?i.jsx("a",Object.assign({ref:a},l,c,{onKeyDown:d})):i.jsx("a",Object.assign({ref:a},l,{onKeyDown:o}))});im.displayName="Anchor";const BC={[vn]:"show",[pa]:"show"},xa=m.forwardRef(({className:n,children:a,transitionClasses:o={},onEnter:l,...c},d)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},g=m.useCallback((h,v)=>{$y(h),l?.(h,v)},[l]);return i.jsx(Ec,{ref:d,addEndListener:rm,...p,onEnter:g,childRef:_r(a),children:(h,v)=>m.cloneElement(a,{...v,className:ue("fade",n,a.props.className,BC[h],o[h])})})});xa.displayName="Fade";const UC={"aria-label":Pe.string,onClick:Pe.func,variant:Pe.oneOf(["white"])},Cc=m.forwardRef(({className:n,variant:a,"aria-label":o="Close",...l},c)=>i.jsx("button",{ref:c,type:"button",className:ue("btn-close",a&&`btn-close-${a}`,n),"aria-label":o,...l}));Cc.displayName="CloseButton";Cc.propTypes=UC;const To=m.forwardRef(({bsPrefix:n,bg:a="primary",pill:o=!1,text:l,className:c,as:d="span",...p},g)=>{const h=de(n,"badge");return i.jsx(d,{ref:g,...p,className:ue(c,h,o&&"rounded-pill",l&&`text-${l}`,a&&`bg-${a}`)})});To.displayName="Badge";const Te=m.forwardRef(({as:n,bsPrefix:a,variant:o="primary",size:l,active:c=!1,disabled:d=!1,className:p,...g},h)=>{const v=de(a,"btn"),[y,{tagName:x}]=om({tagName:n,disabled:d,...g}),w=x;return i.jsx(w,{...y,...g,ref:h,disabled:d,className:ue(p,v,c&&"active",o&&`${v}-${o}`,l&&`${v}-${l}`,g.href&&d&&"disabled")})});Te.displayName="Button";const lm=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},c)=>(a=de(a,"card-body"),i.jsx(o,{ref:c,className:ue(n,a),...l})));lm.displayName="CardBody";const Gy=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},c)=>(a=de(a,"card-footer"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Gy.displayName="CardFooter";const cm=m.createContext(null);cm.displayName="CardHeaderContext";const Fy=m.forwardRef(({bsPrefix:n,className:a,as:o="div",...l},c)=>{const d=de(n,"card-header"),p=m.useMemo(()=>({cardHeaderBsPrefix:d}),[d]);return i.jsx(cm.Provider,{value:p,children:i.jsx(o,{ref:c,...l,className:ue(a,d)})})});Fy.displayName="CardHeader";const Vy=m.forwardRef(({bsPrefix:n,className:a,variant:o,as:l="img",...c},d)=>{const p=de(n,"card-img");return i.jsx(l,{ref:d,className:ue(o?`${p}-${o}`:p,a),...c})});Vy.displayName="CardImg";const Yy=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},c)=>(a=de(a,"card-img-overlay"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Yy.displayName="CardImgOverlay";const Xy=m.forwardRef(({className:n,bsPrefix:a,as:o="a",...l},c)=>(a=de(a,"card-link"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Xy.displayName="CardLink";const IC=Nc("h6"),Zy=m.forwardRef(({className:n,bsPrefix:a,as:o=IC,...l},c)=>(a=de(a,"card-subtitle"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Zy.displayName="CardSubtitle";const Ky=m.forwardRef(({className:n,bsPrefix:a,as:o="p",...l},c)=>(a=de(a,"card-text"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Ky.displayName="CardText";const PC=Nc("h5"),Qy=m.forwardRef(({className:n,bsPrefix:a,as:o=PC,...l},c)=>(a=de(a,"card-title"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Qy.displayName="CardTitle";const Wy=m.forwardRef(({bsPrefix:n,className:a,bg:o,text:l,border:c,body:d=!1,children:p,as:g="div",...h},v)=>{const y=de(n,"card");return i.jsx(g,{ref:v,...h,className:ue(a,y,o&&`bg-${o}`,l&&`text-${l}`,c&&`border-${c}`),children:d?i.jsx(lm,{children:p}):p})});Wy.displayName="Card";const Ro=Object.assign(Wy,{Img:Vy,Title:Qy,Subtitle:Zy,Body:lm,Link:Xy,Text:Ky,Header:Fy,Footer:Gy,ImgOverlay:Yy});function $C(){const n=m.useRef(!0),a=m.useRef(()=>n.current);return m.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),a.current}function HC(n){const a=m.useRef(n);return a.current=n,a}function ex(n){const a=HC(n);m.useEffect(()=>()=>a.current(),[])}const Lf=2**31-1;function tx(n,a,o){const l=o-Date.now();n.current=l<=Lf?setTimeout(a,l):setTimeout(()=>tx(n,a,o),Lf)}function nx(){const n=$C(),a=m.useRef();return ex(()=>clearTimeout(a.current)),m.useMemo(()=>{const o=()=>clearTimeout(a.current);function l(c,d=0){n()&&(o(),d<=Lf?a.current=setTimeout(c,d):tx(a,c,Date.now()+d))}return{set:l,clear:o,handleRef:a}},[])}function xb(n,a){let o=0;return m.Children.map(n,l=>m.isValidElement(l)?a(l,o++):l)}function JC(n,a){let o=0;m.Children.forEach(n,l=>{m.isValidElement(l)&&a(l,o++)})}function qC(n,a){return m.Children.toArray(n).some(o=>m.isValidElement(o)&&o.type===a)}function GC({as:n,bsPrefix:a,className:o,...l}){a=de(a,"col");const c=My(),d=By(),p=[],g=[];return c.forEach(h=>{const v=l[h];delete l[h];let y,x,w;typeof v=="object"&&v!=null?{span:y,offset:x,order:w}=v:y=v;const E=h!==d?`-${h}`:"";y&&p.push(y===!0?`${a}${E}`:`${a}${E}-${y}`),w!=null&&g.push(`order${E}-${w}`),x!=null&&g.push(`offset${E}-${x}`)}),[{...l,className:ue(o,...p,...g)},{as:n,bsPrefix:a,spans:p}]}const Ln=m.forwardRef((n,a)=>{const[{className:o,...l},{as:c="div",bsPrefix:d,spans:p}]=GC(n);return i.jsx(c,{...l,ref:a,className:ue(o,!p.length&&d)})});Ln.displayName="Col";const Yo=m.forwardRef(({bsPrefix:n,fluid:a=!1,as:o="div",className:l,...c},d)=>{const p=de(n,"container"),g=typeof a=="string"?`-${a}`:"-fluid";return i.jsx(o,{ref:d,...c,className:ue(l,a?`${p}${g}`:p)})});Yo.displayName="Container";var FC=Function.prototype.bind.call(Function.prototype.call,[].slice);function ma(n,a){return FC(n.querySelectorAll(a))}function ax(n,a,o){const l=m.useRef(n!==void 0),[c,d]=m.useState(a),p=n!==void 0,g=l.current;return l.current=p,!p&&g&&c!==a&&d(a),[p?n:c,m.useCallback((...h)=>{const[v,...y]=h;let x=o?.(v,...y);return d(v),x},[o])]}function rx(){const[,n]=m.useReducer(a=>a+1,0);return n}const Ac=m.createContext(null);var wb=Object.prototype.hasOwnProperty;function Sb(n,a,o){for(o of n.keys())if(oi(o,a))return o}function oi(n,a){var o,l,c;if(n===a)return!0;if(n&&a&&(o=n.constructor)===a.constructor){if(o===Date)return n.getTime()===a.getTime();if(o===RegExp)return n.toString()===a.toString();if(o===Array){if((l=n.length)===a.length)for(;l--&&oi(n[l],a[l]););return l===-1}if(o===Set){if(n.size!==a.size)return!1;for(l of n)if(c=l,c&&typeof c=="object"&&(c=Sb(a,c),!c)||!a.has(c))return!1;return!0}if(o===Map){if(n.size!==a.size)return!1;for(l of n)if(c=l[0],c&&typeof c=="object"&&(c=Sb(a,c),!c)||!oi(l[1],a.get(c)))return!1;return!0}if(o===ArrayBuffer)n=new Uint8Array(n),a=new Uint8Array(a);else if(o===DataView){if((l=n.byteLength)===a.byteLength)for(;l--&&n.getInt8(l)===a.getInt8(l););return l===-1}if(ArrayBuffer.isView(n)){if((l=n.byteLength)===a.byteLength)for(;l--&&n[l]===a[l];);return l===-1}if(!o||typeof n=="object"){l=0;for(o in n)if(wb.call(n,o)&&++l&&!wb.call(a,o)||!(o in a)||!oi(n[o],a[o]))return!1;return Object.keys(a).length===l}}return n!==n&&a!==a}function VC(n){const a=Jy();return[n[0],m.useCallback(o=>{if(a())return n[1](o)},[a,n[1]])]}var Mt="top",wn="bottom",Sn="right",Bt="left",um="auto",gi=[Mt,wn,Sn,Bt],zo="start",ci="end",YC="clippingParents",ox="viewport",ti="popper",XC="reference",jb=gi.reduce(function(n,a){return n.concat([a+"-"+zo,a+"-"+ci])},[]),sx=[].concat(gi,[um]).reduce(function(n,a){return n.concat([a,a+"-"+zo,a+"-"+ci])},[]),ZC="beforeRead",KC="read",QC="afterRead",WC="beforeMain",e2="main",t2="afterMain",n2="beforeWrite",a2="write",r2="afterWrite",o2=[ZC,KC,QC,WC,e2,t2,n2,a2,r2];function Jn(n){return n.split("-")[0]}function Kt(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var a=n.ownerDocument;return a&&a.defaultView||window}return n}function kr(n){var a=Kt(n).Element;return n instanceof a||n instanceof Element}function qn(n){var a=Kt(n).HTMLElement;return n instanceof a||n instanceof HTMLElement}function dm(n){if(typeof ShadowRoot>"u")return!1;var a=Kt(n).ShadowRoot;return n instanceof a||n instanceof ShadowRoot}var Ar=Math.max,sc=Math.min,Mo=Math.round;function _f(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function ix(){return!/^((?!chrome|android).)*safari/i.test(_f())}function Bo(n,a,o){a===void 0&&(a=!1),o===void 0&&(o=!1);var l=n.getBoundingClientRect(),c=1,d=1;a&&qn(n)&&(c=n.offsetWidth>0&&Mo(l.width)/n.offsetWidth||1,d=n.offsetHeight>0&&Mo(l.height)/n.offsetHeight||1);var p=kr(n)?Kt(n):window,g=p.visualViewport,h=!ix()&&o,v=(l.left+(h&&g?g.offsetLeft:0))/c,y=(l.top+(h&&g?g.offsetTop:0))/d,x=l.width/c,w=l.height/d;return{width:x,height:w,top:y,right:v+x,bottom:y+w,left:v,x:v,y}}function fm(n){var a=Bo(n),o=n.offsetWidth,l=n.offsetHeight;return Math.abs(a.width-o)<=1&&(o=a.width),Math.abs(a.height-l)<=1&&(l=a.height),{x:n.offsetLeft,y:n.offsetTop,width:o,height:l}}function lx(n,a){var o=a.getRootNode&&a.getRootNode();if(n.contains(a))return!0;if(o&&dm(o)){var l=a;do{if(l&&n.isSameNode(l))return!0;l=l.parentNode||l.host}while(l)}return!1}function ar(n){return n?(n.nodeName||"").toLowerCase():null}function wa(n){return Kt(n).getComputedStyle(n)}function s2(n){return["table","td","th"].indexOf(ar(n))>=0}function rr(n){return((kr(n)?n.ownerDocument:n.document)||window.document).documentElement}function Oc(n){return ar(n)==="html"?n:n.assignedSlot||n.parentNode||(dm(n)?n.host:null)||rr(n)}function Eb(n){return!qn(n)||wa(n).position==="fixed"?null:n.offsetParent}function i2(n){var a=/firefox/i.test(_f()),o=/Trident/i.test(_f());if(o&&qn(n)){var l=wa(n);if(l.position==="fixed")return null}var c=Oc(n);for(dm(c)&&(c=c.host);qn(c)&&["html","body"].indexOf(ar(c))<0;){var d=wa(c);if(d.transform!=="none"||d.perspective!=="none"||d.contain==="paint"||["transform","perspective"].indexOf(d.willChange)!==-1||a&&d.willChange==="filter"||a&&d.filter&&d.filter!=="none")return c;c=c.parentNode}return null}function vi(n){for(var a=Kt(n),o=Eb(n);o&&s2(o)&&wa(o).position==="static";)o=Eb(o);return o&&(ar(o)==="html"||ar(o)==="body"&&wa(o).position==="static")?a:o||i2(n)||a}function mm(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function si(n,a,o){return Ar(n,sc(a,o))}function l2(n,a,o){var l=si(n,a,o);return l>o?o:l}function cx(){return{top:0,right:0,bottom:0,left:0}}function ux(n){return Object.assign({},cx(),n)}function dx(n,a){return a.reduce(function(o,l){return o[l]=n,o},{})}var c2=function(a,o){return a=typeof a=="function"?a(Object.assign({},o.rects,{placement:o.placement})):a,ux(typeof a!="number"?a:dx(a,gi))};function u2(n){var a,o=n.state,l=n.name,c=n.options,d=o.elements.arrow,p=o.modifiersData.popperOffsets,g=Jn(o.placement),h=mm(g),v=[Bt,Sn].indexOf(g)>=0,y=v?"height":"width";if(!(!d||!p)){var x=c2(c.padding,o),w=fm(d),E=h==="y"?Mt:Bt,N=h==="y"?wn:Sn,A=o.rects.reference[y]+o.rects.reference[h]-p[h]-o.rects.popper[y],S=p[h]-o.rects.reference[h],R=vi(d),C=R?h==="y"?R.clientHeight||0:R.clientWidth||0:0,T=A/2-S/2,_=x[E],U=C-w[y]-x[N],z=C/2-w[y]/2+T,L=si(_,z,U),B=h;o.modifiersData[l]=(a={},a[B]=L,a.centerOffset=L-z,a)}}function d2(n){var a=n.state,o=n.options,l=o.element,c=l===void 0?"[data-popper-arrow]":l;c!=null&&(typeof c=="string"&&(c=a.elements.popper.querySelector(c),!c)||lx(a.elements.popper,c)&&(a.elements.arrow=c))}const f2={name:"arrow",enabled:!0,phase:"main",fn:u2,effect:d2,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Uo(n){return n.split("-")[1]}var m2={top:"auto",right:"auto",bottom:"auto",left:"auto"};function p2(n,a){var o=n.x,l=n.y,c=a.devicePixelRatio||1;return{x:Mo(o*c)/c||0,y:Mo(l*c)/c||0}}function Nb(n){var a,o=n.popper,l=n.popperRect,c=n.placement,d=n.variation,p=n.offsets,g=n.position,h=n.gpuAcceleration,v=n.adaptive,y=n.roundOffsets,x=n.isFixed,w=p.x,E=w===void 0?0:w,N=p.y,A=N===void 0?0:N,S=typeof y=="function"?y({x:E,y:A}):{x:E,y:A};E=S.x,A=S.y;var R=p.hasOwnProperty("x"),C=p.hasOwnProperty("y"),T=Bt,_=Mt,U=window;if(v){var z=vi(o),L="clientHeight",B="clientWidth";if(z===Kt(o)&&(z=rr(o),wa(z).position!=="static"&&g==="absolute"&&(L="scrollHeight",B="scrollWidth")),z=z,c===Mt||(c===Bt||c===Sn)&&d===ci){_=wn;var X=x&&z===U&&U.visualViewport?U.visualViewport.height:z[L];A-=X-l.height,A*=h?1:-1}if(c===Bt||(c===Mt||c===wn)&&d===ci){T=Sn;var te=x&&z===U&&U.visualViewport?U.visualViewport.width:z[B];E-=te-l.width,E*=h?1:-1}}var ne=Object.assign({position:g},v&&m2),se=y===!0?p2({x:E,y:A},Kt(o)):{x:E,y:A};if(E=se.x,A=se.y,h){var ie;return Object.assign({},ne,(ie={},ie[_]=C?"0":"",ie[T]=R?"0":"",ie.transform=(U.devicePixelRatio||1)<=1?"translate("+E+"px, "+A+"px)":"translate3d("+E+"px, "+A+"px, 0)",ie))}return Object.assign({},ne,(a={},a[_]=C?A+"px":"",a[T]=R?E+"px":"",a.transform="",a))}function h2(n){var a=n.state,o=n.options,l=o.gpuAcceleration,c=l===void 0?!0:l,d=o.adaptive,p=d===void 0?!0:d,g=o.roundOffsets,h=g===void 0?!0:g,v={placement:Jn(a.placement),variation:Uo(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:c,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,Nb(Object.assign({},v,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:p,roundOffsets:h})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,Nb(Object.assign({},v,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})}const g2={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:h2,data:{}};var Vl={passive:!0};function v2(n){var a=n.state,o=n.instance,l=n.options,c=l.scroll,d=c===void 0?!0:c,p=l.resize,g=p===void 0?!0:p,h=Kt(a.elements.popper),v=[].concat(a.scrollParents.reference,a.scrollParents.popper);return d&&v.forEach(function(y){y.addEventListener("scroll",o.update,Vl)}),g&&h.addEventListener("resize",o.update,Vl),function(){d&&v.forEach(function(y){y.removeEventListener("scroll",o.update,Vl)}),g&&h.removeEventListener("resize",o.update,Vl)}}const b2={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:v2,data:{}};var y2={left:"right",right:"left",bottom:"top",top:"bottom"};function Wl(n){return n.replace(/left|right|bottom|top/g,function(a){return y2[a]})}var x2={start:"end",end:"start"};function Cb(n){return n.replace(/start|end/g,function(a){return x2[a]})}function pm(n){var a=Kt(n),o=a.pageXOffset,l=a.pageYOffset;return{scrollLeft:o,scrollTop:l}}function hm(n){return Bo(rr(n)).left+pm(n).scrollLeft}function w2(n,a){var o=Kt(n),l=rr(n),c=o.visualViewport,d=l.clientWidth,p=l.clientHeight,g=0,h=0;if(c){d=c.width,p=c.height;var v=ix();(v||!v&&a==="fixed")&&(g=c.offsetLeft,h=c.offsetTop)}return{width:d,height:p,x:g+hm(n),y:h}}function S2(n){var a,o=rr(n),l=pm(n),c=(a=n.ownerDocument)==null?void 0:a.body,d=Ar(o.scrollWidth,o.clientWidth,c?c.scrollWidth:0,c?c.clientWidth:0),p=Ar(o.scrollHeight,o.clientHeight,c?c.scrollHeight:0,c?c.clientHeight:0),g=-l.scrollLeft+hm(n),h=-l.scrollTop;return wa(c||o).direction==="rtl"&&(g+=Ar(o.clientWidth,c?c.clientWidth:0)-d),{width:d,height:p,x:g,y:h}}function gm(n){var a=wa(n),o=a.overflow,l=a.overflowX,c=a.overflowY;return/auto|scroll|overlay|hidden/.test(o+c+l)}function fx(n){return["html","body","#document"].indexOf(ar(n))>=0?n.ownerDocument.body:qn(n)&&gm(n)?n:fx(Oc(n))}function ii(n,a){var o;a===void 0&&(a=[]);var l=fx(n),c=l===((o=n.ownerDocument)==null?void 0:o.body),d=Kt(l),p=c?[d].concat(d.visualViewport||[],gm(l)?l:[]):l,g=a.concat(p);return c?g:g.concat(ii(Oc(p)))}function zf(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function j2(n,a){var o=Bo(n,!1,a==="fixed");return o.top=o.top+n.clientTop,o.left=o.left+n.clientLeft,o.bottom=o.top+n.clientHeight,o.right=o.left+n.clientWidth,o.width=n.clientWidth,o.height=n.clientHeight,o.x=o.left,o.y=o.top,o}function Ab(n,a,o){return a===ox?zf(w2(n,o)):kr(a)?j2(a,o):zf(S2(rr(n)))}function E2(n){var a=ii(Oc(n)),o=["absolute","fixed"].indexOf(wa(n).position)>=0,l=o&&qn(n)?vi(n):n;return kr(l)?a.filter(function(c){return kr(c)&&lx(c,l)&&ar(c)!=="body"}):[]}function N2(n,a,o,l){var c=a==="clippingParents"?E2(n):[].concat(a),d=[].concat(c,[o]),p=d[0],g=d.reduce(function(h,v){var y=Ab(n,v,l);return h.top=Ar(y.top,h.top),h.right=sc(y.right,h.right),h.bottom=sc(y.bottom,h.bottom),h.left=Ar(y.left,h.left),h},Ab(n,p,l));return g.width=g.right-g.left,g.height=g.bottom-g.top,g.x=g.left,g.y=g.top,g}function mx(n){var a=n.reference,o=n.element,l=n.placement,c=l?Jn(l):null,d=l?Uo(l):null,p=a.x+a.width/2-o.width/2,g=a.y+a.height/2-o.height/2,h;switch(c){case Mt:h={x:p,y:a.y-o.height};break;case wn:h={x:p,y:a.y+a.height};break;case Sn:h={x:a.x+a.width,y:g};break;case Bt:h={x:a.x-o.width,y:g};break;default:h={x:a.x,y:a.y}}var v=c?mm(c):null;if(v!=null){var y=v==="y"?"height":"width";switch(d){case zo:h[v]=h[v]-(a[y]/2-o[y]/2);break;case ci:h[v]=h[v]+(a[y]/2-o[y]/2);break}}return h}function ui(n,a){a===void 0&&(a={});var o=a,l=o.placement,c=l===void 0?n.placement:l,d=o.strategy,p=d===void 0?n.strategy:d,g=o.boundary,h=g===void 0?YC:g,v=o.rootBoundary,y=v===void 0?ox:v,x=o.elementContext,w=x===void 0?ti:x,E=o.altBoundary,N=E===void 0?!1:E,A=o.padding,S=A===void 0?0:A,R=ux(typeof S!="number"?S:dx(S,gi)),C=w===ti?XC:ti,T=n.rects.popper,_=n.elements[N?C:w],U=N2(kr(_)?_:_.contextElement||rr(n.elements.popper),h,y,p),z=Bo(n.elements.reference),L=mx({reference:z,element:T,placement:c}),B=zf(Object.assign({},T,L)),X=w===ti?B:z,te={top:U.top-X.top+R.top,bottom:X.bottom-U.bottom+R.bottom,left:U.left-X.left+R.left,right:X.right-U.right+R.right},ne=n.modifiersData.offset;if(w===ti&&ne){var se=ne[c];Object.keys(te).forEach(function(ie){var W=[Sn,wn].indexOf(ie)>=0?1:-1,Z=[Mt,wn].indexOf(ie)>=0?"y":"x";te[ie]+=se[Z]*W})}return te}function C2(n,a){a===void 0&&(a={});var o=a,l=o.placement,c=o.boundary,d=o.rootBoundary,p=o.padding,g=o.flipVariations,h=o.allowedAutoPlacements,v=h===void 0?sx:h,y=Uo(l),x=y?g?jb:jb.filter(function(N){return Uo(N)===y}):gi,w=x.filter(function(N){return v.indexOf(N)>=0});w.length===0&&(w=x);var E=w.reduce(function(N,A){return N[A]=ui(n,{placement:A,boundary:c,rootBoundary:d,padding:p})[Jn(A)],N},{});return Object.keys(E).sort(function(N,A){return E[N]-E[A]})}function A2(n){if(Jn(n)===um)return[];var a=Wl(n);return[Cb(n),a,Cb(a)]}function O2(n){var a=n.state,o=n.options,l=n.name;if(!a.modifiersData[l]._skip){for(var c=o.mainAxis,d=c===void 0?!0:c,p=o.altAxis,g=p===void 0?!0:p,h=o.fallbackPlacements,v=o.padding,y=o.boundary,x=o.rootBoundary,w=o.altBoundary,E=o.flipVariations,N=E===void 0?!0:E,A=o.allowedAutoPlacements,S=a.options.placement,R=Jn(S),C=R===S,T=h||(C||!N?[Wl(S)]:A2(S)),_=[S].concat(T).reduce(function(P,ce){return P.concat(Jn(ce)===um?C2(a,{placement:ce,boundary:y,rootBoundary:x,padding:v,flipVariations:N,allowedAutoPlacements:A}):ce)},[]),U=a.rects.reference,z=a.rects.popper,L=new Map,B=!0,X=_[0],te=0;te<_.length;te++){var ne=_[te],se=Jn(ne),ie=Uo(ne)===zo,W=[Mt,wn].indexOf(se)>=0,Z=W?"width":"height",k=ui(a,{placement:ne,boundary:y,rootBoundary:x,altBoundary:w,padding:v}),F=W?ie?Sn:Bt:ie?wn:Mt;U[Z]>z[Z]&&(F=Wl(F));var re=Wl(F),V=[];if(d&&V.push(k[se]<=0),g&&V.push(k[F]<=0,k[re]<=0),V.every(function(P){return P})){X=ne,B=!1;break}L.set(ne,V)}if(B)for(var le=N?3:1,O=function(ce){var pe=_.find(function(xe){var Me=L.get(xe);if(Me)return Me.slice(0,ce).every(function(je){return je})});if(pe)return X=pe,"break"},q=le;q>0;q--){var ae=O(q);if(ae==="break")break}a.placement!==X&&(a.modifiersData[l]._skip=!0,a.placement=X,a.reset=!0)}}const k2={name:"flip",enabled:!0,phase:"main",fn:O2,requiresIfExists:["offset"],data:{_skip:!1}};function Ob(n,a,o){return o===void 0&&(o={x:0,y:0}),{top:n.top-a.height-o.y,right:n.right-a.width+o.x,bottom:n.bottom-a.height+o.y,left:n.left-a.width-o.x}}function kb(n){return[Mt,Sn,wn,Bt].some(function(a){return n[a]>=0})}function T2(n){var a=n.state,o=n.name,l=a.rects.reference,c=a.rects.popper,d=a.modifiersData.preventOverflow,p=ui(a,{elementContext:"reference"}),g=ui(a,{altBoundary:!0}),h=Ob(p,l),v=Ob(g,c,d),y=kb(h),x=kb(v);a.modifiersData[o]={referenceClippingOffsets:h,popperEscapeOffsets:v,isReferenceHidden:y,hasPopperEscaped:x},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":y,"data-popper-escaped":x})}const R2={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:T2};function D2(n,a,o){var l=Jn(n),c=[Bt,Mt].indexOf(l)>=0?-1:1,d=typeof o=="function"?o(Object.assign({},a,{placement:n})):o,p=d[0],g=d[1];return p=p||0,g=(g||0)*c,[Bt,Sn].indexOf(l)>=0?{x:g,y:p}:{x:p,y:g}}function L2(n){var a=n.state,o=n.options,l=n.name,c=o.offset,d=c===void 0?[0,0]:c,p=sx.reduce(function(y,x){return y[x]=D2(x,a.rects,d),y},{}),g=p[a.placement],h=g.x,v=g.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=h,a.modifiersData.popperOffsets.y+=v),a.modifiersData[l]=p}const _2={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:L2};function z2(n){var a=n.state,o=n.name;a.modifiersData[o]=mx({reference:a.rects.reference,element:a.rects.popper,placement:a.placement})}const M2={name:"popperOffsets",enabled:!0,phase:"read",fn:z2,data:{}};function B2(n){return n==="x"?"y":"x"}function U2(n){var a=n.state,o=n.options,l=n.name,c=o.mainAxis,d=c===void 0?!0:c,p=o.altAxis,g=p===void 0?!1:p,h=o.boundary,v=o.rootBoundary,y=o.altBoundary,x=o.padding,w=o.tether,E=w===void 0?!0:w,N=o.tetherOffset,A=N===void 0?0:N,S=ui(a,{boundary:h,rootBoundary:v,padding:x,altBoundary:y}),R=Jn(a.placement),C=Uo(a.placement),T=!C,_=mm(R),U=B2(_),z=a.modifiersData.popperOffsets,L=a.rects.reference,B=a.rects.popper,X=typeof A=="function"?A(Object.assign({},a.rects,{placement:a.placement})):A,te=typeof X=="number"?{mainAxis:X,altAxis:X}:Object.assign({mainAxis:0,altAxis:0},X),ne=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,se={x:0,y:0};if(z){if(d){var ie,W=_==="y"?Mt:Bt,Z=_==="y"?wn:Sn,k=_==="y"?"height":"width",F=z[_],re=F+S[W],V=F-S[Z],le=E?-B[k]/2:0,O=C===zo?L[k]:B[k],q=C===zo?-B[k]:-L[k],ae=a.elements.arrow,P=E&&ae?fm(ae):{width:0,height:0},ce=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:cx(),pe=ce[W],xe=ce[Z],Me=si(0,L[k],P[k]),je=T?L[k]/2-le-Me-pe-te.mainAxis:O-Me-pe-te.mainAxis,jt=T?-L[k]/2+le+Me+xe+te.mainAxis:q+Me+xe+te.mainAxis,It=a.elements.arrow&&vi(a.elements.arrow),nn=It?_==="y"?It.clientTop||0:It.clientLeft||0:0,Cn=(ie=ne?.[_])!=null?ie:0,xt=F+je-Cn-nn,Be=F+jt-Cn,An=si(E?sc(re,xt):re,F,E?Ar(V,Be):V);z[_]=An,se[_]=An-F}if(g){var zn,Ur=_==="x"?Mt:Bt,or=_==="x"?wn:Sn,Pt=z[U],Mn=U==="y"?"height":"width",Ir=Pt+S[Ur],Pr=Pt-S[or],rt=[Mt,Bt].indexOf(R)!==-1,$r=(zn=ne?.[U])!=null?zn:0,Ce=rt?Ir:Pt-L[Mn]-B[Mn]-$r+te.altAxis,an=rt?Pt+L[Mn]+B[Mn]-$r-te.altAxis:Pr,Bn=E&&rt?l2(Ce,Pt,an):si(E?Ce:Ir,Pt,E?an:Pr);z[U]=Bn,se[U]=Bn-Pt}a.modifiersData[l]=se}}const I2={name:"preventOverflow",enabled:!0,phase:"main",fn:U2,requiresIfExists:["offset"]};function P2(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function $2(n){return n===Kt(n)||!qn(n)?pm(n):P2(n)}function H2(n){var a=n.getBoundingClientRect(),o=Mo(a.width)/n.offsetWidth||1,l=Mo(a.height)/n.offsetHeight||1;return o!==1||l!==1}function J2(n,a,o){o===void 0&&(o=!1);var l=qn(a),c=qn(a)&&H2(a),d=rr(a),p=Bo(n,c,o),g={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(l||!l&&!o)&&((ar(a)!=="body"||gm(d))&&(g=$2(a)),qn(a)?(h=Bo(a,!0),h.x+=a.clientLeft,h.y+=a.clientTop):d&&(h.x=hm(d))),{x:p.left+g.scrollLeft-h.x,y:p.top+g.scrollTop-h.y,width:p.width,height:p.height}}function q2(n){var a=new Map,o=new Set,l=[];n.forEach(function(d){a.set(d.name,d)});function c(d){o.add(d.name);var p=[].concat(d.requires||[],d.requiresIfExists||[]);p.forEach(function(g){if(!o.has(g)){var h=a.get(g);h&&c(h)}}),l.push(d)}return n.forEach(function(d){o.has(d.name)||c(d)}),l}function G2(n){var a=q2(n);return o2.reduce(function(o,l){return o.concat(a.filter(function(c){return c.phase===l}))},[])}function F2(n){var a;return function(){return a||(a=new Promise(function(o){Promise.resolve().then(function(){a=void 0,o(n())})})),a}}function V2(n){var a=n.reduce(function(o,l){var c=o[l.name];return o[l.name]=c?Object.assign({},c,l,{options:Object.assign({},c.options,l.options),data:Object.assign({},c.data,l.data)}):l,o},{});return Object.keys(a).map(function(o){return a[o]})}var Tb={placement:"bottom",modifiers:[],strategy:"absolute"};function Rb(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return!a.some(function(l){return!(l&&typeof l.getBoundingClientRect=="function")})}function Y2(n){n===void 0&&(n={});var a=n,o=a.defaultModifiers,l=o===void 0?[]:o,c=a.defaultOptions,d=c===void 0?Tb:c;return function(g,h,v){v===void 0&&(v=d);var y={placement:"bottom",orderedModifiers:[],options:Object.assign({},Tb,d),modifiersData:{},elements:{reference:g,popper:h},attributes:{},styles:{}},x=[],w=!1,E={state:y,setOptions:function(R){var C=typeof R=="function"?R(y.options):R;A(),y.options=Object.assign({},d,y.options,C),y.scrollParents={reference:kr(g)?ii(g):g.contextElement?ii(g.contextElement):[],popper:ii(h)};var T=G2(V2([].concat(l,y.options.modifiers)));return y.orderedModifiers=T.filter(function(_){return _.enabled}),N(),E.update()},forceUpdate:function(){if(!w){var R=y.elements,C=R.reference,T=R.popper;if(Rb(C,T)){y.rects={reference:J2(C,vi(T),y.options.strategy==="fixed"),popper:fm(T)},y.reset=!1,y.placement=y.options.placement,y.orderedModifiers.forEach(function(te){return y.modifiersData[te.name]=Object.assign({},te.data)});for(var _=0;_<y.orderedModifiers.length;_++){if(y.reset===!0){y.reset=!1,_=-1;continue}var U=y.orderedModifiers[_],z=U.fn,L=U.options,B=L===void 0?{}:L,X=U.name;typeof z=="function"&&(y=z({state:y,options:B,name:X,instance:E})||y)}}}},update:F2(function(){return new Promise(function(S){E.forceUpdate(),S(y)})}),destroy:function(){A(),w=!0}};if(!Rb(g,h))return E;E.setOptions(v).then(function(S){!w&&v.onFirstUpdate&&v.onFirstUpdate(S)});function N(){y.orderedModifiers.forEach(function(S){var R=S.name,C=S.options,T=C===void 0?{}:C,_=S.effect;if(typeof _=="function"){var U=_({state:y,name:R,instance:E,options:T}),z=function(){};x.push(U||z)}})}function A(){x.forEach(function(S){return S()}),x=[]}return E}}const X2=Y2({defaultModifiers:[R2,M2,g2,b2,_2,k2,I2,f2]}),Z2=["enabled","placement","strategy","modifiers"];function K2(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const Q2={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},W2={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:n})=>()=>{const{reference:a,popper:o}=n.elements;if("removeAttribute"in a){const l=(a.getAttribute("aria-describedby")||"").split(",").filter(c=>c.trim()!==o.id);l.length?a.setAttribute("aria-describedby",l.join(",")):a.removeAttribute("aria-describedby")}},fn:({state:n})=>{var a;const{popper:o,reference:l}=n.elements,c=(a=o.getAttribute("role"))==null?void 0:a.toLowerCase();if(o.id&&c==="tooltip"&&"setAttribute"in l){const d=l.getAttribute("aria-describedby");if(d&&d.split(",").indexOf(o.id)!==-1)return;l.setAttribute("aria-describedby",d?`${d},${o.id}`:o.id)}}},eA=[];function px(n,a,o={}){let{enabled:l=!0,placement:c="bottom",strategy:d="absolute",modifiers:p=eA}=o,g=K2(o,Z2);const h=m.useRef(p),v=m.useRef(),y=m.useCallback(()=>{var S;(S=v.current)==null||S.update()},[]),x=m.useCallback(()=>{var S;(S=v.current)==null||S.forceUpdate()},[]),[w,E]=VC(m.useState({placement:c,update:y,forceUpdate:x,attributes:{},styles:{popper:{},arrow:{}}})),N=m.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:S})=>{const R={},C={};Object.keys(S.elements).forEach(T=>{R[T]=S.styles[T],C[T]=S.attributes[T]}),E({state:S,styles:R,attributes:C,update:y,forceUpdate:x,placement:S.placement})}}),[y,x,E]),A=m.useMemo(()=>(oi(h.current,p)||(h.current=p),h.current),[p]);return m.useEffect(()=>{!v.current||!l||v.current.setOptions({placement:c,strategy:d,modifiers:[...A,N,Q2]})},[d,c,N,l,A]),m.useEffect(()=>{if(!(!l||n==null||a==null))return v.current=X2(n,a,Object.assign({},g,{placement:c,strategy:d,modifiers:[...A,W2,N]})),()=>{v.current!=null&&(v.current.destroy(),v.current=void 0,E(S=>Object.assign({},S,{attributes:{},styles:{popper:{}}})))}},[l,n,a]),w}function di(n,a){if(n.contains)return n.contains(a);if(n.compareDocumentPosition)return n===a||!!(n.compareDocumentPosition(a)&16)}var pf,Db;function tA(){if(Db)return pf;Db=1;var n=function(){};return pf=n,pf}var nA=tA();const aA=$o(nA),Lb=()=>{};function rA(n){return n.button===0}function oA(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}const ec=n=>n&&("current"in n?n.current:n),_b={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function hx(n,a=Lb,{disabled:o,clickTrigger:l="click"}={}){const c=m.useRef(!1),d=m.useRef(!1),p=m.useCallback(v=>{const y=ec(n);aA(!!y,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),c.current=!y||oA(v)||!rA(v)||!!di(y,v.target)||d.current,d.current=!1},[n]),g=bt(v=>{const y=ec(n);y&&di(y,v.target)?d.current=!0:d.current=!1}),h=bt(v=>{c.current||a(v)});m.useEffect(()=>{var v,y;if(o||n==null)return;const x=Go(ec(n)),w=x.defaultView||window;let E=(v=w.event)!=null?v:(y=w.parent)==null?void 0:y.event,N=null;_b[l]&&(N=ha(x,_b[l],g,!0));const A=ha(x,l,p,!0),S=ha(x,l,C=>{if(C===E){E=void 0;return}h(C)});let R=[];return"ontouchstart"in x.documentElement&&(R=[].slice.call(x.body.children).map(C=>ha(C,"mousemove",Lb))),()=>{N?.(),A(),S(),R.forEach(C=>C())}},[n,o,l,p,g,h])}function sA(n){const a={};return Array.isArray(n)?(n?.forEach(o=>{a[o.name]=o}),a):n||a}function iA(n={}){return Array.isArray(n)?n:Object.keys(n).map(a=>(n[a].name=a,n[a]))}function gx({enabled:n,enableEvents:a,placement:o,flip:l,offset:c,fixed:d,containerPadding:p,arrowElement:g,popperConfig:h={}}){var v,y,x,w,E;const N=sA(h.modifiers);return Object.assign({},h,{placement:o,enabled:n,strategy:d?"fixed":h.strategy,modifiers:iA(Object.assign({},N,{eventListeners:{enabled:a,options:(v=N.eventListeners)==null?void 0:v.options},preventOverflow:Object.assign({},N.preventOverflow,{options:p?Object.assign({padding:p},(y=N.preventOverflow)==null?void 0:y.options):(x=N.preventOverflow)==null?void 0:x.options}),offset:{options:Object.assign({offset:c},(w=N.offset)==null?void 0:w.options)},arrow:Object.assign({},N.arrow,{enabled:!!g,options:Object.assign({},(E=N.arrow)==null?void 0:E.options,{element:g})}),flip:Object.assign({enabled:!!l},N.flip)}))})}const lA=["children","usePopper"];function cA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const uA=()=>{};function vx(n={}){const a=m.useContext(Ac),[o,l]=Df(),c=m.useRef(!1),{flip:d,offset:p,rootCloseEvent:g,fixed:h=!1,placement:v,popperConfig:y={},enableEventListeners:x=!0,usePopper:w=!!a}=n,E=a?.show==null?!!n.show:a.show;E&&!c.current&&(c.current=!0);const N=z=>{a?.toggle(!1,z)},{placement:A,setMenu:S,menuElement:R,toggleElement:C}=a||{},T=px(C,R,gx({placement:v||A||"bottom-start",enabled:w,enableEvents:x??E,offset:p,flip:d,fixed:h,arrowElement:o,popperConfig:y})),_=Object.assign({ref:S||uA,"aria-labelledby":C?.id},T.attributes.popper,{style:T.styles.popper}),U={show:E,placement:A,hasShown:c.current,toggle:a?.toggle,popper:w?T:null,arrowProps:w?Object.assign({ref:l},T.attributes.arrow,{style:T.styles.arrow}):{}};return hx(R,N,{clickTrigger:g,disabled:!E}),[_,U]}function bx(n){let{children:a,usePopper:o=!0}=n,l=cA(n,lA);const[c,d]=vx(Object.assign({},l,{usePopper:o}));return i.jsx(i.Fragment,{children:a(c,d)})}bx.displayName="DropdownMenu";const yx={prefix:String(Math.round(Math.random()*1e10)),current:0},xx=Xe.createContext(yx),dA=Xe.createContext(!1);let hf=new WeakMap;function fA(n=!1){let a=m.useContext(xx),o=m.useRef(null);if(o.current===null&&!n){let l=Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;if(l){let c=hf.get(l);c==null?hf.set(l,{id:a.current,state:l.memoizedState}):l.memoizedState!==c.state&&(a.current=c.id,hf.delete(l))}o.current=++a.current}return o.current}function mA(n){let a=m.useContext(xx),o=fA(!!n),l=`react-aria${a.prefix}`;return n||`${l}-${o}`}function pA(n){let a=Xe.useId(),[o]=m.useState(bA()),l=o?"react-aria":`react-aria${yx.prefix}`;return n||`${l}-${a}`}const wx=typeof Xe.useId=="function"?pA:mA;function hA(){return!1}function gA(){return!0}function vA(n){return()=>{}}function bA(){return typeof Xe.useSyncExternalStore=="function"?Xe.useSyncExternalStore(vA,hA,gA):m.useContext(dA)}const Sx=n=>{var a;return((a=n.getAttribute("role"))==null?void 0:a.toLowerCase())==="menu"},zb=()=>{};function jx(){const n=wx(),{show:a=!1,toggle:o=zb,setToggle:l,menuElement:c}=m.useContext(Ac)||{},d=m.useCallback(g=>{o(!a,g)},[a,o]),p={id:n,ref:l||zb,onClick:d,"aria-expanded":!!a};return c&&Sx(c)&&(p["aria-haspopup"]=!0),[p,{show:a,toggle:o}]}function Ex({children:n}){const[a,o]=jx();return i.jsx(i.Fragment,{children:n(a,o)})}Ex.displayName="DropdownToggle";const Gn=m.createContext(null),Tr=(n,a=null)=>n!=null?String(n):a||null,kc=m.createContext(null);kc.displayName="NavContext";const yA="data-rr-ui-",xA="rrUi";function Xo(n){return`${yA}${n}`}function wA(n){return`${xA}${n}`}const SA=["eventKey","disabled","onClick","active","as"];function jA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function Nx({key:n,href:a,active:o,disabled:l,onClick:c}){const d=m.useContext(Gn),p=m.useContext(kc),{activeKey:g}=p||{},h=Tr(n,a),v=o==null&&n!=null?Tr(g)===h:o;return[{onClick:bt(x=>{l||(c?.(x),d&&!x.isPropagationStopped()&&d(h,x))}),"aria-disabled":l||void 0,"aria-selected":v,[Xo("dropdown-item")]:""},{isActive:v}]}const Cx=m.forwardRef((n,a)=>{let{eventKey:o,disabled:l,onClick:c,active:d,as:p=sm}=n,g=jA(n,SA);const[h]=Nx({key:o,href:g.href,disabled:l,onClick:c,active:d});return i.jsx(p,Object.assign({},g,{ref:a},h))});Cx.displayName="DropdownItem";const Ax=m.createContext(Fo?window:void 0);Ax.Provider;function Tc(){return m.useContext(Ax)}function Mb(){const n=rx(),a=m.useRef(null),o=m.useCallback(l=>{a.current=l,n()},[n]);return[a,o]}function bi({defaultShow:n,show:a,onSelect:o,onToggle:l,itemSelector:c=`* [${Xo("dropdown-item")}]`,focusFirstItemOnShow:d,placement:p="bottom-start",children:g}){const h=Tc(),[v,y]=ax(a,n,l),[x,w]=Mb(),E=x.current,[N,A]=Mb(),S=N.current,R=qy(v),C=m.useRef(null),T=m.useRef(!1),_=m.useContext(Gn),U=m.useCallback((ne,se,ie=se?.type)=>{y(ne,{originalEvent:se,source:ie})},[y]),z=bt((ne,se)=>{o?.(ne,se),U(!1,se,"select"),se.isPropagationStopped()||_?.(ne,se)}),L=m.useMemo(()=>({toggle:U,placement:p,show:v,menuElement:E,toggleElement:S,setMenu:w,setToggle:A}),[U,p,v,E,S,w,A]);E&&R&&!v&&(T.current=E.contains(E.ownerDocument.activeElement));const B=bt(()=>{S&&S.focus&&S.focus()}),X=bt(()=>{const ne=C.current;let se=d;if(se==null&&(se=x.current&&Sx(x.current)?"keyboard":!1),se===!1||se==="keyboard"&&!/^key.+$/.test(ne))return;const ie=ma(x.current,c)[0];ie&&ie.focus&&ie.focus()});m.useEffect(()=>{v?X():T.current&&(T.current=!1,B())},[v,T,B,X]),m.useEffect(()=>{C.current=null});const te=(ne,se)=>{if(!x.current)return null;const ie=ma(x.current,c);let W=ie.indexOf(ne)+se;return W=Math.max(0,Math.min(W,ie.length)),ie[W]};return OC(m.useCallback(()=>h.document,[h]),"keydown",ne=>{var se,ie;const{key:W}=ne,Z=ne.target,k=(se=x.current)==null?void 0:se.contains(Z),F=(ie=N.current)==null?void 0:ie.contains(Z);if(/input|textarea/i.test(Z.tagName)&&(W===" "||W!=="Escape"&&k||W==="Escape"&&Z.type==="search")||!k&&!F||W==="Tab"&&(!x.current||!v))return;C.current=ne.type;const V={originalEvent:ne,source:ne.type};switch(W){case"ArrowUp":{const le=te(Z,-1);le&&le.focus&&le.focus(),ne.preventDefault();return}case"ArrowDown":if(ne.preventDefault(),!v)y(!0,V);else{const le=te(Z,1);le&&le.focus&&le.focus()}return;case"Tab":am(Z.ownerDocument,"keyup",le=>{var O;(le.key==="Tab"&&!le.target||!((O=x.current)!=null&&O.contains(le.target)))&&y(!1,V)},{once:!0});break;case"Escape":W==="Escape"&&(ne.preventDefault(),ne.stopPropagation()),y(!1,V);break}}),i.jsx(Gn.Provider,{value:z,children:i.jsx(Ac.Provider,{value:L,children:g})})}bi.displayName="Dropdown";bi.Menu=bx;bi.Toggle=Ex;bi.Item=Cx;const vm=m.createContext({});vm.displayName="DropdownContext";const Ox=m.forwardRef(({className:n,bsPrefix:a,as:o="hr",role:l="separator",...c},d)=>(a=de(a,"dropdown-divider"),i.jsx(o,{ref:d,className:ue(n,a),role:l,...c})));Ox.displayName="DropdownDivider";const kx=m.forwardRef(({className:n,bsPrefix:a,as:o="div",role:l="heading",...c},d)=>(a=de(a,"dropdown-header"),i.jsx(o,{ref:d,className:ue(n,a),role:l,...c})));kx.displayName="DropdownHeader";const Tx=m.forwardRef(({bsPrefix:n,className:a,eventKey:o,disabled:l=!1,onClick:c,active:d,as:p=im,...g},h)=>{const v=de(n,"dropdown-item"),[y,x]=Nx({key:o,href:g.href,disabled:l,onClick:c,active:d});return i.jsx(p,{...g,...y,ref:h,className:ue(a,v,x.isActive&&"active",l&&"disabled")})});Tx.displayName="DropdownItem";const Rx=m.forwardRef(({className:n,bsPrefix:a,as:o="span",...l},c)=>(a=de(a,"dropdown-item-text"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Rx.displayName="DropdownItemText";const EA=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",NA=typeof document<"u",bm=NA||EA?m.useLayoutEffect:m.useEffect,Rc=m.createContext(null);Rc.displayName="InputGroupContext";const zr=m.createContext(null);zr.displayName="NavbarContext";function Dx(n,a){return n}function Lx(n,a,o){const l=o?"top-end":"top-start",c=o?"top-start":"top-end",d=o?"bottom-end":"bottom-start",p=o?"bottom-start":"bottom-end",g=o?"right-start":"left-start",h=o?"right-end":"left-end",v=o?"left-start":"right-start",y=o?"left-end":"right-end";let x=n?p:d;return a==="up"?x=n?c:l:a==="end"?x=n?y:v:a==="start"?x=n?h:g:a==="down-centered"?x="bottom":a==="up-centered"&&(x="top"),x}const _x=m.forwardRef(({bsPrefix:n,className:a,align:o,rootCloseEvent:l,flip:c=!0,show:d,renderOnMount:p,as:g="div",popperConfig:h,variant:v,...y},x)=>{let w=!1;const E=m.useContext(zr),N=de(n,"dropdown-menu"),{align:A,drop:S,isRTL:R}=m.useContext(vm);o=o||A;const C=m.useContext(Rc),T=[];if(o)if(typeof o=="object"){const ne=Object.keys(o);if(ne.length){const se=ne[0],ie=o[se];w=ie==="start",T.push(`${N}-${se}-${ie}`)}}else o==="end"&&(w=!0);const _=Lx(w,S,R),[U,{hasShown:z,popper:L,show:B,toggle:X}]=vx({flip:c,rootCloseEvent:l,show:d,usePopper:!E&&T.length===0,offset:[0,2],popperConfig:h,placement:_});if(U.ref=Vo(Dx(x),U.ref),bm(()=>{B&&L?.update()},[B]),!z&&!p&&!C)return null;typeof g!="string"&&(U.show=B,U.close=()=>X?.(!1),U.align=o);let te=y.style;return L!=null&&L.placement&&(te={...y.style,...U.style},y["x-placement"]=L.placement),i.jsx(g,{...y,...U,style:te,...(T.length||E)&&{"data-bs-popper":"static"},className:ue(a,N,B&&"show",w&&`${N}-end`,v&&`${N}-${v}`,...T)})});_x.displayName="DropdownMenu";const zx=m.forwardRef(({bsPrefix:n,split:a,className:o,childBsPrefix:l,as:c=Te,...d},p)=>{const g=de(n,"dropdown-toggle"),h=m.useContext(Ac);l!==void 0&&(d.bsPrefix=l);const[v]=jx();return v.ref=Vo(v.ref,Dx(p)),i.jsx(c,{className:ue(o,g,a&&`${g}-split`,h?.show&&"show"),...v,...d})});zx.displayName="DropdownToggle";const Mx=m.forwardRef((n,a)=>{const{bsPrefix:o,drop:l="down",show:c,className:d,align:p="start",onSelect:g,onToggle:h,focusFirstItemOnShow:v,as:y="div",navbar:x,autoClose:w=!0,...E}=Sc(n,{show:"onToggle"}),N=m.useContext(Rc),A=de(o,"dropdown"),S=jc(),R=L=>w===!1?L==="click":w==="inside"?L!=="rootClose":w==="outside"?L!=="select":!0,C=ya((L,B)=>{var X;!((X=B.originalEvent)==null||(X=X.target)==null)&&X.classList.contains("dropdown-toggle")&&B.source==="mousedown"||(B.originalEvent.currentTarget===document&&(B.source!=="keydown"||B.originalEvent.key==="Escape")&&(B.source="rootClose"),R(B.source)&&h?.(L,B))}),_=Lx(p==="end",l,S),U=m.useMemo(()=>({align:p,drop:l,isRTL:S}),[p,l,S]),z={down:A,"down-centered":`${A}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return i.jsx(vm.Provider,{value:U,children:i.jsx(bi,{placement:_,show:c,onSelect:g,onToggle:C,focusFirstItemOnShow:v,itemSelector:`.${A}-item:not(.disabled):not(:disabled)`,children:N?E.children:i.jsx(y,{...E,ref:a,className:ue(d,c&&"show",z[l])})})})});Mx.displayName="Dropdown";const bn=Object.assign(Mx,{Toggle:zx,Menu:_x,Item:Tx,ItemText:Rx,Divider:Ox,Header:kx}),CA={type:Pe.string,tooltip:Pe.bool,as:Pe.elementType},Dc=m.forwardRef(({as:n="div",className:a,type:o="valid",tooltip:l=!1,...c},d)=>i.jsx(n,{...c,ref:d,className:ue(a,`${o}-${l?"tooltip":"feedback"}`)}));Dc.displayName="Feedback";Dc.propTypes=CA;const Sa=m.createContext({}),yi=m.forwardRef(({id:n,bsPrefix:a,className:o,type:l="checkbox",isValid:c=!1,isInvalid:d=!1,as:p="input",...g},h)=>{const{controlId:v}=m.useContext(Sa);return a=de(a,"form-check-input"),i.jsx(p,{...g,ref:h,type:l,id:n||v,className:ue(o,a,c&&"is-valid",d&&"is-invalid")})});yi.displayName="FormCheckInput";const ic=m.forwardRef(({bsPrefix:n,className:a,htmlFor:o,...l},c)=>{const{controlId:d}=m.useContext(Sa);return n=de(n,"form-check-label"),i.jsx("label",{...l,ref:c,htmlFor:o||d,className:ue(a,n)})});ic.displayName="FormCheckLabel";const Bx=m.forwardRef(({id:n,bsPrefix:a,bsSwitchPrefix:o,inline:l=!1,reverse:c=!1,disabled:d=!1,isValid:p=!1,isInvalid:g=!1,feedbackTooltip:h=!1,feedback:v,feedbackType:y,className:x,style:w,title:E="",type:N="checkbox",label:A,children:S,as:R="input",...C},T)=>{a=de(a,"form-check"),o=de(o,"form-switch");const{controlId:_}=m.useContext(Sa),U=m.useMemo(()=>({controlId:n||_}),[_,n]),z=!S&&A!=null&&A!==!1||qC(S,ic),L=i.jsx(yi,{...C,type:N==="switch"?"checkbox":N,ref:T,isValid:p,isInvalid:g,disabled:d,as:R});return i.jsx(Sa.Provider,{value:U,children:i.jsx("div",{style:w,className:ue(x,z&&a,l&&`${a}-inline`,c&&`${a}-reverse`,N==="switch"&&o),children:S||i.jsxs(i.Fragment,{children:[L,z&&i.jsx(ic,{title:E,children:A}),v&&i.jsx(Dc,{type:y,tooltip:h,children:v})]})})})});Bx.displayName="FormCheck";const lc=Object.assign(Bx,{Input:yi,Label:ic}),Ux=m.forwardRef(({bsPrefix:n,type:a,size:o,htmlSize:l,id:c,className:d,isValid:p=!1,isInvalid:g=!1,plaintext:h,readOnly:v,as:y="input",...x},w)=>{const{controlId:E}=m.useContext(Sa);return n=de(n,"form-control"),i.jsx(y,{...x,type:a,size:l,ref:w,readOnly:v,id:c||E,className:ue(d,h?`${n}-plaintext`:n,o&&`${n}-${o}`,a==="color"&&`${n}-color`,p&&"is-valid",g&&"is-invalid")})});Ux.displayName="FormControl";const AA=Object.assign(Ux,{Feedback:Dc}),Ix=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},c)=>(a=de(a,"form-floating"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Ix.displayName="FormFloating";const ym=m.forwardRef(({controlId:n,as:a="div",...o},l)=>{const c=m.useMemo(()=>({controlId:n}),[n]);return i.jsx(Sa.Provider,{value:c,children:i.jsx(a,{...o,ref:l})})});ym.displayName="FormGroup";const Px=m.forwardRef(({as:n="label",bsPrefix:a,column:o=!1,visuallyHidden:l=!1,className:c,htmlFor:d,...p},g)=>{const{controlId:h}=m.useContext(Sa);a=de(a,"form-label");let v="col-form-label";typeof o=="string"&&(v=`${v} ${v}-${o}`);const y=ue(c,a,l&&"visually-hidden",o&&v);return d=d||h,o?i.jsx(Ln,{ref:g,as:"label",className:y,htmlFor:d,...p}):i.jsx(n,{ref:g,className:y,htmlFor:d,...p})});Px.displayName="FormLabel";const $x=m.forwardRef(({bsPrefix:n,className:a,id:o,...l},c)=>{const{controlId:d}=m.useContext(Sa);return n=de(n,"form-range"),i.jsx("input",{...l,type:"range",ref:c,className:ue(a,n),id:o||d})});$x.displayName="FormRange";const Hx=m.forwardRef(({bsPrefix:n,size:a,htmlSize:o,className:l,isValid:c=!1,isInvalid:d=!1,id:p,...g},h)=>{const{controlId:v}=m.useContext(Sa);return n=de(n,"form-select"),i.jsx("select",{...g,size:o,ref:h,className:ue(l,n,a&&`${n}-${a}`,c&&"is-valid",d&&"is-invalid"),id:p||v})});Hx.displayName="FormSelect";const Jx=m.forwardRef(({bsPrefix:n,className:a,as:o="small",muted:l,...c},d)=>(n=de(n,"form-text"),i.jsx(o,{...c,ref:d,className:ue(a,n,l&&"text-muted")})));Jx.displayName="FormText";const qx=m.forwardRef((n,a)=>i.jsx(lc,{...n,ref:a,type:"switch"}));qx.displayName="Switch";const OA=Object.assign(qx,{Input:lc.Input,Label:lc.Label}),Gx=m.forwardRef(({bsPrefix:n,className:a,children:o,controlId:l,label:c,...d},p)=>(n=de(n,"form-floating"),i.jsxs(ym,{ref:p,className:ue(a,n),controlId:l,...d,children:[o,i.jsx("label",{htmlFor:l,children:c})]})));Gx.displayName="FloatingLabel";const kA={_ref:Pe.any,validated:Pe.bool,as:Pe.elementType},xm=m.forwardRef(({className:n,validated:a,as:o="form",...l},c)=>i.jsx(o,{...l,ref:c,className:ue(n,a&&"was-validated")}));xm.displayName="Form";xm.propTypes=kA;const oe=Object.assign(xm,{Group:ym,Control:AA,Floating:Ix,Check:lc,Switch:OA,Label:Px,Text:Jx,Range:$x,Select:Hx,FloatingLabel:Gx}),Lc=m.forwardRef(({className:n,bsPrefix:a,as:o="span",...l},c)=>(a=de(a,"input-group-text"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Lc.displayName="InputGroupText";const TA=n=>i.jsx(Lc,{children:i.jsx(yi,{type:"checkbox",...n})}),RA=n=>i.jsx(Lc,{children:i.jsx(yi,{type:"radio",...n})}),Fx=m.forwardRef(({bsPrefix:n,size:a,hasValidation:o,className:l,as:c="div",...d},p)=>{n=de(n,"input-group");const g=m.useMemo(()=>({}),[]);return i.jsx(Rc.Provider,{value:g,children:i.jsx(c,{ref:p,...d,className:ue(l,n,a&&`${n}-${a}`,o&&"has-validation")})})});Fx.displayName="InputGroup";const DA=Object.assign(Fx,{Text:Lc,Radio:RA,Checkbox:TA}),Bb=n=>!n||typeof n=="function"?n:a=>{n.current=a};function LA(n,a){const o=Bb(n),l=Bb(a);return c=>{o&&o(c),l&&l(c)}}function xi(n,a){return m.useMemo(()=>LA(n,a),[n,a])}const Zo=m.createContext(null),_A=["as","active","eventKey"];function zA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function Vx({key:n,onClick:a,active:o,id:l,role:c,disabled:d}){const p=m.useContext(Gn),g=m.useContext(kc),h=m.useContext(Zo);let v=o;const y={role:c};if(g){!c&&g.role==="tablist"&&(y.role="tab");const x=g.getControllerId(n??null),w=g.getControlledId(n??null);y[Xo("event-key")]=n,y.id=x||l,v=o==null&&n!=null?g.activeKey===n:o,(v||!(h!=null&&h.unmountOnExit)&&!(h!=null&&h.mountOnEnter))&&(y["aria-controls"]=w)}return y.role==="tab"&&(y["aria-selected"]=v,v||(y.tabIndex=-1),d&&(y.tabIndex=-1,y["aria-disabled"]=!0)),y.onClick=bt(x=>{d||(a?.(x),n!=null&&p&&!x.isPropagationStopped()&&p(n,x))}),[y,{isActive:v}]}const Yx=m.forwardRef((n,a)=>{let{as:o=sm,active:l,eventKey:c}=n,d=zA(n,_A);const[p,g]=Vx(Object.assign({key:Tr(c,d.href),active:l},d));return p[Xo("active")]=g.isActive,i.jsx(o,Object.assign({},d,p,{ref:a}))});Yx.displayName="NavItem";const MA=["as","onSelect","activeKey","role","onKeyDown"];function BA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const Ub=()=>{},Ib=Xo("event-key"),Xx=m.forwardRef((n,a)=>{let{as:o="div",onSelect:l,activeKey:c,role:d,onKeyDown:p}=n,g=BA(n,MA);const h=rx(),v=m.useRef(!1),y=m.useContext(Gn),x=m.useContext(Zo);let w,E;x&&(d=d||"tablist",c=x.activeKey,w=x.getControlledId,E=x.getControllerId);const N=m.useRef(null),A=T=>{const _=N.current;if(!_)return null;const U=ma(_,`[${Ib}]:not([aria-disabled=true])`),z=_.querySelector("[aria-selected=true]");if(!z||z!==document.activeElement)return null;const L=U.indexOf(z);if(L===-1)return null;let B=L+T;return B>=U.length&&(B=0),B<0&&(B=U.length-1),U[B]},S=(T,_)=>{T!=null&&(l?.(T,_),y?.(T,_))},R=T=>{if(p?.(T),!x)return;let _;switch(T.key){case"ArrowLeft":case"ArrowUp":_=A(-1);break;case"ArrowRight":case"ArrowDown":_=A(1);break;default:return}_&&(T.preventDefault(),S(_.dataset[wA("EventKey")]||null,T),v.current=!0,h())};m.useEffect(()=>{if(N.current&&v.current){const T=N.current.querySelector(`[${Ib}][aria-selected=true]`);T?.focus()}v.current=!1});const C=xi(a,N);return i.jsx(Gn.Provider,{value:S,children:i.jsx(kc.Provider,{value:{role:d,activeKey:Tr(c),getControlledId:w||Ub,getControllerId:E||Ub},children:i.jsx(o,Object.assign({},g,{onKeyDown:R,ref:C,role:d}))})})});Xx.displayName="Nav";const UA=Object.assign(Xx,{Item:Yx});var Yl;function Pb(n){if((!Yl&&Yl!==0||n)&&Fo){var a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a),Yl=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return Yl}function IA(){return m.useState(null)}function gf(n){n===void 0&&(n=Go());try{var a=n.activeElement;return!a||!a.nodeName?null:a}catch{return n.body}}function PA(n){const a=m.useRef(n);return a.current=n,a}function $A(n){const a=PA(n);m.useEffect(()=>()=>a.current(),[])}function HA(n=document){const a=n.defaultView;return Math.abs(a.innerWidth-n.documentElement.clientWidth)}const $b=Xo("modal-open");class wm{constructor({ownerDocument:a,handleContainerOverflow:o=!0,isRTL:l=!1}={}){this.handleContainerOverflow=o,this.isRTL=l,this.modals=[],this.ownerDocument=a}getScrollbarWidth(){return HA(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(a){}removeModalAttributes(a){}setContainerStyle(a){const o={overflow:"hidden"},l=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();a.style={overflow:c.style.overflow,[l]:c.style[l]},a.scrollBarWidth&&(o[l]=`${parseInt(ga(c,l)||"0",10)+a.scrollBarWidth}px`),c.setAttribute($b,""),ga(c,o)}reset(){[...this.modals].forEach(a=>this.remove(a))}removeContainerStyle(a){const o=this.getElement();o.removeAttribute($b),Object.assign(o.style,a.style)}add(a){let o=this.modals.indexOf(a);return o!==-1||(o=this.modals.length,this.modals.push(a),this.setModalAttributes(a),o!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),o}remove(a){const o=this.modals.indexOf(a);o!==-1&&(this.modals.splice(o,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(a))}isTopModal(a){return!!this.modals.length&&this.modals[this.modals.length-1]===a}}const vf=(n,a)=>Fo?n==null?(a||Go()).body:(typeof n=="function"&&(n=n()),n&&"current"in n&&(n=n.current),n&&("nodeType"in n||n.getBoundingClientRect)?n:null):null;function Mf(n,a){const o=Tc(),[l,c]=m.useState(()=>vf(n,o?.document));if(!l){const d=vf(n);d&&c(d)}return m.useEffect(()=>{},[a,l]),m.useEffect(()=>{const d=vf(n);d!==l&&c(d)},[n,l]),l}function Sm({children:n,in:a,onExited:o,mountOnEnter:l,unmountOnExit:c}){const d=m.useRef(null),p=m.useRef(a),g=bt(o);m.useEffect(()=>{a?p.current=!0:g(d.current)},[a,g]);const h=xi(d,_r(n)),v=m.cloneElement(n,{ref:h});return a?v:c||!p.current&&l?null:v}const JA=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function qA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function GA(n){let{onEnter:a,onEntering:o,onEntered:l,onExit:c,onExiting:d,onExited:p,addEndListener:g,children:h}=n,v=qA(n,JA);const y=m.useRef(null),x=xi(y,_r(h)),w=_=>U=>{_&&y.current&&_(y.current,U)},E=m.useCallback(w(a),[a]),N=m.useCallback(w(o),[o]),A=m.useCallback(w(l),[l]),S=m.useCallback(w(c),[c]),R=m.useCallback(w(d),[d]),C=m.useCallback(w(p),[p]),T=m.useCallback(w(g),[g]);return Object.assign({},v,{nodeRef:y},a&&{onEnter:E},o&&{onEntering:N},l&&{onEntered:A},c&&{onExit:S},d&&{onExiting:R},p&&{onExited:C},g&&{addEndListener:T},{children:typeof h=="function"?(_,U)=>h(_,Object.assign({},U,{ref:x})):m.cloneElement(h,{ref:x})})}const FA=["component"];function VA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const YA=m.forwardRef((n,a)=>{let{component:o}=n,l=VA(n,FA);const c=GA(l);return i.jsx(o,Object.assign({ref:a},c))});function XA({in:n,onTransition:a}){const o=m.useRef(null),l=m.useRef(!0),c=bt(a);return yb(()=>{if(!o.current)return;let d=!1;return c({in:n,element:o.current,initial:l.current,isStale:()=>d}),()=>{d=!0}},[n,c]),yb(()=>(l.current=!1,()=>{l.current=!0}),[]),o}function ZA({children:n,in:a,onExited:o,onEntered:l,transition:c}){const[d,p]=m.useState(!a);a&&d&&p(!1);const g=XA({in:!!a,onTransition:v=>{const y=()=>{v.isStale()||(v.in?l?.(v.element,v.initial):(p(!0),o?.(v.element)))};Promise.resolve(c(v)).then(y,x=>{throw v.in||p(!0),x})}}),h=xi(g,_r(n));return d&&!a?null:m.cloneElement(n,{ref:h})}function Bf(n,a,o){return n?i.jsx(YA,Object.assign({},o,{component:n})):a?i.jsx(ZA,Object.assign({},o,{transition:a})):i.jsx(Sm,Object.assign({},o))}const KA=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function QA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}let bf;function WA(n){return bf||(bf=new wm({ownerDocument:n?.document})),bf}function eO(n){const a=Tc(),o=n||WA(a),l=m.useRef({dialog:null,backdrop:null});return Object.assign(l.current,{add:()=>o.add(l.current),remove:()=>o.remove(l.current),isTopModal:()=>o.isTopModal(l.current),setDialogRef:m.useCallback(c=>{l.current.dialog=c},[]),setBackdropRef:m.useCallback(c=>{l.current.backdrop=c},[])})}const Zx=m.forwardRef((n,a)=>{let{show:o=!1,role:l="dialog",className:c,style:d,children:p,backdrop:g=!0,keyboard:h=!0,onBackdropClick:v,onEscapeKeyDown:y,transition:x,runTransition:w,backdropTransition:E,runBackdropTransition:N,autoFocus:A=!0,enforceFocus:S=!0,restoreFocus:R=!0,restoreFocusOptions:C,renderDialog:T,renderBackdrop:_=Be=>i.jsx("div",Object.assign({},Be)),manager:U,container:z,onShow:L,onHide:B=()=>{},onExit:X,onExited:te,onExiting:ne,onEnter:se,onEntering:ie,onEntered:W}=n,Z=QA(n,KA);const k=Tc(),F=Mf(z),re=eO(U),V=Jy(),le=qy(o),[O,q]=m.useState(!o),ae=m.useRef(null);m.useImperativeHandle(a,()=>re,[re]),Fo&&!le&&o&&(ae.current=gf(k?.document)),o&&O&&q(!1);const P=bt(()=>{if(re.add(),jt.current=ha(document,"keydown",Me),je.current=ha(document,"focus",()=>setTimeout(pe),!0),L&&L(),A){var Be,An;const zn=gf((Be=(An=re.dialog)==null?void 0:An.ownerDocument)!=null?Be:k?.document);re.dialog&&zn&&!di(re.dialog,zn)&&(ae.current=zn,re.dialog.focus())}}),ce=bt(()=>{if(re.remove(),jt.current==null||jt.current(),je.current==null||je.current(),R){var Be;(Be=ae.current)==null||Be.focus==null||Be.focus(C),ae.current=null}});m.useEffect(()=>{!o||!F||P()},[o,F,P]),m.useEffect(()=>{O&&ce()},[O,ce]),$A(()=>{ce()});const pe=bt(()=>{if(!S||!V()||!re.isTopModal())return;const Be=gf(k?.document);re.dialog&&Be&&!di(re.dialog,Be)&&re.dialog.focus()}),xe=bt(Be=>{Be.target===Be.currentTarget&&(v?.(Be),g===!0&&B())}),Me=bt(Be=>{h&&Iy(Be)&&re.isTopModal()&&(y?.(Be),Be.defaultPrevented||B())}),je=m.useRef(),jt=m.useRef(),It=(...Be)=>{q(!0),te?.(...Be)};if(!F)return null;const nn=Object.assign({role:l,ref:re.setDialogRef,"aria-modal":l==="dialog"?!0:void 0},Z,{style:d,className:c,tabIndex:-1});let Cn=T?T(nn):i.jsx("div",Object.assign({},nn,{children:m.cloneElement(p,{role:"document"})}));Cn=Bf(x,w,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!o,onExit:X,onExiting:ne,onExited:It,onEnter:se,onEntering:ie,onEntered:W,children:Cn});let xt=null;return g&&(xt=_({ref:re.setBackdropRef,onClick:xe}),xt=Bf(E,N,{in:!!o,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:xt})),i.jsx(i.Fragment,{children:Cr.createPortal(i.jsxs(i.Fragment,{children:[xt,Cn]}),F)})});Zx.displayName="Modal";const Kx=Object.assign(Zx,{Manager:wm});function Uf(n,a){return n.classList?!!a&&n.classList.contains(a):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+a+" ")!==-1}function tO(n,a){n.classList?n.classList.add(a):Uf(n,a)||(typeof n.className=="string"?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a))}function Hb(n,a){return n.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function nO(n,a){n.classList?n.classList.remove(a):typeof n.className=="string"?n.className=Hb(n.className,a):n.setAttribute("class",Hb(n.className&&n.className.baseVal||"",a))}const Oo={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Qx extends wm{adjustAndStore(a,o,l){const c=o.style[a];o.dataset[a]=c,ga(o,{[a]:`${parseFloat(ga(o,a))+l}px`})}restore(a,o){const l=o.dataset[a];l!==void 0&&(delete o.dataset[a],ga(o,{[a]:l}))}setContainerStyle(a){super.setContainerStyle(a);const o=this.getElement();if(tO(o,"modal-open"),!a.scrollBarWidth)return;const l=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";ma(o,Oo.FIXED_CONTENT).forEach(d=>this.adjustAndStore(l,d,a.scrollBarWidth)),ma(o,Oo.STICKY_CONTENT).forEach(d=>this.adjustAndStore(c,d,-a.scrollBarWidth)),ma(o,Oo.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(c,d,a.scrollBarWidth))}removeContainerStyle(a){super.removeContainerStyle(a);const o=this.getElement();nO(o,"modal-open");const l=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";ma(o,Oo.FIXED_CONTENT).forEach(d=>this.restore(l,d)),ma(o,Oo.STICKY_CONTENT).forEach(d=>this.restore(c,d)),ma(o,Oo.NAVBAR_TOGGLER).forEach(d=>this.restore(c,d))}}let yf;function Wx(n){return yf||(yf=new Qx(n)),yf}const ew=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},c)=>(a=de(a,"modal-body"),i.jsx(o,{ref:c,className:ue(n,a),...l})));ew.displayName="ModalBody";const jm=m.createContext({onHide(){}}),Em=m.forwardRef(({bsPrefix:n,className:a,contentClassName:o,centered:l,size:c,fullscreen:d,children:p,scrollable:g,...h},v)=>{n=de(n,"modal");const y=`${n}-dialog`,x=typeof d=="string"?`${n}-fullscreen-${d}`:`${n}-fullscreen`;return i.jsx("div",{...h,ref:v,className:ue(y,a,c&&`${n}-${c}`,l&&`${y}-centered`,g&&`${y}-scrollable`,d&&x),children:i.jsx("div",{className:ue(`${n}-content`,o),children:p})})});Em.displayName="ModalDialog";const tw=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},c)=>(a=de(a,"modal-footer"),i.jsx(o,{ref:c,className:ue(n,a),...l})));tw.displayName="ModalFooter";const Nm=m.forwardRef(({closeLabel:n="Close",closeVariant:a,closeButton:o=!1,onHide:l,children:c,...d},p)=>{const g=m.useContext(jm),h=ya(()=>{g?.onHide(),l?.()});return i.jsxs("div",{ref:p,...d,children:[c,o&&i.jsx(Cc,{"aria-label":n,variant:a,onClick:h})]})});Nm.displayName="AbstractModalHeader";const nw=m.forwardRef(({bsPrefix:n,className:a,closeLabel:o="Close",closeButton:l=!1,...c},d)=>(n=de(n,"modal-header"),i.jsx(Nm,{ref:d,...c,className:ue(a,n),closeLabel:o,closeButton:l})));nw.displayName="ModalHeader";const aO=Nc("h4"),aw=m.forwardRef(({className:n,bsPrefix:a,as:o=aO,...l},c)=>(a=de(a,"modal-title"),i.jsx(o,{ref:c,className:ue(n,a),...l})));aw.displayName="ModalTitle";function rO(n){return i.jsx(xa,{...n,timeout:null})}function oO(n){return i.jsx(xa,{...n,timeout:null})}const rw=m.forwardRef(({bsPrefix:n,className:a,style:o,dialogClassName:l,contentClassName:c,children:d,dialogAs:p=Em,"data-bs-theme":g,"aria-labelledby":h,"aria-describedby":v,"aria-label":y,show:x=!1,animation:w=!0,backdrop:E=!0,keyboard:N=!0,onEscapeKeyDown:A,onShow:S,onHide:R,container:C,autoFocus:T=!0,enforceFocus:_=!0,restoreFocus:U=!0,restoreFocusOptions:z,onEntered:L,onExit:B,onExiting:X,onEnter:te,onEntering:ne,onExited:se,backdropClassName:ie,manager:W,...Z},k)=>{const[F,re]=m.useState({}),[V,le]=m.useState(!1),O=m.useRef(!1),q=m.useRef(!1),ae=m.useRef(null),[P,ce]=IA(),pe=Vo(k,ce),xe=ya(R),Me=jc();n=de(n,"modal");const je=m.useMemo(()=>({onHide:xe}),[xe]);function jt(){return W||Wx({isRTL:Me})}function It(Ce){if(!Fo)return;const an=jt().getScrollbarWidth()>0,Bn=Ce.scrollHeight>Go(Ce).documentElement.clientHeight;re({paddingRight:an&&!Bn?Pb():void 0,paddingLeft:!an&&Bn?Pb():void 0})}const nn=ya(()=>{P&&It(P.dialog)});ex(()=>{Rf(window,"resize",nn),ae.current==null||ae.current()});const Cn=()=>{O.current=!0},xt=Ce=>{O.current&&P&&Ce.target===P.dialog&&(q.current=!0),O.current=!1},Be=()=>{le(!0),ae.current=Py(P.dialog,()=>{le(!1)})},An=Ce=>{Ce.target===Ce.currentTarget&&Be()},zn=Ce=>{if(E==="static"){An(Ce);return}if(q.current||Ce.target!==Ce.currentTarget){q.current=!1;return}R?.()},Ur=Ce=>{N?A?.(Ce):(Ce.preventDefault(),E==="static"&&Be())},or=(Ce,an)=>{Ce&&It(Ce),te?.(Ce,an)},Pt=Ce=>{ae.current==null||ae.current(),B?.(Ce)},Mn=(Ce,an)=>{ne?.(Ce,an),am(window,"resize",nn)},Ir=Ce=>{Ce&&(Ce.style.display=""),se?.(Ce),Rf(window,"resize",nn)},Pr=m.useCallback(Ce=>i.jsx("div",{...Ce,className:ue(`${n}-backdrop`,ie,!w&&"show")}),[w,ie,n]),rt={...o,...F};rt.display="block";const $r=Ce=>i.jsx("div",{role:"dialog",...Ce,style:rt,className:ue(a,n,V&&`${n}-static`,!w&&"show"),onClick:E?zn:void 0,onMouseUp:xt,"data-bs-theme":g,"aria-label":y,"aria-labelledby":h,"aria-describedby":v,children:i.jsx(p,{...Z,onMouseDown:Cn,className:l,contentClassName:c,children:d})});return i.jsx(jm.Provider,{value:je,children:i.jsx(Kx,{show:x,ref:pe,backdrop:E,container:C,keyboard:!0,autoFocus:T,enforceFocus:_,restoreFocus:U,restoreFocusOptions:z,onEscapeKeyDown:Ur,onShow:S,onHide:R,onEnter:or,onEntering:Mn,onEntered:L,onExit:Pt,onExiting:X,onExited:Ir,manager:jt(),transition:w?rO:void 0,backdropTransition:w?oO:void 0,renderBackdrop:Pr,renderDialog:$r})})});rw.displayName="Modal";const be=Object.assign(rw,{Body:ew,Header:nw,Title:aw,Footer:tw,Dialog:Em,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Cm=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},c)=>(a=de(a,"nav-item"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Cm.displayName="NavItem";const _c=m.forwardRef(({bsPrefix:n,className:a,as:o=im,active:l,eventKey:c,disabled:d=!1,...p},g)=>{n=de(n,"nav-link");const[h,v]=Vx({key:Tr(c,p.href),active:l,disabled:d,...p});return i.jsx(o,{...p,...h,ref:g,disabled:d,className:ue(a,n,d&&"disabled",v.isActive&&"active")})});_c.displayName="NavLink";const ow=m.forwardRef((n,a)=>{const{as:o="div",bsPrefix:l,variant:c,fill:d=!1,justify:p=!1,navbar:g,navbarScroll:h,className:v,activeKey:y,...x}=Sc(n,{activeKey:"onSelect"}),w=de(l,"nav");let E,N,A=!1;const S=m.useContext(zr),R=m.useContext(cm);return S?(E=S.bsPrefix,A=g??!0):R&&({cardHeaderBsPrefix:N}=R),i.jsx(UA,{as:o,ref:a,activeKey:y,className:ue(v,{[w]:!A,[`${E}-nav`]:A,[`${E}-nav-scroll`]:A&&h,[`${N}-${c}`]:!!N,[`${w}-${c}`]:!!c,[`${w}-fill`]:d,[`${w}-justified`]:p}),...x})});ow.displayName="Nav";const Zt=Object.assign(ow,{Item:Cm,Link:_c}),sw=m.forwardRef(({bsPrefix:n,className:a,as:o,...l},c)=>{n=de(n,"navbar-brand");const d=o||(l.href?"a":"span");return i.jsx(d,{...l,ref:c,className:ue(a,n)})});sw.displayName="NavbarBrand";const iw=m.forwardRef(({children:n,bsPrefix:a,...o},l)=>{a=de(a,"navbar-collapse");const c=m.useContext(zr);return i.jsx(Hy,{in:!!(c&&c.expanded),...o,children:i.jsx("div",{ref:l,className:a,children:n})})});iw.displayName="NavbarCollapse";const lw=m.forwardRef(({bsPrefix:n,className:a,children:o,label:l="Toggle navigation",as:c="button",onClick:d,...p},g)=>{n=de(n,"navbar-toggler");const{onToggle:h,expanded:v}=m.useContext(zr)||{},y=ya(x=>{d&&d(x),h&&h()});return c==="button"&&(p.type="button"),i.jsx(c,{...p,ref:g,onClick:y,"aria-label":l,className:ue(a,n,!v&&"collapsed"),children:o||i.jsx("span",{className:`${n}-icon`})})});lw.displayName="NavbarToggle";const If=new WeakMap,Jb=(n,a)=>{if(!n||!a)return;const o=If.get(a)||new Map;If.set(a,o);let l=o.get(n);return l||(l=a.matchMedia(n),l.refCount=0,o.set(l.media,l)),l};function sO(n,a=typeof window>"u"?void 0:window){const o=Jb(n,a),[l,c]=m.useState(()=>o?o.matches:!1);return bm(()=>{let d=Jb(n,a);if(!d)return c(!1);let p=If.get(a);const g=()=>{c(d.matches)};return d.refCount++,d.addListener(g),g(),()=>{d.removeListener(g),d.refCount--,d.refCount<=0&&p?.delete(d.media),d=void 0}},[n]),l}function iO(n){const a=Object.keys(n);function o(g,h){return g===h?h:g?`${g} and ${h}`:h}function l(g){return a[Math.min(a.indexOf(g)+1,a.length-1)]}function c(g){const h=l(g);let v=n[h];return typeof v=="number"?v=`${v-.2}px`:v=`calc(${v} - 0.2px)`,`(max-width: ${v})`}function d(g){let h=n[g];return typeof h=="number"&&(h=`${h}px`),`(min-width: ${h})`}function p(g,h,v){let y;typeof g=="object"?(y=g,v=h,h=!0):(h=h||!0,y={[g]:h});let x=m.useMemo(()=>Object.entries(y).reduce((w,[E,N])=>((N==="up"||N===!0)&&(w=o(w,d(E))),(N==="down"||N===!0)&&(w=o(w,c(E))),w),""),[JSON.stringify(y)]);return sO(x,v)}return p}const lO=iO({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),cw=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},c)=>(a=de(a,"offcanvas-body"),i.jsx(o,{ref:c,className:ue(n,a),...l})));cw.displayName="OffcanvasBody";const cO={[vn]:"show",[pa]:"show"},uw=m.forwardRef(({bsPrefix:n,className:a,children:o,in:l=!1,mountOnEnter:c=!1,unmountOnExit:d=!1,appear:p=!1,...g},h)=>(n=de(n,"offcanvas"),i.jsx(Ec,{ref:h,addEndListener:rm,in:l,mountOnEnter:c,unmountOnExit:d,appear:p,...g,childRef:_r(o),children:(v,y)=>m.cloneElement(o,{...y,className:ue(a,o.props.className,(v===vn||v===_o)&&`${n}-toggling`,cO[v])})})));uw.displayName="OffcanvasToggling";const dw=m.forwardRef(({bsPrefix:n,className:a,closeLabel:o="Close",closeButton:l=!1,...c},d)=>(n=de(n,"offcanvas-header"),i.jsx(Nm,{ref:d,...c,className:ue(a,n),closeLabel:o,closeButton:l})));dw.displayName="OffcanvasHeader";const uO=Nc("h5"),fw=m.forwardRef(({className:n,bsPrefix:a,as:o=uO,...l},c)=>(a=de(a,"offcanvas-title"),i.jsx(o,{ref:c,className:ue(n,a),...l})));fw.displayName="OffcanvasTitle";function dO(n){return i.jsx(uw,{...n})}function fO(n){return i.jsx(xa,{...n})}const mw=m.forwardRef(({bsPrefix:n,className:a,children:o,"aria-labelledby":l,placement:c="start",responsive:d,show:p=!1,backdrop:g=!0,keyboard:h=!0,scroll:v=!1,onEscapeKeyDown:y,onShow:x,onHide:w,container:E,autoFocus:N=!0,enforceFocus:A=!0,restoreFocus:S=!0,restoreFocusOptions:R,onEntered:C,onExit:T,onExiting:_,onEnter:U,onEntering:z,onExited:L,backdropClassName:B,manager:X,renderStaticNode:te=!1,...ne},se)=>{const ie=m.useRef();n=de(n,"offcanvas");const[W,Z]=m.useState(!1),k=ya(w),F=lO(d||"xs","up");m.useEffect(()=>{Z(d?p&&!F:p)},[p,d,F]);const re=m.useMemo(()=>({onHide:k}),[k]);function V(){return X||(v?(ie.current||(ie.current=new Qx({handleContainerOverflow:!1})),ie.current):Wx())}const le=(P,...ce)=>{P&&(P.style.visibility="visible"),U?.(P,...ce)},O=(P,...ce)=>{P&&(P.style.visibility=""),L?.(...ce)},q=m.useCallback(P=>i.jsx("div",{...P,className:ue(`${n}-backdrop`,B)}),[B,n]),ae=P=>i.jsx("div",{...P,...ne,className:ue(a,d?`${n}-${d}`:n,`${n}-${c}`),"aria-labelledby":l,children:o});return i.jsxs(i.Fragment,{children:[!W&&(d||te)&&ae({}),i.jsx(jm.Provider,{value:re,children:i.jsx(Kx,{show:W,ref:se,backdrop:g,container:E,keyboard:h,autoFocus:N,enforceFocus:A&&!v,restoreFocus:S,restoreFocusOptions:R,onEscapeKeyDown:y,onShow:x,onHide:k,onEnter:le,onEntering:z,onEntered:C,onExit:T,onExiting:_,onExited:O,manager:V(),transition:dO,backdropTransition:fO,renderBackdrop:q,renderDialog:ae})})]})});mw.displayName="Offcanvas";const Qa=Object.assign(mw,{Body:cw,Header:dw,Title:fw}),pw=m.forwardRef(({onHide:n,...a},o)=>{const l=m.useContext(zr),c=ya(()=>{l==null||l.onToggle==null||l.onToggle(),n?.()});return i.jsx(Qa,{ref:o,show:!!(l!=null&&l.expanded),...a,renderStaticNode:!0,onHide:c})});pw.displayName="NavbarOffcanvas";const hw=m.forwardRef(({className:n,bsPrefix:a,as:o="span",...l},c)=>(a=de(a,"navbar-text"),i.jsx(o,{ref:c,className:ue(n,a),...l})));hw.displayName="NavbarText";const gw=m.forwardRef((n,a)=>{const{bsPrefix:o,expand:l=!0,variant:c="light",bg:d,fixed:p,sticky:g,className:h,as:v="nav",expanded:y,onToggle:x,onSelect:w,collapseOnSelect:E=!1,...N}=Sc(n,{expanded:"onToggle"}),A=de(o,"navbar"),S=m.useCallback((...T)=>{w?.(...T),E&&y&&x?.(!1)},[w,E,y,x]);N.role===void 0&&v!=="nav"&&(N.role="navigation");let R=`${A}-expand`;typeof l=="string"&&(R=`${R}-${l}`);const C=m.useMemo(()=>({onToggle:()=>x?.(!y),bsPrefix:A,expanded:!!y,expand:l}),[A,y,l,x]);return i.jsx(zr.Provider,{value:C,children:i.jsx(Gn.Provider,{value:S,children:i.jsx(v,{ref:a,...N,className:ue(h,A,l&&R,c&&`${A}-${c}`,d&&`bg-${d}`,g&&`sticky-${g}`,p&&`fixed-${p}`)})})})});gw.displayName="Navbar";const Xl=Object.assign(gw,{Brand:sw,Collapse:iw,Offcanvas:pw,Text:hw,Toggle:lw}),vw=m.forwardRef(({id:n,title:a,children:o,bsPrefix:l,className:c,rootCloseEvent:d,menuRole:p,disabled:g,active:h,renderMenuOnMount:v,menuVariant:y,...x},w)=>{const E=de(void 0,"nav-item");return i.jsxs(bn,{ref:w,...x,className:ue(c,E),children:[i.jsx(bn.Toggle,{id:n,eventKey:null,active:h,disabled:g,childBsPrefix:l,as:_c,children:a}),i.jsx(bn.Menu,{role:p,renderOnMount:v,rootCloseEvent:d,variant:y,children:o})]})});vw.displayName="NavDropdown";const hn=Object.assign(vw,{Item:bn.Item,ItemText:bn.ItemText,Divider:bn.Divider,Header:bn.Header}),mO=()=>{};function pO(n,a,{disabled:o,clickTrigger:l}={}){const c=a||mO;hx(n,c,{disabled:o,clickTrigger:l});const d=bt(p=>{Iy(p)&&c(p)});m.useEffect(()=>{if(o||n==null)return;const p=Go(ec(n));let g=(p.defaultView||window).event;const h=ha(p,"keyup",v=>{if(v===g){g=void 0;return}d(v)});return()=>{h()}},[n,o,d])}const bw=m.forwardRef((n,a)=>{const{flip:o,offset:l,placement:c,containerPadding:d,popperConfig:p={},transition:g,runTransition:h}=n,[v,y]=Df(),[x,w]=Df(),E=xi(y,a),N=Mf(n.container),A=Mf(n.target),[S,R]=m.useState(!n.show),C=px(A,v,gx({placement:c,enableEvents:!!n.show,containerPadding:d||5,flip:o,offset:l,arrowElement:x,popperConfig:p}));n.show&&S&&R(!1);const T=(...ne)=>{R(!0),n.onExited&&n.onExited(...ne)},_=n.show||!S;if(pO(v,n.onHide,{disabled:!n.rootClose||n.rootCloseDisabled,clickTrigger:n.rootCloseEvent}),!_)return null;const{onExit:U,onExiting:z,onEnter:L,onEntering:B,onEntered:X}=n;let te=n.children(Object.assign({},C.attributes.popper,{style:C.styles.popper,ref:E}),{popper:C,placement:c,show:!!n.show,arrowProps:Object.assign({},C.attributes.arrow,{style:C.styles.arrow,ref:w})});return te=Bf(g,h,{in:!!n.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:te,onExit:U,onExiting:z,onExited:T,onEnter:L,onEntering:B,onEntered:X}),N?Cr.createPortal(te,N):null});bw.displayName="Overlay";const yw=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},c)=>(a=de(a,"popover-header"),i.jsx(o,{ref:c,className:ue(n,a),...l})));yw.displayName="PopoverHeader";const Am=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},c)=>(a=de(a,"popover-body"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Am.displayName="PopoverBody";function xw(n,a){let o=n;return n==="left"?o=a?"end":"start":n==="right"&&(o=a?"start":"end"),o}function ww(n="absolute"){return{position:n,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const Sw=m.forwardRef(({bsPrefix:n,placement:a="right",className:o,style:l,children:c,body:d,arrowProps:p,hasDoneInitialMeasure:g,popper:h,show:v,...y},x)=>{const w=de(n,"popover"),E=jc(),[N]=a?.split("-")||[],A=xw(N,E);let S=l;return v&&!g&&(S={...l,...ww(h?.strategy)}),i.jsxs("div",{ref:x,role:"tooltip",style:S,"x-placement":N,className:ue(o,w,N&&`bs-popover-${A}`),...y,children:[i.jsx("div",{className:"popover-arrow",...p}),d?i.jsx(Am,{children:c}):c]})});Sw.displayName="Popover";const hO=Object.assign(Sw,{Header:yw,Body:Am,POPPER_OFFSET:[0,8]}),jw=m.forwardRef(({bsPrefix:n,placement:a="right",className:o,style:l,children:c,arrowProps:d,hasDoneInitialMeasure:p,popper:g,show:h,...v},y)=>{n=de(n,"tooltip");const x=jc(),[w]=a?.split("-")||[],E=xw(w,x);let N=l;return h&&!p&&(N={...l,...ww(g?.strategy)}),i.jsxs("div",{ref:y,style:N,role:"tooltip","x-placement":w,className:ue(o,n,`bs-tooltip-${E}`),...v,children:[i.jsx("div",{className:"tooltip-arrow",...d}),i.jsx("div",{className:`${n}-inner`,children:c})]})});jw.displayName="Tooltip";const Nr=Object.assign(jw,{TOOLTIP_OFFSET:[0,6]});function gO(n){const a=m.useRef(null),o=de(void 0,"popover"),l=de(void 0,"tooltip"),c=m.useMemo(()=>({name:"offset",options:{offset:()=>{if(n)return n;if(a.current){if(Uf(a.current,o))return hO.POPPER_OFFSET;if(Uf(a.current,l))return Nr.TOOLTIP_OFFSET}return[0,0]}}}),[n,o,l]);return[a,[c]]}function vO(n,a){const{ref:o}=n,{ref:l}=a;n.ref=o.__wrapped||(o.__wrapped=c=>o(oc(c))),a.ref=l.__wrapped||(l.__wrapped=c=>l(oc(c)))}const Ew=m.forwardRef(({children:n,transition:a=xa,popperConfig:o={},rootClose:l=!1,placement:c="top",show:d=!1,...p},g)=>{const h=m.useRef({}),[v,y]=m.useState(null),[x,w]=gO(p.offset),E=Vo(g,x),N=a===!0?xa:a||void 0,A=ya(S=>{y(S),o==null||o.onFirstUpdate==null||o.onFirstUpdate(S)});return bm(()=>{v&&p.target&&(h.current.scheduleUpdate==null||h.current.scheduleUpdate())},[v,p.target]),m.useEffect(()=>{d||y(null)},[d]),i.jsx(bw,{...p,ref:E,popperConfig:{...o,modifiers:w.concat(o.modifiers||[]),onFirstUpdate:A},transition:N,rootClose:l,placement:c,show:d,children:(S,{arrowProps:R,popper:C,show:T})=>{var _;vO(S,R);const U=C?.placement,z=Object.assign(h.current,{state:C?.state,scheduleUpdate:C?.update,placement:U,outOfBoundaries:(C==null||(_=C.state)==null||(_=_.modifiersData.hide)==null?void 0:_.isReferenceHidden)||!1,strategy:o.strategy}),L=!!v;return typeof n=="function"?n({...S,placement:U,show:T,...!a&&T&&{className:"show"},popper:z,arrowProps:R,hasDoneInitialMeasure:L}):m.cloneElement(n,{...S,placement:U,arrowProps:R,popper:z,hasDoneInitialMeasure:L,className:ue(n.props.className,!a&&T&&"show"),style:{...n.props.style,...S.style}})}})});Ew.displayName="Overlay";function bO(n){return n&&typeof n=="object"?n:{show:n,hide:n}}function qb(n,a,o){const[l]=a,c=l.currentTarget,d=l.relatedTarget||l.nativeEvent[o];(!d||d!==c)&&!di(c,d)&&n(...a)}Pe.oneOf(["click","hover","focus"]);const ko=({trigger:n=["hover","focus"],overlay:a,children:o,popperConfig:l={},show:c,defaultShow:d=!1,onToggle:p,delay:g,placement:h,flip:v=h&&h.indexOf("auto")!==-1,...y})=>{const x=m.useRef(null),w=Vo(x,_r(o)),E=nx(),N=m.useRef(""),[A,S]=zy(c,d,p),R=bO(g),{onFocus:C,onBlur:T,onClick:_}=typeof o!="function"?m.Children.only(o).props:{},U=Z=>{w(oc(Z))},z=m.useCallback(()=>{if(E.clear(),N.current="show",!R.show){S(!0);return}E.set(()=>{N.current==="show"&&S(!0)},R.show)},[R.show,S,E]),L=m.useCallback(()=>{if(E.clear(),N.current="hide",!R.hide){S(!1);return}E.set(()=>{N.current==="hide"&&S(!1)},R.hide)},[R.hide,S,E]),B=m.useCallback((...Z)=>{z(),C?.(...Z)},[z,C]),X=m.useCallback((...Z)=>{L(),T?.(...Z)},[L,T]),te=m.useCallback((...Z)=>{S(!A),_?.(...Z)},[_,S,A]),ne=m.useCallback((...Z)=>{qb(z,Z,"fromElement")},[z]),se=m.useCallback((...Z)=>{qb(L,Z,"toElement")},[L]),ie=n==null?[]:[].concat(n),W={ref:U};return ie.indexOf("click")!==-1&&(W.onClick=te),ie.indexOf("focus")!==-1&&(W.onFocus=B,W.onBlur=X),ie.indexOf("hover")!==-1&&(W.onMouseOver=ne,W.onMouseOut=se),i.jsxs(i.Fragment,{children:[typeof o=="function"?o(W):m.cloneElement(o,W),i.jsx(Ew,{...y,show:A,onHide:L,flip:v,placement:h,popperConfig:l,target:x.current,children:a})]})},Rr=m.forwardRef(({bsPrefix:n,className:a,as:o="div",...l},c)=>{const d=de(n,"row"),p=My(),g=By(),h=`${d}-cols`,v=[];return p.forEach(y=>{const x=l[y];delete l[y];let w;x!=null&&typeof x=="object"?{cols:w}=x:w=x;const E=y!==g?`-${y}`:"";w!=null&&v.push(`${h}${E}-${w}`)}),i.jsx(o,{ref:c,...l,className:ue(a,d,...v)})});Rr.displayName="Row";const Nt=m.forwardRef(({bsPrefix:n,variant:a,animation:o="border",size:l,as:c="div",className:d,...p},g)=>{n=de(n,"spinner");const h=`${n}-${o}`;return i.jsx(c,{ref:g,...p,className:ue(d,h,l&&`${h}-${l}`,a&&`text-${a}`)})});Nt.displayName="Spinner";const yO=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],xO=["activeKey","getControlledId","getControllerId"],wO=["as"];function Pf(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function Nw(n){let{active:a,eventKey:o,mountOnEnter:l,transition:c,unmountOnExit:d,role:p="tabpanel",onEnter:g,onEntering:h,onEntered:v,onExit:y,onExiting:x,onExited:w}=n,E=Pf(n,yO);const N=m.useContext(Zo);if(!N)return[Object.assign({},E,{role:p}),{eventKey:o,isActive:a,mountOnEnter:l,transition:c,unmountOnExit:d,onEnter:g,onEntering:h,onEntered:v,onExit:y,onExiting:x,onExited:w}];const{activeKey:A,getControlledId:S,getControllerId:R}=N,C=Pf(N,xO),T=Tr(o);return[Object.assign({},E,{role:p,id:S(o),"aria-labelledby":R(o)}),{eventKey:o,isActive:a==null&&T!=null?Tr(A)===T:a,transition:c||C.transition,mountOnEnter:l??C.mountOnEnter,unmountOnExit:d??C.unmountOnExit,onEnter:g,onEntering:h,onEntered:v,onExit:y,onExiting:x,onExited:w}]}const Cw=m.forwardRef((n,a)=>{let{as:o="div"}=n,l=Pf(n,wO);const[c,{isActive:d,onEnter:p,onEntering:g,onEntered:h,onExit:v,onExiting:y,onExited:x,mountOnEnter:w,unmountOnExit:E,transition:N=Sm}]=Nw(l);return i.jsx(Zo.Provider,{value:null,children:i.jsx(Gn.Provider,{value:null,children:i.jsx(N,{in:d,onEnter:p,onEntering:g,onEntered:h,onExit:v,onExiting:y,onExited:x,mountOnEnter:w,unmountOnExit:E,children:i.jsx(o,Object.assign({},c,{ref:a,hidden:!d,"aria-hidden":!d}))})})})});Cw.displayName="TabPanel";const Om=n=>{const{id:a,generateChildId:o,onSelect:l,activeKey:c,defaultActiveKey:d,transition:p,mountOnEnter:g,unmountOnExit:h,children:v}=n,[y,x]=ax(c,d,l),w=wx(a),E=m.useMemo(()=>o||((A,S)=>w?`${w}-${S}-${A}`:null),[w,o]),N=m.useMemo(()=>({onSelect:x,activeKey:y,transition:p,mountOnEnter:g||!1,unmountOnExit:h||!1,getControlledId:A=>E(A,"tabpane"),getControllerId:A=>E(A,"tab")}),[x,y,p,g,h,E]);return i.jsx(Zo.Provider,{value:N,children:i.jsx(Gn.Provider,{value:x||null,children:v})})};Om.Panel=Cw;function km(n){return typeof n=="boolean"?n?xa:Sm:n}const Aw=({transition:n,...a})=>i.jsx(Om,{...a,transition:km(n)});Aw.displayName="TabContainer";const Tm=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},c)=>(a=de(a,"tab-content"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Tm.displayName="TabContent";const Rm=m.forwardRef(({bsPrefix:n,transition:a,...o},l)=>{const[{className:c,as:d="div",...p},{isActive:g,onEnter:h,onEntering:v,onEntered:y,onExit:x,onExiting:w,onExited:E,mountOnEnter:N,unmountOnExit:A,transition:S=xa}]=Nw({...o,transition:km(a)}),R=de(n,"tab-pane");return i.jsx(Zo.Provider,{value:null,children:i.jsx(Gn.Provider,{value:null,children:i.jsx(S,{in:g,onEnter:h,onEntering:v,onEntered:y,onExit:x,onExiting:w,onExited:E,mountOnEnter:N,unmountOnExit:A,children:i.jsx(d,{...p,ref:l,className:ue(c,R,g&&"active")})})})})});Rm.displayName="TabPane";const SO={eventKey:Pe.oneOfType([Pe.string,Pe.number]),title:Pe.node.isRequired,disabled:Pe.bool,tabClassName:Pe.string,tabAttrs:Pe.object},Ow=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};Ow.propTypes=SO;const Do=Object.assign(Ow,{Container:Aw,Content:Tm,Pane:Rm}),wi=m.forwardRef(({bsPrefix:n,className:a,striped:o,bordered:l,borderless:c,hover:d,size:p,variant:g,responsive:h,...v},y)=>{const x=de(n,"table"),w=ue(a,x,g&&`${x}-${g}`,p&&`${x}-${p}`,o&&`${x}-${typeof o=="string"?`striped-${o}`:"striped"}`,l&&`${x}-bordered`,c&&`${x}-borderless`,d&&`${x}-hover`),E=i.jsx("table",{...v,className:w,ref:y});if(h){let N=`${x}-responsive`;return typeof h=="string"&&(N=`${N}-${h}`),i.jsx("div",{className:N,children:E})}return E});wi.displayName="Table";function jO(n){let a;return JC(n,o=>{a==null&&(a=o.props.eventKey)}),a}function EO(n){const{title:a,eventKey:o,disabled:l,tabClassName:c,tabAttrs:d,id:p}=n.props;return a==null?null:i.jsx(Cm,{as:"li",role:"presentation",children:i.jsx(_c,{as:"button",type:"button",eventKey:o,disabled:l,id:p,className:c,...d,children:a})})}const Dm=n=>{const{id:a,onSelect:o,transition:l,mountOnEnter:c=!1,unmountOnExit:d=!1,variant:p="tabs",children:g,activeKey:h=jO(g),...v}=Sc(n,{activeKey:"onSelect"});return i.jsxs(Om,{id:a,activeKey:h,onSelect:o,transition:km(l),mountOnEnter:c,unmountOnExit:d,children:[i.jsx(Zt,{id:a,...v,role:"tablist",as:"ul",variant:p,children:xb(g,EO)}),i.jsx(Tm,{children:xb(g,y=>{const x={...y.props};return delete x.title,delete x.disabled,delete x.tabClassName,delete x.tabAttrs,i.jsx(Rm,{...x})})})]})};Dm.displayName="Tabs";const NO={[vn]:"showing",[_o]:"showing show"},kw=m.forwardRef((n,a)=>i.jsx(xa,{...n,ref:a,transitionClasses:NO}));kw.displayName="ToastFade";const Tw=m.createContext({onClose(){}}),Rw=m.forwardRef(({bsPrefix:n,closeLabel:a="Close",closeVariant:o,closeButton:l=!0,className:c,children:d,...p},g)=>{n=de(n,"toast-header");const h=m.useContext(Tw),v=ya(y=>{h==null||h.onClose==null||h.onClose(y)});return i.jsxs("div",{ref:g,...p,className:ue(n,c),children:[d,l&&i.jsx(Cc,{"aria-label":a,variant:o,onClick:v,"data-dismiss":"toast"})]})});Rw.displayName="ToastHeader";const Dw=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},c)=>(a=de(a,"toast-body"),i.jsx(o,{ref:c,className:ue(n,a),...l})));Dw.displayName="ToastBody";const Lw=m.forwardRef(({bsPrefix:n,className:a,transition:o=kw,show:l=!0,animation:c=!0,delay:d=5e3,autohide:p=!1,onClose:g,onEntered:h,onExit:v,onExiting:y,onEnter:x,onEntering:w,onExited:E,bg:N,...A},S)=>{n=de(n,"toast");const R=m.useRef(d),C=m.useRef(g);m.useEffect(()=>{R.current=d,C.current=g},[d,g]);const T=nx(),_=!!(p&&l),U=m.useCallback(()=>{_&&(C.current==null||C.current())},[_]);m.useEffect(()=>{T.set(U,R.current)},[T,U]);const z=m.useMemo(()=>({onClose:g}),[g]),L=!!(o&&c),B=i.jsx("div",{...A,ref:S,className:ue(n,a,N&&`bg-${N}`,!L&&(l?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return i.jsx(Tw.Provider,{value:z,children:L&&o?i.jsx(o,{in:l,onEnter:x,onEntering:w,onEntered:h,onExit:v,onExiting:y,onExited:E,unmountOnExit:!0,children:B}):B})});Lw.displayName="Toast";const Ct=Object.assign(Lw,{Body:Dw,Header:Rw}),CO={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},Ko=m.forwardRef(({bsPrefix:n,position:a,containerPosition:o,className:l,as:c="div",...d},p)=>(n=de(n,"toast-container"),i.jsx(c,{ref:p,...d,className:ue(n,a&&CO[a],o&&`position-${o}`,l)})));Ko.displayName="ToastContainer";const _w=m.createContext();function AO({children:n}){const[a,o]=m.useState([]),l=m.useCallback((h,v="success",y=3e3,x="Notificación")=>{const w=crypto.randomUUID();o(E=>[...E,{id:w,message:h,variant:v,delay:y,header:x}])},[]),c=h=>{o(v=>v.filter(y=>y.id!==h))},d={comun:"#000000",warning1:"#fff3cd",fosforito:"#00ffcc"},p=h=>{switch(h){case"success":return{color:"#0f5132"};case"danger":return{color:"#842029"};case"warning":return{color:"#664d03"};case"info":return{color:"#055160"};default:return{color:"#212529"}}},g=h=>{switch(h){case"success":return"text-white";case"danger":return"text-white";case"warning":return"text-dark";case"info":return"text-dark";case"comun":return"text-white";case"warning1":return"text-dark";default:return"text-dark"}};return i.jsxs(_w.Provider,{value:{showToast:l},children:[n,i.jsx(Ko,{position:"bottom-end",className:"p-3",style:{zIndex:2e3},children:a.map(h=>{const v=d[h.variant];return i.jsxs(Ct,{bg:v?void 0:h.variant,autohide:!0,delay:h.delay,onClose:()=>c(h.id),style:v?{backgroundColor:d[h.variant]}:{},children:[i.jsx(Ct.Header,{closeButton:!0,children:i.jsx("strong",{className:"me-auto",style:p(h.variant),children:h.header})}),i.jsx(Ct.Body,{className:g(h.variant),children:h.message})]},h.id)})})]})}function Yn(){const n=m.useContext(_w);if(!n)throw new Error("useToast debe usarse dentro de <ToastProvider>");return n}function zw(n,a,o){if(typeof n=="function"?n===a:n.has(a))return arguments.length<3?a:o;throw new TypeError("Private element is not present on this object")}function OO(n,a){if(a.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Gb(n,a){return n.get(zw(n,a))}function kO(n,a,o){OO(n,a),a.set(n,o)}function TO(n,a,o){return n.set(zw(n,a),o),o}const RO=100,he={},DO=()=>{he.previousActiveElement instanceof HTMLElement?(he.previousActiveElement.focus(),he.previousActiveElement=null):document.body&&document.body.focus()},LO=n=>new Promise(a=>{if(!n)return a();const o=window.scrollX,l=window.scrollY;he.restoreFocusTimeout=setTimeout(()=>{DO(),a()},RO),window.scrollTo(o,l)}),Mw="swal2-",_O=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],Y=_O.reduce((n,a)=>(n[a]=Mw+a,n),{}),zO=["success","warning","info","question","error"],cc=zO.reduce((n,a)=>(n[a]=Mw+a,n),{}),Bw="SweetAlert2:",Lm=n=>n.charAt(0).toUpperCase()+n.slice(1),At=n=>{console.warn(`${Bw} ${typeof n=="object"?n.join(" "):n}`)},Mr=n=>{console.error(`${Bw} ${n}`)},Fb=[],MO=n=>{Fb.includes(n)||(Fb.push(n),At(n))},Uw=(n,a=null)=>{MO(`"${n}" is deprecated and will be removed in the next major release.${a?` Use "${a}" instead.`:""}`)},zc=n=>typeof n=="function"?n():n,_m=n=>n&&typeof n.toPromise=="function",Si=n=>_m(n)?n.toPromise():Promise.resolve(n),zm=n=>n&&Promise.resolve(n)===n,BO=()=>navigator.userAgent.includes("Firefox"),Ot=()=>document.body.querySelector(`.${Y.container}`),ji=n=>{const a=Ot();return a?a.querySelector(n):null},en=n=>ji(`.${n}`),ze=()=>en(Y.popup),Qo=()=>en(Y.icon),UO=()=>en(Y["icon-content"]),Iw=()=>en(Y.title),Mm=()=>en(Y["html-container"]),Pw=()=>en(Y.image),Bm=()=>en(Y["progress-steps"]),Mc=()=>en(Y["validation-message"]),Fn=()=>ji(`.${Y.actions} .${Y.confirm}`),Wo=()=>ji(`.${Y.actions} .${Y.cancel}`),Br=()=>ji(`.${Y.actions} .${Y.deny}`),IO=()=>en(Y["input-label"]),es=()=>ji(`.${Y.loader}`),Ei=()=>en(Y.actions),$w=()=>en(Y.footer),Bc=()=>en(Y["timer-progress-bar"]),Um=()=>en(Y.close),PO=`
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
`,Im=()=>{const n=ze();if(!n)return[];const a=n.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),o=Array.from(a).sort((d,p)=>{const g=parseInt(d.getAttribute("tabindex")||"0"),h=parseInt(p.getAttribute("tabindex")||"0");return g>h?1:g<h?-1:0}),l=n.querySelectorAll(PO),c=Array.from(l).filter(d=>d.getAttribute("tabindex")!=="-1");return[...new Set(o.concat(c))].filter(d=>Ut(d))},Pm=()=>va(document.body,Y.shown)&&!va(document.body,Y["toast-shown"])&&!va(document.body,Y["no-backdrop"]),Uc=()=>{const n=ze();return n?va(n,Y.toast):!1},$O=()=>{const n=ze();return n?n.hasAttribute("data-loading"):!1},tn=(n,a)=>{if(n.textContent="",a){const l=new DOMParser().parseFromString(a,"text/html"),c=l.querySelector("head");c&&Array.from(c.childNodes).forEach(p=>{n.appendChild(p)});const d=l.querySelector("body");d&&Array.from(d.childNodes).forEach(p=>{p instanceof HTMLVideoElement||p instanceof HTMLAudioElement?n.appendChild(p.cloneNode(!0)):n.appendChild(p)})}},va=(n,a)=>a?a.split(/\s+/).every(o=>n.classList.contains(o)):!1,HO=(n,a)=>{Array.from(n.classList).forEach(o=>{!Object.values(Y).includes(o)&&!Object.values(cc).includes(o)&&!Object.values(a.showClass||{}).includes(o)&&n.classList.remove(o)})},Qt=(n,a,o)=>{if(HO(n,a),!a.customClass)return;const l=a.customClass[o];if(l){if(typeof l!="string"&&!l.forEach){At(`Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof l}"`);return}_e(n,l)}},Ic=(n,a)=>{if(!a)return null;switch(a){case"select":case"textarea":case"file":return n.querySelector(`.${Y.popup} > .${Y[a]}`);case"checkbox":return n.querySelector(`.${Y.popup} > .${Y.checkbox} input`);case"radio":return n.querySelector(`.${Y.popup} > .${Y.radio} input:checked`)||n.querySelector(`.${Y.popup} > .${Y.radio} input:first-child`);case"range":return n.querySelector(`.${Y.popup} > .${Y.range} input`);default:return n.querySelector(`.${Y.popup} > .${Y.input}`)}},Hw=n=>{if(n.focus(),n.type!=="file"){const a=n.value;n.value="",n.value=a}},Jw=(n,a,o)=>{if(!n||!a)return;const l=typeof a=="string"?a.split(/\s+/).filter(Boolean):a;(Array.isArray(n)?n:[n]).forEach(d=>{l.forEach(p=>{o?d.classList.add(p):d.classList.remove(p)})})},_e=(n,a)=>{Jw(n,a,!0)},jn=(n,a)=>{Jw(n,a,!1)},er=(n,a)=>Array.from(n.children).find(o=>o instanceof HTMLElement&&va(o,a)),Or=(n,a,o)=>{o===`${parseInt(`${o}`)}`&&(o=parseInt(o)),o||o===0?n.style.setProperty(a,typeof o=="number"?`${o}px`:o):n.style.removeProperty(a)},ft=(n,a="flex")=>{n&&(n.style.display=a)},St=n=>{n&&(n.style.display="none")},$m=(n,a="block")=>{n&&new MutationObserver(()=>{Ni(n,n.innerHTML,a)}).observe(n,{childList:!0,subtree:!0})},Vb=(n,a,o,l)=>{const c=n.querySelector(a);c&&c.style.setProperty(o,l)},Ni=(n,a,o="flex")=>{a?ft(n,o):St(n)},Ut=n=>!!(n&&(n.offsetWidth||n.offsetHeight||n.getClientRects().length)),JO=()=>!Ut(Fn())&&!Ut(Br())&&!Ut(Wo()),$f=n=>n.scrollHeight>n.clientHeight,qO=(n,a)=>{let o=n;for(;o&&o!==a;){if($f(o))return!0;o=o.parentElement}return!1},qw=n=>{const a=window.getComputedStyle(n),o=parseFloat(a.getPropertyValue("animation-duration")||"0"),l=parseFloat(a.getPropertyValue("transition-duration")||"0");return o>0||l>0},Hm=(n,a=!1)=>{const o=Bc();o&&Ut(o)&&(a&&(o.style.transition="none",o.style.width="100%"),setTimeout(()=>{o.style.transition=`width ${n/1e3}s linear`,o.style.width="0%"},10))},GO=()=>{const n=Bc();if(!n)return;const a=parseInt(window.getComputedStyle(n).width);n.style.removeProperty("transition"),n.style.width="100%";const o=parseInt(window.getComputedStyle(n).width),l=a/o*100;n.style.width=`${l}%`},FO=()=>typeof window>"u"||typeof document>"u",VO=`
 <div aria-labelledby="${Y.title}" aria-describedby="${Y["html-container"]}" class="${Y.popup}" tabindex="-1">
   <button type="button" class="${Y.close}"></button>
   <ul class="${Y["progress-steps"]}"></ul>
   <div class="${Y.icon}"></div>
   <img class="${Y.image}" />
   <h2 class="${Y.title}" id="${Y.title}"></h2>
   <div class="${Y["html-container"]}" id="${Y["html-container"]}"></div>
   <input class="${Y.input}" id="${Y.input}" />
   <input type="file" class="${Y.file}" />
   <div class="${Y.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${Y.select}" id="${Y.select}"></select>
   <div class="${Y.radio}"></div>
   <label class="${Y.checkbox}">
     <input type="checkbox" id="${Y.checkbox}" />
     <span class="${Y.label}"></span>
   </label>
   <textarea class="${Y.textarea}" id="${Y.textarea}"></textarea>
   <div class="${Y["validation-message"]}" id="${Y["validation-message"]}"></div>
   <div class="${Y.actions}">
     <div class="${Y.loader}"></div>
     <button type="button" class="${Y.confirm}"></button>
     <button type="button" class="${Y.deny}"></button>
     <button type="button" class="${Y.cancel}"></button>
   </div>
   <div class="${Y.footer}"></div>
   <div class="${Y["timer-progress-bar-container"]}">
     <div class="${Y["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),YO=()=>{const n=Ot();return n?(n.remove(),jn([document.documentElement,document.body],[Y["no-backdrop"],Y["toast-shown"],Y["has-column"]]),!0):!1},Er=()=>{he.currentInstance&&he.currentInstance.resetValidationMessage()},XO=()=>{const n=ze();if(!n)return;const a=er(n,Y.input),o=er(n,Y.file),l=n.querySelector(`.${Y.range} input`),c=n.querySelector(`.${Y.range} output`),d=er(n,Y.select),p=n.querySelector(`.${Y.checkbox} input`),g=er(n,Y.textarea);a&&(a.oninput=Er),o&&(o.onchange=Er),d&&(d.onchange=Er),p&&(p.onchange=Er),g&&(g.oninput=Er),l&&c&&(l.oninput=()=>{Er(),c.value=l.value},l.onchange=()=>{Er(),c.value=l.value})},ZO=n=>{if(typeof n=="string"){const a=document.querySelector(n);if(!a)throw new Error(`Target element "${n}" not found`);return a}return n},KO=n=>{const a=ze();a&&(a.setAttribute("role",n.toast?"alert":"dialog"),a.setAttribute("aria-live",n.toast?"polite":"assertive"),n.toast||a.setAttribute("aria-modal","true"))},QO=n=>{window.getComputedStyle(n).direction==="rtl"&&(_e(Ot(),Y.rtl),he.isRTL=!0)},WO=n=>{const a=YO();if(FO()){Mr("SweetAlert2 requires document to initialize");return}const o=document.createElement("div");o.className=Y.container,a&&_e(o,Y["no-transition"]),tn(o,VO),o.dataset.swal2Theme=n.theme;const l=ZO(n.target||"body");l.appendChild(o),n.topLayer&&(o.setAttribute("popover",""),o.showPopover()),KO(n),QO(l),XO()},Jm=(n,a)=>{n instanceof HTMLElement?a.appendChild(n):typeof n=="object"?e1(n,a):n&&tn(a,n)},e1=(n,a)=>{"jquery"in n?t1(a,n):tn(a,n.toString())},t1=(n,a)=>{if(n.textContent="",0 in a)for(let o=0;o in a;o++)n.appendChild(a[o].cloneNode(!0));else n.appendChild(a.cloneNode(!0))},n1=(n,a)=>{const o=Ei(),l=es();!o||!l||(!a.showConfirmButton&&!a.showDenyButton&&!a.showCancelButton?St(o):ft(o),Qt(o,a,"actions"),a1(o,l,a),tn(l,a.loaderHtml||""),Qt(l,a,"loader"))};function a1(n,a,o){const l=Fn(),c=Br(),d=Wo();!l||!c||!d||(xf(l,"confirm",o),xf(c,"deny",o),xf(d,"cancel",o),r1(l,c,d,o),o.reverseButtons&&(o.toast?(n.insertBefore(d,l),n.insertBefore(c,l)):(n.insertBefore(d,a),n.insertBefore(c,a),n.insertBefore(l,a))))}function r1(n,a,o,l){if(!l.buttonsStyling){jn([n,a,o],Y.styled);return}_e([n,a,o],Y.styled),[[n,"confirm",l.confirmButtonColor],[a,"deny",l.denyButtonColor],[o,"cancel",l.cancelButtonColor]].forEach(([d,p,g])=>{g&&d.style.setProperty(`--swal2-${p}-button-background-color`,g),o1(d)})}function o1(n){const a=window.getComputedStyle(n);if(a.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const o=a.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");n.style.setProperty("--swal2-action-button-focus-box-shadow",a.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${o}`))}function xf(n,a,o){const l=Lm(a);Ni(n,o[`show${l}Button`],"inline-block"),tn(n,o[`${a}ButtonText`]||""),n.setAttribute("aria-label",o[`${a}ButtonAriaLabel`]||""),n.className=Y[a],Qt(n,o,`${a}Button`)}const s1=(n,a)=>{const o=Um();o&&(tn(o,a.closeButtonHtml||""),Qt(o,a,"closeButton"),Ni(o,a.showCloseButton),o.setAttribute("aria-label",a.closeButtonAriaLabel||""))},i1=(n,a)=>{const o=Ot();o&&(l1(o,a.backdrop),c1(o,a.position),u1(o,a.grow),Qt(o,a,"container"))};function l1(n,a){typeof a=="string"?n.style.background=a:a||_e([document.documentElement,document.body],Y["no-backdrop"])}function c1(n,a){a&&(a in Y?_e(n,Y[a]):(At('The "position" parameter is not valid, defaulting to "center"'),_e(n,Y.center)))}function u1(n,a){a&&_e(n,Y[`grow-${a}`])}var $e={innerParams:new WeakMap,domCache:new WeakMap,focusedElement:new WeakMap};const d1=["input","file","range","select","radio","checkbox","textarea"],f1=(n,a)=>{const o=ze();if(!o)return;const l=$e.innerParams.get(n),c=!l||a.input!==l.input;d1.forEach(d=>{const p=er(o,Y[d]);p&&(h1(d,a.inputAttributes),p.className=Y[d],c&&St(p))}),a.input&&(c&&m1(a),g1(a))},m1=n=>{if(!n.input)return;if(!nt[n.input]){Mr(`Unexpected type of input! Expected ${Object.keys(nt).join(" | ")}, got "${n.input}"`);return}const a=Gw(n.input);if(!a)return;const o=nt[n.input](a,n);ft(a),n.inputAutoFocus&&setTimeout(()=>{Hw(o)})},p1=n=>{for(const{name:a}of Array.from(n.attributes))["id","type","value","style"].includes(a)||n.removeAttribute(a)},h1=(n,a)=>{const o=ze();if(!o)return;const l=Ic(o,n);if(l){p1(l);for(const c in a)l.setAttribute(c,a[c])}},g1=n=>{if(!n.input)return;const a=Gw(n.input);a&&Qt(a,n,"input")},qm=(n,a)=>{!n.placeholder&&a.inputPlaceholder&&(n.placeholder=a.inputPlaceholder)},Ci=(n,a,o)=>{if(o.inputLabel){const l=document.createElement("label"),c=Y["input-label"];l.setAttribute("for",n.id),l.className=c,typeof o.customClass=="object"&&_e(l,o.customClass.inputLabel),l.innerText=o.inputLabel,a.insertAdjacentElement("beforebegin",l)}},Gw=n=>{const a=ze();if(a)return er(a,Y[n]||Y.input)},uc=(n,a)=>{["string","number"].includes(typeof a)?n.value=`${a}`:zm(a)||At(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof a}"`)},nt={};nt.text=nt.email=nt.password=nt.number=nt.tel=nt.url=nt.search=nt.date=nt["datetime-local"]=nt.time=nt.week=nt.month=(n,a)=>{const o=n;return uc(o,a.inputValue),Ci(o,o,a),qm(o,a),o.type=a.input,o};nt.file=(n,a)=>{const o=n;return Ci(o,o,a),qm(o,a),o};nt.range=(n,a)=>{const o=n,l=o.querySelector("input"),c=o.querySelector("output");return l&&(uc(l,a.inputValue),l.type=a.input,Ci(l,n,a)),c&&uc(c,a.inputValue),n};nt.select=(n,a)=>{const o=n;if(o.textContent="",a.inputPlaceholder){const l=document.createElement("option");tn(l,a.inputPlaceholder),l.value="",l.disabled=!0,l.selected=!0,o.appendChild(l)}return Ci(o,o,a),o};nt.radio=n=>{const a=n;return a.textContent="",n};nt.checkbox=(n,a)=>{const o=ze();if(!o)throw new Error("Popup not found");const l=Ic(o,"checkbox");if(!l)throw new Error("Checkbox input not found");l.value="1",l.checked=!!a.inputValue;const d=n.querySelector("span");if(d){const p=a.inputPlaceholder||a.inputLabel;p&&tn(d,p)}return l};nt.textarea=(n,a)=>{const o=n;uc(o,a.inputValue),qm(o,a),Ci(o,o,a);const l=c=>parseInt(window.getComputedStyle(c).marginLeft)+parseInt(window.getComputedStyle(c).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const c=ze();if(!c)return;const d=parseInt(window.getComputedStyle(c).width),p=()=>{if(!document.body.contains(o))return;const g=o.offsetWidth+l(o),h=ze();h&&(g>d?h.style.width=`${g}px`:Or(h,"width",a.width))};new MutationObserver(p).observe(o,{attributes:!0,attributeFilter:["style"]})}}),o};const v1=(n,a)=>{const o=Mm();o&&($m(o),Qt(o,a,"htmlContainer"),a.html?(Jm(a.html,o),ft(o,"block")):a.text?(o.textContent=a.text,ft(o,"block")):St(o),f1(n,a))},b1=(n,a)=>{const o=$w();o&&($m(o),Ni(o,!!a.footer,"block"),a.footer&&Jm(a.footer,o),Qt(o,a,"footer"))},y1=(n,a)=>{const o=$e.innerParams.get(n),l=Qo();if(!l)return;if(o&&a.icon===o.icon){Xb(l,a),Yb(l,a);return}if(!a.icon&&!a.iconHtml){St(l);return}if(a.icon&&Object.keys(cc).indexOf(a.icon)===-1){Mr(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${a.icon}"`),St(l);return}ft(l),Xb(l,a),Yb(l,a),_e(l,a.showClass&&a.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Fw)},Yb=(n,a)=>{for(const[o,l]of Object.entries(cc))a.icon!==o&&jn(n,l);_e(n,a.icon&&cc[a.icon]),S1(n,a),Fw(),Qt(n,a,"icon")},Fw=()=>{const n=ze();if(!n)return;const a=window.getComputedStyle(n).getPropertyValue("background-color");n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix").forEach(l=>{l.style.backgroundColor=a})},x1=n=>`
  ${n.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${n.animation?'<div class="swal2-success-fix"></div>':""}
  ${n.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,w1=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Xb=(n,a)=>{if(!a.icon&&!a.iconHtml)return;let o=n.innerHTML,l="";a.iconHtml?l=Zb(a.iconHtml):a.icon==="success"?(l=x1(a),o=o.replace(/ style=".*?"/g,"")):a.icon==="error"?l=w1:a.icon&&(l=Zb({question:"?",warning:"!",info:"i"}[a.icon])),o.trim()!==l.trim()&&tn(n,l)},S1=(n,a)=>{if(a.iconColor){n.style.color=a.iconColor,n.style.borderColor=a.iconColor;for(const o of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Vb(n,o,"background-color",a.iconColor);Vb(n,".swal2-success-ring","border-color",a.iconColor)}},Zb=n=>`<div class="${Y["icon-content"]}">${n}</div>`,j1=(n,a)=>{const o=Pw();if(o){if(!a.imageUrl){St(o);return}ft(o,""),o.setAttribute("src",a.imageUrl),o.setAttribute("alt",a.imageAlt||""),Or(o,"width",a.imageWidth),Or(o,"height",a.imageHeight),o.className=Y.image,Qt(o,a,"image")}};let Gm=!1,Vw=0,Yw=0,Xw=0,Zw=0;const E1=n=>{n.addEventListener("mousedown",dc),document.body.addEventListener("mousemove",fc),n.addEventListener("mouseup",mc),n.addEventListener("touchstart",dc),document.body.addEventListener("touchmove",fc),n.addEventListener("touchend",mc)},N1=n=>{n.removeEventListener("mousedown",dc),document.body.removeEventListener("mousemove",fc),n.removeEventListener("mouseup",mc),n.removeEventListener("touchstart",dc),document.body.removeEventListener("touchmove",fc),n.removeEventListener("touchend",mc)},dc=n=>{const a=ze();if(!a)return;const o=Qo();if(n.target===a||o&&o.contains(n.target)){Gm=!0;const l=Kw(n);Vw=l.clientX,Yw=l.clientY,Xw=parseInt(a.style.insetInlineStart)||0,Zw=parseInt(a.style.insetBlockStart)||0,_e(a,"swal2-dragging")}},fc=n=>{const a=ze();if(a&&Gm){let{clientX:o,clientY:l}=Kw(n);const c=o-Vw;a.style.insetInlineStart=`${Xw+(he.isRTL?-c:c)}px`,a.style.insetBlockStart=`${Zw+(l-Yw)}px`}},mc=()=>{const n=ze();Gm=!1,jn(n,"swal2-dragging")},Kw=n=>{const a=n.type.startsWith("touch")?n.touches[0]:n;return{clientX:a.clientX,clientY:a.clientY}},C1=(n,a)=>{const o=Ot(),l=ze();if(!(!o||!l)){if(a.toast){Or(o,"width",a.width),l.style.width="100%";const c=es();c&&l.insertBefore(c,Qo())}else Or(l,"width",a.width);Or(l,"padding",a.padding),a.color&&(l.style.color=a.color),a.background&&(l.style.background=a.background),St(Mc()),A1(l,a),a.draggable&&!a.toast?(_e(l,Y.draggable),E1(l)):(jn(l,Y.draggable),N1(l))}},A1=(n,a)=>{const o=a.showClass||{};n.className=`${Y.popup} ${Ut(n)?o.popup:""}`,a.toast?(_e([document.documentElement,document.body],Y["toast-shown"]),_e(n,Y.toast)):_e(n,Y.modal),Qt(n,a,"popup"),typeof a.customClass=="string"&&_e(n,a.customClass),a.icon&&_e(n,Y[`icon-${a.icon}`])},O1=(n,a)=>{const o=Bm();if(!o)return;const{progressSteps:l,currentProgressStep:c}=a;if(!l||l.length===0||c===void 0){St(o);return}ft(o),o.textContent="",c>=l.length&&At("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),l.forEach((d,p)=>{const g=k1(d);if(o.appendChild(g),p===c&&_e(g,Y["active-progress-step"]),p!==l.length-1){const h=T1(a);o.appendChild(h)}})},k1=n=>{const a=document.createElement("li");return _e(a,Y["progress-step"]),tn(a,n),a},T1=n=>{const a=document.createElement("li");return _e(a,Y["progress-step-line"]),n.progressStepsDistance&&Or(a,"width",n.progressStepsDistance),a},R1=(n,a)=>{const o=Iw();o&&($m(o),Ni(o,!!(a.title||a.titleText),"block"),a.title&&Jm(a.title,o),a.titleText&&(o.innerText=a.titleText),Qt(o,a,"title"))},Qw=(n,a)=>{var o;C1(n,a),i1(n,a),O1(n,a),y1(n,a),j1(n,a),R1(n,a),s1(n,a),v1(n,a),n1(n,a),b1(n,a);const l=ze();typeof a.didRender=="function"&&l&&a.didRender(l),(o=he.eventEmitter)===null||o===void 0||o.emit("didRender",l)},D1=()=>Ut(ze()),Ww=()=>{var n;return(n=Fn())===null||n===void 0?void 0:n.click()},L1=()=>{var n;return(n=Br())===null||n===void 0?void 0:n.click()},_1=()=>{var n;return(n=Wo())===null||n===void 0?void 0:n.click()},ts=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),e0=n=>{if(n.keydownTarget&&n.keydownHandlerAdded&&n.keydownHandler){const a=n.keydownHandler;n.keydownTarget.removeEventListener("keydown",a,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!1}},z1=(n,a,o)=>{if(e0(n),!a.toast){const l=d=>B1(a,d,o);n.keydownHandler=l;const c=a.keydownListenerCapture?window:ze();if(c){n.keydownTarget=c,n.keydownListenerCapture=a.keydownListenerCapture;const d=l;n.keydownTarget.addEventListener("keydown",d,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!0}}},Hf=(n,a)=>{var o;const l=Im();return l.length?(n=n+a,n===-2&&(n=l.length-1),n===l.length?n=0:n===-1&&(n=l.length-1),l[n].focus(),!(BO()&&l[n]instanceof HTMLIFrameElement)):((o=ze())===null||o===void 0||o.focus(),!0)},t0=["ArrowRight","ArrowDown"],M1=["ArrowLeft","ArrowUp"],B1=(n,a,o)=>{n&&(a.isComposing||a.keyCode===229||(n.stopKeydownPropagation&&a.stopPropagation(),a.key==="Enter"?U1(a,n):a.key==="Tab"?I1(a):[...t0,...M1].includes(a.key)?P1(a.key):a.key==="Escape"&&$1(a,n,o)))},U1=(n,a)=>{if(!zc(a.allowEnterKey))return;const o=ze();if(!o||!a.input)return;const l=Ic(o,a.input);if(n.target&&l&&n.target instanceof HTMLElement&&n.target.outerHTML===l.outerHTML){if(["textarea","file"].includes(a.input))return;Ww(),n.preventDefault()}},I1=n=>{const a=n.target,l=Im().findIndex(d=>d===a);let c=!0;n.shiftKey?c=Hf(l,-1):c=Hf(l,1),n.stopPropagation(),c&&n.preventDefault()},P1=n=>{const a=Ei(),o=Fn(),l=Br(),c=Wo();if(!a||!o||!l||!c)return;const d=[o,l,c];if(document.activeElement instanceof HTMLElement&&!d.includes(document.activeElement))return;const p=t0.includes(n)?"nextElementSibling":"previousElementSibling";let g=document.activeElement;if(g){for(let h=0;h<a.children.length;h++){if(g=g[p],!g)return;if(g instanceof HTMLButtonElement&&Ut(g))break}g instanceof HTMLButtonElement&&g.focus()}},$1=(n,a,o)=>{n.preventDefault(),zc(a.allowEscapeKey)&&o(ts.esc)};var Io={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const H1=()=>{const n=Ot();Array.from(document.body.children).forEach(o=>{o.contains(n)||(o.hasAttribute("aria-hidden")&&o.setAttribute("data-previous-aria-hidden",o.getAttribute("aria-hidden")||""),o.setAttribute("aria-hidden","true"))})},n0=()=>{Array.from(document.body.children).forEach(a=>{a.hasAttribute("data-previous-aria-hidden")?(a.setAttribute("aria-hidden",a.getAttribute("data-previous-aria-hidden")||""),a.removeAttribute("data-previous-aria-hidden")):a.removeAttribute("aria-hidden")})},Fm=typeof window<"u"&&!!window.GestureEvent,J1=Fm&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,q1=()=>{if(Fm&&!va(document.body,Y.iosfix)){const n=document.body.scrollTop;document.body.style.top=`${n*-1}px`,_e(document.body,Y.iosfix),G1()}},G1=()=>{const n=Ot();if(!n)return;let a;n.ontouchstart=o=>{a=F1(o)},n.ontouchmove=o=>{a&&(o.preventDefault(),o.stopPropagation())}},F1=n=>{const a=n.target,o=Ot(),l=Mm();return!o||!l||V1(n)||Y1(n)?!1:a===o||!$f(o)&&a instanceof HTMLElement&&!qO(a,l)&&a.tagName!=="INPUT"&&a.tagName!=="TEXTAREA"&&!($f(l)&&l.contains(a))},V1=n=>!!(n.touches&&n.touches.length&&n.touches[0].touchType==="stylus"),Y1=n=>n.touches&&n.touches.length>1,X1=()=>{if(va(document.body,Y.iosfix)){const n=parseInt(document.body.style.top,10);jn(document.body,Y.iosfix),document.body.style.top="",document.body.scrollTop=n*-1}},Z1=()=>{const n=document.createElement("div");n.className=Y["scrollbar-measure"],document.body.appendChild(n);const a=n.getBoundingClientRect().width-n.clientWidth;return document.body.removeChild(n),a};let Lo=null;const K1=n=>{Lo===null&&(document.body.scrollHeight>window.innerHeight||n==="scroll")&&(Lo=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Lo+Z1()}px`)},Q1=()=>{Lo!==null&&(document.body.style.paddingRight=`${Lo}px`,Lo=null)};function a0(n,a,o,l){Uc()?Kb(n,l):(LO(o).then(()=>Kb(n,l)),e0(he)),Fm?(a.setAttribute("style","display:none !important"),a.removeAttribute("class"),a.innerHTML=""):a.remove(),Pm()&&(Q1(),X1(),n0()),W1()}function W1(){jn([document.documentElement,document.body],[Y.shown,Y["height-auto"],Y["no-backdrop"],Y["toast-shown"]])}function tr(n){n=tk(n);const a=Io.swalPromiseResolve.get(this),o=ek(this);this.isAwaitingPromise?n.isDismissed||(Ai(this),a(n)):o&&a(n)}const ek=n=>{const a=ze();if(!a)return!1;const o=$e.innerParams.get(n);if(!o||va(a,o.hideClass.popup))return!1;jn(a,o.showClass.popup),_e(a,o.hideClass.popup);const l=Ot();return jn(l,o.showClass.backdrop),_e(l,o.hideClass.backdrop),nk(n,a,o),!0};function r0(n){const a=Io.swalPromiseReject.get(this);Ai(this),a&&a(n)}const Ai=n=>{n.isAwaitingPromise&&(delete n.isAwaitingPromise,$e.innerParams.get(n)||n._destroy())},tk=n=>typeof n>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},n),nk=(n,a,o)=>{var l;const c=Ot(),d=qw(a);typeof o.willClose=="function"&&o.willClose(a),(l=he.eventEmitter)===null||l===void 0||l.emit("willClose",a),d&&c?ak(n,a,c,!!o.returnFocus,o.didClose):c&&a0(n,c,!!o.returnFocus,o.didClose)},ak=(n,a,o,l,c)=>{he.swalCloseEventFinishedCallback=a0.bind(null,n,o,l,c);const d=function(p){if(p.target===a){var g;(g=he.swalCloseEventFinishedCallback)===null||g===void 0||g.call(he),delete he.swalCloseEventFinishedCallback,a.removeEventListener("animationend",d),a.removeEventListener("transitionend",d)}};a.addEventListener("animationend",d),a.addEventListener("transitionend",d)},Kb=(n,a)=>{setTimeout(()=>{var o;typeof a=="function"&&a.bind(n.params)(),(o=he.eventEmitter)===null||o===void 0||o.emit("didClose"),n._destroy&&n._destroy()})},Po=n=>{let a=ze();if(a||new vc,a=ze(),!a)return;const o=es();Uc()?St(Qo()):rk(a,n),ft(o),a.setAttribute("data-loading","true"),a.setAttribute("aria-busy","true"),a.focus()},rk=(n,a)=>{const o=Ei(),l=es();!o||!l||(!a&&Ut(Fn())&&(a=Fn()),ft(o),a&&(St(a),l.setAttribute("data-button-to-replace",a.className),o.insertBefore(l,a)),_e([n,o],Y.loading))},ok=(n,a)=>{a.input==="select"||a.input==="radio"?uk(n,a):["text","email","number","tel","textarea"].some(o=>o===a.input)&&(_m(a.inputValue)||zm(a.inputValue))&&(Po(Fn()),dk(n,a))},sk=(n,a)=>{const o=n.getInput();if(!o)return null;switch(a.input){case"checkbox":return ik(o);case"radio":return lk(o);case"file":return ck(o);default:return a.inputAutoTrim?o.value.trim():o.value}},ik=n=>n.checked?1:0,lk=n=>n.checked?n.value:null,ck=n=>n.files&&n.files.length?n.getAttribute("multiple")!==null?n.files:n.files[0]:null,uk=(n,a)=>{const o=ze();if(!o)return;const l=c=>{a.input==="select"?fk(o,Jf(c),a):a.input==="radio"&&mk(o,Jf(c),a)};_m(a.inputOptions)||zm(a.inputOptions)?(Po(Fn()),Si(a.inputOptions).then(c=>{n.hideLoading(),l(c)})):typeof a.inputOptions=="object"?l(a.inputOptions):Mr(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof a.inputOptions}`)},dk=(n,a)=>{const o=n.getInput();o&&(St(o),Si(a.inputValue).then(l=>{o.value=a.input==="number"?`${parseFloat(l)||0}`:`${l}`,ft(o),o.focus(),n.hideLoading()}).catch(l=>{Mr(`Error in inputValue promise: ${l}`),o.value="",ft(o),o.focus(),n.hideLoading()}))};function fk(n,a,o){const l=er(n,Y.select);if(!l)return;const c=(d,p,g)=>{const h=document.createElement("option");h.value=g,tn(h,p),h.selected=o0(g,o.inputValue),d.appendChild(h)};a.forEach(d=>{const p=d[0],g=d[1];if(Array.isArray(g)){const h=document.createElement("optgroup");h.label=p,h.disabled=!1,l.appendChild(h),g.forEach(v=>c(h,v[1],v[0]))}else c(l,g,p)}),l.focus()}function mk(n,a,o){const l=er(n,Y.radio);if(!l)return;a.forEach(d=>{const p=d[0],g=d[1],h=document.createElement("input"),v=document.createElement("label");h.type="radio",h.name=Y.radio,h.value=p,o0(p,o.inputValue)&&(h.checked=!0);const y=document.createElement("span");tn(y,g),y.className=Y.label,v.appendChild(h),v.appendChild(y),l.appendChild(v)});const c=l.querySelectorAll("input");c.length&&c[0].focus()}const Jf=n=>(n instanceof Map?Array.from(n):Object.entries(n)).map(([o,l])=>[o,typeof l=="object"?Jf(l):l]),o0=(n,a)=>!!a&&a!=null&&a.toString()===n.toString(),pk=n=>{const a=$e.innerParams.get(n);n.disableButtons(),a.input?s0(n,"confirm"):Ym(n,!0)},hk=n=>{const a=$e.innerParams.get(n);n.disableButtons(),a.returnInputValueOnDeny?s0(n,"deny"):Vm(n,!1)},gk=(n,a)=>{n.disableButtons(),a(ts.cancel)},s0=(n,a)=>{const o=$e.innerParams.get(n);if(!o.input){Mr(`The "input" parameter is needed to be set when using returnInputValueOn${Lm(a)}`);return}const l=n.getInput(),c=sk(n,o);o.inputValidator?vk(n,c,a):l&&!l.checkValidity()?(n.enableButtons(),n.showValidationMessage(o.validationMessage||l.validationMessage)):a==="deny"?Vm(n,c):Ym(n,c)},vk=(n,a,o)=>{const l=$e.innerParams.get(n);n.disableInput(),Promise.resolve().then(()=>Si(l.inputValidator(a,l.validationMessage))).then(d=>{n.enableButtons(),n.enableInput(),d?n.showValidationMessage(d):o==="deny"?Vm(n,a):Ym(n,a)})},Vm=(n,a)=>{const o=$e.innerParams.get(n);o.showLoaderOnDeny&&Po(Br()),o.preDeny?(n.isAwaitingPromise=!0,Promise.resolve().then(()=>Si(o.preDeny(a,o.validationMessage))).then(c=>{c===!1?(n.hideLoading(),Ai(n)):n.close({isDenied:!0,value:typeof c>"u"?a:c})}).catch(c=>i0(n,c))):n.close({isDenied:!0,value:a})},Qb=(n,a)=>{n.close({isConfirmed:!0,value:a})},i0=(n,a)=>{n.rejectPromise(a)},Ym=(n,a)=>{const o=$e.innerParams.get(n);o.showLoaderOnConfirm&&Po(),o.preConfirm?(n.resetValidationMessage(),n.isAwaitingPromise=!0,Promise.resolve().then(()=>Si(o.preConfirm(a,o.validationMessage))).then(c=>{Ut(Mc())||c===!1?(n.hideLoading(),Ai(n)):Qb(n,typeof c>"u"?a:c)}).catch(c=>i0(n,c))):Qb(n,a)};function pc(){const n=$e.innerParams.get(this);if(!n)return;const a=$e.domCache.get(this);St(a.loader),Uc()?n.icon&&ft(Qo()):bk(a),jn([a.popup,a.actions],Y.loading),a.popup.removeAttribute("aria-busy"),a.popup.removeAttribute("data-loading"),this.enableButtons()}const bk=n=>{const a=n.loader.getAttribute("data-button-to-replace"),o=a?n.popup.getElementsByClassName(a):[];o.length?ft(o[0],"inline-block"):JO()&&St(n.actions)};function l0(){const n=$e.innerParams.get(this),a=$e.domCache.get(this);return a?Ic(a.popup,n.input):null}function c0(n,a,o){const l=$e.domCache.get(n);a.forEach(c=>{l[c].disabled=o})}function u0(n,a){const o=ze();!o||!n||(n.type==="radio"?o.querySelectorAll(`[name="${Y.radio}"]`).forEach(c=>{c.disabled=a}):n.disabled=a)}function d0(){c0(this,["confirmButton","denyButton","cancelButton"],!1);const n=$e.focusedElement.get(this);n instanceof HTMLElement&&document.activeElement===document.body&&n.focus(),$e.focusedElement.delete(this)}function f0(){$e.focusedElement.set(this,document.activeElement),c0(this,["confirmButton","denyButton","cancelButton"],!0)}function m0(){u0(this.getInput(),!1)}function p0(){u0(this.getInput(),!0)}function h0(n){const a=$e.domCache.get(this),o=$e.innerParams.get(this);tn(a.validationMessage,n),a.validationMessage.className=Y["validation-message"],o.customClass&&o.customClass.validationMessage&&_e(a.validationMessage,o.customClass.validationMessage),ft(a.validationMessage);const l=this.getInput();l&&(l.setAttribute("aria-invalid","true"),l.setAttribute("aria-describedby",Y["validation-message"]),Hw(l),_e(l,Y.inputerror))}function g0(){const n=$e.domCache.get(this);n.validationMessage&&St(n.validationMessage);const a=this.getInput();a&&(a.removeAttribute("aria-invalid"),a.removeAttribute("aria-describedby"),jn(a,Y.inputerror))}const nr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},yk=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],xk={allowEnterKey:void 0},wk=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],v0=n=>Object.prototype.hasOwnProperty.call(nr,n),b0=n=>yk.indexOf(n)!==-1,y0=n=>xk[n],Sk=n=>{v0(n)||At(`Unknown parameter "${n}"`)},jk=n=>{wk.includes(n)&&At(`The parameter "${n}" is incompatible with toasts`)},Ek=n=>{const a=y0(n);a&&Uw(n,a)},x0=n=>{n.backdrop===!1&&n.allowOutsideClick&&At('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),n.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(n.theme)&&At(`Invalid theme "${n.theme}"`);for(const a in n)Sk(a),n.toast&&jk(a),Ek(a)};function w0(n){const a=Ot(),o=ze(),l=$e.innerParams.get(this);if(!o||va(o,l.hideClass.popup)){At("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const c=Nk(n),d=Object.assign({},l,c);x0(d),a&&(a.dataset.swal2Theme=d.theme),Qw(this,d),$e.innerParams.set(this,d),Object.defineProperties(this,{params:{value:Object.assign({},this.params,n),writable:!1,enumerable:!0}})}const Nk=n=>{const a={};return Object.keys(n).forEach(o=>{if(b0(o)){const l=n;a[o]=l[o]}else At(`Invalid parameter to update: ${o}`)}),a};function S0(){var n;const a=$e.domCache.get(this),o=$e.innerParams.get(this);if(!o){j0(this);return}a.popup&&he.swalCloseEventFinishedCallback&&(he.swalCloseEventFinishedCallback(),delete he.swalCloseEventFinishedCallback),typeof o.didDestroy=="function"&&o.didDestroy(),(n=he.eventEmitter)===null||n===void 0||n.emit("didDestroy"),Ck(this)}const Ck=n=>{j0(n),delete n.params,delete he.keydownHandler,delete he.keydownTarget,delete he.currentInstance},j0=n=>{n.isAwaitingPromise?(wf($e,n),n.isAwaitingPromise=!0):(wf(Io,n),wf($e,n),delete n.isAwaitingPromise,delete n.disableButtons,delete n.enableButtons,delete n.getInput,delete n.disableInput,delete n.enableInput,delete n.hideLoading,delete n.disableLoading,delete n.showValidationMessage,delete n.resetValidationMessage,delete n.close,delete n.closePopup,delete n.closeModal,delete n.closeToast,delete n.rejectPromise,delete n.update,delete n._destroy)},wf=(n,a)=>{for(const o in n)n[o].delete(a)};var Ak=Object.freeze({__proto__:null,_destroy:S0,close:tr,closeModal:tr,closePopup:tr,closeToast:tr,disableButtons:f0,disableInput:p0,disableLoading:pc,enableButtons:d0,enableInput:m0,getInput:l0,handleAwaitingPromise:Ai,hideLoading:pc,rejectPromise:r0,resetValidationMessage:g0,showValidationMessage:h0,update:w0});const Ok=(n,a,o)=>{n.toast?kk(n,a,o):(Rk(a),Dk(a),Lk(n,a,o))},kk=(n,a,o)=>{a.popup.onclick=()=>{n&&(Tk(n)||n.timer||n.input)||o(ts.close)}},Tk=n=>!!(n.showConfirmButton||n.showDenyButton||n.showCancelButton||n.showCloseButton);let hc=!1;const Rk=n=>{n.popup.onmousedown=()=>{n.container.onmouseup=function(a){n.container.onmouseup=()=>{},a.target===n.container&&(hc=!0)}}},Dk=n=>{n.container.onmousedown=a=>{a.target===n.container&&a.preventDefault(),n.popup.onmouseup=function(o){n.popup.onmouseup=()=>{},(o.target===n.popup||o.target instanceof HTMLElement&&n.popup.contains(o.target))&&(hc=!0)}}},Lk=(n,a,o)=>{a.container.onclick=l=>{if(hc){hc=!1;return}l.target===a.container&&zc(n.allowOutsideClick)&&o(ts.backdrop)}},_k=n=>typeof n=="object"&&n!==null&&"jquery"in n,Wb=n=>n instanceof Element||_k(n),zk=n=>{const a={};return typeof n[0]=="object"&&!Wb(n[0])?Object.assign(a,n[0]):["title","html","icon"].forEach((o,l)=>{const c=n[l];typeof c=="string"||Wb(c)?a[o]=c:c!==void 0&&Mr(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof c}`)}),a};function Mk(...n){return new this(...n)}function Bk(n){class a extends this{_main(l,c){return super._main(l,Object.assign({},n,c))}}return a}const Uk=()=>he.timeout&&he.timeout.getTimerLeft(),E0=()=>{if(he.timeout)return GO(),he.timeout.stop()},N0=()=>{if(he.timeout){const n=he.timeout.start();return Hm(n),n}},Ik=()=>{const n=he.timeout;return n&&(n.running?E0():N0())},Pk=n=>{if(he.timeout){const a=he.timeout.increase(n);return Hm(a,!0),a}},$k=()=>!!(he.timeout&&he.timeout.isRunning());let ey=!1;const qf={};function Hk(n="data-swal-template"){qf[n]=this,ey||(document.body.addEventListener("click",Jk),ey=!0)}const Jk=n=>{for(let a=n.target;a&&a!==document;a=a.parentNode)for(const o in qf){const l=a.getAttribute&&a.getAttribute(o);if(l){qf[o].fire({template:l});return}}};class qk{constructor(){this.events={}}_getHandlersByEventName(a){return typeof this.events[a]>"u"&&(this.events[a]=[]),this.events[a]}on(a,o){const l=this._getHandlersByEventName(a);l.includes(o)||l.push(o)}once(a,o){const l=(...c)=>{this.removeListener(a,l),o.apply(this,c)};this.on(a,l)}emit(a,...o){this._getHandlersByEventName(a).forEach(l=>{try{l.apply(this,o)}catch(c){console.error(c)}})}removeListener(a,o){const l=this._getHandlersByEventName(a),c=l.indexOf(o);c>-1&&l.splice(c,1)}removeAllListeners(a){this.events[a]!==void 0&&(this.events[a].length=0)}reset(){this.events={}}}he.eventEmitter=new qk;const Gk=(n,a)=>{he.eventEmitter&&he.eventEmitter.on(n,a)},Fk=(n,a)=>{he.eventEmitter&&he.eventEmitter.once(n,a)},Vk=(n,a)=>{if(he.eventEmitter){if(!n){he.eventEmitter.reset();return}a?he.eventEmitter.removeListener(n,a):he.eventEmitter.removeAllListeners(n)}};var Yk=Object.freeze({__proto__:null,argsToParams:zk,bindClickHandler:Hk,clickCancel:_1,clickConfirm:Ww,clickDeny:L1,enableLoading:Po,fire:Mk,getActions:Ei,getCancelButton:Wo,getCloseButton:Um,getConfirmButton:Fn,getContainer:Ot,getDenyButton:Br,getFocusableElements:Im,getFooter:$w,getHtmlContainer:Mm,getIcon:Qo,getIconContent:UO,getImage:Pw,getInputLabel:IO,getLoader:es,getPopup:ze,getProgressSteps:Bm,getTimerLeft:Uk,getTimerProgressBar:Bc,getTitle:Iw,getValidationMessage:Mc,increaseTimer:Pk,isDeprecatedParameter:y0,isLoading:$O,isTimerRunning:$k,isUpdatableParameter:b0,isValidParameter:v0,isVisible:D1,mixin:Bk,off:Vk,on:Gk,once:Fk,resumeTimer:N0,showLoading:Po,stopTimer:E0,toggleTimer:Ik});class Xk{constructor(a,o){this.callback=a,this.remaining=o,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(a){const o=this.running;return o&&this.stop(),this.remaining+=a,o&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const C0=["swal-title","swal-html","swal-footer"],Zk=n=>{const a=typeof n.template=="string"?document.querySelector(n.template):n.template;if(!a)return{};const o=a.content;return rT(o),Object.assign(Kk(o),Qk(o),Wk(o),eT(o),tT(o),nT(o),aT(o,C0))},Kk=n=>{const a={};return Array.from(n.querySelectorAll("swal-param")).forEach(l=>{Dr(l,["name","value"]);const c=l.getAttribute("name"),d=l.getAttribute("value");!c||!d||(c in nr&&typeof nr[c]=="boolean"?a[c]=d!=="false":c in nr&&typeof nr[c]=="object"?a[c]=JSON.parse(d):a[c]=d)}),a},Qk=n=>{const a={};return Array.from(n.querySelectorAll("swal-function-param")).forEach(l=>{const c=l.getAttribute("name"),d=l.getAttribute("value");!c||!d||(a[c]=new Function(`return ${d}`)())}),a},Wk=n=>{const a={};return Array.from(n.querySelectorAll("swal-button")).forEach(l=>{Dr(l,["type","color","aria-label"]);const c=l.getAttribute("type");if(!c||!["confirm","cancel","deny"].includes(c))return;a[`${c}ButtonText`]=l.innerHTML,a[`show${Lm(c)}Button`]=!0;const d=l.getAttribute("color");d!==null&&(a[`${c}ButtonColor`]=d);const p=l.getAttribute("aria-label");p!==null&&(a[`${c}ButtonAriaLabel`]=p)}),a},eT=n=>{const a={},o=n.querySelector("swal-image");if(o){Dr(o,["src","width","height","alt"]);const l=o.getAttribute("src");l!==null&&(a.imageUrl=l||void 0);const c=o.getAttribute("width");c!==null&&(a.imageWidth=c||void 0);const d=o.getAttribute("height");d!==null&&(a.imageHeight=d||void 0);const p=o.getAttribute("alt");p!==null&&(a.imageAlt=p||void 0)}return a},tT=n=>{const a={},o=n.querySelector("swal-icon");return o&&(Dr(o,["type","color"]),o.hasAttribute("type")&&(a.icon=o.getAttribute("type")),o.hasAttribute("color")&&(a.iconColor=o.getAttribute("color")),a.iconHtml=o.innerHTML),a},nT=n=>{const a={},o=n.querySelector("swal-input");o&&(Dr(o,["type","label","placeholder","value"]),a.input=o.getAttribute("type")||"text",o.hasAttribute("label")&&(a.inputLabel=o.getAttribute("label")),o.hasAttribute("placeholder")&&(a.inputPlaceholder=o.getAttribute("placeholder")),o.hasAttribute("value")&&(a.inputValue=o.getAttribute("value")));const l=Array.from(n.querySelectorAll("swal-input-option"));return l.length&&(a.inputOptions={},l.forEach(c=>{Dr(c,["value"]);const d=c.getAttribute("value");if(!d)return;const p=c.innerHTML;a.inputOptions[d]=p})),a},aT=(n,a)=>{const o={};for(const l in a){const c=a[l],d=n.querySelector(c);d&&(Dr(d,[]),o[c.replace(/^swal-/,"")]=d.innerHTML.trim())}return o},rT=n=>{const a=C0.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(n.children).forEach(o=>{const l=o.tagName.toLowerCase();a.includes(l)||At(`Unrecognized element <${l}>`)})},Dr=(n,a)=>{Array.from(n.attributes).forEach(o=>{a.indexOf(o.name)===-1&&At([`Unrecognized attribute "${o.name}" on <${n.tagName.toLowerCase()}>.`,`${a.length?`Allowed attributes are: ${a.join(", ")}`:"To set the value, use HTML within the element."}`])})},A0=10,oT=n=>{var a,o;const l=Ot(),c=ze();if(!l||!c)return;typeof n.willOpen=="function"&&n.willOpen(c),(a=he.eventEmitter)===null||a===void 0||a.emit("willOpen",c);const p=window.getComputedStyle(document.body).overflowY;if(lT(l,c,n),setTimeout(()=>{sT(l,c)},A0),Pm()&&(iT(l,n.scrollbarPadding!==void 0?n.scrollbarPadding:!1,p),H1()),J1&&n.backdrop===!1&&c.scrollHeight>l.clientHeight&&(l.style.pointerEvents="auto"),!Uc()&&!he.previousActiveElement&&(he.previousActiveElement=document.activeElement),typeof n.didOpen=="function"){const g=n.didOpen;setTimeout(()=>g(c))}(o=he.eventEmitter)===null||o===void 0||o.emit("didOpen",c)},gc=n=>{const a=ze();if(!a||n.target!==a)return;const o=Ot();o&&(a.removeEventListener("animationend",gc),a.removeEventListener("transitionend",gc),o.style.overflowY="auto",jn(o,Y["no-transition"]))},sT=(n,a)=>{qw(a)?(n.style.overflowY="hidden",a.addEventListener("animationend",gc),a.addEventListener("transitionend",gc)):n.style.overflowY="auto"},iT=(n,a,o)=>{q1(),a&&o!=="hidden"&&K1(o),setTimeout(()=>{n.scrollTop=0})},lT=(n,a,o)=>{var l;(l=o.showClass)!==null&&l!==void 0&&l.backdrop&&_e(n,o.showClass.backdrop),o.animation?(a.style.setProperty("opacity","0","important"),ft(a,"grid"),setTimeout(()=>{var c;(c=o.showClass)!==null&&c!==void 0&&c.popup&&_e(a,o.showClass.popup),a.style.removeProperty("opacity")},A0)):ft(a,"grid"),_e([document.documentElement,document.body],Y.shown),o.heightAuto&&o.backdrop&&!o.toast&&_e([document.documentElement,document.body],Y["height-auto"])};var ty={email:(n,a)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(n)?Promise.resolve():Promise.resolve(a||"Invalid email address"),url:(n,a)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(n)?Promise.resolve():Promise.resolve(a||"Invalid URL")};function cT(n){n.inputValidator||(n.input==="email"&&(n.inputValidator=ty.email),n.input==="url"&&(n.inputValidator=ty.url))}function uT(n){(!n.target||typeof n.target=="string"&&!document.querySelector(n.target)||typeof n.target!="string"&&!n.target.appendChild)&&(At('Target parameter is not valid, defaulting to "body"'),n.target="body")}function dT(n){cT(n),n.showLoaderOnConfirm&&!n.preConfirm&&At(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),uT(n),typeof n.title=="string"&&(n.title=n.title.split(`
`).join("<br />")),WO(n)}let Hn;var Zl=new WeakMap;class at{constructor(...a){if(kO(this,Zl,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;Hn=this;const o=Object.freeze(this.constructor.argsToParams(a));this.params=o,this.isAwaitingPromise=!1,TO(Zl,this,this._main(Hn.params))}_main(a,o={}){if(x0(Object.assign({},o,a)),he.currentInstance){const d=Io.swalPromiseResolve.get(he.currentInstance),{isAwaitingPromise:p}=he.currentInstance;he.currentInstance._destroy(),p||d({isDismissed:!0}),Pm()&&n0()}he.currentInstance=Hn;const l=mT(a,o);dT(l),Object.freeze(l),he.timeout&&(he.timeout.stop(),delete he.timeout),clearTimeout(he.restoreFocusTimeout);const c=pT(Hn);return Qw(Hn,l),$e.innerParams.set(Hn,l),fT(Hn,c,l)}then(a){return Gb(Zl,this).then(a)}finally(a){return Gb(Zl,this).finally(a)}}const fT=(n,a,o)=>new Promise((l,c)=>{const d=p=>{n.close({isDismissed:!0,dismiss:p,isConfirmed:!1,isDenied:!1})};Io.swalPromiseResolve.set(n,l),Io.swalPromiseReject.set(n,c),a.confirmButton.onclick=()=>{pk(n)},a.denyButton.onclick=()=>{hk(n)},a.cancelButton.onclick=()=>{gk(n,d)},a.closeButton.onclick=()=>{d(ts.close)},Ok(o,a,d),z1(he,o,d),ok(n,o),oT(o),hT(he,o,d),gT(a,o),setTimeout(()=>{a.container.scrollTop=0})}),mT=(n,a)=>{const o=Zk(n),l=Object.assign({},nr,a,o,n);return l.showClass=Object.assign({},nr.showClass,l.showClass),l.hideClass=Object.assign({},nr.hideClass,l.hideClass),l.animation===!1&&(l.showClass={backdrop:"swal2-noanimation"},l.hideClass={}),l},pT=n=>{const a={popup:ze(),container:Ot(),actions:Ei(),confirmButton:Fn(),denyButton:Br(),cancelButton:Wo(),loader:es(),closeButton:Um(),validationMessage:Mc(),progressSteps:Bm()};return $e.domCache.set(n,a),a},hT=(n,a,o)=>{const l=Bc();St(l),a.timer&&(n.timeout=new Xk(()=>{o("timer"),delete n.timeout},a.timer),a.timerProgressBar&&l&&(ft(l),Qt(l,a,"timerProgressBar"),setTimeout(()=>{n.timeout&&n.timeout.running&&Hm(a.timer)})))},gT=(n,a)=>{if(!a.toast){if(!zc(a.allowEnterKey)){Uw("allowEnterKey","preConfirm: () => false"),n.popup.focus();return}vT(n)||bT(n,a)||Hf(-1,1)}},vT=n=>{const a=Array.from(n.popup.querySelectorAll("[autofocus]"));for(const o of a)if(o instanceof HTMLElement&&Ut(o))return o.focus(),!0;return!1},bT=(n,a)=>a.focusDeny&&Ut(n.denyButton)?(n.denyButton.focus(),!0):a.focusCancel&&Ut(n.cancelButton)?(n.cancelButton.focus(),!0):a.focusConfirm&&Ut(n.confirmButton)?(n.confirmButton.focus(),!0):!1;at.prototype.disableButtons=f0;at.prototype.enableButtons=d0;at.prototype.getInput=l0;at.prototype.disableInput=p0;at.prototype.enableInput=m0;at.prototype.hideLoading=pc;at.prototype.disableLoading=pc;at.prototype.showValidationMessage=h0;at.prototype.resetValidationMessage=g0;at.prototype.close=tr;at.prototype.closePopup=tr;at.prototype.closeModal=tr;at.prototype.closeToast=tr;at.prototype.rejectPromise=r0;at.prototype.update=w0;at.prototype._destroy=S0;Object.assign(at,Yk);Object.keys(Ak).forEach(n=>{at[n]=function(...a){if(Hn&&Hn[n])return Hn[n](...a)}});at.DismissReason=ts;at.version="11.26.25";const vc=at;vc.default=vc;typeof document<"u"&&(function(n,a){var o=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(o),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=a);else try{o.innerHTML=a}catch{o.innerText=a}})(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:auto}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:auto}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');async function O0({titulo:n="¿Estás seguro?",mensaje:a="Confirma para continuar.",icono:o="warning",textoConfirmar:l="Sí, continuar",textoCancelar:c="Cancelar"}){return(await vc.fire({title:n,text:a,icon:o,showCancelButton:!0,confirmButtonText:l,cancelButtonText:c,reverseButtons:!0,confirmButtonColor:"#0d6efd",cancelButtonColor:"#6c757d",returnFocus:!1,heightAuto:!1,backdrop:!0,didOpen:()=>{const p=document.querySelector('.modal.show[aria-hidden="true"]');p&&p.removeAttribute("aria-hidden")},willClose:()=>{document.querySelector(".modal.show")}})).isConfirmed}const ni="auth_session";function ny(n){for(n=n.replace(/-/g,"+").replace(/_/g,"/");n.length%4;)n+="=";return atob(n)}const k0=m.createContext(null);function yT({children:n}){const{activeBackend:a}=wc(),o=a?.url||null,l=_n(),{showToast:c}=Yn(),[d,p]=m.useState(!0),[g,h]=m.useState(null),[v,y]=m.useState(null),[x,w]=m.useState(!1),E=m.useRef(x),N=m.useRef(o);m.useEffect(()=>{N.current=o},[o]);const A=m.useCallback(T=>{Ke("logout",T||{mensaje:"El usuario cerró la sesión voluntariamente."}).catch(z=>console.error("Error silencioso en log de logout:",z.message)),localStorage.removeItem(ni),h(null),y(null),w(!1),window.google?.accounts?.id&&window.google.accounts.id.disableAutoSelect(),window.googleInitialized=!1,window.location.pathname!=="/"&&l("/",{replace:!0});const U=T?.mensaje?.toLowerCase().includes("expir")?"⚠️ Tu sesión ha expirado":"👋 Sesión cerrada correctamente";c(U,"info",3e3,"Autenticación")},[l,c]),S=m.useCallback(async()=>{const T=N.current;if(!g||!T)return!1;try{const U=await(await fetch(`${T}?accion=ping&token=${g}`)).json();return U&&(U.status==="ok"||U.autorizado)?(y(z=>({...z,correo:U.correo,nombre:U.nombre,picture:U.picture,rol:U.rol,permisos:U.permisos})),w(!0),!0):(x&&console.log(U.mensaje||"⚠️ Tu sesión ha expirado."),A({mensaje:"Sesión expirada detectada por verificación de Ping."}),!1)}catch(_){return console.log("auth_verify_err:",_.message),c("⚠️ Error de conexión. No se pudo verificar la sesión.","warning",4e3,"Autenticación"),A({mensaje:`Cierre forzado por error de red en verificación de Ping: ${_.message}`}),!1}},[g,A,c,x]),R=m.useCallback(async(T,_=()=>{})=>{const U=(L,B="danger")=>{c(L,B,1e4,"Autenticación"),A({mensaje:`Fallo en intento de login / Intercambio de tokens: ${L}`}),_()},z=N.current;if(!z){if(!await O0({titulo:"Backend no configurado",mensaje:"No hay un backend activo para realizar la autenticación. Dirígete a la opción «Más», en la parte superior derecha, o al menú hamburguesa y selecciona «Configurar Backend».",textoConfirmar:"✅ Abrir Administración de Backends",textoCancelar:"❌ Cancelar",icono:"info"})){c("❌ Operación cancelada por el usuario","warning",4e3,"Autenticación"),_();return}window.dispatchEvent(new CustomEvent("backend:open-config")),_();return}try{const B=await(await fetch(z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accion:"googleLogin",googleToken:T})})).json();if(!B||B.status!=="ok"||!B.token||!B.user){U(B.mensaje||"❌ Error de autenticación desde el backend");return}c(`👋 Bienvenido ${B.user.nombre}`,"success",3e3,"Autenticación"),h(B.token),y(B.user),w(!0),localStorage.setItem(ni,JSON.stringify({token:B.token,user:B.user,backendUrl:N.current,timestamp:Date.now()})),_()}catch(L){console.error("Error en login (intercambio de token):",L),U("❌ Error de conexión con el backend")}},[c,A]);m.useEffect(()=>{const T=localStorage.getItem(ni);if(T)try{const _=JSON.parse(T);if(_.token&&_.token.includes(".")){const U=_.token.split(".");if(U.length===3){const z=U[1],L=ny(z),B=JSON.parse(L);if(B&&B.exp&&B.exp*1e3<Date.now()){console.warn("🔒 Token expirado detectado en el arranque. Limpiando sesión silenciosamente."),localStorage.removeItem(ni),p(!1);return}}h(_.token),y(_.user||null),w(!0)}}catch(_){console.error("Error parseando sesión guardada o verificando expiración:",_),localStorage.removeItem(ni)}p(!1)},[]),m.useEffect(()=>{E.current=x},[x]),m.useEffect(()=>{if(!g||!o)return;E.current||S();const T=setInterval(S,300*1e3),_=setInterval(()=>{try{if(g&&g.includes(".")){const U=g.split(".");if(U.length===3){const z=U[1],L=ny(z),B=JSON.parse(L),X=Date.now(),se=(B.exp*1e3-X)/(1e3*60);if(se<=0){console.warn("⚠️ Token expirado localmente."),A({mensaje:"Sesión expirada automáticamente por tiempo límite del token (JWT)."});return}se>2&&se<=3&&(console.warn("📢 Aviso preventivo: El token expirará pronto."),c("⏳ Tu sesión está por terminar en 3 minutos. Guarda tus cambios.","comun",15e3,"Aviso de Seguridad"))}}}catch(U){console.error("Error verificando expiración local del token propio:",U),A({mensaje:"Sesión cerrada por error al parsear expiración del token."})}},60*1e3);return()=>{clearInterval(T),clearInterval(_)}},[g,o,S,A]),m.useEffect(()=>{function T(_){const U=_?.detail?.message||"⚠️ Tu sesión ha expirado. Inicia sesión nuevamente.";console.warn("🟡 Evento auth:required recibido:",U),x&&A({mensaje:`Sesión rechazada por el servidor (${U}).`})}return window.addEventListener("auth:required",T),()=>window.removeEventListener("auth:required",T)},[x,A]);const C={authToken:g,user:v,authenticated:x,loading:d,login:R,logout:A,verifyToken:S};return i.jsx(k0.Provider,{value:C,children:n})}function Oi(){return m.useContext(k0)}const T0=m.createContext(null),Sf=new Date().getFullYear()-1;function xT({children:n}){const{showToast:a}=Yn(),[o,l]=m.useState([]),[c,d]=m.useState(!1),p=m.useCallback(async R=>{try{const C=await yn("obtenerArchivosPorAnio",{anio:R});return C&&C.status==="ok"?C.archivos||[]:C.archivos||[]}catch(C){return console.error("❌ Error al obtener archivos por año:",C.message),[]}},[]),g=m.useCallback(async()=>{d(!0);try{const R=await yn("obtenerProductos");if(R&&R.status==="ok")return R.data||[]}catch(R){return console.error("❌ Error al obtener productos",R.message),[]}finally{d(!1)}},[]),h=m.useCallback(async()=>{try{d(!0);const[R,C]=await Promise.all([yn("obtenerProductos"),yn("obtenerArchivosPorAnio",{anio:String(Sf)})]),T=R?.data||[],_=C?.archivos||[],z=[...T.map(L=>{const B=_.find(X=>String(X.productoId)===String(L.id)&&String(X.anio)===String(Sf))||null;return{...L,tieneArchivo:!!B,archivoInfo:B}})].sort((L,B)=>!L.tieneArchivo&&B.tieneArchivo?-1:L.tieneArchivo&&!B.tieneArchivo?1:0);l(z)}catch(R){console.error("❌ Error refreshProductos:",R.message)}finally{d(!1)}},[]),v=m.useCallback(async R=>{d(!0);try{const C=await Ke("actualizarProducto",R),T=C.resultados[0];return T.status==="ok"?(await h(),{ok:!0,mensaje:C.mensaje||"Producto actualizado correctamente",datos:C.producto}):T.status==="warning"?{ok:!1,mensaje:T.mensaje||"⚠️ Ya existe este producto",data:C}:{ok:!1,mensaje:C?.mensaje||"No se pudo actualizar el producto"}}catch(C){return console.error("❌ actualizarProducto:",C.message),{ok:!1,mensaje:"Error al actualizar el producto"}}finally{d(!1)}},[h]),y=R=>new Promise((C,T)=>{const _=new FileReader;_.readAsDataURL(R),_.onload=()=>C(_.result.split(",")[1]),_.onerror=U=>T(U)}),x=m.useCallback(async({nombre:R,descripcion:C,entidad:T,tipo:_})=>{d(!0);try{const U=await Ke("agregarProducto",{nombre:R,descripcion:C,entidad:T,tipo:_}),z=U.resultados[0];return z.status==="ok"?(await h(),{ok:!0,mensaje:"✅ Producto agregado con éxito",data:U}):z.status==="warning"?{ok:!1,mensaje:z.mensaje||"⚠️ Ya existe este producto",data:U}:{ok:!1,mensaje:U.mensaje||"Error al agregar producto",data:U}}catch(U){return console.error("❌ agregarProducto:",U.message),{ok:!1,mensaje:"Error al agregar producto"}}finally{d(!1)}},[h]),w=m.useCallback(async R=>{d(!0);try{const C=await Ke("eliminarProducto",{id:R});return C.status==="ok"?(a("✅ Producto eliminado correctamente","success",3e3,"ProductosContext"),await h()):a(`❌ Error al eliminar: ${C.mensaje||"sin detalle"}`,"error",3e3,"ProductosContext"),{ok:!1,mensaje:C.mensaje||"❌ Error al eliminar producto",data:C}}catch(C){return a("❌ Error eliminando producto","error",3e3,"ProductosContext"),console.error("❌ eliminarProducto:",C.message),{ok:!1,mensaje:"❌ Error al eliminar producto"}}finally{d(!1)}},[h,a]),E=m.useCallback(async(R,C,T,_=!1,U="")=>{if(!T)return{ok:!1,mensaje:"Seleccione un archivo"};d(!0);try{const z=await y(T),L={anio:C,productosId:R,usarExistente:_,nombreProducto:U,archivo:{nombre:T.name,base64:z,tipo:T.type}},B=await Ke("subirArchivoProducto",L);return B.status==="error_validacion"&&(console.log("data",B),a(`${B.message}`,"info",15e3,"ProductosContext")),B.status==="ok"?(await h(),{ok:!0,mensaje:"Archivo subido correctamente",data:B}):B.status==="archivo_existente"?{ok:!1,mensaje:B.message||"⚠️ Ya existe un archivo para este producto"}:B.status==="exists"?{ok:!1,existe:!0,mensaje:B.message||"⚠️ Ya existe un archivo con este nombre. ¿Desea usar el existente?",data:B}:{ok:!1,mensaje:B.mensaje||"Error al subir archivo",data:B}}catch(z){const L=z.message.includes("500")?"Error 500: El archivo es demasiado pesado para el servidor de Google.":"Error al conectar con el servidor.";return a(`❌ ${L}`,"error",15e3,"ProductosContext"),{ok:!1,mensaje:L}}finally{d(!1)}},[h]),N=m.useCallback(async(R,C,T,_=!1,U="",z=!1,L=!1)=>{if(!T)return{ok:!1,mensaje:"Seleccione un archivo para reemplazar"};d(!0);try{const B=await y(T),X={productoId:R,anio:String(C),replaceOnlyThis:_,nombreProducto:U,usarExistente:z,forzarTodosLosAnios:L,archivo:{nombre:T.name,base64:B,tipo:T.type}},te=await Ke("remplazarArchivoProducto",X);return te.status==="archivo_usado_en_otros_anios"?{ok:!1,requiereConfirmacion:!0,anios:te.aniosDetectados||[],mensaje:te.message||"El archivo también está siendo usado en otros años.",data:te}:te.status==="ok"?(await h(),{ok:!0,mensaje:te.mensaje||"Archivo reemplazado correctamente",data:te}):te.status==="exists"?{ok:!1,existe:!0,mensaje:te.message||"⚠️ Ya existe un archivo con este nombre. ¿Desea usar el existente?",data:te}:{ok:!1,mensaje:te.message||"No se pudo reemplazar el archivo",data:te}}catch(B){const X=B.message?.includes("500")?"Error 500: El archivo es demasiado pesado para el servidor.":"Error al conectar con el servidor.";return a(`❌ ${X}`,"error",15e3,"ProductosContext"),{ok:!1,mensaje:X}}finally{d(!1)}},[h,a]),A=m.useCallback(async R=>{try{const C=await Ke("eliminarRegistroProducto",{id:R});if(C?.status==="ok"){const{eliminado:T}=C;return a(`✅ ${C.mensaje}`,"success",3e3,"ProductoContext"),{ok:!0,eliminado:T}}return a(`❌ ${C?.mensaje||"No se pudo eliminar el registro"}`,"error",3e3,"ProductoContext"),{ok:!1}}catch(C){return console.error(C),a("❌ Error eliminando registro","error",3e3,"ProductoContext"),{ok:!1}}},[a]),S=m.useCallback(async R=>{try{const C=await Ke("editarRegistroProducto",R);return C?.status==="ok"?(a(`✅ ${C.mensaje}`,"success",3e3,"ProductosContext"),{ok:!0,registro:C.registro}):(a(`❌ ${C?.mensaje||"No se pudo editar el registro"}`,"error",3e3,"ProductosContext"),{ok:!1})}catch(C){return console.error(C),a("❌ Error editando el registro","error",3e3,"ProductosContext"),{ok:!1}}},[a]);return i.jsx(T0.Provider,{value:{registroProductos:o,getProductos:g,refreshProductos:h,anioAnterior:Sf,subirArchivo:E,remplaceArchivo:N,fetchArchivosPorAnio:p,addProducto:x,updateProducto:v,deleteProducto:w,deleteRegistroProducto:A,editRegistroProducto:S,loading:c},children:n})}function ns(){const n=m.useContext(T0);if(!n)throw new Error("useProductos debe usarse dentro de <ProductosProvider>");return n}const R0=m.createContext();function wT({children:n}){const{showToast:a}=Yn(),[o,l]=m.useState(!1),c=m.useCallback(async v=>{l(!0);try{const y=await yn("obtenerFacturasPorAnio",{anio:v});return y&&y.status==="ok"?y.data||[]:y.data||[]}catch(y){return console.error("❌ Error al obtener facturas por año:",y.message),[]}finally{l(!1)}},[]),d=v=>new Promise((y,x)=>{const w=new FileReader;w.readAsDataURL(v),w.onload=()=>y(w.result.split(",")[1]),w.onerror=E=>x(E)}),p=m.useCallback(async({anio:v,entidad:y,descripcion:x,valor:w,metodoPago:E,file:N})=>{if(!N)return{ok:!1,mensaje:"Debe seleccionar un archivo context linea 36"};l(!0);try{const A=await d(N),S={anio:v,entidad:y,descripcion:x,valor:w,metodoPago:E,archivo:{nombre:N.name,base64:A,tipo:N.type}},R=await Ke("subirArchivoFacturas",S);return R.status==="error_validacion"&&(console.log("data",R),a(`${R.message}`,"info",15e3,"FacturasContext")),R.status==="ok"?{ok:!0,mensaje:"✅ Factura subida correctamente",data:R}:{ok:!1,mensaje:R.message||"Error al subir la factura",data:R}}catch(A){const S=A.message.includes("500")?"Error 500: El archivo es demasiado pesado para el servidor de Google.":"Error al conectar con el servidor.";return a(`❌ ${S}`,"error",15e3,"FacturasContext"),{ok:!1,mensaje:S}}finally{l(!1)}},[a]),g=m.useCallback(async v=>{l(!0);try{const y=await Ke("actualizarFactura",v);return y.status==="ok"?{ok:!0,mensaje:"✅ Factura actualizada correctamente",data:y}:{ok:!1,mensaje:y.mensaje||"No se pudo actualizar la factura"}}catch(y){return console.error("❌ actualizarFactura:",y.message),{ok:!1,mensaje:"Error al actualizar la factura"}}finally{l(!1)}},[]),h=m.useCallback(async v=>{l(!0);try{const y=await Ke("eliminarFactura",{registroId:v});return y.status==="ok"?{ok:!0,mensaje:"✅ Factura eliminada correctamente",data:y}:{ok:!1,mensaje:y.mensaje||"Error al eliminar la factura"}}catch(y){return console.error("❌ eliminarFactura:",y.message),{ok:!1,mensaje:"Error al eliminar la factura"}}finally{l(!1)}},[]);return i.jsx(R0.Provider,{value:{loading:o,fetchFacturasPorAnio:c,subirFactura:p,updateFactura:g,deleteFactura:h},children:n})}function Xm(){return m.useContext(R0)}const D0=m.createContext(null);function ST({children:n}){const{showToast:a}=Yn(),[o,l]=m.useState([]),[c,d]=m.useState([]),[p,g]=m.useState(!1),h=m.useCallback(async()=>{g(!0);try{const N=await yn("obtenerDatosTributarios");if(N.status==="ok"){const A=(N.data||[]).sort((S,R)=>S.orden-R.orden);return l(A),d(JSON.parse(JSON.stringify(A))),{ok:!0}}return a(N.mensaje||"Error al obtener datos","error"),{ok:!1}}catch(N){return console.error("❌ obtenerDatosTributarios error:",N),a("Error de conexión al cargar datos","error"),{ok:!1}}finally{g(!1)}},[a]),v=m.useCallback(async()=>{g(!0);try{const N=await Ke("actualizarDatosTributarios",{data:o});return N.status==="ok"?(d(JSON.parse(JSON.stringify(o))),a("✅ Todos los cambios han sido guardados","success"),{ok:!0}):(a("❌ "+N.mensaje,"error"),{ok:!1})}catch{return a("❌ Error al sincronizar con el servidor","error"),{ok:!1}}finally{g(!1)}},[o,a]),y=m.useCallback(()=>{l(JSON.parse(JSON.stringify(c))),a("Cambios descartados","info")},[c,a]),x=m.useMemo(()=>JSON.stringify(o)!==JSON.stringify(c),[o,c]),w=m.useMemo(()=>o.filter(N=>N.importante===!0||N.importante===1).length,[o]),E=m.useCallback(()=>{l([]),d([])},[]);return i.jsx(D0.Provider,{value:{datos:o,setDatos:l,loading:p,getDatos:h,saveChanges:v,discardChanges:y,isDirty:x,conteoImportantes:w,clearDatos:E},children:n})}const L0=()=>{const n=m.useContext(D0);if(!n)throw new Error("useDatosTributarios debe usarse dentro de DatosTributariosProvider");return n},_0=m.createContext(null);function jT({children:n}){const{showToast:a}=Yn(),[o,l]=m.useState([]),[c,d]=m.useState(!1),p=m.useCallback(async()=>{d(!0);try{const h=await yn("obtenerLogs");h.status==="ok"?l(h.logs||[]):a(h.mensaje||"⚠️ No se pudieron cargar los logs.","warning",4e3,"LogsAdmin")}catch(h){console.error("❌ obtenerLogs error:",h),a("❌ Error de conexión al cargar logs.","danger",4e3,"LogsAdmin")}finally{d(!1)}},[a]),g=m.useCallback(async()=>{d(!0);try{const h=await Ke("limpiarLogsAntiguos");h.status==="ok"?(a(h.mensaje||"🧹 Logs limpiados correctamente","success",3e3,"LogsAdmin"),await p()):a(h.mensaje||"⚠️ No se pudo limpiar logs","warning",4e3,"LogsAdmin")}catch(h){console.error("❌ clearLogs error:",h),a("❌ Error al limpiar logs","danger",4e3,"LogsAdmin")}finally{d(!1)}},[a,p]);return i.jsx(_0.Provider,{value:{logs:o,loading:c,getDatos:p,clearDatos:g},children:n})}function ET(){const n=m.useContext(_0);if(!n)throw new Error("useLogsAdmin debe usarse dentro de <LogsAdminProvider>");return n}const z0=m.createContext(),NT=({children:n})=>{const{showToast:a}=Yn(),[o,l]=m.useState([]),[c,d]=m.useState(!1),[p,g]=m.useState([]),[h,v]=m.useState(!1),y=m.useCallback(async()=>{try{const S=await yn("obtenerRoles");S.status==="ok"?(g(S.data||[]),v(!1)):(g([]),v(!0),console.warn(S.mensaje,"UsuariosAdmin"))}catch(S){console.error("❌ Error al cargar roles:",S),g([]),v(!0),a("❌ Error de conexión al obtener roles.","danger",4e3,"UsuariosAdmin")}},[a]),x=m.useCallback(async()=>{d(!0);try{const S=await yn("obtenerUsuarios");S.status==="ok"?l(S.datos||[]):console.warn(S.mensaje,"UsuariosAdmin")}catch(S){console.error("❌ obtenerUsuarios error:",S)}finally{d(!1)}},[]),w=async S=>{if(!S?.correo||!S?.nombre||!S?.rol)return a("⚠️ Todos los campos son obligatorios (correo, nombre, rol).","warning",4e3,"UsuariosAdmin");d(!0);try{const R={correo:S.correo,nombre:S.nombre,rol:S.rol},C=await Ke("agregarUsuario",R);C.status==="ok"?(l(C.datos||[]),a(C.mensaje||"✅ Usuario creado correctamente.","success",2e3,"UsuariosAdmin")):a(C.mensaje||"⚠️ No se pudo crear el usuario.","warning",4e3,"UsuariosAdmin")}catch(R){console.error("❌ agregarUsuario error:",R);const C=R.mensaje||R.message||"Error inesperado al procesar la solicitud";a(C,"danger",5e3,"UsuariosAdmin")}finally{d(!1)}},E=async(S,R)=>{d(!0);try{const C={correo:S,...R},T=await Ke("actualizarUsuario",C);T.status==="ok"?(l(T.datos||[]),a(T.mensaje||`✅ Usuario "${S}" actualizado correctamente.`,"success",2e3,"UsuariosAdmin")):a(T.mensaje||`⚠️ No se pudo actualizar el usuario "${S}".`,"warning",4e3,"UsuariosAdmin")}catch(C){console.error("❌ actualizarUsuario error:",C),a(`❌ Error de conexión al actualizar usuario "${S}".`,"danger",4e3,"UsuariosAdmin")}finally{d(!1)}},N=async(S,R,C)=>{d(!0);try{const _=await Ke("toggleUsuarioActivo",{correo:S,activo:R,nombre:C});_.status==="ok"?(l(_.datos||[]),a(_.mensaje||`🔁 Estado de "${S}" actualizado.`,"success",2e3,"UsuariosAdmin")):a(_.mensaje||`⚠️ No se pudo cambiar el estado de "${S}".`,"warning",4e3,"UsuariosAdmin")}catch(T){console.error("❌ toggleUsuarioActivo error:",T),a(`❌ Error al cambiar el estado de "${S}".`,"danger",4e3,"UsuariosAdmin")}finally{d(!1)}},A=async S=>{d(!0);try{const C=await Ke("eliminarUsuario",{correo:S});C.status==="ok"?(l(C.datos||[]),a(C.mensaje||`🗑️ Usuario "${S}" eliminado correctamente.`,"success",3e3,"UsuariosAdmin")):a(C.mensaje||`⚠️ No se pudo eliminar el usuario "${S}".`,"warning",4e3,"UsuariosAdmin")}catch(R){console.error("❌ eliminarUsuario error:",R),a(`❌ Error al eliminar el usuario "${S}" "${R}".`,"danger",1e4,"UsuariosAdmin")}finally{d(!1)}};return m.useEffect(()=>{qo()&&(y(),x())},[y,x]),i.jsx(z0.Provider,{value:{usuarios:o,rolesDisponibles:p,rolesErrorPermisos:h,loading:c,getDatos:x,addDato:w,updateDato:E,toggleActivo:N,deleteDato:A,getRoles:y},children:n})},CT=()=>m.useContext(z0),M0=m.createContext(),AT=({children:n})=>{const{showToast:a}=Yn(),[o,l]=m.useState(null),[c,d]=m.useState(null),[p,g]=m.useState(!1),h=_n(),v=m.useCallback(()=>{l(null)},[]),y=m.useCallback(async()=>{g(!0);try{const N=await yn("obtenerConfig");N.status==="ok"&&(l(N.datos||N.data||{}),d(N.version||{}))}catch(N){console.error("❌ obtenerConfig error:",N),a("❌ Error al obtener configuración del servidor","danger",4e3,"ConfigAdmin")}finally{g(!1)}},[a]),x=async N=>{g(!0);try{const A=await Ke("actualizarConfig",N);A.status==="ok"?(l(A.datos||N),a(A.mensaje||"✅ Configuración actualizada correctamente","success",2e3,"ConfigAdmin")):a(A.mensaje||"⚠️ No se pudo actualizar la configuración","warning",4e3,"ConfigAdmin")}catch(A){console.error("❌ actualizarConfig error:",A),a("❌ Error de conexión con el servidor al actualizar configuración","danger",4e3,"ConfigAdmin")}finally{g(!1)}},w=async(N,A=!1)=>{g(!0);try{const S=await Ke("inicializarSistemaForzado",{confirmar:N,borrarCarpetas:A});return S.status==="ok"?(a(S.mensaje||"✅ Sistema reinicializado correctamente","success",3e3,"ConfigAdmin"),h("/productos")):S.status==="sin_permiso"?a(S.mensaje||"⛔ No tiene permisos para reinicializar","warning",4e3,"ConfigAdmin"):a(S.mensaje||"⚠️ Error al reinicializar el sistema","warning",4e3,"ConfigAdmin"),S}catch(S){return console.error("❌ reinicializarSistemaForzado error:",S),a(`❌ Reinicializar Sistema ${S}`,"danger",2e4,"ConfigAdmin"),{status:"error",mensaje:S.message}}finally{g(!1)}},E=async()=>{g(!0);try{const N=await Ke("generarBackupZIP",{});if(N.status==="ok"&&N.blob){a("✅ Backup generado correctamente","success",3e3,"ConfigAdmin"),console.log(N.blob);const A=URL.createObjectURL(N.blob),S=document.createElement("a");S.href=A,S.download=N.nombreArchivo||"Backup_Declaracion.zip",document.body.appendChild(S),S.click(),document.body.removeChild(S),URL.revokeObjectURL(A)}else a(N.mensaje||"⚠️ No se pudo generar el backup","warning",4e3,"ConfigAdmin")}catch(N){console.error("❌ generarBackup error:",N),a("❌ Error al generar el backup","danger",4e3,"ConfigAdmin")}finally{g(!1)}};return m.useEffect(()=>{qo()&&y()},[y]),i.jsx(M0.Provider,{value:{config:o,clearConfig:v,loading:p,getConfig:y,versionBackend:c,updateConfig:x,reinicializarSistemaForzado:w,generarBackup:E},children:n})},OT=()=>m.useContext(M0),B0=m.createContext(),kT=({children:n})=>{const{showToast:a}=Yn(),[o,l]=m.useState([]),[c,d]=m.useState([]),[p,g]=m.useState(!1),h=m.useCallback(async()=>{try{const E=await yn("listarFuncionesLogicaNegocio");E.status==="ok"&&d(E.datos||[])}catch(E){console.error("❌ Error al Cargar Funciones",E),a("❌ Error al Cargar Funciones","danger",4e3,"RolesAdmin")}},[a]),v=m.useCallback(async()=>{g(!0);try{const E=await yn("obtenerRoles");E.status==="ok"?l(E.data||[]):a(E.mensaje||"⚠️ No se pudieron cargar los roles.","warning",4e3,"RolesAdmin")}catch(E){console.error("❌ obtenerRoles error:",E),a("❌ Error de conexión con el servidor al cargar roles.","danger",4e3,"RolesAdmin")}finally{g(!1)}},[a]),y=async(E,N)=>{if(!E)return a("⚠️ Debe ingresar un nombre para el rol","warning",4e3,"AdminRoles");g(!0);try{const S=await Ke("agregarRol",{rol:E,permisos:N||[]});S.status==="ok"?(a(S.mensaje||"✅ Rol creado correctamente.","success",2e3,"RolesAdmin"),l(S.datos||[])):a(S.mensaje||"⚠️ No se pudo crear el rol.","warning",4e3,"RolesAdmin")}catch(A){console.error("❌ agregarRol error:",A),a("❌ Error de conexión con el servidor al crear el rol.","danger",4e3,"RolesAdmin")}finally{g(!1)}},x=async(E,N)=>{g(!0);try{const S=await Ke("actualizarRol",{rol:E,permisos:N});S.status==="ok"?(a(S.mensaje||`✅ Rol "${E}" actualizado correctamente.`,"success",2e3,"RolesAdmin"),l(S.datos||[])):a(S.mensaje||`⚠️ No se pudo actualizar el rol "${E}".`,"warning",4e3,"RolesAdmin")}catch(A){console.error("❌ actualizarRol error:",A),a(`❌ Error de conexión con el servidor al actualizar el rol "${E}".`,"danger",4e3,"RolesAdmin")}finally{g(!1)}},w=async E=>{if(g(!0),E==="administrador")return a("⚠️ No se puede eliminar el rol administrador","warning",4e3,"RolesAdmin");try{const A=await Ke("eliminarRol",{rol:E});A.status==="ok"?(a(A.mensaje,"success",3e3,"RolesAdmin"),l(A.datos||[])):a(A.mensaje,"warning",4e3,"RolesAdmin")}catch(N){console.error("❌ eliminarRol error:",N),a(`❌ Error al eliminar el rol: ${N?.message||N.toString()}`,"danger",8e3,"RolesAdmin")}finally{g(!1)}};return m.useEffect(()=>{qo()&&h()},[h]),i.jsx(B0.Provider,{value:{roles:o,funcionesDisponibles:c,loading:p,getDatos:v,addDato:y,updateDato:x,deleteDato:w},children:n})},TT=()=>m.useContext(B0);function U0({children:n}){return i.jsx(jT,{children:i.jsx(NT,{children:i.jsx(AT,{children:i.jsx(kT,{children:n})})})})}const Ka="/appdeclaracion/assets/defaultAvatarImg-CF5KfDzf.png",Nn=({show:n})=>n?i.jsxs("div",{className:"loading-overlay",children:[i.jsx(Nt,{animation:"border",variant:"light"}),i.jsx("span",{className:"loading-text",children:"Procesando..."})]}):null;function RT({show:n,onHide:a,onConfirm:o,loading:l}){const[c,d]=m.useState(""),[p,g]=m.useState(!1),h=()=>{o(c,p),d(""),g(!1)};return i.jsxs(be,{show:n,onHide:a,centered:!0,children:[i.jsx(be.Header,{closeButton:!0,children:i.jsx(be.Title,{children:"⚠️ Reinicializar Proyecto"})}),i.jsxs(be.Body,{children:[i.jsxs("p",{children:["Esta acción ",i.jsx("strong",{children:"eliminará todos los datos"})," y reiniciará la aplicación."]}),i.jsxs("p",{children:["Para confirmar, escriba ",i.jsx("strong",{children:"INICIALIZAR"}),":"]}),i.jsxs(oe,{children:[i.jsx(oe.Group,{children:i.jsx(oe.Control,{type:"text",placeholder:"INICIALIZAR",value:c,onChange:v=>d(v.target.value)})}),i.jsx(oe.Check,{type:"checkbox",label:"Borrar también las carpetas de archivos",checked:p,onChange:v=>g(v.target.checked),className:"mt-2 modal-reinit-checkbox"})]}),i.jsx(Nn,{show:l})]}),i.jsxs(be.Footer,{children:[i.jsx(Te,{variant:"secondary",onClick:a,children:"Cancelar"}),i.jsx(Te,{variant:"danger",disabled:c.trim()!=="INICIALIZAR",onClick:h,children:l?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{as:"span",animation:"border",size:"sm"})," Inicializando..."]}):"Reinicializar"})]})]})}var DT=["color","size","title","className"];function Gf(){return Gf=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},Gf.apply(null,arguments)}function LT(n,a){if(n==null)return{};var o,l,c=_T(n,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(l=0;l<d.length;l++)o=d[l],a.indexOf(o)===-1&&{}.propertyIsEnumerable.call(n,o)&&(c[o]=n[o])}return c}function _T(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;o[l]=n[l]}return o}var I0=m.forwardRef(function(n,a){var o=n.color,l=o===void 0?"currentColor":o,c=n.size,d=c===void 0?"1em":c,p=n.title,g=p===void 0?null:p,h=n.className,v=h===void 0?"":h,y=LT(n,DT);return Xe.createElement("svg",Gf({ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:d,height:d,fill:l,className:["bi","bi-bell",v].filter(Boolean).join(" ")},y),g?Xe.createElement("title",null,g):null,Xe.createElement("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"}))});I0.propTypes={color:Pe.string,size:Pe.oneOfType([Pe.string,Pe.number]),title:Pe.string,className:Pe.string};var zT=["color","size","title","className"];function Ff(){return Ff=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},Ff.apply(null,arguments)}function MT(n,a){if(n==null)return{};var o,l,c=BT(n,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(l=0;l<d.length;l++)o=d[l],a.indexOf(o)===-1&&{}.propertyIsEnumerable.call(n,o)&&(c[o]=n[o])}return c}function BT(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;o[l]=n[l]}return o}var Vf=m.forwardRef(function(n,a){var o=n.color,l=o===void 0?"currentColor":o,c=n.size,d=c===void 0?"1em":c,p=n.title,g=p===void 0?null:p,h=n.className,v=h===void 0?"":h,y=MT(n,zT);return Xe.createElement("svg",Ff({ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:d,height:d,fill:l,className:["bi","bi-box-arrow-right",v].filter(Boolean).join(" ")},y),g?Xe.createElement("title",null,g):null,Xe.createElement("path",{fillRule:"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"}),Xe.createElement("path",{fillRule:"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"}))});Vf.propTypes={color:Pe.string,size:Pe.oneOfType([Pe.string,Pe.number]),title:Pe.string,className:Pe.string};function Ea(){const{user:n}=Oi();return{puede:o=>n?n.permisos==="*"||n.permisos?.includes("*")?!0:n.permisos?.includes(o):!1}}const P0=({isOpen:n,onClose:a})=>n?i.jsx("div",{className:"tutorial-modal-overlay",onClick:a,children:i.jsxs("div",{className:"tutorial-modal-content",onClick:o=>o.stopPropagation(),children:[i.jsx("button",{className:"close-x-btn",onClick:a,"aria-label":"Cerrar",children:"×"}),i.jsx("div",{className:"modal-body",children:i.jsx("div",{className:"video-aspect-ratio",children:i.jsx("iframe",{src:"https://player.vimeo.com/video/1198611604?h=ca227cd10d&badge=0&autopause=0&autoplay=1",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Video Tutorial AppDeclaración"})})})]})}):null;function UT({onOpenBackend:n}){const{puede:a}=Ea(),o=a("obtenerDatosTributarios"),{activeBackend:l}=wc(),{getDatos:c,clearDatos:d,conteoImportantes:p}=L0(),[g,h]=m.useState(!1),{user:v,authenticated:y,logout:x}=Oi(),[w,E]=m.useState(!1),[N,A]=m.useState(!1),[S,R]=m.useState(!1),C=_n(),T=En(),_=()=>A(!1);m.useEffect(()=>{o?c():d()},[o,c,d]);const U=()=>{T.pathname==="/datos-tributarios"?c():C("/datos-tributarios")};m.useEffect(()=>{const X=setTimeout(()=>{E(!0)},1e4);return()=>clearTimeout(X)},[]);const z=w&&v?.picture||Ka,L=!!v,B=!!(y&&v);return i.jsx(i.Fragment,{children:i.jsxs("div",{className:"navbar-return-container sticky-top",children:[i.jsx(Xl,{bg:"light",expand:"lg",className:"shadow-sm mb-3 sticky-top navbar-nav-principal",children:i.jsxs(Yo,{fluid:!0,children:[i.jsxs("div",{className:"backend-circle-Brand",children:[l&&i.jsx("div",{className:"backend-circle ms-2",title:`Backend: ${l.alias}`,onClick:n,children:l.alias.slice(0,2).toUpperCase()}),i.jsxs("div",{className:"grupNavTex text-center",children:[i.jsx(Xl.Brand,{className:"app-brand",as:Rn,to:"/",children:"AppDeclaración"}),l?.alias&&i.jsx("h6",{className:"backend-alias mb-0",title:l.alias,children:l.alias})]})]}),i.jsx("div",{className:"contCamp",children:i.jsxs("div",{className:"d-flex align-items-center position-relative",children:[i.jsxs("div",{className:`position-relative d-flex align-items-center me-3 notificacion-wrapper ${o?"":"opacity-50"}`,style:{cursor:o?"pointer":"not-allowed",filter:o?"none":"grayscale(1)"},onClick:o&&B?U:void 0,title:B?o?"":"No tienes permisos para ver datos tributarios":"Inicia sesión para ver datos tributarios",children:[i.jsx(I0,{size:22}),o&&p>0&&i.jsx("span",{className:"badge-notificacion pulse-animation",children:p})]}),i.jsx(Xl.Toggle,{onClick:()=>A(!0),"aria-controls":"offcanvasNavbar-expand-lg"})]})}),i.jsxs(Xl.Offcanvas,{show:N,onHide:_,id:"offcanvasNavbar-expand-lg","aria-labelledby":"offcanvasNavbarLabel-expand-lg",placement:"end",children:[i.jsx(Qa.Header,{closeButton:!0,className:"offcanvas-header-user",children:L?i.jsxs("div",{className:"offcanvas-user-header",children:[i.jsx("img",{src:z,alt:"avatar",className:"offcanvas-user-avatar user-avatar",loading:"lazy",onError:X=>{X.target.src!==Ka&&(X.target.src=Ka)}},z),i.jsx("div",{className:"offcanvas-user-info",children:i.jsxs("div",{className:"offcanvas-user-grup",children:[i.jsx("div",{className:"offcanvas-user-name",children:v.nombre||"Usuario"}),i.jsx("div",{className:"offcanvas-user-email",children:v.correo}),i.jsx("div",{className:"offcanvas-user-email",children:v.rol})]})})]}):i.jsx(Qa.Title,{id:"offcanvasNavbarLabel-expand-lg",children:"Menú"})}),i.jsx(Qa.Body,{children:i.jsxs(Zt,{className:"justify-content-end flex-grow-1 pe-3",children:[i.jsx(ko,{placement:"bottom",animation:!1,overlay:i.jsx(Nr,{children:"Ver Productos"}),children:i.jsxs(Zt.Link,{onClick:()=>{B&&(A(!1),C("/productos"))},disabled:!B,style:B?{}:{opacity:.5,cursor:"not-allowed"},title:B?"":"Inicia sesión para ver productos",children:[i.jsx("span",{className:"icon-Verproductos"}),i.jsx("span",{className:"ms-2 d-lg-none",children:"Ver Productos"})," "]})}),i.jsx(ko,{placement:"bottom",animation:!1,overlay:i.jsx(Nr,{children:"Add Facturas"}),children:i.jsxs(Zt.Link,{onClick:()=>{B&&(A(!1),C("/facturas"))},disabled:!B,style:B?{}:{opacity:.5,cursor:"not-allowed"},title:B?"":"Inicia sesión para ver facturas",children:[i.jsx("span",{className:"icon-AddFacturas"}),i.jsx("span",{className:"ms-2 d-lg-none",children:"Facturas"})]})}),i.jsx(ko,{placement:"bottom",animation:!1,overlay:i.jsx(Nr,{children:"Contador"}),children:i.jsxs(Zt.Link,{onClick:()=>{B&&(A(!1),C("/contador"))},disabled:!B,style:B?{}:{opacity:.5,cursor:"not-allowed"},title:B?"":"Inicia sesión para ver contador",children:[i.jsx("span",{className:"icon-Contador"}),i.jsx("span",{className:"ms-2 d-lg-none",children:"Contador"})]})}),L&&i.jsx(ko,{placement:"bottom",animation:!1,overlay:i.jsx(Nr,{children:"Usuario Activo"}),children:i.jsx("div",{className:"navbar-session-Dropdown-desktop d-flex align-items-center ms-3",children:i.jsxs(bn,{align:"end",children:[i.jsx(bn.Toggle,{as:"div",id:"userDropdown",className:"cursor-pointer",style:{display:"flex",alignItems:"center"},children:i.jsx("img",{src:z,alt:"avatar",width:34,height:34,className:"rounded-circle user-avatar",loading:"lazy",onError:X=>{X.target.src!==Ka&&(X.target.src=Ka)}},z)}),i.jsxs(bn.Menu,{className:"p-3 text-center",children:[i.jsx("img",{src:z,alt:"avatar",className:"rounded-circle mb-2 user-avatar-lg",loading:"lazy",onError:X=>{X.target.src!==Ka&&(X.target.src=Ka)}},z),i.jsx("div",{className:"fw-bold",children:v.nombre||"Usuario desconocido"}),i.jsx("div",{className:"text-muted small",children:v.correo}),i.jsx("div",{className:"text-muted small mb-2",children:v.rol}),i.jsx(bn.Divider,{}),i.jsxs(bn.Item,{onClick:()=>{x({mensaje:"Sesión cerrada voluntariamente por el usuario desde el menú superior"})},className:" text-danger text-center fw-semibold d-flex align-items-center justify-content-center gap-1",children:[i.jsx(Vf,{size:16})," Cerrar sesión"]})]})]})})}),i.jsx(ko,{placement:"bottom",animation:!1,overlay:i.jsx(Nr,{children:"Más"}),children:i.jsxs(hn,{title:i.jsx("span",{className:"icon-menu-kebab"}),id:"nav-dropdown",className:"Navbar-NavDropdown-Mas-Desktop",children:[i.jsx(hn.Item,{onClick:()=>A(!1),as:Rn,to:"/admin",children:"Admin & Config"}),i.jsx(hn.Divider,{}),i.jsx(hn.Item,{onClick:n,children:"Adicionar Backend"}),i.jsx(hn.Divider,{}),i.jsx(hn.Item,{onClick:()=>R(!0),children:"Guía de uso"}),i.jsx(hn.Divider,{}),i.jsx(hn.Item,{onClick:()=>A(!1),as:Rn,to:"/backend-setup",children:"Configurar Backend"}),i.jsx(hn.Divider,{}),i.jsx(hn.Item,{onClick:()=>A(!1),as:Rn,to:"/donaciones",children:"Donaciones"}),i.jsx(hn.Divider,{}),i.jsx(hn.Item,{onClick:()=>A(!1),as:Rn,to:"/acerca-de",children:"Acerca de"})]})}),i.jsxs(Zt.Link,{className:"Navbar-NavLink-Mas nav-link-more",onClick:()=>{A(!1),h(!0)},children:[i.jsx("span",{children:"Más"}),i.jsx("span",{className:"arrow",children:"›"})]})]})}),v&&i.jsx("div",{className:"offcanvas-logout-mobile romeo",children:i.jsxs("button",{className:"offcanvas-logout-btn julieta",onClick:()=>{A(!1),x(),C("/")},children:[i.jsx(Vf,{size:18}),i.jsx("span",{children:"Cerrar sesión"})]})})]})]})},"lg"),i.jsxs(Qa,{placement:"end",show:g,onHide:()=>h(!1),children:[i.jsx(Qa.Header,{closeButton:!0,children:i.jsx(Qa.Title,{style:{cursor:"pointer"},onClick:()=>{h(!1),A(!0)},children:"← Más opciones"})}),i.jsx(Qa.Body,{children:i.jsxs(Zt,{className:"flex-column",children:[i.jsx(Zt.Link,{onClick:()=>{B&&(h(!1),C("/admin"))},disabled:!B,style:B?{}:{opacity:.5,cursor:"not-allowed"},title:B?"":"Inicia sesión para entrar a Admin",children:"Admin & Config"}),i.jsx(Zt.Link,{onClick:()=>{A(!1),n()},children:"Adicionar Backend"}),i.jsx(Zt.Link,{onClick:()=>{h(!1),R(!0)},children:"Guía de uso"}),i.jsx(Zt.Link,{onClick:()=>{h(!1),C("/backend-setup")},children:"Configurar Backend"}),i.jsx(Zt.Link,{onClick:()=>{h(!1),C("/donaciones")},children:"Donaciones"}),i.jsx(Zt.Link,{onClick:()=>{h(!1),C("/acerca-de")},children:"Acerca de"})]})})]}),i.jsx(P0,{isOpen:S,onClose:()=>R(!1)})]})})}function Na({show:n,onHide:a,title:o="Confirmar acción",message:l="¿Deseas continuar con esta operación?",confirmLabel:c="Confirmar",confirmVariant:d="primary",onConfirm:p}){const[g,h]=m.useState(!1),[v,y]=m.useState(!1),x=async()=>{p&&(y(!0),await p(),y(!1),h(!1),a())};return i.jsx(i.Fragment,{children:i.jsxs(be,{show:n,onHide:a,centered:!0,children:[i.jsx(be.Header,{closeButton:!0,children:i.jsx(be.Title,{children:o})}),i.jsxs(be.Body,{children:[typeof l=="string"?i.jsx("p",{children:l}):l,i.jsx(oe.Check,{type:"switch",id:"confirm-action-switch",label:g?"Confirmado (acción habilitada)":"Desactivado",checked:g,onChange:w=>h(w.target.checked)}),i.jsx(Nn,{show:v})]}),i.jsxs(be.Footer,{children:[i.jsx(Te,{variant:"secondary",onClick:a,children:"Cancelar"}),i.jsx(Te,{variant:d,onClick:x,disabled:!g||v,children:v?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Guardando..."]}):c})]})]})})}const ay={anio:n=>!n||!n.toString().trim()?"El año es obligatorio.":/^\d{4}$/.test(n)?"":"El año debe tener 4 dígitos.",entidad:n=>!n||!n.trim()?"El campo Entidad es obligatorio.":"",descripcion:n=>n&&n.length>100?"La descripción no debe superar los 50 caracteres.":"",valor:n=>{if(n==null||n==="")return"El valor es obligatorio.";const a=String(n).replace(/\D/g,"");return/^\d+$/.test(a)?"":"El valor debe ser un número entero sin decimales."},metodoPago:n=>!n||n.trim()===""?"Debe seleccionar un método de pago.":"",archivo:n=>n?"":"Debe seleccionar un archivo.",nombre:n=>!n||!n.trim()?"El nombre del producto es obligatorio.":/^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El nombre no puede contener caracteres especiales.",nombreProducto:n=>!n||!n.trim()?"El nombre del producto es obligatorio.":/^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El nombre no puede contener caracteres especiales.",entidadProducto:n=>!n||!n.trim()?"La entidad del producto es obligatoria.":"",tipo:n=>n?/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El tipo solo debe contener letras.":"",correo:n=>!n||!n.trim()?"El correo es obligatorio.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)?"":"El correo no es válido.",nombreUsuario:n=>!n||!n.trim()?"El nombre es obligatorio.":n.length>50?"El nombre no debe superar los 50 caracteres.":/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El nombre solo puede contener letras.",rol:n=>!n||n.trim()===""?"Debe seleccionar un rol.":"",rolNombre:n=>!n||!n.trim()?"El nombre del rol es obligatorio.":/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?n.trim().length<3?"El nombre del rol debe tener al menos 3 caracteres.":n.trim().length>30?"El nombre del rol no debe superar los 30 caracteres.":"":"El nombre del rol solo puede contener letras.",rolPermisos:n=>!n||n.length===0?"Debe seleccionar al menos un permiso.":""};function yt(n=""){if(!n)return"";const a=n.toLowerCase().trim().replace(/\s+/g," ");return a.charAt(0).toUpperCase()+a.slice(1)}const IT=({show:n,onHide:a})=>{const{backends:o,activeBackend:l,addBackend:c,deleteBackend:d,setActiveBackend:p}=wc(),[g,h]=m.useState(null),{showToast:v}=Yn(),[y,x]=m.useState(""),[w,E]=m.useState(""),[N,A]=m.useState(!1),S=()=>{const C=yt(y),T=w.trim();if(!C||!T){v("❌ Alias y URL son obligatorios","danger",3e3);return}try{c(C,T),v(`✅ Backend "${C}" agregado`,"success",3e3),x(""),E(""),A(!1)}catch(_){v(`❌ ${_.message}`,"danger",3e3)}},R=C=>{d(C),h(null),v(`✅ Backend "${C}" eliminado`,"success",3e3)};return i.jsxs(i.Fragment,{children:[i.jsxs(be,{show:n,onHide:a,centered:!0,className:"BackendConfigModal",children:[i.jsx(be.Header,{closeButton:!0,children:i.jsx(be.Title,{children:"Adicionar Backends (URL del Worker)"})}),i.jsxs(be.Body,{children:[o.length===0?i.jsx("p",{children:"No hay backends configurados."}):i.jsx("div",{className:"backend-list-container",children:i.jsx("ul",{className:"list-group",children:o.map(C=>i.jsxs("li",{className:`list-group-item d-flex justify-content-between align-items-center ${l?.alias===C.alias?"active":""}`,children:[i.jsx("span",{children:C.alias}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsx(Te,{size:"sm",variant:"success",onClick:()=>p(C.alias),children:"Usar"}),i.jsx(Te,{size:"sm",variant:"danger",onClick:()=>h(C.alias),children:"Eliminar"})]})]},C.alias))})}),i.jsx("hr",{}),i.jsx("h6",{style:{cursor:"pointer",color:"#0d6efd"},onClick:()=>A(C=>!C),children:N?"➖ Cancelar":"➕ Agregar nuevo Backend"}),N&&i.jsxs(oe,{children:[i.jsxs(oe.Group,{className:"mb-2",children:[i.jsx(oe.Label,{children:"Alias"}),i.jsx(oe.Control,{type:"text",placeholder:"Ej: Cliente1",value:y,onChange:C=>x(C.target.value)})]}),i.jsxs(oe.Group,{className:"mb-2",children:[i.jsx(oe.Label,{children:"URL"}),i.jsx(oe.Control,{type:"text",placeholder:"https://appdeclaracion.usuario.workers.dev/",value:w,onChange:C=>E(C.target.value)})]}),i.jsx(Te,{variant:"primary",onClick:S,children:"Guardar"})]})]})]}),i.jsx(Na,{show:g,onHide:()=>h(!1),title:"Eliminar Usuario",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar el backend ",i.jsx("strong",{children:g}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>R(g)})]})};function PT(){const[n,a]=m.useState(null),[o,l]=m.useState(!1);m.useEffect(()=>{const d=p=>{p.preventDefault(),a(p),l(!0)};return window.addEventListener("beforeinstallprompt",d),()=>{window.removeEventListener("beforeinstallprompt",d)}},[]);const c=async()=>{if(!n)return;n.prompt(),(await n.userChoice).outcome==="accepted"?console.log("✅ Usuario aceptó instalar"):console.log("❌ Usuario canceló instalación"),a(null),l(!1)};return o?i.jsx("div",{style:ry.container,children:i.jsx("button",{style:ry.button,onClick:c,children:"📲 Agregar a pantalla de inicio"})}):null}const ry={container:{position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:9999},button:{backgroundColor:"#0d6efd",color:"#fff",border:"none",padding:"12px 18px",borderRadius:"8px",fontSize:"16px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0,0,0,0.2)"}};function $T(){const[n,a]=m.useState(!1);return m.useEffect(()=>{const o=/iphone|ipad|ipod/i.test(navigator.userAgent),l=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),c=window.navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches;o&&l&&!c&&a(!0)},[]),n?i.jsx("div",{style:jf.overlay,children:i.jsxs("div",{style:jf.modal,children:[i.jsx("h4",{children:"📲 Instalar App"}),i.jsxs("p",{children:["Para agregar esta app a tu iPhone:",i.jsx("br",{}),i.jsx("strong",{children:"1."})," Toca ",i.jsx("b",{children:"Compartir"})," ⬆️",i.jsx("br",{}),i.jsx("strong",{children:"2."})," Selecciona ",i.jsx("b",{children:"Agregar a pantalla de inicio"})]}),i.jsx("button",{onClick:()=>a(!1),style:jf.button,children:"Entendido"})]})}):null}const jf={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},modal:{backgroundColor:"#fff",padding:"20px",borderRadius:"12px",maxWidth:"320px",textAlign:"center"},button:{marginTop:"15px",padding:"10px 16px",border:"none",borderRadius:"8px",backgroundColor:"#0d6efd",color:"#fff",cursor:"pointer"}};function HT(){const{login:n,authenticated:a,loading:o}=Oi(),{activeBackend:l}=wc(),c=_n(),[d,p]=m.useState(!1),[g,h]=m.useState(!1),[v,y]=m.useState(!1);return m.useEffect(()=>{if(!o){if(a&&!l&&!g){h(!0),window.dispatchEvent(new CustomEvent("backend:open-config"));return}a&&l&&c("/productos",{replace:!0})}},[a,o,l,g,c]),m.useEffect(()=>{if(o||a||d)return;const x=document.getElementById("googleLoginDiv");if(!x)return;const w=setInterval(()=>{window.google?.accounts?.id&&(clearInterval(w),window.googleInitialized||(window.google.accounts.id.initialize({client_id:"648554486893-4b33o1cei2rfhv8ehn917ovf60h1u9q4.apps.googleusercontent.com",callback:E=>{if(d)return;const N=E.credential,A=Date.now();p(!0),n(N,()=>{const S=Date.now()-A;setTimeout(()=>{p(!1)},Math.max(0,500-S))})}}),window.googleInitialized=!0),x.innerHTML="",window.google.accounts.id.renderButton(x,{theme:"filled_blue",size:"large",shape:"pill",text:"signin_with",width:240}))},300);return()=>clearInterval(w)},[n,o,a,d]),o?i.jsx("div",{className:"home-wrapper",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"spinner-border text-primary mb-3",role:"status"}),i.jsx("p",{className:"text-secondary",children:"Verificando sesión..."})]})}):a?null:d&&!a?i.jsx("div",{className:"home-wrapper",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"spinner-border text-success mb-3",role:"status"}),i.jsx("p",{className:"text-success",children:"Iniciando sesión, un momento..."})]})}):i.jsxs("div",{className:"home-wrapper d-flex flex-column align-items-center",children:[i.jsxs("div",{className:"card shadow-lg p-4 text-center",style:{maxWidth:400,borderRadius:"20px"},children:[i.jsx("h3",{className:"mb-3 fw-bold",children:"Bienvenido"}),i.jsx("p",{className:"text-muted mb-4",children:"Inicia sesión con tu cuenta de Google para gestionar tus documentos."}),i.jsx("div",{id:"googleLoginDiv",className:"d-flex justify-content-center mb-3"}),i.jsxs("div",{className:`bg-light p-3 rounded-3 mt-2 ${l?"":"backend-attention"}`,children:[i.jsx("p",{className:"small text-secondary mb-2",children:"¿Quieres ver cómo funciona?"}),i.jsxs("div",{className:"d-flex flex-column gap-2",children:[i.jsxs("button",{onClick:()=>y(!0),className:"btn btn-sm btn-link text-decoration-none fw-bold",children:[i.jsx("i",{className:"bi bi-play-circle-fill me-1"})," Ver Demo de la App"]}),i.jsx(Rn,{to:"/backend-setup",className:"text-primary fw-bold text-decoration-none small",children:"Guía: Configurar mi Backend →"})]})]}),i.jsx("hr",{className:"mt-4 mb-3"}),i.jsxs("div",{className:"legal-links",style:{fontSize:"0.85rem"},children:[i.jsx(Rn,{to:"/privacidad",className:"text-decoration-none text-secondary mx-2",children:"Privacidad"}),i.jsx("span",{className:"text-muted",children:"|"}),i.jsx(Rn,{to:"/terminos",className:"text-decoration-none text-secondary mx-2",children:"Términos"})]})]}),i.jsx("div",{className:"mt-4 text-center text-white-50",children:i.jsx("small",{children:"AppDeclaración: Gestión descentralizada de documentos tributarios."})}),i.jsx(P0,{isOpen:v,onClose:()=>y(!1)})]})}function as({errors:n}){return!n||Object.keys(n).length===0?null:i.jsx("div",{className:"form-error-list",children:Object.values(n).map((a,o)=>i.jsx("div",{className:"error-item",children:a},o))})}function rs(){const[n,a]=m.useState({}),o=m.useCallback((p,g)=>{const h=ay[p];if(!h)return;const v=h(g);a(y=>{const x={...y};return v?x[p]=v:delete x[p],x})},[]),l=m.useCallback(p=>{const g={};for(const[h,v]of Object.entries(p)){const y=ay[h];if(!y)continue;const x=y(v);x&&(g[h]=x)}return a(g),Object.keys(g).length===0},[]),c=m.useCallback(p=>{a(g=>{const h={...g};return delete h[p],h})},[]),d=m.useCallback(()=>a({}),[]);return{errors:n,validateField:o,validateForm:l,clearError:c,clearErrors:d}}function JT({show:n,onHide:a,productoAEditar:o}){const{addProducto:l,updateProducto:c}=ns(),{errors:d,validateField:p,validateForm:g,clearError:h,clearErrors:v}=rs(),[y,x]=m.useState({nombre:"",descripcion:"",entidadProducto:"",tipo:""}),[w,E]=m.useState(!1),[N,A]=m.useState(!1),[S,R]=m.useState(""),[C,T]=m.useState("success"),_=z=>{const{name:L,value:B}=z.target;x(X=>({...X,[L]:B})),p(L,B),h(L)};m.useEffect(()=>{n&&o?x({nombre:o.nombre||"",descripcion:o.descripcion||"",entidadProducto:o.entidad||"",tipo:o.tipo||""}):n&&!o&&(x({nombre:"",descripcion:"",entidadProducto:"",tipo:""}),v())},[o,n]);const U=async z=>{if(z.preventDefault(),v(),!!g(y)){E(!0);try{const L={nombre:yt(y.nombre),descripcion:y.descripcion?yt(y.descripcion):"",entidad:yt(y.entidadProducto),tipo:y.tipo?yt(y.tipo):""};let B;if(o?B=await c({...L,id:o.id}):B=await l(L),B.ok)T("success"),R(B.mensaje),A(!0),a();else if(B.ok===!1&&B.mensaje.includes("Ya existe"))T("warning"),R(B.mensaje),A(!0);else throw new Error(B.mensaje||"Error en la operación")}catch(L){T("danger"),R(`❌ ${L.message}`),A(!0),console.error(L)}finally{E(!1)}}};return i.jsxs(i.Fragment,{children:[i.jsxs(be,{show:n,onHide:a,centered:!0,children:[i.jsx(be.Header,{closeButton:!0,children:i.jsx(be.Title,{children:o?"Editar Producto":"Adicionar Producto"})}),i.jsxs(be.Body,{children:[i.jsx(as,{errors:d}),i.jsxs(oe,{onSubmit:U,children:[i.jsxs(oe.Group,{className:"mb-3",children:[i.jsx(oe.Label,{children:"Nombre *"}),i.jsx(oe.Control,{type:"text",name:"nombre",value:y.nombre,onChange:_,onBlur:z=>p("nombre",z.target.value),placeholder:"Ej: Tarjeta 6992, Cta 1108"})]}),i.jsxs(oe.Group,{className:"mb-3",children:[i.jsx(oe.Label,{children:"Descripción"}),i.jsx(oe.Control,{type:"text",name:"descripcion",value:y.descripcion,onChange:_,onBlur:z=>p("descripcion",z.target.value),placeholder:"Ej: Extracto bancario, póliza, certificado"})]}),i.jsxs(oe.Group,{className:"mb-3",children:[i.jsx(oe.Label,{children:"Entidad *"}),i.jsx(oe.Control,{type:"text",name:"entidadProducto",value:y.entidadProducto,onChange:_,onBlur:z=>p("entidadProducto",z.target.value),placeholder:"Ej: Banco de Bogotá, Sura, Ecopetrol"})]}),i.jsxs(oe.Group,{className:"mb-3",children:[i.jsx(oe.Label,{children:"Tipo"}),i.jsx(oe.Control,{type:"text",name:"tipo",value:y.tipo,onChange:_,onBlur:z=>p("tipo",z.target.value),placeholder:"Ej: Salud, Deuda, Certificado"})]}),i.jsx(Te,{type:"submit",variant:"primary",disabled:w,children:w?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),i.jsx("span",{className:"ms-2",children:"Procesando..."})]}):o?"Guardar Cambios":"Guardar Producto"})]}),i.jsx(Nn,{show:w})]})]}),i.jsx(Ko,{position:"bottom-end",className:"p-3",children:i.jsxs(Ct,{bg:C,show:N,autohide:!0,delay:3e3,onClose:()=>A(!1),children:[i.jsx(Ct.Header,{children:i.jsx("strong",{className:"me-auto",children:"Productos"})}),i.jsx(Ct.Body,{className:"text-white",children:S})]})})]})}function qT({show:n,onClose:a,onConfirm:o,title:l,anioDefault:c}){const{errors:d,validateField:p,validateForm:g,clearErrors:h,clearError:v}=rs(),y=String(new Date().getFullYear()-1),[x,w]=m.useState(!1),[E,N]=m.useState(""),[A,S]=m.useState(!1),[R,C]=m.useState(null),[T,_]=m.useState(!1);m.useEffect(()=>{n&&(h(),N(c||y),S(!1),C(null),_(!1),w(!1))},[n,c,y,h]);const U=async()=>{if(h(),!!g({anio:E,archivo:R})){w(!0);try{await o(E,l==="Remplazar archivo"?!1:A,R,T)}catch(B){console.log("Error en el modal:",B)}finally{w(!1)}}};return i.jsxs(be,{show:n,onHide:a,centered:!0,children:[i.jsx(be.Header,{closeButton:!0,children:i.jsx(be.Title,{children:l==="Remplazar archivo"?"Reemplazar archivo":"Subir archivo"})}),i.jsxs(be.Body,{children:[i.jsx(as,{errors:d}),i.jsxs(oe,{children:[i.jsxs(oe.Group,{children:[i.jsx(oe.Label,{children:"Año"}),i.jsx(oe.Control,{type:"number",placeholder:`Ejm: ${new Date().getFullYear()-1}`,value:E,onChange:z=>{N(z.target.value),v("anio")},onBlur:z=>p("anio",z.target.value),disabled:l==="Remplazar archivo"})]}),i.jsxs(oe.Group,{className:"mt-3",children:[i.jsx(oe.Label,{children:"Archivo"}),i.jsx(oe.Control,{type:"file",onChange:z=>{C(z.target.files[0]),p("archivo",z.target.files[0])}})]}),l!=="Remplazar archivo"&&i.jsx(oe.Group,{className:"mt-3",children:i.jsx(oe.Check,{type:"checkbox",label:"Este archivo aplica a varios productos",checked:A,onChange:z=>S(z.target.checked)})}),l==="Remplazar archivo"&&i.jsx(oe.Group,{className:"mt-3 UploadModal-replaceOnly",children:i.jsx(oe.Check,{type:"checkbox",label:"Reemplazar solo en este producto",checked:T,onChange:z=>_(z.target.checked)})})]}),i.jsx(Nn,{show:x})]}),i.jsxs(be.Footer,{children:[i.jsx(Te,{variant:"secondary",onClick:a,disabled:x,children:"Cancelar"}),i.jsx(Te,{variant:"primary",onClick:U,disabled:x,children:x?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{size:"sm"})," Procesando..."]}):l==="Remplazar archivo"?"Reemplazar":"Cargar archivo"})]})]})}function GT({show:n,onClose:a,onConfirm:o,productos:l=[],productoOrigen:c,loading:d}){const[p,g]=m.useState([]);m.useEffect(()=>{n&&g(c?[c.id]:[])},[n,c]);const h=(y,x)=>{x!==c?.id&&(y.target.checked?g(w=>[...w,x]):g(w=>w.filter(E=>E!==x)))},v=()=>{if(p.length===0){alert("Debe seleccionar al menos un producto");return}o(p)};return i.jsxs(be,{show:n,onHide:a,centered:!0,children:[i.jsx(be.Header,{closeButton:!0,children:i.jsx(be.Title,{children:"Seleccionar Productos"})}),i.jsxs(be.Body,{children:[i.jsx(oe,{children:l.filter(y=>!y.tieneArchivo||y.id===c?.id).map(y=>i.jsx(oe.Check,{type:"checkbox",label:`${y.entidad} - ${y.nombre}`,checked:p.includes(y.id)||y.id===c?.id,disabled:y.id===c?.id,onChange:x=>h(x,y.id),className:"mb-2"},y.id))}),i.jsx(Nn,{show:d})]}),i.jsxs(be.Footer,{children:[i.jsx(Te,{variant:"secondary",onClick:a,children:"Cancelar"}),i.jsx(Te,{variant:"primary",onClick:v,children:d?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Procesando..."]}):"Cargar archivo"})]})]})}const FT=()=>i.jsx(Ln,{xs:12,md:6,lg:4,className:"mb-3",children:i.jsx(Ro,{className:"producto-card-skeleton",children:i.jsxs(Ro.Body,{children:[i.jsx("div",{className:"skeleton-edit-btn"}),i.jsx("div",{className:"skeleton-close-btn"}),i.jsx("div",{className:"skeleton-placeholder skeleton-title"}),i.jsx("div",{className:"skeleton-placeholder skeleton-text"}),i.jsx("div",{className:"skeleton-placeholder skeleton-text short"}),i.jsx("div",{className:"skeleton-placeholder skeleton-button"})]})})});function VT(){const n=window.innerWidth<2e3,{puede:a}=Ea(),o=a("subirArchivoProducto"),l=a("remplazarArchivoProducto"),c=a("eliminarProducto"),d=a("agregarProducto"),p=a("actualizarProducto"),{registroProductos:g,loading:h,anioAnterior:v,refreshProductos:y,subirArchivo:x,remplaceArchivo:w,deleteProducto:E}=ns(),{showToast:N}=Yn(),[A,S]=m.useState(!1),[R,C]=m.useState(!1),[T,_]=m.useState(!1),[U,z]=m.useState(!1),[L,B]=m.useState(null),[X,te]=m.useState(null),[ne,se]=m.useState(null),[ie,W]=m.useState(""),[Z,k]=m.useState("");m.useEffect(()=>{qo()&&y()},[]);const F=O=>{B(O),se(null),W(""),C(!0)};async function re({tipo:O,productoIds:q,anio:ae,file:P,replaceOnlyThis:ce=!1,nombreProducto:pe="",usarExistente:xe=!1,forzarTodosLosAnios:Me=!1}){let je;if(O==="reemplazar"?je=await w(q[0],ae,P,ce,pe,xe,Me):je=await x(q,ae,P,xe),je.existe){if(!await O0({titulo:"Archivo existente",mensaje:je.mensaje,textoConfirmar:"✅ Usar archivo existente",textoCancelar:"❌ Cancelar"})){N("❌ Operación cancelada por el usuario","warning",3e3,"Productos");return}O==="reemplazar"?je=await w(q[0],ae,P,ce,pe,!0,Me):je=await x(q,ae,P,!0)}N(je.mensaje,je.ok?"success":"danger",1e4,"Productos")}const V=async(O,q,ae,P)=>{if(se(ae),W(O),q){te(L),_(!0),C(!1);return}L.tieneArchivo?await re({tipo:"reemplazar",productoIds:[L.id],anio:O,file:ae,replaceOnlyThis:P,nombreProducto:L.nombre}):await re({tipo:"subir",productoIds:[L.id],anio:O,file:ae}),C(!1)},le=async O=>{!ne||!ie||(await re({tipo:"subir",productoIds:O,anio:ie,file:ne}),_(!1))};return i.jsx(i.Fragment,{children:i.jsxs(Yo,{className:"productos-page",children:[i.jsx("div",{className:"productos-container",children:i.jsx("h2",{className:"mb-4",children:"Productos"})}),i.jsx(Rr,{children:h?Array.from({length:6}).map((O,q)=>i.jsx(FT,{},`skeleton-${q}`)):g.map(O=>i.jsx(Ln,{xs:12,md:6,lg:4,className:"mb-3",children:i.jsx(Ro,{className:`producto-card ${O.tieneArchivo?"producto-ok":""}`,children:i.jsxs(Ro.Body,{children:[i.jsxs("div",{className:"position-absolute top-0 end-0 m-2 d-flex gap-2 align-items-center",children:[i.jsx("button",{type:"button",className:"editicon accion-icon",disabled:!p||O.tieneArchivo,onClick:()=>{p&&(B(O),S(!0))},title:O.tieneArchivo?"No se puede editar un producto con archivo vinculado":p?"Editar producto":"No tienes permisos para editar",style:{opacity:!p||O.tieneArchivo?.3:1,cursor:!p||O.tieneArchivo?"not-allowed":"pointer"},children:i.jsx("i",{className:"bi bi-pencil-square"})}),i.jsx("button",{type:"button",className:"editicon accion-icon text-danger",disabled:!c,style:c?{}:{opacity:.3,cursor:"not-allowed"},onClick:()=>{c&&(B(O),z(!0))},children:i.jsx("i",{className:"bi bi-x-circle"})})]}),i.jsxs(Ro.Title,{className:"producto-title-t",children:[O.entidad," ",O.nombre]}),i.jsx(Ro.Text,{children:O.descripcion}),O.tieneArchivo?i.jsxs(i.Fragment,{children:[i.jsx("p",{className:"mb-2",children:i.jsxs("small",{children:["Archivo (",O.archivoInfo?.anio,"):"," ",i.jsx("a",{href:O.archivoInfo?.link,target:"_blank",rel:"noopener noreferrer",children:O.archivoInfo?.nombreArchivo||"Ver archivo"})]})}),i.jsx(Te,{variant:"warning",size:"sm",disabled:!l,title:l?"":"No tienes permisos para remplazar",onClick:()=>{k("Remplazar archivo"),F(O)},children:"Modificar archivo"})]}):i.jsx(Te,{variant:"primary",size:"sm",disabled:!o,title:o?"":"No tienes permisos para subir archivos",onClick:()=>{k("Subir Archivo"),F(O)},children:"Subir Archivo"})]})})},O.id))}),n&&i.jsx(ko,{placement:"left",delay:{show:50,hide:100},overlay:i.jsx(Nr,{id:"fab-tooltip",children:d?"Agregar producto":"No tienes permisos para agregar productos"}),children:i.jsx("button",{className:"fab-subir",disabled:!d,style:d?{}:{opacity:.3,cursor:"not-allowed"},onClick:()=>{B(null),S(!0)},children:i.jsx("i",{className:"bi bi-plus-lg"})})}),i.jsx(qT,{show:R,onClose:()=>{C(!1),B(null)},onConfirm:V,title:Z,anioDefault:Z==="Remplazar archivo"?v:""}),i.jsx(GT,{show:T,onClose:()=>{_(!1),te(null),B(null)},onConfirm:le,productoOrigen:X,productos:g,loading:h}),i.jsx(JT,{show:A,onHide:()=>{S(!1),B(null)},productoAEditar:L,onProductoAgregado:()=>{S(!1),B(null)}}),i.jsx(Na,{show:U,onHide:()=>z(!1),title:"Eliminar Producto",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar el producto"," ",i.jsx("strong",{children:L?.nombre}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>E(L.id)})]})})}const YT=()=>i.jsxs("div",{className:"dato-tributario-skeleton",children:[i.jsx("div",{className:"card mb-3 border-0 shadow-sm bg-light",children:i.jsxs("div",{className:"card-body p-2 row g-2",children:[i.jsx("div",{className:"col-5",children:i.jsx("div",{className:"skeleton-input"})}),i.jsx("div",{className:"col-5",children:i.jsx("div",{className:"skeleton-input"})}),i.jsx("div",{className:"col-2",children:i.jsx("div",{className:"skeleton-btn"})})]})}),i.jsx("div",{className:"list-group",children:[1,2,3,4,5].map(n=>i.jsxs("div",{className:"skeleton-fila",children:[i.jsxs("div",{className:"skeleton-controls",children:[i.jsx("div",{className:"skeleton-icon-sm"}),i.jsx("div",{className:"skeleton-text-xs"}),i.jsx("div",{className:"skeleton-icon-sm"})]}),i.jsx("div",{className:"skeleton-label-box",children:i.jsx("div",{className:"skeleton-bar",style:{width:"60%"}})}),i.jsx("div",{className:"skeleton-valor-box",children:i.jsx("div",{className:"skeleton-bar",style:{width:"90%"}})}),i.jsxs("div",{className:"skeleton-actions",children:[i.jsx("div",{className:"skeleton-icon"}),i.jsx("div",{className:"skeleton-icon"}),i.jsx("div",{className:"skeleton-icon"})]})]},n))})]});function XT(){const{puede:n}=Ea(),a=n("obtenerDatosTributarios"),{datos:o,setDatos:l,getDatos:c,saveChanges:d,isDirty:p,discardChanges:g,loading:h}=L0(),[v,y]=m.useState(null),[x,w]=m.useState({label:"",valor:""}),[E,N]=m.useState(null),[A,S]=m.useState(!1);m.useEffect(()=>{a&&c()},[c,a]);const R=L=>{l(B=>B.map(X=>X.id===L?{...X,importante:!X.importante}:X))},C=(L,B)=>{const X=[...o],te=L+B;te<0||te>=X.length||([X[L],X[te]]=[X[te],X[L]],l(X.map((ne,se)=>({...ne,orden:se+1}))))},T=(L,B,X)=>{l(te=>te.map(ne=>ne.id===L?{...ne,[B]:X}:ne))},_=()=>{l(L=>L.filter(B=>B.id!==E).map((B,X)=>({...B,orden:X+1})))},U=()=>{if(!x.label.trim())return;const L={id:`new_${Date.now()}`,label:x.label.charAt(0).toUpperCase()+x.label.slice(1),valor:x.valor,orden:o.length+1,importante:!1};l([...o,L]),w({label:"",valor:""})},z=L=>{const B=/^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/.*)?$/i,X=L.toString().trim();if(B.test(X)){const te=X.startsWith("http")?X:`https://${X}`;return i.jsx("a",{href:te,target:"_blank",rel:"noreferrer",children:"Ver Link"})}return L};return i.jsxs("div",{className:"datos-tributarios container mt-4",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4 sticky-header-custom border-bottom shadow-sm px-3 rounded bg-white",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"m-0 h4",children:"📊 Datos Tributarios"}),p&&i.jsx("small",{className:"text-danger fw-bold pulse-animation",children:"⚠️ Cambios pendientes"})]}),i.jsxs("div",{className:"d-flex gap-2",children:[p&&i.jsx("button",{className:"btn btn-sm btn-outline-secondary",onClick:g,children:"Descartar"}),i.jsx("button",{className:`btn btn-sm ${p?"btn-success":"btn-secondary"}`,disabled:!p||h,onClick:d,children:h?"...":"💾 Guardar"})]})]}),h&&o.length===0?i.jsx(YT,{}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card mb-3 border-0 shadow-sm bg-light",children:i.jsxs("div",{className:"card-body p-2 row g-2",children:[i.jsx("div",{className:"col-5",children:i.jsx("input",{className:"form-control form-control-sm",placeholder:"Etiqueta",value:x.label,onChange:L=>w({...x,label:L.target.value})})}),i.jsx("div",{className:"col-5",children:i.jsx("input",{className:"form-control form-control-sm",placeholder:"Valor",value:x.valor,onChange:L=>w({...x,valor:L.target.value})})}),i.jsx("div",{className:"col-2",children:i.jsx("button",{className:"btn btn-sm btn-primary w-100",onClick:U,children:"+"})})]})}),i.jsxs("div",{className:"list-group shadow-sm rounded",children:[o.map((L,B)=>i.jsxs("div",{className:`fila ${L.importante?"resaltado":""}`,children:[i.jsxs("div",{className:"btn-subir-bajar align-items-center",children:[i.jsx("i",{className:`bi bi-chevron-up ${B===0?"text-muted":"text-primary"}`,onClick:()=>C(B,-1)}),i.jsx("span",{className:"small fw-bold",children:L.orden}),i.jsx("i",{className:`bi bi-chevron-down ${B===o.length-1?"text-muted":"text-primary"}`,onClick:()=>C(B,1)})]}),i.jsx("div",{className:"fila-label",children:v===L.id?i.jsx("input",{className:"form-control form-control-sm",value:L.label,onChange:X=>T(L.id,"label",X.target.value)}):L.label}),i.jsx("div",{className:"fila-valor",children:v===L.id?i.jsx("textarea",{className:"form-control form-control-sm",value:L.valor,onChange:X=>T(L.id,"valor",X.target.value)}):z(L.valor)}),i.jsxs("div",{className:"acciones",children:[i.jsx("i",{className:`bi ${L.importante?"bi-bookmark-star-fill text-danger":"bi-bookmark-star text-secondary"} accion-icon`,title:"Marcar como importante",onClick:()=>R(L.id)}),i.jsx("i",{className:`bi ${v===L.id?"bi-check-circle-fill text-success":"bi-pencil-square text-primary"} accion-icon`,title:"Editar",onClick:()=>y(v===L.id?null:L.id)}),i.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{N(L.id),S(!0)}})]})]},L.id)),!h&&o.length===0&&i.jsx("div",{className:"text-center p-5 text-muted bg-white border rounded",children:"No hay datos tributarios registrados."})]})]}),i.jsx(Na,{show:A,onHide:()=>S(!1),title:"Eliminar dato tributario",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar el registro"," ","?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:_}),i.jsx(Nn,{show:h&&o.length>0})]})}function ZT({show:n,onHide:a,registro:o,onUpdated:l}){const{editRegistroProducto:c}=ns(),{errors:d,validateField:p,validateForm:g,clearError:h,clearErrors:v}=rs(),[y,x]=m.useState(!1),[w,E]=m.useState({entidad:"",nombreProducto:"",descripcion:"",tipo:""});m.useEffect(()=>{o&&n&&E({entidad:o.entidad||"",nombreProducto:o.nombreProducto||"",descripcion:o.descripcion||"",tipo:o.tipo||""})},[o,n]);const N=R=>{const{name:C,value:T}=R.target;E(_=>({..._,[C]:T})),p(C,T),h(C)},A=async R=>{if(R.preventDefault(),v(),!!g(w)){x(!0);try{if(!o?.registroId)return;const T={registroId:o.registroId,nombreProducto:yt(w.nombreProducto),descripcion:yt(w.descripcion),entidad:yt(w.entidad),tipo:yt(w.tipo)},_=await c(T);if(_.ok&&(l(_.registro),a()),!_.ok)throw new Error("Error al guardar registro producto")}catch(T){console.log(T)}finally{x(!1)}}},S=()=>{o&&E({entidad:o.entidad||"",nombreProducto:o.nombreProducto||"",descripcion:o.descripcion||"",tipo:o.tipo||""}),v(),a()};return i.jsxs(be,{show:n,onHide:a,backdrop:"static",centered:!0,children:[i.jsx(be.Header,{closeButton:!0,children:i.jsx(be.Title,{children:"✏️ Editar registro año"})}),i.jsxs(be.Body,{children:[i.jsx(as,{errors:d}),i.jsxs(oe,{children:[i.jsxs(oe.Group,{className:"mb-2",children:[i.jsx(oe.Label,{children:"Entidad"}),i.jsx(oe.Control,{name:"entidad",value:w.entidad,onChange:N,onBlur:R=>p("entidad",R.target.value),placeholder:"Ej: Banco de Bogotá, Sura, Ecopetrol"})]}),i.jsxs(oe.Group,{className:"mb-2",children:[i.jsx(oe.Label,{children:"Nombre del producto"}),i.jsx(oe.Control,{name:"nombreProducto",value:w.nombreProducto,onChange:N,onBlur:R=>p("nombreProducto",R.target.value),placeholder:"Ej: Tarjeta 6992, Cta 1108"})]}),i.jsxs(oe.Group,{className:"mb-2",children:[i.jsx(oe.Label,{children:"Tipo"}),i.jsx(oe.Control,{name:"tipo",value:w.tipo,onChange:N,onBlur:R=>p("tipo",R.target.value),placeholder:"Ej: Salud, Deuda, Certificado"})]}),i.jsxs(oe.Group,{className:"mb-2",children:[i.jsx(oe.Label,{children:"Descripción"}),i.jsx(oe.Control,{as:"textarea",rows:3,name:"descripcion",value:w.descripcion,onChange:N,onBlur:R=>p("descripcion",R.target.value),placeholder:"Ej: Extracto bancario, póliza, certificado"})]})]}),i.jsx(Nn,{show:y})]}),i.jsxs(be.Footer,{children:[i.jsx(Te,{variant:"secondary",onClick:S,disabled:y,children:"Cancelar"}),i.jsx(Te,{variant:"primary",onClick:A,disabled:y,children:y?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{size:"sm"})," Guardando..."]}):"Guardar cambios"})]})]})}const oy=({isMobile:n})=>n?i.jsx("div",{className:"archivo-card skeleton-card-contador",children:i.jsxs("div",{className:"accordion-header d-flex align-items-center p-3",children:[i.jsx("div",{className:"skeleton-circle me-3"}),i.jsxs("div",{className:"flex-grow-1",children:[i.jsx("div",{className:"skeleton-bar mb-2",style:{width:"60%"}}),i.jsx("div",{className:"skeleton-bar",style:{width:"40%"}})]}),i.jsx("div",{className:"skeleton-bar",style:{width:"15px",height:"15px"}})]})}):i.jsxs("tr",{className:"contador-skeleton-row",children:[i.jsx("td",{className:"icono",children:i.jsx("div",{className:"skeleton-circle"})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"80%"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"70%"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"60%"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"90%"}})}),i.jsx("td",{className:"acciones",children:i.jsx("div",{className:"skeleton-bar",style:{width:"40px"}})})]});function KT(){const{puede:n}=Ea(),a=n("editarRegistroProducto"),o=n("eliminarRegistroProducto"),l=window.innerWidth<768,{fetchArchivosPorAnio:c,deleteRegistroProducto:d}=ns(),[p,g]=m.useState(!1),[h,v]=m.useState(null),[y,x]=m.useState(!1),[w,E]=m.useState(!1),N=_n(),A=new Date().getFullYear(),[S,R]=m.useState(A-1),[C,T]=m.useState([]),[_,U]=m.useState(!0),[z,L]=m.useState({entidad:"",nombreProducto:"",tipo:""}),[B,X]=m.useState(null),te=V=>{X(B===V?null:V)},ne=m.useCallback(async V=>{try{g(!0);const le=await c(V);T(le||[])}catch(le){console.error("❌ Error cargando archivos:",le)}finally{g(!1)}},[c]);m.useEffect(()=>{L({entidad:"",nombreProducto:"",tipo:""}),ne(S),U(!1)},[S,ne,N]);const se=V=>{if(!V)return"📄";switch(V.split(".").pop().toLowerCase()){case"pdf":return i.jsx("span",{className:"icon-pdf"});case"doc":return i.jsx("span",{className:"icon-microsoftword"});case"docx":return i.jsx("span",{className:"icon-microsoftword"});case"xls":return i.jsx("span",{className:"icon-excel"});case"xlsx":return i.jsx("span",{className:"icon-excel"});case"ppt":case"pptx":return"📽️";case"jpg":return i.jsx("span",{className:"icon-jpg"});case"jpeg":return i.jsx("span",{className:"icon-JPEG"});case"png":return i.jsx("span",{className:"icon-png"});case"gif":return"🖼️";case"txt":return i.jsx("span",{className:"icon-texto"});case"zip":case"rar":return"🗜️";default:return"📄"}},ie=V=>(V||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),W=C.filter(V=>{const le=ie(V.entidad),O=ie(V.nombreProducto),q=ie(V.tipo);return(z.entidad?le===z.entidad:!0)&&(z.nombreProducto?O===z.nombreProducto:!0)&&(z.tipo?q===z.tipo:!0)}).sort((V,le)=>ie(V.entidad).localeCompare(ie(le.entidad))),Z=[...new Map(C.map(V=>[ie(V.entidad),{value:ie(V.entidad),label:(V.entidad||"").trim()}])).values()],k=[...new Map(W.map(V=>[ie(V.nombreProducto),{value:ie(V.nombreProducto),label:(V.nombreProducto||"").trim()}])).values()],F=[...new Map(W.map(V=>[ie(V.tipo),{value:ie(V.tipo),label:(V.tipo||"").trim()}])).values()];if(_)return i.jsx("div",{className:"text-center p-5",children:i.jsx("p",{children:"Verificando sesión..."})});const re=async()=>{if(!h)return;(await d(h.registroId)).ok&&T(le=>le.filter(O=>O.registroId!==h.registroId)),E(!1),v(null)};return i.jsxs("div",{className:"contador-container",children:[i.jsxs("div",{className:"container mt-4",children:[i.jsxs("h2",{className:"mb-3",children:["📂 Archivos del año ",S]}),i.jsxs("div",{className:"mb-3",children:[i.jsx("label",{children:"Año:"}),i.jsx("select",{value:S,onChange:V=>R(V.target.value),className:"form-select w-auto d-inline ms-2",children:Array.from({length:15}).map((V,le)=>{const O=A-le;return i.jsx("option",{value:O,children:O},O)})})]}),l?i.jsx("div",{className:"accordion-mobile",children:p?Array.from({length:6}).map((V,le)=>i.jsx(oy,{isMobile:!0},`skel-m-${le}`)):W.length===0?i.jsx("p",{className:"text-center p-4",children:"No hay archivos para este año."}):W.map((V,le)=>i.jsxs("div",{className:"archivo-card",children:[i.jsxs("div",{className:"accordion-header",onClick:()=>te(le),children:[i.jsx("span",{className:"icono",children:se(V.nombreArchivo)}),i.jsxs("div",{className:"ms-2 flex-grow-1",children:[i.jsx("div",{className:"fw-bold",children:V.entidad}),i.jsx("div",{className:"text-muted small",children:V.nombreProducto})]}),i.jsx("span",{className:"arrow",children:B===le?"▲":"▼"})]}),B===le&&i.jsxs("div",{className:"accordion-body",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Entidad:"})," ",V.entidad]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Producto:"})," ",V.nombreProducto]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Tipo:"})," ",V.tipo]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Descripción:"})," ",V.descripcion||"-"]}),i.jsxs("div",{className:"acciones",children:[i.jsx("i",{className:`bi bi-pencil-square accion-icon ${a?"":"disabled-icon"}`,title:a?"Editar":"No tienes permisos para editar",onClick:O=>{a&&(O.stopPropagation(),v(V),x(!0))}}),i.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${o?"":"disabled-icon"}`,title:o?"Eliminar":"No tienes permisos para eliminar",onClick:O=>{o&&(O.stopPropagation(),v(V),E(!0))}})]}),i.jsx("button",{className:"btn btn-primary btn-sm w-100 mt-2",onClick:()=>window.open(V.link,"_blank"),children:"📄 Abrir archivo1"})]})]},V.registroId))}):i.jsx("div",{className:"table-responsive archivos-por-anio",children:i.jsxs("table",{className:"table table-bordered table-hover",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{className:"thicon"}),i.jsxs("th",{children:["Entidad",i.jsxs("select",{className:"form-select form-select-sm mt-1",disabled:p,value:z.entidad,onChange:V=>L({...z,entidad:V.target.value}),children:[i.jsx("option",{value:"",children:"Todas"}),!p&&Z.map(V=>i.jsx("option",{value:V.value,children:V.label},V.value))]})]}),i.jsxs("th",{children:["Nombre del producto",i.jsxs("select",{className:"form-select form-select-sm mt-1",disabled:p,value:z.nombreProducto,onChange:V=>L({...z,nombreProducto:V.target.value}),children:[i.jsx("option",{value:"",children:"Todos"}),!p&&k.map(V=>i.jsx("option",{value:V.value,children:V.label},V.value))]})]}),i.jsxs("th",{children:["Tipo",i.jsxs("select",{className:"form-select form-select-sm mt-1",disabled:p,value:z.tipo,onChange:V=>L({...z,tipo:V.target.value}),children:[i.jsx("option",{value:"",children:"Todos"}),!p&&F.map(V=>i.jsx("option",{value:V.value,children:V.label},V.value))]})]}),i.jsx("th",{children:"Descripción"}),i.jsx("th",{className:"th-acciones"})]})}),i.jsx("tbody",{children:p?Array.from({length:8}).map((V,le)=>i.jsx(oy,{isMobile:!1},`skel-d-${le}`)):W.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:"6",className:"text-center p-4",children:"No hay archivos para este año."})}):W.map(V=>i.jsxs("tr",{onClick:()=>window.open(V.link,"_blank"),children:[i.jsx("td",{className:"icono",children:se(V.nombreArchivo)}),i.jsx("td",{children:V.entidad||"-"}),i.jsx("td",{children:V.nombreProducto}),i.jsx("td",{children:V.tipo||"-"}),i.jsx("td",{children:V.descripcion||"-"}),i.jsxs("td",{className:"acciones",children:[i.jsx("i",{className:`bi bi-pencil-square accion-icon ${a?"":"disabled-icon"}`,title:a?"Editar":"No tienes permisos para editar",onClick:le=>{a&&(le.stopPropagation(),v(V),x(!0))}}),i.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${o?"":"disabled-icon"}`,title:o?"Eliminar":"No tienes permisos para eliminar",onClick:le=>{o&&(le.stopPropagation(),v(V),E(!0))}})]})]},V.registroId))})]})})]}),i.jsx(Na,{show:w,onHide:()=>E(!1),title:"Eliminar registro",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar el producto nombre"," ",i.jsx("strong",{children:h?.nombreProducto})," entidad"," ",i.jsx("strong",{children:h?.entidad}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:re}),i.jsx(ZT,{show:y,onHide:()=>x(!1),registro:h,onUpdated:V=>{T(le=>le.map(O=>O.registroId===V.registroId?{...O,...V}:O))}})]})}function QT({onClose:n,onSaved:a}){const{subirFactura:o}=Xm(),{getProductos:l}=ns(),{errors:c,validateField:d,validateForm:p,clearErrors:g,clearError:h}=rs(),[v,y]=m.useState(!1),[x,w]=m.useState(!0),[E,N]=m.useState(!1),[A,S]=m.useState(""),[R,C]=m.useState("success"),[T,_]=m.useState({anio:new Date().getFullYear(),entidad:"",descripcion:"",valor:"",metodoPago:"",archivo:null}),[U,z]=m.useState([]),L=W=>{const{name:Z,value:k}=W.target;_(F=>({...F,[Z]:k})),d(Z,k)},B=W=>{const Z=W.target.files[0];_(k=>({...k,archivo:Z})),d("archivo",Z)},X=W=>W.toLowerCase().split(" ").map(Z=>Z.charAt(0).toUpperCase()+Z.slice(1)).join(" "),te=W=>W?new Intl.NumberFormat("es-CO").format(W):"";m.useEffect(()=>{async function W(){w(!0);const Z=await l(),F=(Z?.data||Z||[]).filter(re=>re.nombre?.toLowerCase().startsWith("tarjeta")).map(re=>{const V=X(re.nombre),le=re.entidad?X(re.entidad):"";return le?`${le} - ${V}`:V});z(F),w(!1)}W()},[l]);const ne=["Tarjeta Débito","Tarjeta Crédito","Transferencia","Efectivo","Bre-B","Nequi","Daviplata"],se=Array.from(new Set([...ne,...U])).sort((W,Z)=>{const k=W.toLowerCase().startsWith("tarjeta"),F=Z.toLowerCase().startsWith("tarjeta");return k&&!F?-1:!k&&F?1:W.localeCompare(Z)}),ie=async()=>{if(g(),!p(T))return;y(!0);const Z={...T,entidad:yt(T.entidad),descripcion:T.descripcion?yt(T.descripcion):"",metodoPago:yt(T.metodoPago),file:T.archivo},k=await o(Z);y(!1),k.ok?(console.log("respuesta facturas",k),C("success"),S(k.mensaje),N(!0),a?.(),setTimeout(()=>{n()},3e3)):(C("warning"),S(k.mensaje),N(!0),console.log("respuesta facturas",k))};return i.jsxs("div",{className:"Add-Factura-Modal",children:[i.jsx("div",{className:"modal-backdrop",children:i.jsxs("div",{className:"modal-content",children:[i.jsx("h4",{children:"Subir factura"}),i.jsx(as,{errors:c}),i.jsx("label",{children:"Archivo de la Factura"}),i.jsxs("div",{className:"d-flex flex-column gap-2",children:[i.jsx("input",{type:"file",id:"fileInput",accept:"image/*,application/pdf",className:"d-none",onChange:B}),T.archivo?i.jsxs("div",{className:"alert alert-success d-flex justify-content-between align-items-center p-2 mb-0",children:[i.jsxs("small",{className:"text-truncate",children:["✅ ",T.archivo.name]}),i.jsx("button",{className:"btn btn-sm btn-link text-danger",onClick:()=>_(W=>({...W,archivo:null})),children:"Cambiar"})]}):i.jsxs("button",{type:"button",className:"btn btn-outline-info w-100 d-flex align-items-center justify-content-center gap-2",onClick:()=>document.getElementById("fileInput").click(),children:[i.jsx("i",{className:"bi bi-camera"}),"Escanear o Seleccionar Archivo"]})]}),i.jsx("label",{children:"Año"}),i.jsx("input",{list:"listaAnios",className:"form-control",name:"anio",value:T.anio,onChange:W=>{L(W),h("anio")},onBlur:W=>d("anio",W.target.value)}),i.jsx("datalist",{id:"listaAnios",children:Array.from({length:10}).map((W,Z)=>{const k=new Date().getFullYear()-Z;return i.jsx("option",{value:k},k)})}),i.jsx("label",{children:"Entidad"}),i.jsx("input",{className:"form-control",name:"entidad",onChange:W=>{L(W),h("entidad")},onBlur:W=>d("entidad",W.target.value)}),i.jsx("label",{children:"Descripción"}),i.jsx("input",{className:"form-control",name:"descripcion",onChange:W=>{L(W),h("descripcion")},onBlur:W=>d("descripcion",W.target.value)}),i.jsx("label",{children:"Valor (COP)"}),i.jsx("input",{type:"text",className:"form-control",name:"valor",value:T.valor?te(T.valor):"",onChange:W=>{const Z=W.target.value.replace(/\D/g,"");_(k=>({...k,valor:Z})),d("valor",Z),h("valor")},onBlur:()=>d("valor",T.valor)}),i.jsx("label",{children:"Método de Pago"}),i.jsx("select",{className:"form-control",name:"metodoPago",value:T.metodoPago,disabled:x,onChange:W=>{L(W),h("metodoPago")},onBlur:W=>d("metodoPago",W.target.value),children:x?i.jsx("option",{children:"Cargando..."}):i.jsxs(i.Fragment,{children:[i.jsx("option",{value:"",children:"Seleccione..."}),se.map(W=>i.jsx("option",{value:W,children:W},W))]})}),i.jsxs("div",{className:"mt-3 d-flex gap-2",children:[i.jsx("button",{className:"btn btn-primary",onClick:ie,children:v?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{as:"span",animation:"border",size:"sm"})," Guardando..."]}):"Subir"}),i.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Cancelar"})]}),i.jsx(Nn,{show:v})]})}),i.jsx(Ko,{position:"bottom-end",className:"p-3",children:i.jsxs(Ct,{bg:R,show:E,autohide:!0,delay:3e3,onClose:()=>N(!1),children:[i.jsx(Ct.Header,{children:i.jsx("strong",{className:"me-auto",children:"Facturas"})}),i.jsx(Ct.Body,{className:"text-white",children:A})]})})]})}function WT({show:n,onHide:a,factura:o,onUpdated:l}){const{updateFactura:c}=Xm(),{getProductos:d}=ns(),[p,g]=m.useState(!1),[h,v]=m.useState(!0),[y,x]=m.useState([]),[w,E]=m.useState(!1),[N,A]=m.useState(""),[S,R]=m.useState("success"),[C,T]=m.useState({entidad:"",descripcion:"",valor:"",metodoPago:"",registroId:""}),_=te=>te.toLowerCase().split(" ").map(ne=>ne.charAt(0).toUpperCase()+ne.slice(1)).join(" "),U=te=>te?new Intl.NumberFormat("es-CO").format(te):"",z=["Tarjeta Débito","Tarjeta Crédito","Transferencia","Efectivo","Bre-B","Nequi","Daviplata"];m.useEffect(()=>{o&&T({registroId:o.registroId,entidad:o.entidad||"",descripcion:o.descripcion||"",valor:o.valor||"",metodoPago:o.metodoPago||""})},[o]),m.useEffect(()=>{async function te(){v(!0);try{const ne=await d(),ie=(ne?.data||ne||[]).filter(W=>W.nombre?.toLowerCase().startsWith("tarjeta")).map(W=>{const Z=_(W.nombre),k=W.entidad?_(W.entidad):"";return k?`${k} - ${Z}`:Z});x(ie)}catch(ne){console.error("Error cargando métodos:",ne)}finally{v(!1)}}n&&te()},[d,n]);const L=Array.from(new Set([...z,...y,C.metodoPago])).filter(Boolean).sort((te,ne)=>{const se=te.toLowerCase().startsWith("tarjeta"),ie=ne.toLowerCase().startsWith("tarjeta");return se&&!ie?-1:!se&&ie?1:te.localeCompare(ne)}),B=te=>{const{name:ne,value:se}=te.target;if(ne==="valor"){const ie=se.replace(/\D/g,"");T(W=>({...W,[ne]:ie}))}else T(ie=>({...ie,[ne]:se}))},X=async()=>{g(!0);const te={...C,entidad:yt(C.entidad),descripcion:C.descripcion?yt(C.descripcion):"",metodoPago:yt(C.metodoPago)},ne=await c(te);ne.ok?(console.log("data",ne),g(!1),R("success"),A(ne.mensaje),E(!0),l(),a()):(R("warning"),A(ne.mensaje),E(!0),g(!1),alert(ne.mensaje||"Error al actualizar la factura"))};return o?i.jsxs("div",{className:"edit-factura-modal",children:[i.jsxs(be,{show:n,onHide:a,centered:!0,children:[i.jsx(be.Header,{closeButton:!0,children:i.jsx(be.Title,{children:"✏️ Editar factura"})}),i.jsxs(be.Body,{children:[i.jsxs(oe,{children:[i.jsxs(oe.Group,{className:"mb-3",children:[i.jsx(oe.Label,{children:"Entidad"}),i.jsx(oe.Control,{type:"text",name:"entidad",value:C.entidad,onChange:B})]}),i.jsxs(oe.Group,{className:"mb-3",children:[i.jsx(oe.Label,{children:"Descripción"}),i.jsx(oe.Control,{type:"text",name:"descripcion",value:C.descripcion,onChange:B})]}),i.jsxs(oe.Group,{className:"mb-3",children:[i.jsx(oe.Label,{children:"Valor (COP)"}),i.jsx(oe.Control,{type:"text",name:"valor",placeholder:"Ej: 25.000",value:C.valor?U(C.valor):"",onChange:B})]}),i.jsxs(oe.Group,{className:"mb-3",children:[i.jsx(oe.Label,{children:"Método de pago"}),i.jsx(oe.Select,{name:"metodoPago",value:C.metodoPago||"",onChange:B,disabled:h,children:h?i.jsx("option",{children:"Cargando métodos..."}):i.jsxs(i.Fragment,{children:[i.jsx("option",{value:"",children:"Seleccione..."}),L.map(te=>i.jsx("option",{value:te,children:te},te))]})})]})]}),i.jsx(Nn,{show:p})]}),i.jsxs(be.Footer,{children:[i.jsx(Te,{variant:"secondary",onClick:a,children:"Cancelar"}),i.jsx(Te,{variant:"primary",onClick:X,disabled:p,children:p?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Guardando..."]}):"Guardar cambios"})]})]}),i.jsx(Ko,{position:"bottom-end",className:"p-3",children:i.jsxs(Ct,{bg:S,show:w,autohide:!0,delay:3e3,onClose:()=>E(!1),children:[i.jsx(Ct.Header,{children:i.jsx("strong",{className:"me-auto",children:"Facturas"})}),i.jsx(Ct.Body,{className:"text-white",children:N})]})})]}):null}const sy=({isMobile:n})=>n?i.jsxs("div",{className:"factura-card skeleton-card-mobile",children:[i.jsxs("div",{className:"card-top",children:[i.jsx("div",{className:"skeleton-bar",style:{width:"40%"}}),i.jsx("div",{className:"skeleton-bar",style:{width:"30%"}})]}),i.jsx("div",{className:"skeleton-bar mt-3",style:{width:"90%"}}),i.jsxs("div",{className:"acciones-mobile mt-3",children:[i.jsx("div",{className:"skeleton-square"}),i.jsx("div",{className:"skeleton-circle"})]})]}):i.jsxs("tr",{className:"factura-skeleton-row",children:[i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"120px"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"250px"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"80px"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"100px"}})}),i.jsx("td",{className:"acciones",children:i.jsx("div",{className:"skeleton-bar",style:{width:"40px"}})})]});function eR(){const{puede:n}=Ea(),a=n("obtenerFacturasPorAnio"),o=n("subirArchivoFacturas"),l=n("actualizarFactura"),c=n("eliminarFactura"),d=window.innerWidth<768,p=new Date().getFullYear(),{loading:g,fetchFacturasPorAnio:h,deleteFactura:v}=Xm(),[y,x]=m.useState(p),[w,E]=m.useState([]),[N,A]=m.useState(!1),[S,R]=m.useState(""),[C,T]=m.useState(""),[_,U]=m.useState(!1),[z,L]=m.useState(null),[B,X]=m.useState(!1),[te,ne]=m.useState(!1),[se,ie]=m.useState(""),[W,Z]=m.useState("success");m.useEffect(()=>{if(!a){E([]);return}h(y).then(E)},[y,h,a]);const k=m.useMemo(()=>w.filter(P=>!S||P.entidad===S).filter(P=>!C||P.metodoPago===C).reduce((P,ce)=>P+Number(ce.valor||0),0),[w,S,C]),F=m.useMemo(()=>w.filter(P=>!S||P.entidad===S).filter(P=>!C||P.metodoPago===C),[w,S,C]),re=P=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(P),V=P=>{window.open(P.link,"_blank")},le=async()=>{if(!z)return;const P=await v(z.registroId);P.ok?(E(ce=>ce.filter(pe=>pe.registroId!==z.registroId)),Z("success"),ie(P.mensaje),ne(!0)):(Z("warning"),ie(P.mensaje),ne(!0)),U(!1),L(null)},O=[...new Set(w.map(P=>P.entidad))],q=[...new Set(w.map(P=>P.metodoPago))],ae=()=>{h(y).then(E)};return i.jsxs("div",{className:"container mt-4 facturas-container",children:[i.jsxs("div",{className:"header-flex",children:[i.jsxs("h2",{children:["🧾 Facturas ",y]}),i.jsxs("div",{className:"d-flex align-items-center gap-3",children:[i.jsxs("strong",{children:["Total: ",re(k)]}),!d&&i.jsx("button",{disabled:!o,className:"btn btn-primary",onClick:()=>A(!0),children:"➕ Subir factura"})]})]}),a?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"filtros d-flex gap-2 my-3",children:[i.jsx("select",{className:"form-select w-auto",value:y,onChange:P=>x(P.target.value),children:Array.from({length:10}).map((P,ce)=>{const pe=p-ce;return i.jsx("option",{children:pe},pe)})}),i.jsxs("select",{className:"form-select w-auto",value:S,onChange:P=>R(P.target.value),children:[i.jsx("option",{value:"",children:"Todas las entidades"}),O.map(P=>i.jsx("option",{value:P,children:P},P))]}),i.jsxs("select",{className:"form-select w-auto",value:C,onChange:P=>T(P.target.value),children:[i.jsx("option",{value:"",children:"Todos los métodos"}),q.map(P=>i.jsx("option",{value:P,children:P},P))]})]}),g?d?i.jsx("div",{className:"facturas-mobile",children:Array.from({length:5}).map((P,ce)=>i.jsx(sy,{isMobile:!0},ce))}):i.jsx("div",{className:"table-responsive facturas-por-anio",children:i.jsxs("table",{className:"table table-bordered",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{children:"Entidad"}),i.jsx("th",{children:"Descripción"}),i.jsx("th",{children:"Valor"}),i.jsx("th",{children:"Método"}),i.jsx("th",{})]})}),i.jsx("tbody",{children:Array.from({length:5}).map((P,ce)=>i.jsx(sy,{isMobile:!1},ce))})]})}):F.length===0?i.jsx("div",{className:"Facturas-Loading-CargandoFacturas",children:i.jsx("p",{children:"No hay facturas con esos filtros."})}):i.jsxs(i.Fragment,{children:[!d&&i.jsx("div",{className:"table-responsive facturas-por-anio",children:i.jsxs("table",{className:"table table-bordered table-hover",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{children:"Entidad"}),i.jsx("th",{children:"Descripción"}),i.jsx("th",{children:"Valor"}),i.jsx("th",{children:"Método"}),i.jsx("th",{})]})}),i.jsx("tbody",{children:F.map(P=>i.jsxs("tr",{children:[i.jsx("td",{onClick:()=>V(P),children:P.entidad}),i.jsx("td",{onClick:()=>V(P),children:P.descripcion}),i.jsx("td",{onClick:()=>V(P),children:re(P.valor)}),i.jsx("td",{onClick:()=>V(P),children:P.metodoPago}),i.jsxs("td",{className:"acciones",children:[i.jsx("i",{className:`bi bi-pencil-square accion-icon ${l?"":"disabled-icon"}`,title:l?"Editar":"No tienes permisos para editar",onClick:()=>{l&&(L(P),X(!0))}}),i.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${c?"":"disabled-icon"}`,title:c?"Eliminar":"No tienes permisos para eliminar",onClick:()=>{c&&(L(P),U(!0))}})]})]},P.registroId))})]})}),d&&i.jsx("div",{className:"facturas-mobile",children:F.map(P=>i.jsxs("div",{className:"factura-card",onClick:()=>V(P),children:[i.jsxs("div",{className:"card-top",children:[i.jsx("div",{className:"entidad",children:P.entidad}),i.jsx("div",{className:"valor",children:re(P.valor)})]}),i.jsx("div",{className:"descripcion",children:P.descripcion}),i.jsxs("div",{className:"acciones-mobile",children:[i.jsx("i",{className:`bi bi-pencil-square accion-icon ${l?"":"disabled-icon"}`,title:l?"Editar":"No tienes permisos para editar",onClick:ce=>{ce.stopPropagation(),l&&(L(P),X(!0))}}),i.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${c?"":"disabled-icon"}`,title:c?"Eliminar":"No tienes permisos para eliminar",onClick:ce=>{ce.stopPropagation(),c&&(L(P),U(!0))}})]})]},P.registroId))})]})]}):i.jsx("div",{className:"Facturas-Loading-CargandoFacturas",children:i.jsx("p",{children:"No tienes permisos para visualizar facturas."})}),d&&o&&i.jsx("button",{className:"fab-subir",onClick:()=>A(!0),children:i.jsx("i",{className:"bi bi-plus-lg"})}),N&&o&&i.jsx(QT,{onClose:()=>A(!1),onSaved:ae}),i.jsx(Na,{show:_,onHide:()=>U(!1),title:"Eliminar factura",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar la factura de"," ",i.jsx("strong",{children:z?.entidad})," por"," ",i.jsx("strong",{children:re(z?.valor||0)}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:le}),i.jsx(WT,{show:B,factura:z,onHide:()=>X(!1),onUpdated:ae}),i.jsx(Ko,{position:"bottom-end",className:"p-3",children:i.jsxs(Ct,{bg:W,show:te,autohide:!0,delay:3e3,onClose:()=>ne(!1),children:[i.jsx(Ct.Header,{children:i.jsx("strong",{className:"me-auto",children:"Productos"})}),i.jsx(Ct.Body,{className:"text-white",children:se})]})})]})}const tR=()=>{const n=_n();return i.jsxs("div",{className:"legal-container",children:[i.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[i.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),i.jsx("h1",{children:"Política de Privacidad"}),i.jsx("p",{children:"Última actualización: 20 de enero de 2026"}),i.jsxs("p",{children:["Esta Política de Privacidad describe cómo ",i.jsx("strong",{children:"AppDeclaración"})," recopila, utiliza y protege su información al utilizar nuestro servicio de autenticación a través de Google."]}),i.jsxs("div",{class:"highlight",children:[i.jsx("strong",{children:"Nota importante sobre la arquitectura:"})," Esta aplicación es una herramienta descentralizada. Los datos que usted genera se almacenan exclusivamente en su propia cuenta de Google Drive a través de su implementación personal de Google Apps Script. Nosotros no tenemos acceso a sus archivos ni a su información privada."]}),i.jsx("h2",{children:"1. Información que recopilamos"}),i.jsx("p",{children:"Nuestra aplicación utiliza los servicios de Google OAuth para la autenticación. Al iniciar sesión, solicitamos acceso a:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Dirección de correo electrónico:"})," Para identificar su cuenta y gestionar los permisos de acceso."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Información básica de perfil (Nombre y foto):"})," Para personalizar su experiencia dentro de la interfaz."]})]}),i.jsx("h2",{children:"1.1 Información que NO recopilamos"}),i.jsx("p",{children:"AppDeclaración no recopila, almacena ni procesa:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Contraseñas de Google."}),i.jsx("li",{children:"Contenido de correos electrónicos."}),i.jsx("li",{children:"Archivos personales fuera del entorno creado por la aplicación."}),i.jsx("li",{children:"Información bancaria, financiera o datos de pago."})]}),i.jsx("h2",{children:"2. Uso de la información"}),i.jsx("p",{children:"La información obtenida a través de Google se utiliza únicamente para:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Validar su identidad y permitir el acceso a las funciones del backend."}),i.jsx("li",{children:"Registrar logs de auditoría de inicio de sesión (almacenados en su propio Google Drive)."}),i.jsx("li",{children:"Garantizar que el sistema de permisos y roles funcione correctamente."})]}),i.jsx("h2",{children:"3. Almacenamiento de datos"}),i.jsxs("p",{children:["Todos los datos operativos (usuarios, logs, configuraciones y archivos) se almacenan en archivos JSON dentro de la infraestructura de ",i.jsx("strong",{children:"Google Drive del usuario"}),". Esta aplicación no posee una base de datos centralizada y los desarrolladores no pueden ver, editar ni eliminar sus datos."]}),i.jsx("h2",{children:"4. Intercambio de datos con terceros"}),i.jsxs("p",{children:[i.jsx("strong",{children:"No vendemos, alquilamos ni compartimos"})," su información personal con terceros."]}),i.jsx("p",{children:"El frontend de la aplicación puede estar alojado en plataformas como GitHub Pages, las cuales únicamente sirven contenido estático y no tienen acceso a información personal, datos de autenticación ni archivos del usuario."}),i.jsx("p",{children:"Los datos solo fluyen entre su navegador, el frontend alojado en GitHub y su backend personal en Google Apps Script."}),i.jsx("h2",{children:"5. Seguridad"}),i.jsx("p",{children:"La seguridad de su información se apoya en los protocolos y estándares de seguridad proporcionados por Google. Al utilizar OAuth 2.0, la aplicación no conoce, no solicita ni almacena su contraseña de Google en ningún momento."}),i.jsx("h2",{children:"6. Sus Derechos"}),i.jsxs("p",{children:["Usted puede revocar el acceso de esta aplicación a su cuenta de Google en cualquier momento a través de la configuración de seguridad de su cuenta de Google en: ",i.jsx("a",{href:"https://myaccount.google.com/permissions",target:"_blank",children:"Google - Aplicaciones con acceso a tu cuenta"}),"."]}),i.jsx("h2",{children:"7. Cambios a esta Política de Privacidad"}),i.jsx("p",{children:"Esta Política de Privacidad puede actualizarse ocasionalmente para reflejar mejoras técnicas o cambios normativos. Cualquier modificación será publicada en esta misma página con la fecha de última actualización correspondiente."}),i.jsx("h2",{children:"8. Contacto"}),i.jsxs("p",{children:["Si tiene preguntas sobre esta política, puede contactarnos en: ",i.jsx("strong",{children:"hectorjaviermorenoh@gmail.com"})]})]})},nR=()=>{const n=_n();return i.jsxs("div",{className:"terminos-container",children:[i.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[i.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),i.jsx("h1",{children:"Términos y Condiciones de Uso"}),i.jsx("p",{children:"Última actualización: 20 de enero de 2026"}),i.jsxs("div",{class:"notice",children:[i.jsx("strong",{children:"Aviso Importante sobre la Arquitectura del Servicio:"}),i.jsx("br",{}),"AppDeclaración es una aplicación descentralizada. El frontend es centralizado, pero el backend, el procesamiento de datos y el almacenamiento se ejecutan de forma privada dentro de la cuenta personal de Google del usuario, mediante Google Apps Script y Google Drive."]}),i.jsx("h2",{children:"1. Aceptación de los Términos"}),i.jsx("p",{children:"Al acceder, instalar o utilizar AppDeclaración, usted acepta quedar legalmente vinculado a los presentes Términos y Condiciones. Si no está de acuerdo con alguno de ellos, debe abstenerse de utilizar la aplicación."}),i.jsx("h2",{children:"2. Descripción del Servicio"}),i.jsx("p",{children:"AppDeclaración es una herramienta de organización documental y gestión tributaria personal, orientada a facilitar la preparación y el control de información relacionada con declaraciones de renta y soportes fiscales."}),i.jsx("p",{children:"La aplicación permite, entre otras funciones:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Registrar y clasificar entidades emisoras de certificados y documentos tributarios."}),i.jsx("li",{children:"Organizar automáticamente archivos y fotografías en carpetas estructuradas por año gravable y categoría."}),i.jsx("li",{children:"Gestionar datos fiscales básicos como NIT, nombres e identificaciones."}),i.jsx("li",{children:"Administrar accesos mediante tokens y roles definidos por el propio usuario."}),i.jsx("li",{children:"Generar respaldos completos (backups) en formato ZIP de la información almacenada."})]}),i.jsxs("p",{children:["El software se entrega ",i.jsx("strong",{children:"“tal cual”"})," y su funcionamiento depende de que el usuario mantenga una cuenta de Google activa y correctamente configurada."]}),i.jsx("h2",{children:"3. Responsabilidad del Usuario"}),i.jsx("p",{children:"El usuario acepta y reconoce que es el único y exclusivo responsable de:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"La correcta instalación, despliegue y mantenimiento del backend en su cuenta de Google Apps Script."}),i.jsx("li",{children:"La integridad, disponibilidad y confidencialidad de los archivos y carpetas generados en su Google Drive."}),i.jsx("li",{children:"La veracidad y exactitud de la información tributaria ingresada."}),i.jsx("li",{children:"El cumplimiento de las leyes tributarias y fiscales aplicables en su jurisdicción."})]}),i.jsxs("div",{class:"warning",children:[i.jsx("h2",{children:"4. Integridad del Código y Seguridad del Script"}),i.jsx("p",{children:"Para garantizar la seguridad de su información y el correcto funcionamiento del sistema, el usuario se compromete a cumplir las siguientes normas de seguridad técnica:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Origen Oficial:"})," El código de Backend (Google Apps Script) debe ser obtenido exclusivamente desde la aplicación oficial de ",i.jsx("strong",{children:"AppDeclaración"}),". No utilice códigos proporcionados por terceros, foros o fuentes no oficiales."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Prohibición de Alteración:"})," El usuario no debe modificar, editar ni alterar el código fuente proporcionado para el backend. Cualquier cambio manual puede introducir fallos de seguridad, pérdida de datos o comportamientos imprevistos."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Ejecución por el Propietario:"})," El despliegue y ejecución del script en el entorno de Google Apps Script debe ser realizado personalmente por el dueño de la cuenta de Google. No permita que terceros accedan a su entorno de desarrollo para pegar o ejecutar códigos en su nombre."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Prevención de Código Malicioso:"}),' El uso de versiones modificadas o "clones" de la aplicación representa un riesgo crítico de seguridad. El desarrollador original no se hace responsable de las consecuencias derivadas del uso de código alterado o distribuido por canales ajenos a la aplicación oficial.']})]})]}),i.jsx("h2",{children:"5. Seguridad de la Cuenta de Google"}),i.jsx("p",{children:"Dado que AppDeclaración opera íntegramente sobre la infraestructura personal del usuario, este reconoce que:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Es plenamente responsable de la seguridad de su cuenta de Google."}),i.jsx("li",{children:"Debe proteger sus credenciales de acceso y no compartirlas con terceros."}),i.jsxs("li",{children:["Se recomienda de forma expresa habilitar mecanismos de seguridad adicionales, como la ",i.jsx("strong",{children:"autenticación en dos pasos (2FA)"}),"."]}),i.jsx("li",{children:"Cualquier acceso no autorizado derivado de una configuración insegura de la cuenta es responsabilidad exclusiva del usuario."})]}),i.jsx("p",{children:"El desarrollador no tiene acceso, control ni visibilidad sobre las credenciales, datos o archivos almacenados en la cuenta del usuario."}),i.jsx("h2",{children:"6. Privacidad y Datos"}),i.jsx("p",{children:"AppDeclaración no utiliza bases de datos centralizadas ni almacena información en servidores controlados por el desarrollador. Toda la información reside exclusivamente en archivos locales del Google Drive del usuario, tales como:"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("code",{children:"productos.json"})}),i.jsx("li",{children:i.jsx("code",{children:"bddatos.json"})}),i.jsx("li",{children:i.jsx("code",{children:"facturas.json"})}),i.jsx("li",{children:"y otros archivos generados por la aplicación"})]}),i.jsx("h2",{children:"7. Limitación de Responsabilidad"}),i.jsx("p",{children:"Bajo ninguna circunstancia el desarrollador será responsable por:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Pérdida, corrupción o eliminación de datos almacenados en la cuenta del usuario."}),i.jsxs("li",{children:["Errores derivados de información incorrecta o ",i.jsx("strong",{children:"código de backend modificado"})," por el usuario."]}),i.jsx("li",{children:"Interrupciones del servicio ocasionadas por cambios, fallos o políticas de Google Cloud, Google Drive, Apps Script o GitHub."}),i.jsx("li",{children:"Daños directos o indirectos derivados del uso o imposibilidad de uso de la aplicación."})]}),i.jsx("h2",{children:"8. Modificaciones del Servicio"}),i.jsx("p",{children:"El desarrollador podrá actualizar el frontend para mejoras o correcciones. La actualización del backend desplegado en la cuenta del usuario es responsabilidad exclusiva de este último."}),i.jsx("h2",{children:"9. Propiedad Intelectual"}),i.jsxs("p",{children:["El código fuente, diseño y concepto de AppDeclaración son propiedad de ",i.jsx("strong",{children:"Hector Javier Moreno"}),". Se concede una licencia de uso personal, no exclusiva, no transferible y revocable."]}),i.jsx("h2",{children:"10. Terminación"}),i.jsx("p",{children:"El usuario puede dejar de utilizar el servicio en cualquier momento eliminando el script de su cuenta de Google y revocando los permisos OAuth. El desarrollador no puede cancelar ni eliminar cuentas del usuario, dado que la infraestructura es completamente privada."}),i.jsx("h2",{children:"11. Uso Gratuito y Donaciones de Carácter Simbólico"}),i.jsxs("p",{children:["AppDeclaración es una herramienta de uso ",i.jsx("strong",{children:"totalmente gratuito"}),". El acceso, instalación y utilización de la aplicación no implican ningún costo para el usuario."]}),i.jsxs("p",{children:["De manera opcional, el usuario podrá realizar una ",i.jsx("strong",{children:"donación voluntaria y de carácter simbólico"}),", como un gesto de buena voluntad si considera que la aplicación le ha resultado útil o le ha ayudado a resolver una necesidad puntual."]}),i.jsx("p",{children:"Estas donaciones tienen un sentido meramente simbólico —por ejemplo, el valor de un café— y no constituyen en ningún caso un pago por el uso del software."}),i.jsxs("ul",{children:[i.jsx("li",{children:"La donación es completamente voluntaria y no obligatoria."}),i.jsx("li",{children:"No existe un monto mínimo ni máximo establecido."}),i.jsx("li",{children:"La donación no otorga derechos adicionales, funcionalidades extra ni soporte preferencial."}),i.jsx("li",{children:"La no realización de una donación no limita ni condiciona el uso de la aplicación."})]}),i.jsx("p",{children:"En caso de que el usuario decida realizar una donación, podrá hacerlo a través del enlace de donaciones en la aplicación."}),i.jsx("h2",{children:"12. Contacto"}),i.jsxs("p",{children:["Para consultas relacionadas con estos términos, puede contactar a:",i.jsx("br",{}),i.jsx("strong",{children:"hectorjaviermorenoh@gmail.com"})]}),i.jsx("h2",{children:"13. Legislación Aplicable"}),i.jsx("p",{children:"Estos Términos y Condiciones se rigen por la legislación vigente en la República de Colombia. Cualquier controversia será resuelta conforme a las normas aplicables en dicha jurisdicción."}),i.jsx("div",{class:"footer",children:"© 2026 AppDeclaración. Todos los derechos reservados."})]})};function aR(){const n=_n();return i.jsx("div",{className:"acerca-de-container container my-5 animate__animated animate__fadeIn",children:i.jsx("div",{className:"row justify-content-center",children:i.jsxs("div",{className:"col-md-10 col-lg-8",children:[i.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[i.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),i.jsxs("div",{className:"card shadow-sm p-4 p-md-5",children:[i.jsxs("header",{className:"text-center mb-3",children:[i.jsx("h1",{className:"fw-bold text-primary",children:"AppDeclaración"}),i.jsx("p",{className:"lead text-muted",children:"Tu asistente personal para la organización tributaria"})]}),i.jsxs("section",{className:"mb-3",children:[i.jsx("h4",{className:"fw-bold border-bottom pb-2 mb-3",children:"¿Qué es AppDeclaración?"}),i.jsx("p",{children:"Es una solución tecnológica diseñada para eliminar el estrés de la temporada de impuestos. Su propósito principal es ayudarte a recopilar, organizar y visualizar los certificados y facturas necesarios para tu declaración de renta de forma eficiente y centralizada."})]}),i.jsxs("section",{className:"mb-3",children:[i.jsx("h4",{className:"fw-bold border-bottom pb-2 mb-3",children:"Características Principales"}),i.jsxs("div",{className:"row g-4",children:[i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"d-flex align-items-start",children:[i.jsx("div",{className:"badge bg-primary-soft text-primary p-3 me-3",children:i.jsx("i",{className:"bi bi-folder-check fs-4"})}),i.jsxs("div",{children:[i.jsx("h6",{className:"fw-bold mb-1",children:"Organización Inteligente"}),i.jsx("p",{className:"small text-muted",children:"Archivos organizados automáticamente por año gravable y categorías."})]})]})}),i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"d-flex align-items-start",children:[i.jsx("div",{className:"badge bg-success-soft text-success p-3 me-3",children:i.jsx("i",{className:"bi bi-shield-lock fs-4"})}),i.jsxs("div",{children:[i.jsx("h6",{className:"fw-bold mb-1",children:"Privacidad Total"}),i.jsx("p",{className:"small text-muted",children:"Los datos nunca salen de tu cuenta de Google. Tú eres el único dueño."})]})]})}),i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"d-flex align-items-start",children:[i.jsx("div",{className:"badge bg-info-soft text-info p-3 me-3",children:i.jsx("i",{className:"bi bi-camera fs-4"})}),i.jsxs("div",{children:[i.jsx("h6",{className:"fw-bold mb-1",children:"Soportes y Facturas"}),i.jsx("p",{className:"small text-muted",children:"Sube archivos o toma fotos de tus facturas de compra al instante."})]})]})}),i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"d-flex align-items-start",children:[i.jsx("div",{className:"badge bg-warning-soft text-warning p-3 me-3",children:i.jsx("i",{className:"bi bi-file-zip fs-4"})}),i.jsxs("div",{children:[i.jsx("h6",{className:"fw-bold mb-1",children:"Backup Seguro"}),i.jsx("p",{className:"small text-muted",children:"Exporta toda tu información en un archivo ZIP con un solo clic."})]})]})})]})]}),i.jsxs("section",{className:"bg-light p-2 rounded mb-3",children:[i.jsx("h4",{className:"fw-bold mb-3",children:"Arquitectura Descentralizada"}),i.jsxs("p",{className:"mb-0",children:["A diferencia de otras aplicaciones, ",i.jsx("strong",{children:"AppDeclaración"})," no utiliza bases de datos centrales. Funciona mediante un modelo donde el frontend se conecta directamente a tu propio backend en",i.jsx("strong",{children:" Google Apps Script"}),". Esto garantiza que tus datos tributarios residan siempre dentro de tu espacio personal de ",i.jsx("strong",{children:"Google Drive"}),"."]})]}),i.jsxs("footer",{className:"text-center mt-3 pt-4 border-top",children:[i.jsxs("p",{className:"mb-1 text-muted",children:["Desarrollado por ",i.jsx("strong",{children:"Hector Javier Moreno"})]}),i.jsxs("div",{className:"mt-3",children:[i.jsx("p",{className:"small mb-2",children:"Si esta herramienta te ha sido útil, puedes apoyar su mantenimiento:"}),i.jsxs(Rn,{to:"/donaciones",className:"btn btn-warning fw-bold",children:[i.jsx("i",{className:"bi bi-cup-hot me-2"}),"Invítame un café"]})]})]})]})]})})})}const rR="/appdeclaracion/assets/qr_nequi-BBArSa2A.png";function oR(){const n=_n(),[a,o]=m.useState(!1),l="3103434753",c=()=>{navigator.clipboard.writeText(l),o(!0),setTimeout(()=>o(!1),2e3)};return i.jsx("div",{className:"donaciones-container container my-5 animate__animated animate__fadeIn",children:i.jsx("div",{className:"row justify-content-center",children:i.jsxs("div",{className:"col-md-9 col-lg-7",children:[i.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[i.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),i.jsxs("div",{className:"card shadow-lg border-0 p-4 p-md-5 text-center",children:[i.jsxs("header",{className:"mb-3 text-center",children:[i.jsx("div",{className:"badge bg-warning-soft text-warning p-3 mb-3 fs-4 rounded-circle",children:i.jsx("i",{className:"bi bi-cup-hot-fill"})}),i.jsx("h1",{className:"fw-bold text-dark",children:"¿Te gustaría invitarme un café?"}),i.jsxs("p",{className:"lead text-muted mx-auto",style:{maxWidth:"500px"},children:["AppDeclaración es y seguirá siendo una herramienta ",i.jsx("strong",{children:"totalmente gratuita"}),". Si te ha sido útil, cualquier aporte voluntario es bienvenido para apoyar su mantenimiento."]})]}),i.jsxs("div",{className:"row g-4 align-items-center mb-5",children:[i.jsxs("div",{className:"col-md-6 border-end-md",children:[i.jsx("div",{className:"qr-wrapper p-3 bg-white border rounded-4 shadow-sm mx-auto",style:{maxWidth:"250px"},children:i.jsx("img",{src:rR,alt:"Código QR Nequi para donaciones",className:"img-fluid rounded-3"})}),i.jsx("div",{className:"small text-muted mt-2",children:"Escanea desde tu app Nequi"})]}),i.jsxs("div",{className:"col-md-6 text-md-start px-md-4",children:[i.jsx("h6",{className:"text-uppercase fw-bold text-secondary mb-3 small",children:"Medios en Colombia"}),i.jsxs("div",{className:"d-flex align-items-center mb-3",children:[i.jsx("span",{className:"badge bg-nequi me-2",children:"Nequi"}),i.jsx("span",{className:"badge bg-breb",children:"Bre-B"})]}),i.jsxs("div",{className:"info-cuenta p-3 border rounded-3 bg-white shadow-sm mb-3",children:[i.jsx("div",{className:"small text-muted mb-1",children:"Número de cuenta / Celular"}),i.jsx("div",{className:"h4 fw-bold mb-1 text-dark letter-spacing-1",children:l}),i.jsx("div",{className:"small text-primary fw-medium",children:"A nombre de: Hector Javier Moreno"})]}),i.jsxs("button",{className:`btn ${a?"btn-success":"btn-outline-dark"} w-100 fw-bold`,onClick:c,children:[i.jsx("i",{className:`bi ${a?"bi-check-all":"bi-clipboard"} me-2`}),a?"¡Copiado!":"Copiar número"]})]})]}),i.jsxs("div",{className:"disclaimer p-3 rounded-3 text-center mx-auto",style:{maxWidth:"600px"},children:[i.jsx("i",{className:"bi bi-rocket-takeoff me-2"}),"Tu apoyo es un reconocimiento al tiempo que ",i.jsx("strong",{children:"AppDeclaración"})," te ha ahorrado en la recopilación de tus documentos. ",i.jsx("strong",{children:"¡Gracias por valorar este desarrollo!"})]})]})]})})})}const $0=({isOpen:n,onClose:a,titulo:o,codigo:l})=>{const[c,d]=m.useState(!1),p=()=>{navigator.clipboard.writeText(l),d(!0),setTimeout(()=>{d(!1)},2e3)};return n?i.jsx("div",{className:"modal-backend-overlay",onClick:a,children:i.jsxs("div",{className:"modal-backend",onClick:g=>g.stopPropagation(),children:[i.jsx("h2",{children:o}),i.jsx("pre",{children:i.jsx("code",{children:l})}),i.jsxs("div",{className:"modal-botones",children:[i.jsx("button",{onClick:p,children:"Copiar código"}),i.jsx("button",{onClick:a,children:"Cerrar"})]}),c&&i.jsx("p",{className:"mensaje-copiado",children:"Script copiado correctamente"})]})}):null},sR=`/******************************
 * Version
 ******************************/
 const VERSION = "0706261306PM";

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
  TAMANO_MAX_MB: 15,
  TIPOS_PERMITIDOS: ["pdf", "jpg", "jpeg", "png", "docx", "txt", "xlsx"],
  TOKEN_EXP_MINUTOS: 180
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
// function generarTokenPropio(usuarioInfo) {
//   const configCentral = obtenerConfigCentral();
//   const ZEICHENSCHLUESSEL = configCentral.llave;
//   const config = leerJSON(JSON_CONFIGURACION) || {};
//   const minutosExp = config.TOKEN_EXP_MINUTOS || 60;
//   const payload = {
//     correo: usuarioInfo.correo,
//     rol: usuarioInfo.rol,
//     nombre: usuarioInfo.nombre,
//     picture: usuarioInfo.picture,
//     permisos: usuarioInfo.permisos,
//     iat: Math.floor(Date.now() / 1000),
//     exp: Math.floor(Date.now() / 1000) + (minutosExp * 60)
//   };

//   const payloadStr = JSON.stringify(payload);
//   const payloadB64 = Utilities.base64EncodeWebSafe(payloadStr, Utilities.Charset.UTF_8);
//   const signature = Utilities.computeHmacSha256Signature(payloadB64, ZEICHENSCHLUESSEL);
//   const signatureB64 = Utilities.base64EncodeWebSafe(signature);
//   return payloadB64 + "." + signatureB64;
// }
function generarTokenPropio(usuarioInfo) {
  const configCentral = obtenerConfigCentral();
  const ZEICHENSCHLUESSEL = configCentral.llave;
  const config = leerJSON(JSON_CONFIGURACION) || {};
  const minutosExp = config.TOKEN_EXP_MINUTOS || 60;

  const header = { alg: "HS256", typ: "JWT" };
  const headerStr = JSON.stringify(header);
  const headerB64 = Utilities.base64EncodeWebSafe(headerStr, Utilities.Charset.UTF_8);

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

  const tokenData = headerB64 + "." + payloadB64;
  const signature = Utilities.computeHmacSha256Signature(tokenData, ZEICHENSCHLUESSEL);
  const signatureB64 = Utilities.base64EncodeWebSafe(signature);
  return tokenData + "." + signatureB64;
}
// function verificarTokenPropio(token) {
//   const configCentral = obtenerConfigCentral();
//   const ZEICHENSCHLUESSEL = configCentral.llave;

//   if (!token) {
//     return { autorizado: false, mensaje: "No se proporcionó token" };
//   }

//   try {
//     const parts = token.split('.');
//     if (parts.length !== 2) {
//       return { autorizado: false, mensaje: "Token malformado" };
//     }

//     const [payloadB64, signatureB64] = parts;

//     const signature = Utilities.base64DecodeWebSafe(signatureB64);
//     const expectedSignature = Utilities.computeHmacSha256Signature(payloadB64, ZEICHENSCHLUESSEL);

//     if (signature.length !== expectedSignature.length || !signature.every((byte, i) => byte === expectedSignature[i])) {
//       return { autorizado: false, mensaje: "Firma de token inválida" };
//     }

//     const payloadStr = Utilities.newBlob(Utilities.base64DecodeWebSafe(payloadB64)).getDataAsString();
//     const payload = JSON.parse(payloadStr);

//     if (payload.exp * 1000 < Date.now()) {
//       return {
//         autorizado: false,
//         status: "token_invalido",
//         mensaje: "Token expirado",
//         ...payload
//       };
//     }
//     return { autorizado: true, ...payload };

//   } catch (err) {
//     return {
//       autorizado: false,
//       mensaje: "Error al validar token: " + err.message };
//   }
// }
function verificarTokenPropio(token) {
  const configCentral = obtenerConfigCentral();
  const ZEICHENSCHLUESSEL = configCentral.llave;

  if (!token) {
    return { autorizado: false, mensaje: "No se proporcionó token" };
  }

  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return { autorizado: false, mensaje: "Token malformado" };
    }

    const [headerB64, payloadB64, signatureB64] = parts;

    const tokenData = headerB64 + "." + payloadB64;
    const signature = Utilities.base64DecodeWebSafe(signatureB64);
    const expectedSignature = Utilities.computeHmacSha256Signature(tokenData, ZEICHENSCHLUESSEL);

    if (signature.length !== expectedSignature.length || !signature.every((byte, i) => byte === expectedSignature[i])) {
      return { autorizado: false, mensaje: "Firma de token inválida" };
    }

    const payloadStr = Utilities.newBlob(Utilities.base64DecodeWebSafe(payloadB64)).getDataAsString();
    const payload = JSON.parse(payloadStr);

    if (payload.exp * 1000 < Date.now()) {
      return {
        autorizado: false,
        status: "token_invalido",
        mensaje: "Token expirado"
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

    const correoEjecutor = usuario?.correo || "sistema";

    const carpetaPrincipal = obtenerOCrearCarpetaRaiz();
    const fecha = new Date();

    const nombreZip = \`Backup_Declaracion_\${fecha.getFullYear()}-\${fecha.getMonth() + 1}-\${fecha.getDate()}_\${fecha.getHours()}-\${fecha.getMinutes()}.zip\`;

    const blobs = [];

    recorrerCarpetaRecursiva(carpetaPrincipal, "", blobs);

    if (blobs.length === 0) {
      return {
        status: "warning",
        mensaje: "❌ No se encontraron archivos para respaldar."
      };
    }

    const blobZip = Utilities.zip(blobs, nombreZip);
    const base64Data = Utilities.base64Encode(blobZip.getBytes());

    registrarLog("backup", correoEjecutor, \`Se generó un backup descargado por el usuario\`);

    return {
      status: "ok",
      base64: base64Data,
      mimeType: blobZip.getContentType(),
      nombreArchivo: nombreZip,
      mensaje: "✅ Backup generado con éxito"
    };

  } catch (err) {
    manejarError(err, "generarBackupZIP", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al generar backup: ",
      detalle: err.message || String(err),
    });

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
function recorrerCarpetaRecursiva(carpetaActual, rutaAcumulada, blobs) {
  const archivos = carpetaActual.getFiles();
  while (archivos.hasNext()) {
    const archivo = archivos.next();
    const blob = archivo.getBlob();

    if (rutaAcumulada !== "") {
      blob.setName(\`\${rutaAcumulada}/\${archivo.getName()}\`);
    } else {
      blob.setName(archivo.getName());
    }
    blobs.push(blob);
  }

  const subCarpetas = carpetaActual.getFolders();
  while (subCarpetas.hasNext()) {
    const subCarpeta = subCarpetas.next();

    const nuevaRuta = (rutaAcumulada !== "")
      ? \`\${rutaAcumulada}/\${subCarpeta.getName()}\`
      : subCarpeta.getName();

    recorrerCarpetaRecursiva(subCarpeta, nuevaRuta, blobs);
  }
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


`,iR="/appdeclaracion/assets/imgBackend1-DSJ-bLa1.webp",lR="/appdeclaracion/assets/imgBackend2-Cqt62vUJ.webp",cR="/appdeclaracion/assets/imgBackend3-DaVLght5.webp",uR="/appdeclaracion/assets/imgBackend4-B-5yDjcs.webp",dR="/appdeclaracion/assets/imgBackend5-DVl6r9fh.webp",fR="/appdeclaracion/assets/imgBackend6-B2Xs4tWE.webp",mR="/appdeclaracion/assets/imgBackend7-N9ASCtVG.webp",pR="/appdeclaracion/assets/imgBackend8-BwprXXyy.webp",hR="/appdeclaracion/assets/imgBackend9-D3jD8_Vx.webp",gR=()=>{const[n,a]=m.useState(!1),o=()=>{window.open("https://script.google.com/home/","_blank")},l=[{img:iR,descripcion:"Ingrese a la consola de Google Apps Script para comenzar con la configuración:",puntos:["Escriba https://script.google.com/home/ en su navegador.","O haga clic en el botón 'Abrir Apps Script' de arriba."]},{img:lR,descripcion:"Inicie un nuevo proyecto desde el panel principal:",puntos:["Haga clic en el botón 'Nuevo proyecto' ubicado en la parte superior izquierda."]},{img:cR,descripcion:"Configure el código base del backend:",puntos:["Cambie el nombre del proyecto a 'AppDeclaracion' haciendo doble click encima del nombre .","Ubique el archivo Codigo.gs y elimine todo su contenido.","Pegue el código proporcionado por AppDeclaracion el cual puede ver y copiar en el siguiente botón."]},{img:uR,descripcion:"Habilite los servicios necesarios de Google:",puntos:["En el panel izquierdo, haga clic en el símbolo '+' en Servicios para agregar un Drive.","Busque y seleccione 'Drive API'.","Seleccione la versión v3 y haga clic en 'Añadir'."]},{img:dR,descripcion:"Inicie el proceso de publicación:",puntos:["Haga clic en el botón azul 'Implementar' (arriba a la derecha).","Seleccione 'Nueva implementación'.","Haga clic en el icono de engranaje y elija 'Aplicación web'."]},{img:fR,descripcion:"Configure los parámetros de acceso de la aplicación:",puntos:["Descripción: 'Versión inicial'.","Ejecutar como: 'Yo'.","Quién tiene acceso: 'Cualquier usuario' (esto es vital para la conexión).","Haga clic en el botón 'Implementar'."]},{img:mR,descripcion:"Autorice los permisos de seguridad de Google:",puntos:["Haga clic en 'Autorizar acceso'.","Seleccione su cuenta de Google.","Haga clic en 'Advanced' y luego en 'Go to AppDeclaracion (unsafe)'.","Permita todos los accesos y copie la URL generada (URL de la aplicación web) en un archivo de texto para utilizarla posteriormente en el worker."]},{img:pR,descripcion:"Ejecute la configuración inicial de la base de datos:",puntos:["En la barra de herramientas superior, seleccione la función 'inicializarSistema'.","Haga clic en el botón 'Ejecutar'.","Espere a que el registro de ejecución finalice correctamente.","En el logo de Apps Script Superior Izquierdo de colores hacer click para regresar al administrador de proyectos"]},{img:hR,descripcion:"Active el acceso programático final:",puntos:["En el panel izquierdo hacer click en el icono de engranaje de configuración.","Hacer click en 'API de Google Apps Script' el cual se debe encontrar desactivado","Hacer click en la parte derecha en el botón Switch o deslizante","Finalizado este paso y copiada la URL ya podemos cerrar Apps Script y pasar a la pestaña del Worker"]}];return i.jsxs("div",{className:"crear-backend",children:[i.jsx("h1",{children:"Crear Backend en Apps Script"}),i.jsx("div",{className:"video-container",children:i.jsx("iframe",{src:"https://player.vimeo.com/video/1182426720?h=ddeac77678&badge=0&autopause=0&player_id=0&app_id=58479",title:"Tutorial Backend Apps Script",allowFullScreen:!0,allow:"autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",referrerPolicy:"strict-origin-when-cross-origin",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),i.jsx("div",{className:"boton-container",children:i.jsx("button",{onClick:o,children:"Abrir Apps Script"})}),i.jsx("div",{className:"pasos-container",children:l.map((c,d)=>i.jsxs("div",{className:"paso",children:[i.jsx("img",{src:c.img,alt:`Paso ${d+1}`}),i.jsxs("div",{className:"paso-contenido",children:[i.jsxs("strong",{children:["Paso ",d+1,":"]}),i.jsx("p",{children:c.descripcion}),c.puntos&&i.jsx("ul",{children:c.puntos.map((p,g)=>i.jsx("li",{children:p},g))})]}),d===2&&i.jsx("div",{className:"boton-container",children:i.jsx("button",{onClick:()=>a(!0),children:"Ver código del Backend"})})]},d))}),i.jsx($0,{isOpen:n,onClose:()=>a(!1),titulo:"Código Backend Apps Script",codigo:sR})]})},vR=`export default {
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
`,bR="/appdeclaracion/assets/imgWorker1-DsxzgBXq.webp",yR="/appdeclaracion/assets/imgWorker2-BG05QrIG.webp",xR="/appdeclaracion/assets/imgWorker3-ByEQQa3f.webp",wR="/appdeclaracion/assets/imgWorker4-vNF1IGvm.webp",SR="/appdeclaracion/assets/imgWorker5-BMmv7aUK.webp",jR="/appdeclaracion/assets/imgWorker6-FbMqyreq.webp",ER="/appdeclaracion/assets/imgWorker7-DYrg8XBA.webp",NR=()=>{const[n,a]=m.useState(!1),o=()=>{window.open("https://dash.cloudflare.com/","_blank")},l=[{img:bR,descripcion:'Ingrese a la consola de Cloudflare escribiendo en el navegador https://dash.cloudflare.com/login o haciendo clic en el botón "Abrir Cloudflare". Luego:',puntos:["Haga clic en 'Continue with Google'","Seleccione su cuenta de Google","Haga clic en 'Continuar' para ingresar al panel."]},{img:yR,descripcion:"Dentro del panel de Cloudflare ubique el menú lateral izquierdo:",puntos:["Busque la sección 'Compute'","Haga clic en 'Workers & Pages'","Luego haga clic en el botón 'Create application'"]},{img:xR,descripcion:"En la pantalla de creación de la aplicación ubique la opción 'Start with hello world!' y haga clic en ella.",puntos:["Esto generará un Worker base que posteriormente será modificado con el código de AppDeclaracion el cual puede ver y copiar en el siguiente botón."]},{img:wR,descripcion:"En el campo 'Worker name' elimine el contenido existente y escriba:",puntos:["appdeclaracion","Luego haga clic en el botón 'Deploy' para crear el Worker."]},{img:SR,descripcion:"Una vez creado el Worker aparecerá una pantalla de confirmación.",puntos:["En esta pantalla haga clic en el botón 'Edit code' para abrir el editor del Worker."]},{img:jR,descripcion:"Dentro del editor ubique el archivo worker.js, elimine el código existente y pegue el proporcionado por AppDeclaracion. Luego, busque la línea 'const destino' y:",puntos:["Reemplace la URL entre comillas por la generada en Apps Script.","Asegúrese que inicie con https:// y termine en /exec.","Copie la URL pública del Worker que aparece en la parte superior derecha (esta es la que compartirá con los usuarios).","Haga clic en 'Deploy' y luego en el enlace 'appdeclaracion' para regresar."]},{img:ER,descripcion:"Al regresar al panel principal diríjase nuevamente a 'Workers & Pages':",puntos:["Verifique que aparezca el Worker llamado 'appdeclaracion'.","Esto confirma que el Worker fue creado y desplegado correctamente.","Finalizado este paso y copiada la URL que debe registrarse en la sección 'Configuración de Backends'. Es la misma dirección que deberá proporcionarle a su contador. Una vez que él le informe su correo electrónico, usted podrá registrarlo como nuevo usuario con los roles y permisos adecuados. Recuerde que tanto usted como el contador deben agregar esta URL del Worker en sus respectivos paneles de AppDeclaración para que el sistema funcione correctamente."]}];return i.jsxs("div",{className:"crear-backend",children:[i.jsx("h1",{children:"Crear worker"}),i.jsx("div",{className:"video-container",children:i.jsx("iframe",{src:"https://player.vimeo.com/video/1182429387?h=02f60cfc57&badge=0&autopause=0&player_id=0&app_id=58479",title:"Tutorial Backend Workwe CloudFlare",allowFullScreen:!0,allow:"autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",referrerPolicy:"strict-origin-when-cross-origin",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),i.jsx("div",{className:"boton-container",children:i.jsx("button",{onClick:o,children:"Abrir CloudFlare"})}),i.jsx("div",{className:"pasos-container",children:l.map((c,d)=>i.jsxs("div",{className:"paso",children:[i.jsx("img",{src:c.img,alt:`Paso ${d+1}`}),i.jsxs("div",{className:"paso-contenido",children:[i.jsxs("strong",{children:["Paso ",d+1,":"]}),i.jsx("p",{children:c.descripcion}),c.puntos&&i.jsx("ul",{children:c.puntos.map((p,g)=>i.jsx("li",{children:p},g))})]}),d===2&&i.jsx("div",{className:"boton-container",children:i.jsx("button",{onClick:()=>a(!0),children:"Ver código del Worker"})})]},d))}),i.jsx($0,{isOpen:n,onClose:()=>a(!1),titulo:"Código Cloudflare Worker",codigo:vR})]})},CR=()=>{const[n,a]=m.useState("appsScript");return i.jsxs(Yo,{fluid:!0,className:"p-3",children:[i.jsx(Rr,{children:i.jsx(Ln,{children:i.jsx("h3",{className:"mb-4 text-center fw-bold",children:"⚙️ Configuración Backend"})})}),i.jsx(Rr,{children:i.jsxs(Ln,{children:[i.jsxs(Dm,{activeKey:n,onSelect:o=>a(o),id:"admin-tabs",className:"mb-3",justify:!0,children:[i.jsx(Do,{eventKey:"appsScript",title:"🧱 Apps Script"}),i.jsx(Do,{eventKey:"worker",title:"🏰 Worker"})]}),n==="appsScript"&&i.jsx(gR,{}),n==="worker"&&i.jsx(NR,{})]})})]})};function fi(){return i.jsx("div",{className:"p-4 text-danger fw-bold",children:"❌ No tienes permiso para realizar esta acción."})}const iy=({isMobile:n})=>n?i.jsxs("div",{className:"usuario-card skeleton-card-usuario",children:[i.jsxs("div",{className:"card-header d-flex align-items-center",children:[i.jsx("div",{className:"skeleton-bar",style:{width:"50%"}}),i.jsx("div",{className:"skeleton-badge ms-2"})]}),i.jsxs("div",{className:"card-body",children:[i.jsx("div",{className:"skeleton-bar mb-2",style:{width:"30%"}}),i.jsx("div",{className:"skeleton-bar mb-3",style:{width:"80%"}}),i.jsx("div",{className:"skeleton-switch mb-3"}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsx("div",{className:"skeleton-button-lg"}),i.jsx("div",{className:"skeleton-button-lg"})]})]})]}):i.jsxs("tr",{className:"usuario-skeleton-row",children:[i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"85%"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"70%"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-badge"})}),i.jsx("td",{className:"text-center",children:i.jsx("div",{className:"skeleton-switch"})}),i.jsx("td",{className:"text-center",children:i.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[i.jsx("div",{className:"skeleton-button"}),i.jsx("div",{className:"skeleton-button"})]})})]}),AR=({isFocused:n})=>{const{usuarios:a,rolesDisponibles:o,rolesErrorPermisos:l,getDatos:c,addDato:d,updateDato:p,toggleActivo:g,deleteDato:h,loading:v,getRoles:y}=CT(),{errors:x,validateField:w,validateForm:E,clearErrors:N,clearError:A}=rs(),{user:S}=Oi(),[R,C]=m.useState(!1),[T,_]=m.useState(null),[U,z]=m.useState({correo:"",nombreUsuario:"",rol:""}),[L,B]=m.useState(null),[X,te]=m.useState(!1),{puede:ne}=Ea(),se=ne("getUsuarios");m.useEffect(()=>{n&&se&&(c(),y())},[c,y,se,n]);const ie=async()=>{if(N(),!E({correo:U.correo,nombreUsuario:U.nombreUsuario,rol:U.rol}))return;const F={correo:U.correo.toLowerCase(),nombre:yt(U.nombreUsuario),rol:U.rol};T?await p(T.correo,F):await d(F),C(!1),_(null),z({correo:"",nombreUsuario:"",rol:""})},W=k=>{_(k),z({correo:k.correo,nombreUsuario:k.nombre,rol:k.rol}),C(!0)},Z=async k=>{await g(k.correo,!k.activo,k.nombre)};return se?i.jsxs("div",{className:"usuarios-admin p-3",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsx("h4",{className:"fw-bold mb-0",children:"👥 Administración de Usuarios"}),i.jsx(Te,{onClick:()=>C(!0),variant:"primary",size:"sm",disabled:v,children:"➕ Crear Usuario"})]}),!v&&a.length===0?i.jsx("div",{className:"text-center text-muted py-4",children:"No hay usuarios registrados."}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"table-responsive shadow-sm rounded d-none d-md-block",children:i.jsxs(wi,{hover:!0,className:"align-middle mb-0",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{children:"Correo"}),i.jsx("th",{children:"Nombre"}),i.jsx("th",{children:"Rol"}),i.jsx("th",{className:"text-center",children:"Estado"}),i.jsx("th",{className:"text-center",children:"Acciones"})]})}),i.jsx("tbody",{children:v?Array.from({length:5}).map((k,F)=>i.jsx(iy,{isMobile:!1},`skel-table-${F}`)):a.map((k,F)=>i.jsxs("tr",{children:[i.jsx("td",{children:k.correo}),i.jsx("td",{children:k.nombre}),i.jsx("td",{children:i.jsx(To,{bg:k.rol==="administrador"?"warning":k.rol==="contador"?"info":"secondary",text:k.rol==="administrador"?"dark":"white",className:"px-2 py-1 text-capitalize",children:k.rol})}),i.jsx("td",{className:"text-center",children:i.jsx(oe.Check,{type:"switch",checked:k.activo,onChange:()=>Z(k),disabled:k.nombre.toLowerCase()==="administrador"&&k.rol==="administrador",label:i.jsx("span",{className:k.activo?"text-success":"text-danger",children:k.activo?"Activo":"Inactivo"})})}),i.jsx("td",{className:"text-center","data-label":"Acciones",children:i.jsx("div",{className:"ico-edit-elim",children:S?.correo===k.correo?i.jsx(To,{bg:"light",text:"dark",className:"border shadow-sm",children:"Tu sesión"}):k.nombre.toLowerCase()==="administrador"?i.jsxs(To,{bg:"dark",text:"white",className:"shadow-sm",children:[i.jsx("i",{className:"bi bi-shield-lock-fill me-1"})," Restringido"]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"bi bi-pencil-square accion-icon",title:"Editar",onClick:()=>W(k)}),i.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{B(k),te(!0)}})]})})})]},F))})]})}),i.jsx("div",{className:"usuarios-cards d-md-none",children:v?Array.from({length:4}).map((k,F)=>i.jsx(iy,{isMobile:!0},`skel-card-${F}`)):a.map((k,F)=>i.jsxs("div",{className:"usuario-card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("strong",{children:k.nombre}),i.jsx(To,{bg:k.rol==="administrador"?"warning":"info",text:k.rol==="administrador"?"dark":"white",className:"ms-2",children:k.rol})]}),i.jsxs("div",{className:"card-body",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Correo:"}),i.jsx("br",{})," ",k.correo]}),i.jsx(oe.Check,{type:"switch",id:`switch-mobile-${k.correo}`,checked:k.activo,onChange:()=>Z(k),disabled:k.nombre.toLowerCase()==="administrador"&&k.rol==="administrador",label:k.activo?"Activo":"Inactivo"}),i.jsxs("div",{className:"d-flex gap-2 mt-3",children:[i.jsx("span",{className:"label-edit-elim-span",children:"Acciones:"}),i.jsx("div",{className:"ico-edit-elim",children:S?.correo===k.correo?i.jsx("span",{className:"text-muted small fw-bold",children:"Sesión activa"}):k.nombre.toLowerCase()==="administrador"?i.jsxs("span",{className:"text-danger small fw-bold span-i-restri",children:[i.jsx("i",{className:"bi bi-shield-lock-fill me-1"})," Restringido"]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"bi bi-pencil-square accion-icon",title:"Editar",onClick:()=>W(k)}),i.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{B(k),te(!0)}})]})})]})]})]},F))})]}),i.jsxs(be,{show:R,centered:!0,onHide:()=>C(!1),children:[i.jsx(be.Header,{closeButton:!0,children:i.jsx(be.Title,{children:T?"Editar Usuario":"Nuevo Usuario"})}),i.jsxs(be.Body,{children:[i.jsx(as,{errors:x}),i.jsxs(oe,{children:[i.jsxs(oe.Group,{className:"mb-3",children:[i.jsx(oe.Label,{children:"Correo"}),i.jsx(oe.Control,{type:"email",value:U.correo,onChange:k=>{const F=k.target.value.toLowerCase();z({...U,correo:F}),A("correo")},onBlur:k=>w("correo",k.target.value),disabled:T})]}),i.jsxs(oe.Group,{className:"mb-3",children:[i.jsx(oe.Label,{children:"Nombre completo"}),i.jsx(oe.Control,{type:"text",value:U.nombreUsuario,onChange:k=>{z({...U,nombreUsuario:k.target.value}),A("nombreUsuario")},onBlur:k=>w("nombreUsuario",k.target.value)})]}),i.jsxs(oe.Group,{className:"mb-3",children:[i.jsx(oe.Label,{children:"Rol"}),l?i.jsx("div",{className:"alert alert-warning py-2 small",children:"⚠️ No tienes permiso para ver roles."}):i.jsxs(oe.Select,{value:U.rol,onChange:k=>{z({...U,rol:k.target.value}),A("rol")},onBlur:k=>w("rol",k.target.value),children:[i.jsx("option",{value:"",children:"Seleccionar rol..."}),o.map((k,F)=>i.jsx("option",{value:k.rol,children:k.rol},F))]})]})]})]}),i.jsxs(be.Footer,{children:[i.jsx(Te,{variant:"secondary",onClick:()=>C(!1),children:"Cancelar"}),i.jsx(Te,{variant:"success",onClick:ie,disabled:v,children:v?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{size:"sm",animation:"border"})," Guardando..."]}):"💾 Guardar"})]}),i.jsx(Nn,{show:v})]}),i.jsx(Na,{show:X,onHide:()=>te(!1),title:"Eliminar Usuario",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar al usuario ",i.jsx("strong",{children:L?.correo}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>h(L?.correo)})]}):i.jsx(fi,{})},OR=()=>i.jsxs("tr",{className:"rol-skeleton-row",children:[i.jsx("td",{"data-label":"Rol",children:i.jsx("div",{className:"d-flex align-items-center",children:i.jsx("div",{className:"skeleton-bar",style:{width:"120px"}})})}),i.jsx("td",{"data-label":"Permisos",children:i.jsxs("div",{className:"d-flex flex-column gap-2",children:[i.jsx("div",{className:"skeleton-bar",style:{width:"90%"}}),i.jsx("div",{className:"skeleton-bar",style:{width:"70%"}})]})}),i.jsx("td",{className:"td-acciones text-center","data-label":"Acciones",children:i.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[i.jsx("div",{className:"skeleton-btn-rect"}),i.jsx("div",{className:"skeleton-btn-rect"})]})})]}),kR=({isFocused:n})=>{const{roles:a,funcionesDisponibles:o,getDatos:l,addDato:c,updateDato:d,deleteDato:p,loading:g}=TT(),{errors:h,validateField:v,validateForm:y,clearErrors:x,clearError:w}=rs(),[E,N]=m.useState(!1),[A,S]=m.useState(""),[R,C]=m.useState([]),[T,_]=m.useState(null),[U,z]=m.useState(null),[L,B]=m.useState(!1),{puede:X}=Ea(),te=X("getRoles");m.useEffect(()=>{n&&te&&l()},[l,te,n]);const ne=async()=>{x();const Z={rolPermisos:R};if(T||(Z.rolNombre=A),!y(Z))return;const F=yt(A);T?await d(T.rol,R):await c(F,R),N(!1),S(""),C([]),_(null)},se=Z=>{_(Z),S(Z.rol),C((Z.permisos||[]).map(k=>k.trim())),N(!0)},ie=Z=>{const k=R.includes(Z)?R.filter(F=>F!==Z):[...R,Z];C(k),v("rolPermisos",k)},W=()=>{const Z=R.length===o.length?[]:o;C(Z),v("rolPermisos",Z)};return te?i.jsxs("div",{className:"roles-admin-container p-3",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsx("h4",{className:"fw-bold mb-0",children:"Administración de Roles"}),i.jsx(Te,{onClick:()=>{_(null),S(""),C([]),N(!0)},variant:"primary",disabled:g,children:"➕ Nuevo Rol"})]}),i.jsx("div",{className:"table-responsive shadow-sm rounded",children:i.jsxs(wi,{striped:!0,bordered:!0,hover:!0,className:"align-middle mb-0",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{children:"Rol"}),i.jsx("th",{children:"Permisos"}),i.jsx("th",{className:"text-center",children:"Acciones"})]})}),i.jsx("tbody",{children:g?Array.from({length:5}).map((Z,k)=>i.jsx(OR,{},`rol-skel-${k}`)):a.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:"3",className:"text-center py-4 text-muted",children:"No hay roles definidos."})}):a.map((Z,k)=>i.jsxs("tr",{children:[i.jsxs("td",{"data-label":"Rol",children:[i.jsx("strong",{children:Z.rol}),Z.rol==="administrador"&&i.jsx(To,{bg:"warning",text:"dark",className:"ms-2",children:"Protegido"})]}),i.jsx("td",{"data-label":"Permisos",children:i.jsx("div",{className:"text-muted small text-break",children:Z.permisos?.includes("*")?"Todos los permisos":Z.permisos?.join(", ")||"—"})}),i.jsx("td",{className:"td-acciones text-center","data-label":"Acciones",children:i.jsx("div",{className:"ico-edit-elim",children:Z.rol!=="administrador"&&i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"bi bi-pencil-square accion-icon",title:"Editar",onClick:()=>se(Z)}),i.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{z(Z.rol),B(!0)}})]})})})]},k))})]})}),i.jsxs(be,{show:E,onHide:()=>N(!1),size:"lg",centered:!0,children:[i.jsx(be.Header,{closeButton:!0,children:i.jsx(be.Title,{children:T?`Editar Permisos: ${T.rol}`:"Crear Nuevo Rol"})}),i.jsxs(be.Body,{children:[i.jsx(as,{errors:h}),!T&&i.jsxs(oe.Group,{className:"mb-3",children:[i.jsx(oe.Label,{className:"fw-bold",children:"Nombre del Rol"}),i.jsx(oe.Control,{type:"text",value:A,onChange:Z=>{S(Z.target.value),w("rolNombre")},onBlur:Z=>v("rolNombre",Z.target.value),placeholder:"Ejemplo: Contador, Revisor, Supervisor..."})]}),i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[i.jsxs(oe.Label,{className:"fw-bold mb-0",children:["Permisos del Rol (",R.length,")"]}),i.jsx(Te,{size:"sm",variant:"outline-primary",onClick:W,children:R.length===o.length?"Deseleccionar todos":"Seleccionar todos"})]}),i.jsx("div",{className:"p-3 bg-light border rounded",style:{maxHeight:"350px",overflowY:"auto"},children:i.jsx("div",{className:"row",children:o.map(Z=>i.jsx("div",{className:"col-md-6 col-lg-4 mb-2",children:i.jsx(oe.Check,{type:"checkbox",id:`perm-${Z}`,label:i.jsx("span",{className:"small",children:Z}),checked:R.includes(Z),onChange:()=>ie(Z)})},Z))})})]}),i.jsxs(be.Footer,{children:[i.jsx(Te,{variant:"secondary",onClick:()=>N(!1),children:"Cancelar"}),i.jsx(Te,{variant:"success",onClick:ne,disabled:g,children:g?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{size:"sm",animation:"border",className:"me-2"}),"Guardando..."]}):"💾 Guardar"})]}),i.jsx(Nn,{show:g})]}),i.jsx(Na,{show:L,onHide:()=>B(!1),title:"Eliminar Rol",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar el rol ",i.jsx("strong",{children:U}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>p(U)})]}):i.jsx(fi,{})},ly=({isTable:n=!1})=>n?i.jsxs("tr",{className:"log-skeleton-row",children:[i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"140px"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"100px"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"120px"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar-rect"})})]}):i.jsxs("div",{className:"log-skeleton-card",children:[i.jsxs("div",{className:"log-header-skeleton",children:[i.jsx("div",{className:"skeleton-bar",style:{width:"40%"}}),i.jsx("div",{className:"skeleton-bar",style:{width:"30%"}})]}),i.jsxs("div",{className:"log-body-skeleton",children:[i.jsx("div",{className:"skeleton-bar mb-3",style:{width:"60%"}}),i.jsx("div",{className:"skeleton-bar-rect"})]})]});function TR({isFocused:n}){const{puede:a}=Ea(),o=a("getLogs"),{logs:l,getDatos:c,clearDatos:d,loading:p}=ET(),[g,h]=m.useState(!1);return m.useEffect(()=>{n&&o&&c()},[c,o,n]),o?i.jsxs("div",{className:"p-4",children:[i.jsx("h2",{className:"mb-4",children:"📜 Administración de Logs"}),i.jsx("div",{className:"d-flex justify-content-end mb-3",children:i.jsx(Te,{variant:"danger",onClick:()=>h(!0),disabled:p,children:"🧹 Limpiar Logs Antiguos"})}),i.jsxs(wi,{striped:!0,bordered:!0,hover:!0,size:"sm",responsive:!0,className:"logs-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Fecha"}),i.jsx("th",{children:"Acción"}),i.jsx("th",{children:"Usuario"}),i.jsx("th",{children:"Detalle"})]})}),i.jsx("tbody",{children:p?Array.from({length:8}).map((v,y)=>i.jsx(ly,{isTable:!0},`table-skel-${y}`)):l.length>0?l.map((v,y)=>i.jsxs("tr",{children:[i.jsx("td",{children:v.fecha}),i.jsx("td",{children:v.accion}),i.jsx("td",{children:v.usuario}),i.jsx("td",{children:i.jsx("pre",{className:"bg-light p-2 rounded small mb-0",children:JSON.stringify(v.detalle,null,2)})})]},y)):i.jsx("tr",{children:i.jsx("td",{colSpan:4,className:"text-center text-muted",children:"No hay logs disponibles"})})})]}),i.jsx("div",{className:"logs-cards",children:p?Array.from({length:4}).map((v,y)=>i.jsx(ly,{isTable:!1},`card-skel-${y}`)):l.length>0?l.map((v,y)=>i.jsxs("div",{className:"log-card",children:[i.jsxs("div",{className:"log-header",children:[i.jsx("h6",{children:v.accion}),i.jsx("span",{children:v.fecha})]}),i.jsxs("div",{className:"log-body",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Usuario:"})," ",v.usuario]}),i.jsx("pre",{children:JSON.stringify(v.detalle,null,2)})]})]},y)):i.jsx("p",{className:"text-center text-muted",children:"No hay logs disponibles"})}),i.jsx(Na,{show:g,onHide:()=>h(!1),title:"🧹 Limpiar Logs Antiguos",message:i.jsxs(i.Fragment,{children:["Esta acción eliminará todos los logs antiguos y conservará solo los"," ",i.jsx("strong",{children:"10 más recientes"}),".",i.jsx("p",{className:"text-danger fw-semibold mt-2",children:"⚠️ Esta operación no se puede deshacer."})]}),confirmLabel:"Limpiar Logs",confirmVariant:"danger",onConfirm:d})]}):i.jsx(fi,{})}const RR=()=>i.jsxs("div",{className:"config-skeleton-container",children:[i.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[i.jsx("div",{className:"skeleton-title mb-3",style:{width:"200px"}}),i.jsxs("div",{className:"row gy-3",children:[i.jsxs("div",{className:"col-12 col-md-5",children:[i.jsx("div",{className:"skeleton-label mb-2"}),i.jsx("div",{className:"skeleton-input mb-3"}),i.jsx("div",{className:"skeleton-btn",style:{width:"180px"}})]}),i.jsxs("div",{className:"col-12 col-md-5",children:[i.jsx("div",{className:"skeleton-label mb-2"}),i.jsx("div",{className:"skeleton-input mb-3"}),i.jsx("div",{className:"skeleton-label mb-2"}),i.jsx("div",{className:"skeleton-input mb-1"}),i.jsx("div",{className:"skeleton-text",style:{width:"120px"}})]}),i.jsx("div",{className:"col-12 col-md-2",children:i.jsx("div",{className:"skeleton-btn h-100",style:{minHeight:"38px"}})})]})]}),i.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[i.jsxs("div",{className:"d-flex justify-content-between mb-3",children:[i.jsx("div",{className:"skeleton-title",style:{width:"250px"}}),i.jsx("div",{className:"skeleton-input",style:{width:"200px"}})]}),i.jsx("div",{className:"skeleton-table",children:[1,2,3,4].map(n=>i.jsxs("div",{className:"skeleton-table-row d-flex justify-content-between p-2 border-bottom",children:[i.jsx("div",{className:"skeleton-bar",style:{width:"40px"}}),i.jsx("div",{className:"skeleton-btn",style:{width:"80px",height:"25px"}})]},n))}),i.jsx("div",{className:"text-end mt-3",children:i.jsx("div",{className:"skeleton-btn d-inline-block",style:{width:"150px"}})})]})]}),DR=({isFocused:n})=>{const{config:a,clearConfig:o,getConfig:l,versionBackend:c,updateConfig:d,generarBackup:p,reinicializarSistemaForzado:g,loading:h}=OT(),[v,y]=m.useState(""),[x,w]=m.useState(""),[E,N]=m.useState([]),[A,S]=m.useState(""),[R,C]=m.useState(!1),[T,_]=m.useState(""),[U,z]=m.useState(!1),[L]=m.useState("v962026139"),{puede:B}=Ea(),X=B("getConfig"),[te,ne]=m.useState(!1),[se,ie]=m.useState(!1),[W,Z]=m.useState(!1),[k,F]=m.useState(!1);m.useEffect(()=>{n&&X&&(F(!1),l())},[l,X,n]),m.useEffect(()=>{a&&!k&&!W&&(y(a.TAMANO_MAX_MB||10),w(a.TOKEN_EXP_MINUTOS||60),N(a.TIPOS_PERMITIDOS||[]),F(!0))},[a,k,W]),m.useEffect(()=>{n||(F(!1),y(""),w(""),N([]),S(""),o())},[n,o]);const re=()=>{const P=A.trim().toLowerCase();if(P){if(E.includes(P))return alert("⚠️ Esa extensión ya está permitida.");N([...E,P]),S("")}},V=P=>{_(P),C(!0)},le=()=>{N(E.filter(P=>P!==T)),C(!1),_("")},O=P=>{const ce=P.target.value;ce>45?y(45):y(ce)},q=async()=>{Z(!0);try{await d({CARPETA_PRINCIPAL:a?.CARPETA_PRINCIPAL||"",TAMANO_MAX_MB:Number(v),TOKEN_EXP_MINUTOS:Number(x),TIPOS_PERMITIDOS:E})}finally{Z(!1)}},ae=async()=>{ne(!0);try{await p()}finally{ne(!1)}};return X?i.jsxs("div",{className:"config-admin-page container py-3",children:[i.jsx("h3",{className:"fw-bold mb-4 text-primary",children:"⚙️ Administración de Configuración"}),!X&&i.jsx(fi,{}),(h||!k)&&n?i.jsx(RR,{}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[i.jsx("h5",{className:"fw-bold mb-3",children:"🔧 Configuración General"}),i.jsxs(Rr,{className:"gy-3",children:[i.jsxs(Ln,{xs:12,md:5,children:[i.jsxs(oe.Group,{children:[i.jsx(oe.Label,{className:"fw-semibold",children:"📁 Carpeta Principal"}),i.jsx(oe.Control,{type:"text",value:a?.CARPETA_PRINCIPAL||"",readOnly:!0,plaintext:!0}),i.jsxs(oe.Text,{muted:!0,children:[i.jsxs("p",{children:["Versión Backend: ",i.jsx("span",{className:"version-backend",children:`${c}`})]}),i.jsxs("p",{children:["Versión FrontEnd: ",i.jsx("span",{className:"version-frontEnd",children:L})]})]})]}),i.jsx(Te,{variant:"danger",className:"btn-CAP-inicializarproyecto",onClick:()=>z(!0),disabled:se,children:se?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{as:"span",animation:"border",size:"sm"})," Procesando..."]}):"⚠️ Reinicializar Proyecto"})]}),i.jsxs(Ln,{xs:12,md:5,children:[i.jsxs(oe.Group,{children:[i.jsx(oe.Label,{className:"fw-semibold",children:"📦 Tamaño máximo permitido 45 (MB)"}),i.jsx(oe.Control,{type:"number",min:1,max:45,value:v,onChange:O})]}),i.jsxs(oe.Group,{children:[i.jsx(oe.Label,{className:"fw-semibold",children:"🔑 Expiración Token (Min)"}),i.jsx(oe.Control,{type:"number",min:1,value:x,onChange:P=>w(P.target.value)}),i.jsx(oe.Text,{muted:!0,children:"Duración de la sesión activa."})]})]}),i.jsx(Ln,{xs:12,md:2,children:i.jsxs("div",{className:"config-actions-panel",children:[i.jsx(Te,{variant:"primary",className:"btn-backup-grande",onClick:ae,disabled:te,children:te?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{as:"span",animation:"border",size:"sm"}),i.jsx("span",{children:"Generando..."})]}):i.jsxs("div",{className:"btn-CAP-backup-iconText",children:[i.jsx("span",{className:"backup-ico bi bi-file-zip"}),i.jsx("span",{children:"Generar Backup"})]})}),i.jsx(Te,{variant:"success",className:"mt-2",onClick:q,disabled:W,children:W?i.jsxs(i.Fragment,{children:[i.jsx(Nt,{as:"span",animation:"border",size:"sm"})," Guardando..."]}):i.jsxs("div",{className:"btn-CAP-guardar-iconText",children:[i.jsx("span",{className:"icon-disk"}),i.jsx("span",{children:"Guardar Cambios"})]})})]})})]})]}),i.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center flex-wrap mb-3",children:[i.jsx("h5",{className:"fw-bold mb-2 mb-md-0",children:"🧩 Tipos de archivo permitidos"}),i.jsxs(DA,{style:{maxWidth:260},children:[i.jsx(oe.Control,{type:"text",placeholder:"Ej: pdf",value:A,onChange:P=>S(P.target.value)}),i.jsx(Te,{onClick:re,children:"➕"})]})]}),i.jsxs(wi,{bordered:!0,hover:!0,responsive:!0,className:"small shadow-inner-sm",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{children:"Extensión"}),i.jsx("th",{className:"text-center",children:"Acciones"})]})}),i.jsxs("tbody",{children:[E.map((P,ce)=>i.jsxs("tr",{children:[i.jsx("td",{className:"fw-semibold",children:P}),i.jsx("td",{className:"text-center",children:i.jsx(Te,{size:"sm",variant:"outline-danger",onClick:()=>V(P),children:"🗑️ Eliminar"})})]},ce)),E.length===0&&i.jsx("tr",{children:i.jsx("td",{colSpan:2,className:"text-center text-muted py-3",children:"No hay extensiones configuradas."})})]})]})]})]}),i.jsx(Na,{show:R,onHide:()=>C(!1),title:"Eliminar tipo de archivo",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar ",i.jsx("strong",{children:T}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:le}),i.jsx(RT,{show:U,onHide:()=>z(!1),onConfirm:async(P,ce)=>{if(P==="INICIALIZAR"){ie(!0);try{const pe=await g(P,ce);console.log("reinicialización del sistema",pe.mensaje,pe.ok)}finally{ie(!1),z(!1)}}},loading:h}),i.jsx(Nn,{show:W||te||se})]}):i.jsx(fi,{})};function LR(){const[n,a]=m.useState("usuarios");return i.jsx(U0,{children:i.jsxs(Yo,{fluid:!0,className:"p-3",children:[i.jsx(Rr,{children:i.jsx(Ln,{children:i.jsx("h3",{className:"mb-4 text-center fw-bold",children:"⚙️ Panel de Administración"})})}),i.jsx(Rr,{children:i.jsx(Ln,{children:i.jsxs(Dm,{activeKey:n,onSelect:o=>a(o),id:"admin-tabs",className:"mb-3",justify:!0,mountOnEnter:!0,unmountOnExit:!0,children:[i.jsx(Do,{eventKey:"usuarios",title:"👥 Usuarios",children:i.jsx(AR,{isFocused:n==="usuarios"})}),i.jsx(Do,{eventKey:"roles",title:"🧩 Roles",children:i.jsx(kR,{isFocused:n==="roles"})}),i.jsx(Do,{eventKey:"config",title:"⚙️ Configuración",children:i.jsx(DR,{isFocused:n==="config"})}),i.jsx(Do,{eventKey:"logs",title:"📜 Logs",children:i.jsx(TR,{isFocused:n==="logs"})})]})})})]})})}function ai({children:n}){const{authenticated:a,loading:o}=Oi(),l=En();return o?null:a?n:i.jsx(mN,{to:"/",replace:!0,state:{from:l}})}function _R(){const[n,a]=m.useState(!1);return m.useEffect(()=>{const o=()=>a(!0);return window.addEventListener("backend:open-config",o),()=>{window.removeEventListener("backend:open-config",o)}},[]),i.jsxs(i.Fragment,{children:[i.jsx(UT,{onOpenBackend:()=>a(!0)}),i.jsx(IT,{show:n,onHide:()=>a(!1)}),i.jsx(Yo,{className:"mt-4",children:i.jsxs(hN,{children:[i.jsx(gn,{path:"/",element:i.jsx(HT,{})}),i.jsx(gn,{path:"/productos",element:i.jsx(ai,{children:i.jsx(VT,{})})}),i.jsx(gn,{path:"/datos-tributarios",element:i.jsx(ai,{children:i.jsx(XT,{})})}),i.jsx(gn,{path:"/contador",element:i.jsx(ai,{children:i.jsx(KT,{})})}),i.jsx(gn,{path:"/facturas",element:i.jsx(ai,{children:i.jsx(eR,{})})}),i.jsx(gn,{path:"/admin",element:i.jsx(ai,{children:i.jsx(LR,{})})}),i.jsx(gn,{path:"/privacidad",element:i.jsx(tR,{})}),i.jsx(gn,{path:"/terminos",element:i.jsx(nR,{})}),i.jsx(gn,{path:"/acerca-de",element:i.jsx(aR,{})}),i.jsx(gn,{path:"/donaciones",element:i.jsx(oR,{})}),i.jsx(gn,{path:"/backend-setup",element:i.jsx(CR,{})})]})}),i.jsx(PT,{}),i.jsx($T,{})]})}const zR="modulepreload",MR=function(n){return"/appdeclaracion/"+n},cy={},BR=function(a,o,l){let c=Promise.resolve();if(o&&o.length>0){let v=function(y){return Promise.all(y.map(x=>Promise.resolve(x).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};var p=v;document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),h=g?.nonce||g?.getAttribute("nonce");c=v(o.map(y=>{if(y=MR(y),y in cy)return;cy[y]=!0;const x=y.endsWith(".css"),w=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${w}`))return;const E=document.createElement("link");if(E.rel=x?"stylesheet":zR,x||(E.as="script"),E.crossOrigin="",E.href=y,h&&E.setAttribute("nonce",h),document.head.appendChild(E),x)return new Promise((N,A)=>{E.addEventListener("load",N),E.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${y}`)))})}))}function d(g){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=g,window.dispatchEvent(h),!h.defaultPrevented)throw g}return c.then(g=>{for(const h of g||[])h.status==="rejected"&&d(h.reason);return a().catch(d)})};function UR(n={}){const{immediate:a=!1,onNeedReload:o,onNeedRefresh:l,onOfflineReady:c,onRegistered:d,onRegisteredSW:p,onRegisterError:g}=n;let h,v;const y=async(w=!0)=>{await v};async function x(){if("serviceWorker"in navigator){if(h=await BR(async()=>{const{Workbox:w}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:w}},[]).then(({Workbox:w})=>new w("/appdeclaracion/sw.js",{scope:"/appdeclaracion/",type:"classic"})).catch(w=>{g?.(w)}),!h)return;h.addEventListener("activated",w=>{(w.isUpdate||w.isExternal)&&(o?o():window.location.reload())}),h.addEventListener("installed",w=>{w.isUpdate||c?.()}),h.register({immediate:a}).then(w=>{p?p("/appdeclaracion/sw.js",w):d?.(w)}).catch(w=>{g?.(w)})}}return v=x(),y}UR({immediate:!0});gE.createRoot(document.getElementById("root")).render(i.jsx(Xe.StrictMode,{children:i.jsx(IN,{children:i.jsx(AO,{children:i.jsx(KN,{children:i.jsx(yT,{children:i.jsx(wT,{children:i.jsx(xT,{children:i.jsx(ST,{children:i.jsx(U0,{children:i.jsx(_R,{})})})})})})})})})}));
