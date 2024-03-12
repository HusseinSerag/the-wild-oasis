import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../../services/auth";
import toast from "react-hot-toast";

export default function useSignup() {
  const { isPending, mutate: signupUser } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signup(email, password, fullName),

    onSuccess: (user) =>
      toast.success("Account successfully created! Please verify your email!"),
  });
  return { signupUser, isPending };
}
