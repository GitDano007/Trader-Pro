// Importing libraries
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const request = require('request');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const unirest = require('unirest');
const db = require("./models");
const mysql = require("mysql");



const PORT = process.env.PORT || 6800;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Sunshine6992!",
	database: "trading_accountDB"
  });

  connection.connect(function(err) {
	if (err) {
	  console.error("error connecting: " + err.stack);
	  return;
	}
  
	console.log("connected as id " + connection.threadId);
  });
};

app.get('/', function(req, res) {
	res.render('index', {
		test: request.body
	});
});


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

app.get('/watchlist', (req, res) => {
	db.All_stock.findAll({}).then((data) => {
		const names = [];

		for(let i = 0; i < data.length; i++) {
			
			names.push({
				id: data[i].dataValues.id,
				name: data[i].dataValues.short_name
			});
		}
		res.render('watchlist', { short_names: names });
	})
	
});

app.get('/watchlist', (req, res) => {
   db.All_stock.findOne({id: req.body.drop}).then((data) => {
	   const stocks = [];

	   for(let i = 0; i <data.length; i++) {

		   stocks.push({
			   id: data[i].dataValues.id,
			   name: data[i].dataValues.short_name,
			   symbol: data[i].dataValues.stock_symbol,
			   currentPrice: data[i].dataValues.stock_current_price,
			   dailyHigh: data[i].dataValues.stock_daily_high,
			   dailyLow: data[i].dataValues.stock_daily_low,
			   yearHigh: data[i].dataValues.stock_year_high,
			   yearLow: data[i].dataValues.stock_year_low

		   });
		   
	   }
	//    res.render('watchlist', { short_names: stocks, stock_symbols: stocks, stock_current_prices: stocks, stock_daily_highs: stocks, stock_daily_lows: stocks, stock_year_highs: stocks, stock_year_lows: stocks  })
	//    console.log(stocks);
   })  
});

//routes
require("./routes/api_routes.js")(app);
require("./routes/homepage.js")(app);
require("./routes/all_stock_api_routes.js")(app);
require("./routes/users_api_routes.js")(app);


    // Set static folder
	app.use(express.static(path.join(__dirname, 'public')));

	db.sequelize.sync({force: true}).then(() => {
	app.listen(PORT, () => console.log('Server listening on: http://localhost:', + PORT))
	})

//});