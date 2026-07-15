function IS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function NS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Px={exports:{}},uu={},Lx={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ja=Symbol.for("react.element"),FS=Symbol.for("react.portal"),US=Symbol.for("react.fragment"),OS=Symbol.for("react.strict_mode"),kS=Symbol.for("react.profiler"),BS=Symbol.for("react.provider"),zS=Symbol.for("react.context"),HS=Symbol.for("react.forward_ref"),VS=Symbol.for("react.suspense"),GS=Symbol.for("react.memo"),WS=Symbol.for("react.lazy"),Bm=Symbol.iterator;function jS(t){return t===null||typeof t!="object"?null:(t=Bm&&t[Bm]||t["@@iterator"],typeof t=="function"?t:null)}var Dx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ix=Object.assign,Nx={};function Oo(t,e,n){this.props=t,this.context=e,this.refs=Nx,this.updater=n||Dx}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fx(){}Fx.prototype=Oo.prototype;function np(t,e,n){this.props=t,this.context=e,this.refs=Nx,this.updater=n||Dx}var ip=np.prototype=new Fx;ip.constructor=np;Ix(ip,Oo.prototype);ip.isPureReactComponent=!0;var zm=Array.isArray,Ux=Object.prototype.hasOwnProperty,rp={current:null},Ox={key:!0,ref:!0,__self:!0,__source:!0};function kx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ux.call(e,i)&&!Ox.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ja,type:t,key:s,ref:o,props:r,_owner:rp.current}}function XS(t,e){return{$$typeof:Ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ja}function qS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hm=/\/+/g;function ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qS(""+t.key):e.toString(36)}function oc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ja:case FS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ku(o,0):i,zm(r)?(n="",t!=null&&(n=t.replace(Hm,"$&/")+"/"),oc(r,e,n,"",function(c){return c})):r!=null&&(sp(r)&&(r=XS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Hm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",zm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ku(s,a);o+=oc(s,e,n,l,r)}else if(l=jS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ku(s,a++),o+=oc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(t,e,n){if(t==null)return t;var i=[],r=0;return oc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $S(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},ac={transition:null},YS={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:ac,ReactCurrentOwner:rp};function Bx(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:dl,forEach:function(t,e,n){dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!sp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Oo;Ke.Fragment=US;Ke.Profiler=kS;Ke.PureComponent=np;Ke.StrictMode=OS;Ke.Suspense=VS;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YS;Ke.act=Bx;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ix({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ux.call(e,l)&&!Ox.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ja,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:zS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:BS,_context:t},t.Consumer=t};Ke.createElement=kx;Ke.createFactory=function(t){var e=kx.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:HS,render:t}};Ke.isValidElement=sp;Ke.lazy=function(t){return{$$typeof:WS,_payload:{_status:-1,_result:t},_init:$S}};Ke.memo=function(t,e){return{$$typeof:GS,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=ac.transition;ac.transition={};try{t()}finally{ac.transition=e}};Ke.unstable_act=Bx;Ke.useCallback=function(t,e){return Sn.current.useCallback(t,e)};Ke.useContext=function(t){return Sn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return Sn.current.useEffect(t,e)};Ke.useId=function(){return Sn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return Sn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};Ke.useRef=function(t){return Sn.current.useRef(t)};Ke.useState=function(t){return Sn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return Sn.current.useTransition()};Ke.version="18.3.1";Lx.exports=Ke;var z=Lx.exports;const op=NS(z),KS=IS({__proto__:null,default:op},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JS=z,ZS=Symbol.for("react.element"),QS=Symbol.for("react.fragment"),e1=Object.prototype.hasOwnProperty,t1=JS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n1={key:!0,ref:!0,__self:!0,__source:!0};function zx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)e1.call(e,i)&&!n1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ZS,type:t,key:s,ref:o,props:r,_owner:t1.current}}uu.Fragment=QS;uu.jsx=zx;uu.jsxs=zx;Px.exports=uu;var p=Px.exports,nf={},Hx={exports:{}},Wn={},Vx={exports:{}},Gx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,K){var Z=O.length;O.push(K);e:for(;0<Z;){var ne=Z-1>>>1,le=O[ne];if(0<r(le,K))O[ne]=K,O[Z]=le,Z=ne;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var K=O[0],Z=O.pop();if(Z!==K){O[0]=Z;e:for(var ne=0,le=O.length,Be=le>>>1;ne<Be;){var Xe=2*(ne+1)-1,Ce=O[Xe],G=Xe+1,oe=O[G];if(0>r(Ce,Z))G<le&&0>r(oe,Ce)?(O[ne]=oe,O[G]=Z,ne=G):(O[ne]=Ce,O[Xe]=Z,ne=Xe);else if(G<le&&0>r(oe,Z))O[ne]=oe,O[G]=Z,ne=G;else break e}}return K}function r(O,K){var Z=O.sortIndex-K.sortIndex;return Z!==0?Z:O.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,m=!1,x=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=O)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function S(O){if(E=!1,y(O),!x)if(n(l)!==null)x=!0,J(w);else{var K=n(c);K!==null&&W(S,K.startTime-O)}}function w(O,K){x=!1,E&&(E=!1,d(_),_=-1),m=!0;var Z=h;try{for(y(K),f=n(l);f!==null&&(!(f.expirationTime>K)||O&&!D());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var le=ne(f.expirationTime<=K);K=t.unstable_now(),typeof le=="function"?f.callback=le:f===n(l)&&i(l),y(K)}else i(l);f=n(l)}if(f!==null)var Be=!0;else{var Xe=n(c);Xe!==null&&W(S,Xe.startTime-K),Be=!1}return Be}finally{f=null,h=Z,m=!1}}var T=!1,A=null,_=-1,C=5,L=-1;function D(){return!(t.unstable_now()-L<C)}function B(){if(A!==null){var O=t.unstable_now();L=O;var K=!0;try{K=A(!0,O)}finally{K?j():(T=!1,A=null)}}else T=!1}var j;if(typeof v=="function")j=function(){v(B)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,H=te.port2;te.port1.onmessage=B,j=function(){H.postMessage(null)}}else j=function(){g(B,0)};function J(O){A=O,T||(T=!0,j())}function W(O,K){_=g(function(){O(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,J(w))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var Z=h;h=K;try{return O()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=h;h=O;try{return K()}finally{h=Z}},t.unstable_scheduleCallback=function(O,K,Z){var ne=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ne+Z:ne):Z=ne,O){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Z+le,O={id:u++,callback:K,priorityLevel:O,startTime:Z,expirationTime:le,sortIndex:-1},Z>ne?(O.sortIndex=Z,e(c,O),n(l)===null&&O===n(c)&&(E?(d(_),_=-1):E=!0,W(S,Z-ne))):(O.sortIndex=le,e(l,O),x||m||(x=!0,J(w))),O},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(O){var K=h;return function(){var Z=h;h=K;try{return O.apply(this,arguments)}finally{h=Z}}}})(Gx);Vx.exports=Gx;var i1=Vx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1=z,Gn=i1;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wx=new Set,ba={};function Rs(t,e){Mo(t,e),Mo(t+"Capture",e)}function Mo(t,e){for(ba[t]=e,t=0;t<e.length;t++)Wx.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=Object.prototype.hasOwnProperty,s1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vm={},Gm={};function o1(t){return rf.call(Gm,t)?!0:rf.call(Vm,t)?!1:s1.test(t)?Gm[t]=!0:(Vm[t]=!0,!1)}function a1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l1(t,e,n,i){if(e===null||typeof e>"u"||a1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function En(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){en[t]=new En(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];en[e]=new En(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){en[t]=new En(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){en[t]=new En(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){en[t]=new En(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){en[t]=new En(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){en[t]=new En(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){en[t]=new En(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){en[t]=new En(t,5,!1,t.toLowerCase(),null,!1,!1)});var ap=/[\-:]([a-z])/g;function lp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ap,lp);en[e]=new En(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ap,lp);en[e]=new En(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ap,lp);en[e]=new En(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){en[t]=new En(t,1,!1,t.toLowerCase(),null,!1,!1)});en.xlinkHref=new En("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){en[t]=new En(t,1,!1,t.toLowerCase(),null,!0,!0)});function cp(t,e,n,i){var r=en.hasOwnProperty(e)?en[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l1(e,n,r,i)&&(n=null),i||r===null?o1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var or=r1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fl=Symbol.for("react.element"),eo=Symbol.for("react.portal"),to=Symbol.for("react.fragment"),up=Symbol.for("react.strict_mode"),sf=Symbol.for("react.profiler"),jx=Symbol.for("react.provider"),Xx=Symbol.for("react.context"),dp=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),af=Symbol.for("react.suspense_list"),fp=Symbol.for("react.memo"),Mr=Symbol.for("react.lazy"),qx=Symbol.for("react.offscreen"),Wm=Symbol.iterator;function qo(t){return t===null||typeof t!="object"?null:(t=Wm&&t[Wm]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Object.assign,Bu;function ca(t){if(Bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bu=e&&e[1]||""}return`
`+Bu+t}var zu=!1;function Hu(t,e){if(!t||zu)return"";zu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{zu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function c1(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=Hu(t.type,!1),t;case 11:return t=Hu(t.type.render,!1),t;case 1:return t=Hu(t.type,!0),t;default:return""}}function lf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case to:return"Fragment";case eo:return"Portal";case sf:return"Profiler";case up:return"StrictMode";case of:return"Suspense";case af:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xx:return(t.displayName||"Context")+".Consumer";case jx:return(t._context.displayName||"Context")+".Provider";case dp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fp:return e=t.displayName||null,e!==null?e:lf(t.type)||"Memo";case Mr:e=t._payload,t=t._init;try{return lf(t(e))}catch{}}return null}function u1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lf(e);case 8:return e===up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $x(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d1(t){var e=$x(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hl(t){t._valueTracker||(t._valueTracker=d1(t))}function Yx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$x(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cf(t,e){var n=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kx(t,e){e=e.checked,e!=null&&cp(t,"checked",e,!1)}function uf(t,e){Kx(t,e);var n=Vr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?df(t,e.type,n):e.hasOwnProperty("defaultValue")&&df(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function df(t,e,n){(e!=="number"||Ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function po(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ff(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(ua(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function Jx(t,e){var n=Vr(e.value),i=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function $m(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pl,Qx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pl=pl||document.createElement("div"),pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f1=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){f1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function ev(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function tv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ev(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var h1=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pf(t,e){if(e){if(h1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gf=null;function hp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xf=null,mo=null,go=null;function Ym(t){if(t=el(t)){if(typeof xf!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=mu(e),xf(t.stateNode,t.type,e))}}function nv(t){mo?go?go.push(t):go=[t]:mo=t}function iv(){if(mo){var t=mo,e=go;if(go=mo=null,Ym(t),e)for(t=0;t<e.length;t++)Ym(e[t])}}function rv(t,e){return t(e)}function sv(){}var Vu=!1;function ov(t,e,n){if(Vu)return t(e,n);Vu=!0;try{return rv(t,e,n)}finally{Vu=!1,(mo!==null||go!==null)&&(sv(),iv())}}function Ca(t,e){var n=t.stateNode;if(n===null)return null;var i=mu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var vf=!1;if(er)try{var $o={};Object.defineProperty($o,"passive",{get:function(){vf=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{vf=!1}function p1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ga=!1,Cc=null,Rc=!1,yf=null,m1={onError:function(t){ga=!0,Cc=t}};function g1(t,e,n,i,r,s,o,a,l){ga=!1,Cc=null,p1.apply(m1,arguments)}function x1(t,e,n,i,r,s,o,a,l){if(g1.apply(this,arguments),ga){if(ga){var c=Cc;ga=!1,Cc=null}else throw Error(ce(198));Rc||(Rc=!0,yf=c)}}function Ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Km(t){if(Ps(t)!==t)throw Error(ce(188))}function v1(t){var e=t.alternate;if(!e){if(e=Ps(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Km(r),t;if(s===i)return Km(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function lv(t){return t=v1(t),t!==null?cv(t):null}function cv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cv(t);if(e!==null)return e;t=t.sibling}return null}var uv=Gn.unstable_scheduleCallback,Jm=Gn.unstable_cancelCallback,y1=Gn.unstable_shouldYield,_1=Gn.unstable_requestPaint,Nt=Gn.unstable_now,S1=Gn.unstable_getCurrentPriorityLevel,pp=Gn.unstable_ImmediatePriority,dv=Gn.unstable_UserBlockingPriority,Pc=Gn.unstable_NormalPriority,E1=Gn.unstable_LowPriority,fv=Gn.unstable_IdlePriority,du=null,Pi=null;function M1(t){if(Pi&&typeof Pi.onCommitFiberRoot=="function")try{Pi.onCommitFiberRoot(du,t,void 0,(t.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:b1,w1=Math.log,T1=Math.LN2;function b1(t){return t>>>=0,t===0?32:31-(w1(t)/T1|0)|0}var ml=64,gl=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=da(a):(s&=o,s!==0&&(i=da(s)))}else o=n&~r,o!==0?i=da(o):s!==0&&(i=da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-pi(e),r=1<<n,i|=t[n],e&=~r;return i}function A1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=A1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hv(){var t=ml;return ml<<=1,!(ml&4194240)&&(ml=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pi(e),t[e]=n}function R1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-pi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function mp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-pi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function pv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mv,gp,gv,xv,vv,Sf=!1,xl=[],Ir=null,Nr=null,Fr=null,Ra=new Map,Pa=new Map,br=[],P1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zm(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(e.pointerId)}}function Yo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=el(e),e!==null&&gp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function L1(t,e,n,i,r){switch(e){case"focusin":return Ir=Yo(Ir,t,e,n,i,r),!0;case"dragenter":return Nr=Yo(Nr,t,e,n,i,r),!0;case"mouseover":return Fr=Yo(Fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ra.set(s,Yo(Ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Pa.set(s,Yo(Pa.get(s)||null,t,e,n,i,r)),!0}return!1}function yv(t){var e=ds(t.target);if(e!==null){var n=Ps(e);if(n!==null){if(e=n.tag,e===13){if(e=av(n),e!==null){t.blockedOn=e,vv(t.priority,function(){gv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ef(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gf=i,n.target.dispatchEvent(i),gf=null}else return e=el(n),e!==null&&gp(e),t.blockedOn=n,!1;e.shift()}return!0}function Qm(t,e,n){lc(t)&&n.delete(e)}function D1(){Sf=!1,Ir!==null&&lc(Ir)&&(Ir=null),Nr!==null&&lc(Nr)&&(Nr=null),Fr!==null&&lc(Fr)&&(Fr=null),Ra.forEach(Qm),Pa.forEach(Qm)}function Ko(t,e){t.blockedOn===e&&(t.blockedOn=null,Sf||(Sf=!0,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,D1)))}function La(t){function e(r){return Ko(r,t)}if(0<xl.length){Ko(xl[0],t);for(var n=1;n<xl.length;n++){var i=xl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ir!==null&&Ko(Ir,t),Nr!==null&&Ko(Nr,t),Fr!==null&&Ko(Fr,t),Ra.forEach(e),Pa.forEach(e),n=0;n<br.length;n++)i=br[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<br.length&&(n=br[0],n.blockedOn===null);)yv(n),n.blockedOn===null&&br.shift()}var xo=or.ReactCurrentBatchConfig,Dc=!0;function I1(t,e,n,i){var r=ct,s=xo.transition;xo.transition=null;try{ct=1,xp(t,e,n,i)}finally{ct=r,xo.transition=s}}function N1(t,e,n,i){var r=ct,s=xo.transition;xo.transition=null;try{ct=4,xp(t,e,n,i)}finally{ct=r,xo.transition=s}}function xp(t,e,n,i){if(Dc){var r=Ef(t,e,n,i);if(r===null)Qu(t,e,i,Ic,n),Zm(t,i);else if(L1(r,t,e,n,i))i.stopPropagation();else if(Zm(t,i),e&4&&-1<P1.indexOf(t)){for(;r!==null;){var s=el(r);if(s!==null&&mv(s),s=Ef(t,e,n,i),s===null&&Qu(t,e,i,Ic,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Qu(t,e,i,null,n)}}var Ic=null;function Ef(t,e,n,i){if(Ic=null,t=hp(i),t=ds(t),t!==null)if(e=Ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=av(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ic=t,null}function _v(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S1()){case pp:return 1;case dv:return 4;case Pc:case E1:return 16;case fv:return 536870912;default:return 16}default:return 16}}var Rr=null,vp=null,cc=null;function Sv(){if(cc)return cc;var t,e=vp,n=e.length,i,r="value"in Rr?Rr.value:Rr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return cc=r.slice(t,1<i?1-i:void 0)}function uc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function eg(){return!1}function jn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vl:eg,this.isPropagationStopped=eg,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yp=jn(ko),Qa=Ct({},ko,{view:0,detail:0}),F1=jn(Qa),Wu,ju,Jo,fu=Ct({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Jo&&(Jo&&t.type==="mousemove"?(Wu=t.screenX-Jo.screenX,ju=t.screenY-Jo.screenY):ju=Wu=0,Jo=t),Wu)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),tg=jn(fu),U1=Ct({},fu,{dataTransfer:0}),O1=jn(U1),k1=Ct({},Qa,{relatedTarget:0}),Xu=jn(k1),B1=Ct({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),z1=jn(B1),H1=Ct({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V1=jn(H1),G1=Ct({},ko,{data:0}),ng=jn(G1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=X1[t])?!!e[t]:!1}function _p(){return q1}var $1=Ct({},Qa,{key:function(t){if(t.key){var e=W1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?j1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_p,charCode:function(t){return t.type==="keypress"?uc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y1=jn($1),K1=Ct({},fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ig=jn(K1),J1=Ct({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_p}),Z1=jn(J1),Q1=Ct({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),eE=jn(Q1),tE=Ct({},fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nE=jn(tE),iE=[9,13,27,32],Sp=er&&"CompositionEvent"in window,xa=null;er&&"documentMode"in document&&(xa=document.documentMode);var rE=er&&"TextEvent"in window&&!xa,Ev=er&&(!Sp||xa&&8<xa&&11>=xa),rg=" ",sg=!1;function Mv(t,e){switch(t){case"keyup":return iE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var no=!1;function sE(t,e){switch(t){case"compositionend":return wv(e);case"keypress":return e.which!==32?null:(sg=!0,rg);case"textInput":return t=e.data,t===rg&&sg?null:t;default:return null}}function oE(t,e){if(no)return t==="compositionend"||!Sp&&Mv(t,e)?(t=Sv(),cc=vp=Rr=null,no=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ev&&e.locale!=="ko"?null:e.data;default:return null}}var aE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aE[t.type]:e==="textarea"}function Tv(t,e,n,i){nv(i),e=Nc(e,"onChange"),0<e.length&&(n=new yp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var va=null,Da=null;function lE(t){Uv(t,0)}function hu(t){var e=so(t);if(Yx(e))return t}function cE(t,e){if(t==="change")return e}var bv=!1;if(er){var qu;if(er){var $u="oninput"in document;if(!$u){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),$u=typeof ag.oninput=="function"}qu=$u}else qu=!1;bv=qu&&(!document.documentMode||9<document.documentMode)}function lg(){va&&(va.detachEvent("onpropertychange",Av),Da=va=null)}function Av(t){if(t.propertyName==="value"&&hu(Da)){var e=[];Tv(e,Da,t,hp(t)),ov(lE,e)}}function uE(t,e,n){t==="focusin"?(lg(),va=e,Da=n,va.attachEvent("onpropertychange",Av)):t==="focusout"&&lg()}function dE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(Da)}function fE(t,e){if(t==="click")return hu(e)}function hE(t,e){if(t==="input"||t==="change")return hu(e)}function pE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gi=typeof Object.is=="function"?Object.is:pE;function Ia(t,e){if(gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!rf.call(e,r)||!gi(t[r],e[r]))return!1}return!0}function cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ug(t,e){var n=cg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cg(n)}}function Cv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rv(){for(var t=window,e=Ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ac(t.document)}return e}function Ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mE(t){var e=Rv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cv(n.ownerDocument.documentElement,n)){if(i!==null&&Ep(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ug(n,s);var o=ug(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gE=er&&"documentMode"in document&&11>=document.documentMode,io=null,Mf=null,ya=null,wf=!1;function dg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wf||io==null||io!==Ac(i)||(i=io,"selectionStart"in i&&Ep(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ya&&Ia(ya,i)||(ya=i,i=Nc(Mf,"onSelect"),0<i.length&&(e=new yp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=io)))}function yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ro={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Yu={},Pv={};er&&(Pv=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function pu(t){if(Yu[t])return Yu[t];if(!ro[t])return t;var e=ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pv)return Yu[t]=e[n];return t}var Lv=pu("animationend"),Dv=pu("animationiteration"),Iv=pu("animationstart"),Nv=pu("transitionend"),Fv=new Map,fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){Fv.set(t,e),Rs(e,[t])}for(var Ku=0;Ku<fg.length;Ku++){var Ju=fg[Ku],xE=Ju.toLowerCase(),vE=Ju[0].toUpperCase()+Ju.slice(1);Xr(xE,"on"+vE)}Xr(Lv,"onAnimationEnd");Xr(Dv,"onAnimationIteration");Xr(Iv,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(Nv,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);Rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yE=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function hg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,x1(i,e,void 0,t),t.currentTarget=null}function Uv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;hg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;hg(r,a,c),s=l}}}if(Rc)throw t=yf,Rc=!1,yf=null,t}function _t(t,e){var n=e[Rf];n===void 0&&(n=e[Rf]=new Set);var i=t+"__bubble";n.has(i)||(Ov(e,t,2,!1),n.add(i))}function Zu(t,e,n){var i=0;e&&(i|=4),Ov(n,t,i,e)}var _l="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[_l]){t[_l]=!0,Wx.forEach(function(n){n!=="selectionchange"&&(yE.has(n)||Zu(n,!1,t),Zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_l]||(e[_l]=!0,Zu("selectionchange",!1,e))}}function Ov(t,e,n,i){switch(_v(e)){case 1:var r=I1;break;case 4:r=N1;break;default:r=xp}n=r.bind(null,e,n,t),r=void 0,!vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Qu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ds(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ov(function(){var c=s,u=hp(n),f=[];e:{var h=Fv.get(t);if(h!==void 0){var m=yp,x=t;switch(t){case"keypress":if(uc(n)===0)break e;case"keydown":case"keyup":m=Y1;break;case"focusin":x="focus",m=Xu;break;case"focusout":x="blur",m=Xu;break;case"beforeblur":case"afterblur":m=Xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=O1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Z1;break;case Lv:case Dv:case Iv:m=z1;break;case Nv:m=eE;break;case"scroll":m=F1;break;case"wheel":m=nE;break;case"copy":case"cut":case"paste":m=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ig}var E=(e&4)!==0,g=!E&&t==="scroll",d=E?h!==null?h+"Capture":null:h;E=[];for(var v=c,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,d!==null&&(S=Ca(v,d),S!=null&&E.push(Fa(v,S,y)))),g)break;v=v.return}0<E.length&&(h=new m(h,x,null,n,u),f.push({event:h,listeners:E}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==gf&&(x=n.relatedTarget||n.fromElement)&&(ds(x)||x[tr]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?ds(x):null,x!==null&&(g=Ps(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(E=tg,S="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=ig,S="onPointerLeave",d="onPointerEnter",v="pointer"),g=m==null?h:so(m),y=x==null?h:so(x),h=new E(S,v+"leave",m,n,u),h.target=g,h.relatedTarget=y,S=null,ds(u)===c&&(E=new E(d,v+"enter",x,n,u),E.target=y,E.relatedTarget=g,S=E),g=S,m&&x)t:{for(E=m,d=x,v=0,y=E;y;y=Us(y))v++;for(y=0,S=d;S;S=Us(S))y++;for(;0<v-y;)E=Us(E),v--;for(;0<y-v;)d=Us(d),y--;for(;v--;){if(E===d||d!==null&&E===d.alternate)break t;E=Us(E),d=Us(d)}E=null}else E=null;m!==null&&pg(f,h,m,E,!1),x!==null&&g!==null&&pg(f,g,x,E,!0)}}e:{if(h=c?so(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var w=cE;else if(og(h))if(bv)w=hE;else{w=dE;var T=uE}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=fE);if(w&&(w=w(t,c))){Tv(f,w,n,u);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&df(h,"number",h.value)}switch(T=c?so(c):window,t){case"focusin":(og(T)||T.contentEditable==="true")&&(io=T,Mf=c,ya=null);break;case"focusout":ya=Mf=io=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,dg(f,n,u);break;case"selectionchange":if(gE)break;case"keydown":case"keyup":dg(f,n,u)}var A;if(Sp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else no?Mv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ev&&n.locale!=="ko"&&(no||_!=="onCompositionStart"?_==="onCompositionEnd"&&no&&(A=Sv()):(Rr=u,vp="value"in Rr?Rr.value:Rr.textContent,no=!0)),T=Nc(c,_),0<T.length&&(_=new ng(_,t,null,n,u),f.push({event:_,listeners:T}),A?_.data=A:(A=wv(n),A!==null&&(_.data=A)))),(A=rE?sE(t,n):oE(t,n))&&(c=Nc(c,"onBeforeInput"),0<c.length&&(u=new ng("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=A))}Uv(f,e)})}function Fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ca(t,n),s!=null&&i.unshift(Fa(t,s,r)),s=Ca(t,e),s!=null&&i.push(Fa(t,s,r))),t=t.return}return i}function Us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ca(n,s),l!=null&&o.unshift(Fa(n,l,a))):r||(l=Ca(n,s),l!=null&&o.push(Fa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _E=/\r\n?/g,SE=/\u0000|\uFFFD/g;function mg(t){return(typeof t=="string"?t:""+t).replace(_E,`
`).replace(SE,"")}function Sl(t,e,n){if(e=mg(e),mg(t)!==e&&n)throw Error(ce(425))}function Fc(){}var Tf=null,bf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,EE=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,ME=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(t){return gg.resolve(null).then(t).catch(wE)}:Cf;function wE(t){setTimeout(function(){throw t})}function ed(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),La(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);La(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bo=Math.random().toString(36).slice(2),Ai="__reactFiber$"+Bo,Ua="__reactProps$"+Bo,tr="__reactContainer$"+Bo,Rf="__reactEvents$"+Bo,TE="__reactListeners$"+Bo,bE="__reactHandles$"+Bo;function ds(t){var e=t[Ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[Ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xg(t);t!==null;){if(n=t[Ai])return n;t=xg(t)}return e}t=n,n=t.parentNode}return null}function el(t){return t=t[Ai]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function so(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function mu(t){return t[Ua]||null}var Pf=[],oo=-1;function qr(t){return{current:t}}function St(t){0>oo||(t.current=Pf[oo],Pf[oo]=null,oo--)}function yt(t,e){oo++,Pf[oo]=t.current,t.current=e}var Gr={},hn=qr(Gr),Cn=qr(!1),_s=Gr;function wo(t,e){var n=t.type.contextTypes;if(!n)return Gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Rn(t){return t=t.childContextTypes,t!=null}function Uc(){St(Cn),St(hn)}function vg(t,e,n){if(hn.current!==Gr)throw Error(ce(168));yt(hn,e),yt(Cn,n)}function kv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,u1(t)||"Unknown",r));return Ct({},n,i)}function Oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,_s=hn.current,yt(hn,t),yt(Cn,Cn.current),!0}function yg(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=kv(t,e,_s),i.__reactInternalMemoizedMergedChildContext=t,St(Cn),St(hn),yt(hn,t)):St(Cn),yt(Cn,n)}var ji=null,gu=!1,td=!1;function Bv(t){ji===null?ji=[t]:ji.push(t)}function AE(t){gu=!0,Bv(t)}function $r(){if(!td&&ji!==null){td=!0;var t=0,e=ct;try{var n=ji;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ji=null,gu=!1}catch(r){throw ji!==null&&(ji=ji.slice(t+1)),uv(pp,$r),r}finally{ct=e,td=!1}}return null}var ao=[],lo=0,kc=null,Bc=0,Kn=[],Jn=0,Ss=null,qi=1,$i="";function os(t,e){ao[lo++]=Bc,ao[lo++]=kc,kc=t,Bc=e}function zv(t,e,n){Kn[Jn++]=qi,Kn[Jn++]=$i,Kn[Jn++]=Ss,Ss=t;var i=qi;t=$i;var r=32-pi(i)-1;i&=~(1<<r),n+=1;var s=32-pi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,qi=1<<32-pi(e)+r|n<<r|i,$i=s+t}else qi=1<<s|n<<r|i,$i=t}function Mp(t){t.return!==null&&(os(t,1),zv(t,1,0))}function wp(t){for(;t===kc;)kc=ao[--lo],ao[lo]=null,Bc=ao[--lo],ao[lo]=null;for(;t===Ss;)Ss=Kn[--Jn],Kn[Jn]=null,$i=Kn[--Jn],Kn[Jn]=null,qi=Kn[--Jn],Kn[Jn]=null}var Vn=null,Hn=null,Mt=!1,di=null;function Hv(t,e){var n=Zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _g(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vn=t,Hn=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vn=t,Hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ss!==null?{id:qi,overflow:$i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vn=t,Hn=null,!0):!1;default:return!1}}function Lf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Df(t){if(Mt){var e=Hn;if(e){var n=e;if(!_g(t,e)){if(Lf(t))throw Error(ce(418));e=Ur(n.nextSibling);var i=Vn;e&&_g(t,e)?Hv(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Vn=t)}}else{if(Lf(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Mt=!1,Vn=t}}}function Sg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function El(t){if(t!==Vn)return!1;if(!Mt)return Sg(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=Hn)){if(Lf(t))throw Vv(),Error(ce(418));for(;e;)Hv(t,e),e=Ur(e.nextSibling)}if(Sg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Hn=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Hn=null}}else Hn=Vn?Ur(t.stateNode.nextSibling):null;return!0}function Vv(){for(var t=Hn;t;)t=Ur(t.nextSibling)}function To(){Hn=Vn=null,Mt=!1}function Tp(t){di===null?di=[t]:di.push(t)}var CE=or.ReactCurrentBatchConfig;function Zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Ml(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Eg(t){var e=t._init;return e(t._payload)}function Gv(t){function e(d,v){if(t){var y=d.deletions;y===null?(d.deletions=[v],d.flags|=16):y.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=zr(d,v),d.index=0,d.sibling=null,d}function s(d,v,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<v?(d.flags|=2,v):y):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,y,S){return v===null||v.tag!==6?(v=ld(y,d.mode,S),v.return=d,v):(v=r(v,y),v.return=d,v)}function l(d,v,y,S){var w=y.type;return w===to?u(d,v,y.props.children,S,y.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Mr&&Eg(w)===v.type)?(S=r(v,y.props),S.ref=Zo(d,v,y),S.return=d,S):(S=xc(y.type,y.key,y.props,null,d.mode,S),S.ref=Zo(d,v,y),S.return=d,S)}function c(d,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=cd(y,d.mode,S),v.return=d,v):(v=r(v,y.children||[]),v.return=d,v)}function u(d,v,y,S,w){return v===null||v.tag!==7?(v=vs(y,d.mode,S,w),v.return=d,v):(v=r(v,y),v.return=d,v)}function f(d,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ld(""+v,d.mode,y),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fl:return y=xc(v.type,v.key,v.props,null,d.mode,y),y.ref=Zo(d,null,v),y.return=d,y;case eo:return v=cd(v,d.mode,y),v.return=d,v;case Mr:var S=v._init;return f(d,S(v._payload),y)}if(ua(v)||qo(v))return v=vs(v,d.mode,y,null),v.return=d,v;Ml(d,v)}return null}function h(d,v,y,S){var w=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:a(d,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fl:return y.key===w?l(d,v,y,S):null;case eo:return y.key===w?c(d,v,y,S):null;case Mr:return w=y._init,h(d,v,w(y._payload),S)}if(ua(y)||qo(y))return w!==null?null:u(d,v,y,S,null);Ml(d,y)}return null}function m(d,v,y,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(y)||null,a(v,d,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fl:return d=d.get(S.key===null?y:S.key)||null,l(v,d,S,w);case eo:return d=d.get(S.key===null?y:S.key)||null,c(v,d,S,w);case Mr:var T=S._init;return m(d,v,y,T(S._payload),w)}if(ua(S)||qo(S))return d=d.get(y)||null,u(v,d,S,w,null);Ml(v,S)}return null}function x(d,v,y,S){for(var w=null,T=null,A=v,_=v=0,C=null;A!==null&&_<y.length;_++){A.index>_?(C=A,A=null):C=A.sibling;var L=h(d,A,y[_],S);if(L===null){A===null&&(A=C);break}t&&A&&L.alternate===null&&e(d,A),v=s(L,v,_),T===null?w=L:T.sibling=L,T=L,A=C}if(_===y.length)return n(d,A),Mt&&os(d,_),w;if(A===null){for(;_<y.length;_++)A=f(d,y[_],S),A!==null&&(v=s(A,v,_),T===null?w=A:T.sibling=A,T=A);return Mt&&os(d,_),w}for(A=i(d,A);_<y.length;_++)C=m(A,d,_,y[_],S),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?_:C.key),v=s(C,v,_),T===null?w=C:T.sibling=C,T=C);return t&&A.forEach(function(D){return e(d,D)}),Mt&&os(d,_),w}function E(d,v,y,S){var w=qo(y);if(typeof w!="function")throw Error(ce(150));if(y=w.call(y),y==null)throw Error(ce(151));for(var T=w=null,A=v,_=v=0,C=null,L=y.next();A!==null&&!L.done;_++,L=y.next()){A.index>_?(C=A,A=null):C=A.sibling;var D=h(d,A,L.value,S);if(D===null){A===null&&(A=C);break}t&&A&&D.alternate===null&&e(d,A),v=s(D,v,_),T===null?w=D:T.sibling=D,T=D,A=C}if(L.done)return n(d,A),Mt&&os(d,_),w;if(A===null){for(;!L.done;_++,L=y.next())L=f(d,L.value,S),L!==null&&(v=s(L,v,_),T===null?w=L:T.sibling=L,T=L);return Mt&&os(d,_),w}for(A=i(d,A);!L.done;_++,L=y.next())L=m(A,d,_,L.value,S),L!==null&&(t&&L.alternate!==null&&A.delete(L.key===null?_:L.key),v=s(L,v,_),T===null?w=L:T.sibling=L,T=L);return t&&A.forEach(function(B){return e(d,B)}),Mt&&os(d,_),w}function g(d,v,y,S){if(typeof y=="object"&&y!==null&&y.type===to&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case fl:e:{for(var w=y.key,T=v;T!==null;){if(T.key===w){if(w=y.type,w===to){if(T.tag===7){n(d,T.sibling),v=r(T,y.props.children),v.return=d,d=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Mr&&Eg(w)===T.type){n(d,T.sibling),v=r(T,y.props),v.ref=Zo(d,T,y),v.return=d,d=v;break e}n(d,T);break}else e(d,T);T=T.sibling}y.type===to?(v=vs(y.props.children,d.mode,S,y.key),v.return=d,d=v):(S=xc(y.type,y.key,y.props,null,d.mode,S),S.ref=Zo(d,v,y),S.return=d,d=S)}return o(d);case eo:e:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(d,v.sibling),v=r(v,y.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=cd(y,d.mode,S),v.return=d,d=v}return o(d);case Mr:return T=y._init,g(d,v,T(y._payload),S)}if(ua(y))return x(d,v,y,S);if(qo(y))return E(d,v,y,S);Ml(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,y),v.return=d,d=v):(n(d,v),v=ld(y,d.mode,S),v.return=d,d=v),o(d)):n(d,v)}return g}var bo=Gv(!0),Wv=Gv(!1),zc=qr(null),Hc=null,co=null,bp=null;function Ap(){bp=co=Hc=null}function Cp(t){var e=zc.current;St(zc),t._currentValue=e}function If(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vo(t,e){Hc=t,bp=co=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(An=!0),t.firstContext=null)}function ti(t){var e=t._currentValue;if(bp!==t)if(t={context:t,memoizedValue:e,next:null},co===null){if(Hc===null)throw Error(ce(308));co=t,Hc.dependencies={lanes:0,firstContext:t}}else co=co.next=t;return e}var fs=null;function Rp(t){fs===null?fs=[t]:fs.push(t)}function jv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rp(e)):(n.next=r.next,r.next=n),e.interleaved=n,nr(t,i)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wr=!1;function Pp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Or(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,nr(t,n)}return r=i.interleaved,r===null?(e.next=e,Rp(i)):(e.next=r.next,r.next=e),i.interleaved=e,nr(t,n)}function dc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mp(t,n)}}function Mg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vc(t,e,n,i){var r=t.updateQueue;wr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,E=a;switch(h=e,m=n,E.tag){case 1:if(x=E.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=Ct({},f,h);break e;case 2:wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ms|=o,t.lanes=o,t.memoizedState=f}}function wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var tl={},Li=qr(tl),Oa=qr(tl),ka=qr(tl);function hs(t){if(t===tl)throw Error(ce(174));return t}function Lp(t,e){switch(yt(ka,e),yt(Oa,t),yt(Li,tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hf(e,t)}St(Li),yt(Li,e)}function Ao(){St(Li),St(Oa),St(ka)}function qv(t){hs(ka.current);var e=hs(Li.current),n=hf(e,t.type);e!==n&&(yt(Oa,t),yt(Li,n))}function Dp(t){Oa.current===t&&(St(Li),St(Oa))}var Tt=qr(0);function Gc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nd=[];function Ip(){for(var t=0;t<nd.length;t++)nd[t]._workInProgressVersionPrimary=null;nd.length=0}var fc=or.ReactCurrentDispatcher,id=or.ReactCurrentBatchConfig,Es=0,At=null,zt=null,jt=null,Wc=!1,_a=!1,Ba=0,RE=0;function nn(){throw Error(ce(321))}function Np(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gi(t[n],e[n]))return!1;return!0}function Fp(t,e,n,i,r,s){if(Es=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fc.current=t===null||t.memoizedState===null?IE:NE,t=n(i,r),_a){s=0;do{if(_a=!1,Ba=0,25<=s)throw Error(ce(301));s+=1,jt=zt=null,e.updateQueue=null,fc.current=FE,t=n(i,r)}while(_a)}if(fc.current=jc,e=zt!==null&&zt.next!==null,Es=0,jt=zt=At=null,Wc=!1,e)throw Error(ce(300));return t}function Up(){var t=Ba!==0;return Ba=0,t}function Ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?At.memoizedState=jt=t:jt=jt.next=t,jt}function ni(){if(zt===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=jt===null?At.memoizedState:jt.next;if(e!==null)jt=e,zt=t;else{if(t===null)throw Error(ce(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},jt===null?At.memoizedState=jt=t:jt=jt.next=t}return jt}function za(t,e){return typeof e=="function"?e(t):e}function rd(t){var e=ni(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Es&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,At.lanes|=u,Ms|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,gi(i,e.memoizedState)||(An=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,At.lanes|=s,Ms|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sd(t){var e=ni(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);gi(s,e.memoizedState)||(An=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $v(){}function Yv(t,e){var n=At,i=ni(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,An=!0),i=i.queue,Op(Zv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,Ha(9,Jv.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(ce(349));Es&30||Kv(n,e,r)}return r}function Kv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jv(t,e,n,i){e.value=n,e.getSnapshot=i,Qv(e)&&ey(t)}function Zv(t,e,n){return n(function(){Qv(e)&&ey(t)})}function Qv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gi(t,n)}catch{return!0}}function ey(t){var e=nr(t,1);e!==null&&mi(e,t,1,-1)}function Tg(t){var e=Ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},e.queue=t,t=t.dispatch=DE.bind(null,At,t),[e.memoizedState,t]}function Ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ty(){return ni().memoizedState}function hc(t,e,n,i){var r=Ti();At.flags|=t,r.memoizedState=Ha(1|e,n,void 0,i===void 0?null:i)}function xu(t,e,n,i){var r=ni();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&Np(i,o.deps)){r.memoizedState=Ha(e,n,s,i);return}}At.flags|=t,r.memoizedState=Ha(1|e,n,s,i)}function bg(t,e){return hc(8390656,8,t,e)}function Op(t,e){return xu(2048,8,t,e)}function ny(t,e){return xu(4,2,t,e)}function iy(t,e){return xu(4,4,t,e)}function ry(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sy(t,e,n){return n=n!=null?n.concat([t]):null,xu(4,4,ry.bind(null,e,t),n)}function kp(){}function oy(t,e){var n=ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Np(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ay(t,e){var n=ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Np(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ly(t,e,n){return Es&21?(gi(n,e)||(n=hv(),At.lanes|=n,Ms|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=n)}function PE(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=id.transition;id.transition={};try{t(!1),e()}finally{ct=n,id.transition=i}}function cy(){return ni().memoizedState}function LE(t,e,n){var i=Br(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},uy(t))dy(e,n);else if(n=jv(t,e,n,i),n!==null){var r=xn();mi(n,t,i,r),fy(n,e,i)}}function DE(t,e,n){var i=Br(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(uy(t))dy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,gi(a,o)){var l=e.interleaved;l===null?(r.next=r,Rp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=jv(t,e,r,i),n!==null&&(r=xn(),mi(n,t,i,r),fy(n,e,i))}}function uy(t){var e=t.alternate;return t===At||e!==null&&e===At}function dy(t,e){_a=Wc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mp(t,n)}}var jc={readContext:ti,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},IE={readContext:ti,useCallback:function(t,e){return Ti().memoizedState=[t,e===void 0?null:e],t},useContext:ti,useEffect:bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hc(4194308,4,ry.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hc(4194308,4,t,e)},useInsertionEffect:function(t,e){return hc(4,2,t,e)},useMemo:function(t,e){var n=Ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=LE.bind(null,At,t),[i.memoizedState,t]},useRef:function(t){var e=Ti();return t={current:t},e.memoizedState=t},useState:Tg,useDebugValue:kp,useDeferredValue:function(t){return Ti().memoizedState=t},useTransition:function(){var t=Tg(!1),e=t[0];return t=PE.bind(null,t[1]),Ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=At,r=Ti();if(Mt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Xt===null)throw Error(ce(349));Es&30||Kv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,bg(Zv.bind(null,i,s,t),[t]),i.flags|=2048,Ha(9,Jv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ti(),e=Xt.identifierPrefix;if(Mt){var n=$i,i=qi;n=(i&~(1<<32-pi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NE={readContext:ti,useCallback:oy,useContext:ti,useEffect:Op,useImperativeHandle:sy,useInsertionEffect:ny,useLayoutEffect:iy,useMemo:ay,useReducer:rd,useRef:ty,useState:function(){return rd(za)},useDebugValue:kp,useDeferredValue:function(t){var e=ni();return ly(e,zt.memoizedState,t)},useTransition:function(){var t=rd(za)[0],e=ni().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:Yv,useId:cy,unstable_isNewReconciler:!1},FE={readContext:ti,useCallback:oy,useContext:ti,useEffect:Op,useImperativeHandle:sy,useInsertionEffect:ny,useLayoutEffect:iy,useMemo:ay,useReducer:sd,useRef:ty,useState:function(){return sd(za)},useDebugValue:kp,useDeferredValue:function(t){var e=ni();return zt===null?e.memoizedState=t:ly(e,zt.memoizedState,t)},useTransition:function(){var t=sd(za)[0],e=ni().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:Yv,useId:cy,unstable_isNewReconciler:!1};function ci(t,e){if(t&&t.defaultProps){e=Ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?Ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=xn(),r=Br(t),s=Ji(i,r);s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,r),e!==null&&(mi(e,t,r,i),dc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=xn(),r=Br(t),s=Ji(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,r),e!==null&&(mi(e,t,r,i),dc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xn(),i=Br(t),r=Ji(n,i);r.tag=2,e!=null&&(r.callback=e),e=Or(t,r,i),e!==null&&(mi(e,t,i,n),dc(e,t,i))}};function Ag(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ia(n,i)||!Ia(r,s):!0}function hy(t,e,n){var i=!1,r=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=ti(s):(r=Rn(e)?_s:hn.current,i=e.contextTypes,s=(i=i!=null)?wo(t,r):Gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function Ff(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ti(s):(s=Rn(e)?_s:hn.current,r.context=wo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vu.enqueueReplaceState(r,r.state,null),Vc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Co(t,e){try{var n="",i=e;do n+=c1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function od(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UE=typeof WeakMap=="function"?WeakMap:Map;function py(t,e,n){n=Ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){qc||(qc=!0,Xf=i),Uf(t,e)},n}function my(t,e,n){n=Ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uf(t,e),typeof i!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new UE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=KE.bind(null,t,e,n),e.then(t,t))}function Pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ji(-1,1),e.tag=2,Or(n,e,1))),n.lanes|=1),t)}var OE=or.ReactCurrentOwner,An=!1;function mn(t,e,n,i){e.child=t===null?Wv(e,null,n,i):bo(e,t.child,n,i)}function Dg(t,e,n,i,r){n=n.render;var s=e.ref;return vo(e,r),i=Fp(t,e,n,i,s,r),n=Up(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ir(t,e,r)):(Mt&&n&&Mp(e),e.flags|=1,mn(t,e,i,r),e.child)}function Ig(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gy(t,e,s,i,r)):(t=xc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ia,n(o,i)&&t.ref===e.ref)return ir(t,e,r)}return e.flags|=1,t=zr(s,i),t.ref=e.ref,t.return=e,e.child=t}function gy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ia(s,i)&&t.ref===e.ref)if(An=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(An=!0);else return e.lanes=t.lanes,ir(t,e,r)}return Of(t,e,n,i,r)}function xy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(fo,kn),kn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(fo,kn),kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,yt(fo,kn),kn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,yt(fo,kn),kn|=i;return mn(t,e,r,n),e.child}function vy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Of(t,e,n,i,r){var s=Rn(n)?_s:hn.current;return s=wo(e,s),vo(e,r),n=Fp(t,e,n,i,s,r),i=Up(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ir(t,e,r)):(Mt&&i&&Mp(e),e.flags|=1,mn(t,e,n,r),e.child)}function Ng(t,e,n,i,r){if(Rn(n)){var s=!0;Oc(e)}else s=!1;if(vo(e,r),e.stateNode===null)pc(t,e),hy(e,n,i),Ff(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ti(c):(c=Rn(n)?_s:hn.current,c=wo(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Cg(e,o,i,c),wr=!1;var h=e.memoizedState;o.state=h,Vc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Cn.current||wr?(typeof u=="function"&&(Nf(e,n,u,i),l=e.memoizedState),(a=wr||Ag(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Xv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ci(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ti(l):(l=Rn(n)?_s:hn.current,l=wo(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Cg(e,o,i,l),wr=!1,h=e.memoizedState,o.state=h,Vc(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||Cn.current||wr?(typeof m=="function"&&(Nf(e,n,m,i),x=e.memoizedState),(c=wr||Ag(e,n,c,i,h,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return kf(t,e,n,i,s,r)}function kf(t,e,n,i,r,s){vy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&yg(e,n,!1),ir(t,e,s);i=e.stateNode,OE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=bo(e,t.child,null,s),e.child=bo(e,null,a,s)):mn(t,e,a,s),e.memoizedState=i.state,r&&yg(e,n,!0),e.child}function yy(t){var e=t.stateNode;e.pendingContext?vg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vg(t,e.context,!1),Lp(t,e.containerInfo)}function Fg(t,e,n,i,r){return To(),Tp(r),e.flags|=256,mn(t,e,n,i),e.child}var Bf={dehydrated:null,treeContext:null,retryLane:0};function zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function _y(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(Tt,r&1),t===null)return Df(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Su(o,i,0,null),t=vs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zf(n),e.memoizedState=Bf,t):Bp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return kE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=zr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=zr(a,s):(s=vs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bf,i}return s=t.child,t=s.sibling,i=zr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bp(t,e){return e=Su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wl(t,e,n,i){return i!==null&&Tp(i),bo(e,t.child,null,n),t=Bp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=od(Error(ce(422))),wl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Su({mode:"visible",children:i.children},r,0,null),s=vs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&bo(e,t.child,null,o),e.child.memoizedState=zf(o),e.memoizedState=Bf,s);if(!(e.mode&1))return wl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=od(s,i,void 0),wl(t,e,o,i)}if(a=(o&t.childLanes)!==0,An||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,nr(t,r),mi(i,t,r,-1))}return jp(),i=od(Error(ce(421))),wl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=JE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Hn=Ur(r.nextSibling),Vn=e,Mt=!0,di=null,t!==null&&(Kn[Jn++]=qi,Kn[Jn++]=$i,Kn[Jn++]=Ss,qi=t.id,$i=t.overflow,Ss=e),e=Bp(e,i.children),e.flags|=4096,e)}function Ug(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),If(t.return,e,n)}function ad(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Sy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(mn(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ug(t,n,e);else if(t.tag===19)Ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ad(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ad(e,!0,n,null,s);break;case"together":ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ms|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BE(t,e,n){switch(e.tag){case 3:yy(e),To();break;case 5:qv(e);break;case 1:Rn(e.type)&&Oc(e);break;case 4:Lp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(zc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?_y(t,e,n):(yt(Tt,Tt.current&1),t=ir(t,e,n),t!==null?t.sibling:null);yt(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Sy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,xy(t,e,n)}return ir(t,e,n)}var Ey,Hf,My,wy;Ey=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hf=function(){};My=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,hs(Li.current);var s=null;switch(n){case"input":r=cf(t,r),i=cf(t,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=ff(t,r),i=ff(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Fc)}pf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ba.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ba.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};wy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qo(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function zE(t,e,n){var i=e.pendingProps;switch(wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return Rn(e.type)&&Uc(),rn(e),null;case 3:return i=e.stateNode,Ao(),St(Cn),St(hn),Ip(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(El(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,di!==null&&(Yf(di),di=null))),Hf(t,e),rn(e),null;case 5:Dp(e);var r=hs(ka.current);if(n=e.type,t!==null&&e.stateNode!=null)My(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return rn(e),null}if(t=hs(Li.current),El(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[Ua]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<fa.length;r++)_t(fa[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":jm(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":qm(i,s),_t("invalid",i)}pf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,t),r=["children",""+a]):ba.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":hl(i),Xm(i,s,!0);break;case"textarea":hl(i),$m(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ai]=e,t[Ua]=i,Ey(t,e,!1,!1),e.stateNode=t;e:{switch(o=mf(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<fa.length;r++)_t(fa[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":jm(t,i),r=cf(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),_t("invalid",t);break;case"textarea":qm(t,i),r=ff(t,i),_t("invalid",t);break;default:r=i}pf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Aa(t,l):typeof l=="number"&&Aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ba.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&cp(t,s,l,o))}switch(n){case"input":hl(t),Xm(t,i,!1);break;case"textarea":hl(t),$m(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?po(t,!!i.multiple,s,!1):i.defaultValue!=null&&po(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Fc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(t&&e.stateNode!=null)wy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=hs(ka.current),hs(Li.current),El(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==n)&&(t=Vn,t!==null))switch(t.tag){case 3:Sl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return rn(e),null;case 13:if(St(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Hn!==null&&e.mode&1&&!(e.flags&128))Vv(),To(),e.flags|=98560,s=!1;else if(s=El(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Ai]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else di!==null&&(Yf(di),di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Ht===0&&(Ht=3):jp())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return Ao(),Hf(t,e),t===null&&Na(e.stateNode.containerInfo),rn(e),null;case 10:return Cp(e.type._context),rn(e),null;case 17:return Rn(e.type)&&Uc(),rn(e),null;case 19:if(St(Tt),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Qo(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gc(t),o!==null){for(e.flags|=128,Qo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>Ro&&(e.flags|=128,i=!0,Qo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Gc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return rn(e),null}else 2*Nt()-s.renderingStartTime>Ro&&n!==1073741824&&(e.flags|=128,i=!0,Qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=Tt.current,yt(Tt,i?n&1|2:n&1),e):(rn(e),null);case 22:case 23:return Wp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?kn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function HE(t,e){switch(wp(e),e.tag){case 1:return Rn(e.type)&&Uc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ao(),St(Cn),St(hn),Ip(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dp(e),null;case 13:if(St(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));To()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(Tt),null;case 4:return Ao(),null;case 10:return Cp(e.type._context),null;case 22:case 23:return Wp(),null;case 24:return null;default:return null}}var Tl=!1,cn=!1,VE=typeof WeakSet=="function"?WeakSet:Set,Te=null;function uo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Lt(t,e,i)}else n.current=null}function Vf(t,e,n){try{n()}catch(i){Lt(t,e,i)}}var Og=!1;function GE(t,e){if(Tf=Dc,t=Rv(),Ep(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bf={focusedElem:t,selectionRange:n},Dc=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var E=x.memoizedProps,g=x.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:ci(e.type,E),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(S){Lt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return x=Og,Og=!1,x}function Sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vf(e,n,s)}r=r.next}while(r!==i)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Gf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ty(t){var e=t.alternate;e!==null&&(t.alternate=null,Ty(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ai],delete e[Ua],delete e[Rf],delete e[TE],delete e[bE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function by(t){return t.tag===5||t.tag===3||t.tag===4}function kg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||by(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fc));else if(i!==4&&(t=t.child,t!==null))for(Wf(t,e,n),t=t.sibling;t!==null;)Wf(t,e,n),t=t.sibling}function jf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}var Kt=null,ui=!1;function pr(t,e,n){for(n=n.child;n!==null;)Ay(t,e,n),n=n.sibling}function Ay(t,e,n){if(Pi&&typeof Pi.onCommitFiberUnmount=="function")try{Pi.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:cn||uo(n,e);case 6:var i=Kt,r=ui;Kt=null,pr(t,e,n),Kt=i,ui=r,Kt!==null&&(ui?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(ui?(t=Kt,n=n.stateNode,t.nodeType===8?ed(t.parentNode,n):t.nodeType===1&&ed(t,n),La(t)):ed(Kt,n.stateNode));break;case 4:i=Kt,r=ui,Kt=n.stateNode.containerInfo,ui=!0,pr(t,e,n),Kt=i,ui=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vf(n,e,o),r=r.next}while(r!==i)}pr(t,e,n);break;case 1:if(!cn&&(uo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Lt(n,e,a)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,pr(t,e,n),cn=i):pr(t,e,n);break;default:pr(t,e,n)}}function Bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VE),e.forEach(function(i){var r=ZE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ii(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,ui=!1;break e;case 3:Kt=a.stateNode.containerInfo,ui=!0;break e;case 4:Kt=a.stateNode.containerInfo,ui=!0;break e}a=a.return}if(Kt===null)throw Error(ce(160));Ay(s,o,r),Kt=null,ui=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Lt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cy(e,t),e=e.sibling}function Cy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(e,t),Si(t),i&4){try{Sa(3,t,t.return),yu(3,t)}catch(E){Lt(t,t.return,E)}try{Sa(5,t,t.return)}catch(E){Lt(t,t.return,E)}}break;case 1:ii(e,t),Si(t),i&512&&n!==null&&uo(n,n.return);break;case 5:if(ii(e,t),Si(t),i&512&&n!==null&&uo(n,n.return),t.flags&32){var r=t.stateNode;try{Aa(r,"")}catch(E){Lt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Kx(r,s),mf(a,o);var c=mf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?tv(r,f):u==="dangerouslySetInnerHTML"?Qx(r,f):u==="children"?Aa(r,f):cp(r,u,f,c)}switch(a){case"input":uf(r,s);break;case"textarea":Jx(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?po(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?po(r,!!s.multiple,s.defaultValue,!0):po(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ua]=s}catch(E){Lt(t,t.return,E)}}break;case 6:if(ii(e,t),Si(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Lt(t,t.return,E)}}break;case 3:if(ii(e,t),Si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(E){Lt(t,t.return,E)}break;case 4:ii(e,t),Si(t);break;case 13:ii(e,t),Si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vp=Nt())),i&4&&Bg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(c=cn)||u,ii(e,t),cn=c):ii(e,t),Si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Te=t,u=t.child;u!==null;){for(f=Te=u;Te!==null;){switch(h=Te,m=h.child,h.tag){case 0:case 11:case 14:case 15:Sa(4,h,h.return);break;case 1:uo(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(E){Lt(i,n,E)}}break;case 5:uo(h,h.return);break;case 22:if(h.memoizedState!==null){Hg(f);continue}}m!==null?(m.return=h,Te=m):Hg(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ev("display",o))}catch(E){Lt(t,t.return,E)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(E){Lt(t,t.return,E)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ii(e,t),Si(t),i&4&&Bg(t);break;case 21:break;default:ii(e,t),Si(t)}}function Si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(by(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Aa(r,""),i.flags&=-33);var s=kg(t);jf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=kg(t);Wf(t,a,o);break;default:throw Error(ce(161))}}catch(l){Lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WE(t,e,n){Te=t,Ry(t)}function Ry(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||cn;a=Tl;var c=cn;if(Tl=o,(cn=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?Vg(r):l!==null?(l.return=o,Te=l):Vg(r);for(;s!==null;)Te=s,Ry(s),s=s.sibling;Te=r,Tl=a,cn=c}zg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):zg(t)}}function zg(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||yu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ci(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&La(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}cn||e.flags&512&&Gf(e)}catch(h){Lt(e,e.return,h)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Hg(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Vg(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(l){Lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{Gf(e)}catch(l){Lt(e,s,l)}break;case 5:var o=e.return;try{Gf(e)}catch(l){Lt(e,o,l)}}}catch(l){Lt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var jE=Math.ceil,Xc=or.ReactCurrentDispatcher,zp=or.ReactCurrentOwner,Qn=or.ReactCurrentBatchConfig,it=0,Xt=null,Bt=null,Qt=0,kn=0,fo=qr(0),Ht=0,Va=null,Ms=0,_u=0,Hp=0,Ea=null,Tn=null,Vp=0,Ro=1/0,Wi=null,qc=!1,Xf=null,kr=null,bl=!1,Pr=null,$c=0,Ma=0,qf=null,mc=-1,gc=0;function xn(){return it&6?Nt():mc!==-1?mc:mc=Nt()}function Br(t){return t.mode&1?it&2&&Qt!==0?Qt&-Qt:CE.transition!==null?(gc===0&&(gc=hv()),gc):(t=ct,t!==0||(t=window.event,t=t===void 0?16:_v(t.type)),t):1}function mi(t,e,n,i){if(50<Ma)throw Ma=0,qf=null,Error(ce(185));Za(t,n,i),(!(it&2)||t!==Xt)&&(t===Xt&&(!(it&2)&&(_u|=n),Ht===4&&Ar(t,Qt)),Pn(t,i),n===1&&it===0&&!(e.mode&1)&&(Ro=Nt()+500,gu&&$r()))}function Pn(t,e){var n=t.callbackNode;C1(t,e);var i=Lc(t,t===Xt?Qt:0);if(i===0)n!==null&&Jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Jm(n),e===1)t.tag===0?AE(Gg.bind(null,t)):Bv(Gg.bind(null,t)),ME(function(){!(it&6)&&$r()}),n=null;else{switch(pv(i)){case 1:n=pp;break;case 4:n=dv;break;case 16:n=Pc;break;case 536870912:n=fv;break;default:n=Pc}n=Oy(n,Py.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Py(t,e){if(mc=-1,gc=0,it&6)throw Error(ce(327));var n=t.callbackNode;if(yo()&&t.callbackNode!==n)return null;var i=Lc(t,t===Xt?Qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Yc(t,i);else{e=i;var r=it;it|=2;var s=Dy();(Xt!==t||Qt!==e)&&(Wi=null,Ro=Nt()+500,xs(t,e));do try{$E();break}catch(a){Ly(t,a)}while(!0);Ap(),Xc.current=s,it=r,Bt!==null?e=0:(Xt=null,Qt=0,e=Ht)}if(e!==0){if(e===2&&(r=_f(t),r!==0&&(i=r,e=$f(t,r))),e===1)throw n=Va,xs(t,0),Ar(t,i),Pn(t,Nt()),n;if(e===6)Ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!XE(r)&&(e=Yc(t,i),e===2&&(s=_f(t),s!==0&&(i=s,e=$f(t,s))),e===1))throw n=Va,xs(t,0),Ar(t,i),Pn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:as(t,Tn,Wi);break;case 3:if(Ar(t,i),(i&130023424)===i&&(e=Vp+500-Nt(),10<e)){if(Lc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){xn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cf(as.bind(null,t,Tn,Wi),e);break}as(t,Tn,Wi);break;case 4:if(Ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-pi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jE(i/1960))-i,10<i){t.timeoutHandle=Cf(as.bind(null,t,Tn,Wi),i);break}as(t,Tn,Wi);break;case 5:as(t,Tn,Wi);break;default:throw Error(ce(329))}}}return Pn(t,Nt()),t.callbackNode===n?Py.bind(null,t):null}function $f(t,e){var n=Ea;return t.current.memoizedState.isDehydrated&&(xs(t,e).flags|=256),t=Yc(t,e),t!==2&&(e=Tn,Tn=n,e!==null&&Yf(e)),t}function Yf(t){Tn===null?Tn=t:Tn.push.apply(Tn,t)}function XE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~Hp,e&=~_u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pi(e),i=1<<n;t[n]=-1,e&=~i}}function Gg(t){if(it&6)throw Error(ce(327));yo();var e=Lc(t,0);if(!(e&1))return Pn(t,Nt()),null;var n=Yc(t,e);if(t.tag!==0&&n===2){var i=_f(t);i!==0&&(e=i,n=$f(t,i))}if(n===1)throw n=Va,xs(t,0),Ar(t,e),Pn(t,Nt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,as(t,Tn,Wi),Pn(t,Nt()),null}function Gp(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(Ro=Nt()+500,gu&&$r())}}function ws(t){Pr!==null&&Pr.tag===0&&!(it&6)&&yo();var e=it;it|=1;var n=Qn.transition,i=ct;try{if(Qn.transition=null,ct=1,t)return t()}finally{ct=i,Qn.transition=n,it=e,!(it&6)&&$r()}}function Wp(){kn=fo.current,St(fo)}function xs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,EE(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(wp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uc();break;case 3:Ao(),St(Cn),St(hn),Ip();break;case 5:Dp(i);break;case 4:Ao();break;case 13:St(Tt);break;case 19:St(Tt);break;case 10:Cp(i.type._context);break;case 22:case 23:Wp()}n=n.return}if(Xt=t,Bt=t=zr(t.current,null),Qt=kn=e,Ht=0,Va=null,Hp=_u=Ms=0,Tn=Ea=null,fs!==null){for(e=0;e<fs.length;e++)if(n=fs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}fs=null}return t}function Ly(t,e){do{var n=Bt;try{if(Ap(),fc.current=jc,Wc){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wc=!1}if(Es=0,jt=zt=At=null,_a=!1,Ba=0,zp.current=null,n===null||n.return===null){Ht=1,Va=e,Bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Pg(o);if(m!==null){m.flags&=-257,Lg(m,o,a,s,e),m.mode&1&&Rg(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var E=new Set;E.add(l),e.updateQueue=E}else x.add(l);break e}else{if(!(e&1)){Rg(s,c,e),jp();break e}l=Error(ce(426))}}else if(Mt&&a.mode&1){var g=Pg(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Lg(g,o,a,s,e),Tp(Co(l,a));break e}}s=l=Co(l,a),Ht!==4&&(Ht=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=py(s,l,e);Mg(s,d);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(kr===null||!kr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=my(s,a,e);Mg(s,S);break e}}s=s.return}while(s!==null)}Ny(n)}catch(w){e=w,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function Dy(){var t=Xc.current;return Xc.current=jc,t===null?jc:t}function jp(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Xt===null||!(Ms&268435455)&&!(_u&268435455)||Ar(Xt,Qt)}function Yc(t,e){var n=it;it|=2;var i=Dy();(Xt!==t||Qt!==e)&&(Wi=null,xs(t,e));do try{qE();break}catch(r){Ly(t,r)}while(!0);if(Ap(),it=n,Xc.current=i,Bt!==null)throw Error(ce(261));return Xt=null,Qt=0,Ht}function qE(){for(;Bt!==null;)Iy(Bt)}function $E(){for(;Bt!==null&&!y1();)Iy(Bt)}function Iy(t){var e=Uy(t.alternate,t,kn);t.memoizedProps=t.pendingProps,e===null?Ny(t):Bt=e,zp.current=null}function Ny(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HE(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,Bt=null;return}}else if(n=zE(n,e,kn),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Ht===0&&(Ht=5)}function as(t,e,n){var i=ct,r=Qn.transition;try{Qn.transition=null,ct=1,YE(t,e,n,i)}finally{Qn.transition=r,ct=i}return null}function YE(t,e,n,i){do yo();while(Pr!==null);if(it&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(R1(t,s),t===Xt&&(Bt=Xt=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bl||(bl=!0,Oy(Pc,function(){return yo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=ct;ct=1;var a=it;it|=4,zp.current=null,GE(t,n),Cy(n,t),mE(bf),Dc=!!Tf,bf=Tf=null,t.current=n,WE(n),_1(),it=a,ct=o,Qn.transition=s}else t.current=n;if(bl&&(bl=!1,Pr=t,$c=r),s=t.pendingLanes,s===0&&(kr=null),M1(n.stateNode),Pn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(qc)throw qc=!1,t=Xf,Xf=null,t;return $c&1&&t.tag!==0&&yo(),s=t.pendingLanes,s&1?t===qf?Ma++:(Ma=0,qf=t):Ma=0,$r(),null}function yo(){if(Pr!==null){var t=pv($c),e=Qn.transition,n=ct;try{if(Qn.transition=null,ct=16>t?16:t,Pr===null)var i=!1;else{if(t=Pr,Pr=null,$c=0,it&6)throw Error(ce(331));var r=it;for(it|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var u=Te;switch(u.tag){case 0:case 11:case 15:Sa(8,u,s)}var f=u.child;if(f!==null)f.return=u,Te=f;else for(;Te!==null;){u=Te;var h=u.sibling,m=u.return;if(Ty(u),u===c){Te=null;break}if(h!==null){h.return=m,Te=h;break}Te=m}}}var x=s.alternate;if(x!==null){var E=x.child;if(E!==null){x.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Te=d;break e}Te=s.return}}var v=t.current;for(Te=v;Te!==null;){o=Te;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Te=y;else e:for(o=v;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yu(9,a)}}catch(w){Lt(a,a.return,w)}if(a===o){Te=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Te=S;break e}Te=a.return}}if(it=r,$r(),Pi&&typeof Pi.onPostCommitFiberRoot=="function")try{Pi.onPostCommitFiberRoot(du,t)}catch{}i=!0}return i}finally{ct=n,Qn.transition=e}}return!1}function Wg(t,e,n){e=Co(n,e),e=py(t,e,1),t=Or(t,e,1),e=xn(),t!==null&&(Za(t,1,e),Pn(t,e))}function Lt(t,e,n){if(t.tag===3)Wg(t,t,n);else for(;e!==null;){if(e.tag===3){Wg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(kr===null||!kr.has(i))){t=Co(n,t),t=my(e,t,1),e=Or(e,t,1),t=xn(),e!==null&&(Za(e,1,t),Pn(e,t));break}}e=e.return}}function KE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=xn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Qt&n)===n&&(Ht===4||Ht===3&&(Qt&130023424)===Qt&&500>Nt()-Vp?xs(t,0):Hp|=n),Pn(t,e)}function Fy(t,e){e===0&&(t.mode&1?(e=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):e=1);var n=xn();t=nr(t,e),t!==null&&(Za(t,e,n),Pn(t,n))}function JE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fy(t,n)}function ZE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Fy(t,n)}var Uy;Uy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Cn.current)An=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return An=!1,BE(t,e,n);An=!!(t.flags&131072)}else An=!1,Mt&&e.flags&1048576&&zv(e,Bc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pc(t,e),t=e.pendingProps;var r=wo(e,hn.current);vo(e,n),r=Fp(null,e,i,t,r,n);var s=Up();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rn(i)?(s=!0,Oc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pp(e),r.updater=vu,e.stateNode=r,r._reactInternals=e,Ff(e,i,t,n),e=kf(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&Mp(e),mn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(pc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=eM(i),t=ci(i,t),r){case 0:e=Of(null,e,i,t,n);break e;case 1:e=Ng(null,e,i,t,n);break e;case 11:e=Dg(null,e,i,t,n);break e;case 14:e=Ig(null,e,i,ci(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),Of(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),Ng(t,e,i,r,n);case 3:e:{if(yy(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Xv(t,e),Vc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Co(Error(ce(423)),e),e=Fg(t,e,i,n,r);break e}else if(i!==r){r=Co(Error(ce(424)),e),e=Fg(t,e,i,n,r);break e}else for(Hn=Ur(e.stateNode.containerInfo.firstChild),Vn=e,Mt=!0,di=null,n=Wv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(To(),i===r){e=ir(t,e,n);break e}mn(t,e,i,n)}e=e.child}return e;case 5:return qv(e),t===null&&Df(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Af(i,r)?o=null:s!==null&&Af(i,s)&&(e.flags|=32),vy(t,e),mn(t,e,o,n),e.child;case 6:return t===null&&Df(e),null;case 13:return _y(t,e,n);case 4:return Lp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=bo(e,null,i,n):mn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),Dg(t,e,i,r,n);case 7:return mn(t,e,e.pendingProps,n),e.child;case 8:return mn(t,e,e.pendingProps.children,n),e.child;case 12:return mn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,yt(zc,i._currentValue),i._currentValue=o,s!==null)if(gi(s.value,o)){if(s.children===r.children&&!Cn.current){e=ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ji(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),If(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),If(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vo(e,n),r=ti(r),i=i(r),e.flags|=1,mn(t,e,i,n),e.child;case 14:return i=e.type,r=ci(i,e.pendingProps),r=ci(i.type,r),Ig(t,e,i,r,n);case 15:return gy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),pc(t,e),e.tag=1,Rn(i)?(t=!0,Oc(e)):t=!1,vo(e,n),hy(e,i,r),Ff(e,i,r,n),kf(null,e,i,!0,t,n);case 19:return Sy(t,e,n);case 22:return xy(t,e,n)}throw Error(ce(156,e.tag))};function Oy(t,e){return uv(t,e)}function QE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,e,n,i){return new QE(t,e,n,i)}function Xp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eM(t){if(typeof t=="function")return Xp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dp)return 11;if(t===fp)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=Zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case to:return vs(n.children,r,s,e);case up:o=8,r|=8;break;case sf:return t=Zn(12,n,e,r|2),t.elementType=sf,t.lanes=s,t;case of:return t=Zn(13,n,e,r),t.elementType=of,t.lanes=s,t;case af:return t=Zn(19,n,e,r),t.elementType=af,t.lanes=s,t;case qx:return Su(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jx:o=10;break e;case Xx:o=9;break e;case dp:o=11;break e;case fp:o=14;break e;case Mr:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Zn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function vs(t,e,n,i){return t=Zn(7,t,i,e),t.lanes=n,t}function Su(t,e,n,i){return t=Zn(22,t,i,e),t.elementType=qx,t.lanes=n,t.stateNode={isHidden:!1},t}function ld(t,e,n){return t=Zn(6,t,null,e),t.lanes=n,t}function cd(t,e,n){return e=Zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qp(t,e,n,i,r,s,o,a,l){return t=new tM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pp(s),t}function nM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:eo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ky(t){if(!t)return Gr;t=t._reactInternals;e:{if(Ps(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Rn(n))return kv(t,n,e)}return e}function By(t,e,n,i,r,s,o,a,l){return t=qp(n,i,!0,t,r,s,o,a,l),t.context=ky(null),n=t.current,i=xn(),r=Br(n),s=Ji(i,r),s.callback=e??null,Or(n,s,r),t.current.lanes=r,Za(t,r,i),Pn(t,i),t}function Eu(t,e,n,i){var r=e.current,s=xn(),o=Br(r);return n=ky(n),e.context===null?e.context=n:e.pendingContext=n,e=Ji(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Or(r,e,o),t!==null&&(mi(t,r,o,s),dc(t,r,o)),o}function Kc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $p(t,e){jg(t,e),(t=t.alternate)&&jg(t,e)}function iM(){return null}var zy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yp(t){this._internalRoot=t}Mu.prototype.render=Yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Eu(t,e,null,null)};Mu.prototype.unmount=Yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ws(function(){Eu(null,t,null,null)}),e[tr]=null}};function Mu(t){this._internalRoot=t}Mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=xv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<br.length&&e!==0&&e<br[n].priority;n++);br.splice(n,0,t),n===0&&yv(t)}};function Kp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xg(){}function rM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Kc(o);s.call(c)}}var o=By(e,i,t,0,null,!1,!1,"",Xg);return t._reactRootContainer=o,t[tr]=o.current,Na(t.nodeType===8?t.parentNode:t),ws(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Kc(l);a.call(c)}}var l=qp(t,0,!1,null,null,!1,!1,"",Xg);return t._reactRootContainer=l,t[tr]=l.current,Na(t.nodeType===8?t.parentNode:t),ws(function(){Eu(e,l,n,i)}),l}function Tu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Kc(o);a.call(l)}}Eu(e,o,t,r)}else o=rM(n,e,t,r,i);return Kc(o)}mv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(mp(e,n|1),Pn(e,Nt()),!(it&6)&&(Ro=Nt()+500,$r()))}break;case 13:ws(function(){var i=nr(t,1);if(i!==null){var r=xn();mi(i,t,1,r)}}),$p(t,1)}};gp=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=xn();mi(e,t,134217728,n)}$p(t,134217728)}};gv=function(t){if(t.tag===13){var e=Br(t),n=nr(t,e);if(n!==null){var i=xn();mi(n,t,e,i)}$p(t,e)}};xv=function(){return ct};vv=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};xf=function(t,e,n){switch(e){case"input":if(uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=mu(i);if(!r)throw Error(ce(90));Yx(i),uf(i,r)}}}break;case"textarea":Jx(t,n);break;case"select":e=n.value,e!=null&&po(t,!!n.multiple,e,!1)}};rv=Gp;sv=ws;var sM={usingClientEntryPoint:!1,Events:[el,so,mu,nv,iv,Gp]},ea={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oM={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lv(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||iM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{du=Al.inject(oM),Pi=Al}catch{}}Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sM;Wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kp(e))throw Error(ce(200));return nM(t,e,null,n)};Wn.createRoot=function(t,e){if(!Kp(t))throw Error(ce(299));var n=!1,i="",r=zy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qp(t,1,!1,null,null,n,!1,i,r),t[tr]=e.current,Na(t.nodeType===8?t.parentNode:t),new Yp(e)};Wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=lv(e),t=t===null?null:t.stateNode,t};Wn.flushSync=function(t){return ws(t)};Wn.hydrate=function(t,e,n){if(!wu(e))throw Error(ce(200));return Tu(null,t,e,!0,n)};Wn.hydrateRoot=function(t,e,n){if(!Kp(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=zy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=By(e,null,t,1,n??null,r,!1,s,o),t[tr]=e.current,Na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Mu(e)};Wn.render=function(t,e,n){if(!wu(e))throw Error(ce(200));return Tu(null,t,e,!1,n)};Wn.unmountComponentAtNode=function(t){if(!wu(t))throw Error(ce(40));return t._reactRootContainer?(ws(function(){Tu(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};Wn.unstable_batchedUpdates=Gp;Wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wu(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Tu(t,e,n,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426";function Hy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hy)}catch(t){console.error(t)}}Hy(),Hx.exports=Wn;var aM=Hx.exports,qg=aM;nf.createRoot=qg.createRoot,nf.hydrateRoot=qg.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ga(){return Ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ga.apply(null,arguments)}var Lr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Lr||(Lr={}));const $g="popstate";function lM(t){t===void 0&&(t={});function e(r,s){let{pathname:o="/",search:a="",hash:l=""}=Ls(r.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Kf("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let o=r.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:Jc(s))}function i(r,s){bu(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return uM(e,n,i,t)}function Ft(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cM(){return Math.random().toString(36).substr(2,8)}function Yg(t,e){return{usr:t.state,key:t.key,idx:e}}function Kf(t,e,n,i){return n===void 0&&(n=null),Ga({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ls(e):e,{state:n,key:e&&e.key||i||cM()})}function Jc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ls(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function uM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Lr.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Ga({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function f(){a=Lr.Pop;let g=u(),d=g==null?null:g-c;c=g,l&&l({action:a,location:E.location,delta:d})}function h(g,d){a=Lr.Push;let v=Kf(E.location,g,d);n&&n(v,g),c=u()+1;let y=Yg(v,c),S=E.createHref(v);try{o.pushState(y,"",S)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;r.location.assign(S)}s&&l&&l({action:a,location:E.location,delta:1})}function m(g,d){a=Lr.Replace;let v=Kf(E.location,g,d);n&&n(v,g),c=u();let y=Yg(v,c),S=E.createHref(v);o.replaceState(y,"",S),s&&l&&l({action:a,location:E.location,delta:0})}function x(g){let d=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof g=="string"?g:Jc(g);return v=v.replace(/ $/,"%20"),Ft(d,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,d)}let E={get action(){return a},get location(){return t(r,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener($g,f),l=g,()=>{r.removeEventListener($g,f),l=null}},createHref(g){return e(r,g)},createURL:x,encodeLocation(g){let d=x(g);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:m,go(g){return o.go(g)}};return E}var Kg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Kg||(Kg={}));function dM(t,e,n){return n===void 0&&(n="/"),fM(t,e,n)}function fM(t,e,n,i){let r=typeof e=="string"?Ls(e):e,s=Jp(r.pathname||"/",n);if(s==null)return null;let o=Vy(t);hM(o);let a=null,l=TM(s);for(let c=0;a==null&&c<o.length;++c)a=EM(o[c],l);return a}function Vy(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ft(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Hr([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Ft(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Vy(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:_M(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Gy(s.path))r(s,o,l)}),e}function Gy(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Gy(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function hM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const pM=/^:[\w-]+$/,mM=3,gM=2,xM=1,vM=10,yM=-2,Jg=t=>t==="*";function _M(t,e){let n=t.split("/"),i=n.length;return n.some(Jg)&&(i+=yM),e&&(i+=gM),n.filter(r=>!Jg(r)).reduce((r,s)=>r+(pM.test(s)?mM:s===""?xM:vM),i)}function SM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function EM(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",f=MM({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Hr([s,f.pathname]),pathnameBase:PM(Hr([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Hr([s,f.pathnameBase]))}return o}function MM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=wM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,f)=>{let{paramName:h,isOptional:m}=u;if(h==="*"){let E=a[f]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const x=a[f];return m&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function wM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),bu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function TM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const bM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AM=t=>bM.test(t);function CM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Ls(t):t,s;if(n)if(AM(n))s=n;else{if(n.includes("//")){let o=n;n=Wy(n),bu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Zg(n.substring(1),"/"):s=Zg(n,e)}else s=e;return{pathname:s,search:LM(i),hash:DM(r)}}function Zg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ud(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function RM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Zp(t,e){let n=RM(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Qp(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Ls(t):(r=Ga({},t),Ft(!r.pathname||!r.pathname.includes("?"),ud("?","pathname","search",r)),Ft(!r.pathname||!r.pathname.includes("#"),ud("#","pathname","hash",r)),Ft(!r.search||!r.search.includes("#"),ud("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=CM(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Wy=t=>t.replace(/\/\/+/g,"/"),Hr=t=>Wy(t.join("/")),PM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),LM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,DM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function IM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const jy=["post","put","patch","delete"];new Set(jy);const NM=["get",...jy];new Set(NM);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wa(){return Wa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Wa.apply(null,arguments)}const em=z.createContext(null),FM=z.createContext(null),Yr=z.createContext(null),Au=z.createContext(null),ar=z.createContext({outlet:null,matches:[],isDataRoute:!1}),Xy=z.createContext(null);function UM(t,e){let{relative:n}=e===void 0?{}:e;zo()||Ft(!1);let{basename:i,navigator:r}=z.useContext(Yr),{hash:s,pathname:o,search:a}=Yy(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Hr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function zo(){return z.useContext(Au)!=null}function lr(){return zo()||Ft(!1),z.useContext(Au).location}function qy(t){z.useContext(Yr).static||z.useLayoutEffect(t)}function qt(){let{isDataRoute:t}=z.useContext(ar);return t?YM():OM()}function OM(){zo()||Ft(!1);let t=z.useContext(em),{basename:e,future:n,navigator:i}=z.useContext(Yr),{matches:r}=z.useContext(ar),{pathname:s}=lr(),o=JSON.stringify(Zp(r,n.v7_relativeSplatPath)),a=z.useRef(!1);return qy(()=>{a.current=!0}),z.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let f=Qp(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Hr([e,f.pathname])),(u.replace?i.replace:i.push)(f,u.state,u)},[e,i,o,s,t])}function $y(){let{matches:t}=z.useContext(ar),e=t[t.length-1];return e?e.params:{}}function Yy(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=z.useContext(Yr),{matches:r}=z.useContext(ar),{pathname:s}=lr(),o=JSON.stringify(Zp(r,i.v7_relativeSplatPath));return z.useMemo(()=>Qp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function kM(t,e){return BM(t,e)}function BM(t,e,n,i){zo()||Ft(!1);let{navigator:r}=z.useContext(Yr),{matches:s}=z.useContext(ar),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=lr(),u;if(e){var f;let g=typeof e=="string"?Ls(e):e;l==="/"||(f=g.pathname)!=null&&f.startsWith(l)||Ft(!1),u=g}else u=c;let h=u.pathname||"/",m=h;if(l!=="/"){let g=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(g.length).join("/")}let x=dM(t,{pathname:m}),E=WM(x&&x.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:Hr([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:Hr([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return e&&E?z.createElement(Au.Provider,{value:{location:Wa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Lr.Pop}},E):E}function zM(){let t=$M(),e=IM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:r},n):null,null)}const HM=z.createElement(zM,null);class VM extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(ar.Provider,{value:this.props.routeContext},z.createElement(Xy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GM(t){let{routeContext:e,match:n,children:i}=t,r=z.useContext(em);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(ar.Provider,{value:e},i)}function WM(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);u>=0||Ft(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:h,errors:m}=n,x=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||x){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,f,h)=>{let m,x=!1,E=null,g=null;n&&(m=a&&f.route.id?a[f.route.id]:void 0,E=f.route.errorElement||HM,l&&(c<0&&h===0?(KM("route-fallback"),x=!0,g=null):c===h&&(x=!0,g=f.route.hydrateFallbackElement||null)));let d=e.concat(o.slice(0,h+1)),v=()=>{let y;return m?y=E:x?y=g:f.route.Component?y=z.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=u,z.createElement(GM,{match:f,routeContext:{outlet:u,matches:d,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?z.createElement(VM,{location:n.location,revalidation:n.revalidation,component:E,error:m,children:v(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):v()},null)}var Ky=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Ky||{}),Jy=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Jy||{});function jM(t){let e=z.useContext(em);return e||Ft(!1),e}function XM(t){let e=z.useContext(FM);return e||Ft(!1),e}function qM(t){let e=z.useContext(ar);return e||Ft(!1),e}function Zy(t){let e=qM(),n=e.matches[e.matches.length-1];return n.route.id||Ft(!1),n.route.id}function $M(){var t;let e=z.useContext(Xy),n=XM(),i=Zy();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function YM(){let{router:t}=jM(Ky.UseNavigateStable),e=Zy(Jy.UseNavigateStable),n=z.useRef(!1);return qy(()=>{n.current=!0}),z.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Wa({fromRouteId:e},s)))},[t,e])}const Qg={};function KM(t,e,n){Qg[t]||(Qg[t]=!0)}function JM(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ho(t){let{to:e,replace:n,state:i,relative:r}=t;zo()||Ft(!1);let{future:s,static:o}=z.useContext(Yr),{matches:a}=z.useContext(ar),{pathname:l}=lr(),c=qt(),u=Qp(e,Zp(a,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(u);return z.useEffect(()=>c(JSON.parse(f),{replace:n,state:i,relative:r}),[c,f,r,n,i]),null}function Yt(t){Ft(!1)}function ZM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Lr.Pop,navigator:s,static:o=!1,future:a}=t;zo()&&Ft(!1);let l=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:l,navigator:s,static:o,future:Wa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Ls(i));let{pathname:u="/",search:f="",hash:h="",state:m=null,key:x="default"}=i,E=z.useMemo(()=>{let g=Jp(u,l);return g==null?null:{location:{pathname:g,search:f,hash:h,state:m,key:x},navigationType:r}},[l,u,f,h,m,x,r]);return E==null?null:z.createElement(Yr.Provider,{value:c},z.createElement(Au.Provider,{children:n,value:E}))}function QM(t){let{children:e,location:n}=t;return kM(Jf(e),n)}new Promise(()=>{});function Jf(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(i,r)=>{if(!z.isValidElement(i))return;let s=[...e,r];if(i.type===z.Fragment){n.push.apply(n,Jf(i.props.children,s));return}i.type!==Yt&&Ft(!1),!i.props.index||!i.props.children||Ft(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Jf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zf(){return Zf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zf.apply(null,arguments)}function ew(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function tw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nw(t,e){return t.button===0&&(!e||e==="_self")&&!tw(t)}function Qf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let i=t[n];return e.concat(Array.isArray(i)?i.map(r=>[n,r]):[[n,i]])},[]))}function iw(t,e){let n=Qf(t);return e&&e.forEach((i,r)=>{n.has(r)||e.getAll(r).forEach(s=>{n.append(r,s)})}),n}const rw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sw="6";try{window.__reactRouterVersion=sw}catch{}const ow="startTransition",e0=KS[ow];function aw(t){let{basename:e,children:n,future:i,window:r}=t,s=z.useRef();s.current==null&&(s.current=lM({window:r,v5Compat:!0}));let o=s.current,[a,l]=z.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=z.useCallback(f=>{c&&e0?e0(()=>l(f)):l(f)},[l,c]);return z.useLayoutEffect(()=>o.listen(u),[o,u]),z.useEffect(()=>JM(i),[i]),z.createElement(ZM,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const lw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,un=z.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:f}=e,h=ew(e,rw),{basename:m}=z.useContext(Yr),x,E=!1;if(typeof c=="string"&&cw.test(c)&&(x=c,lw))try{let y=new URL(window.location.href),S=c.startsWith("//")?new URL(y.protocol+c):new URL(c),w=Jp(S.pathname,m);S.origin===y.origin&&w!=null?c=w+S.search+S.hash:E=!0}catch{}let g=UM(c,{relative:r}),d=uw(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:f});function v(y){i&&i(y),y.defaultPrevented||d(y)}return z.createElement("a",Zf({},h,{href:x||g,onClick:E||s?i:v,ref:n,target:l}))});var t0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(t0||(t0={}));var n0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(n0||(n0={}));function uw(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=qt(),c=lr(),u=Yy(t,{relative:o});return z.useCallback(f=>{if(nw(f,n)){f.preventDefault();let h=i!==void 0?i:Jc(c)===Jc(u);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,i,r,n,t,s,o,a])}function Qy(t){let e=z.useRef(Qf(t)),n=z.useRef(!1),i=lr(),r=z.useMemo(()=>iw(i.search,n.current?null:e.current),[i.search]),s=qt(),o=z.useCallback((a,l)=>{const c=Qf(typeof a=="function"?a(r):a);n.current=!0,s("?"+c,l)},[s,r]);return[r,o]}const dw="modulepreload",fw=function(t){return"/"+t},i0={},hw=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=fw(l),l in i0)return;i0[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":dw,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,m)=>{f.addEventListener("load",h),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function pw(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:i,onRegistered:r,onRegisteredSW:s,onRegisterError:o}=t;let a,l;const c=async(f=!0)=>{await l};async function u(){if("serviceWorker"in navigator){if(a=await hw(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/sw.js",{scope:"/",type:"classic"})).catch(f=>{o==null||o(f)}),!a)return;a.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),a.addEventListener("installed",f=>{f.isUpdate||i==null||i()}),a.register({immediate:e}).then(f=>{s?s("/sw.js",f):r==null||r(f)}).catch(f=>{o==null||o(f)})}}return l=u(),c}function e_(t,e){return function(){return t.apply(e,arguments)}}const{toString:mw}=Object.prototype,{getPrototypeOf:Po}=Object,{iterator:nl,toStringTag:t_}=Symbol,Zc=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),ja=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),Zc(n,e))return!0;n=Po(n)}return!1},gw=(t,e)=>t!=null&&ja(t,e)?t[e]:void 0,tm=(t=>e=>{const n=mw.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),xi=t=>(t=t.toLowerCase(),e=>tm(e)===t),Cu=t=>e=>typeof e===t,{isArray:Ts}=Array,Lo=Cu("undefined");function Ho(t){return t!==null&&!Lo(t)&&t.constructor!==null&&!Lo(t.constructor)&&Ln(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const n_=xi("ArrayBuffer");function xw(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&n_(t.buffer),e}const vw=Cu("string"),Ln=Cu("function"),i_=Cu("number"),Vo=t=>t!==null&&typeof t=="object",yw=t=>t===!0||t===!1,vc=t=>{if(!Vo(t))return!1;const e=Po(t);return(e===null||e===Object.prototype||Po(e)===null)&&!ja(t,t_)&&!ja(t,nl)},_w=t=>{if(!Vo(t)||Ho(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Sw=xi("Date"),Ew=xi("File"),Mw=t=>!!(t&&typeof t.uri<"u"),ww=t=>t&&typeof t.getParts<"u",Tw=xi("Blob"),bw=xi("FileList"),Aw=t=>Vo(t)&&Ln(t.pipe);function Cw(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const r0=Cw(),s0=typeof r0.FormData<"u"?r0.FormData:void 0,Rw=t=>{if(!t)return!1;if(s0&&t instanceof s0)return!0;const e=Po(t);if(!e||e===Object.prototype||!Ln(t.append))return!1;const n=tm(t);return n==="formdata"||n==="object"&&Ln(t.toString)&&t.toString()==="[object FormData]"},Pw=xi("URLSearchParams"),[Lw,Dw,Iw,Nw]=["ReadableStream","Request","Response","Headers"].map(xi),Fw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function il(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Ts(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(Ho(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function r_(t,e){if(Ho(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const ps=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,s_=t=>!Lo(t)&&t!==ps;function eh(...t){const{caseless:e,skipUndefined:n}=s_(this)&&this||{},i={},r=(s,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&r_(i,o)||o,l=Zc(i,a)?i[a]:void 0;vc(l)&&vc(s)?i[a]=eh(l,s):vc(s)?i[a]=eh({},s):Ts(s)?i[a]=s.slice():(!n||!Lo(s))&&(i[a]=s)};for(let s=0,o=t.length;s<o;s++){const a=t[s];if(!a||Ho(a)||(il(a,r),typeof a!="object"||Ts(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];qw.call(a,u)&&r(a[u],u)}}return i}const Uw=(t,e,n,{allOwnKeys:i}={})=>(il(e,(r,s)=>{n&&Ln(r)?Object.defineProperty(t,s,{__proto__:null,value:e_(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),Ow=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),kw=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},Bw=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Po(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},zw=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Hw=t=>{if(!t)return null;if(Ts(t))return t;let e=t.length;if(!i_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Vw=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Po(Uint8Array)),Gw=(t,e)=>{const i=(t&&t[nl]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},Ww=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},jw=xi("HTMLFormElement"),Xw=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:qw}=Object.prototype,$w=xi("RegExp"),o_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};il(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},Yw=t=>{o_(t,(e,n)=>{if(Ln(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(Ln(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Kw=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Ts(t)?i(t):i(String(t).split(e)),n},Jw=()=>{},Zw=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Qw(t){return!!(t&&Ln(t.append)&&t[t_]==="FormData"&&t[nl])}const eT=t=>{const e=new WeakSet,n=i=>{if(Vo(i)){if(e.has(i))return;if(Ho(i))return i;if(!("toJSON"in i)){e.add(i);const r=Ts(i)?[]:{};return il(i,(s,o)=>{const a=n(s);!Lo(a)&&(r[o]=a)}),e.delete(i),r}}return i};return n(t)},tT=xi("AsyncFunction"),nT=t=>t&&(Vo(t)||Ln(t))&&Ln(t.then)&&Ln(t.catch),a_=((t,e)=>t?setImmediate:e?((n,i)=>(ps.addEventListener("message",({source:r,data:s})=>{r===ps&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),ps.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ln(ps.postMessage)),iT=typeof queueMicrotask<"u"?queueMicrotask.bind(ps):typeof process<"u"&&process.nextTick||a_,l_=t=>t!=null&&Ln(t[nl]),rT=t=>t!=null&&ja(t,nl)&&l_(t),F={isArray:Ts,isArrayBuffer:n_,isBuffer:Ho,isFormData:Rw,isArrayBufferView:xw,isString:vw,isNumber:i_,isBoolean:yw,isObject:Vo,isPlainObject:vc,isEmptyObject:_w,isReadableStream:Lw,isRequest:Dw,isResponse:Iw,isHeaders:Nw,isUndefined:Lo,isDate:Sw,isFile:Ew,isReactNativeBlob:Mw,isReactNative:ww,isBlob:Tw,isRegExp:$w,isFunction:Ln,isStream:Aw,isURLSearchParams:Pw,isTypedArray:Vw,isFileList:bw,forEach:il,merge:eh,extend:Uw,trim:Fw,stripBOM:Ow,inherits:kw,toFlatObject:Bw,kindOf:tm,kindOfTest:xi,endsWith:zw,toArray:Hw,forEachEntry:Gw,matchAll:Ww,isHTMLForm:jw,hasOwnProperty:Zc,hasOwnProp:Zc,hasOwnInPrototypeChain:ja,getSafeProp:gw,reduceDescriptors:o_,freezeMethods:Yw,toObjectSet:Kw,toCamelCase:Xw,noop:Jw,toFiniteNumber:Zw,findKey:r_,global:ps,isContextDefined:s_,isSpecCompliantForm:Qw,toJSONObject:eT,isAsyncFn:tT,isThenable:nT,setImmediate:a_,asap:iT,isIterable:l_,isSafeIterable:rT},sT=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),oT=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&sT[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function aT(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const lT=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),cT=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function nm(t,e){return F.isArray(t)?t.map(n=>nm(n,e)):aT(String(t).replace(e,""))}const uT=t=>nm(t,lT),dT=t=>nm(t,cT);function c_(t){const e=Object.create(null);return F.forEach(t.toJSON(),(n,i)=>{e[i]=dT(n)}),e}const o0=Symbol("internals");function ta(t){return t&&String(t).trim().toLowerCase()}function yc(t){return t===!1||t==null?t:F.isArray(t)?t.map(yc):uT(String(t))}function fT(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const hT=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function dd(t,e,n,i,r){if(F.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!F.isString(e)){if(F.isString(i))return e.indexOf(i)!==-1;if(F.isRegExp(i))return i.test(e)}}function pT(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function mT(t,e){const n=F.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let fn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=ta(l);if(!u)return;const f=F.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=yc(a))}const o=(a,l)=>F.forEach(a,(c,u)=>s(c,u,l));if(F.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(F.isString(e)&&(e=e.trim())&&!hT(e))o(oT(e),n);else if(F.isObject(e)&&F.isSafeIterable(e)){let a=Object.create(null),l,c;for(const u of e){if(!F.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],F.hasOwnProp(a,c)?(l=a[c],a[c]=F.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=ta(e),e){const i=F.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return fT(r);if(F.isFunction(n))return n.call(this,r,i);if(F.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ta(e),e){const i=F.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||dd(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=ta(o),o){const a=F.findKey(i,o);a&&(!n||dd(i,i[a],a,n))&&(delete i[a],r=!0)}}return F.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||dd(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return F.forEach(this,(r,s)=>{const o=F.findKey(i,s);if(o){n[o]=yc(r),delete n[s];return}const a=e?pT(s):String(s).trim();a!==s&&delete n[s],n[a]=yc(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return F.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&F.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[o0]=this[o0]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=ta(o);i[a]||(mT(r,o),i[a]=!0)}return F.isArray(e)?e.forEach(s):s(e),this}};fn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);F.reduceDescriptors(fn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});F.freezeMethods(fn);const gT="[REDACTED ****]";function xT(t){if(F.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(F.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function vT(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),i=[],r=s=>{if(s===null||typeof s!="object"||F.isBuffer(s))return s;if(i.indexOf(s)!==-1)return;s instanceof fn&&(s=s.toJSON()),i.push(s);let o;if(F.isArray(s))o=[],s.forEach((a,l)=>{const c=r(a);F.isUndefined(c)||(o[l]=c)});else{if(!F.isPlainObject(s)&&xT(s))return i.pop(),s;o=Object.create(null);for(const[a,l]of Object.entries(s)){const c=n.has(a.toLowerCase())?gT:r(l);F.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return r(t)}let ye=class u_ extends Error{static from(e,n,i,r,s,o){const a=new u_(e.message,n||e.code,i,r,s);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&F.hasOwnProp(e,"redact")?e.redact:void 0,i=F.isArray(n)&&n.length>0?vT(e,n):F.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};ye.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ye.ERR_BAD_OPTION="ERR_BAD_OPTION";ye.ECONNABORTED="ECONNABORTED";ye.ETIMEDOUT="ETIMEDOUT";ye.ECONNREFUSED="ECONNREFUSED";ye.ERR_NETWORK="ERR_NETWORK";ye.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ye.ERR_DEPRECATED="ERR_DEPRECATED";ye.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ye.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ye.ERR_CANCELED="ERR_CANCELED";ye.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ye.ERR_INVALID_URL="ERR_INVALID_URL";ye.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const yT=null,d_=100;function th(t){return F.isPlainObject(t)||F.isArray(t)}function f_(t){return F.endsWith(t,"[]")?t.slice(0,-2):t}function fd(t,e,n){return t?t.concat(e).map(function(r,s){return r=f_(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function _T(t){return F.isArray(t)&&!t.some(th)}const ST=F.toFlatObject(F,{},null,function(e){return/^is[A-Z]/.test(e)});function Ru(t,e,n){if(!F.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=F.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,y){return!F.isUndefined(y[v])});const i=n.metaTokens,r=n.visitor||x,s=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?d_:n.maxDepth,c=a&&F.isSpecCompliantForm(e),u=[];if(!F.isFunction(r))throw new TypeError("visitor must be a function");function f(d){if(d===null)return"";if(F.isDate(d))return d.toISOString();if(F.isBoolean(d))return d.toString();if(!c&&F.isBlob(d))throw new ye("Blob is not supported. Use a Buffer instead.");if(F.isArrayBuffer(d)||F.isTypedArray(d)){if(c&&typeof a=="function")return new a([d]);if(typeof Buffer<"u")return Buffer.from(d);throw new ye("Blob is not supported. Use a Buffer instead.",ye.ERR_NOT_SUPPORT)}return d}function h(d){if(d>l)throw new ye("Object is too deeply nested ("+d+" levels). Max depth: "+l,ye.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(d,v){if(l===1/0)return JSON.stringify(d);const y=[];return JSON.stringify(d,function(w,T){if(!F.isObject(T))return T;for(;y.length&&y[y.length-1]!==this;)y.pop();return y.push(T),h(v+y.length-1),T})}function x(d,v,y){let S=d;if(F.isReactNative(e)&&F.isReactNativeBlob(d))return e.append(fd(y,v,s),f(d)),!1;if(d&&!y&&typeof d=="object"){if(F.endsWith(v,"{}"))v=i?v:v.slice(0,-2),d=m(d,1);else if(F.isArray(d)&&_T(d)||(F.isFileList(d)||F.endsWith(v,"[]"))&&(S=F.toArray(d)))return v=f_(v),S.forEach(function(T,A){!(F.isUndefined(T)||T===null)&&e.append(o===!0?fd([v],A,s):o===null?v:v+"[]",f(T))}),!1}return th(d)?!0:(e.append(fd(y,v,s),f(d)),!1)}const E=Object.assign(ST,{defaultVisitor:x,convertValue:f,isVisitable:th});function g(d,v,y=0){if(!F.isUndefined(d)){if(h(y),u.indexOf(d)!==-1)throw new Error("Circular reference detected in "+v.join("."));u.push(d),F.forEach(d,function(w,T){(!(F.isUndefined(w)||w===null)&&r.call(e,w,F.isString(T)?T.trim():T,v,E))===!0&&g(w,v?v.concat(T):[T],y+1)}),u.pop()}}if(!F.isObject(t))throw new TypeError("data must be an object");return g(t),e}function a0(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function im(t,e){this._pairs=[],t&&Ru(t,this,e)}const h_=im.prototype;h_.append=function(e,n){this._pairs.push([e,n])};h_.toString=function(e){const n=e?i=>e.call(this,i,a0):a0;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function ET(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function p_(t,e,n){if(!e)return t;t=t||"";const i=F.isFunction(n)?{serialize:n}:n,r=F.getSafeProp(i,"encode")||ET,s=F.getSafeProp(i,"serialize");let o;if(s?o=s(e,i):o=F.isURLSearchParams(e)?e.toString():new im(e,i).toString(r),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class l0{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){F.forEach(this.handlers,function(i){i!==null&&e(i)})}}const rm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},MT=typeof URLSearchParams<"u"?URLSearchParams:im,wT=typeof FormData<"u"?FormData:null,TT=typeof Blob<"u"?Blob:null,bT={isBrowser:!0,classes:{URLSearchParams:MT,FormData:wT,Blob:TT},protocols:["http","https","file","blob","url","data"]},sm=typeof window<"u"&&typeof document<"u",nh=typeof navigator=="object"&&navigator||void 0,AT=sm&&(!nh||["ReactNative","NativeScript","NS"].indexOf(nh.product)<0),CT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",RT=sm&&window.location.href||"http://localhost",PT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sm,hasStandardBrowserEnv:AT,hasStandardBrowserWebWorkerEnv:CT,navigator:nh,origin:RT},Symbol.toStringTag,{value:"Module"})),Jt={...PT,...bT};function LT(t,e){return Ru(t,new Jt.classes.URLSearchParams,{visitor:function(n,i,r,s){return Jt.isNode&&F.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const c0=d_;function m_(t){if(t>c0)throw new ye("FormData field is too deeply nested ("+t+" levels). Max depth: "+c0,ye.ERR_FORM_DATA_DEPTH_EXCEEDED)}function DT(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)m_(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function IT(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function g_(t){function e(n,i,r,s){m_(s);let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&F.isArray(r)?r.length:o,l?(F.hasOwnProp(r,o)?r[o]=F.isArray(r[o])?r[o].concat(i):[r[o],i]:r[o]=i,!a):((!F.hasOwnProp(r,o)||!F.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&F.isArray(r[o])&&(r[o]=IT(r[o])),!a)}if(F.isFormData(t)&&F.isFunction(t.entries)){const n={};return F.forEachEntry(t,(i,r)=>{e(DT(i),r,n,0)}),n}return null}const Os=(t,e)=>t!=null&&F.hasOwnProp(t,e)?t[e]:void 0;function NT(t,e,n){if(F.isString(t))try{return(e||JSON.parse)(t),F.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const rl={transitional:rm,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=F.isObject(e);if(s&&F.isHTMLForm(e)&&(e=new FormData(e)),F.isFormData(e))return r?JSON.stringify(g_(e)):e;if(F.isArrayBuffer(e)||F.isBuffer(e)||F.isStream(e)||F.isFile(e)||F.isBlob(e)||F.isReadableStream(e))return e;if(F.isArrayBufferView(e))return e.buffer;if(F.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){const l=Os(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return LT(e,l).toString();if((a=F.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Os(this,"env"),u=c&&c.FormData;return Ru(a?{"files[]":e}:e,u&&new u,l)}}return s||r?(n.setContentType("application/json",!1),NT(e)):e}],transformResponse:[function(e){const n=Os(this,"transitional")||rl.transitional,i=n&&n.forcedJSONParsing,r=Os(this,"responseType"),s=r==="json";if(F.isResponse(e)||F.isReadableStream(e))return e;if(e&&F.isString(e)&&(i&&!r||s)){const a=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,Os(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?ye.from(l,ye.ERR_BAD_RESPONSE,this,null,Os(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jt.classes.FormData,Blob:Jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch","query"],t=>{rl.headers[t]={}});function hd(t,e){const n=this||rl,i=e||n,r=fn.from(i.headers);let s=i.data;return F.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function x_(t){return!!(t&&t.__CANCEL__)}let sl=class extends ye{constructor(e,n,i){super(e??"canceled",ye.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function v_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new ye("Request failed with status code "+n.status,n.status>=400&&n.status<500?ye.ERR_BAD_REQUEST:ye.ERR_BAD_RESPONSE,n.config,n.request,n))}function FT(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function UT(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,h=0;for(;f!==r;)h+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const m=u&&c-u;return m?Math.round(h*1e3/m):void 0}}function OT(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Qc=(t,e,n=3)=>{let i=0;const r=UT(50,250);return OT(s=>{if(!s||typeof s.loaded!="number")return;const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=r(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},u0=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},d0=t=>(...e)=>F.asap(()=>t(...e)),kT=Jt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Jt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Jt.origin),Jt.navigator&&/(msie|trident)/i.test(Jt.navigator.userAgent)):()=>!0,BT=Jt.hasStandardBrowserEnv?{write(t,e,n,i,r,s,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];F.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),F.isString(i)&&a.push(`path=${i}`),F.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),F.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),r=i.indexOf("=");if(r!==-1&&i.slice(0,r)===t)try{return decodeURIComponent(i.slice(r+1))}catch{return i.slice(r+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function zT(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function HT(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const VT=/^https?:(?!\/\/)/i,GT=/[\t\n\r]/g;function WT(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function jT(t){return WT(t).replace(GT,"")}function f0(t,e){if(typeof t=="string"&&VT.test(jT(t)))throw new ye('Invalid URL: missing "//" after protocol',ye.ERR_INVALID_URL,e)}function y_(t,e,n,i){f0(e,i);let r=!zT(e);return t&&(r||n===!1)?(f0(t,i),HT(t,e)):e}const h0=t=>t instanceof fn?{...t}:t;function bs(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,f,h,m){return F.isPlainObject(u)&&F.isPlainObject(f)?F.merge.call({caseless:m},u,f):F.isPlainObject(f)?F.merge({},f):F.isArray(f)?f.slice():f}function r(u,f,h,m){if(F.isUndefined(f)){if(!F.isUndefined(u))return i(void 0,u,h,m)}else return i(u,f,h,m)}function s(u,f){if(!F.isUndefined(f))return i(void 0,f)}function o(u,f){if(F.isUndefined(f)){if(!F.isUndefined(u))return i(void 0,u)}else return i(void 0,f)}function a(u){const f=F.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!F.isUndefined(f))if(F.isPlainObject(f)){if(F.hasOwnProp(f,u))return f[u]}else return;const h=F.hasOwnProp(t,"transitional")?t.transitional:void 0;if(F.isPlainObject(h)&&F.hasOwnProp(h,u))return h[u]}function l(u,f,h){if(F.hasOwnProp(e,h))return i(u,f);if(F.hasOwnProp(t,h))return i(void 0,u)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,f,h)=>r(h0(u),h0(f),h,!0)};return F.forEach(Object.keys({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const h=F.hasOwnProp(c,f)?c[f]:r,m=F.hasOwnProp(t,f)?t[f]:void 0,x=F.hasOwnProp(e,f)?e[f]:void 0,E=h(m,x,f);F.isUndefined(E)&&h!==l||(n[f]=E)}),F.hasOwnProp(e,"validateStatus")&&F.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(F.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const XT=["content-type","content-length"];function qT(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{XT.includes(i.toLowerCase())&&t.set(i,r)})}const $T=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function __(t){const e=bs({},t),n=h=>F.hasOwnProp(e,h)?e[h]:void 0,i=n("data");let r=n("withXSRFToken");const s=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=fn.from(a),e.url=p_(y_(c,f,u,e),n("params"),n("paramsSerializer")),l){const h=F.getSafeProp(l,"username")||"",m=F.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(h+":"+(m?$T(m):"")))}catch(x){throw ye.from(x,ye.ERR_BAD_OPTION_VALUE,t)}}if(F.isFormData(i)&&(Jt.hasStandardBrowserEnv||Jt.hasStandardBrowserWebWorkerEnv||F.isReactNative(i)?a.setContentType(void 0):F.isFunction(i.getHeaders)&&qT(a,i.getHeaders(),n("formDataHeaderPolicy"))),Jt.hasStandardBrowserEnv&&(F.isFunction(r)&&(r=r(e)),r===!0||r==null&&kT(e.url))){const m=s&&o&&BT.read(o);m&&a.set(s,m)}return e}const YT=typeof XMLHttpRequest<"u",KT=YT&&function(t){return new Promise(function(n,i){const r=__(t);let s=r.data;const o=fn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,h,m,x;function E(){m&&m(),x&&x(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let g=new XMLHttpRequest;g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout;function d(){if(!g)return;const y=fn.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),w={data:!a||a==="text"||a==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:y,config:t,request:g};v_(function(A){n(A),E()},function(A){i(A),E()},w),g=null}"onloadend"in g?g.onloadend=d:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.startsWith("file:"))||setTimeout(d)},g.onabort=function(){g&&(i(new ye("Request aborted",ye.ECONNABORTED,t,g)),E(),g=null)},g.onerror=function(S){const w=S&&S.message?S.message:"Network Error",T=new ye(w,ye.ERR_NETWORK,t,g);T.event=S||null,i(T),E(),g=null},g.ontimeout=function(){let S=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const w=r.transitional||rm;r.timeoutErrorMessage&&(S=r.timeoutErrorMessage),i(new ye(S,w.clarifyTimeoutError?ye.ETIMEDOUT:ye.ECONNABORTED,t,g)),E(),g=null},s===void 0&&o.setContentType(null),"setRequestHeader"in g&&F.forEach(c_(o),function(S,w){g.setRequestHeader(w,S)}),F.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),a&&a!=="json"&&(g.responseType=r.responseType),c&&([h,x]=Qc(c,!0),g.addEventListener("progress",h)),l&&g.upload&&([f,m]=Qc(l),g.upload.addEventListener("progress",f),g.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(u=y=>{g&&(i(!y||y.type?new sl(null,t,g):y),g.abort(),E(),g=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const v=FT(r.url);if(v&&!Jt.protocols.includes(v)){i(new ye("Unsupported protocol "+v+":",ye.ERR_BAD_REQUEST,t)),E();return}g.send(s||null)})},JT=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const r=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof ye?c:new sl(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{s=null,r(new ye(`timeout of ${e}ms exceeded`,ye.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>l.addEventListener("abort",r,{once:!0}));const{signal:a}=n;return a.unsubscribe=()=>F.asap(o),a},ZT=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},QT=async function*(t,e){for await(const n of eb(t))yield*ZT(n,e)},eb=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},p0=(t,e,n,i)=>{const r=QT(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let h=s+=f;n(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},eu=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,tb=(t,e,n)=>e+2<n&&eu(t.charCodeAt(e+1))&&eu(t.charCodeAt(e+2));function nb(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let m=0;m<a;m++)if(i.charCodeAt(m)===37&&m+2<a){const x=i.charCodeAt(m+1),E=i.charCodeAt(m+2);eu(x)&&eu(E)&&(o-=2,m+=2)}let l=0,c=a-1;const u=m=>m>=2&&i.charCodeAt(m-2)===37&&i.charCodeAt(m-1)===51&&(i.charCodeAt(m)===68||i.charCodeAt(m)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const h=Math.floor(o/4)*3-(l||0);return h>0?h:0}let s=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l===37&&tb(i,o,a))s+=1,o+=2;else if(l<128)s+=1;else if(l<2048)s+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(s+=4,o++):s+=3}else s+=3}return s}const om="1.18.1",m0=64*1024,{isFunction:Cl}=F,ib=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),g0=t=>{if(!F.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},x0=(t,...e)=>{try{return!!t(...e)}catch{return!1}},rb=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},sb=t=>{const e=F.global!==void 0&&F.global!==null?F.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=F.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:r,Request:s,Response:o}=t,a=r?Cl(r):typeof fetch=="function",l=Cl(s),c=Cl(o);if(!a)return!1;const u=a&&Cl(n),f=a&&(typeof i=="function"?(d=>v=>d.encode(v))(new i):async d=>new Uint8Array(await new s(d).arrayBuffer())),h=l&&u&&x0(()=>{let d=!1;const v=new s(Jt.origin,{body:new n,method:"POST",get duplex(){return d=!0,"half"}}),y=v.headers.has("Content-Type");return v.body!=null&&v.body.cancel(),d&&!y}),m=c&&u&&x0(()=>F.isReadableStream(new o("").body)),x={stream:m&&(d=>d.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!x[d]&&(x[d]=(v,y)=>{let S=v&&v[d];if(S)return S.call(v);throw new ye(`Response type '${d}' is not supported`,ye.ERR_NOT_SUPPORT,y)})});const E=async d=>{if(d==null)return 0;if(F.isBlob(d))return d.size;if(F.isSpecCompliantForm(d))return(await new s(Jt.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(F.isArrayBufferView(d)||F.isArrayBuffer(d))return d.byteLength;if(F.isURLSearchParams(d)&&(d=d+""),F.isString(d))return(await f(d)).byteLength},g=async(d,v)=>{const y=F.toFiniteNumber(d.getContentLength());return y??E(v)};return async d=>{let{url:v,method:y,data:S,signal:w,cancelToken:T,timeout:A,onDownloadProgress:_,onUploadProgress:C,responseType:L,headers:D,withCredentials:B="same-origin",fetchOptions:j,maxContentLength:te,maxBodyLength:H}=__(d);const J=F.isNumber(te)&&te>-1,W=F.isNumber(H)&&H>-1,O=G=>F.hasOwnProp(d,G)?d[G]:void 0;let K=r||fetch;L=L?(L+"").toLowerCase():"text";let Z=JT([w,T&&T.toAbortSignal()],A),ne=null;const le=Z&&Z.unsubscribe&&(()=>{Z.unsubscribe()});let Be,Xe=null;const Ce=()=>new ye("Request body larger than maxBodyLength limit",ye.ERR_BAD_REQUEST,d,ne);try{let G;const oe=O("auth");if(oe){const ge=F.getSafeProp(oe,"username")||"",et=F.getSafeProp(oe,"password")||"";G={username:ge,password:et}}if(rb(v)){const ge=new URL(v,Jt.origin);if(!G&&(ge.username||ge.password)){const et=g0(ge.username),ut=g0(ge.password);G={username:et,password:ut}}(ge.username||ge.password)&&(ge.username="",ge.password="",v=ge.href)}if(G&&(D.delete("authorization"),D.set("Authorization","Basic "+btoa(ib((G.username||"")+":"+(G.password||""))))),J&&typeof v=="string"&&v.startsWith("data:")&&nb(v)>te)throw new ye("maxContentLength size of "+te+" exceeded",ye.ERR_BAD_RESPONSE,d,ne);if(W&&y!=="get"&&y!=="head"){const ge=await E(S);if(typeof ge=="number"&&isFinite(ge)&&(Be=ge,ge>H))throw Ce()}const ae=W&&(F.isReadableStream(S)||F.isStream(S)),Re=(ge,et,ut)=>p0(ge,m0,mt=>{if(W&&mt>H)throw Xe=Ce();et&&et(mt)},ut);if(h&&y!=="get"&&y!=="head"&&(C||ae)){if(Be=Be??await g(D,S),Be!==0||ae){let ge=new s(v,{method:"POST",body:S,duplex:"half"}),et;if(F.isFormData(S)&&(et=ge.headers.get("content-type"))&&D.setContentType(et),ge.body){const[ut,mt]=C&&u0(Be,Qc(d0(C)))||[];S=Re(ge.body,ut,mt)}}}else if(ae&&!l&&u&&y!=="get"&&y!=="head")S=Re(S);else if(ae&&l&&!h&&y!=="get"&&y!=="head")throw new ye("Stream request bodies are not supported by the current fetch implementation",ye.ERR_NOT_SUPPORT,d,ne);F.isString(B)||(B=B?"include":"omit");const ze=l&&"credentials"in s.prototype;if(F.isFormData(S)){const ge=D.getContentType();ge&&/^multipart\/form-data/i.test(ge)&&!/boundary=/i.test(ge)&&D.delete("content-type")}D.set("User-Agent","axios/"+om,!1);const Fe={...j,signal:Z,method:y.toUpperCase(),headers:c_(D.normalize()),body:S,duplex:"half",credentials:ze?B:void 0};ne=l&&new s(v,Fe);let st=await(l?K(ne,j):K(v,Fe));const qe=fn.from(st.headers);if(J){const ge=F.toFiniteNumber(qe.getContentLength());if(ge!=null&&ge>te)throw new ye("maxContentLength size of "+te+" exceeded",ye.ERR_BAD_RESPONSE,d,ne)}const ot=m&&(L==="stream"||L==="response");if(m&&st.body&&(_||J||ot&&le)){const ge={};["status","statusText","headers"].forEach(gt=>{ge[gt]=st[gt]});const et=F.toFiniteNumber(qe.getContentLength()),[ut,mt]=_&&u0(et,Qc(d0(_),!0))||[];let Ot=0;const Et=gt=>{if(J&&(Ot=gt,Ot>te))throw new ye("maxContentLength size of "+te+" exceeded",ye.ERR_BAD_RESPONSE,d,ne);ut&&ut(gt)};st=new o(p0(st.body,m0,Et,()=>{mt&&mt(),le&&le()}),ge)}L=L||"text";let We=await x[F.findKey(x,L)||"text"](st,d);if(J&&!m&&!ot){let ge;if(We!=null&&(typeof We.byteLength=="number"?ge=We.byteLength:typeof We.size=="number"?ge=We.size:typeof We=="string"&&(ge=typeof i=="function"?new i().encode(We).byteLength:We.length)),typeof ge=="number"&&ge>te)throw new ye("maxContentLength size of "+te+" exceeded",ye.ERR_BAD_RESPONSE,d,ne)}return!ot&&le&&le(),await new Promise((ge,et)=>{v_(ge,et,{data:We,headers:fn.from(st.headers),status:st.status,statusText:st.statusText,config:d,request:ne})})}catch(G){if(le&&le(),Z&&Z.aborted&&Z.reason instanceof ye){const oe=Z.reason;throw oe.config=d,ne&&(oe.request=ne),G!==oe&&Object.defineProperty(oe,"cause",{__proto__:null,value:G,writable:!0,enumerable:!1,configurable:!0}),oe}if(Xe)throw ne&&!Xe.request&&(Xe.request=ne),Xe;if(G instanceof ye)throw ne&&!G.request&&(G.request=ne),G;if(G&&G.name==="TypeError"&&/Load failed|fetch/i.test(G.message)){const oe=new ye("Network Error",ye.ERR_NETWORK,d,ne,G&&G.response);throw Object.defineProperty(oe,"cause",{__proto__:null,value:G.cause||G,writable:!0,enumerable:!1,configurable:!0}),oe}throw ye.from(G,G&&G.code,d,ne,G&&G.response)}}},ob=new Map,S_=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let o=s.length,a=o,l,c,u=ob;for(;a--;)l=s[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:sb(e)),u=c;return c};S_();const am={http:yT,xhr:KT,fetch:{get:S_}};F.forEach(am,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const v0=t=>`- ${t}`,ab=t=>F.isFunction(t)||t===null||t===!1;function lb(t,e){t=F.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let o=0;o<n;o++){i=t[o];let a;if(r=i,!ab(i)&&(r=am[(a=String(i)).toLowerCase()],r===void 0))throw new ye(`Unknown adapter '${a}'`);if(r&&(F.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(v0).join(`
`):" "+v0(o[0]):"as no adapter specified";throw new ye("There is no suitable adapter to dispatch the request "+a,ye.ERR_NOT_SUPPORT)}return r}const E_={getAdapter:lb,adapters:am};function pd(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new sl(null,t)}function y0(t){return pd(t),t.headers=fn.from(t.headers),t.data=hd.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),E_.getAdapter(t.adapter||rl.adapter,t)(t).then(function(i){pd(t),t.response=i;try{i.data=hd.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=fn.from(i.headers),i},function(i){if(!x_(i)&&(pd(t),i&&i.response)){t.response=i.response;try{i.response.data=hd.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=fn.from(i.response.headers)}return Promise.reject(i)})}const Pu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Pu[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const _0={};Pu.transitional=function(e,n,i){function r(s,o){return"[Axios v"+om+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new ye(r(o," has been removed"+(n?" in "+n:"")),ye.ERR_DEPRECATED);return n&&!_0[o]&&(_0[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};Pu.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function cb(t,e,n){if(typeof t!="object"||t===null)throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ye("option "+s+" must be "+l,ye.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ye("Unknown option "+s,ye.ERR_BAD_OPTION)}}const _c={assertOptions:cb,validators:Pu},sn=_c.validators;let ys=class{constructor(e){this.defaults=e||{},this.interceptors={request:new l0,response:new l0}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=(()=>{if(!r.stack)return"";const o=r.stack.indexOf(`
`);return o===-1?"":r.stack.slice(o+1)})();try{if(!i.stack)i.stack=s;else if(s){const o=s.indexOf(`
`),a=o===-1?-1:s.indexOf(`
`,o+1),l=a===-1?"":s.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+s)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=bs(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&_c.assertOptions(i,{silentJSONParsing:sn.transitional(sn.boolean),forcedJSONParsing:sn.transitional(sn.boolean),clarifyTimeoutError:sn.transitional(sn.boolean),legacyInterceptorReqResOrdering:sn.transitional(sn.boolean),advertiseZstdAcceptEncoding:sn.transitional(sn.boolean),validateStatusUndefinedResolves:sn.transitional(sn.boolean)},!1),r!=null&&(F.isFunction(r)?n.paramsSerializer={serialize:r}:_c.assertOptions(r,{encode:sn.function,serialize:sn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),_c.assertOptions(n,{baseUrl:sn.spelling("baseURL"),withXsrfToken:sn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&F.merge(s.common,s[n.method]);s&&F.forEach(["delete","get","head","post","put","patch","query","common"],x=>{delete s[x]}),n.headers=fn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(E){if(typeof E.runWhen=="function"&&E.runWhen(n)===!1)return;l=l&&E.synchronous;const g=n.transitional||rm;g&&g.legacyInterceptorReqResOrdering?a.unshift(E.fulfilled,E.rejected):a.push(E.fulfilled,E.rejected)});const c=[];this.interceptors.response.forEach(function(E){c.push(E.fulfilled,E.rejected)});let u,f=0,h;if(!l){const x=[y0.bind(this),void 0];for(x.unshift(...a),x.push(...c),h=x.length,u=Promise.resolve(n);f<h;)u=u.then(x[f++],x[f++]);return u}h=a.length;let m=n;for(;f<h;){const x=a[f++],E=a[f++];try{m=x(m)}catch(g){E.call(this,g);break}}try{u=y0.call(this,m)}catch(x){return Promise.reject(x)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=bs(this.defaults,e);const n=y_(e.baseURL,e.url,e.allowAbsoluteUrls,e);return p_(n,e.params,e.paramsSerializer)}};F.forEach(["delete","get","head","options"],function(e){ys.prototype[e]=function(n,i){return this.request(bs(i||{},{method:e,url:n,data:i&&F.hasOwnProp(i,"data")?i.data:void 0}))}});F.forEach(["post","put","patch","query"],function(e){function n(i){return function(s,o,a){return this.request(bs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}ys.prototype[e]=n(),e!=="query"&&(ys.prototype[e+"Form"]=n(!0))});let ub=class M_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new sl(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new M_(function(r){e=r}),cancel:e}}};function db(t){return function(n){return t.apply(null,n)}}function fb(t){return F.isObject(t)&&t.isAxiosError===!0}const ih={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ih).forEach(([t,e])=>{ih[e]=t});function w_(t){const e=new ys(t),n=e_(ys.prototype.request,e);return F.extend(n,ys.prototype,e,{allOwnKeys:!0}),F.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return w_(bs(t,r))},n}const Ut=w_(rl);Ut.Axios=ys;Ut.CanceledError=sl;Ut.CancelToken=ub;Ut.isCancel=x_;Ut.VERSION=om;Ut.toFormData=Ru;Ut.AxiosError=ye;Ut.Cancel=Ut.CanceledError;Ut.all=function(e){return Promise.all(e)};Ut.spread=db;Ut.isAxiosError=fb;Ut.mergeConfig=bs;Ut.AxiosHeaders=fn;Ut.formToJSON=t=>g_(F.isHTMLForm(t)?new FormData(t):t);Ut.getAdapter=E_.getAdapter;Ut.HttpStatusCode=ih;Ut.default=Ut;const{Axios:WL,AxiosError:jL,CanceledError:XL,isCancel:qL,CancelToken:$L,VERSION:YL,all:KL,Cancel:JL,isAxiosError:ZL,spread:QL,toFormData:eD,AxiosHeaders:tD,HttpStatusCode:nD,formToJSON:iD,getAdapter:rD,mergeConfig:sD,create:oD}=Ut,lm="/api",hb="1.2.0",Rl="207845585647-ibepcpbe8h0gnrbmol6764j3suga5l0a.apps.googleusercontent.com",pt=Ut.create({baseURL:lm,headers:{"Content-Type":"application/json"}});pt.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t});pt.interceptors.response.use(t=>t,t=>{var e;return((e=t.response)==null?void 0:e.status)===401&&(localStorage.removeItem("token"),window.location.hash="#/login"),Promise.reject(t)});const T_=z.createContext(null);function pb(){const[t,e]=z.useState(null),[n,i]=z.useState(!0),r=z.useCallback(async()=>{var m;const u=localStorage.getItem("token");if(!u){e(null),i(!1);return}const f=new AbortController,h=setTimeout(()=>f.abort(),8e3);try{const x=await fetch(`${lm}/auth/me`,{headers:{Authorization:`Bearer ${u}`},signal:f.signal});if(!x.ok)throw new Error;const E=await x.json();e(((m=E.data)==null?void 0:m.user)||E.user)}catch{localStorage.removeItem("token"),e(null)}finally{clearTimeout(h),i(!1)}},[]);return z.useEffect(()=>{r()},[r]),{user:t,loading:n,login:async(u,f)=>{var g,d;const h=u.includes("@")?{email:u,password:f}:{phone:u,password:f},{data:m}=await pt.post("/auth/login",h),x=((g=m.data)==null?void 0:g.token)||m.token,E=((d=m.data)==null?void 0:d.user)||m.user;return localStorage.setItem("token",x),e(E),E},loginWithGoogle:async(u,f=!1)=>{var E,g;const{data:h}=await pt.post("/auth/google",{id_token:u,consent_given:f}),m=((E=h.data)==null?void 0:E.token)||h.token,x=((g=h.data)==null?void 0:g.user)||h.user;return localStorage.setItem("token",m),e(x),x},register:async u=>{var x,E;const{data:f}=await pt.post("/auth/register",u),h=((x=f.data)==null?void 0:x.token)||f.token,m=((E=f.data)==null?void 0:E.user)||f.user;return localStorage.setItem("token",h),e(m),m},logout:()=>{localStorage.removeItem("token"),e(null)},updateUser:u=>{e(f=>f&&{...f,...u})},refetch:r}}function mb({children:t}){const e=pb();return z.createElement(T_.Provider,{value:e},t)}function cr(){const t=z.useContext(T_);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}function Yi(t){return t?t.role==="hospital"?"/console":t.role==="admin"?"/admin":"/home":"/login"}function b_(t){const e=(typeof(t==null?void 0:t.get)=="function"?t.get("role"):"")||"";return String(e).toLowerCase()==="hospital"?"hospital":"donor"}function ri({user:t,role:e,children:n}){return t?e&&t.role!==e?p.jsx(ho,{to:Yi(t),replace:!0}):n:p.jsx(ho,{to:"/login",replace:!0})}const P={oxblood:"#7A1626",oxbloodDark:"#5E0F1D",arterial:"#C8102E",arterialSoft:"#FBEBEE",ink:"#17151A",mut:"#6F6963",faint:"#9A938C",porcelain:"#F5F3F0",card:"#FFFFFF",line:"#E8E3DD",leaf:"#0F6B4A",leafSoft:"#E8F2EE",consoleBg:"#14161C",consoleCard:"#1D2028",consoleLine:"#2B2F3A",consoleMut:"#8B909C",gold:"#8A6A1F"},rh={"O-":["O-"],"O+":["O-","O+"],"A-":["O-","A-"],"A+":["O-","O+","A-","A+"],"B-":["O-","B-"],"B+":["O-","O+","B-","B+"],"AB-":["O-","A-","B-","AB-"],"AB+":["O-","O+","A-","A+","B-","B+","AB-","AB+"]},gb=["O-","AB-"],A_=["O+","O-","A+","A-","B+","B-","AB+","AB-"];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cm="185",xb=0,S0=1,vb=2,Sc=1,yb=2,ha=3,Wr=0,Dn=1,Xi=2,Zi=0,_o=1,sh=2,E0=3,M0=4,_b=5,cs=100,Sb=101,Eb=102,Mb=103,wb=104,Tb=200,bb=201,Ab=202,Cb=203,oh=204,ah=205,Rb=206,Pb=207,Lb=208,Db=209,Ib=210,Nb=211,Fb=212,Ub=213,Ob=214,lh=0,ch=1,uh=2,Do=3,dh=4,fh=5,hh=6,ph=7,C_=0,kb=1,Bb=2,Di=0,R_=1,P_=2,L_=3,D_=4,I_=5,N_=6,F_=7,U_=300,As=301,Io=302,md=303,gd=304,Lu=306,mh=1e3,Ki=1001,gh=1002,Zt=1003,zb=1004,Pl=1005,dn=1006,xd=1007,ms=1008,zn=1009,O_=1010,k_=1011,Xa=1012,um=1013,Ni=1014,Ci=1015,rr=1016,dm=1017,fm=1018,qa=1020,B_=35902,z_=35899,H_=1021,V_=1022,hi=1023,sr=1026,gs=1027,G_=1028,hm=1029,Cs=1030,pm=1031,mm=1033,Ec=33776,Mc=33777,wc=33778,Tc=33779,xh=35840,vh=35841,yh=35842,_h=35843,Sh=36196,Eh=37492,Mh=37496,wh=37488,Th=37489,tu=37490,bh=37491,Ah=37808,Ch=37809,Rh=37810,Ph=37811,Lh=37812,Dh=37813,Ih=37814,Nh=37815,Fh=37816,Uh=37817,Oh=37818,kh=37819,Bh=37820,zh=37821,Hh=36492,Vh=36494,Gh=36495,Wh=36283,jh=36284,nu=36285,Xh=36286,Hb=3200,qh=0,Vb=1,Cr="",Yn="srgb",iu="srgb-linear",ru="linear",lt="srgb",ks=7680,w0=519,Gb=512,Wb=513,jb=514,gm=515,Xb=516,qb=517,xm=518,$b=519,T0=35044,b0="300 es",Ri=2e3,$a=2001;function Yb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function su(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Kb(){const t=su("canvas");return t.style.display="block",t}const A0={};function C0(...t){const e="THREE."+t.shift();console.log(e,...t)}function W_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ke(...t){t=W_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=W_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function So(...t){const e=t.join(" ");e in A0||(A0[e]=!0,ke(...t))}function Jb(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Zb={[lh]:ch,[uh]:hh,[dh]:ph,[Do]:fh,[ch]:lh,[hh]:uh,[ph]:dh,[fh]:Do};class Ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,$h=180/Math.PI;function ol(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function Qb(t,e){return(t%e+e)%e}function yd(t,e,n){return(1-n)*t+n*e}function na(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Tm=class Tm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tm.prototype.isVector2=!0;let Ue=Tm;class Go{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],m=s[o+1],x=s[o+2],E=s[o+3];if(f!==E||l!==h||c!==m||u!==x){let g=l*h+c*m+u*x+f*E;g<0&&(h=-h,m=-m,x=-x,E=-E,g=-g);let d=1-a;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);d=Math.sin(d*v)/y,a=Math.sin(a*v)/y,l=l*d+h*a,c=c*d+m*a,u=u*d+x*a,f=f*d+E*a}else{l=l*d+h*a,c=c*d+m*a,u=u*d+x*a,f=f*d+E*a;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+u*f+l*m-c*h,e[n+1]=l*x+u*h+c*f-a*m,e[n+2]=c*x+u*m+a*h-l*f,e[n+3]=u*x-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bm=class bm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(R0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(R0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bm.prototype.isVector3=!0;let N=bm;const _d=new N,R0=new Go,Am=class Am{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],E=r[0],g=r[3],d=r[6],v=r[1],y=r[4],S=r[7],w=r[2],T=r[5],A=r[8];return s[0]=o*E+a*v+l*w,s[3]=o*g+a*y+l*T,s[6]=o*d+a*S+l*A,s[1]=c*E+u*v+f*w,s[4]=c*g+u*y+f*T,s[7]=c*d+u*S+f*A,s[2]=h*E+m*v+x*w,s[5]=h*g+m*y+x*T,s[8]=h*d+m*S+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,x=n*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=f*E,e[1]=(r*c-u*i)*E,e[2]=(a*i-r*o)*E,e[3]=h*E,e[4]=(u*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=m*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return So("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sd.makeScale(e,n)),this}rotate(e){return So("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sd.makeRotation(-e)),this}translate(e,n){return So("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Am.prototype.isMatrix3=!0;let He=Am;const Sd=new He,P0=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L0=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eA(){const t={enabled:!0,workingColorSpace:iu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Qi(r.r),r.g=Qi(r.g),r.b=Qi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=Eo(r.r),r.g=Eo(r.g),r.b=Eo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cr?ru:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return So("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return So("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[iu]:{primaries:e,whitePoint:i,transfer:ru,toXYZ:P0,fromXYZ:L0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:P0,fromXYZ:L0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),t}const Je=eA();function Qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Eo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Bs;class tA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bs===void 0&&(Bs=su("canvas")),Bs.width=e.width,Bs.height=e.height;const r=Bs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Bs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=su("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Qi(n[i]/255)*255):n[i]=Qi(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nA=0;class vm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nA++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ed(r[o].image)):s.push(Ed(r[o]))}else s=Ed(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ed(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let iA=0;const Md=new N;class vn extends Ds{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=Ki,r=Ki,s=dn,o=ms,a=hi,l=zn,c=vn.DEFAULT_ANISOTROPY,u=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iA++}),this.uuid=ol(),this.name="",this.source=new vm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=U_;vn.DEFAULT_ANISOTROPY=1;const Cm=class Cm{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],E=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-E)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+E)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(m+1)/2,w=(d+1)/2,T=(u+h)/4,A=(f+E)/4,_=(x+g)/4;return y>S&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=A/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=_/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=_/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-x)*(g-x)+(f-E)*(f-E)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(f-E)/v,this.z=(h-u)/v,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cm.prototype.isVector4=!0;let bt=Cm;class rA extends Ds{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new vn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new vm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends rA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class j_ extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sA extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=class cu{constructor(e,n,i,r,s,o,a,l,c,u,f,h,m,x,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,m,x,E,g)}set(e,n,i,r,s,o,a,l,c,u,f,h,m,x,E,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=x,d[11]=E,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/zs.setFromMatrixColumn(e,0).length(),s=1/zs.setFromMatrixColumn(e,1).length(),o=1/zs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,x=a*u,E=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+x*c,n[5]=h-E*c,n[9]=-a*l,n[2]=E-h*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,x=c*u,E=c*f;n[0]=h+E*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-x,n[6]=E+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,x=c*u,E=c*f;n[0]=h-E*a,n[4]=-o*f,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*u,n[9]=E-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,x=a*u,E=a*f;n[0]=l*u,n[4]=x*c-m,n[8]=h*c+E,n[1]=l*f,n[5]=E*c+h,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,x=a*l,E=a*c;n[0]=l*u,n[4]=E-h*f,n[8]=x*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+x,n[10]=h-E*f}else if(e.order==="XZY"){const h=o*l,m=o*c,x=a*l,E=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+E,n[5]=o*u,n[9]=m*f-x,n[2]=x*f-m,n[6]=a*u,n[10]=E*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oA,e,aA)}lookAt(e,n,i){const r=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),mr.crossVectors(i,Fn),mr.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),mr.crossVectors(i,Fn)),mr.normalize(),Ll.crossVectors(Fn,mr),r[0]=mr.x,r[4]=Ll.x,r[8]=Fn.x,r[1]=mr.y,r[5]=Ll.y,r[9]=Fn.y,r[2]=mr.z,r[6]=Ll.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],E=i[6],g=i[10],d=i[14],v=i[3],y=i[7],S=i[11],w=i[15],T=r[0],A=r[4],_=r[8],C=r[12],L=r[1],D=r[5],B=r[9],j=r[13],te=r[2],H=r[6],J=r[10],W=r[14],O=r[3],K=r[7],Z=r[11],ne=r[15];return s[0]=o*T+a*L+l*te+c*O,s[4]=o*A+a*D+l*H+c*K,s[8]=o*_+a*B+l*J+c*Z,s[12]=o*C+a*j+l*W+c*ne,s[1]=u*T+f*L+h*te+m*O,s[5]=u*A+f*D+h*H+m*K,s[9]=u*_+f*B+h*J+m*Z,s[13]=u*C+f*j+h*W+m*ne,s[2]=x*T+E*L+g*te+d*O,s[6]=x*A+E*D+g*H+d*K,s[10]=x*_+E*B+g*J+d*Z,s[14]=x*C+E*j+g*W+d*ne,s[3]=v*T+y*L+S*te+w*O,s[7]=v*A+y*D+S*H+w*K,s[11]=v*_+y*B+S*J+w*Z,s[15]=v*C+y*j+S*W+w*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],E=e[7],g=e[11],d=e[15],v=l*m-c*h,y=a*m-c*f,S=a*h-l*f,w=o*m-c*u,T=o*h-l*u,A=o*f-a*u;return n*(E*v-g*y+d*S)-i*(x*v-g*w+d*T)+r*(x*y-E*w+d*A)-s*(x*S-E*T+g*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],E=e[13],g=e[14],d=e[15],v=n*a-i*o,y=n*l-r*o,S=n*c-s*o,w=i*l-r*a,T=i*c-s*a,A=r*c-s*l,_=u*E-f*x,C=u*g-h*x,L=u*d-m*x,D=f*g-h*E,B=f*d-m*E,j=h*d-m*g,te=v*j-y*B+S*D+w*L-T*C+A*_;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/te;return e[0]=(a*j-l*B+c*D)*H,e[1]=(r*B-i*j-s*D)*H,e[2]=(E*A-g*T+d*w)*H,e[3]=(h*T-f*A-m*w)*H,e[4]=(l*L-o*j-c*C)*H,e[5]=(n*j-r*L+s*C)*H,e[6]=(g*S-x*A-d*y)*H,e[7]=(u*A-h*S+m*y)*H,e[8]=(o*B-a*L+c*_)*H,e[9]=(i*L-n*B-s*_)*H,e[10]=(x*T-E*S+d*v)*H,e[11]=(f*S-u*T-m*v)*H,e[12]=(a*C-o*D-l*_)*H,e[13]=(n*D-i*C+r*_)*H,e[14]=(E*y-x*w-g*v)*H,e[15]=(u*w-f*y+h*v)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,x=s*f,E=o*u,g=o*f,d=a*f,v=l*c,y=l*u,S=l*f,w=i.x,T=i.y,A=i.z;return r[0]=(1-(E+d))*w,r[1]=(m+S)*w,r[2]=(x-y)*w,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(h+d))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(x+y)*A,r[9]=(g-v)*A,r[10]=(1-(h+E))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=zs.set(r[0],r[1],r[2]).length();const a=zs.set(r[4],r[5],r[6]).length(),l=zs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),si.copy(this);const c=1/o,u=1/a,f=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,n.setFromRotationMatrix(si),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ri,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),m=(i+r)/(i-r);let x,E;if(l)x=s/(o-s),E=o*s/(o-s);else if(a===Ri)x=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===$a)x=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ri,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),m=-(i+r)/(i-r);let x,E;if(l)x=1/(o-s),E=o/(o-s);else if(a===Ri)x=-2/(o-s),E=-(o+s)/(o-s);else if(a===$a)x=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};cu.prototype.isMatrix4=!0;let wt=cu;const zs=new N,si=new wt,oA=new N(0,0,0),aA=new N(1,1,1),mr=new N,Ll=new N,Fn=new N,D0=new wt,I0=new Go;class jr{constructor(e=0,n=0,i=0,r=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return D0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(D0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return I0.setFromEuler(this),this.setFromQuaternion(I0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class X_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lA=0;const N0=new N,Hs=new Go,Ui=new wt,Dl=new N,ia=new N,cA=new N,uA=new Go,F0=new N(1,0,0),U0=new N(0,1,0),O0=new N(0,0,1),k0={type:"added"},dA={type:"removed"},Vs={type:"childadded",child:null},wd={type:"childremoved",child:null};class yn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lA++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new N,n=new jr,i=new Go,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new He}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(F0,e)}rotateY(e){return this.rotateOnAxis(U0,e)}rotateZ(e){return this.rotateOnAxis(O0,e)}translateOnAxis(e,n){return N0.copy(e).applyQuaternion(this.quaternion),this.position.add(N0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(F0,e)}translateY(e){return this.translateOnAxis(U0,e)}translateZ(e){return this.translateOnAxis(O0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Dl.copy(e):Dl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ia,Dl,this.up):Ui.lookAt(Dl,ia,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Hs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(k0),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dA),wd.child=e,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(k0),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,cA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,uA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new N(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Il extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fA={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),d=this._getHandJoint(c,E);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Il;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function bd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Qb(e,1),n=Ye(n,0,1),i=Ye(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=bd(o,s,e+1/3),this.g=bd(o,s,e),this.b=bd(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const i=q_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Je.workingToColorSpace(an.copy(this),e),Math.round(Ye(an.r*255,0,255))*65536+Math.round(Ye(an.g*255,0,255))*256+Math.round(Ye(an.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Yn){Je.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(Nl);const i=yd(gr.h,Nl.h,n),r=yd(gr.s,Nl.s,n),s=yd(gr.l,Nl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Qe;Qe.NAMES=q_;class ym{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=n}clone(){return new ym(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hA extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const oi=new N,Oi=new N,Ad=new N,ki=new N,Gs=new N,Ws=new N,B0=new N,Cd=new N,Rd=new N,Pd=new N,Ld=new bt,Dd=new bt,Id=new bt;class fi{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),oi.subVectors(e,n),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){oi.subVectors(r,n),Oi.subVectors(i,n),Ad.subVectors(e,n);const o=oi.dot(oi),a=oi.dot(Oi),l=oi.dot(Ad),c=Oi.dot(Oi),u=Oi.dot(Ad),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ld.setScalar(0),Dd.setScalar(0),Id.setScalar(0),Ld.fromBufferAttribute(e,n),Dd.fromBufferAttribute(e,i),Id.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ld,s.x),o.addScaledVector(Dd,s.y),o.addScaledVector(Id,s.z),o}static isFrontFacing(e,n,i,r){return oi.subVectors(i,n),Oi.subVectors(e,n),oi.cross(Oi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),oi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Gs.subVectors(r,i),Ws.subVectors(s,i),Cd.subVectors(e,i);const l=Gs.dot(Cd),c=Ws.dot(Cd);if(l<=0&&c<=0)return n.copy(i);Rd.subVectors(e,r);const u=Gs.dot(Rd),f=Ws.dot(Rd);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Gs,o);Pd.subVectors(e,s);const m=Gs.dot(Pd),x=Ws.dot(Pd);if(x>=0&&m<=x)return n.copy(s);const E=m*c-l*x;if(E<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Ws,a);const g=u*x-m*f;if(g<=0&&f-u>=0&&m-x>=0)return B0.subVectors(s,r),a=(f-u)/(f-u+(m-x)),n.copy(r).addScaledVector(B0,a);const d=1/(g+E+h);return o=E*d,a=h*d,n.copy(i).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class al{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fl.copy(i.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Ul.subVectors(this.max,ra),js.subVectors(e.a,ra),Xs.subVectors(e.b,ra),qs.subVectors(e.c,ra),xr.subVectors(Xs,js),vr.subVectors(qs,Xs),Jr.subVectors(js,qs);let n=[0,-xr.z,xr.y,0,-vr.z,vr.y,0,-Jr.z,Jr.y,xr.z,0,-xr.x,vr.z,0,-vr.x,Jr.z,0,-Jr.x,-xr.y,xr.x,0,-vr.y,vr.x,0,-Jr.y,Jr.x,0];return!Nd(n,js,Xs,qs,Ul)||(n=[1,0,0,0,1,0,0,0,1],!Nd(n,js,Xs,qs,Ul))?!1:(Ol.crossVectors(xr,vr),n=[Ol.x,Ol.y,Ol.z],Nd(n,js,Xs,qs,Ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new N,new N,new N,new N,new N,new N,new N,new N],ai=new N,Fl=new al,js=new N,Xs=new N,qs=new N,xr=new N,vr=new N,Jr=new N,ra=new N,Ul=new N,Ol=new N,Zr=new N;function Nd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Zr.fromArray(t,s);const a=r.x*Math.abs(Zr.x)+r.y*Math.abs(Zr.y)+r.z*Math.abs(Zr.z),l=e.dot(Zr),c=n.dot(Zr),u=i.dot(Zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kt=new N,kl=new Ue;let pA=0;class ei extends Ds{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=T0,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)kl.fromBufferAttribute(this,n),kl.applyMatrix3(e),this.setXY(n,kl.x,kl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=na(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=na(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=na(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=na(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),r=wn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),r=wn(r,this.array),s=wn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==T0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class $_ extends ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Y_ extends ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _n extends ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}const mA=new al,sa=new N,Fd=new N;class Du{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const n=sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Fd)),this.expandByPoint(sa.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gA=0;const qn=new wt,Ud=new yn,$s=new N,Un=new al,oa=new al,Wt=new N;class In extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yb(e)?Y_:$_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,i){return qn.makeTranslation(e,n,i),this.applyMatrix4(qn),this}scale(e,n,i){return qn.makeScale(e,n,i),this.applyMatrix4(qn),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _n(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Du);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Un.min,oa.min),Un.expandByPoint(Wt),Wt.addVectors(Un.max,oa.max),Un.expandByPoint(Wt)):(Un.expandByPoint(oa.min),Un.expandByPoint(oa.max))}Un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(e,c),Wt.add($s)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ei(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new N,l[_]=new N;const c=new N,u=new N,f=new N,h=new Ue,m=new Ue,x=new Ue,E=new N,g=new N;function d(_,C,L){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,L),h.fromBufferAttribute(s,_),m.fromBufferAttribute(s,C),x.fromBufferAttribute(s,L),u.sub(c),f.sub(c),m.sub(h),x.sub(h);const D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(E.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(D),a[_].add(E),a[C].add(E),a[L].add(E),l[_].add(g),l[C].add(g),l[L].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,C=v.length;_<C;++_){const L=v[_],D=L.start,B=L.count;for(let j=D,te=D+B;j<te;j+=3)d(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const y=new N,S=new N,w=new N,T=new N;function A(_){w.fromBufferAttribute(r,_),T.copy(w);const C=a[_];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),S.crossVectors(T,C);const D=S.dot(l[_])<0?-1:1;o.setXYZW(_,y.x,y.y,y.z,D)}for(let _=0,C=v.length;_<C;++_){const L=v[_],D=L.start,B=L.count;for(let j=D,te=D+B;j<te;j+=3)A(e.getX(j+0)),A(e.getX(j+1)),A(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),E=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let E=0,g=l.length;E<g;E++){a.isInterleavedBufferAttribute?m=l[E]*a.data.stride+a.offset:m=l[E]*u;for(let d=0;d<u;d++)h[x++]=c[m++]}return new ei(h,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new In,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let xA=0;class Wo extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=_o,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=ah,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(i.blending=this.blending),this.side!==Wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oh&&(i.blendSrc=this.blendSrc),this.blendDst!==ah&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zi=new N,Od=new N,Bl=new N,yr=new N,kd=new N,zl=new N,Bd=new N;class K_{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Od.copy(e).add(n).multiplyScalar(.5),Bl.copy(n).sub(e).normalize(),yr.copy(this.origin).sub(Od);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Bl),a=yr.dot(this.direction),l=-yr.dot(Bl),c=yr.lengthSq(),u=Math.abs(1-o*o);let f,h,m,x;if(u>0)if(f=o*l-a,h=o*a-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const E=1/u;f*=E,h*=E,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Od).addScaledVector(Bl,h),m}intersectSphere(e,n){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,n,i,r,s){kd.subVectors(n,e),zl.subVectors(i,e),Bd.crossVectors(kd,zl);let o=this.direction.dot(Bd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yr.subVectors(this.origin,e);const l=a*this.direction.dot(zl.crossVectors(yr,zl));if(l<0)return null;const c=a*this.direction.dot(kd.cross(yr));if(c<0||l+c>o)return null;const u=-a*yr.dot(Bd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ou extends Wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=C_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const z0=new wt,Qr=new K_,Hl=new Du,H0=new N,Vl=new N,Gl=new N,Wl=new N,zd=new N,jl=new N,V0=new N,Xl=new N;class bn extends yn{constructor(e=new In,n=new ou){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){jl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(zd.fromBufferAttribute(f,e),o?jl.addScaledVector(zd,u):jl.addScaledVector(zd.sub(n),u))}n.add(jl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(s),Qr.copy(e.ray).recast(e.near),!(Hl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Hl,H0)===null||Qr.origin.distanceToSquared(H0)>(e.far-e.near)**2))&&(z0.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(z0),!(i.boundingBox!==null&&Qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,E=h.length;x<E;x++){const g=h[x],d=o[g.materialIndex],v=Math.max(g.start,m.start),y=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,w=y;S<w;S+=3){const T=a.getX(S),A=a.getX(S+1),_=a.getX(S+2);r=ql(this,d,e,i,c,u,f,T,A,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(a.count,m.start+m.count);for(let g=x,d=E;g<d;g+=3){const v=a.getX(g),y=a.getX(g+1),S=a.getX(g+2);r=ql(this,o,e,i,c,u,f,v,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,E=h.length;x<E;x++){const g=h[x],d=o[g.materialIndex],v=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,w=y;S<w;S+=3){const T=S,A=S+1,_=S+2;r=ql(this,d,e,i,c,u,f,T,A,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let g=x,d=E;g<d;g+=3){const v=g,y=g+1,S=g+2;r=ql(this,o,e,i,c,u,f,v,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function vA(t,e,n,i,r,s,o,a){let l;if(e.side===Dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wr,a),l===null)return null;Xl.copy(a),Xl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Xl);return c<n.near||c>n.far?null:{distance:c,point:Xl.clone(),object:t}}function ql(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Vl),t.getVertexPosition(l,Gl),t.getVertexPosition(c,Wl);const u=vA(t,e,n,i,Vl,Gl,Wl,V0);if(u){const f=new N;fi.getBarycoord(V0,Vl,Gl,Wl,f),r&&(u.uv=fi.getInterpolatedAttribute(r,a,l,c,f,new Ue)),s&&(u.uv1=fi.getInterpolatedAttribute(s,a,l,c,f,new Ue)),o&&(u.normal=fi.getInterpolatedAttribute(o,a,l,c,f,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};fi.getNormal(Vl,Gl,Wl,h.normal),u.face=h,u.barycoord=f}return u}class yA extends vn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Zt,u=Zt,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hd=new N,_A=new N,SA=new He;class ls{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hd.subVectors(i,n).cross(_A.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Hd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||SA.getNormalMatrix(e),r=this.coplanarPoint(Hd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Du,EA=new Ue(.5,.5),$l=new N;class _m{constructor(e=new ls,n=new ls,i=new ls,r=new ls,s=new ls,o=new ls){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],m=s[7],x=s[8],E=s[9],g=s[10],d=s[11],v=s[12],y=s[13],S=s[14],w=s[15];if(r[0].setComponents(c-o,m-u,d-x,w-v).normalize(),r[1].setComponents(c+o,m+u,d+x,w+v).normalize(),r[2].setComponents(c+a,m+f,d+E,w+y).normalize(),r[3].setComponents(c-a,m-f,d-E,w-y).normalize(),i)r[4].setComponents(l,h,g,S).normalize(),r[5].setComponents(c-l,m-h,d-g,w-S).normalize();else if(r[4].setComponents(c-l,m-h,d-g,w-S).normalize(),n===Ri)r[5].setComponents(c+l,m+h,d+g,w+S).normalize();else if(n===$a)r[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const n=EA.distanceTo(e.center);return es.radius=.7071067811865476+n,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if($l.x=r.normal.x>0?e.max.x:e.min.x,$l.y=r.normal.y>0?e.max.y:e.min.y,$l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yh extends Wo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const G0=new wt,Kh=new K_,Yl=new Du,Kl=new N;class W0 extends yn{constructor(e=new In,n=new Yh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(r),Yl.radius+=s,e.ray.intersectsSphere(Yl)===!1)return;G0.copy(r).invert(),Kh.copy(e.ray).applyMatrix4(G0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=h,E=m;x<E;x++){const g=c.getX(x);Kl.fromBufferAttribute(f,g),j0(Kl,g,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=h,E=m;x<E;x++)Kl.fromBufferAttribute(f,x),j0(Kl,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function j0(t,e,n,i,r,s,o){const a=Kh.distanceSqToPoint(t);if(a<n){const l=new N;Kh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class J_ extends vn{constructor(e=[],n=As,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class No extends vn{constructor(e,n,i=Ni,r,s,o,a=Zt,l=Zt,c,u=sr,f=1){if(u!==sr&&u!==gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class MA extends No{constructor(e,n=Ni,i=As,r,s,o=Zt,a=Zt,l,c=sr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Z_ extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ll extends In{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(f,2));function x(E,g,d,v,y,S,w,T,A,_,C){const L=S/A,D=w/_,B=S/2,j=w/2,te=T/2,H=A+1,J=_+1;let W=0,O=0;const K=new N;for(let Z=0;Z<J;Z++){const ne=Z*D-j;for(let le=0;le<H;le++){const Be=le*L-B;K[E]=Be*v,K[g]=ne*y,K[d]=te,c.push(K.x,K.y,K.z),K[E]=0,K[g]=0,K[d]=T>0?1:-1,u.push(K.x,K.y,K.z),f.push(le/A),f.push(1-Z/_),W+=1}}for(let Z=0;Z<_;Z++)for(let ne=0;ne<A;ne++){const le=h+ne+H*Z,Be=h+ne+H*(Z+1),Xe=h+(ne+1)+H*(Z+1),Ce=h+(ne+1)+H*Z;l.push(le,Be,Ce),l.push(Be,Xe,Ce),O+=6}a.addGroup(m,O,C),m+=O,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ur{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,m=(o-u)/h;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ue:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new N,r=[],s=[],o=[],a=new N,l=new wt;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Ye(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Ye(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Q_ extends ur{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ue){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*u-m*f+this.aX,c=h*f+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wA extends Q_{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sm(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,m*=u,r(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const X0=new N,q0=new N,Vd=new Sm,Gd=new Sm,Wd=new Sm;class eS extends ur{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new N){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(q0.subVectors(r[0],r[1]).add(r[0]),c=q0);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(X0.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=X0),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(f),m),E=Math.pow(f.distanceToSquared(h),m),g=Math.pow(h.distanceToSquared(u),m);E<1e-4&&(E=1),x<1e-4&&(x=E),g<1e-4&&(g=E),Vd.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,x,E,g),Gd.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,x,E,g),Wd.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,x,E,g)}else this.curveType==="catmullrom"&&(Vd.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Gd.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Wd.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Vd.calc(l),Gd.calc(l),Wd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function TA(t,e){const n=1-t;return n*n*e}function bA(t,e){return 2*(1-t)*t*e}function AA(t,e){return t*t*e}function wa(t,e,n,i){return TA(t,e)+bA(t,n)+AA(t,i)}function CA(t,e){const n=1-t;return n*n*n*e}function RA(t,e){const n=1-t;return 3*n*n*t*e}function PA(t,e){return 3*(1-t)*t*t*e}function LA(t,e){return t*t*t*e}function Ta(t,e,n,i,r){return CA(t,e)+RA(t,n)+PA(t,i)+LA(t,r)}class DA extends ur{constructor(e=new Ue,n=new Ue,i=new Ue,r=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ue){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ta(e,r.x,s.x,o.x,a.x),Ta(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class IA extends ur{constructor(e=new N,n=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ta(e,r.x,s.x,o.x,a.x),Ta(e,r.y,s.y,o.y,a.y),Ta(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class NA extends ur{constructor(e=new Ue,n=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ue){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ue){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class FA extends ur{constructor(e=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new N){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class UA extends ur{constructor(e=new Ue,n=new Ue,i=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ue){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(wa(e,r.x,s.x,o.x),wa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tS extends ur{constructor(e=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(wa(e,r.x,s.x,o.x),wa(e,r.y,s.y,o.y),wa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class OA extends ur{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ue){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set($0(a,l.x,c.x,u.x,f.x),$0(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ue().fromArray(r))}return this}}var kA=Object.freeze({__proto__:null,ArcCurve:wA,CatmullRomCurve3:eS,CubicBezierCurve:DA,CubicBezierCurve3:IA,EllipseCurve:Q_,LineCurve:NA,LineCurve3:FA,QuadraticBezierCurve:UA,QuadraticBezierCurve3:tS,SplineCurve:OA});class Iu extends In{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,m=[],x=[],E=[],g=[];for(let d=0;d<u;d++){const v=d*h-o;for(let y=0;y<c;y++){const S=y*f-s;x.push(S,-v,0),E.push(0,0,1),g.push(y/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const y=v+c*d,S=v+c*(d+1),w=v+1+c*(d+1),T=v+1+c*d;m.push(y,S,T),m.push(S,w,T)}this.setIndex(m),this.setAttribute("position",new _n(x,3)),this.setAttribute("normal",new _n(E,3)),this.setAttribute("uv",new _n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.width,e.height,e.widthSegments,e.heightSegments)}}class au extends In{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new N,h=new N,m=[],x=[],E=[],g=[];for(let d=0;d<=i;d++){const v=[],y=d/i,S=o+y*a,w=e*Math.cos(S),T=Math.sqrt(e*e-w*w);let A=0;d===0&&o===0?A=.5/n:d===i&&l===Math.PI&&(A=-.5/n);for(let _=0;_<=n;_++){const C=_/n,L=r+C*s;f.x=-T*Math.cos(L),f.y=w,f.z=T*Math.sin(L),x.push(f.x,f.y,f.z),h.copy(f).normalize(),E.push(h.x,h.y,h.z),g.push(C+A,1-y),v.push(c++)}u.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const y=u[d][v+1],S=u[d][v],w=u[d+1][v],T=u[d+1][v+1];(d!==0||o>0)&&m.push(y,S,T),(d!==i-1||l<Math.PI)&&m.push(S,w,T)}this.setIndex(m),this.setAttribute("position",new _n(x,3)),this.setAttribute("normal",new _n(E,3)),this.setAttribute("uv",new _n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Em extends In{constructor(e=new tS(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new Ue;let u=new N;const f=[],h=[],m=[],x=[];E(),this.setIndex(x),this.setAttribute("position",new _n(f,3)),this.setAttribute("normal",new _n(h,3)),this.setAttribute("uv",new _n(m,2));function E(){for(let y=0;y<n;y++)g(y);g(s===!1?n:0),v(),d()}function g(y){u=e.getPointAt(y/n,u);const S=o.normals[y],w=o.binormals[y];for(let T=0;T<=r;T++){const A=T/r*Math.PI*2,_=Math.sin(A),C=-Math.cos(A);l.x=C*S.x+_*w.x,l.y=C*S.y+_*w.y,l.z=C*S.z+_*w.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=n;y++)for(let S=1;S<=r;S++){const w=(r+1)*(y-1)+(S-1),T=(r+1)*y+(S-1),A=(r+1)*y+S,_=(r+1)*(y-1)+S;x.push(w,T,_),x.push(T,A,_)}}function v(){for(let y=0;y<=n;y++)for(let S=0;S<=r;S++)c.x=y/n,c.y=S/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Em(new kA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Y0(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Y0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=Fo(t[n]);for(const r in i)e[r]=i[r]}return e}function Y0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function BA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function nS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const zA={clone:Fo,merge:pn};var HA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HA,this.fragmentShader=VA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=BA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"v3":this.uniforms[i].value=new N().fromArray(r.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new wt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class GA extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class WA extends Wo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jA extends Wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XA extends Wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class iS extends yn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const jd=new wt,K0=new N,J0=new N;class qA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _m,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;K0.setFromMatrixPosition(e.matrixWorld),n.position.copy(K0),J0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(J0),n.updateMatrixWorld(),jd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===$a||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jl=new N,Zl=new Go,Ei=new N;class rS extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jl,Zl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,Zl,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Jl,Zl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,Zl,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _r=new N,Z0=new Ue,Q0=new Ue;class Bn extends rS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$h*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $h*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,Z0,Q0),n.subVectors(Q0,Z0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class $A extends qA{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0}}class ex extends iS{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $A}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class sS extends rS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class YA extends iS{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ys=-90,Ks=1;class KA extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(Ys,Ks,e,n);r.layers=this.layers,this.add(r);const s=new Bn(Ys,Ks,e,n);s.layers=this.layers,this.add(s);const o=new Bn(Ys,Ks,e,n);o.layers=this.layers,this.add(o);const a=new Bn(Ys,Ks,e,n);a.layers=this.layers,this.add(a);const l=new Bn(Ys,Ks,e,n);l.layers=this.layers,this.add(l);const c=new Bn(Ys,Ks,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class JA extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Rm=class Rm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Rm.prototype.isMatrix2=!0;let tx=Rm;function nx(t,e,n,i){const r=ZA(i);switch(n){case H_:return t*e;case G_:return t*e/r.components*r.byteLength;case hm:return t*e/r.components*r.byteLength;case Cs:return t*e*2/r.components*r.byteLength;case pm:return t*e*2/r.components*r.byteLength;case V_:return t*e*3/r.components*r.byteLength;case hi:return t*e*4/r.components*r.byteLength;case mm:return t*e*4/r.components*r.byteLength;case Ec:case Mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wc:case Tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vh:case _h:return Math.max(t,16)*Math.max(e,8)/4;case xh:case yh:return Math.max(t,8)*Math.max(e,8)/2;case Sh:case Eh:case wh:case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mh:case tu:case bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Hh:case Vh:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Wh:case jh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case nu:case Xh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZA(t){switch(t){case zn:case O_:return{byteLength:1,components:1};case Xa:case k_:case rr:return{byteLength:2,components:1};case dm:case fm:return{byteLength:2,components:4};case Ni:case um:case Ci:return{byteLength:4,components:1};case B_:case z_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cm}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function QA(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<f.length;m++){const x=f[h],E=f[m];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++h,f[h]=E)}f.length=h+1;for(let m=0,x=f.length;m<x;m++){const E=f[m];t.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var eC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tC=`#ifdef USE_ALPHAHASH
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
#endif`,nC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oC=`#ifdef USE_AOMAP
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
#endif`,aC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lC=`#ifdef USE_BATCHING
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
#endif`,cC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hC=`#ifdef USE_IRIDESCENCE
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
#endif`,pC=`#ifdef USE_BUMPMAP
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
#endif`,mC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_C=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,SC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,EC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,MC=`#define PI 3.141592653589793
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
} // validated`,wC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TC=`vec3 transformedNormal = objectNormal;
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
#endif`,bC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PC="gl_FragColor = linearToOutputTexel( gl_FragColor );",LC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DC=`#ifdef USE_ENVMAP
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
#endif`,IC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NC=`#ifdef USE_ENVMAP
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
#endif`,FC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UC=`#ifdef USE_ENVMAP
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
#endif`,OC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HC=`#ifdef USE_GRADIENTMAP
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
}`,VC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,XC=`#ifdef USE_ENVMAP
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
#endif`,qC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$C=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JC=`PhysicalMaterial material;
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
#endif`,ZC=`uniform sampler2D dfgLUT;
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
}`,QC=`
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
#endif`,eR=`#if defined( RE_IndirectDiffuse )
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
#endif`,tR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nR=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,iR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uR=`#if defined( USE_POINTS_UV )
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
#endif`,dR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gR=`#ifdef USE_MORPHTARGETS
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
#endif`,xR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_R=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ER=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,MR=`#ifdef USE_NORMALMAP
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
#endif`,wR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BR=`float getShadowMask() {
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
}`,zR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HR=`#ifdef USE_SKINNING
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
#endif`,VR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GR=`#ifdef USE_SKINNING
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
#endif`,WR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$R=`#ifdef USE_TRANSMISSION
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
#endif`,YR=`#ifdef USE_TRANSMISSION
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
#endif`,KR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t2=`uniform sampler2D t2D;
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
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o2=`#include <common>
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
}`,a2=`#if DEPTH_PACKING == 3200
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
}`,l2=`#define DISTANCE
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
}`,c2=`#define DISTANCE
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
}`,u2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f2=`uniform float scale;
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
}`,h2=`uniform vec3 diffuse;
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
}`,p2=`#include <common>
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
}`,m2=`uniform vec3 diffuse;
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
}`,g2=`#define LAMBERT
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
}`,x2=`#define LAMBERT
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
}`,v2=`#define MATCAP
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
}`,y2=`#define MATCAP
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
}`,_2=`#define NORMAL
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
}`,S2=`#define NORMAL
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
}`,E2=`#define PHONG
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
}`,M2=`#define PHONG
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
}`,w2=`#define STANDARD
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
}`,T2=`#define STANDARD
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
}`,b2=`#define TOON
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
}`,A2=`#define TOON
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
}`,C2=`uniform float size;
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
}`,R2=`uniform vec3 diffuse;
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
}`,P2=`#include <common>
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
}`,L2=`uniform vec3 color;
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
}`,D2=`uniform float rotation;
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
}`,I2=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:eC,alphahash_pars_fragment:tC,alphamap_fragment:nC,alphamap_pars_fragment:iC,alphatest_fragment:rC,alphatest_pars_fragment:sC,aomap_fragment:oC,aomap_pars_fragment:aC,batching_pars_vertex:lC,batching_vertex:cC,begin_vertex:uC,beginnormal_vertex:dC,bsdfs:fC,iridescence_fragment:hC,bumpmap_pars_fragment:pC,clipping_planes_fragment:mC,clipping_planes_pars_fragment:gC,clipping_planes_pars_vertex:xC,clipping_planes_vertex:vC,color_fragment:yC,color_pars_fragment:_C,color_pars_vertex:SC,color_vertex:EC,common:MC,cube_uv_reflection_fragment:wC,defaultnormal_vertex:TC,displacementmap_pars_vertex:bC,displacementmap_vertex:AC,emissivemap_fragment:CC,emissivemap_pars_fragment:RC,colorspace_fragment:PC,colorspace_pars_fragment:LC,envmap_fragment:DC,envmap_common_pars_fragment:IC,envmap_pars_fragment:NC,envmap_pars_vertex:FC,envmap_physical_pars_fragment:XC,envmap_vertex:UC,fog_vertex:OC,fog_pars_vertex:kC,fog_fragment:BC,fog_pars_fragment:zC,gradientmap_pars_fragment:HC,lightmap_pars_fragment:VC,lights_lambert_fragment:GC,lights_lambert_pars_fragment:WC,lights_pars_begin:jC,lights_toon_fragment:qC,lights_toon_pars_fragment:$C,lights_phong_fragment:YC,lights_phong_pars_fragment:KC,lights_physical_fragment:JC,lights_physical_pars_fragment:ZC,lights_fragment_begin:QC,lights_fragment_maps:eR,lights_fragment_end:tR,lightprobes_pars_fragment:nR,logdepthbuf_fragment:iR,logdepthbuf_pars_fragment:rR,logdepthbuf_pars_vertex:sR,logdepthbuf_vertex:oR,map_fragment:aR,map_pars_fragment:lR,map_particle_fragment:cR,map_particle_pars_fragment:uR,metalnessmap_fragment:dR,metalnessmap_pars_fragment:fR,morphinstance_vertex:hR,morphcolor_vertex:pR,morphnormal_vertex:mR,morphtarget_pars_vertex:gR,morphtarget_vertex:xR,normal_fragment_begin:vR,normal_fragment_maps:yR,normal_pars_fragment:_R,normal_pars_vertex:SR,normal_vertex:ER,normalmap_pars_fragment:MR,clearcoat_normal_fragment_begin:wR,clearcoat_normal_fragment_maps:TR,clearcoat_pars_fragment:bR,iridescence_pars_fragment:AR,opaque_fragment:CR,packing:RR,premultiplied_alpha_fragment:PR,project_vertex:LR,dithering_fragment:DR,dithering_pars_fragment:IR,roughnessmap_fragment:NR,roughnessmap_pars_fragment:FR,shadowmap_pars_fragment:UR,shadowmap_pars_vertex:OR,shadowmap_vertex:kR,shadowmask_pars_fragment:BR,skinbase_vertex:zR,skinning_pars_vertex:HR,skinning_vertex:VR,skinnormal_vertex:GR,specularmap_fragment:WR,specularmap_pars_fragment:jR,tonemapping_fragment:XR,tonemapping_pars_fragment:qR,transmission_fragment:$R,transmission_pars_fragment:YR,uv_pars_fragment:KR,uv_pars_vertex:JR,uv_vertex:ZR,worldpos_vertex:QR,background_vert:e2,background_frag:t2,backgroundCube_vert:n2,backgroundCube_frag:i2,cube_vert:r2,cube_frag:s2,depth_vert:o2,depth_frag:a2,distance_vert:l2,distance_frag:c2,equirect_vert:u2,equirect_frag:d2,linedashed_vert:f2,linedashed_frag:h2,meshbasic_vert:p2,meshbasic_frag:m2,meshlambert_vert:g2,meshlambert_frag:x2,meshmatcap_vert:v2,meshmatcap_frag:y2,meshnormal_vert:_2,meshnormal_frag:S2,meshphong_vert:E2,meshphong_frag:M2,meshphysical_vert:w2,meshphysical_frag:T2,meshtoon_vert:b2,meshtoon_frag:A2,points_vert:C2,points_frag:R2,shadow_vert:P2,shadow_frag:L2,sprite_vert:D2,sprite_frag:I2},ve={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},bi={basic:{uniforms:pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:pn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:pn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:pn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:pn([ve.points,ve.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:pn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:pn([ve.common,ve.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:pn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:pn([ve.sprite,ve.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:pn([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:pn([ve.lights,ve.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};bi.physical={uniforms:pn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Ql={r:0,b:0,g:0},N2=new wt,aS=new He;aS.set(-1,0,0,0,1,0,0,0,1);function F2(t,e,n,i,r,s){const o=new Qe(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function m(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const S=v.backgroundBlurriness>0;y=e.get(y,S)}return y}function x(v){let y=!1;const S=m(v);S===null?g(o,a):S&&S.isColor&&(g(S,1),y=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(v,y){const S=m(y);S&&(S.isCubeTexture||S.mapping===Lu)?(c===void 0&&(c=new bn(new ll(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Fo(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(N2.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(aS),c.material.toneMapped=Je.getTransfer(S.colorSpace)!==lt,(u!==S||f!==S.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new bn(new Iu(2,2),new Fi({name:"BackgroundMaterial",uniforms:Fo(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,y){v.getRGB(Ql,nS(t)),n.buffers.color.setClear(Ql.r,Ql.g,Ql.b,y,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:x,addToRenderList:E,dispose:d}}function U2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(D,B,j,te,H){let J=!1;const W=f(D,te,j,B);s!==W&&(s=W,c(s.object)),J=m(D,te,j,H),J&&x(D,te,j,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(D,B,j,te),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function f(D,B,j,te){const H=te.wireframe===!0;let J=i[B.id];J===void 0&&(J={},i[B.id]=J);const W=D.isInstancedMesh===!0?D.id:0;let O=J[W];O===void 0&&(O={},J[W]=O);let K=O[j.id];K===void 0&&(K={},O[j.id]=K);let Z=K[H];return Z===void 0&&(Z=h(l()),K[H]=Z),Z}function h(D){const B=[],j=[],te=[];for(let H=0;H<n;H++)B[H]=0,j[H]=0,te[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:te,object:D,attributes:{},index:null}}function m(D,B,j,te){const H=s.attributes,J=B.attributes;let W=0;const O=j.getAttributes();for(const K in O)if(O[K].location>=0){const ne=H[K];let le=J[K];if(le===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),ne===void 0||ne.attribute!==le||le&&ne.data!==le.data)return!0;W++}return s.attributesNum!==W||s.index!==te}function x(D,B,j,te){const H={},J=B.attributes;let W=0;const O=j.getAttributes();for(const K in O)if(O[K].location>=0){let ne=J[K];ne===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));const le={};le.attribute=ne,ne&&ne.data&&(le.data=ne.data),H[K]=le,W++}s.attributes=H,s.attributesNum=W,s.index=te}function E(){const D=s.newAttributes;for(let B=0,j=D.length;B<j;B++)D[B]=0}function g(D){d(D,0)}function d(D,B){const j=s.newAttributes,te=s.enabledAttributes,H=s.attributeDivisors;j[D]=1,te[D]===0&&(t.enableVertexAttribArray(D),te[D]=1),H[D]!==B&&(t.vertexAttribDivisor(D,B),H[D]=B)}function v(){const D=s.newAttributes,B=s.enabledAttributes;for(let j=0,te=B.length;j<te;j++)B[j]!==D[j]&&(t.disableVertexAttribArray(j),B[j]=0)}function y(D,B,j,te,H,J,W){W===!0?t.vertexAttribIPointer(D,B,j,H,J):t.vertexAttribPointer(D,B,j,te,H,J)}function S(D,B,j,te){E();const H=te.attributes,J=j.getAttributes(),W=B.defaultAttributeValues;for(const O in J){const K=J[O];if(K.location>=0){let Z=H[O];if(Z===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const ne=Z.normalized,le=Z.itemSize,Be=e.get(Z);if(Be===void 0)continue;const Xe=Be.buffer,Ce=Be.type,G=Be.bytesPerElement,oe=Ce===t.INT||Ce===t.UNSIGNED_INT||Z.gpuType===um;if(Z.isInterleavedBufferAttribute){const ae=Z.data,Re=ae.stride,ze=Z.offset;if(ae.isInstancedInterleavedBuffer){for(let Fe=0;Fe<K.locationSize;Fe++)d(K.location+Fe,ae.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Fe=0;Fe<K.locationSize;Fe++)g(K.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let Fe=0;Fe<K.locationSize;Fe++)y(K.location+Fe,le/K.locationSize,Ce,ne,Re*G,(ze+le/K.locationSize*Fe)*G,oe)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)d(K.location+ae,Z.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<K.locationSize;ae++)g(K.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let ae=0;ae<K.locationSize;ae++)y(K.location+ae,le/K.locationSize,Ce,ne,le*G,le/K.locationSize*ae*G,oe)}}else if(W!==void 0){const ne=W[O];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(K.location,ne);break;case 3:t.vertexAttrib3fv(K.location,ne);break;case 4:t.vertexAttrib4fv(K.location,ne);break;default:t.vertexAttrib1fv(K.location,ne)}}}}v()}function w(){C();for(const D in i){const B=i[D];for(const j in B){const te=B[j];for(const H in te){const J=te[H];for(const W in J)u(J[W].object),delete J[W];delete te[H]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const B=i[D.id];for(const j in B){const te=B[j];for(const H in te){const J=te[H];for(const W in J)u(J[W].object),delete J[W];delete te[H]}}delete i[D.id]}function A(D){for(const B in i){const j=i[B];for(const te in j){const H=j[te];if(H[D.id]===void 0)continue;const J=H[D.id];for(const W in J)u(J[W].object),delete J[W];delete H[D.id]}}}function _(D){for(const B in i){const j=i[B],te=D.isInstancedMesh===!0?D.id:0,H=j[te];if(H!==void 0){for(const J in H){const W=H[J];for(const O in W)u(W[O].object),delete W[O];delete H[J]}delete j[te],Object.keys(j).length===0&&delete i[B]}}}function C(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:E,enableAttribute:g,disableUnusedAttributes:v}}function O2(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];n.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function k2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==hi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const _=A===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==zn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ci&&!_)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,maxSamples:w,samples:T}}function B2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ls,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,E=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,y=v*4;let S=d.clippingState||null;l.value=S,S=u(x,h,y,m);for(let w=0;w!==y;++w)S[w]=n[w];d.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){const E=f!==null?f.length:0;let g=null;if(E!==0){if(g=l.value,x!==!0||g===null){const d=m+E*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,S=m;y!==E;++y,S+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const Dr=4,ix=[.125,.215,.35,.446,.526,.582],us=20,z2=256,aa=new sS,rx=new Qe;let Xd=null,qd=0,$d=0,Yd=!1;const H2=new N;class sx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=H2}=s;Xd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ax(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,qd,$d),this._renderer.xr.enabled=Yd,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===As||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:rr,format:hi,colorSpace:iu,depthBuffer:!1},r=ox(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ox(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=V2(s)),this._blurMaterial=W2(s,e,n),this._ggxMaterial=G2(s,e,n)}return r}_compileMaterial(e){const n=new bn(new In,e);this._renderer.compile(n,aa)}_sceneToCubeUV(e,n,i,r,s){const l=new Bn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(rx),f.toneMapping=Di,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new ll,new ou({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let d=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,d=!0):(g.color.copy(rx),d=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const w=this._cubeSize;Js(r,S*w,y>2?w:0,w,w),f.setRenderTarget(r),d&&f.render(E,l),f.render(e,l)}f.toneMapping=m,f.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===As||e.mapping===Io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ax());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Js(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,aa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,m=f*h,{_lodMax:x}=this,E=this._sizeLods[i],g=3*E*(i>x-Dr?i-x+Dr:0),d=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-n,Js(s,g,d,3*E,2*E),r.setRenderTarget(s),r.render(a,aa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Js(e,g,d,3*E,2*E),r.setRenderTarget(e),r.render(a,aa)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*us-1),E=s/x,g=isFinite(s)?1+Math.floor(u*E):us;g>us&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${us}`);const d=[];let v=0;for(let A=0;A<us;++A){const _=A/E,C=Math.exp(-_*_/2);d.push(C),A===0?v+=C:A<g&&(v+=2*C)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=x,h.mipInt.value=y-i;const S=this._sizeLods[r],w=3*S*(r>y-Dr?r-y+Dr:0),T=4*(this._cubeSize-S);Js(n,w,T,3*S,2*S),l.setRenderTarget(n),l.render(f,aa)}}function V2(t){const e=[],n=[],i=[];let r=t;const s=t-Dr+1+ix.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Dr?l=ix[o-t+Dr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,E=3,g=2,d=1,v=new Float32Array(E*x*m),y=new Float32Array(g*x*m),S=new Float32Array(d*x*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,_=T>2?0:-1,C=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];v.set(C,E*x*T),y.set(h,g*x*T);const L=[T,T,T,T,T,T];S.set(L,d*x*T)}const w=new In;w.setAttribute("position",new ei(v,E)),w.setAttribute("uv",new ei(y,g)),w.setAttribute("faceIndex",new ei(S,d)),i.push(new bn(w,null)),r>Dr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function ox(t,e,n){const i=new Ii(t,e,n);return i.texture.mapping=Lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function G2(t,e,n){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function W2(t,e,n){const i=new Float32Array(us),r=new N(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ax(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function lx(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Nu(){return`

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
	`}class lS extends Ii{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new J_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ll(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:Zi});s.uniforms.tEquirect.value=n;const o=new bn(r,s),a=n.minFilter;return n.minFilter===ms&&(n.minFilter=dn),new KA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function j2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,m=!1){return h==null?null:m?o(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===md||m===gd)if(e.has(h)){const x=e.get(h).texture;return a(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const E=new lS(x.height);return E.fromEquirectangularTexture(t,h),e.set(h,E),h.addEventListener("dispose",c),a(E.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const m=h.mapping,x=m===md||m===gd,E=m===As||m===Io;if(x||E){let g=n.get(h);const d=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new sx(t)),g=x?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const v=h.image;return x&&v&&v.height>0||E&&v&&l(v)?(i===null&&(i=new sx(t)),g=x?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,m){return m===md?h.mapping=As:m===gd&&(h.mapping=Io),h}function l(h){let m=0;const x=6;for(let E=0;E<x;E++)h[E]!==void 0&&m++;return m===x}function c(h){const m=h.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const x=n.get(m);x!==void 0&&(n.delete(m),x.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function X2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&So("WebGLRenderer: "+i+" extension not supported."),r}}}function q2(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,x=f.attributes.position;let E=0;if(x===void 0)return;if(m!==null){const v=m.array;E=m.version;for(let y=0,S=v.length;y<S;y+=3){const w=v[y+0],T=v[y+1],A=v[y+2];h.push(w,T,T,A,A,w)}}else{const v=x.array;E=x.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const w=y+0,T=y+1,A=y+2;h.push(w,T,T,A,A,w)}}const g=new(x.count>=65535?Y_:$_)(h,1);g.version=E;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function $2(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,s,f*o),n.update(h,i,1)}function c(f,h,m){m!==0&&(t.drawElementsInstanced(i,h,s,f*o,m),n.update(h,i,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,m);let E=0;for(let g=0;g<m;g++)E+=h[g];n.update(E,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Y2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function K2(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let L=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var m=L;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),E===!0&&(S=2),g===!0&&(S=3);let w=a.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*T*4*f),_=new j_(A,w,T,f);_.type=Ci,_.needsUpdate=!0;const C=S*4;for(let D=0;D<f;D++){const B=d[D],j=v[D],te=y[D],H=w*T*4*D;for(let J=0;J<B.count;J++){const W=J*C;x===!0&&(r.fromBufferAttribute(B,J),A[H+W+0]=r.x,A[H+W+1]=r.y,A[H+W+2]=r.z,A[H+W+3]=0),E===!0&&(r.fromBufferAttribute(j,J),A[H+W+4]=r.x,A[H+W+5]=r.y,A[H+W+6]=r.z,A[H+W+7]=0),g===!0&&(r.fromBufferAttribute(te,J),A[H+W+8]=r.x,A[H+W+9]=r.y,A[H+W+10]=r.z,A[H+W+11]=te.itemSize===4?r.w:1)}}h={count:f,texture:_,size:new Ue(w,T)},i.set(a,h),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const E=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function J2(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const Z2={[R_]:"LINEAR_TONE_MAPPING",[P_]:"REINHARD_TONE_MAPPING",[L_]:"CINEON_TONE_MAPPING",[D_]:"ACES_FILMIC_TONE_MAPPING",[N_]:"AGX_TONE_MAPPING",[F_]:"NEUTRAL_TONE_MAPPING",[I_]:"CUSTOM_TONE_MAPPING"};function Q2(t,e,n,i,r,s){const o=new Ii(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new No(e,n):void 0}),a=new Ii(e,n,{type:rr,depthBuffer:!1,stencilBuffer:!1}),l=new In;l.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new _n([0,2,0,0,2,0],2));const c=new GA({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new bn(l,c),f=new sS(-1,1,1,-1,0,1);let h=null,m=null,x=!1,E,g=null,d=[],v=!1;this.setSize=function(y,S){o.setSize(y,S),a.setSize(y,S);for(let w=0;w<d.length;w++){const T=d[w];T.setSize&&T.setSize(y,S)}},this.setEffects=function(y){d=y,v=d.length>0&&d[0].isRenderPass===!0;const S=o.width,w=o.height;for(let T=0;T<d.length;T++){const A=d[T];A.setSize&&A.setSize(S,w)}},this.begin=function(y,S){if(x||y.toneMapping===Di&&d.length===0)return!1;if(g=S,S!==null){const w=S.width,T=S.height;(o.width!==w||o.height!==T)&&this.setSize(w,T)}return v===!1&&y.setRenderTarget(o),E=y.toneMapping,y.toneMapping=Di,!0},this.hasRenderPass=function(){return v},this.end=function(y,S){y.toneMapping=E,x=!0;let w=o,T=a;for(let A=0;A<d.length;A++){const _=d[A];if(_.enabled!==!1&&(_.render(y,T,w,S),_.needsSwap!==!1)){const C=w;w=T,T=C}}if(h!==y.outputColorSpace||m!==y.toneMapping){h=y.outputColorSpace,m=y.toneMapping,c.defines={},Je.getTransfer(h)===lt&&(c.defines.SRGB_TRANSFER="");const A=Z2[m];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(g),y.render(u,f),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const cS=new vn,Jh=new No(1,1),uS=new j_,dS=new sA,fS=new J_,cx=[],ux=[],dx=new Float32Array(16),fx=new Float32Array(9),hx=new Float32Array(4);function jo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cx[r];if(s===void 0&&(s=new Float32Array(r),cx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fu(t,e){let n=ux[e];n===void 0&&(n=new Int32Array(e),ux[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function eP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function nP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function iP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function rP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;hx.set(i),t.uniformMatrix2fv(this.addr,!1,hx),Gt(n,i)}}function sP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;fx.set(i),t.uniformMatrix3fv(this.addr,!1,fx),Gt(n,i)}}function oP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;dx.set(i),t.uniformMatrix4fv(this.addr,!1,dx),Gt(n,i)}}function aP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function cP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function uP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function dP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function fP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function hP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function pP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function mP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jh.compareFunction=n.isReversedDepthBuffer()?xm:gm,s=Jh):s=cS,n.setTexture2D(e||s,r)}function gP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||dS,r)}function xP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||fS,r)}function vP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||uS,r)}function yP(t){switch(t){case 5126:return eP;case 35664:return tP;case 35665:return nP;case 35666:return iP;case 35674:return rP;case 35675:return sP;case 35676:return oP;case 5124:case 35670:return aP;case 35667:case 35671:return lP;case 35668:case 35672:return cP;case 35669:case 35673:return uP;case 5125:return dP;case 36294:return fP;case 36295:return hP;case 36296:return pP;case 35678:case 36198:case 36298:case 36306:case 35682:return mP;case 35679:case 36299:case 36307:return gP;case 35680:case 36300:case 36308:case 36293:return xP;case 36289:case 36303:case 36311:case 36292:return vP}}function _P(t,e){t.uniform1fv(this.addr,e)}function SP(t,e){const n=jo(e,this.size,2);t.uniform2fv(this.addr,n)}function EP(t,e){const n=jo(e,this.size,3);t.uniform3fv(this.addr,n)}function MP(t,e){const n=jo(e,this.size,4);t.uniform4fv(this.addr,n)}function wP(t,e){const n=jo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function TP(t,e){const n=jo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bP(t,e){const n=jo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function AP(t,e){t.uniform1iv(this.addr,e)}function CP(t,e){t.uniform2iv(this.addr,e)}function RP(t,e){t.uniform3iv(this.addr,e)}function PP(t,e){t.uniform4iv(this.addr,e)}function LP(t,e){t.uniform1uiv(this.addr,e)}function DP(t,e){t.uniform2uiv(this.addr,e)}function IP(t,e){t.uniform3uiv(this.addr,e)}function NP(t,e){t.uniform4uiv(this.addr,e)}function FP(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Jh:o=cS;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function UP(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||dS,s[o])}function OP(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||fS,s[o])}function kP(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||uS,s[o])}function BP(t){switch(t){case 5126:return _P;case 35664:return SP;case 35665:return EP;case 35666:return MP;case 35674:return wP;case 35675:return TP;case 35676:return bP;case 5124:case 35670:return AP;case 35667:case 35671:return CP;case 35668:case 35672:return RP;case 35669:case 35673:return PP;case 5125:return LP;case 36294:return DP;case 36295:return IP;case 36296:return NP;case 35678:case 36198:case 36298:case 36306:case 35682:return FP;case 35679:case 36299:case 36307:return UP;case 35680:case 36300:case 36308:case 36293:return OP;case 36289:case 36303:case 36311:case 36292:return kP}}class zP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=yP(n.type)}}class HP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BP(n.type)}}class VP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Kd=/(\w+)(\])?(\[|\.)?/g;function px(t,e){t.seq.push(e),t.map[e.id]=e}function GP(t,e,n){const i=t.name,r=i.length;for(Kd.lastIndex=0;;){const s=Kd.exec(i),o=Kd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){px(n,c===void 0?new zP(a,t,e):new HP(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new VP(a),px(n,f)),n=f}}}class bc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);GP(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function mx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const WP=37297;let jP=0;function XP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const gx=new He;function qP(t){Je._getMatrix(gx,Je.workingColorSpace,t);const e=`mat3( ${gx.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case ru:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function xx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+XP(t.getShaderSource(e),a)}else return s}function $P(t,e){const n=qP(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const YP={[R_]:"Linear",[P_]:"Reinhard",[L_]:"Cineon",[D_]:"ACESFilmic",[N_]:"AgX",[F_]:"Neutral",[I_]:"Custom"};function KP(t,e){const n=YP[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ec=new N;function JP(){Je.getLuminanceCoefficients(ec);const t=ec.x.toFixed(4),e=ec.y.toFixed(4),n=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function QP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function e3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function pa(t){return t!==""}function vx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(t){return t.replace(t3,i3)}const n3=new Map;function i3(t,e){let n=je[e];if(n===void 0){const i=n3.get(e);if(i!==void 0)n=je[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zh(n)}const r3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _x(t){return t.replace(r3,s3)}function s3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sx(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const o3={[Sc]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function a3(t){return o3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const l3={[As]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE",[Lu]:"ENVMAP_TYPE_CUBE_UV"};function c3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":l3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const u3={[Io]:"ENVMAP_MODE_REFRACTION"};function d3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":u3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const f3={[C_]:"ENVMAP_BLENDING_MULTIPLY",[kb]:"ENVMAP_BLENDING_MIX",[Bb]:"ENVMAP_BLENDING_ADD"};function h3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":f3[t.combine]||"ENVMAP_BLENDING_NONE"}function p3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function m3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=a3(n),c=c3(n),u=d3(n),f=h3(n),h=p3(n),m=ZP(n),x=QP(s),E=r.createProgram();let g,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(pa).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(pa).join(`
`),d.length>0&&(d+=`
`)):(g=[Sx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),d=[Sx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?je.tonemapping_pars_fragment:"",n.toneMapping!==Di?KP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,$P("linearToOutputTexel",n.outputColorSpace),JP(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(pa).join(`
`)),o=Zh(o),o=vx(o,n),o=yx(o,n),a=Zh(a),a=vx(a,n),a=yx(a,n),o=_x(o),a=_x(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===b0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===b0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+g+o,S=v+d+a,w=mx(r,r.VERTEX_SHADER,y),T=mx(r,r.FRAGMENT_SHADER,S);r.attachShader(E,w),r.attachShader(E,T),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function A(D){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(E)||"",j=r.getShaderInfoLog(w)||"",te=r.getShaderInfoLog(T)||"",H=B.trim(),J=j.trim(),W=te.trim();let O=!0,K=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,w,T);else{const Z=xx(r,w,"vertex"),ne=xx(r,T,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+Z+`
`+ne)}else H!==""?ke("WebGLProgram: Program Info Log:",H):(J===""||W==="")&&(K=!1);K&&(D.diagnostics={runnable:O,programLog:H,vertexShader:{log:J,prefix:g},fragmentShader:{log:W,prefix:d}})}r.deleteShader(w),r.deleteShader(T),_=new bc(r,E),C=e3(r,E)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(E,WP)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jP++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=T,this}let g3=0;class x3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new v3(e),n.set(e,i)),i}}class v3{constructor(e){this.id=g3++,this.code=e,this.usedTimes=0}}function y3(t){return t===Cs||t===tu||t===nu}function _3(t,e,n,i,r,s){const o=new X_,a=new x3,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,C,L,D,B,j){const te=D.fog,H=B.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||J,W),K=O&&O.mapping===Lu?O.image.height:null,Z=m[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,le=ne!==void 0?ne.length:0;let Be=0;H.morphAttributes.position!==void 0&&(Be=1),H.morphAttributes.normal!==void 0&&(Be=2),H.morphAttributes.color!==void 0&&(Be=3);let Xe,Ce,G,oe;if(Z){const be=bi[Z];Xe=be.vertexShader,Ce=be.fragmentShader}else{Xe=_.vertexShader,Ce=_.fragmentShader;const be=a.getVertexShaderStage(_),Rt=a.getFragmentShaderStage(_);a.update(_,be,Rt),G=be.id,oe=Rt.id}const ae=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),ze=B.isInstancedMesh===!0,Fe=B.isBatchedMesh===!0,st=!!_.map,qe=!!_.matcap,ot=!!O,We=!!_.aoMap,ge=!!_.lightMap,et=!!_.bumpMap&&_.wireframe===!1,ut=!!_.normalMap,mt=!!_.displacementMap,Ot=!!_.emissiveMap,Et=!!_.metalnessMap,gt=!!_.roughnessMap,U=_.anisotropy>0,Mn=_.clearcoat>0,at=_.dispersion>0,R=_.iridescence>0,M=_.sheen>0,V=_.transmission>0,$=U&&!!_.anisotropyMap,Q=Mn&&!!_.clearcoatMap,ue=Mn&&!!_.clearcoatNormalMap,fe=Mn&&!!_.clearcoatRoughnessMap,ee=R&&!!_.iridescenceMap,re=R&&!!_.iridescenceThicknessMap,he=M&&!!_.sheenColorMap,Le=M&&!!_.sheenRoughnessMap,xe=!!_.specularMap,pe=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Oe=V&&!!_.transmissionMap,Ve=V&&!!_.thicknessMap,I=!!_.gradientMap,de=!!_.alphaMap,ie=_.alphaTest>0,me=!!_.alphaHash,Ee=!!_.extensions;let se=Di;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(se=t.toneMapping);const Pe={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Xe,fragmentShader:Ce,defines:_.defines,customVertexShaderID:G,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Fe,batchingColor:Fe&&B._colorsTexture!==null,instancing:ze,instancingColor:ze&&B.instanceColor!==null,instancingMorph:ze&&B.morphTexture!==null,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:st,matcap:qe,envMap:ot,envMapMode:ot&&O.mapping,envMapCubeUVHeight:K,aoMap:We,lightMap:ge,bumpMap:et,normalMap:ut,displacementMap:mt,emissiveMap:Ot,normalMapObjectSpace:ut&&_.normalMapType===Vb,normalMapTangentSpace:ut&&_.normalMapType===qh,packedNormalMap:ut&&_.normalMapType===qh&&y3(_.normalMap.format),metalnessMap:Et,roughnessMap:gt,anisotropy:U,anisotropyMap:$,clearcoat:Mn,clearcoatMap:Q,clearcoatNormalMap:ue,clearcoatRoughnessMap:fe,dispersion:at,iridescence:R,iridescenceMap:ee,iridescenceThicknessMap:re,sheen:M,sheenColorMap:he,sheenRoughnessMap:Le,specularMap:xe,specularColorMap:pe,specularIntensityMap:Ne,transmission:V,transmissionMap:Oe,thicknessMap:Ve,gradientMap:I,opaque:_.transparent===!1&&_.blending===_o&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:ie,alphaHash:me,combine:_.combine,mapUv:st&&x(_.map.channel),aoMapUv:We&&x(_.aoMap.channel),lightMapUv:ge&&x(_.lightMap.channel),bumpMapUv:et&&x(_.bumpMap.channel),normalMapUv:ut&&x(_.normalMap.channel),displacementMapUv:mt&&x(_.displacementMap.channel),emissiveMapUv:Ot&&x(_.emissiveMap.channel),metalnessMapUv:Et&&x(_.metalnessMap.channel),roughnessMapUv:gt&&x(_.roughnessMap.channel),anisotropyMapUv:$&&x(_.anisotropyMap.channel),clearcoatMapUv:Q&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(_.sheenRoughnessMap.channel),specularMapUv:xe&&x(_.specularMap.channel),specularColorMapUv:pe&&x(_.specularColorMap.channel),specularIntensityMapUv:Ne&&x(_.specularIntensityMap.channel),transmissionMapUv:Oe&&x(_.transmissionMap.channel),thicknessMapUv:Ve&&x(_.thicknessMap.channel),alphaMapUv:de&&x(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ut||U),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(st||de),fog:!!te,useFog:_.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&ut===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Re,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Be,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:st&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:Ot&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xi,flipSided:_.side===Dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ee&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&_.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function g(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)C.push(L),C.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(d(C,_),v(C,_),C.push(t.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function d(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function v(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){const C=m[_.type];let L;if(C){const D=bi[C];L=zA.clone(D.uniforms)}else L=_.uniforms;return L}function S(_,C){let L=u.get(C);return L!==void 0?++L.usedTimes:(L=new m3(t,C,_,r),c.push(L),u.set(C,L)),L}function w(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function A(){a.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:y,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:A}}function S3(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function E3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ex(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Mx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,x,E,g,d){let v=t[e];return v===void 0?(v={id:h.id,object:h,geometry:m,material:x,materialVariant:o(h),groupOrder:E,renderOrder:h.renderOrder,z:g,group:d},t[e]=v):(v.id=h.id,v.object=h,v.geometry=m,v.material=x,v.materialVariant=o(h),v.groupOrder=E,v.renderOrder=h.renderOrder,v.z=g,v.group=d),e++,v}function l(h,m,x,E,g,d){const v=a(h,m,x,E,g,d);x.transmission>0?i.push(v):x.transparent===!0?r.push(v):n.push(v)}function c(h,m,x,E,g,d){const v=a(h,m,x,E,g,d);x.transmission>0?i.unshift(v):x.transparent===!0?r.unshift(v):n.unshift(v)}function u(h,m,x){n.length>1&&n.sort(h||E3),i.length>1&&i.sort(m||Ex),r.length>1&&r.sort(m||Ex),x&&(n.reverse(),i.reverse(),r.reverse())}function f(){for(let h=e,m=t.length;h<m;h++){const x=t[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function M3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Mx,t.set(i,[o])):r>=s.length?(o=new Mx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function w3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Qe};break;case"SpotLight":n={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function T3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let b3=0;function A3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function C3(t){const e=new w3,n=T3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new wt,o=new wt;function a(c){let u=0,f=0,h=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,x=0,E=0,g=0,d=0,v=0,y=0,S=0,w=0,T=0,A=0;c.sort(A3);for(let C=0,L=c.length;C<L;C++){const D=c[C],B=D.color,j=D.intensity,te=D.distance;let H=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Cs?H=D.shadow.map.texture:H=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=B.r*j,f+=B.g*j,h+=B.b*j;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],j);A++}else if(D.isDirectionalLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,O=n.get(D);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=D.shadow.matrix,v++}i.directional[m]=J,m++}else if(D.isSpotLight){const J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(B).multiplyScalar(j),J.distance=te,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[E]=J;const W=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,W.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[E]=W.matrix,D.castShadow){const O=n.get(D);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,i.spotShadow[E]=O,i.spotShadowMap[E]=H,S++}E++}else if(D.isRectAreaLight){const J=e.get(D);J.color.copy(B).multiplyScalar(j),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=J,g++}else if(D.isPointLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){const W=D.shadow,O=n.get(D);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,O.shadowCameraNear=W.camera.near,O.shadowCameraFar=W.camera.far,i.pointShadow[x]=O,i.pointShadowMap[x]=H,i.pointShadowMatrix[x]=D.shadow.matrix,y++}i.point[x]=J,x++}else if(D.isHemisphereLight){const J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(j),J.groundColor.copy(D.groundColor).multiplyScalar(j),i.hemi[d]=J,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const _=i.hash;(_.directionalLength!==m||_.pointLength!==x||_.spotLength!==E||_.rectAreaLength!==g||_.hemiLength!==d||_.numDirectionalShadows!==v||_.numPointShadows!==y||_.numSpotShadows!==S||_.numSpotMaps!==w||_.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=g,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,_.directionalLength=m,_.pointLength=x,_.spotLength=E,_.rectAreaLength=g,_.hemiLength=d,_.numDirectionalShadows=v,_.numPointShadows=y,_.numSpotShadows=S,_.numSpotMaps=w,_.numLightProbes=A,i.version=b3++)}function l(c,u){let f=0,h=0,m=0,x=0,E=0;const g=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const y=c[d];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(y.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),E++}}}return{setup:a,setupView:l,state:i}}function wx(t){const e=new C3(t),n=[],i=[],r=[];function s(h){f.camera=h,n.length=0,i.length=0,r.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function R3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new wx(t),e.set(r,[a])):s>=o.length?(a=new wx(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const P3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L3=`uniform sampler2D shadow_pass;
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
}`,D3=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],I3=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Tx=new wt,la=new N,Jd=new N;function N3(t,e,n){let i=new _m;const r=new Ue,s=new Ue,o=new bt,a=new jA,l=new XA,c={},u=n.maxTextureSize,f={[Wr]:Dn,[Dn]:Wr,[Xi]:Xi},h=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:P3,fragmentShader:L3}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new In;x.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new bn(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let d=this.type;this.render=function(T,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===yb&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sc);const C=t.getRenderTarget(),L=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Zi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const j=d!==this.type;j&&A.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(H=>H.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,H=T.length;te<H;te++){const J=T[te],W=J.shadow;if(W===void 0){ke("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const O=W.getFrameExtents();r.multiply(O),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,W.mapSize.y=s.y));const K=t.state.buffers.depth.getReversed();if(W.camera._reversedDepth=K,W.map===null||j===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ha){if(J.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ii(r.x,r.y,{format:Cs,type:rr,minFilter:dn,magFilter:dn,generateMipmaps:!1}),W.map.texture.name=J.name+".shadowMap",W.map.depthTexture=new No(r.x,r.y,Ci),W.map.depthTexture.name=J.name+".shadowMapDepth",W.map.depthTexture.format=sr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Zt,W.map.depthTexture.magFilter=Zt}else J.isPointLight?(W.map=new lS(r.x),W.map.depthTexture=new MA(r.x,Ni)):(W.map=new Ii(r.x,r.y),W.map.depthTexture=new No(r.x,r.y,Ni)),W.map.depthTexture.name=J.name+".shadowMap",W.map.depthTexture.format=sr,this.type===Sc?(W.map.depthTexture.compareFunction=K?xm:gm,W.map.depthTexture.minFilter=dn,W.map.depthTexture.magFilter=dn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Zt,W.map.depthTexture.magFilter=Zt);W.camera.updateProjectionMatrix()}const Z=W.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<Z;ne++){if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(W.map),t.clear());const le=W.getViewport(ne);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),B.viewport(o)}if(J.isPointLight){const le=W.camera,Be=W.matrix,Xe=J.distance||le.far;Xe!==le.far&&(le.far=Xe,le.updateProjectionMatrix()),la.setFromMatrixPosition(J.matrixWorld),le.position.copy(la),Jd.copy(le.position),Jd.add(D3[ne]),le.up.copy(I3[ne]),le.lookAt(Jd),le.updateMatrixWorld(),Be.makeTranslation(-la.x,-la.y,-la.z),Tx.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Tx,le.coordinateSystem,le.reversedDepth)}else W.updateMatrices(J);i=W.getFrustum(),S(A,_,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===ha&&v(W,_),W.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(C,L,D)};function v(T,A){const _=e.update(E);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ii(r.x,r.y,{format:Cs,type:rr})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,_,h,E,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,_,m,E,null)}function y(T,A,_,C){let L=null;const D=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)L=D;else if(L=_.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const B=L.uuid,j=A.uuid;let te=c[B];te===void 0&&(te={},c[B]=te);let H=te[j];H===void 0&&(H=L.clone(),te[j]=H,A.addEventListener("dispose",w)),L=H}if(L.visible=A.visible,L.wireframe=A.wireframe,C===ha?L.side=A.shadowSide!==null?A.shadowSide:A.side:L.side=A.shadowSide!==null?A.shadowSide:f[A.side],L.alphaMap=A.alphaMap,L.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,L.map=A.map,L.clipShadows=A.clipShadows,L.clippingPlanes=A.clippingPlanes,L.clipIntersection=A.clipIntersection,L.displacementMap=A.displacementMap,L.displacementScale=A.displacementScale,L.displacementBias=A.displacementBias,L.wireframeLinewidth=A.wireframeLinewidth,L.linewidth=A.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=t.properties.get(L);B.light=_}return L}function S(T,A,_,C,L){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===ha)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const j=e.update(T),te=T.material;if(Array.isArray(te)){const H=j.groups;for(let J=0,W=H.length;J<W;J++){const O=H[J],K=te[O.materialIndex];if(K&&K.visible){const Z=y(T,K,C,L);T.onBeforeShadow(t,T,A,_,j,Z,O),t.renderBufferDirect(_,null,j,Z,T,O),T.onAfterShadow(t,T,A,_,j,Z,O)}}}else if(te.visible){const H=y(T,te,C,L);T.onBeforeShadow(t,T,A,_,j,H,null),t.renderBufferDirect(_,null,j,H,T,null),T.onAfterShadow(t,T,A,_,j,H,null)}}const B=T.children;for(let j=0,te=B.length;j<te;j++)S(B[j],A,_,C,L)}function w(T){T.target.removeEventListener("dispose",w);for(const _ in c){const C=c[_],L=T.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}function F3(t,e){function n(){let I=!1;const de=new bt;let ie=null;const me=new bt(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!I&&(t.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){I=Ee},setClear:function(Ee,se,Pe,be,Rt){Rt===!0&&(Ee*=be,se*=be,Pe*=be),de.set(Ee,se,Pe,be),me.equals(de)===!1&&(t.clearColor(Ee,se,Pe,be),me.copy(de))},reset:function(){I=!1,ie=null,me.set(-1,0,0,0)}}}function i(){let I=!1,de=!1,ie=null,me=null,Ee=null;return{setReversed:function(se){if(de!==se){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),de=se;const be=Ee;Ee=null,this.setClear(be)}},getReversed:function(){return de},setTest:function(se){se?ae(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(se){ie!==se&&!I&&(t.depthMask(se),ie=se)},setFunc:function(se){if(de&&(se=Zb[se]),me!==se){switch(se){case lh:t.depthFunc(t.NEVER);break;case ch:t.depthFunc(t.ALWAYS);break;case uh:t.depthFunc(t.LESS);break;case Do:t.depthFunc(t.LEQUAL);break;case dh:t.depthFunc(t.EQUAL);break;case fh:t.depthFunc(t.GEQUAL);break;case hh:t.depthFunc(t.GREATER);break;case ph:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=se}},setLocked:function(se){I=se},setClear:function(se){Ee!==se&&(Ee=se,de&&(se=1-se),t.clearDepth(se))},reset:function(){I=!1,ie=null,me=null,Ee=null,de=!1}}}function r(){let I=!1,de=null,ie=null,me=null,Ee=null,se=null,Pe=null,be=null,Rt=null;return{setTest:function(xt){I||(xt?ae(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(xt){de!==xt&&!I&&(t.stencilMask(xt),de=xt)},setFunc:function(xt,vi,yi){(ie!==xt||me!==vi||Ee!==yi)&&(t.stencilFunc(xt,vi,yi),ie=xt,me=vi,Ee=yi)},setOp:function(xt,vi,yi){(se!==xt||Pe!==vi||be!==yi)&&(t.stencilOp(xt,vi,yi),se=xt,Pe=vi,be=yi)},setLocked:function(xt){I=xt},setClear:function(xt){Rt!==xt&&(t.clearStencil(xt),Rt=xt)},reset:function(){I=!1,de=null,ie=null,me=null,Ee=null,se=null,Pe=null,be=null,Rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},m=new WeakMap,x=[],E=null,g=!1,d=null,v=null,y=null,S=null,w=null,T=null,A=null,_=new Qe(0,0,0),C=0,L=!1,D=null,B=null,j=null,te=null,H=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,O=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=O>=1):K.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=O>=2);let Z=null,ne={};const le=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),Xe=new bt().fromArray(le),Ce=new bt().fromArray(Be);function G(I,de,ie,me){const Ee=new Uint8Array(4),se=t.createTexture();t.bindTexture(I,se),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<ie;Pe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(de+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return se}const oe={};oe[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),o.setFunc(Do),et(!1),ut(S0),ae(t.CULL_FACE),We(Zi);function ae(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function Re(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function ze(I,de){return h[I]!==de?(t.bindFramebuffer(I,de),h[I]=de,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=de),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Fe(I,de){let ie=x,me=!1;if(I){ie=m.get(de),ie===void 0&&(ie=[],m.set(de,ie));const Ee=I.textures;if(ie.length!==Ee.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Pe=Ee.length;se<Pe;se++)ie[se]=t.COLOR_ATTACHMENT0+se;ie.length=Ee.length,me=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,me=!0);me&&t.drawBuffers(ie)}function st(I){return E!==I?(t.useProgram(I),E=I,!0):!1}const qe={[cs]:t.FUNC_ADD,[Sb]:t.FUNC_SUBTRACT,[Eb]:t.FUNC_REVERSE_SUBTRACT};qe[Mb]=t.MIN,qe[wb]=t.MAX;const ot={[Tb]:t.ZERO,[bb]:t.ONE,[Ab]:t.SRC_COLOR,[oh]:t.SRC_ALPHA,[Ib]:t.SRC_ALPHA_SATURATE,[Lb]:t.DST_COLOR,[Rb]:t.DST_ALPHA,[Cb]:t.ONE_MINUS_SRC_COLOR,[ah]:t.ONE_MINUS_SRC_ALPHA,[Db]:t.ONE_MINUS_DST_COLOR,[Pb]:t.ONE_MINUS_DST_ALPHA,[Nb]:t.CONSTANT_COLOR,[Fb]:t.ONE_MINUS_CONSTANT_COLOR,[Ub]:t.CONSTANT_ALPHA,[Ob]:t.ONE_MINUS_CONSTANT_ALPHA};function We(I,de,ie,me,Ee,se,Pe,be,Rt,xt){if(I===Zi){g===!0&&(Re(t.BLEND),g=!1);return}if(g===!1&&(ae(t.BLEND),g=!0),I!==_b){if(I!==d||xt!==L){if((v!==cs||w!==cs)&&(t.blendEquation(t.FUNC_ADD),v=cs,w=cs),xt)switch(I){case _o:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sh:t.blendFunc(t.ONE,t.ONE);break;case E0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case M0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",I);break}else switch(I){case _o:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case E0:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case M0:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",I);break}y=null,S=null,T=null,A=null,_.set(0,0,0),C=0,d=I,L=xt}return}Ee=Ee||de,se=se||ie,Pe=Pe||me,(de!==v||Ee!==w)&&(t.blendEquationSeparate(qe[de],qe[Ee]),v=de,w=Ee),(ie!==y||me!==S||se!==T||Pe!==A)&&(t.blendFuncSeparate(ot[ie],ot[me],ot[se],ot[Pe]),y=ie,S=me,T=se,A=Pe),(be.equals(_)===!1||Rt!==C)&&(t.blendColor(be.r,be.g,be.b,Rt),_.copy(be),C=Rt),d=I,L=!1}function ge(I,de){I.side===Xi?Re(t.CULL_FACE):ae(t.CULL_FACE);let ie=I.side===Dn;de&&(ie=!ie),et(ie),I.blending===_o&&I.transparent===!1?We(Zi):We(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const me=I.stencilWrite;a.setTest(me),me&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function et(I){D!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),D=I)}function ut(I){I!==xb?(ae(t.CULL_FACE),I!==B&&(I===S0?t.cullFace(t.BACK):I===vb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),B=I}function mt(I){I!==j&&(W&&t.lineWidth(I),j=I)}function Ot(I,de,ie){I?(ae(t.POLYGON_OFFSET_FILL),(te!==de||H!==ie)&&(te=de,H=ie,o.getReversed()&&(de=-de),t.polygonOffset(de,ie))):Re(t.POLYGON_OFFSET_FILL)}function Et(I){I?ae(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function gt(I){I===void 0&&(I=t.TEXTURE0+J-1),Z!==I&&(t.activeTexture(I),Z=I)}function U(I,de,ie){ie===void 0&&(Z===null?ie=t.TEXTURE0+J-1:ie=Z);let me=ne[ie];me===void 0&&(me={type:void 0,texture:void 0},ne[ie]=me),(me.type!==I||me.texture!==de)&&(Z!==ie&&(t.activeTexture(ie),Z=ie),t.bindTexture(I,de||oe[I]),me.type=I,me.texture=de)}function Mn(){const I=ne[Z];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function at(){try{t.compressedTexImage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function M(){try{t.texSubImage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function V(){try{t.texSubImage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function ue(){try{t.texStorage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function fe(){try{t.texStorage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function ee(){try{t.texImage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function re(){try{t.texImage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function he(I){return f[I]!==void 0?f[I]:t.getParameter(I)}function Le(I,de){f[I]!==de&&(t.pixelStorei(I,de),f[I]=de)}function xe(I){Xe.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Xe.copy(I))}function pe(I){Ce.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ce.copy(I))}function Ne(I,de){let ie=c.get(de);ie===void 0&&(ie=new WeakMap,c.set(de,ie));let me=ie.get(I);me===void 0&&(me=t.getUniformBlockIndex(de,I.name),ie.set(I,me))}function Oe(I,de){const me=c.get(de).get(I);l.get(de)!==me&&(t.uniformBlockBinding(de,me,I.__bindingPointIndex),l.set(de,me))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},Z=null,ne={},h={},m=new WeakMap,x=[],E=null,g=!1,d=null,v=null,y=null,S=null,w=null,T=null,A=null,_=new Qe(0,0,0),C=0,L=!1,D=null,B=null,j=null,te=null,H=null,Xe.set(0,0,t.canvas.width,t.canvas.height),Ce.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Re,bindFramebuffer:ze,drawBuffers:Fe,useProgram:st,setBlending:We,setMaterial:ge,setFlipSided:et,setCullFace:ut,setLineWidth:mt,setPolygonOffset:Ot,setScissorTest:Et,activeTexture:gt,bindTexture:U,unbindTexture:Mn,compressedTexImage2D:at,compressedTexImage3D:R,texImage2D:ee,texImage3D:re,pixelStorei:Le,getParameter:he,updateUBOMapping:Ne,uniformBlockBinding:Oe,texStorage2D:ue,texStorage3D:fe,texSubImage2D:M,texSubImage3D:V,compressedTexSubImage2D:$,compressedTexSubImage3D:Q,scissor:xe,viewport:pe,reset:Ve}}function U3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap,f=new Set;let h;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,M){return x?new OffscreenCanvas(R,M):su("canvas")}function g(R,M,V){let $=1;const Q=at(R);if((Q.width>V||Q.height>V)&&($=V/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor($*Q.width),fe=Math.floor($*Q.height);h===void 0&&(h=E(ue,fe));const ee=M?E(ue,fe):h;return ee.width=ue,ee.height=fe,ee.getContext("2d").drawImage(R,0,0,ue,fe),ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+fe+")."),ee}else return"data"in R&&ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function d(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,M,V,$,Q,ue=!1){if(R!==null){if(t[R]!==void 0)return t[R];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;$&&(fe=e.get("EXT_texture_norm16"),fe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=M;if(M===t.RED&&(V===t.FLOAT&&(ee=t.R32F),V===t.HALF_FLOAT&&(ee=t.R16F),V===t.UNSIGNED_BYTE&&(ee=t.R8),V===t.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),V===t.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.R8UI),V===t.UNSIGNED_SHORT&&(ee=t.R16UI),V===t.UNSIGNED_INT&&(ee=t.R32UI),V===t.BYTE&&(ee=t.R8I),V===t.SHORT&&(ee=t.R16I),V===t.INT&&(ee=t.R32I)),M===t.RG&&(V===t.FLOAT&&(ee=t.RG32F),V===t.HALF_FLOAT&&(ee=t.RG16F),V===t.UNSIGNED_BYTE&&(ee=t.RG8),V===t.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),V===t.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RG8UI),V===t.UNSIGNED_SHORT&&(ee=t.RG16UI),V===t.UNSIGNED_INT&&(ee=t.RG32UI),V===t.BYTE&&(ee=t.RG8I),V===t.SHORT&&(ee=t.RG16I),V===t.INT&&(ee=t.RG32I)),M===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),V===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),V===t.UNSIGNED_INT&&(ee=t.RGB32UI),V===t.BYTE&&(ee=t.RGB8I),V===t.SHORT&&(ee=t.RGB16I),V===t.INT&&(ee=t.RGB32I)),M===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),V===t.UNSIGNED_INT&&(ee=t.RGBA32UI),V===t.BYTE&&(ee=t.RGBA8I),V===t.SHORT&&(ee=t.RGBA16I),V===t.INT&&(ee=t.RGBA32I)),M===t.RGB&&(V===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),V===t.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),M===t.RGBA){const re=ue?ru:Je.getTransfer(Q);V===t.FLOAT&&(ee=t.RGBA32F),V===t.HALF_FLOAT&&(ee=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ee=re===lt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),V===t.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(R,M){let V;return R?M===null||M===Ni||M===qa?V=t.DEPTH24_STENCIL8:M===Ci?V=t.DEPTH32F_STENCIL8:M===Xa&&(V=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ni||M===qa?V=t.DEPTH_COMPONENT24:M===Ci?V=t.DEPTH_COMPONENT32F:M===Xa&&(V=t.DEPTH_COMPONENT16),V}function T(R,M){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zt&&R.minFilter!==dn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&f.delete(M)}function _(R){const M=R.target;M.removeEventListener("dispose",_),D(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const V=R.source,$=m.get(V);if($){const Q=$[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(R),Object.keys($).length===0&&m.delete(V)}i.remove(R)}function L(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const V=R.source,$=m.get(V);delete $[M.__cacheKey],o.memory.textures--}function D(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Q=0;Q<M.__webglFramebuffer[$].length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[$][Q]);else t.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)t.deleteFramebuffer(M.__webglFramebuffer[$]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=R.textures;for(let $=0,Q=V.length;$<Q;$++){const ue=i.get(V[$]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(V[$])}i.remove(R)}let B=0;function j(){B=0}function te(){return B}function H(R){B=R}function J(){const R=B;return R>=r.maxTextures&&ke("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),B+=1,R}function W(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function O(R,M){const V=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const $=R.image;if($===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(V,R,M);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function K(R,M){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Re(V,R,M);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function Z(R,M){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Re(V,R,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function ne(R,M){const V=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){ze(V,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const le={[mh]:t.REPEAT,[Ki]:t.CLAMP_TO_EDGE,[gh]:t.MIRRORED_REPEAT},Be={[Zt]:t.NEAREST,[zb]:t.NEAREST_MIPMAP_NEAREST,[Pl]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[xd]:t.LINEAR_MIPMAP_NEAREST,[ms]:t.LINEAR_MIPMAP_LINEAR},Xe={[Gb]:t.NEVER,[$b]:t.ALWAYS,[Wb]:t.LESS,[gm]:t.LEQUAL,[jb]:t.EQUAL,[xm]:t.GEQUAL,[Xb]:t.GREATER,[qb]:t.NOTEQUAL};function Ce(R,M){if(M.type===Ci&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===dn||M.magFilter===xd||M.magFilter===Pl||M.magFilter===ms||M.minFilter===dn||M.minFilter===xd||M.minFilter===Pl||M.minFilter===ms)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,le[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,le[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,le[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Be[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Be[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zt||M.minFilter!==Pl&&M.minFilter!==ms||M.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function G(R,M){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const $=M.source;let Q=m.get($);Q===void 0&&(Q={},m.set($,Q));const ue=W(M);if(ue!==R.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[ue].usedTimes++;const fe=Q[R.__cacheKey];fe!==void 0&&(Q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&L(M)),R.__cacheKey=ue,R.__webglTexture=Q[ue].texture}return V}function oe(R,M,V){return Math.floor(Math.floor(R/V)/M)}function ae(R,M,V,$){const ue=R.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,V,$,M.data);else{ue.sort((Le,xe)=>Le.start-xe.start);let fe=0;for(let Le=1;Le<ue.length;Le++){const xe=ue[fe],pe=ue[Le],Ne=xe.start+xe.count,Oe=oe(pe.start,M.width,4),Ve=oe(xe.start,M.width,4);pe.start<=Ne+1&&Oe===Ve&&oe(pe.start+pe.count-1,M.width,4)===Oe?xe.count=Math.max(xe.count,pe.start+pe.count-xe.start):(++fe,ue[fe]=pe)}ue.length=fe+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Le=0,xe=ue.length;Le<xe;Le++){const pe=ue[Le],Ne=Math.floor(pe.start/4),Oe=Math.ceil(pe.count/4),Ve=Ne%M.width,I=Math.floor(Ne/M.width),de=Oe,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Ve,I,de,ie,V,$,M.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function Re(R,M,V){let $=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=t.TEXTURE_3D);const Q=G(R,M),ue=M.source;n.bindTexture($,R.__webglTexture,t.TEXTURE0+V);const fe=i.get(ue);if(ue.version!==fe.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ie=Je.getPrimaries(Je.workingColorSpace),me=M.colorSpace===Cr?null:Je.getPrimaries(M.colorSpace),Ee=M.colorSpace===Cr||ie===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let re=g(M.image,!1,r.maxTextureSize);re=Mn(M,re);const he=s.convert(M.format,M.colorSpace),Le=s.convert(M.type);let xe=S(M.internalFormat,he,Le,M.normalized,M.colorSpace,M.isVideoTexture);Ce($,M);let pe;const Ne=M.mipmaps,Oe=M.isVideoTexture!==!0,Ve=fe.__version===void 0||Q===!0,I=ue.dataReady,de=T(M,re);if(M.isDepthTexture)xe=w(M.format===gs,M.type),Ve&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,xe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,xe,re.width,re.height,0,he,Le,null));else if(M.isDataTexture)if(Ne.length>0){Oe&&Ve&&n.texStorage2D(t.TEXTURE_2D,de,xe,Ne[0].width,Ne[0].height);for(let ie=0,me=Ne.length;ie<me;ie++)pe=Ne[ie],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,he,Le,pe.data):n.texImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,he,Le,pe.data);M.generateMipmaps=!1}else Oe?(Ve&&n.texStorage2D(t.TEXTURE_2D,de,xe,re.width,re.height),I&&ae(M,re,he,Le)):n.texImage2D(t.TEXTURE_2D,0,xe,re.width,re.height,0,he,Le,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,xe,Ne[0].width,Ne[0].height,re.depth);for(let ie=0,me=Ne.length;ie<me;ie++)if(pe=Ne[ie],M.format!==hi)if(he!==null)if(Oe){if(I)if(M.layerUpdates.size>0){const Ee=nx(pe.width,pe.height,M.format,M.type);for(const se of M.layerUpdates){const Pe=pe.data.subarray(se*Ee/pe.data.BYTES_PER_ELEMENT,(se+1)*Ee/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,se,pe.width,pe.height,1,he,Pe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,re.depth,he,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,xe,pe.width,pe.height,re.depth,0,pe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,re.depth,he,Le,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,xe,pe.width,pe.height,re.depth,0,he,Le,pe.data)}else{Oe&&Ve&&n.texStorage2D(t.TEXTURE_2D,de,xe,Ne[0].width,Ne[0].height);for(let ie=0,me=Ne.length;ie<me;ie++)pe=Ne[ie],M.format!==hi?he!==null?Oe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,he,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,pe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,he,Le,pe.data):n.texImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,he,Le,pe.data)}else if(M.isDataArrayTexture)if(Oe){if(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,xe,re.width,re.height,re.depth),I)if(M.layerUpdates.size>0){const ie=nx(re.width,re.height,M.format,M.type);for(const me of M.layerUpdates){const Ee=re.data.subarray(me*ie/re.data.BYTES_PER_ELEMENT,(me+1)*ie/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,re.width,re.height,1,he,Le,Ee)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,Le,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,he,Le,re.data);else if(M.isData3DTexture)Oe?(Ve&&n.texStorage3D(t.TEXTURE_3D,de,xe,re.width,re.height,re.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,Le,re.data)):n.texImage3D(t.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,he,Le,re.data);else if(M.isFramebufferTexture){if(Ve)if(Oe)n.texStorage2D(t.TEXTURE_2D,de,xe,re.width,re.height);else{let ie=re.width,me=re.height;for(let Ee=0;Ee<de;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,xe,ie,me,0,he,Le,null),ie>>=1,me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),re.parentNode!==ie){ie.appendChild(re),f.add(M),ie.onpaint=me=>{const Ee=me.changedElements;for(const se of f)Ee.includes(se.image)&&(se.needsUpdate=!0)},ie.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,re);else{const Ee=t.RGBA,se=t.RGBA,Pe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ee,se,Pe,re)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Oe&&Ve){const ie=at(Ne[0]);n.texStorage2D(t.TEXTURE_2D,de,xe,ie.width,ie.height)}for(let ie=0,me=Ne.length;ie<me;ie++)pe=Ne[ie],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he,Le,pe):n.texImage2D(t.TEXTURE_2D,ie,xe,he,Le,pe);M.generateMipmaps=!1}else if(Oe){if(Ve){const ie=at(re);n.texStorage2D(t.TEXTURE_2D,de,xe,ie.width,ie.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Le,re)}else n.texImage2D(t.TEXTURE_2D,0,xe,he,Le,re);d(M)&&v($),fe.__version=ue.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ze(R,M,V){if(M.image.length!==6)return;const $=G(R,M),Q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const ue=i.get(Q);if(Q.version!==ue.__version||$===!0){n.activeTexture(t.TEXTURE0+V);const fe=Je.getPrimaries(Je.workingColorSpace),ee=M.colorSpace===Cr?null:Je.getPrimaries(M.colorSpace),re=M.colorSpace===Cr||fe===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const he=M.isCompressedTexture||M.image[0].isCompressedTexture,Le=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let se=0;se<6;se++)!he&&!Le?xe[se]=g(M.image[se],!0,r.maxCubemapSize):xe[se]=Le?M.image[se].image:M.image[se],xe[se]=Mn(M,xe[se]);const pe=xe[0],Ne=s.convert(M.format,M.colorSpace),Oe=s.convert(M.type),Ve=S(M.internalFormat,Ne,Oe,M.normalized,M.colorSpace),I=M.isVideoTexture!==!0,de=ue.__version===void 0||$===!0,ie=Q.dataReady;let me=T(M,pe);Ce(t.TEXTURE_CUBE_MAP,M);let Ee;if(he){I&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,pe.width,pe.height);for(let se=0;se<6;se++){Ee=xe[se].mipmaps;for(let Pe=0;Pe<Ee.length;Pe++){const be=Ee[Pe];M.format!==hi?Ne!==null?I?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,be.width,be.height,Ne,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Ve,be.width,be.height,0,be.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,be.width,be.height,Ne,Oe,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Ve,be.width,be.height,0,Ne,Oe,be.data)}}}else{if(Ee=M.mipmaps,I&&de){Ee.length>0&&me++;const se=at(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,se.width,se.height)}for(let se=0;se<6;se++)if(Le){I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe[se].width,xe[se].height,Ne,Oe,xe[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,xe[se].width,xe[se].height,0,Ne,Oe,xe[se].data);for(let Pe=0;Pe<Ee.length;Pe++){const Rt=Ee[Pe].image[se].image;I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Rt.width,Rt.height,Ne,Oe,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Ve,Rt.width,Rt.height,0,Ne,Oe,Rt.data)}}else{I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ne,Oe,xe[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,Ne,Oe,xe[se]);for(let Pe=0;Pe<Ee.length;Pe++){const be=Ee[Pe];I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Ne,Oe,be.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Ve,Ne,Oe,be.image[se])}}}d(M)&&v(t.TEXTURE_CUBE_MAP),ue.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Fe(R,M,V,$,Q,ue){const fe=s.convert(V.format,V.colorSpace),ee=s.convert(V.type),re=S(V.internalFormat,fe,ee,V.normalized,V.colorSpace),he=i.get(M),Le=i.get(V);if(Le.__renderTarget=M,!he.__hasExternalTextures){const xe=Math.max(1,M.width>>ue),pe=Math.max(1,M.height>>ue);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ue,re,xe,pe,M.depth,0,fe,ee,null):n.texImage2D(Q,ue,re,xe,pe,0,fe,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),gt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,Q,Le.__webglTexture,0,Et(M)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,Q,Le.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function st(R,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const $=M.depthTexture,Q=$&&$.isDepthTexture?$.type:null,ue=w(M.stencilBuffer,Q),fe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;gt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Et(M),ue,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Et(M),ue,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ue,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,R)}else{const $=M.textures;for(let Q=0;Q<$.length;Q++){const ue=$[Q],fe=s.convert(ue.format,ue.colorSpace),ee=s.convert(ue.type),re=S(ue.internalFormat,fe,ee,ue.normalized,ue.colorSpace);gt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Et(M),re,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Et(M),re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(R,M,V){const $=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,M.depthTexture);const he=s.convert(M.depthTexture.format),Le=s.convert(M.depthTexture.type);let xe;M.depthTexture.format===sr?xe=t.DEPTH_COMPONENT24:M.depthTexture.format===gs&&(xe=t.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,xe,M.width,M.height,0,he,Le,null)}}else O(M.depthTexture,0);const ue=Q.__webglTexture,fe=Et(M),ee=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,re=M.depthTexture.format===gs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===sr)gt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ee,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,re,ee,ue,0);else if(M.depthTexture.format===gs)gt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ee,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,re,ee,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(R){const M=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let $=0;$<6;$++)qe(M.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?qe(M.__webglFramebuffer[0],R,0):qe(M.__webglFramebuffer,R,0)}else if(V){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=t.createRenderbuffer(),st(M.__webglDepthbuffer[$],R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ue)}}else{const $=R.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),st(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(R,M,V){const $=i.get(R);M!==void 0&&Fe($.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&ot(R)}function ge(R){const M=R.texture,V=i.get(R),$=i.get(M);R.addEventListener("dispose",_);const Q=R.textures,ue=R.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=M.version,o.memory.textures++),ue){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let re=0;re<M.mipmaps.length;re++)V.__webglFramebuffer[ee][re]=t.createFramebuffer()}else V.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)V.__webglFramebuffer[ee]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(fe)for(let ee=0,re=Q.length;ee<re;ee++){const he=i.get(Q[ee]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&gt(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const re=Q[ee];V.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);const he=s.convert(re.format,re.colorSpace),Le=s.convert(re.type),xe=S(re.internalFormat,he,Le,re.normalized,re.colorSpace,R.isXRRenderTarget===!0),pe=Et(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),st(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)Fe(V.__webglFramebuffer[ee][re],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,re);else Fe(V.__webglFramebuffer[ee],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);d(M)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ee=0,re=Q.length;ee<re;ee++){const he=Q[ee],Le=i.get(he);let xe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,Le.__webglTexture),Ce(xe,he),Fe(V.__webglFramebuffer,R,he,t.COLOR_ATTACHMENT0+ee,xe,0),d(he)&&v(xe)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,$.__webglTexture),Ce(ee,M),M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)Fe(V.__webglFramebuffer[re],R,M,t.COLOR_ATTACHMENT0,ee,re);else Fe(V.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ee,0);d(M)&&v(ee),n.unbindTexture()}R.depthBuffer&&ot(R)}function et(R){const M=R.textures;for(let V=0,$=M.length;V<$;V++){const Q=M[V];if(d(Q)){const ue=y(R),fe=i.get(Q).__webglTexture;n.bindTexture(ue,fe),v(ue),n.unbindTexture()}}}const ut=[],mt=[];function Ot(R){if(R.samples>0){if(gt(R)===!1){const M=R.textures,V=R.width,$=R.height;let Q=t.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),ee=M.length>1;if(ee)for(let he=0;he<M.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const re=R.texture.mipmaps;re&&re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<M.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const Le=i.get(M[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,V,$,0,0,V,$,Q,t.NEAREST),l===!0&&(ut.length=0,mt.length=0,ut.push(t.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ut.push(ue),mt.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,mt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let he=0;he<M.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const Le=i.get(M[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Et(R){return Math.min(r.maxSamples,R.samples)}function gt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function U(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Mn(R,M){const V=R.colorSpace,$=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==iu&&V!==Cr&&(Je.getTransfer(V)===lt?($!==hi||Q!==zn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",V)),M}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=j,this.getTextureUnits=te,this.setTextureUnits=H,this.setTexture2D=O,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=ne,this.rebindTextures=We,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function O3(t,e){function n(i,r=Cr){let s;const o=Je.getTransfer(r);if(i===zn)return t.UNSIGNED_BYTE;if(i===dm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===fm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===B_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===z_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===O_)return t.BYTE;if(i===k_)return t.SHORT;if(i===Xa)return t.UNSIGNED_SHORT;if(i===um)return t.INT;if(i===Ni)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===rr)return t.HALF_FLOAT;if(i===H_)return t.ALPHA;if(i===V_)return t.RGB;if(i===hi)return t.RGBA;if(i===sr)return t.DEPTH_COMPONENT;if(i===gs)return t.DEPTH_STENCIL;if(i===G_)return t.RED;if(i===hm)return t.RED_INTEGER;if(i===Cs)return t.RG;if(i===pm)return t.RG_INTEGER;if(i===mm)return t.RGBA_INTEGER;if(i===Ec||i===Mc||i===wc||i===Tc)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xh||i===vh||i===yh||i===_h)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_h)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sh||i===Eh||i===Mh||i===wh||i===Th||i===tu||i===bh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sh||i===Eh)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===wh)return s.COMPRESSED_R11_EAC;if(i===Th)return s.COMPRESSED_SIGNED_R11_EAC;if(i===tu)return s.COMPRESSED_RG11_EAC;if(i===bh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ah||i===Ch||i===Rh||i===Ph||i===Lh||i===Dh||i===Ih||i===Nh||i===Fh||i===Uh||i===Oh||i===kh||i===Bh||i===zh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ah)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ch)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ph)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ih)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hh||i===Vh||i===Gh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hh)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wh||i===jh||i===nu||i===Xh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const k3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B3=`
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

}`;class z3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Z_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fi({vertexShader:k3,fragmentShader:B3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bn(new Iu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H3 extends Ds{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,x=null;const E=typeof XRWebGLBinding<"u",g=new z3,d={},v=n.getContextAttributes();let y=null,S=null;const w=[],T=[],A=new Ue;let _=null;const C=new Bn;C.viewport=new bt;const L=new Bn;L.viewport=new bt;const D=[C,L],B=new JA;let j=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let oe=w[G];return oe===void 0&&(oe=new Td,w[G]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(G){let oe=w[G];return oe===void 0&&(oe=new Td,w[G]=oe),oe.getGripSpace()},this.getHand=function(G){let oe=w[G];return oe===void 0&&(oe=new Td,w[G]=oe),oe.getHandSpace()};function H(G){const oe=T.indexOf(G.inputSource);if(oe===-1)return;const ae=w[oe];ae!==void 0&&(ae.update(G.inputSource,G.frame,c||o),ae.dispatchEvent({type:G.type,data:G.inputSource}))}function J(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",W);for(let G=0;G<w.length;G++){const oe=T[G];oe!==null&&(T[G]=null,w[G].disconnect(oe))}j=null,te=null,g.reset();for(const G in d)delete d[G];e.setRenderTarget(y),m=null,h=null,f=null,r=null,S=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",J),r.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Re=null,ze=null;v.depth&&(ze=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=v.stencil?gs:sr,Re=v.stencil?qa:Ni);const Fe={colorFormat:n.RGBA8,depthFormat:ze,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Ii(h.textureWidth,h.textureHeight,{format:hi,type:zn,depthTexture:new No(h.textureWidth,h.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Ii(m.framebufferWidth,m.framebufferHeight,{format:hi,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(G){for(let oe=0;oe<G.removed.length;oe++){const ae=G.removed[oe],Re=T.indexOf(ae);Re>=0&&(T[Re]=null,w[Re].disconnect(ae))}for(let oe=0;oe<G.added.length;oe++){const ae=G.added[oe];let Re=T.indexOf(ae);if(Re===-1){for(let Fe=0;Fe<w.length;Fe++)if(Fe>=T.length){T.push(ae),Re=Fe;break}else if(T[Fe]===null){T[Fe]=ae,Re=Fe;break}if(Re===-1)break}const ze=w[Re];ze&&ze.connect(ae)}}const O=new N,K=new N;function Z(G,oe,ae){O.setFromMatrixPosition(oe.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const Re=O.distanceTo(K),ze=oe.projectionMatrix.elements,Fe=ae.projectionMatrix.elements,st=ze[14]/(ze[10]-1),qe=ze[14]/(ze[10]+1),ot=(ze[9]+1)/ze[5],We=(ze[9]-1)/ze[5],ge=(ze[8]-1)/ze[0],et=(Fe[8]+1)/Fe[0],ut=st*ge,mt=st*et,Ot=Re/(-ge+et),Et=Ot*-ge;if(oe.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Et),G.translateZ(Ot),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ze[10]===-1)G.projectionMatrix.copy(oe.projectionMatrix),G.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const gt=st+Ot,U=qe+Ot,Mn=ut-Et,at=mt+(Re-Et),R=ot*qe/U*gt,M=We*qe/U*gt;G.projectionMatrix.makePerspective(Mn,at,R,M,gt,U),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ne(G,oe){oe===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(oe.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let oe=G.near,ae=G.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),B.near=L.near=C.near=oe,B.far=L.far=C.far=ae,(j!==B.near||te!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),j=B.near,te=B.far),B.layers.mask=G.layers.mask|6,C.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const Re=G.parent,ze=B.cameras;ne(B,Re);for(let Fe=0;Fe<ze.length;Fe++)ne(ze[Fe],Re);ze.length===2?Z(B,C,L):B.projectionMatrix.copy(C.projectionMatrix),le(G,B,Re)};function le(G,oe,ae){ae===null?G.matrix.copy(oe.matrixWorld):(G.matrix.copy(ae.matrixWorld),G.matrix.invert(),G.matrix.multiply(oe.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(oe.projectionMatrix),G.projectionMatrixInverse.copy(oe.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=$h*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(G){return d[G]};let Be=null;function Xe(G,oe){if(u=oe.getViewerPose(c||o),x=oe,u!==null){const ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Re=!1;ae.length!==B.cameras.length&&(B.cameras.length=0,Re=!0);for(let qe=0;qe<ae.length;qe++){const ot=ae[qe];let We=null;if(m!==null)We=m.getViewport(ot);else{const et=f.getViewSubImage(h,ot);We=et.viewport,qe===0&&(e.setRenderTargetTextures(S,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(S))}let ge=D[qe];ge===void 0&&(ge=new Bn,ge.layers.enable(qe),ge.viewport=new bt,D[qe]=ge),ge.matrix.fromArray(ot.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(ot.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(We.x,We.y,We.width,We.height),qe===0&&(B.matrix.copy(ge.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Re===!0&&B.cameras.push(ge)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){f=i.getBinding();const qe=f.getDepthInformation(ae[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,r.renderState)}if(ze&&ze.includes("camera-access")&&E){e.state.unbindTexture(),f=i.getBinding();for(let qe=0;qe<ae.length;qe++){const ot=ae[qe].camera;if(ot){let We=d[ot];We||(We=new Z_,d[ot]=We);const ge=f.getCameraImage(ot);We.sourceTexture=ge}}}}for(let ae=0;ae<w.length;ae++){const Re=T[ae],ze=w[ae];Re!==null&&ze!==void 0&&ze.update(Re,oe,c||o)}Be&&Be(G,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),x=null}const Ce=new oS;Ce.setAnimationLoop(Xe),this.setAnimationLoop=function(G){Be=G},this.dispose=function(){}}}const V3=new wt,hS=new He;hS.set(-1,0,0,0,1,0,0,0,1);function G3(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,nS(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,y,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&m(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),E(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,v,y):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Dn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Dn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),y=v.envMap,S=v.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(V3.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(hS),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=y*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function E(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W3(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const T=w.program;i.uniformBlockBinding(S,T)}function c(S,w){let T=r[S.id];T===void 0&&(g(S),T=u(S),r[S.id]=T,S.addEventListener("dispose",v));const A=w.program;i.updateUBOMapping(S,A);const _=e.render.frame;s[S.id]!==_&&(h(S),s[S.id]=_)}function u(S){const w=f();S.__bindingPointIndex=w;const T=t.createBuffer(),A=S.__size,_=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,A,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,T),T}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const w=r[S.id],T=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let _=0,C=T.length;_<C;_++){const L=T[_];if(Array.isArray(L))for(let D=0,B=L.length;D<B;D++)m(L[D],_,D,A);else m(L,_,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,w,T,A){if(E(S,w,T,A)===!0){const _=S.__offset,C=S.value;if(Array.isArray(C)){let L=0;for(let D=0;D<C.length;D++){const B=C[D],j=d(B);x(B,S.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(C,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,S.__data)}}function x(S,w,T){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,T)}function E(S,w,T,A){const _=S.value,C=w+"_"+T;if(A[C]===void 0)return typeof _=="number"||typeof _=="boolean"?A[C]=_:ArrayBuffer.isView(_)?A[C]=_.slice():A[C]=_.clone(),!0;{const L=A[C];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return A[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function g(S){const w=S.uniforms;let T=0;const A=16;for(let C=0,L=w.length;C<L;C++){const D=Array.isArray(w[C])?w[C]:[w[C]];for(let B=0,j=D.length;B<j;B++){const te=D[B],H=Array.isArray(te.value)?te.value:[te.value];for(let J=0,W=H.length;J<W;J++){const O=H[J],K=d(O),Z=T%A,ne=Z%K.boundary,le=Z+ne;T+=ne,le!==0&&A-le<K.storage&&(T+=A-le),te.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=T,T+=K.storage}}}const _=T%A;return _>0&&(T+=A-_),S.__size=T,S.__cache={},this}function d(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",S),w}function v(S){const w=S.target;w.removeEventListener("dispose",v);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function y(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}const j3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function X3(){return Mi===null&&(Mi=new yA(j3,16,16,Cs,rr),Mi.name="DFG_LUT",Mi.minFilter=dn,Mi.magFilter=dn,Mi.wrapS=Ki,Mi.wrapT=Ki,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class q3{constructor(e={}){const{canvas:n=Kb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=zn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const E=m,g=new Set([mm,pm,hm]),d=new Set([zn,Ni,Xa,qa,dm,fm]),v=new Uint32Array(4),y=new Int32Array(4),S=new N;let w=null,T=null;const A=[],_=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,B=null,j=null,te=null,H=null;this._outputColorSpace=Yn;let J=0,W=0,O=null,K=-1,Z=null;const ne=new bt,le=new bt;let Be=null;const Xe=new Qe(0);let Ce=0,G=n.width,oe=n.height,ae=1,Re=null,ze=null;const Fe=new bt(0,0,G,oe),st=new bt(0,0,G,oe);let qe=!1;const ot=new _m;let We=!1,ge=!1;const et=new wt,ut=new N,mt=new bt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function gt(){return O===null?ae:1}let U=i;function Mn(b,k){return n.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cm}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",xt,!1),n.addEventListener("webglcontextcreationerror",vi,!1),U===null){const k="webgl2";if(U=Mn(k,b),U===null)throw Mn(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw nt("WebGLRenderer: "+b.message),b}let at,R,M,V,$,Q,ue,fe,ee,re,he,Le,xe,pe,Ne,Oe,Ve,I,de,ie,me,Ee,se;function Pe(){at=new X2(U),at.init(),me=new O3(U,at),R=new k2(U,at,e,me),M=new F3(U,at),R.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),j=U.createFramebuffer(),te=U.createFramebuffer(),H=U.createFramebuffer(),V=new Y2(U),$=new S3,Q=new U3(U,at,M,$,R,me,V),ue=new j2(L),fe=new QA(U),Ee=new U2(U,fe),ee=new q2(U,fe,V,Ee),re=new J2(U,ee,fe,Ee,V),I=new K2(U,R,Q),Ne=new B2($),he=new _3(L,ue,at,R,Ee,Ne),Le=new G3(L,$),xe=new M3,pe=new R3(at),Ve=new F2(L,ue,M,re,x,l),Oe=new N3(L,re,R),se=new W3(U,V,R,M),de=new O2(U,at,V),ie=new $2(U,at,V),V.programs=he.programs,L.capabilities=R,L.extensions=at,L.properties=$,L.renderLists=xe,L.shadowMap=Oe,L.state=M,L.info=V}Pe(),E!==zn&&(C=new Q2(E,n.width,n.height,a,r,s));const be=new H3(L,U);this.xr=be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=at.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=at.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(b){b!==void 0&&(ae=b,this.setSize(G,oe,!1))},this.getSize=function(b){return b.set(G,oe)},this.setSize=function(b,k,Y=!0){if(be.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,oe=k,n.width=Math.floor(b*ae),n.height=Math.floor(k*ae),Y===!0&&(n.style.width=b+"px",n.style.height=k+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(G*ae,oe*ae).floor()},this.setDrawingBufferSize=function(b,k,Y){G=b,oe=k,ae=Y,n.width=Math.floor(b*Y),n.height=Math.floor(k*Y),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(E===zn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(Fe)},this.setViewport=function(b,k,Y,X){b.isVector4?Fe.set(b.x,b.y,b.z,b.w):Fe.set(b,k,Y,X),M.viewport(ne.copy(Fe).multiplyScalar(ae).round())},this.getScissor=function(b){return b.copy(st)},this.setScissor=function(b,k,Y,X){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,k,Y,X),M.scissor(le.copy(st).multiplyScalar(ae).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(b){M.setScissorTest(qe=b)},this.setOpaqueSort=function(b){Re=b},this.setTransparentSort=function(b){ze=b},this.getClearColor=function(b){return b.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,Y=!0){let X=0;if(b){let q=!1;if(O!==null){const Se=O.texture.format;q=g.has(Se)}if(q){const Se=O.texture.type,we=d.has(Se),_e=Ve.getClearColor(),Ae=Ve.getClearAlpha(),De=_e.r,Ge=_e.g,$e=_e.b;we?(v[0]=De,v[1]=Ge,v[2]=$e,v[3]=Ae,U.clearBufferuiv(U.COLOR,0,v)):(y[0]=De,y[1]=Ge,y[2]=$e,y[3]=Ae,U.clearBufferiv(U.COLOR,0,y))}else X|=U.COLOR_BUFFER_BIT}k&&(X|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",xt,!1),n.removeEventListener("webglcontextcreationerror",vi,!1),Ve.dispose(),xe.dispose(),pe.dispose(),$.dispose(),ue.dispose(),re.dispose(),Ee.dispose(),se.dispose(),he.dispose(),be.dispose(),be.removeEventListener("sessionstart",Lm),be.removeEventListener("sessionend",Dm),Kr.stop()};function Rt(b){b.preventDefault(),C0("WebGLRenderer: Context Lost."),D=!0}function xt(){C0("WebGLRenderer: Context Restored."),D=!1;const b=V.autoReset,k=Oe.enabled,Y=Oe.autoUpdate,X=Oe.needsUpdate,q=Oe.type;Pe(),V.autoReset=b,Oe.enabled=k,Oe.autoUpdate=Y,Oe.needsUpdate=X,Oe.type=q}function vi(b){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function yi(b){const k=b.target;k.removeEventListener("dispose",yi),bS(k)}function bS(b){AS(b),$.remove(b)}function AS(b){const k=$.get(b).programs;k!==void 0&&(k.forEach(function(Y){he.releaseProgram(Y)}),b.isShaderMaterial&&he.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,Y,X,q,Se){k===null&&(k=Ot);const we=q.isMesh&&q.matrixWorld.determinantAffine()<0,_e=PS(b,k,Y,X,q);M.setMaterial(X,we);let Ae=Y.index,De=1;if(X.wireframe===!0){if(Ae=ee.getWireframeAttribute(Y),Ae===void 0)return;De=2}const Ge=Y.drawRange,$e=Y.attributes.position;let Ie=Ge.start*De,dt=(Ge.start+Ge.count)*De;Se!==null&&(Ie=Math.max(Ie,Se.start*De),dt=Math.min(dt,(Se.start+Se.count)*De)),Ae!==null?(Ie=Math.max(Ie,0),dt=Math.min(dt,Ae.count)):$e!=null&&(Ie=Math.max(Ie,0),dt=Math.min(dt,$e.count));const Dt=dt-Ie;if(Dt<0||Dt===1/0)return;Ee.setup(q,X,_e,Y,Ae);let Pt,ft=de;if(Ae!==null&&(Pt=fe.get(Ae),ft=ie,ft.setIndex(Pt)),q.isMesh)X.wireframe===!0?(M.setLineWidth(X.wireframeLinewidth*gt()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(q.isLine){let tn=X.linewidth;tn===void 0&&(tn=1),M.setLineWidth(tn*gt()),q.isLineSegments?ft.setMode(U.LINES):q.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else q.isPoints?ft.setMode(U.POINTS):q.isSprite&&ft.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(at.get("WEBGL_multi_draw"))ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const tn=q._multiDrawStarts,Me=q._multiDrawCounts,Nn=q._multiDrawCount,tt=Ae?fe.get(Ae).bytesPerElement:1,Xn=$.get(X).currentProgram.getUniforms();for(let _i=0;_i<Nn;_i++)Xn.setValue(U,"_gl_DrawID",_i),ft.render(tn[_i]/tt,Me[_i])}else if(q.isInstancedMesh)ft.renderInstances(Ie,Dt,q.count);else if(Y.isInstancedBufferGeometry){const tn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Me=Math.min(Y.instanceCount,tn);ft.renderInstances(Ie,Dt,Me)}else ft.render(Ie,Dt)};function Pm(b,k,Y){b.transparent===!0&&b.side===Xi&&b.forceSinglePass===!1?(b.side=Dn,b.needsUpdate=!0,ul(b,k,Y),b.side=Wr,b.needsUpdate=!0,ul(b,k,Y),b.side=Xi):ul(b,k,Y)}this.compile=function(b,k,Y=null){Y===null&&(Y=b),T=pe.get(Y),T.init(k),_.push(T),Y.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),b!==Y&&b.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),T.setupLights();const X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Se=q.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const _e=Se[we];Pm(_e,Y,q),X.add(_e)}else Pm(Se,Y,q),X.add(Se)}),T=_.pop(),X},this.compileAsync=function(b,k,Y=null){const X=this.compile(b,k,Y);return new Promise(q=>{function Se(){if(X.forEach(function(we){$.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){q(b);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Uu=null;function CS(b){Uu&&Uu(b)}function Lm(){Kr.stop()}function Dm(){Kr.start()}const Kr=new oS;Kr.setAnimationLoop(CS),typeof self<"u"&&Kr.setContext(self),this.setAnimationLoop=function(b){Uu=b,be.setAnimationLoop(b),b===null?Kr.stop():Kr.start()},be.addEventListener("sessionstart",Lm),be.addEventListener("sessionend",Dm),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(b,k);const Y=be.enabled===!0&&be.isPresenting===!0,X=C!==null&&(O===null||Y)&&C.begin(L,O);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(k),k=be.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,k,O),T=pe.get(b,_.length),T.init(k),T.state.textureUnits=Q.getTextureUnits(),_.push(T),et.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ot.setFromProjectionMatrix(et,Ri,k.reversedDepth),ge=this.localClippingEnabled,We=Ne.init(this.clippingPlanes,ge),w=xe.get(b,A.length),w.init(),A.push(w),be.enabled===!0&&be.isPresenting===!0){const we=L.xr.getDepthSensingMesh();we!==null&&Ou(we,k,-1/0,L.sortObjects)}Ou(b,k,0,L.sortObjects),w.finish(),L.sortObjects===!0&&w.sort(Re,ze,k.reversedDepth),Et=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Et&&Ve.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&Ne.beginShadows();const q=T.state.shadowsArray;if(Oe.render(q,b,k),We===!0&&Ne.endShadows(),(X&&C.hasRenderPass())===!1){const we=w.opaque,_e=w.transmissive;if(T.setupLights(),k.isArrayCamera){const Ae=k.cameras;if(_e.length>0)for(let De=0,Ge=Ae.length;De<Ge;De++){const $e=Ae[De];Nm(we,_e,b,$e)}Et&&Ve.render(b);for(let De=0,Ge=Ae.length;De<Ge;De++){const $e=Ae[De];Im(w,b,$e,$e.viewport)}}else _e.length>0&&Nm(we,_e,b,k),Et&&Ve.render(b),Im(w,b,k)}O!==null&&W===0&&(Q.updateMultisampleRenderTarget(O),Q.updateRenderTargetMipmap(O)),X&&C.end(L),b.isScene===!0&&b.onAfterRender(L,b,k),Ee.resetDefaultState(),K=-1,Z=null,_.pop(),_.length>0?(T=_[_.length-1],Q.setTextureUnits(T.state.textureUnits),We===!0&&Ne.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,B!==null&&B.renderEnd()};function Ou(b,k,Y,X){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ot.intersectsSprite(b)){X&&mt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(et);const we=re.update(b),_e=b.material;_e.visible&&w.push(b,we,_e,Y,mt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ot.intersectsObject(b))){const we=re.update(b),_e=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),mt.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),mt.copy(we.boundingSphere.center)),mt.applyMatrix4(b.matrixWorld).applyMatrix4(et)),Array.isArray(_e)){const Ae=we.groups;for(let De=0,Ge=Ae.length;De<Ge;De++){const $e=Ae[De],Ie=_e[$e.materialIndex];Ie&&Ie.visible&&w.push(b,we,Ie,Y,mt.z,$e)}}else _e.visible&&w.push(b,we,_e,Y,mt.z,null)}}const Se=b.children;for(let we=0,_e=Se.length;we<_e;we++)Ou(Se[we],k,Y,X)}function Im(b,k,Y,X){const{opaque:q,transmissive:Se,transparent:we}=b;T.setupLightsView(Y),We===!0&&Ne.setGlobalState(L.clippingPlanes,Y),X&&M.viewport(ne.copy(X)),q.length>0&&cl(q,k,Y),Se.length>0&&cl(Se,k,Y),we.length>0&&cl(we,k,Y),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Nm(b,k,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){const Ie=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Ii(1,1,{generateMipmaps:!0,type:Ie?rr:zn,minFilter:ms,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const Se=T.state.transmissionRenderTarget[X.id],we=X.viewport||ne;Se.setSize(we.z*L.transmissionResolutionScale,we.w*L.transmissionResolutionScale);const _e=L.getRenderTarget(),Ae=L.getActiveCubeFace(),De=L.getActiveMipmapLevel();L.setRenderTarget(Se),L.getClearColor(Xe),Ce=L.getClearAlpha(),Ce<1&&L.setClearColor(16777215,.5),L.clear(),Et&&Ve.render(Y);const Ge=L.toneMapping;L.toneMapping=Di;const $e=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),We===!0&&Ne.setGlobalState(L.clippingPlanes,X),cl(b,Y,X),Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let dt=0,Dt=k.length;dt<Dt;dt++){const Pt=k[dt],{object:ft,geometry:tn,material:Me,group:Nn}=Pt;if(Me.side===Xi&&ft.layers.test(X.layers)){const tt=Me.side;Me.side=Dn,Me.needsUpdate=!0,Fm(ft,Y,X,tn,Me,Nn),Me.side=tt,Me.needsUpdate=!0,Ie=!0}}Ie===!0&&(Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se))}L.setRenderTarget(_e,Ae,De),L.setClearColor(Xe,Ce),$e!==void 0&&(X.viewport=$e),L.toneMapping=Ge}function cl(b,k,Y){const X=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Se=b.length;q<Se;q++){const we=b[q],{object:_e,geometry:Ae,group:De}=we;let Ge=we.material;Ge.allowOverride===!0&&X!==null&&(Ge=X),_e.layers.test(Y.layers)&&Fm(_e,k,Y,Ae,Ge,De)}}function Fm(b,k,Y,X,q,Se){b.onBeforeRender(L,k,Y,X,q,Se),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(L,k,Y,X,b,Se),q.transparent===!0&&q.side===Xi&&q.forceSinglePass===!1?(q.side=Dn,q.needsUpdate=!0,L.renderBufferDirect(Y,k,X,q,b,Se),q.side=Wr,q.needsUpdate=!0,L.renderBufferDirect(Y,k,X,q,b,Se),q.side=Xi):L.renderBufferDirect(Y,k,X,q,b,Se),b.onAfterRender(L,k,Y,X,q,Se)}function ul(b,k,Y){k.isScene!==!0&&(k=Ot);const X=$.get(b),q=T.state.lights,Se=T.state.shadowsArray,we=q.state.version,_e=he.getParameters(b,q.state,Se,k,Y,T.state.lightProbeGridArray),Ae=he.getProgramCacheKey(_e);let De=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,X.fog=k.fog;const Ge=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=ue.get(b.envMap||X.environment,Ge),X.envMapRotation=X.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",yi),De=new Map,X.programs=De);let $e=De.get(Ae);if($e!==void 0){if(X.currentProgram===$e&&X.lightsStateVersion===we)return Om(b,_e),$e}else _e.uniforms=he.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,Y,_e),b.onBeforeCompile(_e,L),$e=he.acquireProgram(_e,Ae),De.set(Ae,$e),X.uniforms=_e.uniforms;const Ie=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=Ne.uniform),Om(b,_e),X.needsLights=DS(b),X.lightsStateVersion=we,X.needsLights&&(Ie.ambientLightColor.value=q.state.ambient,Ie.lightProbe.value=q.state.probe,Ie.directionalLights.value=q.state.directional,Ie.directionalLightShadows.value=q.state.directionalShadow,Ie.spotLights.value=q.state.spot,Ie.spotLightShadows.value=q.state.spotShadow,Ie.rectAreaLights.value=q.state.rectArea,Ie.ltc_1.value=q.state.rectAreaLTC1,Ie.ltc_2.value=q.state.rectAreaLTC2,Ie.pointLights.value=q.state.point,Ie.pointLightShadows.value=q.state.pointShadow,Ie.hemisphereLights.value=q.state.hemi,Ie.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ie.spotLightMatrix.value=q.state.spotLightMatrix,Ie.spotLightMap.value=q.state.spotLightMap,Ie.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=$e,X.uniformsList=null,$e}function Um(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=bc.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Om(b,k){const Y=$.get(b);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function RS(b,k){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(k.matrixWorld);for(let Y=0,X=b.length;Y<X;Y++){const q=b[Y];if(q.texture!==null&&q.boundingBox.containsPoint(S))return q}return null}function PS(b,k,Y,X,q){k.isScene!==!0&&(k=Ot),Q.resetTextureUnits();const Se=k.fog,we=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?k.environment:null,_e=O===null?L.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Je.workingColorSpace,Ae=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,De=ue.get(X.envMap||we,Ae),Ge=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$e=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!Y.morphAttributes.position,dt=!!Y.morphAttributes.normal,Dt=!!Y.morphAttributes.color;let Pt=Di;X.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Pt=L.toneMapping);const ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,tn=ft!==void 0?ft.length:0,Me=$.get(X),Nn=T.state.lights;if(We===!0&&(ge===!0||b!==Z)){const vt=b===Z&&X.id===K;Ne.setState(X,b,vt)}let tt=!1;X.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Nn.state.version||Me.outputColorSpace!==_e||q.isBatchedMesh&&Me.batching===!1||!q.isBatchedMesh&&Me.batching===!0||q.isBatchedMesh&&Me.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Me.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Me.instancing===!1||!q.isInstancedMesh&&Me.instancing===!0||q.isSkinnedMesh&&Me.skinning===!1||!q.isSkinnedMesh&&Me.skinning===!0||q.isInstancedMesh&&Me.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Me.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Me.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Me.instancingMorph===!1&&q.morphTexture!==null||Me.envMap!==De||X.fog===!0&&Me.fog!==Se||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ne.numPlanes||Me.numIntersection!==Ne.numIntersection)||Me.vertexAlphas!==Ge||Me.vertexTangents!==$e||Me.morphTargets!==Ie||Me.morphNormals!==dt||Me.morphColors!==Dt||Me.toneMapping!==Pt||Me.morphTargetsCount!==tn||!!Me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Me.__version=X.version);let Xn=Me.currentProgram;tt===!0&&(Xn=ul(X,k,q),B&&X.isNodeMaterial&&B.onUpdateProgram(X,Xn,Me));let _i=!1,dr=!1,Ns=!1;const ht=Xn.getUniforms(),It=Me.uniforms;if(M.useProgram(Xn.program)&&(_i=!0,dr=!0,Ns=!0),X.id!==K&&(K=X.id,dr=!0),Me.needsLights){const vt=RS(T.state.lightProbeGridArray,q);Me.lightProbeGrid!==vt&&(Me.lightProbeGrid=vt,dr=!0)}if(_i||Z!==b){M.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(U,"projectionMatrix",b.projectionMatrix),ht.setValue(U,"viewMatrix",b.matrixWorldInverse);const hr=ht.map.cameraPosition;hr!==void 0&&hr.setValue(U,ut.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&ht.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ht.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),Z!==b&&(Z=b,dr=!0,Ns=!0)}if(Me.needsLights&&(Nn.state.directionalShadowMap.length>0&&ht.setValue(U,"directionalShadowMap",Nn.state.directionalShadowMap,Q),Nn.state.spotShadowMap.length>0&&ht.setValue(U,"spotShadowMap",Nn.state.spotShadowMap,Q),Nn.state.pointShadowMap.length>0&&ht.setValue(U,"pointShadowMap",Nn.state.pointShadowMap,Q)),q.isSkinnedMesh){ht.setOptional(U,q,"bindMatrix"),ht.setOptional(U,q,"bindMatrixInverse");const vt=q.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),ht.setValue(U,"boneTexture",vt.boneTexture,Q))}q.isBatchedMesh&&(ht.setOptional(U,q,"batchingTexture"),ht.setValue(U,"batchingTexture",q._matricesTexture,Q),ht.setOptional(U,q,"batchingIdTexture"),ht.setValue(U,"batchingIdTexture",q._indirectTexture,Q),ht.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&ht.setValue(U,"batchingColorTexture",q._colorsTexture,Q));const fr=Y.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&I.update(q,Y,Xn),(dr||Me.receiveShadow!==q.receiveShadow)&&(Me.receiveShadow=q.receiveShadow,ht.setValue(U,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&k.environment!==null&&(It.envMapIntensity.value=k.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=X3()),dr){if(ht.setValue(U,"toneMappingExposure",L.toneMappingExposure),Me.needsLights&&LS(It,Ns),Se&&X.fog===!0&&Le.refreshFogUniforms(It,Se),Le.refreshMaterialUniforms(It,X,ae,oe,T.state.transmissionRenderTarget[b.id]),Me.needsLights&&Me.lightProbeGrid){const vt=Me.lightProbeGrid;It.probesSH.value=vt.texture,It.probesMin.value.copy(vt.boundingBox.min),It.probesMax.value.copy(vt.boundingBox.max),It.probesResolution.value.copy(vt.resolution)}bc.upload(U,Um(Me),It,Q)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(bc.upload(U,Um(Me),It,Q),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ht.setValue(U,"center",q.center),ht.setValue(U,"modelViewMatrix",q.modelViewMatrix),ht.setValue(U,"normalMatrix",q.normalMatrix),ht.setValue(U,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){const vt=X.uniformsGroups;for(let hr=0,Fs=vt.length;hr<Fs;hr++){const km=vt[hr];se.update(km,Xn),se.bind(km,Xn)}}return Xn}function LS(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function DS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,k,Y){const X=$.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(b.texture).__webglTexture=k,$.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const Y=$.get(b);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,Y=0){O=b,J=k,W=Y;let X=null,q=!1,Se=!1;if(b){const _e=$.get(b);if(_e.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(U.FRAMEBUFFER,_e.__webglFramebuffer),ne.copy(b.viewport),le.copy(b.scissor),Be=b.scissorTest,M.viewport(ne),M.scissor(le),M.setScissorTest(Be),K=-1;return}else if(_e.__webglFramebuffer===void 0)Q.setupRenderTarget(b);else if(_e.__hasExternalTextures)Q.rebindTextures(b,$.get(b.texture).__webglTexture,$.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ge=b.depthTexture;if(_e.__boundDepthTexture!==Ge){if(Ge!==null&&$.has(Ge)&&(b.width!==Ge.image.width||b.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(b)}}const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Se=!0);const De=$.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[k])?X=De[k][Y]:X=De[k],q=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?X=$.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?X=De[Y]:X=De,ne.copy(b.viewport),le.copy(b.scissor),Be=b.scissorTest}else ne.copy(Fe).multiplyScalar(ae).floor(),le.copy(st).multiplyScalar(ae).floor(),Be=qe;if(Y!==0&&(X=j),M.bindFramebuffer(U.FRAMEBUFFER,X)&&M.drawBuffers(b,X),M.viewport(ne),M.scissor(le),M.setScissorTest(Be),q){const _e=$.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,_e.__webglTexture,Y)}else if(Se){const _e=k;for(let Ae=0;Ae<b.textures.length;Ae++){const De=$.get(b.textures[Ae]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ae,De.__webglTexture,Y,_e)}}else if(b!==null&&Y!==0){const _e=$.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,Y)}K=-1},this.readRenderTargetPixels=function(b,k,Y,X,q,Se,we,_e=0){if(!(b&&b.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){M.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const De=b.textures[_e],Ge=De.format,$e=De.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e),!R.textureFormatReadable(Ge)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable($e)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-X&&Y>=0&&Y<=b.height-q&&U.readPixels(k,Y,X,q,me.convert(Ge),me.convert($e),Se)}finally{const De=O!==null?$.get(O).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,k,Y,X,q,Se,we,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae)if(k>=0&&k<=b.width-X&&Y>=0&&Y<=b.height-q){M.bindFramebuffer(U.FRAMEBUFFER,Ae);const De=b.textures[_e],Ge=De.format,$e=De.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e),!R.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.bufferData(U.PIXEL_PACK_BUFFER,Se.byteLength,U.STREAM_READ),U.readPixels(k,Y,X,q,me.convert(Ge),me.convert($e),0);const dt=O!==null?$.get(O).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,dt);const Dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Jb(U,Dt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Se),U.deleteBuffer(Ie),U.deleteSync(Dt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,Y=0){const X=Math.pow(2,-Y),q=Math.floor(b.image.width*X),Se=Math.floor(b.image.height*X),we=k!==null?k.x:0,_e=k!==null?k.y:0;Q.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,we,_e,q,Se),M.unbindTexture()},this.copyTextureToTexture=function(b,k,Y=null,X=null,q=0,Se=0){let we,_e,Ae,De,Ge,$e,Ie,dt,Dt;const Pt=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(Y!==null)we=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,De=Y.min.x,Ge=Y.min.y,$e=Y.isBox3?Y.min.z:0;else{const It=Math.pow(2,-q);we=Math.floor(Pt.width*It),_e=Math.floor(Pt.height*It),b.isDataArrayTexture?Ae=Pt.depth:b.isData3DTexture?Ae=Math.floor(Pt.depth*It):Ae=1,De=0,Ge=0,$e=0}X!==null?(Ie=X.x,dt=X.y,Dt=X.z):(Ie=0,dt=0,Dt=0);const ft=me.convert(k.format),tn=me.convert(k.type);let Me;k.isData3DTexture?(Q.setTexture3D(k,0),Me=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Q.setTexture2DArray(k,0),Me=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(k,0),Me=U.TEXTURE_2D),M.activeTexture(U.TEXTURE0),M.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Nn=M.getParameter(U.UNPACK_ROW_LENGTH),tt=M.getParameter(U.UNPACK_IMAGE_HEIGHT),Xn=M.getParameter(U.UNPACK_SKIP_PIXELS),_i=M.getParameter(U.UNPACK_SKIP_ROWS),dr=M.getParameter(U.UNPACK_SKIP_IMAGES);M.pixelStorei(U.UNPACK_ROW_LENGTH,Pt.width),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pt.height),M.pixelStorei(U.UNPACK_SKIP_PIXELS,De),M.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),M.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);const Ns=b.isDataArrayTexture||b.isData3DTexture,ht=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const It=$.get(b),fr=$.get(k),vt=$.get(It.__renderTarget),hr=$.get(fr.__renderTarget);M.bindFramebuffer(U.READ_FRAMEBUFFER,vt.__webglFramebuffer),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,hr.__webglFramebuffer);for(let Fs=0;Fs<Ae;Fs++)Ns&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$.get(b).__webglTexture,q,$e+Fs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$.get(k).__webglTexture,Se,Dt+Fs)),U.blitFramebuffer(De,Ge,we,_e,Ie,dt,we,_e,U.DEPTH_BUFFER_BIT,U.NEAREST);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||$.has(b)){const It=$.get(b),fr=$.get(k);M.bindFramebuffer(U.READ_FRAMEBUFFER,te),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let vt=0;vt<Ae;vt++)Ns?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.__webglTexture,q,$e+vt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,It.__webglTexture,q),ht?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,fr.__webglTexture,Se,Dt+vt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,fr.__webglTexture,Se),q!==0?U.blitFramebuffer(De,Ge,we,_e,Ie,dt,we,_e,U.COLOR_BUFFER_BIT,U.NEAREST):ht?U.copyTexSubImage3D(Me,Se,Ie,dt,Dt+vt,De,Ge,we,_e):U.copyTexSubImage2D(Me,Se,Ie,dt,De,Ge,we,_e);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ht?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Me,Se,Ie,dt,Dt,we,_e,Ae,ft,tn,Pt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,Se,Ie,dt,Dt,we,_e,Ae,ft,Pt.data):U.texSubImage3D(Me,Se,Ie,dt,Dt,we,_e,Ae,ft,tn,Pt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Se,Ie,dt,we,_e,ft,tn,Pt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Se,Ie,dt,Pt.width,Pt.height,ft,Pt.data):U.texSubImage2D(U.TEXTURE_2D,Se,Ie,dt,we,_e,ft,tn,Pt);M.pixelStorei(U.UNPACK_ROW_LENGTH,Nn),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt),M.pixelStorei(U.UNPACK_SKIP_PIXELS,Xn),M.pixelStorei(U.UNPACK_SKIP_ROWS,_i),M.pixelStorei(U.UNPACK_SKIP_IMAGES,dr),Se===0&&k.generateMipmaps&&U.generateMipmap(Me),M.unbindTexture()},this.initRenderTarget=function(b){$.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),M.unbindTexture()},this.resetState=function(){J=0,W=0,O=null,M.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}function pS(){const t=z.useRef(null);return z.useEffect(()=>{const e=t.current;if(!e)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=window.matchMedia("(max-width: 768px), (pointer: coarse)").matches,r=e.clientWidth||window.innerWidth,s=e.clientHeight||window.innerHeight,o=new hA;o.fog=new ym(656646,.045);const a=new Bn(48,r/s,.1,100);a.position.set(0,.35,6.2);const l=new q3({antialias:!i,alpha:!0}),c=i?1.25:2;l.setPixelRatio(Math.min(window.devicePixelRatio||1,c)),l.setSize(r,s),l.setClearColor(656646,1),e.appendChild(l.domElement),o.add(new YA(4000276,.55));const u=new ex(13111342,1.4,18);u.position.set(0,1.2,2),o.add(u);const f=new ex(8001062,.7,20);f.position.set(-3,-1,1),o.add(f);const h=new au(.22,i?16:24,i?16:24),m=new WA({color:13111342,emissive:8001062,emissiveIntensity:.85,roughness:.35,metalness:.2}),x=new bn(h,m),E=new bn(h,m.clone());x.position.set(-2.6,0,0),E.position.set(2.6,0,0),o.add(x,E);const g=new au(.42,i?12:20,i?12:20),d=new ou({color:13111342,transparent:!0,opacity:.12}),v=new bn(g,d),y=new bn(g,d.clone());v.position.copy(x.position),y.position.copy(E.position),o.add(v,y);const S=new eS([new N(-2.6,0,0),new N(-1.2,.85,.15),new N(0,1.15,0),new N(1.2,.85,-.15),new N(2.6,0,0)]),w=new Em(S,i?32:64,.018,8,!1),T=new ou({color:8001062,transparent:!0,opacity:.35});o.add(new bn(w,T));const A=n?60:i?160:420,_=new Float32Array(A*3),C=new Float32Array(A),L=new Float32Array(A);for(let Ce=0;Ce<A;Ce++){C[Ce]=Math.random(),L[Ce]=.08+Math.random()*.18;const G=S.getPoint(C[Ce]);_[Ce*3]=G.x,_[Ce*3+1]=G.y,_[Ce*3+2]=G.z}const D=new In;D.setAttribute("position",new ei(_,3));const B=new Yh({color:15919334,size:n?.035:.045,transparent:!0,opacity:.85,depthWrite:!1,blending:sh,sizeAttenuation:!0}),j=new W0(D,B);o.add(j);const te=n?30:i?50:160,H=new Float32Array(te*3);for(let Ce=0;Ce<te;Ce++)H[Ce*3]=(Math.random()-.5)*10,H[Ce*3+1]=(Math.random()-.5)*6,H[Ce*3+2]=(Math.random()-.5)*4-1;const J=new In;J.setAttribute("position",new ei(H,3));const W=new W0(J,new Yh({color:4000276,size:.03,transparent:!0,opacity:.5,depthWrite:!1}));o.add(W);let O=0,K=performance.now();const Z=new N;let ne=!0;const le=()=>{const Ce=e.clientWidth||window.innerWidth,G=e.clientHeight||window.innerHeight;a.aspect=Ce/G,a.updateProjectionMatrix(),l.setSize(Ce,G)};window.addEventListener("resize",le);const Be=Ce=>{if(!ne)return;const G=(Ce-K)/1e3,oe=1+.06*Math.pow(Math.max(0,Math.sin(G*Math.PI*2.4)),8);if(x.scale.setScalar(oe),E.scale.setScalar(oe),v.scale.setScalar(oe*1.05),y.scale.setScalar(oe*1.05),u.intensity=1.2+oe*.35,!n){const ae=D.attributes.position;for(let Re=0;Re<A;Re++){C[Re]=(C[Re]+L[Re]*.016)%1,S.getPoint(C[Re],Z);const ze=Math.sin(G*2+Re)*.04;ae.setXYZ(Re,Z.x,Z.y+ze,Z.z+ze*.5)}ae.needsUpdate=!0,a.position.x=Math.sin(G*.15)*.25,a.lookAt(0,.4,0),W.rotation.y=G*.03}l.render(o,a),O=requestAnimationFrame(Be)},Xe=()=>{document.hidden?(ne=!1,cancelAnimationFrame(O)):(ne=!0,K=performance.now()-(performance.now()-K),O=requestAnimationFrame(Be))};return document.addEventListener("visibilitychange",Xe),O=requestAnimationFrame(Be),()=>{ne=!1,cancelAnimationFrame(O),window.removeEventListener("resize",le),document.removeEventListener("visibilitychange",Xe),D.dispose(),B.dispose(),J.dispose(),W.material.dispose(),w.dispose(),T.dispose(),h.dispose(),m.dispose(),E.material.dispose(),g.dispose(),d.dispose(),y.material.dispose(),l.dispose(),l.domElement.parentNode===e&&e.removeChild(l.domElement)}},[]),p.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",inset:0,zIndex:0,overflow:"hidden",background:"radial-gradient(ellipse at 50% 40%, #3d0a14 0%, #0a0506 70%)"}})}const Tr="'Anek Latin', 'Segoe UI', system-ui, sans-serif",Qh="'Public Sans', 'Segoe UI', system-ui, sans-serif",$3=[{n:"1",title:"Go on call",text:"Donors open the app and signal they are ready nearby."},{n:"2",title:"Get matched",text:"Hospitals broadcast compatible blood requests in real time."},{n:"3",title:"Donate & earn",text:"Respond, arrive, verify — and earn credits that help families."}],ep={fontFamily:Tr,fontWeight:700,fontSize:16,minHeight:48,padding:"14px 22px",borderRadius:12,background:"#C8102E",color:"#fff",textDecoration:"none",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},bx={...ep,background:"transparent",color:"#F2E8E6",border:"1px solid rgba(242,232,230,0.35)"};function Zd({title:t,children:e,delay:n=0}){return p.jsxs("section",{style:{padding:"48px 0 8px",borderTop:"1px solid rgba(242,232,230,0.08)",animation:`rsFadeUp 0.8s ease-out ${n}s both`},children:[p.jsx("h2",{style:{fontFamily:Tr,fontWeight:800,fontSize:"clamp(22px, 5vw, 28px)",letterSpacing:"-0.02em",color:"#F2E8E6",margin:"0 0 12px"},children:t}),p.jsx("div",{style:{fontFamily:Qh,fontSize:15,lineHeight:1.6,color:"#A89B96",maxWidth:420},children:e})]})}function Y3(){const{user:t,loading:e}=cr(),n=qt();return z.useEffect(()=>{e||!t||n(Yi(t),{replace:!0})},[t,e,n]),p.jsxs("div",{className:"safe-top safe-bottom",style:{position:"relative",minHeight:"100dvh",width:"100%",overflowX:"hidden",overflowY:"auto",color:"#F2E8E6",background:"#0A0506",WebkitOverflowScrolling:"touch"},children:[p.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"},children:p.jsx(pS,{})}),p.jsx("div",{style:{position:"absolute",inset:0,zIndex:1,pointerEvents:"none",background:"linear-gradient(180deg, rgba(10,5,6,0.4) 0%, rgba(10,5,6,0.2) 35%, rgba(10,5,6,0.92) 100%)"}}),p.jsxs("div",{style:{position:"relative",zIndex:2,maxWidth:560,margin:"0 auto",padding:"max(24px, env(safe-area-inset-top)) clamp(20px, 5vw, 40px) max(32px, env(safe-area-inset-bottom))"},children:[p.jsxs("header",{style:{minHeight:"calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 48px)",display:"flex",flexDirection:"column",justifyContent:"flex-end",paddingBottom:32},children:[p.jsx("p",{style:{fontFamily:Tr,fontWeight:800,fontSize:"clamp(42px, 11vw, 64px)",letterSpacing:"-0.03em",lineHeight:.95,margin:0,color:"#F2E8E6",animation:"rsFadeUp 0.9s ease-out both"},children:"RaktaSetu"}),p.jsx("p",{style:{fontFamily:Tr,fontWeight:500,fontSize:15,margin:"8px 0 0",color:"#A89B96",letterSpacing:"0.04em",animation:"rsFadeUp 0.9s ease-out 0.08s both"},children:"रक्तसेतु · Blood Bridge"}),p.jsx("p",{style:{fontFamily:Tr,fontWeight:600,fontSize:"clamp(18px, 4.5vw, 24px)",margin:"18px 0 0",color:"#F2E8E6",lineHeight:1.25,animation:"rsFadeUp 0.9s ease-out 0.14s both"},children:"The living bridge between donors and hospitals."}),p.jsx("p",{style:{fontFamily:Qh,fontSize:15,lineHeight:1.55,color:"#A89B96",margin:"12px 0 0",maxWidth:380,animation:"rsFadeUp 0.9s ease-out 0.22s both"},children:"Connect. Donate. Save Lives."}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,marginTop:28,animation:"rsFadeUp 0.9s ease-out 0.34s both"},children:[p.jsx(un,{to:"/login",style:{...ep,width:"100%"},children:"Sign in as donor"}),p.jsx(un,{to:"/register",style:{...bx,width:"100%"},children:"Create account"})]})]}),p.jsxs("div",{style:{marginTop:8,padding:"8px 0 24px",background:"rgba(10,5,6,0.72)",backdropFilter:"blur(8px)",borderRadius:16,paddingLeft:4,paddingRight:4},children:[p.jsx(Zd,{title:"Mission",children:p.jsx("p",{style:{margin:0},children:"Connect willing donors with hospitals in real time so blood reaches patients faster. When a request goes out, compatible donors nearby can answer — GPS-matched, verified, and ready."})}),p.jsx(Zd,{title:"Vision",delay:.05,children:p.jsx("p",{style:{margin:0},children:"A living bridge across India where verified donors answer when every minute counts — so no emergency goes unanswered for lack of a match."})}),p.jsx(Zd,{title:"How it works",delay:.1,children:p.jsx("ol",{style:{listStyle:"none",margin:0,padding:0},children:$3.map(i=>p.jsxs("li",{style:{display:"flex",gap:14,marginBottom:18,alignItems:"flex-start"},children:[p.jsx("span",{style:{fontFamily:Tr,fontWeight:800,fontSize:18,color:"#C8102E",minWidth:28,lineHeight:1.3},"aria-hidden":"true",children:i.n}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:Tr,fontWeight:700,fontSize:16,color:"#F2E8E6",margin:"0 0 4px"},children:i.title}),p.jsx("p",{style:{margin:0,fontSize:14,lineHeight:1.5},children:i.text})]})]},i.n))})}),p.jsxs("section",{style:{padding:"36px 0 16px",borderTop:"1px solid rgba(242,232,230,0.08)"},children:[p.jsx("p",{style:{fontFamily:Tr,fontWeight:700,fontSize:18,color:"#F2E8E6",margin:"0 0 16px"},children:"Ready to become a bridge?"}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[p.jsx(un,{to:"/login",style:{...ep,width:"100%"},children:"Sign in as donor"}),p.jsx(un,{to:"/register",style:{...bx,width:"100%"},children:"Create account"})]})]})]}),p.jsxs("footer",{style:{fontFamily:Qh,fontSize:13,color:"#6F6963",margin:"28px 0 8px",textAlign:"center",lineHeight:1.7},children:[p.jsxs("div",{children:[p.jsx(un,{to:"/privacy",style:{color:"#A89B96",textDecoration:"none"},children:"Privacy"})," · ",p.jsx("a",{href:"mailto:support@raktasetu.org",style:{color:"#A89B96",textDecoration:"none"},children:"support@raktasetu.org"})]}),p.jsx("div",{style:{marginTop:10},children:p.jsx(un,{to:"/login?role=hospital",style:{color:"#6F6963",textDecoration:"underline",textUnderlineOffset:3,fontSize:12,minHeight:44,display:"inline-flex",alignItems:"center",padding:"8px 4px"},children:"Hospital login"})})]})]}),p.jsx("style",{children:`
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
 */const K3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mS=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=z.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>z.createElement("svg",{ref:l,...J3,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:mS("lucide",r),...a},[...o.map(([c,u])=>z.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(t,e)=>{const n=z.forwardRef(({className:i,...r},s)=>z.createElement(Z3,{ref:s,iconNode:e,className:mS(`lucide-${K3(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=rt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=rt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=rt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=rt("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=rt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=rt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eL=rt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=rt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=rt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=rt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=rt("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=rt("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nL=rt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iL=rt("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rL=rt("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=rt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sL=rt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oL=rt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=rt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aL=rt("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lL=rt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cL=rt("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=rt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uL=rt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=rt("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=rt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dL=rt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fL=rt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hL=rt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pL=rt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=rt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=rt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),mL="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function gn({children:t,kind:e="primary",onClick:n,full:i,small:r,dark:s,disabled:o}){const a={primary:{background:P.oxblood,color:"#fff",border:"1px solid "+P.oxbloodDark},critical:{background:P.arterial,color:"#fff",border:"1px solid #A50D26"},ghost:{background:s?"transparent":"#fff",color:s?"#E8E6E1":P.ink,border:`1px solid ${s?P.consoleLine:P.line}`},green:{background:P.leaf,color:"#fff",border:"1px solid #0B573C"}}[e];return p.jsx("button",{onClick:n,disabled:o,style:{...a,fontFamily:mL,fontWeight:700,fontSize:r?13:15,letterSpacing:"0.01em",padding:r?"8px 14px":"13px 18px",borderRadius:12,minHeight:r?36:48,width:i?"100%":"auto",cursor:o?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform .08s ease, opacity .15s ease",opacity:o?.55:1},onMouseDown:l=>!o&&(l.currentTarget.style.transform="scale(.98)"),onMouseUp:l=>!o&&(l.currentTarget.style.transform="scale(1)"),onMouseLeave:l=>!o&&(l.currentTarget.style.transform="scale(1)"),children:t})}const li="'Public Sans', 'Segoe UI', system-ui, sans-serif",gL="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function xL(){return document.getElementById("gis-script")?Promise.resolve():new Promise((t,e)=>{const n=document.createElement("script");n.id="gis-script",n.src="https://accounts.google.com/gsi/client",n.async=!0,n.onload=()=>t(),n.onerror=()=>e(new Error("Failed to load Google Sign-In")),document.head.appendChild(n)})}function vL(){const t=qt(),[e]=Qy(),i=b_(e)==="hospital",{login:r,loginWithGoogle:s}=cr(),[o,a]=z.useState(""),[l,c]=z.useState(""),[u,f]=z.useState(""),[h,m]=z.useState(!1),[x,E]=z.useState(!1),[g,d]=z.useState(!1),v=z.useRef(null),y=z.useRef(!1),S=z.useRef(s),w=z.useRef(t);y.current=x,S.current=s,w.current=t,z.useEffect(()=>{if(i||!Rl)return;let A=!1;return xL().then(()=>{var _,C;A||!((C=(_=window.google)==null?void 0:_.accounts)!=null&&C.id)||(window.google.accounts.id.initialize({client_id:Rl,callback:async L=>{var D,B;if(!y.current){f("Please accept the privacy consent to continue with Google.");return}f(""),m(!0);try{const j=await S.current(L.credential,!0);w.current(Yi(j))}catch(j){f(((B=(D=j.response)==null?void 0:D.data)==null?void 0:B.error)||j.message||"Google Sign-In failed")}finally{m(!1)}}}),d(!0))}).catch(()=>f("Google Sign-In unavailable")),()=>{A=!0}},[i]),z.useEffect(()=>{var A,_,C;i||!g||!Rl||!v.current||!((_=(A=window.google)==null?void 0:A.accounts)!=null&&_.id)||(v.current.innerHTML="",window.google.accounts.id.renderButton(v.current,{theme:"outline",size:"large",width:Math.min(312,((C=v.current.parentElement)==null?void 0:C.clientWidth)||312),text:"continue_with",shape:"rectangular"}))},[g,i]);const T=async A=>{var _,C;if(A.preventDefault(),f(""),!o||!l){f("Please enter phone/email and password");return}m(!0);try{const L=await r(o,l);t(Yi(L))}catch(L){f(((C=(_=L.response)==null?void 0:_.data)==null?void 0:C.error)||"Login failed. Please try again.")}finally{m(!1)}};return p.jsxs("div",{className:"safe-top safe-bottom",style:{position:"relative",minHeight:"100dvh",overflow:"hidden",background:"#0A0506",paddingTop:"env(safe-area-inset-top)",paddingBottom:"env(safe-area-inset-bottom)"},children:[p.jsx("div",{style:{position:"absolute",inset:0,opacity:.55},children:p.jsx(pS,{})}),p.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(10,5,6,0.55) 0%, rgba(10,5,6,0.88) 100%)",zIndex:1}}),p.jsx("div",{style:{position:"relative",zIndex:2,minHeight:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24},children:p.jsxs("div",{style:{width:"100%",maxWidth:360},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,marginBottom:20,minHeight:44},children:[p.jsx(un,{to:"/",style:{fontFamily:li,fontSize:13,color:"#A89B96",textDecoration:"none",display:"inline-flex",alignItems:"center",minHeight:44,padding:"8px 0"},children:"← RaktaSetu"}),i?p.jsx(un,{to:"/login",style:{fontFamily:li,fontSize:12,color:"#A89B96",textDecoration:"none",display:"inline-flex",alignItems:"center",minHeight:44,padding:"8px 0"},children:"Donor sign in"}):p.jsx(un,{to:"/login?role=hospital",style:{fontFamily:li,fontSize:12,color:"#6F6963",textDecoration:"underline",textUnderlineOffset:3,display:"inline-flex",alignItems:"center",minHeight:44,padding:"8px 0",whiteSpace:"nowrap"},children:"Hospital login"})]}),p.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:20},children:p.jsx("div",{style:{width:56,height:56,borderRadius:"50% 50% 50% 4px",background:P.oxblood,transform:"rotate(45deg)",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(Ka,{size:28,color:"#fff",fill:"#fff",strokeWidth:1.5,style:{transform:"rotate(-45deg)"}})})}),p.jsx("p",{style:{fontFamily:gL,fontWeight:800,fontSize:22,textAlign:"center",color:"#F2E8E6",margin:"0 0 4px"},children:i?"Hospital sign in":"Donor sign in"}),p.jsx("p",{style:{fontFamily:li,fontSize:13,color:"#A89B96",textAlign:"center",margin:"0 0 22px"},children:i?"Access your hospital console":"Sign in to answer blood requests nearby"}),p.jsxs("form",{onSubmit:T,children:[u&&p.jsx("div",{style:{background:"rgba(200,16,46,0.15)",border:"1px solid rgba(200,16,46,0.4)",borderRadius:10,padding:"10px 14px",marginBottom:14,fontFamily:li,fontSize:13,color:"#F3C9D0"},children:u}),p.jsxs("div",{style:{position:"relative",marginBottom:12},children:[p.jsx(wm,{size:16,color:"#A89B96",style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"text",placeholder:"Phone or email",value:o,onChange:A=>a(A.target.value),autoComplete:"username",style:{width:"100%",padding:"14px 14px 14px 40px",borderRadius:12,minHeight:48,border:"1px solid rgba(242,232,230,0.18)",fontFamily:li,fontSize:16,background:"rgba(255,255,255,0.06)",color:"#F2E8E6"}})]}),p.jsxs("div",{style:{position:"relative",marginBottom:18},children:[p.jsx(yS,{size:16,color:"#A89B96",style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"password",placeholder:"Password",value:l,onChange:A=>c(A.target.value),autoComplete:"current-password",style:{width:"100%",padding:"14px 14px 14px 40px",borderRadius:12,minHeight:48,border:"1px solid rgba(242,232,230,0.18)",fontFamily:li,fontSize:16,background:"rgba(255,255,255,0.06)",color:"#F2E8E6"}})]}),p.jsx(gn,{kind:"primary",full:!0,disabled:h,children:h?"Signing in...":"Sign in"})]}),!i&&Rl?p.jsxs("div",{style:{marginTop:18},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,margin:"0 0 12px"},children:[p.jsx("div",{style:{flex:1,height:1,background:"rgba(242,232,230,0.15)"}}),p.jsx("span",{style:{fontFamily:li,fontSize:12,color:"#6F6963"},children:"or"}),p.jsx("div",{style:{flex:1,height:1,background:"rgba(242,232,230,0.15)"}})]}),p.jsxs("label",{style:{display:"flex",gap:10,alignItems:"flex-start",marginBottom:12,fontFamily:li,fontSize:13,color:"#A89B96",cursor:"pointer",minHeight:44},children:[p.jsx("input",{type:"checkbox",checked:x,onChange:A=>E(A.target.checked),style:{marginTop:4,width:18,height:18,flexShrink:0}}),p.jsxs("span",{children:["I consent to RaktaSetu processing my account data per the"," ",p.jsx(un,{to:"/privacy",style:{color:"#F2E8E6"},children:"Privacy Policy"}),"."]})]}),p.jsx("div",{ref:v,style:{display:"flex",justifyContent:"center",opacity:x?1:.45,pointerEvents:x?"auto":"none",minHeight:44}})]}):null,p.jsx("p",{style:{fontFamily:li,fontSize:12,color:"#6F6963",textAlign:"center",marginTop:18,lineHeight:1.45},children:i?"Demo: +918312456789 / password123":"Demo: +919876543210 / password123"}),p.jsxs("p",{style:{fontFamily:li,fontSize:13,color:"#A89B96",textAlign:"center",marginTop:14},children:["New here?"," ",p.jsx(un,{to:i?"/register?role=hospital":"/register",style:{color:"#F2E8E6",fontWeight:700,textDecoration:"none"},children:"Create an account"})]})]})})]})}const ln="'Public Sans', 'Segoe UI', system-ui, sans-serif",Cx="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function yL(){const t=qt(),[e]=Qy(),n=b_(e),i=n==="hospital",{register:r}=cr(),[s,o]=z.useState(""),[a,l]=z.useState(""),[c,u]=z.useState(""),[f,h]=z.useState(""),[m,x]=z.useState("O+"),[E,g]=z.useState(""),[d,v]=z.useState(""),[y,S]=z.useState(""),[w,T]=z.useState(!1),[A,_]=z.useState(""),[C,L]=z.useState(!1),D=async j=>{var O,K;if(j.preventDefault(),_(""),!s||!a||!f||!E||!d||!y){_("Please fill all required fields");return}if(n==="donor"&&!m){_("Please select your blood group");return}const te=new Date,H=new Date(y);let J=te.getFullYear()-H.getFullYear();const W=te.getMonth()-H.getMonth();if((W<0||W===0&&te.getDate()<H.getDate())&&J--,J<18){_("You must be at least 18 years old to register");return}if(!w){_("You must consent to processing your personal and health data");return}L(!0);try{const ne=await r({name:s,phone:a,email:c,password:f,role:n,city:E,state:d,blood_group:m,dob:y,consent_given:!0});t(Yi(ne))}catch(Z){_(((K=(O=Z.response)==null?void 0:O.data)==null?void 0:K.error)||"Registration failed. Please try again.")}finally{L(!1)}},B={width:"100%",padding:"14px 14px",borderRadius:12,border:`1px solid ${P.line}`,fontFamily:ln,fontSize:16,background:P.card,minHeight:48};return p.jsx("div",{className:"safe-top safe-bottom",style:{minHeight:"100dvh",padding:"max(24px, env(safe-area-inset-top)) 20px max(40px, env(safe-area-inset-bottom))",background:P.porcelain},children:p.jsxs("div",{style:{maxWidth:360,margin:"0 auto"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,marginBottom:16,minHeight:44},children:[p.jsx(un,{to:"/",style:{fontFamily:ln,fontSize:13,color:P.mut,textDecoration:"none",display:"inline-flex",alignItems:"center",minHeight:44},children:"← RaktaSetu"}),i?p.jsx(un,{to:"/register",style:{fontFamily:ln,fontSize:12,color:P.mut,textDecoration:"none",display:"inline-flex",alignItems:"center",minHeight:44},children:"Donor registration"}):p.jsx(un,{to:"/register?role=hospital",style:{fontFamily:ln,fontSize:12,color:P.faint,textDecoration:"underline",textUnderlineOffset:3,display:"inline-flex",alignItems:"center",minHeight:44,whiteSpace:"nowrap"},children:"Hospital registration"})]}),p.jsx("p",{style:{fontFamily:Cx,fontWeight:800,fontSize:22,color:P.ink,margin:"0 0 4px"},children:i?"Register hospital":"Create donor account"}),p.jsx("p",{style:{fontFamily:ln,fontSize:13,color:P.mut,margin:"0 0 20px"},children:i?"Join RaktaSetu as a blood bank or hospital":"Join the living bridge — donate when nearby patients need you"}),p.jsxs("form",{onSubmit:D,children:[A&&p.jsx("div",{style:{background:P.arterialSoft,border:"1px solid #F3C9D0",borderRadius:10,padding:"10px 14px",marginBottom:14,fontFamily:ln,fontSize:13,color:P.arterial},children:A}),p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("label",{style:{fontFamily:ln,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:i?"Hospital / blood bank name":"Full name"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(MS,{size:16,color:P.faint,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"text",placeholder:i?"Hospital name":"Your full name",value:s,onChange:j=>o(j.target.value),style:{...B,paddingLeft:40}})]})]}),p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("label",{style:{fontFamily:ln,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"Phone"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(wm,{size:16,color:P.faint,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"tel",placeholder:"+91 98765 43210",value:a,onChange:j=>l(j.target.value),style:{...B,paddingLeft:40}})]})]}),p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("label",{style:{fontFamily:ln,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"Email"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(oL,{size:16,color:P.faint,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"email",placeholder:"you@example.com",value:c,onChange:j=>u(j.target.value),style:{...B,paddingLeft:40}})]})]}),p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("label",{style:{fontFamily:ln,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"Password"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(yS,{size:16,color:P.faint,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"password",placeholder:"Min 8 characters with uppercase, lowercase, number, symbol",value:f,onChange:j=>h(j.target.value),style:{...B,paddingLeft:40}})]})]}),p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("label",{style:{fontFamily:ln,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"Date of birth"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(eL,{size:16,color:P.faint,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"date",value:y,onChange:j=>S(j.target.value),style:{...B,paddingLeft:40}})]})]}),!i&&p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("label",{style:{fontFamily:ln,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"Blood group"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},children:A_.map(j=>p.jsx("button",{type:"button",onClick:()=>x(j),style:{fontFamily:Cx,fontWeight:800,fontSize:15,padding:"12px 0",minHeight:44,borderRadius:10,background:m===j?P.oxblood:P.card,color:m===j?"#fff":P.mut,border:`1px solid ${m===j?P.oxbloodDark:P.line}`,cursor:"pointer"},children:j},j))})]}),p.jsxs("div",{style:{display:"flex",gap:10,marginBottom:12},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("label",{style:{fontFamily:ln,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"City"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(_S,{size:16,color:P.faint,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"text",placeholder:"City",value:E,onChange:j=>g(j.target.value),style:{...B,paddingLeft:40}})]})]}),p.jsxs("div",{style:{flex:1},children:[p.jsx("label",{style:{fontFamily:ln,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6},children:"State"}),p.jsx("input",{type:"text",placeholder:"State",value:d,onChange:j=>v(j.target.value),style:B})]})]}),p.jsxs("div",{style:{marginBottom:14,display:"flex",alignItems:"flex-start",gap:10,minHeight:44},children:[p.jsx("input",{type:"checkbox",id:"consent",checked:w,onChange:j=>T(j.target.checked),style:{marginTop:3,accentColor:P.oxblood,width:18,height:18,flexShrink:0}}),p.jsxs("label",{htmlFor:"consent",style:{fontFamily:ln,fontSize:13,color:P.ink,lineHeight:1.4},children:["I consent to the processing of my personal and health data for blood donation matching purposes. I have read and agree to the ",p.jsx(un,{to:"/privacy",style:{color:P.oxblood},children:"Privacy Policy"}),"."]})]}),p.jsx(gn,{kind:"primary",full:!0,disabled:C,children:C?"Creating account...":i?"Register hospital":"Create donor account"})]}),p.jsxs("p",{style:{fontFamily:ln,fontSize:13,color:P.mut,textAlign:"center",marginTop:20},children:["Already have an account?"," ",p.jsx(un,{to:i?"/login?role=hospital":"/login",style:{color:P.oxblood,fontWeight:700,textDecoration:"none"},children:"Sign in"})]})]})})}const tc="'Public Sans', 'Segoe UI', system-ui, sans-serif",Rx="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function _L(){const t=qt(),e=({title:n,children:i})=>p.jsxs("div",{style:{marginBottom:24},children:[p.jsx("h2",{style:{fontFamily:Rx,fontWeight:800,fontSize:16,color:P.ink,margin:"0 0 8px"},children:n}),p.jsx("div",{style:{fontFamily:tc,fontSize:13.5,color:P.mut,lineHeight:1.6},children:i})]});return p.jsx("div",{style:{minHeight:"100vh",padding:"24px 20px 40px",background:P.porcelain},children:p.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[p.jsxs("button",{onClick:()=>t(-1),style:{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,marginBottom:18,fontFamily:tc,fontSize:13,color:P.mut},children:[p.jsx(Xo,{size:16})," Back"]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[p.jsx(hL,{size:22,color:P.oxblood}),p.jsx("h1",{style:{fontFamily:Rx,fontWeight:800,fontSize:22,color:P.ink,margin:0},children:"Privacy Policy"})]}),p.jsxs("p",{style:{fontFamily:tc,fontSize:12,color:P.faint,margin:"0 0 24px"},children:["Last updated: ",new Date().toLocaleDateString()]}),p.jsxs(e,{title:"1. Data We Collect",children:[p.jsx("p",{children:"We collect the following personal and health data during registration and use:"}),p.jsxs("ul",{style:{paddingLeft:20,margin:"8px 0"},children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Identity:"})," Full name, date of birth"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Contact:"})," Phone number, email address"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Health:"})," Blood group (donors only)"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Location:"})," City, state, and approximate geolocation for matching"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Usage:"})," Donation history, response times, verification status"]})]})]}),p.jsxs(e,{title:"2. Purpose of Processing",children:[p.jsx("p",{children:"Your data is processed solely for the following purposes:"}),p.jsxs("ul",{style:{paddingLeft:20,margin:"8px 0"},children:[p.jsx("li",{children:"Matching blood donors with nearby hospitals in emergencies"}),p.jsx("li",{children:"Verifying donor identity and eligibility"}),p.jsx("li",{children:"Maintaining donation records and credit tracking"}),p.jsx("li",{children:"Sending emergency blood request notifications"}),p.jsx("li",{children:"Compliance with applicable health regulations"})]})]}),p.jsxs(e,{title:"3. Data Sharing",children:[p.jsx("p",{children:"We do not sell your data. Information is shared only as follows:"}),p.jsxs("ul",{style:{paddingLeft:20,margin:"8px 0"},children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Matched hospitals:"})," When you accept a donation request, the hospital receives your name, blood group, and a masked phone number. Your full phone number is only revealed after you confirm arrival."]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Service providers:"})," Our database is hosted on Neon (US-based cloud PostgreSQL). No third-party analytics or advertising trackers are used."]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Legal obligations:"})," We may disclose data if required by law or to protect vital interests."]})]})]}),p.jsxs(e,{title:"4. Your Rights (DPDP Act 2023)",children:[p.jsx("p",{children:"Under India's Digital Personal Data Protection Act, 2023, you have the right to:"}),p.jsxs("ul",{style:{paddingLeft:20,margin:"8px 0"},children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Access:"})," Request a copy of your personal data"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Correction:"})," Update inaccurate or incomplete information"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Erasure:"})," Request deletion of your account and associated data"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Withdraw consent:"})," Opt out of data processing at any time"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Grievance redressal:"})," File a complaint with our Data Protection Officer"]})]}),p.jsx("p",{children:"To exercise any of these rights, contact us at the email below."})]}),p.jsx(e,{title:"5. Data Retention",children:p.jsxs("p",{children:["We retain your personal data for ",p.jsx("strong",{children:"3 years"})," after your last activity (donation, login, or profile update). After this period, your data is automatically anonymized or deleted, unless longer retention is required by law."]})}),p.jsxs(e,{title:"6. Security Measures",children:[p.jsx("p",{children:"We implement industry-standard security practices:"}),p.jsxs("ul",{style:{paddingLeft:20,margin:"8px 0"},children:[p.jsx("li",{children:"Passwords are hashed using bcrypt"}),p.jsx("li",{children:"All API communications use HTTPS/TLS encryption"}),p.jsx("li",{children:"Phone numbers are masked in hospital-facing interfaces"}),p.jsx("li",{children:"Access to donor health data is restricted to matched hospitals only"})]})]}),p.jsx(e,{title:"7. Cross-Border Data Transfer",children:p.jsxs("p",{children:["Our database is hosted on ",p.jsx("strong",{children:"Neon Postgres"})," in the United States. By using RaktaSetu, you consent to the transfer and storage of your data in the US, which may have different data protection laws than India. We ensure adequate safeguards are in place through our service provider's security certifications."]})}),p.jsxs(e,{title:"8. Contact & Grievances",children:[p.jsx("p",{children:"For privacy-related questions, data access requests, or grievances:"}),p.jsxs("p",{style:{margin:"8px 0"},children:[p.jsx("strong",{children:"Privacy:"})," privacy@raktasetu.org",p.jsx("br",{}),p.jsx("strong",{children:"Support:"})," support@raktasetu.org",p.jsx("br",{}),p.jsx("strong",{children:"Data Protection Officer:"})," RaktaSetu Trust, Bengaluru, Karnataka",p.jsx("br",{}),p.jsx("strong",{children:"Live app:"})," https://raktasetu-production.up.railway.app/"]}),p.jsxs("p",{children:["If you are unsatisfied with our response, you may approach the ",p.jsx("strong",{children:"Data Protection Board of India"}),"."]})]}),p.jsx("div",{style:{marginTop:32,padding:"14px 16px",background:P.arterialSoft,borderRadius:12,border:"1px solid #F3C9D0"},children:p.jsxs("p",{style:{fontFamily:tc,fontSize:12.5,color:P.arterial,margin:0,lineHeight:1.5},children:[p.jsx("strong",{children:"Consent reminder:"})," By registering, you explicitly consent to the processing of your personal and health data for blood donation matching purposes. You may withdraw consent at any time by deleting your account."]})})]})})}const SL="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function wS({size:t=26,dark:e=!1}){return p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[p.jsx("div",{style:{width:t,height:t,borderRadius:"50% 50% 50% 4px",background:P.oxblood,transform:"rotate(45deg)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 1px 4px rgba(122,22,38,.35)"},children:p.jsx("div",{style:{width:t*.5,height:t*.28,background:e?P.consoleBg:P.porcelain,borderRadius:`${t}px ${t}px 0 0`,transform:"rotate(-45deg) translateY(28%)"}})}),p.jsxs("span",{style:{fontFamily:SL,fontWeight:800,fontSize:t*.78,letterSpacing:"-0.01em",color:e?"#F2EFEA":P.ink},children:["Rakta",p.jsx("span",{style:{color:e?"#E4506B":P.oxblood},children:"Setu"})]})]})}const EL="'Public Sans', 'Segoe UI', system-ui, sans-serif";function Uo({children:t,tone:e="line",dark:n}){const i={line:{bg:n?P.consoleCard:"#FFFFFF",fg:n?P.consoleMut:P.mut,bd:n?P.consoleLine:P.line},red:{bg:P.arterialSoft,fg:P.arterial,bd:"#F3C9D0"},green:{bg:P.leafSoft,fg:P.leaf,bd:"#CBE3D8"},solid:{bg:P.oxblood,fg:"#fff",bd:P.oxblood},gold:{bg:"#F6EFDD",fg:P.gold,bd:"#E6D9B8"}}[e];return p.jsx("span",{style:{fontFamily:EL,fontSize:11,fontWeight:700,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:99,background:i.bg,color:i.fg,border:`1px solid ${i.bd}`,textTransform:"uppercase",whiteSpace:"nowrap"},children:t})}function Ze({children:t,style:e,dark:n}){return p.jsx("div",{style:{background:n?P.consoleCard:P.card,border:`1px solid ${n?P.consoleLine:P.line}`,borderRadius:16,padding:16,...e},children:t})}const ML="'Public Sans', 'Segoe UI', system-ui, sans-serif",nc=({icon:t,label:e,active:n,onClick:i})=>p.jsxs("button",{onClick:i,style:{background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:3,flex:1,padding:"8px 0"},children:[op.cloneElement(t,{size:20,color:n?P.oxblood:P.faint,strokeWidth:n?2.4:2}),p.jsx("span",{style:{fontFamily:ML,fontSize:10,fontWeight:n?700:500,color:n?P.oxblood:P.faint},children:e})]});function Is(){const t=qt(),n=lr().pathname,i=r=>n.startsWith(r);return p.jsxs("div",{style:{display:"flex",borderTop:`1px solid ${P.line}`,background:"rgba(255,255,255,0.93)",backdropFilter:"blur(6px)",position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,zIndex:100},children:[p.jsx(nc,{icon:p.jsx(nL,{}),label:"Home",active:i("/home"),onClick:()=>t("/home")}),p.jsx(nc,{icon:p.jsx(lu,{}),label:"Requests",active:i("/requests")||i("/alert"),onClick:()=>t("/requests")}),p.jsx(nc,{icon:p.jsx(xS,{}),label:"Credits",active:i("/credits"),onClick:()=>t("/credits")}),p.jsx(nc,{icon:p.jsx(MS,{}),label:"Profile",active:i("/profile")||i("/history"),onClick:()=>t("/profile")})]})}const Hi="'Public Sans', 'Segoe UI', system-ui, sans-serif",Zs="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function wL(){const t=qt(),{user:e,updateUser:n}=cr(),[i,r]=z.useState((e==null?void 0:e.is_on_call)||!1),[s,o]=z.useState(null),[a,l]=z.useState(!0),[c,u]=z.useState(""),[f,h]=z.useState(!1),[m,x]=z.useState("English");z.useEffect(()=>{E()},[]);const E=async()=>{try{const{data:_}=await pt.get("/donor/dashboard"),C=_.data||_;o(C),r(C.is_on_call),n({is_on_call:C.is_on_call})}catch{u("Failed to load dashboard")}finally{l(!1)}},g=async()=>{h(!0);try{const{data:_}=await pt.patch("/donor/on-call",{is_on_call:!i}),C=_.data||_;r(C.is_on_call),n({is_on_call:C.is_on_call})}catch{u("Failed to update status")}finally{h(!1)}};if(a)return p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:Hi,color:P.mut},children:"Loading dashboard..."});const d=(e==null?void 0:e.name)||"Donor",v=(e==null?void 0:e.blood_group)||"—",y=(s==null?void 0:s.credits)??0,S=(s==null?void 0:s.eligible)??!0,w=s==null?void 0:s.next_eligible_date,T=(e==null?void 0:e.ping_radius_km)||10,A=(s==null?void 0:s.nearby_requests)||[];return p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx(wS,{}),p.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[p.jsx("button",{onClick:()=>x(_=>_==="English"?"ಕನ್ನಡ":"English"),children:p.jsx(Uo,{tone:"gold",children:m==="English"?"English · EN":"ಕನ್ನಡ · KN"})}),p.jsx("button",{onClick:()=>t("/requests"),style:{background:"none",border:"none",cursor:"pointer"},children:p.jsx(lu,{size:19,color:P.mut})})]})]}),p.jsxs("p",{style:{fontFamily:Hi,color:P.mut,fontSize:13.5,margin:"20px 0 2px"},children:["Namaskara, ",d]}),p.jsx("h1",{style:{fontFamily:Zs,fontWeight:800,fontSize:26,margin:0,color:P.ink,letterSpacing:"-0.02em"},children:i?`You're on call for ${(e==null?void 0:e.city)||"your city"}.`:"Ready when you are."}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"26px 0 8px"},children:[p.jsxs("div",{style:{position:"relative",width:148,height:148},children:[i&&p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"rs-pulse",style:{animationDelay:"0s"}}),p.jsx("span",{className:"rs-pulse",style:{animationDelay:"1.1s"}})]}),p.jsxs("button",{onClick:g,disabled:f,"aria-pressed":i,style:{position:"absolute",inset:8,borderRadius:"50%",background:i?P.oxblood:"#fff",border:`2px solid ${i?P.oxbloodDark:P.line}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",gap:4,transition:"background .25s ease",boxShadow:i?"0 8px 24px rgba(122,22,38,.35)":"0 4px 14px rgba(23,21,26,.08)"},children:[p.jsx(Ka,{size:40,color:i?"#fff":P.oxblood,fill:i?"#fff":"none",strokeWidth:1.7}),p.jsx("span",{style:{fontFamily:Zs,fontWeight:800,fontSize:13,color:i?"#fff":P.ink,letterSpacing:"0.06em"},children:i?"ON CALL":"OFF"})]})]}),p.jsx("p",{style:{fontFamily:Hi,fontSize:12.5,color:P.faint,marginTop:10,textAlign:"center",maxWidth:250},children:i?`Blood banks can ping you for ${v} compatible emergencies within ${T} km.`:"Turn on to receive emergency pings from verified blood banks."})]}),p.jsxs("div",{style:{display:"flex",gap:10,marginTop:14},children:[p.jsxs(Ze,{style:{flex:1,padding:12},children:[p.jsx("p",{style:{fontFamily:Hi,fontSize:11,color:P.faint,margin:0,textTransform:"uppercase",letterSpacing:".05em"},children:"Your group"}),p.jsx("p",{style:{fontFamily:Zs,fontWeight:800,fontSize:22,margin:"2px 0 0",color:P.oxblood},children:v})]}),p.jsxs(Ze,{style:{flex:1,padding:12},children:[p.jsx("p",{style:{fontFamily:Hi,fontSize:11,color:P.faint,margin:0,textTransform:"uppercase",letterSpacing:".05em"},children:"Credits"}),p.jsx("p",{style:{fontFamily:Zs,fontWeight:800,fontSize:22,margin:"2px 0 0",color:P.ink},children:y})]}),p.jsxs(Ze,{style:{flex:1.2,padding:12},children:[p.jsx("p",{style:{fontFamily:Hi,fontSize:11,color:P.faint,margin:0,textTransform:"uppercase",letterSpacing:".05em"},children:"Eligibility"}),p.jsxs("p",{style:{fontFamily:Zs,fontWeight:700,fontSize:14,margin:"5px 0 0",color:S?P.leaf:P.arterial,display:"flex",alignItems:"center",gap:5},children:[p.jsx(Ya,{size:15})," ",S?"Eligible now":w?`Eligible ${w}`:"Not eligible"]})]})]}),A.length>0?A.slice(0,2).map(_=>{var C;return p.jsxs(Ze,{style:{marginTop:12,display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},onClick:()=>t(`/alert/${_.id}`),children:[p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:Zs,fontWeight:700,fontSize:14.5,margin:0,color:P.ink},children:[_.hospital_name," · ",_.units_needed," units needed"]}),p.jsxs("p",{style:{fontFamily:Hi,fontSize:12.5,color:P.mut,margin:"3px 0 0"},children:[_.city," · ",(C=_.distance_km)==null?void 0:C.toFixed(1)," km away"]})]}),p.jsx(vS,{size:18,color:P.faint})]},_.id)}):p.jsx(Ze,{style:{marginTop:12},children:p.jsx("p",{style:{fontFamily:Hi,fontSize:13,color:P.mut,margin:0,textAlign:"center"},children:"No active requests near you right now."})}),c&&p.jsx("p",{style:{fontFamily:Hi,fontSize:12,color:P.arterial,textAlign:"center",marginTop:12},children:c}),p.jsx(Is,{})]})}const ts="'Public Sans', 'Segoe UI', system-ui, sans-serif",Qs="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function TL(){var g;const{requestId:t}=$y(),e=qt(),{user:n}=cr(),[i,r]=z.useState(null),[s,o]=z.useState(!0),[a,l]=z.useState(""),[c,u]=z.useState(!1);z.useEffect(()=>{f()},[t]);const f=async()=>{var d;try{const{data:v}=await pt.get("/donor/requests"),S=(d=(v.data||v).requests)==null?void 0:d.find(w=>w.id===t);S?r(S):l("Request not found")}catch{l("Failed to load request details")}finally{o(!1)}},h=async()=>{var d,v;u(!0);try{await pt.post(`/donor/respond/${t}`,{status:"accepted"}),e(`/on-the-way/${t}`)}catch(y){l(((v=(d=y.response)==null?void 0:d.data)==null?void 0:v.error)||"Failed to accept request")}finally{u(!1)}},m=async()=>{var d,v;u(!0);try{await pt.post(`/donor/respond/${t}`,{status:"declined"}),e("/home")}catch(y){l(((v=(d=y.response)==null?void 0:d.data)==null?void 0:v.error)||"Failed to decline request")}finally{u(!1)}};if(s)return p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:ts},children:"Loading..."});if(!i)return p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:ts,color:P.mut},children:"Request not found"});const x=(n==null?void 0:n.blood_group)||"—",E=(rh[i.blood_group]||[]).includes(x);return p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[p.jsx(ES,{size:16,color:P.arterial}),p.jsx("span",{style:{fontFamily:Qs,fontWeight:800,fontSize:13,letterSpacing:".12em",color:P.arterial},children:"EMERGENCY PING"})]}),p.jsxs(Ze,{style:{marginTop:14,borderColor:"#F0BFC8",background:"#FFF9FA",padding:18},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:ts,fontSize:12,color:P.mut,margin:0},children:"Patient needs"}),p.jsx("p",{style:{fontFamily:Qs,fontWeight:800,fontSize:40,lineHeight:1,margin:"4px 0 0",color:P.arterial},children:i.blood_group})]}),p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx(Uo,{tone:"red",children:i.urgency}),p.jsxs("p",{style:{fontFamily:Qs,fontWeight:700,fontSize:15,margin:"8px 0 0",color:P.ink},children:[i.units_needed," units"]}),p.jsxs("p",{style:{fontFamily:ts,fontSize:12,color:P.mut,margin:"2px 0 0",display:"flex",alignItems:"center",gap:4,justifyContent:"flex-end"},children:[p.jsx(Mm,{size:12})," ",i.needed_by?new Date(i.needed_by).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"ASAP"]})]})]}),p.jsx("div",{style:{height:1,background:"#F0BFC8",margin:"14px 0"}}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[p.jsx(_S,{size:15,color:P.oxblood}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:Qs,fontWeight:700,fontSize:14.5,margin:0,color:P.ink},children:i.hospital_name}),p.jsxs("p",{style:{fontFamily:ts,fontSize:12,color:P.mut,margin:"1px 0 0"},children:[i.hospital_address," · ",(g=i.distance_km)==null?void 0:g.toFixed(1)," km from you"]})]})]}),p.jsxs("div",{style:{marginTop:14,display:"flex",alignItems:"center",justifyContent:"center",gap:10,background:"#fff",border:`1px dashed ${P.line}`,borderRadius:12,padding:"10px 12px"},children:[p.jsxs("span",{style:{fontFamily:Qs,fontWeight:800,color:P.oxblood,fontSize:15},children:["Your ",x]}),p.jsx(gS,{size:15,color:P.faint}),p.jsxs("span",{style:{fontFamily:Qs,fontWeight:800,color:P.ink,fontSize:15},children:["Patient ",i.blood_group]}),p.jsx(Uo,{tone:E?"green":"red",children:E?"Compatible":"Not compatible"})]})]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:16},children:[p.jsxs(gn,{kind:"critical",full:!0,onClick:h,disabled:c||!E,children:[p.jsx(Ka,{size:16})," Accept — I can donate"]}),p.jsx(gn,{kind:"ghost",full:!0,onClick:m,disabled:c,children:"Can't donate right now"})]}),p.jsxs("p",{style:{fontFamily:ts,fontSize:11.5,color:P.faint,textAlign:"center",marginTop:12},children:["Declining never affects your credits. ",i.donors_pinged||"—"," compatible donors were pinged."]}),a&&p.jsx("p",{style:{fontFamily:ts,fontSize:12,color:P.arterial,textAlign:"center",marginTop:8},children:a}),p.jsx(Is,{})]})}const ns="'Public Sans', 'Segoe UI', system-ui, sans-serif",ic="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function bL(){const{requestId:t}=$y(),e=qt(),[n,i]=z.useState(null),[r,s]=z.useState(!0),[o,a]=z.useState(""),[l,c]=z.useState(!1),[u,f]=z.useState(!1);z.useEffect(()=>{h()},[t]);const h=async()=>{var g;try{const{data:d}=await pt.get("/donor/requests"),y=(g=(d.data||d).requests)==null?void 0:g.find(S=>S.id===t);i(y||null),y&&a(`RS-DONOR-${y.id}`)}catch{}finally{s(!1)}},m=()=>{if(!(n!=null&&n.latitude)||!(n!=null&&n.longitude))return;const g=`https://www.google.com/maps/dir/?api=1&destination=${n.latitude},${n.longitude}`;window.open(g,"_blank")},x=()=>{n!=null&&n.hospital_phone&&(window.location.href=`tel:${n.hospital_phone}`)},E=async()=>{var g,d;try{f(!0),await pt.post(`/donor/arrived/${t}`),c(!0)}catch(v){alert(((d=(g=v.response)==null?void 0:g.data)==null?void 0:d.error)||"Failed to mark arrival")}finally{f(!1)}};return r?p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:ns},children:"Loading..."}):p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("button",{onClick:()=>e("/home"),style:{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,marginBottom:12,fontFamily:ns,fontSize:13,color:P.mut},children:[p.jsx(Xo,{size:16})," Back to home"]}),p.jsxs(Ze,{style:{background:P.leafSoft,borderColor:"#CBE3D8",display:"flex",gap:10,alignItems:"center"},children:[p.jsx(Ya,{size:22,color:P.leaf}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:ic,fontWeight:800,fontSize:15,margin:0,color:P.leaf},children:"You're confirmed — donor"}),p.jsx("p",{style:{fontFamily:ns,fontSize:12.5,color:"#3E6B58",margin:"2px 0 0"},children:"The blood bank has been notified you're coming."})]})]}),p.jsxs(Ze,{style:{marginTop:12},children:[p.jsx("p",{style:{fontFamily:ic,fontWeight:800,fontSize:16,margin:0,color:P.ink},children:(n==null?void 0:n.hospital_name)||"Hospital"}),p.jsxs("p",{style:{fontFamily:ns,fontSize:12.5,color:P.mut,margin:"3px 0 12px"},children:[(n==null?void 0:n.address)||""," · ref ",(n==null?void 0:n.ref_code)||"—"]}),p.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[p.jsxs(gn,{kind:"primary",small:!0,onClick:m,children:[p.jsx(cL,{size:14})," Directions"]}),p.jsxs(gn,{kind:"ghost",small:!0,onClick:x,children:[p.jsx(wm,{size:14})," Call blood bank"]}),p.jsx(gn,{kind:"primary",small:!0,onClick:E,disabled:l||u,children:l?"Arrived ✓":u?"Marking...":"I've Arrived"})]})]}),p.jsxs(Ze,{style:{marginTop:12},children:[p.jsx("p",{style:{fontFamily:ns,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:".06em",margin:0},children:"Before you go"}),["Carry a photo ID (Aadhaar or DL)","Eat a proper meal, drink water","No alcohol in the last 24 hours"].map(g=>p.jsxs("p",{style:{fontFamily:ns,fontSize:13.5,color:P.ink,margin:"9px 0 0",display:"flex",gap:8,alignItems:"center"},children:[p.jsx(Ya,{size:15,color:P.leaf})," ",g]},g))]}),p.jsxs(Ze,{style:{marginTop:12,display:"flex",alignItems:"center",gap:14},children:[p.jsx("div",{style:{width:74,height:74,borderRadius:12,border:`1.5px solid ${P.line}`,display:"flex",alignItems:"center",justifyContent:"center",background:"#fff"},children:p.jsx(SS,{size:46,color:P.ink})}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:ic,fontWeight:700,fontSize:14.5,margin:0,color:P.ink},children:"Show this at the desk"}),p.jsx("p",{style:{fontFamily:ns,fontSize:12.5,color:P.mut,margin:"3px 0 0"},children:"Staff will scan it to verify your donation."}),p.jsx("p",{style:{fontFamily:ic,fontWeight:800,fontSize:13,color:P.oxblood,margin:"6px 0 0"},children:"+100 credits on verification"})]})]}),p.jsx("div",{style:{marginTop:14},children:p.jsx(gn,{kind:"ghost",full:!0,onClick:()=>e("/home"),children:"Back to home"})}),p.jsx(Is,{})]})}const Sr="'Public Sans', 'Segoe UI', system-ui, sans-serif",rc="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function AL(){const[t,e]=z.useState(0),[n,i]=z.useState([]),[r,s]=z.useState(!0),[o,a]=z.useState("");z.useEffect(()=>{l()},[]);const l=async()=>{try{const{data:c}=await pt.get("/donor/credits"),u=c.data||c;e(u.balance||0),i(u.history||[])}catch{a("Failed to load credits")}finally{s(!1)}};return r?p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:Sr},children:"Loading..."}):p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsx("h2",{style:{fontFamily:rc,fontWeight:800,fontSize:22,margin:0,color:P.ink},children:"Credits"}),p.jsx("p",{style:{fontFamily:Sr,fontSize:13,color:P.mut,margin:"4px 0 14px"},children:"Your digital replacement card — no paper, no lost cards."}),p.jsxs(Ze,{style:{background:P.oxblood,borderColor:P.oxbloodDark},children:[p.jsx("p",{style:{fontFamily:Sr,fontSize:11.5,color:"#E8B9C2",margin:0,textTransform:"uppercase",letterSpacing:".08em"},children:"Balance"}),p.jsx("p",{style:{fontFamily:rc,fontWeight:800,fontSize:42,color:"#fff",margin:"2px 0 0",lineHeight:1},children:t}),p.jsx("p",{style:{fontFamily:Sr,fontSize:12.5,color:"#E8B9C2",margin:"10px 0 0"},children:"100 credits waive 1 replacement unit — for you or 4 registered family members."})]}),p.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[p.jsx(gn,{kind:"ghost",small:!0,full:!0,children:"Redeem for family"}),p.jsx(gn,{kind:"ghost",small:!0,full:!0,children:"Add family member"})]}),p.jsx("p",{style:{fontFamily:Sr,fontSize:11,color:P.faint,textTransform:"uppercase",letterSpacing:".06em",margin:"18px 0 8px"},children:"Ledger"}),o&&p.jsx("p",{style:{fontFamily:Sr,fontSize:12,color:P.arterial},children:o}),n.length===0?p.jsx(Ze,{children:p.jsx("p",{style:{fontFamily:Sr,fontSize:13,color:P.mut,margin:0,textAlign:"center"},children:"No credit transactions yet. Donate to earn credits!"})}):n.map(c=>p.jsxs(Ze,{style:{marginBottom:8,padding:13,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:rc,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:c.description}),p.jsx("p",{style:{fontFamily:Sr,fontSize:11.5,color:P.faint,margin:"2px 0 0"},children:new Date(c.created_at).toLocaleDateString()})]}),p.jsxs("span",{style:{fontFamily:rc,fontWeight:800,fontSize:15,color:c.type==="earned"?P.leaf:P.arterial},children:[c.type==="earned"?"+":"−",Math.abs(c.amount)]})]},c.id)),p.jsx(Is,{})]})}function CL(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;s++)r[s]=i.charCodeAt(s);return r}function TS(){return typeof window<"u"&&"Notification"in window}async function RL(t,e,n={}){if(!TS())throw new Error("Notifications are not supported in this browser");let i=Notification.permission;if(i==="default"&&(i=await Notification.requestPermission()),i!=="granted")throw new Error("Notification permission denied");if("serviceWorker"in navigator){const r=await navigator.serviceWorker.ready.catch(()=>null);if(r!=null&&r.showNotification)return await r.showNotification(t,{body:e,icon:"/drop-icon.svg",badge:"/drop-icon.svg",...n}),{via:"serviceWorker"}}return new Notification(t,{body:e,icon:"/drop-icon.svg",...n}),{via:"Notification"}}async function PL(){var o;if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push messaging is not supported");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission denied");const{data:e}=await pt.get("/push/vapid-public-key"),n=(o=e.data)==null?void 0:o.publicKey;if(!n)throw new Error("VAPID public key not available");const i=await navigator.serviceWorker.ready;let r=await i.pushManager.getSubscription();r||(r=await i.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:CL(n)}));const s=r.toJSON();return await pt.post("/push/subscribe",{endpoint:s.endpoint,keys:s.keys}),{subscribed:!0}}async function LL(t){const{data:e}=await pt.post("/push/test",{body:t});return e}const wi="'Public Sans', 'Segoe UI', system-ui, sans-serif",On="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function DL(){const t=qt(),{user:e,logout:n}=cr(),[i,r]=z.useState([]),[s,o]=z.useState(!0),[a,l]=z.useState((e==null?void 0:e.ping_radius_km)||10),[c,u]=z.useState(""),[f,h]=z.useState(!1);z.useEffect(()=>{m()},[]);const m=async()=>{try{const{data:w}=await pt.get("/donor/history"),T=w.data||w;r(T.donations||[])}catch{}finally{o(!1)}},x=async w=>{l(w);try{await pt.patch("/donor/profile",{ping_radius_km:w})}catch{}},E=(e==null?void 0:e.name)||"Donor",g=(e==null?void 0:e.blood_group)||"—",d=(e==null?void 0:e.is_verified)||!1,v=e==null?void 0:e.next_eligible_date,y=i.length,S=e!=null&&e.created_at?new Date(e.created_at).toLocaleDateString(void 0,{month:"short",year:"numeric"}):"—";return p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsx("h2",{style:{fontFamily:On,fontWeight:800,fontSize:22,margin:0,color:P.ink},children:"Profile"}),p.jsxs(Ze,{style:{marginTop:14,display:"flex",gap:14,alignItems:"center"},children:[p.jsx("div",{style:{width:52,height:52,borderRadius:"50%",background:P.arterialSoft,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:On,fontWeight:800,color:P.oxblood,fontSize:18},children:E.charAt(0).toUpperCase()}),p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:On,fontWeight:800,fontSize:16,margin:0,color:P.ink},children:[E," · ",g]}),p.jsxs("p",{style:{fontFamily:wi,fontSize:12.5,color:P.mut,margin:"2px 0 0"},children:["Donor since ",S," · ",y," donations · ",(e==null?void 0:e.city)||""]})]})]}),p.jsxs(Ze,{style:{marginTop:10,padding:13,display:"flex",gap:12,alignItems:"center"},children:[p.jsx(fL,{size:17,color:d?P.leaf:P.faint}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:On,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:d?"Verified via Aadhaar OTP":"Verification pending"}),p.jsx("p",{style:{fontFamily:wi,fontSize:12,color:P.faint,margin:"2px 0 0"},children:d?"Identity confirmed":"Complete Aadhaar verification to get full access"})]})]}),p.jsxs(Ze,{style:{marginTop:10,padding:13,display:"flex",gap:12,alignItems:"center"},children:[p.jsx(Mm,{size:17,color:P.mut}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:On,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:"Next eligible date"}),p.jsx("p",{style:{fontFamily:wi,fontSize:12,color:P.faint,margin:"2px 0 0"},children:v?new Date(v).toLocaleDateString():"Eligible now (90-day gap complete)"})]})]}),p.jsxs(Ze,{style:{marginTop:10,padding:13,display:"flex",gap:12,alignItems:"center"},children:[p.jsx(iL,{size:17,color:P.mut}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:On,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:"Language"}),p.jsx("p",{style:{fontFamily:wi,fontSize:12,color:P.faint,margin:"2px 0 0"},children:"English · ಕನ್ನಡ available"})]})]}),p.jsxs(Ze,{style:{marginTop:10,padding:13},children:[p.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",marginBottom:10},children:[p.jsx(lu,{size:17,color:P.oxblood}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:On,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:"Notifications"}),p.jsx("p",{style:{fontFamily:wi,fontSize:12,color:P.faint,margin:"2px 0 0"},children:"Local alerts always; push when VAPID is configured"})]})]}),TS()?p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[p.jsx("button",{type:"button",disabled:f,onClick:async()=>{h(!0),u("");try{await RL("RaktaSetu","Local notification works — you can receive alerts on this device."),u("Local notification sent.")}catch(w){u(w.message||"Failed")}finally{h(!1)}},style:{fontFamily:On,fontWeight:700,fontSize:12.5,padding:"10px 0",borderRadius:10,background:P.card,color:P.ink,border:`1px solid ${P.line}`,cursor:"pointer"},children:"Test local notification"}),p.jsx("button",{type:"button",disabled:f,onClick:async()=>{var w,T;h(!0),u("");try{await PL(),u("Push subscription saved.")}catch(A){u(((T=(w=A.response)==null?void 0:w.data)==null?void 0:T.error)||A.message||"Push unavailable")}finally{h(!1)}},style:{fontFamily:On,fontWeight:700,fontSize:12.5,padding:"10px 0",borderRadius:10,background:P.oxblood,color:"#fff",border:"none",cursor:"pointer"},children:"Enable push notifications"}),p.jsx("button",{type:"button",disabled:f,onClick:async()=>{var w,T;h(!0),u("");try{await LL("Server push test from RaktaSetu"),u("Server push sent (check OS notification).")}catch(A){u(((T=(w=A.response)==null?void 0:w.data)==null?void 0:T.error)||A.message||"Server push unavailable")}finally{h(!1)}},style:{fontFamily:On,fontWeight:700,fontSize:12.5,padding:"10px 0",borderRadius:10,background:P.card,color:P.mut,border:`1px solid ${P.line}`,cursor:"pointer"},children:"Test server push"}),c&&p.jsx("p",{style:{fontFamily:wi,fontSize:12,color:P.mut,margin:0},children:c})]}):p.jsx("p",{style:{fontFamily:wi,fontSize:12,color:P.faint,margin:0},children:"This browser does not support notifications."})]}),p.jsxs(Ze,{style:{marginTop:10,padding:13},children:[p.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",marginBottom:10},children:[p.jsx(lu,{size:17,color:P.mut}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:On,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:"Ping radius"}),p.jsx("p",{style:{fontFamily:wi,fontSize:12,color:P.faint,margin:"2px 0 0"},children:"Critical requests may reach farther"})]})]}),p.jsx("div",{style:{display:"flex",gap:8},children:[3,5,10].map(w=>p.jsxs("button",{onClick:()=>x(w),style:{flex:1,fontFamily:On,fontWeight:700,fontSize:12.5,padding:"9px 0",borderRadius:10,background:a===w?P.oxblood:P.card,color:a===w?"#fff":P.mut,border:`1px solid ${a===w?P.oxbloodDark:P.line}`,cursor:"pointer"},children:[w," km"]},w))})]}),p.jsxs(Ze,{style:{marginTop:10,padding:13,display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},onClick:()=>t("/history"),children:[p.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[p.jsx(tL,{size:17,color:P.mut}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:On,fontWeight:700,fontSize:13.5,margin:0,color:P.ink},children:"Donation history"}),p.jsxs("p",{style:{fontFamily:wi,fontSize:12,color:P.faint,margin:"2px 0 0"},children:[y," donations recorded"]})]})]}),p.jsx(gS,{size:16,color:P.faint})]}),p.jsx("div",{style:{marginTop:20,textAlign:"center"},children:p.jsx("button",{onClick:()=>{n(),t("/login")},style:{fontFamily:wi,fontSize:13,color:P.arterial,background:"none",border:"none",cursor:"pointer"},children:"Sign out"})}),p.jsx(Is,{})]})}const is="'Public Sans', 'Segoe UI', system-ui, sans-serif",Qd="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function IL(){const t=qt(),[e,n]=z.useState([]),[i,r]=z.useState(!0),[s,o]=z.useState("");z.useEffect(()=>{a()},[]);const a=async()=>{try{const{data:l}=await pt.get("/donor/history"),c=l.data||l;n(c.donations||[])}catch{o("Failed to load donation history")}finally{r(!1)}};return i?p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:is},children:"Loading..."}):p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("button",{onClick:()=>t("/profile"),style:{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,marginBottom:16,fontFamily:is,fontSize:13,color:P.mut},children:[p.jsx(Xo,{size:16})," Back to profile"]}),p.jsx("h2",{style:{fontFamily:Qd,fontWeight:800,fontSize:22,margin:0,color:P.ink},children:"Donation history"}),p.jsx("p",{style:{fontFamily:is,fontSize:13,color:P.mut,margin:"4px 0 14px"},children:"Your verified donations and earned credits"}),s&&p.jsx("p",{style:{fontFamily:is,fontSize:12,color:P.arterial},children:s}),e.length===0?p.jsx(Ze,{children:p.jsx("p",{style:{fontFamily:is,fontSize:13,color:P.mut,margin:0,textAlign:"center"},children:"No donations recorded yet. Accept a request to start saving lives!"})}):e.map(l=>p.jsx(Ze,{style:{marginBottom:10,padding:14},children:p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:Qd,fontWeight:700,fontSize:14,margin:0,color:P.ink},children:l.hospital_name||"Unknown hospital"}),p.jsxs("p",{style:{fontFamily:is,fontSize:12,color:P.mut,margin:"2px 0 0"},children:[l.blood_group," · ",l.units," unit",l.units>1?"s":""]}),p.jsxs("p",{style:{fontFamily:is,fontSize:11.5,color:P.faint,margin:"4px 0 0"},children:["Verified on ",new Date(l.verified_at).toLocaleDateString()]})]}),p.jsxs("span",{style:{fontFamily:Qd,fontWeight:800,fontSize:14,color:P.leaf},children:["+",l.credits_earned]})]})},l.id)),p.jsx(Is,{})]})}const Vi="'Public Sans', 'Segoe UI', system-ui, sans-serif",ef="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function NL(){const t=qt(),[e,n]=z.useState([]),[i,r]=z.useState(!0),[s,o]=z.useState(""),[a,l]=z.useState("list");z.useEffect(()=>{c()},[]);const c=async()=>{try{const{data:u}=await pt.get("/donor/requests"),f=u.data||u;n(f.requests||[])}catch{o("Failed to load requests")}finally{r(!1)}};return i?p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:Vi},children:"Loading..."}):p.jsxs("div",{style:{padding:"18px 18px 90px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx("h2",{style:{fontFamily:ef,fontWeight:800,fontSize:22,margin:0,color:P.ink},children:"Nearby requests"}),p.jsxs("div",{style:{display:"flex",gap:6,background:P.card,border:`1px solid ${P.line}`,borderRadius:10,padding:3},children:[p.jsxs("button",{onClick:()=>l("list"),style:{padding:"6px 10px",borderRadius:8,border:"none",cursor:"pointer",background:a==="list"?P.oxblood:"transparent",color:a==="list"?"#fff":P.mut,display:"flex",alignItems:"center",gap:4,fontFamily:Vi,fontSize:12,fontWeight:600},children:[p.jsx(rL,{size:14})," List"]}),p.jsxs("button",{onClick:()=>l("map"),style:{padding:"6px 10px",borderRadius:8,border:"none",cursor:"pointer",background:a==="map"?P.oxblood:"transparent",color:a==="map"?"#fff":P.mut,display:"flex",alignItems:"center",gap:4,fontFamily:Vi,fontSize:12,fontWeight:600},children:[p.jsx(aL,{size:14})," Map"]})]})]}),p.jsx("p",{style:{fontFamily:Vi,fontSize:13,color:P.mut,margin:"4px 0 14px"},children:"Active blood requests near your location"}),s&&p.jsx("p",{style:{fontFamily:Vi,fontSize:12,color:P.arterial},children:s}),e.length===0?p.jsx(Ze,{children:p.jsx("p",{style:{fontFamily:Vi,fontSize:13,color:P.mut,margin:0,textAlign:"center"},children:"No active requests near you. Turn on your on-call toggle to get notified!"})}):e.map(u=>{var f;return p.jsx(Ze,{style:{marginBottom:10,cursor:"pointer"},onClick:()=>t(`/alert/${u.id}`),children:p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[p.jsx("span",{style:{fontFamily:ef,fontWeight:800,fontSize:22,color:P.arterial},children:u.blood_group}),p.jsx("span",{style:{fontFamily:Vi,fontSize:11,color:u.urgency==="critical"?P.arterial:u.urgency==="urgent"?P.gold:P.mut,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em"},children:u.urgency})]}),p.jsx("p",{style:{fontFamily:ef,fontWeight:700,fontSize:14,margin:0,color:P.ink},children:u.hospital_name}),p.jsxs("p",{style:{fontFamily:Vi,fontSize:12,color:P.mut,margin:"2px 0 0"},children:[u.hospital_address||u.address||u.hospital_name," · ",(f=u.distance_km)==null?void 0:f.toFixed(1)," km"]}),p.jsxs("p",{style:{fontFamily:Vi,fontSize:12,color:P.faint,margin:"4px 0 0",display:"flex",alignItems:"center",gap:4},children:[p.jsx(Mm,{size:12})," ",u.units_needed," units · ",u.needed_by?new Date(u.needed_by).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"ASAP"]})]}),p.jsx(vS,{size:18,color:P.faint})]})},u.id)}),p.jsx(Is,{})]})}const Gi="'Public Sans', 'Segoe UI', system-ui, sans-serif",sc="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function FL(){const t=qt(),e=lr(),{user:n,logout:i}=cr(),[r,s]=z.useState("board"),[o,a]=z.useState([]),[l,c]=z.useState(!0),[u,f]=z.useState("");z.useEffect(()=>{const x=e.pathname;x.includes("/new-request")?s("new"):x.includes("/verify")?s("verify"):s("board")},[e]),z.useEffect(()=>{h();const x=setInterval(h,15e3);return()=>clearInterval(x)},[]);const h=async()=>{try{const{data:x}=await pt.get("/hospital/dashboard"),E=x.data||x;a(E.requests||[])}catch{f("Failed to load live board")}finally{c(!1)}},m=[["board","/console","Live board"],["new","/console/new-request","New request"],["verify","/console/verify","Verify donor"]];return p.jsxs("div",{style:{minHeight:"100vh",background:P.consoleBg,color:"#F0EEE9",maxWidth:430,margin:"0 auto",position:"relative"},children:[p.jsxs("div",{style:{padding:"10px 16px 0",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx(wS,{size:22,dark:!0}),p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx("p",{style:{fontFamily:Gi,fontSize:12,color:P.consoleMut,margin:0},children:(n==null?void 0:n.name)||"Hospital"}),p.jsx("p",{style:{fontFamily:Gi,fontSize:10.5,color:"#5C6270",margin:0},children:"Blood bank console"})]})]}),p.jsx("div",{style:{display:"flex",gap:6,padding:"12px 16px 0"},children:m.map(([x,E,g])=>p.jsx("button",{onClick:()=>t(E),style:{fontFamily:sc,fontWeight:700,fontSize:12,padding:"7px 12px",borderRadius:99,cursor:"pointer",background:r===x?"#F0EEE9":"transparent",color:r===x?P.ink:P.consoleMut,border:`1px solid ${r===x?"#F0EEE9":P.consoleLine}`},children:g},x))}),r==="board"&&p.jsxs("div",{style:{padding:"16px 16px 20px"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[p.jsxs("p",{style:{fontFamily:Gi,fontSize:12,color:P.consoleMut,margin:0},children:["Live board · ",new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]}),p.jsx(Uo,{tone:"green",dark:!0,children:"Bank verified"})]}),l?p.jsx("p",{style:{fontFamily:Gi,fontSize:13,color:P.consoleMut,textAlign:"center"},children:"Loading..."}):u?p.jsx("p",{style:{fontFamily:Gi,fontSize:13,color:"#E4506B",textAlign:"center"},children:u}):o.length===0?p.jsx(Ze,{dark:!0,children:p.jsx("p",{style:{fontFamily:Gi,fontSize:13,color:P.consoleMut,margin:0,textAlign:"center"},children:"No active requests. Create a new request to find donors."})}):o.map(x=>p.jsxs(Ze,{dark:!0,style:{marginBottom:10},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[p.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[p.jsx("span",{style:{fontFamily:sc,fontWeight:800,fontSize:26,color:"#E4506B"},children:x.blood_group}),p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:sc,fontWeight:700,fontSize:14,margin:0,color:"#F0EEE9"},children:[x.units_needed," units · ref ",x.ref_code]}),p.jsxs("p",{style:{fontFamily:Gi,fontSize:11.5,color:P.consoleMut,margin:"2px 0 0"},children:["Broadcast ",new Date(x.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," · ",x.radius_km," km radius"]})]})]}),p.jsx(Uo,{tone:x.urgency==="critical"?"red":x.urgency==="urgent"?"gold":"line",dark:!0,children:x.urgency})]}),p.jsx("div",{style:{height:6,borderRadius:99,background:P.consoleLine,margin:"14px 0 8px",overflow:"hidden"},children:p.jsx("div",{style:{width:`${Math.min(100,x.filled_units/x.units_needed*100)}%`,height:"100%",background:"#E4506B"}})}),p.jsx("div",{style:{display:"flex",gap:14},children:[[x.donors_pinged||"0","pinged"],[x.accepted_count||"0","accepted"],[x.arrived_count||"0","arrived"],[`${x.filled_units||0} / ${x.units_needed}`,"collected"]].map(([E,g])=>p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:sc,fontWeight:800,fontSize:15,margin:0,color:"#F0EEE9"},children:E}),p.jsx("p",{style:{fontFamily:Gi,fontSize:10.5,color:P.consoleMut,margin:0,textTransform:"uppercase",letterSpacing:".05em"},children:g})]},g))})]},x.id)),p.jsx("div",{style:{marginTop:16,textAlign:"center"},children:p.jsx("button",{onClick:()=>{i(),t("/login")},style:{fontFamily:Gi,fontSize:13,color:"#E4506B",background:"none",border:"none",cursor:"pointer"},children:"Sign out"})})]})]})}const rs="'Public Sans', 'Segoe UI', system-ui, sans-serif",ss="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function UL(){const t=qt(),[e,n]=z.useState("B+"),[i,r]=z.useState(2),[s,o]=z.useState("Critical"),[a,l]=z.useState(5),[c,u]=z.useState(!1),[f,h]=z.useState(!1),[m,x]=z.useState(""),[E,g]=z.useState(0),d=gb.includes(e),v=d?25:a;z.useEffect(()=>{g(((T,A)=>{const _=A===3?.35:A===5?.6:1,C=(rh[T]||[]).reduce((L,D)=>L+50,0);return Math.max(1,Math.round(C*_))})(e,v))},[e,v]);const y=async()=>{var w,T;h(!0),x("");try{await pt.post("/hospital/requests",{blood_group:e,units_needed:i,urgency:s.toLowerCase(),radius_km:v}),u(!0)}catch(A){x(((T=(w=A.response)==null?void 0:w.data)==null?void 0:T.error)||"Failed to broadcast request")}finally{h(!1)}},S=({children:w})=>p.jsx("p",{style:{fontFamily:rs,fontSize:11,color:P.consoleMut,textTransform:"uppercase",letterSpacing:".07em",margin:"16px 0 8px"},children:w});return c?p.jsxs("div",{style:{minHeight:"100vh",background:P.consoleBg,padding:"40px 20px",textAlign:"center",maxWidth:430,margin:"0 auto"},children:[p.jsx(Ya,{size:44,color:"#3DBD8A",style:{margin:"0 auto"}}),p.jsx("p",{style:{fontFamily:ss,fontWeight:800,fontSize:18,color:"#F0EEE9",margin:"14px 0 4px"},children:"Request broadcast"}),p.jsxs("p",{style:{fontFamily:rs,fontSize:13,color:P.consoleMut,margin:0},children:[E," compatible donors pinged for ",e," within ",v," km. Track responses on the live board."]}),p.jsx("div",{style:{marginTop:18},children:p.jsx(gn,{kind:"ghost",dark:!0,small:!0,onClick:()=>u(!1),children:"New request"})}),p.jsx("div",{style:{marginTop:12},children:p.jsx(gn,{kind:"ghost",dark:!0,small:!0,onClick:()=>t("/console"),children:"Back to live board"})})]}):p.jsxs("div",{style:{minHeight:"100vh",background:P.consoleBg,padding:"14px 16px 20px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("button",{onClick:()=>t("/console"),style:{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,marginBottom:12,fontFamily:rs,fontSize:13,color:P.consoleMut},children:[p.jsx(Xo,{size:16})," Back to console"]}),p.jsx("p",{style:{fontFamily:ss,fontWeight:800,fontSize:18,color:"#F0EEE9",margin:"0 0 4px"},children:"New request"}),p.jsx("p",{style:{fontFamily:rs,fontSize:12,color:P.consoleMut,margin:"0 0 14px"},children:"Broadcast an emergency blood request to nearby donors"}),m&&p.jsx("p",{style:{fontFamily:rs,fontSize:12,color:"#E4506B",marginBottom:12},children:m}),p.jsx(S,{children:"Patient blood group"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},children:A_.map(w=>p.jsx("button",{onClick:()=>n(w),style:{fontFamily:ss,fontWeight:800,fontSize:15,padding:"10px 0",borderRadius:10,background:e===w?P.arterial:P.consoleCard,color:e===w?"#fff":"#D8D5CF",border:`1px solid ${e===w?"#A50D26":P.consoleLine}`,cursor:"pointer"},children:w},w))}),d&&p.jsxs("p",{style:{fontFamily:rs,fontSize:12,color:"#D9B45C",margin:"8px 0 0",display:"flex",gap:6,alignItems:"center"},children:[p.jsx(pL,{size:13})," Rare group — radius auto-widens to 25 km, marked priority."]}),p.jsx(S,{children:"Units needed"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[p.jsx("button",{onClick:()=>r(Math.max(1,i-1)),style:{width:38,height:38,borderRadius:10,background:P.consoleCard,border:`1px solid ${P.consoleLine}`,color:"#D8D5CF",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(lL,{size:16})}),p.jsx("span",{style:{fontFamily:ss,fontWeight:800,fontSize:24,color:"#F0EEE9",minWidth:28,textAlign:"center"},children:i}),p.jsx("button",{onClick:()=>r(Math.min(6,i+1)),style:{width:38,height:38,borderRadius:10,background:P.consoleCard,border:`1px solid ${P.consoleLine}`,color:"#D8D5CF",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(uL,{size:16})})]}),p.jsx(S,{children:"Urgency"}),p.jsx("div",{style:{display:"flex",gap:8},children:["Scheduled","Urgent","Critical"].map(w=>p.jsx("button",{onClick:()=>o(w),style:{flex:1,fontFamily:ss,fontWeight:700,fontSize:12.5,padding:"9px 0",borderRadius:10,background:s===w?w==="Critical"?P.arterial:"#3A3F4D":P.consoleCard,color:s===w?"#fff":"#B9B6B0",border:`1px solid ${s===w?w==="Critical"?"#A50D26":"#4A5061":P.consoleLine}`,cursor:"pointer"},children:w},w))}),p.jsx(S,{children:"Ping radius"}),p.jsx("div",{style:{display:"flex",gap:8},children:[3,5,10].map(w=>p.jsxs("button",{onClick:()=>l(w),disabled:d,style:{flex:1,fontFamily:ss,fontWeight:700,fontSize:12.5,padding:"9px 0",borderRadius:10,background:a===w?"#3A3F4D":P.consoleCard,color:a===w?"#fff":"#B9B6B0",border:`1px solid ${a===w?"#4A5061":P.consoleLine}`,cursor:d?"not-allowed":"pointer",opacity:d?.4:1},children:[w," km"]},w))}),p.jsxs("div",{style:{marginTop:18,background:"#232734",border:`1px solid ${P.consoleLine}`,borderRadius:12,padding:"12px 14px",display:"flex",gap:10,alignItems:"center"},children:[p.jsx(tp,{size:17,color:"#8FB4E8"}),p.jsxs("p",{style:{fontFamily:rs,fontSize:13,color:"#D8D5CF",margin:0},children:["Will ping ",p.jsxs("b",{style:{fontFamily:ss},children:[E," compatible donors"]})," (",rh[e].join(", "),") on call within ",v," km."]})]}),p.jsx("div",{style:{marginTop:14},children:p.jsxs(gn,{kind:"critical",full:!0,onClick:y,disabled:f,children:[p.jsx(ES,{size:16})," ",f?"Broadcasting...":"Broadcast request"]})})]})}const Er="'Public Sans', 'Segoe UI', system-ui, sans-serif",tf="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function OL(){const t=qt(),[e,n]=z.useState(""),[i,r]=z.useState(null),[s,o]=z.useState(!1),[a,l]=z.useState(""),[c,u]=z.useState(!1);z.useRef(null);const f=z.useRef(null),h=async()=>{var x,E;if(e.trim()){o(!0),l("");try{const{data:g}=await pt.get(`/hospital/requests?ref=${e.trim()}`),d=g.data||g;d.donor?r(d.donor):l("Donor not found")}catch(g){l(((E=(x=g.response)==null?void 0:x.data)==null?void 0:E.error)||"Failed to find donor")}finally{o(!1)}}},m=async()=>{var x,E;if(i){o(!0);try{await pt.post("/hospital/verify-donation",{donor_id:i.id,request_id:i.request_id}),u(!0)}catch(g){l(((E=(x=g.response)==null?void 0:x.data)==null?void 0:E.error)||"Failed to verify donation")}finally{o(!1)}}};return p.jsxs("div",{style:{minHeight:"100vh",background:P.consoleBg,padding:"14px 16px 20px",maxWidth:430,margin:"0 auto"},children:[p.jsxs("button",{onClick:()=>t("/console"),style:{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,marginBottom:12,fontFamily:Er,fontSize:13,color:P.consoleMut},children:[p.jsx(Xo,{size:16})," Back to console"]}),p.jsx("p",{style:{fontFamily:tf,fontWeight:800,fontSize:18,color:"#F0EEE9",margin:"0 0 4px"},children:"Verify donor"}),p.jsx("p",{style:{fontFamily:Er,fontSize:12,color:P.consoleMut,margin:"0 0 14px"},children:"Scan QR code or enter reference code to verify donation"}),p.jsxs(Ze,{dark:!0,style:{display:"flex",flexDirection:"column",gap:14,alignItems:"center",padding:20},children:[p.jsx("div",{ref:f,style:{width:"100%",maxWidth:280,aspectRatio:"1",borderRadius:12,border:`1.5px dashed ${P.consoleLine}`,display:"flex",alignItems:"center",justifyContent:"center",background:P.consoleCard},children:p.jsx(SS,{size:48,color:"#F0EEE9"})}),p.jsx("p",{style:{fontFamily:Er,fontSize:12,color:P.consoleMut,margin:0,textAlign:"center"},children:"Camera access required for QR scanning. Use manual entry below as fallback."})]}),p.jsxs("div",{style:{marginTop:16},children:[p.jsx("p",{style:{fontFamily:Er,fontSize:11,color:P.consoleMut,textTransform:"uppercase",letterSpacing:".07em",margin:"0 0 8px"},children:"Or enter reference code"}),p.jsxs("div",{style:{display:"flex",gap:8},children:[p.jsx("input",{type:"text",placeholder:"e.g. RS-4821",value:e,onChange:x=>n(x.target.value),onKeyDown:x=>x.key==="Enter"&&h(),style:{flex:1,padding:"12px 14px",borderRadius:12,border:`1px solid ${P.consoleLine}`,fontFamily:Er,fontSize:15,background:P.consoleCard,color:"#F0EEE9"}}),p.jsx(gn,{kind:"ghost",dark:!0,small:!0,onClick:h,disabled:s,children:p.jsx(dL,{size:14})})]})]}),a&&p.jsx("p",{style:{fontFamily:Er,fontSize:12,color:"#E4506B",marginTop:12},children:a}),i&&p.jsxs(Ze,{dark:!0,style:{marginTop:16},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:tf,fontWeight:800,fontSize:16,margin:0,color:"#F0EEE9"},children:[i.name," · ",i.blood_group]}),p.jsxs("p",{style:{fontFamily:Er,fontSize:12,color:P.consoleMut,margin:"3px 0 0"},children:["Ref ",i.ref_code," · accepted ",new Date(i.responded_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," · Aadhaar verified"]})]}),p.jsx(Uo,{tone:"green",dark:!0,children:"Arrived"})]}),p.jsx("div",{style:{height:1,background:P.consoleLine,margin:"13px 0"}}),c?p.jsxs("p",{style:{fontFamily:tf,fontWeight:700,fontSize:14,color:"#3DBD8A",margin:0,display:"flex",gap:8,alignItems:"center"},children:[p.jsx(Ya,{size:17})," Donation confirmed · 100 credits sent to donor"]}):p.jsx(gn,{kind:"green",full:!0,onClick:m,disabled:s,children:s?"Confirming...":"Confirm donation · credit 100 points"})]}),p.jsx("p",{style:{fontFamily:Er,fontSize:11.5,color:P.consoleMut,marginTop:12,lineHeight:1.5},children:"Confirmation closes the loop: donor credits are issued only after bank staff verify the collected unit — the digital version of stamping a donor card."})]})}const $t="'Public Sans', 'Segoe UI', system-ui, sans-serif",$n="'Anek Latin', 'Segoe UI', system-ui, sans-serif";function kL(){const t=qt(),{logout:e}=cr(),[n,i]=z.useState(null),[r,s]=z.useState([]),[o,a]=z.useState([]),[l,c]=z.useState(!0),[u,f]=z.useState(""),[h,m]=z.useState("overview");z.useEffect(()=>{x()},[]);const x=async()=>{var y,S,w,T;try{const[A,_,C]=await Promise.all([pt.get("/admin/stats"),pt.get("/admin/users"),pt.get("/admin/requests")]);i(((y=A.data.data)==null?void 0:y.stats)||A.data.stats),s(((S=_.data.data)==null?void 0:S.users)||_.data.users||[]),a(((w=C.data.data)==null?void 0:w.requests)||C.data.requests||[])}catch(A){f("Failed to load admin data"),((T=A.response)==null?void 0:T.status)===403&&(e(),t("/login"))}finally{c(!1)}};if(l)return p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:$t,color:P.mut},children:"Loading admin dashboard..."});const E=r.filter(y=>y.role==="donor"),g=r.filter(y=>y.role==="hospital"),d=o.filter(y=>y.status==="open"),v=o.filter(y=>y.status==="filled");return p.jsxs("div",{style:{minHeight:"100vh",background:"#0F1115",color:"#F0EEE9",maxWidth:900,margin:"0 auto",padding:"20px 24px 40px"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[p.jsx("button",{onClick:()=>t("/admin"),style:{background:"none",border:"none",cursor:"pointer",color:"#8B909C"},title:"Admin home","aria-label":"Admin home",children:p.jsx(Xo,{size:20})}),p.jsx("h1",{style:{fontFamily:$n,fontWeight:800,fontSize:22,margin:0,color:"#F0EEE9"},children:"Admin Console"})]}),p.jsxs("button",{onClick:()=>{e(),t("/login")},style:{background:"none",border:"none",cursor:"pointer",color:"#E4506B",display:"flex",alignItems:"center",gap:6,fontFamily:$t,fontSize:13},children:[p.jsx(sL,{size:16})," Sign out"]})]}),u&&p.jsx("p",{style:{fontFamily:$t,fontSize:13,color:"#E4506B",marginBottom:16},children:u}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:12,marginBottom:24},children:[p.jsx(Ze,{dark:!0,style:{background:"#1D2028",borderColor:"#2B2F3A"},children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[p.jsx(tp,{size:20,color:"#3DBD8A"}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:$t,fontSize:11,color:"#8B909C",margin:0},children:"Total Donors"}),p.jsx("p",{style:{fontFamily:$n,fontWeight:800,fontSize:28,margin:"2px 0 0",color:"#F0EEE9"},children:(n==null?void 0:n.total_donors)||0})]})]})}),p.jsx(Ze,{dark:!0,style:{background:"#1D2028",borderColor:"#2B2F3A"},children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[p.jsx(Ax,{size:20,color:"#8FB4E8"}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:$t,fontSize:11,color:"#8B909C",margin:0},children:"Hospitals"}),p.jsx("p",{style:{fontFamily:$n,fontWeight:800,fontSize:28,margin:"2px 0 0",color:"#F0EEE9"},children:(n==null?void 0:n.total_hospitals)||0})]})]})}),p.jsx(Ze,{dark:!0,style:{background:"#1D2028",borderColor:"#2B2F3A"},children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[p.jsx(Ka,{size:20,color:"#E4506B"}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:$t,fontSize:11,color:"#8B909C",margin:0},children:"Active Requests"}),p.jsx("p",{style:{fontFamily:$n,fontWeight:800,fontSize:28,margin:"2px 0 0",color:"#F0EEE9"},children:(n==null?void 0:n.active_requests)||0})]})]})}),p.jsx(Ze,{dark:!0,style:{background:"#1D2028",borderColor:"#2B2F3A"},children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[p.jsx(xS,{size:20,color:"#D9B45C"}),p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:$t,fontSize:11,color:"#8B909C",margin:0},children:"Credits Earned"}),p.jsx("p",{style:{fontFamily:$n,fontWeight:800,fontSize:28,margin:"2px 0 0",color:"#F0EEE9"},children:(n==null?void 0:n.total_credits_earned)||0})]})]})})]}),p.jsx("div",{style:{display:"flex",gap:8,marginBottom:16,borderBottom:"1px solid #2B2F3A",paddingBottom:12},children:[["overview","Overview",Q3],["donors",`Donors (${E.length})`,tp],["hospitals",`Hospitals (${g.length})`,Ax],["requests",`Requests (${o.length})`,Ka]].map(([y,S,w])=>p.jsxs("button",{onClick:()=>m(y),style:{fontFamily:$n,fontWeight:700,fontSize:13,padding:"8px 14px",borderRadius:10,cursor:"pointer",background:h===y?"#F0EEE9":"transparent",color:h===y?"#17151A":"#8B909C",border:"none",display:"flex",alignItems:"center",gap:6},children:[p.jsx(w,{size:14})," ",S]},y))}),h==="overview"&&p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:$t,fontSize:13,color:"#8B909C",marginBottom:12},children:["Platform summary · ",o.length," total requests · ",(n==null?void 0:n.total_donations)||0," verified donations"]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12},children:[p.jsxs("div",{style:{background:"#1D2028",borderRadius:12,padding:14,border:"1px solid #2B2F3A"},children:[p.jsx("p",{style:{fontFamily:$n,fontWeight:800,fontSize:24,margin:0,color:"#E4506B"},children:d.length}),p.jsx("p",{style:{fontFamily:$t,fontSize:12,color:"#8B909C",margin:"4px 0 0"},children:"Open requests"})]}),p.jsxs("div",{style:{background:"#1D2028",borderRadius:12,padding:14,border:"1px solid #2B2F3A"},children:[p.jsx("p",{style:{fontFamily:$n,fontWeight:800,fontSize:24,margin:0,color:"#3DBD8A"},children:v.length}),p.jsx("p",{style:{fontFamily:$t,fontSize:12,color:"#8B909C",margin:"4px 0 0"},children:"Filled requests"})]}),p.jsxs("div",{style:{background:"#1D2028",borderRadius:12,padding:14,border:"1px solid #2B2F3A"},children:[p.jsx("p",{style:{fontFamily:$n,fontWeight:800,fontSize:24,margin:0,color:"#D9B45C"},children:r.length}),p.jsx("p",{style:{fontFamily:$t,fontSize:12,color:"#8B909C",margin:"4px 0 0"},children:"Total users"})]})]})]}),h==="donors"&&p.jsx("div",{children:E.map(y=>p.jsxs(Ze,{dark:!0,style:{marginBottom:8,padding:12,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:$n,fontWeight:700,fontSize:14,margin:0,color:"#F0EEE9"},children:[y.name," · ",y.blood_group]}),p.jsxs("p",{style:{fontFamily:$t,fontSize:12,color:"#8B909C",margin:"2px 0 0"},children:[y.phone," · ",y.city," · ",y.is_on_call?"On call":"Off call"]})]}),p.jsx("span",{style:{fontFamily:$t,fontSize:11,color:y.is_verified?"#3DBD8A":"#8B909C",padding:"4px 10px",borderRadius:8,background:y.is_verified?"#0F6B4A22":"#2B2F3A"},children:y.is_verified?"Verified":"Pending"})]},y.id))}),h==="hospitals"&&p.jsx("div",{children:g.map(y=>p.jsxs(Ze,{dark:!0,style:{marginBottom:8,padding:12,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsx("p",{style:{fontFamily:$n,fontWeight:700,fontSize:14,margin:0,color:"#F0EEE9"},children:y.name}),p.jsxs("p",{style:{fontFamily:$t,fontSize:12,color:"#8B909C",margin:"2px 0 0"},children:[y.phone," · ",y.city]})]}),p.jsx("span",{style:{fontFamily:$t,fontSize:11,color:y.is_verified?"#3DBD8A":"#8B909C",padding:"4px 10px",borderRadius:8,background:y.is_verified?"#0F6B4A22":"#2B2F3A"},children:y.is_verified?"Verified":"Pending"})]},y.id))}),h==="requests"&&p.jsx("div",{children:o.map(y=>p.jsx(Ze,{dark:!0,style:{marginBottom:8,padding:12},children:p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[p.jsxs("div",{children:[p.jsxs("p",{style:{fontFamily:$n,fontWeight:800,fontSize:16,margin:0,color:"#E4506B"},children:[y.blood_group," · ",y.units_needed," units"]}),p.jsxs("p",{style:{fontFamily:$t,fontSize:12,color:"#8B909C",margin:"3px 0 0"},children:["Ref: ",y.ref_code," · ",y.urgency," · ",y.status]})]}),p.jsx("span",{style:{fontFamily:$t,fontSize:11,color:y.status==="open"?"#E4506B":"#3DBD8A",padding:"4px 10px",borderRadius:8,background:y.status==="open"?"#E4506B22":"#0F6B4A22"},children:y.status})]})},y.id))})]})}console.log("[RaktaSetu] Version:",hb,"API:",lm);const BL=new Set(["/","/login","/register","/privacy"]);function zL(){const{user:t,loading:e}=cr(),n=lr(),i=n.pathname.startsWith("/admin"),r=BL.has(n.pathname),s=n.pathname==="/"||n.pathname==="/login";return e&&!r?p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontFamily:"'Public Sans', 'Segoe UI', system-ui, sans-serif",color:P.mut,background:P.porcelain},children:"Loading RaktaSetu..."}):p.jsx("div",{style:{fontFamily:"'Public Sans', 'Segoe UI', system-ui, sans-serif",background:s?"#0A0506":P.porcelain,minHeight:"100vh",color:P.ink},children:p.jsx("div",{style:{maxWidth:i||s?"100%":430,margin:"0 auto",minHeight:"100vh",position:"relative"},children:p.jsxs(QM,{children:[p.jsx(Yt,{path:"/",element:t?p.jsx(ho,{to:Yi(t),replace:!0}):p.jsx(Y3,{})}),p.jsx(Yt,{path:"/login",element:t?p.jsx(ho,{to:Yi(t),replace:!0}):p.jsx(vL,{})}),p.jsx(Yt,{path:"/register",element:t?p.jsx(ho,{to:Yi(t),replace:!0}):p.jsx(yL,{})}),p.jsx(Yt,{path:"/privacy",element:p.jsx(_L,{})}),p.jsx(Yt,{path:"/home",element:p.jsx(ri,{user:t,role:"donor",children:p.jsx(wL,{})})}),p.jsx(Yt,{path:"/alert/:requestId",element:p.jsx(ri,{user:t,role:"donor",children:p.jsx(TL,{})})}),p.jsx(Yt,{path:"/on-the-way/:requestId",element:p.jsx(ri,{user:t,role:"donor",children:p.jsx(bL,{})})}),p.jsx(Yt,{path:"/credits",element:p.jsx(ri,{user:t,role:"donor",children:p.jsx(AL,{})})}),p.jsx(Yt,{path:"/profile",element:p.jsx(ri,{user:t,role:"donor",children:p.jsx(DL,{})})}),p.jsx(Yt,{path:"/history",element:p.jsx(ri,{user:t,role:"donor",children:p.jsx(IL,{})})}),p.jsx(Yt,{path:"/requests",element:p.jsx(ri,{user:t,role:"donor",children:p.jsx(NL,{})})}),p.jsx(Yt,{path:"/console",element:p.jsx(ri,{user:t,role:"hospital",children:p.jsx(FL,{})})}),p.jsx(Yt,{path:"/console/new-request",element:p.jsx(ri,{user:t,role:"hospital",children:p.jsx(UL,{})})}),p.jsx(Yt,{path:"/console/verify",element:p.jsx(ri,{user:t,role:"hospital",children:p.jsx(OL,{})})}),p.jsx(Yt,{path:"/admin",element:p.jsx(ri,{user:t,role:"admin",children:p.jsx(kL,{})})}),p.jsx(Yt,{path:"*",element:p.jsx(ho,{to:t?Yi(t):"/",replace:!0})})]})})})}try{pw({immediate:!0})}catch(t){console.warn("[RaktaSetu] SW register skipped:",t)}try{const t=document.getElementById("root");if(!t)throw new Error("Root element #root not found in DOM");console.log("[RaktaSetu] main.jsx executing, root found:",!!t),nf.createRoot(t).render(p.jsx(op.StrictMode,{children:p.jsx(aw,{children:p.jsx(mb,{children:p.jsx(zL,{})})})})),console.log("[RaktaSetu] React render called successfully")}catch(t){console.error("[RaktaSetu] FATAL render error:",t);const e=document.getElementById("error-log");e&&(e.style.display="block",e.textContent="FATAL RENDER ERROR: "+(t.message||t)+`

`+(t.stack||"No stack trace"));const n=document.getElementById("root");n&&(n.innerHTML='<div style="padding:40px; font-family:system-ui; color:#7A1626;"><h2>RaktaSetu failed to load</h2><p style="color:#333; white-space:pre-wrap; font-family:monospace; font-size:13px;">'+(t.message||t)+"</p><p>Please check the browser console for details.</p></div>")}
//# sourceMappingURL=index-BRjL71vq.js.map
