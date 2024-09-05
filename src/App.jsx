import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Apartment from "./components/Apartment";
import Apartment1 from "./components/Apartment1";
import  Book  from "./components/Book";
import Payment from "./components/Payment";

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
        <Route path="/bookhere" element={<Book />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
