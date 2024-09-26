const display = document.getElementById("display");

function addToDisplay(input) {
    display.value +=input;

    
}
function calculate() {
    let display = document.getElementById('display');
    display.value = eval(display.value);
    
}

function clearDisplay() {
    display.value = '';
    
}
