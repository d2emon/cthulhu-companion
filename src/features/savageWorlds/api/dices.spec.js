import dices from './dices';

describe('Dices', () => {
  it('should have d4', () => {
    const dice = dices.find((item) => (item.id === 'd4'));

    expect(dice).not.toBeNull();

    expect(dice.title).toEqual('d4');
    expect(dice.value).toEqual(4);
  });

  it('should have d6', () => {
    const dice = dices.find((item) => (item.id === 'd6'));

    expect(dice).not.toBeNull();

    expect(dice.title).toEqual('d6');
    expect(dice.value).toEqual(6);
  });

  it('should have d8', () => {
    const dice = dices.find((item) => (item.id === 'd8'));

    expect(dice).not.toBeNull();

    expect(dice.title).toEqual('d8');
    expect(dice.value).toEqual(8);
  });

  it('should have d10', () => {
    const dice = dices.find((item) => (item.id === 'd10'));

    expect(dice).not.toBeNull();

    expect(dice.title).toEqual('d10');
    expect(dice.value).toEqual(10);
  });

  it('should have d12', () => {
    const dice = dices.find((item) => (item.id === 'd12'));

    expect(dice).not.toBeNull();

    expect(dice.title).toEqual('d12');
    expect(dice.value).toEqual(12);
  });
});
