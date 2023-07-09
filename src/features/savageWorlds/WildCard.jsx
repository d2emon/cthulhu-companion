import { Card } from 'react-bootstrap';

function WildCard () {
  return (
    <Card>
      <ul>
        <li>
            дикие карты могут получить несколько ранений;
        </li>
        <li>
            дикие карты всегда бросают дикий кубик вместе с игральной костью, соответствующей
            параметру, во время всех проверок и из двух результатов выбирают лучший.
        </li>
      </ul>
    </Card>
  );
}

export default WildCard;
