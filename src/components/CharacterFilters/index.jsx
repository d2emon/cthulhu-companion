import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  Accordion,
  Button,
  Card,
  Form,
  InputGroup,
} from 'react-bootstrap';
import { BsTagFill } from 'react-icons/bs';
import { MdSearch } from 'react-icons/md';

// Components
import TagGroup from './TagGroup';

function CharacterFilters({
  groups,
  tags,
  value,
  onFilter,
}) {
  const [searchString, setSearchString] = useState('');
  const [selectedGroups, setSelectedGroups] = useState(groups);
  const [selectedTags, setSelectedTags] = useState(tags);

  const handleFilter = useCallback((data) => {
    if (onFilter) {
      onFilter(data);      
    }
  }, [
    onFilter,
  ]);

  const handleChangeSearchString = useCallback((e) => {
    setSearchString(e.target.value);
    handleFilter({
      groups: selectedGroups,
      name: e.target.value,
      tags: selectedTags,
    });
  }, [
    handleFilter,
    selectedGroups,
    selectedTags,
  ]);

  const handleChangeTag = useCallback((values) => {
    setSelectedTags(values);
    handleFilter({
      groups: selectedGroups,
      name: searchString,
      tags: values,
    });
  }, [
    handleFilter,
    searchString,
    selectedGroups,
  ]);

  const handleChangeGroup = useCallback((values) => {
    setSelectedGroups(values);
    handleFilter({
      groups: values,
      name: searchString,
      tags: selectedTags,
    });
  }, [
    handleFilter,
    searchString,
    selectedTags,
  ]);

  const search = useCallback(() => {
    console.log('Search', searchString);
  }, [
    searchString,
  ]);

  useEffect(() => {
    setSelectedGroups(value?.groups || []);
    setSelectedTags(value?.tags || []);
  }, [value]);

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
