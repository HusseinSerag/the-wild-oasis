import styled from "styled-components";
import Logo from "./Logo";
import Row from "./Row";
import Logout from "../features/authentication/Logout";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
  padding: 1rem 2rem;
`;

const DisplayLogo = styled.header`
  display: none;
  height: 6rem;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;
export default function Header() {
  return (
    <StyledHeader>
      <Row type="horizontal">
        <DisplayLogo>
          <Logo />
        </DisplayLogo>
      </Row>
      <Row type="horizontal">
        <Logout />
      </Row>
    </StyledHeader>
  );
}
