module.exports = function(sequelize, DataTypes) {
    const watchlist = sequelize.define('watchlist', {
      short_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      stock_symbol: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      stock_current_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
        len: [1]
      },
      stock_daily_high: {
        type: DataTypes.INTEGER,
        allowNull: true,
        len: [1]
      },
      stock_daily_low: {
        type: DataTypes.INTEGER,
        allowNull: true,
        len: [1]
      },
      stock_year_high: {
        type: DataTypes.INTEGER,
        allowNull: true,
        len: [1]
      },
      stock_year_low: {
        type: DataTypes.INTEGER,
        allowNull: true,
        len: [1]
      },

    });
    return watchlist;
};