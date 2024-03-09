import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkin } from "../../services/checkinApi";
import toast from "react-hot-toast";

export default function useCheckin() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: checkinGuest } = useMutation({
    mutationFn: checkin,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        active: true,
      });

      toast.success(`Booking #${data.id} successfully checked in`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, checkinGuest };
}
