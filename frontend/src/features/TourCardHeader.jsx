/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
function TourCardHeader({ name: tourName, imageCover }) {
  return (
    <header className="card__header">
      <div className="card__picture">
        <div className="card__picture-overlay">&nbsp;</div>
        <img
          src={imageCover}
          alt={`${tourName}-image`}
          className="card__picture-img"
        />
      </div>

      <h3 className="heading-tertirary">
        <span>{tourName}</span>
      </h3>
    </header>
  );
}

export default TourCardHeader;
