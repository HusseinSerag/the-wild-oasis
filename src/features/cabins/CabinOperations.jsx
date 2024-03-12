import styled from "styled-components";

import Sort from "../../ui/Sort";
import Filters from "../../ui/Filters";

const Container = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
`;

const options = [
  {
    name: "all",
    text: "All",
  },
  {
    name: "no-discount",
    text: "No discount",
  },
  {
    name: "discount",
    text: "With discount",
  },
];
export default function CabinOperations() {
  return (
    <Container>
      <Filters keyValue="discount" initialValue="all" options={options} />
      <Sort
        name="sort"
        options={[
          { value: "asc-name", label: "Sort by name (A-Z)" },
          { value: "desc-name", label: "Sort by name (Z-A)" },
          { value: "asc-price", label: "Sort by price (low first)" },
          { value: "desc-price", label: "Sort by price (high first)" },
          { value: "asc-cap", label: "Sort by capacity (low first)" },
          { value: "desc-cap", label: "Sort by capacity (high first)" },
        ]}
      />
    </Container>
  );
}
