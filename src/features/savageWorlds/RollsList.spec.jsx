import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import RollList from './RollsList';

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
  });

  /*
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
  */
});
