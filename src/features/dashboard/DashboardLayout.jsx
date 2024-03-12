import styled from "styled-components";

import DashboardStats from "./DashboardStats";
import DashboardList from "./DashboardList";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import useCabins from "../cabins/useCabins";
import { useStays } from "./useStays";
import { useStats } from "./useStats";
import DashboardChart from "./DashboardChart";

const StyledDashboardLayout = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default function DashboardLayout() {
  const {
    isLoading: isStats,
    error,
    stats: bookings,
    last: numNights,
  } = useStats();
  const {
    isLoading: isStays,
    error: staysError,
    confirmed: stays,
  } = useStays();

  const { cabins, isLoading: isCabins, error: cabinError } = useCabins();
  if (isStats || isStays || isCabins) return <Spinner />;
  if (error || staysError || cabinError)
    return <Heading as="h2">Error occured while fetching data</Heading>;
  return (
    <StyledDashboardLayout>
      <DashboardStats
        bookings={bookings}
        stays={stays}
        numNights={numNights}
        cabins={cabins}
      />
      <DashboardList stays={stays} />
      <DashboardChart numNights={numNights} bookings={bookings} />
    </StyledDashboardLayout>
  );
}
