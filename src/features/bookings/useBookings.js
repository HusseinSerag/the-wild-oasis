import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/bookingsApi";

export function useBookings() {
  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  return { bookings, isLoading, error };
}
