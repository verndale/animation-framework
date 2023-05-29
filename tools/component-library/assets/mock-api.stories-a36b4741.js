import{i as y,H as E}from"./_handlebarsPluginInit-a93f350a.js";import{l as c}from"./index-52406d3c.js";import"./_commonjsHelpers-87174ba5.js";y();var I=E.template({compiler:[8,">= 4.3.0"],main:function(t,e,a,_,d){var n,u=e??(t.nullContext||{}),p=t.hooks.helperMissing,m="function",g=t.escapeExpression,o=t.lookupProperty||function(h,f){if(Object.prototype.hasOwnProperty.call(h,f))return h[f]};return`<section
  class="mock-api container"
  data-module="mockApi"
  data-endpoint="`+g((n=(n=o(a,"endpoint")||(e!=null?o(e,"endpoint"):e))!=null?n:p,typeof n===m?n.call(u,{name:"endpoint",hash:{},data:d,loc:{start:{line:4,column:17},end:{line:4,column:29}}}):n))+`"
  data-heading="`+g((n=(n=o(a,"heading")||(e!=null?o(e,"heading"):e))!=null?n:p,typeof n===m?n.call(u,{name:"heading",hash:{},data:d,loc:{start:{line:5,column:16},end:{line:5,column:27}}}):n))+`"
>
</section>
`},useData:!0});function z(t,e){return I({...t,publicPath:"",docsView:e.viewMode==="docs"},e)}const r="/api/results",D=[{id:1,title:"Selling the Experience: Digital Trend in Sports & Entertainment",author:"Jason Lumsden",occupation:"Salesforce Pratice Lead - CMT",image:"https://verndale-image-tools.azurewebsites.net/id/FVxkTX-Ejec?w=300&h=500"},{id:2,title:"Time to Make the Switch to Google Analytics 4",author:"Andrea Goldstein",occupation:"Senior Director, Digital Marketing"},{id:3,title:"9 Steps on the Path to Personalization",author:"Tracey Barber",occupation:"VP, Marketing",image:"https://verndale-image-tools.azurewebsites.net/id/HGVtA1zSHo4?w=300&h=500"},{id:4,title:"OpenAI, ChatGPT, & What's Coming With AI",author:"Elizabeth Spranzani",occupation:"Chief Technology Officer"},{id:5,title:"5 Predictions for 2023's Marketing Landscape",author:"Stephanie Nardone",occupation:"Content Marketing Manager",image:"https://verndale-image-tools.azurewebsites.net/id/hoV4nneXR-U?w=300&h=500"},{id:6,title:"How Personalization Afffects SEO: 4 Tips for Success",author:"Andrea Goldstein",occupation:"Senior Director, Digital Marketing"}],O={title:"Modules/Mock API",tags:["autodocs"],render:z,argTypes:{heading:{control:"text"},endpoint:{control:"text"}}},s={args:{endpoint:r,heading:"Mocked API"},parameters:{msw:{handlers:[c.rest.get(r,(t,e,a)=>e(a.json(D)))]}}},i={args:{endpoint:r,heading:"Mocked API"},parameters:{msw:{handlers:[c.rest.get(r,(t,e,a)=>e(a.json([])))]}}},l={args:{endpoint:r,heading:"Mocked API"},parameters:{msw:{handlers:[c.rest.get(r,(t,e,a)=>e(a.status(403)))]}}};var k,M,P;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    endpoint: endpoint,
    heading: 'Mocked API'
  },
  parameters: {
    msw: {
      handlers: [rest.get(endpoint, (_, res, ctx) => {
        return res(ctx.json(results));
      })]
    }
  }
}`,...(P=(M=s.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var w,A,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    endpoint: endpoint,
    heading: 'Mocked API'
  },
  parameters: {
    msw: {
      handlers: [rest.get(endpoint, (_, res, ctx) => {
        return res(ctx.json([]));
      })]
    }
  }
}`,...(S=(A=i.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var x,T,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    endpoint: endpoint,
    heading: 'Mocked API'
  },
  parameters: {
    msw: {
      handlers: [rest.get(endpoint, (_, res, ctx) => {
        return res(ctx.status(403));
      })]
    }
  }
}`,...(b=(T=l.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const G=["Default","NoResults","Error"];export{s as Default,l as Error,i as NoResults,G as __namedExportsOrder,O as default};
//# sourceMappingURL=mock-api.stories-a36b4741.js.map
