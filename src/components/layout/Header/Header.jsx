import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header className={scss.header}>
      <ul className={scss.ul}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Registratuon</NavLink>
        </li>
        <li>
          <NavLink to="/user">Профиль пользователя John</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
