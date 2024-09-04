// import { FaArrowUp, FaCalendar, FaStar, FaUser } from "react-icons/fa";
import MapComponent from "./MapComponent";
import TourHeader from "../features/TourHeader";
import TourDescription from "../features/TourDescription";
import TourReviewList from "../features/TourReviewList";
import TourCTA from "../features/TourCTA";
import TourPicturesList from "../features/TourPictureList";

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
