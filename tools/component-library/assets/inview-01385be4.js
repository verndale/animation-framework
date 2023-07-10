import{j as e}from"./jsx-runtime-d608faa1.js";import{M as l}from"./index-aed618c6.js";import{I as d}from"./inview.stories-fc0db39b.js";import{u as i}from"./index-e3b0cc0b.js";import"./iframe-02af2e08.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-e6f17b2f.js";import"./index-356e4a49.js";import"./_handlebarsPluginInit-d0ac8eaf.js";function f(t={}){const{wrapper:a}=Object.assign({},i(),t.components);return a?e.jsx(a,Object.assign({},t,{children:e.jsx(s,{})})):s();function s(){const n=Object.assign({h1:"h1",code:"code",h2:"h2",p:"p",h3:"h3",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"MDX/animated-element",of:d}),`
`,e.jsx("style",{children:`
    strong{
      font-weight: bold;
      color: #ff0000;
    }
  `}),`
`,e.jsx(n.h1,{id:"animated-element",children:e.jsx(n.code,{children:"<animated-element>"})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<animated-element>"})," is a web component that, by default, animates itself when it enters the viewport."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"styling",children:"Styling"}),`
`,e.jsxs(n.p,{children:["The web component is used as any html tag and can be styled via classes. By default the only style it has is ",e.jsx(n.code,{children:"display: block"})," to make translate transforms easier."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<animated-element class="square"></animated-element>
`})}),`
`,e.jsx("animated-element",{class:"square","translate-x":"-50px, 0",scale:"1.5",duration:"2"}),`
`,e.jsxs(n.h3,{id:"as-attribute---using-it-as-other-html-tags",children:[e.jsx(n.code,{children:"as"})," attribute - using it as other html tags"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"animated-element"})," behaves as a div HTML element by default. It can be used as any other html tag by using the ",e.jsx(n.code,{children:"as"})," attribute. ",e.jsxs("strong",{children:["Please note that ",e.jsx(n.code,{children:"animated-element"})," cannot be used as a self closing tag."]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<animated-element as="section"></animated-element>
<animated-element as="button"></animated-element>
<animated-element as="h1"></animated-element>
<animated-element as="a"></animated-element>
`})}),`
`,e.jsx(n.p,{children:"It can also be used as a container for other elements."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<animated-element opacity="0,1" duration="3">
  <h3>This is an h3 inside an animated-element tag</h3>
</animated-element>
`})}),`
`,e.jsx("animated-element",{opacity:"0,1",duration:"3",children:e.jsx("h3",{children:"This is an h1 inside an animated-element"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<animated-element translate-x="100px" duration="3">
  <div class="square"></div>
</animated-element>
`})}),`
`,e.jsx("animated-element",{"translate-x":"100px",duration:"3",children:e.jsx("div",{class:"square"})})]})}}export{f as default};
//# sourceMappingURL=inview-01385be4.js.map
