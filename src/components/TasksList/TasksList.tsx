import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TaskItem } from '../TaskItem/TaskItem';
import styles from './TasksList.module.scss';
import { ITask } from '../../types/task';

interface IProps {
  updateTask: (task:ITask) => void,
  deleteTask: (id: ITask['id']) => void, 
}

export function TaskList({updateTask, deleteTask}:IProps) {
  const tasks = useTypedSelector(state => state.tasks);

  const sortTasks = (tasks: ITask[]): ITask[] => {
    const uncompletedTasks = tasks.filter(task => !task.completed)
    .sort((a, b) => b.createdAt - a.createdAt);

    const completedTasks = tasks.filter(task => task.completed)
    .sort((a, b) => b.createdAt - a.createdAt);

    return [...uncompletedTasks, ...completedTasks]
  };

  return (
    <ul className={styles.list}>
      {
        tasks && tasks.length > 0 ?
        sortTasks(tasks).map(task => 
          <TaskItem 
            task={task} 
            key={task.id} 
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ) :
        <div>Список задач пуст. Создайте первую задачу!</div>
      }
    </ul>
  )
}