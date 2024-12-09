// ----- Close button for the modal -----
// The following close button is adapted from the modal component example
// provided by Flowbite: https://flowbite.com/docs/components/modal/

import handleModalClosing from '../../utils/handleModalClosing';

function CloseModalButton() {
  return (
    <button
      type="button"
      className="mb-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
      data-modal-hide="default-modal"
      onClick={handleModalClosing}
    >
      <svg
        className="w-3 h-3"
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
