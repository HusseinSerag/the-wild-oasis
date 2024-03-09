import styled from "styled-components";
import Filters from "./Filters";
import Sort from "../../ui/Sort";
import { useSearch } from "../../Contexts/BookingSearchInput";
import { useMemo } from "react";

const Container = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
`;
const Input = styled.input`
  width: 100%;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-grey-400);
  padding: 0.4rem 0.8rem;
`;
export default function BookingTableOperations() {
  const { search, onSearch } = useSearch();
  const options = useMemo(
    () => [
      { value: "desc-startDate", label: "Sort by date (recent first)" },
      { value: "asc-startDate", label: "Sort by date (earlier first)" },
      { value: "asc-totalPrice", label: "Sort by amount (low first)" },
      { value: "desc-totalPrice", label: "Sort by amount (high first)" },
    ],
    []
  );
  return (
    <Container>
      <Filters />
      <Sort name="sort" options={options} />
      <Input
        placeholder="Search by guest name..."
        value={search}
        onChange={onSearch}
      />
    </Container>
  );
}
