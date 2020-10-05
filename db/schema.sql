drop database if exists trading_accountDB;

create database trading_accountDB;

use trading_accountDB;


CREATE TABLE users(
  id Int (10) AUTO_INCREMENT NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE watchlist(
  id INT AUTO_INCREMENT NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  stock_symbol VARCHAR(10) NOT NULL,
  stock_current_price INT NOT NULL,
  stock_daily_high INT,
  stock_daily_low INT,
  stock_year_high INT,
  stock_year_low INT,
  PRIMARY KEY (id)
);

CREATE TABLE all_stock(
  id Int AUTO_INCREMENT NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  stock_symbol VARCHAR(10),
  stock_current_price INT NOT NULL,
  stock_daily_high INT,
  stock_daily_low INT,
  stock_year_high INT,
  stock_year_low INT,
  PRIMARY KEY (id)
);

