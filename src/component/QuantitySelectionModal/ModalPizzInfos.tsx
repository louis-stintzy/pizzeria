import { useArticleToAdd } from '../../store/selectors';

function ModalPizzInfos() {
  const articleToAdd = useArticleToAdd();
  if (!articleToAdd) return null;
  const { name, price } = articleToAdd;
  return (
    <div id="modal__infos" className="flex flex-col items-center">
      <h4
        id="modal__info-name"
        className="mb-4 h-10 px-4 text-2xl font-bold text-red-600"
      >
        {name}
      </h4>
      <p
        id="modal__info-price"
        className="mb-4 h-8 px-4 text-xl font-bold text-green-700"
      >
        {price.toFixed(2)} €
      </p>
    </div>
  );
}

export default ModalPizzInfos;
