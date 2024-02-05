import scss from "./Registration.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const url = import.meta.env.VITE_BACKEND_URL;
const Registratuon = () => {
  const [regitrationName, setregitrationName] = useState("");
  const [password, setPassword] = useState("");

  const addUsers = () => {
    const newUser = {
      name: regitrationName,
      password: password,
    };
    postRequest(newUser);
  };

  const postRequest = async (newdata) => {
    await axios.post(url, newdata);
  };

  return (
    <>
      <div className={scss.Login}>
        <div className={scss.login_page}>
          <img
            src="https://u.9111s.ru/uploads/202105/31/da236c2167490d9e9e9fab160881092c.jpg"
            alt=""
          />
          <h2>Создать аккаунт Google</h2>
          <p>Введите свое имя</p>
          <div className={scss.inputs}>
            <input
              value={regitrationName}
              onChange={(e) => setregitrationName(e.target.value)}
              placeholder="Имя"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <div className={scss.buttons}>
            <button onClick={addUsers} className={scss.button}>
              <Link to="/">далее</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registratuon;
