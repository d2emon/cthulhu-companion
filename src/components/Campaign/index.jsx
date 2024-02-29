import React from 'react';
import Data from './Data';
import Header from './Header';
import Loader from './Loader';
import Nav from './Nav';
import Description from './Description';

function Campaign({ children }) {
    return (
        <div>
            { children }
        </div>
    );
    /*
    return (
        <div className="columns main-content-container dynamic-sheet-width">
            <main className="main-content">
                <div className="highlight-container"></div>
                    <div className="campaign-landing-page-container" itemscope="" itemtype="http://schema.org/CreativeWork">
                        <div className="wiki-page section" itemprop="description">
                            <p>Welcome to Horror on the Orient Express – Total Recap! Perhaps you already know me from the Wizards of the Coast, Dungeons &amp; Dragons forums, where I wrote several chronicles over many years. Most followed “Red Hand of Doom- Total Recap” and “City of the Spider Queen – Total Recap!” with well over 80.000 followers.</p>
                            <p>This time we set out with the biggest Call of Cthulhu campaign ever written. The campaign entales 19 scenarios and up to 6 investigators are allowed to participate at any one time. Since the campaign start the players participating are been the following:</p>
                            <p><strong>Christer Bermar</strong> – my cousin and long time player 30+ years. We have played many games during the years since 1984, among others: Drakar &amp; Demoner, Mutant, Chill, Top Secret S/I, Twilight 2000, Dungeons &amp; Dragons, Call of Cthulhu, Symbaroum, Götterdämmerung. Christer plays Hermann and Frank.</p>
                            <p>
                                <a href="/characters/hermann-m-ller" className="wiki-content-link">Hermann Müller</a>
                                <br />
                                <a href="/characters/frank-patterson" className="wiki-content-link">Frank Patterson</a>
                            </p>
                            <p>
                                <strong>Mats Georgson</strong> – good friend and long time player 35+ years. Mats used to be part of our epic long Dungeons &amp; Dragons campaign Red Hand of Doom. Mats plays Lord Squibb and Colonel Williams.
                            </p>
                            <p>
                                <a href="/characters/colonel-williams" className="wiki-content-link">Colonel John Williams</a><br />
                                <a href="/characters/lord-fyrom-squibb" className="wiki-content-link">Lord Fyrom Squibb</a>
                            </p>
                            <p><strong>Henric Lau Ericsson</strong> – new friend and avid player for many years. Henric used to play with Christer back in the days, Mutant and Lone Wolf. Henric plays John Yip.</p>
                            <p><a href="/characters/john-yip" className="wiki-content-link">John Yip</a></p>
                            <p><strong>Michal Burda</strong> – recently joined our group during the 3rd scenario replacing Michael Patocka who plays Maximilan von Moser. Michal is an old friend of Henric Lau Ericsson but new to the group. Michal has not created his investigator yet.</p>
                            <p><strong>Lloyd Baltz</strong> – an old friend that used to play Mutant with us, long time player. Joined this campaign during the 3rd scenario, but played the earlier CoC scenarios couple of years ago. Lloyd plays <strong>Boris Vasilijev</strong> and <strong>Edward Natt och Dag</strong>.</p>
                            <p>
                                <a href="/characters/boris-vasilijev" className="wiki-content-link">Boris Vasilijev</a>
                                <br />
                                <a href="/characters/edvard-natt-och-dag" className="wiki-content-link">Edvard Natt och Dag</a>
                            </p>
                            <p><strong>Malte Mossberg</strong> – used to play Mutant with us, long time player. Has played CoC with us when we played the earlier scenarios couple of years ago, but joined this campaign during the 3rd scenario. Malte plays <strong>Doctor Murray</strong>.</p>
                            <p><a href="/characters/dr-errol-murray" className="wiki-content-link">Dr. Errol Murray</a></p>
                            <p><strong>Mike the Bike</strong> – long time player that joined our group recently after following us here on Obsidian Portal. Joined during the 3rd scenario. Mike plays Ian Flannery from Belfast and a Scottish professor. One is Irish and one is Scottish. Wow!</p>
                            <p>
                                <a href="/characters/ian-flannery" className="wiki-content-link">Ian Flannery</a>
                                <br />
                                <a href="/characters/professor-walter-scott-jr" className="wiki-content-link">Professor Walter Scott JR</a>
                            </p>
                            <p><strong>Magnus Saletti</strong> is the most recent addition and also he joined after following us on Obsidian Portal. Magnus is an experienced role player for 30+ years and he plays a German archeologist named Manfred Schultz.</p>
                            <p><a href="/characters/manfred-schultz" className="wiki-content-link">Manfred Schultz</a></p>
                            <p>(<em>Michael Padocka – new friend and famous role playing personality in Stockholm, supporting among others Swedish rpg Symbaroum. Unfortunately Michael left our CoC campaign during half ways through the 3rd scenario. Michael will for now continue with our Symbaroum campaign alone due to lack of time</em>.)</p>
                            <p>While active Michael Patocka played Manfred von Moser</p>
                            <p><a href="/characters/max-von-moser" className="wiki-content-link">Max von Moser</a></p>
                        <p>Most of the investigators are thoroughly described in the Characters section. The remaining one (Burda) will be uploaded soon so please keep checking in here.</p>
                        <p>Please keep following us and do not hesitate to post any comments, questions or what not. Appreciated if you avoid spoilers, thank you!  :-)</p>
                        <p>Caligula</p>
                        <p>Here a little teaser of the campaign: </p><div className="oembed external-link"><div className="embed"><iframe className="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F9q1hj3321jw%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9q1hj3321jw&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9q1hj3321jw%2Fhqdefault.jpg&amp;key=4c11d5dcf48211e09bd44040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" width="854" height="480" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe></div></div>
                        <p><img src="https://db4sgowjqfwig.cloudfront.net/campaigns/113476/assets/583869/Kepper_screen.jpg?1461918894" className="asset-reference image-asset-reference media-item-align-none" data-asset-id="583869" alt="Kepper_screen.jpg" title="Kepper_screen.jpg" /></p>
                    </div>
                    <div className="wiki-edit"></div>
                    <div className="microdata hide">
                        <h1 itemprop="name">Horror on the Orient Express - Total Recap!</h1>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/" itemprop="url">Horror on the Orient Express - Total Recap!</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/Caligula_1" itemprop="author">Caligula_1</a>
                        <a href="?rel=author">Caligula_1</a>
                        <img alt="Hotoe" className="hide" itemprop="image" src="https://db4sgowjqfwig.cloudfront.net/campaigns/113476/banners/513354/HotOE.jpg?1443986861" />
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/cbermar" itemprop="contributor">cbermar</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/andlun81" itemprop="contributor">andlun81</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/hlaueriksson" itemprop="contributor">hlaueriksson</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/malte_mossberg" itemprop="contributor">malte_mossberg</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/olof_bjalkvall" itemprop="contributor">olof_bjalkvall</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/MickeStockholm" itemprop="contributor">MickeStockholm</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/Sevensky" itemprop="contributor">Sevensky</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/burda007" itemprop="contributor">burda007</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/MichaelMichaelsson" itemprop="contributor">MichaelMichaelsson</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/mats_1" itemprop="contributor">mats_1</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/LaQtoz" itemprop="contributor">LaQtoz</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/s_sundman" itemprop="contributor">s_sundman</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/muffinpengar" itemprop="contributor">muffinpengar</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/Jokkster" itemprop="contributor">Jokkster</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/linusmedia" itemprop="contributor">linusmedia</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/peoj" itemprop="contributor">peoj</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/Redmean" itemprop="contributor">Redmean</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/NicklasThor" itemprop="contributor">NicklasThor</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/grizzlychef" itemprop="contributor">grizzlychef</a>
                        <a href="https://horror-on-the-orient-express-6.obsidianportal.com/profile/AndMath" itemprop="contributor">AndMath</a>
                        <time dateTime="2015-04-14T20:00:08Z" itemprop="dateCreated">2015-04-14T20:00:08Z</time>
                        <time dateTime="2023-06-01T13:44:32Z" itemprop="dateModified">2023-06-01T13:44:32Z</time>
                    </div>
                </div>
            </main>
            <footer id="campaign-footer">
                <ul className="links inline-list">
                    <li><a href="https://www.obsidianportal.com/">Home</a></li>
                    <li><a href="https://www.obsidianportal.com/privacy-policy">Privacy Policy</a></li>
                    <li><a href="https://www.obsidianportal.com/terms-of-service">Terms of Service</a></li>
                </ul>
            </footer>
        </div>
    );
    */
}

Campaign.CampaignData = Data;
Campaign.Description = Description;
Campaign.Header = Header;
Campaign.Loader = Loader;
Campaign.Nav = Nav;

export default Campaign;
