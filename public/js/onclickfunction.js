
        $(document).ready(() => {


            const addstockform = $('form.addstock');
            addstockform.on('submit', event => {
                console.log('click me');
                event.preventDefault();
            });

        });

        $("#addstock").on("submit", function (event) {

            // Make sure to preventDefault on a submit event.
            event.preventDefault();
            console.log('Ive been clicked');

            var newStock = {
                All_stock: $("#addstock [stocks]").val()
            };

            app.put("/api/All_stock", function (req, res) {
                db.All_stock.findOne('#addstock').then((data) => {
                    console.log(newStock);
                })
            });

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


