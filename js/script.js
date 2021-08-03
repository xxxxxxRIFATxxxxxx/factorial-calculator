// Factorial
// 1! = 1
// 2! = 2 X 1
// 3! = 3 X 2 X 1
// 4! = 4 X 3 X 2 X 1
// 5! = 5 X 4 X 3 X 2 X 1

// Recursive Factorial
// 1! = 1
// 2! = 2 X 1!
// 3! = 3 X 2!
// 4! = 4 X 3!
// 5! = 5 X 4!

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
