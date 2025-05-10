var uE=Object.defineProperty,dE=Object.defineProperties;var hE=Object.getOwnPropertyDescriptors;var iv=Object.getOwnPropertySymbols;var fE=Object.prototype.hasOwnProperty,pE=Object.prototype.propertyIsEnumerable;var rv=(n,e,t)=>e in n?uE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,te=(n,e)=>{for(var t in e||={})fE.call(e,t)&&rv(n,t,e[t]);if(iv)for(var t of iv(e))pE.call(e,t)&&rv(n,t,e[t]);return n},qe=(n,e)=>dE(n,hE(e));var fs=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function wh(n,e){return Object.is(n,e)}var Ft=null,Mc=!1,Ch=1,Cn=Symbol("SIGNAL");function et(n){let e=Ft;return Ft=n,e}function Dh(){return Ft}var Ho={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function zo(n){if(Mc)throw new Error("");if(Ft===null)return;Ft.consumerOnSignalRead(n);let e=Ft.nextProducerIndex++;if(wc(Ft),e<Ft.producerNode.length&&Ft.producerNode[e]!==n&&Vo(Ft)){let t=Ft.producerNode[e];Sc(t,Ft.producerIndexOfThis[e])}Ft.producerNode[e]!==n&&(Ft.producerNode[e]=n,Ft.producerIndexOfThis[e]=Vo(Ft)?ov(n,Ft,e):0),Ft.producerLastReadVersion[e]=n.version}function sv(){Ch++}function Th(n){if(!(Vo(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Ch)){if(!n.producerMustRecompute(n)&&!Nh(n)){Sh(n);return}n.producerRecomputeValue(n),Sh(n)}}function Ah(n){if(n.liveConsumerNode===void 0)return;let e=Mc;Mc=!0;try{for(let t of n.liveConsumerNode)t.dirty||mE(t)}finally{Mc=e}}function Ih(){return Ft?.consumerAllowSignalWrites!==!1}function mE(n){n.dirty=!0,Ah(n),n.consumerMarkedDirty?.(n)}function Sh(n){n.dirty=!1,n.lastCleanEpoch=Ch}function Ec(n){return n&&(n.nextProducerIndex=0),et(n)}function Rh(n,e){if(et(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Vo(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Sc(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Nh(n){wc(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Th(t),i!==t.version))return!0}return!1}function Ph(n){if(wc(n),Vo(n))for(let e=0;e<n.producerNode.length;e++)Sc(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function ov(n,e,t){if(av(n),n.liveConsumerNode.length===0&&cv(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=ov(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function Sc(n,e){if(av(n),n.liveConsumerNode.length===1&&cv(n))for(let i=0;i<n.producerNode.length;i++)Sc(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];wc(r),r.producerIndexOfThis[i]=e}}function Vo(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function wc(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function av(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function cv(n){return n.producerNode!==void 0}function Oh(n,e){let t=Object.create(gE);t.computation=n,e!==void 0&&(t.equal=e);let i=()=>{if(Th(t),zo(t),t.value===bc)throw t.error;return t.value};return i[Cn]=t,i}var bh=Symbol("UNSET"),Eh=Symbol("COMPUTING"),bc=Symbol("ERRORED"),gE=qe(te({},Ho),{value:bh,dirty:!0,error:null,equal:wh,kind:"computed",producerMustRecompute(n){return n.value===bh||n.value===Eh},producerRecomputeValue(n){if(n.value===Eh)throw new Error("Detected cycle in computations.");let e=n.value;n.value=Eh;let t=Ec(n),i,r=!1;try{i=n.computation(),et(null),r=e!==bh&&e!==bc&&i!==bc&&n.equal(e,i)}catch(s){i=bc,n.error=s}finally{Rh(n,t)}if(r){n.value=e;return}n.value=i,n.version++}});function vE(){throw new Error}var lv=vE;function uv(n){lv(n)}function Fh(n){lv=n}var yE=null;function Lh(n,e){let t=Object.create(Cc);t.value=n,e!==void 0&&(t.equal=e);let i=()=>(zo(t),t.value);return i[Cn]=t,i}function Go(n,e){Ih()||uv(n),n.equal(n.value,e)||(n.value=e,_E(n))}function kh(n,e){Ih()||uv(n),Go(n,e(n.value))}var Cc=qe(te({},Ho),{equal:wh,value:void 0,kind:"signal"});function _E(n){n.version++,sv(),Ah(n),yE?.()}function Uh(n){let e=et(null);try{return n()}finally{et(e)}}var Bh;function jo(){return Bh}function Mi(n){let e=Bh;return Bh=n,e}var Dc=Symbol("NotFound");function Fe(n){return typeof n=="function"}function ps(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Tc=ps(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Wo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Rt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Fe(i))try{i()}catch(s){e=s instanceof Tc?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{dv(s)}catch(o){e=e??[],o instanceof Tc?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Tc(e)}}add(e){var t;if(e&&e!==this)if(this.closed)dv(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Wo(t,e)}remove(e){let{_finalizers:t}=this;t&&Wo(t,e),e instanceof n&&e._removeParent(this)}};Rt.EMPTY=(()=>{let n=new Rt;return n.closed=!0,n})();var Vh=Rt.EMPTY;function Ac(n){return n instanceof Rt||n&&"closed"in n&&Fe(n.remove)&&Fe(n.add)&&Fe(n.unsubscribe)}function dv(n){Fe(n)?n():n.unsubscribe()}var jn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ms={setTimeout(n,e,...t){let{delegate:i}=ms;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ms;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Ic(n){ms.setTimeout(()=>{let{onUnhandledError:e}=jn;if(e)e(n);else throw n})}function $o(){}var hv=Hh("C",void 0,void 0);function fv(n){return Hh("E",void 0,n)}function pv(n){return Hh("N",n,void 0)}function Hh(n,e,t){return{kind:n,value:e,error:t}}var Dr=null;function gs(n){if(jn.useDeprecatedSynchronousErrorHandling){let e=!Dr;if(e&&(Dr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Dr;if(Dr=null,t)throw i}}else n()}function mv(n){jn.useDeprecatedSynchronousErrorHandling&&Dr&&(Dr.errorThrown=!0,Dr.error=n)}var Tr=class extends Rt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Ac(e)&&e.add(this)):this.destination=wE}static create(e,t,i){return new vs(e,t,i)}next(e){this.isStopped?Gh(pv(e),this):this._next(e)}error(e){this.isStopped?Gh(fv(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Gh(hv,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},EE=Function.prototype.bind;function zh(n,e){return EE.call(n,e)}var jh=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Rc(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Rc(i)}else Rc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Rc(t)}}},vs=class extends Tr{constructor(e,t,i){super();let r;if(Fe(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&jn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&zh(e.next,s),error:e.error&&zh(e.error,s),complete:e.complete&&zh(e.complete,s)}):r=e}this.destination=new jh(r)}};function Rc(n){jn.useDeprecatedSynchronousErrorHandling?mv(n):Ic(n)}function SE(n){throw n}function Gh(n,e){let{onStoppedNotification:t}=jn;t&&ms.setTimeout(()=>t(n,e))}var wE={closed:!0,next:$o,error:SE,complete:$o};var ys=typeof Symbol=="function"&&Symbol.observable||"@@observable";function mn(n){return n}function Wh(...n){return $h(n)}function $h(n){return n.length===0?mn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var dt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=DE(t)?t:new vs(t,i,r);return gs(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=gv(i),new i((r,s)=>{let o=new vs({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[ys](){return this}pipe(...t){return $h(t)(this)}toPromise(t){return t=gv(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function gv(n){var e;return(e=n??jn.Promise)!==null&&e!==void 0?e:Promise}function CE(n){return n&&Fe(n.next)&&Fe(n.error)&&Fe(n.complete)}function DE(n){return n&&n instanceof Tr||CE(n)&&Ac(n)}function qh(n){return Fe(n?.lift)}function tt(n){return e=>{if(qh(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ye(n,e,t,i,r){return new Xh(n,e,t,i,r)}var Xh=class extends Tr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function _s(){return tt((n,e)=>{let t=null;n._refCount++;let i=Ye(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var xs=class extends dt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,qh(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Rt;let t=this.getSubject();e.add(this.source.subscribe(Ye(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Rt.EMPTY)}return e}refCount(){return _s()(this)}};var vv=ps(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Lt=(()=>{class n extends dt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Nc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new vv}next(t){gs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){gs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){gs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Vh:(this.currentObservers=null,s.push(t),new Rt(()=>{this.currentObservers=null,Wo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new dt;return t.source=this,t}}return n.create=(e,t)=>new Nc(e,t),n})(),Nc=class extends Lt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Vh}};var $t=class extends Lt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var ln=new dt(n=>n.complete());function yv(n){return n&&Fe(n.schedule)}function _v(n){return n[n.length-1]}function Pc(n){return Fe(_v(n))?n.pop():void 0}function Gi(n){return yv(_v(n))?n.pop():void 0}function Mv(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function xv(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ar(n){return this instanceof Ar?(this.v=n,this):new Ar(n)}function bv(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(y){return new Promise(function(m,p){s.push([h,y,m,p])>1||c(h,y)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(y){f(s[0][3],y)}}function l(h){h.value instanceof Ar?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Ev(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof xv=="function"?xv(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Oc=n=>n&&typeof n.length=="number"&&typeof n!="function";function Fc(n){return Fe(n?.then)}function Lc(n){return Fe(n[ys])}function kc(n){return Symbol.asyncIterator&&Fe(n?.[Symbol.asyncIterator])}function Uc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function TE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Bc=TE();function Vc(n){return Fe(n?.[Bc])}function Hc(n){return bv(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Ar(t.read());if(r)return yield Ar(void 0);yield yield Ar(i)}}finally{t.releaseLock()}})}function zc(n){return Fe(n?.getReader)}function Nt(n){if(n instanceof dt)return n;if(n!=null){if(Lc(n))return AE(n);if(Oc(n))return IE(n);if(Fc(n))return RE(n);if(kc(n))return Sv(n);if(Vc(n))return NE(n);if(zc(n))return PE(n)}throw Uc(n)}function AE(n){return new dt(e=>{let t=n[ys]();if(Fe(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function IE(n){return new dt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function RE(n){return new dt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Ic)})}function NE(n){return new dt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Sv(n){return new dt(e=>{OE(n,e).catch(t=>e.error(t))})}function PE(n){return Sv(Hc(n))}function OE(n,e){var t,i,r,s;return Mv(this,void 0,void 0,function*(){try{for(t=Ev(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function un(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Gc(n,e=0){return tt((t,i)=>{t.subscribe(Ye(i,r=>un(i,n,()=>i.next(r),e),()=>un(i,n,()=>i.complete(),e),r=>un(i,n,()=>i.error(r),e)))})}function jc(n,e=0){return tt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function wv(n,e){return Nt(n).pipe(jc(e),Gc(e))}function Cv(n,e){return Nt(n).pipe(jc(e),Gc(e))}function Dv(n,e){return new dt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Tv(n,e){return new dt(t=>{let i;return un(t,e,()=>{i=n[Bc](),un(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Fe(i?.return)&&i.return()})}function Wc(n,e){if(!n)throw new Error("Iterable cannot be null");return new dt(t=>{un(t,e,()=>{let i=n[Symbol.asyncIterator]();un(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Av(n,e){return Wc(Hc(n),e)}function Iv(n,e){if(n!=null){if(Lc(n))return wv(n,e);if(Oc(n))return Dv(n,e);if(Fc(n))return Cv(n,e);if(kc(n))return Wc(n,e);if(Vc(n))return Tv(n,e);if(zc(n))return Av(n,e)}throw Uc(n)}function Dt(n,e){return e?Iv(n,e):Nt(n)}function Le(...n){let e=Gi(n);return Dt(n,e)}function Ms(n,e){let t=Fe(n)?n:()=>n,i=r=>r.error(t());return new dt(e?r=>e.schedule(i,0,r):i)}function Yh(n){return!!n&&(n instanceof dt||Fe(n.lift)&&Fe(n.subscribe))}var bi=ps(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Ze(n,e){return tt((t,i)=>{let r=0;t.subscribe(Ye(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:FE}=Array;function LE(n,e){return FE(e)?n(...e):n(e)}function $c(n){return Ze(e=>LE(n,e))}var{isArray:kE}=Array,{getPrototypeOf:UE,prototype:BE,keys:VE}=Object;function qc(n){if(n.length===1){let e=n[0];if(kE(e))return{args:e,keys:null};if(HE(e)){let t=VE(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function HE(n){return n&&typeof n=="object"&&UE(n)===BE}function Xc(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Yc(...n){let e=Gi(n),t=Pc(n),{args:i,keys:r}=qc(n);if(i.length===0)return Dt([],e);let s=new dt(zE(i,e,r?o=>Xc(r,o):mn));return t?s.pipe($c(t)):s}function zE(n,e,t=mn){return i=>{Rv(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)Rv(e,()=>{let l=Dt(n[c],e),u=!1;l.subscribe(Ye(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Rv(n,e,t){n?un(t,n,e):e()}function Nv(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let m=!1;Nt(t(y,u++)).subscribe(Ye(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?un(e,o,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(Ye(e,h,()=>{d=!0,f()})),()=>{a?.()}}function kt(n,e,t=1/0){return Fe(e)?kt((i,r)=>Ze((s,o)=>e(i,s,r,o))(Nt(n(i,r))),t):(typeof e=="number"&&(t=e),tt((i,r)=>Nv(i,r,n,t)))}function Pv(n=1/0){return kt(mn,n)}function Ov(){return Pv(1)}function bs(...n){return Ov()(Dt(n,Gi(n)))}function Zc(n){return new dt(e=>{Nt(n()).subscribe(e)})}function Zh(...n){let e=Pc(n),{args:t,keys:i}=qc(n),r=new dt(s=>{let{length:o}=t;if(!o){s.complete();return}let a=new Array(o),c=o,l=o;for(let u=0;u<o;u++){let d=!1;Nt(t[u]).subscribe(Ye(s,f=>{d||(d=!0,l--),a[u]=f},()=>c--,void 0,()=>{(!c||!d)&&(l||s.next(i?Xc(i,a):a),s.complete())}))}});return e?r.pipe($c(e)):r}function Wn(n,e){return tt((t,i)=>{let r=0;t.subscribe(Ye(i,s=>n.call(e,s,r++)&&i.next(s)))})}function ji(n){return tt((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Ye(t,void 0,void 0,o=>{s=Nt(n(o,ji(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Fv(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Ye(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function Es(n,e){return Fe(e)?kt(n,e,1):kt(n,1)}function Wi(n){return tt((e,t)=>{let i=!1;e.subscribe(Ye(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Ei(n){return n<=0?()=>ln:tt((e,t)=>{let i=0;e.subscribe(Ye(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Kc(n=GE){return tt((e,t)=>{let i=!1;e.subscribe(Ye(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function GE(){return new bi}function qo(n){return tt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Si(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Wn((r,s)=>n(r,s,i)):mn,Ei(1),t?Wi(e):Kc(()=>new bi))}function Ss(n){return n<=0?()=>ln:tt((e,t)=>{let i=[];e.subscribe(Ye(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Kh(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Wn((r,s)=>n(r,s,i)):mn,Ss(1),t?Wi(e):Kc(()=>new bi))}function Jh(n,e){return tt(Fv(n,e,arguments.length>=2,!0))}function Qh(...n){let e=Gi(n);return tt((t,i)=>{(e?bs(n,t,e):bs(n,t)).subscribe(i)})}function $n(n,e){return tt((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Ye(i,c=>{r?.unsubscribe();let l=0,u=s++;Nt(n(c,u)).subscribe(r=Ye(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function ef(n){return tt((e,t)=>{Nt(n).subscribe(Ye(t,()=>t.complete(),$o)),!t.closed&&e.subscribe(t)})}function qt(n,e,t){let i=Fe(n)||e||t?{next:n,error:e,complete:t}:n;return i?tt((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Ye(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):mn}var jE="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",Se=class extends Error{code;constructor(e,t){super($E(e,t)),this.code=e}};function WE(n){return`NG0${Math.abs(n)}`}function $E(n,e){return`${WE(n)}${e?": "+e:""}`}var Ey=Symbol("InputSignalNode#UNSET"),qE=qe(te({},Cc),{transformFn:void 0,applyValueToInputSignal(n,e){Go(n,e)}});function Sy(n,e){let t=Object.create(qE);t.value=n,t.transformFn=e?.transform;function i(){if(zo(t),t.value===Ey){let r=null;throw new Se(-950,r)}return t.value}return i[Cn]=t,i}function Il(n){return{toString:n}.toString()}function yt(n){for(let e in n)if(n[e]===yt)return e;throw Error("Could not find renamed property on target object.")}function XE(n,e){for(let t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}function dn(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(dn).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function Lv(n,e){return n?e?`${n} ${e}`:n:e||""}var YE=yt({__forward_ref__:yt});function Fs(n){return n.__forward_ref__=Fs,n.toString=function(){return dn(this())},n}function rn(n){return wy(n)?n():n}function wy(n){return typeof n=="function"&&n.hasOwnProperty(YE)&&n.__forward_ref__===Fs}function Re(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Vr(n){return{providers:n.providers||[],imports:n.imports||[]}}function Rl(n){return kv(n,Dy)||kv(n,Ty)}function Cy(n){return Rl(n)!==null}function kv(n,e){return n.hasOwnProperty(e)?n[e]:null}function ZE(n){let e=n&&(n[Dy]||n[Ty]);return e||null}function Uv(n){return n&&(n.hasOwnProperty(Bv)||n.hasOwnProperty(KE))?n[Bv]:null}var Dy=yt({\u0275prov:yt}),Bv=yt({\u0275inj:yt}),Ty=yt({ngInjectableDef:yt}),KE=yt({ngInjectorDef:yt}),be=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Re({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Ay(n){return n&&!!n.\u0275providers}var JE=yt({\u0275cmp:yt}),QE=yt({\u0275dir:yt}),eS=yt({\u0275pipe:yt}),tS=yt({\u0275mod:yt}),rl=yt({\u0275fac:yt}),Ko=yt({__NG_ELEMENT_ID__:yt}),Vv=yt({__NG_ENV_ID__:yt});function sl(n){return typeof n=="string"?n:n==null?"":String(n)}function nS(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():sl(n)}function Iy(n,e){throw new Se(-200,n)}function Jf(n,e){throw new Se(-201,!1)}var Ge=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Ge||{}),gf;function Ry(){return gf}function Dn(n){let e=gf;return gf=n,e}function Ny(n,e,t){let i=Rl(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Ge.Optional)return null;if(e!==void 0)return e;Jf(n,"Injector")}var iS={},Ir=iS,rS="__NG_DI_FLAG__",ol=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=t;return this.injector.get(e,i.optional?Dc:Ir,i)}},al="ngTempTokenPath",sS="ngTokenPath",oS=/\n/gm,aS="\u0275",Hv="__source";function cS(n,e=Ge.Default){if(jo()===void 0)throw new Se(-203,!1);if(jo()===null)return Ny(n,void 0,e);{let t=jo(),i;return t instanceof ol?i=t.injector:i=t,i.get(n,e&Ge.Optional?null:void 0,e)}}function je(n,e=Ge.Default){return(Ry()||cS)(rn(n),e)}function ie(n,e=Ge.Default){return je(n,Nl(e))}function Nl(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function vf(n){let e=[];for(let t=0;t<n.length;t++){let i=rn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Se(900,!1);let r,s=Ge.Default;for(let o=0;o<i.length;o++){let a=i[o],c=lS(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(je(r,s))}else e.push(je(i))}return e}function lS(n){return n[rS]}function uS(n,e,t,i){let r=n[al];throw e[Hv]&&r.unshift(e[Hv]),n.message=dS(`
`+n.message,r,t,i),n[sS]=r,n[al]=null,n}function dS(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==aS?n.slice(2):n;let r=dn(e);if(Array.isArray(e))r=e.map(dn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):dn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(oS,`
  `)}`}function As(n,e){let t=n.hasOwnProperty(rl);return t?n[rl]:null}function Qf(n,e){n.forEach(t=>Array.isArray(t)?Qf(t,e):e(t))}function Py(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function cl(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function hS(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function fS(n,e,t){let i=oa(n,e);return i>=0?n[i|1]=t:(i=~i,hS(n,i,e,t)),i}function tf(n,e){let t=oa(n,e);if(t>=0)return n[t|1]}function oa(n,e){return pS(n,e,1)}function pS(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var Nr={},Tn=[],Jo=new be(""),Oy=new be("",-1),Fy=new be(""),ll=class{get(e,t=Ir){if(t===Ir){let i=new Error(`NullInjectorError: No provider for ${dn(e)}!`);throw i.name="NullInjectorError",i}return t}};function Ly(n,e){let t=n[tS]||null;if(!t&&e===!0)throw new Error(`Type ${dn(n)} does not have '\u0275mod' property.`);return t}function Is(n){return n[JE]||null}function mS(n){return n[QE]||null}function gS(n){return n[eS]||null}function ep(n){return{\u0275providers:n}}function vS(...n){return{\u0275providers:ky(!0,n),\u0275fromNgModule:!0}}function ky(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Qf(e,o=>{let a=o;yf(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Uy(r,s),t}function Uy(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];tp(r,s=>{e(s,i)})}}function yf(n,e,t,i){if(n=rn(n),!n)return!1;let r=null,s=Uv(n),o=!s&&Is(n);if(!s&&!o){let c=n.ngModule;if(s=Uv(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)yf(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Qf(s.imports,u=>{yf(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Uy(l,e)}if(!a){let l=As(r)||(()=>new r);e({provide:r,useFactory:l,deps:Tn},r),e({provide:Fy,useValue:r,multi:!0},r),e({provide:Jo,useValue:()=>je(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;tp(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function tp(n,e){for(let t of n)Ay(t)&&(t=t.\u0275providers),Array.isArray(t)?tp(t,e):e(t)}var yS=yt({provide:String,useValue:yt});function By(n){return n!==null&&typeof n=="object"&&yS in n}function _S(n){return!!(n&&n.useExisting)}function xS(n){return!!(n&&n.useFactory)}function Rs(n){return typeof n=="function"}function MS(n){return!!n.useClass}var Pl=new be(""),Qc={},zv={},nf;function np(){return nf===void 0&&(nf=new ll),nf}var Rn=class{},Qo=class extends Rn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,xf(e,o=>this.processProvider(o)),this.records.set(Oy,ws(void 0,this)),r.has("environment")&&this.records.set(Rn,ws(void 0,this));let s=this.records.get(Pl);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Fy,Tn,Ge.Self))}retrieve(e,t){let i=t;return this.get(e,i.optional?Dc:Ir,i)}destroy(){Yo(this),this._destroyed=!0;let e=et(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),et(e)}}onDestroy(e){return Yo(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Yo(this);let t=Mi(this),i=Dn(void 0),r;try{return e()}finally{Mi(t),Dn(i)}}get(e,t=Ir,i=Ge.Default){if(Yo(this),e.hasOwnProperty(Vv))return e[Vv](this);i=Nl(i);let r,s=Mi(this),o=Dn(void 0);try{if(!(i&Ge.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=CS(e)&&Rl(e);l&&this.injectableDefInScope(l)?c=ws(_f(e),Qc):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&Ge.Self?np():this.parent;return t=i&Ge.Optional&&t===Ir?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[al]=a[al]||[]).unshift(dn(e)),s)throw a;return uS(a,e,"R3InjectorError",this.source)}else throw a}finally{Dn(o),Mi(s)}}resolveInjectorInitializers(){let e=et(null),t=Mi(this),i=Dn(void 0),r;try{let s=this.get(Jo,Tn,Ge.Self);for(let o of s)o()}finally{Mi(t),Dn(i),et(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(dn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=rn(e);let t=Rs(e)?e:rn(e&&e.provide),i=ES(e);if(!Rs(e)&&e.multi===!0){let r=this.records.get(t);r||(r=ws(void 0,Qc,!0),r.factory=()=>vf(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=et(null);try{return t.value===zv?Iy(dn(e)):t.value===Qc&&(t.value=zv,t.value=t.factory()),typeof t.value=="object"&&t.value&&wS(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{et(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=rn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function _f(n){let e=Rl(n),t=e!==null?e.factory:As(n);if(t!==null)return t;if(n instanceof be)throw new Se(204,!1);if(n instanceof Function)return bS(n);throw new Se(204,!1)}function bS(n){if(n.length>0)throw new Se(204,!1);let t=ZE(n);return t!==null?()=>t.factory(n):()=>new n}function ES(n){if(By(n))return ws(void 0,n.useValue);{let e=Vy(n);return ws(e,Qc)}}function Vy(n,e,t){let i;if(Rs(n)){let r=rn(n);return As(r)||_f(r)}else if(By(n))i=()=>rn(n.useValue);else if(xS(n))i=()=>n.useFactory(...vf(n.deps||[]));else if(_S(n))i=()=>je(rn(n.useExisting));else{let r=rn(n&&(n.useClass||n.provide));if(SS(n))i=()=>new r(...vf(n.deps));else return As(r)||_f(r)}return i}function Yo(n){if(n.destroyed)throw new Se(205,!1)}function ws(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function SS(n){return!!n.deps}function wS(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function CS(n){return typeof n=="function"||typeof n=="object"&&n instanceof be}function xf(n,e){for(let t of n)Array.isArray(t)?xf(t,e):t&&Ay(t)?xf(t.\u0275providers,e):e(t)}function Yn(n,e){let t;n instanceof Qo?(Yo(n),t=n):t=new ol(n);let i,r=Mi(t),s=Dn(void 0);try{return e()}finally{Mi(r),Dn(s)}}function DS(){return Ry()!==void 0||jo()!=null}function TS(n){return typeof n=="function"}var Di=0,nt=1,Be=2,sn=3,Xn=4,Zn=5,ul=6,dl=7,Nn=8,Pr=9,Xi=10,Gt=11,ea=12,Gv=13,aa=14,oi=15,ta=16,Cs=17,Ol=18,Fl=19,Hy=20,$i=21,rf=22,hl=23,An=24,sf=25,Yi=26,zy=1;var Or=7,fl=8,pl=9,In=10;function qi(n){return Array.isArray(n)&&typeof n[zy]=="object"}function Ti(n){return Array.isArray(n)&&n[zy]===!0}function Gy(n){return(n.flags&4)!==0}function Ls(n){return n.componentOffset>-1}function jy(n){return(n.flags&1)===1}function ai(n){return!!n.template}function ml(n){return(n[Be]&512)!==0}function ks(n){return(n[Be]&256)===256}var Mf=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Wy(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var ca=(()=>{let n=()=>$y;return n.ngInherit=!0,n})();function $y(n){return n.type.prototype.ngOnChanges&&(n.setInput=IS),AS}function AS(){let n=Xy(this),e=n?.current;if(e){let t=n.previous;if(t===Nr)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function IS(n,e,t,i,r){let s=this.declaredInputs[i],o=Xy(n)||RS(n,{previous:Nr,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Mf(l&&l.currentValue,t,c===Nr),Wy(n,e,r,t)}var qy="__ngSimpleChanges__";function Xy(n){return n[qy]||null}function RS(n,e){return n[qy]=e}var jv=null;var xt=function(n,e=null,t){jv?.(n,e,t)},NS="svg",PS="math";function ci(n){for(;Array.isArray(n);)n=n[Di];return n}function Yy(n,e){return ci(e[n])}function Ai(n,e){return ci(e[n.index])}function Zy(n,e){return n.data[e]}function li(n,e){let t=e[n];return qi(t)?t:t[Di]}function ip(n){return(n[Be]&128)===128}function OS(n){return Ti(n[sn])}function Wv(n,e){return e==null?null:n[e]}function Ky(n){n[Cs]=0}function Jy(n){n[Be]&1024||(n[Be]|=1024,ip(n)&&kl(n))}function Ll(n){return!!(n[Be]&9216||n[An]?.dirty)}function bf(n){n[Xi].changeDetectionScheduler?.notify(8),n[Be]&64&&(n[Be]|=1024),Ll(n)&&kl(n)}function kl(n){n[Xi].changeDetectionScheduler?.notify(0);let e=Fr(n);for(;e!==null&&!(e[Be]&8192||(e[Be]|=8192,!ip(e)));)e=Fr(e)}function Qy(n,e){if(ks(n))throw new Se(911,!1);n[$i]===null&&(n[$i]=[]),n[$i].push(e)}function FS(n,e){if(n[$i]===null)return;let t=n[$i].indexOf(e);t!==-1&&n[$i].splice(t,1)}function Fr(n){let e=n[sn];return Ti(e)?e[sn]:e}function e_(n){return n[dl]??=[]}function t_(n){return n.cleanup??=[]}var st={lFrame:l_(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Ef=!1;function LS(){return st.lFrame.elementDepthCount}function kS(){st.lFrame.elementDepthCount++}function US(){st.lFrame.elementDepthCount--}function BS(){return st.bindingsEnabled}function VS(){return st.skipHydrationRootTNode!==null}function HS(n){return st.skipHydrationRootTNode===n}function zS(){st.skipHydrationRootTNode=null}function Pt(){return st.lFrame.lView}function Pn(){return st.lFrame.tView}function Kn(){let n=n_();for(;n!==null&&n.type===64;)n=n.parent;return n}function n_(){return st.lFrame.currentTNode}function GS(){let n=st.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Ul(n,e){let t=st.lFrame;t.currentTNode=n,t.isParent=e}function i_(){return st.lFrame.isParent}function jS(){st.lFrame.isParent=!1}function r_(){return Ef}function $v(n){let e=Ef;return Ef=n,e}function WS(){return st.lFrame.bindingIndex}function $S(n){return st.lFrame.bindingIndex=n}function rp(){return st.lFrame.bindingIndex++}function s_(n){let e=st.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function qS(){return st.lFrame.inI18n}function XS(n,e){let t=st.lFrame;t.bindingIndex=t.bindingRootIndex=n,Sf(e)}function YS(){return st.lFrame.currentDirectiveIndex}function Sf(n){st.lFrame.currentDirectiveIndex=n}function ZS(n){let e=st.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function o_(n){st.lFrame.currentQueryIndex=n}function KS(n){let e=n[nt];return e.type===2?e.declTNode:e.type===1?n[Zn]:null}function a_(n,e,t){if(t&Ge.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Ge.Host);)if(r=KS(s),r===null||(s=s[aa],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=st.lFrame=c_();return i.currentTNode=e,i.lView=n,!0}function sp(n){let e=c_(),t=n[nt];st.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function c_(){let n=st.lFrame,e=n===null?null:n.child;return e===null?l_(n):e}function l_(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function u_(){let n=st.lFrame;return st.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var d_=u_;function op(){let n=u_();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Us(){return st.lFrame.selectedIndex}function Lr(n){st.lFrame.selectedIndex=n}function ap(){let n=st.lFrame;return Zy(n.tView,n.selectedIndex)}function JS(){return st.lFrame.currentNamespace}var h_=!0;function f_(){return h_}function p_(n){h_=n}function QS(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=$y(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function ew(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function el(n,e,t){m_(n,e,3,t)}function tl(n,e,t,i){(n[Be]&3)===t&&m_(n,e,t,i)}function of(n,e){let t=n[Be];(t&3)===e&&(t&=16383,t+=1,n[Be]=t)}function m_(n,e,t,i){let r=i!==void 0?n[Cs]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Cs]+=65536),(a<s||s==-1)&&(tw(n,t,e,c),n[Cs]=(n[Cs]&4294901760)+c+2),c++}function qv(n,e){xt(4,n,e);let t=et(null);try{e.call(n)}finally{et(t),xt(5,n,e)}}function tw(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Be]>>14<n[Cs]>>16&&(n[Be]&3)===e&&(n[Be]+=16384,qv(a,s)):qv(a,s)}var Ts=-1,kr=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function nw(n){return(n.flags&8)!==0}function iw(n){return(n.flags&16)!==0}function rw(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];ow(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function sw(n){return n===3||n===4||n===6}function ow(n){return n.charCodeAt(0)===64}function gl(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Xv(n,t,r,null,e[++i]):Xv(n,t,r,null,null))}}return n}function Xv(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function g_(n){return n!==Ts}function vl(n){return n&32767}function aw(n){return n>>16}function yl(n,e){let t=aw(n),i=e;for(;t>0;)i=i[aa],t--;return i}var wf=!0;function Yv(n){let e=wf;return wf=n,e}var cw=256,v_=cw-1,y_=5,lw=0,si={};function uw(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Ko)&&(i=t[Ko]),i==null&&(i=t[Ko]=lw++);let r=i&v_,s=1<<r;e.data[n+(r>>y_)]|=s}function _l(n,e){let t=__(n,e);if(t!==-1)return t;let i=e[nt];i.firstCreatePass&&(n.injectorIndex=e.length,af(i.data,n),af(e,null),af(i.blueprint,null));let r=cp(n,e),s=n.injectorIndex;if(g_(r)){let o=vl(r),a=yl(r,e),c=a[nt].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function af(n,e){n.push(0,0,0,0,0,0,0,0,e)}function __(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function cp(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=S_(r),i===null)return Ts;if(t++,r=r[aa],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Ts}function Cf(n,e,t){uw(n,e,t)}function x_(n,e,t){if(t&Ge.Optional||n!==void 0)return n;Jf(e,"NodeInjector")}function M_(n,e,t,i){if(t&Ge.Optional&&i===void 0&&(i=null),(t&(Ge.Self|Ge.Host))===0){let r=n[Pr],s=Dn(void 0);try{return r?r.get(e,i,t&Ge.Optional):Ny(e,i,t&Ge.Optional)}finally{Dn(s)}}return x_(i,e,t)}function b_(n,e,t,i=Ge.Default,r){if(n!==null){if(e[Be]&2048&&!(i&Ge.Self)){let o=mw(n,e,t,i,si);if(o!==si)return o}let s=E_(n,e,t,i,si);if(s!==si)return s}return M_(e,t,i,r)}function E_(n,e,t,i,r){let s=fw(t);if(typeof s=="function"){if(!a_(e,n,i))return i&Ge.Host?x_(r,t,i):M_(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Ge.Optional))Jf(t);else return o}finally{d_()}}else if(typeof s=="number"){let o=null,a=__(n,e),c=Ts,l=i&Ge.Host?e[oi][Zn]:null;for((a===-1||i&Ge.SkipSelf)&&(c=a===-1?cp(n,e):e[a+8],c===Ts||!Kv(i,!1)?a=-1:(o=e[nt],a=vl(c),e=yl(c,e)));a!==-1;){let u=e[nt];if(Zv(s,a,u.data)){let d=dw(a,e,t,o,i,l);if(d!==si)return d}c=e[a+8],c!==Ts&&Kv(i,e[nt].data[a+8]===l)&&Zv(s,a,e)?(o=u,a=vl(c),e=yl(c,e)):a=-1}}return r}function dw(n,e,t,i,r,s){let o=e[nt],a=o.data[n+8],c=i==null?Ls(a)&&wf:i!=o&&(a.type&3)!==0,l=r&Ge.Host&&s===a,u=hw(a,o,t,c,l);return u!==null?xl(e,o,u,a):si}function hw(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&ai(h)&&h.type===t)return c}return null}function xl(n,e,t,i){let r=n[t],s=e.data;if(r instanceof kr){let o=r;o.resolving&&Iy(nS(s[t]));let a=Yv(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Dn(o.injectImpl):null,u=a_(n,i,Ge.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&QS(t,s[t],e)}finally{l!==null&&Dn(l),Yv(a),o.resolving=!1,d_()}}return r}function fw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Ko)?n[Ko]:void 0;return typeof e=="number"?e>=0?e&v_:pw:e}function Zv(n,e,t){let i=1<<n;return!!(t[e+(n>>y_)]&i)}function Kv(n,e){return!(n&Ge.Self)&&!(n&Ge.Host&&e)}var Rr=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return b_(this._tNode,this._lView,e,Nl(i),t)}};function pw(){return new Rr(Kn(),Pt())}function Bs(n){return Il(()=>{let e=n.prototype.constructor,t=e[rl]||Df(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[rl]||Df(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Df(n){return wy(n)?()=>{let e=Df(rn(n));return e&&e()}:As(n)}function mw(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Be]&2048&&!ml(o);){let a=E_(s,o,t,i|Ge.Self,si);if(a!==si)return a;let c=s.parent;if(!c){let l=o[Hy];if(l){let u=l.get(t,si,i);if(u!==si)return u}c=S_(o),o=o[aa]}s=c}return r}function S_(n){let e=n[nt],t=e.type;return t===2?e.declTNode:t===1?n[Zn]:null}function Jv(n,e=null,t=null,i){let r=w_(n,e,t,i);return r.resolveInjectorInitializers(),r}function w_(n,e=null,t=null,i,r=new Set){let s=[t||Tn,vS(n)];return i=i||(typeof n=="object"?void 0:dn(n)),new Qo(s,e||np(),i||null,r)}var wi=class n{static THROW_IF_NOT_FOUND=Ir;static NULL=new ll;static create(e,t){if(Array.isArray(e))return Jv({name:""},t,e,"");{let i=e.name??"";return Jv({name:i},e.parent,e.providers,i)}}static \u0275prov=Re({token:n,providedIn:"any",factory:()=>je(Oy)});static __NG_ELEMENT_ID__=-1};var gw=new be("");gw.__NG_ELEMENT_ID__=n=>{let e=Kn();if(e===null)throw new Se(204,!1);if(e.type&2)return e.value;if(n&Ge.Optional)return null;throw new Se(204,!1)};var C_=!1,Bl=(()=>{class n{static __NG_ELEMENT_ID__=vw;static __NG_ENV_ID__=t=>t}return n})(),Tf=class extends Bl{_lView;constructor(e){super(),this._lView=e}onDestroy(e){let t=this._lView;return ks(t)?(e(),()=>{}):(Qy(t,e),()=>FS(t,e))}};function vw(){return new Tf(Pt())}var na=class{},lp=new be("",{providedIn:"root",factory:()=>!1});var D_=new be(""),T_=new be(""),Vs=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new $t(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=Re({token:n,providedIn:"root",factory:()=>new n})}return n})();var Af=class extends Lt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,DS()&&(this.destroyRef=ie(Bl,{optional:!0})??void 0,this.pendingTasks=ie(Vs,{optional:!0})??void 0)}emit(e){let t=et(null);try{super.next(e)}finally{et(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Rt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Ht=Af;function Ml(...n){}function A_(n){let e,t;function i(){n=Ml;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function Qv(n){return queueMicrotask(()=>n()),()=>{n=Ml}}var up="isAngularZone",bl=up+"_ID",yw=0,zt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Ht(!1);onMicrotaskEmpty=new Ht(!1);onStable=new Ht(!1);onError=new Ht(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=C_}=e;if(typeof Zone>"u")throw new Se(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,Mw(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(up)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Se(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Se(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,_w,Ml,Ml);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},_w={};function dp(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function xw(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){A_(()=>{n.callbackScheduled=!1,If(n),n.isCheckStableRunning=!0,dp(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),If(n)}function Mw(n){let e=()=>{xw(n)},t=yw++;n._inner=n._inner.fork({name:"angular",properties:{[up]:!0,[bl]:t,[bl+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(bw(c))return i.invokeTask(s,o,a,c);try{return ey(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),ty(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return ey(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!Ew(c)&&e(),ty(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,If(n),dp(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function If(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function ey(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function ty(n){n._nesting--,dp(n)}var Rf=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Ht;onMicrotaskEmpty=new Ht;onStable=new Ht;onError=new Ht;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function bw(n){return I_(n,"__ignore_ng_zone__")}function Ew(n){return I_(n,"__scheduler_tick__")}function I_(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Ci=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Sw=new be("",{providedIn:"root",factory:()=>{let n=ie(zt),e=ie(Ci);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function ny(n,e){return Sy(n,e)}function ww(n){return Sy(Ey,n)}var R_=(ny.required=ww,ny);function Cw(){return hp(Kn(),Pt())}function hp(n,e){return new la(Ai(n,e))}var la=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=Cw}return n})();function Dw(n){return typeof n=="function"&&n[Cn]!==void 0}function Vl(n,e){let t=Lh(n,e?.equal),i=t[Cn];return t.set=r=>Go(i,r),t.update=r=>kh(i,r),t.asReadonly=Tw.bind(t),t}function Tw(){let n=this[Cn];if(n.readonlyFn===void 0){let e=()=>this();e[Cn]=n,n.readonlyFn=e}return n.readonlyFn}function N_(n){return Dw(n)&&typeof n.set=="function"}function P_(n){return(n.flags&128)===128}var O_=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(O_||{}),F_=new Map,Aw=0;function Iw(){return Aw++}function Rw(n){F_.set(n[Fl],n)}function Nf(n){F_.delete(n[Fl])}var iy="__ngContext__";function Hl(n,e){qi(e)?(n[iy]=e[Fl],Rw(e)):n[iy]=e}function L_(n){return U_(n[ea])}function k_(n){return U_(n[Xn])}function U_(n){for(;n!==null&&!Ti(n);)n=n[Xn];return n}var Pf;function B_(n){Pf=n}function Nw(){if(Pf!==void 0)return Pf;if(typeof document<"u")return document;throw new Se(210,!1)}var zl=new be("",{providedIn:"root",factory:()=>Pw}),Pw="ng",fp=new be(""),ua=new be("",{providedIn:"platform",factory:()=>"unknown"});var pp=new be("",{providedIn:"root",factory:()=>Nw().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Ow="h",Fw="b";var V_=!1,Lw=new be("",{providedIn:"root",factory:()=>V_});var H_=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(H_||{}),Gl=new be(""),ry=new Set;function mp(n){ry.has(n)||(ry.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var kw=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Re({token:n,providedIn:"root",factory:()=>new n})}return n})();var Uw=()=>null;function z_(n,e,t=!1){return Uw(n,e,t)}function G_(n,e){let t=n.contentQueries;if(t!==null){let i=et(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];o_(s),a.contentQueries(2,e[o],o)}}}finally{et(i)}}}function Of(n,e,t){o_(0);let i=et(null);try{e(n,t)}finally{et(i)}}function j_(n,e,t){if(Gy(e)){let i=et(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{et(i)}}}var ui=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(ui||{});var Ff=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${jE})`}};function Bw(n){return n instanceof Ff?n.changingThisBreaksApplicationSecurity:n}function W_(n){return n instanceof Function?n():n}function Vw(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var $_="ng-template";function Hw(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&Vw(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(gp(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function gp(n){return n.type===4&&n.value!==$_}function zw(n,e,t){let i=n.type===4&&!t?$_:n.value;return e===i}function Gw(n,e,t){let i=4,r=n.attrs,s=r!==null?$w(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!qn(i)&&!qn(c))return!1;if(o&&qn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!zw(n,c,t)||c===""&&e.length===1){if(qn(i))return!1;o=!0}}else if(i&8){if(r===null||!Hw(n,r,c,t)){if(qn(i))return!1;o=!0}}else{let l=e[++a],u=jw(c,r,gp(n),t);if(u===-1){if(qn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(qn(i))return!1;o=!0}}}}return qn(i)||o}function qn(n){return(n&1)===0}function jw(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return qw(e,n)}function Ww(n,e,t=!1){for(let i=0;i<e.length;i++)if(Gw(n,e[i],t))return!0;return!1}function $w(n){for(let e=0;e<n.length;e++){let t=n[e];if(sw(t))return e}return n.length}function qw(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function sy(n,e){return n?":not("+e.trim()+")":e}function Xw(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!qn(o)&&(e+=sy(s,r),r=""),i=o,s=s||!qn(i);t++}return r!==""&&(e+=sy(s,r)),e}function Yw(n){return n.map(Xw).join(",")}function Zw(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!qn(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Ki={};function Kw(n,e){return n.createText(e)}function Jw(n,e,t){n.setValue(e,t)}function q_(n,e,t){return n.createElement(e,t)}function El(n,e,t,i,r){n.insertBefore(e,t,i,r)}function X_(n,e,t){n.appendChild(e,t)}function oy(n,e,t,i,r){i!==null?El(n,e,t,i,r):X_(n,e,t)}function Qw(n,e,t){n.removeChild(null,e,t)}function eC(n,e,t){n.setAttribute(e,"style",t)}function tC(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Y_(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&rw(n,e,i),r!==null&&tC(n,e,r),s!==null&&eC(n,e,s)}function Z_(n,e,t,i,r,s,o,a,c,l,u){let d=Yi+i,f=d+r,h=nC(d,f),g=typeof l=="function"?l():l;return h[nt]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function nC(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Ki);return t}function iC(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Z_(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function K_(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[Di]=r,d[Be]=i|4|128|8|64|1024,(l!==null||n&&n[Be]&2048)&&(d[Be]|=2048),Ky(d),d[sn]=d[aa]=n,d[Nn]=t,d[Xi]=o||n&&n[Xi],d[Gt]=a||n&&n[Gt],d[Pr]=c||n&&n[Pr]||null,d[Zn]=s,d[Fl]=Iw(),d[ul]=u,d[Hy]=l,d[oi]=e.type==2?n[oi]:d,d}function rC(n,e,t){let i=Ai(e,n),r=iC(t),s=n[Xi].rendererFactory,o=e0(n,K_(n,r,null,J_(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function J_(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function Q_(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function e0(n,e){return n[ea]?n[Gv][Xn]=e:n[ea]=e,n[Gv]=e,e}function jl(n=1){t0(Pn(),Pt(),Us()+n,!1)}function t0(n,e,t,i){if(!i)if((e[Be]&3)===3){let s=n.preOrderCheckHooks;s!==null&&el(e,s,t)}else{let s=n.preOrderHooks;s!==null&&tl(e,s,0,t)}Lr(t)}var Wl=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Wl||{});function Lf(n,e,t,i){let r=et(null);try{let[s,o,a]=n.inputs[t],c=null;(o&Wl.SignalBased)!==0&&(c=e[s][Cn]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):Wy(e,c,s,i)}finally{et(r)}}function n0(n,e,t,i,r){let s=Us(),o=i&2;try{Lr(-1),o&&e.length>Yi&&t0(n,e,Yi,!1),xt(o?2:0,r),t(i,r)}finally{Lr(s),xt(o?3:1,r)}}function i0(n,e,t){dC(n,e,t),(t.flags&64)===64&&hC(n,e,t)}function sC(n,e,t=Ai){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function oC(n,e,t,i){let s=i.get(Lw,V_)||t===ui.ShadowDom,o=n.selectRootElement(e,s);return aC(o),o}function aC(n){cC(n)}var cC=()=>null;function lC(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function vp(n,e,t,i,r,s,o,a){if(!a&&yp(e,n,t,i,r)){Ls(e)&&uC(t,e.index);return}if(e.type&3){let c=Ai(e,t);i=lC(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)}else e.type&12}function uC(n,e){let t=li(e,n);t[Be]&16||(t[Be]|=64)}function dC(n,e,t){let i=t.directiveStart,r=t.directiveEnd;Ls(t)&&rC(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||_l(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=xl(e,n,o,t);if(Hl(c,e),s!==null&&mC(e,o-i,c,a,t,s),ai(a)){let l=li(t.index,e);l[Nn]=xl(e,n,o,t)}}}function hC(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=YS();try{Lr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Sf(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&fC(c,l)}}finally{Lr(-1),Sf(o)}}function fC(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function pC(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];Ww(e,s.selectors,!1)&&(i??=[],ai(s)?i.unshift(s):i.push(s))}return i}function mC(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];Lf(i,t,c,l)}}function gC(n,e){let t=n[Pr],i=t?t.get(Ci,null):null;i&&i.handleError(e)}function yp(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];Lf(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];Lf(u,l,i,r),a=!0}return a}function vC(n,e){let t=li(e,n),i=t[nt];yC(i,t);let r=t[Di];r!==null&&t[ul]===null&&(t[ul]=z_(r,t[Pr])),xt(18),r0(i,t,t[Nn]),xt(19,t[Nn])}function yC(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function r0(n,e,t){sp(e);try{let i=n.viewQuery;i!==null&&Of(1,i,t);let r=n.template;r!==null&&n0(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Ol]?.finishViewCreation(n),n.staticContentQueries&&G_(n,e),n.staticViewQueries&&Of(2,n.viewQuery,t);let s=n.components;s!==null&&_C(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Be]&=-5,op()}}function _C(n,e){for(let t=0;t<e.length;t++)vC(n,e[t])}function ay(n,e){return!e||e.firstChild===null||P_(n)}var xC;function _p(n,e){return xC(n,e)}var Zi=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Zi||{});function s0(n){return(n.flags&32)===32}function Ds(n,e,t,i,r){if(i!=null){let s,o=!1;Ti(i)?s=i:qi(i)&&(o=!0,i=i[Di]);let a=ci(i);n===0&&t!==null?r==null?X_(e,t,a):El(e,t,a,r||null,!0):n===1&&t!==null?El(e,t,a,r||null,!0):n===2?Qw(e,a,o):n===3&&e.destroyNode(a),s!=null&&NC(e,n,s,t,r)}}function MC(n,e){o0(n,e),e[Di]=null,e[Zn]=null}function bC(n,e,t,i,r,s){i[Di]=r,i[Zn]=e,$l(n,i,t,1,r,s)}function o0(n,e){e[Xi].changeDetectionScheduler?.notify(9),$l(n,e,e[Gt],2,null,null)}function EC(n){let e=n[ea];if(!e)return cf(n[nt],n);for(;e;){let t=null;if(qi(e))t=e[ea];else{let i=e[In];i&&(t=i)}if(!t){for(;e&&!e[Xn]&&e!==n;)qi(e)&&cf(e[nt],e),e=e[sn];e===null&&(e=n),qi(e)&&cf(e[nt],e),t=e&&e[Xn]}e=t}}function xp(n,e){let t=n[pl],i=t.indexOf(e);t.splice(i,1)}function a0(n,e){if(ks(e))return;let t=e[Gt];t.destroyNode&&$l(n,e,t,3,null,null),EC(e)}function cf(n,e){if(ks(e))return;let t=et(null);try{e[Be]&=-129,e[Be]|=256,e[An]&&Ph(e[An]),wC(n,e),SC(n,e),e[nt].type===1&&e[Gt].destroy();let i=e[ta];if(i!==null&&Ti(e[sn])){i!==e[sn]&&xp(i,e);let r=e[Ol];r!==null&&r.detachView(n)}Nf(e)}finally{et(t)}}function SC(n,e){let t=n.cleanup,i=e[dl];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[dl]=null);let r=e[$i];if(r!==null){e[$i]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[hl];if(s!==null){e[hl]=null;for(let o of s)o.destroy()}}function wC(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof kr)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];xt(4,a,c);try{c.call(a)}finally{xt(5,a,c)}}else{xt(4,r,s);try{s.call(r)}finally{xt(5,r,s)}}}}}function CC(n,e,t){return DC(n,e.parent,t)}function DC(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[Di];if(Ls(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===ui.None||r===ui.Emulated)return null}return Ai(i,t)}function TC(n,e,t){return IC(n,e,t)}function AC(n,e,t){return n.type&40?Ai(n,t):null}var IC=AC,cy;function c0(n,e,t,i){let r=CC(n,i,e),s=e[Gt],o=i.parent||e[Zn],a=TC(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)oy(s,r,t[c],a,!1);else oy(s,r,t,a,!1);cy!==void 0&&cy(s,i,e,t,r)}function Zo(n,e){if(e!==null){let t=e.type;if(t&3)return Ai(e,n);if(t&4)return kf(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Zo(n,i);{let r=n[e.index];return Ti(r)?kf(-1,r):ci(r)}}else{if(t&128)return Zo(n,e.next);if(t&32)return _p(e,n)()||ci(n[e.index]);{let i=l0(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Fr(n[oi]);return Zo(r,i)}else return Zo(n,e.next)}}}return null}function l0(n,e){if(e!==null){let i=n[oi][Zn],r=e.projection;return i.projection[r]}return null}function kf(n,e){let t=In+n+1;if(t<e.length){let i=e[t],r=i[nt].firstChild;if(r!==null)return Zo(i,r)}return e[Or]}function Mp(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Hl(ci(a),i),t.flags|=2),!s0(t))if(c&8)Mp(n,e,t.child,i,r,s,!1),Ds(e,n,r,a,s);else if(c&32){let l=_p(t,i),u;for(;u=l();)Ds(e,n,r,u,s);Ds(e,n,r,a,s)}else c&16?RC(n,e,i,t,r,s):Ds(e,n,r,a,s);t=o?t.projectionNext:t.next}}function $l(n,e,t,i,r,s){Mp(t,i,n.firstChild,e,r,s,!1)}function RC(n,e,t,i,r,s){let o=t[oi],c=o[Zn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Ds(e,n,r,u,s)}else{let l=c,u=o[sn];P_(i)&&(l.flags|=128),Mp(n,e,l,u,r,s,!0)}}function NC(n,e,t,i,r){let s=t[Or],o=ci(t);s!==o&&Ds(e,n,i,s,r);for(let a=In;a<t.length;a++){let c=t[a];$l(c[nt],c,n,e,i,s)}}function PC(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:Zi.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=Zi.Important),n.setStyle(t,i,r,s))}}function Sl(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(ci(s)),Ti(s)&&OC(s,i);let o=t.type;if(o&8)Sl(n,e,t.child,i);else if(o&32){let a=_p(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=l0(e,t);if(Array.isArray(a))i.push(...a);else{let c=Fr(e[oi]);Sl(c[nt],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function OC(n,e){for(let t=In;t<n.length;t++){let i=n[t],r=i[nt].firstChild;r!==null&&Sl(i[nt],i,r,e)}n[Or]!==n[Di]&&e.push(n[Or])}function u0(n){if(n[sf]!==null){for(let e of n[sf])e.impl.addSequence(e);n[sf].length=0}}var d0=[];function FC(n){return n[An]??LC(n)}function LC(n){let e=d0.pop()??Object.create(UC);return e.lView=n,e}function kC(n){n.lView[An]!==n&&(n.lView=null,d0.push(n))}var UC=qe(te({},Ho),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{kl(n.lView)},consumerOnSignalRead(){this.lView[An]=this}});function BC(n){let e=n[An]??Object.create(VC);return e.lView=n,e}var VC=qe(te({},Ho),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Fr(n.lView);for(;e&&!h0(e[nt]);)e=Fr(e);e&&Jy(e)},consumerOnSignalRead(){this.lView[An]=this}});function h0(n){return n.type!==2}function f0(n){if(n[hl]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[hl])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Be]&8192)}}var HC=100;function p0(n,e=!0,t=0){let r=n[Xi].rendererFactory,s=!1;s||r.begin?.();try{zC(n,t)}catch(o){throw e&&gC(n,o),o}finally{s||r.end?.()}}function zC(n,e){let t=r_();try{$v(!0),Uf(n,e);let i=0;for(;Ll(n);){if(i===HC)throw new Se(103,!1);i++,Uf(n,1)}}finally{$v(t)}}function GC(n,e,t,i){if(ks(e))return;let r=e[Be],s=!1,o=!1;sp(e);let a=!0,c=null,l=null;s||(h0(n)?(l=FC(e),c=Ec(l)):Dh()===null?(a=!1,l=BC(e),c=Ec(l)):e[An]&&(Ph(e[An]),e[An]=null));try{Ky(e),$S(n.bindingStartIndex),t!==null&&n0(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&el(e,h,null)}else{let h=n.preOrderHooks;h!==null&&tl(e,h,0,null),of(e,0)}if(o||jC(e),f0(e),m0(e,0),n.contentQueries!==null&&G_(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&el(e,h)}else{let h=n.contentHooks;h!==null&&tl(e,h,1),of(e,1)}$C(n,e);let d=n.components;d!==null&&v0(e,d,0);let f=n.viewQuery;if(f!==null&&Of(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&el(e,h)}else{let h=n.viewHooks;h!==null&&tl(e,h,2),of(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[rf]){for(let h of e[rf])h();e[rf]=null}s||(u0(e),e[Be]&=-73)}catch(u){throw s||kl(e),u}finally{l!==null&&(Rh(l,c),a&&kC(l)),op()}}function m0(n,e){for(let t=L_(n);t!==null;t=k_(t))for(let i=In;i<t.length;i++){let r=t[i];g0(r,e)}}function jC(n){for(let e=L_(n);e!==null;e=k_(e)){if(!(e[Be]&2))continue;let t=e[pl];for(let i=0;i<t.length;i++){let r=t[i];Jy(r)}}}function WC(n,e,t){xt(18);let i=li(e,n);g0(i,t),xt(19,i[Nn])}function g0(n,e){ip(n)&&Uf(n,e)}function Uf(n,e){let i=n[nt],r=n[Be],s=n[An],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Nh(s)),o||=!1,s&&(s.dirty=!1),n[Be]&=-9217,o)GC(i,n,i.template,n[Nn]);else if(r&8192){f0(n),m0(n,1);let a=i.components;a!==null&&v0(n,a,1),u0(n)}}function v0(n,e,t){for(let i=0;i<e.length;i++)WC(n,e[i],t)}function $C(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Lr(~r);else{let s=r,o=t[++i],a=t[++i];XS(o,s);let c=e[s];xt(24,c),a(2,c),xt(25,c)}}}finally{Lr(-1)}}function bp(n,e){let t=r_()?64:1088;for(n[Xi].changeDetectionScheduler?.notify(e);n;){n[Be]|=t;let i=Fr(n);if(ml(n)&&!i)return n;n=i}return null}function qC(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function XC(n,e,t,i=!0){let r=e[nt];if(YC(r,e,n,t),i){let o=kf(t,n),a=e[Gt],c=a.parentNode(n[Or]);c!==null&&bC(r,n[Zn],a,e,c,o)}let s=e[ul];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Bf(n,e){if(n.length<=In)return;let t=In+e,i=n[t];if(i){let r=i[ta];r!==null&&r!==n&&xp(r,i),e>0&&(n[t-1][Xn]=i[Xn]);let s=cl(n,In+e);MC(i[nt],i);let o=s[Ol];o!==null&&o.detachView(s[nt]),i[sn]=null,i[Xn]=null,i[Be]&=-129}return i}function YC(n,e,t,i){let r=In+i,s=t.length;i>0&&(t[r-1][Xn]=e),i<s-In?(e[Xn]=t[r],Py(t,In+i,e)):(t.push(e),e[Xn]=null),e[sn]=t;let o=e[ta];o!==null&&t!==o&&y0(o,e);let a=e[Ol];a!==null&&a.insertView(n),bf(e),e[Be]|=128}function y0(n,e){let t=n[pl],i=e[sn];if(qi(i))n[Be]|=2;else{let r=i[sn][oi];e[oi]!==r&&(n[Be]|=2)}t===null?n[pl]=[e]:t.push(e)}var wl=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[nt];return Sl(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[Nn]}set context(e){this._lView[Nn]=e}get destroyed(){return ks(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[sn];if(Ti(e)){let t=e[fl],i=t?t.indexOf(this):-1;i>-1&&(Bf(e,i),cl(t,i))}this._attachedToViewContainer=!1}a0(this._lView[nt],this._lView)}onDestroy(e){Qy(this._lView,e)}markForCheck(){bp(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Be]&=-129}reattach(){bf(this._lView),this._lView[Be]|=128}detectChanges(){this._lView[Be]|=1024,p0(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Se(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=ml(this._lView),t=this._lView[ta];t!==null&&!e&&xp(t,this._lView),o0(this._lView[nt],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Se(902,!1);this._appRef=e;let t=ml(this._lView),i=this._lView[ta];i!==null&&!t&&y0(i,this._lView),bf(this._lView)}};function _0(n,e,t,i,r){let s=n.data[e];if(s===null)s=ZC(n,e,t,i,r),qS()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=GS();s.injectorIndex=o===null?-1:o.injectorIndex}return Ul(s,!0),s}function ZC(n,e,t,i,r){let s=n_(),o=i_(),a=o?s:s&&s.parent,c=n.data[e]=JC(n,a,t,e,i,r);return KC(n,c,s,o),c}function KC(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function JC(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return VS()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var QV=new RegExp(`^(\\d+)*(${Fw}|${Ow})*(.*)`);var QC=()=>null;function ly(n,e){return QC(n,e)}var eD=class{},x0=class{},Vf=class{resolveComponentFactory(e){throw Error(`No component factory found for ${dn(e)}.`)}},ql=class{static NULL=new Vf},Ns=class{},Xl=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>tD()}return n})();function tD(){let n=Pt(),e=Kn(),t=li(e.index,n);return(qi(t)?t:n)[Gt]}var nD=(()=>{class n{static \u0275prov=Re({token:n,providedIn:"root",factory:()=>null})}return n})();var lf={},Hf=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Nl(i);let r=this.injector.get(e,lf,i);return r!==lf||t===lf?r:this.parentInjector.get(e,t,i)}};function uy(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Lv(r,a);else if(s==2){let c=a,l=e[++o];i=Lv(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function Xt(n,e=Ge.Default){let t=Pt();if(t===null)return je(n,e);let i=Kn();return b_(i,t,rn(n),e)}function iD(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a,c=null,l=null,u=sD(o);u===null?a=o:[a,c,l]=u,cD(n,e,t,a,s,c,l)}s!==null&&i!==null&&rD(t,i,s)}function rD(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Se(-301,!1);i.push(e[r],s)}}function sD(n){let e=null,t=!1;for(let o=0;o<n.length;o++){let a=n[o];if(o===0&&ai(a)&&(e=a),a.findHostDirectiveDefs!==null){t=!0;break}}if(!t)return null;let i=null,r=null,s=null;for(let o of n)o.findHostDirectiveDefs!==null&&(i??=[],r??=new Map,s??=new Map,oD(o,i,s,r)),o===e&&(i??=[],i.push(o));return i!==null?(i.push(...e===null?n:n.slice(1)),[i,r,s]):null}function oD(n,e,t,i){let r=e.length;n.findHostDirectiveDefs(n,e,i),t.set(n,[r,e.length-1])}function aD(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function cD(n,e,t,i,r,s,o){let a=i.length,c=!1;for(let f=0;f<a;f++){let h=i[f];!c&&ai(h)&&(c=!0,aD(n,t,f)),Cf(_l(t,e),n,h.type)}pD(t,n.data.length,a);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=Q_(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=gl(t.mergedAttrs,h.hostAttrs),uD(n,t,e,d,h),fD(d,h,r),o!==null&&o.has(h)){let[y,m]=o.get(h);t.directiveToIndex.set(h.type,[d,y+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}lD(n,t,s)}function lD(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))dy(0,e,r,i),dy(1,e,r,i),fy(e,i,!1);else{let s=t.get(r);hy(0,e,s,i),hy(1,e,s,i),fy(e,i,!0)}}}function dy(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),M0(e,s)}}function hy(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),M0(e,o)}}function M0(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function fy(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||gp(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function uD(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=As(r.type,!0)),o=new kr(s,ai(r),Xt);n.blueprint[i]=o,t[i]=o,dD(n,e,i,Q_(n,t,r.hostVars,Ki),r)}function dD(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;hD(o)!=a&&o.push(a),o.push(t,i,s)}}function hD(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function fD(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;ai(e)&&(t[""]=n)}}function pD(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function b0(n,e,t,i,r,s,o,a){let c=e.consts,l=Wv(c,o),u=_0(e,n,2,i,l);return s&&iD(e,t,u,Wv(c,a),r),u.mergedAttrs=gl(u.mergedAttrs,u.attrs),u.attrs!==null&&uy(u,u.attrs,!1),u.mergedAttrs!==null&&uy(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function E0(n,e){ew(n,e),Gy(e)&&n.queries.elementEnd(e)}var Cl=class extends ql{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Is(e);return new ia(t,this.ngModule)}};function mD(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&Wl.SignalBased)!==0};return r&&(s.transform=r),s})}function gD(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function vD(n,e,t){let i=e instanceof Rn?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Hf(t,i):t}function yD(n){let e=n.get(Ns,null);if(e===null)throw new Se(407,!1);let t=n.get(nD,null),i=n.get(na,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i}}function _D(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return q_(e,t,t==="svg"?NS:t==="math"?PS:null)}var ia=class extends x0{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=mD(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=gD(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Yw(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r){xt(22);let s=et(null);try{let o=this.componentDef,a=i?["ng-version","19.2.9"]:Zw(this.componentDef.selectors[0]),c=Z_(0,null,null,1,0,null,null,null,null,[a],null),l=vD(o,r||this.ngModule,e),u=yD(l),d=u.rendererFactory.createRenderer(null,o),f=i?oC(d,i,o.encapsulation,l):_D(o,d),h=K_(null,c,null,512|J_(o),null,null,u,d,l,null,z_(f,l,!0));h[Yi]=f,sp(h);let g=null;try{let y=b0(Yi,c,h,"#host",()=>[this.componentDef],!0,0);f&&(Y_(d,f,y),Hl(f,h)),i0(c,h,y),j_(c,y,h),E0(c,y),t!==void 0&&xD(y,this.ngContentSelectors,t),g=li(y.index,h),h[Nn]=g[Nn],r0(c,h,null)}catch(y){throw g!==null&&Nf(g),Nf(h),y}finally{xt(23),op()}return new zf(this.componentType,h)}finally{et(s)}}},zf=class extends eD{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t){super(),this._rootLView=t,this._tNode=Zy(t[nt],Yi),this.location=hp(this._tNode,t),this.instance=li(this._tNode.index,t)[Nn],this.hostView=this.changeDetectorRef=new wl(t,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=yp(i,r[nt],r,e,t);this.previousInputValues.set(e,t);let o=li(i.index,r);bp(o,1)}get injector(){return new Rr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function xD(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Yl=(()=>{class n{static __NG_ELEMENT_ID__=MD}return n})();function MD(){let n=Kn();return ED(n,Pt())}var bD=Yl,S0=class extends bD{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return hp(this._hostTNode,this._hostLView)}get injector(){return new Rr(this._hostTNode,this._hostLView)}get parentInjector(){let e=cp(this._hostTNode,this._hostLView);if(g_(e)){let t=yl(e,this._hostLView),i=vl(e),r=t[nt].data[i+8];return new Rr(r,t)}else return new Rr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=py(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-In}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=ly(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,ay(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!TS(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new ia(Is(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let y=(o?l:this.parentInjector).get(Rn,null);y&&(s=y)}let u=Is(c.componentType??{}),d=ly(this._lContainer,u?.id??null),f=d?.firstChild??null,h=c.create(l,r,f,s);return this.insertImpl(h.hostView,a,ay(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(OS(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[sn],l=new S0(c,c[Zn],c[sn]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return XC(o,r,s,i),e.attachToViewContainerRef(),Py(uf(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=py(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Bf(this._lContainer,t);i&&(cl(uf(this._lContainer),t),a0(i[nt],i))}detach(e){let t=this._adjustIndex(e,-1),i=Bf(this._lContainer,t);return i&&cl(uf(this._lContainer),t)!=null?new wl(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function py(n){return n[fl]}function uf(n){return n[fl]||(n[fl]=[])}function ED(n,e){let t,i=e[n.index];return Ti(i)?t=i:(t=qC(i,e,null,n),e[n.index]=t,e0(e,t)),wD(t,e,n,i),new S0(t,n,e)}function SD(n,e){let t=n[Gt],i=t.createComment(""),r=Ai(e,n),s=t.parentNode(r);return El(t,s,i,t.nextSibling(r),!1),i}var wD=CD;function CD(n,e,t,i){if(n[Or])return;let r;t.type&8?r=ci(i):r=SD(e,t),n[Or]=r}var ra=class{},Ep=class{};var Gf=class extends ra{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Cl(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Ly(e);this._bootstrapComponents=W_(s.bootstrap),this._r3Injector=w_(e,t,[{provide:ra,useValue:this},{provide:ql,useValue:this.componentFactoryResolver},...i],dn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},jf=class extends Ep{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Gf(this.moduleType,e,[])}};var Dl=class extends ra{injector;componentFactoryResolver=new Cl(this);instance=null;constructor(e){super();let t=new Qo([...e.providers,{provide:ra,useValue:this},{provide:ql,useValue:this.componentFactoryResolver}],e.parent||np(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Zl(n,e,t=null){return new Dl({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var DD=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=ky(!1,t.type),r=i.length>0?Zl([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Re({token:n,providedIn:"environment",factory:()=>new n(je(Rn))})}return n})();function Hs(n){return Il(()=>{let e=w0(n),t=qe(te({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===O_.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(DD).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ui.Emulated,styles:n.styles||Tn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&mp("NgStandalone"),C0(t);let i=n.dependencies;return t.directiveDefs=my(i,!1),t.pipeDefs=my(i,!0),t.id=ND(t),t})}function TD(n){return Is(n)||mS(n)}function AD(n){return n!==null}function Hr(n){return Il(()=>({type:n.type,bootstrap:n.bootstrap||Tn,declarations:n.declarations||Tn,imports:n.imports||Tn,exports:n.exports||Tn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function ID(n,e){if(n==null)return Nr;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=Wl.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function RD(n){if(n==null)return Nr;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function di(n){return Il(()=>{let e=w0(n);return C0(e),e})}function w0(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Nr,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Tn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:ID(n.inputs,e),outputs:RD(n.outputs),debugInfo:null}}function C0(n){n.features?.forEach(e=>e(n))}function my(n,e){if(!n)return null;let t=e?gS:TD;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(AD)}function ND(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function PD(n){return Object.getPrototypeOf(n.prototype).constructor}function zr(n){let e=PD(n.type),t=!0,i=[n];for(;e;){let r;if(ai(n))r=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new Se(903,!1);r=e.\u0275dir}if(r){if(t){i.push(r);let o=n;o.inputs=df(n.inputs),o.declaredInputs=df(n.declaredInputs),o.outputs=df(n.outputs);let a=r.hostBindings;a&&UD(n,a);let c=r.viewQuery,l=r.contentQueries;if(c&&LD(n,c),l&&kD(n,l),OD(n,r),XE(n.outputs,r.outputs),ai(r)&&r.data.animation){let u=n.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let s=r.features;if(s)for(let o=0;o<s.length;o++){let a=s[o];a&&a.ngInherit&&a(n),a===zr&&(t=!1)}}e=Object.getPrototypeOf(e)}FD(i)}function OD(n,e){for(let t in e.inputs){if(!e.inputs.hasOwnProperty(t)||n.inputs.hasOwnProperty(t))continue;let i=e.inputs[t];i!==void 0&&(n.inputs[t]=i,n.declaredInputs[t]=e.declaredInputs[t])}}function FD(n){let e=0,t=null;for(let i=n.length-1;i>=0;i--){let r=n[i];r.hostVars=e+=r.hostVars,r.hostAttrs=gl(r.hostAttrs,t=gl(t,r.hostAttrs))}}function df(n){return n===Nr?{}:n===Tn?[]:n}function LD(n,e){let t=n.viewQuery;t?n.viewQuery=(i,r)=>{e(i,r),t(i,r)}:n.viewQuery=e}function kD(n,e){let t=n.contentQueries;t?n.contentQueries=(i,r,s)=>{e(i,r,s),t(i,r,s)}:n.contentQueries=e}function UD(n,e){let t=n.hostBindings;t?n.hostBindings=(i,r)=>{e(i,r),t(i,r)}:n.hostBindings=e}function Ps(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function BD(n,e,t,i){let r=Ps(n,e,t);return Ps(n,e+1,i)||r}var D0=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var T0=new be("");var VD=(()=>{class n{static \u0275prov=Re({token:n,providedIn:"root",factory:()=>new Wf})}return n})(),Wf=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}};function zs(n){return!!n&&typeof n.then=="function"}function HD(n){return!!n&&typeof n.subscribe=="function"}var zD=new be("");var A0=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=ie(zD,{optional:!0})??[];injector=ie(wi);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=Yn(this.injector,r);if(zs(s))t.push(s);else if(HD(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Sp=new be("");function GD(){Fh(()=>{throw new Se(600,!1)})}function jD(n){return n.isBoundToModule}var WD=10;var Ur=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ie(Sw);afterRenderManager=ie(kw);zonelessEnabled=ie(lp);rootEffectScheduler=ie(VD);dirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Lt;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=ie(Vs).hasPendingTasks.pipe(Ze(t=>!t));constructor(){ie(Gl,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=ie(Rn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=wi.NULL){xt(10);let s=t instanceof x0;if(!this._injector.get(A0).done){let h="";throw new Se(405,h)}let a;s?a=t:a=this._injector.get(ql).resolveComponentFactory(t),this.componentTypes.push(a.componentType);let c=jD(a)?void 0:this._injector.get(ra),l=i||a.selector,u=a.create(r,[],l,c),d=u.location.nativeElement,f=u.injector.get(T0,null);return f?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),nl(this.components,u),f?.unregisterApplication(d)}),this._loadComponent(u),xt(11,u),u}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){xt(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(H_.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new Se(101,!1);let t=et(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,et(t),this.afterTick.next(),xt(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ns,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<WD;)xt(14),this.synchronizeOnce(),xt(15)}synchronizeOnce(){if(this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)$D(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Ll(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;nl(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(Sp,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>nl(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Se(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nl(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function $D(n,e,t,i){if(!t&&!Ll(n))return;p0(n,e,t&&!i?0:1)}function qD(n,e,t,i){return Ps(n,rp(),t)?e+sl(t)+i:Ki}function XD(n,e,t,i,r,s){let o=WS(),a=BD(n,o,t,r);return s_(2),a?e+sl(t)+i+sl(r)+s:Ki}function Jc(n,e){return n<<17|e<<2}function Br(n){return n>>17&32767}function YD(n){return(n&2)==2}function ZD(n,e){return n&131071|e<<17}function $f(n){return n|2}function Os(n){return(n&131068)>>2}function hf(n,e){return n&-131069|e<<2}function KD(n){return(n&1)===1}function qf(n){return n|1}function JD(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=Br(o),c=Os(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||oa(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=Br(n[a+1]);n[i+1]=Jc(f,a),f!==0&&(n[f+1]=hf(n[f+1],i)),n[a+1]=ZD(n[a+1],i)}else n[i+1]=Jc(a,0),a!==0&&(n[a+1]=hf(n[a+1],i)),a=i;else n[i+1]=Jc(c,0),a===0?a=i:n[c+1]=hf(n[c+1],i),c=i;l&&(n[i+1]=$f(n[i+1])),gy(n,u,i,!0),gy(n,u,i,!1),QD(e,u,n,i,s),o=Jc(a,c),s?e.classBindings=o:e.styleBindings=o}function QD(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&oa(s,e)>=0&&(t[i+1]=qf(t[i+1]))}function gy(n,e,t,i){let r=n[t+1],s=e===null,o=i?Br(r):Os(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];eT(c,e)&&(a=!0,n[o+1]=i?qf(l):$f(l)),o=i?Br(l):Os(l)}a&&(n[t+1]=i?$f(r):qf(r))}function eT(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?oa(n,e)>=0:!1}function wp(n,e,t){let i=Pt(),r=rp();if(Ps(i,r,e)){let s=Pn(),o=ap();vp(s,o,i,n,e,i[Gt],t,!1)}return wp}function vy(n,e,t,i,r){yp(e,n,t,r?"class":"style",i)}function Cp(n,e){return tT(n,e,null,!0),Cp}function tT(n,e,t,i){let r=Pt(),s=Pn(),o=s_(2);if(s.firstUpdatePass&&iT(s,n,o,i),e!==Ki&&Ps(r,o,e)){let a=s.data[Us()];cT(s,a,r,r[Gt],n,r[o+1]=lT(e,t),i,o)}}function nT(n,e){return e>=n.expandoStartIndex}function iT(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[Us()],o=nT(n,t);uT(s,i)&&e===null&&!o&&(e=!1),e=rT(r,s,e,i),JD(r,s,e,t,o,i)}}function rT(n,e,t,i){let r=ZS(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=ff(null,n,e,t,i),t=sa(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=ff(r,n,e,t,i),s===null){let c=sT(n,e,i);c!==void 0&&Array.isArray(c)&&(c=ff(null,n,e,c[1],i),c=sa(c,e.attrs,i),oT(n,e,i,c))}else s=aT(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function sT(n,e,t){let i=t?e.classBindings:e.styleBindings;if(Os(i)!==0)return n[Br(i)]}function oT(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Br(r)]=i}function aT(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=sa(i,o,t)}return sa(i,e.attrs,t)}function ff(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=sa(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function sa(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),fS(n,o,t?!0:e[++s]))}return n===void 0?null:n}function cT(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=KD(l)?yy(c,e,t,r,Os(l),o):void 0;if(!Tl(u)){Tl(s)||YD(l)&&(s=yy(c,null,t,r,a,o));let d=Yy(Us(),t);PC(i,o,d,r,s)}}function yy(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===Ki&&(f=d?Tn:void 0);let h=d?tf(f,i):u===i?f:void 0;if(l&&!Tl(h)&&(h=tf(c,i)),Tl(h)&&(a=h,o))return a;let g=n[r+1];r=o?Br(g):Os(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=tf(c,i))}return a}function Tl(n){return n!==void 0}function lT(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=dn(Bw(n)))),n}function uT(n,e){return(n.flags&(e?8:16))!==0}function Gr(n,e,t,i){let r=Pt(),s=Pn(),o=Yi+n,a=r[Gt],c=s.firstCreatePass?b0(o,s,r,e,pC,BS(),t,i):s.data[o],l=dT(s,r,c,a,e,n);r[o]=l;let u=jy(c);return Ul(c,!0),Y_(a,l,c),!s0(c)&&f_()&&c0(s,r,l,c),(LS()===0||u)&&Hl(l,r),kS(),u&&(i0(s,r,c),j_(s,c,r)),i!==null&&sC(r,c),Gr}function jr(){let n=Kn();i_()?jS():(n=n.parent,Ul(n,!1));let e=n;HS(e)&&zS(),US();let t=Pn();return t.firstCreatePass&&E0(t,e),e.classesWithoutHost!=null&&nw(e)&&vy(t,e,Pt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&iw(e)&&vy(t,e,Pt(),e.stylesWithoutHost,!1),jr}function Ji(n,e,t,i){return Gr(n,e,t,i),jr(),Ji}var dT=(n,e,t,i,r,s)=>(p_(!0),q_(i,r,JS()));var Al="en-US";var hT=Al;function fT(n){typeof n=="string"&&(hT=n.toLowerCase().replace(/_/g,"-"))}function _y(n,e,t){return function i(r){if(r===Function)return t;let s=Ls(n)?li(n.index,e):e;bp(s,5);let o=e[Nn],a=xy(e,o,t,r),c=i.__ngNextListenerFn__;for(;c;)a=xy(e,o,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function xy(n,e,t,i){let r=et(null);try{return xt(6,e,t),t(i)!==!1}catch(s){return pT(n,s),!1}finally{xt(7,e,t),et(r)}}function pT(n,e){let t=n[Pr],i=t?t.get(Ci,null):null;i&&i.handleError(e)}function My(n,e,t,i,r,s){let o=e[t],a=e[nt],l=a.data[t].outputs[i],u=o[l],d=a.firstCreatePass?t_(a):null,f=e_(e),h=u.subscribe(s),g=f.length;f.push(s,h),d&&d.push(r,n.index,g,-(g+1))}var mT=new Map;function Kl(n,e,t,i){let r=Pt(),s=Pn(),o=Kn();return I0(s,r,r[Gt],o,n,e,i),Kl}function gT(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[dl],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function I0(n,e,t,i,r,s,o){let a=jy(i),l=n.firstCreatePass?t_(n):null,u=e_(e),d=!0;if(i.type&3||o){let f=Ai(i,e),h=o?o(f):f,g=u.length,y=o?p=>o(ci(p[i.index])):i.index,m=null;if(!o&&a&&(m=gT(n,e,r,i.index)),m!==null){let p=m.__ngLastListenerFn__||m;p.__ngNextListenerFn__=s,m.__ngLastListenerFn__=s,d=!1}else{s=_y(i,e,s);let p=e[Pr].get(zl);mT.get(p)?.(h,r,s);let S=t.listen(h,r,s);u.push(s,S),l&&l.push(r,y,g,g+1)}}else s=_y(i,e,s);if(d){let f=i.outputs?.[r],h=i.hostDirectiveOutputs?.[r];if(h&&h.length)for(let g=0;g<h.length;g+=2){let y=h[g],m=h[g+1];My(i,e,y,m,r,s)}if(f&&f.length)for(let g of f)My(i,e,g,r,r,s)}}function Jl(n,e,t){return R0(n,"",e,"",t),Jl}function R0(n,e,t,i,r){let s=Pt(),o=qD(s,e,t,i);if(o!==Ki){let a=Pn(),c=ap();vp(a,c,s,n,o,s[Gt],r,!1)}return R0}function Dp(n,e=""){let t=Pt(),i=Pn(),r=n+Yi,s=i.firstCreatePass?_0(i,r,1,e,null):i.data[r],o=vT(i,t,s,e,n);t[r]=o,f_()&&c0(i,t,o,s),Ul(s,!1)}var vT=(n,e,t,i,r)=>(p_(!0),Kw(e[Gt],i));function Tp(n,e,t,i,r){let s=Pt(),o=XD(s,n,e,t,i,r);return o!==Ki&&yT(s,Us(),o),Tp}function yT(n,e,t){let i=Yy(e,n);Jw(n[Gt],i,t)}function Ap(n,e,t){N_(e)&&(e=e());let i=Pt(),r=rp();if(Ps(i,r,e)){let s=Pn(),o=ap();vp(s,o,i,n,e,i[Gt],t,!1)}return Ap}function N0(n,e){let t=N_(n);return t&&n.set(e),t}function Ip(n,e){let t=Pt(),i=Pn(),r=Kn();return I0(i,t,t[Gt],r,n,e),Ip}function _T(n,e,t){let i=Pn();if(i.firstCreatePass){let r=ai(n);Xf(t,i.data,i.blueprint,r,!0),Xf(e,i.data,i.blueprint,r,!1)}}function Xf(n,e,t,i,r){if(n=rn(n),Array.isArray(n))for(let s=0;s<n.length;s++)Xf(n[s],e,t,i,r);else{let s=Pn(),o=Pt(),a=Kn(),c=Rs(n)?n:rn(n.provide),l=Vy(n),u=a.providerIndexes&1048575,d=a.directiveStart,f=a.providerIndexes>>20;if(Rs(n)||!n.multi){let h=new kr(l,r,Xt),g=mf(c,e,r?u:u+f,d);g===-1?(Cf(_l(a,o),s,c),pf(s,n,e.length),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(h),o.push(h)):(t[g]=h,o[g]=h)}else{let h=mf(c,e,u+f,d),g=mf(c,e,u,u+f),y=h>=0&&t[h],m=g>=0&&t[g];if(r&&!m||!r&&!y){Cf(_l(a,o),s,c);let p=bT(r?MT:xT,t.length,r,i,l);!r&&m&&(t[g].providerFactory=p),pf(s,n,e.length,0),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(p),o.push(p)}else{let p=P0(t[r?g:h],l,!r&&i);pf(s,n,h>-1?h:g,p)}!r&&i&&m&&t[g].componentProviders++}}}function pf(n,e,t,i){let r=Rs(e),s=MS(e);if(r||s){let c=(s?rn(e.useClass):e).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){let u=l.indexOf(t);u===-1?l.push(t,[i,c]):l[u+1].push(i,c)}else l.push(t,c)}}}function P0(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function mf(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function xT(n,e,t,i){return Yf(this.multi,[])}function MT(n,e,t,i){let r=this.multi,s;if(this.providerFactory){let o=this.providerFactory.componentProviders,a=xl(t,t[nt],this.providerFactory.index,i);s=a.slice(0,o),Yf(r,s);for(let c=o;c<a.length;c++)s.push(a[c])}else s=[],Yf(r,s);return s}function Yf(n,e){for(let t=0;t<n.length;t++){let i=n[t];e.push(i())}return e}function bT(n,e,t,i,r){let s=new kr(n,t,Xt);return s.multi=[],s.index=e,s.componentProviders=0,P0(s,r,i&&!t),s}function Ql(n,e=[]){return t=>{t.providersResolver=(i,r)=>_T(i,r?r(n):n,e)}}var Zf=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},O0=(()=>{class n{compileModuleSync(t){return new jf(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Ly(t),s=W_(r.declarations).reduce((o,a)=>{let c=Is(a);return c&&o.push(new ia(c)),o},[]);return new Zf(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ET=(()=>{class n{zone=ie(zt);changeDetectionScheduler=ie(na);applicationRef=ie(Ur);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ST=new be("",{factory:()=>!1});function F0({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new zt(qe(te({},k0()),{scheduleInRootZone:t})),[{provide:zt,useFactory:n},{provide:Jo,multi:!0,useFactory:()=>{let i=ie(ET,{optional:!0});return()=>i.initialize()}},{provide:Jo,multi:!0,useFactory:()=>{let i=ie(wT);return()=>{i.initialize()}}},e===!0?{provide:D_,useValue:!0}:[],{provide:T_,useValue:t??C_}]}function L0(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=F0({ngZoneFactory:()=>{let r=k0(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&mp("NgZone_CoalesceEvent"),new zt(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return ep([{provide:ST,useValue:!0},{provide:lp,useValue:!1},i])}function k0(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var wT=(()=>{class n{subscription=new Rt;initialized=!1;zone=ie(zt);pendingTasks=ie(Vs);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{zt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{zt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var CT=(()=>{class n{appRef=ie(Ur);taskService=ie(Vs);ngZone=ie(zt);zonelessEnabled=ie(lp);tracing=ie(Gl,{optional:!0});disableScheduling=ie(D_,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Rt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(bl):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ie(T_,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Rf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?Qv:A_;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(bl+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Qv(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function DT(){return typeof $localize<"u"&&$localize.locale||Al}var U0=new be("",{providedIn:"root",factory:()=>ie(U0,Ge.Optional|Ge.SkipSelf)||DT()});var Kf=new be(""),TT=new be("");function Xo(n){return!n.moduleRef}function AT(n){let e=Xo(n)?n.r3Injector:n.moduleRef.injector,t=e.get(zt);return t.run(()=>{Xo(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Ci,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),Xo(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Kf);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Kf);o.add(s),n.moduleRef.onDestroy(()=>{nl(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return RT(i,t,()=>{let s=e.get(A0);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(U0,Al);if(fT(o||Al),!e.get(TT,!0))return Xo(n)?e.get(Ur):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Xo(n)){let c=e.get(Ur);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return IT(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function IT(n,e){let t=n.injector.get(Ur);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Se(-403,!1);e.push(n)}function RT(n,e,t){try{let i=t();return zs(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var il=null;function NT(n=[],e){return wi.create({name:e,providers:[{provide:Pl,useValue:"platform"},{provide:Kf,useValue:new Set([()=>il=null])},...n]})}function PT(n=[]){if(il)return il;let e=NT(n);return il=e,GD(),OT(e),e}function OT(n){let e=n.get(fp,null);Yn(n,()=>{e?.forEach(t=>t())})}var da=(()=>{class n{static __NG_ELEMENT_ID__=FT}return n})();function FT(n){return LT(Kn(),Pt(),(n&16)===16)}function LT(n,e,t){if(Ls(n)&&!t){let i=li(n.index,e);return new wl(i,i)}else if(n.type&175){let i=e[oi];return new wl(i,e)}return null}function B0(n){xt(8);try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=PT(i),s=[F0({}),{provide:na,useExisting:CT},...t||[]],o=new Dl({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return AT({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}finally{xt(9)}}function Rp(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}function Wr(n){return Uh(n)}function eu(n,e){return Oh(n,e?.equal)}var by=class{[Cn];constructor(e){this[Cn]=e}destroy(){this[Cn].destroy()}};var Jt=new be("");var z0=null;function On(){return z0}function Np(n){z0??=n}var ha=class{},Pp=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>ie(G0),providedIn:"platform"})}return n})();var G0=(()=>{class n extends Pp{_location;_history;_doc=ie(Jt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return On().getBaseHref(this._doc)}onPopState(t){let i=On().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=On().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function j0(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function V0(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Qi(n){return n&&n[0]!=="?"?`?${n}`:n}var tu=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>ie($0),providedIn:"root"})}return n})(),W0=new be(""),$0=(()=>{class n extends tu{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??ie(Jt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return j0(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Qi(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Qi(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Qi(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(je(Pp),je(W0,8))};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gs=(()=>{class n{_subject=new Lt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=BT(V0(H0(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Qi(i))}normalize(t){return n.stripTrailingSlash(UT(this._basePath,H0(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Qi(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Qi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Qi;static joinWithSlash=j0;static stripTrailingSlash=V0;static \u0275fac=function(i){return new(i||n)(je(tu))};static \u0275prov=Re({token:n,factory:()=>kT(),providedIn:"root"})}return n})();function kT(){return new Gs(je(tu))}function UT(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function H0(n){return n.replace(/\/index.html$/,"")}function BT(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var nu=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Hr({type:n});static \u0275inj=Vr({})}return n})();function Op(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Fp="browser",q0="server";function iu(n){return n===q0}var fa=class{};var ou=new be(""),Bp=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Se(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(je(ou),je(zt))};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})(),pa=class{_doc;constructor(e){this._doc=e}manager},ru="ng-app-id";function X0(n){for(let e of n)e.remove()}function Y0(n,e){let t=e.createElement("style");return t.textContent=n,t}function HT(n,e,t,i){let r=n.head?.querySelectorAll(`style[${ru}="${e}"],link[${ru}="${e}"]`);if(r)for(let s of r)s.removeAttribute(ru),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function kp(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Vp=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=iu(s),HT(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,Y0);i?.forEach(r=>this.addUsage(r,this.external,kp))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(X0(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])X0(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,Y0(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,kp(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(ru,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(je(Jt),je(zl),je(pp,8),je(ua))};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})(),Lp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Hp=/%COMP%/g;var K0="%COMP%",zT=`_nghost-${K0}`,GT=`_ngcontent-${K0}`,jT=!0,WT=new be("",{providedIn:"root",factory:()=>jT});function $T(n){return GT.replace(Hp,n)}function qT(n){return zT.replace(Hp,n)}function J0(n,e){return e.map(t=>t.replace(Hp,n))}var zp=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=iu(a),this.defaultRenderer=new ma(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===ui.ShadowDom&&(i=qe(te({},i),{encapsulation:ui.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof su?r.applyToHost(t):r instanceof ga&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case ui.Emulated:s=new su(c,l,i,this.appId,u,o,a,d,f);break;case ui.ShadowDom:return new Up(c,l,t,i,o,a,this.nonce,d,f);default:s=new ga(c,l,i,u,o,a,d,f);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(je(Bp),je(Vp),je(zl),je(WT),je(Jt),je(ua),je(zt),je(pp),je(Gl,8))};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})(),ma=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Lp[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Z0(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Z0(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Se(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Lp[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Lp[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Zi.DashCase|Zi.Important)?e.style.setProperty(t,i,r&Zi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Zi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=On().getGlobalEventTarget(this.doc,e),!e))throw new Se(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Z0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Up=class extends ma{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=J0(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=kp(f,s);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ga=class extends ma{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?J0(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},su=class extends ga{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=$T(u),this.hostAttr=qT(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var au=class n extends ha{supportsDOMEvents=!0;static makeCurrent(){Np(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=XT();return t==null?null:YT(t)}resetBaseElement(){va=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Op(document.cookie,e)}},va=null;function XT(){return va=va||document.querySelector("base"),va?va.getAttribute("href"):null}function YT(n){return new URL(n,document.baseURI).pathname}var ZT=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})(),ex=(()=>{class n extends pa{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(je(Jt))};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})(),Q0=["alt","control","meta","shift"],KT={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},JT={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},tx=(()=>{class n extends pa{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>On().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),Q0.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=KT[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Q0.forEach(o=>{if(o!==r){let a=JT[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(je(Jt))};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})();function Gp(n,e){return B0(te({rootComponent:n},QT(e)))}function QT(n){return{appProviders:[...rA,...n?.providers??[]],platformProviders:iA}}function eA(){au.makeCurrent()}function tA(){return new Ci}function nA(){return B_(document),document}var iA=[{provide:ua,useValue:Fp},{provide:fp,useValue:eA,multi:!0},{provide:Jt,useFactory:nA}];var rA=[{provide:Pl,useValue:"root"},{provide:Ci,useFactory:tA},{provide:ou,useClass:ex,multi:!0,deps:[Jt]},{provide:ou,useClass:tx,multi:!0,deps:[Jt]},zp,Vp,Bp,{provide:Ns,useExisting:zp},{provide:fa,useClass:ZT},[]];var nx=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(je(Jt))};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ve="primary",Aa=Symbol("RouteTitle"),Xp=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Ys(n){return new Xp(n)}function oA(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function aA(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!hi(n[t],e[t]))return!1;return!0}function hi(n,e){let t=n?Yp(n):void 0,i=e?Yp(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!ux(n[r],e[r]))return!1;return!0}function Yp(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function ux(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function dx(n){return n.length>0?n[n.length-1]:null}function nr(n){return Yh(n)?n:zs(n)?Dt(Promise.resolve(n)):Le(n)}var cA={exact:fx,subset:px},hx={exact:lA,subset:uA,ignored:()=>!0};function ix(n,e,t){return cA[t.paths](n.root,e.root,t.matrixParams)&&hx[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function lA(n,e){return hi(n,e)}function fx(n,e,t){if(!qr(n.segments,e.segments)||!uu(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!fx(n.children[i],e.children[i],t))return!1;return!0}function uA(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>ux(n[t],e[t]))}function px(n,e,t){return mx(n,e,e.segments,t)}function mx(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!qr(r,t)||e.hasChildren()||!uu(r,t,i))}else if(n.segments.length===t.length){if(!qr(n.segments,t)||!uu(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!px(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!qr(n.segments,r)||!uu(n.segments,r,i)||!n.children[Ve]?!1:mx(n.children[Ve],e,s,i)}}function uu(n,e,t){return e.every((i,r)=>hx[t](n[r].parameters,i.parameters))}var Ni=class{root;queryParams;fragment;_queryParamMap;constructor(e=new ht([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Ys(this.queryParams),this._queryParamMap}toString(){return fA.serialize(this)}},ht=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return du(this)}},$r=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Ys(this.parameters),this._parameterMap}toString(){return vx(this)}};function dA(n,e){return qr(n,e)&&n.every((t,i)=>hi(t.parameters,e[i].parameters))}function qr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function hA(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ve&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ve&&(t=t.concat(e(r,i)))}),t}var Su=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>new Zs,providedIn:"root"})}return n})(),Zs=class{parse(e){let t=new Kp(e);return new Ni(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${ya(e.root,!0)}`,i=gA(e.queryParams),r=typeof e.fragment=="string"?`#${pA(e.fragment)}`:"";return`${t}${i}${r}`}},fA=new Zs;function du(n){return n.segments.map(e=>vx(e)).join("/")}function ya(n,e){if(!n.hasChildren())return du(n);if(e){let t=n.children[Ve]?ya(n.children[Ve],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Ve&&i.push(`${r}:${ya(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=hA(n,(i,r)=>r===Ve?[ya(n.children[Ve],!1)]:[`${r}:${ya(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ve]!=null?`${du(n)}/${t[0]}`:`${du(n)}/(${t.join("//")})`}}function gx(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function cu(n){return gx(n).replace(/%3B/gi,";")}function pA(n){return encodeURI(n)}function Zp(n){return gx(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function hu(n){return decodeURIComponent(n)}function rx(n){return hu(n.replace(/\+/g,"%20"))}function vx(n){return`${Zp(n.path)}${mA(n.parameters)}`}function mA(n){return Object.entries(n).map(([e,t])=>`;${Zp(e)}=${Zp(t)}`).join("")}function gA(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${cu(t)}=${cu(r)}`).join("&"):`${cu(t)}=${cu(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var vA=/^[^\/()?;#]+/;function jp(n){let e=n.match(vA);return e?e[0]:""}var yA=/^[^\/()?;=#]+/;function _A(n){let e=n.match(yA);return e?e[0]:""}var xA=/^[^=?&#]+/;function MA(n){let e=n.match(xA);return e?e[0]:""}var bA=/^[^&#]+/;function EA(n){let e=n.match(bA);return e?e[0]:""}var Kp=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ht([],{}):new ht([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Ve]=new ht(e,t)),i}parseSegment(){let e=jp(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Se(4009,!1);return this.capture(e),new $r(hu(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=_A(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=jp(this.remaining);r&&(i=r,this.capture(i))}e[hu(t)]=hu(i)}parseQueryParam(e){let t=MA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=EA(this.remaining);o&&(i=o,this.capture(i))}let r=rx(t),s=rx(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=jp(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Se(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ve);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Ve]:new ht([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Se(4011,!1)}};function yx(n){return n.segments.length>0?new ht([],{[Ve]:n}):n}function _x(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=_x(r);if(i===Ve&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ht(n.segments,e);return SA(t)}function SA(n){if(n.numberOfChildren===1&&n.children[Ve]){let e=n.children[Ve];return new ht(n.segments.concat(e.segments),e.children)}return n}function Ks(n){return n instanceof Ni}function wA(n,e,t=null,i=null){let r=xx(n);return Mx(r,e,t,i)}function xx(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ht(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=yx(i);return e??r}function Mx(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Wp(r,r,r,t,i);let s=CA(e);if(s.toRoot())return Wp(r,r,new ht([],{}),t,i);let o=DA(s,r,n),a=o.processChildren?xa(o.segmentGroup,o.index,s.commands):Ex(o.segmentGroup,o.index,s.commands);return Wp(r,o.segmentGroup,a,t,i)}function pu(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function ba(n){return typeof n=="object"&&n!=null&&n.outlets}function Wp(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=bx(n,e,t);let a=yx(_x(o));return new Ni(a,s,r)}function bx(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=bx(s,e,t)}),new ht(n.segments,i)}var mu=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&pu(i[0]))throw new Se(4003,!1);let r=i.find(ba);if(r&&r!==dx(i))throw new Se(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function CA(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new mu(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new mu(t,e,i)}var $s=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function DA(n,e,t){if(n.isAbsolute)return new $s(e,!0,0);if(!t)return new $s(e,!1,NaN);if(t.parent===null)return new $s(t,!0,0);let i=pu(n.commands[0])?0:1,r=t.segments.length-1+i;return TA(t,r,n.numberOfDoubleDots)}function TA(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Se(4005,!1);r=i.segments.length}return new $s(i,!1,r-s)}function AA(n){return ba(n[0])?n[0].outlets:{[Ve]:n}}function Ex(n,e,t){if(n??=new ht([],{}),n.segments.length===0&&n.hasChildren())return xa(n,e,t);let i=IA(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ht(n.segments.slice(0,i.pathIndex),{});return s.children[Ve]=new ht(n.segments.slice(i.pathIndex),n.children),xa(s,0,r)}else return i.match&&r.length===0?new ht(n.segments,{}):i.match&&!n.hasChildren()?Jp(n,e,t):i.match?xa(n,0,r):Jp(n,e,t)}function xa(n,e,t){if(t.length===0)return new ht(n.segments,{});{let i=AA(t),r={};if(Object.keys(i).some(s=>s!==Ve)&&n.children[Ve]&&n.numberOfChildren===1&&n.children[Ve].segments.length===0){let s=xa(n.children[Ve],e,t);return new ht(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Ex(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ht(n.segments,r)}}function IA(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(ba(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!ox(c,l,o))return s;i+=2}else{if(!ox(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Jp(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(ba(s)){let c=RA(s.outlets);return new ht(i,c)}if(r===0&&pu(t[0])){let c=n.segments[e];i.push(new $r(c.path,sx(t[0]))),r++;continue}let o=ba(s)?s.outlets[Ve]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&pu(a)?(i.push(new $r(o,sx(a))),r+=2):(i.push(new $r(o,{})),r++)}return new ht(i,{})}function RA(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Jp(new ht([],{}),0,i))}),e}function sx(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function ox(n,e,t){return n==t.path&&hi(e,t.parameters)}var fu="imperative",Yt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Yt||{}),Fn=class{id;url;constructor(e,t){this.id=e,this.url=t}},Js=class extends Fn{type=Yt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},er=class extends Fn{urlAfterRedirects;type=Yt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},vn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(vn||{}),gu=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(gu||{}),Ri=class extends Fn{reason;code;type=Yt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},tr=class extends Fn{reason;code;type=Yt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},Ea=class extends Fn{error;target;type=Yt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},vu=class extends Fn{urlAfterRedirects;state;type=Yt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qp=class extends Fn{urlAfterRedirects;state;type=Yt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},em=class extends Fn{urlAfterRedirects;state;shouldActivate;type=Yt.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},tm=class extends Fn{urlAfterRedirects;state;type=Yt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nm=class extends Fn{urlAfterRedirects;state;type=Yt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},im=class{route;type=Yt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},rm=class{route;type=Yt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},sm=class{snapshot;type=Yt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},om=class{snapshot;type=Yt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},am=class{snapshot;type=Yt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},cm=class{snapshot;type=Yt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Sa=class{},Qs=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function NA(n,e){return n.providers&&!n._injector&&(n._injector=Zl(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Jn(n){return n.outlet||Ve}function PA(n,e){let t=n.filter(i=>Jn(i)===e);return t.push(...n.filter(i=>Jn(i)!==e)),t}function Ia(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var lm=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Ia(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Ra(this.rootInjector)}},Ra=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new lm(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(je(Rn))};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),yu=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=um(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=um(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=dm(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return dm(e,this._root).map(t=>t.value)}};function um(n,e){if(n===e.value)return e;for(let t of e.children){let i=um(n,t);if(i)return i}return null}function dm(n,e){if(n===e.value)return[e];for(let t of e.children){let i=dm(n,t);if(i.length)return i.unshift(e),i}return[]}var gn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Ws(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var _u=class extends yu{snapshot;constructor(e,t){super(e),this.snapshot=t,xm(this,e)}toString(){return this.snapshot.toString()}};function Sx(n){let e=OA(n),t=new $t([new $r("",{})]),i=new $t({}),r=new $t({}),s=new $t({}),o=new $t(""),a=new Xr(t,i,s,o,r,Ve,n,e.root);return a.snapshot=e.root,new _u(new gn(a,[]),e)}function OA(n){let e={},t={},i={},r="",s=new qs([],e,i,r,t,Ve,n,null,{});return new Mu("",new gn(s,[]))}var Xr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Ze(l=>l[Aa]))??Le(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ze(e=>Ys(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ze(e=>Ys(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function xu(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:te(te({},e.params),n.params),data:te(te({},e.data),n.data),resolve:te(te(te(te({},n.data),e.data),r?.data),n._resolvedData)}:i={params:te({},n.params),data:te({},n.data),resolve:te(te({},n.data),n._resolvedData??{})},r&&Cx(r)&&(i.resolve[Aa]=r.title),i}var qs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Aa]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ys(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ys(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Mu=class extends yu{url;constructor(e,t){super(t),this.url=e,xm(this,t)}toString(){return wx(this._root)}};function xm(n,e){e.value._routerState=n,e.children.forEach(t=>xm(n,t))}function wx(n){let e=n.children.length>0?` { ${n.children.map(wx).join(", ")} } `:"";return`${n.value}${e}`}function $p(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,hi(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),hi(e.params,t.params)||n.paramsSubject.next(t.params),aA(e.url,t.url)||n.urlSubject.next(t.url),hi(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function hm(n,e){let t=hi(n.params,e.params)&&dA(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||hm(n.parent,e.parent))}function Cx(n){return typeof n.title=="string"||n.title===null}var FA=new be(""),Dx=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ve;activateEvents=new Ht;deactivateEvents=new Ht;attachEvents=new Ht;detachEvents=new Ht;routerOutletData=R_(void 0);parentContexts=ie(Ra);location=ie(Yl);changeDetector=ie(da);inputBinder=ie(wu,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Se(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Se(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Se(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Se(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new fm(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=di({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ca]})}return n})(),fm=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Xr?this.route:e===Ra?this.childContexts:e===FA?this.outletData:this.parent.get(e,t)}},wu=new be("");function LA(n,e,t){let i=wa(n,e._root,t?t._root:void 0);return new _u(i,e)}function wa(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=kA(n,e,t);return new gn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>wa(n,a)),o}}let i=UA(e.value),r=e.children.map(s=>wa(n,s));return new gn(i,r)}}function kA(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return wa(n,i,r);return wa(n,i)})}function UA(n){return new Xr(new $t(n.url),new $t(n.params),new $t(n.queryParams),new $t(n.fragment),new $t(n.data),n.outlet,n.component,n)}var Ca=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},Tx="ngNavigationCancelingError";function bu(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Ks(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Ax(!1,vn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function Ax(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[Tx]=!0,t.cancellationCode=e,t}function BA(n){return Ix(n)&&Ks(n.url)}function Ix(n){return!!n&&n[Tx]}var VA=(n,e,t,i)=>Ze(r=>(new pm(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),pm=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),$p(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Ws(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ws(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ws(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Ws(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new cm(s.value.snapshot))}),e.children.length&&this.forwardEvent(new om(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if($p(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),$p(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Eu=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Xs=class{component;route;constructor(e,t){this.component=e,this.route=t}};function HA(n,e,t){let i=n._root,r=e?e._root:null;return _a(i,r,t,[i.value])}function zA(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function to(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Cy(n)?n:e.get(n):i}function _a(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Ws(e);return n.children.forEach(o=>{GA(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Ma(a,t.getContext(o),r)),r}function GA(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=jA(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Eu(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?_a(n,e,a?a.children:null,i,r):_a(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Xs(a.outlet.component,o))}else o&&Ma(e,a,r),r.canActivateChecks.push(new Eu(i)),s.component?_a(n,null,a?a.children:null,i,r):_a(n,null,t,i,r);return r}function jA(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!qr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!qr(n.url,e.url)||!hi(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!hm(n,e)||!hi(n.queryParams,e.queryParams);case"paramsChange":default:return!hm(n,e)}}function Ma(n,e,t){let i=Ws(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Ma(o,e.children.getContext(s),t):Ma(o,null,t):Ma(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Xs(e.outlet.component,r)):t.canDeactivateChecks.push(new Xs(null,r)):t.canDeactivateChecks.push(new Xs(null,r))}function Na(n){return typeof n=="function"}function WA(n){return typeof n=="boolean"}function $A(n){return n&&Na(n.canLoad)}function qA(n){return n&&Na(n.canActivate)}function XA(n){return n&&Na(n.canActivateChild)}function YA(n){return n&&Na(n.canDeactivate)}function ZA(n){return n&&Na(n.canMatch)}function Rx(n){return n instanceof bi||n?.name==="EmptyError"}var lu=Symbol("INITIAL_VALUE");function eo(){return $n(n=>Yc(n.map(e=>e.pipe(Ei(1),Qh(lu)))).pipe(Ze(e=>{for(let t of e)if(t!==!0){if(t===lu)return lu;if(t===!1||KA(t))return t}return!0}),Wn(e=>e!==lu),Ei(1)))}function KA(n){return Ks(n)||n instanceof Ca}function JA(n,e){return kt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Le(qe(te({},t),{guardsResult:!0})):QA(o,i,r,n).pipe(kt(a=>a&&WA(a)?eI(i,s,n,e):Le(a)),Ze(a=>qe(te({},t),{guardsResult:a})))})}function QA(n,e,t,i){return Dt(n).pipe(kt(r=>sI(r.component,r.route,t,e,i)),Si(r=>r!==!0,!0))}function eI(n,e,t,i){return Dt(e).pipe(Es(r=>bs(nI(r.route.parent,i),tI(r.route,i),rI(n,r.path,t),iI(n,r.route,t))),Si(r=>r!==!0,!0))}function tI(n,e){return n!==null&&e&&e(new am(n)),Le(!0)}function nI(n,e){return n!==null&&e&&e(new sm(n)),Le(!0)}function iI(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Le(!0);let r=i.map(s=>Zc(()=>{let o=Ia(e)??t,a=to(s,o),c=qA(a)?a.canActivate(e,n):Yn(o,()=>a(e,n));return nr(c).pipe(Si())}));return Le(r).pipe(eo())}function rI(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>zA(o)).filter(o=>o!==null).map(o=>Zc(()=>{let a=o.guards.map(c=>{let l=Ia(o.node)??t,u=to(c,l),d=XA(u)?u.canActivateChild(i,n):Yn(l,()=>u(i,n));return nr(d).pipe(Si())});return Le(a).pipe(eo())}));return Le(s).pipe(eo())}function sI(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Le(!0);let o=s.map(a=>{let c=Ia(e)??r,l=to(a,c),u=YA(l)?l.canDeactivate(n,e,t,i):Yn(c,()=>l(n,e,t,i));return nr(u).pipe(Si())});return Le(o).pipe(eo())}function oI(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Le(!0);let s=r.map(o=>{let a=to(o,n),c=$A(a)?a.canLoad(e,t):Yn(n,()=>a(e,t));return nr(c)});return Le(s).pipe(eo(),Nx(i))}function Nx(n){return Wh(qt(e=>{if(typeof e!="boolean")throw bu(n,e)}),Ze(e=>e===!0))}function aI(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Le(!0);let s=r.map(o=>{let a=to(o,n),c=ZA(a)?a.canMatch(e,t):Yn(n,()=>a(e,t));return nr(c)});return Le(s).pipe(eo(),Nx(i))}var Da=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},Ta=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function js(n){return Ms(new Da(n))}function cI(n){return Ms(new Se(4e3,!1))}function lI(n){return Ms(Ax(!1,vn.GuardRejected))}var mm=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Le(i);if(r.numberOfChildren>1||!r.children[Ve])return cI(`${e.redirectTo}`);r=r.children[Ve]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:h,data:g,title:y}=r,m=Yn(s,()=>a({params:h,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:y}));if(m instanceof Ni)throw new Ta(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new Ta(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Ni(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ht(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Se(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},gm={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function uI(n,e,t,i,r){let s=Px(n,e,t);return s.matched?(i=NA(e,i),aI(i,e,t,r).pipe(Ze(o=>o===!0?s:te({},gm)))):Le(s)}function Px(n,e,t){if(e.path==="**")return dI(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?te({},gm):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||oA)(t,n,e);if(!r)return te({},gm);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?te(te({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function dI(n){return{matched:!0,parameters:n.length>0?dx(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function ax(n,e,t,i){return t.length>0&&pI(n,t,i)?{segmentGroup:new ht(e,fI(i,new ht(t,n.children))),slicedSegments:[]}:t.length===0&&mI(n,t,i)?{segmentGroup:new ht(n.segments,hI(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ht(n.segments,n.children),slicedSegments:t}}function hI(n,e,t,i){let r={};for(let s of t)if(Cu(n,e,s)&&!i[Jn(s)]){let o=new ht([],{});r[Jn(s)]=o}return te(te({},i),r)}function fI(n,e){let t={};t[Ve]=e;for(let i of n)if(i.path===""&&Jn(i)!==Ve){let r=new ht([],{});t[Jn(i)]=r}return t}function pI(n,e,t){return t.some(i=>Cu(n,e,i)&&Jn(i)!==Ve)}function mI(n,e,t){return t.some(i=>Cu(n,e,i))}function Cu(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function gI(n,e,t){return e.length===0&&!n.children[t]}var vm=class{};function vI(n,e,t,i,r,s,o="emptyOnly"){return new ym(n,e,t,i,r,o,s).recognize()}var yI=31,ym=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new mm(this.urlSerializer,this.urlTree)}noMatchError(e){return new Se(4002,`'${e.segmentGroup}'`)}recognize(){let e=ax(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Ze(({children:t,rootSnapshot:i})=>{let r=new gn(i,t),s=new Mu("",r),o=wA(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new qs([],Object.freeze({}),Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ve,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Ve,t).pipe(Ze(i=>({children:i,rootSnapshot:t})),ji(i=>{if(i instanceof Ta)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Da?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(Ze(o=>o instanceof gn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Dt(s).pipe(Es(o=>{let a=i.children[o],c=PA(t,o);return this.processSegmentGroup(e,c,a,o,r)}),Jh((o,a)=>(o.push(...a),o)),Wi(null),Kh(),kt(o=>{if(o===null)return js(i);let a=Ox(o);return _I(a),Le(a)}))}processSegment(e,t,i,r,s,o,a){return Dt(t).pipe(Es(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(ji(l=>{if(l instanceof Da)return Le(null);throw l}))),Si(c=>!!c),ji(c=>{if(Rx(c))return gI(i,r,s)?Le(new vm):js(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return Jn(i)!==o&&(o===Ve||!Cu(r,s,i))?js(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):js(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=Px(t,r,s);if(!c)return js(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>yI&&(this.allowRedirects=!1));let h=new qs(s,l,Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,cx(r),Jn(r),r.component??r._loadedComponent??null,r,lx(r)),g=xu(h,a,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let y=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e);return this.applyRedirects.lineralizeSegments(r,y).pipe(kt(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=uI(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe($n(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe($n(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=new qs(f,d,Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,cx(i),Jn(i),i.component??i._loadedComponent??null,i,lx(i)),y=xu(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:m,slicedSegments:p}=ax(t,f,h,l);if(p.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(Ze(S=>new gn(g,S)));if(l.length===0&&p.length===0)return Le(new gn(g,[]));let w=Jn(i)===s;return this.processSegment(u,l,m,p,w?Ve:s,!0,g).pipe(Ze(S=>new gn(g,S instanceof gn?[S]:[])))}))):js(t)))}getChildConfig(e,t,i){return t.children?Le({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Le({routes:t._loadedRoutes,injector:t._loadedInjector}):oI(e,t,i,this.urlSerializer).pipe(kt(r=>r?this.configLoader.loadChildren(e,t).pipe(qt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):lI(t))):Le({routes:[],injector:e})}};function _I(n){n.sort((e,t)=>e.value.outlet===Ve?-1:t.value.outlet===Ve?1:e.value.outlet.localeCompare(t.value.outlet))}function xI(n){let e=n.value.routeConfig;return e&&e.path===""}function Ox(n){let e=[],t=new Set;for(let i of n){if(!xI(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=Ox(i.children);e.push(new gn(i.value,r))}return e.filter(i=>!t.has(i))}function cx(n){return n.data||{}}function lx(n){return n.resolve||{}}function MI(n,e,t,i,r,s){return kt(o=>vI(n,e,t,i,o.extractedUrl,r,s).pipe(Ze(({state:a,tree:c})=>qe(te({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function bI(n,e){return kt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Le(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of Fx(c))o.add(l);let a=0;return Dt(o).pipe(Es(c=>s.has(c)?EI(c,i,n,e):(c.data=xu(c,c.parent,n).resolve,Le(void 0))),qt(()=>a++),Ss(1),kt(c=>a===o.size?Le(t):ln))})}function Fx(n){let e=n.children.map(t=>Fx(t)).flat();return[n,...e]}function EI(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!Cx(r)&&(s[Aa]=r.title),SI(s,n,e,i).pipe(Ze(o=>(n._resolvedData=o,n.data=xu(n,n.parent,t).resolve,null)))}function SI(n,e,t,i){let r=Yp(n);if(r.length===0)return Le({});let s={};return Dt(r).pipe(kt(o=>wI(n[o],e,t,i).pipe(Si(),qt(a=>{if(a instanceof Ca)throw bu(new Zs,a);s[o]=a}))),Ss(1),Ze(()=>s),ji(o=>Rx(o)?ln:Ms(o)))}function wI(n,e,t,i){let r=Ia(e)??i,s=to(n,r),o=s.resolve?s.resolve(e,t):Yn(r,()=>s(e,t));return nr(o)}function qp(n){return $n(e=>{let t=n(e);return t?Dt(t).pipe(Ze(()=>e)):Le(e)})}var Lx=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Ve);return i}getResolvedTitleForRoute(t){return t.data[Aa]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>ie(CI),providedIn:"root"})}return n})(),CI=(()=>{class n extends Lx{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(je(nx))};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Du=new be("",{providedIn:"root",factory:()=>({})}),kx=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Hs({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Ji(0,"router-outlet")},dependencies:[Dx],encapsulation:2})}return n})();function Mm(n){let e=n.children&&n.children.map(Mm),t=e?qe(te({},n),{children:e}):te({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ve&&(t.component=kx),t}var Tu=new be(""),Ux=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=ie(O0);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Le(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=nr(t.loadComponent()).pipe(Ze(Bx),qt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),qo(()=>{this.componentLoaders.delete(t)})),r=new xs(i,()=>new Lt).pipe(_s());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Le({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=DI(i,this.compiler,t,this.onLoadEndListener).pipe(qo(()=>{this.childrenLoaders.delete(i)})),o=new xs(s,()=>new Lt).pipe(_s());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function DI(n,e,t,i){return nr(n.loadChildren()).pipe(Ze(Bx),kt(r=>r instanceof Ep||Array.isArray(r)?Le(r):Dt(e.compileModuleAsync(r))),Ze(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Tu,[],{optional:!0,self:!0}).flat()),{routes:o.map(Mm),injector:s}}))}function TI(n){return n&&typeof n=="object"&&"default"in n}function Bx(n){return TI(n)?n.default:n}var bm=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>ie(AI),providedIn:"root"})}return n})(),AI=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Vx=new be("");var Hx=new be(""),zx=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Lt;transitionAbortSubject=new Lt;configLoader=ie(Ux);environmentInjector=ie(Rn);destroyRef=ie(Bl);urlSerializer=ie(Su);rootContexts=ie(Ra);location=ie(Gs);inputBindingEnabled=ie(wu,{optional:!0})!==null;titleStrategy=ie(Lx);options=ie(Du,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=ie(bm);createViewTransition=ie(Vx,{optional:!0});navigationErrorHandler=ie(Hx,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Le(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new im(r)),i=r=>this.events.next(new rm(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(qe(te({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i}))}setupNavigations(t){return this.transitions=new $t(null),this.transitions.pipe(Wn(i=>i!==null),$n(i=>{let r=!1,s=!1;return Le(i).pipe($n(o=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",vn.SupersededByNewNavigation),ln;this.currentTransition=i,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?qe(te({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),c=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!a&&c!=="reload"){let l="";return this.events.next(new tr(o.id,this.urlSerializer.serialize(o.rawUrl),l,gu.IgnoredSameUrlNavigation)),o.resolve(!1),ln}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return Le(o).pipe($n(l=>(this.events.next(new Js(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?ln:Promise.resolve(l))),MI(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),qt(l=>{i.targetSnapshot=l.targetSnapshot,i.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=qe(te({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let u=new vu(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:l,extractedUrl:u,source:d,restoredState:f,extras:h}=o,g=new Js(l,this.urlSerializer.serialize(u),d,f);this.events.next(g);let y=Sx(this.rootComponentType).snapshot;return this.currentTransition=i=qe(te({},o),{targetSnapshot:y,urlAfterRedirects:u,extras:qe(te({},h),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,Le(i)}else{let l="";return this.events.next(new tr(o.id,this.urlSerializer.serialize(o.extractedUrl),l,gu.IgnoredByUrlHandlingStrategy)),o.resolve(!1),ln}}),qt(o=>{let a=new Qp(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),Ze(o=>(this.currentTransition=i=qe(te({},o),{guards:HA(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),i)),JA(this.environmentInjector,o=>this.events.next(o)),qt(o=>{if(i.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw bu(this.urlSerializer,o.guardsResult);let a=new em(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(a)}),Wn(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",vn.GuardRejected),!1)),qp(o=>{if(o.guards.canActivateChecks.length!==0)return Le(o).pipe(qt(a=>{let c=new tm(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),$n(a=>{let c=!1;return Le(a).pipe(bI(this.paramsInheritanceStrategy,this.environmentInjector),qt({next:()=>c=!0,complete:()=>{c||this.cancelNavigationTransition(a,"",vn.NoDataFromResolver)}}))}),qt(a=>{let c=new nm(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}))}),qp(o=>{let a=c=>{let l=[];c.routeConfig?.loadComponent&&!c.routeConfig._loadedComponent&&l.push(this.configLoader.loadComponent(c.routeConfig).pipe(qt(u=>{c.component=u}),Ze(()=>{})));for(let u of c.children)l.push(...a(u));return l};return Yc(a(o.targetSnapshot.root)).pipe(Wi(null),Ei(1))}),qp(()=>this.afterPreactivation()),$n(()=>{let{currentSnapshot:o,targetSnapshot:a}=i,c=this.createViewTransition?.(this.environmentInjector,o.root,a.root);return c?Dt(c).pipe(Ze(()=>i)):Le(i)}),Ze(o=>{let a=LA(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=i=qe(te({},o),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,i}),qt(()=>{this.events.next(new Sa)}),VA(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),Ei(1),qt({next:o=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new er(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{r=!0}}),ef(this.transitionAbortSubject.pipe(qt(o=>{throw o}))),qo(()=>{!r&&!s&&this.cancelNavigationTransition(i,"",vn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),ji(o=>{if(this.destroyed)return i.resolve(!1),ln;if(s=!0,Ix(o))this.events.next(new Ri(i.id,this.urlSerializer.serialize(i.extractedUrl),o.message,o.cancellationCode)),BA(o)?this.events.next(new Qs(o.url,o.navigationBehaviorOptions)):i.resolve(!1);else{let a=new Ea(i.id,this.urlSerializer.serialize(i.extractedUrl),o,i.targetSnapshot??void 0);try{let c=Yn(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(c instanceof Ca){let{message:l,cancellationCode:u}=bu(this.urlSerializer,c);this.events.next(new Ri(i.id,this.urlSerializer.serialize(i.extractedUrl),l,u)),this.events.next(new Qs(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(a),o}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return ln}))}))}cancelNavigationTransition(t,i,r){let s=new Ri(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function II(n){return n!==fu}var RI=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>ie(NI),providedIn:"root"})}return n})(),_m=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},NI=(()=>{class n extends _m{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Bs(n)))(r||n)}})();static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gx=(()=>{class n{urlSerializer=ie(Su);options=ie(Du,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=ie(Gs);urlHandlingStrategy=ie(bm);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ni;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??s;return o instanceof Ni?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=Sx(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>ie(PI),providedIn:"root"})}return n})(),PI=(()=>{class n extends Gx{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate")})})}handleRouterEvent(t,i){t instanceof Js?this.updateStateMemento():t instanceof tr?this.commitTransition(i):t instanceof vu?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Sa?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Ri&&(t.code===vn.GuardRejected||t.code===vn.NoDataFromResolver)?this.restoreHistory(i):t instanceof Ea?this.restoreHistory(i,!0):t instanceof er&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:s,state:o}=i;if(this.location.isCurrentPathEqualTo(t)||s){let a=this.browserPageId,c=te(te({},o),this.generateNgRouterState(r,a));this.location.replaceState(t,"",c)}else{let a=te(te({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Bs(n)))(r||n)}})();static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function jx(n,e){n.events.pipe(Wn(t=>t instanceof er||t instanceof Ri||t instanceof Ea||t instanceof tr),Ze(t=>t instanceof er||t instanceof tr?0:(t instanceof Ri?t.code===vn.Redirect||t.code===vn.SupersededByNewNavigation:!1)?2:1),Wn(t=>t!==2),Ei(1)).subscribe(()=>{e()})}var OI={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},FI={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Em=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=ie(D0);stateManager=ie(Gx);options=ie(Du,{optional:!0})||{};pendingTasks=ie(Vs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=ie(zx);urlSerializer=ie(Su);location=ie(Gs);urlHandlingStrategy=ie(bm);_events=new Lt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=ie(RI);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=ie(Tu,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!ie(wu,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Rt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof Ri&&i.code!==vn.Redirect&&i.code!==vn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof er)this.navigated=!0;else if(i instanceof Qs){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=te({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||II(r.source)},o);this.scheduleNavigation(a,fu,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}kI(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),fu,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r)=>{this.navigateToSyncWithBrowser(t,r,i)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=te({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Mm),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=te(te({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=xx(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return Mx(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Ks(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,fu,null,i)}navigate(t,i={skipLocationChange:!1}){return LI(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=te({},OI):i===!1?r=te({},FI):r=i,Ks(t))return ix(this.currentUrlTree,t,r);let s=this.parseUrl(t);return ix(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return jx(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function LI(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Se(4008,!1)}function kI(n){return!(n instanceof Sa)&&!(n instanceof Qs)}var UI=new be("");function Sm(n,...e){return ep([{provide:Tu,multi:!0,useValue:n},[],{provide:Xr,useFactory:BI,deps:[Em]},{provide:Sp,multi:!0,useFactory:VI},e.map(t=>t.\u0275providers)])}function BI(n){return n.routerState.root}function VI(){let n=ie(wi);return e=>{let t=n.get(Ur);if(e!==t.components[0])return;let i=n.get(Em),r=n.get(HI);n.get(zI)===1&&i.initialNavigation(),n.get(GI,null,Ge.Optional)?.setUpPreloading(),n.get(UI,null,Ge.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var HI=new be("",{factory:()=>new Lt}),zI=new be("",{providedIn:"root",factory:()=>1});var GI=new be("");var Wx=[];var $x={providers:[L0({eventCoalescing:!0}),Sm(Wx)]};var md="176",_r={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pM=0,ng=1,mM=2;var ig=1,gM=2,gi=3,Bi=0,an=1,vi=2,Vi=0,ts=1,rg=2,sg=3,og=4,vM=5,dr=100,yM=101,_M=102,xM=103,MM=104,bM=200,EM=201,SM=202,wM=203,Xu=204,Yu=205,CM=206,DM=207,TM=208,AM=209,IM=210,RM=211,NM=212,PM=213,OM=214,gd=0,vd=1,yd=2,ns=3,_d=4,xd=5,Md=6,bd=7,Co=0,FM=1,LM=2,Hi=0,kM=1,UM=2,BM=3,VM=4,HM=5,zM=6,GM=7;var qm=300,ss=301,os=302,Ed=303,Sd=304,sc=306,Zu=1e3,ur=1001,Ku=1002,Bn=1003,jM=1004;var oc=1005;var ni=1006,wd=1007;var Mr=1008;var ri=1009,ag=1010,cg=1011,Do=1012,Cd=1013,br=1014,yi=1015,To=1016,Dd=1017,Td=1018,Ao=1020,lg=35902,ug=1021,dg=1022,Hn=1023,vo=1026,Io=1027,hg=1028,Ad=1029,fg=1030,Id=1031;var Rd=1033,ac=33776,cc=33777,lc=33778,uc=33779,Nd=35840,Pd=35841,Od=35842,Fd=35843,Ld=36196,kd=37492,Ud=37496,Bd=37808,Vd=37809,Hd=37810,zd=37811,Gd=37812,jd=37813,Wd=37814,$d=37815,qd=37816,Xd=37817,Yd=37818,Zd=37819,Kd=37820,Jd=37821,dc=36492,Qd=36494,eh=36495,pg=36283,th=36284,nh=36285,ih=36286;var Va=2300,Ju=2301,qu=2302,Xm=2400,Ym=2401,Zm=2402;var WM=3200,$M=3201;var mg=0,qM=1,zi="",xn="srgb",is="srgb-linear",Ha="linear",mt="srgb";var Qr=7680;var Km=519,XM=512,YM=513,ZM=514,gg=515,KM=516,JM=517,QM=518,eb=519,Jm=35044;var vg="300 es",fi=2e3,za=2001;var pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qx=1234567,Ua=Math.PI/180,yo=180/Math.PI;function Ro(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function yg(n,e){return(n%e+e)%e}function WI(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function $I(n,e,t){return n!==e?(t-n)/(e-n):0}function Ba(n,e,t){return(1-t)*n+t*e}function qI(n,e,t,i){return Ba(n,e,1-Math.exp(-t*i))}function XI(n,e=1){return e-Math.abs(yg(n,e*2)-e)}function YI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ZI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function KI(n,e){return n+Math.floor(Math.random()*(e-n+1))}function JI(n,e){return n+Math.random()*(e-n)}function QI(n){return n*(.5-Math.random())}function eR(n){n!==void 0&&(qx=n);let e=qx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tR(n){return n*Ua}function nR(n){return n*yo}function iR(n){return(n&n-1)===0&&n!==0}function rR(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function sR(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oR(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var _g={DEG2RAD:Ua,RAD2DEG:yo,generateUUID:Ro,clamp:We,euclideanModulo:yg,mapLinear:WI,inverseLerp:$I,lerp:Ba,damp:qI,pingpong:XI,smoothstep:YI,smootherstep:ZI,randInt:KI,randFloat:JI,randFloatSpread:QI,seededRandom:eR,degToRad:tR,radToDeg:nR,isPowerOfTwo:iR,ceilPowerOfTwo:rR,floorPowerOfTwo:sR,setQuaternionFromProperEuler:oR,normalize:on,denormalize:mo},Oe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=r[0],m=r[3],p=r[6],w=r[1],S=r[4],E=r[7],N=r[2],I=r[5],D=r[8];return s[0]=o*y+a*w+c*N,s[3]=o*m+a*S+c*I,s[6]=o*p+a*E+c*D,s[1]=l*y+u*w+d*N,s[4]=l*m+u*S+d*I,s[7]=l*p+u*E+d*D,s[2]=f*y+h*w+g*N,s[5]=f*m+h*S+g*I,s[8]=f*p+h*E+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=h*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wm.makeScale(e,t)),this}rotate(e){return this.premultiply(wm.makeRotation(-e)),this}translate(e,t){return this.premultiply(wm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wm=new ke;function xg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tb(){let n=Ga("canvas");return n.style.display="block",n}var Xx={};function hc(n){n in Xx||(Xx[n]=!0,console.warn(n))}function nb(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ib(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rb(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Yx=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zx=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aR(){let n={enabled:!0,workingColorSpace:is,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(r.r=go(r.r),r.g=go(r.g),r.b=go(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zi?Ha:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[is]:{primaries:e,whitePoint:i,transfer:Ha,toXYZ:Yx,fromXYZ:Zx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Yx,fromXYZ:Zx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),n}var ot=aR();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function go(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var no,Qu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{no===void 0&&(no=Ga("canvas")),no.width=e.width,no.height=e.height;let r=no.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=no}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ga("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ui(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cR=0,_o=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cR++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cm(r[o].image)):s.push(Cm(r[o]))}else s=Cm(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Cm(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lR=0,Er=(()=>{class n extends pi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=ur,s=ur,o=ni,a=Mr,c=Hn,l=ri,u=n.DEFAULT_ANISOTROPY,d=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=Ro(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zu:t.x=t.x-Math.floor(t.x);break;case ur:t.x=t.x<0?0:1;break;case Ku:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zu:t.y=t.y-Math.floor(t.y);break;case ur:t.y=t.y<0?0:1;break;case Ku:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=qm,n.DEFAULT_ANISOTROPY=1,n})(),pt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,E=(h+1)/2,N=(p+1)/2,I=(u+f)/4,D=(d+y)/4,F=(g+m)/4;return S>E&&S>N?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=I/i,s=D/i):E>N?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=I/r,s=F/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=D/s,r=F/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-y)/w,this.z=(f-u)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ed=class extends pi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let r={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);let s=new Er(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new _o(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends ed{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ja=class extends Er{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var td=class extends Er{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*y,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let N=Math.sqrt(S),I=Math.atan2(N,p*w);m=Math.sin(m*I)/N,a=Math.sin(a*I)/N}let E=a*w;if(c=c*m+f*E,l=l*m+h*E,u=u*m+g*E,d=d*m+y*E,m===1-a){let N=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=N,l*=N,u*=N,d*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dm.copy(this).projectOnVector(e),this.sub(Dm)}reflect(e){return this.sub(Dm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dm=new O,Kx=new Vn,hr=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Au.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Au.copy(i.boundingBox)),Au.applyMatrix4(e.matrixWorld),this.union(Au)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),Iu.subVectors(this.max,Pa),io.subVectors(e.a,Pa),ro.subVectors(e.b,Pa),so.subVectors(e.c,Pa),ir.subVectors(ro,io),rr.subVectors(so,ro),Yr.subVectors(io,so);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Yr.z,Yr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Yr.z,0,-Yr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Yr.y,Yr.x,0];return!Tm(t,io,ro,so,Iu)||(t=[1,0,0,0,1,0,0,0,1],!Tm(t,io,ro,so,Iu))?!1:(Ru.crossVectors(ir,rr),t=[Ru.x,Ru.y,Ru.z],Tm(t,io,ro,so,Iu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pi=[new O,new O,new O,new O,new O,new O,new O,new O],Qn=new O,Au=new hr,io=new O,ro=new O,so=new O,ir=new O,rr=new O,Yr=new O,Pa=new O,Iu=new O,Ru=new O,Zr=new O;function Tm(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zr.fromArray(n,s);let a=r.x*Math.abs(Zr.x)+r.y*Math.abs(Zr.y)+r.z*Math.abs(Zr.z),c=e.dot(Zr),l=t.dot(Zr),u=i.dot(Zr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var uR=new hr,Oa=new O,Am=new O,xo=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):uR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);let t=Oa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Oa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Am.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(Am)),this.expandByPoint(Oa.copy(e.center).sub(Am))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Oi=new O,Im=new O,Nu=new O,sr=new O,Rm=new O,Pu=new O,Nm=new O,Mo=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Im.copy(e).add(t).multiplyScalar(.5),Nu.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(Im);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Nu),a=sr.dot(this.direction),c=-sr.dot(Nu),l=sr.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Im).addScaledVector(Nu,f),h}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);let i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,r,s){Rm.subVectors(t,e),Pu.subVectors(i,e),Nm.crossVectors(Rm,Pu);let o=this.direction.dot(Nm),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);let c=a*this.direction.dot(Pu.crossVectors(sr,Pu));if(c<0)return null;let l=a*this.direction.dot(Rm.cross(sr));if(l<0||c+l>o)return null;let u=-a*sr.dot(Nm);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),s=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dR,e,hR)}lookAt(e,t,i){let r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),or.crossVectors(i,yn),or.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),or.crossVectors(i,yn)),or.normalize(),Ou.crossVectors(yn,or),r[0]=or.x,r[4]=Ou.x,r[8]=yn.x,r[1]=or.y,r[5]=Ou.y,r[9]=yn.y,r[2]=or.z,r[6]=Ou.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],m=i[10],p=i[14],w=i[3],S=i[7],E=i[11],N=i[15],I=r[0],D=r[4],F=r[8],b=r[12],x=r[1],T=r[5],G=r[9],B=r[13],X=r[2],Y=r[6],$=r[10],K=r[14],H=r[3],se=r[7],he=r[11],_e=r[15];return s[0]=o*I+a*x+c*X+l*H,s[4]=o*D+a*T+c*Y+l*se,s[8]=o*F+a*G+c*$+l*he,s[12]=o*b+a*B+c*K+l*_e,s[1]=u*I+d*x+f*X+h*H,s[5]=u*D+d*T+f*Y+h*se,s[9]=u*F+d*G+f*$+h*he,s[13]=u*b+d*B+f*K+h*_e,s[2]=g*I+y*x+m*X+p*H,s[6]=g*D+y*T+m*Y+p*se,s[10]=g*F+y*G+m*$+p*he,s[14]=g*b+y*B+m*K+p*_e,s[3]=w*I+S*x+E*X+N*H,s[7]=w*D+S*T+E*Y+N*se,s[11]=w*F+S*G+E*$+N*he,s[15]=w*b+S*B+E*K+N*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+y*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],m=e[14],p=e[15],w=d*m*l-y*f*l+y*c*h-a*m*h-d*c*p+a*f*p,S=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,E=u*y*l-g*d*l+g*a*h-o*y*h-u*a*p+o*d*p,N=g*d*c-u*y*c-g*a*f+o*y*f+u*a*m-o*d*m,I=t*w+i*S+r*E+s*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/I;return e[0]=w*D,e[1]=(y*f*s-d*m*s-y*r*h+i*m*h+d*r*p-i*f*p)*D,e[2]=(a*m*s-y*c*s+y*r*l-i*m*l-a*r*p+i*c*p)*D,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*D,e[4]=S*D,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*D,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*D,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*D,e[8]=E*D,e[9]=(g*d*s-u*y*s-g*i*h+t*y*h+u*i*p-t*d*p)*D,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*p+t*a*p)*D,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*D,e[12]=N*D,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*D,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*m-t*a*m)*D,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,y=o*u,m=o*d,p=a*d,w=c*l,S=c*u,E=c*d,N=i.x,I=i.y,D=i.z;return r[0]=(1-(y+p))*N,r[1]=(h+E)*N,r[2]=(g-S)*N,r[3]=0,r[4]=(h-E)*I,r[5]=(1-(f+p))*I,r[6]=(m+w)*I,r[7]=0,r[8]=(g+S)*D,r[9]=(m-w)*D,r[10]=(1-(f+y))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=oo.set(r[0],r[1],r[2]).length(),o=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ei.copy(this);let l=1/s,u=1/o,d=1/a;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,t.setFromRotationMatrix(ei),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=fi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===fi)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===za)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=fi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u,g,y;if(a===fi)g=(o+s)*d,y=-2*d;else if(a===za)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},oo=new O,ei=new St,dR=new O(0,0,0),hR=new O(1,1,1),or=new O,Ou=new O,yn=new O,Jx=new St,Qx=new Vn,fr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Jx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Qx.setFromEuler(this),this.setFromQuaternion(Qx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fR=0,eM=new O,ao=new Vn,Fi=new St,Fu=new O,Fa=new O,pR=new O,mR=new Vn,tM=new O(1,0,0),nM=new O(0,1,0),iM=new O(0,0,1),rM={type:"added"},gR={type:"removed"},co={type:"childadded",child:null},Pm={type:"childremoved",child:null},Sr=(()=>{class n extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fR++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,i=new fr,r=new Vn,s=new O(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new ke}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ao.setFromAxisAngle(t,i),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,i){return ao.setFromAxisAngle(t,i),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(tM,t)}rotateY(t){return this.rotateOnAxis(nM,t)}rotateZ(t){return this.rotateOnAxis(iM,t)}translateOnAxis(t,i){return eM.copy(t).applyQuaternion(this.quaternion),this.position.add(eM.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(tM,t)}translateY(t){return this.translateOnAxis(nM,t)}translateZ(t){return this.translateOnAxis(iM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Fu.copy(t):Fu.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Fa,Fu,this.up):Fi.lookAt(Fu,Fa,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),ao.setFromRotationMatrix(Fi),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rM),co.child=t,this.dispatchEvent(co),co.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(gR),Pm.child=t,this.dispatchEvent(Pm),Pm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rM),co.child=t,this.dispatchEvent(co),co.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,t,pR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,mR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>qe(te({},c),{boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(c=>te({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new O(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),ti=new O,Li=new O,Om=new O,ki=new O,lo=new O,uo=new O,sM=new O,Fm=new O,Lm=new O,km=new O,Um=new pt,Bm=new pt,Vm=new pt,lr=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ti.subVectors(e,t),r.cross(ti);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ti.subVectors(r,t),Li.subVectors(i,t),Om.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Li),c=ti.dot(Om),l=Li.dot(Li),u=Li.dot(Om),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ki.x),c.addScaledVector(o,ki.y),c.addScaledVector(a,ki.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Um.setScalar(0),Bm.setScalar(0),Vm.setScalar(0),Um.fromBufferAttribute(e,t),Bm.fromBufferAttribute(e,i),Vm.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Um,s.x),o.addScaledVector(Bm,s.y),o.addScaledVector(Vm,s.z),o}static isFrontFacing(e,t,i,r){return ti.subVectors(i,t),Li.subVectors(e,t),ti.cross(Li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ti.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;lo.subVectors(r,i),uo.subVectors(s,i),Fm.subVectors(e,i);let c=lo.dot(Fm),l=uo.dot(Fm);if(c<=0&&l<=0)return t.copy(i);Lm.subVectors(e,r);let u=lo.dot(Lm),d=uo.dot(Lm);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(lo,o);km.subVectors(e,s);let h=lo.dot(km),g=uo.dot(km);if(g>=0&&h<=g)return t.copy(s);let y=h*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(uo,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return sM.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(sM,a);let p=1/(m+y+f);return o=y*p,a=f*p,t.copy(i).addScaledVector(lo,o).addScaledVector(uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Lu={h:0,s:0,l:0};function Hm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=yg(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Hm(o,s,e+1/3),this.g=Hm(o,s,e),this.b=Hm(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){let i=sb[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return ot.fromWorkingColorSpace(en.copy(this),e),Math.round(We(en.r*255,0,255))*65536+Math.round(We(en.g*255,0,255))*256+Math.round(We(en.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(en.copy(this),t);let i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=xn){ot.fromWorkingColorSpace(en.copy(this),e);let t=en.r,i=en.g,r=en.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(Lu);let i=Ba(ar.h,Lu.h,t),r=Ba(ar.s,Lu.s,t),s=Ba(ar.l,Lu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Xe;Xe.NAMES=sb;var vR=0,pr=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vR++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=ts,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xu,this.blendDst=Yu,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xu&&(i.blendSrc=this.blendSrc),this.blendDst!==Yu&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Km&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$a=class extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new O,ku=new Oe,yR=0,Mn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jm,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ku.fromBufferAttribute(this,t),ku.applyMatrix3(e),this.setXY(t,ku.x,ku.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mo(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mo(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mo(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jm&&(e.usage=this.usage),e}};var qa=class extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xa=class extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Un=class extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}},_R=0,Ln=new St,zm=new Sr,ho=new O,_n=new hr,La=new hr,jt=new O,mr=class n extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_R++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xg(e)?Xa:qa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return zm.lookAt(e),zm.updateMatrix(),this.applyMatrix4(zm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Un(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];La.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(_n.min,La.min),_n.expandByPoint(jt),jt.addVectors(_n.max,La.max),_n.expandByPoint(jt)):(_n.expandByPoint(La.min),_n.expandByPoint(La.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)jt.fromBufferAttribute(a,l),c&&(ho.fromBufferAttribute(e,l),jt.add(ho)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<i.count;F++)a[F]=new O,c[F]=new O;let l=new O,u=new O,d=new O,f=new Oe,h=new Oe,g=new Oe,y=new O,m=new O;function p(F,b,x){l.fromBufferAttribute(i,F),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,F),h.fromBufferAttribute(s,b),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let T=1/(h.x*g.y-g.x*h.y);isFinite(T)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(T),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(T),a[F].add(y),a[b].add(y),a[x].add(y),c[F].add(m),c[b].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,b=w.length;F<b;++F){let x=w[F],T=x.start,G=x.count;for(let B=T,X=T+G;B<X;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let S=new O,E=new O,N=new O,I=new O;function D(F){N.fromBufferAttribute(r,F),I.copy(N);let b=a[F];S.copy(b),S.sub(N.multiplyScalar(N.dot(b))).normalize(),E.crossVectors(I,b);let T=E.dot(c[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,T)}for(let F=0,b=w.length;F<b;++F){let x=w[F],T=x.start,G=x.count;for(let B=T,X=T+G;B<X;B+=3)D(e.getX(B+0)),D(e.getX(B+1)),D(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,u=new O,d=new O;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?h=c[y]*a.data.stride+a.offset:h=c[y]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Mn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},oM=new St,Kr=new Mo,Uu=new xo,aM=new O,Bu=new O,Vu=new O,Hu=new O,Gm=new O,zu=new O,cM=new O,Gu=new O,hn=class extends Sr{constructor(e=new mr,t=new $a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){zu.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Gm.fromBufferAttribute(d,e),o?zu.addScaledVector(Gm,u):zu.addScaledVector(Gm.sub(t),u))}t.add(zu)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uu.copy(i.boundingSphere),Uu.applyMatrix4(s),Kr.copy(e.ray).recast(e.near),!(Uu.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Uu,aM)===null||Kr.origin.distanceToSquared(aM)>(e.far-e.near)**2))&&(oM.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(oM),!(i.boundingBox!==null&&Kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let E=w,N=S;E<N;E+=3){let I=a.getX(E),D=a.getX(E+1),F=a.getX(E+2);r=ju(this,p,e,i,l,u,d,I,D,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=a.getX(m),S=a.getX(m+1),E=a.getX(m+2);r=ju(this,o,e,i,l,u,d,w,S,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let E=w,N=S;E<N;E+=3){let I=E,D=E+1,F=E+2;r=ju(this,p,e,i,l,u,d,I,D,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(c.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=m,S=m+1,E=m+2;r=ju(this,o,e,i,l,u,d,w,S,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function xR(n,e,t,i,r,s,o,a){let c;if(e.side===an?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Bi,a),c===null)return null;Gu.copy(a),Gu.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Gu);return l<t.near||l>t.far?null:{distance:l,point:Gu.clone(),object:n}}function ju(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Bu),n.getVertexPosition(c,Vu),n.getVertexPosition(l,Hu);let u=xR(n,e,t,i,Bu,Vu,Hu,cM);if(u){let d=new O;lr.getBarycoord(cM,Bu,Vu,Hu,d),r&&(u.uv=lr.getInterpolatedAttribute(r,a,c,l,d,new Oe)),s&&(u.uv1=lr.getInterpolatedAttribute(s,a,c,l,d,new Oe)),o&&(u.normal=lr.getInterpolatedAttribute(o,a,c,l,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};lr.getNormal(Bu,Vu,Hu,f.normal),u.face=f,u.barycoord=d}return u}var gr=class n extends mr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Un(l,3)),this.setAttribute("normal",new Un(u,3)),this.setAttribute("uv",new Un(d,2));function g(y,m,p,w,S,E,N,I,D,F,b){let x=E/D,T=N/F,G=E/2,B=N/2,X=I/2,Y=D+1,$=F+1,K=0,H=0,se=new O;for(let he=0;he<$;he++){let _e=he*T-B;for(let $e=0;$e<Y;$e++){let vt=$e*x-G;se[y]=vt*w,se[m]=_e*S,se[p]=X,l.push(se.x,se.y,se.z),se[y]=0,se[m]=0,se[p]=I>0?1:-1,u.push(se.x,se.y,se.z),d.push($e/D),d.push(1-he/F),K+=1}}for(let he=0;he<F;he++)for(let _e=0;_e<D;_e++){let $e=f+_e+Y*he,vt=f+_e+Y*(he+1),j=f+(_e+1)+Y*(he+1),ee=f+(_e+1)+Y*he;c.push($e,vt,ee),c.push(vt,j,ee),H+=6}a.addGroup(h,H,b),h+=H,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function as(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=as(n[t]);for(let r in i)e[r]=i[r]}return e}function MR(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mg(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var ob={clone:as,merge:tn},bR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ER=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bR,this.fragmentShader=ER,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=MR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ya=class extends Sr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cr=new O,lM=new Oe,uM=new Oe,Zt=class extends Ya{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,t){return this.getViewBounds(e,lM,uM),t.subVectors(uM,lM)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fo=-90,po=1,nd=class extends Sr{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(fo,po,e,t);r.layers=this.layers,this.add(r);let s=new Zt(fo,po,e,t);s.layers=this.layers,this.add(s);let o=new Zt(fo,po,e,t);o.layers=this.layers,this.add(o);let a=new Zt(fo,po,e,t);a.layers=this.layers,this.add(a);let c=new Zt(fo,po,e,t);c.layers=this.layers,this.add(c);let l=new Zt(fo,po,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===za)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Za=class extends Er{constructor(e=[],t=ss,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},id=class extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Za(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gr(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Vi});s.uniforms.tEquirect.value=t;let o=new hn(r,s),a=t.minFilter;return t.minFilter===Mr&&(t.minFilter=ni),new nd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},es=class extends Sr{constructor(){super(),this.isGroup=!0,this.type="Group"}},SR={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SR)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ka=class extends Sr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var jm=new O,wR=new O,CR=new ke,kn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=jm.subVectors(i,t).cross(wR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(jm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||CR.getNormalMatrix(e),r=this.coplanarPoint(jm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Jr=new xo,Wu=new O,Eo=class{constructor(e=new kn,t=new kn,i=new kn,r=new kn,s=new kn,o=new kn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],y=r[10],m=r[11],p=r[12],w=r[13],S=r[14],E=r[15];if(i[0].setComponents(c-s,f-l,m-h,E-p).normalize(),i[1].setComponents(c+s,f+l,m+h,E+p).normalize(),i[2].setComponents(c+o,f+u,m+g,E+w).normalize(),i[3].setComponents(c-o,f-u,m-g,E-w).normalize(),i[4].setComponents(c-a,f-d,m-y,E-S).normalize(),t===fi)i[5].setComponents(c+a,f+d,m+y,E+S).normalize();else if(t===za)i[5].setComponents(a,d,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){return Jr.center.set(0,0,0),Jr.radius=.7071067811865476,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Wu.x=r.normal.x>0?e.max.x:e.min.x,Wu.y=r.normal.y>0?e.max.y:e.min.y,Wu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ja=class extends Er{constructor(e,t,i=br,r,s,o,a=Bn,c=Bn,l,u=vo){if(u!==vo&&u!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _o(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Qa=class n extends mr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let w=p*f-o;for(let S=0;S<l;S++){let E=S*d-s;g.push(E,-w,0),y.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let S=w+l*p,E=w+l*(p+1),N=w+1+l*(p+1),I=w+1+l*p;h.push(S,E,I),h.push(E,N,I)}this.setIndex(h),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(y,3)),this.setAttribute("uv",new Un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ec=class extends pr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mg,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var rd=class extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sd=class extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $u(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function DR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var rs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},od=class extends rs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xm,endingEnd:Xm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ym:s=e,a=2*t-i;break;case Zm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ym:o=e,c=2*i-t;break;case Zm:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,w=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,S=(-1-h)*m+(1.5+h)*y+.5*g,E=h*m-h*y;for(let N=0;N!==a;++N)s[N]=p*o[u+N]+w*o[l+N]+S*o[c+N]+E*o[d+N];return s}},ad=class extends rs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},cd=class extends rs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},bn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$u(t,this.TimeBufferType),this.values=$u(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$u(e.times,Array),values:$u(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new od(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Va:t=this.InterpolantFactoryMethodDiscrete;break;case Ju:t=this.InterpolantFactoryMethodLinear;break;case qu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Va;case this.InterpolantFactoryMethodLinear:return Ju;case this.InterpolantFactoryMethodSmooth:return qu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&DR(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qu,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Ju;var vr=class extends bn{constructor(e,t,i){super(e,t,i)}};vr.prototype.ValueTypeName="bool";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=Va;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;var ld=class extends bn{constructor(e,t,i,r){super(e,t,i,r)}};ld.prototype.ValueTypeName="color";var ud=class extends bn{constructor(e,t,i,r){super(e,t,i,r)}};ud.prototype.ValueTypeName="number";var dd=class extends rs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Vn.slerpFlat(s,0,o,l-a,o,l,c);return s}},tc=class extends bn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new dd(this.times,this.values,this.getValueSize(),e)}};tc.prototype.ValueTypeName="quaternion";tc.prototype.InterpolantFactoryMethodSmooth=void 0;var yr=class extends bn{constructor(e,t,i){super(e,t,i)}};yr.prototype.ValueTypeName="string";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=Va;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;var hd=class extends bn{constructor(e,t,i,r){super(e,t,i,r)}};hd.prototype.ValueTypeName="vector";var nc=class extends Sr{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Wm=new St,dM=new O,hM=new O,Qm=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;dM.setFromMatrixPosition(e.matrixWorld),t.position.copy(dM),hM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hM),t.updateMatrixWorld(),Wm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wm),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var fM=new St,ka=new O,$m=new O,eg=class extends Qm{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ka.setFromMatrixPosition(e.matrixWorld),i.position.copy(ka),$m.copy(i.position),$m.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt($m),i.updateMatrixWorld(),r.makeTranslation(-ka.x,-ka.y,-ka.z),fM.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fM)}},So=class extends nc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new eg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},fd=class extends Ya{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ic=class extends nc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var pd=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var bg="\\[\\]\\.:\\/",TR=new RegExp("["+bg+"]","g"),Eg="[^"+bg+"]",AR="[^"+bg.replace("\\.","")+"]",IR=/((?:WC+[\/:])*)/.source.replace("WC",Eg),RR=/(WCOD+)?/.source.replace("WCOD",AR),NR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eg),PR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eg),OR=new RegExp("^"+IR+RR+NR+PR+"$"),FR=["material","materials","bones","map"],tg=class{constructor(e,t,i){let r=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(TR,"")}static parseTrackName(t){let i=OR.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);FR.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=tg,n})();Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wG=new Float32Array(1);var wo=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var rc=class extends pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Sg(n,e,t,i){let r=LR(i);switch(t){case ug:return n*e;case hg:return n*e/r.components*r.byteLength;case Ad:return n*e/r.components*r.byteLength;case fg:return n*e*2/r.components*r.byteLength;case Id:return n*e*2/r.components*r.byteLength;case dg:return n*e*3/r.components*r.byteLength;case Hn:return n*e*4/r.components*r.byteLength;case Rd:return n*e*4/r.components*r.byteLength;case ac:case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lc:case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pd:case Fd:return Math.max(n,16)*Math.max(e,8)/4;case Nd:case Od:return Math.max(n,8)*Math.max(e,8)/2;case Ld:case kd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ud:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dc:case Qd:case eh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pg:case th:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nh:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function LR(n){switch(n){case ri:case ag:return{byteLength:1,components:1};case Do:case cg:case To:return{byteLength:2,components:1};case Dd:case Td:return{byteLength:2,components:4};case br:case Cd:case yi:return{byteLength:4,components:1};case lg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);function Ib(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function kR(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let y=d[h];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var UR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BR=`#ifdef USE_ALPHAHASH
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
#endif`,VR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jR=`#ifdef USE_AOMAP
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
#endif`,WR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$R=`#ifdef USE_BATCHING
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
#endif`,qR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KR=`#ifdef USE_IRIDESCENCE
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
#endif`,JR=`#ifdef USE_BUMPMAP
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
#endif`,QR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a1=`#define PI 3.141592653589793
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
} // validated`,c1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l1=`vec3 transformedNormal = objectNormal;
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
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p1="gl_FragColor = linearToOutputTexel( gl_FragColor );",m1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y1=`#ifdef USE_ENVMAP
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
#endif`,_1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,M1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w1=`#ifdef USE_GRADIENTMAP
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
}`,C1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A1=`uniform bool receiveShadow;
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
#endif`,I1=`#ifdef USE_ENVMAP
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
#endif`,R1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F1=`PhysicalMaterial material;
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
#endif`,L1=`struct PhysicalMaterial {
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
}`,k1=`
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
#endif`,U1=`#if defined( RE_IndirectDiffuse )
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
#endif`,B1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q1=`#if defined( USE_POINTS_UV )
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
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`#ifdef USE_MORPHTARGETS
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
#endif`,eN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oN=`#ifdef USE_NORMALMAP
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
#endif`,aN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_N=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bN=`float getShadowMask() {
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
}`,EN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SN=`#ifdef USE_SKINNING
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
#endif`,wN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CN=`#ifdef USE_SKINNING
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
#endif`,DN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RN=`#ifdef USE_TRANSMISSION
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
#endif`,NN=`#ifdef USE_TRANSMISSION
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
#endif`,PN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ON=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UN=`uniform sampler2D t2D;
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
}`,BN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GN=`#include <common>
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
}`,jN=`#if DEPTH_PACKING == 3200
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
}`,WN=`#define DISTANCE
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
}`,$N=`#define DISTANCE
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
}`,qN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YN=`uniform float scale;
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
}`,ZN=`uniform vec3 diffuse;
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
}`,KN=`#include <common>
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
}`,JN=`uniform vec3 diffuse;
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
}`,QN=`#define LAMBERT
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
}`,eP=`#define LAMBERT
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
}`,tP=`#define MATCAP
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
}`,nP=`#define MATCAP
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
}`,iP=`#define NORMAL
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
}`,rP=`#define NORMAL
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
}`,sP=`#define PHONG
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
}`,oP=`#define PHONG
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
}`,aP=`#define STANDARD
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
}`,cP=`#define STANDARD
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
}`,lP=`#define TOON
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
}`,uP=`#define TOON
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
}`,dP=`uniform float size;
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
}`,hP=`uniform vec3 diffuse;
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
}`,fP=`#include <common>
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
}`,pP=`uniform vec3 color;
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
}`,mP=`uniform float rotation;
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
}`,gP=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:UR,alphahash_pars_fragment:BR,alphamap_fragment:VR,alphamap_pars_fragment:HR,alphatest_fragment:zR,alphatest_pars_fragment:GR,aomap_fragment:jR,aomap_pars_fragment:WR,batching_pars_vertex:$R,batching_vertex:qR,begin_vertex:XR,beginnormal_vertex:YR,bsdfs:ZR,iridescence_fragment:KR,bumpmap_pars_fragment:JR,clipping_planes_fragment:QR,clipping_planes_pars_fragment:e1,clipping_planes_pars_vertex:t1,clipping_planes_vertex:n1,color_fragment:i1,color_pars_fragment:r1,color_pars_vertex:s1,color_vertex:o1,common:a1,cube_uv_reflection_fragment:c1,defaultnormal_vertex:l1,displacementmap_pars_vertex:u1,displacementmap_vertex:d1,emissivemap_fragment:h1,emissivemap_pars_fragment:f1,colorspace_fragment:p1,colorspace_pars_fragment:m1,envmap_fragment:g1,envmap_common_pars_fragment:v1,envmap_pars_fragment:y1,envmap_pars_vertex:_1,envmap_physical_pars_fragment:I1,envmap_vertex:x1,fog_vertex:M1,fog_pars_vertex:b1,fog_fragment:E1,fog_pars_fragment:S1,gradientmap_pars_fragment:w1,lightmap_pars_fragment:C1,lights_lambert_fragment:D1,lights_lambert_pars_fragment:T1,lights_pars_begin:A1,lights_toon_fragment:R1,lights_toon_pars_fragment:N1,lights_phong_fragment:P1,lights_phong_pars_fragment:O1,lights_physical_fragment:F1,lights_physical_pars_fragment:L1,lights_fragment_begin:k1,lights_fragment_maps:U1,lights_fragment_end:B1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:z1,logdepthbuf_vertex:G1,map_fragment:j1,map_pars_fragment:W1,map_particle_fragment:$1,map_particle_pars_fragment:q1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:Y1,morphinstance_vertex:Z1,morphcolor_vertex:K1,morphnormal_vertex:J1,morphtarget_pars_vertex:Q1,morphtarget_vertex:eN,normal_fragment_begin:tN,normal_fragment_maps:nN,normal_pars_fragment:iN,normal_pars_vertex:rN,normal_vertex:sN,normalmap_pars_fragment:oN,clearcoat_normal_fragment_begin:aN,clearcoat_normal_fragment_maps:cN,clearcoat_pars_fragment:lN,iridescence_pars_fragment:uN,opaque_fragment:dN,packing:hN,premultiplied_alpha_fragment:fN,project_vertex:pN,dithering_fragment:mN,dithering_pars_fragment:gN,roughnessmap_fragment:vN,roughnessmap_pars_fragment:yN,shadowmap_pars_fragment:_N,shadowmap_pars_vertex:xN,shadowmap_vertex:MN,shadowmask_pars_fragment:bN,skinbase_vertex:EN,skinning_pars_vertex:SN,skinning_vertex:wN,skinnormal_vertex:CN,specularmap_fragment:DN,specularmap_pars_fragment:TN,tonemapping_fragment:AN,tonemapping_pars_fragment:IN,transmission_fragment:RN,transmission_pars_fragment:NN,uv_pars_fragment:PN,uv_pars_vertex:ON,uv_vertex:FN,worldpos_vertex:LN,background_vert:kN,background_frag:UN,backgroundCube_vert:BN,backgroundCube_frag:VN,cube_vert:HN,cube_frag:zN,depth_vert:GN,depth_frag:jN,distanceRGBA_vert:WN,distanceRGBA_frag:$N,equirect_vert:qN,equirect_frag:XN,linedashed_vert:YN,linedashed_frag:ZN,meshbasic_vert:KN,meshbasic_frag:JN,meshlambert_vert:QN,meshlambert_frag:eP,meshmatcap_vert:tP,meshmatcap_frag:nP,meshnormal_vert:iP,meshnormal_frag:rP,meshphong_vert:sP,meshphong_frag:oP,meshphysical_vert:aP,meshphysical_frag:cP,meshtoon_vert:lP,meshtoon_frag:uP,points_vert:dP,points_frag:hP,shadow_vert:fP,shadow_frag:pP,sprite_vert:mP,sprite_frag:gP},ne={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},_i={basic:{uniforms:tn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:tn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:tn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:tn([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:tn([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:tn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:tn([ne.points,ne.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:tn([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:tn([ne.common,ne.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:tn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:tn([ne.sprite,ne.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:tn([ne.common,ne.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:tn([ne.lights,ne.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};_i.physical={uniforms:tn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var rh={r:0,b:0,g:0},cs=new fr,vP=new St;function yP(n,e,t,i,r,s,o){let a=new Xe(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function y(S){let E=!1,N=g(S);N===null?p(a,c):N&&N.isColor&&(p(N,1),E=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,E){let N=g(E);N&&(N.isCubeTexture||N.mapping===sc)?(u===void 0&&(u=new hn(new gr(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:as(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cs.copy(E.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vP.makeRotationFromEuler(cs)),u.material.toneMapped=ot.getTransfer(N.colorSpace)!==mt,(d!==N||f!==N.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=N,f=N.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(l===void 0&&(l=new hn(new Qa(2,2),new ii({name:"BackgroundMaterial",uniforms:as(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=N,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ot.getTransfer(N.colorSpace)!==mt,N.matrixAutoUpdate===!0&&N.updateMatrix(),l.material.uniforms.uvTransform.value.copy(N.matrix),(d!==N||f!==N.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=N,f=N.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,E){S.getRGB(rh,Mg(n)),i.buffers.color.setClear(rh.r,rh.g,rh.b,E,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:y,addToRenderList:m,dispose:w}}function _P(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(x,T,G,B,X){let Y=!1,$=d(B,G,T);s!==$&&(s=$,l(s.object)),Y=h(x,B,G,X),Y&&g(x,B,G,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,E(x,T,G,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,T,G){let B=G.wireframe===!0,X=i[x.id];X===void 0&&(X={},i[x.id]=X);let Y=X[T.id];Y===void 0&&(Y={},X[T.id]=Y);let $=Y[B];return $===void 0&&($=f(c()),Y[B]=$),$}function f(x){let T=[],G=[],B=[];for(let X=0;X<t;X++)T[X]=0,G[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:G,attributeDivisors:B,object:x,attributes:{},index:null}}function h(x,T,G,B){let X=s.attributes,Y=T.attributes,$=0,K=G.getAttributes();for(let H in K)if(K[H].location>=0){let he=X[H],_e=Y[H];if(_e===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor)),he===void 0||he.attribute!==_e||_e&&he.data!==_e.data)return!0;$++}return s.attributesNum!==$||s.index!==B}function g(x,T,G,B){let X={},Y=T.attributes,$=0,K=G.getAttributes();for(let H in K)if(K[H].location>=0){let he=Y[H];he===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(he=x.instanceColor));let _e={};_e.attribute=he,he&&he.data&&(_e.data=he.data),X[H]=_e,$++}s.attributes=X,s.attributesNum=$,s.index=B}function y(){let x=s.newAttributes;for(let T=0,G=x.length;T<G;T++)x[T]=0}function m(x){p(x,0)}function p(x,T){let G=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;G[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),X[x]!==T&&(n.vertexAttribDivisor(x,T),X[x]=T)}function w(){let x=s.newAttributes,T=s.enabledAttributes;for(let G=0,B=T.length;G<B;G++)T[G]!==x[G]&&(n.disableVertexAttribArray(G),T[G]=0)}function S(x,T,G,B,X,Y,$){$===!0?n.vertexAttribIPointer(x,T,G,X,Y):n.vertexAttribPointer(x,T,G,B,X,Y)}function E(x,T,G,B){y();let X=B.attributes,Y=G.getAttributes(),$=T.defaultAttributeValues;for(let K in Y){let H=Y[K];if(H.location>=0){let se=X[K];if(se===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){let he=se.normalized,_e=se.itemSize,$e=e.get(se);if($e===void 0)continue;let vt=$e.buffer,j=$e.type,ee=$e.bytesPerElement,ge=j===n.INT||j===n.UNSIGNED_INT||se.gpuType===Cd;if(se.isInterleavedBufferAttribute){let oe=se.data,we=oe.stride,ct=se.offset;if(oe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)p(H.location+Ae,oe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)m(H.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Ae=0;Ae<H.locationSize;Ae++)S(H.location+Ae,_e/H.locationSize,j,he,we*ee,(ct+_e/H.locationSize*Ae)*ee,ge)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe,se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let oe=0;oe<H.locationSize;oe++)S(H.location+oe,_e/H.locationSize,j,he,_e*ee,_e/H.locationSize*oe*ee,ge)}}else if($!==void 0){let he=$[K];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(H.location,he);break;case 3:n.vertexAttrib3fv(H.location,he);break;case 4:n.vertexAttrib4fv(H.location,he);break;default:n.vertexAttrib1fv(H.location,he)}}}}w()}function N(){F();for(let x in i){let T=i[x];for(let G in T){let B=T[G];for(let X in B)u(B[X].object),delete B[X];delete T[G]}delete i[x]}}function I(x){if(i[x.id]===void 0)return;let T=i[x.id];for(let G in T){let B=T[G];for(let X in B)u(B[X].object),delete B[X];delete T[G]}delete i[x.id]}function D(x){for(let T in i){let G=i[T];if(G[x.id]===void 0)continue;let B=G[x.id];for(let X in B)u(B[X].object),delete B[X];delete G[x.id]}}function F(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function xP(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function MP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Hn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let F=D===To&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==ri&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==yi&&!F)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:N,maxSamples:I}}function bP(n){let e=this,t=null,i=0,r=!1,s=!1,o=new kn,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let w=s?0:i,S=w*4,E=p.clippingState||null;c.value=E,E=u(g,f,S,h);for(let N=0;N!==S;++N)E[N]=t[N];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=h+y*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,E=h;S!==y;++S,E+=4)o.copy(d[S]).applyMatrix4(w,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function EP(n){let e=new WeakMap;function t(o,a){return a===Ed?o.mapping=ss:a===Sd&&(o.mapping=os),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ed||a===Sd)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new id(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Po=4,ab=[.125,.215,.35,.446,.526,.582],ds=20,wg=new fd,cb=new Xe,Cg=null,Dg=0,Tg=0,Ag=!1,us=(1+Math.sqrt(5))/2,No=1/us,lb=[new O(-us,No,0),new O(us,No,0),new O(-No,0,us),new O(No,0,us),new O(0,us,-No),new O(0,us,No),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],SP=new O,ah=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=SP}=s;Cg=this._renderer.getRenderTarget(),Dg=this._renderer.getActiveCubeFace(),Tg=this._renderer.getActiveMipmapLevel(),Ag=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=db(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cg,Dg,Tg),this._renderer.xr.enabled=Ag,e.scissorTest=!1,sh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cg=this._renderer.getRenderTarget(),Dg=this._renderer.getActiveCubeFace(),Tg=this._renderer.getActiveMipmapLevel(),Ag=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:To,format:Hn,colorSpace:is,depthBuffer:!1},r=ub(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ub(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wP(s)),this._blurMaterial=CP(s,e,t)}return r}_compileMaterial(e){let t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,wg)}_sceneToCubeUV(e,t,i,r,s){let c=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(cb),d.toneMapping=Hi,d.autoClear=!1;let g=new $a({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),y=new hn(new gr,g),m=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(cb),m=!0);for(let w=0;w<6;w++){let S=w%3;S===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):S===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));let E=this._cubeSize;sh(r,S*E,w>2?E:0,E,E),d.setRenderTarget(r),m&&d.render(y,c),d.render(e,c)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ss||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hb()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=db());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;sh(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,wg)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lb[(r-s-1)%lb.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new hn(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ds-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):ds;m>ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);let p=[],w=0;for(let D=0;D<ds;++D){let F=D/y,b=Math.exp(-F*F/2);p.push(b),D===0?w+=b:D<m&&(w+=2*b)}for(let D=0;D<p.length;D++)p[D]=p[D]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let E=this._sizeLods[r],N=3*E*(r>S-Po?r-S+Po:0),I=4*(this._cubeSize-E);sh(t,N,I,3*E,2*E),c.setRenderTarget(t),c.render(d,wg)}};function wP(n){let e=[],t=[],i=[],r=n,s=n-Po+1+ab.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Po?c=ab[o-n+Po-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,y=3,m=2,p=1,w=new Float32Array(y*g*h),S=new Float32Array(m*g*h),E=new Float32Array(p*g*h);for(let I=0;I<h;I++){let D=I%3*2/3-1,F=I>2?0:-1,b=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];w.set(b,y*g*I),S.set(f,m*g*I);let x=[I,I,I,I,I,I];E.set(x,p*g*I)}let N=new mr;N.setAttribute("position",new Mn(w,y)),N.setAttribute("uv",new Mn(S,m)),N.setAttribute("faceIndex",new Mn(E,p)),e.push(N),r>Po&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ub(n,e,t){let i=new mi(n,e,t);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sh(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function CP(n,e,t){let i=new Float32Array(ds),r=new O(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bg(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function db(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bg(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function hb(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Bg(){return`

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
	`}function DP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ed||c===Sd,u=c===ss||c===os;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ah(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new ah(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function TP(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&hc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function AP(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,y=0;if(h!==null){let w=h.array;y=h.version;for(let S=0,E=w.length;S<E;S+=3){let N=w[S+0],I=w[S+1],D=w[S+2];f.push(N,I,I,D,D,N)}}else if(g!==void 0){let w=g.array;y=g.version;for(let S=0,E=w.length/3-1;S<E;S+=3){let N=S+0,I=S+1,D=S+2;f.push(N,I,I,D,D,N)}}else return;let m=new(xg(f)?Xa:qa)(f,1);m.version=y;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function IP(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,y,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*y[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function RP(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function NP(n,e,t){let i=new WeakMap,r=new pt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],E=0;g===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let N=a.attributes.position.count*E,I=1;N>e.maxTextureSize&&(I=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let D=new Float32Array(N*I*4*d),F=new ja(D,N,I,d);F.type=yi,F.needsUpdate=!0;let b=E*4;for(let T=0;T<d;T++){let G=p[T],B=w[T],X=S[T],Y=N*I*4*T;for(let $=0;$<G.count;$++){let K=$*b;g===!0&&(r.fromBufferAttribute(G,$),D[Y+K+0]=r.x,D[Y+K+1]=r.y,D[Y+K+2]=r.z,D[Y+K+3]=0),y===!0&&(r.fromBufferAttribute(B,$),D[Y+K+4]=r.x,D[Y+K+5]=r.y,D[Y+K+6]=r.z,D[Y+K+7]=0),m===!0&&(r.fromBufferAttribute(X,$),D[Y+K+8]=r.x,D[Y+K+9]=r.y,D[Y+K+10]=r.z,D[Y+K+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:F,size:new Oe(N,I)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function PP(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Rb=new Er,fb=new Ja(1,1),Nb=new ja,Pb=new td,Ob=new Za,pb=[],mb=[],gb=new Float32Array(16),vb=new Float32Array(9),yb=new Float32Array(4);function Fo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=pb[r];if(s===void 0&&(s=new Float32Array(r),pb[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lh(n,e){let t=mb[e];t===void 0&&(t=new Int32Array(e),mb[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function OP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function FP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function LP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function kP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function UP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,i))return;yb.set(i),n.uniformMatrix2fv(this.addr,!1,yb),Bt(t,i)}}function BP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,i))return;vb.set(i),n.uniformMatrix3fv(this.addr,!1,vb),Bt(t,i)}}function VP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,i))return;gb.set(i),n.uniformMatrix4fv(this.addr,!1,gb),Bt(t,i)}}function HP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function GP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function jP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function WP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $P(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function qP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function XP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function YP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(fb.compareFunction=gg,s=fb):s=Rb,t.setTexture2D(e||s,r)}function ZP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Pb,r)}function KP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ob,r)}function JP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Nb,r)}function QP(n){switch(n){case 5126:return OP;case 35664:return FP;case 35665:return LP;case 35666:return kP;case 35674:return UP;case 35675:return BP;case 35676:return VP;case 5124:case 35670:return HP;case 35667:case 35671:return zP;case 35668:case 35672:return GP;case 35669:case 35673:return jP;case 5125:return WP;case 36294:return $P;case 36295:return qP;case 36296:return XP;case 35678:case 36198:case 36298:case 36306:case 35682:return YP;case 35679:case 36299:case 36307:return ZP;case 35680:case 36300:case 36308:case 36293:return KP;case 36289:case 36303:case 36311:case 36292:return JP}}function eO(n,e){n.uniform1fv(this.addr,e)}function tO(n,e){let t=Fo(e,this.size,2);n.uniform2fv(this.addr,t)}function nO(n,e){let t=Fo(e,this.size,3);n.uniform3fv(this.addr,t)}function iO(n,e){let t=Fo(e,this.size,4);n.uniform4fv(this.addr,t)}function rO(n,e){let t=Fo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sO(n,e){let t=Fo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oO(n,e){let t=Fo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function aO(n,e){n.uniform1iv(this.addr,e)}function cO(n,e){n.uniform2iv(this.addr,e)}function lO(n,e){n.uniform3iv(this.addr,e)}function uO(n,e){n.uniform4iv(this.addr,e)}function dO(n,e){n.uniform1uiv(this.addr,e)}function hO(n,e){n.uniform2uiv(this.addr,e)}function fO(n,e){n.uniform3uiv(this.addr,e)}function pO(n,e){n.uniform4uiv(this.addr,e)}function mO(n,e,t){let i=this.cache,r=e.length,s=lh(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Rb,s[o])}function gO(n,e,t){let i=this.cache,r=e.length,s=lh(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Pb,s[o])}function vO(n,e,t){let i=this.cache,r=e.length,s=lh(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ob,s[o])}function yO(n,e,t){let i=this.cache,r=e.length,s=lh(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Nb,s[o])}function _O(n){switch(n){case 5126:return eO;case 35664:return tO;case 35665:return nO;case 35666:return iO;case 35674:return rO;case 35675:return sO;case 35676:return oO;case 5124:case 35670:return aO;case 35667:case 35671:return cO;case 35668:case 35672:return lO;case 35669:case 35673:return uO;case 5125:return dO;case 36294:return hO;case 36295:return fO;case 36296:return pO;case 35678:case 36198:case 36298:case 36306:case 35682:return mO;case 35679:case 36299:case 36307:return gO;case 35680:case 36300:case 36308:case 36293:return vO;case 36289:case 36303:case 36311:case 36292:return yO}}var Rg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=QP(t.type)}},Ng=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_O(t.type)}},Pg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Ig=/(\w+)(\])?(\[|\.)?/g;function _b(n,e){n.seq.push(e),n.map[e.id]=e}function xO(n,e,t){let i=n.name,r=i.length;for(Ig.lastIndex=0;;){let s=Ig.exec(i),o=Ig.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){_b(t,l===void 0?new Rg(a,n,e):new Ng(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Pg(a),_b(t,d)),t=d}}}var Oo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);xO(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function xb(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var MO=37297,bO=0;function EO(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Mb=new ke;function SO(n){ot._getMatrix(Mb,ot.workingColorSpace,n);let e=`mat3( ${Mb.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case Ha:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bb(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+EO(n.getShaderSource(e),o)}else return r}function wO(n,e){let t=SO(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function CO(n,e){let t;switch(e){case kM:t="Linear";break;case UM:t="Reinhard";break;case BM:t="Cineon";break;case VM:t="ACESFilmic";break;case zM:t="AgX";break;case GM:t="Neutral";break;case HM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oh=new O;function DO(){ot.getLuminanceCoefficients(oh);let n=oh.x.toFixed(4),e=oh.y.toFixed(4),t=oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TO(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fc).join(`
`)}function AO(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function IO(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fc(n){return n!==""}function Eb(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sb(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var RO=/^[ \t]*#include +<([\w\d./]+)>/gm;function Og(n){return n.replace(RO,PO)}var NO=new Map;function PO(n,e){let t=ze[e];if(t===void 0){let i=NO.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Og(t)}var OO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wb(n){return n.replace(OO,FO)}function FO(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cb(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function LO(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ig?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function kO(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UO(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function BO(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Co:e="ENVMAP_BLENDING_MULTIPLY";break;case FM:e="ENVMAP_BLENDING_MIX";break;case LM:e="ENVMAP_BLENDING_ADD";break}return e}function VO(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function HO(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=LO(t),l=kO(t),u=UO(t),d=BO(t),f=VO(t),h=TO(t),g=AO(s),y=r.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fc).join(`
`),p.length>0&&(p+=`
`)):(m=[Cb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fc).join(`
`),p=[Cb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?ze.tonemapping_pars_fragment:"",t.toneMapping!==Hi?CO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,wO("linearToOutputTexel",t.outputColorSpace),DO(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fc).join(`
`)),o=Og(o),o=Eb(o,t),o=Sb(o,t),a=Og(a),a=Eb(a,t),a=Sb(a,t),o=wb(o),a=wb(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=w+m+o,E=w+p+a,N=xb(r,r.VERTEX_SHADER,S),I=xb(r,r.FRAGMENT_SHADER,E);r.attachShader(y,N),r.attachShader(y,I),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function D(T){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(N).trim(),X=r.getShaderInfoLog(I).trim(),Y=!0,$=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,N,I);else{let K=bb(r,N,"vertex"),H=bb(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+G+`
`+K+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||X==="")&&($=!1);$&&(T.diagnostics={runnable:Y,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(N),r.deleteShader(I),F=new Oo(r,y),b=IO(r,y)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,MO)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bO++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=I,this}var zO=0,Fg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Lg(e),t.set(e,i)),i}},Lg=class{constructor(e){this.id=zO++,this.code=e,this.usedTimes=0}};function GO(n,e,t,i,r,s,o){let a=new Wa,c=new Fg,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,T,G,B){let X=G.fog,Y=B.geometry,$=b.isMeshStandardMaterial?G.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),H=K&&K.mapping===sc?K.image.height:null,se=g[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let he=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_e=he!==void 0?he.length:0,$e=0;Y.morphAttributes.position!==void 0&&($e=1),Y.morphAttributes.normal!==void 0&&($e=2),Y.morphAttributes.color!==void 0&&($e=3);let vt,j,ee,ge;if(se){let ft=_i[se];vt=ft.vertexShader,j=ft.fragmentShader}else vt=b.vertexShader,j=b.fragmentShader,c.update(b),ee=c.getVertexShaderID(b),ge=c.getFragmentShaderID(b);let oe=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),ct=B.isInstancedMesh===!0,Ae=B.isBatchedMesh===!0,At=!!b.map,Et=!!b.matcap,Ke=!!K,C=!!b.aoMap,En=!!b.lightMap,it=!!b.bumpMap,Je=!!b.normalMap,xe=!!b.displacementMap,Mt=!!b.emissiveMap,ye=!!b.metalnessMap,M=!!b.roughnessMap,v=b.anisotropy>0,L=b.clearcoat>0,W=b.dispersion>0,Z=b.iridescence>0,z=b.sheen>0,ve=b.transmission>0,ae=v&&!!b.anisotropyMap,Ce=L&&!!b.clearcoatMap,De=L&&!!b.clearcoatNormalMap,J=L&&!!b.clearcoatRoughnessMap,fe=Z&&!!b.iridescenceMap,Te=Z&&!!b.iridescenceThicknessMap,Ne=z&&!!b.sheenColorMap,pe=z&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,He=!!b.specularColorMap,_t=!!b.specularIntensityMap,A=ve&&!!b.transmissionMap,ce=ve&&!!b.thicknessMap,V=!!b.gradientMap,q=!!b.alphaMap,ue=b.alphaTest>0,le=!!b.alphaHash,Ue=!!b.extensions,wt=Hi;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(wt=n.toneMapping);let Kt={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:vt,fragmentShader:j,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&B._colorsTexture!==null,instancing:ct,instancingColor:ct&&B.instanceColor!==null,instancingMorph:ct&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:is,alphaToCoverage:!!b.alphaToCoverage,map:At,matcap:Et,envMap:Ke,envMapMode:Ke&&K.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:En,bumpMap:it,normalMap:Je,displacementMap:f&&xe,emissiveMap:Mt,normalMapObjectSpace:Je&&b.normalMapType===qM,normalMapTangentSpace:Je&&b.normalMapType===mg,metalnessMap:ye,roughnessMap:M,anisotropy:v,anisotropyMap:ae,clearcoat:L,clearcoatMap:Ce,clearcoatNormalMap:De,clearcoatRoughnessMap:J,dispersion:W,iridescence:Z,iridescenceMap:fe,iridescenceThicknessMap:Te,sheen:z,sheenColorMap:Ne,sheenRoughnessMap:pe,specularMap:Qe,specularColorMap:He,specularIntensityMap:_t,transmission:ve,transmissionMap:A,thicknessMap:ce,gradientMap:V,opaque:b.transparent===!1&&b.blending===ts&&b.alphaToCoverage===!1,alphaMap:q,alphaTest:ue,alphaHash:le,combine:b.combine,mapUv:At&&y(b.map.channel),aoMapUv:C&&y(b.aoMap.channel),lightMapUv:En&&y(b.lightMap.channel),bumpMapUv:it&&y(b.bumpMap.channel),normalMapUv:Je&&y(b.normalMap.channel),displacementMapUv:xe&&y(b.displacementMap.channel),emissiveMapUv:Mt&&y(b.emissiveMap.channel),metalnessMapUv:ye&&y(b.metalnessMap.channel),roughnessMapUv:M&&y(b.roughnessMap.channel),anisotropyMapUv:ae&&y(b.anisotropyMap.channel),clearcoatMapUv:Ce&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:De&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:pe&&y(b.sheenRoughnessMap.channel),specularMapUv:Qe&&y(b.specularMap.channel),specularColorMapUv:He&&y(b.specularColorMap.channel),specularIntensityMapUv:_t&&y(b.specularIntensityMap.channel),transmissionMapUv:A&&y(b.transmissionMap.channel),thicknessMapUv:ce&&y(b.thicknessMap.channel),alphaMapUv:q&&y(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Je||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(At||q),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:we,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:$e,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===mt,decodeVideoTextureEmissive:Mt&&b.emissiveMap.isVideoTexture===!0&&ot.getTransfer(b.emissiveMap.colorSpace)===mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vi,flipSided:b.side===an,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ue&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&b.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function p(b){let x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(let T in b.defines)x.push(T),x.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(w(x,b),S(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function w(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function S(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function E(b){let x=g[b.type],T;if(x){let G=_i[x];T=ob.clone(G.uniforms)}else T=b.uniforms;return T}function N(b,x){let T;for(let G=0,B=u.length;G<B;G++){let X=u[G];if(X.cacheKey===x){T=X,++T.usedTimes;break}}return T===void 0&&(T=new HO(n,x,b,s),u.push(T)),T}function I(b){if(--b.usedTimes===0){let x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function D(b){c.remove(b)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:N,releaseProgram:I,releaseShaderCache:D,programs:u,dispose:F}}function jO(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function WO(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Db(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Tb(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||WO),i.length>1&&i.sort(f||Db),r.length>1&&r.sort(f||Db)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function $O(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Tb,n.set(i,[o])):r>=s.length?(o=new Tb,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Xe};break;case"SpotLight":t={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function XO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var YO=0;function ZO(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function KO(n){let e=new qO,t=XO(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let r=new O,s=new St,o=new St;function a(l){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,y=0,m=0,p=0,w=0,S=0,E=0,N=0,I=0,D=0;l.sort(ZO);for(let b=0,x=l.length;b<x;b++){let T=l[b],G=T.color,B=T.intensity,X=T.distance,Y=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=G.r*B,d+=G.g*B,f+=G.b*B;else if(T.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(T.sh.coefficients[$],B);D++}else if(T.isDirectionalLight){let $=e.get(T);if($.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let K=T.shadow,H=t.get(T);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=Y,i.directionalShadowMatrix[h]=T.shadow.matrix,w++}i.directional[h]=$,h++}else if(T.isSpotLight){let $=e.get(T);$.position.setFromMatrixPosition(T.matrixWorld),$.color.copy(G).multiplyScalar(B),$.distance=X,$.coneCos=Math.cos(T.angle),$.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),$.decay=T.decay,i.spot[y]=$;let K=T.shadow;if(T.map&&(i.spotLightMap[N]=T.map,N++,K.updateMatrices(T),T.castShadow&&I++),i.spotLightMatrix[y]=K.matrix,T.castShadow){let H=t.get(T);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=Y,E++}y++}else if(T.isRectAreaLight){let $=e.get(T);$.color.copy(G).multiplyScalar(B),$.halfWidth.set(T.width*.5,0,0),$.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=$,m++}else if(T.isPointLight){let $=e.get(T);if($.color.copy(T.color).multiplyScalar(T.intensity),$.distance=T.distance,$.decay=T.decay,T.castShadow){let K=T.shadow,H=t.get(T);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=T.shadow.matrix,S++}i.point[g]=$,g++}else if(T.isHemisphereLight){let $=e.get(T);$.skyColor.copy(T.color).multiplyScalar(B),$.groundColor.copy(T.groundColor).multiplyScalar(B),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let F=i.hash;(F.directionalLength!==h||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==w||F.numPointShadows!==S||F.numSpotShadows!==E||F.numSpotMaps!==N||F.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+N-I,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=D,F.directionalLength=h,F.pointLength=g,F.spotLength=y,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=w,F.numPointShadows=S,F.numSpotShadows=E,F.numSpotMaps=N,F.numLightProbes=D,i.version=YO++)}function c(l,u){let d=0,f=0,h=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){let S=l[p];if(S.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(S.isSpotLight){let E=i.spot[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let E=i.hemi[y];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function Ab(n){let e=new KO(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function JO(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Ab(n),e.set(r,[a])):s>=o.length?(a=new Ab(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var QO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eF=`uniform sampler2D shadow_pass;
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
}`;function tF(n,e,t){let i=new Eo,r=new Oe,s=new Oe,o=new pt,a=new rd({depthPacking:$M}),c=new sd,l={},u=t.maxTextureSize,d={[Bi]:an,[an]:Bi,[vi]:vi},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:QO,fragmentShader:eF}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new mr;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new hn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ig;let p=this.type;this.render=function(I,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let b=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Vi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=p!==gi&&this.type===gi,X=p===gi&&this.type!==gi;for(let Y=0,$=I.length;Y<$;Y++){let K=I[Y],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let se=H.getFrameExtents();if(r.multiply(se),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,H.mapSize.y=s.y)),H.map===null||B===!0||X===!0){let _e=this.type!==gi?{minFilter:Bn,magFilter:Bn}:{};H.map!==null&&H.map.dispose(),H.map=new mi(r.x,r.y,_e),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let he=H.getViewportCount();for(let _e=0;_e<he;_e++){let $e=H.getViewport(_e);o.set(s.x*$e.x,s.y*$e.y,s.x*$e.z,s.y*$e.w),G.viewport(o),H.updateMatrices(K,_e),i=H.getFrustum(),E(D,F,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===gi&&w(H,F),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,x,T)};function w(I,D){let F=e.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new mi(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(D,null,F,f,y,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(D,null,F,h,y,null)}function S(I,D,F,b){let x=null,T=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(T!==void 0)x=T;else if(x=F.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let G=x.uuid,B=D.uuid,X=l[G];X===void 0&&(X={},l[G]=X);let Y=X[B];Y===void 0&&(Y=x.clone(),X[B]=Y,D.addEventListener("dispose",N)),x=Y}if(x.visible=D.visible,x.wireframe=D.wireframe,b===gi?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:d[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let G=n.properties.get(x);G.light=F}return x}function E(I,D,F,b,x){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===gi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);let B=e.update(I),X=I.material;if(Array.isArray(X)){let Y=B.groups;for(let $=0,K=Y.length;$<K;$++){let H=Y[$],se=X[H.materialIndex];if(se&&se.visible){let he=S(I,se,b,x);I.onBeforeShadow(n,I,D,F,B,he,H),n.renderBufferDirect(F,null,B,he,I,H),I.onAfterShadow(n,I,D,F,B,he,H)}}}else if(X.visible){let Y=S(I,X,b,x);I.onBeforeShadow(n,I,D,F,B,Y,null),n.renderBufferDirect(F,null,B,Y,I,null),I.onAfterShadow(n,I,D,F,B,Y,null)}}let G=I.children;for(let B=0,X=G.length;B<X;B++)E(G[B],D,F,b,x)}function N(I){I.target.removeEventListener("dispose",N);for(let F in l){let b=l[F],x=I.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}var nF={[gd]:vd,[yd]:Md,[_d]:bd,[ns]:xd,[vd]:gd,[Md]:yd,[bd]:_d,[xd]:ns};function iF(n,e){function t(){let A=!1,ce=new pt,V=null,q=new pt(0,0,0,0);return{setMask:function(ue){V!==ue&&!A&&(n.colorMask(ue,ue,ue,ue),V=ue)},setLocked:function(ue){A=ue},setClear:function(ue,le,Ue,wt,Kt){Kt===!0&&(ue*=wt,le*=wt,Ue*=wt),ce.set(ue,le,Ue,wt),q.equals(ce)===!1&&(n.clearColor(ue,le,Ue,wt),q.copy(ce))},reset:function(){A=!1,V=null,q.set(-1,0,0,0)}}}function i(){let A=!1,ce=!1,V=null,q=null,ue=null;return{setReversed:function(le){if(ce!==le){let Ue=e.get("EXT_clip_control");le?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ce=le;let wt=ue;ue=null,this.setClear(wt)}},getReversed:function(){return ce},setTest:function(le){le?oe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(le){V!==le&&!A&&(n.depthMask(le),V=le)},setFunc:function(le){if(ce&&(le=nF[le]),q!==le){switch(le){case gd:n.depthFunc(n.NEVER);break;case vd:n.depthFunc(n.ALWAYS);break;case yd:n.depthFunc(n.LESS);break;case ns:n.depthFunc(n.LEQUAL);break;case _d:n.depthFunc(n.EQUAL);break;case xd:n.depthFunc(n.GEQUAL);break;case Md:n.depthFunc(n.GREATER);break;case bd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=le}},setLocked:function(le){A=le},setClear:function(le){ue!==le&&(ce&&(le=1-le),n.clearDepth(le),ue=le)},reset:function(){A=!1,V=null,q=null,ue=null,ce=!1}}}function r(){let A=!1,ce=null,V=null,q=null,ue=null,le=null,Ue=null,wt=null,Kt=null;return{setTest:function(ft){A||(ft?oe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(ft){ce!==ft&&!A&&(n.stencilMask(ft),ce=ft)},setFunc:function(ft,zn,xi){(V!==ft||q!==zn||ue!==xi)&&(n.stencilFunc(ft,zn,xi),V=ft,q=zn,ue=xi)},setOp:function(ft,zn,xi){(le!==ft||Ue!==zn||wt!==xi)&&(n.stencilOp(ft,zn,xi),le=ft,Ue=zn,wt=xi)},setLocked:function(ft){A=ft},setClear:function(ft){Kt!==ft&&(n.clearStencil(ft),Kt=ft)},reset:function(){A=!1,ce=null,V=null,q=null,ue=null,le=null,Ue=null,wt=null,Kt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,S=null,E=null,N=null,I=null,D=new Xe(0,0,0),F=0,b=!1,x=null,T=null,G=null,B=null,X=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,K=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=K>=2);let se=null,he={},_e=n.getParameter(n.SCISSOR_BOX),$e=n.getParameter(n.VIEWPORT),vt=new pt().fromArray(_e),j=new pt().fromArray($e);function ee(A,ce,V,q){let ue=new Uint8Array(4),le=n.createTexture();n.bindTexture(A,le),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<V;Ue++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(ce+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return le}let ge={};ge[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(ns),it(!1),Je(ng),oe(n.CULL_FACE),C(Vi);function oe(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function we(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function ct(A,ce){return d[A]!==ce?(n.bindFramebuffer(A,ce),d[A]=ce,A===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ce),A===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ae(A,ce){let V=h,q=!1;if(A){V=f.get(ce),V===void 0&&(V=[],f.set(ce,V));let ue=A.textures;if(V.length!==ue.length||V[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Ue=ue.length;le<Ue;le++)V[le]=n.COLOR_ATTACHMENT0+le;V.length=ue.length,q=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,q=!0);q&&n.drawBuffers(V)}function At(A){return g!==A?(n.useProgram(A),g=A,!0):!1}let Et={[dr]:n.FUNC_ADD,[yM]:n.FUNC_SUBTRACT,[_M]:n.FUNC_REVERSE_SUBTRACT};Et[xM]=n.MIN,Et[MM]=n.MAX;let Ke={[bM]:n.ZERO,[EM]:n.ONE,[SM]:n.SRC_COLOR,[Xu]:n.SRC_ALPHA,[IM]:n.SRC_ALPHA_SATURATE,[TM]:n.DST_COLOR,[CM]:n.DST_ALPHA,[wM]:n.ONE_MINUS_SRC_COLOR,[Yu]:n.ONE_MINUS_SRC_ALPHA,[AM]:n.ONE_MINUS_DST_COLOR,[DM]:n.ONE_MINUS_DST_ALPHA,[RM]:n.CONSTANT_COLOR,[NM]:n.ONE_MINUS_CONSTANT_COLOR,[PM]:n.CONSTANT_ALPHA,[OM]:n.ONE_MINUS_CONSTANT_ALPHA};function C(A,ce,V,q,ue,le,Ue,wt,Kt,ft){if(A===Vi){y===!0&&(we(n.BLEND),y=!1);return}if(y===!1&&(oe(n.BLEND),y=!0),A!==vM){if(A!==m||ft!==b){if((p!==dr||E!==dr)&&(n.blendEquation(n.FUNC_ADD),p=dr,E=dr),ft)switch(A){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rg:n.blendFunc(n.ONE,n.ONE);break;case sg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case og:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rg:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case og:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,S=null,N=null,I=null,D.set(0,0,0),F=0,m=A,b=ft}return}ue=ue||ce,le=le||V,Ue=Ue||q,(ce!==p||ue!==E)&&(n.blendEquationSeparate(Et[ce],Et[ue]),p=ce,E=ue),(V!==w||q!==S||le!==N||Ue!==I)&&(n.blendFuncSeparate(Ke[V],Ke[q],Ke[le],Ke[Ue]),w=V,S=q,N=le,I=Ue),(wt.equals(D)===!1||Kt!==F)&&(n.blendColor(wt.r,wt.g,wt.b,Kt),D.copy(wt),F=Kt),m=A,b=!1}function En(A,ce){A.side===vi?we(n.CULL_FACE):oe(n.CULL_FACE);let V=A.side===an;ce&&(V=!V),it(V),A.blending===ts&&A.transparent===!1?C(Vi):C(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),s.setMask(A.colorWrite);let q=A.stencilWrite;a.setTest(q),q&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Mt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function it(A){x!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),x=A)}function Je(A){A!==pM?(oe(n.CULL_FACE),A!==T&&(A===ng?n.cullFace(n.BACK):A===mM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),T=A}function xe(A){A!==G&&($&&n.lineWidth(A),G=A)}function Mt(A,ce,V){A?(oe(n.POLYGON_OFFSET_FILL),(B!==ce||X!==V)&&(n.polygonOffset(ce,V),B=ce,X=V)):we(n.POLYGON_OFFSET_FILL)}function ye(A){A?oe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function M(A){A===void 0&&(A=n.TEXTURE0+Y-1),se!==A&&(n.activeTexture(A),se=A)}function v(A,ce,V){V===void 0&&(se===null?V=n.TEXTURE0+Y-1:V=se);let q=he[V];q===void 0&&(q={type:void 0,texture:void 0},he[V]=q),(q.type!==A||q.texture!==ce)&&(se!==V&&(n.activeTexture(V),se=V),n.bindTexture(A,ce||ge[A]),q.type=A,q.texture=ce)}function L(){let A=he[se];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function W(){try{n.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function z(){try{n.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{n.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function De(){try{n.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{n.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function fe(){try{n.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Te(){try{n.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ne(A){vt.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),vt.copy(A))}function pe(A){j.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),j.copy(A))}function Qe(A,ce){let V=l.get(ce);V===void 0&&(V=new WeakMap,l.set(ce,V));let q=V.get(A);q===void 0&&(q=n.getUniformBlockIndex(ce,A.name),V.set(A,q))}function He(A,ce){let q=l.get(ce).get(A);c.get(ce)!==q&&(n.uniformBlockBinding(ce,q,A.__bindingPointIndex),c.set(ce,q))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,he={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,S=null,E=null,N=null,I=null,D=new Xe(0,0,0),F=0,b=!1,x=null,T=null,G=null,B=null,X=null,vt.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:we,bindFramebuffer:ct,drawBuffers:Ae,useProgram:At,setBlending:C,setMaterial:En,setFlipSided:it,setCullFace:Je,setLineWidth:xe,setPolygonOffset:Mt,setScissorTest:ye,activeTexture:M,bindTexture:v,unbindTexture:L,compressedTexImage2D:W,compressedTexImage3D:Z,texImage2D:fe,texImage3D:Te,updateUBOMapping:Qe,uniformBlockBinding:He,texStorage2D:De,texStorage3D:J,texSubImage2D:z,texSubImage3D:ve,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ce,scissor:Ne,viewport:pe,reset:_t}}function rF(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return h?new OffscreenCanvas(M,v):Ga("canvas")}function y(M,v,L){let W=1,Z=ye(M);if((Z.width>L||Z.height>L)&&(W=L/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let z=Math.floor(W*Z.width),ve=Math.floor(W*Z.height);d===void 0&&(d=g(z,ve));let ae=v?g(z,ve):d;return ae.width=z,ae.height=ve,ae.getContext("2d").drawImage(M,0,0,z,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+ve+")."),ae}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(M,v,L,W,Z=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let z=v;if(v===n.RED&&(L===n.FLOAT&&(z=n.R32F),L===n.HALF_FLOAT&&(z=n.R16F),L===n.UNSIGNED_BYTE&&(z=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.R8UI),L===n.UNSIGNED_SHORT&&(z=n.R16UI),L===n.UNSIGNED_INT&&(z=n.R32UI),L===n.BYTE&&(z=n.R8I),L===n.SHORT&&(z=n.R16I),L===n.INT&&(z=n.R32I)),v===n.RG&&(L===n.FLOAT&&(z=n.RG32F),L===n.HALF_FLOAT&&(z=n.RG16F),L===n.UNSIGNED_BYTE&&(z=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RG8UI),L===n.UNSIGNED_SHORT&&(z=n.RG16UI),L===n.UNSIGNED_INT&&(z=n.RG32UI),L===n.BYTE&&(z=n.RG8I),L===n.SHORT&&(z=n.RG16I),L===n.INT&&(z=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(z=n.RGB16UI),L===n.UNSIGNED_INT&&(z=n.RGB32UI),L===n.BYTE&&(z=n.RGB8I),L===n.SHORT&&(z=n.RGB16I),L===n.INT&&(z=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),L===n.UNSIGNED_INT&&(z=n.RGBA32UI),L===n.BYTE&&(z=n.RGBA8I),L===n.SHORT&&(z=n.RGBA16I),L===n.INT&&(z=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),v===n.RGBA){let ve=Z?Ha:ot.getTransfer(W);L===n.FLOAT&&(z=n.RGBA32F),L===n.HALF_FLOAT&&(z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(z=ve===mt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function E(M,v){let L;return M?v===null||v===br||v===Ao?L=n.DEPTH24_STENCIL8:v===yi?L=n.DEPTH32F_STENCIL8:v===Do&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===br||v===Ao?L=n.DEPTH_COMPONENT24:v===yi?L=n.DEPTH_COMPONENT32F:v===Do&&(L=n.DEPTH_COMPONENT16),L}function N(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Bn&&M.minFilter!==ni?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function I(M){let v=M.target;v.removeEventListener("dispose",I),F(v),v.isVideoTexture&&u.delete(v)}function D(M){let v=M.target;v.removeEventListener("dispose",D),x(v)}function F(M){let v=i.get(M);if(v.__webglInit===void 0)return;let L=M.source,W=f.get(L);if(W){let Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(M),Object.keys(W).length===0&&f.delete(L)}i.remove(M)}function b(M){let v=i.get(M);n.deleteTexture(v.__webglTexture);let L=M.source,W=f.get(L);delete W[v.__cacheKey],o.memory.textures--}function x(M){let v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=M.textures;for(let W=0,Z=L.length;W<Z;W++){let z=i.get(L[W]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(L[W])}i.remove(M)}let T=0;function G(){T=0}function B(){let M=T;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),T+=1,M}function X(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function Y(M,v){let L=i.get(M);if(M.isVideoTexture&&xe(M),M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){let W=M.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(L,M,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function $(M,v){let L=i.get(M);if(M.version>0&&L.__version!==M.version){j(L,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function K(M,v){let L=i.get(M);if(M.version>0&&L.__version!==M.version){j(L,M,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function H(M,v){let L=i.get(M);if(M.version>0&&L.__version!==M.version){ee(L,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}let se={[Zu]:n.REPEAT,[ur]:n.CLAMP_TO_EDGE,[Ku]:n.MIRRORED_REPEAT},he={[Bn]:n.NEAREST,[jM]:n.NEAREST_MIPMAP_NEAREST,[oc]:n.NEAREST_MIPMAP_LINEAR,[ni]:n.LINEAR,[wd]:n.LINEAR_MIPMAP_NEAREST,[Mr]:n.LINEAR_MIPMAP_LINEAR},_e={[XM]:n.NEVER,[eb]:n.ALWAYS,[YM]:n.LESS,[gg]:n.LEQUAL,[ZM]:n.EQUAL,[QM]:n.GEQUAL,[KM]:n.GREATER,[JM]:n.NOTEQUAL};function $e(M,v){if(v.type===yi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ni||v.magFilter===wd||v.magFilter===oc||v.magFilter===Mr||v.minFilter===ni||v.minFilter===wd||v.minFilter===oc||v.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,se[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,se[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,se[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,he[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,_e[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Bn||v.minFilter!==oc&&v.minFilter!==Mr||v.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function vt(M,v){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",I));let W=v.source,Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));let z=X(v);if(z!==M.__cacheKey){Z[z]===void 0&&(Z[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Z[z].usedTimes++;let ve=Z[M.__cacheKey];ve!==void 0&&(Z[M.__cacheKey].usedTimes--,ve.usedTimes===0&&b(v)),M.__cacheKey=z,M.__webglTexture=Z[z].texture}return L}function j(M,v,L){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);let Z=vt(M,v),z=v.source;t.bindTexture(W,M.__webglTexture,n.TEXTURE0+L);let ve=i.get(z);if(z.version!==ve.__version||Z===!0){t.activeTexture(n.TEXTURE0+L);let ae=ot.getPrimaries(ot.workingColorSpace),Ce=v.colorSpace===zi?null:ot.getPrimaries(v.colorSpace),De=v.colorSpace===zi||ae===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let J=y(v.image,!1,r.maxTextureSize);J=Mt(v,J);let fe=s.convert(v.format,v.colorSpace),Te=s.convert(v.type),Ne=S(v.internalFormat,fe,Te,v.colorSpace,v.isVideoTexture);$e(W,v);let pe,Qe=v.mipmaps,He=v.isVideoTexture!==!0,_t=ve.__version===void 0||Z===!0,A=z.dataReady,ce=N(v,J);if(v.isDepthTexture)Ne=E(v.format===Io,v.type),_t&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ne,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ne,J.width,J.height,0,fe,Te,null));else if(v.isDataTexture)if(Qe.length>0){He&&_t&&t.texStorage2D(n.TEXTURE_2D,ce,Ne,Qe[0].width,Qe[0].height);for(let V=0,q=Qe.length;V<q;V++)pe=Qe[V],He?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,Te,pe.data):t.texImage2D(n.TEXTURE_2D,V,Ne,pe.width,pe.height,0,fe,Te,pe.data);v.generateMipmaps=!1}else He?(_t&&t.texStorage2D(n.TEXTURE_2D,ce,Ne,J.width,J.height),A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,fe,Te,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,J.width,J.height,0,fe,Te,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){He&&_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Ne,Qe[0].width,Qe[0].height,J.depth);for(let V=0,q=Qe.length;V<q;V++)if(pe=Qe[V],v.format!==Hn)if(fe!==null)if(He){if(A)if(v.layerUpdates.size>0){let ue=Sg(pe.width,pe.height,v.format,v.type);for(let le of v.layerUpdates){let Ue=pe.data.subarray(le*ue/pe.data.BYTES_PER_ELEMENT,(le+1)*ue/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,le,pe.width,pe.height,1,fe,Ue)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,J.depth,fe,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Ne,pe.width,pe.height,J.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,J.depth,fe,Te,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Ne,pe.width,pe.height,J.depth,0,fe,Te,pe.data)}else{He&&_t&&t.texStorage2D(n.TEXTURE_2D,ce,Ne,Qe[0].width,Qe[0].height);for(let V=0,q=Qe.length;V<q;V++)pe=Qe[V],v.format!==Hn?fe!==null?He?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Ne,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,Te,pe.data):t.texImage2D(n.TEXTURE_2D,V,Ne,pe.width,pe.height,0,fe,Te,pe.data)}else if(v.isDataArrayTexture)if(He){if(_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Ne,J.width,J.height,J.depth),A)if(v.layerUpdates.size>0){let V=Sg(J.width,J.height,v.format,v.type);for(let q of v.layerUpdates){let ue=J.data.subarray(q*V/J.data.BYTES_PER_ELEMENT,(q+1)*V/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,J.width,J.height,1,fe,Te,ue)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,fe,Te,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,J.width,J.height,J.depth,0,fe,Te,J.data);else if(v.isData3DTexture)He?(_t&&t.texStorage3D(n.TEXTURE_3D,ce,Ne,J.width,J.height,J.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,fe,Te,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,J.width,J.height,J.depth,0,fe,Te,J.data);else if(v.isFramebufferTexture){if(_t)if(He)t.texStorage2D(n.TEXTURE_2D,ce,Ne,J.width,J.height);else{let V=J.width,q=J.height;for(let ue=0;ue<ce;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ne,V,q,0,fe,Te,null),V>>=1,q>>=1}}else if(Qe.length>0){if(He&&_t){let V=ye(Qe[0]);t.texStorage2D(n.TEXTURE_2D,ce,Ne,V.width,V.height)}for(let V=0,q=Qe.length;V<q;V++)pe=Qe[V],He?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,fe,Te,pe):t.texImage2D(n.TEXTURE_2D,V,Ne,fe,Te,pe);v.generateMipmaps=!1}else if(He){if(_t){let V=ye(J);t.texStorage2D(n.TEXTURE_2D,ce,Ne,V.width,V.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Te,J)}else t.texImage2D(n.TEXTURE_2D,0,Ne,fe,Te,J);m(v)&&p(W),ve.__version=z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ee(M,v,L){if(v.image.length!==6)return;let W=vt(M,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+L);let z=i.get(Z);if(Z.version!==z.__version||W===!0){t.activeTexture(n.TEXTURE0+L);let ve=ot.getPrimaries(ot.workingColorSpace),ae=v.colorSpace===zi?null:ot.getPrimaries(v.colorSpace),Ce=v.colorSpace===zi||ve===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let De=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let q=0;q<6;q++)!De&&!J?fe[q]=y(v.image[q],!0,r.maxCubemapSize):fe[q]=J?v.image[q].image:v.image[q],fe[q]=Mt(v,fe[q]);let Te=fe[0],Ne=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),Qe=S(v.internalFormat,Ne,pe,v.colorSpace),He=v.isVideoTexture!==!0,_t=z.__version===void 0||W===!0,A=Z.dataReady,ce=N(v,Te);$e(n.TEXTURE_CUBE_MAP,v);let V;if(De){He&&_t&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Qe,Te.width,Te.height);for(let q=0;q<6;q++){V=fe[q].mipmaps;for(let ue=0;ue<V.length;ue++){let le=V[ue];v.format!==Hn?Ne!==null?He?A&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,le.width,le.height,Ne,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,Qe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,le.width,le.height,Ne,pe,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,Qe,le.width,le.height,0,Ne,pe,le.data)}}}else{if(V=v.mipmaps,He&&_t){V.length>0&&ce++;let q=ye(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Qe,q.width,q.height)}for(let q=0;q<6;q++)if(J){He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,fe[q].width,fe[q].height,Ne,pe,fe[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Qe,fe[q].width,fe[q].height,0,Ne,pe,fe[q].data);for(let ue=0;ue<V.length;ue++){let Ue=V[ue].image[q].image;He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,Ue.width,Ue.height,Ne,pe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,Qe,Ue.width,Ue.height,0,Ne,pe,Ue.data)}}else{He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ne,pe,fe[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Qe,Ne,pe,fe[q]);for(let ue=0;ue<V.length;ue++){let le=V[ue];He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,Ne,pe,le.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,Qe,Ne,pe,le.image[q])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),z.__version=Z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ge(M,v,L,W,Z,z){let ve=s.convert(L.format,L.colorSpace),ae=s.convert(L.type),Ce=S(L.internalFormat,ve,ae,L.colorSpace),De=i.get(v),J=i.get(L);if(J.__renderTarget=v,!De.__hasExternalTextures){let fe=Math.max(1,v.width>>z),Te=Math.max(1,v.height>>z);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,z,Ce,fe,Te,v.depth,0,ve,ae,null):t.texImage2D(Z,z,Ce,fe,Te,0,ve,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Je(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,J.__webglTexture,0,it(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,J.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(M,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){let W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,z=E(v.stencilBuffer,Z),ve=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=it(v);Je(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,z,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,M)}else{let W=v.textures;for(let Z=0;Z<W.length;Z++){let z=W[Z],ve=s.convert(z.format,z.colorSpace),ae=s.convert(z.type),Ce=S(z.internalFormat,ve,ae,z.colorSpace),De=it(v);L&&Je(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ce,v.width,v.height):Je(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Ce,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let Z=W.__webglTexture,z=it(v);if(v.depthTexture.format===vo)Je(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Io)Je(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ct(M){let v=i.get(M),L=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){let W=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let W=M.texture.mipmaps;W&&W.length>0?we(v.__webglFramebuffer[0],M):we(v.__webglFramebuffer,M)}else if(L){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),oe(v.__webglDepthbuffer[W],M,!1);else{let Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}else{let W=M.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),oe(v.__webglDepthbuffer,M,!1);else{let Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(M,v,L){let W=i.get(M);v!==void 0&&ge(W.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ct(M)}function At(M){let v=M.texture,L=i.get(M),W=i.get(v);M.addEventListener("dispose",D);let Z=M.textures,z=M.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),z){L.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[ae]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)L.__webglFramebuffer[ae][Ce]=n.createFramebuffer()}else L.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)L.__webglFramebuffer[ae]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ae=0,Ce=Z.length;ae<Ce;ae++){let De=i.get(Z[ae]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&Je(M)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){let Ce=Z[ae];L.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ae]);let De=s.convert(Ce.format,Ce.colorSpace),J=s.convert(Ce.type),fe=S(Ce.internalFormat,De,J,Ce.colorSpace,M.isXRRenderTarget===!0),Te=it(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,fe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,L.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(L.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),$e(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)ge(L.__webglFramebuffer[ae][Ce],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce);else ge(L.__webglFramebuffer[ae],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,Ce=Z.length;ae<Ce;ae++){let De=Z[ae],J=i.get(De);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),$e(n.TEXTURE_2D,De),ge(L.__webglFramebuffer,M,De,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(De)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ae=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,W.__webglTexture),$e(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)ge(L.__webglFramebuffer[Ce],M,v,n.COLOR_ATTACHMENT0,ae,Ce);else ge(L.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,ae,0);m(v)&&p(ae),t.unbindTexture()}M.depthBuffer&&ct(M)}function Et(M){let v=M.textures;for(let L=0,W=v.length;L<W;L++){let Z=v[L];if(m(Z)){let z=w(M),ve=i.get(Z).__webglTexture;t.bindTexture(z,ve),p(z),t.unbindTexture()}}}let Ke=[],C=[];function En(M){if(M.samples>0){if(Je(M)===!1){let v=M.textures,L=M.width,W=M.height,Z=n.COLOR_BUFFER_BIT,z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(M),ae=v.length>1;if(ae)for(let De=0;De<v.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let Ce=M.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let De=0;De<v.length;De++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[De]);let J=i.get(v[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,L,W,0,0,L,W,Z,n.NEAREST),c===!0&&(Ke.length=0,C.length=0,Ke.push(n.COLOR_ATTACHMENT0+De),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Ke.push(z),C.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let De=0;De<v.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,ve.__webglColorRenderbuffer[De]);let J=i.get(v[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function it(M){return Math.min(r.maxSamples,M.samples)}function Je(M){let v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function xe(M){let v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function Mt(M,v){let L=M.colorSpace,W=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==is&&L!==zi&&(ot.getTransfer(L)===mt?(W!==Hn||Z!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function ye(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Ae,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Je}function sF(n,e){function t(i,r=zi){let s,o=ot.getTransfer(r);if(i===ri)return n.UNSIGNED_BYTE;if(i===Dd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Td)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ag)return n.BYTE;if(i===cg)return n.SHORT;if(i===Do)return n.UNSIGNED_SHORT;if(i===Cd)return n.INT;if(i===br)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===To)return n.HALF_FLOAT;if(i===ug)return n.ALPHA;if(i===dg)return n.RGB;if(i===Hn)return n.RGBA;if(i===vo)return n.DEPTH_COMPONENT;if(i===Io)return n.DEPTH_STENCIL;if(i===hg)return n.RED;if(i===Ad)return n.RED_INTEGER;if(i===fg)return n.RG;if(i===Id)return n.RG_INTEGER;if(i===Rd)return n.RGBA_INTEGER;if(i===ac||i===cc||i===lc||i===uc)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nd||i===Pd||i===Od||i===Fd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ld||i===kd||i===Ud)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ld||i===kd)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ud)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bd||i===Vd||i===Hd||i===zd||i===Gd||i===jd||i===Wd||i===$d||i===qd||i===Xd||i===Yd||i===Zd||i===Kd||i===Jd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$d)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dc||i===Qd||i===eh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dc)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pg||i===th||i===nh||i===ih)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===th)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ih)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ao?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var oF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aF=`
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

}`,kg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Er,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ii({vertexShader:oF,fragmentShader:aF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new Qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ug=class extends pi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,y=new kg,m=t.getContextAttributes(),p=null,w=null,S=[],E=[],N=new Oe,I=null,D=new Zt;D.viewport=new pt;let F=new Zt;F.viewport=new pt;let b=[D,F],x=new pd,T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=S[j];return ee===void 0&&(ee=new bo,S[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=S[j];return ee===void 0&&(ee=new bo,S[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=S[j];return ee===void 0&&(ee=new bo,S[j]=ee),ee.getHandSpace()};function B(j){let ee=E.indexOf(j.inputSource);if(ee===-1)return;let ge=S[ee];ge!==void 0&&(ge.update(j.inputSource,j.frame,l||o),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let j=0;j<S.length;j++){let ee=E[j];ee!==null&&(E[j]=null,S[j].disconnect(ee))}T=null,G=null,y.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,w=null,vt.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(j){return fs(this,null,function*(){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),I=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,oe=null,we=null;m.depth&&(we=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?Io:vo,oe=m.stencil?Ao:br);let ct={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ct),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new mi(f.textureWidth,f.textureHeight,{format:Hn,type:ri,depthTexture:new Ja(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new mi(h.framebufferWidth,h.framebufferHeight,{format:Hn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),vt.setContext(r),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(j){for(let ee=0;ee<j.removed.length;ee++){let ge=j.removed[ee],oe=E.indexOf(ge);oe>=0&&(E[oe]=null,S[oe].disconnect(ge))}for(let ee=0;ee<j.added.length;ee++){let ge=j.added[ee],oe=E.indexOf(ge);if(oe===-1){for(let ct=0;ct<S.length;ct++)if(ct>=E.length){E.push(ge),oe=ct;break}else if(E[ct]===null){E[ct]=ge,oe=ct;break}if(oe===-1)break}let we=S[oe];we&&we.connect(ge)}}let $=new O,K=new O;function H(j,ee,ge){$.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ge.matrixWorld);let oe=$.distanceTo(K),we=ee.projectionMatrix.elements,ct=ge.projectionMatrix.elements,Ae=we[14]/(we[10]-1),At=we[14]/(we[10]+1),Et=(we[9]+1)/we[5],Ke=(we[9]-1)/we[5],C=(we[8]-1)/we[0],En=(ct[8]+1)/ct[0],it=Ae*C,Je=Ae*En,xe=oe/(-C+En),Mt=xe*-C;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Mt),j.translateZ(xe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let ye=Ae+xe,M=At+xe,v=it-Mt,L=Je+(oe-Mt),W=Et*At/M*ye,Z=Ke*At/M*ye;j.projectionMatrix.makePerspective(v,L,W,Z,ye,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function se(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ee=j.near,ge=j.far;y.texture!==null&&(y.depthNear>0&&(ee=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),x.near=F.near=D.near=ee,x.far=F.far=D.far=ge,(T!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,G=x.far),D.layers.mask=j.layers.mask|2,F.layers.mask=j.layers.mask|4,x.layers.mask=D.layers.mask|F.layers.mask;let oe=j.parent,we=x.cameras;se(x,oe);for(let ct=0;ct<we.length;ct++)se(we[ct],oe);we.length===2?H(x,D,F):x.projectionMatrix.copy(D.projectionMatrix),he(j,x,oe)};function he(j,ee,ge){ge===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=yo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let _e=null;function $e(j,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){let ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let oe=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Ae=0;Ae<ge.length;Ae++){let At=ge[Ae],Et=null;if(h!==null)Et=h.getViewport(At);else{let C=d.getViewSubImage(f,At);Et=C.viewport,Ae===0&&(e.setRenderTargetTextures(w,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(w))}let Ke=b[Ae];Ke===void 0&&(Ke=new Zt,Ke.layers.enable(Ae),Ke.viewport=new pt,b[Ae]=Ke),Ke.matrix.fromArray(At.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(At.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Et.x,Et.y,Et.width,Et.height),Ae===0&&(x.matrix.copy(Ke.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(Ke)}let we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let Ae=d.getDepthInformation(ge[0]);Ae&&Ae.isValid&&Ae.texture&&y.init(e,Ae,r.renderState)}}for(let ge=0;ge<S.length;ge++){let oe=E[ge],we=S[ge];oe!==null&&we!==void 0&&we.update(oe,ee,l||o)}_e&&_e(j,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let vt=new Ib;vt.setAnimationLoop($e),this.setAnimationLoop=function(j){_e=j},this.dispose=function(){}}},ls=new fr,cF=new St;function lF(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mg(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,S,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),S=w.envMap,E=w.envMapRotation;S&&(m.envMap.value=S,ls.copy(E),ls.x*=-1,ls.y*=-1,ls.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(cF.makeRotationFromEuler(ls)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uF(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){let E=S.program;i.uniformBlockBinding(w,E)}function l(w,S){let E=r[w.id];E===void 0&&(g(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",m));let N=S.program;i.updateUBOMapping(w,N);let I=e.render.frame;s[w.id]!==I&&(f(w),s[w.id]=I)}function u(w){let S=d();w.__bindingPointIndex=S;let E=n.createBuffer(),N=w.__size,I=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,N,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let S=r[w.id],E=w.uniforms,N=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let I=0,D=E.length;I<D;I++){let F=Array.isArray(E[I])?E[I]:[E[I]];for(let b=0,x=F.length;b<x;b++){let T=F[b];if(h(T,I,b,N)===!0){let G=T.__offset,B=Array.isArray(T.value)?T.value:[T.value],X=0;for(let Y=0;Y<B.length;Y++){let $=B[Y],K=y($);typeof $=="number"||typeof $=="boolean"?(T.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,G+X,T.__data)):$.isMatrix3?(T.__data[0]=$.elements[0],T.__data[1]=$.elements[1],T.__data[2]=$.elements[2],T.__data[3]=0,T.__data[4]=$.elements[3],T.__data[5]=$.elements[4],T.__data[6]=$.elements[5],T.__data[7]=0,T.__data[8]=$.elements[6],T.__data[9]=$.elements[7],T.__data[10]=$.elements[8],T.__data[11]=0):($.toArray(T.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,S,E,N){let I=w.value,D=S+"_"+E;if(N[D]===void 0)return typeof I=="number"||typeof I=="boolean"?N[D]=I:N[D]=I.clone(),!0;{let F=N[D];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return N[D]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function g(w){let S=w.uniforms,E=0,N=16;for(let D=0,F=S.length;D<F;D++){let b=Array.isArray(S[D])?S[D]:[S[D]];for(let x=0,T=b.length;x<T;x++){let G=b[x],B=Array.isArray(G.value)?G.value:[G.value];for(let X=0,Y=B.length;X<Y;X++){let $=B[X],K=y($),H=E%N,se=H%K.boundary,he=H+se;E+=se,he!==0&&N-he<K.storage&&(E+=N-he),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=K.storage}}}let I=E%N;return I>0&&(E+=N-I),w.__size=E,w.__cache={},this}function y(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){let S=w.target;S.removeEventListener("dispose",m);let E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var ch=class{constructor(e={}){let{canvas:t=tb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,N=!1;this._outputColorSpace=xn;let I=0,D=0,F=null,b=-1,x=null,T=new pt,G=new pt,B=null,X=new Xe(0),Y=0,$=t.width,K=t.height,H=1,se=null,he=null,_e=new pt(0,0,$,K),$e=new pt(0,0,$,K),vt=!1,j=new Eo,ee=!1,ge=!1,oe=new St,we=new St,ct=new O,Ae=new pt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function Ke(){return F===null?H:1}let C=i;function En(_,R){return t.getContext(_,R)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${md}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",le,!1),C===null){let R="webgl2";if(C=En(R,_),C===null)throw En(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let it,Je,xe,Mt,ye,M,v,L,W,Z,z,ve,ae,Ce,De,J,fe,Te,Ne,pe,Qe,He,_t,A;function ce(){it=new TP(C),it.init(),He=new sF(C,it),Je=new MP(C,it,e,He),xe=new iF(C,it),Je.reverseDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),Mt=new RP(C),ye=new jO,M=new rF(C,it,xe,ye,Je,He,Mt),v=new EP(E),L=new DP(E),W=new kR(C),_t=new _P(C,W),Z=new AP(C,W,Mt,_t),z=new PP(C,Z,W,Mt),Ne=new NP(C,Je,M),J=new bP(ye),ve=new GO(E,v,L,it,Je,_t,J),ae=new lF(E,ye),Ce=new $O,De=new JO(it),Te=new yP(E,v,L,xe,z,h,c),fe=new tF(E,z,Je),A=new uF(C,Mt,Je,xe),pe=new xP(C,it,Mt),Qe=new IP(C,it,Mt),Mt.programs=ve.programs,E.capabilities=Je,E.extensions=it,E.properties=ye,E.renderLists=Ce,E.shadowMap=fe,E.state=xe,E.info=Mt}ce();let V=new Ug(E,C);this.xr=V,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let _=it.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=it.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize($,K,!1))},this.getSize=function(_){return _.set($,K)},this.setSize=function(_,R,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=_,K=R,t.width=Math.floor(_*H),t.height=Math.floor(R*H),k===!0&&(t.style.width=_+"px",t.style.height=R+"px"),this.setViewport(0,0,_,R)},this.getDrawingBufferSize=function(_){return _.set($*H,K*H).floor()},this.setDrawingBufferSize=function(_,R,k){$=_,K=R,H=k,t.width=Math.floor(_*k),t.height=Math.floor(R*k),this.setViewport(0,0,_,R)},this.getCurrentViewport=function(_){return _.copy(T)},this.getViewport=function(_){return _.copy(_e)},this.setViewport=function(_,R,k,U){_.isVector4?_e.set(_.x,_.y,_.z,_.w):_e.set(_,R,k,U),xe.viewport(T.copy(_e).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy($e)},this.setScissor=function(_,R,k,U){_.isVector4?$e.set(_.x,_.y,_.z,_.w):$e.set(_,R,k,U),xe.scissor(G.copy($e).multiplyScalar(H).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(_){xe.setScissorTest(vt=_)},this.setOpaqueSort=function(_){se=_},this.setTransparentSort=function(_){he=_},this.getClearColor=function(_){return _.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(_=!0,R=!0,k=!0){let U=0;if(_){let P=!1;if(F!==null){let Q=F.texture.format;P=Q===Rd||Q===Id||Q===Ad}if(P){let Q=F.texture.type,re=Q===ri||Q===br||Q===Do||Q===Ao||Q===Dd||Q===Td,de=Te.getClearColor(),me=Te.getClearAlpha(),Pe=de.r,Ie=de.g,Me=de.b;re?(g[0]=Pe,g[1]=Ie,g[2]=Me,g[3]=me,C.clearBufferuiv(C.COLOR,0,g)):(y[0]=Pe,y[1]=Ie,y[2]=Me,y[3]=me,C.clearBufferiv(C.COLOR,0,y))}else U|=C.COLOR_BUFFER_BIT}R&&(U|=C.DEPTH_BUFFER_BIT),k&&(U|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Te.dispose(),Ce.dispose(),De.dispose(),ye.dispose(),v.dispose(),L.dispose(),z.dispose(),_t.dispose(),A.dispose(),ve.dispose(),V.dispose(),V.removeEventListener("sessionstart",Zg),V.removeEventListener("sessionend",Kg),wr.stop()};function q(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let _=Mt.autoReset,R=fe.enabled,k=fe.autoUpdate,U=fe.needsUpdate,P=fe.type;ce(),Mt.autoReset=_,fe.enabled=R,fe.autoUpdate=k,fe.needsUpdate=U,fe.type=P}function le(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ue(_){let R=_.target;R.removeEventListener("dispose",Ue),wt(R)}function wt(_){Kt(_),ye.remove(_)}function Kt(_){let R=ye.get(_).programs;R!==void 0&&(R.forEach(function(k){ve.releaseProgram(k)}),_.isShaderMaterial&&ve.releaseShaderCache(_))}this.renderBufferDirect=function(_,R,k,U,P,Q){R===null&&(R=At);let re=P.isMesh&&P.matrixWorld.determinant()<0,de=rE(_,R,k,U,P);xe.setMaterial(U,re);let me=k.index,Pe=1;if(U.wireframe===!0){if(me=Z.getWireframeAttribute(k),me===void 0)return;Pe=2}let Ie=k.drawRange,Me=k.attributes.position,rt=Ie.start*Pe,lt=(Ie.start+Ie.count)*Pe;Q!==null&&(rt=Math.max(rt,Q.start*Pe),lt=Math.min(lt,(Q.start+Q.count)*Pe)),me!==null?(rt=Math.max(rt,0),lt=Math.min(lt,me.count)):Me!=null&&(rt=Math.max(rt,0),lt=Math.min(lt,Me.count));let It=lt-rt;if(It<0||It===1/0)return;_t.setup(P,U,de,k,me);let Ct,at=pe;if(me!==null&&(Ct=W.get(me),at=Qe,at.setIndex(Ct)),P.isMesh)U.wireframe===!0?(xe.setLineWidth(U.wireframeLinewidth*Ke()),at.setMode(C.LINES)):at.setMode(C.TRIANGLES);else if(P.isLine){let Ee=U.linewidth;Ee===void 0&&(Ee=1),xe.setLineWidth(Ee*Ke()),P.isLineSegments?at.setMode(C.LINES):P.isLineLoop?at.setMode(C.LINE_LOOP):at.setMode(C.LINE_STRIP)}else P.isPoints?at.setMode(C.POINTS):P.isSprite&&at.setMode(C.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)hc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))at.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Ee=P._multiDrawStarts,Wt=P._multiDrawCounts,ut=P._multiDrawCount,Gn=me?W.get(me).bytesPerElement:1,hs=ye.get(U).currentProgram.getUniforms();for(let pn=0;pn<ut;pn++)hs.setValue(C,"_gl_DrawID",pn),at.render(Ee[pn]/Gn,Wt[pn])}else if(P.isInstancedMesh)at.renderInstances(rt,It,P.count);else if(k.isInstancedBufferGeometry){let Ee=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Wt=Math.min(k.instanceCount,Ee);at.renderInstances(rt,It,Wt)}else at.render(rt,It)};function ft(_,R,k){_.transparent===!0&&_.side===vi&&_.forceSinglePass===!1?(_.side=an,_.needsUpdate=!0,xc(_,R,k),_.side=Bi,_.needsUpdate=!0,xc(_,R,k),_.side=vi):xc(_,R,k)}this.compile=function(_,R,k=null){k===null&&(k=_),p=De.get(k),p.init(R),S.push(p),k.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),_!==k&&_.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();let U=new Set;return _.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let Q=P.material;if(Q)if(Array.isArray(Q))for(let re=0;re<Q.length;re++){let de=Q[re];ft(de,k,P),U.add(de)}else ft(Q,k,P),U.add(Q)}),p=S.pop(),U},this.compileAsync=function(_,R,k=null){let U=this.compile(_,R,k);return new Promise(P=>{function Q(){if(U.forEach(function(re){ye.get(re).currentProgram.isReady()&&U.delete(re)}),U.size===0){P(_);return}setTimeout(Q,10)}it.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let zn=null;function xi(_){zn&&zn(_)}function Zg(){wr.stop()}function Kg(){wr.start()}let wr=new Ib;wr.setAnimationLoop(xi),typeof self<"u"&&wr.setContext(self),this.setAnimationLoop=function(_){zn=_,V.setAnimationLoop(_),_===null?wr.stop():wr.start()},V.addEventListener("sessionstart",Zg),V.addEventListener("sessionend",Kg),this.render=function(_,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(R),R=V.getCamera()),_.isScene===!0&&_.onBeforeRender(E,_,R,F),p=De.get(_,S.length),p.init(R),S.push(p),we.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),j.setFromProjectionMatrix(we),ge=this.localClippingEnabled,ee=J.init(this.clippingPlanes,ge),m=Ce.get(_,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){let Q=E.xr.getDepthSensingMesh();Q!==null&&xh(Q,R,-1/0,E.sortObjects)}xh(_,R,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(se,he),Et=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Et&&Te.addToRenderList(m,_),this.info.render.frame++,ee===!0&&J.beginShadows();let k=p.state.shadowsArray;fe.render(k,_,R),ee===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let U=m.opaque,P=m.transmissive;if(p.setupLights(),R.isArrayCamera){let Q=R.cameras;if(P.length>0)for(let re=0,de=Q.length;re<de;re++){let me=Q[re];Qg(U,P,_,me)}Et&&Te.render(_);for(let re=0,de=Q.length;re<de;re++){let me=Q[re];Jg(m,_,me,me.viewport)}}else P.length>0&&Qg(U,P,_,R),Et&&Te.render(_),Jg(m,_,R);F!==null&&D===0&&(M.updateMultisampleRenderTarget(F),M.updateRenderTargetMipmap(F)),_.isScene===!0&&_.onAfterRender(E,_,R),_t.resetDefaultState(),b=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],ee===!0&&J.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function xh(_,R,k,U){if(_.visible===!1)return;if(_.layers.test(R.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(R);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||j.intersectsSprite(_)){U&&Ae.setFromMatrixPosition(_.matrixWorld).applyMatrix4(we);let re=z.update(_),de=_.material;de.visible&&m.push(_,re,de,k,Ae.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||j.intersectsObject(_))){let re=z.update(_),de=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ae.copy(_.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Ae.copy(re.boundingSphere.center)),Ae.applyMatrix4(_.matrixWorld).applyMatrix4(we)),Array.isArray(de)){let me=re.groups;for(let Pe=0,Ie=me.length;Pe<Ie;Pe++){let Me=me[Pe],rt=de[Me.materialIndex];rt&&rt.visible&&m.push(_,re,rt,k,Ae.z,Me)}}else de.visible&&m.push(_,re,de,k,Ae.z,null)}}let Q=_.children;for(let re=0,de=Q.length;re<de;re++)xh(Q[re],R,k,U)}function Jg(_,R,k,U){let P=_.opaque,Q=_.transmissive,re=_.transparent;p.setupLightsView(k),ee===!0&&J.setGlobalState(E.clippingPlanes,k),U&&xe.viewport(T.copy(U)),P.length>0&&_c(P,R,k),Q.length>0&&_c(Q,R,k),re.length>0&&_c(re,R,k),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Qg(_,R,k,U){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[U.id]===void 0&&(p.state.transmissionRenderTarget[U.id]=new mi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?To:ri,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let Q=p.state.transmissionRenderTarget[U.id],re=U.viewport||T;Q.setSize(re.z*E.transmissionResolutionScale,re.w*E.transmissionResolutionScale);let de=E.getRenderTarget();E.setRenderTarget(Q),E.getClearColor(X),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),Et&&Te.render(k);let me=E.toneMapping;E.toneMapping=Hi;let Pe=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),p.setupLightsView(U),ee===!0&&J.setGlobalState(E.clippingPlanes,U),_c(_,k,U),M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Me=0,rt=R.length;Me<rt;Me++){let lt=R[Me],It=lt.object,Ct=lt.geometry,at=lt.material,Ee=lt.group;if(at.side===vi&&It.layers.test(U.layers)){let Wt=at.side;at.side=an,at.needsUpdate=!0,ev(It,k,U,Ct,at,Ee),at.side=Wt,at.needsUpdate=!0,Ie=!0}}Ie===!0&&(M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q))}E.setRenderTarget(de),E.setClearColor(X,Y),Pe!==void 0&&(U.viewport=Pe),E.toneMapping=me}function _c(_,R,k){let U=R.isScene===!0?R.overrideMaterial:null;for(let P=0,Q=_.length;P<Q;P++){let re=_[P],de=re.object,me=re.geometry,Pe=re.group,Ie=re.material;Ie.allowOverride===!0&&U!==null&&(Ie=U),de.layers.test(k.layers)&&ev(de,R,k,me,Ie,Pe)}}function ev(_,R,k,U,P,Q){_.onBeforeRender(E,R,k,U,P,Q),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),P.onBeforeRender(E,R,k,U,_,Q),P.transparent===!0&&P.side===vi&&P.forceSinglePass===!1?(P.side=an,P.needsUpdate=!0,E.renderBufferDirect(k,R,U,P,_,Q),P.side=Bi,P.needsUpdate=!0,E.renderBufferDirect(k,R,U,P,_,Q),P.side=vi):E.renderBufferDirect(k,R,U,P,_,Q),_.onAfterRender(E,R,k,U,P,Q)}function xc(_,R,k){R.isScene!==!0&&(R=At);let U=ye.get(_),P=p.state.lights,Q=p.state.shadowsArray,re=P.state.version,de=ve.getParameters(_,P.state,Q,R,k),me=ve.getProgramCacheKey(de),Pe=U.programs;U.environment=_.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(_.isMeshStandardMaterial?L:v).get(_.envMap||U.environment),U.envMapRotation=U.environment!==null&&_.envMap===null?R.environmentRotation:_.envMapRotation,Pe===void 0&&(_.addEventListener("dispose",Ue),Pe=new Map,U.programs=Pe);let Ie=Pe.get(me);if(Ie!==void 0){if(U.currentProgram===Ie&&U.lightsStateVersion===re)return nv(_,de),Ie}else de.uniforms=ve.getUniforms(_),_.onBeforeCompile(de,E),Ie=ve.acquireProgram(de,me),Pe.set(me,Ie),U.uniforms=de.uniforms;let Me=U.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Me.clippingPlanes=J.uniform),nv(_,de),U.needsLights=oE(_),U.lightsStateVersion=re,U.needsLights&&(Me.ambientLightColor.value=P.state.ambient,Me.lightProbe.value=P.state.probe,Me.directionalLights.value=P.state.directional,Me.directionalLightShadows.value=P.state.directionalShadow,Me.spotLights.value=P.state.spot,Me.spotLightShadows.value=P.state.spotShadow,Me.rectAreaLights.value=P.state.rectArea,Me.ltc_1.value=P.state.rectAreaLTC1,Me.ltc_2.value=P.state.rectAreaLTC2,Me.pointLights.value=P.state.point,Me.pointLightShadows.value=P.state.pointShadow,Me.hemisphereLights.value=P.state.hemi,Me.directionalShadowMap.value=P.state.directionalShadowMap,Me.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Me.spotShadowMap.value=P.state.spotShadowMap,Me.spotLightMatrix.value=P.state.spotLightMatrix,Me.spotLightMap.value=P.state.spotLightMap,Me.pointShadowMap.value=P.state.pointShadowMap,Me.pointShadowMatrix.value=P.state.pointShadowMatrix),U.currentProgram=Ie,U.uniformsList=null,Ie}function tv(_){if(_.uniformsList===null){let R=_.currentProgram.getUniforms();_.uniformsList=Oo.seqWithValue(R.seq,_.uniforms)}return _.uniformsList}function nv(_,R){let k=ye.get(_);k.outputColorSpace=R.outputColorSpace,k.batching=R.batching,k.batchingColor=R.batchingColor,k.instancing=R.instancing,k.instancingColor=R.instancingColor,k.instancingMorph=R.instancingMorph,k.skinning=R.skinning,k.morphTargets=R.morphTargets,k.morphNormals=R.morphNormals,k.morphColors=R.morphColors,k.morphTargetsCount=R.morphTargetsCount,k.numClippingPlanes=R.numClippingPlanes,k.numIntersection=R.numClipIntersection,k.vertexAlphas=R.vertexAlphas,k.vertexTangents=R.vertexTangents,k.toneMapping=R.toneMapping}function rE(_,R,k,U,P){R.isScene!==!0&&(R=At),M.resetTextureUnits();let Q=R.fog,re=U.isMeshStandardMaterial?R.environment:null,de=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:is,me=(U.isMeshStandardMaterial?L:v).get(U.envMap||re),Pe=U.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ie=!!k.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Me=!!k.morphAttributes.position,rt=!!k.morphAttributes.normal,lt=!!k.morphAttributes.color,It=Hi;U.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(It=E.toneMapping);let Ct=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,at=Ct!==void 0?Ct.length:0,Ee=ye.get(U),Wt=p.state.lights;if(ee===!0&&(ge===!0||_!==x)){let nn=_===x&&U.id===b;J.setState(U,_,nn)}let ut=!1;U.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Wt.state.version||Ee.outputColorSpace!==de||P.isBatchedMesh&&Ee.batching===!1||!P.isBatchedMesh&&Ee.batching===!0||P.isBatchedMesh&&Ee.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Ee.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Ee.instancing===!1||!P.isInstancedMesh&&Ee.instancing===!0||P.isSkinnedMesh&&Ee.skinning===!1||!P.isSkinnedMesh&&Ee.skinning===!0||P.isInstancedMesh&&Ee.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ee.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Ee.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Ee.instancingMorph===!1&&P.morphTexture!==null||Ee.envMap!==me||U.fog===!0&&Ee.fog!==Q||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==J.numPlanes||Ee.numIntersection!==J.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==Ie||Ee.morphTargets!==Me||Ee.morphNormals!==rt||Ee.morphColors!==lt||Ee.toneMapping!==It||Ee.morphTargetsCount!==at)&&(ut=!0):(ut=!0,Ee.__version=U.version);let Gn=Ee.currentProgram;ut===!0&&(Gn=xc(U,R,P));let hs=!1,pn=!1,Bo=!1,bt=Gn.getUniforms(),Sn=Ee.uniforms;if(xe.useProgram(Gn.program)&&(hs=!0,pn=!0,Bo=!0),U.id!==b&&(b=U.id,pn=!0),hs||x!==_){xe.buffers.depth.getReversed()?(oe.copy(_.projectionMatrix),ib(oe),rb(oe),bt.setValue(C,"projectionMatrix",oe)):bt.setValue(C,"projectionMatrix",_.projectionMatrix),bt.setValue(C,"viewMatrix",_.matrixWorldInverse);let cn=bt.map.cameraPosition;cn!==void 0&&cn.setValue(C,ct.setFromMatrixPosition(_.matrixWorld)),Je.logarithmicDepthBuffer&&bt.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&bt.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,pn=!0,Bo=!0)}if(P.isSkinnedMesh){bt.setOptional(C,P,"bindMatrix"),bt.setOptional(C,P,"bindMatrixInverse");let nn=P.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),bt.setValue(C,"boneTexture",nn.boneTexture,M))}P.isBatchedMesh&&(bt.setOptional(C,P,"batchingTexture"),bt.setValue(C,"batchingTexture",P._matricesTexture,M),bt.setOptional(C,P,"batchingIdTexture"),bt.setValue(C,"batchingIdTexture",P._indirectTexture,M),bt.setOptional(C,P,"batchingColorTexture"),P._colorsTexture!==null&&bt.setValue(C,"batchingColorTexture",P._colorsTexture,M));let wn=k.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Ne.update(P,k,Gn),(pn||Ee.receiveShadow!==P.receiveShadow)&&(Ee.receiveShadow=P.receiveShadow,bt.setValue(C,"receiveShadow",P.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Sn.envMap.value=me,Sn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&R.environment!==null&&(Sn.envMapIntensity.value=R.environmentIntensity),pn&&(bt.setValue(C,"toneMappingExposure",E.toneMappingExposure),Ee.needsLights&&sE(Sn,Bo),Q&&U.fog===!0&&ae.refreshFogUniforms(Sn,Q),ae.refreshMaterialUniforms(Sn,U,H,K,p.state.transmissionRenderTarget[_.id]),Oo.upload(C,tv(Ee),Sn,M)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Oo.upload(C,tv(Ee),Sn,M),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&bt.setValue(C,"center",P.center),bt.setValue(C,"modelViewMatrix",P.modelViewMatrix),bt.setValue(C,"normalMatrix",P.normalMatrix),bt.setValue(C,"modelMatrix",P.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let nn=U.uniformsGroups;for(let cn=0,Mh=nn.length;cn<Mh;cn++){let Cr=nn[cn];A.update(Cr,Gn),A.bind(Cr,Gn)}}return Gn}function sE(_,R){_.ambientLightColor.needsUpdate=R,_.lightProbe.needsUpdate=R,_.directionalLights.needsUpdate=R,_.directionalLightShadows.needsUpdate=R,_.pointLights.needsUpdate=R,_.pointLightShadows.needsUpdate=R,_.spotLights.needsUpdate=R,_.spotLightShadows.needsUpdate=R,_.rectAreaLights.needsUpdate=R,_.hemisphereLights.needsUpdate=R}function oE(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(_,R,k){let U=ye.get(_);U.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),ye.get(_.texture).__webglTexture=R,ye.get(_.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:k,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,R){let k=ye.get(_);k.__webglFramebuffer=R,k.__useDefaultFramebuffer=R===void 0};let aE=C.createFramebuffer();this.setRenderTarget=function(_,R=0,k=0){F=_,I=R,D=k;let U=!0,P=null,Q=!1,re=!1;if(_){let me=ye.get(_);if(me.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(C.FRAMEBUFFER,null),U=!1;else if(me.__webglFramebuffer===void 0)M.setupRenderTarget(_);else if(me.__hasExternalTextures)M.rebindTextures(_,ye.get(_.texture).__webglTexture,ye.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Me=_.depthTexture;if(me.__boundDepthTexture!==Me){if(Me!==null&&ye.has(Me)&&(_.width!==Me.image.width||_.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(_)}}let Pe=_.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(re=!0);let Ie=ye.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ie[R])?P=Ie[R][k]:P=Ie[R],Q=!0):_.samples>0&&M.useMultisampledRTT(_)===!1?P=ye.get(_).__webglMultisampledFramebuffer:Array.isArray(Ie)?P=Ie[k]:P=Ie,T.copy(_.viewport),G.copy(_.scissor),B=_.scissorTest}else T.copy(_e).multiplyScalar(H).floor(),G.copy($e).multiplyScalar(H).floor(),B=vt;if(k!==0&&(P=aE),xe.bindFramebuffer(C.FRAMEBUFFER,P)&&U&&xe.drawBuffers(_,P),xe.viewport(T),xe.scissor(G),xe.setScissorTest(B),Q){let me=ye.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+R,me.__webglTexture,k)}else if(re){let me=ye.get(_.texture),Pe=R;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.__webglTexture,k,Pe)}else if(_!==null&&k!==0){let me=ye.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,me.__webglTexture,k)}b=-1},this.readRenderTargetPixels=function(_,R,k,U,P,Q,re){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=ye.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&re!==void 0&&(de=de[re]),de){xe.bindFramebuffer(C.FRAMEBUFFER,de);try{let me=_.texture,Pe=me.format,Ie=me.type;if(!Je.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=_.width-U&&k>=0&&k<=_.height-P&&C.readPixels(R,k,U,P,He.convert(Pe),He.convert(Ie),Q)}finally{let me=F!==null?ye.get(F).__webglFramebuffer:null;xe.bindFramebuffer(C.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=function(_,R,k,U,P,Q,re){return fs(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=ye.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&re!==void 0&&(de=de[re]),de)if(R>=0&&R<=_.width-U&&k>=0&&k<=_.height-P){xe.bindFramebuffer(C.FRAMEBUFFER,de);let me=_.texture,Pe=me.format,Ie=me.type;if(!Je.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Me),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),C.readPixels(R,k,U,P,He.convert(Pe),He.convert(Ie),0);let rt=F!==null?ye.get(F).__webglFramebuffer:null;xe.bindFramebuffer(C.FRAMEBUFFER,rt);let lt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),yield nb(C,lt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Me),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(Me),C.deleteSync(lt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(_,R=null,k=0){let U=Math.pow(2,-k),P=Math.floor(_.image.width*U),Q=Math.floor(_.image.height*U),re=R!==null?R.x:0,de=R!==null?R.y:0;M.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,re,de,P,Q),xe.unbindTexture()};let cE=C.createFramebuffer(),lE=C.createFramebuffer();this.copyTextureToTexture=function(_,R,k=null,U=null,P=0,Q=null){Q===null&&(P!==0?(hc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=P,P=0):Q=0);let re,de,me,Pe,Ie,Me,rt,lt,It,Ct=_.isCompressedTexture?_.mipmaps[Q]:_.image;if(k!==null)re=k.max.x-k.min.x,de=k.max.y-k.min.y,me=k.isBox3?k.max.z-k.min.z:1,Pe=k.min.x,Ie=k.min.y,Me=k.isBox3?k.min.z:0;else{let wn=Math.pow(2,-P);re=Math.floor(Ct.width*wn),de=Math.floor(Ct.height*wn),_.isDataArrayTexture?me=Ct.depth:_.isData3DTexture?me=Math.floor(Ct.depth*wn):me=1,Pe=0,Ie=0,Me=0}U!==null?(rt=U.x,lt=U.y,It=U.z):(rt=0,lt=0,It=0);let at=He.convert(R.format),Ee=He.convert(R.type),Wt;R.isData3DTexture?(M.setTexture3D(R,0),Wt=C.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(M.setTexture2DArray(R,0),Wt=C.TEXTURE_2D_ARRAY):(M.setTexture2D(R,0),Wt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,R.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,R.unpackAlignment);let ut=C.getParameter(C.UNPACK_ROW_LENGTH),Gn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),hs=C.getParameter(C.UNPACK_SKIP_PIXELS),pn=C.getParameter(C.UNPACK_SKIP_ROWS),Bo=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ct.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ct.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ie),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Me);let bt=_.isDataArrayTexture||_.isData3DTexture,Sn=R.isDataArrayTexture||R.isData3DTexture;if(_.isDepthTexture){let wn=ye.get(_),nn=ye.get(R),cn=ye.get(wn.__renderTarget),Mh=ye.get(nn.__renderTarget);xe.bindFramebuffer(C.READ_FRAMEBUFFER,cn.__webglFramebuffer),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,Mh.__webglFramebuffer);for(let Cr=0;Cr<me;Cr++)bt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.get(_).__webglTexture,P,Me+Cr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.get(R).__webglTexture,Q,It+Cr)),C.blitFramebuffer(Pe,Ie,re,de,rt,lt,re,de,C.DEPTH_BUFFER_BIT,C.NEAREST);xe.bindFramebuffer(C.READ_FRAMEBUFFER,null),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(P!==0||_.isRenderTargetTexture||ye.has(_)){let wn=ye.get(_),nn=ye.get(R);xe.bindFramebuffer(C.READ_FRAMEBUFFER,cE),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,lE);for(let cn=0;cn<me;cn++)bt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,wn.__webglTexture,P,Me+cn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,wn.__webglTexture,P),Sn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nn.__webglTexture,Q,It+cn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,nn.__webglTexture,Q),P!==0?C.blitFramebuffer(Pe,Ie,re,de,rt,lt,re,de,C.COLOR_BUFFER_BIT,C.NEAREST):Sn?C.copyTexSubImage3D(Wt,Q,rt,lt,It+cn,Pe,Ie,re,de):C.copyTexSubImage2D(Wt,Q,rt,lt,Pe,Ie,re,de);xe.bindFramebuffer(C.READ_FRAMEBUFFER,null),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Sn?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(Wt,Q,rt,lt,It,re,de,me,at,Ee,Ct.data):R.isCompressedArrayTexture?C.compressedTexSubImage3D(Wt,Q,rt,lt,It,re,de,me,at,Ct.data):C.texSubImage3D(Wt,Q,rt,lt,It,re,de,me,at,Ee,Ct):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,rt,lt,re,de,at,Ee,Ct.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,rt,lt,Ct.width,Ct.height,at,Ct.data):C.texSubImage2D(C.TEXTURE_2D,Q,rt,lt,re,de,at,Ee,Ct);C.pixelStorei(C.UNPACK_ROW_LENGTH,ut),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Gn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,hs),C.pixelStorei(C.UNPACK_SKIP_ROWS,pn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Bo),Q===0&&R.generateMipmaps&&C.generateMipmap(Wt),xe.unbindTexture()},this.copyTextureToTexture3D=function(_,R,k=null,U=null,P=0){return hc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,R,k,U,P)},this.initRenderTarget=function(_){ye.get(_).__webglFramebuffer===void 0&&M.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?M.setTextureCube(_,0):_.isData3DTexture?M.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?M.setTexture2DArray(_,0):M.setTexture2D(_,0),xe.unbindTexture()},this.resetState=function(){I=0,D=0,F=null,xe.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Fb={type:"change"},Hg={type:"start"},kb={type:"end"},uh=new Mo,Lb=new kn,hF=Math.cos(70*_g.DEG2RAD),Vt=new O,fn=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vg=1e-6,dh=class extends rc{constructor(e,t=null){super(e,t),this.state=gt.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_r.ROTATE,MIDDLE:_r.DOLLY,RIGHT:_r.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Vn,this._lastTargetPosition=new O,this._quat=new Vn().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wo,this._sphericalDelta=new wo,this._scale=1,this._panOffset=new O,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new O,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pF.bind(this),this._onPointerDown=fF.bind(this),this._onPointerUp=mF.bind(this),this._onContextMenu=bF.bind(this),this._onMouseWheel=yF.bind(this),this._onKeyDown=_F.bind(this),this._onTouchStart=xF.bind(this),this._onTouchMove=MF.bind(this),this._onMouseDown=gF.bind(this),this._onMouseMove=vF.bind(this),this._interceptControlDown=EF.bind(this),this._interceptControlUp=SF.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fb),this.update(),this.state=gt.NONE}update(e=null){let t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=fn:i>Math.PI&&(i-=fn),r<-Math.PI?r+=fn:r>Math.PI&&(r-=fn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Vt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(uh.origin.copy(this.object.position),uh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uh.direction))<hF?this.object.lookAt(this.target):(Lb.setFromNormalAndCoplanarPoint(this.object.up,this.target),uh.intersectPlane(Lb,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Vg||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vg||this._lastTargetPosition.distanceToSquared(this.target)>Vg?(this.dispatchEvent(Fb),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fn/60*this.autoRotateSpeed*e:fn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Vt.copy(r).sub(this.target);let s=Vt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function fF(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function pF(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function mF(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kb),this.state=gt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function gF(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=gt.DOLLY;break;case _r.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=gt.ROTATE}break;case _r.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Hg)}function vF(n){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function yF(n){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(n.preventDefault(),this.dispatchEvent(Hg),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(kb))}function _F(n){this.enabled!==!1&&this._handleKeyDown(n)}function xF(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=gt.TOUCH_ROTATE;break;case xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=gt.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Hg)}function MF(n){switch(this._trackPointer(n),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=gt.NONE}}function bF(n){this.enabled!==!1&&n.preventDefault()}function EF(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SF(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var hh=class n{size=3;width=3;material=new ec({color:8421504,emissive:0,specular:1118481,shininess:15,reflectivity:.1,refractionRatio:.1,combine:Co,vertexColors:!0});ngOnInit(){this.createThreeJsBox()}createThreeJsBox(){let e=document.getElementById("canvas-box");if(!e)return;let t=new Ka,i=new ic(16777215,2);t.add(i);let r=new So(16777215,500);r.position.x=2,r.position.y=this.size*this.width*2,r.position.z=2,t.add(r);let s=this.generateCube(this.size,t),o={width:e.clientWidth,height:e.clientHeight},a=new Zt(75,o.width/o.height,.001,1e3);a.position.z=15,t.add(a);let c=new So(16777215,100);c.position.set(a.position.x,a.position.y,a.position.z),t.add(c);let l=new ch({canvas:e});l.setClearColor(236986400,1),l.setSize(o.width,o.height);let u=new dh(a,l.domElement);u.minDistance=this.size/2*1.732*this.width+this.width/2,window.addEventListener("resize",()=>{o.width=e.clientWidth,o.height=e.clientHeight,a.aspect=o.width/o.height,a.updateProjectionMatrix(),l.setSize(o.width,o.height),l.render(t,a)}),document.getElementById("size-slider").addEventListener("change",()=>{s.length!=this.size&&(t.clear(),t.add(a,c,r,i),s=this.generateCube(this.size,t),u.minDistance=this.size/2*1.732*this.width+this.width/2)});let f=()=>{c.position.set(a.position.x,a.position.y,a.position.z),l.render(t,a),window.requestAnimationFrame(f)};f()}generateCube(e,t){let i=[],r=this.width/50;for(var s=0;s<e;s++){let c=[],l=(this.width+r)*(s-(e-1)/2);for(var o=0;o<e;o++){let u=[],d=(this.width+r)*(o-(e-1)/2);for(var a=0;a<e;a++){if(s!=0&&o!=0&&a!=0&&s!=e-1&&o!=e-1&&a!=e-1)continue;let f=(this.width+r)*(a-(e-1)/2),h=new gr(this.width,this.width,this.width).toNonIndexed(),g=h.getAttribute("position"),y=[],m=new Xe;for(let w=0;w<g.count;w+=3){let S=new O(g.getX(w+1)-g.getX(w),g.getY(w+1)-g.getY(w),g.getZ(w+1)-g.getZ(w)),E=new O(g.getX(w+2)-g.getX(w),g.getY(w+2)-g.getY(w),g.getZ(w+2)-g.getZ(w)),N=S.cross(E);N.x>0&&a==e-1?m.setRGB(1,0,0):N.x<0&&a==0?m.setRGB(1,.3,0):N.y>0&&o==e-1?m.setRGB(1,1,1):N.y<0&&o==0?m.setRGB(1,1,0):N.z>0&&s==e-1?m.setRGB(0,1,0):N.z<0&&s==0?m.setRGB(0,0,1):m.setRGB(0,0,0),y.push(m.r,m.g,m.b),y.push(m.r,m.g,m.b),y.push(m.r,m.g,m.b)}h.setAttribute("color",new Un(y,3));let p=new hn(h,this.material);p.position.x=f,p.position.y=d,p.position.z=l,u.push(p),t.add(p)}c.push(u)}i.push(c)}return i}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Hs({type:n,selectors:[["app-viewer"]],inputs:{size:"size"},decls:1,vars:0,consts:[["id","canvas-box"]],template:function(t,i){t&1&&Ji(0,"canvas",0)},styles:["canvas[_ngcontent-%COMP%]{height:550px;width:1050px}"]})};var Wb=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(Xt(Xl),Xt(la))};static \u0275dir=di({type:n})}return n})(),$b=(()=>{class n extends Wb{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Bs(n)))(r||n)}})();static \u0275dir=di({type:n,features:[zr]})}return n})(),$g=new be("");var CF={provide:$g,useExisting:Fs(()=>vh),multi:!0};function DF(){let n=On()?On().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var TF=new be(""),vh=(()=>{class n extends Wb{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!DF())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(Xt(Xl),Xt(la),Xt(TF,8))};static \u0275dir=di({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&Kl("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[Ql([CF]),zr]})}return n})();var AF=new be(""),IF=new be("");function qb(n){return n!=null}function Xb(n){return zs(n)?Dt(n):n}function Yb(n){let e={};return n.forEach(t=>{e=t!=null?te(te({},e),t):e}),Object.keys(e).length===0?null:e}function Zb(n,e){return e.map(t=>t(n))}function RF(n){return!n.validate}function Kb(n){return n.map(e=>RF(e)?e:t=>e.validate(t))}function NF(n){if(!n)return null;let e=n.filter(qb);return e.length==0?null:function(t){return Yb(Zb(t,e))}}function Jb(n){return n!=null?NF(Kb(n)):null}function PF(n){if(!n)return null;let e=n.filter(qb);return e.length==0?null:function(t){let i=Zb(t,e).map(Xb);return Zh(i).pipe(Ze(Yb))}}function Qb(n){return n!=null?PF(Kb(n)):null}function Ub(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function OF(n){return n._rawValidators}function FF(n){return n._rawAsyncValidators}function zg(n){return n?Array.isArray(n)?n:[n]:[]}function ph(n,e){return Array.isArray(n)?n.includes(e):n===e}function Bb(n,e){let t=zg(e);return zg(n).forEach(r=>{ph(t,r)||t.push(r)}),t}function Vb(n,e){return zg(e).filter(t=>!ph(n,t))}var mh=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Jb(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Qb(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Gg=class extends mh{name;get formDirective(){return null}get path(){return null}},yc=class extends mh{_parent=null;name=null;valueAccessor=null},jg=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},LF={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},w5=qe(te({},LF),{"[class.ng-submitted]":"isSubmitted"}),eE=(()=>{class n extends jg{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(Xt(yc,2))};static \u0275dir=di({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&Cp("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[zr]})}return n})();var pc="VALID",fh="INVALID",Lo="PENDING",mc="DISABLED",Uo=class{},gh=class extends Uo{value;source;constructor(e,t){super(),this.value=e,this.source=t}},gc=class extends Uo{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},vc=class extends Uo{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},ko=class extends Uo{status;source;constructor(e,t){super(),this.status=e,this.source=t}};function kF(n){return(yh(n)?n.validators:n)||null}function UF(n){return Array.isArray(n)?Jb(n):n||null}function BF(n,e){return(yh(e)?e.asyncValidators:n)||null}function VF(n){return Array.isArray(n)?Qb(n):n||null}function yh(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var Wg=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return Wr(this.statusReactive)}set status(e){Wr(()=>this.statusReactive.set(e))}_status=eu(()=>this.statusReactive());statusReactive=Vl(void 0);get valid(){return this.status===pc}get invalid(){return this.status===fh}get pending(){return this.status==Lo}get disabled(){return this.status===mc}get enabled(){return this.status!==mc}errors;get pristine(){return Wr(this.pristineReactive)}set pristine(e){Wr(()=>this.pristineReactive.set(e))}_pristine=eu(()=>this.pristineReactive());pristineReactive=Vl(!0);get dirty(){return!this.pristine}get touched(){return Wr(this.touchedReactive)}set touched(e){Wr(()=>this.touchedReactive.set(e))}_touched=eu(()=>this.touchedReactive());touchedReactive=Vl(!1);get untouched(){return!this.touched}_events=new Lt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Bb(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Bb(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Vb(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Vb(e,this._rawAsyncValidators))}hasValidator(e){return ph(this._rawValidators,e)}hasAsyncValidator(e){return ph(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(qe(te({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new vc(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new vc(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(qe(te({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new gc(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new gc(!0,i))}markAsPending(e={}){this.status=Lo;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ko(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(qe(te({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=mc,this.errors=null,this._forEachChild(r=>{r.disable(qe(te({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new gh(this.value,i)),this._events.next(new ko(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(qe(te({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=pc,this._forEachChild(i=>{i.enable(qe(te({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(qe(te({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===pc||this.status===Lo)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new gh(this.value,t)),this._events.next(new ko(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(qe(te({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?mc:pc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=Lo,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Xb(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new ko(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new Ht,this.statusChanges=new Ht}_calculateStatus(){return this._allControlsDisabled()?mc:this.errors?fh:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Lo)?Lo:this._anyControlsHaveStatus(fh)?fh:pc}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new gc(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new vc(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){yh(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=UF(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=VF(this._rawAsyncValidators)}};var tE=new be("",{providedIn:"root",factory:()=>qg}),qg="always";function HF(n,e){return[...e.path,n]}function zF(n,e,t=qg){jF(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),WF(n,e),qF(n,e),$F(n,e),GF(n,e)}function Hb(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function GF(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function jF(n,e){let t=OF(n);e.validator!==null?n.setValidators(Ub(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=FF(n);e.asyncValidator!==null?n.setAsyncValidators(Ub(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Hb(e._rawValidators,r),Hb(e._rawAsyncValidators,r)}function WF(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&nE(n,e)})}function $F(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&nE(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function nE(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function qF(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function XF(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function YF(n){return Object.getPrototypeOf(n.constructor)===$b}function ZF(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(s=>{s.constructor===vh?t=s:YF(s)?i=s:r=s}),r||i||t||null}function zb(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Gb(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var KF=class extends Wg{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(kF(t),BF(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),yh(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Gb(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){zb(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){zb(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Gb(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var JF={provide:yc,useExisting:Fs(()=>Xg)},jb=Promise.resolve(),Xg=(()=>{class n extends yc{_changeDetectorRef;callSetDisabledState;control=new KF;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new Ht;constructor(t,i,r,s,o,a){super(),this._changeDetectorRef=o,this.callSetDisabledState=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=ZF(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),XF(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){zF(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){jb.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&Rp(i);jb.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?HF(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(Xt(Gg,9),Xt(AF,10),Xt(IF,10),Xt($g,10),Xt(da,8),Xt(tE,8))};static \u0275dir=di({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Ql([JF]),zr,ca]})}return n})();var QF={provide:$g,useExisting:Fs(()=>Yg),multi:!0},Yg=(()=>{class n extends $b{writeValue(t){this.setProperty("value",parseFloat(t))}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Bs(n)))(r||n)}})();static \u0275dir=di({type:n,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(i,r){i&1&&Kl("change",function(o){return r.onChange(o.target.value)})("input",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[Ql([QF]),zr]})}return n})();var eL=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Hr({type:n});static \u0275inj=Vr({})}return n})();var iE=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:tE,useValue:t.callSetDisabledState??qg}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=Hr({type:n});static \u0275inj=Vr({imports:[eL]})}return n})();var _h=class n{title="cubeviewer";sides=[2,3,4,5,6,7,8];selectedSide=3;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Hs({type:n,selectors:[["app-root"]],decls:10,vars:6,consts:[[1,"head"],[1,"app"],[1,"params"],["for","side"],["id","size-slider","type","range","step","1",3,"ngModelChange","min","max","ngModel"],[1,"viewer"],[3,"size"]],template:function(t,i){t&1&&(Gr(0,"div",0),Dp(1,"Head"),jr(),Gr(2,"div",1)(3,"div",2)(4,"label",3),Dp(5),jr(),Ji(6,"br"),Gr(7,"input",4),Ip("ngModelChange",function(s){return N0(i.selectedSide,s)||(i.selectedSide=s),s}),jr()(),Gr(8,"div",5),Ji(9,"app-viewer",6),jr()()),t&2&&(jl(5),Tp("Cube Size: ",i.selectedSide,"x",i.selectedSide,""),jl(2),Jl("min",i.sides[0]),Jl("max",i.sides[i.sides.length-1]),Ap("ngModel",i.selectedSide),jl(2),wp("size",i.selectedSide))},dependencies:[nu,hh,iE,vh,Yg,eE,Xg],styles:["option[_ngcontent-%COMP%]{padding:0}datalist[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;writing-mode:vertical-lr}.head[_ngcontent-%COMP%]{width:100%;height:5%;background-color:#4682b4}.app[_ngcontent-%COMP%]{display:flex;flex-direction:line}.params[_ngcontent-%COMP%], .viewer[_ngcontent-%COMP%]{margin:5px;padding:10px;height:fit-content}"]})};Gp(_h,$x).catch(n=>console.error(n));
