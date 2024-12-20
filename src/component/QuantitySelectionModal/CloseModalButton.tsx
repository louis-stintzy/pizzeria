// ----- Close button for the modal -----
// The following close button is adapted from the modal component example
// provided by Flowbite: https://flowbite.com/docs/components/modal/

import handleModalClosing from '../../utils/handleModalClosing';

function CloseModalButton() {
  return (
    <button
      id="modal__close-button"
      type="button"
      className="mb-4 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
      data-modal-hide="default-modal"
      onClick={handleModalClosing}
    >
      <svg
        className="h-3 w-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Close modal</span>
    </button>
  );
}

export default CloseModalButton;
