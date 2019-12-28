/* Setting the grid as variable */
const grid = document.querySelector('.grid');
let defaultSize = 16;
/* setting default color variable */
let color = "#2b2b2b";

/* FUNCTIONS: */
/* Creating divs in the grid function: */
const addDivsToGrid = function (size) {

    for (let i = 0; i < size * size; i++) {
        const createDiv = document.createElement('div');
        grid.appendChild(createDiv);
    }
    hover(color);
}
/* HOVER */
const hover = function (color) {

    const gridDiv = document.querySelectorAll('.grid > div');

    gridDiv.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            return e.target.style.backgroundColor = color;
        });
    });

}
// /* Set grid function: */
const setGrid = function (size) {
    grid.setAttribute("style",
        `grid-template-columns: repeat(${size}, 1fr); 
         grid-template-rows: repeat(${size}, 1fr);`);
}

const clearDivs = function () {

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

}

addDivsToGrid(defaultSize);
setGrid(defaultSize);


/* Change COLOR/Clear Grid/Buttons: */
const controller = document.querySelector('.controller');
const defaultBtn = document.querySelector('.default-color');
const rgbBtn = document.querySelector('.rgb-color');
const liteBtn = document.querySelector('.light-color');
const clearBtn = document.querySelector('.clear');
let userInput;

if (controller) {

    /* Default Button */
    defaultBtn.addEventListener('click', (e) => {
        color = "#2b2b2b";
        hover(color);
    });
    /* Lite Button */
    liteBtn.addEventListener('click', (e) => {
        color = "#C0C0C0";
        hover(color);
    });
    /* RGB Button */
    if (rgbBtn) {
        rgbBtn.addEventListener('click', (e) => {

            const gridDiv = document.querySelectorAll('.grid > div');

            gridDiv.forEach((div) => {
                div.addEventListener("mouseover", (e) => {

                    let r = Math.floor(Math.random() * (255 - 0 + 1));
                    let g = Math.floor(Math.random() * (255 - 0 + 1));
                    let b = Math.floor(Math.random() * (255 - 0 + 1));
                    color = `rgb(${r}, ${g}, ${b})`;
                    console.log(color);

                    e.target.style.backgroundColor = color;
                });
            });
        });
    }


    clearBtn.addEventListener('click', (e) => {
        // gridDiv.forEach((div) => {
        //     div.style.backgroundColor = "#fff";
        // });

        /* Data validation: */
        userInput = prompt("How many squares per side?");
        let errors = true;
        while (errors) {
            if (isNaN(userInput)) {
                userInput = prompt('Must be a number, try again.');
            } else if (userInput <= 0) {
                userInput = prompt('Must be a positive number/greater than zero. Try again.');
            } else if (userInput > 100) {
                userInput = prompt('99 squares max. Try again.');
            }
            if (!isNaN(userInput) && userInput > 0 && userInput < 100) {
                errors = false;
            }
        }
        color = "#2b2b2b";
        clearDivs();
        addDivsToGrid(userInput);
        setGrid(userInput);
    });
}
