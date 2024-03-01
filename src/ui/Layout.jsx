import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import styled from "styled-components";

const Main = styled.main`
  background-color: var() (--color-grey-50);
  padding: 4rem;
  overflow-y: auto;
`;

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: [line1] 1fr [line2] 5fr [line3];
  grid-template-rows: auto 1fr;
  height: 100dvh;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
`;

export default function Layout() {
  return (
    <StyledLayout>
      <Header />
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </StyledLayout>
  );
}
