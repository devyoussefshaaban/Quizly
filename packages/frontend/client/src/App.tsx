// modules & hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import spinner from "./assets/images/spinner.gif";
// styles
import "./App.scss";
import { useSelector } from "react-redux";
import type { RootState } from "./context";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const isAuth = useSelector((state: RootState) => state.main.userAuth);
  return (
    <Router>
      <div className={`${!isAuth && "overlayed"} app`}>
        {!isAuth && (
          <div className="app__overlay">
            <img src={spinner} alt="Authenticating ..." />
          </div>
        )}
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
