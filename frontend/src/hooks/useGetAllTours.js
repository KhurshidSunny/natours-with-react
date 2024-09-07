import { useQuery } from "@tanstack/react-query";
import { getTours } from "../api";

export function useGetAllTours() {
  const {
    data: tours,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });

  return { tours, isLoading, error, isError };
}
