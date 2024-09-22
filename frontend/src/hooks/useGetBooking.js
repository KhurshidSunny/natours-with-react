import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../api";

export function useGetBooking() {
  const {
    data: bookings,
    isLoading: isBooking,
    isError: isBookingError,
    error: bookingError,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: getAllBookings,
  });

  return { bookings, isBooking, isBookingError, bookingError };
}
