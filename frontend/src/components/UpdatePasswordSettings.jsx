import { useForm } from "react-hook-form";
import { useUpdatePassword } from "../hooks/useUpdatePassword";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

function UpdatePasswordSettings() {
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending, isError, error } = useUpdatePassword();

  function onSubmit(data) {
    mutate(data);
    reset();
  }
  if (isPending) return <LoadingPage />;
  if (isError) return <ErrorPage message={error.message} />;
  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Password change</h2>
      <form
        className="form form-user-settings"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form__group">
          <label className="form__label" htmlFor="password-current">
            Current password
          </label>
          <input
            id="password-current"
            className="form__input"
            type="password"
            placeholder="••••••••"
            required
            minLength="8"
            name="passwordCurrent"
            {...register("passwordCurrent", {
              required: "The current password is required",
            })}
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="password">
            New password
          </label>
          <input
            id="password"
            className="form__input"
            type="password"
            placeholder="••••••••"
            required
            minLength="8"
            name="password"
            {...register("password", { required: "New password is required" })}
          />
        </div>
        <div className="form__group ma-bt-lg">
          <label className="form__label" htmlFor="password-confirm">
            Confirm password
          </label>
          <input
            id="password-confirm"
            className="form__input"
            type="password"
            placeholder="••••••••"
            required
            minLength="8"
            name="passwordConfirm"
            {...register("passwordConfirm", {
              required: "password confirm is required",
            })}
          />
        </div>
        <div className="form__group right">
          <button className="btn btn--small btn--green" type="submit">
            Save password
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePasswordSettings;
