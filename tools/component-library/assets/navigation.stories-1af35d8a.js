import{i as k,H as P}from"./_handlebarsPluginInit-d0ac8eaf.js";import"./_commonjsHelpers-725317a4.js";k();var T=P.template({1:function(l,n,u,r,e){var a,t=l.lookupProperty||function(o,i){if(Object.prototype.hasOwnProperty.call(o,i))return o[i]};return(a=t(u,"with").call(n??(l.nullContext||{}),n!=null?t(n,"animatedElement"):n,{name:"with",hash:{},fn:l.program(2,e,0),inverse:l.noop,data:e,loc:{start:{line:3,column:4},end:{line:10,column:13}}}))!=null?a:""},2:function(l,n,u,r,e){var a,t,o=n??(l.nullContext||{}),i=l.hooks.helperMissing,m="function",f=l.escapeExpression,s=l.lookupProperty||function(p,y){if(Object.prototype.hasOwnProperty.call(p,y))return p[y]};return`    <li class="navigation__item">
        <div class="navigation__menu-trigger">`+f((t=(t=s(u,"title")||(n!=null?s(n,"title"):n))!=null?t:i,typeof t===m?t.call(o,{name:"title",hash:{},data:e,loc:{start:{line:5,column:46},end:{line:5,column:55}}}):t))+`</div>
        <toggle-element hide `+((a=s(u,"if").call(o,n!=null?s(n,"className"):n,{name:"if",hash:{},fn:l.program(3,e,0),inverse:l.noop,data:e,loc:{start:{line:6,column:29},end:{line:6,column:74}}}))!=null?a:"")+' as="'+f((t=(t=s(u,"as")||(n!=null?s(n,"as"):n))!=null?t:i,typeof t===m?t.call(o,{name:"as",hash:{},data:e,loc:{start:{line:6,column:79},end:{line:6,column:85}}}):t))+'" '+((a=s(u,"if").call(o,n!=null?s(n,"inOpacity"):n,{name:"if",hash:{},fn:l.program(5,e,0),inverse:l.noop,data:e,loc:{start:{line:6,column:87},end:{line:6,column:137}}}))!=null?a:"")+" "+((a=s(u,"if").call(o,n!=null?s(n,"outOpacity"):n,{name:"if",hash:{},fn:l.program(7,e,0),inverse:l.noop,data:e,loc:{start:{line:6,column:138},end:{line:6,column:191}}}))!=null?a:"")+" "+((a=s(u,"if").call(o,n!=null?s(n,"inTranslateY"):n,{name:"if",hash:{},fn:l.program(9,e,0),inverse:l.noop,data:e,loc:{start:{line:6,column:192},end:{line:6,column:252}}}))!=null?a:"")+" "+((a=s(u,"if").call(o,n!=null?s(n,"outTranslateY"):n,{name:"if",hash:{},fn:l.program(11,e,0),inverse:l.noop,data:e,loc:{start:{line:6,column:253},end:{line:6,column:316}}}))!=null?a:"")+`>
            `+f((t=(t=s(u,"content")||(n!=null?s(n,"content"):n))!=null?t:i,typeof t===m?t.call(o,{name:"content",hash:{},data:e,loc:{start:{line:7,column:12},end:{line:7,column:23}}}):t))+`
        </toggle-element>
    </li>
`},3:function(l,n,u,r,e){var a,t=l.lookupProperty||function(o,i){if(Object.prototype.hasOwnProperty.call(o,i))return o[i]};return'class="'+l.escapeExpression((a=(a=t(u,"className")||(n!=null?t(n,"className"):n))!=null?a:l.hooks.helperMissing,typeof a=="function"?a.call(n??(l.nullContext||{}),{name:"className",hash:{},data:e,loc:{start:{line:6,column:53},end:{line:6,column:66}}}):a))+'"'},5:function(l,n,u,r,e){var a,t=l.lookupProperty||function(o,i){if(Object.prototype.hasOwnProperty.call(o,i))return o[i]};return'in-opacity="'+l.escapeExpression((a=(a=t(u,"inOpacity")||(n!=null?t(n,"inOpacity"):n))!=null?a:l.hooks.helperMissing,typeof a=="function"?a.call(n??(l.nullContext||{}),{name:"inOpacity",hash:{},data:e,loc:{start:{line:6,column:116},end:{line:6,column:129}}}):a))+'"'},7:function(l,n,u,r,e){var a,t=l.lookupProperty||function(o,i){if(Object.prototype.hasOwnProperty.call(o,i))return o[i]};return'out-opacity="'+l.escapeExpression((a=(a=t(u,"outOpacity")||(n!=null?t(n,"outOpacity"):n))!=null?a:l.hooks.helperMissing,typeof a=="function"?a.call(n??(l.nullContext||{}),{name:"outOpacity",hash:{},data:e,loc:{start:{line:6,column:169},end:{line:6,column:183}}}):a))+'"'},9:function(l,n,u,r,e){var a,t=l.lookupProperty||function(o,i){if(Object.prototype.hasOwnProperty.call(o,i))return o[i]};return'in-translate-y="'+l.escapeExpression((a=(a=t(u,"inTranslateY")||(n!=null?t(n,"inTranslateY"):n))!=null?a:l.hooks.helperMissing,typeof a=="function"?a.call(n??(l.nullContext||{}),{name:"inTranslateY",hash:{},data:e,loc:{start:{line:6,column:228},end:{line:6,column:244}}}):a))+'"'},11:function(l,n,u,r,e){var a,t=l.lookupProperty||function(o,i){if(Object.prototype.hasOwnProperty.call(o,i))return o[i]};return'out-translate-y="'+l.escapeExpression((a=(a=t(u,"outTranslateY")||(n!=null?t(n,"outTranslateY"):n))!=null?a:l.hooks.helperMissing,typeof a=="function"?a.call(n??(l.nullContext||{}),{name:"outTranslateY",hash:{},data:e,loc:{start:{line:6,column:291},end:{line:6,column:308}}}):a))+'"'},compiler:[8,">= 4.3.0"],main:function(l,n,u,r,e){var a,t=l.lookupProperty||function(o,i){if(Object.prototype.hasOwnProperty.call(o,i))return o[i]};return`<ul class="navigation__items" data-module="navigation">
`+((a=t(u,"each").call(n??(l.nullContext||{}),n!=null?t(n,"items"):n,{name:"each",hash:{},fn:l.program(1,e,0),inverse:l.noop,data:e,loc:{start:{line:2,column:4},end:{line:11,column:13}}}))!=null?a:"")+"</ul>"},useData:!0});function Y(l,n){return T({...l,publicPath:"",docsView:n.viewMode==="docs"},n)}const E={title:"Examples/Navigation",render:Y,argTypes:{items:{control:"object"}}},c={args:{items:[{animatedElement:{as:"div",inOpacity:"0,1",outOpacity:"1,0",inTranslateY:"-30,0",outTranslateY:"0,-30",title:"Nav 1",content:"Menu 1",className:"navigation__menu"}},{animatedElement:{as:"div",inOpacity:"0,1",outOpacity:"1,0",inTranslateY:"-30,0",outTranslateY:"0,-30",title:"Nav 2",content:"Menu 2",className:"navigation__menu"}},{animatedElement:{as:"div",inOpacity:"0,1",outOpacity:"1,0",inTranslateY:"-30,0",outTranslateY:"0,-30",title:"Nav 3",content:"Menu 3",className:"navigation__menu"}}]}};var v,O,g;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: [{
      animatedElement: {
        as: 'div',
        inOpacity: '0,1',
        outOpacity: '1,0',
        inTranslateY: '-30,0',
        outTranslateY: '0,-30',
        title: 'Nav 1',
        content: 'Menu 1',
        className: 'navigation__menu'
      }
    }, {
      animatedElement: {
        as: 'div',
        inOpacity: '0,1',
        outOpacity: '1,0',
        inTranslateY: '-30,0',
        outTranslateY: '0,-30',
        title: 'Nav 2',
        content: 'Menu 2',
        className: 'navigation__menu'
      }
    }, {
      animatedElement: {
        as: 'div',
        inOpacity: '0,1',
        outOpacity: '1,0',
        inTranslateY: '-30,0',
        outTranslateY: '0,-30',
        title: 'Nav 3',
        content: 'Menu 3',
        className: 'navigation__menu'
      }
    }]
  }
}`,...(g=(O=c.parameters)==null?void 0:O.docs)==null?void 0:g.source}}};const M=["Navigation"];export{c as Navigation,M as __namedExportsOrder,E as default};
//# sourceMappingURL=navigation.stories-1af35d8a.js.map
