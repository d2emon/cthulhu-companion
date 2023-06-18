import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { GiRuleBook } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function PartyMembers({
    gm,
    players,
}) {
    return (
        <Card
            className="mb-2"
        >
            { gm && (
                <Card.Header>
                    <Row>
                        <Col sm={3}>
                            <Link to={gm.url}>
                                <Image
                                    rounded
                                    height="56"
                                    alt={gm.name}
                                    title={gm.name}
                                    src={gm.avatar}
                                />
                            </Link>
                        </Col>
                        <Col
                            style={{
                                textAlign: 'left',
                            }}
                        >
                            <div>GM:</div>
                            <div>
                                <Link to={gm.url}>{gm.name}</Link>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <GiRuleBook size={38} />
                        </Col>
                    </Row>
                </Card.Header>
            ) }

            <Card.Body>
                <Row>
                    { players && players.map((player) => (
                        <Col
                            key={player.id}
                            sm="4"
                        >
                            { player.character
                                ? (
                                    <Card>
                                        <Link to={player.character.url}>
                                            <Card.Img
                                                variant="top"
                                                alt={player.character.name}
                                                title={player.character.name}
                                                src={player.character.avatar || 'https://www.obsidianportal.com/assets/icons/avatars/character-avatar.png'}
                                            />
                                        </Link>
                                        <Card.Footer>
                                            <Link to={player.url}>
                                                <Card.Img
                                                    width={28}
                                                    alt={player.name}
                                                    title={player.name}
                                                    src={player.avatar || 'https://www.obsidianportal.com/assets/icons/avatars/character-avatar.png'}
                                                />
                                            </Link>
                                        </Card.Footer>
                                    </Card>
                                )
                                : (
                                    <Card>
                                        <Link to={player.url}>
                                            <Card.Img
                                                alt={player.name}
                                                title={player.name}
                                                src={player.avatar || 'https://www.obsidianportal.com/assets/icons/avatars/character-avatar.png'}
                                            />
                                        </Link>
                                    </Card>
                                )
                            }
                        </Col>
                    )) }
                </Row>
            </Card.Body>
        </Card>
    );
}

export default PartyMembers;
