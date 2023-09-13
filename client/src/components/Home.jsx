import { useState, useEffect } from "react";
import API from "../api/api";

function Home() {
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    const data = await API.getUserData("http://127.0.0.1:8000/users/me");

    setUserData(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return <h1>Welcome {userData?.name}</h1>;
}

export default Home;
