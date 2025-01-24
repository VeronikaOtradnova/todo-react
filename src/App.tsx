import { Header } from './components/Header/Header';
import { TaskList } from './components/TasksList/TasksList';
import { createTaskAction, deleteTaskAction, updateTaskAction } from './store/action-creators/task'
import { ITask } from './types/task'
import { useAppDispatch } from './hooks/useAppDispatch';
import { TaskForm } from './components/TaskForm/TaskForm';

function App() {
  const dispatch = useAppDispatch();

  const createTask = (task: ITask) => {
    console.log('task')
    dispatch(createTaskAction(task))
  }
  const updateTask = (task: ITask) => dispatch(updateTaskAction(task));
  const deleteTask = (id: ITask['id']) => dispatch(deleteTaskAction(id));

  return (
    <>
      <Header />
      <main className='container'>
        <TaskForm createTask={createTask} />
        <TaskList
          updateTask={updateTask}
          deleteTask={deleteTask} 
        />
      </main>
    </>
  )
}

export default App
