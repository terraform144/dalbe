(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=="function")o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.cx(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)H.cy(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=b.fs[0]
if(a)return new Function("parameters, createTearOffClass, cache","return function tearOff_"+t+y+++"(receiver) {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(receiver, this);"+"}")(b,H.aI,null)
else return new Function("parameters, createTearOffClass, cache","return function tearOff_"+t+y+++"() {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(this, null);"+"}")(b,H.aI,null)}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=H.aI(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var C={},H={az:function az(){},aa:function aa(a){this.a=a},
bl(a){var t,s=v.mangledGlobalNames[a]
if(s!=null)return s
t="minified:"+a
return t},
d(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.X(a)
if(typeof t!="string")throw H.c(H.be(a))
return t},
ac(a){return H.bA(a)},
bA(a){var t,s,r,q
if(a instanceof P.h)return H.j(H.W(a),null)
if(J.V(a)===C.n||u.o.b(a)){t=C.c(a)
s=t!=="Object"&&t!==""
if(s)return t
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string")s=q!=="Object"&&q!==""
else s=!1
if(s)return q}}return H.j(H.W(a),null)},
cn(a){throw H.c(H.be(a))},
aM(a,b){if(a==null)J.bn(a)
throw H.c(H.ch(a,b))},
ch(a,b){var t,s,r,q="index"
if(!H.bb(b))return new P.t(!0,b,q,null)
t=J.bg(a)
s=t.gj(a)
if(!(b<0)){if(typeof s!=="number")return H.cn(s)
r=b>=s}else r=!0
if(r){t=s==null?t.gj(a):s
return new P.a7(t,!0,b,q,"Index out of range")}return new P.ad(!0,b,q,"Value not in range")},
be(a){return new P.t(!0,a,null,null)},
c(a){var t,s
if(a==null)a=new P.ab()
t=new Error()
t.dartException=a
s=H.cz
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
cz(){return J.X(this.dartException)},
aO(a){throw H.c(a)},
cw(a){throw H.c(new P.a2(a))},
bw(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
H.B(i)
t=i?Object.create(new H.ag().constructor.prototype):Object.create(new H.K(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else{r=$.m
if(typeof r!=="number")return r.i()
$.m=r+1
r=new Function("a,b"+r,"this.$initialize(a,b"+r+")")
s=r}t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=H.aS(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=H.bs(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=H.aS(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
bs(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(H.B(b))throw H.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,H.bq)}throw H.c("Error in functionType of tearoff")},
bt(a,b,c,d){var t=H.aR
switch(H.B(b)?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
aS(a,b,c,d){var t,s,r,q,p,o="receiver"
if(H.B(c))return H.bv(a,b,d)
t=b.length
s=H.B(d)||t>=27
if(s)return H.bt(t,d,a,b)
if(t===0){s=$.m
if(typeof s!=="number")return s.i()
$.m=s+1
r="self"+s
s="return function(){var "+r+" = this."
q=$.C
return new Function(s+(q==null?$.C=H.a0(o):q)+";return "+r+"."+H.d(a)+"();}")()}p="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
s=$.m
if(typeof s!=="number")return s.i()
$.m=s+1
p+=s
s="return function("+p+"){return this."
q=$.C
return new Function(s+(q==null?$.C=H.a0(o):q)+"."+H.d(a)+"("+p+");}")()},
bu(a,b,c,d){var t=H.aR,s=H.br
switch(H.B(b)?-1:a){case 0:throw H.c(new H.ae("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
bv(a,b,c){var t,s,r,q,p,o=$.aQ
if(o==null)o=$.aQ=H.a0("interceptor")
t=$.C
if(t==null)t=$.C=H.a0("receiver")
s=b.length
r=H.B(c)||s>=28
if(r)return H.bu(s,c,a,b)
if(s===1){r="return function(){return this."+o+"."+H.d(a)+"(this."+t+");"
q=$.m
if(typeof q!=="number")return q.i()
$.m=q+1
return new Function(r+q+"}")()}p="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
r="return function("+p+"){return this."+o+"."+H.d(a)+"(this."+t+", "+p+");"
q=$.m
if(typeof q!=="number")return q.i()
$.m=q+1
return new Function(r+q+"}")()},
aI(a){return H.bw(a)},
bq(a,b){return H.ap(v.typeUniverse,H.W(a.a),b)},
aR(a){return a.a},
br(a){return a.b},
a0(a){var t,s,r,q=new H.K("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw H.c(new P.t(!1,null,null,"Field name "+a+" not found."))},
B(a){if(a==null)H.cf("boolean expression must not be null")
return a},
cf(a){throw H.c(new H.am(a))},
cx(a){throw H.c(new P.a3(a))},
cl(a){return v.getIsolateTag(a)},
cs(a){var t,s,r,q,p,o=H.b6($.bh.$1(a)),n=$.as[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aw[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.bW($.bd.$2(a,o))
if(r!=null){n=$.as[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aw[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.ay(t)
$.as[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.aw[o]=t
return t}if(q==="-"){p=H.ay(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.bj(a,t)
if(q==="*")throw H.c(P.aX(o))
if(v.leafTags[o]===true){p=H.ay(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.bj(a,t)},
bj(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.aN(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ay(a){return J.aN(a,!1,null,!!a.$icC)},
cu(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.ay(t)
else return J.aN(t,c,null,null)},
cp(){if(!0===$.aK)return
$.aK=!0
H.cq()},
cq(){var t,s,r,q,p,o,n,m
$.as=Object.create(null)
$.aw=Object.create(null)
H.co()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.bk.$1(p)
if(o!=null){n=H.cu(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
co(){var t,s,r,q,p,o,n=C.h()
n=H.A(C.i,H.A(C.j,H.A(C.d,H.A(C.d,H.A(C.k,H.A(C.l,H.A(C.m(C.c),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.bh=new H.at(q)
$.bd=new H.au(p)
$.bk=new H.av(o)},
A(a,b){return a(b)||b},
w:function w(){},
a1:function a1(){},
aj:function aj(){},
ag:function ag(){},
K:function K(a,b){this.a=a
this.b=b},
ae:function ae(a){this.a=a},
am:function am(a){this.a=a},
at:function at(a){this.a=a},
au:function au(a){this.a=a},
av:function av(a){this.a=a},
bC(a,b){var t=b.c
return t==null?b.c=H.aD(a,b.z,!0):t},
aV(a,b){var t=b.c
return t==null?b.c=H.E(a,"aT",[b.z]):t},
aW(a){var t=a.y
if(t===6||t===7||t===8)return H.aW(a.z)
return t===11||t===12},
bB(a){return a.cy},
bf(a){return H.aE(v.typeUniverse,a,!1)},
r(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.r(a,t,c,a0)
if(s===t)return b
return H.b3(a,s,!0)
case 7:t=b.z
s=H.r(a,t,c,a0)
if(s===t)return b
return H.aD(a,s,!0)
case 8:t=b.z
s=H.r(a,t,c,a0)
if(s===t)return b
return H.b2(a,s,!0)
case 9:r=b.Q
q=H.G(a,r,c,a0)
if(q===r)return b
return H.E(a,b.z,q)
case 10:p=b.z
o=H.r(a,p,c,a0)
n=b.Q
m=H.G(a,n,c,a0)
if(o===p&&m===n)return b
return H.aB(a,o,m)
case 11:l=b.z
k=H.r(a,l,c,a0)
j=b.Q
i=H.cc(a,j,c,a0)
if(k===l&&i===j)return b
return H.b1(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.G(a,h,c,a0)
p=b.z
o=H.r(a,p,c,a0)
if(g===h&&o===p)return b
return H.aC(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.c(P.a_("Attempted to substitute unexpected RTI kind "+d))}},
G(a,b,c,d){var t,s,r,q,p=b.length,o=H.aq(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.r(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
cd(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=H.aq(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.r(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
cc(a,b,c,d){var t,s=b.a,r=H.G(a,s,c,d),q=b.b,p=H.G(a,q,c,d),o=b.c,n=H.cd(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.S()
t.a=r
t.b=p
t.c=n
return t},
bc(a,b){a[v.arrayRti]=b
return a},
cg(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.cm(t)
return a.$S()}return null},
bi(a,b){var t
if(H.aW(b))if(a instanceof H.w){t=H.cg(a)
if(t!=null)return t}return H.W(a)},
W(a){var t
if(a instanceof P.h){t=a.$ti
return t!=null?t:H.aG(a)}if(Array.isArray(a))return H.aF(a)
return H.aG(J.V(a))},
aF(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
cR(a){var t=a.$ti
return t!=null?t:H.aG(a)},
aG(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.c2(a,t)},
c2(a,b){var t=a instanceof H.w?a.__proto__.__proto__.constructor:b,s=H.bS(v.typeUniverse,t.name)
b.$ccache=s
return s},
cm(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=H.aE(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
c1(a){var t,s,r,q=this,p=u.K
if(q===p)return H.z(q,a,H.c6)
if(!H.n(q))if(!(q===u._))p=q===p
else p=!0
else p=!0
if(p)return H.z(q,a,H.ca)
p=q.y
t=p===6?q.z:q
if(t===u.S)s=H.bb
else if(t===u.i||t===u.H)s=H.c5
else if(t===u.N)s=H.c7
else s=t===u.y?H.b9:null
if(s!=null)return H.z(q,a,s)
if(t.y===9){r=t.z
if(t.Q.every(H.cr)){q.r="$i"+r
if(r==="bz")return H.z(q,a,H.c4)
return H.z(q,a,H.c8)}}else if(p===7)return H.z(q,a,H.c_)
return H.z(q,a,H.bY)},
z(a,b,c){a.b=c
return a.b(b)},
c0(a){var t,s,r=this
if(!H.n(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.bX
else if(r===u.K)s=H.bV
else s=H.bZ
r.a=s
return r.a(a)},
ar(a){var t,s=a.y
if(!H.n(a))if(!(a===u._))if(!(a===u.A))if(s!==7)t=s===8&&H.ar(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
bY(a){var t=this
if(a==null)return H.ar(t)
return H.f(v.typeUniverse,H.bi(a,t),null,t,null)},
c_(a){if(a==null)return!0
return this.z.b(a)},
c8(a){var t,s=this
if(a==null)return H.ar(s)
t=s.r
if(a instanceof P.h)return!!a[t]
return!!J.V(a)[t]},
c4(a){var t,s=this
if(a==null)return H.ar(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof P.h)return!!a[t]
return!!J.V(a)[t]},
cQ(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.b7(a,t)},
bZ(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.b7(a,t)},
b7(a,b){throw H.c(H.bJ(H.aY(a,H.bi(a,b),H.j(b,null))))},
aY(a,b,c){var t=P.L(a),s=H.j(b==null?H.W(a):b,null)
return t+": type '"+H.d(s)+"' is not a subtype of type '"+H.d(c)+"'"},
bJ(a){return new H.T("TypeError: "+a)},
i(a,b){return new H.T("TypeError: "+H.aY(a,null,b))},
c6(a){return a!=null},
bV(a){return a},
ca(a){return!0},
bX(a){return a},
b9(a){return!0===a||!1===a},
cE(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.i(a,"bool"))},
cG(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.i(a,"bool"))},
cF(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.i(a,"bool?"))},
cH(a){if(typeof a=="number")return a
throw H.c(H.i(a,"double"))},
cJ(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.i(a,"double"))},
cI(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.i(a,"double?"))},
bb(a){return typeof a=="number"&&Math.floor(a)===a},
cK(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.i(a,"int"))},
bU(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.i(a,"int"))},
cL(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.i(a,"int?"))},
c5(a){return typeof a=="number"},
cM(a){if(typeof a=="number")return a
throw H.c(H.i(a,"num"))},
cO(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.i(a,"num"))},
cN(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.i(a,"num?"))},
c7(a){return typeof a=="string"},
cP(a){if(typeof a=="string")return a
throw H.c(H.i(a,"String"))},
b6(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.i(a,"String"))},
bW(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.i(a,"String?"))},
cb(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.a.i(s,H.j(a[r],b))
return t},
b8(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.bc([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.e.q(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.aM(a5,j)
m=C.a.i(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.a.i(" extends ",H.j(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.j(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.a.i(a2,H.j(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.a.i(a2,H.j(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.aP(H.j(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.d(a0)},
j(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.j(a.z,b)
return t}if(m===7){s=a.z
t=H.j(s,b)
r=s.y
return J.aP(r===11||r===12?C.a.i("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.d(H.j(a.z,b))+">"
if(m===9){q=H.ce(a.z)
p=a.Q
return p.length>0?q+("<"+H.cb(p,b)+">"):q}if(m===11)return H.b8(a,b,null)
if(m===12)return H.b8(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.aM(b,o)
return b[o]}return"?"},
ce(a){var t,s=v.mangledGlobalNames[a]
if(s!=null)return s
t="minified:"+a
return t},
bT(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
bS(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.aE(a,b,!1)
else if(typeof n=="number"){t=n
s=H.F(a,5,"#")
r=H.aq(t)
for(q=0;q<t;++q)r[q]=s
p=H.E(a,b,r)
o[b]=p
return p}else return n},
bQ(a,b){return H.b4(a.tR,b)},
cD(a,b){return H.b4(a.eT,b)},
aE(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.b0(H.aZ(a,null,b,c))
s.set(b,t)
return t},
ap(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.b0(H.aZ(a,b,c,!0))
r.set(c,s)
return s},
bR(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.aB(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
q(a,b){b.a=H.c0
b.b=H.c1
return b},
F(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.l(null,null)
t.y=b
t.cy=c
s=H.q(a,t)
a.eC.set(c,s)
return s},
b3(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.bO(a,b,s,c)
a.eC.set(s,t)
return t},
bO(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.n(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.l(null,null)
r.y=6
r.z=b
r.cy=c
return H.q(a,r)},
aD(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.bN(a,b,s,c)
a.eC.set(s,t)
return t},
bN(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.n(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.ax(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.ax(r.z))return r
else return H.bC(a,b)}}q=new H.l(null,null)
q.y=7
q.z=b
q.cy=c
return H.q(a,q)},
b2(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.bL(a,b,s,c)
a.eC.set(s,t)
return t},
bL(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.n(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.E(a,"aT",[b])
else if(b===u.P||b===u.T)return u.O}r=new H.l(null,null)
r.y=8
r.z=b
r.cy=c
return H.q(a,r)},
bP(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.l(null,null)
t.y=13
t.z=b
t.cy=r
s=H.q(a,t)
a.eC.set(r,s)
return s},
U(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
bK(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
E(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+H.U(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.l(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.q(a,s)
a.eC.set(q,r)
return r},
aB(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.U(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.l(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.q(a,p)
a.eC.set(r,o)
return o},
b1(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.U(n)
if(k>0){t=m>0?",":""
s=H.U(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.bK(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.l(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.q(a,p)
a.eC.set(r,s)
return s},
aC(a,b,c,d){var t,s=b.cy+("<"+H.U(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.bM(a,b,c,s,d)
a.eC.set(s,t)
return t},
bM(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=H.aq(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.r(a,b,s,0)
n=H.G(a,c,s,0)
return H.aC(a,o,n,c!==n)}}m=new H.l(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.q(a,m)},
aZ(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
b0(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.bF(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.b_(a,s,h,g,!1)
else if(r===46)s=H.b_(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.p(a.u,a.e,g.pop()))
break
case 94:g.push(H.bP(a.u,g.pop()))
break
case 35:g.push(H.F(a.u,5,"#"))
break
case 64:g.push(H.F(a.u,2,"@"))
break
case 126:g.push(H.F(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.aA(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.E(q,o,p))
else{n=H.p(q,a.e,o)
switch(n.y){case 11:g.push(H.aC(q,n,p,a.n))
break
default:g.push(H.aB(q,n,p))
break}}break
case 38:H.bG(a,g)
break
case 42:m=a.u
g.push(H.b3(m,H.p(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.aD(m,H.p(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.b2(m,H.p(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.S()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.aA(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.b1(q,H.p(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.aA(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.bI(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.p(a.u,a.e,i)},
bF(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
b_(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.bT(t,p.z)[q]
if(o==null)H.aO('No "'+q+'" in "'+H.bB(p)+'"')
d.push(H.ap(t,p,o))}else d.push(q)
return n},
bG(a,b){var t=b.pop()
if(0===t){b.push(H.F(a.u,1,"0&"))
return}if(1===t){b.push(H.F(a.u,4,"1&"))
return}throw H.c(P.a_("Unexpected extended operation "+H.d(t)))},
p(a,b,c){if(typeof c=="string")return H.E(a,c,a.sEA)
else if(typeof c=="number")return H.bH(a,b,c)
else return c},
aA(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.p(a,b,c[t])},
bI(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.p(a,b,c[t])},
bH(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.c(P.a_("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.c(P.a_("Bad index "+c+" for "+b.h(0)))},
f(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.n(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.n(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.f(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.f(a,b.z,c,d,e)
if(q===6){t=d.z
return H.f(a,b,c,t,e)}if(s===8){if(!H.f(a,b.z,c,d,e))return!1
return H.f(a,H.aV(a,b),c,d,e)}if(s===7){t=H.f(a,b.z,c,d,e)
return t}if(q===8){if(H.f(a,b,c,d.z,e))return!0
return H.f(a,b,c,H.aV(a,d),e)}if(q===7){t=H.f(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.f(a,l,c,k,e)||!H.f(a,k,e,l,c))return!1}return H.ba(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.ba(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.c3(a,b,c,d,e)}return!1},
ba(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.f(a1,a2.z,a3,a4.z,a5))return!1
t=a2.Q
s=a4.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.f(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.f(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.f(a1,l[i],a5,h,a3))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
if(a0<a)continue
h=g[c-1]
if(!H.f(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
c3(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.z,l=d.z
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=H.ap(a,b,s[p])
return H.b5(a,q,null,c,d.Q,e)}o=b.Q
n=d.Q
return H.b5(a,o,null,c,n,e)},
b5(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!H.f(a,s,d,r,f))return!1}return!0},
ax(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.n(a))if(s!==7)if(!(s===6&&H.ax(a.z)))t=s===8&&H.ax(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
cr(a){var t
if(!H.n(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
n(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
b4(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aq(a){return a>0?new Array(a):v.typeUniverse.sEA},
l:function l(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
S:function S(){this.c=this.b=this.a=null},
an:function an(){},
T:function T(a){this.a=a},
cy(a){return H.aO(new H.aa("Field '"+H.d(a)+"' has been assigned during initialization."))}},J={
aN(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aJ(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.aK==null){H.cp()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw H.c(P.aX("Return interceptor for "+H.d(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.ao
if(p==null)p=$.ao=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=H.cs(a)
if(q!=null)return q
if(typeof a=="function")return C.o
t=Object.getPrototypeOf(a)
if(t==null)return C.f
if(t===Object.prototype)return C.f
if(typeof r=="function"){p=$.ao
if(p==null)p=$.ao=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:C.b,enumerable:false,writable:true,configurable:true})
return C.b}return C.b},
V(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.O.prototype
return J.a8.prototype}if(typeof a=="string")return J.u.prototype
if(a==null)return J.P.prototype
if(typeof a=="boolean")return J.N.prototype
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.o.prototype
return a}if(a instanceof P.h)return a
return J.aJ(a)},
bg(a){if(typeof a=="string")return J.u.prototype
if(a==null)return a
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.o.prototype
return a}if(a instanceof P.h)return a
return J.aJ(a)},
cj(a){if(typeof a=="number")return J.Q.prototype
if(typeof a=="string")return J.u.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.y.prototype
return a},
ck(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.o.prototype
return a}if(a instanceof P.h)return a
return J.aJ(a)},
aP(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.cj(a).i(a,b)},
bn(a){return J.bg(a).gj(a)},
bo(a,b){return J.ck(a).sv(a,b)},
X(a){return J.V(a).h(a)},
e:function e(){},
N:function N(){},
P:function P(){},
v:function v(){},
R:function R(){},
y:function y(){},
o:function o(){},
k:function k(a){this.$ti=a},
a9:function a9(a){this.$ti=a},
I:function I(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
Q:function Q(){},
O:function O(){},
a8:function a8(){},
u:function u(){}},M={
ct(){var t=document.querySelector("#ctc")
if(t!=null)J.bo(t,"Wake up, its time")}},P={
bx(a){if(a instanceof H.w)return a.h(0)
return"Instance of '"+H.d(H.ac(a))+"'"},
bD(a,b,c){var t=new J.I(b,b.length,H.aF(b).p("I<1>"))
if(!t.m())return a
if(c.length===0){do a+=H.d(t.d)
while(t.m())}else{a+=H.d(t.d)
for(;t.m();)a=a+c+H.d(t.d)}return a},
L(a){if(typeof a=="number"||H.b9(a)||a==null)return J.X(a)
if(typeof a=="string")return JSON.stringify(a)
return P.bx(a)},
a_(a){return new P.J(a)},
bp(a,b,c){return new P.t(!0,a,b,c)},
bE(a){return new P.al(a)},
aX(a){return new P.ak(a)},
a5:function a5(){},
J:function J(a){this.a=a},
ab:function ab(){},
t:function t(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
al:function al(a){this.a=a},
ak:function ak(a){this.a=a},
a2:function a2(a){this.a=a},
a3:function a3(a){this.a=a},
D:function D(){},
h:function h(){},
ai:function ai(a){this.a=a},
by(a,b,c){var t,s
if(P.c9(a))return b+"..."+c
t=new P.ai(b)
C.e.q($.H,a)
try{s=t
s.a=P.bD(s.a,a,", ")}finally{if(0>=$.H.length)return H.aM($.H,-1)
$.H.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
c9(a){var t,s
for(t=$.H.length,s=0;s<t;++s)if(a===$.H[s])return!0
return!1}},W={b:function b(){},Y:function Y(){},Z:function Z(){},a4:function a4(){},a:function a(){},M:function M(){},a6:function a6(){},x:function x(){},af:function af(){}}
var w=[C,H,J,M,P,W]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.az.prototype={}
J.e.prototype={
h(a){return"Instance of '"+H.d(H.ac(a))+"'"}}
J.N.prototype={
h(a){return String(a)},
$iaH:1}
J.P.prototype={
h(a){return"null"}}
J.v.prototype={
h(a){return String(a)}}
J.R.prototype={}
J.y.prototype={}
J.o.prototype={
h(a){var t=a[$.bm()]
if(t==null)return this.u(a)
return"JavaScript function for "+H.d(J.X(t))}}
J.k.prototype={
q(a,b){H.aF(a).c.a(b)
if(!!a.fixed$length)H.aO(P.bE("add"))
a.push(b)},
h(a){return P.by(a,"[","]")},
gj(a){return a.length},
$iaU:1}
J.a9.prototype={}
J.I.prototype={
m(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.c(H.cw(r))
t=s.c
if(t>=q){s.sn(null)
return!1}s.sn(r[t]);++s.c
return!0},
sn(a){this.d=this.$ti.p("1?").a(a)}}
J.Q.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a}}
J.O.prototype={$iaL:1}
J.a8.prototype={}
J.u.prototype={
i(a,b){if(typeof b!="string")throw H.c(P.bp(b,null,null))
return a+b},
h(a){return a},
gj(a){return a.length},
$iah:1}
H.aa.prototype={
h(a){var t="LateInitializationError: "+this.a
return t}}
H.w.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.bl(s==null?"unknown":s)+"'"},
gw(){return this},
$C:"$1",
$R:1,
$D:null}
H.a1.prototype={$C:"$2",$R:2}
H.aj.prototype={}
H.ag.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.bl(t)+"'"}}
H.K.prototype={
h(a){return"Closure '"+H.d(this.$_name)+"' of "+("Instance of '"+H.d(H.ac(this.a))+"'")}}
H.ae.prototype={
h(a){return"RuntimeError: "+this.a}}
H.am.prototype={
h(a){return"Assertion failed: "+P.L(this.a)}}
H.at.prototype={
$1(a){return this.a(a)}}
H.au.prototype={
$2(a,b){return this.a(a,b)}}
H.av.prototype={
$1(a){return this.a(H.b6(a))}}
H.l.prototype={
p(a){return H.ap(v.typeUniverse,this,a)},
B(a){return H.bR(v.typeUniverse,this,a)}}
H.S.prototype={}
H.an.prototype={
h(a){return this.a}}
H.T.prototype={}
P.a5.prototype={}
P.J.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.L(t)
return"Assertion failed"}}
P.ab.prototype={
h(a){return"Throw of null."}}
P.t.prototype={
gl(){return"Invalid argument"+(!this.a?"(s)":"")},
gk(){return""},
h(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gl()+p+n
if(!r.a)return m
t=r.gk()
s=P.L(r.b)
return m+t+": "+s}}
P.ad.prototype={
gl(){return"RangeError"},
gk(){return""}}
P.a7.prototype={
gl(){return"RangeError"},
gk(){var t,s=H.bU(this.b)
if(typeof s!=="number")return s.A()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gj(a){return this.f}}
P.al.prototype={
h(a){return"Unsupported operation: "+this.a}}
P.ak.prototype={
h(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.a2.prototype={
h(a){return"Concurrent modification during iteration: "+P.L(this.a)+"."}}
P.a3.prototype={
h(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.D.prototype={
h(a){return"null"}}
P.h.prototype={$ih:1,
h(a){return"Instance of '"+H.d(H.ac(this))+"'"},
toString(){return this.h(this)}}
P.ai.prototype={
gj(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.b.prototype={}
W.Y.prototype={
h(a){return String(a)}}
W.Z.prototype={
h(a){return String(a)}}
W.a4.prototype={
h(a){return String(a)}}
W.a.prototype={
h(a){return a.localName}}
W.M.prototype={}
W.a6.prototype={
gj(a){return a.length}}
W.x.prototype={
h(a){var t=a.nodeValue
return t==null?this.t(a):t},
sv(a,b){a.textContent=b}}
W.af.prototype={
gj(a){return a.length}};(function aliases(){var t=J.e.prototype
t.t=t.h
t=J.v.prototype
t.u=t.h})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.h,null)
s(P.h,[H.az,J.e,J.I,P.a5,H.w,H.l,H.S,P.D,P.ai])
s(J.e,[J.N,J.P,J.v,J.k,J.Q,J.u,W.M,W.a4])
s(J.v,[J.R,J.y,J.o])
t(J.a9,J.k)
s(J.Q,[J.O,J.a8])
s(P.a5,[H.aa,H.ae,P.J,H.an,P.ab,P.t,P.al,P.ak,P.a2,P.a3])
s(H.w,[H.a1,H.aj,H.at,H.av])
s(H.aj,[H.ag,H.K])
t(H.am,P.J)
t(H.au,H.a1)
t(H.T,H.an)
s(P.t,[P.ad,P.a7])
t(W.x,W.M)
t(W.a,W.x)
t(W.b,W.a)
s(W.b,[W.Y,W.Z,W.a6,W.af])})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{aL:"int",ci:"double",cv:"num",ah:"String",aH:"bool",D:"Null",bz:"List"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
H.bQ(v.typeUniverse,JSON.parse('{"R":"v","y":"v","o":"v","N":{"aH":[]},"k":{"aU":["1"]},"a9":{"k":["1"],"aU":["1"]},"O":{"aL":[]},"u":{"ah":[]}}'))
var u=(function rtii(){var t=H.bf
return{Z:t("cB"),s:t("k<ah>"),b:t("k<@>"),T:t("P"),g:t("o"),P:t("D"),K:t("h"),N:t("ah"),o:t("y"),y:t("aH"),i:t("ci"),S:t("aL"),A:t("0&*"),_:t("h*"),O:t("aT<D>?"),X:t("h?"),H:t("cv")}})();(function constants(){C.n=J.e.prototype
C.e=J.k.prototype
C.a=J.u.prototype
C.o=J.o.prototype
C.f=J.R.prototype
C.b=J.y.prototype
C.c=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.h=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.m=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.i=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.j=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.l=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.k=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.d=function(hooks) { return hooks; }
})();(function staticFields(){$.ao=null
$.m=0
$.C=null
$.aQ=null
$.bh=null
$.bd=null
$.bk=null
$.as=null
$.aw=null
$.aK=null
$.H=H.bc([],H.bf("k<h>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"cA","bm",function(){return H.cl("_$dart_dartClosure")})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.e,DOMError:J.e,ErrorEvent:J.e,Event:J.e,InputEvent:J.e,SubmitEvent:J.e,MediaError:J.e,NavigatorUserMediaError:J.e,OverconstrainedError:J.e,PositionError:J.e,GeolocationPositionError:J.e,SensorErrorEvent:J.e,SpeechRecognitionError:J.e,SQLError:J.e,HTMLAudioElement:W.b,HTMLBRElement:W.b,HTMLBaseElement:W.b,HTMLBodyElement:W.b,HTMLButtonElement:W.b,HTMLCanvasElement:W.b,HTMLContentElement:W.b,HTMLDListElement:W.b,HTMLDataElement:W.b,HTMLDataListElement:W.b,HTMLDetailsElement:W.b,HTMLDialogElement:W.b,HTMLDivElement:W.b,HTMLEmbedElement:W.b,HTMLFieldSetElement:W.b,HTMLHRElement:W.b,HTMLHeadElement:W.b,HTMLHeadingElement:W.b,HTMLHtmlElement:W.b,HTMLIFrameElement:W.b,HTMLImageElement:W.b,HTMLInputElement:W.b,HTMLLIElement:W.b,HTMLLabelElement:W.b,HTMLLegendElement:W.b,HTMLLinkElement:W.b,HTMLMapElement:W.b,HTMLMediaElement:W.b,HTMLMenuElement:W.b,HTMLMetaElement:W.b,HTMLMeterElement:W.b,HTMLModElement:W.b,HTMLOListElement:W.b,HTMLObjectElement:W.b,HTMLOptGroupElement:W.b,HTMLOptionElement:W.b,HTMLOutputElement:W.b,HTMLParagraphElement:W.b,HTMLParamElement:W.b,HTMLPictureElement:W.b,HTMLPreElement:W.b,HTMLProgressElement:W.b,HTMLQuoteElement:W.b,HTMLScriptElement:W.b,HTMLShadowElement:W.b,HTMLSlotElement:W.b,HTMLSourceElement:W.b,HTMLSpanElement:W.b,HTMLStyleElement:W.b,HTMLTableCaptionElement:W.b,HTMLTableCellElement:W.b,HTMLTableDataCellElement:W.b,HTMLTableHeaderCellElement:W.b,HTMLTableColElement:W.b,HTMLTableElement:W.b,HTMLTableRowElement:W.b,HTMLTableSectionElement:W.b,HTMLTemplateElement:W.b,HTMLTextAreaElement:W.b,HTMLTimeElement:W.b,HTMLTitleElement:W.b,HTMLTrackElement:W.b,HTMLUListElement:W.b,HTMLUnknownElement:W.b,HTMLVideoElement:W.b,HTMLDirectoryElement:W.b,HTMLFontElement:W.b,HTMLFrameElement:W.b,HTMLFrameSetElement:W.b,HTMLMarqueeElement:W.b,HTMLElement:W.b,HTMLAnchorElement:W.Y,HTMLAreaElement:W.Z,DOMException:W.a4,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,EventTarget:W.M,HTMLFormElement:W.a6,Document:W.x,HTMLDocument:W.x,Node:W.x,HTMLSelectElement:W.af})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,EventTarget:false,HTMLFormElement:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=M.ct
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=js_main.dart.js.map
