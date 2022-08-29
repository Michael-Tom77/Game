var button1, button2, button3, button4;
var form, placeholder, comfirmButton, greeting;
var player, allPlayers;
var logoBg;
var forestBackround, jungleBackround, castleBackground, villageBackground;
var startButton, storyButton, constrolsButton;
var coinPile;
var shield, shield1;
var heart1, heart2, heart3, emptyHeart1, emptyHeart2, emptyHeart3;
var story1, story2;
var death;
var firebase;
var Robin;
var friend;
var knight, warrior1, HP;
var storyImg, howToPlayImg;
var title;
var scoreCounter;
var message1;
var ground1, ground2, ground3;
var countDown;
var waveCount;
var input, confirmButton, greeting;
var form, game, player;
var bagOfCoinsImage;

var enemiesGroup = [];
var arrowsGroup = [];
var playersGroup = [];

var gameState = 0;
var wave = 0;
var coins = 0;
var time = 0;
var timeRemaining;
var dead = 0;

function preload() {
	//forestBackround = loadImage("assets/backgrounds/forestBg.png");
	betterForestBackround = loadImage("assets/backgrounds/betterForestBg-transformed.jpeg")
	jungleBackround = loadImage("assets/backgrounds/jungleBg.png");
	castleBackground = loadImage("assets/backgrounds/castleBg.png");
	villageBackground = loadImage("assets/backgrounds/village_bg-transformed.jpeg");

	RobinDyingLeftAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player1DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player1DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player1DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player1DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player1DyingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	RobinDyingRightAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player1DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player1DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player1DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player1DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player1DyingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);
	RobinWalkingLeftAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	RobinWalkingRightAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);


	player2DyingLeftAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player2DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player2DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player2DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player2DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player2DyingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	player2DyingRightAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player2DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player2DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player2DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player2DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player2DyingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);
	player2WalkingLeftAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player2WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player2WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player2WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player2WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player2WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	player2WalkingRightAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player2WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player2WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player2WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player2WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player2WalkingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);


	knightDyingLeftAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_knightDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_knightDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_knightDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_knightDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_knightDyingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	knightDyingRightAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_knightDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_knightDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_knightDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_knightDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_knightDyingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);
	knightWalkingLeftAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_knightWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_knightWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_knightWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_knightWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_knightWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	knightWalkingRightAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_knightWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_knightWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_knightWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_knightWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_knightWalkingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);



	warrior1DyingLeftAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_warrior1DyingLeftSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_warrior1DyingLeftSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_warrior1DyingLeftSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_warrior1DyingLeftSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_warrior1DyingLeftSpriteSheet-transformed-removebg-preview-removebg-preview.png"
	);
	warrior1DyingRightAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_warrior1DyingRightSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_warrior1DyingRightSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_warrior1DyingRightSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_warrior1DyingRightSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_warrior1DyingRightSpriteSheet-transformed-removebg-preview-removebg-preview.png"
	);
	warrior1WalkingLeftAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_warrior1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_warrior1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_warrior1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_warrior1WalkingLeftSpriteSheet-removebg-preview-removebg-preview (1).png",
		"assets/enemiesSpriteImages/A5_warrior1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	warrior1WalkingRightAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_warrior1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_warrior1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_warrior1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_warrior1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_warrior1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);


	HPDyingLeftAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_HPDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_HPDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_HPDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_HPDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_HPDyingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	HPDyingRightAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_HPDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_HPDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_HPDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_HPDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_HPDyingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);
	HPWalkingLeftAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_HPWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_HPWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_HPWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_HPWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_HPWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	HPWalkingRightAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_HPWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_HPWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_HPWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_HPWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_HPWalkingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);

	startButton = loadImage("assets/UI/start_button-removebg-preview.png");
	storyButton = loadImage("assets/UI/story_button-removebg-preview.png");
	constrolsButton = loadImage("assets/UI/controls_button-removebg-preview.png");
	//restartButton = loadImage("assets/UI/restart_Img-removebg-preview.png");
	restartButtonImg = loadImage("assets/UI/red_reset_logo.png");

	coinPile = loadImage("assets/UI/stackOfCoins-removebg-preview.png");
	bagOfCoins = loadImage("assets/UI/bagOfCoins-removebg-preview.png");
	shield = loadImage("assets/UI/shield-removebg-preview.png");
	emptyShield = loadImage("assets/UI/shield_empty-removebg-preview.png");
	heart = loadImage("assets/UI/heart-removebg-preview (1).png");
	emptyHeart = loadImage("assets/UI/greyHeart-removebg-preview.png");

	story1 = loadImage("assets/UI/story1.png");
	story2 = loadImage("assets/UI/story2.png");

	idleLeftP1 = loadImage("assets/playerSpriteImages/A1_player1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png");
	idleRightP1 = loadImage("assets/playerSpriteImages/A1_player1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png");

	idleLeftP2 = loadImage("assets/playerSpriteImages/A1_player2WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png");
	idleRightP2 = loadImage("assets/playerSpriteImages/A1_player2WalkingRightSpriteSheet-removebg-preview-removebg-preview.png");

	death = loadImage("assets/UI/skullAndCrossbones-removebg-preview.png");

	button1Img = loadImage("assets/UI/start_button-removebg-preview.png");
	button2Img = loadImage("assets/UI/story_button-removebg-preview.png");
	button3Img = loadImage("assets/UI/controls_button-removebg-preview.png");

	backImg = loadImage("assets/UI/backButtonImage-removebg-preview.png")

	leftArrow = loadImage("assets/UI/leftArrow-removebg-preview-removebg-preview.png");
	rightArrow = loadImage("assets/UI/rightArrow-removebg-preview-removebg-preview.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	database = firebase.database();

	button1 = createSprite(windowWidth / 2 - 30, 250, 275, 140);
	button1.addImage(button1Img);
	button1.scale = 0.4;

	button2 = createSprite(windowWidth / 2 - 30, 420, 250, 170);
	button2.addImage(button2Img);
	button2.scale = 0.75;

	button3 = createSprite(windowWidth / 2 - 30, 590, 220, 110);
	button3.addImage(button3Img);
	button3.scale = 0.35;

	Robin = createSprite(100, windowHeight - 100, 50, 100);
	Robin.addAnimation(
		"RDLA", RobinDyingLeftAnimation,
		"RDRA", RobinDyingRightAnimation,
		"RWLA", RobinWalkingLeftAnimation,
		"RWRA", RobinWalkingRightAnimation
	);
	Robin.addImage("idleLeftImgP1", idleLeftP1, "idleRightImgP1", idleRightP1, "deathImage", death);
	Robin.changeImage("idleLeftImgP1");

	friend = createSprite(windowWidth - 100, windowHeight - 100, 50, 100);
	friend.addAnimation(
		"P2DLA", player2DyingLeftAnimation,
		"P2DRA", player2DyingRightAnimation,
		"P2WLA", player2WalkingLeftAnimation,
		"P2WRA", player2WalkingRightAnimation
	);
	friend.addImage("idleLeftImgP2", idleLeftP2, "idleRightImgP2", idleRightP2);
	friend.changeImage("idleLeftImgP2");

	playersGroup.push(Robin);
	playersGroup.push(friend);

	/*
		knight = createSprite(100, windowHeight - 100, 50, 100);
		knight.addAnimation(
			"RDLA", knightDyingLeftAnimation,
			"RDRA", knightDyingRightAnimation,
			"RWLA", knightWalkingLeftAnimation,
			"RWRA", knightWalkingRightAnimation
		);
		knight.addImage("idleLeftImgP1", idleLeftP1, "idleRightImgP1", idleRightP1);
		knight.changeImage("idleLeftImgP1");
	
	*/

	title = createElement("h2");
	title.position(windowWidth / 3, 5);
	title.class("customTitle");
	message = `Rogue Robin Hood!
	<br> and Friends!`
	title.html(message);

	leader1 = createElement("h2");
	leader1.class("competitionText");
	leader1.position(width / 3 - 50, 80);

	leader2 = createElement("h2");
	leader2.class("competitionText");
	leader2.position(width / 3 - 50, 130);

	logoBg = createSprite(445, 90, 110, 160);
	logoBg.shapeColor = rgb(3, 46, 4);

	logo = createImg("assets/UI/RRHF-transformed-removebg-preview.png");
	logo.position(windowWidth / 8 + 150, 10);
	logo.size(200, 175);

	backButton = createSprite(windowWidth - 150, windowHeight - 100, 600, 500);
	backButton.addImage(backImg);
	backButton.scale = 0.35;
	backButton.visible = false;

	restartButton = createSprite(50, windowHeight / 2, 600, 500);
	restartButton.addImage("restartButtonImage", restartButtonImg);
	restartButton.scale = 0.15;

	howToPlayImg = createSprite(windowWidth / 2, 425, 600, 500);
	howToPlayImg.addImage("howToPlayImage", story1);
	howToPlayImg.scale = 0.55;
	howToPlayImg.visible = false;

	storyImg = createSprite(windowWidth / 2, 440, 600, 500);
	storyImg.addImage("storyImage", story2);
	storyImg.scale = 0.75;
	storyImg.visible = false;

	emptyHeart1 = createSprite(50, 50, 20, 20);
	emptyHeart1.addImage("emptyHeartImage1", emptyHeart);
	emptyHeart1.scale = 0.3;
	emptyHeart1.visible = false;
	emptyHeart2 = createSprite(120, 50, 20, 20);
	emptyHeart2.addImage("emptyHeartImage2", emptyHeart);
	emptyHeart2.scale = 0.3;
	emptyHeart2.visible = false;
	emptyHeart3 = createSprite(190, 50, 20, 20);
	emptyHeart3.addImage("emptyHeartImage3", emptyHeart);
	emptyHeart3.scale = 0.3;
	emptyHeart3.visible = false;

	heart1 = createSprite(50, 50, 20, 20);
	heart1.addImage("heartImg1", heart);
	heart1.scale = 0.25;
	heart1.visible = false;
	heart2 = createSprite(120, 50, 20, 20);
	heart2.addImage("heartImg2", heart);
	heart2.scale = 0.25;
	heart2.visible = false;
	heart3 = createSprite(190, 50, 20, 20);
	heart3.addImage("heartImg3", heart);
	heart3.scale = 0.25;
	heart3.visible = false;

	emptyShield1 = createSprite(width / 3, height - 400, 20, 20);
	emptyShield1.addImage("emptyShieldImg", emptyShield);
	emptyShield1.visible = false;
	shield1 = createSprite(width / 3, height - 400, 20, 20);
	shield1.addImage("shieldImg", shield);
	shield1.visible = false;

	shields = new Group();
	coins = new Group();

	form = new Form();
	game = new Game();
	player = new Player();

	playerCount = player.getCount();
}

