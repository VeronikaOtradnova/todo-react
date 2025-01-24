import styles from './Checkbox.module.scss';

interface IProps {
  onChange: () => void,
  checked: boolean,
  id: string,
}

export function Checkbox({onChange, checked, id}: IProps) {
  return (
    <label className={styles.checkbox}>
      <input 
        className={styles.input}
        type="checkbox" 
        checked={checked} 
        onChange={onChange}
        id={id}
      />
      <div className={`${styles.checkmark} ${checked ? styles.checked : ''}`}></div>
    </label>
  )
}