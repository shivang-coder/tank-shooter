const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(900,550);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(600,200,30);
    ground = new Ground(450,530,900,50)
    cannon = new Cannon(90,430,60,20);
}

function draw(){
    background(0);
    Engine.update(engine);
   cannon.display();
    ground.display();
    ball.display();

}