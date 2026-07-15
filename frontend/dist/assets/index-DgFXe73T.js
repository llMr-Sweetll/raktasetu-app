function AS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function bS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tv={exports:{}},cu={},Av={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=Symbol.for("react.element"),CS=Symbol.for("react.portal"),RS=Symbol.for("react.fragment"),PS=Symbol.for("react.strict_mode"),LS=Symbol.for("react.profiler"),DS=Symbol.for("react.provider"),IS=Symbol.for("react.context"),NS=Symbol.for("react.forward_ref"),FS=Symbol.for("react.suspense"),US=Symbol.for("react.memo"),OS=Symbol.for("react.lazy"),Fm=Symbol.iterator;function kS(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var bv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cv=Object.assign,Rv={};function Fo(t,e,n){this.props=t,this.context=e,this.refs=Rv,this.updater=n||bv}Fo.prototype.isReactComponent={};Fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pv(){}Pv.prototype=Fo.prototype;function Zh(t,e,n){this.props=t,this.context=e,this.refs=Rv,this.updater=n||bv}var Qh=Zh.prototype=new Pv;Qh.constructor=Zh;Cv(Qh,Fo.prototype);Qh.isPureReactComponent=!0;var Um=Array.isArray,Lv=Object.prototype.hasOwnProperty,ep={current:null},Dv={key:!0,ref:!0,__self:!0,__source:!0};function Iv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Lv.call(e,i)&&!Dv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ya,type:t,key:s,ref:o,props:r,_owner:ep.current}}function BS(t,e){return{$$typeof:Ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ya}function zS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Om=/\/+/g;function Ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zS(""+t.key):e.toString(36)}function sc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ya:case CS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ou(o,0):i,Um(r)?(n="",t!=null&&(n=t.replace(Om,"$&/")+"/"),sc(r,e,n,"",function(c){return c})):r!=null&&(tp(r)&&(r=BS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Om,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Um(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ou(s,a);o+=sc(s,e,n,l,r)}else if(l=kS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ou(s,a++),o+=sc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cl(t,e,n){if(t==null)return t;var i=[],r=0;return sc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function HS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yn={current:null},oc={transition:null},VS={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:oc,ReactCurrentOwner:ep};function Nv(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:cl,forEach:function(t,e,n){cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return cl(t,function(){e++}),e},toArray:function(t){return cl(t,function(e){return e})||[]},only:function(t){if(!tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Fo;Ke.Fragment=RS;Ke.Profiler=LS;Ke.PureComponent=Zh;Ke.StrictMode=PS;Ke.Suspense=FS;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VS;Ke.act=Nv;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Cv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ep.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Lv.call(e,l)&&!Dv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ya,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:IS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DS,_context:t},t.Consumer=t};Ke.createElement=Iv;Ke.createFactory=function(t){var e=Iv.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:NS,render:t}};Ke.isValidElement=tp;Ke.lazy=function(t){return{$$typeof:OS,_payload:{_status:-1,_result:t},_init:HS}};Ke.memo=function(t,e){return{$$typeof:US,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=oc.transition;oc.transition={};try{t()}finally{oc.transition=e}};Ke.unstable_act=Nv;Ke.useCallback=function(t,e){return yn.current.useCallback(t,e)};Ke.useContext=function(t){return yn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return yn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return yn.current.useEffect(t,e)};Ke.useId=function(){return yn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return yn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return yn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return yn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return yn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return yn.current.useReducer(t,e,n)};Ke.useRef=function(t){return yn.current.useRef(t)};Ke.useState=function(t){return yn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return yn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return yn.current.useTransition()};Ke.version="18.3.1";Av.exports=Ke;var z=Av.exports;const np=bS(z),GS=AS({__proto__:null,default:np},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WS=z,jS=Symbol.for("react.element"),XS=Symbol.for("react.fragment"),qS=Object.prototype.hasOwnProperty,$S=WS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YS={key:!0,ref:!0,__self:!0,__source:!0};function Fv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)qS.call(e,i)&&!YS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:jS,type:t,key:s,ref:o,props:r,_owner:$S.current}}cu.Fragment=XS;cu.jsx=Fv;cu.jsxs=Fv;Tv.exports=cu;var p=Tv.exports,tf={},Uv={exports:{}},Gn={},Ov={exports:{}},kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,Y){var te=k.length;k.push(Y);e:for(;0<te;){var Z=te-1>>>1,oe=k[Z];if(0<r(oe,Y))k[Z]=Y,k[te]=oe,te=Z;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var Y=k[0],te=k.pop();if(te!==Y){k[0]=te;e:for(var Z=0,oe=k.length,Ue=oe>>>1;Z<Ue;){var Xe=2*(Z+1)-1,Be=k[Xe],W=Xe+1,ae=k[W];if(0>r(Be,te))W<oe&&0>r(ae,Be)?(k[Z]=ae,k[W]=te,Z=W):(k[Z]=Be,k[Xe]=te,Z=Xe);else if(W<oe&&0>r(ae,te))k[Z]=ae,k[W]=te,Z=W;else break e}}return Y}function r(k,Y){var te=k.sortIndex-Y.sortIndex;return te!==0?te:k.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,m=!1,v=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(k){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=k)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function _(k){if(E=!1,y(k),!v)if(n(l)!==null)v=!0,J(w);else{var Y=n(c);Y!==null&&G(_,Y.startTime-k)}}function w(k,Y){v=!1,E&&(E=!1,d(S),S=-1),m=!0;var te=h;try{for(y(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||k&&!D());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var oe=Z(f.expirationTime<=Y);Y=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&i(l),y(Y)}else i(l);f=n(l)}if(f!==null)var Ue=!0;else{var Xe=n(c);Xe!==null&&G(_,Xe.startTime-Y),Ue=!1}return Ue}finally{f=null,h=te,m=!1}}var T=!1,b=null,S=-1,C=5,L=-1;function D(){return!(t.unstable_now()-L<C)}function I(){if(b!==null){var k=t.unstable_now();L=k;var Y=!0;try{Y=b(!0,k)}finally{Y?K():(T=!1,b=null)}}else T=!1}var K;if(typeof x=="function")K=function(){x(I)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,V=ee.port2;ee.port1.onmessage=I,K=function(){V.postMessage(null)}}else K=function(){g(I,0)};function J(k){b=k,T||(T=!0,K())}function G(k,Y){S=g(function(){k(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,J(w))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var te=h;h=Y;try{return k()}finally{h=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,Y){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var te=h;h=k;try{return Y()}finally{h=te}},t.unstable_scheduleCallback=function(k,Y,te){var Z=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Z+te:Z):te=Z,k){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=te+oe,k={id:u++,callback:Y,priorityLevel:k,startTime:te,expirationTime:oe,sortIndex:-1},te>Z?(k.sortIndex=te,e(c,k),n(l)===null&&k===n(c)&&(E?(d(S),S=-1):E=!0,G(_,te-Z))):(k.sortIndex=oe,e(l,k),v||m||(v=!0,J(w))),k},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(k){var Y=h;return function(){var te=h;h=Y;try{return k.apply(this,arguments)}finally{h=te}}}})(kv);Ov.exports=kv;var KS=Ov.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JS=z,Vn=KS;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bv=new Set,wa={};function bs(t,e){So(t,e),So(t+"Capture",e)}function So(t,e){for(wa[t]=e,t=0;t<e.length;t++)Bv.add(e[t])}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nf=Object.prototype.hasOwnProperty,ZS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,km={},Bm={};function QS(t){return nf.call(Bm,t)?!0:nf.call(km,t)?!1:ZS.test(t)?Bm[t]=!0:(km[t]=!0,!1)}function e1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t1(t,e,n,i){if(e===null||typeof e>"u"||e1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _n(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new _n(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new _n(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new _n(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new _n(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new _n(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new _n(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new _n(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new _n(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new _n(t,5,!1,t.toLowerCase(),null,!1,!1)});var ip=/[\-:]([a-z])/g;function rp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ip,rp);Qt[e]=new _n(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ip,rp);Qt[e]=new _n(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ip,rp);Qt[e]=new _n(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new _n(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new _n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new _n(t,1,!1,t.toLowerCase(),null,!0,!0)});function sp(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t1(e,n,r,i)&&(n=null),i||r===null?QS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ir=JS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Hv=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),of=Symbol.for("react.suspense_list"),lp=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),Vv=Symbol.for("react.offscreen"),zm=Symbol.iterator;function jo(t){return t===null||typeof t!="object"?null:(t=zm&&t[zm]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Object.assign,ku;function aa(t){if(ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||""}return`
`+ku+t}var Bu=!1;function zu(t,e){if(!t||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?aa(t):""}function n1(t){switch(t.tag){case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return t=zu(t.type,!1),t;case 11:return t=zu(t.type.render,!1),t;case 1:return t=zu(t.type,!0),t;default:return""}}function af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qs:return"Fragment";case Zs:return"Portal";case rf:return"Profiler";case op:return"StrictMode";case sf:return"Suspense";case of:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hv:return(t.displayName||"Context")+".Consumer";case zv:return(t._context.displayName||"Context")+".Provider";case ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lp:return e=t.displayName||null,e!==null?e:af(t.type)||"Memo";case yr:e=t._payload,t=t._init;try{return af(t(e))}catch{}}return null}function i1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return af(e);case 8:return e===op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r1(t){var e=Gv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function dl(t){t._valueTracker||(t._valueTracker=r1(t))}function Wv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Gv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lf(t,e){var n=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jv(t,e){e=e.checked,e!=null&&sp(t,"checked",e,!1)}function cf(t,e){jv(t,e);var n=Or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&uf(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uf(t,e,n){(e!=="number"||Ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var la=Array.isArray;function fo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(la(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function Xv(t,e){var n=Or(e.value),i=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ff(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fl,$v=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fl=fl||document.createElement("div"),fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s1=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(t){s1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ha[e]=ha[t]})});function Yv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ha.hasOwnProperty(t)&&ha[t]?(""+e).trim():e+"px"}function Kv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Yv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var o1=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(t,e){if(e){if(o1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function pf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mf=null;function cp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gf=null,ho=null,po=null;function jm(t){if(t=Za(t)){if(typeof gf!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=pu(e),gf(t.stateNode,t.type,e))}}function Jv(t){ho?po?po.push(t):po=[t]:ho=t}function Zv(){if(ho){var t=ho,e=po;if(po=ho=null,jm(t),e)for(t=0;t<e.length;t++)jm(e[t])}}function Qv(t,e){return t(e)}function ex(){}var Hu=!1;function tx(t,e,n){if(Hu)return t(e,n);Hu=!0;try{return Qv(t,e,n)}finally{Hu=!1,(ho!==null||po!==null)&&(ex(),Zv())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=pu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var vf=!1;if(Ji)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){vf=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{vf=!1}function a1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var pa=!1,bc=null,Cc=!1,xf=null,l1={onError:function(t){pa=!0,bc=t}};function c1(t,e,n,i,r,s,o,a,l){pa=!1,bc=null,a1.apply(l1,arguments)}function u1(t,e,n,i,r,s,o,a,l){if(c1.apply(this,arguments),pa){if(pa){var c=bc;pa=!1,bc=null}else throw Error(ce(198));Cc||(Cc=!0,xf=c)}}function Cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xm(t){if(Cs(t)!==t)throw Error(ce(188))}function d1(t){var e=t.alternate;if(!e){if(e=Cs(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xm(r),t;if(s===i)return Xm(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function ix(t){return t=d1(t),t!==null?rx(t):null}function rx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rx(t);if(e!==null)return e;t=t.sibling}return null}var sx=Vn.unstable_scheduleCallback,qm=Vn.unstable_cancelCallback,f1=Vn.unstable_shouldYield,h1=Vn.unstable_requestPaint,Nt=Vn.unstable_now,p1=Vn.unstable_getCurrentPriorityLevel,up=Vn.unstable_ImmediatePriority,ox=Vn.unstable_UserBlockingPriority,Rc=Vn.unstable_NormalPriority,m1=Vn.unstable_LowPriority,ax=Vn.unstable_IdlePriority,uu=null,Ci=null;function g1(t){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var fi=Math.clz32?Math.clz32:y1,v1=Math.log,x1=Math.LN2;function y1(t){return t>>>=0,t===0?32:31-(v1(t)/x1|0)|0}var hl=64,pl=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ca(a):(s&=o,s!==0&&(i=ca(s)))}else o=n&~r,o!==0?i=ca(o):s!==0&&(i=ca(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-fi(e),r=1<<n,i|=t[n],e&=~r;return i}function _1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=_1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lx(){var t=hl;return hl<<=1,!(hl&4194240)&&(hl=64),t}function Vu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fi(e),t[e]=n}function E1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-fi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function dp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-fi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function cx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ux,fp,dx,fx,hx,_f=!1,ml=[],Cr=null,Rr=null,Pr=null,ba=new Map,Ca=new Map,Sr=[],M1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $m(t,e){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function qo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Za(e),e!==null&&fp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function w1(t,e,n,i,r){switch(e){case"focusin":return Cr=qo(Cr,t,e,n,i,r),!0;case"dragenter":return Rr=qo(Rr,t,e,n,i,r),!0;case"mouseover":return Pr=qo(Pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ba.set(s,qo(ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ca.set(s,qo(Ca.get(s)||null,t,e,n,i,r)),!0}return!1}function px(t){var e=ls(t.target);if(e!==null){var n=Cs(e);if(n!==null){if(e=n.tag,e===13){if(e=nx(n),e!==null){t.blockedOn=e,hx(t.priority,function(){dx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ac(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);mf=i,n.target.dispatchEvent(i),mf=null}else return e=Za(n),e!==null&&fp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ym(t,e,n){ac(t)&&n.delete(e)}function T1(){_f=!1,Cr!==null&&ac(Cr)&&(Cr=null),Rr!==null&&ac(Rr)&&(Rr=null),Pr!==null&&ac(Pr)&&(Pr=null),ba.forEach(Ym),Ca.forEach(Ym)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,_f||(_f=!0,Vn.unstable_scheduleCallback(Vn.unstable_NormalPriority,T1)))}function Ra(t){function e(r){return $o(r,t)}if(0<ml.length){$o(ml[0],t);for(var n=1;n<ml.length;n++){var i=ml[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Cr!==null&&$o(Cr,t),Rr!==null&&$o(Rr,t),Pr!==null&&$o(Pr,t),ba.forEach(e),Ca.forEach(e),n=0;n<Sr.length;n++)i=Sr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)px(n),n.blockedOn===null&&Sr.shift()}var mo=ir.ReactCurrentBatchConfig,Lc=!0;function A1(t,e,n,i){var r=ct,s=mo.transition;mo.transition=null;try{ct=1,hp(t,e,n,i)}finally{ct=r,mo.transition=s}}function b1(t,e,n,i){var r=ct,s=mo.transition;mo.transition=null;try{ct=4,hp(t,e,n,i)}finally{ct=r,mo.transition=s}}function hp(t,e,n,i){if(Lc){var r=Sf(t,e,n,i);if(r===null)Zu(t,e,i,Dc,n),$m(t,i);else if(w1(r,t,e,n,i))i.stopPropagation();else if($m(t,i),e&4&&-1<M1.indexOf(t)){for(;r!==null;){var s=Za(r);if(s!==null&&ux(s),s=Sf(t,e,n,i),s===null&&Zu(t,e,i,Dc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zu(t,e,i,null,n)}}var Dc=null;function Sf(t,e,n,i){if(Dc=null,t=cp(i),t=ls(t),t!==null)if(e=Cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=nx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dc=t,null}function mx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p1()){case up:return 1;case ox:return 4;case Rc:case m1:return 16;case ax:return 536870912;default:return 16}default:return 16}}var wr=null,pp=null,lc=null;function gx(){if(lc)return lc;var t,e=pp,n=e.length,i,r="value"in wr?wr.value:wr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return lc=r.slice(t,1<i?1-i:void 0)}function cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Km(){return!1}function Wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gl:Km,this.isPropagationStopped=Km,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),e}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mp=Wn(Uo),Ja=Ct({},Uo,{view:0,detail:0}),C1=Wn(Ja),Gu,Wu,Yo,du=Ct({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(Gu=t.screenX-Yo.screenX,Wu=t.screenY-Yo.screenY):Wu=Gu=0,Yo=t),Gu)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),Jm=Wn(du),R1=Ct({},du,{dataTransfer:0}),P1=Wn(R1),L1=Ct({},Ja,{relatedTarget:0}),ju=Wn(L1),D1=Ct({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),I1=Wn(D1),N1=Ct({},Uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F1=Wn(N1),U1=Ct({},Uo,{data:0}),Zm=Wn(U1),O1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B1[t])?!!e[t]:!1}function gp(){return z1}var H1=Ct({},Ja,{key:function(t){if(t.key){var e=O1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gp,charCode:function(t){return t.type==="keypress"?cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V1=Wn(H1),G1=Ct({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=Wn(G1),W1=Ct({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gp}),j1=Wn(W1),X1=Ct({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),q1=Wn(X1),$1=Ct({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y1=Wn($1),K1=[9,13,27,32],vp=Ji&&"CompositionEvent"in window,ma=null;Ji&&"documentMode"in document&&(ma=document.documentMode);var J1=Ji&&"TextEvent"in window&&!ma,vx=Ji&&(!vp||ma&&8<ma&&11>=ma),eg=" ",tg=!1;function xx(t,e){switch(t){case"keyup":return K1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var eo=!1;function Z1(t,e){switch(t){case"compositionend":return yx(e);case"keypress":return e.which!==32?null:(tg=!0,eg);case"textInput":return t=e.data,t===eg&&tg?null:t;default:return null}}function Q1(t,e){if(eo)return t==="compositionend"||!vp&&xx(t,e)?(t=gx(),lc=pp=wr=null,eo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vx&&e.locale!=="ko"?null:e.data;default:return null}}var eE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eE[t.type]:e==="textarea"}function _x(t,e,n,i){Jv(i),e=Ic(e,"onChange"),0<e.length&&(n=new mp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ga=null,Pa=null;function tE(t){Lx(t,0)}function fu(t){var e=io(t);if(Wv(e))return t}function nE(t,e){if(t==="change")return e}var Sx=!1;if(Ji){var Xu;if(Ji){var qu="oninput"in document;if(!qu){var ig=document.createElement("div");ig.setAttribute("oninput","return;"),qu=typeof ig.oninput=="function"}Xu=qu}else Xu=!1;Sx=Xu&&(!document.documentMode||9<document.documentMode)}function rg(){ga&&(ga.detachEvent("onpropertychange",Ex),Pa=ga=null)}function Ex(t){if(t.propertyName==="value"&&fu(Pa)){var e=[];_x(e,Pa,t,cp(t)),tx(tE,e)}}function iE(t,e,n){t==="focusin"?(rg(),ga=e,Pa=n,ga.attachEvent("onpropertychange",Ex)):t==="focusout"&&rg()}function rE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(Pa)}function sE(t,e){if(t==="click")return fu(e)}function oE(t,e){if(t==="input"||t==="change")return fu(e)}function aE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pi=typeof Object.is=="function"?Object.is:aE;function La(t,e){if(pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nf.call(e,r)||!pi(t[r],e[r]))return!1}return!0}function sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function og(t,e){var n=sg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sg(n)}}function Mx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wx(){for(var t=window,e=Ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ac(t.document)}return e}function xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lE(t){var e=wx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Mx(n.ownerDocument.documentElement,n)){if(i!==null&&xp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=og(n,s);var o=og(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cE=Ji&&"documentMode"in document&&11>=document.documentMode,to=null,Ef=null,va=null,Mf=!1;function ag(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mf||to==null||to!==Ac(i)||(i=to,"selectionStart"in i&&xp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),va&&La(va,i)||(va=i,i=Ic(Ef,"onSelect"),0<i.length&&(e=new mp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=to)))}function vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var no={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},$u={},Tx={};Ji&&(Tx=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function hu(t){if($u[t])return $u[t];if(!no[t])return t;var e=no[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Tx)return $u[t]=e[n];return t}var Ax=hu("animationend"),bx=hu("animationiteration"),Cx=hu("animationstart"),Rx=hu("transitionend"),Px=new Map,lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(t,e){Px.set(t,e),bs(e,[t])}for(var Yu=0;Yu<lg.length;Yu++){var Ku=lg[Yu],uE=Ku.toLowerCase(),dE=Ku[0].toUpperCase()+Ku.slice(1);Hr(uE,"on"+dE)}Hr(Ax,"onAnimationEnd");Hr(bx,"onAnimationIteration");Hr(Cx,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(Rx,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function cg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,u1(i,e,void 0,t),t.currentTarget=null}function Lx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;cg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;cg(r,a,c),s=l}}}if(Cc)throw t=xf,Cc=!1,xf=null,t}function _t(t,e){var n=e[Cf];n===void 0&&(n=e[Cf]=new Set);var i=t+"__bubble";n.has(i)||(Dx(e,t,2,!1),n.add(i))}function Ju(t,e,n){var i=0;e&&(i|=4),Dx(n,t,i,e)}var xl="_reactListening"+Math.random().toString(36).slice(2);function Da(t){if(!t[xl]){t[xl]=!0,Bv.forEach(function(n){n!=="selectionchange"&&(fE.has(n)||Ju(n,!1,t),Ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xl]||(e[xl]=!0,Ju("selectionchange",!1,e))}}function Dx(t,e,n,i){switch(mx(e)){case 1:var r=A1;break;case 4:r=b1;break;default:r=hp}n=r.bind(null,e,n,t),r=void 0,!vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Zu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ls(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}tx(function(){var c=s,u=cp(n),f=[];e:{var h=Px.get(t);if(h!==void 0){var m=mp,v=t;switch(t){case"keypress":if(cc(n)===0)break e;case"keydown":case"keyup":m=V1;break;case"focusin":v="focus",m=ju;break;case"focusout":v="blur",m=ju;break;case"beforeblur":case"afterblur":m=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=P1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=j1;break;case Ax:case bx:case Cx:m=I1;break;case Rx:m=q1;break;case"scroll":m=C1;break;case"wheel":m=Y1;break;case"copy":case"cut":case"paste":m=F1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qm}var E=(e&4)!==0,g=!E&&t==="scroll",d=E?h!==null?h+"Capture":null:h;E=[];for(var x=c,y;x!==null;){y=x;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,d!==null&&(_=Aa(x,d),_!=null&&E.push(Ia(x,_,y)))),g)break;x=x.return}0<E.length&&(h=new m(h,v,null,n,u),f.push({event:h,listeners:E}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==mf&&(v=n.relatedTarget||n.fromElement)&&(ls(v)||v[Zi]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?ls(v):null,v!==null&&(g=Cs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(E=Jm,_="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(E=Qm,_="onPointerLeave",d="onPointerEnter",x="pointer"),g=m==null?h:io(m),y=v==null?h:io(v),h=new E(_,x+"leave",m,n,u),h.target=g,h.relatedTarget=y,_=null,ls(u)===c&&(E=new E(d,x+"enter",v,n,u),E.target=y,E.relatedTarget=g,_=E),g=_,m&&v)t:{for(E=m,d=v,x=0,y=E;y;y=Ns(y))x++;for(y=0,_=d;_;_=Ns(_))y++;for(;0<x-y;)E=Ns(E),x--;for(;0<y-x;)d=Ns(d),y--;for(;x--;){if(E===d||d!==null&&E===d.alternate)break t;E=Ns(E),d=Ns(d)}E=null}else E=null;m!==null&&ug(f,h,m,E,!1),v!==null&&g!==null&&ug(f,g,v,E,!0)}}e:{if(h=c?io(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var w=nE;else if(ng(h))if(Sx)w=oE;else{w=rE;var T=iE}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=sE);if(w&&(w=w(t,c))){_x(f,w,n,u);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&uf(h,"number",h.value)}switch(T=c?io(c):window,t){case"focusin":(ng(T)||T.contentEditable==="true")&&(to=T,Ef=c,va=null);break;case"focusout":va=Ef=to=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,ag(f,n,u);break;case"selectionchange":if(cE)break;case"keydown":case"keyup":ag(f,n,u)}var b;if(vp)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else eo?xx(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(vx&&n.locale!=="ko"&&(eo||S!=="onCompositionStart"?S==="onCompositionEnd"&&eo&&(b=gx()):(wr=u,pp="value"in wr?wr.value:wr.textContent,eo=!0)),T=Ic(c,S),0<T.length&&(S=new Zm(S,t,null,n,u),f.push({event:S,listeners:T}),b?S.data=b:(b=yx(n),b!==null&&(S.data=b)))),(b=J1?Z1(t,n):Q1(t,n))&&(c=Ic(c,"onBeforeInput"),0<c.length&&(u=new Zm("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=b))}Lx(f,e)})}function Ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ic(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(t,n),s!=null&&i.unshift(Ia(t,s,r)),s=Aa(t,e),s!=null&&i.push(Ia(t,s,r))),t=t.return}return i}function Ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ug(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Aa(n,s),l!=null&&o.unshift(Ia(n,l,a))):r||(l=Aa(n,s),l!=null&&o.push(Ia(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hE=/\r\n?/g,pE=/\u0000|\uFFFD/g;function dg(t){return(typeof t=="string"?t:""+t).replace(hE,`
`).replace(pE,"")}function yl(t,e,n){if(e=dg(e),dg(t)!==e&&n)throw Error(ce(425))}function Nc(){}var wf=null,Tf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,mE=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,gE=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(t){return fg.resolve(null).then(t).catch(vE)}:bf;function vE(t){setTimeout(function(){throw t})}function Qu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Oo,Na="__reactProps$"+Oo,Zi="__reactContainer$"+Oo,Cf="__reactEvents$"+Oo,xE="__reactListeners$"+Oo,yE="__reactHandles$"+Oo;function ls(t){var e=t[Ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zi]||n[Ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hg(t);t!==null;){if(n=t[Ti])return n;t=hg(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[Ti]||t[Zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function pu(t){return t[Na]||null}var Rf=[],ro=-1;function Vr(t){return{current:t}}function St(t){0>ro||(t.current=Rf[ro],Rf[ro]=null,ro--)}function yt(t,e){ro++,Rf[ro]=t.current,t.current=e}var kr={},dn=Vr(kr),An=Vr(!1),xs=kr;function Eo(t,e){var n=t.type.contextTypes;if(!n)return kr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function Fc(){St(An),St(dn)}function pg(t,e,n){if(dn.current!==kr)throw Error(ce(168));yt(dn,e),yt(An,n)}function Ix(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,i1(t)||"Unknown",r));return Ct({},n,i)}function Uc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,xs=dn.current,yt(dn,t),yt(An,An.current),!0}function mg(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Ix(t,e,xs),i.__reactInternalMemoizedMergedChildContext=t,St(An),St(dn),yt(dn,t)):St(An),yt(An,n)}var Gi=null,mu=!1,ed=!1;function Nx(t){Gi===null?Gi=[t]:Gi.push(t)}function _E(t){mu=!0,Nx(t)}function Gr(){if(!ed&&Gi!==null){ed=!0;var t=0,e=ct;try{var n=Gi;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Gi=null,mu=!1}catch(r){throw Gi!==null&&(Gi=Gi.slice(t+1)),sx(up,Gr),r}finally{ct=e,ed=!1}}return null}var so=[],oo=0,Oc=null,kc=0,Yn=[],Kn=0,ys=null,ji=1,Xi="";function is(t,e){so[oo++]=kc,so[oo++]=Oc,Oc=t,kc=e}function Fx(t,e,n){Yn[Kn++]=ji,Yn[Kn++]=Xi,Yn[Kn++]=ys,ys=t;var i=ji;t=Xi;var r=32-fi(i)-1;i&=~(1<<r),n+=1;var s=32-fi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ji=1<<32-fi(e)+r|n<<r|i,Xi=s+t}else ji=1<<s|n<<r|i,Xi=t}function yp(t){t.return!==null&&(is(t,1),Fx(t,1,0))}function _p(t){for(;t===Oc;)Oc=so[--oo],so[oo]=null,kc=so[--oo],so[oo]=null;for(;t===ys;)ys=Yn[--Kn],Yn[Kn]=null,Xi=Yn[--Kn],Yn[Kn]=null,ji=Yn[--Kn],Yn[Kn]=null}var Hn=null,zn=null,Mt=!1,ci=null;function Ux(t,e){var n=Jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Hn=t,zn=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Hn=t,zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ys!==null?{id:ji,overflow:Xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Hn=t,zn=null,!0):!1;default:return!1}}function Pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lf(t){if(Mt){var e=zn;if(e){var n=e;if(!gg(t,e)){if(Pf(t))throw Error(ce(418));e=Lr(n.nextSibling);var i=Hn;e&&gg(t,e)?Ux(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Hn=t)}}else{if(Pf(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Mt=!1,Hn=t}}}function vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function _l(t){if(t!==Hn)return!1;if(!Mt)return vg(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=zn)){if(Pf(t))throw Ox(),Error(ce(418));for(;e;)Ux(t,e),e=Lr(e.nextSibling)}if(vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zn=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zn=null}}else zn=Hn?Lr(t.stateNode.nextSibling):null;return!0}function Ox(){for(var t=zn;t;)t=Lr(t.nextSibling)}function Mo(){zn=Hn=null,Mt=!1}function Sp(t){ci===null?ci=[t]:ci.push(t)}var SE=ir.ReactCurrentBatchConfig;function Ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Sl(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xg(t){var e=t._init;return e(t._payload)}function kx(t){function e(d,x){if(t){var y=d.deletions;y===null?(d.deletions=[x],d.flags|=16):y.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Fr(d,x),d.index=0,d.sibling=null,d}function s(d,x,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<x?(d.flags|=2,x):y):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,x,y,_){return x===null||x.tag!==6?(x=ad(y,d.mode,_),x.return=d,x):(x=r(x,y),x.return=d,x)}function l(d,x,y,_){var w=y.type;return w===Qs?u(d,x,y.props.children,_,y.key):x!==null&&(x.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===yr&&xg(w)===x.type)?(_=r(x,y.props),_.ref=Ko(d,x,y),_.return=d,_):(_=gc(y.type,y.key,y.props,null,d.mode,_),_.ref=Ko(d,x,y),_.return=d,_)}function c(d,x,y,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=ld(y,d.mode,_),x.return=d,x):(x=r(x,y.children||[]),x.return=d,x)}function u(d,x,y,_,w){return x===null||x.tag!==7?(x=ms(y,d.mode,_,w),x.return=d,x):(x=r(x,y),x.return=d,x)}function f(d,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=ad(""+x,d.mode,y),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ul:return y=gc(x.type,x.key,x.props,null,d.mode,y),y.ref=Ko(d,null,x),y.return=d,y;case Zs:return x=ld(x,d.mode,y),x.return=d,x;case yr:var _=x._init;return f(d,_(x._payload),y)}if(la(x)||jo(x))return x=ms(x,d.mode,y,null),x.return=d,x;Sl(d,x)}return null}function h(d,x,y,_){var w=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:a(d,x,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ul:return y.key===w?l(d,x,y,_):null;case Zs:return y.key===w?c(d,x,y,_):null;case yr:return w=y._init,h(d,x,w(y._payload),_)}if(la(y)||jo(y))return w!==null?null:u(d,x,y,_,null);Sl(d,y)}return null}function m(d,x,y,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return d=d.get(y)||null,a(x,d,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ul:return d=d.get(_.key===null?y:_.key)||null,l(x,d,_,w);case Zs:return d=d.get(_.key===null?y:_.key)||null,c(x,d,_,w);case yr:var T=_._init;return m(d,x,y,T(_._payload),w)}if(la(_)||jo(_))return d=d.get(y)||null,u(x,d,_,w,null);Sl(x,_)}return null}function v(d,x,y,_){for(var w=null,T=null,b=x,S=x=0,C=null;b!==null&&S<y.length;S++){b.index>S?(C=b,b=null):C=b.sibling;var L=h(d,b,y[S],_);if(L===null){b===null&&(b=C);break}t&&b&&L.alternate===null&&e(d,b),x=s(L,x,S),T===null?w=L:T.sibling=L,T=L,b=C}if(S===y.length)return n(d,b),Mt&&is(d,S),w;if(b===null){for(;S<y.length;S++)b=f(d,y[S],_),b!==null&&(x=s(b,x,S),T===null?w=b:T.sibling=b,T=b);return Mt&&is(d,S),w}for(b=i(d,b);S<y.length;S++)C=m(b,d,S,y[S],_),C!==null&&(t&&C.alternate!==null&&b.delete(C.key===null?S:C.key),x=s(C,x,S),T===null?w=C:T.sibling=C,T=C);return t&&b.forEach(function(D){return e(d,D)}),Mt&&is(d,S),w}function E(d,x,y,_){var w=jo(y);if(typeof w!="function")throw Error(ce(150));if(y=w.call(y),y==null)throw Error(ce(151));for(var T=w=null,b=x,S=x=0,C=null,L=y.next();b!==null&&!L.done;S++,L=y.next()){b.index>S?(C=b,b=null):C=b.sibling;var D=h(d,b,L.value,_);if(D===null){b===null&&(b=C);break}t&&b&&D.alternate===null&&e(d,b),x=s(D,x,S),T===null?w=D:T.sibling=D,T=D,b=C}if(L.done)return n(d,b),Mt&&is(d,S),w;if(b===null){for(;!L.done;S++,L=y.next())L=f(d,L.value,_),L!==null&&(x=s(L,x,S),T===null?w=L:T.sibling=L,T=L);return Mt&&is(d,S),w}for(b=i(d,b);!L.done;S++,L=y.next())L=m(b,d,S,L.value,_),L!==null&&(t&&L.alternate!==null&&b.delete(L.key===null?S:L.key),x=s(L,x,S),T===null?w=L:T.sibling=L,T=L);return t&&b.forEach(function(I){return e(d,I)}),Mt&&is(d,S),w}function g(d,x,y,_){if(typeof y=="object"&&y!==null&&y.type===Qs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ul:e:{for(var w=y.key,T=x;T!==null;){if(T.key===w){if(w=y.type,w===Qs){if(T.tag===7){n(d,T.sibling),x=r(T,y.props.children),x.return=d,d=x;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===yr&&xg(w)===T.type){n(d,T.sibling),x=r(T,y.props),x.ref=Ko(d,T,y),x.return=d,d=x;break e}n(d,T);break}else e(d,T);T=T.sibling}y.type===Qs?(x=ms(y.props.children,d.mode,_,y.key),x.return=d,d=x):(_=gc(y.type,y.key,y.props,null,d.mode,_),_.ref=Ko(d,x,y),_.return=d,d=_)}return o(d);case Zs:e:{for(T=y.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(d,x.sibling),x=r(x,y.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=ld(y,d.mode,_),x.return=d,d=x}return o(d);case yr:return T=y._init,g(d,x,T(y._payload),_)}if(la(y))return v(d,x,y,_);if(jo(y))return E(d,x,y,_);Sl(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,y),x.return=d,d=x):(n(d,x),x=ad(y,d.mode,_),x.return=d,d=x),o(d)):n(d,x)}return g}var wo=kx(!0),Bx=kx(!1),Bc=Vr(null),zc=null,ao=null,Ep=null;function Mp(){Ep=ao=zc=null}function wp(t){var e=Bc.current;St(Bc),t._currentValue=e}function Df(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function go(t,e){zc=t,Ep=ao=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tn=!0),t.firstContext=null)}function ei(t){var e=t._currentValue;if(Ep!==t)if(t={context:t,memoizedValue:e,next:null},ao===null){if(zc===null)throw Error(ce(308));ao=t,zc.dependencies={lanes:0,firstContext:t}}else ao=ao.next=t;return e}var cs=null;function Tp(t){cs===null?cs=[t]:cs.push(t)}function zx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Tp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Qi(t,i)}function Qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function Ap(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Qi(t,n)}return r=i.interleaved,r===null?(e.next=e,Tp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Qi(t,n)}function uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dp(t,n)}}function yg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hc(t,e,n,i){var r=t.updateQueue;_r=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,E=a;switch(h=e,m=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){f=v.call(m,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,h=typeof v=="function"?v.call(m,f,h):v,h==null)break e;f=Ct({},f,h);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ss|=o,t.lanes=o,t.memoizedState=f}}function _g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Qa={},Ri=Vr(Qa),Fa=Vr(Qa),Ua=Vr(Qa);function us(t){if(t===Qa)throw Error(ce(174));return t}function bp(t,e){switch(yt(Ua,e),yt(Fa,t),yt(Ri,Qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ff(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ff(e,t)}St(Ri),yt(Ri,e)}function To(){St(Ri),St(Fa),St(Ua)}function Vx(t){us(Ua.current);var e=us(Ri.current),n=ff(e,t.type);e!==n&&(yt(Fa,t),yt(Ri,n))}function Cp(t){Fa.current===t&&(St(Ri),St(Fa))}var Tt=Vr(0);function Vc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var td=[];function Rp(){for(var t=0;t<td.length;t++)td[t]._workInProgressVersionPrimary=null;td.length=0}var dc=ir.ReactCurrentDispatcher,nd=ir.ReactCurrentBatchConfig,_s=0,bt=null,zt=null,jt=null,Gc=!1,xa=!1,Oa=0,EE=0;function nn(){throw Error(ce(321))}function Pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pi(t[n],e[n]))return!1;return!0}function Lp(t,e,n,i,r,s){if(_s=s,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dc.current=t===null||t.memoizedState===null?AE:bE,t=n(i,r),xa){s=0;do{if(xa=!1,Oa=0,25<=s)throw Error(ce(301));s+=1,jt=zt=null,e.updateQueue=null,dc.current=CE,t=n(i,r)}while(xa)}if(dc.current=Wc,e=zt!==null&&zt.next!==null,_s=0,jt=zt=bt=null,Gc=!1,e)throw Error(ce(300));return t}function Dp(){var t=Oa!==0;return Oa=0,t}function Mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?bt.memoizedState=jt=t:jt=jt.next=t,jt}function ti(){if(zt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=jt===null?bt.memoizedState:jt.next;if(e!==null)jt=e,zt=t;else{if(t===null)throw Error(ce(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},jt===null?bt.memoizedState=jt=t:jt=jt.next=t}return jt}function ka(t,e){return typeof e=="function"?e(t):e}function id(t){var e=ti(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((_s&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,bt.lanes|=u,Ss|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,pi(i,e.memoizedState)||(Tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,bt.lanes|=s,Ss|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rd(t){var e=ti(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);pi(s,e.memoizedState)||(Tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Gx(){}function Wx(t,e){var n=bt,i=ti(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,Tn=!0),i=i.queue,Ip(qx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,Ba(9,Xx.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(ce(349));_s&30||jx(n,e,r)}return r}function jx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xx(t,e,n,i){e.value=n,e.getSnapshot=i,$x(e)&&Yx(t)}function qx(t,e,n){return n(function(){$x(e)&&Yx(t)})}function $x(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pi(t,n)}catch{return!0}}function Yx(t){var e=Qi(t,1);e!==null&&hi(e,t,1,-1)}function Sg(t){var e=Mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=TE.bind(null,bt,t),[e.memoizedState,t]}function Ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Kx(){return ti().memoizedState}function fc(t,e,n,i){var r=Mi();bt.flags|=t,r.memoizedState=Ba(1|e,n,void 0,i===void 0?null:i)}function gu(t,e,n,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&Pp(i,o.deps)){r.memoizedState=Ba(e,n,s,i);return}}bt.flags|=t,r.memoizedState=Ba(1|e,n,s,i)}function Eg(t,e){return fc(8390656,8,t,e)}function Ip(t,e){return gu(2048,8,t,e)}function Jx(t,e){return gu(4,2,t,e)}function Zx(t,e){return gu(4,4,t,e)}function Qx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ey(t,e,n){return n=n!=null?n.concat([t]):null,gu(4,4,Qx.bind(null,e,t),n)}function Np(){}function ty(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Pp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ny(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Pp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function iy(t,e,n){return _s&21?(pi(n,e)||(n=lx(),bt.lanes|=n,Ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=n)}function ME(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=nd.transition;nd.transition={};try{t(!1),e()}finally{ct=n,nd.transition=i}}function ry(){return ti().memoizedState}function wE(t,e,n){var i=Nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},sy(t))oy(e,n);else if(n=zx(t,e,n,i),n!==null){var r=mn();hi(n,t,i,r),ay(n,e,i)}}function TE(t,e,n){var i=Nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(sy(t))oy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,pi(a,o)){var l=e.interleaved;l===null?(r.next=r,Tp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=zx(t,e,r,i),n!==null&&(r=mn(),hi(n,t,i,r),ay(n,e,i))}}function sy(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function oy(t,e){xa=Gc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ay(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dp(t,n)}}var Wc={readContext:ei,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},AE={readContext:ei,useCallback:function(t,e){return Mi().memoizedState=[t,e===void 0?null:e],t},useContext:ei,useEffect:Eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fc(4194308,4,Qx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fc(4194308,4,t,e)},useInsertionEffect:function(t,e){return fc(4,2,t,e)},useMemo:function(t,e){var n=Mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=wE.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=Mi();return t={current:t},e.memoizedState=t},useState:Sg,useDebugValue:Np,useDeferredValue:function(t){return Mi().memoizedState=t},useTransition:function(){var t=Sg(!1),e=t[0];return t=ME.bind(null,t[1]),Mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=Mi();if(Mt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Xt===null)throw Error(ce(349));_s&30||jx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Eg(qx.bind(null,i,s,t),[t]),i.flags|=2048,Ba(9,Xx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Mi(),e=Xt.identifierPrefix;if(Mt){var n=Xi,i=ji;n=(i&~(1<<32-fi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=EE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bE={readContext:ei,useCallback:ty,useContext:ei,useEffect:Ip,useImperativeHandle:ey,useInsertionEffect:Jx,useLayoutEffect:Zx,useMemo:ny,useReducer:id,useRef:Kx,useState:function(){return id(ka)},useDebugValue:Np,useDeferredValue:function(t){var e=ti();return iy(e,zt.memoizedState,t)},useTransition:function(){var t=id(ka)[0],e=ti().memoizedState;return[t,e]},useMutableSource:Gx,useSyncExternalStore:Wx,useId:ry,unstable_isNewReconciler:!1},CE={readContext:ei,useCallback:ty,useContext:ei,useEffect:Ip,useImperativeHandle:ey,useInsertionEffect:Jx,useLayoutEffect:Zx,useMemo:ny,useReducer:rd,useRef:Kx,useState:function(){return rd(ka)},useDebugValue:Np,useDeferredValue:function(t){var e=ti();return zt===null?e.memoizedState=t:iy(e,zt.memoizedState,t)},useTransition:function(){var t=rd(ka)[0],e=ti().memoizedState;return[t,e]},useMutableSource:Gx,useSyncExternalStore:Wx,useId:ry,unstable_isNewReconciler:!1};function ai(t,e){if(t&&t.defaultProps){e=Ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function If(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?Cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Nr(t),s=$i(i,r);s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,r),e!==null&&(hi(e,t,r,i),uc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Nr(t),s=$i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,r),e!==null&&(hi(e,t,r,i),uc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mn(),i=Nr(t),r=$i(n,i);r.tag=2,e!=null&&(r.callback=e),e=Dr(t,r,i),e!==null&&(hi(e,t,i,n),uc(e,t,i))}};function Mg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(n,i)||!La(r,s):!0}function ly(t,e,n){var i=!1,r=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=bn(e)?xs:dn.current,i=e.contextTypes,s=(i=i!=null)?Eo(t,r):kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function Nf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ap(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=bn(e)?xs:dn.current,r.context=Eo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(If(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vu.enqueueReplaceState(r,r.state,null),Hc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",i=e;do n+=n1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function sd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var RE=typeof WeakMap=="function"?WeakMap:Map;function cy(t,e,n){n=$i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Xc||(Xc=!0,jf=i),Ff(t,e)},n}function uy(t,e,n){n=$i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ff(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ff(t,e),typeof i!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new RE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=GE.bind(null,t,e,n),e.then(t,t))}function Ag(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$i(-1,1),e.tag=2,Dr(n,e,1))),n.lanes|=1),t)}var PE=ir.ReactCurrentOwner,Tn=!1;function hn(t,e,n,i){e.child=t===null?Bx(e,null,n,i):wo(e,t.child,n,i)}function Cg(t,e,n,i,r){n=n.render;var s=e.ref;return go(e,r),i=Lp(t,e,n,i,s,r),n=Dp(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(Mt&&n&&yp(e),e.flags|=1,hn(t,e,i,r),e.child)}function Rg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Vp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dy(t,e,s,i,r)):(t=gc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,i)&&t.ref===e.ref)return er(t,e,r)}return e.flags|=1,t=Fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function dy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(La(s,i)&&t.ref===e.ref)if(Tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Tn=!0);else return e.lanes=t.lanes,er(t,e,r)}return Uf(t,e,n,i,r)}function fy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(co,On),On|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(co,On),On|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,yt(co,On),On|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,yt(co,On),On|=i;return hn(t,e,r,n),e.child}function hy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uf(t,e,n,i,r){var s=bn(n)?xs:dn.current;return s=Eo(e,s),go(e,r),n=Lp(t,e,n,i,s,r),i=Dp(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(Mt&&i&&yp(e),e.flags|=1,hn(t,e,n,r),e.child)}function Pg(t,e,n,i,r){if(bn(n)){var s=!0;Uc(e)}else s=!1;if(go(e,r),e.stateNode===null)hc(t,e),ly(e,n,i),Nf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=bn(n)?xs:dn.current,c=Eo(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&wg(e,o,i,c),_r=!1;var h=e.memoizedState;o.state=h,Hc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||An.current||_r?(typeof u=="function"&&(If(e,n,u,i),l=e.memoizedState),(a=_r||Mg(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Hx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ai(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=bn(n)?xs:dn.current,l=Eo(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&wg(e,o,i,l),_r=!1,h=e.memoizedState,o.state=h,Hc(e,i,o,r);var v=e.memoizedState;a!==f||h!==v||An.current||_r?(typeof m=="function"&&(If(e,n,m,i),v=e.memoizedState),(c=_r||Mg(e,n,c,i,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Of(t,e,n,i,s,r)}function Of(t,e,n,i,r,s){hy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&mg(e,n,!1),er(t,e,s);i=e.stateNode,PE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=wo(e,t.child,null,s),e.child=wo(e,null,a,s)):hn(t,e,a,s),e.memoizedState=i.state,r&&mg(e,n,!0),e.child}function py(t){var e=t.stateNode;e.pendingContext?pg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pg(t,e.context,!1),bp(t,e.containerInfo)}function Lg(t,e,n,i,r){return Mo(),Sp(r),e.flags|=256,hn(t,e,n,i),e.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function Bf(t){return{baseLanes:t,cachePool:null,transitions:null}}function my(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(Tt,r&1),t===null)return Lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_u(o,i,0,null),t=ms(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bf(n),e.memoizedState=kf,t):Fp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return LE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Fr(a,s):(s=ms(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Bf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kf,i}return s=t.child,t=s.sibling,i=Fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Fp(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function El(t,e,n,i){return i!==null&&Sp(i),wo(e,t.child,null,n),t=Fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=sd(Error(ce(422))),El(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_u({mode:"visible",children:i.children},r,0,null),s=ms(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&wo(e,t.child,null,o),e.child.memoizedState=Bf(o),e.memoizedState=kf,s);if(!(e.mode&1))return El(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=sd(s,i,void 0),El(t,e,o,i)}if(a=(o&t.childLanes)!==0,Tn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Qi(t,r),hi(i,t,r,-1))}return Hp(),i=sd(Error(ce(421))),El(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=WE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,zn=Lr(r.nextSibling),Hn=e,Mt=!0,ci=null,t!==null&&(Yn[Kn++]=ji,Yn[Kn++]=Xi,Yn[Kn++]=ys,ji=t.id,Xi=t.overflow,ys=e),e=Fp(e,i.children),e.flags|=4096,e)}function Dg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Df(t.return,e,n)}function od(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function gy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(hn(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,n,e);else if(t.tag===19)Dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Vc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),od(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Vc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}od(e,!0,n,null,s);break;case"together":od(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DE(t,e,n){switch(e.tag){case 3:py(e),Mo();break;case 5:Vx(e);break;case 1:bn(e.type)&&Uc(e);break;case 4:bp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(Bc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?my(t,e,n):(yt(Tt,Tt.current&1),t=er(t,e,n),t!==null?t.sibling:null);yt(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return gy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,fy(t,e,n)}return er(t,e,n)}var vy,zf,xy,yy;vy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zf=function(){};xy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,us(Ri.current);var s=null;switch(n){case"input":r=lf(t,r),i=lf(t,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=df(t,r),i=df(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Nc)}hf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};yy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Jo(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function IE(t,e,n){var i=e.pendingProps;switch(_p(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return bn(e.type)&&Fc(),rn(e),null;case 3:return i=e.stateNode,To(),St(An),St(dn),Rp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(_l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&($f(ci),ci=null))),zf(t,e),rn(e),null;case 5:Cp(e);var r=us(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)xy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return rn(e),null}if(t=us(Ri.current),_l(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ti]=e,i[Na]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<ua.length;r++)_t(ua[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":Hm(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Gm(i,s),_t("invalid",i)}hf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&yl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yl(i.textContent,a,t),r=["children",""+a]):wa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":dl(i),Vm(i,s,!0);break;case"textarea":dl(i),Wm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ti]=e,t[Na]=i,vy(t,e,!1,!1),e.stateNode=t;e:{switch(o=pf(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<ua.length;r++)_t(ua[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":Hm(t,i),r=lf(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Gm(t,i),r=df(t,i),_t("invalid",t);break;default:r=i}hf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Kv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$v(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ta(t,l):typeof l=="number"&&Ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&sp(t,s,l,o))}switch(n){case"input":dl(t),Vm(t,i,!1);break;case"textarea":dl(t),Wm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?fo(t,!!i.multiple,s,!1):i.defaultValue!=null&&fo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(t&&e.stateNode!=null)yy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=us(Ua.current),us(Ri.current),_l(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ti]=e,(s=i.nodeValue!==n)&&(t=Hn,t!==null))switch(t.tag){case 3:yl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ti]=e,e.stateNode=i}return rn(e),null;case 13:if(St(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&zn!==null&&e.mode&1&&!(e.flags&128))Ox(),Mo(),e.flags|=98560,s=!1;else if(s=_l(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Ti]=e}else Mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else ci!==null&&($f(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Ht===0&&(Ht=3):Hp())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return To(),zf(t,e),t===null&&Da(e.stateNode.containerInfo),rn(e),null;case 10:return wp(e.type._context),rn(e),null;case 17:return bn(e.type)&&Fc(),rn(e),null;case 19:if(St(Tt),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Jo(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vc(t),o!==null){for(e.flags|=128,Jo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>bo&&(e.flags|=128,i=!0,Jo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Vc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return rn(e),null}else 2*Nt()-s.renderingStartTime>bo&&n!==1073741824&&(e.flags|=128,i=!0,Jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=Tt.current,yt(Tt,i?n&1|2:n&1),e):(rn(e),null);case 22:case 23:return zp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?On&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function NE(t,e){switch(_p(e),e.tag){case 1:return bn(e.type)&&Fc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return To(),St(An),St(dn),Rp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cp(e),null;case 13:if(St(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(Tt),null;case 4:return To(),null;case 10:return wp(e.type._context),null;case 22:case 23:return zp(),null;case 24:return null;default:return null}}var Ml=!1,ln=!1,FE=typeof WeakSet=="function"?WeakSet:Set,Te=null;function lo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Lt(t,e,i)}else n.current=null}function Hf(t,e,n){try{n()}catch(i){Lt(t,e,i)}}var Ig=!1;function UE(t,e){if(wf=Lc,t=wx(),xp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tf={focusedElem:t,selectionRange:n},Lc=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,g=v.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:ai(e.type,E),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(_){Lt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return v=Ig,Ig=!1,v}function ya(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hf(e,n,s)}r=r.next}while(r!==i)}}function xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _y(t){var e=t.alternate;e!==null&&(t.alternate=null,_y(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ti],delete e[Na],delete e[Cf],delete e[xE],delete e[yE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sy(t){return t.tag===5||t.tag===3||t.tag===4}function Ng(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nc));else if(i!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}function Wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wf(t,e,n),t=t.sibling;t!==null;)Wf(t,e,n),t=t.sibling}var Yt=null,li=!1;function ur(t,e,n){for(n=n.child;n!==null;)Ey(t,e,n),n=n.sibling}function Ey(t,e,n){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:ln||lo(n,e);case 6:var i=Yt,r=li;Yt=null,ur(t,e,n),Yt=i,li=r,Yt!==null&&(li?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(li?(t=Yt,n=n.stateNode,t.nodeType===8?Qu(t.parentNode,n):t.nodeType===1&&Qu(t,n),Ra(t)):Qu(Yt,n.stateNode));break;case 4:i=Yt,r=li,Yt=n.stateNode.containerInfo,li=!0,ur(t,e,n),Yt=i,li=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hf(n,e,o),r=r.next}while(r!==i)}ur(t,e,n);break;case 1:if(!ln&&(lo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Lt(n,e,a)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,ur(t,e,n),ln=i):ur(t,e,n);break;default:ur(t,e,n)}}function Fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FE),e.forEach(function(i){var r=jE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ni(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,li=!1;break e;case 3:Yt=a.stateNode.containerInfo,li=!0;break e;case 4:Yt=a.stateNode.containerInfo,li=!0;break e}a=a.return}if(Yt===null)throw Error(ce(160));Ey(s,o,r),Yt=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Lt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)My(e,t),e=e.sibling}function My(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(e,t),yi(t),i&4){try{ya(3,t,t.return),xu(3,t)}catch(E){Lt(t,t.return,E)}try{ya(5,t,t.return)}catch(E){Lt(t,t.return,E)}}break;case 1:ni(e,t),yi(t),i&512&&n!==null&&lo(n,n.return);break;case 5:if(ni(e,t),yi(t),i&512&&n!==null&&lo(n,n.return),t.flags&32){var r=t.stateNode;try{Ta(r,"")}catch(E){Lt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&jv(r,s),pf(a,o);var c=pf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Kv(r,f):u==="dangerouslySetInnerHTML"?$v(r,f):u==="children"?Ta(r,f):sp(r,u,f,c)}switch(a){case"input":cf(r,s);break;case"textarea":Xv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?fo(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?fo(r,!!s.multiple,s.defaultValue,!0):fo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Na]=s}catch(E){Lt(t,t.return,E)}}break;case 6:if(ni(e,t),yi(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Lt(t,t.return,E)}}break;case 3:if(ni(e,t),yi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(E){Lt(t,t.return,E)}break;case 4:ni(e,t),yi(t);break;case 13:ni(e,t),yi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kp=Nt())),i&4&&Fg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(c=ln)||u,ni(e,t),ln=c):ni(e,t),yi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Te=t,u=t.child;u!==null;){for(f=Te=u;Te!==null;){switch(h=Te,m=h.child,h.tag){case 0:case 11:case 14:case 15:ya(4,h,h.return);break;case 1:lo(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){Lt(i,n,E)}}break;case 5:lo(h,h.return);break;case 22:if(h.memoizedState!==null){Og(f);continue}}m!==null?(m.return=h,Te=m):Og(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Yv("display",o))}catch(E){Lt(t,t.return,E)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(E){Lt(t,t.return,E)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ni(e,t),yi(t),i&4&&Fg(t);break;case 21:break;default:ni(e,t),yi(t)}}function yi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sy(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ta(r,""),i.flags&=-33);var s=Ng(t);Wf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ng(t);Gf(t,a,o);break;default:throw Error(ce(161))}}catch(l){Lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OE(t,e,n){Te=t,wy(t)}function wy(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ml;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||ln;a=Ml;var c=ln;if(Ml=o,(ln=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?kg(r):l!==null?(l.return=o,Te=l):kg(r);for(;s!==null;)Te=s,wy(s),s=s.sibling;Te=r,Ml=a,ln=c}Ug(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Ug(t)}}function Ug(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||xu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ai(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_g(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_g(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ra(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}ln||e.flags&512&&Vf(e)}catch(h){Lt(e,e.return,h)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Og(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function kg(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xu(4,e)}catch(l){Lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{Vf(e)}catch(l){Lt(e,s,l)}break;case 5:var o=e.return;try{Vf(e)}catch(l){Lt(e,o,l)}}}catch(l){Lt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var kE=Math.ceil,jc=ir.ReactCurrentDispatcher,Up=ir.ReactCurrentOwner,Zn=ir.ReactCurrentBatchConfig,it=0,Xt=null,Bt=null,Zt=0,On=0,co=Vr(0),Ht=0,za=null,Ss=0,yu=0,Op=0,_a=null,Mn=null,kp=0,bo=1/0,Vi=null,Xc=!1,jf=null,Ir=null,wl=!1,Tr=null,qc=0,Sa=0,Xf=null,pc=-1,mc=0;function mn(){return it&6?Nt():pc!==-1?pc:pc=Nt()}function Nr(t){return t.mode&1?it&2&&Zt!==0?Zt&-Zt:SE.transition!==null?(mc===0&&(mc=lx()),mc):(t=ct,t!==0||(t=window.event,t=t===void 0?16:mx(t.type)),t):1}function hi(t,e,n,i){if(50<Sa)throw Sa=0,Xf=null,Error(ce(185));Ka(t,n,i),(!(it&2)||t!==Xt)&&(t===Xt&&(!(it&2)&&(yu|=n),Ht===4&&Er(t,Zt)),Cn(t,i),n===1&&it===0&&!(e.mode&1)&&(bo=Nt()+500,mu&&Gr()))}function Cn(t,e){var n=t.callbackNode;S1(t,e);var i=Pc(t,t===Xt?Zt:0);if(i===0)n!==null&&qm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qm(n),e===1)t.tag===0?_E(Bg.bind(null,t)):Nx(Bg.bind(null,t)),gE(function(){!(it&6)&&Gr()}),n=null;else{switch(cx(i)){case 1:n=up;break;case 4:n=ox;break;case 16:n=Rc;break;case 536870912:n=ax;break;default:n=Rc}n=Dy(n,Ty.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ty(t,e){if(pc=-1,mc=0,it&6)throw Error(ce(327));var n=t.callbackNode;if(vo()&&t.callbackNode!==n)return null;var i=Pc(t,t===Xt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=$c(t,i);else{e=i;var r=it;it|=2;var s=by();(Xt!==t||Zt!==e)&&(Vi=null,bo=Nt()+500,ps(t,e));do try{HE();break}catch(a){Ay(t,a)}while(!0);Mp(),jc.current=s,it=r,Bt!==null?e=0:(Xt=null,Zt=0,e=Ht)}if(e!==0){if(e===2&&(r=yf(t),r!==0&&(i=r,e=qf(t,r))),e===1)throw n=za,ps(t,0),Er(t,i),Cn(t,Nt()),n;if(e===6)Er(t,i);else{if(r=t.current.alternate,!(i&30)&&!BE(r)&&(e=$c(t,i),e===2&&(s=yf(t),s!==0&&(i=s,e=qf(t,s))),e===1))throw n=za,ps(t,0),Er(t,i),Cn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:rs(t,Mn,Vi);break;case 3:if(Er(t,i),(i&130023424)===i&&(e=kp+500-Nt(),10<e)){if(Pc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bf(rs.bind(null,t,Mn,Vi),e);break}rs(t,Mn,Vi);break;case 4:if(Er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-fi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kE(i/1960))-i,10<i){t.timeoutHandle=bf(rs.bind(null,t,Mn,Vi),i);break}rs(t,Mn,Vi);break;case 5:rs(t,Mn,Vi);break;default:throw Error(ce(329))}}}return Cn(t,Nt()),t.callbackNode===n?Ty.bind(null,t):null}function qf(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(ps(t,e).flags|=256),t=$c(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&$f(e)),t}function $f(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function BE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~Op,e&=~yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fi(e),i=1<<n;t[n]=-1,e&=~i}}function Bg(t){if(it&6)throw Error(ce(327));vo();var e=Pc(t,0);if(!(e&1))return Cn(t,Nt()),null;var n=$c(t,e);if(t.tag!==0&&n===2){var i=yf(t);i!==0&&(e=i,n=qf(t,i))}if(n===1)throw n=za,ps(t,0),Er(t,e),Cn(t,Nt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rs(t,Mn,Vi),Cn(t,Nt()),null}function Bp(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(bo=Nt()+500,mu&&Gr())}}function Es(t){Tr!==null&&Tr.tag===0&&!(it&6)&&vo();var e=it;it|=1;var n=Zn.transition,i=ct;try{if(Zn.transition=null,ct=1,t)return t()}finally{ct=i,Zn.transition=n,it=e,!(it&6)&&Gr()}}function zp(){On=co.current,St(co)}function ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mE(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(_p(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fc();break;case 3:To(),St(An),St(dn),Rp();break;case 5:Cp(i);break;case 4:To();break;case 13:St(Tt);break;case 19:St(Tt);break;case 10:wp(i.type._context);break;case 22:case 23:zp()}n=n.return}if(Xt=t,Bt=t=Fr(t.current,null),Zt=On=e,Ht=0,za=null,Op=yu=Ss=0,Mn=_a=null,cs!==null){for(e=0;e<cs.length;e++)if(n=cs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}cs=null}return t}function Ay(t,e){do{var n=Bt;try{if(Mp(),dc.current=Wc,Gc){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gc=!1}if(_s=0,jt=zt=bt=null,xa=!1,Oa=0,Up.current=null,n===null||n.return===null){Ht=1,za=e,Bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Ag(o);if(m!==null){m.flags&=-257,bg(m,o,a,s,e),m.mode&1&&Tg(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){Tg(s,c,e),Hp();break e}l=Error(ce(426))}}else if(Mt&&a.mode&1){var g=Ag(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),bg(g,o,a,s,e),Sp(Ao(l,a));break e}}s=l=Ao(l,a),Ht!==4&&(Ht=2),_a===null?_a=[s]:_a.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=cy(s,l,e);yg(s,d);break e;case 1:a=l;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ir===null||!Ir.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=uy(s,a,e);yg(s,_);break e}}s=s.return}while(s!==null)}Ry(n)}catch(w){e=w,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function by(){var t=jc.current;return jc.current=Wc,t===null?Wc:t}function Hp(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Xt===null||!(Ss&268435455)&&!(yu&268435455)||Er(Xt,Zt)}function $c(t,e){var n=it;it|=2;var i=by();(Xt!==t||Zt!==e)&&(Vi=null,ps(t,e));do try{zE();break}catch(r){Ay(t,r)}while(!0);if(Mp(),it=n,jc.current=i,Bt!==null)throw Error(ce(261));return Xt=null,Zt=0,Ht}function zE(){for(;Bt!==null;)Cy(Bt)}function HE(){for(;Bt!==null&&!f1();)Cy(Bt)}function Cy(t){var e=Ly(t.alternate,t,On);t.memoizedProps=t.pendingProps,e===null?Ry(t):Bt=e,Up.current=null}function Ry(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NE(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,Bt=null;return}}else if(n=IE(n,e,On),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Ht===0&&(Ht=5)}function rs(t,e,n){var i=ct,r=Zn.transition;try{Zn.transition=null,ct=1,VE(t,e,n,i)}finally{Zn.transition=r,ct=i}return null}function VE(t,e,n,i){do vo();while(Tr!==null);if(it&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(E1(t,s),t===Xt&&(Bt=Xt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wl||(wl=!0,Dy(Rc,function(){return vo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zn.transition,Zn.transition=null;var o=ct;ct=1;var a=it;it|=4,Up.current=null,UE(t,n),My(n,t),lE(Tf),Lc=!!wf,Tf=wf=null,t.current=n,OE(n),h1(),it=a,ct=o,Zn.transition=s}else t.current=n;if(wl&&(wl=!1,Tr=t,qc=r),s=t.pendingLanes,s===0&&(Ir=null),g1(n.stateNode),Cn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xc)throw Xc=!1,t=jf,jf=null,t;return qc&1&&t.tag!==0&&vo(),s=t.pendingLanes,s&1?t===Xf?Sa++:(Sa=0,Xf=t):Sa=0,Gr(),null}function vo(){if(Tr!==null){var t=cx(qc),e=Zn.transition,n=ct;try{if(Zn.transition=null,ct=16>t?16:t,Tr===null)var i=!1;else{if(t=Tr,Tr=null,qc=0,it&6)throw Error(ce(331));var r=it;for(it|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var u=Te;switch(u.tag){case 0:case 11:case 15:ya(8,u,s)}var f=u.child;if(f!==null)f.return=u,Te=f;else for(;Te!==null;){u=Te;var h=u.sibling,m=u.return;if(_y(u),u===c){Te=null;break}if(h!==null){h.return=m,Te=h;break}Te=m}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ya(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Te=d;break e}Te=s.return}}var x=t.current;for(Te=x;Te!==null;){o=Te;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Te=y;else e:for(o=x;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xu(9,a)}}catch(w){Lt(a,a.return,w)}if(a===o){Te=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Te=_;break e}Te=a.return}}if(it=r,Gr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(uu,t)}catch{}i=!0}return i}finally{ct=n,Zn.transition=e}}return!1}function zg(t,e,n){e=Ao(n,e),e=cy(t,e,1),t=Dr(t,e,1),e=mn(),t!==null&&(Ka(t,1,e),Cn(t,e))}function Lt(t,e,n){if(t.tag===3)zg(t,t,n);else for(;e!==null;){if(e.tag===3){zg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ir===null||!Ir.has(i))){t=Ao(n,t),t=uy(e,t,1),e=Dr(e,t,1),t=mn(),e!==null&&(Ka(e,1,t),Cn(e,t));break}}e=e.return}}function GE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=mn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Zt&n)===n&&(Ht===4||Ht===3&&(Zt&130023424)===Zt&&500>Nt()-kp?ps(t,0):Op|=n),Cn(t,e)}function Py(t,e){e===0&&(t.mode&1?(e=pl,pl<<=1,!(pl&130023424)&&(pl=4194304)):e=1);var n=mn();t=Qi(t,e),t!==null&&(Ka(t,e,n),Cn(t,n))}function WE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Py(t,n)}function jE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Py(t,n)}var Ly;Ly=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||An.current)Tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tn=!1,DE(t,e,n);Tn=!!(t.flags&131072)}else Tn=!1,Mt&&e.flags&1048576&&Fx(e,kc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hc(t,e),t=e.pendingProps;var r=Eo(e,dn.current);go(e,n),r=Lp(null,e,i,t,r,n);var s=Dp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,Uc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ap(e),r.updater=vu,e.stateNode=r,r._reactInternals=e,Nf(e,i,t,n),e=Of(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&yp(e),hn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qE(i),t=ai(i,t),r){case 0:e=Uf(null,e,i,t,n);break e;case 1:e=Pg(null,e,i,t,n);break e;case 11:e=Cg(null,e,i,t,n);break e;case 14:e=Rg(null,e,i,ai(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Uf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Pg(t,e,i,r,n);case 3:e:{if(py(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Hx(t,e),Hc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(ce(423)),e),e=Lg(t,e,i,n,r);break e}else if(i!==r){r=Ao(Error(ce(424)),e),e=Lg(t,e,i,n,r);break e}else for(zn=Lr(e.stateNode.containerInfo.firstChild),Hn=e,Mt=!0,ci=null,n=Bx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mo(),i===r){e=er(t,e,n);break e}hn(t,e,i,n)}e=e.child}return e;case 5:return Vx(e),t===null&&Lf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Af(i,r)?o=null:s!==null&&Af(i,s)&&(e.flags|=32),hy(t,e),hn(t,e,o,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return my(t,e,n);case 4:return bp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=wo(e,null,i,n):hn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Cg(t,e,i,r,n);case 7:return hn(t,e,e.pendingProps,n),e.child;case 8:return hn(t,e,e.pendingProps.children,n),e.child;case 12:return hn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,yt(Bc,i._currentValue),i._currentValue=o,s!==null)if(pi(s.value,o)){if(s.children===r.children&&!An.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=$i(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Df(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}hn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,go(e,n),r=ei(r),i=i(r),e.flags|=1,hn(t,e,i,n),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),Rg(t,e,i,r,n);case 15:return dy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),hc(t,e),e.tag=1,bn(i)?(t=!0,Uc(e)):t=!1,go(e,n),ly(e,i,r),Nf(e,i,r,n),Of(null,e,i,!0,t,n);case 19:return gy(t,e,n);case 22:return fy(t,e,n)}throw Error(ce(156,e.tag))};function Dy(t,e){return sx(t,e)}function XE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,e,n,i){return new XE(t,e,n,i)}function Vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qE(t){if(typeof t=="function")return Vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ap)return 11;if(t===lp)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=Jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Vp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qs:return ms(n.children,r,s,e);case op:o=8,r|=8;break;case rf:return t=Jn(12,n,e,r|2),t.elementType=rf,t.lanes=s,t;case sf:return t=Jn(13,n,e,r),t.elementType=sf,t.lanes=s,t;case of:return t=Jn(19,n,e,r),t.elementType=of,t.lanes=s,t;case Vv:return _u(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zv:o=10;break e;case Hv:o=9;break e;case ap:o=11;break e;case lp:o=14;break e;case yr:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Jn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ms(t,e,n,i){return t=Jn(7,t,i,e),t.lanes=n,t}function _u(t,e,n,i){return t=Jn(22,t,i,e),t.elementType=Vv,t.lanes=n,t.stateNode={isHidden:!1},t}function ad(t,e,n){return t=Jn(6,t,null,e),t.lanes=n,t}function ld(t,e,n){return e=Jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $E(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vu(0),this.expirationTimes=Vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gp(t,e,n,i,r,s,o,a,l){return t=new $E(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ap(s),t}function YE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Iy(t){if(!t)return kr;t=t._reactInternals;e:{if(Cs(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(bn(n))return Ix(t,n,e)}return e}function Ny(t,e,n,i,r,s,o,a,l){return t=Gp(n,i,!0,t,r,s,o,a,l),t.context=Iy(null),n=t.current,i=mn(),r=Nr(n),s=$i(i,r),s.callback=e??null,Dr(n,s,r),t.current.lanes=r,Ka(t,r,i),Cn(t,i),t}function Su(t,e,n,i){var r=e.current,s=mn(),o=Nr(r);return n=Iy(n),e.context===null?e.context=n:e.pendingContext=n,e=$i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Dr(r,e,o),t!==null&&(hi(t,r,o,s),uc(t,r,o)),o}function Yc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wp(t,e){Hg(t,e),(t=t.alternate)&&Hg(t,e)}function KE(){return null}var Fy=typeof reportError=="function"?reportError:function(t){console.error(t)};function jp(t){this._internalRoot=t}Eu.prototype.render=jp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Su(t,e,null,null)};Eu.prototype.unmount=jp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Es(function(){Su(null,t,null,null)}),e[Zi]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=fx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sr.length&&e!==0&&e<Sr[n].priority;n++);Sr.splice(n,0,t),n===0&&px(t)}};function Xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vg(){}function JE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Yc(o);s.call(c)}}var o=Ny(e,i,t,0,null,!1,!1,"",Vg);return t._reactRootContainer=o,t[Zi]=o.current,Da(t.nodeType===8?t.parentNode:t),Es(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Yc(l);a.call(c)}}var l=Gp(t,0,!1,null,null,!1,!1,"",Vg);return t._reactRootContainer=l,t[Zi]=l.current,Da(t.nodeType===8?t.parentNode:t),Es(function(){Su(e,l,n,i)}),l}function wu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Yc(o);a.call(l)}}Su(e,o,t,r)}else o=JE(n,e,t,r,i);return Yc(o)}ux=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ca(e.pendingLanes);n!==0&&(dp(e,n|1),Cn(e,Nt()),!(it&6)&&(bo=Nt()+500,Gr()))}break;case 13:Es(function(){var i=Qi(t,1);if(i!==null){var r=mn();hi(i,t,1,r)}}),Wp(t,1)}};fp=function(t){if(t.tag===13){var e=Qi(t,134217728);if(e!==null){var n=mn();hi(e,t,134217728,n)}Wp(t,134217728)}};dx=function(t){if(t.tag===13){var e=Nr(t),n=Qi(t,e);if(n!==null){var i=mn();hi(n,t,e,i)}Wp(t,e)}};fx=function(){return ct};hx=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};gf=function(t,e,n){switch(e){case"input":if(cf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pu(i);if(!r)throw Error(ce(90));Wv(i),cf(i,r)}}}break;case"textarea":Xv(t,n);break;case"select":e=n.value,e!=null&&fo(t,!!n.multiple,e,!1)}};Qv=Bp;ex=Es;var ZE={usingClientEntryPoint:!1,Events:[Za,io,pu,Jv,Zv,Bp]},Zo={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QE={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ix(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||KE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{uu=Tl.inject(QE),Ci=Tl}catch{}}Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZE;Gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xp(e))throw Error(ce(200));return YE(t,e,null,n)};Gn.createRoot=function(t,e){if(!Xp(t))throw Error(ce(299));var n=!1,i="",r=Fy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gp(t,1,!1,null,null,n,!1,i,r),t[Zi]=e.current,Da(t.nodeType===8?t.parentNode:t),new jp(e)};Gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=ix(e),t=t===null?null:t.stateNode,t};Gn.flushSync=function(t){return Es(t)};Gn.hydrate=function(t,e,n){if(!Mu(e))throw Error(ce(200));return wu(null,t,e,!0,n)};Gn.hydrateRoot=function(t,e,n){if(!Xp(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Fy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ny(e,null,t,1,n??null,r,!1,s,o),t[Zi]=e.current,Da(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Eu(e)};Gn.render=function(t,e,n){if(!Mu(e))throw Error(ce(200));return wu(null,t,e,!1,n)};Gn.unmountComponentAtNode=function(t){if(!Mu(t))throw Error(ce(40));return t._reactRootContainer?(Es(function(){wu(null,null,t,!1,function(){t._reactRootContainer=null,t[Zi]=null})}),!0):!1};Gn.unstable_batchedUpdates=Bp;Gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Mu(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return wu(t,e,n,!1,i)};Gn.version="18.3.1-next-f1338f8080-20240426";function Uy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uy)}catch(t){console.error(t)}}Uy(),Uv.exports=Gn;var eM=Uv.exports,Gg=eM;tf.createRoot=Gg.createRoot,tf.hydrateRoot=Gg.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ha.apply(null,arguments)}var Ar;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ar||(Ar={}));const Wg="popstate";function tM(t){t===void 0&&(t={});function e(r,s){let{pathname:o="/",search:a="",hash:l=""}=Rs(r.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Yf("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let o=r.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:Kc(s))}function i(r,s){Tu(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return iM(e,n,i,t)}function Ft(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Tu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nM(){return Math.random().toString(36).substr(2,8)}function jg(t,e){return{usr:t.state,key:t.key,idx:e}}function Yf(t,e,n,i){return n===void 0&&(n=null),Ha({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Rs(e):e,{state:n,key:e&&e.key||i||nM()})}function Kc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Rs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function iM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Ar.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Ha({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function f(){a=Ar.Pop;let g=u(),d=g==null?null:g-c;c=g,l&&l({action:a,location:E.location,delta:d})}function h(g,d){a=Ar.Push;let x=Yf(E.location,g,d);n&&n(x,g),c=u()+1;let y=jg(x,c),_=E.createHref(x);try{o.pushState(y,"",_)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;r.location.assign(_)}s&&l&&l({action:a,location:E.location,delta:1})}function m(g,d){a=Ar.Replace;let x=Yf(E.location,g,d);n&&n(x,g),c=u();let y=jg(x,c),_=E.createHref(x);o.replaceState(y,"",_),s&&l&&l({action:a,location:E.location,delta:0})}function v(g){let d=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof g=="string"?g:Kc(g);return x=x.replace(/ $/,"%20"),Ft(d,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,d)}let E={get action(){return a},get location(){return t(r,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Wg,f),l=g,()=>{r.removeEventListener(Wg,f),l=null}},createHref(g){return e(r,g)},createURL:v,encodeLocation(g){let d=v(g);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:m,go(g){return o.go(g)}};return E}var Xg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xg||(Xg={}));function rM(t,e,n){return n===void 0&&(n="/"),sM(t,e,n)}function sM(t,e,n,i){let r=typeof e=="string"?Rs(e):e,s=qp(r.pathname||"/",n);if(s==null)return null;let o=Oy(t);oM(o);let a=null,l=xM(s);for(let c=0;a==null&&c<o.length;++c)a=mM(o[c],l);return a}function Oy(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ft(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Ur([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Ft(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Oy(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:hM(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of ky(s.path))r(s,o,l)}),e}function ky(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=ky(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function oM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const aM=/^:[\w-]+$/,lM=3,cM=2,uM=1,dM=10,fM=-2,qg=t=>t==="*";function hM(t,e){let n=t.split("/"),i=n.length;return n.some(qg)&&(i+=fM),e&&(i+=cM),n.filter(r=>!qg(r)).reduce((r,s)=>r+(aM.test(s)?lM:s===""?uM:dM),i)}function pM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function mM(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",f=gM({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Ur([s,f.pathname]),pathnameBase:MM(Ur([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Ur([s,f.pathnameBase]))}return o}function gM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=vM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,f)=>{let{paramName:h,isOptional:m}=u;if(h==="*"){let E=a[f]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const v=a[f];return m&&!v?c[h]=void 0:c[h]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function vM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Tu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function xM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Tu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const yM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_M=t=>yM.test(t);function SM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Rs(t):t,s;if(n)if(_M(n))s=n;else{if(n.includes("//")){let o=n;n=By(n),Tu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=$g(n.substring(1),"/"):s=$g(n,e)}else s=e;return{pathname:s,search:wM(i),hash:TM(r)}}function $g(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function cd(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function EM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $p(t,e){let n=EM(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Yp(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Rs(t):(r=Ha({},t),Ft(!r.pathname||!r.pathname.includes("?"),cd("?","pathname","search",r)),Ft(!r.pathname||!r.pathname.includes("#"),cd("#","pathname","hash",r)),Ft(!r.search||!r.search.includes("#"),cd("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=SM(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const By=t=>t.replace(/\/\/+/g,"/"),Ur=t=>By(t.join("/")),MM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,TM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function AM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const zy=["post","put","patch","delete"];new Set(zy);const bM=["get",...zy];new Set(bM);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Va(){return Va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Va.apply(null,arguments)}const Kp=z.createContext(null),CM=z.createContext(null),Wr=z.createContext(null),Au=z.createContext(null),rr=z.createContext({outlet:null,matches:[],isDataRoute:!1}),Hy=z.createContext(null);function RM(t,e){let{relative:n}=e===void 0?{}:e;ko()||Ft(!1);let{basename:i,navigator:r}=z.useContext(Wr),{hash:s,pathname:o,search:a}=Wy(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Ur([i,o])),r.createHref({pathname:l,search:a,hash:s})}function ko(){return z.useContext(Au)!=null}function jr(){return ko()||Ft(!1),z.useContext(Au).location}function Vy(t){z.useContext(Wr).static||z.useLayoutEffect(t)}function en(){let{isDataRoute:t}=z.useContext(rr);return t?VM():PM()}function PM(){ko()||Ft(!1);let t=z.useContext(Kp),{basename:e,future:n,navigator:i}=z.useContext(Wr),{matches:r}=z.useContext(rr),{pathname:s}=jr(),o=JSON.stringify($p(r,n.v7_relativeSplatPath)),a=z.useRef(!1);return Vy(()=>{a.current=!0}),z.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let f=Yp(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ur([e,f.pathname])),(u.replace?i.replace:i.push)(f,u.state,u)},[e,i,o,s,t])}function Gy(){let{matches:t}=z.useContext(rr),e=t[t.length-1];return e?e.params:{}}function Wy(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=z.useContext(Wr),{matches:r}=z.useContext(rr),{pathname:s}=jr(),o=JSON.stringify($p(r,i.v7_relativeSplatPath));return z.useMemo(()=>Yp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function LM(t,e){return DM(t,e)}function DM(t,e,n,i){ko()||Ft(!1);let{navigator:r}=z.useContext(Wr),{matches:s}=z.useContext(rr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=jr(),u;if(e){var f;let g=typeof e=="string"?Rs(e):e;l==="/"||(f=g.pathname)!=null&&f.startsWith(l)||Ft(!1),u=g}else u=c;let h=u.pathname||"/",m=h;if(l!=="/"){let g=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(g.length).join("/")}let v=rM(t,{pathname:m}),E=OM(v&&v.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:Ur([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:Ur([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return e&&E?z.createElement(Au.Provider,{value:{location:Va({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ar.Pop}},E):E}function IM(){let t=HM(),e=AM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:r},n):null,null)}const NM=z.createElement(IM,null);class FM extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(rr.Provider,{value:this.props.routeContext},z.createElement(Hy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function UM(t){let{routeContext:e,match:n,children:i}=t,r=z.useContext(Kp);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(rr.Provider,{value:e},i)}function OM(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);u>=0||Ft(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:h,errors:m}=n,v=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,f,h)=>{let m,v=!1,E=null,g=null;n&&(m=a&&f.route.id?a[f.route.id]:void 0,E=f.route.errorElement||NM,l&&(c<0&&h===0?(GM("route-fallback"),v=!0,g=null):c===h&&(v=!0,g=f.route.hydrateFallbackElement||null)));let d=e.concat(o.slice(0,h+1)),x=()=>{let y;return m?y=E:v?y=g:f.route.Component?y=z.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=u,z.createElement(UM,{match:f,routeContext:{outlet:u,matches:d,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?z.createElement(FM,{location:n.location,revalidation:n.revalidation,component:E,error:m,children:x(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):x()},null)}var jy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(jy||{}),Xy=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Xy||{});function kM(t){let e=z.useContext(Kp);return e||Ft(!1),e}function BM(t){let e=z.useContext(CM);return e||Ft(!1),e}function zM(t){let e=z.useContext(rr);return e||Ft(!1),e}function qy(t){let e=zM(),n=e.matches[e.matches.length-1];return n.route.id||Ft(!1),n.route.id}function HM(){var t;let e=z.useContext(Hy),n=BM(),i=qy();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function VM(){let{router:t}=kM(jy.UseNavigateStable),e=qy(Xy.UseNavigateStable),n=z.useRef(!1);return Vy(()=>{n.current=!0}),z.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Va({fromRouteId:e},s)))},[t,e])}const Yg={};function GM(t,e,n){Yg[t]||(Yg[t]=!0)}function WM(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function uo(t){let{to:e,replace:n,state:i,relative:r}=t;ko()||Ft(!1);let{future:s,static:o}=z.useContext(Wr),{matches:a}=z.useContext(rr),{pathname:l}=jr(),c=en(),u=Yp(e,$p(a,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(u);return z.useEffect(()=>c(JSON.parse(f),{replace:n,state:i,relative:r}),[c,f,r,n,i]),null}function $t(t){Ft(!1)}function jM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ar.Pop,navigator:s,static:o=!1,future:a}=t;ko()&&Ft(!1);let l=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:l,navigator:s,static:o,future:Va({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Rs(i));let{pathname:u="/",search:f="",hash:h="",state:m=null,key:v="default"}=i,E=z.useMemo(()=>{let g=qp(u,l);return g==null?null:{location:{pathname:g,search:f,hash:h,state:m,key:v},navigationType:r}},[l,u,f,h,m,v,r]);return E==null?null:z.createElement(Wr.Provider,{value:c},z.createElement(Au.Provider,{children:n,value:E}))}function XM(t){let{children:e,location:n}=t;return LM(Kf(e),n)}new Promise(()=>{});function Kf(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(i,r)=>{if(!z.isValidElement(i))return;let s=[...e,r];if(i.type===z.Fragment){n.push.apply(n,Kf(i.props.children,s));return}i.type!==$t&&Ft(!1),!i.props.index||!i.props.children||Ft(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Kf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jf(){return Jf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Jf.apply(null,arguments)}function qM(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function $M(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function YM(t,e){return t.button===0&&(!e||e==="_self")&&!$M(t)}const KM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],JM="6";try{window.__reactRouterVersion=JM}catch{}const ZM="startTransition",Kg=GS[ZM];function QM(t){let{basename:e,children:n,future:i,window:r}=t,s=z.useRef();s.current==null&&(s.current=tM({window:r,v5Compat:!0}));let o=s.current,[a,l]=z.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=z.useCallback(f=>{c&&Kg?Kg(()=>l(f)):l(f)},[l,c]);return z.useLayoutEffect(()=>o.listen(u),[o,u]),z.useEffect(()=>WM(i),[i]),z.createElement(jM,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const ew=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gs=z.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:f}=e,h=qM(e,KM),{basename:m}=z.useContext(Wr),v,E=!1;if(typeof c=="string"&&tw.test(c)&&(v=c,ew))try{let y=new URL(window.location.href),_=c.startsWith("//")?new URL(y.protocol+c):new URL(c),w=qp(_.pathname,m);_.origin===y.origin&&w!=null?c=w+_.search+_.hash:E=!0}catch{}let g=RM(c,{relative:r}),d=nw(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:f});function x(y){i&&i(y),y.defaultPrevented||d(y)}return z.createElement("a",Jf({},h,{href:v||g,onClick:E||s?i:x,ref:n,target:l}))});var Jg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Jg||(Jg={}));var Zg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Zg||(Zg={}));function nw(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=en(),c=jr(),u=Wy(t,{relative:o});return z.useCallback(f=>{if(YM(f,n)){f.preventDefault();let h=i!==void 0?i:Kc(c)===Kc(u);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,i,r,n,t,s,o,a])}const iw="modulepreload",rw=function(t){return"/"+t},Qg={},sw=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=rw(l),l in Qg)return;Qg[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":iw,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,m)=>{f.addEventListener("load",h),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function ow(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:i,onRegistered:r,onRegisteredSW:s,onRegisterError:o}=t;let a,l;const c=async(f=!0)=>{await l};async function u(){if("serviceWorker"in navigator){if(a=await sw(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/sw.js",{scope:"/",type:"classic"})).catch(f=>{o==null||o(f)}),!a)return;a.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),a.addEventListener("installed",f=>{f.isUpdate||i==null||i()}),a.register({immediate:e}).then(f=>{s?s("/sw.js",f):r==null||r(f)}).catch(f=>{o==null||o(f)})}}return l=u(),c}function $y(t,e){return function(){return t.apply(e,arguments)}}const{toString:aw}=Object.prototype,{getPrototypeOf:Co}=Object,{iterator:el,toStringTag:Yy}=Symbol,Jc=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ga=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),Jc(n,e))return!0;n=Co(n)}return!1},lw=(t,e)=>t!=null&&Ga(t,e)?t[e]:void 0,Jp=(t=>e=>{const n=aw.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),mi=t=>(t=t.toLowerCase(),e=>Jp(e)===t),bu=t=>e=>typeof e===t,{isArray:Ms}=Array,Ro=bu("undefined");function Bo(t){return t!==null&&!Ro(t)&&t.constructor!==null&&!Ro(t.constructor)&&Rn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Ky=mi("ArrayBuffer");function cw(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ky(t.buffer),e}const uw=bu("string"),Rn=bu("function"),Jy=bu("number"),zo=t=>t!==null&&typeof t=="object",dw=t=>t===!0||t===!1,vc=t=>{if(!zo(t))return!1;const e=Co(t);return(e===null||e===Object.prototype||Co(e)===null)&&!Ga(t,Yy)&&!Ga(t,el)},fw=t=>{if(!zo(t)||Bo(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},hw=mi("Date"),pw=mi("File"),mw=t=>!!(t&&typeof t.uri<"u"),gw=t=>t&&typeof t.getParts<"u",vw=mi("Blob"),xw=mi("FileList"),yw=t=>zo(t)&&Rn(t.pipe);function _w(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const e0=_w(),t0=typeof e0.FormData<"u"?e0.FormData:void 0,Sw=t=>{if(!t)return!1;if(t0&&t instanceof t0)return!0;const e=Co(t);if(!e||e===Object.prototype||!Rn(t.append))return!1;const n=Jp(t);return n==="formdata"||n==="object"&&Rn(t.toString)&&t.toString()==="[object FormData]"},Ew=mi("URLSearchParams"),[Mw,ww,Tw,Aw]=["ReadableStream","Request","Response","Headers"].map(mi),bw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function tl(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Ms(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(Bo(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function Zy(t,e){if(Bo(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const ds=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Qy=t=>!Ro(t)&&t!==ds;function Zf(...t){const{caseless:e,skipUndefined:n}=Qy(this)&&this||{},i={},r=(s,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&Zy(i,o)||o,l=Jc(i,a)?i[a]:void 0;vc(l)&&vc(s)?i[a]=Zf(l,s):vc(s)?i[a]=Zf({},s):Ms(s)?i[a]=s.slice():(!n||!Ro(s))&&(i[a]=s)};for(let s=0,o=t.length;s<o;s++){const a=t[s];if(!a||Bo(a)||(tl(a,r),typeof a!="object"||Ms(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];Bw.call(a,u)&&r(a[u],u)}}return i}const Cw=(t,e,n,{allOwnKeys:i}={})=>(tl(e,(r,s)=>{n&&Rn(r)?Object.defineProperty(t,s,{__proto__:null,value:$y(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),Rw=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Pw=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},Lw=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Co(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Dw=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Iw=t=>{if(!t)return null;if(Ms(t))return t;let e=t.length;if(!Jy(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Nw=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Co(Uint8Array)),Fw=(t,e)=>{const i=(t&&t[el]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},Uw=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Ow=mi("HTMLFormElement"),kw=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:Bw}=Object.prototype,zw=mi("RegExp"),e_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};tl(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},Hw=t=>{e_(t,(e,n)=>{if(Rn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(Rn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Vw=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Ms(t)?i(t):i(String(t).split(e)),n},Gw=()=>{},Ww=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function jw(t){return!!(t&&Rn(t.append)&&t[Yy]==="FormData"&&t[el])}const Xw=t=>{const e=new WeakSet,n=i=>{if(zo(i)){if(e.has(i))return;if(Bo(i))return i;if(!("toJSON"in i)){e.add(i);const r=Ms(i)?[]:{};return tl(i,(s,o)=>{const a=n(s);!Ro(a)&&(r[o]=a)}),e.delete(i),r}}return i};return n(t)},qw=mi("AsyncFunction"),$w=t=>t&&(zo(t)||Rn(t))&&Rn(t.then)&&Rn(t.catch),t_=((t,e)=>t?setImmediate:e?((n,i)=>(ds.addEventListener("message",({source:r,data:s})=>{r===ds&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),ds.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Rn(ds.postMessage)),Yw=typeof queueMicrotask<"u"?queueMicrotask.bind(ds):typeof process<"u"&&process.nextTick||t_,n_=t=>t!=null&&Rn(t[el]),Kw=t=>t!=null&&Ga(t,el)&&n_(t),U={isArray:Ms,isArrayBuffer:Ky,isBuffer:Bo,isFormData:Sw,isArrayBufferView:cw,isString:uw,isNumber:Jy,isBoolean:dw,isObject:zo,isPlainObject:vc,isEmptyObject:fw,isReadableStream:Mw,isRequest:ww,isResponse:Tw,isHeaders:Aw,isUndefined:Ro,isDate:hw,isFile:pw,isReactNativeBlob:mw,isReactNative:gw,isBlob:vw,isRegExp:zw,isFunction:Rn,isStream:yw,isURLSearchParams:Ew,isTypedArray:Nw,isFileList:xw,forEach:tl,merge:Zf,extend:Cw,trim:bw,stripBOM:Rw,inherits:Pw,toFlatObject:Lw,kindOf:Jp,kindOfTest:mi,endsWith:Dw,toArray:Iw,forEachEntry:Fw,matchAll:Uw,isHTMLForm:Ow,hasOwnProperty:Jc,hasOwnProp:Jc,hasOwnInPrototypeChain:Ga,getSafeProp:lw,reduceDescriptors:e_,freezeMethods:Hw,toObjectSet:Vw,toCamelCase:kw,noop:Gw,toFiniteNumber:Ww,findKey:Zy,global:ds,isContextDefined:Qy,isSpecCompliantForm:jw,toJSONObject:Xw,isAsyncFn:qw,isThenable:$w,setImmediate:t_,asap:Yw,isIterable:n_,isSafeIterable:Kw},Jw=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Zw=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&Jw[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function Qw(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const eT=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),tT=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Zp(t,e){return U.isArray(t)?t.map(n=>Zp(n,e)):Qw(String(t).replace(e,""))}const nT=t=>Zp(t,eT),iT=t=>Zp(t,tT);function i_(t){const e=Object.create(null);return U.forEach(t.toJSON(),(n,i)=>{e[i]=iT(n)}),e}const n0=Symbol("internals");function Qo(t){return t&&String(t).trim().toLowerCase()}function xc(t){return t===!1||t==null?t:U.isArray(t)?t.map(xc):nT(String(t))}function rT(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const sT=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ud(t,e,n,i,r){if(U.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!U.isString(e)){if(U.isString(i))return e.indexOf(i)!==-1;if(U.isRegExp(i))return i.test(e)}}function oT(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function aT(t,e){const n=U.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let un=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=Qo(l);if(!u)return;const f=U.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=xc(a))}const o=(a,l)=>U.forEach(a,(c,u)=>s(c,u,l));if(U.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(U.isString(e)&&(e=e.trim())&&!sT(e))o(Zw(e),n);else if(U.isObject(e)&&U.isSafeIterable(e)){let a=Object.create(null),l,c;for(const u of e){if(!U.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],U.hasOwnProp(a,c)?(l=a[c],a[c]=U.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=Qo(e),e){const i=U.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return rT(r);if(U.isFunction(n))return n.call(this,r,i);if(U.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Qo(e),e){const i=U.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||ud(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=Qo(o),o){const a=U.findKey(i,o);a&&(!n||ud(i,i[a],a,n))&&(delete i[a],r=!0)}}return U.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||ud(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return U.forEach(this,(r,s)=>{const o=U.findKey(i,s);if(o){n[o]=xc(r),delete n[s];return}const a=e?oT(s):String(s).trim();a!==s&&delete n[s],n[a]=xc(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return U.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&U.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[n0]=this[n0]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=Qo(o);i[a]||(aT(r,o),i[a]=!0)}return U.isArray(e)?e.forEach(s):s(e),this}};un.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.reduceDescriptors(un.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});U.freezeMethods(un);const lT="[REDACTED ****]";function cT(t){if(U.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(U.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function uT(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),i=[],r=s=>{if(s===null||typeof s!="object"||U.isBuffer(s))return s;if(i.indexOf(s)!==-1)return;s instanceof un&&(s=s.toJSON()),i.push(s);let o;if(U.isArray(s))o=[],s.forEach((a,l)=>{const c=r(a);U.isUndefined(c)||(o[l]=c)});else{if(!U.isPlainObject(s)&&cT(s))return i.pop(),s;o=Object.create(null);for(const[a,l]of Object.entries(s)){const c=n.has(a.toLowerCase())?lT:r(l);U.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return r(t)}let ye=class r_ extends Error{static from(e,n,i,r,s,o){const a=new r_(e.message,n||e.code,i,r,s);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&U.hasOwnProp(e,"redact")?e.redact:void 0,i=U.isArray(n)&&n.length>0?uT(e,n):U.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};ye.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ye.ERR_BAD_OPTION="ERR_BAD_OPTION";ye.ECONNABORTED="ECONNABORTED";ye.ETIMEDOUT="ETIMEDOUT";ye.ECONNREFUSED="ECONNREFUSED";ye.ERR_NETWORK="ERR_NETWORK";ye.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ye.ERR_DEPRECATED="ERR_DEPRECATED";ye.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ye.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ye.ERR_CANCELED="ERR_CANCELED";ye.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ye.ERR_INVALID_URL="ERR_INVALID_URL";ye.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const dT=null,s_=100;function Qf(t){return U.isPlainObject(t)||U.isArray(t)}function o_(t){return U.endsWith(t,"[]")?t.slice(0,-2):t}function dd(t,e,n){return t?t.concat(e).map(function(r,s){return r=o_(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function fT(t){return U.isArray(t)&&!t.some(Qf)}const hT=U.toFlatObject(U,{},null,function(e){return/^is[A-Z]/.test(e)});function Cu(t,e,n){if(!U.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=U.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,y){return!U.isUndefined(y[x])});const i=n.metaTokens,r=n.visitor||v,s=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?s_:n.maxDepth,c=a&&U.isSpecCompliantForm(e),u=[];if(!U.isFunction(r))throw new TypeError("visitor must be a function");function f(d){if(d===null)return"";if(U.isDate(d))return d.toISOString();if(U.isBoolean(d))return d.toString();if(!c&&U.isBlob(d))throw new ye("Blob is not supported. Use a Buffer instead.");if(U.isArrayBuffer(d)||U.isTypedArray(d)){if(c&&typeof a=="function")return new a([d]);if(typeof Buffer<"u")return Buffer.from(d);throw new ye("Blob is not supported. Use a Buffer instead.",ye.ERR_NOT_SUPPORT)}return d}function h(d){if(d>l)throw new ye("Object is too deeply nested ("+d+" levels). Max depth: "+l,ye.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(d,x){if(l===1/0)return JSON.stringify(d);const y=[];return JSON.stringify(d,function(w,T){if(!U.isObject(T))return T;for(;y.length&&y[y.length-1]!==this;)y.pop();return y.push(T),h(x+y.length-1),T})}function v(d,x,y){let _=d;if(U.isReactNative(e)&&U.isReactNativeBlob(d))return e.append(dd(y,x,s),f(d)),!1;if(d&&!y&&typeof d=="object"){if(U.endsWith(x,"{}"))x=i?x:x.slice(0,-2),d=m(d,1);else if(U.isArray(d)&&fT(d)||(U.isFileList(d)||U.endsWith(x,"[]"))&&(_=U.toArray(d)))return x=o_(x),_.forEach(function(T,b){!(U.isUndefined(T)||T===null)&&e.append(o===!0?dd([x],b,s):o===null?x:x+"[]",f(T))}),!1}return Qf(d)?!0:(e.append(dd(y,x,s),f(d)),!1)}const E=Object.assign(hT,{defaultVisitor:v,convertValue:f,isVisitable:Qf});function g(d,x,y=0){if(!U.isUndefined(d)){if(h(y),u.indexOf(d)!==-1)throw new Error("Circular reference detected in "+x.join("."));u.push(d),U.forEach(d,function(w,T){(!(U.isUndefined(w)||w===null)&&r.call(e,w,U.isString(T)?T.trim():T,x,E))===!0&&g(w,x?x.concat(T):[T],y+1)}),u.pop()}}if(!U.isObject(t))throw new TypeError("data must be an object");return g(t),e}function i0(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Qp(t,e){this._pairs=[],t&&Cu(t,this,e)}const a_=Qp.prototype;a_.append=function(e,n){this._pairs.push([e,n])};a_.toString=function(e){const n=e?i=>e.call(this,i,i0):i0;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function pT(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function l_(t,e,n){if(!e)return t;t=t||"";const i=U.isFunction(n)?{serialize:n}:n,r=U.getSafeProp(i,"encode")||pT,s=U.getSafeProp(i,"serialize");let o;if(s?o=s(e,i):o=U.isURLSearchParams(e)?e.toString():new Qp(e,i).toString(r),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class r0{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){U.forEach(this.handlers,function(i){i!==null&&e(i)})}}const em={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},mT=typeof URLSearchParams<"u"?URLSearchParams:Qp,gT=typeof FormData<"u"?FormData:null,vT=typeof Blob<"u"?Blob:null,xT={isBrowser:!0,classes:{URLSearchParams:mT,FormData:gT,Blob:vT},protocols:["http","https","file","blob","url","data"]},tm=typeof window<"u"&&typeof document<"u",eh=typeof navigator=="object"&&navigator||void 0,yT=tm&&(!eh||["ReactNative","NativeScript","NS"].indexOf(eh.product)<0),_T=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ST=tm&&window.location.href||"http://localhost",ET=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:tm,hasStandardBrowserEnv:yT,hasStandardBrowserWebWorkerEnv:_T,navigator:eh,origin:ST},Symbol.toStringTag,{value:"Module"})),Kt={...ET,...xT};function MT(t,e){return Cu(t,new Kt.classes.URLSearchParams,{visitor:function(n,i,r,s){return Kt.isNode&&U.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const s0=s_;function c_(t){if(t>s0)throw new ye("FormData field is too deeply nested ("+t+" levels). Max depth: "+s0,ye.ERR_FORM_DATA_DEPTH_EXCEEDED)}function wT(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)c_(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function TT(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function u_(t){function e(n,i,r,s){c_(s);let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&U.isArray(r)?r.length:o,l?(U.hasOwnProp(r,o)?r[o]=U.isArray(r[o])?r[o].concat(i):[r[o],i]:r[o]=i,!a):((!U.hasOwnProp(r,o)||!U.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&U.isArray(r[o])&&(r[o]=TT(r[o])),!a)}if(U.isFormData(t)&&U.isFunction(t.entries)){const n={};return U.forEachEntry(t,(i,r)=>{e(wT(i),r,n,0)}),n}return null}const Fs=(t,e)=>t!=null&&U.hasOwnProp(t,e)?t[e]:void 0;function AT(t,e,n){if(U.isString(t))try{return(e||JSON.parse)(t),U.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const nl={transitional:em,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=U.isObject(e);if(s&&U.isHTMLForm(e)&&(e=new FormData(e)),U.isFormData(e))return r?JSON.stringify(u_(e)):e;if(U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e)||U.isReadableStream(e))return e;if(U.isArrayBufferView(e))return e.buffer;if(U.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){const l=Fs(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return MT(e,l).toString();if((a=U.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Fs(this,"env"),u=c&&c.FormData;return Cu(a?{"files[]":e}:e,u&&new u,l)}}return s||r?(n.setContentType("application/json",!1),AT(e)):e}],transformResponse:[function(e){const n=Fs(this,"transitional")||nl.transitional,i=n&&n.forcedJSONParsing,r=Fs(this,"responseType"),s=r==="json";if(U.isResponse(e)||U.isReadableStream(e))return e;if(e&&U.isString(e)&&(i&&!r||s)){const a=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,Fs(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?ye.from(l,ye.ERR_BAD_RESPONSE,this,null,Fs(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Kt.classes.FormData,Blob:Kt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch","query"],t=>{nl.headers[t]={}});function fd(t,e){const n=this||nl,i=e||n,r=un.from(i.headers);let s=i.data;return U.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function d_(t){return!!(t&&t.__CANCEL__)}let il=class extends ye{constructor(e,n,i){super(e??"canceled",ye.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function f_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new ye("Request failed with status code "+n.status,n.status>=400&&n.status<500?ye.ERR_BAD_REQUEST:ye.ERR_BAD_RESPONSE,n.config,n.request,n))}function bT(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function CT(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,h=0;for(;f!==r;)h+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const m=u&&c-u;return m?Math.round(h*1e3/m):void 0}}function RT(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Zc=(t,e,n=3)=>{let i=0;const r=CT(50,250);return RT(s=>{if(!s||typeof s.loaded!="number")return;const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=r(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},o0=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},a0=t=>(...e)=>U.asap(()=>t(...e)),PT=Kt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Kt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Kt.origin),Kt.navigator&&/(msie|trident)/i.test(Kt.navigator.userAgent)):()=>!0,LT=Kt.hasStandardBrowserEnv?{write(t,e,n,i,r,s,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];U.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),U.isString(i)&&a.push(`path=${i}`),U.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),U.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),r=i.indexOf("=");if(r!==-1&&i.slice(0,r)===t)try{return decodeURIComponent(i.slice(r+1))}catch{return i.slice(r+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function DT(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function IT(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const NT=/^https?:(?!\/\/)/i,FT=/[\t\n\r]/g;function UT(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function OT(t){return UT(t).replace(FT,"")}function l0(t,e){if(typeof t=="string"&&NT.test(OT(t)))throw new ye('Invalid URL: missing "//" after protocol',ye.ERR_INVALID_URL,e)}function h_(t,e,n,i){l0(e,i);let r=!DT(e);return t&&(r||n===!1)?(l0(t,i),IT(t,e)):e}const c0=t=>t instanceof un?{...t}:t;function ws(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,f,h,m){return U.isPlainObject(u)&&U.isPlainObject(f)?U.merge.call({caseless:m},u,f):U.isPlainObject(f)?U.merge({},f):U.isArray(f)?f.slice():f}function r(u,f,h,m){if(U.isUndefined(f)){if(!U.isUndefined(u))return i(void 0,u,h,m)}else return i(u,f,h,m)}function s(u,f){if(!U.isUndefined(f))return i(void 0,f)}function o(u,f){if(U.isUndefined(f)){if(!U.isUndefined(u))return i(void 0,u)}else return i(void 0,f)}function a(u){const f=U.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!U.isUndefined(f))if(U.isPlainObject(f)){if(U.hasOwnProp(f,u))return f[u]}else return;const h=U.hasOwnProp(t,"transitional")?t.transitional:void 0;if(U.isPlainObject(h)&&U.hasOwnProp(h,u))return h[u]}function l(u,f,h){if(U.hasOwnProp(e,h))return i(u,f);if(U.hasOwnProp(t,h))return i(void 0,u)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,f,h)=>r(c0(u),c0(f),h,!0)};return U.forEach(Object.keys({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const h=U.hasOwnProp(c,f)?c[f]:r,m=U.hasOwnProp(t,f)?t[f]:void 0,v=U.hasOwnProp(e,f)?e[f]:void 0,E=h(m,v,f);U.isUndefined(E)&&h!==l||(n[f]=E)}),U.hasOwnProp(e,"validateStatus")&&U.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(U.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const kT=["content-type","content-length"];function BT(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{kT.includes(i.toLowerCase())&&t.set(i,r)})}const zT=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function p_(t){const e=ws({},t),n=h=>U.hasOwnProp(e,h)?e[h]:void 0,i=n("data");let r=n("withXSRFToken");const s=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=un.from(a),e.url=l_(h_(c,f,u,e),n("params"),n("paramsSerializer")),l){const h=U.getSafeProp(l,"username")||"",m=U.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(h+":"+(m?zT(m):"")))}catch(v){throw ye.from(v,ye.ERR_BAD_OPTION_VALUE,t)}}if(U.isFormData(i)&&(Kt.hasStandardBrowserEnv||Kt.hasStandardBrowserWebWorkerEnv||U.isReactNative(i)?a.setContentType(void 0):U.isFunction(i.getHeaders)&&BT(a,i.getHeaders(),n("formDataHeaderPolicy"))),Kt.hasStandardBrowserEnv&&(U.isFunction(r)&&(r=r(e)),r===!0||r==null&&PT(e.url))){const m=s&&o&&LT.read(o);m&&a.set(s,m)}return e}const HT=typeof XMLHttpRequest<"u",VT=HT&&function(t){return new Promise(function(n,i){const r=p_(t);let s=r.data;const o=un.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,h,m,v;function E(){m&&m(),v&&v(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let g=new XMLHttpRequest;g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout;function d(){if(!g)return;const y=un.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),w={data:!a||a==="text"||a==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:y,config:t,request:g};f_(function(b){n(b),E()},function(b){i(b),E()},w),g=null}"onloadend"in g?g.onloadend=d:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.startsWith("file:"))||setTimeout(d)},g.onabort=function(){g&&(i(new ye("Request aborted",ye.ECONNABORTED,t,g)),E(),g=null)},g.onerror=function(_){const w=_&&_.message?_.message:"Network Error",T=new ye(w,ye.ERR_NETWORK,t,g);T.event=_||null,i(T),E(),g=null},g.ontimeout=function(){let _=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const w=r.transitional||em;r.timeoutErrorMessage&&(_=r.timeoutErrorMessage),i(new ye(_,w.clarifyTimeoutError?ye.ETIMEDOUT:ye.ECONNABORTED,t,g)),E(),g=null},s===void 0&&o.setContentType(null),"setRequestHeader"in g&&U.forEach(i_(o),function(_,w){g.setRequestHeader(w,_)}),U.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),a&&a!=="json"&&(g.responseType=r.responseType),c&&([h,v]=Zc(c,!0),g.addEventListener("progress",h)),l&&g.upload&&([f,m]=Zc(l),g.upload.addEventListener("progress",f),g.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(u=y=>{g&&(i(!y||y.type?new il(null,t,g):y),g.abort(),E(),g=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const x=bT(r.url);if(x&&!Kt.protocols.includes(x)){i(new ye("Unsupported protocol "+x+":",ye.ERR_BAD_REQUEST,t)),E();return}g.send(s||null)})},GT=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const r=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof ye?c:new il(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{s=null,r(new ye(`timeout of ${e}ms exceeded`,ye.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>l.addEventListener("abort",r,{once:!0}));const{signal:a}=n;return a.unsubscribe=()=>U.asap(o),a},WT=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},jT=async function*(t,e){for await(const n of XT(t))yield*WT(n,e)},XT=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},u0=(t,e,n,i)=>{const r=jT(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let h=s+=f;n(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},Qc=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,qT=(t,e,n)=>e+2<n&&Qc(t.charCodeAt(e+1))&&Qc(t.charCodeAt(e+2));function $T(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let m=0;m<a;m++)if(i.charCodeAt(m)===37&&m+2<a){const v=i.charCodeAt(m+1),E=i.charCodeAt(m+2);Qc(v)&&Qc(E)&&(o-=2,m+=2)}let l=0,c=a-1;const u=m=>m>=2&&i.charCodeAt(m-2)===37&&i.charCodeAt(m-1)===51&&(i.charCodeAt(m)===68||i.charCodeAt(m)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const h=Math.floor(o/4)*3-(l||0);return h>0?h:0}let s=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l===37&&qT(i,o,a))s+=1,o+=2;else if(l<128)s+=1;else if(l<2048)s+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(s+=4,o++):s+=3}else s+=3}return s}const nm="1.18.1",d0=64*1024,{isFunction:Al}=U,YT=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),f0=t=>{if(!U.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},h0=(t,...e)=>{try{return!!t(...e)}catch{return!1}},KT=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},JT=t=>{const e=U.global!==void 0&&U.global!==null?U.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=U.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:r,Request:s,Response:o}=t,a=r?Al(r):typeof fetch=="function",l=Al(s),c=Al(o);if(!a)return!1;const u=a&&Al(n),f=a&&(typeof i=="function"?(d=>x=>d.encode(x))(new i):async d=>new Uint8Array(await new s(d).arrayBuffer())),h=l&&u&&h0(()=>{let d=!1;const x=new s(Kt.origin,{body:new n,method:"POST",get duplex(){return d=!0,"half"}}),y=x.headers.has("Content-Type");return x.body!=null&&x.body.cancel(),d&&!y}),m=c&&u&&h0(()=>U.isReadableStream(new o("").body)),v={stream:m&&(d=>d.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!v[d]&&(v[d]=(x,y)=>{let _=x&&x[d];if(_)return _.call(x);throw new ye(`Response type '${d}' is not supported`,ye.ERR_NOT_SUPPORT,y)})});const E=async d=>{if(d==null)return 0;if(U.isBlob(d))return d.size;if(U.isSpecCompliantForm(d))return(await new s(Kt.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(U.isArrayBufferView(d)||U.isArrayBuffer(d))return d.byteLength;if(U.isURLSearchParams(d)&&(d=d+""),U.isString(d))return(await f(d)).byteLength},g=async(d,x)=>{const y=U.toFiniteNumber(d.getContentLength());return y??E(x)};return async d=>{let{url:x,method:y,data:_,signal:w,cancelToken:T,timeout:b,onDownloadProgress:S,onUploadProgress:C,responseType:L,headers:D,withCredentials:I="same-origin",fetchOptions:K,maxContentLength:ee,maxBodyLength:V}=p_(d);const J=U.isNumber(ee)&&ee>-1,G=U.isNumber(V)&&V>-1,k=W=>U.hasOwnProp(d,W)?d[W]:void 0;let Y=r||fetch;L=L?(L+"").toLowerCase():"text";let te=GT([w,T&&T.toAbortSignal()],b),Z=null;const oe=te&&te.unsubscribe&&(()=>{te.unsubscribe()});let Ue,Xe=null;const Be=()=>new ye("Request body larger than maxBodyLength limit",ye.ERR_BAD_REQUEST,d,Z);try{let W;const ae=k("auth");if(ae){const ge=U.getSafeProp(ae,"username")||"",et=U.getSafeProp(ae,"password")||"";W={username:ge,password:et}}if(KT(x)){const ge=new URL(x,Kt.origin);if(!W&&(ge.username||ge.password)){const et=f0(ge.username),ut=f0(ge.password);W={username:et,password:ut}}(ge.username||ge.password)&&(ge.username="",ge.password="",x=ge.href)}if(W&&(D.delete("authorization"),D.set("Authorization","Basic "+btoa(YT((W.username||"")+":"+(W.password||""))))),J&&typeof x=="string"&&x.startsWith("data:")&&$T(x)>ee)throw new ye("maxContentLength size of "+ee+" exceeded",ye.ERR_BAD_RESPONSE,d,Z);if(G&&y!=="get"&&y!=="head"){const ge=await E(_);if(typeof ge=="number"&&isFinite(ge)&&(Ue=ge,ge>V))throw Be()}const le=G&&(U.isReadableStream(_)||U.isStream(_)),Oe=(ge,et,ut)=>u0(ge,d0,mt=>{if(G&&mt>V)throw Xe=Be();et&&et(mt)},ut);if(h&&y!=="get"&&y!=="head"&&(C||le)){if(Ue=Ue??await g(D,_),Ue!==0||le){let ge=new s(x,{method:"POST",body:_,duplex:"half"}),et;if(U.isFormData(_)&&(et=ge.headers.get("content-type"))&&D.setContentType(et),ge.body){const[ut,mt]=C&&o0(Ue,Zc(a0(C)))||[];_=Oe(ge.body,ut,mt)}}}else if(le&&!l&&u&&y!=="get"&&y!=="head")_=Oe(_);else if(le&&l&&!h&&y!=="get"&&y!=="head")throw new ye("Stream request bodies are not supported by the current fetch implementation",ye.ERR_NOT_SUPPORT,d,Z);U.isString(I)||(I=I?"include":"omit");const ze=l&&"credentials"in s.prototype;if(U.isFormData(_)){const ge=D.getContentType();ge&&/^multipart\/form-data/i.test(ge)&&!/boundary=/i.test(ge)&&D.delete("content-type")}D.set("User-Agent","axios/"+nm,!1);const Ie={...K,signal:te,method:y.toUpperCase(),headers:i_(D.normalize()),body:_,duplex:"half",credentials:ze?I:void 0};Z=l&&new s(x,Ie);let st=await(l?Y(Z,K):Y(x,Ie));const qe=un.from(st.headers);if(J){const ge=U.toFiniteNumber(qe.getContentLength());if(ge!=null&&ge>ee)throw new ye("maxContentLength size of "+ee+" exceeded",ye.ERR_BAD_RESPONSE,d,Z)}const ot=m&&(L==="stream"||L==="response");if(m&&st.body&&(S||J||ot&&oe)){const ge={};["status","statusText","headers"].forEach(gt=>{ge[gt]=st[gt]});const et=U.toFiniteNumber(qe.getContentLength()),[ut,mt]=S&&o0(et,Zc(a0(S),!0))||[];let Ot=0;const Et=gt=>{if(J&&(Ot=gt,Ot>ee))throw new ye("maxContentLength size of "+ee+" exceeded",ye.ERR_BAD_RESPONSE,d,Z);ut&&ut(gt)};st=new o(u0(st.body,d0,Et,()=>{mt&&mt(),oe&&oe()}),ge)}L=L||"text";let We=await v[U.findKey(v,L)||"text"](st,d);if(J&&!m&&!ot){let ge;if(We!=null&&(typeof We.byteLength=="number"?ge=We.byteLength:typeof We.size=="number"?ge=We.size:typeof We=="string"&&(ge=typeof i=="function"?new i().encode(We).byteLength:We.length)),typeof ge=="number"&&ge>ee)throw new ye("maxContentLength size of "+ee+" exceeded",ye.ERR_BAD_RESPONSE,d,Z)}return!ot&&oe&&oe(),await new Promise((ge,et)=>{f_(ge,et,{data:We,headers:un.from(st.headers),status:st.status,statusText:st.statusText,config:d,request:Z})})}catch(W){if(oe&&oe(),te&&te.aborted&&te.reason instanceof ye){const ae=te.reason;throw ae.config=d,Z&&(ae.request=Z),W!==ae&&Object.defineProperty(ae,"cause",{__proto__:null,value:W,writable:!0,enumerable:!1,configurable:!0}),ae}if(Xe)throw Z&&!Xe.request&&(Xe.request=Z),Xe;if(W instanceof ye)throw Z&&!W.request&&(W.request=Z),W;if(W&&W.name==="TypeError"&&/Load failed|fetch/i.test(W.message)){const ae=new ye("Network Error",ye.ERR_NETWORK,d,Z,W&&W.response);throw Object.defineProperty(ae,"cause",{__proto__:null,value:W.cause||W,writable:!0,enumerable:!1,configurable:!0}),ae}throw ye.from(W,W&&W.code,d,Z,W&&W.response)}}},ZT=new Map,m_=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let o=s.length,a=o,l,c,u=ZT;for(;a--;)l=s[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:JT(e)),u=c;return c};m_();const im={http:dT,xhr:VT,fetch:{get:m_}};U.forEach(im,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const p0=t=>`- ${t}`,QT=t=>U.isFunction(t)||t===null||t===!1;function eA(t,e){t=U.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let o=0;o<n;o++){i=t[o];let a;if(r=i,!QT(i)&&(r=im[(a=String(i)).toLowerCase()],r===void 0))throw new ye(`Unknown adapter '${a}'`);if(r&&(U.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(p0).join(`
`):" "+p0(o[0]):"as no adapter specified";throw new ye("There is no suitable adapter to dispatch the request "+a,ye.ERR_NOT_SUPPORT)}return r}const g_={getAdapter:eA,adapters:im};function hd(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new il(null,t)}function m0(t){return hd(t),t.headers=un.from(t.headers),t.data=fd.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),g_.getAdapter(t.adapter||nl.adapter,t)(t).then(function(i){hd(t),t.response=i;try{i.data=fd.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=un.from(i.headers),i},function(i){if(!d_(i)&&(hd(t),i&&i.response)){t.response=i.response;try{i.response.data=fd.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=un.from(i.response.headers)}return Promise.reject(i)})}const Ru={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ru[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const g0={};Ru.transitional=function(e,n,i){function r(s,o){return"[Axios v"+nm+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new ye(r(o," has been removed"+(n?" in "+n:"")),ye.ERR_DEPRECATED);return n&&!g0[o]&&(g0[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};Ru.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function tA(t,e,n){if(typeof t!="object"||t===null)throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ye("option "+s+" must be "+l,ye.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ye("Unknown option "+s,ye.ERR_BAD_OPTION)}}const yc={assertOptions:tA,validators:Ru},sn=yc.validators;let vs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new r0,response:new r0}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=(()=>{if(!r.stack)return"";const o=r.stack.indexOf(`
`);return o===-1?"":r.stack.slice(o+1)})();try{if(!i.stack)i.stack=s;else if(s){const o=s.indexOf(`
`),a=o===-1?-1:s.indexOf(`
`,o+1),l=a===-1?"":s.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+s)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ws(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&yc.assertOptions(i,{silentJSONParsing:sn.transitional(sn.boolean),forcedJSONParsing:sn.transitional(sn.boolean),clarifyTimeoutError:sn.transitional(sn.boolean),legacyInterceptorReqResOrdering:sn.transitional(sn.boolean),advertiseZstdAcceptEncoding:sn.transitional(sn.boolean),validateStatusUndefinedResolves:sn.transitional(sn.boolean)},!1),r!=null&&(U.isFunction(r)?n.paramsSerializer={serialize:r}:yc.assertOptions(r,{encode:sn.function,serialize:sn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),yc.assertOptions(n,{baseUrl:sn.spelling("baseURL"),withXsrfToken:sn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&U.merge(s.common,s[n.method]);s&&U.forEach(["delete","get","head","post","put","patch","query","common"],v=>{delete s[v]}),n.headers=un.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(E){if(typeof E.runWhen=="function"&&E.runWhen(n)===!1)return;l=l&&E.synchronous;const g=n.transitional||em;g&&g.legacyInterceptorReqResOrdering?a.unshift(E.fulfilled,E.rejected):a.push(E.fulfilled,E.rejected)});const c=[];this.interceptors.response.forEach(function(E){c.push(E.fulfilled,E.rejected)});let u,f=0,h;if(!l){const v=[m0.bind(this),void 0];for(v.unshift(...a),v.push(...c),h=v.length,u=Promise.resolve(n);f<h;)u=u.then(v[f++],v[f++]);return u}h=a.length;let m=n;for(;f<h;){const v=a[f++],E=a[f++];try{m=v(m)}catch(g){E.call(this,g);break}}try{u=m0.call(this,m)}catch(v){return Promise.reject(v)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=ws(this.defaults,e);const n=h_(e.baseURL,e.url,e.allowAbsoluteUrls,e);return l_(n,e.params,e.paramsSerializer)}};U.forEach(["delete","get","head","options"],function(e){vs.prototype[e]=function(n,i){return this.request(ws(i||{},{method:e,url:n,data:i&&U.hasOwnProp(i,"data")?i.data:void 0}))}});U.forEach(["post","put","patch","query"],function(e){function n(i){return function(s,o,a){return this.request(ws(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}vs.prototype[e]=n(),e!=="query"&&(vs.prototype[e+"Form"]=n(!0))});let nA=class v_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new il(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new v_(function(r){e=r}),cancel:e}}};function iA(t){return function(n){return t.apply(null,n)}}function rA(t){return U.isObject(t)&&t.isAxiosError===!0}const th={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(th).forEach(([t,e])=>{th[e]=t});function x_(t){const e=new vs(t),n=$y(vs.prototype.request,e);return U.extend(n,vs.prototype,e,{allOwnKeys:!0}),U.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return x_(ws(t,r))},n}const Ut=x_(nl);Ut.Axios=vs;Ut.CanceledError=il;Ut.CancelToken=nA;Ut.isCancel=d_;Ut.VERSION=nm;Ut.toFormData=Cu;Ut.AxiosError=ye;Ut.Cancel=Ut.CanceledError;Ut.all=function(e){return Promise.all(e)};Ut.spread=iA;Ut.isAxiosError=rA;Ut.mergeConfig=ws;Ut.AxiosHeaders=un;Ut.formToJSON=t=>u_(U.isHTMLForm(t)?new FormData(t):t);Ut.getAdapter=g_.getAdapter;Ut.HttpStatusCode=th;Ut.default=Ut;const{Axios:NL,AxiosError:FL,CanceledError:UL,isCancel:OL,CancelToken:kL,VERSION:BL,all:zL,Cancel:HL,isAxiosError:VL,spread:GL,toFormData:WL,AxiosHeaders:jL,HttpStatusCode:XL,formToJSON:qL,getAdapter:$L,mergeConfig:YL,create:KL}=Ut,rm="/api",sA="1.1.0",pt=Ut.create({baseURL:rm,headers:{"Content-Type":"application/json"}});pt.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t});pt.interceptors.response.use(t=>t,t=>{var e;return((e=t.response)==null?void 0:e.status)===401&&(localStorage.removeItem("token"),window.location.hash="#/login"),Promise.reject(t)});const y_=z.createContext(null);function oA(){const[t,e]=z.useState(null),[n,i]=z.useState(!0),r=z.useCallback(async()=>{var m;const u=localStorage.getItem("token");if(!u){e(null),i(!1);return}const f=new AbortController,h=setTimeout(()=>f.abort(),8e3);try{const v=await fetch(`${rm}/auth/me`,{headers:{Authorization:`Bearer ${u}`},signal:f.signal});if(!v.ok)throw new Error;const E=await v.json();e(((m=E.data)==null?void 0:m.user)||E.user)}catch{localStorage.removeItem("token"),e(null)}finally{clearTimeout(h),i(!1)}},[]);return z.useEffect(()=>{r()},[r]),{user:t,loading:n,login:async(u,f)=>{var g,d;const h=u.includes("@")?{email:u,password:f}:{phone:u,password:f},{data:m}=await pt.post("/auth/login",h),v=((g=m.data)==null?void 0:g.token)||m.token,E=((d=m.data)==null?void 0:d.user)||m.user;return localStorage.setItem("token",v),e(E),E},loginWithGoogle:async(u,f=!1)=>{var E,g;const{data:h}=await pt.post("/auth/google",{id_token:u,consent_given:f}),m=((E=h.data)==null?void 0:E.token)||h.token,v=((g=h.data)==null?void 0:g.user)||h.user;return localStorage.setItem("token",m),e(v),v},register:async u=>{var v,E;const{data:f}=await pt.post("/auth/register",u),h=((v=f.data)==null?void 0:v.token)||f.token,m=((E=f.data)==null?void 0:E.user)||f.user;return localStorage.setItem("token",h),e(m),m},logout:()=>{localStorage.removeItem("token"),e(null)},updateUser:u=>{e(f=>f&&{...f,...u})},refetch:r}}function aA({children:t}){const e=oA();return z.createElement(y_.Provider,{value:e},t)}function sr(){const t=z.useContext(y_);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}function ii({user:t,role:e,children:n}){if(!t)return p.jsx(uo,{to:"/login",replace:!0});if(e&&t.role!==e){const i=t.role==="hospital"?"/console":t.role==="admin"?"/admin":"/home";return p.jsx(uo,{to:i,replace:!0})}return n}const P={oxblood:"#7A1626",oxbloodDark:"#5E0F1D",arterial:"#C8102E",arterialSoft:"#FBEBEE",ink:"#17151A",mut:"#6F6963",faint:"#9A938C",porcelain:"#F5F3F0",card:"#FFFFFF",line:"#E8E3DD",leaf:"#0F6B4A",leafSoft:"#E8F2EE",consoleBg:"#14161C",consoleCard:"#1D2028",consoleLine:"#2B2F3A",consoleMut:"#8B909C",gold:"#8A6A1F"},nh={"O-":["O-"],"O+":["O-","O+"],"A-":["O-","A-"],"A+":["O-","O+","A-","A+"],"B-":["O-","B-"],"B+":["O-","O+","B-","B+"],"AB-":["O-","A-","B-","AB-"],"AB+":["O-","O+","A-","A+","B-","B+","AB-","AB+"]},lA=["O-","AB-"],__=["O+","O-","A+","A-","B+","B-","AB+","AB-"];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sm="185",cA=0,v0=1,uA=2,_c=1,dA=2,da=3,Br=0,Pn=1,Wi=2,Yi=0,xo=1,ih=2,x0=3,y0=4,fA=5,os=100,hA=101,pA=102,mA=103,gA=104,vA=200,xA=201,yA=202,_A=203,rh=204,sh=205,SA=206,EA=207,MA=208,wA=209,TA=210,AA=211,bA=212,CA=213,RA=214,oh=0,ah=1,lh=2,Po=3,ch=4,uh=5,dh=6,fh=7,S_=0,PA=1,LA=2,Pi=0,E_=1,M_=2,w_=3,T_=4,A_=5,b_=6,C_=7,R_=300,Ts=301,Lo=302,pd=303,md=304,Pu=306,hh=1e3,qi=1001,ph=1002,Jt=1003,DA=1004,bl=1005,cn=1006,gd=1007,fs=1008,Bn=1009,P_=1010,L_=1011,Wa=1012,om=1013,Di=1014,Ai=1015,tr=1016,am=1017,lm=1018,ja=1020,D_=35902,I_=35899,N_=1021,F_=1022,di=1023,nr=1026,hs=1027,U_=1028,cm=1029,As=1030,um=1031,dm=1033,Sc=33776,Ec=33777,Mc=33778,wc=33779,mh=35840,gh=35841,vh=35842,xh=35843,yh=36196,_h=37492,Sh=37496,Eh=37488,Mh=37489,eu=37490,wh=37491,Th=37808,Ah=37809,bh=37810,Ch=37811,Rh=37812,Ph=37813,Lh=37814,Dh=37815,Ih=37816,Nh=37817,Fh=37818,Uh=37819,Oh=37820,kh=37821,Bh=36492,zh=36494,Hh=36495,Vh=36283,Gh=36284,tu=36285,Wh=36286,IA=3200,jh=0,NA=1,Mr="",$n="srgb",nu="srgb-linear",iu="linear",lt="srgb",Us=7680,_0=519,FA=512,UA=513,OA=514,fm=515,kA=516,BA=517,hm=518,zA=519,S0=35044,E0="300 es",bi=2e3,Xa=2001;function HA(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ru(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VA(){const t=ru("canvas");return t.style.display="block",t}const M0={};function w0(...t){const e="THREE."+t.shift();console.log(e,...t)}function O_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ke(...t){t=O_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=O_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function yo(...t){const e=t.join(" ");e in M0||(M0[e]=!0,ke(...t))}function GA(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const WA={[oh]:ah,[lh]:dh,[ch]:fh,[Po]:uh,[ah]:oh,[dh]:lh,[fh]:ch,[uh]:Po};class Ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,Xh=180/Math.PI;function rl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function jA(t,e){return(t%e+e)%e}function xd(t,e,n){return(1-n)*t+n*e}function ea(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function En(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Sm=class Sm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sm.prototype.isVector2=!0;let Ne=Sm;class Ho{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],m=s[o+1],v=s[o+2],E=s[o+3];if(f!==E||l!==h||c!==m||u!==v){let g=l*h+c*m+u*v+f*E;g<0&&(h=-h,m=-m,v=-v,E=-E,g=-g);let d=1-a;if(g<.9995){const x=Math.acos(g),y=Math.sin(x);d=Math.sin(d*x)/y,a=Math.sin(a*x)/y,l=l*d+h*a,c=c*d+m*a,u=u*d+v*a,f=f*d+E*a}else{l=l*d+h*a,c=c*d+m*a,u=u*d+v*a,f=f*d+E*a;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*m-c*h,e[n+1]=l*v+u*h+c*f-a*m,e[n+2]=c*v+u*m+a*h-l*f,e[n+3]=u*v-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"YZX":this._x=h*u*f+c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f-h*m*v;break;case"XZY":this._x=h*u*f-c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f+h*m*v;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Em=class Em{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(T0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(T0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Em.prototype.isVector3=!0;let F=Em;const yd=new F,T0=new Ho,Mm=class Mm{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],v=i[8],E=r[0],g=r[3],d=r[6],x=r[1],y=r[4],_=r[7],w=r[2],T=r[5],b=r[8];return s[0]=o*E+a*x+l*w,s[3]=o*g+a*y+l*T,s[6]=o*d+a*_+l*b,s[1]=c*E+u*x+f*w,s[4]=c*g+u*y+f*T,s[7]=c*d+u*_+f*b,s[2]=h*E+m*x+v*w,s[5]=h*g+m*y+v*T,s[8]=h*d+m*_+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,v=n*f+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=f*E,e[1]=(r*c-u*i)*E,e[2]=(a*i-r*o)*E,e[3]=h*E,e[4]=(u*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=m*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return yo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_d.makeScale(e,n)),this}rotate(e){return yo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_d.makeRotation(-e)),this}translate(e,n){return yo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_d.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mm.prototype.isMatrix3=!0;let He=Mm;const _d=new He,A0=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b0=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XA(){const t={enabled:!0,workingColorSpace:nu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=_o(r.r),r.g=_o(r.g),r.b=_o(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mr?iu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[nu]:{primaries:e,whitePoint:i,transfer:iu,toXYZ:A0,fromXYZ:b0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:A0,fromXYZ:b0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),t}const Je=XA();function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _o(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Os;class qA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Os===void 0&&(Os=ru("canvas")),Os.width=e.width,Os.height=e.height;const r=Os.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Os}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ru("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $A=0;class pm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$A++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sd(r[o].image)):s.push(Sd(r[o]))}else s=Sd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Sd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let YA=0;const Ed=new F;class gn extends Ps{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=qi,r=qi,s=cn,o=fs,a=di,l=Bn,c=gn.DEFAULT_ANISOTROPY,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YA++}),this.uuid=rl(),this.name="",this.source=new pm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hh:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hh:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=R_;gn.DEFAULT_ANISOTROPY=1;const wm=class wm{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],v=l[9],E=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+E)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,_=(m+1)/2,w=(d+1)/2,T=(u+h)/4,b=(f+E)/4,S=(v+g)/4;return y>_&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=b/i):_>w?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=T/r,s=S/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=S/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-v)*(g-v)+(f-E)*(f-E)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(f-E)/x,this.z=(h-u)/x,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wm.prototype.isVector4=!0;let At=wm;class KA extends Ps{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new gn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new pm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends KA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class k_ extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JA extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=class lu{constructor(e,n,i,r,s,o,a,l,c,u,f,h,m,v,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,m,v,E,g)}set(e,n,i,r,s,o,a,l,c,u,f,h,m,v,E,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=v,d[11]=E,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,v=a*u,E=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+v*c,n[5]=h-E*c,n[9]=-a*l,n[2]=E-h*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,v=c*u,E=c*f;n[0]=h+E*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-v,n[6]=E+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,v=c*u,E=c*f;n[0]=h-E*a,n[4]=-o*f,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*u,n[9]=E-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,v=a*u,E=a*f;n[0]=l*u,n[4]=v*c-m,n[8]=h*c+E,n[1]=l*f,n[5]=E*c+h,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,v=a*l,E=a*c;n[0]=l*u,n[4]=E-h*f,n[8]=v*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+v,n[10]=h-E*f}else if(e.order==="XZY"){const h=o*l,m=o*c,v=a*l,E=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+E,n[5]=o*u,n[9]=m*f-v,n[2]=v*f-m,n[6]=a*u,n[10]=E*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZA,e,QA)}lookAt(e,n,i){const r=this.elements;return In.subVectors(e,n),In.lengthSq()===0&&(In.z=1),In.normalize(),dr.crossVectors(i,In),dr.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),dr.crossVectors(i,In)),dr.normalize(),Cl.crossVectors(In,dr),r[0]=dr.x,r[4]=Cl.x,r[8]=In.x,r[1]=dr.y,r[5]=Cl.y,r[9]=In.y,r[2]=dr.z,r[6]=Cl.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],v=i[2],E=i[6],g=i[10],d=i[14],x=i[3],y=i[7],_=i[11],w=i[15],T=r[0],b=r[4],S=r[8],C=r[12],L=r[1],D=r[5],I=r[9],K=r[13],ee=r[2],V=r[6],J=r[10],G=r[14],k=r[3],Y=r[7],te=r[11],Z=r[15];return s[0]=o*T+a*L+l*ee+c*k,s[4]=o*b+a*D+l*V+c*Y,s[8]=o*S+a*I+l*J+c*te,s[12]=o*C+a*K+l*G+c*Z,s[1]=u*T+f*L+h*ee+m*k,s[5]=u*b+f*D+h*V+m*Y,s[9]=u*S+f*I+h*J+m*te,s[13]=u*C+f*K+h*G+m*Z,s[2]=v*T+E*L+g*ee+d*k,s[6]=v*b+E*D+g*V+d*Y,s[10]=v*S+E*I+g*J+d*te,s[14]=v*C+E*K+g*G+d*Z,s[3]=x*T+y*L+_*ee+w*k,s[7]=x*b+y*D+_*V+w*Y,s[11]=x*S+y*I+_*J+w*te,s[15]=x*C+y*K+_*G+w*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],v=e[3],E=e[7],g=e[11],d=e[15],x=l*m-c*h,y=a*m-c*f,_=a*h-l*f,w=o*m-c*u,T=o*h-l*u,b=o*f-a*u;return n*(E*x-g*y+d*_)-i*(v*x-g*w+d*T)+r*(v*y-E*w+d*b)-s*(v*_-E*T+g*b)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],v=e[12],E=e[13],g=e[14],d=e[15],x=n*a-i*o,y=n*l-r*o,_=n*c-s*o,w=i*l-r*a,T=i*c-s*a,b=r*c-s*l,S=u*E-f*v,C=u*g-h*v,L=u*d-m*v,D=f*g-h*E,I=f*d-m*E,K=h*d-m*g,ee=x*K-y*I+_*D+w*L-T*C+b*S;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/ee;return e[0]=(a*K-l*I+c*D)*V,e[1]=(r*I-i*K-s*D)*V,e[2]=(E*b-g*T+d*w)*V,e[3]=(h*T-f*b-m*w)*V,e[4]=(l*L-o*K-c*C)*V,e[5]=(n*K-r*L+s*C)*V,e[6]=(g*_-v*b-d*y)*V,e[7]=(u*b-h*_+m*y)*V,e[8]=(o*I-a*L+c*S)*V,e[9]=(i*L-n*I-s*S)*V,e[10]=(v*T-E*_+d*x)*V,e[11]=(f*_-u*T-m*x)*V,e[12]=(a*C-o*D-l*S)*V,e[13]=(n*D-i*C+r*S)*V,e[14]=(E*y-v*w-g*x)*V,e[15]=(u*w-f*y+h*x)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,v=s*f,E=o*u,g=o*f,d=a*f,x=l*c,y=l*u,_=l*f,w=i.x,T=i.y,b=i.z;return r[0]=(1-(E+d))*w,r[1]=(m+_)*w,r[2]=(v-y)*w,r[3]=0,r[4]=(m-_)*T,r[5]=(1-(h+d))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(v+y)*b,r[9]=(g-x)*b,r[10]=(1-(h+E))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ks.set(r[0],r[1],r[2]).length();const a=ks.set(r[4],r[5],r[6]).length(),l=ks.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ri.copy(this);const c=1/o,u=1/a,f=1/l;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,n.setFromRotationMatrix(ri),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=bi,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),m=(i+r)/(i-r);let v,E;if(l)v=s/(o-s),E=o*s/(o-s);else if(a===bi)v=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Xa)v=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=bi,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,E;if(l)v=1/(o-s),E=o/(o-s);else if(a===bi)v=-2/(o-s),E=-(o+s)/(o-s);else if(a===Xa)v=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};lu.prototype.isMatrix4=!0;let wt=lu;const ks=new F,ri=new wt,ZA=new F(0,0,0),QA=new F(1,1,1),dr=new F,Cl=new F,In=new F,C0=new wt,R0=new Ho;class zr{constructor(e=0,n=0,i=0,r=zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return C0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return R0.setFromEuler(this),this.setFromQuaternion(R0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zr.DEFAULT_ORDER="XYZ";class B_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eb=0;const P0=new F,Bs=new Ho,Ni=new wt,Rl=new F,ta=new F,tb=new F,nb=new Ho,L0=new F(1,0,0),D0=new F(0,1,0),I0=new F(0,0,1),N0={type:"added"},ib={type:"removed"},zs={type:"childadded",child:null},Md={type:"childremoved",child:null};class vn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new F,n=new zr,i=new Ho,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new He}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Bs.setFromAxisAngle(e,n),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,n){return Bs.setFromAxisAngle(e,n),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(L0,e)}rotateY(e){return this.rotateOnAxis(D0,e)}rotateZ(e){return this.rotateOnAxis(I0,e)}translateOnAxis(e,n){return P0.copy(e).applyQuaternion(this.quaternion),this.position.add(P0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(L0,e)}translateY(e){return this.translateOnAxis(D0,e)}translateZ(e){return this.translateOnAxis(I0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Rl.copy(e):Rl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(ta,Rl,this.up):Ni.lookAt(Rl,ta,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Bs.setFromRotationMatrix(Ni),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(N0),zs.child=e,this.dispatchEvent(zs),zs.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ib),Md.child=e,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(N0),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new F(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pl extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rb={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),d=this._getHandJoint(c,E);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Pl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function Td(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=jA(e,1),n=Ye(n,0,1),i=Ye(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Td(o,s,e+1/3),this.g=Td(o,s,e),this.b=Td(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=$n){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const i=z_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Je.workingToColorSpace(an.copy(this),e),Math.round(Ye(an.r*255,0,255))*65536+Math.round(Ye(an.g*255,0,255))*256+Math.round(Ye(an.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=$n){Je.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(Ll);const i=xd(fr.h,Ll.h,n),r=xd(fr.s,Ll.s,n),s=xd(fr.l,Ll.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Qe;Qe.NAMES=z_;class mm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=n}clone(){return new mm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sb extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zr,this.environmentIntensity=1,this.environmentRotation=new zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const si=new F,Fi=new F,Ad=new F,Ui=new F,Hs=new F,Vs=new F,F0=new F,bd=new F,Cd=new F,Rd=new F,Pd=new At,Ld=new At,Dd=new At;class ui{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){si.subVectors(r,n),Fi.subVectors(i,n),Ad.subVectors(e,n);const o=si.dot(si),a=si.dot(Fi),l=si.dot(Ad),c=Fi.dot(Fi),u=Fi.dot(Ad),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Pd.setScalar(0),Ld.setScalar(0),Dd.setScalar(0),Pd.fromBufferAttribute(e,n),Ld.fromBufferAttribute(e,i),Dd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pd,s.x),o.addScaledVector(Ld,s.y),o.addScaledVector(Dd,s.z),o}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),Fi.subVectors(e,n),si.cross(Fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),si.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ui.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Hs.subVectors(r,i),Vs.subVectors(s,i),bd.subVectors(e,i);const l=Hs.dot(bd),c=Vs.dot(bd);if(l<=0&&c<=0)return n.copy(i);Cd.subVectors(e,r);const u=Hs.dot(Cd),f=Vs.dot(Cd);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Hs,o);Rd.subVectors(e,s);const m=Hs.dot(Rd),v=Vs.dot(Rd);if(v>=0&&m<=v)return n.copy(s);const E=m*c-l*v;if(E<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Vs,a);const g=u*v-m*f;if(g<=0&&f-u>=0&&m-v>=0)return F0.subVectors(s,r),a=(f-u)/(f-u+(m-v)),n.copy(r).addScaledVector(F0,a);const d=1/(g+E+h);return o=E*d,a=h*d,n.copy(i).addScaledVector(Hs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sl{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dl.copy(i.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Il.subVectors(this.max,na),Gs.subVectors(e.a,na),Ws.subVectors(e.b,na),js.subVectors(e.c,na),hr.subVectors(Ws,Gs),pr.subVectors(js,Ws),qr.subVectors(Gs,js);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-qr.z,qr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,qr.z,0,-qr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-qr.y,qr.x,0];return!Id(n,Gs,Ws,js,Il)||(n=[1,0,0,0,1,0,0,0,1],!Id(n,Gs,Ws,js,Il))?!1:(Nl.crossVectors(hr,pr),n=[Nl.x,Nl.y,Nl.z],Id(n,Gs,Ws,js,Il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new F,new F,new F,new F,new F,new F,new F,new F],oi=new F,Dl=new sl,Gs=new F,Ws=new F,js=new F,hr=new F,pr=new F,qr=new F,na=new F,Il=new F,Nl=new F,$r=new F;function Id(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$r.fromArray(t,s);const a=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),l=e.dot($r),c=n.dot($r),u=i.dot($r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kt=new F,Fl=new Ne;let ob=0;class Qn extends Ps{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ob++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=S0,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fl.fromBufferAttribute(this,n),Fl.applyMatrix3(e),this.setXY(n,Fl.x,Fl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ea(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ea(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ea(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ea(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ea(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),r=En(r,this.array),s=En(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==S0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class H_ extends Qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class V_ extends Qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xn extends Qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const ab=new sl,ia=new F,Nd=new F;class Lu{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ab.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const n=ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Nd)),this.expandByPoint(ia.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lb=0;const Xn=new wt,Fd=new vn,Xs=new F,Nn=new sl,ra=new sl,Wt=new F;class Ln extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(HA(e)?V_:H_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,i){return Xn.makeTranslation(e,n,i),this.applyMatrix4(Xn),this}scale(e,n,i){return Xn.makeScale(e,n,i),this.applyMatrix4(Xn),this}lookAt(e){return Fd.lookAt(e),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ra.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Nn.min,ra.min),Nn.expandByPoint(Wt),Wt.addVectors(Nn.max,ra.max),Nn.expandByPoint(Wt)):(Nn.expandByPoint(ra.min),Nn.expandByPoint(ra.max))}Nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(e,c),Wt.add(Xs)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Qn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new F,l[S]=new F;const c=new F,u=new F,f=new F,h=new Ne,m=new Ne,v=new Ne,E=new F,g=new F;function d(S,C,L){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,L),h.fromBufferAttribute(s,S),m.fromBufferAttribute(s,C),v.fromBufferAttribute(s,L),u.sub(c),f.sub(c),m.sub(h),v.sub(h);const D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(E.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(D),a[S].add(E),a[C].add(E),a[L].add(E),l[S].add(g),l[C].add(g),l[L].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,C=x.length;S<C;++S){const L=x[S],D=L.start,I=L.count;for(let K=D,ee=D+I;K<ee;K+=3)d(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const y=new F,_=new F,w=new F,T=new F;function b(S){w.fromBufferAttribute(r,S),T.copy(w);const C=a[S];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),_.crossVectors(T,C);const D=_.dot(l[S])<0?-1:1;o.setXYZW(S,y.x,y.y,y.z,D)}for(let S=0,C=x.length;S<C;++S){const L=x[S],D=L.start,I=L.count;for(let K=D,ee=D+I;K<ee;K+=3)b(e.getX(K+0)),b(e.getX(K+1)),b(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),E=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let E=0,g=l.length;E<g;E++){a.isInterleavedBufferAttribute?m=l[E]*a.data.stride+a.offset:m=l[E]*u;for(let d=0;d<u;d++)h[v++]=c[m++]}return new Qn(h,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ln,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cb=0;class Vo extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=xo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rh&&(i.blendSrc=this.blendSrc),this.blendDst!==sh&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new F,Ud=new F,Ul=new F,mr=new F,Od=new F,Ol=new F,kd=new F;class G_{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ud.copy(e).add(n).multiplyScalar(.5),Ul.copy(n).sub(e).normalize(),mr.copy(this.origin).sub(Ud);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ul),a=mr.dot(this.direction),l=-mr.dot(Ul),c=mr.lengthSq(),u=Math.abs(1-o*o);let f,h,m,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const E=1/u;f*=E,h*=E,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ud).addScaledVector(Ul,h),m}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){Od.subVectors(n,e),Ol.subVectors(i,e),kd.crossVectors(Od,Ol);let o=this.direction.dot(kd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mr.subVectors(this.origin,e);const l=a*this.direction.dot(Ol.crossVectors(mr,Ol));if(l<0)return null;const c=a*this.direction.dot(Od.cross(mr));if(c<0||l+c>o)return null;const u=-a*mr.dot(kd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class su extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.combine=S_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const U0=new wt,Yr=new G_,kl=new Lu,O0=new F,Bl=new F,zl=new F,Hl=new F,Bd=new F,Vl=new F,k0=new F,Gl=new F;class wn extends vn{constructor(e=new Ln,n=new su){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Bd.fromBufferAttribute(f,e),o?Vl.addScaledVector(Bd,u):Vl.addScaledVector(Bd.sub(n),u))}n.add(Vl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(s),Yr.copy(e.ray).recast(e.near),!(kl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(kl,O0)===null||Yr.origin.distanceToSquared(O0)>(e.far-e.near)**2))&&(U0.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(U0),!(i.boundingBox!==null&&Yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,E=h.length;v<E;v++){const g=h[v],d=o[g.materialIndex],x=Math.max(g.start,m.start),y=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let _=x,w=y;_<w;_+=3){const T=a.getX(_),b=a.getX(_+1),S=a.getX(_+2);r=Wl(this,d,e,i,c,u,f,T,b,S),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(a.count,m.start+m.count);for(let g=v,d=E;g<d;g+=3){const x=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);r=Wl(this,o,e,i,c,u,f,x,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,E=h.length;v<E;v++){const g=h[v],d=o[g.materialIndex],x=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let _=x,w=y;_<w;_+=3){const T=_,b=_+1,S=_+2;r=Wl(this,d,e,i,c,u,f,T,b,S),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let g=v,d=E;g<d;g+=3){const x=g,y=g+1,_=g+2;r=Wl(this,o,e,i,c,u,f,x,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function ub(t,e,n,i,r,s,o,a){let l;if(e.side===Pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Br,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Gl);return c<n.near||c>n.far?null:{distance:c,point:Gl.clone(),object:t}}function Wl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Bl),t.getVertexPosition(l,zl),t.getVertexPosition(c,Hl);const u=ub(t,e,n,i,Bl,zl,Hl,k0);if(u){const f=new F;ui.getBarycoord(k0,Bl,zl,Hl,f),r&&(u.uv=ui.getInterpolatedAttribute(r,a,l,c,f,new Ne)),s&&(u.uv1=ui.getInterpolatedAttribute(s,a,l,c,f,new Ne)),o&&(u.normal=ui.getInterpolatedAttribute(o,a,l,c,f,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};ui.getNormal(Bl,zl,Hl,h.normal),u.face=h,u.barycoord=f}return u}class db extends gn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Jt,u=Jt,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new F,fb=new F,hb=new He;class ss{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=zd.subVectors(i,n).cross(fb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(zd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||hb.getNormalMatrix(e),r=this.coplanarPoint(zd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Lu,pb=new Ne(.5,.5),jl=new F;class gm{constructor(e=new ss,n=new ss,i=new ss,r=new ss,s=new ss,o=new ss){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],m=s[7],v=s[8],E=s[9],g=s[10],d=s[11],x=s[12],y=s[13],_=s[14],w=s[15];if(r[0].setComponents(c-o,m-u,d-v,w-x).normalize(),r[1].setComponents(c+o,m+u,d+v,w+x).normalize(),r[2].setComponents(c+a,m+f,d+E,w+y).normalize(),r[3].setComponents(c-a,m-f,d-E,w-y).normalize(),i)r[4].setComponents(l,h,g,_).normalize(),r[5].setComponents(c-l,m-h,d-g,w-_).normalize();else if(r[4].setComponents(c-l,m-h,d-g,w-_).normalize(),n===bi)r[5].setComponents(c+l,m+h,d+g,w+_).normalize();else if(n===Xa)r[5].setComponents(l,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const n=pb.distanceTo(e.center);return Kr.radius=.7071067811865476+n,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(jl.x=r.normal.x>0?e.max.x:e.min.x,jl.y=r.normal.y>0?e.max.y:e.min.y,jl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qh extends Vo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const B0=new wt,$h=new G_,Xl=new Lu,ql=new F;class z0 extends vn{constructor(e=new Ln,n=new qh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(r),Xl.radius+=s,e.ray.intersectsSphere(Xl)===!1)return;B0.copy(r).invert(),$h.copy(e.ray).applyMatrix4(B0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=h,E=m;v<E;v++){const g=c.getX(v);ql.fromBufferAttribute(f,g),H0(ql,g,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=h,E=m;v<E;v++)ql.fromBufferAttribute(f,v),H0(ql,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function H0(t,e,n,i,r,s,o){const a=$h.distanceSqToPoint(t);if(a<n){const l=new F;$h.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class W_ extends gn{constructor(e=[],n=Ts,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Do extends gn{constructor(e,n,i=Di,r,s,o,a=Jt,l=Jt,c,u=nr,f=1){if(u!==nr&&u!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class mb extends Do{constructor(e,n=Di,i=Ts,r,s,o=Jt,a=Jt,l,c=nr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class j_ extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ol extends Ln{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(f,2));function v(E,g,d,x,y,_,w,T,b,S,C){const L=_/b,D=w/S,I=_/2,K=w/2,ee=T/2,V=b+1,J=S+1;let G=0,k=0;const Y=new F;for(let te=0;te<J;te++){const Z=te*D-K;for(let oe=0;oe<V;oe++){const Ue=oe*L-I;Y[E]=Ue*x,Y[g]=Z*y,Y[d]=ee,c.push(Y.x,Y.y,Y.z),Y[E]=0,Y[g]=0,Y[d]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(oe/b),f.push(1-te/S),G+=1}}for(let te=0;te<S;te++)for(let Z=0;Z<b;Z++){const oe=h+Z+V*te,Ue=h+Z+V*(te+1),Xe=h+(Z+1)+V*(te+1),Be=h+(Z+1)+V*te;l.push(oe,Ue,Be),l.push(Ue,Xe,Be),k+=6}a.addGroup(m,k,C),m+=k,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class or{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,m=(o-u)/h;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ne:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new F,r=[],s=[],o=[],a=new F,l=new wt;for(let m=0;m<=e;m++){const v=m/e;r[m]=this.getTangentAt(v,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Ye(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,v))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Ye(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],m*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class X_ extends or{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ne){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*u-m*f+this.aX,c=h*f+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gb extends X_{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vm(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,m*=u,r(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const V0=new F,G0=new F,Hd=new vm,Vd=new vm,Gd=new vm;class q_ extends or{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new F){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(G0.subVectors(r[0],r[1]).add(r[0]),c=G0);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(V0.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=V0),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),m),E=Math.pow(f.distanceToSquared(h),m),g=Math.pow(h.distanceToSquared(u),m);E<1e-4&&(E=1),v<1e-4&&(v=E),g<1e-4&&(g=E),Hd.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,v,E,g),Vd.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,v,E,g),Gd.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,v,E,g)}else this.curveType==="catmullrom"&&(Hd.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Vd.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Gd.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Hd.calc(l),Vd.calc(l),Gd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function W0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function vb(t,e){const n=1-t;return n*n*e}function xb(t,e){return 2*(1-t)*t*e}function yb(t,e){return t*t*e}function Ea(t,e,n,i){return vb(t,e)+xb(t,n)+yb(t,i)}function _b(t,e){const n=1-t;return n*n*n*e}function Sb(t,e){const n=1-t;return 3*n*n*t*e}function Eb(t,e){return 3*(1-t)*t*t*e}function Mb(t,e){return t*t*t*e}function Ma(t,e,n,i,r){return _b(t,e)+Sb(t,n)+Eb(t,i)+Mb(t,r)}class wb extends or{constructor(e=new Ne,n=new Ne,i=new Ne,r=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ne){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ma(e,r.x,s.x,o.x,a.x),Ma(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tb extends or{constructor(e=new F,n=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ma(e,r.x,s.x,o.x,a.x),Ma(e,r.y,s.y,o.y,a.y),Ma(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ab extends or{constructor(e=new Ne,n=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ne){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ne){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bb extends or{constructor(e=new F,n=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new F){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new F){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cb extends or{constructor(e=new Ne,n=new Ne,i=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ne){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ea(e,r.x,s.x,o.x),Ea(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $_ extends or{constructor(e=new F,n=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ea(e,r.x,s.x,o.x),Ea(e,r.y,s.y,o.y),Ea(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rb extends or{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ne){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(W0(a,l.x,c.x,u.x,f.x),W0(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ne().fromArray(r))}return this}}var Pb=Object.freeze({__proto__:null,ArcCurve:gb,CatmullRomCurve3:q_,CubicBezierCurve:wb,CubicBezierCurve3:Tb,EllipseCurve:X_,LineCurve:Ab,LineCurve3:bb,QuadraticBezierCurve:Cb,QuadraticBezierCurve3:$_,SplineCurve:Rb});class Du extends Ln{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,m=[],v=[],E=[],g=[];for(let d=0;d<u;d++){const x=d*h-o;for(let y=0;y<c;y++){const _=y*f-s;v.push(_,-x,0),E.push(0,0,1),g.push(y/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const y=x+c*d,_=x+c*(d+1),w=x+1+c*(d+1),T=x+1+c*d;m.push(y,_,T),m.push(_,w,T)}this.setIndex(m),this.setAttribute("position",new xn(v,3)),this.setAttribute("normal",new xn(E,3)),this.setAttribute("uv",new xn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}class ou extends Ln{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new F,h=new F,m=[],v=[],E=[],g=[];for(let d=0;d<=i;d++){const x=[],y=d/i,_=o+y*a,w=e*Math.cos(_),T=Math.sqrt(e*e-w*w);let b=0;d===0&&o===0?b=.5/n:d===i&&l===Math.PI&&(b=-.5/n);for(let S=0;S<=n;S++){const C=S/n,L=r+C*s;f.x=-T*Math.cos(L),f.y=w,f.z=T*Math.sin(L),v.push(f.x,f.y,f.z),h.copy(f).normalize(),E.push(h.x,h.y,h.z),g.push(C+b,1-y),x.push(c++)}u.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const y=u[d][x+1],_=u[d][x],w=u[d+1][x],T=u[d+1][x+1];(d!==0||o>0)&&m.push(y,_,T),(d!==i-1||l<Math.PI)&&m.push(_,w,T)}this.setIndex(m),this.setAttribute("position",new xn(v,3)),this.setAttribute("normal",new xn(E,3)),this.setAttribute("uv",new xn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xm extends Ln{constructor(e=new $_(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new F,l=new F,c=new Ne;let u=new F;const f=[],h=[],m=[],v=[];E(),this.setIndex(v),this.setAttribute("position",new xn(f,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(m,2));function E(){for(let y=0;y<n;y++)g(y);g(s===!1?n:0),x(),d()}function g(y){u=e.getPointAt(y/n,u);const _=o.normals[y],w=o.binormals[y];for(let T=0;T<=r;T++){const b=T/r*Math.PI*2,S=Math.sin(b),C=-Math.cos(b);l.x=C*_.x+S*w.x,l.y=C*_.y+S*w.y,l.z=C*_.z+S*w.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=n;y++)for(let _=1;_<=r;_++){const w=(r+1)*(y-1)+(_-1),T=(r+1)*y+(_-1),b=(r+1)*y+_,S=(r+1)*(y-1)+_;v.push(w,T,S),v.push(T,b,S)}}function x(){for(let y=0;y<=n;y++)for(let _=0;_<=r;_++)c.x=y/n,c.y=_/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new xm(new Pb[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Io(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(j0(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(j0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=Io(t[n]);for(const r in i)e[r]=i[r]}return e}function j0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Lb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Y_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Db={clone:Io,merge:fn};var Ib=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ib,this.fragmentShader=Nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=Lb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new wt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Fb extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ub extends Vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ob extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kb extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class K_ extends vn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Wd=new wt,X0=new F,q0=new F;class Bb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gm,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;X0.setFromMatrixPosition(e.matrixWorld),n.position.copy(X0),q0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(q0),n.updateMatrixWorld(),Wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Xa||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $l=new F,Yl=new Ho,_i=new F;class J_ extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($l,Yl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Yl,_i.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose($l,Yl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Yl,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gr=new F,$0=new Ne,Y0=new Ne;class kn extends J_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,$0,Y0),n.subVectors(Y0,$0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class zb extends Bb{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}}class K0 extends K_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new zb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Z_ extends J_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Hb extends K_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const qs=-90,$s=1;class Vb extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(qs,$s,e,n);r.layers=this.layers,this.add(r);const s=new kn(qs,$s,e,n);s.layers=this.layers,this.add(s);const o=new kn(qs,$s,e,n);o.layers=this.layers,this.add(o);const a=new kn(qs,$s,e,n);a.layers=this.layers,this.add(a);const l=new kn(qs,$s,e,n);l.layers=this.layers,this.add(l);const c=new kn(qs,$s,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Gb extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Tm=class Tm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Tm.prototype.isMatrix2=!0;let J0=Tm;function Z0(t,e,n,i){const r=Wb(i);switch(n){case N_:return t*e;case U_:return t*e/r.components*r.byteLength;case cm:return t*e/r.components*r.byteLength;case As:return t*e*2/r.components*r.byteLength;case um:return t*e*2/r.components*r.byteLength;case F_:return t*e*3/r.components*r.byteLength;case di:return t*e*4/r.components*r.byteLength;case dm:return t*e*4/r.components*r.byteLength;case Sc:case Ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mc:case wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gh:case xh:return Math.max(t,16)*Math.max(e,8)/4;case mh:case vh:return Math.max(t,8)*Math.max(e,8)/2;case yh:case _h:case Eh:case Mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sh:case eu:case wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case bh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Bh:case zh:case Hh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Vh:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tu:case Wh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Wb(t){switch(t){case Bn:case P_:return{byteLength:1,components:1};case Wa:case L_:case tr:return{byteLength:2,components:1};case am:case lm:return{byteLength:2,components:4};case Di:case om:case Ai:return{byteLength:4,components:1};case D_:case I_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sm}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Q_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jb(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<f.length;m++){const v=f[h],E=f[m];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++h,f[h]=E)}f.length=h+1;for(let m=0,v=f.length;m<v;m++){const E=f[m];t.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$b=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_C=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EC="gl_FragColor = linearToOutputTexel( gl_FragColor );",MC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,TC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$C=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,YC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_R=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ER=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,RR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,HR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$R=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Xb,alphahash_pars_fragment:qb,alphamap_fragment:$b,alphamap_pars_fragment:Yb,alphatest_fragment:Kb,alphatest_pars_fragment:Jb,aomap_fragment:Zb,aomap_pars_fragment:Qb,batching_pars_vertex:eC,batching_vertex:tC,begin_vertex:nC,beginnormal_vertex:iC,bsdfs:rC,iridescence_fragment:sC,bumpmap_pars_fragment:oC,clipping_planes_fragment:aC,clipping_planes_pars_fragment:lC,clipping_planes_pars_vertex:cC,clipping_planes_vertex:uC,color_fragment:dC,color_pars_fragment:fC,color_pars_vertex:hC,color_vertex:pC,common:mC,cube_uv_reflection_fragment:gC,defaultnormal_vertex:vC,displacementmap_pars_vertex:xC,displacementmap_vertex:yC,emissivemap_fragment:_C,emissivemap_pars_fragment:SC,colorspace_fragment:EC,colorspace_pars_fragment:MC,envmap_fragment:wC,envmap_common_pars_fragment:TC,envmap_pars_fragment:AC,envmap_pars_vertex:bC,envmap_physical_pars_fragment:kC,envmap_vertex:CC,fog_vertex:RC,fog_pars_vertex:PC,fog_fragment:LC,fog_pars_fragment:DC,gradientmap_pars_fragment:IC,lightmap_pars_fragment:NC,lights_lambert_fragment:FC,lights_lambert_pars_fragment:UC,lights_pars_begin:OC,lights_toon_fragment:BC,lights_toon_pars_fragment:zC,lights_phong_fragment:HC,lights_phong_pars_fragment:VC,lights_physical_fragment:GC,lights_physical_pars_fragment:WC,lights_fragment_begin:jC,lights_fragment_maps:XC,lights_fragment_end:qC,lightprobes_pars_fragment:$C,logdepthbuf_fragment:YC,logdepthbuf_pars_fragment:KC,logdepthbuf_pars_vertex:JC,logdepthbuf_vertex:ZC,map_fragment:QC,map_pars_fragment:eR,map_particle_fragment:tR,map_particle_pars_fragment:nR,metalnessmap_fragment:iR,metalnessmap_pars_fragment:rR,morphinstance_vertex:sR,morphcolor_vertex:oR,morphnormal_vertex:aR,morphtarget_pars_vertex:lR,morphtarget_vertex:cR,normal_fragment_begin:uR,normal_fragment_maps:dR,normal_pars_fragment:fR,normal_pars_vertex:hR,normal_vertex:pR,normalmap_pars_fragment:mR,clearcoat_normal_fragment_begin:gR,clearcoat_normal_fragment_maps:vR,clearcoat_pars_fragment:xR,iridescence_pars_fragment:yR,opaque_fragment:_R,packing:SR,premultiplied_alpha_fragment:ER,project_vertex:MR,dithering_fragment:wR,dithering_pars_fragment:TR,roughnessmap_fragment:AR,roughnessmap_pars_fragment:bR,shadowmap_pars_fragment:CR,shadowmap_pars_vertex:RR,shadowmap_vertex:PR,shadowmask_pars_fragment:LR,skinbase_vertex:DR,skinning_pars_vertex:IR,skinning_vertex:NR,skinnormal_vertex:FR,specularmap_fragment:UR,specularmap_pars_fragment:OR,tonemapping_fragment:kR,tonemapping_pars_fragment:BR,transmission_fragment:zR,transmission_pars_fragment:HR,uv_pars_fragment:VR,uv_pars_vertex:GR,uv_vertex:WR,worldpos_vertex:jR,background_vert:XR,background_frag:qR,backgroundCube_vert:$R,backgroundCube_frag:YR,cube_vert:KR,cube_frag:JR,depth_vert:ZR,depth_frag:QR,distance_vert:e2,distance_frag:t2,equirect_vert:n2,equirect_frag:i2,linedashed_vert:r2,linedashed_frag:s2,meshbasic_vert:o2,meshbasic_frag:a2,meshlambert_vert:l2,meshlambert_frag:c2,meshmatcap_vert:u2,meshmatcap_frag:d2,meshnormal_vert:f2,meshnormal_frag:h2,meshphong_vert:p2,meshphong_frag:m2,meshphysical_vert:g2,meshphysical_frag:v2,meshtoon_vert:x2,meshtoon_frag:y2,points_vert:_2,points_frag:S2,shadow_vert:E2,shadow_frag:M2,sprite_vert:w2,sprite_frag:T2},xe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},wi={basic:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:fn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:fn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:fn([xe.points,xe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:fn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:fn([xe.common,xe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:fn([xe.sprite,xe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:fn([xe.common,xe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:fn([xe.lights,xe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};wi.physical={uniforms:fn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Kl={r:0,b:0,g:0},A2=new wt,eS=new He;eS.set(-1,0,0,0,1,0,0,0,1);function b2(t,e,n,i,r,s){const o=new Qe(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function m(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const _=x.backgroundBlurriness>0;y=e.get(y,_)}return y}function v(x){let y=!1;const _=m(x);_===null?g(o,a):_&&_.isColor&&(g(_,1),y=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(x,y){const _=m(y);_&&(_.isCubeTexture||_.mapping===Pu)?(c===void 0&&(c=new wn(new ol(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Io(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(A2.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(eS),c.material.toneMapped=Je.getTransfer(_.colorSpace)!==lt,(u!==_||f!==_.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new wn(new Du(2,2),new Ii({name:"BackgroundMaterial",uniforms:Io(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,y){x.getRGB(Kl,Y_(t)),n.buffers.color.setClear(Kl.r,Kl.g,Kl.b,y,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:v,addToRenderList:E,dispose:d}}function C2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(D,I,K,ee,V){let J=!1;const G=f(D,ee,K,I);s!==G&&(s=G,c(s.object)),J=m(D,ee,K,V),J&&v(D,ee,K,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,_(D,I,K,ee),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function f(D,I,K,ee){const V=ee.wireframe===!0;let J=i[I.id];J===void 0&&(J={},i[I.id]=J);const G=D.isInstancedMesh===!0?D.id:0;let k=J[G];k===void 0&&(k={},J[G]=k);let Y=k[K.id];Y===void 0&&(Y={},k[K.id]=Y);let te=Y[V];return te===void 0&&(te=h(l()),Y[V]=te),te}function h(D){const I=[],K=[],ee=[];for(let V=0;V<n;V++)I[V]=0,K[V]=0,ee[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:K,attributeDivisors:ee,object:D,attributes:{},index:null}}function m(D,I,K,ee){const V=s.attributes,J=I.attributes;let G=0;const k=K.getAttributes();for(const Y in k)if(k[Y].location>=0){const Z=V[Y];let oe=J[Y];if(oe===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;G++}return s.attributesNum!==G||s.index!==ee}function v(D,I,K,ee){const V={},J=I.attributes;let G=0;const k=K.getAttributes();for(const Y in k)if(k[Y].location>=0){let Z=J[Y];Z===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),V[Y]=oe,G++}s.attributes=V,s.attributesNum=G,s.index=ee}function E(){const D=s.newAttributes;for(let I=0,K=D.length;I<K;I++)D[I]=0}function g(D){d(D,0)}function d(D,I){const K=s.newAttributes,ee=s.enabledAttributes,V=s.attributeDivisors;K[D]=1,ee[D]===0&&(t.enableVertexAttribArray(D),ee[D]=1),V[D]!==I&&(t.vertexAttribDivisor(D,I),V[D]=I)}function x(){const D=s.newAttributes,I=s.enabledAttributes;for(let K=0,ee=I.length;K<ee;K++)I[K]!==D[K]&&(t.disableVertexAttribArray(K),I[K]=0)}function y(D,I,K,ee,V,J,G){G===!0?t.vertexAttribIPointer(D,I,K,V,J):t.vertexAttribPointer(D,I,K,ee,V,J)}function _(D,I,K,ee){E();const V=ee.attributes,J=K.getAttributes(),G=I.defaultAttributeValues;for(const k in J){const Y=J[k];if(Y.location>=0){let te=V[k];if(te===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),te!==void 0){const Z=te.normalized,oe=te.itemSize,Ue=e.get(te);if(Ue===void 0)continue;const Xe=Ue.buffer,Be=Ue.type,W=Ue.bytesPerElement,ae=Be===t.INT||Be===t.UNSIGNED_INT||te.gpuType===om;if(te.isInterleavedBufferAttribute){const le=te.data,Oe=le.stride,ze=te.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Y.locationSize;Ie++)d(Y.location+Ie,le.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<Y.locationSize;Ie++)g(Y.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let Ie=0;Ie<Y.locationSize;Ie++)y(Y.location+Ie,oe/Y.locationSize,Be,Z,Oe*W,(ze+oe/Y.locationSize*Ie)*W,ae)}else{if(te.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)d(Y.location+le,te.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let le=0;le<Y.locationSize;le++)g(Y.location+le);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let le=0;le<Y.locationSize;le++)y(Y.location+le,oe/Y.locationSize,Be,Z,oe*W,oe/Y.locationSize*le*W,ae)}}else if(G!==void 0){const Z=G[k];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(Y.location,Z);break;case 3:t.vertexAttrib3fv(Y.location,Z);break;case 4:t.vertexAttrib4fv(Y.location,Z);break;default:t.vertexAttrib1fv(Y.location,Z)}}}}x()}function w(){C();for(const D in i){const I=i[D];for(const K in I){const ee=I[K];for(const V in ee){const J=ee[V];for(const G in J)u(J[G].object),delete J[G];delete ee[V]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const I=i[D.id];for(const K in I){const ee=I[K];for(const V in ee){const J=ee[V];for(const G in J)u(J[G].object),delete J[G];delete ee[V]}}delete i[D.id]}function b(D){for(const I in i){const K=i[I];for(const ee in K){const V=K[ee];if(V[D.id]===void 0)continue;const J=V[D.id];for(const G in J)u(J[G].object),delete J[G];delete V[D.id]}}}function S(D){for(const I in i){const K=i[I],ee=D.isInstancedMesh===!0?D.id:0,V=K[ee];if(V!==void 0){for(const J in V){const G=V[J];for(const k in G)u(G[k].object),delete G[k];delete V[J]}delete K[ee],Object.keys(K).length===0&&delete i[I]}}}function C(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:g,disableUnusedAttributes:x}}function R2(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];n.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function P2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==di&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const S=b===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Bn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ai&&!S)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,maxSamples:w,samples:T}}function L2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ss,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,E=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const x=s?0:i,y=x*4;let _=d.clippingState||null;l.value=_,_=u(v,h,y,m);for(let w=0;w!==y;++w)_[w]=n[w];d.clippingState=_,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,v){const E=f!==null?f.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const d=m+E*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,_=m;y!==E;++y,_+=4)o.copy(f[y]).applyMatrix4(x,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const br=4,Q0=[.125,.215,.35,.446,.526,.582],as=20,D2=256,sa=new Z_,ev=new Qe;let jd=null,Xd=0,qd=0,$d=!1;const I2=new F;class tv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=I2}=s;jd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,Xd,qd),this._renderer.xr.enabled=$d,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:tr,format:di,colorSpace:nu,depthBuffer:!1},r=nv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N2(s)),this._blurMaterial=U2(s,e,n),this._ggxMaterial=F2(s,e,n)}return r}_compileMaterial(e){const n=new wn(new Ln,e);this._renderer.compile(n,sa)}_sceneToCubeUV(e,n,i,r,s){const l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(ev),f.toneMapping=Pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new ol,new su({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let d=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(ev),d=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const w=this._cubeSize;Ys(r,_*w,y>2?w:0,w,w),f.setRenderTarget(r),d&&f.render(E,l),f.render(e,l)}f.toneMapping=m,f.autoClear=h,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ts||e.mapping===Lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ys(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,sa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,m=f*h,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-br?i-v+br:0),d=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,Ys(s,g,d,3*E,2*E),r.setRenderTarget(s),r.render(a,sa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Ys(e,g,d,3*E,2*E),r.setRenderTarget(e),r.render(a,sa)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*as-1),E=s/v,g=isFinite(s)?1+Math.floor(u*E):as;g>as&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${as}`);const d=[];let x=0;for(let b=0;b<as;++b){const S=b/E,C=Math.exp(-S*S/2);d.push(C),b===0?x+=C:b<g&&(x+=2*C)}for(let b=0;b<d.length;b++)d[b]=d[b]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=v,h.mipInt.value=y-i;const _=this._sizeLods[r],w=3*_*(r>y-br?r-y+br:0),T=4*(this._cubeSize-_);Ys(n,w,T,3*_,2*_),l.setRenderTarget(n),l.render(f,sa)}}function N2(t){const e=[],n=[],i=[];let r=t;const s=t-br+1+Q0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-br?l=Q0[o-t+br-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,E=3,g=2,d=1,x=new Float32Array(E*v*m),y=new Float32Array(g*v*m),_=new Float32Array(d*v*m);for(let T=0;T<m;T++){const b=T%3*2/3-1,S=T>2?0:-1,C=[b,S,0,b+2/3,S,0,b+2/3,S+1,0,b,S,0,b+2/3,S+1,0,b,S+1,0];x.set(C,E*v*T),y.set(h,g*v*T);const L=[T,T,T,T,T,T];_.set(L,d*v*T)}const w=new Ln;w.setAttribute("position",new Qn(x,E)),w.setAttribute("uv",new Qn(y,g)),w.setAttribute("faceIndex",new Qn(_,d)),i.push(new wn(w,null)),r>br&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function nv(t,e,n){const i=new Li(t,e,n);return i.texture.mapping=Pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ys(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function F2(t,e,n){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:D2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Iu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function U2(t,e,n){const i=new Float32Array(as),r=new F(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function iv(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function rv(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class tS extends Li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new W_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ol(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:Io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:Yi});s.uniforms.tEquirect.value=n;const o=new wn(r,s),a=n.minFilter;return n.minFilter===fs&&(n.minFilter=cn),new Vb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function O2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,m=!1){return h==null?null:m?o(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===pd||m===md)if(e.has(h)){const v=e.get(h).texture;return a(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const E=new tS(v.height);return E.fromEquirectangularTexture(t,h),e.set(h,E),h.addEventListener("dispose",c),a(E.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const m=h.mapping,v=m===pd||m===md,E=m===Ts||m===Lo;if(v||E){let g=n.get(h);const d=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new tv(t)),g=v?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const x=h.image;return v&&x&&x.height>0||E&&x&&l(x)?(i===null&&(i=new tv(t)),g=v?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,m){return m===pd?h.mapping=Ts:m===md&&(h.mapping=Lo),h}function l(h){let m=0;const v=6;for(let E=0;E<v;E++)h[E]!==void 0&&m++;return m===v}function c(h){const m=h.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function k2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&yo("WebGLRenderer: "+i+" extension not supported."),r}}}function B2(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,v=f.attributes.position;let E=0;if(v===void 0)return;if(m!==null){const x=m.array;E=m.version;for(let y=0,_=x.length;y<_;y+=3){const w=x[y+0],T=x[y+1],b=x[y+2];h.push(w,T,T,b,b,w)}}else{const x=v.array;E=v.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const w=y+0,T=y+1,b=y+2;h.push(w,T,T,b,b,w)}}const g=new(v.count>=65535?V_:H_)(h,1);g.version=E;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function z2(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,s,f*o),n.update(h,i,1)}function c(f,h,m){m!==0&&(t.drawElementsInstanced(i,h,s,f*o,m),n.update(h,i,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,m);let E=0;for(let g=0;g<m;g++)E+=h[g];n.update(E,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function H2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function V2(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let L=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var m=L;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;v===!0&&(_=1),E===!0&&(_=2),g===!0&&(_=3);let w=a.attributes.position.count*_,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*T*4*f),S=new k_(b,w,T,f);S.type=Ai,S.needsUpdate=!0;const C=_*4;for(let D=0;D<f;D++){const I=d[D],K=x[D],ee=y[D],V=w*T*4*D;for(let J=0;J<I.count;J++){const G=J*C;v===!0&&(r.fromBufferAttribute(I,J),b[V+G+0]=r.x,b[V+G+1]=r.y,b[V+G+2]=r.z,b[V+G+3]=0),E===!0&&(r.fromBufferAttribute(K,J),b[V+G+4]=r.x,b[V+G+5]=r.y,b[V+G+6]=r.z,b[V+G+7]=0),g===!0&&(r.fromBufferAttribute(ee,J),b[V+G+8]=r.x,b[V+G+9]=r.y,b[V+G+10]=r.z,b[V+G+11]=ee.itemSize===4?r.w:1)}}h={count:f,texture:S,size:new Ne(w,T)},i.set(a,h),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const E=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function G2(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const W2={[E_]:"LINEAR_TONE_MAPPING",[M_]:"REINHARD_TONE_MAPPING",[w_]:"CINEON_TONE_MAPPING",[T_]:"ACES_FILMIC_TONE_MAPPING",[b_]:"AGX_TONE_MAPPING",[C_]:"NEUTRAL_TONE_MAPPING",[A_]:"CUSTOM_TONE_MAPPING"};function j2(t,e,n,i,r,s){const o=new Li(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Do(e,n):void 0}),a=new Li(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),l=new Ln;l.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xn([0,2,0,0,2,0],2));const c=new Fb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new wn(l,c),f=new Z_(-1,1,1,-1,0,1);let h=null,m=null,v=!1,E,g=null,d=[],x=!1;this.setSize=function(y,_){o.setSize(y,_),a.setSize(y,_);for(let w=0;w<d.length;w++){const T=d[w];T.setSize&&T.setSize(y,_)}},this.setEffects=function(y){d=y,x=d.length>0&&d[0].isRenderPass===!0;const _=o.width,w=o.height;for(let T=0;T<d.length;T++){const b=d[T];b.setSize&&b.setSize(_,w)}},this.begin=function(y,_){if(v||y.toneMapping===Pi&&d.length===0)return!1;if(g=_,_!==null){const w=_.width,T=_.height;(o.width!==w||o.height!==T)&&this.setSize(w,T)}return x===!1&&y.setRenderTarget(o),E=y.toneMapping,y.toneMapping=Pi,!0},this.hasRenderPass=function(){return x},this.end=function(y,_){y.toneMapping=E,v=!0;let w=o,T=a;for(let b=0;b<d.length;b++){const S=d[b];if(S.enabled!==!1&&(S.render(y,T,w,_),S.needsSwap!==!1)){const C=w;w=T,T=C}}if(h!==y.outputColorSpace||m!==y.toneMapping){h=y.outputColorSpace,m=y.toneMapping,c.defines={},Je.getTransfer(h)===lt&&(c.defines.SRGB_TRANSFER="");const b=W2[m];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(g),y.render(u,f),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const nS=new gn,Yh=new Do(1,1),iS=new k_,rS=new JA,sS=new W_,sv=[],ov=[],av=new Float32Array(16),lv=new Float32Array(9),cv=new Float32Array(4);function Go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=sv[r];if(s===void 0&&(s=new Float32Array(r),sv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nu(t,e){let n=ov[e];n===void 0&&(n=new Int32Array(e),ov[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function X2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function Y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function K2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;cv.set(i),t.uniformMatrix2fv(this.addr,!1,cv),Gt(n,i)}}function J2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;lv.set(i),t.uniformMatrix3fv(this.addr,!1,lv),Gt(n,i)}}function Z2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;av.set(i),t.uniformMatrix4fv(this.addr,!1,av),Gt(n,i)}}function Q2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function tP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function nP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function iP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function sP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function oP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function aP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Yh.compareFunction=n.isReversedDepthBuffer()?hm:fm,s=Yh):s=nS,n.setTexture2D(e||s,r)}function lP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rS,r)}function cP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||sS,r)}function uP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||iS,r)}function dP(t){switch(t){case 5126:return X2;case 35664:return q2;case 35665:return $2;case 35666:return Y2;case 35674:return K2;case 35675:return J2;case 35676:return Z2;case 5124:case 35670:return Q2;case 35667:case 35671:return eP;case 35668:case 35672:return tP;case 35669:case 35673:return nP;case 5125:return iP;case 36294:return rP;case 36295:return sP;case 36296:return oP;case 35678:case 36198:case 36298:case 36306:case 35682:return aP;case 35679:case 36299:case 36307:return lP;case 35680:case 36300:case 36308:case 36293:return cP;case 36289:case 36303:case 36311:case 36292:return uP}}function fP(t,e){t.uniform1fv(this.addr,e)}function hP(t,e){const n=Go(e,this.size,2);t.uniform2fv(this.addr,n)}function pP(t,e){const n=Go(e,this.size,3);t.uniform3fv(this.addr,n)}function mP(t,e){const n=Go(e,this.size,4);t.uniform4fv(this.addr,n)}function gP(t,e){const n=Go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vP(t,e){const n=Go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xP(t,e){const n=Go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yP(t,e){t.uniform1iv(this.addr,e)}function _P(t,e){t.uniform2iv(this.addr,e)}function SP(t,e){t.uniform3iv(this.addr,e)}function EP(t,e){t.uniform4iv(this.addr,e)}function MP(t,e){t.uniform1uiv(this.addr,e)}function wP(t,e){t.uniform2uiv(this.addr,e)}function TP(t,e){t.uniform3uiv(this.addr,e)}function AP(t,e){t.uniform4uiv(this.addr,e)}function bP(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Yh:o=nS;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function CP(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||rS,s[o])}function RP(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||sS,s[o])}function PP(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||iS,s[o])}function LP(t){switch(t){case 5126:return fP;case 35664:return hP;case 35665:return pP;case 35666:return mP;case 35674:return gP;case 35675:return vP;case 35676:return xP;case 5124:case 35670:return yP;case 35667:case 35671:return _P;case 35668:case 35672:return SP;case 35669:case 35673:return EP;case 5125:return MP;case 36294:return wP;case 36295:return TP;case 36296:return AP;case 35678:case 36198:case 36298:case 36306:case 35682:return bP;case 35679:case 36299:case 36307:return CP;case 35680:case 36300:case 36308:case 36293:return RP;case 36289:case 36303:case 36311:case 36292:return PP}}class DP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dP(n.type)}}class IP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LP(n.type)}}class NP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function uv(t,e){t.seq.push(e),t.map[e.id]=e}function FP(t,e,n){const i=t.name,r=i.length;for(Yd.lastIndex=0;;){const s=Yd.exec(i),o=Yd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){uv(n,c===void 0?new DP(a,t,e):new IP(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new NP(a),uv(n,f)),n=f}}}class Tc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);FP(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function dv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const UP=37297;let OP=0;function kP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const fv=new He;function BP(t){Je._getMatrix(fv,Je.workingColorSpace,t);const e=`mat3( ${fv.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case iu:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function hv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+kP(t.getShaderSource(e),a)}else return s}function zP(t,e){const n=BP(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const HP={[E_]:"Linear",[M_]:"Reinhard",[w_]:"Cineon",[T_]:"ACESFilmic",[b_]:"AgX",[C_]:"Neutral",[A_]:"Custom"};function VP(t,e){const n=HP[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Jl=new F;function GP(){Je.getLuminanceCoefficients(Jl);const t=Jl.x.toFixed(4),e=Jl.y.toFixed(4),n=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function jP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function XP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function fa(t){return t!==""}function pv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(t){return t.replace(qP,YP)}const $P=new Map;function YP(t,e){let n=je[e];if(n===void 0){const i=$P.get(e);if(i!==void 0)n=je[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Kh(n)}const KP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(t){return t.replace(KP,JP)}function JP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZP={[_c]:"SHADOWMAP_TYPE_PCF",[da]:"SHADOWMAP_TYPE_VSM"};function QP(t){return ZP[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const e3={[Ts]:"ENVMAP_TYPE_CUBE",[Lo]:"ENVMAP_TYPE_CUBE",[Pu]:"ENVMAP_TYPE_CUBE_UV"};function t3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":e3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const n3={[Lo]:"ENVMAP_MODE_REFRACTION"};function i3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":n3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const r3={[S_]:"ENVMAP_BLENDING_MULTIPLY",[PA]:"ENVMAP_BLENDING_MIX",[LA]:"ENVMAP_BLENDING_ADD"};function s3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":r3[t.combine]||"ENVMAP_BLENDING_NONE"}function o3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function a3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=QP(n),c=t3(n),u=i3(n),f=s3(n),h=o3(n),m=WP(n),v=jP(s),E=r.createProgram();let g,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(fa).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(fa).join(`
`),d.length>0&&(d+=`
`)):(g=[vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),d=[vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?je.tonemapping_pars_fragment:"",n.toneMapping!==Pi?VP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,zP("linearToOutputTexel",n.outputColorSpace),GP(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fa).join(`
`)),o=Kh(o),o=pv(o,n),o=mv(o,n),a=Kh(a),a=pv(a,n),a=mv(a,n),o=gv(o),a=gv(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===E0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===E0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=x+g+o,_=x+d+a,w=dv(r,r.VERTEX_SHADER,y),T=dv(r,r.FRAGMENT_SHADER,_);r.attachShader(E,w),r.attachShader(E,T),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function b(D){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(E)||"",K=r.getShaderInfoLog(w)||"",ee=r.getShaderInfoLog(T)||"",V=I.trim(),J=K.trim(),G=ee.trim();let k=!0,Y=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,w,T);else{const te=hv(r,w,"vertex"),Z=hv(r,T,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+te+`
`+Z)}else V!==""?ke("WebGLProgram: Program Info Log:",V):(J===""||G==="")&&(Y=!1);Y&&(D.diagnostics={runnable:k,programLog:V,vertexShader:{log:J,prefix:g},fragmentShader:{log:G,prefix:d}})}r.deleteShader(w),r.deleteShader(T),S=new Tc(r,E),C=XP(r,E)}let S;this.getUniforms=function(){return S===void 0&&b(this),S};let C;this.getAttributes=function(){return C===void 0&&b(this),C};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(E,UP)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OP++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=T,this}let l3=0;class c3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new u3(e),n.set(e,i)),i}}class u3{constructor(e){this.id=l3++,this.code=e,this.usedTimes=0}}function d3(t){return t===As||t===eu||t===tu}function f3(t,e,n,i,r,s){const o=new B_,a=new c3,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function E(S,C,L,D,I,K){const ee=D.fog,V=I.geometry,J=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,k=e.get(S.envMap||J,G),Y=k&&k.mapping===Pu?k.image.height:null,te=m[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&ke("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,oe=Z!==void 0?Z.length:0;let Ue=0;V.morphAttributes.position!==void 0&&(Ue=1),V.morphAttributes.normal!==void 0&&(Ue=2),V.morphAttributes.color!==void 0&&(Ue=3);let Xe,Be,W,ae;if(te){const Ae=wi[te];Xe=Ae.vertexShader,Be=Ae.fragmentShader}else{Xe=S.vertexShader,Be=S.fragmentShader;const Ae=a.getVertexShaderStage(S),Rt=a.getFragmentShaderStage(S);a.update(S,Ae,Rt),W=Ae.id,ae=Rt.id}const le=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),ze=I.isInstancedMesh===!0,Ie=I.isBatchedMesh===!0,st=!!S.map,qe=!!S.matcap,ot=!!k,We=!!S.aoMap,ge=!!S.lightMap,et=!!S.bumpMap&&S.wireframe===!1,ut=!!S.normalMap,mt=!!S.displacementMap,Ot=!!S.emissiveMap,Et=!!S.metalnessMap,gt=!!S.roughnessMap,O=S.anisotropy>0,Sn=S.clearcoat>0,at=S.dispersion>0,R=S.iridescence>0,M=S.sheen>0,H=S.transmission>0,q=O&&!!S.anisotropyMap,Q=Sn&&!!S.clearcoatMap,ue=Sn&&!!S.clearcoatNormalMap,fe=Sn&&!!S.clearcoatRoughnessMap,ne=R&&!!S.iridescenceMap,re=R&&!!S.iridescenceThicknessMap,he=M&&!!S.sheenColorMap,Re=M&&!!S.sheenRoughnessMap,ve=!!S.specularMap,pe=!!S.specularColorMap,De=!!S.specularIntensityMap,Fe=H&&!!S.transmissionMap,Ve=H&&!!S.thicknessMap,N=!!S.gradientMap,de=!!S.alphaMap,ie=S.alphaTest>0,me=!!S.alphaHash,Ee=!!S.extensions;let se=Pi;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(se=t.toneMapping);const Ce={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:Be,defines:S.defines,customVertexShaderID:W,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Ie,batchingColor:Ie&&I._colorsTexture!==null,instancing:ze,instancingColor:ze&&I.instanceColor!==null,instancingMorph:ze&&I.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:st,matcap:qe,envMap:ot,envMapMode:ot&&k.mapping,envMapCubeUVHeight:Y,aoMap:We,lightMap:ge,bumpMap:et,normalMap:ut,displacementMap:mt,emissiveMap:Ot,normalMapObjectSpace:ut&&S.normalMapType===NA,normalMapTangentSpace:ut&&S.normalMapType===jh,packedNormalMap:ut&&S.normalMapType===jh&&d3(S.normalMap.format),metalnessMap:Et,roughnessMap:gt,anisotropy:O,anisotropyMap:q,clearcoat:Sn,clearcoatMap:Q,clearcoatNormalMap:ue,clearcoatRoughnessMap:fe,dispersion:at,iridescence:R,iridescenceMap:ne,iridescenceThicknessMap:re,sheen:M,sheenColorMap:he,sheenRoughnessMap:Re,specularMap:ve,specularColorMap:pe,specularIntensityMap:De,transmission:H,transmissionMap:Fe,thicknessMap:Ve,gradientMap:N,opaque:S.transparent===!1&&S.blending===xo&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:ie,alphaHash:me,combine:S.combine,mapUv:st&&v(S.map.channel),aoMapUv:We&&v(S.aoMap.channel),lightMapUv:ge&&v(S.lightMap.channel),bumpMapUv:et&&v(S.bumpMap.channel),normalMapUv:ut&&v(S.normalMap.channel),displacementMapUv:mt&&v(S.displacementMap.channel),emissiveMapUv:Ot&&v(S.emissiveMap.channel),metalnessMapUv:Et&&v(S.metalnessMap.channel),roughnessMapUv:gt&&v(S.roughnessMap.channel),anisotropyMapUv:q&&v(S.anisotropyMap.channel),clearcoatMapUv:Q&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(S.sheenRoughnessMap.channel),specularMapUv:ve&&v(S.specularMap.channel),specularColorMapUv:pe&&v(S.specularColorMap.channel),specularIntensityMapUv:De&&v(S.specularIntensityMap.channel),transmissionMapUv:Fe&&v(S.transmissionMap.channel),thicknessMapUv:Ve&&v(S.thicknessMap.channel),alphaMapUv:de&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ut||O),vertexNormals:!!V.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(st||de),fog:!!ee,useFog:S.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||V.attributes.normal===void 0&&ut===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Oe,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ue,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:st&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:Ot&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wi,flipSided:S.side===Pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function g(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)C.push(L),C.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(d(C,S),x(C,S),C.push(t.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function d(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function x(S,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function y(S){const C=m[S.type];let L;if(C){const D=wi[C];L=Db.clone(D.uniforms)}else L=S.uniforms;return L}function _(S,C){let L=u.get(C);return L!==void 0?++L.usedTimes:(L=new a3(t,C,S,r),c.push(L),u.set(C,L)),L}function w(S){if(--S.usedTimes===0){const C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function T(S){a.remove(S)}function b(){a.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:y,acquireProgram:_,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:b}}function h3(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function p3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function xv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function yv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,v,E,g,d){let x=t[e];return x===void 0?(x={id:h.id,object:h,geometry:m,material:v,materialVariant:o(h),groupOrder:E,renderOrder:h.renderOrder,z:g,group:d},t[e]=x):(x.id=h.id,x.object=h,x.geometry=m,x.material=v,x.materialVariant=o(h),x.groupOrder=E,x.renderOrder=h.renderOrder,x.z=g,x.group=d),e++,x}function l(h,m,v,E,g,d){const x=a(h,m,v,E,g,d);v.transmission>0?i.push(x):v.transparent===!0?r.push(x):n.push(x)}function c(h,m,v,E,g,d){const x=a(h,m,v,E,g,d);v.transmission>0?i.unshift(x):v.transparent===!0?r.unshift(x):n.unshift(x)}function u(h,m,v){n.length>1&&n.sort(h||p3),i.length>1&&i.sort(m||xv),r.length>1&&r.sort(m||xv),v&&(n.reverse(),i.reverse(),r.reverse())}function f(){for(let h=e,m=t.length;h<m;h++){const v=t[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function m3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new yv,t.set(i,[o])):r>=s.length?(o=new yv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function g3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Qe};break;case"SpotLight":n={position:new F,direction:new F,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function v3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let x3=0;function y3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _3(t){const e=new g3,n=v3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new wt,o=new wt;function a(c){let u=0,f=0,h=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,v=0,E=0,g=0,d=0,x=0,y=0,_=0,w=0,T=0,b=0;c.sort(y3);for(let C=0,L=c.length;C<L;C++){const D=c[C],I=D.color,K=D.intensity,ee=D.distance;let V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===As?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=I.r*K,f+=I.g*K,h+=I.b*K;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],K);b++}else if(D.isDirectionalLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,k=n.get(D);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=D.shadow.matrix,x++}i.directional[m]=J,m++}else if(D.isSpotLight){const J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(I).multiplyScalar(K),J.distance=ee,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[E]=J;const G=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,G.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[E]=G.matrix,D.castShadow){const k=n.get(D);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=V,_++}E++}else if(D.isRectAreaLight){const J=e.get(D);J.color.copy(I).multiplyScalar(K),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=J,g++}else if(D.isPointLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){const G=D.shadow,k=n.get(D);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,i.pointShadow[v]=k,i.pointShadowMap[v]=V,i.pointShadowMatrix[v]=D.shadow.matrix,y++}i.point[v]=J,v++}else if(D.isHemisphereLight){const J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(K),J.groundColor.copy(D.groundColor).multiplyScalar(K),i.hemi[d]=J,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const S=i.hash;(S.directionalLength!==m||S.pointLength!==v||S.spotLength!==E||S.rectAreaLength!==g||S.hemiLength!==d||S.numDirectionalShadows!==x||S.numPointShadows!==y||S.numSpotShadows!==_||S.numSpotMaps!==w||S.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=g,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,S.directionalLength=m,S.pointLength=v,S.spotLength=E,S.rectAreaLength=g,S.hemiLength=d,S.numDirectionalShadows=x,S.numPointShadows=y,S.numSpotShadows=_,S.numSpotMaps=w,S.numLightProbes=b,i.version=x3++)}function l(c,u){let f=0,h=0,m=0,v=0,E=0;const g=u.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const y=c[d];if(y.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),f++}else if(y.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const _=i.rectArea[v];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const _=i.hemi[E];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),E++}}}return{setup:a,setupView:l,state:i}}function _v(t){const e=new _3(t),n=[],i=[],r=[];function s(h){f.camera=h,n.length=0,i.length=0,r.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function S3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new _v(t),e.set(r,[a])):s>=o.length?(a=new _v(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const E3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,w3=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],T3=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Sv=new wt,oa=new F,Kd=new F;function A3(t,e,n){let i=new gm;const r=new Ne,s=new Ne,o=new At,a=new Ob,l=new kb,c={},u=n.maxTextureSize,f={[Br]:Pn,[Pn]:Br,[Wi]:Wi},h=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:E3,fragmentShader:M3}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ln;v.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new wn(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let d=this.type;this.render=function(T,b,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===dA&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_c);const C=t.getRenderTarget(),L=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Yi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const K=d!==this.type;K&&b.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(V=>V.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,V=T.length;ee<V;ee++){const J=T[ee],G=J.shadow;if(G===void 0){ke("WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const k=G.getFrameExtents();r.multiply(k),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,G.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Y,G.map===null||K===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===da){if(J.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Li(r.x,r.y,{format:As,type:tr,minFilter:cn,magFilter:cn,generateMipmaps:!1}),G.map.texture.name=J.name+".shadowMap",G.map.depthTexture=new Do(r.x,r.y,Ai),G.map.depthTexture.name=J.name+".shadowMapDepth",G.map.depthTexture.format=nr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Jt,G.map.depthTexture.magFilter=Jt}else J.isPointLight?(G.map=new tS(r.x),G.map.depthTexture=new mb(r.x,Di)):(G.map=new Li(r.x,r.y),G.map.depthTexture=new Do(r.x,r.y,Di)),G.map.depthTexture.name=J.name+".shadowMap",G.map.depthTexture.format=nr,this.type===_c?(G.map.depthTexture.compareFunction=Y?hm:fm,G.map.depthTexture.minFilter=cn,G.map.depthTexture.magFilter=cn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Jt,G.map.depthTexture.magFilter=Jt);G.camera.updateProjectionMatrix()}const te=G.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<te;Z++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,Z),t.clear();else{Z===0&&(t.setRenderTarget(G.map),t.clear());const oe=G.getViewport(Z);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),I.viewport(o)}if(J.isPointLight){const oe=G.camera,Ue=G.matrix,Xe=J.distance||oe.far;Xe!==oe.far&&(oe.far=Xe,oe.updateProjectionMatrix()),oa.setFromMatrixPosition(J.matrixWorld),oe.position.copy(oa),Kd.copy(oe.position),Kd.add(w3[Z]),oe.up.copy(T3[Z]),oe.lookAt(Kd),oe.updateMatrixWorld(),Ue.makeTranslation(-oa.x,-oa.y,-oa.z),Sv.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Sv,oe.coordinateSystem,oe.reversedDepth)}else G.updateMatrices(J);i=G.getFrustum(),_(b,S,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===da&&x(G,S),G.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(C,L,D)};function x(T,b){const S=e.update(E);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Li(r.x,r.y,{format:As,type:tr})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,S,h,E,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,S,m,E,null)}function y(T,b,S,C){let L=null;const D=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)L=D;else if(L=S.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const I=L.uuid,K=b.uuid;let ee=c[I];ee===void 0&&(ee={},c[I]=ee);let V=ee[K];V===void 0&&(V=L.clone(),ee[K]=V,b.addEventListener("dispose",w)),L=V}if(L.visible=b.visible,L.wireframe=b.wireframe,C===da?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:f[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,L.map=b.map,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const I=t.properties.get(L);I.light=S}return L}function _(T,b,S,C,L){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===da)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const K=e.update(T),ee=T.material;if(Array.isArray(ee)){const V=K.groups;for(let J=0,G=V.length;J<G;J++){const k=V[J],Y=ee[k.materialIndex];if(Y&&Y.visible){const te=y(T,Y,C,L);T.onBeforeShadow(t,T,b,S,K,te,k),t.renderBufferDirect(S,null,K,te,T,k),T.onAfterShadow(t,T,b,S,K,te,k)}}}else if(ee.visible){const V=y(T,ee,C,L);T.onBeforeShadow(t,T,b,S,K,V,null),t.renderBufferDirect(S,null,K,V,T,null),T.onAfterShadow(t,T,b,S,K,V,null)}}const I=T.children;for(let K=0,ee=I.length;K<ee;K++)_(I[K],b,S,C,L)}function w(T){T.target.removeEventListener("dispose",w);for(const S in c){const C=c[S],L=T.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}function b3(t,e){function n(){let N=!1;const de=new At;let ie=null;const me=new At(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!N&&(t.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){N=Ee},setClear:function(Ee,se,Ce,Ae,Rt){Rt===!0&&(Ee*=Ae,se*=Ae,Ce*=Ae),de.set(Ee,se,Ce,Ae),me.equals(de)===!1&&(t.clearColor(Ee,se,Ce,Ae),me.copy(de))},reset:function(){N=!1,ie=null,me.set(-1,0,0,0)}}}function i(){let N=!1,de=!1,ie=null,me=null,Ee=null;return{setReversed:function(se){if(de!==se){const Ce=e.get("EXT_clip_control");se?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),de=se;const Ae=Ee;Ee=null,this.setClear(Ae)}},getReversed:function(){return de},setTest:function(se){se?le(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(se){ie!==se&&!N&&(t.depthMask(se),ie=se)},setFunc:function(se){if(de&&(se=WA[se]),me!==se){switch(se){case oh:t.depthFunc(t.NEVER);break;case ah:t.depthFunc(t.ALWAYS);break;case lh:t.depthFunc(t.LESS);break;case Po:t.depthFunc(t.LEQUAL);break;case ch:t.depthFunc(t.EQUAL);break;case uh:t.depthFunc(t.GEQUAL);break;case dh:t.depthFunc(t.GREATER);break;case fh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=se}},setLocked:function(se){N=se},setClear:function(se){Ee!==se&&(Ee=se,de&&(se=1-se),t.clearDepth(se))},reset:function(){N=!1,ie=null,me=null,Ee=null,de=!1}}}function r(){let N=!1,de=null,ie=null,me=null,Ee=null,se=null,Ce=null,Ae=null,Rt=null;return{setTest:function(vt){N||(vt?le(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(vt){de!==vt&&!N&&(t.stencilMask(vt),de=vt)},setFunc:function(vt,gi,vi){(ie!==vt||me!==gi||Ee!==vi)&&(t.stencilFunc(vt,gi,vi),ie=vt,me=gi,Ee=vi)},setOp:function(vt,gi,vi){(se!==vt||Ce!==gi||Ae!==vi)&&(t.stencilOp(vt,gi,vi),se=vt,Ce=gi,Ae=vi)},setLocked:function(vt){N=vt},setClear:function(vt){Rt!==vt&&(t.clearStencil(vt),Rt=vt)},reset:function(){N=!1,de=null,ie=null,me=null,Ee=null,se=null,Ce=null,Ae=null,Rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},m=new WeakMap,v=[],E=null,g=!1,d=null,x=null,y=null,_=null,w=null,T=null,b=null,S=new Qe(0,0,0),C=0,L=!1,D=null,I=null,K=null,ee=null,V=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,k=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=k>=1):Y.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=k>=2);let te=null,Z={};const oe=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),Xe=new At().fromArray(oe),Be=new At().fromArray(Ue);function W(N,de,ie,me){const Ee=new Uint8Array(4),se=t.createTexture();t.bindTexture(N,se),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<ie;Ce++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(de+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return se}const ae={};ae[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Po),et(!1),ut(v0),le(t.CULL_FACE),We(Yi);function le(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function Oe(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function ze(N,de){return h[N]!==de?(t.bindFramebuffer(N,de),h[N]=de,N===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=de),N===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Ie(N,de){let ie=v,me=!1;if(N){ie=m.get(de),ie===void 0&&(ie=[],m.set(de,ie));const Ee=N.textures;if(ie.length!==Ee.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Ce=Ee.length;se<Ce;se++)ie[se]=t.COLOR_ATTACHMENT0+se;ie.length=Ee.length,me=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,me=!0);me&&t.drawBuffers(ie)}function st(N){return E!==N?(t.useProgram(N),E=N,!0):!1}const qe={[os]:t.FUNC_ADD,[hA]:t.FUNC_SUBTRACT,[pA]:t.FUNC_REVERSE_SUBTRACT};qe[mA]=t.MIN,qe[gA]=t.MAX;const ot={[vA]:t.ZERO,[xA]:t.ONE,[yA]:t.SRC_COLOR,[rh]:t.SRC_ALPHA,[TA]:t.SRC_ALPHA_SATURATE,[MA]:t.DST_COLOR,[SA]:t.DST_ALPHA,[_A]:t.ONE_MINUS_SRC_COLOR,[sh]:t.ONE_MINUS_SRC_ALPHA,[wA]:t.ONE_MINUS_DST_COLOR,[EA]:t.ONE_MINUS_DST_ALPHA,[AA]:t.CONSTANT_COLOR,[bA]:t.ONE_MINUS_CONSTANT_COLOR,[CA]:t.CONSTANT_ALPHA,[RA]:t.ONE_MINUS_CONSTANT_ALPHA};function We(N,de,ie,me,Ee,se,Ce,Ae,Rt,vt){if(N===Yi){g===!0&&(Oe(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),N!==fA){if(N!==d||vt!==L){if((x!==os||w!==os)&&(t.blendEquation(t.FUNC_ADD),x=os,w=os),vt)switch(N){case xo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ih:t.blendFunc(t.ONE,t.ONE);break;case x0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case y0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",N);break}else switch(N){case xo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ih:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case x0:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case y0:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",N);break}y=null,_=null,T=null,b=null,S.set(0,0,0),C=0,d=N,L=vt}return}Ee=Ee||de,se=se||ie,Ce=Ce||me,(de!==x||Ee!==w)&&(t.blendEquationSeparate(qe[de],qe[Ee]),x=de,w=Ee),(ie!==y||me!==_||se!==T||Ce!==b)&&(t.blendFuncSeparate(ot[ie],ot[me],ot[se],ot[Ce]),y=ie,_=me,T=se,b=Ce),(Ae.equals(S)===!1||Rt!==C)&&(t.blendColor(Ae.r,Ae.g,Ae.b,Rt),S.copy(Ae),C=Rt),d=N,L=!1}function ge(N,de){N.side===Wi?Oe(t.CULL_FACE):le(t.CULL_FACE);let ie=N.side===Pn;de&&(ie=!ie),et(ie),N.blending===xo&&N.transparent===!1?We(Yi):We(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const me=N.stencilWrite;a.setTest(me),me&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function et(N){D!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),D=N)}function ut(N){N!==cA?(le(t.CULL_FACE),N!==I&&(N===v0?t.cullFace(t.BACK):N===uA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),I=N}function mt(N){N!==K&&(G&&t.lineWidth(N),K=N)}function Ot(N,de,ie){N?(le(t.POLYGON_OFFSET_FILL),(ee!==de||V!==ie)&&(ee=de,V=ie,o.getReversed()&&(de=-de),t.polygonOffset(de,ie))):Oe(t.POLYGON_OFFSET_FILL)}function Et(N){N?le(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function gt(N){N===void 0&&(N=t.TEXTURE0+J-1),te!==N&&(t.activeTexture(N),te=N)}function O(N,de,ie){ie===void 0&&(te===null?ie=t.TEXTURE0+J-1:ie=te);let me=Z[ie];me===void 0&&(me={type:void 0,texture:void 0},Z[ie]=me),(me.type!==N||me.texture!==de)&&(te!==ie&&(t.activeTexture(ie),te=ie),t.bindTexture(N,de||ae[N]),me.type=N,me.texture=de)}function Sn(){const N=Z[te];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function at(){try{t.compressedTexImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function M(){try{t.texSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function H(){try{t.texSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function ue(){try{t.texStorage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function fe(){try{t.texStorage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function ne(){try{t.texImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function re(){try{t.texImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function he(N){return f[N]!==void 0?f[N]:t.getParameter(N)}function Re(N,de){f[N]!==de&&(t.pixelStorei(N,de),f[N]=de)}function ve(N){Xe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Xe.copy(N))}function pe(N){Be.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Be.copy(N))}function De(N,de){let ie=c.get(de);ie===void 0&&(ie=new WeakMap,c.set(de,ie));let me=ie.get(N);me===void 0&&(me=t.getUniformBlockIndex(de,N.name),ie.set(N,me))}function Fe(N,de){const me=c.get(de).get(N);l.get(de)!==me&&(t.uniformBlockBinding(de,me,N.__bindingPointIndex),l.set(de,me))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},te=null,Z={},h={},m=new WeakMap,v=[],E=null,g=!1,d=null,x=null,y=null,_=null,w=null,T=null,b=null,S=new Qe(0,0,0),C=0,L=!1,D=null,I=null,K=null,ee=null,V=null,Xe.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Oe,bindFramebuffer:ze,drawBuffers:Ie,useProgram:st,setBlending:We,setMaterial:ge,setFlipSided:et,setCullFace:ut,setLineWidth:mt,setPolygonOffset:Ot,setScissorTest:Et,activeTexture:gt,bindTexture:O,unbindTexture:Sn,compressedTexImage2D:at,compressedTexImage3D:R,texImage2D:ne,texImage3D:re,pixelStorei:Re,getParameter:he,updateUBOMapping:De,uniformBlockBinding:Fe,texStorage2D:ue,texStorage3D:fe,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:ve,viewport:pe,reset:Ve}}function C3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap,f=new Set;let h;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,M){return v?new OffscreenCanvas(R,M):ru("canvas")}function g(R,M,H){let q=1;const Q=at(R);if((Q.width>H||Q.height>H)&&(q=H/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor(q*Q.width),fe=Math.floor(q*Q.height);h===void 0&&(h=E(ue,fe));const ne=M?E(ue,fe):h;return ne.width=ue,ne.height=fe,ne.getContext("2d").drawImage(R,0,0,ue,fe),ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+fe+")."),ne}else return"data"in R&&ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function d(R){return R.generateMipmaps}function x(R){t.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,M,H,q,Q,ue=!1){if(R!==null){if(t[R]!==void 0)return t[R];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=M;if(M===t.RED&&(H===t.FLOAT&&(ne=t.R32F),H===t.HALF_FLOAT&&(ne=t.R16F),H===t.UNSIGNED_BYTE&&(ne=t.R8),H===t.UNSIGNED_SHORT&&fe&&(ne=fe.R16_EXT),H===t.SHORT&&fe&&(ne=fe.R16_SNORM_EXT)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.R8UI),H===t.UNSIGNED_SHORT&&(ne=t.R16UI),H===t.UNSIGNED_INT&&(ne=t.R32UI),H===t.BYTE&&(ne=t.R8I),H===t.SHORT&&(ne=t.R16I),H===t.INT&&(ne=t.R32I)),M===t.RG&&(H===t.FLOAT&&(ne=t.RG32F),H===t.HALF_FLOAT&&(ne=t.RG16F),H===t.UNSIGNED_BYTE&&(ne=t.RG8),H===t.UNSIGNED_SHORT&&fe&&(ne=fe.RG16_EXT),H===t.SHORT&&fe&&(ne=fe.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RG8UI),H===t.UNSIGNED_SHORT&&(ne=t.RG16UI),H===t.UNSIGNED_INT&&(ne=t.RG32UI),H===t.BYTE&&(ne=t.RG8I),H===t.SHORT&&(ne=t.RG16I),H===t.INT&&(ne=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RGB8UI),H===t.UNSIGNED_SHORT&&(ne=t.RGB16UI),H===t.UNSIGNED_INT&&(ne=t.RGB32UI),H===t.BYTE&&(ne=t.RGB8I),H===t.SHORT&&(ne=t.RGB16I),H===t.INT&&(ne=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(ne=t.RGBA16UI),H===t.UNSIGNED_INT&&(ne=t.RGBA32UI),H===t.BYTE&&(ne=t.RGBA8I),H===t.SHORT&&(ne=t.RGBA16I),H===t.INT&&(ne=t.RGBA32I)),M===t.RGB&&(H===t.UNSIGNED_SHORT&&fe&&(ne=fe.RGB16_EXT),H===t.SHORT&&fe&&(ne=fe.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(ne=t.R11F_G11F_B10F)),M===t.RGBA){const re=ue?iu:Je.getTransfer(Q);H===t.FLOAT&&(ne=t.RGBA32F),H===t.HALF_FLOAT&&(ne=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ne=re===lt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&fe&&(ne=fe.RGBA16_EXT),H===t.SHORT&&fe&&(ne=fe.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(R,M){let H;return R?M===null||M===Di||M===ja?H=t.DEPTH24_STENCIL8:M===Ai?H=t.DEPTH32F_STENCIL8:M===Wa&&(H=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===ja?H=t.DEPTH_COMPONENT24:M===Ai?H=t.DEPTH_COMPONENT32F:M===Wa&&(H=t.DEPTH_COMPONENT16),H}function T(R,M){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==cn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),C(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&f.delete(M)}function S(R){const M=R.target;M.removeEventListener("dispose",S),D(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const H=R.source,q=m.get(H);if(q){const Q=q[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(R),Object.keys(q).length===0&&m.delete(H)}i.remove(R)}function L(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const H=R.source,q=m.get(H);delete q[M.__cacheKey],o.memory.textures--}function D(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Q=0;Q<M.__webglFramebuffer[q].length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[q][Q]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=R.textures;for(let q=0,Q=H.length;q<Q;q++){const ue=i.get(H[q]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(H[q])}i.remove(R)}let I=0;function K(){I=0}function ee(){return I}function V(R){I=R}function J(){const R=I;return R>=r.maxTextures&&ke("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function G(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function k(R,M){const H=i.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const q=R.image;if(q===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(H,R,M);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function Y(R,M){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){Oe(H,R,M);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function te(R,M){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){Oe(H,R,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function Z(R,M){const H=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){ze(H,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const oe={[hh]:t.REPEAT,[qi]:t.CLAMP_TO_EDGE,[ph]:t.MIRRORED_REPEAT},Ue={[Jt]:t.NEAREST,[DA]:t.NEAREST_MIPMAP_NEAREST,[bl]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[gd]:t.LINEAR_MIPMAP_NEAREST,[fs]:t.LINEAR_MIPMAP_LINEAR},Xe={[FA]:t.NEVER,[zA]:t.ALWAYS,[UA]:t.LESS,[fm]:t.LEQUAL,[OA]:t.EQUAL,[hm]:t.GEQUAL,[kA]:t.GREATER,[BA]:t.NOTEQUAL};function Be(R,M){if(M.type===Ai&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===cn||M.magFilter===gd||M.magFilter===bl||M.magFilter===fs||M.minFilter===cn||M.minFilter===gd||M.minFilter===bl||M.minFilter===fs)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,oe[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,oe[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,oe[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Ue[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Ue[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Jt||M.minFilter!==bl&&M.minFilter!==fs||M.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function W(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const q=M.source;let Q=m.get(q);Q===void 0&&(Q={},m.set(q,Q));const ue=G(M);if(ue!==R.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[ue].usedTimes++;const fe=Q[R.__cacheKey];fe!==void 0&&(Q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&L(M)),R.__cacheKey=ue,R.__webglTexture=Q[ue].texture}return H}function ae(R,M,H){return Math.floor(Math.floor(R/H)/M)}function le(R,M,H,q){const ue=R.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,H,q,M.data);else{ue.sort((Re,ve)=>Re.start-ve.start);let fe=0;for(let Re=1;Re<ue.length;Re++){const ve=ue[fe],pe=ue[Re],De=ve.start+ve.count,Fe=ae(pe.start,M.width,4),Ve=ae(ve.start,M.width,4);pe.start<=De+1&&Fe===Ve&&ae(pe.start+pe.count-1,M.width,4)===Fe?ve.count=Math.max(ve.count,pe.start+pe.count-ve.start):(++fe,ue[fe]=pe)}ue.length=fe+1;const ne=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Re=0,ve=ue.length;Re<ve;Re++){const pe=ue[Re],De=Math.floor(pe.start/4),Fe=Math.ceil(pe.count/4),Ve=De%M.width,N=Math.floor(De/M.width),de=Fe,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Ve,N,de,ie,H,q,M.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ne),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function Oe(R,M,H){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);const Q=W(R,M),ue=M.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+H);const fe=i.get(ue);if(ue.version!==fe.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ie=Je.getPrimaries(Je.workingColorSpace),me=M.colorSpace===Mr?null:Je.getPrimaries(M.colorSpace),Ee=M.colorSpace===Mr||ie===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let re=g(M.image,!1,r.maxTextureSize);re=Sn(M,re);const he=s.convert(M.format,M.colorSpace),Re=s.convert(M.type);let ve=_(M.internalFormat,he,Re,M.normalized,M.colorSpace,M.isVideoTexture);Be(q,M);let pe;const De=M.mipmaps,Fe=M.isVideoTexture!==!0,Ve=fe.__version===void 0||Q===!0,N=ue.dataReady,de=T(M,re);if(M.isDepthTexture)ve=w(M.format===hs,M.type),Ve&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,ve,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,ve,re.width,re.height,0,he,Re,null));else if(M.isDataTexture)if(De.length>0){Fe&&Ve&&n.texStorage2D(t.TEXTURE_2D,de,ve,De[0].width,De[0].height);for(let ie=0,me=De.length;ie<me;ie++)pe=De[ie],Fe?N&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,he,Re,pe.data):n.texImage2D(t.TEXTURE_2D,ie,ve,pe.width,pe.height,0,he,Re,pe.data);M.generateMipmaps=!1}else Fe?(Ve&&n.texStorage2D(t.TEXTURE_2D,de,ve,re.width,re.height),N&&le(M,re,he,Re)):n.texImage2D(t.TEXTURE_2D,0,ve,re.width,re.height,0,he,Re,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ve,De[0].width,De[0].height,re.depth);for(let ie=0,me=De.length;ie<me;ie++)if(pe=De[ie],M.format!==di)if(he!==null)if(Fe){if(N)if(M.layerUpdates.size>0){const Ee=Z0(pe.width,pe.height,M.format,M.type);for(const se of M.layerUpdates){const Ce=pe.data.subarray(se*Ee/pe.data.BYTES_PER_ELEMENT,(se+1)*Ee/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,se,pe.width,pe.height,1,he,Ce)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,re.depth,he,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,ve,pe.width,pe.height,re.depth,0,pe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,re.depth,he,Re,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,ve,pe.width,pe.height,re.depth,0,he,Re,pe.data)}else{Fe&&Ve&&n.texStorage2D(t.TEXTURE_2D,de,ve,De[0].width,De[0].height);for(let ie=0,me=De.length;ie<me;ie++)pe=De[ie],M.format!==di?he!==null?Fe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,he,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,ve,pe.width,pe.height,0,pe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?N&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,he,Re,pe.data):n.texImage2D(t.TEXTURE_2D,ie,ve,pe.width,pe.height,0,he,Re,pe.data)}else if(M.isDataArrayTexture)if(Fe){if(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ve,re.width,re.height,re.depth),N)if(M.layerUpdates.size>0){const ie=Z0(re.width,re.height,M.format,M.type);for(const me of M.layerUpdates){const Ee=re.data.subarray(me*ie/re.data.BYTES_PER_ELEMENT,(me+1)*ie/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,re.width,re.height,1,he,Re,Ee)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,Re,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,re.width,re.height,re.depth,0,he,Re,re.data);else if(M.isData3DTexture)Fe?(Ve&&n.texStorage3D(t.TEXTURE_3D,de,ve,re.width,re.height,re.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,Re,re.data)):n.texImage3D(t.TEXTURE_3D,0,ve,re.width,re.height,re.depth,0,he,Re,re.data);else if(M.isFramebufferTexture){if(Ve)if(Fe)n.texStorage2D(t.TEXTURE_2D,de,ve,re.width,re.height);else{let ie=re.width,me=re.height;for(let Ee=0;Ee<de;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,ve,ie,me,0,he,Re,null),ie>>=1,me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),re.parentNode!==ie){ie.appendChild(re),f.add(M),ie.onpaint=me=>{const Ee=me.changedElements;for(const se of f)Ee.includes(se.image)&&(se.needsUpdate=!0)},ie.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,re);else{const Ee=t.RGBA,se=t.RGBA,Ce=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ee,se,Ce,re)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Fe&&Ve){const ie=at(De[0]);n.texStorage2D(t.TEXTURE_2D,de,ve,ie.width,ie.height)}for(let ie=0,me=De.length;ie<me;ie++)pe=De[ie],Fe?N&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he,Re,pe):n.texImage2D(t.TEXTURE_2D,ie,ve,he,Re,pe);M.generateMipmaps=!1}else if(Fe){if(Ve){const ie=at(re);n.texStorage2D(t.TEXTURE_2D,de,ve,ie.width,ie.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Re,re)}else n.texImage2D(t.TEXTURE_2D,0,ve,he,Re,re);d(M)&&x(q),fe.__version=ue.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ze(R,M,H){if(M.image.length!==6)return;const q=W(R,M),Q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const ue=i.get(Q);if(Q.version!==ue.__version||q===!0){n.activeTexture(t.TEXTURE0+H);const fe=Je.getPrimaries(Je.workingColorSpace),ne=M.colorSpace===Mr?null:Je.getPrimaries(M.colorSpace),re=M.colorSpace===Mr||fe===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const he=M.isCompressedTexture||M.image[0].isCompressedTexture,Re=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!he&&!Re?ve[se]=g(M.image[se],!0,r.maxCubemapSize):ve[se]=Re?M.image[se].image:M.image[se],ve[se]=Sn(M,ve[se]);const pe=ve[0],De=s.convert(M.format,M.colorSpace),Fe=s.convert(M.type),Ve=_(M.internalFormat,De,Fe,M.normalized,M.colorSpace),N=M.isVideoTexture!==!0,de=ue.__version===void 0||q===!0,ie=Q.dataReady;let me=T(M,pe);Be(t.TEXTURE_CUBE_MAP,M);let Ee;if(he){N&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,pe.width,pe.height);for(let se=0;se<6;se++){Ee=ve[se].mipmaps;for(let Ce=0;Ce<Ee.length;Ce++){const Ae=Ee[Ce];M.format!==di?De!==null?N?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,0,0,Ae.width,Ae.height,De,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,Ve,Ae.width,Ae.height,0,Ae.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,0,0,Ae.width,Ae.height,De,Fe,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,Ve,Ae.width,Ae.height,0,De,Fe,Ae.data)}}}else{if(Ee=M.mipmaps,N&&de){Ee.length>0&&me++;const se=at(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,se.width,se.height)}for(let se=0;se<6;se++)if(Re){N?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,De,Fe,ve[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,ve[se].width,ve[se].height,0,De,Fe,ve[se].data);for(let Ce=0;Ce<Ee.length;Ce++){const Rt=Ee[Ce].image[se].image;N?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,0,0,Rt.width,Rt.height,De,Fe,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,Ve,Rt.width,Rt.height,0,De,Fe,Rt.data)}}else{N?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,Fe,ve[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,De,Fe,ve[se]);for(let Ce=0;Ce<Ee.length;Ce++){const Ae=Ee[Ce];N?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,0,0,De,Fe,Ae.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,Ve,De,Fe,Ae.image[se])}}}d(M)&&x(t.TEXTURE_CUBE_MAP),ue.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ie(R,M,H,q,Q,ue){const fe=s.convert(H.format,H.colorSpace),ne=s.convert(H.type),re=_(H.internalFormat,fe,ne,H.normalized,H.colorSpace),he=i.get(M),Re=i.get(H);if(Re.__renderTarget=M,!he.__hasExternalTextures){const ve=Math.max(1,M.width>>ue),pe=Math.max(1,M.height>>ue);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ue,re,ve,pe,M.depth,0,fe,ne,null):n.texImage2D(Q,ue,re,ve,pe,0,fe,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),gt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Q,Re.__webglTexture,0,Et(M)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Q,Re.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function st(R,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const q=M.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ue=w(M.stencilBuffer,Q),fe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;gt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Et(M),ue,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Et(M),ue,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ue,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,R)}else{const q=M.textures;for(let Q=0;Q<q.length;Q++){const ue=q[Q],fe=s.convert(ue.format,ue.colorSpace),ne=s.convert(ue.type),re=_(ue.internalFormat,fe,ne,ue.normalized,ue.colorSpace);gt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Et(M),re,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Et(M),re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(R,M,H){const q=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",b)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Be(t.TEXTURE_CUBE_MAP,M.depthTexture);const he=s.convert(M.depthTexture.format),Re=s.convert(M.depthTexture.type);let ve;M.depthTexture.format===nr?ve=t.DEPTH_COMPONENT24:M.depthTexture.format===hs&&(ve=t.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ve,M.width,M.height,0,he,Re,null)}}else k(M.depthTexture,0);const ue=Q.__webglTexture,fe=Et(M),ne=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,re=M.depthTexture.format===hs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===nr)gt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ne,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,re,ne,ue,0);else if(M.depthTexture.format===hs)gt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ne,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,re,ne,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(R){const M=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)qe(M.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?qe(M.__webglFramebuffer[0],R,0):qe(M.__webglFramebuffer,R,0)}else if(H){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),st(M.__webglDepthbuffer[q],R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ue)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),st(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(R,M,H){const q=i.get(R);M!==void 0&&Ie(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&ot(R)}function ge(R){const M=R.texture,H=i.get(R),q=i.get(M);R.addEventListener("dispose",S);const Q=R.textures,ue=R.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),ue){H.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ne]=[];for(let re=0;re<M.mipmaps.length;re++)H.__webglFramebuffer[ne][re]=t.createFramebuffer()}else H.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)H.__webglFramebuffer[ne]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(fe)for(let ne=0,re=Q.length;ne<re;ne++){const he=i.get(Q[ne]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&gt(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ne=0;ne<Q.length;ne++){const re=Q[ne];H.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ne]);const he=s.convert(re.format,re.colorSpace),Re=s.convert(re.type),ve=_(re.internalFormat,he,Re,re.normalized,re.colorSpace,R.isXRRenderTarget===!0),pe=Et(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,ve,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,H.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),st(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Be(t.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)Ie(H.__webglFramebuffer[ne][re],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else Ie(H.__webglFramebuffer[ne],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(M)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ne=0,re=Q.length;ne<re;ne++){const he=Q[ne],Re=i.get(he);let ve=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Re.__webglTexture),Be(ve,he),Ie(H.__webglFramebuffer,R,he,t.COLOR_ATTACHMENT0+ne,ve,0),d(he)&&x(ve)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,q.__webglTexture),Be(ne,M),M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)Ie(H.__webglFramebuffer[re],R,M,t.COLOR_ATTACHMENT0,ne,re);else Ie(H.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ne,0);d(M)&&x(ne),n.unbindTexture()}R.depthBuffer&&ot(R)}function et(R){const M=R.textures;for(let H=0,q=M.length;H<q;H++){const Q=M[H];if(d(Q)){const ue=y(R),fe=i.get(Q).__webglTexture;n.bindTexture(ue,fe),x(ue),n.unbindTexture()}}}const ut=[],mt=[];function Ot(R){if(R.samples>0){if(gt(R)===!1){const M=R.textures,H=R.width,q=R.height;let Q=t.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),ne=M.length>1;if(ne)for(let he=0;he<M.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const re=R.texture.mipmaps;re&&re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<M.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const Re=i.get(M[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,H,q,0,0,H,q,Q,t.NEAREST),l===!0&&(ut.length=0,mt.length=0,ut.push(t.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ut.push(ue),mt.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,mt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<M.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const Re=i.get(M[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Et(R){return Math.min(r.maxSamples,R.samples)}function gt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Sn(R,M){const H=R.colorSpace,q=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==nu&&H!==Mr&&(Je.getTransfer(H)===lt?(q!==di||Q!==Bn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",H)),M}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=K,this.getTextureUnits=ee,this.setTextureUnits=V,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=Z,this.rebindTextures=We,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function R3(t,e){function n(i,r=Mr){let s;const o=Je.getTransfer(r);if(i===Bn)return t.UNSIGNED_BYTE;if(i===am)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===D_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===I_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===P_)return t.BYTE;if(i===L_)return t.SHORT;if(i===Wa)return t.UNSIGNED_SHORT;if(i===om)return t.INT;if(i===Di)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===tr)return t.HALF_FLOAT;if(i===N_)return t.ALPHA;if(i===F_)return t.RGB;if(i===di)return t.RGBA;if(i===nr)return t.DEPTH_COMPONENT;if(i===hs)return t.DEPTH_STENCIL;if(i===U_)return t.RED;if(i===cm)return t.RED_INTEGER;if(i===As)return t.RG;if(i===um)return t.RG_INTEGER;if(i===dm)return t.RGBA_INTEGER;if(i===Sc||i===Ec||i===Mc||i===wc)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mh||i===gh||i===vh||i===xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yh||i===_h||i===Sh||i===Eh||i===Mh||i===eu||i===wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yh||i===_h)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Eh)return s.COMPRESSED_R11_EAC;if(i===Mh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===eu)return s.COMPRESSED_RG11_EAC;if(i===wh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Th||i===Ah||i===bh||i===Ch||i===Rh||i===Ph||i===Lh||i===Dh||i===Ih||i===Nh||i===Fh||i===Uh||i===Oh||i===kh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Th)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ah)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ch)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ph)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ih)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bh||i===zh||i===Hh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bh)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vh||i===Gh||i===tu||i===Wh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ja?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const P3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class D3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new j_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ii({vertexShader:P3,fragmentShader:L3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wn(new Du(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I3 extends Ps{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,v=null;const E=typeof XRWebGLBinding<"u",g=new D3,d={},x=n.getContextAttributes();let y=null,_=null;const w=[],T=[],b=new Ne;let S=null;const C=new kn;C.viewport=new At;const L=new kn;L.viewport=new At;const D=[C,L],I=new Gb;let K=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ae=w[W];return ae===void 0&&(ae=new wd,w[W]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(W){let ae=w[W];return ae===void 0&&(ae=new wd,w[W]=ae),ae.getGripSpace()},this.getHand=function(W){let ae=w[W];return ae===void 0&&(ae=new wd,w[W]=ae),ae.getHandSpace()};function V(W){const ae=T.indexOf(W.inputSource);if(ae===-1)return;const le=w[ae];le!==void 0&&(le.update(W.inputSource,W.frame,c||o),le.dispatchEvent({type:W.type,data:W.inputSource}))}function J(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",G);for(let W=0;W<w.length;W++){const ae=T[W];ae!==null&&(T[W]=null,w[W].disconnect(ae))}K=null,ee=null,g.reset();for(const W in d)delete d[W];e.setRenderTarget(y),m=null,h=null,f=null,r=null,_=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",J),r.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(b),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Oe=null,ze=null;x.depth&&(ze=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=x.stencil?hs:nr,Oe=x.stencil?ja:Di);const Ie={colorFormat:n.RGBA8,depthFormat:ze,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Li(h.textureWidth,h.textureHeight,{format:di,type:Bn,depthTexture:new Do(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Li(m.framebufferWidth,m.framebufferHeight,{format:di,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(W){for(let ae=0;ae<W.removed.length;ae++){const le=W.removed[ae],Oe=T.indexOf(le);Oe>=0&&(T[Oe]=null,w[Oe].disconnect(le))}for(let ae=0;ae<W.added.length;ae++){const le=W.added[ae];let Oe=T.indexOf(le);if(Oe===-1){for(let Ie=0;Ie<w.length;Ie++)if(Ie>=T.length){T.push(le),Oe=Ie;break}else if(T[Ie]===null){T[Ie]=le,Oe=Ie;break}if(Oe===-1)break}const ze=w[Oe];ze&&ze.connect(le)}}const k=new F,Y=new F;function te(W,ae,le){k.setFromMatrixPosition(ae.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const Oe=k.distanceTo(Y),ze=ae.projectionMatrix.elements,Ie=le.projectionMatrix.elements,st=ze[14]/(ze[10]-1),qe=ze[14]/(ze[10]+1),ot=(ze[9]+1)/ze[5],We=(ze[9]-1)/ze[5],ge=(ze[8]-1)/ze[0],et=(Ie[8]+1)/Ie[0],ut=st*ge,mt=st*et,Ot=Oe/(-ge+et),Et=Ot*-ge;if(ae.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Et),W.translateZ(Ot),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ze[10]===-1)W.projectionMatrix.copy(ae.projectionMatrix),W.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const gt=st+Ot,O=qe+Ot,Sn=ut-Et,at=mt+(Oe-Et),R=ot*qe/O*gt,M=We*qe/O*gt;W.projectionMatrix.makePerspective(Sn,at,R,M,gt,O),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Z(W,ae){ae===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ae.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ae=W.near,le=W.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(le=g.depthFar)),I.near=L.near=C.near=ae,I.far=L.far=C.far=le,(K!==I.near||ee!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),K=I.near,ee=I.far),I.layers.mask=W.layers.mask|6,C.layers.mask=I.layers.mask&-5,L.layers.mask=I.layers.mask&-3;const Oe=W.parent,ze=I.cameras;Z(I,Oe);for(let Ie=0;Ie<ze.length;Ie++)Z(ze[Ie],Oe);ze.length===2?te(I,C,L):I.projectionMatrix.copy(C.projectionMatrix),oe(W,I,Oe)};function oe(W,ae,le){le===null?W.matrix.copy(ae.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(ae.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ae.projectionMatrix),W.projectionMatrixInverse.copy(ae.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Xh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(W){return d[W]};let Ue=null;function Xe(W,ae){if(u=ae.getViewerPose(c||o),v=ae,u!==null){const le=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Oe=!1;le.length!==I.cameras.length&&(I.cameras.length=0,Oe=!0);for(let qe=0;qe<le.length;qe++){const ot=le[qe];let We=null;if(m!==null)We=m.getViewport(ot);else{const et=f.getViewSubImage(h,ot);We=et.viewport,qe===0&&(e.setRenderTargetTextures(_,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(_))}let ge=D[qe];ge===void 0&&(ge=new kn,ge.layers.enable(qe),ge.viewport=new At,D[qe]=ge),ge.matrix.fromArray(ot.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(ot.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(We.x,We.y,We.width,We.height),qe===0&&(I.matrix.copy(ge.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Oe===!0&&I.cameras.push(ge)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){f=i.getBinding();const qe=f.getDepthInformation(le[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,r.renderState)}if(ze&&ze.includes("camera-access")&&E){e.state.unbindTexture(),f=i.getBinding();for(let qe=0;qe<le.length;qe++){const ot=le[qe].camera;if(ot){let We=d[ot];We||(We=new j_,d[ot]=We);const ge=f.getCameraImage(ot);We.sourceTexture=ge}}}}for(let le=0;le<w.length;le++){const Oe=T[le],ze=w[le];Oe!==null&&ze!==void 0&&ze.update(Oe,ae,c||o)}Ue&&Ue(W,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),v=null}const Be=new Q_;Be.setAnimationLoop(Xe),this.setAnimationLoop=function(W){Ue=W},this.dispose=function(){}}}const N3=new wt,oS=new He;oS.set(-1,0,0,0,1,0,0,0,1);function F3(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Y_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,y,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&m(g,d,_)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),E(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,x,y):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Pn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Pn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),y=x.envMap,_=x.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(N3.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(oS),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=y*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function E(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function U3(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){const T=w.program;i.uniformBlockBinding(_,T)}function c(_,w){let T=r[_.id];T===void 0&&(g(_),T=u(_),r[_.id]=T,_.addEventListener("dispose",x));const b=w.program;i.updateUBOMapping(_,b);const S=e.render.frame;s[_.id]!==S&&(h(_),s[_.id]=S)}function u(_){const w=f();_.__bindingPointIndex=w;const T=t.createBuffer(),b=_.__size,S=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,b,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,T),T}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const w=r[_.id],T=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let S=0,C=T.length;S<C;S++){const L=T[S];if(Array.isArray(L))for(let D=0,I=L.length;D<I;D++)m(L[D],S,D,b);else m(L,S,0,b)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,w,T,b){if(E(_,w,T,b)===!0){const S=_.__offset,C=_.value;if(Array.isArray(C)){let L=0;for(let D=0;D<C.length;D++){const I=C[D],K=d(I);v(I,_.__data,L),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(C,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,_.__data)}}function v(_,w,T){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,T)}function E(_,w,T,b){const S=_.value,C=w+"_"+T;if(b[C]===void 0)return typeof S=="number"||typeof S=="boolean"?b[C]=S:ArrayBuffer.isView(S)?b[C]=S.slice():b[C]=S.clone(),!0;{const L=b[C];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return b[C]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(L.equals(S)===!1)return L.copy(S),!0}}return!1}function g(_){const w=_.uniforms;let T=0;const b=16;for(let C=0,L=w.length;C<L;C++){const D=Array.isArray(w[C])?w[C]:[w[C]];for(let I=0,K=D.length;I<K;I++){const ee=D[I],V=Array.isArray(ee.value)?ee.value:[ee.value];for(let J=0,G=V.length;J<G;J++){const k=V[J],Y=d(k),te=T%b,Z=te%Y.boundary,oe=te+Z;T+=Z,oe!==0&&b-oe<Y.storage&&(T+=b-oe),ee.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=T,T+=Y.storage}}}const S=T%b;return S>0&&(T+=b-S),_.__size=T,_.__cache={},this}function d(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",_),w}function x(_){const w=_.target;w.removeEventListener("dispose",x);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function y(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}const O3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Si=null;function k3(){return Si===null&&(Si=new db(O3,16,16,As,tr),Si.name="DFG_LUT",Si.minFilter=cn,Si.magFilter=cn,Si.wrapS=qi,Si.wrapT=qi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}class B3{constructor(e={}){const{canvas:n=VA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Bn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const E=m,g=new Set([dm,um,cm]),d=new Set([Bn,Di,Wa,ja,am,lm]),x=new Uint32Array(4),y=new Int32Array(4),_=new F;let w=null,T=null;const b=[],S=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,I=null,K=null,ee=null,V=null;this._outputColorSpace=$n;let J=0,G=0,k=null,Y=-1,te=null;const Z=new At,oe=new At;let Ue=null;const Xe=new Qe(0);let Be=0,W=n.width,ae=n.height,le=1,Oe=null,ze=null;const Ie=new At(0,0,W,ae),st=new At(0,0,W,ae);let qe=!1;const ot=new gm;let We=!1,ge=!1;const et=new wt,ut=new F,mt=new At,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function gt(){return k===null?le:1}let O=i;function Sn(A,B){return n.getContext(A,B)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sm}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",vt,!1),n.addEventListener("webglcontextcreationerror",gi,!1),O===null){const B="webgl2";if(O=Sn(B,A),O===null)throw Sn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw nt("WebGLRenderer: "+A.message),A}let at,R,M,H,q,Q,ue,fe,ne,re,he,Re,ve,pe,De,Fe,Ve,N,de,ie,me,Ee,se;function Ce(){at=new k2(O),at.init(),me=new R3(O,at),R=new P2(O,at,e,me),M=new b3(O,at),R.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),K=O.createFramebuffer(),ee=O.createFramebuffer(),V=O.createFramebuffer(),H=new H2(O),q=new h3,Q=new C3(O,at,M,q,R,me,H),ue=new O2(L),fe=new jb(O),Ee=new C2(O,fe),ne=new B2(O,fe,H,Ee),re=new G2(O,ne,fe,Ee,H),N=new V2(O,R,Q),De=new L2(q),he=new f3(L,ue,at,R,Ee,De),Re=new F3(L,q),ve=new m3,pe=new S3(at),Ve=new b2(L,ue,M,re,v,l),Fe=new A3(L,re,R),se=new U3(O,H,R,M),de=new R2(O,at,H),ie=new z2(O,at,H),H.programs=he.programs,L.capabilities=R,L.extensions=at,L.properties=q,L.renderLists=ve,L.shadowMap=Fe,L.state=M,L.info=H}Ce(),E!==Bn&&(C=new j2(E,n.width,n.height,a,r,s));const Ae=new I3(L,O);this.xr=Ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=at.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=at.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(A){A!==void 0&&(le=A,this.setSize(W,ae,!1))},this.getSize=function(A){return A.set(W,ae)},this.setSize=function(A,B,$=!0){if(Ae.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,ae=B,n.width=Math.floor(A*le),n.height=Math.floor(B*le),$===!0&&(n.style.width=A+"px",n.style.height=B+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(W*le,ae*le).floor()},this.setDrawingBufferSize=function(A,B,$){W=A,ae=B,le=$,n.width=Math.floor(A*$),n.height=Math.floor(B*$),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(E===Bn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(Ie)},this.setViewport=function(A,B,$,j){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,B,$,j),M.viewport(Z.copy(Ie).multiplyScalar(le).round())},this.getScissor=function(A){return A.copy(st)},this.setScissor=function(A,B,$,j){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,B,$,j),M.scissor(oe.copy(st).multiplyScalar(le).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(A){M.setScissorTest(qe=A)},this.setOpaqueSort=function(A){Oe=A},this.setTransparentSort=function(A){ze=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,$=!0){let j=0;if(A){let X=!1;if(k!==null){const Se=k.texture.format;X=g.has(Se)}if(X){const Se=k.texture.type,we=d.has(Se),_e=Ve.getClearColor(),be=Ve.getClearAlpha(),Pe=_e.r,Ge=_e.g,$e=_e.b;we?(x[0]=Pe,x[1]=Ge,x[2]=$e,x[3]=be,O.clearBufferuiv(O.COLOR,0,x)):(y[0]=Pe,y[1]=Ge,y[2]=$e,y[3]=be,O.clearBufferiv(O.COLOR,0,y))}else j|=O.COLOR_BUFFER_BIT}B&&(j|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),I=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",vt,!1),n.removeEventListener("webglcontextcreationerror",gi,!1),Ve.dispose(),ve.dispose(),pe.dispose(),q.dispose(),ue.dispose(),re.dispose(),Ee.dispose(),se.dispose(),he.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",bm),Ae.removeEventListener("sessionend",Cm),Xr.stop()};function Rt(A){A.preventDefault(),w0("WebGLRenderer: Context Lost."),D=!0}function vt(){w0("WebGLRenderer: Context Restored."),D=!1;const A=H.autoReset,B=Fe.enabled,$=Fe.autoUpdate,j=Fe.needsUpdate,X=Fe.type;Ce(),H.autoReset=A,Fe.enabled=B,Fe.autoUpdate=$,Fe.needsUpdate=j,Fe.type=X}function gi(A){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function vi(A){const B=A.target;B.removeEventListener("dispose",vi),yS(B)}function yS(A){_S(A),q.remove(A)}function _S(A){const B=q.get(A).programs;B!==void 0&&(B.forEach(function($){he.releaseProgram($)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,$,j,X,Se){B===null&&(B=Ot);const we=X.isMesh&&X.matrixWorld.determinantAffine()<0,_e=MS(A,B,$,j,X);M.setMaterial(j,we);let be=$.index,Pe=1;if(j.wireframe===!0){if(be=ne.getWireframeAttribute($),be===void 0)return;Pe=2}const Ge=$.drawRange,$e=$.attributes.position;let Le=Ge.start*Pe,dt=(Ge.start+Ge.count)*Pe;Se!==null&&(Le=Math.max(Le,Se.start*Pe),dt=Math.min(dt,(Se.start+Se.count)*Pe)),be!==null?(Le=Math.max(Le,0),dt=Math.min(dt,be.count)):$e!=null&&(Le=Math.max(Le,0),dt=Math.min(dt,$e.count));const Dt=dt-Le;if(Dt<0||Dt===1/0)return;Ee.setup(X,j,_e,$,be);let Pt,ft=de;if(be!==null&&(Pt=fe.get(be),ft=ie,ft.setIndex(Pt)),X.isMesh)j.wireframe===!0?(M.setLineWidth(j.wireframeLinewidth*gt()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(X.isLine){let tn=j.linewidth;tn===void 0&&(tn=1),M.setLineWidth(tn*gt()),X.isLineSegments?ft.setMode(O.LINES):X.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else X.isPoints?ft.setMode(O.POINTS):X.isSprite&&ft.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(at.get("WEBGL_multi_draw"))ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const tn=X._multiDrawStarts,Me=X._multiDrawCounts,Dn=X._multiDrawCount,tt=be?fe.get(be).bytesPerElement:1,jn=q.get(j).currentProgram.getUniforms();for(let xi=0;xi<Dn;xi++)jn.setValue(O,"_gl_DrawID",xi),ft.render(tn[xi]/tt,Me[xi])}else if(X.isInstancedMesh)ft.renderInstances(Le,Dt,X.count);else if($.isInstancedBufferGeometry){const tn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Me=Math.min($.instanceCount,tn);ft.renderInstances(Le,Dt,Me)}else ft.render(Le,Dt)};function Am(A,B,$){A.transparent===!0&&A.side===Wi&&A.forceSinglePass===!1?(A.side=Pn,A.needsUpdate=!0,ll(A,B,$),A.side=Br,A.needsUpdate=!0,ll(A,B,$),A.side=Wi):ll(A,B,$)}this.compile=function(A,B,$=null){$===null&&($=A),T=pe.get($),T.init(B),S.push(T),$.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),A!==$&&A.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights();const j=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const _e=Se[we];Am(_e,$,X),j.add(_e)}else Am(Se,$,X),j.add(Se)}),T=S.pop(),j},this.compileAsync=function(A,B,$=null){const j=this.compile(A,B,$);return new Promise(X=>{function Se(){if(j.forEach(function(we){q.get(we).currentProgram.isReady()&&j.delete(we)}),j.size===0){X(A);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Fu=null;function SS(A){Fu&&Fu(A)}function bm(){Xr.stop()}function Cm(){Xr.start()}const Xr=new Q_;Xr.setAnimationLoop(SS),typeof self<"u"&&Xr.setContext(self),this.setAnimationLoop=function(A){Fu=A,Ae.setAnimationLoop(A),A===null?Xr.stop():Xr.start()},Ae.addEventListener("sessionstart",bm),Ae.addEventListener("sessionend",Cm),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(A,B);const $=Ae.enabled===!0&&Ae.isPresenting===!0,j=C!==null&&(k===null||$)&&C.begin(L,k);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(B),B=Ae.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,B,k),T=pe.get(A,S.length),T.init(B),T.state.textureUnits=Q.getTextureUnits(),S.push(T),et.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ot.setFromProjectionMatrix(et,bi,B.reversedDepth),ge=this.localClippingEnabled,We=De.init(this.clippingPlanes,ge),w=ve.get(A,b.length),w.init(),b.push(w),Ae.enabled===!0&&Ae.isPresenting===!0){const we=L.xr.getDepthSensingMesh();we!==null&&Uu(we,B,-1/0,L.sortObjects)}Uu(A,B,0,L.sortObjects),w.finish(),L.sortObjects===!0&&w.sort(Oe,ze,B.reversedDepth),Et=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Et&&Ve.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&De.beginShadows();const X=T.state.shadowsArray;if(Fe.render(X,A,B),We===!0&&De.endShadows(),(j&&C.hasRenderPass())===!1){const we=w.opaque,_e=w.transmissive;if(T.setupLights(),B.isArrayCamera){const be=B.cameras;if(_e.length>0)for(let Pe=0,Ge=be.length;Pe<Ge;Pe++){const $e=be[Pe];Pm(we,_e,A,$e)}Et&&Ve.render(A);for(let Pe=0,Ge=be.length;Pe<Ge;Pe++){const $e=be[Pe];Rm(w,A,$e,$e.viewport)}}else _e.length>0&&Pm(we,_e,A,B),Et&&Ve.render(A),Rm(w,A,B)}k!==null&&G===0&&(Q.updateMultisampleRenderTarget(k),Q.updateRenderTargetMipmap(k)),j&&C.end(L),A.isScene===!0&&A.onAfterRender(L,A,B),Ee.resetDefaultState(),Y=-1,te=null,S.pop(),S.length>0?(T=S[S.length-1],Q.setTextureUnits(T.state.textureUnits),We===!0&&De.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?w=b[b.length-1]:w=null,I!==null&&I.renderEnd()};function Uu(A,B,$,j){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ot.intersectsSprite(A)){j&&mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(et);const we=re.update(A),_e=A.material;_e.visible&&w.push(A,we,_e,$,mt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ot.intersectsObject(A))){const we=re.update(A),_e=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),mt.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),mt.copy(we.boundingSphere.center)),mt.applyMatrix4(A.matrixWorld).applyMatrix4(et)),Array.isArray(_e)){const be=we.groups;for(let Pe=0,Ge=be.length;Pe<Ge;Pe++){const $e=be[Pe],Le=_e[$e.materialIndex];Le&&Le.visible&&w.push(A,we,Le,$,mt.z,$e)}}else _e.visible&&w.push(A,we,_e,$,mt.z,null)}}const Se=A.children;for(let we=0,_e=Se.length;we<_e;we++)Uu(Se[we],B,$,j)}function Rm(A,B,$,j){const{opaque:X,transmissive:Se,transparent:we}=A;T.setupLightsView($),We===!0&&De.setGlobalState(L.clippingPlanes,$),j&&M.viewport(Z.copy(j)),X.length>0&&al(X,B,$),Se.length>0&&al(Se,B,$),we.length>0&&al(we,B,$),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Pm(A,B,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){const Le=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new Li(1,1,{generateMipmaps:!0,type:Le?tr:Bn,minFilter:fs,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const Se=T.state.transmissionRenderTarget[j.id],we=j.viewport||Z;Se.setSize(we.z*L.transmissionResolutionScale,we.w*L.transmissionResolutionScale);const _e=L.getRenderTarget(),be=L.getActiveCubeFace(),Pe=L.getActiveMipmapLevel();L.setRenderTarget(Se),L.getClearColor(Xe),Be=L.getClearAlpha(),Be<1&&L.setClearColor(16777215,.5),L.clear(),Et&&Ve.render($);const Ge=L.toneMapping;L.toneMapping=Pi;const $e=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),We===!0&&De.setGlobalState(L.clippingPlanes,j),al(A,$,j),Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let dt=0,Dt=B.length;dt<Dt;dt++){const Pt=B[dt],{object:ft,geometry:tn,material:Me,group:Dn}=Pt;if(Me.side===Wi&&ft.layers.test(j.layers)){const tt=Me.side;Me.side=Pn,Me.needsUpdate=!0,Lm(ft,$,j,tn,Me,Dn),Me.side=tt,Me.needsUpdate=!0,Le=!0}}Le===!0&&(Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se))}L.setRenderTarget(_e,be,Pe),L.setClearColor(Xe,Be),$e!==void 0&&(j.viewport=$e),L.toneMapping=Ge}function al(A,B,$){const j=B.isScene===!0?B.overrideMaterial:null;for(let X=0,Se=A.length;X<Se;X++){const we=A[X],{object:_e,geometry:be,group:Pe}=we;let Ge=we.material;Ge.allowOverride===!0&&j!==null&&(Ge=j),_e.layers.test($.layers)&&Lm(_e,B,$,be,Ge,Pe)}}function Lm(A,B,$,j,X,Se){A.onBeforeRender(L,B,$,j,X,Se),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(L,B,$,j,A,Se),X.transparent===!0&&X.side===Wi&&X.forceSinglePass===!1?(X.side=Pn,X.needsUpdate=!0,L.renderBufferDirect($,B,j,X,A,Se),X.side=Br,X.needsUpdate=!0,L.renderBufferDirect($,B,j,X,A,Se),X.side=Wi):L.renderBufferDirect($,B,j,X,A,Se),A.onAfterRender(L,B,$,j,X,Se)}function ll(A,B,$){B.isScene!==!0&&(B=Ot);const j=q.get(A),X=T.state.lights,Se=T.state.shadowsArray,we=X.state.version,_e=he.getParameters(A,X.state,Se,B,$,T.state.lightProbeGridArray),be=he.getProgramCacheKey(_e);let Pe=j.programs;j.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,j.fog=B.fog;const Ge=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;j.envMap=ue.get(A.envMap||j.environment,Ge),j.envMapRotation=j.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Pe===void 0&&(A.addEventListener("dispose",vi),Pe=new Map,j.programs=Pe);let $e=Pe.get(be);if($e!==void 0){if(j.currentProgram===$e&&j.lightsStateVersion===we)return Im(A,_e),$e}else _e.uniforms=he.getUniforms(A),I!==null&&A.isNodeMaterial&&I.build(A,$,_e),A.onBeforeCompile(_e,L),$e=he.acquireProgram(_e,be),Pe.set(be,$e),j.uniforms=_e.uniforms;const Le=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=De.uniform),Im(A,_e),j.needsLights=TS(A),j.lightsStateVersion=we,j.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),j.lightProbeGrid=T.state.lightProbeGridArray.length>0,j.currentProgram=$e,j.uniformsList=null,$e}function Dm(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Tc.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Im(A,B){const $=q.get(A);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function ES(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(B.matrixWorld);for(let $=0,j=A.length;$<j;$++){const X=A[$];if(X.texture!==null&&X.boundingBox.containsPoint(_))return X}return null}function MS(A,B,$,j,X){B.isScene!==!0&&(B=Ot),Q.resetTextureUnits();const Se=B.fog,we=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?B.environment:null,_e=k===null?L.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Je.workingColorSpace,be=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Pe=ue.get(j.envMap||we,be),Ge=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,$e=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,Dt=!!$.morphAttributes.color;let Pt=Pi;j.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Pt=L.toneMapping);const ft=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,tn=ft!==void 0?ft.length:0,Me=q.get(j),Dn=T.state.lights;if(We===!0&&(ge===!0||A!==te)){const xt=A===te&&j.id===Y;De.setState(j,A,xt)}let tt=!1;j.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Dn.state.version||Me.outputColorSpace!==_e||X.isBatchedMesh&&Me.batching===!1||!X.isBatchedMesh&&Me.batching===!0||X.isBatchedMesh&&Me.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Me.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Me.instancing===!1||!X.isInstancedMesh&&Me.instancing===!0||X.isSkinnedMesh&&Me.skinning===!1||!X.isSkinnedMesh&&Me.skinning===!0||X.isInstancedMesh&&Me.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Me.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Me.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Me.instancingMorph===!1&&X.morphTexture!==null||Me.envMap!==Pe||j.fog===!0&&Me.fog!==Se||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==De.numPlanes||Me.numIntersection!==De.numIntersection)||Me.vertexAlphas!==Ge||Me.vertexTangents!==$e||Me.morphTargets!==Le||Me.morphNormals!==dt||Me.morphColors!==Dt||Me.toneMapping!==Pt||Me.morphTargetsCount!==tn||!!Me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Me.__version=j.version);let jn=Me.currentProgram;tt===!0&&(jn=ll(j,B,X),I&&j.isNodeMaterial&&I.onUpdateProgram(j,jn,Me));let xi=!1,ar=!1,Ds=!1;const ht=jn.getUniforms(),It=Me.uniforms;if(M.useProgram(jn.program)&&(xi=!0,ar=!0,Ds=!0),j.id!==Y&&(Y=j.id,ar=!0),Me.needsLights){const xt=ES(T.state.lightProbeGridArray,X);Me.lightProbeGrid!==xt&&(Me.lightProbeGrid=xt,ar=!0)}if(xi||te!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ht.setValue(O,"projectionMatrix",A.projectionMatrix),ht.setValue(O,"viewMatrix",A.matrixWorldInverse);const cr=ht.map.cameraPosition;cr!==void 0&&cr.setValue(O,ut.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&ht.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ht.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),te!==A&&(te=A,ar=!0,Ds=!0)}if(Me.needsLights&&(Dn.state.directionalShadowMap.length>0&&ht.setValue(O,"directionalShadowMap",Dn.state.directionalShadowMap,Q),Dn.state.spotShadowMap.length>0&&ht.setValue(O,"spotShadowMap",Dn.state.spotShadowMap,Q),Dn.state.pointShadowMap.length>0&&ht.setValue(O,"pointShadowMap",Dn.state.pointShadowMap,Q)),X.isSkinnedMesh){ht.setOptional(O,X,"bindMatrix"),ht.setOptional(O,X,"bindMatrixInverse");const xt=X.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),ht.setValue(O,"boneTexture",xt.boneTexture,Q))}X.isBatchedMesh&&(ht.setOptional(O,X,"batchingTexture"),ht.setValue(O,"batchingTexture",X._matricesTexture,Q),ht.setOptional(O,X,"batchingIdTexture"),ht.setValue(O,"batchingIdTexture",X._indirectTexture,Q),ht.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&ht.setValue(O,"batchingColorTexture",X._colorsTexture,Q));const lr=$.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&N.update(X,$,jn),(ar||Me.receiveShadow!==X.receiveShadow)&&(Me.receiveShadow=X.receiveShadow,ht.setValue(O,"receiveShadow",X.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&B.environment!==null&&(It.envMapIntensity.value=B.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=k3()),ar){if(ht.setValue(O,"toneMappingExposure",L.toneMappingExposure),Me.needsLights&&wS(It,Ds),Se&&j.fog===!0&&Re.refreshFogUniforms(It,Se),Re.refreshMaterialUniforms(It,j,le,ae,T.state.transmissionRenderTarget[A.id]),Me.needsLights&&Me.lightProbeGrid){const xt=Me.lightProbeGrid;It.probesSH.value=xt.texture,It.probesMin.value.copy(xt.boundingBox.min),It.probesMax.value.copy(xt.boundingBox.max),It.probesResolution.value.copy(xt.resolution)}Tc.upload(O,Dm(Me),It,Q)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Tc.upload(O,Dm(Me),It,Q),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ht.setValue(O,"center",X.center),ht.setValue(O,"modelViewMatrix",X.modelViewMatrix),ht.setValue(O,"normalMatrix",X.normalMatrix),ht.setValue(O,"modelMatrix",X.matrixWorld),j.uniformsGroups!==void 0){const xt=j.uniformsGroups;for(let cr=0,Is=xt.length;cr<Is;cr++){const Nm=xt[cr];se.update(Nm,jn),se.bind(Nm,jn)}}return jn}function wS(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function TS(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,B,$){const j=q.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),q.get(A.texture).__webglTexture=B,q.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const $=q.get(A);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,$=0){k=A,J=B,G=$;let j=null,X=!1,Se=!1;if(A){const _e=q.get(A);if(_e.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(O.FRAMEBUFFER,_e.__webglFramebuffer),Z.copy(A.viewport),oe.copy(A.scissor),Ue=A.scissorTest,M.viewport(Z),M.scissor(oe),M.setScissorTest(Ue),Y=-1;return}else if(_e.__webglFramebuffer===void 0)Q.setupRenderTarget(A);else if(_e.__hasExternalTextures)Q.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(_e.__boundDepthTexture!==Ge){if(Ge!==null&&q.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(A)}}const be=A.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Se=!0);const Pe=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Pe[B])?j=Pe[B][$]:j=Pe[B],X=!0):A.samples>0&&Q.useMultisampledRTT(A)===!1?j=q.get(A).__webglMultisampledFramebuffer:Array.isArray(Pe)?j=Pe[$]:j=Pe,Z.copy(A.viewport),oe.copy(A.scissor),Ue=A.scissorTest}else Z.copy(Ie).multiplyScalar(le).floor(),oe.copy(st).multiplyScalar(le).floor(),Ue=qe;if($!==0&&(j=K),M.bindFramebuffer(O.FRAMEBUFFER,j)&&M.drawBuffers(A,j),M.viewport(Z),M.scissor(oe),M.setScissorTest(Ue),X){const _e=q.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e.__webglTexture,$)}else if(Se){const _e=B;for(let be=0;be<A.textures.length;be++){const Pe=q.get(A.textures[be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+be,Pe.__webglTexture,$,_e)}}else if(A!==null&&$!==0){const _e=q.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_e.__webglTexture,$)}Y=-1},this.readRenderTargetPixels=function(A,B,$,j,X,Se,we,_e=0){if(!(A&&A.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(be=be[we]),be){M.bindFramebuffer(O.FRAMEBUFFER,be);try{const Pe=A.textures[_e],Ge=Pe.format,$e=Pe.type;if(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_e),!R.textureFormatReadable(Ge)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable($e)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-j&&$>=0&&$<=A.height-X&&O.readPixels(B,$,j,X,me.convert(Ge),me.convert($e),Se)}finally{const Pe=k!==null?q.get(k).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,B,$,j,X,Se,we,_e=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(be=be[we]),be)if(B>=0&&B<=A.width-j&&$>=0&&$<=A.height-X){M.bindFramebuffer(O.FRAMEBUFFER,be);const Pe=A.textures[_e],Ge=Pe.format,$e=Pe.type;if(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_e),!R.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Le),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(B,$,j,X,me.convert(Ge),me.convert($e),0);const dt=k!==null?q.get(k).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,dt);const Dt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await GA(O,Dt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Le),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.deleteBuffer(Le),O.deleteSync(Dt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,$=0){const j=Math.pow(2,-$),X=Math.floor(A.image.width*j),Se=Math.floor(A.image.height*j),we=B!==null?B.x:0,_e=B!==null?B.y:0;Q.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,we,_e,X,Se),M.unbindTexture()},this.copyTextureToTexture=function(A,B,$=null,j=null,X=0,Se=0){let we,_e,be,Pe,Ge,$e,Le,dt,Dt;const Pt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if($!==null)we=$.max.x-$.min.x,_e=$.max.y-$.min.y,be=$.isBox3?$.max.z-$.min.z:1,Pe=$.min.x,Ge=$.min.y,$e=$.isBox3?$.min.z:0;else{const It=Math.pow(2,-X);we=Math.floor(Pt.width*It),_e=Math.floor(Pt.height*It),A.isDataArrayTexture?be=Pt.depth:A.isData3DTexture?be=Math.floor(Pt.depth*It):be=1,Pe=0,Ge=0,$e=0}j!==null?(Le=j.x,dt=j.y,Dt=j.z):(Le=0,dt=0,Dt=0);const ft=me.convert(B.format),tn=me.convert(B.type);let Me;B.isData3DTexture?(Q.setTexture3D(B,0),Me=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Q.setTexture2DArray(B,0),Me=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(B,0),Me=O.TEXTURE_2D),M.activeTexture(O.TEXTURE0),M.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),M.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),M.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const Dn=M.getParameter(O.UNPACK_ROW_LENGTH),tt=M.getParameter(O.UNPACK_IMAGE_HEIGHT),jn=M.getParameter(O.UNPACK_SKIP_PIXELS),xi=M.getParameter(O.UNPACK_SKIP_ROWS),ar=M.getParameter(O.UNPACK_SKIP_IMAGES);M.pixelStorei(O.UNPACK_ROW_LENGTH,Pt.width),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt.height),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),M.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),M.pixelStorei(O.UNPACK_SKIP_IMAGES,$e);const Ds=A.isDataArrayTexture||A.isData3DTexture,ht=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const It=q.get(A),lr=q.get(B),xt=q.get(It.__renderTarget),cr=q.get(lr.__renderTarget);M.bindFramebuffer(O.READ_FRAMEBUFFER,xt.__webglFramebuffer),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,cr.__webglFramebuffer);for(let Is=0;Is<be;Is++)Ds&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(A).__webglTexture,X,$e+Is),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(B).__webglTexture,Se,Dt+Is)),O.blitFramebuffer(Pe,Ge,we,_e,Le,dt,we,_e,O.DEPTH_BUFFER_BIT,O.NEAREST);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||q.has(A)){const It=q.get(A),lr=q.get(B);M.bindFramebuffer(O.READ_FRAMEBUFFER,ee),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let xt=0;xt<be;xt++)Ds?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,X,$e+xt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,It.__webglTexture,X),ht?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,lr.__webglTexture,Se,Dt+xt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,lr.__webglTexture,Se),X!==0?O.blitFramebuffer(Pe,Ge,we,_e,Le,dt,we,_e,O.COLOR_BUFFER_BIT,O.NEAREST):ht?O.copyTexSubImage3D(Me,Se,Le,dt,Dt+xt,Pe,Ge,we,_e):O.copyTexSubImage2D(Me,Se,Le,dt,Pe,Ge,we,_e);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ht?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Me,Se,Le,dt,Dt,we,_e,be,ft,tn,Pt.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Me,Se,Le,dt,Dt,we,_e,be,ft,Pt.data):O.texSubImage3D(Me,Se,Le,dt,Dt,we,_e,be,ft,tn,Pt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,Le,dt,we,_e,ft,tn,Pt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,Le,dt,Pt.width,Pt.height,ft,Pt.data):O.texSubImage2D(O.TEXTURE_2D,Se,Le,dt,we,_e,ft,tn,Pt);M.pixelStorei(O.UNPACK_ROW_LENGTH,Dn),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt),M.pixelStorei(O.UNPACK_SKIP_PIXELS,jn),M.pixelStorei(O.UNPACK_SKIP_ROWS,xi),M.pixelStorei(O.UNPACK_SKIP_IMAGES,ar),Se===0&&B.generateMipmaps&&O.generateMipmap(Me),M.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&Q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){J=0,G=0,k=null,M.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}function aS(){const t=z.useRef(null);return z.useEffect(()=>{const e=t.current;if(!e)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=e.clientWidth||window.innerWidth,r=e.clientHeight||window.innerHeight,s=new sb;s.fog=new mm(656646,.045);const o=new kn(48,i/r,.1,100);o.position.set(0,.35,6.2);const a=new B3({antialias:!0,alpha:!0});a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.setSize(i,r),a.setClearColor(656646,1),e.appendChild(a.domElement),s.add(new Hb(4000276,.55));const l=new K0(13111342,1.4,18);l.position.set(0,1.2,2),s.add(l);const c=new K0(8001062,.7,20);c.position.set(-3,-1,1),s.add(c);const u=new ou(.22,24,24),f=new Ub({color:13111342,emissive:8001062,emissiveIntensity:.85,roughness:.35,metalness:.2}),h=new wn(u,f),m=new wn(u,f.clone());h.position.set(-2.6,0,0),m.position.set(2.6,0,0),s.add(h,m);const v=new ou(.42,20,20),E=new su({color:13111342,transparent:!0,opacity:.12}),g=new wn(v,E),d=new wn(v,E.clone());g.position.copy(h.position),d.position.copy(m.position),s.add(g,d);const x=new q_([new F(-2.6,0,0),new F(-1.2,.85,.15),new F(0,1.15,0),new F(1.2,.85,-.15),new F(2.6,0,0)]),y=new xm(x,64,.018,8,!1),_=new su({color:8001062,transparent:!0,opacity:.35});s.add(new wn(y,_));const w=n?80:420,T=new Float32Array(w*3),b=new Float32Array(w),S=new Float32Array(w);for(let Z=0;Z<w;Z++){b[Z]=Math.random(),S[Z]=.08+Math.random()*.18;const oe=x.getPoint(b[Z]);T[Z*3]=oe.x,T[Z*3+1]=oe.y,T[Z*3+2]=oe.z}const C=new Ln;C.setAttribute("position",new Qn(T,3));const L=new qh({color:15919334,size:n?.035:.045,transparent:!0,opacity:.85,depthWrite:!1,blending:ih,sizeAttenuation:!0}),D=new z0(C,L);s.add(D);const I=n?40:160,K=new Float32Array(I*3);for(let Z=0;Z<I;Z++)K[Z*3]=(Math.random()-.5)*10,K[Z*3+1]=(Math.random()-.5)*6,K[Z*3+2]=(Math.random()-.5)*4-1;const ee=new Ln;ee.setAttribute("position",new Qn(K,3));const V=new z0(ee,new qh({color:4000276,size:.03,transparent:!0,opacity:.5,depthWrite:!1}));s.add(V);let J=0,G=performance.now();const k=new F,Y=()=>{const Z=e.clientWidth||window.innerWidth,oe=e.clientHeight||window.innerHeight;o.aspect=Z/oe,o.updateProjectionMatrix(),a.setSize(Z,oe)};window.addEventListener("resize",Y);const te=Z=>{const oe=(Z-G)/1e3,Ue=1+.06*Math.pow(Math.max(0,Math.sin(oe*Math.PI*2.4)),8);if(h.scale.setScalar(Ue),m.scale.setScalar(Ue),g.scale.setScalar(Ue*1.05),d.scale.setScalar(Ue*1.05),l.intensity=1.2+Ue*.35,!n){const Xe=C.attributes.position;for(let Be=0;Be<w;Be++){b[Be]=(b[Be]+S[Be]*.016)%1,x.getPoint(b[Be],k);const W=Math.sin(oe*2+Be)*.04;Xe.setXYZ(Be,k.x,k.y+W,k.z+W*.5)}Xe.needsUpdate=!0,o.position.x=Math.sin(oe*.15)*.25,o.lookAt(0,.4,0),V.rotation.y=oe*.03}a.render(s,o),J=requestAnimationFrame(te)};return J=requestAnimationFrame(te),()=>{cancelAnimationFrame(J),window.removeEventListener("resize",Y),C.dispose(),L.dispose(),ee.dispose(),V.material.dispose(),y.dispose(),_.dispose(),u.dispose(),f.dispose(),m.material.dispose(),v.dispose(),E.dispose(),d.material.dispose(),a.dispose(),a.domElement.parentNode===e&&e.removeChild(a.domElement)}},[]),p.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",inset:0,zIndex:0,overflow:"hidden",background:"radial-gradient(ellipse at 50% 40%, #3d0a14 0%, #0a0506 70%)"}})}const Zl="'Anek Latin', 'Segoe UI', system-ui, sans-serif",Ev="'Public Sans', 'Segoe UI', system-ui, sans-serif";function z3(){const{user:t,loading:e}=sr(),n=en();return z.useEffect(()=>{e||!t||n(t.role==="hospital"?"/console":t.role==="admin"?"/admin":"/home",{replace:!0})},[t,e,n]),p.jsxs("div",{style:{position:"relative",minHeight:"100vh",width:"100%",overflow:"hidden",color:"#F2E8E6",background:"#0A0506"},children:[p.jsx(aS,{}),p.jsx("div",{style:{position:"absolute",inset:0,zIndex:1,pointerEvents:"none",background:"linear-gradient(180deg, rgba(10,5,6,0.35) 0%, rgba(10,5,6,0.15) 40%, rgba(10,5,6,0.75) 100%)"}}),p.jsxs("div",{style:{position:"relative",zIndex:2,minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"clamp(24px, 5vw, 48px)",maxWidth:560,margin:"0 auto"},children:[p.jsx("p",{style:{fontFamily:Zl,fontWeight:800,fontSize:"clamp(42px, 10vw, 64px)",letterSpacing:"-0.03em",lineHeight:.95,margin:0,color:"#F2E8E6",animation:"rsFadeUp 0.9s ease-out both"},children:"RaktaSetu"}),p.jsx("p",{style:{fontFamily:Zl,fontWeight:600,fontSize:"clamp(18px, 4vw, 24px)",margin:"14px 0 0",color:"#F2E8E6",lineHeight:1.25,animation:"rsFadeUp 0.9s ease-out 0.12s both"},children:"The living bridge between donors and hospitals."}),p.jsx("p",{style:{fontFamily:Ev,fontSize:15,lineHeight:1.55,color:"#A89B96",margin:"12px 0 0",maxWidth:380,animation:"rsFadeUp 0.9s ease-out 0.22s both"},children:"When blood is needed, nearby donors answer. Connect. Donate. Save lives."}),p.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,marginTop:28,animation:"rsFadeUp 0.9s ease-out 0.34s both"},children:[p.jsx(gs,{to:"/login",style:{fontFamily:Zl,fontWeight:700,fontSize:15,padding:"14px 22px",borderRadius:12,background:"#C8102E",color:"#fff",textDecoration:"none",border:"none"},children:"Enter RaktaSetu"}),p.jsx(gs,{to:"/register",style:{fontFamily:Zl,fontWeight:700,fontSize:15,padding:"14px 22px",borderRadius:12,background:"transparent",color:"#F2E8E6",textDecoration:"none",border:"1px solid rgba(242,232,230,0.35)"},children:"Create account"})]}),p.jsxs("p",{style:{fontFamily:Ev,fontSize:12,color:"#6F6963",margin:"28px 0 8px",animation:"rsFadeUp 0.9s ease-out 0.45s both"},children:[p.jsx(gs,{to:"/privacy",style:{color:"#A89B96",textDecoration:"none"},children:"Privacy"})," · ","support@raktasetu.org"]})]}),p.jsx("style",{children:`
        @keyframes rsFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `})]})}/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lS=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var V3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=z.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>z.createElement("svg",{ref:l,...V3,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:lS("lucide",r),...a},[...o.map(([c,u])=>z.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(t,e)=>{const n=z.forwardRef(({className:i,...r},s)=>z.createElement(G3,{ref:s,iconNode:e,className:lS(`lucide-${H3(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=rt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=rt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=rt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=rt("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=rt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=rt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=rt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=rt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=rt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=rt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=rt("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=rt("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=rt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=rt("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=rt("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=rt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=rt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=rt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=rt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=rt("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=rt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eL=rt("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=rt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=rt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=rt("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=rt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nL=rt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iL=rt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rL=rt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sL=rt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=rt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=rt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),oL="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function pn({children:t,kind:e="primary",onClick:n,full:i,small:r,dark:s,disabled:o}){const a={primary:{background:P.oxblood,color:"#fff",border:"1px solid "+P.oxbloodDark},critical:{background:P.arterial,color:"#fff",border:"1px solid #A50D26"},ghost:{background:s?"transparent":"#fff",color:s?"#E8E6E1":P.ink,border:`1px solid ${s?P.consoleLine:P.line}`},green:{background:P.leaf,color:"#fff",border:"1px solid #0B573C"}}[e];return p.jsx("button",{onClick:n,disabled:o,style:{...a,fontFamily:oL,fontWeight:700,fontSize:r?13:15,letterSpacing:"0.01em",padding:r?"8px 14px":"13px 18px",borderRadius:12,width:i?"100%":"auto",cursor:o?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform .08s ease, opacity .15s ease",opacity:o?.55:1},onMouseDown:l=>!o&&(l.currentTarget.style.transform="scale(.98)"),onMouseUp:l=>!o&&(l.currentTarget.style.transform="scale(1)"),onMouseLeave:l=>!o&&(l.currentTarget.style.transform="scale(1)"),children:t})}const Jr="'Public Sans', 'Segoe UI', system-ui, sans-serif",aL="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function lL(){const t=en(),{login:e,loginWithGoogle:n}=sr(),[i,r]=z.useState(""),[s,o]=z.useState(""),[a,l]=z.useState(""),[c,u]=z.useState(!1),[f,h]=z.useState(!1),[m,v]=z.useState(!1);z.useRef(null);const E=z.useRef(!1),g=z.useRef(n),d=z.useRef(t);E.current=f,g.current=n,d.current=t,z.useEffect(()=>{},[]),z.useEffect(()=>{},[m]);const x=async y=>{var _,w;if(y.preventDefault(),l(""),!i||!s){l("Please enter phone/email and password");return}u(!0);try{const T=await e(i,s);t(T.role==="hospital"?"/console":T.role==="admin"?"/admin":"/home")}catch(T){l(((w=(_=T.response)==null?void 0:_.data)==null?void 0:w.error)||"Login failed. Please try again.")}finally{u(!1)}};return p.jsxs("div",{style:{position:"relative",minHeight:"100vh",overflow:"hidden",background:"#0A0506"},children:[p.jsx("div",{style:{position:"absolute",inset:0,opacity:.55},children:p.jsx(aS,{})}),p.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(10,5,6,0.55) 0%, rgba(10,5,6,0.88) 100%)",zIndex:1}}),p.jsx("div",{style:{position:"relative",zIndex:2,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24},children:p.jsxs("div",{style:{width:"100%",maxWidth:360},children:[p.jsx(gs,{to:"/",style:{fontFamily:Jr,fontSize:13,color:"#A89B96",textDecoration:"none",display:"inline-block",marginBottom:20},children:"← RaktaSetu"}),p.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:20},children:p.jsx("div",{style:{width:56,height:56,borderRadius:"50% 50% 50% 4px",background:P.oxblood,transform:"rotate(45deg)",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx($a,{size:28,color:"#fff",fill:"#fff",strokeWidth:1.5,style:{transform:"rotate(-45deg)"}})})}),p.jsx("p",{style:{fontFamily:aL,fontWeight:800,fontSize:22,textAlign:"center",color:"#F2E8E6",margin:"0 0 4px"},children:"Welcome back"}),p.jsx("p",{style:{fontFamily:Jr,fontSize:13,color:"#A89B96",textAlign:"center",margin:"0 0 22px"},children:"Sign in to your RaktaSetu account"}),p.jsxs("form",{onSubmit:x,children:[a&&p.jsx("div",{style:{background:"rgba(200,16,46,0.15)",border:"1px solid rgba(200,16,46,0.4)",borderRadius:10,padding:"10px 14px",marginBottom:14,fontFamily:Jr,fontSize:13,color:"#F3C9D0"},children:a}),p.jsxs("div",{style:{position:"relative",marginBottom:12},children:[p.jsx(_m,{size:16,color:"#A89B96",style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"text",placeholder:"Phone or email",value:i,onChange:y=>r(y.target.value),autoComplete:"username",style:{width:"100%",padding:"13px 14px 13px 40px",borderRadius:12,border:"1px solid rgba(242,232,230,0.18)",fontFamily:Jr,fontSize:15,background:"rgba(255,255,255,0.06)",color:"#F2E8E6"}})]}),p.jsxs("div",{style:{position:"relative",marginBottom:18},children:[p.jsx(fS,{size:16,color:"#A89B96",style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:y=>o(y.target.value),style:{width:"100%",padding:"13px 14px 13px 40px",borderRadius:12,border:"1px solid rgba(242,232,230,0.18)",fontFamily:Jr,fontSize:15,background:"rgba(255,255,255,0.06)",color:"#F2E8E6"}})]}),p.jsx(pn,{kind:"primary",full:!0,disabled:c,children:c?"Signing in...":"Sign in"})]}),null,p.jsx("p",{style:{fontFamily:Jr,fontSize:12,color:"#6F6963",textAlign:"center",marginTop:18,lineHeight:1.45},children:"Demo: +919876543210 / password123"}),p.jsxs("p",{style:{fontFamily:Jr,fontSize:13,color:"#A89B96",textAlign:"center",marginTop:14},children:["New here? ",p.jsx(gs,{to:"/register",style:{color:"#F2E8E6",fontWeight:700,textDecoration:"none"},children:"Create an account"})]})]})})]})}const Fn="'Public Sans', 'Segoe UI', system-ui, sans-serif",Jd="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function cL(){const t=en(),{register:e}=sr(),[n,i]=z.useState("donor"),[r,s]=z.useState(""),[o,a]=z.useState(""),[l,c]=z.useState(""),[u,f]=z.useState(""),[h,m]=z.useState("O+"),[v,E]=z.useState(""),[g,d]=z.useState(""),[x,y]=z.useState(""),[_,w]=z.useState(!1),[T,b]=z.useState(""),[S,C]=z.useState(!1),L=async I=>{var G,k;if(I.preventDefault(),b(""),!r||!o||!u||!v||!g||!x){b("Please fill all required fields");return}if(n==="donor"&&!h){b("Please select your blood group");return}const K=new Date,ee=new Date(x);let V=K.getFullYear()-ee.getFullYear();const J=K.getMonth()-ee.getMonth();if((J<0||J===0&&K.getDate()<ee.getDate())&&V--,V<18){b("You must be at least 18 years old to register");return}if(!_){b("You must consent to processing your personal and health data");return}C(!0);try{const te=await e({name:r,phone:o,email:l,password:u,role:n,city:v,state:g,blood_group:h,dob:x,consent_given:!0});t(te.role==="hospital"?"/console":"/home")}catch(Y){b(((k=(G=Y.response)==null?void 0:G.data)==null?void 0:k.error)||"Registration failed. Please try again.")}finally{C(!1)}},D={width:"100%",padding:"13px 14px",borderRadius:12,border:`1px solid ${P.line}`,fontFamily:Fn,fontSize:15,background:P.card};return p.jsx("div",{style:{minHeight:"100vh",padding:"24px 20px 40px",background:P.porcelain},children:p.jsxs("div",{style:{maxWidth:360,margin:"0 auto"},children:[p.jsx("p",{style:{fontFamily:Jd,fontWeight:800,fontSize:22,color:P.ink,margin:"0 0 4px"},children:"Create account"}),p.jsx("p",{style:{fontFamily:Fn,fontSize:13,color:P.mut,margin:"0 0 20px"},children:"Join RaktaSetu as a donor or blood bank"}),p.jsx("div",{style:{display:"flex",gap:8,marginBottom:18},children:["donor","hospital"].map(I=>p.jsx("button",{onClick:()=>i(I),style:{flex:1,fontFamily:Jd,fontWeight:700,fontSize:13,padding:"10px 0",borderRadius:12,background:n===I?P.oxblood:P.card,color:n===I?"#fff":P.mut,border:`1px solid ${n===I?P.oxbloodDark:P.line}`,cursor:"pointer"},children:I==="donor"?"Blood donor":"Hospital / Blood bank"},I))}),p.jsxs("form",{onSubmit:L,children:[T&&p.jsx("div",{style:{background:P.arterialSoft,border:"1px solid #F3C9D0",borderRadius:10,padding:"10px 14px",marginBottom:14,fontFamily:Fn,fontSize:13,color:P.arterial},children:T}),p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("label",{style:{fontFamily:Fn,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"Full name"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(gS,{size:16,color:P.faint,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"text",placeholder:"Your full name",value:r,onChange:I=>s(I.target.value),style:{...D,paddingLeft:40}})]})]}),p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("label",{style:{fontFamily:Fn,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"Phone"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(_m,{size:16,color:P.faint,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"tel",placeholder:"+91 98765 43210",value:o,onChange:I=>a(I.target.value),style:{...D,paddingLeft:40}})]})]}),p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("label",{style:{fontFamily:Fn,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"Email"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(J3,{size:16,color:P.faint,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"email",placeholder:"you@example.com",value:l,onChange:I=>c(I.target.value),style:{...D,paddingLeft:40}})]})]}),p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("label",{style:{fontFamily:Fn,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"Password"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(fS,{size:16,color:P.faint,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"password",placeholder:"Min 8 characters with uppercase, lowercase, number, symbol",value:u,onChange:I=>f(I.target.value),style:{...D,paddingLeft:40}})]})]}),p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("label",{style:{fontFamily:Fn,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"Date of birth"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(j3,{size:16,color:P.faint,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"date",value:x,onChange:I=>y(I.target.value),style:{...D,paddingLeft:40}})]})]}),n==="donor"&&p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("label",{style:{fontFamily:Fn,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"Blood group"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},children:__.map(I=>p.jsx("button",{type:"button",onClick:()=>m(I),style:{fontFamily:Jd,fontWeight:800,fontSize:15,padding:"10px 0",borderRadius:10,background:h===I?P.oxblood:P.card,color:h===I?"#fff":P.mut,border:`1px solid ${h===I?P.oxbloodDark:P.line}`,cursor:"pointer"},children:I},I))})]}),p.jsxs("div",{style:{display:"flex",gap:10,marginBottom:12},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("label",{style:{fontFamily:Fn,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"City"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(hS,{size:16,color:P.faint,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"text",placeholder:"City",value:v,onChange:I=>E(I.target.value),style:{...D,paddingLeft:40}})]})]}),p.jsxs("div",{style:{flex:1},children:[p.jsx("label",{style:{fontFamily:Fn,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"State"}),p.jsx("input",{type:"text",placeholder:"State",value:g,onChange:I=>d(I.target.value),style:D})]})]}),p.jsxs("div",{style:{marginBottom:14,display:"flex",alignItems:"flex-start",gap:8},children:[p.jsx("input",{type:"checkbox",id:"consent",checked:_,onChange:I=>w(I.target.checked),style:{marginTop:3,accentColor:P.oxblood}}),p.jsxs("label",{htmlFor:"consent",style:{fontFamily:Fn,fontSize:12,color:P.ink,lineHeight:1.4},children:["I consent to the processing of my personal and health data for blood donation matching purposes. I have read and agree to the ",p.jsx(gs,{to:"/privacy",style:{color:P.oxblood},children:"Privacy Policy"}),"."]})]}),p.jsx(pn,{kind:"primary",full:!0,disabled:S,children:S?"Creating account...":"Create account"})]}),p.jsxs("p",{style:{fontFamily:Fn,fontSize:13,color:P.mut,textAlign:"center",marginTop:20},children:["Already have an account? ",p.jsx(gs,{to:"/login",style:{color:P.oxblood,fontWeight:700,textDecoration:"none"},children:"Sign in"})]})]})})}const Ql="'Public Sans', 'Segoe UI', system-ui, sans-serif",wv="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function uL(){const t=en(),e=({title:n,children:i})=>p.jsxs("div",{style:{marginBottom:24},children:[p.jsx("h2",{style:{fontFamily:wv,fontWeight:800,fontSize:16,color:P.ink,margin:"0 0 8px"},children:n}),p.jsx("div",{style:{fontFamily:Ql,fontSize:13.5,color:P.mut,lineHeight:1.6},children:i})]});return p.jsx("div",{style:{minHeight:"100vh",padding:"24px 20px 40px",background:P.porcelain},children:p.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[p.jsxs("button",{onClick:()=>t(-1),style:{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,marginBottom:18,fontFamily:Ql,fontSize:13,color:P.mut},children:[p.jsx(Wo,{size:16})," Back"]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[p.jsx(rL,{size:22,color:P.oxblood}),p.jsx("h1",{style:{fontFamily:wv,fontWeight:800,fontSize:22,color:P.ink,margin:0},children:"Privacy Policy"})]}),p.jsxs("p",{style:{fontFamily:Ql,fontSize:12,color:P.faint,margin:"0 0 24px"},children:["Last updated: ",new Date().toLocaleDateString()]}),p.jsxs(e,{title:"1. Data We Collect",children:[p.jsx("p",{children:"We collect the following personal and health data during registration and use:"}),p.jsxs("ul",{style:{paddingLeft:20,margin:"8px 0"},children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Identity:"})," Full name, date of birth"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Contact:"})," Phone number, email address"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Health:"})," Blood group (donors only)"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Location:"})," City, state, and approximate geolocation for matching"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Usage:"})," Donation history, response times, verification status"]})]})]}),p.jsxs(e,{title:"2. Purpose of Processing",children:[p.jsx("p",{children:"Your data is processed solely for the following purposes:"}),p.jsxs("ul",{style:{paddingLeft:20,margin:"8px 0"},children:[p.jsx("li",{children:"Matching blood donors with nearby hospitals in emergencies"}),p.jsx("li",{children:"Verifying donor identity and eligibility"}),p.jsx("li",{children:"Maintaining donation records and credit tracking"}),p.jsx("li",{children:"Sending emergency blood request notifications"}),p.jsx("li",{children:"Compliance with applicable health regulations"})]})]}),p.jsxs(e,{title:"3. Data Sharing",children:[p.jsx("p",{children:"We do not sell your data. Information is shared only as follows:"}),p.jsxs("ul",{style:{paddingLeft:20,margin:"8px 0"},children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Matched hospitals:"})," When you accept a donation request, the hospital receives your name, blood group, and a masked phone number. Your full phone number is only revealed after you confirm arrival."]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Service providers:"})," Our database is hosted on Neon (US-based cloud PostgreSQL). No third-party analytics or advertising trackers are used."]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Legal obligations:"})," We may disclose data if required by law or to protect vital interests."]})]})]}),p.jsxs(e,{title:"4. Your Rights (DPDP Act 2023)",children:[p.jsx("p",{children:"Under India's Digital Personal Data Protection Act, 2023, you have the right to:"}),p.jsxs("ul",{style:{paddingLeft:20,margin:"8px 0"},children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Access:"})," Request a copy of your personal data"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Correction:"})," Update inaccurate or incomplete information"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Erasure:"})," Request deletion of your account and associated data"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Withdraw consent:"})," Opt out of data processing at any time"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Grievance redressal:"})," File a complaint with our Data Protection Officer"]})]}),p.jsx("p",{children:"To exercise any of these rights, contact us at the email below."})]}),p.jsx(e,{title:"5. Data Retention",children:p.jsxs("p",{children:["We retain your personal data for ",p.jsx("strong",{children:"3 years"})," after your last activity (donation, login, or profile update). After this period, your data is automatically anonymized or deleted, unless longer retention is required by law."]})}),p.jsxs(e,{title:"6. Security Measures",children:[p.jsx("p",{children:"We implement industry-standard security practices:"}),p.jsxs("ul",{style:{paddingLeft:20,margin:"8px 0"},children:[p.jsx("li",{children:"Passwords are hashed using bcrypt"}),p.jsx("li",{children:"All API communications use HTTPS/TLS encryption"}),p.jsx("li",{children:"Phone numbers are masked in hospital-facing interfaces"}),p.jsx("li",{children:"Access to donor health data is restricted to matched hospitals only"})]})]}),p.jsx(e,{title:"7. Cross-Border Data Transfer",children:p.jsxs("p",{children:["Our database is hosted on ",p.jsx("strong",{children:"Neon Postgres"})," in the United States. By using RaktaSetu, you consent to the transfer and storage of your data in the US, which may have different data protection laws than India. We ensure adequate safeguards are in place through our service provider's security certifications."]})}),p.jsxs(e,{title:"8. Contact & Grievances",children:[p.jsx("p",{children:"For privacy-related questions, data access requests, or grievances:"}),p.jsxs("p",{style:{margin:"8px 0"},children:[p.jsx("strong",{children:"Privacy:"})," privacy@raktasetu.org",p.jsx("br",{}),p.jsx("strong",{children:"Support:"})," support@raktasetu.org",p.jsx("br",{}),p.jsx("strong",{children:"Data Protection Officer:"})," RaktaSetu Trust, Bengaluru, Karnataka",p.jsx("br",{}),p.jsx("strong",{children:"Live app:"})," https://raktasetu-production.up.railway.app/"]}),p.jsxs("p",{children:["If you are unsatisfied with our response, you may approach the ",p.jsx("strong",{children:"Data Protection Board of India"}),"."]})]}),p.jsx("div",{style:{marginTop:32,padding:"14px 16px",background:P.arterialSoft,borderRadius:12,border:"1px solid #F3C9D0"},children:p.jsxs("p",{style:{fontFamily:Ql,fontSize:12.5,color:P.arterial,margin:0,lineHeight:1.5},children:[p.jsx("strong",{children:"Consent reminder:"})," By registering, you explicitly consent to the processing of your personal and health data for blood donation matching purposes. You may withdraw consent at any time by deleting your account."]})})]})})}const dL="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function vS({size:t=26,dark:e=!1}){return p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[p.jsx("div",{style:{width:t,height:t,borderRadius:"50% 50% 50% 4px",background:P.oxblood,transform:"rotate(45deg)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 1px 4px rgba(122,22,38,.35)"},children:p.jsx("div",{style:{width:t*.5,height:t*.28,background:e?P.consoleBg:P.porcelain,borderRadius:`${t}px ${t}px 0 0`,transform:"rotate(-45deg) translateY(28%)"}})}),p.jsxs("span",{style:{fontFamily:dL,fontWeight:800,fontSize:t*.78,letterSpacing:"-0.01em",color:e?"#F2EFEA":P.ink},children:["Rakta",p.jsx("span",{style:{color:e?"#E4506B":P.oxblood},children:"Setu"})]})]})}const fL="'Public Sans', 'Segoe UI', system-ui, sans-serif";function No({children:t,tone:e="line",dark:n}){const i={line:{bg:n?P.consoleCard:"#FFFFFF",fg:n?P.consoleMut:P.mut,bd:n?P.consoleLine:P.line},red:{bg:P.arterialSoft,fg:P.arterial,bd:"#F3C9D0"},green:{bg:P.leafSoft,fg:P.leaf,bd:"#CBE3D8"},solid:{bg:P.oxblood,fg:"#fff",bd:P.oxblood},gold:{bg:"#F6EFDD",fg:P.gold,bd:"#E6D9B8"}}[e];return p.jsx("span",{style:{fontFamily:fL,fontSize:11,fontWeight:700,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:99,background:i.bg,color:i.fg,border:`1px solid ${i.bd}`,textTransform:"uppercase",whiteSpace:"nowrap"},children:t})}function Ze({children:t,style:e,dark:n}){return p.jsx("div",{style:{background:n?P.consoleCard:P.card,border:`1px solid ${n?P.consoleLine:P.line}`,borderRadius:16,padding:16,...e},children:t})}const hL="'Public Sans', 'Segoe UI', system-ui, sans-serif",ec=({icon:t,label:e,active:n,onClick:i})=>p.jsxs("button",{onClick:i,style:{background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:3,flex:1,padding:"8px 0"},children:[np.cloneElement(t,{size:20,color:n?P.oxblood:P.faint,strokeWidth:n?2.4:2}),p.jsx("span",{style:{fontFamily:hL,fontSize:10,fontWeight:n?700:500,color:n?P.oxblood:P.faint},children:e})]});function Ls(){const t=en(),n=jr().pathname,i=r=>n.startsWith(r);return p.jsxs("div",{style:{display:"flex",borderTop:`1px solid ${P.line}`,background:"rgba(255,255,255,0.93)",backdropFilter:"blur(6px)",position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,zIndex:100},children:[p.jsx(ec,{icon:p.jsx(q3,{}),label:"Home",active:i("/home"),onClick:()=>t("/home")}),p.jsx(ec,{icon:p.jsx(au,{}),label:"Requests",active:i("/requests")||i("/alert"),onClick:()=>t("/requests")}),p.jsx(ec,{icon:p.jsx(uS,{}),label:"Credits",active:i("/credits"),onClick:()=>t("/credits")}),p.jsx(ec,{icon:p.jsx(gS,{}),label:"Profile",active:i("/profile")||i("/history"),onClick:()=>t("/profile")})]})}const Bi="'Public Sans', 'Segoe UI', system-ui, sans-serif",Ks="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function pL(){const t=en(),{user:e,updateUser:n}=sr(),[i,r]=z.useState((e==null?void 0:e.is_on_call)||!1),[s,o]=z.useState(null),[a,l]=z.useState(!0),[c,u]=z.useState(""),[f,h]=z.useState(!1),[m,v]=z.useState("English");z.useEffect(()=>{E()},[]);const E=async()=>{try{const{data:S}=await pt.get("/donor/dashboard"),C=S.data||S;o(C),r(C.is_on_call),n({is_on_call:C.is_on_call})}catch{u("Failed to load dashboard")}finally{l(!1)}},g=async()=>{h(!0);try{const{data:S}=await pt.patch("/donor/on-call",{is_on_call:!i}),C=S.data||S;r(C.is_on_call),n({is_on_call:C.is_on_call})}catch{u("Failed to update status")}finally{h(!1)}};if(a)return p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:Bi,color:P.mut},children:"Loading dashboard..."});const d=(e==null?void 0:e.name)||"Donor",x=(e==null?void 0:e.blood_group)||"—",y=(s==null?void 0:s.credits)??0,_=(s==null?void 0:s.eligible)??!0,w=s==null?void 0:s.next_eligible_date,T=(e==null?void 0:e.ping_radius_km)||10,b=(s==null?void 0:s.nearby_requests)||[];return p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx(vS,{}),p.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[p.jsx("button",{onClick:()=>v(S=>S==="English"?"ಕನ್ನಡ":"English"),children:p.jsx(No,{tone:"gold",children:m==="English"?"English · EN":"ಕನ್ನಡ · KN"})}),p.jsx("button",{onClick:()=>t("/requests"),style:{background:"none",border:"none",cursor:"pointer"},children:p.jsx(au,{size:19,color:P.mut})})]})]}),p.jsxs("p",{style:{fontFamily:Bi,color:P.mut,fontSize:13.5,margin:"20px 0 2px"},children:["Namaskara, ",d]}),p.jsx("h1",{style:{fontFamily:Ks,fontWeight:800,fontSize:26,margin:0,color:P.ink,letterSpacing:"-0.02em"},children:i?`You're on call for ${(e==null?void 0:e.city)||"your city"}.`:"Ready when you are."}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"26px 0 8px"},children:[p.jsxs("div",{style:{position:"relative",width:148,height:148},children:[i&&p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"rs-pulse",style:{animationDelay:"0s"}}),p.jsx("span",{className:"rs-pulse",style:{animationDelay:"1.1s"}})]}),p.jsxs("button",{onClick:g,disabled:f,"aria-pressed":i,style:{position:"absolute",inset:8,borderRadius:"50%",background:i?P.oxblood:"#fff",border:`2px solid ${i?P.oxbloodDark:P.line}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",gap:4,transition:"background .25s ease",boxShadow:i?"0 8px 24px rgba(122,22,38,.35)":"0 4px 14px rgba(23,21,26,.08)"},children:[p.jsx($a,{size:40,color:i?"#fff":P.oxblood,fill:i?"#fff":"none",strokeWidth:1.7}),p.jsx("span",{style:{fontFamily:Ks,fontWeight:800,fontSize:13,color:i?"#fff":P.ink,letterSpacing:"0.06em"},children:i?"ON CALL":"OFF"})]})]}),p.jsx("p",{style:{fontFamily:Bi,fontSize:12.5,color:P.faint,marginTop:10,textAlign:"center",maxWidth:250},children:i?`Blood banks can ping you for ${x} compatible emergencies within ${T} km.`:"Turn on to receive emergency pings from verified blood banks."})]}),p.jsxs("div",{style:{display:"flex",gap:10,marginTop:14},children:[p.jsxs(Ze,{style:{flex:1,padding:12},children:[p.jsx("p",{style:{fontFamily:Bi,fontSize:11,color:P.faint,margin:0,textTransform:"uppercase",letterSpacing:".05em"},children:"Your group"}),p.jsx("p",{style:{fontFamily:Ks,fontWeight:800,fontSize:22,margin:"2px 0 0",color:P.oxblood},children:x})]}),p.jsxs(Ze,{style:{flex:1,padding:12},children:[p.jsx("p",{style:{fontFamily:Bi,fontSize:11,color:P.faint,margin:0,textTransform:"uppercase",letterSpacing:".05em"},children:"Credits"}),p.jsx("p",{style:{fontFamily:Ks,fontWeight:800,fontSize:22,margin:"2px 0 0",color:P.ink},children:y})]}),p.jsxs(Ze,{style:{flex:1.2,padding:12},children:[p.jsx("p",{style:{fontFamily:Bi,fontSize:11,color:P.faint,margin:0,textTransform:"uppercase",letterSpacing:".05em"},children:"Eligibility"}),p.jsxs("p",{style:{fontFamily:Ks,fontWeight:700,fontSize:14,margin:"5px 0 0",color:_?P.leaf:P.arterial,display:"flex",alignItems:"center",gap:5},children:[p.jsx(qa,{size:15})," ",_?"Eligible now":w?`Eligible ${w}`:"Not eligible"]})]})]}),b.length>0?b.slice(0,2).map(S=>{var C;return p.jsxs(Ze,{style:{marginTop:12,display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},onClick:()=>t(`/alert/${S.id}`),children:[p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:Ks,fontWeight:700,fontSize:14.5,margin:0,color:P.ink},children:[S.hospital_name," · ",S.units_needed," units needed"]}),p.jsxs("p",{style:{fontFamily:Bi,fontSize:12.5,color:P.mut,margin:"3px 0 0"},children:[S.city," · ",(C=S.distance_km)==null?void 0:C.toFixed(1)," km away"]})]}),p.jsx(dS,{size:18,color:P.faint})]},S.id)}):p.jsx(Ze,{style:{marginTop:12},children:p.jsx("p",{style:{fontFamily:Bi,fontSize:13,color:P.mut,margin:0,textAlign:"center"},children:"No active requests near you right now."})}),c&&p.jsx("p",{style:{fontFamily:Bi,fontSize:12,color:P.arterial,textAlign:"center",marginTop:12},children:c}),p.jsx(Ls,{})]})}const Zr="'Public Sans', 'Segoe UI', system-ui, sans-serif",Js="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function mL(){var g;const{requestId:t}=Gy(),e=en(),{user:n}=sr(),[i,r]=z.useState(null),[s,o]=z.useState(!0),[a,l]=z.useState(""),[c,u]=z.useState(!1);z.useEffect(()=>{f()},[t]);const f=async()=>{var d;try{const{data:x}=await pt.get("/donor/requests"),_=(d=(x.data||x).requests)==null?void 0:d.find(w=>w.id===t);_?r(_):l("Request not found")}catch{l("Failed to load request details")}finally{o(!1)}},h=async()=>{var d,x;u(!0);try{await pt.post(`/donor/respond/${t}`,{status:"accepted"}),e(`/on-the-way/${t}`)}catch(y){l(((x=(d=y.response)==null?void 0:d.data)==null?void 0:x.error)||"Failed to accept request")}finally{u(!1)}},m=async()=>{var d,x;u(!0);try{await pt.post(`/donor/respond/${t}`,{status:"declined"}),e("/home")}catch(y){l(((x=(d=y.response)==null?void 0:d.data)==null?void 0:x.error)||"Failed to decline request")}finally{u(!1)}};if(s)return p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:Zr},children:"Loading..."});if(!i)return p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:Zr,color:P.mut},children:"Request not found"});const v=(n==null?void 0:n.blood_group)||"—",E=(nh[i.blood_group]||[]).includes(v);return p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[p.jsx(mS,{size:16,color:P.arterial}),p.jsx("span",{style:{fontFamily:Js,fontWeight:800,fontSize:13,letterSpacing:".12em",color:P.arterial},children:"EMERGENCY PING"})]}),p.jsxs(Ze,{style:{marginTop:14,borderColor:"#F0BFC8",background:"#FFF9FA",padding:18},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:Zr,fontSize:12,color:P.mut,margin:0},children:"Patient needs"}),p.jsx("p",{style:{fontFamily:Js,fontWeight:800,fontSize:40,lineHeight:1,margin:"4px 0 0",color:P.arterial},children:i.blood_group})]}),p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx(No,{tone:"red",children:i.urgency}),p.jsxs("p",{style:{fontFamily:Js,fontWeight:700,fontSize:15,margin:"8px 0 0",color:P.ink},children:[i.units_needed," units"]}),p.jsxs("p",{style:{fontFamily:Zr,fontSize:12,color:P.mut,margin:"2px 0 0",display:"flex",alignItems:"center",gap:4,justifyContent:"flex-end"},children:[p.jsx(ym,{size:12})," ",i.needed_by?new Date(i.needed_by).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"ASAP"]})]})]}),p.jsx("div",{style:{height:1,background:"#F0BFC8",margin:"14px 0"}}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[p.jsx(hS,{size:15,color:P.oxblood}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:Js,fontWeight:700,fontSize:14.5,margin:0,color:P.ink},children:i.hospital_name}),p.jsxs("p",{style:{fontFamily:Zr,fontSize:12,color:P.mut,margin:"1px 0 0"},children:[i.hospital_address," · ",(g=i.distance_km)==null?void 0:g.toFixed(1)," km from you"]})]})]}),p.jsxs("div",{style:{marginTop:14,display:"flex",alignItems:"center",justifyContent:"center",gap:10,background:"#fff",border:`1px dashed ${P.line}`,borderRadius:12,padding:"10px 12px"},children:[p.jsxs("span",{style:{fontFamily:Js,fontWeight:800,color:P.oxblood,fontSize:15},children:["Your ",v]}),p.jsx(cS,{size:15,color:P.faint}),p.jsxs("span",{style:{fontFamily:Js,fontWeight:800,color:P.ink,fontSize:15},children:["Patient ",i.blood_group]}),p.jsx(No,{tone:E?"green":"red",children:E?"Compatible":"Not compatible"})]})]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:16},children:[p.jsxs(pn,{kind:"critical",full:!0,onClick:h,disabled:c||!E,children:[p.jsx($a,{size:16})," Accept — I can donate"]}),p.jsx(pn,{kind:"ghost",full:!0,onClick:m,disabled:c,children:"Can't donate right now"})]}),p.jsxs("p",{style:{fontFamily:Zr,fontSize:11.5,color:P.faint,textAlign:"center",marginTop:12},children:["Declining never affects your credits. ",i.donors_pinged||"—"," compatible donors were pinged."]}),a&&p.jsx("p",{style:{fontFamily:Zr,fontSize:12,color:P.arterial,textAlign:"center",marginTop:8},children:a}),p.jsx(Ls,{})]})}const Qr="'Public Sans', 'Segoe UI', system-ui, sans-serif",tc="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function gL(){const{requestId:t}=Gy(),e=en(),[n,i]=z.useState(null),[r,s]=z.useState(!0),[o,a]=z.useState(""),[l,c]=z.useState(!1),[u,f]=z.useState(!1);z.useEffect(()=>{h()},[t]);const h=async()=>{var g;try{const{data:d}=await pt.get("/donor/requests"),y=(g=(d.data||d).requests)==null?void 0:g.find(_=>_.id===t);i(y||null),y&&a(`RS-DONOR-${y.id}`)}catch{}finally{s(!1)}},m=()=>{if(!(n!=null&&n.latitude)||!(n!=null&&n.longitude))return;const g=`https://www.google.com/maps/dir/?api=1&destination=${n.latitude},${n.longitude}`;window.open(g,"_blank")},v=()=>{n!=null&&n.hospital_phone&&(window.location.href=`tel:${n.hospital_phone}`)},E=async()=>{var g,d;try{f(!0),await pt.post(`/donor/arrived/${t}`),c(!0)}catch(x){alert(((d=(g=x.response)==null?void 0:g.data)==null?void 0:d.error)||"Failed to mark arrival")}finally{f(!1)}};return r?p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:Qr},children:"Loading..."}):p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("button",{onClick:()=>e("/home"),style:{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,marginBottom:12,fontFamily:Qr,fontSize:13,color:P.mut},children:[p.jsx(Wo,{size:16})," Back to home"]}),p.jsxs(Ze,{style:{background:P.leafSoft,borderColor:"#CBE3D8",display:"flex",gap:10,alignItems:"center"},children:[p.jsx(qa,{size:22,color:P.leaf}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:tc,fontWeight:800,fontSize:15,margin:0,color:P.leaf},children:"You're confirmed — donor"}),p.jsx("p",{style:{fontFamily:Qr,fontSize:12.5,color:"#3E6B58",margin:"2px 0 0"},children:"The blood bank has been notified you're coming."})]})]}),p.jsxs(Ze,{style:{marginTop:12},children:[p.jsx("p",{style:{fontFamily:tc,fontWeight:800,fontSize:16,margin:0,color:P.ink},children:(n==null?void 0:n.hospital_name)||"Hospital"}),p.jsxs("p",{style:{fontFamily:Qr,fontSize:12.5,color:P.mut,margin:"3px 0 12px"},children:[(n==null?void 0:n.address)||""," · ref ",(n==null?void 0:n.ref_code)||"—"]}),p.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[p.jsxs(pn,{kind:"primary",small:!0,onClick:m,children:[p.jsx(eL,{size:14})," Directions"]}),p.jsxs(pn,{kind:"ghost",small:!0,onClick:v,children:[p.jsx(_m,{size:14})," Call blood bank"]}),p.jsx(pn,{kind:"primary",small:!0,onClick:E,disabled:l||u,children:l?"Arrived ✓":u?"Marking...":"I've Arrived"})]})]}),p.jsxs(Ze,{style:{marginTop:12},children:[p.jsx("p",{style:{fontFamily:Qr,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:".06em",margin:0},children:"Before you go"}),["Carry a photo ID (Aadhaar or DL)","Eat a proper meal, drink water","No alcohol in the last 24 hours"].map(g=>p.jsxs("p",{style:{fontFamily:Qr,fontSize:13.5,color:P.ink,margin:"9px 0 0",display:"flex",gap:8,alignItems:"center"},children:[p.jsx(qa,{size:15,color:P.leaf})," ",g]},g))]}),p.jsxs(Ze,{style:{marginTop:12,display:"flex",alignItems:"center",gap:14},children:[p.jsx("div",{style:{width:74,height:74,borderRadius:12,border:`1.5px solid ${P.line}`,display:"flex",alignItems:"center",justifyContent:"center",background:"#fff"},children:p.jsx(pS,{size:46,color:P.ink})}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:tc,fontWeight:700,fontSize:14.5,margin:0,color:P.ink},children:"Show this at the desk"}),p.jsx("p",{style:{fontFamily:Qr,fontSize:12.5,color:P.mut,margin:"3px 0 0"},children:"Staff will scan it to verify your donation."}),p.jsx("p",{style:{fontFamily:tc,fontWeight:800,fontSize:13,color:P.oxblood,margin:"6px 0 0"},children:"+100 credits on verification"})]})]}),p.jsx("div",{style:{marginTop:14},children:p.jsx(pn,{kind:"ghost",full:!0,onClick:()=>e("/home"),children:"Back to home"})}),p.jsx(Ls,{})]})}const vr="'Public Sans', 'Segoe UI', system-ui, sans-serif",nc="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function vL(){const[t,e]=z.useState(0),[n,i]=z.useState([]),[r,s]=z.useState(!0),[o,a]=z.useState("");z.useEffect(()=>{l()},[]);const l=async()=>{try{const{data:c}=await pt.get("/donor/credits"),u=c.data||c;e(u.balance||0),i(u.history||[])}catch{a("Failed to load credits")}finally{s(!1)}};return r?p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:vr},children:"Loading..."}):p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsx("h2",{style:{fontFamily:nc,fontWeight:800,fontSize:22,margin:0,color:P.ink},children:"Credits"}),p.jsx("p",{style:{fontFamily:vr,fontSize:13,color:P.mut,margin:"4px 0 14px"},children:"Your digital replacement card — no paper, no lost cards."}),p.jsxs(Ze,{style:{background:P.oxblood,borderColor:P.oxbloodDark},children:[p.jsx("p",{style:{fontFamily:vr,fontSize:11.5,color:"#E8B9C2",margin:0,textTransform:"uppercase",letterSpacing:".08em"},children:"Balance"}),p.jsx("p",{style:{fontFamily:nc,fontWeight:800,fontSize:42,color:"#fff",margin:"2px 0 0",lineHeight:1},children:t}),p.jsx("p",{style:{fontFamily:vr,fontSize:12.5,color:"#E8B9C2",margin:"10px 0 0"},children:"100 credits waive 1 replacement unit — for you or 4 registered family members."})]}),p.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[p.jsx(pn,{kind:"ghost",small:!0,full:!0,children:"Redeem for family"}),p.jsx(pn,{kind:"ghost",small:!0,full:!0,children:"Add family member"})]}),p.jsx("p",{style:{fontFamily:vr,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:".06em",margin:"18px 0 8px"},children:"Ledger"}),o&&p.jsx("p",{style:{fontFamily:vr,fontSize:12,color:P.arterial},children:o}),n.length===0?p.jsx(Ze,{children:p.jsx("p",{style:{fontFamily:vr,fontSize:13,color:P.mut,margin:0,textAlign:"center"},children:"No credit transactions yet. Donate to earn credits!"})}):n.map(c=>p.jsxs(Ze,{style:{marginBottom:8,padding:13,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:nc,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:c.description}),p.jsx("p",{style:{fontFamily:vr,fontSize:11.5,color:P.faint,margin:"2px 0 0"},children:new Date(c.created_at).toLocaleDateString()})]}),p.jsxs("span",{style:{fontFamily:nc,fontWeight:800,fontSize:15,color:c.type==="earned"?P.leaf:P.arterial},children:[c.type==="earned"?"+":"−",Math.abs(c.amount)]})]},c.id)),p.jsx(Ls,{})]})}function xL(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;s++)r[s]=i.charCodeAt(s);return r}function xS(){return typeof window<"u"&&"Notification"in window}async function yL(t,e,n={}){if(!xS())throw new Error("Notifications are not supported in this browser");let i=Notification.permission;if(i==="default"&&(i=await Notification.requestPermission()),i!=="granted")throw new Error("Notification permission denied");if("serviceWorker"in navigator){const r=await navigator.serviceWorker.ready.catch(()=>null);if(r!=null&&r.showNotification)return await r.showNotification(t,{body:e,icon:"/drop-icon.svg",badge:"/drop-icon.svg",...n}),{via:"serviceWorker"}}return new Notification(t,{body:e,icon:"/drop-icon.svg",...n}),{via:"Notification"}}async function _L(){var o;if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push messaging is not supported");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission denied");const{data:e}=await pt.get("/push/vapid-public-key"),n=(o=e.data)==null?void 0:o.publicKey;if(!n)throw new Error("VAPID public key not available");const i=await navigator.serviceWorker.ready;let r=await i.pushManager.getSubscription();r||(r=await i.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:xL(n)}));const s=r.toJSON();return await pt.post("/push/subscribe",{endpoint:s.endpoint,keys:s.keys}),{subscribed:!0}}async function SL(t){const{data:e}=await pt.post("/push/test",{body:t});return e}const Ei="'Public Sans', 'Segoe UI', system-ui, sans-serif",Un="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function EL(){const t=en(),{user:e,logout:n}=sr(),[i,r]=z.useState([]),[s,o]=z.useState(!0),[a,l]=z.useState((e==null?void 0:e.ping_radius_km)||10),[c,u]=z.useState(""),[f,h]=z.useState(!1);z.useEffect(()=>{m()},[]);const m=async()=>{try{const{data:w}=await pt.get("/donor/history"),T=w.data||w;r(T.donations||[])}catch{}finally{o(!1)}},v=async w=>{l(w);try{await pt.patch("/donor/profile",{ping_radius_km:w})}catch{}},E=(e==null?void 0:e.name)||"Donor",g=(e==null?void 0:e.blood_group)||"—",d=(e==null?void 0:e.is_verified)||!1,x=e==null?void 0:e.next_eligible_date,y=i.length,_=e!=null&&e.created_at?new Date(e.created_at).toLocaleDateString(void 0,{month:"short",year:"numeric"}):"—";return p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsx("h2",{style:{fontFamily:Un,fontWeight:800,fontSize:22,margin:0,color:P.ink},children:"Profile"}),p.jsxs(Ze,{style:{marginTop:14,display:"flex",gap:14,alignItems:"center"},children:[p.jsx("div",{style:{width:52,height:52,borderRadius:"50%",background:P.arterialSoft,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:Un,fontWeight:800,color:P.oxblood,fontSize:18},children:E.charAt(0).toUpperCase()}),p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:Un,fontWeight:800,fontSize:16,margin:0,color:P.ink},children:[E," · ",g]}),p.jsxs("p",{style:{fontFamily:Ei,fontSize:12.5,color:P.mut,margin:"2px 0 0"},children:["Donor since ",_," · ",y," donations · ",(e==null?void 0:e.city)||""]})]})]}),p.jsxs(Ze,{style:{marginTop:10,padding:13,display:"flex",gap:12,alignItems:"center"},children:[p.jsx(iL,{size:17,color:d?P.leaf:P.faint}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:Un,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:d?"Verified via Aadhaar OTP":"Verification pending"}),p.jsx("p",{style:{fontFamily:Ei,fontSize:12,color:P.faint,margin:"2px 0 0"},children:d?"Identity confirmed":"Complete Aadhaar verification to get full access"})]})]}),p.jsxs(Ze,{style:{marginTop:10,padding:13,display:"flex",gap:12,alignItems:"center"},children:[p.jsx(ym,{size:17,color:P.mut}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:Un,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:"Next eligible date"}),p.jsx("p",{style:{fontFamily:Ei,fontSize:12,color:P.faint,margin:"2px 0 0"},children:x?new Date(x).toLocaleDateString():"Eligible now (90-day gap complete)"})]})]}),p.jsxs(Ze,{style:{marginTop:10,padding:13,display:"flex",gap:12,alignItems:"center"},children:[p.jsx($3,{size:17,color:P.mut}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:Un,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:"Language"}),p.jsx("p",{style:{fontFamily:Ei,fontSize:12,color:P.faint,margin:"2px 0 0"},children:"English · ಕನ್ನಡ available"})]})]}),p.jsxs(Ze,{style:{marginTop:10,padding:13},children:[p.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",marginBottom:10},children:[p.jsx(au,{size:17,color:P.oxblood}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:Un,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:"Notifications"}),p.jsx("p",{style:{fontFamily:Ei,fontSize:12,color:P.faint,margin:"2px 0 0"},children:"Local alerts always; push when VAPID is configured"})]})]}),xS()?p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[p.jsx("button",{type:"button",disabled:f,onClick:async()=>{h(!0),u("");try{await yL("RaktaSetu","Local notification works — you can receive alerts on this device."),u("Local notification sent.")}catch(w){u(w.message||"Failed")}finally{h(!1)}},style:{fontFamily:Un,fontWeight:700,fontSize:12.5,padding:"10px 0",borderRadius:10,background:P.card,color:P.ink,border:`1px solid ${P.line}`,cursor:"pointer"},children:"Test local notification"}),p.jsx("button",{type:"button",disabled:f,onClick:async()=>{var w,T;h(!0),u("");try{await _L(),u("Push subscription saved.")}catch(b){u(((T=(w=b.response)==null?void 0:w.data)==null?void 0:T.error)||b.message||"Push unavailable")}finally{h(!1)}},style:{fontFamily:Un,fontWeight:700,fontSize:12.5,padding:"10px 0",borderRadius:10,background:P.oxblood,color:"#fff",border:"none",cursor:"pointer"},children:"Enable push notifications"}),p.jsx("button",{type:"button",disabled:f,onClick:async()=>{var w,T;h(!0),u("");try{await SL("Server push test from RaktaSetu"),u("Server push sent (check OS notification).")}catch(b){u(((T=(w=b.response)==null?void 0:w.data)==null?void 0:T.error)||b.message||"Server push unavailable")}finally{h(!1)}},style:{fontFamily:Un,fontWeight:700,fontSize:12.5,padding:"10px 0",borderRadius:10,background:P.card,color:P.mut,border:`1px solid ${P.line}`,cursor:"pointer"},children:"Test server push"}),c&&p.jsx("p",{style:{fontFamily:Ei,fontSize:12,color:P.mut,margin:0},children:c})]}):p.jsx("p",{style:{fontFamily:Ei,fontSize:12,color:P.faint,margin:0},children:"This browser does not support notifications."})]}),p.jsxs(Ze,{style:{marginTop:10,padding:13},children:[p.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",marginBottom:10},children:[p.jsx(au,{size:17,color:P.mut}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:Un,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:"Ping radius"}),p.jsx("p",{style:{fontFamily:Ei,fontSize:12,color:P.faint,margin:"2px 0 0"},children:"Critical requests may reach farther"})]})]}),p.jsx("div",{style:{display:"flex",gap:8},children:[3,5,10].map(w=>p.jsxs("button",{onClick:()=>v(w),style:{flex:1,fontFamily:Un,fontWeight:700,fontSize:12.5,padding:"9px 0",borderRadius:10,background:a===w?P.oxblood:P.card,color:a===w?"#fff":P.mut,border:`1px solid ${a===w?P.oxbloodDark:P.line}`,cursor:"pointer"},children:[w," km"]},w))})]}),p.jsxs(Ze,{style:{marginTop:10,padding:13,display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},onClick:()=>t("/history"),children:[p.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[p.jsx(X3,{size:17,color:P.mut}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:Un,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:"Donation history"}),p.jsxs("p",{style:{fontFamily:Ei,fontSize:12,color:P.faint,margin:"2px 0 0"},children:[y," donations recorded"]})]})]}),p.jsx(cS,{size:16,color:P.faint})]}),p.jsx("div",{style:{marginTop:20,textAlign:"center"},children:p.jsx("button",{onClick:()=>{n(),t("/login")},style:{fontFamily:Ei,fontSize:13,color:P.arterial,background:"none",border:"none",cursor:"pointer"},children:"Sign out"})}),p.jsx(Ls,{})]})}const es="'Public Sans', 'Segoe UI', system-ui, sans-serif",Zd="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function ML(){const t=en(),[e,n]=z.useState([]),[i,r]=z.useState(!0),[s,o]=z.useState("");z.useEffect(()=>{a()},[]);const a=async()=>{try{const{data:l}=await pt.get("/donor/history"),c=l.data||l;n(c.donations||[])}catch{o("Failed to load donation history")}finally{r(!1)}};return i?p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:es},children:"Loading..."}):p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("button",{onClick:()=>t("/profile"),style:{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,marginBottom:16,fontFamily:es,fontSize:13,color:P.mut},children:[p.jsx(Wo,{size:16})," Back to profile"]}),p.jsx("h2",{style:{fontFamily:Zd,fontWeight:800,fontSize:22,margin:0,color:P.ink},children:"Donation history"}),p.jsx("p",{style:{fontFamily:es,fontSize:13,color:P.mut,margin:"4px 0 14px"},children:"Your verified donations and earned credits"}),s&&p.jsx("p",{style:{fontFamily:es,fontSize:12,color:P.arterial},children:s}),e.length===0?p.jsx(Ze,{children:p.jsx("p",{style:{fontFamily:es,fontSize:13,color:P.mut,margin:0,textAlign:"center"},children:"No donations recorded yet. Accept a request to start saving lives!"})}):e.map(l=>p.jsx(Ze,{style:{marginBottom:10,padding:14},children:p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:Zd,fontWeight:700,fontSize:14,margin:0,color:P.ink},children:l.hospital_name||"Unknown hospital"}),p.jsxs("p",{style:{fontFamily:es,fontSize:12,color:P.mut,margin:"2px 0 0"},children:[l.blood_group," · ",l.units," unit",l.units>1?"s":""]}),p.jsxs("p",{style:{fontFamily:es,fontSize:11.5,color:P.faint,margin:"4px 0 0"},children:["Verified on ",new Date(l.verified_at).toLocaleDateString()]})]}),p.jsxs("span",{style:{fontFamily:Zd,fontWeight:800,fontSize:14,color:P.leaf},children:["+",l.credits_earned]})]})},l.id)),p.jsx(Ls,{})]})}const zi="'Public Sans', 'Segoe UI', system-ui, sans-serif",Qd="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function wL(){const t=en(),[e,n]=z.useState([]),[i,r]=z.useState(!0),[s,o]=z.useState(""),[a,l]=z.useState("list");z.useEffect(()=>{c()},[]);const c=async()=>{try{const{data:u}=await pt.get("/donor/requests"),f=u.data||u;n(f.requests||[])}catch{o("Failed to load requests")}finally{r(!1)}};return i?p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:zi},children:"Loading..."}):p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx("h2",{style:{fontFamily:Qd,fontWeight:800,fontSize:22,margin:0,color:P.ink},children:"Nearby requests"}),p.jsxs("div",{style:{display:"flex",gap:6,background:P.card,border:`1px solid ${P.line}`,borderRadius:10,padding:3},children:[p.jsxs("button",{onClick:()=>l("list"),style:{padding:"6px 10px",borderRadius:8,border:"none",cursor:"pointer",background:a==="list"?P.oxblood:"transparent",color:a==="list"?"#fff":P.mut,display:"flex",alignItems:"center",gap:4,fontFamily:zi,fontSize:12,fontWeight:600},children:[p.jsx(Y3,{size:14})," List"]}),p.jsxs("button",{onClick:()=>l("map"),style:{padding:"6px 10px",borderRadius:8,border:"none",cursor:"pointer",background:a==="map"?P.oxblood:"transparent",color:a==="map"?"#fff":P.mut,display:"flex",alignItems:"center",gap:4,fontFamily:zi,fontSize:12,fontWeight:600},children:[p.jsx(Z3,{size:14})," Map"]})]})]}),p.jsx("p",{style:{fontFamily:zi,fontSize:13,color:P.mut,margin:"4px 0 14px"},children:"Active blood requests near your location"}),s&&p.jsx("p",{style:{fontFamily:zi,fontSize:12,color:P.arterial},children:s}),e.length===0?p.jsx(Ze,{children:p.jsx("p",{style:{fontFamily:zi,fontSize:13,color:P.mut,margin:0,textAlign:"center"},children:"No active requests near you. Turn on your on-call toggle to get notified!"})}):e.map(u=>{var f;return p.jsx(Ze,{style:{marginBottom:10,cursor:"pointer"},onClick:()=>t(`/alert/${u.id}`),children:p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[p.jsx("span",{style:{fontFamily:Qd,fontWeight:800,fontSize:22,color:P.arterial},children:u.blood_group}),p.jsx("span",{style:{fontFamily:zi,fontSize:11,color:u.urgency==="critical"?P.arterial:u.urgency==="urgent"?P.gold:P.mut,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em"},children:u.urgency})]}),p.jsx("p",{style:{fontFamily:Qd,fontWeight:700,fontSize:14,margin:0,color:P.ink},children:u.hospital_name}),p.jsxs("p",{style:{fontFamily:zi,fontSize:12,color:P.mut,margin:"2px 0 0"},children:[u.hospital_address||u.address||u.hospital_name," · ",(f=u.distance_km)==null?void 0:f.toFixed(1)," km"]}),p.jsxs("p",{style:{fontFamily:zi,fontSize:12,color:P.faint,margin:"4px 0 0",display:"flex",alignItems:"center",gap:4},children:[p.jsx(ym,{size:12})," ",u.units_needed," units · ",u.needed_by?new Date(u.needed_by).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"ASAP"]})]}),p.jsx(dS,{size:18,color:P.faint})]})},u.id)}),p.jsx(Ls,{})]})}const Hi="'Public Sans', 'Segoe UI', system-ui, sans-serif",ic="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function TL(){const t=en(),e=jr(),{user:n,logout:i}=sr(),[r,s]=z.useState("board"),[o,a]=z.useState([]),[l,c]=z.useState(!0),[u,f]=z.useState("");z.useEffect(()=>{const v=e.pathname;v.includes("/new-request")?s("new"):v.includes("/verify")?s("verify"):s("board")},[e]),z.useEffect(()=>{h();const v=setInterval(h,15e3);return()=>clearInterval(v)},[]);const h=async()=>{try{const{data:v}=await pt.get("/hospital/dashboard"),E=v.data||v;a(E.requests||[])}catch{f("Failed to load live board")}finally{c(!1)}},m=[["board","/console","Live board"],["new","/console/new-request","New request"],["verify","/console/verify","Verify donor"]];return p.jsxs("div",{style:{minHeight:"100vh",background:P.consoleBg,color:"#F0EEE9",maxWidth:430,margin:"0 auto",position:"relative"},children:[p.jsxs("div",{style:{padding:"10px 16px 0",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx(vS,{size:22,dark:!0}),p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx("p",{style:{fontFamily:Hi,fontSize:12,color:P.consoleMut,margin:0},children:(n==null?void 0:n.name)||"Hospital"}),p.jsx("p",{style:{fontFamily:Hi,fontSize:10.5,color:"#5C6270",margin:0},children:"Blood bank console"})]})]}),p.jsx("div",{style:{display:"flex",gap:6,padding:"12px 16px 0"},children:m.map(([v,E,g])=>p.jsx("button",{onClick:()=>t(E),style:{fontFamily:ic,fontWeight:700,fontSize:12,padding:"7px 12px",borderRadius:99,cursor:"pointer",background:r===v?"#F0EEE9":"transparent",color:r===v?P.ink:P.consoleMut,border:`1px solid ${r===v?"#F0EEE9":P.consoleLine}`},children:g},v))}),r==="board"&&p.jsxs("div",{style:{padding:"16px 16px 20px"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[p.jsxs("p",{style:{fontFamily:Hi,fontSize:12,color:P.consoleMut,margin:0},children:["Live board · ",new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]}),p.jsx(No,{tone:"green",dark:!0,children:"Bank verified"})]}),l?p.jsx("p",{style:{fontFamily:Hi,fontSize:13,color:P.consoleMut,textAlign:"center"},children:"Loading..."}):u?p.jsx("p",{style:{fontFamily:Hi,fontSize:13,color:"#E4506B",textAlign:"center"},children:u}):o.length===0?p.jsx(Ze,{dark:!0,children:p.jsx("p",{style:{fontFamily:Hi,fontSize:13,color:P.consoleMut,margin:0,textAlign:"center"},children:"No active requests. Create a new request to find donors."})}):o.map(v=>p.jsxs(Ze,{dark:!0,style:{marginBottom:10},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[p.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[p.jsx("span",{style:{fontFamily:ic,fontWeight:800,fontSize:26,color:"#E4506B"},children:v.blood_group}),p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:ic,fontWeight:700,fontSize:14,margin:0,color:"#F0EEE9"},children:[v.units_needed," units · ref ",v.ref_code]}),p.jsxs("p",{style:{fontFamily:Hi,fontSize:11.5,color:P.consoleMut,margin:"2px 0 0"},children:["Broadcast ",new Date(v.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," · ",v.radius_km," km radius"]})]})]}),p.jsx(No,{tone:v.urgency==="critical"?"red":v.urgency==="urgent"?"gold":"line",dark:!0,children:v.urgency})]}),p.jsx("div",{style:{height:6,borderRadius:99,background:P.consoleLine,margin:"14px 0 8px",overflow:"hidden"},children:p.jsx("div",{style:{width:`${Math.min(100,v.filled_units/v.units_needed*100)}%`,height:"100%",background:"#E4506B"}})}),p.jsx("div",{style:{display:"flex",gap:14},children:[[v.donors_pinged||"0","pinged"],[v.accepted_count||"0","accepted"],[v.arrived_count||"0","arrived"],[`${v.filled_units||0} / ${v.units_needed}`,"collected"]].map(([E,g])=>p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:ic,fontWeight:800,fontSize:15,margin:0,color:"#F0EEE9"},children:E}),p.jsx("p",{style:{fontFamily:Hi,fontSize:10.5,color:P.consoleMut,margin:0,textTransform:"uppercase",letterSpacing:".05em"},children:g})]},g))})]},v.id)),p.jsx("div",{style:{marginTop:16,textAlign:"center"},children:p.jsx("button",{onClick:()=>{i(),t("/login")},style:{fontFamily:Hi,fontSize:13,color:"#E4506B",background:"none",border:"none",cursor:"pointer"},children:"Sign out"})})]})]})}const ts="'Public Sans', 'Segoe UI', system-ui, sans-serif",ns="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function AL(){const t=en(),[e,n]=z.useState("B+"),[i,r]=z.useState(2),[s,o]=z.useState("Critical"),[a,l]=z.useState(5),[c,u]=z.useState(!1),[f,h]=z.useState(!1),[m,v]=z.useState(""),[E,g]=z.useState(0),d=lA.includes(e),x=d?25:a;z.useEffect(()=>{g(((T,b)=>{const S=b===3?.35:b===5?.6:1,C=(nh[T]||[]).reduce((L,D)=>L+50,0);return Math.max(1,Math.round(C*S))})(e,x))},[e,x]);const y=async()=>{var w,T;h(!0),v("");try{await pt.post("/hospital/requests",{blood_group:e,units_needed:i,urgency:s.toLowerCase(),radius_km:x}),u(!0)}catch(b){v(((T=(w=b.response)==null?void 0:w.data)==null?void 0:T.error)||"Failed to broadcast request")}finally{h(!1)}},_=({children:w})=>p.jsx("p",{style:{fontFamily:ts,fontSize:11,color:P.consoleMut,textTransform:"uppercase",letterSpacing:".07em",margin:"16px 0 8px"},children:w});return c?p.jsxs("div",{style:{minHeight:"100vh",background:P.consoleBg,padding:"40px 20px",textAlign:"center",maxWidth:430,margin:"0 auto"},children:[p.jsx(qa,{size:44,color:"#3DBD8A",style:{margin:"0 auto"}}),p.jsx("p",{style:{fontFamily:ns,fontWeight:800,fontSize:18,color:"#F0EEE9",margin:"14px 0 4px"},children:"Request broadcast"}),p.jsxs("p",{style:{fontFamily:ts,fontSize:13,color:P.consoleMut,margin:0},children:[E," compatible donors pinged for ",e," within ",x," km. Track responses on the live board."]}),p.jsx("div",{style:{marginTop:18},children:p.jsx(pn,{kind:"ghost",dark:!0,small:!0,onClick:()=>u(!1),children:"New request"})}),p.jsx("div",{style:{marginTop:12},children:p.jsx(pn,{kind:"ghost",dark:!0,small:!0,onClick:()=>t("/console"),children:"Back to live board"})})]}):p.jsxs("div",{style:{minHeight:"100vh",background:P.consoleBg,padding:"14px 16px 20px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("button",{onClick:()=>t("/console"),style:{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,marginBottom:12,fontFamily:ts,fontSize:13,color:P.consoleMut},children:[p.jsx(Wo,{size:16})," Back to console"]}),p.jsx("p",{style:{fontFamily:ns,fontWeight:800,fontSize:18,color:"#F0EEE9",margin:"0 0 4px"},children:"New request"}),p.jsx("p",{style:{fontFamily:ts,fontSize:12,color:P.consoleMut,margin:"0 0 14px"},children:"Broadcast an emergency blood request to nearby donors"}),m&&p.jsx("p",{style:{fontFamily:ts,fontSize:12,color:"#E4506B",marginBottom:12},children:m}),p.jsx(_,{children:"Patient blood group"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},children:__.map(w=>p.jsx("button",{onClick:()=>n(w),style:{fontFamily:ns,fontWeight:800,fontSize:15,padding:"10px 0",borderRadius:10,background:e===w?P.arterial:P.consoleCard,color:e===w?"#fff":"#D8D5CF",border:`1px solid ${e===w?"#A50D26":P.consoleLine}`,cursor:"pointer"},children:w},w))}),d&&p.jsxs("p",{style:{fontFamily:ts,fontSize:12,color:"#D9B45C",margin:"8px 0 0",display:"flex",gap:6,alignItems:"center"},children:[p.jsx(sL,{size:13})," Rare group — radius auto-widens to 25 km, marked priority."]}),p.jsx(_,{children:"Units needed"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[p.jsx("button",{onClick:()=>r(Math.max(1,i-1)),style:{width:38,height:38,borderRadius:10,background:P.consoleCard,border:`1px solid ${P.consoleLine}`,color:"#D8D5CF",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(Q3,{size:16})}),p.jsx("span",{style:{fontFamily:ns,fontWeight:800,fontSize:24,color:"#F0EEE9",minWidth:28,textAlign:"center"},children:i}),p.jsx("button",{onClick:()=>r(Math.min(6,i+1)),style:{width:38,height:38,borderRadius:10,background:P.consoleCard,border:`1px solid ${P.consoleLine}`,color:"#D8D5CF",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(tL,{size:16})})]}),p.jsx(_,{children:"Urgency"}),p.jsx("div",{style:{display:"flex",gap:8},children:["Scheduled","Urgent","Critical"].map(w=>p.jsx("button",{onClick:()=>o(w),style:{flex:1,fontFamily:ns,fontWeight:700,fontSize:12.5,padding:"9px 0",borderRadius:10,background:s===w?w==="Critical"?P.arterial:"#3A3F4D":P.consoleCard,color:s===w?"#fff":"#B9B6B0",border:`1px solid ${s===w?w==="Critical"?"#A50D26":"#4A5061":P.consoleLine}`,cursor:"pointer"},children:w},w))}),p.jsx(_,{children:"Ping radius"}),p.jsx("div",{style:{display:"flex",gap:8},children:[3,5,10].map(w=>p.jsxs("button",{onClick:()=>l(w),disabled:d,style:{flex:1,fontFamily:ns,fontWeight:700,fontSize:12.5,padding:"9px 0",borderRadius:10,background:a===w?"#3A3F4D":P.consoleCard,color:a===w?"#fff":"#B9B6B0",border:`1px solid ${a===w?"#4A5061":P.consoleLine}`,cursor:d?"not-allowed":"pointer",opacity:d?.4:1},children:[w," km"]},w))}),p.jsxs("div",{style:{marginTop:18,background:"#232734",border:`1px solid ${P.consoleLine}`,borderRadius:12,padding:"12px 14px",display:"flex",gap:10,alignItems:"center"},children:[p.jsx(Jh,{size:17,color:"#8FB4E8"}),p.jsxs("p",{style:{fontFamily:ts,fontSize:13,color:"#D8D5CF",margin:0},children:["Will ping ",p.jsxs("b",{style:{fontFamily:ns},children:[E," compatible donors"]})," (",nh[e].join(", "),") on call within ",x," km."]})]}),p.jsx("div",{style:{marginTop:14},children:p.jsxs(pn,{kind:"critical",full:!0,onClick:y,disabled:f,children:[p.jsx(mS,{size:16})," ",f?"Broadcasting...":"Broadcast request"]})})]})}const xr="'Public Sans', 'Segoe UI', system-ui, sans-serif",ef="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function bL(){const t=en(),[e,n]=z.useState(""),[i,r]=z.useState(null),[s,o]=z.useState(!1),[a,l]=z.useState(""),[c,u]=z.useState(!1);z.useRef(null);const f=z.useRef(null),h=async()=>{var v,E;if(e.trim()){o(!0),l("");try{const{data:g}=await pt.get(`/hospital/requests?ref=${e.trim()}`),d=g.data||g;d.donor?r(d.donor):l("Donor not found")}catch(g){l(((E=(v=g.response)==null?void 0:v.data)==null?void 0:E.error)||"Failed to find donor")}finally{o(!1)}}},m=async()=>{var v,E;if(i){o(!0);try{await pt.post("/hospital/verify-donation",{donor_id:i.id,request_id:i.request_id}),u(!0)}catch(g){l(((E=(v=g.response)==null?void 0:v.data)==null?void 0:E.error)||"Failed to verify donation")}finally{o(!1)}}};return p.jsxs("div",{style:{minHeight:"100vh",background:P.consoleBg,padding:"14px 16px 20px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("button",{onClick:()=>t("/console"),style:{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,marginBottom:12,fontFamily:xr,fontSize:13,color:P.consoleMut},children:[p.jsx(Wo,{size:16})," Back to console"]}),p.jsx("p",{style:{fontFamily:ef,fontWeight:800,fontSize:18,color:"#F0EEE9",margin:"0 0 4px"},children:"Verify donor"}),p.jsx("p",{style:{fontFamily:xr,fontSize:12,color:P.consoleMut,margin:"0 0 14px"},children:"Scan QR code or enter reference code to verify donation"}),p.jsxs(Ze,{dark:!0,style:{display:"flex",flexDirection:"column",gap:14,alignItems:"center",padding:20},children:[p.jsx("div",{ref:f,style:{width:"100%",maxWidth:280,aspectRatio:"1",borderRadius:12,border:`1.5px dashed ${P.consoleLine}`,display:"flex",alignItems:"center",justifyContent:"center",background:P.consoleCard},children:p.jsx(pS,{size:48,color:"#F0EEE9"})}),p.jsx("p",{style:{fontFamily:xr,fontSize:12,color:P.consoleMut,margin:0,textAlign:"center"},children:"Camera access required for QR scanning. Use manual entry below as fallback."})]}),p.jsxs("div",{style:{marginTop:16},children:[p.jsx("p",{style:{fontFamily:xr,fontSize:11,color:P.consoleMut,textTransform:"uppercase",letterSpacing:".07em",margin:"0 0 8px"},children:"Or enter reference code"}),p.jsxs("div",{style:{display:"flex",gap:8},children:[p.jsx("input",{type:"text",placeholder:"e.g. RS-4821",value:e,onChange:v=>n(v.target.value),onKeyDown:v=>v.key==="Enter"&&h(),style:{flex:1,padding:"12px 14px",borderRadius:12,border:`1px solid ${P.consoleLine}`,fontFamily:xr,fontSize:15,background:P.consoleCard,color:"#F0EEE9"}}),p.jsx(pn,{kind:"ghost",dark:!0,small:!0,onClick:h,disabled:s,children:p.jsx(nL,{size:14})})]})]}),a&&p.jsx("p",{style:{fontFamily:xr,fontSize:12,color:"#E4506B",marginTop:12},children:a}),i&&p.jsxs(Ze,{dark:!0,style:{marginTop:16},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:ef,fontWeight:800,fontSize:16,margin:0,color:"#F0EEE9"},children:[i.name," · ",i.blood_group]}),p.jsxs("p",{style:{fontFamily:xr,fontSize:12,color:P.consoleMut,margin:"3px 0 0"},children:["Ref ",i.ref_code," · accepted ",new Date(i.responded_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," · Aadhaar verified"]})]}),p.jsx(No,{tone:"green",dark:!0,children:"Arrived"})]}),p.jsx("div",{style:{height:1,background:P.consoleLine,margin:"13px 0"}}),c?p.jsxs("p",{style:{fontFamily:ef,fontWeight:700,fontSize:14,color:"#3DBD8A",margin:0,display:"flex",gap:8,alignItems:"center"},children:[p.jsx(qa,{size:17})," Donation confirmed · 100 credits sent to donor"]}):p.jsx(pn,{kind:"green",full:!0,onClick:m,disabled:s,children:s?"Confirming...":"Confirm donation · credit 100 points"})]}),p.jsx("p",{style:{fontFamily:xr,fontSize:11.5,color:P.consoleMut,marginTop:12,lineHeight:1.5},children:"Confirmation closes the loop: donor credits are issued only after bank staff verify the collected unit — the digital version of stamping a donor card."})]})}const qt="'Public Sans', 'Segoe UI', system-ui, sans-serif",qn="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function CL(){const t=en(),{logout:e}=sr(),[n,i]=z.useState(null),[r,s]=z.useState([]),[o,a]=z.useState([]),[l,c]=z.useState(!0),[u,f]=z.useState(""),[h,m]=z.useState("overview");z.useEffect(()=>{v()},[]);const v=async()=>{var y,_,w,T;try{const[b,S,C]=await Promise.all([pt.get("/admin/stats"),pt.get("/admin/users"),pt.get("/admin/requests")]);i(((y=b.data.data)==null?void 0:y.stats)||b.data.stats),s(((_=S.data.data)==null?void 0:_.users)||S.data.users||[]),a(((w=C.data.data)==null?void 0:w.requests)||C.data.requests||[])}catch(b){f("Failed to load admin data"),((T=b.response)==null?void 0:T.status)===403&&(e(),t("/login"))}finally{c(!1)}};if(l)return p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:qt,color:P.mut},children:"Loading admin dashboard..."});const E=r.filter(y=>y.role==="donor"),g=r.filter(y=>y.role==="hospital"),d=o.filter(y=>y.status==="open"),x=o.filter(y=>y.status==="filled");return p.jsxs("div",{style:{minHeight:"100vh",background:"#0F1115",color:"#F0EEE9",maxWidth:900,margin:"0 auto",padding:"20px 24px 40px"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[p.jsx("button",{onClick:()=>t("/admin"),style:{background:"none",border:"none",cursor:"pointer",color:"#8B909C"},title:"Admin home","aria-label":"Admin home",children:p.jsx(Wo,{size:20})}),p.jsx("h1",{style:{fontFamily:qn,fontWeight:800,fontSize:22,margin:0,color:"#F0EEE9"},children:"Admin Console"})]}),p.jsxs("button",{onClick:()=>{e(),t("/login")},style:{background:"none",border:"none",cursor:"pointer",color:"#E4506B",display:"flex",alignItems:"center",gap:6,fontFamily:qt,fontSize:13},children:[p.jsx(K3,{size:16})," Sign out"]})]}),u&&p.jsx("p",{style:{fontFamily:qt,fontSize:13,color:"#E4506B",marginBottom:16},children:u}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:12,marginBottom:24},children:[p.jsx(Ze,{dark:!0,style:{background:"#1D2028",borderColor:"#2B2F3A"},children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[p.jsx(Jh,{size:20,color:"#3DBD8A"}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:qt,fontSize:11,color:"#8B909C",margin:0},children:"Total Donors"}),p.jsx("p",{style:{fontFamily:qn,fontWeight:800,fontSize:28,margin:"2px 0 0",color:"#F0EEE9"},children:(n==null?void 0:n.total_donors)||0})]})]})}),p.jsx(Ze,{dark:!0,style:{background:"#1D2028",borderColor:"#2B2F3A"},children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[p.jsx(Mv,{size:20,color:"#8FB4E8"}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:qt,fontSize:11,color:"#8B909C",margin:0},children:"Hospitals"}),p.jsx("p",{style:{fontFamily:qn,fontWeight:800,fontSize:28,margin:"2px 0 0",color:"#F0EEE9"},children:(n==null?void 0:n.total_hospitals)||0})]})]})}),p.jsx(Ze,{dark:!0,style:{background:"#1D2028",borderColor:"#2B2F3A"},children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[p.jsx($a,{size:20,color:"#E4506B"}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:qt,fontSize:11,color:"#8B909C",margin:0},children:"Active Requests"}),p.jsx("p",{style:{fontFamily:qn,fontWeight:800,fontSize:28,margin:"2px 0 0",color:"#F0EEE9"},children:(n==null?void 0:n.active_requests)||0})]})]})}),p.jsx(Ze,{dark:!0,style:{background:"#1D2028",borderColor:"#2B2F3A"},children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[p.jsx(uS,{size:20,color:"#D9B45C"}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:qt,fontSize:11,color:"#8B909C",margin:0},children:"Credits Earned"}),p.jsx("p",{style:{fontFamily:qn,fontWeight:800,fontSize:28,margin:"2px 0 0",color:"#F0EEE9"},children:(n==null?void 0:n.total_credits_earned)||0})]})]})})]}),p.jsx("div",{style:{display:"flex",gap:8,marginBottom:16,borderBottom:"1px solid #2B2F3A",paddingBottom:12},children:[["overview","Overview",W3],["donors",`Donors (${E.length})`,Jh],["hospitals",`Hospitals (${g.length})`,Mv],["requests",`Requests (${o.length})`,$a]].map(([y,_,w])=>p.jsxs("button",{onClick:()=>m(y),style:{fontFamily:qn,fontWeight:700,fontSize:13,padding:"8px 14px",borderRadius:10,cursor:"pointer",background:h===y?"#F0EEE9":"transparent",color:h===y?"#17151A":"#8B909C",border:"none",display:"flex",alignItems:"center",gap:6},children:[p.jsx(w,{size:14})," ",_]},y))}),h==="overview"&&p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:qt,fontSize:13,color:"#8B909C",marginBottom:12},children:["Platform summary · ",o.length," total requests · ",(n==null?void 0:n.total_donations)||0," verified donations"]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12},children:[p.jsxs("div",{style:{background:"#1D2028",borderRadius:12,padding:14,border:"1px solid #2B2F3A"},children:[p.jsx("p",{style:{fontFamily:qn,fontWeight:800,fontSize:24,margin:0,color:"#E4506B"},children:d.length}),p.jsx("p",{style:{fontFamily:qt,fontSize:12,color:"#8B909C",margin:"4px 0 0"},children:"Open requests"})]}),p.jsxs("div",{style:{background:"#1D2028",borderRadius:12,padding:14,border:"1px solid #2B2F3A"},children:[p.jsx("p",{style:{fontFamily:qn,fontWeight:800,fontSize:24,margin:0,color:"#3DBD8A"},children:x.length}),p.jsx("p",{style:{fontFamily:qt,fontSize:12,color:"#8B909C",margin:"4px 0 0"},children:"Filled requests"})]}),p.jsxs("div",{style:{background:"#1D2028",borderRadius:12,padding:14,border:"1px solid #2B2F3A"},children:[p.jsx("p",{style:{fontFamily:qn,fontWeight:800,fontSize:24,margin:0,color:"#D9B45C"},children:r.length}),p.jsx("p",{style:{fontFamily:qt,fontSize:12,color:"#8B909C",margin:"4px 0 0"},children:"Total users"})]})]})]}),h==="donors"&&p.jsx("div",{children:E.map(y=>p.jsxs(Ze,{dark:!0,style:{marginBottom:8,padding:12,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:qn,fontWeight:700,fontSize:14,margin:0,color:"#F0EEE9"},children:[y.name," · ",y.blood_group]}),p.jsxs("p",{style:{fontFamily:qt,fontSize:12,color:"#8B909C",margin:"2px 0 0"},children:[y.phone," · ",y.city," · ",y.is_on_call?"On call":"Off call"]})]}),p.jsx("span",{style:{fontFamily:qt,fontSize:11,color:y.is_verified?"#3DBD8A":"#8B909C",padding:"4px 10px",borderRadius:8,background:y.is_verified?"#0F6B4A22":"#2B2F3A"},children:y.is_verified?"Verified":"Pending"})]},y.id))}),h==="hospitals"&&p.jsx("div",{children:g.map(y=>p.jsxs(Ze,{dark:!0,style:{marginBottom:8,padding:12,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:qn,fontWeight:700,fontSize:14,margin:0,color:"#F0EEE9"},children:y.name}),p.jsxs("p",{style:{fontFamily:qt,fontSize:12,color:"#8B909C",margin:"2px 0 0"},children:[y.phone," · ",y.city]})]}),p.jsx("span",{style:{fontFamily:qt,fontSize:11,color:y.is_verified?"#3DBD8A":"#8B909C",padding:"4px 10px",borderRadius:8,background:y.is_verified?"#0F6B4A22":"#2B2F3A"},children:y.is_verified?"Verified":"Pending"})]},y.id))}),h==="requests"&&p.jsx("div",{children:o.map(y=>p.jsx(Ze,{dark:!0,style:{marginBottom:8,padding:12},children:p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:qn,fontWeight:800,fontSize:16,margin:0,color:"#E4506B"},children:[y.blood_group," · ",y.units_needed," units"]}),p.jsxs("p",{style:{fontFamily:qt,fontSize:12,color:"#8B909C",margin:"3px 0 0"},children:["Ref: ",y.ref_code," · ",y.urgency," · ",y.status]})]}),p.jsx("span",{style:{fontFamily:qt,fontSize:11,color:y.status==="open"?"#E4506B":"#3DBD8A",padding:"4px 10px",borderRadius:8,background:y.status==="open"?"#E4506B22":"#0F6B4A22"},children:y.status})]})},y.id))})]})}console.log("[RaktaSetu] Version:",sA,"API:",rm);const RL=new Set(["/","/login","/register","/privacy"]);function rc(t){return t?t.role==="hospital"?"/console":t.role==="admin"?"/admin":"/home":"/login"}function PL(){const{user:t,loading:e}=sr(),n=jr(),i=n.pathname.startsWith("/admin"),r=RL.has(n.pathname),s=n.pathname==="/"||n.pathname==="/login";return e&&!r?p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontFamily:"'Public Sans', 'Segoe UI', system-ui, sans-serif",color:P.mut,background:P.porcelain},children:"Loading RaktaSetu..."}):p.jsx("div",{style:{fontFamily:"'Public Sans', 'Segoe UI', system-ui, sans-serif",background:s?"#0A0506":P.porcelain,minHeight:"100vh",color:P.ink},children:p.jsx("div",{style:{maxWidth:i||s?"100%":430,margin:"0 auto",minHeight:"100vh",position:"relative"},children:p.jsxs(XM,{children:[p.jsx($t,{path:"/",element:t?p.jsx(uo,{to:rc(t),replace:!0}):p.jsx(z3,{})}),p.jsx($t,{path:"/login",element:t?p.jsx(uo,{to:rc(t),replace:!0}):p.jsx(lL,{})}),p.jsx($t,{path:"/register",element:t?p.jsx(uo,{to:rc(t),replace:!0}):p.jsx(cL,{})}),p.jsx($t,{path:"/privacy",element:p.jsx(uL,{})}),p.jsx($t,{path:"/home",element:p.jsx(ii,{user:t,role:"donor",children:p.jsx(pL,{})})}),p.jsx($t,{path:"/alert/:requestId",element:p.jsx(ii,{user:t,role:"donor",children:p.jsx(mL,{})})}),p.jsx($t,{path:"/on-the-way/:requestId",element:p.jsx(ii,{user:t,role:"donor",children:p.jsx(gL,{})})}),p.jsx($t,{path:"/credits",element:p.jsx(ii,{user:t,role:"donor",children:p.jsx(vL,{})})}),p.jsx($t,{path:"/profile",element:p.jsx(ii,{user:t,role:"donor",children:p.jsx(EL,{})})}),p.jsx($t,{path:"/history",element:p.jsx(ii,{user:t,role:"donor",children:p.jsx(ML,{})})}),p.jsx($t,{path:"/requests",element:p.jsx(ii,{user:t,role:"donor",children:p.jsx(wL,{})})}),p.jsx($t,{path:"/console",element:p.jsx(ii,{user:t,role:"hospital",children:p.jsx(TL,{})})}),p.jsx($t,{path:"/console/new-request",element:p.jsx(ii,{user:t,role:"hospital",children:p.jsx(AL,{})})}),p.jsx($t,{path:"/console/verify",element:p.jsx(ii,{user:t,role:"hospital",children:p.jsx(bL,{})})}),p.jsx($t,{path:"/admin",element:p.jsx(ii,{user:t,role:"admin",children:p.jsx(CL,{})})}),p.jsx($t,{path:"*",element:p.jsx(uo,{to:t?rc(t):"/",replace:!0})})]})})})}try{ow({immediate:!0})}catch(t){console.warn("[RaktaSetu] SW register skipped:",t)}try{const t=document.getElementById("root");if(!t)throw new Error("Root element #root not found in DOM");console.log("[RaktaSetu] main.jsx executing, root found:",!!t),tf.createRoot(t).render(p.jsx(np.StrictMode,{children:p.jsx(QM,{children:p.jsx(aA,{children:p.jsx(PL,{})})})})),console.log("[RaktaSetu] React render called successfully")}catch(t){console.error("[RaktaSetu] FATAL render error:",t);const e=document.getElementById("error-log");e&&(e.style.display="block",e.textContent="FATAL RENDER ERROR: "+(t.message||t)+`

`+(t.stack||"No stack trace"));const n=document.getElementById("root");n&&(n.innerHTML='<div style="padding:40px; font-family:system-ui; color:#7A1626;"><h2>RaktaSetu failed to load</h2><p style="color:#333; white-space:pre-wrap; font-family:monospace; font-size:13px;">'+(t.message||t)+"</p><p>Please check the browser console for details.</p></div>")}
//# sourceMappingURL=index-DgFXe73T.js.map
