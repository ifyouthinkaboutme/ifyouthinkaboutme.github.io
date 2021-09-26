let videos;

let vid1;
let vid2;

let shdr;
let mask;

function preload(){
	videos = [];
	vid1 = createVideo('videos/one.mp4');
	vid1.hide();
	vid1.loop();

	vid2 = createVideo('videos/two.mp4');
	vid2.hide();
	vid2.loop();

	shdr = loadShader('/shaders/shader.vert', '/shaders/shader.frag');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	//background(0);
	noStroke();

	mask = createGraphics(windowWidth, windowHeight);
}

function draw() {	

	mask.background(0, 255);
	fill(255)
	//mask.circle(mouseX, mouseY, 200, 200);
	let root = new Root(mouseX, mouseY);
	root.update();

	shader(shdr);

	shdr.setUniform("u_resolution", [width, height]);
	shdr.setUniform("u_time", millis() / 1000.0);
	shdr.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]);

	shdr.setUniform("tex0", vid1);
	shdr.setUniform("tex1", vid2);
	shdr.setUniform("tex2", mask);

	rect(0, 0, width, height); 
}

class Root {
	constructor(x, y) {
	  this.x = x;
	  this.y = y;
	  this.directionX = Math.random() * 4 - 2;
	  this.directionY = Math.random() * 4 - 2;
  
	  this.size = Math.random() * 1 + 5;
	  this.growth = Math.random() * 0.2 + 0.05;
	  this.maxSize = Math.random() * 50 + 5;
  
	  this.angleX = Math.random() * 6.2;
	  this.angleY = Math.random() * 6.2;
	  this.vsx = Math.random() * 0.6 - 0.3;
	  this.vsy = Math.random() * 0.6 - 0.3;
	}
	update() {
	  this.x += this.directionX + Math.sin(this.angleX);
	  this.y += this.directionY + Math.sin(this.angleY);
	  this.size += this.growth;
	  this.angleX += this.vsx;
	  this.angleY += this.vsy;
	  if (this.size < this.maxSize) {
		fill(255);
		stroke(255);
		mask.circle(this.x, this.y, this.size);
		requestAnimationFrame(this.update.bind(this));
	  }
	}
  }

  function mouseDragged() {
	for (let i = 0; i < 5; i++) {
	  let root = new Root(mouseX, mouseY);
	  root.update();
	}
  }