import Spinner from "../../ui/Spinner";

import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

export default function CabinTable() {
  const { isLoading, error, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const discount = searchParams.get("discount");
  const sort = searchParams.get("sort");

  const filteredData = filterCabins(cabins, discount);
  const data = sortCabins(filteredData, sort);

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

function sortCabins(data, key) {
  if (!key) return data;
  else if (key === "asc-name") {
    return data.slice().sort((a, b) => a.cabinName.localeCompare(b.cabinName));
  } else if (key === "desc-name") {
    return data.slice().sort((a, b) => b.cabinName.localeCompare(a.cabinName));
  } else if (key === "asc-price") {
    return data.slice().sort((a, b) => a.regularPrice - b.regularPrice);
  } else if (key === "desc-price") {
    return data.slice().sort((a, b) => b.regularPrice - a.regularPrice);
  } else if (key === "asc-cap") {
    return data.slice().sort((a, b) => a.maxCapacity - b.maxCapacity);
  } else if (key === "desc-cap") {
    return data.slice().sort((a, b) => b.maxCapacity - a.maxCapacity);
  } else return data;
}
