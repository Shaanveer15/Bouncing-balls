const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball,ball2;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var ball_options ={
        restitution: 0.8
        
    }
    
    ball=Bodies.circle(150,60,5,ball_options);
    World.add(world,ball);
    var ball2_options ={
        restitution: 0.35
    }
    console.log(ground);
    ball2=Bodies.circle(130,10,8,ball2_options);
    World.add(world,ball2);
}

function draw(){
    background(400);
    Engine.update(engine);
    fill("green");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("blue");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,5,5)
fill("red");
ellipseMode(RADIUS);
ellipse(ball2.position.x,ball2.position.y,8,8)

}