import { useParams } from "react-router";
import { useGetTour } from "../hooks/useGetTour";
import QuickFactsList from "./QuickFactsList";
import TourDescriptionBox from "./TourDescriptionBox";
import TourGuideList from "./TourGuideList";

function TourDescription() {
  const { tourId } = useParams();
  const { tour } = useGetTour(tourId);

  return (
    <section className="section-description">
      <div className="overview-box">
        <div>
          <QuickFactsList tour={tour.data.doc} />
          <TourGuideList tour={tour.data.doc} />
        </div>
      </div>

      <TourDescriptionBox />
    </section>
  );
}

export default TourDescription;
