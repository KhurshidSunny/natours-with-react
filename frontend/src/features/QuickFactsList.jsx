import { FaArrowUp, FaCalendar, FaStar, FaUser } from "react-icons/fa";
import QuickFactsItem from "./QuickFactsItem";

function QuickFactsList() {
  return (
    <ul className="overview-box__group">
      <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>

      <QuickFactsItem label="Next date">
        <FaCalendar color="#55c57a" />
      </QuickFactsItem>

      <QuickFactsItem label="Difficulty">
        <FaArrowUp color="#55c57a" />
      </QuickFactsItem>

      <QuickFactsItem label="Participants">
        <FaUser color="#55c57a" />
      </QuickFactsItem>

      <QuickFactsItem label="Rating">
        <FaStar color="#55c57a" />
      </QuickFactsItem>
    </ul>
  );
}

export default QuickFactsList;
