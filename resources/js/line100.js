const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const dpi = window.devicePixelRatio;
const size = 1200 * dpi;

canvas.width = size;
canvas.height = size;

context.fillStyle = '#FFF';
context.fillRect(0,0,size,size);

for (let i = 0; i < 10000; i++){
    let range

    if (i < 10000/1.2){
        range = 1200;
    }
    else {
        range = 400;
    }

    let x = Math.floor((Math.random() * (size - range) + 200));
    let y = Math.floor((Math.random() * (size - range) + 200));
    
    context.beginPath()
    context.moveTo(200,200);
    context.lineTo(x,y);
    context.stroke();
}