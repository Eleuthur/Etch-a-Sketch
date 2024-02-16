const container = document.querySelector('#container');
const square = document.createElement('div');

let number = 256;

function createGrid(number) {
    const screenSize = 960;
    const squareSize = 960 / number;

    for (let i=0; i<number * number; i++) {
        square.setAttribute("id", `DIV${i}`);
        square.setAttribute("class", "grid");
        square.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px`);
        container.appendChild(square.cloneNode(true));
    }
}

const button = document.querySelector('#sizeButton');
button.addEventListener('click', () => {
    container.textContent = "";
    createGrid(parseInt(prompt("Enter the grid size")));
    changeBG();
});

function changeBG() {
    const targets = document.querySelectorAll('.grid');
    targets.forEach((target) => {
        target.addEventListener('mouseout', function (e) {
            let color = Math.floor(Math.random() * 359);
            e.target.style.background = `hsl(${color}, 100%, 20%)`;
        });
    });
};
