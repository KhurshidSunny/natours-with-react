import TourGuideItem from "./TourGuideItem";

function TourGuideList() {
  return (
    <ul className="overview-box__group">
      <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
      <TourGuideItem img="img/users/user-19.jpg" />
      <TourGuideItem img="img/users/user-18.jpg" />
      <TourGuideItem img="img/users/user-17.jpg" />
    </ul>
  );
}

export default TourGuideList;
