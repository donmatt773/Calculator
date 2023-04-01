function calculate(){
    let operator = document.getElementById("operator").value;
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    let answer = document.getElementById("solution");
    switch(operator){
        case '+':
            answer.innerHTML = numberOne + numberTwo;
            break;
        case '-':
            answer.innerHTML = numberOne - numberTwo;
            break;
        case '*':
            answer.innerHTML = numberOne * numberTwo;
            break;
        case '/':
            answer.innerHTML = numberOne / numberTwo;
            break;
        default:
            answer.innerHTML = "Invalid Input";
    }
}