// Importing libraries
const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');

// Importing files
const routes = require('./routes/handlers');


// Sending static files with Express 
app.use(express.static('public'));
