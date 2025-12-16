import { Routes, Route } from "react-router-dom";
import Home from "./pages/login/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element></Route>
      <Route path="/register"></Route>
      <Route path="/dashboard"></Route>
      {/* both admin and chauffeur */}
    </Routes>
  );
}
export default App;
