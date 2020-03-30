const canvas = document.getElementById('anxiety');
const context = canvas.getContext('2d');

const width = window.innerWidth - (window.innerWidth / 10) * 2;
const height = width;

canvas.width = width;
canvas.height = height;
context.lineWidth = 2;

let mouse = {
    x: undefined,
    y: undefined
}
let circles = [];
let colors = [
    '#1C0203',
    '#582D1A',
    '#A53D10',
    '#CA4C15',
    '#D66C17'
];

//,,#A53D10,,,#1C0203,#582D1A,#A53D10

let maxRadius = width / 10;

// Circle object definition
function Circle (x, y, dx, dy, radius) {
    // assign values
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius; 
    this.minRadius = radius;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    
    // draw circle
    this.draw = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }

    // animate circle
    this.animate = function () {
        // check if out of bounds
        if (this.x + this.radius > width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        // update variable
        this.x += this.dx;
        this.y += this.dy;

        // interactive part
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        }
        else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        // draw new circle
        this.draw();
    }
}

// Animate function definition
function animate() {
    requestAnimationFrame(animate);

    // clear canvas
    context.clearRect(0, 0, width, height);

    // move circles
    for (let i = 0; i < circles.length; i++) {
        circles[i].animate();
    }
}

// add mouse listener
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x - canvas.getBoundingClientRect().left;
    mouse.y = event.y - canvas.getBoundingClientRect().top;
});

// add touch listener
window.addEventListener('touchmove', function(event) {
    mouse.x = event.x - canvas.getBoundingClientRect().left;
    mouse.y = event.y - canvas.getBoundingClientRect().top;
});

// create the circles
for (i = 0; i < 200; i++) {
    // fixed radius value
    let radius = Math.floor(Math.random() * (width / 20));
    console.log(radius);
    // randomize starting position
    let x = Math.random() * (width - radius * 2) + radius;
    let y = Math.random() * (height - radius * 2) + radius;

    // fixed velocity values
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;

    let circle = new Circle(x, y, dx, dy, radius);
    circles.push(circle);
}

// animate!
animate();