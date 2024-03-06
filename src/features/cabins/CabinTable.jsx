import Spinner from "../../ui/Spinner";

import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

export default function CabinTable() {
  const { isLoading, error, cabins } = useCabins();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="130px 150px 220px 170px 170px 160px" role="table">
        <Table.Header>
          <Table.HeaderItem></Table.HeaderItem>
          <Table.HeaderItem>Cabin</Table.HeaderItem>
          <Table.HeaderItem>Capacity</Table.HeaderItem>
          <Table.HeaderItem>Price</Table.HeaderItem>
          <Table.HeaderItem>Discount</Table.HeaderItem>
          <Table.HeaderItem></Table.HeaderItem>
        </Table.Header>
        <Table.Body
          data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
