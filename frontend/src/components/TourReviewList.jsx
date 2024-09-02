import TourReviewItem from "./TourReviewItem";

function TourReviewList() {
  return (
    <section className="section-reviews">
      <ul className="reviews">
        <TourReviewItem />
        <TourReviewItem />
        <TourReviewItem />
        <TourReviewItem />
        <TourReviewItem />
      </ul>
    </section>
  );
}

export default TourReviewList;
