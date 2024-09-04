/* eslint-disable react/prop-types */
import { FaCalendar, FaFlag, FaMapMarker, FaUser } from "react-icons/fa";
function TourCardDetails({ tour }) {
  const dateStr = new Date(tour.startDates[0]);
  const year = dateStr.getFullYear();
  const month = dateStr.toLocaleString("default", { month: "long" });

  return (
    <div className="card__details">
      <h4 className="card__sub-heading">Easy {tour.duration}-day tour</h4>
      <p className="card__text">{tour.summary}</p>
      <div className="card__data">
        <FaMapMarker size={20} color="#55c57a" />

        <span>{tour.startLocation.description}</span>
      </div>
      <div className="card__data">
        <FaCalendar size={20} color="#55c57a" />

        <span>
          {month} {year}
        </span>
      </div>
      <div className="card__data">
        <FaFlag size={20} color="#55c57a" />

        <span>{tour.locations.length} stops</span>
      </div>
      <div className="card__data">
        <FaUser size={20} color="#55c57a" />

        <span>{tour.maxGroupSize} people</span>
      </div>
    </div>
  );
}

export default TourCardDetails;
