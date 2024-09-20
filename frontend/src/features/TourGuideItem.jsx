/* eslint-disable no-unused-vars */

import { useFetchPhoto } from "../hooks/useFetchPhoto";

/* eslint-disable react/prop-types */
function TourGuideItem({ src, guideRole, guideName }) {
  const photo = useFetchPhoto(src, "users");
  return (
    <li className="overview-box__detail">
      <img src={photo} alt="Role DB" className="overview-box__img" />
      <span className="overview-box__label">{guideRole}</span>
      <span className="overview-box__text">{guideName}</span>
    </li>
  );
}

export default TourGuideItem;
