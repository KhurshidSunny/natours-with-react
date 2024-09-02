/* eslint-disable no-unused-vars */
import { FaCalendar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function QuickFactsItem({ children, label }) {
  return (
    <li className="overview-box__detail">
      {children}

      <span className="overview-box__label">{label}</span>
      <span className="overview-box__text">DB Text</span>
    </li>
  );
}

export default QuickFactsItem;
