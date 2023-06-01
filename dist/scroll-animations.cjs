"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const K=require("lit"),k=require("motion");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const T=window,y=T.trustedTypes,R=y?y.createPolicy("lit-html",{createHTML:o=>o}):void 0,O="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,F="?"+A,X=`<${F}>`,m=document,C=()=>m.createComment(""),x=o=>o===null||typeof o!="object"&&typeof o!="function",G=Array.isArray,Y=o=>G(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",I=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,B=/>/g,_=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,z=/"/g,J=/^(?:script|style|textarea|title)$/i,tt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),et=tt(1),N=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),V=new WeakMap,v=m.createTreeWalker(m,129,null,!1),it=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":"",n=H;for(let h=0;h<e;h++){const l=o[h];let $,a,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,a=n.exec(l),a!==null);)p=n.lastIndex,n===H?a[1]==="!--"?n=U:a[1]!==void 0?n=B:a[2]!==void 0?(J.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=_):a[3]!==void 0&&(n=_):n===_?a[0]===">"?(n=s??H,d=-1):a[1]===void 0?d=-2:(d=n.lastIndex-a[2].length,$=a[1],n=a[3]===void 0?_:a[3]==='"'?z:D):n===z||n===D?n=_:n===U||n===B?n=H:(n=_,s=void 0);const w=n===_&&o[h+1].startsWith("/>")?" ":"";r+=n===H?l+X:d>=0?(i.push($),l.slice(0,d)+O+l.slice(d)+A+w):l+A+(d===-2?(i.push(void 0),h):w)}const c=r+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[R!==void 0?R.createHTML(c):c,i]};class E{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const c=t.length-1,h=this.parts,[l,$]=it(t,e);if(this.el=E.createElement(l,i),v.currentNode=this.el.content,e===2){const a=this.el.content,d=a.firstChild;d.remove(),a.append(...d.childNodes)}for(;(s=v.nextNode())!==null&&h.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const a=[];for(const d of s.getAttributeNames())if(d.endsWith(O)||d.startsWith(A)){const p=$[n++];if(a.push(d),p!==void 0){const w=s.getAttribute(p.toLowerCase()+O).split(A),S=/([.?@])?(.*)/.exec(p);h.push({type:1,index:r,name:S[2],strings:w,ctor:S[1]==="."?nt:S[1]==="?"?rt:S[1]==="@"?lt:P})}else h.push({type:6,index:r})}for(const d of a)s.removeAttribute(d)}if(J.test(s.tagName)){const a=s.textContent.split(A),d=a.length-1;if(d>0){s.textContent=y?y.emptyScript:"";for(let p=0;p<d;p++)s.append(a[p],C()),v.nextNode(),h.push({type:2,index:++r});s.append(a[d],C())}}}else if(s.nodeType===8)if(s.data===F)h.push({type:2,index:r});else{let a=-1;for(;(a=s.data.indexOf(A,a+1))!==-1;)h.push({type:7,index:r}),a+=A.length-1}r++}}static createElement(t,e){const i=m.createElement("template");return i.innerHTML=t,i}}function f(o,t,e=o,i){var s,r,n,c;if(t===N)return t;let h=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=x(t)?void 0:t._$litDirective$;return(h==null?void 0:h.constructor)!==l&&((r=h==null?void 0:h._$AO)===null||r===void 0||r.call(h,!1),l===void 0?h=void 0:(h=new l(o),h._$AT(o,e,i)),i!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=h:e._$Cl=h),h!==void 0&&(t=f(o,h._$AS(o,t.values),h,i)),t}class st{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:m).importNode(i,!0);v.currentNode=r;let n=v.nextNode(),c=0,h=0,l=s[0];for(;l!==void 0;){if(c===l.index){let $;l.type===2?$=new M(n,n.nextSibling,this,t):l.type===1?$=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&($=new ht(n,this,t)),this._$AV.push($),l=s[++h]}c!==(l==null?void 0:l.index)&&(n=v.nextNode(),c++)}return v.currentNode=m,r}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class M{constructor(t,e,i,s){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=f(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Y(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.$(m.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=E.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{const n=new st(r,this),c=n.u(this.options);n.v(i),this.$(c),this._$AH=n}}_$AC(t){let e=V.get(t.strings);return e===void 0&&V.set(t.strings,e=new E(t)),e}T(t){G(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new M(this.k(C()),this.k(C()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class P{constructor(t,e,i,s,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=f(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{const c=t;let h,l;for(t=r[0],h=0;h<r.length-1;h++)l=f(this,c[i+h],e,h),l===N&&(l=this._$AH[h]),n||(n=!x(l)||l!==this._$AH[h]),l===u?t=u:t!==u&&(t+=(l??"")+r[h+1]),this._$AH[h]=l}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class nt extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const ot=y?y.emptyScript:"";class rt extends P{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,ot):this.element.removeAttribute(this.name)}}class lt extends P{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=f(this,t,e,0))!==null&&i!==void 0?i:u)===N)return;const s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){f(this,t)}}const W=T.litHtmlPolyfillSupport;W==null||W(E,M),((j=T.litHtmlVersions)!==null&&j!==void 0?j:T.litHtmlVersions=[]).push("2.7.4");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=Symbol.for(""),at=o=>{if((o==null?void 0:o.r)===Q)return o==null?void 0:o._$litStatic$},q=o=>({_$litStatic$:o,r:Q}),Z=new Map,dt=o=>(t,...e)=>{const i=e.length;let s,r;const n=[],c=[];let h,l=0,$=!1;for(;l<i;){for(h=t[l];l<i&&(r=e[l],(s=at(r))!==void 0);)h+=s+t[++l],$=!0;l!==i&&c.push(r),n.push(h),l++}if(l===i&&n.push(t[i]),$){const a=n.join("$$lit$$");(t=Z.get(a))===void 0&&(n.raw=n,Z.set(a,t=n)),e=c}return o(t,...e)},ct=dt(et);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(n){customElements.define(e,n)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function b(o){return(t,e)=>e!==void 0?((i,s,r)=>{s.constructor.createProperty(r,i)})(o,t,e):$t(o,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;((L=window.HTMLSlotElement)===null||L===void 0?void 0:L.prototype.assignedElements)!=null;var pt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,g=(o,t,e,i)=>{for(var s=i>1?void 0:i?At(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&pt(t,e,s),s};exports.AnimatedElement=class extends K.LitElement{constructor(){super(...arguments),this.as="div",this.duration=2,this.delay=0}render(){return ct`<${q(this.as)}><slot></slot></${q(this.as)}>`}async updated(t){super.updated(t),this.anim&&(this.scrolling?k.scroll(k.animate(this,this.anim,{duration:this.duration,delay:this.delay})):k.animate(this,this.anim,{duration:this.duration,delay:this.delay}))}};exports.AnimatedElement.styles=K.css`
    :host {
      display: block;
    }
  `;g([b({type:String})],exports.AnimatedElement.prototype,"as",2);g([b({type:Boolean,attribute:"scrolling"})],exports.AnimatedElement.prototype,"scrolling",2);g([b({type:Object})],exports.AnimatedElement.prototype,"anim",2);g([b({type:Number})],exports.AnimatedElement.prototype,"duration",2);g([b({type:Number})],exports.AnimatedElement.prototype,"delay",2);exports.AnimatedElement=g([ut("animated-element")],exports.AnimatedElement);
//# sourceMappingURL=scroll-animations.cjs.map
