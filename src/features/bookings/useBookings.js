import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/bookingsApi";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("status") || "all";
  const order = searchParams.get("sort") || "";
  const page = +searchParams.get("page") || 0;

  const { data, isLoading, error } = useQuery({
    queryKey: ["bookings", filter, order, page],
    queryFn: () => getBookings(filter, order, page),
  });

  return { isLoading, error, data };
}
