import{j as s}from"./jsx-runtime-e14d2896.js";import{M as d}from"./index-ba0fa86a.js";import{u as i}from"./index-f0088b9f.js";import"./iframe-296631b8.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-87174ba5.js";import"./index-d475d2ea.js";import"./index-53e146c1.js";import"./index-356e4a49.js";function u(c={}){const{wrapper:e}=Object.assign({},i(),c.components);return e?s.jsx(e,Object.assign({},c,{children:s.jsx(n,{})})):n();function n(){const l=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code"},i(),c.components);return s.jsxs(s.Fragment,{children:[s.jsx(d,{title:"Grid"}),`
`,s.jsx("style",{children:`
  .toolkit-example {
    padding: 1.5rem 3rem;
    border: 1px solid #D2D2D2;
    border-radius: 10px;
  }

  .toolkit-example [class^='col'] {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      background-color: #E1D5FD;
      border: 1px solid #6A2FF3;
    }

  .text-center {
    text-align: center;
  }

  .row {
    margin-inline: calc(var(--gutter-width) * -0.5);
  }

  h2 {
    margin-block: 2rem !important;
  }

  h3 {
    margin-block: 1.5rem !important;
  }

  table {
    width: 100%;
  }

  table th span {
    display: block;
    font-size: 13px !important;
    font-weight: 400;
  }

  table code {
    color: #6A2FF3;
  }
  `}),`
`,s.jsx(l.h1,{id:"grid",children:"Grid"}),`
`,s.jsxs(l.p,{children:["The toolkit's grid system is based on the ",s.jsx(l.a,{href:"https://getbootstrap.com/docs/5.3/layout/grid/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap grid system"}),` which
uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully
responsive.`]}),`
`,s.jsx(l.h2,{id:"grid-options",children:"Grid options"}),`
`,s.jsx(l.p,{children:"The Toolkit's grid system can adapt across the six default breakpoints. The six default grid tiers are as follows:"}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsx(l.li,{children:"Initial (xs)"}),`
`,s.jsx(l.li,{children:"Mobile (sm)"}),`
`,s.jsx(l.li,{children:"Tablet Portrait (md)"}),`
`,s.jsx(l.li,{children:"Tablet Landscape (lg)"}),`
`,s.jsx(l.li,{children:"Desktop (xl)"}),`
`,s.jsx(l.li,{children:"Wide (xxl)"}),`
`]}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{}),s.jsx("th",{children:s.jsxs(l.p,{children:[`xs
`,s.jsx("span",{children:"<360px"})]})}),s.jsx("th",{children:s.jsxs(l.p,{children:[`sm
`,s.jsx("span",{children:">360px"})]})}),s.jsx("th",{children:s.jsxs(l.p,{children:[`md
`,s.jsx("span",{children:">768px"})]})}),s.jsx("th",{children:s.jsxs(l.p,{children:[`lg
`,s.jsx("span",{children:">1024px"})]})}),s.jsx("th",{children:s.jsxs(l.p,{children:[`xl
`,s.jsx("span",{children:">1280px"})]})}),s.jsx("th",{children:s.jsxs(l.p,{children:[`xxl
`,s.jsx("span",{children:">1600px"})]})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("th",{children:"Class prefix"}),s.jsx("td",{children:s.jsx("code",{children:".col-"})}),s.jsx("td",{children:s.jsx("code",{children:".col-sm-"})}),s.jsx("td",{children:s.jsx("code",{children:".col-md-"})}),s.jsx("td",{children:s.jsx("code",{children:".col-lg-"})}),s.jsx("td",{children:s.jsx("code",{children:".col-xl-"})}),s.jsx("td",{children:s.jsx("code",{children:".col-xxl-"})})]}),s.jsxs("tr",{children:[s.jsx("th",{children:"# of columns"}),`
`,s.jsx("td",{colSpan:"6",children:"12"})]}),s.jsxs("tr",{children:[s.jsx("th",{children:"Gutter width"}),`
`,s.jsx("td",{colSpan:"3",children:"24px"}),`
`,s.jsx("td",{colSpan:"2",children:"36px"}),`
`,s.jsx("td",{children:"48px"})]}),s.jsxs("tr",{children:[s.jsx("th",{children:"Container max width"}),`
`,s.jsx("td",{colSpan:"5",children:"None (auto)"}),`
`,s.jsx("td",{children:"1840px"})]})]})]}),`
`,s.jsx(l.h2,{id:"auto-layout-columns",children:"Auto-layout columns"}),`
`,s.jsx(l.h3,{id:"equal-width",children:"Equal-width"}),`
`,s.jsxs(l.p,{children:["For example, here are two grid layouts that apply to every device and viewport, from ",s.jsx("code",{children:"xs"})," to ",s.jsx("code",{children:"xxl"}),`.
Add any number of unit-less classes for each breakpoint you need and every column will be the same width.`]}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col",children:"1 of 2"}),`
`,s.jsx("div",{className:"col",children:"2 of 2"})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col",children:"1 of 3"}),`
`,s.jsx("div",{className:"col",children:"2 of 3"}),`
`,s.jsx("div",{className:"col",children:"3 of 3"})]})]})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <div class="row">
    <div class="col">1 of 2</div>
    <div class="col">2 of 2</div>
  </div>
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col">2 of 3</div>
    <div class="col">3 of 3</div>
  </div>
</div>
`})}),`
`,s.jsx(l.h3,{id:"setting-one-column-width",children:"Setting one column width"}),`
`,s.jsx(l.p,{children:`Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically
resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other
columns will resize no matter the width of the center column.`}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col",children:"1 of 3"}),`
`,s.jsx("div",{className:"col-6",children:"2 of 3 (wider)"}),`
`,s.jsx("div",{className:"col",children:"3 of 3"})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col",children:"1 of 3"}),`
`,s.jsx("div",{className:"col-5",children:"2 of 3 (wider)"}),`
`,s.jsx("div",{className:"col",children:"3 of 3"})]})]})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col-6">2 of 3 (wider)</div>
    <div class="col">3 of 3</div>
  </div>
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col-5">2 of 3 (wider)</div>
    <div class="col">3 of 3</div>
  </div>
</div>
`})}),`
`,s.jsx(l.h3,{id:"variable-width-content",children:"Variable width content"}),`
`,s.jsxs(l.p,{children:["Use ",s.jsx("code",{children:"col-{breakpoint}-auto"})," classes to size columns based on the natural width of their content."]}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"row justify-content-md-center",children:[s.jsx("div",{className:"col col-lg-2",children:"1 of 3"}),`
`,s.jsx("div",{className:"col-md-auto",children:"Variable width content"}),`
`,s.jsx("div",{className:"col col-lg-2",children:"3 of 3"})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col",children:"1 of 3"}),`
`,s.jsx("div",{className:"col-md-auto",children:"Variable width content"}),`
`,s.jsx("div",{className:"col col-lg-2",children:"3 of 3"})]})]})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">1 of 3</div>
    <div class="col-md-auto">Variable width content</div>
    <div class="col col-lg-2">3 of 3</div>
  </div>
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col-md-auto">Variable width content</div>
    <div class="col col-lg-2">3 of 3</div>
  </div>
</div>
`})}),`
`,s.jsx(l.h2,{id:"responsice-classes",children:"Responsice classes"}),`
`,s.jsx(l.p,{children:`The Toolkit's grid includes six tiers of predefined classes for building complex responsive layouts. Customize the size
of your columns on extra small, small, medium, large, or extra large devices however you see fit.`}),`
`,s.jsx(l.h3,{id:"all-breakpoints",children:"All breakpoints"}),`
`,s.jsxs(l.p,{children:["For grids that are the same from the smallest of devices to the largest, use the ",s.jsx("code",{children:".col"})," and ",s.jsx("code",{children:".col-*"}),` classes.
Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `,s.jsx("code",{children:".col"}),"."]}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col",children:".col"}),`
`,s.jsx("div",{className:"col",children:".col"}),`
`,s.jsx("div",{className:"col",children:".col"}),`
`,s.jsx("div",{className:"col",children:".col"})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-8",children:".col-8"}),`
`,s.jsx("div",{className:"col-4",children:".col-4"})]})]})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <div class="row">
    <div class="col">.col</div>
    <div class="col">.col</div>
    <div class="col">.col</div>
    <div class="col">.col</div>
  </div>
  <div class="row">
    <div class="col-8">.col-8</div>
    <div class="col-4">.col-4</div>
  </div>
</div>
`})}),`
`,s.jsx(l.h3,{id:"stacked-to-horizontal",children:"Stacked to horizontal"}),`
`,s.jsxs(l.p,{children:["Using a single set of ",s.jsx("code",{children:".col-sm-*"}),` classes, you can create a basic grid system that starts out
stacked and becomes horizontal at the small breakpoint (sm).`]}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-sm-8",children:".col-sm-8"}),`
`,s.jsx("div",{className:"col-sm-4",children:".col-sm-4"})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-sm",children:".col-sm"}),`
`,s.jsx("div",{className:"col-sm",children:".col-sm"}),`
`,s.jsx("div",{className:"col-sm",children:".col-sm"})]})]})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <div class="row">
    <div class="col-sm-8">.col-sm-8</div>
    <div class="col-sm-4">.col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm">.col-sm</div>
    <div class="col-sm">.col-sm</div>
    <div class="col-sm">.col-sm</div>
  </div>
</div>
`})}),`
`,s.jsx(l.h3,{id:"mix-and-match",children:"Mix and match"}),`
`,s.jsx(l.p,{children:`Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed.
See the example below for a better idea of how it all works.`}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-8",children:".col-md-8"}),`
`,s.jsx("div",{className:"col-6 col-md-4",children:".col-6 .col-md-4"})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-6 col-md-4",children:".col-6 .col-md-4"}),`
`,s.jsx("div",{className:"col-6 col-md-4",children:".col-6 .col-md-4"}),`
`,s.jsx("div",{className:"col-6 col-md-4",children:".col-6 .col-md-4"})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-6",children:".col-6"}),`
`,s.jsx("div",{className:"col-6",children:".col-6"})]})]})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
`})}),`
`,s.jsx(l.h3,{id:"row-columns",children:"Row columns"}),`
`,s.jsxs(l.p,{children:["Use the responsive ",s.jsx("code",{children:".row-cols-_"}),` classes to quickly set the number of columns that best render your content and layout.
Whereas normal `,s.jsx("code",{children:".col-"})," classes apply to the individual columns (e.g., ",s.jsx("code",{children:".col-md-4"}),`), the row columns classes
are set on the parent `,s.jsx("code",{children:".row"})," as a shortcut. With ",s.jsx("code",{children:".row-cols-auto"})," you can give the columns their natural width."]}),`
`,s.jsx(l.p,{children:"Use these row columns classes to quickly create basic grid layouts or to control your card layouts."}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsx("div",{className:"text-center",children:s.jsxs("div",{className:"row row-cols-2",children:[s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"})]})})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <div class="row row-cols-2">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
`})}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsx("div",{className:"text-center",children:s.jsxs("div",{className:"row row-cols-3",children:[s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"})]})})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <div class="row row-cols-3">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
`})}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsx("div",{className:"text-center",children:s.jsxs("div",{className:"row row-cols-auto",children:[s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"})]})})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <div class="row row-cols-auto">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
`})}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsx("div",{className:"text-center",children:s.jsxs("div",{className:"row row-cols-4",children:[s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"})]})})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
`})}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsx("div",{className:"text-center",children:s.jsxs("div",{className:"row row-cols-4",children:[s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col-6",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"})]})})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col-6">Column</div>
    <div class="col">Column</div>
  </div>
</div>
`})}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsx("div",{className:"text-center",children:s.jsxs("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-4",children:[s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"}),`
`,s.jsx("div",{className:"col",children:"Column"})]})})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
`})}),`
`,s.jsx(l.h2,{id:"nesting",children:"Nesting"}),`
`,s.jsxs(l.p,{children:["To nest your content with the default grid, add a new ",s.jsx("code",{children:".row"})," and set of ",s.jsx("code",{children:".col-sm-"})," columns within an existing ",s.jsx("code",{children:".col-sm-"}),`
column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).`]}),`
`,s.jsx("div",{className:"toolkit-example",children:s.jsx("div",{className:"text-center",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-sm-3",children:"Level 1: .col-sm-3"}),s.jsx("div",{className:"col-sm-9",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-8 col-sm-6",children:"Level 2: .col-8 .col-sm-6"}),`
`,s.jsx("div",{className:"col-4 col-sm-6",children:"Level 2: .col-4 .col-sm-6"})]})})]})})}),`
`,s.jsx(l.pre,{children:s.jsx(l.code,{className:"language-html",children:`<div class="container">
  <div class="row">
    <div class="col-sm-3">Level 1: .col-sm-3</div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
        <div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
      </div>
    </div>
  </div>
</div>
`})})]})}}export{u as default};
//# sourceMappingURL=Grid-fb7878e0.js.map
