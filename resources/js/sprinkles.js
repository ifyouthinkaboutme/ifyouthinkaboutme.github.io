const canvas = document.getElementById('tube');
const context = canvas.getContext('2d');

const size = window.innerWidth - (window.innerWidth / 10) * 2;

canvas.width = size;
canvas.height = size;

context.lineWidth = 4;
context.lineCap = 'round';

let step = size / 20;
let third = (size - step) / 3;

function draw (x, y, width, height, positions) {
    context.save();
    
    context.translate(x + width/2, y + height/2);
    context.rotate(Math.random() * 5);
    context.translate(-width/2, -height/2);


    for (let i = 0; i <= positions.length; i++) {
        context.beginPath();
        context.moveTo(positions[i] * width, 0);
        context.lineTo(positions[i] * width, height);
        context.stroke();
      }
    
      context.restore();
}

for (let y = step; y < size - step; y += step) {
    for (let x = step; x < size - step; x += step) {
        // Start increasing the number of lines further down the canvas.
        if ( y < third) {
            draw(x, y, step, step, [0.5]);   
        } 
        else if (y < third * 2) {
            draw(x, y, step, step, [0.2, 0.8]);      
        } 
        else {
            draw(x, y, step, step, [0.2, 0.5, 0.8]);      
        }       
    }
}