/* eslint-disable react/prop-types */
function TourGuideItem({ img }) {
  return (
    <li className="overview-box__detail">
      <img src={img} alt="Role DB" className="overview-box__img" />
      <span className="overview-box__label">Guide Role DB</span>
      <span className="overview-box__text">Guide Name DB</span>
    </li>
  );
}

export default TourGuideItem;
