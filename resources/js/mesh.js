const canvas = document.getElementById('mesh');
const context = canvas.getContext('2d');

const size = window.innerWidth - (window.innerWidth / 10) * 2;
let step = size / 10;

canvas.width = size;
canvas.height = size;

context.lineJoin = 'bevel';
context.lineWidth = 2;

let line = [];
let lines = [];
let foo = false;

for (let y = step / 2; y <= size; y += step) {
    foo = !foo;
    line = [];
    for (let x = step / 4; x <= size; x += step) {
        dot = {
            x: x + (Math.random() * .8 - .4) * step + (foo ? step / 2 : 0),
            y: y + (Math.random() * .8 - .4) * step
        };
        line.push(dot);
    }
    lines.push(line);
}

var dotLine;
odd = true;

for (let y = 0; y < lines.length - 1; y++) {
    odd = !odd;
    dotLine = [];
    for (let i = 0; i < lines[y].length; i++) {
        dotLine.push(odd ? lines[y][i] : lines[y + 1][i]);
        dotLine.push(odd ? lines[y + 1][i] : lines[y][i]);
    }
    for (let i = 0; i < dotLine.length - 2; i++) {
        drawTriangle(dotLine[i], dotLine[i+1], dotLine[i+2]);
    }
}

function drawTriangle (a, b, c) {
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.lineTo(c.x, c.y);
    context.lineTo(a.x, a.y);
    context.closePath();
    context.stroke();

    let gray = Math.floor(Math.random() * 16).toString(16);
    context.fillStyle = '#' + gray + gray + gray; 
    context.fill();
}