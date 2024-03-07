import styled from "styled-components";
import Item from "../../ui/Item";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { FaEye } from "react-icons/fa";
import { PiCalendarCheckBold } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { format, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../util/helpers";
import Tag from "../../ui/Tag";

const FullName = styled.div`
  font-family: "Poppins";
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-grey-900);
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Email = styled.div`
  font-family: "Poppins";
  font-size: 1.2rem;
  color: var(--color-grey-500);
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const NumOfNights = styled.div`
  font-family: Poppins;
  font-weight: 400;
  font-size: 1.4rem;
`;
const Arrow = styled.span`
  display: inline-block;
  font-size: 2.3rem;
`;
const StartEnd = styled.div`
  font-family: Poppins;
  font-weight: 400;
  font-size: 1.2rem;
  color: var(--color-grey-500);
`;

const statusToTagName = {
  unconfirmed: "blue",
  "checked-in": "green",
  "checked-out": "silver",
};
export default function BookingsRow({ booking }) {
  return (
    <Table.Row>
      <Item>{booking.cabins.cabinName}</Item>
      <Item>
        <FullName>{booking.guests.fullName}</FullName>
        <Email>{booking.guests.email}</Email>
      </Item>
      <Item>
        <NumOfNights>
          {isToday(new Date(booking.startDate))
            ? "Today"
            : formatDistanceFromNow(booking.startDate)}{" "}
          <Arrow>&rarr;</Arrow>
          {booking.numNights} night stay
        </NumOfNights>
        <StartEnd>
          {format(new Date(booking.startDate), "MMM dd yyyy")} -{" "}
          {format(new Date(booking.endDate), "MMM dd yyyy")}
        </StartEnd>
      </Item>
      <Item>
        <Tag type={statusToTagName[booking.status]}>
          {booking.status.replace("-", " ")}
        </Tag>
      </Item>
      <Item>{formatCurrency(booking.totalPrice)}</Item>
      <Item>
        <Menus>
          <Menus.Menu>
            <Menus.Toggle name={booking.cabinId} />
            <Menus.List name={booking.cabinId}>
              <Menus.Action>
                <FaEye /> See Details
              </Menus.Action>
              <Menus.Action>
                <PiCalendarCheckBold /> Check in
              </Menus.Action>
              <Menus.Action>
                {" "}
                <MdDelete /> Delete Booking
              </Menus.Action>
            </Menus.List>
          </Menus.Menu>
        </Menus>
      </Item>
    </Table.Row>
  );
}
