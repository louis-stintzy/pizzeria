import { useArticleToAdd } from '../../store/selectors';

function ModalPizzImg() {
  const articleToAdd = useArticleToAdd();
  if (!articleToAdd) return null;
  const { name, picture } = articleToAdd;

  return (
    <div
      id="modal__img-container"
      className="mb-4 flex h-52 w-64 items-center justify-center overflow-hidden rounded-lg"
    >
      <img
        src={picture}
        alt={name}
        id="modal__img-content"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default ModalPizzImg;
