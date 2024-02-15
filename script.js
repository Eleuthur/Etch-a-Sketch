const container = document.querySelector('#container');
const square = document.createElement('div');

let number = 5;

function createGrid(number) {
    for (let i=0; i<number; i++) {
        square.setAttribute("id", `DIV${i}`);
        square.setAttribute("class", "grid");
        container.appendChild(square.cloneNode(true));
    }
}

createGrid(number);