/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

function TourReviewItem({ review }) {
  return (
    <li className="reviews__card">
      <div className="reviews__avatar">
        <img
          src={`/img/users/${review.user.photo}`}
          alt={`${review.user.photo} image`}
          className="reviews__avatar-img"
        />
        <h6 className="reviews__user">{review.user.name}</h6>
      </div>
      <p className="reviews__text">{review.review}</p>
      <div className="reviews__rating">
        {Array.from({ length: 5 }, (_, i) => i).map((el) => {
          return (
            <div key={el}>
              {review.rating > el ? (
                <FaStar color="#55c57a" />
              ) : (
                <FaStar color="gray" />
              )}
            </div>
          );
        })}
      </div>
    </li>
  );
}

export default TourReviewItem;
