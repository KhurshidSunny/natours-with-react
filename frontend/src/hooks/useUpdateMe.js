import { useMutation } from "@tanstack/react-query";
import { updateMe } from "../api";
import toast from "react-hot-toast";
import { useUser } from "../context/UserContext";

export function useUpdateMe() {
  const { getCurrentUser } = useUser();
  const {
    mutate: updateUserSettings,
    isPending,
    error,
    isError,
  } = useMutation({
    mutationFn: (data) => updateMe(data),
    onSuccess: () => {
      toast.success("Successfully updated setting");
      getCurrentUser();
    },
    onError: (err) => {
      toast.error("Could not update setting. Please try again");
      console.log(err.message);
    },
  });
  return { updateUserSettings, isPending, isError, error };
}
