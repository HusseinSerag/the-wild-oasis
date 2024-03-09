import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/bookingsApi";
import { useParams } from "react-router-dom";

export default function useBooking() {
  const { bookingId: id } = useParams();
  const {
    isLoading,
    error,
    data: booking,
  } = useQuery({
    queryKey: ["booking", id],
    queryFn: () => getBooking(id),
    retry: false,
  });

  return { isLoading, error, booking };
}
