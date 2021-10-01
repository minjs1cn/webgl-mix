const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};U();const b="webgl-mix",L="1.0.0",x="index.js",F="MIT",y="https://minjs1cn.github.io/webgl-mix/",B={dev:"vite --port 3008",build:"vite build"},D={vite:"^2.6.1"};var E={name:b,version:L,main:x,license:F,homepage:y,scripts:B,devDependencies:D},T=document.querySelector("#canvas");T.width=300;T.height=300;var e=T.getContext("webgl"),f=[];const w=document.getElementById("file");w.onchange=I;function I(o){const t=new FileReader;t.readAsDataURL(o.target.files[0]),t.onload=function(){var n=R(t.result,function(){f[1]=n,A(f)})}}var P=document.getElementById("download");function X(o){P.src=o.toDataURL("image/jpg")}function R(o,t){var n=new Image;return n.src=o,n.onload=t,n}function S(o,t){for(var n=o.length,s=function(){--n,n===0&&t(f)},r=0;r<n;++r){var a=R(o[r],s);f.push(a)}}function O(){S([`/${E.name}/guoqi.png`,`/${E.name}/touxiang.png`],A)}function A(o){var t=webglUtils.createProgramFromScripts(e,["vertex-shader-2d","fragment-shader-2d"]);e.useProgram(t);var n=e.getAttribLocation(t,"a_position"),s=e.getAttribLocation(t,"a_texCoord"),r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),C(e,0,0,o[0].width,o[0].height);var a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),e.STATIC_DRAW);for(var i=[],c=0;c<2;++c){var u=e.createTexture();e.bindTexture(e.TEXTURE_2D,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,o[c]),i.push(u)}var _=e.getUniformLocation(t,"u_resolution"),p=e.getUniformLocation(t,"u_image0"),h=e.getUniformLocation(t,"u_image1");webglUtils.resizeCanvasToDisplaySize(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(t),e.enableVertexAttribArray(n),e.bindBuffer(e.ARRAY_BUFFER,r);var d=2,l=e.FLOAT,v=!1,m=0,g=0;e.vertexAttribPointer(n,d,l,v,m,g),e.enableVertexAttribArray(s),e.bindBuffer(e.ARRAY_BUFFER,a);var d=2,l=e.FLOAT,v=!1,m=0,g=0;e.vertexAttribPointer(s,d,l,v,m,g),e.uniform2f(_,e.canvas.width,e.canvas.height),e.uniform1i(p,0),e.uniform1i(h,1),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i[0]),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,i[1]),e.drawArrays(e.TRIANGLES,0,6),X(e.canvas)}function C(o,t,n,s,r){var a=t,i=t+s,c=n,u=n+r;o.bufferData(o.ARRAY_BUFFER,new Float32Array([a,c,i,c,a,u,a,u,i,c,i,u]),o.STATIC_DRAW)}O();