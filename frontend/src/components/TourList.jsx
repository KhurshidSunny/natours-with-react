import TourItem from "./TourItem";

function TourList() {
  return (
    <ul className="main">
      <div className="card-container">
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
      </div>
    </ul>
  );
}

export default TourList;
