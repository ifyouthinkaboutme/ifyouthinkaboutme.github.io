const canvas = document.getElementById('trapped');
const context = canvas.getContext('2d');

const size = 1080;
let step = 54;

canvas.width = size;
canvas.height = size;

context.lineCap = 'square';
context.lineWidth = 2;

function draw(x, y, width, height) {
    let num = Math.random(); 
    if (num > 0.5){
        context.moveTo(x, y);
        context.lineTo(x + width, y + height);   
    }
    else {
        context.moveTo(x + width, y);
        context.lineTo(x, y + height);
    }
    context.stroke();
}

for (let x = 0; x < size; x += step) {
    for (let y = 0; y < size; y += step) {
        draw(x, y, step, step);
    }
}