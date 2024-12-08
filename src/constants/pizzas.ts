import { Pizza } from '../@types/pizza';

const pizzas: Pizza[] = [
  {
    id: 1,
    name: 'Margherita',
    picture: '/src/assets/margherita.jpg',
    toppings: 'Tomate, mozzarella, basilic frais',
    price: 12.9,
  },
  {
    id: 2,
    name: 'Regina',
    picture: '/src/assets/regina.jpg',
    toppings: 'Tomate, mozzarella, jambon, champignons',
    price: 14.9,
  },
  {
    id: 3,
    name: 'Calzone',
    picture: '/src/assets/calzone.jpg',
    toppings: 'Tomate, mozzarella, jambon, œuf',
    price: 15.9,
  },
  {
    id: 4,
    name: 'Végétarienne',
    picture: '/src/assets/vegetarienne.jpg',
    toppings: 'Tomate, légumes grillés, olives',
    price: 13.9,
  },
];

export default pizzas;
