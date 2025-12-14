// Components
import LoginForm from "../../components/LoginForm/LoginForm";
import MetaHead from "../../components/shared/MetaHead";
import Logo from "/images/logo.svg"
import "./index.scss";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const AuthPage = () => {
  const location = useLocation()

  const [isLogingForm, setIsLoginForm] = useState<boolean>(location.search.includes("login"))

  const getFormType = () => setIsLoginForm(location.search.includes("login"))

  useEffect(() => {
    getFormType()
  }, [location])

  return (
    <>
      <MetaHead title={isLogingForm ? "Login" : "Register"} description="Login page description." />
      <div className="auth__screen">
        <div className="grid">
          <div className="grid__item logo__container">
            <img src={Logo} alt="Quizzly Logo" />
          </div>
          <div className="grid__item form__container">
            {isLogingForm ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
