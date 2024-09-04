import { useQuery } from "@tanstack/react-query";
import { getTour } from "../api";

export function useGetTour(tourId) {
  const {
    data: tour,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tour", tourId],
    queryFn: () => getTour(tourId),
    enabled: !!tourId, // Ensure the query only runs when id is available
  });

  return { tour, isLoading, error };
}
