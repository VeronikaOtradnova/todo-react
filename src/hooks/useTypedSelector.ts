import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { ITaskState } from "../types/task";

export const useTypedSelector:TypedUseSelectorHook<ITaskState> = useSelector;
