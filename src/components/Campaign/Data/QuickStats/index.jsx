import React, { useCallback } from 'react';
import { Button, Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './QuickStats.css';

function QuickStats({
    gameSystem,
    lastUpdate,
    status,
    fans,
    comments,
    isLookingForPlayers,
}) {
    const handleFansClick = useCallback(() => {}, []);
    const handleCommentsClick = useCallback(() => {}, []);

    return (
        <Card
            className="mb-2 quick-stats"
        >
            { gameSystem && (
                <Card.Header>
                    <Link to={gameSystem.url}>
                        <Card.Img
                            variant="top"
                            alt={gameSystem.title}
                            title={gameSystem.title}
                            src={gameSystem.logo}
                        /> 
                    </Link>
                </Card.Header>
            ) }

            <Card.Body>
                <Container>
                    <Row>
                        <Col sm={5}>
                            Last Updated:
                        </Col>
                        <Col>
                            <time dateTime={lastUpdate}>{moment(lastUpdate).format('DD/MM/YYYY')}</time>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            Play Status:
                        </Col>
                        <Col>
                            {status}
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={5}>
                            <Button
                                className="fans-counter"
                                variant="link"
                                onClick={handleFansClick}
                            >
                                <dl>
                                    <dd className="count-value">{fans}</dd>
                                    <dd className="count-label">fans</dd>
                                </dl>
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm="12">
                            <Button
                                className="fans-counter"
                                variant="link"
                                onClick={handleCommentsClick}
                            >
                                <dl>
                                    <dd className="count-value">{comments}</dd>
                                    <dd className="count-label">comments</dd>
                                </dl>
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    { isLookingForPlayers && <Badge>Looking for players!</Badge> }
                </Container>
            </Card.Body>
        </Card>
    );
}

export default QuickStats;
