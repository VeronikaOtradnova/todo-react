import { ITaskState, taskActionTypes } from "../../types/task"

export const taskState:ITaskState = {
  tasks: []
}

export const taskReducer = (state: ITaskState = taskState, action: any) => {
  switch (action.type) {
    case taskActionTypes.CREATE_TASK:
      return {...state, tasks: [...state.tasks, action.payload]}
    case taskActionTypes.UPDATE_TASK:
      return {...state, tasks: [...state.tasks.filter(t => t.id !== action.payload.id), action.payload]}
    case taskActionTypes.DELETE_TASK:
      return {...state, tasks: [...state.tasks.filter(t => t.id !== action.payload)]}
    default: 
      return state;
  }
}