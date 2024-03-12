import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../../data/Uploader";

const StyledNavbar = styled.nav`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 1.4rem;
  grid-row: 1/-1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-row: 3/-1;
    border: 0;
    gap: 0;
    border-top: 1px solid var(--color-grey-100);
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const LogoDisplay = styled.div`
  height: min(9rem, 7.3rem + 1vw);
  text-align: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <LogoDisplay>
        <Logo />
      </LogoDisplay>
      <MainNav />
      {/* <Uploader /> */}
    </StyledNavbar>
  );
}
