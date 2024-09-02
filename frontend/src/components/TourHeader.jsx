import { FaClock, FaMapMarker } from "react-icons/fa";

function TourHeader() {
  return (
    <section className="section-header">
      <div className="header__hero">
        <p className="header__hero-overlay">&nbsp;</p>
        <img
          src="img/tours/tour-5-cover.jpg"
          alt="Tour-5-cover image"
          className="header__hero-img"
        />
      </div>
      <div className="heading-box">
        <h1 className="heading-primary">
          <span>
            The Park <br />
            Camper Tour
          </span>
        </h1>
        <div className="heading-box__group">
          <div className="heading-box__detail">
            <FaClock />

            <span className="heading-box__text">10 days</span>
          </div>
          <div className="heading-box__detail">
            <FaMapMarker />
            <span className="heading-box__text">Las Vegas, USA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourHeader;
