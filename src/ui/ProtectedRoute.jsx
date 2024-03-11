import { Outlet } from "react-router-dom";
import { useUsers } from "../features/authentication/useUsers";
import UseNavigateToSpecificPage from "../hooks/UseGoBack";

import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function ProtectedRoute() {
  const { isLoading, user, fetchStatus } = useUsers();
  const isAuth = user?.role === "authenticated";
  const go = UseNavigateToSpecificPage();

  console.log(isAuth);
  useEffect(
    function () {
      if (!isAuth && !isLoading && fetchStatus !== "fetching") go("/login");
    },
    [isAuth, isLoading, fetchStatus, go]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuth)
    return (
      <>
        <Outlet />
      </>
    );
}
