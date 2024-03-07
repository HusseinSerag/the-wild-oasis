import Table from "../../ui/Table";

import Spinner from "../../ui/Spinner";
import BookingsRow from "./BookingsRow";

import { useBookings } from "./useBookings";

export default function BookingsTable() {
  const { bookings, isLoading } = useBookings();

  if (isLoading) return <Spinner />;

  return (
    <Table columns="140px 200px 240px 180px 160px 180px">
      <Table.Header>
        <Table.HeaderItem>Cabin</Table.HeaderItem>
        <Table.HeaderItem>guest</Table.HeaderItem>
        <Table.HeaderItem>dates</Table.HeaderItem>
        <Table.HeaderItem>status</Table.HeaderItem>
        <Table.HeaderItem>amount</Table.HeaderItem>
        <Table.HeaderItem></Table.HeaderItem>
        <Table.HeaderItem></Table.HeaderItem>
      </Table.Header>
      <Table.Body
        data={bookings}
        render={(booking) => (
          <BookingsRow booking={booking} key={booking.cabinId} />
        )}
      ></Table.Body>
    </Table>
  );
}
