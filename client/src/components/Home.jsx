import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Home() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const getUser = async () => {
    const data = await API.getUserData();
    setUserData(data);
  };

  const logout = () => {
    localStorage.removeItem("access_token")
    navigate('/')
  }

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    token ? getUser() : navigate("/");
  }, []);

  return (
    <>
      <h1>Welcome {userData?.name}</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Home;
