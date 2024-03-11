import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const StyledLogin = styled.main`
  min-height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 2rem;
`;

const StyledHeading = styled(Heading)`
  font-weight: 600;
`;

const LogoContainer = styled.div`
  height: 10rem;
`;
export default function Login() {
  return (
    <StyledLogin>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <StyledHeading as="h1">Log into your account</StyledHeading>
      <LoginForm />
    </StyledLogin>
  );
}
