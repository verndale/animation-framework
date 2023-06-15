import{i as w,H as g}from"./_handlebarsPluginInit-c9187c8e.js";import"./_commonjsHelpers-725317a4.js";w();var x=g.template({1:function(l,e,o,i,r,n,s){var t,a=e??(l.nullContext||{}),u=l.lookupProperty||function(c,m){if(Object.prototype.hasOwnProperty.call(c,m))return c[m]};return`        <div class="overflow-hidden fit-content">
          <animated-element scrub `+((t=u(o,"if").call(a,e!=null?u(e,"opacity"):e,{name:"if",hash:{},fn:l.program(2,r,0,n,s),inverse:l.noop,data:r,loc:{start:{line:14,column:34},end:{line:14,column:77}}}))!=null?t:"")+" "+((t=u(o,"if").call(a,e!=null?u(e,"translateX"):e,{name:"if",hash:{},fn:l.program(4,r,0,n,s),inverse:l.noop,data:r,loc:{start:{line:14,column:78},end:{line:14,column:131}}}))!=null?t:"")+" "+((t=u(o,"if").call(a,e!=null?u(e,"translateY"):e,{name:"if",hash:{},fn:l.program(6,r,0,n,s),inverse:l.noop,data:r,loc:{start:{line:14,column:132},end:{line:14,column:185}}}))!=null?t:"")+" "+((t=u(o,"if").call(a,e!=null?u(e,"scale"):e,{name:"if",hash:{},fn:l.program(8,r,0,n,s),inverse:l.noop,data:r,loc:{start:{line:14,column:186},end:{line:14,column:223}}}))!=null?t:"")+' inview-offset="'+l.escapeExpression(l.lambda(s[1]!=null?u(s[1],"offset"):s[1],e))+`">
`+((t=l.invokePartial(u(i,"picture"),e,{name:"picture",data:r,indent:"              ",helpers:o,partials:i,decorators:l.decorators}))!=null?t:"")+`          </animated-element>
        </div>
`},2:function(l,e,o,i,r){var n,s=l.lookupProperty||function(t,a){if(Object.prototype.hasOwnProperty.call(t,a))return t[a]};return'opacity="'+l.escapeExpression((n=(n=s(o,"opacity")||(e!=null?s(e,"opacity"):e))!=null?n:l.hooks.helperMissing,typeof n=="function"?n.call(e??(l.nullContext||{}),{name:"opacity",hash:{},data:r,loc:{start:{line:14,column:58},end:{line:14,column:69}}}):n))+'"'},4:function(l,e,o,i,r){var n,s=l.lookupProperty||function(t,a){if(Object.prototype.hasOwnProperty.call(t,a))return t[a]};return'translate-x="'+l.escapeExpression((n=(n=s(o,"translateX")||(e!=null?s(e,"translateX"):e))!=null?n:l.hooks.helperMissing,typeof n=="function"?n.call(e??(l.nullContext||{}),{name:"translateX",hash:{},data:r,loc:{start:{line:14,column:109},end:{line:14,column:123}}}):n))+'"'},6:function(l,e,o,i,r){var n,s=l.lookupProperty||function(t,a){if(Object.prototype.hasOwnProperty.call(t,a))return t[a]};return'translate-y="'+l.escapeExpression((n=(n=s(o,"translateY")||(e!=null?s(e,"translateY"):e))!=null?n:l.hooks.helperMissing,typeof n=="function"?n.call(e??(l.nullContext||{}),{name:"translateY",hash:{},data:r,loc:{start:{line:14,column:163},end:{line:14,column:177}}}):n))+'"'},8:function(l,e,o,i,r){var n,s=l.lookupProperty||function(t,a){if(Object.prototype.hasOwnProperty.call(t,a))return t[a]};return'scale="'+l.escapeExpression((n=(n=s(o,"scale")||(e!=null?s(e,"scale"):e))!=null?n:l.hooks.helperMissing,typeof n=="function"?n.call(e??(l.nullContext||{}),{name:"scale",hash:{},data:r,loc:{start:{line:14,column:206},end:{line:14,column:215}}}):n))+'"'},compiler:[8,">= 4.3.0"],main:function(l,e,o,i,r,n,s){var t,a=l.lookupProperty||function(u,c){if(Object.prototype.hasOwnProperty.call(u,c))return u[c]};return`<!DOCTYPE html>
<html lang="en">
<head>
`+((t=l.invokePartial(a(i,"head"),e,{name:"head",hash:{showScripts:e!=null?a(e,"showScripts"):e,title:"Parallax Demo"},data:r,indent:"  ",helpers:o,partials:i,decorators:l.decorators}))!=null?t:"")+`</head>
<body>
  <!-- Header -->
`+((t=l.invokePartial(a(i,"header"),e,{name:"header",data:r,indent:"  ",helpers:o,partials:i,decorators:l.decorators}))!=null?t:"")+`
  <!-- Main Content -->
  <main class="parallax-demo__container">
`+((t=a(o,"each").call(e??(l.nullContext||{}),e!=null?a(e,"pictures"):e,{name:"each",hash:{},fn:l.program(1,r,0,n,s),inverse:l.noop,data:r,loc:{start:{line:12,column:6},end:{line:18,column:15}}}))!=null?t:"")+`  </main>

  <!-- Footer -->
`+((t=l.invokePartial(a(i,"footer"),e,{name:"footer",hash:{showScripts:e!=null?a(e,"showScripts"):e},data:r,indent:"  ",helpers:o,partials:i,decorators:l.decorators}))!=null?t:"")+`</body>
</html>
`},usePartial:!0,useData:!0,useDepths:!0});function y(l,e){return x({...l,publicPath:"",docsView:e.viewMode==="docs"},e)}const P={title:"Examples/Scroll Animations/Parallax",render:y,argTypes:{pictures:{control:"object"}},decorators:[l=>`<div style="border: 4px dashed #000; text-align: center; min-height: 50vh; display: grid; place-content:center;">scroll</div>
      ${l()}
      <div style="border: 4px dashed #000; text-align: center; min-height: 50vh; display: grid; place-content:center;">scroll</div>`]},p={args:{inviewOffset:"['start end', 'end end']",pictures:[{className:"parallax__image--translate",translateX:"-20%, 20%",srcset:{639:"https://verndale-image-tools.azurewebsites.net/id/ACt8ycSzpdE?w=540&h=720"},src:"https://verndale-image-tools.azurewebsites.net/id/ACt8ycSzpdE?w=540&h=720",width:"540px",height:"720px",description:"Image Description"},{scale:"1.5",srcset:{639:"https://verndale-image-tools.azurewebsites.net/id/N2zk9yXjmLA?w=540&h=720"},src:"https://verndale-image-tools.azurewebsites.net/id/N2zk9yXjmLA?w=540&h=720",width:"540px",height:"720px",description:"Image Description"},{className:"parallax__image--translate",translateY:"-100px, 100px",srcset:{639:"https://verndale-image-tools.azurewebsites.net/id/dqXiw7nCb9Q?w=540&h=720"},src:"https://verndale-image-tools.azurewebsites.net/id/dqXiw7nCb9Q?w=540&h=720",width:"540px",height:"720px",description:"Image Description"}]}};var d,f,h;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    inviewOffset: "['start end', 'end end']",
    pictures: [{
      className: 'parallax__image--translate',
      translateX: '-20%, 20%',
      srcset: {
        639: 'https://verndale-image-tools.azurewebsites.net/id/ACt8ycSzpdE?w=540&h=720'
      },
      src: 'https://verndale-image-tools.azurewebsites.net/id/ACt8ycSzpdE?w=540&h=720',
      width: '540px',
      height: '720px',
      description: 'Image Description'
    }, {
      scale: '1.5',
      srcset: {
        639: 'https://verndale-image-tools.azurewebsites.net/id/N2zk9yXjmLA?w=540&h=720'
      },
      src: 'https://verndale-image-tools.azurewebsites.net/id/N2zk9yXjmLA?w=540&h=720',
      width: '540px',
      height: '720px',
      description: 'Image Description'
    }, {
      className: 'parallax__image--translate',
      translateY: '-100px, 100px',
      srcset: {
        639: 'https://verndale-image-tools.azurewebsites.net/id/dqXiw7nCb9Q?w=540&h=720'
      },
      src: 'https://verndale-image-tools.azurewebsites.net/id/dqXiw7nCb9Q?w=540&h=720',
      width: '540px',
      height: '720px',
      description: 'Image Description'
    }]
  }
}`,...(h=(f=p.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const k=["Parallax"];export{p as Parallax,k as __namedExportsOrder,P as default};
//# sourceMappingURL=parallax.stories-fb39656b.js.map
