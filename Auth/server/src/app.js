const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require('./routes/users');
const config = require('./config/database');


// DB connect and error
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to database', config.database)
});
mongoose.connection.on('error', (err) => {
    console.log('Database error', err)
});

// Set up server
const app = express();
const port = process.env.PORT || 8080;

// Cors middleware
app.use(cors());
// Body Parser middleware
app.use(bodyParser.json());
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
// Routes
app.use('/users', users);
// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint!')
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
// Start server
app.listen(port, () => {
    console.log('Server started on port', port)
});