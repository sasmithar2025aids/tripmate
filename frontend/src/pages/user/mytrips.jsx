import { useNavigate } from "react-router-dom";

function MyTrips() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>My Trips</h1>

      <button onClick={() => navigate("/tripdetails")}>
        View Details
      </button>
    </div>
  );
}

export default MyTrips;