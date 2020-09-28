USE trading_accountDB;

INSERT INTO `users` (`email`, `password`) VALUES ('email1', MD5('password'));
INSERT INTO `users` (`email`, `password`) VALUES ('email2', MD5('password'));
INSERT INTO `users` (`email`, `password`) VALUES ('email3', MD5('password'));
INSERT INTO `users` (`email`, `password`) VALUES ('email4', MD5('password'));
INSERT INTO `users` (`email`, `password`) VALUES ('email5', MD5('password'));
INSERT INTO `users` (`email`, `password`) VALUES ('email6', MD5('password'));


INSERT INTO `user_stock` (`stock_name`) VALUES (50);
INSERT INTO `user_stock` (`stock_price`) VALUES (20);
INSERT INTO `user_stock` (`stock_owned`) VALUES (1);
INSERT INTO `user_stock` (`stock_owned_amount`) VALUES (200);
INSERT INTO `user_stock` (`stock_bought`) VALUES (2);
INSERT INTO `user_stock` (`stock_sold`) VALUES (0);

INSERT INTO `stocks_activity` (`dollar_amount`) VALUES (100);
INSERT INTO `stocks_activity` (`money_gain`) VALUES (10);
INSERT INTO `stocks_activity` (`money_loss`) VALUES (1);

INSERT INTO `all_stock` (`stock_name`) VALUES ('name', false);
INSERT INTO `all_stock` (`stock_current_price`) VALUES (20);
INSERT INTO `all_stock` (`stock_daily_high`) VALUES (300);
INSERT INTO `all_stock` (`stock_daily_low`) VALUES (02);
INSERT INTO `all_stock` (`stock_200day_average`) VALUES (450);
INSERT INTO `all_stock` (`stock_year_high`) VALUES (1022);
INSERT INTO `all_stock` (`stock_year_low`) VALUES (01);

