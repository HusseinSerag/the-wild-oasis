import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings } from "../../services/settingsApi";
import toast from "react-hot-toast";

export default function useEditSettings() {
  const queryClient = useQueryClient();
  const { mutate: editSettings, isLoading: isEditing } = useMutation({
    mutationFn: (newSettings) => updateSettings(newSettings),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      toast.success("Settings edited successfully!");
    },
    onError: (err) => toast.error(err.message),
  });

  return { editSettings, isEditing };
}
