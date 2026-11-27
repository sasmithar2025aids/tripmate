import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(e) {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        navigate("/dashboard");
    }

    return (
        <div className="login-page">
            <div className="login-card">

                <h1>TripMate</h1>

                <h2>Login</h2>

                <form onSubmit={login}>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" className="login-btn">
                        Sign In
                    </button>

                </form>

                <p>Don't have an account?</p>

                <button
                    className="register-btn"
                    onClick={() => navigate("/register")}
                >
                    Register
                </button>

                <p className="admin-text">Are you an Admin?</p>

                <button
                    className="admin-btn"
                    onClick={() => navigate("/adminlogin")}
                >
                    Admin Login
                </button>

                <p className="project-title">
                    Travel Planning & Group Trip Management
                </p>

            </div>
        </div>
    );
}

export default Login;