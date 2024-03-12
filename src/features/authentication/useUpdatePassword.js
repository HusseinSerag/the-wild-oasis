import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePassword } from "../../services/auth";
import toast from "react-hot-toast";

export default function useUpdatePassword() {
  const queryClient = useQueryClient();
  const { mutate: updateUserPassword, isPending } = useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      toast.success("User's password was updated successfully!");
    },
  });
  return { isPending, updateUserPassword };
}
