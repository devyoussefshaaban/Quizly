// modules & hooks
import { useSelector } from "react-redux";
import type { RootState } from "../../context";
import questions from "../../utils/questions.json";
// components
import QuestionItem from "../QuestionItem";
import RedirectMessage from "../RedirectedMessage";
// styles
import "./index.scss";

// shuffled questions
const shuffledQuestions = questions.questions.sort(() => 0.5 - Math.random());

const QuestionsList = () => {
  // selectors
  const questionNum = useSelector((state: RootState) => state.main.questionNum);

  return (
    <div className="questions__list">
      <div className="questions__list__container">
        {shuffledQuestions.map((questionItem, index) =>
          index === questionNum - 1 ? (
            <div key={questionItem.id}>
              <QuestionItem key={questionItem.id} questionItem={questionItem} />
              <p className="question__number">{index + 1}</p>
            </div>
          ) : null
        )}

        {questionNum === 8 && (
          <RedirectMessage
            message="You have successully finished the exam"
            option="Check your result"
            optionPath="/result"
          />
        )}
      </div>
    </div>
  );
};

export default QuestionsList;
