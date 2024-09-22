import ErrorPage from "../components/ErrorPage";
import LoadingPage from "../components/LoadingPage";
import { useGetBooking } from "../hooks/useGetBooking";
import TourItem from "./TourItem";

function MyTours() {
  const { bookings, isBooking, isBookingError, bookingError } = useGetBooking();

  if (isBooking) return <LoadingPage />;
  if (isBookingError) return <ErrorPage message={bookingError.message} />;
  console.log(bookings.data.data);

  return (
    <ul className="main">
      <div className="card-container">
        {bookings.data.data.map((tour) => (
          <TourItem key={tour._id} tour={tour.tour} />
        ))}
      </div>
    </ul>
  );
}

export default MyTours;
