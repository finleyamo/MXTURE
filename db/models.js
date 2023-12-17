// Import Sequelize ORM and DataTypes
import { Sequelize, DataTypes } from "sequelize";
import fs from 'fs';

// Write the database logs to a log file
const logStream = fs.createWriteStream('./db/mxturedb.log');

// Initialize Sequelize
export const sequelize = new Sequelize({
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

// Create many-to-many relationships as per Sequelize docs:
// <https://sequelize.org/docs/v6/core-concepts/assocs/#implementation-2>

// Entries can have multiple Creators
Creator.belongsToMany(Entry, { through: "EntryCreator" });

// Creators can have multiple Entries
Entry.belongsToMany(Creator, { through: "EntryCreator" });