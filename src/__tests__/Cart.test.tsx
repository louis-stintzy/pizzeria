import { test, expect, beforeAll, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { OpenModalAndRetrieveButtons } from './utils/OpenModalAndRetrieveButtons';
import { screen } from '@testing-library/react';

// Mock la méthode showModal pour éviter les erreurs
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn();
});

test(`displays shopping cart correctly with items`, () => {
  // Margherita : Ouvre la modal, vérifie la présence des éléments et récupère des boutons (et quantity)
  const { incrementButton: mgPlus, addToCartButton: mgAdd } =
    OpenModalAndRetrieveButtons(1, true);
  // Ajoute une deuxième Margherita et clique sur le bouton "Ajouter au panier"
  fireEvent.click(mgPlus);
  fireEvent.click(mgAdd);

  // Regina : Ouvre la modal, vérifie la présence des éléments et récupère des boutons (et quantity)
  const { incrementButton: rgPlus, addToCartButton: rgAdd } =
    OpenModalAndRetrieveButtons(2, false);
  // Ajoute une deuxième et une troisième Regina et clique sur le bouton "Ajouter au panier"
  fireEvent.click(rgPlus);
  fireEvent.click(rgPlus);
  fireEvent.click(rgAdd);

  // Vérifie le shopping cart à l'écran
  expect(screen.getByText('Margherita x 2')).toBeInTheDocument();
  expect(screen.getByText('25.80 €')).toBeInTheDocument();
  expect(screen.getByText('Regina x 3')).toBeInTheDocument();
  expect(screen.getByText('44.70 €')).toBeInTheDocument();
  expect(screen.getByText('Total : 70.50 €')).toBeInTheDocument();
});
