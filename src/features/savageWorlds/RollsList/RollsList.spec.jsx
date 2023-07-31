import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RollList from './index';
import rollReducer from '../rollSlice';

const initialState = {
  diceId: 'd4',
  /*
  dices: [
    {
      id: 'd4',
      title: 'd4',
      value: 4
    },
    {
      id: 'd6',
      title: 'd6',
      value: 6
    },
    {
      id: 'd8',
      title: 'd8',
      value: 8
    },
    {
      id: 'd10',
      title: 'd10',
      value: 10
    },
    {
      id: 'd12',
      title: 'd12',
      value: 12
    }
  ],
  */
  // difficulty: 4,
  /*
  modifiers: [
    {
      id: 'modifierId',
      title: 'Title',
      value: 2,
    },
  ],
  */
  rolls: [
    {
      id: '647a28fd-8eb2-4f90-b006-cf7348c9f2a6',
      dice: {
        id: 'd4',
        title: 'd4',
        value: 4,
      },
      difficulty: 4,
      modifiers: [],
      rolls: {
        rolls: [
          {
            id: '2b773933-e24a-472e-991f-19e22255cb04',
            value: 3,
            isAce: false,
          },
        ],
        modified: 3,
        raises: 0,
        total: 3,
        success: false,
      },
      withAces: true
    },
    {
      id: '58e6da21-d739-41b9-8ec7-93c95dca9dde',
      dice: {
        id: 'd4',
        title: 'd4',
        value: 4
      },
      difficulty: 4,
      modifiers: [],
      rolls: {
        rolls: [
          {
            id: '2b773933-e24a-472e-991f-19e22255cb04',
            value: 2,
            isAce: false,
          },
        ],
        modified: 3,
        raises: 0,
        total: 2,
        success: false,
      },
      withAces: true,
    },
  ],
  // withAces: true,          
};

const store = configureStore({
  preloadedState: {
    roll: initialState,
  },
  reducer: {
    roll: rollReducer,
  },
});

describe('RollsList', () => {
  it('has roll button', async () => {
    render(
      <Provider store={store}>
        <RollList />
      </Provider>
    );

    const button = screen.getByTestId('add-roll-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Бросить');
  });

  it('shows roll modal', async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <RollList />
      </Provider>
    );
    
    const showButton = screen.getByTestId('add-roll-button');
    expect(showButton).toBeInTheDocument();

    const noModal = screen.queryByTestId('roll-modal');
    expect(noModal).toBeFalsy();
    
    await act(() => user.click(showButton));
      
    const modal = screen.queryByTestId('roll-modal');
    expect(modal).toBeTruthy();

    const closeButton = within(modal).getByTestId('close-button');
    expect(closeButton).toBeInTheDocument();
    
    await act(() => user.click(closeButton));
      
    const modalAfter = screen.queryByTestId('roll-modal');
    expect(modalAfter).toBeFalsy();
  });

  it('has roll results', async () => {
    render(
      <Provider store={store}>
        <RollList />
      </Provider>
    );

    const resultsBlock = screen.getByTestId('roll-results');
    expect(resultsBlock).toBeInTheDocument();

    const results = within(resultsBlock).getAllByTestId('roll-card');
    expect(results.length).toEqual(2);

    await Promise.all(results.map((result) => new Promise((resolve) => {
      const r = within(result).getByTestId('roll-total');
      expect(r).toBeInTheDocument();
      resolve();
    })));
  });
});
