import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/bookingsApi";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../util/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const filter = searchParams.get("status") || "all";
  const order = searchParams.get("sort") || "";
  const page = +searchParams.get("page") || 0;

  const {
    data = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, order, page],
    queryFn: () => getBookings(filter, order, page),
  });

  const MaxNoOfPages = Math.ceil(data?.count / PAGE_SIZE);
  if (page < MaxNoOfPages - 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, order, page + 1],
      queryFn: () => getBookings(filter, order, page + 1),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, order, page - 1],
      queryFn: () => getBookings(filter, order, page - 1),
    });
  }

  return { isLoading, error, data };
}
