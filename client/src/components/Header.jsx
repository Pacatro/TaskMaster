function Header({loginButton, signupButton}) {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">TaskMaster</h1>
        <div>
          <button onClick={loginButton}>Login</button>
          <button onClick={signupButton}>Signup</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
