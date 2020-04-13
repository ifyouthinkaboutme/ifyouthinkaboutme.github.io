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
    '#e5562b',
    '#f9931e',
    '#F2D8B3',
    '#c31e1e'
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

for( let x = offset; x < size - offset; x += tileStep) {
    for( let y = offset; y < size - offset; y += tileStep) {
        startSteps = Math.ceil(Math.random() * 3 + 3);
        let xDirection = directions[Math.floor(Math.random() * directions.length)]
        let yDirection = directions[Math.floor(Math.random() * directions.length)]
        draw(x, y, startSize, startSize, xDirection, yDirection, startSteps - 1);
    }
}