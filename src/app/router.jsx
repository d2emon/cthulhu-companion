import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Campaign from '../pages/Campaign';
import Characters from '../pages/Characters';
import Game from '../pages/Game';
import Bestiary from '../features/bestiary/pages';

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
        children: [
          {
            path: '',
            element: <Bestiary.List />,    
          },
          {
            path: 'sources',
            element: <Bestiary.Sources />,
          },
          {
            path: ':id',
            element: <Bestiary.List />,    
          },
        ],
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
