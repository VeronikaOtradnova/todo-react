import styles from './ConfirmDeleteModal.module.scss'

interface IProps {
  isModalVisible: boolean,
  setModalVisible: (val: boolean) => void,
  confirm: () => void,
}

export function ConfirmDeleteModal({ isModalVisible, setModalVisible, confirm }: IProps) {
  const cancelBtnHandler = () => {
    setModalVisible(false);
  }

  return (
    <div
      className={`${styles.wrapper} ${isModalVisible ? '' : styles.hidden}`}
      onClick={() => setModalVisible(false)}
    >
      <div
        className={`${styles.modal} ${isModalVisible ? '' : styles.hidden}`}
      >
        
        <h2 className={styles.title}>Удалить задачу?</h2>

        <div className={styles.btnsWrapper}>
          <button 
            className={`${styles.btn} ${styles.confirm}`}
            onClick={confirm}
          >
            Удалить
          </button>

          <button
            className={`${styles.btn} ${styles.cancel}`}
            onClick={cancelBtnHandler}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
}