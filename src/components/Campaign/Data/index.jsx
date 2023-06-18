import React from 'react';
import { Container } from 'react-bootstrap';
import PartyMembers from './PartyMembers';
import QuickStats from './QuickStats';

const master = {
    id: 'Caligula_1',
    name: 'Caligula_1',
    url: '/profile/Caligula_1',
    avatar: '//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg',
};

const players = [
    {
        id: 'Caligula_1',
        name: 'Caligula_1',
        url: '/profile/Caligula_1',
        avatar: '//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg',        
        character: {
            id: 'dr-james-ingram',
            name: 'Dr. James Ingram',
            url: '/characters/dr-james-ingram',
            avatar: 'https://db4sgowjqfwig.cloudfront.net/images/6737163/Dr_James_Ingram_square_thumb.jpg',    
        },
    },
    {
        id: 'cbermar',
        name: 'cbermar',
        url: '/profile/cbermar',
        avatar: '//db4sgowjqfwig.cloudfront.net/images/776191/98256_avatar_square_thumb',  
    },
    {
        id: 'andlun81',
        name: 'andlun81',
        url: '/profile/andlun81',
        avatar: '//db4sgowjqfwig.cloudfront.net/images/3012103/210032_avatar_square_thumb',  
    },
    {
        id: 'hlaueriksson',
        name: 'hlaueriksson',
        url: '/profile/hlaueriksson',
        avatar: '//db4sgowjqfwig.cloudfront.net/images/3223098/220101_avatar_square_thumb',  
    },
    {
        id: 'malte_mossberg',
        name: 'malte_mossberg',
        url: '/profile/dr-errol-murray',
        avatar: '//db4sgowjqfwig.cloudfront.net/images/2214069/171733_avatar_square_thumb',        
        character: {
            id: 'dr-errol-murray',
            name: 'Dr. Errol Murray',
            url: '/characters/dr-errol-murray',
            avatar: 'https://db4sgowjqfwig.cloudfront.net/images/3702142/1920s2_square_thumb.jpg',    
        },
    },
    /*
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/olof_bjalkvall"><img alt="olof_bjalkvall" src="//db4sgowjqfwig.cloudfront.net/images/3607832/238556_avatar_square_thumb" title="olof_bjalkvall" /></a>
                        </li>
                        <li class="player-character">
                            <div class="character-container">
                                <a href="/characters/ian-flannery">
                                    <img alt="Ian Flannery" class="game-content-image" onerror="this.src = 'assets/icons/avatars/character-avatar.png'" src="https://db4sgowjqfwig.cloudfront.net/images/3709202/Mikes_Journalist_square_thumb.jpg" title="Ian Flannery" />
                                </a>
                            </div>
                            <div class="user-container">
                                <a href="https://www.obsidianportal.com/profile/MickeStockholm"><img alt="MickeStockholm" src="//db4sgowjqfwig.cloudfront.net/images/3716946/20140527_200948_square_thumb.jpg" title="MickeStockholm" /></a>
                            </div>
                        </li>
                        <li class="player-character">
                            <div class="character-container">
                                <a href="/characters/boris-vasilijev">
                                    <img alt="Boris Vasilijev" class="game-content-image" onerror="this.src = 'assets/icons/avatars/character-avatar.png'" src="https://db4sgowjqfwig.cloudfront.net/images/3777054/Boris_Vasilijev_square_thumb.jpeg" title="Boris Vasilijev" />
                                </a>
                            </div>
                            <div class="user-container">
                                <a href="https://www.obsidianportal.com/profile/Sevensky"><img alt="Sevensky" src="/assets/icons/avatars/player-avatar.png" title="Sevensky" /></a>
                            </div>
                        </li>
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/burda007"><img alt="burda007" src="//db4sgowjqfwig.cloudfront.net/images/3749804/245870_avatar_square_thumb" title="burda007" /></a>
                        </li>
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/MichaelMichaelsson"><img alt="MichaelMichaelsson" src="//db4sgowjqfwig.cloudfront.net/images/3319097/224816_avatar_square_thumb" title="MichaelMichaelsson" /></a>
                        </li>
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/mats_1"><img alt="mats_1" src="//db4sgowjqfwig.cloudfront.net/images/3023377/210564_avatar_square_thumb" title="mats_1" /></a>
                        </li>
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/LaQtoz"><img alt="LaQtoz" src="//db4sgowjqfwig.cloudfront.net/images/4018479/259588_avatar_square_thumb" title="LaQtoz" /></a>
                        </li>
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/s_sundman"><img alt="s_sundman" src="/assets/icons/avatars/player-avatar.png" title="s_sundman" /></a>
                        </li>
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/muffinpengar"><img alt="muffinpengar" src="/assets/icons/avatars/player-avatar.png" title="muffinpengar" /></a>
                        </li>
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/Jokkster"><img alt="Jokkster" src="/assets/icons/avatars/player-avatar.png" title="Jokkster" /></a>
                        </li>
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/linusmedia"><img alt="linusmedia" src="/assets/icons/avatars/player-avatar.png" title="linusmedia" /></a>
                        </li>
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/peoj"><img alt="peoj" src="/assets/icons/avatars/player-avatar.png" title="peoj" /></a>
                        </li>
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/Redmean"><img alt="Redmean" src="/assets/icons/avatars/player-avatar.png" title="Redmean" /></a>
                        </li>
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/NicklasThor"><img alt="NicklasThor" src="/assets/icons/avatars/player-avatar.png" title="NicklasThor" /></a>
                        </li>
                        <li class="player">
                            <a href="https://www.obsidianportal.com/profile/grizzlychef"><img alt="grizzlychef" src="//db4sgowjqfwig.cloudfront.net/images/6043115/442311_avatar_square_thumb" title="grizzlychef" /></a>
                        </li>
                        <li class="player-character">
                            <div class="character-container">
                                <a href="/characters/the-mystery-knight-pierre-decroix">
                                    <img alt="The Mystery Knight (Pierre Decroix)" class="game-content-image" onerror="this.src = 'assets/icons/avatars/character-avatar.png'" src="https://db4sgowjqfwig.cloudfront.net/images/6866761/Untitled_square_thumb.gif" title="The Mystery Knight (Pierre Decroix)" />
                                </a>
                            </div>
                            <div class="user-container">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                            </div>
                        </li>

    */
];

