import { useEffect, useState } from "react";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import "./App.css";

function App() {
  const [showHeader, setShowHeader] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

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

  useEffect(() => {
    setShowHeader(true)
  }, [])

  return (
    <>
      {showHeader && <Header loginButton={loginButton} signupButton={signupButton} />}
      {showLogin && <LoginForm back={back} />}
      {showSignup && <SignupForm back={back} />}
    </>
  );
}

export default App;
