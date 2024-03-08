import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/bookingsApi";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("status") || "all";
  const order = searchParams.get("sort") || "";

  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, order],
    queryFn: () => getBookings(filter, order),
  });
  return { bookings, isLoading, error };
}
