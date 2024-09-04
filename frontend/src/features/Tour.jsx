// import { FaArrowUp, FaCalendar, FaStar, FaUser } from "react-icons/fa";
import MapComponent from "../components/MapComponent";
import TourHeader from "./TourHeader";
import TourDescription from "./TourDescription";
import TourReviewList from "./TourReviewList";
import TourCTA from "./TourCTA";
import TourPicturesList from "./TourPictureList";
import { useGetTour } from "../hooks/useGetTour";
import { useParams } from "react-router";

function Tour() {
  const { tourId } = useParams();
  const { tour, isLoading } = useGetTour(tourId);
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <TourHeader tour={tour.data.doc} />
      <TourDescription />
      <TourPicturesList />
      <MapComponent />
      <TourReviewList />
      <TourCTA />
    </>
  );
}

export default Tour;
