import{j as l,c as f}from"./utils.CeO8X3KE.js";import{r}from"./index.l2PZgWEW.js";import{u as b,M as v,m as j,a as M,c as k,f as y,i as m,b as C}from"./motion.COiwcF0q.js";function u(a){const e=b(()=>j(a)),{isStatic:i}=r.useContext(v);if(i){const[,o]=r.useState(a);r.useEffect(()=>e.on("change",o),[])}return e}function N(a,e){const i=u(e()),o=()=>i.set(e());return o(),M(()=>{const n=()=>y.preRender(o,!1,!0),t=a.map(s=>s.on("change",n));return()=>{t.forEach(s=>s()),k(o)}}),i}function p(a,...e){const i=a.length;function o(){let n="";for(let t=0;t<i;t++){n+=a[t];const s=e[t];s&&(n+=m(s)?s.get():s)}return n}return N(e.filter(m),o)}const $=({bgImage:a="/hero-highligh-bg.avif",children:e,className:i,containerClassName:o})=>{let n=u(0),t=u(0);function s({currentTarget:c,clientX:d,clientY:g}){if(!c)return;let{left:h,top:x}=c.getBoundingClientRect();n.set(d-h),t.set(g-x)}return l.jsxs("div",{className:f("relative flex bg-black justify-center items-center w-full group",o),onMouseMove:s,children:[l.jsx("div",{className:"absolute w-full h-full flex justify-center lg:justify-end",children:l.jsx("img",{src:a,alt:"placeholder",width:400,height:600,className:"object-cover max-w-full min-w-full min-h-full block absolte"})}),l.jsx("div",{className:"absolute inset-0 bg-black/60 pointer-events-none"}),l.jsx(C.div,{className:"pointer-events-none bg-dot-thick-slate-100   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",style:{WebkitMaskImage:p`
            radial-gradient(
              200px circle at ${n}px ${t}px,
              black 0%,
              transparent 100%
            )
          `,maskImage:p`
            radial-gradient(
              200px circle at ${n}px ${t}px,
              black 0%,
              transparent 100%
            )
          `}}),l.jsx("div",{className:f("relative z-30",i),children:e})]})};export{$ as HeroHighlight};
