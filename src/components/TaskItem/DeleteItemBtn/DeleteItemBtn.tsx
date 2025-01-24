import { useEffect, useState } from 'react';
import styles from './DeleteItemBtn.module.scss';
import { createPortal } from 'react-dom';
import { ConfirmDeleteModal } from '../../ConfirmDeleteModal/ConfirmDeleteModal';

interface IProps {
  deleteTask: () => void
}

export function DeleteItemBtn({ deleteTask }: IProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (isModalVisible) return;
    setTimeout(() => {
      setModalOpen(false)
    }, 300)
  }, [isModalVisible])

  useEffect(() => {
    if (!isModalOpen) return;

    setModalVisible(true);
  }, [isModalOpen])

  return (
    <>
      <button
        className={styles.btn}
        onClick={() => setModalOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="currentColor" className={styles.icon} viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </button>
      {
        isModalOpen && createPortal(
          <ConfirmDeleteModal
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            confirm={deleteTask}
          />,
          document.getElementById('modal-root')!
        )
      }
    </>
  )
}