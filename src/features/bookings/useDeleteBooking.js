import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/bookingsApi";

export default function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteCurrentBooking, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({
        active: true,
      });
      toast.success("Booking deleted successfully");
    },
    onError: (error) => toast.error(error.message),
  });
  return { deleteCurrentBooking, isDeleting };
}
