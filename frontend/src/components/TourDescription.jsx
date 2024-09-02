import QuickFactsList from "./QuickFactsList";
import TourDescriptionBox from "./TourDescriptionBox";
import TourGuideList from "./TourGuideList";

function TourDescription() {
  return (
    <section className="section-description">
      <div className="overview-box">
        <div>
          <QuickFactsList />
          <TourGuideList />
        </div>
      </div>

      <TourDescriptionBox />
    </section>
  );
}

export default TourDescription;
