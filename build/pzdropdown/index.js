(()=>{"use strict";var e,t={327:()=>{const e=window.wp.blocks,t=(window.wp.i18n,window.wp.blockEditor),r=window.wp.components,o=window.ReactJSXRuntime,n=JSON.parse('{"UU":"peakforms/pzdropdown"}');(0,e.registerBlockType)(n.UU,{icon:{src:(0,o.jsxs)("svg",{viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeWidth:"0.7",children:[(0,o.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,o.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[(0,o.jsx)("path",{fill:"currentColor",d:"M1.0000123,6.99975 v-4.7134 h5.8088699 c4.1431298,0 5.8462998,0.017 5.9393898,0.06 0.0718,0.033 0.15728,0.1182 0.189991,0.19 0.0823,0.1807 0.0823,3.6053 0,3.786 -0.105991,0.2326 -0.2305,0.2494 -1.84448,0.2494 h-1.5239708 v2.571 v2.5709 h-4.2849 -4.2849 v-4.7135 z"}),(0,o.jsx)("path",{fill:"#E1E8ED",d:"M8.7128323,8.71375 v-2.1425 h-3.4279201 -3.42792 v2.1425 2.1424 h3.42792 3.4279201 v-2.1424 z"}),(0,o.jsx)("path",{fill:"currentColor",d:"M2.71397,9.5708 v-0.4285 h2.5709399 2.57094 v0.4285 0.4284 h-2.57094 -2.5709399 v-0.4284 z M2.71397,7.8568 v-0.4285 h2.5709399 2.57094 v0.4285 0.4285 h-2.57094 -2.5709399 v-0.4285 z"}),(0,o.jsx)("path",{fill:"#E1E8ED",d:"M8.7128323,4.4289 v-1.2855 h-3.4279201 -3.42792 v1.2855 1.2854 h3.42792 3.4279201 v-1.2854 z"}),(0,o.jsx)("path",{fill:"currentColor",d:"M11.003913,5.5135 c0.192459,-0.1687 1.35108,-1.6577 1.35108,-1.7364 0,-0.1911 -0.1034,-0.2052 -1.49971,-0.2052 -1.3963208,0 -1.4997208,0.014 -1.4997208,0.2052 0,0.042 0.27994,0.4291 0.62208,0.8597 0.6085808,0.766 0.7934798,0.9704 0.8776398,0.9704 0.0229,0 0.0898,-0.042 0.148631,-0.094 z"})]})]}),foreground:"#0693e3"},edit:function(e){const{attributes:n,setAttributes:s}=e,i=(0,t.useBlockProps)(),l=document.querySelector("body"),a=getComputedStyle(l).getPropertyValue("--wp--preset--color--base"),u=getComputedStyle(l).getPropertyValue("--wp--preset--color--contrast"),c=getComputedStyle(l).getPropertyValue("--wp--preset--color--accent"),d=getComputedStyle(l).getPropertyValue("--wp--preset--color--accent-5");return""==n.formBackground&&s({formBackground:a}),""==n.formColor&&s({formColor:u}),""==n.buttonColor&&s({buttonColor:c}),""==n.buttonTextColor&&s({buttonTextColor:u}),""==n.buttonBackgroundHoverColor&&s({buttonBackgroundHoverColor:d}),(0,o.jsxs)("div",{...i,children:[(0,o.jsxs)(t.InspectorControls,{children:[(0,o.jsx)(r.CheckboxControl,{label:"Required",checked:n.required,onChange:e=>s({required:e})}),(0,o.jsx)(r.TextControl,{label:"Unique field id",value:n.dropdown_id,onChange:e=>s({dropdown_id:e})}),(0,o.jsx)(r.TextControl,{label:"Unique field name",help:"Unique to this page. No spaces. This is the name of the field in the form data when email is sent.",value:n.dropdown_name,onChange:e=>s({dropdown_name:e})})]}),(0,o.jsxs)("div",{className:n.formStyle,children:[(0,o.jsx)(r.TextControl,{label:"Question:",value:e.attributes.question,onChange:function(t){e.setAttributes({question:t})},style:{fontSize:"20px"}}),(0,o.jsx)(r.TextControl,{label:"Slug name:",value:e.attributes.slug,onChange:function(t){e.setAttributes({slug:t})},style:{fontSize:"20px"}}),(0,o.jsx)("p",{style:{fontSize:"13px",margin:"20px 0 8px 0"},children:"Options:"}),e.attributes.answers.map((function(t,n){return(0,o.jsxs)(r.Flex,{children:[(0,o.jsx)(r.FlexBlock,{children:(0,o.jsx)(r.TextControl,{value:t,onChange:t=>{const r=e.attributes.answers.concat([]);r[n]=t,e.setAttributes({answers:r})}})}),(0,o.jsx)(r.FlexItem,{children:(0,o.jsx)(r.Button,{variant:"link",className:"pz-delete",onClick:()=>function(t){const r=e.attributes.answers.filter((function(e,r){return r!=t}));e.setAttributes({answers:r})}(n),children:"Delete"})})]})})),(0,o.jsx)(r.Button,{variant:"primary",onClick:()=>{e.setAttributes({answers:e.attributes.answers.concat([""])})},children:"Add another option"})]})]})},save:function({attributes:e}){return(0,o.jsxs)("div",{...t.useBlockProps.save(),className:"form-style-1",children:[(0,o.jsx)("p",{className:"pz-question-text",children:e.question}),(0,o.jsxs)("select",{name:e.slug,required:e.required?"required":void 0,children:[(0,o.jsx)("option",{value:"",children:"Select an option"}),e.answers.map((function(e){return(0,o.jsx)("option",{value:e,children:e})}))]})]})}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,r,n,s)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],s=e[c][2];for(var l=!0,a=0;a<r.length;a++)(!1&s||i>=s)&&Object.keys(o.O).every((e=>o.O[e](r[a])))?r.splice(a--,1):(l=!1,s<i&&(i=s));if(l){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[r,n,s]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={243:0,707:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,i=r[0],l=r[1],a=r[2],u=0;if(i.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(a)var c=a(o)}for(t&&t(r);u<i.length;u++)s=i[u],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},r=self.webpackChunkpzforms=self.webpackChunkpzforms||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[707],(()=>o(327)));n=o.O(n)})();