import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import RollCard from './RollCard';

describe('RollCard', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
  });
  
  afterAll(() => {
    cleanup();
  });
  
  it('has roll total', async () => {
    render(
      <RollCard
        roll={{
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
          wildIsBetter: false,
          withAces: true,
        }}
      />
    );
    
    const total = screen.getByTestId('roll-total');
    expect(total).toBeInTheDocument();
    expect(total).toHaveTextContent('3');

    const button = screen.getByTestId('roll-detail-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Подробнее');
  });

  it('executes onClick', async () => {
    const onClick = jest.fn();

    render(
      <RollCard
        roll={{
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
          withAces: true,
        }}
        onClick={onClick}
      />
    );
        
    const button = screen.getByTestId('roll-detail-button');
    expect(button).toBeInTheDocument();

    await act(() => user.click(button));

    expect(onClick).toHaveBeenCalled();
  });

  it('throws no error on click with no onClick', async () => {
    render(
      <RollCard
        roll={{
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
          withAces: true,
        }}
      />
    );

    const button = screen.getByTestId('roll-detail-button');
    expect(button).toBeInTheDocument();

    const doClick = async () => act(() => user.click(button));
    await expect(doClick())
      .resolves
      .not
      .toThrowError();
  });
});
