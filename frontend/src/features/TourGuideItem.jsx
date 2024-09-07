/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function TourGuideItem({ src, guideRole, guideName }) {
  return (
    <li className="overview-box__detail">
      <img
        src={`/img/users/${src}`}
        alt="Role DB"
        className="overview-box__img"
      />
      <span className="overview-box__label">{guideRole}</span>
      <span className="overview-box__text">{guideName}</span>
    </li>
  );
}

export default TourGuideItem;
