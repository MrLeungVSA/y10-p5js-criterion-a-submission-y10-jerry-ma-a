var button2X;
var button2Y;
function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;

  
}

function draw()
{
	background(125,125,125)


	if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,50,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);		
	}
	else
	{
		fill(100,100,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Jerry",35,40);

	fill(200,200,255)
	stroke(0,0,0)
	rect 

	fill(200,200,255);
	stroke(0,0,0);
	rect(button2X,500-button2Y,100,50);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(0,255,0);
		stroke(51,70,190);
		textSize(16);
		text("Hi",button2X+30-5,button2Y+30+2);
		fill(0,0,0)
		rect
	}
	else
	{
		fill(255,255,0);
		stroke(0,0,0);
		textSize(12);
		text("Options",button2X+30,button2Y+30);
	}

}