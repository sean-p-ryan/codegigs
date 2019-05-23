const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database')

// Test db 
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(console.log(err => console.log('Error: ' + err)))

const app = express();

app.get('/', (req, res) => res.send('Index'))

// Gig routes
app.use('/gigs', require('./routes/gigs'))

const PORT = process.env.port || 5000;

app.listen(PORT, console.log(`Started server on port ${PORT}`));