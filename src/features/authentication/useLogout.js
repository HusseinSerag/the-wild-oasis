import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/auth";

export default function useLogout() {
  const queryClient = useQueryClient();

  const { isPending, mutate: logoutUser } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      queryClient.removeQueries();
    },
  });
  return { logoutUser, isPending };
}
