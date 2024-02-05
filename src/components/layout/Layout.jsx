import { Routes, Route } from "react-router-dom";
import scss from "./Layout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import UserPage from "../pages/UserPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth");

  useEffect(() => {
    if (!!isAuth && pathname === "/login") {
      navigate("/");
    } else if (!!isAuth && pathname === "/registration") {
      navigate("/");
    } else if (!isAuth && pathname === "/") {
      navigate("/login");
    }
  }, [pathname]);

  return (
    <div className={scss.Layout}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="*" element={<p>There is not nothing here: 404!</p>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
