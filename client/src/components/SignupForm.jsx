import { useState } from "react";
import API from "../api/api";
import { Link, useNavigate } from "react-router-dom";

function SignupForm({ back }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const sendSignupData = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      name: name,
      surname: surname,
      email: email,
      password: password,
    };

    const access_token = await API.postUserData(
      "http://127.0.0.1:8000/signup",
      data
    );
    localStorage.setItem("access_token", access_token);
    navigate("/home");
  };

  return (
    <div className="form-container">
      <form>
        <h2>Create account</h2>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="submit-button"
          type="submit"
          onClick={sendSignupData}
        >
          Signup
        </button>
      </form>
      <Link className="back-button" to="/">
        Back
      </Link>
    </div>
  );
}

export default SignupForm;
