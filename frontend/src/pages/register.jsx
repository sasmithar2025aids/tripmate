import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        alert("Registration successful!");
        navigate("/login");
    };

    return (
        <div className="register-page">
            <div className="register-card">

                <h1>TripMate</h1>

                <h2>User Registration</h2>

                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="register-btn">
                        Register
                    </button>

                </form>

                <p>Already have an account?</p>

                <button
                    className="register-login-btn"
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>

            </div>
        </div>
    );
}

export default Register;