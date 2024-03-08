import styled from "styled-components";
import Filters from "./Filters";
import Sort from "../../ui/Sort";

const Container = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
`;
export default function BookingTableOperations() {
  return (
    <Container>
      <Filters />
      <Sort
        name="sort"
        options={[
          { value: "desc-startDate", label: "Sort by date (recent first)" },
          { value: "asc-startDate", label: "Sort by date (earlier first)" },
          { value: "asc-totalPrice", label: "Sort by amount (low first)" },
          { value: "desc-totalPrice", label: "Sort by amount (high first)" },
        ]}
      />
    </Container>
  );
}
