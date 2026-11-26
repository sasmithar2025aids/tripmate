import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import MyTrips from "./pages/MyTrips";
import ExploreTrips from "./pages/ExploreTrips";
import TripDetails from "./pages/TripDetails";
import Itinerary from "./pages/Itinerary";
import Expenses from "./pages/Expenses";
import GroupChat from "./pages/GroupChat";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/admin-login" element={<AdminLogin />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/create-trip" element={<CreateTrip />} />

      <Route path="/my-trips" element={<MyTrips />} />

      <Route path="/explore-trips" element={<ExploreTrips />} />

      <Route path="/trip-details" element={<TripDetails />} />

      <Route path="/itinerary" element={<Itinerary />} />

      <Route path="/expenses" element={<Expenses />} />

      <Route path="/group-chat" element={<GroupChat />} />

      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}

export default App;