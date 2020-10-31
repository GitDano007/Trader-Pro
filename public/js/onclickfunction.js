
$(document).ready(() => {


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
        
        
        }


    
    )}
    
    )