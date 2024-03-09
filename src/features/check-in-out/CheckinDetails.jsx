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
import useSettings from "../settings/useSettings";
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
  const [addBreakfast, setAddBreakfast] = useState(false);
  const go = UseNavigateToSpecificPage();
  const { booking, isLoading, error } = useBooking();

  const { isLoading: isCheckingin, checkinGuest } = useCheckin();

  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(
    function () {
      setConfirmPayment(booking?.isPaid || false);
      setAddBreakfast(booking?.hasBreakfast || false);
    },
    [booking?.isPaid, booking?.hasBreakfast]
  );

  if (isLoading || isLoadingSettings) return <Spinner />;
  if (error) return <Heading>{error.message}</Heading>;

  const breakfastPrice =
    settings.breakfastPrice * booking.numNights * booking.numGuests;

  const onSuccess = () => go("/bookings?status=checked-in");
  function handleCheckin() {
    if (!confirmPayment) return;
    if (addBreakfast) {
      checkinGuest(
        {
          id: booking.id,
          breakfast: {
            hasBreakfast: true,
            extraPrice: breakfastPrice,
            totalPrice: booking.totalPrice + breakfastPrice,
          },
        },
        {
          onSuccess: onSuccess,
        }
      );
    } else
      checkinGuest(
        { id: booking.id, breakfast: {} },
        {
          onSuccess: onSuccess,
        }
      );
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
      {!booking.hasBreakfast && (
        <Box>
          <Checkbox
            value={addBreakfast}
            onChange={() => {
              setAddBreakfast((c) => !c);
              setConfirmPayment(false);
            }}
            label="breakfast"
          >
            Want to add breakfast for {formatCurrency(breakfastPrice)}?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          label="confirm"
          value={confirmPayment}
          onChange={() => setConfirmPayment((c) => !c)}
          disabled={confirmPayment}
        >
          I confirm that {booking.guests.fullName} has paid in full amount of{" "}
          {addBreakfast
            ? `${formatCurrency(
                booking.totalPrice + breakfastPrice
              )} (${formatCurrency(booking.totalPrice)} + ${formatCurrency(
                breakfastPrice
              )})`
            : formatCurrency(booking.totalPrice)}
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
