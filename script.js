

const gridContainer = document.getElementById('gridContainer');
const generateBtn = document.querySelector('#generate');
const blackBtn = document.querySelector('#blackBtn');
const chaosBtn = document.querySelector('#chaosBtn');
const resetBtn = document.querySelector('#resetBtn');
const eraserBtn = document.querySelector('#eraserBtn');

document.getElementById("blackBtn").disabled = true;
document.getElementById("chaosBtn").disabled = true;
document.getElementById("resetBtn").disabled = true;
document.getElementById("eraserBtn").disabled = true;



 function getValue(){
    let input = document.getElementById('myInput');
    let value = input.value;
    return value;
 }

 function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}







function generateGrid(){
    gridContainer.replaceChildren();
for (let i = 1; i <= getValue(); i++){
    for(let j = 1; j <= getValue(); j++)
        {
    let gridItem = document.createElement("div");
    gridItem.className = 'grid-item'
    gridContainer.appendChild(gridItem);
    gridContainer.style.width = `${(getValue() * (10 + 2))}px`
    gridContainer.style.height = `${(getValue() * (10 + 2))}px`


    blackBtn.addEventListener('click', () => {
        gridItem.addEventListener("mouseover", () => {
            gridItem.style.background = 'black';
        });
    });
    chaosBtn.addEventListener('click', () => {
        gridItem.addEventListener("mouseover", () => {
            gridItem.style.background = generateRandomColor();
        });
    });
    resetBtn.addEventListener('click', () => {
        gridItem.style.background = 'white';
    });
    eraserBtn.addEventListener('click', () => {
        gridItem.addEventListener("mouseover", () => {
            gridItem.style.background = 'white';
        });
    });






    }
}
}

generateBtn.addEventListener("click", () => {


    if(getValue() > 70 || getValue() < 1){
        alert('Enter a value between 1 and 70')
    }else if (getValue() <= 70 && getValue() >= 1){
document.getElementById("blackBtn").disabled = false;
document.getElementById("chaosBtn").disabled = false;
document.getElementById("resetBtn").disabled = false;
document.getElementById("eraserBtn").disabled = false;
    generateGrid(getValue());
        }
    }
)