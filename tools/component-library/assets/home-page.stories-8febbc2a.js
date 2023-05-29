import{i as f,H as p}from"./_handlebarsPluginInit-a93f350a.js";import{Default as P}from"./accordion.stories-74ce2a9f.js";import"./_commonjsHelpers-87174ba5.js";import"./button.stories-c805711a.js";f();var h=p.template({1:function(r,o,l,a,t){var e,n=r.lookupProperty||function(s,c){if(Object.prototype.hasOwnProperty.call(s,c))return s[c]};return(e=r.invokePartial(n(a,"accordion"),o,{name:"accordion",data:t,helpers:l,partials:a,decorators:r.decorators}))!=null?e:""},compiler:[8,">= 4.3.0"],main:function(r,o,l,a,t){var e,n=r.lookupProperty||function(s,c){if(Object.prototype.hasOwnProperty.call(s,c))return s[c]};return`<!DOCTYPE html>
<html lang="en">
<head>
`+((e=r.invokePartial(n(a,"head"),o,{name:"head",hash:{showScripts:o!=null?n(o,"showScripts"):o,title:"Home page"},data:t,indent:"  ",helpers:l,partials:a,decorators:r.decorators}))!=null?e:"")+`</head>
<body>
  <!-- Header -->
`+((e=r.invokePartial(n(a,"header"),o,{name:"header",data:t,indent:"  ",helpers:l,partials:a,decorators:r.decorators}))!=null?e:"")+`
  <!-- Main Content -->
  <main>
    `+((e=n(l,"with").call(o??(r.nullContext||{}),o!=null?n(o,"accordion"):o,{name:"with",hash:{},fn:r.program(1,t,0),inverse:r.noop,data:t,loc:{start:{line:12,column:4},end:{line:12,column:47}}}))!=null?e:"")+`
  </main>

  <!-- Footer -->
`+((e=r.invokePartial(n(a,"footer"),o,{name:"footer",hash:{showScripts:o!=null?n(o,"showScripts"):o},data:t,indent:"  ",helpers:l,partials:a,decorators:r.decorators}))!=null?e:"")+`</body>
</html>
`},usePartial:!0,useData:!0});function g(r,o){return h({...r,publicPath:"",docsView:o.viewMode==="docs"},o)}const b={title:"Templates/Home Page",tags:["autodocs"],render:g,argTypes:{accordion:{control:"object"}}},u={args:{accordion:P.args}};var i,d,m;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    accordion: (Accordion.args as AccordionProps)
  }
}`,...(m=(d=u.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const D=["Default"];export{u as Default,D as __namedExportsOrder,b as default};
//# sourceMappingURL=home-page.stories-8febbc2a.js.map
