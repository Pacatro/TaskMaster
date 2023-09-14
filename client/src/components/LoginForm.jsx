import { useState } from "react";
import API from "../api/api";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const sendLoginData = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    const access_token = await API.postUserData(
      "http://127.0.0.1:8000/login",
      data
    );
    localStorage.setItem("access_token", access_token);
    navigate("/home");
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={sendLoginData}>
          <h2>Welcome Back!</h2>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="submit-button" type="submit">
            Login
          </button>
        </form>
        <Link to="/" className="back-button">
          Back
        </Link>
      </div>
    </>
  );
}

export default LoginForm;
