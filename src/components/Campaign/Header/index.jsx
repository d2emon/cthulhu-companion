import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Banner from './Banner';

import './Header.css';

function Header({
    banner,
    logo,
    title,
}) {
    return (
        <Container className="my-4">
            <Row>
                <Col
                    lg={2}
                    sm={5}
                >
                    <Logo src={logo} />
                </Col>

                <Col
                    className="campaign-title"
                >
                    <h2>{title}</h2>
                </Col>
            </Row>

            <Row>
                <Container>
                    <Link to="/">
                        <Banner
                            src={banner}
                            title={title}
                        />
                    </Link>
                </Container>
            </Row>
        </Container>
    );
}

export default Header;
