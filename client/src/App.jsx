import { useEffect, useState } from "react";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [showHeader, setShowHeader] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [showHome, setShowHome] = useState(false)

  const loginButton = () => {
    setShowLogin(true)
    setShowHeader(false)
  }
  
  const signupButton = () => {
    setShowSignup(true)
    setShowHeader(false)
  }

  const back = () => {
    setShowHeader(true)
    setShowLogin(false)
    setShowSignup(false)
  }

  const getHome = () => {
    setShowHeader(false)
    setShowLogin(false)
    setShowSignup(false)
    setShowHome(true)
  }

  useEffect(() => {
    const token = localStorage.getItem("access_token")
    token ? getHome() : setShowHeader(true)
  }, [])

  return (
    <>
      {showHeader && <Header loginButton={loginButton} signupButton={signupButton} />}
      {showLogin && <LoginForm back={back} />}
      {showSignup && <SignupForm back={back} />}
      {showHome && <Home />}
    </>
  );
}

export default App;
