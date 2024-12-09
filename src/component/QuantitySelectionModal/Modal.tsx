import { useEffect, useRef } from 'react';
import { useQuantitySelectionModalisOpen } from '../../store/selectors';

interface ModalProps {
  children: React.ReactNode;
  className: string;
}

function Modal({ children, className }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const isOpen = useQuantitySelectionModalisOpen();

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog id="modal" ref={modalRef} className={className}>
      {children}
    </dialog>
  );
}

export default Modal;
