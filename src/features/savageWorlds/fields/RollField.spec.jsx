import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import RollField from './RollField';

describe('RollField', () => {
  it('renders all fields', async () => {
    render(<RollField
      id="fieldId"
      title="Field title"
      value={3}
    />);

    const field = screen.getByRole('spinbutton');
    expect(field.value).toEqual('3');

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Удалить');
  });

  it('renders without aces', async () => {
    render(<RollField
      id="fieldId"
      title="Field title"
      value={3}
    />);

    const acesContainer = screen.queryByTestId('ace-badge');
    expect(acesContainer).toBeFalsy();
  });

  it('renders aces', async () => {
    render(<RollField
      id="fieldId"
      isAce
      title="Field title"
      value={3}
    />);

    const acesContainer = screen.queryByTestId('ace-badge');
    expect(acesContainer).toBeTruthy();

    const aces = within(acesContainer).getByText('Взрыв');

    expect(aces).toHaveClass('bg-success');
  });

  it('handles change value', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<RollField
      id="fieldId"
      title="Field title"
      value={3}
      onChange={onChange}
    />);

    const field = screen.getByRole('spinbutton');
    expect(field.value).toEqual('3');

    await user.type(field, '1');

    expect(onChange).toBeCalled();
    expect(onChange.mock.calls[0][0]).toEqual({
      id: 'fieldId',
      isAce: false,
      value: 31,
    });
  });

  it('handles delete value', async () => {
    const user = userEvent.setup();
    const onRemove = jest.fn();

    render(<RollField
      id="fieldId"
      title="Field title"
      value={3}
      onRemove={onRemove}
    />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(onRemove).toBeCalled();
    expect(onRemove.mock.calls[0][0]).toEqual('fieldId');
  });

  it('throws no error on no onChange', async () => {
    const user = userEvent.setup();

    render(<RollField
      title="Field title"
      value={3}
    />);

    const field = screen.getByRole('spinbutton');
    await expect(user.type(field, '1'))
      .resolves
      .not
      .toThrowError();
  });

  it('throws no error on no onRemove', async () => {
    const user = userEvent.setup();

    render(<RollField
      title="Field title"
      value={3}
    />);

    const button = screen.getByRole('button');
    await expect(user.click(button))
      .resolves
      .not
      .toThrowError();
  });
});
