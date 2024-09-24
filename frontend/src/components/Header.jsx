import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useCurrentUserPhoto } from "../hooks/useCurrentUserPhoto";

function Header() {
  const { currentUser, logoutUser } = useUser();
  const username = currentUser?.name.split(" ")[0];
  console.log(currentUser);

  const currentUserPhoto = useCurrentUserPhoto(currentUser?.photo);

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link to="/tours" className="nav__el">
          All tours
        </Link>
        <form className="nav__search">
          <button className="nav__search-btn"></button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form>
      </nav>
      <div className="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        {currentUser && (
          // <a className="nav__el text-sm text-nowrap">My bookings</a>
          <Link to="/booking" className="nav__el text-sm text-nowrap">
            My bookings
          </Link>
        )}

        {currentUser && (
          <button className="nav__el" onClick={logoutUser}>
            Log out
          </button>
        )}

        {currentUser && (
          <Link to="/me" className="nav__el">
            <img
              src={currentUserPhoto}
              alt="User photo"
              className="nav__user-img"
            />

            <span>{username}</span>
          </Link>
        )}

        {!currentUser && (
          <Link to={`/users/login`} className="nav__el">
            Log in
          </Link>
        )}
        {!currentUser && (
          <Link to="/users/signup" className="nav__el nav__el--cta">
            Sign up
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
