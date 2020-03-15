const canvas = document.getElementById('pulse');
const context = canvas.getContext('2d');

const size = window.innerWidth - (window.innerWidth / 10) * 2;
let step = size / 50;
let lines = [];

canvas.width = size;
canvas.height = size;

context.lineCap = 'square';
context.lineWidth = 2;

for (let i = 0; i <= size; i += step) {
    let line = [];
    for (let j = 0; j <= size; j += step) {
        
        let distanceToCenter = Math.abs(j - size / 2);
        let variance = Math.max(size / 2 - 100 - distanceToCenter, 0);

        let random = Math.random() * variance / 2 * -1;

        let point = {x: j, y: i + random};
        line.push(point);
    }
    lines.push(line);
}

for (let i = 10; i < lines.length; i++) {
    
    context.beginPath();
    context.moveTo(lines[i][0].x, lines[i][0].y);

    for (let j = 0; j < lines[i].length - 1; j++) {

        var xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
        var yc = (lines[i][j].y + lines[i][j + 1].y) / 2;

        context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
    }

    context.stroke();
    context.save();
    context.globalCompositeOperation = 'destination-out';
    context.fill();
    context.restore();
}