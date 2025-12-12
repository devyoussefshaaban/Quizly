// modules & hooks
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../context";
import { answerQuestion } from "../../context/actions";
import { useNavigate } from 'react-router-dom'
// styles
import "./index.scss";

// props
interface Props {
  questionItem: Question;
}

const QuestionItem: React.FC<Props> = ({ questionItem }) => {
  const { question, correct_answer, incorrect_answers } = questionItem;
  const qusetionOptions = [...incorrect_answers, correct_answer].sort(
    () => 0.5 - Math.random()
  );

  // selectors
  const questionNum = useSelector((state: RootState) => state.main.questionNum);

  // dispatcher
  const dispatch = useDispatch();

  // navigator
  const navigate = useNavigate()

  // answer handler
  const answerHandler = (answer: string) => {
    dispatch(
      answerQuestion(questionNum, answer === questionItem.correct_answer)
    );
    if (questionNum === 7) navigate('/result')
  };

  return (
    <div className="question__item">
      <div className="question__body">
        <h3>{question}</h3>
        <div className="question__options">
          {qusetionOptions.map((option) => (
            <p key={option} onClick={() => answerHandler(option)}>
              {option}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
