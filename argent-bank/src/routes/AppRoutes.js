import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SignIn from "../pages/SignIn/SignIn";
import User from "../pages/User/User";
import TransactionsPage from "../pages/TransactionsPage/TransactionsPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="*" element={<Error />} /> {/* Déplacez cette route en dernier */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
