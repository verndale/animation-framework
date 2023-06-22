import{i as y,H as v}from"./_handlebarsPluginInit-d0ac8eaf.js";import"./_commonjsHelpers-725317a4.js";y();var P=v.template({1:function(n,l,r,i,o){var e,s=n.lookupProperty||function(a,u){if(Object.prototype.hasOwnProperty.call(a,u))return a[u]};return`      <div class="demo-container">
        <div class="demo-content">
`+((e=s(r,"if").call(l??(n.nullContext||{}),l!=null?s(l,"timelineItems"):l,{name:"if",hash:{},fn:n.program(2,o,0),inverse:n.program(16,o,0),data:o,loc:{start:{line:15,column:10},end:{line:25,column:17}}}))!=null?e:"")+`        </div>
      </div>
`},2:function(n,l,r,i,o){var e,s=l??(n.nullContext||{}),a=n.lookupProperty||function(u,t){if(Object.prototype.hasOwnProperty.call(u,t))return u[t]};return"          <animated-timeline "+((e=a(r,"if").call(s,l!=null?a(l,"className"):l,{name:"if",hash:{},fn:n.program(3,o,0),inverse:n.noop,data:o,loc:{start:{line:16,column:29},end:{line:16,column:74}}}))!=null?e:"")+" "+((e=a(r,"if").call(s,l!=null?a(l,"as"):l,{name:"if",hash:{},fn:n.program(5,o,0),inverse:n.noop,data:o,loc:{start:{line:16,column:75},end:{line:16,column:103}}}))!=null?e:"")+`>
`+((e=a(r,"each").call(s,l!=null?a(l,"timelineItems"):l,{name:"each",hash:{},fn:n.program(7,o,0),inverse:n.noop,data:o,loc:{start:{line:17,column:12},end:{line:20,column:21}}}))!=null?e:"")+`          </animated-timeline>
`},3:function(n,l,r,i,o){var e,s=n.lookupProperty||function(a,u){if(Object.prototype.hasOwnProperty.call(a,u))return a[u]};return'class="'+n.escapeExpression((e=(e=s(r,"className")||(l!=null?s(l,"className"):l))!=null?e:n.hooks.helperMissing,typeof e=="function"?e.call(l??(n.nullContext||{}),{name:"className",hash:{},data:o,loc:{start:{line:16,column:53},end:{line:16,column:66}}}):e))+'"'},5:function(n,l,r,i,o){var e,s=n.lookupProperty||function(a,u){if(Object.prototype.hasOwnProperty.call(a,u))return a[u]};return'as="'+n.escapeExpression((e=(e=s(r,"as")||(l!=null?s(l,"as"):l))!=null?e:n.hooks.helperMissing,typeof e=="function"?e.call(l??(n.nullContext||{}),{name:"as",hash:{},data:o,loc:{start:{line:16,column:89},end:{line:16,column:95}}}):e))+'"'},7:function(n,l,r,i,o){var e,s=l??(n.nullContext||{}),a=n.lookupProperty||function(u,t){if(Object.prototype.hasOwnProperty.call(u,t))return u[t]};return"            <animated-element "+((e=a(r,"if").call(s,l!=null?a(l,"className"):l,{name:"if",hash:{},fn:n.program(3,o,0),inverse:n.noop,data:o,loc:{start:{line:18,column:30},end:{line:18,column:75}}}))!=null?e:"")+" "+((e=a(r,"if").call(s,l!=null?a(l,"opacity"):l,{name:"if",hash:{},fn:n.program(8,o,0),inverse:n.noop,data:o,loc:{start:{line:18,column:76},end:{line:18,column:119}}}))!=null?e:"")+" "+((e=a(r,"if").call(s,l!=null?a(l,"translateX"):l,{name:"if",hash:{},fn:n.program(10,o,0),inverse:n.noop,data:o,loc:{start:{line:18,column:120},end:{line:18,column:173}}}))!=null?e:"")+" "+((e=a(r,"if").call(s,l!=null?a(l,"translateY"):l,{name:"if",hash:{},fn:n.program(12,o,0),inverse:n.noop,data:o,loc:{start:{line:18,column:174},end:{line:18,column:227}}}))!=null?e:"")+" "+((e=a(r,"if").call(s,l!=null?a(l,"scale"):l,{name:"if",hash:{},fn:n.program(14,o,0),inverse:n.noop,data:o,loc:{start:{line:18,column:228},end:{line:18,column:265}}}))!=null?e:"")+`>
            </animated-element>
`},8:function(n,l,r,i,o){var e,s=n.lookupProperty||function(a,u){if(Object.prototype.hasOwnProperty.call(a,u))return a[u]};return'opacity="'+n.escapeExpression((e=(e=s(r,"opacity")||(l!=null?s(l,"opacity"):l))!=null?e:n.hooks.helperMissing,typeof e=="function"?e.call(l??(n.nullContext||{}),{name:"opacity",hash:{},data:o,loc:{start:{line:18,column:100},end:{line:18,column:111}}}):e))+'"'},10:function(n,l,r,i,o){var e,s=n.lookupProperty||function(a,u){if(Object.prototype.hasOwnProperty.call(a,u))return a[u]};return'translate-x="'+n.escapeExpression((e=(e=s(r,"translateX")||(l!=null?s(l,"translateX"):l))!=null?e:n.hooks.helperMissing,typeof e=="function"?e.call(l??(n.nullContext||{}),{name:"translateX",hash:{},data:o,loc:{start:{line:18,column:151},end:{line:18,column:165}}}):e))+'"'},12:function(n,l,r,i,o){var e,s=n.lookupProperty||function(a,u){if(Object.prototype.hasOwnProperty.call(a,u))return a[u]};return'translate-y="'+n.escapeExpression((e=(e=s(r,"translateY")||(l!=null?s(l,"translateY"):l))!=null?e:n.hooks.helperMissing,typeof e=="function"?e.call(l??(n.nullContext||{}),{name:"translateY",hash:{},data:o,loc:{start:{line:18,column:205},end:{line:18,column:219}}}):e))+'"'},14:function(n,l,r,i,o){var e,s=n.lookupProperty||function(a,u){if(Object.prototype.hasOwnProperty.call(a,u))return a[u]};return'scale="'+n.escapeExpression((e=(e=s(r,"scale")||(l!=null?s(l,"scale"):l))!=null?e:n.hooks.helperMissing,typeof e=="function"?e.call(l??(n.nullContext||{}),{name:"scale",hash:{},data:o,loc:{start:{line:18,column:248},end:{line:18,column:257}}}):e))+'"'},16:function(n,l,r,i,o){var e,s=l??(n.nullContext||{}),a=n.lookupProperty||function(u,t){if(Object.prototype.hasOwnProperty.call(u,t))return u[t]};return"          <animated-element "+((e=a(r,"if").call(s,l!=null?a(l,"className"):l,{name:"if",hash:{},fn:n.program(3,o,0),inverse:n.noop,data:o,loc:{start:{line:23,column:28},end:{line:23,column:73}}}))!=null?e:"")+" "+((e=a(r,"if").call(s,l!=null?a(l,"opacity"):l,{name:"if",hash:{},fn:n.program(8,o,0),inverse:n.noop,data:o,loc:{start:{line:23,column:74},end:{line:23,column:117}}}))!=null?e:"")+" "+((e=a(r,"if").call(s,l!=null?a(l,"translateX"):l,{name:"if",hash:{},fn:n.program(10,o,0),inverse:n.noop,data:o,loc:{start:{line:23,column:118},end:{line:23,column:171}}}))!=null?e:"")+" "+((e=a(r,"if").call(s,l!=null?a(l,"translateY"):l,{name:"if",hash:{},fn:n.program(12,o,0),inverse:n.noop,data:o,loc:{start:{line:23,column:172},end:{line:23,column:225}}}))!=null?e:"")+" "+((e=a(r,"if").call(s,l!=null?a(l,"scale"):l,{name:"if",hash:{},fn:n.program(14,o,0),inverse:n.noop,data:o,loc:{start:{line:23,column:226},end:{line:23,column:263}}}))!=null?e:"")+`>
          </animated-element>
`},compiler:[8,">= 4.3.0"],main:function(n,l,r,i,o){var e,s=n.lookupProperty||function(a,u){if(Object.prototype.hasOwnProperty.call(a,u))return a[u]};return`<!DOCTYPE html>
<html lang="en">
<head>
`+((e=n.invokePartial(s(i,"head"),l,{name:"head",hash:{showScripts:l!=null?s(l,"showScripts"):l,title:"AnimeJS Example"},data:o,indent:"  ",helpers:r,partials:i,decorators:n.decorators}))!=null?e:"")+`</head>
<body>
  <!-- Header -->
`+((e=n.invokePartial(s(i,"header"),l,{name:"header",data:o,indent:"  ",helpers:r,partials:i,decorators:n.decorators}))!=null?e:"")+`
  <!-- Main Content -->
  <main>
`+((e=s(r,"each").call(l??(n.nullContext||{}),l!=null?s(l,"items"):l,{name:"each",hash:{},fn:n.program(1,o,0),inverse:n.noop,data:o,loc:{start:{line:12,column:6},end:{line:28,column:15}}}))!=null?e:"")+`  </main>

  <!-- Footer -->
`+((e=n.invokePartial(s(i,"footer"),l,{name:"footer",hash:{showScripts:l!=null?s(l,"showScripts"):l},data:o,indent:"  ",helpers:r,partials:i,decorators:n.decorators}))!=null?e:"")+`</body>
</html>
`},usePartial:!0,useData:!0});function k(n,l){return P({...n,publicPath:"",docsView:l.viewMode==="docs"},l)}const O={title:"Examples/Scroll Animations/AnimeJS",render:k,argTypes:{items:{control:"object"}},decorators:[n=>`<div style="border: 4px dashed #000; text-align: center; min-height: 75vh; display: grid; place-content:center;">scroll</div>
      ${n()}
      <div style="border: 4px dashed #000; text-align: center; min-height: 50vh; display: grid; place-content:center;">scroll</div>`]},c={args:{items:[{className:"square",translateX:"250px"},{className:"square",translateX:"250px"},{className:"square",scale:"2"},{timelineItems:[{className:"square",translateX:"50px"},{className:"square",scale:"2"},{className:"square",translateY:"50px"}]}]}};var m,f,p;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: [{
      className: 'square',
      translateX: '250px'
    }, {
      className: 'square',
      translateX: '250px'
    }, {
      className: 'square',
      scale: '2'
    }, {
      timelineItems: [{
        className: 'square',
        translateX: '50px'
      }, {
        className: 'square',
        scale: '2'
      }, {
        className: 'square',
        translateY: '50px'
      }]
    }]
  }
}`,...(p=(f=c.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const b=["AnimeJS"];export{c as AnimeJS,b as __namedExportsOrder,O as default};
//# sourceMappingURL=animejs.stories-74570736.js.map
