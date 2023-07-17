import {
  GiD4, GiDiceSixFacesSix, GiDiceEightFacesEight,
  GiD10, GiD12, GiDiceTarget
} from 'react-icons/gi';

const icons = {
  d4: <GiD4 />,
  d6: <GiDiceSixFacesSix />,
  d8: <GiDiceEightFacesEight />,
  d10: <GiD10 />,
  d12: <GiD12 />,
};

function DiceIcon ({
  diceId,
}) {
  return (icons[diceId] || <GiDiceTarget />);
}

export default DiceIcon;
