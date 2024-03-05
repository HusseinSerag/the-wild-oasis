import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  overflow-x: auto;
`;

const TableHeader = styled.header`
  display: grid;

  grid-template-columns: 110px 150px 220px 170px 170px 140px;
  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-grey-600);
  letter-spacing: 0.3px;
  font-size: 1.7rem;
`;

const HeaderItem = styled.div`
  background-color: var(--color-grey-50);
  padding: 2rem 4rem;
  height: 100%;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem;
  }
`;
export default function CabinTable() {
  const { isLoading, error, cabins } = useCabins();

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <HeaderItem></HeaderItem>
        <HeaderItem>Cabin</HeaderItem>
        <HeaderItem>Capacity</HeaderItem>
        <HeaderItem>Price</HeaderItem>
        <HeaderItem>Discount</HeaderItem>
        <HeaderItem></HeaderItem>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}
