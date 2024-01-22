function Ie(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function U(e,t){let n;{var r=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=r}return Ie()&&(n.stack=Ce(n.stack,t)),n}function Ce(e,t){if(!e)return e;const n=je(e);let r=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:r<t&&Oe(s)?(r++,!1):!0).join(`
`)}function Oe(e){return e.startsWith("    at ")}function je(e){return e.split(/\r?\n/)}function T(e,t){const n=globalThis[K]=globalThis[K]||{};return n[e]=n[e]||t}const K="_vike";function v(e){return typeof e=="object"&&e!==null}function H(e){return Array.from(new Set(e))}const S=T("assertPackageInstances.ts",{instances:[],alreadyLogged:new Set}),ae="The client runtime of Server Routing as well as the client runtime of Client Routing are both being loaded. Make sure they aren't loaded both at the same time for a given page. See https://vike.dev/client-runtimes-conflict",G="Two vike client runtime instances are being loaded. Make sure your client-side bundles don't include vike twice. (In order to reduce the size of your client-side JavaScript bundles.)";function B(){{const e=H(S.instances);_e(e.length<=1,`Both vike@${e[0]} and vike@${e[1]} loaded. Only one version should be loaded.`)}S.checkSingleInstance&&S.instances.length>1&&I(!1,G,{onlyOnce:!0,showStackTrace:!0})}function en(e){I(S.isClientRouting!==!0,ae,{onlyOnce:!0,showStackTrace:!0}),I(S.isClientRouting===void 0,G,{onlyOnce:!0,showStackTrace:!0}),S.isClientRouting=!1,e&&(S.checkSingleInstance=!0),B()}function tn(e){I(S.isClientRouting!==!1,ae,{onlyOnce:!0,showStackTrace:!0}),I(S.isClientRouting===void 0,G,{onlyOnce:!0,showStackTrace:!0}),S.isClientRouting=!0,e&&(S.checkSingleInstance=!0),B()}function Le(e){S.instances.push(e),B()}function _e(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function I(e,t,{onlyOnce:n,showStackTrace:r}){if(e)return;const i=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:s}=S,l=n===!0?i:n;if(s.has(l))return;s.add(l)}console.warn(r?new Error(i):i)}const xe="0.4.159",le={projectName:"Vike",projectVersion:xe};Le(le.projectVersion);const ce=new Proxy(e=>e,{get:()=>ce}),E=ce,y=T("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet}),Fe="[vike]",We=`[vike@${le.projectVersion}]`,J=2;function o(e,t){var s;if(e)return;const n=(()=>{if(!t)return null;const l=typeof t=="string"?t:JSON.stringify(t);return E.dim(`Debug info (for Vike maintainers; you can ignore this): ${l}`)})();let r=["You stumbled upon a Vike bug.",`Go to ${E.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually under 24 hours).`,n].filter(Boolean).join(" ");r=C(r),r=F(r,"Bug"),r=O(r,!0);const i=U(r,J);throw(s=y.onBeforeLog)==null||s.call(y),i}function g(e,t,{showStackTrace:n}={}){var i;if(e)return;t=C(t),t=F(t,"Wrong Usage"),t=O(t);const r=U(t,J);throw n&&y.showStackTraceList.add(r),(i=y.onBeforeLog)==null||i.call(y),r}function Ve(e){return e=C(e),e=F(e,"Error"),e=O(e),U(e,J)}function R(e,t,{onlyOnce:n,showStackTrace:r}){var i;if(!e){if(t=C(t),t=F(t,"Warning"),t=O(t),n){const{alreadyLogged:s}=y,l=n===!0?t:n;if(s.has(l))return;s.add(l)}if((i=y.onBeforeLog)==null||i.call(y),r){const s=new Error(t);y.showStackTraceList.add(s),y.logger(s,"warn")}else y.logger(t,"warn")}}function nn(e,t,{onlyOnce:n}){var r;if(!e){if(t=C(t),t=O(t),n){const{alreadyLogged:i}=y,s=t;if(i.has(s))return;i.add(s)}(r=y.onBeforeLog)==null||r.call(y),y.logger(t,"info")}}function F(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=E.bold(E[r](n)),`${n}${e}`}function C(e){return e.startsWith("[")?e:` ${e}`}function O(e,t=!1){return`${t?We:Fe}${e}`}function Y(){return typeof window<"u"&&typeof window.scrollY=="number"}const L=T("utils/assertRouterType.ts",{});function rn(){ue(Ae()),L.isClientRouting=!0}function Ae(){return L.isClientRouting!==!1}function sn(){ue(L.isClientRouting!==!0),L.isClientRouting=!1}function ue(e){g(Y(),`${E.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),R(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}const ze=["js","ts","cjs","cts","mjs","mts","jsx","tsx","cjsx","ctsx","mjsx","mtsx"],fe=["vue","svelte","marko","md","mdx"],De=[...ze,...fe];function de(e){const t=De.some(n=>e.endsWith("."+n));return o(!Ne(e)||t),t}function Ne(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function Ue(e){return fe.some(t=>e.endsWith("."+t))}function _(e,t,n){return typeof e=="string"?X(e.split(""),t,n).join(""):X(e,t,n)}function X(e,t,n){const r=[];let i=t>=0?t:e.length+t;o(i>=0&&i<=e.length);let s=n>=0?n:e.length+n;for(o(s>=0&&s<=e.length);!(i===s||(i===e.length&&(i=0),i===s));){const l=e[i];o(l!==void 0),r.push(l),i++}return r}const ge=["http://","https://","tauri://"];function he(e){return ge.some(t=>e.startsWith(t))||e.startsWith("/")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function on(e,t){o(t.includes(" but ")),g(typeof e=="string",`${t} should be a string`),!he(e)&&(!e.startsWith("/")&&!e.includes(":")?g(!1,`${t} is ${E.cyan(e)} and it should be /${E.cyan(e)} instead (URL pathnames should start with a leading slash)`):g(!1,`${t} isn't a valid URL`))}function He(e,t){o(he(e)),o(t.startsWith("/"));const[n,...r]=e.split("#");o(n!==void 0);const i=["",...r].join("#")||null;o(i===null||i.startsWith("#"));const s=i===null?"":A(i.slice(1)),[l,...a]=n.split("?");o(l!==void 0);const c=["",...a].join("?")||null;o(c===null||c.startsWith("?"));const u={},f={};Array.from(new URLSearchParams(c||"")).forEach(([b,q])=>{u[b]=q,f[b]=[...f.hasOwnProperty(b)?f[b]:[],q]});const{origin:d,pathname:w}=Be(l,t);o(d===null||d===A(d)),o(w.startsWith("/")),o(d===null||e.startsWith(d));const h=l.slice((d||"").length);Ke(e,d,h,c,i);let{pathname:m,hasBaseServer:k}=Me(w,t);return m=Ge(m),o(m.startsWith("/")),{origin:d,pathname:m,pathnameOriginal:h,hasBaseServer:k,search:u,searchAll:f,searchOriginal:c,hash:s,hashOriginal:i}}function A(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Ge(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>A(t).split("/").join("%2F")).join("/"),e}function Be(e,t){var n;o(!e.includes("?")&&!e.includes("#"));{const{origin:r,pathname:i}=Q(e);if(r)return{origin:r,pathname:i};o(i===e)}if(e.startsWith("/"))return{origin:null,pathname:e};{const r=typeof window<"u"?(n=window==null?void 0:window.document)==null?void 0:n.baseURI:void 0;let i;return r?i=Q(r.split("?")[0]).pathname:i=t,{origin:null,pathname:Je(e,i)}}}function Q(e){if(ge.some(t=>e.startsWith(t))){const[t,n,r,...i]=e.split("/"),s=[t,n,r].join("/"),l=["",...i].join("/")||"/";return{origin:s,pathname:l}}else return{pathname:e,origin:null}}function Je(e,t){const n=t.split("/"),r=e.split("/");let i=t.endsWith("/");e.startsWith(".")&&n.pop();for(const l in r){const a=r[l];a==""&&l==="0"||a!="."&&(a==".."?n.pop():(i=!1,n.push(a)))}let s=n.join("/");return i&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function Ye(e){o(e.startsWith("/")),o(!e.includes("?")),o(!e.includes("#"))}function Me(e,t){Ye(e),o(qe(t));let n=e;if(o(n.startsWith("/")),o(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let r=t;return t.endsWith("/")&&n===_(t,0,-1)&&(r=_(t,0,-1),o(n===r)),n.startsWith(r)?(o(n.startsWith("/")||n.startsWith("http")),o(n.startsWith(r)),n=n.slice(r.length),n.startsWith("/")||(n="/"+n),o(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function qe(e){return e.startsWith("/")}function Ke(e,t,n,r,i){const s=Xe(t,n,r,i);o(e===s)}function Xe(e,t,n,r){return`${e||""}${t}${n||""}${r||""}`}function pe(e,t){t&&Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}function W(e){return e instanceof Function||typeof e=="function"}function an(e){return(t,n)=>{const r=e(t),i=e(n);return r===i?0:r>i?-1:1}}function ln(e){return(t,n)=>{const r=e(t),i=e(n);return r===i?0:r<i?-1:1}}function Qe(e){return(t,n)=>{const r=e(t),i=e(n);if(o([!0,!1,null].includes(r)),o([!0,!1,null].includes(i)),r===i)return 0;if(r===!0||i===!1)return-1;if(i===!0||r===!1)return 1;o(!1)}}function Ze(e){return Qe(t=>{const n=e(t);return n===null?null:!n})}function p(e,t,n="unknown"){if(!v(e))return!1;if(!(t in e))return n==="undefined";if(n==="unknown")return!0;const r=e[t];return n==="array"?Array.isArray(r):n==="object"?v(r):n==="string[]"?Array.isArray(r)&&r.every(i=>typeof i=="string"):n==="function"?W(r):Array.isArray(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="undefined"?r===void 0:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function et(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const tt=e=>e!=null;function me(e){const t=n=>`Not a posix path: ${n}`;o(e!==null,t("null")),o(typeof e=="string",t(`typeof path === ${JSON.stringify(typeof e)}`)),o(e!=="",t("(empty string)")),o(e),o(!e.includes("\\"),t(e))}const nt=["clientRouting"];function rt(e){nt.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;g(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),g(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const ye=["render","clientRouting","prerender","doNotPrerender"];function it(e,t){g(!ye.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function st(e,t){if(!e)return null;let[n,...r]=e;if(!n||r.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let i="",s="";return n==="default"?i="export default":(i="export",r=[n,...r]),r.forEach(a=>{i=`${i} { ${a}`,s=` }${s}`}),i+s}function Ee(e,t,{definedAt:n}){const r=ot(n,t),i=r==="internally"?r:`at ${r}`;let s=`${t}`;return`${e} ${E.cyan(s)} defined ${i}`}function ot(e,t){if("isComputed"in e)return"internally";let n;return"files"in e?n=e.files:n=[e],o(n.length>=1),n.map(i=>{const{filePathToShowToUser:s,fileExportPathToShowToUser:l}=i;let a=s;const c=st(l,t);return c&&(a=`${a} > ${E.cyan(c)}`),a}).join(" / ")}function cn(e,t){const n=t.find(r=>r.pageId===e);return o(t.length>0),o(n),n}function we({definedAt:e}){if("isComputed"in e||"files"in e)return null;const{filePathToShowToUser:t}=e;return o(t),t}function at({definedAt:e}){const t=we({definedAt:e});return o(t),t}function lt(e,t){const n={},r={},i={};e.forEach(a=>{ct(a).forEach(({exportName:u,exportValue:f,isFromDefaultExport:d})=>{o(u!=="default"),i[u]=i[u]??[],i[u].push({exportValue:f,exportSource:`${a.filePath} > ${d?`\`export default { ${u} }\``:`\`export { ${u} }\``}`,filePath:a.filePath,_filePath:a.filePath,_fileType:a.fileType,_isFromDefaultExport:d})})}),t&&Object.entries(t.configValues).forEach(([a,c])=>{const{value:u}=c,f=we(c),d=Ee("Config",a,c);r[a]=r[a]??u,n[a]=n[a]??[],o(n[a].length===0),n[a].push({configValue:u,configDefinedAt:d,configDefinedByFile:f});const w=a;i[w]=i[w]??[],i[w].push({exportValue:u,exportSource:d,filePath:f,_filePath:f,_fileType:null,_isFromDefaultExport:null})});const s=ut(),l={};return Object.entries(i).forEach(([a,c])=>{c.forEach(({exportValue:u,_fileType:f,_isFromDefaultExport:d})=>{l[a]=l[a]??u,f===".page"&&!d&&(a in s||(s[a]=u))})}),o(!("default"in l)),o(!("default"in i)),{config:r,configEntries:n,exports:l,exportsAll:i,pageExports:s}}function ct(e){const{filePath:t,fileExports:n}=e;o(n),o(de(t));const r=[];return Object.entries(n).sort(Ze(([i])=>i==="default")).forEach(([i,s])=>{let l=i==="default";if(l)if(Ue(t))i="Page";else{g(v(s),`The ${E.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([a,c])=>{it(a,t),r.push({exportName:a,exportValue:c,isFromDefaultExport:l})});return}r.push({exportName:i,exportValue:s,isFromDefaultExport:l})}),r.forEach(({exportName:i,isFromDefaultExport:s})=>{o(!(s&&ye.includes(i)))}),r}function ut(){return new Proxy({},{get(...e){return Y()||R(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function ft(e){const t=".page.",n=_(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function P(e){me(e)}function un(e,t){if(t.length>0){const r=t.filter(i=>i.isErrorPage);return r.length===0?null:(g(r.length===1,"Only one error page can be defined"),r[0].pageId)}const n=H(e.map(({pageId:r})=>r).filter(r=>V(r)));if(g(n.length<=1,`Only one _error.page.js is allowed, but found several: ${n.join(" ")}`),n.length>0){const r=n[0];return o(r),r}return null}function V(e,t){return o(!e.includes("\\")),e.includes("/_error")}function dt(e,t){if(t.length>0){const n=t.find(r=>r.pageId===e);return o(n),!!n.isErrorPage}else return V(e)}const gt=[".page",".page.server",".page.route",".page.client",".css"];function ht(e){if(me(e),e.endsWith(".css"))return".css";o(de(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],i=n.slice(-2)[0];if(i==="page")return".page";if(o(r==="page",e),i==="server")return".page.server";if(i==="client")return".page.client";if(i==="route")return".page.route";o(!1,e)}function Se(e){const t=s=>i.pageId===s||i.isDefaultPageFile&&(Z(i.filePath)||pt(s,i.filePath)),n=ht(e),i={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:z(e),isRendererPageFile:n!==".css"&&z(e)&&Z(e),isErrorPageFile:V(e),pageId:ft(e)};return i}function z(e){return P(e),V(e)?!1:e.includes("/_default")}function Z(e){return P(e),e.includes("/renderer/")}function pt(e,t){P(e),P(t),o(!e.endsWith("/")),o(!t.endsWith("/")),o(z(t));const n=_(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function mt(e){o(Array.isArray(e)),e.forEach(t=>{o(v(t)),o(p(t,"pageId","string")),o(p(t,"routeFilesystem")),o(p(t,"configValuesSerialized")),o(p(t,"configValuesImported"))})}function yt(e){o(p(e,"configValuesImported"))}const Et=["$$registrations","_rerender_only"],wt=[".md",".mdx"];function St(e,t,n){const r=Object.keys(e).filter(s=>!Et.includes(s)),i=r.filter(s=>s!=="default"&&s!==n);if(i.length===0){if(r.length===1)return;const s=E.cyan("export default"),l=E.cyan(`export { ${n} }`);r.length===0?g(!1,`${t} doesn't export any value, but it should have a ${l} or ${s}`):(o(r.length===2),R(!1,`${t} remove ${l} or ${s}`,{onlyOnce:!0}))}else{if(wt.some(s=>t.endsWith(s)))return;i.forEach(s=>{R(!1,`${t} should have only one export: move ${E.cyan(`export { ${s} }`)} to its own +${i}.js file`,{onlyOnce:!0})})}}function D(e){const t={},n=(r,i,s,l)=>{t[r]={value:i,definedAt:{filePathToShowToUser:s,fileExportPathToShowToUser:[r,"default"].includes(l)?[]:[l]}},vt(i,r,s)};return e.forEach(r=>{if(r.isValueFile){const{exportValues:i,importPath:s,configName:l}=r;l!=="client"&&St(i,s,l),Object.entries(i).forEach(([a,c])=>{const u=a!=="default",f=u?a:r.configName;u&&f in t||n(f,c,s,a)})}else{const{configName:i,importPath:s,exportValue:l,exportName:a}=r;n(i,l,s,a)}}),t}function vt(e,t,n){o(!n.includes("+config."))}const bt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function M(e){const t=JSON.parse(e);return ve(t)}function ve(e){return typeof e=="string"?kt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=ve(n)}),e)}function kt(e){for(const{match:t,deserialize:n}of bt)if(t(e))return n(e,M);return e}function be(e){const t={};return Object.entries(e).forEach(([n,r])=>{const{valueSerialized:i,definedAt:s}=r;o(i),o(!t[n]),t[n]={value:M(i),definedAt:s}}),t}function $t(e,t){const n=e.map(i=>{const s={};{const{configValuesSerialized:f}=i,d=be(f);Object.assign(s,d)}{const{configValuesImported:f}=i,d=D(f);Object.assign(s,d)}const{pageId:l,isErrorPage:a,routeFilesystem:c,loadConfigValuesAll:u}=i;return Tt(s),{pageId:l,isErrorPage:a,routeFilesystem:c,configValues:s,loadConfigValuesAll:u}}),r={configValues:{}};{const i=D(t.configValuesImported);Object.assign(r.configValues,i)}return{pageConfigs:n,pageConfigGlobal:r}}function Tt(e){const t="route",n=e[t];if(!n)return;const{value:r}=n,i=typeof r,s=Ee("Config",t,n);g(i==="string"||W(r),`${s} has an invalid type '${i}': it should be a string or a function instead, see https://vike.dev/route`)}function Rt(e){o(p(e,"isGeneratedFile")),o(e.isGeneratedFile!==!1,"vike was re-installed(/re-built). Restart your app."),o(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),o(p(e,"pageFilesLazy","object")),o(p(e,"pageFilesEager","object")),o(p(e,"pageFilesExportNamesLazy","object")),o(p(e,"pageFilesExportNamesEager","object")),o(p(e.pageFilesLazy,".page")),o(p(e.pageFilesLazy,".page.client")||p(e.pageFilesLazy,".page.server")),o(p(e,"pageFilesList","string[]")),o(p(e,"pageConfigsSerialized")),o(p(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;mt(t),yt(n);const{pageConfigs:r,pageConfigGlobal:i}=$t(t,n),s={};j(e.pageFilesLazy).forEach(({filePath:a,pageFile:c,globValue:u})=>{c=s[a]=s[a]??c;const f=u;ee(f),c.loadFile=async()=>{"fileExports"in c||(c.fileExports=await f(),rt(c))}}),j(e.pageFilesExportNamesLazy).forEach(({filePath:a,pageFile:c,globValue:u})=>{c=s[a]=s[a]??c;const f=u;ee(f),c.loadExportNames=async()=>{if(!("exportNames"in c)){const d=await f();g("exportNames"in d,"You seem to be using Vite 2 but the latest vike versions only work with Vite 3"),o(p(d,"exportNames","string[]"),c.filePath),c.exportNames=d.exportNames}}}),j(e.pageFilesEager).forEach(({filePath:a,pageFile:c,globValue:u})=>{c=s[a]=s[a]??c;const f=u;o(v(f)),c.fileExports=f}),j(e.pageFilesExportNamesEager).forEach(({filePath:a,pageFile:c,globValue:u})=>{c=s[a]=s[a]??c;const f=u;o(v(f)),o(p(f,"exportNames","string[]"),c.filePath),c.exportNames=f.exportNames}),e.pageFilesList.forEach(a=>{s[a]=s[a]??Se(a)});const l=Object.values(s);return l.forEach(({filePath:a})=>{o(!a.includes("\\"))}),{pageFiles:l,pageConfigs:r,pageConfigGlobal:i}}function j(e){const t=[];return Object.entries(e).forEach(([n,r])=>{o(gt.includes(n)),o(v(r)),Object.entries(r).forEach(([i,s])=>{const l=Se(i);o(l.fileType===n),t.push({filePath:i,pageFile:l,globValue:s})})}),t}function ee(e){o(W(e))}const $=T("setPageFiles.ts",{});function fn(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:r}=Rt(e);$.pageFilesAll=t,$.pageConfigs=n,$.pageConfigGlobal=r}async function dn(e,t){e?(o(!$.pageFilesGetter),o(t===void 0)):(o($.pageFilesGetter),o(typeof t=="boolean"),(!$.pageFilesAll||!t)&&await $.pageFilesGetter());const{pageFilesAll:n,pageConfigs:r,pageConfigGlobal:i}=$;o(n&&r&&i);const s=Pt(n,r);return{pageFilesAll:n,allPageIds:s,pageConfigs:r,pageConfigGlobal:i}}function Pt(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),r=H(n),i=t.map(s=>s.pageId);return[...r,...i]}function It(e,t){return ke(e,t,!0)}function gn(e,t){return ke(e,t,!1)}function ke(e,t,n){const r=n?"CLIENT_ONLY":"SERVER_ONLY",i=e.filter(h=>h.isRelevant(t)&&h.fileType!==".page.route").sort(Ct(n,t)),s=h=>{const m=i.filter(b=>b.pageId===t&&b.isEnv(h?"CLIENT_AND_SERVER":r));g(m.length<=1,`Merge the following files into a single file: ${m.map(b=>b.filePath).join(" ")}`);const k=m[0];return o(k===void 0||!k.isDefaultPageFile),k},l=s(!1),a=s(!0),c=h=>i.filter(m=>m.isRendererPageFile&&m.isEnv(h?"CLIENT_AND_SERVER":r))[0],u=c(!1),f=c(!0),d=i.filter(h=>h.isDefaultPageFile&&!h.isRendererPageFile&&(h.isEnv(r)||h.isEnv("CLIENT_AND_SERVER")));return[l,a,...d,u,f].filter(tt)}function Ct(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",r=-1,i=1,s=0;return(l,a)=>{if(!l.isDefaultPageFile&&a.isDefaultPageFile)return r;if(!a.isDefaultPageFile&&l.isDefaultPageFile)return i;{const c=l.isRendererPageFile,u=a.isRendererPageFile;if(!c&&u)return r;if(!u&&c)return i;o(c===u)}{const c=te(t,l.filePath),u=te(t,a.filePath);if(c<u)return r;if(u<c)return i;o(c===u)}{if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return r;if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return i}return s}}function te(e,t){P(e),P(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),i=t.slice(n),s=r.split("/").length,l=i.split("/").length;return s+l}const Ot="modulepreload",jt=function(e){return"/"+e},ne={},hn=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=jt(s),s in ne)return;ne[s]=!0;const l=s.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const d=i[f];if(d.href===s&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Ot,l||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),l)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})};function Lt(){o(Y())}function _t(){Lt()}function re(e){const t=e/1e3;if(t<120){const n=ie(t);return`${n} second${se(n)}`}{const n=t/60,r=ie(n);return`${r} minute${se(r)}`}}function ie(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function se(e){return e==="1"?"":"s"}const $e=T("utils/executeHook.ts",{userHookErrors:new WeakMap});function pn(e){return v(e)?$e.userHookErrors.get(e)??!1:!1}function xt(e,t){const{hookName:n,hookFilePath:r,hookTimeout:{error:i,warning:s}}=t;let l,a;const c=new Promise((w,h)=>{l=m=>{u(),w(m)},a=m=>{u(),h(m)}}),u=()=>{f&&clearTimeout(f),d&&clearTimeout(d)},f=oe(s)&&setTimeout(()=>{R(!1,`The ${n}() hook defined by ${r} is slow: it's taking more than ${re(s)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},s),d=oe(i)&&setTimeout(()=>{const w=Ve(`The ${n}() hook defined by ${r} timed out: it didn't finish after ${re(i)} (https://vike.dev/hooksTimeout)`);a(w)},i);return(async()=>{try{const w=await e();l(w)}catch(w){v(w)&&$e.userHookErrors.set(w,{hookName:n,hookFilePath:r}),a(w)}})(),c}function oe(e){return!!e&&e!==1/0}function mn(e){const t=window.location.href,{searchOriginal:n,hashOriginal:r,pathname:i}=He(t,"/");let s;return e!=null&&e.withoutHash?s=`${i}${n||""}`:s=`${i}${n||""}${r||""}`,o(s.startsWith("/")),s}_t();function yn(){const e="vike_pageContext",t=document.getElementById(e);g(t,`Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`);const n=t.textContent;o(n);const r=M(n);return o(p(r,"_pageId","string")),r}const Ft=T("getHook.ts",{isPrerendering:!1});function N(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,r=Wt(n,t),i=e.exports[t],s=e.exportsAll[t][0];if(o(s.exportValue===i),i===null)return null;const l=s.filePath;return o(l),o(!l.endsWith(" ")),Te(i,{hookName:t,hookFilePath:l}),{hookFn:i,hookName:t,hookFilePath:l,hookTimeout:r}}function En(e,t){const n=e.configValues[t];if(!n)return null;const r=n.value;if(!r)return null;const i=at(n);o(i),Te(r,{hookName:t,hookFilePath:i});const s=Re(t);return{hookFn:r,hookName:t,hookFilePath:i,hookTimeout:s}}function wn(e,t){N(e,t)}function Te(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),g(W(e),`Hook ${t}() defined by ${n} should be a function`)}function Wt(e,t){const n=Vt(e);if(n===!1)return{error:!1,warning:!1};const r=n[t],i=Re(t);return(r==null?void 0:r.error)!==void 0&&(i.error=r.error),(r==null?void 0:r.warning)!==void 0&&(i.warning=r.warning),i}function Vt(e){if(e===void 0)return{};if(e===!1)return!1;g(v(e),`Setting ${E.cyan("hooksTimeout")} should be ${E.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,r])=>{if(r===!1){t[n]={error:!1,warning:!1};return}g(v(r),`Setting ${E.cyan(`hooksTimeout.${n}`)} should be ${E.cyan("false")} or an object`);const[i,s]=["error","warning"].map(l=>{const a=r[l];if(a===void 0||a===!1)return a;const c=`Setting ${E.cyan(`hooksTimeout.${n}.${l}`)} should be`;return g(typeof a=="number",`${c} ${E.cyan("false")} or a number`),g(a>0,`${c} a positive number`),a});t[n]={error:i,warning:s}}),t}function Re(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:Ft.isPrerendering?{error:2*60*1e3,warning:30*1e3}:(o(!e.toLowerCase().includes("prerender")),{error:30*1e3,warning:4*1e3})}function At(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[r])=>et(n,r)).forEach(([n,r])=>{e[n]=r})}function zt(e){Dt(e),Nt(e)}function Dt(e){dt(e._pageId,e._pageConfigs)&&o(p(e,"is404","boolean"))}function Nt(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!v(t)){R(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const Ut="not-serializable",x=T("getPageContextProxyForUser.ts",{});function Ht(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const r=e[n],i=JSON.stringify(n);return g(r!==Ut,`pageContext[${i}] couldn't be serialized and, therefore, is missing on the client-side. Check the server logs for more information.`),Gt(e,n),r}})}function Gt(e,t){if(x.prev===t||x.prev==="__v_raw"||(Yt(t),t in e)||Jt(t))return;const n=JSON.stringify(t);e._hasPageContextFromServer&&!e._hasPageContextFromClient&&g(!1,`pageContext[${n}] isn't available on the client-side because ${n} is missing in passToClient, see https://vike.dev/passToClient`)}const Bt=["then","toJSON"];function Jt(e){return!!(Bt.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function Yt(e){x.prev=e,window.setTimeout(()=>{x.prev=void 0},0)}function Mt(e,t){if(t){const i=e;o([!0,!1].includes(i.isHydration)),o([!0,!1,null].includes(i.isBackwardNavigation))}else{const i=e;o(i.isHydration===!0),o(i.isBackwardNavigation===null)}o("config"in e),o("configEntries"in e),o("exports"in e),o("exportsAll"in e),o("pageExports"in e),o(v(e.pageExports));const n=e.exports.Page;pe(e,{Page:n}),qt(e),At(e);const r=Ht(e);return zt(e),r}function qt(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}function Kt(e,t){const n=e.filter(i=>i.pageId===t);return o(n.length<=1),n[0]??null}async function Xt(e,t){if("isAllLoaded"in e&&!t)return e;const n=await e.loadConfigValuesAll();{const{configValuesImported:r}=n,i=D(r);Object.assign(e.configValues,i)}{const{configValuesSerialized:r}=n,i=be(r);Object.assign(e.configValues,i)}return pe(e,{isAllLoaded:!0}),e}const Pe="__whileFetchingAssets";async function Sn(e,t,n){const r=It(t,e),i=Kt(n,e);let s;const l=!1;try{s=(await Promise.all([i&&Xt(i,l),...r.map(m=>{var k;return(k=m.loadFile)==null?void 0:k.call(m)})]))[0]}catch(h){throw Qt(h)&&Object.assign(h,{[Pe]:!0}),h}const{config:a,configEntries:c,exports:u,exportsAll:f,pageExports:d}=lt(r,s);return{config:a,configEntries:c,exports:u,exportsAll:f,pageExports:d,_pageFilesLoaded:r}}function vn(e){return e?e[Pe]===!0:!1}function Qt(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}async function bn(e,t){const n=Mt(e,t);let r=null,i;r=N(e,"render"),i="render";{const a=N(e,"onRenderClient");a&&(r=a,i="onRenderClient")}if(!r){const a=Zt(e);if(o(a),e._pageConfigs.length>0)g(!1,`No onRenderClient() hook defined for URL '${a}', but it's needed, see https://vike.dev/onRenderClient`);else{const c=e._pageFilesLoaded.filter(f=>f.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+a:u="One of the following files should export a render() hook: "+c.map(f=>f.filePath).join(" "),g(!1,u)}}o(r);const s=r.hookFn;o(i);const l=await xt(()=>s(n),r);g(l===void 0,`The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`)}function Zt(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}export{xt as A,Re as B,pn as C,nn as D,Mt as E,cn as F,M as G,Ve as H,an as I,ot as J,V as K,En as L,qe as M,he as N,It as O,Kt as P,Qe as Q,ln as R,on as S,vn as T,un as U,tn as V,hn as _,yn as a,g as b,dn as c,R as d,sn as e,en as f,mn as g,bn as h,wn as i,W as j,o as k,Sn as l,Ee as m,Lt as n,pe as o,E as p,rn as q,v as r,fn as s,T as t,p as u,gn as v,He as w,_ as x,Y as y,N as z};
