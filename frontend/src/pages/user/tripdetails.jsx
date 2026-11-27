import { useNavigate } from "react-router-dom";

function TripDetails() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Trip Details</h1>

      <button onClick={() => navigate("/itinerary")}>
        Itinerary
      </button>

      <button onClick={() => navigate("/expenses")}>
        Expenses
      </button>

      <button onClick={() => navigate("/groupchat")}>
        Group Chat
      </button>
    </div>
  );
}

export default TripDetails;