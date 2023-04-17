function V(e,t){let n;{var i=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=i}return n.stack=me(n.stack,t),n}function me(e,t){if(!e)return e;const n=ye(e);let i=0;return n.filter(o=>o.includes(" (internal/")||o.includes(" (node:internal")?!1:i<t&&ve(o)?(i++,!1):!0).join(`
`)}function ve(e){return e.startsWith("    at ")}function ye(e){return e.split(/\r?\n/)}function I(e,t){const n=globalThis.__vite_plugin_ssr=globalThis.__vite_plugin_ssr||{};return n[e]=n[e]||t}function L(e){return Array.from(new Set(e))}const E=I("assertPackageInstances.ts",{instances:[]}),te="Make sure your client-side code doesn't include(/bundle)",ne=`The client runtime of Server Routing and the client runtime of Client Routing are both being loaded. ${te} both for a given page.`,D=`Two vite-plugin-ssr client runtime instances are being loaded. ${te} vite-plugin-ssr twice. (In order to reduce the size of your client-side JavaScript bundles.)`;function z(){{const e=L(E.instances);if(e.length>1){const t=`Both \`vite-plugin-ssr@${e[0]}\` and \`vite-plugin-ssr@${e[1]}\` loaded. Only one version should be loaded.`;m(!1,t)}}E.checkSingleInstance&&E.instances.length>1&&w(!1,D,{onlyOnce:!0,showStackTrace:!0})}function Lt(e){w(E.isClientRouting!==!0,ne,{onlyOnce:!0,showStackTrace:!0}),w(E.isClientRouting===void 0,D,{onlyOnce:!0,showStackTrace:!0}),E.isClientRouting=!1,e&&(E.checkSingleInstance=!0),z()}function Ot(e){w(E.isClientRouting!==!1,ne,{onlyOnce:!0,showStackTrace:!0}),w(E.isClientRouting===void 0,D,{onlyOnce:!0,showStackTrace:!0}),E.isClientRouting=!0,e&&(E.checkSingleInstance=!0),z()}function Ee(e){E.instances.push(e),z()}const be="0.4.113",P={projectName:"vite-plugin-ssr",projectVersion:be,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr"};Ee(P.projectVersion);const R=I("assert.ts",{alreadyLogged:new Set}),j=`[${P.npmPackageName}@${P.projectVersion}]`,Re=`${j}[Bug]`,$e=`${j}[Wrong Usage]`,_e=`${j}[Warning]`,we=`${j}[Info]`,B=2;function r(e,t){var n;if(e)return;const i=(()=>{if(!t)return null;const o=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${P.projectName} maintainers; you can ignore this): ${o}`})(),s=V([`${Re} You stumbled upon a bug in ${P.projectName}'s source code.`,`Go to ${P.githubRepository}/issues/new and copy-paste this error. (The error's stack trace is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Don't hesitate to reach out as it makes ${P.projectName} more robust.`,i].filter(Boolean).join(" "),B);throw(n=R.onBeforeLog)===null||n===void 0||n.call(R),s}function m(e,t){var n;if(e)return;const i=t.startsWith("[")?"":" ",s=`${$e}${i}${t}`,o=V(s,B);throw(n=R.onBeforeLog)===null||n===void 0||n.call(R),o}function Pe(e){const t=e.startsWith("[")?"":" ";return V(`${j}${t}${e}`,B)}function w(e,t,{onlyOnce:n,showStackTrace:i}){var s;if(e)return;const o=`${_e} ${t}`;if(n){const{alreadyLogged:l}=R,a=n===!0?o:n;if(l.has(a))return;l.add(a)}(s=R.onBeforeLog)===null||s===void 0||s.call(R),console.warn(i?new Error(o):o)}function Ct(e,t,{onlyOnce:n}){var i;if(e)return;const s=`${we} ${t}`;if(n){const{alreadyLogged:o}=R,l=s;if(o.has(l))return;o.add(l)}(i=R.onBeforeLog)===null||i===void 0||i.call(R),console.log(s)}function U(){return typeof window<"u"&&typeof window.scrollY=="number"}const F=I("utils/assertRouterType.ts",{});function Wt(){ie(Se()),F.isClientRouting=!0}function Se(){return F.isClientRouting!==!1}function xt(){ie(F.isClientRouting!==!0),F.isClientRouting=!1}function ie(e){m(U(),"`import { something } from 'vite-plugin-ssr/client/router'` is forbidden on the server-side"),w(e,"You shouldn't `import { something } from 'vite-plugin-ssr/client/router'` when using Server Routing. The 'vite-plugin-ssr/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` when using Server Routing as these will unnecessarily bloat your client-side bundle.",{showStackTrace:!1,onlyOnce:!0})}const je=["js","ts","cjs","cts","mjs","mts","jsx","tsx","cjsx","ctsx","mjsx","mtsx"],se=["vue","svelte","marko","md","mdx"],Ie=[...je,...se];function re(e){const t=Ie.some(n=>e.endsWith("."+n));return r(!Te(e)||t),t}function Te(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function Fe(e){return se.some(t=>e.endsWith("."+t))}function k(e,t,n){return typeof e=="string"?M(e.split(""),t,n).join(""):M(e,t,n)}function M(e,t,n){const i=[];let s=t>=0?t:e.length+t;r(s>=0&&s<=e.length);let o=n>=0?n:e.length+n;for(r(o>=0&&o<=e.length);!(s===o||(s===e.length&&(s=0),s===o));){const l=e[s];r(l!==void 0),i.push(l),s++}return i}function ke(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function Le(e,t){r(ke(e),{url:e}),r(t.startsWith("/"),{url:e,baseServer:t});const[n,...i]=e.split("#");r(n!==void 0);const s=["",...i].join("#")||null;r(s===null||s.startsWith("#"));const o=s===null?"":x(s.slice(1)),[l,...a]=n.split("?");r(l!==void 0);const c=["",...a].join("?")||null;r(c===null||c.startsWith("?"),{url:e,searchOriginal:c});const u={},d={};Array.from(new URLSearchParams(c||"")).forEach(([y,H])=>{u[y]=H,d[y]=[...d[y]||[],H]});const{origin:f,pathnameResolved:p}=Ce(l,t);r(f===null||f===x(f),{origin:f}),r(p.startsWith("/"),{url:e,pathnameResolved:p}),r(f===null||e.startsWith(f),{url:e,origin:f});const h=l.slice((f||"").length);{const y=`${f||""}${h}${c||""}${s||""}`;r(e===y,{url:e,urlRecreated:y})}let{pathname:v,hasBaseServer:$}=xe(p,t);return v=Oe(v),r(v.startsWith("/")),{origin:f,pathname:v,pathnameOriginal:h,hasBaseServer:$,search:u,searchAll:d,searchOriginal:c,hash:o,hashOriginal:s}}function x(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Oe(e){return e.split("/").map(t=>x(t).split("/").join("%2F")).join("/")}function Ce(e,t){var n;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let i,s;try{const o=new URL(e);i=o.origin,s=o.pathname}catch{i=null;let l=typeof window<"u"&&((n=window==null?void 0:window.document)===null||n===void 0?void 0:n.baseURI);l=l||"http://fake.example.org"+t,s=new URL(e,l).pathname}return r(s.startsWith("/"),{urlWithoutSearch:e,pathnameResolved:s}),r(s===s.split("?")[0].split("#")[0]),{origin:i,pathnameResolved:s}}function We(e){r(e.startsWith("/")),r(!e.includes("?")),r(!e.includes("#"))}function xe(e,t){We(e),r(Ae(t));let n=e;if(r(n.startsWith("/")),r(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let i=t;return t.endsWith("/")&&n===k(t,0,-1)&&(i=k(t,0,-1),r(n===i)),n.startsWith(i)?(r(n.startsWith("/")||n.startsWith("http")),r(n.startsWith(i)),n=n.slice(i.length),n.startsWith("/")||(n="/"+n),r(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function Ae(e){return e.startsWith("/")}function G(e,t){Object.assign(e,t)}function O(e){return e instanceof Function||typeof e=="function"}function b(e){return typeof e=="object"&&e!==null}function At(e){return(t,n)=>{const i=e(t),s=e(n);return i===s?0:i>s?-1:1}}function Ne(e){return(t,n)=>{const i=e(t),s=e(n);if(r([!0,!1,null].includes(i)),r([!0,!1,null].includes(s)),i===s)return 0;if(i===!0||s===!1)return-1;if(s===!0||i===!1)return 1;r(!1)}}function Ve(e){return Ne(t=>{const n=e(t);return n===null?null:!n})}function g(e,t,n="unknown"){if(!b(e))return!1;if(!(t in e))return n==="undefined";if(n==="unknown")return!0;const i=e[t];return n==="array"?Array.isArray(i):n==="object"?b(i):n==="string[]"?Array.isArray(i)&&i.every(s=>typeof s=="string"):n==="function"?O(i):Array.isArray(n)?typeof i=="string"&&n.includes(i):n==="null"?i===null:n==="undefined"?i===void 0:n==="true"?i===!0:n==="false"?i===!1:typeof i===n}function De(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const ze=e=>e!=null,Be="\\";function oe(e){r(e&&!e.includes(Be),`Wrongly formatted path: ${e}`)}const Y=/[^a-zA-Z-_]/;function le(e){return Ue(e)!==null}function Ue(e){if(e===void 0||e.includes("\\")||e.startsWith("/"))return null;let t=null;if(e.startsWith("@")){if(!e.includes("/"))return null;const[a,...c]=e.split("/");t=a,e=c.join("/"),r(t&&t.startsWith("@"))}if(e==="")return null;const[n,...i]=e.split("/"),s=n,o=i.length===0?null:i.join("/");return r(s),r(o===null||!o.startsWith("/")),Y.test(s)||t&&Y.test(t.slice(1))?null:(r(!s.startsWith("/")),{npmPackageName:t?`${t}/${s}`:s,importPath:o})}function Ge(e,t){He(e,t,!0)}function He(e,t,n){const i=Object.keys(e),s=i.filter(l=>l!=="default"),o=i.includes("default");if(s.length===0){if(o)return;r(i.length===0),m(!1,`${t} doesn't export any value, but it should have a \`export default\` instead`)}else{const l=s.join(", ");n?m(s.length===0,`${t} should only have a default export: remove \`export { ${l} }\``):m(s.length===0,`${t} replace \`export { ${l} }\` with \`export default { ${l} }\``)}}function Me(e){return Object.entries(e)}const Ye=["clientRouting"];function Je(e){Ye.forEach(t=>{if(r(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;m(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),m(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const ae=["render","clientRouting","prerender","doNotPrerender"];function qe(e,t){m(!ae.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function Ke(e,t){const n={},i={},s={};if(e.forEach(a=>{Ze(a).forEach(({exportName:u,exportValue:d,isFromDefaultExport:f})=>{var p;r(u!=="default"),s[u]=(p=s[u])!==null&&p!==void 0?p:[],s[u].push({exportValue:d,exportSource:`${a.filePath} > ${f?`\`export default { ${u} }\``:`\`export { ${u} }\``}`,filePath:a.filePath,_filePath:a.filePath,_fileType:a.fileType,_isFromDefaultExport:f})})}),t){const{configValues:a}=t;Me(a).forEach(([c,u])=>{var d,f,p;const h=t.configElements[c];r(h);const{configDefinedByFile:v,configDefinedAt:$}=h;r(v),i[c]=(d=i[c])!==null&&d!==void 0?d:u,n[c]=(f=n[c])!==null&&f!==void 0?f:[],n[c].push({configValue:u,configDefinedAt:$,configDefinedByFile:v});const y=c;s[y]=(p=s[y])!==null&&p!==void 0?p:[],s[y].push({exportValue:u,exportSource:$,filePath:v,_filePath:v,_fileType:null,_isFromDefaultExport:null})})}const o=Qe(),l={};return Object.entries(s).forEach(([a,c])=>{c.forEach(({exportValue:u,_fileType:d,_isFromDefaultExport:f})=>{var p;l[a]=(p=l[a])!==null&&p!==void 0?p:u,d===".page"&&!f&&(a in o||(o[a]=u))})}),r(!("default"in l)),r(!("default"in s)),{config:i,configEntries:n,exports:l,exportsAll:s,pageExports:o}}function Ze(e){const{filePath:t,fileExports:n}=e;r(n),r(re(t));const i=[];return Object.entries(n).sort(Ve(([s])=>s==="default")).forEach(([s,o])=>{let l=s==="default";if(l)if(Fe(t))s="Page";else{m(b(o),`The \`export default\` of ${t} should be an object.`),Object.entries(o).forEach(([a,c])=>{qe(a,t),i.push({exportName:a,exportValue:c,isFromDefaultExport:l})});return}i.push({exportName:s,exportValue:o,isFromDefaultExport:l})}),i.forEach(({exportName:s,isFromDefaultExport:o})=>{r(!(o&&ae.includes(s)))}),i}function Qe(){return new Proxy({},{get(...e){return U()||w(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function Xe(e){const t=".page.",n=k(e.split(t),0,-1).join(t);return r(!n.includes("\\")),n}function S(e){oe(e),r(e.startsWith("/")||le(e),{filePath:e})}function Nt(e,t){if(t.length>0){const i=t.filter(s=>s.isErrorPage);return i.length===0?null:(m(i.length===1,"Only one error page can be defined"),i[0].pageId)}const n=L(e.map(({pageId:i})=>i).filter(i=>C(i)));if(m(n.length<=1,`Only one _error.page.js is allowed, but found several: ${n.join(" ")}`),n.length>0){const i=n[0];return r(i),i}return null}function C(e,t){return r(!e.includes("\\")),e.includes("/_error")}function et(e,t){if(t.length>0){const n=t.find(i=>i.pageId===e);return r(n),n.isErrorPage}else return C(e)}const tt=[".page",".page.server",".page.route",".page.client",".css"];function nt(e){if(oe(e),e.endsWith(".css"))return r(le(e),e),".css";r(re(e),e);const n=e.split("/").slice(-1)[0].split("."),i=n.slice(-3)[0],s=n.slice(-2)[0];if(s==="page")return".page";if(r(i==="page",e),s==="server")return".page.server";if(s==="client")return".page.client";if(s==="route")return".page.route";r(!1,e)}function ce(e){const t=o=>s.pageId===o||s.isDefaultPageFile&&(J(s.filePath)||it(o,s.filePath)),n=nt(e),s={filePath:e,fileType:n,isEnv:o=>{if(r(n!==".page.route"),o==="CLIENT_ONLY")return n===".page.client"||n===".css";if(o==="SERVER_ONLY")return n===".page.server";if(o==="CLIENT_AND_SERVER")return n===".page";r(!1)},isRelevant:t,isDefaultPageFile:A(e),isRendererPageFile:n!==".css"&&A(e)&&J(e),isErrorPageFile:C(e),pageId:Xe(e)};return s}function A(e){return S(e),C(e)?!1:e.includes("/_default")}function J(e){return S(e),e.includes("/renderer/")}function it(e,t){S(e),S(t),r(!e.endsWith("/")),r(!t.endsWith("/")),r(A(t));const n=k(t.split("/"),0,-1).filter(i=>i!=="_default").join("/");return e.startsWith(n)}function st(e){r(Array.isArray(e)||e===null),r(e!==null),e.forEach(t=>{r(b(t)),r(g(t,"pageId","string")),r(g(t,"pageConfigFilePathAll","string[]")),r(g(t,"routeFilesystem","string")||g(t,"routeFilesystem","null")),r(g(t,"routeFilesystemDefinedBy","string")),r(g(t,"loadConfigValueFiles","function")),r(g(t,"isErrorPage","boolean")),r(g(t,"configElements","object")),ue(t.configElements,!1)})}function rt(e){ue(e,!0)}function ue(e,t){r(b(e)),Object.entries(e).forEach(([n,i])=>{if(r(b(i)||i===null),i===null){r(t);return}if(r(g(i,"configDefinedAt","string")),r(g(i,"pageConfigFilePath","string")||g(i,"pageConfigFilePath","null")),r(g(i,"configEnv","string")),r(g(i,"configValueFilePath","string")||g(i,"configValueFilePath","null")),r(g(i,"configValueFileExport","string")||g(i,"configValueFileExport","null")),t&&r(g(i,"configValue")),i.configValueFilePath){const{configValueFilePath:s}=i;if(n==="route"){r(g(i,"configValue"));const{configValue:o}=i,l=typeof o;m(l==="string"||O(o),`${s} has a default export with an invalid type '${l}': the default export should be a string or a function`)}}})}function ot(e){r(g(e,"isGeneratedFile")),r(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),r(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),r(g(e,"pageFilesLazy","object")),r(g(e,"pageFilesEager","object")),r(g(e,"pageFilesExportNamesLazy","object")),r(g(e,"pageFilesExportNamesEager","object")),r(g(e.pageFilesLazy,".page")),r(g(e.pageFilesLazy,".page.client")||g(e.pageFilesLazy,".page.server")),r(g(e,"pageFilesList","string[]")),r(g(e,"invalidator","object")||g(e,"invalidator","null")),e.invalidator&&Object.keys(e.invalidator).forEach(o=>{const l=o.split("/").slice(-1)[0];r(l.startsWith("+"))}),r(g(e,"pageConfigs")),r(g(e,"pageConfigGlobal"));const{pageConfigs:t,pageConfigGlobal:n}=e;st(t),rt(n);const i={};T(e.pageFilesLazy).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;q(u),l.loadFile=async()=>{"fileExports"in l||(l.fileExports=await u(),Je(l))}}),T(e.pageFilesExportNamesLazy).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;q(u),l.loadExportNames=async()=>{if(!("exportNames"in l)){const d=await u();m("exportNames"in d,"You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3"),r(g(d,"exportNames","string[]"),l.filePath),l.exportNames=d.exportNames}}}),T(e.pageFilesEager).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;r(b(u)),l.fileExports=u}),T(e.pageFilesExportNamesEager).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;r(b(u)),r(g(u,"exportNames","string[]"),l.filePath),l.exportNames=u.exportNames}),e.pageFilesList.forEach(o=>{var l;i[o]=(l=i[o])!==null&&l!==void 0?l:ce(o)});const s=Object.values(i);return s.forEach(({filePath:o})=>{r(!o.includes("\\"))}),{pageFiles:s,pageConfigs:t,pageConfigGlobal:n}}function T(e){const t=[];return Object.entries(e).forEach(([n,i])=>{r(tt.includes(n)),r(b(i)),Object.entries(i).forEach(([s,o])=>{const l=ce(s);r(l.fileType===n),t.push({filePath:s,pageFile:l,globValue:o})})}),t}function q(e){r(O(e))}const _=I("setPageFiles.ts",{});function Vt(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:i}=ot(e);_.pageFilesAll=t,_.pageConfigs=n,_.pageConfigGlobal=i}async function Dt(e,t){e?(r(!_.pageFilesGetter),r(t===void 0)):(r(_.pageFilesGetter),r(typeof t=="boolean"),(!_.pageFilesAll||!t)&&await _.pageFilesGetter());const{pageFilesAll:n,pageConfigs:i,pageConfigGlobal:s}=_;r(n&&i&&s);const o=lt(n,i);return{pageFilesAll:n,allPageIds:o,pageConfigs:i,pageConfigGlobal:s}}function lt(e,t){const n=e.filter(({isDefaultPageFile:o})=>!o).map(({pageId:o})=>o),i=L(n),s=t.map(o=>o.pageId);return[...i,...s]}function at(e,t){return fe(e,t,!0)}function zt(e,t){return fe(e,t,!1)}function fe(e,t,n){const i=n?"CLIENT_ONLY":"SERVER_ONLY",s=e.filter(h=>h.isRelevant(t)&&h.fileType!==".page.route").sort(ct(n,t)),o=h=>{const v=s.filter(y=>y.pageId===t&&y.isEnv(h?"CLIENT_AND_SERVER":i));m(v.length<=1,`Merge the following files into a single file: ${v.map(y=>y.filePath).join(" ")}`);const $=v[0];return r($===void 0||!$.isDefaultPageFile),$},l=o(!1),a=o(!0),c=h=>s.filter(v=>v.isRendererPageFile&&v.isEnv(h?"CLIENT_AND_SERVER":i))[0],u=c(!1),d=c(!0),f=s.filter(h=>h.isDefaultPageFile&&!h.isRendererPageFile&&(h.isEnv(i)||h.isEnv("CLIENT_AND_SERVER")));return[l,a,...f,u,d].filter(ze)}function ct(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",i=-1,s=1,o=0;return(l,a)=>{if(!l.isDefaultPageFile&&a.isDefaultPageFile)return i;if(!a.isDefaultPageFile&&l.isDefaultPageFile)return s;{const c=l.isRendererPageFile,u=a.isRendererPageFile;if(!c&&u)return i;if(!u&&c)return s;r(c===u)}{const c=K(t,l.filePath),u=K(t,a.filePath);if(c<u)return i;if(u<c)return s;r(c===u)}{if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return i;if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return s}return o}}function K(e,t){S(e),S(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const i=e.slice(n),s=t.slice(n),o=i.split("/").length,l=s.split("/").length;return o+l}const ut="modulepreload",ft=function(e){return"/"+e},Z={},Bt=function(t,n,i){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=ft(o),o in Z)return;Z[o]=!0;const l=o.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!i)for(let d=s.length-1;d>=0;d--){const f=s[d];if(f.href===o&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":ut,l||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),l)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function Q(e){const t=e/1e3;if(t<120){const n=X(t);return`${n} second${ee(n)}`}{const n=t/60,i=X(n);return`${i} minute${ee(i)}`}}function X(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function ee(e){return e==="1"?"":"s"}function dt(e,t,n){const{timeoutErr:i,timeoutWarn:s}=gt(t);let o,l;const a=new Promise((f,p)=>{o=h=>{c(),f(h)},l=h=>{c(),p(h)}}),c=()=>{clearTimeout(u),clearTimeout(d)},u=setTimeout(()=>{const f=`${j}[Warning] The ${t}() hook defined by ${n} is taking more than ${Q(s)}`;console.warn(f)},s),d=setTimeout(()=>{const f=Pe(`Hook timeout: the ${t}() hook defined by ${n} didn't finish after ${Q(i)}`);l(f)},i);return(async()=>{try{const f=await e();o(f)}catch(f){l(f)}})(),a}function gt(e){let t=4e4,n=4*1e3;return e==="onBeforeRoute"&&(t=5*1e3,n=1*1e3),e==="onBeforePrerender"&&(t=10*60*1e3,n=30*1e3),{timeoutErr:t,timeoutWarn:n}}function Ut(e){const t=window.location.href,{origin:n,searchOriginal:i,hashOriginal:s,pathnameOriginal:o}=Le(t,"/");let l;if(e!=null&&e.withoutHash){l=`${o}${i||""}`;const a=`${n||""}${l}${s||""}`;r(t===a,{url:t,urlRecreated:a})}else{l=`${o}${i||""}${s||""}`;const a=`${n||""}${l}`;r(t===a,{url:t,urlRecreated:a})}return l}r(U());const ht=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],i=t[2];return new RegExp(n,i)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function de(e){const t=JSON.parse(e);return ge(t)}function ge(e){return typeof e=="string"?pt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=ge(n)}),e)}function pt(e){for(const{match:t,deserialize:n}of ht)if(t(e))return n(e,de);return e}function Gt(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;r(t);const n=de(t);r(g(n,"pageContext","object"));const{pageContext:i}=n;return r(g(i,"_pageId","string")),G(i,{_pageContextRetrievedFromServer:{...i},_comesDirectlyFromServer:!0}),i}function N(e,t){if(!(t in e.exports))return null;const n=e.exports[t],i=e.exportsAll[t][0];r(i.exportValue===n);const s=i.exportSource;return r(s),r(!t.endsWith(")")),m(O(n),`hook ${t}() defined by ${s} should be a function`),{hook:n,hookSrc:s}}function Ht(e,t){N(e,t)}function mt(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[i])=>De(n,i)).forEach(([n,i])=>{e[n]=i})}function vt(e){yt(e),Et(e)}function yt(e){et(e._pageId,e._pageConfigs)&&r(g(e,"is404","boolean"))}function Et(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!b(t)){w(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const W=I("releasePageContext.ts",{});function bt(e,t){if(t){const s=e;r([!0,!1].includes(s.isHydration)),r([!0,!1,null].includes(s.isBackwardNavigation))}else{const s=e;r(s.isHydration===!0),r(s.isBackwardNavigation===null)}r("config"in e),r("configEntries"in e),r("exports"in e),r("exportsAll"in e),r("pageExports"in e),r(b(e.pageExports));const n=e.exports.Page;G(e,{Page:n}),Pt(e),mt(e),r([!0,!1].includes(e._comesDirectlyFromServer));const i=e._comesDirectlyFromServer?_t(e):e;return vt(e),i}const Rt=["then","toJSON"],$t=["_pageId"];function _t(e){return new Proxy(e,{get:n});function t(i){return!(i in e||Rt.includes(i)||typeof i=="symbol"||typeof i!="string"||i.startsWith("__v_"))}function n(i,s){return W.disableAssertPassToClient!==s&&wt(e._pageContextRetrievedFromServer,s,t(s)),W.disableAssertPassToClient=s,window.setTimeout(()=>{W.disableAssertPassToClient=void 0},0),e[s]}}function wt(e,t,n){if(!n||e===null)return;const i=Object.keys(e).filter(s=>!$t.includes(s));m(!1,[`pageContext.${t} isn't available in the browser.`,`Make sure to add '${t}' to passToClient`,`(passToClient is [${i.map(s=>`'${s}'`).join(", ")}]),`,"see https://vite-plugin-ssr.com/passToClient"].join(" "))}function Pt(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}function St(e,t){var n;const i=e.filter(o=>o.pageId===t);return r(i.length<=1),(n=i[0])!==null&&n!==void 0?n:null}async function jt(e,t){const n={};return!t&&"configValues"in e||((await e.loadConfigValueFiles()).forEach(s=>{const{configName:o,importFile:l}=s;let a;if(s.isPlusFile){const{importFileExports:c}=s;o!=="client"&&Ge(c,l),a=c.default}else a=s.importValue;r(!(o in n)),n[o]=a}),Object.entries(e.configElements).map(([s,o])=>{o.configValueFilePath||(r(!(s in n)),n[s]=o.configValue)}),G(e,{configValues:n})),e}const he="__whileFetchingAssets";async function Mt(e,t,n){const i=at(e,n),s=St(t,n);let o;try{o=(await Promise.all([s&&jt(s,!1),...i.map(h=>{var v;return(v=h.loadFile)===null||v===void 0?void 0:v.call(h)})]))[0]}catch(p){throw It(p)&&Object.assign(p,{[he]:!0}),p}const{config:l,configEntries:a,exports:c,exportsAll:u,pageExports:d}=Ke(i,o);return{config:l,configEntries:a,exports:c,exportsAll:u,pageExports:d,_pageFilesLoaded:i}}function Yt(e){return e?e[he]===!0:!1}function It(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}function Jt(e,t,n){const i=e.configElements[t];if(!i||pe(e,t))return null;const{configValue:s,configDefinedAt:o}=i;return m(typeof s===n,`${o} has an invalid type \`${typeof s}\`: is should be a ${n} instead`),s}function qt(e,t){const n=e.configElements[t];if(!n||pe(e,t))return null;if(n.configValueFilePath!==null)return n.configValueFilePath;const{configValue:i,configDefinedAt:s}=n;m(typeof i=="string",`${s} has an invalid type \`${typeof i}\`: it should be a \`string\` instead`),m(!1,`${s} has an invalid value \`${i}\`: it should be a file path instead`)}function pe(e,t){const n=e.configElements[t];if(!n)return!0;const{configValueFilePath:i,configValue:s}=n;return i?!1:s==null}function Tt(e,t){const n=t.find(i=>i.pageId===e);return r(t.length>0),r(n),n}async function Kt(e,t){const n=bt(e,t);let i=null,s;i=N(e,"render"),s="render";{const a=N(e,"onRenderClient");a&&(i=a,s="onClientRender")}if(!i){const a=Ft(e);if(e._pageConfigs.length>0)kt(e._pageId,e._pageConfigs,a);else{const c=e._pageFilesLoaded.filter(d=>d.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+a:u="One of the following files should export a `render()` hook: "+c.map(d=>d.filePath).join(" "),m(!1,u)}}r(i);const o=i.hook;r(s);const l=await dt(()=>o(n),"render",i.hookSrc);m(l===void 0,`The ${s}() hook defined by ${i.hookSrc} isn't allowed to return a value`)}function Ft(e){let t;try{t=e.urlOriginal}catch{}return t=t??window.location.href,t}function kt(e,t,n){var i,s;const o=Tt(e,t);r(!(!((i=o.configElements.onRenderClient)===null||i===void 0)&&i.configValue)),r(((s=o.configElements.clientRouting)===null||s===void 0?void 0:s.configValue)===!0);const l=[];let a=[];t.forEach(d=>{a.push(...d.pageConfigFilePathAll);const f=d.configElements.onRenderClient;f&&f.configValue&&l.push(f.configDefinedAt)}),a=L(a);const c="- ",u=`No onRenderClient() hook found for URL \`${n}\`. (A onRenderClient() hook is required when using Client Routing: the config \`clientRouting\` is \`true\` for the URL \`${n}\`.)`;if(l.length===0)m(!1,[`${u} No onRenderClient() hook is defined by any of your page config files. Your page config files (which none of them defines \`onClientRender()\`):`,...a.map(d=>c+d)].join(`
`));else{const d=l.length>=2;m(!1,[`${u} Note that onRenderClient() is defined at:`,...l.map(f=>`${c}${f}`),`but ${d?"none of them":"it doesn't"} apply to the URL \`${n}\`.`].join(`
`))}}export{de as A,Pe as B,Dt as C,Ae as D,at as E,Jt as F,St as G,ke as H,Ct as I,Se as J,Yt as K,Ht as L,Kt as M,Ot as N,xt as O,Lt as P,Bt as _,r as a,Wt as b,U as c,Ut as d,zt as e,b as f,I as g,m as h,O as i,w as j,At as k,k as l,C as m,g as n,Ne as o,Le as p,G as q,Gt as r,Vt as s,Mt as t,Nt as u,N as v,bt as w,dt as x,Tt as y,qt as z};
