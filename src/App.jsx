import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Apartment from "./components/Apartment";
import Apartment1 from "./components/Apartment1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/royalsuit" element={<Apartment />} />
        <Route path="/apartments" element={<Apartment1 />} />
      </Routes>
    </>
  );
}

export default App;
