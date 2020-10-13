$(document).ready(function() {
    // Getting a reference to the input field where user adds a new todo
    var $newItemInput = $("input.new-item");
    // Our new todos will go inside the todoContainer
    var $todoContainer = $(".todo-container");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "button.delete", deletewatchlist);
    $(document).on("submit", "#todo-form", insertwatchlist);
  
    // Our initial stock array
    const stock = [];
  
    // Getting watchlist from database when page loads
    getwatchlist();
  
    // This function resets the todos displayed with new todos from the database
    function initializeRows() {
      $todoContainer.empty();
      var rowsToAdd = [];
      for (var i = 0; i < stock.length; i++) {
        rowsToAdd.push(createNewRow(stock[i]));
      }
      $todoContainer.prepend(rowsToAdd);
    }
  
    // This function grabs todos from the database and updates the view
    function getwatchlist() {
      $.get("/api/All_stock", function(data) {
        stock = data;
        initializeRows();
      });
    }
  
    // This function deletes a todo when the user clicks the delete button
    function deletewatchlist(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      $.ajax({
        method: "DELETE",
        url: "/api/watchlist/" + id
      }).then(getwatchlist);
    }
  
  
    // This function constructs a todo-item row
    function createNewRow(stock) {
      var $newInputRow = $(
        [
          "<li class='list-group-item todo-item'>",
          "<span>",
          todo.text,
          "</span>",
          "<input type='text' class='edit' style='display: none;'>",
          "<button class='delete btn btn-danger'>x</button>",
          "</li>"
        ].join("/watchlist")
      );
  
      $newInputRow.find("button.delete").data("id", watchlist.id);
      $newInputRow.data("todo", todo);
      return $newInputRow;
    }
  
    // This function inserts a new todo into our database and then updates the view
    function insertwatchlist(event) {
      event.preventDefault();
      var stock = {
        text: $newItemInput.val().trim(),
        complete: false
      };
  
      $.post("/api/watchlist", stock, getwatchlist);
      $newItemInput.val("");
    }
  });