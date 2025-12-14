import * as actionTypes from "./actionTypes";

export const login = (userData: User): Action => {
  return {
    type: actionTypes.LOGIN,
    payload: userData,
  };
};

export const register = (userData: User): Action => {
  return {
    type: actionTypes.REGISTER,
    payload: userData,
  };
};


// logout
export const logout = (): Action => {
  return {
    type: actionTypes.LOGOUT,
  };
};

// user auth (simulation)
export const userAuth = (auth: boolean): Action => {
  return {
    type: actionTypes.USER_AUTH,
    payload: auth,
  };
};

export const answerQuestion = (
  questionNum: number,
  result: boolean
): Action => {
  return {
    type: actionTypes.ANSWER_QUESTION,
    payload: {
      questionNum,
      result,
    },
  };
};
