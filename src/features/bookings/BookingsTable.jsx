import Table from "../../ui/Table";

import Spinner from "../../ui/Spinner";
import BookingsRow from "./BookingsRow";

import { useBookings } from "./useBookings";
import Pagination from "../../ui/Pagination";
import Heading from "../../ui/Heading";
import Menus from "../../ui/Menus";

export default function BookingsTable() {
  const { data, isLoading, error } = useBookings();

  if (isLoading) return <Spinner />;
  if (error) return <Heading>{error.message}</Heading>;
  const { booking: bookings, count } = data;
  const totalBookings = count;
  const activePage = bookings?.length;

  return (
    <Table columns="140px 200px 240px 180px 160px 180px">
      <Table.Header>
        <Table.HeaderItem>Cabin</Table.HeaderItem>
        <Table.HeaderItem>guest</Table.HeaderItem>
        <Table.HeaderItem>dates</Table.HeaderItem>
        <Table.HeaderItem>status</Table.HeaderItem>
        <Table.HeaderItem>amount</Table.HeaderItem>
        <Table.HeaderItem></Table.HeaderItem>
      </Table.Header>
      {
        <Menus>
          <Table.Body
            data={bookings}
            render={(booking) => (
              <BookingsRow booking={booking} key={booking.id} />
            )}
          ></Table.Body>
        </Menus>
      }
      <Table.Footer>
        {bookings?.length > 0 && (
          <Pagination activePage={activePage} total={totalBookings} />
        )}
      </Table.Footer>
    </Table>
  );
}
