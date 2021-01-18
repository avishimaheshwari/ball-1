
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;
var ground,ball1,dustbin1,dustbin2,dustbin;

function setup() {
	createCanvas(1600, 700);
     rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200,200,1600,20);
	ball1=new Ball(800,350,10);
	dustbin=new Dustbin(900,690,200,20);
    dustbin1=new Dustbin(813,690,20,100);
	dustbin2=new Dustbin(990,690,20,100);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball1.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
  
	}
}