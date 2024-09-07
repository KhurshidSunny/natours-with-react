const styles = {
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "30vh",
    backgroundColor: "#f7f7f7",
  },
  loader: {
    width: "5rem",
    height: "5rem",
    border: "5px solid #55c57a", // Using the same green accent
    borderTop: "5px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    marginTop: "2rem",
    fontSize: "1.6rem",
    color: "#777",
  },
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
};

function LoadingPage() {
  return (
    <div style={styles.loadingContainer}>
      <div style={styles.loader}></div>
      <p style={styles.loadingText}>Loading...</p>
    </div>
  );
}

export default LoadingPage;
