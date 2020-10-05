// var express = require('express');
// var userStocks = require('../models/all_stock'); 
// // all api routes
// var router = express.Router();


// router.get('/', function (req, res) {
//     userStocks.selectAll(function (data) {
       
//         // console.log(data);
//         res.render('index', { watchlist: data });
//     });
// });

// router.post('/watchlist/insert', function (req, res) {
//     console.log(req.body);

//     userStocks.insertOne(req.body, function (data) {
//         res.redirect('/');
//     });
// });
// // This needs to be changed to delete. ALERT
// router.delete('/watchlist/:id', function (req, res) {
//     // var updateBurger = { burger_name: ' };
//     UserStocks.updateOne({ devoured: 1 }, req.params.id, function (data) {
//         res.sendStatus(200);
//     });
// });

// module.exports = router;