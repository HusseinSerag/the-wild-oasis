import{j as e,u as s,U as g,A as h,J as p,a0 as x,_ as d,G as f,a1 as j,K as y,a2 as w,d as b}from"./index-dMgldkYN.js";import{u as v}from"./index.esm-CPCe-N0C.js";const L=s.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`,S=s.label`
  font-weight: 600;
  font-size: 1.5rem;
`,C=s.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function l({label:n,text:r,error:i,children:o}){return e.jsxs(L,{children:[n&&e.jsx(S,{htmlFor:n,children:r}),o,(i==null?void 0:i.message)&&e.jsx(C,{children:i.message})]})}function E(){const n=g(),r=h(),{mutate:i,isPending:o}=p({mutationFn:x,onSuccess:t=>{r.setQueryData(["user"],t.user),n("/dashboard"),d.success("You have successfully logged in!")},onError:t=>d.error(t.message)});return{loginUser:i,isPending:o}}function F(n){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"},child:[]}]})(n)}const q=j`
  to {
    transform: rotate(1turn)
  }
`,P=s(F)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${q} 1.5s infinite linear;
`,z=P,c=s.input`
  width: 100%;
  border: 1px solid var(--color-grey-200);
  height: 4rem;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
`,M=s.form`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`,U=s.div`
  background-color: var(--color-grey-0);
  padding: 2rem;
  width: min(60rem, 100%);
`;function A(){const{handleSubmit:n,register:r,formState:{errors:i},reset:o}=v(),{loginUser:t,isPending:a}=E();function u(m){t(m,{onSettled:()=>o()})}return e.jsx(U,{children:e.jsxs(M,{onSubmit:n(u),children:[e.jsx(l,{label:"Email",text:"Email Address",error:i.email,children:e.jsx(c,{id:"Email",type:"email",...r("email",{required:"This field is required"}),autoComplete:"username",disabled:a})}),e.jsx(l,{label:"password",text:"Password",error:i.password,children:e.jsx(c,{id:"password",type:"password",...r("password",{required:"This field is required",minLength:{value:6,message:"Password must be atleast 6 characters long!"}}),autoComplete:"password",disabled:a})}),e.jsx(y,{disabled:a,size:"md",children:a?e.jsx(z,{}):"Log in"})]})})}const B=s.main`
  min-height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 2rem;
`,I=s(b)`
  font-weight: 600;
`,R=s.div`
  height: 10rem;
`;function G(){return e.jsxs(B,{children:[e.jsx(R,{children:e.jsx(w,{})}),e.jsx(I,{as:"h1",children:"Log into your account"}),e.jsx(A,{})]})}export{G as default};
