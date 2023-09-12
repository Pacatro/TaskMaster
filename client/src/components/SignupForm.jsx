import React from "react";

function SignupForm() {
  return (
    <div className="form-container">
      <h2>Create account</h2>
      <form>
        <input type="text" id="username" name="username" placeholder="Username" />
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="text" id="surname" name="surname" placeholder="Surname" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <input type="password" id="password" name="password" placeholder="Password" />

        <button className="submit-button" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
