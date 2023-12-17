import { Sequelize } from 'sequelize';
import { Creator, Entry, sequelize } from './models.js'

/* Initialise empty database and add the first creator and entry */
(async () => {
    await sequelize.sync();
    await Creator.create({
      username: 'chaispice',
      displayname: 'Chai Spice Latte',
      descriptors: 'she/they',
      bio: 'Not just your average greyhound.',
      email: 'notanactualemail@chai.spice',
      pfpname: 'chaispice-pfp.png',
      Entries: [{
        headline: 'Welcome to MXTURE!',
        byline: 'We are really excited to have you here!',
        path: 'welcome-to-mxture',
        coverimname: 'glitter-1.png',
        content: '<p>This is the first entry to ever be published to the journal!</p><p>The cover images are generated using OpenAI\'s DALL-E model via Canva.</p>'
      }]}, { include: [{ model: Entry, as: 'Entries' }]})
})();