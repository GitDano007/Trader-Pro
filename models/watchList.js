var orm = require('../config/orm');

var userStocks = {
    
    selectAll: function (cb) {
       
        orm.selectAll("watchlist", cb);
        
    },
    
    insertOne: function (newDataObject, cb) {
        orm.insertOne("watchlist", newDataObject, cb);
    },
    // This will need to be changed to delete.
    
    // updateOne: function (updatedDataObject, id, cb) {
    //     orm.updateOne("watchlist", updatedDataObject, id, cb);
    // }
};

module.exports = userStocks;