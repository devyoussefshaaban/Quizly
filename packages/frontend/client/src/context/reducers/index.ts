// Action types
import * as actionTypes from "../actions/actionTypes";

// Initial state
const initialState = {
  questionNum: 1,
  rightAnswersNum: 0,
  user: null,
  isLoading: false,
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
        isLoading: false,
      };
    case actionTypes.USER_AUTH:
      return {
        ...state,
        userAuth: action.payload,
        isLoading: false,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        questionNum: 1,
        rightAnswersNum: 0,
        user: null,
        userAuth: true,
        isLoading: false,
      };
    case actionTypes.ANSWER_QUESTION:
      return {
        ...state,
        questionNum: action.payload.questionNum + 1,
        rightAnswersNum: action.payload.result
          ? state.rightAnswersNum + 1
          : state.rightAnswersNum,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

// Export the reducer
export default questionsReducer;
