import { fireEvent, render, screen } from '@testing-library/react';

import App from '../../component/App/App';

export function OpenModalAndRetrieveButtons(pizzaId: number) {
  // Simule le rendu de l'application
  render(<App />);

  // Récupère le bouton de commande de la première pizza et clique dessus
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

  return { incrementButton, decrementButton, quantity, addToCartButton };
}
