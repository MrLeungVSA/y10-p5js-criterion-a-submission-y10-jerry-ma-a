function setup()
{
  createCanvas(700,500);
  
}

function draw()
{
	background(0,0,0)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(255,255,0);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(0,0,0);

	// modifies the thickness of the border of an object
	strokeWeight(0);

	//windows
	rect(10,10,120,80);
	rect(10,100,120,80);
	rect(150,10,120,80);
	rect(150,100,120,80);	
	//person 1
	fill(0,0,0);
	ellipse(65,65,60,60);
	triangle(65,65,30,180,100,180);
	fill(255,0,0)
	rect(60,70,90,5)
	//person 2
	fill(0,0,0)
	ellipse(130,65,60,60)
	triangle(130,65,100,180,170,180)
	fill(0,0,0);
	ellipse(65,65,60,60);
	triangle(65,65,30,180,100,180);
	//heart
	fill (255,0,0)
	ellipse(97,20,10,10)
	ellipse(103,22,10,10)
	triangle(92,20,108.8,22,93,40)
}