import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import AdminLogin from "./pages/adminlogin";
import Register from "./pages/register";
import AdminDashboard from "./pages/admin/admindashboard";
import Dashboard from "./pages/user/dashboard";
import CreateTrip from "./pages/user/createtrip";
import MyTrips from "./pages/user/mytrips";
import ExploreTrips from "./pages/user/exploretrips";
import TripDetails from "./pages/user/tripdetails";
import Itinerary from "./pages/user/itinerary";
import Expenses from "./pages/user/expenses";
import GroupChat from "./pages/user/groupchat";
import InviteFriends from "./pages/user/invitefriends";
import Profile from "./pages/user/profile";
import ManageTrips from "./pages/admin/managetrips";
import ManageUsers from "./pages/admin/manageusers";
import Reports from "./pages/admin/reports";
function App() {

  return (
    <Routes>

      {/* Default Page */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/register" element={<Register />} />

      {/* Admin */}
      <Route path="/admindashboard" element={<AdminDashboard />} />

      {/* User Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* User Modules */}
      <Route path="/createtrip" element={<CreateTrip />} />
      <Route path="/mytrips" element={<MyTrips />} />
      <Route path="/exploretrips" element={<ExploreTrips />} />
      <Route path="/tripdetails" element={<TripDetails />} />
      <Route path="/itinerary" element={<Itinerary />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/groupchat" element={<GroupChat />} />
      <Route path="/invitefriends" element={<InviteFriends />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/managetrips" element={<ManageTrips />} />
      <Route path="/manageusers" element={<ManageUsers />} />
      <Route path="/reports" element={<Reports />} />
      
  

    </Routes>
  );

}

export default App;