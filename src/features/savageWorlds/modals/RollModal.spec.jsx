import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import * as diceAPI from '../api/diceAPI';
import rollReducer from '../rollSlice';
import RollModal from './RollModal';

const initialState = {
  diceId: 'd6',
  difficulty: 4,
  modifiers: [
    {
      id: 'modifierId',
      title: 'Title',
      value: 2,
    },
  ],
  rolls: [],
  withAces: true,          
};

const store = configureStore({
  preloadedState: {
    roll: initialState,
  },
  reducer: {
    roll: rollReducer,
  },
});

describe('RollModal', () => {
  const rollMock = jest.spyOn(diceAPI, 'fetchRollData');
  let user;

  beforeEach(() => {
    user = userEvent.setup();
    rollMock.mockClear();
  });

  afterAll(() => {
    cleanup();
  });

  it('shows modal', async () => {
    render(
      <Provider store={store}>
        <RollModal
          show={true}
        />
      </Provider>
    );
  
    const title = screen.getByTestId('modal-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Бросок');
  });

  it('hides modal', async () => {
    const onHide = jest.fn();

    render(
      <Provider store={store}>
        <RollModal
          show={true}
          onHide={onHide}
        />
      </Provider>
    );
        
    const button = screen.getByTestId('close-button');
    expect(button).toBeInTheDocument();

    await act(() => user.click(button));

    expect(onHide).toBeCalled();
  });

  it('does roll', async () => {
    const onHide = jest.fn();

    render(
      <Provider store={store}>
        <RollModal
          show={true}
          onHide={onHide}
        />
      </Provider>
    );
        
    const button = screen.getByTestId('roll-button');
    expect(button).toBeInTheDocument();

    expect(rollMock).not.toHaveBeenCalled();

    await act(() => user.click(button));

    expect(rollMock).toHaveBeenCalled();

    expect(rollMock.mock.calls[0][0]).toEqual({
      data: {
        difficulty: 4,
        modifiers: [
          {
            id: 'modifierId',
            title: 'Title',
            value: 2,
          },
        ],
        withAces: true,
      },
      query: {
        diceId: 'd6',
      },
    });

    expect(onHide).toBeCalled();
  });

  it('throws no error on hide with no onHide', async () => {
    render(
      <Provider store={store}>
        <RollModal
          show={true}
        />
      </Provider>
    );

    const button = screen.getByTestId('close-button');
    expect(button).toBeInTheDocument();

    const doClick = async () => act(() => user.click(button));
    await expect(doClick())
      .resolves
      .not
      .toThrowError();
  });

  it('throws no error on roll with no onHide', async () => {
    render(
      <Provider store={store}>
        <RollModal
          show={true}
        />
      </Provider>
    );

    const button = screen.getByTestId('roll-button');
    expect(button).toBeInTheDocument();

    const doClick = async () => act(() => user.click(button));
    await expect(doClick())
      .resolves
      .not
      .toThrowError();
  });
});
