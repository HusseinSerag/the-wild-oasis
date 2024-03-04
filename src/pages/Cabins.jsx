import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Cabins() {
  return (
    <>
      <Row type="h-responsive">
        <Heading as="h1">All Cabins</Heading>
        <p>sort / filter /</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}
