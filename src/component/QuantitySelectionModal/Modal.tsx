import { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  modalStyle: React.CSSProperties;
}

function Modal({ isOpen, children, modalStyle }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

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
