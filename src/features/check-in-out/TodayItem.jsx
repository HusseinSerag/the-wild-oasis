import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";

import UseNavigateToSpecificPage from "../../hooks/UseGoBack";
import useCheckout from "./useCheckout";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 1.5rem 2fr 10rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1.5rem 1fr 9rem;
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
const Button = styled.button`
  color: var(--color-brand-50);
  background-color: var(--color-brand-600);
  border: none;
  border-radius: var(--border-radius-sm);

  text-transform: uppercase;
  font-weight: 600;
  width: 9rem;
  font-size: 1.2rem;
  padding: 0.3rem 0.7rem;
`;
const styleToTag = {
  departing: "blue",
  arriving: "green",
};

const TagWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export default function TodayItem({ booking }) {
  const { isLoading: isCheckingOut, checkoutGuest } = useCheckout();
  const status = booking.status === "unconfirmed" ? "arriving" : "departing";

  const go = UseNavigateToSpecificPage();
  return (
    <StyledTodayItem>
      <TagWrapper>
        <Tag type={styleToTag[status]}>{status}</Tag>
      </TagWrapper>
      <Flag src={booking.guests.countryFlag} />
      <Guest>{booking.guests.fullName}</Guest>
      {status === "arriving" ? (
        <Button onClick={() => go(`/checkin/${booking.id}`)}>check in</Button>
      ) : (
        <Button
          disabled={isCheckingOut}
          onClick={() => checkoutGuest(booking.id)}
        >
          Check out
        </Button>
      )}
    </StyledTodayItem>
  );
}
