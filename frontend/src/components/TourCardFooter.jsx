function TourCardFooter() {
  return (
    <footer className="card__footer">
      <p>
        <span className="card__footer-value">$297</span>
        <span className="card__footer-text">per person</span>
      </p>
      <p className="card__ratings">
        <span className="card__footer-value">4.9</span>
        <span className="card__footer-text">rating (21)</span>
      </p>
      <a href="#" className="btn btn--green btn--small">
        Details
      </a>
    </footer>
  );
}

export default TourCardFooter;
