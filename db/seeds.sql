USE trading_accountDB;

INSERT INTO `users` (`email`, `password`) VALUES ('email', MD5('password'));



INSERT INTO `watchlist` (`short_name`) VALUES ('name', false);
INSERT INTO `watchlist` (`stock_current_price`) VALUES (20);
INSERT INTO `watchlist` (`stock_daily_high`) VALUES (300);
INSERT INTO `watchlist` (`stock_daily_low`) VALUES (02);
INSERT INTO `watchlist` (`stock_year_high`) VALUES (1022);
INSERT INTO `watchlist` (`stock_year_low`) VALUES (01);

INSERT INTO `all_stock` (`short_name`) VALUES ('name', false);
INSERT INTO `all_stock` (`stock_current_price`) VALUES (20);
INSERT INTO `all_stock` (`stock_daily_high`) VALUES (300);
INSERT INTO `all_stock` (`stock_daily_low`) VALUES (02);
INSERT INTO `all_stock` (`stock_year_high`) VALUES (1022);
INSERT INTO `all_stock` (`stock_year_low`) VALUES (01);

