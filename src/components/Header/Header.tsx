import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>TODO</h1>
      </div>
    </header>
  )
}