var runner, runner_running
var bomb , coin , drink ,power
var road,roadImg




function preload(){
  runner_running = loadAnimation("Runner-1.png","Runner-2.png")

  bomb = loadImage("bomb.png")
  coin = loadImage("coin.png")
 drink = loadImage("energyDrink.png")
 roadImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);

  road= createSprite(200,200,)
  road.addImage("road",roadImg)
  road.velocityY = 4
  road.scale = 1.2
  

  


  runner = createSprite(100,200)
  runner.addAnimation("runner",runner_running)
  runner.scale = 0.05

  
}

function draw() {
  background(0);
drawSprites()



}


