import React from "react";

function LoginForm() {
  return (
    <div className="form-container">
      <h2>Welcome Back!</h2>
      <form>
        <input type="text" id="username" name="username" placeholder="Username" />
        <input type="password" id="password" name="password" placeholder="Password" />

        <button className="submit-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
