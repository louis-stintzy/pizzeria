import { test, expect, beforeAll, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import useStore from '../store/store';
import { CheckModalClosure } from './utils/ChekModalClosure';
import { OpenModalAndRetrieveButtons } from './utils/OpenModalAndRetrieveButtons';

// Mock la méthode showModal pour éviter les erreurs
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn();
});

test(`updates global state when "Commander" is clicked for a pizza'`, () => {
  // Ouvre la modal, vérifie la présence des éléments et récupère des boutons (et quantity)
  const { incrementButton, decrementButton, addToCartButton, quantity } =
    OpenModalAndRetrieveButtons(1, true);

  // Clique sur les boutons d'incrémentation / de décrémentation et vérifie la quantité
  fireEvent.click(incrementButton); // 1+1=2
  fireEvent.click(incrementButton); // 2+1=3
  expect(quantity.textContent).toBe('3');
  fireEvent.click(decrementButton); // 3-1=2
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
  CheckModalClosure();
});
