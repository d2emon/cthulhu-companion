const dice = (value) => ({
  id: `d${value}`,
  title: `d${value}`,
  value,
});

const dices = [
  dice(4),
  dice(6),
  dice(8),
  dice(10),
  dice(12),
];

export default dices;
