const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1500,500, 3000, 20);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 200, 70, 70);
  box3 = new Box(900, 300, 70, 70);
  box4 = new Box(900, 400, 70, 70);
  

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 700, y: 150 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  

  ball.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


