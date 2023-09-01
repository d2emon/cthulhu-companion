import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Button, Card, Container, Form, InputGroup } from 'react-bootstrap';
import { BsTagFill } from 'react-icons/bs';
import { MdSearch } from 'react-icons/md';

function TagGroup({
  items,
  value,
  onChange,
}) {
  const [selectedTags, setSelectedTags] = useState(value);
  const [selected, setSelected] = useState({});
    
  const handleChageTag = useCallback((id) => (e) => {
    const newData = {
      ...selected,
      [id]: e.target.checked,
    };
    // setSelected(newData);
    setSelectedTags(Object.keys(newData).filter(tagId => newData[tagId]));  
  }, [selected]);

  useEffect(() => {
    setSelected(items.reduce(
      (result, item) => ({
        ...result,
        [item.id]: value && (value.indexOf(item.id) >= 0),
      }),
      {},
    ));
  }, [
    items,
    value,
  ]);

  useEffect(() => {
    if (onChange) {
      onChange(selectedTags);
    }
  }, [
    selectedTags,
    onChange,
  ]);

  return (
    <Container>
      { items.map((group) => (
        <Form.Check
          key={group.id}
          id={group.id}
          name={group.id}
          label={group.title}
          checked={!!selected[group.id]}
          type="checkbox"
          inline
          onChange={handleChageTag(group.id)}
        />
      )) }
    </Container>
  );
}

function CharacterFilters({
  groups,
  tags,
  onFilter,
}) {
  const [searchString, setSearchString] = useState('');
  const [selectedGroups, setSelectedGroups] = useState(['pc', 'npc']);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleChangeSearchString = useCallback((e) => {
    setSearchString(e.target.value);
  }, []);

  const handleChangeTag = useCallback((values) => {
    setSelectedTags(values);
  }, []);

  const handleChangeGroup = useCallback((values) => {
    setSelectedGroups(values);
  }, []);

  const search = useCallback(() => {
    console.log('Search', searchString);
  }, [
    searchString,
  ]);

  useEffect(() => {
    if (onFilter) {
      onFilter({
        name: searchString,
        tags: selectedTags,
        groups: selectedGroups,
      });      
    }
  }, [
    searchString,
    selectedTags,
    selectedGroups,
    onFilter,
  ]);

  return (
    <Card className="mb-2">
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Быстрый поиск персонажа</Form.Label>
            <InputGroup>
              <Form.Control
                value={searchString}
                onChange={handleChangeSearchString}
              />
              <Button
                onClick={search}
              >
                <MdSearch />
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
      </Card.Body>

      <Accordion
        className="mt-2"
        flush
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header><BsTagFill />&nbsp;Фильтры</Accordion.Header>
          <Accordion.Body>
            <TagGroup
              items={groups}
              value={selectedGroups}
              onChange={handleChangeGroup}
            />

            <TagGroup
              items={tags}
              value={selectedTags}
              onChange={handleChangeTag}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
}

export default CharacterFilters;
