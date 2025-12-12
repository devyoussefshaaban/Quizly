// modules & Hooks
import { useSelector } from "react-redux";
import RedirectMessage from "../../components/RedirectedMessage";
import type { RootState } from "../../context";
// Styles
import "./index.scss";

const ResultScreen = () => {
  // selectors
  const rightAnswersNum = useSelector(
    (state: RootState) => state.main.rightAnswersNum
  );
  const questionNum = useSelector((state: RootState) => state.main.questionNum);
  const user = useSelector((state: RootState) => state.main.user);

  return (
    <div className="result__screen">
      <div className="result__container">
        {!user ? (
          <RedirectMessage
            message="Oops, it seems that you have not logged in yet"
            option="Login"
            optionPath="/"
          />
        ) : questionNum <= 7 ? (
          <RedirectMessage
            message="Hmm, it seems that you have not finished the exam yet"
            option="Back to the exam"
            optionPath="/exam"
          />
        ) : (
          <>
            <div className="result__answers">
              <div className="right__answers">
                <p>Right answers: {rightAnswersNum}</p>
              </div>
              <div className="wrong__answers">
                <p>Wrong answers: {7 - rightAnswersNum}</p>
              </div>
            </div>
            <div className="result__percentage">
              <p>Your result is %{Math.round((rightAnswersNum / 7) * 100)}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultScreen;
