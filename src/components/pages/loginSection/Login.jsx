import { useState } from "react";
import scss from "./Login.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const [nameValue, setNameValue] = useState("");
  const [loginValue, setLoginValue] = useState("");

  const navigate = useNavigate();

  const sigin_in = async () => {
    const response = await axios.get(url);
    const userData = await response.data;

    const filteres = userData.find(
      (item) => item.name === nameValue && item.password === loginValue
    );

    if (filteres) {
      localStorage.setItem("isAuth", filteres._id);
      navigate("/");
    } else {
      alert("Uncorrect user name or password");
    }
  };

  const handleButton = () => {
    navigate("/registration");
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
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder="Имя"
            />
            <input
              value={loginValue}
              onChange={(e) => setLoginValue(e.target.value)}
              placeholder="password"
            />
          </div>
          <div className={scss.buttons}>
            <button
              onClick={() => {
                sigin_in();
              }}
              className={scss.button}
            >
              далее
            </button>
            <button onClick={handleButton} className={scss.button}>
              зарегистрируйтесь
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
