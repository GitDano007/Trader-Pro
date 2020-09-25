USE trading_accountDB;

INSERT INTO account (account_name) VALUES ('name', false);
INSERT INTO account (password) VALUES ('passowrd', false);

INSERT INTO user_stock (stock_name) VALUES (50);
INSERT INTO user_stock (stock_price) VALUES (20);
INSERT INTO user_stock (stock_owned) VALUES (1);
INSERT INTO user_stock (stock_owned_amount) VALUES (200);
INSERT INTO user_stock (stock_bought) VALUES (2);
INSERT INTO user_stock (stock_sold) VALUES (0);

INSERT INTO nuyen (dollar_amount) VALUES (10000);
INSERT INTO nuyen (money_gain) VALUES (10);
INSERT INTO nuyen (money_loss) VALUES (1);

INSERT INTO all_stock (stock_name) VALUES ('name', false);
INSERT INTO all_stock (stock_current_price) VALUES (20);
INSERT INTO all_stock (stock_daily_high) VALUES (300);
INSERT INTO all_stock (stock_daily_low) VALUES (02);
INSERT INTO all_stock (stock_200day_average) VALUES (450);
INSERT INTO all_stock (stock_year_high) VALUES (1022);
INSERT INTO all_stock (stock_year_low) VALUES (01);
