import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import validToken from "../token/token";
import Task from "../components/Task";

function Home() {
  const [userData, setUserData] = useState({});
  const [userTasks, setUserTasks] = useState([]);
  const navigate = useNavigate();

  const getUser = async () => {
    const data = await API.getUserData();
    setUserData(data);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  const getUserTasks = async () => {
    const tasks = await API.getTasks(userData.id);
    setUserTasks(tasks);
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    validToken(token) ? getUser() : navigate("/");
  }, []);

  useEffect(() => {
    getUserTasks();
  }, [userData]);

  return (
    <div className="home-container">
      <header className="header-home">
        <h1>{userData?.name}'s tasks</h1>
      </header>

      <section className="tasks">
        {userTasks.map((task) => (
          <Task key={task.id} title={task.title} id={task.id} />
        ))}
      </section>
    </div>
  );
}

export default Home;
