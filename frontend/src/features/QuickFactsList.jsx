/* eslint-disable react/prop-types */
import { FaArrowUp, FaCalendar, FaStar, FaUser } from "react-icons/fa";

function QuickFactsList({ tour }) {
  const { difficulty, startDates, maxGroupSize, ratingsAverage } = tour;
  const dateStr = new Date(startDates[1]);
  const year = dateStr.getFullYear();
  const month = dateStr.toLocaleString("default", { month: "long" });
  return (
    <ul className="overview-box__group">
      <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>

      <li className="overview-box__detail">
        <FaCalendar color="#55c57a" />
        <span className="overview-box__label">Next Date</span>
        <span className="overview-box__text">
          {month} {year}
        </span>
      </li>

      <li className="overview-box__detail">
        <FaArrowUp color="#55c57a" />
        <span className="overview-box__label">Difficulty</span>
        <span className="overview-box__text">{difficulty}</span>
      </li>

      <li className="overview-box__detail">
        <FaUser color="#55c57a" />
        <span className="overview-box__label">Participants</span>
        <span className="overview-box__text">{maxGroupSize} people</span>
      </li>

      <li className="overview-box__detail">
        <FaStar color="#55c57a" />
        <span className="overview-box__label">Rating</span>
        <span className="overview-box__text">{ratingsAverage} / 5</span>
      </li>
    </ul>
  );
}

export default QuickFactsList;
