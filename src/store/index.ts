import { createStore } from "redux";
import { taskReducer } from "./reducers/taskReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const stateFromStorage = localStorage.getItem('reduxState')
const persistedState = stateFromStorage ? JSON.parse(stateFromStorage): {}

export const store = createStore(taskReducer, persistedState, composeWithDevTools());

export type AppDispatch = typeof store.dispatch;

store.subscribe(()=>{
  console.log(store.getState())
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})