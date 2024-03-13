import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/bookingsApi";

export function useActive() {
  const {
    isLoading,
    error,
    data: activeUsers,
  } = useQuery({
    queryKey: ["activity-today"],
    queryFn: () => getStaysTodayActivity(),
  });

  return { isLoading, error, activeUsers };
}
