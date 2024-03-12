import styled from "styled-components";
import UseNavigateToSpecificPage from "../../hooks/UseGoBack";
import AppButton from "../../ui/Button";
import Heading from "../../ui/Heading";

import { FaArrowLeftLong } from "react-icons/fa6";
import Tag from "../../ui/Tag";
import { statusToTagName } from "../../util/constants";
import useBooking from "./useBooking";
import Spinner from "../../ui/Spinner";
import BookingBox from "./BookingBox";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteBooking from "./useDeleteBooking";
import useCheckout from "../check-in-out/useCheckout";

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
export default function BookingDetails() {
  const go = UseNavigateToSpecificPage();
  const { booking, isLoading, error } = useBooking();
  const { deleteCurrentBooking, isDeleting } = useDeleteBooking();
  const { checkoutGuest, isLoading: isCheckingOut } = useCheckout();

  if (isLoading) return <Spinner />;
  if (error) return <Heading>{error.message}</Heading>;

  function handleDelete() {
    deleteCurrentBooking(booking.id, {
      onSuccess: () => go("/bookings"),
    });
  }

  function handleCheckout() {
    checkoutGuest(booking.id);
  }
  return (
    <>
      <Container>
        <HeadingGroup>
          <Heading as="h1">Booking #{booking.id}</Heading>
          <Tag type={statusToTagName[booking.status]}>
            {booking.status.replace("-", " ")}
          </Tag>
        </HeadingGroup>
        <Button variation="secondary" onClick={() => go()}>
          <FaArrowLeftLong />
          <Text>Back</Text>
        </Button>
      </Container>
      <BookingBox booking={booking} />
      <ButtonGroup>
        {booking.status === "unconfirmed" && (
          <AppButton
            onClick={() => go(`/checkin/${booking.id}`)}
            variation="primary"
            size="lg"
          >
            Check in
          </AppButton>
        )}
        {booking.status === "checked-in" && (
          <AppButton onClick={handleCheckout} variation="primary" size="lg">
            Check out
          </AppButton>
        )}
        <Modal>
          <Modal.Button
            opens="delete"
            render={(click) => (
              <AppButton onClick={click} variation="danger" size="lg">
                Delete booking
              </AppButton>
            )}
          />

          <Modal.Content
            name="delete"
            render={(close) => (
              <ConfirmDelete
                onClose={close}
                resourceName={`Booking #${booking.id}`}
                onConfirm={handleDelete}
                disabled={isDeleting}
              />
            )}
          />
        </Modal>

        <AppButton onClick={() => go()} variation="secondary" size="lg">
          Back
        </AppButton>
      </ButtonGroup>
    </>
  );
}
