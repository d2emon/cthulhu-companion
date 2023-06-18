import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainBar from '../../components/MainBar';
import Campaign from '../../components/Campaign';

import './Campaign.css';
import { Outlet } from 'react-router';

const campaign = {
    background: 'https://db4sgowjqfwig.cloudfront.net/backgrounds/40/assets/383977/gothic_graves_n_woods.jpg?1413840070',
    banner: 'https://db4sgowjqfwig.cloudfront.net/campaigns/113476/banners/513354/HotOE.jpg?1443986861',
    logo: 'https://horror-on-the-orient-express-6.obsidianportal.com/assets/global/flame-dragon-14d73fd3fcdc38fb2fb9336668dc65d930db648b704bd52b07168785d16f78f8.svg',
    title: 'Horror on the Orient Express - Total Recap!',
}

function Game() {
  return (
    <div
        className="App"
        style={{
            backgroundImage: `url(${campaign.background})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}
    >
        <MainBar />

        <Container>
            <Campaign.Header
                logo={campaign.logo}
                title={campaign.title}
                banner={campaign.banner}
            />

            <Row>
                <Col sm={2}>
                    <Campaign.Nav />
                </Col>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
     
    </div>
  );
}

export default Game;
