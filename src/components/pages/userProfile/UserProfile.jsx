import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = import.meta.env.VITE_BACKEND_URL;

const UserProfile = () => {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const { name, password } = user;

  const getRequest = async () => {
    try {
      const response = await axios.get(`${url}/${username}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div>
      <p>name: {name}</p>
      <p>password: {password}</p>
    </div>
  );
};

export default UserProfile;
