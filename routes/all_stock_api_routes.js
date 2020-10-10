var db = require("../models");
const unirest = require('unirest');
const jade = require('jade')
const { response } = require("express");


// // Routes
// // =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  // app.get("/api/all_stock", function(req, res) {
  //   var query = {};
  //   if (req.query.users_id) {
  //     query.usersId = req.query.users_id;
  //   }
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Author
  //   db.all_stock.findAll({
  //     where: query,
  //     include: [db.users]
  //   }).then(function(dball_stock) {
  //     res.json(dball_stock);
  //   });
  // });


  var req = unirest("GET", "https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/TSLA,AAPL,AMZN,MSFT,GOOG,WMT,BEST,INTC,NFLX,XOM,NVDA,BAC,CVX,WFC,BA,VZ,JNJ,BABA,HD,ABBV,DIS,CSCO,ORCL,AAL,QQQ,AMGN,NKLA,FANG,BBBY,BUD,JPM,KIRK,VSLR,DKNG,LVGO,FVRR,ZM,PTON,PLUG,APPS,DOCU,RDFN,Z,LAC,PACB,FBIO,NVDA,TTD,DRD,PLMR");

  req.headers({
    "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
    "x-rapidapi-key": "0e63cf5abcmsh4d3233bfb976d24p1d7311jsne67624f44596",
    "useQueryString": true
  });


  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    
    const names = []  

    for (let i = 0; i < res.body.length; i++) {
      
      names.push(res.body[i].shortName);

      db.All_stock.create({

        short_name: res.body[i].shortName,
        stock_symbol: res.body[i].symbol,
        stock_current_price: res.body[i].ask,
        stock_daily_high: res.body[i].regularMarketDayHigh,
        stock_daily_low: res.body[i].regularMarketDayLow,
        stock_year_high: res.body[i].fiftyTwoWeekHigh,
        stock_year_low: res.body[i].fiftyTwoWeekLow
      }).then( () => {
        // res.render("/watchlist", {short_names:names})
      })
      //console.log({short_names:names});
      //res.render("/watchlist", {short_names:names})
    };
//console.log(names)
  });

  


app.get("/api/All_stocks/shortName", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.All_stocks.findAll({}).then(function(dbAllstocks) {
    // We have access to the todos as an argument inside of the callback function
    res.json(dbAllstocks);
  });
});


}



//     // Get route for retrieving a single post
//     app.get("/api/all_stock/:id", function(req, res) {
//       // Here we add an "include" property to our options in our findOne query
//       // We set the value to an array of the models we want to include in a left outer join
//       // In this case, just db.Author
//       db.all_stock.findOne({
//         where: {
//           id: req.params.id
//         },
//         include: [db.users]
//       }).then(function(dball_stock) {
//         res.json(dball_stock);
//       });
//     });

//     // POST route for saving a new post
//     app.post("/api/all_stock", function(req, res) {
//       db.all_stock.create(req.body).then(function(dball_stock) {
//         res.json(dball_stock);
//       });
//     });

//     // DELETE route for deleting posts
//     app.delete("/api/all_stock/:id", function(req, res) {
//       db.all_stock.destroy({
//         where: {
//           id: req.params.id
//         }
//       }).then(function(dball_stock) {
//         res.json(dball_stock);
//       });
//     });

//     // PUT route for updating posts
//     app.put("/api/all_stock", function(req, res) {
//       db.all_stock.update(
//         req.body,
//         {
//           where: {
//             id: req.body.id
//           }
//         }).then(function(dball_stock) {
//         res.json(dball_stock);
//       });
//     });
//   };
