let videos;

let vid1;
let vid2;
let vyd;
let vxd;

let shdr;
let layer;

let x = 0;
let y = 1;

function preload(){
	videos = [];
	
	vid1 = createVideo('videos/1.mp4');
	vid1.hide();
	vid1.volume(0);
	vid1.loop();

	vid2 = createVideo('videos/2.mp4');
	vid2.hide();
	vid2.volume(0);
	vid2.loop();

	vid3 = createVideo('videos/3.mp4');
	vid3.hide();
	vid3.volume(0);
	vid3.loop();

	vid4 = createVideo('videos/4.mp4');
	vid4.hide();
	vid4.volume(0);
	vid4.loop();

	vid5 = createVideo('videos/5.mp4');
	vid5.hide();
	vid5.volume(0);
	vid5.loop();

	vid6 = createVideo('videos/6.mp4');
	vid6.hide();
	vid6.volume(0);
	vid6.loop();

	vid7 = createVideo('videos/7.mp4');
	vid7.hide();
	vid7.volume(0);
	vid7.loop();

	vid8 = createVideo('videos/8.mp4');
	vid8.hide();
	vid8.volume(0);
	vid8.loop();

	videos.push(vid1,vid2,vid3,vid4,vid5,vid6,vid7,vid8);

	shdr = loadShader('/shaders/shader.vert', '/shaders/shader.frag');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	noStroke();
	layer = createGraphics(windowWidth, windowHeight);
}

function draw() {	

	layer.background(0, 255);
	fill(255)
	layer.circle(mouseX, mouseY, 200);

	vxd = videos[x].time() / videos[y].duration();
	vyd = videos[y].time() / videos[y].duration();

	if(vxd > 0.99){
		if(x >=6){
			x = 0;
		}
		else{
		x += 2;
		}
	}
	if(vyd > 0.99){
		if(y >=5){
			y = 1;
		}
		else{
			y += 2;
		}
	}

	console.log(x + y);

	shader(shdr);

	shdr.setUniform("u_resolution", [width, height]);
	shdr.setUniform("u_time", millis() / 1000.0);
	shdr.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]);

	shdr.setUniform("tex0", videos[x]);
	shdr.setUniform("tex1", videos[y]);
	shdr.setUniform("tex2", layer);

	rect(0, 0, width, height); 
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
	if(x >=6){
		x = 0;
	}
	else{
		x += 2;
	}
	
	if(y >=5){
		y = 1;
	}
	else{
		y += 2;
	}
}