(()=>{"use strict";const e=window.wp.blocks,t=window.React,a=(window.wp.i18n,window.wp.blockEditor),l=window.wp.components,n=JSON.parse('{"UU":"peakforms/pznumber"}');(0,e.registerBlockType)(n.UU,{edit:function(e){const{attributes:n,setAttributes:r}=e,{marginValues:o,paddingValues:i}=n;return(0,t.createElement)("div",{...(0,a.useBlockProps)()},(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:"Config"},(0,t.createElement)(l.PanelBody,{title:"Field Settings"},(0,t.createElement)(l.TextControl,{label:"Prompt displayed with field",value:n.prompt,onChange:e=>r({prompt:e})}),(0,t.createElement)(l.TextControl,{label:"Field ID",value:n.id,onChange:e=>r({id:e})}),(0,t.createElement)(l.CheckboxControl,{label:"Required",checked:n.required,onChange:e=>r({required:e})}),(0,t.createElement)(l.CheckboxControl,{label:"Show Asterisk",checked:n.showAsterisk,onChange:e=>r({showAsterisk:e})})),(0,t.createElement)(l.TextControl,{label:"Field variable name",help:"Unique to this page. No spaces.",value:n.name?n.name:n.id,onChange:e=>r({name:e,id:e})}),(0,t.createElement)(l.TextControl,{label:"Width",help:"May be a percentage or a number of pixels.",value:n.width,onChange:e=>r({width:e})})),(0,t.createElement)(l.PanelBody,{title:"Spacing",initialOpen:!1},(0,t.createElement)(l.__experimentalBoxControl,{label:"Margin",values:o,onChange:e=>r({marginValues:e})}),(0,t.createElement)(l.__experimentalBoxControl,{label:"Padding",values:i,onChange:e=>r({paddingValues:e})}))),(0,t.createElement)("div",{style:{margin:o?`${o.top} ${o.right} ${o.bottom} ${o.left}`:void 0,padding:i?`${i.top} ${i.right} ${i.bottom} ${i.left}`:void 0}},(0,t.createElement)("label",{htmlFor:n.id},n.prompt,n.showAsterisk&&(0,t.createElement)("span",{style:{color:"red"}}," *")),(0,t.createElement)(l.TextControl,{type:"number",id:n.id,name:n.name,label:n.prompt,style:{width:n.width}})))},save:function({attributes:e}){e.class="form-style-1";const l={type:"number",id:e.id,name:e.name,style:{width:e.width}},n={margin:e.marginValues?`${e.marginValues.top} ${e.marginValues.right} ${e.marginValues.bottom} ${e.marginValues.left}`:void 0,padding:e.paddingValues?`${e.paddingValues.top} ${e.paddingValues.right} ${e.paddingValues.bottom} ${e.paddingValues.left}`:void 0};return(0,t.createElement)("div",{...a.useBlockProps.save(),style:n},(0,t.createElement)("label",{htmlFor:e.id},e.prompt,e.showAsterisk&&(0,t.createElement)("span",{style:{color:"red"}}," *")),(0,t.createElement)("input",{...l,...e.required&&{required:!0}}))}})})();