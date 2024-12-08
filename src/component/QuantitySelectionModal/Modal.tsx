import { useRef } from 'react';

interface ModalProps {
  children: React.ReactNode;
  modalStyle: React.CSSProperties;
}

function Modal({ children, modalStyle }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <dialog ref={modalRef} style={modalStyle}>
      {children}
    </dialog>
  );
}

export default Modal;
