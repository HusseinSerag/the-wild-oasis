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
  width: 100%;
`;

export default function Sort({ options, name, ...props }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSort(value) {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      onChange={(e) => handleSort(e.target.value)}
      {...props}
      value={searchParams.get(name) || ""}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}
