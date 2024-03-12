import styled from "styled-components";
import Logo from "./Logo";
import Row from "./Row";

import HeaderItems from "./HeaderItems";
import UserItems from "./UserItems";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;

const DisplayLogo = styled.header`
  display: none;
  height: 6rem;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.3rem;
`;
export default function Header() {
  return (
    <StyledHeader>
      <Row type="horizontal">
        <DisplayLogo>
          <Logo />
        </DisplayLogo>
      </Row>
      <Container>
        <UserItems />
        <HeaderItems />
      </Container>
    </StyledHeader>
  );
}
