import { expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import App from '../../component/App/App';

export function OpenModalAndRetrieveButtons(
  pizzaId: number,
  renderApp: boolean
) {
  // Simule le rendu de l'application
  if (renderApp) render(<App />);

  // Récupère le bouton de commande et clique dessus
  const orderButton = screen.getByTestId(`order-button-pizzaId-${pizzaId}`);
  fireEvent.click(orderButton);

  // Récupère les boutons et l'information quantité de la modal
  const incrementButton = screen.getByTestId(
    'modal__quantity-selection-buttons-increment'
  );
  const decrementButton = screen.getByTestId(
    'modal__quantity-selection-buttons-decrement'
  );
  const quantity = screen.getByTestId(
    'modal__quantity-selection-buttons-quantity'
  );
  const addToCartButton = screen.getByTestId('modal__add-to-cart-button');

  expect(decrementButton).toBeInTheDocument();
  expect(decrementButton).toBeDisabled();
  expect(quantity).toBeInTheDocument();
  expect(quantity.textContent).toBe('1');
  expect(incrementButton).toBeInTheDocument();
  expect(addToCartButton).toBeInTheDocument();

  return { incrementButton, decrementButton, quantity, addToCartButton };
}
