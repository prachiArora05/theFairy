var backgroundImage, star, starImage, starBody, backgroundImage, fairy, fairyAnime, fairySound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	starImage = loadImage("images/star.png");
	backgroundImage = loadImage("images/starNight.png");
	fairyAnime = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	fairySound = loadSound("sound/joyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	fairySound.play();
	fairy = createSprite(130, 520);
	fairy.addAnimation("flyingFairy", fairyAnime);
	fairy.scale = 0.3;

	star = createSprite(650, 30);
	star.addImage(starImage);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650, 30, 5, {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
}

function draw() {
  background(backgroundImage);

  star.x = starBody.position.x; 
  star.y = starBody.position.y ;

  if (star.y > 470 && starBody.position.y > 470) {
	  Body.setStatic(starBody, true);
  }

  drawSprites();
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 20;
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		Body.setStatic(starBody, false); 
	}
}
