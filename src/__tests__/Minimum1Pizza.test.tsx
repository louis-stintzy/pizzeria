import { test, expect, beforeAll, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';

import useStore from '../store/store';
import { OpenModalAndRetrieveButtons } from './utils/OpenModalAndRetrieveButtons';
import { CheckModalClosure } from './utils/ChekModalClosure';

// Mock la méthode showModal pour éviter les erreurs
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn();
});

test(`does not allow ordering less than 1 pizza'`, () => {
  // Ouvre la modal et récupère des boutons (et quantity)
  const { decrementButton, addToCartButton, quantity } =
    OpenModalAndRetrieveButtons(1);

  // Vérifie la présence du bouton 'moins', qu'il soit bien désactivé, et la présence du bouton 'ajouter au panier'
  expect(decrementButton).toBeInTheDocument();
  expect(decrementButton).toBeDisabled();
  expect(addToCartButton).toBeInTheDocument();

  // Clique sur le bouton de décrémentation un nombre alétoire de fois (entre 0 et 50) et vérifie la quantité
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
  CheckModalClosure();
});
