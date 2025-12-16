import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import Admin from "./pages/AdminDashboard/AdminDashboard";
import DriverDashboard from "./pages/DriverDashboard/DriverDashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/driver" element={<DriverDashboard />}></Route>
      {/* both admin and chauffeur */}
    </Routes>
  );
}
export default App;
