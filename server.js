// git push --set-upstream origin anhnguyendon92




// Importing libraries
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const request = require('request');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT || 8081;



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
/// Adding in html
    // Set static folder
    app.use(express.static(path.join(__dirname, 'public')));


    app.listen(PORT, () => console.log('Server listening on: http://localhost:', + PORT))

