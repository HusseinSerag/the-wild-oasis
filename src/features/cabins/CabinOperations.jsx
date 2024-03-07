import styled from "styled-components";
import Filters from "./Filters";
import Sort from "./Sort";

const Container = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
`;
export default function CabinOperations() {
  return (
    <Container>
      <Filters />
      <Sort />
    </Container>
  );
}
