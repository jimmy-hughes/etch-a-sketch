const canvas = document.querySelector('.canvas');
const clearBtn = document.querySelector('#clear-button');
const numPixelSlider = document.querySelector('#numPixels');
let numPixels = numPixelSlider.value;
let canvasSize = 800;
let pixelSize = canvasSize / numPixels;
let mouseDown = 0;

function colorSquare() {
    if (mouseDown) {
        this.style.backgroundColor = 'black';
    }
}

function createGrid(gridSize, pixelSize) {
    canvas.style.width = canvasSize + 'px';
    canvas.style.height = canvasSize + 'px';
    for (let i=0; i<gridSize; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.setAttribute('style', 'height: '+pixelSize+'px;');
        for (let j=0; j<gridSize; j++) {
            let square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.setAttribute('style', 'width: '+pixelSize+'px;');
            square.addEventListener("mouseover", colorSquare) ;
            //     square.addEventListener("mousedown", colorSquare);
            // });
            // square.addEventListener('mouseenter', colorSquare);
            row.appendChild(square);
        }
        canvas.appendChild(row);
    }
}

function deleteGrid() {
    canvas.textContent = '';
}

function resetGrid() {
    deleteGrid();
    numPixels = numPixelSlider.value;
    pixelSize = canvasSize / numPixels;
    createGrid(numPixels, pixelSize);
}

createGrid(numPixels, pixelSize);
clearBtn.addEventListener('click', resetGrid);
numPixelSlider.addEventListener('mouseup', resetGrid);
document.body.onmousedown = function() { 
    ++mouseDown;
  }
  document.body.onmouseup = function() {
    --mouseDown;
  }