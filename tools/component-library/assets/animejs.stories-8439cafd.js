import{i as g,H as v}from"./_handlebarsPluginInit-c9187c8e.js";import"./_commonjsHelpers-725317a4.js";g();var y=v.template({1:function(e,n,s,i,r){var l,a=e.lookupProperty||function(t,o){if(Object.prototype.hasOwnProperty.call(t,o))return t[o]};return`      <div class="demo-container">
        <div class="demo-content">
`+((l=a(s,"if").call(n??(e.nullContext||{}),n!=null?a(n,"stagger"):n,{name:"if",hash:{},fn:e.program(2,r,0),inverse:e.program(5,r,0),data:r,loc:{start:{line:15,column:10},end:{line:23,column:17}}}))!=null?l:"")+`        </div>
      </div>
`},2:function(e,n,s,i,r){var l,a,t=n??(e.nullContext||{}),o=e.lookupProperty||function(c,m){if(Object.prototype.hasOwnProperty.call(c,m))return c[m]};return'          <animated-element as="div" anim="'+e.escapeExpression((a=(a=o(s,"animation")||(n!=null?o(n,"animation"):n))!=null?a:e.hooks.helperMissing,typeof a=="function"?a.call(t,{name:"animation",hash:{},data:r,loc:{start:{line:16,column:43},end:{line:16,column:56}}}):a))+'" '+((l=o(s,"if").call(t,n!=null?o(n,"stagger"):n,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r,loc:{start:{line:16,column:58},end:{line:16,column:99}}}))!=null?l:"")+`>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
          </animated-element>
`},3:function(e,n,s,i,r){var l,a=e.lookupProperty||function(t,o){if(Object.prototype.hasOwnProperty.call(t,o))return t[o]};return"stagger="+e.escapeExpression((l=(l=a(s,"stagger")||(n!=null?a(n,"stagger"):n))!=null?l:e.hooks.helperMissing,typeof l=="function"?l.call(n??(e.nullContext||{}),{name:"stagger",hash:{},data:r,loc:{start:{line:16,column:81},end:{line:16,column:92}}}):l))},5:function(e,n,s,i,r){var l,a=e.lookupProperty||function(t,o){if(Object.prototype.hasOwnProperty.call(t,o))return t[o]};return'          <animated-element  as="div" anim="'+e.escapeExpression((l=(l=a(s,"animation")||(n!=null?a(n,"animation"):n))!=null?l:e.hooks.helperMissing,typeof l=="function"?l.call(n??(e.nullContext||{}),{name:"animation",hash:{},data:r,loc:{start:{line:22,column:44},end:{line:22,column:57}}}):l))+`" class="square"/>
`},compiler:[8,">= 4.3.0"],main:function(e,n,s,i,r){var l,a=e.lookupProperty||function(t,o){if(Object.prototype.hasOwnProperty.call(t,o))return t[o]};return`<!DOCTYPE html>
<html lang="en">
<head>
`+((l=e.invokePartial(a(i,"head"),n,{name:"head",hash:{showScripts:n!=null?a(n,"showScripts"):n,title:"AnimeJS Example"},data:r,indent:"  ",helpers:s,partials:i,decorators:e.decorators}))!=null?l:"")+`</head>
<body>
  <!-- Header -->
`+((l=e.invokePartial(a(i,"header"),n,{name:"header",data:r,indent:"  ",helpers:s,partials:i,decorators:e.decorators}))!=null?l:"")+`
  <!-- Main Content -->
  <main>
`+((l=a(s,"each").call(n??(e.nullContext||{}),n!=null?a(n,"items"):n,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:12,column:6},end:{line:26,column:15}}}))!=null?l:"")+`  </main>

  <!-- Footer -->
`+((l=e.invokePartial(a(i,"footer"),n,{name:"footer",hash:{showScripts:n!=null?a(n,"showScripts"):n},data:r,indent:"  ",helpers:s,partials:i,decorators:e.decorators}))!=null?l:"")+`</body>
</html>
`},usePartial:!0,useData:!0});function x(e,n){return y({...e,publicPath:"",docsView:n.viewMode==="docs"},n)}const k={title:"Examples/Scroll Animations/AnimeJS",render:x,argTypes:{items:{control:"object"}},decorators:[e=>`<div style="border: 4px dashed #000; text-align: center; min-height: 75vh; display: grid; place-content:center;">scroll</div>
      ${e()}
      <div style="border: 4px dashed #000; text-align: center; min-height: 50vh; display: grid; place-content:center;">scroll</div>`]},u={args:{items:[{animation:'{"translateX":"250px"}'},{animation:'{"translateX":"250px", "rotate":"180deg", "scale":"2"}'},{animation:'{"translateX":"250px"}',stagger:.25},{animation:'{"translateX":"250px", "scale":"2", "borderRadius":"50%"}'}]}};var d,p,f;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      animation: '{"translateX":"250px"}'
    }, {
      animation: '{"translateX":"250px", "rotate":"180deg", "scale":"2"}'
    }, {
      animation: '{"translateX":"250px"}',
      stagger: 0.25
    }, {
      animation: '{"translateX":"250px", "scale":"2", "borderRadius":"50%"}'
    }]
  }
}`,...(f=(p=u.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const b=["AnimeJS"];export{u as AnimeJS,b as __namedExportsOrder,k as default};
//# sourceMappingURL=animejs.stories-8439cafd.js.map
