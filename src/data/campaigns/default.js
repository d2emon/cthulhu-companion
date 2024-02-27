import markdown from '../../helpers/markdown';

export default {
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
};
