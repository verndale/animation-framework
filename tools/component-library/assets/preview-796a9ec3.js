const{useParameter:c,useGlobals:m,useEffect:y}=__STORYBOOK_MODULE_PREVIEW_API__;var u="gridOverlay",n=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof global<"u"?e=global:typeof self<"u"?e=self:e={},e})(),b=e=>{var l;let t=e;if(typeof t=="string"){let a=t.match(/var\(--.+\)/);if(a){let d=getComputedStyle(document.documentElement).getPropertyValue(((l=a[0])==null?void 0:l.replace("var(","").replace(")",""))??"");isNaN(Number(d))||(t=Number(d))}else t=parseInt(t,10)}return t};function v(e){return`
    .sb-grid-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999999;
      box-sizing: border-box;
      ${e.layout==="padded"?"padding-left: 16px; padding-right: 16px;":""}
    }

    .sb-grid-overlay__grid {
      display: grid;
      grid-template-columns: repeat(${e.columns}, 1fr);
      column-gap: ${e.gap??"20px"};
      width: 100%;
      max-width:${e.maxWidth??"none"};
      ${e.gutter?`padding-left: ${e.gutter}; padding-right: ${e.gutter};`:""}
      margin: 0 auto;
      height: 100%;
      pointer-events: none;
      box-sizing: border-box;
    }

    .sb-grid-overlay__column {
      height: 100%;
      background-color: ${e.color??"rgba(255, 71, 132, 0.15)"};
      pointer-events: none;
      box-sizing: border-box;
    }
  `}var f=(e,t)=>{let l=c(u,null),[a]=m(),d=a[u],i=t.viewMode==="docs",{layout:r="padded"}=t.parameters;return y(()=>{h({displayGrid:d,isInDocs:i,layout:r,...l})},[d]),e()};function h({displayGrid:e,isInDocs:t,layout:l,columns:a=12,...d}){let i=document.getElementById("storybook-root").parentElement,r=n.document.getElementById("addon-grid-overlay"),o=i.querySelector(".sb-grid-overlay");if(t||!e){r==null||r.remove(),o==null||o.remove();return}let p=b(a);if(r||(r=n.document.createElement("style"),r.setAttribute("id","addon-grid-overlay"),n.document.head.appendChild(r)),r.innerHTML=v({layout:l,columns:a,...d}),!o){o=n.document.createElement("div"),o.classList.add("sb-grid-overlay");let s=n.document.createElement("div");s.classList.add("sb-grid-overlay__grid"),o.appendChild(s),Array.from({length:p}).forEach(()=>{let g=n.document.createElement("div");g.classList.add("sb-grid-overlay__column"),s.appendChild(g)}),i.appendChild(o)}}var _={decorators:[f],globals:{[u]:!1}},x=_;export{x as default};
//# sourceMappingURL=preview-796a9ec3.js.map
