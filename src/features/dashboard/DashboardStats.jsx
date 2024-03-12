import styled from "styled-components";
import Stats from "./Stats";
import { useStats } from "./useStats";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaDollarSign } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";

import { IoCalendarOutline } from "react-icons/io5";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";
import { useStays } from "./useStays";
import { formatCurrency } from "../../util/helpers";
import useCabins from "../cabins/useCabins";

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  gap: 1.5rem;
`;
export default function DashboardStats() {
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

  const totalBookings = bookings.length;
  const totalSales = bookings.reduce(
    (prev, current) => current.totalPrice + prev,
    0
  );
  const totalCheckIns = stays.length;

  //total number of nights occupied / number of nights * cabin count
  const totalOccupancy = Math.round(
    (stays.reduce((prev, current) => current.numNights + prev, 0) /
      (numNights * cabins.length)) *
      100
  );

  return (
    <Items>
      <Stats
        color={"blue"}
        title="Bookings"
        value={totalBookings}
        icon={<HiOutlineShoppingBag />}
      />
      <Stats
        color={"green"}
        title="Sales"
        value={formatCurrency(totalSales)}
        icon={<FaDollarSign />}
      />
      <Stats
        color={"indigo"}
        title={"Check ins"}
        value={totalCheckIns}
        icon={<IoCalendarOutline />}
      />
      <Stats
        color={"yellow"}
        value={`${totalOccupancy}%`}
        title={"Occupancy rate"}
        icon={<FaChartBar />}
      />
    </Items>
  );
}
