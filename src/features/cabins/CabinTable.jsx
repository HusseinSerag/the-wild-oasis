import Spinner from "../../ui/Spinner";

import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

export default function CabinTable() {
  const { isLoading, error, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  const discount = searchParams.get("discount");

  if (isLoading) return <Spinner />;
  const data = filterCabins(cabins, discount);

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
          data={data}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

function filterCabins(data, key) {
  if (!key || key === "all") return data;
  else if (key === "discount")
    return data.filter((cabin) => cabin.discount > 0);
  else if (key === "no-discount")
    return data.filter((cabin) => cabin.discount === 0);
  else return data;
}
