import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 12rem 2fr 1fr;
  gap: 2.4rem;
  padding: 2rem 4rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1.4rem;
    padding: 1rem 2rem;

    & button {
      max-width: 35rem;
      min-width: 20rem;
    }
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1.5rem;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
export default function FormRow({ label, text, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={label}>{text}</Label>}
      {children}
      {error?.message && <Error>{error.message}</Error>}
    </StyledFormRow>
  );
}
