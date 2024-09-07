import {
  FaCog,
  FaBriefcase,
  FaStar,
  FaCreditCard,
  FaMap,
  FaUsers,
} from "react-icons/fa"; // Import icons
import { useUser } from "../context/UserContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useUpdateMe } from "../hooks/useUpdateMe";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import UpdatePasswordSettings from "./UpdatePasswordSettings";

function Account() {
  const { currentUser } = useUser();

  const { updateUserSettings, isPending, isError, error } = useUpdateMe();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: currentUser?.name, email: currentUser?.email },
  });

  useEffect(() => {
    if (currentUser) {
      reset({
        name: currentUser?.name,
        email: currentUser?.email,
      });
    }
  }, [currentUser, reset]);

  function onSubmit(data) {
    updateUserSettings(data);
    console.log(data);
  }

  if (isPending) return <LoadingPage />;
  if (isError) return <ErrorPage message={error.message} />;
  return (
    <main className="main">
      <div className="user-view">
        <nav className="user-view__menu">
          <ul className="side-nav">
            <li className="side-nav--active">
              <a href="#">
                <FaCog />
                Settings
              </a>
            </li>
            <li>
              <a href="#">
                <FaBriefcase />
                My bookings
              </a>
            </li>
            <li>
              <a href="#">
                <FaStar />
                My reviews
              </a>
            </li>
            <li>
              <a href="#">
                <FaCreditCard />
                Billing
              </a>
            </li>
          </ul>

          {currentUser?.role === "admin" && (
            <div className="admin-nav">
              <h5 className="admin-nav__heading">{currentUser?.role}</h5>
              <ul className="side-nav">
                <li>
                  <a href="#">
                    <FaMap />
                    Manage tours
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaUsers />
                    Manage users
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaStar />
                    Manage reviews
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaBriefcase />
                    Manage bookings
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>

        <div className="user-view__content">
          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">
              Your account settings
            </h2>
            <form
              className="form form-user-data"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form__group">
                <label className="form__label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="form__input"
                  type="text"
                  // value={currentUser?.name}
                  required
                  {...register("name")}
                />
              </div>
              <div className="form__group ma-bt-md">
                <label className="form__label" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  className="form__input"
                  type="email"
                  // value={currentUser?.email}
                  required
                  {...register("email", {
                    required: "Please enter valid email",
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="form__group form__photo-upload">
                <img
                  className="form__user-photo"
                  src={`/img/users/${currentUser?.photo}`}
                  alt="User photo"
                />
                <a href="#" className="btn-text">
                  Choose new photo
                </a>
              </div>
              <div className="form__group right">
                <button className="btn btn--small btn--green" type="submit">
                  Save settings
                </button>
              </div>
            </form>
          </div>

          <div className="line">&nbsp;</div>

          <UpdatePasswordSettings />
        </div>
      </div>
    </main>
  );
}

export default Account;
