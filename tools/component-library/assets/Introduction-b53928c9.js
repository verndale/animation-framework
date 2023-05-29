import{j as e}from"./jsx-runtime-e14d2896.js";import{M as i}from"./index-ba0fa86a.js";import{u as r}from"./index-f0088b9f.js";import"./iframe-296631b8.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-87174ba5.js";import"./index-d475d2ea.js";import"./index-53e146c1.js";import"./index-356e4a49.js";function m(s={}){const{wrapper:o}=Object.assign({},r(),s.components);return o?e.jsx(o,Object.assign({},s,{children:e.jsx(l,{})})):l();function l(){const n=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",h3:"h3",a:"a",code:"code",h4:"h4",pre:"pre",em:"em",blockquote:"blockquote"},r(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction"}),`
`,e.jsx("style",{children:`
    h2 {
      margin-block: 2rem !important;
    }

    h3 {
      margin-block: 1.5rem !important;
    }

    strong {
      font-weight: bold;
    }
  `}),`
`,e.jsx(n.h1,{id:"verndale-frontend-toolkit",children:"Verndale Frontend Toolkit"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Verndale Frontend Toolkit"}),` is a powerful solution designed to help developers streamline their
development process. It utilizes the latest technologies and tools to provide a comprehensive solution
for building robust and efficient web applications.`]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Handlebars:"}),` Handlebars is a popular templating engine that allows developers to create dynamic
templates with ease. With the toolkit, developers can use Handlebars to quickly and easily create reusable
components that can be used throughout the application.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"SASS:"}),` SASS is a powerful CSS preprocessor that provides advanced features like variables, nesting,
and mixins. With the toolkit, developers can use SASS to create complex and dynamic stylesheets that are
easy to maintain and update.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"JavaScript:"}),` The toolkit supports a variety of JavaScript tools and frameworks to help developers build
complex functionality into the application.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Storybook:"}),` Storybook is a powerful UI development and testing tool that makes it easy to create and
test UI components. With the toolkit, developers can use Storybook to rapidly develop and test UI components,
ensuring they work as intended before integrating them into the application.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"ViteJS:"}),` ViteJS is a fast and reliable bundler that makes it easy to bundle code and assets for deployment.
It's designed to work seamlessly with other tools in the toolkit, allowing developers to quickly build and deploy
their application.`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.h3,{id:"requirements",children:"Requirements"}),`
`,e.jsx(n.p,{children:"Download/install these tools/packages in order to run the toolkit locally."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://nodejs.org/en/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Node"})," - ",e.jsx(n.code,{children:"~18.x.x"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://classic.yarnpkg.com/en/docs/install/#mac-stable",target:"_blank",rel:"nofollow noopener noreferrer",children:"Yarn"})," - ",e.jsx(n.code,{children:"~1.x.x"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"install-requirements",children:"Install requirements"}),`
`,e.jsx(n.h4,{id:"install-node-js",children:"Install Node JS"}),`
`,e.jsxs(n.p,{children:["Installing Node will also install the Node Package Manager (",e.jsx(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"npm"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.a,{href:"https://nodejs.org/en/",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"})," to grab the package"]}),`
`,e.jsx(n.li,{children:"Download the most current node which has the latest features"}),`
`,e.jsx(n.li,{children:"Follow on screen instructions to complete installation"}),`
`]}),`
`,e.jsx(n.p,{children:"To make sure Node is installed properly, launch your terminal or command line and type:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`node --version
`})}),`
`,e.jsx(n.h4,{id:"install-yarn",children:"Install Yarn"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Follow instructions ",e.jsx(n.a,{href:"https://classic.yarnpkg.com/en/docs/install/#mac-stable",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"})]}),`
`,e.jsx(n.li,{children:"After installation, you should be able to run yarn on the command line"}),`
`]}),`
`,e.jsx(n.p,{children:"To make sure Yarn installed properly, launch your terminal or command line and type:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn --version
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["You should see a version number such as this: ",e.jsx(n.code,{children:"1.22.4"})]})}),`
`,e.jsx(n.h3,{id:"install-dependencies",children:"Install dependencies"}),`
`,e.jsx(n.p,{children:"Once you have your requirements installed, navigate to the root of the toolkit in terminal or command line and run:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn
`})}),`
`,e.jsxs(n.p,{children:["This will bring down all ",e.jsx(n.code,{children:"dependencies"})," and ",e.jsx(n.code,{children:"devDependencies"})," for the project that are defined in the ",e.jsx(n.code,{children:"package.json"})," file so you can properly run a build and work on the project."]}),`
`,e.jsx(n.h2,{id:"running-the-application",children:"Running the application"}),`
`,e.jsxs(n.p,{children:["The toolkit uses ",e.jsx(n.a,{href:"https://storybook.js.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"storybook"})," to deliver all components (and modules) within an interactive UI. Developers should write one or multiple stories per component that describe all the states a component can support."]}),`
`,e.jsx(n.p,{children:"To start storybook run the following at the root of the project:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn start
`})}),`
`,e.jsx(n.h2,{id:"scripts",children:"Scripts"}),`
`,e.jsxs(n.p,{children:["When working in the development environment, you will use the ",e.jsx(n.code,{children:"yarn start"})," task to view up-to-date changes while you work."]}),`
`,e.jsx(n.p,{children:"For individual tasks, the following can be used:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Lint JavaScript files - ",e.jsx(n.code,{children:"yarn js-lint"})]}),`
`,e.jsxs(n.li,{children:["Lint Styles files - ",e.jsx(n.code,{children:"yarn style-lint"})]}),`
`,e.jsxs(n.li,{children:["Build - ",e.jsx(n.code,{children:"yarn build"})]}),`
`,e.jsxs(n.li,{children:["Build static version of storybook - ",e.jsx(n.code,{children:"yarn build-storybook"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"scaffolding",children:"Scaffolding"}),`
`,e.jsx(n.p,{children:"The toolkit provides tools that help to generate resource files faster with a predefined standard structure."}),`
`,e.jsx(n.p,{children:"The following available tasks can be used:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Scaffold a new page - ",e.jsx(n.code,{children:"yarn create-page"})]}),`
`,e.jsxs(n.li,{children:["Scaffold a new module - ",e.jsx(n.code,{children:"yarn create-module"})]}),`
`,e.jsxs(n.li,{children:["Scaffold a new component - ",e.jsx(n.code,{children:"yarn create-component"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"production-build",children:"Production build"}),`
`,e.jsxs(n.p,{children:["The compiled and minified assets can be created by running ",e.jsx(n.code,{children:"yarn build"}),`. This will put all compiled and minified
files in the `,e.jsx(n.code,{children:"dist"})," folder."]}),`
`,e.jsx(n.h2,{id:"source-code",children:"Source code"}),`
`,e.jsx(n.h3,{id:"page-templates",children:"Page templates"}),`
`,e.jsx(n.p,{children:"The page templates can be found under the following folder:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["HTML - ",e.jsx(n.code,{children:"src/html/templates"})]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` each page template contains a collection of individual modules.
To view the source code for these modules see the "Module source code" section below.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"module-source-code",children:"Module source code"}),`
`,e.jsx(n.p,{children:"The module source code can be found under the following:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["HTML - ",e.jsx(n.code,{children:"src/html/modules"})]}),`
`,e.jsxs(n.li,{children:["SCSS - ",e.jsx(n.code,{children:"src/scss/modules"})]}),`
`,e.jsxs(n.li,{children:["JS - ",e.jsx(n.code,{children:"src/scripts/modules"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"component-source-code",children:"Component source code"}),`
`,e.jsx(n.p,{children:"The component source code can be found under the following:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["HTML - ",e.jsx(n.code,{children:"src/html/components"})]}),`
`,e.jsxs(n.li,{children:["SCSS - ",e.jsx(n.code,{children:"src/scss/components"})]}),`
`,e.jsxs(n.li,{children:["JS - ",e.jsx(n.code,{children:"src/scripts/components"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"stories-source-code",children:"Stories source code"}),`
`,e.jsx(n.p,{children:"The stories source code can be found under the following:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Components - ",e.jsx(n.code,{children:"src/stories/components"})]}),`
`,e.jsxs(n.li,{children:["Modules - ",e.jsx(n.code,{children:"src/stories/modules"})]}),`
`,e.jsxs(n.li,{children:["Templates - ",e.jsx(n.code,{children:"src/stories/templates"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"static-files",children:"Static files"}),`
`,e.jsxs(n.p,{children:["All static files, such as images or fonts, should be located under ",e.jsx(n.code,{children:"src/static"}),". SVG files to be included in the svgstore spritesheet should be located under ",e.jsx(n.code,{children:"src/static/svg-sprites"}),"."]})]})}}export{m as default};
//# sourceMappingURL=Introduction-b53928c9.js.map
