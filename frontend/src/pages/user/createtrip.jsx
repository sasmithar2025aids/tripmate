import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Create Trip</h1>

      <button onClick={() => navigate("/invitefriends")}>
        Invite Friends
      </button>
    </div>
  );
}

export default CreateTrip;