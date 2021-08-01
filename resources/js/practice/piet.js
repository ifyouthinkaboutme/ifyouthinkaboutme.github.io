const canvas = document.getElementById('tube');
const context = canvas.getContext('2d');

const size = window.innerWidth - (window.innerWidth / 10) * 2;

canvas.width = size;
canvas.height = size;

context.lineWidth = size/50;
let split = Math.floor(Math.random() * size)
let step = size / (Math.floor(Math.random() * 6 + 3));

let colors = [
    '#FFF',
    '#FFF',
    '#FFF',
    '#3c40c6',
    '#ff3f34',
    '#ffdd59'
]

var squares = [
    {
        x: 0,
        y: 0,
        width: size,
        height: size
    }
]

function draw () {
    for (let i = 0; i < squares.length; i++) {
        context.beginPath();
        context.rect(
          squares[i].x,
          squares[i].y,
          squares[i].width,
          squares[i].height
        );
        context.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        context.fill();
        context.stroke();
    }
}

function splitSquaresWith(coordinates) {
    // Loops through the squares, and find if
    // one should be split
    const {x,y} = coordinates;

    for (let i = squares.length - 1; i >= 0; i--) {
        const square = squares[i];

        if (x > square.x && x < square.x + square.width) {
            if(Math.random() > 0.5) {
                squares.splice(i, 1);
                splitOnX(square, x); 
            }
        }

        if (y > square.y && y < square.y + square.height) {
            if(Math.random() > 0.5) {
                squares.splice(i, 1);
                splitOnY(square, y); 
            }
        }
    }
}

function splitOnX(square, splitAt) {
    // Create two new squares, based on
    // splitting the given one at the
    // x coordinate given
    var squareA = {
        x: square.x,
        y: square.y,
        width: square.width - (square.width - splitAt + square.x),
        height: square.height
    };
      
    var squareB = {
        x: splitAt,
        y: square.y,
        width: square.width - splitAt + square.x,
        height: square.height
    };
      
    squares.push(squareA);
    squares.push(squareB);
}

function splitOnY(square, splitAt) {
    // Create two new squares, based on
    // splitting the given one at the
    // y coordinate given
    var squareA = {
        x: square.x,
        y: square.y,
        width: square.width,
        height: square.height - (square.height - splitAt + square.y)
    };
      
    var squareB = {
        x: square.x,
        y: splitAt,
        width: square.width,
        height: square.height - splitAt + square.y
    };
      
    squares.push(squareA);
    squares.push(squareB);
}

for (let i = 0; i < size; i += step) {
    splitSquaresWith({y: i});
    splitSquaresWith({x: i});
}

draw();