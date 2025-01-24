import { createStore } from "redux";
import { taskReducer, taskState } from "./reducers/taskReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const stateFromStorage = localStorage.getItem('reduxState')
const persistedState = stateFromStorage ? JSON.parse(stateFromStorage): taskState;

export const store = createStore(taskReducer, persistedState, composeWithDevTools());

export type AppDispatch = typeof store.dispatch;

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})