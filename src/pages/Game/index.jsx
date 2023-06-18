import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Counter } from '../../features/counter/Counter';
import logo from './logo.svg';
import './Game.css';
import MainBar from '../../components/MainBar';
import Campaign from '../../components/Campaign';

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
                    <Campaign>

                    <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Counter />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <span>
                <span>Learn </span>
                <a
                    className="App-link"
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React
                </a>
                <span>, </span>
                <a
                    className="App-link"
                    href="https://redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Redux
                </a>
                <span>, </span>
                <a
                    className="App-link"
                    href="https://redux-toolkit.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Redux Toolkit
                </a>
                ,<span> and </span>
                <a
                    className="App-link"
                    href="https://react-redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React Redux
                </a>
            </span>
        </header>
                    </Campaign>
                </Col>
                <Col lg={3}>
                    <Campaign.CampaignData />
                </Col>
            </Row>
        </Container>
     
    </div>
  );
}

export default Game;
