import CabinOperations from "../features/cabins/CabinOperations";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "./../features/cabins/AddCabin";

export default function Cabins() {
  return (
    <>
      <Row type="h-responsive">
        <Heading as="h1">All Cabins</Heading>
        <CabinOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}
