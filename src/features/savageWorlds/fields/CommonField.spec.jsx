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

  it('don\'t run onChange when readOnly', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<CommonField
      type="text"
      readOnly
      value="value"
      onChange={onChange}
    />);

    const field = screen.getByRole('textbox');
    expect(field.value).toEqual('value');

    await user.type(field, '1');

    expect(onChange).not.toBeCalled();
  });

  it('throws no error on no onChange', async () => {
    const user = userEvent.setup();

    render(<CommonField
      type="text"
      value="value"
    />);

    const field = screen.getByRole('textbox');

    await expect(user.type(field, '1'))
      .resolves
      .not
      .toThrowError();
  });
});
