// Importing libraries
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const request = require('request');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json())
const users = []
app.get('/users', (req, res) => {
	res.json(users)
})
app.post('/users', (req, res) => {
	const user = {email: req.body.name, password: req.body.password}
	users.push(user)
	res.status(201).send()
});
// Set handlebar routes
const routes = require('./controllers/watchlist_controller')
/// Adding in html
app.use(routes);
    // Set static folder
    app.use(express.static(path.join(__dirname, 'public')));


    app.listen(PORT, () => console.log('Server listening on: http://localhost:', + PORT))

