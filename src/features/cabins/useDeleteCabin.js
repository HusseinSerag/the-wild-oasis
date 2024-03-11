import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/cabins";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });

      toast.success("Cabin deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isLoading, mutate };
}
