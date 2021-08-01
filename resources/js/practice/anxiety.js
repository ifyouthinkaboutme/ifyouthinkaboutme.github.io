const canvas = document.getElementById('anxiety');
const context = canvas.getContext('2d');

const size = window.innerWidth - (window.innerWidth / 10) * 2;
let step = size / 10;

let randomDisplacement = Math.random() * 20;
let rotateMultiplier = Math.random() * 50;

canvas.width = size;
canvas.height = size;

context.lineCap = 'square';
context.lineWidth = 1;

function draw(width, height) {
    context.beginPath();
    context.rect(-width/2, -height/2, width, height);
    context.stroke(); 
  }

for (let i = step; i <= size - step / 2; i += step) {
    for (let j = step; j <= size - step / 2; j += step) {
        
        let plusOrMinus = Math.random() > 0.5 ? 1 : -1;
        let translateAmt = j / size * plusOrMinus * Math.random() * randomDisplacement;
        let rotateAmt = j / size * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier;
        
        context.save();
        context.translate(i + translateAmt, j);
        context.rotate(rotateAmt);
        draw(step, step);
        context.restore();
    }
  }