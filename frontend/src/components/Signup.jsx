import { useForm } from "react-hook-form";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const { signup, isPending, isError, error } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    signup(data);
  }

  if (isPending) return <LoadingPage />;
  if (isError) return <ErrorPage message={error.message} />;

  return (
    <main className="main">
      <div className="form-container"> {/* Updated for consistency */}
        <h2 className="heading-secondary ma-bt-lg">Create your account</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form__input"
              placeholder="Your name"
              required
              name="name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="form__input"
              placeholder="you@example.com"
              required
              name="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

  

          {/* Password */}
          <div className="form__group">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form__input"
              placeholder="••••••••"
              required
              minLength="8"
              name="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="passwordConfirm">
              Confirm Password
            </label>
            <input
              id="passwordConfirm"
              type="password"
              className="form__input"
              placeholder="••••••••"
              required
              name="passwordConfirm"
              {...register("passwordConfirm", {
                required: "Please confirm your password",
                validate: (value, { password }) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.passwordConfirm && (
              <p>{errors.passwordConfirm.message}</p>
            )}
          </div>

          {/* Submit button */}
          <div className="form__group button-container">
            <button className="btn btn--green" type="submit">
              Signup
            </button>
</div>
        </form>
      </div>
    </main>
  );
}

export default Signup;
