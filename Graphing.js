var Plot = [];
function setup() { 
  createCanvas(800, 400);
} 

function draw() { 
  background(0);
	stroke(255);
	line(45,50,45,350);
	line(45,350,750,350);
	line(45,350,45,370);
	line(90,350,90,370);
	line(135,350,135,370);
	line(175,350,175,370);
	line(220,350,220,370);
	line(265,350,265,370);
//END SETUP
	Plot.push([random(0,50),random(0,50)]);


	
}
