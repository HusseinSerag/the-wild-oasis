import styled from "styled-components";

const StyledTag = styled.div`
  background-color: var(--color-${(props) => props.type}-100);
  color: var(--color-${(props) => props.type}-700);
  padding: 0.7rem 1.3rem;
  font-size: 1.2rem;
  border-radius: 100px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.3px;
  width: fit-content;
`;
export default function Tag({ children, type }) {
  return <StyledTag type={type}>{children}</StyledTag>;
}
