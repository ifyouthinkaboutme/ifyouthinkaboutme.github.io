const canvas = document.getElementById('tube');
const context = canvas.getContext('2d');

const size = window.innerWidth - (window.innerWidth / 10) * 2;

canvas.width = size;
canvas.height = size;

context.lineWidth = 2;

context.moveTo(20,20);
context.lineTo(40,40);
context.stroke();
context.moveTo(100,120)
context.lineTo(60,60);
context.stroke();

context.rect(100,20,30,40);
context.stroke();