const gameSystem = {
    id: 9,
    title: 'Call of Cthulhu',
    logo: 'https://db4sgowjqfwig.cloudfront.net/game_systems/9/assets/1039522/call-of-cthulhu.png?1579813969',
    url: '/campaigns?game_system_id=9',
}
const lastUpdate = new Date();
const status = 'Playing';
const fans = 24;
const comments = 4;
const isLookingForPlayers = true;

function Data() {
    return (
        <Container>
            <PartyMembers
                gm={master}
                players={players}
            />

            <QuickStats
                gameSystem={gameSystem}
                lastUpdate={lastUpdate}
                status={status}
                fans={fans}
                comments={comments}
                isLookingForPlayers={isLookingForPlayers}
            />

            <div class="module" id="campaign-stream">
                <div class="row stream-module-container">
                    <div class="large-12 columns">
                        <div class="campaign-stream-module module">
                            <div class="section-header stream"><h2 class="name"><span class="section-header-icon op-icon-forum"></span>Stream</h2></div>
                            <div class="lower-divider"></div>
                            <ul class="recent-updates divided-list">
                                <li class="character update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> updated the character  <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/the-mystery-knight-pierre-decroix">The Mystery Knight (Pierre Decroix)</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-06-01T13:44:32Z">13 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="character update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> created a new character  <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/the-mystery-knight-pierre-decroix">The Mystery Knight (Pierre Decroix)</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-06-01T12:00:11Z">13 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="character update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> updated the character  <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/charlie-dem-r-spencer">Charlie Demír Spencer *INSANE*</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-06-01T11:03:36Z">13 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-06-01T10:45:09Z">13 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-06-01T10:42:01Z">13 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-06-01T10:39:55Z">13 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-06-01T10:37:53Z">13 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-06-01T10:36:09Z">13 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-06-01T10:29:20Z">13 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> created the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-06-01T10:13:07Z">13 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="character update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> updated the character  <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/brad-kowalski">Brad Kowalski</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-05-31T21:09:45Z">14 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="character update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> updated the character  <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/charlie-dem-r-spencer">Charlie Demír Spencer</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-05-26T20:39:20Z">19 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-05-26T20:35:26Z">19 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-05-26T20:34:43Z">19 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-05-26T13:39:46Z">19 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-05-26T13:31:58Z">19 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-05-26T13:28:50Z">19 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-05-26T13:14:17Z">19 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="character update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> created a new character  <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/brad-kowalski">Brad Kowalski</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-05-26T13:13:56Z">19 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li class="adventure-log update-container">
                                <div class="background-container"></div>
                                <div class="recent-update row">
                                <div class="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div class="details large-8 small-8 columns">
                                <div class="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div class="time">
                                <time class="timeago-reformat" datetime="2023-05-26T13:09:57Z">19 days ago</time>
                                </div>
                                </div>
                                <div class="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Data;
