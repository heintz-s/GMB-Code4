/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var d=function(){return d=Object.assign||function(a){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a},d.apply(this,arguments)};function u(o,a){a===void 0&&(a={});var e=d({class:"codejar-linenumbers",wrapClass:"codejar-wrap",width:"35px",backgroundColor:"rgba(128, 128, 128, 0.15)",color:""},a),n;return function(r){o(r),n||(n=c(r,e),r.addEventListener("scroll",function(){return n.style.top="-"+r.scrollTop+"px"}));for(var t=r.textContent||"",l=t.replace(/\n$/g,"").split(`
`).length,i="",s=0;s<l;s++)i+=s+1+`
`;n.innerText=i}}function c(o,a){var e=getComputedStyle(o),n=document.createElement("div");n.className=a.wrapClass,n.style.position="relative";var r=document.createElement("div");r.className="codejar-linenumbers-inner-wrap",r.style.background=e.background,r.style.marginTop=e.borderTopWidth,r.style.marginBottom=e.borderBottomWidth,r.style.marginLeft=e.borderLeftWidth,r.style.borderTopLeftRadius=e.borderTopLeftRadius,r.style.borderBottomLeftRadius=e.borderBottomLeftRadius;var t=document.createElement("div");t.className=a.class,r.appendChild(t),n.appendChild(r),t.style.width=a.width,t.style.overflow="hidden",t.style.backgroundColor=a.backgroundColor,t.style.fontFamily=e.fontFamily,t.style.fontSize=e.fontSize,t.style.lineHeight=e.lineHeight,t.style.paddingTop="calc("+e.paddingTop+")",t.style.paddingLeft=e.paddingLeft,t.style.borderTopLeftRadius=e.borderTopLeftRadius,t.style.borderBottomLeftRadius=e.borderBottomLeftRadius;var l=document.createElement("div");return l.setAttribute("class","codejar-linenumber"),l.style.color=a.color||e.color,l.style.setProperty("mix-blend-mode","unset"),t.appendChild(l),o.style.paddingLeft="calc("+a.width+" + "+t.style.paddingLeft+" + 5px)",o.style.whiteSpace="pre",o.parentNode.insertBefore(n,o),n.appendChild(o),l}export{u as withLineNumbers};
