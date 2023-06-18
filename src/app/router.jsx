import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Game from '../pages/Game';
// import Main from './pages/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Game />,
    /*
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Game />,
      },
    ],
    */
  },
  {
    path: '/login',
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
    element: <Game />,
  },
  {
    path: '/characters/:characterId',
    element: <Game />,
  },
  {
    path: '/maps',
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
