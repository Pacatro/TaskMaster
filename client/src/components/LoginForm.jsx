import { useState } from "react";

function LoginForm({ back }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendLoginData = async (e) => {
    e.preventDefault()
    const data = {
      'username': username,
      'password': password
    }

    const response = await fetch('http://127.0.0.1:8000/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })

    const result = await response.json()
    console.log(result)
  }

  return (
    <>
      <div className="form-container">
        <form>
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

          <button className="submit-button" onClick={sendLoginData}>
            Login
          </button>
        </form>
        <button className="back-button" onClick={back}>Back</button>
      </div>
    </>
  );
}

export default LoginForm;