function draw() {
	background("black");

	if (gameState === 0) {
		image(jungleBackround, 0, 0, windowWidth, windowHeight);

		textSize(25);
		fill("white");
		text("Created by Michael Tom", 20, windowHeight - 20);

		if (mousePressedOver(button1)) {
			gameState = 3
			game.updateGameState(3);
		}

		if (mousePressedOver(button2)) {
			gameState = 1
			game.updateGameState(1);
			backButton.visible = true;
		}

		if (mousePressedOver(button3)) {
			gameState = 2
			game.updateGameState(2);
			backButton.visible = true;
		}

		if (playerCount === 2) {
			gameState = 4
			game.updateGameState(4);
		}

		backButton.visible = false;
		howToPlayImg.visible = false;
		storyImg.visible = false;

		button1.visible = true;
		button2.visible = true;
		button3.visible = true;

		useRestartButton();
	}

	if (gameState === 1) {
		image(jungleBackround, 0, 0, windowWidth, windowHeight);

		backButton.visible = true;
		howToPlayImg.visible = true;

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;

		useRestartButton();
		clickBackButton();
	}

	if (gameState === 2) {
		image(jungleBackround, 0, 0, windowWidth, windowHeight);

		backButton.visible = true;
		storyImg.visible = true;

		
		button1.visible = false;
		button2.visible = false;
		button3.visible = false;

		useRestartButton();
		clickBackButton();
	}

	if (gameState === 3) {
		image(jungleBackround, 0, 0, windowWidth, windowHeight);

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;

		backButton.visible = true;

		form.display();
		//form.show();
		useRestartButton();
		clickBackButton();
	}

	if (gameState === 4) {
		image(betterForestBackround, 0, 0, windowWidth, windowHeight);
		button1.visible = false;
		button2.visible = false;
		button3.visible = false;

		Robin.changeImage("idleLeftImgP1");
		friend.changeImage("idleLeftImgP2");
		Robin.velocityY += 1.5;

		ground1 = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, 100);

		Robin.collide(ground1);
		friend.collide(ground1);

		game.collectables();

		time = 120;
		wave = 1;
		restartButton.visible = false;

		var currentTime = int(millis() / 1000);
		timeRemaining = time - currentTime

		showLife();
		showShield();
		showUI();
		game.showLeaderboard();

		constrols();
		spawnEnemies();
		collectCoins();
		collectShield();
		hit();
		useRestartButton();
	}

	if (gameState === 5) {
		image(villageBackground, 0, 0, windowWidth, windowHeight);
		Robin.changeImage("idleLeftImgP1");
		friend.changeImage("idleLeftImgP2");
		Robin.velocityY += 1.5;

		ground2 = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, 100);

		Robin.collide(ground2);
		friend.collide(ground2);

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;

		showLife();
		showShield();
		showUI();
		game.showLeaderboard();

		constrols();
		spawnEnemies();
		collectCoins();
		collectShield();
		hit();
		useRestartButton();
	}

	if (gameState === 6) {
		image(castleBackground, 0, 0, windowWidth, windowHeight);
		Robin.changeImage("idleLeftImgP1");
		friend.changeImage("idleLeftImgP2");

		ground3 = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, 100);

		Robin.collide(ground3);
		friend.collide(ground3);

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;

		showLife();
		showShield();
		showUI();
		game.showLeaderboard();

		constrols();
		spawnEnemies();
		collectCoins();
		collectShield();
		hit();
		useRestartButton();
	}

	//the end of the game when unsuccessful
	if (gameState === 7) {

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;
		swal({
			title: `Failed`,
			text: "You died and didn't complete the mission. Try again next time. <br> Thanks for playing!",
			imageUrl:
				"https://i.im.ge/2022/07/25/FDnGZW.png",
			imageSize: "100x100",
			confirmButtonText: "Ok"
		},
			function (isConfirm) {
				if (isConfirm) {
					location.reload();
				}
			}
		);

		useRestartButton();
	}

	//the end of the game when successful
	if (gameState === 8) {

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;
		swal({
			title: `Congratulations, you win!!!`,
			text: "Good job, you finished the mission. You shall go down in history! <br> Thanks for playing!",
			imageUrl:
				"https://i.im.ge/2022/07/25/FD4dXz.png",
			imageSize: "100x100",
			confirmButtonText: "Yay!"
		},
			function (isConfirm) {
				if (isConfirm) {
					location.reload();
				}
			}
		);

		useRestartButton();
	}

	drawSprites();
}

