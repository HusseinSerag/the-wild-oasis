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
import { useNavigate } from "react-router-dom";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/bookingsApi";
import toast from "react-hot-toast";
import { statusToTagName } from "../../util/constants";
import useDeleteBooking from "./useDeleteBooking";
import UseNavigateToSpecificPage from "../../hooks/UseGoBack";

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

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const FlexRight = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;

export default function BookingsRow({ booking }) {
  const { deleteCurrentBooking, isDeleting } = useDeleteBooking();
  const go = UseNavigateToSpecificPage();
  return (
    <Table.Row>
      <Item>{booking.cabins.cabinName}</Item>
      <Item>
        <Vertical>
          <FullName>{booking.guests.fullName}</FullName>
          <Email>{booking.guests.email}</Email>
        </Vertical>
      </Item>
      <Item>
        <Vertical>
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
        </Vertical>
      </Item>
      <Item>
        <Tag type={statusToTagName[booking.status]}>
          {booking.status.replace("-", " ")}
        </Tag>
      </Item>
      <Item>{formatCurrency(booking.totalPrice)}</Item>
      <Item>
        <FlexRight>
          <Modal>
            <Menus>
              <Menus.Menu>
                <Menus.Toggle name={booking.cabinId} />
                <Menus.List name={booking.cabinId}>
                  <Menus.Action onClick={() => go(`/bookings/${booking.id}`)}>
                    <FaEye /> See Details
                  </Menus.Action>
                  {booking.status === "unconfirmed" && (
                    <Menus.Action onClick={() => go(`/checkin/${booking.id}`)}>
                      <PiCalendarCheckBold /> Check in
                    </Menus.Action>
                  )}
                  <Modal.Button
                    opens="delete-booking"
                    render={(click) => (
                      <Menus.Action onClick={click}>
                        {" "}
                        <MdDelete /> Delete Booking
                      </Menus.Action>
                    )}
                  />
                </Menus.List>
                <Modal.Content
                  name="delete-booking"
                  render={(close) => (
                    <ConfirmDelete
                      onClose={close}
                      resourceName={`Booking #${booking.id}`}
                      onConfirm={() => deleteCurrentBooking(booking.id)}
                      disabled={isDeleting}
                    />
                  )}
                />
              </Menus.Menu>
            </Menus>
          </Modal>
        </FlexRight>
      </Item>
    </Table.Row>
  );
}
