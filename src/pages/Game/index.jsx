import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Campaign from '../../components/Campaign';
import ToBeDone from '../../components/ToBeDone';
import { campaign } from '../Campaign/data';

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
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/olof_bjalkvall"><img alt="olof_bjalkvall" src="//db4sgowjqfwig.cloudfront.net/images/3607832/238556_avatar_square_thumb" title="olof_bjalkvall" /></a>
                      </li>
                      <li className="player-character">
                          <div className="character-container">
                              <a href="/characters/ian-flannery">
                                  <img alt="Ian Flannery" className="game-content-image" onerror="this.src = 'assets/icons/avatars/character-avatar.png'" src="https://db4sgowjqfwig.cloudfront.net/images/3709202/Mikes_Journalist_square_thumb.jpg" title="Ian Flannery" />
                              </a>
                          </div>
                          <div className="user-container">
                              <a href="https://www.obsidianportal.com/profile/MickeStockholm"><img alt="MickeStockholm" src="//db4sgowjqfwig.cloudfront.net/images/3716946/20140527_200948_square_thumb.jpg" title="MickeStockholm" /></a>
                          </div>
                      </li>
                      <li className="player-character">
                          <div className="character-container">
                              <a href="/characters/boris-vasilijev">
                                  <img alt="Boris Vasilijev" className="game-content-image" onerror="this.src = 'assets/icons/avatars/character-avatar.png'" src="https://db4sgowjqfwig.cloudfront.net/images/3777054/Boris_Vasilijev_square_thumb.jpeg" title="Boris Vasilijev" />
                              </a>
                          </div>
                          <div className="user-container">
                              <a href="https://www.obsidianportal.com/profile/Sevensky"><img alt="Sevensky" src="/assets/icons/avatars/player-avatar.png" title="Sevensky" /></a>
                          </div>
                      </li>
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/burda007"><img alt="burda007" src="//db4sgowjqfwig.cloudfront.net/images/3749804/245870_avatar_square_thumb" title="burda007" /></a>
                      </li>
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/MichaelMichaelsson"><img alt="MichaelMichaelsson" src="//db4sgowjqfwig.cloudfront.net/images/3319097/224816_avatar_square_thumb" title="MichaelMichaelsson" /></a>
                      </li>
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/mats_1"><img alt="mats_1" src="//db4sgowjqfwig.cloudfront.net/images/3023377/210564_avatar_square_thumb" title="mats_1" /></a>
                      </li>
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/LaQtoz"><img alt="LaQtoz" src="//db4sgowjqfwig.cloudfront.net/images/4018479/259588_avatar_square_thumb" title="LaQtoz" /></a>
                      </li>
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/s_sundman"><img alt="s_sundman" src="/assets/icons/avatars/player-avatar.png" title="s_sundman" /></a>
                      </li>
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/muffinpengar"><img alt="muffinpengar" src="/assets/icons/avatars/player-avatar.png" title="muffinpengar" /></a>
                      </li>
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/Jokkster"><img alt="Jokkster" src="/assets/icons/avatars/player-avatar.png" title="Jokkster" /></a>
                      </li>
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/linusmedia"><img alt="linusmedia" src="/assets/icons/avatars/player-avatar.png" title="linusmedia" /></a>
                      </li>
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/peoj"><img alt="peoj" src="/assets/icons/avatars/player-avatar.png" title="peoj" /></a>
                      </li>
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/Redmean"><img alt="Redmean" src="/assets/icons/avatars/player-avatar.png" title="Redmean" /></a>
                      </li>
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/NicklasThor"><img alt="NicklasThor" src="/assets/icons/avatars/player-avatar.png" title="NicklasThor" /></a>
                      </li>
                      <li className="player">
                          <a href="https://www.obsidianportal.com/profile/grizzlychef"><img alt="grizzlychef" src="//db4sgowjqfwig.cloudfront.net/images/6043115/442311_avatar_square_thumb" title="grizzlychef" /></a>
                      </li>
                      <li className="player-character">
                          <div className="character-container">
                              <a href="/characters/the-mystery-knight-pierre-decroix">
                                  <img alt="The Mystery Knight (Pierre Decroix)" className="game-content-image" onerror="this.src = 'assets/icons/avatars/character-avatar.png'" src="https://db4sgowjqfwig.cloudfront.net/images/6866761/Untitled_square_thumb.gif" title="The Mystery Knight (Pierre Decroix)" />
                              </a>
                          </div>
                          <div className="user-container">
                              <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                          </div>
                      </li>

  */
];

const comments = 4;
const fans = 24;
const gameSystem = {
  id: 9,
  title: 'Call of Cthulhu',
  logo: 'https://db4sgowjqfwig.cloudfront.net/game_systems/9/assets/1039522/call-of-cthulhu.png?1579813969',
  url: '/campaigns?game_system_id=9',
}

function Game() {
  return (
    <Row>
      <Col>
        <Campaign>
          <Card>
            <Card.Body
              dangerouslySetInnerHTML={{ __html: campaign.description }}
            />
          </Card>

          <hr />

          <ToBeDone />
        </Campaign>
      </Col>
      <Col lg={4}>
        <Campaign.CampaignData
          comments={comments}
          fans={fans}
          gameSystem={gameSystem}
          isLookingForPlayers={campaign.isLookingForPlayers}
          lastUpdate={campaign.lastUpdate}
          master={master}
          players={players}
          status={campaign.status}
        />
      </Col>
    </Row>
  );
}

export default Game;
