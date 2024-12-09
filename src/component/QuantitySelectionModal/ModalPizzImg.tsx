import { useArticleToAdd } from '../../store/selectors';

function ModalPizzImg() {
  const articleToAdd = useArticleToAdd();
  if (!articleToAdd) return null;
  const { name, picture } = articleToAdd;

  return (
    <div
      id="modal__img-container"
      className="flex justify-center items-center w-64 h-52 mb-4 rounded-lg overflow-hidden"
    >
      <img
        src={picture}
        alt={name}
        id="modal__img-content"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ModalPizzImg;
