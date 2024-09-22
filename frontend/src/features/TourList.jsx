import ErrorPage from "../components/ErrorPage";
import LoadingPage from "../components/LoadingPage";
import { useGetAllTours } from "../hooks/useGetAllTours";
import TourItem from "./TourItem";

function TourList() {
  const { tours, isLoading, error, isError } = useGetAllTours("tours");
  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage message={error.message} />;

  return (
    <ul className="main">
      <div className="card-container">
        {tours.data.data.map((tour) => (
          <TourItem key={tour._id} tour={tour} />
        ))}
      </div>
    </ul>
  );
}

export default TourList;
