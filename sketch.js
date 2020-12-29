
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2;
var bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//bobDiameter = 50;

	roof = new Roof(400,50,250,20);

	bobObject1 = new Bob(400,350,50);
	//rope1 = new Rope(bobObject1.body,roof.body,0,0);
	rope1 = new Rope(bobObject1.body,{x:400,y:50});

	bobObject2 = new Bob(350,350,50);
	//rope2 = new Rope(bobObject2.body,roof.body,0,0);
	rope2 = new Rope(bobObject2.body,{x:350,y:50});

	bobObject3 = new Bob(450,350,50);
	//rope3 = new Rope(bobObject1.body,roof.body,0,0);
	rope3 = new Rope(bobObject3.body,{x:450,y:50});

	bobObject4 = new Bob(300,350,50);
	//rope4 = new Rope(bobObject4.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,{x:300,y:50});

	bobObject5 = new Bob(500,350,50);
	//rope5 = new Rope(bobObject5.body,roof.body,0,0);
	rope5 = new Rope(bobObject5.body,{x:500,y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  fill(0);
  textSize(24);
  text("Newton's Cradle!",320,430);
  
  roof.display();
  
  rope1.display();
  bobObject1.display();

  rope2.display();
  bobObject2.display();

  rope3.display();
  bobObject3.display();

  rope4.display();
  bobObject4.display();

  rope5.display();
  bobObject5.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:-25,y:-20});
	}
}

