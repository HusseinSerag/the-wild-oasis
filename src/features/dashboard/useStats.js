import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getStats } from "../../services/bookingsApi";
import { subDays } from "date-fns";

export function useStats() {
  const [searchParams] = useSearchParams();
  const last = +searchParams.get("last") || 7;
  const date = subDays(new Date(), last).toISOString();

  const {
    error,
    isLoading,
    data: stats,
  } = useQuery({
    queryKey: ["stats", last],
    queryFn: () => getStats(date),
  });

  return { error, isLoading, stats, last };
}
