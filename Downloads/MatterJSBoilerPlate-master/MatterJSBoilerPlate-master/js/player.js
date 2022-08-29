class Player {
    constructor() {
      this.userName = null;
      this.index = null;
      this.positionX = 0;
      this.positionY = 0;
      this.life = 3;
      this.rank = 2;
      this.shield = 0;
      this.score = 0;
    }
  
    addPlayer() {
      var playerIndex = "players/player" + this.index;
  
      if (this.index === 1) {
        this.positionX = 100;
      } else {
        this.positionX = 1000;
      }
  
      database.ref(playerIndex).set({
        userName: this.userName,
        positionX: this.positionX,
        positionY: this.positionY,
        rank: this.rank,
        score: this.score,
        shield: this.shield,
        life: this.life
      });
    }
  
    getPosition() {
      var playerPositionRef = database.ref("players/player" + this.index);
      playerPositionRef.on("value", data => {
        var data = data.val();
        this.positionX = data.positionX;
        this.positionY = data.positionY;
      });
    }
  
    getCount() {
      var playerCountRef = database.ref("playerCount");
      playerCountRef.on("value", data => {
        playerCount = data.val();
      });
    }
  
    updateCount(count) {
      database.ref("/").update({
        playerCount: count
      });
    }
  
    update() {
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).update({
        positionX: this.positionX,
        positionY: this.positionY,
        score: this.score,
        rank: this.rank,
        life: this.life,
        shield: this.shield
      });
    }
  
    static getPlayersInfo() {
      var playerInfoRef = database.ref("players");
      playerInfoRef.on("value", data => {
        allPlayers = data.val();
      });
    }

    getPlayersFinished() {
      database.ref("playersFinished").on("value", data => {
        this.rank = data.val();
      });
    }
  
    static updatePlayersFinished(rank) {
      database.ref("/").update({
        playersFinished: rank
      });
    }
}