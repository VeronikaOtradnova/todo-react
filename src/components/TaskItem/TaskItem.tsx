import { ITask } from '../../types/task';
import { Checkbox } from './Checkbox/Checkbox';
import { DeleteItemBtn } from './DeleteItemBtn/DeleteItemBtn';
import styles from './TaskItem.module.scss';

interface IProps {
  task: ITask,
  updateTask: (task: ITask) => void,
  deleteTask: (id: ITask['id']) => void,
}

export function TaskItem({ task, updateTask, deleteTask }: IProps) {
  return (
    <li className={`${styles.item} ${task.completed ? styles.completed : ''}`}>
      <div className={styles.leftControls}>
        <DeleteItemBtn deleteTask={() => deleteTask(task.id)} />
      </div>

      <div className={styles.taskTitle}>
        {task.title}
      </div>

      <Checkbox
        onChange={() => updateTask({
          ...task,
          completed: !task.completed
        })}
        id={`checkbox_task-${task.id}`}
        checked={task.completed}
      />
    </li>
  )
}