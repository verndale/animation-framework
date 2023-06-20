import{i as aa,H as sa}from"./_handlebarsPluginInit-d0ac8eaf.js";import"./_commonjsHelpers-725317a4.js";aa();var na=sa.template({1:function(n,a,t,y,o){var e,s=n.lookupProperty||function(l,i){if(Object.prototype.hasOwnProperty.call(l,i))return l[i]};return`    <div class="icon-wrapper">
`+((e=n.invokePartial(s(y,"svg"),a,{name:"svg",hash:{name:(e=a!=null?s(a,"icon"):a)!=null?s(e,"name"):e},data:o,indent:"      ",helpers:t,partials:y,decorators:n.decorators}))!=null?e:"")+`    </div>
`},compiler:[8,">= 4.3.0"],main:function(n,a,t,y,o){var e,s,l=a??(n.nullContext||{}),i=n.hooks.helperMissing,S="function",P=n.escapeExpression,r=n.lookupProperty||function(z,v){if(Object.prototype.hasOwnProperty.call(z,v))return z[v]};return`
<button type="button" class="btn `+P((s=(s=r(t,"animationClass")||(a!=null?r(a,"animationClass"):a))!=null?s:i,typeof s===S?s.call(l,{name:"animationClass",hash:{},data:o,loc:{start:{line:2,column:33},end:{line:2,column:51}}}):s))+" "+P((s=(s=r(t,"customClass")||(a!=null?r(a,"customClass"):a))!=null?s:i,typeof s===S?s.call(l,{name:"customClass",hash:{},data:o,loc:{start:{line:2,column:52},end:{line:2,column:67}}}):s))+`">
  `+P((s=(s=r(t,"label")||(a!=null?r(a,"label"):a))!=null?s:i,typeof s===S?s.call(l,{name:"label",hash:{},data:o,loc:{start:{line:3,column:2},end:{line:3,column:11}}}):s))+`
`+((e=r(t,"if").call(l,a!=null?r(a,"icon"):a,{name:"if",hash:{},fn:n.program(1,o,0),inverse:n.noop,data:o,loc:{start:{line:4,column:2},end:{line:8,column:9}}}))!=null?e:"")+`</button>
`},usePartial:!0,useData:!0});function ea(n,a){return na({...n,publicPath:"",docsView:a.viewMode==="docs"},a)}const la={title:"Examples/Active State Animations/Animated Button",tags:["autodocs"],render:ea,argTypes:{label:{control:"text"}}},c={args:{label:"Primary",customClass:"btn--primary"}},m={args:{label:"Grow",animationClass:"grow-anim",customClass:""}},u={args:{label:"Wobble",animationClass:"wobble-anim",customClass:""}},p={args:{label:"Buzz",animationClass:"buzz-anim",customClass:""}},d={args:{label:"Sweep",animationClass:"sweep-anim",customClass:""}},b={args:{label:"Radial",animationClass:"radial-anim",customClass:""}},C={args:{label:"Outline",animationClass:"outline-anim",customClass:""}},g={args:{label:"Underline",animationClass:"underline-anim",customClass:""}},w={args:{label:"Icon Forward",animationClass:"icon-forward-anim",customClass:"",icon:{name:"plus"}}},f={args:{label:"Icon Up",animationClass:"icon-up-anim",customClass:"",icon:{name:"file-pdf"}}};var O,k,I;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    customClass: 'btn--primary'
  }
}`,...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var U,x,B;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Grow',
    animationClass: 'grow-anim',
    customClass: ''
  }
}`,...(B=(x=m.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var F,G,R;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Wobble',
    animationClass: 'wobble-anim',
    customClass: ''
  }
}`,...(R=(G=u.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var W,A,E;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Buzz',
    animationClass: 'buzz-anim',
    customClass: ''
  }
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var j,H,M;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Sweep',
    animationClass: 'sweep-anim',
    customClass: ''
  }
}`,...(M=(H=d.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var T,_,D;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Radial',
    animationClass: 'radial-anim',
    customClass: ''
  }
}`,...(D=(_=b.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var V,q,J;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Outline',
    animationClass: 'outline-anim',
    customClass: ''
  }
}`,...(J=(q=C.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,L,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Underline',
    animationClass: 'underline-anim',
    customClass: ''
  }
}`,...(Q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var X,Y,Z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Icon Forward',
    animationClass: 'icon-forward-anim',
    customClass: '',
    icon: {
      name: 'plus'
    }
  }
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,h,N;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Icon Up',
    animationClass: 'icon-up-anim',
    customClass: '',
    icon: {
      name: 'file-pdf'
    }
  }
}`,...(N=(h=f.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};const ta=["Primary","Grow","Wobble","Buzz","Sweep","Radial","Outline","Underline","IconForward","IconUp"];export{p as Buzz,m as Grow,w as IconForward,f as IconUp,C as Outline,c as Primary,b as Radial,d as Sweep,g as Underline,u as Wobble,ta as __namedExportsOrder,la as default};
//# sourceMappingURL=animated-button.stories-724ae3d9.js.map
