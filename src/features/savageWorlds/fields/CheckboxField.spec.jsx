import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import CheckboxField from './CheckboxField';

describe('CheckboxField', () => {
  it('renders unchecked checkbox', () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<CheckboxField
      type="checkbox"
      label="checkbox label"
      value={false}
      onChange={onChange}
    />);
    const label = screen.getByText('checkbox label');
    expect(label).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.type).toEqual('checkbox');
    expect(checkbox.checked).toBeFalsy();

    userEvent.click(checkbox);
    userEvent.click(label);
    fireEvent.change(checkbox, {target: {value: true}})

    expect(onChange).toBeCalled();
  });

  it('renders checked checkbox', () => {
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

  it('renders radio', () => {
    render(<CheckboxField
      type="radio"
      label="radio label"
    />);
    const label = screen.getByText('radio label');
    expect(label).toBeInTheDocument();

    const checkbox = screen.getByRole('radio');
    expect(checkbox.type).toEqual('radio');
  });
});
