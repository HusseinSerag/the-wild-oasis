import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCabin, editCabin } from "../../services/cabins";
import toast from "react-hot-toast";

export default function useMutateCabin({ isEditing = false, cabinId }) {
  const queryClient = useQueryClient();
  const { mutate, status } = useMutation({
    mutationFn: !isEditing
      ? (cabin) => addCabin(cabin)
      : (cabin) => editCabin(cabin, cabinId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
      toast.success(
        `${
          isEditing
            ? "Cabin edited successfully"
            : "Cabin successfully created!"
        }`
      );
    },
    onError: (err) => toast.error(err.message),
  });
  return { mutate, status };
}
