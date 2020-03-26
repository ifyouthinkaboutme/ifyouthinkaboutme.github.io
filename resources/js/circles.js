const canvas = document.getElementById('anxiety');
const context = canvas.getContext('2d');

const size = window.innerWidth - (window.innerWidth / 10) * 2;

canvas.width = size;
canvas.height = size;

context.lineCap = 'square';
context.lineWidth = 2;

let circles = [];
let minRadius = 2;
let maxRadius = Math.floor(Math.random() * (size / 5) + (size / 10));
let totalCircles = 500;
let createCircleAttempts = 500;

function createAndDrawCircle() {
    // Loop through from 0 to createCircleAttempts
    // trying to create a circle.

    let newCircle;
    let circleSafeToDraw = false;
    
    for (let tries = 0; tries < createCircleAttempts; tries++) {
        newCircle = {
            x: Math.floor(Math.random() * size),
            y: Math.floor(Math.random() * size),
            radius: minRadius
        }
      
        if (doesCircleHaveACollision(newCircle)) {
            continue;
        } 
        else {
            circleSafeToDraw = true;
            break;
        }
    }
  
    if(!circleSafeToDraw) {
      return;
    }

    // Once we have a circle created, grow it until
    // it hits another, or reaches max size.
    for (let radiusSize = minRadius; radiusSize < maxRadius; radiusSize++) {
        newCircle.radius = radiusSize;
        if (doesCircleHaveACollision(newCircle)) {
            newCircle.radius--;
            break;
        } 
      }

    // Draw the circle
    circles.push(newCircle);
    context.beginPath();
    context.arc(newCircle.x, newCircle.y, newCircle.radius, 0, 2 * Math.PI);
    context.stroke(); 
}

function doesCircleHaveACollision(circle) {
    for (let i = 0; i < circles.length; i++) {
        let otherCircle = circles[i];
        let a = circle.radius + otherCircle.radius;
        let x = circle.x - otherCircle.x;
        let y = circle.y - otherCircle.y;
    
        if (a >= Math.sqrt((x * x) + (y * y))) {
            return true;
        }
    }

    if (circle.x + circle.radius >= size || circle.x - circle.radius <= 0) {
        return true;
    }
       
    if (circle.y + circle.radius >= size || circle.y - circle.radius <= 0) {
        return true;
    }
}

for (let i = 0; i < totalCircles; i++) {  
    createAndDrawCircle();
}