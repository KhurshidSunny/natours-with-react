import { FaCalendar, FaFlag, FaMapMarker, FaUser } from "react-icons/fa";
function TourCardDetails() {
  return (
    <div className="card__details">
      <h4 className="card__sub-heading">Easy 5-day tour</h4>
      <p className="card__text">
        Breathtaking hike through the Canadian Banff National Park
      </p>
      <div className="card__data">
        <FaMapMarker size={20} color="#55c57a" />

        <span>Banff, Canada</span>
      </div>
      <div className="card__data">
        <FaCalendar size={20} color="#55c57a" />

        <span>April 2021</span>
      </div>
      <div className="card__data">
        <FaFlag size={20} color="#55c57a" />

        <span>3 stops</span>
      </div>
      <div className="card__data">
        <FaUser size={20} color="#55c57a" />

        <span>25 people</span>
      </div>
    </div>
  );
}

export default TourCardDetails;
