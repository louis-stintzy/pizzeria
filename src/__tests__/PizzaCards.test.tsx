import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import pizzas from '../constants/pizzas';
import App from '../component/App/App';

pizzas.forEach((pizza) => {
  test(`renders the ${pizza.name} pizza card with all essential elements`, () => {
    render(<App />); // Simule le rendu de l'application
    expect(screen.getByText(pizza.name)).toBeInTheDocument(); // Vérifie que le titre de la carte est présent
    expect(screen.getByText(pizza.toppings)).toBeInTheDocument(); // Vérifie que la description de la carte est présente
    expect(screen.getByText(`${pizza.price.toFixed(2)} €`)).toBeInTheDocument(); // Vérifie que le prix de la pizza est présent
    expect(
      screen.getByAltText(`photo of a ${pizza.name} pizza`)
    ).toBeInTheDocument(); // Vérifie que l'image de la pizza est présente
    expect(
      screen.getByTestId(`order-button-pizzaId-${pizza.id}`)
    ).toBeInTheDocument(); // Vérifie que le bouton de commande est présent (en utilisant l'attribut data-testid)
  });
});
