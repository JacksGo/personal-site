import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.scss'
import Ebay from './pages/Ebay';
import Heal from './pages/Heal';
import Home from './pages/Home';
import Los from './pages/Los';
import Markus from './pages/Markus';
import Quest from './pages/Quest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quest',
    element: <Quest />,
  },
  {
    path: '/los',
    element: <Los />,
  },
  {
    path: '/markus',
    element: <Markus />,
  },
  {
    path: '/heal',
    element: <Heal />,
  },
  {
    path: '/ebay',
    element: <Ebay />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
)
