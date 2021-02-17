
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,stone1,rubber1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	hammer1=new hammer(10,100);
	stone1=new stone(200,50)
	ground1=new ground(400,660)
	rubber1=new rubber(300
		
		
		
		
		
		
		
		80)
}


function draw() {
	background(225,20,200);
	rectMode(CENTER);
 hammer1.display();
 stone1.display();
 ground1.display();
 rubber1.display()
  
 
 
}



