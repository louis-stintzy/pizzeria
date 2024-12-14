import { expect } from 'vitest';
import useStore from '../../store/store';
import { screen } from '@testing-library/react';

export function CheckModalClosure() {
  // Vérifie que la modal est fermée (etat du store)
  const { quantitySelectionModalisOpen } = useStore.getState();
  expect(quantitySelectionModalisOpen).toBe(false);

  // Vérifie que les éléments de la modal ne sont pas présents
  expect(screen.queryByTestId('pizza-modal')).not.toBeInTheDocument();
  expect(
    screen.queryByTestId('modal__quantity-selection-buttons-increment')
  ).not.toBeInTheDocument();
  expect(
    screen.queryByTestId('modal__quantity-selection-buttons-decrement')
  ).not.toBeInTheDocument();
  expect(
    screen.queryByTestId('modal__add-to-cart-button')
  ).not.toBeInTheDocument();
}
