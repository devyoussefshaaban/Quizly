import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import ExamPage from "./pages/QuizPage";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import RewardsPage from "./pages/RewardsPage";
import WeeklyQuizPage from "./pages/WeeklyQuizPage";
import AboutPage from "./pages/AboutPage";
import MainLayout from "./components/Layout/MainLayout";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<PublicRoute><HomePage /></PublicRoute>} />
          <Route path="/about" element={<PublicRoute><AboutPage /></PublicRoute>} />
          <Route path="/auth" element={<PublicRoute><AuthPage /></PublicRoute>} />
          <Route path="/quiz" element={<PrivateRoute><ExamPage /></PrivateRoute>} />
          <Route path="/rewards" element={<PrivateRoute><RewardsPage /></PrivateRoute>} />
          <Route path="/weekly-quiz" element={<PrivateRoute><WeeklyQuizPage /></PrivateRoute>} />
        </Routes>
      </MainLayout>
    </Router >
  );
};

export default App;
