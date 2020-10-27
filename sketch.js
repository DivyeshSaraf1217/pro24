var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ball=new Ball(200,600);
	 grounds=new ground(400,650);
	 box1=new bin(600,630,200,20);
	 box2=new bin(710,590,20,100);
	 box3=new bin(510,590,20,100)
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  background(0);
 ball.display();
 grounds.display();
 box1.display();
 box2.display();
 box3.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		console.log("keyispressed");
Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}

}

