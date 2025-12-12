// modules & hooks
import { Link } from "react-router-dom";
// styles
import "./index.scss";
// props
interface Props {
  message: string;
  option: string;
  optionPath: string;
  optionController?: any;
  option2?: string;
}

const RedirectMessage: React.FC<Props> = ({
  message,
  option,
  optionPath,
  optionController,
}) => {
  return (
    <div className="redirected__message">
      <h2>{message}</h2>
      <div className="redirected__message__options">
        <button onClick={optionController}>
          <Link to={optionPath}>{option}</Link>
        </button>
      </div>
    </div>
  );
};

export default RedirectMessage;
