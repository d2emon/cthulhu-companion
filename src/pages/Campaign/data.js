import markdown from '../../helpers/markdown';

// Logo: https://horror-on-the-orient-express-6.obsidianportal.com/assets/global/flame-dragon-14d73fd3fcdc38fb2fb9336668dc65d930db648b704bd52b07168785d16f78f8.svg

const campaigns = [
  {
    id: 'default-campaign',
    background: '/images/gothic_graves_n_woods.jpg',
    banner: '/images/Portal-banner2.jpg',
    title: 'Красная Земля',
    description: markdown.render(`
## Welcome to East Texas University!

The site will recount our groups adventures through the *Degrees of Horror* plot point campaign.
Obviously spoilers for that product will abound, so proceed with caution if it is something you
might experience as a player.

**5/17/23 Update:** After a three+ year hiatus we’ve returned to this campaign.  Initially Covid
put the brakes on things, then one thing or another led to a delay in starting this back up.  The
unanticipated long break means the choice of “Class of 2023” in the name has aged particularly
poorly.
    `),
    isLookingForPlayers: true,
    lastUpdate: new Date(),
    status: 'Playing',
  },
  {
    id: 'campaign-1',
    background: 'https://db4sgowjqfwig.cloudfront.net/backgrounds/40/assets/383977/gothic_graves_n_woods.jpg?1413840070',
    banner: 'https://db4sgowjqfwig.cloudfront.net/campaigns/113476/banners/513354/HotOE.jpg?1443986861',
    title: 'Horror on the Orient Express - Total Recap!',
    isLookingForPlayers: true,
    lastUpdate: new Date(),
    status: 'Playing',
  },
];

export const campaign  = campaigns[0];
