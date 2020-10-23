$(document).ready(() => {


    $("#addstock").on("submit", function (event) {
        const drop = $("#dropdown").val()


        // Make sure to preventDefault on a submit event.
        event.preventDefault();





        $.get(`/api/All_stock/${drop}`, function (req, res) {
            console.log(drop, "my response");

        }).then(data => {
            $.post('/api/watchlist', data, function () {
                console.log(data, "Hot Dog Finally");
            }
                // $.ajax({
                //     url: 'watchlist',
                //     type: 'post',
                //     dataType: 'json',
                //     success: function (data) {
                //         $('.card').html(data)
                //     },

                //     data: JSON.stringify(data)

                // });

            )
        })


    })


}

)
