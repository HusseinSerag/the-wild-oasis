import BookingTableOperations from "../features/bookings/BookingTableOperations";
import BookingsTable from "../features/bookings/BookingsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Bookings() {
  return (
    <>
      <Row type="h-responsive">
        <Heading as="h1">All Bookings</Heading>
        <BookingTableOperations />
      </Row>
      <Row>
        <BookingsTable />
      </Row>
    </>
  );
}
