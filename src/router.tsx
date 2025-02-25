import { createBrowserRouter } from 'react-router-dom';

import NewPizza from './pages/NewPizza';
import App from './component/App/App';
import Home from './pages/Home';

export const routerConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/admin/new-pizza',
        element: <NewPizza />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
