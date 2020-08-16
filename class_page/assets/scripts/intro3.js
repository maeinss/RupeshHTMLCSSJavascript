  
var number1 = document.querySelector("#number1");
var number2 = document.querySelector("#number2");
var output = document.querySelector("#output");

var addNumbers = function() {
    var num1 = parseInt(number1.value);
    var num2 = parseInt(number2.value)

    output.value = num1 + num2;
};

var plusOperator = document.querySelector(".operator__plus");
var allOperators = document.querySelectorAll(".operator");

// Attach a click event listener to a single element
plusOperator.addEventListener("click", function(event) {
    // event.currentTarget.innerHTML = "plus";
    addNumbers();    
    event.currentTarget.classList.toggle("operator-active");
    // classList.add, classList.remove("operator-active");
    event.currentTarget.dataset.mode = "active";
});

// Loop through element list and attach to all
allOperators.forEach(function(operator) {
    // operator.addEventListener("click", function(event) {
    //     event.currentTarget.innerHTML;
    // });
});