function showLife() {
	emptyHeart1.visible = true;
	emptyHeart2.visible = true;
	emptyHeart3.visible = true;

	if (player.life === 3) {
		heart3.visble = true;
		heart2.visible = true;
		heart1.visible = true;
	}

	if (player.life === 2) {
		heart3.visible = false;
	}

	if (player.life === 1) {
		heart2.visible = false;
	}

	if (player.life >= 0) {
		heart1.visible = false;
		dead = 1;
		gameState = 7;
	}

	if (dead >= 1) {
		player.velocityX = 0;
		player.velocityY = 0;

		Robin.changeImage("deathImage");
		//player.changeImage("deathImage");

		gameState = 7;
	}
}


function showShield() {
	emptyShield1.visible = true;

	if (player.shield <= 0) {
		shield1.visible = false;
	}

	if (player.shield === 1) {
		shield1.visible = true;
	}
}

function spawnEnemies() {
	if (enemiesGroup.length > 0) {
				//change the amount of enemies
		if (enemiesGroup.length < 10 && frameCount % 60 === 0) {
			var enemy = createSprite(0, windowHeight - 100, 50, 100);

			var rand = Math.round(random(1, 6));
			switch (rand) {
				case 1:
					enemy.addAnimation(
						"KDLA", knightDyingLeftAnimation,
						"KWLA", knightWalkingLeftAnimation,
					);
					enemy.velocityY += 1.5;
					enemy.velocityX += 5;
					enemy.changeAnimation("KWLA");
					enemy.x = 0;
					collisionArrows();

					break;
				case 2:
					enemy.addAnimation(
						"WDLA", warrior1DyingLeftAnimation,
						"WWLA", warrior1WalkingLeftAnimation,
					);
					enemy.velocityY += 1.5;
					enemy.velocityX += 5;
					enemy.changeAnimation("WWLA");
					enemy.x = 0;
					collisionArrows();

					break;
				case 3:
					enemy.addAnimation(
						"HPDLA", HPDyingLeftAnimation,
						"HPWLA", HPWalkingLeftAnimation,
					);
					enemy.velocityY += 1.5;
					enemy.velocityX += 5;
					enemy.changeAnimation("HPWLA");
					enemy.x = 0;
					collisionArrows();

					break;
				case 4:
					enemy.addAnimation(
						"KDRA", knightDyingRightAnimation,
						"KWRA", knightWalkingRightAnimation
					);
					enemy.velocityY += 1.5;
					enemy.velocityX -= 5;
					enemy.changeAnimation("KWRA");
					enemy.x = windowWidth;
					collisionArrows();

					break;
				case 5:
					enemy.addAnimation(
						"WDRA", warrior1DyingRightAnimation,
						"WWRA", warrior1WalkingRightAnimation
					);
					enemy.velocityY += 1.5;
					enemy.velocityX -= 5;
					enemy.changeAnimation("WWRA");
					enemy.x = windowWidth;
					collisionArrows();

					break;
				case 6:
					enemy.addAnimation(
						"HPDRA", HPDyingRightAnimation,
						"HPWRA", HPWalkingRightAnimation
					);
					enemy.velocityY += 1.5;
					enemy.velocityX -= 5;
					enemy.changeAnimation("HPWRA");
					enemy.x = windowWidth;
					collisionArrows();

					break;
				default: break;
			}
			enemy.lifetime = 500;
			enemiesGroup.push(enemy);
		}
	}
	else {
		var enemy = createSprite(0, windowHeight - 100, 50, 100);
		var rand = Math.round(random(1, 6));
		switch (rand) {
			case 1:
				enemy.addAnimation(
					"KDLA", knightDyingLeftAnimation,
					"KWLA", knightWalkingLeftAnimation,
				);
				enemy.velocityY += 1.5;
				enemy.velocityX += 5;
				enemy.changeAnimation("KWLA");
				enemy.x = 0;
				collisionArrows();

				break;
			case 2:
				enemy.addAnimation(
					"WDLA", warrior1DyingLeftAnimation,
					"WWLA", warrior1WalkingLeftAnimation,
				);
				enemy.velocityY += 1.5;
				enemy.velocityX += 5;
				enemy.changeAnimation("WWLA");
				enemy.x = 0;
				collisionArrows();

				break;
			case 3:
				enemy.addAnimation(
					"HPDLA", HPDyingLeftAnimation,
					"HPWLA", HPWalkingLeftAnimation,
				);
				enemy.velocityY += 1.5;
				enemy.velocityX += 5;
				enemy.changeAnimation("HPWLA");
				enemy.x = 0;
				collisionArrows();

				break;
			case 4:
				enemy.addAnimation(
					"KDRA", knightDyingRightAnimation,
					"KWRA", knightWalkingRightAnimation
				);
				enemy.velocityY += 1.5;
				enemy.velocityX -= 5;
				enemy.changeAnimation("KWRA");
				enemy.x = windowWidth;
				collisionArrows();

				break;
			case 5:
				enemy.addAnimation(
					"WDRA", warrior1DyingRightAnimation,
					"WWRA", warrior1WalkingRightAnimation
				);
				enemy.velocityY += 1.5;
				enemy.velocityX -= 5;
				enemy.changeAnimation("WWRA");
				enemy.x = windowWidth;
				collisionArrows();

				break;
			case 6:
				enemy.addAnimation(
					"HPDRA", HPDyingRightAnimation,
					"HPWRA", HPWalkingRightAnimation
				);
				enemy.velocityY += 1.5;
				enemy.velocityX -= 5;
				enemy.changeAnimation("HPWRA");
				enemy.x = windowWidth;
				collisionArrows();

				break;
			default: break;
		}
		enemy.lifetime = 500;
		enemiesGroup.push(enemy);
	}
}

