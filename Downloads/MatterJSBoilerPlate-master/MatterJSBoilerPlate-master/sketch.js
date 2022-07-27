var button1, button2, button3, button4;
var form;
var player, allPlayers;
var logoBg;
var forestBackround, jungleBackround, castleBackground, villageBackground;
var startButton, storyButton, constrolsButton;
var coinPile;
var shield, shield1;
var heart1, heart2, heart3;
var story1, story2;
var death;
var firebase;


var gameState = 0;

function preload() {
	forestBackround = loadImage("assets/backgrounds/forestBg.png");
	jungleBackround = loadImage("assets/backgrounds/jungleBg.png");
	castleBackground = loadImage("assets/backgrounds/castleBg.png");
	villageBackground = loadImage("assets/backgrounds/village_bg-transformed.jpeg");

	player1DyingLeftAnimation = loadAnimation("");
	player1DyingRightAnimation = loadAnimation("");
	player1WalkingLeftAnimation = loadAnimation("");
	player1WalkingRightAnimation = loadAnimation("");

	player2DyingLeftAnimation = loadAnimation("");
	player2DyingRightAnimation = loadAnimation("");
	player2WalkingLeftAnimation = loadAnimation("");
	player2WalkingRightAnimation = loadAnimation("");

	knightDyingLeftAnimation = loadAnimation("");
	knightDyingRightAnimation = loadAnimation("");
	knightWalkingLeftAnimation = loadAnimation("");
	knightWalkingRightAnimation = loadAnimation("");

	warrior1DyingLeftAnimation = loadAnimation("");
	warrior1DyingRightAnimation = loadAnimation("");
	warrior1WalkingLeftAnimation = loadAnimation("");
	warrior1WalkingRightAnimation = loadAnimation("");

	warrior2DyingLeftAnimation = loadAnimation("");
	warrior2DyingRightAnimation = loadAnimation("");
	warrior2WalkingLeftAnimation = loadAnimation("");
	warrior2WalkingRightAnimation = loadAnimation("");

	startButton = loadImage("assets/UI/start_button-removebg-preview.png");
	storyButton = loadImage("assets/UI/story_button-removebg-preview.png");
	constrolsButton = loadImage("assets/UI/controls_button-removebg-preview.png");

	coinPile = loadImage("assets/UI/stackOfCoins-removebg-preview.png");
	bagOfCoins = loadImage("assets/UI/bagOfCoins-removebg-preview.png");
	shield = loadImage("assets/UI/shield-removebg-preview.png");
	emptyShield = loadImage("assets/UI/shield_empty-removebg-preview.png");
	heart = loadImage("assets/UI/heart-removebg-preview (1).png");
	emptyHeart = loadImage("assets/UI/greyHeart-removebg-preview.png");

	story1 = loadImage("assets/UI/story1.png");
	story2 = loadImage("assets/UI/story2.png");

	death = loadImage("assets/UI/skullAndCrossbones-removebg-preview.png");

	button1Img = loadImage("assets/UI/start_button-removebg-preview.png");
	button2Img = loadImage("assets/UI/story_button-removebg-preview.png");
	button3Img = loadImage("assets/UI/controls_button-removebg-preview.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	database = firebase.database;

	form = new Form();
	form.hide();

	player = new Player();

	button1 = createSprite(windowWidth / 2 - 30, 250, 275, 140);
	button1.addImage(button1Img);
	//button1.position();
	button1.scale = 0.4;


	button2 = createSprite(windowWidth / 2 - 30, 420, 250, 170);
	button2.addImage(button2Img);
	//button2.position();
	button2.scale = 0.75;

	button3 = createSprite(windowWidth / 2 - 30, 590, 220, 110);
	button3.addImage(button3Img);
	//button3.position();
	button3.scale = 0.35;

	title = createElement("h2");

	logoBg = createSprite(445, 90, 110, 160);
	logoBg.shapeColor = "white";

	logo = createImg("assets/UI/RRHF-transformed-removebg-preview.png");
	logo.position(windowWidth / 8 + 150, 10);
	logo.size(200, 175);


}

function draw() {
	background("black");

	if (gameState === 0) {
		image(jungleBackround, 0, 0, windowWidth, windowHeight);

		textSize(60);
		fill("white");
		stroke("green");
		text("Rogue Robin Hood", windowWidth / 3, 70);
		text("and Friends", windowWidth / 3 + 90, 140);
		

		textSize(25);
		fill("white");
		text("Created by Michael Tom", 20, windowHeight - 20);

		if (mousePressedOver(button1)) {
			play0();
		}

		if (mousePressedOver(button2)) {
			howToPlay()
		}

		if (mousePressedOver(button3)) {
			story();
		}
	}

	if (gameState === 1) {
		image(forestBackround, 0, 0, windowWidth, windowHeight);
	}

	if (gameState === 2) {
		image(villageBackground, 0, 0, windowWidth, windowHeight);
	}

	if (gameState === 3) {
		image(castleBackground, 0, 0, windowWidth, windowHeight);
	}

	if (gameState === 4) {
		gameState.showEnd();
	}


	drawSprites();
}

function play0() {
	form.show();

	button1.hide();
	button2.hide();
	button3.hide();
}

function play1() {
	gameState = 1;

	button1.hide();
	button2.hide();
	button3.hide();
}

function play2() {
	gameState = 2;

	button1.hide();
	button2.hide();
	button3.hide();
}

function play3() {
	gameState = 3;

	button1.hide();
	button2.hide();
	button3.hide();


}


function howToPlay() {
	image(story1, windowWidth/3 - 50, 170, 600, 500);

	button1.hide();
	button2.hide();
	button3.hide();

}

function story() {
	image(story2, windowWidth/3 + 30, 170, 420, 500);

	button1.hide();
	button2.hide();
	button3.hide();

}