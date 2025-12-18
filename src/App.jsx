import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import Admin from "./pages/AdminDashboard/AdminDashboard";
import DriverDashboard from "./pages/DriverDashboard/DriverDashboard";
import Trucks from "./pages/AdminDashboard/Trucks";
import Navbar from "./components/Nav";
import Drivers from "./pages/AdminDashboard/drivers";
import Trips from "./pages/AdminDashboard/Trips";
function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="addtruck" element={<Trucks />}></Route>
          <Route path="drivers" element={<Drivers />}></Route>
          <Route path="trips" element={<Trips />}></Route>
        </Route>
        <Route path="/driver" element={<DriverDashboard />}></Route>
        {/* both admin and chauffeur */}
      </Route>
    </Routes>
  );
}
export default App;
