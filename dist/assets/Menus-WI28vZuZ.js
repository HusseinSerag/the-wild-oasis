import{u as s,r as i,m as p,j as t,O as f,G as h,Q as v}from"./index-dMgldkYN.js";const b=s.select`
  border: 1px solid var(--color-grey-100);
  box-shadow: var(--box-shadow);
  background-color: var(--color-grey-0);
  padding: 1rem;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  font-size: 1.4rem;
  width: 100%;
`,y=i.memo(function({options:r,name:o,...n}){const[a,x]=p();function d(l){a.set(o,l),x(a)}return t.jsx(b,{onChange:l=>d(l.target.value),...n,value:a.get(o)||"",children:r.map(l=>t.jsx("option",{value:l.value,children:l.label},l.value))})}),Q=y,u=i.createContext(),w=s.header`
  display: grid;
  ${e=>f`
    grid-template-columns: ${e.columns};
  `};

  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);

  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-grey-600);
  letter-spacing: 0.3px;
  font-size: 1.7rem;
`,j=s.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-sm);
  overflow-x: auto;
`,S=s.div`
  background-color: var(--color-grey-50);
  padding: 2rem 4rem;
  height: 100%;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1rem;
  }
`,C=s.section`
  background-color: var(--color-grey-0);
`,z=s.footer`
  background-color: var(--color-grey-50);
  display: flex;
  width: ${e=>e.width}px;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`,k=s.div`
  display: grid;
  gap: 0.1rem;
  background-color: var(--color-grey-0);
  ${e=>f`
    grid-template-columns: ${e.columns};
  `};
  align-items: center;
  font-size: 1.7rem;

  font-weight: 600;
  font-family: "Sono";

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`,M=s.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;function T({children:e}){const{tableColumns:r}=i.useContext(u),o=r.split(" ").map(n=>n.replace("px","")).map(Number).reduce((n,a)=>n+a,0);return t.jsx(z,{width:o,children:e})}function c({children:e,columns:r}){const o=r;return t.jsx(u.Provider,{value:{tableColumns:o},children:t.jsx(j,{role:"table",children:e})})}function P({children:e}){const{tableColumns:r}=i.useContext(u);return t.jsx(w,{role:"header",as:"header",columns:r,children:e})}function $({children:e}){const{tableColumns:r}=i.useContext(u);return t.jsx(k,{role:"row",columns:r,children:e})}function H({data:e,render:r}){const[o,n]=p(),a=+o.get("page");return i.useEffect(function(){a>0&&!e.length&&(o.set("page",a-1),n(o))},[e.length,a,o,n]),!e.length&&a===0?t.jsx(M,{children:"No Data to show at this moment"}):t.jsx(C,{children:e.map(r)})}c.Header=P;c.HeaderItem=S;c.Row=$;c.Footer=T;c.Body=H;const I=s.div`
  padding: 3rem 2rem;
  background-color: var(--color-grey-0);
  height: 100%;
  display: flex;
  align-items: center;

  border-bottom: 0.5px solid var(--color-grey-100);
  border-top: 0.5px solid var(--color-grey-100);

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    padding: 1.7rem 1.4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`,V=I;function B(e){return h({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"},child:[]}]})(e)}const E=s.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 100%;
`,F=s.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: relative;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`,R=s.ul`
  position: absolute;
  top: -40px;
  left: -80px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  z-index: 100;
`,A=s.button`
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;
  color: var(--color-grey-700);
  font-family: "Poppins", sans-serif;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`,g=i.createContext();function m({children:e}){const[r,o]=i.useState("");function n(x,d){x.stopPropagation(),o(l=>l===d?"":d)}function a(){o("")}return t.jsx(g.Provider,{value:{active:r,toggle:n,close:a},children:t.jsx(t.Fragment,{children:e})})}function L({children:e}){return t.jsx(E,{children:e})}function D({name:e}){const{toggle:r}=i.useContext(g);return t.jsx(F,{children:t.jsx(B,{onClick:o=>r(o,e)})})}function G({children:e,name:r}){const{active:o,close:n}=i.useContext(g),{ref:a}=v(n,!1);return o!==r?null:t.jsx(R,{ref:a,children:e})}function N({children:e,onClick:r}){const{close:o}=i.useContext(g);function n(){r==null||r(),o()}return t.jsx(A,{onClick:n,children:e})}m.Menu=L;m.Toggle=D;m.List=G;m.Action=N;export{V as I,m as M,Q as S,c as T};
