
$("#addstock").on("submit", function (event) {
    const drop = $("#dropdown").val()


    // Make sure to preventDefault on a submit event.
    event.preventDefault();




    console.log(drop)
    $.get(`/api/All_stock/${drop}`, function (req, res) {
        console.log(drop, "my response");

    }).then(data => {
        $('#stockCard').empty().append(data)
        // $.ajax({
        //     url: 'watchlist',
        //     type: 'post',
        //     dataType: 'json',
        //     success: function (data) {
        //         $('.card').html(data)
        //     },

        //     data: JSON.stringify(data)

        // });
        
    })


});



