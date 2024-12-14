import { test, expect, beforeAll, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import useStore from '../store/store';
import { CheckModalClosure } from './utils/ChekModalClosure';
import { OpenModalAndRetrieveButtons } from './utils/OpenModalAndRetrieveButtons';

// Mock la méthode showModal pour éviter les erreurs
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn();
});

test(`does not allow ordering less than 1 pizza'`, () => {
  // Ouvre la modal et récupère des boutons (et quantity)
  const { incrementButton, addToCartButton, quantity } =
    OpenModalAndRetrieveButtons(1);

  // Vérifie la présence des boutons 'plus' et 'ajouter au panier'
  expect(incrementButton).toBeInTheDocument();
  expect(addToCartButton).toBeInTheDocument();

  // Clique sur le bouton d'incrémentation un nombre alétoire de fois (entre 30 et 50), vérifie que le bouton 'plus' est désactivé et vérifie la quantité
  const randomClicks = Math.random() * (50 - 30) + 30;
  for (let i = 0; i < randomClicks; i++) {
    fireEvent.click(incrementButton);
  }
  expect(incrementButton).toBeDisabled();
  expect(quantity.textContent).toBe('30');

  // Clique sur le bouton "Ajouter au panier" et vérifie le shopping cart
  fireEvent.click(addToCartButton);
  const { shoppingCart } = useStore.getState();
  const expectedShoppingCart = {
    articles: [
      {
        picture: '/src/assets/margherita.jpg',
        name: 'Margherita',
        price: 12.9,
        quantity: 30,
      },
    ],
    total: 387,
  };
  expect(shoppingCart).toEqual(expectedShoppingCart);

  // Vérifie que la modal est fermée
  CheckModalClosure();
});
