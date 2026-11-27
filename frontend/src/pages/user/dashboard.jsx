import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>TripMate User Dashboard</h1>
            <h2>Welcome to TripMate!</h2>

            <button onClick={() => navigate("/createtrip")}>
                Create Trip
            </button>

            <button onClick={() => navigate("/mytrips")}>
                My Trips
            </button>

            <button onClick={() => navigate("/exploretrips")}>
                Explore Trips
            </button>

            <button onClick={() => navigate("/profile")}>
                Profile
            </button>

            <button onClick={() => navigate("/login")}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;