/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TourGuideItem from "./TourGuideItem";

// eslint-disable-next-line react/prop-types
function TourGuideList({ guides }) {
  return (
    <ul className="overview-box__group">
      <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
      {guides.map((guide) => (
        <TourGuideItem
          src={guide.photo}
          guideRole={guide.role}
          guideName={guide.name}
          key={guide._id}
        />
      ))}
    </ul>
  );
}

export default TourGuideList;
