import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import scss from "./home.module.scss";

const url = import.meta.env.VITE_BACKEND_URL;

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  const getAllUsers = async () => {
    try {
      const response = await axios.get(url);
      setUsers(response.data);

      const findUser = response.data.find(
        (item) => item._id === +localStorage.getItem("isAuth")
      );

      setUserProfile(findUser);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteFunc = async (_id) => {
    try {
      await axios.delete(`${url}/${_id}`);
      getAllUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const exitFunc = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className={scss.container}>
      {users.map((item) => (
        <div className={scss.card} key={item._id}>
          <Link to={`/user/${item._id}`}>{item.name}</Link>
          <button onClick={() => deleteFunc(item._id)}>Delete</button>
        </div>
      ))}

      <div>
        <h1>{userProfile.name}</h1>
        <button onClick={exitFunc}>Exit</button>
      </div>
    </div>
  );
};

export default Home;
