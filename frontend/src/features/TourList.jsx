import { useGetAllTours } from "../hooks/useGetAllTours";
import TourItem from "./TourItem";

function TourList() {
  const { tours, isLoading, error } = useGetAllTours();
  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>Error: {error.message}</div>;

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
