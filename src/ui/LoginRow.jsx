import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1.5rem;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
export default function LoginRow({ label, text, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={label}>{text}</Label>}
      {children}
      {error?.message && <Error>{error.message}</Error>}
    </StyledFormRow>
  );
}
