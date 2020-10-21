
$(document).ready(() => {


    // const addstockform = $('form.addstock');
    // addstockform.on('submit', event => {
    //     console.log('click me');
    //     event.preventDefault();
    // });



    $("#addstock").on("submit", function (event) {
        const name = [];

        for (let i = 0; i < name.length; i++) {

            name.push({
                id: name[i].dataValues.id,
                name: name[i].dataValues.short_name
            });

            stockID(name.id)
            nameInput.val('');
        }
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log('Ive been clicked');


        function stockID(short_name, stock_current_price) {
            $.get('/api/All_stock', {
                name: short_name,
                currentPrice: stock_current_price

            })
                .then(function (short_name, stock_current_price) {
                    $.post('api/watchlist', {
                        id: id,
                        name: short_name,
                        symbol: stock_symbol,
                        currentPrice: stock_current_price
                    })
                        .catch(function (err) {
                            console.log(err);
                        });
                })


            // // Send the POST request.
            // $.ajax("/api/watchlist", {
            //   type: "POST",
            //   data: name

            // }).then(
            //   function () {
            //     console.log("added new stock");



            //     );
            // });
        };


    })
})