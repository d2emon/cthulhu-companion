import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import DiceField from './DiceField';

const dices = [
  {
    id: 'd4',
    title: 'd4',
    value: 4,
  },
  {
    id: 'd6',
    title: 'd6',
    value: 6,
  },
];

describe('DiceField', () => {
  it('renders select', async () => {
    render(<DiceField
      dices={dices}
      value="d6"
    />);

    const field = screen.getByRole('combobox');
    expect(field.value).toEqual('d6');
  });

  it('has dices in options', async () => {
    render(<DiceField
      dices={dices}
      value="d6"
    />);

    const options = screen.getAllByRole('option');
    options.forEach((option, optionId) => {
      const dice = dices[optionId];
      expect(option.value).toEqual(dice.id);
      expect(option).toHaveTextContent(dice.title);
    });
  });

  it('handles change', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<DiceField
      dices={dices}
      value="d6"
      onChange={onChange}
    />);

    const field = screen.getByRole('combobox');
    expect(field.value).toEqual('d6');

    await user.selectOptions(field, 'd4');

    expect(onChange).toBeCalled();
    expect(onChange.mock.calls[0][0]).toEqual('d4');
  });

  it('throws no error on no onChange', async () => {
    const user = userEvent.setup();

    render(<DiceField
      dices={dices}
      value="d6"
    />);

    const field = screen.getByRole('combobox');

    await expect(user.selectOptions(field, 'd4'))
      .resolves
      .not
      .toThrowError();
  });
});
