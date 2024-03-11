import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/auth";

export function useUsers() {
  const {
    isLoading,
    data: user,
    error,
    fetchStatus,
    isFetching,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
  });

  return { isLoading, user, error, fetchStatus, isFetching };
}
