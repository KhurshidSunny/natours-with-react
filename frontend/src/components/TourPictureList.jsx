import TourPictureItem from "./TourPictureItem";

function TourPicturesList() {
  return (
    <section className="section-pictures">
      <TourPictureItem src="img/tours/tour-5-1.jpg" imgNo={1} />
      <TourPictureItem src="img/tours/tour-5-2.jpg" imgNo={2} />
      <TourPictureItem src="img/tours/tour-5-3.jpg" imgNo={3} />
    </section>
  );
}

export default TourPicturesList;
