const canvas = document.getElementById('anxiety');
const context = canvas.getContext('2d');

const width = window.innerWidth - (window.innerWidth / 10) * 2;
const height = width;

canvas.width = width;
canvas.height = height;

let circles = [];

function Circle (x, y, dx, dy, r, g, b, radius) {
    // assign values
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.radius = radius; 
    
    // draw circle
    this.draw = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = `rgb(${this.r},${this.g},${this.b})`;
        context.stroke();
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

        // draw new circle
        this.draw();
    }
}

for (i = 0; i < 100; i++) {
    // fixed radius value
    let radius = 30;
    
    // randomize starting position
    let x = Math.random() * (width - radius * 2) + radius;
    let y = Math.random() * (height - radius * 2) + radius;

    // fixed velocity values
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;;

    // randomize color
    let r = Math.floor(Math.random() * 10);
    let g = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 255);

    let circle = new Circle(x, y, dx, dy, r, g, b, radius);
    circles.push(circle);
}

function animate() {
    requestAnimationFrame(animate);

    // clear canvas
    context.clearRect(0, 0, width, height);

    // move circles
    for (let i = 0; i < circles.length; i++) {
        circles[i].animate();
    }
}

animate();