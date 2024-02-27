import React, { useCallback } from 'react';
import { Container } from 'react-bootstrap';
import StepStats from './StepStats';

const stats = [
  {
    id: 'str',
    title: 'Сила (СИЛ)',
  },
  {
    id: 'con',
    title: 'Выносливость (ВЫН)',
  },
  {
    id: 'pow',
    title: 'Мощь (МОЩ)',
  },
  {
    id: 'dex',
    title: 'Ловкость (ЛВК)',
  },
  {
    id: 'app',
    title: 'Наружность (НАР)',
  },
  {
    id: 'siz',
    title: 'Телосложение (Тел)',
  },
  {
    id: 'int',
    title: 'Интеллект (ИНТ)',
  },
  {
    id: 'edu',
    title: 'Образование (ОБР)',
  },
];
const points = [
  40, 50, 50, 50,
  60, 60, 70, 80,
];
const defaultValues = points.map((value, id) => ({
  id: `${id + 1}`,
  value,
}));

function CharacterMaster() {
  const onStatsChange = useCallback((result) => {
    console.log(result);
  }, []);

  return (
    <Container>
      <StepStats
        points={defaultValues}
        stats={stats}
        onChange={onStatsChange}
      />
    </Container>
  );
}

export default CharacterMaster;
