/* eslint-disable react/prop-types */
import { useTourImageCover } from "../hooks/useTourImageCover";
import TourCardDetails from "./TourCardDetails";
import TourCardFooter from "./TourCardFooter";
import TourCardHeader from "./TourCardHeader";

function TourItem({ tour }) {
  const tourImageCover = useTourImageCover(tour?.imageCover);
  const { name } = tour;
  return (
    <li className="card">
      <TourCardHeader name={name} imageCover={tourImageCover} />
      <TourCardDetails tour={tour} />
      <TourCardFooter tour={tour} />
    </li>
  );
}

export default TourItem;