function showUI() {
	scoreCounter = createElement("h2");
	scoreCounter.position(windowWidth - 300, 50);
	scoreCounter.class("UI");

	bagOfCoinsImage = createSprite(width / 2 - 130, 100, 30, 30);
	bagOfCoinsImage.addImage("BCImg", bagOfCoins);

	var message1 = `Coins: ${player.score}`;
	scoreCounter.html(message1);

	countDown = createElement("h2");
	countDown.position(windowWidth - 300, 15);
	countDown.class("UI");
	var message2 = `Time: ${timeRemaining}`
	countDown.html(message2);

	waveCount = createElement("h2");
	waveCount.position(windowWidth / 2, windowHeight - 50);
	waveCount.class("UI");
	var message3 = `Wave: ${wave}`;
	waveCount.html(message3);

	/*
		if (time > 0 && frameCount % 60 === 0) {
			time -= 1
		}
	
		if (time <= 0 && wave > 0) {
			wave += 1;
		}
		*/
}

function constrols() {
	if (dead <= 0) {
		if (keyDown("a")) {
			player.x = player.x - 5;
			player.update();
		}

		if (keyDown("d")) {
			player.x = player.x + 5;
			player.update();
		}

		if (keyDown("w")) {
			player.velocityY = -7;
			player.update();
		}

		if (keyDown("space") && keyDown("a")) {
			//change here
			var arrow = createSprite(player.x, player.y, 80, 10);
			arrow.velocityX -= 5
			arrow.addImage("leftArrowImg", leftArrow);
			arrowsGroup.push(arrow);
		}
		if (keyDown("space") && keyDown("d")) {
			var arrow2 = createSprite(player.x, player.y, 80, 10);
			arrow2.velocity += 5;
			arrow2.addImage("rightArrowImg", rightArrow);
			arrowsGroup.push(arrow2);
		}
	}
}

