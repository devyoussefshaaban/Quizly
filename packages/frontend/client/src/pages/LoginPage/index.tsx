// Components
import LoginForm from "../../components/LoginForm/LoginForm";
import MetaHead from "../../components/shared/MetaHead";
// Styles
import "./index.scss";

const LoginPage = () => {
  return (
    <>
      <MetaHead title="Login" description="Login page description." />
      <div className="login__screen">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
