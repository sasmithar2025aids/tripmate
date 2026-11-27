import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        navigate("/admindashboard");
    }

    return (
        <div>
            <h1>TripMate</h1>
            <h2>Admin Login</h2>

            <form onSubmit={handleLogin}>

                <label>Admin Email</label>
                <br />
                <input
                    type="email"
                    placeholder="Enter Admin Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <br /><br />

                <label>Password</label>
                <br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <br /><br />

                <button type="submit">Login</button>

            </form>

            <br />

            <button onClick={() => navigate("/login")}>
                Back to User Login
            </button>

        </div>
    );
}

export default AdminLogin;