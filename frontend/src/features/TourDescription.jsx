/* eslint-disable react/prop-types */
import QuickFactsList from "./QuickFactsList";
import TourDescriptionBox from "./TourDescriptionBox";
import TourGuideList from "./TourGuideList";

function TourDescription({ tour }) {
  console.log(tour.guides);
  return (
    <section className="section-description">
      <div className="overview-box">
        <div>
          <QuickFactsList tour={tour} />
          <TourGuideList guides={tour.guides} />
        </div>
      </div>

      <TourDescriptionBox />
    </section>
  );
}

export default TourDescription;
