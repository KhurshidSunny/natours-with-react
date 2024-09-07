/* eslint-disable react/prop-types */
function TourPictureItem({ src, imgNo }) {
  return (
    <li className="picture-box">
      <img
        className={`picture-box__img picture-box__img--${imgNo}`}
        src={`/img/tours/${src}`}
        alt={src}
      />
    </li>
  );
}

export default TourPictureItem;
