import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./ui/PageNotFound";
import Layout from "./ui/Layout";
import Loading from "./ui/Loading";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Bookings = lazy(() => import("./pages/Bookings"));
const Cabins = lazy(() => import("./pages/Cabins"));
const Users = lazy(() => import("./pages/Users"));
const Settings = lazy(() => import("./pages/Settings"));
const Account = lazy(() => import("./pages/Account"));
const Login = lazy(() => import("./pages/Login"));

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
