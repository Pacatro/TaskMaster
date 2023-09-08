import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">TaskMaster</h1>
        <div>
          <button>Login</button>
          <button>Signup</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
