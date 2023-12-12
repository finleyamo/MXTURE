To create comprehensive documentation for MXTURE, I'll cover several key areas including the overall architecture, models, and their relationships. Given the information from the `models.js` file and the `mxturedb.sqlite3` database, here's a structured outline:

---

# MXTURE Documentation

## Overview
MXTURE is a platform designed to showcase diverse creative content. It utilizes a SQLite database to manage data, with Sequelize as the ORM for database operations in a Node.js environment.

## Database Schema

### Tables

#### 1. Creators
Stores information about content creators.

- **id**: Unique identifier (Integer, Primary Key).
- **username**: Username of the creator (String).
- **displayname**: Display name (String).
- **descriptors**: Descriptors for the creator (String).
- **bio**: Biography (String).
- **email**: Email address (String).
- **pfpname**: Profile picture filename (String).
- **createdAt**: Record creation timestamp (DateTime).
- **updatedAt**: Last update timestamp (DateTime).

#### 2. Entries
Contains details about various entries or submissions.

- **id**: Unique identifier (Integer, Primary Key).
- **headline**: Headline or title of the entry (String, Unique).
- **byline**: Authorship information (String).
- **coverimname**: Cover image filename (String).
- **path**: Location or path of the entry (String, Unique).
- **content**: Content of the entry (Text, No length limit).
- **createdAt**: Record creation timestamp (DateTime).
- **updatedAt**: Last update timestamp (DateTime).

#### 3. EntryCreator
Links entries with their creators, representing a many-to-many relationship.

- **createdAt**: Record creation timestamp (DateTime).
- **updatedAt**: Last update timestamp (DateTime).
- **CreatorId**: Foreign key linking to the `Creators` table (Integer).
- **EntryId**: Foreign key linking to the `Entries` table (Integer).

### Relationships

- **Creators to Entries**: A many-to-many relationship, mediated through the `EntryCreator` table. This relationship allows each entry to be associated with multiple creators and vice versa.

## Sequelize Models

### `Creator`
Represents the `Creators` table in the database.

### `Entry`
Maps to the `Entries` table, with a field `content` capable of storing large text data.

### `EntryCreator`
Serves as the junction model for the many-to-many relationship between `Creators` and `Entries`.

## How to Run the Application
In the command line:

```
git clone https://github.com/finleyamo/MXTURE
cd MXTURE
npm i
node index
```
