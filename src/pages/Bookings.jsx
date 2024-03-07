import BookingsTable from "../features/bookings/BookingsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Bookings() {
  return (
    <>
      <Row type="h-responsive">
        <Heading as="h1">All Bookings</Heading>
      </Row>
      <Row>
        <BookingsTable />
      </Row>
    </>
  );
}
