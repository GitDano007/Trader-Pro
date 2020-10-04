var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/all_stock", function(req, res) {
      var query = {};
      if (req.query.users_id) {
        query.usersId = req.query.users_id;
      }
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Author
      db.all_stock.findAll({
        where: query,
        include: [db.users]
      }).then(function(dball_stock) {
        res.json(dball_stock);
      });
    });
  
    // Get route for retrieving a single post
    app.get("/api/all_stock/:id", function(req, res) {
      // Here we add an "include" property to our options in our findOne query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Author
      db.all_stock.findOne({
        where: {
          id: req.params.id
        },
        include: [db.users]
      }).then(function(dball_stock) {
        res.json(dball_stock);
      });
    });
  
    // POST route for saving a new post
    app.post("/api/all_stock", function(req, res) {
      db.all_stock.create(req.body).then(function(dball_stock) {
        res.json(dball_stock);
      });
    });
  
    // DELETE route for deleting posts
    app.delete("/api/all_stock/:id", function(req, res) {
      db.all_stock.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dball_stock) {
        res.json(dball_stock);
      });
    });
  
    // PUT route for updating posts
    app.put("/api/all_stock", function(req, res) {
      db.all_stock.update(
        req.body,
        {
          where: {
            id: req.body.id
          }
        }).then(function(dball_stock) {
        res.json(dball_stock);
      });
    });
  };
  