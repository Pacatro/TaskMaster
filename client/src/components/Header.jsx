import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import validToken from "../token/token";

function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    validToken(token) ? navigate("/home") : navigate("/");
  }, []);

  return (
    <header>
      <nav>
        <h1 className="logo">TaskMaster</h1>
        <div className="nav-content">
          <div className="links">
            <Link className="link" to="/login">
              Login
            </Link>
            <Link className="link" to="/signup">
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
