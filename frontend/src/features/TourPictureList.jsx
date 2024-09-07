/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TourPictureItem from "./TourPictureItem";

// eslint-disable-next-line react/prop-types
function TourPicturesList({ tourImages }) {
  return (
    <section className="section-pictures">
      {tourImages.map((img, i) => (
        <TourPictureItem src={img} imgNo={i + 1} key={img} />
      ))}
    </section>
  );
}

export default TourPicturesList;
