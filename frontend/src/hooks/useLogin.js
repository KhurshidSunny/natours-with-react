import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLogin() {
  const { getCurrentUser } = useUser();
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: () => {
      getCurrentUser();
      toast.success("successfully Login");
      navigate("/tours");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { mutate, isPending, isError, error };
}
