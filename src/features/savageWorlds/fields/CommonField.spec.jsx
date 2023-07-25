import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import CommonField from './CommonField';

describe('CommonField', () => {
  it('renders text field', async () => {
    render(<CommonField
      placeholder="label"
      type="text"
      value="value"
    />);

    const field = screen.getByRole('textbox');
    expect(field.placeholder).toEqual('label');
    expect(field.type).toEqual('text');
    expect(field.value).toEqual('value');
  });

  it('handles change', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<CommonField
      type="text"
      value="value"
      onChange={onChange}
    />);

    const field = screen.getByRole('textbox');
    expect(field.value).toEqual('value');

    await user.type(field, '1');

    expect(onChange).toBeCalled();
    expect(onChange.mock.calls[0][0]).toEqual('value1');
  });

  /*
  it('handles unchecked click', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<CommonField
      type="field"
      label="field label"
      value={false}
      onChange={onChange}
    />);

    const field = screen.getByRole('textbox');
    expect(field.checked).toBeFalsy();

    await user.click(field);

    expect(onChange).toBeCalled();
    expect(onChange.mock.calls[0][0]).toBeTruthy();
  });

  it('handles unhandled click', async () => {
    const user = userEvent.setup();

    render(<CommonField
      type="field"
      label="field label"
      value={true}
    />);

    const field = screen.getByRole('textbox');
    expect(field.checked).toBeTruthy();

    await user.click(field);

    expect(field.checked).toBeTruthy();
  });
  */
});

/*
describe('CommonField with radio type', () => {
  it('renders checked', async () => {
    render(<CommonField
      type="radio"
      label="radio label"
      value={true}
    />);

    const field = screen.getByRole('radio');
    expect(field.type).toEqual('radio');
    expect(field.checked).toBeTruthy();
  });

  it('renders unchecked', async () => {
    render(<CommonField
      type="radio"
      label="radio label"
      value={false}
    />);

    const field = screen.getByRole('textbox');
    expect(field.checked).toBeFalsy();
  });

  it('handles click', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<CommonField
      type="radio"
      value={false}
      onChange={onChange}
    />);

    const field = screen.getByRole('textbox');
    expect(field.checked).toBeFalsy();

    await user.click(field);

    expect(onChange).toBeCalled();
    expect(onChange.mock.calls[0][0]).toBeTruthy();
  });
});
*/
