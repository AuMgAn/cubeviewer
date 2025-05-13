var sS=Object.defineProperty,oS=Object.defineProperties;var aS=Object.getOwnPropertyDescriptors;var Hv=Object.getOwnPropertySymbols;var cS=Object.prototype.hasOwnProperty,lS=Object.prototype.propertyIsEnumerable;var zv=(n,e,t)=>e in n?sS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,te=(n,e)=>{for(var t in e||={})cS.call(e,t)&&zv(n,t,e[t]);if(Hv)for(var t of Hv(e))lS.call(e,t)&&zv(n,t,e[t]);return n},qe=(n,e)=>oS(n,aS(e));var xs=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function Gh(n,e){return Object.is(n,e)}var Ut=null,Uc=!1,jh=1,On=Symbol("SIGNAL");function Ze(n){let e=Ut;return Ut=n,e}function Wh(){return Ut}var Jo={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Qo(n){if(Uc)throw new Error("");if(Ut===null)return;Ut.consumerOnSignalRead(n);let e=Ut.nextProducerIndex++;if(zc(Ut),e<Ut.producerNode.length&&Ut.producerNode[e]!==n&&Ko(Ut)){let t=Ut.producerNode[e];Hc(t,Ut.producerIndexOfThis[e])}Ut.producerNode[e]!==n&&(Ut.producerNode[e]=n,Ut.producerIndexOfThis[e]=Ko(Ut)?jv(n,Ut,e):0),Ut.producerLastReadVersion[e]=n.version}function Gv(){jh++}function $h(n){if(!(Ko(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===jh)){if(!n.producerMustRecompute(n)&&!Zh(n)){zh(n);return}n.producerRecomputeValue(n),zh(n)}}function qh(n){if(n.liveConsumerNode===void 0)return;let e=Uc;Uc=!0;try{for(let t of n.liveConsumerNode)t.dirty||uS(t)}finally{Uc=e}}function Xh(){return Ut?.consumerAllowSignalWrites!==!1}function uS(n){n.dirty=!0,qh(n),n.consumerMarkedDirty?.(n)}function zh(n){n.dirty=!1,n.lastCleanEpoch=jh}function Vc(n){return n&&(n.nextProducerIndex=0),Ze(n)}function Yh(n,e){if(Ze(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Ko(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Hc(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Zh(n){zc(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||($h(t),i!==t.version))return!0}return!1}function Kh(n){if(zc(n),Ko(n))for(let e=0;e<n.producerNode.length;e++)Hc(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function jv(n,e,t){if(Wv(n),n.liveConsumerNode.length===0&&$v(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=jv(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function Hc(n,e){if(Wv(n),n.liveConsumerNode.length===1&&$v(n))for(let i=0;i<n.producerNode.length;i++)Hc(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];zc(r),r.producerIndexOfThis[i]=e}}function Ko(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function zc(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Wv(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function $v(n){return n.producerNode!==void 0}function Jh(n,e){let t=Object.create(dS);t.computation=n,e!==void 0&&(t.equal=e);let i=()=>{if($h(t),Qo(t),t.value===Bc)throw t.error;return t.value};return i[On]=t,i}var Vh=Symbol("UNSET"),Hh=Symbol("COMPUTING"),Bc=Symbol("ERRORED"),dS=qe(te({},Jo),{value:Vh,dirty:!0,error:null,equal:Gh,kind:"computed",producerMustRecompute(n){return n.value===Vh||n.value===Hh},producerRecomputeValue(n){if(n.value===Hh)throw new Error("Detected cycle in computations.");let e=n.value;n.value=Hh;let t=Vc(n),i,r=!1;try{i=n.computation(),Ze(null),r=e!==Vh&&e!==Bc&&i!==Bc&&n.equal(e,i)}catch(s){i=Bc,n.error=s}finally{Yh(n,t)}if(r){n.value=e;return}n.value=i,n.version++}});function hS(){throw new Error}var qv=hS;function Xv(n){qv(n)}function Qh(n){qv=n}var fS=null;function ef(n,e){let t=Object.create(Gc);t.value=n,e!==void 0&&(t.equal=e);let i=()=>(Qo(t),t.value);return i[On]=t,i}function ea(n,e){Xh()||Xv(n),n.equal(n.value,e)||(n.value=e,pS(n))}function tf(n,e){Xh()||Xv(n),ea(n,e(n.value))}var Gc=qe(te({},Jo),{equal:Gh,value:void 0,kind:"signal"});function pS(n){n.version++,Gv(),qh(n),fS?.()}function nf(n){let e=Ze(null);try{return n()}finally{Ze(e)}}var rf;function ta(){return rf}function Ai(n){let e=rf;return rf=n,e}var jc=Symbol("NotFound");function Fe(n){return typeof n=="function"}function Ms(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Wc=Ms(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function na(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Ot=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Fe(i))try{i()}catch(s){e=s instanceof Wc?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Yv(s)}catch(o){e=e??[],o instanceof Wc?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Wc(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Yv(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&na(t,e)}remove(e){let{_finalizers:t}=this;t&&na(t,e),e instanceof n&&e._removeParent(this)}};Ot.EMPTY=(()=>{let n=new Ot;return n.closed=!0,n})();var sf=Ot.EMPTY;function $c(n){return n instanceof Ot||n&&"closed"in n&&Fe(n.remove)&&Fe(n.add)&&Fe(n.unsubscribe)}function Yv(n){Fe(n)?n():n.unsubscribe()}var Kn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var bs={setTimeout(n,e,...t){let{delegate:i}=bs;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=bs;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function qc(n){bs.setTimeout(()=>{let{onUnhandledError:e}=Kn;if(e)e(n);else throw n})}function ia(){}var Zv=of("C",void 0,void 0);function Kv(n){return of("E",void 0,n)}function Jv(n){return of("N",n,void 0)}function of(n,e,t){return{kind:n,value:e,error:t}}var Or=null;function Es(n){if(Kn.useDeprecatedSynchronousErrorHandling){let e=!Or;if(e&&(Or={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Or;if(Or=null,t)throw i}}else n()}function Qv(n){Kn.useDeprecatedSynchronousErrorHandling&&Or&&(Or.errorThrown=!0,Or.error=n)}var Fr=class extends Ot{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,$c(e)&&e.add(this)):this.destination=xS}static create(e,t,i){return new Ss(e,t,i)}next(e){this.isStopped?cf(Jv(e),this):this._next(e)}error(e){this.isStopped?cf(Kv(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?cf(Zv,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},yS=Function.prototype.bind;function af(n,e){return yS.call(n,e)}var lf=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Xc(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Xc(i)}else Xc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Xc(t)}}},Ss=class extends Fr{constructor(e,t,i){super();let r;if(Fe(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Kn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&af(e.next,s),error:e.error&&af(e.error,s),complete:e.complete&&af(e.complete,s)}):r=e}this.destination=new lf(r)}};function Xc(n){Kn.useDeprecatedSynchronousErrorHandling?Qv(n):qc(n)}function _S(n){throw n}function cf(n,e){let{onStoppedNotification:t}=Kn;t&&bs.setTimeout(()=>t(n,e))}var xS={closed:!0,next:ia,error:_S,complete:ia};var ws=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Mn(n){return n}function uf(...n){return df(n)}function df(n){return n.length===0?Mn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var dt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=bS(t)?t:new Ss(t,i,r);return Es(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=ey(i),new i((r,s)=>{let o=new Ss({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[ws](){return this}pipe(...t){return df(t)(this)}toPromise(t){return t=ey(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function ey(n){var e;return(e=n??Kn.Promise)!==null&&e!==void 0?e:Promise}function MS(n){return n&&Fe(n.next)&&Fe(n.error)&&Fe(n.complete)}function bS(n){return n&&n instanceof Fr||MS(n)&&$c(n)}function hf(n){return Fe(n?.lift)}function nt(n){return e=>{if(hf(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ke(n,e,t,i,r){return new ff(n,e,t,i,r)}var ff=class extends Fr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Cs(){return nt((n,e)=>{let t=null;n._refCount++;let i=Ke(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var Ts=class extends dt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,hf(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Ot;let t=this.getSubject();e.add(this.source.subscribe(Ke(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Ot.EMPTY)}return e}refCount(){return Cs()(this)}};var ty=Ms(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Bt=(()=>{class n extends dt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Yc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new ty}next(t){Es(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Es(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Es(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?sf:(this.currentObservers=null,s.push(t),new Ot(()=>{this.currentObservers=null,na(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new dt;return t.source=this,t}}return n.create=(e,t)=>new Yc(e,t),n})(),Yc=class extends Bt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:sf}};var Yt=class extends Bt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var hn=new dt(n=>n.complete());function ny(n){return n&&Fe(n.schedule)}function iy(n){return n[n.length-1]}function Zc(n){return Fe(iy(n))?n.pop():void 0}function Ji(n){return ny(iy(n))?n.pop():void 0}function sy(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function ry(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Lr(n){return this instanceof Lr?(this.v=n,this):new Lr(n)}function oy(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(y){return new Promise(function(m,p){s.push([h,y,m,p])>1||c(h,y)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(y){f(s[0][3],y)}}function l(h){h.value instanceof Lr?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function ay(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof ry=="function"?ry(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Kc=n=>n&&typeof n.length=="number"&&typeof n!="function";function Jc(n){return Fe(n?.then)}function Qc(n){return Fe(n[ws])}function el(n){return Symbol.asyncIterator&&Fe(n?.[Symbol.asyncIterator])}function tl(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function ES(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var nl=ES();function il(n){return Fe(n?.[nl])}function rl(n){return oy(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Lr(t.read());if(r)return yield Lr(void 0);yield yield Lr(i)}}finally{t.releaseLock()}})}function sl(n){return Fe(n?.getReader)}function Ft(n){if(n instanceof dt)return n;if(n!=null){if(Qc(n))return SS(n);if(Kc(n))return wS(n);if(Jc(n))return CS(n);if(el(n))return cy(n);if(il(n))return TS(n);if(sl(n))return DS(n)}throw tl(n)}function SS(n){return new dt(e=>{let t=n[ws]();if(Fe(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function wS(n){return new dt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function CS(n){return new dt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,qc)})}function TS(n){return new dt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function cy(n){return new dt(e=>{AS(n,e).catch(t=>e.error(t))})}function DS(n){return cy(rl(n))}function AS(n,e){var t,i,r,s;return sy(this,void 0,void 0,function*(){try{for(t=ay(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function fn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function ol(n,e=0){return nt((t,i)=>{t.subscribe(Ke(i,r=>fn(i,n,()=>i.next(r),e),()=>fn(i,n,()=>i.complete(),e),r=>fn(i,n,()=>i.error(r),e)))})}function al(n,e=0){return nt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function ly(n,e){return Ft(n).pipe(al(e),ol(e))}function uy(n,e){return Ft(n).pipe(al(e),ol(e))}function dy(n,e){return new dt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function hy(n,e){return new dt(t=>{let i;return fn(t,e,()=>{i=n[nl](),fn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Fe(i?.return)&&i.return()})}function cl(n,e){if(!n)throw new Error("Iterable cannot be null");return new dt(t=>{fn(t,e,()=>{let i=n[Symbol.asyncIterator]();fn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function fy(n,e){return cl(rl(n),e)}function py(n,e){if(n!=null){if(Qc(n))return ly(n,e);if(Kc(n))return dy(n,e);if(Jc(n))return uy(n,e);if(el(n))return cl(n,e);if(il(n))return hy(n,e);if(sl(n))return fy(n,e)}throw tl(n)}function Dt(n,e){return e?py(n,e):Ft(n)}function Le(...n){let e=Ji(n);return Dt(n,e)}function Ds(n,e){let t=Fe(n)?n:()=>n,i=r=>r.error(t());return new dt(e?r=>e.schedule(i,0,r):i)}function pf(n){return!!n&&(n instanceof dt||Fe(n.lift)&&Fe(n.subscribe))}var Ii=Ms(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Je(n,e){return nt((t,i)=>{let r=0;t.subscribe(Ke(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:IS}=Array;function RS(n,e){return IS(e)?n(...e):n(e)}function ll(n){return Je(e=>RS(n,e))}var{isArray:NS}=Array,{getPrototypeOf:PS,prototype:OS,keys:FS}=Object;function ul(n){if(n.length===1){let e=n[0];if(NS(e))return{args:e,keys:null};if(LS(e)){let t=FS(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function LS(n){return n&&typeof n=="object"&&PS(n)===OS}function dl(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function hl(...n){let e=Ji(n),t=Zc(n),{args:i,keys:r}=ul(n);if(i.length===0)return Dt([],e);let s=new dt(kS(i,e,r?o=>dl(r,o):Mn));return t?s.pipe(ll(t)):s}function kS(n,e,t=Mn){return i=>{my(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)my(e,()=>{let l=Dt(n[c],e),u=!1;l.subscribe(Ke(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function my(n,e,t){n?fn(t,n,e):e()}function gy(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let m=!1;Ft(t(y,u++)).subscribe(Ke(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?fn(e,o,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(Ke(e,h,()=>{d=!0,f()})),()=>{a?.()}}function Vt(n,e,t=1/0){return Fe(e)?Vt((i,r)=>Je((s,o)=>e(i,s,r,o))(Ft(n(i,r))),t):(typeof e=="number"&&(t=e),nt((i,r)=>gy(i,r,n,t)))}function vy(n=1/0){return Vt(Mn,n)}function yy(){return vy(1)}function As(...n){return yy()(Dt(n,Ji(n)))}function fl(n){return new dt(e=>{Ft(n()).subscribe(e)})}function mf(...n){let e=Zc(n),{args:t,keys:i}=ul(n),r=new dt(s=>{let{length:o}=t;if(!o){s.complete();return}let a=new Array(o),c=o,l=o;for(let u=0;u<o;u++){let d=!1;Ft(t[u]).subscribe(Ke(s,f=>{d||(d=!0,l--),a[u]=f},()=>c--,void 0,()=>{(!c||!d)&&(l||s.next(i?dl(i,a):a),s.complete())}))}});return e?r.pipe(ll(e)):r}function Jn(n,e){return nt((t,i)=>{let r=0;t.subscribe(Ke(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Qi(n){return nt((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Ke(t,void 0,void 0,o=>{s=Ft(n(o,Qi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function _y(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Ke(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function Is(n,e){return Fe(e)?Vt(n,e,1):Vt(n,1)}function er(n){return nt((e,t)=>{let i=!1;e.subscribe(Ke(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Ri(n){return n<=0?()=>hn:nt((e,t)=>{let i=0;e.subscribe(Ke(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function pl(n=US){return nt((e,t)=>{let i=!1;e.subscribe(Ke(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function US(){return new Ii}function ra(n){return nt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Ni(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Jn((r,s)=>n(r,s,i)):Mn,Ri(1),t?er(e):pl(()=>new Ii))}function Rs(n){return n<=0?()=>hn:nt((e,t)=>{let i=[];e.subscribe(Ke(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function gf(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Jn((r,s)=>n(r,s,i)):Mn,Rs(1),t?er(e):pl(()=>new Ii))}function vf(n,e){return nt(_y(n,e,arguments.length>=2,!0))}function yf(...n){let e=Ji(n);return nt((t,i)=>{(e?As(n,t,e):As(n,t)).subscribe(i)})}function Qn(n,e){return nt((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Ke(i,c=>{r?.unsubscribe();let l=0,u=s++;Ft(n(c,u)).subscribe(r=Ke(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function _f(n){return nt((e,t)=>{Ft(n).subscribe(Ke(t,()=>t.complete(),ia)),!t.closed&&e.subscribe(t)})}function Zt(n,e,t){let i=Fe(n)||e||t?{next:n,error:e,complete:t}:n;return i?nt((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Ke(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Mn}var BS="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",ye=class extends Error{code;constructor(e,t){super(HS(e,t)),this.code=e}};function VS(n){return`NG0${Math.abs(n)}`}function HS(n,e){return`${VS(n)}${e?": "+e:""}`}var o_=Symbol("InputSignalNode#UNSET"),zS=qe(te({},Gc),{transformFn:void 0,applyValueToInputSignal(n,e){ea(n,e)}});function a_(n,e){let t=Object.create(zS);t.value=n,t.transformFn=e?.transform;function i(){if(Qo(t),t.value===o_){let r=null;throw new ye(-950,r)}return t.value}return i[On]=t,i}function va(n){return{toString:n}.toString()}var ml="__parameters__";function GS(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function c_(n,e,t){return va(()=>{let i=GS(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(ml)?c[ml]:Object.defineProperty(c,ml,{value:[]})[ml];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function yt(n){for(let e in n)if(n[e]===yt)return e;throw Error("Could not find renamed property on target object.")}function jS(n,e){for(let t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}function mn(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(mn).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function Of(n,e){return n?e?`${n} ${e}`:n:e||""}var WS=yt({__forward_ref__:yt});function js(n){return n.__forward_ref__=js,n.toString=function(){return mn(this())},n}function on(n){return l_(n)?n():n}function l_(n){return typeof n=="function"&&n.hasOwnProperty(WS)&&n.__forward_ref__===js}function Te(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Xr(n){return{providers:n.providers||[],imports:n.imports||[]}}function Xl(n){return xy(n,d_)||xy(n,h_)}function u_(n){return Xl(n)!==null}function xy(n,e){return n.hasOwnProperty(e)?n[e]:null}function $S(n){let e=n&&(n[d_]||n[h_]);return e||null}function My(n){return n&&(n.hasOwnProperty(by)||n.hasOwnProperty(qS))?n[by]:null}var d_=yt({\u0275prov:yt}),by=yt({\u0275inj:yt}),h_=yt({ngInjectableDef:yt}),qS=yt({ngInjectorDef:yt}),be=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Te({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function f_(n){return n&&!!n.\u0275providers}var XS=yt({\u0275cmp:yt}),YS=yt({\u0275dir:yt}),ZS=yt({\u0275pipe:yt}),KS=yt({\u0275mod:yt}),bl=yt({\u0275fac:yt}),ca=yt({__NG_ELEMENT_ID__:yt}),Ey=yt({__NG_ENV_ID__:yt});function El(n){return typeof n=="string"?n:n==null?"":String(n)}function JS(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():El(n)}function p_(n,e){throw new ye(-200,n)}function Ep(n,e){throw new ye(-201,!1)}var Ge=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Ge||{}),Ff;function m_(){return Ff}function Fn(n){let e=Ff;return Ff=n,e}function g_(n,e,t){let i=Xl(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Ge.Optional)return null;if(e!==void 0)return e;Ep(n,"Injector")}var QS={},kr=QS,Lf="__NG_DI_FLAG__",Sl=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=t;return this.injector.get(e,i.optional?jc:kr,i)}},wl="ngTempTokenPath",ew="ngTokenPath",tw=/\n/gm,nw="\u0275",Sy="__source";function iw(n,e=Ge.Default){if(ta()===void 0)throw new ye(-203,!1);if(ta()===null)return g_(n,void 0,e);{let t=ta(),i;return t instanceof Sl?i=t.injector:i=t,i.get(n,e&Ge.Optional?null:void 0,e)}}function je(n,e=Ge.Default){return(m_()||iw)(on(n),e)}function ie(n,e=Ge.Default){return je(n,Yl(e))}function Yl(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function kf(n){let e=[];for(let t=0;t<n.length;t++){let i=on(n[t]);if(Array.isArray(i)){if(i.length===0)throw new ye(900,!1);let r,s=Ge.Default;for(let o=0;o<i.length;o++){let a=i[o],c=rw(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(je(r,s))}else e.push(je(i))}return e}function v_(n,e){return n[Lf]=e,n.prototype[Lf]=e,n}function rw(n){return n[Lf]}function sw(n,e,t,i){let r=n[wl];throw e[Sy]&&r.unshift(e[Sy]),n.message=ow(`
`+n.message,r,t,i),n[ew]=r,n[wl]=null,n}function ow(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==nw?n.slice(2):n;let r=mn(e);if(Array.isArray(e))r=e.map(mn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):mn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(tw,`
  `)}`}var aw=v_(c_("Optional"),8);var cw=v_(c_("SkipSelf"),4);function Ls(n,e){let t=n.hasOwnProperty(bl);return t?n[bl]:null}function Sp(n,e){n.forEach(t=>Array.isArray(t)?Sp(t,e):e(t))}function y_(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Cl(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function lw(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function wp(n,e,t){let i=ya(n,e);return i>=0?n[i|1]=t:(i=~i,lw(n,i,e,t)),i}function xf(n,e){let t=ya(n,e);if(t>=0)return n[t|1]}function ya(n,e){return uw(n,e,1)}function uw(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var Br={},pn=[],la=new be(""),__=new be("",-1),x_=new be(""),Tl=class{get(e,t=kr){if(t===kr){let i=new Error(`NullInjectorError: No provider for ${mn(e)}!`);throw i.name="NullInjectorError",i}return t}};function M_(n,e){let t=n[KS]||null;if(!t&&e===!0)throw new Error(`Type ${mn(n)} does not have '\u0275mod' property.`);return t}function ks(n){return n[XS]||null}function dw(n){return n[YS]||null}function hw(n){return n[ZS]||null}function Cp(n){return{\u0275providers:n}}function fw(...n){return{\u0275providers:b_(!0,n),\u0275fromNgModule:!0}}function b_(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Sp(e,o=>{let a=o;Uf(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&E_(r,s),t}function E_(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Tp(r,s=>{e(s,i)})}}function Uf(n,e,t,i){if(n=on(n),!n)return!1;let r=null,s=My(n),o=!s&&ks(n);if(!s&&!o){let c=n.ngModule;if(s=My(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Uf(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Sp(s.imports,u=>{Uf(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&E_(l,e)}if(!a){let l=Ls(r)||(()=>new r);e({provide:r,useFactory:l,deps:pn},r),e({provide:x_,useValue:r,multi:!0},r),e({provide:la,useValue:()=>je(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Tp(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Tp(n,e){for(let t of n)f_(t)&&(t=t.\u0275providers),Array.isArray(t)?Tp(t,e):e(t)}var pw=yt({provide:String,useValue:yt});function S_(n){return n!==null&&typeof n=="object"&&pw in n}function mw(n){return!!(n&&n.useExisting)}function gw(n){return!!(n&&n.useFactory)}function Us(n){return typeof n=="function"}function vw(n){return!!n.useClass}var Zl=new be(""),vl={},wy={},Mf;function Dp(){return Mf===void 0&&(Mf=new Tl),Mf}var Un=class{},ua=class extends Un{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,Vf(e,o=>this.processProvider(o)),this.records.set(__,Ns(void 0,this)),r.has("environment")&&this.records.set(Un,Ns(void 0,this));let s=this.records.get(Zl);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(x_,pn,Ge.Self))}retrieve(e,t){let i=t;return this.get(e,i.optional?jc:kr,i)}destroy(){oa(this),this._destroyed=!0;let e=Ze(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Ze(e)}}onDestroy(e){return oa(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){oa(this);let t=Ai(this),i=Fn(void 0),r;try{return e()}finally{Ai(t),Fn(i)}}get(e,t=kr,i=Ge.Default){if(oa(this),e.hasOwnProperty(Ey))return e[Ey](this);i=Yl(i);let r,s=Ai(this),o=Fn(void 0);try{if(!(i&Ge.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=bw(e)&&Xl(e);l&&this.injectableDefInScope(l)?c=Ns(Bf(e),vl):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&Ge.Self?Dp():this.parent;return t=i&Ge.Optional&&t===kr?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[wl]=a[wl]||[]).unshift(mn(e)),s)throw a;return sw(a,e,"R3InjectorError",this.source)}else throw a}finally{Fn(o),Ai(s)}}resolveInjectorInitializers(){let e=Ze(null),t=Ai(this),i=Fn(void 0),r;try{let s=this.get(la,pn,Ge.Self);for(let o of s)o()}finally{Ai(t),Fn(i),Ze(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(mn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=on(e);let t=Us(e)?e:on(e&&e.provide),i=_w(e);if(!Us(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Ns(void 0,vl,!0),r.factory=()=>kf(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=Ze(null);try{return t.value===wy?p_(mn(e)):t.value===vl&&(t.value=wy,t.value=t.factory()),typeof t.value=="object"&&t.value&&Mw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Ze(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=on(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Bf(n){let e=Xl(n),t=e!==null?e.factory:Ls(n);if(t!==null)return t;if(n instanceof be)throw new ye(204,!1);if(n instanceof Function)return yw(n);throw new ye(204,!1)}function yw(n){if(n.length>0)throw new ye(204,!1);let t=$S(n);return t!==null?()=>t.factory(n):()=>new n}function _w(n){if(S_(n))return Ns(void 0,n.useValue);{let e=w_(n);return Ns(e,vl)}}function w_(n,e,t){let i;if(Us(n)){let r=on(n);return Ls(r)||Bf(r)}else if(S_(n))i=()=>on(n.useValue);else if(gw(n))i=()=>n.useFactory(...kf(n.deps||[]));else if(mw(n))i=()=>je(on(n.useExisting));else{let r=on(n&&(n.useClass||n.provide));if(xw(n))i=()=>new r(...kf(n.deps));else return Ls(r)||Bf(r)}return i}function oa(n){if(n.destroyed)throw new ye(205,!1)}function Ns(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function xw(n){return!!n.deps}function Mw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function bw(n){return typeof n=="function"||typeof n=="object"&&n instanceof be}function Vf(n,e){for(let t of n)Array.isArray(t)?Vf(t,e):t&&f_(t)?Vf(t.\u0275providers,e):e(t)}function ii(n,e){let t;n instanceof ua?(oa(n),t=n):t=new Sl(n);let i,r=Ai(t),s=Fn(void 0);try{return e()}finally{Ai(r),Fn(s)}}function Ew(){return m_()!==void 0||ta()!=null}function Sw(n){return typeof n=="function"}var ki=0,it=1,ke=2,an=3,ni=4,ri=5,Dl=6,Al=7,gn=8,Vr=9,ir=10,Lt=11,da=12,Cy=13,Ws=14,pi=15,Bs=16,Ps=17,Vs=18,Kl=19,C_=20,tr=21,bf=22,Il=23,Ln=24,Ef=25,Pi=26,T_=1;var Hr=7,Rl=8,Nl=9,kn=10;function nr(n){return Array.isArray(n)&&typeof n[T_]=="object"}function Ui(n){return Array.isArray(n)&&n[T_]===!0}function D_(n){return(n.flags&4)!==0}function $s(n){return n.componentOffset>-1}function Ap(n){return(n.flags&1)===1}function mi(n){return!!n.template}function Pl(n){return(n[ke]&512)!==0}function qs(n){return(n[ke]&256)===256}var Hf=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function A_(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var _a=(()=>{let n=()=>I_;return n.ngInherit=!0,n})();function I_(n){return n.type.prototype.ngOnChanges&&(n.setInput=Cw),ww}function ww(){let n=N_(this),e=n?.current;if(e){let t=n.previous;if(t===Br)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function Cw(n,e,t,i,r){let s=this.declaredInputs[i],o=N_(n)||Tw(n,{previous:Br,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Hf(l&&l.currentValue,t,c===Br),A_(n,e,r,t)}var R_="__ngSimpleChanges__";function N_(n){return n[R_]||null}function Tw(n,e){return n[R_]=e}var Ty=null;var xt=function(n,e=null,t){Ty?.(n,e,t)},Dw="svg",Aw="math";function gi(n){for(;Array.isArray(n);)n=n[ki];return n}function P_(n,e){return gi(e[n])}function Bi(n,e){return gi(e[n.index])}function O_(n,e){return n.data[e]}function vi(n,e){let t=e[n];return nr(t)?t:t[ki]}function Ip(n){return(n[ke]&128)===128}function Iw(n){return Ui(n[an])}function Ol(n,e){return e==null?null:n[e]}function F_(n){n[Ps]=0}function L_(n){n[ke]&1024||(n[ke]|=1024,Ip(n)&&Ql(n))}function Rw(n,e){for(;n>0;)e=e[Ws],n--;return e}function Jl(n){return!!(n[ke]&9216||n[Ln]?.dirty)}function zf(n){n[ir].changeDetectionScheduler?.notify(8),n[ke]&64&&(n[ke]|=1024),Jl(n)&&Ql(n)}function Ql(n){n[ir].changeDetectionScheduler?.notify(0);let e=zr(n);for(;e!==null&&!(e[ke]&8192||(e[ke]|=8192,!Ip(e)));)e=zr(e)}function k_(n,e){if(qs(n))throw new ye(911,!1);n[tr]===null&&(n[tr]=[]),n[tr].push(e)}function Nw(n,e){if(n[tr]===null)return;let t=n[tr].indexOf(e);t!==-1&&n[tr].splice(t,1)}function zr(n){let e=n[an];return Ui(e)?e[an]:e}function U_(n){return n[Al]??=[]}function B_(n){return n.cleanup??=[]}var Xe={lFrame:Y_(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Gf=!1;function Pw(){return Xe.lFrame.elementDepthCount}function Ow(){Xe.lFrame.elementDepthCount++}function Fw(){Xe.lFrame.elementDepthCount--}function V_(){return Xe.bindingsEnabled}function Lw(){return Xe.skipHydrationRootTNode!==null}function kw(n){return Xe.skipHydrationRootTNode===n}function Uw(){Xe.skipHydrationRootTNode=null}function Mt(){return Xe.lFrame.lView}function vn(){return Xe.lFrame.tView}function H_(n){return Xe.lFrame.contextLView=n,n[gn]}function z_(n){return Xe.lFrame.contextLView=null,n}function Bn(){let n=G_();for(;n!==null&&n.type===64;)n=n.parent;return n}function G_(){return Xe.lFrame.currentTNode}function Bw(){let n=Xe.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function xa(n,e){let t=Xe.lFrame;t.currentTNode=n,t.isParent=e}function j_(){return Xe.lFrame.isParent}function Vw(){Xe.lFrame.isParent=!1}function W_(){return Gf}function Dy(n){let e=Gf;return Gf=n,e}function Hw(){return Xe.lFrame.bindingIndex}function zw(n){return Xe.lFrame.bindingIndex=n}function Rp(){return Xe.lFrame.bindingIndex++}function Np(n){let e=Xe.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function Gw(){return Xe.lFrame.inI18n}function jw(n,e){let t=Xe.lFrame;t.bindingIndex=t.bindingRootIndex=n,jf(e)}function Ww(){return Xe.lFrame.currentDirectiveIndex}function jf(n){Xe.lFrame.currentDirectiveIndex=n}function $w(n){let e=Xe.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function $_(n){Xe.lFrame.currentQueryIndex=n}function qw(n){let e=n[it];return e.type===2?e.declTNode:e.type===1?n[ri]:null}function q_(n,e,t){if(t&Ge.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Ge.Host);)if(r=qw(s),r===null||(s=s[Ws],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Xe.lFrame=X_();return i.currentTNode=e,i.lView=n,!0}function Pp(n){let e=X_(),t=n[it];Xe.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function X_(){let n=Xe.lFrame,e=n===null?null:n.child;return e===null?Y_(n):e}function Y_(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Z_(){let n=Xe.lFrame;return Xe.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var K_=Z_;function Op(){let n=Z_();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Xw(n){return(Xe.lFrame.contextLView=Rw(n,Xe.lFrame.contextLView))[gn]}function rr(){return Xe.lFrame.selectedIndex}function Gr(n){Xe.lFrame.selectedIndex=n}function Fp(){let n=Xe.lFrame;return O_(n.tView,n.selectedIndex)}function Yw(){return Xe.lFrame.currentNamespace}var J_=!0;function Lp(){return J_}function kp(n){J_=n}function Zw(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=I_(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Q_(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function yl(n,e,t){e0(n,e,3,t)}function _l(n,e,t,i){(n[ke]&3)===t&&e0(n,e,t,i)}function Sf(n,e){let t=n[ke];(t&3)===e&&(t&=16383,t+=1,n[ke]=t)}function e0(n,e,t,i){let r=i!==void 0?n[Ps]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Ps]+=65536),(a<s||s==-1)&&(Kw(n,t,e,c),n[Ps]=(n[Ps]&4294901760)+c+2),c++}function Ay(n,e){xt(4,n,e);let t=Ze(null);try{e.call(n)}finally{Ze(t),xt(5,n,e)}}function Kw(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[ke]>>14<n[Ps]>>16&&(n[ke]&3)===e&&(n[ke]+=16384,Ay(a,s)):Ay(a,s)}var Fs=-1,jr=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function Jw(n){return(n.flags&8)!==0}function Qw(n){return(n.flags&16)!==0}function eC(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];nC(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function tC(n){return n===3||n===4||n===6}function nC(n){return n.charCodeAt(0)===64}function ha(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Iy(n,t,r,null,e[++i]):Iy(n,t,r,null,null))}}return n}function Iy(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function t0(n){return n!==Fs}function Fl(n){return n&32767}function iC(n){return n>>16}function Ll(n,e){let t=iC(n),i=e;for(;t>0;)i=i[Ws],t--;return i}var Wf=!0;function Ry(n){let e=Wf;return Wf=n,e}var rC=256,n0=rC-1,i0=5,sC=0,fi={};function oC(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(ca)&&(i=t[ca]),i==null&&(i=t[ca]=sC++);let r=i&n0,s=1<<r;e.data[n+(r>>i0)]|=s}function kl(n,e){let t=r0(n,e);if(t!==-1)return t;let i=e[it];i.firstCreatePass&&(n.injectorIndex=e.length,wf(i.data,n),wf(e,null),wf(i.blueprint,null));let r=Up(n,e),s=n.injectorIndex;if(t0(r)){let o=Fl(r),a=Ll(r,e),c=a[it].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function wf(n,e){n.push(0,0,0,0,0,0,0,0,e)}function r0(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Up(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=l0(r),i===null)return Fs;if(t++,r=r[Ws],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Fs}function $f(n,e,t){oC(n,e,t)}function s0(n,e,t){if(t&Ge.Optional||n!==void 0)return n;Ep(e,"NodeInjector")}function o0(n,e,t,i){if(t&Ge.Optional&&i===void 0&&(i=null),(t&(Ge.Self|Ge.Host))===0){let r=n[Vr],s=Fn(void 0);try{return r?r.get(e,i,t&Ge.Optional):g_(e,i,t&Ge.Optional)}finally{Fn(s)}}return s0(i,e,t)}function a0(n,e,t,i=Ge.Default,r){if(n!==null){if(e[ke]&2048&&!(i&Ge.Self)){let o=dC(n,e,t,i,fi);if(o!==fi)return o}let s=c0(n,e,t,i,fi);if(s!==fi)return s}return o0(e,t,i,r)}function c0(n,e,t,i,r){let s=lC(t);if(typeof s=="function"){if(!q_(e,n,i))return i&Ge.Host?s0(r,t,i):o0(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Ge.Optional))Ep(t);else return o}finally{K_()}}else if(typeof s=="number"){let o=null,a=r0(n,e),c=Fs,l=i&Ge.Host?e[pi][ri]:null;for((a===-1||i&Ge.SkipSelf)&&(c=a===-1?Up(n,e):e[a+8],c===Fs||!Py(i,!1)?a=-1:(o=e[it],a=Fl(c),e=Ll(c,e)));a!==-1;){let u=e[it];if(Ny(s,a,u.data)){let d=aC(a,e,t,o,i,l);if(d!==fi)return d}c=e[a+8],c!==Fs&&Py(i,e[it].data[a+8]===l)&&Ny(s,a,e)?(o=u,a=Fl(c),e=Ll(c,e)):a=-1}}return r}function aC(n,e,t,i,r,s){let o=e[it],a=o.data[n+8],c=i==null?$s(a)&&Wf:i!=o&&(a.type&3)!==0,l=r&Ge.Host&&s===a,u=cC(a,o,t,c,l);return u!==null?Ul(e,o,u,a):fi}function cC(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&mi(h)&&h.type===t)return c}return null}function Ul(n,e,t,i){let r=n[t],s=e.data;if(r instanceof jr){let o=r;o.resolving&&p_(JS(s[t]));let a=Ry(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Fn(o.injectImpl):null,u=q_(n,i,Ge.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&Zw(t,s[t],e)}finally{l!==null&&Fn(l),Ry(a),o.resolving=!1,K_()}}return r}function lC(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(ca)?n[ca]:void 0;return typeof e=="number"?e>=0?e&n0:uC:e}function Ny(n,e,t){let i=1<<n;return!!(t[e+(n>>i0)]&i)}function Py(n,e){return!(n&Ge.Self)&&!(n&Ge.Host&&e)}var Ur=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return a0(this._tNode,this._lView,e,Yl(i),t)}};function uC(){return new Ur(Bn(),Mt())}function Xs(n){return va(()=>{let e=n.prototype.constructor,t=e[bl]||qf(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[bl]||qf(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function qf(n){return l_(n)?()=>{let e=qf(on(n));return e&&e()}:Ls(n)}function dC(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[ke]&2048&&!Pl(o);){let a=c0(s,o,t,i|Ge.Self,fi);if(a!==fi)return a;let c=s.parent;if(!c){let l=o[C_];if(l){let u=l.get(t,fi,i);if(u!==fi)return u}c=l0(o),o=o[Ws]}s=c}return r}function l0(n){let e=n[it],t=e.type;return t===2?e.declTNode:t===1?n[ri]:null}function Oy(n,e=null,t=null,i){let r=u0(n,e,t,i);return r.resolveInjectorInitializers(),r}function u0(n,e=null,t=null,i,r=new Set){let s=[t||pn,fw(n)];return i=i||(typeof n=="object"?void 0:mn(n)),new ua(s,e||Dp(),i||null,r)}var Oi=class n{static THROW_IF_NOT_FOUND=kr;static NULL=new Tl;static create(e,t){if(Array.isArray(e))return Oy({name:""},t,e,"");{let i=e.name??"";return Oy({name:i},e.parent,e.providers,i)}}static \u0275prov=Te({token:n,providedIn:"any",factory:()=>je(__)});static __NG_ELEMENT_ID__=-1};var hC=new be("");hC.__NG_ELEMENT_ID__=n=>{let e=Bn();if(e===null)throw new ye(204,!1);if(e.type&2)return e.value;if(n&Ge.Optional)return null;throw new ye(204,!1)};var d0=!1,eu=(()=>{class n{static __NG_ELEMENT_ID__=fC;static __NG_ENV_ID__=t=>t}return n})(),Xf=class extends eu{_lView;constructor(e){super(),this._lView=e}onDestroy(e){let t=this._lView;return qs(t)?(e(),()=>{}):(k_(t,e),()=>Nw(t,e))}};function fC(){return new Xf(Mt())}var fa=class{},Bp=new be("",{providedIn:"root",factory:()=>!1});var h0=new be(""),f0=new be(""),Ys=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new Yt(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new n})}return n})();var Yf=class extends Bt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,Ew()&&(this.destroyRef=ie(eu,{optional:!0})??void 0,this.pendingTasks=ie(Ys,{optional:!0})??void 0)}emit(e){let t=Ze(null);try{super.next(e)}finally{Ze(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Ot&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Wt=Yf;function Bl(...n){}function p0(n){let e,t;function i(){n=Bl;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function Fy(n){return queueMicrotask(()=>n()),()=>{n=Bl}}var Vp="isAngularZone",Vl=Vp+"_ID",pC=0,$t=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Wt(!1);onMicrotaskEmpty=new Wt(!1);onStable=new Wt(!1);onError=new Wt(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=d0}=e;if(typeof Zone>"u")throw new ye(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,vC(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Vp)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new ye(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new ye(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,mC,Bl,Bl);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},mC={};function Hp(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function gC(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){p0(()=>{n.callbackScheduled=!1,Zf(n),n.isCheckStableRunning=!0,Hp(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Zf(n)}function vC(n){let e=()=>{gC(n)},t=pC++;n._inner=n._inner.fork({name:"angular",properties:{[Vp]:!0,[Vl]:t,[Vl+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(yC(c))return i.invokeTask(s,o,a,c);try{return Ly(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),ky(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return Ly(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!_C(c)&&e(),ky(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Zf(n),Hp(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Zf(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Ly(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function ky(n){n._nesting--,Hp(n)}var Kf=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Wt;onMicrotaskEmpty=new Wt;onStable=new Wt;onError=new Wt;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function yC(n){return m0(n,"__ignore_ng_zone__")}function _C(n){return m0(n,"__scheduler_tick__")}function m0(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Fi=class{_console=console;handleError(e){this._console.error("ERROR",e)}},xC=new be("",{providedIn:"root",factory:()=>{let n=ie($t),e=ie(Fi);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function Uy(n,e){return a_(n,e)}function MC(n){return a_(o_,n)}var g0=(Uy.required=MC,Uy);function bC(){return tu(Bn(),Mt())}function tu(n,e){return new Ma(Bi(n,e))}var Ma=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=bC}return n})();function EC(n){return typeof n=="function"&&n[On]!==void 0}function nu(n,e){let t=ef(n,e?.equal),i=t[On];return t.set=r=>ea(i,r),t.update=r=>tf(i,r),t.asReadonly=SC.bind(t),t}function SC(){let n=this[On];if(n.readonlyFn===void 0){let e=()=>this();e[On]=n,n.readonlyFn=e}return n.readonlyFn}function v0(n){return EC(n)&&typeof n.set=="function"}function y0(n){return(n.flags&128)===128}var _0=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(_0||{}),x0=new Map,wC=0;function CC(){return wC++}function TC(n){x0.set(n[Kl],n)}function Jf(n){x0.delete(n[Kl])}var By="__ngContext__";function ba(n,e){nr(e)?(n[By]=e[Kl],TC(e)):n[By]=e}function M0(n){return E0(n[da])}function b0(n){return E0(n[ni])}function E0(n){for(;n!==null&&!Ui(n);)n=n[ni];return n}var Qf;function S0(n){Qf=n}function DC(){if(Qf!==void 0)return Qf;if(typeof document<"u")return document;throw new ye(210,!1)}var iu=new be("",{providedIn:"root",factory:()=>AC}),AC="ng",zp=new be(""),Ea=new be("",{providedIn:"platform",factory:()=>"unknown"});var Gp=new be("",{providedIn:"root",factory:()=>DC().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var IC="h",RC="b";var w0=!1,NC=new be("",{providedIn:"root",factory:()=>w0});var C0=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(C0||{}),ru=new be(""),Vy=new Set;function jp(n){Vy.has(n)||(Vy.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var PC=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new n})}return n})();var OC=()=>null;function T0(n,e,t=!1){return OC(n,e,t)}function D0(n,e){let t=n.contentQueries;if(t!==null){let i=Ze(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];$_(s),a.contentQueries(2,e[o],o)}}}finally{Ze(i)}}}function ep(n,e,t){$_(0);let i=Ze(null);try{e(n,t)}finally{Ze(i)}}function A0(n,e,t){if(D_(e)){let i=Ze(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{Ze(i)}}}var yi=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(yi||{});var tp=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${BS})`}};function I0(n){return n instanceof tp?n.changingThisBreaksApplicationSecurity:n}function R0(n){return n instanceof Function?n():n}function FC(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var N0="ng-template";function LC(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&FC(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Wp(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Wp(n){return n.type===4&&n.value!==N0}function kC(n,e,t){let i=n.type===4&&!t?N0:n.value;return e===i}function UC(n,e,t){let i=4,r=n.attrs,s=r!==null?HC(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!ei(i)&&!ei(c))return!1;if(o&&ei(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!kC(n,c,t)||c===""&&e.length===1){if(ei(i))return!1;o=!0}}else if(i&8){if(r===null||!LC(n,r,c,t)){if(ei(i))return!1;o=!0}}else{let l=e[++a],u=BC(c,r,Wp(n),t);if(u===-1){if(ei(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(ei(i))return!1;o=!0}}}}return ei(i)||o}function ei(n){return(n&1)===0}function BC(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return zC(e,n)}function VC(n,e,t=!1){for(let i=0;i<e.length;i++)if(UC(n,e[i],t))return!0;return!1}function HC(n){for(let e=0;e<n.length;e++){let t=n[e];if(tC(t))return e}return n.length}function zC(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Hy(n,e){return n?":not("+e.trim()+")":e}function GC(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!ei(o)&&(e+=Hy(s,r),r=""),i=o,s=s||!ei(i);t++}return r!==""&&(e+=Hy(s,r)),e}function jC(n){return n.map(GC).join(",")}function WC(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!ei(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var si={};function $C(n,e){return n.createText(e)}function qC(n,e,t){n.setValue(e,t)}function P0(n,e,t){return n.createElement(e,t)}function Hl(n,e,t,i,r){n.insertBefore(e,t,i,r)}function O0(n,e,t){n.appendChild(e,t)}function zy(n,e,t,i,r){i!==null?Hl(n,e,t,i,r):O0(n,e,t)}function XC(n,e,t){n.removeChild(null,e,t)}function YC(n,e,t){n.setAttribute(e,"style",t)}function ZC(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function F0(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&eC(n,e,i),r!==null&&ZC(n,e,r),s!==null&&YC(n,e,s)}function $p(n,e,t,i,r,s,o,a,c,l,u){let d=Pi+i,f=d+r,h=KC(d,f),g=typeof l=="function"?l():l;return h[it]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function KC(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:si);return t}function JC(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=$p(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function qp(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[ki]=r,d[ke]=i|4|128|8|64|1024,(l!==null||n&&n[ke]&2048)&&(d[ke]|=2048),F_(d),d[an]=d[Ws]=n,d[gn]=t,d[ir]=o||n&&n[ir],d[Lt]=a||n&&n[Lt],d[Vr]=c||n&&n[Vr]||null,d[ri]=s,d[Kl]=CC(),d[Dl]=u,d[C_]=l,d[pi]=e.type==2?n[pi]:d,d}function QC(n,e,t){let i=Bi(e,n),r=JC(t),s=n[ir].rendererFactory,o=Xp(n,qp(n,r,null,L0(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function L0(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function k0(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Xp(n,e){return n[da]?n[Cy][ni]=e:n[da]=e,n[Cy]=e,e}function bn(n=1){U0(vn(),Mt(),rr()+n,!1)}function U0(n,e,t,i){if(!i)if((e[ke]&3)===3){let s=n.preOrderCheckHooks;s!==null&&yl(e,s,t)}else{let s=n.preOrderHooks;s!==null&&_l(e,s,0,t)}Gr(t)}var su=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(su||{});function np(n,e,t,i){let r=Ze(null);try{let[s,o,a]=n.inputs[t],c=null;(o&su.SignalBased)!==0&&(c=e[s][On]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):A_(e,c,s,i)}finally{Ze(r)}}function B0(n,e,t,i,r){let s=rr(),o=i&2;try{Gr(-1),o&&e.length>Pi&&U0(n,e,Pi,!1),xt(o?2:0,r),t(i,r)}finally{Gr(s),xt(o?3:1,r)}}function Yp(n,e,t){sT(n,e,t),(t.flags&64)===64&&oT(n,e,t)}function V0(n,e,t=Bi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function eT(n,e,t,i){let s=i.get(NC,w0)||t===yi.ShadowDom,o=n.selectRootElement(e,s);return tT(o),o}function tT(n){nT(n)}var nT=()=>null;function iT(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function Zp(n,e,t,i,r,s,o,a){if(!a&&Kp(e,n,t,i,r)){$s(e)&&rT(t,e.index);return}if(e.type&3){let c=Bi(e,t);i=iT(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)}else e.type&12}function rT(n,e){let t=vi(e,n);t[ke]&16||(t[ke]|=64)}function sT(n,e,t){let i=t.directiveStart,r=t.directiveEnd;$s(t)&&QC(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||kl(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Ul(e,n,o,t);if(ba(c,e),s!==null&&cT(e,o-i,c,a,t,s),mi(a)){let l=vi(t.index,e);l[gn]=Ul(e,n,o,t)}}}function oT(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=Ww();try{Gr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];jf(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&aT(c,l)}}finally{Gr(-1),jf(o)}}function aT(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function H0(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];VC(e,s.selectors,!1)&&(i??=[],mi(s)?i.unshift(s):i.push(s))}return i}function cT(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];np(i,t,c,l)}}function lT(n,e){let t=n[Vr],i=t?t.get(Fi,null):null;i&&i.handleError(e)}function Kp(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];np(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];np(u,l,i,r),a=!0}return a}function uT(n,e){let t=vi(e,n),i=t[it];dT(i,t);let r=t[ki];r!==null&&t[Dl]===null&&(t[Dl]=T0(r,t[Vr])),xt(18),Jp(i,t,t[gn]),xt(19,t[gn])}function dT(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Jp(n,e,t){Pp(e);try{let i=n.viewQuery;i!==null&&ep(1,i,t);let r=n.template;r!==null&&B0(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Vs]?.finishViewCreation(n),n.staticContentQueries&&D0(n,e),n.staticViewQueries&&ep(2,n.viewQuery,t);let s=n.components;s!==null&&hT(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[ke]&=-5,Op()}}function hT(n,e){for(let t=0;t<e.length;t++)uT(n,e[t])}function fT(n,e,t,i){let r=Ze(null);try{let s=e.tView,a=n[ke]&4096?4096:16,c=qp(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Bs]=l;let u=n[Vs];return u!==null&&(c[Vs]=u.createEmbeddedView(s)),Jp(s,c,t),c}finally{Ze(r)}}function Gy(n,e){return!e||e.firstChild===null||y0(n)}var pT;function Qp(n,e){return pT(n,e)}var Li=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Li||{});function z0(n){return(n.flags&32)===32}function Os(n,e,t,i,r){if(i!=null){let s,o=!1;Ui(i)?s=i:nr(i)&&(o=!0,i=i[ki]);let a=gi(i);n===0&&t!==null?r==null?O0(e,t,a):Hl(e,t,a,r||null,!0):n===1&&t!==null?Hl(e,t,a,r||null,!0):n===2?XC(e,a,o):n===3&&e.destroyNode(a),s!=null&&CT(e,n,s,t,r)}}function mT(n,e){G0(n,e),e[ki]=null,e[ri]=null}function gT(n,e,t,i,r,s){i[ki]=r,i[ri]=e,ou(n,i,t,1,r,s)}function G0(n,e){e[ir].changeDetectionScheduler?.notify(9),ou(n,e,e[Lt],2,null,null)}function vT(n){let e=n[da];if(!e)return Cf(n[it],n);for(;e;){let t=null;if(nr(e))t=e[da];else{let i=e[kn];i&&(t=i)}if(!t){for(;e&&!e[ni]&&e!==n;)nr(e)&&Cf(e[it],e),e=e[an];e===null&&(e=n),nr(e)&&Cf(e[it],e),t=e&&e[ni]}e=t}}function em(n,e){let t=n[Nl],i=t.indexOf(e);t.splice(i,1)}function j0(n,e){if(qs(e))return;let t=e[Lt];t.destroyNode&&ou(n,e,t,3,null,null),vT(e)}function Cf(n,e){if(qs(e))return;let t=Ze(null);try{e[ke]&=-129,e[ke]|=256,e[Ln]&&Kh(e[Ln]),_T(n,e),yT(n,e),e[it].type===1&&e[Lt].destroy();let i=e[Bs];if(i!==null&&Ui(e[an])){i!==e[an]&&em(i,e);let r=e[Vs];r!==null&&r.detachView(n)}Jf(e)}finally{Ze(t)}}function yT(n,e){let t=n.cleanup,i=e[Al];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Al]=null);let r=e[tr];if(r!==null){e[tr]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Il];if(s!==null){e[Il]=null;for(let o of s)o.destroy()}}function _T(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof jr)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];xt(4,a,c);try{c.call(a)}finally{xt(5,a,c)}}else{xt(4,r,s);try{s.call(r)}finally{xt(5,r,s)}}}}}function xT(n,e,t){return MT(n,e.parent,t)}function MT(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[ki];if($s(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===yi.None||r===yi.Emulated)return null}return Bi(i,t)}function bT(n,e,t){return ST(n,e,t)}function ET(n,e,t){return n.type&40?Bi(n,t):null}var ST=ET,jy;function tm(n,e,t,i){let r=xT(n,i,e),s=e[Lt],o=i.parent||e[ri],a=bT(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)zy(s,r,t[c],a,!1);else zy(s,r,t,a,!1);jy!==void 0&&jy(s,i,e,t,r)}function aa(n,e){if(e!==null){let t=e.type;if(t&3)return Bi(e,n);if(t&4)return ip(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return aa(n,i);{let r=n[e.index];return Ui(r)?ip(-1,r):gi(r)}}else{if(t&128)return aa(n,e.next);if(t&32)return Qp(e,n)()||gi(n[e.index]);{let i=W0(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=zr(n[pi]);return aa(r,i)}else return aa(n,e.next)}}}return null}function W0(n,e){if(e!==null){let i=n[pi][ri],r=e.projection;return i.projection[r]}return null}function ip(n,e){let t=kn+n+1;if(t<e.length){let i=e[t],r=i[it].firstChild;if(r!==null)return aa(i,r)}return e[Hr]}function nm(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&ba(gi(a),i),t.flags|=2),!z0(t))if(c&8)nm(n,e,t.child,i,r,s,!1),Os(e,n,r,a,s);else if(c&32){let l=Qp(t,i),u;for(;u=l();)Os(e,n,r,u,s);Os(e,n,r,a,s)}else c&16?wT(n,e,i,t,r,s):Os(e,n,r,a,s);t=o?t.projectionNext:t.next}}function ou(n,e,t,i,r,s){nm(t,i,n.firstChild,e,r,s,!1)}function wT(n,e,t,i,r,s){let o=t[pi],c=o[ri].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Os(e,n,r,u,s)}else{let l=c,u=o[an];y0(i)&&(l.flags|=128),nm(n,e,l,u,r,s,!0)}}function CT(n,e,t,i,r){let s=t[Hr],o=gi(t);s!==o&&Os(e,n,i,s,r);for(let a=kn;a<t.length;a++){let c=t[a];ou(c[it],c,n,e,i,s)}}function TT(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:Li.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=Li.Important),n.setStyle(t,i,r,s))}}function zl(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(gi(s)),Ui(s)&&DT(s,i);let o=t.type;if(o&8)zl(n,e,t.child,i);else if(o&32){let a=Qp(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=W0(e,t);if(Array.isArray(a))i.push(...a);else{let c=zr(e[pi]);zl(c[it],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function DT(n,e){for(let t=kn;t<n.length;t++){let i=n[t],r=i[it].firstChild;r!==null&&zl(i[it],i,r,e)}n[Hr]!==n[ki]&&e.push(n[Hr])}function $0(n){if(n[Ef]!==null){for(let e of n[Ef])e.impl.addSequence(e);n[Ef].length=0}}var q0=[];function AT(n){return n[Ln]??IT(n)}function IT(n){let e=q0.pop()??Object.create(NT);return e.lView=n,e}function RT(n){n.lView[Ln]!==n&&(n.lView=null,q0.push(n))}var NT=qe(te({},Jo),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Ql(n.lView)},consumerOnSignalRead(){this.lView[Ln]=this}});function PT(n){let e=n[Ln]??Object.create(OT);return e.lView=n,e}var OT=qe(te({},Jo),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=zr(n.lView);for(;e&&!X0(e[it]);)e=zr(e);e&&L_(e)},consumerOnSignalRead(){this.lView[Ln]=this}});function X0(n){return n.type!==2}function Y0(n){if(n[Il]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Il])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[ke]&8192)}}var FT=100;function Z0(n,e=!0,t=0){let r=n[ir].rendererFactory,s=!1;s||r.begin?.();try{LT(n,t)}catch(o){throw e&&lT(n,o),o}finally{s||r.end?.()}}function LT(n,e){let t=W_();try{Dy(!0),rp(n,e);let i=0;for(;Jl(n);){if(i===FT)throw new ye(103,!1);i++,rp(n,1)}}finally{Dy(t)}}function kT(n,e,t,i){if(qs(e))return;let r=e[ke],s=!1,o=!1;Pp(e);let a=!0,c=null,l=null;s||(X0(n)?(l=AT(e),c=Vc(l)):Wh()===null?(a=!1,l=PT(e),c=Vc(l)):e[Ln]&&(Kh(e[Ln]),e[Ln]=null));try{F_(e),zw(n.bindingStartIndex),t!==null&&B0(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&yl(e,h,null)}else{let h=n.preOrderHooks;h!==null&&_l(e,h,0,null),Sf(e,0)}if(o||UT(e),Y0(e),K0(e,0),n.contentQueries!==null&&D0(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&yl(e,h)}else{let h=n.contentHooks;h!==null&&_l(e,h,1),Sf(e,1)}VT(n,e);let d=n.components;d!==null&&Q0(e,d,0);let f=n.viewQuery;if(f!==null&&ep(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&yl(e,h)}else{let h=n.viewHooks;h!==null&&_l(e,h,2),Sf(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[bf]){for(let h of e[bf])h();e[bf]=null}s||($0(e),e[ke]&=-73)}catch(u){throw s||Ql(e),u}finally{l!==null&&(Yh(l,c),a&&RT(l)),Op()}}function K0(n,e){for(let t=M0(n);t!==null;t=b0(t))for(let i=kn;i<t.length;i++){let r=t[i];J0(r,e)}}function UT(n){for(let e=M0(n);e!==null;e=b0(e)){if(!(e[ke]&2))continue;let t=e[Nl];for(let i=0;i<t.length;i++){let r=t[i];L_(r)}}}function BT(n,e,t){xt(18);let i=vi(e,n);J0(i,t),xt(19,i[gn])}function J0(n,e){Ip(n)&&rp(n,e)}function rp(n,e){let i=n[it],r=n[ke],s=n[Ln],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Zh(s)),o||=!1,s&&(s.dirty=!1),n[ke]&=-9217,o)kT(i,n,i.template,n[gn]);else if(r&8192){Y0(n),K0(n,1);let a=i.components;a!==null&&Q0(n,a,1),$0(n)}}function Q0(n,e,t){for(let i=0;i<e.length;i++)BT(n,e[i],t)}function VT(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Gr(~r);else{let s=r,o=t[++i],a=t[++i];jw(o,s);let c=e[s];xt(24,c),a(2,c),xt(25,c)}}}finally{Gr(-1)}}function im(n,e){let t=W_()?64:1088;for(n[ir].changeDetectionScheduler?.notify(e);n;){n[ke]|=t;let i=zr(n);if(Pl(n)&&!i)return n;n=i}return null}function ex(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function HT(n,e,t,i=!0){let r=e[it];if(zT(r,e,n,t),i){let o=ip(t,n),a=e[Lt],c=a.parentNode(n[Hr]);c!==null&&gT(r,n[ri],a,e,c,o)}let s=e[Dl];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function sp(n,e){if(n.length<=kn)return;let t=kn+e,i=n[t];if(i){let r=i[Bs];r!==null&&r!==n&&em(r,i),e>0&&(n[t-1][ni]=i[ni]);let s=Cl(n,kn+e);mT(i[it],i);let o=s[Vs];o!==null&&o.detachView(s[it]),i[an]=null,i[ni]=null,i[ke]&=-129}return i}function zT(n,e,t,i){let r=kn+i,s=t.length;i>0&&(t[r-1][ni]=e),i<s-kn?(e[ni]=t[r],y_(t,kn+i,e)):(t.push(e),e[ni]=null),e[an]=t;let o=e[Bs];o!==null&&t!==o&&tx(o,e);let a=e[Vs];a!==null&&a.insertView(n),zf(e),e[ke]|=128}function tx(n,e){let t=n[Nl],i=e[an];if(nr(i))n[ke]|=2;else{let r=i[an][pi];e[pi]!==r&&(n[ke]|=2)}t===null?n[Nl]=[e]:t.push(e)}var pa=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[it];return zl(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[gn]}set context(e){this._lView[gn]=e}get destroyed(){return qs(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[an];if(Ui(e)){let t=e[Rl],i=t?t.indexOf(this):-1;i>-1&&(sp(e,i),Cl(t,i))}this._attachedToViewContainer=!1}j0(this._lView[it],this._lView)}onDestroy(e){k_(this._lView,e)}markForCheck(){im(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ke]&=-129}reattach(){zf(this._lView),this._lView[ke]|=128}detectChanges(){this._lView[ke]|=1024,Z0(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ye(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Pl(this._lView),t=this._lView[Bs];t!==null&&!e&&em(t,this._lView),G0(this._lView[it],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new ye(902,!1);this._appRef=e;let t=Pl(this._lView),i=this._lView[Bs];i!==null&&!t&&tx(i,this._lView),zf(this._lView)}};var au=(()=>{class n{static __NG_ELEMENT_ID__=WT}return n})(),GT=au,jT=class extends GT{_declarationLView;_declarationTContainer;elementRef;constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=fT(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new pa(r)}};function WT(){return $T(Bn(),Mt())}function $T(n,e){return n.type&4?new jT(e,n,tu(n,e)):null}function rm(n,e,t,i,r){let s=n.data[e];if(s===null)s=qT(n,e,t,i,r),Gw()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Bw();s.injectorIndex=o===null?-1:o.injectorIndex}return xa(s,!0),s}function qT(n,e,t,i,r){let s=G_(),o=j_(),a=o?s:s&&s.parent,c=n.data[e]=YT(n,a,t,e,i,r);return XT(n,c,s,o),c}function XT(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function YT(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return Lw()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var cH=new RegExp(`^(\\d+)*(${RC}|${IC})*(.*)`);var ZT=()=>null;function Wy(n,e){return ZT(n,e)}var KT=class{},nx=class{},op=class{resolveComponentFactory(e){throw Error(`No component factory found for ${mn(e)}.`)}},cu=class{static NULL=new op},Hs=class{},lu=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>JT()}return n})();function JT(){let n=Mt(),e=Bn(),t=vi(e.index,n);return(nr(t)?t:n)[Lt]}var QT=(()=>{class n{static \u0275prov=Te({token:n,providedIn:"root",factory:()=>null})}return n})();var Tf={},ap=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Yl(i);let r=this.injector.get(e,Tf,i);return r!==Tf||t===Tf?r:this.parentInjector.get(e,t,i)}};function $y(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Of(r,a);else if(s==2){let c=a,l=e[++o];i=Of(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function At(n,e=Ge.Default){let t=Mt();if(t===null)return je(n,e);let i=Bn();return a0(i,t,on(n),e)}function ix(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a,c=null,l=null,u=tD(o);u===null?a=o:[a,c,l]=u,rD(n,e,t,a,s,c,l)}s!==null&&i!==null&&eD(t,i,s)}function eD(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new ye(-301,!1);i.push(e[r],s)}}function tD(n){let e=null,t=!1;for(let o=0;o<n.length;o++){let a=n[o];if(o===0&&mi(a)&&(e=a),a.findHostDirectiveDefs!==null){t=!0;break}}if(!t)return null;let i=null,r=null,s=null;for(let o of n)o.findHostDirectiveDefs!==null&&(i??=[],r??=new Map,s??=new Map,nD(o,i,s,r)),o===e&&(i??=[],i.push(o));return i!==null?(i.push(...e===null?n:n.slice(1)),[i,r,s]):null}function nD(n,e,t,i){let r=e.length;n.findHostDirectiveDefs(n,e,i),t.set(n,[r,e.length-1])}function iD(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function rD(n,e,t,i,r,s,o){let a=i.length,c=!1;for(let f=0;f<a;f++){let h=i[f];!c&&mi(h)&&(c=!0,iD(n,t,f)),$f(kl(t,e),n,h.type)}uD(t,n.data.length,a);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=k0(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=ha(t.mergedAttrs,h.hostAttrs),oD(n,t,e,d,h),lD(d,h,r),o!==null&&o.has(h)){let[y,m]=o.get(h);t.directiveToIndex.set(h.type,[d,y+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}sD(n,t,s)}function sD(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))qy(0,e,r,i),qy(1,e,r,i),Yy(e,i,!1);else{let s=t.get(r);Xy(0,e,s,i),Xy(1,e,s,i),Yy(e,i,!0)}}}function qy(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),rx(e,s)}}function Xy(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),rx(e,o)}}function rx(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function Yy(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||Wp(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function oD(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Ls(r.type,!0)),o=new jr(s,mi(r),At);n.blueprint[i]=o,t[i]=o,aD(n,e,i,k0(n,t,r.hostVars,si),r)}function aD(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;cD(o)!=a&&o.push(a),o.push(t,i,s)}}function cD(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function lD(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;mi(e)&&(t[""]=n)}}function uD(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function sx(n,e,t,i,r,s,o,a){let c=e.consts,l=Ol(c,o),u=rm(e,n,2,i,l);return s&&ix(e,t,u,Ol(c,a),r),u.mergedAttrs=ha(u.mergedAttrs,u.attrs),u.attrs!==null&&$y(u,u.attrs,!1),u.mergedAttrs!==null&&$y(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function ox(n,e){Q_(n,e),D_(e)&&n.queries.elementEnd(e)}var Gl=class extends cu{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=ks(e);return new ma(t,this.ngModule)}};function dD(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&su.SignalBased)!==0};return r&&(s.transform=r),s})}function hD(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function fD(n,e,t){let i=e instanceof Un?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new ap(t,i):t}function pD(n){let e=n.get(Hs,null);if(e===null)throw new ye(407,!1);let t=n.get(QT,null),i=n.get(fa,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i}}function mD(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return P0(e,t,t==="svg"?Dw:t==="math"?Aw:null)}var ma=class extends nx{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=dD(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=hD(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=jC(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r){xt(22);let s=Ze(null);try{let o=this.componentDef,a=i?["ng-version","19.2.9"]:WC(this.componentDef.selectors[0]),c=$p(0,null,null,1,0,null,null,null,null,[a],null),l=fD(o,r||this.ngModule,e),u=pD(l),d=u.rendererFactory.createRenderer(null,o),f=i?eT(d,i,o.encapsulation,l):mD(o,d),h=qp(null,c,null,512|L0(o),null,null,u,d,l,null,T0(f,l,!0));h[Pi]=f,Pp(h);let g=null;try{let y=sx(Pi,c,h,"#host",()=>[this.componentDef],!0,0);f&&(F0(d,f,y),ba(f,h)),Yp(c,h,y),A0(c,y,h),ox(c,y),t!==void 0&&gD(y,this.ngContentSelectors,t),g=vi(y.index,h),h[gn]=g[gn],Jp(c,h,null)}catch(y){throw g!==null&&Jf(g),Jf(h),y}finally{xt(23),Op()}return new cp(this.componentType,h)}finally{Ze(s)}}},cp=class extends KT{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t){super(),this._rootLView=t,this._tNode=O_(t[it],Pi),this.location=tu(this._tNode,t),this.instance=vi(this._tNode.index,t)[gn],this.hostView=this.changeDetectorRef=new pa(t,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=Kp(i,r[it],r,e,t);this.previousInputValues.set(e,t);let o=vi(i.index,r);im(o,1)}get injector(){return new Ur(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function gD(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Zs=(()=>{class n{static __NG_ELEMENT_ID__=vD}return n})();function vD(){let n=Bn();return _D(n,Mt())}var yD=Zs,ax=class extends yD{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return tu(this._hostTNode,this._hostLView)}get injector(){return new Ur(this._hostTNode,this._hostLView)}get parentInjector(){let e=Up(this._hostTNode,this._hostLView);if(t0(e)){let t=Ll(e,this._hostLView),i=Fl(e),r=t[it].data[i+8];return new Ur(r,t)}else return new Ur(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Zy(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-kn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Wy(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Gy(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!Sw(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new ma(ks(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let y=(o?l:this.parentInjector).get(Un,null);y&&(s=y)}let u=ks(c.componentType??{}),d=Wy(this._lContainer,u?.id??null),f=d?.firstChild??null,h=c.create(l,r,f,s);return this.insertImpl(h.hostView,a,Gy(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(Iw(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[an],l=new ax(c,c[ri],c[an]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return HT(o,r,s,i),e.attachToViewContainerRef(),y_(Df(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Zy(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=sp(this._lContainer,t);i&&(Cl(Df(this._lContainer),t),j0(i[it],i))}detach(e){let t=this._adjustIndex(e,-1),i=sp(this._lContainer,t);return i&&Cl(Df(this._lContainer),t)!=null?new pa(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Zy(n){return n[Rl]}function Df(n){return n[Rl]||(n[Rl]=[])}function _D(n,e){let t,i=e[n.index];return Ui(i)?t=i:(t=ex(i,e,null,n),e[n.index]=t,Xp(e,t)),MD(t,e,n,i),new ax(t,n,e)}function xD(n,e){let t=n[Lt],i=t.createComment(""),r=Bi(e,n),s=t.parentNode(r);return Hl(t,s,i,t.nextSibling(r),!1),i}var MD=SD,bD=()=>!1;function ED(n,e,t){return bD(n,e,t)}function SD(n,e,t,i){if(n[Hr])return;let r;t.type&8?r=gi(i):r=xD(e,t),n[Hr]=r}var zs=class{},sm=class{};var lp=class extends zs{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Gl(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=M_(e);this._bootstrapComponents=R0(s.bootstrap),this._r3Injector=u0(e,t,[{provide:zs,useValue:this},{provide:cu,useValue:this.componentFactoryResolver},...i],mn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},up=class extends sm{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new lp(this.moduleType,e,[])}};var jl=class extends zs{injector;componentFactoryResolver=new Gl(this);instance=null;constructor(e){super();let t=new ua([...e.providers,{provide:zs,useValue:this},{provide:cu,useValue:this.componentFactoryResolver}],e.parent||Dp(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function uu(n,e,t=null){return new jl({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var wD=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=b_(!1,t.type),r=i.length>0?uu([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Te({token:n,providedIn:"environment",factory:()=>new n(je(Un))})}return n})();function Ks(n){return va(()=>{let e=cx(n),t=qe(te({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===_0.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(wD).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||yi.Emulated,styles:n.styles||pn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&jp("NgStandalone"),lx(t);let i=n.dependencies;return t.directiveDefs=Ky(i,!1),t.pipeDefs=Ky(i,!0),t.id=ID(t),t})}function CD(n){return ks(n)||dw(n)}function TD(n){return n!==null}function Yr(n){return va(()=>({type:n.type,bootstrap:n.bootstrap||pn,declarations:n.declarations||pn,imports:n.imports||pn,exports:n.exports||pn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function DD(n,e){if(n==null)return Br;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=su.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function AD(n){if(n==null)return Br;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Vn(n){return va(()=>{let e=cx(n);return lx(e),e})}function cx(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Br,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||pn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:DD(n.inputs,e),outputs:AD(n.outputs),debugInfo:null}}function lx(n){n.features?.forEach(e=>e(n))}function Ky(n,e){if(!n)return null;let t=e?hw:CD;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(TD)}function ID(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function RD(n){return Object.getPrototypeOf(n.prototype).constructor}function Zr(n){let e=RD(n.type),t=!0,i=[n];for(;e;){let r;if(mi(n))r=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new ye(903,!1);r=e.\u0275dir}if(r){if(t){i.push(r);let o=n;o.inputs=Af(n.inputs),o.declaredInputs=Af(n.declaredInputs),o.outputs=Af(n.outputs);let a=r.hostBindings;a&&LD(n,a);let c=r.viewQuery,l=r.contentQueries;if(c&&OD(n,c),l&&FD(n,l),ND(n,r),jS(n.outputs,r.outputs),mi(r)&&r.data.animation){let u=n.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let s=r.features;if(s)for(let o=0;o<s.length;o++){let a=s[o];a&&a.ngInherit&&a(n),a===Zr&&(t=!1)}}e=Object.getPrototypeOf(e)}PD(i)}function ND(n,e){for(let t in e.inputs){if(!e.inputs.hasOwnProperty(t)||n.inputs.hasOwnProperty(t))continue;let i=e.inputs[t];i!==void 0&&(n.inputs[t]=i,n.declaredInputs[t]=e.declaredInputs[t])}}function PD(n){let e=0,t=null;for(let i=n.length-1;i>=0;i--){let r=n[i];r.hostVars=e+=r.hostVars,r.hostAttrs=ha(r.hostAttrs,t=ha(t,r.hostAttrs))}}function Af(n){return n===Br?{}:n===pn?[]:n}function OD(n,e){let t=n.viewQuery;t?n.viewQuery=(i,r)=>{e(i,r),t(i,r)}:n.viewQuery=e}function FD(n,e){let t=n.contentQueries;t?n.contentQueries=(i,r,s)=>{e(i,r,s),t(i,r,s)}:n.contentQueries=e}function LD(n,e){let t=n.hostBindings;t?n.hostBindings=(i,r)=>{e(i,r),t(i,r)}:n.hostBindings=e}function ux(n){return UD(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function kD(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function UD(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function Wr(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function BD(n,e,t,i){let r=Wr(n,e,t);return Wr(n,e+1,i)||r}function VD(n,e,t,i,r,s,o,a,c){let l=e.consts,u=rm(e,n,4,o||null,a||null);V_()&&ix(e,t,u,Ol(l,c),H0),u.mergedAttrs=ha(u.mergedAttrs,u.attrs),Q_(e,u);let d=u.tView=$p(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function HD(n,e,t,i,r,s,o,a,c,l){let u=t+Pi,d=e.firstCreatePass?VD(u,e,n,i,r,s,o,a,c):e.data[u];xa(d,!1);let f=zD(e,n,d,t);Lp()&&tm(e,n,f,d),ba(f,n);let h=ex(f,n,f,d);return n[u]=h,Xp(n,h),ED(h,d,n),Ap(d)&&Yp(e,n,d),c!=null&&V0(n,d,l),d}function du(n,e,t,i,r,s,o,a){let c=Mt(),l=vn(),u=Ol(l.consts,s);return HD(c,l,n,e,t,i,r,u,o,a),du}var zD=GD;function GD(n,e,t,i){return kp(!0),e[Lt].createComment("")}var dx=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var hx=new be("");var jD=(()=>{class n{static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new dp})}return n})(),dp=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}};function Kr(n){return!!n&&typeof n.then=="function"}function fx(n){return!!n&&typeof n.subscribe=="function"}var WD=new be("");var px=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=ie(WD,{optional:!0})??[];injector=ie(Oi);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=ii(this.injector,r);if(Kr(s))t.push(s);else if(fx(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),om=new be("");function $D(){Qh(()=>{throw new ye(600,!1)})}function qD(n){return n.isBoundToModule}var XD=10;var $r=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ie(xC);afterRenderManager=ie(PC);zonelessEnabled=ie(Bp);rootEffectScheduler=ie(jD);dirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Bt;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=ie(Ys).hasPendingTasks.pipe(Je(t=>!t));constructor(){ie(ru,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=ie(Un);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=Oi.NULL){xt(10);let s=t instanceof nx;if(!this._injector.get(px).done){let h="";throw new ye(405,h)}let a;s?a=t:a=this._injector.get(cu).resolveComponentFactory(t),this.componentTypes.push(a.componentType);let c=qD(a)?void 0:this._injector.get(zs),l=i||a.selector,u=a.create(r,[],l,c),d=u.location.nativeElement,f=u.injector.get(hx,null);return f?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),xl(this.components,u),f?.unregisterApplication(d)}),this._loadComponent(u),xt(11,u),u}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){xt(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(C0.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new ye(101,!1);let t=Ze(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Ze(t),this.afterTick.next(),xt(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Hs,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<XD;)xt(14),this.synchronizeOnce(),xt(15)}synchronizeOnce(){if(this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)YD(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Jl(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;xl(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(om,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>xl(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new ye(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xl(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function YD(n,e,t,i){if(!t&&!Jl(n))return;Z0(n,e,t&&!i?0:1)}function am(n,e,t,i){return Wr(n,Rp(),t)?e+El(t)+i:si}function ZD(n,e,t,i,r,s){let o=Hw(),a=BD(n,o,t,r);return Np(2),a?e+El(t)+i+El(r)+s:si}function gl(n,e){return n<<17|e<<2}function qr(n){return n>>17&32767}function KD(n){return(n&2)==2}function JD(n,e){return n&131071|e<<17}function hp(n){return n|2}function Gs(n){return(n&131068)>>2}function If(n,e){return n&-131069|e<<2}function QD(n){return(n&1)===1}function fp(n){return n|1}function eA(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=qr(o),c=Gs(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||ya(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=qr(n[a+1]);n[i+1]=gl(f,a),f!==0&&(n[f+1]=If(n[f+1],i)),n[a+1]=JD(n[a+1],i)}else n[i+1]=gl(a,0),a!==0&&(n[a+1]=If(n[a+1],i)),a=i;else n[i+1]=gl(c,0),a===0?a=i:n[c+1]=If(n[c+1],i),c=i;l&&(n[i+1]=hp(n[i+1])),Jy(n,u,i,!0),Jy(n,u,i,!1),tA(e,u,n,i,s),o=gl(a,c),s?e.classBindings=o:e.styleBindings=o}function tA(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&ya(s,e)>=0&&(t[i+1]=fp(t[i+1]))}function Jy(n,e,t,i){let r=n[t+1],s=e===null,o=i?qr(r):Gs(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];nA(c,e)&&(a=!0,n[o+1]=i?fp(l):hp(l)),o=i?qr(l):Gs(l)}a&&(n[t+1]=i?hp(r):fp(r))}function nA(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?ya(n,e)>=0:!1}var ti={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function iA(n){return n.substring(ti.key,ti.keyEnd)}function rA(n){return sA(n),mx(n,gx(n,0,ti.textEnd))}function mx(n,e){let t=ti.textEnd;return t===e?-1:(e=ti.keyEnd=oA(n,ti.key=e,t),gx(n,e,t))}function sA(n){ti.key=0,ti.keyEnd=0,ti.value=0,ti.valueEnd=0,ti.textEnd=n.length}function gx(n,e,t){for(;e<t&&n.charCodeAt(e)<=32;)e++;return e}function oA(n,e,t){for(;e<t&&n.charCodeAt(e)>32;)e++;return e}function Sa(n,e,t){let i=Mt(),r=Rp();if(Wr(i,r,e)){let s=vn(),o=Fp();Zp(s,o,i,n,e,i[Lt],t,!1)}return Sa}function pp(n,e,t,i,r){Kp(e,n,t,r?"class":"style",i)}function cm(n,e){return cA(n,e,null,!0),cm}function aA(n,e){for(let t=rA(e);t>=0;t=mx(e,t))wp(n,iA(e),!0)}function cA(n,e,t,i){let r=Mt(),s=vn(),o=Np(2);if(s.firstUpdatePass&&yx(s,n,o,i),e!==si&&Wr(r,o,e)){let a=s.data[rr()];_x(s,a,r,r[Lt],n,r[o+1]=gA(e,t),i,o)}}function lA(n,e,t,i){let r=vn(),s=Np(2);r.firstUpdatePass&&yx(r,null,s,i);let o=Mt();if(t!==si&&Wr(o,s,t)){let a=r.data[rr()];if(xx(a,i)&&!vx(r,s)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(t=Of(c,t||"")),pp(r,a,o,t,i)}else mA(r,a,o,o[Lt],o[s+1],o[s+1]=pA(n,e,t),i,s)}}function vx(n,e){return e>=n.expandoStartIndex}function yx(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[rr()],o=vx(n,t);xx(s,i)&&e===null&&!o&&(e=!1),e=uA(r,s,e,i),eA(r,s,e,t,o,i)}}function uA(n,e,t,i){let r=$w(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=Rf(null,n,e,t,i),t=ga(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=Rf(r,n,e,t,i),s===null){let c=dA(n,e,i);c!==void 0&&Array.isArray(c)&&(c=Rf(null,n,e,c[1],i),c=ga(c,e.attrs,i),hA(n,e,i,c))}else s=fA(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function dA(n,e,t){let i=t?e.classBindings:e.styleBindings;if(Gs(i)!==0)return n[qr(i)]}function hA(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[qr(r)]=i}function fA(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=ga(i,o,t)}return ga(i,e.attrs,t)}function Rf(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=ga(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function ga(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),wp(n,o,t?!0:e[++s]))}return n===void 0?null:n}function pA(n,e,t){if(t==null||t==="")return pn;let i=[],r=I0(t);if(Array.isArray(r))for(let s=0;s<r.length;s++)n(i,r[s],!0);else if(typeof r=="object")for(let s in r)r.hasOwnProperty(s)&&n(i,s,r[s]);else typeof r=="string"&&e(i,r);return i}function mA(n,e,t,i,r,s,o,a){r===si&&(r=pn);let c=0,l=0,u=0<r.length?r[0]:null,d=0<s.length?s[0]:null;for(;u!==null||d!==null;){let f=c<r.length?r[c+1]:void 0,h=l<s.length?s[l+1]:void 0,g=null,y;u===d?(c+=2,l+=2,f!==h&&(g=d,y=h)):d===null||u!==null&&u<d?(c+=2,g=u):(l+=2,g=d,y=h),g!==null&&_x(n,e,t,i,g,y,o,a),u=c<r.length?r[c]:null,d=l<s.length?s[l]:null}}function _x(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=QD(l)?Qy(c,e,t,r,Gs(l),o):void 0;if(!Wl(u)){Wl(s)||KD(l)&&(s=Qy(c,null,t,r,a,o));let d=P_(rr(),t);TT(i,o,d,r,s)}}function Qy(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===si&&(f=d?pn:void 0);let h=d?xf(f,i):u===i?f:void 0;if(l&&!Wl(h)&&(h=xf(c,i)),Wl(h)&&(a=h,o))return a;let g=n[r+1];r=o?qr(g):Gs(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=xf(c,i))}return a}function Wl(n){return n!==void 0}function gA(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=mn(I0(n)))),n}function xx(n,e){return(n.flags&(e?8:16))!==0}function lm(n,e,t){let i=Mt(),r=am(i,n,e,t);lA(wp,aA,r,!0)}function Ht(n,e,t,i){let r=Mt(),s=vn(),o=Pi+n,a=r[Lt],c=s.firstCreatePass?sx(o,s,r,e,H0,V_(),t,i):s.data[o],l=vA(s,r,c,a,e,n);r[o]=l;let u=Ap(c);return xa(c,!0),F0(a,l,c),!z0(c)&&Lp()&&tm(s,r,l,c),(Pw()===0||u)&&ba(l,r),Ow(),u&&(Yp(s,r,c),A0(s,c,r)),i!==null&&V0(r,c),Ht}function It(){let n=Bn();j_()?Vw():(n=n.parent,xa(n,!1));let e=n;kw(e)&&Uw(),Fw();let t=vn();return t.firstCreatePass&&ox(t,e),e.classesWithoutHost!=null&&Jw(e)&&pp(t,e,Mt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Qw(e)&&pp(t,e,Mt(),e.stylesWithoutHost,!1),It}function yn(n,e,t,i){return Ht(n,e,t,i),It(),yn}var vA=(n,e,t,i,r,s)=>(kp(!0),P0(i,r,Yw()));function Mx(){return Mt()}var $l="en-US";var yA=$l;function _A(n){typeof n=="string"&&(yA=n.toLowerCase().replace(/_/g,"-"))}function e_(n,e,t){return function i(r){if(r===Function)return t;let s=$s(n)?vi(n.index,e):e;im(s,5);let o=e[gn],a=t_(e,o,t,r),c=i.__ngNextListenerFn__;for(;c;)a=t_(e,o,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function t_(n,e,t,i){let r=Ze(null);try{return xt(6,e,t),t(i)!==!1}catch(s){return xA(n,s),!1}finally{xt(7,e,t),Ze(r)}}function xA(n,e){let t=n[Vr],i=t?t.get(Fi,null):null;i&&i.handleError(e)}function n_(n,e,t,i,r,s){let o=e[t],a=e[it],l=a.data[t].outputs[i],u=o[l],d=a.firstCreatePass?B_(a):null,f=U_(e),h=u.subscribe(s),g=f.length;f.push(s,h),d&&d.push(r,n.index,g,-(g+1))}var MA=new Map;function Jr(n,e,t,i){let r=Mt(),s=vn(),o=Bn();return bx(s,r,r[Lt],o,n,e,i),Jr}function bA(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Al],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function bx(n,e,t,i,r,s,o){let a=Ap(i),l=n.firstCreatePass?B_(n):null,u=U_(e),d=!0;if(i.type&3||o){let f=Bi(i,e),h=o?o(f):f,g=u.length,y=o?p=>o(gi(p[i.index])):i.index,m=null;if(!o&&a&&(m=bA(n,e,r,i.index)),m!==null){let p=m.__ngLastListenerFn__||m;p.__ngNextListenerFn__=s,m.__ngLastListenerFn__=s,d=!1}else{s=e_(i,e,s);let p=e[Vr].get(iu);MA.get(p)?.(h,r,s);let S=t.listen(h,r,s);u.push(s,S),l&&l.push(r,y,g,g+1)}}else s=e_(i,e,s);if(d){let f=i.outputs?.[r],h=i.hostDirectiveOutputs?.[r];if(h&&h.length)for(let g=0;g<h.length;g+=2){let y=h[g],m=h[g+1];n_(i,e,y,m,r,s)}if(f&&f.length)for(let g of f)n_(i,e,g,r,r,s)}}function um(n=1){return Xw(n)}function hu(n,e,t){return Ex(n,"",e,"",t),hu}function Ex(n,e,t,i,r){let s=Mt(),o=am(s,e,t,i);if(o!==si){let a=vn(),c=Fp();Zp(a,c,s,n,o,s[Lt],r,!1)}return Ex}function En(n,e=""){let t=Mt(),i=vn(),r=n+Pi,s=i.firstCreatePass?rm(i,r,1,e,null):i.data[r],o=EA(i,t,s,e,n);t[r]=o,Lp()&&tm(i,t,o,s),xa(s,!1)}var EA=(n,e,t,i,r)=>(kp(!0),$C(e[Lt],i));function Js(n){return Sx("",n,""),Js}function Sx(n,e,t){let i=Mt(),r=am(i,n,e,t);return r!==si&&wx(i,rr(),r),Sx}function dm(n,e,t,i,r){let s=Mt(),o=ZD(s,n,e,t,i,r);return o!==si&&wx(s,rr(),o),dm}function wx(n,e,t){let i=P_(e,n);qC(n[Lt],i,t)}function wa(n,e,t){v0(e)&&(e=e());let i=Mt(),r=Rp();if(Wr(i,r,e)){let s=vn(),o=Fp();Zp(s,o,i,n,e,i[Lt],t,!1)}return wa}function fu(n,e){let t=v0(n);return t&&n.set(e),t}function Ca(n,e){let t=Mt(),i=vn(),r=Bn();return bx(i,t,t[Lt],r,n,e),Ca}function SA(n,e,t){let i=vn();if(i.firstCreatePass){let r=mi(n);mp(t,i.data,i.blueprint,r,!0),mp(e,i.data,i.blueprint,r,!1)}}function mp(n,e,t,i,r){if(n=on(n),Array.isArray(n))for(let s=0;s<n.length;s++)mp(n[s],e,t,i,r);else{let s=vn(),o=Mt(),a=Bn(),c=Us(n)?n:on(n.provide),l=w_(n),u=a.providerIndexes&1048575,d=a.directiveStart,f=a.providerIndexes>>20;if(Us(n)||!n.multi){let h=new jr(l,r,At),g=Pf(c,e,r?u:u+f,d);g===-1?($f(kl(a,o),s,c),Nf(s,n,e.length),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(h),o.push(h)):(t[g]=h,o[g]=h)}else{let h=Pf(c,e,u+f,d),g=Pf(c,e,u,u+f),y=h>=0&&t[h],m=g>=0&&t[g];if(r&&!m||!r&&!y){$f(kl(a,o),s,c);let p=TA(r?CA:wA,t.length,r,i,l);!r&&m&&(t[g].providerFactory=p),Nf(s,n,e.length,0),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(p),o.push(p)}else{let p=Cx(t[r?g:h],l,!r&&i);Nf(s,n,h>-1?h:g,p)}!r&&i&&m&&t[g].componentProviders++}}}function Nf(n,e,t,i){let r=Us(e),s=vw(e);if(r||s){let c=(s?on(e.useClass):e).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){let u=l.indexOf(t);u===-1?l.push(t,[i,c]):l[u+1].push(i,c)}else l.push(t,c)}}}function Cx(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function Pf(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function wA(n,e,t,i){return gp(this.multi,[])}function CA(n,e,t,i){let r=this.multi,s;if(this.providerFactory){let o=this.providerFactory.componentProviders,a=Ul(t,t[it],this.providerFactory.index,i);s=a.slice(0,o),gp(r,s);for(let c=o;c<a.length;c++)s.push(a[c])}else s=[],gp(r,s);return s}function gp(n,e){for(let t=0;t<n.length;t++){let i=n[t];e.push(i())}return e}function TA(n,e,t,i,r){let s=new jr(n,t,At);return s.multi=[],s.index=e,s.componentProviders=0,Cx(s,r,i&&!t),s}function pu(n,e=[]){return t=>{t.providersResolver=(i,r)=>SA(i,r?r(n):n,e)}}var vp=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Tx=(()=>{class n{compileModuleSync(t){return new up(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=M_(t),s=R0(r.declarations).reduce((o,a)=>{let c=ks(a);return c&&o.push(new ma(c)),o},[]);return new vp(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var DA=(()=>{class n{zone=ie($t);changeDetectionScheduler=ie(fa);applicationRef=ie($r);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),AA=new be("",{factory:()=>!1});function Dx({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new $t(qe(te({},Ix()),{scheduleInRootZone:t})),[{provide:$t,useFactory:n},{provide:la,multi:!0,useFactory:()=>{let i=ie(DA,{optional:!0});return()=>i.initialize()}},{provide:la,multi:!0,useFactory:()=>{let i=ie(IA);return()=>{i.initialize()}}},e===!0?{provide:h0,useValue:!0}:[],{provide:f0,useValue:t??d0}]}function Ax(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=Dx({ngZoneFactory:()=>{let r=Ix(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&jp("NgZone_CoalesceEvent"),new $t(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return Cp([{provide:AA,useValue:!0},{provide:Bp,useValue:!1},i])}function Ix(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var IA=(()=>{class n{subscription=new Ot;initialized=!1;zone=ie($t);pendingTasks=ie(Ys);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{$t.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{$t.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var RA=(()=>{class n{appRef=ie($r);taskService=ie(Ys);ngZone=ie($t);zonelessEnabled=ie(Bp);tracing=ie(ru,{optional:!0});disableScheduling=ie(h0,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Ot;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Vl):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ie(f0,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Kf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?Fy:p0;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Vl+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Fy(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function NA(){return typeof $localize<"u"&&$localize.locale||$l}var hm=new be("",{providedIn:"root",factory:()=>ie(hm,Ge.Optional|Ge.SkipSelf)||NA()});var yp=new be(""),PA=new be("");function sa(n){return!n.moduleRef}function OA(n){let e=sa(n)?n.r3Injector:n.moduleRef.injector,t=e.get($t);return t.run(()=>{sa(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Fi,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),sa(n)){let s=()=>e.destroy(),o=n.platformInjector.get(yp);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(yp);o.add(s),n.moduleRef.onDestroy(()=>{xl(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return LA(i,t,()=>{let s=e.get(px);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(hm,$l);if(_A(o||$l),!e.get(PA,!0))return sa(n)?e.get($r):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(sa(n)){let c=e.get($r);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return FA(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function FA(n,e){let t=n.injector.get($r);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new ye(-403,!1);e.push(n)}function LA(n,e,t){try{let i=t();return Kr(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Ml=null;function kA(n=[],e){return Oi.create({name:e,providers:[{provide:Zl,useValue:"platform"},{provide:yp,useValue:new Set([()=>Ml=null])},...n]})}function UA(n=[]){if(Ml)return Ml;let e=kA(n);return Ml=e,$D(),BA(e),e}function BA(n){let e=n.get(zp,null);ii(n,()=>{e?.forEach(t=>t())})}var Ta=(()=>{class n{static __NG_ELEMENT_ID__=VA}return n})();function VA(n){return HA(Bn(),Mt(),(n&16)===16)}function HA(n,e,t){if($s(n)&&!t){let i=vi(n.index,e);return new pa(i,i)}else if(n.type&175){let i=e[pi];return new pa(i,e)}return null}var _p=class{constructor(){}supports(e){return ux(e)}create(e){return new xp(e)}},zA=(n,e)=>e,xp=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(e){this._trackByFn=e||zA}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<i_(i,r,s)?t:i,a=i_(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let f=0;f<l;f++){let h=f<s.length?s[f]:s[f]=0,g=h+f;u<=g&&g<l&&(s[f]=h+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!ux(e))throw new ye(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,kD(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new Mp(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new ql),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new ql),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},Mp=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(e,t){this.item=e,this.trackById=t}},bp=class{_head=null;_tail=null;add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},ql=class{map=new Map;put(e){let t=e.trackById,i=this.map.get(t);i||(i=new bp,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function i_(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function r_(){return new fm([new _p])}var fm=(()=>{class n{factories;static \u0275prov=Te({token:n,providedIn:"root",factory:r_});constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:i=>n.create(t,i||r_()),deps:[[n,new cw,new aw]]}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new ye(901,!1)}}return n})();function Rx(n){xt(8);try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=UA(i),s=[Dx({}),{provide:fa,useExisting:RA},...t||[]],o=new jl({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return OA({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}finally{xt(9)}}function pm(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}function sr(n){return nf(n)}function mu(n,e){return Jh(n,e?.equal)}var s_=class{[On];constructor(e){this[On]=e}destroy(){this[On].destroy()}};var en=new be("");var Ox=null;function Hn(){return Ox}function mm(n){Ox??=n}var Da=class{},gm=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ie(Fx),providedIn:"platform"})}return n})();var Fx=(()=>{class n extends gm{_location;_history;_doc=ie(en);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Hn().getBaseHref(this._doc)}onPopState(t){let i=Hn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Hn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Lx(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function Nx(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function or(n){return n&&n[0]!=="?"?`?${n}`:n}var gu=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ie(Ux),providedIn:"root"})}return n})(),kx=new be(""),Ux=(()=>{class n extends gu{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??ie(en).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Lx(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+or(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+or(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+or(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(je(gm),je(kx,8))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qs=(()=>{class n{_subject=new Bt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=WA(Nx(Px(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+or(i))}normalize(t){return n.stripTrailingSlash(jA(this._basePath,Px(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+or(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+or(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=or;static joinWithSlash=Lx;static stripTrailingSlash=Nx;static \u0275fac=function(i){return new(i||n)(je(gu))};static \u0275prov=Te({token:n,factory:()=>GA(),providedIn:"root"})}return n})();function GA(){return new Qs(je(gu))}function jA(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function Px(n){return n.replace(/\/index.html$/,"")}function WA(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var vu=class{$implicit;ngForOf;index;count;constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},_u=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new vu(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(s===null?void 0:s);else if(s!==null){let a=i.get(s);i.move(a,o),Bx(a,r)}});for(let r=0,s=i.length;r<s;r++){let a=i.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);Bx(s,r)})}static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(At(Zs),At(au),At(fm))};static \u0275dir=Vn({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function Bx(n,e){n.context.$implicit=e.item}var vm=(()=>{class n{_viewContainer;_context=new yu;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,i){this._viewContainer=t,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){Vx(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){Vx(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(At(Zs),At(au))};static \u0275dir=Vn({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),yu=class{$implicit=null;ngIf=null};function Vx(n,e){if(n&&!n.createEmbeddedView)throw new ye(2020,!1)}var xu=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Yr({type:n});static \u0275inj=Xr({})}return n})();function ym(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var _m="browser",Hx="server";function Mu(n){return n===Hx}var Aa=class{};var Su=new be(""),Em=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new ye(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(je(Su),je($t))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),Ia=class{_doc;constructor(e){this._doc=e}manager},bu="ng-app-id";function zx(n){for(let e of n)e.remove()}function Gx(n,e){let t=e.createElement("style");return t.textContent=n,t}function qA(n,e,t,i){let r=n.head?.querySelectorAll(`style[${bu}="${e}"],link[${bu}="${e}"]`);if(r)for(let s of r)s.removeAttribute(bu),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Mm(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Sm=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=Mu(s),qA(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,Gx);i?.forEach(r=>this.addUsage(r,this.external,Mm))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(zx(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])zx(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,Gx(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Mm(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(bu,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(je(en),je(iu),je(Gp,8),je(Ea))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),xm={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},wm=/%COMP%/g;var Wx="%COMP%",XA=`_nghost-${Wx}`,YA=`_ngcontent-${Wx}`,ZA=!0,KA=new be("",{providedIn:"root",factory:()=>ZA});function JA(n){return YA.replace(wm,n)}function QA(n){return XA.replace(wm,n)}function $x(n,e){return e.map(t=>t.replace(wm,n))}var Cm=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=Mu(a),this.defaultRenderer=new Ra(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===yi.ShadowDom&&(i=qe(te({},i),{encapsulation:yi.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Eu?r.applyToHost(t):r instanceof Na&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case yi.Emulated:s=new Eu(c,l,i,this.appId,u,o,a,d,f);break;case yi.ShadowDom:return new bm(c,l,t,i,o,a,this.nonce,d,f);default:s=new Na(c,l,i,u,o,a,d,f);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(je(Em),je(Sm),je(iu),je(KA),je(en),je(Ea),je($t),je(Gp),je(ru,8))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),Ra=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(xm[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(jx(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(jx(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new ye(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=xm[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=xm[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Li.DashCase|Li.Important)?e.style.setProperty(t,i,r&Li.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Li.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=Hn().getGlobalEventTarget(this.doc,e),!e))throw new ye(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function jx(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var bm=class extends Ra{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=$x(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=Mm(f,s);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Na=class extends Ra{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?$x(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Eu=class extends Na{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=JA(u),this.hostAttr=QA(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var wu=class n extends Da{supportsDOMEvents=!0;static makeCurrent(){mm(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=eI();return t==null?null:tI(t)}resetBaseElement(){Pa=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return ym(document.cookie,e)}},Pa=null;function eI(){return Pa=Pa||document.querySelector("base"),Pa?Pa.getAttribute("href"):null}function tI(n){return new URL(n,document.baseURI).pathname}var nI=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),Xx=(()=>{class n extends Ia{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(je(en))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),qx=["alt","control","meta","shift"],iI={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},rI={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Yx=(()=>{class n extends Ia{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Hn().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),qx.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=iI[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),qx.forEach(o=>{if(o!==r){let a=rI[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(je(en))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})();function Tm(n,e){return Rx(te({rootComponent:n},sI(e)))}function sI(n){return{appProviders:[...uI,...n?.providers??[]],platformProviders:lI}}function oI(){wu.makeCurrent()}function aI(){return new Fi}function cI(){return S0(document),document}var lI=[{provide:Ea,useValue:_m},{provide:zp,useValue:oI,multi:!0},{provide:en,useFactory:cI}];var uI=[{provide:Zl,useValue:"root"},{provide:Fi,useFactory:aI},{provide:Su,useClass:Xx,multi:!0,deps:[en]},{provide:Su,useClass:Yx,multi:!0,deps:[en]},Cm,Sm,Em,{provide:Hs,useExisting:Cm},{provide:Aa,useClass:nI},[]];var Zx=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(je(en))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var rM=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(At(lu),At(Ma))};static \u0275dir=Vn({type:n})}return n})(),sM=(()=>{class n extends rM{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Xs(n)))(r||n)}})();static \u0275dir=Vn({type:n,features:[Zr]})}return n})(),Nm=new be("");var hI={provide:Nm,useExisting:js(()=>Iu),multi:!0};function fI(){let n=Hn()?Hn().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var pI=new be(""),Iu=(()=>{class n extends rM{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!fI())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(At(lu),At(Ma),At(pI,8))};static \u0275dir=Vn({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&Jr("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[pu([hI]),Zr]})}return n})();var mI=new be(""),gI=new be("");function oM(n){return n!=null}function aM(n){return Kr(n)?Dt(n):n}function cM(n){let e={};return n.forEach(t=>{e=t!=null?te(te({},e),t):e}),Object.keys(e).length===0?null:e}function lM(n,e){return e.map(t=>t(n))}function vI(n){return!n.validate}function uM(n){return n.map(e=>vI(e)?e:t=>e.validate(t))}function yI(n){if(!n)return null;let e=n.filter(oM);return e.length==0?null:function(t){return cM(lM(t,e))}}function dM(n){return n!=null?yI(uM(n)):null}function _I(n){if(!n)return null;let e=n.filter(oM);return e.length==0?null:function(t){let i=lM(t,e).map(aM);return mf(i).pipe(Je(cM))}}function hM(n){return n!=null?_I(uM(n)):null}function Kx(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function xI(n){return n._rawValidators}function MI(n){return n._rawAsyncValidators}function Dm(n){return n?Array.isArray(n)?n:[n]:[]}function Tu(n,e){return Array.isArray(n)?n.includes(e):n===e}function Jx(n,e){let t=Dm(e);return Dm(n).forEach(r=>{Tu(t,r)||t.push(r)}),t}function Qx(n,e){return Dm(e).filter(t=>!Tu(n,t))}var Du=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=dM(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=hM(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Am=class extends Du{name;get formDirective(){return null}get path(){return null}},Ua=class extends Du{_parent=null;name=null;valueAccessor=null},Im=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},bI={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},KG=qe(te({},bI),{"[class.ng-submitted]":"isSubmitted"}),fM=(()=>{class n extends Im{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(At(Ua,2))};static \u0275dir=Vn({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&cm("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Zr]})}return n})();var Oa="VALID",Cu="INVALID",eo="PENDING",Fa="DISABLED",no=class{},Au=class extends no{value;source;constructor(e,t){super(),this.value=e,this.source=t}},La=class extends no{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},ka=class extends no{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},to=class extends no{status;source;constructor(e,t){super(),this.status=e,this.source=t}};function EI(n){return(Ru(n)?n.validators:n)||null}function SI(n){return Array.isArray(n)?dM(n):n||null}function wI(n,e){return(Ru(e)?e.asyncValidators:n)||null}function CI(n){return Array.isArray(n)?hM(n):n||null}function Ru(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var Rm=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return sr(this.statusReactive)}set status(e){sr(()=>this.statusReactive.set(e))}_status=mu(()=>this.statusReactive());statusReactive=nu(void 0);get valid(){return this.status===Oa}get invalid(){return this.status===Cu}get pending(){return this.status==eo}get disabled(){return this.status===Fa}get enabled(){return this.status!==Fa}errors;get pristine(){return sr(this.pristineReactive)}set pristine(e){sr(()=>this.pristineReactive.set(e))}_pristine=mu(()=>this.pristineReactive());pristineReactive=nu(!0);get dirty(){return!this.pristine}get touched(){return sr(this.touchedReactive)}set touched(e){sr(()=>this.touchedReactive.set(e))}_touched=mu(()=>this.touchedReactive());touchedReactive=nu(!1);get untouched(){return!this.touched}_events=new Bt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Jx(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Jx(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Qx(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Qx(e,this._rawAsyncValidators))}hasValidator(e){return Tu(this._rawValidators,e)}hasAsyncValidator(e){return Tu(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(qe(te({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new ka(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new ka(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(qe(te({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new La(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new La(!0,i))}markAsPending(e={}){this.status=eo;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new to(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(qe(te({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Fa,this.errors=null,this._forEachChild(r=>{r.disable(qe(te({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Au(this.value,i)),this._events.next(new to(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(qe(te({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Oa,this._forEachChild(i=>{i.enable(qe(te({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(qe(te({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Oa||this.status===eo)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Au(this.value,t)),this._events.next(new to(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(qe(te({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Fa:Oa}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=eo,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=aM(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new to(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new Wt,this.statusChanges=new Wt}_calculateStatus(){return this._allControlsDisabled()?Fa:this.errors?Cu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(eo)?eo:this._anyControlsHaveStatus(Cu)?Cu:Oa}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new La(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new ka(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Ru(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=SI(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=CI(this._rawAsyncValidators)}};var pM=new be("",{providedIn:"root",factory:()=>Pm}),Pm="always";function TI(n,e){return[...e.path,n]}function DI(n,e,t=Pm){II(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),RI(n,e),PI(n,e),NI(n,e),AI(n,e)}function eM(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function AI(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function II(n,e){let t=xI(n);e.validator!==null?n.setValidators(Kx(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=MI(n);e.asyncValidator!==null?n.setAsyncValidators(Kx(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();eM(e._rawValidators,r),eM(e._rawAsyncValidators,r)}function RI(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&mM(n,e)})}function NI(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&mM(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function mM(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function PI(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function OI(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function FI(n){return Object.getPrototypeOf(n.constructor)===sM}function LI(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(s=>{s.constructor===Iu?t=s:FI(s)?i=s:r=s}),r||i||t||null}function tM(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function nM(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var kI=class extends Rm{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(EI(t),wI(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ru(t)&&(t.nonNullable||t.initialValueIsDefault)&&(nM(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){tM(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){tM(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){nM(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var UI={provide:Ua,useExisting:js(()=>Om)},iM=Promise.resolve(),Om=(()=>{class n extends Ua{_changeDetectorRef;callSetDisabledState;control=new kI;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new Wt;constructor(t,i,r,s,o,a){super(),this._changeDetectorRef=o,this.callSetDisabledState=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=LI(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),OI(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){DI(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){iM.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&pm(i);iM.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?TI(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(At(Am,9),At(mI,10),At(gI,10),At(Nm,10),At(Ta,8),At(pM,8))};static \u0275dir=Vn({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[pu([UI]),Zr,_a]})}return n})();var BI={provide:Nm,useExisting:js(()=>Fm),multi:!0},Fm=(()=>{class n extends sM{writeValue(t){this.setProperty("value",parseFloat(t))}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Xs(n)))(r||n)}})();static \u0275dir=Vn({type:n,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(i,r){i&1&&Jr("change",function(o){return r.onChange(o.target.value)})("input",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[pu([BI]),Zr]})}return n})();var VI=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Yr({type:n});static \u0275inj=Xr({})}return n})();var gM=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:pM,useValue:t.callSetDisabledState??Pm}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=Yr({type:n});static \u0275inj=Xr({imports:[VI]})}return n})();var yd="176",Er={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},BM=0,fg=1,VM=2;var pg=1,HM=2,Ei=3,$i=0,un=1,Si=2,qi=0,ss=1,mg=2,gg=3,vg=4,zM=5,mr=100,GM=101,jM=102,WM=103,$M=104,qM=200,XM=201,YM=202,ZM=203,Ku=204,Ju=205,KM=206,JM=207,QM=208,eb=209,tb=210,nb=211,ib=212,rb=213,sb=214,_d=0,xd=1,Md=2,os=3,bd=4,Ed=5,Sd=6,wd=7,To=0,ob=1,ab=2,Xi=0,cb=1,lb=2,ub=3,db=4,hb=5,fb=6,pb=7;var rg=300,ls=301,us=302,Cd=303,Td=304,hc=306,Qu=1e3,pr=1001,ed=1002,Wn=1003,mb=1004;var fc=1005;var li=1006,Dd=1007;var wr=1008;var di=1009,yg=1010,_g=1011,Do=1012,Ad=1013,Cr=1014,wi=1015,Ao=1016,Id=1017,Rd=1018,Io=1020,xg=35902,Mg=1021,bg=1022,qn=1023,yo=1026,Ro=1027,Eg=1028,Nd=1029,Sg=1030,Pd=1031;var Od=1033,pc=33776,mc=33777,gc=33778,vc=33779,Fd=35840,Ld=35841,kd=35842,Ud=35843,Bd=36196,Vd=37492,Hd=37496,zd=37808,Gd=37809,jd=37810,Wd=37811,$d=37812,qd=37813,Xd=37814,Yd=37815,Zd=37816,Kd=37817,Jd=37818,Qd=37819,eh=37820,th=37821,yc=36492,nh=36494,ih=36495,wg=36283,rh=36284,sh=36285,oh=36286;var $a=2300,td=2301,Zu=2302,sg=2400,og=2401,ag=2402;var gb=3200,vb=3201;var Cg=0,yb=1,Yi="",Cn="srgb",as="srgb-linear",qa="linear",mt="srgb";var is=7680;var cg=519,_b=512,xb=513,Mb=514,Tg=515,bb=516,Eb=517,Sb=518,wb=519,lg=35044;var Dg="300 es",xi=2e3,Xa=2001;var Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vM=1234567,ja=Math.PI/180,_o=180/Math.PI;function No(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Ag(n,e){return(n%e+e)%e}function zI(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function GI(n,e,t){return n!==e?(t-n)/(e-n):0}function Wa(n,e,t){return(1-t)*n+t*e}function jI(n,e,t,i){return Wa(n,e,1-Math.exp(-t*i))}function WI(n,e=1){return e-Math.abs(Ag(n,e*2)-e)}function $I(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function qI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function XI(n,e){return n+Math.floor(Math.random()*(e-n+1))}function YI(n,e){return n+Math.random()*(e-n)}function ZI(n){return n*(.5-Math.random())}function KI(n){n!==void 0&&(vM=n);let e=vM+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function JI(n){return n*ja}function QI(n){return n*_o}function eR(n){return(n&n-1)===0&&n!==0}function tR(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nR(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function iR(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function go(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ig={DEG2RAD:ja,RAD2DEG:_o,generateUUID:No,clamp:We,euclideanModulo:Ag,mapLinear:zI,inverseLerp:GI,lerp:Wa,damp:jI,pingpong:WI,smoothstep:$I,smootherstep:qI,randInt:XI,randFloat:YI,randFloatSpread:ZI,seededRandom:KI,degToRad:JI,radToDeg:QI,isPowerOfTwo:eR,ceilPowerOfTwo:tR,floorPowerOfTwo:nR,setQuaternionFromProperEuler:iR,normalize:cn,denormalize:go},Oe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ue=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=r[0],m=r[3],p=r[6],w=r[1],S=r[4],E=r[7],N=r[2],I=r[5],T=r[8];return s[0]=o*y+a*w+c*N,s[3]=o*m+a*S+c*I,s[6]=o*p+a*E+c*T,s[1]=l*y+u*w+d*N,s[4]=l*m+u*S+d*I,s[7]=l*p+u*E+d*T,s[2]=f*y+h*w+g*N,s[5]=f*m+h*S+g*I,s[8]=f*p+h*E+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=h*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lm.makeScale(e,t)),this}rotate(e){return this.premultiply(Lm.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lm=new Ue;function Rg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cb(){let n=Ya("canvas");return n.style.display="block",n}var yM={};function _c(n){n in yM||(yM[n]=!0,console.warn(n))}function Tb(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Db(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ab(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var _M=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xM=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rR(){let n={enabled:!0,workingColorSpace:as,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(r.r=vo(r.r),r.g=vo(r.g),r.b=vo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?qa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[as]:{primaries:e,whitePoint:i,transfer:qa,toXYZ:_M,fromXYZ:xM,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:_M,fromXYZ:xM,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),n}var ot=rR();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var io,nd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{io===void 0&&(io=Ya("canvas")),io.width=e.width,io.height=e.height;let r=io.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=io}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ya("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sR=0,xo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(km(r[o].image)):s.push(km(r[o]))}else s=km(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function km(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var oR=0,Tr=(()=>{class n extends Mi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=pr,s=pr,o=li,a=wr,c=qn,l=di,u=n.DEFAULT_ANISOTROPY,d=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=No(),this.name="",this.source=new xo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qu:t.x=t.x-Math.floor(t.x);break;case pr:t.x=t.x<0?0:1;break;case ed:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qu:t.y=t.y-Math.floor(t.y);break;case pr:t.y=t.y<0?0:1;break;case ed:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=rg,n.DEFAULT_ANISOTROPY=1,n})(),pt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,E=(h+1)/2,N=(p+1)/2,I=(u+f)/4,T=(d+y)/4,F=(g+m)/4;return S>E&&S>N?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=I/i,s=T/i):E>N?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=I/r,s=F/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=T/s,r=F/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-y)/w,this.z=(f-u)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},id=class extends Mi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let r={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);let s=new Tr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new xo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bi=class extends id{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Za=class extends Tr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rd=class extends Tr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*y,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let N=Math.sqrt(S),I=Math.atan2(N,p*w);m=Math.sin(m*I)/N,a=Math.sin(a*I)/N}let E=a*w;if(c=c*m+f*E,l=l*m+h*E,u=u*m+g*E,d=d*m+y*E,m===1-a){let N=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=N,l*=N,u*=N,d*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(MM.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(MM.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Um.copy(this).projectOnVector(e),this.sub(Um)}reflect(e){return this.sub(Um.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Um=new P,MM=new $n,gr=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nu.copy(i.boundingBox)),Nu.applyMatrix4(e.matrixWorld),this.union(Nu)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),Pu.subVectors(this.max,Ba),ro.subVectors(e.a,Ba),so.subVectors(e.b,Ba),oo.subVectors(e.c,Ba),ar.subVectors(so,ro),cr.subVectors(oo,so),Qr.subVectors(ro,oo);let t=[0,-ar.z,ar.y,0,-cr.z,cr.y,0,-Qr.z,Qr.y,ar.z,0,-ar.x,cr.z,0,-cr.x,Qr.z,0,-Qr.x,-ar.y,ar.x,0,-cr.y,cr.x,0,-Qr.y,Qr.x,0];return!Bm(t,ro,so,oo,Pu)||(t=[1,0,0,0,1,0,0,0,1],!Bm(t,ro,so,oo,Pu))?!1:(Ou.crossVectors(ar,cr),t=[Ou.x,Ou.y,Ou.z],Bm(t,ro,so,oo,Pu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Vi=[new P,new P,new P,new P,new P,new P,new P,new P],oi=new P,Nu=new gr,ro=new P,so=new P,oo=new P,ar=new P,cr=new P,Qr=new P,Ba=new P,Pu=new P,Ou=new P,es=new P;function Bm(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){es.fromArray(n,s);let a=r.x*Math.abs(es.x)+r.y*Math.abs(es.y)+r.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),u=i.dot(es);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var aR=new gr,Va=new P,Vm=new P,Mo=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):aR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);let t=Va.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Va,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(Vm)),this.expandByPoint(Va.copy(e.center).sub(Vm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hi=new P,Hm=new P,Fu=new P,lr=new P,zm=new P,Lu=new P,Gm=new P,bo=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Hm.copy(e).add(t).multiplyScalar(.5),Fu.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(Hm);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Fu),a=lr.dot(this.direction),c=-lr.dot(Fu),l=lr.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Hm).addScaledVector(Fu,f),h}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let i=Hi.dot(this.direction),r=Hi.dot(Hi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,r,s){zm.subVectors(t,e),Lu.subVectors(i,e),Gm.crossVectors(zm,Lu);let o=this.direction.dot(Gm),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,e);let c=a*this.direction.dot(Lu.crossVectors(lr,Lu));if(c<0)return null;let l=a*this.direction.dot(zm.cross(lr));if(l<0||c+l>o)return null;let u=-a*lr.dot(Gm);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Et=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/ao.setFromMatrixColumn(e,0).length(),s=1/ao.setFromMatrixColumn(e,1).length(),o=1/ao.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cR,e,lR)}lookAt(e,t,i){let r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),ur.crossVectors(i,Sn),ur.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),ur.crossVectors(i,Sn)),ur.normalize(),ku.crossVectors(Sn,ur),r[0]=ur.x,r[4]=ku.x,r[8]=Sn.x,r[1]=ur.y,r[5]=ku.y,r[9]=Sn.y,r[2]=ur.z,r[6]=ku.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],m=i[10],p=i[14],w=i[3],S=i[7],E=i[11],N=i[15],I=r[0],T=r[4],F=r[8],b=r[12],x=r[1],D=r[5],G=r[9],B=r[13],X=r[2],Y=r[6],$=r[10],K=r[14],H=r[3],se=r[7],he=r[11],xe=r[15];return s[0]=o*I+a*x+c*X+l*H,s[4]=o*T+a*D+c*Y+l*se,s[8]=o*F+a*G+c*$+l*he,s[12]=o*b+a*B+c*K+l*xe,s[1]=u*I+d*x+f*X+h*H,s[5]=u*T+d*D+f*Y+h*se,s[9]=u*F+d*G+f*$+h*he,s[13]=u*b+d*B+f*K+h*xe,s[2]=g*I+y*x+m*X+p*H,s[6]=g*T+y*D+m*Y+p*se,s[10]=g*F+y*G+m*$+p*he,s[14]=g*b+y*B+m*K+p*xe,s[3]=w*I+S*x+E*X+N*H,s[7]=w*T+S*D+E*Y+N*se,s[11]=w*F+S*G+E*$+N*he,s[15]=w*b+S*B+E*K+N*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+y*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],m=e[14],p=e[15],w=d*m*l-y*f*l+y*c*h-a*m*h-d*c*p+a*f*p,S=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,E=u*y*l-g*d*l+g*a*h-o*y*h-u*a*p+o*d*p,N=g*d*c-u*y*c-g*a*f+o*y*f+u*a*m-o*d*m,I=t*w+i*S+r*E+s*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/I;return e[0]=w*T,e[1]=(y*f*s-d*m*s-y*r*h+i*m*h+d*r*p-i*f*p)*T,e[2]=(a*m*s-y*c*s+y*r*l-i*m*l-a*r*p+i*c*p)*T,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*T,e[4]=S*T,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*T,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*T,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*T,e[8]=E*T,e[9]=(g*d*s-u*y*s-g*i*h+t*y*h+u*i*p-t*d*p)*T,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*p+t*a*p)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*T,e[12]=N*T,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*T,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*m-t*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,y=o*u,m=o*d,p=a*d,w=c*l,S=c*u,E=c*d,N=i.x,I=i.y,T=i.z;return r[0]=(1-(y+p))*N,r[1]=(h+E)*N,r[2]=(g-S)*N,r[3]=0,r[4]=(h-E)*I,r[5]=(1-(f+p))*I,r[6]=(m+w)*I,r[7]=0,r[8]=(g+S)*T,r[9]=(m-w)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=ao.set(r[0],r[1],r[2]).length(),o=ao.set(r[4],r[5],r[6]).length(),a=ao.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ai.copy(this);let l=1/s,u=1/o,d=1/a;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,t.setFromRotationMatrix(ai),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=xi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===xi)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Xa)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=xi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u,g,y;if(a===xi)g=(o+s)*d,y=-2*d;else if(a===Xa)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ao=new P,ai=new Et,cR=new P(0,0,0),lR=new P(1,1,1),ur=new P,ku=new P,Sn=new P,bM=new Et,EM=new $n,vr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return bM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bM,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return EM.setFromEuler(this),this.setFromQuaternion(EM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uR=0,SM=new P,co=new $n,zi=new Et,Uu=new P,Ha=new P,dR=new P,hR=new $n,wM=new P(1,0,0),CM=new P(0,1,0),TM=new P(0,0,1),DM={type:"added"},fR={type:"removed"},lo={type:"childadded",child:null},jm={type:"childremoved",child:null},Dr=(()=>{class n extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uR++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,i=new vr,r=new $n,s=new P(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ue}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return co.setFromAxisAngle(t,i),this.quaternion.multiply(co),this}rotateOnWorldAxis(t,i){return co.setFromAxisAngle(t,i),this.quaternion.premultiply(co),this}rotateX(t){return this.rotateOnAxis(wM,t)}rotateY(t){return this.rotateOnAxis(CM,t)}rotateZ(t){return this.rotateOnAxis(TM,t)}translateOnAxis(t,i){return SM.copy(t).applyQuaternion(this.quaternion),this.position.add(SM.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(wM,t)}translateY(t){return this.translateOnAxis(CM,t)}translateZ(t){return this.translateOnAxis(TM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Uu.copy(t):Uu.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Ha,Uu,this.up):zi.lookAt(Uu,Ha,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),co.setFromRotationMatrix(zi),this.quaternion.premultiply(co.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(DM),lo.child=t,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(fR),jm.child=t,this.dispatchEvent(jm),jm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(DM),lo.child=t,this.dispatchEvent(lo),lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,t,dR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,hR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>qe(te({},c),{boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(c=>te({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new P(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),ci=new P,Gi=new P,Wm=new P,ji=new P,uo=new P,ho=new P,AM=new P,$m=new P,qm=new P,Xm=new P,Ym=new pt,Zm=new pt,Km=new pt,fr=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ci.subVectors(e,t),r.cross(ci);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ci.subVectors(r,t),Gi.subVectors(i,t),Wm.subVectors(e,t);let o=ci.dot(ci),a=ci.dot(Gi),c=ci.dot(Wm),l=Gi.dot(Gi),u=Gi.dot(Wm),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ji.x),c.addScaledVector(o,ji.y),c.addScaledVector(a,ji.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ym.setScalar(0),Zm.setScalar(0),Km.setScalar(0),Ym.fromBufferAttribute(e,t),Zm.fromBufferAttribute(e,i),Km.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ym,s.x),o.addScaledVector(Zm,s.y),o.addScaledVector(Km,s.z),o}static isFrontFacing(e,t,i,r){return ci.subVectors(i,t),Gi.subVectors(e,t),ci.cross(Gi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),ci.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;uo.subVectors(r,i),ho.subVectors(s,i),$m.subVectors(e,i);let c=uo.dot($m),l=ho.dot($m);if(c<=0&&l<=0)return t.copy(i);qm.subVectors(e,r);let u=uo.dot(qm),d=ho.dot(qm);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(uo,o);Xm.subVectors(e,s);let h=uo.dot(Xm),g=ho.dot(Xm);if(g>=0&&h<=g)return t.copy(s);let y=h*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ho,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return AM.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(AM,a);let p=1/(m+y+f);return o=y*p,a=f*p,t.copy(i).addScaledVector(uo,o).addScaledVector(ho,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ib={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Bu={h:0,s:0,l:0};function Jm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=Ag(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Jm(o,s,e+1/3),this.g=Jm(o,s,e),this.b=Jm(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){let i=Ib[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return ot.fromWorkingColorSpace(nn.copy(this),e),Math.round(We(nn.r*255,0,255))*65536+Math.round(We(nn.g*255,0,255))*256+Math.round(We(nn.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(nn.copy(this),t);let i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Cn){ot.fromWorkingColorSpace(nn.copy(this),e);let t=nn.r,i=nn.g,r=nn.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(Bu);let i=Wa(dr.h,Bu.h,t),r=Wa(dr.s,Bu.s,t),s=Wa(dr.l,Bu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Ye;Ye.NAMES=Ib;var pR=0,yr=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=No(),this.name="",this.type="Material",this.blending=ss,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Ju,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ku&&(i.blendSrc=this.blendSrc),this.blendDst!==Ju&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ja=class extends yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new P,Vu=new Oe,mR=0,Tn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lg,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vu.fromBufferAttribute(this,t),Vu.applyMatrix3(e),this.setXY(t,Vu.x,Vu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=go(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=go(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=go(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=go(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lg&&(e.usage=this.usage),e}};var Qa=class extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ec=class extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var jn=class extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}},gR=0,zn=new Et,Qm=new Dr,fo=new P,wn=new gr,za=new gr,qt=new P,_r=class n extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gR++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rg(e)?ec:Qa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return Qm.lookAt(e),Qm.updateMatrix(),this.applyMatrix4(Qm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];za.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(wn.min,za.min),wn.expandByPoint(qt),qt.addVectors(wn.max,za.max),wn.expandByPoint(qt)):(wn.expandByPoint(za.min),wn.expandByPoint(za.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)qt.fromBufferAttribute(a,l),c&&(fo.fromBufferAttribute(e,l),qt.add(fo)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<i.count;F++)a[F]=new P,c[F]=new P;let l=new P,u=new P,d=new P,f=new Oe,h=new Oe,g=new Oe,y=new P,m=new P;function p(F,b,x){l.fromBufferAttribute(i,F),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,F),h.fromBufferAttribute(s,b),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[F].add(y),a[b].add(y),a[x].add(y),c[F].add(m),c[b].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,b=w.length;F<b;++F){let x=w[F],D=x.start,G=x.count;for(let B=D,X=D+G;B<X;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let S=new P,E=new P,N=new P,I=new P;function T(F){N.fromBufferAttribute(r,F),I.copy(N);let b=a[F];S.copy(b),S.sub(N.multiplyScalar(N.dot(b))).normalize(),E.crossVectors(I,b);let D=E.dot(c[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,D)}for(let F=0,b=w.length;F<b;++F){let x=w[F],D=x.start,G=x.count;for(let B=D,X=D+G;B<X;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,d=new P;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?h=c[y]*a.data.stride+a.offset:h=c[y]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Tn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},IM=new Et,ts=new bo,Hu=new Mo,RM=new P,zu=new P,Gu=new P,ju=new P,eg=new P,Wu=new P,NM=new P,$u=new P,ln=class extends Dr{constructor(e=new _r,t=new Ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Wu.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(eg.fromBufferAttribute(d,e),o?Wu.addScaledVector(eg,u):Wu.addScaledVector(eg.sub(t),u))}t.add(Wu)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hu.copy(i.boundingSphere),Hu.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!(Hu.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Hu,RM)===null||ts.origin.distanceToSquared(RM)>(e.far-e.near)**2))&&(IM.copy(s).invert(),ts.copy(e.ray).applyMatrix4(IM),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let E=w,N=S;E<N;E+=3){let I=a.getX(E),T=a.getX(E+1),F=a.getX(E+2);r=qu(this,p,e,i,l,u,d,I,T,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=a.getX(m),S=a.getX(m+1),E=a.getX(m+2);r=qu(this,o,e,i,l,u,d,w,S,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let E=w,N=S;E<N;E+=3){let I=E,T=E+1,F=E+2;r=qu(this,p,e,i,l,u,d,I,T,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(c.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=m,S=m+1,E=m+2;r=qu(this,o,e,i,l,u,d,w,S,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function vR(n,e,t,i,r,s,o,a){let c;if(e.side===un?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===$i,a),c===null)return null;$u.copy(a),$u.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo($u);return l<t.near||l>t.far?null:{distance:l,point:$u.clone(),object:n}}function qu(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,zu),n.getVertexPosition(c,Gu),n.getVertexPosition(l,ju);let u=vR(n,e,t,i,zu,Gu,ju,NM);if(u){let d=new P;fr.getBarycoord(NM,zu,Gu,ju,d),r&&(u.uv=fr.getInterpolatedAttribute(r,a,c,l,d,new Oe)),s&&(u.uv1=fr.getInterpolatedAttribute(s,a,c,l,d,new Oe)),o&&(u.normal=fr.getInterpolatedAttribute(o,a,c,l,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new P,materialIndex:0};fr.getNormal(zu,Gu,ju,f.normal),u.face=f,u.barycoord=d}return u}var xr=class n extends _r{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new jn(l,3)),this.setAttribute("normal",new jn(u,3)),this.setAttribute("uv",new jn(d,2));function g(y,m,p,w,S,E,N,I,T,F,b){let x=E/T,D=N/F,G=E/2,B=N/2,X=I/2,Y=T+1,$=F+1,K=0,H=0,se=new P;for(let he=0;he<$;he++){let xe=he*D-B;for(let $e=0;$e<Y;$e++){let vt=$e*x-G;se[y]=vt*w,se[m]=xe*S,se[p]=X,l.push(se.x,se.y,se.z),se[y]=0,se[m]=0,se[p]=I>0?1:-1,u.push(se.x,se.y,se.z),d.push($e/T),d.push(1-he/F),K+=1}}for(let he=0;he<F;he++)for(let xe=0;xe<T;xe++){let $e=f+xe+Y*he,vt=f+xe+Y*(he+1),j=f+(xe+1)+Y*(he+1),ee=f+(xe+1)+Y*he;c.push($e,vt,ee),c.push(vt,j,ee),H+=6}a.addGroup(h,H,b),h+=H,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ds(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){let e={};for(let t=0;t<n.length;t++){let i=ds(n[t]);for(let r in i)e[r]=i[r]}return e}function yR(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ng(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var Rb={clone:ds,merge:rn},_R=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ui=class extends yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_R,this.fragmentShader=xR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=yR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},tc=class extends Dr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hr=new P,PM=new Oe,OM=new Oe,Kt=class extends tc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,PM,OM),t.subVectors(OM,PM)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ja*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},po=-90,mo=1,sd=class extends Dr{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kt(po,mo,e,t);r.layers=this.layers,this.add(r);let s=new Kt(po,mo,e,t);s.layers=this.layers,this.add(s);let o=new Kt(po,mo,e,t);o.layers=this.layers,this.add(o);let a=new Kt(po,mo,e,t);a.layers=this.layers,this.add(a);let c=new Kt(po,mo,e,t);c.layers=this.layers,this.add(c);let l=new Kt(po,mo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},nc=class extends Tr{constructor(e=[],t=ls,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},od=class extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xr(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:qi});s.uniforms.tEquirect.value=t;let o=new ln(r,s),a=t.minFilter;return t.minFilter===wr&&(t.minFilter=li),new sd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},rs=class extends Dr{constructor(){super(),this.isGroup=!0,this.type="Group"}},MR={type:"move"},Eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MR)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new rs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var ic=class extends Dr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var tg=new P,bR=new P,ER=new Ue,Gn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=tg.subVectors(i,t).cross(bR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(tg),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ER.getNormalMatrix(e),r=this.coplanarPoint(tg).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ns=new Mo,Xu=new P,So=class{constructor(e=new Gn,t=new Gn,i=new Gn,r=new Gn,s=new Gn,o=new Gn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],y=r[10],m=r[11],p=r[12],w=r[13],S=r[14],E=r[15];if(i[0].setComponents(c-s,f-l,m-h,E-p).normalize(),i[1].setComponents(c+s,f+l,m+h,E+p).normalize(),i[2].setComponents(c+o,f+u,m+g,E+w).normalize(),i[3].setComponents(c-o,f-u,m-g,E-w).normalize(),i[4].setComponents(c-a,f-d,m-y,E-S).normalize(),t===xi)i[5].setComponents(c+a,f+d,m+y,E+S).normalize();else if(t===Xa)i[5].setComponents(a,d,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Xu.x=r.normal.x>0?e.max.x:e.min.x,Xu.y=r.normal.y>0?e.max.y:e.min.y,Xu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var rc=class extends Tr{constructor(e,t,i=Cr,r,s,o,a=Wn,c=Wn,l,u=yo){if(u!==yo&&u!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var sc=class n extends _r{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let w=p*f-o;for(let S=0;S<l;S++){let E=S*d-s;g.push(E,-w,0),y.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let S=w+l*p,E=w+l*(p+1),N=w+1+l*(p+1),I=w+1+l*p;h.push(S,E,I),h.push(E,N,I)}this.setIndex(h),this.setAttribute("position",new jn(g,3)),this.setAttribute("normal",new jn(y,3)),this.setAttribute("uv",new jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var oc=class extends yr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cg,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ad=class extends yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cd=class extends yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yu(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function SR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var cs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ld=class extends cs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sg,endingEnd:sg}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case og:s=e,a=2*t-i;break;case ag:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case og:o=e,c=2*i-t;break;case ag:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,w=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,S=(-1-h)*m+(1.5+h)*y+.5*g,E=h*m-h*y;for(let N=0;N!==a;++N)s[N]=p*o[u+N]+w*o[l+N]+S*o[c+N]+E*o[d+N];return s}},ud=class extends cs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},dd=class extends cs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Dn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yu(t,this.TimeBufferType),this.values=Yu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Yu(e.times,Array),values:Yu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ld(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $a:t=this.InterpolantFactoryMethodDiscrete;break;case td:t=this.InterpolantFactoryMethodLinear;break;case Zu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return td;case this.InterpolantFactoryMethodSmooth:return Zu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&SR(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Zu,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=td;var Mr=class extends Dn{constructor(e,t,i){super(e,t,i)}};Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=$a;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var hd=class extends Dn{constructor(e,t,i,r){super(e,t,i,r)}};hd.prototype.ValueTypeName="color";var fd=class extends Dn{constructor(e,t,i,r){super(e,t,i,r)}};fd.prototype.ValueTypeName="number";var pd=class extends cs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)$n.slerpFlat(s,0,o,l-a,o,l,c);return s}},ac=class extends Dn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new pd(this.times,this.values,this.getValueSize(),e)}};ac.prototype.ValueTypeName="quaternion";ac.prototype.InterpolantFactoryMethodSmooth=void 0;var br=class extends Dn{constructor(e,t,i){super(e,t,i)}};br.prototype.ValueTypeName="string";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=$a;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;var md=class extends Dn{constructor(e,t,i,r){super(e,t,i,r)}};md.prototype.ValueTypeName="vector";var cc=class extends Dr{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var ng=new Et,FM=new P,LM=new P,ug=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;FM.setFromMatrixPosition(e.matrixWorld),t.position.copy(FM),LM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(LM),t.updateMatrixWorld(),ng.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ng),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ng)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var kM=new Et,Ga=new P,ig=new P,dg=class extends ug{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ga.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ga),ig.copy(i.position),ig.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ig),i.updateMatrixWorld(),r.makeTranslation(-Ga.x,-Ga.y,-Ga.z),kM.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kM)}},wo=class extends cc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new dg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},gd=class extends tc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var lc=class extends cc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var vd=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},uc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=UM(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=UM();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function UM(){return performance.now()}var Pg="\\[\\]\\.:\\/",wR=new RegExp("["+Pg+"]","g"),Og="[^"+Pg+"]",CR="[^"+Pg.replace("\\.","")+"]",TR=/((?:WC+[\/:])*)/.source.replace("WC",Og),DR=/(WCOD+)?/.source.replace("WCOD",CR),AR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Og),IR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Og),RR=new RegExp("^"+TR+DR+AR+IR+"$"),NR=["material","materials","bones","map"],hg=class{constructor(e,t,i){let r=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Rt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wR,"")}static parseTrackName(t){let i=RR.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);NR.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=hg,n})();Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e4=new Float32Array(1);var Co=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var dc=class extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Fg(n,e,t,i){let r=PR(i);switch(t){case Mg:return n*e;case Eg:return n*e/r.components*r.byteLength;case Nd:return n*e/r.components*r.byteLength;case Sg:return n*e*2/r.components*r.byteLength;case Pd:return n*e*2/r.components*r.byteLength;case bg:return n*e*3/r.components*r.byteLength;case qn:return n*e*4/r.components*r.byteLength;case Od:return n*e*4/r.components*r.byteLength;case pc:case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gc:case vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ld:case Ud:return Math.max(n,16)*Math.max(e,8)/4;case Fd:case kd:return Math.max(n,8)*Math.max(e,8)/2;case Bd:case Vd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $d:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yc:case nh:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wg:case rh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sh:case oh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function PR(n){switch(n){case di:case yg:return{byteLength:1,components:1};case Do:case _g:case Ao:return{byteLength:2,components:1};case Id:case Rd:return{byteLength:2,components:4};case Cr:case Ad:case wi:return{byteLength:4,components:1};case xg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);function tE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function OR(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let y=d[h];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var FR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LR=`#ifdef USE_ALPHAHASH
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
#endif`,kR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HR=`#ifdef USE_AOMAP
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
#endif`,zR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GR=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$R=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XR=`#ifdef USE_IRIDESCENCE
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
#endif`,YR=`#ifdef USE_BUMPMAP
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
#endif`,ZR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,r1=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,s1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o1=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d1="gl_FragColor = linearToOutputTexel( gl_FragColor );",h1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b1=`#ifdef USE_GRADIENTMAP
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
}`,E1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,T1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,D1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,P1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O1=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j1=`#if defined( USE_POINTS_UV )
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
#endif`,W1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
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
#endif`,K1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iN=`#ifdef USE_NORMALMAP
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
#endif`,rN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;

		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,_N=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,xN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MN=`#ifdef USE_SKINNING
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
#endif`,bN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EN=`#ifdef USE_SKINNING
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
#endif`,SN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DN=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AN=`#ifdef USE_TRANSMISSION
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
#endif`,IN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ON=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FN=`uniform sampler2D t2D;
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
}`,LN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VN=`#include <common>
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
}`,HN=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zN=`#define DISTANCE
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
}`,GN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$N=`uniform float scale;
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
}`,qN=`uniform vec3 diffuse;
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
}`,XN=`#include <common>
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
}`,YN=`uniform vec3 diffuse;
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
}`,ZN=`#define LAMBERT
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
}`,KN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,JN=`#define MATCAP
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
}`,QN=`#define MATCAP
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
}`,eP=`#define NORMAL
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
}`,tP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nP=`#define PHONG
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
}`,iP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,rP=`#define STANDARD
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
}`,sP=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,oP=`#define TOON
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
}`,aP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,cP=`uniform float size;
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
}`,lP=`uniform vec3 diffuse;
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
}`,uP=`#include <common>
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
}`,dP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,hP=`uniform float rotation;
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
}`,fP=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:FR,alphahash_pars_fragment:LR,alphamap_fragment:kR,alphamap_pars_fragment:UR,alphatest_fragment:BR,alphatest_pars_fragment:VR,aomap_fragment:HR,aomap_pars_fragment:zR,batching_pars_vertex:GR,batching_vertex:jR,begin_vertex:WR,beginnormal_vertex:$R,bsdfs:qR,iridescence_fragment:XR,bumpmap_pars_fragment:YR,clipping_planes_fragment:ZR,clipping_planes_pars_fragment:KR,clipping_planes_pars_vertex:JR,clipping_planes_vertex:QR,color_fragment:e1,color_pars_fragment:t1,color_pars_vertex:n1,color_vertex:i1,common:r1,cube_uv_reflection_fragment:s1,defaultnormal_vertex:o1,displacementmap_pars_vertex:a1,displacementmap_vertex:c1,emissivemap_fragment:l1,emissivemap_pars_fragment:u1,colorspace_fragment:d1,colorspace_pars_fragment:h1,envmap_fragment:f1,envmap_common_pars_fragment:p1,envmap_pars_fragment:m1,envmap_pars_vertex:g1,envmap_physical_pars_fragment:T1,envmap_vertex:v1,fog_vertex:y1,fog_pars_vertex:_1,fog_fragment:x1,fog_pars_fragment:M1,gradientmap_pars_fragment:b1,lightmap_pars_fragment:E1,lights_lambert_fragment:S1,lights_lambert_pars_fragment:w1,lights_pars_begin:C1,lights_toon_fragment:D1,lights_toon_pars_fragment:A1,lights_phong_fragment:I1,lights_phong_pars_fragment:R1,lights_physical_fragment:N1,lights_physical_pars_fragment:P1,lights_fragment_begin:O1,lights_fragment_maps:F1,lights_fragment_end:L1,logdepthbuf_fragment:k1,logdepthbuf_pars_fragment:U1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:V1,map_fragment:H1,map_pars_fragment:z1,map_particle_fragment:G1,map_particle_pars_fragment:j1,metalnessmap_fragment:W1,metalnessmap_pars_fragment:$1,morphinstance_vertex:q1,morphcolor_vertex:X1,morphnormal_vertex:Y1,morphtarget_pars_vertex:Z1,morphtarget_vertex:K1,normal_fragment_begin:J1,normal_fragment_maps:Q1,normal_pars_fragment:eN,normal_pars_vertex:tN,normal_vertex:nN,normalmap_pars_fragment:iN,clearcoat_normal_fragment_begin:rN,clearcoat_normal_fragment_maps:sN,clearcoat_pars_fragment:oN,iridescence_pars_fragment:aN,opaque_fragment:cN,packing:lN,premultiplied_alpha_fragment:uN,project_vertex:dN,dithering_fragment:hN,dithering_pars_fragment:fN,roughnessmap_fragment:pN,roughnessmap_pars_fragment:mN,shadowmap_pars_fragment:gN,shadowmap_pars_vertex:vN,shadowmap_vertex:yN,shadowmask_pars_fragment:_N,skinbase_vertex:xN,skinning_pars_vertex:MN,skinning_vertex:bN,skinnormal_vertex:EN,specularmap_fragment:SN,specularmap_pars_fragment:wN,tonemapping_fragment:CN,tonemapping_pars_fragment:TN,transmission_fragment:DN,transmission_pars_fragment:AN,uv_pars_fragment:IN,uv_pars_vertex:RN,uv_vertex:NN,worldpos_vertex:PN,background_vert:ON,background_frag:FN,backgroundCube_vert:LN,backgroundCube_frag:kN,cube_vert:UN,cube_frag:BN,depth_vert:VN,depth_frag:HN,distanceRGBA_vert:zN,distanceRGBA_frag:GN,equirect_vert:jN,equirect_frag:WN,linedashed_vert:$N,linedashed_frag:qN,meshbasic_vert:XN,meshbasic_frag:YN,meshlambert_vert:ZN,meshlambert_frag:KN,meshmatcap_vert:JN,meshmatcap_frag:QN,meshnormal_vert:eP,meshnormal_frag:tP,meshphong_vert:nP,meshphong_frag:iP,meshphysical_vert:rP,meshphysical_frag:sP,meshtoon_vert:oP,meshtoon_frag:aP,points_vert:cP,points_frag:lP,shadow_vert:uP,shadow_frag:dP,sprite_vert:hP,sprite_frag:fP},ne={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Ci={basic:{uniforms:rn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:rn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:rn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:rn([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:rn([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:rn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:rn([ne.points,ne.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:rn([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:rn([ne.common,ne.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:rn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:rn([ne.sprite,ne.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:rn([ne.common,ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:rn([ne.lights,ne.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Ci.physical={uniforms:rn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var ah={r:0,b:0,g:0},hs=new vr,pP=new Et;function mP(n,e,t,i,r,s,o){let a=new Ye(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function y(S){let E=!1,N=g(S);N===null?p(a,c):N&&N.isColor&&(p(N,1),E=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,E){let N=g(E);N&&(N.isCubeTexture||N.mapping===hc)?(u===void 0&&(u=new ln(new xr(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:ds(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,T,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hs.copy(E.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pP.makeRotationFromEuler(hs)),u.material.toneMapped=ot.getTransfer(N.colorSpace)!==mt,(d!==N||f!==N.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=N,f=N.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(l===void 0&&(l=new ln(new sc(2,2),new ui({name:"BackgroundMaterial",uniforms:ds(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=N,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ot.getTransfer(N.colorSpace)!==mt,N.matrixAutoUpdate===!0&&N.updateMatrix(),l.material.uniforms.uvTransform.value.copy(N.matrix),(d!==N||f!==N.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=N,f=N.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,E){S.getRGB(ah,Ng(n)),i.buffers.color.setClear(ah.r,ah.g,ah.b,E,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:y,addToRenderList:m,dispose:w}}function gP(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(x,D,G,B,X){let Y=!1,$=d(B,G,D);s!==$&&(s=$,l(s.object)),Y=h(x,B,G,X),Y&&g(x,B,G,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,E(x,D,G,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,D,G){let B=G.wireframe===!0,X=i[x.id];X===void 0&&(X={},i[x.id]=X);let Y=X[D.id];Y===void 0&&(Y={},X[D.id]=Y);let $=Y[B];return $===void 0&&($=f(c()),Y[B]=$),$}function f(x){let D=[],G=[],B=[];for(let X=0;X<t;X++)D[X]=0,G[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:B,object:x,attributes:{},index:null}}function h(x,D,G,B){let X=s.attributes,Y=D.attributes,$=0,K=G.getAttributes();for(let H in K)if(K[H].location>=0){let he=X[H],xe=Y[H];if(xe===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),he===void 0||he.attribute!==xe||xe&&he.data!==xe.data)return!0;$++}return s.attributesNum!==$||s.index!==B}function g(x,D,G,B){let X={},Y=D.attributes,$=0,K=G.getAttributes();for(let H in K)if(K[H].location>=0){let he=Y[H];he===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(he=x.instanceColor));let xe={};xe.attribute=he,he&&he.data&&(xe.data=he.data),X[H]=xe,$++}s.attributes=X,s.attributesNum=$,s.index=B}function y(){let x=s.newAttributes;for(let D=0,G=x.length;D<G;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){let G=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;G[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),X[x]!==D&&(n.vertexAttribDivisor(x,D),X[x]=D)}function w(){let x=s.newAttributes,D=s.enabledAttributes;for(let G=0,B=D.length;G<B;G++)D[G]!==x[G]&&(n.disableVertexAttribArray(G),D[G]=0)}function S(x,D,G,B,X,Y,$){$===!0?n.vertexAttribIPointer(x,D,G,X,Y):n.vertexAttribPointer(x,D,G,B,X,Y)}function E(x,D,G,B){y();let X=B.attributes,Y=G.getAttributes(),$=D.defaultAttributeValues;for(let K in Y){let H=Y[K];if(H.location>=0){let se=X[K];if(se===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){let he=se.normalized,xe=se.itemSize,$e=e.get(se);if($e===void 0)continue;let vt=$e.buffer,j=$e.type,ee=$e.bytesPerElement,ge=j===n.INT||j===n.UNSIGNED_INT||se.gpuType===Ad;if(se.isInterleavedBufferAttribute){let oe=se.data,we=oe.stride,ct=se.offset;if(oe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<H.locationSize;Ie++)p(H.location+Ie,oe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ie=0;Ie<H.locationSize;Ie++)m(H.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Ie=0;Ie<H.locationSize;Ie++)S(H.location+Ie,xe/H.locationSize,j,he,we*ee,(ct+xe/H.locationSize*Ie)*ee,ge)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe,se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let oe=0;oe<H.locationSize;oe++)S(H.location+oe,xe/H.locationSize,j,he,xe*ee,xe/H.locationSize*oe*ee,ge)}}else if($!==void 0){let he=$[K];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(H.location,he);break;case 3:n.vertexAttrib3fv(H.location,he);break;case 4:n.vertexAttrib4fv(H.location,he);break;default:n.vertexAttrib1fv(H.location,he)}}}}w()}function N(){F();for(let x in i){let D=i[x];for(let G in D){let B=D[G];for(let X in B)u(B[X].object),delete B[X];delete D[G]}delete i[x]}}function I(x){if(i[x.id]===void 0)return;let D=i[x.id];for(let G in D){let B=D[G];for(let X in B)u(B[X].object),delete B[X];delete D[G]}delete i[x.id]}function T(x){for(let D in i){let G=i[D];if(G[x.id]===void 0)continue;let B=G[x.id];for(let X in B)u(B[X].object),delete B[X];delete G[x.id]}}function F(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function vP(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function yP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==qn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let F=T===Ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==di&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wi&&!F)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:N,maxSamples:I}}function _P(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Gn,a=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let w=s?0:i,S=w*4,E=p.clippingState||null;c.value=E,E=u(g,f,S,h);for(let N=0;N!==S;++N)E[N]=t[N];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=h+y*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,E=h;S!==y;++S,E+=4)o.copy(d[S]).applyMatrix4(w,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function xP(n){let e=new WeakMap;function t(o,a){return a===Cd?o.mapping=ls:a===Td&&(o.mapping=us),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Cd||a===Td)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new od(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Oo=4,Nb=[.125,.215,.35,.446,.526,.582],ms=20,Lg=new gd,Pb=new Ye,kg=null,Ug=0,Bg=0,Vg=!1,ps=(1+Math.sqrt(5))/2,Po=1/ps,Ob=[new P(-ps,Po,0),new P(ps,Po,0),new P(-Po,0,ps),new P(Po,0,ps),new P(0,ps,-Po),new P(0,ps,Po),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],MP=new P,uh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=MP}=s;kg=this._renderer.getRenderTarget(),Ug=this._renderer.getActiveCubeFace(),Bg=this._renderer.getActiveMipmapLevel(),Vg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kg,Ug,Bg),this._renderer.xr.enabled=Vg,e.scissorTest=!1,ch(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kg=this._renderer.getRenderTarget(),Ug=this._renderer.getActiveCubeFace(),Bg=this._renderer.getActiveMipmapLevel(),Vg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:Ao,format:qn,colorSpace:as,depthBuffer:!1},r=Fb(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fb(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bP(s)),this._blurMaterial=EP(s,e,t)}return r}_compileMaterial(e){let t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,Lg)}_sceneToCubeUV(e,t,i,r,s){let c=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Pb),d.toneMapping=Xi,d.autoClear=!1;let g=new Ja({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),y=new ln(new xr,g),m=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Pb),m=!0);for(let w=0;w<6;w++){let S=w%3;S===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):S===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));let E=this._cubeSize;ch(r,S*E,w>2?E:0,E,E),d.setRenderTarget(r),m&&d.render(y,c),d.render(e,c)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ls||e.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kb()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lb());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;ch(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Lg)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ob[(r-s-1)%Ob.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ln(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ms-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):ms;m>ms&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);let p=[],w=0;for(let T=0;T<ms;++T){let F=T/y,b=Math.exp(-F*F/2);p.push(b),T===0?w+=b:T<m&&(w+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let E=this._sizeLods[r],N=3*E*(r>S-Oo?r-S+Oo:0),I=4*(this._cubeSize-E);ch(t,N,I,3*E,2*E),c.setRenderTarget(t),c.render(d,Lg)}};function bP(n){let e=[],t=[],i=[],r=n,s=n-Oo+1+Nb.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Oo?c=Nb[o-n+Oo-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,y=3,m=2,p=1,w=new Float32Array(y*g*h),S=new Float32Array(m*g*h),E=new Float32Array(p*g*h);for(let I=0;I<h;I++){let T=I%3*2/3-1,F=I>2?0:-1,b=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];w.set(b,y*g*I),S.set(f,m*g*I);let x=[I,I,I,I,I,I];E.set(x,p*g*I)}let N=new _r;N.setAttribute("position",new Tn(w,y)),N.setAttribute("uv",new Tn(S,m)),N.setAttribute("faceIndex",new Tn(E,p)),e.push(N),r>Oo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fb(n,e,t){let i=new bi(n,e,t);return i.texture.mapping=hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ch(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function EP(n,e,t){let i=new Float32Array(ms),r=new P(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zg(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Lb(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zg(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function kb(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Zg(){return`

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
	`}function SP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Cd||c===Td,u=c===ls||c===us;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new uh(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new uh(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function wP(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&_c("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function CP(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,y=0;if(h!==null){let w=h.array;y=h.version;for(let S=0,E=w.length;S<E;S+=3){let N=w[S+0],I=w[S+1],T=w[S+2];f.push(N,I,I,T,T,N)}}else if(g!==void 0){let w=g.array;y=g.version;for(let S=0,E=w.length/3-1;S<E;S+=3){let N=S+0,I=S+1,T=S+2;f.push(N,I,I,T,T,N)}}else return;let m=new(Rg(f)?ec:Qa)(f,1);m.version=y;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function TP(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,y,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*y[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function DP(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function AP(n,e,t){let i=new WeakMap,r=new pt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],E=0;g===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let N=a.attributes.position.count*E,I=1;N>e.maxTextureSize&&(I=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let T=new Float32Array(N*I*4*d),F=new Za(T,N,I,d);F.type=wi,F.needsUpdate=!0;let b=E*4;for(let D=0;D<d;D++){let G=p[D],B=w[D],X=S[D],Y=N*I*4*D;for(let $=0;$<G.count;$++){let K=$*b;g===!0&&(r.fromBufferAttribute(G,$),T[Y+K+0]=r.x,T[Y+K+1]=r.y,T[Y+K+2]=r.z,T[Y+K+3]=0),y===!0&&(r.fromBufferAttribute(B,$),T[Y+K+4]=r.x,T[Y+K+5]=r.y,T[Y+K+6]=r.z,T[Y+K+7]=0),m===!0&&(r.fromBufferAttribute(X,$),T[Y+K+8]=r.x,T[Y+K+9]=r.y,T[Y+K+10]=r.z,T[Y+K+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:F,size:new Oe(N,I)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function IP(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var nE=new Tr,Ub=new rc(1,1),iE=new Za,rE=new rd,sE=new nc,Bb=[],Vb=[],Hb=new Float32Array(16),zb=new Float32Array(9),Gb=new Float32Array(4);function Lo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Bb[r];if(s===void 0&&(s=new Float32Array(r),Bb[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hh(n,e){let t=Vb[e];t===void 0&&(t=new Int32Array(e),Vb[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function RP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function NP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function PP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function OP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function FP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;Gb.set(i),n.uniformMatrix2fv(this.addr,!1,Gb),Gt(t,i)}}function LP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;zb.set(i),n.uniformMatrix3fv(this.addr,!1,zb),Gt(t,i)}}function kP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;Hb.set(i),n.uniformMatrix4fv(this.addr,!1,Hb),Gt(t,i)}}function UP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function BP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function VP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function HP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function zP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function GP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function jP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function WP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function $P(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ub.compareFunction=Tg,s=Ub):s=nE,t.setTexture2D(e||s,r)}function qP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||rE,r)}function XP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||sE,r)}function YP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||iE,r)}function ZP(n){switch(n){case 5126:return RP;case 35664:return NP;case 35665:return PP;case 35666:return OP;case 35674:return FP;case 35675:return LP;case 35676:return kP;case 5124:case 35670:return UP;case 35667:case 35671:return BP;case 35668:case 35672:return VP;case 35669:case 35673:return HP;case 5125:return zP;case 36294:return GP;case 36295:return jP;case 36296:return WP;case 35678:case 36198:case 36298:case 36306:case 35682:return $P;case 35679:case 36299:case 36307:return qP;case 35680:case 36300:case 36308:case 36293:return XP;case 36289:case 36303:case 36311:case 36292:return YP}}function KP(n,e){n.uniform1fv(this.addr,e)}function JP(n,e){let t=Lo(e,this.size,2);n.uniform2fv(this.addr,t)}function QP(n,e){let t=Lo(e,this.size,3);n.uniform3fv(this.addr,t)}function eO(n,e){let t=Lo(e,this.size,4);n.uniform4fv(this.addr,t)}function tO(n,e){let t=Lo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nO(n,e){let t=Lo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iO(n,e){let t=Lo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rO(n,e){n.uniform1iv(this.addr,e)}function sO(n,e){n.uniform2iv(this.addr,e)}function oO(n,e){n.uniform3iv(this.addr,e)}function aO(n,e){n.uniform4iv(this.addr,e)}function cO(n,e){n.uniform1uiv(this.addr,e)}function lO(n,e){n.uniform2uiv(this.addr,e)}function uO(n,e){n.uniform3uiv(this.addr,e)}function dO(n,e){n.uniform4uiv(this.addr,e)}function hO(n,e,t){let i=this.cache,r=e.length,s=hh(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||nE,s[o])}function fO(n,e,t){let i=this.cache,r=e.length,s=hh(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||rE,s[o])}function pO(n,e,t){let i=this.cache,r=e.length,s=hh(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||sE,s[o])}function mO(n,e,t){let i=this.cache,r=e.length,s=hh(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||iE,s[o])}function gO(n){switch(n){case 5126:return KP;case 35664:return JP;case 35665:return QP;case 35666:return eO;case 35674:return tO;case 35675:return nO;case 35676:return iO;case 5124:case 35670:return rO;case 35667:case 35671:return sO;case 35668:case 35672:return oO;case 35669:case 35673:return aO;case 5125:return cO;case 36294:return lO;case 36295:return uO;case 36296:return dO;case 35678:case 36198:case 36298:case 36306:case 35682:return hO;case 35679:case 36299:case 36307:return fO;case 35680:case 36300:case 36308:case 36293:return pO;case 36289:case 36303:case 36311:case 36292:return mO}}var zg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ZP(t.type)}},Gg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gO(t.type)}},jg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Hg=/(\w+)(\])?(\[|\.)?/g;function jb(n,e){n.seq.push(e),n.map[e.id]=e}function vO(n,e,t){let i=n.name,r=i.length;for(Hg.lastIndex=0;;){let s=Hg.exec(i),o=Hg.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){jb(t,l===void 0?new zg(a,n,e):new Gg(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new jg(a),jb(t,d)),t=d}}}var Fo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);vO(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function Wb(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var yO=37297,_O=0;function xO(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var $b=new Ue;function MO(n){ot._getMatrix($b,ot.workingColorSpace,n);let e=`mat3( ${$b.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case qa:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function qb(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xO(n.getShaderSource(e),o)}else return r}function bO(n,e){let t=MO(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function EO(n,e){let t;switch(e){case cb:t="Linear";break;case lb:t="Reinhard";break;case ub:t="Cineon";break;case db:t="ACESFilmic";break;case fb:t="AgX";break;case pb:t="Neutral";break;case hb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lh=new P;function SO(){ot.getLuminanceCoefficients(lh);let n=lh.x.toFixed(4),e=lh.y.toFixed(4),t=lh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wO(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xc).join(`
`)}function CO(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TO(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xc(n){return n!==""}function Xb(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yb(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var DO=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wg(n){return n.replace(DO,IO)}var AO=new Map;function IO(n,e){let t=ze[e];if(t===void 0){let i=AO.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wg(t)}var RO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zb(n){return n.replace(RO,NO)}function NO(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kb(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PO(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===HM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function OO(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ls:case us:e="ENVMAP_TYPE_CUBE";break;case hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FO(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function LO(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case To:e="ENVMAP_BLENDING_MULTIPLY";break;case ob:e="ENVMAP_BLENDING_MIX";break;case ab:e="ENVMAP_BLENDING_ADD";break}return e}function kO(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function UO(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=PO(t),l=OO(t),u=FO(t),d=LO(t),f=kO(t),h=wO(t),g=CO(s),y=r.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xc).join(`
`),p.length>0&&(p+=`
`)):(m=[Kb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xc).join(`
`),p=[Kb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?ze.tonemapping_pars_fragment:"",t.toneMapping!==Xi?EO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,bO("linearToOutputTexel",t.outputColorSpace),SO(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xc).join(`
`)),o=Wg(o),o=Xb(o,t),o=Yb(o,t),a=Wg(a),a=Xb(a,t),a=Yb(a,t),o=Zb(o),a=Zb(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=w+m+o,E=w+p+a,N=Wb(r,r.VERTEX_SHADER,S),I=Wb(r,r.FRAGMENT_SHADER,E);r.attachShader(y,N),r.attachShader(y,I),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(D){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(N).trim(),X=r.getShaderInfoLog(I).trim(),Y=!0,$=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,N,I);else{let K=qb(r,N,"vertex"),H=qb(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+K+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||X==="")&&($=!1);$&&(D.diagnostics={runnable:Y,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(N),r.deleteShader(I),F=new Fo(r,y),b=TO(r,y)}let F;this.getUniforms=function(){return F===void 0&&T(this),F};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,yO)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_O++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=I,this}var BO=0,$g=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new qg(e),t.set(e,i)),i}},qg=class{constructor(e){this.id=BO++,this.code=e,this.usedTimes=0}};function VO(n,e,t,i,r,s,o){let a=new Ka,c=new $g,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,D,G,B){let X=G.fog,Y=B.geometry,$=b.isMeshStandardMaterial?G.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),H=K&&K.mapping===hc?K.image.height:null,se=g[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let he=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xe=he!==void 0?he.length:0,$e=0;Y.morphAttributes.position!==void 0&&($e=1),Y.morphAttributes.normal!==void 0&&($e=2),Y.morphAttributes.color!==void 0&&($e=3);let vt,j,ee,ge;if(se){let ft=Ci[se];vt=ft.vertexShader,j=ft.fragmentShader}else vt=b.vertexShader,j=b.fragmentShader,c.update(b),ee=c.getVertexShaderID(b),ge=c.getFragmentShaderID(b);let oe=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),ct=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,Nt=!!b.map,wt=!!b.matcap,Qe=!!K,C=!!b.aoMap,Rn=!!b.lightMap,rt=!!b.bumpMap,et=!!b.normalMap,Me=!!b.displacementMap,bt=!!b.emissiveMap,_e=!!b.metalnessMap,M=!!b.roughnessMap,v=b.anisotropy>0,L=b.clearcoat>0,W=b.dispersion>0,Z=b.iridescence>0,z=b.sheen>0,ve=b.transmission>0,ae=v&&!!b.anisotropyMap,Ce=L&&!!b.clearcoatMap,De=L&&!!b.clearcoatNormalMap,J=L&&!!b.clearcoatRoughnessMap,fe=Z&&!!b.iridescenceMap,Ae=Z&&!!b.iridescenceThicknessMap,Ne=z&&!!b.sheenColorMap,pe=z&&!!b.sheenRoughnessMap,tt=!!b.specularMap,He=!!b.specularColorMap,_t=!!b.specularIntensityMap,A=ve&&!!b.transmissionMap,ce=ve&&!!b.thicknessMap,V=!!b.gradientMap,q=!!b.alphaMap,ue=b.alphaTest>0,le=!!b.alphaHash,Be=!!b.extensions,Ct=Xi;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ct=n.toneMapping);let Qt={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:vt,fragmentShader:j,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Ie,batchingColor:Ie&&B._colorsTexture!==null,instancing:ct,instancingColor:ct&&B.instanceColor!==null,instancingMorph:ct&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:as,alphaToCoverage:!!b.alphaToCoverage,map:Nt,matcap:wt,envMap:Qe,envMapMode:Qe&&K.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:Rn,bumpMap:rt,normalMap:et,displacementMap:f&&Me,emissiveMap:bt,normalMapObjectSpace:et&&b.normalMapType===yb,normalMapTangentSpace:et&&b.normalMapType===Cg,metalnessMap:_e,roughnessMap:M,anisotropy:v,anisotropyMap:ae,clearcoat:L,clearcoatMap:Ce,clearcoatNormalMap:De,clearcoatRoughnessMap:J,dispersion:W,iridescence:Z,iridescenceMap:fe,iridescenceThicknessMap:Ae,sheen:z,sheenColorMap:Ne,sheenRoughnessMap:pe,specularMap:tt,specularColorMap:He,specularIntensityMap:_t,transmission:ve,transmissionMap:A,thicknessMap:ce,gradientMap:V,opaque:b.transparent===!1&&b.blending===ss&&b.alphaToCoverage===!1,alphaMap:q,alphaTest:ue,alphaHash:le,combine:b.combine,mapUv:Nt&&y(b.map.channel),aoMapUv:C&&y(b.aoMap.channel),lightMapUv:Rn&&y(b.lightMap.channel),bumpMapUv:rt&&y(b.bumpMap.channel),normalMapUv:et&&y(b.normalMap.channel),displacementMapUv:Me&&y(b.displacementMap.channel),emissiveMapUv:bt&&y(b.emissiveMap.channel),metalnessMapUv:_e&&y(b.metalnessMap.channel),roughnessMapUv:M&&y(b.roughnessMap.channel),anisotropyMapUv:ae&&y(b.anisotropyMap.channel),clearcoatMapUv:Ce&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:De&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:pe&&y(b.sheenRoughnessMap.channel),specularMapUv:tt&&y(b.specularMap.channel),specularColorMapUv:He&&y(b.specularColorMap.channel),specularIntensityMapUv:_t&&y(b.specularIntensityMap.channel),transmissionMapUv:A&&y(b.transmissionMap.channel),thicknessMapUv:ce&&y(b.thicknessMap.channel),alphaMapUv:q&&y(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(et||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Nt||q),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:we,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:$e,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Nt&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===mt,decodeVideoTextureEmissive:bt&&b.emissiveMap.isVideoTexture===!0&&ot.getTransfer(b.emissiveMap.colorSpace)===mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Si,flipSided:b.side===un,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Be&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&b.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function p(b){let x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)x.push(D),x.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(w(x,b),S(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function w(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function S(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function E(b){let x=g[b.type],D;if(x){let G=Ci[x];D=Rb.clone(G.uniforms)}else D=b.uniforms;return D}function N(b,x){let D;for(let G=0,B=u.length;G<B;G++){let X=u[G];if(X.cacheKey===x){D=X,++D.usedTimes;break}}return D===void 0&&(D=new UO(n,x,b,s),u.push(D)),D}function I(b){if(--b.usedTimes===0){let x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function T(b){c.remove(b)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:N,releaseProgram:I,releaseShaderCache:T,programs:u,dispose:F}}function HO(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function zO(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qb(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||zO),i.length>1&&i.sort(f||Jb),r.length>1&&r.sort(f||Jb)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function GO(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Qb,n.set(i,[o])):r>=s.length?(o=new Qb,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function jO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ye};break;case"SpotLight":t={position:new P,direction:new P,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function WO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var $O=0;function qO(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XO(n){let e=new jO,t=WO(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let r=new P,s=new Et,o=new Et;function a(l){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,y=0,m=0,p=0,w=0,S=0,E=0,N=0,I=0,T=0;l.sort(qO);for(let b=0,x=l.length;b<x;b++){let D=l[b],G=D.color,B=D.intensity,X=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=G.r*B,d+=G.g*B,f+=G.b*B;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],B);T++}else if(D.isDirectionalLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,H=t.get(D);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=Y,i.directionalShadowMatrix[h]=D.shadow.matrix,w++}i.directional[h]=$,h++}else if(D.isSpotLight){let $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(G).multiplyScalar(B),$.distance=X,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[y]=$;let K=D.shadow;if(D.map&&(i.spotLightMap[N]=D.map,N++,K.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[y]=K.matrix,D.castShadow){let H=t.get(D);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=Y,E++}y++}else if(D.isRectAreaLight){let $=e.get(D);$.color.copy(G).multiplyScalar(B),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=$,m++}else if(D.isPointLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){let K=D.shadow,H=t.get(D);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=$,g++}else if(D.isHemisphereLight){let $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(B),$.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let F=i.hash;(F.directionalLength!==h||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==w||F.numPointShadows!==S||F.numSpotShadows!==E||F.numSpotMaps!==N||F.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+N-I,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=T,F.directionalLength=h,F.pointLength=g,F.spotLength=y,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=w,F.numPointShadows=S,F.numSpotShadows=E,F.numSpotMaps=N,F.numLightProbes=T,i.version=$O++)}function c(l,u){let d=0,f=0,h=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){let S=l[p];if(S.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(S.isSpotLight){let E=i.spot[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let E=i.hemi[y];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function eE(n){let e=new XO(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function YO(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new eE(n),e.set(r,[a])):s>=o.length?(a=new eE(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var ZO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JO(n,e,t){let i=new So,r=new Oe,s=new Oe,o=new pt,a=new ad({depthPacking:vb}),c=new cd,l={},u=t.maxTextureSize,d={[$i]:un,[un]:$i,[Si]:Si},f=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:ZO,fragmentShader:KO}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new _r;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ln(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pg;let p=this.type;this.render=function(I,T,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let b=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),G=n.state;G.setBlending(qi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=p!==Ei&&this.type===Ei,X=p===Ei&&this.type!==Ei;for(let Y=0,$=I.length;Y<$;Y++){let K=I[Y],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let se=H.getFrameExtents();if(r.multiply(se),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,H.mapSize.y=s.y)),H.map===null||B===!0||X===!0){let xe=this.type!==Ei?{minFilter:Wn,magFilter:Wn}:{};H.map!==null&&H.map.dispose(),H.map=new bi(r.x,r.y,xe),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let he=H.getViewportCount();for(let xe=0;xe<he;xe++){let $e=H.getViewport(xe);o.set(s.x*$e.x,s.y*$e.y,s.x*$e.z,s.y*$e.w),G.viewport(o),H.updateMatrices(K,xe),i=H.getFrustum(),E(T,F,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Ei&&w(H,F),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,x,D)};function w(I,T){let F=e.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new bi(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(T,null,F,f,y,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(T,null,F,h,y,null)}function S(I,T,F,b){let x=null,D=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)x=D;else if(x=F.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let G=x.uuid,B=T.uuid,X=l[G];X===void 0&&(X={},l[G]=X);let Y=X[B];Y===void 0&&(Y=x.clone(),X[B]=Y,T.addEventListener("dispose",N)),x=Y}if(x.visible=T.visible,x.wireframe=T.wireframe,b===Ei?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let G=n.properties.get(x);G.light=F}return x}function E(I,T,F,b,x){if(I.visible===!1)return;if(I.layers.test(T.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===Ei)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);let B=e.update(I),X=I.material;if(Array.isArray(X)){let Y=B.groups;for(let $=0,K=Y.length;$<K;$++){let H=Y[$],se=X[H.materialIndex];if(se&&se.visible){let he=S(I,se,b,x);I.onBeforeShadow(n,I,T,F,B,he,H),n.renderBufferDirect(F,null,B,he,I,H),I.onAfterShadow(n,I,T,F,B,he,H)}}}else if(X.visible){let Y=S(I,X,b,x);I.onBeforeShadow(n,I,T,F,B,Y,null),n.renderBufferDirect(F,null,B,Y,I,null),I.onAfterShadow(n,I,T,F,B,Y,null)}}let G=I.children;for(let B=0,X=G.length;B<X;B++)E(G[B],T,F,b,x)}function N(I){I.target.removeEventListener("dispose",N);for(let F in l){let b=l[F],x=I.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}var QO={[_d]:xd,[Md]:Sd,[bd]:wd,[os]:Ed,[xd]:_d,[Sd]:Md,[wd]:bd,[Ed]:os};function eF(n,e){function t(){let A=!1,ce=new pt,V=null,q=new pt(0,0,0,0);return{setMask:function(ue){V!==ue&&!A&&(n.colorMask(ue,ue,ue,ue),V=ue)},setLocked:function(ue){A=ue},setClear:function(ue,le,Be,Ct,Qt){Qt===!0&&(ue*=Ct,le*=Ct,Be*=Ct),ce.set(ue,le,Be,Ct),q.equals(ce)===!1&&(n.clearColor(ue,le,Be,Ct),q.copy(ce))},reset:function(){A=!1,V=null,q.set(-1,0,0,0)}}}function i(){let A=!1,ce=!1,V=null,q=null,ue=null;return{setReversed:function(le){if(ce!==le){let Be=e.get("EXT_clip_control");le?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ce=le;let Ct=ue;ue=null,this.setClear(Ct)}},getReversed:function(){return ce},setTest:function(le){le?oe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(le){V!==le&&!A&&(n.depthMask(le),V=le)},setFunc:function(le){if(ce&&(le=QO[le]),q!==le){switch(le){case _d:n.depthFunc(n.NEVER);break;case xd:n.depthFunc(n.ALWAYS);break;case Md:n.depthFunc(n.LESS);break;case os:n.depthFunc(n.LEQUAL);break;case bd:n.depthFunc(n.EQUAL);break;case Ed:n.depthFunc(n.GEQUAL);break;case Sd:n.depthFunc(n.GREATER);break;case wd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=le}},setLocked:function(le){A=le},setClear:function(le){ue!==le&&(ce&&(le=1-le),n.clearDepth(le),ue=le)},reset:function(){A=!1,V=null,q=null,ue=null,ce=!1}}}function r(){let A=!1,ce=null,V=null,q=null,ue=null,le=null,Be=null,Ct=null,Qt=null;return{setTest:function(ft){A||(ft?oe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(ft){ce!==ft&&!A&&(n.stencilMask(ft),ce=ft)},setFunc:function(ft,Yn,Di){(V!==ft||q!==Yn||ue!==Di)&&(n.stencilFunc(ft,Yn,Di),V=ft,q=Yn,ue=Di)},setOp:function(ft,Yn,Di){(le!==ft||Be!==Yn||Ct!==Di)&&(n.stencilOp(ft,Yn,Di),le=ft,Be=Yn,Ct=Di)},setLocked:function(ft){A=ft},setClear:function(ft){Qt!==ft&&(n.clearStencil(ft),Qt=ft)},reset:function(){A=!1,ce=null,V=null,q=null,ue=null,le=null,Be=null,Ct=null,Qt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,S=null,E=null,N=null,I=null,T=new Ye(0,0,0),F=0,b=!1,x=null,D=null,G=null,B=null,X=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,K=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=K>=2);let se=null,he={},xe=n.getParameter(n.SCISSOR_BOX),$e=n.getParameter(n.VIEWPORT),vt=new pt().fromArray(xe),j=new pt().fromArray($e);function ee(A,ce,V,q){let ue=new Uint8Array(4),le=n.createTexture();n.bindTexture(A,le),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<V;Be++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(ce+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return le}let ge={};ge[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(os),rt(!1),et(fg),oe(n.CULL_FACE),C(qi);function oe(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function we(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function ct(A,ce){return d[A]!==ce?(n.bindFramebuffer(A,ce),d[A]=ce,A===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ce),A===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ie(A,ce){let V=h,q=!1;if(A){V=f.get(ce),V===void 0&&(V=[],f.set(ce,V));let ue=A.textures;if(V.length!==ue.length||V[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Be=ue.length;le<Be;le++)V[le]=n.COLOR_ATTACHMENT0+le;V.length=ue.length,q=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,q=!0);q&&n.drawBuffers(V)}function Nt(A){return g!==A?(n.useProgram(A),g=A,!0):!1}let wt={[mr]:n.FUNC_ADD,[GM]:n.FUNC_SUBTRACT,[jM]:n.FUNC_REVERSE_SUBTRACT};wt[WM]=n.MIN,wt[$M]=n.MAX;let Qe={[qM]:n.ZERO,[XM]:n.ONE,[YM]:n.SRC_COLOR,[Ku]:n.SRC_ALPHA,[tb]:n.SRC_ALPHA_SATURATE,[QM]:n.DST_COLOR,[KM]:n.DST_ALPHA,[ZM]:n.ONE_MINUS_SRC_COLOR,[Ju]:n.ONE_MINUS_SRC_ALPHA,[eb]:n.ONE_MINUS_DST_COLOR,[JM]:n.ONE_MINUS_DST_ALPHA,[nb]:n.CONSTANT_COLOR,[ib]:n.ONE_MINUS_CONSTANT_COLOR,[rb]:n.CONSTANT_ALPHA,[sb]:n.ONE_MINUS_CONSTANT_ALPHA};function C(A,ce,V,q,ue,le,Be,Ct,Qt,ft){if(A===qi){y===!0&&(we(n.BLEND),y=!1);return}if(y===!1&&(oe(n.BLEND),y=!0),A!==zM){if(A!==m||ft!==b){if((p!==mr||E!==mr)&&(n.blendEquation(n.FUNC_ADD),p=mr,E=mr),ft)switch(A){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mg:n.blendFunc(n.ONE,n.ONE);break;case gg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mg:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,S=null,N=null,I=null,T.set(0,0,0),F=0,m=A,b=ft}return}ue=ue||ce,le=le||V,Be=Be||q,(ce!==p||ue!==E)&&(n.blendEquationSeparate(wt[ce],wt[ue]),p=ce,E=ue),(V!==w||q!==S||le!==N||Be!==I)&&(n.blendFuncSeparate(Qe[V],Qe[q],Qe[le],Qe[Be]),w=V,S=q,N=le,I=Be),(Ct.equals(T)===!1||Qt!==F)&&(n.blendColor(Ct.r,Ct.g,Ct.b,Qt),T.copy(Ct),F=Qt),m=A,b=!1}function Rn(A,ce){A.side===Si?we(n.CULL_FACE):oe(n.CULL_FACE);let V=A.side===un;ce&&(V=!V),rt(V),A.blending===ss&&A.transparent===!1?C(qi):C(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),s.setMask(A.colorWrite);let q=A.stencilWrite;a.setTest(q),q&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),bt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function rt(A){x!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),x=A)}function et(A){A!==BM?(oe(n.CULL_FACE),A!==D&&(A===fg?n.cullFace(n.BACK):A===VM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),D=A}function Me(A){A!==G&&($&&n.lineWidth(A),G=A)}function bt(A,ce,V){A?(oe(n.POLYGON_OFFSET_FILL),(B!==ce||X!==V)&&(n.polygonOffset(ce,V),B=ce,X=V)):we(n.POLYGON_OFFSET_FILL)}function _e(A){A?oe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function M(A){A===void 0&&(A=n.TEXTURE0+Y-1),se!==A&&(n.activeTexture(A),se=A)}function v(A,ce,V){V===void 0&&(se===null?V=n.TEXTURE0+Y-1:V=se);let q=he[V];q===void 0&&(q={type:void 0,texture:void 0},he[V]=q),(q.type!==A||q.texture!==ce)&&(se!==V&&(n.activeTexture(V),se=V),n.bindTexture(A,ce||ge[A]),q.type=A,q.texture=ce)}function L(){let A=he[se];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function W(){try{n.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function z(){try{n.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{n.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function De(){try{n.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{n.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function fe(){try{n.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ae(){try{n.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ne(A){vt.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),vt.copy(A))}function pe(A){j.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),j.copy(A))}function tt(A,ce){let V=l.get(ce);V===void 0&&(V=new WeakMap,l.set(ce,V));let q=V.get(A);q===void 0&&(q=n.getUniformBlockIndex(ce,A.name),V.set(A,q))}function He(A,ce){let q=l.get(ce).get(A);c.get(ce)!==q&&(n.uniformBlockBinding(ce,q,A.__bindingPointIndex),c.set(ce,q))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,he={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,S=null,E=null,N=null,I=null,T=new Ye(0,0,0),F=0,b=!1,x=null,D=null,G=null,B=null,X=null,vt.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:we,bindFramebuffer:ct,drawBuffers:Ie,useProgram:Nt,setBlending:C,setMaterial:Rn,setFlipSided:rt,setCullFace:et,setLineWidth:Me,setPolygonOffset:bt,setScissorTest:_e,activeTexture:M,bindTexture:v,unbindTexture:L,compressedTexImage2D:W,compressedTexImage3D:Z,texImage2D:fe,texImage3D:Ae,updateUBOMapping:tt,uniformBlockBinding:He,texStorage2D:De,texStorage3D:J,texSubImage2D:z,texSubImage3D:ve,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ce,scissor:Ne,viewport:pe,reset:_t}}function tF(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return h?new OffscreenCanvas(M,v):Ya("canvas")}function y(M,v,L){let W=1,Z=_e(M);if((Z.width>L||Z.height>L)&&(W=L/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let z=Math.floor(W*Z.width),ve=Math.floor(W*Z.height);d===void 0&&(d=g(z,ve));let ae=v?g(z,ve):d;return ae.width=z,ae.height=ve,ae.getContext("2d").drawImage(M,0,0,z,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+ve+")."),ae}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(M,v,L,W,Z=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let z=v;if(v===n.RED&&(L===n.FLOAT&&(z=n.R32F),L===n.HALF_FLOAT&&(z=n.R16F),L===n.UNSIGNED_BYTE&&(z=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.R8UI),L===n.UNSIGNED_SHORT&&(z=n.R16UI),L===n.UNSIGNED_INT&&(z=n.R32UI),L===n.BYTE&&(z=n.R8I),L===n.SHORT&&(z=n.R16I),L===n.INT&&(z=n.R32I)),v===n.RG&&(L===n.FLOAT&&(z=n.RG32F),L===n.HALF_FLOAT&&(z=n.RG16F),L===n.UNSIGNED_BYTE&&(z=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RG8UI),L===n.UNSIGNED_SHORT&&(z=n.RG16UI),L===n.UNSIGNED_INT&&(z=n.RG32UI),L===n.BYTE&&(z=n.RG8I),L===n.SHORT&&(z=n.RG16I),L===n.INT&&(z=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(z=n.RGB16UI),L===n.UNSIGNED_INT&&(z=n.RGB32UI),L===n.BYTE&&(z=n.RGB8I),L===n.SHORT&&(z=n.RGB16I),L===n.INT&&(z=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),L===n.UNSIGNED_INT&&(z=n.RGBA32UI),L===n.BYTE&&(z=n.RGBA8I),L===n.SHORT&&(z=n.RGBA16I),L===n.INT&&(z=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),v===n.RGBA){let ve=Z?qa:ot.getTransfer(W);L===n.FLOAT&&(z=n.RGBA32F),L===n.HALF_FLOAT&&(z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(z=ve===mt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function E(M,v){let L;return M?v===null||v===Cr||v===Io?L=n.DEPTH24_STENCIL8:v===wi?L=n.DEPTH32F_STENCIL8:v===Do&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Cr||v===Io?L=n.DEPTH_COMPONENT24:v===wi?L=n.DEPTH_COMPONENT32F:v===Do&&(L=n.DEPTH_COMPONENT16),L}function N(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Wn&&M.minFilter!==li?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function I(M){let v=M.target;v.removeEventListener("dispose",I),F(v),v.isVideoTexture&&u.delete(v)}function T(M){let v=M.target;v.removeEventListener("dispose",T),x(v)}function F(M){let v=i.get(M);if(v.__webglInit===void 0)return;let L=M.source,W=f.get(L);if(W){let Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(M),Object.keys(W).length===0&&f.delete(L)}i.remove(M)}function b(M){let v=i.get(M);n.deleteTexture(v.__webglTexture);let L=M.source,W=f.get(L);delete W[v.__cacheKey],o.memory.textures--}function x(M){let v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=M.textures;for(let W=0,Z=L.length;W<Z;W++){let z=i.get(L[W]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(L[W])}i.remove(M)}let D=0;function G(){D=0}function B(){let M=D;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),D+=1,M}function X(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function Y(M,v){let L=i.get(M);if(M.isVideoTexture&&Me(M),M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){let W=M.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(L,M,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function $(M,v){let L=i.get(M);if(M.version>0&&L.__version!==M.version){j(L,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function K(M,v){let L=i.get(M);if(M.version>0&&L.__version!==M.version){j(L,M,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function H(M,v){let L=i.get(M);if(M.version>0&&L.__version!==M.version){ee(L,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}let se={[Qu]:n.REPEAT,[pr]:n.CLAMP_TO_EDGE,[ed]:n.MIRRORED_REPEAT},he={[Wn]:n.NEAREST,[mb]:n.NEAREST_MIPMAP_NEAREST,[fc]:n.NEAREST_MIPMAP_LINEAR,[li]:n.LINEAR,[Dd]:n.LINEAR_MIPMAP_NEAREST,[wr]:n.LINEAR_MIPMAP_LINEAR},xe={[_b]:n.NEVER,[wb]:n.ALWAYS,[xb]:n.LESS,[Tg]:n.LEQUAL,[Mb]:n.EQUAL,[Sb]:n.GEQUAL,[bb]:n.GREATER,[Eb]:n.NOTEQUAL};function $e(M,v){if(v.type===wi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===li||v.magFilter===Dd||v.magFilter===fc||v.magFilter===wr||v.minFilter===li||v.minFilter===Dd||v.minFilter===fc||v.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,se[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,se[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,se[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,he[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Wn||v.minFilter!==fc&&v.minFilter!==wr||v.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function vt(M,v){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",I));let W=v.source,Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));let z=X(v);if(z!==M.__cacheKey){Z[z]===void 0&&(Z[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Z[z].usedTimes++;let ve=Z[M.__cacheKey];ve!==void 0&&(Z[M.__cacheKey].usedTimes--,ve.usedTimes===0&&b(v)),M.__cacheKey=z,M.__webglTexture=Z[z].texture}return L}function j(M,v,L){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);let Z=vt(M,v),z=v.source;t.bindTexture(W,M.__webglTexture,n.TEXTURE0+L);let ve=i.get(z);if(z.version!==ve.__version||Z===!0){t.activeTexture(n.TEXTURE0+L);let ae=ot.getPrimaries(ot.workingColorSpace),Ce=v.colorSpace===Yi?null:ot.getPrimaries(v.colorSpace),De=v.colorSpace===Yi||ae===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let J=y(v.image,!1,r.maxTextureSize);J=bt(v,J);let fe=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type),Ne=S(v.internalFormat,fe,Ae,v.colorSpace,v.isVideoTexture);$e(W,v);let pe,tt=v.mipmaps,He=v.isVideoTexture!==!0,_t=ve.__version===void 0||Z===!0,A=z.dataReady,ce=N(v,J);if(v.isDepthTexture)Ne=E(v.format===Ro,v.type),_t&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ne,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ne,J.width,J.height,0,fe,Ae,null));else if(v.isDataTexture)if(tt.length>0){He&&_t&&t.texStorage2D(n.TEXTURE_2D,ce,Ne,tt[0].width,tt[0].height);for(let V=0,q=tt.length;V<q;V++)pe=tt[V],He?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,V,Ne,pe.width,pe.height,0,fe,Ae,pe.data);v.generateMipmaps=!1}else He?(_t&&t.texStorage2D(n.TEXTURE_2D,ce,Ne,J.width,J.height),A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,fe,Ae,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,J.width,J.height,0,fe,Ae,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){He&&_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Ne,tt[0].width,tt[0].height,J.depth);for(let V=0,q=tt.length;V<q;V++)if(pe=tt[V],v.format!==qn)if(fe!==null)if(He){if(A)if(v.layerUpdates.size>0){let ue=Fg(pe.width,pe.height,v.format,v.type);for(let le of v.layerUpdates){let Be=pe.data.subarray(le*ue/pe.data.BYTES_PER_ELEMENT,(le+1)*ue/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,le,pe.width,pe.height,1,fe,Be)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,J.depth,fe,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Ne,pe.width,pe.height,J.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,J.depth,fe,Ae,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Ne,pe.width,pe.height,J.depth,0,fe,Ae,pe.data)}else{He&&_t&&t.texStorage2D(n.TEXTURE_2D,ce,Ne,tt[0].width,tt[0].height);for(let V=0,q=tt.length;V<q;V++)pe=tt[V],v.format!==qn?fe!==null?He?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Ne,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,V,Ne,pe.width,pe.height,0,fe,Ae,pe.data)}else if(v.isDataArrayTexture)if(He){if(_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Ne,J.width,J.height,J.depth),A)if(v.layerUpdates.size>0){let V=Fg(J.width,J.height,v.format,v.type);for(let q of v.layerUpdates){let ue=J.data.subarray(q*V/J.data.BYTES_PER_ELEMENT,(q+1)*V/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,J.width,J.height,1,fe,Ae,ue)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,fe,Ae,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,J.width,J.height,J.depth,0,fe,Ae,J.data);else if(v.isData3DTexture)He?(_t&&t.texStorage3D(n.TEXTURE_3D,ce,Ne,J.width,J.height,J.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,fe,Ae,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,J.width,J.height,J.depth,0,fe,Ae,J.data);else if(v.isFramebufferTexture){if(_t)if(He)t.texStorage2D(n.TEXTURE_2D,ce,Ne,J.width,J.height);else{let V=J.width,q=J.height;for(let ue=0;ue<ce;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ne,V,q,0,fe,Ae,null),V>>=1,q>>=1}}else if(tt.length>0){if(He&&_t){let V=_e(tt[0]);t.texStorage2D(n.TEXTURE_2D,ce,Ne,V.width,V.height)}for(let V=0,q=tt.length;V<q;V++)pe=tt[V],He?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,fe,Ae,pe):t.texImage2D(n.TEXTURE_2D,V,Ne,fe,Ae,pe);v.generateMipmaps=!1}else if(He){if(_t){let V=_e(J);t.texStorage2D(n.TEXTURE_2D,ce,Ne,V.width,V.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ae,J)}else t.texImage2D(n.TEXTURE_2D,0,Ne,fe,Ae,J);m(v)&&p(W),ve.__version=z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ee(M,v,L){if(v.image.length!==6)return;let W=vt(M,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+L);let z=i.get(Z);if(Z.version!==z.__version||W===!0){t.activeTexture(n.TEXTURE0+L);let ve=ot.getPrimaries(ot.workingColorSpace),ae=v.colorSpace===Yi?null:ot.getPrimaries(v.colorSpace),Ce=v.colorSpace===Yi||ve===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let De=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let q=0;q<6;q++)!De&&!J?fe[q]=y(v.image[q],!0,r.maxCubemapSize):fe[q]=J?v.image[q].image:v.image[q],fe[q]=bt(v,fe[q]);let Ae=fe[0],Ne=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),tt=S(v.internalFormat,Ne,pe,v.colorSpace),He=v.isVideoTexture!==!0,_t=z.__version===void 0||W===!0,A=Z.dataReady,ce=N(v,Ae);$e(n.TEXTURE_CUBE_MAP,v);let V;if(De){He&&_t&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,tt,Ae.width,Ae.height);for(let q=0;q<6;q++){V=fe[q].mipmaps;for(let ue=0;ue<V.length;ue++){let le=V[ue];v.format!==qn?Ne!==null?He?A&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,le.width,le.height,Ne,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,tt,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,le.width,le.height,Ne,pe,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,tt,le.width,le.height,0,Ne,pe,le.data)}}}else{if(V=v.mipmaps,He&&_t){V.length>0&&ce++;let q=_e(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,tt,q.width,q.height)}for(let q=0;q<6;q++)if(J){He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,fe[q].width,fe[q].height,Ne,pe,fe[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,tt,fe[q].width,fe[q].height,0,Ne,pe,fe[q].data);for(let ue=0;ue<V.length;ue++){let Be=V[ue].image[q].image;He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,Be.width,Be.height,Ne,pe,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,tt,Be.width,Be.height,0,Ne,pe,Be.data)}}else{He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ne,pe,fe[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,tt,Ne,pe,fe[q]);for(let ue=0;ue<V.length;ue++){let le=V[ue];He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,Ne,pe,le.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,tt,Ne,pe,le.image[q])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),z.__version=Z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ge(M,v,L,W,Z,z){let ve=s.convert(L.format,L.colorSpace),ae=s.convert(L.type),Ce=S(L.internalFormat,ve,ae,L.colorSpace),De=i.get(v),J=i.get(L);if(J.__renderTarget=v,!De.__hasExternalTextures){let fe=Math.max(1,v.width>>z),Ae=Math.max(1,v.height>>z);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,z,Ce,fe,Ae,v.depth,0,ve,ae,null):t.texImage2D(Z,z,Ce,fe,Ae,0,ve,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),et(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,J.__webglTexture,0,rt(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,J.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(M,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){let W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,z=E(v.stencilBuffer,Z),ve=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=rt(v);et(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,z,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,M)}else{let W=v.textures;for(let Z=0;Z<W.length;Z++){let z=W[Z],ve=s.convert(z.format,z.colorSpace),ae=s.convert(z.type),Ce=S(z.internalFormat,ve,ae,z.colorSpace),De=rt(v);L&&et(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ce,v.width,v.height):et(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Ce,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let Z=W.__webglTexture,z=rt(v);if(v.depthTexture.format===yo)et(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Ro)et(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ct(M){let v=i.get(M),L=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){let W=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let W=M.texture.mipmaps;W&&W.length>0?we(v.__webglFramebuffer[0],M):we(v.__webglFramebuffer,M)}else if(L){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),oe(v.__webglDepthbuffer[W],M,!1);else{let Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}else{let W=M.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),oe(v.__webglDepthbuffer,M,!1);else{let Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(M,v,L){let W=i.get(M);v!==void 0&&ge(W.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ct(M)}function Nt(M){let v=M.texture,L=i.get(M),W=i.get(v);M.addEventListener("dispose",T);let Z=M.textures,z=M.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),z){L.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[ae]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)L.__webglFramebuffer[ae][Ce]=n.createFramebuffer()}else L.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)L.__webglFramebuffer[ae]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ae=0,Ce=Z.length;ae<Ce;ae++){let De=i.get(Z[ae]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&et(M)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){let Ce=Z[ae];L.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ae]);let De=s.convert(Ce.format,Ce.colorSpace),J=s.convert(Ce.type),fe=S(Ce.internalFormat,De,J,Ce.colorSpace,M.isXRRenderTarget===!0),Ae=rt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,fe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,L.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(L.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),$e(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)ge(L.__webglFramebuffer[ae][Ce],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce);else ge(L.__webglFramebuffer[ae],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,Ce=Z.length;ae<Ce;ae++){let De=Z[ae],J=i.get(De);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),$e(n.TEXTURE_2D,De),ge(L.__webglFramebuffer,M,De,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(De)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ae=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,W.__webglTexture),$e(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)ge(L.__webglFramebuffer[Ce],M,v,n.COLOR_ATTACHMENT0,ae,Ce);else ge(L.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,ae,0);m(v)&&p(ae),t.unbindTexture()}M.depthBuffer&&ct(M)}function wt(M){let v=M.textures;for(let L=0,W=v.length;L<W;L++){let Z=v[L];if(m(Z)){let z=w(M),ve=i.get(Z).__webglTexture;t.bindTexture(z,ve),p(z),t.unbindTexture()}}}let Qe=[],C=[];function Rn(M){if(M.samples>0){if(et(M)===!1){let v=M.textures,L=M.width,W=M.height,Z=n.COLOR_BUFFER_BIT,z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(M),ae=v.length>1;if(ae)for(let De=0;De<v.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let Ce=M.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let De=0;De<v.length;De++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[De]);let J=i.get(v[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,L,W,0,0,L,W,Z,n.NEAREST),c===!0&&(Qe.length=0,C.length=0,Qe.push(n.COLOR_ATTACHMENT0+De),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Qe.push(z),C.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let De=0;De<v.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,ve.__webglColorRenderbuffer[De]);let J=i.get(v[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function rt(M){return Math.min(r.maxSamples,M.samples)}function et(M){let v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Me(M){let v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function bt(M,v){let L=M.colorSpace,W=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==as&&L!==Yi&&(ot.getTransfer(L)===mt?(W!==qn||Z!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function _e(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Ie,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=et}function nF(n,e){function t(i,r=Yi){let s,o=ot.getTransfer(r);if(i===di)return n.UNSIGNED_BYTE;if(i===Id)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yg)return n.BYTE;if(i===_g)return n.SHORT;if(i===Do)return n.UNSIGNED_SHORT;if(i===Ad)return n.INT;if(i===Cr)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===Ao)return n.HALF_FLOAT;if(i===Mg)return n.ALPHA;if(i===bg)return n.RGB;if(i===qn)return n.RGBA;if(i===yo)return n.DEPTH_COMPONENT;if(i===Ro)return n.DEPTH_STENCIL;if(i===Eg)return n.RED;if(i===Nd)return n.RED_INTEGER;if(i===Sg)return n.RG;if(i===Pd)return n.RG_INTEGER;if(i===Od)return n.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===vc)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fd||i===Ld||i===kd||i===Ud)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ld)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ud)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bd||i===Vd||i===Hd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bd||i===Vd)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zd||i===Gd||i===jd||i===Wd||i===$d||i===qd||i===Xd||i===Yd||i===Zd||i===Kd||i===Jd||i===Qd||i===eh||i===th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$d)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===th)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yc||i===nh||i===ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yc)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wg||i===rh||i===sh||i===oh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Io?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var iF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rF=`
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

}`,Xg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Tr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ui({vertexShader:iF,fragmentShader:rF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new sc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yg=class extends Mi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,y=new Xg,m=t.getContextAttributes(),p=null,w=null,S=[],E=[],N=new Oe,I=null,T=new Kt;T.viewport=new pt;let F=new Kt;F.viewport=new pt;let b=[T,F],x=new vd,D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=S[j];return ee===void 0&&(ee=new Eo,S[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=S[j];return ee===void 0&&(ee=new Eo,S[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=S[j];return ee===void 0&&(ee=new Eo,S[j]=ee),ee.getHandSpace()};function B(j){let ee=E.indexOf(j.inputSource);if(ee===-1)return;let ge=S[ee];ge!==void 0&&(ge.update(j.inputSource,j.frame,l||o),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let j=0;j<S.length;j++){let ee=E[j];ee!==null&&(E[j]=null,S[j].disconnect(ee))}D=null,G=null,y.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,w=null,vt.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(j){return xs(this,null,function*(){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),I=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,oe=null,we=null;m.depth&&(we=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?Ro:yo,oe=m.stencil?Io:Cr);let ct={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ct),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new bi(f.textureWidth,f.textureHeight,{format:qn,type:di,depthTexture:new rc(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new bi(h.framebufferWidth,h.framebufferHeight,{format:qn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),vt.setContext(r),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(j){for(let ee=0;ee<j.removed.length;ee++){let ge=j.removed[ee],oe=E.indexOf(ge);oe>=0&&(E[oe]=null,S[oe].disconnect(ge))}for(let ee=0;ee<j.added.length;ee++){let ge=j.added[ee],oe=E.indexOf(ge);if(oe===-1){for(let ct=0;ct<S.length;ct++)if(ct>=E.length){E.push(ge),oe=ct;break}else if(E[ct]===null){E[ct]=ge,oe=ct;break}if(oe===-1)break}let we=S[oe];we&&we.connect(ge)}}let $=new P,K=new P;function H(j,ee,ge){$.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ge.matrixWorld);let oe=$.distanceTo(K),we=ee.projectionMatrix.elements,ct=ge.projectionMatrix.elements,Ie=we[14]/(we[10]-1),Nt=we[14]/(we[10]+1),wt=(we[9]+1)/we[5],Qe=(we[9]-1)/we[5],C=(we[8]-1)/we[0],Rn=(ct[8]+1)/ct[0],rt=Ie*C,et=Ie*Rn,Me=oe/(-C+Rn),bt=Me*-C;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(bt),j.translateZ(Me),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let _e=Ie+Me,M=Nt+Me,v=rt-bt,L=et+(oe-bt),W=wt*Nt/M*_e,Z=Qe*Nt/M*_e;j.projectionMatrix.makePerspective(v,L,W,Z,_e,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function se(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ee=j.near,ge=j.far;y.texture!==null&&(y.depthNear>0&&(ee=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),x.near=F.near=T.near=ee,x.far=F.far=T.far=ge,(D!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,G=x.far),T.layers.mask=j.layers.mask|2,F.layers.mask=j.layers.mask|4,x.layers.mask=T.layers.mask|F.layers.mask;let oe=j.parent,we=x.cameras;se(x,oe);for(let ct=0;ct<we.length;ct++)se(we[ct],oe);we.length===2?H(x,T,F):x.projectionMatrix.copy(T.projectionMatrix),he(j,x,oe)};function he(j,ee,ge){ge===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=_o*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let xe=null;function $e(j,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){let ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let oe=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Ie=0;Ie<ge.length;Ie++){let Nt=ge[Ie],wt=null;if(h!==null)wt=h.getViewport(Nt);else{let C=d.getViewSubImage(f,Nt);wt=C.viewport,Ie===0&&(e.setRenderTargetTextures(w,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(w))}let Qe=b[Ie];Qe===void 0&&(Qe=new Kt,Qe.layers.enable(Ie),Qe.viewport=new pt,b[Ie]=Qe),Qe.matrix.fromArray(Nt.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Nt.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(wt.x,wt.y,wt.width,wt.height),Ie===0&&(x.matrix.copy(Qe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(Qe)}let we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let Ie=d.getDepthInformation(ge[0]);Ie&&Ie.isValid&&Ie.texture&&y.init(e,Ie,r.renderState)}}for(let ge=0;ge<S.length;ge++){let oe=E[ge],we=S[ge];oe!==null&&we!==void 0&&we.update(oe,ee,l||o)}xe&&xe(j,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let vt=new tE;vt.setAnimationLoop($e),this.setAnimationLoop=function(j){xe=j},this.dispose=function(){}}},fs=new vr,sF=new Et;function oF(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ng(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,S,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),S=w.envMap,E=w.envMapRotation;S&&(m.envMap.value=S,fs.copy(E),fs.x*=-1,fs.y*=-1,fs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(sF.makeRotationFromEuler(fs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aF(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){let E=S.program;i.uniformBlockBinding(w,E)}function l(w,S){let E=r[w.id];E===void 0&&(g(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",m));let N=S.program;i.updateUBOMapping(w,N);let I=e.render.frame;s[w.id]!==I&&(f(w),s[w.id]=I)}function u(w){let S=d();w.__bindingPointIndex=S;let E=n.createBuffer(),N=w.__size,I=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,N,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let S=r[w.id],E=w.uniforms,N=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let I=0,T=E.length;I<T;I++){let F=Array.isArray(E[I])?E[I]:[E[I]];for(let b=0,x=F.length;b<x;b++){let D=F[b];if(h(D,I,b,N)===!0){let G=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],X=0;for(let Y=0;Y<B.length;Y++){let $=B[Y],K=y($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,G+X,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,S,E,N){let I=w.value,T=S+"_"+E;if(N[T]===void 0)return typeof I=="number"||typeof I=="boolean"?N[T]=I:N[T]=I.clone(),!0;{let F=N[T];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return N[T]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function g(w){let S=w.uniforms,E=0,N=16;for(let T=0,F=S.length;T<F;T++){let b=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,D=b.length;x<D;x++){let G=b[x],B=Array.isArray(G.value)?G.value:[G.value];for(let X=0,Y=B.length;X<Y;X++){let $=B[X],K=y($),H=E%N,se=H%K.boundary,he=H+se;E+=se,he!==0&&N-he<K.storage&&(E+=N-he),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=K.storage}}}let I=E%N;return I>0&&(E+=N-I),w.__size=E,w.__cache={},this}function y(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){let S=w.target;S.removeEventListener("dispose",m);let E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var dh=class{constructor(e={}){let{canvas:t=Cb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,N=!1;this._outputColorSpace=Cn;let I=0,T=0,F=null,b=-1,x=null,D=new pt,G=new pt,B=null,X=new Ye(0),Y=0,$=t.width,K=t.height,H=1,se=null,he=null,xe=new pt(0,0,$,K),$e=new pt(0,0,$,K),vt=!1,j=new So,ee=!1,ge=!1,oe=new Et,we=new Et,ct=new P,Ie=new pt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Qe(){return F===null?H:1}let C=i;function Rn(_,R){return t.getContext(_,R)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yd}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",le,!1),C===null){let R="webgl2";if(C=Rn(R,_),C===null)throw Rn(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let rt,et,Me,bt,_e,M,v,L,W,Z,z,ve,ae,Ce,De,J,fe,Ae,Ne,pe,tt,He,_t,A;function ce(){rt=new wP(C),rt.init(),He=new nF(C,rt),et=new yP(C,rt,e,He),Me=new eF(C,rt),et.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),bt=new DP(C),_e=new HO,M=new tF(C,rt,Me,_e,et,He,bt),v=new xP(E),L=new SP(E),W=new OR(C),_t=new gP(C,W),Z=new CP(C,W,bt,_t),z=new IP(C,Z,W,bt),Ne=new AP(C,et,M),J=new _P(_e),ve=new VO(E,v,L,rt,et,_t,J),ae=new oF(E,_e),Ce=new GO,De=new YO(rt),Ae=new mP(E,v,L,Me,z,h,c),fe=new JO(E,z,et),A=new aF(C,bt,et,Me),pe=new vP(C,rt,bt),tt=new TP(C,rt,bt),bt.programs=ve.programs,E.capabilities=et,E.extensions=rt,E.properties=_e,E.renderLists=Ce,E.shadowMap=fe,E.state=Me,E.info=bt}ce();let V=new Yg(E,C);this.xr=V,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let _=rt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=rt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize($,K,!1))},this.getSize=function(_){return _.set($,K)},this.setSize=function(_,R,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=_,K=R,t.width=Math.floor(_*H),t.height=Math.floor(R*H),k===!0&&(t.style.width=_+"px",t.style.height=R+"px"),this.setViewport(0,0,_,R)},this.getDrawingBufferSize=function(_){return _.set($*H,K*H).floor()},this.setDrawingBufferSize=function(_,R,k){$=_,K=R,H=k,t.width=Math.floor(_*k),t.height=Math.floor(R*k),this.setViewport(0,0,_,R)},this.getCurrentViewport=function(_){return _.copy(D)},this.getViewport=function(_){return _.copy(xe)},this.setViewport=function(_,R,k,U){_.isVector4?xe.set(_.x,_.y,_.z,_.w):xe.set(_,R,k,U),Me.viewport(D.copy(xe).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy($e)},this.setScissor=function(_,R,k,U){_.isVector4?$e.set(_.x,_.y,_.z,_.w):$e.set(_,R,k,U),Me.scissor(G.copy($e).multiplyScalar(H).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(_){Me.setScissorTest(vt=_)},this.setOpaqueSort=function(_){se=_},this.setTransparentSort=function(_){he=_},this.getClearColor=function(_){return _.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(_=!0,R=!0,k=!0){let U=0;if(_){let O=!1;if(F!==null){let Q=F.texture.format;O=Q===Od||Q===Pd||Q===Nd}if(O){let Q=F.texture.type,re=Q===di||Q===Cr||Q===Do||Q===Io||Q===Id||Q===Rd,de=Ae.getClearColor(),me=Ae.getClearAlpha(),Pe=de.r,Re=de.g,Ee=de.b;re?(g[0]=Pe,g[1]=Re,g[2]=Ee,g[3]=me,C.clearBufferuiv(C.COLOR,0,g)):(y[0]=Pe,y[1]=Re,y[2]=Ee,y[3]=me,C.clearBufferiv(C.COLOR,0,y))}else U|=C.COLOR_BUFFER_BIT}R&&(U|=C.DEPTH_BUFFER_BIT),k&&(U|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ae.dispose(),Ce.dispose(),De.dispose(),_e.dispose(),v.dispose(),L.dispose(),z.dispose(),_t.dispose(),A.dispose(),ve.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ov),V.removeEventListener("sessionend",Fv),Nr.stop()};function q(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let _=bt.autoReset,R=fe.enabled,k=fe.autoUpdate,U=fe.needsUpdate,O=fe.type;ce(),bt.autoReset=_,fe.enabled=R,fe.autoUpdate=k,fe.needsUpdate=U,fe.type=O}function le(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Be(_){let R=_.target;R.removeEventListener("dispose",Be),Ct(R)}function Ct(_){Qt(_),_e.remove(_)}function Qt(_){let R=_e.get(_).programs;R!==void 0&&(R.forEach(function(k){ve.releaseProgram(k)}),_.isShaderMaterial&&ve.releaseShaderCache(_))}this.renderBufferDirect=function(_,R,k,U,O,Q){R===null&&(R=Nt);let re=O.isMesh&&O.matrixWorld.determinant()<0,de=QE(_,R,k,U,O);Me.setMaterial(U,re);let me=k.index,Pe=1;if(U.wireframe===!0){if(me=Z.getWireframeAttribute(k),me===void 0)return;Pe=2}let Re=k.drawRange,Ee=k.attributes.position,st=Re.start*Pe,lt=(Re.start+Re.count)*Pe;Q!==null&&(st=Math.max(st,Q.start*Pe),lt=Math.min(lt,(Q.start+Q.count)*Pe)),me!==null?(st=Math.max(st,0),lt=Math.min(lt,me.count)):Ee!=null&&(st=Math.max(st,0),lt=Math.min(lt,Ee.count));let Pt=lt-st;if(Pt<0||Pt===1/0)return;_t.setup(O,U,de,k,me);let Tt,at=pe;if(me!==null&&(Tt=W.get(me),at=tt,at.setIndex(Tt)),O.isMesh)U.wireframe===!0?(Me.setLineWidth(U.wireframeLinewidth*Qe()),at.setMode(C.LINES)):at.setMode(C.TRIANGLES);else if(O.isLine){let Se=U.linewidth;Se===void 0&&(Se=1),Me.setLineWidth(Se*Qe()),O.isLineSegments?at.setMode(C.LINES):O.isLineLoop?at.setMode(C.LINE_LOOP):at.setMode(C.LINE_STRIP)}else O.isPoints?at.setMode(C.POINTS):O.isSprite&&at.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)_c("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))at.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Se=O._multiDrawStarts,Xt=O._multiDrawCounts,ut=O._multiDrawCount,Zn=me?W.get(me).bytesPerElement:1,_s=_e.get(U).currentProgram.getUniforms();for(let xn=0;xn<ut;xn++)_s.setValue(C,"_gl_DrawID",xn),at.render(Se[xn]/Zn,Xt[xn])}else if(O.isInstancedMesh)at.renderInstances(st,Pt,O.count);else if(k.isInstancedBufferGeometry){let Se=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Xt=Math.min(k.instanceCount,Se);at.renderInstances(st,Pt,Xt)}else at.render(st,Pt)};function ft(_,R,k){_.transparent===!0&&_.side===Si&&_.forceSinglePass===!1?(_.side=un,_.needsUpdate=!0,kc(_,R,k),_.side=$i,_.needsUpdate=!0,kc(_,R,k),_.side=Si):kc(_,R,k)}this.compile=function(_,R,k=null){k===null&&(k=_),p=De.get(k),p.init(R),S.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),_!==k&&_.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let U=new Set;return _.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let Q=O.material;if(Q)if(Array.isArray(Q))for(let re=0;re<Q.length;re++){let de=Q[re];ft(de,k,O),U.add(de)}else ft(Q,k,O),U.add(Q)}),p=S.pop(),U},this.compileAsync=function(_,R,k=null){let U=this.compile(_,R,k);return new Promise(O=>{function Q(){if(U.forEach(function(re){_e.get(re).currentProgram.isReady()&&U.delete(re)}),U.size===0){O(_);return}setTimeout(Q,10)}rt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Yn=null;function Di(_){Yn&&Yn(_)}function Ov(){Nr.stop()}function Fv(){Nr.start()}let Nr=new tE;Nr.setAnimationLoop(Di),typeof self<"u"&&Nr.setContext(self),this.setAnimationLoop=function(_){Yn=_,V.setAnimationLoop(_),_===null?Nr.stop():Nr.start()},V.addEventListener("sessionstart",Ov),V.addEventListener("sessionend",Fv),this.render=function(_,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(R),R=V.getCamera()),_.isScene===!0&&_.onBeforeRender(E,_,R,F),p=De.get(_,S.length),p.init(R),S.push(p),we.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),j.setFromProjectionMatrix(we),ge=this.localClippingEnabled,ee=J.init(this.clippingPlanes,ge),m=Ce.get(_,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){let Q=E.xr.getDepthSensingMesh();Q!==null&&Uh(Q,R,-1/0,E.sortObjects)}Uh(_,R,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(se,he),wt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,wt&&Ae.addToRenderList(m,_),this.info.render.frame++,ee===!0&&J.beginShadows();let k=p.state.shadowsArray;fe.render(k,_,R),ee===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let U=m.opaque,O=m.transmissive;if(p.setupLights(),R.isArrayCamera){let Q=R.cameras;if(O.length>0)for(let re=0,de=Q.length;re<de;re++){let me=Q[re];kv(U,O,_,me)}wt&&Ae.render(_);for(let re=0,de=Q.length;re<de;re++){let me=Q[re];Lv(m,_,me,me.viewport)}}else O.length>0&&kv(U,O,_,R),wt&&Ae.render(_),Lv(m,_,R);F!==null&&T===0&&(M.updateMultisampleRenderTarget(F),M.updateRenderTargetMipmap(F)),_.isScene===!0&&_.onAfterRender(E,_,R),_t.resetDefaultState(),b=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],ee===!0&&J.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Uh(_,R,k,U){if(_.visible===!1)return;if(_.layers.test(R.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(R);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||j.intersectsSprite(_)){U&&Ie.setFromMatrixPosition(_.matrixWorld).applyMatrix4(we);let re=z.update(_),de=_.material;de.visible&&m.push(_,re,de,k,Ie.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||j.intersectsObject(_))){let re=z.update(_),de=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ie.copy(_.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Ie.copy(re.boundingSphere.center)),Ie.applyMatrix4(_.matrixWorld).applyMatrix4(we)),Array.isArray(de)){let me=re.groups;for(let Pe=0,Re=me.length;Pe<Re;Pe++){let Ee=me[Pe],st=de[Ee.materialIndex];st&&st.visible&&m.push(_,re,st,k,Ie.z,Ee)}}else de.visible&&m.push(_,re,de,k,Ie.z,null)}}let Q=_.children;for(let re=0,de=Q.length;re<de;re++)Uh(Q[re],R,k,U)}function Lv(_,R,k,U){let O=_.opaque,Q=_.transmissive,re=_.transparent;p.setupLightsView(k),ee===!0&&J.setGlobalState(E.clippingPlanes,k),U&&Me.viewport(D.copy(U)),O.length>0&&Lc(O,R,k),Q.length>0&&Lc(Q,R,k),re.length>0&&Lc(re,R,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function kv(_,R,k,U){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[U.id]===void 0&&(p.state.transmissionRenderTarget[U.id]=new bi(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Ao:di,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let Q=p.state.transmissionRenderTarget[U.id],re=U.viewport||D;Q.setSize(re.z*E.transmissionResolutionScale,re.w*E.transmissionResolutionScale);let de=E.getRenderTarget();E.setRenderTarget(Q),E.getClearColor(X),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),wt&&Ae.render(k);let me=E.toneMapping;E.toneMapping=Xi;let Pe=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),p.setupLightsView(U),ee===!0&&J.setGlobalState(E.clippingPlanes,U),Lc(_,k,U),M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ee=0,st=R.length;Ee<st;Ee++){let lt=R[Ee],Pt=lt.object,Tt=lt.geometry,at=lt.material,Se=lt.group;if(at.side===Si&&Pt.layers.test(U.layers)){let Xt=at.side;at.side=un,at.needsUpdate=!0,Uv(Pt,k,U,Tt,at,Se),at.side=Xt,at.needsUpdate=!0,Re=!0}}Re===!0&&(M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q))}E.setRenderTarget(de),E.setClearColor(X,Y),Pe!==void 0&&(U.viewport=Pe),E.toneMapping=me}function Lc(_,R,k){let U=R.isScene===!0?R.overrideMaterial:null;for(let O=0,Q=_.length;O<Q;O++){let re=_[O],de=re.object,me=re.geometry,Pe=re.group,Re=re.material;Re.allowOverride===!0&&U!==null&&(Re=U),de.layers.test(k.layers)&&Uv(de,R,k,me,Re,Pe)}}function Uv(_,R,k,U,O,Q){_.onBeforeRender(E,R,k,U,O,Q),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),O.onBeforeRender(E,R,k,U,_,Q),O.transparent===!0&&O.side===Si&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,E.renderBufferDirect(k,R,U,O,_,Q),O.side=$i,O.needsUpdate=!0,E.renderBufferDirect(k,R,U,O,_,Q),O.side=Si):E.renderBufferDirect(k,R,U,O,_,Q),_.onAfterRender(E,R,k,U,O,Q)}function kc(_,R,k){R.isScene!==!0&&(R=Nt);let U=_e.get(_),O=p.state.lights,Q=p.state.shadowsArray,re=O.state.version,de=ve.getParameters(_,O.state,Q,R,k),me=ve.getProgramCacheKey(de),Pe=U.programs;U.environment=_.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(_.isMeshStandardMaterial?L:v).get(_.envMap||U.environment),U.envMapRotation=U.environment!==null&&_.envMap===null?R.environmentRotation:_.envMapRotation,Pe===void 0&&(_.addEventListener("dispose",Be),Pe=new Map,U.programs=Pe);let Re=Pe.get(me);if(Re!==void 0){if(U.currentProgram===Re&&U.lightsStateVersion===re)return Vv(_,de),Re}else de.uniforms=ve.getUniforms(_),_.onBeforeCompile(de,E),Re=ve.acquireProgram(de,me),Pe.set(me,Re),U.uniforms=de.uniforms;let Ee=U.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ee.clippingPlanes=J.uniform),Vv(_,de),U.needsLights=tS(_),U.lightsStateVersion=re,U.needsLights&&(Ee.ambientLightColor.value=O.state.ambient,Ee.lightProbe.value=O.state.probe,Ee.directionalLights.value=O.state.directional,Ee.directionalLightShadows.value=O.state.directionalShadow,Ee.spotLights.value=O.state.spot,Ee.spotLightShadows.value=O.state.spotShadow,Ee.rectAreaLights.value=O.state.rectArea,Ee.ltc_1.value=O.state.rectAreaLTC1,Ee.ltc_2.value=O.state.rectAreaLTC2,Ee.pointLights.value=O.state.point,Ee.pointLightShadows.value=O.state.pointShadow,Ee.hemisphereLights.value=O.state.hemi,Ee.directionalShadowMap.value=O.state.directionalShadowMap,Ee.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ee.spotShadowMap.value=O.state.spotShadowMap,Ee.spotLightMatrix.value=O.state.spotLightMatrix,Ee.spotLightMap.value=O.state.spotLightMap,Ee.pointShadowMap.value=O.state.pointShadowMap,Ee.pointShadowMatrix.value=O.state.pointShadowMatrix),U.currentProgram=Re,U.uniformsList=null,Re}function Bv(_){if(_.uniformsList===null){let R=_.currentProgram.getUniforms();_.uniformsList=Fo.seqWithValue(R.seq,_.uniforms)}return _.uniformsList}function Vv(_,R){let k=_e.get(_);k.outputColorSpace=R.outputColorSpace,k.batching=R.batching,k.batchingColor=R.batchingColor,k.instancing=R.instancing,k.instancingColor=R.instancingColor,k.instancingMorph=R.instancingMorph,k.skinning=R.skinning,k.morphTargets=R.morphTargets,k.morphNormals=R.morphNormals,k.morphColors=R.morphColors,k.morphTargetsCount=R.morphTargetsCount,k.numClippingPlanes=R.numClippingPlanes,k.numIntersection=R.numClipIntersection,k.vertexAlphas=R.vertexAlphas,k.vertexTangents=R.vertexTangents,k.toneMapping=R.toneMapping}function QE(_,R,k,U,O){R.isScene!==!0&&(R=Nt),M.resetTextureUnits();let Q=R.fog,re=U.isMeshStandardMaterial?R.environment:null,de=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:as,me=(U.isMeshStandardMaterial?L:v).get(U.envMap||re),Pe=U.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Re=!!k.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ee=!!k.morphAttributes.position,st=!!k.morphAttributes.normal,lt=!!k.morphAttributes.color,Pt=Xi;U.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Pt=E.toneMapping);let Tt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,at=Tt!==void 0?Tt.length:0,Se=_e.get(U),Xt=p.state.lights;if(ee===!0&&(ge===!0||_!==x)){let sn=_===x&&U.id===b;J.setState(U,_,sn)}let ut=!1;U.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Xt.state.version||Se.outputColorSpace!==de||O.isBatchedMesh&&Se.batching===!1||!O.isBatchedMesh&&Se.batching===!0||O.isBatchedMesh&&Se.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Se.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Se.instancing===!1||!O.isInstancedMesh&&Se.instancing===!0||O.isSkinnedMesh&&Se.skinning===!1||!O.isSkinnedMesh&&Se.skinning===!0||O.isInstancedMesh&&Se.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Se.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Se.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Se.instancingMorph===!1&&O.morphTexture!==null||Se.envMap!==me||U.fog===!0&&Se.fog!==Q||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==J.numPlanes||Se.numIntersection!==J.numIntersection)||Se.vertexAlphas!==Pe||Se.vertexTangents!==Re||Se.morphTargets!==Ee||Se.morphNormals!==st||Se.morphColors!==lt||Se.toneMapping!==Pt||Se.morphTargetsCount!==at)&&(ut=!0):(ut=!0,Se.__version=U.version);let Zn=Se.currentProgram;ut===!0&&(Zn=kc(U,R,O));let _s=!1,xn=!1,Zo=!1,St=Zn.getUniforms(),Nn=Se.uniforms;if(Me.useProgram(Zn.program)&&(_s=!0,xn=!0,Zo=!0),U.id!==b&&(b=U.id,xn=!0),_s||x!==_){Me.buffers.depth.getReversed()?(oe.copy(_.projectionMatrix),Db(oe),Ab(oe),St.setValue(C,"projectionMatrix",oe)):St.setValue(C,"projectionMatrix",_.projectionMatrix),St.setValue(C,"viewMatrix",_.matrixWorldInverse);let dn=St.map.cameraPosition;dn!==void 0&&dn.setValue(C,ct.setFromMatrixPosition(_.matrixWorld)),et.logarithmicDepthBuffer&&St.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&St.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,xn=!0,Zo=!0)}if(O.isSkinnedMesh){St.setOptional(C,O,"bindMatrix"),St.setOptional(C,O,"bindMatrixInverse");let sn=O.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),St.setValue(C,"boneTexture",sn.boneTexture,M))}O.isBatchedMesh&&(St.setOptional(C,O,"batchingTexture"),St.setValue(C,"batchingTexture",O._matricesTexture,M),St.setOptional(C,O,"batchingIdTexture"),St.setValue(C,"batchingIdTexture",O._indirectTexture,M),St.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&St.setValue(C,"batchingColorTexture",O._colorsTexture,M));let Pn=k.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ne.update(O,k,Zn),(xn||Se.receiveShadow!==O.receiveShadow)&&(Se.receiveShadow=O.receiveShadow,St.setValue(C,"receiveShadow",O.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Nn.envMap.value=me,Nn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&R.environment!==null&&(Nn.envMapIntensity.value=R.environmentIntensity),xn&&(St.setValue(C,"toneMappingExposure",E.toneMappingExposure),Se.needsLights&&eS(Nn,Zo),Q&&U.fog===!0&&ae.refreshFogUniforms(Nn,Q),ae.refreshMaterialUniforms(Nn,U,H,K,p.state.transmissionRenderTarget[_.id]),Fo.upload(C,Bv(Se),Nn,M)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Fo.upload(C,Bv(Se),Nn,M),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&St.setValue(C,"center",O.center),St.setValue(C,"modelViewMatrix",O.modelViewMatrix),St.setValue(C,"normalMatrix",O.normalMatrix),St.setValue(C,"modelMatrix",O.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let sn=U.uniformsGroups;for(let dn=0,Bh=sn.length;dn<Bh;dn++){let Pr=sn[dn];A.update(Pr,Zn),A.bind(Pr,Zn)}}return Zn}function eS(_,R){_.ambientLightColor.needsUpdate=R,_.lightProbe.needsUpdate=R,_.directionalLights.needsUpdate=R,_.directionalLightShadows.needsUpdate=R,_.pointLights.needsUpdate=R,_.pointLightShadows.needsUpdate=R,_.spotLights.needsUpdate=R,_.spotLightShadows.needsUpdate=R,_.rectAreaLights.needsUpdate=R,_.hemisphereLights.needsUpdate=R}function tS(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(_,R,k){let U=_e.get(_);U.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),_e.get(_.texture).__webglTexture=R,_e.get(_.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:k,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,R){let k=_e.get(_);k.__webglFramebuffer=R,k.__useDefaultFramebuffer=R===void 0};let nS=C.createFramebuffer();this.setRenderTarget=function(_,R=0,k=0){F=_,I=R,T=k;let U=!0,O=null,Q=!1,re=!1;if(_){let me=_e.get(_);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(C.FRAMEBUFFER,null),U=!1;else if(me.__webglFramebuffer===void 0)M.setupRenderTarget(_);else if(me.__hasExternalTextures)M.rebindTextures(_,_e.get(_.texture).__webglTexture,_e.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ee=_.depthTexture;if(me.__boundDepthTexture!==Ee){if(Ee!==null&&_e.has(Ee)&&(_.width!==Ee.image.width||_.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(_)}}let Pe=_.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(re=!0);let Re=_e.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Re[R])?O=Re[R][k]:O=Re[R],Q=!0):_.samples>0&&M.useMultisampledRTT(_)===!1?O=_e.get(_).__webglMultisampledFramebuffer:Array.isArray(Re)?O=Re[k]:O=Re,D.copy(_.viewport),G.copy(_.scissor),B=_.scissorTest}else D.copy(xe).multiplyScalar(H).floor(),G.copy($e).multiplyScalar(H).floor(),B=vt;if(k!==0&&(O=nS),Me.bindFramebuffer(C.FRAMEBUFFER,O)&&U&&Me.drawBuffers(_,O),Me.viewport(D),Me.scissor(G),Me.setScissorTest(B),Q){let me=_e.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+R,me.__webglTexture,k)}else if(re){let me=_e.get(_.texture),Pe=R;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.__webglTexture,k,Pe)}else if(_!==null&&k!==0){let me=_e.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,me.__webglTexture,k)}b=-1},this.readRenderTargetPixels=function(_,R,k,U,O,Q,re){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&re!==void 0&&(de=de[re]),de){Me.bindFramebuffer(C.FRAMEBUFFER,de);try{let me=_.texture,Pe=me.format,Re=me.type;if(!et.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=_.width-U&&k>=0&&k<=_.height-O&&C.readPixels(R,k,U,O,He.convert(Pe),He.convert(Re),Q)}finally{let me=F!==null?_e.get(F).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=function(_,R,k,U,O,Q,re){return xs(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&re!==void 0&&(de=de[re]),de)if(R>=0&&R<=_.width-U&&k>=0&&k<=_.height-O){Me.bindFramebuffer(C.FRAMEBUFFER,de);let me=_.texture,Pe=me.format,Re=me.type;if(!et.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ee),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),C.readPixels(R,k,U,O,He.convert(Pe),He.convert(Re),0);let st=F!==null?_e.get(F).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,st);let lt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),yield Tb(C,lt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ee),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(Ee),C.deleteSync(lt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(_,R=null,k=0){let U=Math.pow(2,-k),O=Math.floor(_.image.width*U),Q=Math.floor(_.image.height*U),re=R!==null?R.x:0,de=R!==null?R.y:0;M.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,re,de,O,Q),Me.unbindTexture()};let iS=C.createFramebuffer(),rS=C.createFramebuffer();this.copyTextureToTexture=function(_,R,k=null,U=null,O=0,Q=null){Q===null&&(O!==0?(_c("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=O,O=0):Q=0);let re,de,me,Pe,Re,Ee,st,lt,Pt,Tt=_.isCompressedTexture?_.mipmaps[Q]:_.image;if(k!==null)re=k.max.x-k.min.x,de=k.max.y-k.min.y,me=k.isBox3?k.max.z-k.min.z:1,Pe=k.min.x,Re=k.min.y,Ee=k.isBox3?k.min.z:0;else{let Pn=Math.pow(2,-O);re=Math.floor(Tt.width*Pn),de=Math.floor(Tt.height*Pn),_.isDataArrayTexture?me=Tt.depth:_.isData3DTexture?me=Math.floor(Tt.depth*Pn):me=1,Pe=0,Re=0,Ee=0}U!==null?(st=U.x,lt=U.y,Pt=U.z):(st=0,lt=0,Pt=0);let at=He.convert(R.format),Se=He.convert(R.type),Xt;R.isData3DTexture?(M.setTexture3D(R,0),Xt=C.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(M.setTexture2DArray(R,0),Xt=C.TEXTURE_2D_ARRAY):(M.setTexture2D(R,0),Xt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,R.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,R.unpackAlignment);let ut=C.getParameter(C.UNPACK_ROW_LENGTH),Zn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),_s=C.getParameter(C.UNPACK_SKIP_PIXELS),xn=C.getParameter(C.UNPACK_SKIP_ROWS),Zo=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Tt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Tt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Re),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ee);let St=_.isDataArrayTexture||_.isData3DTexture,Nn=R.isDataArrayTexture||R.isData3DTexture;if(_.isDepthTexture){let Pn=_e.get(_),sn=_e.get(R),dn=_e.get(Pn.__renderTarget),Bh=_e.get(sn.__renderTarget);Me.bindFramebuffer(C.READ_FRAMEBUFFER,dn.__webglFramebuffer),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,Bh.__webglFramebuffer);for(let Pr=0;Pr<me;Pr++)St&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(_).__webglTexture,O,Ee+Pr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(R).__webglTexture,Q,Pt+Pr)),C.blitFramebuffer(Pe,Re,re,de,st,lt,re,de,C.DEPTH_BUFFER_BIT,C.NEAREST);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||_.isRenderTargetTexture||_e.has(_)){let Pn=_e.get(_),sn=_e.get(R);Me.bindFramebuffer(C.READ_FRAMEBUFFER,iS),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,rS);for(let dn=0;dn<me;dn++)St?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pn.__webglTexture,O,Ee+dn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pn.__webglTexture,O),Nn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,sn.__webglTexture,Q,Pt+dn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,sn.__webglTexture,Q),O!==0?C.blitFramebuffer(Pe,Re,re,de,st,lt,re,de,C.COLOR_BUFFER_BIT,C.NEAREST):Nn?C.copyTexSubImage3D(Xt,Q,st,lt,Pt+dn,Pe,Re,re,de):C.copyTexSubImage2D(Xt,Q,st,lt,Pe,Re,re,de);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Nn?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(Xt,Q,st,lt,Pt,re,de,me,at,Se,Tt.data):R.isCompressedArrayTexture?C.compressedTexSubImage3D(Xt,Q,st,lt,Pt,re,de,me,at,Tt.data):C.texSubImage3D(Xt,Q,st,lt,Pt,re,de,me,at,Se,Tt):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,st,lt,re,de,at,Se,Tt.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,st,lt,Tt.width,Tt.height,at,Tt.data):C.texSubImage2D(C.TEXTURE_2D,Q,st,lt,re,de,at,Se,Tt);C.pixelStorei(C.UNPACK_ROW_LENGTH,ut),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Zn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_s),C.pixelStorei(C.UNPACK_SKIP_ROWS,xn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Zo),Q===0&&R.generateMipmaps&&C.generateMipmap(Xt),Me.unbindTexture()},this.copyTextureToTexture3D=function(_,R,k=null,U=null,O=0){return _c('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,R,k,U,O)},this.initRenderTarget=function(_){_e.get(_).__webglFramebuffer===void 0&&M.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?M.setTextureCube(_,0):_.isData3DTexture?M.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?M.setTexture2DArray(_,0):M.setTexture2D(_,0),Me.unbindTexture()},this.resetState=function(){I=0,T=0,F=null,Me.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var oE={type:"change"},Jg={type:"start"},cE={type:"end"},fh=new bo,aE=new Gn,lF=Math.cos(70*Ig.DEG2RAD),jt=new P,_n=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kg=1e-6,ph=class extends dc{constructor(e,t=null){super(e,t),this.state=gt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:Sr.ROTATE,TWO:Sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new $n,this._lastTargetPosition=new P,this._quat=new $n().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Co,this._sphericalDelta=new Co,this._scale=1,this._panOffset=new P,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new P,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dF.bind(this),this._onPointerDown=uF.bind(this),this._onPointerUp=hF.bind(this),this._onContextMenu=_F.bind(this),this._onMouseWheel=mF.bind(this),this._onKeyDown=gF.bind(this),this._onTouchStart=vF.bind(this),this._onTouchMove=yF.bind(this),this._onMouseDown=fF.bind(this),this._onMouseMove=pF.bind(this),this._interceptControlDown=xF.bind(this),this._interceptControlUp=MF.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(oE),this.update(),this.state=gt.NONE}update(e=null){let t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),r<-Math.PI?r+=_n:r>Math.PI&&(r-=_n),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=jt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(fh.origin.copy(this.object.position),fh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fh.direction))<lF?this.object.lookAt(this.target):(aE.setFromNormalAndCoplanarPoint(this.object.up,this.target),fh.intersectPlane(aE,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Kg||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kg||this._lastTargetPosition.distanceToSquared(this.target)>Kg?(this.dispatchEvent(oE),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;jt.copy(r).sub(this.target);let s=jt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function uF(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function dF(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hF(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cE),this.state=gt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fF(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=gt.DOLLY;break;case Er.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=gt.ROTATE}break;case Er.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Jg)}function pF(n){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function mF(n){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(n.preventDefault(),this.dispatchEvent(Jg),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(cE))}function gF(n){this.enabled!==!1&&this._handleKeyDown(n)}function vF(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Sr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=gt.TOUCH_ROTATE;break;case Sr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case Sr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=gt.TOUCH_DOLLY_PAN;break;case Sr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Jg)}function yF(n){switch(this._trackPointer(n),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=gt.NONE}}function _F(n){this.enabled!==!1&&n.preventDefault()}function xF(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MF(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ko=class n{keyPressed="";keyEventBuffer=[];reset(){this.keyPressed="",this.keyEventBuffer=[]}isEmpty(){return this.keyEventBuffer.length===0}pop(){if(this.isEmpty())return;let e=this.keyEventBuffer[0];return this.keyEventBuffer.splice(0,1),e}keyboardEvent2KeyEvent(e){return{key:e.key.toLowerCase(),shift:e.shiftKey}}updateKeypress(e){let t=this.keyboardEvent2KeyEvent(e);this.keyPressed+=t.key.toUpperCase(),t.shift&&(this.keyPressed+="'"),this.keyEventBuffer.push(t),this.formatKeys()}formatKeys(){let e="";for(let t=0;t<this.keyPressed.length;t++){if(t===this.keyPressed.length-1){e+=this.keyPressed[t];break}let i=0;this.keyPressed[t+1]==="'"?(i++,this.keyPressed[t]===this.keyPressed[t+i+1]?(i++,this.keyPressed[t+i+1]==="'"?(i++,e+=`${this.keyPressed[t]}2`):e+=""):e+=`${this.keyPressed[t]}'`):this.keyPressed[t+1]==="2"?(i++,this.keyPressed[t+i+1]===this.keyPressed[t]?(i++,this.keyPressed[t+i+1]==="'"?(i++,e+=this.keyPressed[t]):e+=`${this.keyPressed[t]}'`):e+=`${this.keyPressed[t]}2`):this.keyPressed[t]===this.keyPressed[t+1]?(i++,this.keyPressed[t+i+1]==="'"?(i++,e+=""):e+=`${this.keyPressed[t]}2`):this.keyPressed[t+1]==="w"?i++:e+=this.keyPressed[t],t+=i}this.keyPressed=e}static Algo2KeyEvents(e){let t=[];for(let i=0;i<e.length;i++){if(i===e.length-1){t.push({key:e[i].toLowerCase(),shift:!1});break}e[i+1]==="'"?(t.push({key:e[i].toLowerCase(),shift:!0}),i++):e[i+1]==="2"?(t.push({key:e[i].toLowerCase(),shift:!1}),t.push({key:e[i].toLowerCase(),shift:!1}),i++):e[i]!==" "&&t.push({key:e[i].toLowerCase(),shift:!1})}return t}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})};var mh=class n{size=3;face="g";inputSpeed=.1;algorithm=[];rotationSpeed=.1;width=3;keys=new ko;currentEvent=void 0;internClock=new uc(!1);rotatingBoxes=[];material=new oc({color:8421504,emissive:0,specular:1118481,shininess:15,reflectivity:.1,refractionRatio:.1,combine:To,vertexColors:!0});boxes=[];ngOnInit(){document.getElementById("apply-algo")?.addEventListener("click",()=>{this.keys.keyEventBuffer.push(...this.algorithm)}),document.addEventListener("keypress",e=>{["u","d","f","b","r","l","m","s","e"].indexOf(e.key.toLowerCase(),0)!==-1&&this.keys.updateKeypress(e)}),this.createThreeJsBox()}createThreeJsBox(){let e=document.getElementById("canvas-box");if(!e)return;let t=new ic,i=new lc(16777215,2);t.add(i);let r=new wo(16777215,500);r.position.x=2,r.position.y=this.size*this.width*2,r.position.z=2,t.add(r),this.boxes=this.generateCube(this.size,t);let s={width:e.clientWidth,height:e.clientHeight},o=new Kt(75,s.width/s.height,.001,1e3);o.position.z=15,t.add(o);let a=new wo(16777215,100);a.position.set(o.position.x,o.position.y,o.position.z),t.add(a);let c=new dh({canvas:e});c.setClearColor(236986400,1),c.setSize(s.width,s.height);let l=new ph(o,c.domElement);l.minDistance=this.size/2*1.732*this.width+this.width/2,l.maxPolarAngle=Math.PI*2,l.minPolarAngle=-Math.PI*2;let u=()=>{this.keys.reset(),t.clear(),t.add(o,a,r,i),this.boxes=this.generateCube(this.size,t),l.minDistance=this.size/2*1.732*this.width+this.width/2};document.getElementById("reset-button")?.addEventListener("click",()=>{u()}),document.getElementById("size-slider")?.addEventListener("change",()=>{this.boxes.length!==this.size&&u()}),window.addEventListener("resize",()=>{s.width=window.innerWidth-200,s.height=window.innerHeight-100,o.aspect=s.width/s.height,o.updateProjectionMatrix(),c.setSize(s.width,s.height),c.render(t,o)});let f=()=>{a.position.set(o.position.x,o.position.y,o.position.z),this.animateRotation(),c.render(t,o),window.requestAnimationFrame(f)};f()}generateCube(e,t){let i=[],r=this.width/50;for(let s=0;s<e;s++){let o=[],a=(this.width+r)*(s-(e-1)/2);for(let c=0;c<e;c++){let l=[],u=(this.width+r)*(c-(e-1)/2);for(let d=0;d<e;d++){if(s!==0&&c!==0&&d!==0&&s!==e-1&&c!==e-1&&d!==e-1){l.push(new ln);continue}let f=(this.width+r)*(d-(e-1)/2),h=new xr(this.width,this.width,this.width).toNonIndexed(),g=h.getAttribute("position"),y=[],m=new Ye;for(let w=0;w<g.count;w+=3){let S=new P(g.getX(w+1)-g.getX(w),g.getY(w+1)-g.getY(w),g.getZ(w+1)-g.getZ(w)),E=new P(g.getX(w+2)-g.getX(w),g.getY(w+2)-g.getY(w),g.getZ(w+2)-g.getZ(w)),N=S.cross(E);N.x>0&&d===e-1?m.setRGB(1,0,0):N.x<0&&d===0?m.setRGB(1,.3,0):N.y>0&&c===e-1?m.setRGB(1,1,1):N.y<0&&c===0?m.setRGB(1,1,0):N.z>0&&s===e-1?m.setRGB(0,1,0):N.z<0&&s===0?m.setRGB(0,0,1):m.setRGB(0,0,0),y.push(m.r,m.g,m.b),y.push(m.r,m.g,m.b),y.push(m.r,m.g,m.b)}h.setAttribute("color",new jn(y,3));let p=new ln(h,this.material);p.position.x=f,p.position.y=u,p.position.z=a,l.push(p),t.add(p)}o.push(l)}i.push(o)}return i}rotateSlice(e=1){let[t,i]=this.getRotationMat(e);for(let r of this.rotatingBoxes)r.position.applyMatrix4(t),t.elements[0]!==1&&t.elements[10]===1?r.rotateOnWorldAxis(new P(0,0,1),i):t.elements[5]!==1?r.rotateOnWorldAxis(new P(1,0,0),i):t.elements[10]!==1&&r.rotateOnWorldAxis(new P(0,1,0),i)}getSlice(){switch(this.currentEvent?.key){case"f":return[this.size-1,-1,-1];case"b":return[0,-1,-1];case"u":return[-1,this.size-1,-1];case"d":return[-1,0,-1];case"r":return[-1,-1,this.size-1];case"l":return[-1,-1,0];case"m":return[-1,-1,1];case"e":return[-1,1,-1];case"s":return[1,-1,-1]}return[-1,-1,-1]}getRotationMat(e=1){let t=new Et,i=0,r=this.currentEvent?.shift?-1:1;switch(this.currentEvent?.key){case"f":i=-Math.PI/2*r*e,t.makeRotationZ(i);break;case"b":i=Math.PI/2*r*e,t.makeRotationZ(i);break;case"u":i=-Math.PI/2*r*e,t.makeRotationY(i);break;case"d":i=Math.PI/2*r*e,t.makeRotationY(i);break;case"r":i=-Math.PI/2*r*e,t.makeRotationX(i);break;case"l":i=Math.PI/2*r*e,t.makeRotationX(i);break;case"m":i=Math.PI/2*r*e,t.makeRotationX(i);break;case"e":i=Math.PI/2*r*e,t.makeRotationY(i);break;case"s":i=-Math.PI/2*r*e,t.makeRotationZ(i);break}return[t,i]}idsToBoxes(e){let t=[];if(e[0]>=0)t=this.boxes[e[0]].flat();else if(e[1]>=0)for(let i of this.boxes)for(let r of i[e[1]])t.push(r);else if(e[2]>=0)for(let i of this.boxes)for(let r of i)t.push(r[e[2]]);return t}clampVec3(e){let t=[];for(let r=0;r<this.size;r++)t.push((this.width+this.width/50)*(r-(this.size-1)/2));let i=[9999999,9999999,9999999];for(let r of t)Math.abs(e.x-r)<Math.abs(e.x-i[0])&&(i[0]=r),Math.abs(e.y-r)<Math.abs(e.y-i[1])&&(i[1]=r),Math.abs(e.z-r)<Math.abs(e.z-i[2])&&(i[2]=r);e.x=i[0],e.y=i[1],e.z=i[2]}clampRotation(e){let t=[9999999,9999999,9999999];for(let i of[0,Math.PI/2,Math.PI,-Math.PI/2,-Math.PI])Math.abs(e.x-i)<Math.abs(e.x-t[0])&&(t[0]=i),Math.abs(e.y-i)<Math.abs(e.y-t[1])&&(t[1]=i),Math.abs(e.z-i)<Math.abs(e.z-t[2])&&(t[2]=i);e.x=t[0],e.y=t[1],e.z=t[2]}sortBoxes(){let e=this.boxes.flat().flat();for(let t of e)this.clampVec3(t.position),this.clampRotation(t.rotation);e.sort((t,i)=>1e4*(t.position.z-i.position.z)+100*(t.position.y-i.position.y)+(t.position.x-i.position.x));for(let t=0;t<this.size;t++)for(let i=0;i<this.size;i++)for(let r=0;r<this.size;r++)this.boxes[t][i][r]=e[t*this.size*this.size+i*this.size+r]}animateRotation(){if(!(this.keys.isEmpty()&&!this.currentEvent)){if(this.internClock.elapsedTime/this.rotationSpeed>1){this.internClock.stop(),this.internClock.running=!1,this.internClock.elapsedTime=0,this.sortBoxes(),this.rotationSpeed=this.inputSpeed;return}this.internClock.running||(this.internClock.start(),this.currentEvent=this.keys.pop(),this.rotatingBoxes=this.idsToBoxes(this.getSlice())),this.rotateSlice(this.internClock.getDelta()/this.rotationSpeed)}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ks({type:n,selectors:[["app-viewer"]],inputs:{size:"size",face:"face",inputSpeed:"inputSpeed",algorithm:"algorithm"},decls:3,vars:1,consts:[["id","canvas-box"]],template:function(t,i){t&1&&(yn(0,"canvas",0),Ht(1,"div"),En(2),It()),t&2&&(bn(2),Js(i.keys.keyPressed))},styles:["canvas[_ngcontent-%COMP%]{height:800px;width:1600px}"]})};function EF(n,e){if(n&1){let t=Mx();Ht(0,"button",18),Jr("click",function(){let r=H_(t).$implicit,s=um(2);return z_(s.updateFace(r))}),En(1),It()}if(n&2){let t=e.$implicit;lm("",t,"-dd"),bn(),Js(t)}}function SF(n,e){if(n&1&&(Ht(0,"section")(1,"label",6),En(2,"Front face : "),It(),Ht(3,"div",15)(4,"button"),En(5),It(),Ht(6,"div",16),du(7,EF,2,4,"button",17),It()(),yn(8,"hr"),It()),n&2){let t=um();bn(4),lm("",t.face,"-dd"),bn(),Js(t.face),bn(2),Sa("ngForOf",t.colors)}}var gh=class n{title="cubeviewer";sides=[2,3];colors=["green","blue","white","yellow","red","orange"];selectedSide=3;face="green";speed=.1;rawAlgorithm="R2U'RU'RUR'UR2UD'RU'R'D";algorithm=[];ngOnInit(){this.setAlgorithm()}updateFace(e){this.face=e}setAlgorithm(){this.algorithm=ko.Algo2KeyEvents(this.rawAlgorithm)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ks({type:n,selectors:[["app-root"]],decls:29,vars:12,consts:[["id","class",1,"head"],[1,"github-link"],["href","https://github.com/AuMgAn/cubeviewer",2,"width","inherit","height","inherit"],["src","github-mark.png","alt","github",1,"github-logo"],[1,"app"],["id","params",1,"params"],["for","side"],["id","size-slider","type","range","step","1",3,"ngModelChange","min","max","ngModel"],[4,"ngIf"],["type","range","min","0.1","max","1","step","0.1",3,"ngModelChange","ngModel"],[1,"algorithm-input",3,"ngModelChange","change","ngModel"],["id","apply-algo"],["id","reset-button"],[1,"viewer"],[3,"size","face","inputSpeed","algorithm"],[1,"dropdown"],[1,"dropdown-content"],[3,"class","click",4,"ngFor","ngForOf"],[3,"click"]],template:function(t,i){t&1&&(Ht(0,"div",0)(1,"b",1)(2,"a",2),yn(3,"img",3),It(),En(4," CubeViewer "),It()(),Ht(5,"div",4)(6,"div",5)(7,"label",6),En(8),It(),yn(9,"br"),Ht(10,"input",7),Ca("ngModelChange",function(s){return fu(i.selectedSide,s)||(i.selectedSide=s),s}),It(),yn(11,"hr"),du(12,SF,9,5,"section",8),Ht(13,"label",6),En(14,"Rotation speed : "),It(),Ht(15,"input",9),Ca("ngModelChange",function(s){return fu(i.speed,s)||(i.speed=s),s}),It(),yn(16,"hr"),Ht(17,"label",6),En(18,"Algorithm input : "),It(),Ht(19,"textarea",10),Ca("ngModelChange",function(s){return fu(i.rawAlgorithm,s)||(i.rawAlgorithm=s),s}),Jr("change",function(){return i.setAlgorithm()}),En(20,"    "),It(),Ht(21,"button",11),En(22,"Apply"),It(),yn(23,"hr"),Ht(24,"button",12),En(25,"Reset"),It(),yn(26,"hr"),It(),Ht(27,"div",13),yn(28,"app-viewer",14),It()()),t&2&&(bn(8),dm("Cube Size: ",i.selectedSide,"x",i.selectedSide,""),bn(2),hu("min",i.sides[0]),hu("max",i.sides[i.sides.length-1]),wa("ngModel",i.selectedSide),bn(2),Sa("ngIf",!1),bn(3),wa("ngModel",i.speed),bn(4),wa("ngModel",i.rawAlgorithm),bn(9),Sa("size",i.selectedSide)("face",i.face[0])("inputSpeed",i.speed)("algorithm",i.algorithm))},dependencies:[xu,_u,vm,mh,gM,Iu,Fm,fM,Om],styles:["option[_ngcontent-%COMP%]{padding:0}datalist[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;writing-mode:vertical-lr}button[_ngcontent-%COMP%]{background-color:#0075ff;height:inherit;margin-top:5px;padding:8px 16px;border-radius:15px}img[_ngcontent-%COMP%]{width:inherit;height:inherit}.head[_ngcontent-%COMP%]{width:100%;height:50px;background-color:#4682b4}.github-link[_ngcontent-%COMP%]{width:40px;height:40px;padding:5px;font-size:45px;font-style:normal;color:#252525}.github-logo[_ngcontent-%COMP%]{translate:0px 5px}.app[_ngcontent-%COMP%]{display:flex;flex-direction:line}.params[_ngcontent-%COMP%]{margin:5px;padding:10px;width:150px;height:fit-content}.viewer[_ngcontent-%COMP%]{margin:5px;padding:10px;height:fit-content}.algorithm-input[_ngcontent-%COMP%]{height:fit-content;width:inherit;line-break:auto;font-size:20px}.dropdown[_ngcontent-%COMP%]{position:relative;display:inline-block}.dropdown-content[_ngcontent-%COMP%]{display:none;position:absolute;box-shadow:0 8px 16px #0003;z-index:1}.dropdown-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;padding:12px 16px;font-size:16px;text-decoration:none;display:block}.dropdown-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#ddd}.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%]{display:block}.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%]{background-color:#3e8e41}.orange-dd[_ngcontent-%COMP%], .red-dd[_ngcontent-%COMP%], .yellow-dd[_ngcontent-%COMP%], .white-dd[_ngcontent-%COMP%], .blue-dd[_ngcontent-%COMP%], .green-dd[_ngcontent-%COMP%]{color:#000;padding:8px;font-size:16px;width:80px;border:none}.green-dd[_ngcontent-%COMP%]{background-color:#0f0}.blue-dd[_ngcontent-%COMP%]{background-color:#00f}.white-dd[_ngcontent-%COMP%]{background-color:#fff}.yellow-dd[_ngcontent-%COMP%]{background-color:#ff0}.red-dd[_ngcontent-%COMP%]{background-color:red}.orange-dd[_ngcontent-%COMP%]{background-color:#ff4c00}"]})};var Ve="primary",Nc=Symbol("RouteTitle"),iv=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Go(n){return new iv(n)}function wF(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function CF(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Ti(n[t],e[t]))return!1;return!0}function Ti(n,e){let t=n?rv(n):void 0,i=e?rv(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!gE(n[r],e[r]))return!1;return!0}function rv(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function gE(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function vE(n){return n.length>0?n[n.length-1]:null}function Rr(n){return pf(n)?n:Kr(n)?Dt(Promise.resolve(n)):Le(n)}var TF={exact:_E,subset:xE},yE={exact:DF,subset:AF,ignored:()=>!0};function lE(n,e,t){return TF[t.paths](n.root,e.root,t.matrixParams)&&yE[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function DF(n,e){return Ti(n,e)}function _E(n,e,t){if(!vs(n.segments,e.segments)||!_h(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!_E(n.children[i],e.children[i],t))return!1;return!0}function AF(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>gE(n[t],e[t]))}function xE(n,e,t){return ME(n,e,e.segments,t)}function ME(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!vs(r,t)||e.hasChildren()||!_h(r,t,i))}else if(n.segments.length===t.length){if(!vs(n.segments,t)||!_h(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!xE(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!vs(n.segments,r)||!_h(n.segments,r,i)||!n.children[Ve]?!1:ME(n.children[Ve],e,s,i)}}function _h(n,e,t){return e.every((i,r)=>yE[t](n[r].parameters,i.parameters))}var Ki=class{root;queryParams;fragment;_queryParamMap;constructor(e=new ht([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Go(this.queryParams),this._queryParamMap}toString(){return NF.serialize(this)}},ht=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return xh(this)}},gs=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Go(this.parameters),this._parameterMap}toString(){return EE(this)}};function IF(n,e){return vs(n,e)&&n.every((t,i)=>Ti(t.parameters,e[i].parameters))}function vs(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function RF(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ve&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ve&&(t=t.concat(e(r,i)))}),t}var Ph=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>new jo,providedIn:"root"})}return n})(),jo=class{parse(e){let t=new ov(e);return new Ki(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Mc(e.root,!0)}`,i=FF(e.queryParams),r=typeof e.fragment=="string"?`#${PF(e.fragment)}`:"";return`${t}${i}${r}`}},NF=new jo;function xh(n){return n.segments.map(e=>EE(e)).join("/")}function Mc(n,e){if(!n.hasChildren())return xh(n);if(e){let t=n.children[Ve]?Mc(n.children[Ve],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Ve&&i.push(`${r}:${Mc(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=RF(n,(i,r)=>r===Ve?[Mc(n.children[Ve],!1)]:[`${r}:${Mc(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ve]!=null?`${xh(n)}/${t[0]}`:`${xh(n)}/(${t.join("//")})`}}function bE(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function vh(n){return bE(n).replace(/%3B/gi,";")}function PF(n){return encodeURI(n)}function sv(n){return bE(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Mh(n){return decodeURIComponent(n)}function uE(n){return Mh(n.replace(/\+/g,"%20"))}function EE(n){return`${sv(n.path)}${OF(n.parameters)}`}function OF(n){return Object.entries(n).map(([e,t])=>`;${sv(e)}=${sv(t)}`).join("")}function FF(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${vh(t)}=${vh(r)}`).join("&"):`${vh(t)}=${vh(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var LF=/^[^\/()?;#]+/;function Qg(n){let e=n.match(LF);return e?e[0]:""}var kF=/^[^\/()?;=#]+/;function UF(n){let e=n.match(kF);return e?e[0]:""}var BF=/^[^=?&#]+/;function VF(n){let e=n.match(BF);return e?e[0]:""}var HF=/^[^&#]+/;function zF(n){let e=n.match(HF);return e?e[0]:""}var ov=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ht([],{}):new ht([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Ve]=new ht(e,t)),i}parseSegment(){let e=Qg(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new ye(4009,!1);return this.capture(e),new gs(Mh(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=UF(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Qg(this.remaining);r&&(i=r,this.capture(i))}e[Mh(t)]=Mh(i)}parseQueryParam(e){let t=VF(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=zF(this.remaining);o&&(i=o,this.capture(i))}let r=uE(t),s=uE(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Qg(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new ye(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ve);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Ve]:new ht([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new ye(4011,!1)}};function SE(n){return n.segments.length>0?new ht([],{[Ve]:n}):n}function wE(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=wE(r);if(i===Ve&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ht(n.segments,e);return GF(t)}function GF(n){if(n.numberOfChildren===1&&n.children[Ve]){let e=n.children[Ve];return new ht(n.segments.concat(e.segments),e.children)}return n}function Wo(n){return n instanceof Ki}function jF(n,e,t=null,i=null){let r=CE(n);return TE(r,e,t,i)}function CE(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ht(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=SE(i);return e??r}function TE(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return ev(r,r,r,t,i);let s=WF(e);if(s.toRoot())return ev(r,r,new ht([],{}),t,i);let o=$F(s,r,n),a=o.processChildren?Ec(o.segmentGroup,o.index,s.commands):AE(o.segmentGroup,o.index,s.commands);return ev(r,o.segmentGroup,a,t,i)}function Eh(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function wc(n){return typeof n=="object"&&n!=null&&n.outlets}function ev(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=DE(n,e,t);let a=SE(wE(o));return new Ki(a,s,r)}function DE(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=DE(s,e,t)}),new ht(n.segments,i)}var Sh=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Eh(i[0]))throw new ye(4003,!1);let r=i.find(wc);if(r&&r!==vE(i))throw new ye(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function WF(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Sh(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Sh(t,e,i)}var Vo=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function $F(n,e,t){if(n.isAbsolute)return new Vo(e,!0,0);if(!t)return new Vo(e,!1,NaN);if(t.parent===null)return new Vo(t,!0,0);let i=Eh(n.commands[0])?0:1,r=t.segments.length-1+i;return qF(t,r,n.numberOfDoubleDots)}function qF(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new ye(4005,!1);r=i.segments.length}return new Vo(i,!1,r-s)}function XF(n){return wc(n[0])?n[0].outlets:{[Ve]:n}}function AE(n,e,t){if(n??=new ht([],{}),n.segments.length===0&&n.hasChildren())return Ec(n,e,t);let i=YF(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ht(n.segments.slice(0,i.pathIndex),{});return s.children[Ve]=new ht(n.segments.slice(i.pathIndex),n.children),Ec(s,0,r)}else return i.match&&r.length===0?new ht(n.segments,{}):i.match&&!n.hasChildren()?av(n,e,t):i.match?Ec(n,0,r):av(n,e,t)}function Ec(n,e,t){if(t.length===0)return new ht(n.segments,{});{let i=XF(t),r={};if(Object.keys(i).some(s=>s!==Ve)&&n.children[Ve]&&n.numberOfChildren===1&&n.children[Ve].segments.length===0){let s=Ec(n.children[Ve],e,t);return new ht(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=AE(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ht(n.segments,r)}}function YF(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(wc(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!hE(c,l,o))return s;i+=2}else{if(!hE(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function av(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(wc(s)){let c=ZF(s.outlets);return new ht(i,c)}if(r===0&&Eh(t[0])){let c=n.segments[e];i.push(new gs(c.path,dE(t[0]))),r++;continue}let o=wc(s)?s.outlets[Ve]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Eh(a)?(i.push(new gs(o,dE(a))),r+=2):(i.push(new gs(o,{})),r++)}return new ht(i,{})}function ZF(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=av(new ht([],{}),0,i))}),e}function dE(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function hE(n,e,t){return n==t.path&&Ti(e,t.parameters)}var bh="imperative",Jt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Jt||{}),Xn=class{id;url;constructor(e,t){this.id=e,this.url=t}},$o=class extends Xn{type=Jt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ar=class extends Xn{urlAfterRedirects;type=Jt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},In=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(In||{}),wh=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(wh||{}),Zi=class extends Xn{reason;code;type=Jt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Ir=class extends Xn{reason;code;type=Jt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},Cc=class extends Xn{error;target;type=Jt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ch=class extends Xn{urlAfterRedirects;state;type=Jt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cv=class extends Xn{urlAfterRedirects;state;type=Jt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},lv=class extends Xn{urlAfterRedirects;state;shouldActivate;type=Jt.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},uv=class extends Xn{urlAfterRedirects;state;type=Jt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dv=class extends Xn{urlAfterRedirects;state;type=Jt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},hv=class{route;type=Jt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},fv=class{route;type=Jt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},pv=class{snapshot;type=Jt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},mv=class{snapshot;type=Jt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gv=class{snapshot;type=Jt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vv=class{snapshot;type=Jt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Tc=class{},qo=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function KF(n,e){return n.providers&&!n._injector&&(n._injector=uu(n.providers,e,`Route: ${n.path}`)),n._injector??e}function hi(n){return n.outlet||Ve}function JF(n,e){let t=n.filter(i=>hi(i)===e);return t.push(...n.filter(i=>hi(i)!==e)),t}function Pc(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var yv=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Pc(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Oc(this.rootInjector)}},Oc=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new yv(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(je(Un))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Th=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=_v(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=_v(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=xv(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return xv(e,this._root).map(t=>t.value)}};function _v(n,e){if(n===e.value)return e;for(let t of e.children){let i=_v(n,t);if(i)return i}return null}function xv(n,e){if(n===e.value)return[e];for(let t of e.children){let i=xv(n,t);if(i.length)return i.unshift(e),i}return[]}var An=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Bo(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Dh=class extends Th{snapshot;constructor(e,t){super(e),this.snapshot=t,Av(this,e)}toString(){return this.snapshot.toString()}};function IE(n){let e=QF(n),t=new Yt([new gs("",{})]),i=new Yt({}),r=new Yt({}),s=new Yt({}),o=new Yt(""),a=new ys(t,i,s,o,r,Ve,n,e.root);return a.snapshot=e.root,new Dh(new An(a,[]),e)}function QF(n){let e={},t={},i={},r="",s=new Ho([],e,i,r,t,Ve,n,null,{});return new Ih("",new An(s,[]))}var ys=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Je(l=>l[Nc]))??Le(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Je(e=>Go(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Je(e=>Go(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ah(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:te(te({},e.params),n.params),data:te(te({},e.data),n.data),resolve:te(te(te(te({},n.data),e.data),r?.data),n._resolvedData)}:i={params:te({},n.params),data:te({},n.data),resolve:te(te({},n.data),n._resolvedData??{})},r&&NE(r)&&(i.resolve[Nc]=r.title),i}var Ho=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Nc]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Go(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Go(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Ih=class extends Th{url;constructor(e,t){super(t),this.url=e,Av(this,t)}toString(){return RE(this._root)}};function Av(n,e){e.value._routerState=n,e.children.forEach(t=>Av(n,t))}function RE(n){let e=n.children.length>0?` { ${n.children.map(RE).join(", ")} } `:"";return`${n.value}${e}`}function tv(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Ti(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Ti(e.params,t.params)||n.paramsSubject.next(t.params),CF(e.url,t.url)||n.urlSubject.next(t.url),Ti(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Mv(n,e){let t=Ti(n.params,e.params)&&IF(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Mv(n.parent,e.parent))}function NE(n){return typeof n.title=="string"||n.title===null}var eL=new be(""),PE=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ve;activateEvents=new Wt;deactivateEvents=new Wt;attachEvents=new Wt;detachEvents=new Wt;routerOutletData=g0(void 0);parentContexts=ie(Oc);location=ie(Zs);changeDetector=ie(Ta);inputBinder=ie(Oh,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ye(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ye(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ye(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new ye(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new bv(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=Vn({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[_a]})}return n})(),bv=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===ys?this.route:e===Oc?this.childContexts:e===eL?this.outletData:this.parent.get(e,t)}},Oh=new be("");function tL(n,e,t){let i=Dc(n,e._root,t?t._root:void 0);return new Dh(i,e)}function Dc(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=nL(n,e,t);return new An(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Dc(n,a)),o}}let i=iL(e.value),r=e.children.map(s=>Dc(n,s));return new An(i,r)}}function nL(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Dc(n,i,r);return Dc(n,i)})}function iL(n){return new ys(new Yt(n.url),new Yt(n.params),new Yt(n.queryParams),new Yt(n.fragment),new Yt(n.data),n.outlet,n.component,n)}var Ac=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},OE="ngNavigationCancelingError";function Rh(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Wo(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=FE(!1,In.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function FE(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[OE]=!0,t.cancellationCode=e,t}function rL(n){return LE(n)&&Wo(n.url)}function LE(n){return!!n&&n[OE]}var sL=(n,e,t,i)=>Je(r=>(new Ev(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Ev=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),tv(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Bo(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Bo(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Bo(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Bo(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new vv(s.value.snapshot))}),e.children.length&&this.forwardEvent(new mv(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(tv(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),tv(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Nh=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},zo=class{component;route;constructor(e,t){this.component=e,this.route=t}};function oL(n,e,t){let i=n._root,r=e?e._root:null;return bc(i,r,t,[i.value])}function aL(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Yo(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!u_(n)?n:e.get(n):i}function bc(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Bo(e);return n.children.forEach(o=>{cL(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Sc(a,t.getContext(o),r)),r}function cL(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=lL(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Nh(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?bc(n,e,a?a.children:null,i,r):bc(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new zo(a.outlet.component,o))}else o&&Sc(e,a,r),r.canActivateChecks.push(new Nh(i)),s.component?bc(n,null,a?a.children:null,i,r):bc(n,null,t,i,r);return r}function lL(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!vs(n.url,e.url);case"pathParamsOrQueryParamsChange":return!vs(n.url,e.url)||!Ti(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Mv(n,e)||!Ti(n.queryParams,e.queryParams);case"paramsChange":default:return!Mv(n,e)}}function Sc(n,e,t){let i=Bo(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Sc(o,e.children.getContext(s),t):Sc(o,null,t):Sc(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new zo(e.outlet.component,r)):t.canDeactivateChecks.push(new zo(null,r)):t.canDeactivateChecks.push(new zo(null,r))}function Fc(n){return typeof n=="function"}function uL(n){return typeof n=="boolean"}function dL(n){return n&&Fc(n.canLoad)}function hL(n){return n&&Fc(n.canActivate)}function fL(n){return n&&Fc(n.canActivateChild)}function pL(n){return n&&Fc(n.canDeactivate)}function mL(n){return n&&Fc(n.canMatch)}function kE(n){return n instanceof Ii||n?.name==="EmptyError"}var yh=Symbol("INITIAL_VALUE");function Xo(){return Qn(n=>hl(n.map(e=>e.pipe(Ri(1),yf(yh)))).pipe(Je(e=>{for(let t of e)if(t!==!0){if(t===yh)return yh;if(t===!1||gL(t))return t}return!0}),Jn(e=>e!==yh),Ri(1)))}function gL(n){return Wo(n)||n instanceof Ac}function vL(n,e){return Vt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Le(qe(te({},t),{guardsResult:!0})):yL(o,i,r,n).pipe(Vt(a=>a&&uL(a)?_L(i,s,n,e):Le(a)),Je(a=>qe(te({},t),{guardsResult:a})))})}function yL(n,e,t,i){return Dt(n).pipe(Vt(r=>SL(r.component,r.route,t,e,i)),Ni(r=>r!==!0,!0))}function _L(n,e,t,i){return Dt(e).pipe(Is(r=>As(ML(r.route.parent,i),xL(r.route,i),EL(n,r.path,t),bL(n,r.route,t))),Ni(r=>r!==!0,!0))}function xL(n,e){return n!==null&&e&&e(new gv(n)),Le(!0)}function ML(n,e){return n!==null&&e&&e(new pv(n)),Le(!0)}function bL(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Le(!0);let r=i.map(s=>fl(()=>{let o=Pc(e)??t,a=Yo(s,o),c=hL(a)?a.canActivate(e,n):ii(o,()=>a(e,n));return Rr(c).pipe(Ni())}));return Le(r).pipe(Xo())}function EL(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>aL(o)).filter(o=>o!==null).map(o=>fl(()=>{let a=o.guards.map(c=>{let l=Pc(o.node)??t,u=Yo(c,l),d=fL(u)?u.canActivateChild(i,n):ii(l,()=>u(i,n));return Rr(d).pipe(Ni())});return Le(a).pipe(Xo())}));return Le(s).pipe(Xo())}function SL(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Le(!0);let o=s.map(a=>{let c=Pc(e)??r,l=Yo(a,c),u=pL(l)?l.canDeactivate(n,e,t,i):ii(c,()=>l(n,e,t,i));return Rr(u).pipe(Ni())});return Le(o).pipe(Xo())}function wL(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Le(!0);let s=r.map(o=>{let a=Yo(o,n),c=dL(a)?a.canLoad(e,t):ii(n,()=>a(e,t));return Rr(c)});return Le(s).pipe(Xo(),UE(i))}function UE(n){return uf(Zt(e=>{if(typeof e!="boolean")throw Rh(n,e)}),Je(e=>e===!0))}function CL(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Le(!0);let s=r.map(o=>{let a=Yo(o,n),c=mL(a)?a.canMatch(e,t):ii(n,()=>a(e,t));return Rr(c)});return Le(s).pipe(Xo(),UE(i))}var Ic=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},Rc=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Uo(n){return Ds(new Ic(n))}function TL(n){return Ds(new ye(4e3,!1))}function DL(n){return Ds(FE(!1,In.GuardRejected))}var Sv=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Le(i);if(r.numberOfChildren>1||!r.children[Ve])return TL(`${e.redirectTo}`);r=r.children[Ve]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:h,data:g,title:y}=r,m=ii(s,()=>a({params:h,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:y}));if(m instanceof Ki)throw new Rc(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new Rc(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Ki(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ht(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new ye(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},wv={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function AL(n,e,t,i,r){let s=BE(n,e,t);return s.matched?(i=KF(e,i),CL(i,e,t,r).pipe(Je(o=>o===!0?s:te({},wv)))):Le(s)}function BE(n,e,t){if(e.path==="**")return IL(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?te({},wv):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||wF)(t,n,e);if(!r)return te({},wv);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?te(te({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function IL(n){return{matched:!0,parameters:n.length>0?vE(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function fE(n,e,t,i){return t.length>0&&PL(n,t,i)?{segmentGroup:new ht(e,NL(i,new ht(t,n.children))),slicedSegments:[]}:t.length===0&&OL(n,t,i)?{segmentGroup:new ht(n.segments,RL(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ht(n.segments,n.children),slicedSegments:t}}function RL(n,e,t,i){let r={};for(let s of t)if(Fh(n,e,s)&&!i[hi(s)]){let o=new ht([],{});r[hi(s)]=o}return te(te({},i),r)}function NL(n,e){let t={};t[Ve]=e;for(let i of n)if(i.path===""&&hi(i)!==Ve){let r=new ht([],{});t[hi(i)]=r}return t}function PL(n,e,t){return t.some(i=>Fh(n,e,i)&&hi(i)!==Ve)}function OL(n,e,t){return t.some(i=>Fh(n,e,i))}function Fh(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function FL(n,e,t){return e.length===0&&!n.children[t]}var Cv=class{};function LL(n,e,t,i,r,s,o="emptyOnly"){return new Tv(n,e,t,i,r,o,s).recognize()}var kL=31,Tv=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Sv(this.urlSerializer,this.urlTree)}noMatchError(e){return new ye(4002,`'${e.segmentGroup}'`)}recognize(){let e=fE(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Je(({children:t,rootSnapshot:i})=>{let r=new An(i,t),s=new Ih("",r),o=jF(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Ho([],Object.freeze({}),Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ve,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Ve,t).pipe(Je(i=>({children:i,rootSnapshot:t})),Qi(i=>{if(i instanceof Rc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Ic?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(Je(o=>o instanceof An?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Dt(s).pipe(Is(o=>{let a=i.children[o],c=JF(t,o);return this.processSegmentGroup(e,c,a,o,r)}),vf((o,a)=>(o.push(...a),o)),er(null),gf(),Vt(o=>{if(o===null)return Uo(i);let a=VE(o);return UL(a),Le(a)}))}processSegment(e,t,i,r,s,o,a){return Dt(t).pipe(Is(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(Qi(l=>{if(l instanceof Ic)return Le(null);throw l}))),Ni(c=>!!c),Qi(c=>{if(kE(c))return FL(i,r,s)?Le(new Cv):Uo(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return hi(i)!==o&&(o===Ve||!Fh(r,s,i))?Uo(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):Uo(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=BE(t,r,s);if(!c)return Uo(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>kL&&(this.allowRedirects=!1));let h=new Ho(s,l,Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,pE(r),hi(r),r.component??r._loadedComponent??null,r,mE(r)),g=Ah(h,a,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let y=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e);return this.applyRedirects.lineralizeSegments(r,y).pipe(Vt(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=AL(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Qn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Qn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=new Ho(f,d,Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,pE(i),hi(i),i.component??i._loadedComponent??null,i,mE(i)),y=Ah(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:m,slicedSegments:p}=fE(t,f,h,l);if(p.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(Je(S=>new An(g,S)));if(l.length===0&&p.length===0)return Le(new An(g,[]));let w=hi(i)===s;return this.processSegment(u,l,m,p,w?Ve:s,!0,g).pipe(Je(S=>new An(g,S instanceof An?[S]:[])))}))):Uo(t)))}getChildConfig(e,t,i){return t.children?Le({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Le({routes:t._loadedRoutes,injector:t._loadedInjector}):wL(e,t,i,this.urlSerializer).pipe(Vt(r=>r?this.configLoader.loadChildren(e,t).pipe(Zt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):DL(t))):Le({routes:[],injector:e})}};function UL(n){n.sort((e,t)=>e.value.outlet===Ve?-1:t.value.outlet===Ve?1:e.value.outlet.localeCompare(t.value.outlet))}function BL(n){let e=n.value.routeConfig;return e&&e.path===""}function VE(n){let e=[],t=new Set;for(let i of n){if(!BL(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=VE(i.children);e.push(new An(i.value,r))}return e.filter(i=>!t.has(i))}function pE(n){return n.data||{}}function mE(n){return n.resolve||{}}function VL(n,e,t,i,r,s){return Vt(o=>LL(n,e,t,i,o.extractedUrl,r,s).pipe(Je(({state:a,tree:c})=>qe(te({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function HL(n,e){return Vt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Le(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of HE(c))o.add(l);let a=0;return Dt(o).pipe(Is(c=>s.has(c)?zL(c,i,n,e):(c.data=Ah(c,c.parent,n).resolve,Le(void 0))),Zt(()=>a++),Rs(1),Vt(c=>a===o.size?Le(t):hn))})}function HE(n){let e=n.children.map(t=>HE(t)).flat();return[n,...e]}function zL(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!NE(r)&&(s[Nc]=r.title),GL(s,n,e,i).pipe(Je(o=>(n._resolvedData=o,n.data=Ah(n,n.parent,t).resolve,null)))}function GL(n,e,t,i){let r=rv(n);if(r.length===0)return Le({});let s={};return Dt(r).pipe(Vt(o=>jL(n[o],e,t,i).pipe(Ni(),Zt(a=>{if(a instanceof Ac)throw Rh(new jo,a);s[o]=a}))),Rs(1),Je(()=>s),Qi(o=>kE(o)?hn:Ds(o)))}function jL(n,e,t,i){let r=Pc(e)??i,s=Yo(n,r),o=s.resolve?s.resolve(e,t):ii(r,()=>s(e,t));return Rr(o)}function nv(n){return Qn(e=>{let t=n(e);return t?Dt(t).pipe(Je(()=>e)):Le(e)})}var zE=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Ve);return i}getResolvedTitleForRoute(t){return t.data[Nc]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ie(WL),providedIn:"root"})}return n})(),WL=(()=>{class n extends zE{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(je(Zx))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Lh=new be("",{providedIn:"root",factory:()=>({})}),GE=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Ks({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&yn(0,"router-outlet")},dependencies:[PE],encapsulation:2})}return n})();function Iv(n){let e=n.children&&n.children.map(Iv),t=e?qe(te({},n),{children:e}):te({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ve&&(t.component=GE),t}var kh=new be(""),jE=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=ie(Tx);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Le(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=Rr(t.loadComponent()).pipe(Je(WE),Zt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),ra(()=>{this.componentLoaders.delete(t)})),r=new Ts(i,()=>new Bt).pipe(Cs());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Le({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=$L(i,this.compiler,t,this.onLoadEndListener).pipe(ra(()=>{this.childrenLoaders.delete(i)})),o=new Ts(s,()=>new Bt).pipe(Cs());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $L(n,e,t,i){return Rr(n.loadChildren()).pipe(Je(WE),Vt(r=>r instanceof sm||Array.isArray(r)?Le(r):Dt(e.compileModuleAsync(r))),Je(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(kh,[],{optional:!0,self:!0}).flat()),{routes:o.map(Iv),injector:s}}))}function qL(n){return n&&typeof n=="object"&&"default"in n}function WE(n){return qL(n)?n.default:n}var Rv=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ie(XL),providedIn:"root"})}return n})(),XL=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),$E=new be("");var qE=new be(""),XE=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Bt;transitionAbortSubject=new Bt;configLoader=ie(jE);environmentInjector=ie(Un);destroyRef=ie(eu);urlSerializer=ie(Ph);rootContexts=ie(Oc);location=ie(Qs);inputBindingEnabled=ie(Oh,{optional:!0})!==null;titleStrategy=ie(zE);options=ie(Lh,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=ie(Rv);createViewTransition=ie($E,{optional:!0});navigationErrorHandler=ie(qE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Le(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new hv(r)),i=r=>this.events.next(new fv(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(qe(te({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i}))}setupNavigations(t){return this.transitions=new Yt(null),this.transitions.pipe(Jn(i=>i!==null),Qn(i=>{let r=!1,s=!1;return Le(i).pipe(Qn(o=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",In.SupersededByNewNavigation),hn;this.currentTransition=i,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?qe(te({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),c=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!a&&c!=="reload"){let l="";return this.events.next(new Ir(o.id,this.urlSerializer.serialize(o.rawUrl),l,wh.IgnoredSameUrlNavigation)),o.resolve(!1),hn}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return Le(o).pipe(Qn(l=>(this.events.next(new $o(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?hn:Promise.resolve(l))),VL(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Zt(l=>{i.targetSnapshot=l.targetSnapshot,i.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=qe(te({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let u=new Ch(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:l,extractedUrl:u,source:d,restoredState:f,extras:h}=o,g=new $o(l,this.urlSerializer.serialize(u),d,f);this.events.next(g);let y=IE(this.rootComponentType).snapshot;return this.currentTransition=i=qe(te({},o),{targetSnapshot:y,urlAfterRedirects:u,extras:qe(te({},h),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,Le(i)}else{let l="";return this.events.next(new Ir(o.id,this.urlSerializer.serialize(o.extractedUrl),l,wh.IgnoredByUrlHandlingStrategy)),o.resolve(!1),hn}}),Zt(o=>{let a=new cv(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),Je(o=>(this.currentTransition=i=qe(te({},o),{guards:oL(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),i)),vL(this.environmentInjector,o=>this.events.next(o)),Zt(o=>{if(i.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw Rh(this.urlSerializer,o.guardsResult);let a=new lv(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(a)}),Jn(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",In.GuardRejected),!1)),nv(o=>{if(o.guards.canActivateChecks.length!==0)return Le(o).pipe(Zt(a=>{let c=new uv(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),Qn(a=>{let c=!1;return Le(a).pipe(HL(this.paramsInheritanceStrategy,this.environmentInjector),Zt({next:()=>c=!0,complete:()=>{c||this.cancelNavigationTransition(a,"",In.NoDataFromResolver)}}))}),Zt(a=>{let c=new dv(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}))}),nv(o=>{let a=c=>{let l=[];c.routeConfig?.loadComponent&&!c.routeConfig._loadedComponent&&l.push(this.configLoader.loadComponent(c.routeConfig).pipe(Zt(u=>{c.component=u}),Je(()=>{})));for(let u of c.children)l.push(...a(u));return l};return hl(a(o.targetSnapshot.root)).pipe(er(null),Ri(1))}),nv(()=>this.afterPreactivation()),Qn(()=>{let{currentSnapshot:o,targetSnapshot:a}=i,c=this.createViewTransition?.(this.environmentInjector,o.root,a.root);return c?Dt(c).pipe(Je(()=>i)):Le(i)}),Je(o=>{let a=tL(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=i=qe(te({},o),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,i}),Zt(()=>{this.events.next(new Tc)}),sL(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),Ri(1),Zt({next:o=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ar(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{r=!0}}),_f(this.transitionAbortSubject.pipe(Zt(o=>{throw o}))),ra(()=>{!r&&!s&&this.cancelNavigationTransition(i,"",In.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),Qi(o=>{if(this.destroyed)return i.resolve(!1),hn;if(s=!0,LE(o))this.events.next(new Zi(i.id,this.urlSerializer.serialize(i.extractedUrl),o.message,o.cancellationCode)),rL(o)?this.events.next(new qo(o.url,o.navigationBehaviorOptions)):i.resolve(!1);else{let a=new Cc(i.id,this.urlSerializer.serialize(i.extractedUrl),o,i.targetSnapshot??void 0);try{let c=ii(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(c instanceof Ac){let{message:l,cancellationCode:u}=Rh(this.urlSerializer,c);this.events.next(new Zi(i.id,this.urlSerializer.serialize(i.extractedUrl),l,u)),this.events.next(new qo(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(a),o}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return hn}))}))}cancelNavigationTransition(t,i,r){let s=new Zi(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function YL(n){return n!==bh}var ZL=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ie(KL),providedIn:"root"})}return n})(),Dv=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},KL=(()=>{class n extends Dv{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Xs(n)))(r||n)}})();static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),YE=(()=>{class n{urlSerializer=ie(Ph);options=ie(Lh,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=ie(Qs);urlHandlingStrategy=ie(Rv);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ki;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??s;return o instanceof Ki?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=IE(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ie(JL),providedIn:"root"})}return n})(),JL=(()=>{class n extends YE{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate")})})}handleRouterEvent(t,i){t instanceof $o?this.updateStateMemento():t instanceof Ir?this.commitTransition(i):t instanceof Ch?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Tc?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Zi&&(t.code===In.GuardRejected||t.code===In.NoDataFromResolver)?this.restoreHistory(i):t instanceof Cc?this.restoreHistory(i,!0):t instanceof Ar&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:s,state:o}=i;if(this.location.isCurrentPathEqualTo(t)||s){let a=this.browserPageId,c=te(te({},o),this.generateNgRouterState(r,a));this.location.replaceState(t,"",c)}else{let a=te(te({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Xs(n)))(r||n)}})();static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ZE(n,e){n.events.pipe(Jn(t=>t instanceof Ar||t instanceof Zi||t instanceof Cc||t instanceof Ir),Je(t=>t instanceof Ar||t instanceof Ir?0:(t instanceof Zi?t.code===In.Redirect||t.code===In.SupersededByNewNavigation:!1)?2:1),Jn(t=>t!==2),Ri(1)).subscribe(()=>{e()})}var QL={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ek={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Nv=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=ie(dx);stateManager=ie(YE);options=ie(Lh,{optional:!0})||{};pendingTasks=ie(Ys);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=ie(XE);urlSerializer=ie(Ph);location=ie(Qs);urlHandlingStrategy=ie(Rv);_events=new Bt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=ie(ZL);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=ie(kh,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!ie(Oh,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ot;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof Zi&&i.code!==In.Redirect&&i.code!==In.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ar)this.navigated=!0;else if(i instanceof qo){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=te({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||YL(r.source)},o);this.scheduleNavigation(a,bh,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}nk(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),bh,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r)=>{this.navigateToSyncWithBrowser(t,r,i)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=te({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Iv),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=te(te({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=CE(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return TE(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Wo(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,bh,null,i)}navigate(t,i={skipLocationChange:!1}){return tk(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=te({},QL):i===!1?r=te({},ek):r=i,Wo(t))return lE(this.currentUrlTree,t,r);let s=this.parseUrl(t);return lE(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return ZE(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function tk(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new ye(4008,!1)}function nk(n){return!(n instanceof Tc)&&!(n instanceof qo)}var ik=new be("");function Pv(n,...e){return Cp([{provide:kh,multi:!0,useValue:n},[],{provide:ys,useFactory:rk,deps:[Nv]},{provide:om,multi:!0,useFactory:sk},e.map(t=>t.\u0275providers)])}function rk(n){return n.routerState.root}function sk(){let n=ie(Oi);return e=>{let t=n.get($r);if(e!==t.components[0])return;let i=n.get(Nv),r=n.get(ok);n.get(ak)===1&&i.initialNavigation(),n.get(ck,null,Ge.Optional)?.setUpPreloading(),n.get(ik,null,Ge.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var ok=new be("",{factory:()=>new Bt}),ak=new be("",{providedIn:"root",factory:()=>1});var ck=new be("");var KE=[];var JE={providers:[Ax({eventCoalescing:!0}),Pv(KE)]};Tm(gh,JE).catch(n=>console.error(n));
