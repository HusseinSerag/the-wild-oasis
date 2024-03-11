import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/auth";
import UseNavigateToSpecificPage from "../../hooks/UseGoBack";
import toast from "react-hot-toast";

export default function useLogin() {
  const go = UseNavigateToSpecificPage();
  const queryClient = useQueryClient();
  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData("user", data.user);
      go("/dashboard");

      toast.success("You have successfully logged in!");
    },
    onError: (error) => toast.error("Incorrect username or password"),
  });

  return { loginUser, isPending };
}
