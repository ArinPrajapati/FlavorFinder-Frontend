import "./App.css";
import Navbar from "./components/HomePage/Navbar";
import { FooterWithSocialLinks } from "./components/HomePage/FooterWithSocialLinks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import NotFoundPage from "./components/NotFoundPage";
import ResHome from "./components/ResturantsPage/ResHome";
import LoginUser from "./components/LoginUser";
import UserAccount from "./components/UserAccount";
import CreateRestaurants from "./components/CreateRestuarants";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
const App = () => {
  return (
    <div className="text-3xl  foodBg">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/resturant" element={<ResHome />} />
          <Route path="/user/login" element={<LoginUser />} />
          <Route path="/user/signup" element={<UserAccount />} />
          <Route path="/res/signup" element={<CreateRestaurants />} />
          <Route path="/res/signin" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <FooterWithSocialLinks />
      </Router>
    </div>
  );
};

export default App;
