const canvas = document.getElementById('anxiety');
const context = canvas.getContext('2d');

const size = window.innerWidth - (window.innerWidth / 10) * 2;

canvas.width = size;
canvas.height = size;

context.lineWidth = 2;

let finalSize = 3;
let startSteps;
let offset = 2;
let tileStep = (size - offset * 2) / 7;
let startSize = tileStep;
let directions = [-1,0,1];
let colors = [
    '#333',
    '#555',
    '#777',
    '#999'
];

function draw(x,y,width,height,xMovement,yMovement,steps){
    context.beginPath();
    context.rect(x,y,width,height);
    context.fillStyle = colors[Math.floor(Math.random() * colors.length)]
    context.fill();

    if(steps>= 0){
        let newSize = (startSize) * (steps / startSteps) + finalSize;
        let newX = x + (width - newSize) / 2;
        let newY = y + (height - newSize) / 2;
        newX = newX - ((x - newX) / (steps + 2)) * xMovement
        newY = newY - ((y - newY) / (steps + 2)) * yMovement
        draw(newX,newY,newSize,newSize,xMovement,yMovement, steps - 1);
    }
}

for( var x = offset; x < size - offset; x += tileStep) {
    for( var y = offset; y < size - offset; y += tileStep) {
        startSteps = Math.ceil(Math.random() * 3 + 3);
        var xDirection = directions[Math.floor(Math.random() * directions.length)]
        var yDirection = directions[Math.floor(Math.random() * directions.length)]
        draw(x, y, startSize, startSize, xDirection, yDirection, startSteps - 1);
    }
}