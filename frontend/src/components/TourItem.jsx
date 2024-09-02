import TourCardDetails from "./TourCardDetails";
import TourCardFooter from "./TourCardFooter";
import TourCardHeader from "./TourCardHeader";

function TourItem() {
  return (
    <li className="card">
      <TourCardHeader />
      <TourCardDetails />
      <TourCardFooter />
    </li>
  );
}

export default TourItem;
