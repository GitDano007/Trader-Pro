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


const PORT = process.env.PORT || 6972;

const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'password',
        database: 'trading_accountDB'
    });
};
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
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

//routes
require("./routes/api_routes.js")(app);
require("./routes/homepage.js")(app);
// require("./routes/all_stock_api_routes.js")(app);
// require("./routes/users_api_routes.js")(app);



// // Set handlebar routes
// const routes = require('./controllers/watchlist_controller')
// /// Adding in html
// app.use(routes);
    // Set static folder
	app.use(express.static(path.join(__dirname, 'public')));
	
	

// 	var req = unirest("GET", "https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/TSLA,AAPL,AMZN,MSFT,GOOG,WMT,BEST,INTC,NFLX,XOM,NVDA,BAC,CVX,WFC,BA,VZ,JNJ,BABA,HD,ABBV,DIS,CSCO,ORCL,AAL,QQQ,AMGN,NKLA,FANG,BBBY,BUD,JPM,KIRK,VSLR,DKNG,LVGO,FVRR,ZM,PTON,PLUG,APPS,DOCU,RDFN,Z,LAC,PACB,FBIO,NVDA,TTD,DRD,PLMR");
	
// 	req.headers({
// 		"x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
// 		"x-rapidapi-key": "0e63cf5abcmsh4d3233bfb976d24p1d7311jsne67624f44596",
// 		"useQueryString": true
// 	});
	
	
// 	req.end(function (res) {
// 		if (res.error) throw new Error(res.error);

// 		for (let i = 0; i < res.body.length; i++) {
// 			const quote = {
// 				short_name: res.body[i].shortName,
// 				stock_symbol: res.body[i].symbol,
//   				stock_current_price: res.body[i].ask,
//   				stock_daily_high: res.body[i].regularMarketDayHigh,
//   				stock_daily_low: res.body[i].regularMarketDayLow,
//   				stock_year_high: res.body[i].fiftyTwoWeekHigh,
//   				stock_year_low: res.body[i].fiftyTwoWeekLow
				
				  
// 			}; 
// 			console.log(quote);
// 		};
	
// 	});


// 	var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers");
//     req.query({
//     "region": "US"
// });
//     req.headers({
//     "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//     "x-rapidapi-key": "0e63cf5abcmsh4d3233bfb976d24p1d7311jsne67624f44596",
//     "useQueryString": true
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
	
//     // console.log(res.body.finance.result.quotes);
	
// 	req.end(function (res) {
// 		if (res.error) throw new Error(res.error);
	
// 		for (let i = 0; i < res.body.finance.result[0].quotes.length; i++) {
// 			const finance = {
// 				symbol: res.body.finance.result[0].quotes[i].symbol,
// 				longName: res.body.finance.result[0].quotes[i].longName,
// 				regularMarketPrice: res.body.finance.result[0].quotes[i].regularMarketPrice,
// 				regularMarketChangePercent: res.body.finance.result[0].quotes[i].regularMarketChangePercent,
					   
// 			} 
// 			console.log(finance);
// 		}

// 	})
db.sequelize.sync().then(() => {
	app.listen(PORT, () => console.log('Server listening on: http://localhost:', + PORT))
})
	
