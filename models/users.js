module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define("users", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });
  
    users.associate = function(models) {
      // Associating users with their watched stocks
      // When an user is deleted, also delete any associated stocks(not needed)
      users.hasMany(models.all_stock, {
        //onDelete: "cascade"
      });
    };
  
    return users;
  };
  