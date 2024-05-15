var listItems = [];
var Add = document.getElementById("add");
var Item = document.getElementById("userInput");
var Display = document.getElementById("list")


    

function AddToList() {
        var Item = document.getElementById("userInput").value.trim();

    if (Item === "") {
        return;
    }

    var Display = document.getElementById("list");

    var newItem = document.createElement("p");
    
    newItem.textContent = Item;

    Display.appendChild(newItem);

    var childElement = document.createElement("button");

    childElement.textContent = "Delete";

    newItem.appendChild(childElement);
  

    childElement.addEventListener("click", function () {
    Display.removeChild(newItem);
    });
    
    document.getElementById("userInput").value = "";
}





document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            Add.click(); 
        }
    });
});
