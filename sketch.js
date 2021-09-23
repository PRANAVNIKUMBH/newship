//Renaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls = []
var boats = []
var boatani = []
var bboatani = []


function preload() {
  bg = loadImage("assets/background.gif")
  boatpng = loadImage("assets/boat/boat.png")
  boatjson = loadJSON('assets/boat/boat.json')

  bboatpng = loadImage("assets/boat/broken_boat.png")
  bboatjson = loadJSON('assets/boat/broken_boat.json')
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(600,580,1200,20)
  tower = new Tower(150,350,160,310)
  canon = new Canon(180,110,100,50,-PI/4)
  
  boatframe = boatjson.frames
  for(var i=0;i<boatframe.length;i++){
    var pos = boatframe[i].position
    var img = boatpng.get(pos.x,pos.y,pos.w,pos.h)
    boatani.push(img)
  }

  bboatframe = bboatjson.frames
  for(var i=0;i<bboatframe.length;i++){
    var pos = bboatframe[i].position
    var img = bboatpng.get(pos.x,pos.y,pos.w,pos.h)
    bboatani.push(img)
  }
}

function draw() {
  background(bg);
  Engine.update(engine);

// ground.display()
  tower.display()
 canon.display()
 //!== not equal to
  for(var i=0;i<balls.length;i++){
    if(balls[i]){
    balls[i].display()
    if(balls[i].body.position.x>width||balls[i].body.position.y>height-130){
      balls[i].remove(i)
    }
    }
    for(var b=0;b<boats.length;b++){
      if(balls[i]!==undefined&&boats[b]!==undefined){
      if(Matter.SAT.collides(balls[i].body,boats[b].body).collided){
        balls[i].remove(i)
        boats[b].remove(b)
      }
    }
    }
  }

  createBoats()
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    canonball = new Ball(canon.x,canon.y)
    balls.push(canonball)
  }
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
  balls[balls.length-1].shoot()
  }
}

function createBoats(){
  if(boats.length>0){
    if(boats[boats.length - 1] === undefined ||boats[boats.length-1].body.position.x < width -200){
      boat = new Boat(1200,550,170,170,boatani)
      boats.push(boat)

    }
    for(var i=0;i<boats.length;i++){
      if(boats[i]){
      boats[i].display()
      boats[i].animate()
      Matter.Body.setVelocity(boats[i].body,{x:-1,y:0})
    }
  }
  }
  else{
    boat = new Boat(1200,550,170,170,boatani)
    boats.push(boat)
  }
}




