/* eslint-disable react/prop-types */
import TourCardDetails from "./TourCardDetails";
import TourCardFooter from "./TourCardFooter";
import TourCardHeader from "./TourCardHeader";

function TourItem({ tour }) {
  const { name, imageCover } = tour;
  return (
    <li className="card">
      <TourCardHeader name={name} imageCover={imageCover} />
      <TourCardDetails tour={tour} />
      <TourCardFooter tour={tour} />
    </li>
  );
}

export default TourItem;
