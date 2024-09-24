/* eslint-disable react/prop-types */
import { useFetchPhoto } from "../hooks/useFetchPhoto";
import TourCardDetails from "./TourCardDetails";
import TourCardFooter from "./TourCardFooter";
import TourCardHeader from "./TourCardHeader";

function TourItem({ tour }) {
  // const tourImageCover = useTourImageCover(tour?.imageCover);
  const photo = useFetchPhoto(tour?.imageCover, "tours");
  const { name } = tour;
  return (
    <li className="card">
      <TourCardHeader name={name} imageCover={photo} />
      <TourCardDetails tour={tour} />
      <TourCardFooter tour={tour} />
    </li>
  );
}

export default TourItem;
