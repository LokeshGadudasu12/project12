var garden, rabbit;
var gardenImg, rabbitImg;

var apple, appleImg;
var leaf, leafImg

var score = 0;



function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

  appleG = new Group();
  leafG = new Group();


}


function draw() {
  background(0);

  

  edges = createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  var select_sprites = Math.round(random(1, 2));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else {
      createLeaves();
    }
  }

  if(rabbit.isTouching(appleG)) {
    appleG.destroyEach();
    score = score+2;
  }
  if(rabbit.isTouching(leafG)){
    leafG.destroyEach();
    score = score-1;
  }

  

  drawSprites();
  fill("red");
  text("Score: "+ score, 50,50);
}

function createApples() {
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.velocityY = 4;
  apple.scale = 0.09;
  apple.lifetime = 100;
  appleG.add(apple);
}

function createLeaves() {
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.velocityY = 4;
  leaf.scale = 0.09;
  leaf.lifetime = 100;
  leafG.add(leaf);
}