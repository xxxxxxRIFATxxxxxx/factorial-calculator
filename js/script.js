// Define UI
var number = document.querySelector("#number");
var result = document.querySelector("#result");

// Define Function
function factorial() {
    var initialValue = 1;

    for (var i = 1; i <= number.value; i++) {
        initialValue = initialValue * i;
    };
    result.innerText = initialValue;
};

// Define Event Listener
number.addEventListener("keyup", factorial);
