/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const A="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,C=(A,C,I=null)=>{for(;C!==I;){const I=C.nextSibling;A.removeChild(C),C=I}},I=`{{lit-${String(Math.random()).slice(2)}}}`,E=`\x3c!--${I}--\x3e`,g=new RegExp(`${I}|${E}`);class Q{constructor(A,C){this.parts=[],this.element=C;const E=[],Q=[],M=document.createTreeWalker(C.content,133,null,!1);let h=0,Y=-1,o=0;const{strings:F,values:{length:D}}=A;for(;o<D;){const A=M.nextNode();if(null!==A){if(Y++,1===A.nodeType){if(A.hasAttributes()){const C=A.attributes,{length:I}=C;let E=0;for(let A=0;A<I;A++)B(C[A].name,"$lit$")&&E++;for(;E-- >0;){const C=F[o],I=w.exec(C)[2],E=I.toLowerCase()+"$lit$",Q=A.getAttribute(E);A.removeAttribute(E);const B=Q.split(g);this.parts.push({type:"attribute",index:Y,name:I,strings:B}),o+=B.length-1}}"TEMPLATE"===A.tagName&&(Q.push(A),M.currentNode=A.content)}else if(3===A.nodeType){const C=A.data;if(C.indexOf(I)>=0){const I=A.parentNode,Q=C.split(g),M=Q.length-1;for(let C=0;C<M;C++){let E,g=Q[C];if(""===g)E=i();else{const A=w.exec(g);null!==A&&B(A[2],"$lit$")&&(g=g.slice(0,A.index)+A[1]+A[2].slice(0,-"$lit$".length)+A[3]),E=document.createTextNode(g)}I.insertBefore(E,A),this.parts.push({type:"node",index:++Y})}""===Q[M]?(I.insertBefore(i(),A),E.push(A)):A.data=Q[M],o+=M}}else if(8===A.nodeType)if(A.data===I){const C=A.parentNode;null!==A.previousSibling&&Y!==h||(Y++,C.insertBefore(i(),A)),h=Y,this.parts.push({type:"node",index:Y}),null===A.nextSibling?A.data="":(E.push(A),Y--),o++}else{let C=-1;for(;-1!==(C=A.data.indexOf(I,C+1));)this.parts.push({type:"node",index:-1}),o++}}else M.currentNode=Q.pop()}for(const A of E)A.parentNode.removeChild(A)}}const B=(A,C)=>{const I=A.length-C.length;return I>=0&&A.slice(I)===C},M=A=>-1!==A.index,i=()=>document.createComment(""),w=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(A,C){const{element:{content:I},parts:E}=A,g=document.createTreeWalker(I,133,null,!1);let Q=o(E),B=E[Q],M=-1,i=0;const w=[];let h=null;for(;g.nextNode();){M++;const A=g.currentNode;for(A.previousSibling===h&&(h=null),C.has(A)&&(w.push(A),null===h&&(h=A)),null!==h&&i++;void 0!==B&&B.index===M;)B.index=null!==h?-1:B.index-i,Q=o(E,Q),B=E[Q]}w.forEach((A=>A.parentNode.removeChild(A)))}const Y=A=>{let C=11===A.nodeType?0:1;const I=document.createTreeWalker(A,133,null,!1);for(;I.nextNode();)C++;return C},o=(A,C=-1)=>{for(let I=C+1;I<A.length;I++){const C=A[I];if(M(C))return I}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const F=new WeakMap,D=A=>"function"==typeof A&&F.has(A),K={},G={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class U{constructor(A,C,I){this.__parts=[],this.template=A,this.processor=C,this.options=I}update(A){let C=0;for(const I of this.__parts)void 0!==I&&I.setValue(A[C]),C++;for(const A of this.__parts)void 0!==A&&A.commit()}_clone(){const C=A?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),I=[],E=this.template.parts,g=document.createTreeWalker(C,133,null,!1);let Q,B=0,i=0,w=g.nextNode();for(;B<E.length;)if(Q=E[B],M(Q)){for(;i<Q.index;)i++,"TEMPLATE"===w.nodeName&&(I.push(w),g.currentNode=w.content),null===(w=g.nextNode())&&(g.currentNode=I.pop(),w=g.nextNode());if("node"===Q.type){const A=this.processor.handleTextExpression(this.options);A.insertAfterNode(w.previousSibling),this.__parts.push(A)}else this.__parts.push(...this.processor.handleAttributeExpressions(w,Q.name,Q.strings,this.options));B++}else this.__parts.push(void 0),B++;return A&&(document.adoptNode(C),customElements.upgrade(C)),C}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const R=` ${I} `;class S{constructor(A,C,I,E){this.strings=A,this.values=C,this.type=I,this.processor=E}getHTML(){const A=this.strings.length-1;let C="",g=!1;for(let Q=0;Q<A;Q++){const A=this.strings[Q],B=A.lastIndexOf("\x3c!--");g=(B>-1||g)&&-1===A.indexOf("--\x3e",B+1);const M=w.exec(A);C+=null===M?A+(g?R:E):A.substr(0,M.index)+M[1]+M[2]+"$lit$"+M[3]+I}return C+=this.strings[A],C}getTemplateElement(){const A=document.createElement("template");return A.innerHTML=this.getHTML(),A}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const J=A=>null===A||!("object"==typeof A||"function"==typeof A),k=A=>Array.isArray(A)||!(!A||!A[Symbol.iterator]);class c{constructor(A,C,I){this.dirty=!0,this.element=A,this.name=C,this.strings=I,this.parts=[];for(let A=0;A<I.length-1;A++)this.parts[A]=this._createPart()}_createPart(){return new L(this)}_getValue(){const A=this.strings,C=A.length-1;let I="";for(let E=0;E<C;E++){I+=A[E];const C=this.parts[E];if(void 0!==C){const A=C.value;if(J(A)||!k(A))I+="string"==typeof A?A:String(A);else for(const C of A)I+="string"==typeof C?C:String(C)}}return I+=A[C],I}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class L{constructor(A){this.value=void 0,this.committer=A}setValue(A){A===K||J(A)&&A===this.value||(this.value=A,D(A)||(this.committer.dirty=!0))}commit(){for(;D(this.value);){const A=this.value;this.value=K,A(this)}this.value!==K&&this.committer.commit()}}class s{constructor(A){this.value=void 0,this.__pendingValue=void 0,this.options=A}appendInto(A){this.startNode=A.appendChild(i()),this.endNode=A.appendChild(i())}insertAfterNode(A){this.startNode=A,this.endNode=A.nextSibling}appendIntoPart(A){A.__insert(this.startNode=i()),A.__insert(this.endNode=i())}insertAfterPart(A){A.__insert(this.startNode=i()),this.endNode=A.endNode,A.endNode=this.startNode}setValue(A){this.__pendingValue=A}commit(){if(null===this.startNode.parentNode)return;for(;D(this.__pendingValue);){const A=this.__pendingValue;this.__pendingValue=K,A(this)}const A=this.__pendingValue;A!==K&&(J(A)?A!==this.value&&this.__commitText(A):A instanceof S?this.__commitTemplateResult(A):A instanceof Node?this.__commitNode(A):k(A)?this.__commitIterable(A):A===G?(this.value=G,this.clear()):this.__commitText(A))}__insert(A){this.endNode.parentNode.insertBefore(A,this.endNode)}__commitNode(A){this.value!==A&&(this.clear(),this.__insert(A),this.value=A)}__commitText(A){const C=this.startNode.nextSibling,I="string"==typeof(A=null==A?"":A)?A:String(A);C===this.endNode.previousSibling&&3===C.nodeType?C.data=I:this.__commitNode(document.createTextNode(I)),this.value=A}__commitTemplateResult(A){const C=this.options.templateFactory(A);if(this.value instanceof U&&this.value.template===C)this.value.update(A.values);else{const I=new U(C,A.processor,this.options),E=I._clone();I.update(A.values),this.__commitNode(E),this.value=I}}__commitIterable(A){Array.isArray(this.value)||(this.value=[],this.clear());const C=this.value;let I,E=0;for(const g of A)I=C[E],void 0===I&&(I=new s(this.options),C.push(I),0===E?I.appendIntoPart(this):I.insertAfterPart(C[E-1])),I.setValue(g),I.commit(),E++;E<C.length&&(C.length=E,this.clear(I&&I.endNode))}clear(A=this.startNode){C(this.startNode.parentNode,A.nextSibling,this.endNode)}}class a{constructor(A,C,I){if(this.value=void 0,this.__pendingValue=void 0,2!==I.length||""!==I[0]||""!==I[1])throw new Error("Boolean attributes can only contain a single expression");this.element=A,this.name=C,this.strings=I}setValue(A){this.__pendingValue=A}commit(){for(;D(this.__pendingValue);){const A=this.__pendingValue;this.__pendingValue=K,A(this)}if(this.__pendingValue===K)return;const A=!!this.__pendingValue;this.value!==A&&(A?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=A),this.__pendingValue=K}}class x extends c{constructor(A,C,I){super(A,C,I),this.single=2===I.length&&""===I[0]&&""===I[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends L{}let V=!1;(()=>{try{const A={get capture(){return V=!0,!1}};window.addEventListener("test",A,A),window.removeEventListener("test",A,A)}catch(A){}})();class j{constructor(A,C,I){this.value=void 0,this.__pendingValue=void 0,this.element=A,this.eventName=C,this.eventContext=I,this.__boundHandleEvent=A=>this.handleEvent(A)}setValue(A){this.__pendingValue=A}commit(){for(;D(this.__pendingValue);){const A=this.__pendingValue;this.__pendingValue=K,A(this)}if(this.__pendingValue===K)return;const A=this.__pendingValue,C=this.value,I=null==A||null!=C&&(A.capture!==C.capture||A.once!==C.once||A.passive!==C.passive),E=null!=A&&(null==C||I);I&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),E&&(this.__options=e(A),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=A,this.__pendingValue=K}handleEvent(A){"function"==typeof this.value?this.value.call(this.eventContext||this.element,A):this.value.handleEvent(A)}}const e=A=>A&&(V?{capture:A.capture,passive:A.passive,once:A.once}:A.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function u(A){let C=q.get(A.type);void 0===C&&(C={stringsArray:new WeakMap,keyString:new Map},q.set(A.type,C));let E=C.stringsArray.get(A.strings);if(void 0!==E)return E;const g=A.strings.join(I);return E=C.keyString.get(g),void 0===E&&(E=new Q(A,A.getTemplateElement()),C.keyString.set(g,E)),C.stringsArray.set(A.strings,E),E}const q=new Map,l=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const p=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(A,C,I,E){const g=C[0];if("."===g){return new x(A,C.slice(1),I).parts}if("@"===g)return[new j(A,C.slice(1),E.eventContext)];if("?"===g)return[new a(A,C.slice(1),I)];return new c(A,C,I).parts}handleTextExpression(A){return new s(A)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const O=(A,...C)=>new S(A,C,"html",p)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,y=(A,C)=>`${A}--${C}`;let Z=!0;void 0===window.ShadyCSS?Z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Z=!1);const t=A=>C=>{const E=y(C.type,A);let g=q.get(E);void 0===g&&(g={stringsArray:new WeakMap,keyString:new Map},q.set(E,g));let B=g.stringsArray.get(C.strings);if(void 0!==B)return B;const M=C.strings.join(I);if(B=g.keyString.get(M),void 0===B){const I=C.getTemplateElement();Z&&window.ShadyCSS.prepareTemplateDom(I,A),B=new Q(C,I),g.keyString.set(M,B)}return g.stringsArray.set(C.strings,B),B},T=["html","svg"],W=new Set,r=(A,C,I)=>{W.add(A);const E=I?I.element:document.createElement("template"),g=C.querySelectorAll("style"),{length:Q}=g;if(0===Q)return void window.ShadyCSS.prepareTemplateStyles(E,A);const B=document.createElement("style");for(let A=0;A<Q;A++){const C=g[A];C.parentNode.removeChild(C),B.textContent+=C.textContent}(A=>{T.forEach((C=>{const I=q.get(y(C,A));void 0!==I&&I.keyString.forEach((A=>{const{element:{content:C}}=A,I=new Set;Array.from(C.querySelectorAll("style")).forEach((A=>{I.add(A)})),h(A,I)}))}))})(A);const M=E.content;I?function(A,C,I=null){const{element:{content:E},parts:g}=A;if(null==I)return void E.appendChild(C);const Q=document.createTreeWalker(E,133,null,!1);let B=o(g),M=0,i=-1;for(;Q.nextNode();)for(i++,Q.currentNode===I&&(M=Y(C),I.parentNode.insertBefore(C,I));-1!==B&&g[B].index===i;){if(M>0){for(;-1!==B;)g[B].index+=M,B=o(g,B);return}B=o(g,B)}}(I,B,M.firstChild):M.insertBefore(B,M.firstChild),window.ShadyCSS.prepareTemplateStyles(E,A);const i=M.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==i)C.insertBefore(i.cloneNode(!0),C.firstChild);else if(I){M.insertBefore(B,M.firstChild);const A=new Set;A.add(B),h(I,A)}};window.JSCompiler_renameProperty=(A,C)=>A;const H={toAttribute(A,C){switch(C){case Boolean:return A?"":null;case Object:case Array:return null==A?A:JSON.stringify(A)}return A},fromAttribute(A,C){switch(C){case Boolean:return null!==A;case Number:return null===A?null:Number(A);case Object:case Array:return JSON.parse(A)}return A}},z=(A,C)=>C!==A&&(C==C||A==A),n={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:z};class N extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise((A=>this._enableUpdatingResolver=A)),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const A=[];return this._classProperties.forEach(((C,I)=>{const E=this._attributeNameForProperty(I,C);void 0!==E&&(this._attributeToPropertyMap.set(E,I),A.push(E))})),A}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const A=Object.getPrototypeOf(this)._classProperties;void 0!==A&&A.forEach(((A,C)=>this._classProperties.set(C,A)))}}static createProperty(A,C=n){if(this._ensureClassProperties(),this._classProperties.set(A,C),C.noAccessor||this.prototype.hasOwnProperty(A))return;const I="symbol"==typeof A?Symbol():"__"+A,E=this.getPropertyDescriptor(A,I,C);void 0!==E&&Object.defineProperty(this.prototype,A,E)}static getPropertyDescriptor(A,C,I){return{get(){return this[C]},set(I){const E=this[A];this[C]=I,this._requestUpdate(A,E)},configurable:!0,enumerable:!0}}static getPropertyOptions(A){return this._classProperties&&this._classProperties.get(A)||n}static finalize(){const A=Object.getPrototypeOf(this);if(A.hasOwnProperty("finalized")||A.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const A=this.properties,C=[...Object.getOwnPropertyNames(A),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(A):[]];for(const I of C)this.createProperty(I,A[I])}}static _attributeNameForProperty(A,C){const I=C.attribute;return!1===I?void 0:"string"==typeof I?I:"string"==typeof A?A.toLowerCase():void 0}static _valueHasChanged(A,C,I=z){return I(A,C)}static _propertyValueFromAttribute(A,C){const I=C.type,E=C.converter||H,g="function"==typeof E?E:E.fromAttribute;return g?g(A,I):A}static _propertyValueToAttribute(A,C){if(void 0===C.reflect)return;const I=C.type,E=C.converter;return(E&&E.toAttribute||H.toAttribute)(A,I)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((A,C)=>{if(this.hasOwnProperty(C)){const A=this[C];delete this[C],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(C,A)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((A,C)=>this[C]=A)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(A,C,I){C!==I&&this._attributeToProperty(A,I)}_propertyToAttribute(A,C,I=n){const E=this.constructor,g=E._attributeNameForProperty(A,I);if(void 0!==g){const A=E._propertyValueToAttribute(C,I);if(void 0===A)return;this._updateState=8|this._updateState,null==A?this.removeAttribute(g):this.setAttribute(g,A),this._updateState=-9&this._updateState}}_attributeToProperty(A,C){if(8&this._updateState)return;const I=this.constructor,E=I._attributeToPropertyMap.get(A);if(void 0!==E){const A=I.getPropertyOptions(E);this._updateState=16|this._updateState,this[E]=I._propertyValueFromAttribute(C,A),this._updateState=-17&this._updateState}}_requestUpdate(A,C){let I=!0;if(void 0!==A){const E=this.constructor,g=E.getPropertyOptions(A);E._valueHasChanged(this[A],C,g.hasChanged)?(this._changedProperties.has(A)||this._changedProperties.set(A,C),!0!==g.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(A,g))):I=!1}!this._hasRequestedUpdate&&I&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(A,C){return this._requestUpdate(A,C),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(A){}const A=this.performUpdate();return null!=A&&await A,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let A=!1;const C=this._changedProperties;try{A=this.shouldUpdate(C),A?this.update(C):this._markUpdated()}catch(C){throw A=!1,this._markUpdated(),C}A&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(C)),this.updated(C))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(A){return!0}update(A){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((A,C)=>this._propertyToAttribute(C,this[C],A))),this._reflectingProperties=void 0),this._markUpdated()}updated(A){}firstUpdated(A){}}N.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const d="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class P{constructor(A,C){if(C!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=A}get styleSheet(){return void 0===this._styleSheet&&(d?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const b=A=>new P(String(A),X),v=(A,...C)=>{const I=C.reduce(((C,I,E)=>C+(A=>{if(A instanceof P)return A.cssText;if("number"==typeof A)return A;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${A}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(I)+A[E+1]),A[0]);return new P(I,X)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("1");const f={};class _ extends N{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const A=this.getStyles();if(void 0===A)this._styles=[];else if(Array.isArray(A)){const C=(A,I)=>A.reduceRight(((A,I)=>Array.isArray(I)?C(I,A):(A.add(I),A)),I),I=C(A,new Set),E=[];I.forEach((A=>E.unshift(A))),this._styles=E}else this._styles=[A]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const A=this.constructor._styles;0!==A.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?d?this.renderRoot.adoptedStyleSheets=A.map((A=>A.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(A.map((A=>A.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(A){const C=this.render();super.update(A),C!==f&&this.constructor.render(C,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((A=>{const C=document.createElement("style");C.textContent=A.cssText,this.renderRoot.appendChild(C)})))}render(){return f}}_.finalized=!0,_.render=(A,I,E)=>{if(!E||"object"!=typeof E||!E.scopeName)throw new Error("The `scopeName` option is required.");const g=E.scopeName,Q=l.has(I),B=Z&&11===I.nodeType&&!!I.host,M=B&&!W.has(g),i=M?document.createDocumentFragment():I;if(((A,I,E)=>{let g=l.get(I);void 0===g&&(C(I,I.firstChild),l.set(I,g=new s(Object.assign({templateFactory:u},E))),g.appendInto(I)),g.setValue(A),g.commit()})(A,i,Object.assign({templateFactory:t(g)},E)),M){const A=l.get(i);l.delete(i);const E=A.value instanceof U?A.value.template:void 0;r(g,i,E),C(I,I.firstChild),I.appendChild(i),l.set(I,A)}!Q&&B&&window.ShadyCSS.styleElement(I.host)};var $=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,AA="[^\\s]+",CA=/\[([^]*?)\]/gm;function IA(A,C){for(var I=[],E=0,g=A.length;E<g;E++)I.push(A[E].substr(0,C));return I}var EA=function(A){return function(C,I){var E=I[A].map((function(A){return A.toLowerCase()})).indexOf(C.toLowerCase());return E>-1?E:null}};function gA(A){for(var C=[],I=1;I<arguments.length;I++)C[I-1]=arguments[I];for(var E=0,g=C;E<g.length;E++){var Q=g[E];for(var B in Q)A[B]=Q[B]}return A}var QA=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],BA=["January","February","March","April","May","June","July","August","September","October","November","December"],MA=IA(BA,3),iA={dayNamesShort:IA(QA,3),dayNames:QA,monthNamesShort:MA,monthNames:BA,amPm:["am","pm"],DoFn:function(A){return A+["th","st","nd","rd"][A%10>3?0:(A-A%10!=10?1:0)*A%10]}},wA=gA({},iA),hA=function(A,C){for(void 0===C&&(C=2),A=String(A);A.length<C;)A="0"+A;return A},YA={D:function(A){return String(A.getDate())},DD:function(A){return hA(A.getDate())},Do:function(A,C){return C.DoFn(A.getDate())},d:function(A){return String(A.getDay())},dd:function(A){return hA(A.getDay())},ddd:function(A,C){return C.dayNamesShort[A.getDay()]},dddd:function(A,C){return C.dayNames[A.getDay()]},M:function(A){return String(A.getMonth()+1)},MM:function(A){return hA(A.getMonth()+1)},MMM:function(A,C){return C.monthNamesShort[A.getMonth()]},MMMM:function(A,C){return C.monthNames[A.getMonth()]},YY:function(A){return hA(String(A.getFullYear()),4).substr(2)},YYYY:function(A){return hA(A.getFullYear(),4)},h:function(A){return String(A.getHours()%12||12)},hh:function(A){return hA(A.getHours()%12||12)},H:function(A){return String(A.getHours())},HH:function(A){return hA(A.getHours())},m:function(A){return String(A.getMinutes())},mm:function(A){return hA(A.getMinutes())},s:function(A){return String(A.getSeconds())},ss:function(A){return hA(A.getSeconds())},S:function(A){return String(Math.round(A.getMilliseconds()/100))},SS:function(A){return hA(Math.round(A.getMilliseconds()/10),2)},SSS:function(A){return hA(A.getMilliseconds(),3)},a:function(A,C){return A.getHours()<12?C.amPm[0]:C.amPm[1]},A:function(A,C){return A.getHours()<12?C.amPm[0].toUpperCase():C.amPm[1].toUpperCase()},ZZ:function(A){var C=A.getTimezoneOffset();return(C>0?"-":"+")+hA(100*Math.floor(Math.abs(C)/60)+Math.abs(C)%60,4)},Z:function(A){var C=A.getTimezoneOffset();return(C>0?"-":"+")+hA(Math.floor(Math.abs(C)/60),2)+":"+hA(Math.abs(C)%60,2)}},oA=function(A){return+A-1},FA=[null,"[1-9]\\d?"],DA=[null,AA],KA=["isPm",AA,function(A,C){var I=A.toLowerCase();return I===C.amPm[0]?0:I===C.amPm[1]?1:null}],GA=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(A){var C=(A+"").match(/([+-]|\d\d)/gi);if(C){var I=60*+C[1]+parseInt(C[2],10);return"+"===C[0]?I:-I}return 0}],UA=(EA("monthNamesShort"),EA("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var RA=function(A,C,I){if(void 0===C&&(C=UA.default),void 0===I&&(I={}),"number"==typeof A&&(A=new Date(A)),"[object Date]"!==Object.prototype.toString.call(A)||isNaN(A.getTime()))throw new Error("Invalid Date pass to format");var E=[];C=(C=UA[C]||C).replace(CA,(function(A,C){return E.push(C),"@@@"}));var g=gA(gA({},wA),I);return(C=C.replace($,(function(C){return YA[C](A,g)}))).replace(/@@@/g,(function(){return E.shift()}))},SA=(function(){try{(new Date).toLocaleDateString("i")}catch(A){return"RangeError"===A.name}}(),function(){try{(new Date).toLocaleString("i")}catch(A){return"RangeError"===A.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(A){return"RangeError"===A.name}}(),function(A,C,I,E){E=E||{},I=null==I?{}:I;var g=new Event(C,{bubbles:void 0===E.bubbles||E.bubbles,cancelable:Boolean(E.cancelable),composed:void 0===E.composed||E.composed});return g.detail=I,A.dispatchEvent(g),g});var JA={name:"Humidifier Card",description:"Humidifier card allows you to control your smart humidifier.",not_available:"Entity is not avaialable",toggle_power:"Turn on/off"},kA={on:"Включён",off:"Выключен"},cA={Auto:"Авто",Low:"Тихий",Mid:"Средний",High:"Быстрый",Favorite:"Favorite",Fan:"Fan"},LA={missing_entity:"Specifying entity is required!",xiaomi_miio_level_without_speed:"speed is required along with xiaomi_miio_favorite_level property!"},sA={entity:"Entity (Required)",compact_view:"Compact View",compact_view_aria_label_on:"Toggle compact view on",compact_view_aria_label_off:"Toggle compact view off",show_name:"Show Name",show_name_aria_label_on:"Toggle display name on",show_name_aria_label_off:"Toggle display name off",show_state:"Show State",show_state_aria_label_on:"Toggle display state on",show_state_aria_label_off:"Toggle display state off",show_toolbar:"Show Toolbar",show_toolbar_aria_label_on:"Toggle display toolbar on",show_toolbar_aria_label_off:"Toggle display toolbar off",code_only_note:"Note: Setting actions and stats options are available exclusively using Code Editor."},aA={common:JA,state:kA,speed:cA,error:LA,editor:sA},xA=Object.freeze({__proto__:null,common:JA,state:kA,speed:cA,error:LA,editor:sA,default:aA}),mA={name:"Очищувач повітря",description:'Картка "Очищувач повітря" дозволяє керувати розумним очищувачем повітря.',not_available:"Очищувач повітря недоступний",toggle_power:"Увімкнути/Вимкнути"},VA={on:"Увімкнений",off:"Вимкнений"},jA={Auto:"Авто",Silent:"Тихий",Favorite:"Улюблений",Fan:"Вентилятор"},eA={missing_entity:"Сутність є обов’язковим полем!і",xiaomi_miio_level_without_speed:"Поле speed є обов’язковим разом з xiaomi_miio_favorite_level!"},uA={entity:"Об’єкт (Required)",compact_view:"Компактний перегляд",compact_view_aria_label_on:"Увімкнути компактний перегляд",compact_view_aria_label_off:"Вимкнути компактний перегляд",show_name:"Показувати ім’я?",show_name_aria_label_on:"Показати ім’я",show_name_aria_label_off:"Приховати ім’я",show_state:"Показувати стан?",show_state_aria_label_on:"Показати стан",show_state_aria_label_off:"Приховати стан",show_toolbar:"Показувати панель дій?",show_toolbar_aria_label_on:"Показати панель дій",show_toolbar_aria_label_off:"Приховати панель дій",code_only_note:"Увага: Опції actions та stats доступні виключно через редактор коду."},qA={common:mA,state:VA,speed:jA,error:eA,editor:uA},lA=Object.freeze({__proto__:null,common:mA,state:VA,speed:jA,error:eA,editor:uA,default:qA}),pA={name:"Humidifier Card",description:"Humidifier kartı hava temizleyicinizi kontrol etmenize yardımcı olur.",not_available:"Varlık müsait değil",toggle_power:"Kapat/Aç"},OA={on:"Açık",off:"Kapalı"},yA={Auto:"Otomatik",Silent:"Sessiz",Favorite:"Favori",Fan:"Fan"},ZA={missing_entity:"Varlığı belirtmeniz gereklidir!",xiaomi_miio_level_without_speed:"Hız xiaomi_miio_favorite_level için gereklidir!"},tA={entity:"Varlık (Gerekli)",compact_view:"Kompakt Görünüm",compact_view_aria_label_on:"Kompakt Görünümü aç",compact_view_aria_label_off:"Kompakt Görünümü kapat",show_name:"Show Name",show_name_aria_label_on:"İsim gösterimini aç",show_name_aria_label_off:"İsim gösterimini kapat",show_state:"Show State",show_state_aria_label_on:"Durum gösterimini aç",show_state_aria_label_off:"Durum gösterimini kapat",show_toolbar:"Show Toolbar",show_toolbar_aria_label_on:"Araç çubuğu gösterimini aç",show_toolbar_aria_label_off:"Araç çubuğu gösterimini kapat",code_only_note:"Not: Aksiyon ataması ve istatistik seçenekleri şu anda Kod Editörü kullanımı ile mümkündür."},TA={common:pA,state:OA,speed:yA,error:ZA,editor:tA},WA=Object.freeze({__proto__:null,common:pA,state:OA,speed:yA,error:ZA,editor:tA,default:TA}),rA={name:"Carte purificateur",description:"La carte purificateur vous permet de contrôler votre purificateur d'air intelligent.",not_available:"Le purificateur n'est pas disponible",toggle_power:"Allumer/éteindre"},HA={on:"Allumé",off:"Éteint"},zA={Auto:"Auto",Silent:"Nuit",Favorite:"Favori",Fan:"Manuel"},nA={missing_entity:"Il est obligatoire de spécifier une entité!",xiaomi_miio_level_without_speed:"speed est obligatoire avec la propriété xiaomi_miio_favorite_level!"},NA={entity:"Entité (obligatoire)",compact_view:"Vue compacte",compact_view_aria_label_on:"Activer la vue compacte",compact_view_aria_label_off:"Désactiver la vue compacte",show_name:"Afficher le nom",show_name_aria_label_on:"Activer affichage du nom",show_name_aria_label_off:"Désactiver affichage du nom",show_state:"Afficher l'état",show_state_aria_label_on:"Activer l'affichage de l'état",show_state_aria_label_off:"Désactiver l'affichage de l'état",show_toolbar:"Afficher la barre d'outils",show_toolbar_aria_label_on:"Activer l'affichage de la barre d'outils",show_toolbar_aria_label_off:"Désactiver l'affichage de la barre d'outils",code_only_note:"Remarque: Les options de réglage des actions et statistiques sont disponibles exclusivement en utilisant l'éditeur de code."},dA={common:rA,state:HA,speed:zA,error:nA,editor:NA},XA={name:"Humidifier Card",description:"Humidifier-kortet lar deg kontrollere din smarte humidifier.",not_available:"Enhet er ikke tilgjengelig",toggle_power:"Slå på/av"},PA={on:"På",off:"Av"},bA={Auto:"Auto",Silent:"Stille",Favorite:"Favoritt",Fan:"Vifte"},vA={missing_entity:"Spesifiserende enhet kreves!",xiaomi_miio_level_without_speed:"hastighet kreves sammen med eiendommen xiaomi_miio_favorite_level!"},fA={entity:"Enhet (påkrevd)",compact_view:"Kompakt visning",compact_view_aria_label_on:"Slå på kompakt visning",compact_view_aria_label_off:"Slå av kompakt visning",show_name:"Show Name",show_name_aria_label_on:"Slå visningsnavnet på",show_name_aria_label_off:"Slå visningsnavnet av",show_state:"Show State",show_state_aria_label_on:"Slå skjermstatus på",show_state_aria_label_off:"Slå skjermstatus av",show_toolbar:"Show Toolbar",show_toolbar_aria_label_on:"Slå skjermverktøylinjen på",show_toolbar_aria_label_off:"Slå skjermverktøylinjen av",code_only_note:"Merk: Innstillingshandlinger og statistikkalternativer er eksklusivt tilgjengelige ved hjelp av Code Editor."},_A={common:XA,state:PA,speed:bA,error:vA,editor:fA},$A={name:"Karta oczyszczacza powietrza",description:"Karta oczyszczacza powietrza pozwala na kontrolowanie Twojego urządzenia.",not_available:"Encja jest niedostępna",toggle_power:"Włącz/wyłącz"},AC={on:"Włączony",off:"Wyłączony"},CC={Auto:"Auto",Silent:"Cichy",Favorite:"Ulubiony",Fan:"Wentylator"},IC={missing_entity:"Wymagane jest zadeklarowanie encji!",xiaomi_miio_level_without_speed:"parametr speed jest wymagany w wywołaniu z xiaomi_miio_favorite_level!"},EC={entity:"Encja (wymagane)",compact_view:"Widok kompaktowy",compact_view_aria_label_on:"Włącz widok kompaktowy",compact_view_aria_label_off:"Wyłącz widok kompaktowy",show_name:"Pokaż nazwę",show_name_aria_label_on:"Włącz wyświetlanie nazwy",show_name_aria_label_off:"Wyłącz wyświetlanie nazwy",show_state:"Pokaż stan",show_state_aria_label_on:"Włącz wyświetlanie stanu",show_state_aria_label_off:"Wyłącz wyświetlanie stanu",show_toolbar:"Pokaż pasek narzędzi",show_toolbar_aria_label_on:"Włącz wyświetlanie paska narzędzi",show_toolbar_aria_label_off:"Wyłącz wyświetlanie paska narzędzi",code_only_note:"Uwaga: Konfiguracja akcji i statystyk dostępna jest tylko w edytorze YAML karty."},gC={common:$A,state:AC,speed:CC,error:IC,editor:EC},QC={name:"Карта Пречиствател за Въздух",description:"Картата Пречиствател за Въздух улеснява управлението на различни видове смарт пречистватели.",not_available:"Обектът не е наличен",toggle_power:"Включи/Изключи"},BC={on:"Включен",off:"Изключен"},MC={Auto:"Автоматичен режим",Silent:"Тих режим",Favorite:"Любима",Fan:"Вентилатор"},iC={missing_entity:"Избирането на обект е задължително!",xiaomi_miio_level_without_speed:"speed е задължителен параметър, когато се използва xiaomi_miio_favorite_level!"},wC={entity:"Обект (Задължително)",compact_view:"Компактен Изглед",compact_view_aria_label_on:"Включи компактен изглед",compact_view_aria_label_off:"Изключи компактен изглед",show_name:"Показване на името",show_name_aria_label_on:"Покажи името",show_name_aria_label_off:"Скрий името",show_state:"Показване на състоянието",show_state_aria_label_on:"Покажи състоянието",show_state_aria_label_off:"Скрий състоянието",show_toolbar:"Показване на лентата с инструменти",show_toolbar_aria_label_on:"Покажи лентата с инструменти",show_toolbar_aria_label_off:"Скрий лентата с инструменти",code_only_note:"Забележка: Настройването на  actions и stats е възможно единствено чрез Code Editor."},hC={common:QC,state:BC,speed:MC,error:iC,editor:wC},YC={en:xA,uk:lA,fr:Object.freeze({__proto__:null,common:rA,state:HA,speed:zA,error:nA,editor:NA,default:dA}),tr:WA,nb:Object.freeze({__proto__:null,common:XA,state:PA,speed:bA,error:vA,editor:fA,default:_A}),pl:Object.freeze({__proto__:null,common:$A,state:AC,speed:CC,error:IC,editor:EC,default:gC}),bg:Object.freeze({__proto__:null,common:QC,state:BC,speed:MC,error:iC,editor:wC,default:hC})};function oC(A,C,I){const[E,g]=A.split(".");let Q;try{Q=JSON.parse(localStorage.getItem("selectedLanguage"))}catch(A){Q=localStorage.getItem("selectedLanguage")}const B=(Q||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let M;try{M=YC[B][E][g]}catch(A){M=YC.en[E][g]}if(void 0===M&&(M=YC.en[E][g]),void 0!==M)return""!==C&&""!==I&&(M=M.replace(C,I)),M}customElements.define("humidifier-card-editor",class extends _{static get properties(){return{hass:Object,_config:Object,_toggle:Boolean}}setConfig(A){this._config=A,this._config.entity||(this._config.entity=this.getEntitiesByType("fan")[0]||"",SA(this,"config-changed",{config:this._config}))}get _entity(){return this._config&&this._config.entity||""}get _show_name(){return this._config?this._config.show_name||!0:""}get _show_state(){return this._config?this._config.show_state||!0:""}get _show_toolbar(){return this._config&&this._config.show_toolbar||!0}get _compact_view(){return this._config&&this._config.compact_view||!1}getEntitiesByType(A){return Object.keys(this.hass.states).filter((C=>C.substr(0,C.indexOf("."))===A))}render(){if(!this.hass)return O``;const A=this.getEntitiesByType("fan");return O`
      <div class="card-config">
        <paper-dropdown-menu
          label="${oC("editor.entity")}"
          @value-changed=${this._valueChanged}
          .configValue=${"entity"}
        >
          <paper-listbox
            slot="dropdown-content"
            .selected=${A.indexOf(this._entity)}
          >
            ${A.map((A=>O` <paper-item>${A}</paper-item> `))}
          </paper-listbox>
        </paper-dropdown-menu>

        <p class="option">
          <ha-switch
            aria-label=${oC(this._show_name?"editor.show_name_aria_label_off":"editor.show_name_aria_label_on")}
            .checked=${!1!==this._show_name}
            .configValue=${"show_name"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${oC("editor.show_name")}
        </p>

        <p class="option">
          <ha-switch
            aria-label=${oC(this._show_state?"editor.show_state_aria_label_off":"editor.show_state_aria_label_on")}
            .checked=${!1!==this._show_state}
            .configValue=${"show_state"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${oC("editor.show_state")}
        </p>

        <p class="option">
          <ha-switch
            aria-label=${oC(this._show_name?"editor.show_toolbar_aria_label_off":"editor.show_toolbar_aria_label_on")}
            .checked=${!1!==this._show_toolbar}
            .configValue=${"show_toolbar"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${oC("editor.show_toolbar")}
        </p>

        <strong>
          ${oC("editor.code_only_note")}
        </strong>
      </div>
    `}_valueChanged(A){if(!this._config||!this.hass)return;const C=A.target;this["_"+C.configValue]!==C.value&&(C.configValue&&(""===C.value?delete this._config[C.configValue]:this._config={...this._config,[C.configValue]:void 0!==C.checked?C.checked:C.value}),SA(this,"config-changed",{config:this._config}))}static get styles(){return v`
      .card-config paper-dropdown-menu {
        width: 100%;
      }

      .option {
        display: flex;
        align-items: center;
      }

      .option ha-switch {
        margin-right: 10px;
      }
    `}});var FC=v`
  :host {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  ha-card {
    flex-direction: column;
    flex: 1;
    position: relative;
    padding: 0px;
    border-radius: 4px;
    overflow: hidden;
  }

  .fill-gap {
    flex-grow: 1;
  }

  .preview {
    background-color: var(--primary-color);
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }

  .header {
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: var(--text-primary-color);
  }
  

  .target {
    text-align: right;
    font-weight: bold;
    padding: 8px;
  }

  .image {
    background: center / contain no-repeat;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image.working {
  }

  .image.standby {
    background-image: url(${b("data:image/gif;base64,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Z/wJz7Eeq6VmwAVQgKY2QJu+KZamBGq+p4Byp4KZzqDmqqEeAK8+wAME6wVkQAZYqgdogLQmoGgoIHftJ3Quq/hEKKXya69JqwZwQAaoKQVEAJsuAKgWKpyKapK2B/csKZXKnpW2/sepIqmuGmoCMAAD/KoEUMAFDCvAGqu0Wgi/Uup05ms3rZYDkOzKWoRVHGuxWioGqKkEREAEZGsCfOqbhqrCxirMgGsWHAuWEqqhXmzGpuu6CiyxGmvIuizLOm0owMLJdtP2PG3Vgpa0Lm0HxOzAamq6NkC2eurBuunYEm3Cmu3ZlmuuEuraqq3aCq3QKmzbDq3ZHurYhm2v+iqwcqywDqu7akCxegDTWu3gUkcC8KfUBhMClKmM9eiKOq4glYnLYm2xaq0GuCsGVKu1XivN1mzBcmq2ZmvGMkCiku7Bhu0BfGrqJoDpri7pjm7Ggq6v+uqvdm6wTsAFeCzm+i3l/obssTYtslZI4wpvvRKv4LAB4vZkAJwg4TJv8zZCAspr9AIu5Qbu9Fpv1vZu9EKC786r83rv97bAdCoA8k6tAAAv+KJv+qrv+rKvSFDA9pBvN4GphLZv/drv/eLv98JAAMSvN03npA7vswbw4xYvAQtwAQ9wAiPwAh9wAxswCyjJ+PYvs0bo+ebvBWNwBtvvauHrBP8PFwypBovwCJMw+HoAB3vwPimuACRACbvwC8PwylIAG3RwCmdQGBRA4CmwA+/wA/fwDzOwDwcxEPMwAk/n4drwRSluhIZwDDvxE8PwA6wWWybxPhlPATiABUPxFnNx83aAArQDAlQxWlXA/mqJgQEkgARwQPSycRu78RvDcRzL8RzTcR3b8R3jcR7r8R7fMQdAAAIwVhaOsWhVQTo12yEjshUi8iIz8iIrciNDciRL8iRTciVb8iVjciZr8iZHclYlwCB/1wMAQI7e6q2SstCqhWCosgmsciuLgSkXACzLMpLO8inbcizTci7fci3j8i7rci8DMy8L8y8Psy8bczC/LSqbQSuzcjMzs5JIAjIfMwBYACh32woKT4o6FTbvGxVbcwPqYTo4aCH5pDjX8DcDG1UocCR4c08O4xBrMzrjYTjv2zlrED1Dnz3Ls7/FZpnFs1uuLDvvcxi+XRNrVAbwr1MVNMkitAEM/nQYbk8F8PEMB0AFPFVET/TxPjQRLnGzWeFHe3RIj4EYP9UBZIpIsw1I21GZbjQennIp4zJMy3RM6zMUvTRNz/RMm2hL83RP+/RPA3VQC/VQE3VRG/VRI3VSK/VSM3VTO/VTQ3VUS/VUU3VVW/VVY3VWa/VWc3VXe/VXg3VYi/VYk3VZm/VZo3Vaq/Vas3Vbu/Vbw3Vcy/Vc03Vd2/Vd43Ve6/Ve83Vf+/VfA3ZgC/ZgE3ZhG/ZhI3ZiK/ZiM3ZjO/ZjQ3ZkS/ZkU3ZlW/ZlY3Zma/Zmc3Zne/Zng3Zoi/Zok3Zpm/Zpo3Zqq/Zqs3Zru/Zrw3Zsy/Zs03Zt2/ZtLuN2buv2bvN2b/v2bwN3cAv3cBN3cRv3cSN3civ3cjN3czv3c0N3dEv3dP92CAAAOw==")});
	opacity:0.7;
  }

  .image.compact {
    background-image: none;
    height: auto;
  }

  .preview.not-available {
    filter: grayscale(1);
  }

  .number-off {
    opacity: 0.2;
  }

  .current-aqi {
    font-size: 48px;
    font-weight: bold;
    line-height: 48px;
    padding: 5px 10px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.6);
    color: var(--text-primary-color);
  }

  .current-aqi sup {
    font-size: 16px;
    line-height: 16px;
    font-weight: normal;
  }

  .state {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .state-text {
    color: var(--text-primary-color);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: calc(20px + 9px); /* size + margin of spinner */
  }

  .state ha-circular-progress {
    --mdc-theme-primary: var(
      --card-background-color
    ); /* hack to override the color */
    min-width: 24px;
    width: 24px;
    height: 24px;
    margin-left: 9px;
  }

  .friendly-name {
    text-align: center;
    font-weight: bold;
    color: var(--text-primary-color);
    font-size: 16px;
  }

  .not-available {
    text-align: center;
    color: var(--text-primary-color);
    font-size: 16px;
  }

  .metadata {
    margin: 10px auto;
  }

  .stats {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: var(--text-primary-color);
  }

  .stats-block {
    margin: 10px 0px;
    text-align: center;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    flex-grow: 1;
  }
  .stats-block:last-child {
    border: 0px;
  }
  .stats-value {
    font-size: 20px;
    font-weight: bold;
  }

  ha-icon {
    color: #fff;
  }

  .toolbar {
    background: var(--lovelace-background, var(--primary-background-color));
    min-height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .toolbar ha-icon-button {
    color: var(--primary-color);
    flex-direction: column;
    width: 44px;
    height: 44px;
    --mdc-icon-button-size: 44px;
    margin: 5px 0;
    opacity: 0.5;
  }

  .toolbar ha-icon-button.active {
    opacity: 1;
  }

  .toolbar ha-icon-button:first-child {
    margin-left: 5px;
  }

  .toolbar ha-icon-button:last-child {
    margin-right: 5px;
  }

  .toolbar paper-button {
    color: var(--primary-color);
    flex-direction: column;
    margin-right: 10px;
    padding: 15px 10px;
    cursor: pointer;
  }

  .toolbar ha-icon-button:active,
  .toolbar paper-button:active {
    opacity: 0.4;
    background: rgba(0, 0, 0, 0.1);
  }

  .toolbar paper-button {
    color: var(--primary-color);
    flex-direction: row;
  }

  .toolbar ha-icon {
    color: var(--primary-color);
    padding-right: 15px;
  }
`;customElements.get("ha-icon-button")||customElements.define("ha-icon-button",class extends(customElements.get("paper-icon-button")){});customElements.define("humidifier-card",class extends _{static get properties(){return{hass:Object,config:Object,requestInProgress:Boolean}}static get styles(){return FC}static async getConfigElement(){return document.createElement("humidifier-card-editor")}static getStubConfig(A,C){const[I]=C.filter((A=>"fan"===A.substr(0,A.indexOf("."))));return{entity:I||""}}get entity(){return this.hass.states[this.config.entity]}get showName(){return void 0===this.config.show_name||this.config.show_name}get showState(){return void 0===this.config.show_state||this.config.show_state}get showToolbar(){return void 0===this.config.show_toolbar||this.config.show_toolbar}get compactView(){return void 0!==this.config.compact_view&&this.config.compact_view}setConfig(A){if(!A.entity)throw new Error(oC("error.missing_entity"));this.config=A}getCardSize(){return 2}shouldUpdate(A){return function(A,C,I){if(C.has("config")||I)return!0;if(A.config.entity){var E=C.get("hass");return!E||E.states[A.config.entity]!==A.hass.states[A.config.entity]}return!1}(this,A)}updated(A){A.get("hass")&&A.get("hass").states[this.config.entity]!==this.hass.states[this.config.entity]&&(this.requestInProgress=!1)}handleMore(){SA(this,"hass-more-info",{entityId:this.entity.entity_id},{bubbles:!0,composed:!0})}handleTarget(A){const C=A.target.getAttribute("value");this.callService("xiaomi_miio_airpurifier.fan_set_target_humidity",{humidity:C})}handleSpeed(A){const C=A.target.getAttribute("value");this.callService("fan.set_speed",{speed:C})}callService(A,C={},I=!0){const[E,g]=A.split(".");this.hass.callService(E,g,{entity_id:this.config.entity,...C}),I&&(this.requestInProgress=!0,this.requestUpdate())}
renderSpeed(){const{attributes:{speed:A,speed_list:C}}=this.entity;if(!C)return O``;const I=C.indexOf(A);return O`
      <paper-menu-button
        slot="dropdown-trigger"
        .horizontalAlign=${"right"}
        .verticalAlign=${"top"}
        .verticalOffset=${40}
        .noAnimations=${!0}
        @click="${A=>A.stopPropagation()}"
      >
        <paper-button slot="dropdown-trigger">
          <ha-icon icon="mdi:fan"></ha-icon>
          <span show=${!0}> ${oC("speed."+A)||A} </span>
        </paper-button>
        <paper-listbox
          slot="dropdown-content"
          selected=${I}
          @click="${A=>this.handleSpeed(A)}"
        >
          ${C.map((A=>O`<paper-item value=${A}
                >${oC("speed."+A)||A}</paper-item
              >`))}
        </paper-listbox>
      </paper-menu-button>
    `}renderTarget(){const{attributes:{target_humidity:A}}=this.entity;return O`
      <paper-menu-button
        slot="dropdown-trigger"
        .horizontalAlign=${"right"}
        .verticalAlign=${"top"}
        .verticalOffset=${40}
        .noAnimations=${!0}
        @click="${A=>A.stopPropagation()}"
      >
        <paper-button slot="dropdown-trigger">
          <ha-icon icon="mdi:water-percent"></ha-icon>
          <span show=${!0}> ${A}%</span>
        </paper-button>
        <paper-listbox
          slot="dropdown-content"
          selected=${I}
          @click="${A=>this.handleTarget(A)}"
        ><paper-item value="20">20%</paper-item>
		<paper-item value="30">30%</paper-item>
		<paper-item value="40">40%</paper-item>
		<paper-item value="50">50%</paper-item>
		<paper-item value="60">60%</paper-item>
		<paper-item value="70">70%</paper-item>
        </paper-listbox>
      </paper-menu-button>
    `}renderAQI(){const{aqi:A={}}=this.config,{entity_id:C,attribute:I="aqi",unit:E="AQI"}=A,g=C?this.hass.states[C].state:this.entity.attributes[I];let Q="";return g<10?Q=O`<span class="number-off">00</span>`:g<100&&(Q=O`<span class="number-off">0</span>`),O`
      
    `}renderName(){const{attributes:{friendly_name:A}}=this.entity;return this.showName?O` <div class="friendly-name">${A}</div> `:O``}renderState(){const{state:A}=this.entity,C=oC("state."+A)||A;return this.showState?O`
      <div class="state">
        <span class="state-text" alt=${C}>
          ${C}
        </span>
        <ha-circular-progress
          .active=${this.requestInProgress}
          size="small"
        ></ha-circular-progress>
      </div>
    `:O``}renderStats(){const{stats:A=[]}=this.config;return(A||[]).map((({entity_id:A,attribute:C,unit:I,subtitle:E})=>{if(!A&&!C)return O``;const g=A?this.hass.states[A].state:this.entity.attributes[C];return O`
        <div class="stats-block">
          <span class="stats-value">${g}</span>
          ${I}
          <div class="stats-subtitle">${E}</div>
        </div>
      `}))}renderToolbar(){const{actions:A=[]}=this.config,{state:C,attributes:I}=this.entity;if(!this.showToolbar)return O``;const E=A.map((({name:A,icon:C,service:E,service_data:g,speed:Q,xiaomi_miio_favorite_level:B})=>{const M=E||Q===I.speed&&B===I.favorite_level||Q===I.speed&&!B;return O`
          <ha-icon-button
            icon="${C}"
            title="${A}"
            class="${M?"active":""}"
            @click="${()=>{if(E&&this.callService(E,g),Q&&this.callService("fan.set_speed",{speed:Q}),Q&&B&&(this.callService("fan.set_speed",{speed:Q}),setTimeout((()=>{this.callService("xiaomi_miio.fan_set_favorite_level",{level:B})}),500)),!Q&&B)throw new Error(oC("error.xiaomi_miio_level_without_speed"))}}"
          ></ha-icon-button>
        `}));return O`
      <div class="toolbar">
        <ha-icon-button
          icon="hass:power"
          class="${"on"===C?"active":""}"
          title="${oC("common.toggle_power")}"
          @click="${()=>this.callService("fan.toggle")}"
        >
        </ha-icon-button>

        <div class="fill-gap"></div>

        ${E}
      </div>
    `}render(){if(!this.entity)return O`
        <ha-card>
          <div class="preview not-available">
            <div class="metadata">
              <div class="not-available">
                ${oC("common.not_available")}
              </div>
            <div>
          </div>
        </ha-card>
      `;const{state:A}=this.entity,C="on"===A?"working":"standby",I=this.compactView?"compact":C;return O`
      <ha-card>
        <div
          class="preview"
          @click="${()=>this.handleMore()}"
          ?more-info="true"
        >
          <div class="header">
            <div class="speed">${this.renderSpeed()}</div>
            <div class="target">${this.renderTarget()}</div>
          </div>

          <div class="image ${I}">${this.renderAQI()}</div>

          <div class="metadata">${this.renderName()} ${this.renderState()}</div>

          <div class="stats">${this.renderStats()}</div>
        </div>

        ${this.renderToolbar()}
      </ha-card>
    `}}),window.customCards=window.customCards||[],window.customCards.push({preview:!0,type:"humidifier-card",name:oC("common.name"),description:oC("common.description")});