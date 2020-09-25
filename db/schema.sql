DROP DATABASE IF EXISTS trading_accountDB;

CREATE DATABASE trading_accountDB;

USE trading_accountDB;

CREATE TABLE account(
  id Int AUTO_INCREMENT NOT NULL,
  account_name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE user_stock(
  id Int AUTO_INCREMENT NOT NULL,
  stock_name VARCHAR(100) NOT NULL,
  stock_price INT NOT NULL,
  stock_owned VARCHAR(100),
  stock_owned_amount INT,
  stock_bought VARCHAR(45),
  stock_sold VARCHAR(45),
  PRIMARY KEY (id)
);

CREATE TABLE nuyen(
  id Int AUTO_INCREMENT NOT NULL,
  dollar_amount INT(1000000000),
  money_gain INT,
  money_loss INT,
  PRIMARY KEY (id)
);

CREATE TABLE all_stock(
  id Int AUTO_INCREMENT NOT NULL,
  stock_name VARCHAR(100) NOT NULL,
  stock_current_price INT NOT NULL,
  stock_daily_high INT,
  stock_daily_low INT,
  stock_200day_average INT,
  stock_year_high INT,
  stock_year_low INT,
  PRIMARY KEY (id)
);