import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import ModifierField from './ModifierField';

describe('ModifierField', () => {
  it('renders all fields', async () => {
    render(<ModifierField
      title="Field title"
      value={3}
    />);

    const titleField = screen.getByRole('textbox');
    expect(titleField.value).toEqual('Field title');

    const valueField = screen.getByRole('spinbutton');
    expect(valueField.value).toEqual('3');

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Удалить');
  });

  it('handles change title', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<ModifierField
      id="fieldId"
      title="Field title"
      value={3}
      onChange={onChange}
    />);

    const field = screen.getByRole('textbox');
    expect(field.value).toEqual('Field title');

    await user.type(field, '1');

    expect(onChange).toBeCalled();
    expect(onChange.mock.calls[0][0]).toEqual({
      id: 'fieldId',
      title: 'Field title1',
      value: 3,
    });
  });

  it('handles change value', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<ModifierField
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
      title: 'Field title',
      value: 31,
    });
  });

  it('handles delete value', async () => {
    const user = userEvent.setup();
    const onRemove = jest.fn();

    render(<ModifierField
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

    render(<ModifierField
      title="Field title"
      value={3}
    />);

    const titleField = screen.getByRole('textbox');
    await expect(user.type(titleField, '1'))
      .resolves
      .not
      .toThrowError();

    const valueField = screen.getByRole('spinbutton');
    await expect(user.type(valueField, '1'))
      .resolves
      .not
      .toThrowError();
  });

  it('throws no error on no onRemove', async () => {
    const user = userEvent.setup();

    render(<ModifierField
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
