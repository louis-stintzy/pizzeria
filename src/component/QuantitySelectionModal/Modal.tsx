import { useEffect, useRef } from 'react';
import { useQuantitySelectionModalisOpen } from '../../store/selectors';
import handleModalClosing from '../../utils/handleModalClosing';

interface ModalProps {
  children: React.ReactNode;
  className: string;
}

function Modal({ children, className }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const isOpen = useQuantitySelectionModalisOpen();

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) handleModalClosing();
  };

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      id="modal"
      ref={modalRef}
      className={className}
      onClick={(e) => handleModalClick(e)}
    >
      {children}
    </dialog>
  );
}

export default Modal;
