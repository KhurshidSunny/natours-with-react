/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TourReviewItem from "./TourReviewItem";

function TourReviewList({ reviews }) {
  return (
    <section className="section-reviews">
      <ul className="reviews">
        {reviews.map((review) => (
          <TourReviewItem review={review} key={review.id} />
        ))}
      </ul>
    </section>
  );
}

export default TourReviewList;
