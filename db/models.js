// Import Sequelize ORM and DataTypes
import { Sequelize, DataTypes } from "sequelize";
import fs from 'fs';

// Write the database logs to a log file
const logStream = fs.createWriteStream('./db/mxturedb.log');

// Initialize Sequelize
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/mxturedb.sqlite3",
  logging: (msg) => logStream.write(`${msg}\n`)
});

// Defining Sequelize models for sqlite3 database

/**
 * Creator schema
 */
export const Creator = sequelize.define("Creator", {
  /** `Creator.username` is a string that must be unique. */
  username: {
    type: DataTypes.STRING,
    unique: true
  },
  /** `Creator.displayname` is a string. */
  displayname: DataTypes.STRING,
  /** `Creator.descriptors` is a string. */
  descriptors: DataTypes.STRING,
  /** `Creator.bio` is a string. */
  bio: DataTypes.STRING,
  /** `Creator.email` is a string that must be unique. */
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  /** `Creator.pfpname` is a string that points to an image in the public folder. */
  pfpname: DataTypes.STRING
});

/**
 * Entry schema
 */
export const Entry = sequelize.define("Entry", {
  /** `Entry.headline` is a string and must be unique. */
  headline: {
    type: DataTypes.STRING,
    unique: true
  },
  /** `Entry.byline` is a string. */
  byline: DataTypes.STRING,
  /** `Entry.coverimname` is a string that points to an image in the public folder. */
  coverimname: DataTypes.STRING,
  /** `Entry.path` is a string and must be unique. */
  path: {
    type: DataTypes.STRING,
    unique: true
  },
  /** `Entry.content` is a string with no maximum length. */
  content: DataTypes.TEXT,
});

// /** Hashtag schema - DELAYED TILL NEXT VERSION */
// export const Hashtag = sequelize.define("Hashtag", {
//   /** `Hashtag.hashtagname` is a string and must be unique. */  
//   hashtagname: {
//     type: DataTypes.STRING,
//     unique: true
//   },
// })

// Create many-to-many relationships as per Sequelize docs:
// <https://sequelize.org/docs/v6/core-concepts/assocs/#implementation-2>

// Entries can have multiple Creators
Creator.belongsToMany(Entry, { through: "EntryCreator" });

// Creators can have multiple Entries
Entry.belongsToMany(Creator, { through: "EntryCreator" });

// Entries can have multiple Hashtags
// Entry.belongsToMany(Hashtag, { through: "EntryHashtag"})

// Hashtags can have multiple Entries
// Hashtag.belongsToMany(Entry, { through: "EntryHashtag"})

/* Uncomment to initialise empty database and add the first creator and entry */

// (async () => {
//     await sequelize.sync();
//     await Creator.create({
//       username: 'finleyamo',
//       displayname: 'Finley Alva M.O.',
//       descriptors: 'they/them',
//       bio: 'Just your average human.',
//       email: 'notmyactualemail@mxture.space',
//       pfpname: 'finleyamo-pfp.jpeg',
//       Entries: [{
//         headline: 'Welcome to MXTURE!',
//         byline: 'We are really excited to have you here!',
//         path: 'welcome-to-mxture',
//         coverimname: 'glitter.png',
//         content: '<p>This is the first entry to ever be published to the journal!</p><p>The images are generated using OpenAI\'s DALL-E model via Canva.</p>'
//       }]}, { include: [{ model: Entry, as: 'Entries' }]})
// })();