function collectShield(index) {
	players[index - 1].overlap(shields, function (collector, collected) {
		player.shield = 1;
		player.update();
		collected.remove();
	});
}

function collectCoins(index) {
	players[index - 1].overlap(coins, function (collector, collected) {
		player.score += 50;
		player.update();
		collected.remove();
	});
}

function hit() {
	if (player.collide(enemiesGroup[i]) && keyDown("a")) {
		if (player.shield === 1) {
			player.shield -= 1;
			player.x = player.x - 100
			player.update();
		}
		else {
			player.life -= 1;
			player.x = player.x - 100
			player.update();
		}

	}

	if (player.collide(enemiesGroup[i]) && keyDown("d")) {
		if (player.shield === 1) {
			player.shield -= 1;
			player.x = player.x + 100
			player.update();
		}
		else {
			player.life -= 1;
			player.x = player.x + 100
			player.update();
		}
	}

	if (player.collide(enemiesGroup[i])) {
		if (player.shield === 1) {
			player.shield -= 1;
			player.update();
		}
		else {
			player.life -= 1;
			player.update();
		}
	}

}

function useRestartButton() {
	if (mousePressedOver(restartButton)) {
		database.ref("/").set({
			playerCount: 0,
			gameState: 0,
			players: {},
			playersFinished: 0
		})
		window.location.reload();
	}
}

function collisionArrows() {
	if (arrowsGroup[0].isTouching(enemiesGroup)) {
		coins += 10;
		enemy.changeAnimation("WDLA");
		collector.remove();
		collected.remove();
	}
}

function clickBackButton(){
	if (mousePressedOver(backButton)) {
		gameState = 0;
		form.hide();
		//location.reload();
	}
}
