import { Card, Col, Image, Row } from 'react-bootstrap';
import { ImBubble } from 'react-icons/im';
import { Link } from 'react-router-dom';

function Stream({
  stream,
}) {
  return (
    <Card>
      <Card.Header>
        <Row>
          <Col md={1}>
            <ImBubble />
          </Col>
          <Col>
            <Card.Title>Stream</Card.Title>
          </Col>
        </Row>
      </Card.Header>

      {
        stream && stream.length
        ? (
          <Card.Body>
            { stream.map((item) => (
              <Row
                key={item.id}
              >
                <Col md={4}>
                  { item.author && (
                    <Link to={item.author.url}>
                      <Image
                        rounded
                        height="56"
                        alt={item.author.name}
                        title={item.author.name}
                        src={item.author.avatar}
                      />
                    </Link>
                  ) }  
                </Col>
                <Col>
                  <div className="summary">
                    <a href="http://www.obsidianportal.com/profile/AndMath">
                      AndMath
                    </a>
                    {' '}
                    updated the character
                    {' '}
                    <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/the-mystery-knight-pierre-decroix">
                        The Mystery Knight (Pierre Decroix)
                    </a>
                  </div>

                  <div className="time">
                    <time className="timeago-reformat" dateTime="2023-06-01T13:44:32Z">
                      13 days ago
                    </time>
                  </div>
                </Col>
              </Row>
            )) }
          </Card.Body>
        )
        : (
          <Card.Body>
            <Card.Title>
              Здесь пока пусто
            </Card.Title>
          </Card.Body>  
        )
      }

            <ul className="recent-updates divided-list">
              <li className="character update-container">
                <div className="background-container"></div>
                <div className="recent-update row">
                  <div className="avatar large-2 small-4 columns">
                    <a href="https://www.obsidianportal.com/profile/AndMath">
                      <img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" />
                    </a>
                  </div>
                  <div className="details large-8 small-8 columns">
                    <div className="summary">
                      <a href="http://www.obsidianportal.com/profile/AndMath">
                        AndMath
                      </a>
                      {' '}
                      updated the character
                      {' '}
                      <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/the-mystery-knight-pierre-decroix">
                        The Mystery Knight (Pierre Decroix)
                      </a>
                    </div>
                    <div className="time">
                      <time className="timeago-reformat" dateTime="2023-06-01T13:44:32Z">
                        13 days ago
                      </time>
                    </div>
                  </div>
                  <div className="remove large-2 small-4 columns"></div>
                </div>
              </li>

              <li className="character update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> created a new character  <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/the-mystery-knight-pierre-decroix">The Mystery Knight (Pierre Decroix)</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-06-01T12:00:11Z">13 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
              </li>

              <li className="character update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> updated the character  <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/charlie-dem-r-spencer">Charlie Demír Spencer *INSANE*</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-06-01T11:03:36Z">13 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
              </li>

              <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-06-01T10:45:09Z">13 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
              </li>

              <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-06-01T10:42:01Z">13 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
              </li>

              <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-06-01T10:39:55Z">13 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
              </li>

              <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-06-01T10:37:53Z">13 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
              </li>

              <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-06-01T10:36:09Z">13 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
              </li>

              <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-06-01T10:29:20Z">13 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
              </li>

              <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> created the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-5">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 5</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-06-01T10:13:07Z">13 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
              </li>

              <li className="character update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> updated the character  <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/brad-kowalski">Brad Kowalski</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-05-31T21:09:45Z">14 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li className="character update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> updated the character  <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/charlie-dem-r-spencer">Charlie Demír Spencer</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-05-26T20:39:20Z">19 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-05-26T20:35:26Z">19 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-05-26T20:34:43Z">19 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-05-26T13:39:46Z">19 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-05-26T13:31:58Z">19 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-05-26T13:28:50Z">19 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-05-26T13:14:17Z">19 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li className="character update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/AndMath"><img alt="AndMath" src="/assets/icons/avatars/player-avatar.png" title="AndMath" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/AndMath">AndMath</a> created a new character  <a href="https://horror-on-the-orient-express-6.obsidianportal.com/characters/brad-kowalski">Brad Kowalski</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-05-26T13:13:56Z">19 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
                                <li className="adventure-log update-container">
                                <div className="background-container"></div>
                                <div className="recent-update row">
                                <div className="avatar large-2 small-4 columns">
                                <a href="https://www.obsidianportal.com/profile/Caligula_1"><img alt="Caligula_1" src="//db4sgowjqfwig.cloudfront.net/images/3003806/image_square_thumb.jpeg" title="Caligula_1" /></a>
                                </div>
                                <div className="details large-8 small-8 columns">
                                <div className="summary">
                                <a href="http://www.obsidianportal.com/profile/Caligula_1">Caligula_1</a> updated the adventure log post <a href="https://horror-on-the-orient-express-6.obsidianportal.com/adventure-log/bread-or-stone-vinkovci-1923-scenario-12-session-4">Bread or Stone (Vinkovci 1923) - Scenario 12, Session 4</a>
                                </div>
                                <div className="time">
                                <time className="timeago-reformat" dateTime="2023-05-26T13:09:57Z">19 days ago</time>
                                </div>
                                </div>
                                <div className="remove large-2 small-4 columns">
                                </div>
                                </div>
                                </li>
            </ul>
    </Card>
  );
}

export default Stream;
