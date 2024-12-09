import { test, expect, beforeAll, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import App from '../component/App/App';
import useStore from '../store/store';

// Mock la méthode showModal pour éviter les erreurs
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn();
});

test(`updates global state when "Commander" is clicked for a pizza'`, () => {
  render(<App />);

  // Récupère le bouton de commande de la première pizza et clique dessus
  const orderButton = screen.getByTestId('order-button-pizzaId-1');
  fireEvent.click(orderButton);

  // Récupère et vérifie la présences des boutons de la modal
  const incrementButton = screen.getByTestId(
    'modal__quantity-selection-buttons-increment'
  );
  const decrementButton = screen.getByTestId(
    'modal__quantity-selection-buttons-decrement'
  );
  const addToCartButton = screen.getByTestId('modal__add-to-cart-button');
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
  expect(addToCartButton).toBeInTheDocument();

  // Clique sur les boutons d'incrémentation / de décrémentation et vérifie la quantité
  const quantity = screen.getByTestId(
    'modal__quantity-selection-buttons-quantity'
  );
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  expect(quantity.textContent).toBe('3');
  fireEvent.click(decrementButton);
  expect(quantity.textContent).toBe('2');

  // Clique sur le bouton "Ajouter au panier" et vérifie le shopping cart
  fireEvent.click(addToCartButton);
  const { shoppingCart } = useStore.getState();
  const expectedShoppingCart = {
    articles: [
      {
        picture: '/src/assets/margherita.jpg',
        name: 'Margherita',
        price: 12.9,
        quantity: 2,
      },
    ],
    total: 25.8,
  };
  expect(shoppingCart).toEqual(expectedShoppingCart);

  // Vérifie que la modal est fermée
  const { quantitySelectionModalisOpen } = useStore.getState();
  expect(quantitySelectionModalisOpen).toBe(false);
  fireEvent.click(addToCartButton);
  expect(screen.queryByTestId('pizza-modal')).not.toBeInTheDocument();
  expect(incrementButton).not.toBeInTheDocument();
  expect(decrementButton).not.toBeInTheDocument();
  expect(addToCartButton).not.toBeInTheDocument();
});
