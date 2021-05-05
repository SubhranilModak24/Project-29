const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1100,550);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(480,400,250,10);
  stand2 = new Stand(840,200,250,10);
 
 //level one
 block1 = new Block(390,275,30,40);
 console.log(block1);
 block2 = new Block(420,275,30,40);
 block3 = new Block(450,275,30,40);
 block4 = new Block(480,275,30,40);
 block5 = new Block(510,275,30,40);
 block6 = new Block(540,275,30,40);
 block7 = new Block(570,275,30,40);
 //level two
 block8 = new Block(420,235,30,40);
 block9 = new Block(450,235,30,40);
 block10 = new Block(480,235,30,40);
 block11 = new Block(510,235,30,40);
 block12 = new Block(540,235,30,40);
 //level three
 block13 = new Block(450,195,30,40);
 block14 = new Block(480,195,30,40);
 block15 = new Block(510,195,30,40);
 //top
 block16 = new Block(480,155,30,40);


 //2 level one
 block21 = new Block(750,100,30,40);
 console.log(block21);
 block22 = new Block(780,100,30,40);
 block23 = new Block(810,100,30,40);
 block24 = new Block(840,100,30,40);
 block25 = new Block(870,100,30,40);
 block26 = new Block(900,100,30,40);
 block27 = new Block(930,100,30,40);
 //2 level two
 block28 = new Block(780,60,30,40);
 block29 = new Block(810,60,30,40);
 block210 = new Block(840,60,30,40);
 block211 = new Block(870,60,30,40);
 block212 = new Block(900,60,30,40);
 //2 level three
 block213 = new Block(810,20,30,40);
 block214 = new Block(840,20,30,40);
 block215 = new Block(870,20,30,40);
 //2 top
 block216 = new Block(840,0,30,40);
  
  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon)

  slingshot = new Slingshot(this.polygon,{x:100 ,y:400})

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();


  fill("turquoise");
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  fill("skyblue");
  block28.display();
  block29.display();
  block210.display();
  block211.display();
  block212.display();
  fill("lightgreen");
  block213.display();
  block214.display();
  block215.display();
  fill("grey");
  block216.display();
 
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)

  
 
}

function mouseDragged () {
  console.log(1)
  
    Matter.Body.setPosition(this.polygon,{x: mouseX , y: mouseY})
  
}

function mouseReleased (){
  console.log(2)
  slingshot.fly();
  //gameState = "launched";
}