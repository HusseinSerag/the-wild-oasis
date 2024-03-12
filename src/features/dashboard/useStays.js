import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getStays } from "../../services/bookingsApi";
import { subDays } from "date-fns";

export function useStays() {
  const [searchParams] = useSearchParams();
  const last = +searchParams.get("last") || 7;
  const date = subDays(new Date(), last).toISOString();

  const {
    error,
    isLoading,
    data: stays,
  } = useQuery({
    queryKey: ["stays", last],
    queryFn: () => getStays(date),
  });

  const confirmed = stays?.filter((stay) => stay.status !== "unconfirmed");
  return { error, isLoading, confirmed };
}
