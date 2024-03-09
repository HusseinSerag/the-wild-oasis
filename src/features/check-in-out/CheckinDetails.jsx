import styled from "styled-components";
import UseNavigateToSpecificPage from "../../hooks/UseGoBack";
import AppButton from "../../ui/Button";
import Heading from "../../ui/Heading";

import { FaArrowLeftLong } from "react-icons/fa6";

import Spinner from "../../ui/Spinner";
import BookingBox from "../bookings/BookingBox";
import useBooking from "../bookings/useBooking";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../util/helpers";
import useCheckin from "./useCheckin";
import toast from "react-hot-toast";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  color: var(--color-brand-600);

  background: none;
  border: none;

  &:hover {
    color: var(--color-brand-900);
  }
`;

const Text = styled.div`
  font-size: 1.5rem;
`;

const HeadingGroup = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 2rem 4rem;
`;
export default function CheckInDetails() {
  const [confirmPayment, setConfirmPayment] = useState(false);

  const go = UseNavigateToSpecificPage();
  const { booking, isLoading, error } = useBooking();

  const { isLoading: isCheckingin, checkinGuest } = useCheckin();

  useEffect(
    function () {
      setConfirmPayment(booking?.isPaid || false);
    },
    [booking?.isPaid]
  );
  if (isLoading) return <Spinner />;
  if (error) return <Heading>{error.message}</Heading>;

  function handleCheckin() {
    if (!confirmPayment) return;

    checkinGuest(booking.id);
    go("/bookings?status=checked-in");
  }
  return (
    <>
      <Container>
        <HeadingGroup>
          <Heading as="h1">Check in booking #{booking.id}</Heading>
        </HeadingGroup>
        <Button variation="secondary" onClick={() => go()}>
          <FaArrowLeftLong />
          <Text>Back</Text>
        </Button>
      </Container>
      <BookingBox booking={booking} />
      <Box>
        <Checkbox
          label="confirm"
          value={confirmPayment}
          onChange={() => setConfirmPayment((c) => !c)}
        >
          I confirm that {booking.guests.fullName} has paid in full amount of{" "}
          {formatCurrency(booking.totalPrice)}
        </Checkbox>
      </Box>
      <ButtonGroup>
        <AppButton
          variation="primary"
          onClick={handleCheckin}
          size="lg"
          disabled={!confirmPayment || isCheckingin}
        >
          Check in Booking # {booking.id}
        </AppButton>
        <AppButton onClick={() => go()} variation="secondary" size="lg">
          Back
        </AppButton>
      </ButtonGroup>
    </>
  );
}
