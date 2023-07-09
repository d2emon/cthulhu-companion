const stats = [
  {
    id: 'agility',
    title: 'Ловкость',
    description: <div>
      Ловкость отражает проворство, скорость реакции и подвижность вашего персонажа.
    </div>,
  },
  {
    id: 'smarts',
    title: 'Смекалка',
    description: <div>
      Смекалка отражает знание культуры и окружающего мира, находчивость и способность схватывать
      на лету.
    </div>,
  },
  {
    id: 'spirit',
    title: 'Характер',
    description: <div>
      Характер отражает мудрость и силу воли вашего персонажа. Характер — очень важный параметр,
      потому что именно он позволяет персонажу оправиться от шока в случае ранения.
    </div>,
  },
  {
    id: 'strength',
    title: 'Сила',
    description: <div>
      Сила отвечает за физическую форму и мощь вашего персонажа. Сила также влияет на урон,
      наносимый им в ближнем бою.
    </div>,
  },
  {
    id: 'vigor',
    title: 'Выносливость',
    description: <div>
      Выносливость определяет стойкость организма, сопротивляемость болезням и ядам, а также
      количество физического урона, которое может перенести персонаж без вреда для себя.
    </div>,
  },
];

export const getPace = ({ race }) => (race.pace);
export const getParry = ({ skills }) => (2 + Math.floor(skills.fight / 2));
export const getCharisma = () => 0;
export const getToughness = ({ values, armor }) => (2 + Math.floor(values.vigor / 2) + armor);

export default stats;
