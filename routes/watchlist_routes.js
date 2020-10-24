const db = require("../models");

module.exports = function(app) {
  app.get("/api/watchlist", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.watchlist.findAll({
      include: [db.all_stock]
    }).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  app.get("/api/watchlist/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.users.findOne({
      where: {
        id: req.params.id
      },
      include: [db.all_stock]
    }).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  app.post("/api/watchlist", function(req, res) {
    db.users.create(req.body).then(function(dbusers) {
      res.json(dbusers);
    });
  });

 app.get('/api/All-stock/:[drop]', function(req, res) {
     
 }); 
}

