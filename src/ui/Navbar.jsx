import styled from "styled-components";

const StyledNavbar = styled.nav`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 1.4rem;
  grid-row: 1/-1;

  @media screen and (max-width: 768px) {
    grid-row: 3/-1;
    border: 0;
    border-top: 1px solid var(--color-grey-100);
  }
`;

export default function Navbar() {
  return <StyledNavbar>navbar</StyledNavbar>;
}
