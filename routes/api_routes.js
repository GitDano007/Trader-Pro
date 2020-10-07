const express = require('express');
// const app = express();
const unirest = require("unirest");
const { data } = require('jquery');

function call_api(){
    unirest.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers')
    .header("X-RapidAPI-Key", '16471ddbe1mshaa29c110d16c899p1efb9fjsn0e36b112d5de')
    .header('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com')
    .end(function (result) {
    let data = result.body.finance.result[0].quotes
    // console.log(result.status, result.body.finance.result[0].quotes);
    printData(data)
    return data
    });
}

async function printData(data){
    let stockData = []
    let formattedData;
    //  await console.log(data)
    for(i = 0; i < data.length; i++) {
        formattedData = `Stock Symbol: ${data[i].symbol}, Company: ${data[i].longName} Stock Price: ${data[i].regularMarketPrice}, Stock Change Percentage: ${data[i].regularMarketChangePercent}`
        stockData.push(formattedData)
    }
    showData(stockData);
    return stockData;
}

async function showData(stockData){
    console.log(stockData)

    const symbol = data[i].symbol;
    const longName = data[i].longName;
    const regularMarketPrice = data[i].regularMarketPrice ;
    const regularMarketChangePercent = [];
    const APIKey = '16471ddbe1mshaa29c110d16c899p1efb9fjsn0e36b112d5de';
    
    for (let i = 0; i < result.status, result.body.finance.result[0].quotes; i++){
        var stockData = stockData[i];
        var ticker = $('<div></div>').addClass('ticker')
        ticker.append('<p>hello</p>');
        $('.cardArea').append(ticker);
        $('.symbol').append(symbol.data[i]);
        $('.company').append(longName.data[i]);
        $('.Stock price').append(regularMarketPrice.data[i]);
        $('.Percentage change').append(regularMarketChangePercent.data[i]);
	}
}

// Requiring our models and passport as we've configured it
var db = require('../models');
var passport = require('../config/passport');

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // app.post('/api/login', passport.authenticate("local"), function(req, res) {
    app.post('/api/login', function(req, res) {

    // Sending back a password, even a hashed password, isn't a good idea
    console.log("WE'RE LOGGED IN", req);
    res.json({
      email: req.body.email,
      id: req.body.password
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/api/signup', function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, '/index');
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/index');
  });

  // Route for getting some data about our user to be used client side
  app.get('/api/user_data', function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};


