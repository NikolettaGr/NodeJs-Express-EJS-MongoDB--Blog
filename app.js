require('dotenv').config();

const express = require('express');
const expresslayout = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

// Templating Engine
app.use(expresslayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log('App listening on port ${PORT}');
});