const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const size = window.innerWidth;
const dpr = window.devicePixelRatio;

let step = 20;

canvas.width = size //* dpr;
canvas.height = size //* dpr;
//context.scale(dpr, dpr);

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