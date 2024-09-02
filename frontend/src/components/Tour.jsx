import { FaArrowUp, FaCalendar, FaStar, FaUser } from "react-icons/fa";
import MapComponent from "./MapComponent";
import TourHeader from "./TourHeader";
import TourDescription from "./TourDescription";
import TourReviewList from "./TourReviewList";
import TourCTA from "./TourCTA";
import TourPicturesList from "./TourPictureList";

function Tour() {
  return (
    <>
      <TourHeader />
      <TourDescription />
      <TourPicturesList />
      <MapComponent />
      <TourReviewList />
      <TourCTA />
    </>
  );
}

export default Tour;
