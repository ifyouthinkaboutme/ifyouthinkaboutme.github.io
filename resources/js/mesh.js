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

for (let i = 0; i <= size; i += step) {
    line = [];
    for (let j = 0; j <= size; j += step) {
        line.push({x: j, y: i});
        
        context.beginPath();
        context.arc(j, i, 2, 0, 2 * Math.PI, true);
        context.fill();
    }
    lines.push(line);
}