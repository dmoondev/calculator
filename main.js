let operation = ""; 
let result = ""; 
let por1 = "", por2 = "";


const operationDisplay = document.querySelector('.operation');
const resultDisplay = document.querySelector('.total');

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        addToOperation(item.textContent);
        calculateResult();
    });
});


document.querySelector('#clear-button').addEventListener('click', clearOperation);


function addToOperation(value) {
    if(value !== '%'){
        if(!isNaN(parseFloat(value))){
            por1 += value;
        }
        else {
            por2 = por1;
            por1 = "";
        }
        operation += value;
    } else {
        operation = calculaPorcentaje(operation, por1, por2);
    }

    operationDisplay.textContent = operation;
}

function calculaPorcentaje(cad, por1, por2) {
    let porcentaje = ((parseFloat(por1) * parseFloat(por2) / 100)).toString();
    cad = charDelete(cad);
    cad += porcentaje;
    return cad;
}

function charDelete(del){
    let chars = del.split('');
    while(!isNaN(chars[chars.length-1])){
        chars.pop();
    }
    return chars.join('');
}


function calculateResult() {
    try {
        result = eval(operation);
        resultDisplay.textContent = result;
    } catch (error) {
        result = "...";
        resultDisplay.textContent = result;
        console.error("Error al calcular:", error);
    }
}

function clearOperation() {
    operation = "";
    result = "";
    operationDisplay.textContent = "0";
    resultDisplay.textContent = "0";
}
