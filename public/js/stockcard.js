$(document).ready(() => {


    $("#addstock").on("submit", function (event)
    {
        const drop = $("#dropdown").val();
        

        event.preventDefault();

        $.get(`/api/All_stock/${drop}`, function (req, res)
        {
            console.log(drop, "my response");

        }).then(function(data) {
            console.log('fsdfsd', data);
            const stock = {
                short_name: data.short_name,
                stock_symbol: data.stock_symbol,
                stock_current_price: data.stock_current_price,
                stock_daily_high: data.stock_daily_high,
                stock_daily_low: data.stock_daily_low,
                stock_year_high: data.stock_year_high,
                stock_year_low: data.stock_year_low,
            }
            $.post('/api/watchlist', stock, function (req, res)
            {

            });

            $.get("api/watchlist/:stock", function (req, res) { 
                db.watchlist.findAll(
                    {
                     where: {
                        short_name: data.short_name,
                        stock_symbol: data.stock_symbol,
                        stock_current_price: data.stock_current_price,
                        stock_daily_high: data.stock_daily_high,
                        stock_daily_low: data.stock_daily_low,
                        stock_year_high: data.stock_year_high,
                        stock_year_low: data.stock_year_low,
                     }   
                    })
                    
            })
        });

   
        
    });
});
