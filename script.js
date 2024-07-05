

const gridContainer = document.getElementById('gridContainer');
const generateBtn = document.querySelector('#generate')



 function getValue(){
    let input = document.getElementById('myInput');

    let value = input.value;
    return value;
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



    gridItem.addEventListener("mouseover", () => {
        gridItem.style.background = 'blue';
    })

    }
}
}



generateBtn.addEventListener("click", () => {
    if(getValue() > 100){
        alert('The limit is 100')
    }else if (getValue() <= 100){
    generateGrid(getValue());
        }
    }
)