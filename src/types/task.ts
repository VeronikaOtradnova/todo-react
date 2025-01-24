export interface ITask {
  id: number,
  title: string,
  createdAt: number,
  completed: boolean,
}

export interface ITaskState {
  tasks: ITask[]
}

export enum taskActionTypes {
  CREATE_TASK = 'CREATE_TASK',
  UPDATE_TASK = 'UPDATE_TASK',
  DELETE_TASK = 'DELETE_TASK',
}

export interface ICreateTaskAction {
  type: taskActionTypes.CREATE_TASK,
  payload: ITask,
}
export interface IUpdateTaskAction {
  type: taskActionTypes.UPDATE_TASK,
  payload: ITask,
}
export interface IDeleteTaskAction {
  type: taskActionTypes.DELETE_TASK,
  payload: ITask['id']
}

// export type ITaskAction = ICreateTaskAction | IUpdateTaskAction | IDeleteTaskAction;