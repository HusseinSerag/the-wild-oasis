import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import TodayItem from "./TodayItem";
import { useActive } from "./useActiveStays";
import Spinner from "../../ui/Spinner";
import useCheckout from "./useCheckout";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0.8rem;
`;
const Header = styled(Heading)`
  text-align: left;
  font-weight: 600;
`;
function Today() {
  const { isLoading, activeUsers, error } = useActive();

  return (
    <StyledToday>
      <Row type="horizontal">
        <Header as="h2">Today</Header>
      </Row>
      <Row>
        {isLoading ? (
          <Spinner />
        ) : (
          <TodayList>
            {error ? (
              <NoActivity>Error loading data!</NoActivity>
            ) : activeUsers?.length ? (
              activeUsers.map((booking) => (
                <TodayItem booking={booking} key={booking.id} />
              ))
            ) : (
              <NoActivity>No activities today!</NoActivity>
            )}
          </TodayList>
        )}
      </Row>
    </StyledToday>
  );
}

export default Today;
