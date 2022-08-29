class Game {

  getGameState() {
    database.ref("gameState").on("value", (data) => {
      var state = data.val();
    })
  }

  updateGameState(state) {
    database.ref("/").update({
      gameState: state
    })
  }

  updatePlayerCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  collectables() {
    this.addSprites(shields, 4, shield, 0.02);
    this.addSprites(coins, 50, coinPile, 0.09);
  }

  addSprites(spriteGroup, numberOfSprites, spriteImage, scale) {
    for (var i = 0; i < numberOfSprites; i++) {
      var x;
      var y;

      x = random(100, width - 100);
      y = random(height - 50, height - 100);
    }
    var sprite = createSprite(x, y);
    sprite.addImage("sprite", spriteImage);

    sprite.scale = scale;
    spriteGroup.add(sprite);
  }

  play() {
    Player.getPlayersInfo();
    player.getPlayersFinished();

    if (allPlayers !== undefined) {
      var index = 0;
      for (var plr in allPlayers) {
        index = index + 1;

        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;
        var currentLife = allPlayers[plr].life;

        if (currentLife <= 0) {
          players[index - 1].changeImage("deadImg");
          players[index - 1].scale = 0.3;
        }

        players[index - 1].position.x = x;
        players[index - 1].position.y = y;

        if (index === player.index) {
          camera.position.y = players[index - 1].position.y;
          camera.position.x = players[index - 1].position.x;
        }
      }


      /*const finshLine = windowWidth - 1;

      if (player.positionY > finshLine) {
        gameState = 7;
        Player.playersFinished(player.rank);
        player.update();
      }
      */

      if(player.score){

      }

    }
  }

  showLeaderboard() {
    var leader1, leader2;
    var players = Object.values(allPlayers);
    if (
      (players[0].rank === 2 && players[1].rank === 2) ||
      players[0].rank === 1
    ) {
      leader1 =
        players[0].rank +
        "&emsp;" +
        players[0].name +
        "&emsp;" +
        players[0].score;

      leader2 =
        players[1].rank +
        "&emsp;" +
        players[1].name +
        "&emsp;" +
        players[1].score;
    }

    if (players[1].rank === 1) {
      leader1 =
        players[1].rank +
        "&emsp;" +
        players[1].name +
        "&emsp;" +
        players[1].score;

      leader2 =
        players[0].rank +
        "&emsp;" +
        players[0].name +
        "&emsp;" +
        players[0].score;
    }

    leader1.html(leader1);
    leader2.html(leader2);
  }
}