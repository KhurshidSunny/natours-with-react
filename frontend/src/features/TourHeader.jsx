import { FaClock, FaMapMarker } from "react-icons/fa";
import { useTourImageCover } from "../hooks/useTourImageCover";

/* eslint-disable react/prop-types */
function TourHeader({ tour }) {
  const tourImageCover = useTourImageCover(tour?.imageCover);
  return (
    <section className="section-header">
      <div className="header__hero">
        <p className="header__hero-overlay">&nbsp;</p>
        <img
          src={tourImageCover}
          alt="Tour-5-cover image"
          className="header__hero-img"
        />
      </div>
      <div className="heading-box">
        <h1 className="heading-primary">
          <span>
            {/* The Park <br />
            Camper Tour */}
            {tour.name}
          </span>
        </h1>
        <div className="heading-box__group">
          <div className="heading-box__detail">
            <FaClock />

            <span className="heading-box__text">{tour.duration} days</span>
          </div>
          <div className="heading-box__detail">
            <FaMapMarker />
            <span className="heading-box__text">
              {tour.startLocation.description}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourHeader;
