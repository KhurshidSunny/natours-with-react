function TourCardHeader() {
  return (
    <header className="card__header">
      <div className="card__picture">
        <div className="card__picture-overlay">&nbsp;</div>
        <img
          src="img/tours/tour-1-cover.jpg"
          alt="Tour 1"
          className="card__picture-img"
        />
      </div>

      <h3 className="heading-tertirary">
        <span>The Forest Hiker</span>
      </h3>
    </header>
  );
}

export default TourCardHeader;
