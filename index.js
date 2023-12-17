import express from 'express';
import { Creator, Entry } from './db/models.js';

const app = express()
const port = process.env.PORT || 8080

app.set('view engine', 'pug')

app.use('/static', express.static('public'))

// Index (home) page
app.get('/', async function (req, res) {

    // Fetch all entries from database
    const entries = await Entry.findAll({ include: Creator, order: [['updatedAt', 'DESC']] })
    
    // Render them on the index page
    res.render('index', { entries })
})

// Entry route
app.get('/~:path', async function (req, res) {

    // Fetch the entry from the database
    const entry = await Entry.findOne({ where: { path: req.params.path }, include: Creator });

    // Render the entry page with the entry object from database.
    res.render('entry', { entry });
})

// Creator route
app.get('/@:username', async function (req, res) {

    const creator = await Creator.findOne({ where: { username: req.params.username }, include: Entry });
    
    res.render('creator', { creator })
})

// About page
app.get('/about', async function (req, res) {
    res.render('about')
})

app.listen(port, console.log(`\nServer listening at http://localhost:${port}\n`))