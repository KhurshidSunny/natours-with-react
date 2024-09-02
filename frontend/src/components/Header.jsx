function Header() {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a href="/overview.html" className="nav__el">
          All tours
        </a>
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
        <img src="img/logo-white.png" alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        <a href="#" className="nav__el text-sm text-nowrap">
          My bookings
        </a>
        <button className="nav__el">Log out</button>
        <a href="#" className="nav__el">
          <img
            src="img/users/user-1.jpg"
            alt="User photo"
            className="nav__user-img"
          />
          <span>Jonas</span>
        </a>

        <button className="nav__el">Log in</button>
        <button className="nav__el nav__el--cta">Sign up</button>
      </nav>
    </header>
  );
}

export default Header;
