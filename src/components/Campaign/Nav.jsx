import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdBackpack, MdEditCalendar } from 'react-icons/md';
import { BsHouseDoor, BsMap, BsPeople, BsWikipedia } from 'react-icons/bs';

const items = [
    {
        id: 'main',
        link: '/',
        title: 'Главная',
        icon: <BsHouseDoor />,
    },
    {
        id: 'adventure-log',
        link: '/adventure-log',
        title: 'Журнал',
        icon: <MdEditCalendar />,
    },
    {
        id: 'wiki',
        link: '/wiki/main',
        title: 'Wiki',
        icon: <BsWikipedia />,
    },
    {
        id: 'characters',
        link: '/characters',
        title: 'Персонажи',
        icon: <BsPeople />,
    },
    {
        id: 'items',
        link: '/items',
        title: 'Предметы',
        icon: <MdBackpack />,
    },
    {
        id: 'maps',
        link: '/maps',
        title: 'Карты',
        icon: <BsMap />,
    },

    {
        id: '1',
        link: 'https://horror-on-the-orient-express-6.obsidianportal.com/',
        title: 'Horror on the Orient Express',
    },
    {
        id: '2',
        link: 'https://night-of-the-haunter.obsidianportal.com/',
        title: 'Night of the Haunter',
    },
    {
        id: '3',
        link: 'https://childrenoffearskyrider.obsidianportal.com/',
        title: 'Children of Fear',
    },
];

function Nav() {
    return (
        <Container>
            <ListGroup>
                { items.map((item) => (
                    <ListGroup.Item
                        key={item.id}
                        action
                        as={Link}
                        to={item.link}
                        eventKey={item.link}
                        className="d-flex align-items-center justify-content-between"
                        variant="dark"
                    >
                        {item.icon || ''}
                        {item.title}
                    </ListGroup.Item>
                )) }
            </ListGroup>
        </Container>
    );
}

export default Nav;
