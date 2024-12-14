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

  // Vérifier que quantitySelectionModalisOpen passe à true et que articleToAdd est correctement défini
  // (la vérification de l'ouverture de la modal ou de ses éléments ne fonctionnent pas ici, pb avec dialog)
  const { quantitySelectionModalisOpen, articleToAdd } = useStore.getState();
  expect(quantitySelectionModalisOpen).toBe(true);
  const expectedPizza = {
    picture: '/src/assets/margherita.jpg',
    name: 'Margherita',
    price: 12.9,
    quantity: 1,
  };
  expect(articleToAdd).toEqual(expectedPizza);
});
