const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const dpi = window.devicePixelRatio;
const size = 500 * dpi;

canvas.width = size;
canvas.height = size;

let colors = [
    '#333',
    '#666',
    '#999'
]

let neoncolors = [
    '#34e7e4',
    '#ef5777',
    '#0be881'
]

// background texture
// x loop
for(let x = 0; x < size; x++){
    // y loop
    for(let y = 0; y < size; y++){
        // fill a random color pixel
        context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        context.fillRect(x,y,1,1);
    }
};

// draw lots of squares
for(let i = 0; i < 200; i++){
    
    let xy = Math.floor(Math.random() * 100);
    let x = Math.floor(Math.random() * size);
    let y = Math.floor(Math.random() * size);

    context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    context.fillRect(x,y,xy,xy);
}

// draw lots of quadratic curves
for(let i = 0; i < 600; i++){
    let x = Math.floor(Math.random() * size);
    let y = Math.floor(Math.random() * size);
    let ptx = x + Math.floor(Math.random() * size);
    let pty = y + Math.floor(Math.random() * size);
    let endx = x + Math.floor(Math.random() * size);
    let endy = y + Math.floor(Math.random() * size);

    context.beginPath();
    context.moveTo(x,y);
    context.quadraticCurveTo(ptx,pty,endx,endy);
    context.closePath;

    context.lineWidth = Math.floor(Math.random() * 5)

    context.strokeStyle = neoncolors[Math.floor(Math.random() * neoncolors.length)];
    context.stroke();
}