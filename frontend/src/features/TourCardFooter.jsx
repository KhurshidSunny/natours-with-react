import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function TourCardFooter({ tour }) {
  return (
    <footer className="card__footer">
      <p>
        <span className="card__footer-value">
          ${Math.round(tour.price / tour.maxGroupSize)}{" "}
        </span>
        <span className="card__footer-text">per person</span>
      </p>
      <p className="card__ratings">
        <span className="card__footer-value">
          {Math.round(tour.ratingsAverage * 10) / 10}{" "}
        </span>
        <span className="card__footer-text">
          rating ({tour.ratingsQuantity})
        </span>
      </p>
      <Link
        to={`/tours/${tour._id}`}
        href="#"
        className="btn btn--green btn--small"
      >
        Details
      </Link>
    </footer>
  );
}

export default TourCardFooter;
