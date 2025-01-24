import { ICreateTaskAction, ITask, IUpdateTaskAction, taskActionTypes } from "../../types/task";

export const createTaskAction = (task:ITask):ICreateTaskAction => ({
  type: taskActionTypes.CREATE_TASK,
  payload: task
})

export const updateTaskAction = (task:ITask):IUpdateTaskAction => ({
  type: taskActionTypes.UPDATE_TASK,
  payload: task,
})

export const deleteTaskAction = (id: ITask['id']) => ({
  type: taskActionTypes.DELETE_TASK,
  payload: id,
})