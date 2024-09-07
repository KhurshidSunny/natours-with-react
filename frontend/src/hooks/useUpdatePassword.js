import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../api";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data) => updatePassword(data),
    onSuccess: (data) => {
      toast.success("Password successfully updated");
      console.log(data);
    },
    onError: (err) => {
      toast.error(`Error: ${err.message}`);
    },
  });

  return { mutate, isPending, isError, error };
}
