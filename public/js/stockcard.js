$(document).ready(() => {
    const drop = [];

    $("#addstock").on("submit", function (event)
    {
        const drop = $("#dropdown").val();
        
// Make sure to preventDefault on a submit event.
        event.preventDefault();

        $.get(`/api/All_stock/${drop}`, function (req, res)
        {
            console.log(drop, "my response");

        }).then(function() {
            $.post('/api/watchlist', drop, function ()
            {

                console.log(drop, "Hot Dog Finally");
            });
        });
        getDrop();
        function getDrop() {
            $.get("/api/watchlist", function (data)
            {
                drop = data;

            });
           

        }
       
        
    });
});
