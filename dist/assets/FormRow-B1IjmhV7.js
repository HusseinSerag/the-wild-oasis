import{u as r,j as o}from"./index-BdrJt9Co.js";const d=r.form`
  font-size: 1.4rem;

  padding: 1.4rem 2rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`,g=d,s=r.input`
  width: 100%;
  border: 1px solid var(--color-grey-200);
  height: 4rem;
  padding: 1rem;
  font-size: 1.5rem;
  max-width: 35rem;
  min-width: 20rem;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
`,p=s,n=r.div`
  display: grid;
  align-items: center;
  grid-template-columns: 12rem 2fr 1fr;
  gap: 2.4rem;
  padding: 2rem 4rem;
  &:has(button) {
    display: flex;
    gap: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1.4rem;
    padding: 1rem 2rem;

    & button {
      max-width: 35rem;
      min-width: 20rem;
    }
  }
`,t=r.label`
  font-weight: 600;
  font-size: 1.5rem;
`,l=r.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function u({label:i,text:m,error:e,children:a}){return o.jsxs(n,{children:[i&&o.jsx(t,{htmlFor:i,children:m}),a,(e==null?void 0:e.message)&&o.jsx(l,{children:e.message})]})}export{g as F,p as I,u as a};
