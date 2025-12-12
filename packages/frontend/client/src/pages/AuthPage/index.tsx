// Components
import LoginForm from "../../components/LoginForm/LoginForm";
import MetaHead from "../../components/shared/MetaHead";
import Logo from "/images/logo.svg"
import "./index.scss";

const LoginPage = () => {
  return (
    <>
      <MetaHead title="Login" description="Login page description." />
      <div className="login__screen">
        <div className="grid">
          <div className="grid__item logo__container">
            <img src={Logo} alt="Quizzly Logo" />
          </div>
          <div className="grid__item form__container">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
