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
  Matter.Body.translate(packageBody, {x:-16,y:0});
	helicopterBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.4, isStatic:true});
	World.add(world, helicopterBody);
	
    //create the hideOut using class
	log1 = new Log(260,530,15,140,-PI);
	log2 = new Log(560,530,15,140,PI);
	log3 = new Log(410,610,280,15,PI/2);
 
    
	//create ground using Ground class
	ground = new Ground(800);

    //boxPosition=width/2-100
 	//boxY=610;
	 


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
  
  //display objects created using class
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  

  //move the plane to left
  if (keyDown("LEFT_ARROW"))
  {
   helicopterBody.position.x = helicopterBody.position.x - 16;
  }

  //move the plane to right
  if (keyDown("RIGHT_ARROW"))
  {
   helicopterBody.position.x = helicopterBody.position.x + 16;
  }

   //code to drop the box
  if (keyCode === DOWN_ARROW)
  {
	Matter.Body.setStatic(packageBody, false);
  }
 
  


  drawSprites();
  
  
 
}


