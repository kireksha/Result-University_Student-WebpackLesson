(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var o=r.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"734577f353692c829343.jpg";var r=prompt("Как вас зовут?");console.log("Hello World!");var o=document.createElement("h1");o.textContent="I love JavaScript";var n=document.createElement("img");n.src=e,document.body.append(o),document.body.append(n);var c,a=document.createElement("h2");document.body.append(a),c=r,a.innerText="Dear ".concat(c,', say "hello" to the World!')})();