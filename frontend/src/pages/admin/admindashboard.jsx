import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <div className="admin-dashboard">

            <h1>TripMate Admin Dashboard</h1>
            <h2>Welcome Admin!</h2>

            <p>Manage your TripMate application here.</p>

            <div className="admin-buttons">

                <button onClick={() => navigate("/managetrips")}>
                    Manage Trips
                </button>

                <button onClick={() => navigate("/manageusers")}>
                    Manage Users
                </button>

                <button onClick={() => navigate("/reports")}>
                    View Reports
                </button>

            </div>

            <button
                className="logout-btn"
                onClick={() => navigate("/adminlogin")}
            >
                Logout
            </button>

        </div>
    );
}

export default AdminDashboard;