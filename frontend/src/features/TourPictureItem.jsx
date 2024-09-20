import { useFetchPhoto } from "../hooks/useFetchPhoto";

/* eslint-disable react/prop-types */
function TourPictureItem({ src, imgNo }) {
  const photo = useFetchPhoto(src, "tours");
  return (
    <li className="picture-box">
      <img
        className={`picture-box__img picture-box__img--${imgNo}`}
        src={photo}
        alt={photo}
      />
    </li>
  );
}

export default TourPictureItem;
