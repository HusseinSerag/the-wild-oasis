import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Select = styled.select`
  border: 1px solid var(--color-grey-100);
  box-shadow: var(--box-shadow);
  background-color: var(--color-grey-0);
  padding: 1rem;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  font-size: 1.4rem;
`;

export default function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSort(value) {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  }
  return (
    <Select onChange={(e) => handleSort(e.target.value)}>
      <option value="asc-name">Sort by name (A-Z)</option>
      <option value="desc-name">Sort by name (Z-A)</option>
      <option value="asc-price">Sort by price (low first)</option>
      <option value="desc-price">Sort by price (high first)</option>
      <option value="asc-cap">Sort by capacity (low first)</option>
      <option value="desc-cap">Sort by capacity (high first)</option>
    </Select>
  );
}
