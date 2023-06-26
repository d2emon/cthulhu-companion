import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Campaign from '../pages/Campaign';
import Characters from '../pages/Characters';
import Game from '../pages/Game';
import Bestiary from '../pages/Bestiary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Campaign />,
    children: [
      {
        path: '/',
        element: <Game />,
      },
      {
        path: '/adventure-log',
        element: <Game />,
      },
      {
        path: '/wiki/:pageId',
        element: <Game />,
      },
      {
        path: '/characters',
        element: <Characters />,
      },
      {
        path: '/characters/:characterId',
        element: <Game />,
      },
      {
        path: '/maps',
        element: <Game />,
      },
      // Apps
      {
        path: '/bestiary',
        element: <Bestiary />,
      },
    ],
  },
  {
    path: '/login',
    element: <Game />,
  },
  {
    path: '/profile/:userId',
    element: <Game />,
  },
  {
    path: '/campaigns',
    element: <Game />,
  },
]);

export default router;
