import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkout } from "../../services/checkinApi";
import toast from "react-hot-toast";

export default function useCheckout() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: checkinGuest } = useMutation({
    mutationFn: checkout,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        active: true,
      });

      toast.success(`Booking #${data.id} successfully checked out`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, checkinGuest };
}
