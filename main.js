let operation = ""; 
let result = ""; 
let por1 = "", por2 = "", valuePrev = 0;
let afterEquals = false;


const operationDisplay = document.querySelector('.operation');
const resultDisplay = document.querySelector('.total');

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        if(valuePrev !== '='){
            addToOperation(item.textContent);
            calculateResult();
            valuePrev = item.textContent;
        }
        else {
            
        }
    });
});

document.querySelector('#clear-button').addEventListener('click', clearOperation);

document.querySelector('.equals').addEventListener('click', equalsOperation);

function addToOperation(value) {
    
    if(value !== '%' && value !== '='){
        if(!isNaN(parseFloat(value))){
            por1 += value;
        }
        else {
            por2 = por1;
            por1 = "";
        }
        operation += value;
    } else if (value === '%'){
        operation = calculaPorcentaje(operation, por1, por2);
    } /* else {
        equalsOperation();
    } */

    operationDisplay.textContent = operation;
}

function calculatePercentage(cad, por1, por2) {
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

function equalsOperation(){
    operation += '=';
    operationDisplay.textContent = operation;
    resultDisplay.style.fontWeight = "bold";
    resultDisplay.textContent = result;
}