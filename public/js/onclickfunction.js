
        $(document).ready(() => {


            // const addstockform = $('form.addstock');
            // addstockform.on('submit', event => {
            //     console.log('click me');
            //     event.preventDefault();
            // });

        });

        $("#addstock").on("submit", function (event) {
            const name = [];

            for(let i = 0; i < name.length; i++) {
                
                name.push({
                    id: name[i].dataValues.id,
                    name: name[i].dataValues.short_name
                });
            }
            // Make sure to preventDefault on a submit event.
            event.preventDefault();
            console.log('Ive been clicked');

            
           

            // // Send the POST request.
            // $.ajax("/api/watchlist", {
            //   type: "POST",
            //   data: name

            // }).then(
            //   function () {
            //     console.log("added new stock");
                
                
              })
        //     );
        // });
        

            
