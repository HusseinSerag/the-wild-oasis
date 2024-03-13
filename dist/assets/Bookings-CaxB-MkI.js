import{r as y,m as v,j as e,u as i,G as M,s as A,U as H,e as I,v as N,w as T,p as C,T as F,x as V,f as z,M as f,y as E,z as q,C as L,A as R,i as Z,P as p,B as j,D as G,E as O,S as Q,d as P,l as w}from"./index-HRtog5xl.js";import{a as $,b as K}from"./Filters-DY-H6jWc.js";import{S as U,T as d,I as h,M as u}from"./Menus-Dz8_vvuw.js";const B=y.createContext();function _({children:s}){const[c,t]=y.useState(""),[n,a]=v();function r(o){n.set("page",0),a(n),t(o.target.value)}return e.jsx(B.Provider,{value:{search:c,onSearch:r},children:s})}function k(){const s=y.useContext(B);if(s===void 0)throw new Error("Cannot use useSearch outside of searchContext");return s}const J=i.div`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
`,W=i.input`
  width: 100%;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-grey-400);
  padding: 0.4rem 0.8rem;
  background-color: var(--color-grey-0);
`,X=[{name:"all",text:"All"},{name:"checked-out",text:"Checked out"},{name:"checked-in",text:"Checked in"},{name:"unconfirmed",text:"Unconfirmed"}],Y=[{value:"desc-startDate",label:"Sort by date (recent first)"},{value:"asc-startDate",label:"Sort by date (earlier first)"},{value:"asc-totalPrice",label:"Sort by amount (low first)"},{value:"desc-totalPrice",label:"Sort by amount (high first)"}];function ee(){const{search:s,onSearch:c}=k();return e.jsxs(J,{children:[e.jsx($,{keyValue:"status",initialValue:"all",options:X}),e.jsx(U,{name:"sort",options:Y}),e.jsx(W,{placeholder:"Search by guest name...",value:s,onChange:c})]})}function se(s){return M({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm120.49-84.49a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17,0l-24-24a12,12,0,0,1,17-17L116,159l39.51-39.52A12,12,0,0,1,172.49,119.51Z"},child:[]}]})(s)}const te=i.div`
  font-family: "Poppins";
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-grey-900);
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`,ne=i.div`
  font-family: "Poppins";
  font-size: 1.2rem;
  color: var(--color-grey-500);
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`,re=i.div`
  font-family: Poppins;
  font-weight: 400;
  font-size: 1.4rem;
`,ae=i.span`
  display: inline-block;
  font-size: 2.3rem;
`,oe=i.div`
  font-family: Poppins;
  font-weight: 400;
  font-size: 1.2rem;
  color: var(--color-grey-500);
`,S=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,ie=i.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;function ce({booking:s}){const{deleteCurrentBooking:c,isDeleting:t}=A(),n=H(),{checkoutGuest:a,isLoading:r}=I();function o(){a(s.id)}return e.jsxs(d.Row,{children:[e.jsx(h,{children:s.cabins.cabinName}),e.jsx(h,{children:e.jsxs(S,{children:[e.jsx(te,{children:s.guests.fullName}),e.jsx(ne,{children:s.guests.email})]})}),e.jsx(h,{children:e.jsxs(S,{children:[e.jsxs(re,{children:[N(new Date(s.startDate))?"Today":T(s.startDate)," ",e.jsx(ae,{children:"→"}),s.numNights," night stay"]}),e.jsxs(oe,{children:[C(new Date(s.startDate),"MMM dd yyyy")," -"," ",C(new Date(s.endDate),"MMM dd yyyy")]})]})}),e.jsx(h,{children:e.jsx(F,{type:V[s.status],children:s.status.replace("-"," ")})}),e.jsx(h,{children:z(s.totalPrice)}),e.jsx(h,{children:e.jsx(ie,{children:e.jsx(f,{children:e.jsxs(u.Menu,{children:[e.jsx(u.Toggle,{name:s.id}),e.jsxs(u.List,{name:s.id,children:[e.jsxs(u.Action,{disabled:r||t,onClick:()=>n(`/bookings/${s.id}`),children:[e.jsx(K,{})," See Details"]}),s.status==="unconfirmed"&&e.jsxs(u.Action,{disabled:r||t,onClick:()=>n(`/checkin/${s.id}`),children:[e.jsx(se,{})," Check in"]}),s.status==="checked-in"&&e.jsxs(u.Action,{disabled:r||t,onClick:o,children:[e.jsx(E,{})," Check out"]}),e.jsx(f.Button,{opens:"delete-booking",render:l=>e.jsxs(u.Action,{disabled:r||t,onClick:l,children:[" ",e.jsx(q,{})," Delete Booking"]})})]}),e.jsx(f.Content,{name:"delete-booking",render:l=>e.jsx(L,{onClose:l,resourceName:`Booking #${s.id}`,onConfirm:()=>c(s.id),disabled:t})})]})})})})]})}function le(){const[s]=v(),c=R(),{search:t}=k(),n=s.get("status")||"all",a=s.get("sort")||"",r=+s.get("page")||0,{data:o={},isLoading:l,error:x}=Z({queryKey:["bookings",n,a,r,t],queryFn:()=>j(n,a,r,t)}),m=Math.ceil((o==null?void 0:o.count)/p);return r<m-1&&c.prefetchQuery({queryKey:["bookings",n,a,r+1,t],queryFn:()=>j(n,a,r+1,t)}),r>1&&c.prefetchQuery({queryKey:["bookings",n,a,r-1,t],queryFn:()=>j(n,a,r-1,t)}),{isLoading:l,error:x,data:o}}const de=i.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,b=i.button`
  border: 0;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.8rem;
  padding: 1.2rem 1rem;
  font-weight: 500;

  &:hover {
    background-color: var(--color-brand-700);
    color: var(--color-brand-50);
  }
`,g=i.span`
  font-weight: 600;
`,ue=i.div`
  display: flex;
  gap: 1rem;
`;function he({total:s,activePage:c}){const[t,n]=v(),a=t.get("page")||0,r=+a*p,o=+a*p+c,l=+a==0,x=o>=s;if(l&&x)return;function m(){x||(t.set("page",+a+1),n(t))}function D(){l||(t.set("page",+a-1),n(t))}return e.jsxs(de,{children:[e.jsxs("div",{children:["Showing ",e.jsx(g,{children:r+1})," to ",e.jsx(g,{children:o})," of"," ",e.jsx(g,{children:s})," results"]}),e.jsxs(ue,{children:[e.jsxs(b,{disabled:l,onClick:D,children:[e.jsx(G,{})," Previous"]}),e.jsxs(b,{disabled:x,onClick:m,children:["Next ",e.jsx(O,{})]})]})]})}function xe(){const{data:s,isLoading:c,error:t}=le();if(c)return e.jsx(Q,{});if(t)return e.jsx(P,{children:t.message});const{booking:n,count:a}=s,r=a,o=n==null?void 0:n.length;return e.jsxs(d,{columns:"140px 200px 240px 180px 160px 180px",children:[e.jsxs(d.Header,{children:[e.jsx(d.HeaderItem,{children:"Cabin"}),e.jsx(d.HeaderItem,{children:"guest"}),e.jsx(d.HeaderItem,{children:"dates"}),e.jsx(d.HeaderItem,{children:"status"}),e.jsx(d.HeaderItem,{children:"amount"}),e.jsx(d.HeaderItem,{})]}),e.jsx(u,{children:e.jsx(d.Body,{data:n,render:l=>e.jsx(ce,{booking:l},l.id)})}),e.jsx(d.Footer,{children:(n==null?void 0:n.length)>0&&e.jsx(he,{activePage:o,total:r})})]})}function ge(){return e.jsxs(_,{children:[e.jsxs(w,{type:"h-responsive",children:[e.jsx(P,{as:"h1",children:"All Bookings"}),e.jsx(ee,{})]}),e.jsx(w,{children:e.jsx(xe,{})})]})}export{ge as default};
