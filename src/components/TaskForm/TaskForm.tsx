import { FormEvent, useState } from 'react';
import styles from './TaskForm.module.scss';
import { ITask } from '../../types/task';
import { useResize } from '../../hooks/useResize';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface IProps {
  createTask: (task:ITask) => void
}

export function TaskForm({createTask}: IProps) {
  const tasks = useTypedSelector(state => state.tasks);
  const [inputValue, setInputValue] = useState<string>('');
  const {width} = useResize();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    createTask({
      id: Date.now(),
      title: inputValue,
      createdAt: Date.now(),
      completed: false,
    })

    setInputValue('')
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input 
        type="text" 
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className={styles.input}
        placeholder={
          tasks?.length > 0 ?
          'Создайте новую задачу!' :
          'Создайте первую задачу!'
        }
      />
      <button
        className={styles.btn}
        type='submit'
        disabled={!inputValue}
      >
        {
          width > 500 ?
          'Добавить' :
          '+'
        }
      </button>
    </form>
  )
}