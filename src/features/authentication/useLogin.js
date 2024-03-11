import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth";
import UseNavigateToSpecificPage from "../../hooks/UseGoBack";
import toast from "react-hot-toast";

export default function useLogin() {
  const go = UseNavigateToSpecificPage();
  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      go("/dashboard");
    },
    onError: (error) => toast.error("Incorrect username or password"),
  });

  return { loginUser, isPending };
}
