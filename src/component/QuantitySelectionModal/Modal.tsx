import { useEffect, useRef } from 'react';
import useStore from '../../store/store';

interface ModalProps {
  children: React.ReactNode;
  modalStyle: React.CSSProperties;
}

function Modal({ children, modalStyle }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const isOpen = useStore((state) => state.quantitySelectionModalisOpen);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} style={modalStyle}>
      {children}
    </dialog>
  );
}

export default Modal;
