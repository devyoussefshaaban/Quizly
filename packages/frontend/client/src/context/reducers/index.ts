// Action types
import * as actionTypes from "../actions/actionTypes";

// Initial state
const initialState = {
  questionNum: 1,
  rightAnswersNum: 0,
  user: null,
  userAuth: true,
};

// Reducer
const questionsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        questionNum: 1,
        rightAnswersNum: 0,
        user: action.payload,
        userAuth: false,
      };
    case actionTypes.USER_AUTH:
      return {
        ...state,
        userAuth: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        questionNum: 1,
        rightAnswersNum: 0,
        user: null,
        userAuth: true,
      };
    case actionTypes.ANSWER_QUESTION:
      return {
        ...state,
        questionNum: action.payload.questionNum + 1,
        rightAnswersNum: action.payload.result
          ? state.rightAnswersNum + 1
          : state.rightAnswersNum,
      };
    default:
      return { ...state };
  }
};

// Export the reducer
export default questionsReducer;
