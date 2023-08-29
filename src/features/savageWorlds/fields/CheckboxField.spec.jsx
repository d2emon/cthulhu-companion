import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import CheckboxField from './CheckboxField';

describe('CheckboxField', () => {
  it('renders checked', async () => {
    render(<CheckboxField
      type="checkbox"
      label="checkbox label"
      value={true}
    />);

    const label = screen.getByText('checkbox label');
    expect(label).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.type).toEqual('checkbox');
    expect(checkbox.checked).toBeTruthy();
  });

  it('renders unchecked', async () => {
    render(<CheckboxField
      type="checkbox"
      label="checkbox label"
      value={false}
    />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.checked).toBeFalsy();
  });

  it('handles checked click', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<CheckboxField
      type="checkbox"
      label="checkbox label"
      value={true}
      onChange={onChange}
    />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.checked).toBeTruthy();

    await user.click(checkbox);

    expect(onChange).toBeCalled();
    expect(onChange.mock.calls[0][0]).toBeFalsy();
  });

  it('handles unchecked click', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<CheckboxField
      type="checkbox"
      label="checkbox label"
      value={false}
      onChange={onChange}
    />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.checked).toBeFalsy();

    await user.click(checkbox);

    expect(onChange).toBeCalled();
    expect(onChange.mock.calls[0][0]).toBeTruthy();
  });

  it('handles unhandled click', async () => {
    const user = userEvent.setup();

    render(<CheckboxField
      type="checkbox"
      label="checkbox label"
      value={true}
    />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.checked).toBeTruthy();

    await user.click(checkbox);

    expect(checkbox.checked).toBeTruthy();
  });
});


describe('CheckboxField with radio type', () => {
  it('renders checked', async () => {
    render(<CheckboxField
      type="radio"
      label="radio label"
      value={true}
    />);

    const label = screen.getByText('radio label');
    expect(label).toBeInTheDocument();

    const checkbox = screen.getByRole('radio');
    expect(checkbox.type).toEqual('radio');
    expect(checkbox.checked).toBeTruthy();
  });

  it('renders unchecked', async () => {
    render(<CheckboxField
      type="radio"
      label="radio label"
      value={false}
    />);

    const checkbox = screen.getByRole('radio');
    expect(checkbox.checked).toBeFalsy();
  });

  it('handles click', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<CheckboxField
      type="radio"
      value={false}
      onChange={onChange}
    />);

    const checkbox = screen.getByRole('radio');
    expect(checkbox.checked).toBeFalsy();

    await user.click(checkbox);

    expect(onChange).toBeCalled();
    expect(onChange.mock.calls[0][0]).toBeTruthy();
  });
});
