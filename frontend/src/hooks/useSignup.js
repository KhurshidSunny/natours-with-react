import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../api";
import toast from "react-hot-toast";

export function useSignup() {
  const {
    mutate: signup,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: (data) => signupUser(data),
    onSuccess: () => {
      toast.success("Your account is created successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { signup, isPending, isError, error };
}
