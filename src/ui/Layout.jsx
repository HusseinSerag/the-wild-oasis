import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: [line1] 1fr [line2] 4fr [line3];
  grid-template-rows: auto 1fr;
  height: 100svh;
  height: -webitkit-fill-available;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
`;

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
export default function Layout() {
  return (
    <StyledLayout>
      <Header />
      <Navbar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledLayout>
  );
}
