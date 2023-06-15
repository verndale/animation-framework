import{i as w,H as g}from"./_handlebarsPluginInit-c9187c8e.js";import"./_commonjsHelpers-725317a4.js";w();var x=g.template({1:function(n,l,t,i,a){var e,o=l??(n.nullContext||{}),s=n.lookupProperty||function(r,c){if(Object.prototype.hasOwnProperty.call(r,c))return r[c]};return((e=s(t,"with").call(o,l!=null?s(l,"container"):l,{name:"with",hash:{},fn:n.program(2,a,0),inverse:n.noop,data:a,loc:{start:{line:13,column:8},end:{line:15,column:17}}}))!=null?e:"")+((e=s(t,"with").call(o,l!=null?s(l,"animatedElement"):l,{name:"with",hash:{},fn:n.program(5,a,0),inverse:n.noop,data:a,loc:{start:{line:16,column:8},end:{line:20,column:19}}}))!=null?e:"")+((e=s(t,"if").call(o,l!=null?s(l,"container"):l,{name:"if",hash:{},fn:n.program(14,a,0),inverse:n.noop,data:a,loc:{start:{line:21,column:8},end:{line:23,column:15}}}))!=null?e:"")},2:function(n,l,t,i,a){var e,o=n.lookupProperty||function(s,r){if(Object.prototype.hasOwnProperty.call(s,r))return s[r]};return"        <div "+((e=o(t,"if").call(l??(n.nullContext||{}),l!=null?o(l,"className"):l,{name:"if",hash:{},fn:n.program(3,a,0),inverse:n.noop,data:a,loc:{start:{line:14,column:13},end:{line:14,column:58}}}))!=null?e:"")+`>
`},3:function(n,l,t,i,a){var e,o=n.lookupProperty||function(s,r){if(Object.prototype.hasOwnProperty.call(s,r))return s[r]};return'class="'+n.escapeExpression((e=(e=o(t,"className")||(l!=null?o(l,"className"):l))!=null?e:n.hooks.helperMissing,typeof e=="function"?e.call(l??(n.nullContext||{}),{name:"className",hash:{},data:a,loc:{start:{line:14,column:37},end:{line:14,column:50}}}):e))+'"'},5:function(n,l,t,i,a){var e,o,s=l??(n.nullContext||{}),r=n.hooks.helperMissing,c="function",f=n.escapeExpression,u=n.lookupProperty||function(p,y){if(Object.prototype.hasOwnProperty.call(p,y))return p[y]};return"          <animated-element "+((e=u(t,"if").call(s,l!=null?u(l,"className"):l,{name:"if",hash:{},fn:n.program(3,a,0),inverse:n.noop,data:a,loc:{start:{line:17,column:28},end:{line:17,column:73}}}))!=null?e:"")+' as="'+f((o=(o=u(t,"as")||(l!=null?u(l,"as"):l))!=null?o:r,typeof o===c?o.call(s,{name:"as",hash:{},data:a,loc:{start:{line:17,column:78},end:{line:17,column:84}}}):o))+'"  '+((e=u(t,"if").call(s,l!=null?u(l,"opacity"):l,{name:"if",hash:{},fn:n.program(6,a,0),inverse:n.noop,data:a,loc:{start:{line:17,column:87},end:{line:17,column:130}}}))!=null?e:"")+" "+((e=u(t,"if").call(s,l!=null?u(l,"translateX"):l,{name:"if",hash:{},fn:n.program(8,a,0),inverse:n.noop,data:a,loc:{start:{line:17,column:131},end:{line:17,column:184}}}))!=null?e:"")+" "+((e=u(t,"if").call(s,l!=null?u(l,"translateY"):l,{name:"if",hash:{},fn:n.program(10,a,0),inverse:n.noop,data:a,loc:{start:{line:17,column:185},end:{line:17,column:238}}}))!=null?e:"")+" "+((e=u(t,"if").call(s,l!=null?u(l,"scale"):l,{name:"if",hash:{},fn:n.program(12,a,0),inverse:n.noop,data:a,loc:{start:{line:17,column:239},end:{line:17,column:276}}}))!=null?e:"")+`>
              `+f((o=(o=u(t,"title")||(l!=null?u(l,"title"):l))!=null?o:r,typeof o===c?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:18,column:14},end:{line:18,column:23}}}):o))+`
          </animated-element>
`},6:function(n,l,t,i,a){var e,o=n.lookupProperty||function(s,r){if(Object.prototype.hasOwnProperty.call(s,r))return s[r]};return'opacity="'+n.escapeExpression((e=(e=o(t,"opacity")||(l!=null?o(l,"opacity"):l))!=null?e:n.hooks.helperMissing,typeof e=="function"?e.call(l??(n.nullContext||{}),{name:"opacity",hash:{},data:a,loc:{start:{line:17,column:111},end:{line:17,column:122}}}):e))+'"'},8:function(n,l,t,i,a){var e,o=n.lookupProperty||function(s,r){if(Object.prototype.hasOwnProperty.call(s,r))return s[r]};return'translate-x="'+n.escapeExpression((e=(e=o(t,"translateX")||(l!=null?o(l,"translateX"):l))!=null?e:n.hooks.helperMissing,typeof e=="function"?e.call(l??(n.nullContext||{}),{name:"translateX",hash:{},data:a,loc:{start:{line:17,column:162},end:{line:17,column:176}}}):e))+'"'},10:function(n,l,t,i,a){var e,o=n.lookupProperty||function(s,r){if(Object.prototype.hasOwnProperty.call(s,r))return s[r]};return'translate-y="'+n.escapeExpression((e=(e=o(t,"translateY")||(l!=null?o(l,"translateY"):l))!=null?e:n.hooks.helperMissing,typeof e=="function"?e.call(l??(n.nullContext||{}),{name:"translateY",hash:{},data:a,loc:{start:{line:17,column:216},end:{line:17,column:230}}}):e))+'"'},12:function(n,l,t,i,a){var e,o=n.lookupProperty||function(s,r){if(Object.prototype.hasOwnProperty.call(s,r))return s[r]};return'scale="'+n.escapeExpression((e=(e=o(t,"scale")||(l!=null?o(l,"scale"):l))!=null?e:n.hooks.helperMissing,typeof e=="function"?e.call(l??(n.nullContext||{}),{name:"scale",hash:{},data:a,loc:{start:{line:17,column:259},end:{line:17,column:268}}}):e))+'"'},14:function(n,l,t,i,a){return`        </div>
`},compiler:[8,">= 4.3.0"],main:function(n,l,t,i,a){var e,o=n.lookupProperty||function(s,r){if(Object.prototype.hasOwnProperty.call(s,r))return s[r]};return`<!DOCTYPE html>
<html lang="en">
<head>
`+((e=n.invokePartial(o(i,"head"),l,{name:"head",hash:{showScripts:l!=null?o(l,"showScripts"):l,title:"Inview Example"},data:a,indent:"  ",helpers:t,partials:i,decorators:n.decorators}))!=null?e:"")+`</head>
<body>
  <!-- Header -->
`+((e=n.invokePartial(o(i,"header"),l,{name:"header",data:a,indent:"  ",helpers:t,partials:i,decorators:n.decorators}))!=null?e:"")+`
  <!-- Main Content -->
  <main>
`+((e=o(t,"each").call(l??(n.nullContext||{}),l!=null?o(l,"items"):l,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:12,column:6},end:{line:24,column:15}}}))!=null?e:"")+`  </main>

  <!-- Footer -->
`+((e=n.invokePartial(o(i,"footer"),l,{name:"footer",hash:{showScripts:l!=null?o(l,"showScripts"):l},data:a,indent:"  ",helpers:t,partials:i,decorators:n.decorators}))!=null?e:"")+`</body>
</html>
`},usePartial:!0,useData:!0});function O(n,l){return x({...n,publicPath:"",docsView:l.viewMode==="docs"},l)}const b={title:"Examples/Scroll Animations/InView",render:O,argTypes:{items:{control:"object"}}},m={args:{items:[{container:{className:"inview-section gold"},animatedElement:{as:"h2",title:"Item 1",opacity:"0, 1",translateX:"-100, 0"}},{container:{className:"inview-section purple"},animatedElement:{as:"h2",title:"Item 2",opacity:"0, 1",translateX:"-100, 0"}},{container:{className:"inview-section gold"},animatedElement:{as:"h2",className:"fit-content",title:"Item 3",scale:"1.5"}}]}};var v,P,k;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: [{
      container: {
        className: 'inview-section gold'
      },
      animatedElement: {
        as: 'h2',
        title: 'Item 1',
        opacity: '0, 1',
        translateX: '-100, 0'
      }
    }, {
      container: {
        className: 'inview-section purple'
      },
      animatedElement: {
        as: 'h2',
        title: 'Item 2',
        opacity: '0, 1',
        translateX: '-100, 0'
      }
    }, {
      container: {
        className: 'inview-section gold'
      },
      animatedElement: {
        as: 'h2',
        className: 'fit-content',
        title: 'Item 3',
        scale: '1.5'
      }
    }]
  }
}`,...(k=(P=m.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const d=["InView"];export{m as InView,d as __namedExportsOrder,b as default};
//# sourceMappingURL=inview.stories-7840ae40.js.map
