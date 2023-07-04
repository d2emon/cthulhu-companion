import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedSources, setSources } from '../bestiarySlice';
import Sources from '../pages/Sources';
import { selectSources } from '../sourcesSlice';

function SourcesContainer({
  onHide,
}) {
  const dispatch = useDispatch();

  const items = useSelector(selectSources);
  const selected = useSelector(selectSelectedSources);

  const handleSelectSources = useCallback(
    (value) => {
      dispatch(setSources(value));
    },
    [
      dispatch,
    ],
  );

  useEffect(
    () => {
      dispatch(setSources(items.reduce(
        (result, source) => ({
          ...result,
          [source.id]: true,
        }),
        {},
      )));
    },
    [
      dispatch,
      items,
    ],
  )

  return (
    <Sources
      items={items}
      selected={selected}
      onChange={handleSelectSources}
      onHide={onHide}
    />
  );
}

export default SourcesContainer;
