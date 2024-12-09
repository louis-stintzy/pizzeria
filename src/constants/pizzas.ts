import margherita from '../assets/margherita.jpg';
import regina from '../assets/regina.jpg';
import calzone from '../assets/calzone.jpg';
import vegetarienne from '../assets/vegetarienne.jpg';

import { Pizza } from '../@types/pizza';

const pizzas: Pizza[] = [
  {
    id: 1,
    name: 'Margherita',
    picture: margherita,
    toppings: 'Tomate, mozzarella, basilic frais',
    price: 12.9,
  },
  {
    id: 2,
    name: 'Regina',
    picture: regina,
    toppings: 'Tomate, mozzarella, jambon, champignons',
    price: 14.9,
  },
  {
    id: 3,
    name: 'Calzone',
    picture: calzone,
    toppings: 'Tomate, mozzarella, jambon, œuf',
    price: 15.9,
  },
  {
    id: 4,
    name: 'Végétarienne',
    picture: vegetarienne,
    toppings: 'Tomate, légumes grillés, olives',
    price: 13.9,
  },
];

export default pizzas;
