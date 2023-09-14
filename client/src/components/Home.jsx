import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import validToken from "../token/token";

function Home() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const getUser = async () => {
    const data = await API.getUserData();
    setUserData(data);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    validToken(token) ? getUser() : navigate("/");
  }, []);

  return (
    <>
      <header>
        <h1>
          Welcome {userData?.name} {userData?.surname}!
        </h1>
      </header>

      <section className="tasks">
        <div className="task">
          <h3>Title</h3>
          <p>Description</p>
          <div className="buttons">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
