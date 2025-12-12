import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import spinner from "./assets/images/spinner.gif";
import "./App.scss";
import { useSelector } from "react-redux";
import type { RootState } from "./context";
import ExamPage from "./pages/QuizPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/AuthPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import RewardsPage from "./pages/RewardsPage";
import WeeklyQuizPage from "./pages/WeeklyQuizPage";
import AboutPage from "./pages/AboutPage";

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
        <Header />
        <Routes>
          <Route path="/" element={<PublicRoute><HomePage /></PublicRoute>} />
          <Route path="/about" element={<PublicRoute><AboutPage /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/quiz" element={<PrivateRoute><ExamPage /></PrivateRoute>} />
          <Route path="/rewards" element={<PrivateRoute><RewardsPage /></PrivateRoute>} />
          <Route path="/weekly-quiz" element={<PrivateRoute><WeeklyQuizPage /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
