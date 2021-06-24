import { createPortal } from 'react-dom';
import { Button } from '@core';
import styles from './modal.module.scss';
import { useEffect, useState, useRef, Fragment } from 'react';

enum ModalType {
  alert = 'alert',
  confirm = 'confirm',
  save = 'save'
}

const Modal = ({
  type,
  children = null,
  selector = 'modal',
  title = '',
  onClose = null,
  onConfirm = null
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
    document.body.style.overflow = 'hidden'
    window.scrollTo({ top: 0 });

    return () => {
      document.body.style.overflow = 'auto'
      setIsMounted(false)
    };
  }, [])


  let buttons = null;

  switch (type) {
    case ModalType.confirm:
      buttons = (
        <Fragment>
          <Button onClick={onConfirm}>Підтвердити</Button>
          <Button onClick={onClose} theme='light'>Відмінити</Button>
        </Fragment>
      );
      break;
    case ModalType.alert:
      buttons = (
        <Fragment>
          <Button onClick={onClose}>Гаразд</Button>
        </Fragment>
      );
      break;
    case ModalType.save:
      buttons = (
        <Fragment>
          <Button onClick={onConfirm}>Зберегти</Button>
          <Button onClick={onClose} theme='light'>Відмінити</Button>
        </Fragment>
      );
      break;
    default:
      buttons = null;
      break;
  }

  return isMounted ?
    createPortal(
      <div className={styles.overlay}>
        <div className={styles.modal}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {children}
          {buttons && <div className={styles.buttons}>{buttons}</div>}
        </div>
      </div>, document.getElementById(selector)
    ) : null

}

export { Modal }