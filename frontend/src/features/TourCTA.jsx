/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router";
import { useUser } from "../context/UserContext";
import { loadStripe } from "@stripe/stripe-js";
import { stripeApi } from "../api";
import { useFetchPhoto } from "../hooks/useFetchPhoto";

// stripe public key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function TourCTA({ tour }) {
  const { currentUser } = useUser();
  const navigate = useNavigate();
  const { tourId } = useParams();
  const { images } = tour;

  const photo1 = useFetchPhoto(images[0], "tours");
  const photo2 = useFetchPhoto(images[1], "tours");
  const photo3 = useFetchPhoto(images[2], "tours");

  async function handleClick() {
    console.log('clicked')
    if (!currentUser) {
      navigate("/users/login");

      return;
    }


    stripeApi(stripePromise, currentUser, tourId);
  }

  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src="/img/logo-white.png" alt="Natours logo" className="" />
        </div>

        <img src={photo1} alt={photo1} className="cta__img cta__img--1" />
        <img src={photo2} alt={photo1} className="cta__img cta__img--2" />
        <img src={photo3} alt={photo1} className="cta__img cta__img--2" />

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            10 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button
            className="btn btn--green span-all-rows"
            onClick={handleClick}
          >
            {currentUser ? "Book tour now!" : "Login to Book tour"}
          </button>
        </div>
      </div>
    </section>
  );
}
export default TourCTA;
