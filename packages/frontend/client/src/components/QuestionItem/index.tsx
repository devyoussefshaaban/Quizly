import "./index.scss";

interface Props {
  questionItem: Question;
}

const QuestionItem: React.FC<Props> = ({ questionItem }) => {
  const { question, correct_answer, incorrect_answers } = questionItem;
  const qusetionOptions = [...incorrect_answers, correct_answer].sort(
    () => 0.5 - Math.random()
  );

  return (
    <div className="question__item">
      <div className="question__body">
        <h3>{question}</h3>
        <div className="question__options">
          {qusetionOptions.map((option) => (
            <p key={option}>
              {option}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
