import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import questionsReducer from "./reducers";

const rootReducer = combineReducers({
  main: questionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export default store;
