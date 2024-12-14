import { test, expect, beforeAll, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import App from '../component/App/App';
import useStore from '../store/store';

// Mock la méthode showModal pour éviter les erreurs
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn();
});

test(`does not allow ordering less than 1 pizza'`, () => {
  render(<App />);

  // Récupère le bouton de commande de la première pizza et clique dessus
  const orderButton = screen.getByTestId('order-button-pizzaId-1');
  fireEvent.click(orderButton);

  // Récupère et vérifie la présence des boutons 'moins' et 'ajouter au panier'
  const decrementButton = screen.getByTestId(
    'modal__quantity-selection-buttons-decrement'
  );
  const addToCartButton = screen.getByTestId('modal__add-to-cart-button');
  expect(decrementButton).toBeInTheDocument();
  expect(decrementButton).toBeDisabled();
  expect(addToCartButton).toBeInTheDocument();

  // Clique sur le bouton de décrémentation un nombre alétoire de fois (entre 0 et 50) et vérifie la quantité
  const quantity = screen.getByTestId(
    'modal__quantity-selection-buttons-quantity'
  );
  const randomClicks = Math.floor(Math.random() * 50);
  for (let i = 0; i < randomClicks; i++) {
    fireEvent.click(decrementButton);
  }
  expect(quantity.textContent).toBe('1');

  // Clique sur le bouton "Ajouter au panier" et vérifie le shopping cart
  fireEvent.click(addToCartButton);
  const { shoppingCart } = useStore.getState();
  const expectedShoppingCart = {
    articles: [
      {
        picture: '/src/assets/margherita.jpg',
        name: 'Margherita',
        price: 12.9,
        quantity: 1,
      },
    ],
    total: 12.9,
  };
  expect(shoppingCart).toEqual(expectedShoppingCart);

  // Vérifie que la modal est fermée
  const { quantitySelectionModalisOpen } = useStore.getState();
  expect(quantitySelectionModalisOpen).toBe(false);
  expect(screen.queryByTestId('pizza-modal')).not.toBeInTheDocument();
  expect(decrementButton).not.toBeInTheDocument();
  expect(addToCartButton).not.toBeInTheDocument();
});
