import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const styles = {
  errorContainer: {
    // backgroundColor: "#f7f7f7",
    backgroundColor: "#55c57a",
    color: "#d9534f", // Red for error messages
    padding: "2rem",
    borderRadius: "5px",
    border: "1px solid #d9534f",
    textAlign: "center",
    margin: "2rem auto",
    maxWidth: "80rem",
  },
  errorTitle: {
    fontSize: "2rem",
    fontWeight: "700",
  },
  errorMessage: {
    fontSize: "1.6rem",
    fontWeight: "300",
    marginBottom: "10px",
  },
};
function ErrorPage({ message }) {
  return (
    <div style={styles.errorContainer}>
      <h2 style={styles.errorTitle}>Oops! Something went wrong.</h2>
      <p style={styles.errorMessage}>
        {message || "An unknown error occurred."}
      </p>
      <Link
        style={{
          padding: "10px",
          backgroundColor: "#f7f7f7",
          border: "none",
          fontSize: "12px",
          borderRadius: "2px",
          cursor: "pointer",
          textDecoration: "none",
        }}
        to="/"
      >
        Try Again
      </Link>
    </div>
  );
}

export default ErrorPage;
