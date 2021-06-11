var heliImg, helicopter, helicopterBody;
var packageBody ,package, packageImg, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1, log2, log3;

function preload()
{
	heliImg=loadImage("helicopter.png");
	packageImg=loadImage("package.png");
	bgImg = loadImage("bg2.jpg");
}


function setup()
{
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	//create the package
	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageImg)
	package.scale = 0.2;
   
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
  
  
	
  //create the helicopter
  helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(heliImg);
	helicopter.scale=0.6;
  
	helicopterBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.4, isStatic:true});
	World.add(world, helicopterBody);
 
  var log_options={
    'restitution':0.5,
    'friction':1.0,
    'density':1.0,
    isStatic:true
   }
   
	log1 = Bodies.rectangle(260,535,15,140,log_options);
  World.add(world, log1);

  log2 = Bodies.rectangle(560,535,15,140,log_options);
  World.add(world, log2);

  log3 = Bodies.rectangle(410,597,250,15,log_options);
  World.add(world, log3);

	//create ground using Ground class
	ground = new Ground(800);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(bgImg);
  
  package.x= packageBody.position.x ;
  package.y= packageBody.position.y ;
  
  helicopter.x = helicopterBody.position.x;
  helicopter.y = helicopterBody.position.y;
 
  push();
  strokeWeight(3);
  stroke("yellow");
  fill("red")
  rectMode(CENTER);
  rect(log1.position.x,log1.position.y,15,140);
  rect(log2.position.x,log2.position.y,15,140);
  rect(log3.position.x,log3.position.y,285,15);
  pop();

  //display objects created using class
  ground.display();
  

  //move the plane to left
  if (package.y < 250 && keyDown("LEFT_ARROW"))
  {
   helicopterBody.position.x = helicopterBody.position.x - 16;
   Matter.Body.translate(packageBody, {x:-16,y:0});
  }

  //move the plane to right
  if (package.y < 250 && keyDown("RIGHT_ARROW"))
  {
   helicopterBody.position.x = helicopterBody.position.x + 16;
   Matter.Body.translate(packageBody, {x:16,y:0});
  }

   //code to drop the box
  if (keyCode === DOWN_ARROW)
  {
	Matter.Body.setStatic(packageBody, false);
  }
 
  


  drawSprites();
  
  
 
}


