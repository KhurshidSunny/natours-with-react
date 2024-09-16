// import { FaArrowUp, FaCalendar, FaStar, FaUser } from "react-icons/fa";
import MapComponent from "../components/MapComponent";
import TourHeader from "./TourHeader";
import TourDescription from "./TourDescription";
import TourReviewList from "./TourReviewList";
import TourCTA from "./TourCTA";
import TourPicturesList from "./TourPictureList";
import { useGetTour } from "../hooks/useGetTour";
import { useParams } from "react-router";
import ErrorPage from "../components/ErrorPage";
import LoadingPage from "../components/LoadingPage";

function Tour() {
  const { tourId } = useParams();
  const { tour, isLoading } = useGetTour(tourId);
  if (isLoading) return <LoadingPage />;
  if (tour.status === "error")
    return <ErrorPage message={`There is no Tour with this ${tourId} ID`} />;
  return (
    <>
      <TourHeader tour={tour.data.doc} />
      <TourDescription tour={tour.data.doc} />
      <TourPicturesList tourImages={tour.data.doc.images} />
      <MapComponent allLocations={tour.data.doc.locations} />
      <TourReviewList reviews={tour.data.doc.reviews} />
      <TourCTA tour={tour.data.doc} />
    </>
  );
}

export default Tour;
