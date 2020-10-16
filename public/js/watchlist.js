


    $(document).ready(() => {


        const addstockform = $('form.addstock');
        addstockform.on('submit', event => {
            console.log('click me');
            event.preventDefault();
        });

    });

    $("#addstock").on("submit", function (event) {
        var drop = $("#dropdown").val()
        

        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        

        var newStock = {
            All_stock: $("#dropdown [stocks]").val()
        };
        

       $.get(`/api/stock/${drop}`, function(req, res) {
       console.log(res, "my response");
       
    }).then(data => {
        $.ajax({
            url: 'watchlist',
            type: 'post',
            dataType: 'json',
            success: function (data) {
                $('.card').html(data)
            },
            
            data: JSON.stringify(data)
            
        });
        console.log(data);
    }) 

        // app.get('/watchlist', (req, res) => {
        //     db.All_stock.findOne({}).then((drop) => {
        //        res.render
        // app.put("/api/All_stock", function (req, res) {
        //     db.All_stock.findOne('#addstock').then((data) => {
        //         console.log(newStock);
        //     })
        // });

        // // Send the POST request.
        // $.ajax("/api/All_stocks", {
        //   type: "POST",
        //   data: newStock
        // }).then(
        //   function () {
        //     console.log("added new stock");
        //     // Reload the page to get the updated list
        //     location.reload();
        //   }
        // );
    });
    // app.get('/watchlist', (req, res) => {
    //     db.All_stock.findOne({id: req.id.drop}).then((data) => {
    //         const stocks = [];

    //         for(let i = 0; i <data.length; i++) {

    //             stocks.push({
    //                 id: data[i].dataValues.id,
    //                 name: data[i].dataValues.short_name,
    //                 symbol: data[i].dataValues.stock_symbol,
    //                 currentPrice: data[i].dataValues.stock_current_price,
    //                 dailyHigh: data[i].dataValues.stock_daily_high,
    //                 dailyLow: data[i].dataValues.stock_daily_low,
    //                 yearHigh: data[i].dataValues.stock_year_high,
    //                 yearLow: data[i].dataValues.stock_year_low

    //             });

    //         }
    //         res.render('watchlist', { short_names: stocks, stock_symbols: stocks, stock_current_prices: stocks, stock_daily_highs: stocks, stock_daily_lows: stocks, stock_year_highs: stocks, stock_year_lows: stocks  })
    //     })  
    //  });


