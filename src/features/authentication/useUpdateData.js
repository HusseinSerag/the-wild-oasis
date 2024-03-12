import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../services/auth";
import toast from "react-hot-toast";

export default function useUpdateData() {
  const queryClient = useQueryClient();
  const { mutate: updateData, isPending } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      toast.success("User information was updated successfully!");
    },
  });
  return { isPending, updateData };
}
